import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Dimensions,
  Navigator,
  ScrollView,
  ActivityIndicator,
  View
} from 'react-native';

let {height,width} = Dimensions.get('window');
let HostApi =
// 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';
'http://172.16.101.202/';
//http://172.16.101.202/play/circle/getBannerList4C
let BannerListApi = HostApi+'play/circle/getBannerList4C';
//http://172.16.101.202/play/circle/getPostList4C
let ArticleListApi = HostApi+'play/circle/getPostList4C';
class CustomLabel extends Component{
  render(){
    return(
      <Text style = {this.props.style}>{this.props.content}</Text>
  );
  }
}

class ScrollViewContent extends Component{
  render(){
    let bannerTitle = this.props.bannerInfo.title;
    let bannerImage = this.props.bannerInfo.bannerImgUrl;
    let image = {
      uri:HostApi+bannerImage
    }
    // require('../Images/blue.png');
    return (
      <View>
        <Image source = {image} style = {{flex:1,flexDirection:'column-reverse',width:width-20,margin:10}}>
          <Text style= {{fontSize:16,color:'white',marginBottom:10,marginLeft:10,backgroundColor:'rgba(100, 100, 100, 0.00001)'}}>{bannerTitle}</Text>
        </Image>
      </View>
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
    // let ArticleListJSON = require('./ArticleList.json');
    // let ArticleListArray = ArticleListJSON.postListPerPage.postList;
    // let BannerListJSON = require('./ArticleBannerList.json');
    // let BannerListArray = BannerListJSON.bannerList;
    // console.warn('数组长度:'+ArticleListArray.length);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
    this.state = {
      dataSource: ds,
      // ds.cloneWithRows(ArticleListArray),
      scrollViewIndex:0,
      bannerDataSource:null,
      // bannerDataSource:BannerListArray,
    };
    // console.warn(height);
    // console.warn(ArticleListApi);
    setInterval(()=>{
      if(null !=this.state.bannerDataSource){
        let i = (++this.state.scrollViewIndex)%this.state.bannerDataSource.length;
        // console.warn(i);
        this.setState({scrollViewIndex:i});
        //滚动到指定的x, y偏移处
        _scrollView.scrollTo({x:width*i,y:0,animated:true});
        // _scrollView.scrollToEnd({animated:false});
      }
    },3000);
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this._requestBannerListData = this._requestBannerListData.bind(this);
  }

  _requestBannerListData(){
    fetch(BannerListApi,{
      method:'POST',
      header:{
        'Content-Type':'application/x-www-form-urlencoded',
      },
      body:'',
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      // console.warn(responseJson.bannerList[0].title);
      // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
      this.setState({bannerDataSource:responseJson.bannerList});
    })
    .catch((error)=>{
      console.error(error);
    })
    .done();
  }

  _requestArticleListData(){
    fetch(ArticleListApi,{
      method:'POST',
      header:{
        'Content-Type':'application/x-www-form-urlencoded',
      },
      body:'boardId=1&pageNumber=0',
    })
    .then(response=>response.json())
    .then(responseJson=>{
      // FIXME: 为什么每次请求的数据都只有一条,且还是占位脏数据
      console.warn('文章条数:'+responseJson.postListPerPage.postList.length);
      // console.warn('文章标题:'+responseJson.postListPerPage.postList[0].title);
      let ArticleListJSON = require('./ArticleList.json');
      let ArticleListArray = ArticleListJSON.postListPerPage.postList;
      // console.warn(ArticleListArray.length);
      // console.warn(ArticleListArray[0].title);
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(ArticleListArray),
      });
    })
    .catch(error=>{
      console.error(error);
    })
    .done();
  }

  componentDidMount(){
    this._requestBannerListData();
    this._requestArticleListData();
  }
  componentWillUnmoont(){
    clearInterval();
  }

  render() {
    //设置state时,会重新渲染一次组件
    if(!this.state.bannerDataSource || !this.state.dataSource || this.state.dataSource.length <1){
      return (
        <View style = {{flex:1,'justifyContent':'center'}}>
          <ActivityIndicator animating = {true} size = 'large'/>
          <Text style = {{textAlign:'center',color:'gray'}}>Loading...</Text>
        </View>

        // {/* <View style = {{backgroundColor:'red',alignSelf:'center',width:100,height:100}}>
        //   <Text>loading message</Text>
        // </View> */}
      );
    }
    return (
      <View>
        <ScrollView
          // QUESTION: ref相关,_scrollView怎么不用定义
          ref ={(scrollView)=>{ _scrollView = scrollView;}}
          style = {styles.scrollViewContainer}
          // contentContainerStyle =
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          pagingEnabled = {true}
          // scrollEnabled = {true}
          automaticallyAdjustContentInsets = {true}
          onScroll = {()=>{
            // console.warn('hha ');
          }}
          onContentSizeChange = {(contentWidth,contentHeight)=>{
            // console.warn(contentWidth+','+contentHeight);
          }}
          >
            {
              // 遍历数组,设置控件
              // console.warn(this.state.bannerDataSource);
              this.state.bannerDataSource.map((bannerInfo,i)=>
                // console.warn(bannerInfo.title);
                <ScrollViewContent key={i} bannerInfo = {bannerInfo} />
              )
            }
            {/* //普通的设置方法
            <ScrollViewContent bannerInfo = {BannerListArray[0]}/>
            <ScrollViewContent bannerInfo = {BannerListArray[1]}/>
            <ScrollViewContent bannerInfo = {BannerListArray[2]}/>
            <ScrollViewContent bannerInfo = {BannerListArray[3]}/> */}
        </ScrollView>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {(rowData)=> <ListViewCell currentRowData = {rowData}/>}
          //可使用borderBottomWidth实现
          renderSeparator = {(selection,row) => <View key= {`${selection} -${row}`} style = {styles.cellSeparator} />}
       />
      </View>

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
    backgroundColor: '#FFFFFF',
    overflow:'hidden',
    paddingTop:20,
  },
  scrollViewContainer:{
    marginTop:20,
    height:280,
    backgroundColor:'lightgray',
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
