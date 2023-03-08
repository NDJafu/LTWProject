const express = require("express");

const router = express.Router();

const {
  ifUserExist,
  getAllUser,
  registerUser,
  loginUser,
} = require("../controller/user");

const {
  searchProducts,
  getProductDetail,
  getAllProducts,
} = require("../controller/product");

router.get("/", getAllProducts);

router.get("/search", searchProducts);

router.get("/detail/:id", getProductDetail);

router.get("/checkEmail", ifUserExist);

router.get("/getUser", getAllUser);

router.post("/registerAccount", registerUser);

router.post("/login", loginUser);

module.exports = router;
