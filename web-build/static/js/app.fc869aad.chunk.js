(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{107:function(e,t,n){var r=n(108);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(110)(r,a);r.locals&&(e.exports=r.locals)},108:function(e,t,n){(t=e.exports=n(109)(!1)).push([e.i,"@import url(https://rsms.me/inter/inter.css);",""]),t.push([e.i,"html { font-family: 'Inter', sans-serif; }\n@supports (font-variation-settings: normal) {\n  html { font-family: 'Inter var', sans-serif; }\n}\n",""])},64:function(e,t,n){"use strict";var r=n(56),a=n.n(r),o=n(1),i=n.n(o),l=(n(58),n(8)),c=(n(90),n(84)),s=n(91),f=n(136),d=n(65),u=n.n(d),h=n(60),m=n(135),v=n(66),p=n.n(v),y=n(67),g=n.n(y);n(107);function w(e){var t=0;if("undefined"===typeof Symbol||null==e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=p()("#b81"),x=Object(h.a)({typography:{fontFamily:"Inter",fontSize:14,button:{textTransform:"none"}},palette:{primary:{main:E.indigo[4],dark:E.indigo[5]},secondary:{main:E.gray[2],dark:E.gray[3]},contrastThreshold:3,tonalOffset:.2}}),k=E.gray[0];document.body.style.background=k;var S=function(){var e=Object(o.useCallback)((function(e){if(e){var t=e.getContext("2d");!function n(){var r=e.width,a=e.height;if(0!=r&&0!=a){for(var o=[],i=Object.keys(E),l=0;l<10;++l)o[l]={x:r*Math.random(),y:a*Math.random(),fillStyle:E[i[Math.floor(Math.random()*i.length)]][Math.floor(1+5*Math.random())],speed:.5*r*Math.random(),w:r*Math.random()/16,h:r*Math.random()/16,phase:2*Math.PI*Math.random()};var c=.001*performance.now(),s=c,f=0,d=0;requestAnimationFrame((function n(){r=e.width,a=e.height,function(){var e=.001*performance.now(),t=e-c;c=e,++f,e-s>1&&(d=Math.floor(f/(e-s)+.5),s=e,f=0);for(var n=0;n<10;++n){var r=o[n];r.x+=r.speed*Math.sin(e+r.phase)*t}}(),function(){t.clearRect(0,0,e.width,e.height),t.fillStyle="white",t.fillRect(0,0,e.width,e.height);for(var n=0;n<10;++n){var r=o[n];t.fillStyle=r.fillStyle,t.fillRect(r.x,r.y,r.w,r.h)}t.fillStyle="black",t.font="28px Inter",t.textBaseline="top",t.fillText("fps: "+d,32,32)}(),requestAnimationFrame(n)}))}else requestAnimationFrame(n)}()}}),[]);return i.a.createElement(l.a,{style:{flex:1,backgroundColor:k,alignItems:"center",justifyContent:"center",padding:38}},i.a.createElement(l.a,{style:{borderRadius:6,overflow:"hidden",width:"100%",height:"100%"}},i.a.createElement(u.a,{canvasRef:e,onResize:function(){}})))},M=function(e){var t=e.isLandscape;return i.a.createElement(l.a,{style:{flex:.5,backgroundColor:k,padding:38,paddingLeft:t?0:void 0,paddingTop:t?void 0:0}},i.a.createElement(l.a,{style:{flexDirection:"row",paddingBottom:38}},i.a.createElement(s.a,{variant:"contained",color:"primary"},"hai"),i.a.createElement(l.a,{style:{width:24}}),i.a.createElement(s.a,{variant:"contained",color:"secondary"},"ooh")),i.a.createElement(l.a,null,i.a.createElement(f.a,null)))};"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then((function(e){for(var t,n=w(e);!(t=n()).done;){t.value.update()}})),t.a=function(){var e=Object(o.useState)(window.innerWidth>window.innerHeight?"row":"column"),t=a()(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){var e=function(){r(window.innerWidth>window.innerHeight?"row":"column")};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i.a.createElement(m.a,{theme:x},i.a.createElement(c.a,{style:{flex:1}},i.a.createElement(g.a,null,i.a.createElement("div",{style:{width:"100%",height:"100%"}},i.a.createElement(l.a,{style:{width:"100%",height:"100%",flexDirection:n}},i.a.createElement(S,null),i.a.createElement(M,{isLandscape:"row"==n}))))))}},93:function(e,t,n){n(94),e.exports=n(133)},94:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[93,1,2]]]);
//# sourceMappingURL=app.fc869aad.chunk.js.map