const mongoose = require("mongoose")

const VariationOptionSchema = mongoose.Schema({
    variation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Variation"
    },
    value: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("VariationOption", VariationOptionSchema)