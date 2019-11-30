/*
 * @Author: LyraLee
 * @Date: 2019-11-30 09:17:05
 * @LastEditTime: 2019-11-30 11:24:58
 * @Description: file content
 */
const path = require('path');
const base = require('./webpack.base');
const { smart } = require('webpack-merge');

module.exports = smart(base, {
  target: 'node',
  entry: './src/skeleton.js',
  output: {
    filename: 'skeleton.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
  ]
})