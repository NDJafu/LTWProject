const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    product_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductCategory",
        require: true
    },
    name: {
        type: String,
        require: [true, "This product need a name"],
        trim: true,
        max: [30, "The name should shorter than 30 characters"]
    },
    description_title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Product', ProductSchema)