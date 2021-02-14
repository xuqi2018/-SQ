//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab:["我的提问","我的回答"],
    currentNavtab:"0",
    myQuestion: [{
      "nickName": "William",
      "questionId": "Q001",
      "questionTitle": "如何使用微信小程序开发平台？",
      "questionContent": "刚学微信小程序开发，很头疼，不会写，怎么办？",
      "answerNum": "2"}],
    myAnswer: [{
      "nickName": "William",
      "questionId": "Q001",
      "answerId": "A001",
      "questionTitle": "如何使用微信小程序开发平台？",
      "answerContent": "就这么用",
      "reviewNum": "15"
    }, {
        "nickName": "Leo",
        "questionId": "Q001",
        "answerId": "A002",
        "questionTitle": "如何使用微信小程序开发平台？",
        "answerContent": "不然怎么用？",
        "reviewNum": "23"
      }]
  }, 
  onLoad: function () {
    var that=this
    this.getData(that);
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getData: function(e){
    wx.request({
      url: app.baseUrl+'/myQuestion',
      success(res){
        console.log(res)
        e.setData({
          myQuestion:res.data
        })
      }
    })
    wx.request({
      url: app.baseUrl+'/myAnswer',
      success(res) {
        e.setData({
          myAnswer:res.data
        })
      }
    })
  }
})