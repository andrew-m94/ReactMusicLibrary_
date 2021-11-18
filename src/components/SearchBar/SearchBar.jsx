import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('search');
        let searchBy = document.getElementById('searchBy').value;
        let searchFor = document.getElementById('searchFor').value;
        console.log(searchBy);
        console.log(searchFor);
        this.props.filteredSearch(searchBy, searchFor);
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>Search by: </label>
            <select id="searchBy">
                <option value="title">Title</option>
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="genre">Genre</option>
                <option value="release_date">Release Date</option>
            </select>
            <label>For: </label>
            <input id="searchFor" type="text" />
            <button type="submit">Search</button>
        </form>
        );
    }
}
 
export default SearchBar;