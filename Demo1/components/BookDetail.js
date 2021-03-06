'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

class BookDetail extends Component {
  render() {
    let book = this.props.book;
    let imageURI = (typeof book.image !== 'undefined') ? book.image : '';
    let description = (typeof book.summary !== 'undefined') ? book.summary : '';
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style = {styles.container}>
          <Image style = {styles.image} source = {{uri:imageURI}} />
          <Text style = {styles.description}> {description} </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer:{
    // flex:1,
  },
  container: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // padding: 10,
    marginTop:75,
  },
  image: {
    width: 107,
    height: 165,
    padding: 10
  },
  description: {
    padding: 10,
    fontSize:15,
    color: '#656565'
  }
});

export default BookDetail;
