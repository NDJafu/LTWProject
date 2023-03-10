const express = require("express")
const router = express.Router()

const ProductController = require("../controller/product.controller")

const authMiddleware = require("../middleware/auth")

router.route("/")
    .get(authMiddleware, ProductController.getAllProducts)
    .post(ProductController.insertProducts)

module.exports = router