const express = require("express");
const { findAll } = require("../utils/dbUtils");
const Group = require("../models/groupSchema").GroupModel;

const app = express();

app.get("/getAllGroups", async (req, res) => {
  try {
    const data = await findAll(Group);
    console.log(data);

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = app;
