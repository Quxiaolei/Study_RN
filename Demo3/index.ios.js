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
  View
} from 'react-native';

class Greeting extends Component {
  constructor() {
    super();
  }
  render (){
    return (
      <Text style = {{textAlign:'center'}}>hello {this.props.name} </Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText:true};

    //setInterval/setTimeout:定时器函数
    setInterval(()=>{
      this.setState({showText: !this.state.showText});
    },1000);
  }

  render (){
    let dispaly = this.state.showText ? this.props.text:'';
    return(
      <Text style = {{fontSize:20,alignSelf:'center'}}>🏃{dispaly} 🏃</Text>
    );
  }
}


export default class Demo3 extends Component {
  render() {
    let image = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      // <View style={styles.container}>
      //   {/* 在数组中位置居后的样式对象比居前的优先级更高 */}
      //   <Text style={[styles.welcome,styles.yellow,styles.red]}> hello</Text>
      //   <Text style = {{fontSize:21,textAlign:'center'}}>你好{'\n'} hello world</Text>
      //   <Image source = {image} style = {{height:100,width:200} } />
      //   <Greeting name = '张三'/>
      //   <Blink text = '走你' />
      //   {/* <View style={styles.container}> <Greeting name = '我试试'/> </View> */}
      // </View>
      <View style = {{flex:1,backgroundColor:'#F5FCFF',flexDirection:'column'}}>
        <View style = {{flex:1,backgroundColor:'red'}}></View>
        <View style = {{flex:1,backgroundColor:'yellow'}}></View>
        <Text style={[styles.welcome,styles.yellow,styles.red,{flex:1,backgroundColor:'gray'}]}> hello</Text>
        <Text style = {{fontSize:21,textAlign:'center',backgroundColor:'green'}}>你好{'\n'} hello world</Text>
        <View style = {{flex:1.5,backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}>
          <Image source = {image} style = {{height:100,width:200,alignItems:'center',alignSelf:'center'} } />
          <Greeting name = '张三'/>
          <Blink text = '走你' />
        </View>
        <Text style = {{flex:1,backgroundColor:'pink'}}></Text>
      </View>
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
});

AppRegistry.registerComponent('Demo3', () => Demo3);
