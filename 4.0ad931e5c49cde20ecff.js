(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{MCT3:function(t,e,n){"use strict";n.r(e),n.d(e,"AppointmentsModule",function(){return l});var c=n("ofXK"),b=n("tyNb"),i=n("fXoL");let o=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["sm-appointment-detail"]],decls:3,vars:0,consts:[[1,"card","card-body","m-4","p-4"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Rb(1,"p"),i.wc(2,"appointment-detail works!"),i.Qb(),i.Qb())},styles:[""]}),t})();var r=n("I/3d");const s=function(t){return[t,"detail"]};function a(t,e){if(1&t){const t=i.Sb();i.Rb(0,"tr"),i.Rb(1,"td"),i.Rb(2,"a",7),i.wc(3),i.Qb(),i.Qb(),i.Rb(4,"td"),i.wc(5),i.bc(6,"date"),i.Qb(),i.Rb(7,"td"),i.wc(8),i.bc(9,"date"),i.Qb(),i.Rb(10,"td"),i.wc(11),i.Qb(),i.Rb(12,"td"),i.Rb(13,"span",8),i.wc(14,"Processing"),i.Qb(),i.Qb(),i.Rb(15,"td"),i.Rb(16,"a",9),i.Nb(17,"i",10),i.Qb(),i.Rb(18,"a",11),i.Yb("click",function(){return i.pc(t),i.ac().deleteAppointment()}),i.Nb(19,"i",12),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=e.$implicit;i.Ab(2),i.gc("routerLink",i.ic(11,s,t.name)),i.Ab(1),i.yc(" ",t.name," "),i.Ab(2),i.xc(i.dc(6,5,t.date.toMillis(),"mediumDate")),i.Ab(3),i.xc(i.dc(9,8,t.time.toMillis(),"shortTime")),i.Ab(3),i.xc(t.phone)}}const p=[{path:"",component:(()=>{class t{constructor(t){this.firestore=t;const e=this.firestore.collection("appointments"),n=e.valueChanges();this.appointments$=n,e.snapshotChanges().forEach(t=>{t.map(t=>{this.id=t.payload.doc.id})})}ngOnInit(){}deleteAppointment(){confirm("Delete?")&&this.firestore.collection("appointments").doc(this.id).delete()}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(r.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["sm-appointment-list"]],decls:24,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"innerWrapper"],[1,"orderBox","patternbg","text-center"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"label","label-primary"],[1,"btn","btn-default","mr-2"],[1,"ti-pencil"],[1,"btn","btn-default",3,"click"],[1,"ti-close"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Rb(3,"div",3),i.wc(4,"All Appointments"),i.Qb(),i.Rb(5,"div",4),i.Rb(6,"table",5),i.Rb(7,"thead"),i.Rb(8,"tr"),i.Rb(9,"th"),i.wc(10,"Name"),i.Qb(),i.Rb(11,"th"),i.wc(12,"Date"),i.Qb(),i.Rb(13,"th"),i.wc(14,"Time"),i.Qb(),i.Rb(15,"th"),i.wc(16,"Phone"),i.Qb(),i.Rb(17,"th"),i.wc(18,"Status"),i.Qb(),i.Rb(19,"th"),i.wc(20,"Actions"),i.Qb(),i.Qb(),i.Qb(),i.Rb(21,"tbody"),i.vc(22,a,20,13,"tr",6),i.bc(23,"async"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.Ab(22),i.gc("ngForOf",i.cc(23,1,e.appointments$)))},directives:[c.k,b.c],pipes:[c.b,c.e],styles:[".innerWrapper[_ngcontent-%COMP%]{margin-top:2rem}"]}),t})()},{path:":id/detail",component:o}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[b.d.forChild(p)],b.d]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[c.c,d]]}),t})()}}]);