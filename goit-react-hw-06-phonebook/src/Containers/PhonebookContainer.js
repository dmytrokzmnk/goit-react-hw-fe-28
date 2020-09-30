import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { show } from "../redux/reducers/contacts";
import { contactsState } from "../redux/reducers/contacts";

import Phonebook from "../Components/Phonebook/Phonebook";
import storage from "../helpers/storage";

const PhonebookContainer = () => {
  const contacts = useSelector(contactsState);
  const dispatch = useDispatch();
  const [visibleLogo, setVisibleLogo] = useState(false);

  useEffect(() => {
    setVisibleLogo(true);
    const contactsData = storage.get("contacts");
    if (!contactsData) {
      storage.save("contacts", []);
      return;
    }
    dispatch(show(contactsData));
  }, [dispatch]);

  useEffect(() => {
    storage.save("contacts", contacts);
  }, [contacts]);

  return (
    <Phonebook visibleLogo={visibleLogo} showFilter={contacts.length >= 2} />
  );
};

export default PhonebookContainer;
