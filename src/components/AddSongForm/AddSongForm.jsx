import React, { Component } from 'react';

class AddSongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
            
            errors: {
                title: '',
                artist: '',
                album: '',
                genre: '',
                release_date: '',
            }
        }
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch(event.target.name){
            case 'title':
                errors.title = event.target.value.length < 1 ? "Please enter a song title" : null;
                break;
                default:
                    break;
        }

        this.setState({
            [event.target.name]: event.target.value,
            errors: errors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSong(this.state);
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <h1>Add Song</h1>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                </div>
                {this.state.errors.title ? <p style={{color:'red'}}>{this.state.errors.title}</p> : ''}
                <br/>
                <div>
                    <label>Artist</label>
                    <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
                </div>
                {this.state.errors.artist ? <p style={{color:'red'}}>{this.state.errors.artist}</p> : ''}
                <br/>
                <div>
                    <label>Album</label>
                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
                </div>
                {this.state.errors.album ? <p style={{color:'red'}}>{this.state.errors.album}</p> : ''}
                <br/>
                <div>
                    <label>Genre</label>
                    <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} />
                </div>
                {this.state.errors.genre ? <p style={{color:'red'}}>{this.state.errors.genre}</p> : ''}
                <br/>
                <div>
                    <label>Release Date</label>
                    <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date} />
                </div>
                {this.state.errors.release_date ? <p style={{color:'red'}}>{this.state.errors.release_date}</p> : ''}
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
 
export default AddSongForm;