import React, {Component} from 'react';

export default class CharacterHeader extends Component {
  render() {
    return (
      <div className="row characterColumnLeft">
        <div className="col-xs-12 card characterSection">
          <h2 className="characterSubHeader">{this.props.title}</h2>
          <ul>
            {this.props.items
              .map((seriesItem, index) => {
                return (
                  <li key={index}>{seriesItem.name}</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
