import React, {Component} from 'react'
import axios from 'axios';
import { async } from 'q';
import {Link} from 'react-router-dom';

// import AddDeck from '../pages/AddDeck';

class TrackLyrics extends Component{
  //define state
    state = {
        lyrics:[],
        lyricsTranslated: "",
        lyricsSelected: "",
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
      
      render() {
        const {title, artist, lyrics, category} = this.props.track;
        console.log(this.state)
        console.log()
          return (
            <div className="track-lyrics">
              <div className="explainer">
              <p>select the lyrics to translate them</p>

              </div>
              <p className="lyrics-original">{lyrics}</p>
                  <div className="track-lyrics-header">
                   <h2>{title}</h2>
                      
                   {/* <h4>{category}</h4> */}

                    {/* show the transaleted word when there is one */}
                    <div className="revealTranslations">
                        <h4 className="lyrics-selected">
                        <h3>{artist}</h3>
                        
                             {this.state.lyricsTranslated}
                          <br></br>
                              <Link to = "/AddDeck">💾</Link>
                        </h4>

                        {/* <h4 className="lyrics-translated">🇺🇸<i>my notebook</i><br></br><Link to ="/AddDeck"><strong>SEARCH</strong> </Link></h4> */}
                    </div>
                </div>
                   
                 {/* //love heart button on click props.updateMyTracks(props.track._id) */}
              </div>
          )
      }
}

export default TrackLyrics;
