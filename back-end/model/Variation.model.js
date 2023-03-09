const mongoose = require("mongoose")

const VariationSchema = mongoose.Schema({
    product_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductCategory",
        require: true
    },
    name: {
        type: String,
        require: [true, "This variation need a name"],
        trim: true,
        max: [10, "The name should shorter than 10 characters"]
    }
})

module.exports = mongoose.model("Variation", VariationSchema)