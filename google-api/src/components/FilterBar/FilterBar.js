import React from "react";
import FilterByPrint from "./FilterByPrint";
import filterByBook from "./FilterByBook";

function FilterBar() {
  return (
    <div className="filterBar">
      <FilterByPrint />
      <filterByBook />
    </div>
  );
}

export default FilterBar;
