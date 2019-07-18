const merge = require('webpack-merge'); 
const config = require('./base'); 

module.exports = merge(config, {
  mode: 'development', 
  devtool: 'cheap-eval-source-map', 
  devServer: {
    host: 'localhost', 
    port: 8000, 
    open: true, 
    historyApiFallback: true, 
  }, 
}); 