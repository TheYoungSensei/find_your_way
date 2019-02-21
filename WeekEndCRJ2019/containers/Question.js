import React, { Component } from 'react';
import { View, Text } from "react-native";

export default class Question extends Component<Props> {

  render() {
    const id = this.props.navigation.getParam('questionId', -1);
    console.log(id);
    return (
      <View>
        <Text>Hello {id}</Text>
      </View>
    );
  }
}
