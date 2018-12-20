const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:[],
    list:[{
      "content":"",
      "answerer":""
    }]

  },

  onLoad: function () {
    var that = this
    this.getData(this);
    wx.request({
      url: '',
      method:'get',
      success(res){
        console.log("get id")
        this.setData({
          id:res.data.qid
        })
      }
    })
  },

  getData: function (e) {
    wx.request({
      url: app.baseUrl + '/object?entity=answer&id=1',
      method: 'get',
      success(res) {
        
        console.log("successfully getdata!")
        e.setData({
          list:res.data
        })
      }
    })
  },
})