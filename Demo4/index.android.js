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

import ArticleList from './Container/ArticleList';
import Majordomo from './Container/Majordomo';
import Mine from './Container/Mine';
let {height,width} = Dimensions.get('window');

export default class Demo4 extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'article',
      tabBarHeight:49,
    };
  }

  hiddenTabBar(state){
    // console.warn(`hidden:`+state);
    this.setState({
      tabBarHeight: state? 0:49,
    });
  }

  _tabbarItemPressed(selectedTitle:String){
    // console.warn(selectedTitle);
    this.setState({
      selectedTab:selectedTitle,
      // tabBarHeight:0
    })
  }

  render() {
    return (
      <TabNavigator
        ref = 'tabbar'
        tabBarStyle = {{height:this.state.tabBarHeight,overflow:'hidden'}}
        sceneStyle = {{paddingBottom:this.state.tabBarHeight}}
        >
        <TabNavigator.Item
          selected = {this.state.selectedTab === 'home'}
          title = '财富管家'
          renderIcon = {()=> <Image source = {require('./Images/Tabbar/投资管家.png')} />}
          renderSelectedIcon = {()=><Image source= {require('./Images/Tabbar/投资管家_selected.png')}/>}
          onPress = {()=>this.setState({selectedTab:'home'})}
          badgeText = '1'
          >
            <Majordomo tabbar = {this.refs.tabbar}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected = {this.state.selectedTab === 'article'}
          title = '投资圈'
          renderIcon = {() => <Image source = {require('./Images/Tabbar/财富圈.png')}/>}
          renderSelectedIcon = {()=><Image source = {require('./Images/Tabbar/财富圈_selected.png')}/>}
          onPress = {()=>this.setState({selectedTab:'article'})}
          >
            <ArticleList tabbarHidden = {(state) => this.hiddenTabBar(state)} selectedTabName='article'/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected = {this.state.selectedTab === 'mine'}
          title = '我的'
          renderIcon = {() =><Image  source = {require('./Images/Tabbar/我的.png')}/>}
          renderSelectedIcon = {() =><Image  source = {require('./Images/Tabbar/我的_selected.png')}/>}
          onPress = {()=>this.setState({selectedTab:'mine'})}
          >
            <Mine />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
AppRegistry.registerComponent('Demo4', () => Demo4);
