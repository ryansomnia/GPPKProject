import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import Router from './router';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
  }
}
