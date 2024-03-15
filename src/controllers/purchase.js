"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Requaring
const Product = require("../models/product");
const Purchase = require("../models/purchase");

/* -------------------------------------------------------------------------- */
//? Purchase Controller:
module.exports = {
  //! GET
  list: async (req, res) => {
    /*
        #swagger.tags = ["Purchases"]
        #swagger.summary = "List Purchases"
        #swagger.description = `
            You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
            <ul> Examples:
                <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                <li>URL/?<b>limit=10&page=1</b></li>
            </ul>
        `
    */

    const data = await res.getModelList(Purchase, {}, [
      "firmId",
      "brandId",
      "productId",
    ]);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Purchase),
      data,
    });
  },

  //* CRUD Processes:
  //! POST
  create: async (req, res) => {
    /*
        #swagger.tags = ["Purchases"]
        #swagger.summary = "Create Purchase"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                "firmId": "65343222b67e9681f937f304",
                "brandId": "65343222b67e9681f937f107",
                "productId": "65343222b67e9681f937f422",
                "quantity": 1,
                "price": 9.99
            }
        }
    */

    /* -------------------------------------------------------------------------- */
    //todo: Auto add userId to req.body:
    req.body.userId = req.user?._id;
    /* -------------------------------------------------------------------------- */
    //todo: Create:
    const data = await Purchase.create(req.body);
    /* -------------------------------------------------------------------------- */
    //todo: set product-quantity when Purchase process:
    const updateProduct = await Product.updateOne(
      { _id: data.productId },
      { $inc: { quantity: +data.quantity } }
    );

    res.status(201).send({
      error: false,
      data,
    });
  },

  //! /:id -> GET
  read: async (req, res) => {
    /*
        #swagger.tags = ["Purchases"]
        #swagger.summary = "Get Single Purchase"
    */

    /* -------------------------------------------------------------------------- */
    //todo: Read:
    const data = await Purchase.findOne({ _id: req.params.id }).populate([
      "firmId",
      "brandId",
      "productId",
    ]);

    res.status(200).send({
      error: false,
      data,
    });
  },

  //! /:id -> PUT / PATCH
  update: async (req, res) => {
    /*
        #swagger.tags = ["Purchases"]
        #swagger.summary = "Update Purchase"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                "firmId": "65343222b67e9681f937f304",
                "brandId": "65343222b67e9681f937f107",
                "productId": "65343222b67e9681f937f422",
                "quantity": 1,
                "price": 9.99
            }
        }
    */

    /* -------------------------------------------------------------------------- */
    if (req.body?.quantity) {
      //todo: get current product-quantity from the Purchase:
      const currentPurchase = await Purchase.findOne({ _id: req.params.id });
      //todo: different:
      const quantity = req.body.quantity - currentPurchase.quantity;
      //todo: set product-quantity when Purchase process:
      const updateProduct = await Product.updateOne(
        { _id: currentPurchase.productId },
        { $inc: { quantity: +quantity } }
      );
    }
    /* -------------------------------------------------------------------------- */
    //todo: Update:
    const data = await Purchase.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Purchase.findOne({ _id: req.params.id }),
    });
  },

  //! /:id -> DELETE
  delete: async (req, res) => {
    /*
        #swagger.tags = ["Purchases"]
        #swagger.summary = "Delete Purchase"
    */

    /* -------------------------------------------------------------------------- */
    //todo: get current product-quantity from the Purchase:
    const currentPurchase = await Purchase.findOne({ _id: req.params.id });
    // console.log(currentPurchase)

    /* -------------------------------------------------------------------------- */
    //todo: Delete:
    const data = await Purchase.deleteOne({ _id: req.params.id });

    /* -------------------------------------------------------------------------- */
    //todo: set product-quantity when Purchase process:
    const updateProduct = await Product.updateOne(
      { _id: currentPurchase.productId },
      { $inc: { quantity: -currentPurchase.quantity } }
    );

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
