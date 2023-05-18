const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/productModel");

// config file
dotenv.config({ path: "./config.env" });

// connect to database
const db = process.env.DATABASE;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DATABASE CONNECTION SUCCESSFUL"));

// read json
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/mockProducts.json`, "utf-8")
);

// import data
const importData = async () => {
  try {
    await Product.create(products);
    console.log("DATA SUCCESSFULLY IMPORTED");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// delete data
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log("DATA SUCCESSFULLY DELETED");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
