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

    setInterval(()=>{
      this.setState({showText: !this.state.showText});
    },1000);
  }

  render (){
    let dispaly = this.state.showText ? this.props.text:'';
    return(
      <Text>🏃{dispaly} 🏃</Text>
    );
  }
}


export default class Demo3 extends Component {
  render() {
    let image = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> hello</Text>
        <Text style = {{fontSize:21,textAlign:'center'}}>你好{'\n'} hello world</Text>
        <Image source = {image} style = {{height:100,width:200}} />
        <Greeting name = '张三'/>
        <Blink text = '走你' />
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Demo3', () => Demo3);
