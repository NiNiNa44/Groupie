// console.info('Declaring dependencies...');
require("dotenv").config();

const express = require("express");
const { urlencoded, json } = require("body-parser");
const session = require("express-session");
const passport = require("passport");

/* Include routers here */
const userRouters = require("./routers/userShemaRouters");
const groupRouters = require("./routers/groupSchemaRouters");
const authRouters = require("./routers/authRouters");
const googleAuthRouters = require("./routers/googleAuthRouters");

const app = express();

require("./utils/dbUtils");

const PORT = 5000 | process.env.PORT;

// console.info('Initialising request body parser for the server app...');
// console.info('Extended is set as true to allow browser to stay authenticated as opposed to just with Postman. Source: https://stackoverflow.com/questions/46628069/passport-local-strategy-working-in-postman-but-not-in-browser');
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);
app.use(require("cookie-parser")());
app.use(passport.initialize());
app.use(passport.session());

require("./utils/auth");
require("./utils/googleAuth");

//register routers
app.use("", userRouters);
app.use("", groupRouters);
app.use("", googleAuthRouters);
app.use("", authRouters);

/*
 **
 ** Add new resources here
 **
 */

// console.info('...loaded resources.');

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
