import React from "react";
import PropTypes from "prop-types";

import { remove } from "../redux/reducers/contacts";
import { useDispatch } from "react-redux";

import ContactItem from "../Components/ContactItem/ContactItem";

const ContactItemContainer = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(remove(id));
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
