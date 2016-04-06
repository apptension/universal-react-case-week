import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/bootstrap-material-design.min.css';
import './main.scss';
import 'images/favicon.png';

import React from 'react';
import Transmit from "react-transmit";
import * as ReactRouter from 'react-router';

import routes from './routes.js';


window.React = React;

const reactRoot = window.document.getElementById('react-root');

Transmit.render(ReactRouter.Router, {routes: routes, history: ReactRouter.browserHistory}, reactRoot);
