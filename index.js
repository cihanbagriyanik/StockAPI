"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
/*
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors morgan jsonwebtoken swagger-autogen swagger-ui-express redoc-express nodemailer
    
    // $ touch .env
    $ touch .gitignore
    https://www.toptal.com/developers/gitignore  (“node”) then copy paste
    
    $ mkdir logs
    $ nodemon
*/
/* -------------------------------------------------------------------------- */
//? Required Modules:
const express = require("express");
const app = express();

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* -------------------------------------------------------------------------- */
//? Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* -------------------------------------------------------------------------- */
//? Middlewares:

// Accept JSON:
app.use(express.json());
/* -------------------------------------------------------------------------- */
//! BE AND FE CONNECT
//? CORS
const cors = require("cors");

app.use(
  cors({
    origin: [
      "https://stock-management-app-cihan.vercel.app",
      "https://stock-management-app-react-redux-formik-6logrn17n.vercel.app/",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

//! BE AND FE CONNECT

// Check Token:
app.use(require("./src/middlewares/authentication"));

// morgan-logger:
// app.use(require("./src/middlewares/logger")); //*IN Comment coz of Deployment

// res.getModelList:
app.use(require("./src/middlewares/findSearchSortPage"));

/* -------------------------------------------------------------------------- */
//? Routes:
// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to Stock Management API",
    isLogin: req.isLogin,
    documents: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

// Routes:
app.use(require("./src/routes"));

/* -------------------------------------------------------------------------- */
//? errorHandler:
app.use(require("./src/middlewares/errorHandler"));

/* -------------------------------------------------------------------------- */
//? RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* -------------------------------------------------------------------------- */
//? Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clears database.
