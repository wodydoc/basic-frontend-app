import React, {Component} from 'react'
import axios from 'axios';
import { async } from 'q';

class TrackLyrics extends Component{
    //define state
    state = {
        lyrics:[],
        lyricsTranslated: "",
        lyricsSelected: "",
        isSelecting: false,
        language: false
        
      }
    //   ----------toggle language----------
    //   TrackLyrics.getInitialState: toggleLanguage() {
    //     return {
    //       language: true
    //     };
    //   }
    
    //   handleClick: toggleLanguage() {
    //     this.setState({
    //       language: !this.state.language
    //     });
    //   }
    
    //   render: toggleLanguage(){
    //     return (
    //       <div className={this.state.language ? 'es-en' : 'en-es'}>...</div>
    //     );
    //   }
    //   ----------toggle language----------

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
                let language = this.state.language ? 'es-en' : 'en-es'
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
          const {title, artist, lyrics, category, lyricsTranslated, lyricsSelected} = this.props.track;
          console.log(this.state)
          console.log()
          return (
              <div className="track-lyrics">
                   <h2>{title}</h2>
                   <h3>{artist}</h3>
                   <button onClick={() => this.setState({ language: !this.state.language  })}>TARGET LANGUAGE</button>
                   {/* <button >TRANSLATE</button> */}

                   
                   
                   <p className="lyrics-original">{lyrics}</p>
                   <p>{category}</p>
                    {/* show the transaleted word when there is one */}
                    <div className="revealTranslations">
                        <h4 className="lyrics-selected">🇪🇸<i>dictionary</i><br></br>{this.state.lyricsTranslated}</h4>
                        <h4 className="lyrics-translated">🇺🇸<i>my notebook</i><br></br>{this.state.lyricsSelected}</h4>
                    </div>
                 {/* //love heart button on click props.updateMyTracks(props.track._id) */}
              </div>
          )
      }
}

export default TrackLyrics;
