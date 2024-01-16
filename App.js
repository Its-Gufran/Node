const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminData = require("./routes/Admin");
const shopRoutes = require("./routes/Shop");
// const expressHbs = require("express-handlebars");

const app = express();

// app.engine('hbs', expressHbs());
app.set('view engine', "ejs");
app.set('views', "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

//creates the server and passes itself
app.listen(3000);
