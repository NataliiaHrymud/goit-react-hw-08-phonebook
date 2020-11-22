import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function StartPage() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Hello on your Phonebook</h1>
        <p>
          Welcome to the application for storing personal contacts. To get
          started, select the registration menu item to add your contacts. If
          you already have an account, go to the login page to get started.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default StartPage;
