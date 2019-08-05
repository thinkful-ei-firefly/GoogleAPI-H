import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="searchBar">
      <p>
        Search:
        <form className="search">
          <input type="text" className="input" placeholder="henry" required />
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>
      </p>
    </section>
  );
}

export default SearchBar;
