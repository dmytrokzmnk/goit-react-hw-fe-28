import React, { useState } from "react";
import PropTypes from "prop-types";
import Searchbar from "../../Components/Searchbar/Searchbar";
import prevState from "../../hooks/previousState";
const SearchbarContainer = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const prevQuery = prevState(query);
  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query, null, prevQuery);
    setQuery("");
  };
  return (
    <Searchbar onSubmit={handleSubmit} onChange={handleChange} query={query} />
  );
};
SearchbarContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchbarContainer;
