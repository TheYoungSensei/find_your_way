import React from 'react';

import {
  AppRegistry,
  Text,
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './containers/Home';
import Question from './containers/Question';

const Router = createStackNavigator({
  Home: { screen: Home },
  Question: { screen: Question}
});

export default createAppContainer(Router);
