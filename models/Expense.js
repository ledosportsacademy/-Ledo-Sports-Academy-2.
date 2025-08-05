const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'INR',
    enum: ['INR', 'USD', 'EUR']
  },
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    enum: ['equipment', 'facility_maintenance', 'coaching', 'events', 'utilities', 'transport', 'food', 'other'],
    default: 'other'
  },
  description: {
    type: String,
    trim: true
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'bank_transfer', 'online', 'check', 'other'],
    default: 'cash'
  },
  vendor: {
    type: String,
    trim: true
  },
  receiptNumber: {
    type: String,
    trim: true
  },
  approvedBy: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'paid', 'cancelled'],
    default: 'pending'
  },
  notes: {
    type: String,
    trim: true
  },
  attachments: [{
    filename: String,
    url: String
  }]
}, {
  timestamps: true
});

// Index for efficient querying
expenseSchema.index({ date: -1, category: 1, status: 1 });

module.exports = mongoose.model('Expense', expenseSchema); 