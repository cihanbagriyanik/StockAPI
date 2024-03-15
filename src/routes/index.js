"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

/* -------------------------------------------------------------------------- */
//? Routes:
//! URL: /

// auth:
router.use("/auth", require("./auth"));

// token:
router.use("/tokens", require("./token"));

// user:
router.use("/users", require("./user"));

// category:
router.use("/categories", require("./category"));

// brand:
router.use("/brands", require("./brand"));

// firm:
router.use("/firms", require("./firm"));

// product:
router.use("/products", require("./product"));

// purchase:
router.use("/purchases", require("./purchase"));

// sale:
router.use("/sales", require("./sale"));

// document:
router.use("/documents", require("./document"));

/* -------------------------------------------------------------------------- */
module.exports = router;
