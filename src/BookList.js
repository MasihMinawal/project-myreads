import React, { Component } from 'react'
import BookCategory from './BookCategory';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class BookList extends Component  {
  static propTypes = {
    onChangeRead: PropTypes.func.isRequired,
    onChangeNone: PropTypes.func.isRequired,
  }

  render() {
    const { bookss, categories, onChangeRead, onChangeNone } = this.props;

return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="bookCategories">
        {categories.map(categorie => {
          return (
            <div key={categorie}>
            <BookCategory 
            bookss={bookss}
            categorie={categorie}
            filteredBooks={bookss.filter(book => {if(book.shelf === categorie){return book}})}
            onChangeRead={onChangeRead} 
            onChangeNone={onChangeNone}/>
            </div>
          )
        })}
    </div>
    <div className="open-search">
      <Link to="/search">
      <button>Add a book</button>
      </Link>
    </div>
  </div>

    )
}
}
export default BookList;



/*
import React, { Component } from 'react'
import BookCategory from './BookCategory';
import * as BooksAPI from './BooksAPI'

class BookList extends Component  {
  state = {
    bookss: [],
    localBookArray: ["jAUODAAAQBAJ", "nggnmAEACAAJ", "sJf1vQAACAAJ", "evuwdDLfAyYC", "74XNzF_al3MC", "IOejDAAAQBAJ", "1wy49i-gQjIC"],
    categories: ["currentlyReading", "wantToRead", "read"]
  }

  loadBook = (id) => {
    BooksAPI.get(id)
    .then((books) => {
      this.setState({
        bookss: [...this.state.bookss, books]
      })
    })
  }

  componentDidMount = () => {
    this.state.localBookArray.map(myRead => {
      this.loadBook(myRead)
    })

  }

  removeBook = (bookid) => {
    console.log(bookid)
    let copyBookss = [];
      this.state.bookss.filter(copyBook => {if(bookid !== copyBook.id){copyBookss.push(copyBook)}})
      this.setState({bookss: copyBookss})
      console.log("deleted local from MyReads")
   }

   updateBook = (bookid, shelf) => {
     console.log("trying to update " + bookid + " " + shelf)
     BooksAPI.update(bookid, shelf)
     .then(this.removeBook(bookid))
     .then(this.loadBook(bookid))
     .then(console.log("moved to " + shelf))
   }



  render() {
return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="bookCategories">
        {this.state.categories.map(categorie => {
          return (
            <div key={categorie}>
            <BookCategory 
            categorie={categorie}
            filteredBooks={this.state.bookss.filter(book => {if(book.shelf === categorie){return book}})}
            onChangeRead={this.updateBook} 
            onChangeNone={this.removeBook}/>
            </div>
          )
        })}
    </div>
    <div className="open-search">
      <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
    </div>
  </div>

    )
}
}
export default BookList;

*/






/*
<div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
      </div>

*/