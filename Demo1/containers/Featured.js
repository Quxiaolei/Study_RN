'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
} from 'react-native';

import BookList from '../components/BookList'
class Featured extends Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          title:'Featured Books',
          component:BookList,
        }}>
      </NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
  }
});


export default Featured;
