(this["webpackJsonpbasic-ts"]=this["webpackJsonpbasic-ts"]||[]).push([[0],{138:function(e,t){},140:function(e,t){},150:function(e,t){},152:function(e,t){},179:function(e,t){},181:function(e,t){},182:function(e,t){},187:function(e,t){},189:function(e,t){},195:function(e,t){},197:function(e,t){},216:function(e,t){},228:function(e,t){},231:function(e,t){},235:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n(124),i=n.n(s),a=n(67),l=n(13),r=n(35),j=n(14),o=n(15),d=n(70),u=n(69),h=n(42),p=n.n(h),b=n(237),x=n(0),f=function(e){for(var t=[],n=0,c=6;c>=e.displayMin;c--){n+=e.diceCounts.get(c)||0,c<=e.displayMax&&t.push(Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:[c,"+"]}),Object(x.jsx)("td",{"data-testid":"stat"+c,children:n})]},c))}return t.reverse(),Object(x.jsxs)(b.a,{striped:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Stat"}),Object(x.jsx)("th",{children:"Qty"})]})}),Object(x.jsx)("tbody",{children:t})]})},O=n(125),y=function(e){return Object(x.jsxs)(r.a,{style:{width:"50px"},children:[Object(x.jsx)(j.a,{children:Object(x.jsx)(o.a,{className:"d-flex justify-content-center align-items-center",children:Object(x.jsx)(O.a,{src:"/MassDiceRoller/images/pips"+e.pip+".svg",alt:"pip "+e.pip,style:{width:"40px",height:"40px"}})})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(o.a,{"data-testid":"pip"+e.pip+"Count",className:"d-flex justify-content-center align-items-center",children:e.count})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(o.a,{className:"d-flex justify-content-center align-items-center",children:Object(x.jsx)("input",{type:"checkbox",id:"reroll"+e.pip,checked:e.wantReroll,onChange:function(){return e.pipsToRerollChangeHandler(e.pip,!e.wantReroll)}})})})]})},m=function(e){for(var t=h.range(1,7).map((function(t){var n;return Object(x.jsx)(y,{pip:t,count:null!==(n=e.rolledDiceCounts.get(t))&&void 0!==n?n:0,wantReroll:e.pipsToReroll.has(t),pipsToRerollChangeHandler:e.pipsToRerollChangeHandler})})),n=[],c=0;c<2;c++){for(var s=[],i=0;i<3;i++)s.push(Object(x.jsx)(o.a,{className:"my-2",children:t[3*c+i]},"col"+i));n.push(Object(x.jsx)(j.a,{className:"d-flex justify-content-center",children:s},"row"+c))}return Object(x.jsx)(r.a,{style:{width:"250px"},children:n})};function g(){var e=Object(c.useState)(new u.b(u.a.autoSeed())),t=Object(l.a)(e,1)[0],n=Object(c.useState)(600),s=Object(l.a)(n,2),i=s[0],h=s[1],b=Object(c.useState)(new Map),O=Object(l.a)(b,2),y=O[0],g=O[1],v=Object(c.useState)(new Set),w=Object(l.a)(v,2),C=w[0],R=w[1],M=function(e,t){var n,c=e.dice(6,t),s=new Map,i=Object(a.a)(c);try{for(i.s();!(n=i.n()).done;){var l=n.value;s.set(l,(s.get(l)||0)+1)}}catch(r){i.e(r)}finally{i.f()}return s};return Object(x.jsxs)(r.a,{className:"p-3",style:{width:"300px"},children:[Object(x.jsx)(j.a,{children:Object(x.jsx)(o.a,{className:"d-flex justify-content-center",children:Object(x.jsx)("h1",{className:"header",children:"MassDiceRoller"})})}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(o.a,{className:"d-flex justify-content-center align-items-center",children:[Object(x.jsx)("input",{placeholder:"Dice Quantity",value:i,onChange:function(e){h(e.target.value)},style:{width:"60px"}}),Object(x.jsx)(d.a,{className:"m-2",style:{width:"160px"},onClick:function(){g(M(t,i))},children:"Roll"})]})}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(o.a,{children:Object(x.jsx)(f,{displayMin:1,displayMax:3,diceCounts:y})}),Object(x.jsx)(o.a,{children:Object(x.jsx)(f,{displayMin:4,displayMax:6,diceCounts:y})})]}),Object(x.jsx)(m,{rolledDiceCounts:y,pipsToReroll:C,pipsToRerollChangeHandler:function(e,t){var n=new Set(C);t?n.add(e):n.delete(e),R(n)}}),Object(x.jsx)(j.a,{children:Object(x.jsx)(o.a,{className:"d-flex justify-content-center align-items-center",children:Object(x.jsx)(d.a,{className:"m-2",style:{width:"200px"},onClick:function(){for(var e=0,n=new Map,c=1;c<=6;c++){var s,i=null!==(s=y.get(c))&&void 0!==s?s:0;C.has(c)?(e+=i,n.set(c,0)):n.set(c,i)}n=function(e,t){var n,c=p.a.union(Array.from(e.keys()),Array.from(t.keys())),s=new Map,i=Object(a.a)(c);try{for(i.s();!(n=i.n()).done;){var l,r,j=n.value;s.set(j,(null!==(l=e.get(j))&&void 0!==l?l:0)+(null!==(r=t.get(j))&&void 0!==r?r:0))}}catch(o){i.e(o)}finally{i.f()}return s}(n,M(t,e)),g(n)},disabled:0===C.size,children:"Reroll"})})}),Object(x.jsx)(j.a,{className:"d-flex justify-content-center align-items-center",children:Object(x.jsx)("a",{href:"https://github.com/KatyAHG/MassDiceRoller",children:"GitHub repo"})})]})}n(234);i.a.render(Object(x.jsx)(g,{}),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.3488cfd5.chunk.js.map