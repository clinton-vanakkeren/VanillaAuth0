import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from '../../utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'

const auth0ClientId = 'qPBsP4e9cb5K7O57WQ8KP1XSZKZehWFh';
const auth0Domain = 'cvanakkeren.auth0.com';
const auth = new AuthService(auth0ClientId, auth0Domain);

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    console.log("FAILURE");
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth}/>
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes
