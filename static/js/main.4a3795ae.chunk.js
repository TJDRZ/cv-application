(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],[,,,,function(e,t,n){},,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),l=n(2),i=n(0);var o=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(!1),o=Object(l.a)(a,2),j=o[0],u=o[1],b=e.type,h=e.placeholder,d=e.pattern;return Object(i.jsx)("div",{children:j?Object(i.jsxs)("div",{children:[Object(i.jsxs)("span",{children:[r," "]}),Object(i.jsx)("button",{onClick:function(){u(!1)},children:"Edit"})]}):Object(i.jsxs)("form",{onSubmit:function(){u(!0)},children:[Object(i.jsxs)("label",{htmlFor:b,children:[b,": "]}),Object(i.jsx)("input",{type:"text",name:b,required:!0,placeholder:h,pattern:d,onChange:function(e){s(e.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Submit"})]})})};n(12);var j=function(){return Object(i.jsxs)("h2",{className:"header-h2",children:[Object(i.jsx)(o,{type:"Name",placeholder:"Please Enter Your Name"}),Object(i.jsx)(o,{type:"Email",placeholder:"Please Enter Your Email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}),Object(i.jsx)(o,{type:"Phone",placeholder:"Please Enter Your Phone #"}),Object(i.jsx)("hr",{className:"header-hr"})]})},u=n(6),b=n.n(u);n(14);var h=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],a=function(e){s(r.filter((function(t){return t.key!==e})))},o=e.header,j=e.type,u=e.title;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:o}),u?Object(i.jsx)("hr",{className:"title-hr"}):Object(i.jsx)("hr",{className:"task-hr"}),Object(i.jsxs)("button",{onClick:function(){s(r.concat(e.component(b()())))},children:["Add ",j," +"]}),u?Object(i.jsx)("ul",{children:r.map((function(e){return Object(i.jsx)("li",{className:"title-li",children:Object(i.jsxs)("span",{children:[e,Object(i.jsx)("button",{onClick:function(){return a(e.key)},children:"DEL"})]})},e.key)}))}):Object(i.jsx)("ul",{children:r.map((function(e){return Object(i.jsxs)("li",{className:"task-li",children:[e,Object(i.jsx)("button",{onClick:function(){return a(e.key)},children:"DEL"})]},e.key)}))})]})};n(4);var d=function(){return Object(i.jsxs)("div",{className:"list-container",children:[Object(i.jsx)(o,{type:"School Name",placeholder:"Please Enter Your School"}),Object(i.jsx)(o,{type:"Study Title",placeholder:"Please Enter Your Field"}),Object(i.jsx)(o,{type:"Study Date",placeholder:"Please Enter Your Study Date"})]})};var p=function(e){return Object(i.jsx)(o,{type:"Work Task",placeholder:"Please Enter Your Work Task"},e)},O=function(){return Object(i.jsxs)("div",{className:"list-container",children:[Object(i.jsx)(o,{type:"Work Name",placeholder:"Please Enter Your Work"}),Object(i.jsx)(o,{type:"Work Title",placeholder:"Please Enter Your Title"}),Object(i.jsx)(o,{type:"Work Date",placeholder:"Please Enter Your Work Date"}),Object(i.jsx)(h,{component:p,type:"Tasks",title:!1})]})};n(15);var x=function(e){return Object(i.jsx)(d,{},e)},m=function(e){return Object(i.jsx)(O,{},e)},f=function(){return Object(i.jsxs)("main",{className:"App",children:[Object(i.jsx)("h1",{children:"CV Application:"}),Object(i.jsx)(j,{}),Object(i.jsx)(h,{component:x,header:"Education",type:"School",title:!0}),Object(i.jsx)(h,{component:m,header:"Work Experience",type:"Work",title:!0}),Object(i.jsx)("button",{onClick:function(){return window.print()},children:"Save"})]})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.4a3795ae.chunk.js.map