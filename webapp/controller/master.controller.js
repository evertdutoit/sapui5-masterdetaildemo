sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("edt.masterDetailDemo.controller.master", {
		onInit: function () {

		},
		showDetails: function(oEvt) {
			var sClickedData = oEvt.getSource().getTitle();
			var oData = oEvt.getSource().getModel("animals").getData();
			var oNewData = [];
			
			for (var i = 0; i < oData.names.length; i++) {
				if (oData.names[i].Name === sClickedData) {
					oNewData.push(oData.names[i]);
					break;
				}
			}
			
			var oComp = this.getOwnerComponent();
			oComp.setModel(new sap.ui.model.json.JSONModel(oNewData), "table"); 
			
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("detailView");

		}
	});
});