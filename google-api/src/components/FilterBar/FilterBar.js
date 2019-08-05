import React from "react";
import FilterByPrint from "./FilterByPrint";
import FilterByBook from "./FilterByBook";
import "./filterBar.css";

function FilterBar() {
  return (
    <div className="filterBar">
      <FilterByPrint />
      <FilterByBook />
    </div>
  );
}

export default FilterBar;
