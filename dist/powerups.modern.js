import e,{useMemo as t,useEffect as r,forwardRef as i,useRef as n,useImperativeHandle as o}from"react";import{Color as s,Vector2 as l}from"three";import{useThree as a,useFrame as u}from"@react-three/fiber";import{Text as c}from"@react-three/drei";import{useScrollRig as m,useScrollbar as h,useImageAsTexture as p,ScrollScene as d}from"@14islands/r3f-scroll-rig";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},f.apply(this,arguments)}function g(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t.indexOf(r=o[i])>=0||(n[r]=e[r]);return n}const v=["el","children","material","scale","font","fontOffsetY","fontOffsetX","overrideEmissive","color"],y=i=>{let{el:n,children:o,material:l,scale:u,font:h,fontOffsetY:p=0,fontOffsetX:d=0,overrideEmissive:y=!1,color:w}=i,b=g(i,v);const{size:S}=a(),{scaleMultiplier:E}=m(),{textColor:A,fontSize:x,textAlign:_,lineHeight:N,letterSpacing:z}=t(()=>{if(!n.current)return{};const e=window.getComputedStyle(n.current);return{letterSpacing:(parseFloat(e.letterSpacing)||0)/parseFloat(e.fontSize),lineHeight:(parseFloat(e.lineHeight)||0)/parseFloat(e.fontSize),textColor:new s(w||e.color).convertSRGBToLinear(),fontSize:parseFloat(e.fontSize)*E,textAlign:e.textAlign}},[n,S,u,w,E]);r(()=>{l&&y&&(l.emissive=w)},[l,w,y]);let M=0;return"left"===_||"start"===_?M=-.5*u[0]:"right"!==_&&"end"!==_||(M=.5*u[0]),e.createElement(c,f({fontSize:x,maxWidth:u?u[0]:S.width,lineHeight:N,textAlign:_,letterSpacing:z,overflowWrap:"break-word",font:h,color:A,anchorX:_,anchorY:"top",position:[M+x*d,(u?.5*u[1]:.5*S.height)+x*p,0],material:l},b),o)},w=["el","scale","scrollState","vertexShader","fragmentShader","invalidateFrameLoop","widthSegments","heightSegments"],b=i((i,c)=>{let{el:d,scale:v,scrollState:y,vertexShader:b,fragmentShader:S,invalidateFrameLoop:E=!1,widthSegments:A=128,heightSegments:x=128}=i,_=g(i,w);const N=n(null),z=n(null);o(c,()=>z.current);const{invalidate:M,gl:T,size:k}=a(),O=a(e=>e.viewport.dpr),{scroll:V}=h(),{scaleMultiplier:R}=m(),F=p(d),P=t(()=>({u_color:{value:new s("black")},u_time:{value:0},u_pixelRatio:{value:O},u_progress:{value:0},u_visibility:{value:0},u_viewport:{value:0},u_velocity:{value:0},u_res:{value:new l},u_rect:{value:new l},u_size:{value:new l},u_texture:{value:null},u_loaded:{value:!1},u_scaleMultiplier:{value:R}}),[O]);r(()=>{F&&N.current&&(N.current.uniforms.u_texture.value=F,N.current.uniforms.u_size.value.set(F.image.width,F.image.height),N.current.uniforms.u_loaded.value=!0)},[F,T]),r(()=>{N.current&&(N.current.uniforms.u_res.value.set(k.width,k.height),N.current.uniforms.u_rect.value.set(null==v?void 0:v[0],null==v?void 0:v[1]))},[k,v]),u((e,t)=>{y.inViewport&&z.current&&N.current&&N.current.uniforms.u_loaded.value&&(N.current.uniforms.u_time.value+=t,N.current.uniforms.u_rect.value.set(z.current.scale.x,z.current.scale.y),N.current.uniforms.u_velocity.value=V.velocity,N.current.uniforms.u_progress.value=y.progress,N.current.uniforms.u_visibility.value=y.visibility,N.current.uniforms.u_viewport.value=y.viewport,E&&M())});const L=t(()=>[{vertexShader:b,fragmentShader:S}],[b,S]);return e.createElement(e.Fragment,null,e.createElement("mesh",f({ref:z},_),e.createElement("planeGeometry",{attach:"geometry",args:[1,1,A,x]}),e.createElement("shaderMaterial",{ref:N,args:L,transparent:!0,uniforms:P})))}),S=["children","speed"],E=({children:t,scrollState:r,parallax:i})=>{const o=n(null),s=a(e=>e.size),{scaleMultiplier:l}=m();return u(()=>{r.inViewport&&(o.current.position.y=i*(2*r.progress-1)*l*s.height)}),e.createElement("mesh",{ref:o},t)},A=t=>{let{children:r,speed:i=1}=t,n=g(t,S);const o=i-1;return e.createElement(d,f({scissor:!1,inViewportMargin:200*Math.max(0,.5)+50+"%"},n),t=>e.createElement(E,f({parallax:o},t),r(t)))};let x=new Proxy({},{get:function(e,t){return e.hasOwnProperty(t)||(e[t]=z(t)),e[t]}});class _ extends Array{constructor(e,t){if(!(t=O(t)).every(e=>"Number"===R(e)))throw new TypeError("All arguments must be numbers.");if(t.length>1&&t.length!==e)throw new Error("Argument list must be empty, have a single number, or have a length equal to the dimension.");0===t.length&&(t=[0]),1===t.length&&"Number"===R(t[0])&&(t=Array(e).fill(t[0])),e>1?super(...t):(super(1),this[0]=t[0]),Reflect.defineProperty(this,"pop",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"push",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"shift",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"unshift",{value:void 0,enumerable:!1})}get magnitude(){return this.pnorm(2)}div(e){k(e,this.dim,!0),"Number"===R(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.length;++r)t[r]=this[r]/e[r];return x[this.dim](t)}minus(e){k(e,this.dim,!0),"Number"===R(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]-e[r];return x[this.dim](t)}neg(){return x[this.dim](this.times(-1))}plus(e){k(e,this.dim,!0),"Number"===R(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]+e[r];return x[this.dim](t)}pow(e){let t=[];for(let r=0;r<this.dim;++r)t[r]=Math.pow(this[r],e);return x[this.dim](t)}times(e){k(e,this.dim,!0),"Number"===R(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]*e[r];return x[this.dim](t)}dot(e){k(e,this.dim);let t=0;for(let r=0;r<this.dim;++r)t+=this[r]*e[r];return t}normalize(){return this.div(this.magnitude)}pnorm(e){let t=0;for(let r=0;r<this.dim;++r)t+=Math.pow(Math.abs(this[r]),e);return Math.pow(t,1/e)}reflect(e){const t=e.normalize();return this.minus(t.times(2*this.dot(t)))}argmax(){const e=this.max();return this.reduce((t,r,i)=>r===e?t.concat([i]):t,[])}argmin(){const e=this.min();return this.reduce((t,r,i)=>r===e?t.concat([i]):t,[])}choose(e){if(!Array.isArray(e))throw new TypeError("Argument must be a list of indices.");if(!e.every(e=>e<this.dim&&V(e.toString())))throw new RangeError("All elements of argument must be valid indices.");let t=[];return e.forEach(e=>t.push(this[e])),x[t.length](t)}copy(){return x[this.dim](this)}equals(e){return e.length===this.dim&&e.every((e,t)=>this[t]===e)}approximatelyEquals(e,t=1e-8){return e.length===this.dim&&e.every((e,r)=>Math.abs(this[r]-e)<t)}max(){return Math.max(...this)}min(){return Math.min(...this)}sum(){return this.reduce((e,t)=>e+t,0)}toArray(){return Array.from(this)}concat(...e){const t=super.concat.apply(this.toArray(),e);return x[t.length](t)}filter(...e){const t=super.filter.apply(this.toArray(),e);return t.length>0?x[t.length](t):t}map(...e){const t=super.map(...e);return t.every(e=>"Number"===R(e))?t:t.toArray()}slice(...e){const t=super.slice.apply(this.toArray(),e);return t.length>0?x[t.length](t):t}splice(...e){let t=this.toArray();if(t.splice(...e),t.length!==this.dim)throw new Error("All removed elements must be replaced.");if(!t.every(e=>"Number"===R(e)))throw new TypeError("All elements must be numbers.");t.forEach((e,t)=>{this[t]=e})}toString(){return this.reduce((e,t,r)=>e+t+(r===this.dim-1?" ":", "),"[ ")+"]"}}const N={set:function(e,t,r){if("length"===t)return!1;if(V(t)){if(Number(t)>=e.dim)throw new RangeError("Vector may not have more elements than dimension.");if("Number"!==R(r))throw new TypeError("Vectors may only contain numbers.");return e[t]=r,!0}const i=T(t.toString());return!!(e.dim<=4&&i)&&(function(e,t,r,i){if(1===t.length){if("Number"!==R(i))throw new TypeError("Must set to a number");return void(e[r[t]]=i)}if(!Array.isArray(i))throw new TypeError("Right-hand side must be an array.");if(t.length!==i.length)throw new TypeError("Right-hand side must have matching length.");if(!i.every(e=>"Number"===R(e)))throw new TypeError("All new values must be numbers.");if(t.split("").some(t=>r[t]>=e.dim))return;let n=!0;for(let e=0,r={};e<t.length;++e){if(r.hasOwnProperty(t[e])){n=!1;break}r[t[e]]=!0}if(!n)throw new SyntaxError("Swizzle assignment does not allow symbols to be repeated.");t.split("").map(e=>r[e]).forEach((t,r)=>{e[t]=i[r]})}(e,t.toString(),i,r),!0)},get:function(e,t){const r=T(t.toString());return e.dim<=4&&r?function(e,t,r){const i=t.length;if(1===i)return e[r[t]];let n=t.split("").reduce((t,i)=>{let n=r[i];return t&&n<e.dim?t.concat([e[n]]):void 0},[]);return n?new x[i](...n):void 0}(e,t,r):e[t]}};function z(e){if(!((e=Number(e))in x)){if(isNaN(e))throw new TypeError("Dimension must be coercible to a number.");if(e<=0)throw new RangeError("Dimension must be positive.");if(!Number.isInteger(e))throw new RangeError("Dimension must be positive.");let t="vec"+e,r={[t]:class extends _{constructor(...t){if(1===t.length&&t[0]instanceof _){if(t[0].dim>e)throw new TypeError("Cannot demote vectors.");t=function(e,t){return[...Array(t)].map((t,r)=>r<e.length?e[r]:0)}(t[0].toArray(),e)}super(e,t),Reflect.defineProperty(this,"dim",{value:e,writable:!1,enumerable:!1})}}}[t];x[e]=function(...e){let t=new r(...e);return Object.preventExtensions(t),new Proxy(t,N)}}return x[e]}const M=[{x:0,y:1,z:2,w:3},{r:0,g:1,b:2,a:3},{s:0,t:1,p:2,q:3}];function T(e){return M.find(t=>e.split("").every(e=>e in t))}function k(e,t,r=!1){if(!(r&&"Number"===R(e)||e.length&&e.length===t))throw new TypeError(`Invalid argument. Input must have matching dimension${r?"or be a scalar":""}.`)}function O(e){return e instanceof Array&&1===e.length&&e[0]instanceof Array?O(e[0]):e}function V(e){return!isNaN(e)&&Number(e).toString()===e&&Number.isInteger(Number(e))&&Number(e)>=0}function R(e){return Object.prototype.toString.call(e).slice(8,-1)}var F={getVecType:z,isVec:function(e){return e instanceof _},vec2:x[2],vec3:x[3],vec4:x[4],add:function(...e){const t=e[0].dim;if(!e.every(e=>e.dim===t))throw new TypeError("All vectors must have the same dimension.");return e.reduce((e,t)=>e.plus(t),x[t]())},multiply:function(...e){const t=e[0].dim;if(!e.every(e=>e.dim===t))throw new TypeError("All vectors must have the same dimension.");return e.reduce((e,t)=>e.times(t),x[t](1))},lerp:function(e,t,r){if(e.dim!==t.dim)throw new TypeError("Vectors must have the same dimension.");return r=r<0?0:r>1?1:r,e.plus(t.minus(e).times(r))},slerp:function(e,t,r){if(e.dim!==t.dim)throw new TypeError("Vectors must have the same dimension.");r=r<0?0:r>1?1:r;let i=e.normalize().dot(t.normalize());i=i<-1?-1:i>1?1:i;const n=Math.acos(i)*r,o=t.minus(e.times(i)).normalize(),s=e.magnitude+(t.magnitude-e.magnitude)*r;return e.times(Math.cos(n)).plus(o.times(Math.sin(n))).normalize().times(s)}};const P=["scale"],L=["children","track","stickyLerp","fillViewport"],j=({children:t,childTop:r,childBottom:i,scrollState:o,parentScale:s,childScale:l,scaleMultiplier:c,priority:m,stickyLerp:h=1})=>{const p=n(null),d=a(e=>e.size);return u((e,t)=>{if(!o.inViewport)return;const n=.5*s[1]-.5*l[1];let a=p.current.position.y;a=o.viewport+r/d.height<1?n:o.visibility-i/s[1]<1?-r+n-(o.viewport-1)*d.height*c:.5*-s[1]+.5*l[1],p.current.position.y=function(e,t,r,i,n=60){return o=t,e*(1-(s=void 0===i?r:1-Math.pow(1-r,i/(1/n))))+o*s;var o,s}(p.current.position.y,a,h,t)},m),e.createElement("group",{ref:p},t)},C=r=>{let{children:i,track:o,stickyLerp:s,fillViewport:l}=r,u=g(r,L);const c=a(e=>e.size),{scaleMultiplier:h}=m(),p=n(o.current),v=t(()=>{const e=getComputedStyle(o.current);return"sticky"===e.position?p.current=o.current.parentElement:console.error("StickyScrollScene: tracked element is not position:sticky"),e},[o]);return e.createElement(d,f({track:p},u),((t,r,i,n,{stickyLerp:o,fillViewport:s})=>l=>{let{scale:a}=l,u=g(l,P),c=F.vec3(parseFloat(i.width),parseFloat(i.height),1),m=parseFloat(i.top),h=r.height-m-c[1];return s&&(c=F.vec3(r.width,r.height,1),m=0,h=0),e.createElement(j,f({parentScale:a,childScale:c.times(n),stickyLerp:o,childTop:m,childBottom:h,scaleMultiplier:n},u),t(f({scale:c.times(n)},u)))})(i,c,v,h,{stickyLerp:s,fillViewport:l}))};export{A as ParallaxScrollScene,C as StickyScrollScene,b as WebGLImage,y as WebGLText};
//# sourceMappingURL=powerups.modern.js.map
