sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/Air/Inventory/Inventory_Dashboard/model/formatter",
	'sap/ui/export/Spreadsheet',
	'sap/ui/export/library',
	"sap/viz/ui5/format/ChartFormatter",
	"sap/viz/ui5/api/env/Format"
], function (Controller, formatter, Spreadsheet, exportLibrary, ChartFormatter, Format) {
	"use strict";
	var EdmType = exportLibrary.EdmType;
	return Controller.extend("com.Air.Inventory.Inventory_Dashboard.controller.subcondrill", {
		formatter: formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.Air.Inventory.Inventory_Dashboard.view.subcondrill
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("subcondrill").attachPatternMatched(this._onObjectMatched, this);
			this._setCustomFormatter();

			var date = new Date();
			this.fromdate = date.getFullYear() - 1;
			this.todate = date.getFullYear();

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

			// 	var formatterInstance = sap.viz.ui5.format.ChartFormatter.getInstance();
			// 	sap.viz.ui5.api.env.Format.numericFormatter(formatterInstance);
			// 	formatterInstance.registerCustomFormatter("EUR_abb", function (value) {
			// 		var fixedFloat = sap.ui.core.format.NumberFormat.getFloatInstance({
			// 			style: 'short',
			// 			pattern: "k #,##0.0",
			// 			currencyCode: true
			// 		});
			// 		return fixedFloat.format(value);
			// 	})
		},

		_onObjectMatched: function (oEvent) {
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
			this.mypath = oEvent.getParameter("arguments").invoicePath;
			if (this.mypath == "TVT") {
				this.mypathValue = "2000";
			} else if (this.mypath == "ORG") {
				this.mypathValue = "2020";
			} else if (this.mypath == "VVL") {
				this.mypathValue = "2050";
			} else if (this.mypath == "3PL") {
				this.mypathValue = "2080";
			}

			//text: "" + this.mypath + " sub contractor inventory values in lacs-vendor wise"
			// this.byId("idVizFrameColumn1123").setText("sub contractor inventory values in lacs-vendor wise");
			this.getOwnerComponent().getModel("visibleModel").setProperty("/graphTitle", this.mypath);
			this.getOwnerComponent().getModel("visibleModel").refresh();
			this.getOwnerComponent().getModel("visibleModel").updateBindings();
			this.subconInventoryVendor();
			this.AcknowledgePending();
			this.StockStatement();
			this.SubContractingAging();
			this.movingPats();

		},
		onSelectbarChart: function (oEvent) {
			var sId = oEvent.getSource().getId().split("--")[1];
			var MeasuresName = oEvent.getParameter("data")[0].data.measureNames;
			if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Jan") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "01";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Feb") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "02";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Mar") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "03";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Apr") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "04";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "May") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "05";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Jun") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "06";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Jul") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "07";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Aug") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "08";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Sep") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "09";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Oct") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "10";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Nov") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "11";
			} else if (oEvent.getParameter("data")[0].data.Month.slice(0, 3) == "Dec") {
				this.month = oEvent.getParameter("data")[0].data.Month.slice(4, 8) + "12";
			}
			this.readSubcontable();
			// if (MeasuresName) {
			if (!this._regiondlg) {
				this._regiondlg = sap.ui.xmlfragment(
					"com.Air.Inventory.Inventory_Dashboard.fragments.tabledata",
					this
				);
				this.getView().addDependent(this._regiondlg);

			}

			// this._regiondlg.open();

			// }

		},
		readSubcontable: function () {
			var adfilter = [];
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			adfilter.push(new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, this.mypathValue));
			adfilter.push(new sap.ui.model.Filter("Date", sap.ui.model.FilterOperator.EQ, this.month));
			this.getOwnerComponent().getModel().read("/StockStDrillDownSet", {
				filters: adfilter,
				success: function (oSucess) {
					for(var i=0;i<oSucess.results.length;i++){
						oSucess.results[i].Lifnr = oSucess.results[i].Lifnr.replace(/^0+/, '');
					}
					this.getOwnerComponent().getModel("visibleModel").setProperty("/subcontable", oSucess.results);
					var sData = this.getOwnerComponent().getModel("visibleModel").getProperty("/subcontable");
					var oModelItem = new sap.ui.model.json.JSONModel();
					oModelItem.setData(sData);
					this._regiondlg.setModel(oModelItem, "itemDetails");
					//this._regiondlg.setProperty(ocontext);
					// 					var oModel = new sap.ui.json.JSONModel(oSucess.results);
					//                  sap.ui.getCore().setModel(oModel, "TableModel");    
					this._regiondlg.open();

					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

				}.bind(this),
				error: function (oError) {
					//this.getView().byId("idVizFrameColumn1123").setBusy(false);
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
				}.bind(this),
			});
		},
		onCloseTab: function () {
			this._regiondlg.close();
		},
		// onAfterRendering: function () {

		// },
		//code for the first graph from left
		subconInventoryVendor: function (oEvent) {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getView().byId("idVizFrameColumn1123").setBusy(true);
			var adfilter = [];
			adfilter.push(new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, this.mypathValue));

			this.getOwnerComponent().getModel().read("/SubConInventoryVendorSet", {
				filters: adfilter,
				success: function (oSucess) {

					this.getOwnerComponent().getModel("visibleModel").setProperty("/subconinventoryOne", oSucess.results);
					var subtitle = this.getOwnerComponent().getModel("visibleModel").getProperty("/graphTitle") +
						" sub contractor inventory values(In Lakhs)";
					this._buildpieChartforsubConPie(subtitle);
					this.getView().byId("idVizFrameColumn1123").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

				}.bind(this),
				error: function (oError) {
					this.getView().byId("idVizFrameColumn1123").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
				}.bind(this),
			});

		},
		_buildpieChartforsubConPie: function (subtitle) {
			var oVizframeSubConPie = this.getView().byId("idVizFrameColumn1123");
			var FIORI_PERCENTAGE_FORMAT_13 = "__UI5__PercentageMaxFraction13";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_13, function (value) {
				var val = value / 100000;
				//val = val.toFixed(1);
				var val2 = Math.round(val);
				//var finval = val2 + " " + "Lakh";

				return val2;

			});
			oVizframeSubConPie.setVizProperties({
				legend: {
					title: {
						visible: false
					}
				},
				title: {
					visible: 'true',
					text: subtitle

				},
				plotArea: {
					dataLabel: {
						type: "value",
						visible: true,
						formatString: FIORI_PERCENTAGE_FORMAT_13
					},

					drawingEffect: 'glossy'
						// colorPalette: ["#DADADA", "#488A99", "#DBAE58", "#6AB187", "#8ED2C9"]
				},
				valueAxis: {
					label: {
						formatString: FIORI_PERCENTAGE_FORMAT_13
					},
					title: {
						// text: "",
						visible: false
					}
				},
			});
			var oPopOver = this.getView().byId("idPopOverMisCol1023");
			oPopOver.connect(oVizframeSubConPie.getVizUid());
			//oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

		},

		onPressdownload: function () {
			var adfilter = [];
			// if (this.fiYear == undefined) {
			// 	var date = new Date();
			// 	this.fiYear = date.getFullYear();
			// }
			// adfilter.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.EQ, this.fiYear));
			adfilter.push(new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, this.mypathValue));
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/SubConVendorDwnldSet", {
				filters: adfilter,
				success: function (odata) {

					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					this.getView().getModel("visibleModel").setProperty("/subconinventorDownload", odata.results);
					this._downloadSCI(odata);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_downloadSCI: function (odata) {
			if (odata.results.length == 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet;

			aCols = this.createColumnConfig();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/subconinventorDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Sub contractor inventory values(" + this.fromdate + "-" + this.todate + ")"
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
		createColumnConfig: function () {
			var aCols = [];
			aCols.push({
				label: 'SLNo',
				property: 'SlNo',
			});
			aCols.push({
				label: 'Vendor',
				property: 'Vendor',
			});
			aCols.push({
				label: 'Material',
				property: 'Material',
			});
			aCols.push({
				label: 'Description',
				property: 'MaterialDescription',
			});
			aCols.push({
				label: 'Vendor',
				property: 'Vendor',
			});
			aCols.push({
				label: 'Name1',
				property: 'Name1',
			});
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});
			aCols.push({
				label: 'UnrestQty',
				property: 'UnrestQty',
			});
			aCols.push({
				label: 'Quality Insp.',
				property: 'QulInspection',
			});
			aCols.push({
				label: 'Stock In Transfer',
				property: 'ScTransfer',
			});
			aCols.push({
				label: 'Total Value',
				property: 'TotalValue',
			});
			aCols.push({
				label: 'Base Unit',
				property: 'BUnit',
			});
			aCols.push({
				label: 'Crcy',
				property: 'Crcy',
			});

			return aCols;
		},
		//code for the second graph from left
		AcknowledgePending: function () {
			this.getView().byId("idVizframeMatchedSet23").setBusy(true);
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			var adfilter = [];
			adfilter.push(new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, this.mypathValue));

			this.getOwnerComponent().getModel().read("/AcknowledgePendingSet", {
				filters: adfilter,
				success: function (oSucess) {

					this.getOwnerComponent().getModel("visibleModel").setProperty("/subconinventoryTwo", oSucess.results);
					var subtitle = "Acknowledgement pending in " + this.getOwnerComponent().getModel("visibleModel").getProperty("/graphTitle") +
						" plant "
					this._buildpieChartforAckpending(subtitle);

					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().byId("idVizframeMatchedSet23").setBusy(false);

				}.bind(this),
				error: function (oError) {
					this.getView().byId("idVizframeMatchedSet23").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

				}.bind(this),
			});
		},

		_buildpieChartforAckpending: function (subtitle) {
			var oVizFrameAck = this.byId("idVizframeMatchedSet23");
			// oVizFrameAck.setVizType('pie');

			//oVizFrameAudit.setDataset(oDatasetApollo);
			oVizFrameAck.setVizProperties({
				legend: {
					title: {
						visible: false
					}
				},
				title: {
					visible: 'true',
					text: subtitle

				},
				plotArea: {
					dataLabel: {
						type: "value",
						visible: true,
						formatString: 'CustomFloatFormat_F2'
							//showTotal: true
					},
					drawingEffect: 'glossy'
						// colorPalette: ["#DADADA", "#488A99", "#DBAE58", "#6AB187", "#8ED2C9"]
				}
			});
			var oPopOver = this.getView().byId("idPopOverMatchedSet23");
			oPopOver.connect(oVizFrameAck.getVizUid());
		},
		//Download code for 541 Acknowledgement pending
		onPressdownloadAck: function () {
			var adfilter = [];
			if (this.fiYear == undefined) {
				var date = new Date();
				this.fiYear = date.getFullYear();
			}
			// 			adfilter.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.EQ, this.fiYear));
			adfilter.push(new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, this.mypathValue));
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/AckPendDwnldSet", {
				filters: adfilter,
				success: function (odata) {
					this.getView().getModel("visibleModel").setProperty("/AcknowDownload", odata.results);
					this._downloadAck(odata);
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_downloadAck: function (odata) {
			if (odata.results.length == 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnConfigAck();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/AcknowDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Acknowledgement pending plant wise(" + this.fromdate + "-" + this.todate + ")"
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
		createColumnConfigAck: function () {
			var aCols = [];
			aCols.push({
				label: 'Issued Date',
				property: 'Issuedate',
				type: 'date'
			});
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});
			aCols.push({
				label: 'Vehicle No',
				property: 'Vehicleno',
			});
			aCols.push({
				label: 'Vendor No',
				property: 'Vendor',
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
				label: 'Mat. Doc. Year',
				property: 'Material',
			});
			aCols.push({
				label: 'Material Doc.',
				property: 'Materialdocno',
			});
			aCols.push({
				label: 'Lorry Number',
				property: 'Lorrynumber',
			});
			aCols.push({
				label: 'Vehicle gate exit date',
				property: 'Gateexitdate',
				type: 'date'
			});
			aCols.push({
				label: 'Gate Exit Number',
				property: 'Gateexitno',
			});
			aCols.push({
				label: 'Issued Quantity',
				property: 'Issuequantity',
			});
			return aCols;
		},
		//code for third graph
		StockStatement: function () {
			this.getView().byId("idVizStock").setBusy(true);
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			var adfilter = [];
			adfilter.push(new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, this.mypathValue));
			this.getOwnerComponent().getModel().read("/StockStatementSet", {
				filters: adfilter,
				success: function (oSucess) {
					if (oSucess.results.length > 0) {
						var data = [];
						for (var i = 0; i < oSucess.results.length; i++) {
							var obj = {};
							var year = oSucess.results[i].Date.slice(0, 4);
							var month = oSucess.results[i].Date.slice(4, 6);
							//var value= oSucess.results[i].Number;
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
							obj.Date = month + " " + year;
							obj.Number = oSucess.results[i].Number;
							data.push(obj);
						}
					}

					this.getOwnerComponent().getModel("visibleModel").setProperty("/subConInvStock", data);
					var subtitle = "Stock statement received in " + this.getOwnerComponent().getModel("visibleModel").getProperty("/graphTitle") +
						" plant "
						//this._buildpieChartforAckpending(subtitle);
					this._buildChartforStock(subtitle);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().byId("idVizStock").setBusy(false);

				}.bind(this),
				error: function (oError) {
					this.getView().byId("idVizStock").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

				}.bind(this),
			});
		},
		_buildChartforStock: function (subtitle) {
			var oVizFrameStock = this.byId("idVizStock");
			// oVizFrameAck.setVizType('column');

			//oVizFrameAudit.setDataset(oDatasetApollo);
			oVizFrameStock.setVizProperties({
				legend: {
					title: {
						visible: false
					}
				},
				valueAxis: {

					title: {
						text: "Nos.",
						visible: true
					}
				},
				title: {
					visible: 'true',
					text: subtitle

				},
				plotArea: {
					dataLabel: {
						visible: true,
						type: 'value',
						//formatString: 'CustomFloatFormat_F2'
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"],
				},
				// plotArea: {
				// 	dataLabel: {
				// 		type: "value",
				// 		visible: true,
				// 		//showTotal: true
				// 	},
				// 	drawingEffect: 'glossy'
				// 		// colorPalette: ["#DADADA", "#488A99", "#DBAE58", "#6AB187", "#8ED2C9"]
				// }
			});
			var oPopOver = this.getView().byId("idPopOverMatchedSet23");
			oPopOver.connect(oVizFrameStock.getVizUid());
		},
		//download code for stock statement received
		onPressdownloadSS: function () {
			var adfilter = [];
			// if (this.finYearSS == undefined) {
			// 	var date = new Date();
			// 	this.finYearSS = date.getFullYear();
			// }
			// adfilter.push(new sap.ui.model.Filter("Year", sap.ui.model.FilterOperator.EQ, this.finYearSS));
			adfilter.push(new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, this.mypathValue));
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/StockStstDwnldSet", {
				filters: adfilter,
				success: function (odata) {
					this.getView().getModel("visibleModel").setProperty("/StockDownload", odata.results);
					this._downloadSS(odata);
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},

		_downloadSS: function (odata) {
			if (odata.results.length == 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnConfigSS();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/StockDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Stock statement received(" + this.fromdate + "-" + this.todate + ")"
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
		createColumnConfigSS: function () {
			var aCols = [];
			aCols.push({
				label: 'Serial No',
				property: 'Serialnumber',
			});
			aCols.push({
				label: 'Physical Counting No',
				property: 'Physicalcount',
			});
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});
			aCols.push({
				label: 'Vendor',
				property: 'Vendor',
			});
			aCols.push({
				label: 'Name',
				property: 'Suppliername',
			});
			aCols.push({
				label: 'Document Date',
				property: 'Docdate',
				type: 'date'
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
				label: 'Net Price',
				property: 'Netprice',
			});
			aCols.push({
				label: 'Currency',
				property: 'Currency',
			});
			aCols.push({
				label: 'Portal Quantity',
				property: 'Portquantity',
			});
			aCols.push({
				label: 'Order Unit',
				property: 'Unit',
			});
			aCols.push({
				label: 'Physical Quantity',
				property: 'Physicalquantity',
			});
			aCols.push({
				label: 'To be GRN Quantity',
				property: 'Grnquantity',
			});
			aCols.push({
				label: 'Total Phys. Quan',
				property: 'Totalphyquantity',
			});
			aCols.push({
				label: 'Variance Quantity',
				property: 'Variquantity',
			});
			aCols.push({
				label: 'Portal Value',
				property: 'Portalvalue',
			});
			aCols.push({
				label: 'Physical Value',
				property: 'Physicalvalue',
			});
			aCols.push({
				label: 'Variance Value',
				property: 'Variancevalue',
			});
			aCols.push({
				label: 'Remarks',
				property: 'Remarks',
			});
			aCols.push({
				label: 'Approver 1 Remarks',
				property: 'App1remarks',
			});
			aCols.push({
				label: 'Approver 2 Remarks',
				property: 'App2remarks',
			});
			aCols.push({
				label: 'Approver 3 Remarks',
				property: 'App3remarks',
			});
			aCols.push({
				label: 'Time',
				property: 'Time',
			});
			aCols.push({
				label: 'Status',
				property: 'Status',
			});
			return aCols;

		},

		//code for fourth graph
		SubContractingAging: function () {
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getView().byId("idVizStockAging").setBusy(true);
			var adfilter = [];
			adfilter.push(new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, this.mypathValue));
			this.getOwnerComponent().getModel().read("/SubContractingAgingSet", {
				filters: adfilter,
				success: function (oData) {

					this.getOwnerComponent().getModel("visibleModel").setProperty("/subConAging", oData.results);
					var subtitle = this.getOwnerComponent().getModel("visibleModel").getProperty("/graphTitle") +
						" plant sub contractor stock ageing value in Lakhs "
					this._buildChartforSubcontracting(subtitle);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getView().byId("idVizStockAging").setBusy(false);

				}.bind(this),
				error: function (oError) {
					this.getView().byId("idVizStockAging").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

				}.bind(this),
			});
		},

		_buildChartforSubcontracting: function (subtitle) {

			var oVizFramesubcontacting = this.byId("idVizStockAging");
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var FIORI_PERCENTAGE_FORMAT_9 = "__UI5__PercentageMaxFraction9";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_9, function (value) {
				var val = value / 100000;
				//val = val.toFixed(1);
				var val1 = Math.round(val);
				//val = val + " " + "Lakhs";
				return val1;

			});
			// oVizFrameAck.setVizType('column');

			//oVizFrameAudit.setDataset(oDatasetApollo);
			oVizFramesubcontacting.setVizProperties({
				legend: {
					title: {
						visible: false
					}
				},
				plotArea: {
					// dataLabel: {
					// 	visible: true,
					// 	type: 'value',
					// 	formatString: 'CustomFloatFormat_F2'
					// },
					drawingEffect: 'glossy',
					dataPointSize: {
						min: 5
					},
					dataLabel: {
						visible: true,
						showTotal: true,
						formatString: FIORI_PERCENTAGE_FORMAT_9
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"]
				},
				valueAxis: {
					label: {
						formatString: FIORI_PERCENTAGE_FORMAT_9
					},
					title: {
						text: "Values",
						visible: true
					}
				},
				title: {
					visible: 'true',
					text: subtitle

				},
				// plotArea: {
				// 	dataLabel: {
				// 		type: "value",
				// 		visible: true,
				// 		//showTotal: true
				// 	},
				// 	drawingEffect: 'glossy'
				// 		// colorPalette: ["#DADADA", "#488A99", "#DBAE58", "#6AB187", "#8ED2C9"]
				// }

			});
			var oPopOver = this.getView().byId("idPopOverMatchedSet23");
			oPopOver.connect(oVizFramesubcontacting.getVizUid());
		},
		//download code for sub con stock aging
		onPressdownloadSCAgeing: function () {
			var adfilter = [];

			adfilter.push(new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, this.mypathValue));
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/StockAgingDwnldSet", {
				filters: adfilter,
				success: function (odata) {

					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

					this.getView().getModel("visibleModel").setProperty("/StockAgingDownload", odata.results);
					this._downloadStAging(odata);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_downloadStAging: function (odata) {
			if (odata.results.length == 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnConfigSCA();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/StockAgingDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Sub contractor stock ageing(" + this.fromdate + "-" + this.todate + ")"
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
		createColumnConfigSCA: function () {
			var aCols = [];
			aCols.push({
				label: 'Dur1',
				property: 'Dur1',
			});
			aCols.push({
				label: 'Dur',
				property: 'Duration',
			});
			aCols.push({
				label: 'Doc.Header',
				property: 'Docheader',
			});
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});
			aCols.push({
				label: 'Vendor',
				property: 'Vendor',
			});
			aCols.push({
				label: 'Material',
				property: 'Material',
			});
			aCols.push({
				label: 'Description',
				property: 'Materialdesp',
			});
			aCols.push({
				label: 'Vendor Un Res stk',
				property: 'Unrestricstock',
			});
			aCols.push({
				label: 'Total Val',
				property: 'Totalvalue',
			});
			aCols.push({
				label: 'MVT',
				property: 'Mvt',
			});
			aCols.push({
				label: 'Qty',
				property: 'Quantity',
			});
			aCols.push({
				label: 'Value',
				property: 'Value',
			});
			aCols.push({
				label: 'Doc No',
				property: 'Docno',
			});
			aCols.push({
				label: 'Date',
				property: 'Date',
				type: 'date',
			});
			aCols.push({
				label: 'No of Days',
				property: 'Noofdays',
			});
			return aCols;
		},
		//code for fifth graph
		movingPats: function () {
			this.getView().byId("idVizmoving").setBusy(true);
			//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			var adfilter = [];
			//adfilter.push(new sap.ui.model.Filter("Days", sap.ui.model.FilterOperator.EQ, this.finYearSS));
			adfilter.push(new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, this.mypathValue));
			this.getOwnerComponent().getModel().read("/movingPatsSet", {
				filters: adfilter,
				success: function (oSucess) {
					if (oSucess.results.length > 0) {
						var data = [];
						for (var i = 0; i < oSucess.results.length; i++) {
							var obj = {};
							var year = oSucess.results[i].Days.slice(0, 4);
							var month = oSucess.results[i].Days.slice(4, 6);
							//var value= oSucess.results[i].Number;
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
							obj.Days = month + " " + year;
							obj.SlowMoving = oSucess.results[i].SlowMoving;
							obj.NonMoving = oSucess.results[i].NonMoving;

							data.push(obj);
						}
					}

					this.getOwnerComponent().getModel("visibleModel").setProperty("/subConMoving", data);
					var subtitle = this.getOwnerComponent().getModel("visibleModel").getProperty("/graphTitle") +
						" plant sub con non moving and slow moving value in Lakhs"
						//this.getOwnerComponent().getModel("visibleModel").setProperty("/subNonMoving", nonmov);
					this._buildChartforMoving(subtitle);
					this.getView().byId("idVizmoving").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);

				}.bind(this),
				error: function (oError) {
					this.getView().byId("idVizmoving").setBusy(false);
					//this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
				}.bind(this),
			});
		},
		_buildChartforMoving: function (subtitle) {
			var oVizFrameMoving = this.byId("idVizmoving");
			// oVizFrameAck.setVizType('line');
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var FIORI_PERCENTAGE_FORMAT_18 = "__UI5__PercentageMaxFraction1";
			var chartFormatter = ChartFormatter.getInstance();
			chartFormatter.registerCustomFormatter(FIORI_PERCENTAGE_FORMAT_18, function (value) {
				var val = value / 100000;
				//val = val.toFixed(1);
				var rv = Math.round(val);
				//val = val.toFixed(3);
				//var rv=Math.round(val);
				//val = val + " " + "Lakhs";
				return rv;

			});
			//oVizFrameAudit.setDataset(oDatasetApollo);
			oVizFrameMoving.setVizProperties({
				plotArea: {
					drawingEffect: 'glossy',
					dataPointSize: {
						min: 5
					},
					dataLabel: {
						visible: true,
						showTotal: true,
						formatString: FIORI_PERCENTAGE_FORMAT_18
					},
					gridline: {
						visible: false
					},
					colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#935dd0"]

				},
				legend: {
					title: {
						visible: false
					}
				},
				valueAxis: {
					label: {
						formatString: FIORI_PERCENTAGE_FORMAT_18
					},
					title: {
						text: "Value",
						visible: true
					}
				},
				title: {
					visible: 'true',
					text: subtitle

				},

			});
			var oPopOver = this.getView().byId("idPopoverMoving");
			oPopOver.connect(oVizFrameMoving.getVizUid());

		},
		onPressdownloadMovingPats: function () {
			var adfilter = [];
			adfilter.push(new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, this.mypathValue));
			this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", true);
			this.getOwnerComponent().getModel().read("/MovingSet", {
				filters: adfilter,
				success: function (odata) {

					this.getView().getModel("visibleModel").setProperty("/MovingDownload", odata.results);
					this._downloadMoving(odata);
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					//this.getView().getModel("visibleModel").refresh();

				}.bind(this),
				error: function (error) {
					this.getOwnerComponent().getModel("visibleModel").setProperty("/busy", false);
					this.getErrorDetails(error);
				}.bind(this)
			});
		},
		_downloadMoving: function (odata) {
			if (odata.results.length == 0) {
				sap.m.MessageBox.error("No data is available for download!");
				return;
			}
			var aCols, oSettings, oSheet, oTable;

			aCols = this.createColumnConfigMpats();

			var aProducts = this.getView().getModel("visibleModel").getProperty('/MovingDownload');

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: aProducts,
				fileName: "Sub-contracting slow moving and non moving(" + this.fromdate + "-" + this.todate + ") "
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
		createColumnConfigMpats: function () {
			var aCols = [];
			aCols.push({
				label: 'Days',
				property: 'Days',
			});
			aCols.push({
				label: 'Lastqauntity',
				property: 'Lastqauntity',
			});
			aCols.push({
				label: 'Z541quantity',
				property: 'Z541quantity',
			});
			aCols.push({
				label: 'Plant',
				property: 'Plant',
			});
			aCols.push({
				label: 'Z541date',
				property: 'Z541date',
				type: 'date'
			});
			aCols.push({
				label: 'Lastdate',
				property: 'Lastdate',
				type: 'date'
			});
			aCols.push({
				label: 'Z543quantity',
				property: 'Z543quantity',
			});
			aCols.push({
				label: 'Vendor',
				property: 'Vendor',
			});
			aCols.push({
				label: 'Z543date',
				property: 'Z543date',
				type: 'date'
			});
			aCols.push({
				label: 'Material',
				property: 'Material',
			});
			aCols.push({
				label: 'Material Des.',
				property: 'Materialdesp',
			});
			aCols.push({
				label: 'Quantity',
				property: 'Quantity',
			});
			aCols.push({
				label: 'Value',
				property: 'Value',
			});
			aCols.push({
				label: 'Duration',
				property: 'Duration',
			});
			aCols.push({
				label: 'Remarks',
				property: 'Remarks',
			});
			return aCols;
		},
		onNavBackToHome: function () {
			this.getOwnerComponent().getRouter().navTo("InventoryDashboard");
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