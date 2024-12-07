import n from"zustand";import{useLayoutEffect as t,useEffect as e,forwardRef as r,useRef as o,useImperativeHandle as i,useCallback as l,useState as c,useMemo as u}from"react";import a from"lenis";import{useInView as s}from"react-intersection-observer";import{ResizeObserver as d}from"@juggle/resize-observer";import f from"debounce";import v from"vecn";function h(){return h=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)({}).hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},h.apply(null,arguments)}function p(n){var t=function(n){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,"string");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==typeof t?t:t+""}var m=n(function(n){return{debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return n(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!1,hasSmoothScrollbar:!1,canvasChildren:{},frameCallbacks:[],addFrameCallback:function(t){return n(function(n){return{frameCallbacks:[].concat(n.frameCallbacks,[t])}})},removeFrameCallback:function(t){return n(function(n){var e=n.frameCallbacks;return e.splice(e.indexOf(t),1),{frameCallbacks:e}})},renderToCanvas:function(t,e,r){return void 0===r&&(r={}),n(function(n){var o,i=n.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:h({},i,((o={})[t]={mesh:e,props:r,instances:1},o))}})},updateCanvas:function(t,e){return n(function(n){var r,o=n.canvasChildren;if(o[t]){var i=o[t],l=i.instances;return{canvasChildren:h({},o,((r={})[t]={mesh:i.mesh,props:h({},i.props,e),instances:l},r))}}})},removeFromCanvas:function(t,e){return void 0===e&&(e=!0),n(function(n){var r,o=n.canvasChildren;return(null==(r=o[t])?void 0:r.instances)>1?(o[t].instances-=1,{canvasChildren:o}):e?{canvasChildren:function(n,t){if(null==n)return{};var e={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(t.includes(r))continue;e[r]=n[r]}return e}(o,[t].map(p))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:h({},o)})})},pageReflow:0,requestReflow:function(){n(function(n){return{pageReflow:n.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},__lenis:void 0,scrollTo:function(){},onScroll:function(){return function(){}}}}),w=function(){return{enabled:m(function(n){return n.hasSmoothScrollbar}),scroll:m(function(n){return n.scroll}),scrollTo:m(function(n){return n.scrollTo}),onScroll:m(function(n){return n.onScroll}),__lenis:m(function(n){return n.__lenis})}},g="undefined"!=typeof window?t:e,b=r(function(n,t){var r=n.children,c=n.enabled,u=void 0===c||c,s=n.locked,d=void 0!==s&&s,f=n.scrollRestoration,v=void 0===f?"auto":f,p=n.disablePointerOnScroll,w=void 0===p||p,b=n.horizontal,y=void 0!==b&&b,S=n.scrollInContainer,C=void 0!==S&&S,E=n.updateGlobalState,R=void 0===E||E,T=n.onScroll,L=n.config,j=void 0===L?{}:L,k=n.invalidate,_=void 0===k?function(){}:k,x=n.addEffect,z=o(void 0),O=o(!1),V=m(function(n){return n.scroll});i(t,function(){return{start:function(){var n;return null==(n=z.current)?void 0:n.start()},stop:function(){var n;return null==(n=z.current)?void 0:n.stop()},on:function(n,t){var e;return null==(e=z.current)?void 0:e.on(n,t)},scrollTo:function(n,t){var e;return null==(e=z.current)?void 0:e.scrollTo(n,t)},raf:function(n){var t;return null==(t=z.current)?void 0:t.raf(n)},__lenis:z.current}});var I=l(function(n){w&&O.current!==n&&(O.current=n,document.documentElement.style.pointerEvents=n?"none":"auto")},[w,O]);return g(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=v)},[]),g(function(){var n,t=document.documentElement,e=document.body,r=document.body.firstElementChild;if(t.classList.toggle("ScrollRig-scrollHtml",C),e.classList.toggle("ScrollRig-scrollWrapper",C),C&&Object.assign(j,{smoothTouch:!0,wrapper:e,content:r}),z.current=new a(h({orientation:y?"horizontal":"vertical"},j,u?{}:{smoothWheel:!1,syncTouch:!1,smoothTouch:!1})),x)n=x(function(n){var t;return null==(t=z.current)?void 0:t.raf(n)});else{var o,i=function(n){var t;null==(t=z.current)||t.raf(n),o=requestAnimationFrame(i)};o=requestAnimationFrame(i),n=function(){return cancelAnimationFrame(o)}}return function(){var t;n(),null==(t=z.current)||t.destroy()}},[u]),g(function(){var n=z.current,t=function(n){var t=n.scroll,e=n.limit,r=n.velocity,o=n.direction,i=n.progress,l=y?t:0;R&&(V.y=y?0:t,V.x=l,V.limit=e,V.velocity=r,V.direction=o,V.progress=i||0),Math.abs(r)>1.5&&I(!0),Math.abs(r)<1&&I(!1),T&&T({scroll:t,limit:e,velocity:r,direction:o,progress:i}),_()};return null==n||n.on("scroll",t),R&&(V.scrollDirection=y?"horizontal":"vertical",m.setState({__lenis:n,scrollTo:function(){null==n||n.scrollTo.apply(n,[].slice.call(arguments))},onScroll:function(t){return null==n||n.on("scroll",t),null==n||n.emit(),function(){return null==n?void 0:n.off("scroll",t)}}}),m.getState().scroll.y=window.scrollY,m.getState().scroll.x=window.scrollX),null==n||n.emit(),function(){null==n||n.off("scroll",t),R&&m.setState({__lenis:void 0,onScroll:function(){return function(){}},scrollTo:function(){}})}},[u]),g(function(){var n=function(){return _()},t=function(){return I(!1)};return window.addEventListener("pointermove",t),window.addEventListener("pointerdown",t),window.addEventListener("wheel",n),function(){window.removeEventListener("pointermove",t),window.removeEventListener("pointerdown",t),window.removeEventListener("wheel",n)}},[]),e(function(){return R&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",u),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!u),m.setState({hasSmoothScrollbar:u})),function(){document.documentElement.classList.remove("js-smooth-scrollbar-enabled"),document.documentElement.classList.remove("js-smooth-scrollbar-disabled")}},[u]),e(function(){var n,t;d?null==(n=z.current)||n.stop():null==(t=z.current)||t.start()},[d]),r?r({}):null}),y="undefined"!=typeof window;function S(n,t,e,r,o){return r+(n-t)*(o-r)/(e-t)}function C(n,t){var r=function(){var n={}.debounce,t=void 0===n?0:n,r=c({width:y?window.innerWidth:Infinity,height:y?window.innerHeight:Infinity}),o=r[0],i=r[1];return e(function(){var n=document.getElementById("ScrollRig-canvas");function e(){var t=n?n.clientWidth:window.innerWidth,e=n?n.clientHeight:window.innerHeight;t===o.width&&e===o.height||i({width:t,height:e})}var r,l=f.debounce(e,t),c=window.ResizeObserver||d;return n?(r=new c(l)).observe(n):window.addEventListener("resize",l),e(),function(){var n;window.removeEventListener("resize",l),null==(n=r)||n.disconnect()}},[o,i]),o}(),i=w(),a=i.scroll,p=i.onScroll,b=m(function(n){return n.scaleMultiplier}),C=m(function(n){return n.pageReflow}),E=m(function(n){return n.debug}),R=u(function(){var n={rootMargin:"0%",threshold:0,autoUpdate:!0},e=t||{};return Object.keys(e).map(function(t,r){void 0!==e[t]&&(n[t]=e[t])}),n},[t]),T=R.autoUpdate,L=R.wrapper,j=s({rootMargin:R.rootMargin,threshold:R.threshold}),k=j.ref,_=j.inView;g(function(){k(n.current)},[n,null==n?void 0:n.current]);var x=c(v.vec3(0,0,0)),z=x[0],O=x[1],V=o({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,I=o({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,U=c(I),M=U[0],P=U[1],F=o({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,B=o(v.vec3(0,0,0)).current;g(function(){var t,e=null==(t=n.current)?void 0:t.getBoundingClientRect();if(e){var o=L?L.scrollTop:window.scrollY,i=L?L.scrollLeft:window.scrollX;I.top=e.top+o,I.bottom=e.bottom+o,I.left=e.left+i,I.right=e.right+i,I.width=e.width,I.height=e.height,P(h({},I)),O(v.vec3((null==I?void 0:I.width)*b,(null==I?void 0:I.height)*b,1)),E&&console.log("useTracker.getBoundingClientRect:",I,"intialScroll:",{initialY:o,initialX:i},"size:",r,"pageReflow:",C)}},[n,r,C,b,E]);var D=l(function(t){var e=void 0===t?{}:t,o=e.onlyUpdateInViewport;if(n.current&&(void 0===o||!o||V.inViewport)){var i=e.scroll||a;!function(n,t,e,r){n.top=t.top-(e.y||0),n.bottom=t.bottom-(e.y||0),n.left=t.left-(e.x||0),n.right=t.right-(e.x||0),n.width=t.width,n.height=t.height,n.x=n.left+.5*t.width-.5*r.width,n.y=n.top+.5*t.height-.5*r.height,n.positiveYUpBottom=r.height-n.bottom}(F,I,i,r),function(n,t,e){n.x=t.x*e,n.y=-1*t.y*e}(B,F,b);var l="horizontal"===i.scrollDirection,c=l?"width":"height",u=r[c]-F[l?"left":"top"];V.progress=S(u,0,r[c]+F[c],0,1),V.visibility=S(u,0,F[c],0,1),V.viewport=S(u,0,r[c],0,1)}},[n,r,b,a]);return g(function(){V.inViewport=_,D({onlyUpdateInViewport:!1}),E&&console.log("useTracker.inViewport:",_,"update()")},[_]),g(function(){D({onlyUpdateInViewport:!1}),E&&console.log("useTracker.update on resize/reflow")},[D,C]),e(function(){if(T)return p(function(n){return D({onlyUpdateInViewport:!0})})},[T,D,p]),{scale:z,inViewport:_,rect:M,bounds:F,position:B,scrollState:V,update:D}}export{b as SmoothScrollbar,w as useScrollbar,C as useTracker};
//# sourceMappingURL=scrollbar.module.js.map
