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

let HostApi = 'http://172.16.101.202';

let {height,width} = Dimensions.get('window');

export default class WebViewContainer extends Component {
  constructor(props){
    super(props);
    // this.props.navigator.passProps.text;
    // console.warn(this.props.text);
    this.state = {
      articleDetailData:null,
    };
  }

  componentDidMount(){
  }

  componentWillUnmoont(){
  }

  render() {
    let webViewURL = HostApi+this.props.bannerInfo.targetInfo;
    console.warn(webViewURL);
    return (
        <View style = {styles.container}>
          <WebView
            automaticallyAdjustContentInsets = {true}
            scalesPageToFit = {true}
            source = {{uri:webViewURL}}
            renderLoading = {()=><View style = {{justifyContent:'center',alignSelf:'center',backgroundColor:'red',width:50,height:50}}></View>}
            >
          </WebView>
        </View>
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
    // backgroundColor: 'yellow',
    // '#FFFFFF',
    overflow:'hidden',
    // paddingTop:20,
  },
});

// AppRegistry.registerComponent('Demo4', () => Demo4);
