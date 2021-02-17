import React, { Component } from "react";
import BookList from "./components/BookList";
import BookContextProvider from "./context/BookContext";
import ThemeContextProvider from "./context/ThemeContext";

class App extends Component {
  render() {
    return (
      <ThemeContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    );
  }
}

export default App;
