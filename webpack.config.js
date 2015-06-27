'use strict';

var cleanPlugin = require('clean-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: './app.module.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
          'npm': __dirname + '/node_modules'
        }
    },    
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel?stage=4!jshint'
        }
      ]
    },
    plugins: [
        new cleanPlugin(['dist']),
        new ngAnnotatePlugin({
            add: true,
        })
    ]    
};