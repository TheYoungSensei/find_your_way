import React, { Component } from 'react';
import { Platform, Linking } from 'react-native';
import QRCodeScanner from "../App";

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  componentDidMount(): void {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      })
    } else {
      Linking.addEventListener('url', this.handleOpenURL)
    }
  };

  componentWillUnmount(): void {
    Linking.removeEventListener('url', this.handleOpenURL)
  };

  handleOpenURL = (event) => {
    this.navigate(event.url)
  };

  navigate = (url) => {
    const { navigate } = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '')
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
    if (routeName === 'question') {
      navigate('Question', { id })
    }
  };

  onSuccess = (event) => {
    Linking.openURL(event.data).catch(err => console.error('An error occured', err))
  };

  render() {
    return <QRCodeScanner onRead={this.onSuccess}/>
  };
}
