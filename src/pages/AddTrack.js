import React, { Component } from 'react'

import Tabs from '../components/Tabs.js';

import trackService from '../services/track-service';


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
        <form onSubmit={this.handleForm}>
            <input onChange={(e)=>this.handleOnChange(e)} placeholder="Title" name="title" value={this.state.title}></input>
            <input onChange={(e)=>this.handleOnChange(e)} placeholder="Artist" name="artist" value={this.state.artist}></input>
            <input onChange={(e)=>this.handleOnChange(e)} placeholder="Lyrics" name="lyrics" value={this.state.lyrics}></input>
            <input onChange={(e)=>this.handleOnChange(e)} placeholder="Category" name="category" value={this.state.category}></input>
            <input type="submit"></input>
        </form>
       
      </div>
    )
  }
}

export default AddTrack;