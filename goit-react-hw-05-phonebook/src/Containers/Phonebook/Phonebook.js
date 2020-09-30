import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";
import Filter from "../../Components/Filter/Filter";

import storage from "../../helpers/storage";
import { Title } from "./Phonebook.styles";

toast.configure();

const Phonebook = () => {
  const notify = (field) => toast.error(`💩 Contact ${field} is too short!`);

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [visible, setVisible] = useState(false);
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
    return arr.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((el) => el.id !== id));
  };

  //componentDidMount

  useEffect(() => {
    setVisible(true);
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
      <Title in={visible}>Phonebook</Title>
      <ContactForm addContact={addContact} contacts={contacts} />
      <Filter
        value={filter}
        onChangeFilter={changeFilter}
        showFilter={contacts.length >= 2}
      />
      <ContactList
        contactsFilter={filterName(contacts, filter)}
        deleteContact={deleteContact}
      />
    </>
  );
};

export default Phonebook;
