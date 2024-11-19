import { ArrowRight, Code, Database, Layout } from 'lucide-react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Landing() {
  const features = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Master HTML, CSS, JavaScript, and modern frameworks',
      image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Learn server-side programming and database management',
      image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800&auto=format&fit=crop'
    },
    {
      icon: Layout,
      title: 'Interactive Learning',
      description: 'Practice with real-world projects and get instant feedback',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop'
    },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section text-white position-relative">
        <div className="hero-overlay"></div>
        <Container className="py-5 position-relative">
          <Row className="align-items-center min-vh-80">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-3 fw-bold mb-4">
                Learn to code with <span className="text-warning">WebWorks</span>
              </h1>
              <p className="lead mb-4">
                Master web development through interactive lessons, real-world projects, and expert guidance. Start your journey today!
              </p>
              <Button variant="warning" size="lg" className="rounded-pill px-4" href="/courses">
                Get Started <ArrowRight className="ms-2" />
              </Button>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
                alt="Coding"
                className="img-fluid rounded-3 shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="bg-light py-5">
        <Container>
          <Row className="text-center">
            {[
              { number: '300+', label: 'Students' },
              { number: '4', label: 'Courses' },
              { number: '95%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <Col key={index} md={3} className="mb-4 mb-md-0">
                <div className="stat-item">
                  <h2 className="display-4 fw-bold text-primary">{stat.number}</h2>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center display-5 mb-5">Why Choose WebWorks?</h2>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Img variant="top" src={feature.image} height="200" style={{ objectFit: 'cover' }} />
                <Card.Body className="text-center">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto">
                    <feature.icon size={24} />
                  </div>
                  <Card.Title className="mb-3">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <div className="bg-primary text-white py-5">
        <Container className="text-center">
          <h2 className="display-6 mb-4">Ready to Start Your Journey?</h2>
          <p className="lead mb-4">Join hundreds of students already learning with WebWorks</p>
          <Button variant="warning" size="lg" className="rounded-pill px-4" href="/register">
            Sign Up Now
          </Button>
        </Container>
      </div>
    </div>
  );
}