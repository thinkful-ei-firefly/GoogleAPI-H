import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <FilterBar />
    </div>
  );
}

export default App;
