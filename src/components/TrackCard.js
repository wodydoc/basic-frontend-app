import {Link, withRouter} from 'react-router-dom'
import React from 'react'
import trackService from '../services/track-service';

function TrackCard(props) {
  
    //const since it is a fc 
    const removeFromFav =(event, id)=> {

        //stops page from refreshing after submit
        event.preventDefault()
        //track-service, adding to the DB
        //.then, once it is succesful, redirect to home 
        trackService.unsaveTrack(id)
          .then(data => props.updateMyTracks(id))
          .catch(error => console.log(error))
    
      }
    const {title, artist, category, _id} = props.track;
    return (
        <div className="tracks-slider-single">
            <Link to ={`/TrackLyrics/${_id}`}>
             <h2>{title}</h2>
             <h3>{artist}</h3>
            </Link> 
             <p># {category}</p>
             <button onClick={(e)=>{removeFromFav(e, _id)}}>Remove From My Tracks</button>
           {/* //love heart button on click props.updateMyTracks(props.track._id) */}
        </div>
    )
}
export default withRouter(TrackCard);
