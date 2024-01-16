const express = require("express")
const path = require('path')
const rootDir =require('../utils/path')
const adminData = require('./Admin')
const router = express.Router();

router.get("/", (req, res, next) => {
    const products = adminData.products
    res.render('shop', {prods: products, pageTitle: 'shop', path: '/'})
  });

  module.exports = router