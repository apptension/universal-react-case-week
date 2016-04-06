import React, {Component} from 'react';

import Character from '../components/Character/Character.jsx';

export default class CharacterContainer extends Component {
  render() {
    return (
      /**
       * Iteration 4:
       *  - Pass variables property to Character component
       */
      <Character {...this.props}/>
    );
  }
}
