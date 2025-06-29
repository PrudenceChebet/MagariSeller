const express = require('express');
const router = express.Router();
const Product = require('./model');

// GET /products
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products); // No formatting, just raw data from DB
});

// POST /products
router.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

module.exports = router;
