# Study_RN

###伸缩容器的属性:
1.display:

2.flex-direction:指定主轴方向

3.flex-wrap:伸缩容器在主轴空间不足时,是否进行换行显示

4.flex-flow:同时定义flex-direction和flex-wrap,默认row和wrap

5.justify-content:定义伸缩项目在**主轴线**上的对齐方式(flex-start,flex-end,center,space-between(平均分布在主轴线),space-around(平均分布在主轴线,两边留一半空间))

6.align-items:定义伸缩项目在**交叉轴**上的对齐方式(flex-start,flex-end,center,baseline(基准线对齐),stretch(拉伸))

7.align-content:调整伸缩项目在换行后再**交叉轴**上的对齐方式(flex-start,flex-end,center,space-between,stretch)
###伸缩项目的属性:
1.order:定义项目的排列顺序,数值越小越靠前,默认为0

2.flex-grow:定义伸缩项目的**放大**比例,默认值为0

3.flex-shrink:定义伸缩项目的**收缩**比例,默认值为1

4.flex-basis:设置伸缩项目的基准值,剩余空间按比例进行伸缩,

flex-basis:length | auto,默认值auto

5.flex:2,3,4的缩写,默认为0,1为auto

6.align-self:设置伸缩项目在**交叉轴**上的对齐方式,会覆盖默认对齐方式,不能设置在交叉轴方向的宽/高数值(auto,flex-start,flex-end,center,baseline,stretch)
###在RN中的使用:
1.alignItems:flex-start,flex-end,center,stretch

2.alignSelf:auto,flex-start,flex-end,center,stretch

3.flex:

4.flexDirection:

5.flexWrap:

6.justifyContent:
___
###事件绑定
1.调用bind方法时,需要设定作用域,传递该传递的参数.默认会传递this参数

```
//{()=>}	larmart语法
```
2.//TODO: bind时this的使用

---
###组件生命周期
1.创建阶段:

getDefaultProps  [创建类的时候被调用],this.props该组件的默认属性值 

2.实例化阶段，

getInitialState  [获取this.state的默认值],this.state存储该组件所需的数据,每次数据的更新通过修改state属性的值.内部监听state属性的变化,主动触发组件的render方法更新虚拟DOM文件

componentWillMount  [在render之前调用此方法，业务逻辑的处理都应该放在这里，如对state的操作等]

render  [渲染并返回一个虚拟DOM]

componentDidMount  [在render方法之后，ReactJS会使用render方法返回的虚拟DOM对象来创建真是的DOM]

3.更新阶段:

componentWillRecieveProps  [this.props被修改或父组件调用setProps()方法之后]

shouldComponentUpdate  [是否需要更新]

componentWillUpdate  [将要更新]

componentDidUpdate  [更新完毕]常做DOM的操作

4.销毁阶段:

componentWillUnmount  [销毁时]取消事件的绑定,移除虚拟DOM中组件的数据结构,销毁无效的定时器

---

[React/React Native 的ES5 ES6写法对照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)

[手把手教React Native实战开发视频教程【更新到48集啦。。。】](http://bbs.reactnative.cn/topic/759/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99react-native%E5%AE%9E%E6%88%98%E5%BC%80%E5%8F%91%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B-%E6%9B%B4%E6%96%B0%E5%88%B048%E9%9B%86%E5%95%A6)
#####1.图书搜索,查看

[https://github.com/appcoda/React-Native-Demo-App](https://github.com/appcoda/React-Native-Demo-App)

[如何用 React Native 创建一个iOS APP？（一）](http://blog.oneapm.com/apm-tech/366.html)

[如何用 React Native 创建一个iOS APP？（二）](http://blog.oneapm.com/apm-tech/391.html)

[如何用 React Native 创建一个iOS APP？（三）](http://blog.oneapm.com/apm-tech/416.html)
#####2.京东砍啊砍

[https://github.com/sunnycn2013/HelloWorld](https://github.com/sunnycn2013/HelloWorld)

[http://www.myexception.cn/iphone/2031539.html](http://www.myexception.cn/iphone/2031539.html)
#####3.豆搜
[https://github.com/vczero/React-Dou](https://github.com/vczero/React-Dou)

#####4.navigator
[新手理解Navigator的教程](http://bbs.reactnative.cn/topic/20/%E6%96%B0%E6%89%8B%E7%90%86%E8%A7%A3navigator%E7%9A%84%E6%95%99%E7%A8%8B/2)

[https://github.com/mozillo/navigation](https://github.com/mozillo/navigation)