const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminData = require("./routes/Admin");
const shopRoutes = require("./routes/Shop");
const app = express();
app.set('view engine', 'pug');
app.set('views','views')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
 

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404')
});

//creates the server and passes itself
app.listen(3000);
