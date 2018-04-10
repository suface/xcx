// pages/list/list.js
const $ = require('../../utils/ajax.js')
const util = require('../../utils/util.js');
const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    isLoadAll:false,
    list:[],
    page: 1,

    globleTitle:'',
    userInfo: {}
   

  },
  

  viewDetail: util.debounce(function (e) {
    var ds = e.currentTarget.dataset;
   // console.log(ds);
    var urls = '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&type=coming';
    console.log(urls);
    wx.navigateTo({
      url: urls
    })
  },1000),

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        globleTitle: app.globalData.globleTitle
      })
    //} 

   
  },
 
  ajaxListData: function (page,rows){
  var that = this;
  var page = page;
  var rows = rows||20;
  var keywords = "kose"; //高丝 系列
  var detailUrl = "https://z.lrlz.com/http/lrlzapp.wx.jaeapp.com/app/inter/search.hh?appkey=6581235709&keywords="+keywords+"&sidx=sales&page="+page+"&rows="+rows;
  // 显示加载图标  
  wx.showLoading({
    title: '玩命加载中',
  })  

  $.ajax({
    url: (detailUrl), //仅为示例，并非真实的接口地址

    success: res => {
      //let list = this.list = res.data;
      // detailgood.pic_url = detailgood.pic_url.split(',')
      //console.log(this.title);
      //if (!res.data.list || !res.data.list.length){
      
      //}
     
      var isLoadAll = res.data.list.length < rows?true:false;
      var list = this.data.list.concat(res.data.list);

      console.log(isLoadAll)
      //更新数据  
      that.setData({
        list: list,
        page:page,
        isLoadAll: isLoadAll
      })
      //this.detailgood = res.data;
      // console.log(list)
      //wx.hideNavigationBarLoading() //完成停止加载
      //wx.stopPullDownRefresh() //停止下拉刷新
      // 隐藏加载框  
      
      wx.hideLoading(); 

    },
    //complete: function () {
      // complete
      //console.log('ajajx请求 completed end');
     // wx.stopPullDownRefresh() //停止下拉刷新
     // wx.hideNavigationBarLoading() //完成停止加载
    //}

  })
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var that = this;
    
    this.ajaxListData(1);




  
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
    console.log("下拉刷新");
    
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.ajaxListData(1);

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    // 页数+1  
    if(!this.data.isLoadAll){
     
    var page = this.data.page + 1; 
     
    this.ajaxListData(page);
    }else{
      console.log("已经全部加载了...");
    }
    
    console.log("到达底部")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})