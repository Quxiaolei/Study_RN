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
  View,
  PanResponder
} from 'react-native';

import Article from './Article';
import ArticleList from './ArticleList';

let HostApi = 'http://172.16.101.202/';
let ArticleDetailAPI = HostApi+'play/circle/getPostInfo4C';
// let ArticleDetailAPI = HostApi+'forum/articles/articleinfo/0/350/350.html';

let {height,width} = Dimensions.get('window');

class ArticleDetailView extends Component{
  componentWillMount(){
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
      // console.warn('x轴偏移量'+gestureState.dx);
      if(gestureState.dx > 50){
        //返回列表
        this.props.navigator.pop();
      }
    },
  });
}

  render(){
    let result = this.props.articleData;
    let postTime = new Date();
    postTime.setTime(result.postInfo.postTime);

    // console.warn(HostApi+result.postInfo.contentHtml);
    // console.warn(result.postInfo.title);
    return (
    <ScrollView style = {styles.container} {...this._panResponder.panHandlers}>
      {/* <Text style = {{backgroundColor:'red',textAlign:'center'}}>{this.props.text}</Text> */}
      <Image source = {{uri:HostApi+result.postInfo.coverImgURL}} style = {styles.imageStyle}></Image>
      <Text style = {styles.titleText,{backgroundColor:'white'}}>  {result.postInfo.title}</Text>
      <View style = {{backgroundColor:'white',flexDirection:'row','justifyContent':'space-between',top:10}}>
        <Text style = {{fontSize:13,backgroundColor:'white'}}>  {result.postInfo.authorInfo.nickName}  {postTime.toLocaleString()}</Text>
        <Text style = {{fontSize:13,backgroundColor:'white'}}>{result.postInfo.visitNumber}  </Text>
      </View>
      <WebView
        ref = 'webView'
        automaticallyAdjustContentInsets = {true}
        source = {{uri:HostApi+result.postInfo.contentHtml}}
        startInLoadingState = {true}
        scalesPageToFit = {true}
        style = {{backgroundColor:'red',top:14,height:100}}
        onLoadStart = {()=>{
          // console.warn('webView load start \n'+Date().toLocaleString());
        }}
        // onContentSizeChange = {()=>{
        //   console.warn(`contentHeight`);
        // }}
        onLoad = {(webView)=>{
          // FIXME 动态改变webView高度
          // console.warn(`webView.height`);
          // console.warn('webView load end \n'+Date().toLocaleString());
          // console.warn(this.refs.webView.height);
          // this.refs.webView.height = 1000;
        }}
        onLoadEnd = {()=>{
          // console.warn('webView load end \n'+Date().toLocaleString());
          // console.warn(this.refs.webView.height);
          // this.refs.webView.height = 1000;
        }}
        renderLoading = {()=><View style = {{justifyContent:'center',alignSelf:'center',backgroundColor:'red',width:50,height:50}}></View>}
        >
      </WebView>
    </ScrollView>
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

  // componentWillMount(){
  //   this._panResponder = PanResponder.create({
  //     onPanResponderMove: (evt, gestureState) => {  // The most recent move distance is gestureState.move{X,Y}
  // // The accumulated gesture distance since becoming responder is
  // // gestureState.d{x,y}
  // console.warn(evt,gestureState);
  //   },
  //   });
  // }
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
    // console.warn(this.props.navigator.title);
    return (
      <ArticleDetailView articleData = {this.state.articleDetailData.result} navigator = {this.props.navigator}/>
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
    // justifyContent: 'center',
    //子元素沿着次轴的对齐方式
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    // '#FFFFFF',
    overflow:'hidden',
    // paddingTop:20,
    // height:height,
  },
  imageStyle:{
    alignSelf:'center',
    // margin:10,
    width:width,
    height:200,
  },
  titleText:{
    // backgroundColor:'red',
    fontSize:20,
    height:25,
  },
});

// AppRegistry.registerComponent('Demo4', () => Demo4);
