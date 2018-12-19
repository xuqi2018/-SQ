Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      "answerer":"a",
      "content":"b",
      "create_time":"c"
    }]

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onLoad: function () {
    var that = this
    this.getData();
    this.goTouserInfo();
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getData: function () {
    wx.request({
      url: 'localhost:8000/answer',
      success(res) {
        this.blocked_user = res
      },
    })

  },
  var bindblur ;
  Page({
    bindblur:function(e){
    console.log('1111111:', e.detail.value)
    bindblur = e.detail.value;
  },

  onLoad: function (a) {
    var that = this;
    actid = a.id;
    // 查询评论fetch
    wx.request({
      url: 'https://m.yishushe.net/addons/up_text.php',
      method: 'POST',
      header: {
        'content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      data: {
        act_id: actid
      },
      success: function (result) {
        that.setData({
          pl_list: result.data.reverse(),
        })
      },
      fail: res => {
        wx.showToast({
          title: '网络不好哟',
          image: '/image/wrong.png',
          duration: 3000
        })
      }
    })
  },
  btn_send: function () {
    var that = this
    //添加评论
    console.log('文章id：act_id :', actid);
    console.log('用户缓存id：user_id :', user_id);
    console.log('文本输入框: input_value :', bindblur);
    wx.request({
      url: 'https://m.yishushe.net/addons/up_text.php',
      method: 'POST',
      header: {
        'content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      data: {
        act_id: actid,
        user_id: user_id,
        input_value: bindblur
      },
      success: function (result) {
        that.setData({
          pl_list: result.data.reverse(),
          input_value: "",
        })
      },
      fail: res => {
        wx.showToast({
          title: '网络不好哟',
          image: '/image/wrong.png',
          duration: 3000
        })
      }
    })
  }

})