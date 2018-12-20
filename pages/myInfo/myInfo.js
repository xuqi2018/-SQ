Page({
  data: {
    describ: 'Hello World',
    userInfo: {}
  },

  onLoad: function () {
    var that = this
  },
  onShow: function () {
    var that = this
    this.getUserInfo()


  },


  getUserInfo() {
    wx.request({
      url: 'localhost:8000/user',
      success(res) {
        console.log("successfully getdata!")
        this.user = res

      },
    })
  },
})