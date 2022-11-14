"use strict";(self.webpackChunknewssystem_ts=self.webpackChunknewssystem_ts||[]).push([[796],{3099:function(e,t,n){n.d(t,{u:function(){return v},Z:function(){return h}});var o=n(7462),r=n(4942),i=n(9439),a=n(1694),c=n.n(a),l=n(5501),s=n(2791),u=n(1929),d=n(9911);function f(e){var t=e.className,n=e.direction,i=e.index,a=e.marginDirection,c=e.children,l=e.split,u=e.wrap,d=s.useContext(v),f=d.horizontalSize,p=d.verticalSize,m=d.latestIndex,h={};return d.supportFlexGap||("vertical"===n?i<m&&(h={marginBottom:f/(l?2:1)}):h=(0,o.Z)((0,o.Z)({},i<m&&(0,r.Z)({},a,f/(l?2:1))),u&&{paddingBottom:p})),null===c||void 0===c?null:s.createElement(s.Fragment,null,s.createElement("div",{className:t,style:h},c),i<m&&l&&s.createElement("span",{className:"".concat(t,"-split"),style:h},l))}var p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},v=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),m={small:8,middle:16,large:24};var h=function(e){var t,n=s.useContext(u.E_),a=n.getPrefixCls,h=n.space,g=n.direction,y=e.size,C=void 0===y?(null===h||void 0===h?void 0:h.size)||"small":y,w=e.align,k=e.className,b=e.children,Z=e.direction,N=void 0===Z?"horizontal":Z,x=e.prefixCls,E=e.split,S=e.style,O=e.wrap,z=void 0!==O&&O,L=p(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),T=(0,d.Z)(),P=s.useMemo((function(){return(Array.isArray(C)?C:[C,C]).map((function(e){return function(e){return"string"===typeof e?m[e]:e||0}(e)}))}),[C]),W=(0,i.Z)(P,2),R=W[0],j=W[1],I=(0,l.Z)(b,{keepEmpty:!0}),H=void 0===w&&"horizontal"===N?"center":w,G=a("space",x),M=c()(G,"".concat(G,"-").concat(N),(t={},(0,r.Z)(t,"".concat(G,"-rtl"),"rtl"===g),(0,r.Z)(t,"".concat(G,"-align-").concat(H),H),t),k),D="".concat(G,"-item"),F="rtl"===g?"marginLeft":"marginRight",A=0,B=I.map((function(e,t){null!==e&&void 0!==e&&(A=t);var n=e&&e.key||"".concat(D,"-").concat(t);return s.createElement(f,{className:D,key:n,direction:N,index:t,marginDirection:F,split:E,wrap:z},e)})),U=s.useMemo((function(){return{horizontalSize:R,verticalSize:j,latestIndex:A,supportFlexGap:T}}),[R,j,A,T]);if(0===I.length)return null;var _={};return z&&(_.flexWrap="wrap",T||(_.marginBottom=-j)),T&&(_.columnGap=R,_.rowGap=j),s.createElement("div",(0,o.Z)({className:M,style:(0,o.Z)((0,o.Z)({},_),S)},L),s.createElement(v.Provider,{value:U},B))}},4640:function(e,t,n){n.d(t,{Z:function(){return O}});var o=n(5671),r=n(3144),i=n(136),a=n(7277),c=n(1002),l=n(2791),s=n(5314),u=n(818),d=n(4937),f=n(9025);var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return{};var n=t.element,o=void 0===n?document.body:n,r={},i=Object.keys(e);return i.forEach((function(e){r[e]=o.style[e]})),i.forEach((function(t){o.style[t]=e[t]})),r};var v={},m=function(e){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||e){var t="ant-scrolling-effect",n=new RegExp("".concat(t),"g"),o=document.body.className;if(e){if(!n.test(o))return;return p(v),v={},void(document.body.className=o.replace(n,"").trim())}var r=(0,f.Z)();if(r&&(v=p({position:"relative",width:"calc(100% - ".concat(r,"px)")}),!n.test(o))){var i="".concat(o," ").concat(t);document.body.className=i.trim()}}},h=n(3433),g=0,y=[],C="ant-scrolling-effect",w=new RegExp("".concat(C),"g"),k=new Map,b=(0,r.Z)((function e(t){var n=this;(0,o.Z)(this,e),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var e;return null===(e=n.options)||void 0===e?void 0:e.container},this.reLock=function(e){var t=y.find((function(e){return e.target===n.lockTarget}));t&&n.unLock(),n.options=e,t&&(t.options=e,n.lock())},this.lock=function(){var e;if(!y.some((function(e){return e.target===n.lockTarget})))if(y.some((function(e){var t,o=e.options;return(null===o||void 0===o?void 0:o.container)===(null===(t=n.options)||void 0===t?void 0:t.container)})))y=[].concat((0,h.Z)(y),[{target:n.lockTarget,options:n.options}]);else{var t=0,o=(null===(e=n.options)||void 0===e?void 0:e.container)||document.body;(o===document.body&&window.innerWidth-document.documentElement.clientWidth>0||o.scrollHeight>o.clientHeight)&&(t=(0,f.Z)());var r=o.className;if(0===y.filter((function(e){var t,o=e.options;return(null===o||void 0===o?void 0:o.container)===(null===(t=n.options)||void 0===t?void 0:t.container)})).length&&k.set(o,p({width:0!==t?"calc(100% - ".concat(t,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:o})),!w.test(r)){var i="".concat(r," ").concat(C);o.className=i.trim()}y=[].concat((0,h.Z)(y),[{target:n.lockTarget,options:n.options}])}},this.unLock=function(){var e,t=y.find((function(e){return e.target===n.lockTarget}));if(y=y.filter((function(e){return e.target!==n.lockTarget})),t&&!y.some((function(e){var n,o=e.options;return(null===o||void 0===o?void 0:o.container)===(null===(n=t.options)||void 0===n?void 0:n.container)}))){var o=(null===(e=n.options)||void 0===e?void 0:e.container)||document.body,r=o.className;w.test(r)&&(p(k.get(o),{element:o}),k.delete(o),o.className=o.className.replace(w,"").trim())}},this.lockTarget=g++,this.options=t})),Z=0,N=(0,d.Z)();var x={},E=function(e){if(!N)return null;if(e){if("string"===typeof e)return document.querySelectorAll(e)[0];if("function"===typeof e)return e();if("object"===(0,c.Z)(e)&&e instanceof window.HTMLElement)return e}return document.body},S=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).container=void 0,r.componentRef=l.createRef(),r.rafId=void 0,r.scrollLocker=void 0,r.renderComponent=void 0,r.updateScrollLocker=function(e){var t=(e||{}).visible,n=r.props,o=n.getContainer,i=n.visible;i&&i!==t&&N&&E(o)!==r.scrollLocker.getContainer()&&r.scrollLocker.reLock({container:E(o)})},r.updateOpenCount=function(e){var t=e||{},n=t.visible,o=t.getContainer,i=r.props,a=i.visible,c=i.getContainer;a!==n&&N&&E(c)===document.body&&(a&&!n?Z+=1:e&&(Z-=1)),("function"===typeof c&&"function"===typeof o?c.toString()!==o.toString():c!==o)&&r.removeCurrentContainer()},r.attachToParent=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||r.container&&!r.container.parentNode){var t=E(r.props.getContainer);return!!t&&(t.appendChild(r.container),!0)}return!0},r.getContainer=function(){return N?(r.container||(r.container=document.createElement("div"),r.attachToParent(!0)),r.setWrapperClassName(),r.container):null},r.setWrapperClassName=function(){var e=r.props.wrapperClassName;r.container&&e&&e!==r.container.className&&(r.container.className=e)},r.removeCurrentContainer=function(){var e,t;null===(e=r.container)||void 0===e||null===(t=e.parentNode)||void 0===t||t.removeChild(r.container)},r.switchScrollingEffect=function(){1!==Z||Object.keys(x).length?Z||(p(x),x={},m(!0)):(m(),x=p({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))},r.scrollLocker=new b({container:E(e.getContainer)}),r}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,s.Z)((function(){e.forceUpdate()})))}},{key:"componentDidUpdate",value:function(e){this.updateOpenCount(e),this.updateScrollLocker(e),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.visible,n=e.getContainer;N&&E(n)===document.body&&(Z=t&&Z?Z-1:Z),this.removeCurrentContainer(),s.Z.cancel(this.rafId)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.forceRender,o=e.visible,r=null,i={getOpenCount:function(){return Z},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(n||o||this.componentRef.current)&&(r=l.createElement(u.Z,{getContainer:this.getContainer,ref:this.componentRef},t(i))),r}}]),n}(l.Component),O=S}}]);
//# sourceMappingURL=796.b08d3d4e.chunk.js.map