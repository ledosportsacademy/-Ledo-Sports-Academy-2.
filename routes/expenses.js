const express = require('express');
const { body, validationResult } = require('express-validator');
const Expense = require('../models/Expense');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all expenses with filtering
router.get('/', async (req, res) => {
  try {
    const { category, status, startDate, endDate, limit = 50, page = 1 } = req.query;
    
    let query = {};
    
    if (category) query.category = category;
    if (status) query.status = status;
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    const expenses = await Expense.find(query)
      .sort({ date: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Expense.countDocuments(query);

    res.json({
      expenses,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get expenses error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single expense
router.get('/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    res.json(expense);
  } catch (error) {
    console.error('Get expense error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create expense (admin only)
router.post('/', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('amount').isFloat({ min: 0 }).withMessage('Amount must be a positive number'),
  body('category').isIn(['equipment', 'facility_maintenance', 'coaching', 'events', 'utilities', 'transport', 'food', 'other']).withMessage('Valid category is required'),
  body('status').isIn(['pending', 'approved', 'paid', 'cancelled']).withMessage('Valid status is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const expense = new Expense(req.body);
    await expense.save();

    res.status(201).json({
      message: 'Expense created successfully',
      expense
    });
  } catch (error) {
    console.error('Create expense error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update expense (admin only)
router.put('/:id', [
  adminAuth,
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('amount').isFloat({ min: 0 }).withMessage('Amount must be a positive number')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json({
      message: 'Expense updated successfully',
      expense
    });
  } catch (error) {
    console.error('Update expense error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete expense (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json({
      message: 'Expense deleted successfully',
      expense
    });
  } catch (error) {
    console.error('Delete expense error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update expense status (admin only)
router.put('/:id/status', [
  adminAuth,
  body('status').isIn(['pending', 'approved', 'paid', 'cancelled']).withMessage('Valid status is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json({
      message: 'Expense status updated successfully',
      expense
    });
  } catch (error) {
    console.error('Update expense status error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get expense statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const totalExpenses = await Expense.countDocuments();
    const totalAmount = await Expense.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    
    const categoryBreakdown = await Expense.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 }, total: { $sum: '$amount' } } }
    ]);

    const statusBreakdown = await Expense.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 }, total: { $sum: '$amount' } } }
    ]);

    const monthlyStats = await Expense.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' }
          },
          count: { $sum: 1 },
          total: { $sum: '$amount' }
        }
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 12 }
    ]);

    res.json({
      totalExpenses,
      totalAmount: totalAmount[0]?.total || 0,
      categoryBreakdown,
      statusBreakdown,
      monthlyStats
    });
  } catch (error) {
    console.error('Get expense stats error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 