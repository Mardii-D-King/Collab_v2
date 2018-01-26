import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class Gender extends Component<{}> {

  constructor () {
    super()
    this.state = {
      types1: [{label: 'Male   ', value: 0}, {label: '  Female', value: 1}],
    }
  }
  
    render() {
      return (
        <View style={styles.container}>
        <RadioForm
              ref="radioForm"
              radio_props={this.state.types1}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelStyle={{fontSize: 18, color: '#ffffff'}}
              labelColor={'#000000'}
              animation={true}
              borderWidth={1}
              buttonInnerColor={'#e74c3c'}
              buttonSize={15}
              buttonOuterSize={25}
              buttonStyle={{}}
              buttonWrapStyle={{marginLeft: 10}}
              onPress={(value, index) => {
                this.setState({
                  value1:value,
                  value1Index:index
                })
              }}
            />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
     marginTop:30,
     marginBottom:30
    },
  });