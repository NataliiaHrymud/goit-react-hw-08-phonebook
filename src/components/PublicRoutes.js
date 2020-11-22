import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getStatusLogOn } from "../redux/status/statusSelectors";

const PublicRoute = ({
  component: Component,
  logOn,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      logOn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  logOn: getStatusLogOn(state),
});

export default connect(mapStateToProps, null)(PublicRoute);
