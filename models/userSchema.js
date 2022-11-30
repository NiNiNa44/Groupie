const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const usermodel = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  ownedGroups: {
    type: Array,
    required: true,
    unique: false,
  },
  memberGroups: {
    type: Array,
    required: true,
    unique: false,
  },
});

// Compile model from schema
const UserModel = mongoose.model("UserModel", usermodel);

module.exports = { UserModel };