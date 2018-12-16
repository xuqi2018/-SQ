Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab:["我的提问","我的回答"],
    currentNavtab:"0",
    myQuestion:[],
    myAnswer:[]
  }, onLoad: function () {
    var that=this
    this.getData();
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getData: function(){
    wx.request({
      url: 'localhost:8000/get/object?entity=question$',
      success(res){
        this.myQuestion=res
      }
    })
    wx.request({
      url: 'localhost:8000/get/object?entity=answer$',
      success(res) {
        this.myAnswer = res
      }
    })
  }
})