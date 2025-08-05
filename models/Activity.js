const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  type: {
    type: String,
    enum: ['match', 'training', 'event', 'trial', 'tournament'],
    default: 'event'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  redirectUrl: {
    type: String,
    trim: true
  },
  openNewTab: {
    type: Boolean,
    default: false
  },
  location: {
    type: String,
    trim: true
  },
  participants: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for efficient querying
activitySchema.index({ date: 1, status: 1 });

module.exports = mongoose.model('Activity', activitySchema); 