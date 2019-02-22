import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

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

export default class Home extends Component<Props> {
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