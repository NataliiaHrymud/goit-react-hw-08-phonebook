import React from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/contacts/contactsSelectors";
import { Jumbotron, Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function UserPage({ user }) {
  return (
    <Jumbotron fluid>
      <Container>
        {user ? (
          <h1>Hello {user.name} on your Phonebook</h1>
        ) : (
          <Spinner animation="border" />
        )}
        <p>
          Welcome to the application for storing personal contacts. Go to the
          contacts tab to work with your phone book.
        </p>
      </Container>
    </Jumbotron>
  );
}

const mapStateToProps = (state) => {
  return {
    user: getUserInfo(state),
  };
};

export default connect(mapStateToProps, null)(UserPage);
