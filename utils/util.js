const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



function throttle(a, b) { var c; return function () { var d = this, e = arguments; clearTimeout(c); c = setTimeout(function () { a.apply(d, e) }, b) } };


function debounce(a, c) { var b = 0; return function () { var d = +new Date(); if (d - b > c) { a.apply(this, arguments); b = d } } };


module.exports = {
  formatTime: formatTime,
  throttle: throttle,
  debounce: debounce
}
