Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["黑名单"],
    currentNavtab: "0",
    blocked_users: [//{
      //"uid": "1",
      //"blocked_user": "lisi"
    //},
    //{
      //"uid": "2",
      //"blocked_user": "xiaoming"
    //}
    ],

  }, onLoad: function () {
    this.getData(this)
    //this.getData();

  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getData: function (e) {
    wx.request({
      url: 'http://172.19.147.177:80/object?entity=user&id=3',
      success(res) {
        console.log(res),
        e.setData({
          blocked_users:res.data.body.blocked_users
        })
        //this.user = res
      },
    })

  },

})