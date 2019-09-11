import React, {Component} from 'react'
import axios from 'axios';
import { async } from 'q';
import {Link} from 'react-router-dom';

import {withRouter} from 'react-router-dom';
import deckService from '../services/deck-service';
import AddDeck from '../pages/AddDeck';

class TrackLyrics extends Component{
  //define state
    state = {
        lyrics:[],
        lyricsTranslated: "",
        lyricsSelected: "",
        word: "",
        translation: "",
        isSelecting: false,
        language: false
      }
      //on click, mount translate, but after unmount
      componentDidMount() {
        document.addEventListener('mouseup',this.handleSelect) 
      }
      componentWillUnmount() {
        document.removeEventListener('mouseup',this.handleSelect) 
      }
      handleSelect = async (e) => {
        var test = window.getSelection().toString();
        if(test){
            if(window.getSelection().extentNode.data) {
                let language = this.state.language ? 'en-es' : 'es-en'
                console.log(language);
                const baseURL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190711T125839Z.1877a1020326d7fd.487517ab76fc5ba4cd01112f56d8afa0f4c81026&lang=${language}&text=`;
                var translation = await axios.get(baseURL + test);
                //this.setState
                console.log(baseURL)
                this.setState({lyricsTranslated: translation.data.text[0], lyricsSelected: test})
            }
        }
      }
      handleOnChange =(event) => {
          const { lyricsSelected, lyricsTranslated, word, translation } = event.target
          this.setState({
              [lyricsSelected]: word,
              [lyricsTranslated]: translation

          })
      }
      
      // handleForm = (event) => {
      //     //stops page from refreshing after submit
      //     event.preventDefault()
      //     //track-service, adding to the DB
      //     //.then, once it is succesful, redirect to home 
      //     deckService.addDeck(this.state.lyricsSelected)
      //       // .then(data => this.props.history.push("/decks"))
      //       .catch(error => console.log(error))
          
      // }
      render() {
        const {title, artist, lyrics, category} = this.props.track;
        console.log(this.state)
        console.log()
          return (
            <div className="track-lyrics">
              <div className="explainer">
              <p>select the text you would like to translate</p>

              </div>
              <p className="lyrics-original">{lyrics}</p>
                  <div className="track-lyrics-header">
                   <h2>{title}</h2>

                    <div className="revealTranslations">
                        <h4 className="lyrics-selected">
                        <h3>{artist}:</h3>
                        <i>"
                        {this.state.lyricsSelected}

                        "</i>
                          <br></br>
                        <strong>
                        {this.state.lyricsTranslated}

                        </strong>
                        <AddDeck />
                          {/* <Link to = "/AddDeck"><span role="img" aria-label>💾</span></Link> */}
                          
                          {/* <form onSubmit={this.handleForm}>
                          <label htmlFor='word'>new vocabulary</label>
                              <input onChange={(e)=>this.handleOnChange(e)} id="word" name="word" type="text" value={this.state.lyricsSelected}></input>
                          <label htmlFor='translation'>notes / translation</label>
                              <input onChange={(e)=>this.handleOnChange(e)} id="translation" name="word" type="text"  value={this.state.lyricsTranslated}></input>
                              <button type='submit'>Create</button>
                          </form> */}
                        </h4>

                        {/* <h4 className="lyrics-translated">🇺🇸<i>my notebook</i><br></br><Link to ="/AddDeck"><strong>SEARCH</strong> </Link></h4> */}
                    </div>
                </div>
                   
                 {/* //love heart button on click props.updateMyTracks(props.track._id) */}
              </div>
          )
      }
}

export default withRouter(TrackLyrics);
