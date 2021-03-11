sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/viz/ui5/format/ChartFormatter",
	"sap/viz/ui5/api/env/Format",
	"com/Air/Inventory/Inventory_Dashboard/model/formatter"
], function (Controller, History, ChartFormatter, Format, formatter) {
	"use strict";

	return Controller.extend("com.Air.Inventory.Inventory_Dashboard.controller.Actual", {
		formatter: formatter,

		onInit: function () {

			this.MonthlyRejDispatch();
		},
		MonthlyRejDispatch: function () {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/MonthlyRejectionDispatchSet", {

				//filters: [countryFilter],
				success: function (oData) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					this.getView().getModel("visibleModel").setProperty("/MonthlyRej", oData.results);
					this._buildchartforMonthlyRej();
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_buildchartforMonthlyRej: function () {
			var oVizframeMonthlyrej = this.getView().byId("idVizFrameColumnMonrej");
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;

			// vizProperties="{title:{ text: 'Production and Plant Inventory Details'},valueAxis : {label : {visible : true }}, plotArea : {drawingEffect: 'glossy',dataPointSize: {min : 5},dataLabel: { visible: true, showTotal: true }} }"
			oVizframeMonthlyrej.setVizProperties({
				plotArea: {
					drawingEffect: 'glossy',
					dataPointSize: {
						min: 5
					},
					dataLabel: {
						visible: true,
						showTotal: true,
						formatString: formatPattern.SHORTFLOAT_MFD2
					}
				},
				// valueAxis: {
				// 	label: {
				// 		formatString: formatPattern.SHORTFLOAT
				// 	},
				// 	title: {
				// 		text: "NOS.",
				// 		visible: true
				// 	}
				// },
				// categoryAxis: {
				// 	// label: {
				// 	// 	formatString: formatPattern.SHORTFLOAT_MFD2
				// 	// },
				// 	title: {
				// 		visible: true
				// 	}
				// },
				title: {
					visible: false,
					text: ''
				}
			});
			var oPopOver = this.getView().byId("idPopOversbp");
			oPopOver.connect(oVizframeMonthlyrej.getVizUid());
			oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("InventoryDashboard", true);
			}

		},
		onSelectLineChart: function (oEvent) {
			var sId = oEvent.getSource().getId().split("--")[1];
			var MeasuresName = oEvent.getParameter("data")[0].data.measureNames;
			if (MeasuresName === "GRN") {

				this.getOwnerComponent().getRouter().navTo("TransactionControl");
			}
		}

	});

});