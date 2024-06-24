const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const uploadController = require("./controllers/uploadController");

// db connecting
mongoose
  .connect(
    "mongodb+srv://shantanu167basak:real_estate@cluster0.a1rvfrv.mongodb.net/"
  )
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
app.use("/images", express.static("public/images"));

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authController);
app.use("/property", propertyController);
app.use("/upload", uploadController);

// starting server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server has been started"));
