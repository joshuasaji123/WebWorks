import { Course, User, Assignment, Message } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@webworks.com',
    role: 'admin',
    progress: 100
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@webworks.com',
    role: 'admin',
    progress: 100
  },
  {
    id: '3',
    name: 'Mike Brown',
    email: 'mike@student.com',
    role: 'student',
    progress: 45
  },
  {
    id: '4',
    name: 'Emma Wilson',
    email: 'emma@student.com',
    role: 'student',
    progress: 75
  }
];

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to HTML & CSS',
    description: 'Learn the fundamentals of web development with HTML5 and CSS3.',
    level: 'Beginner',
    category: 'Frontend',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800'
  },
  {
    id: '2',
    title: 'JavaScript Basics',
    description: 'Master the core concepts of JavaScript programming.',
    level: 'Beginner',
    category: 'Frontend',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800'
  },
  {
    id: '3',
    title: 'Node.js Fundamentals',
    description: 'Build scalable server-side applications with Node.js.',
    level: 'Intermediate',
    category: 'Backend',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800'
  },
  {
    id: '4',
    title: 'Database Design',
    description: 'Learn database design principles and SQL fundamentals.',
    level: 'Intermediate',
    category: 'Backend',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800'
  }
];

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Responsive Website Project',
    courseId: '1',
    dueDate: '2024-03-20',
    status: 'pending'
  },
  {
    id: '2',
    title: 'JavaScript Calculator',
    courseId: '2',
    dueDate: '2024-03-25',
    status: 'submitted'
  },
  {
    id: '3',
    title: 'RESTful API Development',
    courseId: '3',
    dueDate: '2024-03-15',
    status: 'graded'
  },
  {
    id: '4',
    title: 'Database Schema Design',
    courseId: '4',
    dueDate: '2024-03-30',
    status: 'pending'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '3',
    receiverId: '1',
    content: 'Hi Professor Smith, I have a question about the HTML assignment.',
    timestamp: '2024-03-15T10:30:00'
  },
  {
    id: '2',
    senderId: '1',
    receiverId: '3',
    content: 'Sure, Mike! What would you like to know?',
    timestamp: '2024-03-15T10:32:00'
  },
  {
    id: '3',
    senderId: '3',
    receiverId: '1',
    content: "I'm having trouble with the responsive layout part. The media queries aren't working as expected.",
    timestamp: '2024-03-15T10:33:00'
  },
  {
    id: '4',
    senderId: '1',
    receiverId: '3',
    content: 'Can you share your code snippet? That would help me identify the issue.',
    timestamp: '2024-03-15T10:34:00'
  },
  {
    id: '5',
    senderId: '3',
    receiverId: '1',
    content: '@media screen and (max-width: 768px) { ... } Is this the correct syntax?',
    timestamp: '2024-03-15T10:35:00'
  }
];