const express = require('express');
const { body, validationResult } = require('express-validator');
const HeroSlide = require('../models/HeroSlide');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all hero slides
router.get('/', async (req, res) => {
  try {
    const slides = await HeroSlide.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
    res.json(slides);
  } catch (error) {
    console.error('Get hero slides error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single hero slide
router.get('/:id', async (req, res) => {
  try {
    const slide = await HeroSlide.findById(req.params.id);
    if (!slide) {
      return res.status(404).json({ error: 'Hero slide not found' });
    }
    res.json(slide);
  } catch (error) {
    console.error('Get hero slide error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create hero slide (admin only)
router.post('/', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('backgroundImage').notEmpty().withMessage('Background image is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const slide = new HeroSlide(req.body);
    await slide.save();

    res.status(201).json({
      message: 'Hero slide created successfully',
      slide
    });
  } catch (error) {
    console.error('Create hero slide error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update hero slide (admin only)
router.put('/:id', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('backgroundImage').notEmpty().withMessage('Background image is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const slide = await HeroSlide.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!slide) {
      return res.status(404).json({ error: 'Hero slide not found' });
    }

    res.json({
      message: 'Hero slide updated successfully',
      slide
    });
  } catch (error) {
    console.error('Update hero slide error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete hero slide (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const slide = await HeroSlide.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!slide) {
      return res.status(404).json({ error: 'Hero slide not found' });
    }

    res.json({
      message: 'Hero slide deleted successfully',
      slide
    });
  } catch (error) {
    console.error('Delete hero slide error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update slide order (admin only)
router.put('/:id/order', [
  adminAuth,
  body('order').isInt({ min: 0 }).withMessage('Order must be a non-negative integer')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const slide = await HeroSlide.findByIdAndUpdate(
      req.params.id,
      { order: req.body.order },
      { new: true }
    );

    if (!slide) {
      return res.status(404).json({ error: 'Hero slide not found' });
    }

    res.json({
      message: 'Slide order updated successfully',
      slide
    });
  } catch (error) {
    console.error('Update slide order error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Toggle slide active status (admin only)
router.put('/:id/toggle', adminAuth, async (req, res) => {
  try {
    const slide = await HeroSlide.findById(req.params.id);
    if (!slide) {
      return res.status(404).json({ error: 'Hero slide not found' });
    }

    slide.isActive = !slide.isActive;
    await slide.save();

    res.json({
      message: `Slide ${slide.isActive ? 'activated' : 'deactivated'} successfully`,
      slide
    });
  } catch (error) {
    console.error('Toggle slide status error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 