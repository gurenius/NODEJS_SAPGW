/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.layout.MatrixLayoutRenderer");sap.ui.commons.layout.MatrixLayoutRenderer={};
sap.ui.commons.layout.MatrixLayoutRenderer.render=function(o,m){var a=o;var r=sap.ui.commons.layout.MatrixLayoutRenderer;if(!m.getVisible()){return;}var b=sap.ui.getCore().getConfiguration().getRTL();a.write("<TABLE role=\"presentation\"");a.writeControlData(m);a.write(" cellpadding=\"0\" cellspacing=\"0\"");a.addStyle("border-collapse","collapse");if(m.getWidth()&&m.getWidth()!=''){a.addStyle("width",m.getWidth());}if(m.getHeight()&&m.getHeight()!=''){a.addStyle("height",m.getHeight());var c=r.getValueUnit(m.getHeight());}if(m.getLayoutFixed()){a.addStyle("table-layout","fixed");if(!m.getWidth()||m.getWidth()==''){a.addStyle("width","100%");}}a.addClass("sapUiMlt");a.writeStyles();a.writeClasses();a.write('>');var d=m.getRows();var e=m.getColumns();if(e<1){for(var i=0;i<d.length;i++){var f=d[i];var g=f.getCells();if(e<g.length){e=g.length;}}}if(e>0){var w=m.getWidths();a.write("<colgroup>");for(var j=0;j<e;j++){a.write("<col");if(w&&w[j]&&w[j]!="auto"){a.addStyle('width',w[j]);a.writeStyles();}a.write("/>");}a.write("</colgroup>");}a.write('<TBODY style="width: 100%; height: 100%">');for(var i=0;i<d.length;i++){var f=d[i];var s=false;if(f.getHeight()){s=f.getHeight();}if(f.getHeight()&&f.getHeight()!=""&&c){var h=r.getValueUnit(f.getHeight());if(h.Unit=='%'&&c.Unit!='%'){s=(c.Value*h.Value/100)+c.Unit;}}a.write("<tr");a.writeElementData(f);a.writeClasses(f);if(jQuery.browser.msie&&jQuery.browser.version=="9.0"&&s&&s!=""){a.addStyle("height",s);a.writeStyles();}a.write(">");var g=f.getCells();var k=e;if(e<1){k=g.length;}var l=0;if(!f.RowSpanCells){f.RowSpanCells=0;}for(var j=0;j<k;j++){if(j>=(k-l-f.RowSpanCells)){break;}var n=g[j];a.write("<td");if(s&&s!=""&&(!n||n.getRowSpan()==1)){a.addStyle("height",s);}if(n){a.writeElementData(n);if(m.getLayoutFixed()&&n.getContent().length>0){a.addStyle("overflow","hidden");}var p=r.getHAlign(n.getHAlign(),b);if(p){a.writeAttribute("align",p);}var v=r.getVAlign(n.getVAlign());if(v&&v!="middle"){a.writeAttribute("valign",v);}if(n.getColSpan()!=1){a.writeAttribute("colspan",n.getColSpan());l=l+n.getColSpan()-1;}if(n.getRowSpan()!=1){a.writeAttribute("rowspan",n.getRowSpan());var q=0;var u="";for(var x=0;x<n.getRowSpan();x++){var t=d[i+x];if(!t){u=false;break;}if(!t.RowSpanCells){t.RowSpanCells=0;}if(x>0){t.RowSpanCells=t.RowSpanCells+n.getColSpan();}if(!t.getHeight()||t.getHeight()==""){u=false;}else{var y=r.getValueUnit(t.getHeight());if(y.Unit=='%'&&c.Unit!='%'){y.Value=(c.Value*h.Value/100);y.Unit=c.Unit;}if(u==""){u=y.Unit;}else{if(u!=y.Unit){u=false;}}q=q+y.Value;}}if(u!=false){var z=q+u;a.addStyle("height",z);}}a.addClass(r.getBackgroundClass(n.getBackgroundDesign()));a.addClass(r.getSeparationClass(n.getSeparation()));if(!m.getLayoutFixed()||!f.getHeight()){a.addClass(r.getPaddingClass(n.getPadding()));a.addClass("sapUiMltCell");}else{a.addStyle("white-space","nowrap");}a.writeClasses(n);}a.writeStyles();a.write(">");if(n){if(m.getLayoutFixed()&&f.getHeight()){a.write('<div');if(n.getRowSpan()!=1&&z&&z.search('%')==-1){a.addStyle("height",z);}else if(s.search('%')!=-1||(n.getRowSpan()!=1&&!z)){a.addStyle("height",'100%');}else{a.addStyle("height",s);}a.addStyle("display","inline-block");if(v){a.addStyle("vertical-align",v);}a.writeStyles();a.writeClasses(false);a.write("></div>");a.write('<div');a.addStyle("display","inline-block");if(v){a.addStyle("vertical-align",v);}if(n.getRowSpan()!=1&&z&&z.search('%')==-1){a.addStyle("max-height",z);}else if(s.search('%')!=-1||(n.getRowSpan()!=1&&!z)){a.addStyle("max-height",'100%');}else{a.addStyle("max-height",s);}var A;var B="0";var C="";var D="0";var E=n.getContent();for(var F=0,G=E.length;F<G;F++){if(E[F].getHeight&&E[F].getHeight()!=""){var H=r.getValueUnit(E[F].getHeight());if(C==""){C=H.Unit;}if(C!=H.Unit){C="%";B="100";break;}if(H.Unit=="%"){if(parseFloat(B)<parseFloat(H.Value)){B=H.Value;if(B!="100"){D=10000/parseFloat(B);}}}}}if(B!="0"){a.addStyle("height",B+C);}a.addStyle("white-space","normal");a.addStyle("width","100%");a.writeStyles();a.writeClasses(false);a.write("><div");a.addStyle("overflow","hidden");a.addStyle("text-overflow","inherit");if(B!="0"){if(D!="0"){a.addStyle("height",D+"%");}else{a.addStyle("height","100%");}}a.addClass("sapUiMltCell");a.addClass(r.getPaddingClass(n.getPadding()));a.writeStyles();a.writeClasses(false);a.write(">");}var E=n.getContent();for(var F=0,G=E.length;F<G;F++){o.renderControl(E[F]);}if(m.getLayoutFixed()&&f.getHeight()){a.write("</div></div>");}}a.write("</td>");}a.write("</tr>");f.RowSpanCells=undefined;}a.write("</TBODY></TABLE>");};
sap.ui.commons.layout.MatrixLayoutRenderer.getHAlign=function(h,r){switch(h){case sap.ui.commons.layout.HAlign.Begin:return null;case sap.ui.commons.layout.HAlign.Center:return"center";case sap.ui.commons.layout.HAlign.End:return r?"left":"right";case sap.ui.commons.layout.HAlign.Left:return r?"left":null;case sap.ui.commons.layout.HAlign.Right:return r?null:"right";}return null;};
sap.ui.commons.layout.MatrixLayoutRenderer.getVAlign=function(v){switch(v){case sap.ui.commons.layout.VAlign.Bottom:return"bottom";case sap.ui.commons.layout.VAlign.Middle:return"middle";case sap.ui.commons.layout.VAlign.Top:return"top";}return null;};
sap.ui.commons.layout.MatrixLayoutRenderer.getBackgroundClass=function(b){switch(b){case sap.ui.commons.layout.BackgroundDesign.Border:return"sapUiMltBgBorder";case sap.ui.commons.layout.BackgroundDesign.Fill1:return"sapUiMltBgFill1";case sap.ui.commons.layout.BackgroundDesign.Fill2:return"sapUiMltBgFill2";case sap.ui.commons.layout.BackgroundDesign.Fill3:return"sapUiMltBgFill3";case sap.ui.commons.layout.BackgroundDesign.Header:return"sapUiMltBgHeader";case sap.ui.commons.layout.BackgroundDesign.Plain:return"sapUiMltBgPlain";case sap.ui.commons.layout.BackgroundDesign.Transparent:return null;}return null;};
sap.ui.commons.layout.MatrixLayoutRenderer.getPaddingClass=function(p){switch(p){case sap.ui.commons.layout.Padding.None:return"sapUiMltPadNone";case sap.ui.commons.layout.Padding.Begin:return"sapUiMltPadLeft";case sap.ui.commons.layout.Padding.End:return"sapUiMltPadRight";case sap.ui.commons.layout.Padding.Both:return"sapUiMltPadBoth";case sap.ui.commons.layout.Padding.Neither:return"sapUiMltPadNeither";}return null;};
sap.ui.commons.layout.MatrixLayoutRenderer.getSeparationClass=function(s){switch(s){case sap.ui.commons.layout.Separation.None:return null;case sap.ui.commons.layout.Separation.Small:return"sapUiMltSepS";case sap.ui.commons.layout.Separation.SmallWithLine:return"sapUiMltSepSWL";case sap.ui.commons.layout.Separation.Medium:return"sapUiMltSepM";case sap.ui.commons.layout.Separation.MediumWithLine:return"sapUiMltSepMWL";case sap.ui.commons.layout.Separation.Large:return"sapUiMltSepL";case sap.ui.commons.layout.Separation.LargeWithLine:return"sapUiMltSepLWL";}return null;};
sap.ui.commons.layout.MatrixLayoutRenderer.getValueUnit=function(s){var v=0;var u="";var p=s.search('px');if(p>-1){u="px";v=parseInt(s.slice(0,p),10);return({Value:v,Unit:u})}p=s.search('pt');if(p>-1){u="pt";v=parseFloat(s.slice(0,p));return({Value:v,Unit:u})}p=s.search('in');if(p>-1){u="in";v=parseFloat(s.slice(0,p));return({Value:v,Unit:u})}p=s.search('mm');if(p>-1){u="mm";v=parseFloat(s.slice(0,p));return({Value:v,Unit:u})}p=s.search('cm');if(p>-1){u="cm";v=parseFloat(s.slice(0,p));return({Value:v,Unit:u})}p=s.search('em');if(p>-1){u="em";v=parseFloat(s.slice(0,p));return({Value:v,Unit:u})}p=s.search('ex');if(p>-1){u="ex";v=parseFloat(s.slice(0,p));return({Value:v,Unit:u})}p=s.search('%');if(p>-1){u="%";v=parseFloat(s.slice(0,p));return({Value:v,Unit:u})}};
