import React, { Component } from 'react'

import Tabs from '../components/Tabs.js';
import deckService from '../services/deck-service';
import DeckCard from '../components/DeckCard';
import AddDeck from './AddDeck.js';
import {Link} from 'react-router-dom';



class Decks extends Component {
  //declare state here with empty array of tracks, and loading true
  state = {
    decks:[],
    waitingForDecks: true
  }
  
componentDidMount(){
  //called after the first render so now we have dom to play with
  //use deckService to get data 
  deckService.myDecks()
    .then((data)=>{
      const {decks} = data;
      this.setState({decks, waitingForDecks: false})
    })
}
  //write a component did mount method
      //inside this import the new service you have made for notes -> import the lowercase variable
      // call the method that gets my notes and in the then setstate of notes, and waitingForNotes false
updateMyDecks = (id) => {
  //go to deckservice and edit the track
  const myDecks = [...this.state.decks];
  const decks = myDecks.filter(deck => deck._id.toString() !== id);
  this.setState({decks});
}
  render() {
    const {decks, waitingForDecks} = this.state;
    return (
      <div className="language-book">
        <Tabs/>
        <h4>¡mi vocabulario!</h4>

        {
          !waitingForDecks && decks.map(deck => <DeckCard deck={deck} updateMyDecks={this.updateMyDecks}/>)

        }
        {/* <div className="newWordNewLanguage">
        <button><Link to = "/AddDeck">ADD TO VOCAB</Link></button>
        </div> */}

        {/** here have conditional rendering that if loading is false, return a map using the this.state.tracks */}
      </div>
    )
  }
}

export default Decks;