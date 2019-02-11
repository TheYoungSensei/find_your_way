import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Question extends Component {
  static navigationOptions = {
    title: 'Question',
  };

  render() {
    const { id } = this.props.navigation.state.params;
    return <Text>No user known for {id}</Text>
  }

}
