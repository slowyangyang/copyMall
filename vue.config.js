module.exports = {
  chainWebpack: config => {
    config.module
      .rule('less')
      .test(/\.less$/)
      .use('less-loader')
      .loader("style-loader")
      .loader("css-loader")
      .loader('less-loader')
        .end()
  }
}