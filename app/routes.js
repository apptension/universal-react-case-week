import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './src/components/App/App';
import CharacterListContainer from './src/containers/CharacterList.jsx';
import CharacterContainer from './src/containers/Character.jsx';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={CharacterListContainer}/>
    <Route path=":id" component={CharacterContainer}/>
  </Route>
);
