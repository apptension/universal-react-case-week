import React, {Component} from 'react';

import CharacterList from '../components/CharacterList/CharacterList.jsx';
import Loader from '../components/lib/Loader/Loader.jsx';

export default class CharacterListContainer extends Component {
  render() {
    return (
      <CharacterList renderLoading={<Loader/>}/>
    );
  }
}
