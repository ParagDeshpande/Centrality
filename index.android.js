import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Header from './app/components/Header';
import Bar from './app/components/Bar';
import PhotoGrid from './app/components/PhotoGrid';

export default class Centrality extends Component {
  render() {
    return (
      <View style={styles.contrainer}>
          <Header/>
          <Bar/>
          <PhotoGrid/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contrainer:{
      flex: 1,
      backgroundColor: 'black'
    }
});

AppRegistry.registerComponent('Centrality', () => Centrality);
