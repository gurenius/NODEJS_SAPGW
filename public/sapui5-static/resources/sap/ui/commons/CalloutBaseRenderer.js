/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.CalloutBaseRenderer");sap.ui.commons.CalloutBaseRenderer={};
sap.ui.commons.CalloutBaseRenderer.render=function(r,c){var a=r;var b=sap.ui.getCore().getConfiguration().getAccessibility();var i=c.getId();a.write("<div");a.writeControlData(c);a.addClass("sapUiCltBase");if(this.addRootClasses){this.addRootClasses(a,c);}a.writeClasses();if(b){a.writeAttribute("role","dialog");var s=c.oRb.getText('CALLOUT_ARIA_NAME');if(s){a.writeAttribute("aria-label",s);}}if(c.getTooltip_AsString()){a.writeAttributeEscaped("title",c.getTooltip_AsString());}a.write(">");a.write("<span id=\""+i+"-fhfe\" tabIndex=\"0\"></span>");a.write("<div");a.writeAttribute("id",i+"-cont");a.addClass("sapUiCltBaseCont");if(this.addContentClasses){this.addContentClasses(a,c);}a.writeClasses();a.writeAttribute("tabindex","-1");a.write(">");if(this.renderContent){this.renderContent(a,c);}a.write("</div>");a.write("<span tabIndex=\"-1\"");a.writeAttribute("id",i+"-arrow");if(b){a.writeAttribute("role","presentation");}a.addClass("sapUiCltBaseArr");if(this.addArrowClasses){this.addArrowClasses(a,c);}a.writeClasses();a.write(">.</span>");a.write("<span id=\""+i+"-fhee\" tabIndex=\"0\"></span>");a.write("</div>");};
