import React from "react";
import "./filterBar.css";

function FilterByBook() {
  return (
    <section className="filterBar">
      <p>
        Book Type:
        <form className="search">
          <select
            class="filter-control"
            id="js-filter-control"
            name="filter"
            aria-label="Filter book by print type"
          >
            <option value="0">No Filter</option>
            <option value="5">ebooks</option>
            <option value="4">free-ebooks</option>
            <option value="3">full</option>
            <option value="2">paid-ebooks</option>
            <option value="2">partial</option>
          </select>
        </form>
      </p>
    </section>
  );
}

export default FilterByBook;
