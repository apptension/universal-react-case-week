import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class CharacterCard extends Component {
  onCardClick() {
    browserHistory.push('/' + this.props.character.id);
  }

  onLinkClick(event) {
    event.stopPropagation();
  }

  renderCharacterSeries() {
    if (this.props.character.series.items.length) {
      return (<span>{this.props.character.series.items[0].name}</span>);
    }
    return null;
  }

  render() {
    return (
      <div className="col-xs-4 characterListItem">
        <div className="characterCard card row" onClick={this.onCardClick.bind(this)}>
          <div className="col-xs-4">
            <img className="characterCardImage" src={this.props.character.thumbnail.path + '/standard_medium.jpg'}/>
          </div>
          <div className="col-xs-8">
            <div className="characterCardHeader">
              <h5 className="characterCardName">{this.props.character.name}</h5>
            </div>
            <div className="characterCardSeries">
              {this.renderCharacterSeries()}
            </div>
          </div>

          <a className="characterCardLink" href={this.props.character.urls[0].url} onClick={this.onLinkClick}><i
            className="material-icons">link</i></a>
        </div>
      </div>
    );
  }
}
