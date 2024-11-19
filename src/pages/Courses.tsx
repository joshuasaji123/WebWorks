import { useState } from 'react';
import { Container, Row, Col, Form, Card, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { mockCourses } from '../data/mockData';
import { Course } from '../types';

export default function Courses() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    category: 'all',
    level: 'all',
  });

  const filteredCourses = mockCourses.filter((course) => {
    return (
      (filter.category === 'all' || course.category === filter.category) &&
      (filter.level === 'all' || course.level === filter.level)
    );
  });

  return (
    <div className="courses-page">
      {/* Header Banner */}
      <div className="bg-primary text-white py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 mb-3">Our Courses</h1>
              <p className="lead mb-0">
                Explore our comprehensive collection of web development courses
              </p>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
                alt="Courses"
                className="img-fluid rounded-3 d-none d-lg-block"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {/* Filters */}
        <Card className="mb-5 border-0 shadow-sm">
          <Card.Body>
            <Row>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={filter.category}
                    onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                    className="rounded-pill"
                  >
                    <option value="all">All Categories</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>Level</Form.Label>
                  <Form.Select
                    value={filter.level}
                    onChange={(e) => setFilter({ ...filter, level: e.target.value })}
                    className="rounded-pill"
                  >
                    <option value="all">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Course Grid */}
        <Row>
          {filteredCourses.map((course: Course) => (
            <Col key={course.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 course-card border-0">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={course.image}
                    alt={course.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Badge 
                    bg={course.category === 'Frontend' ? 'warning' : 'info'}
                    className="position-absolute top-0 end-0 m-3"
                  >
                    {course.category}
                  </Badge>
                </div>
                <Card.Body>
                  <Card.Title className="h5 mb-3">{course.title}</Card.Title>
                  <Card.Text className="text-muted">{course.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <Badge bg={
                      course.level === 'Beginner' ? 'success' :
                      course.level === 'Intermediate' ? 'warning' : 'danger'
                    }>
                      {course.level}
                    </Badge>
                    <small className="text-muted">{course.duration}</small>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Button 
                    variant="primary" 
                    className="w-100 rounded-pill"
                    onClick={() => navigate(`/courses/${course.id}`)}
                  >
                    View Course
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <div className="text-center py-5">
          <h2 className="h3 mb-4">Can't find what you're looking for?</h2>
          <Button variant="outline-primary" className="rounded-pill px-4">
            Request a Course
          </Button>
        </div>
      </Container>
    </div>
  );
}