import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';
import DropdownAlert from 'react-native-dropdownalert';

const NOT_SELECTED = -1;

type Props = {
  navigation: any,
  question: any,
  correctAnswer: Function,
  wrongAnswer: Function,
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  question: {
    marginTop: 15,
    textAlign: 'center',
    padding: 10,
  },
  answer: {
    marginTop: 45,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 16,
  },
  validate: {
    margin: 30,
    marginTop: 45,
    width: 120,
    padding: 10,
  },
};

export default class Question extends Component<Props> {
  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: -1,
    };
  }

  onPress = (data) => {
    this.setState({ selectedRadio: data });
  };

  validate = () => {
    const { selectedRadio } = this.state;
    const {
      question,
      navigation,
      wrongAnswer,
      correctAnswer,
    } = this.props;
    if (selectedRadio === NOT_SELECTED) {
      this.dropdown.alertWithType('error', 'Erreur', 'Veuilliez choisir au moins une réponse');
      return;
    }
    if (selectedRadio !== question.correctAnswer) {
      // This is a CRJ QR Code.
      wrongAnswer();
    } else {
      correctAnswer();
    }
    navigation.replace('Transition');
  };

  render() {
    const { question } = this.props;
    return (
      <View style={styles.container}>
        <Text h3 style={styles.question}>
          { question.question }
        </Text>
        <View style={styles.answer}>
          <RadioForm
            buttonColor="#2196f3"
            animation
            initial={NOT_SELECTED}
            radio_props={[
              {
                label: question.answers[0].label,
                size: 35,
                value: question.answers[0].id,
              },
              {
                label: question.answers[1].label,
                size: 35,
                value: question.answers[1].id,
              },
              {
                label: question.answers[2].label,
                size: 35,
                value: question.answers[2].id,
              },
            ]}
            onPress={this.onPress}
          />
        </View>
        <Button
          buttonStyle={styles.validate}
          titleStyle={styles.title}
          type="solid"
          title="Valider"
          onPress={this.validate}
        />
        <DropdownAlert ref={ref => this.dropdown = ref} />
      </View>
    );
  }
}
