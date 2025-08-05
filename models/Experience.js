const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['match', 'training', 'tournament', 'event', 'achievement', 'general'],
    default: 'general'
  },
  author: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  participants: [{
    type: String,
    trim: true
  }],
  images: [{
    type: String
  }],
  tags: [{
    type: String,
    trim: true
  }],
  isHighlighted: {
    type: Boolean,
    default: false
  },
  mood: {
    type: String,
    enum: ['excellent', 'good', 'neutral', 'challenging', 'difficult'],
    default: 'good'
  },
  weather: {
    type: String,
    trim: true
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Index for efficient querying
experienceSchema.index({ date: -1, category: 1 });

module.exports = mongoose.model('Experience', experienceSchema); 