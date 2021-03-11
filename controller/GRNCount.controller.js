sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/viz/ui5/api/env/Format",
	'com/Air/Inventory/Inventory_Dashboard/model/formatter',
	"sap/viz/ui5/format/ChartFormatter",
], function (Controller, Format, formatter, ChartFormatter) {
	"use strict";

	return Controller.extend("com.Air.Inventory.Inventory_Dashboard.controller.GRNCount", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.Air.Inventory.Inventory_Dashboard.view.GRNCount
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("GRNCount").attachPatternMatched(this._onObjectMatched, this);

		},
		_onObjectMatched: function (oEvent) {
			this.plantpath = oEvent.getParameter("arguments").PlantPath;
			if (this.plantpath == "ORG") {
				this.plantvalue = "2020"
			} else if (this.plantpath == "TVT") {
				this.plantvalue = "2000"
			} else if (this.plantpath == "VVL") {
				this.plantvalue = "2050"
			} else if (this.plantpath == "3PL") {
				this.plantvalue = "2080"
			}
			this.getOwnerComponent().getModel("visibleModel").setProperty("/graphTit", this.plantpath);
			this.GRNCount();
		},

		GRNCount: function () {
			// this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			var adfilter = [];
			var date = new Date();
			if (this.finYear == undefined) {
				// var date = new Date();
				// this.finYear = date.getFullYear() - 1;
				if (date.getMonth() + 1 <= 3) {
					var preYear = date.getFullYear() - 1 + "04";
					var postYear = date.getFullYear() + "03";
				} else {
					var preYear = date.getFullYear() + "04";
					var postYear = date.getFullYear() + 1 + "03";
				}
			} else {
				var date = new Date();
				var checkingYear = this.finYear + 1;
				if (checkingYear == date.getFullYear()) {
					var preYear = this.finYear + "04";
					var Nextyear = parseInt(this.finYear) + 1;
					var postYear = Nextyear + "03";

				} else {
					var preYear = this.finYear + "04";
					var Nextyear = parseInt(this.finYear) + 1;
					var postYear = Nextyear + "03";
				}
			}
			adfilter.push(new sap.ui.model.Filter("Budat", sap.ui.model.FilterOperator.BT, preYear, postYear));
			adfilter.push(new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, this.plantvalue));
			this.getView().byId("idgrn").setBusy(true);

			this.getOwnerComponent().getModel().read("/GRNCountSet", {
				filters: adfilter,

				//filters: [countryFilter],
				success: function (odata) {

					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					for (var i = 0; i < odata.results.length; i++) {
						//var obj = {};
						var year = odata.results[i].Budat.slice(0, 4);
						var month = odata.results[i].Budat.slice(4, 6);
						if (month == '01') {
							month = 'Jan';
						} else if (month == '02') {
							month = 'Feb';
						} else if (month == '03') {
							month = 'Mar';
						} else if (month == '04') {
							month = 'Apr';
						} else if (month == '05') {
							month = 'May';
						} else if (month == '06') {
							month = 'Jun';
						} else if (month == '07') {
							month = 'Jul';
						} else if (month == '08') {
							month = 'Aug';
						} else if (month == '09') {
							month = 'Sep';
						} else if (month == '10') {
							month = 'Oct';
						} else if (month == '11') {
							month = 'Nov';
						} else if (month == '12') {
							month = 'Dec';
						}
						odata.results[i].Budat = month + " " + year;

					}

					this.getView().getModel("visibleModel").setProperty("/GRNCount", odata.results);
					var subtitl = this.getOwnerComponent().getModel("visibleModel").getProperty("/graphTit");
					this._buildchartforGRNCount(subtitl);
					this.getView().byId("idgrn").setBusy(false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getView().byId("idgrn").setBusy(false);
					// this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_buildchartforGRNCount: function (subtitl) {
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;

			var FIORI_PERCENTAGE_FORMAT_51 = "__UI5__PercentageMaxFraction5";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_51, function (value) {
				// var val = value / 10000000;
				// val = val.toFixed(1);
				// var val1 = Math.round(val);
				//val = val + " " + "Lakhs";
				var val = value;
				return val;

			});
			var oVizframeGrn = this.getView().byId("idgrn");

			oVizframeGrn.removeAllFeeds();

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: "Month",
					value: "{visibleModel>Budat}"
				}],
				measures: [{
					name: "Count(In K)",
					value: "{visibleModel>Number}"
				}]
			}).bindData("visibleModel>/GRNCount");
			oVizframeGrn.setVizProperties({
				title: {
					visible: 'true',
					text: subtitl

				},
				valueAxis: {
					label: {
						formatString: FIORI_PERCENTAGE_FORMAT_51
					},
					title: {
						text: "GRN Count",
						visible: true
					}
				},

				plotArea: {
					dataLabel: {
						formatString: FIORI_PERCENTAGE_FORMAT_51,
						type: "value",
						visible: true
					},
					drawingEffect: 'glossy',

					//colorPalette: ['#00B050', '#CCFF66', '#FF0000', '#FFC300']
					// colorPalette: ["#6AB187", "#CED2CC", "#F4D00C"]
					//'colorPalette': d3.scale.category20().range()
				},

			});

			oVizframeGrn.setDataset(oDataset);
			oVizframeGrn.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "categoryAxis",
				type: "Dimension",
				values: ["Month"]
			}));
			oVizframeGrn.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "valueAxis",
				type: "Measure",
				values: ["Count(In K)"]
			}));
			var oPopOver = this.getView().byId("idPopgrn");
			oPopOver.connect(oVizframeGrn.getVizUid());

		},
		onPressGRNCountfilter: function () {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			if (!this._SelectionDialogCount) {
				this._SelectionDialogCount = sap.ui.xmlfragment(
					"com.Air.Inventory.Inventory_Dashboard.fragments.Count",
					this
				);
				this.getView().addDependent(this._SelectionDialogCount);
			}
			sap.ui.getCore().byId("GrnCountYear").setValue("");
			this._SelectionDialogCount.open();
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
		},
		onPressCountCancel: function () {
			this._SelectionDialogCount.close();
		},
		onClickCountFinYear: function (oEvent) {
			this.finYear = oEvent.getSource().getSelectedKey();
			this.GRNCount();
			this._SelectionDialogCount.close();
		},
		onPressCountCancel: function () {
			oEvent.getSource().getParent().close();
		},
		getErrorDetails: function (error) {
			if (JSON.parse(error.responseText).error.innererror.errordetails.length > 1) {
				var x = JSON.parse(error.responseText).error.innererror.errordetails;
				var details = '<ul>';
				var y = '';
				if (x.length > 1) {
					for (var i = 0; i < x.length - 1; i++) {
						y = '<li>' + x[i].message + '</li>' + y;
					}
				}
				details = details + y + "</ul>";
				sap.m.MessageBox.error("Erro!!!", {
					title: "Error",
					details: details,
					contentWidth: "100px",
					onClose: function (oAction) {
						if (oAction === "OK" || oAction === "CANCEL" || oAction === "CLOSE") {}
					}.bind(this)
				});
			} else {
				sap.m.MessageBox.error(JSON.parse(error.responseText).error.message.value, {
					title: "Error",
					contentWidth: "100px",
					onClose: function (oAction) {
						if (oAction === "OK" || oAction === "CANCEL" || oAction === "CLOSE") {}
					}.bind(this)
				});
			}
		},
	});

});