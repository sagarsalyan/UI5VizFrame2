sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/viz/ui5/api/env/Format",
	'com/Air/Inventory/Inventory_Dashboard/model/formatter',
	"sap/viz/ui5/format/ChartFormatter",
	'sap/ui/export/Spreadsheet'
], function (Controller, Format, formatter, ChartFormatter, Spreadsheet) {
	"use strict";

	return Controller.extend("com.Air.Inventory.Inventory_Dashboard.controller.plantproduction", {
		formatter: formatter,

		onInit: function () {
			this.MonthlyQuantityPlantwise();

			var date = new Date();
			this.fromdate = date.getFullYear() - 1;
			this.todate = date.getFullYear();

		},
		MonthlyQuantityMonthWise: function () {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			var adfilter = [];
			if (this.month == undefined) {
				this.month = "202004"
			}
			adfilter.push(new sap.ui.model.Filter("Sptag1", sap.ui.model.FilterOperator.EQ, this.month));
			this.getView().byId("idChartContainer").setBusy(true);
			this.getOwnerComponent().getModel().read("/MonthlyQuantityPlantwiseSet", {
				filters: adfilter,
				//filters: [countryFilter],
				success: function (odata) {
					this.getView().byId("idChartContainer").setBusy(false);
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
						if (odata.results[i].Sptag1.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Sptag1;
						if (arr04[i].Werks == 2000) {
							obj04.TVT = arr04[i].Wemng;
						} else if (arr04[i].Werks == 2020) {
							obj04.ORG = arr04[i].Wemng;
						} else if (arr04[i].Werks == 2050) {
							obj04.VVL = arr04[i].Wemng;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Sptag1;
						if (arr05[i].Werks == 2000) {
							obj05.TVT = arr05[i].Wemng;
						} else if (arr05[i].Werks == 2020) {
							obj05.ORG = arr05[i].Wemng;
						} else if (arr05[i].Werks == 2050) {
							obj05.VVL = arr05[i].Wemng;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Sptag1;
						if (arr06[i].Werks == 2000) {
							obj06.TVT = arr06[i].Wemng;
						} else if (arr06[i].Werks == 2020) {
							obj06.ORG = arr06[i].Wemng;
						} else if (arr06[i].Werks == 2050) {
							obj06.VVL = arr06[i].Wemng;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Sptag1;
						if (arr07[i].Werks == 2000) {
							obj07.TVT = arr07[i].Wemng;
						} else if (arr07[i].Werks == 2020) {
							obj07.ORG = arr07[i].Wemng;
						} else if (arr07[i].Werks == 2050) {
							obj07.VVL = arr07[i].Wemng;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Sptag1;
						if (arr08[i].Werks == 2000) {
							obj08.TVT = arr08[i].Wemng;
						} else if (arr08[i].Werks == 2020) {
							obj08.ORG = arr08[i].Wemng;
						} else if (arr08[i].Werks == 2050) {
							obj08.VVL = arr08[i].Wemng;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Sptag1;
						if (arr09[i].Werks == 2000) {
							obj09.TVT = arr09[i].Wemng;
						} else if (arr09[i].Werks == 2020) {
							obj09.ORG = arr09[i].Wemng;
						} else if (arr09[i].Werks == 2050) {
							obj09.VVL = arr09[i].Wemng;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Sptag1;
						if (arr10[i].Werks == 2000) {
							obj10.TVT = arr10[i].Wemng;
						} else if (arr10[i].Werks == 2020) {
							obj10.ORG = arr10[i].Wemng;
						} else if (arr10[i].Werks == 2050) {
							obj10.VVL = arr10[i].Wemng;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Sptag1;
						if (arr11[i].Werks == 2000) {
							obj11.TVT = arr11[i].Wemng;
						} else if (arr11[i].Werks == 2020) {
							obj11.ORG = arr11[i].Wemng;
						} else if (arr11[i].Werks == 2050) {
							obj11.VVL = arr11[i].Wemng;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Sptag1;
						if (arr12[i].Werks == 2000) {
							obj12.TVT = arr12[i].Wemng;
						} else if (arr12[i].Werks == 2020) {
							obj12.ORG = arr12[i].Wemng;
						} else if (arr12[i].Werks == 2050) {
							obj12.VVL = arr12[i].Wemng;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Sptag1;
						if (arr01[i].Werks == 2000) {
							obj01.TVT = arr01[i].Wemng;
						} else if (arr01[i].Werks == 2020) {
							obj01.ORG = arr01[i].Wemng;
						} else if (arr01[i].Werks == 2050) {
							obj01.VVL = arr01[i].Wemng;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Sptag1;
						if (arr02[i].Werks == 2000) {
							obj02.TVT = arr02[i].Wemng;
						} else if (arr02[i].Werks == 2020) {
							obj02.ORG = arr02[i].Wemng;
						} else if (arr02[i].Werks == 2050) {
							obj02.VVL = arr02[i].Wemng;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Sptag1;
						if (arr03[i].Werks == 2000) {
							obj03.TVT = arr03[i].Wemng;
						} else if (arr03[i].Werks == 2020) {
							obj03.ORG = arr03[i].Wemng;
						} else if (arr03[i].Werks == 2050) {
							obj03.VVL = arr03[i].Wemng;
						}
					}
					if (arr03.length > 0) {
						finalArr.push(obj03);
					}
					// this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					// this.getView().getModel("visibleModel").setProperty("/MonthlyQuantityPlant", arr);
					var arrobj = [{
						"ORG": "",
						"VVL": "",
						"TVT": ""
					}]

					this.getView().getModel("visibleModel").setProperty("/MonthlyQuantityPlant", finalArr);
					for (var i = 0; i < finalArr.length; i++) {
						var aMonth = finalArr[i].month.slice(4, 6);

						if (aMonth === "04") {
							finalArr[i].month = "Apr" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "05") {
							finalArr[i].month = "May" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "06") {
							finalArr[i].month = "June" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "07") {
							finalArr[i].month = "July" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "08") {
							finalArr[i].month = "Aug" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "09") {
							finalArr[i].month = "Sept" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "10") {
							finalArr[i].month = "Oct" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "11") {
							finalArr[i].month = "Nov" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "12") {
							finalArr[i].month = "Dec" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "01") {
							finalArr[i].month = "Jan" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "02") {
							finalArr[i].month = "Feb" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "03") {
							finalArr[i].month = "March" + "-" + finalArr[i].month.slice(0, 4);
						}
					}
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

					this._buildchartforMonthlyQuantity();
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getView().byId("idChartContainer").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},

		MonthlyQuantityPlantwise: function () {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			// var adfilter = [];
			// if (this.month == undefined) {
			// 	this.month = ""
			// }
			//adfilter.push(new sap.ui.model.Filter("Sptag1", sap.ui.model.FilterOperator.EQ, this.month));
			this.getView().byId("idChartContainer").setBusy(true);
			this.getOwnerComponent().getModel().read("/MonthlyQuantityPlantwiseSet", {
				//filters: adfilter,
				//filters: [countryFilter],

				success: function (odata) {
					this.getView().byId("idChartContainer").setBusy(false);
					//var data = [];
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
						if (odata.results[i].Sptag1.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Sptag1;
						if (arr04[i].Werks == 2000) {
							obj04.TVT = arr04[i].Wemng;
						} else if (arr04[i].Werks == 2020) {
							obj04.ORG = arr04[i].Wemng;
						} else if (arr04[i].Werks == 2050) {
							obj04.VVL = arr04[i].Wemng;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Sptag1;
						if (arr05[i].Werks == 2000) {
							obj05.TVT = arr05[i].Wemng;
						} else if (arr05[i].Werks == 2020) {
							obj05.ORG = arr05[i].Wemng;
						} else if (arr05[i].Werks == 2050) {
							obj05.VVL = arr05[i].Wemng;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Sptag1;
						if (arr06[i].Werks == 2000) {
							obj06.TVT = arr06[i].Wemng;
						} else if (arr06[i].Werks == 2020) {
							obj06.ORG = arr06[i].Wemng;
						} else if (arr06[i].Werks == 2050) {
							obj06.VVL = arr06[i].Wemng;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Sptag1;
						if (arr07[i].Werks == 2000) {
							obj07.TVT = arr07[i].Wemng;
						} else if (arr07[i].Werks == 2020) {
							obj07.ORG = arr07[i].Wemng;
						} else if (arr07[i].Werks == 2050) {
							obj07.VVL = arr07[i].Wemng;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Sptag1;
						if (arr08[i].Werks == 2000) {
							obj08.TVT = arr08[i].Wemng;
						} else if (arr08[i].Werks == 2020) {
							obj08.ORG = arr08[i].Wemng;
						} else if (arr08[i].Werks == 2050) {
							obj08.VVL = arr08[i].Wemng;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Sptag1;
						if (arr09[i].Werks == 2000) {
							obj09.TVT = arr09[i].Wemng;
						} else if (arr09[i].Werks == 2020) {
							obj09.ORG = arr09[i].Wemng;
						} else if (arr09[i].Werks == 2050) {
							obj09.VVL = arr09[i].Wemng;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Sptag1;
						if (arr10[i].Werks == 2000) {
							obj10.TVT = arr10[i].Wemng;
						} else if (arr10[i].Werks == 2020) {
							obj10.ORG = arr10[i].Wemng;
						} else if (arr10[i].Werks == 2050) {
							obj10.VVL = arr10[i].Wemng;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Sptag1;
						if (arr11[i].Werks == 2000) {
							obj11.TVT = arr11[i].Wemng;
						} else if (arr11[i].Werks == 2020) {
							obj11.ORG = arr11[i].Wemng;
						} else if (arr11[i].Werks == 2050) {
							obj11.VVL = arr11[i].Wemng;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Sptag1;
						if (arr12[i].Werks == 2000) {
							obj12.TVT = arr12[i].Wemng;
						} else if (arr12[i].Werks == 2020) {
							obj12.ORG = arr12[i].Wemng;
						} else if (arr12[i].Werks == 2050) {
							obj12.VVL = arr12[i].Wemng;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Sptag1;
						if (arr01[i].Werks == 2000) {
							obj01.TVT = arr01[i].Wemng;
						} else if (arr01[i].Werks == 2020) {
							obj01.ORG = arr01[i].Wemng;
						} else if (arr01[i].Werks == 2050) {
							obj01.VVL = arr01[i].Wemng;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Sptag1;
						if (arr02[i].Werks == 2000) {
							obj02.TVT = arr02[i].Wemng;
						} else if (arr02[i].Werks == 2020) {
							obj02.ORG = arr02[i].Wemng;
						} else if (arr02[i].Werks == 2050) {
							obj02.VVL = arr02[i].Wemng;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Sptag1;
						if (arr03[i].Werks == 2000) {
							obj03.TVT = arr03[i].Wemng;
						} else if (arr03[i].Werks == 2020) {
							obj03.ORG = arr03[i].Wemng;
						} else if (arr03[i].Werks == 2050) {
							obj03.VVL = arr03[i].Wemng;
						}
					}
					if (arr03.length > 0) {
						finalArr.push(obj03);
					}
					var arrobj = [{
						"ORG": "",
						"VVL": "",
						"TVT": ""
					}]
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().getModel("visibleModel").setProperty("/MonthlyQuantityPlant", finalArr);
					for (var i = 0; i < finalArr.length; i++) {
						var aMonth = finalArr[i].month.slice(4, 6);

						if (aMonth === "04") {
							finalArr[i].month = "Apr" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "05") {
							finalArr[i].month = "May" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "06") {
							finalArr[i].month = "June" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "07") {
							finalArr[i].month = "July" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "08") {
							finalArr[i].month = "Aug" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "09") {
							finalArr[i].month = "Sept" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "10") {
							finalArr[i].month = "Oct" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "11") {
							finalArr[i].month = "Nov" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "12") {
							finalArr[i].month = "Dec" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "01") {
							finalArr[i].month = "Jan" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "02") {
							finalArr[i].month = "Feb" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "03") {
							finalArr[i].month = "March" + "-" + finalArr[i].month.slice(0, 4);
						}
					}
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
					//odata.results[i].Sptag1 = month + " " + year;
					// 	for (var key in finalArr[i]) {
					// 		if (key != "ORG") {
					// 			finalArr[i].ORG = 0;

					// 		} else if (key != "TVT") {
					// 			finalArr[i].TVT = 0;
					// 		} else if (key != "VVL") {
					// 			finalArr[i].VVL = 0;
					// 		} else if (key != "TPL") {
					// 			finalArr[i].TPL = 0;
					// 		}
					// 	}

					// var monthArr = ["04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03"];
					// for (var i = 0; i < monthArr.length; i++) {
					// 	var month = arr[i].Sptag1.slice(4, 6);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			Endate1: arr[i].Sptag1.slice(0, 4) + monthArr[i],
					// 			ORG: 0,
					// 			VVL: 0,
					// 			TPL: 0,
					// 			TVT: 0,
					// 			Tot: 0,
					// 			// arr.push(obj);
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }
					this._buildchartforMonthlyQuantity();
					this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getView().byId("idChartContainer").setBusy(false);
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});

		},
		_buildchartforMonthlyQuantity: function () {

			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var FIORI_PERCENTAGE_FORMAT_4 = "__UI5__PercentageMaxFraction4";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_4, function (value) {
				var val = value / 1000;
				//val = val.toFixed(1);
				var val1 = Math.round(val);
				// val = val + " " + "K";
				return val1;

			});
			var oVizframe = this.getView().byId("ppo1");
			oVizframe.removeAllFeeds();
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: "Month",
					value: "{visibleModel>month}"
				}],
				measures: [{
					name: "ORG",
					value: "{visibleModel>ORG}"
				}, {
					name: "VVL",
					value: "{visibleModel>VVL}"
				}, {
					name: "TVT",
					value: "{visibleModel>TVT}"
				}]
			}).bindData("visibleModel>/MonthlyQuantityPlant");
			oVizframe.setVizProperties({
				title: {
					visible: true,
					text: "Plant production"

				},
				valueAxis: {
					label: {
						formatString: FIORI_PERCENTAGE_FORMAT_4
					},
					title: {
						text: "Nos",
						visible: true
					}
				},

				plotArea: {
					dataLabel: {
						formatString: FIORI_PERCENTAGE_FORMAT_4,
						type: "value",
						visible: true
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"],
					drawingEffect: 'glossy',

					//colorPalette: ['#00B050', '#CCFF66', '#FF0000', '#FFC300']
					// colorPalette: ["#6AB187", "#CED2CC", "#F4D00C"]
					//'colorPalette': d3.scale.category20().range()
				},

			});

			oVizframe.setDataset(oDataset);
			oVizframe.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "categoryAxis",
				type: "Dimension",
				values: ["Month"]
			}));
			oVizframe.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "valueAxis",
				type: "Measure",
				values: ["ORG", "VVL", "TVT"]
			}));
			// var oTooltipVendor = new sap.viz.ui5.controls.VizTooltip({});
			// oTooltipVendor.connect(oVizframe.getVizUid());
			var oPopOver = this.getView().byId("idPopplnt");
			oPopOver.connect(oVizframe.getVizUid());
		},
		// onPressfilterOk: function () {
		// 	this._onPlantwise();
		// 	this._SelectionDialog.close();
		// },
		onClickPlant: function (oEvent) {
			//this.plant = oEvent.getSource().getSelectedKey();
			this.plantname = oEvent.getSource().getSelectedItem().getText();
			if (this.plantname == "ORG") {
				this.plant = "2020";
				this._onPlantwise();
				this._SelectionDialog.close();
			} else if (this.plantname == "VVL") {
				this.plant = "2050";
				this._onPlantwise();
				this._SelectionDialog.close();
			} else if (this.plantname == "TVT") {
				this.plant = "2000";
				this._onPlantwise();
				this._SelectionDialog.close();
			} else {
				this.MonthlyQuantityPlantwise();
				this._SelectionDialog.close();
			}

		},
		OnSelectMonth: function (oEvent) {
			this.month = oEvent.getSource().getSelectedItem().getText();
			if (this.month == "Jan") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() + "" + "01";

			} else if (this.month == "Feb") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() + "" + "02";
			} else if (this.month == "Mar") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "03";
			} else if (this.month == "Apr") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "04";
			} else if (this.month == "May") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "05";
			} else if (this.month == "Jun") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "06";
			} else if (this.month == "Jul") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "07";
			} else if (this.month == "Aug") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "08";
			} else if (this.month == "Sep") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "09";
			} else if (this.month == "Oct") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "10";
			} else if (this.month == "Nov") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "11";
			} else if (this.month == "Dec") {
				var date = new Date();
				this.m = date.getMonth();
				this.month = date.getFullYear() - 1 + "" + "12";
			} else {
				// var date = new Date();
				// this.m = date.getMonth();
				// this.month = date.getFullYear() + "" + "12";
				this.MonthlyQuantityPlantwise();
			}
			this.MonthlyQuantityMonthWise();
		},
		onResetPress: function () {
			this.MonthlyQuantityPlantwise();
		},

		_onPlantwise: function () {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			var adfilter = [];
			adfilter.push(new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, this.plant));
			//adfilter.push(new sap.ui.model.Filter("Date", sap.ui.model.FilterOperator.EQ, this.MonthDate));
			this.getView().byId("idChartContainer").setBusy(true);
			this.getOwnerComponent().getModel().read("/MonthlyQuantityPlantwiseSet", {

				filters: adfilter,
				success: function (odata) {
					this.getView().byId("idChartContainer").setBusy(false);

					// 					var arr = [];
					// 					for (var i = 0; i < odata.results.length; i++) {
					// 						//var obj = {};
					// 						var year = odata.results[i].Sptag1.slice(0, 4);
					// 						var month = odata.results[i].Sptag1.slice(4, 6);
					// 						if (month == '01') {
					// 							month = 'Jan';
					// 						} else if (month == '02') {
					// 							month = 'Feb';
					// 						} else if (month == '03') {
					// 							month = 'Mar';
					// 						} else if (month == '04') {
					// 							month = 'Apr';
					// 						} else if (month == '05') {
					// 							month = 'May';
					// 						} else if (month == '06') {
					// 							month = 'Jun';
					// 						} else if (month == '07') {
					// 							month = 'Jul';
					// 						} else if (month == '08') {
					// 							month = 'Aug';
					// 						} else if (month == '09') {
					// 							month = 'Sep';
					// 						} else if (month == '10') {
					// 							month = 'Oct';
					// 						} else if (month == '11') {
					// 							month = 'Nov';
					// 						} else if (month == '12') {
					// 							month = 'Dec';
					// 						}
					// 						odata.results[i].Sptag1 = month + " " + year;

					// 					}
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
						if (odata.results[i].Sptag1.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Sptag1.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Sptag1;
						if (arr04[i].Werks == 2000) {
							obj04.TVT = arr04[i].Wemng;
						} else if (arr04[i].Werks == 2020) {
							obj04.ORG = arr04[i].Wemng;
						} else if (arr04[i].Werks == 2050) {
							obj04.VVL = arr04[i].Wemng;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Sptag1;
						if (arr05[i].Werks == 2000) {
							obj05.TVT = arr05[i].Wemng;
						} else if (arr05[i].Werks == 2020) {
							obj05.ORG = arr05[i].Wemng;
						} else if (arr05[i].Werks == 2050) {
							obj05.VVL = arr05[i].Wemng;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Sptag1;
						if (arr06[i].Werks == 2000) {
							obj06.TVT = arr06[i].Wemng;
						} else if (arr06[i].Werks == 2020) {
							obj06.ORG = arr06[i].Wemng;
						} else if (arr06[i].Werks == 2050) {
							obj06.VVL = arr06[i].Wemng;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Sptag1;
						if (arr07[i].Werks == 2000) {
							obj07.TVT = arr07[i].Wemng;
						} else if (arr07[i].Werks == 2020) {
							obj07.ORG = arr07[i].Wemng;
						} else if (arr07[i].Werks == 2050) {
							obj07.VVL = arr07[i].Wemng;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Sptag1;
						if (arr08[i].Werks == 2000) {
							obj08.TVT = arr08[i].Wemng;
						} else if (arr08[i].Werks == 2020) {
							obj08.ORG = arr08[i].Wemng;
						} else if (arr08[i].Werks == 2050) {
							obj08.VVL = arr08[i].Wemng;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Sptag1;
						if (arr09[i].Werks == 2000) {
							obj09.TVT = arr09[i].Wemng;
						} else if (arr09[i].Werks == 2020) {
							obj09.ORG = arr09[i].Wemng;
						} else if (arr09[i].Werks == 2050) {
							obj09.VVL = arr09[i].Wemng;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Sptag1;
						if (arr10[i].Werks == 2000) {
							obj10.TVT = arr10[i].Wemng;
						} else if (arr10[i].Werks == 2020) {
							obj10.ORG = arr10[i].Wemng;
						} else if (arr10[i].Werks == 2050) {
							obj10.VVL = arr10[i].Wemng;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Sptag1;
						if (arr11[i].Werks == 2000) {
							obj11.TVT = arr11[i].Wemng;
						} else if (arr11[i].Werks == 2020) {
							obj11.ORG = arr11[i].Wemng;
						} else if (arr11[i].Werks == 2050) {
							obj11.VVL = arr11[i].Wemng;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Sptag1;
						if (arr12[i].Werks == 2000) {
							obj12.TVT = arr12[i].Wemng;
						} else if (arr12[i].Werks == 2020) {
							obj12.ORG = arr12[i].Wemng;
						} else if (arr12[i].Werks == 2050) {
							obj12.VVL = arr12[i].Wemng;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Sptag1;
						if (arr01[i].Werks == 2000) {
							obj01.TVT = arr01[i].Wemng;
						} else if (arr01[i].Werks == 2020) {
							obj01.ORG = arr01[i].Wemng;
						} else if (arr01[i].Werks == 2050) {
							obj01.VVL = arr01[i].Wemng;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Sptag1;
						if (arr02[i].Werks == 2000) {
							obj02.TVT = arr02[i].Wemng;
						} else if (arr02[i].Werks == 2020) {
							obj02.ORG = arr02[i].Wemng;
						} else if (arr02[i].Werks == 2050) {
							obj02.VVL = arr02[i].Wemng;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Sptag1;
						if (arr03[i].Werks == 2000) {
							obj03.TVT = arr03[i].Wemng;
						} else if (arr03[i].Werks == 2020) {
							obj03.ORG = arr03[i].Wemng;
						} else if (arr03[i].Werks == 2050) {
							obj03.VVL = arr03[i].Wemng;
						}
					}
					if (arr03.length > 0) {
						finalArr.push(obj03);
					}
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().getModel("visibleModel").setProperty("/MonthlyPlantwise", finalArr);
					for (var i = 0; i <= finalArr.length; i++) {
						for (var key in finalArr[i]) {
							if (key === "ORG") {
								finalArr[i].value = finalArr[i].ORG;
							} else if (key === "TVT") {
								finalArr[i].value = finalArr[i].TVT;
							} else if (key === "VVL") {
								finalArr[i].value = finalArr[i].VVL;
							}
						}
					}
					for (var i = 0; i < finalArr.length; i++) {
						var aMonth = finalArr[i].month.slice(4, 6);

						if (aMonth === "04") {
							finalArr[i].month = "Apr" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "05") {
							finalArr[i].month = "May" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "06") {
							finalArr[i].month = "June" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "07") {
							finalArr[i].month = "July" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "08") {
							finalArr[i].month = "Aug" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "09") {
							finalArr[i].month = "Sept" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "10") {
							finalArr[i].month = "Oct" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "11") {
							finalArr[i].month = "Nov" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "12") {
							finalArr[i].month = "Dec" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "01") {
							finalArr[i].month = "Jan" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "02") {
							finalArr[i].month = "Feb" + "-" + finalArr[i].month.slice(0, 4);
						} else if (aMonth === "03") {
							finalArr[i].month = "March" + "-" + finalArr[i].month.slice(0, 4);
						}
					}
					this._buildchartPlantwise();
					this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getView().byId("idChartContainer").setBusy(false);
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_buildchartPlantwise: function () {
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var FIORI_PERCENTAGE_FORMAT_31 = "__UI5__PercentageMaxFraction31";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_31, function (value) {
				var val = value / 1000;
				//val = val.toFixed(1);
				var val1 = Math.round(val);
				// val = val + " " + "K";
				return val1;

			});

			var oVizframe = this.getView().byId("ppo1");

			oVizframe.removeAllFeeds();

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: "Month",
					value: "{visibleModel>month}"
				}],
				measures: [{
					name: this.plantname,
					value: "{visibleModel>value}"
				}]
			}).bindData("visibleModel>/MonthlyPlantwise");
			oVizframe.setVizProperties({
				title: {
					visible: true,
					text: "Plant production"

				},

				plotArea: {
					dataLabel: {
						formatString: FIORI_PERCENTAGE_FORMAT_31,
						type: "value",
						visible: true
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"],
					drawingEffect: 'glossy',
				},
				// valueAxis: {
				// 	label: {
				// 		formatString: FIORI_PERCENTAGE_FORMAT_2
				// 	},
				// 	title: {
				// 		text: "Value in lacs.",
				// 		visible: true
				// 	}
				// },

			});

			oVizframe.setDataset(oDataset);
			oVizframe.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "categoryAxis",
				type: "Dimension",
				values: ["Month"]
			}));
			oVizframe.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "valueAxis",
				type: "Measure",
				values: [this.plantname]
			}));
			// var oTooltipVendor = new sap.viz.ui5.controls.VizTooltip({});
			// oTooltipVendor.connect(oVizframe.getVizUid());
			var oPopOver = this.getView().byId("idPopplnt");
			oPopOver.connect(oVizframe.getVizUid());

		},
		onPressDownloadPP: function () {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/MonthlySBPDwnldSet", {
				//filters: adfilter,
				success: function (odata) {

					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					this.getView().getModel("visibleModel").setProperty("/MonthlySBPDownload", odata.results);
					this._downloadMonSBPData(odata);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_downloadMonSBPData: function (odata) {
			if (odata.results.length <= 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnMonthlySBP();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/MonthlySBPDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Monthly SBP(" + this.fromdate + "-" + this.todate + ")"
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
		createColumnMonthlySBP: function () {
			var aCols = [];
			aCols.push({
				label: 'Sl No',
				property: 'Slno',
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
				label: 'Production Qty',
				property: 'ActualV1',
			});
			return aCols;
		},
		onfilterActionPress: function () {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			if (!this._SelectionDialog) {
				this._SelectionDialog = sap.ui.xmlfragment(
					"com.Air.Inventory.Inventory_Dashboard.fragments.Selection",
					this
				);
				this.getView().addDependent(this._SelectionDialog);
			}
			this._SelectionDialog.open();
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
		},
		onCancelPress: function () {
			this._SelectionDialog.close();
		},
		onNavBack: function () {
			this.getOwnerComponent().getRouter().navTo("InventoryDashboard");
			// var oHistory = History.getInstance();
			// var sPreviousHash = oHistory.getPreviousHash();

			// if (sPreviousHash !== undefined) {
			// 	window.history.go(-1);
			// } else {
			// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// 	oRouter.navTo("InventoryDashboard", true);
			// }
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