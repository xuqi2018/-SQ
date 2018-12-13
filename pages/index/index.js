//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },
  //事件处理函数
  login: function () {
    var view = this
    wx.login({
      success: function(res){
        wx.request({
          url: app.baseUrl+'/user/',
          data: {
            action: "login",
            body: {
              code: res.code
            }
          },
          method: 'post',
          success: function(res){
            wx.showToast({
              title: res.data.status.toString(),
              icon: 'success',
              duration: 2000
            })
          }
        })
      }, 
      fail: function(res) {},
      complete: function (res) {},
    })
  },

  toMainStage: function(e){
    //console.log(getCurrentPages()[0].route)
    wx.navigateTo({
      url:'../mainStage/mainStage'
    })
  }
})
