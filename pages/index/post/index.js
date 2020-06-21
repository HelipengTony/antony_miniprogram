Page({
  data: {
    content: null,
    alert: false,
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    if (!!options.id) {
      wx.request({
        url: 'https://blog.ouorz.com/wp-json/wp/v2/posts/' + options.id,
        method: 'GET',
        success: res => {
          this.setData({
            content: res.data.content.rendered
          })
          wx.hideLoading()
        }
      })
    } else {
      wx.hideLoading()
      this.setData({
        alert: true
      })
    }
  }
})