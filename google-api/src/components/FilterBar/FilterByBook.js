import React from "react";
import "./filterBar.css";

function FilterByBook() {
  return (
    <section className="searchBar">
      <p>
        Book Type:
        <form className="search">
          <input type="text" className="input" placeholder="henry" required />
          <button type="submit" className="searchButton" />
        </form>
      </p>
    </section>
  );
}

export default FilterByBook;
