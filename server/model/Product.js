const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
       title: {
        type: String,
        required: true
       },
       cat: {
        type: String,
        required: true
       },
       desc: {
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
       img: [
        { type: String, required: true },
        { type: String },
        { type: String },
        ],
    }, { timestamps: true }
)



module.exports = mongoose.model('Product', ProductSchema)