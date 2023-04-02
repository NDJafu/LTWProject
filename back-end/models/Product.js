const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },
    sizes: {
      type: Array,
      required: [true, "Please provide product sizes"],
      default: [],
    },
    // description: {
    //   type: String,
    //   required: [true, 'Please provide product description'],
    //   maxlength: [1000, 'Description can not be more than 1000 characters'],
    // },
    // category: {
    //   type: String,
    //   required: [true, 'Please provide product category'],
    //   enum: ['Men', 'Women', 'Kid'],
    // },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
