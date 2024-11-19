import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { BookOpen, Clock, Award } from 'lucide-react';
import { mockCourses } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const enrolledCourses = mockCourses.slice(0, 2); // Mock enrolled courses

  const stats = [
    { label: 'Courses in Progress', value: '2', icon: BookOpen },
    { label: 'Hours Spent', value: '32', icon: Clock },
    { label: 'Certificates Earned', value: '1', icon: Award },
  ];

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="h2">Welcome back, {currentUser?.name}!</h1>
          <p className="text-muted">Track your progress and continue learning</p>
        </Col>
      </Row>

      {/* Stats Cards */}
      <Row className="mb-5">
        {stats.map((stat, index) => (
          <Col key={index} md={4}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="d-flex align-items-center">
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="h2 mb-0">{stat.value}</h3>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Enrolled Courses */}
      <Card className="border-0 shadow-sm mb-5">
        <Card.Body>
          <h2 className="h4 mb-4">My Courses</h2>
          {enrolledCourses.map((course) => (
            <div key={course.id} className="mb-4 pb-4 border-bottom">
              <Row className="align-items-center">
                <Col md={2}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="img-fluid rounded"
                  />
                </Col>
                <Col md={7}>
                  <h3 className="h5 mb-1">{course.title}</h3>
                  <p className="text-muted mb-2">{course.description}</p>
                  <ProgressBar
                    now={course.id === '1' ? 45 : 70}
                    variant="primary"
                    className="mb-2"
                    style={{ height: '8px' }}
                  />
                  <small className="text-muted">
                    {course.id === '1' ? '45%' : '70%'} Complete
                  </small>
                </Col>
                <Col md={3} className="text-md-end">
                  <a href={`/courses/${course.id}`} className="btn btn-primary">
                    Continue Learning
                  </a>
                </Col>
              </Row>
            </div>
          ))}
        </Card.Body>
      </Card>

      {/* Recent Activity */}
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <h2 className="h4 mb-4">Recent Activity</h2>
          <div className="timeline">
            {[
              {
                title: 'Completed Module: CSS Flexbox',
                course: 'Introduction to HTML & CSS',
                time: '2 hours ago'
              },
              {
                title: 'Submitted Assignment: Responsive Layout',
                course: 'Introduction to HTML & CSS',
                time: '1 day ago'
              },
              {
                title: 'Started New Course',
                course: 'JavaScript Basics',
                time: '2 days ago'
              }
            ].map((activity, index) => (
              <div key={index} className="timeline-item mb-3 pb-3 border-bottom">
                <div className="d-flex">
                  <div className="timeline-icon me-3">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-2">
                      <BookOpen className="text-primary" size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="h6 mb-1">{activity.title}</h4>
                    <p className="text-muted mb-0 small">
                      {activity.course} • {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}