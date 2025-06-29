require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Payment = require('./model');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB (Payment)'))
.catch(err => console.error(err));

app.post('/payments', async (req, res) => {
  const newPayment = new Payment(req.body);
  const saved = await newPayment.save();
  res.json(saved);
});

app.get('/payments', async (req, res) => {
  const payments = await Payment.find();
  res.json(payments);
});

app.listen(process.env.PORT, () => {
  console.log(`Payment service running on port ${process.env.PORT}`);
});
