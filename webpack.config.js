/*
 * @Author: LyraLee
 * @Date: 2019-11-30 09:16:52
 * @LastEditTime: 2019-11-30 11:39:25
 * @Description: file content
 */
const path = require('path');
const base = require('./webpack.base');
const { smart } = require('webpack-merge');
const SkeletonWebpackPlugin = require('./SkeletonWebpackPlugin');

module.exports = smart(base, {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new SkeletonWebpackPlugin({
      webpackConfig: require('./webpack.skeleton.js')
    })
  ]
})