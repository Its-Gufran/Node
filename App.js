const express = require("express");
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/Admin')
const shopRoutes = require("./routes/Shop")
const app = express();
app.use(bodyParser.urlencoded({extended: false}))

//middleware
//next is used to go to next middleware
//use allows us to add middleware functions
//next is used to go to next middleware

app.use(adminRoutes)
app.use(shopRoutes)


//creates the server and passes itself
app.listen(3000);
