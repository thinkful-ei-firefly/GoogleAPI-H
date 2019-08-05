import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    text: "",
    bookType: "ebooks",
    printType: "all"
  };

  handleSubmit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section className="searchBar">
        <div>
          Search:
          <form
            onSubmit={e => {
              e.preventDefault();
              console.log(
                "submitted",
                this.state.printType,
                this.state.bookType,
                this.state.text
              );
              this.props.handleSearchSubmit(this.state);
            }}
            className="search"
          >
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleSubmit}
              className="input"
              placeholder="henry"
              required
            />
            <button type="submit" className="searchButton">
              Search
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchBar;
