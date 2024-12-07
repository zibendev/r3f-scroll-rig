import e from"zustand";import{useLayoutEffect as t,useEffect as o,forwardRef as r,useRef as n,useImperativeHandle as l,useCallback as i,useState as s,useMemo as c}from"react";import a from"lenis";import{useInView as d}from"react-intersection-observer";import{ResizeObserver as u}from"@juggle/resize-observer";import h from"debounce";import v from"vecn";function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)({}).hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},m.apply(null,arguments)}function p(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}const w=e(e=>({debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:()=>e(()=>({globalRenderQueue:!1})),isCanvasAvailable:!1,hasSmoothScrollbar:!1,canvasChildren:{},frameCallbacks:[],addFrameCallback:t=>e(({frameCallbacks:e})=>({frameCallbacks:[...e,t]})),removeFrameCallback:t=>e(({frameCallbacks:e})=>(e.splice(e.indexOf(t),1),{frameCallbacks:e})),renderToCanvas:(t,o,r={})=>e(({canvasChildren:e})=>Object.getOwnPropertyDescriptor(e,t)?(e[t].instances+=1,e[t].props.inactive=!1,{canvasChildren:e}):{canvasChildren:m({},e,{[t]:{mesh:o,props:r,instances:1}})}),updateCanvas:(t,o)=>e(({canvasChildren:e})=>{if(!e[t])return;const{[t]:{mesh:r,props:n,instances:l}}=e;return{canvasChildren:m({},e,{[t]:{mesh:r,props:m({},n,o),instances:l}})}}),removeFromCanvas:(t,o=!0)=>e(({canvasChildren:e})=>{var r;return(null==(r=e[t])?void 0:r.instances)>1?(e[t].instances-=1,{canvasChildren:e}):o?{canvasChildren:function(e,t){if(null==e)return{};var o={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;o[r]=e[r]}return o}(e,[t].map(p))}:(e[t].instances=0,e[t].props.inactive=!0,{canvasChildren:m({},e)})}),pageReflow:0,requestReflow:()=>{e(e=>({pageReflow:e.pageReflow+1}))},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},__lenis:void 0,scrollTo:()=>{},onScroll:()=>()=>{}})),f=()=>({enabled:w(e=>e.hasSmoothScrollbar),scroll:w(e=>e.scroll),scrollTo:w(e=>e.scrollTo),onScroll:w(e=>e.onScroll),__lenis:w(e=>e.__lenis)}),g="undefined"!=typeof window?t:o,b=r(({children:e,enabled:t=!0,locked:r=!1,scrollRestoration:s="auto",disablePointerOnScroll:c=!0,horizontal:d=!1,scrollInContainer:u=!1,updateGlobalState:h=!0,onScroll:v,config:p={},invalidate:f=()=>{},addEffect:b},y)=>{const S=n(void 0),C=n(!1),E=w(e=>e.scroll);l(y,()=>({start:()=>{var e;return null==(e=S.current)?void 0:e.start()},stop:()=>{var e;return null==(e=S.current)?void 0:e.stop()},on:(e,t)=>{var o;return null==(o=S.current)?void 0:o.on(e,t)},scrollTo:(e,t)=>{var o;return null==(o=S.current)?void 0:o.scrollTo(e,t)},raf:e=>{var t;return null==(t=S.current)?void 0:t.raf(e)},__lenis:S.current}));const R=i(e=>{c&&C.current!==e&&(C.current=e,document.documentElement.style.pointerEvents=e?"none":"auto")},[c,C]);return g(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration=s)},[]),g(()=>{const e=document.documentElement,o=document.body,r=document.body.firstElementChild;let n;if(e.classList.toggle("ScrollRig-scrollHtml",u),o.classList.toggle("ScrollRig-scrollWrapper",u),u&&Object.assign(p,{smoothTouch:!0,wrapper:o,content:r}),S.current=new a(m({orientation:d?"horizontal":"vertical"},p,t?{}:{smoothWheel:!1,syncTouch:!1,smoothTouch:!1})),b)n=b(e=>{var t;return null==(t=S.current)?void 0:t.raf(e)});else{let l;function i(e){var t;null==(t=S.current)||t.raf(e),l=requestAnimationFrame(i)}l=requestAnimationFrame(i),n=()=>cancelAnimationFrame(l)}return()=>{var e;n(),null==(e=S.current)||e.destroy()}},[t]),g(()=>{const e=S.current,t=({scroll:e,limit:t,velocity:o,direction:r,progress:n})=>{const l=d?e:0;h&&(E.y=d?0:e,E.x=l,E.limit=t,E.velocity=o,E.direction=r,E.progress=n||0),Math.abs(o)>1.5&&R(!0),Math.abs(o)<1&&R(!1),v&&v({scroll:e,limit:t,velocity:o,direction:r,progress:n}),f()};return null==e||e.on("scroll",t),h&&(E.scrollDirection=d?"horizontal":"vertical",w.setState({__lenis:e,scrollTo:(...t)=>{null==e||e.scrollTo(...t)},onScroll:t=>(null==e||e.on("scroll",t),null==e||e.emit(),()=>null==e?void 0:e.off("scroll",t))}),w.getState().scroll.y=window.scrollY,w.getState().scroll.x=window.scrollX),null==e||e.emit(),()=>{null==e||e.off("scroll",t),h&&w.setState({__lenis:void 0,onScroll:()=>()=>{},scrollTo:()=>{}})}},[t]),g(()=>{const e=()=>f(),t=()=>R(!1);return window.addEventListener("pointermove",t),window.addEventListener("pointerdown",t),window.addEventListener("wheel",e),()=>{window.removeEventListener("pointermove",t),window.removeEventListener("pointerdown",t),window.removeEventListener("wheel",e)}},[]),o(()=>(h&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",t),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!t),w.setState({hasSmoothScrollbar:t})),()=>{document.documentElement.classList.remove("js-smooth-scrollbar-enabled"),document.documentElement.classList.remove("js-smooth-scrollbar-disabled")}),[t]),o(()=>{var e,t;r?null==(e=S.current)||e.stop():null==(t=S.current)||t.start()},[r]),e?e({}):null}),y="undefined"!=typeof window;function S(e,t,o,r,n){return r+(e-t)*(n-r)/(o-t)}function C(e,t){const r=function({debounce:e=0}={}){const[t,r]=s({width:y?window.innerWidth:Infinity,height:y?window.innerHeight:Infinity});return o(()=>{const o=document.getElementById("ScrollRig-canvas");function n(){const e=o?o.clientWidth:window.innerWidth,n=o?o.clientHeight:window.innerHeight;e===t.width&&n===t.height||r({width:e,height:n})}const l=h.debounce(n,e),i=window.ResizeObserver||u;let s;return o?(s=new i(l),s.observe(o)):window.addEventListener("resize",l),n(),()=>{var e;window.removeEventListener("resize",l),null==(e=s)||e.disconnect()}},[t,r]),t}(),{scroll:l,onScroll:a}=f(),p=w(e=>e.scaleMultiplier),b=w(e=>e.pageReflow),C=w(e=>e.debug),{rootMargin:E,threshold:R,autoUpdate:T,wrapper:L}=c(()=>{const e={rootMargin:"0%",threshold:0,autoUpdate:!0},o=t||{};return Object.keys(o).map((t,r)=>{void 0!==o[t]&&(e[t]=o[t])}),e},[t]),{ref:j,inView:k}=d({rootMargin:E,threshold:R});g(()=>{j(e.current)},[e,null==e?void 0:e.current]);const[_,x]=s(v.vec3(0,0,0)),z=n({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,O=n({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,[V,I]=s(O),U=n({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,M=n(v.vec3(0,0,0)).current;g(()=>{var t;const o=null==(t=e.current)?void 0:t.getBoundingClientRect();if(!o)return;const n=L?L.scrollTop:window.scrollY,l=L?L.scrollLeft:window.scrollX;O.top=o.top+n,O.bottom=o.bottom+n,O.left=o.left+l,O.right=o.right+l,O.width=o.width,O.height=o.height,I(m({},O)),x(v.vec3((null==O?void 0:O.width)*p,(null==O?void 0:O.height)*p,1)),C&&console.log("useTracker.getBoundingClientRect:",O,"intialScroll:",{initialY:n,initialX:l},"size:",r,"pageReflow:",b)},[e,r,b,p,C]);const P=i(({onlyUpdateInViewport:t=!1,scroll:o}={})=>{if(!e.current||t&&!z.inViewport)return;const n=o||l;!function(e,t,o,r){e.top=t.top-(o.y||0),e.bottom=t.bottom-(o.y||0),e.left=t.left-(o.x||0),e.right=t.right-(o.x||0),e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*r.width,e.y=e.top+.5*t.height-.5*r.height,e.positiveYUpBottom=r.height-e.bottom}(U,O,n,r),function(e,t,o){e.x=t.x*o,e.y=-1*t.y*o}(M,U,p);const i="horizontal"===n.scrollDirection,s=i?"width":"height",c=r[s]-U[i?"left":"top"];z.progress=S(c,0,r[s]+U[s],0,1),z.visibility=S(c,0,U[s],0,1),z.viewport=S(c,0,r[s],0,1)},[e,r,p,l]);return g(()=>{z.inViewport=k,P({onlyUpdateInViewport:!1}),C&&console.log("useTracker.inViewport:",k,"update()")},[k]),g(()=>{P({onlyUpdateInViewport:!1}),C&&console.log("useTracker.update on resize/reflow")},[P,b]),o(()=>{if(T)return a(e=>P({onlyUpdateInViewport:!0}))},[T,P,a]),{scale:_,inViewport:k,rect:V,bounds:U,position:M,scrollState:z,update:P}}export{b as SmoothScrollbar,f as useScrollbar,C as useTracker};
//# sourceMappingURL=scrollbar.modern.js.map
