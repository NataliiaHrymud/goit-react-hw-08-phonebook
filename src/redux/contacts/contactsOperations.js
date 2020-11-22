import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  getUserRequest,
  getUserSuccess,
  getUserError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from "./contactsActions";
import { statusLogOn } from "../status/statusActions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

// axios.defaults.baseURL = "https://lpj-tasker.herokuapp.com";

const tokenSet = (token) =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const tokenUnset = () => (axios.defaults.headers.common.Authorization = "");

const registrationUser = (user) => (dispatch) => {
  dispatch(registrationRequest());
  axios
    .post("/users/signup", user)
    .then((response) => {
      tokenSet(response.data.token);
      dispatch(statusLogOn(true));
      dispatch(registrationSuccess({ ...response.data }));
    })
    .catch((error) => dispatch(registrationError(error.message)));
};

const loginUser = (user) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post("/users/login", user)
    .then((response) => {
      tokenSet(response.data.token);
      dispatch(statusLogOn(true));
      dispatch(loginSuccess({ ...response.data }));
    })
    .catch((error) => dispatch(loginError(error.message)));
};

const getUser = (token) => (dispatch) => {
  if (!token) {
    dispatch(statusLogOn(false));
    return;
  }
  tokenSet(token);
  dispatch(statusLogOn(true));
  dispatch(getUserRequest());

  axios
    .get("/users/current")
    .then((response) => {
      dispatch(getUserSuccess({ ...response.data }));
    })
    .catch((error) => dispatch(getUserError(error.message)));
};

const logoutUser = () => (dispatch) => {
  dispatch(logoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      tokenUnset();
      dispatch(statusLogOn(false));
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error.message)));
};

const addUserContact = (contact) => (dispatch) => {
  dispatch(addContactsRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => {
      dispatch(addContactsSuccess(data));
    })
    .catch((error) => dispatch(addContactsError(error.message)));
};

const getContacts = (token) => (dispatch) => {
  if (!token) {
    return;
  }
  tokenSet(token);
  dispatch(getContactsRequest());
  axios
    .get("/contacts")
    .then((response) => {
      dispatch(getContactsSuccess(response.data));
    })
    .catch((error) => dispatch(getContactsError(error.message)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(removeContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(removeContactsSuccess(id));
    })
    .catch((error) => dispatch(removeContactsError(error.message)));
};

export {
  registrationUser,
  loginUser,
  getUser,
  logoutUser,
  addUserContact,
  getContacts,
  removeContact,
};
