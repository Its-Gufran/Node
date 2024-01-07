const express = require("express")

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.send(
      '<form action = "/admin/add-product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add Product</button></input></form>'
    );
  });
  
  //Now this middleware will run only in cases of post request and similarly we can make it for only get requests
  //name of the two routes can be same if the method is different
  router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });


  module.exports = router