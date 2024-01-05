
const express = require('express')

const app = express()

//use allows us to add middleware functions
//next is used to go to next middleware
app.use('/',(req, res, next) => {
    console.log('First middleware')
    next()
})



//creates the server and passes itself
app.listen(3000);

