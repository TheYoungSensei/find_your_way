import React, { Component } from 'react';
import { View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { Text } from 'react-native-elements';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom: 30,
  },
  label: {
    marginBottom: 20,
    color: 'black',
  },
};

type Props = {
  navigation: any,
};

export default class Penalty extends Component<Props> {
  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false,
  };

  finish = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('questionId', -1);
    navigation.navigate('Map', {
      questionId: id,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text h3 style={styles.label}>Mauvaise réponse</Text>
        <Text h3 style={styles.label}>Pénalité de : </Text>
        <CountDown
          digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FF0000' }}
          digitTxtStyle={{ color: '#FF0000' }}
          timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
          timeToShow={['M', 'S']}
          timeLabels={{ m: 'Minutes', s: 'Secondes' }}
          until={60 * 2}
          size={40}
          showSeparator
          onFinish={this.finish}
        />
      </View>
    );
  }
}
