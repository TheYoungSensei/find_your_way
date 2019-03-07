import React, { Component } from 'react';
import { View, Text } from 'react-native';

type Props = {
  navigation: any,
  questions: Array,
}

export default class GoodAnswer extends Component<Props> {
  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false,
  };

  getQuestionId = () => {
    const { navigation } = this.props;
    return navigation.getParam('questionId', -1);
  };

  render() {
    const id = this.getQuestionId();
    const { questions } = this.props;
    const question = questions[id];
    return (
      <View>
        <Text>{question.label}</Text>
      </View>
    );
  }
}
