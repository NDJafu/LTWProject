const Product = require("../models/Product");

const getAllProducts = (req, res) => {
  Product.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const searchProducts = async (req, res) => {
  const { productName } = req.query;
  const queryObject = {};
  if (productName) {
    queryObject.productName = { $regex: productName, $options: "i" };
  }
  let product = await Product.find(queryObject);
  res.status(200).json(product);
};
const getProductDetail = async (req, res) => {
  try {
    const { id } = req.params;
    Product.findOne({ _id: id }).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getCartProducts = (req, res) => {
  try {
    const { name } = req.params;
    Product.find({ productName: name.split(",") }).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  searchProducts,
  getProductDetail,
  getAllProducts,
  getCartProducts,
};
