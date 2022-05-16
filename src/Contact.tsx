import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Contact.css";

export const Contact = () => (
  <Form style={{ width: "100%" }}>
    <Row className="mb-3">
      <Form.Group as={Col} sm="6">
        <Form.Label>First Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group as={Col} sm="6">
        <Form.Label>Last Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter Last Name" />
      </Form.Group>
    </Row>
    <Form.Group className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control required type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Message</Form.Label>
      <Form.Control required as="textarea" rows={3} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);
