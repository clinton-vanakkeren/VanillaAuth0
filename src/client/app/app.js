import React from 'react'
import ReactDOM from 'react-dom'

require("bootstrap/dist/css/bootstrap.css");
require('./app.css');

import App from '../../containers/App/App'
import { Router, Route, IndexRedirect, hashHistory,browserHistory } from 'react-router'

import AuthService from '../../utils/AuthService'
import Container from '../../views/Main/Container'
import Home from '../../views/Main/Home/Home'
import Login from '../../views/Main/Login/Login'

const auth0ClientId = 'nEH8upQ0b7GQKCTkdQ6hhD3iJsNh154k';
const auth0Domain = 'clintonvan.auth0.com';
const auth = new AuthService(auth0ClientId, auth0Domain);

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    console.log("FAILURE");
    replace({ pathname: '/login' })
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} onEnter={requireAuth}/>
      <Route path="/login" component={Login} />
    </Route>
  </Router>
), document.getElementById('app'));
