import {Link} from 'react-router-dom'
import React from 'react'

export default function Tabs() {
    return (
        <div>
            <Link to ="/">MY TRACKS-</Link>
            <Link to ="/Notes">NOTES-</Link>
            <Link to ="/Decks">DECKS-</Link> 
            
        </div>
    )
}



