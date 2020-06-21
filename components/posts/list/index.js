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
  data: {
    postsData: {}
  },
  methods: {
    getPullDown: function () {
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        url: 'https://blog.ouorz.com/wp-json/wp/v2/posts',
        data: {
          sticky: 0,
          per_page: 30
        },
        method: 'GET',
        dataType: 'json',
        success: res => {
          this.setData({
            postsData: res.data
          })
          wx.hideLoading()
          wx.stopPullDownRefresh()
        }
      })
    },
  },
  attached: function () {
    wx.request({
      url: 'https://blog.ouorz.com/wp-json/wp/v2/posts',
      data: {
        sticky: 0,
        per_page: this.data.perpage
      },
      method: 'GET',
      dataType: 'json',
      success: res => {
        this.setData({
          postsData: res.data
        })
      }
    })
  }
})