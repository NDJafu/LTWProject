const ProductCategory = require("./model/Product_Category.model")
const connectDB = require("./db/connet.db")
const jsonProductCategory = require("./data/product_category.data.json")
const jsonChildProductCategory = require("./data/product_child_category.data.json")
require("dotenv").config()


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        //await ProductCategory.deleteMany()
        //await ProductCategory.create(jsonProductCategory)
        await ProductCategory.create(jsonChildProductCategory)
        console.log("Success!!!")
        process.exit(0)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

start()