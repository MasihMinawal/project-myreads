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