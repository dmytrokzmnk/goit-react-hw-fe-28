import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../redux/selectors";
import { asyncGetContacts } from "../redux/operations";

import Phonebook from "../Components/Phonebook/Phonebook";

const PhonebookContainer = () => {
  const contacts = useSelector((state) => getContacts(state));
  const dispatch = useDispatch();
  const [visibleLogo, setVisibleLogo] = useState(false);

  useEffect(() => {
    setVisibleLogo(true);
    dispatch(asyncGetContacts());
  }, [dispatch]);

  return (
    <Phonebook visibleLogo={visibleLogo} showFilter={contacts.length >= 2} />
  );
};

export default PhonebookContainer;
