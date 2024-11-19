const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'webworks_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/courses', (req, res) => {
  // Mock courses data
  const courses = [
    {
      id: 1,
      title: 'Modern JavaScript',
      description: 'Master modern JavaScript features and best practices',
      image_url: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=400',
      level: 'Beginner',
      duration: '8 weeks'
    },
    {
      id: 2,
      title: 'React Fundamentals',
      description: 'Learn React from the ground up with hands-on projects',
      image_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400',
      level: 'Intermediate',
      duration: '10 weeks'
    }
  ];
  res.json(courses);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Mock authentication
  if (email === 'student@webworks.com' && password === 'password') {
    req.session.user = {
      id: 1,
      name: 'John Doe',
      email,
      role: 'student'
    };
    res.json({ 
      success: true, 
      user: req.session.user,
      token: 'mock-token'
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});