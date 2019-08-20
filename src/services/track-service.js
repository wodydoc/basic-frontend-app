import axios from 'axios';

class TrackService {
  constructor() {
    this.tracks = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }
//search
  search() {
    return this.tracks.get('/tracks')
    .then(({data}) => data);
  }

  //home
  myTracks() {
    return this.tracks.get('/tracks/my')
      .then(({ data }) => data);
  }
  //add
  addTrack(newTrack) {
    return this.tracks.post('/tracks/create', newTrack)
      .then(({ data }) => data);
  }
  //saves to favorite 
  saveTrack(id) {
    return this.tracks.put(`/tracks/${id}/save`)
      .then(({ data }) => data);
  }
}

//singleton
const trackService = new TrackService();

export default trackService;