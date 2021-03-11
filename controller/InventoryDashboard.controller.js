	sap.ui.define([
		"sap/ui/core/mvc/Controller",
		// "com/Air/Inventory/Inventory_Dashboard/thirdParty/fusioncharts",
		"com/Air/Inventory/Inventory_Dashboard/thirdParty/fusionchartstheme",
		"com/Air/Inventory/Inventory_Dashboard/thirdParty/widgets",
		"sap/viz/ui5/format/ChartFormatter",
		"sap/viz/ui5/api/env/Format",
		'com/Air/Inventory/Inventory_Dashboard/model/formatter',
		'sap/ui/export/Spreadsheet'
		// "com/Air/Inventory/Inventory_Dashboard/thirdParty/fusioncharts.charts"
	], function (Controller, fusionchartstheme, widgets, ChartFormatter, Format, formatter, Spreadsheet) {
		"use strict";

		return Controller.extend("com.Air.Inventory.Inventory_Dashboard.controller.InventoryDashboard", {
			formatter: formatter,

			onInit: function () {
				this.YearlyInventoryDetails();
				this.MonthlyInventoryDetails();
				this.MonthlyPlanGrn();
				this.MonthlySubConInventorySetData();
				this._setCustomFormatter();

				var date = new Date();
				this.fromdate = date.getFullYear() - 1;
				this.todate = date.getFullYear();

			},

			onPressIcon: function (oEvent) {
				var oButton = oEvent.getSource();
				this.byId("actionSheet").openBy(oButton);
			},
			_setCustomFormatter: function () {
				var chartFormatter = ChartFormatter.getInstance();
				Format.numericFormatter(chartFormatter);
				var UI5_FLOAT_FORMAT = "CustomFloatFormat_F2";
				chartFormatter.registerCustomFormatter(UI5_FLOAT_FORMAT, function (value) {
					var ofloatInstance = sap.ui.core.format.NumberFormat.getFloatInstance({
						style: 'short',
						maxFractionDigits: 2
					});
					return ofloatInstance.format(value);
				});
			},
			MonthlySubConInventorySetData: function (oEvent) {
				this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
				this.getOwnerComponent().getModel().read("/MonthlySubConInventorySet", {

					//filters: [countryFilter],
					success: function (oData) {

						this.getView().getModel("visibleModel").setProperty("/subConInventory", oData.results);
						this._buildchartforSubCon();
						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						//this.getView().getModel("visibleModel").refresh();

					}.bind(this),
					error: function (error) {
						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						this.getErrorDetails(error);
					}.bind(this)
				});
			},
			onSelectPieChart: function (oEvent) {
				debugger;
				this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
				var sId = oEvent.getSource().getId().split("--")[1];
				var MeasuresName = oEvent.getParameter("data")[0].data.measureNames;
				// this.getOwnerComponent().getModel("visibleModel").setProperty("/graphTitle", MeasuresName);
				// this.getOwnerComponent().getModel("visibleModel").refresh();
				// this.getOwnerComponent().getModel("visibleModel").updateBindings();
				if (MeasuresName === "3PL") {
					this.getOwnerComponent().getRouter().navTo("subcondrill", {
						invoicePath: MeasuresName
					});
				} else if (MeasuresName === "VVL") {
					this.getOwnerComponent().getRouter().navTo("subcondrill", {
						invoicePath: MeasuresName
					});
				} else if (MeasuresName === "ORG") {
					this.getOwnerComponent().getRouter().navTo("subcondrill", {
						invoicePath: MeasuresName
					});
				} else if (MeasuresName === "TVT") {
					this.getOwnerComponent().getRouter().navTo("subcondrill", {
						invoicePath: MeasuresName
					});
				}
			},
			_buildchartforSubCon: function (oEvent) {
				var oVizFrameAudit = this.byId("idVizframeSubConInvenVal");
				oVizFrameAudit.setVizType('pie');
				var FIORI_PERCENTAGE_FORMAT_12 = "__UI5__PercentageMaxFraction12";
				var chartFormatter = ChartFormatter.getInstance();
				chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_12, function (value) {
					var val = value / 100000;
					val = val.toFixed(1);
					//val = val + " " + "Lakh";
					return val;

				});

				//oVizFrameAudit.setDataset(oDatasetApollo);
				oVizFrameAudit.setVizProperties({
					legend: {
						title: {
							visible: false
						}
					},
					plotArea: {
						dataLabel: {
							visible: true,
							type: 'value',
							formatString: FIORI_PERCENTAGE_FORMAT_12
						},
						gridline: {
							visible: false
						},
						colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"]
					},

					// dataLabel: {
					// 	visible: true,
					// 	type: "value"
					// },
					title: {
						visible: false,
						text: 'Sub contractor inventory value in lacs'
					},
					legendGroup: {
						layout: {
							position: "right"
						}
					}

				});
				var oPopOver = this.getView().byId("idSubConInvenValPopOver");
				oPopOver.connect(oVizFrameAudit.getVizUid());
				// oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
			},

			YearlyInventoryDetails: function (oEvent) {
				this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
				this.getOwnerComponent().getModel().read("/YrInventoryDetailsSet", {

					//filters: [countryFilter],
					success: function (oData) {
						var arrayYearly = [];
						var obj = {
							Year: "",
							sbplan: "",
							wemng: ""

						};
						for (var i = 0; i < oData.results.length; i++) {
							var a = oData.results[i].Year;
							var b = parseFloat(oData.results[i].Year) + 1;

							// if(this.todate!=a.split("-")[0]){
							obj.Year = a + "-" + b;
							// }else{
							// 	obj.Year = a.split("-")[0] +"-"+ a.split("-")[1];
							// }
							obj.sbplan = Math.round(oData.results[i].SbpplanV1);
							obj.wemng = Math.round(oData.results[i].Wemng);
							arrayYearly.push(obj);
							obj = {
								Year: "",
								sbplan: "",
								wemng: ""
							};
						}
						this.getView().getModel("visibleModel").setProperty("/YearlyInventory", arrayYearly);
						this._buildchartforYearly();
						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						//this.getView().getModel("visibleModel").refresh();

					}.bind(this),
					error: function (error) {
						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						this.getErrorDetails(error);
					}.bind(this)
				});

			},
			MonthlyInventoryDetails: function () {
				var adfilter = [];
				var date = new Date();
				if (this.finYearSbp == undefined) {
					// this.finYearMRD = "2020";
					if (date.getMonth() + 1 <= 3) {
						var preYear = date.getFullYear() - 1 + "04";
						var postYear = date.getFullYear() + "03";
					} else {
						var preYear = date.getFullYear() + "04";
						var postYear = date.getFullYear() + 1 + "03";
					}

				}
				adfilter.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.BT, preYear, postYear));
				this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
				this.getOwnerComponent().getModel().read("/MonthlyQuantitySet", {
					filters: adfilter,
					//filters: [countryFilter],
					success: function (oData) {
						var array = [];
						var obj = {
							Year: "",
							sbp: "",
							actual: ""
						};
						for (var i = 0; i < oData.results.length; i++) {
							obj.Year = oData.results[i].Year;
							obj.sbp = oData.results[i].SBP;
							obj.actual = oData.results[i].Actual;
							array.push(obj);
							obj = {
								Year: "",
								sbp: "",
								actual: ""
							};
						}
						this.getView().getModel("visibleModel").setProperty("/MonthlyInventory", array);
						this._buildchartforMonthly();
						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						this.getView().getModel("visibleModel").refresh();
					}.bind(this),
					error: function (error) {
						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						this.getErrorDetails(error);
					}.bind(this)
				});
			},
			FinMonthlyInventoryDetails: function () {
				var adfilter = [];
				var date = new Date();
				var checkingYear = this.finYearSbp + 1;
				if (checkingYear == date.getFullYear()) {
					var preYear = this.finYearSbp + "04";
					var Nextyear = parseInt(this.finYearSbp) + 1;
					var postYear = Nextyear + "03";

				} else {
					var preYear = this.finYearSbp + "04";
					var Nextyear = parseInt(this.finYearSbp) + 1;
					var postYear = Nextyear + "03";
				}
				adfilter.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.BT, preYear, postYear));
				this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
				this.getOwnerComponent().getModel().read("/MonthlyQuantitySet", {
					filters: adfilter,
					//filters: [countryFilter],
					success: function (oData) {
						var array = [];
						var obj = {
							Year: "",
							sbp: "",
							actual: ""
						};
						for (var i = 0; i < oData.results.length; i++) {
							obj.Year = oData.results[i].Year;
							obj.sbp = oData.results[i].SBP;
							obj.actual = oData.results[i].Actual;
							array.push(obj);
							obj = {
								Year: "",
								sbp: "",
								actual: ""
							};
						}
						this.getView().getModel("visibleModel").setProperty("/MonthlyInventory", array);
						this._buildchartforMonthly();
						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						this.getView().getModel("visibleModel").refresh();
					}.bind(this),
					error: function (error) {
						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						this.getErrorDetails(error);
					}.bind(this)
				});
			},
			_buildchartforMonthly: function () {
				var oVizframe = this.getView().byId("idMISMonthlyLine");
				Format.numericFormatter(ChartFormatter.getInstance());
				var formatPattern = ChartFormatter.DefaultPattern;
				var FIORI_PERCENTAGE_FORMAT_2 = "__UI5__PercentageMaxFraction2";
				var chartFormatter = ChartFormatter.getInstance();
				chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_2, function (value) {
					var val = value / 1000;
					val = val.toFixed(1);
					var rv = Math.round(val);

					//val = val + " " + "K";
					return rv;

				});

				// vizProperties =
				// 	"{title:{ text: 'Monthly Production and Plant Inventory Details'},valueAxis : {title:{ text:'Value in Lakhs'}}, plotArea : {drawingEffect: 'glossy',dataPointSize: {min : 5},dataLabel: { visible: true, showTotal: true }} }"
				oVizframe.setVizProperties({
					plotArea: {
						drawingEffect: 'glossy',
						// dataPointSize: {
						// 	min: 5
						// },
						dataLabel: {
							visible: true,
							showTotal: true,
							formatString: FIORI_PERCENTAGE_FORMAT_2
						},
						gridline: {
							visible: false
						},
						colorPalette: ["#5bbae7", "#b6da58"],
					},

					valueAxis: {
						label: {
							formatString: FIORI_PERCENTAGE_FORMAT_2
						},
						title: {
							text: "Nos(In Thousand)",
							visible: true
						}
					},
					categoryAxis: {
						// label: {
						// 	formatString: formatPattern.SHORTFLOAT
						// },
						// title: {
						// 	visible: true
						// }
					},
					title: {
						visible: false,
						text: 'SBP Vs Actual'
					}
				});
				var oPopOver = this.getView().byId("idPopOverMISLine");
				oPopOver.connect(oVizframe.getVizUid());
				//oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

			},
			MonthlyPlanGrn: function () {
				//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
				this.getView().byId("idVizFrameColumn1111").setBusy(true);
				this.getOwnerComponent().getModel().read("/MonthlyPlnGrnSet", {

					//filters: [countryFilter],
					success: function (oData) {

						var array = [];
						var obj = {
							Year: "",
							plan: "",
							Grn: ""

						};
						for (var i = 0; i < oData.results.length; i++) {
							obj.Year = oData.results[i].Month + "-" + oData.results[i].Year;
							obj.plan = Math.round(oData.results[i].Plan / 10000000);
							obj.Grn = Math.round(oData.results[i].GRN / 10000000);
							array.push(obj);
							obj = {
								Year: "",
								plan: "",
								Grn: ""
							};
						}
						this.getView().getModel("visibleModel").setProperty("/MonthlyPlan", array);

						// this.getView().getModel("visibleModel").setProperty("/MonthlyPlan", oData.results);
						this._buildchartforMonthlyPlan();
						this.getView().byId("idVizFrameColumn1111").setBusy(false);
						//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						//this.getView().getModel("visibleModel").refresh();

					}.bind(this),
					error: function (error) {
						this.getView().byId("idVizFrameColumn1111").setBusy(false);
						//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						this.getErrorDetails(error);
					}.bind(this)
				});
			},

			_buildchartforMonthlyPlan: function () {
				var oVizframe11 = this.getView().byId("idVizFrameColumn1111");
				Format.numericFormatter(ChartFormatter.getInstance());
				var formatPattern = ChartFormatter.DefaultPattern;

				var FIORI_PERCENTAGE_FORMAT_3 = "__UI5__PercentageMaxFraction3";
				var chartFormatter = ChartFormatter.getInstance();
				chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_3, function (value) {
					var val = value;
					// val = val.toFixed(5);
					// Math.round(val);
					// val = val + " " + "Lakhs";
					return val;

				});

				// vizProperties="{title:{ text: 'Production and Plant Inventory Details'},valueAxis : {label : {visible : true }}, plotArea : {drawingEffect: 'glossy',dataPointSize: {min : 5},dataLabel: { visible: true, showTotal: true }} }"
				oVizframe11.setVizProperties({
					plotArea: {
						drawingEffect: 'glossy',
						dataPointSize: {
							min: 5
						},
						dataLabel: {
							visible: true,
							showTotal: true,
							formatString: FIORI_PERCENTAGE_FORMAT_3
						},
						gridline: {
							visible: false
						},
						colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"]
					},
					valueAxis: {
						label: {
							formatString: FIORI_PERCENTAGE_FORMAT_3
						},
						title: {
							text: "Value(In Crores)",
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
						text: 'Plant Inv Vs GRN Value'
					}
				});
				var oPopOver = this.getView().byId("idPopOverMisCol1011");
				oPopOver.connect(oVizframe11.getVizUid());
				//oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
			},
			_buildchartforYearly: function () {
				var oVizframe1 = this.getView().byId("idVizFrameColumn");
				Format.numericFormatter(ChartFormatter.getInstance());
				var formatPattern = ChartFormatter.DefaultPattern;
				debugger;
				var FIORI_PERCENTAGE_FORMAT_1 = "__UI5__PercentageMaxFraction1";
				var chartFormatter = ChartFormatter.getInstance();
				chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_1, function (value) {
					var val = value;
					//val = val.toFixed(3);
					//var rv=Math.round(val);

					//val = val + " " + "Lakhs";
					return val;

				});

				// vizProperties="{title:{ text: 'Production and Plant Inventory Details'},valueAxis : {label : {visible : true }}, plotArea : {drawingEffect: 'glossy',dataPointSize: {min : 5},dataLabel: { visible: true, showTotal: true }} }"
				oVizframe1.setVizProperties({
					plotArea: {
						drawingEffect: 'glossy',
						// dataPointSize: {
						// 	min: 5
						// },
						dataLabel: {
							visible: true,
							showTotal: true,
							formatString: FIORI_PERCENTAGE_FORMAT_1
						},
						gridline: {
							visible: false
						},
						colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"],
						// dataPointStyle: {
						// 	// "rules": [{
						// 	// 	"dataContext": {
						// 	// 		"QScore": ""
						// 	// 	}
						// 	// }],
						// 	"others": {

						// 		"displayName": "Value in Lakhs"
						// 	}
						// }

					},

					valueAxis: {
						label: {
							formatString: FIORI_PERCENTAGE_FORMAT_1
						},
						title: {
							text: "Nos",
							visible: true
						}
					},
					// categoryAxis: {
					// 	label: {
					// 		formatString: formatYear
					// 	},
					title: {
						visible: false,
						text: 'Yearly Production and Plant Inventory Details Trend'
					}
				});
				var oPopOver = this.getView().byId("idPopOverMisCol");
				oPopOver.connect(oVizframe1.getVizUid());
				//	oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

			},

			onAfterRendering: function () {

				// FusionCharts.ready(function () {
				// 	var cSatScoreChart = new FusionCharts({
				// 		type: 'angulargauge',
				// 		renderAt: 'abcd',
				// 		width: '400',
				// 		height: '230',
				// 		dataFormat: 'json',
				// 		dataSource: {
				// 			"chart": {
				// 				"subcaption": "",
				// 				"lowerLimit": "0",
				// 				"upperLimit": "100",
				// 				"showvalue": "1",
				// 				"numbersuffix": "%",
				// 				"showGaugeBorder": "0",
				// 				"theme": "fusion"
				// 			},
				// 			"colorRange": {
				// 				"color": [{
				// 					"minValue": "0",
				// 					"maxValue": "50",
				// 					"code": "#5bbae7"
				// 				}, {
				// 					"minValue": "50",
				// 					"maxValue": "75",
				// 					"code": "#b6da58"
				// 				}, {
				// 					"minValue": "75",
				// 					"maxValue": "100",
				// 					"code": "#f9c463"
				// 				}]
				// 			},
				// 			"dials": {
				// 				"dial": [{
				// 					"value": "67"
				// 				}]
				// 			}
				// 		}
				// 	}).render();
				// });
			},
			onSelectLineChart: function (oEvent) {

				var sId = oEvent.getSource().getId().split("--")[1];
				var MeasuresName = oEvent.getParameter("data")[0].data.measureNames;
				if (MeasuresName === "GRN Value") {
					// this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
					this.getOwnerComponent().getRouter().navTo("PlantInventory");
				} else if (MeasuresName === "SBP") {

					//this.getOwnerComponent().getRouter().navTo("PlantInventory");
				} else if (MeasuresName === "Plant Inventory") {

					this.getOwnerComponent().getRouter().navTo("TransactionControl");
				} else if (MeasuresName === "Matched Set") {

					this.getOwnerComponent().getRouter().navTo("ModelMatchedSet");
				} else if (MeasuresName === "Sub Con Inventory Value") {

					this.getOwnerComponent().getRouter().navTo("SubConInventory");
				} else if (MeasuresName === "Actual") {

					this.getOwnerComponent().getRouter().navTo("plantproduction");
				}

			},
			onPressDownloadYPA: function () {
				this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
				this.getOwnerComponent().getModel().read("/YearlySBPDwnldSet", {
					//filters: adfilter,
					success: function (odata) {

						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						this.getView().getModel("visibleModel").setProperty("/YearlySBPDownload", odata.results);
						this._downloadYearlySBP(odata);
						//this.getView().getModel("visibleModel").refresh();

					}.bind(this),
					error: function (error) {
						this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
						this.getErrorDetails(error);
					}.bind(this)
				});
			},
			_downloadYearlySBP: function (odata) {
				if (odata.results.length <= 0) {
					sap.m.MessageBox.error("No data is available for download!");
					return;
				}
				var aCols, oSettings, oSheet, oTable;

				aCols = this.createColumnYearlySBP();

				var aProducts = this.getView().getModel("visibleModel").getProperty('/YearlySBPDownload');

				oSettings = {
					workbook: {
						columns: aCols,
						hierarchyLevel: 'Level'
					},
					dataSource: aProducts,
					fileName: "Yearly SBP(" + this.fromdate + "-" + this.todate + ")"
				};

				oSheet = new Spreadsheet(oSettings);
				oSheet.build()
					.then(function () {
						sap.m.MessageToast.show('file downloaded');
					})
					.finally(function () {
						oSheet.destroy();
					});
			},
			createColumnYearlySBP: function () {
				var aCols = [];
				aCols.push({
					label: 'Sl No',
					property: 'Slno',
				});
				aCols.push({
					label: 'Year',
					property: 'Year',
				});
				aCols.push({
					label: 'Plant',
					property: 'Plant',
				});
				aCols.push({
					label: 'Model Code',
					property: 'Modelcode',
				});
				aCols.push({
					label: 'Model Name',
					property: 'Modelname',
				});
				aCols.push({
					label: 'Product Group',
					property: 'Productgroup',
				});
				aCols.push({
					label: 'Specification(BS6/Euro4)',
					property: 'Sepcification',
				});
				aCols.push({
					label: 'DOM/Export',
					property: 'Domexport',
				});
				aCols.push({
					label: 'SBP Plan V1',
					property: 'SbpplanV1',
				});
				aCols.push({
					label: 'Actual V1',
					property: 'ActualV1',
				});
				aCols.push({
					label: 'SBP Plan V2',
					property: 'SbpplanV2',
				});
				aCols.push({
					label: 'Actual V2',
					property: 'ActualV2',
				});
				return aCols;
			},
			onPressSBP: function () {
				this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
				if (!this._SelectionDialogsbp) {
					this._SelectionDialogsbp = sap.ui.xmlfragment(
						"com.Air.Inventory.Inventory_Dashboard.fragments.finyearSBP",
						this
					);
					this.getView().addDependent(this._SelectionDialogsbp);
				}
				sap.ui.getCore().byId("finYearsbp").setValue("");
				this._SelectionDialogsbp.open();
				this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
			},
			onClickFinYear: function (oEvent) {
				this.finYearSbp = oEvent.getSource().getSelectedKey().slice(0, 4);
				this.FinMonthlyInventoryDetails();
				this._SelectionDialogsbp.close();
			},
			onPressSbpFinCancel: function () {
				this._SelectionDialogsbp.close();
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