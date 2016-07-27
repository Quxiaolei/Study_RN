'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ListView,
  TouchableHighlight,
  ActivityIndicator,
  PixelRatio,
} from 'react-native';

class SearchBooks extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.description}>
          Search by book title and/or author
        </Text>
        <Text style = {styles.description}>
          Book Title:
        </Text>
        <TextInput style = {styles.textInput}>
        </TextInput>
        <Text style = {styles.description}>
          Author:
        </Text>
        <TextInput style = {styles.textInput}>
        </TextInput>
        <TouchableHighlight style = {styles.button}
                            underlayColor = '#f1c40f'>
          <Text style = {styles.description}> Search </Text>
        </TouchableHighlight>
        <View style = {styles.button}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    marginTop:65,
    padding:10,
  },
  textInput:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
  },
  fieldLabel:{
    fontSize:15,
    marginTop:15,
    backgroundColor:'yellow',
  },
  button:{
    backgroundColor:'red',
    height:40*1,
  },
});


export default SearchBooks;
