import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeRead: PropTypes.func.isRequired,
        onChangeNone: PropTypes.func.isRequired,
      }
          
render() {
    const { book, onChangeRead, onChangeNone, bookss} = this.props

    function listChange() {
      let value = document.getElementById("select-" + book.id).value;
      if (value === "none") {
        onChangeNone(book.id)
      } else if (value !== "") {
        onChangeRead(book.id, value)
      } 
    }

    function getShelf() {
      let selectedValue = "none"
      bookss.map(localBook => {
        if(localBook.id === book.id)
        {
          selectedValue = localBook.shelf
        }
      })
      return selectedValue
    }

        


    return (
      <div>
          <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select id={"select-" + book.id} value={getShelf()} onChange={() =>listChange()}>
                <option value="" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
      </div>
      </div>
        
)
}
}

export default Book;