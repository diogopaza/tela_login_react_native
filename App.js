/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import Routes from './src/pages/Routes';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />
       
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:'#455a64',
   flex:1,
   alignItems:'center',
   justifyContent:'center',

  }
});
