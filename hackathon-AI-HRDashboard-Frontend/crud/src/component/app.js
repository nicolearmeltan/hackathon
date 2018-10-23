import React, { Component } from 'react';
import Navigation from './navigation'
import MainComponent from './mainComponent'

class AppComponent extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MainComponent />
      </div>
    )
  }
}

export default AppComponent