(this["webpackJsonpweb-react"]=this["webpackJsonpweb-react"]||[]).push([[0],{20:function(e,t,n){e.exports=n(41)},25:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c);n(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,u=n(1),i=(n(26),n(19)),f=Object(i.a)({stamina:0}).useGlobalState;var s=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(1),s=Object(u.a)(i,2),m=s[0],v=s[1],p=e.countT3,b=f("stamina"),E=Object(u.a)(b,2),h=E[0],d=E[1],g=e.countT1,k={name:"Opening",img:"https://i.pinimg.com/originals/bf/b5/43/bfb543ee17f7953c9cba90498f1ae640.jpg"},j=Object(a.useState)([{id:"",name:"",img:"",powerLevel:0}]),O=Object(u.a)(j,2),w=O[0],C=O[1];function S(){return w.sort((function(e,t){return e.powerLevel-t.powerLevel})),w.map((function(e){return e.powerLevel<=c&&(k=e),e})),k}function x(e){if(e.target.checked){var t=e.target.value;o((function(e){return Math.floor(e*(t/m))})),v((function(){return t}))}}return Object(a.useEffect)((function(){fetch("./Characters.json").then((function(e){return e.json()})).then((function(e){var t=e.data.characters;C(t)})).catch((function(){return console.log("Error")}))}),[]),Object(a.useEffect)((function(){S()}),[c]),Object(a.useEffect)((function(){var e=setInterval((function(){return d((function(e){return e+11}))}),500);return function(){return clearInterval(e)}}),[d]),Object(a.useEffect)((function(){d((function(e){return p>0?e-200:e}))}),[p]),Object(a.useEffect)((function(){var e=setInterval(o((function(e){return e+g})),1e3);return function(){return clearInterval(e)}}),[g]),Object(a.useEffect)((function(){e.parentCallBack(h)}),[h]),r.a.createElement("div",null,r.a.createElement("h1",{className:".powerLevel"},"PowerLevel = ",c),r.a.createElement("h2",{className:".powerLevel"},"Stamina = ",h),r.a.createElement("div",{style:{display:"inline-block",left:"80%"}},r.a.createElement("h2",null,"Charge!!!"),r.a.createElement("img",{src:"https://media.tenor.com/images/e33e37a07ff08939d7f4f98d30d717f8/tenor.gif",alt:"charge",onMouseEnter:function(){l=setInterval((function(){o((function(e){return e+11}))}),50)},onMouseLeave:function(){l&&clearInterval(l)}}),r.a.createElement("br",null),"Not Kaioken:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"1",onChange:x}),"Kaioken x2:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"2",onChange:x}),"Kaioken x4:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"4",onChange:x}),"Kaioken x10:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"10",onChange:x}),"Kaioken x20:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"20",onChange:x})),r.a.createElement("h3",{style:{fontSize:"30px",position:"absolute",display:"inline-block",marginLeft:"450px",marginTop:"-70px"}},S().name),r.a.createElement("img",{className:".character",height:"500px",width:"500px",style:{marginLeft:"300px",marginTop:"0px"},src:S().img,alt:"Character Power Level"}))};var m=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],o=n[1],l=e.countT2;return Object(a.useEffect)((function(){var e=setInterval(o((function(e){return e+l})),1e3);return clearInterval(e)}),[l]),r.a.createElement("div",null,r.a.createElement(s,{countT3:e.countT3,countT1:c,parentCallBack:function(t){e.parentCallBack(t)}}),r.a.createElement("label",null,"SSJ cells: ",c),r.a.createElement("button",{onClick:function(){o((function(e){return e+1}))}},"Add"))};var v=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],o=n[1],l=e.countT3,i=setInterval((function(){return o((function(e){return e+l})),void clearInterval(i)}),500);return r.a.createElement("div",null,r.a.createElement(m,{countT3:l,countT2:c,parentCallBack:function(t){e.parentCallBack(t)}}),r.a.createElement("label",null,"SSJ2 cells: ",c),r.a.createElement("button",{onClick:function(){o((function(e){return e+1}))}},"Add"))};var p=function(e){var t,n=Object(a.useState)(e.count),c=Object(u.a)(n,2),o=c[0],l=c[1];return r.a.createElement("div",null,r.a.createElement(v,{countT3:o,parentCallBack:function(e){console.log(e),t=e}}),r.a.createElement("label",null,"SSJ3 cells: ",o),r.a.createElement("button",{onClick:function(){t>200&&l((function(e){return e+1}))}},"Add"),200," stamina")};var b=function(){return r.a.createElement("div",null,r.a.createElement(p,{count:0}))};o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.56d80159.chunk.js.map