import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getStatusLogOn } from "../redux/status/statusSelectors";

const PrivateRoute = ({
  component: Component,
  logOn,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      logOn ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = (state) => ({
  logOn: getStatusLogOn(state),
});

export default connect(mapStateToProps)(PrivateRoute);
