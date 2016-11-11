import React from 'react'
import ReactDOM from 'react-dom'

require("bootstrap/dist/css/bootstrap.css");
require('./app.css');

import App from '../../containers/App/App'

import {browserHistory} from 'react-router'
import makeRoutes from '../../../routes.js'

const routes = makeRoutes()

//const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App history={browserHistory}
        routes={routes} />, document.getElementById('app'));
//mountNode);