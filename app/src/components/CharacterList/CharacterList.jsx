import React, {Component} from 'react';
import Transmit from 'react-transmit';
import Api from '../../services/api';
import CharacterCard from '../lib/CharacterCard/CharacterCard';

class CharacterList extends Component {
  render() {
    const {characterList} = this.props;
    return (
      <div className="characterList row">
        {characterList.map((character, index) => {
          return (
            <CharacterCard key={index} character={character}/>
          );
        })}
      </div>
    );
  }
}

export default Transmit.createContainer(CharacterList, {
  initialVariables: {},
  fragments: {
    characterList() {
      return Api.getCharacterList();
    }
  }
});
