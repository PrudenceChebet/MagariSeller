const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: String,
  amount: Number,
  method: String
});

module.exports = mongoose.model('Payment', paymentSchema);
