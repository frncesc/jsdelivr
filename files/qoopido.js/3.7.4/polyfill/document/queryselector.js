/*! Qoopido.js library 3.7.4, 2015-08-14 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e,r){var t=[];document.querySelectorAll||t.push("./queryselectorall"),r.qoopido.register("polyfill/document/queryselector",e,t)}(function(e,r,t,l){"use strict";var u=t.document;return u.querySelector||(u.querySelector=function(e){var r=u.querySelectorAll(e);return r.length?r[0]:null}),u.querySelector},this);