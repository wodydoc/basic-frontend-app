import axios from 'axios';

class TrackService {
  constructor() {
    this.tracks = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
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
  //unsaves to favorite 
  unsaveTrack(id) {
    return this.tracks.delete(`/tracks/${id}/unsave`)
      .then(({ data }) => data);
  }
}

//singleton
const trackService = new TrackService();

export default trackService;