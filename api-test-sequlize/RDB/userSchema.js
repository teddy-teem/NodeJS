const { sequelize, DataTypes } = require("./config");

const UserSchema = sequelize.define("Users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  token: {
    type: DataTypes.TEXT,
    required: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  email: {
    primaryKey: true,
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
});

module.exports = UserSchema;
