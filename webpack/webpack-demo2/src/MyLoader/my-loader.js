const loaderUtils = require('loader-utils')

module.exports = function (params) {
  // 获取到用户给当前 Loader 传入的 options
  const options = loaderUtils.getOptions(this)
    // console.log('options-->', options)
  return params.replace('world', ', welcome')
}