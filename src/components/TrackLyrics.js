import React from 'react'

export default function TrackLyrics(props) {
    const {title, artist, lyrics, category} = props.track;
    return (
        <div className="track-lyrics">
             <p>{title}</p>
             <p>{artist}</p>
             <p>{lyrics}</p>
             <p>{category}</p>
           {/* //love heart button on click props.updateMyTracks(props.track._id) */}
        </div>
    )
}
