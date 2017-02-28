'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
} from 'react-native';

import SearchBooks from '../components/SearchBooks'
class Search extends Component {
  render() {
    return (
      <NavigatorIOS style = {styles.container}
        initialRoute = {{
          title :'Search Books',
          component:SearchBooks,
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


export default Search;
