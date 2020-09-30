import React from "react";
import PropTypes from "prop-types";
import { Form, Label, Input, Button } from "./ContactForm.styles";

const ContactForm = ({ number, name, onSubmitHandler, onInputHandler }) => {
  return (
    <Form onSubmit={onSubmitHandler}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onInputHandler}
          autoFocus
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="text"
          name="number"
          value={number}
          onChange={onInputHandler}
        />
      </Label>
      <Button type="submit" disabled={!name || !number}>
        Add Contact
      </Button>
    </Form>
  );
};
ContactForm.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  onInputHandler: PropTypes.func.isRequired,
};

export default ContactForm;
