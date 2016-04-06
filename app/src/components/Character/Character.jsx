import React, {Component} from 'react';
import Api from '../../services/api';

import CharacterHeader from '../lib/CharacterHeader/CharacterHeader';
import CharacterDescription from '../lib/CharacterDescription/CharacterDescription';
import CharacterItems from '../lib/CharacterItems/CharacterItems';

export default class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: null
    };
  }

  componentWillMount() {
    Api.getCharacter(this.props.params.id).then((character) => {
      this.setState({character});
    });
  }

  render() {
    const {character} = this.state;
    if (!character) {
      return null;
    }

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

/**
 * Iteration 4:
 *  - Export transmit component instead of pure React component
 */