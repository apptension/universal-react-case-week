import React, {Component} from 'react';
import Api from '../../services/api';
import CharacterCard from '../lib/CharacterCard/CharacterCard';

export default class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterList: []
    }
  }

  componentWillMount() {
    Api.getCharacterList().then((characterList) => {
      this.setState({characterList});
    });
  }

  render() {
    const {characterList} = this.state;
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

/**
 * Iteration 4:
 *  - Export transmit component instead of pure React component
 */
