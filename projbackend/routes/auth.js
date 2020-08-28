var express = require("express")
var router = express.Router()
const { check , validationResult} = require('express-validator');

const {signout , signup , signin} = require("../controllers/auth")


router.post(
    "/signup",[
    check("name").isLength({ min: 3 }).withMessage("Name should be 3 chars long"),
    check("email" , "Email is required").isEmail(),
    check("password" , "password should be atleast 5 char").isLength({min: 5})  ,
], signup
);

router.post(
    "/signin",[
    check("email" , "Email is required").isEmail(),
    check("password" , "Password is Required!").isLength({min: 1})  ,
], 
signin
);


router.get("/signout" , signout)

module.exports = router;