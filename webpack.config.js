/* eslint-disable no-var */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');

var config = require('config');

var isDev = (process.env.NODE_ENV === 'development');
// var appEntry = './client/app';
var appEntry = './src/index';

var defineEnvPlugin = new webpack.DefinePlugin({
  __DEV__: isDev
});

var entryScripts = [ appEntry ];
var output = {
  path: path.join(__dirname, [ '/', config.get('buildDirectory') ].join('')),
  filename: 'bundle.js'
};

var plugins = [
  defineEnvPlugin,
  new ExtractTextPlugin('style.css'),
  new webpack.NoErrorsPlugin()
];

var moduleLoaders = [
  {
    test: /\.js$/,
    loaders: [ 'babel' ],
    exclude: /node_modules/,
    include: __dirname
  }, {
    text: /\.css$/,
    loaders: [ ExtractTextPlugin.extract('style-loader', 'css-loader'), 'raw' ],
    include: __dirname
  }, {
    test: /\.styl$/,
    loaders: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader'),
    include: __dirname
  }
];

if (isDev) {
  // output.publicPath = 'http://localhost:3001'; //
  output.publicPath = [ '/', config.get('buildDirectory'), '/' ].join('');
  plugins.push(new webpack.HotModuleReplacementPlugin());
  entryScripts = [
    'react-hot-loader/patch', // my addition
    // 'webpack-dev-server/client?http://localhost:3001',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    appEntry
  ];

  moduleLoaders = [
    {
      test: /\.js$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: [ 'style-loader', 'css-loader' ],
      include: __dirname
    }, {
      test: /\.styl$/,
      loaders: [ 'style-loader', 'css-loader', 'stylus-loader' ],
      include: __dirname
    }
  ];
}

module.exports = {
  devtool: 'eval',
  entry: entryScripts,
  output: output,   // eslint-disable-line object-shorthand
  plugins: plugins, // eslint-disable-line object-shorthand
  module: {
    loaders: moduleLoaders
  },
  stylus: {
    use: [
      poststylus([
        autoprefixer({ browsers: [ 'last 2 versions' ] })
      ])
    ]
  }
};
