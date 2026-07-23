const express = require("express");
const router = express.Router();
const { createOrder, getOrders, getOrderById } = require("../controllers/order");

router.route("/orders").get(getOrders);
router.route("/order/:id").get(getOrderById);
router.route("/orders").post(createOrder);
module.exports = router;