import React, { Component } from 'react'


class SearchBar extends Component  {
    state = {

    }

    render() {
const { userInput } = this.props;
    
function listChange() {
    let searchInput = document.getElementById("inputBar").value
    userInput(searchInput)
}
    return (

        <input 
            type="text" 
            id="inputBar"
            onChange={() => listChange()} 
            placeholder="Search by title or author"/>
    )
    }
}

export default SearchBar;