import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type Props = {
  navigation: any,
  questions: Array,
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

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
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          followsUserLocation
          initialRegion={{
            latitude: question.latitude,
            longitude: question.longitude,
            latitudeDelta: 0.0100,
            longitudeDelta: 0.0100,
          }}
        >
          <Marker
            coordinate={{
              latitude: question.latitude,
              longitude: question.longitude,
            }}
          />
        </MapView>
      </View>
    );
  }
}
