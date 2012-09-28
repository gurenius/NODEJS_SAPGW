/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("jquery.sap.properties");jQuery.sap.require("jquery.sap.sjax");(function(){var Properties=function(){this.mProperties={};this.aKeys=[];};Properties.prototype={};Properties.prototype.getProperty=function(k,d){var v=this.mProperties[k];if(typeof(v)=="string"){return v;}else if(d){return d;}return"";};Properties.prototype.getKeys=function(){return this.aKeys;};Properties.prototype.setProperty=function(k,v){if(typeof(v)!="string"){return;}if(typeof(this.mProperties[k])!="string"){this.aKeys.push(k);}this.mProperties[k]=v;};Properties.prototype.clone=function(){var c=new Properties();c.mProperties=jQuery.extend({},this.mProperties);c.aKeys=jQuery.merge([],this.aKeys);return c;};function parse(sText,oProp){oProp.mProperties={};oProp.aKeys=[];var aLines=sText.split(/\r\n|\r|\n/);for(var i=0;i<aLines.length;i++){var sLine=aLines[i];sLine=sLine.replace(/^\s+/g,"");if(sLine==""){continue;}if(sLine.indexOf("#")==0||sLine.indexOf("!")==0){continue;}while(sLine.lastIndexOf("\\")==sLine.length-1){sLine=sLine.substring(0,sLine.length-1);i++;var sNewLine=aLines[i].replace(/^\s+/g,"");if(sNewLine==""||sNewLine.indexOf("#")==0||sNewLine.indexOf("!")==0){break;}sLine+=sNewLine;}var iSeperatorPos1=sLine.indexOf("="),iSeperatorPos2=sLine.indexOf(":"),iSeperatorPos=0;if((iSeperatorPos1<iSeperatorPos2&&iSeperatorPos1>-1)||iSeperatorPos2==-1){iSeperatorPos=iSeperatorPos1;}else{iSeperatorPos=iSeperatorPos2;}if(iSeperatorPos==-1){continue;}var sKey=sLine.substring(0,iSeperatorPos).replace(/^\s+|\s+$/g,"");oProp.aKeys.push(sKey);var sValue="";sValue=sLine.substring(iSeperatorPos+1).replace(/^\s+|\s+$/g,"");if(sValue.indexOf("\\")>=0){sValue=eval("\""+sValue.replace(/"/g,"\\\"")+"\"");}oProp.mProperties[sKey]=sValue;}}jQuery.sap.properties=function properties(p){var o=new Properties();p=jQuery.extend({url:undefined},p);if(typeof(p.url)=="string"){var t=jQuery.sap.syncGetText(p.url,null,undefined);if(typeof(t)=="string"){parse(t,o);}}return o;};}());