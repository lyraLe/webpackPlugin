/*
 * @Author: LyraLee
 * @Date: 2019-11-30 07:51:39
 * @LastEditTime: 2019-12-04 19:10:21
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ContentLoader from 'react-content-loader';


const style = {
  width: '100%',
  height: 300,
  backgroundColor: 'red'
}
setTimeout(function() {
  ReactDOM.render(<div style={style}></div>, window.root)
}, 3000)