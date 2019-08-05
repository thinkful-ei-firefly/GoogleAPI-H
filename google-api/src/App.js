import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar/FilterBar";
import BookList from "./components/BookList";

class App extends Component {
  state = {
    books: [],
    apiKey: "AIzaSyCF2jhPtdXS0bO0z6DAwGn0ApfA2I4bw1Y"
  };

  handleSearchSubmit = ({ text, bookType, printType }) => {
    fetch(
      `https://googleapis.com/books/v1/volumes?q=${text}&filter=${bookType}&printType=${printType}&key=${
        this.state.apiKey
      }`
    )
      .then(res => res.json())
      .then(books => {
        console.log(books);
        this.setState({ books: books.item });
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
        <FilterBar />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
