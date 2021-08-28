module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
      config.module
        .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
        .loader('px2rem-loader')
        .options({
          remUnit: 100
        })
        .end()
    },

    devServer: {
      // port: port,
      host: '127.0.0.1',
      // port: 8080,
      open: true,
      disableHostCheck: true,
      overlay: {
        warnings: false,
        errors: true
      }
      // proxyTable: {
      //   '/api': {
      //     target: 'http://127.0.0.1:8080',
      //     changeOrigin: true,
      //     pathRewrite: {
      //       '^/api': ''
      //     }
      //   }
      // }
    },

    publicPath: './',
    outputDir: process.env.outputDir
  }
