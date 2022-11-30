const express = require("express");
const { findAll, insertOne, deleteOne } = require("../utils/dbUtils");
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

app.get("/addGroup", async (req, res) => {
  try {
    newGroup = new Group(res.body);

    const data = await insertOne(newGroup);
    console.log(data);

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

app.get("/deleteGroup", async (req, res) => {
  try {
    deletedGroup = new Group(res.body);

    const data = await deleteOne(newGroup);
    console.log(data);

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = app;
