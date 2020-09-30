import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { asyncDeleteContact } from "../redux/operations";

import ContactItem from "../Components/ContactItem/ContactItem";

const ContactItemContainer = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(asyncDeleteContact(id));
  };
  return <ContactItem onDelete={onDelete} name={name} number={number} />;
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    contact: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func,
};

export default ContactItemContainer;
