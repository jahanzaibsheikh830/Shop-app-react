(this["webpackJsonpfood-ordering-app"]=this["webpackJsonpfood-ordering-app"]||[]).push([[0],{37:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(30),r=c.n(n),l=(c(37),c(10)),i=c(4),o=(c(15),c(5)),d=c(2),j=c(3),m=c.n(j),b=window.location.href.split(":");b="https"===b[0]?"https://login-system-jahan.herokuapp.com":"http://localhost:5000",console.log("url is",b);var u=b,h=c(0),O=a.a.createContext(),x=a.a.createContext(),p=function(){return Object(s.useContext)(O)},v=function(){return Object(s.useContext)(x)};function f(e){var t=e.children,c=Object(s.useState)({user:null,loginStatus:!1,role:null,cartData:null}),a=Object(d.a)(c,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){return m()({method:"get",url:u+"/profile",withCredentials:!0}).then((function(e){200===e.data.status&&r((function(t){return Object(o.a)(Object(o.a)({},t),{},{user:e.data.profile,loginStatus:!0,role:e.data.profile.role})}))})).catch((function(e){e&&r((function(e){return Object(o.a)(Object(o.a)({},e),{},{loginStatus:!1})}))})),function(){console.log("cleanup")}}),[]),Object(h.jsx)(O.Provider,{value:n,children:Object(h.jsx)(x.Provider,{value:r,children:t})})}var g=function(){var e=v(),t=Object(i.g)();return Object(h.jsx)("div",{children:Object(h.jsxs)("a",{className:"text-success btn btn-outline-success mr-3",onClick:function(){m()({method:"post",url:u+"/logout",withCredentials:!0}).then((function(c){console.log(c),e((function(e){return Object(o.a)(Object(o.a)({},e),{},{loginStatus:!1,role:null})})),t.push("/login")}),(function(e){console.log(e)}))},children:["Logout",Object(h.jsx)("span",{className:"sr-only",children:"(current)"})]})})};var N=function(){var e=p();return Object(h.jsx)("div",{className:"sticky-top",children:Object(h.jsxs)("nav",{className:"navbar  navbar-expand-lg navbar-light bg-light",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"Food"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:"user"===e.role?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item active",children:Object(h.jsxs)(l.b,{className:"nav-link",to:"/",children:["Dashboard ",Object(h.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(h.jsx)("li",{className:"nav-item active",children:Object(h.jsxs)(l.b,{className:"nav-link",to:"/myorders",children:["My orders ",Object(h.jsx)("span",{className:"sr-only",children:"(current)"})]})})]}),Object(h.jsxs)("h3",{className:"mr-3",children:["Welcome ",e.user.name.charAt(0).toUpperCase()+e.user.name.slice(1)]}),Object(h.jsx)(g,{})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item active",children:Object(h.jsxs)(l.b,{className:"nav-link",to:"/",children:["Admin Dashboard ",Object(h.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(h.jsx)("li",{className:"nav-item active",children:Object(h.jsxs)(l.b,{className:"nav-link",to:"/addproducts",children:["Add Products ",Object(h.jsx)("span",{className:"sr-only",children:"(current)"})]})})]}),Object(h.jsxs)("h3",{className:"mr-3",children:["Welcome ",e.user.name.charAt(0).toUpperCase()+e.user.name.slice(1)]}),Object(h.jsx)(g,{})]})})]})})};var y=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"text-center",children:"Home"})})};c(62);var w=function(){var e=Object(s.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(i.g)(),r=(p(),v());return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"col-md-5 form",children:[Object(h.jsx)("h1",{className:"text-center",children:"Login"}),Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),m()({method:"post",url:u+"/login",data:{email:document.getElementById("email").value,password:document.getElementById("password").value},withCredentials:!0}).then((function(e){console.log(e.data.role),200===e.data.status?r((function(t){return Object(o.a)(Object(o.a)({},t),{},{loginStatus:!0,user:e.data.user,role:e.data.user.role})})):(n.push("/login"),a(e.data.message))})).catch((function(e){console.log(e)}))},children:Object(h.jsxs)("div",{className:"form-col",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",required:!0,id:"email"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,id:"password"})}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"}),Object(h.jsx)("p",{className:"mt-3",onClick:function(){n.push("/forgetpw")},style:{cursor:"pointer"},children:"Forget Password"})]}),Object(h.jsx)("br",{}),c?Object(h.jsx)("div",{className:"alert alert-danger",role:"alert",children:c}):null]})})]})})})})};var C=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(),r=Object(d.a)(n,2),l=r[0],o=r[1],j=Object(i.g)();function b(){j.push("/login")}return Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"col-md-5 form",children:[c?Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-center",children:"Signup"}),Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=document.getElementById("name").value,c=document.getElementById("email").value,s=document.getElementById("phone").value,n={name:t,email:c,password:document.getElementById("password").value,phone:s};m()({method:"post",url:u+"/signup",data:n,withCredentials:!0}).then((function(e){200===e.data.status?a(!1):(j.push("/signup"),o(e.data.message))})).catch((function(e){console.log(e)}))},children:Object(h.jsxs)("div",{className:"form-col",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,id:"name"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",required:!0,id:"email"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Phone",required:!0,id:"phone"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,id:"password"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("button",{className:"btn btn-primary",children:"Signup"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("p",{children:["Already have an account?",Object(h.jsx)("span",{onClick:b,className:"text-primary ml-1",style:{cursor:"pointer"},children:"Login"})]})})]})})]}):Object(h.jsxs)("div",{className:"alert alert-success",role:"alert",children:["Signup Successfully",Object(h.jsx)("span",{onClick:b,className:"text-primary ml-1",style:{cursor:"pointer"},children:"Login"})]}),l?Object(h.jsx)("div",{class:"alert alert-danger",role:"alert",children:l}):null]})})})})})},S=c(32);c(63);function E(e){p();var t=v(),c=e.cartItems,s=e.onAdd,a=e.onRemove,n=c.reduce((function(e,t){return e+t.qty*t.price}),0),r=Object(i.g)();return Object(h.jsx)("aside",{className:"container ",children:Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"col-md-6 basket mt-5 mb-5",children:[Object(h.jsx)("h2",{children:"Cart Items"}),0===c.length&&Object(h.jsx)("div",{children:"Cart is empty"}),c.map((function(e){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-4",children:e.name}),Object(h.jsxs)("div",{className:"col-md-4 text-center",children:[Object(h.jsx)("button",{onClick:function(){return a(e)},className:"remove",children:"-"}),Object(h.jsx)("button",{onClick:function(){return s(e)},className:"add",children:"+"})]}),Object(h.jsxs)("div",{className:"col-md-4 text-right",children:[e.qty," Kg x PKR ",e.price]})]},e.id)})),0!==c.length&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("strong",{children:"Total Price"})}),Object(h.jsx)("div",{className:"col-6 text-right",children:Object(h.jsxs)("strong",{children:["PKR: ",n]})})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"row1",children:[Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){t((function(e){return Object(o.a)(Object(o.a)({},e),{},{cartData:{cartItems:c,totalPrice:n}})})),r.push("/checkoutform")},children:"Checkout"}),Object(h.jsx)("br",{})]})]})]})})})}var P=function(){p(),v();var e=Object(s.useState)(!0),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(d.a)(n,2),l=r[0],i=r[1],j=Object(s.useState)([]),b=Object(d.a)(j,2),O=b[0],x=b[1];Object(s.useEffect)((function(){m()({method:"get",url:u+"/getProducts",withCredentials:!0}).then((function(e){i(e.data.data)})).catch((function(e){console.log(e)}))}),[]),console.log(l);var f=function(e){console.log(O);var t=O.find((function(t){return t._id===e._id}));x(t?O.map((function(c){return c._id===e._id?Object(o.a)(Object(o.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(S.a)(O),[Object(o.a)(Object(o.a)({},e),{},{qty:1})]))};return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"bg-primary pt-3 pb-5 sticky-top",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("a",{className:"btn btn-light float-right",onClick:function(){return a((function(e){return!e}))},children:[Object(h.jsx)("i",{class:"fas fa-cart-plus "}),Object(h.jsx)("span",{className:"ml-1",children:O.length})]})})})}),Object(h.jsx)("div",{className:"row1",children:!0===c?Object(h.jsxs)("main",{className:"container",children:[Object(h.jsx)("h1",{className:"text-center mt-5 ",children:"Products"}),Object(h.jsx)("div",{className:"row",children:l.map((function(e){return Object(h.jsx)("div",{className:"col-md-4 mt-5",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"w-100",height:"200",src:e.image,alt:e.name}),Object(h.jsx)("h3",{children:e.name}),Object(h.jsxs)("div",{children:["PKR: ",e.price,"/- Per kg"]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return f(e)},className:"btn btn-primary",children:"Add To Cart"})})]})},e.id)}))})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(E,{cartItems:O,onAdd:f,onRemove:function(e){var t=O.find((function(t){return t._id===e._id}));1===t.qty?x(O.filter((function(t){return t._id!==e._id}))):x(O.map((function(c){return c._id===e._id?Object(o.a)(Object(o.a)({},t),{},{qty:t.qty-1}):c})))}})})})]})};var k=function(){var e="http://localhost:5000",t=Object(s.useState)(!0),c=Object(d.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(!0),l=Object(d.a)(r,2),i=(l[0],l[1],Object(s.useState)("")),o=Object(d.a)(i,2),j=o[0],b=o[1],u=Object(s.useState)(""),O=Object(d.a)(u,2),x=O[0],p=O[1];return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"col-md-5 ",style:{boxShadow:"0 0 10px grey",padding:"20px",marginTop:"50px"},children:[Object(h.jsx)("h3",{className:"text-center",children:"Account recovery"}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"form-col",children:[a?Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=document.getElementById("email").value;m()({method:"post",url:e+"/forget-password",data:{email:c},withCredentials:!0}).then((function(e){console.log(e),200===e.data.status?(b(e.data.message),n((function(e){return!e}))):p(e.data.message)}),(function(e){console.log(e)}))},children:[Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",required:!0,id:"email"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Next"})]})}):Object(h.jsx)("form",{onSubmit:function(t){t.preventDefault(),console.log(document.getElementById("password").value),console.log(document.getElementById("otp").value),m()({method:"post",url:e+"/forget-password-2",data:{newPassword:document.getElementById("password").value,otp:document.getElementById("otp").value},withCredentials:!0}).then((function(e){e.data.status,alert(e.data.message)}),(function(e){console.log(e)}))},children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("input",{type:"number",className:"form-control",placeholder:"Enter 6 digits code",required:!0,id:"otp"}),Object(h.jsx)("p",{children:j})]}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter new password",required:!0,id:"password"}),Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Change Password"})]})]})}),x?Object(h.jsx)("div",{className:"alert alert-danger",role:"alert",children:x}):null]})]})})})})};var I=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){m()({method:"get",url:u+"/getOrders",withCredentials:!0}).then((function(e){console.log(e.data.data),a(e.data.data)})).catch((function(e){console.log(e)}))}),[]),console.log("Order data",c),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"text-center mt-3 mb-3",children:"Customers Orders"}),Object(h.jsx)("div",{className:"row justify-content-center",children:c.map((function(e,t){return Object(h.jsxs)("div",{className:"col-md-5  mr-1 mt-4 py-3 px-3",style:{boxShadow:"0 0 10px grey"},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Name:"}),Object(h.jsx)("span",{className:"float-right",children:e.name})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Address:"}),Object(h.jsx)("span",{className:"float-right",children:e.address})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Phone:"}),Object(h.jsx)("span",{className:"float-right",children:e.phone})]}),Object(h.jsx)("hr",{}),e.orders.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"row ",children:[Object(h.jsx)("div",{className:"col-md-6",children:e.name}),Object(h.jsxs)("div",{className:"col-md-6 text-right",children:[e.qty," Kg * ",e.price," PKR"]})]})})})),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Total Amount"}),Object(h.jsxs)("span",{className:"float-right",children:[e.total," PKR"]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:"float-right mt-2",children:Object(h.jsx)("button",{onClick:function(){var t;t=e._id,m()({method:"post",url:u+"/updateStatus",data:{id:t,status:"Order confirmed"},withCredentials:!0}).then((function(e){alert(e.data)})).catch((function(e){console.log(e)}))},children:"Confirm Order"})})})]})}))})]})})};function q(){var e=p(),t=Object(s.useState)(""),c=Object(d.a)(t,2),a=c[0],n=c[1];return e.cartData&&e.cartData.cartItems.map((function(e){delete e.image,delete e.description,delete e.stock})),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"col-md-6 mt-5",children:[Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()({method:"post",url:u+"/order",data:{name:document.getElementById("name").value,phone:document.getElementById("phone").value,address:document.getElementById("address").value,total:e.cartData.totalPrice,orders:e.cartData.cartItems},withCredentials:!0}).then((function(e){200===e.data.status?n(e.data.message):console.log(e.data.message)})).catch((function(e){console.log(e)}))},children:[Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsxs)("div",{className:"form-group col-md-6",children:[Object(h.jsx)("label",{htmlFor:"inputEmail4",children:"Name"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Name",required:!0})]}),Object(h.jsxs)("div",{className:"form-group col-md-6",children:[Object(h.jsx)("label",{htmlFor:"inputPassword4",children:"Phone"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"phone",placeholder:"Phone",required:!0})]})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"inputAddress",children:"Address"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"address",placeholder:"1234 Main St",required:!0})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Confirm Order"})]}),a?Object(h.jsx)("div",{class:"alert alert-success mt-3",role:"alert",children:a}):null]})})})})}var B=function(){var e=Object(s.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1];return console.log(c),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"col-md-6 mt-5",children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=document.getElementById("customFile"),c=document.getElementById("pName"),s=document.getElementById("price"),n=document.getElementById("description"),r=document.getElementById("stock"),l=new FormData;l.append("myFile",t.files[0]),l.append("productName",c.value),l.append("price",s.value),l.append("description",n.value),l.append("stock",r.value),m()({method:"post",url:u+"/addProduct",data:l,headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then((function(e){console.log("response data=> ",e.data),a(e.data.message)})).catch((function(e){console.log(e)}))},children:[Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsxs)("div",{className:"form-group col-md-6",children:[Object(h.jsx)("label",{htmlFor:"inputEmail4",children:"Product Name"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"pName",placeholder:"Name"})]}),Object(h.jsxs)("div",{className:"form-group col-md-6",children:[Object(h.jsx)("label",{htmlFor:"inputPassword4",children:"Price"}),Object(h.jsx)("input",{type:"number",className:"form-control",id:"price",placeholder:"Price"})]})]}),Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsxs)("div",{className:"form-group col-md-6",children:[Object(h.jsx)("label",{htmlFor:"inputEmail4",children:"Stock"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"stock",placeholder:"Stock"})]}),Object(h.jsxs)("div",{className:"form-group col-md-6",children:[Object(h.jsx)("label",{htmlFor:"inputPassword4",children:"Description"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"description",placeholder:"Description"})]})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("div",{className:"custom-file",children:[Object(h.jsx)("input",{type:"file",className:"custom-file-input",id:"customFile"}),Object(h.jsx)("label",{className:"custom-file-label",for:"customFile",children:"Choose Image"})]})}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Confirm Order"})]}),Object(h.jsx)("br",{}),c?Object(h.jsx)("div",{class:"alert alert-success",role:"alert",children:c}):null]})})})})};var F=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){m()({method:"get",url:u+"/myOrders",withCredentials:!0}).then((function(e){console.log(e),a(e.data.data)})).catch((function(e){console.log(e)}))}),[]),console.log(c),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"text-center",children:"My Orders"}),Object(h.jsx)("div",{className:"row justify-content-center",children:c.map((function(e,t){return Object(h.jsxs)("div",{className:"col-md-6 mr-2 mt-4 py-3 px-3",style:{boxShadow:"0 0 10px grey"},children:[e.orders.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"row ",children:[Object(h.jsx)("div",{className:"col-md-4",children:e.name}),Object(h.jsxs)("div",{className:"col-md-4 text-center",children:[e.price," PKR"]}),Object(h.jsxs)("div",{className:"col-md-4 text-right",children:[e.qty," Kg"]})]})})})),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Total Amount:"}),Object(h.jsxs)("span",{className:"float-right",children:[e.total," PKR"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Status:"}),Object(h.jsx)("span",{className:"float-right",children:e.status})]})]})}))})]})})};var D=function(){var e=p();return Object(h.jsx)("div",{children:Object(h.jsxs)(l.a,{children:[null===e.role?Object(h.jsx)("div",{children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{exact:!0,path:"/",component:C}),Object(h.jsx)(i.b,{path:"/login",component:w}),Object(h.jsx)(i.b,{path:"/forgetpw",component:k}),Object(h.jsx)(i.b,{path:"*"}),Object(h.jsx)(i.a,{to:"/"}),Object(h.jsx)(i.b,{})]})}):null,"user"===e.role?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N,{}),Object(h.jsx)(i.b,{exact:!0,path:"/",component:P}),Object(h.jsx)(i.b,{path:"/basket",component:E}),Object(h.jsx)(i.b,{path:"/myorders",component:F}),Object(h.jsx)(i.b,{path:"/home",component:y}),Object(h.jsx)(i.b,{path:"/checkoutform",component:q}),Object(h.jsx)(i.b,{path:"*"}),Object(h.jsx)(i.a,{to:"/"}),Object(h.jsx)(i.b,{})]}):null,"admin"===e.role?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N,{}),Object(h.jsx)(i.b,{exact:!0,path:"/",component:I}),Object(h.jsx)(i.b,{exact:!0,path:"/addproducts",component:B}),Object(h.jsx)(i.b,{path:"*"}),Object(h.jsx)(i.a,{to:"/"}),Object(h.jsx)(i.b,{})]}):null]})})};var A=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(f,{children:Object(h.jsx)(D,{})})})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.160e416a.chunk.js.map