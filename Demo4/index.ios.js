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
  View
} from 'react-native';

class CustomLabel extends Component{
  render(){
    return(
      <Text style = {this.props.style}>{this.props.content}</Text>
  );
  }
}

class ListViewCell extends Component{
  // let imageName = require('./Images/blue.png');
  render(){
    return(
      <View style = {styles.cellContainer}>
        <Image source = {require('./Images/blue.png')} style = {styles.imageStyle}></Image>
        <CustomLabel style ={{fontSize:15,color: 'white',textAlign:'left',marginLeft:10}} content = '投资策略'/>
        <Text style = {{fontSize:20,color:'brown',marginVertical:5,marginLeft:10}}>文章标题</Text>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.userNanme}>用户名</Text>
          <Text style={styles.updateTime}>更新时间</Text>
          <Text style={styles.loveCont}>100</Text>
        </View>
      </View>
    );
  }
}

export default class Demo4 extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
    this.state = {
      dataSource:ds.cloneWithRows(['1','2',`3`,`4`,`5`,`6`,`7`])
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {(rowData)=> <ListViewCell />}
          //可使用borderBottomWidth实现
          renderSeparator = {(selection,row) => <View key= {`${selection} -${row}`} style = {styles.cellSeparator} />}
       />
        {/* <View style = {styles.cellContainer}>
          <Image source = {imageName} style = {styles.imageStyle}></Image>
          <CustomLabel style ={{fontSize:15,color: 'white',textAlign:'left',marginLeft:10}} content = '投资策略'/>
          <Text style = {{fontSize:20,color:'brown',marginVertical:5,marginLeft:10}}>文章标题</Text>
          <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.userNanme}>用户名</Text>
            <Text style={styles.updateTime}>更新时间</Text>
            <Text style={styles.loveCont}>100</Text>
          </View>
        </View> */}
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
    backgroundColor: '#F5FCFF',
    paddingTop:20,
  },
  cellContainer:{
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    // height:100,
    backgroundColor: `gray`,
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
  },
  userNanme: {
    fontSize: 13,
    textAlign: 'center',
    backgroundColor:'red',
    marginHorizontal:10,
    marginBottom: 5,
  },
  updateTime: {
    fontSize:13,
    textAlign: 'left',
    flex:1,
    color: '#333333',
    backgroundColor:'yellow',
    marginBottom: 5,
  },
  loveCont:{
    fontSize:13,
    color: '#666666',
    textAlign:'right',
    backgroundColor:'red',
    marginRight:10,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Demo4', () => Demo4);
