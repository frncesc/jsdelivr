/*! Qoopido.js library 3.7.2, 2015-08-05 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e){window.qoopido.register("jquery/plugins/lazyimage",e,["../../dom/element/lazyimage","jquery"])}(function(e,n,t,r,o,i,c){"use strict";var u,a=e.jquery||o.jQuery,s=t.pop(),g="requested",l="loaded",d="".concat(g,".",s),f="".concat(l,".",s);return a.fn[s]=function(e){return this.each(function(){u.create(this,e)})},u=e["dom/element/lazyimage"].extend({_constructor:function(e,n){var t=u._parent._constructor.call(this,e,n),r=a(e);return t.on(g,function(){r.trigger(d)}),t.on(l,function(){r.trigger(f)}),t}})});