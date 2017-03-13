import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Dimensions,
  Navigator,
  NavigatorIOS,
  ScrollView,
  ActivityIndicator,
  Platform,
  View
} from 'react-native';

import Article from './Article';
import ArticleList from './ArticleList';

let {height,width} = Dimensions.get('window');

class ArticleDetailView extends Component{
  render(){
    return (
    <View style = {styles.container}>
      <Text style = {{backgroundColor:'red',textAlign:'center'}}>{this.props.text}</Text>
    </View>
  );
  }
}

export default class ArticleDetail extends Component {
  constructor(props){
    super(props);
    // this.props.navigator.passProps.text;
    // console.warn(this.props.text);
    this.state = {
      // this.props.nav
    };
  }

  componentDidMount(){
  }

  componentWillUnmoont(){
    clearInterval();
  }

  _BackToArticleList(){
    console.warn('帖子列表');
  }

  render() {
    let defaultComponent = ArticleDetailView;
    let defaultName = 'ArticleList';
    return (
      <ArticleDetailView text = {this.props.text}/>
      // <NavigatorIOS
      //   initialRoute = {{
      //     component:ArticleDetailView,
      //     title:'投资圈',
      //     rightButtonTitle:'详情',
      //     onRightButtonPress:()=>this._GoToArticleDetail(),
      //   }}
      //   style = {{flex:1}}
      //   ></NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //子元素沿主轴的对齐方式
    justifyContent: 'center',
    //子元素沿着次轴的对齐方式
    // alignItems: 'center',
    backgroundColor: 'yellow',
    // '#FFFFFF',
    overflow:'hidden',
    paddingTop:20,
  },
});

// AppRegistry.registerComponent('Demo4', () => Demo4);
