import React, { useState } from "react";
import Phonebook from "../../Components/Phonebook/Phonebook";

const PhonebookContainer = (props) => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };
  const changeFilter = (e) => {
    const name = e.target.value;
    setFilter(name);
  };
  const filterName = (arr, filter) => {
    return arr.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((el) => el.id !== id));
  };
  return (
    <Phonebook
      contacts={contacts}
      addContact={addContact}
      changeFilter={changeFilter}
      deleteContact={deleteContact}
      filter={filter}
      filterName={filterName}
    />
  );
};

export default PhonebookContainer;
