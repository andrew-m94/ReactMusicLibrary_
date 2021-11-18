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
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        })
    }

    deleteRow = (rowToDelete) => {
        axios.delete('http://127.0.0.1:8000/songs/' + rowToDelete +'/')
        .then(alert('Song Deleted'));
        this.getSongList();
    }

    render() { 
        return ( 
            <div>
                <MusicTable songs={this.state.songs} deleteRow={this.deleteRow}/>
                <br />
                <AddSongForm />    
            </div>
        );
    }
}
 
export default App;