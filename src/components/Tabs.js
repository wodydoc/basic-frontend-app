import {Link} from 'react-router-dom';
import React from 'react';


export default function Tabs() {
    return (
        <div className="tabs">
        <div className="spinning-button">
        <Link to = "/AddDeck">💡</Link>
        </div>
            <div className="music">
                <li><Link to ="/">can</Link></li>
            </div>
            <div className="language">
                <li><Link to ="/Decks">tar</Link> </li>
            </div>

            {/* <li><Link to ="/Notes">NOTES</Link></li> */}
        </div>
    )
}



