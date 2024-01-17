const express = require("express");
const path = require("path");
const productsController = require("../constrollers/products");

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);

//Now this middleware will run only in cases of post request and similarly we can make it for only get requests
//name of the two routes can be same if the method is different
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
