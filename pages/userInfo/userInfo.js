var util = require('../../utils/util.js')

Page({
  data: {
    describ: 'Hello World',
    userInfo: {}
  },

  onLoad: function () {
    var that=this
  },
  onShow:function(){
    var that = this
    this.getUserInfo()
    this.goToblackList()

  },
  
  goToblackList(){
    wx.navigateTo({
      url:'/pages/blackList'
    })
  },
  getUserInfo(){
    wx.request({
      url:'localhost:8000/get/object=?entity=user',
      success:(res)=>{
        console.log("successfully getdata!")
        this.data=res

      },
    })
  },
})

