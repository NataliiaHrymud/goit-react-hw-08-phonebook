import { createReducer } from "@reduxjs/toolkit";
import {
  registrationSuccess,
  loginSuccess,
  getUserSuccess,
  logoutSuccess,
  registrationError,
  loginError,
  getUserError,
  logoutError,
  addContactsSuccess,
  addContactsError,
  getContactsSuccess,
  getContactsError,
  removeContactsSuccess,
  removeContactsError,
  getFilterValue,
} from "../contacts/contactsActions";

const initialState = {
  user: null,
  token: null,
  contacts: [],
  error: null,
  filter: "",
};

const contactsReducer = createReducer(
  { user: null, token: null, contacts: [], error: null, filter: "" },
  {
    [registrationSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [registrationError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [loginSuccess]: (state, action) => ({ ...state, ...action.payload }),
    [loginError]: (state, action) => ({ ...state, error: action.payload }),
    [getUserSuccess]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [getUserError]: (state, action) => ({ ...state, ...action.payload }),
    [logoutSuccess]: () => ({
      ...initialState,
    }),
    [logoutError]: (state, action) => ({ ...state, error: action.payload }),
    [addContactsSuccess]: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),
    [getContactsSuccess]: (state, action) => ({
      ...state,
      contacts: action.payload,
    }),
    [addContactsError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [getContactsError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [removeContactsSuccess]: (state, action) => ({
      ...state,
      contacts: [
        ...state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
      ],
    }),
    [removeContactsError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [getFilterValue]: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  }
);

export default contactsReducer;
