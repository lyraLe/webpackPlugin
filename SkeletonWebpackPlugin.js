/*
 * @Author: LyraLee
 * @Date: 2019-11-30 10:20:06
 * @LastEditTime: 2019-11-30 11:37:11
 * @Description: 
 * 1)该插件在编译src/index.js时生效
 * 2)该插件会启动一次编译，以skeleton.webpack.js作为配置文件，得到一个输出结果
 *   输出结果为svg图片，将其插入<div id="root"></div>
 */
const webpack = require('webpack');
const path = require('path');
const MFS = require('memory-fs'); // 内存版的fs模块
const mfs = new MFS();
const requireFromString = require('require-from-string');

class SkeletonWebpackPlugin{
  constructor(options) {
    this.options = options; // skeletonWebpackConfig
  }
  apply(compiler) {// compiler表示整个编译器
    const { webpackConfig } = this.options;
    // compilation表示一次编译
    compiler.hooks.compilation.tap('SkeletonWebpackPlugin', compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('SkeletonWebpackPlugin', (htmlPluginData, callback) => {
        // 启动一次子编译
        const childCompiler = webpack(webpackConfig);
        const outputPath = path.join(webpackConfig.output.path, webpackConfig.output.filename)
        // 指定编译后以什么模块输出
        childCompiler.outputFileSystem = mfs;
        childCompiler.run((err, stat) => {
          // 以同步方式读取文件内容，为skeleton.js的内容字符串
          let skeletonJS = mfs.readFileSync(outputPath, 'utf8');
          let result = requireFromString(skeletonJS);
          let svgHtml = result.default;
          htmlPluginData.html = htmlPluginData.html.replace('<div id="root"></div>', `<div id="root">${svgHtml}</div>`);
          callback(null, htmlPluginData);          
        })
      })
    })
  }
}

module.exports = SkeletonWebpackPlugin;