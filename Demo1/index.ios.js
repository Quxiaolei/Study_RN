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
  View,
  TabBarIOS,
} from 'react-native';

import Featured from './containers/Featured'
import Search from './containers/Search'
class Demo1 extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
      selectTab:'featured',
    };
	}
  render() {
    return (
      <TabBarIOS selectTab = {this.state.selectTab}
      //translucent:半透明
        translucent = {true}>
        <TabBarIOS.Item
          selected = {this.state.selectTab == 'featured'}
          // icon = {{uri:'featured'}}
          systemIcon = 'featured'
          onPress = {() => {
            this.setState ({
              selectTab:'featured'
            });
          }}>
          <Featured/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected = {this.state.selectTab == 'search'}
          // icon = {{uri:'search'}}
          systemIcon= 'search'
          onPress = {() => {
            this.setState ({
              selectTab:'search'
            });
          }}>
          <Search/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Demo1', () => Demo1);
