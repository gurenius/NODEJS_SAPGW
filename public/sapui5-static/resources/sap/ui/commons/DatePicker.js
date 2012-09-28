/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.DatePicker");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.TextField");sap.ui.commons.TextField.extend("sap.ui.commons.DatePicker",{metadata:{library:"sap.ui.commons",properties:{"locale":{type:"string",group:"Misc",defaultValue:null},"yyyymmdd":{type:"string",group:"Misc",defaultValue:null}}}});jQuery.sap.require("jquery-ui-core");jQuery.sap.require("jquery-ui-datepicker");(function(){var o=function(d,i){var s=this.id;var c=s.replace(/-input/,'');var a=sap.ui.getCore().getControl(c);if(a){if(a.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: JQUERY ONCLOSE CALLBACK");}a._hide();}};var f=function(y,m,i){if(document.activeElement){if(document.activeElement.className=="ui-datepicker-month"){setTimeout(sap.ui.commons.DatePicker._focusMonth,100);}else if(document.activeElement.className=="ui-datepicker-year"){setTimeout(sap.ui.commons.DatePicker._focusYear,100);}else{setTimeout(sap.ui.commons.DatePicker._focusCalendar,100);}}};jQuery.datepicker.regional['']={changeMonth:true,changeYear:true,isRTL:sap.ui.getCore().getConfiguration().getRTL(),onChangeMonthYear:f,onClose:o,showOn:'button',showOtherMonths:true,selectOtherMonths:true,showWeek:true,weekHeader:''};jQuery.datepicker.setDefaults(jQuery.datepicker.regional['']);}());
sap.ui.commons.DatePicker.prototype.init=function(){this.oPrivate={bIsVisible:false,tLastTimeStamp:"",sValue:"",bVerboseMode:false};};
sap.ui.commons.DatePicker.prototype._getInputId=function(){return this.getId()+"-input";};
sap.ui.commons.DatePicker.prototype.onAfterRendering=function(){var i=this._getInputId();var o=jQuery.sap.domById(i);var s=jQuery.sap.byId(i);var l=this.getRenderedLocale();s.datepicker(jQuery.datepicker.regional[l]);jQuery('#ui-datepicker-div').addClass('sapUi-jQdatePicker sapUi-visibilityHidden sapUiShd');var a=this.getYyyymmdd();if(a&&a!="-1"){this.setYyyymmdd(a);}else{a=this.getValue();if(a&&a!="-1"){this.setValue(a);}}};
sap.ui.commons.DatePicker.prototype._show=function(){if(this.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: ._show()");}var i=this._getInputId();var s=jQuery.sap.byId(i);var p=jQuery('#ui-datepicker-div');p.removeClass('sapUi-visibilityHidden sapUi-DP-top');s.datepicker("show");if(sap.ui.getCore().getConfiguration().getRTL()){var d=jQuery.sap.domById(this.getId());var r=(jQuery(document).width()-d.offsetLeft-d.offsetWidth)+"px";p.css('left','').css('right',r);}if(p.offset().top<s.offset().top){p.addClass('sapUi-DP-top');}if(p.css('position')=='fixed'){if((p.position().top-jQuery(document).scrollTop()+p.outerHeight())>document.documentElement.clientHeight){var n=(p.position().top-jQuery(document).scrollTop()-p.outerHeight()-s.outerHeight())+'px';p.css('top',n);}}this.oPrivate.bIsVisible=true;this._setKeyboardNavigation();setTimeout(sap.ui.commons.DatePicker._focusCalendar,100);if(this.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: open");}};
sap.ui.commons.DatePicker.prototype._hide=function(){if(this.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: ._hide()");}if(this.oPrivate.bIsVisible){var c=new Date().getTime();this.oPrivate.tLastTimeStamp=c;jQuery('#ui-datepicker-div').addClass('sapUi-visibilityHidden');this.oPrivate.bIsVisible=false;var i=this._getInputId();var s=jQuery.sap.byId(i);s.datepicker("hide");var o=this.getInputDomRef();if(o){o.focus();}if(o.value!=this.getValue()){this._checkChange();}}if(this.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: closed");}};
sap.ui.commons.DatePicker.prototype.onclick=function(e){var t=(e.target)?e.target:e.srcElement;if(!this.getEnabled()||!this.getEditable()){if(t.nodeName!="INPUT"){jQuery.sap.byId(this.getId()).focus();}return;}if(t.nodeName!="INPUT"){if(this.oPrivate.bIsVisible){if(this.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: BUTTON-CLICK HIDE");}this._hide();}else{var c=new Date().getTime();var a=c-this.oPrivate.tLastTimeStamp;if(a&&a<300){if(this.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: BUTTON-D-CLICK IGNORED: "+a+"msec");}this.getInputDomRef().focus();}else{if(this.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: BUTTON-CLICK SHOW");}this._show();}}}};
sap.ui.commons.DatePicker.prototype.onsapshow=function(e){if(!this.getEnabled||!this.getEditable()){return;}if(this.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: .onsapshow()");}this._checkChange(e);this._show();e.preventDefault();e.stopPropagation();};
sap.ui.commons.DatePicker.prototype.onsapfocusleave=function(e){if(this.oPrivate.bIsVisible){return;}if(this.oPrivate.bVerboseMode){jQuery.sap.log.debug("DATEPICKER: .onsapfocusleave()");}this._checkChange(e);};
sap.ui.commons.DatePicker._focusCalendar=function(){var p=jQuery('#ui-datepicker-div');var c=p.attr('associatedControlId');if(!c){return;}var o=sap.ui.getCore().getControl(c);if(!o.oPrivate.bIsVisible){p.attr('restoreFocusOnDay',"");return;}var d=jQuery.sap.domById(c);var f=null;var a=null;var s=p.attr('restoreFocusOnDay');if(s){f=jQuery('a.ui-state-default');var b=Number(s);if(b<=0){b+=f.length;}a=f[b-1];if(a&&a.offsetHeight){a.focus();jQuery(a).mouseover();if(d.className.indexOf("sapUiTfFoc")==-1){d.className+=" sapUiTfFoc";}p.attr('restoreFocusOnDay',"");return;}}a=jQuery('a.ui-state-default.ui-state-hover').get(0);if(!a){f=jQuery('td.ui-datepicker-current-day');a=(f[0])?f[0].firstChild:null;}if(!a){f=jQuery('td.ui-datepicker-today');a=(f[0])?f[0].firstChild:null;}if(!a){var e=jQuery("a.ui-state-default");for(var i=0;i<e.length;i++){var g=e[i];if(!jQuery(g).hasClass('ui-priority-secondary')){a=g;break;}}}if(a&&a.nodeName=="A"&&a.offsetHeight){a.focus();jQuery(a).mouseover();if(d.className.indexOf("sapUiTfFoc")==-1){d.className+=" sapUiTfFoc";}return;}setTimeout(sap.ui.commons.DatePicker._focusCalendar,100);};
sap.ui.commons.DatePicker._focusMonth=function(){jQuery('select.ui-datepicker-year')[0].focus();jQuery('select.ui-datepicker-month')[0].focus();};
sap.ui.commons.DatePicker._focusYear=function(){jQuery('select.ui-datepicker-month')[0].focus();jQuery('select.ui-datepicker-year')[0].focus();};
sap.ui.commons.DatePicker._keyboardHandler=function(e){function f(n){var i=jQuery("a.ui-state-default");var q=jQuery(i[n-1]).hasClass('ui-priority-secondary');if((n>0)&&(n<=i.length)&&!q){i[n-1].focus();jQuery(i[n-1]).mouseover();}else if((n<=0)||(q&&n<7)){var r=0;if(jQuery(i[0]).hasClass('ui-priority-secondary')){r=7;}jQuery("a.ui-datepicker-prev")[0].focus();jQuery("a.ui-datepicker-prev")[0].onclick();var u=jQuery("a.ui-state-default");jQuery(u[u.length-1-r+n]).mouseover();jQuery('#ui-datepicker-div').attr('restoreFocusOnDay',String(u.length-r+n));}else{var r=0;var v=n-i.length;if(jQuery(i[i.length-1]).hasClass('ui-priority-secondary')){r=7;}jQuery("a.ui-datepicker-next")[0].focus();jQuery("a.ui-datepicker-next")[0].onclick();var u=jQuery("a.ui-state-default");jQuery(u[r+v-1]).mouseover();jQuery('#ui-datepicker-div').attr('restoreFocusOnDay',String(r+v));}}function a(){var i=jQuery("a.ui-state-default");for(var l=i.length-1;l>=0;l--){var o=i[l];if(!jQuery(o).hasClass('ui-priority-secondary')){o.focus();jQuery(o).mouseover();return(l);}}}function b(i){var n=jQuery("a.ui-state-default");for(var l=0;l<n.length;l++){var o=n[l];if(!jQuery(o).hasClass('ui-priority-secondary')){o.focus();jQuery(o).mouseover();return(l);}}}function c(n){var q=jQuery("a.ui-state-default");var r=q[n-1].parentNode.parentNode;for(var i=0,u=q.length;i<u;i++){if(q[i].parentNode.parentNode==r){if(!jQuery(q[i]).hasClass('ui-priority-secondary')){q[i].focus();jQuery(q[i]).mouseover();}else{jQuery("a.ui-datepicker-prev")[0].focus();jQuery("a.ui-datepicker-prev")[0].onclick();var v=jQuery("a.ui-state-default");jQuery(v[v.length-7]).mouseover();jQuery('#ui-datepicker-div').attr('restoreFocusOnDay',String(v.length-6));}return;}}}function d(n){var q=jQuery("a.ui-state-default");var r=q[n-1].parentNode.parentNode;for(var i=q.length-1;i>=0;i--){if(q[i].parentNode.parentNode==r){if(!jQuery(q[i]).hasClass('ui-priority-secondary')){q[i].focus();jQuery(q[i]).mouseover();}else{jQuery("a.ui-datepicker-next")[0].focus();jQuery("a.ui-datepicker-next")[0].onclick();var u=jQuery("a.ui-state-default");jQuery(u[6]).mouseover();jQuery('#ui-datepicker-div').attr('restoreFocusOnDay',String(7));}return;}}}var k=e.keyCode;var t=(e.target)?e.target:e.srcElement;var g=Number(t.innerHTML);var h=(t.nodeName=="SELECT");var j=(t.nodeName=="A");if(!h&&!j){jQuery.sap.log.debug("ERROR: DatePicker.prototype._keyboardHandler()");return;}for(var l=0;l<jQuery("a.ui-state-default").length;l++){var o=jQuery("a.ui-state-default")[l];if(t==o){g=l+1;break;}}switch(k){case jQuery.sap.KeyCodes.TAB:if(h){if((t.className.indexOf("year")!=-1&&!e.shiftKey)||(t.className.indexOf("month")!=-1&&e.shiftKey)){setTimeout(sap.ui.commons.DatePicker._focusCalendar,100);}else{if(t.className.indexOf("year")!=-1){setTimeout(sap.ui.commons.DatePicker._focusMonth,100);}else{setTimeout(sap.ui.commons.DatePicker._focusYear,100);}return;}}else{if(e.shiftKey){jQuery("select.ui-datepicker-year")[0].focus();}else{jQuery("select.ui-datepicker-month")[0].focus();}}break;case jQuery.sap.KeyCodes.ENTER:if(document.activeElement){if(document.activeElement.className=="ui-datepicker-month"){setTimeout(sap.ui.commons.DatePicker._focusMonth,100);break;}else if(document.activeElement.className=="ui-datepicker-year"){setTimeout(sap.ui.commons.DatePicker._focusYear,100);break;}}return;break;case jQuery.sap.KeyCodes.ESCAPE:var p=jQuery('#ui-datepicker-div');var s=p.attr('associatedControlId');var m=sap.ui.getCore().getControl(s);m._hide();break;case jQuery.sap.KeyCodes.SPACE:if(j){t.offsetParent.onclick();}else{return;}break;case jQuery.sap.KeyCodes.PAGE_UP:jQuery("a.ui-datepicker-prev")[0].focus();jQuery("a.ui-datepicker-prev")[0].onclick();jQuery('#ui-datepicker-div').attr('restoreFocusOnDay',String(b()+1));break;case jQuery.sap.KeyCodes.PAGE_DOWN:jQuery("a.ui-datepicker-next")[0].focus();jQuery("a.ui-datepicker-next")[0].onclick();jQuery('#ui-datepicker-div').attr('restoreFocusOnDay',String(b()+1));break;case jQuery.sap.KeyCodes.END:if(j){if(e.ctrlKey){a();}else{d(g);}}else{return;}break;case jQuery.sap.KeyCodes.HOME:if(j){if(e.ctrlKey){b();}else{c(g);}}else{return;}break;case jQuery.sap.KeyCodes.ARROW_LEFT:if(j){if(sap.ui.getCore().getConfiguration().getRTL()){f(g+1);}else{f(g-1);}}else{return;}break;case jQuery.sap.KeyCodes.ARROW_UP:if(j){f(g-7);}else{return;}break;case jQuery.sap.KeyCodes.ARROW_RIGHT:if(j){if(sap.ui.getCore().getConfiguration().getRTL()){f(g-1);}else{f(g+1);}}else{return;}break;case jQuery.sap.KeyCodes.ARROW_DOWN:if(j){f(g+7);}else{return;}break;default:return;}e.preventDefault();e.stopPropagation();};
sap.ui.commons.DatePicker.prototype._setKeyboardNavigation=function(){var p=jQuery('#ui-datepicker-div');if(p){var r=p.attr('associatedControlId');if(!r){p.bind('keydown',jQuery.proxy(sap.ui.commons.DatePicker._keyboardHandler,this));}p.attr('associatedControlId',this.getId());}else{jQuery.sap.log.debug("ERROR: DatePicker ._setKeyboardNavigation() fails.");}};
sap.ui.commons.DatePicker.prototype.parseForSupportedLocale=function(l){if(l){var t=jQuery.datepicker.regional[l];if(!t){var s=l.split('-')[0];if(s!=l){t=jQuery.datepicker.regional[s];if(!t){l='';}else{l=s;}}else{l='';}}}return l;};
sap.ui.commons.DatePicker.prototype.getRenderedLocale=function(){var l=this.getProperty("locale");l=this.parseForSupportedLocale(l);if(!l){l=sap.ui.getCore().getConfiguration().getLanguage();l=this.parseForSupportedLocale(l);}if(!l){if(navigator){if(navigator.language){l=navigator.language;}else if(navigator.browserLanguage){l=navigator.browserLanguage;}else if(navigator.systemLanguage){l=navigator.systemLanguage;}else if(navigator.userLanguage){l=navigator.userLanguage;}}l=this.parseForSupportedLocale(l);}if(!l){l="en";}return l;};
sap.ui.commons.DatePicker.prototype.setYyyymmdd=function(y){if(y=="-1"){return this;}this.setProperty("yyyymmdd",y,true);var i=this.getId()+"-input";var o=jQuery.sap.domById(i);if(!o){this.setProperty("value","-1",true);return this;}var t=this;try{jQuery(function($){var d=$.datepicker.parseDate('yymmdd',y);var s=jQuery.sap.byId(i);s.datepicker("setDate",d);var o=jQuery.sap.domById(i);var v=o.value;t.setProperty("value",v,true);});}catch(e){jQuery.sap.log.debug("Warning: DATEPICKER setYyyymmdd("+y+") failed");this.setProperty("value","",true);this.setProperty("yyyymmdd","",true);};return this;};
sap.ui.commons.DatePicker.prototype.setValue=function(v){if(v=="-1"){return this;}this.setProperty("value",v,true);var i=this.getId()+"-input";var o=jQuery.sap.domById(i);if(!o){this.setProperty("yyyymmdd","-1",true);return this;}var t=this;try{jQuery(function($){var s=jQuery.sap.byId(i);s.datepicker("setDate",v);var d=s.datepicker("getDate");var y=$.datepicker.formatDate('yymmdd',d);t.setProperty("yyyymmdd",y,true);var o=jQuery.sap.domById(i);var n=o.value;if(n!=v){t.setProperty("value",n,true);}});}catch(e){jQuery.sap.log.debug("Warning: DATEPICKER setValue("+v+") failed");this.setProperty("value","",true);this.setProperty("yyyymmdd","",true);}jQuery.sap.log.debug("DATEPICKER("+this.getId()+"): setValue: value= "+t.getValue()+" yyyymmdd= "+t.getYyyymmdd());return this;};
sap.ui.commons.DatePicker.prototype.setLocale=function(l){var o=this.getLocale();if(l==o){return this;}this.setProperty("locale",l,true);this.setLocaleTexts(l);var i=this.getId()+"-input";var a=jQuery.sap.domById(i);if(!a){return this;}l=this.getRenderedLocale();this.setLocaleTexts(l);var s=jQuery.sap.byId(i);var d=s.datepicker("getDate");s.datepicker("destroy");s.datepicker(jQuery.datepicker.regional[l]);s.datepicker("setDate",d);this.setValue(a.value);return this;};
sap.ui.commons.DatePicker.prototype.setLocaleTexts=function(l){if(!jQuery.datepicker.regional[l]||!jQuery.datepicker.regional[l].closeText){var s=l.split('-')[0];var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons",s);if(!jQuery.datepicker.regional[s]){jQuery.datepicker.regional[s]={};}jQuery.datepicker.regional[s].closeText=r.getText("DATEPICKER_CLOSE_TEXT");jQuery.datepicker.regional[s].prevText=r.getText("DATEPICKER_PREV_TEXT");jQuery.datepicker.regional[s].nextText=r.getText("DATEPICKER_NEXT_TEXT");jQuery.datepicker.regional[s].currentText=r.getText("DATEPICKER_CURRENT_TEXT");jQuery.datepicker.regional[s].monthNames=[r.getText("DATEPICKER_MONTH_01"),r.getText("DATEPICKER_MONTH_02"),r.getText("DATEPICKER_MONTH_03"),r.getText("DATEPICKER_MONTH_04"),r.getText("DATEPICKER_MONTH_05"),r.getText("DATEPICKER_MONTH_06"),r.getText("DATEPICKER_MONTH_07"),r.getText("DATEPICKER_MONTH_08"),r.getText("DATEPICKER_MONTH_09"),r.getText("DATEPICKER_MONTH_10"),r.getText("DATEPICKER_MONTH_11"),r.getText("DATEPICKER_MONTH_12")];jQuery.datepicker.regional[s].monthNamesShort=[r.getText("DATEPICKER_MONTH_SHORT_01"),r.getText("DATEPICKER_MONTH_SHORT_02"),r.getText("DATEPICKER_MONTH_SHORT_03"),r.getText("DATEPICKER_MONTH_SHORT_04"),r.getText("DATEPICKER_MONTH_SHORT_05"),r.getText("DATEPICKER_MONTH_SHORT_06"),r.getText("DATEPICKER_MONTH_SHORT_07"),r.getText("DATEPICKER_MONTH_SHORT_08"),r.getText("DATEPICKER_MONTH_SHORT_09"),r.getText("DATEPICKER_MONTH_SHORT_10"),r.getText("DATEPICKER_MONTH_SHORT_11"),r.getText("DATEPICKER_MONTH_SHORT_12")];jQuery.datepicker.regional[s].dayNames=[r.getText("DATEPICKER_DAY_01"),r.getText("DATEPICKER_DAY_02"),r.getText("DATEPICKER_DAY_03"),r.getText("DATEPICKER_DAY_04"),r.getText("DATEPICKER_DAY_05"),r.getText("DATEPICKER_DAY_06"),r.getText("DATEPICKER_DAY_07")];jQuery.datepicker.regional[s].dayNamesShort=[r.getText("DATEPICKER_DAY_SHORT_01"),r.getText("DATEPICKER_DAY_SHORT_02"),r.getText("DATEPICKER_DAY_SHORT_03"),r.getText("DATEPICKER_DAY_SHORT_04"),r.getText("DATEPICKER_DAY_SHORT_05"),r.getText("DATEPICKER_DAY_SHORT_06"),r.getText("DATEPICKER_DAY_SHORT_07")];jQuery.datepicker.regional[s].dayNamesMin=[r.getText("DATEPICKER_DAY_MIN_01"),r.getText("DATEPICKER_DAY_MIN_02"),r.getText("DATEPICKER_DAY_MIN_03"),r.getText("DATEPICKER_DAY_MIN_04"),r.getText("DATEPICKER_DAY_MIN_05"),r.getText("DATEPICKER_DAY_MIN_06"),r.getText("DATEPICKER_DAY_MIN_07")];}};
sap.ui.commons.DatePicker.prototype.getInputDomRef=function(){return jQuery.sap.domById(this.getId()+"-input");};
sap.ui.commons.DatePicker.prototype.fireChange=function(){this.fireEvent("change",{newValue:this.getValue(),newYyyymmdd:this.getYyyymmdd()});return this;};
sap.ui.commons.DatePicker.prototype._checkChange=function(e){var i=this.getInputDomRef(),n=i&&i.value;if(this.getEditable()&&this.getEnabled()&&n!=this.getValue()&&n!=this.getYyyymmdd()){if(n.length==8&&parseInt(n,10)==n){this.setYyyymmdd(n);}else{this.setValue(n);}this.fireChange();}};
