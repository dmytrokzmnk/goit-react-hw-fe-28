import { createReducer } from "@reduxjs/toolkit";

import {
  addContactRequest,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  getContactsRequest,
  getContactsSuccess,
  addContactError,
  deleteContactError,
  getContactsError,
} from "../actions/contacts";

export default createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactError]: () => false,
  [getContactsError]: () => false,
});
