const express = require('express');
const orderRoutes = require('./routes/orderRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
app.use(express.json());

app.use('/orders', orderRoutes);
app.use('/inventory', inventoryRoutes);

module.exports = app;
