import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Clock, BookOpen, Award } from 'lucide-react';
import { mockCourses } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const course = mockCourses.find(c => c.id === id);
  
  if (!course) {
    return <div>Course not found</div>;
  }

  const handleCourseAction = () => {
    if (!currentUser) {
      navigate('/register', { state: { redirectCourse: course.id } });
    } else {
      navigate(`/courses/${course.id}/content`);
    }
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={8}>
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded-3 mb-4"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
          
          <h1 className="mb-4">{course.title}</h1>
          
          <div className="d-flex gap-3 mb-4">
            <Badge bg="primary" className="px-3 py-2">
              {course.category}
            </Badge>
            <Badge bg={
              course.level === 'Beginner' ? 'success' :
              course.level === 'Intermediate' ? 'warning' : 'danger'
            } className="px-3 py-2">
              {course.level}
            </Badge>
          </div>

          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <h2 className="h4 mb-4">Course Overview</h2>
              <p className="text-muted">{course.description}</p>
              
              <Row className="mt-4">
                <Col md={4}>
                  <div className="d-flex align-items-center mb-3">
                    <Clock className="text-primary me-2" />
                    <div>
                      <h6 className="mb-0">Duration</h6>
                      <small className="text-muted">{course.duration}</small>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="d-flex align-items-center mb-3">
                    <BookOpen className="text-primary me-2" />
                    <div>
                      <h6 className="mb-0">Modules</h6>
                      <small className="text-muted">12 Lessons</small>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="d-flex align-items-center mb-3">
                    <Award className="text-primary me-2" />
                    <div>
                      <h6 className="mb-0">Certificate</h6>
                      <small className="text-muted">Upon completion</small>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h2 className="h4 mb-4">What You'll Learn</h2>
              <Row>
                {[
                  'Build responsive websites using HTML5 and CSS3',
                  'Master modern JavaScript programming concepts',
                  'Work with popular frontend frameworks',
                  'Implement best practices for web development',
                  'Create interactive user interfaces',
                  'Deploy web applications to production'
                ].map((item, index) => (
                  <Col key={index} md={6} className="mb-3">
                    <div className="d-flex align-items-center">
                      <div className="text-primary me-2">•</div>
                      <div>{item}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="border-0 shadow-sm sticky-top" style={{ top: '2rem' }}>
            <Card.Body>
              <h3 className="h4 mb-4">Course Details</h3>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <strong>Instructor:</strong> John Smith
                </li>
                <li className="mb-2">
                  <strong>Language:</strong> English
                </li>
                <li className="mb-2">
                  <strong>Last Updated:</strong> March 2024
                </li>
              </ul>
              
              <Button
                variant="primary"
                size="lg"
                className="w-100 mb-3"
                onClick={handleCourseAction}
              >
                {currentUser ? 'Continue to Course' : 'Register & Enroll'}
              </Button>
              
              <p className="text-center text-muted small mb-0">
                30-day money-back guarantee
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}