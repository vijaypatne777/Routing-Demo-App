sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller,msg) {
	"use strict";

	return Controller.extend("RoutingDemo.RoutingDemo.controller.SalesData", {
		onInit: function () {
        this.getOwnerComponent().getRouter().getRoute("SalesList").attachMatched(this.onDetails,this);
		},
		gohome: function(){
//		this.getOwnerComponent().getRouter().getTargets().display("TargetHome");
	        this.getOwnerComponent().getRouter().navTo("RouteHome");
		},
		onDetails: function(oEvent){
		var oarg = oEvent.getParameter("arguments");
		var oview = this.getView();
		oview.bindElement({path: '/A_SalesOrder(' + "'" + oarg.sord + "'" +')'  ,
			               events: {
			               	dataRequested: function(oEvent)
			               	{
			               		oview.setBusy(true);
			               	},
			               	dataReceived: function(oEvent)
			               	{
			               		oview.setBusy(false);
			               	}
			               }  
		});
		}
		
	});
});