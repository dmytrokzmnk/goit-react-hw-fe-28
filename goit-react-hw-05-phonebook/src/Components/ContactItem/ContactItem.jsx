import React from "react";
import PropTypes from "prop-types";
import { Button, Name, Number } from "./ContactItem.styles";

const ContactItem = ({ name, number, deleteContact }) => {
  return (
    <>
      <Name>{name} :</Name>
      <Number> {number}</Number>
      <Button onClick={deleteContact}> delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
