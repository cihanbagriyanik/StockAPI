"use strict";
/* --------------------------------------------------------------------------
  * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const permissions = require("../middlewares/permissions");

const firm = require("../controllers/firm");

/* -------------------------------------------------------------------------- */
//! URL: /firms
router
  .route("/")
  .get(permissions.isLogin, firm.list)
  .post(permissions.isLogin, firm.create);

router
  .route("/:id")
  .get(permissions.isLogin, firm.read)
  .put(permissions.isAdmin || permissions.isStaff, firm.update)
  .patch(permissions.isAdmin || permissions.isStaff, firm.update)
  .delete(permissions.isAdmin, firm.delete);

/* -------------------------------------------------------------------------- */
module.exports = router;
