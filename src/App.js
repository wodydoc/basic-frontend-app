import React, {Component} from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import {BrowserRouter as Router, Switch} from 'react-router-dom';


import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';
import Home from './pages/Home';
import AddTrack from './pages/AddTrack';
import AddDeck from './pages/AddDeck';
import Login from './pages/Login';
import Notes from './pages/Notes';
import Decks from './pages/Decks';
import Signup from './pages/Signup';
import SearchPage from './pages/SearchPage';
import Tabs from './components/Tabs';

import AuthProvider from './contexts/auth-context.js';

import './App.css';
import 'milligram';
import LyricsPage from './pages/LyricsPage.js';
import TrackLyrics from './components/TrackLyrics';

// const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`}infinite`;

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <div className="logocontainer">
              <Navbar />
              <Tabs />
              <Component1 />
              <Component2 />
            </div>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <AnonRoute exact path="/signup" component={Signup} />
              <AnonRoute exact path="/login" component={Login} />
              
              <PrivateRoute exact path="/search" component={SearchPage}/>
              <PrivateRoute exact path="/addTrack" component={AddTrack} />
              <PrivateRoute exact path="/addDeck" component={AddDeck} />
              {/* <PrivateRoute exact path="/decks/create" component={TrackLyrics} /> */}
              <PrivateRoute exact path="/trackLyrics/:id" component={LyricsPage} />
              <PrivateRoute exact path="/notes" component={Notes} />
              <PrivateRoute exact path="/decks/" component={Decks} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
