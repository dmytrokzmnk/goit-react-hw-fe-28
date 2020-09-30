import React, { useState } from "react";
import PropTypes from "prop-types";
import { Message, Form, Label, Input, Button } from "./ContactForm.styles";
import { v1 as uuidv4 } from "uuid";

const formInitialState = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact, contacts }) => {
  const [form, setForm] = useState(formInitialState);
  const [alert, setAlert] = useState(false);
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
      setAlert(true);
      return;
    }
    addContact(contact);
    setForm(formInitialState);
  };
  const disabledAlert = () => {
    setAlert(false);
  };
  const { name, number } = form;
  return (
    <Form onSubmit={submitHandler}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={inputHandler}
          autoFocus
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="text"
          name="number"
          value={number}
          onChange={inputHandler}
        />
      </Label>
      <Button type="submit" disabled={!name || !number}>
        Add Contact
      </Button>
      <Message in={alert} onEntered={disabledAlert}>
        <span>Contact is already exist</span>
      </Message>
    </Form>
  );
};
ContactForm.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  onSubmitHandler: PropTypes.func,
  onInputHandler: PropTypes.func,
};

export default ContactForm;
