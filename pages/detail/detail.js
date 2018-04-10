const $ = require('../../utils/ajax.js')
 

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello details ",
    title:"详细页",
    productuuid:"31916hY7R2",
    detailgood: {},
    topFlag:false,
    

    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500

  },

  


  clicktocart: function () {
    wx.navigateTo({
      url: '../cart/cart'
    })
  },
   


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);//就是一个接收传递过来的参数的对象
    var productuuid = options.id||'31916hY7R2'; //（接受url传参，不限制只能传递id变量名，可以传递多个变量名值）
    //console.log(filmId);//获取在首页点击的电影图片的id
    console.log("productuuid"+productuuid)
    this.setData({
       msg: "onload detail page" ,
       productuuid: productuuid
       });
    //this.detailgood = this.listgood;
    //console.log(this.listgood);
     


    var that = this;
    var detailUrl = "https://z.lrlz.com/http/lrlzapp.wx.jaeapp.com/app/inter/getProDetail.hh?appKey=6581235709&appVer=3.2.1&seq=763603756170501192&product_uuid="+productuuid;

    $.ajax({
      url: detailUrl, //仅为示例，并非真实的接口地址
      data: {
        x: '123',
      },
      success: res => {
        let title = this.title = res.data.brand_name;
        let detailgood = this.detailgood = res.data;
        detailgood.pic_url = detailgood.pic_url.split(',')
        //console.log(this.title);

        //更新数据  
        that.setData({
          title: title,
          detailgood: detailgood
        })
        //this.detailgood = res.data;
        //console.log(this.detailgood.pic_url)
      }

    })

    

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
  onPageScroll:function(e){
   let topFlag = e.scrollTop>150?true:false;
  //console.log(topFlag +"topFlag");
  this.setData({
    topFlag: topFlag
    
  })
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