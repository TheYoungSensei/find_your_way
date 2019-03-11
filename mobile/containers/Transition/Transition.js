import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Animation from 'lottie-react-native';
import { Button } from 'react-native-elements';

type Props = {
  isCorrect: Boolean,
  navigation: any,
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  success: {
    fontSize: 28,
    textAlign: 'center',
    color: 'green',
  },
  successButton: {
    width: 120,
    padding: 10,
    backgroundColor: 'green',
  },
  error: {
    fontSize: 28,
    textAlign: 'center',
    color: 'red',
  },
  errorButton: {
    width: 120,
    padding: 10,
    backgroundColor: 'red',
  },
  label: {
    position: 'absolute',
    top: '27%',
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    top: '68%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
  },
};

export default class Transition extends Component<Props> {
  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false,
  };

  getLabel = () => {
    const { isCorrect } = this.props;
    if (isCorrect) {
      return 'Bonne réponse';
    }
    return 'Mauvaise réponse';
  };

  getSource = () => {
    const { isCorrect } = this.props;
    if (isCorrect) {
      return require('./assets/success');
    }
    return require('./assets/error');
  };

  getStyle = () => {
    const { isCorrect } = this.props;
    if (isCorrect) {
      return styles.success;
    }
    return styles.error;
  };

  getButtonStyle = () => {
    const { isCorrect} = this.props;
    if (isCorrect) {
      return styles.successButton;
    }
    return styles.errorButton;
  };

  redirect = () => {
    const { navigation, isCorrect } = this.props;
    if (isCorrect) {
      navigation.navigate('Map');
    } else {
      navigation.navigate('Penalty');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={this.getStyle()}>{this.getLabel()}</Text>
        </View>
        <Animation
          source={this.getSource()}
          autoPlay
        />
        <View style={styles.button}>
          <Button
            buttonStyle={this.getButtonStyle()}
            titleStyle={styles.title}
            type="solid"
            title="Continuer"
            onPress={this.redirect}
          />
        </View>
      </View>
    );
  }
}
