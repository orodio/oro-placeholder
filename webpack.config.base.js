"use strict";

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },

  output: {
    library: 'order66',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js']
  }
};