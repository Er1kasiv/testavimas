const express = require('express');
const router = express.Router();
const orderService = require('../services/orderService');

router.post('/', (req, res) => {
    const order = orderService.createOrder(req.body);
    res.status(201).json(order);
});

router.get('/', (req, res) => {
    res.json(orderService.getOrders());
});

module.exports = router;
