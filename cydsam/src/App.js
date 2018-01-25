import React, { Component } from 'react';
import {Link, IndexLink, Router} from 'react-router';
import bar from './assests/img/pic.jpg'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="header">
          <li className="nav"><IndexLink to="/" activeClassName="active" className="navLink">Home</IndexLink></li>
          <li className="nav"><Link to="/events" activeClassName="active" className="navLink">Events</Link></li>
          <li className="nav"><Link to="/lodging" activeClassName="active" className="navLink">Lodging</Link></li>
          <li className="nav"><Link to="/registry" activeClassName="active" className="navLink">Registry</Link></li>
          <li className="nav"><Link to="/rsvp" activeClassName="active" className="navLink">RSVP</Link></li>
          <li className="nav"><Link to="/rehersal" activeClassName="active" className="navLink">Rehersal</Link></li>
        </ul>
        <div className="navimage">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
