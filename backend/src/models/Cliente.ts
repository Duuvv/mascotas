import {Schema, model } from "mongoose";

const clientSchema = new Schema({
    name: {type: String, Required: true},
    email: {type: String, required: true},
    address: {type: String}
}, {timestamps: true})

export const Client = model("CLient", clientSchema);