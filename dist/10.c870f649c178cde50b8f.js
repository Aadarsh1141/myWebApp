(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{NcP4:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var o=i("CcnG"),n=i("v9Dh"),s=i("Ip0R"),r=(i("M2Lx"),i("eDkP"),i("Fzqc"),i("ZYjt"),i("Wf4p"),i("dWZg"),i("lLAP"),i("4c35"),i("qAlS"),i("vGXY")),a=o["\u0275crt"]({encapsulation:2,styles:[".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"],data:{animation:[{type:7,name:"state",definitions:[{type:0,name:"initial, void, hidden",styles:{type:6,styles:{opacity:0,transform:"scale(0)"},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{transform:"scale(1)"},offset:null},options:void 0},{type:1,expr:"* => visible",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:0,transform:"scale(0)",offset:0},offset:null},{type:6,styles:{opacity:.5,transform:"scale(0.99)",offset:.5},offset:null},{type:6,styles:{opacity:1,transform:"scale(1)",offset:1},offset:null}]},timings:"200ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => hidden",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"100ms cubic-bezier(0, 0, 0.2, 1)"},options:null}],options:{}}]}});function l(t){return o["\u0275vid"](2,[(t()(),o["\u0275eld"](0,0,null,null,3,"div",[["class","mat-tooltip"]],[[2,"mat-tooltip-handset",null],[24,"@state",0]],[[null,"@state.start"],[null,"@state.done"]],function(t,e,i){var o=!0,n=t.component;return"@state.start"===e&&(o=!1!==n._animationStart()&&o),"@state.done"===e&&(o=!1!==n._animationDone(i)&&o),o},null,null)),o["\u0275did"](1,278528,null,0,s.l,[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275pid"](131072,s.b,[o.ChangeDetectorRef]),(t()(),o["\u0275ted"](3,null,["",""]))],function(t,e){t(e,1,0,"mat-tooltip",e.component.tooltipClass)},function(t,e){var i,n=e.component;t(e,0,0,null==(i=o["\u0275unv"](e,0,0,o["\u0275nov"](e,2).transform(n._isHandset)))?null:i.matches,n._visibility),t(e,3,0,n.message)})}function h(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"mat-tooltip-component",[["aria-hidden","true"]],[[4,"zoom",null]],[["body","click"]],function(t,e,i){var n=!0;return"body:click"===e&&(n=!1!==o["\u0275nov"](t,1)._handleBodyInteraction()&&n),n},l,a)),o["\u0275did"](1,180224,null,0,n.f,[o.ChangeDetectorRef,r.a],null,null)],null,function(t,e){t(e,0,0,"visible"===o["\u0275nov"](e,1)._visibility?1:null)})}var c=o["\u0275ccf"]("mat-tooltip-component",n.f,h,{},{},[])},v9Dh:function(t,e,i){"use strict";i.d(e,"e",function(){return b}),i.d(e,"c",function(){return _}),i.d(e,"b",function(){return f}),i.d(e,"a",function(){return y}),i.d(e,"d",function(){return m}),i.d(e,"f",function(){return v}),i("ihYY");var o=i("mrSG"),n=i("n6gG"),s=i("YSh2"),r=i("vGXY"),a=(i("eDkP"),i("4c35")),l=i("ny24"),h=i("t9fZ"),c=i("CcnG"),p=i("K9Ia"),u=20;function d(t){return Error('Tooltip position "'+t+'" is invalid.')}var f=new c.InjectionToken("mat-tooltip-scroll-strategy");function _(t){return function(){return t.scrollStrategies.reposition({scrollThrottle:u})}}var y=new c.InjectionToken("mat-tooltip-default-options",{providedIn:"root",factory:function(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}}),m=function(){function t(t,e,i,o,n,s,r,a,h,c,u,d){var f=this;this._overlay=t,this._elementRef=e,this._scrollDispatcher=i,this._viewContainerRef=o,this._ngZone=n,this._ariaDescriber=r,this._focusMonitor=a,this._dir=c,this._defaultOptions=u,this._position="below",this._disabled=!1,this.showDelay=this._defaultOptions.showDelay,this.hideDelay=this._defaultOptions.hideDelay,this._message="",this._manualListeners=new Map,this._destroyed=new p.a,this._scrollStrategy=h;var _=e.nativeElement,y=_.style,m="undefined"==typeof window||window.Hammer||d;s.IOS||s.ANDROID?m||this._manualListeners.set("touchstart",function(){return f.show()}):this._manualListeners.set("mouseenter",function(){return f.show()}).set("mouseleave",function(){return f.hide()}),this._manualListeners.forEach(function(t,e){return _.addEventListener(e,t)}),"INPUT"!==_.nodeName&&"TEXTAREA"!==_.nodeName||(y.webkitUserSelect=y.userSelect=y.msUserSelect=""),_.draggable&&"none"===y.webkitUserDrag&&(y.webkitUserDrag=""),a.monitor(e).pipe(Object(l.a)(this._destroyed)).subscribe(function(t){t?"keyboard"===t&&n.run(function(){return f.show()}):n.run(function(){return f.hide(0)})}),u&&u.position&&(this.position=u.position)}return Object.defineProperty(t.prototype,"position",{get:function(){return this._position},set:function(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(),this._tooltipInstance&&this._tooltipInstance.show(0),this._overlayRef.updatePosition()))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=Object(n.b)(t),this._disabled&&this.hide(0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this._message},set:function(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message),this._message=null!=t?(""+t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._updateTooltipMessage(),this._ariaDescriber.describe(this._elementRef.nativeElement,this.message))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tooltipClass",{get:function(){return this._tooltipClass},set:function(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){var t=this;this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._manualListeners.forEach(function(e,i){t._elementRef.nativeElement.removeEventListener(i,e)}),this._manualListeners.clear(),this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.message),this._focusMonitor.stopMonitoring(this._elementRef)},t.prototype.show=function(t){var e=this;if(void 0===t&&(t=this.showDelay),!this.disabled&&this.message&&(!this._isTooltipVisible()||this._tooltipInstance._showTimeoutId||this._tooltipInstance._hideTimeoutId)){var i=this._createOverlay();this._detach(),this._portal=this._portal||new a.d(v,this._viewContainerRef),this._tooltipInstance=i.attach(this._portal).instance,this._tooltipInstance.afterHidden().pipe(Object(l.a)(this._destroyed)).subscribe(function(){return e._detach()}),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),this._tooltipInstance.show(t)}},t.prototype.hide=function(t){void 0===t&&(t=this.hideDelay),this._tooltipInstance&&this._tooltipInstance.hide(t)},t.prototype.toggle=function(){this._isTooltipVisible()?this.hide():this.show()},t.prototype._isTooltipVisible=function(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()},t.prototype._handleKeydown=function(t){this._isTooltipVisible()&&t.keyCode===s.e&&(t.stopPropagation(),this.hide(0))},t.prototype._handleTouchend=function(){this.hide(this._defaultOptions.touchendHideDelay)},t.prototype._createOverlay=function(){var t=this;if(this._overlayRef)return this._overlayRef;var e=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(".mat-tooltip").withFlexibleDimensions(!1).withViewportMargin(8),i=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);return e.withScrollableContainers(i),e.positionChanges.pipe(Object(l.a)(this._destroyed)).subscribe(function(e){t._tooltipInstance&&e.scrollableViewProperties.isOverlayClipped&&t._tooltipInstance.isVisible()&&t._ngZone.run(function(){return t.hide(0)})}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:e,panelClass:"mat-tooltip-panel",scrollStrategy:this._scrollStrategy()}),this._updatePosition(),this._overlayRef.detachments().pipe(Object(l.a)(this._destroyed)).subscribe(function(){return t._detach()}),this._overlayRef},t.prototype._detach=function(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null},t.prototype._updatePosition=function(){var t=this._overlayRef.getConfig().positionStrategy,e=this._getOrigin(),i=this._getOverlayPosition();t.withPositions([Object(o.__assign)({},e.main,i.main),Object(o.__assign)({},e.fallback,i.fallback)])},t.prototype._getOrigin=function(){var t,e=!this._dir||"ltr"==this._dir.value,i=this.position;if("above"==i||"below"==i)t={originX:"center",originY:"above"==i?"top":"bottom"};else if("before"==i||"left"==i&&e||"right"==i&&!e)t={originX:"start",originY:"center"};else{if(!("after"==i||"right"==i&&e||"left"==i&&!e))throw d(i);t={originX:"end",originY:"center"}}var o=this._invertPosition(t.originX,t.originY);return{main:t,fallback:{originX:o.x,originY:o.y}}},t.prototype._getOverlayPosition=function(){var t,e=!this._dir||"ltr"==this._dir.value,i=this.position;if("above"==i)t={overlayX:"center",overlayY:"bottom"};else if("below"==i)t={overlayX:"center",overlayY:"top"};else if("before"==i||"left"==i&&e||"right"==i&&!e)t={overlayX:"end",overlayY:"center"};else{if(!("after"==i||"right"==i&&e||"left"==i&&!e))throw d(i);t={overlayX:"start",overlayY:"center"}}var o=this._invertPosition(t.overlayX,t.overlayY);return{main:t,fallback:{overlayX:o.x,overlayY:o.y}}},t.prototype._updateTooltipMessage=function(){var t=this;this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(h.a)(1),Object(l.a)(this._destroyed)).subscribe(function(){t._tooltipInstance&&t._overlayRef.updatePosition()}))},t.prototype._setTooltipClass=function(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())},t.prototype._invertPosition=function(t,e){return"above"===this.position||"below"===this.position?"top"===e?e="bottom":"bottom"===e&&(e="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:e}},t}(),v=function(){function t(t,e){this._changeDetectorRef=t,this._breakpointObserver=e,this._visibility="initial",this._closeOnInteraction=!1,this._onHide=new p.a,this._isHandset=this._breakpointObserver.observe(r.b.Handset)}return t.prototype.show=function(t){var e=this;this._hideTimeoutId&&(clearTimeout(this._hideTimeoutId),this._hideTimeoutId=null),this._closeOnInteraction=!0,this._showTimeoutId=setTimeout(function(){e._visibility="visible",e._showTimeoutId=null,e._markForCheck()},t)},t.prototype.hide=function(t){var e=this;this._showTimeoutId&&(clearTimeout(this._showTimeoutId),this._showTimeoutId=null),this._hideTimeoutId=setTimeout(function(){e._visibility="hidden",e._hideTimeoutId=null,e._markForCheck()},t)},t.prototype.afterHidden=function(){return this._onHide.asObservable()},t.prototype.isVisible=function(){return"visible"===this._visibility},t.prototype.ngOnDestroy=function(){this._onHide.complete()},t.prototype._animationStart=function(){this._closeOnInteraction=!1},t.prototype._animationDone=function(t){var e=t.toState;"hidden"!==e||this.isVisible()||this._onHide.next(),"visible"!==e&&"hidden"!==e||(this._closeOnInteraction=!0)},t.prototype._handleBodyInteraction=function(){this._closeOnInteraction&&this.hide(0)},t.prototype._markForCheck=function(){this._changeDetectorRef.markForCheck()},t}(),b=function(){return function(){}}()}}]);