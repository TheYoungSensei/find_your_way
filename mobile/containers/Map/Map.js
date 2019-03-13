import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from 'react-native-elements';

type Props = {
  navigation: any,
  question: any,
  back: any,
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
  button: {
    position: 'absolute',
    top: '70%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
  },
  scanner: {
    margin: 30,
    marginTop: 45,
    width: 120,
    padding: 10,
  },
};

export default class Map extends Component<Props> {
  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { back, navigation } = this.props;
    if (navigation.index === 0) {
      return false;
    }

    back();
    return true;
  };

  goToScanner = () => {
    const { navigation } = this.props;
    navigation.push('Home');
  };

  render() {
    const { question } = this.props;
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
        <View
          style={styles.button}
        >
          <Button
            buttonStyle={styles.scanner}
            titleStyle={styles.title}
            type="solid"
            title="Scanner"
            onPress={this.goToScanner}
          />
        </View>
      </View>
    );
  }
}
