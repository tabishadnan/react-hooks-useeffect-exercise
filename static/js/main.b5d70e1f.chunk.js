(this["webpackJsonpreact-hooks-useeffect-exercise"]=this["webpackJsonpreact-hooks-useeffect-exercise"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),r=c(4),j=c.n(r),o=(c(10),c(2)),d=function(){var e=Object(s.useState)(window.innerWidth),t=Object(o.a)(e,2),c=t[0],i=t[1],r=parseInt((""+c)[0]),j=Object(s.useState)("posts"),d=Object(o.a)(j,2),l=d[0],h=d[1],a=Object(s.useState)(null),b=Object(o.a)(a,2),u=b[0],O=b[1];return Object(s.useEffect)((function(){window.addEventListener("resize",(function(){i(window.innerWidth)})),fetch("https://jsonplaceholder.typicode.com/".concat(l,"/").concat(r)).then((function(e){return e.json()})).then((function(e){return O(e)}))}),[c,l]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"REACT HOOKS USEEFFECT"}),Object(n.jsxs)("h1",{children:["Window Width is : ",c]}),Object(n.jsxs)("div",{id:"wrapper",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{htmlFor:"id",children:"First Int : "}),Object(n.jsx)("input",{type:"text",value:r,disabled:!0})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{htmlFor:"type",children:"Type : "}),Object(n.jsxs)("select",{onClick:function(e){h(e.target.value)},children:[Object(n.jsx)("option",{value:"posts",children:"Posts"}),Object(n.jsx)("option",{value:"comments",children:"Comments"}),Object(n.jsx)("option",{value:"users",children:"Users"})]})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:JSON.stringify(u)})})]})};var l=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(d,{})})};j.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(l,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b5d70e1f.chunk.js.map