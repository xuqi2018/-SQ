const app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    qid:"",
    question:{
      title: "我为什么这么菜",
      content: "",
      asker: "",
      is_anonynous: false,
      is_closed: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: app.baseUrl+'/object?entity=question&id='+options.qid,
      method:"GET",
      success(res){
        //console.log(res)
        that.setData({
          qid:options.qid,
          question:res.data.body
        })
      }
    })
    //console.log(that.data)
  },
  followQuestion:function(){
    wx.request({
      url: app.baseUrl+'/question',
      method:"POST",
      data:{
        action:"follow_question",
        body:{
          qid:this.data.qid
        }
      },
      success(res){
        wx.showToast({
          title: res.data.status.toString(),
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})