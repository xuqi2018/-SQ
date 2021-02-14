const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    aid: "",
    question_title:"",
    answerer_name:"",
    answer:{
      content: "",
      answerer: "",
      qid:"",
      is_anonynous: false,
      is_allow_review: false
    },
    reviewList:[],
    reviewNum:""
  },

  onLoad: function (options) {
    //console.log(options.aid)
    var that = this
    this.setData({
      aid:options.aid,
      question_title:options.question_title,
      answerer_name:options.answerer_name
    })
    console.log(options)
    this.getData(this);
  },

  getData: function (e) {
    wx.request({
      url: app.baseUrl + '/object?entity=answer&id='+this.data.aid,
      method: 'get',
      success(res) {
        e.setData({
          answer:res.data.body
        })
      }
    })
    // console.log(this.data)
    // wx.request({
    //   url: app.baseUrl+'/object?entity=user&id='+this.data.answer.answerer,
    //   method:"get",
    //   success(res){
    //     e.setData({
    //       answerer_name:res.data.body.nickname
    //     })
    //   }
    // })
  },
  follow_answer:function(){
    wx.request({
      url: app.baseUrl+'/answer',
      method:"POST",
      data:{
        action:"follow_answer",
        body:{
          aid:this.data.aid
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