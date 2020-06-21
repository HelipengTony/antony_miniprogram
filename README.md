# antony_miniprogram
A Wechat Miniprogram For Antony

<br/>

### WeChat Miniprogram from Scratch
#### 获取用户数据 (请求权限)
只能使用一个 Button 组件，并将 open-type 指定为 getUserInfo 类型来获取用户基本信息。当前页面必须存在 getUserInfo 函数来处理回调
```html
<button open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取用户信息 </button>
```

<br/>

#### 组件化
组件包含 `js` `wxml` `wxss`(可选) `json`(可选)，properties 对象定义接受的传参。
组件引用写入页面 `.json` 文件内，例子如下：
```json
{
  "usingComponents": {
    "postsList": "../../components/posts/list/index"
  }
}
```
observers / observer 函数作为数据监听器，监听 data 或者 properties。
例子如下：
```js
Component({
  properties: {
    perpage: {
      type: Number,
      observer: function (newD, oldD) {
        if (oldD && newD) {
          this.getPullDown()
        }
      }
    }
  },
})
```

<br/>

#### 页面跳转与传参
页面跳转可以使用 `<navigator></navigator>` 或者 `wx.navigateTo()`，传参直接写入 url，例子如下：
```html
<navigator url="/pages/index/post/index?id={{ item.id }}"><text>{{ item.title.rendered }}</text></navigator>
```
跳转加载需在跳转到的页面中配置：
```js
Page({
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    ...
    wx.hideLoading()
  }
})
```

<br/>

#### 页面下拉刷新支持
`.json` 文件中配置，或 `app.json` 文件中全局配置：
```json
{
  "window": {
    "enablePullDownRefresh": true
  }
}
```