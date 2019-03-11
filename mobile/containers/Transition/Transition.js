import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

type Props = {
  isSuccess: Boolean,
}

export default class Transition extends Component<Props> {
  success = () => {
    return (
      <View>
        <LottieView
          source={require('./assets/success')}
          autoPlay
        />
      </View>
    );
  };

  error = () => {
    return (
      <View>
        <LottieView
          source={require('./assets/error')}
          autoPlay
        />
      </View>
    );
  };

  render() {
    const { isSuccess } = this.props;
    if (isSuccess) {
      return this.success();
    }
    return this.error();
  }


}
