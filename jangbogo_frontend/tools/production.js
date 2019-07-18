const merge = require('webpack-merge'); 
const config = require('./base'); 

module.exports = merge(config, {
  mode: 'production', 
}); 