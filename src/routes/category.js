"use strict";
/* -------------------------------------------------------
  * NODEJS EXPRESS | Stock API
------------------------------------------------------- */
//? Requaring
const router = require("express").Router();

const permissions = require("../middlewares/permissions");

const category = require("../controllers/category");

/* -------------------------------------------------------------------------- */
//! URL: /categories
router
  .route("/")
  .get(permissions.isLogin, category.list)
  .post(permissions.isLogin, category.create);

router
  .route("/:id")
  .get(permissions.isLogin, category.read)
  .put(permissions.isAdmin || permissions.isStaff, category.update)
  .patch(permissions.isAdmin || permissions.isStaff, category.update)
  .delete(permissions.isAdmin, category.delete);

/* -------------------------------------------------------------------------- */
module.exports = router;
