/*! Qoopido.js library 3.7.4, 2015-08-14 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(t,e){e.qoopido.register("dom/element/emerge",t,["../element","../../function/merge","../../function/unique/uuid"])}(function(t,e,i,o){"use strict";function r(t){var e,o=c[t];for(e in o)"length"!==e&&p.call(o[e]);0===o.length&&(i.clearInterval(m[t]),delete m[t])}function n(){a.left=0,a.top=0,a.right=i.innerWidth||v.clientWidth,a.bottom=i.innerHeight||v.clientHeight}function l(){var t=this,e=t._settings.threshold,i=e!==o?e:v.clientWidth*t._settings.auto,r=e!==o?e:v.clientHeight*t._settings.auto;t._viewport.left=a.left-i,t._viewport.top=a.top-r,t._viewport.right=a.right+i,t._viewport.bottom=a.bottom+r}function p(){var t,e=this,i=!1,o=2;!e.isVisible()||"hidden"===e.getStyle("visibility")&&e._settings.visibility!==!1||(t=e.element.getBoundingClientRect(),(t.bottom>=e._viewport.top&&t.bottom<=e._viewport.bottom||t.top>=e._viewport.top&&t.top<=e._viewport.bottom||e._viewport.bottom>=t.top&&e._viewport.bottom<=t.bottom||e._viewport.top>=t.top&&e._viewport.top<=t.bottom)&&(t.left>=e._viewport.left&&t.left<=e._viewport.right||t.right>=e._viewport.left&&t.right<=e._viewport.right||e._viewport.left>=t.left&&e._viewport.left<=t.right||e._viewport.right>=t.left&&e._viewport.right<=t.right)&&((0===e._settings.threshold||(t.bottom>=a.top&&t.bottom<=a.bottom||t.top>=a.top&&t.top<=a.bottom||a.bottom>=t.top&&a.bottom<=t.bottom||a.top>=t.top&&a.top<=t.bottom)&&(t.left>=a.left&&t.left<=a.right||t.right>=a.left&&t.right<=a.right||a.left>=t.left&&a.left<=t.right||a.right>=t.left&&a.right<=t.right))&&(o=1),i=!0)),(i!==e._state||i===!0&&o!==e._priority)&&s.call(e,i,o)}function s(t,e){var i=this;i._state=t,i._priority=e,i._settings.recur!==!0&&i.remove(),t===!0?i.emit(f,e):i.emit(d)}var h,g={interval:50,threshold:"auto",recur:!0,auto:1,visibility:!0},u=i.document,v=u.documentElement,_=t["dom/element"].create(i),a={},m={},c={},f="emerged",d="demerged",b="resize orientationchange";if("CSS1Compat"!==u.compatMode)throw"[Qoopido.js] Not in standards mode";return h=t["dom/element"].extend({_quid:null,_viewport:null,_settings:null,_state:null,_priority:null,_constructor:function(e,n){var p=h._parent._constructor.call(this,e);return n=t["function/merge"]({},g,n||{}),"auto"===n.threshold&&delete n.threshold,m[n.interval]===o&&(c[n.interval]=c[n.interval]||{length:0},m[n.interval]=i.setInterval(function(){r(n.interval)},n.interval)),p._quid=t["function/unique/uuid"](),p._viewport={},p._settings=n,p._state=!1,p._priority=2,c[n.interval][p._quid]=p,c[n.interval].length++,_.on(b,function(){l.call(p)}),l.call(p),p},remove:function(){var t=this;delete c[t._settings.interval][t._quid],c[t._settings.interval].length--}}),_.on(b,n),n(),h},this);