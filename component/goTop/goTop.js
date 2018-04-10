// component/goTop/goTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type: Boolean,
      value:false
      }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickgoTop:function(){
      wx.pageScrollTo({
        scrollTop: 0,
        duration:500
      })
    }
  }
})
