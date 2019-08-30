import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';
import Tabs from './Tabs';


class Navbar extends Component {
  render() {  
    return (
      <div className="nav">
        {this.props.isLoggedIn ? (
          <>
            <p><strong onClick={this.props.logout}>@</strong>{this.props.user.username}</p>
            {/* <p>💡</p> */}
            {/* <Tabs /> */}
          </>
        ) : (
          <>
          <div className="loginsignup">
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
          </>
        )}
      </div>
    )
  }
}

export default withAuth(Navbar);