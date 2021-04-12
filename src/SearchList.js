import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Book from './Book'
import SearchTermList from './SearchTerms'

class SearchList extends Component  {
  state = {
    searchedBooks: [],
  }

  static propTypes = {
    onChangeRead: PropTypes.func.isRequired,
    onChangeNone: PropTypes.func.isRequired,
  }


  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  loadSearch = (input) => {  
  BooksAPI.search(input)
  .then((books) => {
    if((input === "") || (!SearchTermList.includes(this.capitalizeFirstLetter(input)))){ console.log("Your Search Input is invalid. Please use a valid word.") 
       this.setState({
      searchedBooks: []
    }) }else{
    (Array.isArray(books)) && (
      this.setState({
        searchedBooks: books
      })
    )
  }}
  )
}


userInput = (inputString) => {
  this.loadSearch(inputString)
}

  render() {
  const { bookss, onChangeNone, onChangeRead } = this.props;
  const test = "art";

return (
  <div className="search-books">
        <div className="search-books-bar">
              <Link to="/">
              <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <SearchBar 
                  placeholder="Search by title or author"
                  userInput={this.userInput}
                />
              </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchedBooks.filter(book => {if(book.imageLinks){return book}})
                .map(book => {
                      return (
                        <li key={book.id}>
                          <Book 
                            bookss={bookss}
                            book={book} 
                            onChangeRead={onChangeRead} 
                            onChangeNone={onChangeNone}/>
                        </li>
                      )
                  })
              }
            </ol>
        </div>
  </div>
)
  }
}

export default SearchList;