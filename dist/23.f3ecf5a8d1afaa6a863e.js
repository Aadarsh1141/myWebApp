(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/cdV":function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){return function(){}}(),r=e("pMnS"),i=e("ZYCi"),a=e("mIVG"),u=function(){function n(n,t){var e=this;this.translate=n,this.router=t,this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var l=this.translate.getBrowserLang();this.translate.use(l.match(/en|fr|ur|es|it|fa|de/)?l:"en"),this.router.events.subscribe(function(n){n instanceof i.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return n.prototype.ngOnInit=function(){this.loggedIn=localStorage.getItem("isLoggedin"),"true"===this.loggedIn&&(this.userType="Guest")},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n.prototype.changeLang=function(n){this.translate.use(n)},n}(),d=e("zNit"),s=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]],data:{}});function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"button",[["class","navbar-toggler"],["type","button"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.toggleSidebar()&&l),l},null,null)),(n()(),l["\u0275eld"](2,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bars text-muted"]],null,null,null,null,null)),(n()(),l["\u0275eld"](3,0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["QuickRide"]))],null,null)}var p=e("Ip0R"),g=e("3FoF"),h=function(){function n(n,t){var e=this;this.translate=n,this.router=t,this.isActive=!1,this.showMenu="",this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var l=this.translate.getBrowserLang();this.translate.use(l.match(/en|fr|ur|es|it|fa|de/)?l:"en"),this.router.events.subscribe(function(n){n instanceof i.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return n.prototype.ngOnChanges=function(){},n.prototype.ngOnInit=function(){this.loggedIn=localStorage.getItem("isLoggedin"),this.profileName=JSON.parse(localStorage.getItem("RiderProfile"))},n.prototype.eventCalled=function(){this.isActive=!this.isActive},n.prototype.addExpandClass=function(n){this.showMenu=n===this.showMenu?"0":n},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.changeLang=function(n){this.translate.use(n)},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin"),localStorage.removeItem("RiderProfile"),localStorage.removeItem("userId"),localStorage.removeItem("riderList"),localStorage.clear()},n}(),f=l["\u0275crt"]({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;border:none;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}a[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}"]],data:{}});function m(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,67,"nav",[["class","sidebar"]],null,null,null,null,null)),l["\u0275did"](1,278528,null,0,p.l,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](2,{sidebarPushRight:0}),(n()(),l["\u0275eld"](3,0,null,null,64,"div",[["class","list-group"]],null,null,null,null,null)),(n()(),l["\u0275eld"](4,0,null,null,23,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),l["\u0275eld"](5,0,null,null,4,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.addExpandClass("profile")&&l),l},null,null)),(n()(),l["\u0275eld"](6,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l["\u0275eld"](7,0,null,null,0,"img",[["src","assets/images/default_male.png"],["style","width:30px;margin-right:5px"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,[" Me \xa0"])),(n()(),l["\u0275eld"](9,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-sort-desc"],["style","color:#fff; font-size:16px"]],null,null,null,null,null)),(n()(),l["\u0275eld"](10,0,null,null,17,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),l["\u0275eld"](11,0,null,null,16,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),l["\u0275eld"](12,0,null,null,7,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](13,0,null,null,6,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l["\u0275nov"](n,14).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),l["\u0275did"](14,671744,null,0,i.o,[i.l,i.a,p.k],{routerLink:[0,"routerLink"]},null),l["\u0275pad"](15,1),(n()(),l["\u0275eld"](16,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l["\u0275eld"](17,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(n()(),l["\u0275ted"](18,null,[" ",""])),l["\u0275pid"](131072,g.a,[d.a,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](20,0,null,null,7,"li",[],null,null,null,null,null)),(n()(),l["\u0275eld"](21,0,null,null,6,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0,r=n.component;return"click"===t&&(o=!1!==l["\u0275nov"](n,22).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===t&&(o=!1!==r.onLoggedout()&&o),o},null,null)),l["\u0275did"](22,671744,null,0,i.o,[i.l,i.a,p.k],{routerLink:[0,"routerLink"]},null),l["\u0275pad"](23,1),(n()(),l["\u0275eld"](24,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l["\u0275eld"](25,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(n()(),l["\u0275ted"](26,null,[" ",""])),l["\u0275pid"](131072,g.a,[d.a,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](28,0,null,null,8,"a",[["class","list-group-item"],["routerLink","/dashboard"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l["\u0275nov"](n,29).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),l["\u0275did"](29,671744,[[2,4]],0,i.o,[i.l,i.a,p.k],{routerLink:[0,"routerLink"]},null),l["\u0275did"](30,1720320,null,2,i.n,[i.l,l.ElementRef,l.Renderer2,l.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),l["\u0275qud"](603979776,1,{links:1}),l["\u0275qud"](603979776,2,{linksWithHrefs:1}),l["\u0275pad"](33,1),(n()(),l["\u0275eld"](34,0,null,null,0,"i",[["class","fa fa-fw fa-car"]],null,null,null,null,null)),(n()(),l["\u0275ted"](35,null,["\xa0"," "])),l["\u0275pid"](131072,g.a,[d.a,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](37,0,null,null,9,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l["\u0275nov"](n,38).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),l["\u0275did"](38,671744,[[4,4]],0,i.o,[i.l,i.a,p.k],{routerLink:[0,"routerLink"]},null),l["\u0275pad"](39,1),l["\u0275did"](40,1720320,null,2,i.n,[i.l,l.ElementRef,l.Renderer2,l.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),l["\u0275qud"](603979776,3,{links:1}),l["\u0275qud"](603979776,4,{linksWithHrefs:1}),l["\u0275pad"](43,1),(n()(),l["\u0275eld"](44,0,null,null,0,"i",[["class","fa fa-fw fa-calendar"]],null,null,null,null,null)),(n()(),l["\u0275ted"](45,null,["\xa0"," "])),l["\u0275pid"](131072,g.a,[d.a,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](47,0,null,null,9,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l["\u0275nov"](n,48).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),l["\u0275did"](48,671744,[[6,4]],0,i.o,[i.l,i.a,p.k],{routerLink:[0,"routerLink"]},null),l["\u0275pad"](49,1),l["\u0275did"](50,1720320,null,2,i.n,[i.l,l.ElementRef,l.Renderer2,l.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),l["\u0275qud"](603979776,5,{links:1}),l["\u0275qud"](603979776,6,{linksWithHrefs:1}),l["\u0275pad"](53,1),(n()(),l["\u0275eld"](54,0,null,null,0,"i",[["class","fa fa-fw fa-credit-card"]],null,null,null,null,null)),(n()(),l["\u0275ted"](55,null,["\xa0"," "])),l["\u0275pid"](131072,g.a,[d.a,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](57,0,null,null,9,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l["\u0275nov"](n,58).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),l["\u0275did"](58,671744,[[8,4]],0,i.o,[i.l,i.a,p.k],{routerLink:[0,"routerLink"]},null),l["\u0275pad"](59,1),l["\u0275did"](60,1720320,null,2,i.n,[i.l,l.ElementRef,l.Renderer2,l.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),l["\u0275qud"](603979776,7,{links:1}),l["\u0275qud"](603979776,8,{linksWithHrefs:1}),l["\u0275pad"](63,1),(n()(),l["\u0275eld"](64,0,null,null,0,"img",[["src","assets/images/car_marker_black.png"],["style","width:20px;"]],null,null,null,null,null)),(n()(),l["\u0275ted"](65,null,["\xa0"," "])),l["\u0275pid"](131072,g.a,[d.a,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](67,0,null,null,0,"div",[["class","header-fields"]],null,null,null,null,null))],function(n,t){var e=n(t,2,0,t.component.isActive);n(t,1,0,"sidebar",e);var l=n(t,15,0,"/profile");n(t,14,0,l);var o=n(t,23,0,"/login");n(t,22,0,o),n(t,29,0,"/dashboard");var r=n(t,33,0,"router-link-active");n(t,30,0,r);var i=n(t,39,0,"/my-rides");n(t,38,0,i);var a=n(t,43,0,"router-link-active");n(t,40,0,a);var u=n(t,49,0,"/tables");n(t,48,0,u);var d=n(t,53,0,"router-link-active");n(t,50,0,d);var s=n(t,59,0,"/register-vehicle");n(t,58,0,s);var c=n(t,63,0,"router-link-active");n(t,60,0,c)},function(n,t){n(t,10,0,"profile"===t.component.showMenu),n(t,13,0,l["\u0275nov"](t,14).target,l["\u0275nov"](t,14).href),n(t,18,0,l["\u0275unv"](t,18,0,l["\u0275nov"](t,19).transform("Profile"))),n(t,21,0,l["\u0275nov"](t,22).target,l["\u0275nov"](t,22).href),n(t,26,0,l["\u0275unv"](t,26,0,l["\u0275nov"](t,27).transform("Log Out"))),n(t,28,0,l["\u0275nov"](t,29).target,l["\u0275nov"](t,29).href),n(t,35,0,l["\u0275unv"](t,35,0,l["\u0275nov"](t,36).transform("New Ride"))),n(t,37,0,l["\u0275nov"](t,38).target,l["\u0275nov"](t,38).href),n(t,45,0,l["\u0275unv"](t,45,0,l["\u0275nov"](t,46).transform("My Rides"))),n(t,47,0,l["\u0275nov"](t,48).target,l["\u0275nov"](t,48).href),n(t,55,0,l["\u0275unv"](t,55,0,l["\u0275nov"](t,56).transform("My Wallet"))),n(t,57,0,l["\u0275nov"](t,58).target,l["\u0275nov"](t,58).href),n(t,65,0,l["\u0275unv"](t,65,0,l["\u0275nov"](t,66).transform("My Vehicle")))})}var b=e("sE5F"),C=e("AytR"),M=new b.d({Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwIiwiaXNzIjoiUXVpY2tSaWRlIiwiaWF0IjoxNTI2ODg2NzU1fQ.nsy3UbPnaANf7d3O0xAW3LTG1P-dgcEhgqwOey-IK2kFCGxr298jfLKkE2k6taTvzETpJMPpertJu3uzJDtDUQ","APP-TOKEN":"s16-q9fz-jy3p-rk","Content-Type":"application/x-www-form-urlencoded"}),v=function(){function n(n){this.http=n,this.user=C.a.SIGNUP}return n.prototype.getRiderDetails=function(n){return this.http.get(this.user+"profile?id="+n,{headers:M})},n}(),_=function(){function n(n){this.layoutService=n}return n.prototype.ngOnInit=function(){},n}(),O=l["\u0275crt"]({encapsulation:0,styles:[[".main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px 0;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}"]],data:{}});function P(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,c,s)),l["\u0275did"](1,114688,null,0,u,[d.a,i.l],null,null),(n()(),l["\u0275eld"](2,0,null,null,1,"app-sidebar",[],null,null,null,m,f)),l["\u0275did"](3,638976,null,0,h,[d.a,i.l],{profileName:[0,"profileName"]},null),(n()(),l["\u0275eld"](4,0,null,null,2,"section",[["class","main-container"]],null,null,null,null,null)),(n()(),l["\u0275eld"](5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l["\u0275did"](6,212992,null,0,i.q,[i.b,l.ViewContainerRef,l.ComponentFactoryResolver,[8,null],l.ChangeDetectorRef],null,null)],function(n,t){var e=t.component;n(t,1,0),n(t,3,0,e.profileName),n(t,6,0)},null)}function y(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,P,O)),l["\u0275did"](1,114688,null,0,_,[v],null,null)],function(n,t){n(t,1,0)},null)}var w=l["\u0275ccf"]("app-layout",_,y,{},{},[]),k=e("vGXY"),x=e("dWZg"),L=function(){return function(){}}(),R=e("4GxJ"),j=e("Fzqc"),I=e("Wf4p"),S=e("ZYjt"),D=e("qAlS");e("ihYY"),e("mrSG"),e("n6gG"),e("YSh2"),e("K9Ia"),e("bne5"),e("p0ib"),e("VnD/"),e("ny24"),e("ad02"),e("67Y/"),e("t9fZ"),e("p0Sj"),e("Gi3i");var q=function(){return function(){}}(),A=function(){return function(){}}(),K=e("SMsm"),E=e("LC5p"),W=e("0/Q6"),z=e("UodH");e.d(t,"LayoutModuleNgFactory",function(){return T});var T=l["\u0275cmf"](o,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,w]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,p.p,p.o,[l.LOCALE_ID,[2,p.E]]),l["\u0275mpd"](4608,k.c,k.c,[x.a]),l["\u0275mpd"](4608,v,v,[b.e]),l["\u0275mpd"](1073742336,p.c,p.c,[]),l["\u0275mpd"](1073742336,i.p,i.p,[[2,i.v],[2,i.l]]),l["\u0275mpd"](1073742336,L,L,[]),l["\u0275mpd"](1073742336,a.a,a.a,[]),l["\u0275mpd"](1073742336,R.z,R.z,[]),l["\u0275mpd"](1073742336,j.a,j.a,[]),l["\u0275mpd"](1073742336,I.l,I.l,[[2,I.d],[2,S.g]]),l["\u0275mpd"](1073742336,x.b,x.b,[]),l["\u0275mpd"](1073742336,D.c,D.c,[]),l["\u0275mpd"](1073742336,q,q,[]),l["\u0275mpd"](1073742336,A,A,[]),l["\u0275mpd"](1073742336,K.c,K.c,[]),l["\u0275mpd"](1073742336,I.n,I.n,[]),l["\u0275mpd"](1073742336,I.v,I.v,[]),l["\u0275mpd"](1073742336,I.t,I.t,[]),l["\u0275mpd"](1073742336,E.b,E.b,[]),l["\u0275mpd"](1073742336,W.c,W.c,[]),l["\u0275mpd"](1073742336,z.c,z.c,[]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,i.j,function(){return[[{path:"",component:_,children:[{path:"",redirectTo:"dashboard"},{path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"my-rides",loadChildren:"./dashboard/components/my-rides/my-rides.module#MyRidesModule"},{path:"profile",loadChildren:"./profile/profile.module#ProfileModule"},{path:"register-vehicle",loadChildren:"./register-vehicle/register-vehicle.module#RegisterVehicleModule"},{path:"show-vehicles",loadChildren:"./register-vehicle/show-vehicles/show-vehicles.module#ShowVehiclesModule"},{path:"charts",loadChildren:"./charts/charts.module#ChartsModule"},{path:"tables",loadChildren:"./tables/tables.module#TablesModule"},{path:"forms",loadChildren:"./form/form.module#FormModule"},{path:"grid",loadChildren:"./grid/grid.module#GridModule"},{path:"verify",loadChildren:"./profile/verify/verify.module#VerifyModule"},{path:"chat",loadChildren:"./dashboard/components/chat/chat.module#ChatModule"},{path:"blank",loadChildren:"./blank-page/blank-page.module#BlankPageModule"},{path:"invite-list",loadChildren:"./dashboard/components/passenger-list/invite-list/invite-list.module#InviteListModule"},{path:"trip-report",loadChildren:"./dashboard/components/trip-report/trip-report.module#TripReportModule"},{path:"map",loadChildren:"./dashboard/components/map/map.module#MapModule"},{path:"components",loadChildren:"./bs-component/bs-component.module#BsComponentModule"},{path:"blank-page",loadChildren:"./blank-page/blank-page.module#BlankPageModule"}]}]]},[])])})},UodH:function(n,t,e){"use strict";e.d(t,"c",function(){return s}),e.d(t,"b",function(){return u}),e.d(t,"a",function(){return d});var l=e("mrSG"),o=e("Wf4p"),r="accent",i=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],a=function(){return function(n){this._elementRef=n}}(),u=function(n){function t(t,e,l,o){var a=n.call(this,t)||this;a._focusMonitor=l,a._animationMode=o,a.isRoundButton=a._hasHostAttributes("mat-fab","mat-mini-fab"),a.isIconButton=a._hasHostAttributes("mat-icon-button");for(var u=0,d=i;u<d.length;u++){var s=d[u];a._hasHostAttributes(s)&&t.nativeElement.classList.add(s)}return a._focusMonitor.monitor(a._elementRef,!0),a.isRoundButton&&(a.color=r),a}return Object(l.__extends)(t,n),t.prototype.ngOnDestroy=function(){this._focusMonitor.stopMonitoring(this._elementRef)},t.prototype.focus=function(){this._getHostElement().focus()},t.prototype._getHostElement=function(){return this._elementRef.nativeElement},t.prototype._isRippleDisabled=function(){return this.disableRipple||this.disabled},t.prototype._hasHostAttributes=function(){for(var n=this,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.some(function(t){return n._getHostElement().hasAttribute(t)})},t}(Object(o.B)(Object(o.D)(Object(o.C)(a)))),d=function(n){function t(t,e,l,o){return n.call(this,l,t,e,o)||this}return Object(l.__extends)(t,n),t.prototype._haltDisabledEvents=function(n){this.disabled&&(n.preventDefault(),n.stopImmediatePropagation())},t}(u),s=function(){return function(){}}()},kERW:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var l=e("6blF"),o=e("isby"),r=e("2Bdj"),i=e("67Y/");function a(n,t,e){return e?a(n,t).pipe(Object(i.a)(function(n){return Object(o.a)(n)?e.apply(void 0,n):e(n)})):new l.a(function(e){var l,o=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.next(1===n.length?n[0]:n)};try{l=n(o)}catch(i){return void e.error(i)}if(Object(r.a)(t))return function(){return t(o,l)}})}},vGXY:function(n,t,e){"use strict";e.d(t,"a",function(){return C}),e.d(t,"b",function(){return v}),e.d(t,"c",function(){return m});var l,o=e("CcnG"),r=e("dWZg"),i=e("K9Ia"),a=e("dzgT"),u=e("KQya"),d=e("kERW"),s=e("Gi3i"),c=e("67Y/"),p=e("p0Sj"),g=e("ny24"),h=e("n6gG"),f=new Set,m=function(){function n(n){this.platform=n,this._matchMedia=this.platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):b}return n.prototype.matchMedia=function(n){return this.platform.WEBKIT&&function(n){if(!f.has(n))try{l||((l=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(l)),l.sheet&&(l.sheet.insertRule("@media "+n+" {.fx-query-test{ }}",0),f.add(n))}catch(t){console.error(t)}}(n),this._matchMedia(n)},n.ngInjectableDef=Object(o.defineInjectable)({factory:function(){return new n(Object(o.inject)(r.a))},token:n,providedIn:"root"}),n}();function b(n){return{matches:"all"===n||""===n,media:n,addListener:function(){},removeListener:function(){}}}var C=function(){function n(n,t){this.mediaMatcher=n,this.zone=t,this._queries=new Map,this._destroySubject=new i.a}return n.prototype.ngOnDestroy=function(){this._destroySubject.next(),this._destroySubject.complete()},n.prototype.isMatched=function(n){var t=this;return M(Object(h.a)(n)).some(function(n){return t._registerQuery(n).mql.matches})},n.prototype.observe=function(n){var t=this,e=M(Object(h.a)(n)).map(function(n){return t._registerQuery(n).observable});return Object(a.a)(e).pipe(Object(s.a)(0,u.a),Object(c.a)(function(n){var t={matches:!1,breakpoints:{}};return n.forEach(function(n){t.matches=t.matches||n.matches,t.breakpoints[n.query]=n.matches}),t}))},n.prototype._registerQuery=function(n){var t=this;if(this._queries.has(n))return this._queries.get(n);var e,l=this.mediaMatcher.matchMedia(n),o={observable:Object(d.a)(function(n){l.addListener(e=function(e){return t.zone.run(function(){return n(e)})})},function(){return l.removeListener(e)}).pipe(Object(p.a)(l),Object(c.a)(function(t){return{query:n,matches:t.matches}}),Object(g.a)(this._destroySubject)),mql:l};return this._queries.set(n,o),o},n.ngInjectableDef=Object(o.defineInjectable)({factory:function(){return new n(Object(o.inject)(m),Object(o.inject)(o.NgZone))},token:n,providedIn:"root"}),n}();function M(n){return n.map(function(n){return n.split(",")}).reduce(function(n,t){return n.concat(t)}).map(function(n){return n.trim()})}var v={XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px) and (max-width: 1919.99px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.99px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.99px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}}}]);