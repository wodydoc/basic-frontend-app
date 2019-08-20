import axios from 'axios';

class NoteService {
  constructor() {
    this.notes = axios.create({
      baseURL: 'http://localhost:4000',
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