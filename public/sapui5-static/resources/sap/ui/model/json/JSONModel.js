/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.json.JSONModel");jQuery.sap.require("sap.ui.model.Model");jQuery.sap.require("sap.ui.model.json.JSONPropertyBinding");jQuery.sap.require("sap.ui.model.json.JSONListBinding");jQuery.sap.require("sap.ui.model.json.JSONTreeBinding");
sap.ui.model.json.JSONModel=function(d){sap.ui.model.Model.apply(this,arguments);if(typeof d=="string"){this.loadData(d);}else if(d&&typeof d=="object"){this.setData(d);}};
sap.ui.model.json.JSONModel.prototype=jQuery.sap.newObject(sap.ui.model.Model.prototype);sap.ui.base.Object.defineClass("sap.ui.model.json.JSONModel",{baseType:"sap.ui.model.Model",publicMethods:["loadData","setData","getData","setJSON","getJSON"]});
sap.ui.model.json.JSONModel.prototype.setData=function(d,m){if(m){this.oData=jQuery.extend(true,{},this.oData,d);}else{this.oData=d;}this.checkUpdate();};
sap.ui.model.json.JSONModel.prototype.getData=function(){return this.oData;};
sap.ui.model.json.JSONModel.prototype.setJSON=function(j,m){var o;try{o=jQuery.parseJSON(j);this.setData(o,m);}catch(e){jQuery.sap.log.fatal("The following problem occurred: JSON parse Error: "+e);this.fireParseError({url:"",errorCode:-1,reason:"",srcText:e,line:-1,linepos:-1,filepos:-1});}};
sap.ui.model.json.JSONModel.prototype.getJSON=function(){return JSON.stringify(this.oData);};
sap.ui.model.json.JSONModel.prototype.loadData=function(u,p,a,t,m){var b=this;if(a!==false){a=true;}if(!t){t="GET";}this.fireRequestSent({url:u,type:t,async:a,info:"cache=false;bMerge="+m});jQuery.ajax({url:u,async:a,dataType:'json',cache:false,data:p,type:t,success:function(d){if(!d){jQuery.sap.log.fatal("The following problem occurred: No data was retrieved by service: "+u);}b.setData(d,m);b.fireRequestCompleted({url:u,type:t,async:a,info:"cache=false;bMerge="+m});},error:function(X,c,e){jQuery.sap.log.fatal("The following problem occurred: "+c,X.responseText+","+X.status+","+X.statusText);b.fireRequestCompleted({url:u,type:t,async:a,info:"cache=false;bMerge="+m});b.fireRequestFailed({message:c,statusCode:X.status,statusText:X.statusText,responseText:X.responseText});}});};
sap.ui.model.json.JSONModel.prototype.checkUpdate=function(){var b=this.aBindings.slice(0);jQuery.each(b,function(i,o){o.checkUpdate();});};
sap.ui.model.json.JSONModel.prototype.bindProperty=function(p,c){var b=new sap.ui.model.json.JSONPropertyBinding(this,p,c);return b;};
sap.ui.model.json.JSONModel.prototype.bindList=function(p,c,s,f){var b=new sap.ui.model.json.JSONListBinding(this,p,c,s,f);return b;};
sap.ui.model.json.JSONModel.prototype.bindTree=function(p,c){var b=new sap.ui.model.json.JSONTreeBinding(this,p,c);return b;};
sap.ui.model.json.JSONModel.prototype.createBindingContext=function(p,c,f){if(!c){c="";}if(!jQuery.sap.startsWith(p,"/")){p=c+"/"+p;}f(p);};
sap.ui.model.json.JSONModel.prototype.destroyBindingContext=function(c){};
sap.ui.model.json.JSONModel.prototype.setProperty=function(p,v,c){var o=p.substring(0,p.lastIndexOf("/")),s=p.substr(p.lastIndexOf("/")+1);var a=this._getObject(o,c);a[s]=v;this.checkUpdate();};
sap.ui.model.json.JSONModel.prototype.getProperty=function(p,c){return this._getObject(p,c);};
sap.ui.model.json.JSONModel.prototype._getObject=function(p,c){var n=this.oData;if(typeof c=="string"){n=this._getObject(c);if(!n){return null;}}else if(c){n=c;}if(!p){return n;}var a=p.split("/"),i=0;if(!a[0]){n=this.oData;i++;}while(n&&a[i]){n=n[a[i]];i++;}return n;};
