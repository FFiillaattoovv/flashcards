(this.webpackJsonpflashcards=this.webpackJsonpflashcards||[]).push([[0],{14:function(e,t,n){e.exports={loginBlock:"Login_loginBlock__--uzg",loginList:"Login_loginList__1unfP",loginTitle:"Login_loginTitle__2XPJ2",loginInput:"Login_loginInput__1STqW",rememberBlock:"Login_rememberBlock__1fmrK",forgotLink:"Login_forgotLink__ho-ZO",forgotLinkActive:"Login_forgotLinkActive__1BuvV",btnBlock:"Login_btnBlock__f4D2u",loginText:"Login_loginText__1mcpT",signUpLink:"Login_signUpLink__1F2wY",signUpLinkActive:"Login_signUpLinkActive__3Ber0"}},15:function(e,t,n){e.exports={restoreContainer:"Restore_restoreContainer__pNOwt",restoreForm:"Restore_restoreForm__2q58P",error:"Restore_error__2vHkR",buttonsContainer:"Restore_buttonsContainer__1MLiq"}},20:function(e,t,n){e.exports={group:"SuperInputText_group__2S800",errorInput:"SuperInputText_errorInput__34Qzl",error:"SuperInputText_error__jx1Vx"}},24:function(e,t,n){e.exports={signUpContainer:"SignUp_signUpContainer__3gp3q",signUpForm:"SignUp_signUpForm__17AjK",error:"SignUp_error__2gvSH",buttonsContainer:"SignUp_buttonsContainer__Thwab"}},28:function(e,t,n){e.exports={default:"SuperButton_default__h-veD",white:"SuperButton_white__3peMs",blue:"SuperButton_blue__5JLOT",red:"SuperButton_red__gbQyz"}},29:function(e,t,n){e.exports={container:"Error404_container__3qUyK",main:"Error404_main__2H8Cg",fof:"Error404_fof__27oWq",type:"Error404_type__36aHc"}},3:function(e,t,n){e.exports={page:"Profile_page__1ig7T",sidebar:"Profile_sidebar__3FVKA",profile:"Profile_profile__1ckON",image:"Profile_image__3RvGR",name:"Profile_name__vWPKS",description:"Profile_description__2M_zJ",range:"Profile_range__3tOIG",content:"Profile_content__2FNVr",header:"Profile_header__ykEE7",main:"Profile_main__1Dgqn",listItem:"Profile_listItem__2adLH",table:"Profile_table__3AEAh",btn:"Profile_btn__2S_sp",footer:"Profile_footer__3sIyv",pagination:"Profile_pagination___DVmq"}},34:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1ar1v",spanClassName:"SuperCheckbox_spanClassName__25qhW"}},44:function(e,t,n){e.exports={header:"Header_header__2AAZ9"}},46:function(e,t,n){e.exports={navLink:"CustomNavLink_navLink__1zMvl"}},53:function(e,t,n){},54:function(e,t,n){e.exports={App:"App_App__iX4cl"}},81:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(25),s=n.n(a),o=(n(53),n(54),n(2)),i=n(44),u=n.n(i),l=n(6),j=n(7),d=n(4),b=n(19),O=n(20),h=n.n(O),p=n(0),f=["placeholder","type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],x=c.a.memo((function(e){var t=e.placeholder,n=e.type,r=e.onChange,c=e.onChangeText,a=e.onKeyPress,s=e.onEnter,o=e.error,i=e.className,u=e.spanClassName,l=Object(b.a)(e,f);console.log(t);var j="".concat(h.a.error," ").concat(u||"");"".concat(h.a.input," ").concat(o?h.a.errorInput:h.a.superInput," ").concat(i);return Object(p.jsxs)("div",{className:h.a.group,children:[Object(p.jsx)("input",Object(d.a)({type:n,required:!0,onChange:function(e){r&&r(e),c&&c(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),s&&"Enter"===e.key&&s()}},l)),Object(p.jsx)("label",{children:t}),o&&Object(p.jsx)("span",{className:j,children:o})]})})),m=n(28),g=n.n(m),_=["color","className"],v=c.a.memo((function(e){var t=e.color,n=(e.className,Object(b.a)(e,_)),r="".concat(t?g.a[t]:g.a.default," ").concat(g.a.default);return console.log("SB"),Object(p.jsx)("button",Object(d.a)({className:r},n))})),C=n(34),S=n.n(C),k=["type","onChange","onChangeChecked","className","spanClassName","children"],N=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(b.a)(e,k),s="".concat(S.a.checkbox," ").concat(r||"");return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",Object(d.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(p.jsx)("span",{className:S.a.spanClassName,children:c})]})},E=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(r.useState)(!1),i=Object(j.a)(o,2),u=i[0],l=i[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"test"}),Object(p.jsx)(x,{value:n,onChangeText:c,onEnter:s,error:a}),Object(p.jsx)(v,{children:"default"}),Object(p.jsx)(v,{disabled:!0,children:"disabled"}),Object(p.jsx)(v,{onClick:s,children:"delete "}),Object(p.jsx)(N,{checked:u,onChangeChecked:l,children:"some text"}),Object(p.jsx)(N,{checked:u,onChange:function(e){return l(e.currentTarget.checked)}})]})},L=n(29),P=n.n(L);var w=function(){return Object(p.jsx)("div",{className:P.a.container,children:Object(p.jsx)("div",{className:P.a.main,children:Object(p.jsx)("div",{className:P.a.fof,children:Object(p.jsx)("h1",{children:"Error 404"})})})})},I=n(11),T=n(14),y=n.n(T),A=n(17),R=n.n(A),U=n(23),D=n(16),G=n.n(D),F=G.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),B=function(e,t,n){return F.post("auth/login",{email:e,password:t,rememberMe:n})},K=function(){return F.delete("auth/me")},M=function(){return F.post("auth/me",{})},H={userId:"",email:"",isAuth:!1,isLoggedIn:!1,error:"",isLoading:!1,name:"",avatar:""},W=function(e){return{type:"IS-LOGGED-IN-CHANGE",isLoggedIn:e}},q=function(e){return{type:"SET-ERROR",error:e}},V=function(e){return{type:"SET-IS-LOADING",isLoading:e}},z=function(e,t,n,r,c){return{type:"SET-AUTH-USER-DATA",userId:e,email:t,isAuth:n,name:r,avatar:c}},J=function(){return function(){var e=Object(U.a)(R.a.mark((function e(t){var n,r,c,a,s,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:n=e.sent,r=n.data,c=r._id,a=r.email,s=r.name,o=r.avatar,t(z(c,a,!0,s,o));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var Q=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth.isAuth})),n=Object(o.c)((function(e){return e.auth.error})),c=Object(o.c)((function(e){return e.auth.isLoading})),a=Object(r.useState)(""),s=Object(j.a)(a,2),i=s[0],u=s[1],d=Object(r.useState)(""),b=Object(j.a)(d,2),O=b[0],h=b[1],f=Object(r.useState)(!1),m=Object(j.a)(f,2),g=m[0],_=m[1];return t?Object(p.jsx)(l.a,{to:"/profile"}):Object(p.jsx)("div",{className:y.a.loginBlock,children:Object(p.jsxs)("div",{className:y.a.loginList,children:[Object(p.jsx)("h1",{className:y.a.loginTitle,children:"Login"}),c?Object(p.jsx)("div",{style:{color:"green"},children:"Loading..."}):"",Object(p.jsx)(x,{className:y.a.loginInput,placeholder:"Email",value:i,onChange:function(e){return u(e.currentTarget.value)}}),Object(p.jsx)(x,{className:y.a.loginInput,placeholder:"Password",value:O,onChange:function(e){return h(e.currentTarget.value)}}),Object(p.jsxs)("div",{className:y.a.rememberBlock,children:[Object(p.jsx)(N,{checked:g,onClick:function(){return _(!g)},children:"Remember me"}),Object(p.jsx)(I.b,{to:Ae.RESET_PASSWORD,className:y.a.forgotLink,activeClassName:y.a.forgotLincActive,children:"Forgot password"})]}),Object(p.jsxs)("div",{className:y.a.btnBlock,children:[Object(p.jsx)(v,{color:"blue",onClick:function(){var t;e((t={email:i,password:O,rememberMe:g},function(e){e(V(!0)),B(t.email,t.password,t.rememberMe).then((function(){e(W(!0)),e(V(!1)),e(J()),e(q(""))})).catch((function(){e(W(!1)),e(V(!1))}))}))},children:"Login"}),Object(p.jsx)("div",{className:y.a.loginText,children:"Don't have an account?"}),Object(p.jsx)(I.b,{to:Ae.SIGN_UP,className:y.a.signUpLink,activeClassName:y.a.signUpLinkActive,children:"Sign Up"})]}),n?Object(p.jsx)("div",{style:{color:"red"},children:n}):""]})})},X=n(24),Z=n.n(X),$=G.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/"}),Y=function(e,t){return $.post("auth/register",{email:e,password:t})},ee={isLoggedIn:!1,error:""},te=function(e){return{type:"SET-ERROR",error:e}};var ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.signUp.isLoggedIn})),n=Object(o.c)((function(e){return e.signUp.error})),c=Object(r.useState)(""),a=Object(j.a)(c,2),s=a[0],i=a[1],u=Object(r.useState)(""),d=Object(j.a)(u,2),b=d[0],O=d[1],h=Object(r.useState)(""),f=Object(j.a)(h,2),m=f[0],g=f[1],_=function(){e(b===m?function(e,t){return function(n){Y(e,t).then((function(e){n({type:"SET-IS_LOGGED_IN",value:!0})})).catch((function(e){n(te(e.response.data.error))}))}}(s,b):te("Password mismatch"))};return Object(p.jsxs)("div",{className:Z.a.signUpContainer,onSubmit:function(){_()},children:[t&&Object(p.jsx)(l.a,{to:Ae.LOGIN}),Object(p.jsxs)("form",{className:Z.a.signUpForm,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Create a new account"}),n&&Object(p.jsx)("span",{className:Z.a.error,children:n})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{value:s,onChangeText:i,onEnter:_,type:"text",placeholder:"Email"}),Object(p.jsx)(x,{value:b,onChangeText:O,onEnter:_,type:"Password",placeholder:"Password"}),Object(p.jsx)(x,{value:m,onChangeText:g,onEnter:_,type:"Password",placeholder:"Confirm Password"})]}),Object(p.jsxs)("div",{className:Z.a.buttonsContainer,children:[Object(p.jsx)(v,{type:"button",onClick:function(){i(""),O(""),g(""),e(te(""))},color:"white",children:"Cancel"}),Object(p.jsx)(v,{type:"submit",color:"blue",children:"Register"})]})]})]})},re=n(3),ce=n.n(re);function ae(e){var t=e.avatar?e.avatar:"https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg";return Object(p.jsxs)("div",{className:ce.a.profile,children:[Object(p.jsx)("div",{className:ce.a.image,children:Object(p.jsx)("img",{src:t,alt:"User"})}),Object(p.jsx)("div",{className:ce.a.name,children:e.name}),Object(p.jsx)("div",{className:ce.a.description,children:"Front-end developer"})]})}function se(e){return Object(p.jsx)("tr",{className:ce.a.listItem,children:e.headers.map((function(e){return Object(p.jsx)("th",{children:e})}))})}var oe=n(48),ie=G.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),ue=function(e){var t=e?"&user_id=".concat(e):"";return ie.get("cards/pack?pageCount=8".concat(t))},le=function(){return ie.post("cards/pack",{cardsPack:{name:"English pack"}})},je=function(e){return ie.delete("cards/pack?id=".concat(e))},de=function(e){return ie.put("cards/pack",{cardsPack:{_id:e,name:"German pack"}})},be={cardPacks:[],cardPacksTotalCount:null,maxCardsCount:null,minCardsCount:null,page:null,pageCount:null},Oe=function(e){return function(t){ue(e).then((function(e){t({type:"SET-PACKS",data:e.data})})).catch((function(e){console.log(e)}))}};function he(e){var t=Object(o.b)();return Object(p.jsx)(p.Fragment,{children:e.items.map((function(e,n){var r=e.updated.slice(0,10),c=e.user_name.slice(0,30),a=e._id;return Object(p.jsxs)("tr",{className:ce.a.listItem,children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.cardsCount}),Object(p.jsx)("td",{children:r}),Object(p.jsx)("td",{children:c}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{className:ce.a.btn,onClick:function(){t(function(e){return function(t){je(e).then((function(){t(Oe())})).catch((function(e){console.log(e)}))}}(a))},children:"Delete"}),Object(p.jsx)("button",{style:{marginLeft:"10px"},className:ce.a.btn,onClick:function(){t(function(e){return function(t){de(e).then((function(){t(Oe())})).catch((function(e){console.log(e)}))}}(a))},children:"Edit"})]})]},n)}))})}function pe(e){return Object(p.jsxs)("table",{className:ce.a.table,children:[Object(p.jsx)(se,{headers:e.headers}),Object(p.jsx)(he,{items:e.items})]})}function fe(){return Object(p.jsx)("input",{type:"search",placeholder:"Search..."})}function xe(e){return Object(p.jsx)("h1",{children:e.title})}function me(){var e=Object(r.useState)(50),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{className:ce.a.range,children:[Object(p.jsx)("div",{children:"Number of cards"}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:n})}),Object(p.jsx)("input",{type:"range",name:"range",min:"0",max:"100",value:n,onChange:function(e){return c(+e.currentTarget.value)}})]})}function ge(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("span",{className:ce.a.pagination,children:e.page})})}var _e=function(){var e=Object(o.c)((function(e){return e.auth.name})),t=Object(o.c)((function(e){return e.auth.avatar})),n=Object(o.c)((function(e){return e.packs.cardPacks})),c=Object(o.c)((function(e){return e.packs.page})),a=Object(o.b)();return Object(r.useEffect)((function(){a(Oe())}),[a]),Object(p.jsxs)("div",{className:ce.a.page,children:[Object(p.jsxs)("aside",{className:ce.a.sidebar,children:[Object(p.jsx)(ae,{name:e,avatar:t}),Object(p.jsx)(me,{})]}),Object(p.jsxs)("div",{className:ce.a.content,children:[Object(p.jsxs)("header",{className:ce.a.header,children:[Object(p.jsx)(xe,{title:"Packs list ".concat(e)}),Object(p.jsx)(fe,{})]}),Object(p.jsx)("main",{className:ce.a.main,children:Object(p.jsx)(pe,{headers:["Name","Cards","Last Updated","Created by","Actions"],items:n})}),Object(p.jsx)("footer",{className:ce.a.footer,children:Object(p.jsx)(ge,{page:c})})]})]})},ve=G.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),Ce=function(e){return ve.post("auth/forgot",e)},Se=function(e){return ve.post("auth/set-new-password",e)},ke={email:null,restoreEmailSendSuccess:!1,newPasswordSuccess:!1},Ne=function(e){return{type:"restore/SET-RECEIVER-EMAIL",email:e}},Ee=function(e){return{type:"restore/CHANGE-PASSWORD-SUCCESS",success:e}},Le=n(15),Pe=n.n(Le);var we=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.restore.restoreEmailSendSuccess})),n=Object(r.useState)(""),c=Object(j.a)(n,2),a=c[0],s=c[1];return t?Object(p.jsx)(l.a,{to:Ae.CHECK_EMAIL}):Object(p.jsx)("div",{className:Pe.a.restoreContainer,children:Object(p.jsxs)("form",{className:Pe.a.restoreForm,onSubmit:function(t){var n;t.preventDefault(),e((n=a,function(){var e=Object(U.a)(R.a.mark((function e(t){var r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={email:n,from:"NEKO ADMIN <ai73a@yandex.by>",message:'<div style="padding: 15px">Password recovery link: <a href="https://ffiillaattoovv.github.io/flashcards#/newPassword/$token$">click here</a></div>'},e.next=4,Ce(r);case 4:c=e.sent,t(Ne(n)),t({type:"restore/EMAIL-SEND-SUCCESS",success:c.data.success}),t(Ee(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"Forgot your password?"})}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{value:a,onChange:function(e){s(e.currentTarget.value)},type:"text",placeholder:"Email"})}),Object(p.jsx)("div",{className:Pe.a.buttonsContainer,children:Object(p.jsx)(v,{type:"submit",color:"blue",children:"Send instructions"})})]})})};var Ie=function(){var e=Object(o.b)(),t=Object(l.g)().token,n=Object(o.c)((function(e){return e.restore.newPasswordSuccess})),c=Object(r.useState)(""),a=Object(j.a)(c,2),s=a[0],i=a[1];return n?Object(p.jsx)(l.a,{to:Ae.LOGIN}):Object(p.jsx)("div",{className:Pe.a.restoreContainer,children:Object(p.jsxs)("form",{className:Pe.a.restoreForm,onSubmit:function(n){n.preventDefault(),e(function(e,t){return function(){var n=Object(U.a)(R.a.mark((function n(r){var c;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c={password:e,resetPasswordToken:t},n.next=4,Se(c);case 4:r(Ee(!0)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(s,t))},children:[Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"Create new password"})}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{value:s,onChange:function(e){i(e.currentTarget.value)},type:"password",placeholder:"New password"})}),Object(p.jsx)("p",{children:"Create new password and log in with it afterwards"}),Object(p.jsx)("div",{className:Pe.a.buttonsContainer,children:Object(p.jsx)(v,{type:"submit",color:"blue",children:"Create new password"})})]})})};var Te=function(){var e=Object(o.c)((function(e){return e.restore.email}));return Object(p.jsx)("div",{className:Pe.a.restoreContainer,children:Object(p.jsxs)("div",{className:Pe.a.restoreForm,children:[Object(p.jsx)("h3",{children:"Check Email"}),Object(p.jsx)("img",{src:"",alt:"letter img"}),Object(p.jsxs)("p",{children:["We've sent an Email with instructions to ",e]})]})})},ye=function(){var e=Object(o.c)((function(e){return e.packs.page})),t=Object(o.c)((function(e){return e.packs.cardPacks})),n=Object(o.c)((function(e){return e.auth.userId})),c=Object(o.b)();return Object(r.useEffect)((function(){c(Oe())}),[c]),Object(p.jsxs)("div",{className:ce.a.page,children:[Object(p.jsxs)("aside",{className:ce.a.sidebar,children:[Object(p.jsx)("div",{className:ce.a.profile,children:Object(p.jsxs)("div",{style:{padding:"80px"},children:[Object(p.jsx)("button",{onClick:function(){c(Oe(n))},children:"My"}),Object(p.jsx)("button",{onClick:function(){c(Oe())},children:"All"})]})}),Object(p.jsx)(me,{})]}),Object(p.jsxs)("div",{className:ce.a.content,children:[Object(p.jsxs)("header",{className:ce.a.header,children:[Object(p.jsx)(xe,{title:"Packs list"}),Object(p.jsx)(fe,{}),Object(p.jsx)("button",{style:{marginLeft:"50px"},onClick:function(){c((function(e){le().then((function(){e(Oe())})).catch((function(e){console.log(e)}))}))},children:"Add new pack"})]}),Object(p.jsx)("main",{className:ce.a.main,children:Object(p.jsx)(pe,{headers:["Name","Cards","Last Updated","Created by","Actions"],items:t})}),Object(p.jsx)("footer",{className:ce.a.footer,children:Object(p.jsx)(ge,{page:e})})]})]})},Ae={LOGIN:"/login",SIGN_UP:"/signup",PROFILE:"/profile",PACKS:"/packs",RESET_PASSWORD:"/resetPassword",CHECK_EMAIL:"/checkEmail",NEW_PASSWORD:"/newPassword/:token",TEST:"/test"};var Re=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(p.jsx)(l.a,{to:Ae.LOGIN})}}),Object(p.jsx)(l.b,{path:Ae.LOGIN,render:function(){return Object(p.jsx)(Q,{})}}),Object(p.jsx)(l.b,{path:Ae.SIGN_UP,render:function(){return Object(p.jsx)(ne,{})}}),Object(p.jsx)(l.b,{path:Ae.PROFILE,render:function(){return Object(p.jsx)(_e,{})}}),Object(p.jsx)(l.b,{path:Ae.PACKS,render:function(){return Object(p.jsx)(ye,{})}}),Object(p.jsx)(l.b,{path:Ae.RESET_PASSWORD,render:function(){return Object(p.jsx)(we,{})}}),Object(p.jsx)(l.b,{path:Ae.CHECK_EMAIL,render:function(){return Object(p.jsx)(Te,{})}}),Object(p.jsx)(l.b,{path:Ae.NEW_PASSWORD,render:function(){return Object(p.jsx)(Ie,{})}}),Object(p.jsx)(l.b,{path:Ae.TEST,render:function(){return Object(p.jsx)(E,{})}}),Object(p.jsx)(l.b,{render:function(){return Object(p.jsx)(w,{})}})]})})},Ue=n(46),De=n.n(Ue),Ge=function(e){return Object(p.jsx)("div",{className:De.a.navLink,children:Object(p.jsx)(I.b,{to:e.to,children:e.title})})};var Fe=function(){var e=Object(o.b)();return Object(p.jsxs)("div",{className:u.a.header,children:[Object(p.jsx)(Ge,{title:"profile",to:Ae.PROFILE}),Object(p.jsx)(Ge,{title:"packs",to:Ae.PACKS}),Object(p.jsx)(Ge,{title:"sign-up",to:Ae.SIGN_UP}),Object(p.jsx)(Ge,{title:"login",to:Ae.LOGIN}),Object(p.jsx)(Ge,{title:"reset password",to:Ae.RESET_PASSWORD}),Object(p.jsx)(Ge,{title:"test",to:Ae.TEST}),Object(p.jsx)(I.b,{to:"/login",children:Object(p.jsx)(v,{color:"blue",onClick:function(){e((function(e){K().then((function(){e(z("","",!1))})).catch((function(t){e(q(t.response.data.error))}))}))},children:"logout"})})]})};var Be=function(){var e=Object(o.c)((function(e){return e.auth.isAuth}));return Object(p.jsx)("div",{children:e?Object(p.jsxs)("div",{children:[Object(p.jsx)(Fe,{}),Object(p.jsx)(Re,{})]}):Object(p.jsx)(Q,{})})},Ke=function(){var e=Object(o.b)();return Object(r.useEffect)((function(){e(J())}),[e]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(Be,{})})},Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},He=n(30),We={},qe=n(47),Ve=n.n(qe),ze=Object(He.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-LOGGED-IN-CHANGE":return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"SET-ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.error});case"SET-IS-LOADING":return Object(d.a)(Object(d.a)({},e),{},{isLoading:t.isLoading});case"SET-AUTH-USER-DATA":return Object(d.a)(Object(d.a)({},e),{},{userId:t.userId,email:t.email,isAuth:t.isAuth,name:t.name,avatar:t.avatar});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;return t.type,e},restore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"restore/SET-RECEIVER-EMAIL":return Object(d.a)(Object(d.a)({},e),{},{email:t.email});case"restore/EMAIL-SEND-SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{restoreEmailSendSuccess:t.success});case"restore/CHANGE-PASSWORD-SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{newPasswordSuccess:t.success});default:return e}},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-IS_LOGGED_IN":return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:t.value});case"SET-ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.error});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PACKS":return Object(d.a)(Object(d.a)({},e),{},{cardPacks:Object(oe.a)(t.data.cardPacks),cardPacksTotalCount:t.data.cardPacksTotalCount,maxCardsCount:t.data.maxCardsCount,minCardsCount:t.data.minCardsCount,page:t.data.page,pageCount:t.data.pageCount});default:return e}}}),Je=Object(He.c)(ze,Object(He.a)(Ve.a));window.store=Je,s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(I.a,{children:Object(p.jsx)(o.a,{store:Je,children:Object(p.jsx)(Ke,{})})})}),document.getElementById("root")),Me()}},[[81,1,2]]]);
//# sourceMappingURL=main.f0ffe298.chunk.js.map