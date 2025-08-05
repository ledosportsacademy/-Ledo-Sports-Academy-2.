const mongoose = require('mongoose');

const weeklyFeeSchema = new mongoose.Schema({
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  memberName: {
    type: String,
    required: true,
    trim: true
  },
  weekStartDate: {
    type: Date,
    required: true
  },
  weekEndDate: {
    type: Date,
    required: true
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
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'partial', 'waived'],
    default: 'pending'
  },
  paymentDate: {
    type: Date
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'bank_transfer', 'online', 'check', 'other'],
    default: 'cash'
  },
  receiptNumber: {
    type: String,
    trim: true
  },
  notes: {
    type: String,
    trim: true
  },
  collectedBy: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for efficient querying
weeklyFeeSchema.index({ memberId: 1, weekStartDate: 1 });
weeklyFeeSchema.index({ paymentStatus: 1, weekStartDate: 1 });

module.exports = mongoose.model('WeeklyFee', weeklyFeeSchema); 