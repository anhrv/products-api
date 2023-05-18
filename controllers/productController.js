const factory = require("./handlerFactory");
const Product = require("../models/productModel");

exports.TopProducts = (req, res, next) => {
  req.query.limit = "10";
  req.query.sort = "-rating,price";
  req.query.fields = "title,price,rating,description";
  next();
};

exports.getAllProducts = factory.getAll(Product);
exports.getOneProduct = factory.getOne(Product);
exports.createProduct = factory.createOne(Product);
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
