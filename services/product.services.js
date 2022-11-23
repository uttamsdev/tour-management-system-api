const Product = require("../models/Product");

const getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

const createProductService = async (req) => {
  const product = await Product.create(req.body);
  return product;
};

const updateProductService = async (id, data) => {
  const result = await Product.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  //updateOne  method validation check kore na.. se jono runValidator true kore dite hoi.
};

module.exports = {
  getProductsService,
  createProductService,
  updateProductService,
};
