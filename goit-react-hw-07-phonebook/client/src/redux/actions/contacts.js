import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("addContact");
export const addContactRequest = createAction("addContactRequest");
export const addContactSuccess = createAction("addContactSuccess");
export const addContactError = createAction("addContactError");

export const deleteContact = createAction("deleteContact");
export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactError = createAction("deleteContactError");

export const getContacts = createAction("getContacts");
export const getContactsRequest = createAction("getContactsRequest");
export const getContactsSuccess = createAction("getContactsContacts");
export const getContactsError = createAction("getContactsError");

export const resetError = createAction("resetError");
