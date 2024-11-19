import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MessageCircle } from 'lucide-react';
import { mockMessages, mockUsers } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

export default function Messages() {
  const { currentUser } = useAuth();
  const [selectedContact, setSelectedContact] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const contacts = mockUsers.filter(user => user.id !== currentUser?.id);
  const messages = mockMessages.filter(msg => 
    msg.from === currentUser?.id || msg.to === currentUser?.id
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedContact) return;
    
    // In a real app, this would send the message to the backend
    setNewMessage('');
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Contacts</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="list-group list-group-flush">
                {contacts.map(contact => (
                  <button
                    key={contact.id}
                    className={`list-group-item list-group-item-action ${
                      selectedContact?.id === contact.id ? 'active' : ''
                    }`}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">{contact.name}</h6>
                        <small>{contact.role}</small>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={8}>
          <Card className="h-100">
            {selectedContact ? (
              <>
                <Card.Header>
                  <h5 className="mb-0">Chat with {selectedContact.name}</h5>
                </Card.Header>
                <Card.Body>
                  <div className="message-container mb-3">
                    {messages.map(message => (
                      <div
                        key={message.id}
                        className={`message-bubble ${
                          message.from === currentUser?.id ? 'message-sent' : 'message-received'
                        }`}
                      >
                        <p className="mb-1">{message.content}</p>
                        <small>{new Date(message.timestamp).toLocaleTimeString()}</small>
                      </div>
                    ))}
                  </div>
                  <Form onSubmit={handleSendMessage}>
                    <div className="d-flex gap-2">
                      <Form.Control
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                      />
                      <Button type="submit" variant="primary">Send</Button>
                    </div>
                  </Form>
                </Card.Body>
              </>
            ) : (
              <Card.Body className="d-flex align-items-center justify-content-center">
                <div className="text-center text-muted">
                  <MessageCircle size={48} className="mb-3" />
                  <p>Select a contact to start chatting</p>
                </div>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}