import React from "react";
import PropTypes from "prop-types";
import { InputFilter } from "./Filter.styles";
const Filter = ({ value, onChangeFilter }) => (
  <InputFilter type="text" value={value} onChange={onChangeFilter} />
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
