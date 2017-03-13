import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Dimensions,
  Navigator,
  NavigatorIOS,
  ScrollView,
  ActivityIndicator,
  Platform,
  View
} from 'react-native';

import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
let {height,width} = Dimensions.get('window');

export default class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }

  componentWillUnmoont(){
    clearInterval();
  }

  _GoToArticleDetail(){
    // console.warn('帖子详情');
    // TODO: 隐藏tabbar
    this.refs.nav.push({
      // leftButtonTitle:'back',
      leftButtonIcon:require('../Images/nav_back.png'),
      onLeftButtonPress:()=>this.refs.nav.pop(),
      component:ArticleDetail,
      title:'帖子详情',
      // barTintColor: '#996699',
      translucent:true,
      passProps:{
        text:'这是从帖子界面获取到的文本',
      },
    });
  }

  render() {
    let defaultComponent = ArticleList;
    let defaultName = 'ArticleList';
    return (
      // <Navigator
      //   initialRoute = {{component:ArticleList,name:defaultName,index:0}}
      //   renderScene = {(route,navigator)=>{
      //     let Component = route.component;
      //     if(Component){
      //       return <Component {...route.params} navigator = {navigator} />
      //     }
      //   }}
      //   configureScene = {()=>{ return Navigator.SceneConfigs.VerticalDownSwipeJump;}}
      // />
      <NavigatorIOS
        ref = 'nav'
        initialRoute = {{
          component:defaultComponent,
          title:'投资圈',
          rightButtonTitle:'详情',
          translucent:true,
          onRightButtonPress:()=>this._GoToArticleDetail(),
        }}
        style = {{flex:1}}
        ></NavigatorIOS>


    // < ArticleList />


      // <View>
      //   <ScrollView
      //     // QUESTION: ref相关,_scrollView怎么不用定义
      //     ref ={(scrollView)=>{ _scrollView = scrollView;}}
      //     style = {styles.scrollViewContainer}
      //     // contentContainerStyle =
      //     horizontal = {true}
      //     showsHorizontalScrollIndicator = {false}
      //     pagingEnabled = {true}
      //     // scrollEnabled = {true}
      //     automaticallyAdjustContentInsets = {true}
      //     onScroll = {()=>{
      //       // console.warn('hha ');
      //     }}
      //     onContentSizeChange = {(contentWidth,contentHeight)=>{
      //       // console.warn(contentWidth+','+contentHeight);
      //     }}
      //     >
      //       {
      //         // 遍历数组,设置控件
      //         // console.warn(this.state.bannerDataSource);
      //         this.state.bannerDataSource.map((bannerInfo,i)=>
      //           // console.warn(bannerInfo.title);
      //           <ScrollViewContent key={i} bannerInfo = {bannerInfo} />
      //         )
      //       }
      //       {/* //普通的设置方法
      //       <ScrollViewContent bannerInfo = {BannerListArray[0]}/>
      //       <ScrollViewContent bannerInfo = {BannerListArray[1]}/>
      //       <ScrollViewContent bannerInfo = {BannerListArray[2]}/>
      //       <ScrollViewContent bannerInfo = {BannerListArray[3]}/> */}
      //   </ScrollView>
      //   <ListView
      //     dataSource = {this.state.dataSource}
      //     renderRow = {(rowData)=> <ListViewCell currentRowData = {rowData}/>}
      //     //可使用borderBottomWidth实现
      //     renderSeparator = {(selection,row) => <View key= {`${selection} -${row}`} style = {styles.cellSeparator} />}
      //  />
      // </View>

      // <Navigator
      //   initialRoute = {{title:'圈子',index:0}}
      //   renderScene = {(route, navigator)=>
      //     <Text>hah {route.title}!</Text>
      //   }
      //   style={{padding: 100}}
      // />
      // <View style={styles.container}>
      //   <ListView
      //     dataSource = {this.state.dataSource}
      //     renderRow = {(rowData)=> <ListViewCell currentRowData = {rowData}/>}
      //     renderScrollComponent = {()=>}
      //     //可使用borderBottomWidth实现
      //     renderSeparator = {(selection,row) => <View key= {`${selection} -${row}`} style = {styles.cellSeparator} />}
      //  />
      //   {/* <View style = {styles.cellContainer}>
      //     <Image source = {imageName} style = {styles.imageStyle}></Image>
      //     <CustomLabel style ={{fontSize:15,color: 'white',textAlign:'left',marginLeft:10}} content = '投资策略'/>
      //     <Text style = {{fontSize:20,color:'brown',marginVertical:5,marginLeft:10}}>文章标题</Text>
      //     <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
      //       <Text style={styles.userNanme}>用户名</Text>
      //       <Text style={styles.updateTime}>更新时间</Text>
      //       <Text style={styles.loveCont}>100</Text>
      //     </View>
      //   </View> */}
      // </View>
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
    backgroundColor: 'yellow',
    // '#FFFFFF',
    overflow:'hidden',
    paddingTop:20,
  },
});

// AppRegistry.registerComponent('Demo4', () => Demo4);
