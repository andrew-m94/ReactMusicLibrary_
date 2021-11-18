import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import AddSongForm from './AddSongForm/AddSongForm';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
        }
    }
    componentDidMount(){
        this.getSongList();
    }

    async getSongList(){
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs: response.data
        })
    }

    deleteRow = (rowToDelete) => {
        axios.delete('http://127.0.0.1:8000/songs/' + rowToDelete +'/')
        .then(res => console.log(res), alert('Song Deleted'))
        .catch(err => console.log(err));
        this.getSongList();
    }

    addSong = (songToAdd) => {
        axios.post('http://127.0.0.1:8000/music/', songToAdd)
        .then(res => console.log(res), alert('Song Added'))
        .catch(err => console.log(err));
        this.getSongList();
    }

    filteredSearch = (searchBy, searchFor) => {
        let cloneState = this.state.songs
        let newState = {}
        switch(searchBy){
            case 'title':
                newState = cloneState.filter(song => song.title.includes(searchFor))
                .map(songs => (songs));
                console.log(newState);
                this.setState({
                    songs: newState
                })
                break;
            case 'artist':
                newState = cloneState.filter(song => song.artist.includes(searchFor))
                .map(songs => (songs))
                console.log(newState)
                break;
            case 'album':
                newState = cloneState.filter(song => song.album.includes(searchFor))
                .map(songs => (songs))
                console.log(newState)
                break;
            case 'genre':
                newState = cloneState.filter(song => song.genre.includes(searchFor))
                .map(songs => (songs))
                console.log(newState)
                break;
            case 'release_date':
                newState = cloneState.filter(song => song.release_date.includes(searchFor))
                .map(songs => (songs))
                console.log(newState)
                break;
                default:
                    break;
        }
        
        console.log(this.songs);
        
    }

    render() { 
        return ( 
            <div>
                <MusicTable songs={this.state.songs} deleteRow={this.deleteRow}/><SearchBar filteredSearch={this.filteredSearch} />
                <br />
                <AddSongForm addSong={this.addSong}/> 
            </div>
        );
    }
}
 
export default App;