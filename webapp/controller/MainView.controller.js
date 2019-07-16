sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("assurityLabTestAppinsuredLabTest.controller.MainView", {
		
		dTTLayout : null,
		
		onInit: function () {
		
			this.oFuncOverview = new sap.ui.model.json.JSONModel("model/labTestsOData.json");
			this.getView().setModel(this.oFuncOverview);
			
		},
		
		updateDate : function(){
			
			MessageToast.show("A");
			
		},
		
		 _fragmentDialog : function() {
            // create a fragment with dialog, and pass the selected data
            if (!this.dTTLayout) {
                // This fragment can be instantiated from a controller as follows:
                this.dTTLayout = sap.ui.xmlfragment(
                					"fragment",
                					"assurityLabTestAppinsuredLabTest.view.Fragment",
                					this);
                //debugger;
            }
            //debugger;
            return this.dTTLayout;
        },
        
        openFragment : function () {
        	this._fragmentDialog().open();
        }
		
		
	});
});