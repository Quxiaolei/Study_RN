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

let {height,width} = Dimensions.get('window');
let HostApi =
// 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';
'http://172.16.101.202/';

class MineView extends Component{
  render(){
    return (
      <View style = {styles.container}>
        <Text style = {styles.userName}>赎回</Text>
      </View>
    )
  }
}

export default class FundPurchaseView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let defaultComponent = MineView;
    return (
      <MineView />
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
