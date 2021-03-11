sap.ui.define([], function () {
	"use strict";
	return {
		formatGraph: function (value) {
			if (value == null) {
				return;
			} else {
				var aMonth = value.split("-")[0];

				if (aMonth === "04") {
					return "Apr" + "-" + value.split("-")[1];
				} else if (aMonth === "05") {
					return "May" + "-" + value.split("-")[1];
				} else if (aMonth === "06") {
					return "June" + "-" + value.split("-")[1];
				} else if (aMonth === "07") {
					return "July" + "-" + value.split("-")[1];
				} else if (aMonth === "08") {
					return "Aug" + "-" + value.split("-")[1];
				} else if (aMonth === "09") {
					return "Sept" + "-" + value.split("-")[1];
				} else if (aMonth === "10") {
					return "Oct" + "-" + value.split("-")[1];
				} else if (aMonth === "11") {
					return "Nov" + "-" + value.split("-")[1];
				} else if (aMonth === "12") {
					return "Dec" + "-" + value.split("-")[1];
				} else if (aMonth === "01") {
					return "Jan" + "-" + value.split("-")[1];
				} else if (aMonth === "02") {
					return "Feb" + "-" + value.split("-")[1];
				} else if (aMonth === "03") {
					return "March" + "-" + value.split("-")[1];
				}
			}

		},
		formatSBP: function (value) {
			if (value == null) {
				return;
			} else {
				var aMonth = value.split("-")[1].slice(0,4);

				if (aMonth === "04") {
					return "Apr" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "05") {
					return "May" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "06") {
					return "June" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "07") {
					return "July" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "08") {
					return "Aug" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "09") {
					return "Sept" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "10") {
					return "Oct" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "11") {
					return "Nov" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "12") {
					return "Dec" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "01") {
					return "Jan" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "02") {
					return "Feb" + "-" + value.split("-")[1].slice(0,4);
				} else if (aMonth === "03") {
					return "March" + "-" + value.split("-")[1].slice(0,4);
				}
			}
		},
		formatValue: function (svalue) {

			if (svalue > 90 && svalue <= 120) {
				return ">90days";
			} else if (svalue > 120 && svalue <= 150) {
				return ">120days";
			} else if (svalue > 150 && svalue <= 180) {
				return ">150days";
			} else if (svalue > 180 && svalue <= 365) {
				return ">180days";
			} else if (svalue > 365) {
				return ">365days";
			}

		},
		formatGraphActual: function (value) {
			if (value == null) {
				return;
			} else {
				var aMonth = value.slice(4, 6);

				if (aMonth === "04") {
					return "Apr" + "-" + value.slice(0, 4);
				} else if (aMonth === "05") {
					return "May" + "-" + value.slice(0, 4);
				} else if (aMonth === "06") {
					return "June" + "-" + value.slice(0, 4);
				} else if (aMonth === "07") {
					return "July" + "-" + value.slice(0, 4);
				} else if (aMonth === "08") {
					return "Aug" + "-" + value.slice(0, 4);
				} else if (aMonth === "09") {
					return "Sept" + "-" + value.slice(0, 4);
				} else if (aMonth === "10") {
					return "Oct" + "-" + value.slice(0, 4);
				} else if (aMonth === "11") {
					return "Nov" + "-" + value.slice(0, 4);
				} else if (aMonth === "12") {
					return "Dec" + "-" + value.slice(0, 4);
				} else if (aMonth === "01") {
					return "Jan" + "-" + value.slice(0, 4);
				} else if (aMonth === "02") {
					return "Feb" + "-" + value.slice(0, 4);
				} else if (aMonth === "03") {
					return "March" + "-" + value.slice(0, 4);
				}
			}
		},
		formatInvGraph: function (sValue) {
			if (sValue == null) {
				return;
			} else {
				if (sValue === "04") {
					return "Apr";
				} else if (sValue === "05") {
					return "May";
				} else if (sValue === "06") {
					return "June";
				} else if (sValue === "07") {
					return "July";
				} else if (sValue === "08") {
					return "Aug";
				} else if (sValue === "09") {
					return "Sept";
				} else if (sValue === "10") {
					return "Oct";
				} else if (sValue === "11") {
					return "Nov";
				} else if (sValue === "12") {
					return "Dec";
				} else if (sValue === "01") {
					return "Jan";
				} else if (sValue === "02") {
					return "Feb";
				} else if (sValue === "03") {
					return "March";
				}
			}
		},
		formatInventory: function (sValue) {
			if (sValue == null) {
				return;
			} else {
				var aMonth = sValue.slice(4, 6);

				if (aMonth === "04") {
					return "Apr" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "05") {
					return "May" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "06") {
					return "June" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "07") {
					return "July" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "08") {
					return "Aug" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "09") {
					return "Sept" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "10") {
					return "Oct" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "11") {
					return "Nov" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "12") {
					return "Dec" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "01") {
					return "Jan" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "02") {
					return "Feb" + "-" + sValue.slice(0, 4);
				} else if (aMonth === "03") {
					return "March" + "-" + sValue.slice(0, 4);
				}
			}
		},
		formatTransaction: function (sValue) {
			if (sValue == null) {
				return;
			} else {
				var aMonth = sValue.slice(0, 2);

				if (aMonth === "04") {
					return "Apr" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "05") {
					return "May" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "06") {
					return "June" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "07") {
					return "July" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "08") {
					return "Aug" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "09") {
					return "Sept" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "10") {
					return "Oct" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "11") {
					return "Nov" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "12") {
					return "Dec" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "01") {
					return "Jan" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "02") {
					return "Feb" + "-" + sValue.slice(2, 6);
				} else if (aMonth === "03") {
					return "March" + "-" + sValue.slice(2, 6);
				}
			}
		}
	};
});