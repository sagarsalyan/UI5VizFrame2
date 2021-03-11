sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/viz/ui5/format/ChartFormatter",
	"sap/viz/ui5/api/env/Format"
], function (Controller, History, ChartFormatter, Format) {
	"use strict";

	return Controller.extend("com.Air.Inventory.Inventory_Dashboard.controller.SubConInventory", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.Air.Inventory.Inventory_Dashboard.view.SubConInventory
		 */

		onInit: function () {

			var ChartDataModelforSubCon = new sap.ui.model.json.JSONModel({
				// chartDataPI: this.MISColumnPI,
				LineDataPI: this.LineDataPI,
				VendorWiseDataPI: this.VendorWiseDataPI
					// matchedSetDataPI: this.matchedSetDataPI,
					// subConDataPI: this.subConDataPI
			});
			this.getView().setModel(ChartDataModelforSubCon, "ChartDataModelforSubCon");
			/////////////////////// VIZ FRAME for Current Month Plant wise Inventory Trends //////////////////////
			var oVizframe1sbCon = this.getView().byId("idSubconPlntwise");
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			debugger;
			// vizProperties="{title:{ text: 'Production and Plant Inventory Details'},valueAxis : {label : {visible : true }}, plotArea : {drawingEffect: 'glossy',dataPointSize: {min : 5},dataLabel: { visible: true, showTotal: true }} }"
			oVizframe1sbCon.setVizProperties({
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
				valueAxis: {
					label: {
						formatString: formatPattern.SHORTFLOAT
					},
					title: {
						text: "Value in Lakhs",
						visible: true
					}
				},
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
					text: 'Monthly Plant Wise Inventory Trend'
				}
			});
			////////////////// Vendor Wise Graph
			// onInit: function () {

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
		onSelectLineChartSubCon: function (oEvent) {
			var plant = oEvent.getParameter("data")[0].data.measureNames;
			if (plant === "ORG" || plant === "VVL") {
				if (!this.vendorWise) {
					this.vendorWise = sap.ui.xmlfragment("com.Air.Inventory.Inventory_Dashboard.view.SubConVendorWise", this);
					this.getView().addDependent(this.vendorWise);

				}
				this.vendorWise.open();
				Format.numericFormatter(ChartFormatter.getInstance());
				var formatPattern = ChartFormatter.DefaultPattern;
				var oVizframeVendorwise = sap.ui.getCore().byId("idSubconVendorwise");
				oVizframeVendorwise.setVizProperties({
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
					valueAxis: {
						label: {
							formatString: formatPattern.SHORTFLOAT
						},
						title: {
							text: "Value in Lakhs",
							visible: true
						}
					},
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
						text: 'Monthly Plant Wise Inventory Trend'
					}
				});
				if (plant === "ORG") {
					var plnatName = "Oragadam"
				}
				if (plant === "VVL") {
					var plnatName = "Vallam"
				}
				sap.ui.getCore().byId("idsubconvend").setTitle(plnatName + " Sub Con Vendor Wise Inventory Details");
			}

		},
		_onCancelVendorWiseFragment: function () {
			this.vendorWise.close();

		}

	});

});