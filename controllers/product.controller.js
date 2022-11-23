const { updateOne } = require("../models/Product");
const Product = require("../models/Product");
const {
  getProductsService,
  createProductService,
  updateProductService,
} = require("../services/product.services");
const createProduct = async (req, res, next) => {
  try {
    // const product = new Product(req.body);
    // const result = await product.save();

    const result = await createProductService(req);
    res.status(200).json({
      status: "success",
      message: "Data successfully posted",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Data is not posted",
      error: err.message,
    });
  }
};

const getProduct = async (req, res, next) => {
  try {
    const products = await getProductsService();
    res.send(products);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Cannot get the data",
      err: error.message,
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await updateProductService(id,req.body);
    res.status(200).json({
        status: "Success",
        message: "Successfully updated the product"
    })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Cannot get the data",
      err: error.message,
    });
  }
};

module.exports = { getProduct, createProduct, updateProduct };
