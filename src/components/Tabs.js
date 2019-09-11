import {Link} from 'react-router-dom';
import React from 'react';


var Logo = require('../assets/cantar-logo.png');

export default function Tabs() {
    return (
        <div className="tabs">
        <div className="spinning-button">
        <Link to = "/Decks">💡</Link>
        </div>
            {/* <div className="music">
                <li><Link to ="/">can</Link></li>
            </div>
            <div className="language">
                <li><Link to ="/Decks">tar</Link> </li>
            </div> */}
            <section className="one-fourth" id="html">
            <Link to ="/"><img src={Logo} alt="fireSpot"/></Link>
            </section>

            {/* <li><Link to ="/Notes">NOTES</Link></li> */}
        </div>
    )
}



