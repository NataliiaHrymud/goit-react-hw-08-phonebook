import { createAction } from "@reduxjs/toolkit";

const statusLogOn = createAction("CHENGE_STATUS_LOGON");
const statusRemember = createAction("CHENGE_STATUS_REMEMBER");

export { statusLogOn, statusRemember };
