'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class Search extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.description}>
          Search tab
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description:{
    fontSize:20,
    backgroundColor:'red',
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});


export default Search;
