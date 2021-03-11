sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/core/routing/History"
], function (Controller,msg,History) {
	"use strict";

	return Controller.extend("RoutingDemo.RoutingDemo.controller.notfound", {
		onInit: function () {
        
		},
		goback: function(){
		var oHistory = 	History.getInstance();
		var pHash = oHistory.getPreviousHash();
		if (pHash != undefined)
		{
			window.history.go(-1);
		}
		else
		{
			this.getOwnerComponent().getRouter().navTo("RouteHome",{},true);
		}
		} 
	});
});