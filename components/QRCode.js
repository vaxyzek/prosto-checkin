import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';


class QRCode extends Component {
  constructor(props) {
    super(props);
  }

  onSuccess = e => {
    //const checkedIn = this.props.route.params.checkedIn;
    //const isCheckedIn = checkedIn.indexOf(e.data) !== -1;
    this.props.navigation.navigate('Ticket Info', {
      ticketNumber: e.data,
      //isCheckedIn: isCheckedIn,
      onCheckedIn: this.props.route.params.onCheckedIn,
    });
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', (route) => { 
      this.scanner.reactivate()
    });
  } 

  render() {
    return (
      <QRCodeScanner
        ref={(scanner) => { this.scanner = scanner }}
        onRead={this.onSuccess}
        topContent={<Text style={styles.centerText}>Scan ticket</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QRCode;
