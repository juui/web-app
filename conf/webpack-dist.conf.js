const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DebugWebpackPlugin = require('debug-webpack-plugin');
const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    preLoaders: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint'
      // }
    ],

    loaders: [
      {
        test: /\.svg/,
        loaders:
          [
            'svg-url-loader'
          ]
      },
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|styl|stylus)$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?minimize!stylus!postcss'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel'
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html'
        ]
      }
    ]
  },
  plugins: [
    new DebugWebpackPlugin({

      // Defaults to ['webpack:*'] which can be VERY noisy, so try to be specific
      scope: [
        'webpack:compiler:*', // include compiler logs
        'webpack:plugin:*' // include a specific plugin's logs
      ],

      // Inspect the arguments passed to an event
      // These are triggered on emits
      listeners: {
        'webpack:compiler:run': function (compiler) {
          // Read some data out of the compiler
        }
      },

      // Defaults to the compiler's setting
      debug: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html'),
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin(
      {
        compress: {unused: true, dead_code: true} // eslint-disable-line camelcase
      }
    ),
    new ExtractTextPlugin('index-[contenthash].css')
  ],
  postcss: () => [autoprefixer],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  }
  ,
  entry: {
    app: `./${conf.path.src('index')}`,
    vendor: Object.keys(pkg.dependencies)
  }
}
;
