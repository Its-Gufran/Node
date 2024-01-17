const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/Admin");
const shopRoutes = require("./routes/Shop");
const errorController = require("./constrollers/error")
// const expressHbs = require("express-handlebars");

const app = express();

// app.engine('hbs', expressHbs());
app.set('view engine', "ejs");
app.set('views', "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


//creates the server and passes itself
app.listen(3000);
