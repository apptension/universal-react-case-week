import React, {Component} from 'react';

/**
 * CharacterHeader
 * @props:
 *  - character {Object}
 */
import CharacterHeader from '../lib/CharacterHeader/CharacterHeader';

/**
 * CharacterDescription
 * @props:
 *  - character {Object}
 */
import CharacterDescription from '../lib/CharacterDescription/CharacterDescription';

/**
 * CharacterItems
 * @props:
 *  - items {Array}
 *  - title {String}
 */
import CharacterItems from '../lib/CharacterItems/CharacterItems';

export default class Character extends Component {
  render() {
    /**
     * Iteration 3:
     *  - Get data from API and set it to state
     *  - Use components:
     *    ------------------------------
     *   |        CharacterHeader       |
     *    ------------------------------
     *    ------------------------------
     *   |      CharacterDescription    |
     *    ------------------------------
     *    ------------------------------
     *   |        CharacterItems        | <- character.series.items
     *    ------------------------------
     *    ------------------------------
     *   |        CharacterItems        | <- character.events.items
     *    ------------------------------
     */
    
    return (
      <div className="character">
      </div>
    );
  }
}
