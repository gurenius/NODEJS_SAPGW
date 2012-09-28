/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RadioButtonGroup");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.RadioButtonGroup",{metadata:{publicMethods:["getSelectedItem","setSelectedItem"],library:"sap.ui.commons",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"columns":{type:"int",group:"Appearance",defaultValue:1},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"editable":{type:"boolean",group:"Behavior",defaultValue:true},"valueState":{type:"sap.ui.core.ValueState",group:"Data",defaultValue:sap.ui.core.ValueState.None},"selectedIndex":{type:"int",group:"Data",defaultValue:0}},defaultAggregation:"items",aggregations:{"items":{type:"sap.ui.core.Item",multiple:true,singularName:"item",bindable:"bindable"}},events:{"select":{}}}});sap.ui.commons.RadioButtonGroup.M_EVENTS={'select':'select'};jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
sap.ui.commons.RadioButtonGroup.prototype.exit=function(){this.destroyItems();};
sap.ui.commons.RadioButtonGroup.prototype.onBeforeRendering=function(){if(this.getSelectedIndex()>this.getItems().length){this.setSelectedIndex(0);};};
sap.ui.commons.RadioButtonGroup.prototype.onAfterRendering=function(){this.initItemNavigation();for(var i=0;i<this.aRBs.length;i++){jQuery.sap.byId(this.aRBs[i].getId()).attr("aria-posinset",i+1).attr("aria-setsize",this.aRBs.length);}};
sap.ui.commons.RadioButtonGroup.prototype.initItemNavigation=function(){var d=[];this._aActiveItems=[];var a=this._aActiveItems;for(var i=0;i<this.aRBs.length;i++){a[d.length]=i;d.push(jQuery.sap.domById(this.aRBs[i].getId()));}if(!this.oItemNavigation){this.oItemNavigation=new sap.ui.core.delegate.ItemNavigation();this.oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus,this._handleAfterFocus,this);this.addDelegate(this.oItemNavigation);}this.oItemNavigation.setRootDomRef(this.getDomRef());this.oItemNavigation.setItemDomRefs(d);this.oItemNavigation.setCycling(true);this.oItemNavigation.setColumns(this.getColumns());this.oItemNavigation.setSelectedIndex(this.getSelectedIndex());this.oItemNavigation.setFocusedIndex(this.getSelectedIndex());};
sap.ui.commons.RadioButtonGroup.prototype.setSelectedIndex=function(s){var i=this.getSelectedIndex();this.setProperty("selectedIndex",s,true);if(!isNaN(i)&&this.aRBs&&this.aRBs[i]){this.aRBs[i].setSelected(false);}if(this.aRBs&&this.aRBs[s]){this.aRBs[s].setSelected(true);}if(this.oItemNavigation){this.oItemNavigation.setSelectedIndex(s);this.oItemNavigation.setFocusedIndex(s);}};
sap.ui.commons.RadioButtonGroup.prototype.setSelectedItem=function(s){for(var i=0;i<this.getItems().length;i++){if(s.getId()==this.getItems()[i].getId()){this.setSelectedIndex(i);break;}}};
sap.ui.commons.RadioButtonGroup.prototype.getSelectedItem=function(){return this.getItems()[this.getSelectedIndex()];};
sap.ui.commons.RadioButtonGroup.prototype.addItem=function(i){this.myChange=true;this.addAggregation("items",i);this.myChange=undefined;if(this.getSelectedIndex()===undefined){this.setSelectedIndex(0);}if(!this.aRBs){this.aRBs=[];}var a=this.aRBs.length;this.aRBs[a]=this.createRadioButton(i,a);return this;};
sap.ui.commons.RadioButtonGroup.prototype.insertItem=function(o,a){this.myChange=true;this.insertAggregation("items",o,a);this.myChange=undefined;if(!this.aRBs){this.aRBs=[];}var l=this.aRBs.length;if(this.getSelectedIndex()===undefined||l==0){this.setSelectedIndex(0);}else if(this.getSelectedIndex()>=a){this.setProperty("selectedIndex",this.getSelectedIndex()+1,true);}if(a>=l){this.aRBs[a]=this.createRadioButton(o,a);}else{for(var i=(l);i>a;i--){this.aRBs[i]=this.aRBs[i-1];if((i-1)==a){this.aRBs[i-1]=this.createRadioButton(o,a);}}}return this;};
sap.ui.commons.RadioButtonGroup.prototype.createRadioButton=function(i,a){if(this.iIDCount==undefined){this.iIDCount=0;}else{this.iIDCount++;}var r=new sap.ui.commons.RadioButton(this.getId()+"-"+this.iIDCount);r.setText(i.getText());r.setTooltip(i.getTooltip());r.setEnabled(i.getEnabled());r.setKey(i.getKey());r.setTextDirection(i.getTextDirection());r.setEditable(this.getEditable());r.setGroupName(this.getId());r.setValueState(this.getValueState());r.setParent(this);if(a==this.getSelectedIndex()){r.setSelected(true);}r.attachEvent('select',this.handleRBSelect,this);return(r);};
sap.ui.commons.RadioButtonGroup.prototype.removeItem=function(e){var i=e;if(typeof(e)=="string"){e=sap.ui.getCore().byId(e);}if(typeof(e)=="object"){i=this.indexOfItem(e);}this.myChange=true;var o=this.removeAggregation("items",i);this.myChange=undefined;if(!this.aRBs){this.aRBs=[];}if(!this.aRBs[i]){return null;}this.aRBs[i].destroy();this.aRBs.splice(i,1);if(this.aRBs.length==0){this.setSelectedIndex(undefined);}else if(this.getSelectedIndex()==i){this.setSelectedIndex(0);}else{if(this.getSelectedIndex()>i){this.setProperty("selectedIndex",this.getSelectedIndex()-1,true);}}return o;};
sap.ui.commons.RadioButtonGroup.prototype.removeAllItems=function(){this.myChange=true;var i=this.removeAllAggregation("items");this.myChange=undefined;this.setSelectedIndex(undefined);if(this.aRBs){while(this.aRBs.length>0){this.aRBs[0].destroy();this.aRBs.splice(0,1);};return i;}else{return null;}};
sap.ui.commons.RadioButtonGroup.prototype.destroyItems=function(){this.myChange=true;this.destroyAggregation("items");this.myChange=undefined;this.setSelectedIndex(undefined);if(this.aRBs){while(this.aRBs.length>0){this.aRBs[0].destroy();this.aRBs.splice(0,1);};}return this;};
sap.ui.commons.RadioButtonGroup.prototype.invalidate=function(o){if(o instanceof sap.ui.core.Item&&this.aRBs&&!this.myChange){var a=this.getItems();for(var i=0;i<a.length;i++){if(a[i]==o){if(this.aRBs[i]){this.aRBs[i].setText(a[i].getText());this.aRBs[i].setTooltip(a[i].getTooltip());this.aRBs[i].setEnabled(a[i].getEnabled());this.aRBs[i].setKey(a[i].getKey());this.aRBs[i].setTextDirection(a[i].getTextDirection());}break;}}if(this.getDomRef()){this.initItemNavigation();}}var p=this.getParent();if(p){p.invalidate(this);}};
sap.ui.commons.RadioButtonGroup.prototype.handleRBSelect=function(c){for(var i=0;i<this.aRBs.length;i++){if(this.aRBs[i].getId()==c.getParameter("id")){this.setSelectedIndex(i);this.oItemNavigation.setSelectedIndex(i);this.oItemNavigation.setFocusedIndex(i);this.fireSelect({selectedIndex:i});break;}}};
sap.ui.commons.RadioButtonGroup.prototype.setEditable=function(e){this.setProperty("editable",e,false);if(this.aRBs){for(var i=0;i<this.aRBs.length;i++){this.aRBs[i].setEditable(e);}}};
sap.ui.commons.RadioButtonGroup.prototype.setValueState=function(v){this.setProperty("valueState",v,false);if(this.aRBs){for(var i=0;i<this.aRBs.length;i++){this.aRBs[i].setValueState(v);}}};
sap.ui.commons.RadioButtonGroup.prototype._handleAfterFocus=function(c){var i=c.getParameter("index");var e=c.getParameter("event");if(i!=this.getSelectedIndex()&&!(e.ctrlKey||e.metaKey)&&this.aRBs[i].getEditable()&&this.aRBs[i].getEnabled()){this.setSelectedIndex(i);this.oItemNavigation.setSelectedIndex(i);this.fireSelect({selectedIndex:i});}};
