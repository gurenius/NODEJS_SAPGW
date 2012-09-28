/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.ScrollBar");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.core.ScrollBar",{metadata:{publicMethods:["bind","unbind","pageUp","pageDown"],library:"sap.ui.core",properties:{"vertical":{type:"boolean",group:"Behavior",defaultValue:true},"scrollPosition":{type:"int",group:"Behavior",defaultValue:null},"size":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"contentSize":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"steps":{type:"int",group:"Dimension",defaultValue:null}},events:{"scroll":{}}}});sap.ui.core.ScrollBar.M_EVENTS={'scroll':'scroll'};
sap.ui.core.ScrollBar.prototype.init=function(){this._$ScrollDomRef=null;this._iOldScrollPos=0;this._iOldStep=0;this._bScrollPosIsChecked=false;this._bRTL=sap.ui.getCore().getConfiguration().getRTL();this._bSuppressScroll=false;};
sap.ui.core.ScrollBar.prototype.onBeforeRendering=function(){jQuery.sap.byId(this.getId()+"-sb").unbind("scroll",this.onscroll);};
sap.ui.core.ScrollBar.prototype.onAfterRendering=function(){this._iSteps=this.getSteps();var c=this.getContentSize();this._bStepMode=!c;var s=this.getSize();if(jQuery.sap.endsWith(s,"px")){s=s.substr(0,s.length-2);}else{s=this.getVertical()?this.$().height():this.$().width();}var a=null;var $=jQuery('#'+this.getId()+"-ffsize");if(jQuery.browser.mozilla){a=$.outerHeight();}$.remove();if(jQuery.browser.webkit){a=Math.round(40/((window.top.outerWidth-8)/window.top.innerWidth));}if(this.getVertical()){this._iFactor=jQuery.browser.mozilla?a:jQuery.browser.webkit?a:Math.floor(s*0.125);this._iFactorPage=jQuery.browser.mozilla?s-a:Math.floor(s*0.875)}else{this._iFactor=jQuery.browser.mozilla?10:jQuery.browser.webkit?a:7;this._iFactorPage=jQuery.browser.mozilla?Math.floor(s*0.8):jQuery.browser.webkit?Math.floor(s*0.875):s-14;}this._$ScrollDomRef=jQuery.sap.byId(this.getId()+"-sb");if(this._bStepMode){if(this.getVertical()){var i=this._$ScrollDomRef.height()+this._iSteps*this._iFactor;this._$ScrollDomRef.find("div").height(i);}else{var i=this._$ScrollDomRef.width()+this._iSteps*this._iFactor;this._$ScrollDomRef.find("div").width(i);}}this.setCheckedScrollPosition(this.getScrollPosition()?this.getScrollPosition():0);this._$ScrollDomRef.bind("scroll",jQuery.proxy(this.onscroll,this));};
sap.ui.core.ScrollBar.prototype.onmousewheel=function(e){var o=e.originalEvent;var w=o.detail?o.detail:o.wheelDelta*(-1)/40;var f=w>0?true:false;if(jQuery.sap.containsOrEquals(this._$ScrollDomRef[0],e.target)){this._doScroll(sap.ui.core.ScrollBarAction.MouseWheel,f);}else{this._bMouseWheel=true;var p=null;if(this._bStepMode){p=w+this._iOldStep;}else{p=w*this._iFactor+this._iOldScrollPos;}this.setCheckedScrollPosition(p,true);}e.preventDefault();e.stopPropagation();return false;};
sap.ui.core.ScrollBar.prototype.onscroll=function(e){if(this._bSuppressScroll){this._bSuppressScroll=false;e.preventDefault();e.stopPropagation();return false;}var s=null;if(this._$ScrollDomRef){if(this.getVertical()){s=this._$ScrollDomRef.scrollTop();}else{s=this._$ScrollDomRef.scrollLeft();if(jQuery.browser.mozilla&&this._bRTL){s=Math.abs(s);}}}var d=s-this._iOldScrollPos;var f=d>0?true:false;if(d<0){d=d*(-1);}var a=sap.ui.core.ScrollBarAction.Drag;if(d==this._iFactor){a=sap.ui.core.ScrollBarAction.Step;}else if(d==this._iFactorPage){a=sap.ui.core.ScrollBarAction.Page;}else if(this._bMouseWheel){a=sap.ui.core.ScrollBarAction.MouseWheel;}this._doScroll(a,f);e.preventDefault();e.stopPropagation();return false;};
sap.ui.core.ScrollBar.prototype.unbind=function(o){if(o){this._$OwnerDomRef=jQuery(o);this._$OwnerDomRef.unbind(jQuery.browser.mozilla?"DOMMouseScroll":"mousewheel",this.onmousewheel);}};
sap.ui.core.ScrollBar.prototype.bind=function(o){if(o){this._$OwnerDomRef=jQuery(o);this._$OwnerDomRef.bind(jQuery.browser.mozilla?"DOMMouseScroll":"mousewheel",jQuery.proxy(this.onmousewheel,this));}};
sap.ui.core.ScrollBar.prototype.pageUp=function(){this._doScroll(sap.ui.core.ScrollBarAction.Page,false);};
sap.ui.core.ScrollBar.prototype.pageDown=function(){this._doScroll(sap.ui.core.ScrollBarAction.Page,true);};
sap.ui.core.ScrollBar.prototype.setScrollPosition=function(s){if(this._$ScrollDomRef){this.setCheckedScrollPosition(s,true);}else{this.setProperty("scrollPosition",s);}};
sap.ui.core.ScrollBar.prototype.setCheckedScrollPosition=function(s,c){var i=Math.max(s,0);if(this._bStepMode===undefined){this._bStepMode=!this.getContentSize();}var a=i;if(this._bStepMode){i=Math.min(i,this.getSteps());a=i*this._iFactor;}this._bSuppressScroll=!c;this.setProperty("scrollPosition",i,true);if(this.getVertical()){this._$ScrollDomRef.scrollTop(a);}else{if(jQuery.browser.mozilla&&this._bRTL){this._$ScrollDomRef.scrollLeft(-a);}else{this._$ScrollDomRef.scrollLeft(a);}}};
sap.ui.core.ScrollBar.prototype.setContentSize=function(c){this.setProperty("contentSize",c,!this._bStepMode);if(!this._bStepMode){var s=jQuery.sap.byId(this.getId()+"-sbcnt");if(s){if(this.getVertical()){s.height(c);}else{s.width(c);}}}};
sap.ui.core.ScrollBar.prototype._doScroll=function(e,f){var s=null;if(this._$ScrollDomRef){if(this.getVertical()){s=this._$ScrollDomRef.scrollTop();}else{s=this._$ScrollDomRef.scrollLeft();if(jQuery.browser.mozilla&&this._bRTL){s=Math.abs(s);}}}if(this._bStepMode){var i=parseInt(s/this._iFactor,10);var o=this._iOldStep;if(o!==i){this.setCheckedScrollPosition(i,false);jQuery.sap.log.debug("-----STEPMODE-----: New Step: "+i+" --- Old Step: "+o+" --- Scroll Pos in px: "+s+" --- Action: "+e+" --- Direction is forward: "+f);this.fireScroll({action:e,forward:f,newScrollPos:i,oldScrollPos:o});this._iOldStep=i;}}else{this.setCheckedScrollPosition(s,false);jQuery.sap.log.debug("-----PIXELMODE-----: New ScrollPos: "+s+" --- Old ScrollPos: "+this._iOldScrollPos+" --- Action: "+e+" --- Direction is forward: "+f);this.fireScroll({action:e,forward:f,newScrollPos:s,oldScrollPos:this._iOldScrollPos});}this._bSuppressScroll=false;this._iOldScrollPos=s;this._bMouseWheel=false;};
sap.ui.core.ScrollBar.prototype.onThemeChanged=function(){this.rerender();}
