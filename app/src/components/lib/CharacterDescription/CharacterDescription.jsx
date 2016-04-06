import React, {Component} from 'react';

export default class CharacterHeader extends Component {
  render() {
    return (
      <div className="row card characterSection">
        <div className="col-xs-6">
          <img src={this.props.character.thumbnail.path + '/landscape_incredible.jpg'}/>
        </div>
        <div className="col-xs-6">
          <h2 className="characterSubHeader">Description</h2>
          <p>{this.props.character.description}</p>
          <p className="characterDescriptionEmpty">
            {this.props.character.description.length === 0 ? 'No description' : ''}
          </p>
        </div>
      </div>
    );
  }
}
