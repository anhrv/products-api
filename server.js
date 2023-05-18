const mongoose = require("mongoose");
const dotenv = require("dotenv");

//uncaught exception handler
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION. Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

//config and express app
dotenv.config({ path: "./config.env" });
const app = require("./app");

//databse connection
const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful"));

//server setup
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening for request on port ${port}`);
});

//unhandled rejection handler
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION. Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
