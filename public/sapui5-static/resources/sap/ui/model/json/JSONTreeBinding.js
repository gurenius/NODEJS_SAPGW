/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.json.JSONTreeBinding");jQuery.sap.require("sap.ui.model.TreeBinding");
sap.ui.model.json.JSONTreeBinding=function(m,p,c){sap.ui.model.TreeBinding.apply(this,arguments);if(!this.oContext){this.oContext="";}this.filterInfo={};this.filterInfo.aFilteredContexts=[];this.filterInfo.oParentContext={};};
sap.ui.model.json.JSONTreeBinding.prototype=jQuery.sap.newObject(sap.ui.model.TreeBinding.prototype);sap.ui.base.Object.defineClass("sap.ui.model.json.JSONTreeBinding",{baseType:"sap.ui.model.TreeBinding",publicMethods:[]});
sap.ui.model.json.JSONTreeBinding.prototype.getRootContexts=function(){return this.getNodeContexts(this.sPath);};
sap.ui.model.json.JSONTreeBinding.prototype.getNodeContexts=function(c){if(!jQuery.sap.endsWith(c,"/")){c=c+"/";}if(!jQuery.sap.startsWith(c,"/")){c="/"+c;}var a=[],t=this,n=this.oModel._getObject(c),o;jQuery.each(n,function(s,o){if(typeof o=="object"){var b=c+s;if(t.aFilters&&!t.bIsFiltering){if(jQuery.inArray(b,t.filterInfo.aFilteredContexts)!=-1){a.push(b);}}else{a.push(b);}}});return a;};
sap.ui.model.json.JSONTreeBinding.prototype.filter=function(f){this.filterInfo.aFilteredContexts=[];this.filterInfo.oParentContext={};if(!f||!jQuery.isArray(f)||f.length==0){this.aFilters=null;}else{this.aFilters=f;this.filterRecursive(this.sPath);}this._fireChange();this._fireFilter({filters:f});};
sap.ui.model.json.JSONTreeBinding.prototype.filterRecursive=function(p){this.bIsFiltering=true;var c=this.getNodeContexts(p);this.bIsFiltering=false;if(c.length>0){var t=this;jQuery.each(c,function(i,o){t.filterRecursive(o);});this.applyFilter(p);}};
sap.ui.model.json.JSONTreeBinding.prototype.applyFilter=function(p){if(!this.aFilters){return;}var t=this,f={},a,b=[],g=false,c=true;this.bIsFiltering=true;var u=this.getNodeContexts(p);this.bIsFiltering=false;jQuery.each(u,function(i,d){c=true;jQuery.each(t.aFilters,function(j,o){a=f[o.sPath];if(!a){a=f[o.sPath]=[];}a.push(o);});jQuery.each(f,function(s,a){var v=t.oModel._getObject(s,d);if(typeof v=="string"){v=v.toUpperCase();}g=false;jQuery.each(a,function(j,o){var e=t.getFilterFunction(o);if(v&&e(v)){g=true;return false;}});if(!g){c=false;return false;}});if(c){b.push(d);}});if(b.length>0){jQuery.merge(this.filterInfo.aFilteredContexts,b);this.filterInfo.aFilteredContexts.push(p);this.filterInfo.oParentContext=p;}if(jQuery.inArray(this.filterInfo.oParentContext,u)!=-1){this.filterInfo.aFilteredContexts.push(p);this.filterInfo.oParentContext=p;}};
sap.ui.model.json.JSONTreeBinding.prototype.getFilterFunction=function(f){if(f.fnTest){return f.fnTest;}var v=f.oValue1,o=f.oValue2;if(typeof v=="string"){v=v.toUpperCase();}if(typeof o=="string"){o=o.toUpperCase();}switch(f.sOperator){case"EQ":f.fnTest=function(a){return a==v;};break;case"NE":f.fnTest=function(a){return a!=v;};break;case"LT":f.fnTest=function(a){return a<v;};break;case"LE":f.fnTest=function(a){return a<=v;};break;case"GT":f.fnTest=function(a){return a>v;};break;case"GE":f.fnTest=function(a){return a>=v;};break;case"BT":f.fnTest=function(a){return(a>v)&&(a<o);};break;case"Contains":f.fnTest=function(a){return a.indexOf(v)!=-1;};break;case"StartsWith":f.fnTest=function(a){return a.indexOf(v)==0;};break;case"EndsWith":f.fnTest=function(a){return a.indexOf(v)==a.length-new String(f.oValue1).length;};break;default:f.fnTest=function(a){return true;};}return f.fnTest;};
sap.ui.model.json.JSONTreeBinding.prototype.checkUpdate=function(){this._fireChange();};