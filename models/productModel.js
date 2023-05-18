const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title of product is required"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description of product is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price of product is required"],
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  stock: {
    type: Number,
    default: 1,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  thumbnail: { type: String },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
