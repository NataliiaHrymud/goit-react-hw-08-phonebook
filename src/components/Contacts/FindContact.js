import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Accordion,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { getFilterValue } from "../../redux/contacts/contactsActions";

function FindContact({ getFilterValue }) {
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
            Find contacts
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Header>
            <Row className="justify-content-md-center">
              <Col xs lg="5">
                <h2 className="row row-cols-md-5 justify-content-center">
                  Find contacts
                </h2>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Start enter username"
                    aria-label="Start enter username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => getFilterValue(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Card.Header>
        </Accordion.Collapse>
      </Accordion>
    </Container>
  );
}

const mapDispatchToProps = {
  getFilterValue,
};

export default connect(null, mapDispatchToProps)(FindContact);
