const express = require("express");
const orderController = require("../controllers/api/orderController");
const router = express.Router();

// creating an order
router.post('/orders', orderController.createOrder)

module.exports = router;
