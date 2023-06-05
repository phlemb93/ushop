const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
       title: {
        type: String,
        required: true
       },
       category: {
        type: String,
        required: true
       },
       description: {
        type: String,
        required: true
       },
       price: {
        type: Number,
        required: true
       },
       color: {
        type: String,
        required: true
       },
       images: [
        { type: String, required: true },
        { type: String },
        { type: String },
        ],
    }, { timestamps: true }
)



module.exports = mongoose.model('Product', ProductSchema)