import React, {Component} from 'react';

import Character from '../components/Character/Character.jsx';
import Loader from '../components/lib/Loader/Loader.jsx';

export default class CharacterContainer extends Component {
  render() {
    return (
      <Character renderLoading={<Loader/>} variables={{characterId: this.props.params.id}}/>
    );
  }
}
