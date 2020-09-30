import React from "react";
import PropTypes from "prop-types";

import { InputFilter, Wrap, Subtitle } from "./Filter.styles";

const Filter = ({ showFilter, filter, onChange }) => {
  return (
    <Wrap in={showFilter}>
      <Subtitle>Find contacts by name</Subtitle>
      <InputFilter
        type="text"
        value={filter}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrap>
  );
};

Filter.propTypes = {
  showFilter: PropTypes.bool,
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
