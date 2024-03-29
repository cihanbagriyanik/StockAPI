"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Middleware Permissions
/* -------------------------------------------------------------------------- */
module.exports = {
  isLogin: (req, res, next) => {
    if (process.env.NODE_ENV == "dev") return next();

    if (req.user && req.user.isActive) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must login.");
    }
  },

  isAdmin: (req, res, next) => {
    if (process.env.NODE_ENV == "dev") return next();

    if (req.user && req.user.isActive && req.user.isAdmin) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must be Admin.");
    }
  },

  isStaff: (req, res, next) => {
    if (process.env.NODE_ENV == "dev") return next();

    if (req.user && req.user.isActive && req.user.isStaff) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must be Staff.");
    }
  },
};
