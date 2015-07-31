'use strict';

// import Webpack plugins
const cleanPlugin = require('clean-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

// define Webpack configuration object to be exported
let config = {
    context: `${__dirname}/app`,
    entry: './app.module.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
          'npm': `${__dirname}/node_modules`
        }
    },    
    module: {
      loaders: [
        { 
            test: /\.css$/, 
            loader: 'style!css'
        },
        { 
            test: /\.(woff|woff2)$/,   
            loader: 'url?limit=10000&mimetype=application/font-woff' 
        },
        { 
            test: /\.(eot|svg|ttf)$/,    
            loader: 'file' 
        },
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
            add: true
        })
    ]    
};

module.exports = config;