#RN学习总结

###常见命令:
`react-native -help`

`react-native run-ios`

`react-native run-android`

`react-native log-ios`

1.`AppRegistry`模块则是用来告知React Native哪一个组件被注册为整个应用的根容器。`AppRegistry.registerComponent`这个方法只会调用一次.

2.`props`和`state`:

`props`(属性):大多数组件在创建时就可以使用各种参数来进行自定制,用于定制的这些参数就称为`props`.

自定义的组件也可以使用`props`。通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴。常见的使用方式有在父级使用子级控件,传递某个属性的值给子类的`props`.

```JavaScript
class Greeting extends Component {
  render() {
    return (
      //获取当前类的prop属性
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
```
```javascript
//name作为props属性传递给Greeting子类
<Greeting name='Rexxar' />
```

`props`是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。

对`props`赋值时有时需要用括号包括,括号的意思是括号内部为一个JS变量或表达式，需要执行后取值。因此我们可以把任意合法的JavaScript表达式通过括号嵌入到JSX语句中。

对于需要改变的数据，我们需要使用`state`。一般需要在`constructor`中初始化`state`,然后在需要改变的时候调用`setState`方法.

3.`style`:
在设置`style`时,可以传入一个数组.在数组中位置居后的样式对象比居前的优先级更高，可以间接实现样式的继承。后声明的属性会覆盖先声明的同名属性.

固定宽高:RN中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
弹性(flex)宽高:可以使控件可利用的空间中(控件大小要固定)动态地扩张或收缩.可以做出复杂的Stack类型布局.

4.FlexBox布局:

![CSS3 Flexbox 口诀](Resources/ CSS3 Flexbox 口诀.jpg)

1.`flexDirection`:决定布局的**主轴**,也是flex切分界面布局方向.默认值是`column`.

`row`:水平轴

`column`:竖直轴

`row-reverse`/`column-reverse`:对应方向的反向布局

![CSS3 Flexbox 口诀-flexDirection](Resources/ CSS3 Flexbox 口诀-flexDirection.jpg)

2.
![CSS3 Flexbox 口诀-flexWrap](Resources/ CSS3 Flexbox 口诀-flexWrap.jpg)

3.`justifyContent`:决定组件其子元素沿着**主轴**的对齐方式

`flex-start`(靠近主轴始端)、`center`、`flex-end`(靠近主轴末端)、`space-around`(等比分割元素间的间隔)以及`space-between`(等比分割除去边界元素的间隔)。
![CSS3 Flexbox 口诀-justifyContent](Resources/ CSS3 Flexbox 口诀-justifyContent.jpg)

4.`alignItems`:决定组件其子元素沿着**次轴**的对齐方式

`auto`、`flex-start`、`center`、`flex-end`以及`stretch`(使用时子元素在次轴方向上不能有固定的尺寸)。
![CSS3 Flexbox 口诀-alignItems](Resources/ CSS3 Flexbox 口诀-alignItems.jpg)

![CSS3 Flexbox 口诀-alignContent](Resources/ CSS3 Flexbox 口诀-alignContent.jpg)

[CSS3 Flexbox 口诀](http://weibo.com/1712131295/CoRnElNkZ?ref=collection&type=comment#_rnd1488350143824)

[一个完整的Flexbox指南](http://www.w3cplus.com/css3/a-guide-to-flexbox.html)
