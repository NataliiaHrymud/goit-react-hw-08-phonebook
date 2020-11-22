import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { registrationUser } from "../../redux/contacts/contactsOperations";
import { registrationError } from "../../redux/contacts/contactsActions";

const initialState = {
  firstName: "",
  secondName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

class RegistrationPage extends Component {
  state = {
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const {
      firstName,
      secondName,
      email,
      password,
      confirmPassword,
    } = this.state;
    const user = {
      name: `${firstName} ${secondName}`,
      email: email,
      password: password,
    };
    if (password !== confirmPassword) {
      this.props.registrationError("password dismach");
      return;
    } else {
      this.props.registrationUser(user);
    }
    this.setState({ ...initialState });
  };

  render() {
    const {
      firstName,
      secondName,
      confirmPassword,
      email,
      password,
    } = this.state;
    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Registration</h2>
            <Form type="form">
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="firstName"
                  name="firstName"
                  value={firstName}
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="secondName">
                <Form.Label>Second Name</Form.Label>
                <Form.Control
                  type="secondName"
                  name="secondName"
                  value={secondName}
                  placeholder="Second Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  suggested="email"
                  autoComplete="email"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  suggested="password"
                  autoComplete="new-password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  suggested="confirmPassword"
                  autoComplete="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  registrationUser,
  registrationError,
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
