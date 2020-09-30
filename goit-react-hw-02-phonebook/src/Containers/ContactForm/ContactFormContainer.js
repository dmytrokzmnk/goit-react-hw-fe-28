import React, { useState } from "react";
import { v1 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import ContactForm from "../../Components/ContactForm/ContactForm";

const formInitialState = {
  name: "",
  number: "",
};

const ContactFormContainer = ({ addContact, contacts }) => {
  const [form, setForm] = useState(formInitialState);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
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
      alert(`${contact.name} is already in contacts`);
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
    ></ContactForm>
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
