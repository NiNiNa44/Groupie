const express = require("express");

const app = express();

let userProfile;

app.get("/success", (req, res) => res.send(userProfile));
app.get("/error", (req, res) => res.send("error logging in"));

module.exports = app;
