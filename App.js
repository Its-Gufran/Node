const express = require("express");
const path = require("path")
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/Admin')
const shopRoutes = require("./routes/Shop")
const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
//middleware
//next is used to go to next middleware
//use allows us to add middleware functions
//next is used to go to next middleware

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'Views','error.html'))
})


//creates the server and passes itself
app.listen(3000);
