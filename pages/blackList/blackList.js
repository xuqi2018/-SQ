Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["黑名单"],
    currentNavtab: "0",
    blocked_users: [],

  }, onLoad: function () {
    var that = this
    this.getData();
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getData: function () {
    wx.request({
      url: 'localhost:8000/get/object?entity=blocked_user$',
      success(res) {
        this.blocked_user = res
      }
    })

  }
})