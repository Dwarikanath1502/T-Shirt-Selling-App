const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        maxlength: 32,
        required: true
    },
    description:{
        type: String,
        trim: true,
        maxlength: 2500,
        required: true
    },
    price: {
        type: Number,
        maxlength: 32,
        required: true,
        trim: true
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number,
        default: true
    },
    photo:{
        type: Buffer,
        contentType: String
    }
},{timestamps: true})

mongoose.exports = mongoose.model("Product",productSchema)