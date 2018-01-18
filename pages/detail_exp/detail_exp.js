// pages/detail_exp/detail_exp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    caseArray:[
      {id:"1",showCs:false, logo: "/images/al/al1_logo1.jpg", name: "项目/手酿", ename: "BANKRLAND", add: "中国/重庆", tip: "难以复制的独特", txt1: "用手酿造劳动与时光交换滋味", txt2: "经过时间与温度酿造的面包", txt3: "少了一份速度，多了一份麦香", txt4: "人间美味，因手而作", txt5: "烘培美食，有酿方成", txt6: "手&酿结合，即为大成之作", img1: "https://jd.6le.com/static/images/anli/al1_1.jpg", img2:"https://jd.6le.com/static/images/anli/al1_2.jpg"},
      { id: "2", showCs: false, logo: "/images/al/al2_logo2.jpg", name: "项目/芳芳蜜语", ename: "FF'MEYO", add: "内蒙/巴彦淖尔市", tip: "甜蜜的表达", txt1: "从品牌名称出发，我们需找到了创意的灵感", txt2: "用设计和文字让“芳芳”开口说“蜜语”", txt3: "再现生动美好的联想", txt4: "从而赋予品牌人性美感", txt5: "成就了有生命力的美味传奇！", txt6: "", img1: "https://jd.6le.com/static/images/anli/al2_1.jpg", img2: "https://jd.6le.com/static/images/anli/al2_2.jpg" },
      { id: "3", showCs: false,logo: "/images/al/al3_logo3.jpg", name: "项目/麦尔乐", ename: "MYFUN", add: "宁夏/银川", tip: "发现我的快乐", txt1: "这里不止是美食天堂", txt2: "更有向上的生活情趣", txt3: "Myfun,我的快乐", txt4: "但品牌内涵延伸到清真", txt5: "麦乐尔成为宁夏银川独特的风景", txt6: "每一口，都能发现我的快乐", img1: "https://jd.6le.com/static/images/anli/al3_1.jpg", img2: "https://jd.6le.com/static/images/anli/al3_2.jpg" },
      { id: "4", showCs: false, logo: "/images/al/al4_logo4.jpg", name: "项目/烘培印象", ename: "BAKERY IMPRESSION", add: "中国/上海", tip: "烘培印象，点亮城市的青春", txt1: "一个触动行业的概念店", txt2: "行业顶尖企业与精英的联合", txt3: "铸就了触摸烘培未来的航母", txt4: "热情、坚守、责任、探索", txt5: "中国40年烘培辉煌成就", txt6: "浓缩成了点亮城市的麦香", img1: "https://jd.6le.com/static/images/anli/al4_1.jpg", img2: "https://jd.6le.com/static/images/anli/al4_2.jpg" },
      { id: "5", showCs: false,logo: "/images/al/al5_logo5.jpg", name: "项目/名代", ename: "IME CAKE", add: "河南/商丘", tip: "秀出美味节拍", txt1: "无音乐，不年轻", txt2: "当名代与音乐相互结合", txt3: "美食随之动感摇摆", txt4: "每时每刻有美食", txt5: "名代，踩准烘培的步点", txt6: "秀出美味节拍", img1: "https://jd.6le.com/static/images/anli/al5_1.jpg", img2: "https://jd.6le.com/static/images/anli/al5_2.jpg" },
      { id: "6", showCs: false, logo: "/images/al/al6_logo6.jpg", name: "项目/万仟", ename: "WONDROUS", add: "江苏/连云港", tip: "万仟美味，妙不可言", txt1: "美食之道，精于形，胜于心", txt2: "用心烘培的妙趣美味", txt3: "更令人欲罢不能", txt4: "万仟，为经典匠心手作", txt5: "穿上妙趣的外衣，所以才有了", txt6: "万仟美味，妙不可言", img1: "https://jd.6le.com/static/images/anli/al6_1.jpg", img2: "https://jd.6le.com/static/images/anli/al6_2.jpg" },
      { id: "7", showCs: false,logo: "/images/al/al7_logo7.jpg", name: "项目/皇家西饼", ename: "HENRY ROYAL", add: "湖北/随州", tip: "皇品生活 时刻甜美", txt1: "池田为皇家提出了围绕皇家小公主的创意概念，", txt2: "灵动、可爱、活动，", txt3: "是每个消费者心理的小公主缩影", txt4: "与消费者产生强烈的互动，", txt5: "使品牌logo形象更深入人心", txt6: "这是池田服务系统的一个完整性的案例，",txt7:"为企业带来巨大的品牌效益", img1: "https://jd.6le.com/static/images/anli/al7_1.jpg", img2: "https://jd.6le.com/static/images/anli/al7_2.jpg" },
      { id: "8", showCs: false,logo: "/images/al/al8_logo8.jpg", name: "项目/悠尼可", ename: "UNQUE", add: "安徽/铜陵", tip: "好味道，一赞到底", txt1: "食物最本质的美妙是来自舌尖的赞赏", txt2: "每一口香气都得经过挑剔的味蕾审铎", txt3: "只有让肺腑记忆深刻的味道", txt4: "才能让人情不自禁的称赞", txt5: "好味道 一赞到底", txt6: "", txt7: "", img1: "https://jd.6le.com/static/images/anli/al8_1.jpg", img2: "https://jd.6le.com/static/images/anli/al8_2.jpg" },
      { id: "9", showCs: false,logo: "/images/al/al9_logo9.jpg", name: "项目/金龙船", ename: "KING’S ALONG", add: "福建/石狮", tip: "寻味新启航", txt1: "福建石狮是海上丝路的起点，", txt2: "两千年后金龙船从这里再度出发，", txt3: "我们能以新的创意诠释新的金龙船，", txt4: "全新的形象和理念", txt5: "将书写新的辉煌——寻味新启航！", txt6: "", txt7: "", img1: "https://jd.6le.com/static/images/anli/al9_1.jpg", img2: "https://jd.6le.com/static/images/anli/al9_2.jpg" },
      { id: "10", showCs: false,logo: "/images/al/al10_logo10.jpg", name: "项目/彭记", ename: "PENRGLIVE", add: "江苏/泰兴", tip: "糕点文化的传承者", txt1: "过了解GEMU的品牌概念，池田力图创造一种可爱，", txt2: "具有亲和力的品牌形象，LOGO为一个胖小子", txt3: "我称他为“小吉”小吉拿着一块“吉木”蛋糕，", txt4: "正准备品尝或分享给其他人", txt5: "表达了“吉木”蛋糕的美味和与人分享美好的快乐,", txt6: "而“小吉”分享的不仅是美味也给人带来健康和快乐！", txt7: "", img1: "https://jd.6le.com/static/images/anli/al10_2.jpg", img2: "https://jd.6le.com/static/images/anli/al10_3.jpg" },
      { id: "11", showCs: false, logo: "/images/al/al11_logo11.jpg", name: "项目/荣华梦", ename: "ROVAMO", add: "内蒙/包头", tip: "美味梦享成真", txt1: "梦是这个时代的主旋律，", txt2: "我们以“梦”作为情感诉求点，", txt3: "传递出一个积极向上的价值观，", txt4: "同时以鹿的形象作为载体，", txt5: "赋予食物更多内涵,", txt6: "", txt7: "", img1: "https://jd.6le.com/static/images/anli/al11_1.jpg", img2: "https://jd.6le.com/static/images/anli/al11_2.jpg" },
      { id: "12", showCs: false,logo: "/images/al/al12_logo12.jpg", name: "项目/吉木蛋糕", ename: "GEMU CAKE", add: "湖北/", tip: "美味乐分享", txt1: "过了解GEMU的品牌概念，池田力图创造一种可爱，", txt2: "具有亲和力的品牌形象，LOGO为一个胖小子", txt3: "我称他为“小吉”小吉拿着一块“吉木”蛋糕，", txt4: "正准备品尝或分享给其他人", txt5: "表达了“吉木”蛋糕的美味和与人分享美好的快乐,", txt6: "而“小吉”分享的不仅是美味也给人带来健康和快乐！", txt7: "", img1: "https://jd.6le.com/static/images/anli/al12_1.jpg", img2: "https://jd.6le.com/static/images/anli/al12_2.jpg" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var eid=options.eid;
    var that=this
    for(var i=0;i<this.data.caseArray.length;i++){
      var show = 'caseArray[' + i + '].showCs'
      if(eid==this.data.caseArray[i].id){
        console.log("显示id:"+eid)
        this.setData({
          [show]:true
        })
      }else{
        this.setData({
          [show]: false
        })
      }
    }
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
  
  }
})