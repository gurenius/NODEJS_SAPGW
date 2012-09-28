/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.library");jQuery.sap.require("sap.ui.core.Core");sap.ui.getCore().initLibrary({name:"sap.ui.core",types:["sap.ui.core.AccessibleRole","sap.ui.core.BarColor","sap.ui.core.CSSSize","sap.ui.core.Collision","sap.ui.core.Design","sap.ui.core.Dock","sap.ui.core.HorizontalAlign","sap.ui.core.ID","sap.ui.core.ImeMode","sap.ui.core.OpenState","sap.ui.core.ScrollBarAction","sap.ui.core.Scrolling","sap.ui.core.TextAlign","sap.ui.core.TextDirection","sap.ui.core.URI","sap.ui.core.ValueState","sap.ui.core.VerticalAlign","sap.ui.core.Wrapping","any","boolean","float","int","sap.ui.core.mvc.ViewType","object","string","void"],interfaces:[],controls:["sap.ui.core.Control","sap.ui.core.HTML","sap.ui.core.ScrollBar","sap.ui.core.TooltipBase","sap.ui.core.mvc.JSONView","sap.ui.core.mvc.JSView","sap.ui.core.mvc.View","sap.ui.core.mvc.XMLView"],elements:["sap.ui.core.CustomData","sap.ui.core.Element","sap.ui.core.Item","sap.ui.core.ListItem","sap.ui.core.SeparatorItem"],version:"1.4.3"});jQuery.sap.declare("sap.ui.core.AccessibleRole");sap.ui.core.AccessibleRole={None:"None",Alert:"Alert",AlertDialog:"AlertDialog",Application:"Application",Banner:"Banner",Button:"Button",Checkbox:"Checkbox",ColumnHeader:"ColumnHeader",Combobox:"Combobox",
/**
     * Information about the content on the page. Examples are footnotes, copyrights, or links to privacy statements.
     *  
     * @public
     */
ContentInfo:"ContentInfo",Definition:"Definition",Description:"Description",Dialog:"Dialog",Directory:"Directory",Document:"Document",Grid:"Grid",GridCell:"GridCell",Group:"Group",Heading:"Heading",Img:"Img",Link:"Link",List:"List",Listbox:"Listbox",ListItem:"ListItem",Log:"Log",Main:"Main",Marquee:"Marquee",Menu:"Menu",Menubar:"Menubar",MenuItem:"MenuItem",MenuItemCheckbox:"MenuItemCheckbox",MenuItemRadio:"MenuItemRadio",Navigation:"Navigation",Note:"Note",Option:"Option",Presentation:"Presentation",ProgressBar:"ProgressBar",Radio:"Radio",RadioGroup:"RadioGroup",Region:"Region",Row:"Row",RowHeader:"RowHeader",Search:"Search",Secondary:"Secondary",SeeAlso:"SeeAlso",Separator:"Separator",Slider:"Slider",SpinButton:"SpinButton",Status:"Status",Tab:"Tab",Tablist:"Tablist",Tabpanel:"Tabpanel",Textbox:"Textbox",Timer:"Timer",Toolbar:"Toolbar",Tooltip:"Tooltip",Tree:"Tree",TreeGrid:"TreeGrid",TreeItem:"TreeItem"};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.BarColor");sap.ui.core.BarColor={NEUTRAL:"NEUTRAL",POSITIVE:"POSITIVE",CRITICAL:"CRITICAL",NEGATIVE:"NEGATIVE"};jQuery.sap.declare('sap.ui.core.CSSSize');jQuery.sap.require('sap.ui.base.DataType');sap.ui.core.CSSSize=sap.ui.base.DataType.createType('sap.ui.core.CSSSize',{isValid:function(v){return/^(auto|[-+]?(0*|([0-9]+|[0-9]*\.[0-9]+)([eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%)))$/.test(v);}},sap.ui.base.DataType.getType('string'));jQuery.sap.declare('sap.ui.core.Collision');jQuery.sap.require('sap.ui.base.DataType');sap.ui.core.Collision=sap.ui.base.DataType.createType('sap.ui.core.Collision',{isValid:function(v){return/^((flip|fit|none)( (flip|fit|none))?)$/.test(v);}},sap.ui.base.DataType.getType('string'));jQuery.sap.declare("sap.ui.core.Design");sap.ui.core.Design={Standard:"Standard",Monospace:"Monospace"};jQuery.sap.declare('sap.ui.core.Dock');jQuery.sap.require('sap.ui.base.DataType');sap.ui.core.Dock=sap.ui.base.DataType.createType('sap.ui.core.Dock',{isValid:function(v){return/^((begin|left|center|right|end) (top|center|bottom))$/.test(v);}},sap.ui.base.DataType.getType('string'));jQuery.sap.declare("sap.ui.core.HorizontalAlign");sap.ui.core.HorizontalAlign={Begin:"Begin",End:"End",Left:"Left",Right:"Right",Center:"Center"};jQuery.sap.declare('sap.ui.core.ID');jQuery.sap.require('sap.ui.base.DataType');sap.ui.core.ID=sap.ui.base.DataType.createType('sap.ui.core.ID',{isValid:function(v){return/^([A-Za-z_][-A-Za-z0-9_.:]*)$/.test(v);}},sap.ui.base.DataType.getType('string'));jQuery.sap.declare("sap.ui.core.ImeMode");sap.ui.core.ImeMode={Auto:"Auto",Active:"Active",Inactive:"Inactive",Disabled:"Disabled"};jQuery.sap.declare("sap.ui.core.OpenState");sap.ui.core.OpenState={OPEN:"OPEN",CLOSED:"CLOSED",OPENING:"OPENING",CLOSING:"CLOSING"};jQuery.sap.declare("sap.ui.core.ScrollBarAction");sap.ui.core.ScrollBarAction={Step:"Step",Page:"Page",MouseWheel:"MouseWheel",Drag:"Drag"};jQuery.sap.declare("sap.ui.core.Scrolling");sap.ui.core.Scrolling={None:"None",Auto:"Auto",Scroll:"Scroll",Hidden:"Hidden"};jQuery.sap.declare("sap.ui.core.TextAlign");sap.ui.core.TextAlign={Begin:"Begin",End:"End",Left:"Left",Right:"Right",Center:"Center"};jQuery.sap.declare("sap.ui.core.TextDirection");sap.ui.core.TextDirection={LTR:"LTR",RTL:"RTL",Inherit:"Inherit"};jQuery.sap.declare('sap.ui.core.URI');jQuery.sap.require('sap.ui.base.DataType');sap.ui.core.URI=sap.ui.base.DataType.createType('sap.ui.core.URI',{isValid:function(v){return/^((([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?)$/.test(v);}},sap.ui.base.DataType.getType('string'));jQuery.sap.declare("sap.ui.core.ValueState");sap.ui.core.ValueState={Error:"Error",Warning:"Warning",Success:"Success",None:"None"};jQuery.sap.declare("sap.ui.core.VerticalAlign");sap.ui.core.VerticalAlign={Bottom:"Bottom",Middle:"Middle",Top:"Top"};jQuery.sap.declare("sap.ui.core.Wrapping");sap.ui.core.Wrapping={None:"None",Soft:"Soft",Hard:"Hard",Off:"Off"};jQuery.sap.declare("sap.ui.core.mvc.ViewType");sap.ui.core.mvc.ViewType={JSON:"JSON",XML:"XML",JS:"JS"};sap.ui.lazyRequire("sap.ui.core.BusyIndicator","show hide attachOpen detachOpen attachClose detachClose");sap.ui.lazyRequire("sap.ui.model.Filter");sap.ui.lazyRequire("sap.ui.model.Sorter");sap.ui.lazyRequire("sap.ui.model.json.JSONModel");sap.ui.lazyRequire("sap.ui.model.resource.ResourceModel");sap.ui.lazyRequire("sap.ui.model.odata.ODataModel");sap.ui.lazyRequire("sap.ui.model.xml.XMLModel");sap.ui.lazyRequire("sap.ui.model.type.Boolean");sap.ui.lazyRequire("sap.ui.model.type.Integer");sap.ui.lazyRequire("sap.ui.model.type.Float");sap.ui.lazyRequire("sap.ui.model.type.String");sap.ui.lazyRequire("sap.ui.model.type.Date");sap.ui.lazyRequire("sap.ui.model.type.Time");sap.ui.lazyRequire("sap.ui.model.type.DateTime");sap.ui.lazyRequire("sap.ui.core.Locale");sap.ui.lazyRequire("sap.ui.core.LocaleData");sap.ui.lazyRequire("sap.ui.core.mvc.Controller");sap.ui.lazyRequire("sap.ui","controller","sap.ui.core.mvc.Controller");sap.ui.lazyRequire("sap.ui","view","sap.ui.core.mvc.View");sap.ui.lazyRequire("sap.ui","jsview","sap.ui.core.mvc.JSView");sap.ui.lazyRequire("sap.ui","jsonview","sap.ui.core.mvc.JSONView");sap.ui.lazyRequire("sap.ui","xmlview","sap.ui.core.mvc.XMLView");
