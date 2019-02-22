import React, { Component } from 'react';
import { BackHandler, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

type Props = {
  navigation: any,
  questions: any,
  back: Function,
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  question: {
    textAlign: 'center',
  },
  answer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonYes: {
    backgroundColor: '#00FF00',
    margin: 30,
    width: 120,
    padding: 10,
  },
  buttonNo: {
    backgroundColor: '#FF0000',
    margin: 30,
    width: 120,
    padding: 10,
  },
  title: {
    fontSize: 22,
  },
};

export default class Question extends Component<Props> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { back, navigation } = this.props;
    if (navigation.index === 0) {
      return false;
    }

    back();
    return true;
  };

  render() {
    const { navigation, questions } = this.props;
    const id = navigation.getParam('questionId', -1);
    const question = questions[id];
    return (
      <View style={styles.container}>
        <Text h3 style={styles.question}>
          {question}
        </Text>
        <View style={styles.answer}>
          <Button
            buttonStyle={styles.buttonYes}
            titleStyle={styles.title}
            type="solid"
            title="Oui"
          />
          <Button
            buttonStyle={styles.buttonNo}
            titleStyle={styles.title}
            type="solid"
            title="Non"
          />
        </View>
      </View>
    );
  }
}
