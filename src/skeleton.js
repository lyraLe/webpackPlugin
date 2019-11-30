/*
 * @Author: LyraLee
 * @Date: 2019-11-30 09:16:36
 * @LastEditTime: 2019-11-30 09:41:50
 * @Description: file content
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ContentLoader from 'react-content-loader';

const html = ReactDOMServer.renderToStaticMarkup(<ContentLoader/>);
export default html;
console.log(html);