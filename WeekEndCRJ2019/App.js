/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Question from './containers/Question';
import Home from './containers/Home';

const AppNavigator = createStackNavigator(
  {
    Home,
    Question,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
