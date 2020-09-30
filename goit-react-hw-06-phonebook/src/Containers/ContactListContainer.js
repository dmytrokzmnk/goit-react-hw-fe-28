import React from "react";

import { useSelector } from "react-redux";
import { contactsState } from "../redux/reducers/contacts";
import { filterState } from "../redux/reducers/filter";

import ContactList from "../Components/ContactList/ContactList";

const ContactListContainer = () => {
  const contacts = useSelector(contactsState);
  const filter = useSelector(filterState);

  const filteredContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredArr = filteredContacts(contacts, filter);

  return <ContactList filteredArr={filteredArr} />;
};

export default ContactListContainer;
