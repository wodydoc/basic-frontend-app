import {Link} from 'react-router-dom'
import React from 'react'
import TrackLyrics from './TrackLyrics'

export default function TrackCard(props) {
    const {title, artist, lyrics, category, _id} = props.track;
    return (
        <div className="track-card">
             <p>{title}</p>
             <p>{artist}</p>
             <Link to ={`/TrackLyrics/${_id}`}>CLICK TO VIEW LYRICS-</Link> 
             <p>{category}</p>
           {/* //love heart button on click props.updateMyTracks(props.track._id) */}
        </div>
    )
}
