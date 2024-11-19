# WebWorks Learning Platform

A modern educational platform for web development, built with React, TypeScript, and Bootstrap.

## Technology Stack

### Frontend
- **React 18.3.1**: Core UI library
- **TypeScript**: Static typing and enhanced developer experience
- **Bootstrap 5.3.3**: UI framework for responsive design
- **React Bootstrap 2.10.1**: React components for Bootstrap
- **React Router DOM 6.22.2**: Client-side routing
- **Lucide React**: Icon library

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ChatWindow.tsx  # Real-time chat interface
│   ├── CourseCard.tsx  # Course display component
│   ├── Navbar.tsx      # Navigation header
│   └── PrivateRoute.tsx # Auth protection wrapper
│
├── contexts/           # React Context providers
│   └── AuthContext.tsx # Authentication state management
│
├── data/              # Mock data for development
│   └── mockData.ts    # Sample users, courses, assignments
│
├── pages/             # Main route components
│   ├── Assignments.tsx # Assignment management
│   ├── Courses.tsx    # Course listing and filtering
│   ├── Dashboard.tsx  # Student/Teacher dashboard
│   ├── Landing.tsx    # Homepage
│   ├── Login.tsx      # Authentication
│   ├── Messages.tsx   # Messaging system
│   └── Register.tsx   # User registration
│
├── styles/           # CSS and styling
│   └── main.css     # Global styles
│
└── types/           # TypeScript interfaces
    └── index.ts    # Shared type definitions
```

### Key Features

1. **Authentication System**
   - Protected routes using `PrivateRoute` component
   - User registration and login
   - Role-based access (students/teachers)

2. **Course Management**
   - Course listing with filters
   - Progress tracking
   - Interactive course cards

3. **Dashboard**
   - Progress visualization
   - Recent activity tracking
   - Course statistics

4. **Messaging System**
   - Real-time chat interface
   - Contact management
   - Message history

5. **Assignment System**
   - Assignment submission
   - Status tracking
   - Due date management

### Styling Architecture

1. **Global Styles** (`src/styles/main.css`)
   - Custom CSS variables for theming
   - Bootstrap overrides
   - Utility classes

2. **Component-Specific Styles**
   - Bootstrap classes for layout
   - Custom CSS for unique features
   - Responsive design patterns

### State Management

1. **Authentication Context** (`src/contexts/AuthContext.tsx`)
   - User session management
   - Login/logout functionality
   - Role-based permissions

2. **Mock Data** (`src/data/mockData.ts`)
   - Development data structures
   - Sample content for testing
   - User/course relationships

### Component Documentation

#### Core Components

1. **Navbar** (`components/Navbar.tsx`)
   - Responsive navigation
   - Dynamic menu based on auth state
   - User profile integration

2. **CourseCard** (`components/CourseCard.tsx`)
   - Course information display
   - Interactive hover effects
   - Progress indicators

3. **ChatWindow** (`components/ChatWindow.tsx`)
   - Real-time messaging interface
   - Contact list management
   - Message history display

4. **PrivateRoute** (`components/PrivateRoute.tsx`)
   - Route protection wrapper
   - Authentication verification
   - Redirect handling

#### Page Components

1. **Landing** (`pages/Landing.tsx`)
   - Hero section
   - Feature showcase
   - Statistics display

2. **Dashboard** (`pages/Dashboard.tsx`)
   - Progress charts
   - Course overview
   - Recent activity

3. **Courses** (`pages/Courses.tsx`)
   - Course catalog
   - Category filtering
   - Enrollment system

4. **Messages** (`pages/Messages.tsx`)
   - Chat interface
   - Contact management
   - Message threading

### Type Definitions

```typescript
// src/types/index.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Frontend' | 'Backend';
  duration: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
  progress: number;
}

export interface Assignment {
  id: string;
  title: string;
  courseId: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}
```

## Development Guidelines

1. **Component Creation**
   - Use TypeScript interfaces
   - Implement responsive design
   - Follow Bootstrap patterns

2. **State Management**
   - Use React Context for global state
   - Implement proper type checking
   - Maintain immutable patterns

3. **Styling**
   - Use Bootstrap classes first
   - Add custom CSS when needed
   - Maintain consistent theming

4. **Authentication**
   - Protect sensitive routes
   - Validate user roles
   - Handle session management

## Getting Started

1. Clone and install dependencies:
```bash
git clone <repository-url>
cd webworks-platform
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Test Accounts

### Teachers
1. John Smith
   - Email: john@webworks.com
   - Password: teacher123

2. Sarah Johnson
   - Email: sarah@webworks.com
   - Password: teacher123

### Students
1. Mike Brown
   - Email: mike@student.com
   - Password: student123

2. Emma Wilson
   - Email: emma@student.com
   - Password: student123

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - See LICENSE file for details