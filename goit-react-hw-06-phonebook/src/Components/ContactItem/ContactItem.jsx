import React from "react";
import PropTypes from "prop-types";
import { Button, Name, Number, Wrrap } from "./ContactItem.styles";

const ContactItem = ({ name, number, onDelete, Wrap }) => {
  return (
    <>
      <Name>{name} :</Name>
      <Number> {number}</Number>
      <Button onClick={onDelete}></Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
