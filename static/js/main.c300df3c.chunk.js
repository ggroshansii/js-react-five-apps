(this["webpackJsonpjs-react-five-apps"]=this["webpackJsonpjs-react-five-apps"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(8),r=n.n(c),o=(n(13),n(2)),s=(n(14),n(0));var l=function(e){function t(t){e.changeApp(t.target.value)}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{type:"button",name:"blogForm",value:"blogForm",onClick:t,children:"Blog Form"}),Object(s.jsx)("button",{type:"button",name:"contactForm",value:"contactForm",onClick:t,children:"Contact Form"}),Object(s.jsx)("button",{type:"button",name:"blogReadingApp",value:"blogReadingApp",onClick:t,children:"Blog Reading App"}),Object(s.jsx)("button",{type:"button",name:"bookmarkingApp",value:"bookmarkingApp",onClick:t,children:"Bookmarking App"}),Object(s.jsx)("button",{type:"button",name:"blogCRUD",value:"blogCRUD",onClick:t,children:"Blog App"})]})},u=n(3);n(16);var b=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),r=Object(o.a)(c,2),l=r[0],b=r[1],j=Object(a.useState)(""),d=Object(o.a)(j,2),m=d[0],O=d[1],h=window.localStorage;return Object(a.useEffect)((function(){h.setItem("blogs",JSON.stringify(n)),console.log(h)}),[n]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"blog-post-form",children:[Object(s.jsx)("h1",{children:" Blog Post to Local Storage "}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:l,body:m};i([].concat(Object(u.a)(n),[t])),b(""),O("")},children:[Object(s.jsx)("input",{type:"text",name:"title",value:l,placeholder:"Enter Title",onChange:function(e){b(e.target.value)}}),Object(s.jsx)("textarea",{name:"body",id:"",cols:"30",rows:"10",value:m,placeholder:"Enter Blog Post Text",onChange:function(e){O(e.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]})})};n(17),n(18),n(19);var j=function(e){return console.log(e),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"single-contact-container",children:[Object(s.jsxs)("p",{children:["First Name: ",e.firstName]}),Object(s.jsxs)("p",{children:["Last Name: ",e.lastName]}),Object(s.jsxs)("p",{children:["Address: ",e.address]}),Object(s.jsxs)("p",{children:["Phone Number: ",e.phoneNumber]})]})})};var d=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"contacts-list-container",children:e.contacts.map((function(e){return console.log("CONTACT",e),Object(s.jsx)(j,{firstName:e.firstName,lastName:e.lastName,address:e.address,phoneNumber:e.phoneNumber},e.id)}))})})};var m=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),r=Object(o.a)(c,2),l=r[0],b=r[1],j=Object(a.useState)(""),m=Object(o.a)(j,2),O=m[0],h=m[1],p=Object(a.useState)(""),g=Object(o.a)(p,2),x=g[0],f=g[1],v=Object(a.useState)([]),S=Object(o.a)(v,2),y=S[0],k=S[1],N=Object(a.useState)(0),E=Object(o.a)(N,2),C=E[0],F=E[1];return Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(y)),console.log(localStorage)}),[y]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"form-container",children:[Object(s.jsx)("h1",{children:"Contact Form"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={firstName:n,lastName:l,address:O,phoneNumber:x,id:C};k([].concat(Object(u.a)(y),[t])),F((function(e){return e+1})),console.log(y)},children:[Object(s.jsx)("label",{htmlFor:"first-name",children:"First Name:"}),Object(s.jsx)("input",{id:"first-name",type:"text",name:"first-name",placeholder:"Enter First Name",value:n,onChange:function(e){return i(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"last-name",children:"Last Name:"}),Object(s.jsx)("input",{id:"last-name",type:"text",name:"last-name",placeholder:"Enter Last Name",value:l,onChange:function(e){return b(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"address",children:"Address: "}),Object(s.jsx)("input",{id:"address",type:"text",name:"address",placeholder:"Enter Address",value:O,onChange:function(e){return h(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"phone-number",children:"Phone Number: "}),Object(s.jsx)("input",{id:"phone-number",type:"text",name:"phone-number",placeholder:"Enter Phone Number",value:x,onChange:function(e){return f(e.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]}),Object(s.jsx)(d,{contacts:y})]})},O=n(4);var h=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"blog-title-container",children:Object(s.jsx)("button",{id:e.id,onClick:function(){return e.displayBlogPost(e.id)},children:e.title})})})};var p=function(e){return Object(s.jsxs)(s.Fragment,{children:[console.log("props here",e),e.blogs.map((function(t){return Object(a.createElement)(h,Object(O.a)(Object(O.a)({},t),{},{key:t.id,displayBlogPost:e.displayBlogPost}))}))]})};n(20);var g=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([{title:"Is Gardening Still Relevant?",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",id:0},{title:"The Reason Why Everyone Love Gardening",body:"Sed cras ornare arcu dui. At quis risus sed vulputate odio ut. Lectus magna fringilla urna porttitor. Elementum sagittis vitae et leo duis ut diam quam. Tristique risus nec feugiat in fermentum. Diam in arcu cursus euismod quis viverra nibh. Urna nec tincidunt praesent semper feugiat nibh sed. Eu tincidunt tortor aliquam nulla facilisi. Magna etiam tempor orci eu lobortis elementum. Ornare quam viverra orci.",id:1},{title:"Seven Easy Rules Of Gardening",body:"Leo vel orci porta non pulvinar neque laoreet. Tincidunt ornare massa eget egestas purus viverra. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Est pellentesque elit ullamcorper dignissim. Vulputate ut pharetra sit amet aliquam.",id:2},{title:"The Latest Trend In Gardening",body:"Vitae et leo duis ut diam quam nulla porttitor. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Et ultrices neque ornare aenean euismod. Mattis pellentesque id nibh tortor id. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Massa massa ultricies mi quis. ",id:3},{title:"The Truth About Gardening Is About To Be Revealed",body:"Et ultrices neque ornare aenean euismod elementum nisi quis. Etiam sit amet nisl purus in mollis. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Fermentum iaculis eu non diam phasellus vestibulum.",id:4}]),r=Object(o.a)(c,2),l=r[0];return r[1],Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"main-container",children:[Object(s.jsx)("div",{className:"blog-title-container",children:Object(s.jsx)(p,{blogs:l,displayBlogPost:function(e){var t=l.findIndex((function(t){return t.id===e})),n=l[t];i(n)}})}),Object(s.jsx)("div",{className:"blog-body-container",children:n&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:n.title}),Object(s.jsx)("li",{children:n.body})]})})]})})};var x=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),i=n[0],c=n[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),u=l[0],b=l[1],j=Object(a.useState)(""),d=Object(o.a)(j,2),m=d[0],O=d[1];return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"overall-container",children:Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addBookmark(i,u,m),console.log("url:",i,"title:",u,"tag:",m)},children:[Object(s.jsx)("label",{htmlFor:"url",children:"URL:"}),Object(s.jsx)("input",{id:"url",type:"text",placeholder:"Enter URL",name:"url",value:i,onChange:function(e){c(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(s.jsx)("input",{id:"title",type:"text",placeholder:"Enter Title",name:"title",value:u,onChange:function(e){b(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"tag",children:"Tag:"}),Object(s.jsx)("input",{id:"tag",type:"text",placeholder:"Enter Tag",name:"tag",value:m,onChange:function(e){O(e.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})})})};n(21);var f=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"bookmark-card",children:[console.log("CARD",e),Object(s.jsx)("p",{children:e.url}),Object(s.jsx)("p",{children:e.title})]})})};var v=function(e){return Object(s.jsx)("div",{children:e.bookmarks.map((function(t){return console.log("fired"),Object(s.jsx)(f,Object(O.a)({filterByTag:e.filterByTag},t),t.id)}))})};var S=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(0),r=Object(o.a)(c,2),l=r[0],b=r[1],j=Object(a.useState)(),d=Object(o.a)(j,2),m=d[0],O=d[1],h=Object(a.useRef)(!0);if(h.current){h.current=!1;var p=localStorage.getItem("bookmarks");i(JSON.parse(p)),console.log("item",typeof p),console.log("iniital bookmarks",n)}Object(a.useEffect)((function(){localStorage.setItem("bookmarks",JSON.stringify(n))}),[n]);var g=new Set(n.map((function(e){return e.tag}))),f=n.filter((function(e){return m?e.tag===m:e}));return Object(s.jsxs)("div",{children:[Object(s.jsxs)("nav",{children:[Object(s.jsx)("button",{onClick:function(){return O(void 0)},children:"All Tags"}),Array.from(g).map((function(e){return Object(s.jsxs)("button",{value:e,onClick:function(e){return O(e.target.value)},children:["#",e]},e)}))]}),Object(s.jsx)(x,{addBookmark:function(e,t,a){var c={url:e,title:t,tag:a,id:l};i([].concat(Object(u.a)(n),[c])),b((function(e){return e+1})),console.log("added new bookmark",n)}}),Object(s.jsx)(v,{bookmarks:f})]})};n(22);var y=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),i=n[0],c=n[1];return e.isEditing?Object(s.jsxs)("div",{className:"blog-post-container",children:[Object(s.jsxs)("div",{className:"blog-post-buttons",children:[Object(s.jsx)("input",{type:"text",value:i,onChange:function(e){c(e.target.value)}}),Object(s.jsx)("button",{type:"submit",onClick:function(){return e.submitEdit(e.id,i)},children:"Submit Edit"})]}),Object(s.jsx)("h2",{children:e.title}),Object(s.jsx)("h3",{children:e.author}),Object(s.jsx)("p",{children:e.text}),Object(s.jsxs)("p",{children:["#",e.tags]})]}):Object(s.jsxs)("div",{className:"blog-post-container",children:[Object(s.jsxs)("div",{className:"blog-post-buttons",children:[Object(s.jsx)("button",{onClick:function(){return e.deletePost(e.id)},children:"Delete"}),Object(s.jsx)("button",{onClick:function(){return e.editPost(e.id)},children:"Edit"})]}),Object(s.jsx)("h2",{children:e.title}),Object(s.jsx)("h3",{children:e.author}),Object(s.jsx)("p",{children:e.text}),Object(s.jsxs)("p",{children:["#",e.tags]})]})};var k=function(e){return Object(s.jsx)("div",{children:e.posts.map((function(t){return console.log("POST",e.deletePost),Object(s.jsx)(y,Object(O.a)(Object(O.a)({isEditing:!1,submitEdit:e.submitEdit},t),{},{deletePost:e.deletePost,editPost:e.editPost}),t.id)}))})};var N=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),i=n[0],c=n[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),u=l[0],b=l[1],j=Object(a.useState)(""),d=Object(o.a)(j,2),m=d[0],O=d[1],h=Object(a.useState)(""),p=Object(o.a)(h,2),g=p[0],x=p[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addPost(i,u,m,g)},children:[Object(s.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(s.jsx)("input",{id:"title",placeholder:"Enter Title",type:"text",value:i,name:"title",onChange:function(e){c(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"author",children:"Author:"}),Object(s.jsx)("input",{id:"author",placeholder:"Enter Author",type:"text",value:u,name:"author",onChange:function(e){b(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"text",children:"Text:"}),Object(s.jsx)("textarea",{name:"text",id:"text",cols:"30",rows:"10",placeholder:"Enter Text",value:m,onChange:function(e){O(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"tags",children:"Tags:"}),Object(s.jsx)("input",{id:"tags",placeholder:"Enter Tags",type:"text",value:g,name:"tags",onChange:function(e){x(e.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})})})};var E=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(0),r=Object(o.a)(c,2),l=r[0],b=r[1];return Object(a.useEffect)((function(){localStorage.setItem("posts",JSON.stringify(n)),console.log("POSTS IN STORAGE",Object(u.a)(n)),console.log("LOCAL STORAGE",localStorage)}),[n]),Object(s.jsxs)("div",{children:[Object(s.jsx)(N,{addPost:function(e,t,a,c){var r={title:e,author:t,text:a,tags:c,id:l};i([].concat(Object(u.a)(n),[r])),b((function(e){return e+1}))}}),Object(s.jsx)(k,{posts:n,deletePost:function(e){var t=n.findIndex((function(t){return t.id===e}));console.log("index",t);var a=Object(u.a)(n);a.splice(t,1),console.log("revised Posts",a),i(a),console.log("at end of delete",n)},editPost:function(e){var t=n.findIndex((function(t){return t.id===e})),a=Object(u.a)(n);a[t].text="",a[t].isEditing=!0,i(a)},submitEdit:function(e,t){var a=n.findIndex((function(t){return t.id===e})),c=Object(u.a)(n);c[a].text=t,c[a].isEditing=!1,i(c)}})]})};var C=function(){var e,t=Object(a.useState)("blogForm"),n=Object(o.a)(t,2),i=n[0],c=n[1];switch(i){case"blogForm":e=Object(s.jsx)(b,{});break;case"contactForm":e=Object(s.jsx)(m,{});break;case"blogReadingApp":e=Object(s.jsx)(g,{});break;case"bookmarkingApp":e=Object(s.jsx)(S,{});break;case"blogCRUD":e=Object(s.jsx)(E,{});break;default:console.log("ERROR SWITCHING SELECTIONS")}return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{changeApp:function(e){c(e)}}),e]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.c300df3c.chunk.js.map