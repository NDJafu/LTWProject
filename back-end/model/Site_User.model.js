const mongoose = require("mongoose")

const SiteUserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        match: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    }
})

module.exports = mongoose.model("User", SiteUserSchema)