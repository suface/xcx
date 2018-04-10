//index.js
//https://segmentfault.com/a/1190000012250564
Page({
  data: {
    url: 'https://res.wx.qq.com/open/js/jweixin-1.3.2.js'
  },
  onLoad: function (options) {
    options.url ? this.setData({ url: options.url }) : wx.navigateBack({ delta: 2 });

  }
});

//index.wxml