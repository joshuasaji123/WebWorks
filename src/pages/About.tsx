import { Container, Row, Col, Card } from 'react-bootstrap';
import { Users, Code, Database, Heart } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'Founder & Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      description: 'Full-stack developer with 10+ years of experience in educational technology. Passionate about making coding education accessible to everyone.',
      expertise: ['React', 'Node.js', 'Educational Technology']
    },
    {
      name: 'Maria Garcia',
      role: 'Content Director & Developer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      description: 'Curriculum developer and coding instructor with a focus on creating engaging, practical learning experiences.',
      expertise: ['Curriculum Design', 'Frontend Development', 'Teaching']
    }
  ];

  const values = [
    {
      icon: Code,
      title: 'Quality Education',
      description: 'Providing comprehensive, up-to-date web development education'
    },
    {
      icon: Users,
      title: 'Student Success',
      description: 'Supporting every student through their learning journey'
    },
    {
      icon: Database,
      title: 'Practical Skills',
      description: 'Focus on real-world applications and industry practices'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a supportive environment for learning and growth'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 mb-3">Meet Our Team</h1>
              <p className="lead">
                The passionate developers and educators behind WebWorks, dedicated to transforming web development education.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
                alt="Our workspace"
                className="img-fluid rounded-3 shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Team Section */}
      <Container className="mb-5">
        <h2 className="display-5 text-center mb-5">The People Behind WebWorks</h2>
        <Row>
          {team.map((member, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Img
                  variant="top"
                  src={member.image}
                  alt={member.name}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="h3">{member.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-primary">{member.role}</Card.Subtitle>
                  <Card.Text className="text-muted mb-3">{member.description}</Card.Text>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {member.expertise.map((skill, i) => (
                      <Badge key={i} bg="primary" className="rounded-pill px-3 py-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Values Section */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="display-5 text-center mb-5">Our Values</h2>
          <Row>
            {values.map((value, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <Card className="h-100 border-0 shadow-sm text-center hover-card">
                  <Card.Body>
                    <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto">
                      <value.icon size={24} />
                    </div>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text className="text-muted">{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="display-5 mb-4">Get in Touch</h2>
            <p className="lead text-muted mb-4">
              Have questions about our courses or want to collaborate? We'd love to hear from you!
            </p>
            <Button variant="primary" size="lg" className="rounded-pill px-4">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}