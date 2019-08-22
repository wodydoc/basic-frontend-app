import React, { Component } from 'react'

import Tabs from '../components/Tabs.js';

import deckService from '../services/deck-service';

import {withRouter} from 'react-router-dom';


class AddDeck extends Component {
  
  state = {
      word:"",
      translation:""
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
      deckService.addDeck(this.state)
        .then(data => this.props.history.push("/"))
        .catch(error => console.log(error))
      
  }

  render() {
      console.log(this.props)

    return (
      <div>
        {/* <Tabs /> */}
        <h1>Create a Deck</h1>
        <form onSubmit={this.handleForm}>
        <label htmlFor='word'>New Vocab Word</label>
            <input onChange={(e)=>this.handleOnChange(e)} id="word" name="word" type="text" value={this.state.word}></input>
            <label htmlFor='translation'>Translation</label>
            <input onChange={(e)=>this.handleOnChange(e)} id="translation" name="translation" type="text"  value={this.state.translation}></input>
            <input type="submit"></input>
        </form>
       
      </div>
    )
  }
}

export default withRouter(AddDeck);