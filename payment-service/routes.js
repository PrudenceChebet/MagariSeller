const express = require('express');
const router = express.Router();
const Payment = require('./model');

// POST /payments – process a payment
router.post('/payments', async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to process payment' });
  }
});

// GET /payments – list all payments
router.get('/payments', async (req, res) => {
  const payments = await Payment.find();
  res.json(payments);
});

module.exports = router;
