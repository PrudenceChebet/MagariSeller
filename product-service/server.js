require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./model');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('Connected to MongoDB (Product)'))
.catch(err => console.error(err));

// Routes
app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.json(saved);
});

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(process.env.PORT, () => {
  console.log(`Product service running on port ${process.env.PORT}`);
});
