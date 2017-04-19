/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Dimensions,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

// import Article from './Container/Article';
import ArticleList from './Container/ArticleList';
import Majordomo from './Container/Majordomo';
import Mine from './Container/Mine';
let {height,width} = Dimensions.get('window');

export default class Demo4 extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'article',
      tabBarHeight:50,
    };
  }
  //隐藏Tabbar
  // let tabBarHeight = 0;
  // <TabNavigator
  //   tabBarStyle={{ height: tabBarHeight, overflow: 'hidden' }}
  //   sceneStyle={{ paddingBottom: tabBarHeight }}
  // />
  _tabbarItemPressed(selectedTitle:String){
    // console.warn(selectedTitle);
    this.setState({
      selectedTab:selectedTitle,
      // tabBarHeight:0
    })
  }
  render() {
    // console.warn(this.refs.tabbar);
    // console.warn(this.state.tabBarHeight);
    return (
      <TabNavigator
        ref = 'tabbar'
        // style = {{height:this.state.tabBarHeight,overflow:'hidden'}}
        // sceneStyle = {{paddingBottom:this.state.tabBarHeight}}
        // hidesTabTouch = {true}
        >
        <TabNavigator.Item
          selected = {this.state.selectedTab === 'home'}
          title = '财富管家'
          renderIcon = {()=> <Image source = {require('./Images/Tabbar/投资管家.png')} />}
          renderSelectedIcon = {()=><Image source= {require('./Images/Tabbar/投资管家_selected.png')}/>}
          onPress = {()=>this.setState({selectedTab:'home',tabBarHeight:0})}
          badgeText = '1'
          >
            <Majordomo />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected = {this.state.selectedTab === 'article'}
          title = '投资圈'
          renderIcon = {() => <Image source = {require('./Images/Tabbar/财富圈.png')}/>}
          renderSelectedIcon = {()=><Image source = {require('./Images/Tabbar/财富圈_selected.png')}/>}
          onPress = {()=>this.setState({selectedTab:'article'})}
          >
            <ArticleList />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected = {this.state.selectedTab === 'mine'}
          title = '我的'
          renderIcon = {() =><Image  source = {require('./Images/Tabbar/我的.png')}/>}
          renderSelectedIcon = {() =><Image  source = {require('./Images/Tabbar/我的_selected.png')}/>}
          onPress = {()=>this._tabbarItemPressed('mine')}
          // {()=>this.setState({selectedTab:'mine'})}
          >
            <Mine />
        </TabNavigator.Item>
      </TabNavigator>
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
    paddingTop:20,
  },
  cellContainer:{
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    // height:100,
    // backgroundColor: `#F5FCFF`,
    // borderColor:'black',
    // borderBottomWidth:1,
  },
  cellSeparator:{
    backgroundColor: 'black',
    height: 0.5,
  },
  imageStyle:{
    alignSelf:'center',
    margin:10,
    width:width - 20,
    height:200,
  },
  userNanme: {
    fontSize: 13,
    textAlign: 'center',
    // backgroundColor:'red',
    marginHorizontal:10,
    marginBottom: 5,
  },
  updateTime: {
    fontSize:13,
    textAlign: 'left',
    flex:1,
    color: '#333333',
    // backgroundColor:'yellow',
    marginBottom: 5,
  },
  loveCont:{
    fontSize:13,
    color: '#666666',
    textAlign:'right',
    // backgroundColor:'red',
    marginRight:10,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Demo4', () => Demo4);
