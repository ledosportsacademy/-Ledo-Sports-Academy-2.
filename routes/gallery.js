const express = require('express');
const { body, validationResult } = require('express-validator');
const Gallery = require('../models/Gallery');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all gallery items with filtering
router.get('/', async (req, res) => {
  try {
    const { category, isTop5, search, limit = 50, page = 1 } = req.query;
    
    let query = { isActive: true };
    
    if (category) query.category = category;
    if (isTop5 !== undefined) query.isTop5 = isTop5 === 'true';
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { photographer: { $regex: search, $options: 'i' } }
      ];
    }

    const galleryItems = await Gallery.find(query)
      .sort({ date: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Gallery.countDocuments(query);

    res.json({
      galleryItems,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get gallery items error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single gallery item
router.get('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }
    res.json(galleryItem);
  } catch (error) {
    console.error('Get gallery item error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create gallery item (admin only)
router.post('/', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('imageUrl').notEmpty().withMessage('Image URL is required'),
  body('category').isIn(['events', 'training', 'matches', 'tournaments', 'general', 'achievements']).withMessage('Valid category is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const galleryItem = new Gallery(req.body);
    await galleryItem.save();

    res.status(201).json({
      message: 'Gallery item created successfully',
      galleryItem
    });
  } catch (error) {
    console.error('Create gallery item error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update gallery item (admin only)
router.put('/:id', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('imageUrl').notEmpty().withMessage('Image URL is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const galleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }

    res.json({
      message: 'Gallery item updated successfully',
      galleryItem
    });
  } catch (error) {
    console.error('Update gallery item error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete gallery item (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }

    res.json({
      message: 'Gallery item deleted successfully',
      galleryItem
    });
  } catch (error) {
    console.error('Delete gallery item error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Toggle top 5 status (admin only)
router.put('/:id/top5', adminAuth, async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }

    galleryItem.isTop5 = !galleryItem.isTop5;
    
    if (galleryItem.isTop5) {
      // Get the highest order number and add 1
      const maxOrder = await Gallery.findOne({ isTop5: true }).sort({ top5Order: -1 });
      galleryItem.top5Order = maxOrder ? maxOrder.top5Order + 1 : 1;
    } else {
      galleryItem.top5Order = null;
    }

    await galleryItem.save();

    res.json({
      message: `Gallery item ${galleryItem.isTop5 ? 'added to' : 'removed from'} top 5 successfully`,
      galleryItem
    });
  } catch (error) {
    console.error('Toggle top 5 error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update top 5 order (admin only)
router.put('/:id/top5-order', [
  adminAuth,
  body('top5Order').isInt({ min: 1, max: 5 }).withMessage('Order must be between 1 and 5')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const galleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      { top5Order: req.body.top5Order },
      { new: true }
    );

    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }

    res.json({
      message: 'Top 5 order updated successfully',
      galleryItem
    });
  } catch (error) {
    console.error('Update top 5 order error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get top 5 gallery items
router.get('/top5/list', async (req, res) => {
  try {
    const top5Items = await Gallery.find({
      isTop5: true,
      isActive: true
    }).sort({ top5Order: 1 }).limit(5);

    res.json(top5Items);
  } catch (error) {
    console.error('Get top 5 gallery items error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get gallery items by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { limit = 20 } = req.query;

    const galleryItems = await Gallery.find({
      category: category,
      isActive: true
    }).sort({ date: -1 }).limit(parseInt(limit));

    res.json(galleryItems);
  } catch (error) {
    console.error('Get gallery items by category error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Increment view count
router.put('/:id/view', async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }

    res.json({
      message: 'View count updated successfully',
      views: galleryItem.views
    });
  } catch (error) {
    console.error('Update view count error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get gallery statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const totalItems = await Gallery.countDocuments({ isActive: true });
    const top5Count = await Gallery.countDocuments({ isTop5: true, isActive: true });
    const totalViews = await Gallery.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: null, total: { $sum: '$views' } } }
    ]);
    
    const categoryBreakdown = await Gallery.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);

    const monthlyStats = await Gallery.aggregate([
      { $match: { isActive: true } },
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
      totalItems,
      top5Count,
      totalViews: totalViews[0]?.total || 0,
      categoryBreakdown,
      monthlyStats
    });
  } catch (error) {
    console.error('Get gallery stats error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 