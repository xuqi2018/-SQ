Page({
  data: {
    describ: 'Hello World',
    userInfo: {
      //"nickname":qiqi,
      
    }
  },

  onLoad: function (option){
    
    //var that = this
    this.getData(this);
  },
  //onShow: function () {
   // var that = this
    //this.getUserInfo()


  //},


  getData:function(e) {
    wx.request({
      url: 'http://172.19.147.177:80/object?entity=user&id=3',
      method:"get",
      success(res) {
        console.log(res)
        //this.userInfo = res
        e.setData({
          userInfo:res.data.body
        })

      },
    })
  },
})