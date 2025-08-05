# Ledo Sports Academy Management System

A comprehensive sports academy management system with MongoDB backend and modern web interface.

## Features

### 🏆 Core Management
- **Member Management**: Track academy members, their details, and membership types
- **Activity Management**: Schedule and manage matches, training sessions, and events
- **Financial Tracking**: Monitor donations, expenses, and weekly fees
- **Experience Logging**: Record and share academy experiences and achievements
- **Gallery Management**: Photo gallery with top 5 featured images
- **Hero Slideshow**: Dynamic homepage slideshow management

### 🔐 Security & Authentication
- JWT-based authentication system
- Role-based access control (Admin/User)
- Secure password hashing with bcrypt
- Rate limiting and security headers

### 📊 Analytics & Reporting
- Dashboard with financial charts
- Member statistics and breakdowns
- Activity tracking and reporting
- PDF export functionality

## Tech Stack

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **express-validator** for input validation
- **helmet** for security headers
- **cors** for cross-origin requests

### Frontend
- **HTML5** with modern CSS3
- **Vanilla JavaScript** with ES6+ features
- **Chart.js** for data visualization
- **html2pdf.js** for PDF generation

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ledo-sports-academy-v4cursor
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
The MongoDB connection string is already configured in `config.env`. If you need to modify it:

```bash
# Edit config.env file
MONGODB_URI=your_mongodb_connection_string
```

### 4. Start the Server
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

### 5. Initial Setup
On first run, create the admin user:

```bash
# Make a POST request to setup admin
curl -X POST http://localhost:3000/api/auth/setup-admin
```

Or visit: `http://localhost:3000/api/auth/setup-admin`

**Default Admin Credentials:**
- Username: `admin`
- Password: `ledo_admin_2024`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/setup-admin` - Create initial admin user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/change-password` - Change password
- `POST /api/auth/logout` - User logout

### Hero Slides
- `GET /api/hero-slides` - Get all slides
- `POST /api/hero-slides` - Create slide (admin)
- `PUT /api/hero-slides/:id` - Update slide (admin)
- `DELETE /api/hero-slides/:id` - Delete slide (admin)

### Activities
- `GET /api/activities` - Get all activities
- `GET /api/activities/recent` - Get recent activities
- `GET /api/activities/upcoming` - Get upcoming activities
- `POST /api/activities` - Create activity (admin)
- `PUT /api/activities/:id` - Update activity (admin)
- `DELETE /api/activities/:id` - Delete activity (admin)

### Members
- `GET /api/members` - Get all members
- `POST /api/members` - Create member (admin)
- `PUT /api/members/:id` - Update member (admin)
- `DELETE /api/members/:id` - Delete member (admin)
- `GET /api/members/stats/overview` - Get member statistics

### Donations
- `GET /api/donations` - Get all donations
- `POST /api/donations` - Create donation (admin)
- `PUT /api/donations/:id` - Update donation (admin)
- `DELETE /api/donations/:id` - Delete donation (admin)
- `GET /api/donations/stats/overview` - Get donation statistics

### Expenses
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create expense (admin)
- `PUT /api/expenses/:id` - Update expense (admin)
- `DELETE /api/expenses/:id` - Delete expense (admin)
- `GET /api/expenses/stats/overview` - Get expense statistics

### Experiences
- `GET /api/experiences` - Get all experiences
- `POST /api/experiences` - Create experience (admin)
- `PUT /api/experiences/:id` - Update experience (admin)
- `DELETE /api/experiences/:id` - Delete experience (admin)
- `GET /api/experiences/highlighted/list` - Get highlighted experiences

### Weekly Fees
- `GET /api/weekly-fees` - Get all weekly fees
- `POST /api/weekly-fees` - Create weekly fee (admin)
- `PUT /api/weekly-fees/:id` - Update weekly fee (admin)
- `DELETE /api/weekly-fees/:id` - Delete weekly fee (admin)
- `GET /api/weekly-fees/pending/list` - Get pending payments

### Gallery
- `GET /api/gallery` - Get all gallery items
- `POST /api/gallery` - Create gallery item (admin)
- `PUT /api/gallery/:id` - Update gallery item (admin)
- `DELETE /api/gallery/:id` - Delete gallery item (admin)
- `GET /api/gallery/top5/list` - Get top 5 gallery items

## Database Schema

### Collections
1. **users** - Admin user accounts
2. **heroslides** - Homepage slideshow content
3. **activities** - Events, matches, and training sessions
4. **members** - Academy member information
5. **donations** - Financial donations tracking
6. **expenses** - Academy expense tracking
7. **experiences** - Experience logs and stories
8. **weeklyfees** - Weekly fee collection
9. **galleries** - Photo gallery management

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Comprehensive request validation
- **Rate Limiting**: API rate limiting to prevent abuse
- **CORS Protection**: Cross-origin request handling
- **Security Headers**: Helmet.js for security headers

## Usage

### Admin Access
1. Login with admin credentials
2. Access admin-only features like:
   - Creating/editing content
   - Managing members
   - Financial tracking
   - Gallery management

### Public Access
- View activities and events
- Browse gallery
- Read experience logs
- View academy information

## Development

### Project Structure
```
ledo-sports-academy-v4cursor/
├── models/           # MongoDB schemas
├── routes/           # API route handlers
├── middleware/       # Authentication middleware
├── server.js         # Main server file
├── package.json      # Dependencies
├── config.env        # Environment variables
├── index.html        # Frontend
├── app.js           # Frontend JavaScript
├── style.css        # Frontend styles
└── README.md        # This file
```

### Adding New Features
1. Create model in `models/` directory
2. Create routes in `routes/` directory
3. Add route to `server.js`
4. Update frontend as needed

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your MongoDB connection string
   - Ensure network access is enabled
   - Verify credentials are correct

2. **Port Already in Use**
   - Change PORT in config.env
   - Kill existing process on port 3000

3. **Admin Login Issues**
   - Run setup-admin endpoint first
   - Check admin credentials in config.env

### Logs
Check server console for detailed error messages and debugging information.

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.

---

**Ledo Sports Academy Management System** - Empowering sports excellence through technology. 