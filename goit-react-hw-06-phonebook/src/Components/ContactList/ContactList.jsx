import React from "react";
import PropTypes from "prop-types";

import ContactItemContainer from "../../Containers/ContactItemContainer";

import { List, Item } from "./ContactList.styles";
import { TransitionGroup } from "react-transition-group";

const ContactList = ({ filteredArr }) => {
  return (
    <TransitionGroup component={List}>
      {filteredArr.map((contact) => (
        <Item key={contact.id}>
          <ContactItemContainer contact={contact} />
        </Item>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  filteredArr: PropTypes.array,
};

export default ContactList;
