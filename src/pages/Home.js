import React, { Component } from 'react'

import Tabs from '../components/Tabs.js';
import BottomNavbar from '../components/BottomNavbar.js';
import trackService from '../services/track-service';
import TrackCard from '../components/TrackCard';


class Home extends Component {
  //declare state here with empty array of tracks, and loading true
  state = {
    tracks:[],
    waitingForTracks: true
  }
  
componentDidMount(){
  //called after the first render so now we have dom to play with
  
  //use trackService to get data 
  trackService.myTracks()
    .then((data)=>{
      const {tracks} = data;
      this.setState({tracks, waitingForTracks: false})
    })
}
  //write a component did mount method
      //inside this import the new service you have made for tracks -> import the lowercase variable
      // call the method that gets my tracks and in the then setstate of tracks, and waitingForTracks false
updateMyTracks = (id) => {
  //go to trackservice and edit the track
  const myTracks = [...this.state.tracks];
  const tracks = myTracks.filter(track => track._id.toString() !== id);
  this.setState({tracks});
}
  render() {
    const {tracks, waitingForTracks} = this.state;
    return (

      <div>
        <Tabs />
        {/* <Link to ="/AddTrack">Can't find a Track? Create one here!</Link><br></br>
        <Link to ="/search">Have a Track in mind? Seach tracks here!</Link>  */}
        <h1>my tracks</h1>
        <div className="tracks-slider">
          <div className="tracks-slider-wrapper">
          {/* // style={{ */}
          {/* //   'transform': `translateX(-${track.index*(100/tracks.length)}%)`
          // }}> */}
              {
                !waitingForTracks && tracks.map((track, index) => <TrackCard key={index} track={track} updateMyTracks={this.updateMyTracks}/>)

              }
          </div>
        </div>

        {/** here have conditional rendering that if loading is false, return a map using the this.state.tracks */}
        {/* <div className="bottom"> */}
        
          
            <BottomNavbar/>
    
       
          
        {/* </div> */}
      </div>


    )
  }
}

export default Home;