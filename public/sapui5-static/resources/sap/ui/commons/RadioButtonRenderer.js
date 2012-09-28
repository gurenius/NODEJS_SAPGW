/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RadioButtonRenderer");jQuery.sap.require("sap.ui.core.ValueStateSupport");sap.ui.commons.RadioButtonRenderer={};
sap.ui.commons.RadioButtonRenderer.render=function(r,o){var a=r;if(!o.getVisible()){return;}a.addClass("sapUiRb");a.write("<span");a.writeControlData(o);a.writeAttribute("role","radio");a.writeAccessibilityState(o,{checked:o.getSelected()===true,invalid:o.getValueState()==sap.ui.core.ValueState.Error,disabled:!o.getEditable()});var e=o.getEnabled()!=null&&o.getEnabled();var b=o.getEditable()!=null&&o.getEditable();var i=false;var c=false;if(o.getValueState()!=null){i=sap.ui.core.ValueState.Error==o.getValueState();c=sap.ui.core.ValueState.Warning==o.getValueState();}if(o.getSelected()){a.addClass("sapUiRbSel");}var m=0;var d=false;if(!e){m=-1;d=true;a.addClass("sapUiRbDis");}if(!b){m=-1;d=true;a.addClass("sapUiRbRo");}if(i){a.addClass("sapUiRbErr");}else if(c){a.addClass("sapUiRbWarn");}if(e&&b&&!i&&!c){a.addClass("sapUiRbStd");}if(e&&b){a.addClass("sapUiRbInteractive");}a.writeClasses();if(o.getWidth()&&o.getWidth()!=''){a.writeAttribute("style","width:"+o.getWidth()+";");}a.writeAttribute("tabIndex",m);a.write(">");a.write("<input type='radio' tabindex='-1' id='");a.write(o.getId());a.write("-RB' name=\"");a.write(o.getGroupName());a.write("\" ");if(o.getSelected()){a.write(" checked='checked'");}if(!e){a.write(" disabled='disabled'");}var t=o.getTooltip_AsString();var f=sap.ui.core.ValueStateSupport.enrichTooltip(o,t?t:o.getText());if(f){a.writeAttributeEscaped("title",f);}if(d){a.write(" readonly='readonly'");a.write(" disabled='disabled'");}if(o.getKey()){a.writeAttribute("value",o.getKey());}a.write(" />");a.write("<label");if(f){a.writeAttributeEscaped("title",f);}a.writeAttribute("for",o.getId()+"-RB");if(!o.getText()){a.write(" class=\"sapUiRbNoText\"");}a.write(">");if(o.getText()){this.renderText(a,o.getText(),o.getTextDirection());}a.write("</label>");a.write("</span>");};
sap.ui.commons.RadioButtonRenderer.renderText=function(r,t,e){var a=r;if(!e||e==sap.ui.core.TextDirection.Inherit){a.writeEscaped(t);}else{a.write("<span dir=\""+e+"\">");a.writeEscaped(t);a.write("</span>");}};
sap.ui.commons.RadioButtonRenderer.setSelected=function(r,s){jQuery.sap.byId(r.getId()).toggleClass('sapUiRbSel',s).attr('aria-checked',s);if(s){jQuery.sap.domById(r.getId()+'-RB').checked=true;jQuery.sap.domById(r.getId()+'-RB').setAttribute('checked','checked');}else{jQuery.sap.domById(r.getId()+'-RB').checked=false;jQuery.sap.domById(r.getId()+'-RB').removeAttribute('checked');}};