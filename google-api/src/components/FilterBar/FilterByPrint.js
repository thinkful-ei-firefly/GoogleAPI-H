import React from "react";
import "./filterBar.css";

function FilterByPrint() {
  return (
    <section className="filterBar">
      <p>
        Print Type:
        <form className="search">
          <input type="text" className="input" placeholder="henry" required />
          <button type="submit" className="searchButton" />
        </form>
      </p>
    </section>
  );
}

export default FilterByPrint;
