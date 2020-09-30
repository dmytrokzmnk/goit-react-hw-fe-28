import React from "react";
import PropTypes from "prop-types";

const Searchbar = ({ onSubmit, onChange, query }) => {
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={onChange}
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Searchbar;
