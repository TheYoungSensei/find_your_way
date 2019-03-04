import React, { Component } from 'react';
import CountDown from 'react-native-countdown-component';

export default class BadAnswer extends Component {
  render() {
    return (
      <CountDown
        digitStyle={{ backgroundColor: '#FFF' }}
        digitTxtStyle={{ color: '#1CC625' }}
        timeToShow={['M', 'S']}
        timeLabels={{ m: 'MM', s: 'SS' }}
        until={60 * 2}
        size={20}
      />
    );
  }
}
