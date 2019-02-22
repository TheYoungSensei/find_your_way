import React, { Component } from 'react';
import { View, Text } from 'react-native';

type Props = {
  navigation: any,
  questions: any,
}

export default class Question extends Component<Props> {
  render() {
    const { navigation, questions } = this.props;
    const id = navigation.getParam('questionId', -1);
    const question = questions[id];
    return (
      <View>
        <Text>
          {question}
        </Text>
      </View>
    );
  }
}
