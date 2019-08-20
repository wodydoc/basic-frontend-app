import React, { Component } from 'react';
import SearchList from '../components/SearchList';
import trackService from '../services/track-service';


class SearchPage extends Component {
  
  state = {
      orginalSongs:[],
      showingSongs:[],
      waitingForLyrics: true
  }
  
  componentDidMount(){
    trackService.search()
      .then((data)=>{
        console.log(data)
        this.setState({
          waitingForLyrics: false,
          orginalSongs: data
        })
      })
  }

  updateShowingSongs = (searchTerm) => {
    const newShowingSongs = [...this.state.orginalSongs].filter(song => {
      return song.title.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()) || song.category.toLowerCase().includes(searchTerm.toLowerCase())
    })
    console.log(searchTerm, newShowingSongs)
    this.setState({
      showingSongs: newShowingSongs
    })
  }

  addToFav =(event, id)=> {

    //stops page from refreshing after submit
    event.preventDefault()
    //track-service, adding to the DB
    //.then, once it is succesful, redirect to home 
    trackService.saveTrack(id)
      .then(data => this.props.history.push("/"))
      .catch(error => console.log(error))

  }

  
  render() {
    const {showingSongs, waitingForLyrics} = this.state;
    return (
      <div>
        <h1>SEARCH TRACK</h1>
          <SearchList 
            updateShowingSongs={this.updateShowingSongs}
          />
          {showingSongs.length > 0 ? showingSongs.map(song => {
            return <><p>{song.title}</p><p>{song.artist}</p> <button onClick={(e)=>{this.addToFav(e,song._id)}}>favbabz</button></>
          }) : null}
      </div>
    )
  }
}

export default SearchPage;