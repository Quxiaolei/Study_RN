import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Dimensions,
  Platform,
  View,
  NavigatorIOS,
  TouchableOpacity
} from 'react-native';

import FundPurchaseView from './FundPurchaseView';
import FundRedeemView from './FundRedeemView';

let {height,width} = Dimensions.get('window');
let HostApi =
// 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';
'http://172.16.101.202/';

class MineView extends Component{
  constructor(props){
    super(props);
  }
  _GoToFundPurchaseView(){
    // this.props.tabbarHidden(true);
    this.props.navigator.push({
      leftButtonIcon:require('../Images/nav_back.png'),
      onLeftButtonPress:()=>{
        this.props.tabbarHidden(false);
        this.props.navigator.pop();
      },
      component:FundPurchaseView,
      title:'基金申购',
      // barTintColor: '#996699',
      translucent:true,
      passProps:{
        text:'这是从帖子界面获取到的文本',
        tabbarHidden:this.props.tabbarHidden,
      },
    })
  }

  _GoToFundRedeemView(){
    this.props.tabbarHidden(true);
    this.props.navigator.push({
      leftButtonIcon:require('../Images/nav_back.png'),
      onLeftButtonPress:()=>{
        this.props.tabbarHidden(false);
        this.props.navigator.pop();
      },
      component:FundRedeemView,
      title:'基金赎回',
      // barTintColor: '#996699',
      translucent:true,
      passProps:{
        text:'这是从帖子界面获取到的文本',
        tabbarHidden:this.props.tabbarHidden,
      },
    })
  }

  render(){
    return (
      <View style = {styles.container}>
        <TouchableOpacity
          onPress = {()=>this._GoToFundPurchaseView()}>
          <Text style = {styles.userName}>申购</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {()=>this._GoToFundRedeemView()}>
          <Text style = {styles.userName}>赎回</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default class Mine extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let defaultComponent = MineView;
    let tabbarHidden = this.props.tabbarHidden;
    return (
      <NavigatorIOS
        ref = 'nav'
        initialRoute = {{
          component:defaultComponent,
          title:'财富管家',
          passProps:{tabbarHidden},
          translucent:true,
        }}
        style = {{flex:1}}
        ></NavigatorIOS>
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
    backgroundColor: '#FFFFFF',
    overflow:'hidden',
    paddingTop:Platform.OS === 'android'?0:20,
  },
  userName: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:'red',
    marginHorizontal:10,
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('Demo4', () => Demo4);
