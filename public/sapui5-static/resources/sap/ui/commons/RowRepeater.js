/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RowRepeater");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.RowRepeater",{metadata:{publicMethods:["triggerShowMore","resize","applyFilter","triggerSort","firstPage","lastPage","previousPage","nextPage","gotoPage"],library:"sap.ui.commons",properties:{"visible":{type:"boolean",group:"Appearance",defaultValue:true},"numberOfRows":{type:"int",group:"Dimension",defaultValue:5},"currentPage":{type:"int",group:"Data",defaultValue:1},"showMoreSteps":{type:"int",group:"Behavior",defaultValue:0},"fixedRowHeight":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:''},"design":{type:"sap.ui.commons.RowRepeaterDesign",group:"Appearance",defaultValue:sap.ui.commons.RowRepeaterDesign.Standard}},defaultAggregation:"rows",aggregations:{"rows":{type:"sap.ui.core.Control",multiple:true,singularName:"row",bindable:"bindable"},"title":{type:"sap.ui.commons.Title",multiple:false},"filters":{type:"sap.ui.commons.RowRepeaterFilter",multiple:true,singularName:"filter"},"sorters":{type:"sap.ui.commons.RowRepeaterSorter",multiple:true,singularName:"sorter"},"noData":{type:"sap.ui.core.Control",multiple:false}},events:{"filter":{},"sort":{},"page":{},"resize":{}}}});sap.ui.commons.RowRepeater.M_EVENTS={'filter':'filter','sort':'sort','page':'page','resize':'resize'};sap.ui.commons.RowRepeater.getMetadata()._mHiddenAggregations={"filterToolbar":{multiple:false,type:"sap.ui.commons.Toolbar"},"sorterToolbar":{multiple:false,type:"sap.ui.commons.Toolbar"},"headerShowMoreButton":{multiple:false,type:"sap.ui.commons.Button"},"footerShowMoreButton":{multiple:false,type:"sap.ui.commons.Button"},"footerPager":{multiple:false,type:"sap.ui.commons.Paginator"}};sap.ui.commons.RowRepeater.prototype.bPagingMode=true;sap.ui.commons.RowRepeater.prototype.bShowAnimation=true;sap.ui.commons.RowRepeater.SHOW_MORE="show_more";sap.ui.commons.RowRepeater.RESIZE="resize";sap.ui.commons.RowRepeater.FIRST_PAGE="first_page";sap.ui.commons.RowRepeater.LAST_PAGE="last_page";sap.ui.commons.RowRepeater.PREVIOUS_PAGE="previous_page";sap.ui.commons.RowRepeater.NEXT_PAGE="next_page";sap.ui.commons.RowRepeater.GOTO_PAGE="goto_page";
sap.ui.commons.RowRepeater.prototype.init=function(){var i=this.getId();this.oResourceBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");this.sCurrentAnimation=null;this.aAnimationQueue=[];this.aRemoveBuffer=[];this.iPreviousPage=this.getCurrentPage();this.iPreviousNumberOfRows=this.getNumberOfRows();this.setAggregation("filterToolbar",new sap.ui.commons.Toolbar(i+"-ftb",{standalone:false,design:sap.ui.commons.ToolbarDesign.Transparent}));this.setAggregation("sorterToolbar",new sap.ui.commons.Toolbar(i+"-stb",{standalone:false}));var p=new sap.ui.commons.Paginator(i+"-fp",{page:[this.paging,this]});this.setAggregation("footerPager",p);var s=this.oResourceBundle.getText("SHOW_MORE");this.setAggregation("headerShowMoreButton",new sap.ui.commons.Button(i+"-hsm",{text:s,press:[this.triggerShowMore,this]}));this.setAggregation("footerShowMoreButton",new sap.ui.commons.Button(i+"-fsm",{text:s,press:[this.triggerShowMore,this]}));};
sap.ui.commons.RowRepeater.prototype.triggerShowMore=function(){if(this.getShowMoreSteps()<=0){return this;}var s=this.getShowMoreSteps();var n=this.getNumberOfRows();var i=Math.min(this.getRows().length,n+s);if(n===i){return this;}if(this.bShowAnimation){if(this.sCurrentAnimation!==null){this.aAnimationQueue.push({name:sap.ui.commons.RowRepeater.SHOW_MORE,animationFunction:this.triggerShowMore,args:arguments});return this;}else{this.sCurrentAnimation=sap.ui.commons.RowRepeater.SHOW_MORE;}this.iPreviousNumberOfRows=n;this.setProperty("numberOfRows",i,true);this.startResizeAnimation();}else{this.setNumberOfRows(i);}this.fireResize({numberOfRows:i,previousNumberOfRows:n});return this;};
sap.ui.commons.RowRepeater.prototype.resize=function(n){if(this.getShowMoreSteps()<=0){return this;}var i=this.getNumberOfRows();if(n<=0||n>this.getRows().length||n===i){return this;}if(this.bShowAnimation){if(this.sCurrentAnimation!==null){this.aAnimationQueue.push({name:sap.ui.commons.RowRepeater.RESIZE,animationFunction:this.resize,args:arguments});return this;}else{this.sCurrentAnimation=sap.ui.commons.RowRepeater.RESIZE;}this.iPreviousNumberOfRows=i;this.setProperty("numberOfRows",n,true);this.startResizeAnimation();}else{this.setNumberOfRows(n);}this.fireResize({numberOfRows:n,previousNumberOfRows:i});return this;};
sap.ui.commons.RowRepeater.prototype.applyFilter=function(i){var f=this.getFilters();var l=this.getBinding("rows");var o,n;if(f.length===0||l===null){return this;}for(n=0;n<f.length;n++){if(f[n].getId()===i){o=f[n];break;}}if(o){l.filter(o.getFilters());this.fireFilter({filterId:i});this.firstPage();}return this;};
sap.ui.commons.RowRepeater.prototype.triggerSort=function(i){var s=this.getSorters();var l=this.getBinding("rows");var o,n;if(s.length===0||l===null){return this;}for(n=0;n<s.length;n++){if(s[n].getId()===i){o=s[n];break;}}if(o){l.sort(o.getSorter());this.fireSort({sorterId:i});this.firstPage();}return this;};
sap.ui.commons.RowRepeater.prototype.firstPage=function(){if(this.getShowMoreSteps()>0){return this;}var c=this.getCurrentPage();if(c===1){return this;}this.getAggregation("footerPager").setCurrentPage(1);if(this.bShowAnimation){if(this.sCurrentAnimation!==null){this.aAnimationQueue.push({name:sap.ui.commons.RowRepeater.FIRST_PAGE,animationFunction:this.firstPage,args:arguments});return this;}else{this.sCurrentAnimation=sap.ui.commons.RowRepeater.FIRST_PAGE;}this.iPreviousPage=c;this.setProperty("currentPage",1,true);this.startPagingAnimation();}else{this.setCurrentPage(1);}this.firePage({currentPage:1,previousPage:c});return this;};
sap.ui.commons.RowRepeater.prototype.lastPage=function(){if(this.getShowMoreSteps()>0){return this;}var c=this.getCurrentPage();var l=Math.ceil(this.getRows().length/this.getNumberOfRows());if(c===l){return this;}this.getAggregation("footerPager").setCurrentPage(l);if(this.bShowAnimation){if(this.sCurrentAnimation!==null){this.aAnimationQueue.push({name:sap.ui.commons.RowRepeater.LAST_PAGE,animationFunction:this.lastPage,args:arguments});return this;}else{this.sCurrentAnimation=sap.ui.commons.RowRepeater.LAST_PAGE;}this.iPreviousPage=c;this.setProperty("currentPage",l,true);this.startPagingAnimation();}else{this.setCurrentPage(l);}this.firePage({currentPage:l,previousPage:c});return this;};
sap.ui.commons.RowRepeater.prototype.previousPage=function(){if(this.getShowMoreSteps()>0){return this;}var c=this.getCurrentPage();if(c<=1){return this;}this.getAggregation("footerPager").setCurrentPage(c-1);if(this.bShowAnimation){if(this.sCurrentAnimation!==null){this.aAnimationQueue.push({name:sap.ui.commons.RowRepeater.PREVIOUS_PAGE,animationFunction:this.previousPage,args:arguments});return this;}else{this.sCurrentAnimation=sap.ui.commons.RowRepeater.PREVIOUS_PAGE;}this.iPreviousPage=c;this.setProperty("currentPage",c-1,true);this.startPagingAnimation();}else{this.setCurrentPage(c-1);}this.firePage({currentPage:c-1,previousPage:c});return this;};
sap.ui.commons.RowRepeater.prototype.nextPage=function(){if(this.getShowMoreSteps()>0){return this;}var c=this.getCurrentPage();var l=Math.ceil(this.getRows().length/this.getNumberOfRows());if(c>=l){return this;}this.getAggregation("footerPager").setCurrentPage(c+1);if(this.bShowAnimation){if(this.sCurrentAnimation!==null){this.aAnimationQueue.push({name:sap.ui.commons.RowRepeater.NEXT_PAGE,animationFunction:this.nextPage,args:arguments});return this;}else{this.sCurrentAnimation=sap.ui.commons.RowRepeater.NEXT_PAGE;}this.iPreviousPage=c;this.setProperty("currentPage",c+1,true);this.startPagingAnimation();}else{this.setCurrentPage(c+1);}this.firePage({currentPage:c+1,previousPage:c});return this;};
sap.ui.commons.RowRepeater.prototype.gotoPage=function(p){if(this.getShowMoreSteps()>0){return this;}var c=this.getCurrentPage();var l=Math.ceil(this.getRows().length/this.getNumberOfRows());if(p<1||p>l||c===p){return this;}this.getAggregation("footerPager").setCurrentPage(p);if(this.bShowAnimation){if(this.sCurrentAnimation!==null){this.aAnimationQueue.push({name:sap.ui.commons.RowRepeater.GOTO_PAGE,animationFunction:this.gotoPage,args:arguments});return this;}else{this.sCurrentAnimation=sap.ui.commons.RowRepeater.GOTO_PAGE;}this.iPreviousPage=c;this.setProperty("currentPage",p,true);this.startPagingAnimation();}else{this.setCurrentPage(p);}this.firePage({currentPage:p,previousPage:c});return this;};
sap.ui.commons.RowRepeater.prototype.setNumberOfRows=function(n){this.setProperty("numberOfRows",n);this.updateChildControls();return this;};
sap.ui.commons.RowRepeater.prototype.setCurrentPage=function(c){this.setProperty("currentPage",c);this.updateChildControls();return this;};
sap.ui.commons.RowRepeater.prototype.setShowMoreSteps=function(s){var n=s>0?false:true;if(n!==this.bPagingMode){this.bPagingMode=n;this.setCurrentPage(1);}this.setProperty("showMoreSteps",s);return this;};
sap.ui.commons.RowRepeater.prototype.insertRow=function(r,i){this.insertAggregation("rows",r,i);this.updateChildControls();return this;};
sap.ui.commons.RowRepeater.prototype.addRow=function(r){this.addAggregation("rows",r);this.updateChildControls();return this;};
sap.ui.commons.RowRepeater.prototype.removeRow=function(e){this.removeAggregation("rows",e);this.updateChildControls();return this;};
sap.ui.commons.RowRepeater.prototype.removeAllRows=function(){this.removeAllAggregation("rows");this.updateChildControls();return this;};
sap.ui.commons.RowRepeater.prototype.destroyRows=function(){this.destroyAggregation("rows");this.updateChildControls();return this;};
sap.ui.commons.RowRepeater.prototype.insertFilter=function(f,i){var t=this.getAggregation("filterToolbar");var s=f.getId();var b=new sap.ui.commons.Button({text:f.getText(),icon:f.getIcon(),tooltip:f.getTooltip(),press:[function(){this.applyFilter(s);},this]});t.insertItem(b,i);this.insertAggregation("filters",f,i);return this;};
sap.ui.commons.RowRepeater.prototype.addFilter=function(f){var t=this.getAggregation("filterToolbar");var s=f.getId();var b=new sap.ui.commons.Button({text:f.getText(),icon:f.getIcon(),tooltip:f.getTooltip(),press:[function(){this.applyFilter(s);},this]});t.addItem(b);this.addAggregation("filters",f);return this;};
sap.ui.commons.RowRepeater.prototype.removeFilter=function(e){var t=this.getAggregation("filterToolbar");t.removeItem(e);return this.removeAggregation("filters",e);};
sap.ui.commons.RowRepeater.prototype.removeAllFilters=function(){var t=this.getAggregation("filterToolbar");t.removeAllItems();return this.removeAllAggregation("filters");};
sap.ui.commons.RowRepeater.prototype.destroyFilters=function(){var t=this.getAggregation("filterToolbar");t.removeAllItems();this.destroyAggregation("filters");return this;};
sap.ui.commons.RowRepeater.prototype.insertSorter=function(s,i){var t=this.getAggregation("sorterToolbar");var a=s.getId();var b=new sap.ui.commons.Button({text:s.getText(),icon:s.getIcon(),tooltip:s.getTooltip(),press:[function(){this.triggerSort(a);},this]});t.insertItem(b,i);this.insertAggregation("sorters",s,i);return this;};
sap.ui.commons.RowRepeater.prototype.addSorter=function(s){var t=this.getAggregation("sorterToolbar");var a=s.getId();var b=new sap.ui.commons.Button({text:s.getText(),icon:s.getIcon(),tooltip:s.getTooltip(),press:[function(){this.triggerSort(a);},this]});t.addItem(b);this.addAggregation("sorters",s);return this;};
sap.ui.commons.RowRepeater.prototype.removeSorter=function(e){var t=this.getAggregation("sorterToolbar");t.removeItem(e);return this.removeAggregation("sorters",e);};
sap.ui.commons.RowRepeater.prototype.removeAllSorters=function(){var t=this.getAggregation("sorterToolbar");t.removeAllItems();return this.removeAllAggregation("sorters");};
sap.ui.commons.RowRepeater.prototype.destroySorters=function(){var t=this.getAggregation("sorterToolbar");t.removeAllItems();this.destroyAggregation("sorters");return this;};
sap.ui.commons.RowRepeater.prototype.startPagingAnimation=function(){var c=sap.ui.getCore();var r=c.getRenderManager();var i=this.getId();var p=this.iPreviousPage;var a=this.getCurrentPage();var b=this.getNumberOfRows();var s=(a-1)*b;var d=this.getRows();var e=d.length>b*a?b:d.length-b*(a-1);var l=Math.ceil(d.length/b);var n;var o;var j=jQuery(jQuery.sap.domById(i+"-page_"+p));var f=jQuery.sap.domById(i+"-body");var g=jQuery(f);g.css("height",g.outerHeight());var h;if(sap.ui.getCore()&&sap.ui.getCore().getConfiguration()&&sap.ui.getCore().getConfiguration().getRTL()){h=(a<p)?"left":"right";}else{h=(a<p)?"right":"left";}var k="\"top:-"+j.outerHeight(true)+"px;"+h+":"+j.outerWidth(true)+"px;\"";jQuery("<ul id=\""+i+"-page_"+a+"\" class=\"sapUiRrPage\" style="+k+"/>").appendTo(f);var m=f.lastChild;var q=jQuery(m);for(n=s;n<s+e;n++){jQuery("<li id=\""+i+"-row_"+n+"\" class=\"sapUiRrRow\"/>").appendTo(m);o=m.lastChild;r.render(d[n],o);}if(h==="right"){j.animate({right:-j.outerWidth(true)},"slow");q.animate({right:0},"slow");}else{j.animate({left:-j.outerWidth(true)},"slow");q.animate({left:0},"slow");}g.animate({height:q.outerHeight(true)},"slow",jQuery.proxy(this.endPagingAnimation,this));};
sap.ui.commons.RowRepeater.prototype.endPagingAnimation=function(){var i=this.getId();var d=jQuery.sap.domById(i+"-body");var o=jQuery.sap.domById(i+"-page_"+this.iPreviousPage);var a=jQuery.sap.domById(i+"-page_"+this.getCurrentPage());var j=jQuery(a);jQuery(d).css("height","");jQuery(o).remove();var s;if(sap.ui.getCore()&&sap.ui.getCore().getConfiguration()&&sap.ui.getCore().getConfiguration().getRTL()){s=(this.getCurrentPage()<this.iPreviousPage)?"left":"right";}else{s=(this.getCurrentPage()<this.iPreviousPage)?"right":"left";}j.css("top","");j.css(s,"");this.sCurrentAnimation=null;this.nextQueuedAnimation();};
sap.ui.commons.RowRepeater.prototype.startResizeAnimation=function(){var r=sap.ui.getCore().getRenderManager();var i=this.getNumberOfRows();var o=this.iPreviousNumberOfRows;var s=this.getId();var a=this.getRows();var b=0;var n;var d;var c=jQuery.sap.domById(s+"-body");var j=jQuery(c);var e=jQuery.sap.domById(s+"-page_"+this.getCurrentPage());j.css("height",j.outerHeight());if(i>o){for(n=o;n<i;n++){jQuery("<li id=\""+s+"-row_"+n+"\" class=\"sapUiRrRow\"/>").appendTo(e);d=e.lastChild;r.render(a[n],d);}}else{for(n=i;n<o;n++){d=jQuery.sap.domById(s+"-row_"+n);b-=jQuery(d).outerHeight(true);this.aRemoveBuffer.push(d);}}j.animate({height:jQuery(e).outerHeight(true)+b},"slow",jQuery.proxy(this.endResizeAnimation,this));};
sap.ui.commons.RowRepeater.prototype.endResizeAnimation=function(){var d=jQuery.sap.domById(this.getId()+"-body");while(this.aRemoveBuffer.length>0){jQuery(this.aRemoveBuffer.pop()).remove();}jQuery(d).css("height","");this.sCurrentAnimation=null;this.nextQueuedAnimation();};
sap.ui.commons.RowRepeater.prototype.nextQueuedAnimation=function(){var n,l;var c=1;var q=this.aAnimationQueue;var p,i;if(q.length>0){n=q.shift();}if(n&&q.length>0){while(q[0]&&q[0].name===n.name){c++;l=q.shift();}if(c>0){switch(n.name){case sap.ui.commons.RowRepeater.SHOW_MORE:i=Math.min(this.getRows().length,this.getNumberOfRows()+this.getShowMoreSteps()*c);n={name:sap.ui.commons.RowRepeater.RESIZE,animationFunction:this.resize,args:[i]};break;case sap.ui.commons.RowRepeater.RESIZE:n=l;break;case sap.ui.commons.RowRepeater.FIRST_PAGE:break;case sap.ui.commons.RowRepeater.LAST_PAGE:break;case sap.ui.commons.RowRepeater.PREVIOUS_PAGE:p=Math.max(1,this.getCurrentPage()-c);n={name:sap.ui.commons.RowRepeater.GOTO_PAGE,animationFunction:this.gotoPage,args:[p]};break;case sap.ui.commons.RowRepeater.NEXT_PAGE:p=Math.min(Math.ceil(this.getRows().length/this.getNumberOfRows()),this.getCurrentPage()+c);n={name:sap.ui.commons.RowRepeater.GOTO_PAGE,animationFunction:this.gotoPage,args:[p]};break;case sap.ui.commons.RowRepeater.GOTO_PAGE:n=l;break;}}}if(n){n.animationFunction.apply(this,n.args);}};
sap.ui.commons.RowRepeater.prototype.paging=function(e){switch(e.getParameter("type")){case sap.ui.commons.PaginatorEvent.First:this.firstPage();break;case sap.ui.commons.PaginatorEvent.Last:this.lastPage();break;case sap.ui.commons.PaginatorEvent.Previous:this.previousPage();break;case sap.ui.commons.PaginatorEvent.Next:this.nextPage();break;case sap.ui.commons.PaginatorEvent.Goto:this.gotoPage(e.getParameter("targetPage"));break;}};
sap.ui.commons.RowRepeater.prototype.updateChildControls=function(){var s,p;var b;if(this.bPagingMode){var c=this.getCurrentPage();var l=Math.ceil(this.getRows().length/this.getNumberOfRows());if(this.getRows().length==0){l=1;}p=this.getAggregation("footerPager");if(p){p.setCurrentPage(c);p.setNumberOfPages(l);}}else{b=this.getRows().length>this.getNumberOfRows();s=this.getAggregation("headerShowMoreButton");if(s){s.setEnabled(b);}s=this.getAggregation("footerShowMoreButton");if(s){s.setEnabled(b);}}};
sap.ui.commons.RowRepeater.prototype.isBound=function(n){return sap.ui.core.Element.prototype.isBound.call(this,n||"rows");};