(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{106:function(e,t,n){var r=n(107);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(109)(r,a);r.locals&&(e.exports=r.locals)},107:function(e,t,n){(t=e.exports=n(108)(!1)).push([e.i,"@import url(https://rsms.me/inter/inter.css);",""]),t.push([e.i,"html { font-family: 'Inter', sans-serif; }\n@supports (font-variation-settings: normal) {\n  html { font-family: 'Inter var', sans-serif; }\n}\n",""])},64:function(e,t,n){"use strict";var r=n(56),a=n.n(r),i=n(1),o=n.n(i),l=(n(58),n(8)),c=(n(89),n(83)),s=n(90),d=n(135),f=n(60),h=n(134),u=n(65),m=n.n(u),v=n(66),w=n.n(v),p=(n(106),m()("#b81")),g=Object(f.a)({typography:{fontFamily:"Inter",fontSize:14,button:{textTransform:"none"}},palette:{primary:{main:p.indigo[4],dark:p.indigo[5]},secondary:{main:p.gray[2],dark:p.gray[3]},contrastThreshold:3,tonalOffset:.2}}),y=p.gray[0];document.body.style.background=y;var E=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(!1);Object(i.useLayoutEffect)((function(){var n=function(){if(e.current){var n=e.current,r=n.getBoundingClientRect();n.width=devicePixelRatio*r.width,n.height=devicePixelRatio*r.height,t.current=!0}};return n(),window.addEventListener("resize",n),window.addEventListener("scroll",n),function(){window.removeEventListener("resize",n),window.removeEventListener("scroll",n)}}),[e.current]);var n=Object(i.useCallback)((function(n){if(e.current=n,n){var r=n.getContext("2d");!function e(){if(t.current&&r){for(var a=n.width,i=n.height,o=[],l=Object.keys(p),c=0;c<10;++c)o[c]={x:a*Math.random(),y:i*Math.random(),fillStyle:p[l[Math.floor(Math.random()*l.length)]][Math.floor(1+5*Math.random())],speed:.5*a*Math.random(),w:a*Math.random()/16,h:a*Math.random()/16,phase:2*Math.PI*Math.random()};var s=.001*performance.now(),d=s,f=0,h=0;requestAnimationFrame((function e(){a=n.width,i=n.height,function(){var e=.001*performance.now(),t=e-s;s=e,++f,e-d>1&&(h=Math.floor(f/(e-d)+.5),d=e,f=0);for(var n=0;n<10;++n){var r=o[n];r.x+=r.speed*Math.sin(e+r.phase)*t}}(),function(){r.clearRect(0,0,n.width,n.height),r.fillStyle="white",r.fillRect(0,0,n.width,n.height);for(var e=0;e<10;++e){var t=o[e];r.fillStyle=t.fillStyle,r.fillRect(t.x,t.y,t.w,t.h)}r.fillStyle="black",r.font="28px Inter",r.textBaseline="top",r.fillText("fps: "+h,32,32)}(),requestAnimationFrame(e)}))}else requestAnimationFrame(e)}()}}),[]);return o.a.createElement(l.a,{style:{flex:1,backgroundColor:y,alignItems:"center",justifyContent:"center",padding:38}},o.a.createElement(l.a,{style:{borderRadius:6,overflow:"hidden",width:"100%",height:"100%"}},o.a.createElement("canvas",{ref:n,style:{width:"100%",height:"100%"}})))},b=function(e){var t=e.isLandscape;return o.a.createElement(l.a,{style:{flex:.5,backgroundColor:y,padding:38,paddingLeft:t?0:void 0,paddingTop:t?void 0:0}},o.a.createElement(l.a,{style:{flexDirection:"row",paddingBottom:38}},o.a.createElement(s.a,{variant:"contained",color:"primary"},"hai"),o.a.createElement(l.a,{style:{width:24}}),o.a.createElement(s.a,{variant:"contained",color:"secondary"},"ooh")),o.a.createElement(l.a,null,o.a.createElement(d.a,null)))};t.a=function(){var e=Object(i.useState)(window.innerWidth>window.innerHeight?"row":"column"),t=a()(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){var e=function(){r(window.innerWidth>window.innerHeight?"row":"column")};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),o.a.createElement(h.a,{theme:g},o.a.createElement(c.a,{style:{flex:1}},o.a.createElement(w.a,null,o.a.createElement("div",{style:{width:"100%",height:"100%"}},o.a.createElement(l.a,{style:{width:"100%",height:"100%",flexDirection:n}},o.a.createElement(E,null),o.a.createElement(b,{isLandscape:"row"==n}))))))}},92:function(e,t,n){n(93),e.exports=n(132)},93:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[92,1,2]]]);
//# sourceMappingURL=app.7661f36e.chunk.js.map