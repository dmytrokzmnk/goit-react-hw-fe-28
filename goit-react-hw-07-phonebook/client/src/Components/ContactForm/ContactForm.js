import React from "react";
import PropTypes from "prop-types";
import { Message, Form, Label, Input, Button } from "./ContactForm.styles";

const ContactForm = ({
  name,
  number,
  onSubmit,
  onChange,
  disabledAlert,
  alert,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          autoFocus
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input type="text" name="number" value={number} onChange={onChange} />
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
  number: PropTypes.string,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  disabledAlert: PropTypes.func,
  alert: PropTypes.bool,
};

export default ContactForm;
