import React, { Component } from 'react';
import SearchList from '../components/SearchList';
import trackService from '../services/track-service';
import axios from 'axios';
import BottomNavbar from '../components/BottomNavbar';
import Tabs from '../components/Tabs';


class SearchPage extends Component {
  
  state = {
      orginalSongs:[],
      showingSongs:[],
      waitingForLyrics: true,
      lyrics: '',
  }
  
  componentDidMount(){
    trackService.search()
      .then((data)=>{
        console.log(data)
        this.setState({
          waitingForLyrics: false,
          orginalSongs: data
        })
      })
  }

  updateShowingSongs = async(track, artist) => {
    const newShowingSongs = [...this.state.orginalSongs].filter(song => {
      return song.title.toLowerCase().includes(track.toLowerCase()) || song.artist.toLowerCase().includes(track.toLowerCase()) || song.category.toLowerCase().includes(track.toLowerCase())
    })

    if(artist) {
        const baseUrl = 'https://api.lyrics.ovh/v1/'
        const response = await axios.get(`${baseUrl}${artist}/${track}`);
        this.setState({
          lyrics: response.data.lyrics,
          showingSongs: [],
        })

    } else {
      this.setState({
        showingSongs: newShowingSongs,
        lyrics: ''
      })
    }

  }

  addToFav =(event, id)=> {

    //stops page from refreshing after submit
    event.preventDefault()
    //track-service, adding to the DB
    //.then, once it is succesful, redirect to home 
    trackService.saveTrack(id)
      .then(data => this.props.history.push("/"))
      .catch(error => console.log(error))

  }

  
  render() {
    const {showingSongs, lyrics} = this.state;
    return (
      <div>
        <Tabs/>
        <h1>SEARCH TRACK</h1>
          <SearchList 
            updateShowingSongs={this.updateShowingSongs}
          />
          {showingSongs.length > 0 ? showingSongs.map(song => {
            return <><p>{song.title}</p><p>{song.artist}</p> <button onClick={(e)=>{this.addToFav(e,song._id)}}>Add to my tracks</button></>
          }) : null}
          {lyrics ? <p>{lyrics}</p> : null}
          <BottomNavbar />
      </div>
    )
  }
}

export default SearchPage;