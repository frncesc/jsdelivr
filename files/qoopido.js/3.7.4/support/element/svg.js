/*! Qoopido.js library 3.7.4, 2015-08-14 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e,t){t.qoopido.register("support/element/svg",e,["../../support"])}(function(e,t,r,s){"use strict";var n=r.document;return e.support.addTest("/element/svg",function(e){n.createElementNS&&n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect?e.resolve():e.reject()})},this);