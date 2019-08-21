import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';


import Home from './pages/Home';
import TrackLyrics from './components/TrackLyrics';
import AddTrack from './pages/AddTrack';
import AddDeck from './pages/AddDeck';
import Login from './pages/Login';
import Notes from './pages/Notes';
import Decks from './pages/Decks';
import Signup from './pages/Signup';
import SearchPage from './pages/SearchPage';

import AuthProvider from './contexts/auth-context.js';

import './App.css';
import 'milligram';
import LyricsPage from './pages/LyricsPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <div className="logocontainer">
            <h1>can</h1>
            <h1>tar</h1>
            </div>
            <Navbar />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <AnonRoute exact path="/signup" component={Signup} />
              <AnonRoute exact path="/login" component={Login} />
              <PrivateRoute exact path="/addTrack" component={AddTrack} />
              <PrivateRoute exact path="/trackLyrics/:id" component={LyricsPage} />
              <PrivateRoute exact path="/search" component={SearchPage}/>
              <PrivateRoute exact path="/decks/" component={Decks} />
              <PrivateRoute exact path="/addDeck" component={AddDeck} />
              <PrivateRoute exact path="/notes" component={Notes} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
