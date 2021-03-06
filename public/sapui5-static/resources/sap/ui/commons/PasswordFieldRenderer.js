/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.PasswordFieldRenderer");jQuery.sap.require("sap.ui.commons.TextFieldRenderer");sap.ui.commons.PasswordFieldRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);
sap.ui.commons.PasswordFieldRenderer.renderInnerAttributes=function(r,t){r.writeAttribute('type','password');};
sap.ui.commons.PasswordFieldRenderer.renderTextFieldEnabled=function(r,t){if(!t.getEnabled()&&!t.getEditable()){r.writeAttribute('readonly','readonly');r.writeAttribute('tabindex','-1');}else{r.writeAttribute('tabindex','0');}};
sap.ui.commons.PasswordFieldRenderer.setEnabled=function(t,e){var o=jQuery.sap.domById(t.getId());if(e){if(t.getEditable()){jQuery(o).removeClass('sapUiTfDsbl').addClass('sapUiTfStd');jQuery(o).removeAttr('readonly').attr('tabindex','0');}else{jQuery(o).removeClass('sapUiTfDsbl').addClass('sapUiTfRo');jQuery(o).attr('tabindex','0');}}else{if(t.getEditable()){jQuery(o).removeClass('sapUiTfStd').addClass('sapUiTfDsbl');jQuery(o).attr('readonly','readonly').attr('tabindex','-1');}else{jQuery(o).removeClass('sapUiTfRo').addClass('sapUiTfDsbl');jQuery(o).attr('tabindex','-1');}}};
