import React from "react";
import PropTypes from "prop-types";
import ContactFromContainer from "../../Containers/ContactForm/ContactFormContainer";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const Phonebook = ({
  contacts,
  filter,
  addContact,
  changeFilter,
  deleteContact,
  filterName,
}) => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactFromContainer addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      {contacts && contacts.length >= 2 && (
        <Filter value={filter} onChangeFilter={changeFilter}></Filter>
      )}
      <ContactList
        contactsFilter={filterName(contacts, filter)}
        deleteContact={deleteContact}
      />
    </>
  );
};

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  addContact: PropTypes.func,
  changeFilter: PropTypes.func,
  onDeleteContact: PropTypes.func,
  filterName: PropTypes.func,
};

export default Phonebook;
