// index.js

//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js');
//初始化数据
Page({
  data: {
    list: [],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false
  },
  //onLoad方法
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'localhost: 8000 / get / object=?entity=answer',
      headers: { // http头数据
        'Content-Type': 'application/json'
      },
      success: function (res) { //请求成功后的回调
        that.setData({   // 设置返回值
          banner: res.data.top_stories,  //banner图片数据
          list: [{ header: '问答' }].concat(res.data.stories)  
        })
      }
    })
    this.index = 1;   //方便下拉点击更多时的计数下标，暂可忽略
  },

})