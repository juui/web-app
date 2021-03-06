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
    loaders: [
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack'
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
    new ExtractTextPlugin({filename: 'index-[contenthash].css', 'omit': 1, 'extract': true, 'remove': true}),
    new webpack.LoaderOptionsPlugin({
      options: {
        imageWebpackLoader: {
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          svgo: {
            plugins: [
              {
                removeViewBox: false
              },
              {
                removeEmptyAttrs: false
              }
            ]
          }
        },
        postcss: () => [autoprefixer]
      }
    })
  ],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  }
  ,
  entry: {
    app: `./${conf.path.src('index')}`
    //vendor: Object.keys(pkg.dependencies)
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  }
};
