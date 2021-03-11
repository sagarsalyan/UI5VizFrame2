sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/viz/ui5/format/ChartFormatter",
	"sap/viz/ui5/api/env/Format",
	"com/Air/Inventory/Inventory_Dashboard/model/formatter",
	'sap/ui/export/Spreadsheet'
], function (Controller, History, ChartFormatter, Format, formatter, Spreadsheet) {
	"use strict";

	return Controller.extend("com.Air.Inventory.Inventory_Dashboard.controller.TransactionControl", {
		formatter: formatter,

		onInit: function () {

			this.MonthlyPlanInventory();

			var date = new Date();
			this.fromdate = date.getFullYear() - 1;
			this.todate = date.getFullYear();
		},
		MonthlyPlanInventory: function () {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/MonthlyPlnInventorySet", {

				//filters: [countryFilter],
				success: function (odata) {
					var finalArr = [];
					var arr04 = [];
					var arr05 = [];
					var arr06 = [];
					var arr07 = [];
					var arr08 = [];
					var arr09 = [];
					var arr10 = [];
					var arr11 = [];
					var arr12 = [];
					var arr01 = [];
					var arr02 = [];
					var arr03 = [];
					for (var i = 0; i < odata.results.length; i++) {
						if (odata.results[i].Month == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Month == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Month == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Month == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Month == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Month == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Month == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Month == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Month == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Month == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Month == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Month == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Month + arr04[i].Year;
						if (arr04[i].Bwkey == 2000) {
							obj04.TVT = arr04[i].Total;
						} else if (arr04[i].Bwkey == 2020) {
							obj04.ORG = arr04[i].Total;
						} else if (arr04[i].Bwkey == 2050) {
							obj04.VVL = arr04[i].Total;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Month + arr05[i].Year;
						if (arr05[i].Bwkey == 2000) {
							obj05.TVT = arr05[i].Total;
						} else if (arr05[i].Bwkey == 2020) {
							obj05.ORG = arr05[i].Total;
						} else if (arr05[i].Bwkey == 2050) {
							obj05.VVL = arr05[i].Total;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Month + arr06[i].Year;
						if (arr06[i].Bwkey == 2000) {
							obj06.TVT = arr06[i].Total;
						} else if (arr06[i].Bwkey == 2020) {
							obj06.ORG = arr06[i].Total;
						} else if (arr06[i].Bwkey == 2050) {
							obj06.VVL = arr06[i].Total;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Month + arr07[i].Year;
						if (arr07[i].Bwkey == 2000) {
							obj07.TVT = arr07[i].Total;
						} else if (arr07[i].Bwkey == 2020) {
							obj07.ORG = arr07[i].Total;
						} else if (arr07[i].Bwkey == 2050) {
							obj07.VVL = arr07[i].Total;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Month + arr08[i].Year;
						if (arr08[i].Bwkey == 2000) {
							obj08.TVT = arr08[i].Total;
						} else if (arr08[i].Bwkey == 2020) {
							obj08.ORG = arr08[i].Total;
						} else if (arr08[i].Bwkey == 2050) {
							obj08.VVL = arr08[i].Total;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Month + arr09[i].Year;
						if (arr09[i].Bwkey == 2000) {
							obj09.TVT = arr09[i].Total;
						} else if (arr09[i].Bwkey == 2020) {
							obj09.ORG = arr09[i].Total;
						} else if (arr09[i].Bwkey == 2050) {
							obj09.VVL = arr09[i].Total;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Month + arr10[i].Year;
						if (arr10[i].Bwkey == 2000) {
							obj10.TVT = arr10[i].Total;
						} else if (arr10[i].Bwkey == 2020) {
							obj10.ORG = arr10[i].Total;
						} else if (arr10[i].Bwkey == 2050) {
							obj10.VVL = arr10[i].Total;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Month + arr11[i].Year;
						if (arr11[i].Bwkey == 2000) {
							obj11.TVT = arr11[i].Total;
						} else if (arr11[i].Bwkey == 2020) {
							obj11.ORG = arr11[i].Total;
						} else if (arr11[i].Bwkey == 2050) {
							obj11.VVL = arr11[i].Total;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Month + arr12[i].Year;
						if (arr12[i].Bwkey == 2000) {
							obj12.TVT = arr12[i].Total;
						} else if (arr12[i].Bwkey == 2020) {
							obj12.ORG = arr12[i].Total;
						} else if (arr12[i].Bwkey == 2050) {
							obj12.VVL = arr12[i].Total;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Month + arr01[i].Year;
						if (arr01[i].Bwkey == 2000) {
							obj01.TVT = arr01[i].Total;
						} else if (arr01[i].Bwkey == 2020) {
							obj01.ORG = arr01[i].Total;
						} else if (arr01[i].Bwkey == 2050) {
							obj01.VVL = arr01[i].Total;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Month + arr02[i].Year;
						if (arr02[i].Bwkey == 2000) {
							obj02.TVT = arr02[i].Total;
						} else if (arr02[i].Bwkey == 2020) {
							obj02.ORG = arr02[i].Total;
						} else if (arr02[i].Bwkey == 2050) {
							obj02.VVL = arr02[i].Total;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Month + arr03[i].Year;
						if (arr03[i].Bwkey == 2000) {
							obj03.TVT = arr03[i].Total;
						} else if (arr03[i].Bwkey == 2020) {
							obj03.ORG = arr03[i].Total;
						} else if (arr03[i].Bwkey == 2050) {
							obj03.VVL = arr03[i].Total;
						}
					}
					if (arr03.length > 0) {
						finalArr.push(obj03);
					}

					// var obj = {};

					// for (var i = 0; i < odata.results.length; i++) {
					// 	var obj = {};
					// 	if (odata.results[i].Bwkey == "2000") {
					// 		obj.Endate1 = odata.results[i].Month;
					// 		obj.ORG = 0;
					// 		obj.VVL = 0;
					// 		obj.TPL = 0;
					// 		obj.TVT = odata.results[i].Value;
					// 		obj.Tot = odata.results[i].Total;
					// 		arr.push(obj);
					// 		//obj.Tot = odata.results[i].Total;
					// 	} else if (odata.results[i].Bwkey == "2020") {
					// 		obj.Endate1 = odata.results[i].Month;
					// 		obj.ORG = odata.results[i].Value;
					// 		obj.VVL = 0;
					// 		obj.TPL = 0;
					// 		obj.TVT = 0;
					// 		obj.Tot = odata.results[i].Total;
					// 		arr.push(obj);
					// 		//
					// 	} else if (odata.results[i].Bwkey == "2050") {
					// 		obj.Endate1 = odata.results[i].Month;
					// 		obj.ORG = 0;
					// 		obj.VVL = odata.results[i].Value;
					// 		obj.TPL = 0;
					// 		obj.TVT = 0;
					// 		obj.Tot = odata.results[i].Total;
					// 		arr.push(obj);
					// 		//
					// 	} else if (odata.results[i].Bwkey == "2080") {
					// 		obj.Endate1 = odata.results[i].Month;
					// 		obj.ORG = 0;
					// 		obj.VVL = 0;
					// 		obj.TPL = odata.results[i].Value;
					// 		obj.TVT = 0;
					// 		obj.Tot = odata.results[i].Total;
					// 		arr.push(obj);
					// 		//
					// 	}

					// }
					var arrobj = [{
						"ORG": "",
						"VVL": "",
						"TVT": ""
					}]

					this.getView().getModel("visibleModel").setProperty("/MonthlyPlanInventory", finalArr);
					for (var i = 0; i < finalArr.length; i++) {
						for (var key in arrobj[0]) {
							if (finalArr[i].hasOwnProperty(key)) {

							} else {
								if (key == "ORG") {
									finalArr[i].ORG = "0";
								} else if (key == "VVL") {
									finalArr[i].VVL = "0";
								} else if (key == "TVT") {
									finalArr[i].TVT = "0";
								}
							}
						}
					}
					// var monthArr = ["04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03"];
					// for (var i = 0; i < monthArr.length; i++) {
					// 	var month = finalArr[i].month.slice(0, 2);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			month: finalArr[i].month.slice(0, 4) + monthArr[i],
					// 			TPL: 0,
					// 			VVL: 0,
					// 			ORG: 0,
					// 			TVT: 0
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }
					this._buildchartforMonthlyPlanInventory();
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		onPressDownloadMI: function () {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/PlantInventryTrendDwnldSet", {
				//filters: adfilter,
				success: function (odata) {
					// for (var i = 0; i < odata.results.length; i++) {
					// 	var date = new Date(odata.results[i].Getime.ms);
					// 	odata.results[i].Getime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
					// }

					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					this.getView().getModel("visibleModel").setProperty("/MonthlyInvDownload", odata.results);
					this._downloadPIData(odata);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_downloadPIData: function (odata) {
			if (odata.results.length == 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnMI();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/MonthlyInvDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Monthly Inventory(" + this.fromdate + "-" + this.todate + ")"
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
		createColumnMI: function () {
			var aCols = [];
			aCols.push({
				label: 'FI Year',
				property: 'Year',
			});
			aCols.push({
				label: 'Month',
				property: 'Month',

			});
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});
			aCols.push({
				label: 'Total Value',
				property: 'Value',
			});

			return aCols;

		},
		_buildchartforMonthlyPlanInventory: function () {
			var oVizframeGrn = this.getView().byId("idVizFrameColumn11");
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var FIORI_PERCENTAGE_FORMAT_10 = "__UI5__PercentageMaxFraction10";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_10, function (value) {
				var val = value / 100000;
				//val = val.toFixed(1);
				var val1 = Math.round(val);
				//val = val + " " + "Lakh";
				return val1;

			});
			// vizProperties="{title:{ text: 'Production and Plant Inventory Details'},valueAxis : {label : {visible : true }}, plotArea : {drawingEffect: 'glossy',dataPointSize: {min : 5},dataLabel: { visible: true, showTotal: true }} }"
			oVizframeGrn.setVizProperties({
				plotArea: {
					drawingEffect: 'glossy',
					dataPointSize: {
						min: 5
					},
					dataLabel: {
						visible: true,
						showTotal: true,
						formatString: FIORI_PERCENTAGE_FORMAT_10
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"],
				},
				valueAxis: {
					label: {
						formatString: FIORI_PERCENTAGE_FORMAT_10
					},
					title: {
						text: "Lacs",
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
					text: 'Monthly GRN Pending'
				}
			});
			var oPopOver = this.getView().byId("idPopOverMisCol10");
			oPopOver.connect(oVizframeGrn.getVizUid());
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
		// onSelectLineChart: function () {

		// },
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