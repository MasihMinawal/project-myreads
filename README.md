# MyReads Project

This project is a task for the udacity react course. 
Its functionality is written in javascript & uses the react framework for the app and the node framework is used by the backendserver.
Some Modules were used: prop-types for checking correct prop-types, react-router for routing on a singlepage, bootstrap for styling, an API for connecting to the database(which is owned by udacity).

The app fetches books due an API from the database.
It has two views, the first is a BookList for displaying books, categorized into their shelves by :(A)Currently Reading, (B)Want to Read and (C)Read.
The other view is a SearchList for searching books on the connected database and displaying the searched outputted books.
On both views you can select any book, and save them in your BookList by clicking and selecting the category.

## TL;DR

To get started using this code you need to

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app, where the routing is stored and local stored books get fetched
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Book.js # is used by the BookCategory.js and the SearchList.js. Return full model of the book, based on the fetched data
    ├── BookCategory.js # used by BookList.js to categorize the sections. Can be added by adding more elements to the state = {categories} and adding more shelfs to the books in the database
    ├── BookList.js # Categories get mapped and built.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app, used in the css
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles
    └── index.js # It is used for DOM rendering only.
    └── SearchBar.js # used for the search input and sends data to the SearchList.js
    └── SearchList.js # holds the SearchBar and does the fetch from the inputData from the SearchBar, also produces Book elements from Book.js    
```


## Backend Server

The backendserver only reacts on following commands (The functions can be viewed in BooksAPI.js)

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is based on the starter code for _all_ Udacity students: https://github.com/udacity/reactnd-project-myreads-starter
