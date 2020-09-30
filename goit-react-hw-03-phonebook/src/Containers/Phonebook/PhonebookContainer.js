import React, { useState, useEffect } from "react";
import Phonebook from "../../Components/Phonebook/Phonebook";
import storage from "../../helpers/storage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const PhonebookContainer = () => {
  const notify = (field) => toast.error(`💩 Contact ${field} is too short!`);

  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState("");
  const addContact = (contact) => {
    if (contact.name.length > 1 && contact.number.length > 1) {
      setContacts([...contacts, contact]);
    } else if (contact.name.length <= 1) {
      notify("name");
    } else if (contact.number.length <= 1) {
      notify("number");
    }
  };

  const changeFilter = (e) => {
    const name = e.target.value;
    setFilter(name);
  };
  const filterName = (arr, filter) => {
    if (!arr) {
      return [];
    }
    return arr.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((el) => el.id !== id));
  };

  //componentDidMount

  useEffect(() => {
    const contactsData = storage.get("contacts");
    if (!contactsData) {
      storage.save("contacts", []);
      setContacts([]);
      return;
    }
    setContacts(contactsData);
  }, []);

  //componentDidUpdate

  useEffect(() => {
    storage.save("contacts", contacts);
  }, [contacts]);

  return (
    <>
      <Phonebook
        contacts={contacts}
        addContact={addContact}
        changeFilter={changeFilter}
        deleteContact={deleteContact}
        filter={filter}
        filterName={filterName}
      />
    </>
  );
};

export default PhonebookContainer;
