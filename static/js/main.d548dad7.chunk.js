(this.webpackJsonpsmart_garden_web=this.webpackJsonpsmart_garden_web||[]).push([[0],{15:function(e,t,n){e.exports={homepage:"Login_homepage__1UY5l",container:"Login_container__1PmnF","form-login":"Login_form-login__3ULuK","form-input":"Login_form-input__32RYi","form-button":"Login_form-button__2I4iw","form-control":"Login_form-control__ngMYl",wrapper:"Login_wrapper__3KVs_","submit-button":"Login_submit-button__35P4b"}},20:function(e,t,n){e.exports={"weather-button":"Weather_weather-button__3Ovu5","weather-container":"Weather_weather-container__MS1pH","weather-info":"Weather_weather-info__1chw9"}},4:function(e,t,n){e.exports={logo:"Nav_logo__1YG7V",navLinks:"Nav_navLinks__32f0V",burger:"Nav_burger__2fE4z",open:"Nav_open__1aekA",toggle:"Nav_toggle__4Vgyk",line1:"Nav_line1__3-PPz",line2:"Nav_line2__3myeT",line3:"Nav_line3__3x5bl"}},40:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(34),s=n.n(r),o=(n(40),n(41),n(11)),i=n.n(o),j=n(13),l=n(8),u=n(12),b=n(17),h=n.n(b),d=n(0),O=Object(a.createContext)(),p=h.a.create({baseURL:"https://smartgarden.ddns.net/php-login-registration-api/"});var g=function(e){var t=Object(a.useState)({isAuth:!1,theUser:null}),n=Object(u.a)(t,2),c=n[0],r=n[1],s=function(){var e=Object(j.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("login.php",{user:t.login,pass:t.password});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(j.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("loginToken"))){e.next=8;break}return p.defaults.headers.common.Authorization="bearer "+t,e.next=5,p.get("user-info.php");case 5:n=e.sent,(a=n.data).success&&a.user&&r(Object(l.a)(Object(l.a)({},c),{},{isAuth:!0,theUser:a.user}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b={rootState:c,setState:r,isLoggedIn:o,loginUser:s,logoutUser:function(){localStorage.removeItem("loginToken"),r(Object(l.a)(Object(l.a)({},c),{},{isAuth:!1}))}};return Object(d.jsx)(O.Provider,{value:b,children:e.children})},x=n(9),f=n(2),m=n(4),v=n.n(m),_=n(18),w=n.n(_);var k=function(e){var t=e.menuToggle,n=e.setMenuToggle;return Object(d.jsxs)("div",{className:t?w()(v.a.burger,v.a.toggle):v.a.burger,onClick:function(){n(!t)},children:[Object(d.jsx)("div",{className:v.a.line1}),Object(d.jsx)("div",{className:v.a.line2}),Object(d.jsx)("div",{className:v.a.line3})]})};var N=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r={color:"#ffffff",textDecoration:"none",fontSize:"22px"},s=Object(a.useContext)(O),o=s.rootState,i=s.logoutUser;return o.isAuth?Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:v.a.logo}),Object(d.jsxs)("ul",{className:n?w()(v.a.open,v.a.navLinks):v.a.navLinks,children:[Object(d.jsx)(x.b,{style:r,to:"/valves",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"Zawory"})}),Object(d.jsx)(x.b,{style:r,to:"/weather",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"Pogoda"})}),Object(d.jsx)(x.b,{style:r,to:"/about",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"O stronie"})}),Object(d.jsx)(x.b,{style:r,to:"/contact",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"Kontakt"})}),Object(d.jsx)(x.b,{style:r,to:"/",children:Object(d.jsx)("li",{onClick:function(){i(),c(!n)},children:"Wyloguj"})})]}),Object(d.jsx)(k,{menuToggle:n,setMenuToggle:c})]}):Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:v.a.logo}),Object(d.jsxs)("ul",{className:n?w()(v.a.open,v.a.navLinks):v.a.navLinks,children:[Object(d.jsx)(x.b,{style:r,to:"/about",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"O stronie"})}),Object(d.jsx)(x.b,{style:r,to:"/contact",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"Kontakt"})}),Object(d.jsx)(x.b,{style:r,to:"/login",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"Zaloguj"})})]}),Object(d.jsx)(k,{menuToggle:n,setMenuToggle:c})]})};var y=function(){return Object(d.jsx)("h1",{children:"About"})},L=n(20),C=n.n(L);var S=function(){var e=Object(a.useState)("Temperatura: 0,Wilgotnosc: 0,Opady: 0,Jasnosc: 0"),t=Object(u.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(j.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("loginToken"))){e.next=8;break}return h.a.defaults.headers.Authorization="bearer "+t,e.next=5,h.a.get("https://smartgarden.ddns.net/php-login-registration-api/weather-info.php");case 5:a=e.sent,r=a.data,c(r);case 8:console.log(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:C.a["weather-container"],children:[Object(d.jsx)("br",{}),Object(d.jsx)("h1",{children:"Weather"}),Object(d.jsx)("button",{className:C.a["weather-button"],onClick:r,children:"Pobierz pogod\u0119"}),Object(d.jsxs)("ul",{className:C.a["weather-info"],children:[Object(d.jsxs)("li",{children:["Temperatura: ",n.Temperatura]}),Object(d.jsxs)("li",{children:["Wilgotnosc: ",n.Wilgotnosc]}),Object(d.jsxs)("li",{children:["Opady: ",n.Opady]}),Object(d.jsxs)("li",{children:["Jasnosc: ",n.Jasnosc]})]})]})};var I=function(){return Object(d.jsx)("h1",{children:"Kontakt"})};var T=function(){return Object(d.jsx)("h1",{children:"Zawory"})},M=n(19),A=n(15),W=n.n(A);var P=function(){var e=Object(a.useContext)(O),t=e.loginUser,n=e.isLoggedIn,c={userInfo:{login:"",password:""},errorMsg:"",successMsg:""},r=Object(a.useState)(c),s=Object(u.a)(r,2),o=s[0],b=s[1],h=function(e){b(Object(l.a)(Object(l.a)({},o),{},{userInfo:Object(l.a)(Object(l.a)({},o.userInfo),{},Object(M.a)({},e.target.name,e.target.value))}))},p=function(){var e=Object(j.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t(o.userInfo);case 3:if(!(r=e.sent).success||!r.token){e.next=11;break}return b(Object(l.a)({},c)),localStorage.setItem("loginToken",r.token),e.next=9,n();case 9:e.next=12;break;case 11:b(Object(l.a)(Object(l.a)({},o),{},{successMsg:"",errorMsg:r.message}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g="",x="";return o.errorMsg&&(x=Object(d.jsx)("div",{children:o.errorMsg})),o.successMsg&&(g=Object(d.jsx)("div",{children:o.sucessMsg})),Object(d.jsx)("div",{className:W.a.homepage,children:Object(d.jsxs)("div",{id:"panel",className:W.a["form-login"],children:[Object(d.jsx)("br",{}),Object(d.jsx)("h1",{children:"Logowanie"}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:p,noValidate:!0,children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:W.a["form-input"],id:"username",name:"login",type:"text",required:!0,placeholder:"Wprowad\u017a login",value:o.userInfo.login,onChange:h})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:W.a["form-input"],id:"password",name:"password",type:"password",required:!0,placeholder:"Wprowad\u017a has\u0142o",value:o.userInfo.password,onChange:h})}),x,g,Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:W.a["form-button"],type:"submit",children:"Zaloguj si\u0119"})})]})]})})};var U=function(){var e=Object(a.useContext)(O),t=e.rootState,n=e.isLoggedIn,c=t.isAuth;return Object(a.useEffect)((function(){n()}),[]),console.log(c),c?Object(d.jsx)("div",{children:Object(d.jsx)(x.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"main",children:Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{path:"/",exact:!0,component:S}),Object(d.jsx)(f.a,{path:"/valves",component:T}),Object(d.jsx)(f.a,{path:"/weather",component:S}),Object(d.jsx)(f.a,{path:"/about",component:y}),Object(d.jsx)(f.a,{path:"/contact",component:I}),Object(d.jsx)(f.a,{path:"/*",component:S})]})})]})})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"main",children:Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{path:"/",exact:!0,component:P}),Object(d.jsx)(f.a,{path:"/about",component:y}),Object(d.jsx)(f.a,{path:"/contact",component:I}),Object(d.jsx)(f.a,{path:"/login",component:P}),Object(d.jsx)(f.a,{path:"/*",component:P})]})})]})})})};var z=function(){return Object(d.jsx)(g,{children:Object(d.jsx)(U,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),F()}},[[67,1,2]]]);
//# sourceMappingURL=main.d548dad7.chunk.js.map