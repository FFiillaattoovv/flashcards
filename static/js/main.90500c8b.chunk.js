(this.webpackJsonpflashcards=this.webpackJsonpflashcards||[]).push([[0],{12:function(e,t,n){e.exports={loginBlock:"Login_loginBlock__--uzg",loginList:"Login_loginList__1unfP",loginTitle:"Login_loginTitle__2XPJ2",loginInput:"Login_loginInput__1STqW",rememberBlock:"Login_rememberBlock__1fmrK",forgotLink:"Login_forgotLink__ho-ZO",forgotLinkActive:"Login_forgotLinkActive__1BuvV",loginButton:"Login_loginButton__v2Txz",loginText:"Login_loginText__1mcpT",signUpLink:"Login_signUpLink__1F2wY",signUpLinkActive:"Login_signUpLinkActive__3Ber0"}},17:function(e,t,n){e.exports={group:"SuperInputText_group__2S800",superInput:"SuperInputText_superInput__1nLoi",errorInput:"SuperInputText_errorInput__34Qzl",error:"SuperInputText_error__jx1Vx"}},22:function(e,t,n){e.exports={container:"Error404_container__3qUyK",main:"Error404_main__2H8Cg",fof:"Error404_fof__27oWq",type:"Error404_type__36aHc"}},23:function(e,t,n){e.exports={signUpContainer:"SignUp_signUpContainer__3gp3q",signUpForm:"SignUp_signUpForm__17AjK",error:"SignUp_error__2gvSH"}},28:function(e,t,n){e.exports={App:"App_App__iX4cl"}},29:function(e,t,n){e.exports={default:"SuperButton_default__h-veD",red:"SuperButton_red__gbQyz"}},30:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1ar1v",spanClassName:"SuperCheckbox_spanClassName__25qhW"}},41:function(e,t,n){e.exports={header:"Header_header__2AAZ9"}},43:function(e,t,n){e.exports={navLink:"CustomNavLink_navLink__1zMvl"}},49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(20),s=n.n(a),o=(n(49),n(28)),i=n.n(o),u=n(13),j=n(5),l=n(41),b=n.n(l),d=n(4),O=n(6),p=n(3),h=n(16),g=n(17),x=n.n(g),f=n(0),m=["placeholder","type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],v=c.a.memo((function(e){var t=e.placeholder,n=e.type,r=e.onChange,c=e.onChangeText,a=e.onKeyPress,s=e.onEnter,o=e.error,i=e.className,u=e.spanClassName,j=Object(h.a)(e,m);console.log(t);var l="".concat(x.a.error," ").concat(u||"");"".concat(x.a.input," ").concat(o?x.a.errorInput:x.a.superInput," ").concat(i);return Object(f.jsxs)("div",{className:x.a.group,children:[Object(f.jsx)("input",Object(p.a)({type:n,required:!0,onChange:function(e){r&&r(e),c&&c(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),s&&"Enter"===e.key&&s()}},j)),Object(f.jsx)("label",{children:t}),o&&Object(f.jsx)("span",{className:l,children:o})]})})),_=n(29),S=n.n(_),E=["red","className"],C=c.a.memo((function(e){var t=e.red,n=e.className,r=Object(h.a)(e,E),c="".concat(t?S.a.red:S.a.default," ").concat(n);return console.log("SB"),Object(f.jsx)("button",Object(p.a)({className:c},r))})),L=n(30),N=n.n(L),I=["type","onChange","onChangeChecked","className","spanClassName","children"],k=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(h.a)(e,I),s="".concat(N.a.checkbox," ").concat(r||"");return Object(f.jsxs)("label",{children:[Object(f.jsx)("input",Object(p.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(f.jsx)("span",{className:N.a.spanClassName,children:c})]})},w=function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(r.useState)(!1),i=Object(O.a)(o,2),u=i[0],j=i[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"test"}),Object(f.jsx)(v,{value:n,onChangeText:c,onEnter:s,error:a}),Object(f.jsx)(C,{children:"default"}),Object(f.jsx)(C,{disabled:!0,children:"disabled"}),Object(f.jsx)(C,{red:!0,onClick:s,children:"delete "}),Object(f.jsx)(k,{checked:u,onChangeChecked:j,children:"some text"}),Object(f.jsx)(k,{checked:u,onChange:function(e){return j(e.currentTarget.checked)}})]})},T=n(22),y=n.n(T);var A=function(){return Object(f.jsx)("div",{className:y.a.container,children:Object(f.jsx)("div",{className:y.a.main,children:Object(f.jsx)("div",{className:y.a.fof,children:Object(f.jsx)("h1",{children:"Error 404"})})})})},P=n(12),R=n.n(P),U=n(15),G=n.n(U),D=G.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),B=function(e,t,n){return D.post("auth/login",{email:e,password:t,rememberMe:n})},W={isLoggedIn:!1,error:"",isLoading:!1},F=function(e){return{type:"IS-LOGGED-IN-CHANGE",isLoggedIn:e}},M=function(e){return{type:"SET-ERROR",error:e}},H=function(e){return{type:"SET-IS-LOADING",isLoading:e}};var K=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.auth.isLoggedIn})),n=Object(j.c)((function(e){return e.auth.error})),c=Object(j.c)((function(e){return e.auth.isLoading})),a=Object(r.useState)(""),s=Object(O.a)(a,2),o=s[0],i=s[1],l=Object(r.useState)(""),b=Object(O.a)(l,2),p=b[0],h=b[1],g=Object(r.useState)(!1),x=Object(O.a)(g,2),m=x[0],_=x[1];return t?Object(f.jsx)(d.a,{to:"/profile"}):Object(f.jsx)("div",{className:R.a.loginBlock,children:Object(f.jsxs)("div",{className:R.a.loginList,children:[Object(f.jsx)("h1",{className:R.a.loginTitle,children:"Login"}),c?Object(f.jsx)("div",{style:{color:"green"},children:"Loading..."}):"",Object(f.jsx)(v,{className:R.a.loginInput,placeholder:"Email",value:o,onChange:function(e){return i(e.currentTarget.value)}}),Object(f.jsx)(v,{className:R.a.loginInput,placeholder:"Password",value:p,onChange:function(e){return h(e.currentTarget.value)}}),Object(f.jsxs)("div",{className:R.a.rememberBlock,children:[Object(f.jsx)(k,{checked:m,onClick:function(){return _(!m)},children:"Remember me"}),Object(f.jsx)(u.b,{to:le.RESET_PASSWORD,className:R.a.forgotLink,activeClassName:R.a.forgotLincActive,children:"Forgot password"})]}),Object(f.jsx)(C,{className:R.a.loginButton,onClick:function(){var t;e((t={email:o,password:p,rememberMe:m},function(e){e(H(!0)),B(t.email,t.password,t.rememberMe).then((function(){e({type:"SET-LOGIN"}),e(F(!0)),e(H(!1)),e(M(""))})).catch((function(t){e(F(!1)),e(M(t.response.data.error)),e(H(!1))}))}))},children:"Login"}),Object(f.jsx)("div",{className:R.a.loginText,children:"Don't have an account?"}),Object(f.jsx)(u.b,{to:le.SIGN_UP,className:R.a.signUpLink,activeClassName:R.a.signUpLinkActive,children:"Sign Up"}),n?Object(f.jsx)("div",{style:{color:"red"},children:n}):""]})})},q=n(23),z=n.n(q),V=G.a.create({baseURL:"http://localhost:7542/2.0/"}),J=function(e,t){return V.post("auth/register",{email:e,password:t})},Q={isLoggedIn:!1,error:""},X=function(e){return{type:"SET-ERROR",error:e}};var Z=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.signUp.isLoggedIn})),n=Object(j.c)((function(e){return e.signUp.error})),c=Object(r.useState)(""),a=Object(O.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(""),u=Object(O.a)(i,2),l=u[0],b=u[1],p=Object(r.useState)(""),h=Object(O.a)(p,2),g=h[0],x=h[1],m=function(){e(l===g?function(e,t){return function(n){J(e,t).then((function(e){n({type:"SET-IS_LOGGED_IN",value:!0})})).catch((function(e){n(X(e.response.data.error))}))}}(s,l):X("Password mismatch"))};return Object(f.jsxs)("div",{className:z.a.signUpContainer,onSubmit:function(){m()},children:[t&&Object(f.jsx)(d.a,{to:le.LOGIN}),Object(f.jsxs)("form",{className:z.a.signUpForm,children:[Object(f.jsx)("h3",{children:"Create a new account"}),Object(f.jsx)("span",{className:z.a.error,children:n}),Object(f.jsx)(v,{value:s,onChangeText:o,onEnter:m,error:"",type:"text",placeholder:"Email"}),Object(f.jsx)(v,{value:l,onChangeText:b,onEnter:m,error:"",type:"Password",placeholder:"Password"}),Object(f.jsx)(v,{value:g,onChangeText:x,onEnter:m,error:"",type:"Password",placeholder:"Confirm Password"}),Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{type:"submit",children:"Sign Up"}),Object(f.jsx)(C,{type:"button",onClick:function(){o(""),b(""),x("")},children:"Cancel"})]})]})]})};var $=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("h1",{children:"Profile component"})})},Y=n(19),ee=n.n(Y),te=n(32),ne=G.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),re=function(e){return ne.post("auth/forgot",e)},ce=function(e){return ne.post("auth/set-new-password",e)},ae={email:null,restoreEmailSendSuccess:!1,newPasswordSuccess:!1},se=function(e){return{type:"restore/SET-RECEIVER-EMAIL",email:e}},oe=function(e){return{type:"restore/CHANGE-PASSWORD-SUCCESS",success:e}};var ie=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.restore.restoreEmailSendSuccess})),n=Object(r.useState)(""),c=Object(O.a)(n,2),a=c[0],s=c[1];return t?Object(f.jsx)(d.a,{to:le.CHECK_EMAIL}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"It-incubator"}),Object(f.jsx)("h2",{children:"Forgot your password?"}),Object(f.jsx)("input",{type:"email",value:a,onChange:function(e){s(e.currentTarget.value)}}),Object(f.jsx)("p",{children:"Enter your email address and we will send you further instructions"}),Object(f.jsx)("button",{onClick:function(){var t;e((t=a,function(){var e=Object(te.a)(ee.a.mark((function e(n){var r,c;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={email:t,from:"NEKO ADMIN <ai73a@yandex.by>",message:'<div style="padding: 15px">Password recovery link: <a href="http://localhost:3000/flashcards#/newPassword/$token$">click here</a></div>'},e.next=4,re(r);case 4:c=e.sent,n(se(t)),n({type:"restore/EMAIL-SEND-SUCCESS",success:c.data.success}),n(oe(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))},children:"Send Instructions"}),Object(f.jsx)("p",{children:"Did you remember your password?"}),Object(f.jsx)("a",{href:"/login",children:"Try logging in"})]})};var ue=function(){var e=Object(j.b)(),t=Object(d.g)().token,n=Object(j.c)((function(e){return e.restore.newPasswordSuccess})),c=Object(r.useState)(""),a=Object(O.a)(c,2),s=a[0],o=a[1];return n?Object(f.jsx)(d.a,{to:le.LOGIN}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"It-incubator"}),Object(f.jsx)("h2",{children:"Create new password"}),Object(f.jsx)("input",{type:"password",value:s,onChange:function(e){o(e.currentTarget.value)}}),Object(f.jsx)("p",{children:"Create new password and we will send you further instructions to email"}),Object(f.jsx)("button",{onClick:function(){e(function(e,t){return function(){var n=Object(te.a)(ee.a.mark((function n(r){var c;return ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c={password:e,resetPasswordToken:t},n.next=4,ce(c);case 4:r(oe(!0)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(s,t))},children:"Create new password"})]})};var je=function(){var e=Object(j.c)((function(e){return e.restore.email}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"It-incubator"}),Object(f.jsx)("img",{src:"",alt:"letter img"}),Object(f.jsx)("h2",{children:"Check Email"}),Object(f.jsxs)("p",{children:["We've sent an Email with instructions to ",e]})]})},le={LOGIN:"/login",SIGN_UP:"/signup",PROFILE:"/profile",RESET_PASSWORD:"/resetPassword",CHECK_EMAIL:"/checkEmail",NEW_PASSWORD:"/newPassword/:token",TEST:"/test"};var be=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(d.d,{children:[Object(f.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(f.jsx)(d.a,{to:le.LOGIN})}}),Object(f.jsx)(d.b,{path:le.LOGIN,render:function(){return Object(f.jsx)(K,{})}}),Object(f.jsx)(d.b,{path:le.SIGN_UP,render:function(){return Object(f.jsx)(Z,{})}}),Object(f.jsx)(d.b,{path:le.PROFILE,render:function(){return Object(f.jsx)($,{})}}),Object(f.jsx)(d.b,{path:le.RESET_PASSWORD,render:function(){return Object(f.jsx)(ie,{})}}),Object(f.jsx)(d.b,{path:le.CHECK_EMAIL,render:function(){return Object(f.jsx)(je,{})}}),Object(f.jsx)(d.b,{path:le.NEW_PASSWORD,render:function(){return Object(f.jsx)(ue,{})}}),Object(f.jsx)(d.b,{path:le.TEST,render:function(){return Object(f.jsx)(w,{})}}),Object(f.jsx)(d.b,{render:function(){return Object(f.jsx)(A,{})}})]})})},de=n(43),Oe=n.n(de),pe=function(e){return Object(f.jsx)("div",{className:Oe.a.navLink,children:Object(f.jsx)(u.b,{to:e.to,children:e.title})})};var he=function(){return Object(f.jsxs)("div",{className:b.a.header,children:[Object(f.jsx)(pe,{title:"profile",to:le.PROFILE}),Object(f.jsx)(pe,{title:"sign-up",to:le.SIGN_UP}),Object(f.jsx)(pe,{title:"login",to:le.LOGIN}),Object(f.jsx)(pe,{title:"new password",to:le.NEW_PASSWORD}),Object(f.jsx)(pe,{title:"reset password",to:le.RESET_PASSWORD}),Object(f.jsx)(pe,{title:"test",to:le.TEST})]})};var ge=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(he,{}),Object(f.jsx)(be,{})]})},xe=n(24),fe={},me=n(44),ve=n.n(me),_e=Object(xe.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOGIN":return Object(p.a)({},e);case"IS-LOGGED-IN-CHANGE":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});case"SET-IS-LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:t.isLoading});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},restore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"restore/SET-RECEIVER-EMAIL":return Object(p.a)(Object(p.a)({},e),{},{email:t.email});case"restore/EMAIL-SEND-SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{restoreEmailSendSuccess:t.success});case"restore/CHANGE-PASSWORD-SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{newPasswordSuccess:t.success});default:return e}},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-IS_LOGGED_IN":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:t.value});case"SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});default:return e}}}),Se=Object(xe.c)(_e,Object(xe.a)(ve.a));window.store=Se;var Ee=function(){return Object(f.jsx)("div",{className:i.a.App,children:Object(f.jsx)(u.a,{children:Object(f.jsx)(j.a,{store:Se,children:Object(f.jsx)(ge,{})})})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Ee,{})}),document.getElementById("root")),Ce()}},[[76,1,2]]]);
//# sourceMappingURL=main.90500c8b.chunk.js.map