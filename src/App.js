import React, { Suspense, lazy, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import {
  getUserToken,
  getErrorMessage,
} from "./redux/contacts/contactsSelectors";
import { getUser } from "./redux/contacts/contactsOperations";
import { registrationError } from "./redux/contacts/contactsActions";
import { getStatusLogOn } from "./redux/status/statusSelectors";
import PublicRoutes from "./components/PublicRoutes";
import PrivateRoutes from "./components/PrivateRoutes";
import ErrorMessage from "./components/AlertPage/ErrorMessage";

const StartPage = lazy(() => import("./components/HomePage/StartPage"));
const UserPage = lazy(() => import("./components/HomePage/UserPage"));
const LoginPage = lazy(() => import("./components/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("./components/RegistrationPage/RegistrationPage")
);
const ContactList = lazy(() => import("./components/Contacts/ContactList"));
const LogOut = lazy(() => import("./components/AlertPage/LogOut"));

class App extends Component {
  componentDidMount() {
    this.props.getUser(this.props.token);
  }
  componentDidUpdate() {
    if (this.props.message) {
      return setTimeout(() => {
        this.props.registrationError(null);
      }, 3000);
    }
  }
  render() {
    const { logOn, message } = this.props;
    return (
      <>
        <Layout>
          <Suspense
            fallback={
              <div>
                <Spinner animation="border" />
              </div>
            }
          >
            <Switch>
              <Route
                path={routes.home}
                exact
                component={logOn ? UserPage : StartPage}
              />
              <PublicRoutes
                path={routes.home}
                exact
                restricted
                redirectTo={routes.contacts}
                component={logOn ? UserPage : StartPage}
              />
              <PublicRoutes
                path={routes.login}
                restricted
                redirectTo={routes.home}
                component={LoginPage}
              />
              <PublicRoutes
                path={routes.register}
                restricted
                redirectTo={routes.home}
                component={RegistrationPage}
              />
              <PrivateRoutes
                path={routes.contacts}
                redirectTo={routes.login}
                component={ContactList}
              />
              <PrivateRoutes
                path={routes.logout}
                redirectTo={routes.login}
                component={LogOut}
              />
              <Redirect to={routes.home} />
            </Switch>
          </Suspense>
        </Layout>
        {message && <ErrorMessage error={message} />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: getUserToken(state),
    logOn: getStatusLogOn(state),
    message: getErrorMessage(state),
  };
};

const mapDispatchToProps = {
  getUser,
  registrationError,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
