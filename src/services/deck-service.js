import axios from 'axios';

class DeckService {
  constructor() {
    this.decks = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  decks() {
    return this.decks.get('/decks')
      .then(({ data }) => data);
  }
  myDecks() {
    return this.decks.get('/decks/my')
      .then(({ data }) => data);
  }
  //add
  addDeck(newDeck) {
    return this.decks.post('/decks/create', newDeck)
      .then(({ data }) => data);
  }
  //saves to favorite 
  saveDeck(id) {
    return this.decks.put(`/decks/${id}/save`)
      .then(({ data }) => data);
  }
  //unsaves to favorite 
  unsaveDeck(id) {
    return this.decks.delete(`/decks/${id}/unsave`)
      .then(({ data }) => data);
  }
}
//singleton

const deckService = new DeckService();

export default deckService;