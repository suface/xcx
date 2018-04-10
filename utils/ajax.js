function extend() {
  for (var i = 1; i < arguments.length; i++)
    for (var key in arguments[i])
      if (arguments[i].hasOwnProperty(key))
        arguments[0][key] = arguments[i][key];
  return arguments[0];
}


function ajax(config) {
 
  var defaultConfig = {
    method: "GET",
    fail: function () {
      console.log('fail')
      wx.hideToast()
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      wx.showModal({
        title: "提示",
        content: "网络异常",
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#3CC51F",
      })
    },
    complete:function(){
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }
  }

  if (config.method == 'POST') {
    defaultConfig.header = {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }

  let _config = extend({},defaultConfig, config);
  //console.log(_config)
      wx.request(_config)
}



module.exports = {
  ajax: ajax
}