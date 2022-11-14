"use strict";(self.webpackChunknewssystem_ts=self.webpackChunknewssystem_ts||[]).push([[199],{4199:function(e,n,t){t.r(n),t.d(n,{default:function(){return Pe}});var r=t(4165),o=t(5861),a=t(9439),c=t(2791),l=t.t(c,2),i=t(3099),s=t(7309),u=t(7836),f=t(3433),d=t(7462),m=t(8944),v=t(1532),p=t(5796),C=t(9966),y=t(4699),Z=t(4775),x=t(4942),g=t(1694),k=t.n(g),b=t(8368),h=t(1728);function E(e){return!(!e||!e.then)}var N=function(e){var n=c.useRef(!1),t=c.useRef(),r=(0,b.Z)(!1),o=(0,a.Z)(r,2),l=o[0],i=o[1],u=e.close,f=function(){null===u||void 0===u||u.apply(void 0,arguments)};c.useEffect((function(){var n;if(e.autoFocus){var r=t.current;n=setTimeout((function(){return r.focus()}))}return function(){n&&clearTimeout(n)}}),[]);var m=e.type,v=e.children,p=e.prefixCls,C=e.buttonProps;return c.createElement(s.Z,(0,d.Z)({},(0,h.n)(m),{onClick:function(t){var r=e.actionFn;if(!n.current)if(n.current=!0,r){var o;if(e.emitEvent){if(o=r(t),e.quitOnNullishReturnValue&&!E(o))return n.current=!1,void f(t)}else if(r.length)o=r(u),n.current=!1;else if(!(o=r()))return void f();!function(e){E(e)&&(i(!0),e.then((function(){i(!1,!0),f.apply(void 0,arguments),n.current=!1}),(function(e){console.error(e),i(!1,!0),n.current=!1})))}(o)}else f()},loading:l,prefixCls:p},C,{ref:t}),v)},w=t(9464),T=t(732),P=t(4640),I=t(1413),j=t(1354);var O=0;function R(e){var n=c.useState("ssr-id"),t=(0,a.Z)(n,2),r=t[0],o=t[1],i=(0,I.Z)({},l).useId,s=null===i||void 0===i?void 0:i();return c.useEffect((function(){if(!i){var e=O;O+=1,o("rc_unique_".concat(e))}}),[]),e||(s||r)}var S=t(520),F=t(4170),A=t(5207);function L(e){var n=e.prefixCls,t=e.style,r=e.visible,o=e.maskProps,a=e.motionName;return c.createElement(A.Z,{key:"mask",visible:r,motionName:a,leavedClassName:"".concat(n,"-mask-hidden")},(function(e){var r=e.className,a=e.style;return c.createElement("div",(0,d.Z)({style:(0,I.Z)((0,I.Z)({},a),t),className:k()("".concat(n,"-mask"),r)},o))}))}function M(e,n,t){var r=n;return!r&&t&&(r="".concat(e,"-").concat(t)),r}function B(e,n){var t=e["page".concat(n?"Y":"X","Offset")],r="scroll".concat(n?"Top":"Left");if("number"!==typeof t){var o=e.document;"number"!==typeof(t=o.documentElement[r])&&(t=o.body[r])}return t}var D=c.memo((function(e){return e.children}),(function(e,n){return!n.shouldUpdate})),z={width:0,height:0,overflow:"hidden",outline:"none"};var q=c.forwardRef((function(e,n){var t=e.prefixCls,r=e.className,o=e.style,a=e.title,l=e.ariaId,i=e.footer,s=e.closable,u=e.closeIcon,f=e.onClose,m=e.children,v=e.bodyStyle,p=e.bodyProps,C=e.modalRender,y=e.onMouseDown,Z=e.onMouseUp,x=e.holderRef,g=e.visible,b=e.forceRender,h=e.width,E=e.height,N=(0,c.useRef)(),w=(0,c.useRef)();c.useImperativeHandle(n,(function(){return{focus:function(){var e;null===(e=N.current)||void 0===e||e.focus()},changeActive:function(e){var n=document.activeElement;e&&n===w.current?N.current.focus():e||n!==N.current||w.current.focus()}}}));var T,P,j,O={};void 0!==h&&(O.width=h),void 0!==E&&(O.height=E),i&&(T=c.createElement("div",{className:"".concat(t,"-footer")},i)),a&&(P=c.createElement("div",{className:"".concat(t,"-header")},c.createElement("div",{className:"".concat(t,"-title"),id:l},a))),s&&(j=c.createElement("button",{type:"button",onClick:f,"aria-label":"Close",className:"".concat(t,"-close")},u||c.createElement("span",{className:"".concat(t,"-close-x")})));var R=c.createElement("div",{className:"".concat(t,"-content")},j,P,c.createElement("div",(0,d.Z)({className:"".concat(t,"-body"),style:v},p),m),T);return c.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":a?l:null,"aria-modal":"true",ref:x,style:(0,I.Z)((0,I.Z)({},o),O),className:k()(t,r),onMouseDown:y,onMouseUp:Z},c.createElement("div",{tabIndex:0,ref:N,style:z,"aria-hidden":"true"}),c.createElement(D,{shouldUpdate:g||b},C?C(R):R),c.createElement("div",{tabIndex:0,ref:w,style:z,"aria-hidden":"true"}))})),U=c.forwardRef((function(e,n){var t=e.prefixCls,r=e.title,o=e.style,l=e.className,i=e.visible,s=e.forceRender,u=e.destroyOnClose,f=e.motionName,m=e.ariaId,v=e.onVisibleChanged,p=e.mousePosition,C=(0,c.useRef)(),y=c.useState(),Z=(0,a.Z)(y,2),x=Z[0],g=Z[1],b={};function h(){var e=function(e){var n=e.getBoundingClientRect(),t={left:n.left,top:n.top},r=e.ownerDocument,o=r.defaultView||r.parentWindow;return t.left+=B(o),t.top+=B(o,!0),t}(C.current);g(p?"".concat(p.x-e.left,"px ").concat(p.y-e.top,"px"):"")}return x&&(b.transformOrigin=x),c.createElement(A.Z,{visible:i,onVisibleChanged:v,onAppearPrepare:h,onEnterPrepare:h,forceRender:s,motionName:f,removeOnLeave:u,ref:C},(function(a,i){var s=a.className,u=a.style;return c.createElement(q,(0,d.Z)({},e,{ref:n,title:r,ariaId:m,prefixCls:t,holderRef:i,style:(0,I.Z)((0,I.Z)((0,I.Z)({},u),o),b),className:k()(l,s)}))}))}));U.displayName="Content";var V=U;function _(e){var n=e.prefixCls,t=void 0===n?"rc-dialog":n,r=e.zIndex,o=e.visible,l=void 0!==o&&o,i=e.keyboard,s=void 0===i||i,u=e.focusTriggerAfterClose,f=void 0===u||u,m=e.scrollLocker,v=e.wrapStyle,p=e.wrapClassName,C=e.wrapProps,y=e.onClose,Z=e.afterClose,x=e.transitionName,g=e.animation,b=e.closable,h=void 0===b||b,E=e.mask,N=void 0===E||E,w=e.maskTransitionName,T=e.maskAnimation,P=e.maskClosable,O=void 0===P||P,A=e.maskStyle,B=e.maskProps,D=e.rootClassName,z=(0,c.useRef)(),q=(0,c.useRef)(),U=(0,c.useRef)(),_=c.useState(l),H=(0,a.Z)(_,2),K=H[0],X=H[1],Y=R();function W(e){null===y||void 0===y||y(e)}var G=(0,c.useRef)(!1),J=(0,c.useRef)(),Q=null;return O&&(Q=function(e){G.current?G.current=!1:q.current===e.target&&W(e)}),(0,c.useEffect)((function(){return l&&X(!0),function(){}}),[l]),(0,c.useEffect)((function(){return function(){clearTimeout(J.current)}}),[]),(0,c.useEffect)((function(){return K?(null===m||void 0===m||m.lock(),null===m||void 0===m?void 0:m.unLock):function(){}}),[K,m]),c.createElement("div",(0,d.Z)({className:k()("".concat(t,"-root"),D)},(0,F.Z)(e,{data:!0})),c.createElement(L,{prefixCls:t,visible:N&&l,motionName:M(t,w,T),style:(0,I.Z)({zIndex:r},A),maskProps:B}),c.createElement("div",(0,d.Z)({tabIndex:-1,onKeyDown:function(e){if(s&&e.keyCode===j.Z.ESC)return e.stopPropagation(),void W(e);l&&e.keyCode===j.Z.TAB&&U.current.changeActive(!e.shiftKey)},className:k()("".concat(t,"-wrap"),p),ref:q,onClick:Q,style:(0,I.Z)((0,I.Z)({zIndex:r},v),{},{display:K?null:"none"})},C),c.createElement(V,(0,d.Z)({},e,{onMouseDown:function(){clearTimeout(J.current),G.current=!0},onMouseUp:function(){J.current=setTimeout((function(){G.current=!1}))},ref:U,closable:h,ariaId:Y,prefixCls:t,visible:l,onClose:W,onVisibleChanged:function(e){if(e){var n;if(!(0,S.Z)(q.current,document.activeElement))z.current=document.activeElement,null===(n=U.current)||void 0===n||n.focus()}else{if(X(!1),N&&z.current&&f){try{z.current.focus({preventScroll:!0})}catch(t){}z.current=null}K&&(null===Z||void 0===Z||Z())}},motionName:M(t,x,g)}))))}var H=function(e){var n=e.visible,t=e.getContainer,r=e.forceRender,o=e.destroyOnClose,l=void 0!==o&&o,i=e.afterClose,s=c.useState(n),u=(0,a.Z)(s,2),f=u[0],m=u[1];return c.useEffect((function(){n&&m(!0)}),[n]),!1===t?c.createElement(_,(0,d.Z)({},e,{getOpenCount:function(){return 2}})):r||!l||f?c.createElement(P.Z,{visible:n,forceRender:r,getContainer:t},(function(n){return c.createElement(_,(0,d.Z)({},e,{destroyOnClose:l,afterClose:function(){null===i||void 0===i||i(),m(!1)}},n))})):null};H.displayName="Dialog";var K,X=H,Y=t(1929),W=t(1940),G=t(3486),J=t(6096),Q=t(2073),$=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};(0,J.jD)()&&document.documentElement.addEventListener("click",(function(e){K={x:e.pageX,y:e.pageY},setTimeout((function(){K=null}),100)}),!0);var ee=function(e){var n,t=c.useContext(Y.E_),r=t.getPopupContainer,o=t.getPrefixCls,a=t.direction,l=function(n){var t=e.onCancel;null===t||void 0===t||t(n)},i=function(n){var t=e.onOk;null===t||void 0===t||t(n)},u=function(n){var t=e.okText,r=e.okType,o=e.cancelText,a=e.confirmLoading;return c.createElement(c.Fragment,null,c.createElement(s.Z,(0,d.Z)({onClick:l},e.cancelButtonProps),o||n.cancelText),c.createElement(s.Z,(0,d.Z)({},(0,h.n)(r),{loading:a,onClick:i},e.okButtonProps),t||n.okText))},f=e.prefixCls,m=e.footer,v=e.visible,p=e.open,C=e.wrapClassName,y=e.centered,Z=e.getContainer,g=e.closeIcon,b=e.focusTriggerAfterClose,E=void 0===b||b,N=$(e,["prefixCls","footer","visible","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),P=o("modal",f),I=o(),j=c.createElement(G.Z,{componentName:"Modal",defaultLocale:(0,Q.A)()},u),O=c.createElement("span",{className:"".concat(P,"-close-x")},g||c.createElement(T.Z,{className:"".concat(P,"-close-icon")})),R=k()(C,(n={},(0,x.Z)(n,"".concat(P,"-centered"),!!y),(0,x.Z)(n,"".concat(P,"-wrap-rtl"),"rtl"===a),n));return c.createElement(W.Ux,{status:!0,override:!0},c.createElement(X,(0,d.Z)({},N,{getContainer:void 0===Z?r:Z,prefixCls:P,wrapClassName:R,footer:void 0===m?j:m,visible:p||v,mousePosition:K,onClose:l,closeIcon:O,focusTriggerAfterClose:E,transitionName:(0,w.mL)(I,"zoom",e.transitionName),maskTransitionName:(0,w.mL)(I,"fade",e.maskTransitionName)})))};ee.defaultProps={width:520,confirmLoading:!1,open:!1,okType:"primary"};var ne=ee,te=function(e){var n=e.icon,t=e.onCancel,r=e.onOk,o=e.close,a=e.zIndex,l=e.afterClose,i=e.visible,s=e.open,u=e.keyboard,f=e.centered,d=e.getContainer,m=e.maskStyle,v=e.okText,p=e.okButtonProps,C=e.cancelText,y=e.cancelButtonProps,g=e.direction,b=e.prefixCls,h=e.wrapClassName,E=e.rootPrefixCls,T=e.iconPrefixCls,P=e.bodyStyle,I=e.closable,j=void 0!==I&&I,O=e.closeIcon,R=e.modalRender,S=e.focusTriggerAfterClose;var F=e.okType||"primary",A="".concat(b,"-confirm"),L=!("okCancel"in e)||e.okCancel,M=e.width||416,B=e.style||{},D=void 0===e.mask||e.mask,z=void 0!==e.maskClosable&&e.maskClosable,q=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),U=k()(A,"".concat(A,"-").concat(e.type),(0,x.Z)({},"".concat(A,"-rtl"),"rtl"===g),e.className),V=L&&c.createElement(N,{actionFn:t,close:o,autoFocus:"cancel"===q,buttonProps:y,prefixCls:"".concat(E,"-btn")},C);return c.createElement(Z.ZP,{prefixCls:E,iconPrefixCls:T,direction:g},c.createElement(ne,{prefixCls:b,className:U,wrapClassName:k()((0,x.Z)({},"".concat(A,"-centered"),!!e.centered),h),onCancel:function(){return null===o||void 0===o?void 0:o({triggerCancel:!0})},open:s||i,title:"",footer:"",transitionName:(0,w.mL)(E,"zoom",e.transitionName),maskTransitionName:(0,w.mL)(E,"fade",e.maskTransitionName),mask:D,maskClosable:z,maskStyle:m,style:B,bodyStyle:P,width:M,zIndex:a,afterClose:l,keyboard:u,centered:f,getContainer:d,closable:j,closeIcon:O,modalRender:R,focusTriggerAfterClose:S},c.createElement("div",{className:"".concat(A,"-body-wrapper")},c.createElement("div",{className:"".concat(A,"-body")},n,void 0===e.title?null:c.createElement("span",{className:"".concat(A,"-title")},e.title),c.createElement("div",{className:"".concat(A,"-content")},e.content)),c.createElement("div",{className:"".concat(A,"-btns")},V,c.createElement(N,{type:F,actionFn:r,close:o,autoFocus:"ok"===q,buttonProps:p,prefixCls:"".concat(E,"-btn")},v)))))},re=[],oe=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},ae="";function ce(e){var n=document.createDocumentFragment(),t=(0,d.Z)((0,d.Z)({},e),{close:a,open:!0});function r(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var c=r.some((function(e){return e&&e.triggerCancel}));e.onCancel&&c&&e.onCancel.apply(e,[function(){}].concat((0,f.Z)(r.slice(1))));for(var l=0;l<re.length;l++){var i=re[l];if(i===a){re.splice(l,1);break}}(0,y.v)(n)}function o(e){var t=e.okText,r=e.cancelText,o=e.prefixCls,a=oe(e,["okText","cancelText","prefixCls"]);setTimeout((function(){var e=(0,Q.A)(),l=(0,Z.w6)(),i=l.getPrefixCls,s=l.getIconPrefixCls,u=i(void 0,ae),f=o||"".concat(u,"-modal"),m=s();(0,y.s)(c.createElement(te,(0,d.Z)({},a,{prefixCls:f,rootPrefixCls:u,iconPrefixCls:m,okText:t||(a.okCancel?e.okText:e.justOkText),cancelText:r||e.cancelText})),n)}))}function a(){for(var n=this,a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];(t=(0,d.Z)((0,d.Z)({},t),{open:!1,afterClose:function(){"function"===typeof e.afterClose&&e.afterClose(),r.apply(n,c)}})).visible&&delete t.visible,o(t)}return o(t),re.push(a),{destroy:a,update:function(e){o(t="function"===typeof e?e(t):(0,d.Z)((0,d.Z)({},t),e))}}}function le(e){return(0,d.Z)((0,d.Z)({icon:c.createElement(p.Z,null),okCancel:!1},e),{type:"warning"})}function ie(e){return(0,d.Z)((0,d.Z)({icon:c.createElement(C.Z,null),okCancel:!1},e),{type:"info"})}function se(e){return(0,d.Z)((0,d.Z)({icon:c.createElement(m.Z,null),okCancel:!1},e),{type:"success"})}function ue(e){return(0,d.Z)((0,d.Z)({icon:c.createElement(v.Z,null),okCancel:!1},e),{type:"error"})}function fe(e){return(0,d.Z)((0,d.Z)({icon:c.createElement(p.Z,null),okCancel:!0},e),{type:"confirm"})}var de=t(3578),me=function(e,n){var t=e.afterClose,r=e.config,o=c.useState(!0),l=(0,a.Z)(o,2),i=l[0],s=l[1],u=c.useState(r),m=(0,a.Z)(u,2),v=m[0],p=m[1],C=c.useContext(Y.E_),y=C.direction,Z=C.getPrefixCls,x=Z("modal"),g=Z(),k=function(){s(!1);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.some((function(e){return e&&e.triggerCancel}));v.onCancel&&r&&v.onCancel.apply(v,[function(){}].concat((0,f.Z)(n.slice(1))))};return c.useImperativeHandle(n,(function(){return{destroy:k,update:function(e){p((function(n){return(0,d.Z)((0,d.Z)({},n),e)}))}}})),c.createElement(G.Z,{componentName:"Modal",defaultLocale:de.Z.Modal},(function(e){return c.createElement(te,(0,d.Z)({prefixCls:x,rootPrefixCls:g},v,{close:k,open:i,afterClose:t,okText:v.okText||(v.okCancel?e.okText:e.justOkText),direction:y,cancelText:v.cancelText||e.cancelText}))}))},ve=c.forwardRef(me),pe=0,Ce=c.memo(c.forwardRef((function(e,n){var t=function(){var e=c.useState([]),n=(0,a.Z)(e,2),t=n[0],r=n[1];return[t,c.useCallback((function(e){return r((function(n){return[].concat((0,f.Z)(n),[e])})),function(){r((function(n){return n.filter((function(n){return n!==e}))}))}}),[])]}(),r=(0,a.Z)(t,2),o=r[0],l=r[1];return c.useImperativeHandle(n,(function(){return{patchElement:l}}),[]),c.createElement(c.Fragment,null,o)})));function ye(e){return ce(le(e))}var Ze=ne;Ze.useModal=function(){var e=c.useRef(null),n=c.useState([]),t=(0,a.Z)(n,2),r=t[0],o=t[1];c.useEffect((function(){r.length&&((0,f.Z)(r).forEach((function(e){e()})),o([]))}),[r]);var l=c.useCallback((function(n){return function(t){var r;pe+=1;var a,l=c.createRef(),i=c.createElement(ve,{key:"modal-".concat(pe),config:n(t),ref:l,afterClose:function(){a()}});return a=null===(r=e.current)||void 0===r?void 0:r.patchElement(i),{destroy:function(){function e(){var e;null===(e=l.current)||void 0===e||e.destroy()}l.current?e():o((function(n){return[].concat((0,f.Z)(n),[e])}))},update:function(e){function n(){var n;null===(n=l.current)||void 0===n||n.update(e)}l.current?n():o((function(e){return[].concat((0,f.Z)(e),[n])}))}}}}),[]);return[c.useMemo((function(){return{info:l(ie),success:l(se),error:l(ue),warning:l(le),confirm:l(fe)}}),[]),c.createElement(Ce,{ref:e})]},Ze.info=function(e){return ce(ie(e))},Ze.success=function(e){return ce(se(e))},Ze.error=function(e){return ce(ue(e))},Ze.warning=ye,Ze.warn=ye,Ze.confirm=function(e){return ce(fe(e))},Ze.destroyAll=function(){for(;re.length;){var e=re.pop();e&&e()}},Ze.config=function(e){var n=e.rootPrefixCls;ae=n};var xe=Ze,ge=t(4569),ke=t.n(ge),be=t(6435),he=t(1541),Ee=t(7031),Ne=t(184),we=be.Z.Option,Te=(0,c.forwardRef)((function(e,n){var t=(0,c.useState)([]),r=(0,a.Z)(t,2),o=r[0],l=r[1],i=(0,c.useState)([]),s=(0,a.Z)(i,2),u=s[0],f=s[1];console.log(e),(0,c.useEffect)((function(){ke().get("regions.json").then((function(e){l(e.data.regions)}))}),[]),(0,c.useEffect)((function(){ke().get("role.json").then((function(e){f(e.data.roles)}))}),[]);return(0,Ne.jsxs)(he.Z,{name:"basic",labelCol:{span:5},ref:n,onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,Ne.jsx)(he.Z.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0!"}],children:(0,Ne.jsx)(Ee.Z,{})}),(0,Ne.jsx)(he.Z.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"}],children:(0,Ne.jsx)(Ee.Z.Password,{})}),(0,Ne.jsx)(he.Z.Item,{label:"\u533a\u57df",name:"region",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7528\u6237\u533a\u57df!"}],children:(0,Ne.jsx)(be.Z,{children:o.map((function(e){return(0,Ne.jsx)(we,{value:e.value,children:e.title},e.id)}))})}),(0,Ne.jsx)(he.Z.Item,{label:"\u89d2\u8272",name:"roleId",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7528\u6237\u89d2\u8272!"}],children:(0,Ne.jsx)(be.Z,{children:u.map((function(e){return(0,Ne.jsx)(we,{value:e.id,children:e.roleName},e.id)}))})})]})})),Pe=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],l=n[1],f=(0,c.useState)(!1),d=(0,a.Z)(f,2),m=d[0],v=d[1],p=(0,c.useState)({}),C=(0,a.Z)(p,2),y=C[0],Z=C[1],x=[{title:"\u7528\u6237\u540d",dataIndex:"username",key:"username",align:"center"},{title:"\u5730\u533a",dataIndex:"region",key:"region",align:"center"},{title:"\u89d2\u8272ID",dataIndex:"roleId",key:"roleId",align:"center"},{title:"\u64cd\u4f5c",align:"center",render:function(e){return(0,Ne.jsx)(Ne.Fragment,{children:(0,Ne.jsxs)(i.Z,{children:[(0,Ne.jsx)(s.Z,{type:"primary",onClick:function(){return k(e)},children:"\u7f16\u8f91"}),(0,Ne.jsx)(s.Z,{type:"primary",danger:!0,children:"\u5220\u9664"})]})})}}],g=(0,c.useRef)(null);(0,c.useEffect)((function(){ke().get("user.json").then((function(e){l(e.data.users)}))}),[]);var k=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(n),e.next=3,v(!0);case 3:g.current.setFieldsValue(n);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,Ne.jsxs)("div",{children:[(0,Ne.jsx)(s.Z,{type:"primary",onClick:function(){v(!0)},style:{marginBottom:"20px"},children:"\u65b0\u589e\u7528\u6237"}),(0,Ne.jsx)(u.Z,{dataSource:t,columns:x,rowKey:function(e){return e.id}}),(0,Ne.jsx)(xe,{title:"\u65b0\u589e\u7528\u6237",open:m,onOk:function(){g.current.validateFields().then((function(e){console.log(e),v(!1)}))},onCancel:function(){v(!1)},children:(0,Ne.jsx)(Te,{ref:g,currentItem:y})})]})}}}]);
//# sourceMappingURL=199.71c07524.chunk.js.map