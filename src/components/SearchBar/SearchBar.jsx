import React from 'react';

let handleSubmit = (event) => {
    event.preventDefault();
    alert('search');
    let option = document.getElementById('option').value;
    console.log(option)
}

const SearchBar = () => {
    return ( 
        <form onSubmit={(event) => handleSubmit(event)}>
            <label>Search by: </label>
            <select id="option">
                <option value="title">Title</option>
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="genre">Genre</option>
                <option value="release_date">Release Date</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
}
 
export default SearchBar;