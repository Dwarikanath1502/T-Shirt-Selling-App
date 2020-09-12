const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");   //file System

exports.getProductById = (req, res, next, id) =>{
    Product.findById(id)
    .populate("category")
    .exec((err, product) => {
        if (err) {
            return res.status(400).json({
                error: "Product not found..."
            })
        }
        req.product = product;
        next();
    })
}

exports.createProduct = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "Problem with Image..."
            })
        }
        //TODO: restriction on field
        let product = new Product(fields)

        //han=dle file here
        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.status(400).json({
                    error: "File size Exceeds..."
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type
        }

        //save to DB
        product.save((err, product) => {
            if (err) {
                return res.status(400).json({
                    error: "Saving a T-Shirt in DB Failed..."
                })
            }
            res.json(product)
        })
    })
}