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
# JavaScript Files Overview

## `assignments.js`

**Purpose:**
This file handles the functionality related to assignment submissions, including form validation, file upload simulation, and viewing previous submissions.

**Functions:**

1. **`init()`**: Initializes the assignments page by checking if the user is authenticated, and sets up form validation and submission handling.
2. **`setupFormValidation()`**: Sets up validation for the assignment submission form. If the form is invalid, it prevents submission and displays validation feedback.
3. **`submitAssignment(form)`**: Handles the submission of the assignment. It checks if a file is selected and within the size limit, then simulates a file upload with a progress bar.
4. **`handleSubmissionSuccess(form, submitBtn, originalBtnText)`**: Handles the UI changes after a successful submission, such as removing the progress bar, showing a success message, and resetting the form.
5. **`setupSubmissionHandling()`**: Sets up handling for viewing previous submissions. It defines a `viewSubmission` function that displays submission details in a modal.

## `auth.js`

**Purpose:**
This file manages user authentication, including login, logout, and maintaining authentication state across sessions.

**Functions:**

1. **`init()`**: Initializes the authentication state by checking for user consent, remembered login, or session storage to determine if the user is authenticated.
2. **`showConsentModal()`**: Displays a modal asking for cookie consent.
3. **`acceptConsent()`**: Stores consent in local storage and hides the modal.
4. **`rejectConsent()`**: Hides the consent modal and alerts the user that some features may be limited.
5. **`login(email, password, remember)`**: Handles user login by checking the provided credentials against a mock user database and storing the session/token if successful.
6. **`loginWithToken(userData)`**: Logs in the user with stored token data.
7. **`logout()`**: Logs out the user by clearing session and local storage.
8. **`updateUI()`**: Updates the UI based on the authentication state.

## `courses.js`

**Purpose:**
This file manages the display and interaction with courses, including loading course data, filtering courses, and showing course details.

**Functions:**

1. **`init()`**: Initializes the courses page by loading courses and setting up event listeners.
2. **`loadCourses()`**: Loads the course data and dynamically creates course cards for display on the page.
3. **`showCourseDetails(courseId)`**: Displays detailed information about a selected course in a modal.
4. **`setupEventListeners()`**: Sets up event listeners for filtering courses and handling search input.
5. **`filterCourses()`**: Filters the courses based on selected criteria and search input, and updates the displayed course list.
6. **`renderCourseCard(course, container)`**: Renders a single course card and appends it to the specified container.

## `dashboard.js`

**Purpose:**
This file handles the functionality of the user dashboard, including loading user data, course progress, and recent activity.

**Functions:**

1. **`init()`**: Initializes the dashboard by checking if the user is authenticated, and loads user data, course progress, and recent activity.
2. **`loadUserData()`**: Loads and displays the authenticated user's data.
3. **`loadCourseProgress()`**: Loads and displays the user's progress in their courses.
4. **`loadRecentActivity()`**: Loads and displays the user's recent activity on the platform.

## `main.js`

**Purpose:**
This file handles the initialization of common functionalities across the web application, such as setting active navigation items, initializing tooltips and popovers, and managing navbar scroll behavior.

**Functions:**

1. **`$(document).ready(() => { ... })`**: Initializes common functionalities when the document is ready, including setting the active navigation item, initializing tooltips and popovers, initializing the authentication state, and adding scroll behavior to the navbar.

## `messages.js`

**Purpose:**
This file manages the messaging functionality, including loading contacts, rendering messages, and handling message sending.

**Functions:**

1. **`init()`**: Initializes the messaging system by checking if the user is authenticated, loading contacts, and setting up event listeners.
2. **`loadContacts()`**: Loads and renders the list of contacts.
3. **`loadMessages(contactId)`**: Loads and renders the messages for a selected contact.
4. **`renderContacts()`**: Renders the list of contacts.
5. **`renderMessages()`**: Renders the messages for the selected contact.
6. **`sendMessage(content)`**: Sends a message to the selected contact and updates the message list.
7. **`setupEventListeners()`**: Sets up event listeners for selecting contacts and submitting messages.

# HTML Files Overview

## `about.html`

**Purpose:**
The `about.html` file provides information about the WebWorks platform, including its purpose, story, and team members.

**Sections and Elements:**

1. **Navigation Bar:** 
   - Provides links to different sections of the website (Home, Courses, About Us, Dashboard, Assignments, Messages).
   - Contains a dropdown for account-related actions (Profile, Settings, Logout).

2. **Hero Section:**
   - Displays a title and a brief description about the platform.

3. **Main Content:**
   - **Our Story:** Describes the platform's mission and purpose.
   - **Meet Our Team:** Introduces the team members with their roles and a brief bio.
   - **Call to Action:** Encourages users to join the platform.

**References for Images:**
- John Smith: `https://ui-avatars.com/api/?name=John+Smith&background=7c3aed&color=fff`
- Sarah Johnson: `https://ui-avatars.com/api/?name=Sarah+Johnson&background=7c3aed&color=fff`
- Mike Brown: `https://ui-avatars.com/api/?name=Mike+Brown&background=7c3aed&color=fff`

## `assignments.html`

**Purpose:**
The `assignments.html` file allows users to view and manage their assignments, including submitting new assignments and viewing feedback on graded assignments.

**Sections and Elements:**

1. **Navigation Bar:** 
   - Provides links to different sections of the website (Home, Courses, About Us, Dashboard, Assignments, Messages).
   - Contains a dropdown for account-related actions (Profile, Settings, Logout).

2. **Assignments Content:**
   - **Filters:** Buttons to filter assignments by status (All, Pending, Submitted, Graded).
   - **Assignment Cards:** Displays different assignments with their status, course, submission date, grade, feedback, and actions (e.g., View Submission).

3. **Submission View Modal:**
   - A modal to view detailed submission content.

## `courses.html`

**Purpose:**
The `courses.html` file displays a list of available courses and allows users to filter and search for courses based on different criteria.

**Sections and Elements:**

1. **Navigation Bar:** 
   - Provides links to different sections of the website (Home, Courses, About Us, Dashboard, Assignments, Messages).
   - Contains a dropdown for account-related actions (Profile, Settings, Logout).

2. **Courses Content:**
   - **Filters:** Dropdowns and search input to filter courses by level, category, and search terms.
   - **Course Grid:** Displays the list of courses dynamically.

3. **Course Modal:**
   - A modal to display detailed information about a selected course.

## `dashboard.html`

**Purpose:**
The `dashboard.html` file provides an overview of the user's progress, including active courses, hours spent, certificates earned, course progress, and recent activity.

**Sections and Elements:**

1. **Navigation Bar:** 
   - Provides links to different sections of the website (Home, Courses, About Us, Dashboard, Assignments, Messages).
   - Contains a dropdown for account-related actions (Profile, Settings, Logout).

2. **Dashboard Content:**
   - **Welcome Section:** Greets the user and provides a brief introduction.
   - **Stats Cards:** Displays statistics about active courses, hours spent, and certificates earned.
   - **Course Progress:** Shows the user's progress in their courses.
   - **Recent Activity:** Displays the user's recent activity on the platform.

## `index.html`

**Purpose:**
The `index.html` file serves as the homepage for the WebWorks platform, highlighting its features, popular courses, and providing a call to action for new users to join.

**Sections and Elements:**

1. **Navigation Bar:** 
   - Provides links to different sections of the website (Home, Courses, About Us, Dashboard, Assignments, Messages).
   - Contains a dropdown for account-related actions (Profile, Settings, Logout).

2. **Hero Section:**
   - Displays a title, description, and call to action buttons.

3. **Stats Section:**
   - Displays statistics about the platform (Active Students, Completion Rate, Expert Courses).

4. **Featured Courses:**
   - Highlights popular courses with images, descriptions, and links to learn more.

5. **Features Section:**
   - Describes the key features of the platform (Learn by Doing, Expert Mentorship, Flexible Learning).

6. **CTA Section:**
   - Encourages users to get started with the platform.

7. **Footer:**
   - Provides additional information and links (About WebWorks, Quick Links, Contact Us, Follow Us).

**References for Images:**
- JavaScript Course: `https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=400`
- React Course: `https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400`
- Node.js Course: `https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400`

## `login.html`

**Purpose:**
The `login.html` file provides a form for users to sign in to their accounts.

**Sections and Elements:**

1. **Login Form:**
   - **Email Input:** Field for entering the email address.
   - **Password Input:** Field for entering the password.
   - **Remember Me Checkbox:** Option to remember the user.
   - **Sign In Button:** Button to submit the login form.
   - **Test Accounts:** Displays test account credentials for demonstration purposes.

## `messages.html`

**Purpose:**
The `messages.html` file allows users to view and send messages to their contacts.

**Sections and Elements:**

1. **Contacts Sidebar:**
   - Displays a list of contacts with whom the user can chat.

2. **Chat Area:**
   - Displays the conversation with the selected contact.
   - **Message Input:** Field to type and send new messages.

## `register.html`

**Purpose:**
The `register.html` file provides a form for new users to create an account on the WebWorks platform.

**Sections and Elements:**

1. **Registration Form:**
   - **Full Name Input:** Field for entering the full name.
   - **Email Input:** Field for entering the email address.
   - **Password Input:** Field for entering the password.
   - **Confirm Password Input:** Field for confirming the password.
   - **Create Account Button:** Button to submit the registration form.
   - **Sign In Link:** Link to navigate to the login page for existing users.

# Node.js Project Overview

## `package.json`

**Purpose:**
The `package.json` file manages the project's dependencies, scripts, and metadata for the WebWorks platform.

**Key Sections:**

1. **Metadata:**
   - **name:** `webworks-platform`
   - **version:** `1.0.0`
   - **description:** `Educational platform for web development`
   - **main:** `server.js`

2. **Scripts:**
   - **start:** `node server.js` - Starts the server using Node.js.
   - **dev:** `nodemon server.js` - Starts the server using Nodemon for automatic restarts during development.

3. **Dependencies:**
   - **bcryptjs:** `^2.4.3` - Library for hashing passwords.
   - **bootstrap:** `^5.3.3` - CSS framework for responsive web design.
   - **express:** `^4.18.3` - Web framework for Node.js.
   - **express-session:** `^1.18.0` - Middleware for managing sessions.
   - **jquery:** `^3.7.1` - JavaScript library for DOM manipulation.
   - **multer:** `^1.4.5-lts.1` - Middleware for handling file uploads.
   - **mysql2:** `^3.9.2` - MySQL client for Node.js.

4. **DevDependencies:**
   - **nodemon:** `^3.1.0` - Tool for automatically restarting Node.js applications when file changes are detected.

## `server.js`

**Purpose:**
The `server.js` file sets up the Express server, configures middleware, and defines routes for the WebWorks platform.

**Key Sections and Functions:**

1. **Setup:**
   - **Express Initialization:** Initializes the Express application.
   - **Port Configuration:** Sets the server to listen on port `3000`.

2. **Middleware:**
   - **Static Files:** Serves static files from the `public` directory.
   - **JSON Parsing:** Parses incoming JSON requests.
   - **URL-encoded Parsing:** Parses URL-encoded data.
   - **Session Management:** Configures session management with `express-session`.

3. **Routes:**
   - **GET `/`:** Serves the `index.html` file.
   - **GET `/api/courses`:** Returns a list of mock courses data.
   - **POST `/api/login`:** Handles user login and sets session data.

4. **Start Server:**
   - **Listen:** Starts the server and listens on the specified port.

**References for Images:**
- Modern JavaScript Course: `https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=400`
- React Fundamentals Course: `https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400`