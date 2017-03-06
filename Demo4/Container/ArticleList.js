import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Dimensions,
  Navigator,
  View
} from 'react-native';

let {height,width} = Dimensions.get('window');
let HostApi =
// 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';
'http://172.16.101.202/';
class CustomLabel extends Component{
  render(){
    return(
      <Text style = {this.props.style}>{this.props.content}</Text>
  );
  }
}

class ListViewCell extends Component{
  //QUESTION 为什么不能设置变量呢?
  // let imageName = require('./Images/blue.png');
  constructor(){
    super();
  }
  render(){
    let rowData = this.props.currentRowData;
    let tagListArray = rowData.tagList;
    let image = {
      uri:HostApi+rowData.coverImgURL
    };
    let postTime = new Date();
    postTime.setTime(rowData.postTime);
    // console.warn(postTime);
    //如果图片资源地址不可用时,显示默认占位图
    let headImage = require('../Images/默认头像灰.png');
    if(rowData.authorInfo.photoURL){
      headImage = {
        uri:HostApi+rowData.authorInfo.photoURL
      }
    }
    return(
      <View style = {styles.cellContainer}>
        <Image source = {image} style = {styles.imageStyle}></Image>
        {/* 标签 */}
        <CustomLabel style ={{fontSize:15,color: 'gray',textAlign:'left',marginLeft:10}} content = {tagListArray[0].tagName}/>
        {/* 标题 */}
        <Text numberOfLines ={2} style = {{fontSize:18,color:'brown',marginVertical:5,marginLeft:10}}>{rowData.title}</Text>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
          {/* 头像 */}
          <Image source = {headImage} style = {{marginBottom:5,marginLeft:10,alignSelf:'center',width:10,height:10}}/>
          {/* 用户名 */}
          <Text style={styles.userNanme}>{rowData.authorInfo.nickName}</Text>
          {/* 发送时间 */}
          <Text style={styles.updateTime}>{postTime.toLocaleString()}</Text>
          {/* 点赞数 */}
          <Text style={styles.loveCont}>{rowData.thumbNumber}</Text>
        </View>
      </View>
    );
  }
}

export default class ArticleList extends Component {
  constructor(props){
    super(props);
    let ArticleListJSON = require('./ArticleList.json');
    let ArticleListArray = ArticleListJSON.postListPerPage.postList;
    // console.warn('数组长度:'+ArticleListArray.length);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
    this.state = {
      dataSource:ds.cloneWithRows(ArticleListArray)
    };
  }

  render() {
    return (
      // <Navigator
      //   initialRoute = {{title:'圈子',index:0}}
      //   renderScene = {(route, navigator)=>
      //     <Text>hah {route.title}!</Text>
      //   }
      //   style={{padding: 100}}
      // />
      <View style={styles.container}>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {(rowData)=> <ListViewCell currentRowData = {rowData}/>}
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

// AppRegistry.registerComponent('Demo4', () => Demo4);
