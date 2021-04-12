import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import BookList from './BookList'
import SearchList from './SearchList'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    bookss: [],
  //  localBookArray: ["jAUODAAAQBAJ", "nggnmAEACAAJ", "sJf1vQAACAAJ", "evuwdDLfAyYC", "74XNzF_al3MC", "IOejDAAAQBAJ"],
    categories: ["currentlyReading", "wantToRead", "read"],
    userInput: "",
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
    BooksAPI.getAll()
      .then((books) =>{
        this.setState({
          bookss: books
        })
      })
  }

  removeBook = (bookid) => {
    this.updateBook(bookid, "none")
    console.log(bookid)
    let copyBookss = [];
      this.state.bookss.filter(copyBook => {if(bookid !== copyBook.id){copyBookss.push(copyBook)}})
      this.setState({bookss: copyBookss})
      console.log("deleted local from MyReads")
   }

   changeState = (bookid, shelf) => {
     let targetNumber = 0;
     let doesChange = 0;
     let copyBook = this.state.bookss
     copyBook.map(anyBook => {
       if(anyBook.id === bookid){copyBook[targetNumber].shelf = shelf; doesChange++}
       targetNumber++;
     })

     if(doesChange <= 0){this.loadBook(bookid); copyBook.push(bookid)}
     this.setState({bookss: copyBook})
   }

   updateBook = (bookid, shelf) => {
     BooksAPI.update(bookid, shelf)
    .then(this.changeState(bookid, shelf))
   }





  render() {


    return (
      <AppLayout>
        <Router>
        <div className="app">
            <Switch>
              <Route exact path="/">
                <BookList 
                  categories={this.state.categories} 
                  bookss={this.state.bookss}
                  onChangeRead={this.updateBook}
                  onChangeNone={this.removeBook}
                />
              </Route>
              <Route exact path="/search">
                <SearchList 
                  userInput={this.userInput}
                  bookss={this.state.bookss}
                  onChangeRead={this.updateBook}
                  onChangeNone={this.removeBook}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </AppLayout>
    )
  }
}

export default BooksApp

const AppLayout = styled.div`
  display: grid;
  overflow-y: scroll;
`