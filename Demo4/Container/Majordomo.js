import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Dimensions,
  Navigator,
  TouchableHighlight,
  Platform,
  View
} from 'react-native';

let {height,width} = Dimensions.get('window');

import ArticleList from './ArticleList';

export default class Majordomo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let defaultComponent = ArticleList;
    let nextComponent = ArticleList;
    const routes = [{title:'First Scene',index:0,component:defaultComponent},{title:'Second Scene',index:1,component:nextComponent}];

    return (
      // FIXME: navigator标题高度设置问题
      <Navigator
        initialRoute = {routes[0]}
        initilaRouteStack = {routes}
        configureScene = {(route) =>{
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        } }
        renderScene = {(route, navigator)=>{
          let Component = route.component;
          return <Component {...route.params} navigator= {navigator} />
          // <TouchableHighlight onPress ={()=>{
          //   if(route.index ===0){
          //     navigator.push(routes[1]);
          //   }else{
          //     navigator.pop();
          //   }
          // }}>
          //   <Text>hah {route.title}!</Text>
          // </TouchableHighlight>
        }
        }
        navigationBar = {
          <Navigator.NavigationBar
           routeMapper = {{
             LeftButton :(route,navigator,index,navState)=>{
               return (<Text style = {styles.navigationBarTitle}>Back</Text>);
             },
             RightButton:(route,navigator,index,navState)=>{
               return (<Text style = {styles.navigationBarTitle}>Detail</Text>);
            },
            Title:(route,navigator,index,navState)=>{
              return (<Text style = {{backgroundColor:'red'}}>Nav Bar Title</Text>);
            },
           }}
          style={styles.navigationBar}/>
        }
        style={{padding: 100,backgroundColor:'white'}}
      />
    );
    // return (
    //   <View style={styles.container}>
    //     <ListView
    //       dataSource = {this.state.dataSource}
    //       renderRow = {(rowData)=> <ListViewCell currentRowData = {rowData}/>}
    //       //可使用borderBottomWidth实现
    //       renderSeparator = {(selection,row) => <View key= {`${selection} -${row}`} style = {styles.cellSeparator} />}
    //    />
    //     {/* <View style = {styles.cellContainer}>
    //       <Image source = {imageName} style = {styles.imageStyle}></Image>
    //       <CustomLabel style ={{fontSize:15,color: 'white',textAlign:'left',marginLeft:10}} content = '投资策略'/>
    //       <Text style = {{fontSize:20,color:'brown',marginVertical:5,marginLeft:10}}>文章标题</Text>
    //       <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
    //         <Text style={styles.userNanme}>用户名</Text>
    //         <Text style={styles.updateTime}>更新时间</Text>
    //         <Text style={styles.loveCont}>100</Text>
    //       </View>
    //     </View> */}
    //   </View>
    // );
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
  navigationBar:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:44,
    backgroundColor: `lightgray`,
    // borderColor:'black',
    marginTop:Platform.OS === 'android'?0:20,
  },
  navigationBarTitle:{
    textAlign:'center',
    backgroundColor: 'red',
    // height: 44,
    // marginTop:-10,
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

// AppRegistry.registerComponent('Demo4', () => Demo4);
