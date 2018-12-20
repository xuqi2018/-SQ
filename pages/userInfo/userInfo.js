Page({
  data: {
    describ: 'Hello World',
    userInfo: {}
  },

  onLoad: function (option) {
    this.getData(this)
  },
  //onShow: function () {
   // var that = this
   // this.getUserInfo()


 // },


  getData:function(e) {
    wx.request({
      url: 'http://172.19.147.177:80/object?entity=user&id=3',
      method:"get",
      success(res) {
        console.log(res),
        //this.user = res
        e.setData({
          userInfo: res.data.body
        })
        

      },
    })
  },
})
