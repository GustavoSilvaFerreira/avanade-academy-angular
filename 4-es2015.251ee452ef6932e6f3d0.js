(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{cAcB:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{constructor(l,n){this.authService=l,this.router=n,this.dadosLogin={email:"",senha:""}}ngOnInit(){}entrar(){this.authService.login(this.dadosLogin.email,this.dadosLogin.senha).subscribe(l=>{alert("Login efetuado com sucesso!!!"),localStorage.setItem("token",l.idToken),this.authService.setUser({id:l.localId,email:l.email}),this.router.navigateByUrl("/todos")},l=>{switch(l.error.error.message){case"EMAIL_NOT_FOUND":alert("E-mail n\xe3o encontrado");break;case"INVALID_PASSWORD":alert("Senha inv\xe1lida");break;default:alert("Houve um erro")}})}}class t{constructor(l,n){this.authService=l,this.router=n,this.dadosCreate={email:"",senha:""}}ngOnInit(){}criar(){this.authService.createAccount(this.dadosCreate.email,this.dadosCreate.senha).subscribe(l=>{alert("Usu\xe1rio criado com sucesso"),localStorage.setItem("token",l.idToken),this.authService.setUser({id:l.localId,email:l.email}),this.router.navigateByUrl("/todos")})}}class a{}var o=u("pMnS"),r=u("s7LF"),s=u("qXBG"),d=u("iInd"),b=e.lb({encapsulation:0,styles:[[""]],data:{}});function c(l){return e.Db(0,[(l()(),e.nb(0,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),e.nb(1,0,null,null,11,"div",[["class","input-group mb-3"]],null,null,null,null,null)),(l()(),e.nb(2,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e.nb(3,0,null,null,1,"span",[["class","input-group-text"],["id","inputGroup-sizing-default"]],null,null,null,null,null)),(l()(),e.Bb(-1,null,["E-mail"])),(l()(),e.nb(5,0,null,null,7,"input",[["aria-describedby","email"],["aria-label","email"],["class","form-control"],["name","email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0,t=l.component;return"input"===n&&(i=!1!==e.vb(l,6)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==e.vb(l,6).onTouched()&&i),"compositionstart"===n&&(i=!1!==e.vb(l,6)._compositionStart()&&i),"compositionend"===n&&(i=!1!==e.vb(l,6)._compositionEnd(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(t.dadosLogin.email=u)&&i),i},null,null)),e.mb(6,16384,null,0,r.d,[e.B,e.k,[2,r.a]],null,null),e.mb(7,16384,null,0,r.o,[],{required:[0,"required"]},null),e.zb(1024,null,r.h,function(l){return[l]},[r.o]),e.zb(1024,null,r.i,function(l){return[l]},[r.d]),e.mb(10,671744,null,0,r.n,[[8,null],[6,r.h],[8,null],[6,r.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.zb(2048,null,r.j,null,[r.n]),e.mb(12,16384,null,0,r.k,[[4,r.j]],null,null),(l()(),e.nb(13,0,null,null,11,"div",[["class","input-group mb-3"]],null,null,null,null,null)),(l()(),e.nb(14,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e.nb(15,0,null,null,1,"span",[["class","input-group-text"],["id","inputGroup-sizing-default"]],null,null,null,null,null)),(l()(),e.Bb(-1,null,["Senha"])),(l()(),e.nb(17,0,null,null,7,"input",[["aria-describedby","senha"],["aria-label","senha"],["class","form-control"],["name","senha"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0,t=l.component;return"input"===n&&(i=!1!==e.vb(l,18)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==e.vb(l,18).onTouched()&&i),"compositionstart"===n&&(i=!1!==e.vb(l,18)._compositionStart()&&i),"compositionend"===n&&(i=!1!==e.vb(l,18)._compositionEnd(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(t.dadosLogin.senha=u)&&i),i},null,null)),e.mb(18,16384,null,0,r.d,[e.B,e.k,[2,r.a]],null,null),e.mb(19,16384,null,0,r.o,[],{required:[0,"required"]},null),e.zb(1024,null,r.h,function(l){return[l]},[r.o]),e.zb(1024,null,r.i,function(l){return[l]},[r.d]),e.mb(22,671744,null,0,r.n,[[8,null],[6,r.h],[8,null],[6,r.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.zb(2048,null,r.j,null,[r.n]),e.mb(24,16384,null,0,r.k,[[4,r.j]],null,null),(l()(),e.nb(25,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.entrar()&&e),e},null,null)),(l()(),e.Bb(-1,null,["Entrar"]))],function(l,n){var u=n.component;l(n,7,0,""),l(n,10,0,"email",u.dadosLogin.email),l(n,19,0,""),l(n,22,0,"senha",u.dadosLogin.senha)},function(l,n){l(n,5,0,e.vb(n,7).required?"":null,e.vb(n,12).ngClassUntouched,e.vb(n,12).ngClassTouched,e.vb(n,12).ngClassPristine,e.vb(n,12).ngClassDirty,e.vb(n,12).ngClassValid,e.vb(n,12).ngClassInvalid,e.vb(n,12).ngClassPending),l(n,17,0,e.vb(n,19).required?"":null,e.vb(n,24).ngClassUntouched,e.vb(n,24).ngClassTouched,e.vb(n,24).ngClassPristine,e.vb(n,24).ngClassDirty,e.vb(n,24).ngClassValid,e.vb(n,24).ngClassInvalid,e.vb(n,24).ngClassPending)})}function g(l){return e.Db(0,[(l()(),e.nb(0,0,null,null,1,"app-login",[],null,null,null,c,b)),e.mb(1,114688,null,0,i,[s.a,d.k],null,null)],function(l,n){l(n,1,0)},null)}var p=e.jb("app-login",i,g,{},{},[]),m=e.lb({encapsulation:0,styles:[[""]],data:{}});function v(l){return e.Db(0,[(l()(),e.nb(0,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),e.nb(1,0,null,null,11,"div",[["class","input-group mb-3"]],null,null,null,null,null)),(l()(),e.nb(2,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e.nb(3,0,null,null,1,"span",[["class","input-group-text"],["id","inputGroup-sizing-default"]],null,null,null,null,null)),(l()(),e.Bb(-1,null,["E-mail"])),(l()(),e.nb(5,0,null,null,7,"input",[["aria-describedby","email"],["aria-label","email"],["class","form-control"],["name","email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0,t=l.component;return"input"===n&&(i=!1!==e.vb(l,6)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==e.vb(l,6).onTouched()&&i),"compositionstart"===n&&(i=!1!==e.vb(l,6)._compositionStart()&&i),"compositionend"===n&&(i=!1!==e.vb(l,6)._compositionEnd(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(t.dadosCreate.email=u)&&i),i},null,null)),e.mb(6,16384,null,0,r.d,[e.B,e.k,[2,r.a]],null,null),e.mb(7,16384,null,0,r.o,[],{required:[0,"required"]},null),e.zb(1024,null,r.h,function(l){return[l]},[r.o]),e.zb(1024,null,r.i,function(l){return[l]},[r.d]),e.mb(10,671744,null,0,r.n,[[8,null],[6,r.h],[8,null],[6,r.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.zb(2048,null,r.j,null,[r.n]),e.mb(12,16384,null,0,r.k,[[4,r.j]],null,null),(l()(),e.nb(13,0,null,null,11,"div",[["class","input-group mb-3"]],null,null,null,null,null)),(l()(),e.nb(14,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e.nb(15,0,null,null,1,"span",[["class","input-group-text"],["id","inputGroup-sizing-default"]],null,null,null,null,null)),(l()(),e.Bb(-1,null,["Senha"])),(l()(),e.nb(17,0,null,null,7,"input",[["aria-describedby","senha"],["aria-label","senha"],["class","form-control"],["name","senha"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0,t=l.component;return"input"===n&&(i=!1!==e.vb(l,18)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==e.vb(l,18).onTouched()&&i),"compositionstart"===n&&(i=!1!==e.vb(l,18)._compositionStart()&&i),"compositionend"===n&&(i=!1!==e.vb(l,18)._compositionEnd(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(t.dadosCreate.senha=u)&&i),i},null,null)),e.mb(18,16384,null,0,r.d,[e.B,e.k,[2,r.a]],null,null),e.mb(19,16384,null,0,r.o,[],{required:[0,"required"]},null),e.zb(1024,null,r.h,function(l){return[l]},[r.o]),e.zb(1024,null,r.i,function(l){return[l]},[r.d]),e.mb(22,671744,null,0,r.n,[[8,null],[6,r.h],[8,null],[6,r.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.zb(2048,null,r.j,null,[r.n]),e.mb(24,16384,null,0,r.k,[[4,r.j]],null,null),(l()(),e.nb(25,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.criar()&&e),e},null,null)),(l()(),e.Bb(-1,null,["Create account"]))],function(l,n){var u=n.component;l(n,7,0,""),l(n,10,0,"email",u.dadosCreate.email),l(n,19,0,""),l(n,22,0,"senha",u.dadosCreate.senha)},function(l,n){l(n,5,0,e.vb(n,7).required?"":null,e.vb(n,12).ngClassUntouched,e.vb(n,12).ngClassTouched,e.vb(n,12).ngClassPristine,e.vb(n,12).ngClassDirty,e.vb(n,12).ngClassValid,e.vb(n,12).ngClassInvalid,e.vb(n,12).ngClassPending),l(n,17,0,e.vb(n,19).required?"":null,e.vb(n,24).ngClassUntouched,e.vb(n,24).ngClassTouched,e.vb(n,24).ngClassPristine,e.vb(n,24).ngClassDirty,e.vb(n,24).ngClassValid,e.vb(n,24).ngClassInvalid,e.vb(n,24).ngClassPending)})}function h(l){return e.Db(0,[(l()(),e.nb(0,0,null,null,1,"app-register",[],null,null,null,v,m)),e.mb(1,114688,null,0,t,[s.a,d.k],null,null)],function(l,n){l(n,1,0)},null)}var C=e.jb("app-register",t,h,{},{},[]),f=u("SVse");u.d(n,"AuthModuleNgFactory",function(){return k});var k=e.kb(a,[],function(l){return e.tb([e.ub(512,e.j,e.X,[[8,[o.a,p,C]],[3,e.j],e.v]),e.ub(4608,f.n,f.m,[e.s,[2,f.B]]),e.ub(4608,r.q,r.q,[]),e.ub(1073742336,f.c,f.c,[]),e.ub(1073742336,r.p,r.p,[]),e.ub(1073742336,r.f,r.f,[]),e.ub(1073742336,d.m,d.m,[[2,d.r],[2,d.k]]),e.ub(1073742336,a,a,[]),e.ub(1024,d.i,function(){return[[{path:"login",component:i},{path:"register",component:t}]]},[])])})}}]);