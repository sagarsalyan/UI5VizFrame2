sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/viz/ui5/format/ChartFormatter",
	"sap/viz/ui5/api/env/Format",
	'com/Air/Inventory/Inventory_Dashboard/model/formatter',
	'sap/ui/export/Spreadsheet'
], function (Controller, History, ChartFormatter, Format, formatter, Spreadsheet) {
	"use strict";

	return Controller.extend("com.Air.Inventory.Inventory_Dashboard.controller.PlantInventory", {
		formatter: formatter,

		onInit: function () {
			this.MonthlyGeandGrn();
			this.MonthlyGrn();
			this.MonthlyRejDispatch();
			this.MonthlyReceiptStorage();

			var date = new Date();
			this.fromdate = date.getFullYear() - 1;
			this.todate = date.getFullYear();

			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

		},
		//Download code for Monthly GRN
		onPressDownloadMonthlyGRN: function () {
			if (!this._SelectionDialogfilterplant) {
				this._SelectionDialogfilterplant = sap.ui.xmlfragment(
					"com.Air.Inventory.Inventory_Dashboard.fragments.filterplant",
					this
				);
				this.getView().addDependent(this._SelectionDialogfilterplant);
			}
			//sap.ui.getCore().byId("finYear").setValue("");
			this._SelectionDialogfilterplant.open();
			// var adfilter = [];
			// if (this.finYear == undefined) {
			// 	//this.finYear = "2020";
			// 	var date = new Date();
			// 	this.finYear = date.getFullYear() - 1;
			// }
			// adfilter.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.EQ, this.finYear));

		},
		FinMonthlyDownld: function () {
			var adfilter = [];
			adfilter.push(new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, this.plant));
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/MonthlyGRNDwldSet", {
				filters: adfilter,
				success: function (odata) {
					for (var i = 0; i < odata.results.length; i++) {
						var date = new Date(odata.results[i].Time.ms);

						odata.results[i].Time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
					}

					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					this.getView().getModel("visibleModel").setProperty("/MonthlyGrnDownload", odata.results);
					this._downloadGrnData(odata);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		onClickPlant: function (oEvent) {
			this.plant = oEvent.getSource().getSelectedKey();
			this.FinMonthlyDownld();
			this._SelectionDialogfilterplant.close();
		},
		onPressCancelplant: function () {
			this._SelectionDialogfilterplant.close();
		},
		_downloadGrnData: function (odata) {
			if (odata.results.length <= 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnMonthlyGrn();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/MonthlyGrnDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Monthly GRN(" + this.fromdate + "-" + this.todate + ")"
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
		createColumnMonthlyGrn: function () {
			var aCols = [];
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});
			aCols.push({
				label: 'Stor. location',
				property: 'Storagelocation',
			});
			aCols.push({
				label: 'Material',
				property: 'Material',
			});
			aCols.push({
				label: 'Description',
				property: 'Materialdesc',
			});
			aCols.push({
				label: 'Quantity',
				property: 'Quantity',
			});
			aCols.push({
				label: 'Amount in LC',
				property: 'Amount',
			});
			aCols.push({
				label: 'Reference Doc.',
				property: 'Reference',
			});
			aCols.push({
				label: 'Vendor',
				property: 'Vendor',
			});
			aCols.push({
				label: 'Material Doc.',
				property: 'Materialdocument',
			});
			aCols.push({
				label: 'Posting Date',
				property: 'Postingdate',
				type: 'date'
			});

			aCols.push({
				label: 'Movement type',
				property: 'Movementtype',
			});
			aCols.push({
				label: 'Purchase order',
				property: 'Ponumber',
			});
			aCols.push({
				label: 'Item',
				property: 'Item',
			});
			aCols.push({
				label: 'User Name',
				property: 'Username',
			});
			aCols.push({
				label: 'Entered at',
				property: 'Time',
				type: 'string'
			});
			return aCols;

		},
		//Download code for monthly ge and grn
		onPressDownloadMGE: function () {
			// var adfilter = [];
			// if (this.finYearMGE == undefined) {
			// 	var date = new Date();
			// 	this.finYearMGE = date.getFullYear() - 1;
			// }
			// adfilter.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.EQ, this.finYear));
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/GEVsGRNDwnldSet", {
				//filters: adfilter,
				success: function (odata) {
					for (var i = 0; i < odata.results.length; i++) {
						var date = new Date(odata.results[i].Gateexittime.ms);
						var date = new Date(odata.results[i].Grtime.ms);
						var date = new Date(odata.results[i].Gatentrytim.ms);
						odata.results[i].Gateexittime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
						odata.results[i].Grtime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
						odata.results[i].Gatentrytim = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
					}
					debugger;
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					this.getView().getModel("visibleModel").setProperty("/MonthlyGEDownload", odata.results);
					this._downloadGEData(odata);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_downloadGEData: function (odata) {
			if (odata.results.length <= 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnMGE();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/MonthlyGEDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Monthly GE and GRN(" + this.fromdate + "-" + this.todate + "))"
			};

			oSheet = new Spreadsheet(oSettings);
			oSheet.build()
				.then(function () {
					sap.m.MessageToast.show('file downloaded');
				})
				.finally(function () {
					oSheet.destroy();
				});
			// 	var oExport = new sap.ui.core.util.Export({
			// 	exportType: new sap.ui.core.util.ExportTypeCSV({
			// 		separatorChar: "\t",
			// 		mimeType: "application/vnd.ms-excel",
			// 		charset: "utf-8",
			// 		fileExtension: "xls"
			// 	}),

			// 	models:this.getView().getModel("visibleModel").getProperty('/MonthlyGEDownload');

			// 	// rows: {
			// 	// 	path: spath
			// 	// },
			// 	columns: aCols
			// });
			// oExport.saveFile("BOM change report" + "(" + this.fromdate + "-" + this.todate + ")" + this.buttonText).catch(function (oError) {

			// }).then(function () {
			// 	oExport.destroy();
			// });

		},
		createColumnMGE: function () {
			var aCols = [];
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});
			aCols.push({
				label: 'Gate entry date',
				property: 'Gatentrydat',
				type: 'date'
			});
			aCols.push({
				label: 'Time Diff',
				property: 'Timediff',
				//type: 'date'
			});
			aCols.push({
				label: 'Gate Entry Number',
				property: 'Gateentryeno',
			});
			aCols.push({
				label: 'Gate entry time',
				property: 'Gatentrytim',
				type: 'string',

			});
			aCols.push({
				label: 'Vendor',
				property: 'Vendor',
			});
			aCols.push({
				label: 'Stor. location',
				property: 'Storagelocation',
			});
			aCols.push({
				label: 'Name',
				property: 'Vendorname',
			});
			aCols.push({
				label: 'Material',
				property: 'Material',
			});
			aCols.push({
				label: 'Description',
				property: 'Materialdesc',
			});
			aCols.push({
				label: 'Challan Qty',
				property: 'Challanqty',
			});
			aCols.push({
				label: 'GR Quantity',
				property: 'Grquantity',
			});
			aCols.push({
				label: 'Short Quantity',
				property: 'Shortquantity',
			});
			aCols.push({
				label: 'ASN/Delivery No',
				property: 'Asndeliveryno',
			});
			aCols.push({
				label: 'Invoice No',
				property: 'Invoiceno',
			});
			aCols.push({
				label: 'Invoice Date',
				property: 'Invoicedate',
				type: 'date'
			});
			aCols.push({
				label: 'GR Number',
				property: 'Grnumber',

			});
			aCols.push({
				label: 'GR Date',
				property: 'Grdate',
				type: 'date'
			});
			aCols.push({
				label: 'GR Time',
				property: 'Grtime',
				type: 'sap.ui.model.type.Time',
				formatOptions: {
					pattern: 'HH:mm:ss'
				}
			});
			aCols.push({
				label: 'GR Created By',
				property: 'Grcreatedby',
			});
			aCols.push({
				label: 'Gate Exit Number',
				property: 'Gateexitnumber',
			});
			aCols.push({
				label: 'Gate exit date',
				property: 'Gateexitdate',
				type: 'date'
			});
			aCols.push({
				label: 'Gate exit time',
				property: 'Gateexittime',
				type: 'sap.ui.model.type.Time',
				formatOptions: {
					source: {
						pattern: '\'PT\'hh\'H\'mm\'M\'ss\'S\''
					},
					pattern: 'HH:mm:ss'
				}
			});
			// aCols.push({
			// 	label: 'Travel duration',
			// 	property: 'Timediff',
			// });
			aCols.push({
				label: 'Vehicle Number',
				property: 'Vehicleno',
			});
			aCols.push({
				label: 'Transport Name',
				property: 'Transportname',
			});
			aCols.push({
				label: 'Remarks',
				property: 'Remarks',
			});
			return aCols;

		},
		//Download code for monthly receipt storage
		onPressDownloadMRS: function () {
			// var adfilter = [];
			// if (this.finYearMRS == undefined) {
			// 	// this.finYearMRS = "2020";
			// 	var date = new Date();
			// 	this.finYearMRS = date.getFullYear() - 1;
			// }
			// adfilter.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.EQ, this.finYearMRS));
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/ReceiptStrgDwnldSet", {
				//filters: adfilter,
				success: function (odata) {
					for (var i = 0; i < odata.results.length; i++) {
						var date = new Date(odata.results[i].Getime.ms);
						odata.results[i].Getime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
					}

					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					this.getView().getModel("visibleModel").setProperty("/MonthlyMRSDownload", odata.results);
					this._downloadMRSData(odata);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_downloadMRSData: function (odata) {
			if (odata.results.length == 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnMRS();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/MonthlyMRSDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Monthly Receipt Storage(" + this.fromdate + "-" + this.todate + ")"
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
		createColumnMRS: function () {
			var aCols = [];
			aCols.push({
				label: 'ASN',
				property: 'Asnno',
			});
			aCols.push({
				label: 'GR Number',
				property: 'Grnumber',

			});
			aCols.push({
				label: 'GR Quantity',
				property: 'Grqty',
			});
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});
			aCols.push({
				label: 'Shortage Quantity',
				property: 'Shortqty',
			});
			aCols.push({
				label: 'Posting Date',
				property: 'Grpostingdate',
				type: 'date'
			});
			aCols.push({
				label: 'Stor. location',
				property: 'Storagelocation',
			});
			aCols.push({
				label: 'Material',
				property: 'Material',
			});
			aCols.push({
				label: 'Description',
				property: 'Materialdesc',
			});
			aCols.push({
				label: 'Challan Qty',
				property: 'Challanty',
			});
			aCols.push({
				label: 'Vendor',
				property: 'Vendocode',
			});
			aCols.push({
				label: 'Name',
				property: 'Vendorname',
			});
			aCols.push({
				label: 'Invoice Number',
				property: 'Invoiceno',

			});
			aCols.push({
				label: 'Invoice Date',
				property: 'Invoicedate',
				type: 'date'
			});
			aCols.push({
				label: 'Gate Entry Number',
				property: 'Gateentryeno',
			});
			aCols.push({
				label: 'Vehicle gate entry date',
				property: 'Gedate',
				type: 'date'
			});
			aCols.push({
				label: 'Vehicle gate entry time',
				property: 'Getime',
			});
			aCols.push({
				label: 'User Name',
				property: 'Username',
			});
			aCols.push({
				label: 'Value',
				property: 'Value',
			});

			return aCols;

		},
		//Download code for Monthly Rejct Dispt
		onPressDownloadMRD: function () {
			// var adfilter = [];
			// if (this.finYearMRD == undefined) {
			// 	// this.finYearMRD = "2020";
			// 	var date = new Date();
			// 	this.finYearMRD = date.getFullYear() - 1;

			// }
			// adfilter.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.EQ, this.finYearMRD));
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/RejctDisptDwnldSet", {
				//filters: adfilter,
				success: function (odata) {

					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					this.getView().getModel("visibleModel").setProperty("/MonthRejDownload", odata.results);
					this._downloadMRD(odata);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_downloadMRD: function (odata) {
			if (odata.results.length <= 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnMonthRejDis();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/MonthRejDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Monthly Rejection Dispatch(" + this.fromdate + "-" + this.todate + ")"
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
		createColumnMonthRejDis: function () {
			var aCols = [];
			aCols.push({
				label: 'FI Document No',
				property: 'Fidocumentno',
			});

			aCols.push({
				label: 'Material',
				property: 'Material',
			});
			aCols.push({
				label: 'Description',
				property: 'Materialdesc',
			});
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});

			aCols.push({
				label: 'Gate exit no',
				property: 'Gateexitno',
			});
			aCols.push({
				label: 'Gate entry ageing',
				property: 'Geageing',
			});
			aCols.push({
				label: 'GE Date',
				property: 'Gedate',
				type: 'date'
			});
			aCols.push({
				label: 'GST Inv No',
				property: 'Gstinvno',
			});
			aCols.push({
				label: 'Inv Ageing',
				property: 'Invageing',
			});

			aCols.push({
				label: 'Invoice Date',
				property: 'Invdate',
				type: 'date'
			});
			aCols.push({
				label: 'Invoice Doc',
				property: 'Invdoc',
			});
			aCols.push({
				label: 'Rejection Date',
				property: 'Rejdate',
				type: 'date'
			});

			aCols.push({
				label: 'Rejection Doc',
				property: 'Rejdoc',
			});
			aCols.push({
				label: 'Rejection quantity',
				property: 'Rejqty',
			});
			aCols.push({
				label: 'Rejection value',
				property: 'Rejvalue',
			});
			aCols.push({
				label: 'Base Unit',
				property: 'Uom',
			});
			aCols.push({
				label: 'Vendor',
				property: 'Vendor',
			});
			aCols.push({
				label: 'Name',
				property: 'Vendorname',
			});
			return aCols;

		},
		//end of excel download section
		MonthlyGeandGrn: function () {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getView().byId("idVizframeMatchedSet2").setBusy(true);
			var adfilter = [];
			var date = new Date();
			if (this.finYearMGE == undefined) {
				if (date.getMonth() + 1 <= 3) {
					var preYear = date.getFullYear() - 1 + "04";
					var postYear = date.getFullYear() + "03";
				} else {
					var preYear = date.getFullYear() + "04";
					var postYear = date.getFullYear() + 1 + "03";
				}
			}
			adfilter.push(new sap.ui.model.Filter("Endate1", sap.ui.model.FilterOperator.BT, preYear, postYear));
			this.getOwnerComponent().getModel().read("/MonthlyGEvsGRNSet", {
				filters: adfilter,
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
						if (odata.results[i].Endate1.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Endate1;
						if (arr04[i].Plant == 2000) {
							obj04.TVT = arr04[i].Number;
						} else if (arr04[i].Plant == 2020) {
							obj04.ORG = arr04[i].Number;
						} else if (arr04[i].Plant == 2050) {
							obj04.VVL = arr04[i].Number;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Endate1;
						if (arr05[i].Plant == 2000) {
							obj05.TVT = arr05[i].Number;
						} else if (arr05[i].Plant == 2020) {
							obj05.ORG = arr05[i].Number;
						} else if (arr05[i].Plant == 2050) {
							obj05.VVL = arr05[i].Number;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Endate1;
						if (arr06[i].Plant == 2000) {
							obj06.TVT = arr06[i].Number;
						} else if (arr06[i].Plant == 2020) {
							obj06.ORG = arr06[i].Number;
						} else if (arr06[i].Plant == 2050) {
							obj06.VVL = arr06[i].Number;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Endate1;
						if (arr07[i].Plant == 2000) {
							obj07.TVT = arr07[i].Number;
						} else if (arr07[i].Plant == 2020) {
							obj07.ORG = arr07[i].Number;
						} else if (arr07[i].Plant == 2050) {
							obj07.VVL = arr07[i].Number;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Endate1;
						if (arr08[i].Plant == 2000) {
							obj08.TVT = arr08[i].Number;
						} else if (arr08[i].Plant == 2020) {
							obj08.ORG = arr08[i].Number;
						} else if (arr08[i].Plant == 2050) {
							obj08.VVL = arr08[i].Number;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Endate1;
						if (arr09[i].Plant == 2000) {
							obj09.TVT = arr09[i].Number;
						} else if (arr09[i].Plant == 2020) {
							obj09.ORG = arr09[i].Number;
						} else if (arr09[i].Plant == 2050) {
							obj09.VVL = arr09[i].Number;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Endate1;
						if (arr10[i].Plant == 2000) {
							obj10.TVT = arr10[i].Number;
						} else if (arr10[i].Plant == 2020) {
							obj10.ORG = arr10[i].Number;
						} else if (arr10[i].Plant == 2050) {
							obj10.VVL = arr10[i].Number;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Endate1;
						if (arr11[i].Plant == 2000) {
							obj11.TVT = arr11[i].Number;
						} else if (arr11[i].Plant == 2020) {
							obj11.ORG = arr11[i].Number;
						} else if (arr11[i].Plant == 2050) {
							obj11.VVL = arr11[i].Number;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Endate1;
						if (arr12[i].Plant == 2000) {
							obj12.TVT = arr12[i].Number;
						} else if (arr12[i].Plant == 2020) {
							obj12.ORG = arr12[i].Number;
						} else if (arr12[i].Plant == 2050) {
							obj12.VVL = arr12[i].Number;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Endate1;
						if (arr01[i].Plant == 2000) {
							obj01.TVT = arr01[i].Number;
						} else if (arr01[i].Plant == 2020) {
							obj01.ORG = arr01[i].Number;
						} else if (arr01[i].Plant == 2050) {
							obj01.VVL = arr01[i].Number;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Endate1;
						if (arr02[i].Plant == 2000) {
							obj02.TVT = arr02[i].Number;
						} else if (arr02[i].Plant == 2020) {
							obj02.ORG = arr02[i].Number;
						} else if (arr02[i].Plant == 2050) {
							obj02.VVL = arr02[i].Number;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Endate1;
						if (arr03[i].Plant == 2000) {
							obj03.TVT = arr03[i].Number;
						} else if (arr03[i].Plant == 2020) {
							obj03.ORG = arr03[i].Number;
						} else if (arr03[i].Plant == 2050) {
							obj03.VVL = arr03[i].Number;
						}
					}
					if (arr03.length > 0) {
						finalArr.push(obj03);
					}
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					var arrobj = [{
						"ORG": "",
						"VVL": "",
						"TVT": ""
					}]
					this.getView().getModel("visibleModel").setProperty("/MonthlyGeGrn", finalArr);
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
					// 	var month = arr[i].Endate1.slice(4, 6);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			Endate1: arr[i].Endate1.slice(0, 4) + monthArr[i],
					// 			VVL: 0,
					// 			ORG: 0,
					// 			TVT: 0,
					// 			TPL: 0,
					// 			Tot: 0
					// 				// arr.push(obj);
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }
					this._buildchartforMonthlygrn();
					this.getView().byId("idVizframeMatchedSet2").setBusy(false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().byId("idVizframeMatchedSet2").setBusy(false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		FinMonthlyGeandGrn: function () {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getView().byId("idVizframeMatchedSet2").setBusy(true);
			var adfilter = [];
			var date = new Date();
			var checkingYear = this.finYearMGE + 1;
			if (checkingYear == date.getFullYear()) {
				var preYear = this.finYearMGE + "04";
				var Nextyear = parseInt(this.finYearMGE) + 1;
				var postYear = Nextyear + "03";

			} else {
				var preYear = this.finYearMGE + "04";
				var Nextyear = parseInt(this.finYearMGE) + 1;
				var postYear = Nextyear + "03";
			}
			adfilter.push(new sap.ui.model.Filter("Endate1", sap.ui.model.FilterOperator.BT, preYear, postYear));
			this.getOwnerComponent().getModel().read("/MonthlyGEvsGRNSet", {
				filters: adfilter,
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
						if (odata.results[i].Endate1.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Endate1.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Endate1;
						if (arr04[i].Plant == 2000) {
							obj04.TVT = arr04[i].Number;
						} else if (arr04[i].Plant == 2020) {
							obj04.ORG = arr04[i].Number;
						} else if (arr04[i].Plant == 2050) {
							obj04.VVL = arr04[i].Number;
						} else if (arr04[i].Plant == 2080) {
							obj04.TPL = arr04[i].Number;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Endate1;
						if (arr05[i].Plant == 2000) {
							obj05.TVT = arr05[i].Number;
						} else if (arr05[i].Plant == 2020) {
							obj05.ORG = arr05[i].Number;
						} else if (arr05[i].Plant == 2050) {
							obj05.VVL = arr05[i].Number;
						} else if (arr05[i].Plant == 2080) {
							obj05.TPL = arr05[i].Number;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Endate1;
						if (arr06[i].Plant == 2000) {
							obj06.TVT = arr06[i].Number;
						} else if (arr06[i].Plant == 2020) {
							obj06.ORG = arr06[i].Number;
						} else if (arr06[i].Plant == 2050) {
							obj06.VVL = arr06[i].Number;
						} else if (arr06[i].Plant == 2080) {
							obj06.TPL = arr06[i].Number;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Endate1;
						if (arr07[i].Plant == 2000) {
							obj07.TVT = arr07[i].Number;
						} else if (arr07[i].Plant == 2020) {
							obj07.ORG = arr07[i].Number;
						} else if (arr07[i].Plant == 2050) {
							obj07.VVL = arr07[i].Number;
						} else if (arr07[i].Plant == 2080) {
							obj07.TPL = arr07[i].Number;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Endate1;
						if (arr08[i].Plant == 2000) {
							obj08.TVT = arr08[i].Number;
						} else if (arr08[i].Plant == 2020) {
							obj08.ORG = arr08[i].Number;
						} else if (arr08[i].Plant == 2050) {
							obj08.VVL = arr08[i].Number;
						} else if (arr08[i].Plant == 2080) {
							obj08.TPL = arr08[i].Number;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Endate1;
						if (arr09[i].Plant == 2000) {
							obj09.TVT = arr09[i].Number;
						} else if (arr09[i].Plant == 2020) {
							obj09.ORG = arr09[i].Number;
						} else if (arr09[i].Plant == 2050) {
							obj09.VVL = arr09[i].Number;
						} else if (arr09[i].Plant == 2080) {
							obj09.TPL = arr09[i].Number;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Endate1;
						if (arr10[i].Plant == 2000) {
							obj10.TVT = arr10[i].Number;
						} else if (arr10[i].Plant == 2020) {
							obj10.ORG = arr10[i].Number;
						} else if (arr10[i].Plant == 2050) {
							obj10.VVL = arr10[i].Number;
						} else if (arr10[i].Plant == 2080) {
							obj10.TPL = arr10[i].Number;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Endate1;
						if (arr11[i].Plant == 2000) {
							obj11.TVT = arr11[i].Number;
						} else if (arr11[i].Plant == 2020) {
							obj11.ORG = arr11[i].Number;
						} else if (arr11[i].Plant == 2050) {
							obj11.VVL = arr11[i].Number;
						} else if (arr11[i].Plant == 2080) {
							obj11.TPL = arr11[i].Number;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Endate1;
						if (arr12[i].Plant == 2000) {
							obj12.TVT = arr12[i].Number;
						} else if (arr12[i].Plant == 2020) {
							obj12.ORG = arr12[i].Number;
						} else if (arr12[i].Plant == 2050) {
							obj12.VVL = arr12[i].Number;
						} else if (arr12[i].Plant == 2080) {
							obj12.TPL = arr12[i].Number;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Endate1;
						if (arr01[i].Plant == 2000) {
							obj01.TVT = arr01[i].Number;
						} else if (arr01[i].Plant == 2020) {
							obj01.ORG = arr01[i].Number;
						} else if (arr01[i].Plant == 2050) {
							obj01.VVL = arr01[i].Number;
						} else if (arr01[i].Plant == 2080) {
							obj01.TPL = arr01[i].Number;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Endate1;
						if (arr02[i].Plant == 2000) {
							obj02.TVT = arr02[i].Number;
						} else if (arr02[i].Plant == 2020) {
							obj02.ORG = arr02[i].Number;
						} else if (arr02[i].Plant == 2050) {
							obj02.VVL = arr02[i].Number;
						} else if (arr02[i].Plant == 2080) {
							obj02.TPL = arr02[i].Number;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Endate1;
						if (arr03[i].Plant == 2000) {
							obj03.TVT = arr03[i].Number;
						} else if (arr03[i].Plant == 2020) {
							obj03.ORG = arr03[i].Number;
						} else if (arr03[i].Plant == 2050) {
							obj03.VVL = arr03[i].Number;
						} else if (arr03[i].Plant == 2080) {
							obj03.TPL = arr03[i].Number;
						}
					}
					if (arr03.length > 0) {
						finalArr.push(obj03);
					}
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					var arrobj = [{
						"ORG": "",
						"VVL": "",
						"TVT": ""
					}]
					this.getView().getModel("visibleModel").setProperty("/MonthlyGeGrn", finalArr);
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
					// 	var month = arr[i].Endate1.slice(4, 6);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			Endate1: arr[i].Endate1.slice(0, 4) + monthArr[i],
					// 			VVL: 0,
					// 			ORG: 0,
					// 			TVT: 0,
					// 			TPL: 0,
					// 			Tot: 0
					// 				// arr.push(obj);
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }
					this._buildchartforMonthlygrn();
					this.getView().byId("idVizframeMatchedSet2").setBusy(false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getView().byId("idVizframeMatchedSet2").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_buildchartforMonthlygrn: function () {
			var oVizframeMonthly = this.getView().byId("idVizframeMatchedSet2");
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			oVizframeMonthly.setVizProperties({
				plotArea: {
					drawingEffect: 'glossy',
					// dataPointSize: {
					// 	min: 5
					// },
					dataLabel: {
						visible: true,
						showTotal: true,
						formatString: formatPattern.SHORTFLOAT
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"],
				},
				valueAxis: {
					label: {
						formatString: formatPattern.SHORTFLOAT
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
				// 	title: {
				// 		visible: true
				// 	}
				// },
				title: {
					visible: false,
					text: 'Monthly quantity plant wise'
				}
			});
			var oPopOver = this.getView().byId("idPopOverMatchedSet2");
			oPopOver.connect(oVizframeMonthly.getVizUid());
			oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
		},
		MonthlyGrn: function () {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getView().byId("idVizFrameColumn112").setBusy(true);
			var adfilter = [];
			var date = new Date();
			if (this.finYear == undefined) {
				if (date.getMonth() + 1 <= 3) {
					var preYear = date.getFullYear() - 1 + "04";
					var postYear = date.getFullYear() + "03";
				} else {
					var preYear = date.getFullYear() + "04";
					var postYear = date.getFullYear() + 1 + "03";
				}
			}
			adfilter.push(new sap.ui.model.Filter("Budat", sap.ui.model.FilterOperator.BT, preYear, postYear));
			this.getOwnerComponent().getModel().read("/MonthlyGRNSet", {
				filters: adfilter,
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
						if (odata.results[i].Budat.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Budat;
						if (arr04[i].Werks == 2000) {
							obj04.TVT = Math.round(arr04[i].Dmbtr / 10000000);
						} else if (arr04[i].Werks == 2020) {
							obj04.ORG = Math.round(arr04[i].Dmbtr / 10000000);
						} else if (arr04[i].Werks == 2050) {
							obj04.VVL = Math.round(arr04[i].Dmbtr / 10000000);
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Budat;
						if (arr05[i].Werks == 2000) {
							obj05.TVT = Math.round(arr05[i].Dmbtr / 10000000);
						} else if (arr05[i].Werks == 2020) {
							obj05.ORG = Math.round(arr05[i].Dmbtr / 10000000);
						} else if (arr05[i].Werks == 2050) {
							obj05.VVL = Math.round(arr05[i].Dmbtr / 10000000);
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Budat;
						if (arr06[i].Werks == 2000) {
							obj06.TVT = Math.round(arr06[i].Dmbtr / 10000000);
						} else if (arr06[i].Werks == 2020) {
							obj06.ORG = Math.round(arr06[i].Dmbtr / 10000000);
						} else if (arr06[i].Werks == 2050) {
							obj06.VVL = Math.round(arr06[i].Dmbtr / 10000000);
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Budat;
						if (arr07[i].Werks == 2000) {
							obj07.TVT = Math.round(arr07[i].Dmbtr / 10000000);
						} else if (arr07[i].Werks == 2020) {
							obj07.ORG = Math.round(arr07[i].Dmbtr / 10000000);
						} else if (arr07[i].Werks == 2050) {
							obj07.VVL = Math.round(arr07[i].Dmbtr / 10000000);
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Budat;
						if (arr08[i].Werks == 2000) {
							obj08.TVT = Math.round(arr08[i].Dmbtr / 10000000);
						} else if (arr08[i].Werks == 2020) {
							obj08.ORG = Math.round(arr08[i].Dmbtr / 10000000);
						} else if (arr08[i].Werks == 2050) {
							obj08.VVL = Math.round(arr08[i].Dmbtr / 10000000);
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Budat;
						if (arr09[i].Werks == 2000) {
							obj09.TVT = Math.round(arr09[i].Dmbtr / 10000000);
						} else if (arr09[i].Werks == 2020) {
							obj09.ORG = Math.round(arr09[i].Dmbtr / 10000000);
						} else if (arr09[i].Werks == 2050) {
							obj09.VVL = Math.round(arr09[i].Dmbtr / 10000000);
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Budat;
						if (arr10[i].Werks == 2000) {
							obj10.TVT = Math.round(arr10[i].Dmbtr / 10000000);
						} else if (arr10[i].Werks == 2020) {
							obj10.ORG = Math.round(arr10[i].Dmbtr / 10000000);
						} else if (arr10[i].Werks == 2050) {
							obj10.VVL = Math.round(arr10[i].Dmbtr / 10000000);
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Budat;
						if (arr11[i].Werks == 2000) {
							obj11.TVT = Math.round(arr11[i].Dmbtr / 10000000);
						} else if (arr11[i].Werks == 2020) {
							obj11.ORG = Math.round(arr11[i].Dmbtr / 10000000);
						} else if (arr11[i].Werks == 2050) {
							obj11.VVL = Math.round(arr11[i].Dmbtr / 10000000);
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Budat;
						if (arr12[i].Werks == 2000) {
							obj12.TVT = Math.round(arr12[i].Dmbtr / 10000000);
						} else if (arr12[i].Werks == 2020) {
							obj12.ORG = Math.round(arr12[i].Dmbtr / 10000000);
						} else if (arr12[i].Werks == 2050) {
							obj12.VVL = Math.round(arr12[i].Dmbtr / 10000000);
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Budat;
						if (arr01[i].Werks == 2000) {
							obj01.TVT = Math.round(arr01[i].Dmbtr / 10000000);
						} else if (arr01[i].Werks == 2020) {
							obj01.ORG = Math.round(arr01[i].Dmbtr / 10000000);
						} else if (arr01[i].Werks == 2050) {
							obj01.VVL = Math.round(arr01[i].Dmbtr / 10000000);
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Budat;
						if (arr02[i].Werks == 2000) {
							obj02.TVT = Math.round(arr02[i].Dmbtr / 10000000);
						} else if (arr02[i].Werks == 2020) {
							obj02.ORG = Math.round(arr02[i].Dmbtr / 10000000);
						} else if (arr02[i].Werks == 2050) {
							obj02.VVL = Math.round(arr02[i].Dmbtr / 10000000);
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Budat;
						if (arr03[i].Werks == 2000) {
							obj03.TVT = Math.round(arr03[i].Dmbtr / 10000000);
						} else if (arr03[i].Werks == 2020) {
							obj03.ORG = Math.round(arr03[i].Dmbtr / 10000000);
						} else if (arr03[i].Werks == 2050) {
							obj03.VVL = Math.round(arr03[i].Dmbtr / 10000000);
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
					this.getView().getModel("visibleModel").setProperty("/MonthlyGrn", finalArr);
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
					// 	var month = arr[i].Budat.slice(4, 6);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			date: arr[i].Budat.slice(0, 4) + monthArr[i],
					// 			VVL: 0,
					// 			ORG: 0,
					// 			TVT: 0,
					// 			VVT: 0
					// 				// arr.push(obj);
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }

					this._buildchartforMonthlyGrnPlan();
					this.getView().byId("idVizFrameColumn112").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getView().byId("idVizFrameColumn112").setBusy(false);
					// this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		//passing filter for the monthly grn
		FinMonthlyGrn: function () {
			this.getView().byId("idVizFrameColumn112").setBusy(true);
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			var adfilter = [];
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
			adfilter.push(new sap.ui.model.Filter("Budat", sap.ui.model.FilterOperator.BT, preYear, postYear));
			this.getOwnerComponent().getModel().read("/MonthlyGRNSet", {
				filters: adfilter,
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
						if (odata.results[i].Budat.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Budat;
						if (arr04[i].Werks == 2000) {
							obj04.TVT = Math.round(arr04[i].Dmbtr / 10000000);
						} else if (arr04[i].Werks == 2020) {
							obj04.ORG = Math.round(arr04[i].Dmbtr / 10000000);
						} else if (arr04[i].Werks == 2050) {
							obj04.VVL = Math.round(arr04[i].Dmbtr / 10000000);
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Budat;
						if (arr05[i].Werks == 2000) {
							obj05.TVT = Math.round(arr05[i].Dmbtr / 10000000);
						} else if (arr05[i].Werks == 2020) {
							obj05.ORG = Math.round(arr05[i].Dmbtr / 10000000);
						} else if (arr05[i].Werks == 2050) {
							obj05.VVL = Math.round(arr05[i].Dmbtr / 10000000);
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Budat;
						if (arr06[i].Werks == 2000) {
							obj06.TVT = Math.round(arr06[i].Dmbtr / 10000000);;
						} else if (arr06[i].Werks == 2020) {
							obj06.ORG = Math.round(arr06[i].Dmbtr / 10000000);;
						} else if (arr06[i].Werks == 2050) {
							obj06.VVL = Math.round(arr06[i].Dmbtr / 10000000);
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Budat;
						if (arr07[i].Werks == 2000) {
							obj07.TVT = Math.round(arr07[i].Dmbtr / 10000000);
						} else if (arr07[i].Werks == 2020) {
							obj07.ORG = Math.round(arr07[i].Dmbtr / 10000000);
						} else if (arr07[i].Werks == 2050) {
							obj07.VVL = Math.round(arr07[i].Dmbtr / 10000000);
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Budat;
						if (arr07[i].Werks == 2000) {
							obj08.TVT = Math.round(arr08[i].Dmbtr / 10000000);
						} else if (arr08[i].Werks == 2020) {
							obj08.ORG = Math.round(arr08[i].Dmbtr / 10000000);
						} else if (arr08[i].Werks == 2050) {
							obj08.VVL = Math.round(arr08[i].Dmbtr / 10000000);
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Budat;
						if (arr09[i].Werks == 2000) {
							obj09.TVT = Math.round(arr09[i].Dmbtr / 10000000);
						} else if (arr09[i].Werks == 2020) {
							obj09.ORG = Math.round(arr09[i].Dmbtr / 10000000);
						} else if (arr09[i].Werks == 2050) {
							obj09.VVL = Math.round(arr09[i].Dmbtr / 10000000);
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Budat;
						if (arr10[i].Werks == 2000) {
							obj10.TVT = Math.round(arr10[i].Dmbtr / 10000000);
						} else if (arr10[i].Werks == 2020) {
							obj10.ORG = Math.round(arr10[i].Dmbtr / 10000000);
						} else if (arr10[i].Werks == 2050) {
							obj10.VVL = Math.round(arr10[i].Dmbtr / 10000000);
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Budat;
						if (arr11[i].Werks == 2000) {
							obj11.TVT = Math.round(arr11[i].Dmbtr / 10000000);
							Math.round(arr04[i].Dmbtr / 10000000);
						} else if (arr11[i].Werks == 2020) {
							obj11.ORG = Math.round(arr11[i].Dmbtr / 10000000);
							Math.round(arr04[i].Dmbtr / 10000000);
						} else if (arr11[i].Werks == 2050) {
							obj11.VVL = Math.round(arr11[i].Dmbtr / 10000000);
							Math.round(arr04[i].Dmbtr / 10000000);
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Budat;
						if (arr12[i].Werks == 2000) {
							obj12.TVT = Math.round(arr12[i].Dmbtr / 10000000);
						} else if (arr12[i].Werks == 2020) {
							obj12.ORG = Math.round(arr12[i].Dmbtr / 10000000);
						} else if (arr12[i].Werks == 2050) {
							obj12.VVL = Math.round(arr12[i].Dmbtr / 10000000);
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Budat;
						if (arr01[i].Werks == 2000) {
							obj01.TVT = Math.round(arr01[i].Dmbtr / 10000000);
						} else if (arr01[i].Werks == 2020) {
							obj01.ORG = Math.round(arr01[i].Dmbtr / 10000000);
						} else if (arr01[i].Werks == 2050) {
							obj01.VVL = Math.round(arr01[i].Dmbtr / 10000000);
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Budat;
						if (arr02[i].Werks == 2000) {
							obj02.TVT = Math.round(arr02[i].Dmbtr / 10000000);
						} else if (arr02[i].Werks == 2020) {
							obj02.ORG = Math.round(arr02[i].Dmbtr / 10000000);
						} else if (arr02[i].Werks == 2050) {
							obj02.VVL = Math.round(arr02[i].Dmbtr / 10000000);
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Budat;
						if (arr03[i].Werks == 2000) {
							obj03.TVT = Math.round(arr03[i].Dmbtr / 10000000);
						} else if (arr03[i].Werks == 2020) {
							obj03.ORG = Math.round(arr03[i].Dmbtr / 10000000);
						} else if (arr03[i].Werks == 2050) {
							obj03.VVL = Math.round(arr03[i].Dmbtr / 10000000);
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
					this.getView().getModel("visibleModel").setProperty("/MonthlyGrn", finalArr);
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
					// 	var month = arr[i].Budat.slice(4, 6);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			date: arr[i].Budat.slice(0, 4) + monthArr[i],
					// 			VVL: 0,
					// 			ORG: 0,
					// 			TVT: 0,
					// 			VVT: 0
					// 				// arr.push(obj);
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }

					this._buildchartforMonthlyGrnPlan();
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().byId("idVizFrameColumn112").setBusy(false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().byId("idVizFrameColumn112").setBusy(false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_buildchartforMonthlyGrnPlan: function () {
			var oVizframeMonthly = this.getView().byId("idVizFrameColumn112");
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var FIORI_PERCENTAGE_FORMAT_5 = "__UI5__PercentageMaxFraction5";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_5, function (value) {
				// var val = value / 10000000;
				// val = val.toFixed(1);
				// var val1 = Math.round(val);
				//val = val + " " + "Lakhs";
				var val = value;
				return val;

			});

			oVizframeMonthly.setVizProperties({
				plotArea: {
					drawingEffect: 'glossy',

					dataLabel: {
						visible: true,
						showTotal: true,
						formatString: FIORI_PERCENTAGE_FORMAT_5
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"],
				},
				valueAxis: {
					label: {
						formatString: FIORI_PERCENTAGE_FORMAT_5
					},
					title: {
						text: "Values(In Crores)",
						visible: true
					}
				},
				// categoryAxis: {
				// 	label: {
				// 		formatString: formatYear
				// 	},
				// 	title: {
				// 		visible: true
				// 	}
				// },
				title: {
					visible: false,
					text: 'Monthly quantity plant wise'
				}
			});
			var oPopOver = this.getView().byId("idPopOverMisCol102");
			oPopOver.connect(oVizframeMonthly.getVizUid());
			oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
		},
		MonthlyReceiptStorage: function () {
			this.getView().byId("idVizframeNonmov1112").setBusy(true);
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			var adfilter = [];
			var date = new Date();
			if (this.finYearMRS == undefined) {
				if (date.getMonth() + 1 <= 3) {
					var preYear = date.getFullYear() - 1 + "04";
					var postYear = date.getFullYear() + "03";
				} else {
					var preYear = date.getFullYear() + "04";
					var postYear = date.getFullYear() + 1 + "03";
				}
			}
			adfilter.push(new sap.ui.model.Filter("Bldat", sap.ui.model.FilterOperator.BT, preYear, postYear));
			this.getOwnerComponent().getModel().read("/MonthlyReceiptStorageSet", {
				filters: adfilter,
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
						if (odata.results[i].Bldat.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Bldat;
						if (arr04[i].Werks == 2000) {
							obj04.TVT = arr04[i].Value;
						} else if (arr04[i].Werks == 2020) {
							obj04.ORG = arr04[i].Value;
						} else if (arr04[i].Werks == 2050) {
							obj04.VVL = arr04[i].Value;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Bldat;
						if (arr05[i].Werks == 2000) {
							obj05.TVT = arr05[i].Value;
						} else if (arr05[i].Werks == 2020) {
							obj05.ORG = arr05[i].Value;
						} else if (arr05[i].Werks == 2050) {
							obj05.VVL = arr05[i].Value;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Bldat;
						if (arr06[i].Werks == 2000) {
							obj06.TVT = arr06[i].Value;
						} else if (arr06[i].Werks == 2020) {
							obj06.ORG = arr06[i].Value;
						} else if (arr06[i].Werks == 2050) {
							obj06.VVL = arr06[i].Value;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Bldat;
						if (arr07[i].Werks == 2000) {
							obj07.TVT = arr07[i].Value;
						} else if (arr07[i].Werks == 2020) {
							obj07.ORG = arr07[i].Value;
						} else if (arr07[i].Werks == 2050) {
							obj07.VVL = arr07[i].Value;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Bldat;
						if (arr08[i].Werks == 2000) {
							obj08.TVT = arr08[i].Value;
						} else if (arr08[i].Werks == 2020) {
							obj08.ORG = arr08[i].Value;
						} else if (arr08[i].Werks == 2050) {
							obj08.VVL = arr08[i].Value;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Bldat;
						if (arr09[i].Werks == 2000) {
							obj09.TVT = arr09[i].Value;
						} else if (arr09[i].Werks == 2020) {
							obj09.ORG = arr09[i].Value;
						} else if (arr09[i].Werks == 2050) {
							obj09.VVL = arr09[i].Value;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Bldat;
						if (arr10[i].Werks == 2000) {
							obj10.TVT = arr10[i].Value;
						} else if (arr10[i].Werks == 2020) {
							obj10.ORG = arr10[i].Value;
						} else if (arr10[i].Werks == 2050) {
							obj10.VVL = arr10[i].Value;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Bldat;
						if (arr11[i].Werks == 2000) {
							obj11.TVT = arr11[i].Value;
						} else if (arr11[i].Werks == 2020) {
							obj11.ORG = arr11[i].Value;
						} else if (arr11[i].Werks == 2050) {
							obj11.VVL = arr11[i].Value;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Bldat;
						if (arr12[i].Werks == 2000) {
							obj12.TVT = arr12[i].Value;
						} else if (arr12[i].Werks == 2020) {
							obj12.ORG = arr12[i].Value;
						} else if (arr12[i].Werks == 2050) {
							obj12.VVL = arr12[i].Value;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Bldat;
						if (arr01[i].Werks == 2000) {
							obj01.TVT = arr01[i].Value;
						} else if (arr01[i].Werks == 2020) {
							obj01.ORG = arr01[i].Value;
						} else if (arr01[i].Werks == 2050) {
							obj01.VVL = arr01[i].Value;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Bldat;
						if (arr02[i].Werks == 2000) {
							obj02.TVT = arr02[i].Value;
						} else if (arr02[i].Werks == 2020) {
							obj02.ORG = arr02[i].Value;
						} else if (arr02[i].Werks == 2050) {
							obj02.VVL = arr02[i].Value;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Bldat;
						if (arr03[i].Werks == 2000) {
							obj03.TVT = arr03[i].Value;
						} else if (arr03[i].Werks == 2020) {
							obj03.ORG = arr03[i].Value;
						} else if (arr03[i].Werks == 2050) {
							obj03.VVL = arr03[i].Value;
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
					this.getView().getModel("visibleModel").setProperty("/MonthlyReceipt", finalArr);
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
					// 	var month = arr[i].Bldat.slice(4, 6);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			date: arr[i].Bldat.slice(0, 4) + monthArr[i],
					// 			TPL: 0,
					// 			VVL: 0,
					// 			ORG: 0,
					// 			TVT: 0
					// 				// arr.push(obj);
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }

					this._buildchartforMonthlyReceipt();
					this.getView().byId("idVizframeNonmov1112").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getView().byId("idVizframeNonmov1112").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		FinMonthlyReceiptStorage: function () {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getView().byId("idVizframeNonmov1112").setBusy(true);
			var adfilter = [];
			var date = new Date();
			var checkingYear = this.finYearMRS + 1;
			if (checkingYear == date.getFullYear()) {
				var preYear = this.finYearMRS + "04";
				var Nextyear = parseInt(this.finYearMRS) + 1;
				var postYear = Nextyear + "03";

			} else {
				var preYear = this.finYearMRS + "04";
				var Nextyear = parseInt(this.finYearMRS) + 1;
				var postYear = Nextyear + "03";
			}
			adfilter.push(new sap.ui.model.Filter("Bldat", sap.ui.model.FilterOperator.BT, preYear, postYear));
			this.getOwnerComponent().getModel().read("/MonthlyReceiptStorageSet", {
				filters: adfilter,
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
						if (odata.results[i].Bldat.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Bldat.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Bldat;
						if (arr04[i].Werks == 2000) {
							obj04.TVT = arr04[i].Value;
						} else if (arr04[i].Werks == 2020) {
							obj04.ORG = arr04[i].Value;
						} else if (arr04[i].Werks == 2050) {
							obj04.VVL = arr04[i].Value;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Bldat;
						if (arr05[i].Werks == 2000) {
							obj05.TVT = arr05[i].Value;
						} else if (arr05[i].Werks == 2020) {
							obj05.ORG = arr05[i].Value;
						} else if (arr05[i].Werks == 2050) {
							obj05.VVL = arr05[i].Value;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Bldat;
						if (arr06[i].Werks == 2000) {
							obj06.TVT = arr06[i].Value;
						} else if (arr06[i].Werks == 2020) {
							obj06.ORG = arr06[i].Value;
						} else if (arr06[i].Werks == 2050) {
							obj06.VVL = arr06[i].Value;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Bldat;
						if (arr07[i].Werks == 2000) {
							obj07.TVT = arr07[i].Value;
						} else if (arr07[i].Werks == 2020) {
							obj07.ORG = arr07[i].Value;
						} else if (arr07[i].Werks == 2050) {
							obj07.VVL = arr07[i].Value;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Bldat;
						if (arr07[i].Werks == 2000) {
							obj08.TVT = arr08[i].Value;
						} else if (arr08[i].Werks == 2020) {
							obj08.ORG = arr08[i].Value;
						} else if (arr08[i].Werks == 2050) {
							obj08.VVL = arr08[i].Value;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Bldat;
						if (arr09[i].Werks == 2000) {
							obj09.TVT = arr09[i].Value;
						} else if (arr09[i].Werks == 2020) {
							obj09.ORG = arr09[i].Value;
						} else if (arr09[i].Werks == 2050) {
							obj09.VVL = arr09[i].Value;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Bldat;
						if (arr10[i].Werks == 2000) {
							obj10.TVT = arr10[i].Value;
						} else if (arr10[i].Werks == 2020) {
							obj10.ORG = arr10[i].Value;
						} else if (arr10[i].Werks == 2050) {
							obj10.VVL = arr10[i].Value;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Bldat;
						if (arr11[i].Werks == 2000) {
							obj11.TVT = arr11[i].Value;
						} else if (arr11[i].Werks == 2020) {
							obj11.ORG = arr11[i].Value;
						} else if (arr11[i].Werks == 2050) {
							obj11.VVL = arr11[i].Value;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Bldat;
						if (arr12[i].Werks == 2000) {
							obj12.TVT = arr12[i].Value;
						} else if (arr12[i].Werks == 2020) {
							obj12.ORG = arr12[i].Value;
						} else if (arr12[i].Werks == 2050) {
							obj12.VVL = arr12[i].Value;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Bldat;
						if (arr01[i].Werks == 2000) {
							obj01.TVT = arr01[i].Value;
						} else if (arr01[i].Werks == 2020) {
							obj01.ORG = arr01[i].Value;
						} else if (arr01[i].Werks == 2050) {
							obj01.VVL = arr01[i].Value;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Bldat;
						if (arr02[i].Werks == 2000) {
							obj02.TVT = arr02[i].Value;
						} else if (arr02[i].Werks == 2020) {
							obj02.ORG = arr02[i].Value;
						} else if (arr02[i].Werks == 2050) {
							obj02.VVL = arr02[i].Value;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Bldat;
						if (arr03[i].Werks == 2000) {
							obj03.TVT = arr03[i].Value;
						} else if (arr03[i].Werks == 2020) {
							obj03.ORG = arr03[i].Value;
						} else if (arr03[i].Werks == 2050) {
							obj03.VVL = arr03[i].Value;
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
					this.getView().getModel("visibleModel").setProperty("/MonthlyReceipt", finalArr);
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
					// 	var month = arr[i].Bldat.slice(4, 6);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			date: arr[i].Bldat.slice(0, 4) + monthArr[i],
					// 			TPL: 0,
					// 			VVL: 0,
					// 			ORG: 0,
					// 			TVT: 0
					// 				// arr.push(obj);
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }

					this._buildchartforMonthlyReceipt();
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().byId("idVizframeNonmov1112").setBusy(false);

				}.bind(this),
				error: function (error) {
					this.getView().byId("idVizframeNonmov1112").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_buildchartforMonthlyReceipt: function () {
			var oVizframeMonthly = this.getView().byId("idVizframeNonmov1112");
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var FIORI_PERCENTAGE_FORMAT_6 = "__UI5__PercentageMaxFraction6";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_6, function (value) {
				var val = value / 100000;
				val = val.toFixed(1);
				var val1 = Math.round(val);
				//val = val + " " + "Lakhs";
				return val1;

			});

			oVizframeMonthly.setVizProperties({
				plotArea: {
					drawingEffect: 'glossy',

					dataLabel: {
						visible: true,
						showTotal: true,
						formatString: FIORI_PERCENTAGE_FORMAT_6
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"],
				},
				valueAxis: {
					label: {
						formatString: FIORI_PERCENTAGE_FORMAT_6
					},
					title: {
						text: "Values",
						visible: true
					}
				},
				// categoryAxis: {
				// 	label: {
				// 		formatString: formatYear
				// 	},
				// 	title: {
				// 		visible: true
				// 	}
				// },
				title: {
					visible: false,
					text: 'Monthly quantity plant wise'
				}
			});
			var oPopOver = this.getView().byId("idSubConInvenVal1r2");
			oPopOver.connect(oVizframeMonthly.getVizUid());
			oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
		},
		MonthlyRejDispatch: function () {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getView().byId("idVizFrameColumnMonrej").setBusy(true);
			var adfilter = [];
			var date = new Date();
			if (this.finYearMRD == undefined) {
				if (date.getMonth() + 1 <= 3) {
					var preYear = date.getFullYear() - 1 + "04";
					var postYear = date.getFullYear() + "03";
				} else {
					var preYear = date.getFullYear() + "04";
					var postYear = date.getFullYear() + 1 + "03";
				}
			}
			adfilter.push(new sap.ui.model.Filter("Budat", sap.ui.model.FilterOperator.BT, preYear, postYear));
			this.getOwnerComponent().getModel().read("/MonthlyRejectionDispatchSet", {
				filters: adfilter,
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
						if (odata.results[i].Budat.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Budat;
						if (arr04[i].Werks == 2000) {
							obj04.TVT = arr04[i].Dmbtr;
						} else if (arr04[i].Werks == 2020) {
							obj04.ORG = arr04[i].Dmbtr;
						} else if (arr04[i].Werks == 2050) {
							obj04.VVL = arr04[i].Dmbtr;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Budat;
						if (arr05[i].Werks == 2000) {
							obj05.TVT = arr05[i].Dmbtr;
						} else if (arr05[i].Werks == 2020) {
							obj05.ORG = arr05[i].Dmbtr;
						} else if (arr05[i].Werks == 2050) {
							obj05.VVL = arr05[i].Dmbtr;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Budat;
						if (arr06[i].Werks == 2000) {
							obj06.TVT = arr06[i].Dmbtr;
						} else if (arr06[i].Werks == 2020) {
							obj06.ORG = arr06[i].Dmbtr;
						} else if (arr06[i].Werks == 2050) {
							obj06.VVL = arr06[i].Dmbtr;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Budat;
						if (arr07[i].Werks == 2000) {
							obj07.TVT = arr07[i].Dmbtr;
						} else if (arr07[i].Werks == 2020) {
							obj07.ORG = arr07[i].Dmbtr;
						} else if (arr07[i].Werks == 2050) {
							obj07.VVL = arr07[i].Dmbtr;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Budat;
						if (arr08[i].Werks == 2000) {
							obj08.TVT = arr08[i].Dmbtr;
						} else if (arr08[i].Werks == 2020) {
							obj08.ORG = arr08[i].Dmbtr;
						} else if (arr08[i].Werks == 2050) {
							obj08.VVL = arr08[i].Dmbtr;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Budat;
						if (arr09[i].Werks == 2000) {
							obj09.TVT = arr09[i].Dmbtr;
						} else if (arr09[i].Werks == 2020) {
							obj09.ORG = arr09[i].Dmbtr;
						} else if (arr09[i].Werks == 2050) {
							obj09.VVL = arr09[i].Dmbtr;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Budat;
						if (arr10[i].Werks == 2000) {
							obj10.TVT = arr10[i].Dmbtr;
						} else if (arr10[i].Werks == 2020) {
							obj10.ORG = arr10[i].Dmbtr;
						} else if (arr10[i].Werks == 2050) {
							obj10.VVL = arr10[i].Dmbtr;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Budat;
						if (arr11[i].Werks == 2000) {
							obj11.TVT = arr11[i].Dmbtr;
						} else if (arr11[i].Werks == 2020) {
							obj11.ORG = arr11[i].Dmbtr;
						} else if (arr11[i].Werks == 2050) {
							obj11.VVL = arr11[i].Dmbtr;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Budat;
						if (arr12[i].Werks == 2000) {
							obj12.TVT = arr12[i].Dmbtr;
						} else if (arr12[i].Werks == 2020) {
							obj12.ORG = arr12[i].Dmbtr;
						} else if (arr12[i].Werks == 2050) {
							obj12.VVL = arr12[i].Dmbtr;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Budat;
						if (arr01[i].Werks == 2000) {
							obj01.TVT = arr01[i].Dmbtr;
						} else if (arr01[i].Werks == 2020) {
							obj01.ORG = arr01[i].Dmbtr;
						} else if (arr01[i].Werks == 2050) {
							obj01.VVL = arr01[i].Dmbtr;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Budat;
						if (arr02[i].Werks == 2000) {
							obj02.TVT = arr02[i].Dmbtr;
						} else if (arr02[i].Werks == 2020) {
							obj02.ORG = arr02[i].Dmbtr;
						} else if (arr02[i].Werks == 2050) {
							obj02.VVL = arr02[i].Dmbtr;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Budat;
						if (arr03[i].Werks == 2000) {
							obj03.TVT = arr03[i].Dmbtr;
						} else if (arr03[i].Werks == 2020) {
							obj03.ORG = arr03[i].Dmbtr;
						} else if (arr03[i].Werks == 2050) {
							obj03.VVL = arr03[i].Dmbtr;
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

					this.getView().getModel("visibleModel").setProperty("/MonthlyRej", finalArr);
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
					// 	var month = arr[i].Budat.slice(4, 6);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			date: arr[i].Budat.slice(0, 4) + monthArr[i],
					// 			TPL: 0,
					// 			VVL: 0,
					// 			ORG: 0,
					// 			TVT: 0
					// 				// arr.push(obj);
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }

					this._buildchartforMonthlyRej();
					this.getView().byId("idVizFrameColumnMonrej").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {

					this.getView().byId("idVizFrameColumnMonrej").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		FinMonthlyRejDispatch: function () {
			this.getView().byId("idVizFrameColumnMonrej").setBusy(true);
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			var adfilter = [];
			var date = new Date();
			var checkingYear = this.finYearMRD + 1;
			if (checkingYear == date.getFullYear()) {
				var preYear = this.finYearMRD + "04";
				var Nextyear = parseInt(this.finYearMRD) + 1;
				var postYear = Nextyear + "03";

			} else {
				var preYear = this.finYearMRD + "04";
				var Nextyear = parseInt(this.finYearMRD) + 1;
				var postYear = Nextyear + "03";
			}
			adfilter.push(new sap.ui.model.Filter("Budat", sap.ui.model.FilterOperator.BT, preYear, postYear));
			this.getOwnerComponent().getModel().read("/MonthlyRejectionDispatchSet", {
				filters: adfilter,

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
						if (odata.results[i].Budat.slice(4, 6) == '04') {
							arr04.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '05') {
							arr05.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '06') {
							arr06.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '07') {
							arr07.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '08') {
							arr08.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '09') {
							arr09.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '10') {
							arr10.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '11') {
							arr11.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '12') {
							arr12.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '01') {
							arr01.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '02') {
							arr02.push(odata.results[i]);
						} else if (odata.results[i].Budat.slice(4, 6) == '03') {
							arr03.push(odata.results[i]);
						}
					}
					var obj04 = {};
					for (var i = 0; i < arr04.length; i++) {
						obj04.month = arr04[i].Budat;
						if (arr04[i].Werks == 2000) {
							obj04.TVT = arr04[i].Dmbtr;
						} else if (arr04[i].Werks == 2020) {
							obj04.ORG = arr04[i].Dmbtr;
						} else if (arr04[i].Werks == 2050) {
							obj04.VVL = arr04[i].Dmbtr;
						}
					}
					if (arr04.length > 0) {
						finalArr.push(obj04);
					}

					var obj05 = {};
					for (var i = 0; i < arr05.length; i++) {
						obj05.month = arr05[i].Budat;
						if (arr05[i].Werks == 2000) {
							obj05.TVT = arr05[i].Dmbtr;
						} else if (arr05[i].Werks == 2020) {
							obj05.ORG = arr05[i].Dmbtr;
						} else if (arr05[i].Werks == 2050) {
							obj05.VVL = arr05[i].Dmbtr;
						}
					}
					if (arr05.length > 0) {
						finalArr.push(obj05);
					}

					var obj06 = {};
					for (var i = 0; i < arr06.length; i++) {
						obj06.month = arr06[i].Budat;
						if (arr06[i].Werks == 2000) {
							obj06.TVT = arr06[i].Dmbtr;
						} else if (arr06[i].Werks == 2020) {
							obj06.ORG = arr06[i].Dmbtr;
						} else if (arr06[i].Werks == 2050) {
							obj06.VVL = arr06[i].Dmbtr;
						}
					}
					if (arr06.length > 0) {
						finalArr.push(obj06);
					}

					var obj07 = {};
					for (var i = 0; i < arr07.length; i++) {
						obj07.month = arr07[i].Budat;
						if (arr07[i].Werks == 2000) {
							obj07.TVT = arr07[i].Dmbtr;
						} else if (arr07[i].Werks == 2020) {
							obj07.ORG = arr07[i].Dmbtr;
						} else if (arr07[i].Werks == 2050) {
							obj07.VVL = arr07[i].Dmbtr;
						}
					}
					if (arr07.length > 0) {
						finalArr.push(obj07);
					}

					var obj08 = {};
					for (var i = 0; i < arr08.length; i++) {
						obj08.month = arr08[i].Budat;
						if (arr08[i].Werks == 2000) {
							obj08.TVT = arr08[i].Dmbtr;
						} else if (arr08[i].Werks == 2020) {
							obj08.ORG = arr08[i].Dmbtr;
						} else if (arr08[i].Werks == 2050) {
							obj08.VVL = arr08[i].Dmbtr;
						}
					}
					if (arr08.length > 0) {
						finalArr.push(obj08);
					}

					var obj09 = {};
					for (var i = 0; i < arr09.length; i++) {
						obj09.month = arr09[i].Budat;
						if (arr09[i].Werks == 2000) {
							obj09.TVT = arr09[i].Dmbtr;
						} else if (arr09[i].Werks == 2020) {
							obj09.ORG = arr09[i].Dmbtr;
						} else if (arr09[i].Werks == 2050) {
							obj09.VVL = arr09[i].Dmbtr;
						}
					}
					if (arr09.length > 0) {
						finalArr.push(obj09);
					}

					var obj10 = {};
					for (var i = 0; i < arr10.length; i++) {
						obj10.month = arr10[i].Budat;
						if (arr10[i].Werks == 2000) {
							obj10.TVT = arr10[i].Dmbtr;
						} else if (arr10[i].Werks == 2020) {
							obj10.ORG = arr10[i].Dmbtr;
						} else if (arr10[i].Werks == 2050) {
							obj10.VVL = arr10[i].Dmbtr;
						}
					}
					if (arr10.length > 0) {
						finalArr.push(obj10);
					}

					var obj11 = {};
					for (var i = 0; i < arr11.length; i++) {
						obj11.month = arr11[i].Budat;
						if (arr11[i].Werks == 2000) {
							obj11.TVT = arr11[i].Dmbtr;
						} else if (arr11[i].Werks == 2020) {
							obj11.ORG = arr11[i].Dmbtr;
						} else if (arr11[i].Werks == 2050) {
							obj11.VVL = arr11[i].Dmbtr;
						}
					}
					if (arr11.length > 0) {
						finalArr.push(obj11);
					}

					var obj12 = {};
					for (var i = 0; i < arr12.length; i++) {
						obj12.month = arr12[i].Budat;
						if (arr12[i].Werks == 2000) {
							obj12.TVT = arr12[i].Dmbtr;
						} else if (arr12[i].Werks == 2020) {
							obj12.ORG = arr12[i].Dmbtr;
						} else if (arr12[i].Werks == 2050) {
							obj12.VVL = arr12[i].Dmbtr;
						}
					}
					if (arr12.length > 0) {
						finalArr.push(obj12);
					}
					// finalArr.push(obj12);

					var obj01 = {};
					for (var i = 0; i < arr01.length; i++) {
						obj01.month = arr01[i].Budat;
						if (arr01[i].Werks == 2000) {
							obj01.TVT = arr01[i].Dmbtr;
						} else if (arr01[i].Werks == 2020) {
							obj01.ORG = arr01[i].Dmbtr;
						} else if (arr01[i].Werks == 2050) {
							obj01.VVL = arr01[i].Dmbtr;
						}
					}
					if (arr01.length > 0) {
						finalArr.push(obj01);
					}

					var obj02 = {};
					for (var i = 0; i < arr02.length; i++) {
						obj02.month = arr02[i].Budat;
						if (arr02[i].Werks == 2000) {
							obj02.TVT = arr02[i].Dmbtr;
						} else if (arr02[i].Werks == 2020) {
							obj02.ORG = arr02[i].Dmbtr;
						} else if (arr02[i].Werks == 2050) {
							obj02.VVL = arr02[i].Dmbtr;
						}
					}
					if (arr02.length > 0) {
						finalArr.push(obj02);
					}

					var obj03 = {};
					for (var i = 0; i < arr03.length; i++) {
						obj03.month = arr03[i].Budat;
						if (arr03[i].Werks == 2000) {
							obj03.TVT = arr03[i].Dmbtr;
						} else if (arr03[i].Werks == 2020) {
							obj03.ORG = arr03[i].Dmbtr;
						} else if (arr03[i].Werks == 2050) {
							obj03.VVL = arr03[i].Dmbtr;
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
					this.getView().getModel("visibleModel").setProperty("/MonthlyRej", finalArr);
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
					// 	var month = arr[i].Budat.slice(4, 6);
					// 	if (monthArr[i] != month) {
					// 		var obj = {
					// 			date: arr[i].Budat.slice(0, 4) + monthArr[i],
					// 			TPL: 0,
					// 			VVL: 0,
					// 			ORG: 0,
					// 			TVT: 0
					// 				// arr.push(obj);
					// 		}
					// 		arr.splice(i, 0, obj);
					// 	}
					// }
					this._buildchartforMonthlyRej();
					this.getView().byId("idVizFrameColumnMonrej").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getView().byId("idVizFrameColumnMonrej").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_buildchartforMonthlyRej: function () {
			var oVizframeMonthlyrej = this.getView().byId("idVizFrameColumnMonrej");
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var FIORI_PERCENTAGE_FORMAT_7 = "__UI5__PercentageMaxFraction7";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_7, function (value) {
				var val = value / 100000;
				val = val.toFixed(1);
				var val1 = Math.round(val);
				//val = val + " " + "Lakhs";
				return val1;

			});

			// vizProperties="{title:{ text: 'Production and Plant Inventory Details'},valueAxis : {label : {visible : true }}, plotArea : {drawingEffect: 'glossy',dataPointSize: {min : 5},dataLabel: { visible: true, showTotal: true }} }"
			oVizframeMonthlyrej.setVizProperties({
				plotArea: {
					drawingEffect: 'glossy',

					dataLabel: {
						visible: true,
						showTotal: true,
						formatString: FIORI_PERCENTAGE_FORMAT_7
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"],
				},
				valueAxis: {
					label: {
						formatString: FIORI_PERCENTAGE_FORMAT_7
					},
					title: {
						text: "Values",
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
		//filter implementation for Monthly GRN
		onPressGRNfilter: function (oEvent) {
			//sap.ui.getCore().byId("finYear").setValue("");
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			if (!this._SelectionDialogGrn) {
				this._SelectionDialogGrn = sap.ui.xmlfragment(
					"com.Air.Inventory.Inventory_Dashboard.fragments.finyear",
					this
				);
				this.getView().addDependent(this._SelectionDialogGrn);
			}
			sap.ui.getCore().byId("finYear").setValue("");
			this._SelectionDialogGrn.open();
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
		},
		onPressFinCancel: function (oEvent) {
			oEvent.getSource().getParent().close();
			//this._SelectionDialogGrn.close();
		},
		onClickFinYear: function (oEvent) {
			this.finYear = oEvent.getSource().getSelectedKey().slice(0, 4);
			this.FinMonthlyGrn();
			this._SelectionDialogGrn.close();
		},
		onPressCancelfilter: function () {
			this.MonthlyGrn(); //this method is for reset the graph
		},
		//filter implementation for Monthly Gate Entry vs GRN Pending
		onPressMGE: function (oEvent) {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			if (!this._SelectionDialogMGE) {
				this._SelectionDialogMGE = sap.ui.xmlfragment(
					"com.Air.Inventory.Inventory_Dashboard.fragments.finyearMGE",
					this
				);
				this.getView().addDependent(this._SelectionDialogMGE);
			}
			sap.ui.getCore().byId("finYearmge").setValue("");
			this._SelectionDialogMGE.open();
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
		},
		onPressCancel: function (oEvent) {
			//this._SelectionDialogMGE.close();
			oEvent.getSource().getParent().close();
		},
		onClickFinYearMGE: function (oEvent) {
			this.finYearMGE = oEvent.getSource().getSelectedKey().slice(0, 4);
			this.FinMonthlyGeandGrn();
			this._SelectionDialogMGE.close();
		},
		onPressFinMGECancel: function (oEvent) {
			this.MonthlyGeandGrn();
		},
		//filter implementation for Monthly Receipt storage 3rd graph
		onPressMRS: function (oEvent) {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			if (!this._SelectionDialogMRS) {
				this._SelectionDialogMRS = sap.ui.xmlfragment(
					"com.Air.Inventory.Inventory_Dashboard.fragments.finyearMRS",
					this
				);
				this.getView().addDependent(this._SelectionDialogMRS);
			}
			sap.ui.getCore().byId("finYearmrs").setValue("");
			this._SelectionDialogMRS.open();
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
		},
		onPressMRSFinCancel: function (oEvent) {
			//this._SelectionDialogMRS.close();
			oEvent.getSource().getParent().close();
		},
		onClickFinYearMRS: function (oEvent) {
			this.finYearMRS = oEvent.getSource().getSelectedKey().slice(0, 4);
			this.FinMonthlyReceiptStorage();
			this._SelectionDialogMRS.close();
		},
		onPressFinMRSCancel: function () {
			this.MonthlyReceiptStorage(); //this method is for reset the graph
		},
		//filter implementation for Monthly Receipt Dispatch 4th graph
		onPressMRD: function (oEvent) {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			if (!this._SelectionDialogMRD) {
				this._SelectionDialogMRD = sap.ui.xmlfragment(
					"com.Air.Inventory.Inventory_Dashboard.fragments.finyearMRD",
					this
				);
				this.getView().addDependent(this._SelectionDialogMRD);
			}
			sap.ui.getCore().byId("finYearmrd").setValue("");
			this._SelectionDialogMRD.open();
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
		},

		onPressMRDFinCancel: function (oEvent) {
			//this._SelectionDialogMRS.close();
			oEvent.getSource().getParent().close();
		},
		onClickFinYearMRD: function (oEvent) {
			this.finYearMRD = oEvent.getSource().getSelectedKey().slice(0, 4);
			this.FinMonthlyRejDispatch();
			this._SelectionDialogMRD.close();
		},
		onPressFinMRDCancel: function () {
			this.MonthlyRejDispatch();
		},
		onSelectPlantLineChart: function (oEvent) {
			var sId = oEvent.getSource().getId().split("--")[1];
			var MeasuresName = oEvent.getParameter("data")[0].data.measureNames;
			if (MeasuresName) {
				this.getOwnerComponent().getRouter().navTo("GRNCount", {
					PlantPath: MeasuresName
				});
			}

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