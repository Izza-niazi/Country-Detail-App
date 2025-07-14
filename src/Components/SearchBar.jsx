import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ searchCountries, setSearchCountries }) => {
  return (
    <div className="search-wrapper">
      <FaSearch className="search-icon" />
      <input
        type="text"
        value={searchCountries}
        onChange={(e) => setSearchCountries(e.target.value)}
        className="search-input"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
