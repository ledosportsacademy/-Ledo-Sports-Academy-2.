const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config({ path: './config.env' });

// Import routes
const authRoutes = require('./routes/auth');
const heroSlidesRoutes = require('./routes/heroSlides');
const activitiesRoutes = require('./routes/activities');
const membersRoutes = require('./routes/members');
const donationsRoutes = require('./routes/donations');
const expensesRoutes = require('./routes/expenses');
const experiencesRoutes = require('./routes/experiences');
const weeklyFeesRoutes = require('./routes/weeklyFees');
const galleryRoutes = require('./routes/gallery');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5500'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('✅ Connected to MongoDB successfully');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/hero-slides', heroSlidesRoutes);
app.use('/api/activities', activitiesRoutes);
app.use('/api/members', membersRoutes);
app.use('/api/donations', donationsRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/experiences', experiencesRoutes);
app.use('/api/weekly-fees', weeklyFeesRoutes);
app.use('/api/gallery', galleryRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Ledo Sports Academy API is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Static files (serve after API routes)
app.use(express.static(path.join(__dirname, './')));

// Serve the main HTML file for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Frontend available at http://localhost:${PORT}`);
  console.log(`🔗 API available at http://localhost:${PORT}/api`);
});

module.exports = app; 