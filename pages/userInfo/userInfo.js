const app=getApp()
Page({
  data: {
    uid:"",
    describ: 'Hello World',
    userInfo: {}
  },
  onLoad: function (option) {
    this.setData({
      uid:option.uid
    })
    this.getData(this)
  },
  getData:function(e) {
    wx.request({
      url: app.baseUrl+'/object?entity=user&id='+e.data.uid,
      method:"get",
      success(res) {
        e.setData({
          userInfo: res.data.body
        })
      },
    })
  },
  follow_user: function(){
    wx.request({
      url: app.baseUrl+'/user',
      method:"POST",
      data:{
        action:"follow_user",
        body:{
          uid:this.data.uid
        }
      },
      success(res){
        console.log("follow user success")
      }
    })
  }
})
