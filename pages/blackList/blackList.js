Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["黑名单"],
    currentNavtab: "0",
    blocked_users: [{
      "uid": "1",
      "blocked_user": "lisi"
    },
    {
      "uid": "2",
      "blocked_user": "xiaoming"
    }
    ],

  }, onLoad: function () {
    var that = this
    //this.getData();

  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getData: function () {
    wx.request({
      url: 'localhost:8000/user',
      success(res) {
        this.user = res
      },
    })

  },

})