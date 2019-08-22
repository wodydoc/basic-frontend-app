import React, { Component } from 'react'

import Tabs from '../components/Tabs.js';

import trackService from '../services/track-service';
import BottomNavbar from '../components/BottomNavbar';


class AddTrack extends Component {
  
  state = {
      title:"",
      artist:"",
      lyrics:"",
      category:""

  }
  
  handleOnChange =(event) => {
      const { name, value } = event.target
      this.setState({
          [name]: value
      })
  }
  handleForm = (event) => {
      //stops page from refreshing after submit
      event.preventDefault()
      //track-service, adding to the DB
      //.then, once it is succesful, redirect to home 
      trackService.addTrack(this.state)
        .then(data => this.props.history.push("/"))
        .catch(error => console.log(error))
      
  }

  render() {
      console.log(this.props)

    return (
      <div>
        <Tabs />
        <h1>ADD TRACK</h1>
          <div class="create-track ui segment">
            <form class="ui form" onSubmit={this.handleForm}>
              <div class="field">
              <label htmlFor='title'>Track name</label>
                <input onChange={(e)=>this.handleOnChange(e)} id="title" name="title" type="text" value={this.state.title}></input>
              <label htmlFor='artist'>Artist name</label>
                <input onChange={(e)=>this.handleOnChange(e)} id="artist" name="artist" type="text" value={this.state.artist}></input>
                <label htmlFor='lyrics'>Paste Lyrics here</label>
                <input onChange={(e)=>this.handleOnChange(e)} id="lyrics" name="lyrics" type="text" value={this.state.lyrics}></input>
                <label htmlFor='category'>Choose a category</label>
                <input onChange={(e)=>this.handleOnChange(e)} id="category" name="category" type="text"  value={this.state.category}></input>
                <input type="submit"></input>
              </div>
            </form>
          </div>
          <BottomNavbar/>
       
      </div>
    )
  }
}

export default AddTrack;