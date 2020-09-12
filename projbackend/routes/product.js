var express = require("express")
var router = express.Router()

const {getProductById, createProduct} = require("../controllers/product")
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")

//all of params
router.param("userID", getUserById);
router.param("productId", getProductById);

//all of actual routes
router.post("./product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct)



module.exports = router;