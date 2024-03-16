"use strict";
/* --------------------------------------------------------------------------
  * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const permissions = require("../middlewares/permissions");

const product = require("../controllers/product");

/* -------------------------------------------------------------------------- */
//! URL: /products
router
  .route("/")
  .get(permissions.isLogin, product.list)
  .post(permissions.isLogin, product.create);

router
  .route("/:id")
  .get(permissions.isLogin, product.read)
  .put(permissions.isAdmin || permissions.isStaff, product.update)
  .patch(permissions.isAdmin || permissions.isStaff, product.update)
  .delete(permissions.isAdmin, product.delete);

/* -------------------------------------------------------------------------- */
module.exports = router;
