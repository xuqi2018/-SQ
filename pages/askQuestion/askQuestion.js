const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer:"",
    detail:""
  },
  answerInput:function(event){
      this.setData({answer:event.detail.value})
  },
  answerDescriptionInput:function(event){
      this.setData({ detail: event.detail.value })
  },
  listenerLogin:function(){
    wx.request({
      url: app.baseUrl+'/question',
      method:"POST",
      data:{
        action:"ask_question",
        body:{
          "title": this.data.answer,
          "content": this.data.detail,
          "is_anonynous": false
        }
      },
      success(res){
        wx.showToast({
          title: res.data.status.toString(),
          icon: 'success',
          duration: 2000
        })
        wx.navigateBack({
        })
      }
    })
  }
})
