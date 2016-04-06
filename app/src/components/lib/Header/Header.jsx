import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-header">
          <Link className="navbar-brand" to="/">Marvel Heroes</Link>
        </div>
      </nav>
    );
  }
}
