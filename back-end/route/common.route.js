const productCategoryRouter = require("./product_category.route")
const productRouter = require("./product.route")
const userRouter = require("./user.route")

function route(app) {
    app.use("/product_category", productCategoryRouter)
    app.use("/product", productRouter)
    app.use("/user", userRouter)
}

module.exports = route