import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "../../routes";

function PublicMenu({ user }) {
  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/home"
      className="justify-content-end"
    >
      <Nav.Item>
        <Link to={routes.login} className="nav-link">
          Login
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={routes.register} className="nav-link">
          Registration
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default PublicMenu;
