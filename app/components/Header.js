import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Navigator
} from 'react-native';

export default class Header extends Component {

   _onPressButton() {
     Alert.alert('You tapped the button!')
   }

  render() {
    return (
      <Image style={styles.headerBackground} source={require('../img/bg.jpg')}>

            <View style={styles.header}>
                <View style={styles.profilepicWrap}>
                    <Image style={styles.profilepic} source={require('../img/profilepic.jpg')}>   
                    </Image>
                </View>
                <Text style={styles.name}>Parag Deshpande</Text>
                <Text style={styles.pos}> - App Developer - </Text>
                {/*<Button
                    onPress={this._onPressButton}
                            title="Explore Now"
                        /> */}
            </View>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
    headerBackground:{
      flex: 1,
      width: null,
      alignSelf: 'stretch'
    },
    header:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    profilepicWrap:{
      width: 130,
      height: 130,
      borderRadius: 100,
      borderColor: 'rgba(0,0,0,0.4)',
      borderWidth: 10
    },
    profilepic:{
      flex: 1,
      width: null,
      alignSelf: 'stretch',
      borderRadius: 100,
      borderColor: '#fff',
      borderWidth: 2
    },
    name:{
      marginTop: 0,
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold'
    },
    pos:{
        fontSize: 14,
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic'
    }
});

AppRegistry.registerComponent('Centrality', () => Centrality);
