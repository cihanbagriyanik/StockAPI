"use strict";
/* --------------------------------------------------------------------------
  * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const permissions = require("../middlewares/permissions");

const purchase = require("../controllers/purchase");

/* -------------------------------------------------------------------------- */
//! URL: /purchases
router
  .route("/")
  .get(permissions.isLogin, purchase.list)
  .post(permissions.isLogin, purchase.create);

router
  .route("/:id")
  .get(permissions.isLogin, purchase.read)
  .put(permissions.isAdmin || permissions.isStaff, purchase.update)
  .patch(permissions.isAdmin || permissions.isStaff, purchase.update)
  .delete(permissions.isAdmin || permissions.isStaff, purchase.delete);

/* -------------------------------------------------------------------------- */
module.exports = router;
