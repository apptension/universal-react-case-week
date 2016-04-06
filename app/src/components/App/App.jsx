import React, {Component} from 'react';
import Header from '../lib/Header/Header';
import Footer from '../lib/Footer/Footer';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header/>
        <div className="appContainer container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}
