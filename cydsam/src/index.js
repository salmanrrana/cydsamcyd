import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Events from './Events';
import Lodging from './Lodging';
import Registry from './Registry';
import Rsvp from './Rsvp';
import Rehersal from './Rehersal';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';


ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="events" component={Events} />
      <Route path="lodging" component={Lodging} />
      <Route path="registry" component={Registry} />
      <Route path="rsvp" component={Rsvp} />
      <Route path="rehersal" component={Rehersal} />
    </Route>
  </Router>),

  document.getElementById('root')
);
