// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [
      { cid: 1008, title: 'Zippo打火机', image: 'https://img12.360buyimg.com/n7/jfs/t2584/348/1423193442/572601/ae464607/573d5eb3N45589898.jpg', num: '1', price: '198.0', sum: '198.0', selected: true },
      { cid: 1012, title: 'iPhone7 Plus', image: 'https://img13.360buyimg.com/n7/jfs/t3235/100/1618018440/139400/44fd706e/57d11c33N5cd57490.jpg', num: '1', price: '7188.0', sum: '7188.0', selected: true },
      { cid: 1031, title: '得力订书机', image: 'https://img10.360buyimg.com/n7/jfs/t2005/172/380624319/93846/b51b5345/5604bc5eN956aa615.jpg', num: '3', price: '15.0', sum: '45.0', selected: false },
      { cid: 1054, title: '康师傅妙芙蛋糕', image: 'https://img14.360buyimg.com/n7/jfs/t2614/323/914471624/300618/d60b89b6/572af106Nea021684.jpg', num: '2', price: '15.2', sum: '30.4', selected: false },
      { cid: 1063, title: '英雄钢笔', image: 'https://img10.360buyimg.com/n7/jfs/t1636/60/1264801432/53355/bb6a3fd1/55c180ddNbe50ad4a.jpg', num: '1', price: '122.0', sum: '122.0', selected: true },
    ],
    title:"cart"
  },
 


  //绑定单选

  bindCheckbox: function (e) {

    var idx = e.currentTarget.dataset.index;

    var carts = this.data.carts;

    var selected = carts[idx].selected;

    carts[idx].selected = !selected;



    this.setData({

      carts: carts

    });



    this.bindTotalPrice();

  },
//绑定多选

  bindSelectAll: function(e){

    var selectedAllStatus = this.data.selectedAllStatus;

    var carts = this.data.carts;

 

    selectedAllStatus = !selectedAllStatus;

    for(var i = 0; i < carts.length; i++){

      carts[i].selected = selectedAllStatus;

    }

    this.setData({

      carts: carts,

      selectedAllStatus: selectedAllStatus

    });

 

    this.bindTotalPrice();

  },
  //绑定文本框数量

  bindIptCartNum: function (e) {

    var idx = e.currentTarget.dataset.index;

    var carts = this.data.carts;

    var num = e.detail.value;



    if (num <= 1) {

      num = 1;

    }



    var status = num <= 1 ? 'disabled' : 'normal';

    carts[idx].num = num;

    var minusStatuses = this.data.minusStatuses;

    minusStatuses[idx] = status;



    this.setData({

      carts: carts,

      minusStatuses: minusStatuses

    });



    this.bindTotalPrice();

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
  
  }
})