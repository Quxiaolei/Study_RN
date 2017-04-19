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
  WebView,
  View
} from 'react-native';

import Article from './Article';
import ArticleList from './ArticleList';

let HostApi = 'http://172.16.101.202/';
let ArticleDetailAPI = HostApi+'play/circle/getPostInfo4C';
// let ArticleDetailAPI = HostApi+'forum/articles/articleinfo/0/350/350.html';

let {height,width} = Dimensions.get('window');

class ArticleDetailView extends Component{
  render(){
    let result = this.props.articleData;
    // console.warn(HostApi+result.postInfo.contentHtml);
    return (
    <View style = {styles.container}>
      {/* <Text style = {{backgroundColor:'red',textAlign:'center'}}>{this.props.text}</Text> */}
      <WebView
        automaticallyAdjustContentInsets = {true}
        source = {{uri:HostApi+result.postInfo.contentHtml}}
        startInLoadingState = {true}
        scalesPageToFit = {true}
        style = {{backgroundColor:'red',top:44,height:100}}
        onLoadStart = {()=>{
          // console.warn('webView load start \n'+Date().toLocaleString());
        }}
        onLoadEnd = {()=>{
          // console.warn('webView load end \n'+Date().toLocaleString());
        }}
        renderLoading = {()=><View style = {{justifyContent:'center',alignSelf:'center',backgroundColor:'red',width:50,height:50}}></View>}
        >
      </WebView>
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
      articleDetailData:null,
    };
  }

  _requestArticleDetail(postId:string){
    // console.warn(postId);
    fetch(ArticleDetailAPI,{
      method:'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',
      },
      body:'postId='+postId,
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      // console.warn(responseJson.result.postInfo.coverImgURL);
      this.setState({articleDetailData:responseJson});
      // console.warn(responseJson.result.postInfo.contentHtml);
    })
    .catch((error)=>{
      console.error(error);
    })
    .done();
  }

  componentDidMount(){
    if(this.props.postId){
      //请求帖子详情
      this._requestArticleDetail(this.props.postId);
    }
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
    // console.warn(this.state.articleDetailData);
    if(!this.state.articleDetailData){
      return (
        <View style = {{flex:1,'justifyContent':'center'}}>
          <ActivityIndicator animating = {true} size = 'large'/>
          <Text style = {{textAlign:'center',color:'gray'}}>Loading...</Text>
        </View>
      );
    }
    return (
      <ArticleDetailView articleData = {this.state.articleDetailData.result}/>
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
    // flex: 1,
    //子元素沿主轴的对齐方式
    justifyContent: 'center',
    //子元素沿着次轴的对齐方式
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    // '#FFFFFF',
    overflow:'hidden',
    paddingTop:20,
    height:300,
  },
});

// AppRegistry.registerComponent('Demo4', () => Demo4);
