import React from "react";
import PropTypes from "prop-types";
import { ButtonDelete, NameContact, NumberContact } from "./ContactItem.styles";

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
      <NameContact>{name} :</NameContact>
      <NumberContact> {number}</NumberContact>
      <ButtonDelete onClick={onDelete}></ButtonDelete>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
