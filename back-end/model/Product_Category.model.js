const mongoose = require("mongoose")

const CategoryProductSchema = mongoose.Schema({
    parent_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductCategory"
    },
    category_name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("ProductCategory", CategoryProductSchema)