const express = require("express");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: false}))

//middleware
//next is used to go to next middleware
//use allows us to add middleware functions
//next is used to go to next middleware
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action = "/product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add Product</button></input></form>'
  );
});

//Now this middleware will run only in cases of post request and similarly we can make it for only get requests
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

//creates the server and passes itself
app.listen(3000);
