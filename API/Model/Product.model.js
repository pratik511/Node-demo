const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  title: { type: String },
  isActive: { type: Boolean, default: true },
});

let productpostModel = model("productpost", ProductSchema, "productpost");

module.exports = productpostModel;
