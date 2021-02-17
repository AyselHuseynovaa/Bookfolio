import React, { Component } from "react";
import Book from "./Book";
import "../style/BookList.css";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
  render() {
    return (

<ThemeContext.Consumer>

{(ContextTheme)=>{
  <BookContext.Consumer>
  {(ContextBook) => {
    const {books}=ContextBook
    const {changeTheme,isDarkTheme,dark,light}=ContextTheme;
    const theme=isDarkTheme?dark:light
          return (
            <section className="page-section" style={{background:theme.bg, color:theme.txt}} id="portfolio">
              <div className="container">
                <div className="text-center">
                  <h2 className="section-heading text-uppercase">BookFolio</h2>
                  <h3 className="section-subheading text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <button type="button" className="btn btn-sm btn-info" style={{marginTop: '-70px'}}
                                onClick={changeTheme}>Change Theme</button>
                </div>
                <div className="row">
                  {books.map((book, i) => {
                    return <Book book={book} key={i} />;
                  })}
                </div>
              </div>
            </section>
          )
        }}
      </BookContext.Consumer>
}}
  
</ThemeContext.Consumer>

     
    );
  }
}
export default BookList;
