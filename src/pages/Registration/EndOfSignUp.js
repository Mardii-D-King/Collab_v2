import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import DatePicker from '../../components/DatePicker';
import PhoneVerification from '../../components/PhoneVerification';
import Gender from '../../components/Gender';

export default class EndOfSignUp extends Component<{}> {
  
    goBack() {
        Actions.pop();
    }

    goToEnd(){
        Actions.goToEndSignUp();
    }

    render() {
      return (
        <View style={styles.container}>  
          <DatePicker/>
          <Gender/>
          <PhoneVerification/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent :'center',
      backgroundColor:'#455a64',
    },
  });