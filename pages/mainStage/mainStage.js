//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    answerList:[{
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
      }],
    listSize:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var that =this
    //console.log(that)
    this.getData(this);
  },
  upper: function () {
    wx.showNavigationBarLoading()
    //this.refresh();
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  lower: function(e){
    wx.showNavigationBarLoading();
    var that = this;
    //setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
    console.log("lower")
  },
  getData:function(e){
    wx.request({
      url: app.baseUrl+'/answerOutlineList',
      method: 'get',
      success(res){
        console.log("successfully getdata!")
        e.setData({
          answerList:res.data
        })
      }
    })
  }
})