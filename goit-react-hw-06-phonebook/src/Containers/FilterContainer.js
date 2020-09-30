import React from "react";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../redux/reducers/filter";
import { filterState } from "../redux/reducers/filter";

import Filter from "../Components/Filter/Filter";

const FilterContainer = ({ showFilter }) => {
  const dispatch = useDispatch();
  const filter = useSelector(filterState);
  const handleChange = (target) => {
    dispatch(changeFilter(target));
  };
  return (
    <Filter showFilter={showFilter} filter={filter} onChange={handleChange} />
  );
};

Filter.propTypes = {
  showFilter: PropTypes.bool,
};

export default FilterContainer;
