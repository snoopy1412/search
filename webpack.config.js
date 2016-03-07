var webpack = require('webpack');

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');
var minSizePlugin = 
	new webpack.optimize.UglifyJsPlugin({
	    compress: {
	        warnings: false
	    }
	});

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'main.js'       
  },
  plugins: [commonsPlugin,minSizePlugin],
  resolve: {
    extensions: ['','.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};