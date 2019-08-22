import {Link} from 'react-router-dom';
import React from 'react';


export default function Tabs() {
    return (
        <div className="tabs">
            <li><Link to ="/">TRACKS</Link></li>
            {/* <li><Link to ="/Notes">NOTES</Link></li> */}
            <li><Link to ="/Decks">DECKS</Link> </li>
            
            
        </div>
    )
}



