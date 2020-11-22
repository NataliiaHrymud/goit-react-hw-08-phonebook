import React, { Component } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Accordion,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { addUserContact } from "../../redux/contacts/contactsOperations";

const initialState = {
  firstName: "",
  secondName: "",
  email: "",
  number: "",
};

class AddContact extends Component {
  state = {
    firstName: "",
    secondName: "",
    email: "",
    number: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { firstName, secondName, number } = this.state;
    const fullName = `${firstName} ${secondName}`;
    const contact = {
      name: fullName.replace(/\b\w/g, (l) => l.toUpperCase()),
      number: number,
    };
    this.props.addUserContact(contact);
    this.setState({ ...initialState });
  };

  render() {
    const { firstName, secondName, email, number } = this.state;
    return (
      <Container>
        <Accordion>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="button"
              eventKey="0"
              className="btn btn-primary"
            >
              Add contacts
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Header>
              <Row className="justify-content-md-center">
                <Col xs lg="5">
                  <h2 className="row row-cols-md-5 justify-content-center">
                    Add contacts
                  </h2>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="FirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="First Name"
                          name="firstName"
                          value={firstName}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="SecondName">
                        <Form.Label>Second Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Second Name"
                          name="secondName"
                          value={secondName}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={email}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Number</Form.Label>
                        <Form.Control
                          type="Number"
                          placeholder="Number"
                          name="number"
                          value={number}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Button
                      variant="primary"
                      type="button"
                      onClick={this.handleSubmit}
                    >
                      Add contacts
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Header>
          </Accordion.Collapse>
        </Accordion>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  addUserContact,
};

export default connect(null, mapDispatchToProps)(AddContact);
