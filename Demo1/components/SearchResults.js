'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight,
} from 'react-native';

import BookDetail from './BookDetail';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 != row2,
    });
    this.state = {
      isLoading: true,
      dataSource: dataSource.cloneWithRows(this.props.books),
    };
  }

  // TODO: 点击进入详情页的时候,隐藏tabbar
  _showBookDetail(book){
    // alert('图书详情');
    this.props.navigator.push({
      title: book.title,
      component: BookDetail,
      passProps: {book},
    });
  }

  _renderBook(book){
    return (
      <TouchableHighlight onPress={() => this._showBookDetail(book)}  underlayColor='#dddddd'>
        <View>
          <View style={styles.container}>
            <Image
              source={{uri: book.image}}
              style={styles.thumbnail} />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.author}>{book.author[0]}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this._renderBook.bind(this)}
        style = {styles.listView}>
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 17,
    marginBottom: 8
  },
  author: {
    color: '#656565'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  listView: {
    backgroundColor:'#F5FCFF',
  },
});

export default SearchResults;
