# WebWorks Learning Platform

A modern educational platform for web development, built with HTML, CSS, JavaScript, Node.js, and Bootstrap. The platform offers interactive courses, assignments, and real-time messaging features.

## Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd webworks-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up MySQL database:
```sql
CREATE DATABASE webworks;
USE webworks;

-- Create users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'teacher') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create courses table
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    level ENUM('beginner', 'intermediate', 'advanced') NOT NULL,
    duration VARCHAR(50),
    category VARCHAR(50),
    image_url VARCHAR(255)
);
```

4. Configure environment variables:
```bash
cp .env.example .env
```
Update the `.env` file with your database credentials and other configurations.

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
webworks-platform/
├── public/                 # Static assets and client-side files
│   ├── css/               # Stylesheets
│   │   └── styles.css     # Main CSS file
│   ├── js/                # Client-side JavaScript
│   │   ├── auth.js        # Authentication handling
│   │   ├── courses.js     # Course management
│   │   ├── assignments.js # Assignment handling
│   │   ├── messages.js    # Real-time messaging
│   │   └── main.js        # Core functionality
│   ├── index.html         # Landing page
│   ├── courses.html       # Course catalog
│   ├── assignments.html   # Assignment management
│   ├── messages.html      # Messaging interface
│   ├── login.html         # Authentication
│   └── register.html      # User registration
├── server.js              # Node.js/Express backend
├── package.json           # Project dependencies
└── README.md             # Project documentation
```

## File Documentation

### Backend Files

#### `server.js`
- Main Express application file
- Handles routing and middleware
- Sets up session management
- Serves static files
- Implements API endpoints

### Frontend Files

#### HTML Pages

1. `public/index.html`
   - Landing page with hero section
   - Feature showcase
   - Course highlights
   - Call-to-action sections

2. `public/courses.html`
   - Course catalog display
   - Filtering and search functionality
   - Course details modal
   - Interactive course cards

3. `public/assignments.html`
   - Assignment submission interface
   - Graded assignments display
   - File upload functionality
   - Feedback system

4. `public/messages.html`
   - Real-time chat interface
   - Contact management
   - Message history
   - Online status indicators

#### JavaScript Files

1. `public/js/auth.js`
   - User authentication handling
   - Session management
   - Login/logout functionality
   - Access control

2. `public/js/courses.js`
   - Course data management
   - Filter implementation
   - Course modal functionality
   - Enrollment handling

3. `public/js/assignments.js`
   - Assignment submission logic
   - File upload handling
   - Progress tracking
   - Feedback display

4. `public/js/messages.js`
   - Real-time messaging logic
   - Contact list management
   - Message history handling
   - Online status updates

5. `public/js/main.js`
   - Core functionality
   - UI initialization
   - Event handlers
   - Global utilities

#### CSS Files

`public/css/styles.css`
- Global styling
- Custom component styles
- Responsive design rules
- Theme variables

## Features

### Authentication System
- User registration and login
- Role-based access control
- Session management
- Remember me functionality

### Course Management
- Course catalog with filters
- Detailed course information
- Progress tracking
- Resource links

### Assignment System
- Assignment submission
- File upload
- Grading system
- Feedback mechanism

### Messaging System
- Real-time chat
- Contact management
- Message history
- Online status

## Development Guidelines

1. **Code Style**
   - Use consistent indentation (2 spaces)
   - Follow JavaScript Standard Style
   - Comment complex logic
   - Use meaningful variable names

2. **Git Workflow**
   - Create feature branches
   - Write descriptive commit messages
   - Pull request for major changes
   - Keep commits atomic

3. **Testing**
   - Test all new features
   - Verify responsive design
   - Cross-browser testing
   - Performance testing

4. **Security**
   - Validate all inputs
   - Sanitize data
   - Implement CSRF protection
   - Secure session handling

## API Documentation

### Authentication Endpoints

```javascript
POST /api/login
POST /api/register
POST /api/logout
```

### Course Endpoints

```javascript
GET /api/courses
GET /api/courses/:id
POST /api/courses/:id/enroll
```

### Assignment Endpoints

```javascript
GET /api/assignments
POST /api/assignments/:id/submit
GET /api/assignments/:id/feedback
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing Accounts

### Student Account
- Email: student@webworks.com
- Password: student123

### Teacher Account
- Email: teacher@webworks.com
- Password: teacher123

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@webworks.com or join our Slack channel.