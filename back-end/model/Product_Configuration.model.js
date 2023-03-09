const mongoose = require("mongoose")

const ProductConfigurationSchema = mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true
    },
    variation_option_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VariationOption",
        require: true
    }
})

module.exports = mongoose.model("ProductConfiguration", ProductConfigurationSchema)