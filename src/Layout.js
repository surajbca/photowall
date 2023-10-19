import React from "react";
import SearchBar from "./searchBar";

function Layout({ onSearch }) {
  const handleSearchTermChange = (term) => {
    // Handle the search term in the Layout component
    console.log("Search term in Layout:", term);
  };

  return (
    <header>
      <SearchBar
        onSearch={onSearch}
        onSearchTermChange={handleSearchTermChange}
      />
    </header>
  );
}

export default Layout;
