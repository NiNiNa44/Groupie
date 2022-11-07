const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const usermodel = new Schema({
  username: {
    //should be encrypted
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },

});

// Compile model from schema
const UserModel = mongoose.model("UserModel", usermodel);

module.exports = { UserModel };