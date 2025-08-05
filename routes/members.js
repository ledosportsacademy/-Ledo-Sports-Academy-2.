const express = require('express');
const { body, validationResult } = require('express-validator');
const Member = require('../models/Member');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all members with filtering
router.get('/', async (req, res) => {
  try {
    const { membershipType, isActive, search, limit = 50, page = 1 } = req.query;
    
    let query = {};
    
    if (membershipType) query.membershipType = membershipType;
    if (isActive !== undefined) query.isActive = isActive === 'true';
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }

    const members = await Member.find(query)
      .sort({ name: 1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Member.countDocuments(query);

    res.json({
      members,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get members error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single member
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    console.error('Get member error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create member (admin only)
router.post('/', [
  adminAuth,
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('age').isInt({ min: 3, max: 100 }).withMessage('Age must be between 3 and 100'),
  body('gender').isIn(['male', 'female', 'other']).withMessage('Valid gender is required'),
  body('membershipType').isIn(['junior', 'senior', 'elite', 'coach']).withMessage('Valid membership type is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const member = new Member(req.body);
    await member.save();

    res.status(201).json({
      message: 'Member created successfully',
      member
    });
  } catch (error) {
    console.error('Create member error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update member (admin only)
router.put('/:id', [
  adminAuth,
  body('name').trim().notEmpty().withMessage('Name is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const member = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.json({
      message: 'Member updated successfully',
      member
    });
  } catch (error) {
    console.error('Update member error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete member (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.json({
      message: 'Member deleted successfully',
      member
    });
  } catch (error) {
    console.error('Delete member error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Toggle member active status (admin only)
router.put('/:id/toggle', adminAuth, async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    member.isActive = !member.isActive;
    await member.save();

    res.json({
      message: `Member ${member.isActive ? 'activated' : 'deactivated'} successfully`,
      member
    });
  } catch (error) {
    console.error('Toggle member status error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get member statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const totalMembers = await Member.countDocuments({ isActive: true });
    const activeMembers = await Member.countDocuments({ isActive: true });
    const juniorMembers = await Member.countDocuments({ membershipType: 'junior', isActive: true });
    const seniorMembers = await Member.countDocuments({ membershipType: 'senior', isActive: true });
    const eliteMembers = await Member.countDocuments({ membershipType: 'elite', isActive: true });
    const coaches = await Member.countDocuments({ membershipType: 'coach', isActive: true });

    res.json({
      totalMembers,
      activeMembers,
      membershipBreakdown: {
        junior: juniorMembers,
        senior: seniorMembers,
        elite: eliteMembers,
        coach: coaches
      }
    });
  } catch (error) {
    console.error('Get member stats error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 