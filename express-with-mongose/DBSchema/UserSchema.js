// @/models.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false,
    default: true
  }
});

const UsersModel = mongoose.model("User", UserSchema,"Users"
);

module.exports = { UsersModel };
