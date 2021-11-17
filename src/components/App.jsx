import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';

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

    render() { 
        return ( 
            <div>
                <MusicTable songs={this.state.songs}/>    
            </div>
        );
    }
}
 
export default App;