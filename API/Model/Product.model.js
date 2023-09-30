const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: { type: String },
    image: { type: String },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let productpostModel = model("productpost", ProductSchema, "productpost");

module.exports = productpostModel;
