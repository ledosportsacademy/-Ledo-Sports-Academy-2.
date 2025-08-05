const express = require('express');
const { body, validationResult } = require('express-validator');
const Activity = require('../models/Activity');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all activities with filtering
router.get('/', async (req, res) => {
  try {
    const { status, type, priority, limit = 50, page = 1 } = req.query;
    
    let query = { isActive: true };
    
    if (status) query.status = status;
    if (type) query.type = type;
    if (priority) query.priority = priority;

    const activities = await Activity.find(query)
      .sort({ date: -1, createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Activity.countDocuments(query);

    res.json({
      activities,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get activities error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get recent activities
router.get('/recent', async (req, res) => {
  try {
    const recentActivities = await Activity.find({
      isActive: true,
      status: 'recent'
    }).sort({ date: -1 }).limit(10);

    res.json(recentActivities);
  } catch (error) {
    console.error('Get recent activities error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get upcoming activities
router.get('/upcoming', async (req, res) => {
  try {
    const upcomingActivities = await Activity.find({
      isActive: true,
      status: 'upcoming'
    }).sort({ date: 1 }).limit(10);

    res.json(upcomingActivities);
  } catch (error) {
    console.error('Get upcoming activities error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single activity
router.get('/:id', async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.json(activity);
  } catch (error) {
    console.error('Get activity error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create activity (admin only)
router.post('/', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('date').isISO8601().withMessage('Valid date is required'),
  body('status').isIn(['upcoming', 'ongoing', 'completed', 'cancelled']).withMessage('Valid status is required'),
  body('type').isIn(['match', 'training', 'event', 'trial', 'tournament']).withMessage('Valid type is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const activity = new Activity(req.body);
    await activity.save();

    res.status(201).json({
      message: 'Activity created successfully',
      activity
    });
  } catch (error) {
    console.error('Create activity error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update activity (admin only)
router.put('/:id', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('date').isISO8601().withMessage('Valid date is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const activity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    res.json({
      message: 'Activity updated successfully',
      activity
    });
  } catch (error) {
    console.error('Update activity error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete activity (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const activity = await Activity.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    res.json({
      message: 'Activity deleted successfully',
      activity
    });
  } catch (error) {
    console.error('Delete activity error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update activity status (admin only)
router.put('/:id/status', [
  adminAuth,
  body('status').isIn(['upcoming', 'ongoing', 'completed', 'cancelled']).withMessage('Valid status is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const activity = await Activity.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    res.json({
      message: 'Activity status updated successfully',
      activity
    });
  } catch (error) {
    console.error('Update activity status error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get activities by date range
router.get('/date-range/:start/:end', async (req, res) => {
  try {
    const { start, end } = req.params;
    const startDate = new Date(start);
    const endDate = new Date(end);

    const activities = await Activity.find({
      isActive: true,
      date: { $gte: startDate, $lte: endDate }
    }).sort({ date: 1 });

    res.json(activities);
  } catch (error) {
    console.error('Get activities by date range error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 