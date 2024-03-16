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
  .get(permissions.isLogin, brand.list)
  .post(permissions.isLogin, brand.create);

router
  .route("/:id")
  .get(permissions.isLogin, brand.read)
  .put(permissions.isAdmin || permissions.isStaff, brand.update)
  .patch(permissions.isAdmin || permissions.isStaff, brand.update)
  .delete(permissions.isAdmin, brand.delete);

/* -------------------------------------------------------------------------- */
module.exports = router;
