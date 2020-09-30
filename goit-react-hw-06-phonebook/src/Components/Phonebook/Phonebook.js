import React from "react";
import PropTypes from "prop-types";

import ContactFormContainer from "../../Containers/ContactsFormContainer";
import ContactListContainer from "../../Containers/ContactListContainer";
import FilterContainer from "../../Containers/FilterContainer";

import { Title } from "./Phonebook.styles";

const Phonebook = ({ showFilter, visibleLogo }) => (
  <>
    <Title in={visibleLogo}>Phonebook</Title>
    <ContactFormContainer />
    <FilterContainer showFilter={showFilter} />
    <ContactListContainer />
  </>
);

Phonebook.propTypes = {
  showFilter: PropTypes.bool,
  visibleLogo: PropTypes.bool,
};

export default Phonebook;
