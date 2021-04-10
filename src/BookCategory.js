import React, { Component } from 'react'
import Book from './Book';
import PropTypes from 'prop-types'


class BookCategory extends Component  {
  static propTypes = {
    filteredBooks: PropTypes.array.isRequired,
    onChangeRead: PropTypes.func.isRequired,
    onChangeNone: PropTypes.func.isRequired,
  }

render() {
  const { filteredBooks, categorie, onChangeRead, onChangeNone, bookss } = this.props;

  let categorieTitle = "";
  switch(categorie) {
    case "currentlyReading":
      categorieTitle = "Currently Reading";
      break;
    case "wantToRead":
      categorieTitle = "Want to Read";
      break;
    case "read":
      categorieTitle = "Read";
      break;
    default:
      categorieTitle = "Titel nicht geladen"
  }

    return(
        <div className="list-books-content">
            <div className="bookshelf">
                <h2 className="bookshelf-title">{categorieTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                            {filteredBooks.map(book => {
                                  if(filteredBooks.length > 0)
                                  {
                                    return (
                                        <li key={book.id}>
                                          <Book 
                                            bookss={bookss}
                                            book={book} 
                                            onChangeRead={onChangeRead} 
                                            onChangeNone={onChangeNone}/>
                                        </li>
                                    )
                                  }
                              }
                              )}
                            
                    </ol>
                </div>
            </div>
        </div>
    )
}
}

export default BookCategory;

/*
                            {this.state.bookss.map(book => 
                              {
                                return (<li>
                              {book.title}
                              </li>)
                              })}

                            */