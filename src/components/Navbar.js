import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    return (
      <div className="nav">
        {this.props.isLoggedIn ? (
          <>
            <p onClick={this.props.logout}>Logout</p>
            <p>Welcome, {this.props.user.username}</p>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>
        )}
      </div>
    )
  }
}

export default withAuth(Navbar);