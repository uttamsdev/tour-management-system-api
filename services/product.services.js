const Product = require("../models/Product");

const  getProductsService = async() => {
    const products = await Product.find({});
    return products;
}

const createProductService = async(req) => {
    const product = await Product.create(req.body);
    return product;
}

module.exports = {getProductsService, createProductService};