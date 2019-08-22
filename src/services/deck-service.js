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
}


const deckService = new DeckService();

export default deckService;