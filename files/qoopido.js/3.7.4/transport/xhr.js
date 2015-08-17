/*! Qoopido.js library 3.7.4, 2015-08-14 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(t,e){e.qoopido.registerSingleton("transport/xhr",t,["../transport","../function/merge","../function/unique/string","../url","../promise/defer"])}(function(t,e,n,r){"use strict";function o(t,e,n){var r,o=this,c=o.xhr,l=o.settings;e=l.cache===!1?"".concat(e,e.indexOf("?")>-1?"&":"?","_="+(new Date).getTime()):e,e=n&&"GET"===t?"".concat(e,e.indexOf("?")>-1?"&":"?",n):e;for(r in l.xhrOptions)c[r]=l.xhrOptions[r];if(c.open(t,e,l.async,l.username,l.password),c.setRequestHeader){c.setRequestHeader("Accept",l.accept),n&&"GET"!==t&&c.setRequestHeader("Content-Type",l.contentType);for(r in l.header)c.setRequestHeader(r,l.header[r])}c.timeout=l.timeout,c.onprogress=function(t){i.call(o,t)},c.onreadystatechange=c.onload=function(){u.call(o)},c.onerror=function(){s.call(o)},c.send(n||null),o.timeout=setTimeout(function(){a.call(o)},l.timeout)}function i(t){var e=this;e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(function(){a.call(e)},e.settings.timeout)}function u(){var t=this,e=t.xhr,n=t.dfd;(e.readyState===r||4===e.readyState)&&(c.call(t),e.status===r||200===e.status?n.resolve({data:e.responseText,xhr:e}):n.reject({status:e.status,xhr:e}))}function s(){var t=this;c.call(t),t.dfd.reject()}function a(){var t=this;t.xhr.abort(),c.call(t),t.dfd.reject()}function c(){var t=this,e=t.xhr;t.timeout&&clearTimeout(t.timeout),e.onprogress=e.onreadystatechange=e.onerror=null}var l,d=t["promise/defer"],f="undefined"!=typeof n.XMLHttpRequest?function(e){return t.url.isLocal(e)?new n.XMLHttpRequest:n.XDomainRequest?new n.XDomainRequest:new n.XMLHttpRequest}:function(){try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(t){return null}};return l=t.transport.extend({_settings:{accept:"*/*",timeout:5e3,async:!0,cache:!1,header:{},username:null,password:null,contentType:"application/x-www-form-urlencoded; charset=UTF-8 ",xhrOptions:{}},load:function(e,n,r,i){var u={};return n=t.url.resolve(n),u.url=n,u.id="".concat("xhr-",t["function/unique/string"]()),u.dfd=new d,u.xhr=f(n),u.settings=t["function/merge"]({},this._settings,i),u.timeout=null,o.call(u,e.toUpperCase(),n,r),u.dfd.promise},get:function(t,e,n){return this.load("GET",t,e,n)},post:function(t,e,n){return this.load("POST",t,e,n)},put:function(t,e,n){return this.load("PUT",t,e,n)},"delete":function(t,e,n){return this.load("DELETE",t,e,n)},head:function(t,e,n){return this.load("HEAD",t,e,n)}})},this);