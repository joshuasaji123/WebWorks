import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Tab, Button, Badge } from 'react-bootstrap';
import { BookOpen, Video, FileText, Code, ExternalLink } from 'lucide-react';
import { mockCourses } from '../data/mockData';

export default function CourseContent() {
  const { id } = useParams();
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <Container className="py-5">
      <Row>
        <Col lg={8}>
          <h1 className="mb-4">{course.title}</h1>
          <Tab.Container defaultActiveKey="overview">
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white">
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="content">Course Content</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="resources">Resources</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="overview">
                    <h3 className="h4 mb-4">Course Description</h3>
                    <p>{course.longDescription}</p>
                    
                    <h4 className="h5 mb-3">What you'll learn</h4>
                    <ul className="mb-4">
                      {course.syllabus.flatMap(week => week.topics).map((topic, index) => (
                        <li key={index} className="mb-2">{topic}</li>
                      ))}
                    </ul>

                    <h4 className="h5 mb-3">Prerequisites</h4>
                    <ul>
                      <li>Basic computer skills</li>
                      <li>Understanding of web browsers</li>
                      {course.level !== 'Beginner' && (
                        <li>Completion of previous level courses</li>
                      )}
                    </ul>
                  </Tab.Pane>

                  <Tab.Pane eventKey="content">
                    {course.syllabus.map((week, index) => (
                      <Card key={index} className="mb-3 border-0 shadow-sm">
                        <Card.Header className="bg-light">
                          <h5 className="mb-0">Week {week.week}: {week.title}</h5>
                        </Card.Header>
                        <Card.Body>
                          <div className="mb-3">
                            <h6>Topics:</h6>
                            <ul className="mb-0">
                              {week.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="d-flex gap-2">
                            <Button variant="outline-primary" size="sm">
                              <Video size={16} className="me-2" />
                              Watch Lecture
                            </Button>
                            <Button variant="outline-primary" size="sm">
                              <FileText size={16} className="me-2" />
                              View Notes
                            </Button>
                            <Button variant="outline-primary" size="sm">
                              <Code size={16} className="me-2" />
                              Practice
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </Tab.Pane>

                  <Tab.Pane eventKey="resources">
                    <h4 className="h5 mb-4">Additional Learning Materials</h4>
                    {course.syllabus.map((week, index) => (
                      <div key={index} className="mb-4">
                        <h5 className="h6 mb-3">Week {week.week} Resources:</h5>
                        <ul className="list-unstyled">
                          {week.resources.map((resource, i) => (
                            <li key={i} className="mb-2">
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary d-flex align-items-center"
                              >
                                <ExternalLink size={16} className="me-2" />
                                {resource.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>

        <Col lg={4}>
          <Card className="border-0 shadow-sm sticky-top" style={{ top: '2rem' }}>
            <Card.Body>
              <div className="d-flex align-items-center mb-4">
                <BookOpen className="text-primary me-2" size={24} />
                <h5 className="mb-0">Course Progress</h5>
              </div>
              <div className="progress mb-3" style={{ height: '8px' }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: '45%' }}
                  aria-valuenow={45}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <p className="text-muted mb-4">45% Complete</p>
              
              <div className="d-grid gap-2">
                <Button variant="primary">
                  Continue Learning
                </Button>
                <Button variant="outline-primary">
                  Download Materials
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}