(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(38),o=a.n(r),u=a(42),c=a(16),s=a(20),i=a(15),m=a(21),p=a(22),E=a(24),h=a(87),d=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("h1",null,"Welcome to puppyciao"))}}]),t}(n.Component),g=a(13),f=a(84),b=a(85),j=a(40),w=a(90),v=a(89),y=a(88),O=a(19),C=a.n(O),k={createUser:function(e){return C.a.post("/api/users",e)},findMe:function(){return C.a.get("/api/users")},loginUser:function(e){return C.a.post("/api/log",e)},logoutUser:function(){return C.a.get("/api/log")}},S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),k.loginUser(a.state).then(function(e){a.setState({user:e.data})}).catch(function(){console.log("Please check email or password")})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(g.a)({},t,n))},a.logout=function(){k.logoutUser().then(function(e){console.log(e),a.setState({user:""})})},a.state={username:"",password:"",user:"",error:""},a}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.user.username?l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(j.a,null,l.a.createElement("h1",null,"You made it"),l.a.createElement(w.a,{onClick:this.logout},"Logout")))):l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(j.a,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Body,null,l.a.createElement("h1",{className:"header"},"Login"),l.a.createElement(y.a,{onSubmit:this.handleSubmit},l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,null,"Username"),l.a.createElement(y.a.Control,{type:"username",placeholder:"Enter username",name:"username",onChange:this.handleInputChange})),l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,null,"Password"),l.a.createElement(y.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:this.handleInputChange})),l.a.createElement(w.a,{variant:"primary",type:"submit"},"Login")))))))}}]),t}(n.Component),U=a(86);var L=function(){return l.a.createElement(f.a,{fluid:!0},l.a.createElement(b.a,null,l.a.createElement(j.a,{size:"md-12"},l.a.createElement(U.a,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var I=function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:d}),l.a.createElement(c.a,{exact:!0,path:"loginsignup",component:S}),l.a.createElement(c.a,{component:L}))))};o.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.54a2a3a7.chunk.js.map