/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Slider.
jQuery.sap.declare("sap.ui.commons.Slider");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Slider.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getMin min} : float (default: 0)</li>
 * <li>{@link #getMax max} : float (default: 100)</li>
 * <li>{@link #getValue value} : float (default: 50)</li>
 * <li>{@link #getSmallStepWidth smallStepWidth} : float</li>
 * <li>{@link #getTotalUnits totalUnits} : int</li>
 * <li>{@link #getStepLabels stepLabels} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.Slider#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.Slider#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The interactive control is displayed as a horizontal line with a pointer and units of measurement.
 * Users can move the pointer along the line to change values with graphical support.
 * @extends sap.ui.core.Control
 *
 * @author Sebastian Allmann 
 * @version 1.4.3
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Slider
 */
sap.ui.core.Control.extend("sap.ui.commons.Slider", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"min" : {type : "float", group : "Appearance", defaultValue : 0},
		"max" : {type : "float", group : "Appearance", defaultValue : 100},
		"value" : {type : "float", group : "Appearance", defaultValue : 50},
		"smallStepWidth" : {type : "float", group : "Appearance", defaultValue : null},
		"totalUnits" : {type : "int", group : "Appearance", defaultValue : null},
		"stepLabels" : {type : "boolean", group : "Appearance", defaultValue : false},
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	events : {
		"change" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Slider with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.commons.Slider.extend
 * @function
 */

sap.ui.commons.Slider.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>width</code>.
 * Width of the slider.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Slider#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setWidth
 * @function
 */

/**
 * Getter for property <code>min</code>.
 * Minimal value of the slider.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>min</code>
 * @public
 * @name sap.ui.commons.Slider#getMin
 * @function
 */


/**
 * Setter for property <code>min</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fMin  new value for property <code>min</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setMin
 * @function
 */

/**
 * Getter for property <code>max</code>.
 * Maximal value of the slider
 *
 * Default value is <code>100</code>
 *
 * @return {float} the value of property <code>max</code>
 * @public
 * @name sap.ui.commons.Slider#getMax
 * @function
 */


/**
 * Setter for property <code>max</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {float} fMax  new value for property <code>max</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setMax
 * @function
 */

/**
 * Getter for property <code>value</code>.
 * Current value of the slider. (Position of the grip.)
 *
 * Default value is <code>50</code>
 *
 * @return {float} the value of property <code>value</code>
 * @public
 * @name sap.ui.commons.Slider#getValue
 * @function
 */


/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>50</code> 
 *
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setValue
 * @function
 */

/**
 * Getter for property <code>smallStepWidth</code>.
 * The grip can only be moved in steps of this width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>smallStepWidth</code>
 * @public
 * @name sap.ui.commons.Slider#getSmallStepWidth
 * @function
 */


/**
 * Setter for property <code>smallStepWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fSmallStepWidth  new value for property <code>smallStepWidth</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setSmallStepWidth
 * @function
 */

/**
 * Getter for property <code>totalUnits</code>.
 * Number of units that are displayed by ticks. The PageUp and PageDown keys navigate according to these units.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>totalUnits</code>
 * @public
 * @name sap.ui.commons.Slider#getTotalUnits
 * @function
 */


/**
 * Setter for property <code>totalUnits</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iTotalUnits  new value for property <code>totalUnits</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setTotalUnits
 * @function
 */

/**
 * Getter for property <code>stepLabels</code>.
 * Display step numbers for the ticks on the slider.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>stepLabels</code>
 * @public
 * @name sap.ui.commons.Slider#getStepLabels
 * @function
 */


/**
 * Setter for property <code>stepLabels</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bStepLabels  new value for property <code>stepLabels</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setStepLabels
 * @function
 */

/**
 * Getter for property <code>visible</code>.
 * Invisible sliders are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.Slider#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setVisible
 * @function
 */

/**
 * Getter for property <code>editable</code>.
 * Using the slider interactively requires value "true".
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.Slider#getEditable
 * @function
 */


/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setEditable
 * @function
 */

/**
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.Slider#getEnabled
 * @function
 */


/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setEnabled
 * @function
 */

/**
 * Value was changed. This event is fired if the value has changed by an user action. Additionally it is fired on setValue if the value is changed because to fit step-wide. 
 *
 * @name sap.ui.commons.Slider#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {float} oControlEvent.getParameters.value Current value of the slider after a change. 
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Slider</code>.<br/> itself. 
 *  
 * Value was changed. This event is fired if the value has changed by an user action. Additionally it is fired on setValue if the value is changed because to fit step-wide. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Slider</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#attachChange
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.Slider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#detachChange
 * @function
 */


/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> Current value of the slider after a change. </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Slider#fireChange
 * @function
 */

/**
 * Value was changed. This event is fired during the mouse move. The normal change event ist only fired by mouseup. 
 *
 * @name sap.ui.commons.Slider#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {float} oControlEvent.getParameters.value Current value of the slider after a change. 
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.ui.commons.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Slider</code>.<br/> itself. 
 *  
 * Value was changed. This event is fired during the mouse move. The normal change event ist only fired by mouseup. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Slider</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#attachLiveChange
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.ui.commons.Slider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#detachLiveChange
 * @function
 */


/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> Current value of the slider after a change. </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Slider#fireLiveChange
 * @function
 */

// Start of sap/ui/commons/Slider.js
///**
// * This file defines the control behavior.
// */
//sap.ui.commons.Slider.prototype.init = function(){
//   // do something for initialization...
//};

//jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.ui.core.EnabledPropagator");

sap.ui.core.EnabledPropagator.apply(sap.ui.commons.Slider.prototype, [true]);

sap.ui.commons.Slider.prototype.onBeforeRendering = function() {
	// Cleanup resize event registration before re-rendering
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

sap.ui.commons.Slider.prototype.onAfterRendering = function () {

	// Warning in the case of wrong properties
	if( this.getMin() >= this.getMax() ){
		jQuery.sap.log.warning('Property wrong: Min:' + this.getMin() + ' > Max:' + this.getMax() );
	}

	this.oGrip = jQuery.sap.domById(this.getId() + '-grip');
	this.oBar  = jQuery.sap.domById(this.getId() + '-bar');
	this.oHiLi = jQuery.sap.domById(this.getId() + '-hili');
	this.bRtl  = sap.ui.getCore().getConfiguration().getRTL();
	this.bAcc  = sap.ui.getCore().getConfiguration().getAccessibility();

	var fNewValue = this.getValue();

	if(this.bRtl){
		// In the case of RTL, simulate non-RTL value. This is changed back in changeGrip.
		fNewValue = this.getMax() - fNewValue + this.getMin();
	}

	this.iDecimalFactor = this.calcDecimalFactor(this.getSmallStepWidth());

	// Get left shift for middle of grip. Use offsetWidth to include borders. Round to prevent calculation errors.
	this.iShiftGrip = Math.round(this.oGrip.offsetWidth / 2);

	// Calculate grip position
	var iNewPos = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.oBar.clientWidth ;

	// Move grip to hit the point in the middle
	this.changeGrip(fNewValue, iNewPos);

	if(this.getTotalUnits() > 0){
		// Move ticks to correct position; put it in the middle.
		// Round value shift factor separately to have the same behavior like for the grip position.

		var oTick = null;
		var oText = null;
		this.fTickDist = this.oBar.clientWidth / this.getTotalUnits();
		for (var i = 0; i <= this.getTotalUnits(); i++){
			oTick = jQuery.sap.domById(this.getId() + '-tick' + i);
			oTick.style.left = Math.round( ( this.fTickDist * i)) - Math.round(( oTick.offsetWidth / 2) ) + 'px';

			if( this.getStepLabels() && i > 0 && i < this.getTotalUnits()){
				oText = jQuery.sap.domById(this.getId() + '-text' + i);
				if(this.getSmallStepWidth() > 0 && this.iDecimalFactor > 0){
					jQuery(oText).text(Math.round( parseFloat(jQuery(oText).text()) * this.iDecimalFactor ) / this.iDecimalFactor);
				}
				if(!this.bRtl){
					oText.style.left = Math.round( ( this.fTickDist * i)) - Math.round(( oText.offsetWidth / 2) ) + 'px';
				}else{
					oText.style.left = Math.round( ( this.fTickDist * (this.getTotalUnits()-i))) - Math.round(( oText.offsetWidth / 2) ) + 'px';
				}
			}
		}
	}

	// Disable text selection
	this.allowTextSelection(false);

	// Register resize event
	this.oDomRef = this.getDomRef();
	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.oDomRef, jQuery.proxy(this.onresize, this));

};

/**
 * Function is called when Slider is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onclick = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		// Check for ID where the behavior depends on the clicked area.
		var sMyTargetId = oEvent.target.getAttribute( 'ID' );

		var fNewValue = this.getValue();
		var iNewPos   = this.oGrip.offsetLeft + this.iShiftGrip;

		if(this.bRtl){
			// In the case of RTL, simulate non-RTL Value (changed back in changeGrip)
			fNewValue = this.getMax() - fNewValue + this.getMin();
		}

		switch ( sMyTargetId ){
		case ( this.oBar.id ):
		// Click on slide bar
			fNewValue = this.getMin() + ( ( ( this.getMax() - this.getMin() )  / this.oBar.clientWidth ) * oEvent.getOffsetX() );
			// new position = clicked position
			iNewPos = oEvent.getOffsetX() ;

			break;
		case ( this.getId() + '-left' ):
		// Click on left end
			// In HCB design, the Bar is very small so the left-hand area is behind the bar and clickable.
			var iOffsetBar = jQuery(this.oBar).offset();
			var iOffsetMe  = jQuery(oEvent.target).offset();
			iNewPos = oEvent.getOffsetX() - ( iOffsetBar.left - iOffsetMe.left );
			if( iNewPos < 0 ){
				iNewPos = 0;
			}
			fNewValue = this.getMin() + ( ( ( this.getMax() - this.getMin() )  / this.oBar.clientWidth ) * iNewPos );

			break;
		case ( this.getId() + '-right' ):
		// Click on right end
			// In HCB theme, there is a margin on the left-hand side, so the left div starts not at the left end.
			// In this case, the offset must be < than the width of the bar -> left-hand side
			if( oEvent.getOffsetX() < this.oBar.clientWidth ){
				fNewValue = this.getMin();
				// new position = 0
				iNewPos = 0 ;
			}else{
				fNewValue = this.getMax();
				// new position = max. width
				iNewPos = this.oBar.clientWidth ;
			}
			break;
		case ( this.oGrip.id ):
		// Grip position must not be changed when grip is only clicked
			return;
			break;
		default:
		// Check whether tick is clicked
			var iTickPos = sMyTargetId.search('-tick');
			if( iTickPos >= 0){
				var iTickNum = parseInt( sMyTargetId.slice( this.getId().length+5), 10);
				iNewPos = this.fTickDist * iTickNum;
				fNewValue = this.getMin() + ( ( ( this.getMax() - this.getMin() ) / this.getTotalUnits() ) * iTickNum );

				break;
			}

		// Outer DIV clicked -> ID given by caller. This is the case if all other DIVs are smaller,
		// or if tick text is clicked
			var iOffsetBar = jQuery(this.oBar).offset();
			var iOffsetMe  = jQuery(oEvent.target).offset();
			iNewPos = oEvent.getOffsetX() - ( iOffsetBar.left - iOffsetMe.left );
			if( iNewPos <= 0 ){
				iNewPos = 0;
				fNewValue = this.getMin();
			}else{
				if( iNewPos >= this.oBar.clientWidth ){
					iNewPos = this.oBar.clientWidth;
					fNewValue = this.getMax();
				}else{
					fNewValue = this.getMin() + ( ( ( this.getMax() - this.getMin() )  / this.oBar.clientWidth ) * iNewPos );
				}
			}
			break;
		}

		this.changeGrip(fNewValue, iNewPos);
		this.handleFireChange();
	}

	// Set focus to grip
	this.oGrip.focus();

};

/**
 * Function is called when Slider is clicked
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onmousedown = function(oEvent) {
	if (this.getEditable() && this.getEnabled()){

		// Check for ID. This is only possible on the grip.
		var sMyTargetId = oEvent.target.getAttribute( 'ID' );

		if( sMyTargetId == this.oGrip.id ){
			this.bGripMousedown = true;

			// Remember start coordinates
			this.iStartDragX = oEvent.pageX;
			this.iStartDragY = oEvent.pageY;
			this.iStartLeft  = this.oGrip.offsetLeft + this.iShiftGrip;

			var oThat = this;
			this.handleMoveCall = function (event){
				oThat.handleMove(event);
			};

			jQuery(window.document).bind('mousemove', this.handleMoveCall);
			jQuery.sap.bindAnyEvent(jQuery.proxy(this.onAnyEvent, this));
		}
	}
};

/**
 * Function is called when Slider is unclicked
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onmouseup = function(oEvent) {
	if (this.getEditable() && this.getEnabled()){

		// Mouseup is handled on every div, not only on grip

		this.bGripMousedown = false;

		if (this.handleMoveCall) {
			jQuery(window.document).unbind('mousemove', this.handleMoveCall);
			jQuery.sap.unbindAnyEvent(this.onAnyEvent);

			if ( this.iStartLeft != ( this.oGrip.offsetLeft + this.iShiftGrip )){
				// Only if position was changed
				// only fire change event because liveChange is already fired in handleMove
				this.fireChange({value: this.getValue()});
			}

			this.handleMoveCall = null;
			this.iStartDragX    = null;
			this.iStartDragY    = null;
			this.iStartLeft     = null;

		}
	}

};

/**
 * Function is called when Slider is moved
 *
 * @param {DOM.Event} Event
 * @private
 */
sap.ui.commons.Slider.prototype.handleMove = function(event) {

	if (this.getEditable() && this.getEnabled() && this.bGripMousedown ){

		event = event || window.event;

		// Move is handled on every div, not only on grip

		var iNewPos = this.iStartLeft + event.pageX - this.iStartDragX;

		if( iNewPos <= 0 ){
			iNewPos = 0 ;
			var fNewValue = this.getMin();
		}else{
			if ( iNewPos >= this.oBar.clientWidth ){
				iNewPos = this.oBar.clientWidth ;
				var fNewValue = this.getMax();
			}else{
				var fNewValue = this.getMin() + ( ( ( this.getMax() - this.getMin() )  / this.oBar.clientWidth ) * iNewPos ) ;
			}
		}
		var fOldValue = this.getValue();
		this.changeGrip(fNewValue, iNewPos);
		fNewValue = this.getValue(); // get new value considering step width

		if ( fOldValue != fNewValue ){
			// fire event only if value changed
			this.fireLiveChange( { value: fNewValue } );
		}
	}

	event.cancelBubble = true;

	return false;

};

/**
 * Handles all events that occur outside the Popup and
 * dispatches it to the onOuterEvent
 * @param {jQuery.EventObject} oEvent The event object of the ui.core framework
 * @private
 */
sap.ui.commons.Slider.prototype.onAnyEvent = function (oEvent) {

	jQuery.sap.log.info('onAnyEvent fired: "' + oEvent.type + '"');

	// Skip if not editable or no drag operation in progress
	if ((!this.getEditable()) || (!this.getEnabled()) || !this.bGripMousedown){
		return;
	}

	// Every event that is not mousemove or mouseover is interpreted as mouseup
	if( oEvent.type == 'mouseover' || oEvent.type == 'mouseout' || oEvent.type == 'mousemove'  || oEvent.type == 'focusout' ){
		return;
	}

	// Check if outside of control
	var oSource = oEvent.target;
	if (!jQuery.sap.containsOrEquals(this.oDomRef,oSource) || oSource.tagName=="BODY") {
		this.onmouseup(oEvent);
	}

};

/**
 * Function is called when right arrow is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapright = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		var fNewValue = this.getValue();
		var iNewPos   = this.oGrip.offsetLeft + this.iShiftGrip;

		if(this.bRtl){
			// In the case of RTL, simulate non-RTL value (changed back in changeGrip)
			fNewValue = this.getMax() - fNewValue + this.getMin();
		}

		if(this.getSmallStepWidth() > 0){
			// Step defined -> shift grip one step; at least one pixel, if step < 1px
			var fStepPixel = this.oBar.clientWidth / ( this.getMax() - this.getMin() ) * this.getSmallStepWidth();

			if(fStepPixel > 1){
				fNewValue = fNewValue + this.getSmallStepWidth();
				iNewPos   = iNewPos + fStepPixel;
			}else{
				// Step < 1px -> shift grip to next step that is 1 pixel away
				fNewValue = fNewValue + ( 1 / fStepPixel * this.getSmallStepWidth() );
				iNewPos   = iNewPos + 1;
			}
		}else{
			// No step defined -> shift grip 1 pixel
			fNewValue = fNewValue + ( ( this.getMax() - this.getMin() ) / this.oBar.clientWidth );
			iNewPos   = iNewPos + 1;
		}

		if ( fNewValue >= this.getMax() || iNewPos >= this.oBar.clientWidth ){
			fNewValue = this.getMax();
			iNewPos   = this.oBar.clientWidth;
		}

		this.changeGrip(fNewValue, iNewPos);
		this.handleFireChange();

	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when left arrow is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapleft = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		var fNewValue = this.getValue();
		var iNewPos   = this.oGrip.offsetLeft + this.iShiftGrip;

		if(this.bRtl){
			// In the case of RTL, simulate non-RTL Value (changed back in changeGrip)
			fNewValue = this.getMax() - fNewValue + this.getMin();
		}

		if(this.getSmallStepWidth() > 0){
			// Step defined -> shift grip one step (at least one pixel, if step < 1px)
			var fStepPixel = this.oBar.clientWidth / ( this.getMax() - this.getMin() ) * this.getSmallStepWidth();

			if(fStepPixel > 1){
				fNewValue = fNewValue - this.getSmallStepWidth();
				iNewPos   = iNewPos - fStepPixel;
			}else{
				fNewValue = fNewValue - ( 1 / fStepPixel * this.getSmallStepWidth() );
				iNewPos   = iNewPos - 1;
			}
		}else{
			// No step defined -> shift grip one pixel
			fNewValue = fNewValue - ( ( this.getMax() - this.getMin() ) / this.oBar.clientWidth );
			iNewPos   = iNewPos - 1;
		}

		if ( fNewValue <= this.getMin() || iNewPos <= 0 ){
			fNewValue = this.getMin();
			iNewPos   = 0;
		}

		this.changeGrip(fNewValue, iNewPos);
		this.handleFireChange();

	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when up arrow is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapup = function(oEvent) {

	if(!this.bRtl){
		// Normal case - UP similar to left
		this.onsapleft(oEvent);
	}else{
		// RTL case - UP similar to right
		this.onsapright(oEvent);
	}

};

/**
 * Function is called when DOWN arrow is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapdown = function(oEvent) {

	if(!this.bRtl){
		// Normal case - DOWN similar to right
		this.onsapright(oEvent);
	}else{
		// RTL case - DOWN similar to left
		this.onsapleft(oEvent);
	}

};

/**
 * Function is called when "+" is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapexpand = function(oEvent) {

	if(!this.bRtl){
		// Normal case - "+" similar to right
		this.onsapright(oEvent);
	}else{
		// RTL case - "+" similar to left
		this.onsapleft(oEvent);
	}

};

/**
 * Function is called when "-" is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapcollapse = function(oEvent) {

	if(!this.bRtl){
		// Normal case - "-" similar to left
		this.onsapleft(oEvent);
	}else{
		// RTL case - "-" similar to right
		this.onsapright(oEvent);
	}

};

/**
 * Function is called when Home key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsaphome = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		if(!this.bRtl){
			// Normal case - Min. is left
			var fNewValue = this.getMin();
			var iNewPos   = 0;
		}else{
			// RTL case - Min. is right
			var fNewValue = this.getMax(); // Because it is switched in changeGrip
			var iNewPos   = this.oBar.clientWidth;
		}

		this.changeGrip(fNewValue, iNewPos);
		this.handleFireChange();

	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when End key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapend = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		if(!this.bRtl){
			// Normal case - Min. is left
			var fNewValue = this.getMax();
			var iNewPos   = this.oBar.clientWidth;
		}else{
			// RTL case - Min. is right
			var fNewValue = this.getMin(); // Because it is switched in changeGrip
			var iNewPos   = 0;
		}

		this.changeGrip(fNewValue, iNewPos);
		this.handleFireChange();

	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when Ctrl+right key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsaprightmodifiers = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		if(!this.fPageSize){
			if(this.getTotalUnits() > 0){
				this.fPageSize = ( this.getMax() - this.getMin() ) / this.getTotalUnits();
			}else{
				this.fPageSize = ( this.getMax() - this.getMin() ) / 10;
			}
		}

		if(!this.bRtl){
			var fNewValue = this.getValue() + this.fPageSize;
		}else{
			var fNewValue = this.getMax() - this.getValue() + this.getMin() + this.fPageSize;
		}
		// Calculate iNewPos from fNewValue to prevent rounding errors after repeating pageUps
		var iNewPos   = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.oBar.clientWidth ;

		if ( fNewValue >= this.getMax() || iNewPos >= this.oBar.clientWidth ){
			fNewValue = this.getMax();
			iNewPos   = this.oBar.clientWidth;
		}

		this.changeGrip(fNewValue, iNewPos);
		this.handleFireChange();
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when Ctrl+left key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapleftmodifiers = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		if(!this.fPageSize){
			if(this.getTotalUnits() > 0){
				this.fPageSize = ( this.getMax() - this.getMin() ) / this.getTotalUnits();
			}else{
				this.fPageSize = ( this.getMax() - this.getMin() ) / 10;
			}
		}

		if(!this.bRtl){
			var fNewValue = this.getValue() - this.fPageSize;
		}else{
			var fNewValue = this.getMax() - this.getValue() + this.getMin() - this.fPageSize;
		}
		// Calculate iNewPos from fNewValue to prevent rounding errors after repeating pageDowns
		var iNewPos   = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.oBar.clientWidth ;

		if ( fNewValue <= this.getMin() || iNewPos <= 0 ){
			fNewValue = this.getMin();
			iNewPos   = 0;
		}
		this.changeGrip(fNewValue, iNewPos);
		this.handleFireChange();
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when Ctrl+down key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapdownmodifiers = function(oEvent) {

	if(!this.bRtl){
		// Normal case - DOWN similar to right
		this.onsaprightmodifiers(oEvent);
	}else{
		// RTL case - DOWN similar to left
		this.onsapleftmodifiers(oEvent);
	}

};

/**
 * Function is called when Ctrl+Up key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapupmodifiers = function(oEvent) {

	if(!this.bRtl){
		// Normal case - UP similar to left
		this.onsapleftmodifiers(oEvent);
	}else{
		// RTL case - UP similar to right
		this.onsaprightmodifiers(oEvent);
	}

};

/**
 * Function is called when window is resized
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onresize = function(oEvent) {

	// If width of control changed -> grip position must be newly calculated

	var fNewValue = this.getValue();

	if(this.bRtl){
		// In the case of RTL case, simulate non-RTL Value (changed back in changeGrip)
		fNewValue = this.getMax() - fNewValue + this.getMin();
	}

	var iNewPos   = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.oBar.clientWidth ;

	this.changeGrip(fNewValue, iNewPos);

	// Calculate tick positions newly
	if(this.getTotalUnits() > 0 && this.getDomRef()){ // only if rendered
		// Move ticks to correct position; put it in the middle
		// Round value shift factor separately to have the same behaviour like for grip position
		var oTick = null;
		var oText = null;
		this.fTickDist = this.oBar.clientWidth / this.getTotalUnits();
		for (var i = 0; i <= this.getTotalUnits(); i++){
			oTick = jQuery.sap.domById(this.getId() + '-tick' + i);
			oTick.style.left = Math.round( ( this.fTickDist * i)) - Math.round(( oTick.offsetWidth / 2) ) + 'px';

			if( this.getStepLabels() && i > 0 && i < this.getTotalUnits()){
				oText = jQuery.sap.domById(this.getId() + '-text' + i);
				if(this.getSmallStepWidth() > 0 && this.iDecimalFactor > 0){
					jQuery(oText).text(Math.round( parseFloat(jQuery(oText).text()) * this.iDecimalFactor ) / this.iDecimalFactor);
				}
				if(!this.bRtl){
					oText.style.left = Math.round( ( this.fTickDist * i)) - Math.round(( oText.offsetWidth / 2) ) + 'px';
				}else{
					oText.style.left = Math.round( ( this.fTickDist * (this.getTotalUnits()-i))) - Math.round(( oText.offsetWidth / 2) ) + 'px';
				}
			}
		}
	}

};

/**
 * Called after the theme has been switched. Some adjustments required.
 * @private
 */
sap.ui.commons.Slider.prototype.onThemeChanged = function (oEvent) {

	// Get left shift for middle of grip. Use offsetWidth to include borders. Round to prevent calculation errors.
	this.iShiftGrip = Math.round(this.oGrip.offsetWidth / 2);

	// Use resize function to adjust grip and ticks
	this.onresize();

};

/**
 * Function is called when grip position shall be changed
 *
 * @param fNewValue iNewPos
 * @private
 */
sap.ui.commons.Slider.prototype.changeGrip = function(fNewValue, iNewPos) {

	// Only if position was changed
	if ( iNewPos != ( this.oGrip.offsetLeft + this.iShiftGrip ) ){

		if( this.getSmallStepWidth() > 0 ){
			// Move grip according to step-width
			var iStepNum   = parseInt( ( fNewValue - this.getMin() ) / this.getSmallStepWidth() , 10);
			var fLeftStep  = ( iStepNum * this.getSmallStepWidth() ) + this.getMin();
			var fRightStep = ( ( iStepNum + 1 ) * this.getSmallStepWidth() ) + this.getMin();

			if ( fRightStep > this.getMax() ){
				fRightStep = this.getMax();
			}

			var fStepPixel = this.oBar.clientWidth / ( this.getMax() - this.getMin() ) * this.getSmallStepWidth();

			if( ( fNewValue - fLeftStep ) < ( fRightStep - fNewValue ) ){
				fNewValue = fLeftStep;
				iNewPos   = iStepNum * fStepPixel;
			}else{
				fNewValue = fRightStep;
				iNewPos   = ( iStepNum + 1 ) * fStepPixel;
				if ( iNewPos > this.oBar.clientWidth ){
					iNewPos = this.oBar.clientWidth;
				}
			}
			// Round value because of calculation errors in JavaScript
			fNewValue = Math.round( fNewValue * this.iDecimalFactor ) / this.iDecimalFactor;
		}

		if(this.bRtl){
			// In the case of RTL, the value must be changed because min. and max. are switched
			fNewValue = this.getMax() - fNewValue + this.getMin();
		}

		this.setProperty( 'value', fNewValue, true ); // Do not render complete control again
		this.oGrip.title = fNewValue;
		// Reduce position with half grip-width to center the grip. Round because Internet Explorer does not round automatically.
		this.oGrip.style.left = Math.round(iNewPos - this.iShiftGrip) + 'px';

		// Adjust highlight bar
		if(this.bRtl){
			// In the case of RTL, highlight must be on right side
			this.oHiLi.style.width = this.oBar.clientWidth - Math.round(iNewPos) + 'px';
		}else{
			this.oHiLi.style.width = Math.round(iNewPos) + 'px';
		}

		if(this.bAcc){
			this.setAriaState();
		}
	}

};

/**
 * Function to calculate the decimals of a value
 *
 * Problem:  If the step-width has decimals in JavaScript, there are calculation errors.
 *           e.g. 2.01*10= 20.099999999999998 instead of 20.1
 *           This is not sufficient as result for the value of sliding step-wise.
 *           Therefore the value is rounded with the numbers of decimals the step-width has.
 *           This is not possible using the modulo or any other Math function because
 *           of the mentioned calculation error.
 * Solution: The idea is to search for the "." in the string and to calculate the rounding factor.
 *
 * @param {DOM.Event} Event
 * @private
 */
sap.ui.commons.Slider.prototype.calcDecimalFactor = function(Value) {

	var iFactor = 1;

	if( !( Value > 0 )){
		return iFactor;
	}

	var sMyString = String( Value );

	if( sMyString.indexOf( '.' ) >= 0 ){
		// Number of decimals = length of all numbers after the "." Subtract the numbers before the "." and the "." itself.
		var iMyExp = sMyString.length - sMyString.indexOf( '.' ) - 1;
	}else{
		if( sMyString.indexOf( 'e-' ) >= 0 ){
			// Floating point number -> number of decimals is number after "e-"
			var iMyExp = sMyString.slice(sMyString.indexOf( 'e-' ) + 2);
		}else{
			return iFactor;
		}
	}

	for (var i = 1; i <= iMyExp; i++){
		iFactor = iFactor * 10;
	}

	return iFactor;

};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the editable state
 *
 * @param bEditable Whether the Slider should be editable, or not (read-only then)
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Slider.prototype.setEditable = function(bEditable) {

	this.setProperty('editable', bEditable, true); // No re-rendering

	if (this.oDomRef && this.getEnabled()){
		// If already rendered, adapt rendered control without complete re-rendering
		if (bEditable) {
			jQuery(this.oDomRef).removeClass('sapUiSliRo').addClass('sapUiSliStd');
			if(this.bAcc){
				jQuery(this.oGrip).attr('aria-disabled', false);
			}
		} else {
			jQuery(this.oDomRef).removeClass('sapUiSliStd').addClass('sapUiSliRo');
			if(this.bAcc){
				jQuery(this.oGrip).attr('aria-disabled', true);
			}
		}
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the enabled state
 *
 * @param bEnabled Whether the Slider should be ednabled, or not (disabled)
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Slider.prototype.setEnabled = function(bEnabled) {

	this.setProperty('enabled', bEnabled, true); // No re-rendering

	if (this.oDomRef){
		// If already rendered, adapt rendered control without complete re-rendering
		jQuery(this.oDomRef).toggleClass('sapUiSliDsbl', !bEnabled);
		if( bEnabled ){
			jQuery(this.oGrip).attr('tabindex', '0');
			// set classes according editable state
			if (this.getEditable()) {
				jQuery(this.oDomRef).addClass('sapUiSliStd');
				if(this.bAcc){
					jQuery(this.oGrip).attr('aria-disabled', false);
				}
			} else {
				jQuery(this.oDomRef).addClass('sapUiSliRo');
				if(this.bAcc){
					jQuery(this.oGrip).attr('aria-disabled', true);
				}
			}
		}else{
			jQuery(this.oGrip).attr('tabindex', '-1').attr('aria-disabled', true);
			if (this.getEditable()) {
				jQuery(this.oDomRef).removeClass('sapUiSliStd');
			} else {
				jQuery(this.oDomRef).removeClass('sapUiSliRo');
			}
		}
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the totalUnits state
 *
 * @param iTotalUnits Number of the units (tick-spaces)
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Slider.prototype.setTotalUnits = function(iTotalUnits) {

	this.setProperty('totalUnits', iTotalUnits, false); // Do re-rendering

	// Clear this.fPageSize -> must be re-calculated
	this.fPageSize = false;

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the value
 * A new rendering is not necessary, only the grip must be moved.
 *
 * @param fValue
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Slider.prototype.setValue = function(fValue) {

	this.setProperty('value', fValue, true); // No re-rendering

	// Check for number -> if NaN -> no change
	if( isNaN(fValue) ){
		return this;
	}

	if(!this.oBar){
		// Not already rendered -> return and render
		return this;
	}

	var fNewValue = parseFloat( fValue );

	if(this.bRtl){
		// In the case of RTL case, simulate non-RTL Value (changed back in changeGrip)
		fNewValue = this.getMax() - fNewValue + this.getMin();
	}

	if( fNewValue >= this.getMax() ){
		fNewValue   = this.getMax();
		var iNewPos = this.oBar.clientWidth;
	}else{
		if( fNewValue <= this.getMin() ){
			fNewValue   = this.getMin();
			var iNewPos = 0;
		}else{
			var iNewPos = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.oBar.clientWidth ;
		}
	}

	this.changeGrip( fNewValue, iNewPos );

	return this;

};

/**
 * fires the change event. The liveChange event must be fired too if the change event is fired.
 *
 * @private
 */
sap.ui.commons.Slider.prototype.handleFireChange = function() {
	this.fireChange({value: this.getValue()});
	this.fireLiveChange({value: this.getValue()});
};

/**
 * Updates the ARIA state initially and in case of changes.
 *
 * @private
 */
sap.ui.commons.Slider.prototype.setAriaState = function() {

	var fValue = this.getValue();

	this.oGrip.setAttribute('aria-valuenow', fValue);
	this.oGrip.setAttribute('aria-valuetext', 'Value ' + fValue); // to prevent JAWS from saying "percent"

};

/*
 * Overrides getFocusDomRef of base element class.
 * @public
 */
sap.ui.commons.Slider.prototype.getFocusDomRef = function() {
	return this.oGrip;
};

/*
 * Overwrites default implementation
 * the label must point to the grip
 * @public
 */
sap.ui.commons.Slider.prototype.getIdForLabel = function () {
	return this.getId()+'-grip';
};