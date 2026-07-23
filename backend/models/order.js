const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems: Array,
    amount: Number,
    status: String,
    createdAt: Date
});

module.exports = mongoose.model('Order', orderSchema);