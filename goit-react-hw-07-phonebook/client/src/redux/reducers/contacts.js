import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "../actions/contacts";

export default createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [getContacts]: (state, { payload }) => [...state, ...payload],
});
