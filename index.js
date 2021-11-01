
 import {AppRegistry} from 'react-native';
 import AppNavigator from "./app/App";
 import {name as appName} from './app.json';


import React, { Component } from "react";
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
 const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
 
 AppRegistry.registerComponent(appName, () => App);
 