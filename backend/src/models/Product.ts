import {Schema, model} from "mongoose";

const productSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String},
    price: {type: Number, required: true},
    description: {type: String}
}, { timestamps: true});

export const Product = model("Product", productSchema);