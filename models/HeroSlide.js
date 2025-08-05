const mongoose = require('mongoose');

const heroSlideSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  backgroundImage: {
    type: String,
    required: true
  },
  ctaText: {
    type: String,
    trim: true
  },
  ctaLink: {
    type: String,
    trim: true
  },
  redirectUrl: {
    type: String,
    trim: true
  },
  openNewTab: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('HeroSlide', heroSlideSchema); 