import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

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
    console.log(id);
    const { questions } = this.props;
    const question = questions[id];
    return (
      <View>
        <Text>{question.question}</Text>
      </View>
    );
  }
}
