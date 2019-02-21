import React, { Component } from 'react';
import { View, Text } from 'react-native';

type Props = {
  navigation: any,
}

export default class Question extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('questionId', -1);
    return (
      <View>
        <Text>
          Hello {id}
        </Text>
      </View>
    );
  }
}
