const express = require('express');
const { body, validationResult } = require('express-validator');
const WeeklyFee = require('../models/WeeklyFee');
const Member = require('../models/Member');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all weekly fees with filtering
router.get('/', async (req, res) => {
  try {
    const { memberId, paymentStatus, startDate, endDate, limit = 50, page = 1 } = req.query;
    
    let query = {};
    
    if (memberId) query.memberId = memberId;
    if (paymentStatus) query.paymentStatus = paymentStatus;
    if (startDate || endDate) {
      query.weekStartDate = {};
      if (startDate) query.weekStartDate.$gte = new Date(startDate);
      if (endDate) query.weekStartDate.$lte = new Date(endDate);
    }

    const weeklyFees = await WeeklyFee.find(query)
      .sort({ weekStartDate: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await WeeklyFee.countDocuments(query);

    res.json({
      weeklyFees,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get weekly fees error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single weekly fee
router.get('/:id', async (req, res) => {
  try {
    const weeklyFee = await WeeklyFee.findById(req.params.id);
    if (!weeklyFee) {
      return res.status(404).json({ error: 'Weekly fee not found' });
    }
    res.json(weeklyFee);
  } catch (error) {
    console.error('Get weekly fee error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create weekly fee (admin only)
router.post('/', [
  adminAuth,
  body('memberId').isMongoId().withMessage('Valid member ID is required'),
  body('memberName').trim().notEmpty().withMessage('Member name is required'),
  body('weekStartDate').isISO8601().withMessage('Valid start date is required'),
  body('weekEndDate').isISO8601().withMessage('Valid end date is required'),
  body('amount').isFloat({ min: 0 }).withMessage('Amount must be a positive number'),
  body('paymentStatus').isIn(['pending', 'paid', 'partial', 'waived']).withMessage('Valid payment status is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Verify member exists
    const member = await Member.findById(req.body.memberId);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    const weeklyFee = new WeeklyFee(req.body);
    await weeklyFee.save();

    res.status(201).json({
      message: 'Weekly fee created successfully',
      weeklyFee
    });
  } catch (error) {
    console.error('Create weekly fee error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update weekly fee (admin only)
router.put('/:id', [
  adminAuth,
  body('amount').isFloat({ min: 0 }).withMessage('Amount must be a positive number')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const weeklyFee = await WeeklyFee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!weeklyFee) {
      return res.status(404).json({ error: 'Weekly fee not found' });
    }

    res.json({
      message: 'Weekly fee updated successfully',
      weeklyFee
    });
  } catch (error) {
    console.error('Update weekly fee error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete weekly fee (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const weeklyFee = await WeeklyFee.findByIdAndDelete(req.params.id);

    if (!weeklyFee) {
      return res.status(404).json({ error: 'Weekly fee not found' });
    }

    res.json({
      message: 'Weekly fee deleted successfully',
      weeklyFee
    });
  } catch (error) {
    console.error('Delete weekly fee error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update payment status (admin only)
router.put('/:id/payment-status', [
  adminAuth,
  body('paymentStatus').isIn(['pending', 'paid', 'partial', 'waived']).withMessage('Valid payment status is required'),
  body('paymentDate').optional().isISO8601().withMessage('Valid payment date is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updateData = { paymentStatus: req.body.paymentStatus };
    if (req.body.paymentDate) {
      updateData.paymentDate = new Date(req.body.paymentDate);
    }

    const weeklyFee = await WeeklyFee.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!weeklyFee) {
      return res.status(404).json({ error: 'Weekly fee not found' });
    }

    res.json({
      message: 'Payment status updated successfully',
      weeklyFee
    });
  } catch (error) {
    console.error('Update payment status error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get weekly fees by member
router.get('/member/:memberId', async (req, res) => {
  try {
    const { memberId } = req.params;
    const { limit = 20 } = req.query;

    const weeklyFees = await WeeklyFee.find({
      memberId: memberId
    }).sort({ weekStartDate: -1 }).limit(parseInt(limit));

    res.json(weeklyFees);
  } catch (error) {
    console.error('Get weekly fees by member error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get pending payments
router.get('/pending/list', async (req, res) => {
  try {
    const pendingFees = await WeeklyFee.find({
      paymentStatus: 'pending'
    }).sort({ weekStartDate: 1 }).limit(50);

    res.json(pendingFees);
  } catch (error) {
    console.error('Get pending payments error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get weekly fee statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const totalFees = await WeeklyFee.countDocuments();
    const totalAmount = await WeeklyFee.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    
    const statusBreakdown = await WeeklyFee.aggregate([
      { $group: { _id: '$paymentStatus', count: { $sum: 1 }, total: { $sum: '$amount' } } }
    ]);

    const pendingAmount = await WeeklyFee.aggregate([
      { $match: { paymentStatus: 'pending' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    const monthlyStats = await WeeklyFee.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$weekStartDate' },
            month: { $month: '$weekStartDate' }
          },
          count: { $sum: 1 },
          total: { $sum: '$amount' }
        }
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 12 }
    ]);

    res.json({
      totalFees,
      totalAmount: totalAmount[0]?.total || 0,
      pendingAmount: pendingAmount[0]?.total || 0,
      statusBreakdown,
      monthlyStats
    });
  } catch (error) {
    console.error('Get weekly fee stats error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 