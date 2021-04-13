// vue.config.js file to be place in the root of your repository
module.exports = {
  devServer: {
    disableHostCheck: true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/signalsfromthefuture/'
    : '/'
};