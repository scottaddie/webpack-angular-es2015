'use strict';

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
          exclude: /(node_modules|bower_components)/,
          loader: 'babel?stage=0!jshint'
        }
      ]
    }
};