const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: {
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
  paymentMethod: {
    type: String,
    enum: ['cash', 'bank_transfer', 'online', 'check', 'other'],
    default: 'cash'
  },
  purpose: {
    type: String,
    trim: true
  },
  isAnonymous: {
    type: Boolean,
    default: false
  },
  receiptNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  notes: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'received', 'cancelled'],
    default: 'received'
  },
  contactInfo: {
    email: String,
    phone: String,
    address: String
  }
}, {
  timestamps: true
});

// Index for efficient querying
donationSchema.index({ date: -1, status: 1 });

module.exports = mongoose.model('Donation', donationSchema); 