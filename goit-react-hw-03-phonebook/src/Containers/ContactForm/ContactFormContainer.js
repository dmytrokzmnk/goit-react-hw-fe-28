import React, { useState } from "react";
import { v1 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import ContactForm from "../../Components/ContactForm/ContactForm";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const formInitialState = {
  name: "",
  number: "",
};

const ContactFormContainer = ({ addContact, contacts }) => {
  const [form, setForm] = useState(formInitialState);

  const notify = (name) => toast(`🦄 ${name} is already in contacts`);

  const inputHandler = (e) => {
    const name = e.target.name;
    let value = "";
    if (name === "name") {
      value = e.target.value.replace(/[^A-zА-яЁё\s]+/gi, "");
    }
    if (name === "number") {
      value = e.target.value.replace(/[^\d\s,+,(,)]+/gi, "");
    }
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    const isExistName = contacts.find((el) => el.name === contact.name);
    if (isExistName) {
      notify(contact.name);
      return;
    }
    addContact(contact);
    setForm(formInitialState);
  };

  const { name, number } = form;
  return (
    <ContactForm
      name={name}
      number={number}
      onSubmitHandler={submitHandler}
      onInputHandler={inputHandler}
    />
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactFormContainer;
