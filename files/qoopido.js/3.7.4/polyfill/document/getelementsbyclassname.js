/*! Qoopido.js library 3.7.4, 2015-08-14 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e,t){var n=[];Object.defineProperty||n.push("./queryselectorall"),t.qoopido.register("polyfill/document/getelementsbyclassname",e,n)}(function(e,t,n,s){"use strict";var l=window.document;if(!l.getElementsByClassName){var r=new RegExp("^|\\s+","g");l.getElementsByClassName=function(e){return e=String(e).replace(r,"."),l.querySelectorAll(e)}}return l.getElementsByClassName},this);