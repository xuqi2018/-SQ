Page({
  data: {
    userInfo: {},


  },

  onShareAppMessage: function () {
    return {

      describ: '自定义分享描述',
      path: '/page/user/userid=123'
    }
  },
  onLoad: function (options) {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {

          wx.getUserInfo({
            success: function (res) {
              console(res.userInfo)
            }
          })
        }
      }
    })

  },




})