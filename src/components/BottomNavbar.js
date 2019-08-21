import {Link} from 'react-router-dom';
import React from 'react';


export default function BottomNavbar() {
    return (
        <div className="bottomnavbar">
            <div className="bottomnavbar-container">
                <li className="bottomnavbar-search-block"><Link to ="/search"><strong>Search</strong> tracks</Link></li>
                <li className="bottomnavbar-add-block"><Link to ="/AddTrack"><strong>Create</strong> tracks</Link></li>
            </div>
            {/* <li><Link to ="/Decks">DECKS</Link> </li> */}
            
            
        </div>
    )
}