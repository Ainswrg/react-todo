(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var o,r,c,i,a,s,l,d,u,b,p,f,j,h=t(0),x=t.n(h),m=t(12),O=t.n(m),g=t(4),y=t(10),v=t(3),k=t(2),w=t(16),z={colors:{primary:"#03e9f4",secondary:"#fff",gray500:"#a0aec0",lineare1:"linear-gradient(#141e30, #243b55)"}},C=Object(k.b)(o||(o=Object(v.a)(["\n* {\n   margin: 0;\n   padding: 0;\n   box-sizing: border-box;\n   font-family: sans-serif;\n}\n"]))),E=k.c.div(r||(r=Object(v.a)(["\n   text-align: center;\n   box-sizing: border-box;\n   background: ",";\n   height: 100vh;\n   color: ",";\n"])),(function(n){return n.color||n.theme.colors.lineare1}),(function(n){return n.color||n.theme.colors.secondary})),D=k.c.div(c||(c=Object(v.a)(["\n   display: flex;\n   flex-direction: ",";\n   align-items: ",";\n   justify-content: ",";\n   margin: ",";\n   flex-basis: ","\n"])),(function(n){return n.direction||"row"}),(function(n){return n.align||"stretch"}),(function(n){return n.justify||"stretch"}),(function(n){return n.margin||"0"}),(function(n){return n.basis||"auto"})),S=k.c.li(i||(i=Object(v.a)(["\n   margin-bottom: 1rem;\n   list-style: none;\n   background: ",";\n   width: 600px;\n   ",";\n   \n"])),(function(n){return n.color||n.theme.colors.gray500}),(function(n){return"todo completed"===n.cls&&"\n      opacity: 0.5;\n      "})),T=k.c.label(a||(a=Object(v.a)(["\n   display: flex;\n   justify-content: space-between;\n   padding: 15px;\n   cursor: pointer;\n"]))),F=k.c.span(s||(s=Object(v.a)(["\n",";\n   display: flex;\n   justify: space-between;\n"])),(function(n){return"todo completed"===n.cls&&"\n   text-decoration: line-through red;\n   "})),G=k.c.input(l||(l=Object(v.a)(['\n   position: relative;\n   top: rem(-6);\n   margin: 0 1rem 0 0;\n\n   cursor: pointer;\n\n   &:before {\n      transition: all 0.3s ease-in-out;\n\n      content: "";\n\n      position: absolute;\n      left: 0;\n      z-index: 1;\n\n      width: 1rem;\n      height: 1rem;\n\n      border: 2px solid ',";\n   }\n   &:checked {\n      &:before {\n         transform: rotate(-45deg);\n\n         height: 0.5rem;\n\n         border-color: ",';\n         border-top-style: none;\n         border-right-style: none;\n      }\n   }\n\n   &:after {\n      content: "";\n\n      position: absolute;\n      top: rem(-2);\n      left: 0;\n\n      width: 1.2rem;\n      height: 1.2rem;\n\n      background: #fff;\n\n      cursor: pointer;\n   }\n'])),(function(n){return n.color||n.theme.colors.primary}),(function(n){return n.color||n.theme.colors.primary})),I=(k.c.i(d||(d=Object(v.a)(["\n   color: red;\n   font-size: 20px;\n   text-decoration: none;\n   &:hover {\n      transform: scale(1.1);\n   }\n"]))),Object(k.c)(w.a)(u||(u=Object(v.a)(["\n   color: red;\n   font-size: 20px;\n   text-decoration: none;\n   &:hover {\n      transform: scale(1.1);\n   }\n"])))),J=k.c.input(b||(b=Object(v.a)(["\n   width: 500px;\n   padding: 10px 0;\n   font-size: 16px;\n   color: #fff;\n   margin-bottom: 30px;\n   border: none;\n   outline: none;\n   background: transparent;\n   background: no-repeat bottom, 50% calc(100% - 1px);\n   background-size: 0 100%, 100% 100%;\n   background-image: linear-gradient(0deg, "," 2px, rgba(156, 39, 176, 0) 0), linear-gradient(0deg, #ccc 1px, hsla(0, 0%, 82%, 0) 0);\n   caret-color:  ",";\n   color: rgba(0,0,0,0.2);\n   \n   &:focus+label {\n      top: -20px;\n      left: 0;\n      color: ",";\n      font-size: 12px;\n   }\n   &:focus {\n      outline: none;\n      background-size: 100% 100%, 100% 100%;\n      transition-duration: 0.3s;\n      box-shadow: none;\n      color: ",";\n   }\n"])),(function(n){return n.color||n.theme.colors.primary}),(function(n){return n.color||n.theme.colors.primary}),(function(n){return n.color||n.theme.colors.primary}),(function(n){return n.color||n.theme.colors.secondary})),L=k.c.div(p||(p=Object(v.a)(["\n   position: relative;\n   margin-bottom: 10px;\n"]))),P=k.c.label(f||(f=Object(v.a)(["\n   position: absolute;\n   top:0;\n   left: 0;\n   padding: 10px 0;\n   font-size: 16px;\n   color: #fff;\n   pointer-events: none;\n   transition: .5s;\n"]))),A=t(1),R=function(n){return Object(A.jsx)(D,Object(g.a)({},n))},B=x.a.createContext(),M=function(n){var e=n.id,t=n.title,o=n.completed,r=Object(h.useContext)(B).dispatch,c=["todo"];return o&&c.push("completed"),Object(A.jsx)(S,{cls:c.join(" "),children:Object(A.jsxs)(T,{children:[Object(A.jsx)(G,{type:"checkbox",checked:o,onChange:function(){return r({type:"TOGGLE",payload:e})}}),Object(A.jsx)(F,{cls:c.join(" "),children:t}),Object(A.jsx)("i",{onClick:function(){r({type:"REMOVE",payload:e})},children:Object(A.jsx)(I,{})})]})})},N=k.c.div(j||(j=Object(v.a)([""]))),V=function(n){var e=n.todos;return Object(A.jsx)(N,{children:e&&e.map((function(n){return Object(A.jsx)(M,Object(g.a)({},n),n.id)}))})},K=function(n){return Object(A.jsxs)(L,{children:[Object(A.jsx)(J,Object(g.a)({id:"text"},n)),Object(A.jsx)(P,{htmlFor:"text",children:"Todo"})]})},q=t(17),H=function(n,e){switch(e.type){case"ADD":return[].concat(Object(q.a)(n),[{id:Date.now(),title:e.payload,completed:!1}]);case"TOGGLE":return n.map((function(n){return n.id===e.payload&&(n.completed=!n.completed),n}));case"REMOVE":return n.filter((function(n){return n.id!==e.payload}));default:return n}};var Q=function(n){var e=Object(h.useReducer)(H,JSON.parse(localStorage.getItem("todos"))),t=Object(y.a)(e,2),o=t[0],r=t[1],c=Object(h.useState)(""),i=Object(y.a)(c,2),a=i[0],s=i[1];return Object(h.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(A.jsx)(B.Provider,{value:{dispatch:r},children:Object(A.jsxs)(E,Object(g.a)(Object(g.a)({},n),{},{children:[Object(A.jsx)("h1",{children:" ToDo App "}),Object(A.jsxs)(R,{justify:"center",align:"center",direction:"column",children:[Object(A.jsx)(K,{onKeyPress:function(n){13===n.charCode&&(r({type:"ADD",payload:a}),s(""))},type:"text",value:a,onChange:function(n){return s(n.target.value)}}),Object(A.jsx)(R,{justify:"center",children:Object(A.jsx)(V,{todos:o})})]})]}))})},U=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),o(n),r(n),c(n),i(n)}))};O.a.render(Object(A.jsxs)(k.a,{theme:z,children:[Object(A.jsx)(C,{}),Object(A.jsx)(k.a,{theme:z,children:Object(A.jsx)(Q,{})})]}),document.getElementById("root")),U()}},[[25,1,2]]]);
//# sourceMappingURL=main.9d4f45e0.chunk.js.map