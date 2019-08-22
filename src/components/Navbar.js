import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    return (
      <div className="nav">
        {this.props.isLoggedIn ? (
          <>
            <p><strong>Welcome, {this.props.user.username}</strong></p>
            <p onClick={this.props.logout}>Logout</p>
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