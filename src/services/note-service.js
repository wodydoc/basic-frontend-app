import axios from 'axios';

class NoteService {
  constructor() {
    this.notes = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  notes() {
    return this.notes.get('/notes')
      .then(({ data }) => data);
  }
  myNotes() {
    return this.notes.get('/notes/my')
      .then(({ data }) => data);
  }
}

const noteService = new NoteService();

export default noteService;