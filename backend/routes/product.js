const express = require("express");
const router = express.Router();
const { getProducts,getProductById  } = require("../controllers/product");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getProductById);

module.exports = router;