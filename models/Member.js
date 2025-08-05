const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    min: 3,
    max: 100
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'male'
  },
  phone: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  address: {
    type: String,
    trim: true
  },
  emergencyContact: {
    name: String,
    phone: String,
    relationship: String
  },
  membershipType: {
    type: String,
    enum: ['junior', 'senior', 'elite', 'coach'],
    default: 'junior'
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  profileImage: {
    type: String
  },
  skills: [{
    type: String,
    trim: true
  }],
  achievements: [{
    title: String,
    date: Date,
    description: String
  }],
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Index for efficient querying
memberSchema.index({ name: 1, isActive: 1 });

module.exports = mongoose.model('Member', memberSchema); 