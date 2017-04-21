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
  TextInput,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

export default class secondView extends Component {
  constructor(props){
    super(props);
    console.warn('当前name:'+this.props.name);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* 在数组中位置居后的样式对象比居前的优先级更高 */}
        <TouchableOpacity
          onPress = {()=>{
            this.props.changeName(`李四`);
            this.props.navigator.pop();
          }}
          >
          <Text style={[styles.welcome,styles.yellow,styles.red]}> 给上一界面传值:李四</Text>
        </TouchableOpacity>
        <Text style = {{fontSize:25,textAlign:'center'}}>上一界面获取值:{this.props.name} {'\n'}</Text>
        {/* <View style={styles.container}> <Greeting name = '我试试'/> </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //主轴对齐方式
    justifyContent: 'center',
    //次轴对齐方式
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    // alignSelf:'center',
    // margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  red:{
    color:'red',
  },
  yellow:{
    color:'yellow',
  },
  inputStyle:{
    backgroundColor:'gray',
    height:40,
  },
});
