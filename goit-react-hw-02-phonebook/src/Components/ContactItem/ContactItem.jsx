import React from "react";
import PropTypes from "prop-types";
import { Item, Button, Name, Number } from "./ContactItem.styles";

const ContactItem = ({ name, number, deleteContact }) => {
  return (
    <Item>
      <Name>{name} :</Name>
      <Number> {number}</Number>
      <Button onClick={deleteContact}> delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
