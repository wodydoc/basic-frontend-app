import React, { Component } from 'react'
import trackService from '../services/track-service';
import TrackCard from '../components/TrackCard';
import BottomNavbar from '../components/BottomNavbar.js';


class Home extends Component {

  state = {
    tracks:[],
    waitingForTracks: true
  }
  
componentDidMount(){
  trackService.myTracks()
    .then((data)=>{
      const {tracks} = data;
      this.setState({tracks, waitingForTracks: false})
    })
}

updateMyTracks = (id) => {
  //go to trackservice and edit the track
  const myTracks = [...this.state.tracks];
  const tracks = myTracks.filter(track => track._id.toString() !== id);
  this.setState({tracks});
}
  render() {
    const {tracks, waitingForTracks} = this.state;
    return (
      <div className="desktop">
        <div className="tracks-slider">
          <div className="tracks-slider-wrapper">
            
              {
                !waitingForTracks && tracks.map((track, index) => <TrackCard key={index} track={track} updateMyTracks={this.updateMyTracks}/>)
                
              }
          </div>
        </div>
        <div className="homepageexplainer">
        </div>

            <BottomNavbar/>

      </div>


    )
  }
}

export default Home;