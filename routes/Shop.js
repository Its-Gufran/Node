const express = require("express");
const path = require("path");
const shopController = require("../constrollers/shop");
const router = express.Router();

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.get("/checkout", shopController.getCheckout);

module.exports = router;
