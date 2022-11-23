const express = require("express");
const productController = require("../controllers/product.controller");
const router = express.Router();

router
  .route("/")
  .get(productController.getProduct)
  .post(productController.createProduct);

router.route("/:id").patch(productController.updateProduct)
module.exports = router;
