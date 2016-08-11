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

import SearchResults from './SearchResults';

// https://api.douban.com/v2/book/search?count=10&q=react-native
let BOOKSEARCH_URL = 'https://api.douban.com/v2/book/search?count=10&q=';
class SearchBooks extends Component {
  constructor(props) {
        super(props);
        this.state = {
          bookTitle:'',
          bookAuthor:'',
          isLoading:false,
          errorMessage:'',
        };
  }

  _TitleInputChanged(text){
    this.setState({
      bookTitle:text,
    });
    console.log('this.bookTitle:'+this.state.bookTitle);
  }
  _AuthorInputChanged(text){
    this.setState({
      bookAuthor:text,
    });
    console.log('this.bookAuthor:'+this.state.bookAuthor);
  }
  _searchBook(){
    // if (this.state.bookTitle.length <= 0 && this.state.bookAuthor.length <= 0) {
    //   alert('内容为空,请重新输入');
    //   return;
    // }
    this.setState ({
      isLoading:true,
    });
    let requestURL;
    console.log('bookTitle:'+this.state.bookTitle+' ,bookAuthor:'+this.state.bookAuthor);
    if(this.state.bookTitle != ''){
      requestURL = BOOKSEARCH_URL+this.state.bookTitle;
    }else if (this.state.bookAuthor != '') {
      requestURL = BOOKSEARCH_URL+this.state.bookAuthor;
    }else {
      alert('搜索内容为空,请重新输入');
      return;
    }
    this._fetchData(requestURL);
  }
  _fetchData(requestURL){
    // alert(requestURL);
    console.log('requestURL:'+requestURL);
    fetch(requestURL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState ({
          isLoading:false,
        });
        console.log('responseData.books'+responseData.books);
        if (responseData.books) {
          this.props.navigator.push({
            title:'Search Results',
            component:SearchResults,
            passProps:{books:responseData.books}
          });
        }else {
          this.setState ({
            errorMessage:'NO Result Found',
          });
        }
      })
      .catch((error) => this.setState ({
          isLoading:false,
          errorMessage:error,
        })
      )
      .done();
  }

  render() {
    //搜索时显示
    let spinner = this.state.isLoading ?
    (<View style = {styles.loading}>
      <ActivityIndicator size = 'large'/>
      <Text style = {{textAlign:'center'}}>
        Searching books...
      </Text>
    </View>):(<View/>);
    return (
      <View style = {styles.container}>
        <Text style = {styles.instruction}>
          Search by book title and/or author
        </Text>
        <Text style = {styles.titleDescription}>
          Book Title:
        </Text>
        <TextInput style = {styles.textInput}
          autoFocus = {true}
          onChangeText = {(text) => this._TitleInputChanged.bind(this,text)()}>
        </TextInput>
        <Text style = {styles.titleDescription}>
          Author:
        </Text>
        <TextInput style = {styles.textInput} onChangeText = {(text) => this._AuthorInputChanged.bind(this,text)()}>
        </TextInput>
        <TouchableHighlight style = {styles.button}
                            underlayColor = '#f1c40f'
                            onPress = {this._searchBook.bind(this)}>
          <Text style = {[styles.instruction,{color:'white'}]}> Search </Text>
        </TouchableHighlight>
        {spinner}
        <Text style = {styles.errorDescription}> {this.state.errorMessage} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,
  },
  container:{
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    marginTop:65,
    padding:10,
  },
  instruction:{
    fontSize:17,
    // justifyContent:'center',
    textAlign:'center',
    // backgroundColor:'#f39c12',
  },
  titleDescription:{
    fontSize:16,
    marginTop:10,
  },
  textInput:{
    height:40,
    marginTop:10,
    // padding:10,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:5,
  },
  button:{
    justifyContent:'center',
    marginTop:10,
    borderRadius:8,
    backgroundColor:'#f39c12',
    height:44*1,
  },
  errorDescription:{
    fontSize:15,
    marginTop:5,
    textAlign:'center',
    // backgroundColor:'yellow',
  },
});

export default SearchBooks;
