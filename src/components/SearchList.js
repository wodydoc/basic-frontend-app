import React from 'react';

class Searchbar extends React.Component{
    state ={
        track: '',
        artist: ''
    };

    handleChange = (event) => {
      const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        const {track, artist} = this.state;
        this.props.updateShowingSongs(track, artist)
    }
    render() {
        return(
            <div class="search-bar ui segment">
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor='track'>track title</label>
                        <input onChange={this.handleChange} name='track' type="text" value={this.state.track} id='track'/>
                        <label htmlFor='artist'>artist name (only enter artist name if you want to find lyrics)</label>
                        <input onChange={this.handleChange} name='artist' type="text" value={this.state.artist} id='artist'/>
                        <button value="Submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;