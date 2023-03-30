<<<<<<< HEAD
const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
=======
const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url);
>>>>>>> huy.back_end
};

module.exports = connectDB;
