"use strict";
/* --------------------------------------------------------------------------
  * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const brand = require("../controllers/brand");

const permissions = require("../middlewares/permissions");

/* -------------------------------------------------------------------------- */
//! URL: /brands
router
  .route("/")
  .get(permissions.isStaff, brand.list)
  .post(permissions.isStaff, brand.create);

router
  .route("/:id")
  .get(permissions.isStaff, brand.read)
  .put(permissions.isAdmin, brand.update)
  .patch(permissions.isAdmin, brand.update)
  .delete(permissions.isAdmin, brand.delete);

/* -------------------------------------------------------------------------- */
module.exports = router;
