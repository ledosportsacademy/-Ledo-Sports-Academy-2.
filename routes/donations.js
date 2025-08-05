const express = require('express');
const { body, validationResult } = require('express-validator');
const Donation = require('../models/Donation');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all donations with filtering
router.get('/', async (req, res) => {
  try {
    const { status, paymentMethod, startDate, endDate, limit = 50, page = 1 } = req.query;
    
    let query = {};
    
    if (status) query.status = status;
    if (paymentMethod) query.paymentMethod = paymentMethod;
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    const donations = await Donation.find(query)
      .sort({ date: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Donation.countDocuments(query);

    res.json({
      donations,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get donations error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single donation
router.get('/:id', async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' });
    }
    res.json(donation);
  } catch (error) {
    console.error('Get donation error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create donation (admin only)
router.post('/', [
  adminAuth,
  body('donorName').trim().notEmpty().withMessage('Donor name is required'),
  body('amount').isFloat({ min: 0 }).withMessage('Amount must be a positive number'),
  body('paymentMethod').isIn(['cash', 'bank_transfer', 'online', 'check', 'other']).withMessage('Valid payment method is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const donation = new Donation(req.body);
    await donation.save();

    res.status(201).json({
      message: 'Donation created successfully',
      donation
    });
  } catch (error) {
    console.error('Create donation error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update donation (admin only)
router.put('/:id', [
  adminAuth,
  body('donorName').trim().notEmpty().withMessage('Donor name is required'),
  body('amount').isFloat({ min: 0 }).withMessage('Amount must be a positive number')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' });
    }

    res.json({
      message: 'Donation updated successfully',
      donation
    });
  } catch (error) {
    console.error('Update donation error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete donation (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const donation = await Donation.findByIdAndDelete(req.params.id);

    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' });
    }

    res.json({
      message: 'Donation deleted successfully',
      donation
    });
  } catch (error) {
    console.error('Delete donation error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update donation status (admin only)
router.put('/:id/status', [
  adminAuth,
  body('status').isIn(['pending', 'received', 'cancelled']).withMessage('Valid status is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' });
    }

    res.json({
      message: 'Donation status updated successfully',
      donation
    });
  } catch (error) {
    console.error('Update donation status error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get donation statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const totalDonations = await Donation.countDocuments();
    const totalAmount = await Donation.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    
    const statusBreakdown = await Donation.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 }, total: { $sum: '$amount' } } }
    ]);

    const monthlyStats = await Donation.aggregate([
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
      totalDonations,
      totalAmount: totalAmount[0]?.total || 0,
      statusBreakdown,
      monthlyStats
    });
  } catch (error) {
    console.error('Get donation stats error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 