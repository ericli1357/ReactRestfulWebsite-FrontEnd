import axios from "axios";
import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Contact.css";

export default class Contact extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  }
  onChangeFirstName(e: any) {
    this.setState({ firstName: e.target.value });
  }
  onChangeLastName(e: any) {
    this.setState({ lastName: e.target.value });
  }
  onChangeEmail(e: any) {
    this.setState({ email: e.target.value });
  }
  onChangeMessage(e: any) {
    this.setState({ message: e.target.value });
  }

  onSubmit() {
    const message = {
      content:
        "Name : " +
        this.state.firstName +
        " " +
        this.state.lastName +
        "\nEmail:  " +
        this.state.email +
        "\nMessage: " +
        this.state.message,
    };
    const s = "s";
    fetch("http://localhost:5183/api/Home/sendEmail", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "same-origin",
      body: JSON.stringify(message),
    });
    this.setState({ firstName: "", lastName: "", email: "", message: "" });
  }

  render() {
    return (
      <Form style={{ width: "100%" }} onSubmit={this.onSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} sm="6">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter First Name"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Last Name"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            value={this.state.message}
            onChange={this.onChangeMessage}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
