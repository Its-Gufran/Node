const express = require("express")
const path = require("path")
const rootDir =require('../utils/path')
const router = express.Router();


router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'Views', 'add-product.html')
    );
  });
  
  //Now this middleware will run only in cases of post request and similarly we can make it for only get requests
  //name of the two routes can be same if the method is different
  router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });


  module.exports = router