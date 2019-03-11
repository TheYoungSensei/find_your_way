import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { withNavigationFocus } from 'react-navigation';

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
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
});

type Props = {
  navigation: any,
  getQuestions: Function,
  scanQuestion: Function,
  isFocused: Boolean
};

class Home extends Component<Props> {
  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false,
  };

  componentDidMount(): void {
    const { getQuestions } = this.props;
    getQuestions();
  }

  onRead = (url) => {
    const urlReg = new RegExp('crjapp://(.+)');
    const matching = urlReg.exec(url.data);
    if (matching) {
      const { navigation, scanQuestion } = this.props;
      navigation.navigate('Question');
      scanQuestion(matching[1]);
      // This is a CRJ QR Code.
    }
  };

  qrCode = () => {
    const { isFocused } = this.props;
    if (isFocused) {
      return (
        <QRCodeScanner
          onRead={this.onRead}
          reactivate
          style={styles.centerText}
          reactivateTimeout={1}
        />
      );
    }
    return <View />;
  };

  render() {
    return (
      <View style={styles.container}>
        { this.qrCode() }
      </View>
    );
  }
}

export default withNavigationFocus(Home);
