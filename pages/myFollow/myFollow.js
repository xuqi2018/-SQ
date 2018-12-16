Page({
  data: {
    navTab: ["用户", "提问","回答"],
    currentNavtab: "0",
    followedUser:[],
    followedQuestion:[],
    followedAnswer:[]
  },
  onLoad: function (options) {
    this.getData()
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getData:function(){
    wx.request({
      url: 'localhost:8000/get/object?entity=user$',
      success(res){
        this.followedUser=res
      }
    })
    wx.request({
      url: 'localhost:8000/get/object?entity=question$',
      success(res) {
        this.followedQuestion = res
      }
    })
    wx.request({
      url: 'localhost:8000/get/object?entity=answer$',
      success(res) {
        this.followedAnswer = res
      }
    })
  }
})