/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RatingIndicatorRenderer");
sap.ui.commons.RatingIndicatorRenderer=function(){};
sap.ui.commons.RatingIndicatorRenderer.render=function(r,o){var a=r;if(!o.getVisible()){return;}var n=o.getMaxValue();a.write("<div");a.writeControlData(o);a.addClass("sapUiRating");if(o.getEditable()){a.addClass("sapUiRatingEdit");}a.writeClasses();a.writeAttribute("tabindex",o.getEditable()?"0":"-1");if(o.getTooltip()&&o.getTooltip_AsString()){a.writeAttribute("title",o.getTooltip_AsString());}else if(!o.getEditable()){a.writeAttribute("title",o.getValue());}a.writeAttribute("role","slider");a.writeAttribute("aria-orientation","horizontal");a.writeAttribute("aria-valuemin",1);a.writeAttribute("aria-valuemax",n);a.writeAttribute("aria-disabled",!o.getEditable());a.writeAttribute("aria-live","assertive");a.write(">");for(var i=0;i<n;i++){sap.ui.commons.RatingIndicatorRenderer.renderItem(a,o,i,o.getValue());}a.write("</div>");};
sap.ui.commons.RatingIndicatorRenderer.renderItem=function(r,o,i,v){var a=i+1;r.write("<div");r.writeAttribute("id",o.getId()+"-itm-"+a);r.writeAttribute("itemvalue",a);r.writeAttribute("class","sapUiRatingItm");r.writeAttribute("style","line-height:0px;");if(!o.getTooltip()&&o.getEditable()){r.writeAttribute("title",o._getText("RATING_TOOLTIP",[a,o.getMaxValue()]));}r.write(">");r.write("<img");r.writeAttribute("class","sapUiRatingItmImg");var s=sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol("selected",o);r.writeAttributeEscaped("src",s);r.write("/>");r.write("<div");r.writeAttribute("class","sapUiRatingItmOvrflw");var b=o.getVisualMode();if(b=="Full"){v=Math.round(v);}var c;if(v>=a){c="width:0%;";}else if(v<i){c="width:100%;";}else{var d=v-i;if(b=="Half"){var w=50;if(d<0.25){w=100;}if(d>=0.75){w=0;}c="width:"+w+"%;";}else{c="width:"+(100-Math.round(d*100))+"%;";}}r.writeAttribute("style",c);r.write(">");r.write("<img");r.writeAttribute("class","sapUiRatingItmOvrflwImg");s=sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol("unselected",o);r.writeAttributeEscaped("src",s);r.write("/>");r.write("</div>");r.write("</div>");};
sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol=function(c,r,a){var s=jQuery.sap.byId(r.getId()+"-itm-"+c);s.addClass("sapUiRatingItmHov");var o=s.children("img");var i=sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol(a?"unselected":"hover",r);o.attr("src",i);};
sap.ui.commons.RatingIndicatorRenderer.unhoverRatingSymbol=function(c,r){var s=jQuery.sap.byId(r.getId()+"-itm-"+c);s.removeClass("sapUiRatingItmHov");var o=s.children("img");var i=sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol("selected",r);o.attr("src",i);};
sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol=function(t,r){var i;if(t=="selected"){i=r.getIconSelected();}else if(t=="unselected"){i=r.getIconUnselected();}else{i=r.getIconHovered();}if(!i){var p=jQuery.sap.getModulePath("sap.ui.commons",'/')+"themes/"+sap.ui.getCore().getConfiguration().getTheme()+"/img/rating/";i=p+"star_"+t+".png";}return i;};