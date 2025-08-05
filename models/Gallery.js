const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String
  },
  category: {
    type: String,
    enum: ['events', 'training', 'matches', 'tournaments', 'general', 'achievements'],
    default: 'general'
  },
  tags: [{
    type: String,
    trim: true
  }],
  date: {
    type: Date,
    default: Date.now
  },
  photographer: {
    type: String,
    trim: true
  },
  isTop5: {
    type: Boolean,
    default: false
  },
  top5Order: {
    type: Number,
    min: 1,
    max: 5
  },
  isActive: {
    type: Boolean,
    default: true
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  metadata: {
    fileSize: Number,
    dimensions: {
      width: Number,
      height: Number
    },
    format: String
  }
}, {
  timestamps: true
});

// Index for efficient querying
gallerySchema.index({ category: 1, date: -1 });
gallerySchema.index({ isTop5: 1, top5Order: 1 });

module.exports = mongoose.model('Gallery', gallerySchema); 