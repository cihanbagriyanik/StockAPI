"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */

// sync():

/* -------------------------------------------------------------------------- */
module.exports = async function () {
  // return null;

  // /* CLEAR DATABASE */
  // const { mongoose } = require("../configs/dbConnection");
  // await mongoose.connection.dropDatabase();
  // console.log("- Database and all data DELETED!");
  // /* CLEAR DATABASE */

  /* User */
  const User = require("../models/user");
  await User.deleteMany(); // !!! Clear collection.
  await User.create({
    _id: "65343222b67e9681f937f001",
    username: "admin",
    password: "1q2w3e4R!",
    email: "admin@site.com",
    firstName: "admin",
    lastName: "admin",
    isActive: true,
    isStaff: true,
    isAdmin: true,
  });
  await User.create({
    _id: "65343222b67e9681f937f003",
    username: "staff",
    password: "1q2w3e4R!",
    email: "staff@site.com",
    firstName: "staff",
    lastName: "staff",
    isActive: true,
    isStaff: true,
    isAdmin: false,
  });
  await User.create({
    _id: "65343222b67e9681f937f005",
    username: "test",
    password: "1q2w3e4R!",
    email: "test@site.com",
    firstName: "test",
    lastName: "test",
    isActive: true,
    isStaff: false,
    isAdmin: false,
  });

  /* Brand */
  const Brand = require("../models/brand");
  await Brand.deleteMany(); // !!! Clear collection.
  await Brand.create({
    _id: "65858b4ec9144ab09f89cbcc",
    name: "Apple",
    image:
      "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white-429x500.png",
  });
  await Brand.create({
    _id: "6586c99dc9144ab09f89d122",
    name: "Meta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Meta_Inc._logo.jpg",
  });
  await Brand.create({
    _id: "65858d8bc9144ab09f89cc78",
    name: "Dell",
    image:
      "https://help.ruk-com.in.th/wp-content/uploads/2017/11/Dell-logo-267x200.jpg.webp",
  });

  /* Category */
  const Category = require("../models/category");
  await Category.deleteMany(); // !!! Clear collection.
  await Category.create({
    _id: "65858ca8c9144ab09f89cbe4",
    name: "Technology",
  });

  /* Firm */
  const Firm = require("../models/firm");
  await Firm.deleteMany(); // !!! Clear collection.
  await Firm.create({
    _id: "65858c6fc9144ab09f89cbd8",
    name: "Apple",
    phone: "+1 415-486-4800",
    address: "San Francisco, California",
    image:
      "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white-429x500.png",
  });
  await Firm.create({
    _id: "65858e10c9144ab09f89cc98",
    name: "Dell GmbH",
    phone: "06997927350",
    address: "Osterfeldstraße 84, 85737 Ismaning",
    image:
      "https://help.ruk-com.in.th/wp-content/uploads/2017/11/Dell-logo-267x200.jpg.webp",
  });

  /* Product */
  const Product = require("../models/product");
  await Product.deleteMany(); // !!! Clear collection.
  await Product.create({
    _id: "65858cb8c9144ab09f89cc08",
    name: "iPhone",
    categoryId: "65858ca8c9144ab09f89cbe4",
    brandId: "65858b4ec9144ab09f89cbcc",
    quantity: 1000,
  });
  await Product.create({
    _id: "65858cb8c9144ab09f89cc10",
    name: "MacBook Pro",
    categoryId: "65858ca8c9144ab09f89cbe4",
    brandId: "65858b4ec9144ab09f89cbcc",
    quantity: 1000,
  });
  await Product.create({
    _id: "65858cb8c9144ab09f89cc12",
    name: "Macbook Air",
    categoryId: "65858ca8c9144ab09f89cbe4",
    brandId: "65858b4ec9144ab09f89cbcc",
    quantity: 1000,
  });
  await Product.create({
    _id: "65858cb8c9144ab09f89cc14",
    name: "AirPods",
    categoryId: "65858ca8c9144ab09f89cbe4",
    brandId: "65858b4ec9144ab09f89cbcc",
    quantity: 1000,
  });
  await Product.create({
    _id: "65858cb8c9144ab09f89cc16",
    name: "Magic Mouse",
    categoryId: "65858ca8c9144ab09f89cbe4",
    brandId: "65858b4ec9144ab09f89cbcc",
    quantity: 1000,
  });
  await Product.create({
    _id: "65858cb8c9144ab09f89cc18",
    name: "Magic Keyboard",
    categoryId: "65858ca8c9144ab09f89cbe4",
    brandId: "65858b4ec9144ab09f89cbcc",
    quantity: 1000,
  });
  await Product.create({
    _id: "65858cb8c9144ab09f89cc20",
    name: "Monitors 32 inch",
    categoryId: "65858ca8c9144ab09f89cbe4",
    brandId: "65858d8bc9144ab09f89cc78",
    quantity: 1000,
  });

  /* Purchase */
  const Purchase = require("../models/purchase");
  await Purchase.deleteMany(); // !!! Clear collection.

  /* Sale */
  const Sale = require("../models/sale");
  await Sale.deleteMany(); // !!! Clear collection.

  /* Finished */
  console.log("* Synchronized.");
};
