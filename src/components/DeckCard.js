import { withRouter} from 'react-router-dom'
import React from 'react'
import deckService from '../services/deck-service';

function DeckCard(props) {
    const removeFromFav =(event, id)=> {
        //stops page from refreshing after submit
        event.preventDefault()
        //track-service, adding to the DB
        //.then, once it is succesful, redirect to home 
        deckService.unsaveDeck(id)
          .then(data => props.updateMyDecks(id))
          .catch(error => console.log(error))
      }
    const {word, translation, _id} = props.deck;
    return (
        <div className="deck-card">
            {/* <Link to ={`/TrackLyrics/${_id}`}>oye</Link> */}
            <button onClick={(e)=>{removeFromFav(e, _id)}}>📌</button>
             <h2>{word}</h2>
             <p>{translation}</p>
           
        </div>
    )
}
export default withRouter(DeckCard);