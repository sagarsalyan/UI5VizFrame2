sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/viz/ui5/format/ChartFormatter",
	"sap/viz/ui5/api/env/Format"
], function (Controller, History, ChartFormatter, Format) {
	"use strict";

	return Controller.extend("com.Air.Inventory.Inventory_Dashboard.controller.ModelMatchedSet", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.Air.Inventory.Inventory_Dashboard.view.ModelMatchedSet
		 */
		LineDataModMatch: [{
			"Week": "Bullet - 350",
			"Revenue": 431000.22,
			"Cost": 230000,
			"Cost1": 24800.63,
			"Cost2": 205199.37,
			"Cost3": 199999.37,
			"Target": 500000,
			"Budget": 210000
		}, {
			"Week": "Bullet X - KS",
			"Revenue": 494000.3,
			"Cost": 238000,
			"Cost1": 99200.39,
			"Cost2": 138799.61,
			"Cost3": 200199.37,
			"Target": 500000,
			"Budget": 224000
		}, {
			"Week": "Bullet X - ES",
			"Revenue": 491000.17,
			"Cost": 221000,
			"Cost1": 70200.54,
			"Cost2": 150799.46,
			"Cost3": 80799.46,
			"Target": 500000,
			"Budget": 238000
		}, {
			"Week": "TBTS - 350",
			"Revenue": 536000.34,
			"Cost": 280000,
			"Cost1": 158800.73,
			"Cost2": 121199.27,
			"Cost3": 108800.46,
			"Target": 500000,
			"Budget": 252000
		}, {
			"Week": "Classic - 350",
			"Revenue": 675000,
			"Cost": 230000,
			"Cost1": 140000.91,
			"Cost2": 89999.09,
			"Cost3": 100099.09,
			"Target": 600000,
			"Budget": 266000
		}, {
			"Week": "Himalayan",
			"Revenue": 680000,
			"Cost": 250000,
			"Cost1": 172800.15,
			"Cost2": 77199.85,
			"Cost3": 57199.85,
			"Target": 600000,
			"Budget": 280000
		}, {
			"Week": "PIF",
			"Revenue": 659000.14,
			"Cost": 325000,
			"Cost1": 237200.74,
			"Cost2": 87799.26,
			"Cost3": 187799.26,
			"Target": 600000,
			"Budget": 294000
		}, {
			"Week": "PIE",
			"Revenue": 610000,
			"Cost": 350000,
			"Cost1": 243200.18,
			"Cost2": 106799.82,
			"Cost3": 206799.82,
			"Target": 600000,
			"Budget": 308000
		}],
		MISColumnPI: [{
			"Week": "Mar 17",
			"Revenue": 431000.22,
			"Cost": 230000,
			"Cost1": 24800.63,
			"Cost2": 205199.37,
			"Cost3": 199999.37,
			"Target": 500000,
			"Budget": 210000
		}, {
			"Week": "Mar 18",
			"Revenue": 494000.3,
			"Cost": 238000,
			"Cost1": 99200.39,
			"Cost2": 138799.61,
			"Cost3": 200199.37,
			"Target": 500000,
			"Budget": 224000
		}, {
			"Week": "Mar 19",
			"Revenue": 491000.17,
			"Cost": 221000,
			"Cost1": 70200.54,
			"Cost2": 150799.46,
			"Cost3": 80799.46,
			"Target": 500000,
			"Budget": 238000
		}],
		LineDataPlantwise: [{
			"Week": "APR 19",
			"Revenue": 431000.22,
			"Cost": 230000,
			"Cost1": 24800.63,
			"Cost2": 205199.37,
			"Cost3": 199999.37,
			"Target": 500000,
			"Budget": 210000
		}, {
			"Week": "MAY 19",
			"Revenue": 494000.3,
			"Cost": 238000,
			"Cost1": 99200.39,
			"Cost2": 138799.61,
			"Cost3": 200199.37,
			"Target": 500000,
			"Budget": 224000
		}, {
			"Week": "JUNE 19",
			"Revenue": 491000.17,
			"Cost": 221000,
			"Cost1": 70200.54,
			"Cost2": 150799.46,
			"Cost3": 80799.46,
			"Target": 500000,
			"Budget": 238000
		}, {
			"Week": "JULY 19",
			"Revenue": 536000.34,
			"Cost": 280000,
			"Cost1": 158800.73,
			"Cost2": 121199.27,
			"Cost3": 108800.46,
			"Target": 500000,
			"Budget": 252000
		}, {
			"Week": "AUG 19",
			"Revenue": 675000,
			"Cost": 230000,
			"Cost1": 140000.91,
			"Cost2": 89999.09,
			"Cost3": 100099.09,
			"Target": 600000,
			"Budget": 266000
		}, {
			"Week": "SEP 19",
			"Revenue": 680000,
			"Cost": 250000,
			"Cost1": 172800.15,
			"Cost2": 77199.85,
			"Cost3": 57199.85,
			"Target": 600000,
			"Budget": 280000
		}, {
			"Week": "OCT 19",
			"Revenue": 659000.14,
			"Cost": 325000,
			"Cost1": 237200.74,
			"Cost2": 87799.26,
			"Cost3": 187799.26,
			"Target": 600000,
			"Budget": 294000
		}, {
			"Week": "NOV 19",
			"Revenue": 610000,
			"Cost": 350000,
			"Cost1": 243200.18,
			"Cost2": 106799.82,
			"Cost3": 206799.82,
			"Target": 600000,
			"Budget": 308000
		}, {
			"Week": "DEC 19",
			"Revenue": 800000.63,
			"Cost": 450000,
			"Cost1": 320000.08,
			"Cost2": 129999.92,
			"Cost3": 409199.76,
			"Target": 700000,
			"Budget": 336000
		}, {
			"Week": "JAN 20",
			"Revenue": 881000.19,
			"Cost": 480000,
			"Cost1": 360800.09,
			"Cost2": 119199.91,
			"Cost3": 210109.01,
			"Target": 700000,
			"Budget": 350000
		}, {
			"Week": "FEB 20",
			"Revenue": 904000.04,
			"Cost": 560000,
			"Cost1": 403200.08,
			"Cost2": 156799.92,
			"Cost3": 139199.01,
			"Target": 700000,
			"Budget": 364000
		}, {
			"Week": "MAR 20",
			"Revenue": 904000.04,
			"Cost": 560000,
			"Cost1": 403200.08,
			"Cost2": 156799.92,
			"Cost3": 139199.01,
			"Target": 700000,
			"Budget": 364000
		}],

		onInit: function () {

			var ChartDataModelforModMatch = new sap.ui.model.json.JSONModel({
				LineDataPlantwise: this.LineDataPlantwise,
				LineDataPI: this.LineDataModMatch
					// matchedSetDataPI: this.matchedSetDataPI,
					// subConDataPI: this.subConDataPI
			});
			this.getView().setModel(ChartDataModelforModMatch, "ChartDataModelforModMatch");

			/////////////////////// VIZ FRAME for Monthly Production and Plant Inventory Details //////////////////////
			var oVizframe = this.getView().byId("idMISModlMatch");
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			debugger;
			// vizProperties =
			// 	"{title:{ text: 'Monthly Production and Plant Inventory Details'},valueAxis : {title:{ text:'Value in Lakhs'}}, plotArea : {drawingEffect: 'glossy',dataPointSize: {min : 5},dataLabel: { visible: true, showTotal: true }} }"
			oVizframe.setVizProperties({
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
						text: "Nos.",
						visible: true
					}
				},
				categoryAxis: {
					// label: {
					// 	formatString: formatPattern.SHORTFLOAT_MFD2
					// },
					title: {
						visible: true
					}
				},
				title: {
					visible: false,
					text: 'Model Wise Matched Set Inventory Details'
				}
			});
			/////////////////////// End VIZ FRAME for Monthly Production and Plant Inventory Details //////////////////////
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
		onSelectLineChartforMatchedSet: function (oEvent) {
			var plant = oEvent.getParameter("data")[0].data.measureNames;
			// if (plant === "ORG" || plant === "VVL") {
			if (!this.plantWise) {
				this.plantWise = sap.ui.xmlfragment("com.Air.Inventory.Inventory_Dashboard.view.MatchedSetPlantWise", this);
				this.getView().addDependent(this.plantWise);

			}
			this.plantWise.open();
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var oVizframeVendorwise = sap.ui.getCore().byId("idVizframePlantMatchedSet");
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
						text: "Nos.",
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
			// if (plant === "ORG") {
			// 	var plnatName = "Oragadam"
			// }
			// if (plant === "VVL") {
			// 	var plnatName = "Vallam"
			// }
			// sap.ui.getCore().byId("idsubconvend").setTitle(plnatName + " Sub Con Vendor Wise Inventory Details");
			// }

		},
		_onCancelPlantWiseFragment: function () {
				this.plantWise.close();

			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf com.Air.Inventory.Inventory_Dashboard.view.ModelMatchedSet
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.Air.Inventory.Inventory_Dashboard.view.ModelMatchedSet
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.Air.Inventory.Inventory_Dashboard.view.ModelMatchedSet
		 */
		//	onExit: function() {
		//
		//	}

	});

});