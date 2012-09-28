/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Slider");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Slider",{metadata:{library:"sap.ui.commons",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},"min":{type:"float",group:"Appearance",defaultValue:0},"max":{type:"float",group:"Appearance",defaultValue:100},"value":{type:"float",group:"Appearance",defaultValue:50},"smallStepWidth":{type:"float",group:"Appearance",defaultValue:null},"totalUnits":{type:"int",group:"Appearance",defaultValue:null},"stepLabels":{type:"boolean",group:"Appearance",defaultValue:false},"visible":{type:"boolean",group:"",defaultValue:true},"editable":{type:"boolean",group:"Behavior",defaultValue:true},"enabled":{type:"boolean",group:"Behavior",defaultValue:true}},events:{"change":{},"liveChange":{}}}});sap.ui.commons.Slider.M_EVENTS={'change':'change','liveChange':'liveChange'};jQuery.sap.require("sap.ui.core.ResizeHandler");jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.apply(sap.ui.commons.Slider.prototype,[true]);
sap.ui.commons.Slider.prototype.onBeforeRendering=function(){if(this.sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);this.sResizeListenerId=null;}};
sap.ui.commons.Slider.prototype.onAfterRendering=function(){if(this.getMin()>=this.getMax()){jQuery.sap.log.warning('Property wrong: Min:'+this.getMin()+' > Max:'+this.getMax());}this.oGrip=jQuery.sap.domById(this.getId()+'-grip');this.oBar=jQuery.sap.domById(this.getId()+'-bar');this.oHiLi=jQuery.sap.domById(this.getId()+'-hili');this.bRtl=sap.ui.getCore().getConfiguration().getRTL();this.bAcc=sap.ui.getCore().getConfiguration().getAccessibility();var n=this.getValue();if(this.bRtl){n=this.getMax()-n+this.getMin();}this.iDecimalFactor=this.calcDecimalFactor(this.getSmallStepWidth());this.iShiftGrip=Math.round(this.oGrip.offsetWidth/2);var a=(n-this.getMin())/(this.getMax()-this.getMin())*this.oBar.clientWidth;this.changeGrip(n,a);if(this.getTotalUnits()>0){var t=null;var o=null;this.fTickDist=this.oBar.clientWidth/this.getTotalUnits();for(var i=0;i<=this.getTotalUnits();i++){t=jQuery.sap.domById(this.getId()+'-tick'+i);t.style.left=Math.round((this.fTickDist*i))-Math.round((t.offsetWidth/2))+'px';if(this.getStepLabels()&&i>0&&i<this.getTotalUnits()){o=jQuery.sap.domById(this.getId()+'-text'+i);if(this.getSmallStepWidth()>0&&this.iDecimalFactor>0){jQuery(o).text(Math.round(parseFloat(jQuery(o).text())*this.iDecimalFactor)/this.iDecimalFactor);}if(!this.bRtl){o.style.left=Math.round((this.fTickDist*i))-Math.round((o.offsetWidth/2))+'px';}else{o.style.left=Math.round((this.fTickDist*(this.getTotalUnits()-i)))-Math.round((o.offsetWidth/2))+'px';}}}}this.allowTextSelection(false);this.oDomRef=this.getDomRef();this.sResizeListenerId=sap.ui.core.ResizeHandler.register(this.oDomRef,jQuery.proxy(this.onresize,this));};
sap.ui.commons.Slider.prototype.onclick=function(e){if(this.getEditable()&&this.getEnabled()){var m=e.target.getAttribute('ID');var n=this.getValue();var i=this.oGrip.offsetLeft+this.iShiftGrip;if(this.bRtl){n=this.getMax()-n+this.getMin();}switch(m){case(this.oBar.id):n=this.getMin()+(((this.getMax()-this.getMin())/this.oBar.clientWidth)*e.getOffsetX());i=e.getOffsetX();break;case(this.getId()+'-left'):var o=jQuery(this.oBar).offset();var b=jQuery(e.target).offset();i=e.getOffsetX()-(o.left-b.left);if(i<0){i=0;}n=this.getMin()+(((this.getMax()-this.getMin())/this.oBar.clientWidth)*i);break;case(this.getId()+'-right'):if(e.getOffsetX()<this.oBar.clientWidth){n=this.getMin();i=0;}else{n=this.getMax();i=this.oBar.clientWidth;}break;case(this.oGrip.id):return;break;default:var t=m.search('-tick');if(t>=0){var a=parseInt(m.slice(this.getId().length+5),10);i=this.fTickDist*a;n=this.getMin()+(((this.getMax()-this.getMin())/this.getTotalUnits())*a);break;}var o=jQuery(this.oBar).offset();var b=jQuery(e.target).offset();i=e.getOffsetX()-(o.left-b.left);if(i<=0){i=0;n=this.getMin();}else{if(i>=this.oBar.clientWidth){i=this.oBar.clientWidth;n=this.getMax();}else{n=this.getMin()+(((this.getMax()-this.getMin())/this.oBar.clientWidth)*i);}}break;}this.changeGrip(n,i);this.handleFireChange();}this.oGrip.focus();};
sap.ui.commons.Slider.prototype.onmousedown=function(e){if(this.getEditable()&&this.getEnabled()){var m=e.target.getAttribute('ID');if(m==this.oGrip.id){this.bGripMousedown=true;this.iStartDragX=e.pageX;this.iStartDragY=e.pageY;this.iStartLeft=this.oGrip.offsetLeft+this.iShiftGrip;var t=this;this.handleMoveCall=function(a){t.handleMove(a);};jQuery(window.document).bind('mousemove',this.handleMoveCall);jQuery.sap.bindAnyEvent(jQuery.proxy(this.onAnyEvent,this));}}};
sap.ui.commons.Slider.prototype.onmouseup=function(e){if(this.getEditable()&&this.getEnabled()){this.bGripMousedown=false;if(this.handleMoveCall){jQuery(window.document).unbind('mousemove',this.handleMoveCall);jQuery.sap.unbindAnyEvent(this.onAnyEvent);if(this.iStartLeft!=(this.oGrip.offsetLeft+this.iShiftGrip)){this.fireChange({value:this.getValue()});}this.handleMoveCall=null;this.iStartDragX=null;this.iStartDragY=null;this.iStartLeft=null;}}};
sap.ui.commons.Slider.prototype.handleMove=function(e){if(this.getEditable()&&this.getEnabled()&&this.bGripMousedown){e=e||window.event;var n=this.iStartLeft+e.pageX-this.iStartDragX;if(n<=0){n=0;var f=this.getMin();}else{if(n>=this.oBar.clientWidth){n=this.oBar.clientWidth;var f=this.getMax();}else{var f=this.getMin()+(((this.getMax()-this.getMin())/this.oBar.clientWidth)*n);}}var o=this.getValue();this.changeGrip(f,n);f=this.getValue();if(o!=f){this.fireLiveChange({value:f});}}e.cancelBubble=true;return false;};
sap.ui.commons.Slider.prototype.onAnyEvent=function(e){jQuery.sap.log.info('onAnyEvent fired: "'+e.type+'"');if((!this.getEditable())||(!this.getEnabled())||!this.bGripMousedown){return;}if(e.type=='mouseover'||e.type=='mouseout'||e.type=='mousemove'||e.type=='focusout'){return;}var s=e.target;if(!jQuery.sap.containsOrEquals(this.oDomRef,s)||s.tagName=="BODY"){this.onmouseup(e);}};
sap.ui.commons.Slider.prototype.onsapright=function(e){if(this.getEditable()&&this.getEnabled()){var n=this.getValue();var i=this.oGrip.offsetLeft+this.iShiftGrip;if(this.bRtl){n=this.getMax()-n+this.getMin();}if(this.getSmallStepWidth()>0){var s=this.oBar.clientWidth/(this.getMax()-this.getMin())*this.getSmallStepWidth();if(s>1){n=n+this.getSmallStepWidth();i=i+s;}else{n=n+(1/s*this.getSmallStepWidth());i=i+1;}}else{n=n+((this.getMax()-this.getMin())/this.oBar.clientWidth);i=i+1;}if(n>=this.getMax()||i>=this.oBar.clientWidth){n=this.getMax();i=this.oBar.clientWidth;}this.changeGrip(n,i);this.handleFireChange();}e.preventDefault();e.stopPropagation();};
sap.ui.commons.Slider.prototype.onsapleft=function(e){if(this.getEditable()&&this.getEnabled()){var n=this.getValue();var i=this.oGrip.offsetLeft+this.iShiftGrip;if(this.bRtl){n=this.getMax()-n+this.getMin();}if(this.getSmallStepWidth()>0){var s=this.oBar.clientWidth/(this.getMax()-this.getMin())*this.getSmallStepWidth();if(s>1){n=n-this.getSmallStepWidth();i=i-s;}else{n=n-(1/s*this.getSmallStepWidth());i=i-1;}}else{n=n-((this.getMax()-this.getMin())/this.oBar.clientWidth);i=i-1;}if(n<=this.getMin()||i<=0){n=this.getMin();i=0;}this.changeGrip(n,i);this.handleFireChange();}e.preventDefault();e.stopPropagation();};
sap.ui.commons.Slider.prototype.onsapup=function(e){if(!this.bRtl){this.onsapleft(e);}else{this.onsapright(e);}};
sap.ui.commons.Slider.prototype.onsapdown=function(e){if(!this.bRtl){this.onsapright(e);}else{this.onsapleft(e);}};
sap.ui.commons.Slider.prototype.onsapexpand=function(e){if(!this.bRtl){this.onsapright(e);}else{this.onsapleft(e);}};
sap.ui.commons.Slider.prototype.onsapcollapse=function(e){if(!this.bRtl){this.onsapleft(e);}else{this.onsapright(e);}};
sap.ui.commons.Slider.prototype.onsaphome=function(e){if(this.getEditable()&&this.getEnabled()){if(!this.bRtl){var n=this.getMin();var i=0;}else{var n=this.getMax();var i=this.oBar.clientWidth;}this.changeGrip(n,i);this.handleFireChange();}e.preventDefault();e.stopPropagation();};
sap.ui.commons.Slider.prototype.onsapend=function(e){if(this.getEditable()&&this.getEnabled()){if(!this.bRtl){var n=this.getMax();var i=this.oBar.clientWidth;}else{var n=this.getMin();var i=0;}this.changeGrip(n,i);this.handleFireChange();}e.preventDefault();e.stopPropagation();};
sap.ui.commons.Slider.prototype.onsaprightmodifiers=function(e){if(this.getEditable()&&this.getEnabled()){if(!this.fPageSize){if(this.getTotalUnits()>0){this.fPageSize=(this.getMax()-this.getMin())/this.getTotalUnits();}else{this.fPageSize=(this.getMax()-this.getMin())/10;}}if(!this.bRtl){var n=this.getValue()+this.fPageSize;}else{var n=this.getMax()-this.getValue()+this.getMin()+this.fPageSize;}var i=(n-this.getMin())/(this.getMax()-this.getMin())*this.oBar.clientWidth;if(n>=this.getMax()||i>=this.oBar.clientWidth){n=this.getMax();i=this.oBar.clientWidth;}this.changeGrip(n,i);this.handleFireChange();}e.preventDefault();e.stopPropagation();};
sap.ui.commons.Slider.prototype.onsapleftmodifiers=function(e){if(this.getEditable()&&this.getEnabled()){if(!this.fPageSize){if(this.getTotalUnits()>0){this.fPageSize=(this.getMax()-this.getMin())/this.getTotalUnits();}else{this.fPageSize=(this.getMax()-this.getMin())/10;}}if(!this.bRtl){var n=this.getValue()-this.fPageSize;}else{var n=this.getMax()-this.getValue()+this.getMin()-this.fPageSize;}var i=(n-this.getMin())/(this.getMax()-this.getMin())*this.oBar.clientWidth;if(n<=this.getMin()||i<=0){n=this.getMin();i=0;}this.changeGrip(n,i);this.handleFireChange();}e.preventDefault();e.stopPropagation();};
sap.ui.commons.Slider.prototype.onsapdownmodifiers=function(e){if(!this.bRtl){this.onsaprightmodifiers(e);}else{this.onsapleftmodifiers(e);}};
sap.ui.commons.Slider.prototype.onsapupmodifiers=function(e){if(!this.bRtl){this.onsapleftmodifiers(e);}else{this.onsaprightmodifiers(e);}};
sap.ui.commons.Slider.prototype.onresize=function(e){var n=this.getValue();if(this.bRtl){n=this.getMax()-n+this.getMin();}var a=(n-this.getMin())/(this.getMax()-this.getMin())*this.oBar.clientWidth;this.changeGrip(n,a);if(this.getTotalUnits()>0&&this.getDomRef()){var t=null;var o=null;this.fTickDist=this.oBar.clientWidth/this.getTotalUnits();for(var i=0;i<=this.getTotalUnits();i++){t=jQuery.sap.domById(this.getId()+'-tick'+i);t.style.left=Math.round((this.fTickDist*i))-Math.round((t.offsetWidth/2))+'px';if(this.getStepLabels()&&i>0&&i<this.getTotalUnits()){o=jQuery.sap.domById(this.getId()+'-text'+i);if(this.getSmallStepWidth()>0&&this.iDecimalFactor>0){jQuery(o).text(Math.round(parseFloat(jQuery(o).text())*this.iDecimalFactor)/this.iDecimalFactor);}if(!this.bRtl){o.style.left=Math.round((this.fTickDist*i))-Math.round((o.offsetWidth/2))+'px';}else{o.style.left=Math.round((this.fTickDist*(this.getTotalUnits()-i)))-Math.round((o.offsetWidth/2))+'px';}}}}};
sap.ui.commons.Slider.prototype.onThemeChanged=function(e){this.iShiftGrip=Math.round(this.oGrip.offsetWidth/2);this.onresize();};
sap.ui.commons.Slider.prototype.changeGrip=function(n,i){if(i!=(this.oGrip.offsetLeft+this.iShiftGrip)){if(this.getSmallStepWidth()>0){var s=parseInt((n-this.getMin())/this.getSmallStepWidth(),10);var l=(s*this.getSmallStepWidth())+this.getMin();var r=((s+1)*this.getSmallStepWidth())+this.getMin();if(r>this.getMax()){r=this.getMax();}var f=this.oBar.clientWidth/(this.getMax()-this.getMin())*this.getSmallStepWidth();if((n-l)<(r-n)){n=l;i=s*f;}else{n=r;i=(s+1)*f;if(i>this.oBar.clientWidth){i=this.oBar.clientWidth;}}n=Math.round(n*this.iDecimalFactor)/this.iDecimalFactor;}if(this.bRtl){n=this.getMax()-n+this.getMin();}this.setProperty('value',n,true);this.oGrip.title=n;this.oGrip.style.left=Math.round(i-this.iShiftGrip)+'px';if(this.bRtl){this.oHiLi.style.width=this.oBar.clientWidth-Math.round(i)+'px';}else{this.oHiLi.style.width=Math.round(i)+'px';}if(this.bAcc){this.setAriaState();}}};
sap.ui.commons.Slider.prototype.calcDecimalFactor=function(V){var f=1;if(!(V>0)){return f;}var m=String(V);if(m.indexOf('.')>=0){var a=m.length-m.indexOf('.')-1;}else{if(m.indexOf('e-')>=0){var a=m.slice(m.indexOf('e-')+2);}else{return f;}}for(var i=1;i<=a;i++){f=f*10;}return f;};
sap.ui.commons.Slider.prototype.setEditable=function(e){this.setProperty('editable',e,true);if(this.oDomRef&&this.getEnabled()){if(e){jQuery(this.oDomRef).removeClass('sapUiSliRo').addClass('sapUiSliStd');if(this.bAcc){jQuery(this.oGrip).attr('aria-disabled',false);}}else{jQuery(this.oDomRef).removeClass('sapUiSliStd').addClass('sapUiSliRo');if(this.bAcc){jQuery(this.oGrip).attr('aria-disabled',true);}}}return this;};
sap.ui.commons.Slider.prototype.setEnabled=function(e){this.setProperty('enabled',e,true);if(this.oDomRef){jQuery(this.oDomRef).toggleClass('sapUiSliDsbl',!e);if(e){jQuery(this.oGrip).attr('tabindex','0');if(this.getEditable()){jQuery(this.oDomRef).addClass('sapUiSliStd');if(this.bAcc){jQuery(this.oGrip).attr('aria-disabled',false);}}else{jQuery(this.oDomRef).addClass('sapUiSliRo');if(this.bAcc){jQuery(this.oGrip).attr('aria-disabled',true);}}}else{jQuery(this.oGrip).attr('tabindex','-1').attr('aria-disabled',true);if(this.getEditable()){jQuery(this.oDomRef).removeClass('sapUiSliStd');}else{jQuery(this.oDomRef).removeClass('sapUiSliRo');}}}return this;};
sap.ui.commons.Slider.prototype.setTotalUnits=function(t){this.setProperty('totalUnits',t,false);this.fPageSize=false;return this;};
sap.ui.commons.Slider.prototype.setValue=function(v){this.setProperty('value',v,true);if(isNaN(v)){return this;}if(!this.oBar){return this;}var n=parseFloat(v);if(this.bRtl){n=this.getMax()-n+this.getMin();}if(n>=this.getMax()){n=this.getMax();var i=this.oBar.clientWidth;}else{if(n<=this.getMin()){n=this.getMin();var i=0;}else{var i=(n-this.getMin())/(this.getMax()-this.getMin())*this.oBar.clientWidth;}}this.changeGrip(n,i);return this;};
sap.ui.commons.Slider.prototype.handleFireChange=function(){this.fireChange({value:this.getValue()});this.fireLiveChange({value:this.getValue()});};
sap.ui.commons.Slider.prototype.setAriaState=function(){var v=this.getValue();this.oGrip.setAttribute('aria-valuenow',v);this.oGrip.setAttribute('aria-valuetext','Value '+v);};
sap.ui.commons.Slider.prototype.getFocusDomRef=function(){return this.oGrip;};
sap.ui.commons.Slider.prototype.getIdForLabel=function(){return this.getId()+'-grip';};
