const express = require("express");
const path = require("path");
const adminController = require("../constrollers/admin");

const router = express.Router();

router.get("/add-product", adminController.getAddProduct); 
router.get("/products", adminController.getProducts); 

//Now this middleware will run only in cases of post request and similarly we can make it for only get requests
//name of the two routes can be same if the method is different
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
