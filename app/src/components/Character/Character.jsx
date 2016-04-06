import React, {Component} from 'react';
import Transmit from 'react-transmit';
import Api from '../../services/api';

import CharacterHeader from '../lib/CharacterHeader/CharacterHeader';
import CharacterDescription from '../lib/CharacterDescription/CharacterDescription';
import CharacterItems from '../lib/CharacterItems/CharacterItems';

class Character extends Component {
  render() {
    const {character} = this.props;
    return (
      <div className="character">
        <CharacterHeader character={character}/>

        <CharacterDescription character={character}/>

        <CharacterItems items={character.series.items} title="Series"/>

        <CharacterItems items={character.events.items} title="Events"/>

      </div>
    );
  }
}

export default Transmit.createContainer(Character, {
  initialVariables: {},
  fragments: {
    character(variables) {
      return Api.getCharacter(variables.characterId);
    }
  }
});

