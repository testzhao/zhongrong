// pages/example/example.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brand:[
      { id:"1",float: "fl", src:"/images/al/al1_logo1.jpg"},
      { id: "2",float: "fr", src: "/images/al/al2_logo2.jpg" },
      { id: "3",float: "fl", src: "/images/al/al3_logo3.jpg" },
      { id: "4",float: "fr", src: "/images/al/al4_logo4.jpg" },
      { id: "5",float: "fl", src: "/images/al/al5_logo5.jpg" },
      { id: "6",float: "fr", src: "/images/al/al6_logo6.jpg" },
      { id: "7",float: "fl", src: "/images/al/al7_logo7.jpg" },
      { id: "8",float: "fr", src: "/images/al/al8_logo8.jpg" },
      { id: "9",float: "fl", src: "/images/al/al9_logo9.jpg" },
      { id: "10",float: "fr", src: "/images/al/al10_logo10.jpg" },
      { id: "11",float: "fl", src: "/images/al/al11_logo11.jpg" },
      { id: "12",float: "fr", src: "/images/al/al12_logo12.jpg" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 点击品牌看详情
   */
  tapClick:function(e){
    var eid=e.target.id
    wx.navigateTo({
      url:'../detail_exp/detail_exp?eid='+eid
    })
  }
})