import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

    let handleSubmit = (event) => {
        event.preventDefault();
        let searchBy = document.getElementById('searchBy').value;
        let searchFor = document.getElementById('searchFor').value;
        console.log(searchBy);
        console.log(searchFor);
        props.filteredSearch(searchBy, searchFor);
    }

    const handleReset = () => {
        props.getSongList();
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} onReset={(event) => handleReset(event)} class="search-form">
            <label>Search by: </label>
                <select id="searchBy" class="dropdown">
                    <option value="title">Title</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="genre">Genre</option>
                    <option value="release_date">Release Date</option>
                </select>
            <label class="for">For: </label>
            <input id="searchFor" type="text" placeholder="Title, Artist, Album, Etc..."/>
            <button type="submit" class="search_reset">Search</button>
            <button type="reset" class="search_reset">Reset</button>
        </form>
            );
}
 
export default SearchBar;