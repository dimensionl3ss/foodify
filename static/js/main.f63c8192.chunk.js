(this.webpackJsonpfoodify=this.webpackJsonpfoodify||[]).push([[0],{211:function(e,t,s){"use strict";s.r(t);var r=s(2),c=s.n(r),n=s(15),a=s.n(n),i=(s(87),s(88),s(89),s(90),s(21)),o=s(9),l=(s(96),s(6)),j=s(1),d=function(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(j.jsx)("h5",{children:"Links"}),Object(j.jsxs)("ul",{className:"list-unstyled",children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/aboutus",children:"About Us"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/menu",children:"Menu"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/contactus",children:"Contact Us"})})]})]}),Object(j.jsxs)("div",{className:"col-7 col-sm-2",children:[Object(j.jsx)("h5",{children:"Our Address"}),Object(j.jsxs)("address",{children:["525, Hussainpur Main Road",Object(j.jsx)("br",{}),"Madurdaha, Kolkata",Object(j.jsx)("br",{}),"India",Object(j.jsx)("br",{}),Object(j.jsx)("i",{className:"fa fa-phone"}),": +91123456789",Object(j.jsx)("br",{}),Object(j.jsx)("i",{className:"fa fa-at"}),": ",Object(j.jsx)("a",{className:"link-dec ",href:"mailto:adarsh.raj.cse22@heritageid.edu.in",children:"Mail us"})]})]})]}),Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsx)("a",{className:"fa fa-facebook f-icons",href:"http://www.facebook.com/profile.php?id="}),Object(j.jsx)("a",{className:"fa fa-linkedin f-icons",href:"http://www.linkedin.com/in/"}),Object(j.jsx)("a",{className:"fa fa-twitter f-icons",href:"http://twitter.com/"}),Object(j.jsx)("a",{className:"fa fa-youtube f-icons",href:"http://youtube.com/"}),Object(j.jsx)("a",{className:"fa fa-google f-icons",href:"mailto:"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("p",{children:"\xa9 Copyright 2021 FOODIFY"})})})]})})},h=s(14),u=s(3),m=function(e){var t=Object(r.useState)(!1),s=Object(h.a)(t,2),c=s[0],n=s[1],a=Object(r.useState)(!1),i=Object(h.a)(a,2),l=(i[0],i[1],Object(r.useState)(!1)),d=Object(h.a)(l,2),m=d[0],b=d[1],O=Object(r.useState)(!1),f=Object(h.a)(O,2),x=(f[0],f[1],Object(r.useState)(null)),g=Object(h.a)(x,2),p=g[0],v=g[1],N=Object(r.useState)(null),w=Object(h.a)(N,2),y=w[0],k=w[1],F=function(){return b(!m)};return Object(j.jsxs)("div",{className:"header",style:{backgroundImage:"url('/header.jpg')"},children:[Object(j.jsxs)(u.x,{light:!0,expand:"md",children:[Object(j.jsx)(u.z,{style:{backgroundColor:"white"},onClick:function(){return n(!c)}}),Object(j.jsx)(u.y,{className:"mr-auto",href:"/",children:"F O O D I F Y"}),Object(j.jsx)(u.l,{isOpen:c,navbar:!0,children:Object(j.jsxs)(u.v,{navbar:!0,children:[Object(j.jsx)(u.w,{children:Object(j.jsx)(o.c,{style:{color:"white"},className:"nav-link",to:"/aboutus",children:"About Us"})}),Object(j.jsx)(u.w,{children:Object(j.jsx)(o.c,{style:{color:"white"},className:"nav-link",to:"/menu",children:"MENU"})}),e.auth.isAuthenticated?Object(j.jsx)(u.w,{children:Object(j.jsx)(o.c,{style:{color:"white"},className:"nav-link",to:"/favorites",children:"My Favorites"})}):null,Object(j.jsx)(u.w,{children:Object(j.jsx)(o.c,{style:{color:"white"},className:"nav-link",to:"/contactus",children:"Contact Us"})})]})}),Object(j.jsx)(u.v,{className:"ml-auto",navbar:!0,children:Object(j.jsx)(u.w,{children:e.auth.isAuthenticated?Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{style:{color:"white"},className:"navbar-text mr-3",children:e.auth.user.email.substr(0,e.auth.user.email.indexOf("@"))+" "}),Object(j.jsxs)(u.c,{color:"danger",onClick:function(){e.logoutUser()},children:[Object(j.jsx)("span",{className:"fa fa-sign-out fa-lg"})," Logout",e.auth.isFetching?Object(j.jsx)("span",{className:"fa fa-spinner fa-pulse fa-fw"}):null]})]}):Object(j.jsxs)(u.c,{color:"danger",onClick:F,children:[Object(j.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login",e.auth.isLoading?Object(j.jsx)("span",{className:"fa fa-spinner fa-pulse fa-fw"}):null]})})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)(u.s,{isOpen:m,toggle:F,children:[Object(j.jsx)(u.u,{toggle:F,children:"Login"}),Object(j.jsx)(u.t,{children:Object(j.jsxs)(u.n,{onSubmit:function(t){F(),e.loginUser({email:p,password:y}),t.preventDefault()},children:[Object(j.jsxs)(u.o,{children:[Object(j.jsx)(u.q,{htmlFor:"email",children:"Email"}),Object(j.jsx)(u.p,{type:"email",id:"email",name:"email",value:p,onChange:function(e){return v(e.target.value)}})]}),Object(j.jsxs)(u.o,{children:[Object(j.jsx)(u.q,{htmlFor:"password",children:"Password"}),Object(j.jsx)(u.p,{type:"password",id:"password",name:"password",value:y,onChange:function(e){return k(e.target.value)}})]}),Object(j.jsx)(u.c,{type:"submit",value:"submit",color:"danger",children:"Login"}),Object(j.jsx)("span",{style:{padding:"2%"},children:" Don't have an account ?"}),Object(j.jsx)("span",{children:Object(j.jsx)(o.c,{style:{textDecoration:"none"},type:"submit",value:"submit",color:"danger",to:"/signUp",onClick:F,children:"Register"})})]})})]})]})},b="http://localhost:9000/",O=function(e){var t=function(e){var t=e.dish;return Object(j.jsx)(u.d,{children:Object(j.jsxs)(o.b,{to:"/menu/".concat(t.id),children:[Object(j.jsx)(u.g,{width:"100%",src:b+t.image,alt:t.name}),Object(j.jsx)(u.h,{children:Object(j.jsx)(u.j,{style:{color:"#2335F",fontSize:"1.5rem"},children:t.name+" "})})]})},t.id)},s=e.dishes.dishes.map((function(s){return Object(j.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:Object(j.jsx)(t,{dish:s,onClick:e.onClick})},s.id)}));return e.dishes.errMess?Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h4",{children:e.dishes.errMess})})}):Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.b,{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/",children:"Home"})}),Object(j.jsx)(u.b,{active:!0,children:"Menu"})]}),Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h3",{children:"Menu"}),Object(j.jsx)("hr",{})]})]}),Object(j.jsx)("div",{className:"row",children:s})]})},f=function(e){var t=function(e){var t=e.item;return Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.g,{src:b+t.image,alt:t.name}),Object(j.jsxs)(u.e,{children:[Object(j.jsx)(u.j,{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/menu/".concat(t.id),children:t.name})}),t.description]})]})},s=e.dishes.map((function(s){return Object(j.jsxs)("div",{className:"col-lg-4 col-md-12 m-auto",children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)("i",{className:"fa fa-fire fa-lg"}),Object(j.jsx)("i",{children:" Hot Pick This Week"})]}),Object(j.jsx)(t,{item:s,errMess:e.errMess})]},s.id)}));return e.errMess?(console.log(e.errMess),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:Object(j.jsx)("h4",{children:e.errMess})})})):Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:s})})})},x=s(7),g=(s(98),s(8)),p=s(36),v=function(e){var t=e.dish,s=e.favorite,r=e.postFavorite,c=e.deleteFavorite,n=e.auth;return Object(j.jsx)(p.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.g,{top:!0,src:b+t.image,alt:t.name}),Object(j.jsx)(u.h,{children:n.isAuthenticated?s?Object(j.jsx)(u.c,{color:"danger",onClick:function(){return c(t.id)},title:"Remove from favorites",children:Object(j.jsx)("span",{className:"fa fa-heart fa-lg"})}):Object(j.jsx)(u.c,{outline:!0,color:"danger",onClick:function(){return r(t.id)},title:"Add into favorites",children:Object(j.jsx)("span",{className:"fa fa-heart fa-lg"})}):null}),Object(j.jsxs)(u.e,{children:[Object(j.jsx)(u.j,{children:t.name}),Object(j.jsx)(u.i,{children:t.description})]})]})})},N=function(e){var t=e.dishId,s=e.comments,r=e.postComment,c=e.auth,n=e.handleDelete;return null!=s?Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("h4",{children:"Reviews"}),Object(j.jsx)("hr",{}),Object(j.jsx)("ul",{className:"list-unstyled",children:Object(j.jsx)(p.Stagger,{in:!0,children:s.map((function(e){return Object(j.jsxs)(u.m,{in:!0,children:[Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[e.comment+" "," ",Object(j.jsxs)("span",{children:[" ",c.isAuthenticated&&c.user.email===e.User.email?Object(j.jsx)("a",{type:"submit",style:{color:"red"},onClick:function(){return n(e)},children:Object(j.jsx)("span",{title:"Delete",className:"fa fa-trash fa-sm"})}):null]})]}),Object(j.jsxs)("span",{children:[e.stars+" ",Object(j.jsx)("span",{className:"fa fa-star fa-lg"})]}),Object(j.jsxs)("p",{children:[" - ",e.User.firstName," ",e.User.lastName," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.updatedAt)))]})]}),Object(j.jsx)("hr",{})]},e.commentId)}))})}),Object(j.jsx)(w,{dishId:t,postComment:r})]}):Object(j.jsx)(w,{dishId:t,postComment:r})},w=function(e){var t=e.dishId,s=e.postComment,c=Object(r.useState)(!1),n=Object(h.a)(c,2),a=n[0],i=n[1],o=function(){return i(!a)},l=Object(r.useState)(0),d=Object(h.a)(l,2),m=d[0],b=d[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)(u.c,{color:"danger",outline:!0,onClick:o,children:[Object(j.jsx)("span",{className:"fa fa-pencil fa-lg"})," Submit Review"]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)(u.s,{isOpen:a,toggle:o,children:[Object(j.jsx)(u.u,{toggle:o,children:"Submit a Review"}),Object(j.jsx)(u.t,{children:Object(j.jsxs)(g.LocalForm,{onSubmit:function(e){return function(e){console.log(t,e.stars,e.comment),s(t,e.stars,e.comment),o()}(Object(x.a)({stars:m},e))},children:[Object(j.jsx)(u.A,{className:"form-group",children:Object(j.jsx)(u.k,{children:Object(j.jsxs)("fieldset",{class:"rating",onChange:function(e){return b(e.target.value)},children:[Object(j.jsx)("input",{type:"radio",id:"star5",name:"rating",value:"5"}),Object(j.jsx)("label",{class:"full",for:"star5",title:"Awesome - 5 stars"}),Object(j.jsx)("input",{type:"radio",id:"star4half",name:"rating",value:"4 and a half"}),Object(j.jsx)("label",{class:"half",for:"star4half",title:"Pretty good - 4.5 stars"}),Object(j.jsx)("input",{type:"radio",id:"star4",name:"rating",value:"4"}),Object(j.jsx)("label",{class:"full",for:"star4",title:"Pretty good - 4 stars"}),Object(j.jsx)("input",{type:"radio",id:"star3half",name:"rating",value:"3 and a half"}),Object(j.jsx)("label",{class:"half",for:"star3half",title:"Meh - 3.5 stars"}),Object(j.jsx)("input",{type:"radio",id:"star3",name:"rating",value:"3"}),Object(j.jsx)("label",{class:"full",for:"star3",title:"Meh - 3 stars"}),Object(j.jsx)("input",{type:"radio",id:"star2half",name:"rating",value:"2 and a half"}),Object(j.jsx)("label",{class:"half",for:"star2half",title:"Kinda bad - 2.5 stars"}),Object(j.jsx)("input",{type:"radio",id:"star2",name:"rating",value:"2"}),Object(j.jsx)("label",{class:"full",for:"star2",title:"Kinda bad - 2 stars"}),Object(j.jsx)("input",{type:"radio",id:"star1half",name:"rating",value:"1 and a half"}),Object(j.jsx)("label",{class:"half",for:"star1half",title:"Meh - 1.5 stars"}),Object(j.jsx)("input",{type:"radio",id:"star1",name:"rating",value:"1"}),Object(j.jsx)("label",{class:"full",for:"star1",title:"Sucks big time - 1 star"}),Object(j.jsx)("input",{type:"radio",id:"starhalf",name:"rating",value:"half"}),Object(j.jsx)("label",{class:"half",for:"starhalf",title:"Sucks big time - 0.5 stars"})]})})}),Object(j.jsx)(u.A,{className:"form-group",children:Object(j.jsx)(u.k,{children:Object(j.jsx)(g.Control.textarea,{model:".comment",id:"comment",rows:4,placeholder:"Write Your Review",className:"form-control"})})}),Object(j.jsx)(u.A,{className:"form-group",children:Object(j.jsxs)(u.k,{children:[Object(j.jsx)("br",{}),Object(j.jsx)(u.c,{type:"submit",className:"btn btn-danger",children:"Submit"})]})})]})})]})})]})},y=function(e){return e.errMess?Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("h4",{children:["Hello",e.errMess]})})}):e.dish?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.b,{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/menu",children:"Menu"})}),Object(j.jsx)(u.b,{active:!0,children:e.dish.name})]}),Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h3",{children:e.dish.name}),Object(j.jsx)("hr",{})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(j.jsx)(v,{dish:e.dish,favorite:e.favorite,postFavorite:e.postFavorite,deleteFavorite:e.deleteFavorite,auth:e.auth})}),Object(j.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(j.jsx)(N,{comments:e.comments,dishId:e.dish.id,postComment:e.postComment,auth:e.auth,handleDelete:function(t){e.deleteComment(t)}})})]})]}):Object(j.jsx)("div",{})},k=function(e){var t=e.chef;return Object(j.jsxs)(u.d,{className:"image-txt-container",children:[Object(j.jsx)("div",{children:Object(j.jsx)(u.r,{left:!0,style:{width:"50%"},object:!0,src:b+t.image,title:t.firstName+" "+t.lastName})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(u.r,{heading:!0,children:t.firstName+" "+t.lastName}),Object(j.jsx)("p",{children:t.description}),Object(j.jsx)(o.b,{className:"link-dec",to:"/menu/".concat(t.dishId),children:t.Dish.name}),Object(j.jsx)("span",{children:" is the most favorite in my served dishes."})]})]})},F=function(e){var t=e.chefs.chefs.map((function(e){return Object(j.jsx)(u.m,{in:!0,children:Object(j.jsx)(k,{chef:e})},e.id)}));return e.chefs.error?Object(j.jsx)("div",{style:{textAlign:"center"},children:Object(j.jsx)("h4",{children:e.chefs.error})}):Object(j.jsx)(u.r,{list:!0,className:"plot-0 mt-2",children:Object(j.jsx)(p.Stagger,{in:!0,children:t})})},E=function(e){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.b,{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/",children:"Home"})}),Object(j.jsx)(u.b,{active:!0,children:"About Us"})]}),Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h3",{children:"About Us"}),Object(j.jsx)("hr",{})]})]}),Object(j.jsxs)("div",{className:"row row-content",children:[Object(j.jsxs)("div",{className:"col-12 col-md-6",children:[Object(j.jsx)("h2",{children:"Our History"}),Object(j.jsx)("p",{children:"Started in 2018, FOODIFY quickly established the best indian food restaurant in Kolkata."})]}),Object(j.jsx)("div",{className:"col-12 col-md-5",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.f,{className:"bg-danger text-white",children:"Facts At a Glance"}),Object(j.jsx)(u.e,{children:Object(j.jsxs)("dl",{className:"row p-1",children:[Object(j.jsx)("dt",{className:"col-6",children:"Started"}),Object(j.jsx)("dd",{className:"col-6",children:"25 Jul 2018"}),Object(j.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(j.jsx)("dd",{className:"col-6",children:"Heritage Group of Institutions"}),Object(j.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(j.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(j.jsx)("dt",{className:"col-6",children:"Employees"}),Object(j.jsx)("dd",{className:"col-6",children:"20"})]})})]})}),Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)(u.d,{children:Object(j.jsx)(u.e,{className:"bg-faded",children:Object(j.jsxs)("blockquote",{className:"blockquote",children:[Object(j.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(j.jsx)("br",{}),Object(j.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(j.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(j.jsxs)("div",{className:"row row-content",children:[Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("h2",{style:{textAlign:"center"},children:"Our Chefs at Your Service"})}),Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)(F,{chefs:e.chefs})})]})]})},S=function(e){return e&&e.length},C=function(e){return function(t){return!t||t.length<=e}},M=function(e){return function(t){return t&&t.length>=e}},A=function(e){return!isNaN(Number(e))},L=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},I=function(e){return Object(j.jsxs)("div",{className:"container col-lg-6 col-sm-12 feedback",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.b,{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/",children:"Home"})}),Object(j.jsx)(u.b,{active:!0,children:"Contact Us"})]}),Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h3",{children:"Contact Us"}),Object(j.jsx)("hr",{})]})]}),Object(j.jsx)("h3",{children:"Send us your Feedback"}),Object(j.jsxs)(g.Form,{model:"feedback",onSubmit:function(t){return function(t){console.log("Current State is: "+JSON.stringify(t)),e.postFeedback(t),e.resetFeedbackForm()}(t)},children:[Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"firstName",md:2,children:"First Name"}),Object(j.jsxs)(u.k,{children:[Object(j.jsx)(g.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:S,minLength:M(3),maxLength:C(15)}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".firstName",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"lastName",md:2,children:"Last Name"}),Object(j.jsxs)(u.k,{children:[Object(j.jsx)(g.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:S,minLength:M(3),maxLength:C(15)}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".lastName",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"phone",md:2,children:"Phone(+91)"}),Object(j.jsxs)(u.k,{children:[Object(j.jsx)(g.Control.text,{model:".phone",id:"phone",name:"phone",placeholder:"Mobile Number",className:"form-control",validators:{required:S,minLength:M(10),maxLength:C(10),isNumber:A}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".phone",show:"touched",messages:{required:"Required ",minLength:"Must be 10 digits ",maxLength:"Must be 10 digits ",isNumber:"Must be a number"}})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"email",md:2,children:"Email"}),Object(j.jsxs)(u.k,{children:[Object(j.jsx)(g.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:S,validEmail:L}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email Address"}})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.k,{md:{size:6,offset:2},children:Object(j.jsx)("div",{className:"form-check",children:Object(j.jsxs)(u.q,{check:!0,children:[Object(j.jsx)(g.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",Object(j.jsx)("strong",{children:"May we contact you?"})]})})}),Object(j.jsx)(u.k,{md:{size:3,offset:1},children:Object(j.jsxs)(g.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(j.jsx)("option",{children:"Phone"}),Object(j.jsx)("option",{children:"Email"})]})})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(j.jsx)(u.k,{md:10,children:Object(j.jsx)(g.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(j.jsx)("br",{}),Object(j.jsx)(u.A,{className:"form-group",children:Object(j.jsx)(u.k,{md:{size:10,offset:2},children:Object(j.jsx)(u.c,{type:"submit",color:"danger",children:"Send Feedback"})})})]})]})},U="ADD_COMMENT",q="DISHES_FAILED",T="ADD_DISHES",D="ADD_COMMENTS",R="COMMENTS_FAILED",P="ADD_CHEFS",_="CHEFS_FAILED",H="LOGIN_REQUEST",Y="LOGIN_SUCCESS",J="LOGIN_FAILURE",z="LOGOUT_REQUEST",B="LOGOUT_SUCCESS",G="SIGNUP_REQUEST",Z="SIGNUP_SUCCESS",K="SIGNUP_FAILURE",W="FAVORITES_FAILED",Q="ADD_FAVORITES",$=function(e,t,s){return function(r){var c={dishId:e,stars:t,comment:s};console.log("Comment ",c);var n="Bearer "+localStorage.getItem("token");return fetch(b+"comments",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json",Authorization:n},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){r(function(e){return{type:U,payload:e}}(e)),alert("Thank you for the review!")})).catch((function(e){console.log("Post comments ",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}},V=function(e){return{type:R,payload:e}},X=function(e){return{type:D,payload:e}},ee=function(e){return{type:q,payload:e}},te=function(e){return{type:T,payload:e}},se=function(e){return{type:_,payload:e}},re=function(e){return{type:P,payload:e}},ce=function(e){return function(t){return t(function(e){return{type:H,creds:e}}(e)),fetch(b+"users/login",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(s){if(!s.success)throw new Error("Error: "+s.status+", message: "+s.err.message);localStorage.setItem("token",s.token),localStorage.setItem("creds",JSON.stringify(e)),t(function(e){return{type:Y,token:e.token}}(s))})).catch((function(e){var s;t((s=e.message,{type:J,message:s})),alert(e.message)}))}},ne=function(){return function(e){e({type:z}),localStorage.removeItem("token"),localStorage.removeItem("creds"),e({type:B})}},ae=function(e){return function(t){return t(function(e){return{type:G,newUser:e}}(e)),fetch(b+"users/signUp",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){if(!e.success){var s=new Error("Error "+e.status);throw s.response=e,s}var r={email:e.newUser.email,password:e.newUser.password};t(function(e){return{type:Z,newUser:e}}(r)),t(ce(r))})).catch((function(e){return t((s=e.message,{type:K,message:s}));var s}))}},ie=function(e){return{type:W,payload:e}},oe=function(e){return{type:Q,payload:e}},le=function(e){return e&&e.length},je=function(e){return function(t){return!t||t.length<=e}},de=function(e){return function(t){return t&&t.length>=e}},he=function(e){return!isNaN(Number(e))},ue=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},me=function(e){return Object(j.jsxs)("div",{className:"container col-lg-6 col-sm-12 register",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.b,{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/",children:"Home"})}),Object(j.jsx)(u.b,{active:!0,children:"signUp"})]}),Object(j.jsxs)(g.Form,{model:"user",onSubmit:function(t){return function(t){console.log(JSON.stringify(t)),alert(JSON.stringify(t)),e.signUpUser(t)}(t)},children:[Object(j.jsx)("h3",{children:"Register Here"}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"firstName",children:"First Name"}),Object(j.jsxs)(u.k,{md:12,children:[Object(j.jsx)(g.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:le,minLength:de(3),maxLength:je(15)}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".firstName",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"lastName",children:"Last Name"}),Object(j.jsxs)(u.k,{md:12,children:[Object(j.jsx)(g.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:le,minLength:de(3),maxLength:je(15)}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".lastName",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"email",children:"Email"}),Object(j.jsxs)(u.k,{md:12,children:[Object(j.jsx)(g.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:le,validEmail:ue}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email Address"}})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"password",children:"New Password"}),Object(j.jsxs)(u.k,{md:12,children:[Object(j.jsx)(g.Control,{type:"password",model:".password",id:"password",name:"password",placeholder:"New Password",className:"form-control",validators:{required:le}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".password",show:"touched",messages:{required:"Required "}})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"phone",children:"Phone ( +91 )"}),Object(j.jsxs)(u.k,{md:12,children:[Object(j.jsx)(g.Control.text,{model:".phone",id:"phone",name:"phone",placeholder:"Mobile Number",className:"form-control",validators:{required:le,minLength:de(10),maxLength:je(10),isNumber:he}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".phone",show:"touched",messages:{required:"Required ",minLength:"Must be 10 digits ",maxLength:"Must be 10 digits ",isNumber:"Must be a number"}})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.A,{className:"form-group",children:[Object(j.jsx)(u.q,{htmlFor:"pin",children:"Zip Code"}),Object(j.jsxs)(u.k,{md:12,children:[Object(j.jsx)(g.Control.text,{model:".pin",id:"pin",name:"pin",placeholder:"Zip Code",className:"form-control",validators:{required:le,minLength:de(6),maxLength:je(6),isNumber:he}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".pin",show:"touched",messages:{required:"Required ",minLength:"Must be 6 digits ",maxLength:"Must be 6 digits ",isNumber:"Must be a number"}})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)(u.A,{className:"form-group",children:Object(j.jsx)(u.k,{children:Object(j.jsx)(u.c,{type:"submit",className:"block",color:"danger",block:!0,children:"Submit"})})})]})]})},be=s(46),Oe=s(74);function fe(e){var t=e.dish,s=e.deleteFavorite;return Object(j.jsxs)(u.d,{className:"image-txt-container",children:[Object(j.jsx)("div",{children:Object(j.jsx)(u.r,{left:!0,style:{width:"300px",height:"300px"},object:!0,src:b+t.image,title:t.name})}),Object(j.jsxs)("div",{style:{padding:"20px"},children:[Object(j.jsx)(u.r,{heading:!0,children:Object(j.jsx)(o.b,{className:"link-dec",to:"/menu/".concat(t.id),children:t.name})}),Object(j.jsx)("p",{children:t.description}),Object(j.jsx)(u.c,{outline:!0,color:"danger",onClick:function(){return s(t.id)},children:Object(j.jsx)("span",{className:"fa fa-times fa-lg"})})]})]})}var xe=function(e){if(e.favorites.errMess)return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h4",{children:e.favorites.errMess})})});if(e.favorites.favorites.length>0){var t=e.favorites.favorites.map((function(t){return Object(j.jsx)("div",{className:"col-12 mt-5",children:Object(j.jsx)(fe,{dish:t.Dish,deleteFavorite:e.deleteFavorite})},t.DishId)}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.b,{children:Object(j.jsx)(o.b,{className:"link-dec",to:"/",children:"Home"})}),Object(j.jsx)(u.b,{active:!0,children:"My Favorites"})]}),Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h3",{children:"My Favorites"}),Object(j.jsx)("hr",{})]})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(u.r,{list:!0,children:t})})]})}return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h4",{children:"You have no favorites."})})})},ge=Object(i.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,chefs:e.chefs,auth:e.auth,favorites:e.favorites}}),(function(e){return{deleteComment:function(t){return e((s=t,function(e){console.log(s);var t="Bearer "+localStorage.getItem("token");return fetch(b+"comments/".concat(s.commentId),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:t},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(t){e(X(t))})).catch((function(t){return e(V(t.message))}))}));var s},postComment:function(t,s,r){return e($(t,s,r))},fetchDishes:function(){e((function(e){return fetch(b+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(te(t))})).catch((function(t){return e(ee(t.message))}))}))},resetFeedbackForm:function(){e(g.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(X(t))})).catch((function(t){return e(V(t.message))}))}))},fetchChefs:function(){return e((function(e){return fetch(b+"chefs").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(re(t))})).catch((function(t){return e(se(t.message))}))}))},postFeedback:function(t){return e(function(e){return function(t){return fetch(b+"feedback",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){console.log("Feedback",e),alert("Thank you for your feedback!")})).catch((function(e){console.log("Feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(t))},loginUser:function(t){return e(ce(t))},logoutUser:function(){return e(ne())},signUpUser:function(t){return e(ae(t))},fetchFavorites:function(){return e((function(e){var t="Bearer "+localStorage.getItem("token");return fetch(b+"favorites",{headers:{Authorization:t}}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(oe(t))})).catch((function(t){return e(ie(t.message))}))}))},postFavorite:function(t){return e(function(e){return function(t){var s="Bearer "+localStorage.getItem("token");return fetch(b+"favorites",{method:"POST",body:JSON.stringify({DishId:e}),headers:{"Content-Type":"application/json",Authorization:s},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){console.log("Favorite Added",e),t(oe(e))})).catch((function(e){return t(ie(e.message))}))}}(t))},deleteFavorite:function(t){return e(function(e){return function(t){var s="Bearer "+localStorage.getItem("token");return fetch(b+"favorites/"+e,{method:"DELETE",headers:{Authorization:s},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){console.log("Favorite Deleted",e),t(oe(e))})).catch((function(e){return t(ie(e.message))}))}}(t))}}}))((function(e){Object(r.useEffect)((function(){return e.fetchDishes(),e.fetchComments(),e.fetchChefs(),e.fetchFavorites(),function(){}}),[]);var t=function(){return Object(j.jsx)(f,{dishes:e.dishes.dishes.filter((function(e){return e.promotion})),errMess:e.dishes.errMess})},s=function(){var t=Object(l.h)().dishId;return e.auth.isAuthenticated?Object(j.jsx)(y,{dish:e.dishes.dishes.filter((function(e){return e.id===parseInt(t,10)}))[0],errMess:e.dishes.errMess,comments:e.comments.comments.filter((function(e){return e.dishId===parseInt(t,10)})),commentsErrMess:e.comments.errMess,postComment:e.postComment,auth:e.auth,deleteComment:e.deleteComment,favorite:e.favorites.favorites.length>0?e.favorites.favorites.some((function(e){return e.DishId===parseInt(t,10)})):null,postFavorite:e.postFavorite,deleteFavorite:e.deleteFavorite}):Object(j.jsx)(y,{dish:e.dishes.dishes.filter((function(e){return e.id===parseInt(t,10)}))[0],errMess:e.dishes.errMess,comments:e.comments.comments.filter((function(e){return e.dishId===parseInt(t,10)})),commentsErrMess:e.comments.errMess,postComment:e.postComment,auth:e.auth,deleteComment:e.deleteComment,favorite:null,postFavorite:e.postFavorite,deleteFavorite:e.deleteFavorite})},c=Object(l.f)();function n(t){var s=t.children;return e.auth.isAuthenticated?Object(j.jsx)(l.a,{to:"/",state:{from:c}}):s}function a(t){var s=t.children;return e.auth.isAuthenticated?s:Object(j.jsx)(l.a,{to:"/",state:{from:c}})}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{auth:e.auth,loginUser:e.loginUser,logoutUser:e.logoutUser}),Object(j.jsx)(be.a,{children:Object(j.jsx)(Oe.a,{classNames:"page",timeout:300,children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/menu",element:Object(j.jsx)(O,{dishes:e.dishes})}),Object(j.jsx)(l.b,{exact:!0,path:"/",element:Object(j.jsx)(t,{})}),Object(j.jsx)(l.b,{path:"/menu/:dishId",element:Object(j.jsx)(s,{})}),Object(j.jsx)(l.b,{exact:!0,path:"/aboutus",element:Object(j.jsx)(E,{chefs:e.chefs})}),Object(j.jsx)(l.b,{exact:!0,path:"/contactus",element:Object(j.jsx)(I,{resetFeedbackForm:e.resetFeedbackForm,postFeedback:e.postFeedback})}),Object(j.jsx)(l.b,{path:"/signUp",element:Object(j.jsx)(n,{children:Object(j.jsx)(me,{signUpUser:e.signUpUser})})}),Object(j.jsx)(l.b,{path:"/favorites",element:Object(j.jsx)(a,{children:Object(j.jsx)(xe,{favorites:e.favorites,deleteFavorite:e.deleteFavorite})})})]})},c.key)}),Object(j.jsx)(d,{})]})})),pe=s(26),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(x.a)(Object(x.a)({},e),{},{errMess:null,dishes:t.payload});case q:return Object(x.a)(Object(x.a)({},e),{},{errMess:t.payload});default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(x.a)(Object(x.a)({},e),{},{errMess:null,comments:t.payload});case R:return Object(x.a)(Object(x.a)({},e),{},{errMess:t.payload});case U:var s=t.payload;return Object(x.a)(Object(x.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{chefs:[],error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(x.a)(Object(x.a)({},e),{},{chefs:t.payload,error:null});case _:return Object(x.a)(Object(x.a)({},e),{},{chefs:[],error:t.payload});default:return e}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isAuthenticated:!!localStorage.getItem("token"),token:localStorage.getItem("token"),user:localStorage.getItem("creds")?JSON.parse(localStorage.getItem("creds")):null,newUser:null,errMess:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0,isAuthenticated:!1,user:t.creds});case Y:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,isAuthenticated:!0,errMess:"",token:t.token});case J:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,isAuthenticated:!1,errMess:t.message});case z:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0,isAuthenticated:!0});case B:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,isAuthenticated:!1,token:"",user:null});case G:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0,isAuthenticated:!1,newUser:t.newUser});case Z:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,isAuthenticated:!1,errMess:"",newUser:t.newUser});case K:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,isAuthenticated:!1,errMess:t.message});default:return e}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,favorites:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,errMess:null,favorites:t.payload});case W:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,errMess:t.payload,favorites:null});default:return e}},Fe={firstName:"",lastName:"",phone:"",email:"",agree:!1,contactType:"phone",message:""},Ee={firstName:"",lastName:"",email:"",password:"",phone:"",pin:""},Se=s(79),Ce=s(78),Me=s.n(Ce),Ae=Object(pe.createStore)(Object(pe.combineReducers)(Object(x.a)({dishes:ve,comments:Ne,chefs:we,auth:ye,favorites:ke},Object(g.createForms)({feedback:Fe,user:Ee}))),Object(pe.applyMiddleware)(Se.a,Me.a));var Le=function(){return Object(j.jsx)(i.Provider,{store:Ae,children:Object(j.jsx)(o.a,{children:Object(j.jsx)("div",{children:Object(j.jsx)(ge,{})})})})},Ie=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,216)).then((function(t){var s=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),r(e),c(e),n(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Le,{style:{backgroundImage:'url("https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'}})}),document.getElementById("root")),Ie()},87:function(e,t,s){},96:function(e,t,s){}},[[211,1,2]]]);
//# sourceMappingURL=main.f63c8192.chunk.js.map