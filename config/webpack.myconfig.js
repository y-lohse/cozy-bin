'use strict'

const webpack = require('webpack')
const paths = require('cozy-scripts/utils/paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require(paths.appPackageJson)

const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  entry: {
    public: resolveApp('src/targets/browser/public.jsx')
  },
  output: {
    path: paths.appBuild,
    filename: '[name].js'
  },
  externals: {
    'cozy-client-js': 'cozy'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveApp('src/targets/browser/public.ejs'),
      title: pkg.name,
      filename: 'public.html',
      inject: false,
      chunks: ['public'],
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      __TARGET__: JSON.stringify('browser')
    })
  ]
}
