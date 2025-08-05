const express = require('express');
const { body, validationResult } = require('express-validator');
const Experience = require('../models/Experience');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all experiences with filtering
router.get('/', async (req, res) => {
  try {
    const { category, isHighlighted, search, limit = 50, page = 1 } = req.query;
    
    let query = {};
    
    if (category) query.category = category;
    if (isHighlighted !== undefined) query.isHighlighted = isHighlighted === 'true';
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } }
      ];
    }

    const experiences = await Experience.find(query)
      .sort({ date: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Experience.countDocuments(query);

    res.json({
      experiences,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get experiences error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single experience
router.get('/:id', async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    res.json(experience);
  } catch (error) {
    console.error('Get experience error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create experience (admin only)
router.post('/', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('category').isIn(['match', 'training', 'tournament', 'event', 'achievement', 'general']).withMessage('Valid category is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const experience = new Experience(req.body);
    await experience.save();

    res.status(201).json({
      message: 'Experience created successfully',
      experience
    });
  } catch (error) {
    console.error('Create experience error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update experience (admin only)
router.put('/:id', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }

    res.json({
      message: 'Experience updated successfully',
      experience
    });
  } catch (error) {
    console.error('Update experience error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete experience (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }

    res.json({
      message: 'Experience deleted successfully',
      experience
    });
  } catch (error) {
    console.error('Delete experience error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Toggle highlight status (admin only)
router.put('/:id/highlight', adminAuth, async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }

    experience.isHighlighted = !experience.isHighlighted;
    await experience.save();

    res.json({
      message: `Experience ${experience.isHighlighted ? 'highlighted' : 'unhighlighted'} successfully`,
      experience
    });
  } catch (error) {
    console.error('Toggle highlight error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get highlighted experiences
router.get('/highlighted/list', async (req, res) => {
  try {
    const highlightedExperiences = await Experience.find({
      isHighlighted: true
    }).sort({ date: -1 }).limit(10);

    res.json(highlightedExperiences);
  } catch (error) {
    console.error('Get highlighted experiences error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get experiences by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { limit = 20 } = req.query;

    const experiences = await Experience.find({
      category: category
    }).sort({ date: -1 }).limit(parseInt(limit));

    res.json(experiences);
  } catch (error) {
    console.error('Get experiences by category error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get experience statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const totalExperiences = await Experience.countDocuments();
    const highlightedCount = await Experience.countDocuments({ isHighlighted: true });
    
    const categoryBreakdown = await Experience.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);

    const moodBreakdown = await Experience.aggregate([
      { $group: { _id: '$mood', count: { $sum: 1 } } }
    ]);

    const monthlyStats = await Experience.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 12 }
    ]);

    res.json({
      totalExperiences,
      highlightedCount,
      categoryBreakdown,
      moodBreakdown,
      monthlyStats
    });
  } catch (error) {
    console.error('Get experience stats error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 