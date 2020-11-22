import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserMenu from "./UserMenu";
import routes from "../../routes";
import { connect } from "react-redux";
import { getStatusLogOn } from "../../redux/status/statusSelectors";
import PublicMenu from "./PublicMenu";

function Navigation({ logOn, props }) {
  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        className="justify-content-end"
      >
        <Nav.Item>
          <Link to={routes.home} className="nav-link">
            Home Page
          </Link>
        </Nav.Item>
        {logOn ? <UserMenu /> : <PublicMenu />}
      </Nav>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    logOn: getStatusLogOn(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
