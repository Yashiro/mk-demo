webpackJsonp([3],{1593:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a,i=n(2),o=r(i),c=n(58),d=r(c),f=n(5),s=r(f),l=n(9),p=r(l),m=n(7),h=r(m),v=n(8),_=r(v),A=n(0),P=(r(A),n(272)),R=n(621),g=r(R),j=(u=(0,P.wrapper)(g.default))(a=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,o.default)({},this.props,{path:"root"}))}}]),t}(A.Component))||a;t.default=j,e.exports=t.default},1594:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=new f.action(e),n=new p((0,i.default)({},e,{metaAction:t})),r=(0,i.default)({},t,n);return t.config({metaHandlers:r}),r}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=r(a),o=n(5),c=r(o);t.default=u;var d=n(0),f=(r(d),n(272)),s=n(611),l=r(s),p=function e(t){var n=this;(0,c.default)(this,e),this.onInit=function(e){var t=e.component,r=e.injections;n.component=t,n.injections=r,r.reduce("init")},this.onRedirect=function(e){var t=e.appName,r=e.appProps;n.injections.reduce("redirect",t,r)},this.metaAction=t.metaAction,this.config=l.default.current};e.exports=t.default},1595:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=new d.reducer(e),n=new l((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=r(a),o=n(5),c=r(o);t.default=u;var d=(n(80),n(272)),f=n(611),s=r(f),l=function e(t){var n=this;(0,c.default)(this,e),this.init=function(e,t){var r={data:{currentAppName:n.config.defaultAppName,currentAppParams:n.config.defaultAppParams}};return n.metaReducer.init(e,r)},this.redirect=function(e,t,r){return e=n.metaReducer.sf(e,"data.currentAppName",t),e=n.metaReducer.sf(e,"data.currentAppProps",r)},this.metaReducer=t.metaReducer,this.config=s.default.current};e.exports=t.default}});