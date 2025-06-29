require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Order = require('./model');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('Connected to MongoDB (Order)'))
.catch(err => console.error(err));

app.post('/orders', async (req, res) => {
  const newOrder = new Order(req.body);
  const saved = await newOrder.save();
  res.json(saved);
});

app.get('/orders', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

app.listen(process.env.PORT, () => {
  console.log(`Order service running on port ${process.env.PORT}`);
});
