import React, { Component } from 'react'

import Tabs from '../components/Tabs.js';
import noteService from '../services/note-service';
import NoteCard from '../components/TrackCard';

class Notes extends Component {
  //declare state here with empty array of tracks, and loading true
  state = {
    notes:[],
    waitingForTracks: true
  }
  
componentDidMount(){
  //called after the first render so now we have dom to play with
  
  //use noteService to get data 
  noteService.myNotes()
    .then((data)=>{
      const {notes} = data;
      this.setState({notes, waitingForNotes: false})
    })
}
  //write a component did mount method
      //inside this import the new service you have made for notes -> import the lowercase variable
      // call the method that gets my notes and in the then setstate of notes, and waitingForNotes false
updateMyNotes = (id) => {
  //go to trackservice and edit the track
}
  render() {
    const {notes, waitingForNotes} = this.state;
    return (
      <div>
        <Tabs />
        <h1>NOTES</h1>
        {
          !waitingForNotes && notes.map(note => <NoteCard note={note} updateMyNotes={this.updateMyNotes}/>)

        }
        {/** here have conditional rendering that if loading is false, return a map using the this.state.tracks */}
      </div>
    )
  }
}

export default Notes;