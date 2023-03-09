const ProductCategoryController = require("../controller/product_category.controller")
const express = require("express")
const router = express.Router()

router.route("/")
    .get(ProductCategoryController.getAllProductCategory)
    
router.route("/:id")
    .get(ProductCategoryController.getProductCategoty)

module.exports = router