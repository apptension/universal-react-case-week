import React, {Component} from 'react';

export default class Loader extends Component {
  render() {
    return (
      <svg className="loader" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="circle" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"/>
      </svg>
    );
  }
}
