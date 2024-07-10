const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Mongo connected successfully!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
