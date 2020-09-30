import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.filter;
export const getLoader = (state) => state.loader;
export const getError = (state) => state.error;

export const contactsFiltered = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
