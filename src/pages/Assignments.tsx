import { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal, Form } from 'react-bootstrap';
import { mockAssignments } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { Assignment } from '../types';

export default function Assignments() {
  const { currentUser } = useAuth();
  const [showDetails, setShowDetails] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  const handleShowDetails = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setShowDetails(true);
  };

  const handleShowSubmit = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmit(true);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">My Assignments</h1>
      
      <Row>
        {mockAssignments.map((assignment: Assignment) => (
          <Col key={assignment.id} md={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <Card.Title>{assignment.title}</Card.Title>
                    <Card.Subtitle className="text-muted">
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </Card.Subtitle>
                  </div>
                  <Badge bg={
                    assignment.status === 'submitted' ? 'warning' :
                    assignment.status === 'graded' ? 'success' : 'danger'
                  }>
                    {assignment.status}
                  </Badge>
                </div>
                
                <div className="mt-3">
                  <Button 
                    variant="outline-primary" 
                    className="me-2"
                    onClick={() => handleShowDetails(assignment)}
                  >
                    View Details
                  </Button>
                  {assignment.status === 'pending' && (
                    <Button 
                      variant="primary"
                      onClick={() => handleShowSubmit(assignment)}
                    >
                      Submit Assignment
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Details Modal */}
      <Modal show={showDetails} onHide={() => setShowDetails(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedAssignment?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <h5>Description</h5>
            <p>
              {selectedAssignment?.id === '1' && 
                'Create a responsive website using HTML and CSS. The website should adapt to different screen sizes and include a navigation menu, hero section, and contact form.'}
              {selectedAssignment?.id === '2' && 
                'Build a calculator application using JavaScript. The calculator should support basic arithmetic operations and have a clean user interface.'}
              {selectedAssignment?.id === '3' && 
                'Develop a RESTful API using Node.js and Express. The API should include CRUD operations and proper error handling.'}
              {selectedAssignment?.id === '4' && 
                'Design a database schema for an e-commerce platform. Include tables for products, users, orders, and reviews.'}
            </p>
          </div>

          {selectedAssignment?.status === 'graded' && (
            <>
              <div className="mb-4">
                <h5>Grade</h5>
                <p className="mb-0">95/100</p>
              </div>
              <div>
                <h5>Feedback</h5>
                <p className="mb-0">
                  Excellent work! Your implementation shows a good understanding of the concepts. 
                  The code is well-structured and follows best practices. Consider adding more 
                  comments to explain complex logic.
                </p>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetails(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Submit Modal */}
      <Modal show={showSubmit} onHide={() => setShowSubmit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Assignment Files</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Comments</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Add any comments about your submission..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSubmit(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowSubmit(false)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}