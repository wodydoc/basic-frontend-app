import React, { Component } from 'react'

import deckService from '../services/deck-service';

import {withRouter} from 'react-router-dom';


class AddDeck extends Component {
  
  state = {
      word:"",
      translation:"",

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
        .then(data => this.props.history.push("/decks"))
        .catch(error => console.log(error))
      
  }

  render() {
      console.log(this.props)

    return (
      <div className="newvocab">
        {/* <h4>¡nuevo vocabulario!</h4> */}
        <form onSubmit={this.handleForm}>
        <label htmlFor='word'>¡nuevo vocabulario!</label>
            <input onChange={(e)=>this.handleOnChange(e)} id="word" name="word" type="text" value={this.state.lyricsSelected}></input>
            <label htmlFor='translation'>traducción</label>
            <input onChange={(e)=>this.handleOnChange(e)} id="translation" name="translation" type="text"  value={this.state.lyricsTranslated}></input>
            <button type='submit'>Create</button>
        </form>
       
      </div>
    )
  }
}

export default withRouter(AddDeck);