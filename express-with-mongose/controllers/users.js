const Mongo = require("../models/Mongo");
exports.getAllUsersFromMongo = async (req, res) => {
  try {
    const allUsers = await Mongo.getAllUsersFromMongo();
    console.log("🚀 ~ file: users.js:5 ~ exports.getAllUsersFromMongo= ~ allUsers", allUsers)
    res.send({ status: "ok", message: "successfully fetched", data: allUsers });
  } catch (error) {
    res.send(new Error({ error, message: "error occur", status: 400 }));
  }
};
exports.createUserInMongo = async (req, res) => {
  try {
    console.log("req===", req.body);
    const response = await Mongo.createUserInMongo({...req.body});
    res.send({ status: "ok", message: "successfully created", data: response });
  } catch (error) {
    res.send(new Error({ error, message: "error occur", status: 400 }));
  }
};
