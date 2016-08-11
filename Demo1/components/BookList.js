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
} from 'react-native';

import BookDetail from './BookDetail';

let FAKE_BOOK_DATA = [
    {volumeInfo: {title: 'The Catcher in the Rye', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2721385247,1356253863&fm=206&gp=0.jpg'}}},
    {volumeInfo: {title: 'The Catcher in the Rye', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2721385247,1356253863&fm=206&gp=0.jpg'}}}
];
let REQUEST_URL = 'https://api.douban.com/v2/book/search?count=100&q=react-native';
class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 != row2,
      })
    };
  }
  componentDidMount() {
    this._fetchData();
  }
  _fetchData(){
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) =>{
      console.log(responseData);
      this.setState({
        isLoading:false,
        dataSource:this.state.dataSource.cloneWithRows(responseData.books),
      })
    })
    .done();
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
  //this值继承自外围作用域
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
    if (this.state.isLoading) {
      return(
        <View style = {styles.loading}>
          <ActivityIndicator size = 'large'/>
          <Text style = {{textAlign:'center'}}>
            Loading books...
          </Text>
        </View>
      );
    }
    return (
      <ListView
        dataSource = {this.state.dataSource}
        //this绑定的是cell,当前指针的上一层对象
        renderRow = {(book) => this._renderBook(book)}
        // {this._renderBook.bind(this)}
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
    marginTop:64,
    marginBottom:48,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default BookList;
