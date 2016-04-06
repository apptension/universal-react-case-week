import React, {Component} from 'react';
import {Link} from 'react-router';

export default class CharacterHeader extends Component {
  render() {
    return (
      <div className="row card characterSection">
        <div className="col-xs-10">
          <h1 className="characterHeaderName">{this.props.character.name}</h1>
        </div>
        <div className="col-xs-2 characterHeaderBackColumn">
          <Link to="/" className="btn mdb-btn-fab btn-primary"><i className="material-icons">arrow_back</i></Link>
        </div>
      </div>
    );
  }
}
