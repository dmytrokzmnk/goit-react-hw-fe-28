import React from "react";
import PropTypes from "prop-types";
import { List } from "./ContactList.styles";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contactsFilter, deleteContact }) => {
  return (
    contactsFilter.length > 0 && (
      <List>
        {contactsFilter.map((el) => (
          <ContactItem
            key={el.id}
            {...el}
            deleteContact={() => deleteContact(el.id)}
          />
        ))}
      </List>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
