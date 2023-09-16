"use strict";(self.webpackChunksamurAI=self.webpackChunksamurAI||[]).push([[836],{5836:(x,u,i)=>{i.r(u),i.d(u,{RegisterModule:()=>C});var g=i(4670),e=i(4946),p=i(4707),d=i(6814),a=i(95);function c(r,n){1&r&&(e.TgZ(0,"div",19),e._uU(1," Username is required! "),e.qZA())}function h(r,n){1&r&&(e.TgZ(0,"div",19),e._uU(1," Email is incorrect! "),e.qZA())}function m(r,n){1&r&&(e.TgZ(0,"div",19),e._uU(1," Password must contain a minimum of 8 characters! "),e.qZA())}function f(r,n){1&r&&(e.TgZ(0,"div",19),e._uU(1," Confirm Password did not match! "),e.qZA())}const w=[{path:"",component:(()=>{class r{passwordButton(){this.user.password="*********"===this.user.password?"123456789":"*********"}registerMessage(){this.showRegisterMessage=!0}constructor(s){this.userService=s,this.showRegisterMessage=!1,this.showUsernameError=!1,this.showEmailError=!1,this.showPasswordError=!1,this.showConfirmPasswordError=!1,this.user={username:"",email:"",password:""},this.confirmPassword=""}register(s){this.registerMessage(),console.log("user: ",s),this.userService.register(s)}usernameFocus(){this.showUsernameError=!1}emailFocus(){this.showEmailError=!1}passwordFocus(){this.showPasswordError=!1}confirmPasswordFocus(){this.showConfirmPasswordError=!1}registerClicked(){""===this.user.username&&(this.showUsernameError=!0),(""===this.user.email||!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.user.email))&&(this.showEmailError=!0),(""===this.user.password||this.user.password.length<8)&&(this.showPasswordError=!0),(""===this.confirmPassword||this.user.password!==this.confirmPassword)&&(this.showConfirmPasswordError=!0),this.showEmailError||this.showConfirmPasswordError||this.showPasswordError||this.showUsernameError||this.register(this.user)}}return r.\u0275fac=function(s){return new(s||r)(e.Y36(p.K))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],inputs:{user:"user"},decls:34,vars:11,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"background-blur"],[1,"register-modal"],["href","/",1,"close-icon"],["width","40","height","40","viewBox","0 0 40 40","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.96405 0.981748L20 15.0171L33.9632 1.05447C34.2717 0.726193 34.6432 0.463583 35.0556 0.282388C35.468 0.101192 35.9127 0.0051427 36.3632 0C37.3275 0 38.2524 0.383088 38.9344 1.06499C39.6163 1.74689 39.9994 2.67175 39.9994 3.6361C40.0079 4.0819 39.9252 4.52472 39.7563 4.9374C39.5875 5.35007 39.3361 5.7239 39.0176 6.03593L24.8726 19.9986L39.0176 34.143C39.6169 34.7293 39.9684 35.5232 39.9994 36.361C39.9994 37.3254 39.6163 38.2502 38.9344 38.9321C38.2524 39.614 37.3275 39.9971 36.3632 39.9971C35.8997 40.0163 35.4374 39.939 35.0054 39.77C34.5735 39.601 34.1814 39.344 33.8541 39.0154L20 24.98L6.00041 38.979C5.69317 39.2963 5.32612 39.5497 4.92045 39.7244C4.51478 39.8992 4.07852 39.9919 3.63685 39.9971C2.67245 39.9971 1.74756 39.614 1.06563 38.9321C0.383696 38.2502 0.000591643 37.3254 0.000591643 36.361C-0.00788627 35.9152 0.0748273 35.4724 0.243657 35.0597C0.412487 34.6471 0.663871 34.2732 0.982381 33.9612L15.1274 19.9986L0.982381 5.85412C0.383071 5.26784 0.0316439 4.4739 0.000591643 3.6361C0.000591643 2.67175 0.383696 1.74689 1.06563 1.06499C1.74756 0.383088 2.67245 0 3.63685 0C4.50955 0.0109083 5.34589 0.36361 5.96405 0.981748Z","fill","#E67829"],[1,"register-title"],[1,"flex-div"],["type","text","name","username","placeholder","Username","required","",1,"input-text",3,"ngModel","ngModelChange","focus"],["class","register-error",4,"ngIf"],["type","email","name","email","placeholder","Email","required","",1,"input-text",3,"ngModel","ngModelChange","focus"],["type","password","name","password","placeholder","Password","required","",1,"input-text",3,"ngModel","ngModelChange","focus"],["type","password","name","confirmPassword","placeholder","Confirm Password","required","",1,"input-text",3,"ngModel","ngModelChange","focus"],["type","submit","value","Join",1,"join-button",3,"click"],[1,"flex-login"],[1,"have-account"],["href","/login",1,"login-link"],[1,"register-error"]],template:function(s,t){1&s&&(e.TgZ(0,"html",0)(1,"head"),e._UZ(2,"meta",1)(3,"meta",2),e.TgZ(4,"title"),e._uU(5,"Register"),e.qZA()(),e.TgZ(6,"body")(7,"div",3)(8,"div",4)(9,"a",5),e.O4$(),e.TgZ(10,"svg",6),e._UZ(11,"path",7),e.qZA()(),e.kcU(),e.TgZ(12,"p",8),e._uU(13),e.ALo(14,"titlecase"),e.qZA(),e.TgZ(15,"form")(16,"div",9)(17,"input",10),e.NdJ("ngModelChange",function(l){return t.user.username=l})("focus",function(){return t.usernameFocus()}),e.qZA()(),e.YNc(18,c,2,0,"div",11),e.TgZ(19,"div",9)(20,"input",12),e.NdJ("ngModelChange",function(l){return t.user.email=l})("focus",function(){return t.emailFocus()}),e.qZA()(),e.YNc(21,h,2,0,"div",11),e.TgZ(22,"div",9)(23,"input",13),e.NdJ("ngModelChange",function(l){return t.user.password=l})("focus",function(){return t.passwordFocus()}),e.qZA()(),e.YNc(24,m,2,0,"div",11),e.TgZ(25,"div",9)(26,"input",14),e.NdJ("ngModelChange",function(l){return t.confirmPassword=l})("focus",function(){return t.confirmPasswordFocus()}),e.qZA()(),e.YNc(27,f,2,0,"div",11),e.TgZ(28,"input",15),e.NdJ("click",function(){return t.registerClicked()}),e.qZA()(),e.TgZ(29,"div",16)(30,"p",17),e._uU(31,"Already have an account?"),e.qZA(),e.TgZ(32,"a",18),e._uU(33,"Login"),e.qZA()()()()()()),2&s&&(e.xp6(13),e.hij("",e.lcZ(14,9,"sign up")," "),e.xp6(4),e.Q6J("ngModel",t.user.username),e.xp6(1),e.Q6J("ngIf",t.showUsernameError),e.xp6(2),e.Q6J("ngModel",t.user.email),e.xp6(1),e.Q6J("ngIf",t.showEmailError),e.xp6(2),e.Q6J("ngModel",t.user.password),e.xp6(1),e.Q6J("ngIf",t.showPasswordError),e.xp6(2),e.Q6J("ngModel",t.confirmPassword),e.xp6(1),e.Q6J("ngIf",t.showConfirmPasswordError))},dependencies:[d.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.On,a.F,d.rS],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0;padding:0}.background-blur[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000073;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.register-modal[_ngcontent-%COMP%]{z-index:1;width:650px;height:880px;border-radius:50px;background:#FFF;box-shadow:0 4px 4px #00000040,0 4px 4px #00000040;margin:30px auto}.close-icon[_ngcontent-%COMP%]{cursor:pointer;margin:0 0 0 560px;padding-top:40px;display:flex}.register-title[_ngcontent-%COMP%]{color:#e57829;display:flex;margin:30px 0 0;padding:0 0 0 60px;font-size:45px;font-weight:700;cursor:default}.flex-div[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:40px;justify-content:center}.input-text[_ngcontent-%COMP%]{width:580px;height:65px;border-radius:72px;background:#FFE4CB;color:#953e00;text-align:center;font-size:28px;font-weight:400}.register-error[_ngcontent-%COMP%]{color:red;margin:6px 0 -24px 35px}.join-button[_ngcontent-%COMP%]{width:329px;height:72px;border-radius:50px;border:none;background:#E57829;box-shadow:0 -4px 4px #00000040 inset,0 4px 4px #00000040;color:#fff;text-align:center;justify-content:center;text-shadow:0px 4px 4px rgba(0,0,0,.25);font-size:38px;font-weight:700;display:flex;margin:40px auto 35px;cursor:pointer}.flex-login[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:40px}.have-account[_ngcontent-%COMP%]{font-size:24px;margin-right:10px;cursor:default}.login-link[_ngcontent-%COMP%]{color:#e57829;text-align:center;font-size:28px;font-weight:700}"]}),r})()}];let C=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[g.Bz.forChild(w),g.Bz]}),r})()}}]);