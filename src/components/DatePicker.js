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
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';


export default class DatePicker extends Component<{}> {

    goBack() {
        Actions.pop();
    }

    goToEnd(){
        Actions.goToEndSignUp();
    }

    constructor(props){
      super(props);
      this.state = {
        dobText: '',
        dobDate: null,
      }
    }
  
    /**
     * DOB textbox click listener
     */
    onDOBPress = () => {
      let dobDate = this.state.dobDate;
      if(!dobDate || dobDate == null){
        dobDate = new Date();
        this.setState({
          dobDate: dobDate
        });
      }
  
      //To open the dialog
      this.refs.dobDialog.open({
        date: dobDate,
        maxDate: new Date(), //To restirct future date
        mode: 'spinner'
      });
  
    }
  
    /**
     * Call back for dob date picked event
     *
     */
    onDOBDatePicked = (date) => {
      this.setState({
        dobDate: date,
        dobText: moment(date).format('DD-MMM-YYYY')
      });
    }
  
    render() {
      return (
        <View style={styles.container}>   
            <Text style={{fontSize:18, color:'rgba(255, 255, 255, 0.7)'}} >D.O.B</Text>
            <TouchableOpacity onPress={this.onDOBPress.bind(this)}>
              <View style={styles.datePickerBox}>
                <Text style={styles.datePickerText}>{this.state.dobText}</Text>
              </View>
            </TouchableOpacity> 
          {/* Place the dialog component at end of your views and assign the references, event handlers to it.*/}
          <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} />
         
  
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
   

    },
    content: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    datePickerBox:{
      borderColor: '#ABABAB',
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      marginVertical: 10,
      height: 38,
      justifyContent:'center'
    },
    datePickerText: {
      fontSize: 18,
      marginLeft: 5,
      borderWidth: 0,
      color:'rgba(255, 255, 255, 0.7)'
    },
  });