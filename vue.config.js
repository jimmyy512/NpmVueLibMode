
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "./",
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 强制内联CSS
  css: { extract: false },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('examples'))
      .set('~',resolve('packages'))
    config.module
      .rule('js')
      .include
        .add( __dirname+'/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          return options
        })
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: Infinity }));
  }
}