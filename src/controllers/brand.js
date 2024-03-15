"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Stock API
----------------------------------------------------------------------------- */
//? Requaring
const Brand = require("../models/brand");

/* -------------------------------------------------------------------------- */
//? Brand Controller:
module.exports = {
  //! GET
  list: async (req, res) => {
    /*
        #swagger.tags = ["Brands"]
        #swagger.summary = "List Brands"
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

    const data = await res.getModelList(Brand);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Brand),
      data,
    });
  },

  //* CRUD Processes:
  //! POST
  create: async (req, res) => {
    /*
        #swagger.tags = ["Brands"]
        #swagger.summary = "Create Brand"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                "name": "Brand 1",
                "image": "http://imageURL"
            }
        }
    */

    const data = await Brand.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  //! /:id -> GET
  read: async (req, res) => {
    /*
        #swagger.tags = ["Brands"]
        #swagger.summary = "Get Single Brand"
    */

    const data = await Brand.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  //! /:id -> PUT / PATCH
  update: async (req, res) => {
    /*
        #swagger.tags = ["Brands"]
        #swagger.summary = "Update Brand"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                "name": "Brand 1",
                "image": "http://imageURL"
            }
        }
    */

    const data = await Brand.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Brand.findOne({ _id: req.params.id }),
    });
  },

  //! /:id -> DELETE
  delete: async (req, res) => {
    /*
        #swagger.tags = ["Brands"]
        #swagger.summary = "Delete Brand"
    */

    const data = await Brand.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
