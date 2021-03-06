/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.DataSetItem");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.ux3.DataSetItem",{metadata:{library:"sap.ui.ux3",properties:{"iconSrc":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"title":{type:"string",group:"Misc",defaultValue:'Title'},"checkable":{type:"boolean",group:"Misc",defaultValue:true},"subtitle":{type:"string",group:"Misc",defaultValue:'Subtitle'}},aggregations:{"template":{type:"sap.ui.core.Control",multiple:false}},events:{"selected":{}}}});sap.ui.ux3.DataSetItem.M_EVENTS={'selected':'selected'};
sap.ui.ux3.DataSetItem.prototype.onclick=function(e){e.stopPropagation();this.fireSelected({itemId:this.getId()});};
