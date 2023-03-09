const express = require("express")
const router = express.Router()
const ProductController = require("../controller/product.controller")

router.route("/")
    .get(ProductController.getAllProducts)
    .post(ProductController.insertProducts)

module.exports = router