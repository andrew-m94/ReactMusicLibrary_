import React from 'react';

const SearchBar = (props) => {

    let handleSubmit = (event) => {
        event.preventDefault();
        alert('search');
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
        <form onSubmit={(event) => handleSubmit(event)} onReset={(event) => handleReset(event)}>
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
            <button type="reset">Reset</button>
        </form>
            );
}
 
export default SearchBar;