import React from 'react';
import './MusicTable.css'

const MusicTable = (props) => {
    
    return ( 
        <div>
            <h1>Music Table</h1>
            <table>
                <thead>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
                </tr>
                </thead>
                <tbody>
                    {props.songs.map(songs => (
                        <tr key={songs.id}>
                            <td >{songs.id}</td>
                            <td >{songs.title}</td>
                            <td >{songs.artist}</td>
                            <td >{songs.album}</td>
                            <td >{songs.genre}</td>
                            <td >{songs.release_date}</td>
                            <td><button onClick={() => props.deleteRow(songs.id)} >Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
     );
}

export default MusicTable;