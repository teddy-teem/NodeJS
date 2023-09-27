const { UsersModel } = require("../DBSchema/UserSchema");

exports.getAllUsersFromMongo = async () => {
  try {
    return await UsersModel.find();
  } catch (error) {
    throw (error);
  }
};
exports.createUserInMongo = async (data) => {
    const newUser = new UsersModel({...data})
    return await newUser.save().then(res => {
        console.log(res);
        return res;
    }).catch(e=>{console.log(e)});
};
