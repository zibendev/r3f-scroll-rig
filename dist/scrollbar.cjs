var e=require("zustand"),t=require("react"),n=require("@react-three/fiber"),r=require("debounce"),o=require("@studio-freight/lenis"),i=require("react-intersection-observer"),l=require("vecn");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=/*#__PURE__*/u(e),a=/*#__PURE__*/u(t),s=/*#__PURE__*/u(r),f=/*#__PURE__*/u(o),d=/*#__PURE__*/u(l);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var w=c.default(function(e){return{debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,n,r){return void 0===r&&(r={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:v({},i,((o={})[t]={mesh:n,props:r,instances:1},o))}})},updateCanvas:function(t,n){return e(function(e){var r,o=e.canvasChildren;if(o[t]){var i=o[t],l=i.instances;return{canvasChildren:v({},o,((r={})[t]={mesh:i.mesh,props:v({},i.props,n),instances:l},r))}}})},removeFromCanvas:function(t,n){return void 0===n&&(n=!0),e(function(e){var r,o=e.canvasChildren;return(null==(r=o[t])?void 0:r.instances)>1?(o[t].instances-=1,{canvasChildren:o}):n?{canvasChildren:h(o,[t].map(p))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:v({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),g=function(){return{enabled:w(function(e){return e.hasSmoothScrollbar}),scroll:w(function(e){return e.scroll}),scrollTo:w(function(e){return e.scrollTo}),onScroll:w(function(e){return e.onScroll})}},m="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,b=["children","duration","easing","smooth","direction","config"],y=function(e){return 1===e?1:1-Math.pow(2,-10*e)},S=t.forwardRef(function(e,n){var r=e.children,o=e.duration,i=void 0===o?1:o,l=e.easing,u=void 0===l?y:l,c=e.smooth,a=void 0===c||c,s=e.direction,d=void 0===s?"vertical":s,p=e.config,w=h(e,b),g=t.useRef();return t.useImperativeHandle(n,function(){return{start:function(){var e;return null==(e=g.current)?void 0:e.start()},stop:function(){var e;return null==(e=g.current)?void 0:e.stop()},on:function(e,t){var n;return null==(n=g.current)?void 0:n.on(e,t)},once:function(e,t){var n;return null==(n=g.current)?void 0:n.once(e,t)},off:function(e,t){var n;return null==(n=g.current)?void 0:n.off(e,t)},notify:function(){var e;return null==(e=g.current)?void 0:e.notify()},scrollTo:function(e,t){var n;return null==(n=g.current)?void 0:n.scrollTo(e,t)},raf:function(e){var t;return null==(t=g.current)?void 0:t.raf(e)},__lenis:g.current}}),t.useEffect(function(){var e=g.current=new f.default(v({duration:i,easing:u,smooth:a,direction:d},p));return function(){e.destroy()}},[i,u,a,d]),r&&r(w)}),R=t.forwardRef(function(e,r){var o=e.children,i=e.enabled,l=void 0===i||i,u=e.locked,c=void 0!==u&&u,f=e.scrollRestoration,d=void 0===f?"auto":f,h=e.disablePointerOnScroll,p=void 0===h||h,g=e.horizontal,b=void 0!==g&&g,y=e.scrollInContainer,R=void 0!==y&&y,C=e.updateGlobalState,E=void 0===C||C,x=e.onScroll,T=e.config,L=t.useRef(),j=t.useRef(),I=t.useRef(!1),O=w(function(e){return e.scroll});t.useImperativeHandle(r,function(){return{scrollTo:function(e,t){var n;return null==(n=j.current)?void 0:n.scrollTo(e,t)},__lenis:j.current}});var V=function(e){p&&L.current&&I.current!==e&&(I.current=e,L.current.style.pointerEvents=e?"none":"auto")},M=t.useCallback(function(){V(!1)},[]),q=t.useCallback(function(e){var t;return null==(t=j.current)||t.on("scroll",e),function(){var t;return null==(t=j.current)?void 0:t.off("scroll",e)}},[l]);m(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=d)},[]),t.useEffect(function(){var e,t,r,o=n.addEffect(function(e){var t;return null==(t=j.current)?void 0:t.raf(e)});null==(e=j.current)||e.on("scroll",function(e){var t=e.scroll,r=e.limit,o=e.velocity,i=e.direction,l=e.progress,u=b?t:0;E&&(O.y=b?0:t,O.x=u,O.limit=r,O.velocity=o,O.direction=i,O.progress=l);var c=s.default.debounce(function(){return V(!0)},100,!0);Math.abs(o)>1.4?c():V(!1),x&&x({scroll:t,limit:r,velocity:o,direction:i,progress:l}),n.invalidate()}),null==(t=j.current)||t.notify(),E&&(O.scrollDirection=b?"horizontal":"vertical",w.setState({scrollTo:null==(r=j.current)?void 0:r.scrollTo}),w.setState({onScroll:q}),w.getState().scroll.y=window.scrollY,w.getState().scroll.x=window.scrollX,document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",l),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!l),w.setState({hasSmoothScrollbar:l}));var i=function(){return n.invalidate()};return window.addEventListener("pointermove",M),window.addEventListener("wheel",i),function(){var e;null==(e=j.current)||e.off("scroll"),o(),window.removeEventListener("pointermove",M),window.removeEventListener("wheel",i)}},[l]),t.useEffect(function(){var e,t;c?null==(e=j.current)||e.stop():null==(t=j.current)||t.start()},[c]);var z=t.useMemo(function(){if("undefined"==typeof document)return{};var e=document.documentElement,t=document.body,n=document.body.firstElementChild;return e.classList.toggle("ScrollRig-scrollHtml",R),t.classList.toggle("ScrollRig-scrollWrapper",R),{wrapper:t,content:n}},[R]);return a.default.createElement(S,{ref:j,smooth:l,direction:b?"horizontal":"vertical",config:v(R?{smoothTouch:!0,wrapper:z.wrapper,content:z.content}:{},T)},function(e){return o(v({},e,{ref:L}))})}),C="undefined"!=typeof window;function E(e,t,n,r,o){return r+(e-t)*(o-r)/(n-t)}exports.SmoothScrollbar=R,exports.useScrollbar=g,exports.useTracker=function(e,n){var r=function(e){var n={}.debounce,r=void 0===n?0:n,o=t.useState({width:C?window.innerWidth:Infinity,height:C?window.innerHeight:Infinity}),i=o[0],l=o[1];return t.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function t(){var t=e?e.clientWidth:window.innerWidth,n=e?e.clientHeight:window.innerHeight;t===i.width&&n===i.height||l({width:t,height:n})}var n,o=s.default.debounce(t,r);return e?(n=new ResizeObserver(o)).observe(e):window.addEventListener("resize",o),t(),function(){var e;window.removeEventListener("resize",o),null==(e=n)||e.disconnect()}},[]),i}(),o=g(),l=o.scroll,u=o.onScroll,c=w(function(e){return e.scaleMultiplier}),a=w(function(e){return e.pageReflow}),f=t.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},t=n||{};return Object.keys(t).map(function(n,r){void 0!==t[n]&&(e[n]=t[n])}),e},[n]),h=f.autoUpdate,p=f.wrapper,b=i.useInView({rootMargin:f.rootMargin,threshold:f.threshold}),y=b.ref,S=b.inView;m(function(){y(e.current)},[e]);var R=t.useState(),x=R[0],T=R[1],L=t.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,j=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,I=t.useState(j),O=I[0],V=I[1],M=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,q=t.useRef(d.default.vec3(0,0,0)).current;m(function(){var t,n=null==(t=e.current)?void 0:t.getBoundingClientRect();if(n){var r=p?p.scrollTop:window.scrollY,o=p?p.scrollLeft:window.scrollX;j.top=n.top+r,j.bottom=n.bottom+r,j.left=n.left+o,j.right=n.right+o,j.width=n.width,j.height=n.height,j.x=j.left+.5*n.width,j.y=j.top+.5*n.height,V(v({},j)),T(d.default.vec3((null==j?void 0:j.width)*c,(null==j?void 0:j.height)*c,1))}},[e,r,a,c]);var z=t.useCallback(function(t){var n=void 0===t?{}:t,o=n.onlyUpdateInViewport;if(e.current&&(void 0!==o&&!o||L.inViewport)){var i=n.scroll||l;!function(e,t,n,r){e.top=t.top-n.y,e.bottom=t.bottom-n.y,e.left=t.left-n.x,e.right=t.right-n.x,e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*r.width,e.y=e.top+.5*t.height-.5*r.height,e.positiveYUpBottom=r.height-e.bottom}(M,j,i,r),function(e,t,n){e.x=t.x*n,e.y=-1*t.y*n}(q,M,c);var u="horizontal"===i.scrollDirection,a=u?"width":"height",s=r[a]-M[u?"left":"top"];L.progress=E(s,0,r[a]+M[a],0,1),L.visibility=E(s,0,M[a],0,1),L.viewport=E(s,0,r[a],0,1)}},[e,r,c,l]);return m(function(){L.inViewport=S,z({onlyUpdateInViewport:!1})},[S]),m(function(){z({onlyUpdateInViewport:!1})},[z]),t.useEffect(function(){if(h)return u(function(e){return z()})},[h,z,u]),{rect:O,bounds:M,scale:x,position:q,scrollState:L,inViewport:S,update:function(e){return z(v({onlyUpdateInViewport:!1},e))}}};
//# sourceMappingURL=scrollbar.cjs.map
