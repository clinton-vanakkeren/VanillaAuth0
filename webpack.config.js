var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
     {
       test : /\.jsx?/,
       exclude: /node_modules/,
       //include : APP_DIR,
       loader : 'babel'
     },
     {
       test: /\.css$/,
       loader: "style-loader!css-loader"
     },
     {
      test: /\.eot/,
      loader: 'url-loader?mimetype=application/vnd.ms-fontobject'
     },
     {
      test: /\.ttf/,
      loader: 'url-loader?mimetype=application/x-font-ttf'
     },
     {
      test: /\.woff/,
      loader: 'url-loader?mimetype=application/font-woff'
     },
     {
      test: /\.woff2/,
      loader: 'url-loader?mimetype=application/font-woff2'
    },
    { test: /\.svg$/, 
      loader: 'svg-loader?pngScale=2'
    }
    ]
  }
};
module.exports = config;
