(this.webpackJsonprect_project=this.webpackJsonprect_project||[]).push([[0],{27:function(e,t,c){},35:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(29),n=c.n(s),a=(c(35),c(13)),l=c(16),i=c(7),o=c(10),j=c.n(o),d=(c(27),c(54),c(0)),b=function(){var e=Object(r.useState)({customerId:null,liter:null,fat:null}),t=Object(i.a)(e,2),c=t[0],s=t[1],n=function(e){s(Object(l.a)(Object(l.a)({},c),{},Object(a.a)({},e.target.name,Number(e.target.value))))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Add Milk "}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),console.log(c);var t={method:"post",url:"https://dairymilkapi.herokuapp.com/addMilk",headers:{},data:c};j()(t).then((function(e){console.log(e),e.data.User?console.log(e.data.User):console.log("okkkk")})).catch((function(e){console.log(e)}))},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Customer Id"}),Object(d.jsx)("input",{type:"text",name:"customerId",onChange:n,className:"form-control",id:"exampleInputEmail1",placeholder:"Customer Id"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Milk in liter"}),Object(d.jsx)("input",{type:"text",name:"liter",onChange:n,className:"form-control",id:"exampleInputPassword1",placeholder:"milk"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Fat"}),Object(d.jsx)("input",{type:"text",name:"fat",onChange:n,className:"form-control",id:"exampleInputPassword1",placeholder:"fat"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})},h=(c(56),function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),c=(t[0],t[1],Object(r.useState)(!1)),s=Object(i.a)(c,2),n=s[0],a=s[1],l=Object(r.useState)([]),o=Object(i.a)(l,2),b=o[0],h=o[1],u=Object(r.useState)(),m=Object(i.a)(u,2),x=m[0],O=m[1],p=Object(r.useState)(),f=Object(i.a)(p,2),g=f[0],y=(f[1],Object(r.useState)()),v=Object(i.a)(y,2),k=v[0],N=v[1];return n?g&&!n?Object(d.jsx)("h1",{children:"Loading..."}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{style:{textAlign:"center"},children:"WelCome your Milk history"}),Object(d.jsxs)("table",{class:"table_div",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"CustomerId"}),Object(d.jsx)("th",{scope:"col",children:"Date"}),Object(d.jsx)("th",{scope:"col",children:"Liter"}),Object(d.jsx)("th",{scope:"col",children:"Fat"})]})}),Object(d.jsx)("tbody",{children:b.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.customerId}),Object(d.jsx)("td",{children:e.createdAt}),Object(d.jsx)("td",{children:e.liter}),Object(d.jsx)("td",{children:e.fat})]},e._id)}))}),Object(d.jsx)("tfoot",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"total Money:--"}),Object(d.jsx)("td",{children:k})]})})]})]}):Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(e),e.target.reset(),j.a.get("https://dairymilkapi.herokuapp.com/findMilkdata/".concat(x)).then((function(e){if(!e.data.milkHistory)return alert("No customer found with this customer ID");a(!0),h(e.data.milkHistory);var t=0;e.data.milkHistory.map((function(e){t+=e.liter*e.fat*6.5})),N(t)}))},children:[Object(d.jsxs)("label",{style:{textAlign:"center"},children:[" Milk History Id No.",x,Object(d.jsx)("input",{style:{margin:"4px 0px 20px 20px"},type:"text",className:"form-control",onChange:function(e){O(e.target.value)},ariadescribedby:"",placeholder:"enter customer id"})]}),Object(d.jsx)("button",{style:{margin:"25px "},type:"submit",className:"btn btn-primary",children:"show History"})]})})}),u=c(12),m=c(2),x=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(""),a=Object(i.a)(n,2),l=a[0],o=a[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),console.log(c,l);var t={method:"post",url:"https://dairymilkapi.herokuapp.com/addCustomer",headers:{},data:c,customerid:l};j()(t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:[Object(d.jsx)("h1",{children:"Add Customer"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Customer Name"}),Object(d.jsx)("input",{type:"text",value:c,name:"name",onChange:function(e){s(e.target.value)},className:"form-control",id:"exampleInputEmail1",placeholder:"Customer Name"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Customer Id"}),Object(d.jsx)("input",{type:"text",value:l,name:"customerid",onChange:function(e){o(e.target.value)},className:"form-control",id:"exampleInputPassword1",placeholder:"Customer Id"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},O=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)(u.a,{children:[Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/",children:"AddCustomer"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/addmilk",children:"AddMilk"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/milkhistry",children:"MilkHistry"})})]})}),Object(d.jsx)("div",{className:"component",children:Object(d.jsxs)("switch",{children:[Object(d.jsx)(m.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{})}),Object(d.jsxs)(m.a,{exact:!0,path:"/addmilk",children:[Object(d.jsx)(b,{})," "]}),Object(d.jsx)(m.a,{exact:!0,path:"/milkhistry",children:Object(d.jsx)(h,{})})]})})]}),Object(d.jsx)("footer",{children:Object(d.jsx)("p",{children:"@copyright all right reserved @Gopal Patidar"})})]})},p=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(O,{})})};n.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.4be0eadc.chunk.js.map