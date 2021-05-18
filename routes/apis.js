const express = require("express");
const orderController = require("../controllers/api/orderController");
const router = express.Router();

// API for creating an order
router.post('/orders', orderController.createOrder)
// API for taking orders
router.patch('/orders/:id', orderController.takeOrder)
// API for getting the list of all orders
router.get('/orders', orderController.orderList)
module.exports = router;
