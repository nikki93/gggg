(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{46:function(e,t,n){"use strict";var r=n(40),a=n.n(r),i=n(0),o=n.n(i),l=n(12),s=n(65),c=n(71),d=n(113),f=n(111),h=n(42),u=n(112),m=n(47),v=n.n(m),w=n(48),p=n.n(w),y=(n(86),v()("#b81")),g=Object(h.a)({typography:{fontFamily:"Inter",fontSize:14,button:{textTransform:"none"}},palette:{primary:{main:y.indigo[4],dark:y.indigo[5]},secondary:{main:y.gray[2],dark:y.gray[3]},contrastThreshold:3,tonalOffset:.2}}),E=y.gray[0];document.body.style.background=E;var b={scale:1},x=o.a.memo((function(e){e.notifyStore;var t=Object(i.useRef)(null),n=Object(i.useRef)(!1);Object(i.useLayoutEffect)((function(){var e=function(){if(t.current){var e=t.current,r=e.getBoundingClientRect();e.width=devicePixelRatio*r.width,e.height=devicePixelRatio*r.height,n.current=!0}};e(),window.addEventListener("resize",e),window.addEventListener("scroll",e);var r=window.matchMedia("(orientation: portrait)");return r.addListener(e),function(){window.removeEventListener("resize",e),window.removeEventListener("scroll",e),r.removeListener(e)}}),[t.current]);var r=Object(i.useCallback)((function(e){if(t.current=e,e){var r=e.getContext("2d");!function t(){if(n.current&&r){for(var a=e.width,i=e.height,o=[],l=Object.keys(y),s=0;s<100;++s)o[s]={x:a*Math.random(),y:i*Math.random(),fillStyle:y[l[Math.floor(Math.random()*l.length)]][Math.floor(1+5*Math.random())],speed:.5*a*Math.random(),w:a*Math.random()/16,h:a*Math.random()/16,phase:2*Math.PI*Math.random()};var c=.001*performance.now(),d=c,f=0,h=0;requestAnimationFrame((function t(){a=e.width,i=e.height,function(){var e=.001*performance.now(),t=e-c;c=e,++f,e-d>1&&(h=Math.floor(f/(e-d)+.5),d=e,f=0);for(var n=0;n<100;++n){var r=o[n];r.x+=r.speed*Math.sin(e+r.phase)*t}}(),function(){r.clearRect(0,0,e.width,e.height),r.fillStyle="white",r.fillRect(0,0,e.width,e.height);for(var t=0;t<100;++t){var n=o[t];r.fillStyle=n.fillStyle;var a=b.scale*n.w,i=b.scale*n.h;r.fillRect(n.x-.5*a,n.y-.5*i,a,i)}r.fillStyle="black",r.font="28px Inter",r.textBaseline="top",r.fillText("fps: "+h,32,32)}(),requestAnimationFrame(t)}))}else requestAnimationFrame(t)}()}}),[]);return o.a.createElement(l.a,{style:{flex:1,backgroundColor:E,alignItems:"center",justifyContent:"center",padding:38}},o.a.createElement("canvas",{ref:r,style:{width:"100%",height:"100%",borderRadius:6,overflow:"hidden"}}))})),L=function(e){var t=e.isLandscape,n=(e.storeCounter,e.notifyStore);return o.a.createElement(l.a,{style:{flex:.5,backgroundColor:E,padding:38,paddingLeft:t?0:void 0,paddingTop:t?void 0:0}},o.a.createElement(l.a,{style:{flexDirection:"row",paddingBottom:38}},o.a.createElement(c.a,{variant:"contained",color:"primary"},"hai"),o.a.createElement(l.a,{style:{width:24}}),o.a.createElement(c.a,{variant:"contained",color:"secondary"},"ooh")),o.a.createElement(l.a,null,o.a.createElement(d.a,{value:b.scale,min:0,max:10,step:.01,onChange:function(e,t){b.scale=t,n()}}),o.a.createElement(f.a,{style:{paddingTop:38}},"buttons don't do anything, slider scales rectangles")))};t.a=function(){var e=Object(i.useState)(0),t=a()(e,2),n=t[0],r=t[1],c=Object(i.useCallback)((function(){r((function(e){return e+1}))}),[]),d=Object(i.useState)(window.innerWidth>window.innerHeight?"row":"column"),f=a()(d,2),h=f[0],m=f[1];return Object(i.useEffect)((function(){var e=function(){m(window.innerWidth>window.innerHeight?"row":"column")};window.addEventListener("resize",e),window.addEventListener("scroll",e);var t=window.matchMedia("(orientation: portrait)");return t.addListener(e),function(){window.removeEventListener("resize",e),window.removeEventListener("scroll",e),t.removeListener(e)}}),[]),o.a.createElement(u.a,{theme:g},o.a.createElement(s.a,{style:{flex:1}},o.a.createElement(p.a,null,o.a.createElement("div",{style:{width:"100%",height:"100%"}},o.a.createElement(l.a,{style:{width:"100%",height:"100%",flexDirection:h}},o.a.createElement(x,{notifyStore:c}),o.a.createElement(L,{isLandscape:"row"==h,storeCounter:n,notifyStore:c}))))))}},73:function(e,t,n){e.exports=n(109)},86:function(e,t,n){var r=n(87);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(89)(r,a);r.locals&&(e.exports=r.locals)},87:function(e,t,n){(t=e.exports=n(88)(!1)).push([e.i,"@import url(https://rsms.me/inter/inter.css);",""]),t.push([e.i,"html { font-family: 'Inter', sans-serif; }\n@supports (font-variation-settings: normal) {\n  html { font-family: 'Inter var', sans-serif; }\n}\n",""])}},[[73,1,2]]]);
//# sourceMappingURL=app.542de1fe.chunk.js.map