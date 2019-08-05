import React from "react";
import "./filterBar.css";

function FilterByPrint() {
  return (
    <section className="filterBar">
      <div>
        Print Type:
        <form className="filter">
          <select
            className="filter-control"
            id="js-filter-control"
            name="filter"
            aria-label="Filter book by print type"
          >
            <option value="0">All</option>
            <option value="1">Books</option>
            <option value="2">Magazines</option>
          </select>
        </form>
      </div>
    </section>
  );
}

export default FilterByPrint;
