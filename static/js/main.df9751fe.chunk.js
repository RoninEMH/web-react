(this["webpackJsonpweb-react"]=this["webpackJsonpweb-react"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o);n(9),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,u=n(1);var i=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(1),s=Object(u.a)(i,2),f=s[0],v=s[1],m=e.countT1,d="https://i.pinimg.com/originals/bf/b5/43/bfb543ee17f7953c9cba90498f1ae640.jpg",g=Object(a.useState)([{id:"",name:"",img:"",powerLevel:0}]),h=Object(u.a)(g,2),E=h[0],b=h[1];function p(){return E.sort((function(e,t){return e.powerLevel-t.powerLevel})),E.map((function(e){return e.powerLevel<=o&&(d=e.img),e})),d}function k(e){if(e.target.checked){console.log(e.target);var t=e.target.value;console.log(f," previous"),console.log(e.target.value," avtivated"),c((function(e){return console.log("prevKaioken= ",f),console.log("val= ",t),e*(t/f)})),v((function(){return t}))}}return Object(a.useEffect)((function(){fetch("./Characters.json").then((function(e){return e.json()})).then((function(e){var t=e.data.characters;b(t)})).catch((function(){return console.log("Error")}))}),[]),Object(a.useEffect)((function(){p()}),[o]),Object(a.useEffect)((function(){var e=setInterval(c((function(e){return e+m})),500);return clearInterval(e)}),[m]),r.a.createElement("div",null,r.a.createElement("h1",{className:".powerLevel"},"PowerLevel = ",o),r.a.createElement("div",{style:{display:"inline-block",left:"80%"}},r.a.createElement("h2",null,"Charge!!!"),r.a.createElement("img",{src:"https://media.tenor.com/images/e33e37a07ff08939d7f4f98d30d717f8/tenor.gif",alt:"charge",onMouseEnter:function(){l=setInterval((function(){c((function(e){return e+11}))}),50)},onMouseLeave:function(){l&&clearInterval(l)}}),r.a.createElement("br",null),"Not Kaioken:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"1",onChange:k}),"Kaioken x2:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"2",onChange:k}),"Kaioken x4:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"4",onChange:k}),"Kaioken x10:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"10",onChange:k}),"Kaioken x20:",r.a.createElement("input",{name:"Kaioken",type:"radio",value:"20",onChange:k})),r.a.createElement("img",{className:".character",height:"500px",width:"500px",style:{marginLeft:"400px"},src:p(),alt:"Character Power Level"}))};var s=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),o=n[0],c=n[1],l=e.countT2,s=setInterval((function(){return c((function(e){return e+l})),void clearInterval(s)}),500);return r.a.createElement("div",null,r.a.createElement(i,{countT1:o}),r.a.createElement("label",null,"SSJ cells: ",o),r.a.createElement("button",{onClick:function(){c((function(e){return e+1}))}},"Add"))};var f=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),o=n[0],c=n[1],l=e.countT3,i=setInterval((function(){return c((function(e){return e+l})),void clearInterval(i)}),500);return r.a.createElement("div",null,r.a.createElement(s,{countT2:o}),r.a.createElement("label",null,"SSJ2 cells: ",o),r.a.createElement("button",{onClick:function(){c((function(e){return e+1}))}},"Add"))};var v=function(e){var t=Object(a.useState)(e.count),n=Object(u.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement(f,{countT3:o}),r.a.createElement("label",null,"SSJ3 cells: ",o),r.a.createElement("button",{onClick:function(){c((function(e){return e+1}))}},"Add"))};var m=function(){return r.a.createElement("div",null,r.a.createElement(v,{count:0}))};c.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.df9751fe.chunk.js.map