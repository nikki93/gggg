(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{100:function(e,t,n){(t=e.exports=n(101)(!1)).push([e.i,"@import url(https://rsms.me/inter/inter.css);",""]),t.push([e.i,"html { font-family: 'Inter', sans-serif; }\n@supports (font-variation-settings: normal) {\n  html { font-family: 'Inter var', sans-serif; }\n}\n",""])},61:function(e,t,n){"use strict";var a=n(54),r=n.n(a),i=n(1),o=n.n(i),l=(n(56),n(11)),s=(n(85),n(86)),c=n(128),f=n(62),d=n.n(f),h=n(58),m=n(127),u=n(63),p=n.n(u),v=(n(99),p()("#b81")),w=Object(h.a)({typography:{fontFamily:"Inter",fontSize:14,button:{textTransform:"none"}},palette:{primary:{main:v.indigo[4],dark:v.indigo[5]},secondary:{main:v.gray[2],dark:v.gray[3]},contrastThreshold:3,tonalOffset:.2}}),g=v.gray[0],y=function(){var e=Object(i.useCallback)((function(e){if(e){var t=e.getContext("2d");!function n(){var a=e.width,r=e.height;if(0!=a&&0!=r){for(var i=[],o=Object.keys(v),l=0;l<40;++l)i[l]={x:a*Math.random(),y:r*Math.random(),fillStyle:v[o[Math.floor(Math.random()*o.length)]][Math.floor(1+5*Math.random())],speed:.5*a*Math.random(),w:a*Math.random()/16,h:a*Math.random()/16,phase:2*Math.PI*Math.random()};var s=.001*performance.now(),c=s,f=0,d=0;requestAnimationFrame((function n(){a=e.width,r=e.height,function(){var e=.001*performance.now(),t=e-s;s=e,++f,e-c>1&&(d=Math.floor(f/(e-c)+.5),c=e,f=0);for(var n=0;n<40;++n){var a=i[n];a.x+=a.speed*Math.sin(e+a.phase)*t}}(),function(){t.clearRect(0,0,e.width,e.height),t.fillStyle="white",t.fillRect(0,0,e.width,e.height);for(var n=0;n<40;++n){var a=i[n];t.fillStyle=a.fillStyle,t.fillRect(a.x,a.y,a.w,a.h)}t.fillStyle="black",t.font="28px Inter",t.textBaseline="top",t.fillText("fps: "+d,32,32)}(),requestAnimationFrame(n)}))}else requestAnimationFrame(n)}()}}),[]);return o.a.createElement(l.a,{style:{flex:1,backgroundColor:g,alignItems:"center",justifyContent:"center",padding:38}},o.a.createElement(l.a,{style:{borderRadius:6,overflow:"hidden",width:"100%",height:"100%"}},o.a.createElement(d.a,{canvasRef:e,onResize:function(){}})))},E=function(e){var t=e.isLandscape;return o.a.createElement(l.a,{style:{flex:.5,backgroundColor:g,padding:38,paddingLeft:t?0:void 0,paddingTop:t?void 0:0}},o.a.createElement(l.a,{style:{flexDirection:"row",paddingBottom:38}},o.a.createElement(s.a,{variant:"contained",color:"primary"},"hai"),o.a.createElement(l.a,{style:{width:24}}),o.a.createElement(s.a,{variant:"contained",color:"secondary"},"ooh")),o.a.createElement(l.a,null,o.a.createElement(c.a,null)))};t.a=function(){var e=Object(i.useState)(window.innerWidth>window.innerHeight?"row":"column"),t=r()(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){var e=function(){a(window.innerWidth>window.innerHeight?"row":"column")};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),o.a.createElement(m.a,{theme:w},o.a.createElement(l.a,{style:{width:"100%",height:"100%",flexDirection:n}},o.a.createElement(y,null),o.a.createElement(E,{isLandscape:"row"==n})))}},88:function(e,t,n){n(89),e.exports=n(125)},89:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},99:function(e,t,n){var a=n(100);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(102)(a,r);a.locals&&(e.exports=a.locals)}},[[88,1,2]]]);
//# sourceMappingURL=app.076564b8.chunk.js.map