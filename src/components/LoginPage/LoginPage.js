import React, { Component } from "react";
import { loginUser } from "../../redux/contacts/contactsOperations";
import { statusRemember } from "../../redux/status/statusActions";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  email: "",
  password: "",
};

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.loginUser(this.state);
    this.setState({ ...initialState });
  };

  handleCheked = (e) => {
    const { statusRemember } = this.props;
    const check = e.target.checked;
    statusRemember(check);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  suggested="email"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  suggested="password"
                  name="password"
                  value={password}
                  autoComplete="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  onChange={this.handleCheked}
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
  loginUser,
  statusRemember,
};

export default connect(null, mapDispatchToProps)(LoginPage);
