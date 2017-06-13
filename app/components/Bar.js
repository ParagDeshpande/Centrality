import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Text
} from 'react-native';


export default class Bar extends Component {

openPopup() {
Alert.alert('Go to WebPage')
}
  render() {
    return (
    
        <View style={styles.bar}>
            
            {/*<TouchableOpacity onPress={this.openPopup}> */}
            <View style={[styles.barItem, styles.barseparator]}>
            <Text style={styles.barTop}>Mobile Technologies</Text>
            </View> 
            {/*</TouchableOpacity>*/}

            {/*<TouchableOpacity onPress={this.openPopup}>*/}
            <View style={styles.barItem}>
            <Text style={styles.barTop}>Website Technologies</Text>
            </View>
            {/*</TouchableOpacity>*/}

        </View>
    );
  }
}

const styles = StyleSheet.create({
   bar: {
    //    borderTopColor: '#fff',
       borderTopWidth: 4,
       backgroundColor: '#0d47a1',
       flexDirection: 'row'
   },
   barseparator:{
       borderRightWidth: 4
   },
   barTop:{
       color: '#fff',
       fontSize: 16,
       fontWeight: 'bold',
       fontStyle: 'italic'
   },
   barBottom:{
       //style for followe / following
       color: '#000',
       fontSize: 14,
       fontWeight: 'bold',
       fontStyle: 'italic'
   },
   barItem:{
       flex: 1,
       padding: 10,
       alignItems: 'center'
   }
});

