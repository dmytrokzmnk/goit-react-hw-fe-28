import React from "react";
import PropTypes from "prop-types";
import { List, Item } from "./ContactList.styles";
import ContactItem from "../ContactItem/ContactItem";
import { TransitionGroup } from "react-transition-group";

const ContactList = ({ contactsFilter, deleteContact }) => {
  return (
    <TransitionGroup component={List}>
      {contactsFilter.map((el) => (
        <Item key={el.id}>
          <ContactItem
            {...el}
            deleteContact={() => deleteContact(el.id)}
          ></ContactItem>
        </Item>
      ))}
    </TransitionGroup>
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
