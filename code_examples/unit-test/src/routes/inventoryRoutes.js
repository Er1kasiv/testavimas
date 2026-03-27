const express = require('express');
const router = express.Router();
const inventoryService = require('../services/inventoryService');

router.post('/', (req, res) => {
    const item = inventoryService.addItem(req.body);
    res.status(201).json(item);
});

router.get('/', (req, res) => {
    res.json(inventoryService.getInventory());
});

module.exports = router;
