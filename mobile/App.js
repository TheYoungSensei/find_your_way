/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { logger } from 'redux-logger';
import SplashScreen from 'react-native-splash-screen';
import { createReduxContainer, createNavigationReducer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import questions from './redux/reducers/questions';

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

const navReducer = createNavigationReducer(AppNavigator);
const reducers = combineReducers({
  navigation: navReducer,
  question: questions,
});

const middleware = createReactNavigationReduxMiddleware(
  state => state.navigation,
);

const App = createReduxContainer(AppNavigator);


const mapStateToProps = state => ({
  state: state.navigation,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  reducers,
  applyMiddleware(middleware, logger),
);

export default class Root extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}