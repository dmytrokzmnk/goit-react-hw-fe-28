import React from "react";

import { useSelector } from "react-redux";

import { contactsFiltered } from "../redux/selectors";

import ContactList from "../Components/ContactList/ContactList";

const ContactListContainer = () => {
  const filteredArr = useSelector((state) => contactsFiltered(state));

  return <ContactList filteredArr={filteredArr} />;
};

export default ContactListContainer;
