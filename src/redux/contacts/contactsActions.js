import { createAction } from "@reduxjs/toolkit";

// User Action

const registrationRequest = createAction("userBook/registrationRequest");
const registrationSuccess = createAction("userBook/registrationSuccess");
const registrationError = createAction("userBook/registrationError");

const loginRequest = createAction("userBook/loginRequest");
const loginSuccess = createAction("userBook/loginSuccess");
const loginError = createAction("userBook/loginError");

const getUserRequest = createAction("userBook/getUserRequest");
const getUserSuccess = createAction("userBook/getUserSuccess");
const getUserError = createAction("userBook/getUserError");

const logoutRequest = createAction("userBook/logoutRequest");
const logoutSuccess = createAction("userBook/logoutSuccess");
const logoutError = createAction("userBook/logoutError");

// Contacts Action

const addContactsRequest = createAction("userBook/addRequest");
const addContactsSuccess = createAction("userBook/addSuccess");
const addContactsError = createAction("userBook/addError");

const getContactsRequest = createAction("contacts/getRequest");
const getContactsSuccess = createAction("contacts/getSuccess");
const getContactsError = createAction("contacts/getError");

const removeContactsRequest = createAction("contacts/removeRequest");
const removeContactsSuccess = createAction("contacts/removeSuccess");
const removeContactsError = createAction("contacts/removeError");

const getFilterValue = createAction("FILTER_ITEM");

export {
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
  getFilterValue,
};
