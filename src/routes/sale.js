"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const permissions = require("../middlewares/permissions");

const sale = require("../controllers/sale");

/* -------------------------------------------------------------------------- */
//! URL: /sales
router
  .route("/")
  .get(permissions.isLogin, sale.list)
  .post(permissions.isLogin, sale.create);

router
  .route("/:id")
  .get(permissions.isLogin, sale.read)
  .put(permissions.isAdmin || permissions.isStaff, sale.update)
  .patch(permissions.isAdmin || permissions.isStaff, sale.update)
  .delete(permissions.isAdmin || permissions.isStaff, sale.delete);

/* -------------------------------------------------------------------------- */
module.exports = router;
