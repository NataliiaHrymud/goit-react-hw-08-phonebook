import { createReducer } from "@reduxjs/toolkit";
import { statusLogOn, statusRemember } from "../status/statusActions";

const statusReducer = createReducer(
  { logOn: false, remember: false },
  {
    [statusLogOn]: (state, action) => ({
      ...state,
      logOn: action.payload,
    }),
    [statusRemember]: (state, action) => ({
      ...state,
      remember: action.payload,
    }),
  }
);

export default statusReducer;
