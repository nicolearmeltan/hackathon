import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from './aboutComponent';
import HomeComponent from './homeComponent';
import QOLComponent from './qolComponent';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomeComponent}></Route>
          <Route path='/About' component={AboutComponent}></Route>
          <Route path='/QOL' component={QOLComponent}></Route>
        </Switch>
      </div>

    )
  }
}

export default MainComponent