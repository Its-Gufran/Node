const express = require("express")
const path = require("path")
const rootDir =require('../utils/path')
const router = express.Router();

const products = []

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'Views', 'add-product.html')
    );
  });
  
  //Now this middleware will run only in cases of post request and similarly we can make it for only get requests
  //name of the two routes can be same if the method is different
  router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect("/");
  });


exports.routes =router;
exports.products = products;