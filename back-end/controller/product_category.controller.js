const ProductCategory = require("../model/Product_Category.model")

class ProductCategoryController {
    async getAllProductCategory (req, res) {
        try {
            const productCategories = await ProductCategory.find({})
            res.status(200).json(productCategories)
        } catch (error) {
            console.log(error.message)
        }
    }
    async getProductCategoty (req, res) {
        try {
            const {id} = req.params
            const productCategory = await ProductCategory.find({_id: id})
            res.status(200).json(productCategory) 
        } catch (error) {
            console.log(error.message)
            
        }
    }

    // async insertMany(req, res, next) {

    // }
}

module.exports = new ProductCategoryController