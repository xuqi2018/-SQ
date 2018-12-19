Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      "question":"aaaaa?",
      "answerer":"a",
      "content":"b",
      "createtime":"c"
    }]

  },

  onLoad: function () {
    var that = this
    this.getData();
    this.goToreviewPage();
    this.goToanswer();
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
        console.log("Successfully getdata!")
        this.data = res
      },
    })

  },
  goToreviewPage() {
    wx.navigateTo({
      url: '/pages/reviewPage'
    })
  }, 
  goToanswer() {
    wx.navigateTo({
      url: '/pages/answer'
    })
  },
})