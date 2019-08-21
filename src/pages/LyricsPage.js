import React, { Component } from 'react'

import Tabs from '../components/Tabs.js';
import trackService from '../services/track-service';
import TrackCard from '../components/TrackCard';
import TrackLyrics from '../components/TrackLyrics';
import AddTrack from './AddTrack.js';
import SearchPage from './SearchPage.js';
import SearchList from '../components/SearchList';
import {Link} from 'react-router-dom';

class LyricsPage extends Component {
  //declare state here with empty array of tracks, and loading true
  state = {
    track:{},
    waitingForTrack: true
  }
  
componentDidMount(){
  //called after the first render so now we have dom to play with
  
  //use trackService to get data 
  trackService.myTracks()
    .then((data)=>{
      const {tracks} = data;
      let track = tracks.find((song => song._id.toString() === this.props.match.params.id));
      this.setState({track, waitingForTracks: false})
    })
}
  //write a component did mount method
      //inside this import the new service you have made for tracks -> import the lowercase variable
      // call the method that gets my tracks and in the then setstate of tracks, and waitingForTracks false
updateMyTracks = (id) => {
  //go to trackservice and edit the track
}
  render() {
    const {track, waitingForTracks} = this.state;
    return (
      <div>
        <Tabs />
        {/* <Link to ="/AddTrack">Can't find a Track? Create one here!</Link><br></br>
        <Link to ="/search">Have a Track in mind? Seach tracks here!</Link>  */}
        {/* <h1>MY LYRICS</h1> */}
        {/* <h4>select text to translate</h4> */}
        
        {
          !waitingForTracks && <TrackLyrics track={track} updateMyTracks={this.updateMyTracks}/>

        }

        {/** here have conditional rendering that if loading is false, return a map using the this.state.tracks */}

      </div>
    )
  }
}

export default LyricsPage;