var express = require("express")
var router = express.Router()
const { check , validationResult} = require('express-validator');

const {signout , signup} = require("../controllers/auth")


router.post("/signup",[
    check("name").isLength({ min: 3 }).withMessage("Name should be 3 chars long"),
    check("email" , "Email is required").isEmail(),
    check("password" , "password should be atleast 5 char").isLength({min: 5})  ,
], signup);
router.get("/signout" , signout)

module.exports = router;