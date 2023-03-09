const express = require("express")
const app = express()
const connectDB = require("./db/connet.db")
require("dotenv").config()

const productCategoryRouter = require("./route/product_category.route")
const productRouter = require("./route/product.route")
const userRouter = require("./route/user.route")

app.use(express.json())

app.use("/adidas/product_category", productCategoryRouter)
app.use("/adidas/product", productRouter)
app.use("/adidas/user", userRouter)

const port = process.env.PORT || 8060

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening in port ${port}...`))
    } catch (error) {
        console.log(error.message)
    }
}

start()