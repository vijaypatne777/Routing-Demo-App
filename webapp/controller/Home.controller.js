sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
], function (Controller,msg,Filter,FilterOperator) {
	"use strict";

	return Controller.extend("RoutingDemo.RoutingDemo.controller.Home", {
		onInit: function () {
			this._sarr = [];
			this._sObj = {
				"rec": this._sarr
			};
        var smodel = this.getOwnerComponent().getModel();
        var that = this;
        var oFilters = [];
        var keyF = new Filter("SalesOrganization", FilterOperator.EQ, "US01");
				oFilters.push(keyF);
        smodel.read('/A_SalesOrder',{
        	filters: oFilters,
            urlParameters: "$top=100",
        	success: function (oResponse)
        	{
        			for (var t = 0; t < oResponse.results.length; t++) {
								var tobj = {};
								tobj.SalesOrder = oResponse.results[t].SalesOrder;
								tobj.SalesOrg = oResponse.results[t].SalesOrganization;
								tobj.Dchnl = oResponse.results[t].DistributionChannel;
								tobj.Div = oResponse.results[t].OrganizationDivision;
								
								that._sarr.push(tobj);

							}
			  that._sObj.rec = that._sarr;
			  var nmodel = new sap.ui.model.json.JSONModel();
			  nmodel.setData(that._sObj);
			  var tobj = that.byId("stable");
			  tobj.setModel(nmodel);
        	},
        	error: function(oError)
        		{
        			
        		}}
        	);
		},
		handlePress: function (){
			  var tobj = this.byId("stable");
			var titem = tobj.getSelectedItem();
			var binditem = titem.getBindingContext();
			var sno = binditem.getProperty("SalesOrder");
			this.getOwnerComponent().getRouter().navTo("SalesList" ,
			                                            { sord: sno});
//	this.getOwnerComponent().getRouter().getTargets().display("notfound");
	//		msg.information("Naigation button is pressed");
		}
	});
});