import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar/FilterBar";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookList: false
    };
  }

  render() {
    const page = this.state.showBookList ? (
      <List />
    ) : (
      <App books={this.state.books} />
    );

    return (
      <div className="App">
        <Header />
        <SearchBar />
        <FilterBar />
        {page}
      </div>
    );
  }
}

export default App;
