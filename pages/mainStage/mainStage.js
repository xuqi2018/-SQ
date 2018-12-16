Page({

  /**
   * 页面的初始数据
   */
  data: {
    feed:[],
    feed_length:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this
    this.getData();
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
  //事件处理函数,暂时没有添加问题回答的id的传输
  bindItemTap: function () {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap: function () {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  getData:function(){
    wx.request({
      url: 'localhost:8000/get/object?entity=answer&id=',
      method: 'get',
      success(res){
        console.log("successfully getdata!")
        this.data=res
      }
    })
  }
})