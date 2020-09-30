import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { asyncAddContact } from "../redux/operations";
import { getContacts } from "../redux/selectors";

import ContactForm from "../Components/ContactForm/ContactForm";

const formInitialState = {
  name: "",
  number: "",
};

toast.configure();

const ContactFormContainer = () => {
  const notify = (field) => toast.error(`💩 Contact ${field} is too short!`);
  const notifyAlert = (is) => toast.success(`Please enter only ${is}`);
  const [form, setForm] = useState(formInitialState);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => getContacts(state));
  const inputHandler = (e) => {
    const name = e.target.name;
    let value = "";
    if (name === "name") {
      value = e.target.value.replace(/[^A-zА-яЁё\s]+/gi, "");

      const numbersCheck = /\d+/g;
      if (numbersCheck.exec(e.target.value)) {
        notifyAlert("letters");
      }
    }
    if (name === "number") {
      value = e.target.value.replace(/[^\d\s,+,-,(,)]+/gi, "");
      const lettersCheck = /[A-zА-яЁё]+/g;
      if (lettersCheck.exec(e.target.value)) {
        notifyAlert("numbers");
      }
    }
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = {
      name,
      number,
    };

    const isExistName = contacts.find((el) => el.name === contact.name);
    if (isExistName) {
      setAlert(true);
      return;
    }

    if (contact.name.length <= 1) {
      notify("name");
      return;
    } else if (contact.number.length <= 1) {
      notify("number");
      return;
    }

    dispatch(asyncAddContact(contact));
    setForm(formInitialState);
  };
  const disabledAlert = () => {
    setAlert(false);
  };
  const { name, number } = form;
  return (
    <ContactForm
      name={name}
      number={number}
      onSubmit={submitHandler}
      onChange={inputHandler}
      disabledAlert={disabledAlert}
      alert={alert}
    />
  );
};

export default ContactFormContainer;
