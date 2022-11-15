const express = require("express");
const { findAll } = require("../utils/dbUtils");
const User = require("../models/userSchema").UserModel;

const app = express();

app.get("/getAllUsers", async (req, res) => {
  try {
    const data = await findAll(User);
    console.log(data);

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = app;
