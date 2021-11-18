import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import AddSongForm from './AddSongForm/AddSongForm';

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

    render() { 
        return ( 
            <div>
                <MusicTable songs={this.state.songs} deleteRow={this.deleteRow}/>
                <br />
                <AddSongForm addSong={this.addSong}/>    
            </div>
        );
    }
}
 
export default App;