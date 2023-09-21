"use strict";(self.webpackChunkEmailClient_Angular=self.webpackChunkEmailClient_Angular||[]).push([[945],{7945:(q,d,m)=>{m.r(d),m.d(d,{InboxModule:()=>N});var c=m(6814),a=m(95),r=m(180),e=m(4946),_=m(5148),v=m(9862);let p=(()=>{var t;class l{constructor(n){this.http=n,this.rootUrl="https://api.angular-email.com"}getEmails(){return this.http.get(`${this.rootUrl}/emails`)}getEmail(n){return this.http.get(`${this.rootUrl}/emails/${n}`)}sendEmail(n){return this.http.post(`${this.rootUrl}/emails`,n)}}return(t=l).\u0275fac=function(n){return new(n||t)(e.LFG(v.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),l})();const g=[[["","modalTitle",""]],"*",[["","modalFooter",""]]],C=["[modalTitle]","*","[modalFooter]"];let f=(()=>{var t;class l{constructor(n){this.el=n,this.dismiss=new e.vpe}ngOnInit(){document.body.appendChild(this.el.nativeElement)}ngOnDestroy(){this.el.nativeElement.remove()}onDismissClick(){this.dismiss.emit()}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-modal"]],outputs:{dismiss:"dismiss"},ngContentSelectors:C,decls:12,vars:0,consts:[[1,"ui","dimmer","visible","active",3,"click"],[1,"ui","modal","visible","active",3,"click"],[1,"close","icon",3,"click"],[1,"header"],[1,"content"],[1,"actions","actions-default"],[1,"ui","button","primary",3,"click"],[1,"actions"]],template:function(n,i){1&n&&(e.F$t(g),e.TgZ(0,"div",0),e.NdJ("click",function(){return i.onDismissClick()}),e.TgZ(1,"div",1),e.NdJ("click",function(u){return u.stopPropagation()}),e.TgZ(2,"i",2),e.NdJ("click",function(){return i.onDismissClick()}),e.qZA(),e.TgZ(3,"div",3),e.Hsn(4),e.qZA(),e.TgZ(5,"div",4),e.Hsn(6,1),e.qZA(),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return i.onDismissClick()}),e._uU(9,"OK"),e.qZA()(),e.TgZ(10,"div",7),e.Hsn(11,2),e.qZA()()())},styles:[".actions[_ngcontent-%COMP%]:empty{display:none}.actions-default[_ngcontent-%COMP%]{display:none}.actions[_ngcontent-%COMP%]:empty + .actions-default[_ngcontent-%COMP%]{display:block}"]}),l})();var T=m(1060);let h=(()=>{var t;class l{constructor(){this.emailSubmit=new e.vpe,this.email={id:"",to:"",subject:"",html:"",text:"",from:""}}ngOnInit(){const{subject:n,from:i,to:s,text:u}=this.email;this.emailForm=new a.cw({to:new a.NI(s,[a.kI.required,a.kI.email]),from:new a.NI({value:i,disabled:!0}),subject:new a.NI(n,[a.kI.required]),text:new a.NI(u,[a.kI.required])})}onSubmit(){this.emailForm.invalid||this.emailSubmit.emit(this.emailForm.value)}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-email-form"]],inputs:{email:"email"},outputs:{emailSubmit:"emailSubmit"},decls:7,vars:5,consts:[[1,"ui","form",3,"formGroup","ngSubmit"],["type","email","label","To",3,"control"],["type","email","label","From",3,"control"],["type","text","label","Subject",3,"control"],["controlType","textarea","label","Content",3,"control"],[1,"ui","button","primary"]],template:function(n,i){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e._UZ(1,"app-input",1)(2,"app-input",2)(3,"app-input",3)(4,"app-input",4),e.TgZ(5,"button",5),e._uU(6,"Send"),e.qZA()()),2&n&&(e.Q6J("formGroup",i.emailForm),e.xp6(1),e.Q6J("control",i.emailForm.get("to")),e.xp6(1),e.Q6J("control",i.emailForm.get("from")),e.xp6(1),e.Q6J("control",i.emailForm.get("subject")),e.xp6(1),e.Q6J("control",i.emailForm.get("text")))},dependencies:[T.a,a._Y,a.JL,a.sg]}),l})();function y(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"app-modal",2),e.NdJ("dismiss",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.showModal=!1)}),e.TgZ(1,"div",3),e._uU(2,"Compose"),e.qZA(),e.TgZ(3,"app-email-form",4),e.NdJ("emailSubmit",function(i){e.CHM(o);const s=e.oxw();return e.KtG(s.onSubmit(i))}),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(3),e.Q6J("email",o.email)}}let b=(()=>{var t;class l{constructor(n,i){this.authService=n,this.emailService=i,this.showModal=!1,this.email={id:"",to:"",subject:"",html:"",text:"",from:`${n.username}@angular-email.com`}}onSubmit(n){this.emailService.sendEmail(n).subscribe(()=>{this.showModal=!1})}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(_.e),e.Y36(p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-email-create"]],decls:3,vars:1,consts:[[1,"ui","button","inverted","primary","fluid",3,"click"],[3,"dismiss",4,"ngIf"],[3,"dismiss"],["modalTitle",""],[3,"email","emailSubmit"]],template:function(n,i){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.showModal=!0}),e._uU(1,"Compose"),e.qZA(),e.YNc(2,y,4,1,"app-modal",1)),2&n&&(e.xp6(2),e.Q6J("ngIf",i.showModal))},dependencies:[c.O5,f,h],styles:[".ui.button.primary[_ngcontent-%COMP%]{margin-bottom:1rem}"]}),l})();function Z(t,l){if(1&t&&(e.TgZ(0,"div",2)(1,"a",3)(2,"div",4)(3,"div",5),e._uU(4),e.qZA(),e.TgZ(5,"p",6),e._uU(6),e.qZA()()()()),2&t){const o=l.$implicit;e.xp6(1),e.Q6J("routerLink",o.id),e.xp6(3),e.hij(" ",o.subject," "),e.xp6(2),e.hij(" ",o.from," ")}}let x=(()=>{var t;class l{constructor(n){this.emailService=n,this.emails=[]}ngOnInit(){this.emailService.getEmails().subscribe(n=>{this.emails=n})}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-email-index"]],decls:2,vars:1,consts:[[1,"ui","celled","list"],["class","item",4,"ngFor","ngForOf"],[1,"item"],["routerLinkActive","active",3,"routerLink"],[1,"content"],[1,"header","trim"],[1,"trim"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.YNc(1,Z,7,3,"div",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",i.emails))},dependencies:[c.sg,r.rH,r.Od],styles:['.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}a.active[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}a.active[_ngcontent-%COMP%]:before{content:">";font-size:20px;margin-right:10px}.header[_ngcontent-%COMP%]{font-size:1.5rem;padding:.5rem 0;color:#fff!important}.content[_ngcontent-%COMP%]{width:90%;font-size:1rem}.trim[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%}']}),l})(),E=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:6,vars:0,consts:[[1,"ui","grid","stackable"],[1,"five","wide","column"],[1,"eleven","wide","column"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-email-create")(3,"app-email-index"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"router-outlet"),e.qZA()())},dependencies:[r.lC,b,x]}),l})(),w=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-placeholder"]],decls:4,vars:0,consts:[[1,"ui","placeholder","segment"],[1,"ui","icon","header"],[1,"envelope","outline","icon"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e._uU(3," Select an email to get started "),e.qZA()())}}),l})();function M(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"app-modal",2),e.NdJ("dismiss",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.showModal=!1)}),e.TgZ(1,"div",3),e._uU(2,"Reply"),e.qZA(),e.TgZ(3,"app-email-form",4),e.NdJ("emailSubmit",function(i){e.CHM(o);const s=e.oxw();return e.KtG(s.onSubmit(i))}),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(3),e.Q6J("email",o.email)}}let S=(()=>{var t;class l{constructor(n){this.emailService=n,this.showModal=!1,this.email={id:"",to:"",subject:"",html:"",text:"",from:""}}ngOnChanges(){const n=this.email.text.replace(/\n/gi,"\n> ");this.email={...this.email,from:this.email.to,to:this.email.from,subject:`RE: ${this.email.subject}`,text:`\n\n\n----------${this.email.from} wrote:\n> ${n}`}}onSubmit(n){this.emailService.sendEmail(n).subscribe(()=>{this.showModal=!1})}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-email-reply"]],inputs:{email:"email"},features:[e.TTD],decls:3,vars:1,consts:[[1,"ui","button","primary",3,"click"],[3,"dismiss",4,"ngIf"],[3,"dismiss"],["modalTitle",""],[3,"email","emailSubmit"]],template:function(n,i){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.showModal=!0}),e._uU(1,"Reply"),e.qZA(),e.YNc(2,M,4,1,"app-modal",1)),2&n&&(e.xp6(2),e.Q6J("ngIf",i.showModal))},dependencies:[c.O5,f,h]}),l})();function F(t,l){if(1&t&&(e.TgZ(0,"div",6),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.email.text,"\n")}}let I=(()=>{var t;class l{constructor(n){this.route=n,this.email=this.route.snapshot.data.email,this.email=n.snapshot.data.email,this.route.data.subscribe(({email:i})=>{this.email=i})}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(r.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-email-show"]],decls:18,vars:7,consts:[[1,"header"],[1,"email-reply-div"],[3,"email"],[1,"ui","divider"],["class","content-text",4,"ngIf"],[1,"content-html",3,"innerHTML"],[1,"content-text"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div")(2,"h3"),e._uU(3),e.qZA(),e.TgZ(4,"div"),e._uU(5," From: "),e.TgZ(6,"i"),e._uU(7),e.qZA()(),e.TgZ(8,"div"),e._uU(9," To: "),e.TgZ(10,"i"),e._uU(11),e.qZA()()(),e.TgZ(12,"div",1),e._UZ(13,"app-email-reply",2),e.qZA()(),e._UZ(14,"div",3),e.YNc(15,F,2,1,"div",4),e.TgZ(16,"div",5),e._uU(17),e.qZA()),2&n&&(e.xp6(3),e.Oqu(i.email.subject),e.xp6(4),e.Oqu(i.email.from),e.xp6(4),e.Oqu(i.email.to),e.xp6(2),e.Q6J("email",i.email),e.xp6(2),e.Q6J("ngIf",!i.email.html),e.xp6(1),e.Q6J("innerHTML",i.email.html,e.oJD),e.xp6(1),e.hij(" ",i.email.html,"\n"))},dependencies:[c.O5,S],styles:[".content-text[_ngcontent-%COMP%]{color:#515050;background-color:#fff;border-radius:10px;padding:1rem;letter-spacing:.1rem;line-height:2}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.email-reply-div[_ngcontent-%COMP%]{padding:1rem}"]}),l})();var A=m(6232),O=m(6306);const U=[{path:"",component:E,children:[{path:"not-found",component:(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-not-found"]],decls:4,vars:0,consts:[[1,"ui","placeholder","segment"],[1,"ui","icon","header"],[1,"search","icon"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e._uU(3," Email not found "),e.qZA()())}}),l})()},{path:":id",component:I,resolve:{email:(()=>{var t;class l{constructor(n,i){this.emailService=n,this.router=i}resolve(n){const{id:i}=n.params;return console.log(i),this.emailService.getEmail(i).pipe((0,O.K)(()=>(this.router.navigateByUrl("/inbox/not-found"),A.E)))}}return(t=l).\u0275fac=function(n){return new(n||t)(e.LFG(p),e.LFG(r.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),l})()}},{path:"",component:w}]}];let J=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild(U),r.Bz]}),l})();var k=m(6208);let N=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,J,k.m,a.UX]}),l})()}}]);