import React from "react";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../redux/actions/filter";
import { getFilter } from "../redux/selectors/";

import Filter from "../Components/Filter/Filter";

const FilterContainer = ({ showFilter }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => getFilter(state));
  const handleChange = (target) => {
    dispatch(filterContact(target));
  };
  return (
    <Filter showFilter={showFilter} filter={filter} onChange={handleChange} />
  );
};

Filter.propTypes = {
  showFilter: PropTypes.bool,
};

export default FilterContainer;
