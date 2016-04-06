import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/bootstrap-material-design.min.css';
import './main.scss';
import 'images/favicon.png';

import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Router} from 'react-router';

import routes from './routes.js';


window.React = React;

const reactRoot = window.document.getElementById('react-root');


/**
 * Iteration 4:
 *  - Change ReactDOM.render to Transmit.render
 */
ReactDOM.render(<Router routes={routes} history={browserHistory}/>, reactRoot);
