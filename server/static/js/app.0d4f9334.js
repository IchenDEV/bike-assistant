(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"276c":function(t,e,n){"use strict";n("7423")},"290b":function(t,e,n){"use strict";n("592d")},"2de7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-icon",[t._v("mdi-bicycle")]),t._v(" Smart Bike ASSISTANT ")],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1),t.$store.state.showWindow?n("div",{staticClass:"warl"},[t._v(" 注意⚠️ ")]):t._e()],1)},i=[],s={name:"App",data:function(){return{}}},c=s,o=(n("034f"),n("2877")),u=n("6544"),l=n.n(u),d=n("7496"),p=n("40dc"),m=n("8336"),h=n("132d"),f=n("f6c4"),v=n("2fa4"),g=Object(o["a"])(c,a,i,!1,null,null,null),A=g.exports;l()(g,{VApp:d["a"],VAppBar:p["a"],VBtn:m["a"],VIcon:h["a"],VMain:f["a"],VSpacer:v["a"]});var w=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("TrackMap")],1)},b=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"patrol_area"},[n("div",{staticStyle:{height:"100vh","margin-top":"5px"},attrs:{id:"allmap"}}),n("v-btn",{staticClass:"back-btn",attrs:{fab:""},on:{click:function(e){return t.$router.back()}}},[t._v("Back")]),n("v-btn",{staticClass:"back-btn-2",attrs:{fab:""},on:{click:t.switchFrontLight}},[t._v("Light")])],1)},S=[],B=(n("96cf"),n("1da1")),L={name:"Dashboard",data:function(){return{points:null,maps:"",pl:null,timer:null,mk:null}},mounted:function(){this.pathStart()},methods:{switchFrontLight:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.frontLight=!t.frontLight,e.next=3,t.$store.dispatch("updateLight1",t.frontLight);case 3:case"end":return e.stop()}}),e)})))()},pathStart:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.maps=new BMapGL.Map("allmap"),t.maps.enableScrollWheelZoom(!0),t.maps.centerAndZoom(new BMapGL.Point(121.814224,31.156484),10),e.next=5,t.$store.dispatch("updateGeo");case 5:t.timer=setInterval(t.updatePotion,1e3);case 6:case"end":return e.stop()}}),e)})))()},updatePotion:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("updateGeo");case 2:if(n=new BMapGL.Point(t.$store.state.environment.geo.lng,t.$store.state.environment.geo.lat),null!=t.pl&&void 0!=t.pl){e.next=9;break}return r=new BMap.Convertor,a=[],a.push(n),r.translate(a,1,5,(function(e){t.pl=new BMapGL.Polyline([new BMapGL.Point(e.points[0].lng,e.points[0].lat),new BMapGL.Point(e.points[0].lng,e.points[0].lat)]),t.maps.addOverlay(t.pl)})),e.abrupt("return");case 9:i=t.pl.getPath(),s=new BMap.Convertor,c=[],c.push(n),s.translate(c,1,5,(function(e){0===e.status&&(i.push(e.points[0]),t.pl.setPath(i),t.maps.panTo(e.points[0]))}));case 14:case"end":return e.stop()}}),e)})))()}},beforeDestroy:function(){clearInterval(this.timer)}},C=L,R=(n("276c"),Object(o["a"])(C,k,S,!1,null,"3f1dc211",null)),j=R.exports;l()(R,{VBtn:m["a"]});var y={name:"TrackMapView",components:{TrackMap:j}},O=y,M=Object(o["a"])(O,x,b,!1,null,null,null),D=M.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("TrackMap")],1)},E=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"patrol_area"},[n("div",{staticStyle:{height:"100vh","margin-top":"5px"},attrs:{id:"allmap"}}),n("v-btn",{staticClass:"back-btn",attrs:{fab:""},on:{click:function(e){return t.$router.back()}}},[t._v("Back")]),n("v-btn",{staticClass:"back-btn-2",attrs:{fab:""},on:{click:t.switchFrontLight}},[t._v("Light")])],1)},F=[],U=(n("d81d"),n("ac1f"),n("841c"),{name:"BikeFinder",data:function(){return{map:"",geolocation:null,timer:null,mk:null,driving:null}},mounted:function(){this.Start()},beforeDestroy:function(){clearInterval(this.timer)},methods:{Start:function(){this.map=new BMapGL.Map("allmap");var t=this.map;t.centerAndZoom(new BMapGL.Point(121.814224,31.156484),10),t.enableScrollWheelZoom(!0),this.geolocation=new BMapGL.Geolocation,this.timer=setInterval(this.updatePos,1e4),this.driving=new BMapGL.WalkingRoute(this.map,{renderOptions:{map:this.map,autoViewport:!1}})},switchFrontLight:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.frontLight=!t.frontLight,e.next=3,t.$store.dispatch("updateLight1",t.frontLight);case 3:case"end":return e.stop()}}),e)})))()},updatePos:function(){var t=this;this.geolocation.getCurrentPosition(function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(n){var r,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.getStatus()!=BMAP_STATUS_SUCCESS){e.next=17;break}return t.mk=new BMapGL.Marker(n.point),t.map.clearOverlays(),t.map.addOverlay(t.mk),e.prev=4,e.next=7,t.$store.dispatch("updateGeo");case 7:r=n.point,a=new BMapGL.Point(t.$store.state.environment.geo.lng,t.$store.state.environment.geo.lat),i=new BMap.Convertor,s=[],s.push(a),i.translate(s,1,5,(function(e){if(0===e.status){t.map.panTo(e.points[0]);var n=new BMapGL.Point(e.points[0].lng,e.points[0].lat);new BMapGL.Marker(n);t.map.addOverlay(n),t.driving.search(r,n)}})),e.next=17;break;case 15:e.prev=15,e.t0=e["catch"](4);case 17:case"end":return e.stop()}}),e,this,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),{enableHighAccuracy:!0})}}}),T=U,q=(n("e937"),Object(o["a"])(T,G,F,!1,null,"b9c6d67e",null)),z=q.exports;l()(q,{VBtn:m["a"]});var H={name:"TrackMapView",components:{TrackMap:z}},Q=H,Z=Object(o["a"])(Q,P,E,!1,null,null,null),N=Z.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("x-d-bike"),n("div",{staticClass:"d-flex pa-2",staticStyle:{"flex-wrap":"wrap","justify-content":"center"}},[n("v-card",{staticClass:"pa-2",staticStyle:{margin:"0.5rem",padding:"0.2rem"},attrs:{width:"45%",height:"10rem",rounded:"xl"}},[n("v-card-title",{staticClass:"headline"},[t._v(" 温度 "),n("v-icon",[t._v("mdi-thermometer")])],1),n("v-card-text",{staticClass:"text-center content-text-m"},[t._v(" "+t._s(t.temperature)+" ")])],1),n("v-card",{staticClass:"pa-2",staticStyle:{margin:"0.5rem",padding:"0.2rem"},attrs:{width:"45%",height:"10rem",rounded:"xl"}},[n("v-card-title",{staticClass:"headline"},[t._v(" 气压 "),n("v-icon",[t._v("mdi-air-humidifier")])],1),n("v-card-text",{staticClass:"text-center content-text-m"},[t._v(" "+t._s(t.pressure)+" ")])],1),n("v-card",{staticClass:"pa-2",staticStyle:{margin:"0.5rem",padding:"0.2rem"},attrs:{width:"45%",height:"10rem",rounded:"xl"}},[n("v-card-title",{staticClass:"headline"},[t._v(" 高度 "),n("v-icon",[t._v("mdi-altimeter")])],1),n("v-card-text",{staticClass:"text-center content-text-m"},[t._v(" "+t._s(t.altitude)+" ")])],1),n("v-card",{staticClass:"pa-2",staticStyle:{margin:"0.5rem",padding:"0.2rem"},attrs:{width:"45%",height:"10rem",rounded:"xl"}},[n("v-card-title",{staticClass:"headline"},[t._v(" 速度 "),n("v-icon",[t._v("mdi-speedometer")])],1),n("v-card-text",{staticClass:"text-center content-text-m"},[t._v(" "+t._s(t.speed)+" ")])],1),n("v-card",{staticClass:"pa-2",staticStyle:{margin:"1rem",padding:"1rem",display:"flex","align-items":"center",background:"url(https://www.bosch-ebike.com/fileadmin/_processed_/8/8/csm_Bosch-eBike-DTF-Elsass-MY2020-24_Print__300_dpi__p2_85567d1910.jpg?_=1592980405)"},attrs:{width:"80%",height:"12rem",rounded:"xl"},on:{click:function(e){return t.$router.push("/camera")}}},[n("v-card-text",{staticClass:"text-center content-text"},[t._v(" Camera ")])],1),n("v-card",{staticClass:"pa-2",staticStyle:{margin:"1rem",padding:"1rem",display:"flex","align-items":"center",background:"url(https://www.bosch-ebike.com/fileadmin/_processed_/8/8/csm_Bosch-eBike-DTF-Elsass-MY2020-24_Print__300_dpi__p2_85567d1910.jpg?_=1592980405)"},attrs:{width:"80%",height:"12rem",rounded:"xl"},on:{click:function(e){return t.$router.push("/finder")}}},[n("v-card-text",{staticClass:"text-center content-text"},[t._v(" Bike Finder ")])],1),n("v-card",{staticClass:"pa-2",staticStyle:{margin:"1rem",padding:"1rem",display:"flex","align-items":"center",background:"url(data:image/jpeg;base64,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)"},attrs:{width:"80%",height:"12rem",rounded:"xl"},on:{click:function(e){return t.$router.push("/track")}}},[n("v-card-text",{staticClass:"text-center content-text"},[t._v(" Bike Tracker ")])],1),t.frontLight?n("v-card",{staticClass:"pa-2",staticStyle:{margin:"0.5rem",padding:"0.5rem"},attrs:{width:"40%",height:"12rem",color:"{frontLight:red}",rounded:"xl"},on:{click:t.switchFrontLight}},[n("v-card-title",{staticClass:"headline title-text"},[t._v(" Front Light "),n("v-icon",[t._v("mdi-light-switch")])],1),n("v-card-text",{staticClass:"text-center content-text-s"},[t._v(" OFF ")])],1):n("v-card",{staticClass:"pa-2",staticStyle:{margin:"0.5rem",padding:"0.5rem"},attrs:{width:"40%",height:"12rem",color:"red",rounded:"xl"},on:{click:t.switchFrontLight}},[n("v-card-title",{staticClass:"headline title-text"},[t._v(" Front Light "),n("v-icon",[t._v("mdi-light-switch")])],1),n("v-card-text",{staticClass:"text-center content-text-s"},[t._v(" ON ")])],1),t.backLight?n("v-card",{staticClass:"pa-2",staticStyle:{margin:"0.5rem",padding:"0.5rem"},attrs:{width:"40%",height:"12rem",rounded:"xl",color:"{backLight:yellow}"},on:{click:t.switchBackLight}},[n("v-card-title",{staticClass:"headline title-text"},[t._v(" Back Light "),n("v-icon",[t._v("mdi-light-switch")])],1),n("v-card-text",{staticClass:"text-center content-text-s"},[t._v(" OFF ")])],1):n("v-card",{staticClass:"pa-2",staticStyle:{margin:"0.5rem",padding:"0.5rem"},attrs:{width:"40%",height:"12rem",rounded:"xl",color:"yellow"},on:{click:t.switchBackLight}},[n("v-card-title",{staticClass:"headline title-text"},[n("v-icon",[t._v("mdi-light-switch")]),t._v("Back Light ")],1),n("v-card-text",{staticClass:"text-center content-text-s"},[t._v("ON ")])],1)],1)],1)},J=[],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("model-obj",{attrs:{backgroundAlpha:0,controlsOptions:{enablePan:t.enablePan,enableZoom:t.enableZoom,enableRotate:t.enableRotate},src:"/models/obj/Sepeda Facific Invert.obj",mtl:"/models/obj/Sepeda Facific Invert.mtl",rotation:t.rotation,scale:t.scale},on:{"on-load":t.onLoad}})],1)},X=[],W=(n("d3b7"),n("e360")),Y={components:{ModelObj:W["ModelObj"]},data:function(){return{enablePan:!0,enableZoom:!1,enableRotate:!1,rotation:{x:0,y:0,z:0},scale:{x:3,y:3,z:3}}},methods:{onLoad:function(){this.rotate()},rotate:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/posture");case 2:return n=e.sent,e.next=5,n.json();case 5:n=e.sent,t.rotation.x=n.data.pitch/3.14,t.rotation.z=-(n.data.roll-90)/2,t.rotation.z>1||t.rotation.z<-1?t.$store.state.showWindow=!0:t.$store.state.showWindow=!1,console.log(t.rotation),requestAnimationFrame(t.rotate);case 11:case"end":return e.stop()}}),e)})))()}}},I=Y,_=Object(o["a"])(I,K,X,!1,null,null,null),$=_.exports,tt={name:"DashBoard",components:{XDBike:$},data:function(){return{timer:null}},computed:{temperature:function(){return this.$store.state.environment.temperature},altitude:function(){return this.$store.state.environment.altitude},speed:function(){return this.$store.state.environment.speed},pressure:function(){return this.$store.state.environment.pressure},frontLight:{get:function(){return this.$store.state.device.light.light1},set:function(t){this.$store.state.device.light.light1=t}},backLight:{get:function(){return this.$store.state.device.light.light2},set:function(t){this.$store.state.device.light.light2=t}}},methods:{switchFrontLight:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.frontLight=!t.frontLight,e.next=3,t.$store.dispatch("updateLight1",t.frontLight);case 3:case"end":return e.stop()}}),e)})))()},switchBackLight:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.backLight=!t.backLight,e.next=3,t.$store.dispatch("updateLight2",t.backLight);case 3:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("updatePressure");case 2:return e.next=4,t.$store.dispatch("updateTemperature");case 4:return e.next=6,t.$store.dispatch("updateGeo");case 6:case"end":return e.stop()}}),e)})))()}},beforeDestroy:function(){clearInterval(this.timer)},mounted:function(){this.timer=setInterval(this.update,1e3)}},et=tt,nt=(n("290b"),n("b0af")),rt=n("99d9"),at=Object(o["a"])(et,V,J,!1,null,"477006ae",null),it=at.exports;l()(at,{VCard:nt["a"],VCardText:rt["a"],VCardTitle:rt["b"],VIcon:h["a"]});var st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("x-d-bike")],1)},ct=[],ot={name:"XDBike",components:{XDBike:$}},ut=ot,lt=Object(o["a"])(ut,st,ct,!1,null,null,null),dt=lt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-img",{staticClass:"camera",attrs:{src:"/video_feed"}})],1)},mt=[],ht={name:"CameraView"},ft=ht,vt=(n("cd54"),n("adda")),gt=Object(o["a"])(ft,pt,mt,!1,null,null,null),At=gt.exports;l()(gt,{VImg:vt["a"]}),r["default"].use(w["a"]);var wt=[{path:"/",name:"DashBoard",component:it},{path:"/posture",name:"Posture",component:dt},{path:"/track",name:"Track",component:D},{path:"/finder",name:"Finder",component:N},{path:"/camera",name:"Camera",component:At}],xt=new w["a"]({routes:wt}),bt=xt,kt=(n("25f0"),n("2f62"));r["default"].use(kt["a"]);var St=new kt["a"].Store({state:{device:{light:{light1:!0,light2:!0}},environment:{geo:{lat:30,lng:122},temperature:0,speed:0,altitude:0,pressure:0},showWindow:!1},mutations:{setTemperature:function(t,e){t.environment.temperature=e},setPressure:function(t,e){t.environment.pressure=e},setSpeed:function(t,e){t.environment.speed=e},setAltitude:function(t,e){t.environment.altitude=e},setLight1:function(t,e){t.device.light.light1=e},setLight2:function(t,e){t.device.light.light2=e},setGeo:function(t,e){t.environment.geo=e},getGeo:function(t,e){return t.environment.geo}},actions:{updateTemperature:function(t){return Object(B["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/temperature");case 2:return e.next=4,e.sent.json();case 4:n=e.sent,t.commit("setTemperature",n.data.toString().substr(0,4));case 6:case"end":return e.stop()}}),e)})))()},updatePressure:function(t){return Object(B["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/pressure");case 2:return e.next=4,e.sent.json();case 4:n=e.sent,t.commit("setPressure",n.data.toString().substr(0,4));case 6:case"end":return e.stop()}}),e)})))()},updateGeo:function(t){return Object(B["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/location");case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,t.commit("setSpeed",n.data.speed),t.commit("setAltitude",n.data.altitude),t.commit("setGeo",{lat:n.data.latitude,lng:n.data.longitude}),e.abrupt("return",{lat:n.data.latitude,lng:n.data.longitude});case 9:case"end":return e.stop()}}),e)})))()},updateLight1:function(t,e){return Object(B["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=7;break}return n.next=3,fetch("/light/up");case 3:return n.next=5,n.sent.json();case 5:n.next=11;break;case 7:return n.next=9,fetch("/light/down");case 9:return n.next=11,n.sent.json();case 11:t.commit("setLight1",res.data);case 12:case"end":return n.stop()}}),n)})))()},updateLight2:function(t,e){return Object(B["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=7;break}return n.next=3,fetch("/light2/up");case 3:return n.next=5,n.sent.json();case 5:n.next=11;break;case 7:return n.next=9,fetch("/light2/down");case 9:return n.next=11,n.sent.json();case 11:t.commit("setLight2",res.data);case 12:case"end":return n.stop()}}),n)})))()}},modules:{}}),Bt=n("f309");r["default"].use(Bt["a"]);var Lt=new Bt["a"]({});r["default"].config.productionTip=!1,new r["default"]({router:bt,store:St,vuetify:Lt,render:function(t){return t(A)}}).$mount("#app")},"592d":function(t,e,n){},7423:function(t,e,n){},"85ec":function(t,e,n){},b3c9:function(t,e,n){},cd54:function(t,e,n){"use strict";n("b3c9")},e937:function(t,e,n){"use strict";n("2de7")}});
//# sourceMappingURL=app.0d4f9334.js.map