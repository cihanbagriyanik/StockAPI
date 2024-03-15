"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Requaring
const { mongoose } = require("../configs/dbConnection");

const passwordEncrypt = require("../helpers/passwordEncrypt");
/* -------------------------------------------------------------------------- */
// {
//   "username": "admin",
//   "password": "1q2w3e4R!",
//   "email": "admin@site.com",
//   "firstName": "admin",
//   "lastName": "admin",
//   "isActive": true,
//   "isStaff": true,
//   "isAdmin": true
// }
// {
//   "username": "staff",
//   "password": "1q2w3e4R!",
//   "email": "staff@site.com",
//   "firstName": "staff",
//   "lastName": "staff",
//   "isActive": true,
//   "isStaff": true,
//   "isAdmin": false
// }
// {
//   "username": "test",
//   "password": "1q2w3e4R!",
//   "email": "test@site.com",
//   "firstName": "test",
//   "lastName": "test",
//   "isActive": true,
//   "isStaff": false,
//   "isAdmin": false
// }
/* -------------------------------------------------------------------------- */
//? User Model:
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },

    firstName: {
      type: String,
      trim: true,
      required: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isStaff: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

/* -------------------------------------------------------------------------- */
//? Schema Configs:
// UserSchema.pre(["save", "updateOne"], function (next) {
//   // get data from "this" when create;
//   // if process is updateOne, data will receive in "this._update"
//   const data = this?._update || this;

//   // email@domain.com
//   const isEmailValidated = data.email
//     ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) // test from "data".
//     : true;

//   if (isEmailValidated) {
//     if (data?.password) {
//       // pass == (min 1: lowerCase, upperCase, Numeric, @$!%*?& + min 8 chars)
//       const isPasswordValidated =
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
//           data.password
//         );

//       if (isPasswordValidated) {
//         this.password = data.password = passwordEncrypt(data.password);
//         this._update = data; // updateOne will wait data from "this._update".
//       } else {
//         next(new Error("Password not validated."));
//       }
//     }

//     next(); // Allow to save.
//   } else {
//     next(new Error("Email not validated."));
//   }
// });

/* -------------------------------------------------------------------------- */
module.exports = mongoose.model("User", UserSchema);
