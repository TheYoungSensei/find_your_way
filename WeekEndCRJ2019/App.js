/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';

import Question from './containers/Question';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

type Props = {
  navigation: any,
};

class App extends Component<Props> {
  onRead = (url) => {
    const urlReg = new RegExp('crjapp://(.+)');
    const matching = urlReg.exec(url.data);
    if (matching) {
      const { navigation } = this.props;
      // This is a CRJ QR Code.
      navigation.navigate('Question', {
        questionId: matching[1],
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner onRead={this.onRead} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: App,
    Question,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
