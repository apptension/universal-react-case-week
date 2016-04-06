import React, {Component} from 'react';

/**
 * Use CharacterCard component to render single character card
 * @props:
 *  - character {Object}
 */
import CharacterCard from '../lib/CharacterCard/CharacterCard';

export default class CharacterList extends Component {
  render() {
    /**
     * Iteration 3:
     *  - Get characters list from API and set it to state
     *  - For each character render CharacterCard component
     */
    return (
      <div className="characterList row">
      </div>
    );
  }
}
