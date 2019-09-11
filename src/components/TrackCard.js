import {Link, withRouter} from 'react-router-dom'
import React from 'react'
import trackService from '../services/track-service';

function TrackCard(props) {
    //const since it is a functional component
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
        <div className="myteachersmytracks">
          
          <div className="tracks-slider-single">
              <button onClick={(e)=>{removeFromFav(e, _id)}}>remove</button>
              <Link to ={`/TrackLyrics/${_id}`}>
              <h3>{title}</h3>
              <h2>{artist}</h2>
              </Link> 
              <h4><strong>*</strong>{category}</h4>
            {/* //love heart button on click props.updateMyTracks(props.track._id) */}
          </div>

        </div>
    )
}
export default withRouter(TrackCard);
