import e from"zustand";import{useLayoutEffect as t,useEffect as r,forwardRef as n,useRef as o,useImperativeHandle as i,useCallback as l,useState as c,useMemo as u}from"react";import a from"@studio-freight/lenis";import{useInView as s}from"react-intersection-observer";import{ResizeObserver as d}from"@juggle/resize-observer";import f from"debounce";import v from"vecn";import{Vector2 as h}from"three";import{invalidate as p}from"@react-three/fiber";function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}function g(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var m={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},b=e(function(e){return{debug:!1,scaleMultiplier:m.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:m.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,r,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:w({},i,((o={})[t]={mesh:r,props:n,instances:1},o))}})},updateCanvas:function(t,r){return e(function(e){var n,o=e.canvasChildren;if(o[t]){var i=o[t],l=i.instances;return{canvasChildren:w({},o,((n={})[t]={mesh:i.mesh,props:w({},i.props,r),instances:l},n))}}})},removeFromCanvas:function(t,r){return void 0===r&&(r=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[t])?void 0:n.instances)>1?(o[t].instances-=1,{canvasChildren:o}):r?{canvasChildren:function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(o,[t].map(g))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:w({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),y=function(){return{enabled:b(function(e){return e.hasSmoothScrollbar}),scroll:b(function(e){return e.scroll}),scrollTo:b(function(e){return e.scrollTo}),onScroll:b(function(e){return e.onScroll})}},S="undefined"!=typeof window?t:r,R=n(function(e,t){var n=e.children,c=e.enabled,u=void 0===c||c,s=e.locked,d=void 0!==s&&s,f=e.scrollRestoration,v=void 0===f?"auto":f,h=e.disablePointerOnScroll,p=void 0===h||h,g=e.horizontal,m=void 0!==g&&g,y=e.scrollInContainer,R=void 0!==y&&y,C=e.updateGlobalState,T=void 0===C||C,L=e.onScroll,E=e.config,I=void 0===E?{}:E,O=e.invalidate,V=void 0===O?function(){}:O,P=e.addEffect,_=o(),A=o(),j=o(!1),x=b(function(e){return e.scroll});i(t,function(){return{start:function(){var e;return null==(e=A.current)?void 0:e.start()},stop:function(){var e;return null==(e=A.current)?void 0:e.stop()},on:function(e,t){var r;return null==(r=A.current)?void 0:r.on(e,t)},once:function(e,t){var r;return null==(r=A.current)?void 0:r.once(e,t)},off:function(e,t){var r;return null==(r=A.current)?void 0:r.off(e,t)},notify:function(){var e;return null==(e=A.current)?void 0:e.notify()},scrollTo:function(e,t){var r;return null==(r=A.current)?void 0:r.scrollTo(e,t)},raf:function(e){var t;return null==(t=A.current)?void 0:t.raf(e)},__lenis:A.current}});var z=l(function(e){p&&_.current&&j.current!==e&&(j.current=e,_.current.style.pointerEvents=e?"none":"auto")},[p,_,j]);return S(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=v)},[]),S(function(){var e,t,r=document.documentElement,n=document.body,o=document.body.firstElementChild;return r.classList.toggle("ScrollRig-scrollHtml",R),n.classList.toggle("ScrollRig-scrollWrapper",R),R&&Object.assign(I,{smoothTouch:!0,wrapper:n,content:o}),A.current=new a(w({direction:m?"horizontal":"vertical"},I)),P?e=P(function(e){var t;return null==(t=A.current)?void 0:t.raf(e)}):(t=requestAnimationFrame(function e(r){var n;null==(n=A.current)||n.raf(r),t=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(t)}),function(){var t;e(),null==(t=A.current)||t.destroy()}},[]),S(function(){var e,t,r;return null==(e=A.current)||e.on("scroll",function(e){var t=e.scroll,r=e.limit,n=e.velocity,o=e.direction,i=e.progress,l=m?t:0;T&&(x.y=m?0:t,x.x=l,x.limit=r,x.velocity=n,x.direction=o,x.progress=i),Math.abs(n)>1.5&&z(!0),Math.abs(n)<1&&z(!1),L&&L({scroll:t,limit:r,velocity:n,direction:o,progress:i}),V()}),T&&(x.scrollDirection=m?"horizontal":"vertical",b.setState({scrollTo:null==(r=A.current)?void 0:r.scrollTo}),b.setState({onScroll:function(e){var t;return null==(t=A.current)||t.on("scroll",e),function(){var t;return null==(t=A.current)?void 0:t.off("scroll",e)}}}),b.getState().scroll.y=window.scrollY,b.getState().scroll.x=window.scrollX),null==(t=A.current)||t.notify(),function(){var e;null==(e=A.current)||e.off("scroll")}},[]),S(function(){var e=function(){return V()},t=function(){return z(!1)};return window.addEventListener("pointermove",t),window.addEventListener("pointerdown",t),window.addEventListener("wheel",e),function(){var r;null==(r=A.current)||r.off("scroll"),window.removeEventListener("pointermove",t),window.removeEventListener("pointerdown",t),window.removeEventListener("wheel",e)}},[]),r(function(){T&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",u),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!u),b.setState({hasSmoothScrollbar:u}))},[u]),r(function(){var e,t;d?null==(e=A.current)||e.stop():null==(t=A.current)||t.start()},[d]),n({ref:_})}),C="undefined"!=typeof window;function T(e,t,r,n,o){return n+(e-t)*(o-n)/(r-t)}function L(e,t){e&&(!1===t?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return L(e,t)}))}var E=new h,I=function(e){void 0===e&&(e=[0]),b.getState().globalRenderQueue=b.getState().globalRenderQueue||[0],b.getState().globalRenderQueue=[].concat(b.getState().globalRenderQueue||[],e)},O=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,c=e.height,u=e.layer,a=void 0===u?0:u,s=e.autoClear,d=e.clearDepth,f=void 0!==d&&d;r&&n&&(t.autoClear=void 0!==s&&s,t.setScissor(o,i,l,c),t.setScissorTest(!0),n.layers.set(a),f&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1))},V=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,c=e.height,u=e.layer,a=void 0===u?0:u,s=e.scissor,d=void 0===s||s,f=e.autoClear,v=void 0!==f&&f,h=e.clearDepth,p=void 0!==h&&h;r&&n&&(t.getSize(E),t.autoClear=v,t.setViewport(o,i,l,c),t.setScissor(o,i,l,c),t.setScissorTest(d),n.layers.set(a),p&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1),t.setViewport(0,0,E.x,E.y))},P=function(e,t,r,n){void 0===r&&(r=0),m.preloadQueue.push(function(o,i,l){o.setScissorTest(!1),L(e||i,!1),t.layers.set(r),o.render(e||i,t||l),L(e||i,!0),n&&n()}),p()};function _(e,t){var n=function(e){var t={}.debounce,n=void 0===t?0:t,o=c({width:C?window.innerWidth:Infinity,height:C?window.innerHeight:Infinity}),i=o[0],l=o[1];return r(function(){var e=document.getElementById("ScrollRig-canvas");function t(){var t=e?e.clientWidth:window.innerWidth,r=e?e.clientHeight:window.innerHeight;t===i.width&&r===i.height||l({width:t,height:r})}var r,o=f.debounce(t,n),c=window.ResizeObserver||d;return e?(r=new c(o)).observe(e):window.addEventListener("resize",o),t(),function(){var e;window.removeEventListener("resize",o),null==(e=r)||e.disconnect()}},[i,l]),i}(),i=function(){var e=b(function(e){return e.isCanvasAvailable}),t=b(function(e){return e.hasSmoothScrollbar}),n=b(function(e){return e.requestReflow}),o=b(function(e){return e.pageReflow}),i=b(function(e){return e.debug}),l=b(function(e){return e.scaleMultiplier});return r(function(){i&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:i,isCanvasAvailable:e,hasSmoothScrollbar:t,scaleMultiplier:l,preloadScene:P,requestRender:I,renderScissor:O,renderViewport:V,reflow:n,reflowCompleted:o}}(),a=i.debug,h=y(),p=h.scroll,g=h.onScroll,m=b(function(e){return e.scaleMultiplier}),R=b(function(e){return e.pageReflow}),L=u(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},r=t||{};return Object.keys(r).map(function(t,n){void 0!==r[t]&&(e[t]=r[t])}),e},[t]),E=L.autoUpdate,_=L.wrapper,A=s({rootMargin:L.rootMargin,threshold:L.threshold}),j=A.ref,x=A.inView;S(function(){j(e.current)},[e]);var z=c(v.vec3(0,0,0)),D=z[0],U=z[1],M=o({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,Y=o({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,Q=c(Y),F=Q[0],B=Q[1],k=o({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,q=o(v.vec3(0,0,0)).current;S(function(){var t,r=null==(t=e.current)?void 0:t.getBoundingClientRect();if(r){var o=_?_.scrollTop:window.scrollY,i=_?_.scrollLeft:window.scrollX;Y.top=r.top+o,Y.bottom=r.bottom+o,Y.left=r.left+i,Y.right=r.right+i,Y.width=r.width,Y.height=r.height,B(w({},Y)),U(v.vec3((null==Y?void 0:Y.width)*m,(null==Y?void 0:Y.height)*m,1)),a&&console.log("useTracker.getBoundingClientRect:",Y,"intialScroll:",{initialY:o,initialX:i},"size:",n,"pageReflow:",R)}},[e,n,R,m,a]);var W=l(function(t){var r=void 0===t?{}:t,o=r.onlyUpdateInViewport;if(e.current&&(void 0===o||!o||M.inViewport)){var i=r.scroll||p;!function(e,t,r,n){e.top=t.top-(r.y||0),e.bottom=t.bottom-(r.y||0),e.left=t.left-(r.x||0),e.right=t.right-(r.x||0),e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*n.width,e.y=e.top+.5*t.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(k,Y,i,n),function(e,t,r){e.x=t.x*r,e.y=-1*t.y*r}(q,k,m);var l="horizontal"===i.scrollDirection,c=l?"width":"height",u=n[c]-k[l?"left":"top"];M.progress=T(u,0,n[c]+k[c],0,1),M.visibility=T(u,0,k[c],0,1),M.viewport=T(u,0,n[c],0,1)}},[e,n,m,p]);return S(function(){M.inViewport=x,W({onlyUpdateInViewport:!1}),a&&console.log("useTracker.inViewport:",x,"update()")},[x]),S(function(){W({onlyUpdateInViewport:!1}),a&&console.log("useTracker.update on resize/reflow")},[W,R]),r(function(){if(E)return g(function(e){return W({onlyUpdateInViewport:!0})})},[E,W,g]),{rect:F,bounds:k,scale:D,position:q,scrollState:M,inViewport:x,update:W}}export{R as SmoothScrollbar,y as useScrollbar,_ as useTracker};
//# sourceMappingURL=scrollbar.module.js.map
