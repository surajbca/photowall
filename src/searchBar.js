import React, { useState } from "react";

function SearchBar({ onSearch, onSearchTermChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchTermChange(term); // Pass the search term back to the parent component
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container">
        <form className="d-flex mx-auto d-block">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search images..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-success" onClick={handleSearch}>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
