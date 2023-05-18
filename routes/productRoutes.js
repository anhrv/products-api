const express = require("express");
const productController = require("../controllers/productController");

// initialize router
const router = express.Router();

router
  .route("/top-10")
  .get(productController.TopProducts, productController.getAllProducts);

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getOneProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
