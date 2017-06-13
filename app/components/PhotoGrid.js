import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';


export default class Centrality extends Component {
  render() {
    return (
        <ScrollView>
            <View style={styles.photoGrid}>
                <View style={styles.photoWrap}>
                    <Image style={styles.photo} source={require('../img/android.jpg')}/>
                </View>
                <View style={styles.photoWrap}>
                    <Image style={styles.photo} source={require('../img/javascript.png')}/>
                </View>
                <View style={styles.photoWrap}>
                    <Image style={styles.photo} source={require('../img/ReactNativelogo.png')}/>
                </View>
                <View style={styles.photoWrap}>
                    <Image style={styles.photo} source={require('../img/bootstrap.png')}/>
                </View>
                <View style={styles.photoWrap}>
                    <Image style={styles.photo} source={require('../img/ionic.jpg')}/>
                </View>
                <View style={styles.photoWrap}>
                    <Image style={styles.photo} source={require('../img/php.png')}/>
                </View>
                <View style={styles.photoWrap}>
                    <Image style={styles.photo} source={require('../img/ios.png')}/>
                </View>
                <View style={styles.photoWrap}>
                    <Image style={styles.photo} source={require('../img/asp_net.png')}/>
                </View>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    photoGrid:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    photoWrap:{
        margin: 2,
        height: 100,
        width: (Dimensions.get('window').width/2)-4,
    },
    photo:{
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    }
});
