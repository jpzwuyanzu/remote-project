"use strict";(self.webpackChunknewssystem_ts=self.webpackChunknewssystem_ts||[]).push([[798],{9570:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(9439),a=n(2791),o=n(7309),l=n(7836),i=n(7462),c=n(4942),s=n(732),u=n(1694),d=n.n(u),f=n(1413),m=n(4640),v=n(5207);var p=function(e){var t=e.prefixCls,n=e.className,r=e.style,o=e.children,l=e.containerRef;return a.createElement(a.Fragment,null,a.createElement("div",{className:d()("".concat(t,"-content"),n),style:(0,f.Z)({},r),"aria-modal":"true",role:"dialog",ref:l},o))},h=a.createContext(null),y=n(1354),C=n(632);function b(e){return"string"===typeof e&&String(Number(e))===e?((0,C.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var g={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function k(e){var t,n,o,l,s=e.prefixCls,u=e.open,m=e.placement,C=e.inline,k=e.push,E=e.forceRender,Z=e.autoFocus,x=e.keyboard,w=e.scrollLocker,N=e.rootClassName,S=e.rootStyle,O=e.zIndex,j=e.className,I=e.style,L=e.motion,D=e.width,R=e.height,P=e.children,M=e.contentWrapperStyle,z=e.mask,A=e.maskClosable,K=e.maskMotion,V=e.maskClassName,F=e.maskStyle,_=e.afterOpenChange,B=e.onClose,T=a.useRef(),X=a.useRef(),Y=a.useRef();a.useEffect((function(){var e;u&&Z&&(null===(e=T.current)||void 0===e||e.focus({preventScroll:!0}))}),[u,Z]);var G=a.useState(!1),H=(0,r.Z)(G,2),U=H[0],W=H[1],q=a.useContext(h),J=null!==(t=null!==(n=null===(o=!1===k?{distance:0}:!0===k?{}:k||{})||void 0===o?void 0:o.distance)&&void 0!==n?n:null===q||void 0===q?void 0:q.pushDistance)&&void 0!==t?t:180,Q=a.useMemo((function(){return{pushDistance:J,push:function(){W(!0)},pull:function(){W(!1)}}}),[J]);a.useEffect((function(){var e,t;u?null===q||void 0===q||null===(e=q.push)||void 0===e||e.call(q):null===q||void 0===q||null===(t=q.pull)||void 0===t||t.call(q)}),[u]),a.useEffect((function(){u&&z&&(null===w||void 0===w||w.lock())}),[u,z]),a.useEffect((function(){return function(){var e;null===w||void 0===w||w.unLock(),null===q||void 0===q||null===(e=q.pull)||void 0===e||e.call(q)}}),[]);var $=z&&a.createElement(v.Z,(0,i.Z)({key:"mask"},K,{visible:u}),(function(e,t){var n=e.className,r=e.style;return a.createElement("div",{className:d()("".concat(s,"-mask"),n,V),style:(0,f.Z)((0,f.Z)({},r),F),onClick:A?B:void 0,ref:t})})),ee="function"===typeof L?L(m):L,te={};if(U&&J)switch(m){case"top":te.transform="translateY(".concat(J,"px)");break;case"bottom":te.transform="translateY(".concat(-J,"px)");break;case"left":te.transform="translateX(".concat(J,"px)");break;default:te.transform="translateX(".concat(-J,"px)")}"left"===m||"right"===m?te.width=b(D):te.height=b(R);var ne=a.createElement(v.Z,(0,i.Z)({key:"panel"},ee,{visible:u,forceRender:E,onVisibleChanged:function(e){null===_||void 0===_||_(e),e||null===w||void 0===w||w.unLock()},removeOnLeave:!1,leavedClassName:"".concat(s,"-content-wrapper-hidden")}),(function(e,t){var n=e.className,r=e.style;return a.createElement("div",{className:d()("".concat(s,"-content-wrapper"),n),style:(0,f.Z)((0,f.Z)((0,f.Z)({},te),r),M)},a.createElement(p,{containerRef:t,prefixCls:s,className:j,style:I},P))})),re=(0,f.Z)({},S);return O&&(re.zIndex=O),a.createElement(h.Provider,{value:Q},a.createElement("div",{className:d()(s,"".concat(s,"-").concat(m),N,(l={},(0,c.Z)(l,"".concat(s,"-open"),u),(0,c.Z)(l,"".concat(s,"-inline"),C),l)),style:re,tabIndex:-1,ref:T,onKeyDown:function(e){var t=e.keyCode,n=e.shiftKey;switch(t){case y.Z.TAB:var r;if(t===y.Z.TAB)if(n||document.activeElement!==Y.current){if(n&&document.activeElement===X.current){var a;null===(a=Y.current)||void 0===a||a.focus({preventScroll:!0})}}else null===(r=X.current)||void 0===r||r.focus({preventScroll:!0});break;case y.Z.ESC:B&&x&&B(e)}}},$,a.createElement("div",{tabIndex:0,ref:X,style:g,"aria-hidden":"true","data-sentinel":"start"}),ne,a.createElement("div",{tabIndex:0,ref:Y,style:g,"aria-hidden":"true","data-sentinel":"end"})))}var E=function(e){var t=e.open,n=e.getContainer,o=e.forceRender,l=e.wrapperClassName,c=e.prefixCls,s=e.afterOpenChange,u=e.destroyOnClose,d=a.useState(!1),v=(0,r.Z)(d,2),p=v[0],h=v[1];if(!o&&!p&&!t&&u)return null;var y=(0,f.Z)((0,f.Z)({},e),{},{prefixCls:c,afterOpenChange:function(e){h(e),null===s||void 0===s||s(e)}});return!1===n?a.createElement(k,(0,i.Z)({},y,{inline:!0})):a.createElement(m.Z,{visible:t,forceRender:o,getContainer:n,wrapperClassName:l},(function(e){var t=e.scrollLocker;return a.createElement(k,(0,i.Z)({},y,{scrollLocker:t}))}))};E.defaultProps={open:!1,getContainer:function(){return document.body},prefixCls:"rc-drawer",placement:"right",autoFocus:!0,keyboard:!0,width:378,mask:!0,maskClosable:!0};var Z=E,x=n(1929),w=n(1940),N=n(9464),S=n(9393),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},j=((0,S.b)("default","large"),{distance:180});var I=function(e){var t=e.width,n=e.height,o=e.size,l=void 0===o?"default":o,u=e.closable,f=void 0===u||u,m=e.mask,v=void 0===m||m,p=e.push,h=void 0===p?j:p,y=e.closeIcon,C=void 0===y?a.createElement(s.Z,null):y,b=e.bodyStyle,g=e.drawerStyle,k=e.className,E=e.visible,S=e.open,I=e.children,L=e.style,D=e.title,R=e.headerStyle,P=e.onClose,M=e.footer,z=e.footerStyle,A=e.prefixCls,K=e.getContainer,V=e.extra,F=e.afterVisibleChange,_=e.afterOpenChange,B=O(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","open","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange","afterOpenChange"]),T=a.useContext(x.E_),X=T.getPopupContainer,Y=T.getPrefixCls,G=T.direction,H=Y("drawer",A),U=void 0===K&&X?function(){return X(document.body)}:K,W=f&&a.createElement("button",{type:"button",onClick:P,"aria-label":"Close",className:"".concat(H,"-close")},C);[["visible","open"],["afterVisibleChange","afterOpenChange"]].forEach((function(e){var t=(0,r.Z)(e,2);t[0],t[1]}));var q=d()((0,c.Z)({"no-mask":!v},"".concat(H,"-rtl"),"rtl"===G),k),J=a.useMemo((function(){return null!==t&&void 0!==t?t:"large"===l?736:378}),[t,l]),Q=a.useMemo((function(){return null!==n&&void 0!==n?n:"large"===l?736:378}),[n,l]),$={motionName:(0,N.mL)(H,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500};return a.createElement(w.Ux,{status:!0,override:!0},a.createElement(Z,(0,i.Z)({prefixCls:H,onClose:P},B,{open:S||E,mask:v,push:h,width:J,height:Q,rootClassName:q,getContainer:U,afterOpenChange:function(e){null===_||void 0===_||_(e),null===F||void 0===F||F(e)},maskMotion:$,motion:function(e){return{motionName:(0,N.mL)(H,"panel-motion-".concat(e)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},rootStyle:L}),a.createElement("div",{className:"".concat(H,"-wrapper-body"),style:(0,i.Z)({},g)},D||f?a.createElement("div",{className:d()("".concat(H,"-header"),(0,c.Z)({},"".concat(H,"-header-close-only"),f&&!D&&!V)),style:R},a.createElement("div",{className:"".concat(H,"-header-title")},W,D&&a.createElement("div",{className:"".concat(H,"-title")},D)),V&&a.createElement("div",{className:"".concat(H,"-extra")},V)):null,a.createElement("div",{className:"".concat(H,"-body"),style:b},I),function(){if(!M)return null;var e="".concat(H,"-footer");return a.createElement("div",{className:e,style:z},M)}())))},L=n(3099),D=n(2172),R=n(4569),P=n.n(R),M=n(184),z=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],c=(0,a.useState)(!1),s=(0,r.Z)(c,2),u=s[0],d=s[1],f=(0,a.useState)([]),m=(0,r.Z)(f,2),v=m[0],p=m[1],h=(0,a.useState)([]),y=(0,r.Z)(h,2),C=y[0],b=y[1],g=[{title:"ID",dataIndex:"id",key:"id",align:"center"},{title:"\u89d2\u8272\u540d\u79f0",dataIndex:"roleName",key:"roleName",align:"center"},{title:"\u64cd\u4f5c",render:function(e,t){return(0,M.jsx)(o.Z,{type:"primary",onClick:function(){return k(e)},children:"\u6743\u9650"})},align:"center"}],k=function(e){n.forEach((function(t){t.id===e.id&&b(t.rights)})),d(!0)};return(0,a.useEffect)((function(){P().get("role.json").then((function(e){i(e.data.roles)})),P().get("right.json").then((function(e){p(e.data.rights)}))}),[]),(0,M.jsxs)("div",{children:[(0,M.jsx)(l.Z,{dataSource:n,columns:g,rowKey:function(e){return e.id}}),(0,M.jsx)(I,{title:"\u6743\u9650",placement:"right",onClose:function(){d(!1)},open:u,extra:(0,M.jsxs)(L.Z,{children:[(0,M.jsx)(o.Z,{children:"\u53d6\u6d88"}),(0,M.jsx)(o.Z,{type:"primary",children:"\u786e\u5b9a"})]}),children:(0,M.jsx)(D.Z,{checkable:!0,checkedKeys:C,treeData:v,onCheck:function(e){b(e)}})})]})}},9911:function(e,t,n){var r=n(9439),a=n(2791),o=n(6096);t.Z=function(){var e=a.useState(!1),t=(0,r.Z)(e,2),n=t[0],l=t[1];return a.useEffect((function(){l((0,o.fk)())}),[]),n}},6096:function(e,t,n){n.d(t,{fk:function(){return l},jD:function(){return o}});var r,a=n(4937),o=function(){return(0,a.Z)()&&window.document.documentElement},l=function(){if(!o())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}}}]);
//# sourceMappingURL=798.c80eab5f.chunk.js.map