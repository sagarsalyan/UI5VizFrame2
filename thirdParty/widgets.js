! function (e) {
	"object" == typeof module && "undefined" != typeof module.exports ? module.exports = e : e()
}((function () {
	(window.webpackJsonpFusionCharts = window.webpackJsonpFusionCharts || []).push([
		[5], {
			1038: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1039));
				t.Bulb = r["default"];
				var i = o(a(1047));
				t.Cylinder = i["default"];
				var l = o(a(1058));
				t.AngularGauge = l["default"];
				var n = o(a(1070));
				t.Hled = n["default"];
				var s = o(a(1078));
				t.Vled = s["default"];
				var c = o(a(1079));
				t.Hlineargauge = c["default"];
				var u = o(a(1082));
				t.Thermometer = u["default"];
				var h = o(a(1086));
				t.SparkLine = h["default"];
				var d = o(a(1094));
				t.SparkColumn = d["default"];
				var p = o(a(1098));
				t.SparkWinLoss = p["default"];
				var g = o(a(1099));
				t.RealTimeArea = g["default"];
				var f = o(a(1106));
				t.RealTimeColumn = f["default"];
				var m = o(a(1107));
				t.RealTimeLine = m["default"];
				var v = o(a(1110));
				t.RealTimeStackedArea = v["default"];
				var b = o(a(1112));
				t.RealTimeStackedColumn = b["default"];
				var k = o(a(1114));
				t.RealTimeLineDY = k["default"];
				var C = o(a(1116));
				t.HorizontalBullet = C["default"];
				var x = o(a(1118));
				t.VerticalBullet = x["default"];
				var T = o(a(1120));
				t.Funnel = T["default"];
				var w = o(a(1128));
				t.Pyramid = w["default"];
				var A = o(a(1043)),
					S = {
						name: "widgets",
						type: "package",
						requiresFusionCharts: !0,
						extension: function (e) {
							e.addDep(A["default"]), e.addDep(l["default"]), e.addDep(r["default"]), e.addDep(i["default"]), e.addDep(n["default"]), e.addDep(
								s["default"]), e.addDep(c["default"]), e.addDep(u["default"]), e.addDep(h["default"]), e.addDep(d["default"]), e.addDep(p[
								"default"]), e.addDep(g["default"]), e.addDep(f["default"]), e.addDep(m["default"]), e.addDep(v["default"]), e.addDep(b[
								"default"]), e.addDep(k["default"]), e.addDep(C["default"]), e.addDep(x["default"]), e.addDep(T["default"]), e.addDep(w[
								"default"])
						}
					};
				t["default"] = S
			},
			1039: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1040))["default"];
				t["default"] = r
			},
			1040: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1041)),
					l = o(a(1044)),
					n = a(193),
					s = o(a(1008)),
					c = o(a(1046)),
					u = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).isRealTime = !0, t._drawCanvas = function () {}, t.registerFactory("dataset", c["default"], [
								"vCanvas"
							]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Bulb"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "Bulb"
						}, a._clearChart = function () {}, a.configureAttributes = function (t) {
							e.prototype.configureAttributes.call(this, t);
							var a = this.getFromEnv("dataSource").colorrange;
							(0, n.componentFactory)(this, s["default"], "colorRange", 1, [{
								colorRange: a,
								numberFormatter: this.getFromEnv("number-formatter")
							}]), this.addToEnv("colorRange", this.getChildren("colorRange")[0])
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.showRTvalue = !1, t.canvasPadding = !1, t.defaultSeriesType = "bulb", t.defaultPlotShadow = 1, t.drawAnnotations = !0, t.charttopmargin =
								10, t.chartrightmargin = 10, t.chartbottommargin = 10, t.chartleftmargin = 10, t.realtimeEnabled = !0, t.isRealTime = !0, t.friendlyName =
								"Bulb Gauge", t.defaultDatasetType = "bulb", t.placevaluesinside = 0, t.hasgaugeoriginx = void 0, t.gaugeoriginx = void 0, t.hasgaugeoriginy =
								void 0, t.gaugeoriginy = void 0, t.hasgaugeradius = void 0, t.gaugeradius = void 0, t.valuepadding = 2, t.showgaugeborder = 0,
								t.showhovereffect = void 0, t.autoscale = 1, t.skipCanvasDrawing = !0
						}, a._spaceManager = function () {
							var e, a, o, r = this.config,
								i = this.getChildren("dataset")[0],
								l = i.config,
								s = this.config.is3D,
								c = this.getFromEnv("dataSource").chart,
								u = (0, n.pluckNumber)(c.showborder, s ? 0 : 1),
								h = r.minChartWidth,
								d = r.minChartHeight,
								p = r.borderWidth = u ? (0, n.pluckNumber)(c.borderthickness, 1) : 0;
							r.autoscale ? l.scaleFactor = t._getScaleFactor(l.origW, l.origH, r.width, r.height) : l.scaleFactor = 1, r.canvasWidth - 2 *
								p < h && (o = (r.canvasWidth - h) / 2), r.canvasHeight - 2 * p < d && (a = (r.canvasHeight - d) / 2), this._allocateSpace({
									top: a || p,
									bottom: a || p,
									left: o || p,
									right: o || p
								}), this._allocateSpace(this._manageActionBarSpace && this._manageActionBarSpace(.225 * r.availableHeight) || {}), e = .7 * r
								.canvasHeight, this._manageChartMenuBar(e), i._manageSpace && this._allocateSpace(i._manageSpace(e))
						}, a.allocatePosition = function () {
							var e, t = this.config,
								a = this.getDatasets()[0].config,
								o = t.canvasHeight,
								r = t.canvasWidth,
								i = t.canvasTop,
								l = t.canvasLeft,
								n = t.gaugeoriginx,
								s = t.gaugeoriginy,
								c = t.gaugeradius,
								u = t.hasgaugeoriginx,
								h = t.hasgaugeoriginy,
								d = t.hasgaugeradius;
							n = void 0 !== u ? n * a.scaleFactor : l + r / 2, s = void 0 !== h ? s * a.scaleFactor : i + o / 2, e = void 0 !== d ? c * a.scaleFactor :
								Math.min(r / 2, o / 2), t.gaugeStartX = n - e, t.gaugeEndX = n + e, t.gaugeStartY = s - e, t.gaugeEndY = s + e, t.gaugeCenterX =
								n, t.gaugeCenterY = s, t.gaugeRadius = e
						}, a._getData = function () {
							var e, t, a = this.getChildren("dataset");
							if (a && (t = a[0].components.data) && t[0]) return e = t[0].config, (0, n.pluckNumber)(e.setValue, e.itemValue)
						}, a._postSpaceManagement = function () {
							this.allocateDimensionOfChartMenuBar()
						}, a.getDSdef = function () {
							return l["default"]
						}, t._getScaleFactor = function (e, t, a, o) {
							var r = t,
								i = e;
							return r = (0, n.pluckNumber)(r, o), i = (0, n.pluckNumber)(i, a), r && i ? i / a == r / o ? a / i : Math.min(a / i, o / r) :
								1
						}, t
					}(i["default"]);
				t["default"] = u
			},
			1041: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(1042),
					l = a(205),
					n = o(a(419)),
					s = a(193),
					c = o(a(491)),
					u = o(a(190)),
					h = o(a(1043)),
					d = (0, s.extend2)({}, s.defaultGaugePaletteOptions),
					p = Math.max;
				u["default"].addDep(h["default"]);
				var g = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this).defaultPaletteOptions = d, t.multiValueGauge = !1, t.drawAnnotations = !0, t.includeColorRangeInLimits = !
							1, t.isWidget = !0, t._feedAxesRawData = t._feedAxesRawData || s.stubFN, t._setCategories = t._setCategories || s.stubFN, t.eiMethods =
							i.eiMethods, t.registerFactory("dataset", c["default"], ["vCanvas"]), t.registerFactory("axis", s.stubFN, ["vCanvas"]), t
					}(0, r["default"])(t, e), t.getName = function () {
						return "GaugeBase"
					};
					var a = t.prototype;
					return a.getName = function () {
						return "GaugeBase"
					}, a.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.valuefontbold = 1, t.useScaleRecursively = !0, t.formatnumberscale = 0
					}, a.parseChartAttr = function (t) {
						e.prototype.parseChartAttr.call(this, t), this.config.drawTrendRegion = 0
					}, a.realTimeUpdate = function (e) {
						var t, a, o, r = this.getChildren().dataset,
							i = e.dataset,
							l = e.categories && e.categories.category || [],
							n = this.config.realTimeConfig = this.config.realTimeConfig || (this.config.realTimeConfig = {});
						if (this.fireChartInstanceEvent("updateDataReceived", e), this.fireEvent("realtimeDataUpdate", e), this.config.cachedArrivedJSON ||
							(this.config.cachedArrivedJSON = {}), this.config.cachedArrivedJSON = e, r) {
							for (o = 0, a = (t = i[0].data).length; o < a; o++) t[o].label = l[o] && l[o].label;
							r[0].maxminFlag && (n.maxminFlag = r[0].maxminFlag)
						}
					}, a._setData = function (e, t) {
						var a = s.BLANKSTRING;
						(e && e.toString || e === s.BLANKSTRING || 0 === e) && (a = "value=" + e.toString()), (t && t.toString || t === s.BLANKSTRING) &&
						(a = a + "&label=" + t.toString()), a && this.feedData(a)
					}, a._getData = function () {
						var e, t, a, o, r, i = this.getChildren(),
							l = this.getDatasets(),
							n = i.xAxis && i.xAxis[0] || i.scale,
							s = [],
							c = 0;
						if (l) {
							for (e = l.length, t = 0; t < e; t++) c = p(c, l[t].components.data.length);
							for (t = 0; t < c; t++)
								for ((r = s[t] = [])[0] = n.getLabel(t).label, a = 1; a <= e; a++) o = l[a - 1].components.data[t], r[a] = o && o.config.setValue;
							return s
						}
					}, a._checkInvalidSpecificData = function () {}, a.realTimeDraw = function (e) {
						if (void 0 === e && (e = {}), this.config.cachedArrivedJSON) {
							var t, a, o, r, i, n, c = this,
								u = c.config,
								h = u.prevData,
								d = (n = [], c.iterateComponents((function (e) {
									"dataset" === e.getType() && n.push(e)
								})), n),
								p = u.cachedArrivedJSON,
								g = u.realTimeConfig || (u.realTimeConfig = {}),
								f = g.showRTValue,
								m = [];
							if (c.__rtDrawStartAt = new Date, c.getFromEnv("animationManager").setAnimationState("realTimeUpdate"), d && d.length) {
								for (r = p.dataset[0].data, i = (m = Object.keys(d[0].config.dataById || d[0].config.idMap || {})).length, o = 0; o < i; o++)
									p.hasOwnProperty(m[o]) && r.push({
										value: Number(p[m[o]]),
										id: m[o]
									});
								u.prevData = function (e) {
										void 0 === e && (e = []);
										var t, a, o = e.length,
											r = [];
										for (t = 0; t < o; ++t) a = e[t], r.push(a.value);
										return [r]
									}(r), (t = p.dataset[0]).data[0] && (t.data[0].label = p.categories && p.categories.category && p.categories.category[0] &&
										p.categories.category[0].label), d[0].updateData(t), d[0].maxminFlag && (g.maxminFlag = d[0].maxminFlag), d[0].asyncDraw(),
									u.cachedArrivedJSON = s.UNDEF, c.rtManageSpace && c._RTmanageSpace(), c.prepareAttributes && c.prepareAttributes(), c._preDraw(),
									f && c._drawRealTimeValue && c.asyncRealTimeValueDraw()
							}
							u._eventArgs = e, e.prevData = h, c.__realtimeUpdateComplete || (c.__realtimeUpdateComplete = function () {
								a = new Date - c.__rtDrawStartAt, g.clear || (u._eventArgs.latency = a, u._eventArgs.updateObject = g.legacyUpdateObj), c.getChildren(
									"dataStreamer")[0].addToEnv("realtimeDrawingLatency", a), c.fireChartInstanceEvent("realTimeUpdateComplete", u._eventArgs)
							}), c.addJob("realtimeupdatecomplete", c.__realtimeUpdateComplete, l.priorityList.postRender)
						}
					}, a._setRTmenu = function (e, t) {
						i._setRTmenu.call(this, e, t)
					}, a._createLayers = function () {
						var t, a;
						e.prototype._createLayers.call(this), t = this.getChildContainer("belowPlotGroup"), a = this.getChildContainer(
							"axisBottomGroup"), t.insertBefore(a)
					}, a._realTimeConfigure = function () {
						i._realTimeConfigure.call(this)
					}, a._stopUpdate = function (e) {
						i._stopUpdate.call(this, e)
					}, a._restartUpdate = function () {
						i._restartUpdate.call(this)
					}, a._isUpdateActive = function () {
						return i._isUpdateActive.call(this)
					}, a.feedData = function (e) {
						i.feedData.call(this, e)
					}, a._linearDataParser = function (e) {
						return i._linearDataParser.call(this, e)
					}, a._clearChart = function (e) {
						i._clearChart.call(this, e)
					}, t
				}(n["default"]);
				t["default"] = g
			},
			1042: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t._setRTmenu = t._clearChart = t._linearDataParser = t.feedData = t.realTimeDraw = t._RTmanageSpace = t.realTimeUpdate =
					t._isUpdateActive = t._restartUpdate = t._stopUpdate = t.eiMethods = t._realTimeConfigure = void 0;
				var r = a(193),
					i = a(205),
					l = o(a(438)),
					n = Math.max,
					s = r.regex.dropHash,
					c = 0,
					u = 0,
					h = function (e) {
						return Object.assign({}, e)
					},
					d = function (e) {
						return e.spaceTaken.left
					},
					p = function (e) {
						return e.spaceTaken.right
					},
					g = function (e) {
						var t = [];
						return e.iterateComponents((function (e) {
							"dataset" === e.getType() && t.push(e)
						})), t
					},
					f = {
						feedData: function () {
							var e, t, a = this,
								o = a.apiInstance,
								r = arguments[1];
							if (!r) return o.feedData.apply(o, arguments);
							e = arguments[0], o.addJob("feedDataId" + u++ + c++, (function () {
								t = o.feedData(e), "function" == typeof r && r(t)
							}), i.priorityList.postRender)
						},
						setData: function () {
							var e = this.apiInstance,
								t = arguments[0],
								a = arguments[1];
							e.addJob("setDataId" + u++, (function () {
								e._setData(t, a)
							}), i.priorityList.postRender)
						},
						stopUpdate: function () {
							var e = this.apiInstance;
							e.addJob("stopUpdateId" + u++, (function () {
								e._stopUpdate()
							}), i.priorityList.postRender)
						},
						restartUpdate: function () {
							this.apiInstance._restartUpdate.apply(this.apiInstance, arguments)
						},
						isUpdateActive: function () {
							return this.apiInstance._isUpdateActive.apply(this.apiInstance, arguments)
						},
						clearChart: function () {
							var e = this.apiInstance;
							e.addJob("clearChartId" + u++, (function () {
								e._clearChart()
							}), i.priorityList.postRender)
						},
						getData: function () {
							return this.apiInstance._getData.apply(this.apiInstance, arguments)
						},
						getDataForId: function () {
							return this.apiInstance._getDataForId.apply(this.apiInstance, arguments)
						},
						setDataForId: function () {
							return this.apiInstance._setDataForId.apply(this.apiInstance, arguments)
						},
						getDataJSON: function () {
							return this.apiInstance._getDataJSON.apply(this.apiInstance, arguments)
						}
					};
				t._setRTmenu = function (e, t) {
					var a = this,
						o = a.getFromEnv("hamburger"),
						r = !0,
						i = [];
					e && i.push({
						name: "Clear Chart",
						handler: function () {
							a._clearChart()
						},
						action: "click"
					}), t && i.push({
						name: "Show Log",
						handler: function () {
							a.getChildren("messageLogger")[0].show()
						},
						action: "click"
					}), e && i.push({
						id: "rt",
						name: "Stop Update",
						handler: function () {
							! function e() {
								r ? (a._stopUpdate(), o.getChild("listContainer").getChild("rt").configure({
									id: "rt",
									name: "Restart Update",
									handler: function () {
										e()
									},
									action: "click"
								}), o.getChild("listContainer").getChild("rt").asyncDraw(), r = !1) : (a._restartUpdate(), o.getChild("listContainer").getChild(
									"rt").configure({
									id: "rt",
									name: "Stop Update",
									handler: function () {
										e()
									},
									action: "click"
								}), o.getChild("listContainer").getChild("rt").asyncDraw(), r = !0)
							}()
						},
						action: "click"
					}), i.length && o.appendInMenu(i)
				}, t._clearChart = function (e) {
					var t, a, o = this.getChildren(),
						r = o.xAxis && o.xAxis[0],
						i = g(this),
						l = r.getTicksLen(),
						n = r.getVisibleConfig(),
						s = n.maxValue,
						c = n.minValue,
						u = l > s ? s - c : l,
						h = this.config.realTimeConfig || (this.config.realTimeConfig = {}),
						d = h.showRTValue,
						p = i.length;
					if (h.clear = !0, i) {
						for (r && r.categoryDelete(0, u, !0), this.config._sumValuesUpdated = !1, a = 0; a < p; a++) t = i[a], i[a].removeData(0, t.components
							.data.length), i[a].resetCatPos();
						this._setCategories()
					}
					d && this._drawRealTimeValue && this.asyncRealTimeValueDraw(), this.fireChartInstanceEvent("ChartCleared", {
						source: e
					}, [this.getId(), e])
				}, t._linearDataParser = function (e) {
					var t, a, o, i, l, s, c, u, h, d, p, f, m, v, b, k, C, x, T, w, A, S, y, N, F, D, E, L, M, R, _, V, O = e,
						I = g(this),
						P = I && I.length,
						G = this.config.realTimeConfig.legacyUpdateObj = {},
						B = G.values = [],
						H = G.target = [],
						W = G.valueVisibility = [],
						j = G.toolTexts = [],
						z = G.toolTextsTarget = [],
						U = G.colors = [],
						X = G.links = [],
						K = G.valueFontColors = [],
						Y = G.valueBgColors = [],
						J = G.valueBorderColors = [],
						Z = 0,
						q = {
							categories: {
								category: []
							},
							dataset: []
						},
						$ = q.categories.category,
						Q = q.dataset,
						ee = O;
					for (O = O && O.toString && O.toString() || "", this.rtParserModify && (ee = ee.replace(/([^\\])(\|)/g, "$1,"), O = O.replace(
							/\|/g, ",")), v = 0, b = (t = O.split("&")).length; v < b; v += 1)
						if (o = (a = t[v].split("="))[1], (a = a[0]) !== r.BLANKSTRING && void 0 !== a && void 0 !== o && o !== r.BLANKSTRING) switch (
							a.toLowerCase()) {
						case "label":
							G.labels = k = o.split(",");
							break;
						case "vline":
							G.vlines = C = o.split(",");
							break;
						case "vlinelabel":
							G.vlineLabels = h = o.split(",");
							break;
						case "vlinecolor":
							G.vlineColors = d = o.split(",");
							break;
						case "vlinethickness":
							G.vlineThickness = p = o.split(",");
							break;
						case "vlinedashed":
							G.vlineDashed = f = o.split(",");
							break;
						case "value":
							x = o.split("|");
							break;
						case "valuefontcolor":
							E = o.split("|");
							break;
						case "valuebgcolor":
							L = o.split("|");
							break;
						case "valuebordercolor":
							M = o.split("|");
							break;
						case "target":
							T = o.split("|");
							break;
						case "showlabel":
							G.showLabels = m = o.split(",");
							break;
						case "showvalue":
							i = o.split("|");
							break;
						case "tooltext":
							l = (l = (l = (l = ee.match(/tooltext=(.*?\\&)*.*?[^\\]&/i)) ? l[0].substr(9, l[0].length - 10) : ee.match(/(tooltext=)(.*)/i)[
								2]) && l.replace(/([^\\])(\|)/g, "$1_FC@@**")).split("_FC@@**");
							break;
						case "targettooltext":
							s = o.split("|");
							break;
						case "link":
							u = o.split("|");
							break;
						case "color":
							c = o.split("|");
							break;
						case "datastamp":
							G.dataStamp = w = o;
							break;
						case "stopupdate":
							G.pause = A = "1" === o;
							break;
						case "clear":
							G.clear = S = "1" === o;
							break;
						default:
							G[a] = q[a] = o
						}
						for (D = x && x.length, v = 0; v < D; v++) B[v] = x[v].split(","), H[v] = T && T[v] && T[v].split(","), W[v] = i && i[v] && i[v]
							.split(","), z[v] = s && s[v] && s[v].split(","), U[v] = c && c[v] && c[v].split(","), X[v] = u && u[v] && u[v].split(","), K[
								v] = E && E[v] && E[v].split(","), Y[v] = L && L[v] && L[v].split(","), J[v] = M && M[v] && M[v].split(","), l && (V = l[v]) &&
							(V = V.replace(/([^\\])(\,)/g, "$1_FC@@**"), j[v] = V.split("_FC@@**")), Z = n(Z, B[v].length);
					for (_ = k && k.length, y = n(_ || 0, Z || 0), v = 0; v < y; v++) $.push({
						label: k && k[v],
						color: d && d[v],
						showlabel: m && m[v]
					});
					for (C && $.push({
							label: h && h[0],
							vline: C && C[0],
							color: d && d[0],
							thickness: p && p[0],
							dashed: f && f[0],
							showlabel: m && m[0]
						}), v = 0; v < P; v++) {
						for (N = (R = {}).data = [], F = 0; F < y; F++) N.push({
							value: B[v] && B[v][F],
							target: H[v] && H[v][F],
							showvalue: W[v] && W[v][F],
							tooltext: j[v] && j[v][F] && decodeURIComponent(j[v][F].replace(/\\/g, "")),
							tooltexttarget: z[v] && z[v][F],
							color: U[v] && U[v][F],
							link: X[v] && X[v][F] && decodeURIComponent(X[v][F]),
							valuefontcolor: K[v] && K[v][F],
							valuebgcolor: Y[v] && Y[v][F],
							valuebordercolor: J[v] && J[v][F]
						});
						Q.push(R)
					}
					return A && this._stopUpdate(), S && this._clearChart(), w && (this.config.dataStamp = w), q
				}, t.feedData = function (e) {
					var t = this.getFromEnv("dataStreamer");
					t.responseTextHandler(e), t.refreshVisualHandler({
						source: "feedData",
						data: e
					})
				}, t.realTimeDraw = function (e) {
					void 0 === e && (e = {});
					var t, a, o, r, l = this,
						n = l.config,
						s = l.getChildren(),
						c = s.canvas && s.canvas[0],
						u = s.xAxis && s.xAxis[0],
						h = s.yAxis && s.yAxis[0],
						d = s.yAxis && s.yAxis[1],
						p = g(l),
						f = p.length,
						m = n.cachedArrivedJSON,
						v = m && m.dataset,
						b = m && m.categories && m.categories.category || [],
						k = u && u.getTicksLen(),
						C = n.realTimeConfig = n.realTimeConfig || (n.realTimeConfig = {}),
						x = C.prevData,
						T = 0,
						w = C.showRTValue,
						A = C.clear,
						S = function (e) {
							void 0 === e && (e = []);
							var t, a, o = e.length,
								r = [];
							for (t = 0; t < o; ++t) a = e[t], r.push(a.value);
							return r
						};
					if (n._eventArgs = e, e.prevData = x, C.prevData = [], l.getFromEnv("animationManager").setAnimationState("realTimeUpdate"), l.__rtDrawStartAt =
						new Date, l.__realtimeUpdateComplete || (l.__realtimeUpdateComplete = function () {
							r = new Date - l.__rtDrawStartAt, A || (n._eventArgs.latency = r, n._eventArgs.updateObject = C.legacyUpdateObj), l.getChildren(
								"dataStreamer")[0].addToEnv("realtimeDrawingLatency", r), l.fireChartInstanceEvent("realTimeUpdateComplete", n._eventArgs)
						}), l.addJob("realtimeupdatecomplete", l.__realtimeUpdateComplete, i.priorityList.postRender), p) {
						if (c.asyncDraw(), m) {
							if (u) {
								for (u.asyncDraw(), u.categoryInsert(k, b, !0), o = 0, t = b.length; o < t; o++) b[o].vline || (T += 1);
								u.categoryDelete(0, T, !0), u.categoryTranslate(T)
							}
							if (n._sumValuesUpdated = !1, A) {
								for (o = 0; o < f; o++) p[o]._realTimeConfigure(!0);
								C.clear = !1
							}
							for (o = 0; o < f; o++) a = v[o], p[o].addData(a), p[o].removeData(0, a.data.length), p[o].resetCatPos(), p[o].setMaxMin(), p[
								o].getLinkedParent().childChanged(), C.prevData.push(S(a.data));
							n.cachedArrivedJSON = void 0
						}
						l.rtManageSpace && l._RTmanageSpace(), n.drawYAxis && h && h.asyncDraw(), n.drawSyAxis && d && d.asyncDraw(), l._preDraw(), w &&
							l._drawRealTimeValue && l.asyncRealTimeValueDraw()
					}
				}, t._RTmanageSpace = function () {
					var e, t, a, o, r, i, s, c, u, g, f, m = this.config,
						v = this.getChildren(),
						b = v.xAxis[0],
						k = v.yAxis[0],
						C = v.yAxis[1],
						x = v.canvas && v.canvas[0],
						T = x.config,
						w = T.canvasBorderWidth,
						A = T.canvasPaddingTop,
						S = T.canvasPaddingBottom,
						y = T.canvasPadding || 0,
						N = T.canvasPaddingLeft,
						F = T.canvasPaddingRight,
						D = m.xAxisSpaceAllocation,
						E = m.yAxisSpaceAllocation || [],
						L = E.map(h),
						M = k && JSON.stringify(k.getAxisDimension()),
						R = k && JSON.stringify(k.getAxisDimension()),
						_ = m.shift || 0;
					e = (t = m.xAxisSpaceAllocation = b.placeAxis(m.availableHeight + (b.config.isOpposit ? D.top : D.bottom))).bottom - D.bottom, 0 ===
						(g = t.top - D.top) && 0 === e || (this._allocateSpace({
							bottom: e,
							top: g
						}), a = m.availableWidth, E[0].spaceTaken = k.placeAxis(a + L[0].spaceTaken.left), C && (E[1].spaceTaken = C.placeAxis(a + L[1]
							.spaceTaken.right)), this._allocateSpace({
							left: (0, l["default"])(E, d) - (0, l["default"])(L, d),
							right: (0, l["default"])(E, p) - (0, l["default"])(L, p)
						}), a = m.availableWidth, o = m.canvasLeft - w, i = m.canvasRight + w, C && (r = i, s = o, 0 === m.primaryAxisOnleft && (c = o,
							o = r, r = c, c = i, i = s, s = c), C.setAxisDimention({
							x: r,
							y: m.canvasTop + A,
							opposite: s,
							axisLength: m.canvasHeight - A - S
						})), b && b.setAxisDimention({
							x: m.canvasLeft + n(N, y),
							y: b.config.isOpposit ? m.canvasTop - w : m.canvasBottom + _ + w,
							opposite: b.config.isOpposit ? m.canvasBottom + _ + w : m.canvasTop - w,
							axisLength: m.canvasWidth - n(N, y) - n(F, y)
						}), k && k.setAxisDimention({
							x: k.config.isOpposit ? i : o,
							y: m.canvasTop + A,
							opposite: k.config.isOpposit ? o : i,
							axisLength: m.canvasHeight - A - S
						})), this.canvasPadding && x.setCanvasPadding(), x.setDimension({
							top: m.canvasTop,
							left: m.canvasLeft,
							width: m.canvasWidth,
							height: m.canvasHeight
						}), w = T.canvasBorderWidth, A = T.canvasPaddingTop, S = T.canvasPaddingBottom, y = T.canvasPadding || 0, N = T.canvasPaddingLeft,
						F = T.canvasPaddingRight, C && C.setAxisDimention({
							x: m.canvasRight + w,
							y: m.canvasTop + A,
							opposite: s,
							axisLength: m.canvasHeight - A - S
						}), b && b.setAxisDimention({
							x: m.canvasLeft + n(N, y),
							y: b.config.isOpposit ? m.canvasTop - w : m.canvasBottom + _ + w,
							opposite: b.config.isOpposit ? m.canvasBottom + _ + w : m.canvasTop - w,
							axisLength: m.canvasWidth - n(N, y) - n(F, y)
						}), k && k.setAxisDimention({
							x: k.config.isOpposit ? m.canvasRight + w : m.canvasLeft - w,
							y: m.canvasTop + A,
							opposite: k.config.isOpposit ? m.canvasLeft - w : m.canvasRight + w,
							axisLength: m.canvasHeight - A - S
						}), u = k && JSON.stringify(k.getAxisDimension()), f = k && JSON.stringify(k.getAxisDimension()), m.drawYAxis = u !== M, m.drawSyAxis =
						f !== R
				}, t.realTimeUpdate = function (e) {
					var t, a, o = g(this),
						r = this.config.cachedArrivedJSON,
						i = r && r.categories,
						l = e.dataset,
						n = e.categories && e.categories.category || [];
					for (this.fireChartInstanceEvent("updateDataReceived", e), this.fireEvent("realtimeDataUpdate", e), !this.config.cachedArrivedJSON &&
						(r = this.config.cachedArrivedJSON = {}), r.dataset = r.dataset || [], (i = r.categories || (r.categories = {})).category = i.category || [],
						t = 0; t < o.length; t++)(a = r.dataset[t] || (r.dataset[t] = {})).data || (a.data = []), a.data.push.apply(a.data, l[t].data);
					i.category.push.apply(i.category, n)
				}, t.eiMethods = f, t._isUpdateActive = function () {
					return this.getChildren("dataStreamer")[0]._isUpdateActive()
				}, t._restartUpdate = function () {
					this.getChildren("dataStreamer")[0]._restartUpdate()
				}, t._stopUpdate = function (e) {
					var t = this.config.realTimeConfig,
						a = this.config.timers && this.config.timers.setTimeout.loadData;
					this.getChildren("dataStreamer")[0]._stopUpdate(), a && clearTimeout(a), t.clearIntervalFlag = !1, this.fireChartInstanceEvent(
						"dataRestored", {
							source: e
						})
				}, t._realTimeConfigure = function () {
					var e, t, a, o = this.config,
						i = o.realTimeConfig || (o.realTimeConfig = {}),
						l = this.getFromEnv("dataSource"),
						c = l.chart,
						u = (0, r.pluckNumber)(c.usemessagelog, 0),
						h = (0, r.pluckNumber)(c.messagegoestolog, 1),
						d = l.categories && Array.isArray(l.categories) && l.categories[0] && l.categories[0].category && l.categories[0].category.length ||
						0;
					i.showRTValue = (0, r.pluckNumber)(c.showrealtimevalue, 1), i.dataStreamURL = (0, r.parseUnsafeString)(c.datastreamurl, r.BLANKSTRING),
						i.dataStamp = c.datastamp, i.useMessageLog = u && h, i.clearInterval = (0, r.pluckNumber)(c.clearchartinterval, 0), i.realtimeValueSeparator =
						(0, r.pluck)(c.realtimevaluesep, r.COMMASPACE), i.refreshInterval = e = (0, r.pluckNumber)(c.refreshinterval, c.updateinterval,
							2), i.updateInterval = this.config.updateInterval = (0, r.pluckNumber)(c.updateinterval, e), i.realtimeValuePadding = (0, r.pluckNumber)
						(c.realtimevaluepadding), i.realtimeValueFont = (0, r.pluck)(c.realtimevaluefont, r.BLANKSTRING), i.realtimeValueFontBold = (0,
							r.pluck)(c.realtimevaluefontbold, 0), i.realtimeValueFontColor = t = (0, r.pluck)(c.realtimevaluefontcolor, r.BLANKSTRING), i.realtimeValueFontSize =
						a = (0, r.pluckNumber)(c.realtimevaluefontsize, r.BLANKSTRING), i.realTimeValuePadding = (0, r.pluckNumber)(c.realtimevaluepadding,
							5), i.fontWeight = (0, r.pluckNumber)(c.realtimevaluefontbold, 0) ? "bold" : "normal", i.numDisplaySets = (0, r.pluckNumber)(c
							.numdisplaysets, n(d, 15)), i.refreshInstantly = (0, r.pluckNumber)(c.refreshinstantly, 0), i.showRTmenuItem = (0, r.pluckNumber)
						(c.showrtmenuitem, 0), i.sync = (0, r.pluckNumber)(c.sync, e > .6), t && (i.realtimeValueFontColor = t.replace(s, r.HASHSTRING)),
						a && (i.realtimeValueFontSize = a + "px"), e *= 1e3
				}
			},
			1043: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(210)),
					i = o(a(207)),
					l = o(a(252)),
					n = a(208),
					s = a(193),
					c = function (e) {
						var t, a = e.sender;
						"chartAPI" === a.getType() && (t = a).registerFactory("dataStreamer", (function () {
							var e;
							u && t.config.realtimeEnabled && ((0, s.componentFactory)(t, u, "dataStreamer", 1), (e = t.getChildren("dataStreamer")[0]).configure(),
								t.addToEnv("dataStreamer", e))
						}))
					},
					u = function (e) {
						function t() {
							var t, a;
							return (t = e.call(this) || this)._handlerFn = (a = (0, r["default"])(t), function () {
								var e = a.config;
								e && (void 0 === e.rtPreInit && (e.rtPreInit = !1), e._rtPaused && delete e._rtPaused, e.rtStateChanged || (e.rtStateChanged = !
									0, a.processRealtimeStateChange(arguments)))
							}), t._handlerStop = function (e) {
								return function () {
									e._dispose()
								}
							}((0, r["default"])(t)), t
						}(0, i["default"])(t, e);
						var a = t.prototype;
						return a.getType = function () {
							return "dataStreamer"
						}, a.getName = function () {
							return "dataStreamer"
						}, t.resetTimeout = function (e, t, a) {
							return clearTimeout(a), setTimeout(e, t)
						}, a.configure = function () {
							var e, t, a, o, r = this,
								i = r.config,
								l = r.getLinkedParent(),
								n = l.getFromEnv("dataSource") && l.getFromEnv("dataSource").chart;
							a = l.getFromEnv("chartInstance"), o = l.config.realTimeConfig, i.clearMs = 1e3 * o.clearInterval, i.updateMs = t = 1e3 * o.updateInterval,
								i.refreshMs = e = 1e3 * o.refreshInterval, r.addEvents(), e < t && (i.refreshMs = t), i.dataStamp = n.datastamp, r.config.chartObj =
								a, a.jsVars && (a.jsVars._rtLastUpdatedData = null), r.updateIntervalHandler(0, !0), r.refreshVisualHandler(null, null, !0),
								r.initiateResetVisual(!0), i._rtAjaxLatencyStart = null, i._rtAjaxLatency = null, r.addToEnv("realtimeDrawingLatency", 0)
						}, a._dispose = function () {
							this.updateIntervalHandler(0, !0), this.refreshVisualHandler(null, null, !0), this.initiateResetVisual(!0), e.prototype._dispose
								.call(this)
						}, a.processRealtimeStateChange = function () {
							var e, t = this,
								a = t.config,
								o = t.config.chartObj,
								r = o.__state,
								i = t.getLinkedParent(),
								n = i.config,
								s = n.realtimeEnabled,
								c = n.realTimeConfig.dataStreamURL;
							r.dataSetDuringConstruction && !a.rtStateChanged && void 0 === a.rtPreInit && (o.dataReady() ? (a.rtStateChanged = !0, a.rtPreInit = !
								0) : a.rtPreInit = !1), a.rtStateChanged && (a.rtStateChanged = !1, i && (e = a._rtAjaxObj, s && (void 0 === a._rtPaused &&
								(a._rtPaused = !1), a._rtDataUrl = c, t.initiateResetVisual(), (e = a._rtAjaxObj || (a._rtAjaxObj = new l["default"])).onSuccess ||
								(e.onSuccess = function () {
									t.getFromEnv("chartConfig").realTimeConfig.dataStreamURL && (t.setState("ajaxRequested", !0), t.responseTextHandler(
											arguments[0]), a._rtAjaxLatencyStart && (a._rtAjaxLatency = new Date - a._rtAjaxLatencyStart || 0), t.refreshVisualHandler({
											data: a.responseText,
											source: "XmlHttpRequest",
											url: a.url,
											networkLatency: a._rtAjaxLatency
										}, a._rtAjaxLatency + (a._firstUpdate ? new Date - a._firstUpdate : 0), !t.getFromEnv("chartConfig").realTimeConfig.dataStreamURL),
										a._firstUpdate = void 0, a._rtPaused || a._rtAjaxLatency >= a.updateMs && (a._rtAjaxLatency = a.updateMs - 1), t.updateIntervalHandler(
											a._rtAjaxLatency, a._rtPaused))
								}), e.onError || (e.onError = function () {
									var e = arguments[0],
										r = arguments[1],
										l = arguments[3];
									a._rtAjaxLatencyStart && (a._rtAjaxLatency = new Date - a._rtAjaxLatencyStart), t.setState("ajaxRequested", !1), i.fireChartInstanceEvent(
										"realTimeUpdateError", {
											source: "XmlHttpRequest",
											url: l,
											xmlHttpRequestObject: r.xmlhttp,
											error: e,
											httpStatus: r.xmlhttp && r.xmlhttp.status ? r.xmlhttp.status : -1,
											networkLatency: a._rtAjaxLatency
										}), t.updateIntervalHandler(0, !o.isActive())
								}), a._rtPaused || (t.updateIntervalHandler(0), a._firstUpdate = new Date))))
						}, a.responseTextHandler = function (e) {
							var t = this.config,
								a = this.getFromEnv("chart"),
								o = this.getFromEnv("chartConfig").realtimeEnabled,
								r = a.feedData,
								i = a._linearDataParser(e);
							t.responseText = e, this.getFromEnv("chartInstance").isActive() && r && o && (t.dataStamp = i.dataStamp ? i.dataStamp : null,
								a.realTimeUpdate(i))
						}, a.initiateResetVisual = function (e) {
							if (void 0 === e && (e = !1), e) clearTimeout(this.config._toClearChart);
							else {
								var a = this.config,
									o = this.getFromEnv("chart");
								e || a.clearMs && (a._toClearChart = t.resetTimeout((function r() {
									o._clearChart && o._clearChart(), a.clearMs ? a._toClearChart = t.resetTimeout(r, a.clearMs, a._toClearChart) :
										clearTimeout(a._toClearChart)
								}), a.clearMs, a._toClearChart))
							}
						}, a.updateIntervalHandler = function (e, a) {
							if (void 0 === e && (e = 0), void 0 === a && (a = !1), a) clearTimeout(this.config && this.config._toRealtimeUpdate);
							else {
								var o, r = this,
									i = r.config,
									l = i._rtAjaxObj,
									n = i.updateMs;
								if (r.requestData || (r.requestData = function () {
										var e = r.getFromEnv("chartConfig").realTimeConfig.dataStreamURL,
											t = i.dataStamp,
											a = i._rtAjaxObj,
											o = e;
										o += (-1 === e.indexOf("?") ? "?num=" : "&num=") + Math.random(), t && (o += "&dataStamp=" + t), i.url = o, a.open && a.abort(),
											e && a.get(o), i._rtAjaxLatencyStart = new Date
									}), n <= 0) return i._toRealtimeUpdate = clearTimeout(i._toRealtimeUpdate), void(l && l.abort());
								n < 10 && (n = 10), a || (o = n - e, i._toRealtimeUpdate = t.resetTimeout(r.requestData, o, i._toRealtimeUpdate))
							}
						}, a.refreshVisualHandler = function (e, a, o) {
							if (void 0 === a && (a = 0), void 0 === o && (o = !1), o) return clearTimeout(this.config._toRealtimeDraw), this._clearCachedData(),
								void(this.config.isAlive = !1);
							var r, i = this,
								l = i.config,
								n = l.refreshMs,
								s = i.getFromEnv("chart"),
								c = i.getFromEnv("chartConfig").realtimeEnabled,
								u = i.getFromEnv("chartInstance").isActive(),
								h = (new Date).getTime(),
								d = s.feedData,
								p = a;
							i.getState("ajaxRequested") && l.lastRTDrawAt || (l.lastRTDrawAt = h), i.config.sourceInfo = e, i._rtDraw || (i._rtDraw =
								function () {
									l.isAlive = !1, l.lastRTDrawAt = (new Date).getTime(), s.realTimeDraw(i.config.sourceInfo)
								}), u && d && c && !o && !l.isAlive && (l.isAlive = !0, r = n - (p += h - l.lastRTDrawAt + i.getFromEnv(
								"realtimeDrawingLatency")) > 0 ? n - p : 0, l._toRealtimeDraw = t.resetTimeout(i._rtDraw, r, l._toRealtimeDraw))
						}, a._clearCachedData = function () {
							this.getFromEnv("chart").config.cachedArrivedJSON = {}
						}, a._stopUpdate = function () {
							var e = this,
								t = e.config;
							e.updateIntervalHandler(0, !0), e.refreshVisualHandler(null, null, !0), e.initiateResetVisual(!0), t._rtAjaxObj && t._rtAjaxObj
								.abort(), t._rtPaused = !0, e.setState("ajaxRequested", !1)
						}, a._restartUpdate = function () {
							var e = this.config;
							e._rtDataUrl && e._rtPaused && (e._rtPaused = !1, e.rtStateChanged = !0, this.processRealtimeStateChange())
						}, a._isUpdateActive = function () {
							return !this.config._rtPaused
						}, a.addEvents = function () {
							var e = this,
								t = e.getLinkedParent(),
								a = e.config;
							a.eventsAdded || (e.addExtEventListener("renderComplete", e._handlerFn, t.getFromEnv("chartInstance")), e.addExtEventListener(
								"nodatatodisplay", e._handlerStop, t.getFromEnv("chartInstance"))), a.eventsAdded = !0
						}, t
					}(n.ComponentInterface);
				var h = {
					extension: function (e) {
						e.addEventListener("instantiated", c)
					},
					name: "DataStreamer",
					type: "extension",
					requiresFusionCharts: !0
				};
				t["default"] = h
			},
			1044: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = a(208),
					n = a(201),
					s = o(a(1045)),
					c = i.BLANK,
					u = i.preDefStr.POSITION_TOP,
					h = i.preDefStr.POSITION_MIDDLE,
					d = i.preDefStr.showHoverEffectStr,
					p = i.preDefStr.visibleStr,
					g = i.preDefStr.ROUND,
					f = Math.min,
					m = window,
					v = m.navigator.userAgent,
					b = "rgba(192,192,192," + (/msie/i.test(v) && !m.opera ? .002 : 1e-6) + ")",
					k = function (e, t, a) {
						return a.getFromEnv("animationManager").setAnimation({
							el: "group",
							attr: {
								name: e
							},
							container: t,
							component: a,
							label: "group"
						})
					};
				(0, n.addDep)({
					name: "bulbAnimation",
					type: "animationRule",
					extension: s["default"]
				});
				var C = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this).addData = function () {}, t.removeData = function () {}, t.components = {}, t
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getType = function () {
						return "dataset"
					}, a.getName = function () {
						return "bulb"
					}, a._manageSpace = function (e) {
						var t, a, o, r = this.config,
							l = this.components.data,
							n = this.getFromEnv("chart").config,
							s = this.getFromEnv("smartLabel"),
							u = n.dataLabelStyle,
							h = (0, i.pluckNumber)(parseInt(u.lineHeight, 10), 12),
							d = e,
							p = n.valuepadding,
							g = 0;
						return o = (t = l[0]) && t.config, s.useEllipsesOnOverflow(n.useEllipsesWhenOverflow), s.setStyle(u), o && o.displayValue !==
							c && !n.placevaluesinside && r.showValue && (a = s.getOriSize(o.displayValue), o.displayValue === i.BLANK && (a = {
								height: h
							}), a.height > 0 && (g = a.height + p), g > d && (g = d)), r.heightUsed = g, {
								top: 0,
								bottom: g
							}
					}, a.configureAttributes = function (e) {
						if (!e) return !1;
						this.config.JSONData = e;
						var t, a = this.config.JSONData,
							o = (0, i.extend2)({}, a),
							r = this.getFromEnv("chart"),
							l = this.config,
							n = r.config,
							s = r.getFromEnv("dataSource").chart;
						(0, i.parseConfiguration)(o, l, r.config, {
							data: !0
						}), l.origW = (0, i.pluckNumber)(s.origw, n.autoscale ? r.config.origRenderWidth : n.width || r.config.origRenderWidth), l.origH =
							(0, i.pluckNumber)(s.origh, n.autoscale ? r.config.origRenderHeight : n.height || r.config.origRenderHeight), l.setToolText =
							(0, i.getValidValue)((0, i.parseUnsafeString)((0, i.pluck)(s.plottooltext, void 0), !1)), l.useColorNameAsValue = (0, i.pluckNumber)
							(s.usecolornameasvalue, 0), l.showTextOutline = (0, i.pluckNumber)(s.textoutline, 0), l.enableAnimation = t = (0, i.pluckNumber)
							(s.animation, s.defaultanimation, 1), l.animation = !!t && {
								duration: 1e3 * (0, i.pluckNumber)(s.animationduration, 1)
							}, l.showValue = (0, i.pluckNumber)(s.showvalue, 1), this._setConfigure()
					}, a._setConfigure = function (e) {
						var t, a, o, r, l, n, s, c, u, h, d, p, g, f, m, v, b, k, C, x, T, w, A, S, y, N, F, D, E, L = this.getFromEnv("chart"),
							M = this.config,
							R = L.config,
							_ = this.config.JSONData,
							V = e || _.data,
							O = V && V.length,
							I = e && e.data.length || O,
							P = L.getFromEnv("dataSource").chart,
							G = this.getFromEnv("color-manager"),
							B = (0, i.pluckNumber)(P.showtooltip, 1),
							H = ((0, i.parseUnsafeString)((0, i.pluck)(P.tooltipsepchar, i.COMMASPACE)), R.showhovereffect),
							W = this.components.data,
							j = (0, i.pluckNumber)(P.is3d, 1),
							z = this.getFromEnv("number-formatter"),
							U = function (e, t, a) {
								return a ? {
									FCcolor: {
										cx: .4,
										cy: .4,
										r: "80%",
										color: (0, i.getLightColor)(e, 65) + i.COMMASTRING + (0, i.getLightColor)(e, 75) + i.COMMASTRING + (0, i.getDarkColor)(e,
											65),
										alpha: t + i.COMMASTRING + t + i.COMMASTRING + t,
										ratio: "0,30,70",
										radialGradient: !0
									}
								} : (0, i.convertColor)(e, t)
							};
						for (W || (W = this.components.data = []), c = 0; c < I; c++) o = e ? e && e.data[c] : V[c], n = (l = W[c]) && l.config, l ||
							(l = W[c] = {}), l.config || (n = W[c].config = {}), n.setValue = r = z.getCleanValue(o.value) || 0, t = z.dataLabels(r), s =
							(0, i.getValidValue)((0, i.parseUnsafeString)(o.displayvalue)), n.colorRangeGetter = u = this.getFromEnv("colorRange"), h = u
							.getColorObj(n.setValue), u.colorArr.length || (h = u.config.defaultObj), d = (0, i.pluckNumber)(P.gaugefillalpha, h.alpha,
								100), p = (0, i.parseUnsafeString)((0, i.pluck)(h.label, h.name)), g = (0, i.pluck)(h.bordercolor, P.gaugebordercolor, (0, i
								.getDarkColor)(h.code, 70), "000000"), f = (0, i.pluckNumber)(h.borderalpha, P.gaugeborderalpha, "90") * d / 100, g = (m =
								/\{/.test(g)) ? G.parseColorMix((0, i.pluck)(h.bordercolor, h.code), g)[0] : g, n.gaugeBorderColor = b = (0, i.convertColor)
							(g, f), n.gaugeBorderThickness = k = R.showgaugeborder ? (0, i.pluckNumber)(P.gaugeborderthickness, 1) : 0, n.rawFillColor =
							h.code, n.fillColor = v = U(h.code, d, j), 0 !== H && (H || P.gaugefillhovercolor || P.plotfillhovercolor || P.gaugefillhoveralpha ||
								P.plotfillhoveralpha || 0 === P.gaugefillhoveralpha || P.is3donhover || 0 === P.is3donhover || P.showgaugeborderonhover || 0 ===
								P.showgaugeborderonhover || P.gaugeborderhovercolor || P.gaugeborderhoveralpha || 0 === P.gaugeborderhoveralpha || P.gaugeborderhoverthickness ||
								0 === P.gaugeborderhoverthickness) && (H = !0, C = (0, i.pluck)(P.gaugefillhovercolor, P.plotfillhovercolor, "{dark-10}"), x =
								(0, i.pluckNumber)(P.gaugefillhoveralpha, P.plotfillhoveralpha), void 0 === (T = (0, i.pluckNumber)(P.showgaugeborderonhover)) &&
								(T = P.gaugeborderhovercolor || P.gaugeborderhoveralpha || 0 === P.gaugeborderhoveralpha || P.gaugeborderhoverthickness || 0 ===
									P.gaugeborderhoverthickness ? 1 : R.showgaugeborder), w = (0, i.pluck)(P.gaugeborderhovercolor, "{dark-10}"), A = (0, i.pluckNumber)
								(P.gaugeborderhoveralpha), S = T ? (0, i.pluckNumber)(P.gaugeborderhoverthickness, k || 1) : 0, y = !!(0, i.pluckNumber)(P.is3donhover,
									j), D = {}, E = {}, k !== S && (D["stroke-width"] = S, E["stroke-width"] = k), E.fill = (0, i.toRaphaelColor)(v), C = /\{/.test(
									C) ? G.parseColorMix(h.code, C)[0] : (0, i.pluck)(C, h.code), D.fill = (0, i.toRaphaelColor)(U(C, (0, i.pluckNumber)(x, d),
									y)), S && (E.stroke = b, N = /\{/.test(w), D.stroke = (0, i.convertColor)(N ? G.parseColorMix(m ? C : g, w)[0] : w, (0, i.pluckNumber)
									(A, f)))), n.setTooltext = (0, i.getValidValue)((0, i.parseUnsafeString)((0, i.pluck)(o.tooltext, _.plottooltext, P.plottooltext), !
								1)), a = !!B && (void 0 !== n.setTooltext ? (0, i.parseTooltext)(n.setTooltext, [1, 2], {
								formattedValue: t
							}, o, P) : M.useColorNameAsValue ? p : null !== t && t), F = void 0 !== s ? s : o.label || (M.useColorNameAsValue ? p : t), n
							.toolText = a, n.displayValue = F, n.rolloverProperties = {
								enabled: H,
								hoverAttr: D,
								hoverAnimAttr: void 0,
								outAttr: E
							}
					}, a.updateData = function (e, t, a) {
						this._setConfigure(e, t), a && this.asynDraw()
					}, a.draw = function () {
						var e, t, a, o, r, l, n, s, d, m, v, C, x, T, w, A, S = this.components.data,
							y = this.getFromEnv("chart"),
							N = this.getFromEnv("toolTipController"),
							F = this.config,
							D = y.config,
							E = D.canvasLeft,
							L = D.canvasTop,
							M = D.canvasHeight,
							R = D.canvasWidth,
							_ = y.getChildContainer().plotGroup,
							V = this.getContainer("container"),
							O = this.getContainer("trackerContainer"),
							I = y.getChildContainer("trackerGroup"),
							P = S[0],
							G = P && P.config,
							B = D.gaugeoriginx,
							H = D.gaugeoriginy,
							W = D.gaugeradius,
							j = D.hasgaugeoriginx,
							z = D.hasgaugeoriginy,
							U = D.hasgaugeradius,
							X = this.getFromEnv("smartLabel"),
							K = this.getFromEnv("animationManager"),
							Y = this.getContainer("dataLabelContainer"),
							J = y.config.dataLabelStyle,
							Z = y.getChildContainer("datalabelsGroup");
						X.setStyle(J), V || (V = this.addContainer("container", k("bulb", _, this))), O || (O = this.addContainer("trackerContainer",
								k("bulb-hot", I, this))), Y || (Y = this.addContainer("dataLabelContainer", K.setAnimation({
								el: "group",
								attr: {
									name: "datalabel"
								},
								label: "labelGroup",
								component: this
							}))), Z && Z.appendChild(Y), A = P.trackerConfig = {}, e = G.setValue, a = G.toolText, A.eventArgs = {
								value: e,
								displayValue: G.displayValue,
								toolText: a || "",
								color: G.rawFillColor
							}, P.graphics || (P.graphics = {}), t = {
								cx: l = B = void 0 !== j ? B * F.scaleFactor : E + R / 2,
								cy: n = H = void 0 !== z ? H * F.scaleFactor : L + M / 2,
								r: s = void 0 !== U ? W * F.scaleFactor : f(R / 2, M / 2),
								"stroke-linecap": g,
								stroke: (0, i.toRaphaelColor)(G.gaugeBorderColor),
								"stroke-width": G.gaugeBorderThickness,
								fill: (0, i.toRaphaelColor)(G.fillColor)
							}, m = P.graphics.element, d = K.setAnimation({
								el: m || "circle",
								attr: t,
								container: V,
								component: this,
								animType: "easeOut",
								label: "circle"
							}), m || (P.graphics.element = d), A.attr = {
								cx: l,
								cy: n,
								r: s,
								cursor: G.setLink ? "pointer" : i.BLANK,
								stroke: b,
								"stroke-width": G.plotBorderThickness,
								fill: b,
								visibility: p
							}, x = (v = P.graphics).label, D.placevaluesinside ? (T = n, w = h) : (T = n + s + D.valuepadding, w = u), G.setValue !== c &&
							F.showValue && (o = (r = X.getSmartText(G.displayValue, D.width - D.chartleftmargin - D.chartrightmargin, +D.height - T - D.chartbottommargin))
								.tooltext || c, t = {
									text: r.text,
									"text-anchor": h,
									x: B,
									y: T,
									"vertical-align": w,
									fill: J.color,
									direction: G.textDirection,
									"text-bound": [J.backgroundColor, J.borderColor, J.borderThickness, J.borderPadding, J.borderRadius, J.borderDash]
								}, (C = K.setAnimation({
									el: x || "text",
									animType: "easeOut",
									attr: t,
									label: "text",
									container: Y,
									component: this
								})).outlineText(F.showTextOutline, t.fill), x || (v.label = C), D.showToolTip ? N.enableToolTip(C, o) : N.disableToolTip(C)),
							F.showValue ? v.label && v.label.show() : v.label && v.label.hide(), this.drawTracker()
					}, a.drawTracker = function () {
						var e, t, a, o, r, i, l, n, s = this,
							c = s.getFromEnv("chart"),
							u = s.getFromEnv("animationManager"),
							h = s.getFromEnv("toolTipController"),
							p = s.components.data,
							g = c.config.plothovereffect,
							f = s.getContainer("trackerContainer"),
							m = !1;
						t = (a = p[0]) && a.config, e = a.trackerConfig, o = a.graphics.element, l = e.attr, i = a.graphics.hotElement, l && (r = u.setAnimation({
								el: i || "circle",
								attr: l,
								container: f,
								component: s,
								label: "tracker"
							}), i || (a.graphics.hotElement = r, m = !0), (r || o).data("eventArgs", e.eventArgs).data(d, g).data("setRolloverAttr", t.rolloverProperties
								.hoverAttr || {}).data("setRolloutAttr", t.rolloverProperties.outAttr || {}), h.enableToolTip(r || o, e.eventArgs.toolText),
							(m || t.elemCreated) && (r || o).on("fc-click", (function (e) {
								c.plotEventHandler(this, e)
							})).hover((n = o, function (e) {
								var t = this.getData(),
									a = t.setRolloverAttr;
								0 !== t.showHoverEffect && !0 !== t.draged && (a.fill && (u.setAnimationState("mouseover"), u.setAnimation({
									el: n,
									attr: a,
									component: s
								})), c.plotEventHandler(this, e, "DataPlotRollOver"))
							}), function (e) {
								return function (t) {
									var a = this.getData(),
										o = a.setRolloutAttr;
									0 !== a.showHoverEffect && !0 !== a.draged && (o.fill && (u.setAnimationState("mouseout"), u.setAnimation({
										el: e,
										attr: o,
										component: s
									})), c.plotEventHandler(this, t, "DataPlotRollOut"))
								}
							}(o)))
					}, t
				}(l.ComponentInterface);
				t["default"] = C
			},
			1045: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				t["default"] = {
					"initial.dataset.bulb": function () {
						return {
							"circle.appearing": function (e) {
								return [{
									initialAttr: {
										cx: e.attr.cx,
										cy: e.attr.cy,
										r: 0
									},
									slot: "plot"
								}]
							},
							"tracker.appearing": null,
							"circle.updating": function (e) {
								return [{
									initialAttr: {
										cx: e.attr.cx,
										cy: e.attr.cy,
										r: e.attr.r
									},
									slot: "plot"
								}]
							},
							"labelGroup.appearing": function () {
								return [{
									initialAttr: {
										opacity: 0
									},
									finalAttr: {
										opacity: 1
									},
									slot: "final"
								}]
							},
							"*": null
						}
					}
				}
			},
			1046: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = function (e) {
					var t, a = e.getFromEnv("dataSource"),
						r = a.value,
						i = a.target,
						l = [],
						n = {};
					l.push({
						value: r,
						target: i
					}), n.data = l, t = e.getDSdef(), (0, o.datasetFactory)(e, t, "dataset", 1, [n])
				};
				var o = a(193)
			},
			1047: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1048))["default"];
				t["default"] = r
			},
			1048: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1049)),
					n = o(a(1055)),
					s = o(a(1046)),
					c = i.preDefStr.colors.FFFFFF,
					u = i.preDefStr.gaugeFillColorStr,
					h = i.preDefStr.gaugeBorderColorStr,
					d = function (e) {
						return null != e
					},
					p = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).defaultPaletteOptions = (0, i.extend2)((0, i.extend2)({}, i.defaultGaugePaletteOptions), {
									gaugeBorderColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
									gaugeFillColor: ["CCCCCC", "ADB68F", "E1F5FF", "FDB548", "FF7CA0"],
									periodColor: ["EEEEEE", "ECEEE6", "E6ECF0", "FFF4E6", "FFF2F5"]
								}, !1, !0), t.glasscolor = c, t.showRTvalue = !1, t.canvasPadding = !1, t.isHorizontal = !1, t.config.isAxisOpposite = !0, t.config
								.scalePosition = "right", t.config.canBeScalePosition = "left", t.hasCanvas = !0, t.drawPlotlines = !1, t.drawPlotBands = !1,
								t.isAxisReverse = !1, t.isRealTime = !0, t.registerFactory("dataset", s["default"], ["vCanvas"]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Cylinder"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "Cylinder"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.alignCaptionWithCanvas = 1, t.defaultDatasetType = "cylinder", t.hasLegend = !1, t.skipCanvasDrawing = !0
						}, a._parseSpecialConfig = function () {
							var e, t = this.config,
								a = this.getFromEnv("dataSource").chart,
								o = this.getFromEnv("number-formatter"),
								r = this.getFromEnv("color-manager");
							t.use3DLighting = (0, i.pluckNumber)(a.use3dlighting, 1), t.gaugeOriginX = (0, i.pluckNumber)(a.thmoriginx, a.cyloriginx, a.gaugeoriginx),
								t.gaugeOriginY = (0, i.pluckNumber)(a.thmoriginy, a.cyloriginy, a.gaugeoriginy), t.gaugeRadius = (0, i.pluckNumber)(o.getCleanValue(
									(0, i.pluckNumber)(a.thmbulbradius, a.cylradius, a.gaugeradius), !0)), t.gaugeHeight = (0, i.pluckNumber)(o.getCleanValue((0,
									i.pluckNumber)(a.thmheight, a.cylheight, a.gaugeheight), !0)), t.origW = (0, i.pluckNumber)(a.origw), t.origH = (0, i.pluckNumber)
								(a.origh), t.xDefined = d(t.gaugeOriginX), t.yDefined = d(t.gaugeOriginY), t.rDefined = d(t.gaugeRadius), t.hDefined = d(t.gaugeHeight),
								t.gaugeFillColor = (0, i.pluck)(a.gaugefillcolor, a.cylfillcolor, r.getColor(u)), t.gaugeFillAlpha = (0, i.pluckNumber)(a.gaugefillalpha,
									a.cylfillalpha, i.HUNDREDSTRING), t.gaugeYScale = (0, i.pluckNumber)(a.cylyscale, a.gaugeyscale, 30), (t.gaugeYScale > 50 ||
									t.gaugeYScale < 0) && (t.gaugeYScale = 30), t.gaugeYScale = t.gaugeYScale / 100, t.showGaugeBorder = (0, i.pluckNumber)(a.showgaugeborder,
									1), e = t.showGaugeBorder ? (0, i.pluckNumber)(a.gaugeborderalpha, 40) : 0, t.gaugeBorderColor = (0, i.convertColor)((0, i.pluck)
									(a.gaugebordercolor, r.getColor(h)), e), t.gaugeBorderThickness = (0, i.pluckNumber)(a.gaugeborderthickness, 1), t.gaugeContainerColor =
								(0, i.pluck)(a.cylglasscolor, (0, i.getLightColor)(t.gaugeFillColor, 30))
						}, a.getDSdef = function () {
							return n["default"]
						}, a._getData = function () {
							var e = this.getChildren("dataset");
							if (e && e[0]) return e[0].config.value
						}, t
					}(l["default"]);
				t["default"] = p
			},
			1049: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1050)),
					l = o(a(1051)),
					n = a(193),
					s = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).registerFactory("axis", l["default"]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "AxisGaugeBase"
						};
						var a = t.prototype;
						return a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this)
						}, a.allocatePosition = function () {
							var e = this.config,
								t = e.canvasWidth,
								a = e.canvasHeight;
							e.gaugeStartX = e.canvasLeft, e.gaugeEndX = e.canvasLeft + t, e.gaugeStartY = e.canvasTop, e.gaugeEndY = e.canvasTop + a, e.gaugeCenterX =
								e.canvasLeft + t / 2, e.gaugeCenterY = e.canvasTop + a / 2
						}, a._spaceManager = function () {
							var e, t, a, o, r = this.config,
								i = this.getChildren("dataset")[0],
								l = this.getChildren("scale")[0],
								s = this.config.is3D,
								c = this.getChildren("canvas")[0],
								u = this.getFromEnv("dataSource").chart,
								h = (0, n.pluckNumber)(u.showborder, s ? 0 : 1),
								d = this.isHorizontal,
								p = r.minChartWidth,
								g = r.minChartHeight,
								f = r.borderWidth = h ? (0, n.pluckNumber)(u.borderthickness, 1) : 0;
							r.canvasWidth - 2 * f < p && (a = (r.canvasWidth - p) / 2), r.canvasHeight - 2 * f < g && (o = (r.canvasHeight - g) / 2), this
								._allocateSpace({
									top: o || f,
									bottom: o || f,
									left: a || f,
									right: a || f
								}), e = .225 * r.availableHeight, t = this._manageActionBarSpace && this._manageActionBarSpace(e) || {}, this._allocateSpace(
									t), d ? this._allocateSpace(l.placeAxis(r.availableHeight)) : this._allocateSpace(l.placeAxis(r.availableWidth)), this._manageChartMenuBar(
									.4 * r.availableHeight), i._manageSpace && this._allocateSpace(i._manageSpace(r.availableHeight)), l.setAxisConfig({
									drawPlotlines: this.drawPlotlines,
									drawPlotBands: this.drawPlotBands
								}), c.setDimension({
									top: r.canvasTop,
									left: r.canvasLeft,
									width: r.canvasWidth,
									height: r.canvasHeight
								})
						}, t
					}(i["default"]);
				t["default"] = s
			},
			1050: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1041)),
					l = o(a(242)),
					n = o(a(262)),
					s = o(a(190)),
					c = a(193),
					u = o(a(306)),
					h = function (e) {
						function t() {
							var t;
							return t = e.call(this) || this, s["default"].addDep(l["default"]), s["default"].addDep(n["default"]), t.chartLeftMargin = 15,
								t.chartRightMargin = 15, t.chartTopMargin = 10, t.chartBottomMargin = 10, t.minChartHeight = 10, t.minCanvasWidth = 0, t
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a._feedAxesRawData = function () {
							var e, t, a = this.config,
								o = this.getFromEnv("color-manager"),
								r = this.getFromEnv("dataSource"),
								i = r.chart,
								l = c.chartPaletteStr.chart2D,
								n = (0, c.pluckNumber)(i.ticksbelowgauge),
								s = (0, c.pluckNumber)(i.ticksonright),
								h = (0, c.pluckNumber)((0, u["default"])(i.scaleposition, a.scalePosition) ? a.isAxisOpposite : (0, u["default"])(i.scaleposition,
									a.canBeScalePosition) ? !a.isAxisOpposite : void 0, void 0 !== n ? !n : void 0, void 0 !== s ? s : void 0, a.isAxisOpposite),
								d = (0, c.pluckNumber)(i.reverseaxis, this.isAxisReverse),
								p = (0, c.pluckNumber)(i.reversescale, 0),
								g = (0, c.pluckNumber)(i.showtickmarks, 1),
								f = this.getFromEnv("number-formatter"),
								m = (0, c.pluckNumber)(i.showtickvalues);
							return t = !(!m && void 0 !== m) && !(!g && void 0 === m), (e = {
								isVertical: !this.isHorizontal,
								isReverse: this.isHorizontal ? p : !d,
								isOpposit: h,
								outCanfontFamily: (0, c.pluck)(i.outcnvbasefont, i.basefont, "Verdana,sans"),
								outCanfontSize: (0, c.pluckFontSize)(i.outcnvbasefontsize, i.basefontsize, 10),
								outCancolor: (0, c.pluck)(i.outcnvbasefontcolor, i.basefontcolor, o.getColor(l.baseFontColor)).replace(/^#?([a-f0-9]+)/gi,
									"#$1"),
								useEllipsesWhenOverflow: i.useellipseswhenoverflow,
								divLineColor: (0, c.pluck)(i.vdivlinecolor, o.getColor(l.divLineColor)),
								divLineAlpha: (0, c.pluck)(i.vdivlinealpha, o.getColor("divLineAlpha")),
								divLineThickness: (0, c.pluckNumber)(i.vdivlinethickness, 1),
								divLineIsDashed: Boolean((0, c.pluckNumber)(i.vdivlinedashed, i.vdivlineisdashed, 0)),
								divLineDashLen: (0, c.pluckNumber)(i.vdivlinedashlen, 4),
								divLineDashGap: (0, c.pluckNumber)(i.vdivlinedashgap, 2),
								showAlternateGridColor: (0, c.pluckNumber)(i.showalternatevgridcolor, 0),
								alternateGridColor: (0, c.pluck)(i.alternatevgridcolor, o.getColor("altVGridColor")),
								alternateGridAlpha: (0, c.pluck)(i.alternatevgridalpha, o.getColor("altVGridAlpha")),
								numDivLines: i.numvdivlines,
								labelFont: i.labelfont,
								labelFontSize: i.labelfontsize,
								labelFontColor: i.labelfontcolor,
								labelAlpha: i.labelalpha,
								labelFontBold: i.labelfontbold,
								labelFontItalic: i.labelfontitalic,
								axisName: i.xaxisname,
								axisMinValue: f.getCleanValue(i.lowerlimit),
								axisMaxValue: f.getCleanValue(i.upperlimit),
								setAdaptiveMin: i.setadaptivemin,
								adjustDiv: i.adjusttm,
								labelDisplay: i.labeldisplay,
								showLabels: i.showlabels,
								rotateLabels: i.rotatelabels,
								slantLabel: (0, c.pluckNumber)(i.slantlabels, i.slantlabel),
								labelStep: (0, c.pluckNumber)(i.labelstep, i.xaxisvaluesstep),
								showAxisValues: (0, c.pluckNumber)(i.showxaxisvalues, i.showxaxisvalue),
								showDivLineValues: (0, c.pluckNumber)(i.showvdivlinevalues, i.showvdivlinevalues),
								showZeroPlane: i.showvzeroplane,
								zeroPlaneColor: i.vzeroplanecolor,
								zeroPlaneThickness: i.vzeroplanethickness,
								zeroPlaneAlpha: i.vzeroplanealpha,
								showZeroPlaneValue: i.showvzeroplanevalue,
								trendlineColor: i.trendlinecolor,
								trendlineToolText: i.trendlinetooltext,
								trendlineThickness: i.trendlinethickness,
								trendlineAlpha: i.trendlinealpha,
								showTrendlinesOnTop: i.showtrendlinesontop,
								showAxisLine: (0, c.pluckNumber)(i.showxaxisline, i.showaxislines, i.drawAxisLines, 0),
								axisLineThickness: (0, c.pluckNumber)(i.xaxislinethickness, i.axislinethickness, 1),
								axisLineAlpha: (0, c.pluckNumber)(i.xaxislinealpha, i.axislinealpha, 100),
								axisLineColor: (0, c.pluck)(i.xaxislinecolor, i.axislinecolor, "#000000"),
								majorTMNumber: i.majortmnumber,
								majorTMColor: i.majortmcolor,
								majorTMAlpha: i.majortmalpha,
								majorTMHeight: i.majortmheight,
								tickValueStep: i.tickvaluestep,
								showTickMarks: i.showtickmarks,
								connectTickMarks: i.connecttickmarks,
								showTickValues: i.showtickvalues,
								majorTMThickness: i.majortmthickness,
								reverseScale: i.reversescale,
								showLimits: i.showlimits || t,
								minorTMNumber: (0, c.pluckNumber)(i.minortmnumber, this.minorTMNumber, 4),
								minorTMColor: i.minortmcolor,
								minorTMAlpha: i.minortmalpha,
								minorTMHeight: (0, c.pluckNumber)(i.minortmheight, i.minortmwidth),
								minorTMThickness: i.minortmthickness,
								tickMarkDistance: (0, c.pluckNumber)(i.tickmarkdistance, i.tickmarkgap),
								tickValueDistance: (0, c.pluckNumber)(i.tickvaluedistance, i.displayvaluedistance),
								placeTicksInside: i.placeticksinside,
								placeValuesInside: i.placevaluesinside,
								upperLimitDisplay: i.upperlimitdisplay,
								lowerLimitDisplay: i.lowerlimitdisplay,
								drawTickMarkConnector: this.isHorizontal ? 1 : 0
							}).vtrendlines = r.trendpoints, [e]
						}, a._setAxisLimits = function () {
							var e, t = this.getFromEnv("dataSource").chart,
								a = this.getChildren("scale")[0];
							(e = this.getChildren("dataset")[0].getDataLimits()).max === -Infinity && (e.max = 0), e.min === Infinity && (e.min = 0), this
								.colorRange && a.setAxisConfig({
									axisMinValue: (0, c.pluckNumber)(t.lowerlimit, e.forceMin ? e.min : void 0),
									axisMaxValue: (0, c.pluckNumber)(t.upperlimit, e.forceMax ? e.max : void 0)
								}), a.setDataLimit(e.max, e.min)
						}, a._getDataJSON = function () {
							var e, t, a = 0,
								o = [],
								r = [],
								i = [],
								l = this.getChildren("dataset")[0].components.data;
							for (e = l && l.length ? l.length : 0; a < e; a += 1) t = l[a].config, o.push(t.itemValue), r.push(t.formatedVal || c.BLANK),
								i.push(t.toolText || c.BLANK);
							return {
								values: o,
								labels: r,
								toolTexts: i
							}
						}, a._postSpaceManagement = function () {
							var e = this.config,
								t = this.getChildren("canvas")[0],
								a = this.getChildren("scale")[0],
								o = this.isHorizontal,
								r = t.config;
							o ? a.setAxisDimention({
								axisLength: e.canvasWidth,
								y: r.canvasTop + (a.config.isOpposit ? 0 : r.canvasHeight),
								x: r.canvasLeft
							}) : a.setAxisDimention({
								axisLength: e.canvasHeight,
								x: r.canvasLeft + (a.config.isOpposit ? r.canvasWidth : 0),
								y: r.canvasTop
							}), this.allocateDimensionOfChartMenuBar()
						}, a._clearChart = function () {}, t
					}(i["default"]);
				t["default"] = h
			},
			1051: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = function (e) {
					var t = e.getChildren("canvas")[0];
					(0, i.componentFactory)(e, r["default"], "scale", 1, e._feedAxesRawData()), e.getChildren("scale")[0].setLinkedItem("canvas", t),
						e.addToEnv("scale", e.getChildren("scale")[0])
				};
				var r = o(a(1052)),
					i = a(193)
			},
			1052: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1053)),
					l = a(193),
					n = o(a(467)),
					s = a(201),
					c = o(a(1054)),
					u = o(a(439)),
					h = a(470);
				(0, s.addDep)({
					name: "gaugeAnimation",
					type: "animationRule",
					extension: c["default"]
				});
				var d = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this).config.scale = new u["default"], t.config.labelMap = [], t.config.prevIntervalArr = [], t.config
							.prevTicksMap = [], t
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getName = function () {
						return "gaugeAxis"
					}, a.getLabelPos = function (e, t) {
						var a = this.config,
							o = a.canvas,
							r = this.getFromEnv("chart").config,
							i = o.canvasTop || r.canvasTop,
							n = o.canvasBottom || r.canvasBottom,
							s = o.canvasLeft || r.canvasLeft,
							c = a.isVertical,
							u = (0, l.pluckNumber)(a.isOpposit),
							h = o.canvasRight || r.canvasRight,
							d = a.labelPadding,
							p = {
								x: 0,
								y: 0
							};
						return c ? (p.x = u ? h + d : s - d, p.y = this.getPixel(e, t)) : (p.x = this.getPixel(e, t), p.y = u ? i - d : n + d), p
					}, a._drawComponents = function () {
						var e = this.config;
						e.drawTick && this._drawTick(), e.drawLabels && this._drawLabel()
					}, a._drawTick = function () {
						var e, t, a, o, r, i, s, c, u, h, d, p, g, f, m, v, b, k, C = this,
							x = C.config,
							T = x.axisRange,
							w = x.isVertical,
							A = (0, l.pluckNumber)(x.isOpposit),
							S = x.drawTick,
							y = x.drawTickMinor,
							N = (0, l.pluckNumber)(x.placeTicksInside),
							F = C.getLinkedItem("canvas").getEffectiveDimensions(),
							D = F.top,
							E = D + F.height,
							L = F.left,
							M = L + F.width,
							R = T.max,
							_ = T.min,
							V = C.getFromEnv("animationManager"),
							O = x.ticks,
							I = O.length,
							P = x.axisAxisLineContainer,
							G = [],
							B = x.minorTicks,
							H = function (e, t, a) {
								var o = C.getPixel(e, {
									wrtVisible: !0
								});
								return w ? ["M", t, o, "L", a, o] : ["M", o, t, "L", o, a]
							};
						if (i = {
								stroke: x.majorTMColor,
								"stroke-width": x.majorTMThickness,
								"stroke-linecap": "round",
								opacity: 1
							}, s = {
								stroke: x.majorTMColor,
								"stroke-width": x.majorTMThickness,
								"stroke-linecap": "round"
							}, r = {
								stroke: x.minorTMColor,
								"stroke-width": x.minorTMThickness,
								"stroke-linecap": "round",
								opacity: 1
							}, x.lines.isDraw && S) {
							for (w ? A ? N ? (u = (c = M - x.tickMarkDistance) - x.majorTMHeight, h = c - x.minorTMHeight) : (u = (c = M + x.tickMarkDistance) +
									x.majorTMHeight, h = c + x.minorTMHeight) : N ? (u = (c = L + x.tickMarkDistance) + x.majorTMHeight, h = c + x.minorTMHeight) :
								(u = (c = L - x.tickMarkDistance) - x.majorTMHeight, h = c - x.minorTMHeight) : A ? N ? (u = (c = D + x.tickMarkDistance) +
									x.majorTMHeight, h = c + x.minorTMHeight) : (u = (c = D - x.tickMarkDistance) - x.majorTMHeight, h = c - x.minorTMHeight) :
								N ? (u = (c = E - x.tickMarkDistance) - x.majorTMHeight, h = c - x.minorTMHeight) : (u = (c = E + x.tickMarkDistance) + x.majorTMHeight,
									h = c + x.minorTMHeight), d = x.drawTickMarkConnector ? w ? ["M", c, C.getPixel(_), "L", c, C.getPixel(R)] : ["M", C.getPixel(
									_), c, "L", C.getPixel(R), c] : ["M0,0"], s.path = d, e = !!(a = C.getGraphicalElement("axisLinePath")), a = V.setAnimation({
									el: a || "path",
									attr: s,
									container: P,
									component: C,
									label: "path"
								}), G.push("axisLinePath"), e || C.addGraphicalElement("axisLinePath", a), p = 0; p < I; p += 1) t = H(f = O[p], c, u), i.path =
								t.toString(), G.push(f), e = !!(o = C.getGraphicalElement(f)), o = V.setAnimation({
									el: o || "path",
									data: {
										path: t.slice(),
										value: f
									},
									attr: i,
									container: P,
									component: C,
									label: "path"
								}), e || C.addGraphicalElement(f, o);
							if (y)
								for (g = 0; g < B.length; g += 1) t = H(m = B[g], c, h), r.path = t.toString(), G.push(m), e = !!(o = C.getGraphicalElement(
									m)), o = V.setAnimation({
									el: o || "path",
									data: {
										path: t.slice(),
										value: m
									},
									attr: r,
									component: C,
									container: P,
									label: "path"
								}), e || C.addGraphicalElement(m, o)
						}
						for (p = 0, k = (v = (0, n["default"])(x.prevTicksMap, G)).length; p < k; p++)(b = C.getGraphicalElement(v[p])) && C.removeGraphicalElement(
							b);
						x.prevTicksMap = G
					}, a.placeAxis = function (e) {
						var t, a, o, r, i, n, s, c, u, h, d, p, g, f, m, v, b, k, C = this.getFromEnv("chart"),
							x = e,
							T = this.getScale(),
							w = C.getFromEnv("smartLabel"),
							A = this.config,
							S = A.axisRange,
							y = A.isVertical,
							N = (0, l.pluckNumber)(A.isOpposit),
							F = A.labels.style,
							D = S.tickInterval,
							E = (0, l.pluckNumber)(A.placeTicksInside),
							L = (0, l.pluckNumber)(A.placeValuesInside),
							M = S.max,
							R = S.min,
							_ = 0,
							V = 0,
							O = "",
							I = A.labels.style.lineHeight,
							P = this.getFromEnv("number-formatter");
						if (y ? T.setRange([C.config.canvasTop, C.config.canvasBottom]) : T.setRange([C.config.canvasLeft, C.config.canvasRight]), o = {
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
							}, x <= 0) return o;
						if (A.labels.isDraw = !0, A.labels.drawNumericVal = !0, A.labels.drawNormalVal = A.showTickValues, A.labels.drawLimitVal = A.showLimits,
							A.lines.isDraw = !0, A.labels.step = A.tickValueStep, A.labelPadding = 0, w.useEllipsesOnOverflow(C.config.useEllipsesWhenOverflow),
							w.setStyle({
								fontSize: F.fontSize,
								fontFamily: F.fontFamily,
								lineHeight: F.lineHeight,
								fontWeight: F.fontWeight
							}), this.components || (this.components = {}, this.components.labels = []), A.drawTick && A.showTickMarks && A.lines.isDraw ?
							(x -= A.tickMarkDistance, V = Math.max(A.minorTMHeight, A.majorTMHeight), E ? (s = x + A.tickMarkDistance, L && (A.labelPadding =
								A.tickMarkDistance + V)) : V > x ? (A.lines.isDraw = !1, s = x + A.tickMarkDistance, s = x) : (y ? N ? o.right += V + A.tickMarkDistance :
								o.left += V + A.tickMarkDistance : N ? o.top += V + A.tickMarkDistance : o.bottom += V + A.tickMarkDistance, s = x - V, L ||
								(A.labelPadding = A.tickMarkDistance + V))) : (A.lines.isDraw = !1, s = x), s -= A.tickValueDistance, A.drawLabels && (A.showTickValues ||
								A.showLimits)) {
							for (p = Math.abs(this.getPixel(R) - this.getPixel(R + D)) / 2, A.labelPadding += A.tickValueDistance, s -= A.tickValueDistance,
								b = P.scale, i = R + D, n = 0; i < M; i += D) r = "" + b.call(P, (0, l.toPrecision)(i, 10)), h = w.getOriSize(r), this.components
								.labels[n] = {
									config: {
										width: h.width,
										height: h.height,
										props: {
											label: {
												attr: {
													text: r
												}
											}
										}
									}
								}, n++, r.length > _ && (O = r, _ = r.length);
							if (h = w.getOriSize(O), y ? h.width > s && (A.labels.drawNumericVal = !1, !A.upperLimitDisplay && !A.lowerLimitDisplay && (A
									.labels.isDraw = !1), O = "", h = w.getOriSize(O)) : h.height > s && (A.labels.drawNumericVal = !1, !A.upperLimitDisplay &&
									!A.lowerLimitDisplay && (A.labels.isDraw = !1), O = "", h = w.getOriSize(O)), c = y ? s : p, u = y ? p : s, A.showLimits ?
								(f = b.call(P, M), m = b.call(P, R), t = A.upperLimitDisplay || "" + f, a = A.lowerLimitDisplay || "" + m, (k = w.getOriSize(
									t)).width > h.width && (g = w.getSmartText(t, c, u), (t === f && g.text === g.oriText || A.labels.drawNumericVal) && (O =
									t, h = k)), w.getOriSize(a).width > h.width && (g = w.getSmartText(a, c, u), (a === m && g.text === g.oriText || A.labels.drawNumericVal) &&
									(O = a)), "" === O && (O = w.getOriSize(A.upperLimitDisplay).width > w.getOriSize(A.lowerLimitDisplay).width ? t : a, h =
									w.getOriSize(O))) : A.labels.drawLimitVal = !1, y) d = w.getSmartText(O, c, u);
							else
								for (i = R; i <= M && "" === (d = w.getSmartText(O, c, u)).text; i += D) c += p;
							d = w.getSmartText(O, c, u), A.labelMaxW = Math.max(d.width, h.width), A.labelMaxH = Math.max(d.height, h.height), !L && A.labels
								.isDraw ? y ? (A.labelMaxW = Math.min(A.labelMaxW, s), N ? o.right += A.labelMaxW + A.tickValueDistance : o.left += A.labelMaxW +
									A.tickValueDistance) : (A.labelMaxH = Math.min(A.labelMaxH, s), N ? o.top += A.labelMaxH + A.tickValueDistance : o.bottom +=
									A.labelMaxH + A.tickValueDistance) : A.labelPadding = -A.labelPadding, A.labels.drawLimitVal && (I && -1 !== I.indexOf("px") &&
									(I = parseFloat(I.replace("px", ""))), A.upperLimitDisplay ? h = w.getSmartText(A.upperLimitDisplay, A.labelMaxW, A.labelMaxH +
										I / 2) : (r = "" + b.call(P, (0, l.toPrecision)(M, 10)), h = w.getOriSize(r)), this.components.labels[n] = {
										config: {
											width: h.width,
											height: h.height,
											props: {
												label: {
													attr: {
														text: h.text
													}
												}
											}
										}
									}, A.lowerLimitDisplay ? h = w.getSmartText(A.lowerLimitDisplay, A.labelMaxW, A.labelMaxH + I / 2) : (r = "" + b.call(P, (0,
										l.toPrecision)(R, 10)), h = w.getOriSize(r)), v = {
										config: {
											width: h.width,
											height: h.height,
											props: {
												label: {
													attr: {
														text: h.text
													}
												}
											}
										}
									}, this.components.labels.unshift(v))
						} else A.labels.isDraw = !1;
						return A.spaceTaken = o, o
					}, a.hide = function () {
						var e = this.config;
						e.axisContainer && (e.axisLabelContainerTop.hide(), e.axisContainer.hide(), e.axisTrendLabelContainer.hide(), e.axisAxisLineContainer
							.hide())
					}, a.show = function () {
						var e = this.config;
						e.axisContainer && (e.axisLabelContainerTop.show(), e.axisContainer.show(), e.axisTrendLabelContainer.show(), e.axisAxisLineContainer
							.show())
					}, a._computeTranslation = function () {
						if (this) return 0
					}, t
				}(i["default"]);
				d.prototype.setAxisDimention = h.setAxisDimention, d.prototype.getPixel = h.getPixel, d.prototype._parseLabel = h._parseLabel, d.prototype
					._drawLabel = h._drawLabel;
				var p = d;
				t["default"] = p
			},
			1053: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(465)),
					l = a(193),
					n = a(470),
					s = o(a(462)),
					c = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.majorTMNumber = -1, t.adjustDiv = 1, t.majorTMHeight = 6, t.showTickMarks = 1, t.majorTMThickness = 1, t.minorTMNumber = 4,
								t.minorTMThickness = 1, t.tickMarkDistance = 3, t.placeTicksInside = 0, t.placeValuesInside = 0, t.forceZeroTick = !1
						}, a.configureAttributes = function (t) {
							var a, o = this.config,
								r = this.getFromEnv("color-manager");
							e.prototype.configureAttributes.call(this, t), a = o.rawAttr, o.majorTMColor = (0, l.convertColor)((0, l.pluck)(a.majorTMColor,
									r.getColor("tickColor")), (0, l.pluckNumber)(a.majorTMAlpha, 100)), o.tickValueStep = (0, l.pluckNumber)(a.tickValueStep, 1),
								o.tickValueStep = Math.round(o.tickValueStep), o.tickValueStep <= 0 && (o.tickValueStep = 1), o.connectTickMarks = o.showTickMarks ?
								(0, l.pluckNumber)(a.connectTickMarks, 1) : 0, o.showTickValues = (0, l.pluckNumber)(a.showTickValues, o.showTickMarks), o.reverseScale =
								1 === (0, l.pluckNumber)(a.reverseScale, 0), o.minorTMColor = (0, l.convertColor)((0, l.pluck)(a.minorTMColor, o.majorTMColor),
									(0, l.pluckNumber)(a.minorTMAlpha, o.majorTMAlpha, 100)), o.minorTMHeight = o.showTickMarks ? (0, l.pluckNumber)(a.minorTMHeight,
									Math.round(o.majorTMHeight / 2)) : 0, o.tickValueDistance = (0, l.pluckNumber)(a.tickValueDistance, 0) + 2, o.upperLimitDisplay =
								(0, l.parseUnsafeString)(a.upperLimitDisplay) || "", o.lowerLimitDisplay = (0, l.parseUnsafeString)(a.lowerLimitDisplay) ||
								"", o.drawTickMarkConnector = a.drawTickMarkConnector || 0, o.numDivLines = o.majorTMNumber >= 0 ? o.majorTMNumber : o.numDivLines +
								1
						}, a._createContainer = function () {
							var e, t, a, o, r = this.config,
								i = this.getLinkedParent().getChildContainer(),
								l = i.axisBottomGroup,
								n = i.axisTopGroup;
							o = this.createContainer("axisTrendGroupBottom", {
								name: "dataset-Trend-group-bottom"
							}, l), e = this.createContainer("axisLineGroup", {
								name: "axis-Line-group"
							}, n), t = this.createContainer("axisTrendGroupTop", {
								name: "dataset-Trend-group-top"
							}, n), a = this.createContainer("axisLabelGroupTop", {
								name: "dataset-Label-group"
							}, n), r.axisLabelContainerTop = r.axisContainer = this.createGroup("axisLabelContainerTop", {
								name: "dataset-top-label"
							}, a), r.axisAxisLineContainer = this.createGroup("axisAxisLineContainer", {
								name: "axis-line-tick"
							}, e), r.axisTrendContainerTop = this.createGroup("axisTrendContainerTop", {
								name: "dataset-axis-trend-top"
							}, t), r.axisTrendContainerBottom = this.createGroup("axisTrendContainerBottom", {
								name: "dataset-axis-trend-bottom"
							}, o), r.axisTrendLabelContainer = this.createGroup("axisTrendLabelContainer", {
								name: "dataset-axis-trend-label"
							}, t)
						}, a.allocatePosition = function () {
							this.config.drawLabels && this._parseLabel()
						}, a.setVisibleConfig = function (e, t) {
							var a, o = this.config,
								r = this.getScale();
							return !(e >= t || e < o.axisRange.min || t > o.axisRange.max) && (a = r.setDomain([e, t]).getDomain(), o.visibleMin = a[0], o
								.visibleMax = a[1], this.fireEvent("visiblerangeset", {
									minValue: e,
									maxValue: t
								}), this.asyncDraw(), !0)
						}, a._adjustNumberFormatter = function () {
							if (this) return 0
						}, a.calculateTicksOnLabelMode = function () {
							if (this) return 0
						}, a.generateMinorTicks = function () {
							var e = this.config;
							return this.getScale().minorTicks(e.minorTMNumber, e.ticks)
						}, a._setAxisRange = function (e) {
							var t = e.min,
								a = e.max,
								o = this.config,
								r = o.axisRange;
							t > a || ((0, s["default"])(t, a, this.getScale(), o), o.minorTicks = this.generateMinorTicks(), this.setVisibleConfig(r.min,
								r.max))
						}, t
					}(i["default"]);
				c.prototype.setDataLimit = n.setDataLimit, c.prototype.getTrendLineLimits = n.getTrendLineLimits;
				var u = c;
				t["default"] = u
			},
			1054: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				var o = a(466),
					r = {
						"initial.axis.gaugeAxis": {
							"text.appearing": o.appearingAxis,
							"path.appearing": o.appearingAxis
						},
						"update.axis.gaugeAxis": {
							"text.appearing": o.appearingFinal,
							"path.appearing": o.appearingFinal
						}
					};
				t["default"] = r
			},
			1055: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1056)),
					n = a(201),
					s = o(a(1057)),
					c = "A",
					u = Math,
					h = u.max,
					d = u.min,
					p = window,
					g = p.navigator.userAgent,
					f = /msie/i.test(g) && !p.opera,
					m = "Z",
					v = "rgba(192,192,192," + (f ? .002 : 1e-6) + ")",
					b = "M",
					k = "L",
					C = i.preDefStr.POSITION_TOP,
					x = i.preDefStr.POSITION_MIDDLE;
				(0, n.addDep)({
					name: "cylinderAnimation",
					type: "animationRule",
					extension: s["default"]
				});
				var T = function (e) {
					function t() {
						return e.apply(this, arguments) || this
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getType = function () {
						return "dataset"
					}, a.getName = function () {
						return "cylinder"
					}, a._manageSpace = function () {
						var e, t, a, o, r = this.config,
							l = this.getFromEnv("chart").config,
							n = l.width,
							s = l.height,
							c = l.canvasWidth,
							u = l.canvasHeight,
							p = l.canvasLeft,
							g = l.canvasTop,
							f = l.canvasRight,
							m = l.xDefined,
							v = l.yDefined,
							b = l.rDefined,
							k = l.hDefined,
							C = l.gaugeOriginX,
							x = l.gaugeOriginY,
							T = l.gaugeRadius,
							w = l.gaugeHeight,
							A = l.gaugeYScale,
							S = function (e, t, a, o) {
								var r = t,
									l = e;
								return r = (0, i.pluckNumber)(r, o), l = (0, i.pluckNumber)(l, a), r && l ? l / a == r / o ? a / l : Math.min(a / l, o / r) :
									1
							}(l.origW, l.origH, n, s),
							y = 0,
							N = 0,
							F = 0,
							D = 0;
						return u -= a = this._getLabelSpace(), N += a, b ? T *= S : T = h(d(c, 1.2 * u) / 2, 5), l.effectiveR = T, e = 2 * T, y += t =
							T * A, g += t, N += t, u -= 2 * t, m ? o = (C *= S) - T - p : (o = (f - p) / 2 - T) + e > c && (o = c - e), F += o, p += o, D +=
							(c -= o) - e, v && (x *= S), k ? (w *= S, v ? y += x - w - g : x = g + w) : v ? w = x - g : x = g + (w = u), N += g + u - x,
							r.gaugeOriginX = C, r.gaugeOriginY = x, r.gaugeRadius = T, r.gaugeHeight = w, r.gaugeYScale = A, {
								top: y,
								bottom: N + 8,
								left: F,
								right: D
							}
					}, a.draw = function () {
						var e, t, a, o, r, l, n, s, u, d, p, g, f, T, w, A = this,
							S = A.config,
							y = A.getFromEnv("smartLabel"),
							N = A.getFromEnv("chart"),
							F = A.getFromEnv("toolTipController"),
							D = N.getChildContainer("trackerGroup"),
							E = N.getChildContainer().plotGroup,
							L = A.getGraphicalElement("fluidTop"),
							M = A.getGraphicalElement("fluid"),
							R = A.getGraphicalElement("cylinterTop"),
							_ = A.getGraphicalElement("frontLight1"),
							V = A.getGraphicalElement("frontLight"),
							O = A.getGraphicalElement("front"),
							I = A.getGraphicalElement("back"),
							P = A.getGraphicalElement("btnBorderLight"),
							G = A.getGraphicalElement("btnBorder1"),
							B = A.getGraphicalElement("btnBorder"),
							H = A.getGraphicalElement("label"),
							W = N.getChildContainer("datalabelsGroup"),
							j = A.getContainer("dataLabelContainer"),
							z = A.getContainer("trackerContainer"),
							U = A.getGraphicalElement("hotElement"),
							X = A.getFromEnv("scale"),
							K = N.config,
							Y = K.canvasLeft,
							J = K.canvasTop,
							Z = K.canvasHeight,
							q = K.effectiveR || 40,
							$ = (0, i.pluckNumber)(S.value, X.getLimit().min),
							Q = X.getPixel($),
							ee = Y + q,
							te = J,
							ae = Z,
							oe = N.config.dataLabelStyle,
							re = S.gaugeFillColor,
							ie = (0, i.getDarkColor)(re, 70),
							le = (0, i.getLightColor)(re, 70),
							ne = (0, i.getDarkColor)(ie, 90),
							se = K.gaugeFillAlpha,
							ce = S.gaugeContainerColor,
							ue = (0, i.getDarkColor)(ce, 80),
							he = (0, i.getDarkColor)(ce, 90),
							de = (0, i.getLightColor)(ce, 80),
							pe = K.gaugeYScale,
							ge = A.getContainer("container"),
							fe = A.getFromEnv("animationManager"),
							me = Math.abs(K.width - K.canvasRight - Y),
							ve = q * pe,
							be = q - 1.5,
							ke = S.cylBase = te + ae,
							Ce = Q,
							xe = ee - q,
							Te = ee + q,
							we = xe + 1.5,
							Ae = Te - 1.5,
							Se = xe - 2,
							ye = Te + 2,
							Ne = q + 2,
							Fe = ve + 2,
							De = ke + 4,
							Ee = De + .001,
							Le = .85 * q,
							Me = ee - Le,
							Re = ee + Le,
							_e = Math.sqrt((1 - Le * Le / (q * q)) * ve * ve),
							Ve = te + _e,
							Oe = ke + _e,
							Ie = te - 1,
							Pe = K.use3DLighting,
							Ge = S.showHoverEffect,
							Be = S.plotFillHoverAlpha,
							He = S.plotFillHoverColor,
							We = S.fluidAttr,
							je = (0, i.convertColor)(ue, 50),
							ze = {
								"stroke-width": 4
							},
							Ue = {
								"stroke-width": 4
							},
							Xe = {
								"stroke-width": 0
							},
							Ke = {
								"stroke-width": 1
							},
							Ye = {
								"stroke-width": 2
							},
							Je = {
								"stroke-width": 1
							},
							Ze = {
								"stroke-width": 0
							},
							qe = {
								"stroke-width": 0
							},
							$e = {
								"stroke-width": 2
							},
							Qe = {
								stroke: v,
								fill: v
							},
							et = {};
						We || (We = S.fluidAttr = {}), We["stroke-width"] = 0, u = {
								value: S.value,
								displayValue: S.displayValue,
								toolText: S.toolText,
								cylOriginX: S.gaugeOriginX,
								cylOriginY: S.gaugeOriginY,
								cylRadius: S.gaugeRadius,
								cylHeight: S.gaugeHeight,
								cylYScale: S.gaugeYScale,
								cylFillColor: S.gaugeFillColor,
								cylGlassColor: S.gaugeContainerColor
							}, Pe ? (g = de + i.COMMASTRING + ue + i.COMMASTRING + de + i.COMMASTRING + ue + i.COMMASTRING + he + i.COMMASTRING + he + i.COMMASTRING +
								ue + i.COMMASTRING + de, T = (0, i.toRaphaelColor)({
									FCcolor: {
										cx: .5,
										cy: 0,
										r: "100%",
										color: le + i.COMMASTRING + ie,
										alpha: se + i.COMMASTRING + se,
										ratio: "0,100",
										radialGradient: !0
									}
								}), o = (0, i.toRaphaelColor)({
									FCcolor: {
										cx: .5,
										cy: .7,
										r: "100%",
										color: le + i.COMMASTRING + ie,
										alpha: se + i.COMMASTRING + se,
										ratio: "0,100",
										radialGradient: !0
									}
								}), r = (0, i.convertColor)(le, se), f = de + i.COMMASTRING + ue + i.COMMASTRING + de + i.COMMASTRING + de + i.COMMASTRING +
								ue + i.COMMASTRING + de + i.COMMASTRING + ue + i.COMMASTRING + de, Ze.path = [b, xe, ke, c, q, ve, 1, 0, 0, Me, Oe, k, Me,
									Ve, c, q, ve, 0, 0, 1, xe, te, m
								], Ze.fill = (0, i.toRaphaelColor)({
									FCcolor: {
										color: f,
										alpha: "40,0",
										ratio: "0,100",
										angle: 0
									}
								}), qe.path = [b, Re, Oe, c, q, ve, 0, 0, 0, Te, ke, k, Te, te, c, q, ve, 1, 0, 0, Re, Ve, m], qe.fill = (0, i.toRaphaelColor)
								({
									FCcolor: {
										color: f,
										alpha: "40,0",
										ratio: "0,100",
										angle: 180
									}
								})) : (g = de + i.COMMASTRING + ue + i.COMMASTRING + ue + i.COMMASTRING + ue + i.COMMASTRING + ue + i.COMMASTRING + ue + i.COMMASTRING +
								ue + i.COMMASTRING + de, o = T = (0, i.convertColor)(ie, se), r = (0, i.convertColor)(ne), f = ue + i.COMMASTRING + ue + i.COMMASTRING +
								ue + i.COMMASTRING + ue + i.COMMASTRING + ue + i.COMMASTRING + ue + i.COMMASTRING + ue + i.COMMASTRING + ue), We.bodyOut = {
								fill: T
							}, We.topOut = {
								stroke: r,
								fill: o
							}, Ge && (l = (0, i.getDarkColor)(He, 70), n = (0, i.getLightColor)(He, 70), s = (0, i.getDarkColor)(l, 90), Pe ? (We.bodyHover = {
								fill: (0, i.toRaphaelColor)({
									FCcolor: {
										cx: .5,
										cy: 0,
										r: "100%",
										color: n + i.COMMASTRING + l,
										alpha: Be + i.COMMASTRING + Be,
										ratio: "0,100",
										radialGradient: !0
									}
								})
							}, We.topHover = {
								stroke: (0, i.convertColor)(n, Be),
								fill: (0, i.toRaphaelColor)({
									FCcolor: {
										cx: .5,
										cy: .7,
										r: "100%",
										color: n + i.COMMASTRING + l,
										alpha: Be + i.COMMASTRING + Be,
										ratio: "0,100",
										radialGradient: !0
									}
								})
							}) : (We.bodyHover = {
								fill: (0, i.convertColor)(l, Be)
							}, We.topHover = {
								stroke: (0, i.convertColor)(s),
								fill: (0, i.convertColor)(l, Be)
							})), We.fill = T, We.path = [b, xe, ke, c, q, h(ve, 1), 0, 0, 0, Te, ke, k, Te, Ce, c, q, h(ve, 1), 0, 0, 1, xe, Ce, m], Ye.fill =
							o, Ye.stroke = r, Ye.path = [b, we, Ce, c, be, ve, 0, 0, 0, Ae, Ce, k, Ae, Ce, c, be, ve, 0, 0, 0, we, Ce, m], ze.stroke = (0,
								i.convertColor)(ue, 80), ze.path = [b, Se, De, c, Ne, Fe, 0, 0, 0, ye, De, k, ye, Ee, c, Ne, Fe, 0, 0, 0, Se, Ee, m], Ue.stroke =
							je, Ue.path = [b, xe, De, c, q, ve, 0, 0, 0, Te, De, k, Te, Ee, c, q, ve, 0, 0, 0, xe, Ee, m], Xe.path = [b, xe, ke, c, q, ve,
								0, 0, 0, Te, ke, c, q, ve, 0, 0, 0, xe, ke, m
							], Xe.fill = (0, i.toRaphaelColor)({
								FCcolor: {
									color: de + i.COMMASTRING + ue + i.COMMASTRING + de + i.COMMASTRING + de + i.COMMASTRING + ue + i.COMMASTRING + ie + i.COMMASTRING +
										ue + i.COMMASTRING + de,
									alpha: "50,50,50,50,50,70,50,50",
									ratio: "0,15,0,12,0,15,43,15",
									angle: 0
								}
							}), Ke.path = [b, xe, ke, c, q, ve, 0, 0, 0, Te, ke, k, Te, te, c, q, ve, 0, 0, 0, xe, te, m], Ke.stroke = je, Ke.fill = (0,
								i.toRaphaelColor)({
								FCcolor: {
									color: g,
									alpha: "30,30,30,30,30,30,30,30",
									ratio: "0,15,43,15,0,12,0,15",
									angle: 0
								}
							}), Je.path = [b, xe, ke, c, q, ve, 0, 0, 0, Te, ke, k, Te, te, c, q, ve, 0, 0, 1, xe, te, m], Je.stroke = je, Je.fill = (0,
								i.toRaphaelColor)({
								FCcolor: {
									color: f,
									alpha: "30,30,30,30,30,30,30,30",
									ratio: "0,15,0,12,0,15,43,15",
									angle: 0
								}
							}), $e.stroke = (0, i.convertColor)(ue, 40), $e.path = [b, xe, Ie, c, q, ve, 0, 0, 0, Te, Ie, k, Te, Ie, c, q, ve, 0, 0, 0,
								xe, Ie, m
							], Qe.path = [b, xe, ke, xe, De + 4, c, q, ve, 0, 0, 0, Te, De + 4, k, Te, ke, Te, te, c, q, ve, 0, 0, 0, xe, te, m], et.opacity =
							S.showValue ? 1 : 0, y.setStyle(oe), a = ke + ve + (S.valuePadding || 0) + 8, d = (p = y.getSmartText(S.displayValue, K.width -
								K.marginLeft - K.marginRight - me / 2, +K.height - a - K.marginBottom)).tooltext || i.BLANKSTRING, w = {
								text: p.text,
								x: ee,
								y: a,
								"text-anchor": x,
								"vertical-align": C,
								fill: oe.color,
								"text-bound": [oe.backgroundColor, oe.borderColor, oe.borderThickness, oe.borderPadding, oe.borderRadius, oe.borderDash]
							}, t = fe.setAnimation({
								el: ge || "group",
								attr: {
									name: "cylinder"
								},
								container: E,
								component: A,
								label: "group"
							}), B = fe.setAnimation({
								el: B || "path",
								attr: ze,
								container: t,
								component: A,
								label: "path"
							}), G = fe.setAnimation({
								el: G || "path",
								attr: Ue,
								container: t,
								component: A,
								label: "path"
							}), P = fe.setAnimation({
								el: P || "path",
								attr: Xe,
								container: t,
								component: A,
								label: "path"
							}), I = fe.setAnimation({
								el: I || "path",
								attr: Ke,
								container: t,
								component: A,
								label: "path"
							}), M = fe.setAnimation({
								el: M || "path",
								attr: We,
								container: t,
								component: A,
								label: "plotFluid"
							}), L = fe.setAnimation({
								el: L || "path",
								attr: Ye,
								container: t,
								component: A,
								label: "plotFluidTop"
							}), O = fe.setAnimation({
								el: O || "path",
								attr: Je,
								container: t,
								component: A,
								label: "path"
							}), V = fe.setAnimation({
								el: V || "path",
								attr: Ze,
								container: t,
								component: A,
								label: "path"
							}), _ = fe.setAnimation({
								el: _ || "path",
								attr: qe,
								container: t,
								component: A,
								label: "path"
							}), R = fe.setAnimation({
								el: R || "path",
								attr: $e,
								container: t,
								component: A,
								label: "path"
							}), z = fe.setAnimation({
								el: z || "group",
								attr: {
									name: "tracker-group"
								},
								container: D,
								component: A,
								label: "group"
							}), e = fe.setAnimation({
								el: j || "group",
								attr: et,
								container: W,
								component: A,
								label: "labelGroup"
							}), H = fe.setAnimation({
								el: H || "text",
								attr: w,
								container: e,
								component: A,
								label: "text"
							}), U = fe.setAnimation({
								el: U || "path",
								attr: Qe,
								container: z,
								component: A,
								label: "path"
							}), S.showTooltip ? F.enableToolTip(H, d) : F.disableToolTip(H), ge || (U.on("fc-click", (function (e) {
								N.plotEventHandler(this, e)
							})).hover((function (e) {
								S.showHoverEffect && (A.getGraphicalElement("fluid") && A.getGraphicalElement("fluid").attr(We.bodyHover), A.getGraphicalElement(
									"fluidTop") && A.getGraphicalElement("fluidTop").attr(We.topHover)), N.plotEventHandler(this, e, "DataPlotRollOver")
							}), (function (e) {
								S.showHoverEffect && (A.getGraphicalElement("fluid") && A.getGraphicalElement("fluid").attr(We.bodyOut), A.getGraphicalElement(
									"fluidTop") && A.getGraphicalElement("fluidTop").attr(We.topOut)), N.plotEventHandler(this, e, "DataPlotRollOut")
							})), A.addContainer("container", t), A.addGraphicalElement("btnBorder", B), A.addGraphicalElement("btnBorder1", G), A.addGraphicalElement(
								"btnBorderLight", P), A.addGraphicalElement("back", I), A.addGraphicalElement("fluid", M), A.addGraphicalElement("fluidTop",
								L), A.addGraphicalElement("front", O), A.addGraphicalElement("frontLight", V), A.addGraphicalElement("frontLight1", _), A.addGraphicalElement(
								"cylinterTop", R), A.addContainer("trackerContainer", z), A.addGraphicalElement("hotElement", U)), j || (A.addContainer(
								"dataLabelContainer", e), A.addGraphicalElement("label", H)), U.data("eventArgs", u), S.toolText ? F.enableToolTip(U, S.toolText) :
							F.disableToolTip(U)
					}, t
				}(l["default"]);
				t["default"] = T
			},
			1056: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = a(208),
					n = i.BLANK,
					s = i.preDefStr.gaugeFillColorStr,
					c = i.preDefStr.gaugeBorderColorStr,
					u = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a.getType = function () {
							return "dataset"
						}, a.getName = function () {
							return "cylinderThermometerBase"
						}, a.setValue = function (e, t) {
							if (e) {
								var a, o = this.config,
									r = this.getFromEnv("chart").getFromEnv("dataSource").chart,
									l = this.getFromEnv("number-formatter"),
									s = e.value,
									c = e.tooltext || r.plottooltext;
								o.value = s = l.getCleanValue(s), null !== s ? (a = o.formattedValue = l.dataLabels(o.value), o.showValue ? o.displayValue =
									e.label || (0, i.getValidValue)(a, i.BLANK) : o.displayValue = n, o.showTooltip ? o.toolText = void 0 !== c ? (0, i.parseUnsafeString)
									((0, i.parseTooltext)((0, i.pluck)(e.tooltext, c), [1, 2], {
										formattedValue: a,
										value: s
									}, e, r), !1) : (0, i.parseUnsafeString)((0, i.parseTooltext)((0, i.pluck)(e.tooltext, null === a ? n : a)), !1) : o.toolText =
									n) : (o.displayValue = n, o.toolText = n, o.formattedValue = null), t && this.draw()
							}
						}, a.configure = function (e) {
							if (!e) return !1;
							this.setValue(e && e.data && e.data[0]);
							var t, a, o, r, l = this.getFromEnv("chart"),
								n = l.getFromEnv("dataSource"),
								u = n.chart,
								h = this.config || (this.config = {}),
								d = this.getFromEnv("color-manager"),
								p = l.config,
								g = (0, i.pluckNumber)(u.showhovereffect);
							h.showValue = (0, i.pluckNumber)(u.showvalue, u.showvalues, 1), h.showTooltip = (0, i.pluckNumber)(u.showtooltip, 1), h.valuePadding =
								(0, i.pluckNumber)(u.valuepadding, 2), h.tooltipSepChar = (0, i.pluck)(u.tooltipsepchar, i.COMMASTRING), h.pointerOnOpp = (0,
									i.pluckNumber)(u.pointerontop, 0), h.axisPosition = (0, i.pluckNumber)(u.ticksbelowgauge, u.ticksbelowgraph, this.ticksbelowgauge,
									1) ? 3 : 1, h.valueAbovePointer = (0, i.pluckNumber)(u.valueabovepointer, 1), h.labelStyle = p.dataLabelStyle, r = h.gaugeFillColor =
								(0, i.pluck)(u.gaugefillcolor, u.thmfillcolor, u.cylfillcolor, d.getColor(s)), o = h.gaugeFillAlpha = (0, i.pluckNumber)(u.gaugefillalpha,
									u.cylfillalpha, u.thmfillalpha, i.HUNDREDSTRING), h.showGaugeBorder = (0, i.pluckNumber)(u.showgaugeborder, 1), t = h.showGaugeBorder ?
								(0, i.pluckNumber)(u.gaugeborderalpha, 40) : 0, h.rawGaugeBorderColor = (0, i.pluck)(u.gaugebordercolor, d.getColor(c)), h.gaugeBorderAlpha =
								t, h.gaugeBorderColor = (0, i.convertColor)(h.rawGaugeBorderColor, t), h.gaugeBorderThickness = (0, i.pluckNumber)(u.gaugeborderthickness,
									1), h.gaugeContainerColor = (0, i.pluck)(u.thmglasscolor, u.cylglasscolor, l.glasscolor, (0, i.getLightColor)(r, 30)), 0 !==
								g && (g || u.plotfillhovercolor || u.plotfillhoveralpha || 0 === u.plotfillhoveralpha) && (h.showHoverEffect = !0, a = (0, i.pluck)
									(u.plotfillhovercolor, u.cylfillhovercolor, u.thmfillhovercolor, "{dark-10}"), h.plotFillHoverAlpha = (0, i.pluckNumber)(u.plotfillhoveralpha,
										u.cylfillhoveralpha, u.thmfillhoveralpha, o), h.plotFillHoverColor = /\{/.test(a) ? d.parseColorMix(r, a)[0] : a), this.setValue(
									n), l._parseSpecialConfig && l._parseSpecialConfig()
						}, a._getLabelSpace = function () {
							var e, t = this.config,
								a = this.getFromEnv("chart"),
								o = this.getFromEnv("smartLabel");
							return o.useEllipsesOnOverflow(a.config.useEllipsesWhenOverflow), o.setStyle(t.labelStyle), (e = o.getOriSize(t.displayValue !==
								i.BLANK ? t.displayValue : "dummy")).height ? e.height + t.valuePadding : 0
						}, a.getDataLimits = function () {
							var e, t, a = this.config;
							return t = e = a.value, a.maxValue = t, a.minValue = e, {
								forceMin: !0,
								forceMax: !0,
								max: t,
								min: e
							}
						}, a.updateData = function () {
							var e = this,
								t = arguments[0],
								a = arguments[2],
								o = e.config,
								r = o.maxValue,
								i = o.prevMin,
								l = o.value,
								n = e.getFromEnv("chart"),
								s = e.groupManager || e,
								c = e.getFromEnv("scale");
							e.setValue(t.data[0]), o.maxValue = l, o.minValue = l, o.maxValue === r && o.minValue === i || (e.config.maxminFlag = !0), a &&
								(n._setAxisLimits(), c.draw(), s.draw())
						}, a.setJSONIndex = function (e) {
							this.config.index = e
						}, a.getJSONIndex = function () {
							return this.config.index || 0
						}, t
					}(l.ComponentInterface);
				t["default"] = u
			},
			1057: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				var o = a(193),
					r = [{
						initialAttr: function () {
							return {
								opacity: 0
							}
						},
						finalAttr: function () {
							return {
								opacity: 1
							}
						}
					}],
					i = {
						"initial.dataset.cylinder": function () {
							var e = this.config;
							return {
								"plotFluid.appearing": function (e) {
									var t = e.attr.path.slice(0);
									return t[13] = t[21] = t[2], [{
										initialAttr: {
											opacity: 0
										},
										finalAttr: {
											opacity: 1
										},
										slot: "initial"
									}, {
										initialAttr: {
											path: t
										},
										finalAttr: {
											opacity: 1
										},
										slot: "middle"
									}]
								},
								"plotFluid.updating": null,
								"plotFluidTop.appearing": function (t) {
									var a = t.attr.path.slice(0);
									return a[2] = a[10] = a[13] = a[21] = e.cylBase, [{
										initialAttr: {
											opacity: 0
										},
										finalAttr: {
											opacity: 1
										},
										slot: "initial"
									}, {
										initialAttr: {
											path: a
										},
										finalAttr: {
											opacity: 1
										},
										slot: "middle"
									}]
								},
								"plotFluidTop.updating": null,
								"text.appearing": function () {
									return r[0].slot = o.FINALSTR, r
								},
								"text.updating": null,
								"labelGroup.appearing": function () {
									return r[0].slot = o.FINALSTR, r
								},
								"labelGroup.updating": null,
								"path.appearing": function () {
									return r[0].slot = o.INITIALSTR, r
								},
								"path.updating": null
							}
						}
					};
				t["default"] = i
			},
			1058: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1059))["default"];
				t["default"] = r
			},
			1059: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = a(1060),
					n = o(a(1008)),
					s = o(a(1050)),
					c = o(a(1061)),
					u = o(a(1064)),
					h = Math,
					d = h.min,
					p = h.PI / 180,
					g = function (e) {
						return null != e
					},
					f = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).isHorizontal = !0, t.isAxisOpposite = !1, t.isRealTime = !0, t.drawPlotlines = !1, t.drawPlotBands = !
								1, t.isAxisReverse = !1, t.colorRange = !0, t.defaultPaletteOptions = (0, i.extend2)((0, i.extend2)({}, i.defaultGaugePaletteOptions), {
									dialColor: ["999999,ffffff,999999", "ADB68F,F3F5DD,ADB68F", "A2C4C8,EDFBFE,A2C4C8", "FDB548,FFF5E8,FDB548",
										"FF7CA0,FFD1DD,FF7CA0"
									],
									dialBorderColor: ["999999", "ADB68F", "A2C4C8", "FDB548", "FF7CA0"],
									pivotColor: ["999999,ffffff,999999", "ADB68F,F3F5DD,ADB68F", "A2C4C8,EDFBFE,A2C4C8", "FDB548,FFF5E8,FDB548",
										"FF7CA0,FFD1DD,FF7CA0"
									],
									pivotBorderColor: ["999999", "ADB68F", "A2C4C8", "FDB548", "FF7CA0"]
								}, !1, !0), t.rtParserModify = !0, t._setCategories = function () {}, t.registerFactory("dataset", u["default"], ["axis"]), t.registerFactory(
									"axis", c["default"], ["canvas"]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "AngularGauge"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "AngularGauge"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Angular Gauge", t.hasLegend = !1, t.defaultDatasetType = "angulargauge", t.animationeffect = "easeOut", t.skipCanvasDrawing = !
								0
						}, a.configureAttributes = function (t) {
							e.prototype.configureAttributes.call(this, t);
							var a = this.getFromEnv("dataSource").colorrange;
							a && a.color && a.color.length ? ((0, i.componentFactory)(this, n["default"], "colorRange", 1, [{
								colorRange: a,
								numberFormatter: this.getFromEnv("number-formatter")
							}]), this.addToEnv("colorRange", this.getChildren("colorRange")[0])) : this.deleteFromEnv("colorRange")
						}, a._spaceManager = function () {
							var e, a, o, r, l, n, s, c, u, h, d, p = this.config,
								g = this.getChildren("dataset")[0],
								f = this.getFromEnv("scale"),
								m = f.config,
								v = g.components.data[0],
								b = this.getFromEnv("dataSource").chart,
								k = g.config,
								C = k.scaleFactor,
								x = 0,
								T = 0,
								w = k.pivotRadius,
								A = p.dataLabels.style.lineHeight,
								S = p.displayValueCount,
								y = p.borderWidth,
								N = p.minChartWidth,
								F = p.minChartHeight,
								D = 0;
							p.canvasWidth - 2 * y < N && (d = (p.canvasWidth - N) / 2), p.canvasHeight - 2 * y < F && (h = (p.canvasHeight - F) / 2), this
								._allocateSpace({
									top: h || y,
									bottom: h || y,
									left: d || y,
									right: d || y
								}), p.autoScale ? p.scaleFactor = C = t._getScaleFactor(k.origW, k.origH, p.width, p.height) : p.scaleFactor = C = 1, A = A.replace(
									/px/i, ""), s = /^\d+\%$/.test(k.gaugeinnerradius) ? parseInt(k.gaugeinnerradius, 10) / 100 : .7, c = w = (0, i.pluckNumber)
								((0, i.getValidValue)(b.pivotradius) * C, 5), k.pivotRadius = c, w = Math.max(w, k.rearExtension * C), v && v.config && v.config
								.rearextension && (w = Math.max(w, v.config.rearextension * C)), k.compositPivotRadius = w, x = S * A + 2 + c, k.valueBelowPivot ||
								(T = x, x = 0), k.gaugeOuterRadius = (0, i.pluckNumber)(Math.abs((0, i.getValidValue)(b.gaugeouterradius) * C)), k.gaugeInnerRadius =
								(0, i.pluckNumber)(Math.abs((0, i.getValidValue)(b.gaugeinnerradius) * C), k.gaugeOuterRadius * s), e = .7 * p.canvasWidth, p
								.canvasHeight, u = f.placeAxis(e), a = .7 * p.canvasHeight, this._manageChartMenuBar(a), o = (n = t._angularGaugeSpaceManager(
									k.gaugeStartAngle, k.gaugeEndAngle, p.canvasWidth, p.canvasHeight, k.gaugeOuterRadius, (0, i.pluckNumber)((0, i.getValidValue)
										(b.gaugeoriginx) * C - p.canvasLeft), (0, i.pluckNumber)((0, i.getValidValue)(b.gaugeoriginy) * C - p.canvasTop), w + m.polarPadding,
									x, T)).radius = (0, i.pluckNumber)(n.radius, n.maxRadius), k.gaugeOriginX = n.centerX + p.canvasLeft, k.gaugeOriginY = n.centerY +
								p.canvasTop, r = n.centerX, l = n.centerY, D = u.left < u.top ? r - u.left >= o - u.left && l - u.top >= o - u.left ? u.left :
								u.top : r - u.left >= o - u.top && l - u.top >= o - u.top ? u.top : u.left, D += 2 * f.config.polarPadding, !k.gaugeOuterRadius &&
								(k.gaugeOuterRadius = n.radius - D), void 0 === k.gaugeInnerRadius && (k.gaugeInnerRadius = k.gaugeOuterRadius * s), f.setAxisConfig({
									centerX: k.gaugeOriginX,
									centerY: k.gaugeOriginY,
									radius: n.radius || k.gaugeOuterRadius,
									gaugeOuterRadius: k.gaugeOuterRadius,
									gaugeInnerRadius: k.gaugeInnerRadius,
									scaleFactor: C
								})
						}, a.allocatePosition = function () {
							var e = this.config,
								t = this.getChildren("dataset")[0].config;
							e.gaugeStartX = e.canvasLeft, e.gaugeStartY = e.canvasTop, e.gaugeEndX = e.canvasRight, e.gaugeEndY = e.canvasBottom, e.gaugeCenterX =
								t.gaugeOriginX, e.gaugeCenterY = t.gaugeOriginY, e.gaugeStartAngle = t.gaugeStartAngle / p, e.gaugeEndAngle = t.gaugeEndAngle /
								p
						}, a._feedAxesRawData = function () {
							var e, t = this.getFromEnv("color-manager"),
								a = this.getFromEnv("dataSource"),
								o = a.chart,
								r = this.getFromEnv("number-formatter"),
								l = i.chartPaletteStr.chart2D,
								n = (0, i.pluckNumber)(o.axisontop, o.axisonleft, void 0 !== o.ticksbelowgauge ? !o.ticksbelowgauge : void 0, this.isAxisOpposite),
								s = (0, i.pluckNumber)(o.reverseaxis, this.isAxisReverse);
							return (e = {
								isVertical: !this.isHorizontal,
								isReverse: s,
								isOpposit: n,
								outCanfontFamily: (0, i.pluck)(o.outcnvbasefont, o.basefont, "Verdana,sans"),
								outCanfontSize: (0, i.pluckFontSize)(o.outcnvbasefontsize, o.basefontsize, 10),
								outCancolor: (0, i.pluck)(o.outcnvbasefontcolor, o.basefontcolor, t.getColor(l.baseFontColor)).replace(/^#?([a-f0-9]+)/gi,
									"#$1"),
								useEllipsesWhenOverflow: o.useellipseswhenoverflow,
								divLineColor: (0, i.pluck)(o.vdivlinecolor, t.getColor(l.divLineColor)),
								divLineAlpha: (0, i.pluck)(o.vdivlinealpha, t.getColor("divLineAlpha")),
								divLineThickness: (0, i.pluckNumber)(o.vdivlinethickness, 1),
								divLineIsDashed: Boolean((0, i.pluckNumber)(o.vdivlinedashed, o.vdivlineisdashed, 0)),
								divLineDashLen: (0, i.pluckNumber)(o.vdivlinedashlen, 4),
								divLineDashGap: (0, i.pluckNumber)(o.vdivlinedashgap, 2),
								showAlternateGridColor: (0, i.pluckNumber)(o.showalternatevgridcolor, 0),
								alternateGridColor: (0, i.pluck)(o.alternatevgridcolor, t.getColor("altVGridColor")),
								alternateGridAlpha: (0, i.pluck)(o.alternatevgridalpha, t.getColor("altVGridAlpha")),
								numDivLines: o.numvdivlines,
								labelFont: o.labelfont,
								labelFontSize: o.labelfontsize,
								labelFontColor: o.labelfontcolor,
								labelAlpha: o.labelalpha,
								labelFontBold: o.labelfontbold,
								labelFontItalic: o.labelfontitalic,
								axisName: o.xaxisname,
								axisMinValue: r.getCleanValue(o.lowerlimit),
								axisMaxValue: r.getCleanValue(o.upperlimit),
								setAdaptiveMin: o.setadaptivemin,
								adjustDiv: o.adjusttm,
								labelDisplay: o.labeldisplay,
								showLabels: o.showlabels,
								rotateLabels: o.rotatelabels,
								slantLabel: (0, i.pluckNumber)(o.slantlabels, o.slantlabel),
								labelStep: (0, i.pluckNumber)(o.labelstep, o.xaxisvaluesstep),
								showAxisValues: (0, i.pluckNumber)(o.showxaxisvalues, o.showxaxisvalue),
								showDivLineValues: (0, i.pluckNumber)(o.showvdivlinevalues, o.showvdivlinevalues),
								showZeroPlane: o.showvzeroplane,
								zeroPlaneColor: o.vzeroplanecolor,
								zeroPlaneThickness: o.vzeroplanethickness,
								zeroPlaneAlpha: o.vzeroplanealpha,
								showZeroPlaneValue: o.showvzeroplanevalue,
								trendlineColor: o.trendlinecolor,
								trendlineToolText: o.trendlinetooltext,
								trendlineThickness: o.trendlinethickness,
								trendlineAlpha: o.trendlinealpha,
								showTrendlinesOnTop: o.showtrendlinesontop,
								showAxisLine: (0, i.pluckNumber)(o.showxaxisline, o.showaxislines, o.drawAxisLines, 0),
								axisLineThickness: (0, i.pluckNumber)(o.xaxislinethickness, o.axislinethickness, 1),
								axisLineAlpha: (0, i.pluckNumber)(o.xaxislinealpha, o.axislinealpha, 100),
								axisLineColor: (0, i.pluck)(o.xaxislinecolor, o.axislinecolor, "#000000"),
								majorTMNumber: o.majortmnumber,
								majorTMColor: o.majortmcolor,
								majorTMAlpha: o.majortmalpha,
								majorTMHeight: o.majortmheight,
								tickValueStep: o.tickvaluestep,
								showTickMarks: o.showtickmarks,
								connectTickMarks: o.connecttickmarks,
								showTickValues: o.showtickvalues,
								majorTMThickness: o.majortmthickness,
								reverseScale: o.reversescale,
								showLimits: o.showlimits,
								minorTMNumber: o.minortmnumber,
								minorTMColor: o.minortmcolor,
								minorTMAlpha: o.minortmalpha,
								minorTMHeight: (0, i.pluckNumber)(o.minortmheight, o.minortmwidth),
								minorTMThickness: o.minortmthickness,
								tickMarkDistance: (0, i.pluckNumber)(o.tickmarkdistance, o.tickmarkgap),
								tickValueDistance: (0, i.pluckNumber)(o.tickvaluedistance, o.displayvaluedistance),
								placeTicksInside: o.placeticksinside,
								placeValuesInside: o.placevaluesinside,
								upperLimitDisplay: o.upperlimitdisplay,
								lowerLimitDisplay: o.lowerlimitdisplay,
								ticksBelowGauge: o.ticksbelowgauge,
								ticksBelowGraph: o.ticksbelowgraph,
								trendValueDistance: o.trendvaluedistance
							}).trendPoints = a.trendpoints, [e]
						}, t._angularGaugeSpaceManager = function (e, t, a, o, r, i, l, n, s, c) {
							void 0 === n && (n = 0);
							var u, h, p, f, m, v, b, k, C, x, T, w, A, S, y = g(r),
								N = i,
								F = l,
								D = g(N),
								E = g(F),
								L = 2 * Math.PI,
								M = Math.PI,
								R = Math.PI / 2,
								_ = M + R,
								V = {
									radius: r,
									centerX: N,
									centerY: F
								},
								O = s,
								I = c,
								P = !1,
								G = e % L;
							return G < 0 && (G += L), n && n < a / 2 && n < o / 2 && (P = !0), O > o / 2 && (O = o / 2), I > o / 2 && (I = o / 2), v =
								Math.cos(e), b = Math.sin(e), k = Math.cos(t), C = Math.sin(t), h = d(v, k, 0), f = Math.max(v, k, 0), p = d(b, C, 0), m =
								Math.max(b, C, 0), y && D && E || (((T = G + (S = t - e)) > L || T < 0) && (f = 1), S > 0 ? ((G < R && T > R || T > L + R) &&
									(m = 1), (G < M && T > M || T > L + M) && (h = -1), (G < _ && T > _ || T > L + _) && (p = -1)) : ((G > R && T < R || T < -_) &&
									(m = 1), (G > M && T < M || T < -M) && (h = -1), (G > _ && T < _ || T < -R) && (p = -1)), D ? y || (w = a - N, A = -N, u =
									h ? d(w / f, A / h) : w / f) : (N = -(x = a / (f - h)) * h, u = x, P && (a - N < n ? (w = a - (N = a - n), A = -N, u = h ?
									d(w / f, A / h) : w / f) : N < n && (w = a - (N = n), A = -N, u = h ? d(w / f, A / h) : w / f)), V.centerX = N), E ? y || (
									w = o - F, A = -F, u = d(u, p ? d(w / m, A / p) : w / m)) : (F = -(x = o / (m - p)) * p, P && (o - F < n ? (w = o - (F = o -
									n), A = -F, u = d(u, p ? d(w / m, A / p) : w / m)) : F < n && (w = o - (F = n), A = -F, u = d(u, p ? d(w / m, A / p) : w /
									m))), o - F < O ? (w = o - (F = o - O), A = -F, u = d(u, p ? d(w / m, A / p) : w / m)) : F < I && (w = o - (F = I), A = -F,
									u = d(u, p ? d(w / m, A / p) : w / m)), u = d(u, x), V.centerY = F), V.maxRadius = u, V.maxRadius <= 0 && (V.maxRadius = d(
									a / 2, o / 2))), V
						}, t._getScaleFactor = function (e, t, a, o) {
							var r = (0, i.pluckNumber)(t, o),
								l = (0, i.pluckNumber)(e, a);
							return r && l ? l / a == r / o ? a / l : d(a / l, o / r) : 1
						}, a._getData = function (e, t) {
							return l._getData.call(this, e, t)
						}, a._setData = function (e, t) {
							l._setData.call(this, e, t)
						}, a._getDataForId = function (e, t) {
							return l._getDataForId.call(this, e, t)
						}, a._setDataForId = function (e, t) {
							l._setDataForId.call(this, e, t)
						}, t
					}(s["default"]);
				t["default"] = f
			},
			1060: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t._getData = function (e, t) {
					var a, i, l = this.getChildren().dataset,
						n = e,
						s = function () {
							return (i = l[0].components.data) && i[--n] ? (a = i[n].config, (0, o.pluckNumber)(a.setValue, a.itemValue)) : null
						};
					if (l) {
						if ("function" != typeof t) return s();
						this.addJob("eiMethods", (function () {
							t(s())
						}), r.priorityList.postRender)
					}
				}, t._setData = function (e, t) {
					var a, r = "value=";
					if (e === o.UNDEF || null === e || t === o.UNDEF || null === t) return;
					for (a = 1; a < Number(e); a++) r += o.COMMASTRING;
					t.toString && (r += t.toString());
					r && this.feedData(r)
				}, t._getDataForId = function (e, t) {
					var a = this.getChildren("dataset")[0].config.idMap;
					if ("function" != typeof t) return a && a[e] && a[e].config.itemValue || null;
					this.addJob("eiMethods", (function () {
						t(a && a[e] && a[e].config.itemValue || null)
					}), r.priorityList.postRender)
				}, t._setDataForId = function (e, t) {
					var a = this.getChildren("dataset")[0].config.idMap;
					return a && a[e] && this._setData(a[e].index + 1, t)
				};
				var o = a(193),
					r = a(205)
			},
			1061: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = function (e) {
					(0, i.componentFactory)(e, r["default"], "scale", 1, e._feedAxesRawData()), e.addToEnv("scale", e.getChildren("scale")[0])
				};
				var r = o(a(1062)),
					i = a(193)
			},
			1062: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1053)),
					l = a(193),
					n = a(1016),
					s = o(a(467)),
					c = a(201),
					u = o(a(1063)),
					h = o(a(439)),
					d = l.preDefStr.POSITION_MIDDLE,
					p = l.preDefStr.POSITION_START,
					g = l.preDefStr.POSITION_TOP,
					f = l.preDefStr.POSITION_BOTTOM,
					m = l.preDefStr.POSITION_END,
					v = Math,
					b = 2 * v.PI,
					k = "_tick";
				(0, c.addDep)({
					name: "polarNumericAnimation",
					type: "animationRule",
					extension: u["default"]
				});
				var C = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this).config.scale = new h["default"], t.config.prevTickMarks = [], t.config.prevIntervalArrLabel = [],
							t.config.prevIntervalArrTrendLine = [], t
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getName = function () {
						return "polarNumeric"
					}, a.setAxisDimention = function () {
						var e, t = this.getScale(),
							a = this.config,
							o = a.startAngle || b / 2,
							r = o + (a.totalAngle || b / 2),
							i = a.axisDimention || (a.axisDimention = {});
						i.centerX = a.centerX, i.centerY = a.centerY, i.axisLength = b, e = [o, r], t.setRange(e)
					}, a.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.trendPoints = void 0, t.ticksBelowGauge = void 0, t.ticksBelowGraph = void 0, t.trendValueDistance = void 0
					}, a.configureAttributes = function (t) {
						var a, o = this.config;
						e.prototype.configureAttributes.call(this, t), a = o.rawAttr, o.upperLimitDisplay = a.upperLimitDisplay || "", o.lowerLimitDisplay =
							a.lowerLimitDisplay || "", o.polarPadding = 4
					}, a._drawComponents = function () {
						var e = this.config;
						e.drawTick && this._drawTick(), e.drawLabels && this._drawLabel(), e.drawTrendLines && this._drawTrendLine()
					}, a.getAngle = function (e) {
						return this.getScale().getRangeValue(e)
					}, a.placeAxis = function (e) {
						var t, a, o, r, i, n, s, c, u, h = this.config,
							d = this.getFromEnv("chart"),
							p = d.getFromEnv("smartLabel"),
							g = h.axisRange,
							f = h.labels.style,
							m = g.tickInterval || 1,
							v = h.upperLimitDisplay,
							b = h.lowerLimitDisplay,
							k = g.max,
							C = g.min,
							x = 0,
							T = d.getFromEnv("number-formatter");
						if (c = {
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
							}, p.useEllipsesOnOverflow(d.config.useEllipsesWhenOverflow), p.setStyle({
								fontSize: f.fontSize,
								fontFamily: f.fontFamily,
								lineHeight: f.lineHeight,
								fontWeight: f.fontWeight
							}), this.components || (this.components = {}, this.components.labels = []), h.labels.isDraw = 1, h.labels.drawNormalVal = 1,
							h.labels.drawLimitVal = 1, h.lines.isDraw = 1, h.labels.step = h.tickValueStep, h.labelPadding = 0, u = e, h.drawLabels && h.showTickValues &&
							u > 0) {
							for (h.labelPadding += h.tickValueDistance, u -= h.tickValueDistance, i = T.scale, a = C, o = 0; a <= k; a += m) r = "" + i.call(
								T, (0, l.toPrecision)(a, 10)), s = p.getOriSize(r, !0), this.components.labels[o] = {
								config: {
									width: s.width,
									height: s.height,
									props: {
										label: {
											attr: {}
										}
									}
								}
							}, o++, r.length > x && (t = r, x = r.length);
							if ((s = p.getOriSize(t, !0)).width > e / 2) return h.labels.isDraw = !1, c;
							h.showLimits ? (v || b) && ((n = p.getOriSize(v, !0)).width > s.width && (t = v, x = n.width, s = n), (n = p.getOriSize(b, !0))
									.width > s.width && (t = b, x = n.width, s = n)) : h.labels.drawLimitVal = !1, s = p.getOriSize(t), h.labelMaxW = s.width,
								h.labelMaxW > e / 2 && (h.labelMaxW = e / 2), h.labelMaxH = s.height, h.placeValuesInside ? h.labelPadding = -h.labelPadding :
								(c.right += h.labelMaxW + h.tickValueDistance, c.left += h.labelMaxW + h.tickValueDistance, c.top += h.labelMaxH + h.tickValueDistance,
									c.bottom += h.labelMaxH + h.tickValueDistance)
						} else h.labels.isDraw = !1;
						return c
					}, a._parseLabel = function () {
						var e, t, a, o, r, i, s, c, u, h, v, b, k, C = this.config,
							x = this.getFromEnv("chart"),
							T = C.axisRange,
							w = this.getScale(),
							A = x.getFromEnv("smartLabel"),
							S = C.labels.style,
							y = C.labelPadding || 0,
							N = C.radius,
							F = (0, l.pluckNumber)(C.gaugeOuterRadius, N),
							D = (0, l.pluckNumber)(C.gaugeInnerRadius, N),
							E = C.centerX,
							L = C.centerY,
							M = C.placeValuesInside,
							R = C.labelMaxH,
							_ = C.labelMaxW,
							V = T.max,
							O = T.min,
							I = C.ticks,
							P = I.length,
							G = x.getFromEnv("number-formatter");
						if (S.lineHeight && -1 !== (h = S.lineHeight).indexOf("px") && (h = h.replace("px", ""), h = parseFloat(h)), A.useEllipsesOnOverflow(
								x.config.useEllipsesWhenOverflow), A.setStyle({
								fontSize: S.fontSize,
								fontFamily: S.fontFamily,
								lineHeight: S.lineHeight,
								fontWeight: S.fontWeight
							}), C.labels.isDraw) {
							for (e = this.components.labels, c = C.labels.step, u = function (a) {
									o = I[a], i = w.getRangeValue(o), (C.labels.drawNormalVal || C.labels.drawLimitVal && (o === O || o === V)) && (C.labels.drawNormalVal ||
										o === O || o === V) && (C.labels.drawLimitVal || o !== O && o !== V) && (0 === C.showZeroPlaneValue && 0 === C.showZeroPlane &&
										0 === o || (v = G.scale, o === O && C.lowerLimitDisplay ? (r = A.getSmartText(C.lowerLimitDisplay, _, R), s = r.text) : o ===
											V && C.upperLimitDisplay ? (r = A.getSmartText(C.upperLimitDisplay, _, R), s = r.text) : s = v.call(G, (0, l.toPrecision)
												(o, 10)), (k = M ? (0, n.polarToCartesian)(D + y - C.polarPadding, i) : (0, n.polarToCartesian)(F + y + C.polarPadding,
												i)).x += E, k.y += L, b = {
												fill: S.color,
												"line-height": h,
												text: s,
												x: k.x,
												y: k.y
											}, k.x > E - 10 && k.x < E + 10 && k.y < L ? (b["text-anchor"] = d, b["text-valign"] = M ? g : f) : k.x > E - 10 && k.x <
											E + 10 && k.y < L ? (b["text-anchor"] = d, b["text-valign"] = M ? f : g) : k.x < E ? (b["text-anchor"] = M ? p : m, b[
												"text-valign"] = "center") : (b["text-anchor"] = M ? m : p, b["text-valign"] = "center"), (t = e[a] = e[a] || {
												config: {
													props: {
														label: {
															attr: {}
														}
													}
												}
											}).config.props.label.attr = Object.assign(t.config.props.label.attr, b)))
								}, a = 0; a < P; a += c) u(a);
							(P - 1) % c != 0 && u(P - 1)
						}
					}, a._drawLabel = function () {
						var e, t, a, o, r, i, l, n, c, u, h = this,
							d = h.config,
							p = h.getFromEnv("chart"),
							g = d.axisRange,
							f = d.labels.style,
							m = g.max,
							v = g.min,
							b = d.axisLabelContainerTop,
							k = p.getFromEnv("animationManager"),
							C = {
								fontFamily: f.fontFamily,
								fontSize: f.fontSize,
								fontWeight: f.fontWeight,
								fontStyle: f.fontStyle,
								lineHeight: f.lineHeight
							},
							x = d.ticks,
							T = x.length,
							w = [];
						if (b.show(), b.css(C), d.labels.isDraw) {
							for (l = d.labels.step, n = function (e) {
									t = x[e], (d.labels.drawNormalVal || d.labels.drawLimitVal && (t === v || t === m)) && (d.labels.drawNormalVal || t === v ||
										t === m) && (d.labels.drawLimitVal || t !== v && t !== m) && (0 === d.showZeroPlaneValue && 0 === d.showZeroPlane && 0 ===
										t || (w.push(t), u = h.getGraphicalElement(t + "_label"), o = h.components.labels[e].config.props.label.attr, a = k.setAnimation({
											el: u || "text",
											attr: o,
											container: b,
											component: h,
											label: "text"
										}), u || h.addGraphicalElement(t + "_label", a)))
								}, e = 0; e < T; e += l) n(e);
							(T - 1) % l != 0 && n(T - 1)
						}
						for (i = (0, s["default"])(d.prevIntervalArrLabel, w), t = 0, r = i.length; t < r; t++)(c = h.getGraphicalElement(i[t] +
							"_label")) && h.removeGraphicalElement(c);
						d.prevIntervalArrLabel = w
					}, a._drawTick = function () {
						var e, t, a, o, r, i, c, u, h, d, p, g, f, m, v, b, C, x, T, w = this.config,
							A = w.drawTick,
							S = this.getScale(),
							y = w.drawTickMinor,
							N = this.getFromEnv("chart").getFromEnv("animationManager"),
							F = w.radius,
							D = w.centerX,
							E = w.centerY,
							L = (0, l.pluckNumber)(w.gaugeOuterRadius, F),
							M = (0, l.pluckNumber)(w.gaugeInnerRadius, F),
							R = w.ticks,
							_ = w.minorTicks;
						if (p = w.axisAxisLineContainer, r = {
								stroke: w.majorTMColor,
								"stroke-width": w.majorTMThickness,
								"stroke-linecap": "round"
							}, o = {
								stroke: w.minorTMColor,
								"stroke-width": w.minorTMThickness,
								"stroke-linecap": "round"
							}, p.show(), b = w.prevTickMarks, w.prevTickMarks = [], w.lines.isDraw && A && w.showTickMarks) {
							for (w.prevTickMarks = R.slice(), h = 0; h < R.length; h++) m = R[h], e = S.getRangeValue(m), w.placeTicksInside ? (i = (0, n
									.polarToCartesian)(M, e), c = (0, n.polarToCartesian)(M + w.majorTMHeight, e)) : (i = (0, n.polarToCartesian)(L, e), c = (0,
									n.polarToCartesian)(L - w.majorTMHeight, e)), i.x += D, i.y += E, c.x += D, c.y += E, r.path = "M" + i.x + " " + i.y + "L" +
								c.x + " " + c.y, f = Object.assign({}, r), v = this.getGraphicalElement("" + R[h] + k), a = N.setAnimation({
									el: v || "path",
									attr: f,
									container: p,
									component: this,
									label: "path"
								}), v || this.addGraphicalElement("" + R[h] + k, a);
							if (y)
								for (w.prevTickMarks = w.prevTickMarks.concat(_), h = 0; h < _.length; h += 1) d = _[h], t = S.getRangeValue(d), w.placeTicksInside ?
									(i = (0, n.polarToCartesian)(M, t), u = (0, n.polarToCartesian)(M + w.minorTMHeight, t)) : (i = (0, n.polarToCartesian)(L,
										t), u = (0, n.polarToCartesian)(L - w.minorTMHeight, t)), i.x += D, i.y += E, u.x += D, u.y += E, o.path = "M" + i.x + " " +
									i.y + "L" + u.x + " " + u.y, f = Object.assign({}, o), C = this.getGraphicalElement("" + _[h] + k), a = N.setAnimation({
										el: C || "path",
										attr: f,
										container: p,
										component: this,
										label: "path"
									}), C || this.addGraphicalElement("" + _[h] + k, a)
						}
						for (h = 0, T = (g = (0, s["default"])(b, w.prevTickMarks)).length; h < T; h++)(x = this.getGraphicalElement("" + g[h] + k)) &&
							this.removeGraphicalElement(x)
					}, a._drawTrendLine = function () {
						var e, t, a, o, r, i, c, u, h, f, b, k, C, x, T, w, A, S, y, N, F, D, E, L, M, R, _, V, O, I, P, G, B, H, W, j, z, U, X, K =
							this.config,
							Y = K.axisRange,
							J = this.getFromEnv("toolTipController"),
							Z = Y.max,
							q = this.getScale(),
							$ = Y.min,
							Q = K.canvas,
							ee = this.getFromEnv("chart"),
							te = ee.config,
							ae = ee.getFromEnv("smartLabel"),
							oe = ee.getFromEnv("color-manager"),
							re = ee.getFromEnv("animationManager"),
							ie = K.scaleFactor,
							le = K.centerX || 0,
							ne = K.centerY || 0,
							se = Q.canvasWidth || te.canvasWidth,
							ce = K.trend.trendStyle,
							ue = K.axisTrendContainerTop,
							he = K.axisTrendContainerBottom,
							de = K.axisTrendLabelContainer,
							pe = {
								fontFamily: ce.fontFamily,
								fontSize: ce.fontSize,
								lineHeight: ce.lineHeight,
								fontWeight: ce.fontWeight,
								fontStyle: ce.fontStyle
							},
							ge = ee.getFromEnv("number-formatter"),
							fe = K.trendPoints,
							me = fe && fe.point,
							ve = v.PI / 180,
							be = {},
							ke = me && me.length,
							Ce = {},
							xe = {},
							Te = {},
							we = [];
						for (ae.useEllipsesOnOverflow(te.useEllipsesWhenOverflow), ae.setStyle(pe), t = 0; t < ke; t += 1) u = fe.point[t], we.push(u.startvalue +
							"_" + u.endvalue + "_" + t);
						for (t = 0, X = (W = (0, s["default"])(K.prevIntervalArrTrendLine, we)).length; t < X; t++) j = this.getGraphicalElement(W[t] +
								"_trendLine"), z = this.getGraphicalElement(W[t] + "_trendLabel"), U = this.getGraphicalElement(W[t] + "_marker"), j && this
							.removeGraphicalElement(j), z && this.removeGraphicalElement(z), U && this.removeGraphicalElement(U);
						for (K.prevIntervalArrTrendLine = we.slice(), t = 0; t < ke; t += 1) H = (u = fe.point[t]).startvalue + "_" + u.endvalue + "_" +
							t, h = (0, l.pluckNumber)(u.startvalue, u.value), f = (0, l.pluckNumber)(u.endvalue, h), e = q.getRangeValue(h), c = h !== f,
							h <= Z && h >= $ && f <= Z && f >= $ && (b = {
									startValue: h,
									endValue: f,
									tooltext: (0, l.getValidValue)((0, l.parseUnsafeString)(u.markertooltext, !1)),
									displayValue: (0, l.getValidValue)((0, l.parseUnsafeString)(u.displayvalue), c ? "" : ge.scale(h)),
									showOnTop: (0, l.pluckNumber)(u.showontop, K.ticksBelowGauge, K.ticksBelowGraph, 1),
									color: (0, l.pluck)(u.color, oe.getColor("trendLightColor")),
									alpha: (0, l.pluckNumber)(u.alpha, 99),
									thickness: (0, l.pluckNumber)(u.thickness, 1),
									dashStyle: u.dashed ? (0, l.getDashStyle)(u.dashlen || 2, u.dashgap || 2) : "",
									useMarker: (0, l.pluckNumber)(u.usemarker, 0),
									markerColor: (0, l.convertColor)((0, l.pluck)(u.markercolor, u.color, oe.getColor("trendLightColor")), 100),
									markerBorderColor: (0, l.convertColor)((0, l.pluck)(u.markerbordercolor, u.bordercolor, oe.getColor("trendDarkColor")), 100),
									markerRadius: (0, l.pluckNumber)((0, l.pluckNumber)(u.markerradius) * ie, 5),
									markerToolText: (0, l.getFirstValue)(u.markertooltext),
									trendValueDistance: (0, l.pluckNumber)((0, l.pluckNumber)(u.trendvaluedistance, K.trendValueDistance) * ie, K.tickValueDistance),
									isTrendZone: c,
									valueInside: (0, l.pluckNumber)(u.valueinside, K.placeValuesInside, 0),
									showBorder: (0, l.pluckNumber)(u.showborder, 1),
									borderColor: (0, l.convertColor)((0, l.pluck)(u.bordercolor, u.color, oe.getColor("trendDarkColor")), (0, l.pluckNumber)(u.borderalpha,
										u.alpha, 100)),
									radius: (0, l.pluckNumber)((0, l.pluckNumber)(u.radius) * ie),
									innerRadius: (0, l.pluckNumber)((0, l.pluckNumber)(u.innerradius) * ie)
								}, 3, C = -(k = Math.cos(89.99 * ve)), x = (0, l.pluckNumber)(b.radius, K.gaugeOuterRadius), T = (0, l.pluckNumber)(b.innerRadius,
									c ? Math.max(K.gaugeInnerRadius - 15, 0) : K.gaugeInnerRadius), w = (0, n.polarToCartesian)(x, e), A = (0, n.polarToCartesian)
								(T, e), w.x += le, w.y += ne, A.x += le, A.y += ne, S = w.x, y = w.y, N = A.x, F = A.y, D = this.getAngle(f), E = this.getAngle(
									h), c ? (E > D && (E += D, E -= D = E - D), Ce = {
									fill: (0, l.convertColor)(b.color, b.alpha),
									"stroke-width": b.showBorder ? b.thickness : 0,
									stroke: b.borderColor,
									"stroke-dasharray": b.dashStyle,
									ringpath: [le, ne, x, T, E, D]
								}) : Ce = {
									"stroke-width": b.showBorder ? b.thickness : 0,
									stroke: b.borderColor,
									"stroke-linecap": "round",
									"stroke-dasharray": b.dashStyle,
									path: ["M", S, y, "L", N, F]
								}, xe = b.useMarker ? {
									fill: b.markerColor,
									"stroke-width": 1,
									stroke: b.markerBorderColor,
									polypath: [3, S, y, b.markerRadius, (-E + Math.PI) / ve, 0]
								} : {}, "" !== b.displayValue ? (L = (b.endValue + b.startValue) / 2, D = this.getAngle(L), M = Math.cos(D), R = Math.sin(D),
									_ = ae.getOriSize(b.displayValue).width, b.valueInside ? (V = T - 2 - b.trendValueDistance, O = M > k ? m : M < C ? p : d) :
									(V = x + 2 + b.trendValueDistance, O = M > k ? p : M < C ? m : d), S = le + V * M, y = ne + V * R, I = ae.getOriSize(b.displayValue)
									.height, be = ae.getSmartText(b.displayValue, se, I), S = se < S + _ ? se - _ - 5 : S < _ ? _ + 5 : S, _ > se && (S = se /
										2), Te = {
										fill: (0, l.convertColor)(u.color, b.alpha) || ce.color,
										text: be.text,
										"text-anchor": O,
										"vertical-align": g,
										"text-bound": [ce.backgroundColor, ce.borderColor, ce.borderThickness, ce.borderPadding, ce.borderRadius, ce.borderDash],
										x: S,
										y: y
									}, P = be.height, y += M > k || M < C ? -P / 2 + .4 * P * R * (b.valueInside ? -1 : 1) : b.valueInside ? -(R < 0 ? 0 : P) :
									-(R > 0 ? 0 : P), Te.y = y) : Te = {
									text: ""
								}, o = this.getGraphicalElement(H + "_trendLine"), r = this.getGraphicalElement(H + "_trendLabel"), B = this.getGraphicalElement(
									H + "_marker"), (a = c ? re.setAnimation({
									el: o || "ringpath",
									attr: Ce,
									container: he,
									component: this,
									label: "ringpath"
								}) : re.setAnimation({
									el: o || "path",
									attr: Ce,
									container: ue,
									component: this,
									label: "path"
								})).show(), a.data("label", c ? "ringPath" : "path"), (i = re.setAnimation({
									el: r || "text",
									attr: Te,
									container: de,
									component: this,
									label: "text"
								})).css(pe), i.show(), (G = re.setAnimation({
									el: B || "polypath",
									attr: xe,
									container: ue,
									component: this,
									label: "polypath"
								})).show(), K.showTooltip && (be.oriText ? J.enableToolTip(i, be.oriText) : J.disableToolTip(i), b.markerToolText ? J.enableToolTip(
									G, b.markerToolText) : J.disableToolTip(G)), o || this.addGraphicalElement(H + "_trendLine", a), o || this.addGraphicalElement(
									H + "_trendLabel", i), B || this.addGraphicalElement(H + "_marker", G))
					}, t
				}(i["default"]);
				t["default"] = C
			},
			1063: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1020)),
					i = {
						"initial.axis.polarNumeric": function () {
							return {
								"path.appearing": r["default"],
								"text.appearing": r["default"],
								"polypath.appearing": r["default"],
								"ringpath.appearing": r["default"],
								"*": null
							}
						}
					};
				t["default"] = i
			},
			1064: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = function (e) {
					var t = e.getFromEnv("dataSource"),
						a = t.pointers || t.dials;
					a || (t.dials = a = {
						dial: [{
							value: 0
						}]
					});
					(0, r.datasetFactory)(e, i["default"], "dataset", 1, [a])
				};
				var r = a(193),
					i = o(a(1065))
			},
			1065: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1066)),
					n = a(201),
					s = o(a(1068)),
					c = o(a(272)),
					u = o(a(1069)),
					h = (0, n.getDep)("redraphael", "plugin"),
					d = Math,
					p = d.abs,
					g = d.atan2,
					f = d.PI,
					m = 2 * f,
					v = d.max,
					b = f / 180,
					k = void 0 !== window.document.documentElement.ontouchstart,
					C = function (e) {
						return "string" == typeof e
					},
					x = function (e) {
						return null != e
					};
				(0, n.addDep)({
					name: "angularAnimation",
					type: "animationRule",
					extension: s["default"]
				}), (0, c["default"])(h), (0, u["default"])(h);
				var T = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this).components = t.components || {}, t.config.idMap = {}, t
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getType = function () {
						return "dataset"
					}, a.getName = function () {
						return "angularGauge"
					}, a.configure = function (e) {
						if (!e) return !1;
						this.trimData(e), this.config.pointerArr = e;
						var t, a, o, r, l, n, s, c, u, h, d, p = this.getFromEnv("chart"),
							g = p.config,
							f = p.getFromEnv("dataSource"),
							m = f.chart,
							v = f.pointers || f.dials,
							k = v.pointer || v.dial || [],
							C = this.components.data || (this.components.data = []),
							T = this.getFromEnv("scale"),
							w = this.getFromEnv("color-manager"),
							A = this.config || (this.config = {}),
							S = (0, i.pluckNumber)(m.gaugescaleangle, 180),
							y = (0, i.pluckNumber)(m.gaugestartangle),
							N = (0, i.pluckNumber)(m.gaugeendangle),
							F = x(y),
							D = i.hasSVG ? .001 : .01,
							E = x(N);
						for (g.displayValueCount = 0, u = 0, d = k.length; u < d; u += 1) C[u] = C[u] || (C[u] = {}), (h = C[u].config || (C[u].config = {}))
							.basewidth = k[u].basewidth, h.color = k[u].color, h.alpha = k[u].alpha, h.bgcolor = k[u].bgcolor, h.borderalpha = k[u].borderalpha,
							h.bordercolor = k[u].bordercolor, h.borderthickness = k[u].borderthickness, h.editmode = k[u].editmode, h.id = (0, i.pluck)(k[
								u].id, "dial" + u), h.link = k[u].link, h.radius = k[u].radius, h.rearextension = k[u].rearextension, h.showvalue = k[u].showvalue,
							h.tooltext = k[u].tooltext, h.topwidth = k[u].topwidth, h.value = k[u].value, h.valuex = k[u].valuex, h.valuey = k[u].valuey,
							h.baseradius = k[u].baseradius, h.displayvalue = k[u].displayvalue, r = A.showValue = (0, i.pluckNumber)(m.showvalue, m.showrealtimevalue,
								0), l = (0, i.pluckNumber)(h.showvalue, r), h.showPointerValue = l, n = (0, i.pluckNumber)((0, i.getValidValue)(h.valuey)),
							l && !x(n) && (g.displayValueCount += 1);
						(S > 360 || S < -360) && (S = S > 0 ? 360 : -360), (N > 360 || N < -360) && (N %= 360), (y > 360 || y < -360) && (y %= 360), F
							&& E ? ((S = y - N) > 360 || S < -360) && (N = y - (S %= 360)) : F ? ((N = y - S) > 360 || N < -360) && (y += (N %= 360) > 0 ?
								-360 : 360) : E ? ((y = N + S) > 360 || y < -360) && (N += (y %= 360) > 0 ? -360 : 360) : 360 === S ? (y = 180, N = -180) :
							-360 === S ? (y = -180, N = -180) : N = (y = 90 + S / 2) - S, 360 === Math.abs(S) && (N = y - (S += S > 0 ? -D : D)), N = 360 -
							N, S = -S, ((y = 360 - y) > 360 || N > 360) && (y -= 360, N -= 360), A.gaugeStartAngle = y *= b, A.gaugeEndAngle = N *= b, A.gaugeScaleAngle =
							S *= b, A.upperLimit = (0, i.pluckNumber)(m.upperlimit), A.lowerLimit = (0, i.pluckNumber)(m.lowerlimit), T.setAxisConfig({
								startAngle: y,
								totalAngle: -S
							}), o = (0, i.pluckNumber)(m.scaleonresize, 1), A.origW = (0, i.pluckNumber)(m.origw, o ? p.config.origRenderWidth : g.width),
							A.origH = (0, i.pluckNumber)(m.origh, o ? p.config.origRenderHeight : g.height), g.showtooltip = (0, i.pluckNumber)(m.showtooltip,
								1), g.autoScale = (0, i.pluckNumber)(m.autoscale, 1), A.rearExtension = (0, i.pluckNumber)(v.rearextension, 0), A.gaugeinnerradius =
							m.gaugeinnerradius, A.valueBelowPivot = (0, i.pluckNumber)(m.valuebelowpivot, 0), A.showShadow = (0, i.pluckNumber)(m.showshadow,
								1), t = (0, i.pluckNumber)(m.showgaugeborder, 1), A.gaugeFillMix = (0, i.getFirstDefinedValue)(m.colorrangefillmix, m.gaugefillmix,
								p.colorRangeFillMix, "{light-10},{light-70},{dark-10}"), A.gaugeFillRatio = (0, i.getFirstDefinedValue)(m.colorrangefillratio,
								m.gaugefillratio, p.colorRangeFillRatio, m.gaugefillratio), void 0 === A.gaugeFillRatio ? A.gaugeFillRatio = ",6" : A.gaugeFillRatio !==
							i.BLANK && (A.gaugeFillRatio = i.COMMASTRING + A.gaugeFillRatio), A.gaugeBorderColor = (0, i.pluck)(m.gaugebordercolor,
								"{dark-20}"), A.gaugeBorderThickness = t ? (0, i.pluckNumber)(m.gaugeborderthickness, 1) : 0, A.gaugeBorderAlpha = (0, i.pluckNumber)
							(m.gaugeborderalpha, 100), a = w.parseColorMix((0, i.pluck)(m.pivotfillcolor, m.pivotcolor, m.pivotbgcolor, w.getColor(
								"pivotColor")), (0, i.pluck)(m.pivotfillmix, "{light-10},{light-30},{dark-20}")), A.pivotFillAlpha = w.parseAlphaList((0, i.pluck)
								(m.pivotfillalpha, i.HUNDREDSTRING), a.length), A.pivotFillRatio = w.parseRatioList((0, i.pluck)(m.pivotfillratio, i.ZEROSTRING),
								a.length), A.pivotFillColor = a.join(), A.pivotFillAngle = (0, i.pluckNumber)(m.pivotfillangle, 0), A.isRadialGradient =
							"radial" === (0, i.pluck)(m.pivotfilltype, "radial").toLowerCase(), A.showPivotBorder = (0, i.pluckNumber)(m.showpivotborder,
								0), A.pivotBorderThickness = (0, i.pluckNumber)(m.pivotborderthickness, 1), A.pivotBorderColor = (0, i.convertColor)((0, i.pluck)
								(m.pivotbordercolor, w.getColor("pivotBorderColor")), 1 === A.showPivotBorder ? (0, i.pluck)(m.pivotborderalpha, i.HUNDREDSTRING) :
								i.ZEROSTRING), g.dataLabels = g.dataLabels || {}, c = (c = (0, i.getFirstValue)(m.valuebordercolor, "")) ? (0, i.convertColor)
							(c, (0, i.pluckNumber)(m.valueborderalpha, m.valuealpha, 100)) : "", s = g.dataLabels.style = {
								fontFamily: (0, i.pluck)(m.valuefont, g.style.inCanfontFamily),
								fontSize: (0, i.pluck)(m.valuefontsize, parseInt(g.style.inCanfontSize, 10)) + "px",
								color: (0, i.convertColor)((0, i.pluck)(m.valuefontcolor, g.style.inCancolor), (0, i.pluckNumber)(m.valuefontalpha, m.valuealpha,
									100)),
								fontWeight: (0, i.pluckNumber)(m.valuefontbold) ? "bold" : "normal",
								fontStyle: (0, i.pluckNumber)(m.valuefontitalic) ? "italic" : "normal",
								border: c || m.valuebgcolor ? (0, i.pluckNumber)(m.valueborderthickness, 1) + "px solid" : void 0,
								borderColor: c,
								borderThickness: (0, i.pluckNumber)(m.valueborderthickness, 1),
								borderPadding: (0, i.pluckNumber)(m.valueborderpadding, 2),
								borderRadius: (0, i.pluckNumber)(m.valueborderradius, 0),
								backgroundColor: m.valuebgcolor ? (0, i.convertColor)(m.valuebgcolor, (0, i.pluckNumber)(m.valuebgalpha, m.valuealpha, 100)) : "",
								borderDash: (0, i.pluckNumber)(m.valueborderdashed, 0) ? (0, i.getDashStyle)((0, i.pluckNumber)(m.valueborderdashlen, 4), (0,
									i.pluckNumber)(m.valueborderdashgap, 2)) : i.BLANK
							}, (0, i.setLineHeight)(s)
					}, a.trimData = function (e) {
						var t, a;
						(t = this.components.data && this.components.data.length) > (a = e.dial && e.dial.length || 0) && this.removeData(t - a)
					}, a._drawBackground = function () {
						var e, t, a, o, r, l, n, s, c, u, h, d, p, g, f, m, b = this.getFromEnv("chart"),
							k = b.getChildren("canvas")[0],
							C = this.config,
							x = this.getFromEnv("scale"),
							T = this.getFromEnv("color-manager"),
							w = x.config.axisRange,
							A = this.getFromEnv("colorRange"),
							S = b.getChildContainer("plotGroup"),
							y = b.getChildContainer("defaultShadowGroup"),
							N = b.getChildContainer("datalabelsGroup"),
							F = this.getFromEnv("animationManager"),
							D = C.gaugeOuterRadius,
							E = C.gaugeInnerRadius,
							L = C.gaugeFillRatio,
							M = C.gaugeBorderColor,
							R = C.gaugeBorderThickness,
							_ = C.gaugeBorderAlpha,
							V = C.gaugeFillMix,
							O = C.gaugeOriginX,
							I = C.gaugeOriginY,
							P = C.gaugeStartAngle,
							G = C.showShadow,
							B = w.min,
							H = w.max,
							W = A ? A.getColorRangeArr(B, H) : [],
							j = 0,
							z = W.length,
							U = P,
							X = this.getContainer("bandGroup"),
							K = this.getContainer("pointGroup"),
							Y = 0,
							J = function () {
								this.hide()
							},
							Z = function () {
								this.show()
							};
						for (h = F.setAnimation({
								el: X || "group",
								attr: {
									name: "bandGroup"
								},
								container: S,
								component: this,
								label: "group"
							}), X || (h = this.addContainer("bandGroup", h)), d = F.setAnimation({
								el: K || "group",
								attr: {
									name: "pointGroup",
									transform: "t" + O + i.COMMASTRING + I
								},
								container: N,
								component: this,
								label: "group"
							}), K || this.addContainer("pointGroup", d); j < z; j += 1) e = W[j], t = x.getAngle(Math.min(e.maxvalue, H)), o = T.parseColorMix(
								e.code, V), r = T.parseAlphaList(e.alpha, o.length), l = T.parseRatioList(E / D * 100 + L, o.length), s = e.bordercolor, c =
							(0, i.pluckNumber)(e.borderAlpha, _), s = s && -1 === s.indexOf("{") ? (0, i.convertColor)(s, c) : T.parseColorMix(e.code, (0,
								i.pluck)(s, M))[0], s = (0, i.convertColor)(s, c), n = r.split(i.COMMASTRING), n = v.apply(Math, n), n = G ? v(c || 0, n) :
							0, a = t, U > t && (U += t, U -= t = U - t), e._startAngle = U, e._endAngle = t, f = k.getGraphicalElement("bands") && k.getGraphicalElement(
								"bands")[j], m = F.setAnimation({
								el: f || "ringpath",
								attr: {
									ringpath: [O, I, D, E, U, t],
									fill: (0, i.toRaphaelColor)({
										FCcolor: {
											cx: O,
											cy: I,
											r: D,
											gradientUnits: "userSpaceOnUse",
											color: o.join(),
											alpha: r,
											ratio: l,
											radialGradient: !0
										}
									}),
									"stroke-width": R,
									stroke: s
								},
								container: h,
								callback: Z,
								component: this,
								label: "plotBackground"
							}), f || (k.addGraphicalElement("bands", m, !0), m.shadow({
								apply: G,
								opacity: n / 100
							})), U = a, Y += 1;
						for (z = k.getGraphicalElement("bands") && k.getGraphicalElement("bands").length, j = Y; j < z; j++)(e = W[j] || C.oldColorArr[
							j]) && F.setAnimation({
							el: k.getGraphicalElement("bands")[j],
							attr: {
								ringpath: [O, I, D, E, e._startAngle, e._startAngle]
							},
							component: this,
							callback: J,
							label: "plotBackground"
						});
						C.oldColorArr = W, u = C.isRadialGradient ? {
							color: C.pivotFillColor,
							alpha: C.pivotFillAlpha,
							ratio: C.pivotFillRatio,
							radialGradient: !0,
							angle: C.pivotFillAngle,
							cx: .5,
							cy: .5,
							r: "50%"
						} : {
							color: C.pivotFillColor,
							alpha: C.pivotFillAlpha,
							ratio: C.pivotFillRatio,
							radialGradient: !1,
							angle: C.pivotFillAngle
						}, g = this.getGraphicalElement("pivot"), p = F.setAnimation({
							el: g || "circle",
							attr: {
								cx: O,
								cy: I,
								r: C.pivotRadius,
								fill: (0, i.toRaphaelColor)({
									FCcolor: u
								}),
								"stroke-width": C.pivotBorderThickness,
								stroke: C.pivotBorderColor
							},
							container: N,
							component: this,
							label: "pivot"
						}), g || (p = this.addGraphicalElement("pivot", p)).shadow({
							apply: G
						}, y)
					}, a.removeData = function (e) {
						var t, a = this.getFromEnv("animationManager"),
							o = function () {
								this.remove()
							},
							r = this.components.data;
						for (t = 0; t < e; t++) r[t].graphics.pointersPath && a.setAnimation({
							el: r[t].graphics.pointersPath,
							attr: {
								opacity: 0
							},
							callback: o,
							component: this
						}), r[t].graphics.pointersTpath && a.setAnimation({
							el: r[t].graphics.pointersTpath,
							attr: {
								opacity: 0
							},
							callback: o,
							component: this
						}), r[t].graphics.dataLabel && a.setAnimation({
							el: r[t].graphics.dataLabel,
							attr: {
								opacity: 0
							},
							callback: o,
							component: this
						});
						this.removeDataArr || (this.removeDataArr = []), this.removeDataArr = this.removeDataArr.concat(r.splice(0, e))
					}, a.draw = function (e) {
						this._drawBackground();
						var t, a, o, r, l, n, s, c, u, d, f, v, T, w, A, S, y, N, F, D, E, L, M, R, _, V, O, I, P, G, B, H, W, j, z, U, X, K, Y, J, Z,
							q, $, Q, ee, te, ae, oe, re, ie, le, ne, se, ce, ue, he, de, pe, ge, fe, me, ve, be, ke, Ce = this,
							xe = Ce.getFromEnv("chart"),
							Te = Ce.getFromEnv("toolTipController"),
							we = Ce.config.idMap,
							Ae = xe.config,
							Se = xe.getFromEnv("dataSource").chart,
							ye = Ce.components.data,
							Ne = Ce.config,
							Fe = Ne,
							De = Ce.getFromEnv("number-formatter"),
							Ee = Ce.getFromEnv("color-manager"),
							Le = Ce.getFromEnv("scale"),
							Me = Ce.getFromEnv("animationManager"),
							Re = Number(Ne.gaugeOriginX),
							_e = Number(Ne.gaugeOriginY),
							Ve = Ne.gaugeStartAngle,
							Oe = Ne.gaugeEndAngle,
							Ie = Ne.showShadow,
							Pe = Ae.showtooltip,
							Ge = Le.config.axisRange,
							Be = Ge.min,
							He = Ge.max,
							We = Ce.getContainer("pointGroup"),
							je = Ce.getLinkedParent().getChildContainer("datalabelsGroup"),
							ze = He - Be || 1,
							Ue = Oe - Ve,
							Xe = ze / Ue,
							Ke = Se.plottooltext,
							Ye = (0, i.pluckNumber)(Se.showhovereffect),
							Je = Ce.showValue = (0, i.pluckNumber)(Se.showvalue, Se.showrealtimevalue, 0),
							Ze = 0,
							qe = Ae.dataLabels.style,
							$e = {
								fontFamily: qe.fontFamily,
								fontSize: qe.fontSize,
								lineHeight: qe.lineHeight,
								fontWeight: qe.fontWeight,
								fontStyle: qe.fontStyle
							},
							Qe = Ae.scaleFactor,
							et = (0, i.pluckNumber)(parseInt(qe.lineHeight, 10), 12),
							tt = Ne.valueBelowPivot,
							at = 0,
							ot = ye && ye.length,
							rt = {
								pageX: 0,
								pageY: 0
							},
							it = function (e, t, a) {
								var o, r, l, n = this,
									s = this._Attr,
									c = h.vml ? -1.5 : 0,
									u = h.vml ? -1.5 : 0,
									d = e;
								if (s || (s = n._Attr = {}), C(d) && x(t) && (o = d, (d = {})[o] = t), C(d) || void 0 === d) n = "angle" === d ? n._Attr[d] :
									n._attr(d);
								else
									for (o in d) r = d[o], "angle" === o ? (s[o] = r, l = r * b, s.tooltipPos[0] = s.cx + s.toolTipRadius * Math.cos(l), s.tooltipPos[
										1] = s.cy + s.toolTipRadius * Math.sin(l), s.prevValue = r, a && a.duration ? n.animate({
										transform: "R" + r + i.COMMASTRING + c + i.COMMASTRING + u
									}, a.duration, "linear") : n.attr({
										transform: "R" + r + i.COMMASTRING + c + i.COMMASTRING + u
									})) : n._attr(o, r);
								return n
							},
							lt = function (e, t, a, o) {
								return g(t - a[1] - o.top, e - a[0] - o.left)
							},
							nt = function (e) {
								var t = ye[this.pos].config || {},
									a = e.data[0],
									o = e.data[1];
								t.editMode && (Re = Number(Ne.gaugeOriginX), _e = Number(Ne.gaugeOriginY), S = (0, i.getPosition)(xe.getFromEnv(
									"chart-container")), Ae.rotationStartAngle = lt(a, o, [Re, _e], S), t.dragStartY = t.value, A = xe._getDataJSON())
							},
							st = function () {
								var e, t = ye[this.pos],
									a = t.config,
									o = xe.getFromEnv("chartInstance");
								if (t.config.editMode) {
									(e = o && o.jsVars) && (e._rtLastUpdatedData = xe._getDataJSON()), xe.fireChartInstanceEvent("RealTimeUpdateComplete", {
										data: "&value=" + a.updatedValStr,
										updateObject: {
											values: [a.updatedValStr]
										},
										prevData: A.values,
										source: "editMode",
										url: null
									});
									try {
										window.FC_ChartUpdated && window.FC_ChartUpdated(o.id)
									} catch (r) {
										setTimeout((function () {
											throw r
										}), 1)
									}
								}
							},
							ct = function (e) {
								var t, a, o, r, l, n, s, c, u, h = ye[this.pos],
									d = k && function (e) {
										return k && e.sourceEvent && e.sourceEvent.touches && e.sourceEvent.touches[0] || e
									}(e) || rt,
									g = Le.config.axisRange,
									f = e.data[2],
									v = e.data[3];
								if (h.config.editMode) {
									for (Ae.fromDrag = !0, Re = Number(Ne.gaugeOriginX), _e = Number(Ne.gaugeOriginY), Be = g.min, He = g.max, Ve = Ne.gaugeStartAngle,
										Oe = Ne.gaugeEndAngle, Xe = (ze = He - Be) / (Ue = Oe - Ve), t = lt(f, v, [Re, _e], S), o = (a = Ae.rotationStartAngle - t) <
										0 ? m + a : a - m, r = h.config.dragStartY - a * Xe, l = h.config.dragStartY - o * Xe, (r < Be || r > He) && l >= Be && l <=
										He && (r = l), r < Be ? r = p(l - He) < p(r - Be) ? He : Be : r > He && (r = p(r - He) < p(l - Be) ? He : Be), h.config.updatedValStr =
										r + i.BLANK, n = [], c = [], s = 0, u = h.config.index; s < u; s += 1) n.push(i.BLANK), c.push(i.BLANK);
									n.push({
										value: r,
										animation: {
											duration: 0,
											transposeAnimDuration: 0,
											initAnimDuration: 0
										}
									}), c.push(r), h.config.y !== r && Ce.updateData({
										data: n
									}) && (h.config.updatedValStr = c.join("|"), h.config.dragStartX = Re || e.pageX || d.pageX)
								}
							},
							ut = Ce.getFromEnv("smartLabel"),
							ht = h.vml ? -1.5 : 0,
							dt = h.vml ? -1.5 : 0;
						for (le = ne = Ne.pivotRadius, void 0 === Fe.dataById && (Fe.dataById = {}), e && 0 === e.duration && xe.getFromEnv(
								"animationManager").setAnimationState("dialDrag"), O = function (e) {
								Ae.fromDrag ? Ae.fromDrag = !1 : xe.plotEventHandler(this, e)
							}, ot || (ot = 0), ut.setStyle($e), 0 !== Ye && (Ye || Se.dialborderhovercolor || Se.dialborderhoveralpha || 0 === Se.dialborderhoveralpha ||
								Se.dialborderhoverthickness || 0 === Se.dialborderhoverthickness || Se.dialbghovercolor || Se.plotfillhovercolor || Se.dialbghoveralpha ||
								Se.plotfillhoveralpha || 0 === Se.dialbghoveralpha) && (Ye = 1), ge = function (e) {
								var t, a = this.data("rolloverProperties");
								xe.plotEventHandler(this, e, "DataPlotRollOver"), a.enabled && (t = this.attr("transform"), this.attr("transform", i.BLANK),
									this.attr(a.hoverAttr), this.attr("transform", t))
							}, fe = function (e) {
								var t, a = this.data("rolloverProperties");
								xe.plotEventHandler(this, e, "DataPlotRollOut"), a.enabled && (t = this.attr("transform"), this.attr("transform", i.BLANK),
									this.attr(a.outAttr), this.attr("transform", t))
							}; Ze < ot; Ze += 1)(l = ye[Ze]).config = l.config || {}, I = l.config, l.config.index = Ze, we[I.id] = {
								index: Ze,
								config: l.config
							}, ke = !1, void 0 !== I.id && (Fe.dataById[I.id] = {
								index: Ze,
								point: l
							}), be = ye[Ze].graphics || (ye[Ze].graphics = {}), P = De.getCleanValue(I.value), P = Number((0, i.toPrecision)(P, 10)), d =
							(0, i.pluckNumber)(I.rearextension, 0) * Qe, le = Math.max(le, d * Qe), G = De.dataLabels(P), B = (0, i.getValidValue)(I.displayvalue,
								G, ""), j = (0, i.pluckNumber)(I.showvalue, Je), z = (0, i.pluckNumber)((0, i.getValidValue)(I.valuey) * Qe), se = (0, i.pluckNumber)
							((0, i.getValidValue)(I.valuex) * Qe), I.itemValue = P, I.formatedVal = G, U = (U = (0, i.getValidValue)((0, i.parseUnsafeString)
								((0, i.pluck)(I.tooltext, l.hovertext, Ke), !1))) ? (0, i.parseTooltext)(U, [1, 2], {
								formattedValue: G
							}, l.config, Se) : B, X = (0, i.pluck)(I.color, I.bgcolor, Ee.getColor("dialColor")), K = (0, i.pluckNumber)(I.alpha, l.bgalpha,
								100), Y = (0, i.toRaphaelColor)({
								FCcolor: {
									color: X,
									alpha: K,
									angle: 90
								}
							}), J = (0, i.pluck)(I.bordercolor, Ee.getColor("dialBorderColor")), Z = (0, i.pluckNumber)(I.borderalpha, 100), q = (0, i.convertColor)
							(J, Z), $ = (0, i.pluckNumber)(I.borderthickness, 1), n = (0, i.pluckNumber)(I.radius) * Qe, s = (0, i.pluckNumber)((0, i.pluckNumber)
								(I.basewidth * Qe, 1.6 * ne)), c = (0, i.pluckNumber)(I.topwidth, 0) * Qe, u = (0, i.pluckNumber)(I.baseradius, 0), t = (0,
								i.pluckNumber)(I.editmode, Se.editmode, 0), (0, i.pluck)(I.link, ""), ce = U, I.toolText = ce, ue = (0, i.pluck)(B, ""), B =
							j ? (0, i.pluck)(B, i.BLANK) : "", 0 !== (Q = (0, i.pluckNumber)(l.showhovereffect, Ye)) && (Q || l.borderhovercolor || l.borderhoveralpha ||
								0 === l.borderhoveralpha || l.borderhoverthickness || 0 === l.borderhoverthickness || l.bghovercolor || l.bghoveralpha || 0 ===
								l.bghoveralpha) && (Q = !0, r = {}, o = {}, ee = (0, i.pluck)(l.borderhovercolor, Se.dialborderhovercolor, "{dark-10}"), te =
								(0, i.pluckNumber)(l.borderhoveralpha, Se.dialborderhoveralpha, Z), (ae = (0, i.pluckNumber)(l.borderhoverthickness, Se.dialborderhoverthickness,
									$)) && (r.stroke = q, oe = /\{/.test(ee), o.stroke = (0, i.convertColor)(oe ? Ee.parseColorMix(J, ee)[0] : ee, te)), ae !==
								$ && (o["stroke-width"] = ae, r["stroke-width"] = $), re = (0, i.pluck)(l.bghovercolor, Se.dialbghovercolor, Se.plotfillhovercolor,
									"{dark-10}"), ie = (0, i.pluckNumber)(l.bghoveralpha, Se.dialbghoveralpha, Se.plotfillhoveralpha, K), r.fill = Y, a = {
									FCcolor: {
										color: re = /\{/.test(re) ? Ee.parseColorMix(X, re).join() : re,
										alpha: ie,
										angle: 90
									}
								}, o.fill = (0, i.toRaphaelColor)(a)), F = I.rolloverProperties = {
								enabled: Q,
								hasHoverSizeChange: void 0,
								hoverRadius: (0, i.pluckNumber)(E * Qe),
								baseHoverWidth: (0, i.pluckNumber)(L * Qe, 1.6 * ne),
								topHoverWidth: (0, i.pluckNumber)(R * Qe),
								rearHoverExtension: (0, i.pluckNumber)(V * Qe),
								hoverFill: a,
								hoverAttr: o,
								outAttr: r
							}, n = (0, i.pluckNumber)(n, (Number(Ne.gaugeOuterRadius) + Number(Ne.gaugeInnerRadius)) / 2), f = s / 2, v = c / 2, I.tooltipPos = [
								Re, _e
							], y = I.editMode ? void 0 : I.link, D = ["M", n, -v, "L", n, v, -d, f, -d, -f, "Z"], F.hasHoverSizeChange && (F.outAttr.path =
								D, E = (0, i.pluckNumber)(F.hoverRadius, n), M = (L = F.baseHoverWidth) / 2, _ = (R = F.topHoverWidth) / 2, V = F.rearHoverExtension,
								F.hoverAttr.path = ["M", E, -_, "L", E, _, -V, M, -V, -M, "Z"]), N = {
								link: I.link,
								value: P,
								displayValue: ue,
								toolText: ce,
								baseWidth: I.basewidth,
								bgColor: I.bgcolor,
								borderAlpha: I.borderalpha,
								borderColor: I.bordercolor,
								borderThickness: I.borderthickness,
								editMode: I.editmode,
								id: I.id,
								radius: I.radius,
								rearExtension: I.rearextension,
								showValue: I.showPointerValue,
								topWidth: I.topwidth,
								valueX: I.valuex,
								valueY: I.valuey,
								baseRadius: I.baseradius
							}, P >= Be && P <= He && (T = (Ve + (P - Be) / ze * Ue) / b), be.pointersTpath ? c ? (Me.setAnimation({
								el: be.pointersPath,
								attr: {
									path: D,
									transform: "R" + T + i.COMMASTRING + ht + i.COMMASTRING + dt
								},
								component: Ce,
								label: "dialPath"
							}), be.pointersTpath._attr({
								trianglepath: [0, 0, 0, 0, 0, 0, 0, 0, 0]
							})) : (Me.setAnimation({
								el: be.pointersTpath,
								attr: {
									trianglepath: [n, v, -d, f, -d, -f, 0, u, u],
									transform: "R" + T + i.COMMASTRING + ht + i.COMMASTRING + dt
								},
								component: Ce,
								label: "trianglepath"
							}), be.pointersPath._attr({
								path: "M0,0"
							})) : (c ? (ve = D, me = [0, 0, 0, 0, 0, 0, 0, 0, 0]) : (ve = ["M", 0, 0], me = [n, v, -d, f, -d, -f, 0, u, u]), be.pointersPath =
								Me.setAnimation({
									el: "path",
									attr: {
										path: ve,
										transform: "R" + T + i.COMMASTRING + ht + i.COMMASTRING + dt
									},
									container: We,
									component: Ce,
									label: "dialPath"
								}), be.pointersTpath = Me.setAnimation({
									el: "trianglepath",
									attr: {
										trianglepath: me,
										transform: "R" + T + i.COMMASTRING + ht + i.COMMASTRING + dt
									},
									container: We,
									component: Ce,
									label: "dialPath"
								}), w = c ? be.pointersPath : be.pointersTpath, (s || c || $) && w.shadow({
									apply: Ie
								}), ke = !0), w = c ? be.pointersPath : be.pointersTpath, be.pointersPath._attr || (be.pointersPath._attr = be.pointersPath.attr,
								be.pointersPath.attr = it), be.pointersTpath._attr || (be.pointersTpath._attr = be.pointersTpath.attr, be.pointersTpath.attr =
								it), w._attr({
								fill: Y,
								stroke: q,
								"stroke-width": $
							}).data("eventArgs", N).data("rolloverProperties", F), w._Attr = {
								tooltipPos: I.tooltipPos,
								cx: Re,
								cy: _e,
								toolTipRadius: n - d,
								color: I.color
							}, ke && (T = Ve / b, w.hover(ge, fe)), I.index = Ze, I.editMode = t, w.css({
								cursor: t || y ? "pointer" : "default",
								_cursor: t ? "hand" : "default"
							}), be.pointersPath.pos = Ze, be.pointersTpath.pos = Ze, ke && (be.pointersPath.on("fc-dragstart", nt), be.pointersPath.on(
								"fc-dragmove", ct), be.pointersPath.on("fc-dragend", st), be.pointersTpath.on("fc-dragstart", nt), be.pointersTpath.on(
								"fc-dragmove", ct), be.pointersTpath.on("fc-dragend", st), be.pointersPath.on("fc-click", O), be.pointersTpath.on(
								"fc-click", O)), I.y = P, Pe && ce !== i.BLANK ? Te.enableToolTip(w, ce) : Te.disableToolTip(w), x(B) && B !== i.BLANK ? (he =
								_e + (tt ? et / 2 + ne + 2 : -et / 2 - ne - 2), de = z, pe = (0, i.pluckNumber)(se, Re), x(de) || (de = tt ? he + et * at :
									he - et * at), B = (H = ut.getSmartText(B)).text, W = H.tooltext || "", be.dataLabel = Me.setAnimation({
									el: be.dataLabel || "text",
									attr: {
										x: pe,
										y: de,
										direction: Ae.textDirection,
										text: B,
										title: l.originalText || i.BLANK,
										fill: qe.color,
										"text-bound": [qe.backgroundColor, qe.borderColor, qe.borderThickness, qe.borderPadding, qe.borderRadius, qe.borderDash]
									},
									css: $e,
									container: je,
									component: Ce,
									label: "text"
								}), be.dataLabel.show(), at += 1, Pe ? Te.enableToolTip(be.dataLabel, W) : Te.disableToolTip(be.dataLabel)) : (be.dataLabel &&
								be.dataLabel.hide(), be.dataLabel && Te.disableToolTip(be.dataLabel))
					}, a.updateData = function (e) {
						var t, a, o, r, l, n, s, c, u, h, d, p, g, f, m = {},
							v = e;
						if (v === this.config.lastUpdatedObj) return !1;
						for (this, t = this.getFromEnv("chart"), a = this.components.data, s = (n = this.components.data) && n.length || 0, d = (v = v
								.data).length, c = 0; c < d; c++)(u = v[c].id) && (m[u] = v[c]);
						if (h = Object.keys(m).length, s) {
							for (; s--;) u = (o = a[s].config).id, p = void 0, p = h ? m[u] : v[s], p && (g = p.animation || t.get("config",
								"animationObj"), f = p.value, l = p.tooltext, r = p.label, o.value = (0, i.pluckNumber)(f, o.value, 0), o.tooltext = (0, i
								.pluck)(l, o.value), o.displayvalue = r);
							return this.config.lastUpdatedObj = v, this.draw(g), !0
						}
					}, t
				}(l["default"]);
				t["default"] = T
			},
			1066: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(438)),
					n = o(a(437)),
					s = a(201),
					c = a(208),
					u = o(a(1067)),
					h = i.BLANK,
					d = i.preDefStr.configStr,
					p = i.preDefStr.animationObjStr,
					g = i.preDefStr.POSITION_TOP,
					f = i.preDefStr.POSITION_BOTTOM,
					m = i.preDefStr.POSITION_MIDDLE,
					v = i.preDefStr.POSITION_START,
					b = i.preDefStr.POSITION_END,
					k = window,
					C = void 0 !== k.document.documentElement.ontouchstart,
					x = Math,
					T = x.max,
					w = x.min,
					A = {
						right: b,
						left: v,
						middle: m,
						start: v,
						end: b,
						center: m,
						undefined: i.BLANK,
						BLANK: i.BLANK
					};
				(0, s.addDep)({
					name: "hlineargaugeAnimation",
					type: "animationRule",
					extension: u["default"]
				});
				var S = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this).config.idMap = {}, t
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getType = function () {
						return "dataset"
					}, a.getName = function () {
						return "hlineargauge"
					}, a._drawBackground = function () {
						var e, t, a, o, r, l, n, s, c, u, h, d, p, m, v, b, k, C, x, w, A, S, y, N, F, D = this.getFromEnv("chart"),
							E = D.getFromEnv(),
							L = D.config,
							M = D.getChildContainer().plotGroup,
							R = D.getFromEnv("toolTipController"),
							_ = L.canvasWidth,
							V = L.canvasHeight,
							O = L.canvasTop,
							I = L.canvasLeft,
							P = E.scale,
							G = this.config.isScaleReversed,
							B = P.config.axisRange.min,
							H = P.config.axisRange.max,
							W = D.getFromEnv("dataSource"),
							j = W.chart,
							z = W.trendpoints && W.trendpoints.point,
							U = (0, i.pluckNumber)(j.showgaugeborder, 1),
							X = (0, i.getFirstDefinedValue)(j.colorrangefillmix, j.gaugefillmix, "{light-10},{dark-20},{light-50},{light-85}"),
							K = (0, i.getFirstDefinedValue)(j.colorrangefillratio, j.gaugefillratio, j.gaugefillratio, "0,8,84,8"),
							Y = (0, i.pluck)(j.colorrangebordercolor, j.gaugebordercolor, "{dark-20}"),
							J = (0, i.pluckNumber)(j.colorrangeborderalpha, j.gaugeborderalpha, 100),
							Z = U ? (0, i.pluckNumber)(j.colorrangeborderthickness, j.gaugeborderthickness, 1) : 0,
							q = W.colorrange && E.colorRange && E.colorRange.getColorRangeArr(B, H),
							$ = (0, i.pluckNumber)(j.showshadow, 1),
							Q = D.getChildren("canvas")[0],
							ee = Q.getGraphicalElement("linear"),
							te = Q.getGraphicalElement("outerRect"),
							ae = E.animationManager,
							oe = E["color-manager"],
							re = {
								top: 1,
								bottom: 3
							},
							ie = 0,
							le = 0,
							ne = 0;
						for (ae.setAnimation({
								el: M,
								state: "initial",
								attr: {
									transform: ["T", I, O]
								},
								component: this,
								container: D.getContainer("parentgroup"),
								label: "parentgroup"
							}), ee = ae.setAnimation({
								el: ee || "group",
								attr: {
									name: "colorrange"
								},
								component: this,
								container: M,
								label: "background"
							}), te = ae.setAnimation({
								el: te || "rect",
								attr: {
									x: 0,
									y: 0,
									width: _,
									height: V,
									stroke: "none",
									r: 0
								},
								component: this,
								container: M
							}), Q.getGraphicalElement("linear") || (ee = Q.addGraphicalElement("linear", ee), Q.addGraphicalElement("outerRect", te)), l =
							function (e, t) {
								return N = (t - e) * _ / (H - B), {
									x: G ? _ - N - e * _ / (H - B) : e * _ / (H - B),
									y: 0,
									width: N,
									height: V
								}
							}, n = 270, e = 0, a = q && q.length; e < a; e += 1) h = l((c = G ? q[a - 1 - e] : q[e]).minvalue - B, c.maxvalue - B), c.x =
							h.x, c.y = h.y, c.width = h.width, c.height = h.height, s = c.code, u = (0, i.convertColor)((0, i.getColorCodeString)((0, i.pluck)
								(c.bordercolor, s), Y), (0, i.pluckNumber)(c.borderalpha, J)), C = oe.parseColorMix(c.code, X), x = oe.parseAlphaList(c.alpha,
								C.length), w = (0, i.pluckNumber)(c.borderAlpha, J), A = x.split(i.COMMASTRING), A = T.apply(Math, A), A = T(Z && w || 0, A),
							F = {
								x: h.x,
								y: h.y,
								width: h.width,
								height: h.height,
								r: 0,
								"stroke-width": Z,
								stroke: u,
								fill: (0, i.toRaphaelColor)({
									FCcolor: {
										color: C.toString(),
										ratio: K,
										alpha: x,
										angle: n
									}
								})
							}, y = Q.getGraphicalElement("colorRangeElems") && Q.getGraphicalElement("colorRangeElems")[e], y = ae.setAnimation({
								el: y || "rect",
								attr: F,
								component: this,
								container: ee
							}), Q.getGraphicalElement("colorRangeElems") && Q.getGraphicalElement("colorRangeElems")[e] || (y = Q.addGraphicalElement(
								"colorRangeElems", y, !0, e)).shadow({
								apply: $,
								opacity: A / 100
							}), y.show();
						if (!h && Q.getGraphicalElement("colorRangeElems") && Q.getGraphicalElement("colorRangeElems").length > 0 && (h = Q.getGraphicalElement(
								"colorRangeElems")[Q.getGraphicalElement("colorRangeElems").length - 1].attr()), Q.getGraphicalElement("colorRangeElems"))
							for (; Q.getGraphicalElement("colorRangeElems")[e];) Q.getGraphicalElement("colorRangeElems")[e].shadow(!1), Q.getGraphicalElement(
								"colorRangeElems")[e].hide(), e++;
						if (z)
							for (e = 0, a = (d = L.trendPointConfig).length; e < a; e += 1) h = l((k = d[e]).startValue - B, k.endValue - B), k.isTrendZone ?
								(p = Q.getGraphicalElement("trendZoneElems") && Q.getGraphicalElement("trendZoneElems")[ie], p = ae.setAnimation({
									el: p || "rect",
									attr: {
										x: h.x,
										y: h.y,
										width: h.width > 0 ? h.width : 0,
										height: h.height > 0 ? h.height : 0,
										r: 0,
										"stroke-width": 0,
										fill: (0, i.toRaphaelColor)({
											FCcolor: {
												color: k.color,
												alpha: k.alpha
											}
										})
									},
									component: this,
									container: ee,
									label: "final"
								}), Q.getGraphicalElement("trendZoneElems") && Q.getGraphicalElement("trendZoneElems")[ie] || (p = Q.addGraphicalElement(
									"trendZoneElems", p, !0, ie)), p.show(), R.enableToolTip(p, k.tooltext), ie++) : (v = Q.getGraphicalElement("trendObjElems") &&
									Q.getGraphicalElement("trendObjElems")[le], p = ae.setAnimation({
										el: v || "path",
										attr: {
											stroke: (0, i.convertColor)(k.color, k.alpha),
											"stroke-dasharray": k.dashStyle,
											"stroke-width": k.thickness,
											path: ["M", h.x, h.y, "L", h.x, h.y + h.height]
										},
										component: this,
										container: ee,
										label: "final"
									}), v || (v = Q.addGraphicalElement("trendObjElems", p, !0, le)), v.show(), R.enableToolTip(v, k.tooltext), le++), k.useMarker &&
								(k.showOnTop ? (r = f, t = 0) : (r = g, t = V), S = 90 * re[r], o = Q.getGraphicalElement("marker") && Q.getGraphicalElement(
									"marker")[ne], o = ae.setAnimation({
									el: o || "polypath",
									attr: {
										fill: k.markerColor,
										stroke: k.markerBorderColor,
										polypath: [3, h.x, t, k.markerRadius, S, 0],
										"stroke-width": 1
									},
									component: this,
									container: ee,
									label: "final"
								}), Q.getGraphicalElement("marker") && Q.getGraphicalElement("marker")[ne] || (o = Q.addGraphicalElement("marker", o, !0,
									ne)).shadow({
									apply: $
								}), R.enableToolTip(o, k.tooltext), o.show(), ne++);
						if (b = Q.getGraphicalElement("trendObjElems"))
							for (; b[le];) b[le].hide(), le++;
						if (m = Q.getGraphicalElement("trendZoneElems"))
							for (; m[ie];) m[ie].hide(), ie++;
						if (o = Q.getGraphicalElement("marker"))
							for (; o[ne];) o[ne].hide(), o[ne].shadow(!1), ne++
					}, a.configureAttributes = function (e) {
						this.trimData(e), this.config.pointerArr = e;
						var t, a, o, r, l, n, s, c, u, d, p, m, v, b, k, C, x, T, w, A, S, y, N, F, D, E, L, M, R, _, V, O, I, P, G, B, H, W, j, z, U,
							X = this.getFromEnv("chart"),
							K = X.getFromEnv("dataSource"),
							Y = K.chart,
							J = this.getFromEnv("number-formatter"),
							Z = this.getFromEnv("color-manager"),
							q = this.getFromEnv("scale"),
							$ = Y.plottooltext,
							Q = this.config || (this.config = {}),
							ee = this.components || (this.components = {}),
							te = K.pointers && K.pointers.pointer,
							ae = te && te.length || 0,
							oe = X.config.style;
						for (Q.isScaleReversed = q.config.isReverse, Q.valuePadding = (0, i.pluckNumber)(Y.valuepadding, 2), Q.tooltipSepChar = (0, i.pluck)
							(Y.tooltipsepchar, i.COMMASTRING), H = (0, i.pluckNumber)(Y.ticksbelowgauge, Y.ticksbelowgraph, 1), Q.axisPosition = H ? 3 :
							1, Q.pointerOnOpp = m = Number(!(0, i.pluckNumber)(Y.pointerontop, H, 1)), Q.valueabovepointer = C = (0, i.pluckNumber)(Y.valueabovepointer, !
								m, 1), Q.valueInsideGauge = C === m ? 1 : 0, Q.showPointerShadow = (0, i.pluckNumber)(Y.showpointershadow, Y.showshadow, 1),
							Q.showTooltip = (0, i.pluckNumber)(Y.showtooltip, 1), Q.textDirection = "1" === Y.hasrtltext ? "rtl" : i.BLANK, Q.showGaugeLabels =
							(0, i.pluckNumber)(Y.showgaugelabels, 1), Q.colorRangeStyle = {
								fontFamily: oe.inCanfontFamily,
								fontSize: oe.inCanfontSize,
								lineHeight: oe.inCanLineHeight,
								color: oe.inCancolor.replace(/^#?/, "#")
							}, Q.showTextOutline = (0, i.pluckNumber)(Y.textoutline, 0), Q.showValue = (0, i.pluckNumber)(Y.showvalue, 1), Q.editMode = (
								0, i.pluckNumber)(Y.editmode, 0), Q.pointerSides = W = (0, i.pluckNumber)(Y.pointersides, 3), Q.pointerBorderThickness = z =
							(0, i.pluckNumber)(Y.pointerborderthickness), Q.showHoverEffect = j = (0, i.pluckNumber)(Y.showhovereffect, Y.plothovereffect),
							Q.upperLimit = (0, i.pluckNumber)(Y.upperlimit), Q.lowerLimit = (0, i.pluckNumber)(Y.lowerlimit), p = m ? g : f, Q.startAngle =
							90 * {
								top: 1,
								right: 0,
								left: 2,
								bottom: 3
							}[p], d = ee.data || (ee.data = []), l = 0; l < ae; l++) o = (a = d[l] || (ee.data[l] = {})).config || (a.config = {}), t =
							te && te[l] || {}, o.value = t.value, o.itemValue = r = J.getCleanValue(t.value), o.formatedVal = s = J.dataLabels(r), o.setDisplayValue =
							c = (0, i.getValidValue)((0, i.parseUnsafeString)(t.displayvalue)), o.setToolText = n = (0, i.getValidValue)((0, i.parseUnsafeString)
								((0, i.pluck)(t.tooltext, $), !1)), o.id = (0, i.pluck)(t.id, "pointer_" + l), o.showHoverEffect = L = (0, i.pluckNumber)(t.showhovereffect,
								j), o.showBorder = G = (0, i.pluckNumber)(t.showborder, Y.showplotborder, 1), o.borderWidth = E = G ? (0, i.pluckNumber)(t.borderthickness,
								z) : 0, o.showValue = U = (0, i.pluckNumber)(t.showvalue, Q.showValue), o.dataLabelStyle = this._configureDataLabelStyle(t,
								K.pointers), U ? void 0 !== c ? (o.displayValue = c, o.isLabelString = !0) : o.displayValue = (0, i.getValidValue)(s, i.BLANK) :
							o.displayValue = h, o.sides = u = (0, i.pluckNumber)(t.sides, W), u < 3 && (o.sides = 3), o.radius = T = (0, i.pluckNumber)(t
								.radius, Y.pointerradius, 10), void 0 !== n ? (o.toolText = (0, i.parseTooltext)(n, [1, 2], {
								formattedValue: s
							}, t, Y), o.isTooltextString = !0) : o.toolText = null !== s && s, o.tempToolText = o.toolText, o.bgAlpha = k = (0, i.pluckNumber)
							(t.alpha, t.bgalpha, Y.pointerbgalpha, 100), o.bgColor = x = (0, i.pluck)(t.color, t.bgcolor, Y.pointerbgcolor, Y.pointercolor,
								Z.getColor("pointerBgColor")), o.fillColor = B = (0, i.convertColor)(x, k), o.showBorder = (0, i.pluckNumber)(t.showborder,
								Y.showplotborder, 1), o.borderAlpha = b = (0, i.pluckNumber)(t.borderalpha, Y.pointerborderalpha, 100), o.borderColor = v =
							(0, i.pluck)(t.bordercolor, Y.pointerbordercolor, Z.getColor("pointerBorderColor")), o.pointerBorderColor = w = (0, i.convertColor)
							(v, b), o.dataLink = (0, i.getValidValue)(t.link), o.editMode = (0, i.pluckNumber)(t.editmode, Q.editMode), 0 !== L && (L ||
								t.bghovercolor || Y.pointerbghovercolor || Y.plotfillhovercolor || t.bghoveralpha || Y.pointerbghoveralpha || Y.plotfillhoveralpha ||
								0 === t.bghoveralpha || 0 === Y.pointerbghoveralpha || t.showborderonhover || Y.showborderonhover || 0 === t.showborderonhover ||
								0 === Y.showborderonhover || t.borderhoverthickness || Y.pointerborderhoverthickness || 0 === t.borderhoverthickness || 0 ===
								Y.pointerborderhoverthickness || t.borderhovercolor || Y.pointerborderhovercolor || t.borderhoveralpha || Y.pointerborderhoveralpha ||
								0 === t.borderhoveralpha || 0 === Y.pointerborderhoveralpha || t.hoverradius || Y.pointerhoverradius || 0 === t.hoverradius ||
								0 === Y.pointerhoverradius) && (L = !0, y = (0, i.pluck)(t.bghovercolor, Y.pointerbghovercolor, Y.plotfillhovercolor,
									"{dark-10}"), S = (0, i.pluckNumber)(t.bghoveralpha, Y.pointerbghoveralpha, Y.plotfillhoveralpha), void 0 === (R = (0, i.pluckNumber)
									(t.showborderonhover, Y.showborderonhover)) && (R = t.borderhoverthickness || 0 === t.borderhoverthickness || t.borderhovercolor ||
									t.borderhoveralpha || 0 === t.borderhoveralpha ? 1 : G), N = (0, i.pluck)(t.borderhovercolor, Y.pointerborderhovercolor,
									"{dark-10}"), A = (0, i.pluckNumber)(t.borderhoveralpha, Y.pointerborderhoveralpha), F = R ? (0, i.pluckNumber)(t.borderhoverthickness,
									Y.pointerborderhoverthickness, E || 1) : 0, D = (0, i.pluckNumber)(t.hoverradius, Y.pointerhoverradius, T + 2), _ = !!(0, i
									.pluckNumber)(t.showhoveranimation, Y.showhoveranimation, 1), o.hoverAttr = M = {}, o.outAttr = V = {}, E !== F && (M[
									"stroke-width"] = F, V["stroke-width"] = E), V.fill = B, y = /\{/.test(y) ? Z.parseColorMix(x, y)[0] : y, M.fill = (0, i.convertColor)
								(y, (0, i.pluckNumber)(S, k)), F && (V.stroke = w, O = /\{/.test(N), M.stroke = (0, i.convertColor)(O ? Z.parseColorMix(v, N)[
									0] : N, (0, i.pluckNumber)(A, b))), D && (_ ? (I = {
									r: D
								}, P = {
									r: T
								}) : (M.r = D, V.r = T))), o.rolloverProperties = {
								enabled: L,
								hoverAttr: M,
								hoverAnimAttr: I,
								outAttr: V,
								outAnimAttr: P
							}
					}, a.trimData = function (e) {
						var t, a;
						(t = this.config.pointerArr && this.config.pointerArr.pointer && this.config.pointerArr.pointer.length) > (a = e && e.pointer &&
							e.pointer.length || 0) && this.removeData(t - a)
					}, a._manageSpace = function (e) {
						var t, a, o, r, l, n, s, c = this.getFromEnv("chart"),
							u = this.components,
							d = c.config,
							p = this.config,
							g = this.getFromEnv("smartLabel"),
							f = d.canvasWidth,
							m = d.dataLabelStyle,
							v = d.style.trendStyle,
							b = c.getFromEnv("dataSource"),
							k = b.trendpoints && b.trendpoints.point,
							C = (0, i.pluckNumber)(parseInt(m.lineHeight, 10), 12),
							x = e,
							T = p.valuePadding,
							w = p.valueInsideGauge,
							A = 0,
							S = 0,
							y = 0,
							N = 0,
							F = 0,
							D = 0,
							E = 0,
							L = this.getFromEnv("scale").config.spaceTaken,
							M = 0,
							R = this.config.pointerArr && this.config.pointerArr.pointer && this.config.pointerArr.pointer.length,
							_ = p.pointerOnOpp,
							V = u.data;
						for (k && c._configueTrendPoints(), g.useEllipsesOnOverflow(d.useEllipsesWhenOverflow), g.setStyle(m); M < R; M += 1) o = T +
							(s = V[M].config).radius * (s.sides <= 3 ? .5 : s.sides % 2 ? 1.1 - 1 / s.sides : 1), N = Math.max(N, o), s.showValue && s.displayValue !==
							h && (s.isLabelString ? (t = g.getSmartText(s.displayValue, f, x - N), s.displayValue = t.text, t.tooltext && (s.originalText =
								t.tooltext)) : t = g.getOriSize(s.displayValue), s.displayValue === i.BLANK && (t = {
								height: C
							})), (A = t && t.height > 0 && !w ? t.height + o : o) > x && (o = (a = A - x) < o ? o - a : 0, A = x), _ ? (3 === p.axisPosition &&
								(D = Math.max(L.bottom, D), A = Math.max(L.bottom, A)), S = Math.max(S, A)) : (1 === p.axisPosition && (E = Math.max(L.top,
								E), A = Math.max(L.top, A)), y = Math.max(A, y)), p.align = i.POSITION_CENTER;
						if (p.currentValuePadding = N, g.setStyle(v), k) {
							for (M = 0, R = (r = d.trendPointConfig).length; M < R; M += 1)(l = r[M]) && l.displayValue !== h && (n = T + .5 * l.markerRadius,
								F = Math.max(n, F), (t = g.getOriSize(l.displayValue)).height > 0 && (A = t.height + n), A > x && (n = (a = A - x) < n ? n -
									a : 0, A = x), l.showOnTop ? (1 === p.axisPosition && (E = Math.max(L.top, E), A = Math.max(L.top, A)), y = Math.max(y, A)) :
								(3 === p.axisPosition && (D = Math.max(L.bottom, D), A = Math.max(L.bottom, A)), S = Math.max(A, S)));
							p.currentTrendPadding = F
						}
						return {
							top: y - E,
							bottom: S - D
						}
					}, a.draw = function (e, t) {
						var a, o, r, l, n, s, c, u, h, d, p, g, f, m = this,
							v = m.config.idMap,
							b = m.getFromEnv("chart"),
							x = b.config,
							T = b.getChildContainer("datalabelsGroup"),
							w = m.getFromEnv("toolTipController"),
							A = m.getGraphicalElement("tempGroup"),
							S = m.getFromEnv("scale"),
							y = m.getFromEnv("animationManager"),
							N = m.config.pointerArr && m.config.pointerArr.pointer,
							F = x.canvasWidth,
							D = x.canvasHeight,
							E = m.config,
							L = E.isScaleReversed,
							M = m.getFromEnv("number-formatter"),
							R = E.pointerOnOpp ? D : 0,
							_ = E.showPointerShadow,
							V = E.showTooltip,
							O = S.config.axisRange.min,
							I = S.config.axisRange.max,
							P = (I - O) / F,
							G = N && N.length || 0,
							B = m.components.data,
							H = {
								pageX: 0,
								pageY: 0
							},
							W = function (e) {
								var t = e.data[0];
								!1 !== this.editMode && (r = b._getDataJSON(), this.dragStartX = t)
							},
							j = function () {
								var e, t = this.config,
									a = b.getFromEnv("chartInstance");
								if (!1 !== this.config.editMode) {
									(e = a && a.jsVars) && (e._rtLastUpdatedData = b._getDataJSON()), b.fireChartInstanceEvent("RealTimeUpdateComplete", {
										data: "&value=" + t.updatedValStr,
										updateObject: {
											values: [t.updatedValStr]
										},
										prevData: r.values,
										source: "editMode",
										url: null
									});
									try {
										k.FC_ChartUpdated && k.FC_ChartUpdated(a.id)
									} catch (o) {
										setTimeout((function () {
											throw o
										}), 1)
									}
									E.showTooltip ? w.enableToolTip(s, t.toolText) : w.disableToolTip(s)
								}
							},
							z = function (e) {
								var t = e.data[2],
									a = C && function (e) {
										return C && e.sourceEvent && e.sourceEvent.touches && e.sourceEvent.touches[0] || e
									}(e) || H,
									o = S.getLimit(),
									r = o.min,
									l = o.max,
									n = (0, i.pluckNumber)(this.itemValue, r),
									s = n - (L ? t - this.dragStartX : this.dragStartX - t) * P,
									c = 0,
									u = [],
									h = [];
								if (!1 !== this.editMode) {
									for (this.drag = !0, s < r ? s = r : s > l && (s = l); c < this.index; c += 1) u.push(i.BLANK), h.push(i.BLANK);
									u.push({
										value: s
									}), h.push(s), n !== s && m.updateData({
										data: u
									}, {
										duration: 0
									}) && (this.updatedValStr = h.join("|"), this.dragStartX = t || e.pageX || a.pageX)
								}
							};
						for (e && 0 === e.duration && (b.state = "noAnim"), A || (A = m.addGraphicalElement("tempGroup", y.setAnimation({
								el: "group",
								state: b.state,
								attr: {
									opacity: 1,
									name: "tempGroup"
								},
								container: T,
								component: m
							}))), p = function (e) {
								var t = this.data("eventArgs").index,
									a = B[t].config;
								!0 !== a.drag ? b.plotEventHandler(this, e) : a.drag = !1
							}, g = function (e) {
								var t = this.data("rolloverProperties");
								t.enabled && (this.attr(t.hoverAttr), t.hoverAnimAttr && this.animate(t.hoverAnimAttr, 100, "easeIn")), b.plotEventHandler(
									this, e, "DataPlotRollOver")
							}, f = function (e) {
								var t = this.data("rolloverProperties");
								t.enabled && (this.attr(t.outAttr), t.outAnimAttr && this.animate(t.outAnimAttr, 100, "easeIn")), b.plotEventHandler(this, e,
									"DataPlotRollOut")
							}; G--;) B[G] && (o = B[G].config, a = M.getCleanValue(o.value), a = Number((0, i.toPrecision)(a, 10)), o.itemValue = a, c =
							B[G].graphics || (B[G].graphics = {}), h = o.rolloverProperties || {}, n = E.startAngle, v[o.id] = {
								index: G,
								config: o
							}, n += .2, l = !!_ && {
								opacity: Math.max(o.bgAlpha, o.borderAlpha) / 100
							}, d = {
								index: G,
								link: u = o.dataLink,
								value: o.itemValue,
								displayValue: o.displayValue,
								toolText: o.toolText,
								bgAlpha: o.bgAlpha,
								borderAlpha: o.borderAlpha,
								borderColor: o.borderColor,
								borderThickness: o.borderWidth,
								color: o.bgColor,
								editMode: o.editMode,
								id: o.id,
								radius: o.radius,
								showValue: o.showValue,
								sides: o.sides
							}, s = c.pointer, s = y.setAnimation({
								el: s || "polypath",
								attr: {
									polypath: [o.sides, L ? F - F * ((0, i.pluckNumber)(o.itemValue, O) - O) / (I - O) : F * ((0, i.pluckNumber)(o.itemValue,
										O) - O) / (I - O), R || 0, o.radius, n, 0],
									r: o.radius,
									fill: o.fillColor,
									stroke: o.pointerBorderColor,
									"stroke-width": o.borderWidth
								},
								css: u || o.editMode ? {
									cursor: "pointer",
									_cursor: "hand"
								} : {
									cursor: i.BLANK,
									_cursor: i.BLANK
								},
								label: "pointers",
								container: A,
								component: m
							}).show(), c.pointer || (c.pointer = s.on("fc-click", p).shadow(!!l, l && l.opacity).hover(g, f), s.show()), t || (s.data(
									"eventArgs", d).data("rolloverProperties", h), o._startAngle = n, o.editMode ? (o.index = G, o.editMode = !0) : o.editMode = !
								1, s.undrag(), o.editMode && s.drag(z, W, j, o, o, B[G])), V ? w.enableToolTip(s, o.toolText) : w.disableToolTip(s));
						m._drawBackground(), t ? m.drawPointerValues(e) : m._drawWidgetLabel(e)
					}, a.removeData = function (e) {
						var t, a, o = this.components.data,
							r = function () {
								this.hide()
							};
						this.removeDataArr || (this.removeDataArr = []);
						for (var i = 0; i < e; i++)(a = o[i]) && ((t = a.graphics).pointer && this.getFromEnv("animationManager").setAnimation({
							el: t.pointer,
							callback: r,
							component: this
						}), t.pointerValue && this.getFromEnv("animationManager").setAnimation({
							el: t.pointerValue,
							callback: r,
							component: this
						}), t.pointerValueCont && this.getFromEnv("animationManager").setAnimation({
							el: t.pointerValueCont,
							callback: r,
							component: this
						}));
						this.removeDataArr = this.removeDataArr.concat(o.splice(0, e))
					}, a._drawWidgetLabel = function (e) {
						var t, a, o, r, l, n, s, c, u, d, p, g, f, v, b, k, C, x, T, w, S, y, N, F, D, E, L, M = this.getFromEnv("chart"),
							R = this.getFromEnv("toolTipController"),
							_ = M.config,
							V = this.getFromEnv("number-formatter"),
							O = this.getFromEnv("scale"),
							I = this.getFromEnv("animationManager"),
							P = M.getChildren("canvas")[0],
							G = M.getChildContainer("datalabelsGroup"),
							B = P.getGraphicalElement("dataLabelContainer"),
							H = O.config.axisRange.min,
							W = O.config.axisRange.max,
							j = this.config,
							z = j.textDirection,
							U = this.getFromEnv("colorRange"),
							X = M.getFromEnv("dataSource").colorrange && U && U.getColorRangeArr(H, W),
							K = j.colorRangeStyle || {},
							Y = j.showvalue,
							J = M.getFromEnv("dataSource").trendpoints && M.getFromEnv("dataSource").trendpoints.point,
							Z = _.trendPointConfig,
							q = _.canvasWidth,
							$ = _.canvasHeight,
							Q = _.marginRight,
							ee = j.pointerOnOpp,
							te = j.valueInsideGauge,
							ae = j.showGaugeLabels,
							oe = j.isScaleReversed,
							re = _.dataLabelStyle,
							ie = !1,
							le = this.getFromEnv("smartLabel"),
							ne = (0, i.pluckNumber)(parseInt(re.fontHeight, 10), parseInt(re.lineHeight, 10), 12),
							se = j.currentValuePadding + .5 * ne,
							ce = j.currentTrendPadding + .5 * ne,
							ue = j.currentTrendPadding,
							he = {
								fontFamily: re.fontFamily,
								fontSize: re.fontSize,
								lineHeight: re.lineHeight,
								fontWeight: re.fontWeight,
								fontStyle: re.fontStyle
							},
							de = this.config.pointerArr && this.config.pointerArr.pointer,
							pe = this.components.data;
						if (B = I.setAnimation({
								el: B || "group",
								attr: {
									name: "label-container"
								},
								container: G,
								component: this
							}), G = I.setAnimation({
								el: G || "group",
								state: "initial",
								attr: {
									transform: ["T", _.canvasLeft, _.canvasTop]
								},
								label: "datalabel",
								component: this
							}), !P.getGraphicalElement("dataLabelContainer") && (B = P.addGraphicalElement("dataLabelContainer", B)), se = te === ee ? se -
							ne / 4 : se + ne / 4, le.useEllipsesOnOverflow(_.useEllipsesWhenOverflow), le.setStyle(he), w = le.getOriSize("W...").width,
							K.fontWeight = i.NORMAL, c = this.getPointerLabelXY = function (e, t, a, o, r) {
								return (S = (e - H) * q / (W - H)) + r > q + Q && (S = q - r + Q), {
									x: S,
									y: a ? t ? $ - o - se : $ + se : t ? se : -(se + o),
									align: m
								}
							}, u = function (e, t) {
								return a = (t - e) * q / (W - H), {
									x: (oe ? q - a - e * q / (W - H) : e * q / (W - H)) + a / 2,
									y: $ / 2,
									width: (t - e) * q / (W - H),
									height: $
								}
							}, de && de.length)
							for (n = de.length; n--;)
								if (pe[n] && (F = pe[n].config, 0 !== Y && F.displayValue !== h && (T = le.getOriSize(F.displayValue), F.setWidth && (T = le
										.getSmartText(F.displayValue, F.setWidth, T.height, !0)), d = this.getPointerLabelXY(F.itemValue, te, ee, T.height / 2,
										T.width / 2), F.isLabelString))) {
									for (ie = !1, k = 1; !ie && (p = de[n + k]);) p.isLabelString ? ie = !0 : k += 1;
									p && (g = le.getOriSize(p.displayValue), b = (v = c(p.y, te, ee, g.height / 2)).x - g.width / 2 - (d.x + T.width / 2), r =
										v.x - d.x, b < 0 && ((l = T.width + b) > r && (F.setWidth = l = r), l > w ? F.setWidth && F.setWidth <= l ? (f = le.getSmartText(
												F.displayValue, F.setWidth, T.height, !0), F.displayValue = f.text, f.tooltext && (F.originalText = f.tooltext)) : (f =
												le.getSmartText(F.displayValue, l, T.height, !0), F.displayValue = f.text, f.tooltext && (F.originalText = f.tooltext)) :
											(f = le.getSmartText(F.displayValue, w, T.height, !0), F.displayValue = f.text, f.tooltext && (F.originalText = f.tooltext),
												b = 2 * b + w - 4), F.setWidth = null, l = g.width + b - 4, p.setWidth = l > r ? r : l > w ? l : w)), F.setWidth && (f =
										le.getSmartText(F.displayValue, F.setWidth, T.height, !0), F.displayValue = f.text, f.tooltext && (F.originalText = f.tooltext),
										F.setWidth = null)
								}
						if (this.drawPointerValues(e), le.setStyle(K), X && ae)
							for (n = 0, s = X.length; n < s; n += 1) t = oe ? X[s - 1 - n] : X[n], o = (0, i.pluck)(t.label, t.name), T = (d = u(t.minvalue -
								H, t.maxvalue - H)).width - 4 > w && d.height - 4 > ne ? le.getSmartText(o, d.width - 4, d.height - 4) : le.getSmartText(o,
								d.width, d.height), y = {
								"text-anchor": m,
								"vertical-align": m,
								x: d.x,
								y: d.y,
								direction: z,
								fill: (0, i.convertColor)(K.color),
								text: T.text
							}, E = P.getGraphicalElement("colorRangeLabelsCont") && P.getGraphicalElement("colorRangeLabelsCont")[n], E = I.setAnimation({
								el: E || "group",
								attr: {
									name: "color-range-label"
								},
								component: this,
								container: B,
								label: "final"
							}), D = P.getGraphicalElement("colorRangeLabels") && P.getGraphicalElement("colorRangeLabels")[n], (D = I.setAnimation({
								el: D || "text",
								attr: y,
								css: K,
								component: this,
								container: E,
								label: "final"
							})).outlineText(j.showTextOutline, y.fill), P.getGraphicalElement("colorRangeLabels") && P.getGraphicalElement(
								"colorRangeLabels")[n] ? (D.show(), R.enableToolTip(D, T.tooltext)) : (E = P.addGraphicalElement("colorRangeLabelsCont", E, !
								0, n), D = P.addGraphicalElement("colorRangeLabels", D, !0, n));
						else n = 0;
						for (; P.getGraphicalElement("colorRangeLabelsCont") && P.getGraphicalElement("colorRangeLabelsCont")[n];) P.getGraphicalElement(
							"colorRangeLabelsCont")[n].hide(), n++;
						if (J)
							for (n = 0, s = Z.length; n < s; n += 1) {
								for ((N = Z[n]).displayValue = (0, i.pluck)(N.displayValue, V.dataLabels(N.startValue)), le.setStyle(N.style), ne = le.getOriSize(
										"Wg").height, T = le.getOriSize(N.displayValue), d = c(N.startValue, 0, !N.showOnTop), N.setWidth && (T = le.getSmartText(
										N.displayValue, N.setWidth, T.height, !0)), ie = !1, k = 1; !ie && (p = J[n + k]);) p.showOnTop === N.showOnTop ? ie = !0 :
									k += 1;
								p && (g = le.getOriSize(p.displayValue), (b = (v = c(p.startValue, 0, !p.showOnTop)).x - g.width / 2 - (d.x + T.width / 2)) <
										0 && (r = v.x - d.x, (l = T.width + b) > r && (N.setWidth = l = r), l > w ? N.setWidth && N.setWidth <= l ? (T = le.getSmartText(
											N.displayValue, N.setWidth, T.height, !0), N.displayValue = T.text, T.tooltext && (N.originalText = T.tooltext)) : (T =
											le.getSmartText(N.displayValue, T.width + b - 4, T.height, !0), N.displayValue = T.text, T.tooltext && (N.originalText =
												T.tooltext)) : (T = le.getSmartText(N.displayValue, w, T.height, !0), N.displayValue = T.text, T.tooltext && (N.originalText =
											T.tooltext), b = 2 * b + w - 4), N.setWidth = null, l = g.width + b - 4, p.setWidth = l > r ? r : l > w ? l : w)), N.setWidth &&
									(T = le.getSmartText(N.displayValue, N.setWidth, T.height, !0), N.displayValue = T.text, T.tooltext && (N.originalText = T.tooltext),
										N.setWidth = null), x = N.showOnTop ? -(ue + T.height / 2) : $ + ce, C = N.isTrendZone ? u(N.startValue, N.endValue).x : d
									.x, L = P.getGraphicalElement("trendTextElems") && P.getGraphicalElement("trendTextElems")[n], L = I.setAnimation({
										el: L || "text",
										attr: {
											x: C,
											y: x,
											text: N.displayValue,
											"text-anchor": A[d.align],
											fill: (0, i.convertColor)(N.textColor || K.color),
											"font-weight": "normal",
											direction: z,
											opacity: 1,
											title: N.originalText || i.BLANK
										},
										container: B,
										component: this,
										label: "final"
									}), P.getGraphicalElement("trendTextElems") && P.getGraphicalElement("trendTextElems")[n] || (L = P.addGraphicalElement(
										"trendTextElems", L, !0, n)), L.show()
							} else n = 0;
						for (; P.getGraphicalElement("trendTextElems") && P.getGraphicalElement("trendTextElems")[n];) P.getGraphicalElement(
							"trendTextElems")[n].hide(), n++
					}, a.drawPointerValues = function () {
						var e, t, a, o, r, l, n, s, c, u, d, p, g, f, m = this.getFromEnv("chart"),
							v = m.getChildContainer("datalabelsGroup"),
							b = this.components.data,
							k = this.config,
							C = k.showTooltip,
							x = this.getFromEnv("toolTipController"),
							T = k.pointerOnOpp,
							w = k.valueInsideGauge,
							S = k.textDirection,
							y = this.getFromEnv("animationManager"),
							N = this.getFromEnv("smartLabel"),
							F = this.config.pointerArr && this.config.pointerArr.pointer,
							D = m.config.dataLabelStyle,
							E = F && F.length,
							L = m.config,
							M = L.canvasWidth,
							R = L.marginLeft,
							_ = {
								fontFamily: D.fontFamily,
								fontSize: D.fontSize,
								lineHeight: D.lineHeight,
								fontWeight: D.fontWeight,
								fontStyle: D.fontStyle
							},
							V = this.pool;
						for ("initial" === m.state && y.setAnimation({
								state: "initial",
								el: v,
								attr: {
									opacity: 1
								},
								component: this
							}), N.setStyle(D); E--;) b[E] && (f = !1, d = b[E].graphics, n = (a = b[E].config).displayValue, t = a.showValue, l = a.dataLabelStyle,
							0 !== t && n !== h ? (u = (p = N.getOriSize(n)).height, (c = (p = N.getSmartText(n, L.width, u)).width / 2) > R + (s = this.getPointerLabelXY(
									a.itemValue, w, T, .5 * u, c)).x && (s.x = c - R), e = p.tooltext || h, g = {
									x: k.isScaleReversed ? M - s.x : s.x,
									y: s.y,
									"text-anchor": A[s.align],
									title: a.originalText || i.BLANK,
									text: p.text,
									fill: l.color,
									direction: S,
									"text-bound": [l.backgroundColor, l.borderColor, D.borderThickness, D.borderPadding, D.borderRadius, D.borderDash]
								}, r = y.setAnimation({
									el: d.pointerValueCont || V && V.pointerValueCont[0] || "group",
									attr: {
										name: "label-group"
									},
									container: v,
									component: this,
									label: "labelGroup"
								}).show(), (o = y.setAnimation({
									el: d.pointerValue || V && V.pointerValue[0] || "text",
									attr: g,
									css: _,
									container: r,
									component: this,
									label: "pointerValues"
								}).show()).outlineText(k.showTextOutline, g.fill), C ? x.enableToolTip(o, e) : x.disableToolTip(o), d.pointerValue || (V &&
									V.pointerValue[0] ? (V.pointerValue.splice(0, 1), V.pointerValueCont.splice(0, 1)) : f = !0), d.pointerValue = o, d.pointerValueCont =
								r, f || o.show()) : (d.pointerValue && d.pointerValue.hide(), d.pointerValueCont && d.pointerValueCont.hide(), d.pointerValue &&
								x.disableToolTip(d.pointerValue)))
					}, a.getDataLimits = function () {
						var e, t, a, o, r, s, c = this.config,
							u = this.getFromEnv("chart").getFromEnv("dataSource"),
							h = this.components.data || this.config.pointerArr && this.config.pointerArr.pointer || u.dials && u.dials.dial,
							d = u.colorrange,
							p = d && d.color,
							g = h && h.length,
							f = c.upperLimit,
							m = c.lowerLimit,
							v = -Infinity,
							b = +Infinity;
						for (e = 0; e < g; e++)(o = h[e].config.value) !== i.BLANK && (a = v = T(v, Number(o)), t = b = w(b, Number(o)));
						for (g = p && p.length, e = 0; e < g; e++) r = Number(p[e].maxvalue), s = Number(p[e].minvalue), f && r > f && (r = f), m && s <
							m && (s = m), b = (0, n["default"])([b, s]), v = (0, l["default"])([v, r]);
						return {
							forceMin: t !== b,
							forceMax: a !== v,
							max: v,
							min: b
						}
					}, a.updateData = function (e, t) {
						if (e === this.config.lastUpdatedObj) return !1;
						var a, o, r, l, n, s, c, u, g, f, m, v, b, k, C, x, T = this.getFromEnv("chart"),
							w = this.getFromEnv("number-formatter"),
							A = this.components.data,
							S = this.components.data,
							y = S && S.length || 0,
							N = {},
							F = null,
							D = [],
							E = this.getFromEnv("chart-attrib").plottooltext,
							L = e;
						for (L = L.data, C = t || T.get(d, p), c = L.length, l = 0; l < c; l++)(n = L[l].id) && (N[n] = L[l]);
						if (s = Object.keys(N).length, y) {
							for (; y--;) u = {}, x = {}, n = (g = A[y].config).id, f = void 0, f = s ? N[n] : L[y], f && (k = f.value, o = f.tooltext, a =
								f.label, r = f.showlabel, m = f.valuefontcolor, v = f.valuebgcolor, b = f.valuebordercolor, void 0 !== k && k !== i.BLANK ?
								(u.value = x.value = k, F = x.displayvalue = x.tooltext = w.dataLabels(x.value), x.hasNewData = !0) : x.value = g.formatedVal,
								m && (g.dataLabelStyle.color = (0, i.convertColor)(m)), v && (g.dataLabelStyle.backgroundColor = (0, i.convertColor)(v)), b &&
								(g.dataLabelStyle.borderColor = (0, i.convertColor)(b)), a && (x.displayvalue = a, x.hasNewData = !0), "0" === r && (x.displayvalue =
									h, x.hasNewData = !0), o && (x.hasNewData = !0), o = (0, i.getValidValue)((0, i.parseUnsafeString)((0, i.pluck)(o, E), !1)),
								x.hasNewData && (D[y] = x, g.value = x.value, g.displayValue = g.displayValue || "1" === r ? x.displayvalue : h, g.toolText =
									void 0 !== o ? (0, i.parseTooltext)(o, [1, 2], {
										formattedValue: F
									}, u) : F));
							return D.length && (this.config.lastUpdatedObj = L, this.draw(C, !0)), Boolean(D.length)
						}
					}, t
				}(c.ComponentInterface);
				S.prototype._configureDataLabelStyle = i.configureDataLabelStyle;
				var y = S;
				t["default"] = y
			},
			1067: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				var o = a(193),
					r = [{
						initialAttr: function () {
							return {
								opacity: 0
							}
						},
						finalAttr: function () {
							return {
								opacity: 1
							}
						}
					}],
					i = {
						"initial.dataset.hlineargauge": function () {
							return {
								"parentgroup.initial": function (e) {
									return [{
										initialAttr: {
											transform: e.attr.transform
										},
										finalAttr: {
											transform: e.attr.transform
										},
										slot: "initial"
									}]
								},
								"datalabel.initial": function (e) {
									return [{
										initialAttr: {
											transform: e.attr.transform
										},
										finalAttr: {
											transform: e.attr.transform
										}
									}]
								},
								"background.appearing": function () {
									return r[0].slot = o.INITIALSTR, r
								},
								"background.updating": null,
								"final.appearing": function () {
									return r[0].slot = o.FINALSTR, r
								},
								"final.updating": null,
								"pointers.appearing": function (e) {
									var t = e.component,
										a = t.config && t.config.isScaleReversed,
										o = e.attr.polypath.slice(0),
										r = t.getFromEnv("chart") && t.getFromEnv("chart").config && t.getFromEnv("chart").config.canvasWidth;
									return o[1] = a ? r : 0, [{
										initialAttr: {
											opacity: 0
										},
										finalAttr: {
											opacity: 1
										},
										slot: "initial"
									}, {
										initialAttr: {
											polypath: o
										},
										finalAttr: {
											opacity: 1
										},
										slot: "middle"
									}]
								},
								"pointers.updating": null,
								"pointerValues.appearing": function (e) {
									var t = e.component,
										a = t.config && t.config.isScaleReversed,
										o = t.getFromEnv("chart") && t.getFromEnv("chart").config && t.getFromEnv("chart").config.canvasWidth;
									return [{
										initialAttr: {
											opacity: 0
										},
										finalAttr: {
											opacity: 1
										},
										slot: "initial"
									}, {
										initialAttr: {
											x: a ? o : 0
										},
										finalAttr: {
											opacity: 1
										},
										slot: "middle"
									}]
								},
								"pointerValues.updating": null,
								"*": null
							}
						}
					};
				t["default"] = i
			},
			1068: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				var o = a(201),
					r = a(193),
					i = [{
						initialAttr: function () {
							return {
								opacity: 0
							}
						},
						finalAttr: function () {
							return {
								opacity: 1
							}
						}
					}],
					l = {
						"initial.dataset.angularGauge": function () {
							var e = this.config,
								t = (0, o.getDep)("redraphael", "plugin"),
								a = Math.PI / 180,
								l = t.vml ? -1.5 : 0,
								n = t.vml ? -1.5 : 0;
							return {
								"dialPath.appearing": function () {
									return [{
										initialAttr: {
											opacity: 0
										},
										finalAttr: {
											opacity: 1
										},
										slot: "initial"
									}, {
										initialAttr: {
											transform: "R" + e.gaugeStartAngle / a + "," + l + "," + n
										},
										finalAttr: {
											opacity: 1
										},
										slot: "middle"
									}]
								},
								"dialPath.updating": null,
								"text.appearing": function () {
									return i[0].slot = r.FINALSTR, i
								},
								"text.updating": null,
								"pivot.appearing": function () {
									return i[0].slot = r.INITIALSTR, i
								},
								"pivot.updating": null,
								"plotBackground.appearing": function () {
									return i[0].slot = r.INITIALSTR, i
								},
								"plotBackground.updating": null
							}
						}
					};
				t["default"] = l
			},
			1069: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = function (e) {
					var t = Math,
						a = t.pow,
						o = t.tan,
						r = t.acos,
						i = t.min,
						l = t.sqrt,
						n = "M",
						s = "L",
						c = "Q",
						u = e._cacher((function (e, t, o, r) {
							return l(a(o - e, 2) + a(r - t, 2))
						})),
						h = e._cacher((function (e, t, a, o, r) {
							var i, l = a - e,
								n = o - t;
							return {
								x: e + (l /= i = u(e, t, a, o)) * r,
								y: t + (n /= i) * r
							}
						}));
					e.define && e.define([{
						name: "trianglepath",
						trianglepath: function () {
							var t = this,
								a = arguments,
								o = e._lastArgIfGroup(a),
								r = t.path(o);
							return r.attr("trianglepath", [a[0], a[1], a[2], a[3], a[4], a[5], a[6] || 0, a[7] || 0, a[8] || 0])
						},
						fn: {
							sides: function () {
								var e = this._args;
								return [u(e[0], e[1], e[2], e[3]), u(e[2], e[3], e[4], e[5]), u(e[4], e[5], e[0], e[1])]
							},
							enclosedAngles: function () {
								var e = this._sides;
								return [r((a(e[0], 2) + a(e[2], 2) - a(e[1], 2)) / (2 * e[0] * e[2])), r((a(e[0], 2) + a(e[1], 2) - a(e[2], 2)) / (2 * e[
									0] * e[1])), r((a(e[2], 2) + a(e[1], 2) - a(e[0], 2)) / (2 * e[2] * e[1]))]
							},
							semiperimeter: function () {
								var e = this._sides || this.sides();
								return (e[0] + e[1] + e[2]) / 2
							}
						},
						ca: {
							trianglepath: function (e, t, a, r, u, d, p, g, f) {
								if (p || g || f) {
									this._args = arguments, this._sides = this.sides();
									var m, v, b, k = this.enclosedAngles(),
										C = this.semiperimeter();
									b = l(C * (C - this._sides[0]) * (C - this._sides[1]) * (C - this._sides[2])) / C, m = [i(p, b) / o(k[0] / 2), i(g, b) /
										o(k[1] / 2), i(f, b) / o(k[2] / 2)
									], v = [h(e, t, u, d, m[0]), h(e, t, a, r, m[0]), h(a, r, e, t, m[1]), h(a, r, u, d, m[1]), h(u, d, a, r, m[2]), h(u, d,
										e, t, m[2])], this.attr({
										path: [n, v[0].x, v[0].y, c, e, t, v[1].x, v[1].y, s, v[2].x, v[2].y, c, a, r, v[3].x, v[3].y, s, v[4].x, v[4].y, c,
											u, d, v[5].x, v[5].y, s, v[0].x, v[0].y
										]
									})
								} else this.attr({
									path: [n, e, t, s, a, r, u, d, "Z"]
								})
							}
						}
					}])
				}
			},
			1070: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1071))["default"];
				t["default"] = r
			},
			1071: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1072)),
					l = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).defaultSeriesType = "led", t.defaultPlotShadow = 1, t.realtimeEnabled = !0, t.chartleftmargin =
								15, t.chartrightmargin = 15, t.charttopmargin = 10, t.chartbottommargin = 10, t.showTooltip = 0, t.connectTickMarks = 0, t.isHorizontal = !
								0, t.config.isAxisOpposite = !1, t.config.scalePosition = "bottom", t.config.canBeScalePosition = "top", t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Hled"
						};
						var a = t.prototype;
						return a._feedAxesRawData = function () {
							var t = e.prototype._feedAxesRawData.call(this);
							return t[0].isReverse = !1, t
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this), this.config.friendlyName = "Vertical LED Gauge"
						}, a.getName = function () {
							return "Hled"
						}, t
					}(i["default"]);
				t["default"] = l
			},
			1072: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(1073),
					l = o(a(1049)),
					n = o(a(1074)),
					s = o(a(1046)),
					c = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).showRTvalue = !1, t.canvasPadding = !1, t.defaultSeriesType = "led", t.defaultPlotShadow = 1,
								t.realtimeEnabled = !0, t.chartleftmargin = 15, t.chartrightmargin = 15, t.charttopmargin = 10, t.chartbottommargin = 10, t.showTooltip =
								0, t.connectTickMarks = 0, t.isHorizontal = !1, t.config.isAxisOpposite = !0, t.config.scalePosition = "right", t.config.canBeScalePosition =
								"left", t.drawPlotlines = !1, t.drawPlotBands = !1, t.isAxisReverse = !1, t.isRealTime = !0, t.colorRange = !0, t.registerFactory(
									"dataset", s["default"], ["vCanvas"]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Vled"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "Vled"
						}, a.configureAttributes = function (t) {
							e.prototype.configureAttributes.call(this, t), i.configureAttributes.call(this)
						}, a._getData = function () {
							return i._getData.call(this)
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Vertical LED Gauge", t.hasLegend = !1, t.defaultDatasetType = "led", t.skipCanvasDrawing = !0, t.majorTMNumber = -
								1, t.majorTMHeight = 6, t.showTickMarks = 1, t.majorTMThickness = 1, t.minorTMNumber = 4, t.minorTMThickness = 1, t.tickMarkDistance =
								3, t.placeTicksInside = 0, t.placeValuesInside = 0
						}, a.getDSdef = function () {
							return n["default"]
						}, t
					}(l["default"]);
				t["default"] = c
			},
			1073: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t.configureAttributes = function () {
					var e = this.getFromEnv("dataSource").colorrange;
					e && e.color && e.color.length ? ((0, r.componentFactory)(this, i["default"], "colorRange", 1, [{
						colorRange: e,
						numberFormatter: this.getFromEnv("number-formatter")
					}]), this.addToEnv("colorRange", this.getChildren("colorRange") && this.getChildren("colorRange")[0])) : this.deleteFromEnv(
						"colorRange")
				}, t._getData = function () {
					var e, t, a = this.getDatasets();
					if (a && (t = a[0].components.data) && t[0]) return e = t[0].config, (0, r.pluckNumber)(e.setValue, e.itemValue)
				};
				var r = a(193),
					i = o(a(1008))
			},
			1074: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1075)),
					n = a(201),
					s = o(a(1077)),
					c = i.BLANK,
					u = i.preDefStr.colors.c000000,
					h = i.preDefStr.showHoverEffectStr,
					d = i.preDefStr.POSITION_MIDDLE,
					p = window,
					g = p.navigator.userAgent,
					f = "rgba(192,192,192," + (/msie/i.test(g) && !p.opera ? .002 : 1e-6) + ")",
					m = Math,
					v = m.round,
					b = m.max,
					k = i.regex.dropHash;
				(0, n.addDep)({
					name: "ledAnimation",
					type: "animationRule",
					extension: s["default"]
				});
				var C = function (e) {
					function t() {
						return e.apply(this, arguments) || this
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getType = function () {
						return "dataset"
					}, a.getName = function () {
						return "led"
					}, a.draw = function () {
						var e, t, a, o, r, l, n, s, c, d, p, g, m, C, x, T, w, A, S, y, N, F, D, E, L, M, R, _, V, O, I, P, G, B, H, W, j, z, U, X, K,
							Y, J, Z, q, $, Q, ee, te, ae, oe, re, ie, le, ne, se, ce = this.getFromEnv("chart"),
							ue = this.config,
							he = ce.getFromEnv("dataSource").chart,
							de = ce.config,
							pe = ce.getChildren("canvas")[0],
							ge = pe.getGraphicalElement(),
							fe = pe.config,
							me = ge.canvasBorderElement,
							ve = ge.colorRangeElems,
							be = ge.canvasElementPath,
							ke = ge.canvasHotElement,
							Ce = de.canvasLeft,
							xe = de.canvasRight,
							Te = de.canvasTop,
							we = de.canvasBottom,
							Ae = de.canvasWidth,
							Se = de.canvasHeight,
							ye = ce.getChildContainer().plotGroup,
							Ne = this.getFromEnv("scale"),
							Fe = Ne.getLimit().min,
							De = Ne.getLimit().max,
							Ee = (0, i.pluckNumber)(ce.getFromEnv("dataSource").chart.reverseaxis, ce.isAxisReverse),
							Le = ce.isHorizontal,
							Me = this.getFromEnv("color-manager"),
							Re = this.getFromEnv("number-formatter"),
							_e = ce.getFromEnv("animationManager"),
							Ve = ue.showHoverEffect,
							Oe = [],
							Ie = [],
							Pe = this.getContainer("trackerContainer"),
							Ge = ce.getChildContainer("trackerGroup"),
							Be = 0,
							He = !1;
						if (Pe || (Pe = this.addContainer("trackerContainer", _e.setAnimation({
								el: "group",
								attr: {
									name: "led-hot"
								},
								container: Ge,
								component: this
							}))), n = (0, i.pluckNumber)(he.showgaugeborder, 1), o = (0, i.pluck)(he.gaugebordercolor, ce.gaugeBorderColor, "333333"), n ?
							(0, i.pluckNumber)(he.gaugeborderthickness, ce.gaugeBorderThickness, 2) : 0, (0, i.pluck)(he.gaugeborderalpha, i.HUNDREDSTRING),
							fe.gaugeFillColor = D = (0, i.pluck)(he.gaugefillcolor, he.ledbgcolor, u), S = (0, i.pluckNumber)(he.usesamefillcolor, 0), y =
							(0, i.pluckNumber)(he.usesamefillbgcolor, S), ue.ledGap = N = (0, i.pluckNumber)(he.ledgap, 2), ue.ledSize = F = (0, i.pluckNumber)
							(he.ledsize, 2), fe.colorRangeFillMix = e = (0, i.getFirstDefinedValue)(he.colorrangefillmix, he.gaugefillmix, ce.colorRangeFillMix,
								"{light-10},{dark-10},{light-10},{dark-10}"), fe.colorRangeFillRatio = t = (0, i.getFirstDefinedValue)(he.colorrangefillratio,
								he.gaugefillratio, ce.colorRangeFillRatio, he.gaugefillratio, "0,10,80,10"), fe.colorRangeGetter = W = this.getFromEnv(
								"colorRange"), fe.colorArray = a = W && W.getColorRangeArr(Fe, De), o = (0, i.pluck)(o, u).replace(k, i.HASHSTRING), r = (0,
								i.pluckNumber)(he.colorrangeborderalpha, he.gaugeborderalpha, 100), l = (0, i.pluckNumber)(he.showshadow, 1), n = (0, i.pluckNumber)
							(he.showgaugeborder, 1), fe.colorRangeBorderThickness = s = n ? (0, i.pluckNumber)(he.colorrangeborderthickness, he.gaugeborderthickness,
								2) : 0, M = De - Fe, _ = Ce - (R = s / 2), V = Te - R, O = Ce + Ae + R, I = Te + Se + R, F += (L = (Le ? Ae : Se) - F) % (E =
								N + F || 1) / (P = parseInt(L / E, 10) + 1), ue.sizeGapSum = E = F + N, ue.perLEDValueLength = Z = M / P, G = Ce, B = Te, Y =
							(0, i.pluck)(he.clickurl), U = Re.getCleanValue(ce.getFromEnv("dataSource").value), S || y)
							for (d = 0, p = a.length; d < p; d += 1)
								if (U >= a[d].minvalue && U <= a[d].maxvalue) {
									j = a[d].code || Me.getPlotColor(d), X = d;
									break
								}
						for (a && a.length > 0 && (z = a[0].code || Me.getPlotColor(0)), q = Ee ? xe : Ce, $ = Ee ? Te : we, d = 0, p = a && a.length; d <
							p; d += 1) c = a[d], oe = c.minvalue - Fe, re = c.maxvalue - Fe, g = Ee && !Le ? {
								x: Ce,
								y: Te + oe * Se / (De - Fe),
								width: Ae,
								height: (re - oe) * Se / (De - Fe)
							} : Ee || Le ? Ee && Le ? {
								x: Ce + (Ae - re * Ae / (De - Fe)),
								y: Te,
								width: (re - oe) * Ae / (De - Fe),
								height: Se
							} : !Ee && Le ? {
								x: Ce + oe * Ae / (De - Fe),
								y: Te,
								width: (re - oe) * Ae / (De - Fe),
								height: Se
							} : void 0 : {
								x: Ce,
								y: Te + (Se - re * Se / (De - Fe)),
								width: Ae,
								height: (re - oe) * Se / (De - Fe)
							}, te = (Q = v((c.maxvalue - Fe) / Z)) - Be, Be = Q, ee = te * E, Le || Ee ? !Le && Ee ? (g.height = ee - N, g.y = $, $ += ee) :
							Le && !Ee ? (g.width = ee - N, g.x = q, q += ee) : Le && Ee && (g.width = ee - N, g.x = q - g.width, q -= ee) : (g.height =
								ee - N, g.y = $ - g.height, $ -= ee), c.x = g.x, c.y = g.y, c.width = g.width, c.height = g.height, m = S ? j : y && d > X ?
							z : z = c.code || Me.getPlotColor(d), C = (0, i.convertColor)((0, i.getColorCodeString)((0, i.pluck)(c.bordercolor, m), o), (
								0, i.pluckNumber)(c.borderalpha, r)), x = Me.parseColorMix(c.code, e), T = Me.parseAlphaList(c.alpha, x.length), w = (0, i.pluckNumber)
							(c.borderAlpha, r), A = T.split(i.COMMASTRING), A = b.apply(Math, A), A = b(s && w || 0, A), ae = {
								x: g.x,
								y: g.y,
								width: g.width < 0 ? 0 : g.width,
								height: g.height < 0 ? 0 : g.height,
								r: 0,
								"stroke-width": 0,
								stroke: C,
								fill: (0, i.toRaphaelColor)({
									FCcolor: {
										color: m,
										ratio: t,
										alpha: T,
										angle: 180
									}
								})
							}, K = _e.setAnimation({
								el: ve && ve[d] || "rect",
								attr: ae,
								container: ye,
								component: this,
								label: "plotBackground"
							}).toBack(), ve && ve[d] || (pe.addGraphicalElement("colorRangeElems", K, !0), K.shadow({
								apply: l,
								opacity: A / 100
							})), Oe.push({
								"stroke-width": 0,
								fill: (0, i.toRaphaelColor)({
									FCcolor: {
										color: (0, i.getDarkColor)((0, i.pluck)(m, u), 80) + i.COMMASTRING + (0, i.getLightColor)((0, i.pluck)(m, u), 80),
										alpha: (0, i.pluckNumber)(c.alpha, 100),
										angle: Le ? 90 : 0
									}
								})
							}), Ie.push({
								"stroke-width": 0,
								fill: (0, i.toRaphaelColor)({
									FCcolor: {
										color: (0, i.pluck)(m, u),
										alpha: (0, i.pluckNumber)(c.alpha, 100)
									}
								})
							});
						for (p = (ve = pe.getGraphicalElement("colorRangeElems") || []).length - 1; p >= d;) pe.removeGraphicalElement(ve[p]), p--;
						for (J = {
								link: Y,
								value: U
							}, ae = {
								x: Ce,
								y: Te,
								width: Ae,
								height: Se,
								"stroke-width": 0,
								fill: f
							}, ke ? _e.setAnimation({
								el: ke,
								attr: ae,
								container: Pe,
								component: this
							}) : (ke = ge.canvasHotElement = _e.setAnimation({
								el: "rect",
								attr: ae,
								container: Pe,
								component: this
							}), He = !0), ke.data("eventArgs", J).data(h, Ve).data("setRolloverAttr", Oe).data("setRolloutAttr", Ie), He && (Y && ke.on(
								"fc-click", (function (e) {
									ce.plotEventHandler(this, e)
								})), ke.hover((ie = ve, se = 0, function () {
								if (0 !== (ne = this).data(h))
									for (se = 0, le = ie.length; se < le; se += 1) ie[se].attr(ne.data("setRolloverAttr")[se])
							}), function (e) {
								var t, a, o = 0;
								return function () {
									if (0 !== (a = this).data(h))
										for (o = 0, t = e.length; o < t; o += 1) e[o].attr(a.data("setRolloutAttr")[o])
								}
							}(ve))), Le ? G += E - N / 2 : B += E - N / 2, H = [], ae = {
								path: ["M", _, V, "L", O, V, O, I, _, I, "Z"],
								stroke: (0, i.convertColor)(o, r),
								"stroke-width": s,
								"stroke-linecap": "butt"
							}, me ? _e.setAnimation({
								el: me,
								attr: ae,
								component: this
							}) : ge.canvasBorderElement = _e.setAnimation({
								el: "path",
								attr: ae,
								container: ye,
								component: this,
								label: "plotBackground"
							}).shadow({
								apply: l
							}).toBack(), d = 1; d < P; d += 1) Le ? (H.push("M", G, B, "L", G, B + Se), G += E) : (H.push("M", G, B, "L", G + Ae, B), B +=
							E);
						ae = {
							path: H,
							stroke: (0, i.convertColor)(D, 100),
							"stroke-width": N,
							"stroke-linecap": "butt"
						}, be ? _e.setAnimation({
							el: be,
							attr: ae,
							component: this
						}) : (be = _e.setAnimation({
							el: "path",
							attr: ae,
							container: ye,
							component: this,
							label: "plotBackground"
						}), pe.addGraphicalElement("canvasElementPath", be)), this.drawShade()
					}, a.drawShade = function () {
						var e, t, a, o, r, l, n, s, u, h, p, g, f, m, b, k = this.config,
							C = this.components.data,
							x = this.getFromEnv("chart"),
							T = x.getChildren("caption")[0],
							w = x.getChildren("subCaption")[0],
							A = T && T.config.text && T.config.height || 0,
							S = T && T.config.text && T.config.captionPadding || 0,
							y = w && w.config.text && w.config.height || 0,
							N = x.getFromEnv("dataSource").chart,
							F = x.getFromEnv("animationManager"),
							D = this.getFromEnv("toolTipController"),
							E = this.getFromEnv("smartLabel"),
							L = x.config,
							M = L.canvasLeft,
							R = L.canvasTop,
							_ = L.canvasHeight,
							V = L.canvasWidth,
							O = x.getChildContainer().plotGroup,
							I = this.getContainer("container"),
							P = this.getFromEnv("number-formatter"),
							G = k.isAxisReverse = (0, i.pluckNumber)(N.reverseaxis, x.isaxisreverse),
							B = k.isHorizontal = x.isHorizontal,
							H = C[0],
							W = H.graphics,
							j = H && H.config,
							z = this.getContainer("dataLabelContainer"),
							U = x.getChildContainer("datalabelsGroup"),
							X = x.getChildren("canvas")[0],
							K = x.config.dataLabelStyle,
							Y = k.heightUsed,
							J = this.getFromEnv("scale").getLimit().min;
						E.setStyle(K), o = x.getChildren("canvas")[0].config.gaugeFillColor, I || (I = this.addContainer("container", F.setAnimation({
								el: "group",
								attr: {
									name: "shade"
								},
								container: O,
								component: this
							}))), z || (z = this.addContainer("dataLabelContainer", F.setAnimation({
								el: "group",
								attr: {
									name: "datalabel"
								},
								container: U,
								component: this,
								label: "labelGroup"
							}))), r = P.getCleanValue(j.setValue), H.graphics || (H.graphics = {}), g = (r - J) / k.perLEDValueLength, f = v(g) * k.sizeGapSum -
							k.ledGap, m = Math.ceil(_ - f), b = Math.ceil(V - f), G && !B ? n = {
								x: M,
								y: R + f,
								width: V,
								height: m,
								r: 0,
								"stroke-width": 0,
								fill: (0, i.convertColor)(o, 50)
							} : G || B ? !G && B ? n = {
								x: M + f,
								y: R,
								width: b,
								height: _,
								r: 0,
								"stroke-width": 0,
								fill: (0, i.convertColor)(o, 50)
							} : G && B && (n = {
								x: M,
								y: R,
								width: b,
								height: _,
								r: 0,
								"stroke-width": 0,
								fill: (0, i.convertColor)(o, 50)
							}) : n = {
								x: M,
								y: R,
								width: V,
								height: m,
								r: 0,
								"stroke-width": 0,
								fill: (0, i.convertColor)(o, 50)
							}, H.graphics.element = F.setAnimation({
								el: H.graphics.element || "rect",
								attr: n,
								container: I,
								component: this,
								label: "plotRect"
							}), p = j.setTooltext === i.BLANK || void 0 === j.setTooltext ? j.toolTipValue : j.setTooltext, k.showTooltip ? D.enableToolTip(
								X._graphics.canvasHotElement, p) : D.disableToolTip(X._graphics.canvasHotElement), l = (s = parseInt(K.lineHeight, 10)) > Y ?
							L.height - L.marginBottom - Y + s / 2 : L.height - L.marginBottom - s / 2, l -= L.borderWidth, l -= (x._manageActionBarSpace &&
								x._manageActionBarSpace(.225 * j.availableHeight) || {}).bottom, 0 === T.config.isOnTop && (l -= A + y + S), W = H.graphics,
							j.displayValue !== c && void 0 !== j.displayValue && k.showValue ? (a = (e = E.getSmartText(j.displayValue, L.width, k.heightUsed))
								.text, t = e.tooltext || c, n = {
									text: a,
									"text-anchor": d,
									x: V / 2 + M,
									y: l,
									"vertical-align": d,
									fill: K.color,
									direction: j.textDirection,
									"text-bound": [K.backgroundColor, K.borderColor, K.borderThickness, K.borderPadding, K.borderRadius, K.borderDash]
								}, W.label = F.setAnimation({
									el: W.label || "text",
									attr: n,
									container: z,
									component: this,
									label: "text"
								}), k.showTooltip ? D.enableToolTip(W.label, t) : D.disableToolTip(W.label), (u = W.label.getBBox()).x + L.marginLeft < 0 &&
								(h = u.width - L.marginLeft, L.width < h && (h = L.width - L.marginLeft), n = {
									x: h / 2
								}, F.setAnimation({
									el: W.label,
									attr: n,
									component: this,
									label: "text"
								}))) : (W.label && D.disableToolTip(W.label), W.label = W.label && F.setAnimation({
								el: W.label,
								component: this
							}))
					}, t
				}(l["default"]);
				t["default"] = C
			},
			1075: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = a(201),
					n = a(208),
					s = o(a(1076)),
					c = (0, l.getDep)("redraphael", "plugin"),
					u = i.BLANK,
					h = i.preDefStr.showHoverEffectStr,
					d = i.preDefStr.ROUND,
					p = i.preDefStr.miterStr,
					g = i.preDefStr.colors,
					f = Math,
					m = f.max,
					v = f.min,
					b = f.abs,
					k = g.FFFFFF,
					C = void 0 !== window.document.documentElement.ontouchstart,
					x = {
						"true": void 0,
						"false": "crisp"
					},
					T = i.preDefStr.POSITION_START,
					w = i.preDefStr.POSITION_MIDDLE,
					A = i.preDefStr.PLOTFILLCOLOR_STR,
					S = C ? i.TOUCH_THRESHOLD_PIXELS : i.CLICK_THRESHOLD_PIXELS;
				(0, l.addDep)({
					name: "bulletAnimation",
					type: "animationRule",
					extension: s["default"]
				});
				var y = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this).addData = function () {}, t.removeData = function () {}, t.components = {}, t
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getType = function () {
						return "dataset"
					}, a.getName = function () {
						return "bullet"
					}, a.configure = function (e) {
						if (!e) return !1;
						this.config.JSONData = e;
						var t, a, o, r, l, n, s, c, u, h = this.getFromEnv("chart"),
							p = this.config,
							g = this.config.JSONData,
							f = h.getFromEnv("dataSource").chart,
							v = this.getFromEnv("color-manager"),
							b = p.plotColor = v.getColor(A),
							C = (0, i.pluckNumber)(g.dashed, f.plotborderdashed),
							x = this.components.data,
							T = h.isBar,
							w = h.config.is3D,
							S = h.isStacked;
						this.setState("visible", 1 === (0, i.pluckNumber)(g.visible, 1)), p.targetCapStyle = u = (0, i.pluck)(f.targetcapstyle, d).toLowerCase(),
							"butt" !== u && u !== d && "square" !== u && "inherit" !== u && (p.targetCapStyle = d), p.upperLimit = (0, i.pluckNumber)(f.upperlimit),
							p.lowerLimit = (0, i.pluckNumber)(f.lowerlimit), p.initAnimation = !0, t = p.showplotborder = (0, i.pluckNumber)(f.showplotborder,
								0), p.plotDashLen = a = (0, i.pluckNumber)(f.plotborderdashlen, 5), p.plotDashGap = o = (0, i.pluckNumber)(f.plotborderdashgap,
								4), p.plotfillAngle = (0, i.pluckNumber)(360 - f.plotfillangle, T ? 180 : 90), p.plotFillAlpha = l = (0, i.pluck)(g.alpha, f
								.plotfillalpha, i.HUNDREDSTRING), p.plotColor = b = (0, i.pluck)(f.plotfillcolor, b), p.isRoundEdges = r = (0, i.pluckNumber)
							(f.useroundedges, 0), p.plotRadius = (0, i.pluckNumber)(f.useRoundEdges, p.isRoundEdges ? 1 : 0), p.plotFillRatio = (0, i.pluck)
							(g.ratio, f.plotfillratio), p.plotgradientcolor = (0, i.getDefinedColor)(f.plotgradientcolor, v.getColor("plotGradientColor")),
							p.showPlotBorderOnHover = (0, i.pluckNumber)(f.showplotborderonhover, 0), p.plotBorderAlpha = (0, i.pluck)(f.plotborderalpha,
								l, i.HUNDREDSTRING), p.plotBorderColor = (0, i.pluck)(f.plotbordercolor, w ? k : v.getColor("plotBorderColor")), p.plotBorderThickness =
							t ? (0, i.pluckNumber)(f.plotborderthickness, 0) : 0, p.plotBorderDashStyle = C ? (0, i.getDashStyle)(a, o) : "none", p.showValue =
							(0, i.pluckNumber)(g.showvalue, f.showvalue, 1), p.valuePadding = (0, i.pluckNumber)(f.valuepadding, 2), p.showShadow = r ||
							w ? (0, i.pluckNumber)(f.showshadow, 1) : (0, i.pluckNumber)(f.showshadow, v.getColor("showShadow")), p.showHoverEffect = (0,
								i.pluckNumber)(f.plothovereffect, f.showhovereffect, 0), p.showTooltip = (0, i.pluckNumber)(f.showtooltip, 1), p.stack100Percent =
							n = (0, i.pluckNumber)(h.stack100percent, f.stack100percent, 0), p.definedGroupPadding = m((0, i.pluckNumber)(f.plotspacepercent),
								0), p.plotSpacePercent = m((0, i.pluckNumber)(f.plotspacepercent, 20) % 100, 0), p.maxColWidth = (0, i.pluckNumber)(T ? f.maxbarheight :
								f.maxcolwidth, 50), p.showPercentValues = (0, i.pluckNumber)(f.showpercentvalues, S && n ? 1 : 0), p.showPercentInToolTip =
							(0, i.pluckNumber)(f.showpercentintooltip, S && n ? 1 : 0), p.plotPaddingPercent = (0, i.pluckNumber)(f.plotpaddingpercent),
							p.rotateValues = (0, i.pluckNumber)(f.rotatevalues) ? 270 : 0, p.placeValuesInside = (0, i.pluckNumber)(f.placevaluesinside,
								0), p.use3DLighting = (0, i.pluckNumber)(f.use3dlighting, 1), x || (x = this.components.data = []), p.plotAsDot = c = (0, i.pluckNumber)
							(f.plotasdot, 0), p.plotFillPercent = (0, i.pluckNumber)(f.plotfillpercent, c ? 25 : 40), p.targetFillPercent = (0, i.pluckNumber)
							(f.targetfillpercent, 60), p.targetThickness = (0, i.pluckNumber)(f.targetthickness, 3), s = p.targetalpha = (0, i.pluckNumber)
							(f.targetalpha, 100), p.rawTargetColor = (0, i.pluck)(f.targetcolor, v.getColor(A)), p.targetColor = (0, i.convertColor)(p.rawTargetColor,
								s), this._setConfigure()
					}, a._setConfigure = function (e) {
						var t, a, o, r, l, n, s, c, u, h, d, p, g, f, b, k, C, x, T, w, A, S, y, N, F, D, E, L, M, R, _, V, O, I, P, G, B, H, W, j, z =
							this.getFromEnv("chart"),
							U = this.config,
							X = this.config.JSONData,
							K = e || X.data,
							Y = K && K.length,
							J = e && e.data.length || Y,
							Z = z.getFromEnv("dataSource").chart,
							q = this.getFromEnv("color-manager"),
							$ = U.showplotborder,
							Q = U.showPlotBorderOnHover,
							ee = U.plotColor,
							te = (0, i.parseUnsafeString)((0, i.pluck)(Z.tooltipsepchar, i.COMMASPACE)),
							ae = (0, i.pluckNumber)(Z.seriesnameintooltip, 1),
							oe = U.plotBorderThickness,
							re = U.isRoundEdges,
							ie = U.showHoverEffect,
							le = U.plotFillAngle,
							ne = U.plotBorderAlpha,
							se = U.plotBorderDashStyle,
							ce = this.components.data,
							ue = z.isBar,
							he = z.config.is3D,
							de = -Infinity,
							pe = Infinity,
							ge = this.getFromEnv("number-formatter"),
							fe = function (e) {
								var o;
								return U.showTooltip ? null === t ? o = !1 : void 0 !== e ? (l = [1, 2, 3, 4, 5, 6, 7, 26, 27], a = {
									formattedValue: t,
									targetValue: g.target,
									targetDataValue: g.toolTipValueTarget
								}, o = (0, i.parseTooltext)(e, l, a, h, Z, X)) : (ae && (r = (0, i.getFirstValue)(X && X.seriesname)), o = r ? r + te : i.BLANK,
									o += g.toolTipValue ? g.toolTipValue : i.BLANK) : o = !1, o
							};
						for (ce || (ce = this.components.data = []), V = 0; V < J; V++) h = e ? e && e.data[V] : K[V], p = ce[V], g = p && p.config, p ||
							(p = ce[V] = {}), p.config || (g = ce[V].config = {}), g.showValue = (0, i.pluckNumber)(h.showvalue, U.showValues), g.valuePadding =
							(0, i.pluckNumber)(Z.valuepadding, 2), g.setValue = d = ge.getCleanValue(h.value), g.target = O = ge.getCleanValue(h.target),
							g.setLink = (0, i.pluck)(h.link), g.toolTipValue = E = ge.dataLabels(d), g.toolTipValueTarget = ge.dataLabels(O), g.setDisplayValue =
							L = (0, i.parseUnsafeString)(h.displayvalue), g.displayValue = (0, i.pluck)(h.label, L, E), M = (0, i.pluckNumber)(h.dashed),
							R = (0, i.pluckNumber)(h.dashlen, void 0), _ = s = (0, i.pluckNumber)(h.dashgap, s), de = m(de, d, O), pe = v(pe, d, O), g.plotBorderDashStyle =
							u = 1 === M ? (0, i.getDashStyle)(R, _) : 0 === M ? "none" : se, ee = (0, i.pluck)(h.color, U.plotColor), c = (0, i.pluck)(h.alpha,
								U.plotFillAlpha), d < 0 && !re && (n = le, le = ue ? 180 - le : 360 - le), g.colorArr = f = (0, i.getColumnColor)(ee, c,
								void 0, le, re, U.plotBorderColor, ne.toString(), ue ? 1 : 0, !!he), 0 !== ie && (b = (0, i.pluck)(h.hovercolor, X.hovercolor,
									Z.plotfillhovercolor, Z.columnhovercolor, ee), k = (0, i.pluck)(h.hoveralpha, X.hoveralpha, Z.plotfillhoveralpha, Z.columnhoveralpha,
									c), !(0, i.pluck)(h.hovergradientcolor, X.hovergradientcolor, Z.plothovergradientcolor, U.plotgradientcolor) && i.BLANK, C =
								(0, i.pluck)(h.hoverratio, X.hoverratio, Z.plothoverratio, void 0), x = (0, i.pluckNumber)(360 - h.hoverangle, 360 - X.hoverangle,
									360 - Z.plothoverangle, le), T = (0, i.pluck)(h.borderhovercolor, X.borderhovercolor, Z.plotborderhovercolor, Z.plotfillhovercolor,
									U.plotBorderColor), w = (0, i.pluck)(h.borderhoveralpha, X.borderhoveralpha, Z.plotborderhoveralpha, ne, c), A = (0, i.pluckNumber)
								(h.borderhoverthickness, X.borderhoverthickness, Z.plotborderhoverthickness, oe), S = (0, i.pluckNumber)(h.borderhoverdashed,
									X.borderhoverdashed, Z.plotborderhoverdashed), y = (0, i.pluckNumber)(h.borderhoverdashgap, X.borderhoverdashgap, Z.plotborderhoverdashgap,
									void 0), N = (0, i.pluckNumber)(h.borderhoverdashlen, X.borderhoverdashlen, Z.plotborderhoverdashlen, s), F = S ? (0, i.getDashStyle)
								(N, y) : u, 1 === ie && b === ee && (b = (0, i.getDarkColor)(b, 90)), D = (0, i.getColumnColor)(b, k, C, x, re, T, w.toString(),
									ue ? 1 : 0, !1), g.setPlotRolloutAttr = {
									fill: he ? [(0, i.toRaphaelColor)(f[0]), !U.use3DLighting] : (0, i.toRaphaelColor)(f[0]),
									stroke: $ && (0, i.toRaphaelColor)(f[1]),
									"stroke-width": oe,
									"stroke-dasharray": u
								}, g.setPlotRolloverAttr = {
									fill: he ? [(0, i.toRaphaelColor)(D[0]), !U.use3DLighting] : (0, i.toRaphaelColor)(D[0]),
									stroke: (0, i.toRaphaelColor)(D[1]),
									"stroke-width": Q ? A || 1 : A,
									"stroke-dasharray": F
								}), 0 !== ie && (ie || Z.targethovercolor || Z.targethoveralpha || 0 === Z.targethoveralpha || Z.targethoverthickness || 0 ===
								Z.targethoverthickness) && (ie = !0, I = {}, P = {}, G = (0, i.pluckNumber)(Z.targethoverthickness, U.targetThickness + 2),
								U.targetThickness !== G && (I["stroke-width"] = G, P["stroke-width"] = U.targetThickness), B = (0, i.pluck)(Z.targethovercolor,
									"{dark-10}"), H = (0, i.pluckNumber)(Z.targethoveralpha, U.targetalpha), G && (P.stroke = U.targetColor, W = /\{/.test(B),
									I.stroke = (0, i.convertColor)(W ? q.parseColorMix((0, i.pluck)(Z.targetcolor, ee), B)[0] : B, H)), g.tagetHoverAttr = I, g
								.targetOutAttr = P), t = g.toolTipValue, o = (0, i.getValidValue)((0, i.parseUnsafeString)((0, i.pluck)(h.tooltext, X.plottooltext,
								Z.plottooltext), !1)), g.toolText = fe(o), g.setTooltext = g.toolText, n && (le = n), j = (0, i.getValidValue)((0, i.parseUnsafeString)
								((0, i.pluck)(h.tooltexttarget, X.targettooltext, Z.targettooltext), !1)), g.toolTextTarget = fe(j);
						U.maxValue = de, U.minValue = pe
					}, a._manageSpace = function (e) {
						var t, a, o, r = this.config,
							l = this.components.data,
							n = this.getFromEnv("chart"),
							s = n.config,
							c = n.getFromEnv("smartLabel"),
							u = s.dataLabelStyle,
							h = (0, i.pluckNumber)(parseInt(u.lineHeight, 10), 12),
							d = e,
							p = r.valuePadding,
							g = 0,
							f = 0;
						for (o = (t = l[f]) && t.config, c.useEllipsesOnOverflow(s.useEllipsesWhenOverflow), c.setStyle(u); f < 1; f += 1) r.showValue &&
							(a = c.getOriSize(o.toolTipValue), o.toolTipValue === i.BLANK && (a = {
								height: h
							}), a.height > 0 && (g = a.height + p), g > d && (g = d));
						return r.heightUsed = g, {
							top: 0,
							bottom: g
						}
					}, a._manageSpaceHorizontal = function (e) {
						var t, a, o, r = this.config,
							l = this.components.data,
							n = this.getFromEnv("chart"),
							s = n.config,
							c = n.getFromEnv("smartLabel"),
							h = s.dataLabelStyle,
							d = (0, i.pluckNumber)(parseInt(h.lineHeight, 10), 12),
							p = e,
							g = r.valuePadding,
							f = 0,
							m = 0;
						for (o = (t = l[m]) && t.config, c.useEllipsesOnOverflow(s.useEllipsesWhenOverflow), c.setStyle(h); m < 1; m += 1) o && o.displayValue !==
							u && void 0 !== o.displayValue && r.showValue && (a = c.getOriSize(o.displayValue), o.displayValue === i.BLANK && (a = {
								height: d
							}), a.height > 0 && (f = a.width + g + 2), f > p && (f = p));
						return r.widthUsed = f, {
							top: 0,
							right: f
						}
					}, a.updateData = function (e, t, a) {
						var o = this.config,
							r = o.maxValue,
							i = o.prevMin,
							l = this.getFromEnv("chart"),
							n = this.groupManager || this,
							s = this.getFromEnv("scale");
						this._setConfigure(e, t), this.setMaxMin(), o.maxValue === r && o.minValue === i || (this.config.maxminFlag = !0), a && (l._setAxisLimits(),
							s.draw(), n.draw())
					}, a.setMaxMin = function () {
						var e, t, a = this.components.data,
							o = this.config,
							r = a.length,
							i = -Infinity,
							l = +Infinity;
						for (e = 0; e < r; e++) a[e] && (t = a[e].config, i = m(i, t.setValue, t.target), l = v(l, t.setValue, t.target));
						o.maxValue = i, o.minValue = l
					}, a.draw = function () {
						var e, t, a, o, r, l, n, s, c, u, h, d, p, g, f, v, b, k, C, x, T, w, A, S, y, N = this.getFromEnv("chart"),
							F = N.getFromEnv("dataSource").chart,
							D = N.config,
							E = N.getChildren("canvas")[0],
							L = E.config,
							M = this.getGraphicalElement("backgroundRect") || [],
							R = D.canvasLeft,
							_ = D.canvasTop,
							V = D.canvasWidth,
							O = D.canvasHeight,
							I = E.getContainer("canvasGroup"),
							P = this.getFromEnv("scale"),
							G = P.getLimit().min,
							B = P.getLimit().max,
							H = N.isHorizontal,
							W = this.getFromEnv("color-manager"),
							j = N.getFromEnv("animationManager");
						for (t = H ? 270 : 180, L.colorRangeFillMix = a = (0, i.getFirstDefinedValue)(F.colorrangefillmix, F.gaugefillmix, N.colorRangeFillMix,
								"{light-10},{dark-10},{light-10},{dark-10}"), L.colorRangeFillRatio = o = (0, i.getFirstDefinedValue)(F.colorrangefillratio,
								F.gaugefillratio, N.colorRangeFillRatio, F.gaugefillratio, "0,10,80,10"), L.colorRangeGetter = r = N.getFromEnv("colorRange"),
							L.colorArray = l = r && r.getColorRangeArr(G, B), n = (0, i.pluck)(F.colorrangebordercolor, F.gaugebordercolor, "{dark-20}"),
							s = (0, i.pluckNumber)(F.colorrangeborderalpha, F.gaugeborderalpha, 100), c = (0, i.pluckNumber)(F.showshadow, 1), u = (0, i.pluckNumber)
							(F.showgaugeborder, F.showcolorrangeborder, 0), L.colorRangeBorderThickness = h = u ? (0, i.pluckNumber)(F.colorrangeborderthickness,
								F.gaugeborderthickness, 2) : 0, f = N.getFromEnv("dataSource").colorrange && l && l.length || 0, p = 0, g = 0; p < f; p += 1
						) d = l[p], S = d.minvalue - G, y = d.maxvalue - G, v = H ? H ? {
							x: R + S * V / (B - G),
							y: _,
							width: (y - S) * V / (B - G),
							height: O
						} : void 0 : {
							x: R,
							y: _ + (O - y * O / (B - G)),
							width: V,
							height: (y - S) * O / (B - G)
						}, d.x = v.x, d.y = v.y, d.width = v.width, d.height = v.height, b = d.code, k = (0, i.convertColor)((0, i.getColorCodeString)
							((0, i.pluck)(d.bordercolor, b), n), (0, i.pluckNumber)(d.borderalpha, s)), C = W.parseColorMix(d.code, a), x = W.parseAlphaList(
							d.alpha, C.length), T = (0, i.pluckNumber)(d.borderAlpha, s), w = x.split(i.COMMASTRING), w = m.apply(Math, w), w = m(h && T ||
							0, w), e = {
							x: v.x,
							y: v.y,
							width: v.width,
							height: v.height,
							r: 0,
							"stroke-width": h,
							stroke: k,
							fill: (0, i.toRaphaelColor)({
								FCcolor: {
									color: C.toString(),
									ratio: o,
									alpha: x,
									angle: t
								}
							})
						}, A = j.setAnimation({
							el: M[p] || "rect",
							attr: e,
							container: I,
							component: this,
							doNotRemove: !0,
							label: "backgroundRect"
						}), !M[p] && this.addGraphicalElement("backgroundRect", A, !0), A.show(), A.shadow({
							apply: c,
							opacity: w / 100
						}), g++;
						for (f = M && M.length; f > g;) M && M[f - 1] && this.removeGraphicalElement(M[f - 1]), f--;
						this.drawPlot()
					}, a.drawPlot = function () {
						var e, t, a, o, r, l, n, s, d, g, f, m, v, k, C, A, y, N, F, D, E, L, M, R, _, V, O, I, P, G, B, H, W, j, z, U, X, K, Y, J =
							this.config,
							Z = this.getState("visible"),
							q = this.getFromEnv("chart"),
							$ = q.getChildren("caption")[0],
							Q = q.getChildren("subCaption")[0],
							ee = $ && $.config.text && $.config.height || 0,
							te = $ && $.config.text && $.config.captionPadding || 0,
							ae = Q && Q.config.text && Q.config.height || 0,
							oe = this.getFromEnv("toolTipController"),
							re = q.config,
							ie = re.canvasLeft,
							le = re.canvasRight,
							ne = re.canvasTop,
							se = re.canvasBottom,
							ce = re.canvasHeight,
							ue = re.canvasWidth,
							he = this.getFromEnv("smartLabel"),
							de = this.getFromEnv("scale"),
							pe = q.getChildContainer().plotGroup,
							ge = c,
							fe = J.showTooltip,
							me = this.components.data,
							ve = J.showShadow,
							be = J.plotBorderThickness,
							ke = J.plotRadius,
							Ce = this.getContainer("container"),
							xe = this.getContainer("targetContainer"),
							Te = this.getContainer("dataLabelContainer"),
							we = this.getContainer("shadowContainer"),
							Ae = this.getContainer("shadowTargetContainer"),
							Se = !1,
							ye = q.getChildContainer("datalabelsGroup"),
							Ne = q.config.dataLabelStyle,
							Fe = q.getFromEnv("animationManager"),
							De = J.heightUsed,
							Ee = J.lowerLimit,
							Le = J.showHoverEffect,
							Me = function (e) {
								q.plotEventHandler(this, e)
							},
							Re = function (e) {
								return function (t) {
									0 !== this.data(h) && e.attr(this.data("setRolloverAttr")), q.plotEventHandler(this, t, "DataPlotRollOver")
								}
							},
							_e = function (e) {
								return function (t) {
									0 !== this.data(h) && e.attr(this.data("setRolloutAttr")), q.plotEventHandler(this, t, "DataPlotRollOut")
								}
							},
							Ve = function () {
								this.hide()
							};
						for (N = Fe.setAnimation({
								el: Ce || "group",
								attr: {
									name: "bar"
								},
								component: this,
								container: pe,
								doNotRemove: !0,
								label: "group"
							}), Ce || (N = this.addContainer("container", N)), D = Fe.setAnimation({
								el: Te || "group",
								attr: {
									name: "datalabel"
								},
								component: this,
								container: ye,
								doNotRemove: !0,
								label: "labelGroup"
							}), Te || (D = this.addContainer("dataLabelContainer", D)), F = Fe.setAnimation({
								el: xe || "group",
								attr: {
									name: "target"
								},
								container: pe,
								doNotRemove: !0,
								component: this,
								label: "group"
							}), xe || (F = this.addContainer("targetContainer", F)), E = Fe.setAnimation({
								el: we || "group",
								attr: {
									name: "shadow"
								},
								component: this,
								container: pe,
								doNotRemove: !0,
								label: "group"
							}), we || (E = this.addContainer("shadowContainer", E.toBack()), Z || E.hide()), L = Fe.setAnimation({
								el: Ae || "group",
								attr: {
									name: "shadow"
								},
								component: this,
								container: pe,
								doNotRemove: !0,
								label: "group"
							}), Ae || (L = this.addContainer("shadowTargetContainer", L.toBack()), Z || L.hide()), he.setStyle(Ne), t = 0; t < 1; t++)(C =
								(y = (m = me[t]) && m.config).setValue) < 0 && (Se = !0), k = y.setLink, M = y.colorArr, z = !1, m.graphics || (me[t].graphics = {}),
							A = y.displayValue, q.isHorizontal ? (g = J.plotFillPercent / 100 * ce, r = b(ne + se) / 2 - g / 2, J.plotAsDot ? (o = de.getPixel(
									C) - g / 2, B = g) : (U = Ee && Ee <= C && de.config.axisRange.min >= 0 ? Ee : 0, o = Se ? de.getPixel(C) : de.getPixel(U),
									B = Se ? de.getPixel(0) - de.getPixel(C) : de.getPixel(C) - de.getPixel(U)), o = (l = ge.crispBound(o, r, B, g, be)).x, r =
								l.y, d = l.width, g = l.height, f = y.toolText === i.BLANK ? y.toolTipValue : y.toolText, R = y.plotBorderDashStyle, e = {
									x: o,
									y: r,
									width: d || 1,
									height: g,
									r: ke,
									fill: (0, i.toRaphaelColor)(M[0]),
									stroke: (0, i.toRaphaelColor)(M[1]),
									"stroke-width": be,
									"stroke-dasharray": R,
									"stroke-linejoin": p,
									visibility: Z
								}, null !== C && (m.graphics.element && m.graphics.element.show(), (k || fe) && g < S && (r -= (S - g) / 2, g = S)), y.elemCreated =
								void 0 !== m.graphics.element, C ? v = m.graphics.element = Fe.setAnimation({
									el: m.graphics.element || "rect",
									attr: e,
									container: N,
									component: this,
									label: "plotRect"
								}) : m.graphics.element && Fe.setAnimation({
									el: m.graphics.element,
									component: this,
									doNotRemove: !0,
									callback: Ve,
									label: "plotRect"
								}), v && v.shadow({
									opacity: ve
								}, E).data("BBox", l), y.target && (f = y.toolTipValueTarget, V = J.targetFillPercent / 100 * ce, _ = ["M", O = I = de.getPixel(
									y.target), P = (ne + se) / 2 - V / 2, "L", I, G = P + V], K = {
									stroke: J.targetColor,
									"stroke-width": J.targetThickness,
									"stroke-linecap": J.targetCapStyle,
									path: _,
									"shape-rendering": x[!1]
								}, m.graphics.targetElement && m.graphics.targetElement.show()), z = void 0 === m.graphics.targetElement, Y = m.graphics.targetElement =
								Fe.setAnimation({
									el: m.graphics.targetElement || "path",
									attr: K,
									container: F,
									component: this,
									doNotRemove: !0,
									callback: y.target ? i.stubFN : Ve,
									label: "path"
								}), y.target && (v = m.graphics.targetElement), H = parseInt(Ne.lineHeight, 10), r = .5 * (ne + ce), A !== u && void 0 !== A &&
								J.showValue && (A = (s = he.getSmartText(A, J.widthUsed, re.height)).text, n = s.tooltext, X = {
									text: A,
									"text-anchor": T,
									x: le + J.valuePadding + 2,
									y: r,
									"vertical-align": i.POSITION_TOP,
									fill: Ne.color,
									direction: y.textDirection,
									"text-bound": [Ne.backgroundColor, Ne.borderColor, Ne.borderThickness, Ne.borderPadding, Ne.borderRadius, Ne.borderDash]
								}, m.graphics.label && m.graphics.label.show()), m.graphics.label = Fe.setAnimation({
									el: m.graphics.label || "text",
									attr: X,
									component: this,
									container: D,
									doNotRemove: !0,
									callback: A && J.showValue ? i.stubFN : Ve,
									label: "text"
								}), (W = m.graphics.label.getBBox()).x + re.marginLeft < 0 && (j = W.width - re.marginLeft, re.width < j && (j = re.width -
									re.marginLeft), X.x = j / 2, Fe.setAnimation({
									el: m.graphics.label,
									attr: X,
									component: this,
									doNotRemove: !0,
									callback: A && J.showValue ? i.stubFN : Ve,
									label: "text"
								}))) : (B = J.plotFillPercent / 100 * ue, o = b(ie + le) / 2 - B / 2, J.plotAsDot ? (r = de.getPixel(C) - B / 2, g = B) : (J
									.base = U = Ee && Ee <= C && de.config.axisRange.min >= 0 ? Ee : 0, r = Se ? de.getPixel(0) : de.getPixel(C), g = Se ? de.getPixel(
										C) - de.getPixel(0) : de.getPixel(Ee && Ee <= C && de.config.axisRange.min >= 0 ? Ee : 0) - r), o = (l = ge.crispBound(o,
									r, B, g, be)).x, r = l.y, d = l.width, g = l.height, f = y.toolText === i.BLANK ? y.toolTipValue : y.toolText, R = y.plotBorderDashStyle,
								e = {
									x: o,
									y: r,
									width: d,
									height: g || 1,
									r: ke,
									fill: (0, i.toRaphaelColor)(M[0]),
									stroke: (0, i.toRaphaelColor)(M[1]),
									"stroke-width": be,
									"stroke-dasharray": R,
									"stroke-linejoin": p,
									visibility: Z
								}, m._xPos = o, m._yPos = r + g, m._height = g, m._width = d, null !== C && (m.graphics.element && m.graphics.element.show(),
									(k || fe) && g < S && (r -= (S - g) / 2, g = S)), y.elemCreated = void 0 !== m.graphics.element, C ? v = m.graphics.element =
								Fe.setAnimation({
									el: m.graphics.element || "rect",
									attr: e,
									container: N,
									component: this,
									label: "plotRect"
								}) : m.graphics.element && Fe.setAnimation({
									el: m.graphics.element,
									label: "plotRect",
									doNotRemove: !0,
									callback: Ve,
									component: this
								}), v && v.shadow({
									opacity: ve
								}, E).data("BBox", l), y.target && (f = y.toolTipValueTarget, I = (O = (ie + le) / 2 - (V = J.targetFillPercent / 100 * ue) /
									2) + V, _ = ["M", O, P = G = de.getPixel(y.target), "L", I, G], K = {
									stroke: J.targetColor,
									"stroke-width": J.targetThickness,
									"stroke-linecap": J.targetCapStyle,
									path: _,
									"shape-rendering": x[!1]
								}, m.graphics.targetElement && m.graphics.targetElement.show()), z = void 0 === m.graphics.targetElement, Y = m.graphics.targetElement =
								Fe.setAnimation({
									el: m.graphics.targetElement || "path",
									attr: K,
									container: F,
									component: this,
									doNotRemove: !0,
									callback: y.target ? i.stubFN : Ve,
									label: "path"
								}), r = (H = parseInt(Ne.lineHeight, 10)) > De ? re.height - re.marginBottom - De + H / 2 : re.height - re.marginBottom - H /
								2, r -= re.borderWidth, r -= (q._manageActionBarSpace && q._manageActionBarSpace(.225 * y.availableHeight) || {}).bottom, 0 ===
								$.config.isOnTop && (r -= ee + ae + te), A !== u && void 0 !== A && J.showValue && (A = (s = he.getSmartText(A, re.width, De))
									.text, n = s.tooltext || u, X = {
										text: A,
										"text-anchor": w,
										x: ue / 2 + ie,
										y: r,
										"vertical-align": w,
										fill: Ne.color,
										direction: y.textDirection,
										"text-bound": [Ne.backgroundColor, Ne.borderColor, Ne.borderThickness, Ne.borderPadding, Ne.borderRadius, Ne.borderDash]
									}, m.graphics.label && m.graphics.label.show()), m.graphics.label = Fe.setAnimation({
									el: m.graphics.label || "text",
									attr: X,
									component: this,
									container: D,
									doNotRemove: !0,
									callback: A && J.showValue ? i.stubFN : Ve,
									label: "text"
								}), (W = m.graphics.label.getBBox()).x + re.marginLeft < 0 && (j = W.width - re.marginLeft, re.width < j && (j = re.width -
									re.marginLeft), X.x = j / 2, Fe.setAnimation({
									el: m.graphics.label,
									attr: X,
									component: this,
									doNotRemove: !0,
									callback: A && J.showValue ? i.stubFN : Ve,
									label: "text"
								}))), a = {
								showValue: J.showValue,
								plotAsDot: J.plotAsDot,
								plotFillPercent: J.plotFillPercent,
								plotFillColor: J.plotColor,
								plotFillAlpha: J.plotFillAlpha,
								showPlotBorder: J.showplotborder,
								plotBorderColor: J.plotBorderColor,
								plotBorderThickness: J.plotBorderThickness,
								plotBorderAlpha: J.plotBorderAlpha,
								target: y.target,
								targetColor: J.rawTargetColor,
								targetThickness: J.targetThickness,
								targetFillPercent: J.targetFillPercent,
								targetCapStyle: J.targetCapStyle
							}, m.graphics.element && (m.graphics.element.data(h, Le).data("setRolloverAttr", y.setPlotRolloverAttr || {}).data(
								"setRolloutAttr", y.setPlotRolloutAttr || {}).data("eventArgs", a), y.elemCreated || m.graphics.element.on("fc-click", Me).hover(
								Re(m.graphics.element), _e(m.graphics.element)), fe ? (oe.enableToolTip(Y, f), oe.enableToolTip(m.graphics.element, y.toolText),
								oe.enableToolTip(m.graphics.label, n)) : (oe.disableToolTip(Y), oe.disableToolTip(m.graphics.element), oe.disableToolTip(m.graphics
								.label))), z && Y.on("fc-click", Me).hover(Re(Y), _e(Y)), Y.shadow({
								opacity: ve
							}, E).data("BBox", l).data("eventArgs", a).data("groupId", void 0).data(h, Le).data("setRolloverAttr", y.tagetHoverAttr).data(
								"setRolloutAttr", y.targetOutAttr)
					}, a.getDataLimits = function () {
						var e, t, a, o = this.config,
							r = this.pointerArr && this.pointerArr.pointer,
							i = this.getFromEnv("chart").getFromEnv("dataSource").colorrange,
							l = i && i.color,
							n = r && r.length,
							s = o.upperLimit,
							c = o.lowerLimit,
							u = o.maxValue,
							h = o.minValue;
						for (n = l && l.length, e = 0; e < n; e++) t = Number(l[e].maxvalue), a = Number(l[e].minvalue), s && t > s && (t = s), c && a <
							c && (a = c), u = m(u, t), h = v(h, a);
						return {
							forceMin: !0,
							forceMax: !0,
							max: u,
							min: h
						}
					}, t
				}(n.ComponentInterface);
				t["default"] = y
			},
			1076: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				var o = a(193),
					r = [{
						initialAttr: function () {
							return {
								opacity: 0
							}
						},
						finalAttr: function () {
							return {
								opacity: 1
							}
						}
					}],
					i = {
						"initial.dataset.bullet": function () {
							var e = this.config,
								t = this.getFromEnv("chart"),
								a = this.getFromEnv("scale"),
								i = a.max,
								l = a.min,
								n = i <= 0 && l < 0 ? i : i > 0 && l >= 0 ? l : 0,
								s = a.yBasePos = a.getPixel(n);
							return {
								"plotRect.appearing": function () {
									var o, r = t.isHorizontal;
									return e.plotAsDot || (s = a.getPixel(e.base)), o = r ? {
										width: 0
									} : {
										height: 0,
										y: s
									}, [{
										initialAttr: function () {
											return o
										},
										slot: "middle"
									}]
								},
								"plotRect.updating": null,
								"path.appearing": function () {
									return r[0].slot = o.MIDDLESTR, r
								},
								"path.updating": null,
								"text.appearing": function () {
									return r[0].slot = o.FINALSTR, r
								},
								"text.updating": null,
								"labelGroup.appearing": function () {
									return r[0].slot = o.FINALSTR, r
								},
								"labelGroup.updating": null,
								"backgroundRect.appearing": function () {
									return r[0].slot = o.INITIALSTR, r
								},
								"backgroundRect.updating": null
							}
						}
					};
				t["default"] = i
			},
			1077: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				var o = a(193),
					r = [{
						initialAttr: function () {
							return {
								opacity: 0
							}
						},
						finalAttr: function () {
							return {
								opacity: 1
							}
						}
					}],
					i = {
						"initial.dataset.led": function () {
							var e = this.config,
								t = this.getFromEnv("chart").config,
								a = t.canvasLeft,
								i = t.canvasTop,
								l = t.canvasHeight,
								n = t.canvasWidth;
							return {
								"plotRect.appearing": function () {
									var t, o = e.isAxisReverse,
										r = e.isHorizontal;
									return o && !r ? t = {
										y: i,
										height: l
									} : o || r ? !o && r ? t = {
										x: a,
										width: n
									} : o && r && (t = {
										width: n
									}) : t = {
										height: l
									}, [{
										initialAttr: {
											opacity: 0
										},
										finalAttr: {
											opacity: 1
										},
										slot: "initial"
									}, {
										initialAttr: t,
										finalAttr: {
											opacity: 1
										},
										slot: "middle"
									}]
								},
								"plotRect.updating": null,
								"text.appearing": function () {
									return r[0].slot = o.FINALSTR, r
								},
								"text.updating": null,
								"plotBackground.appearing": function () {
									return [Object.assign({}, r[0], {
										slot: "initial"
									})]
								},
								"plotBackground.updating": null
							}
						}
					};
				t["default"] = i
			},
			1078: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1072))["default"];
				t["default"] = r
			},
			1079: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1080))["default"];
				t["default"] = r
			},
			1080: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1081)),
					n = o(a(1049)),
					s = o(a(1066)),
					c = a(1060),
					u = i.BLANK,
					h = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).showRTvalue = !1, t.canvasPadding = !1, t.isHorizontal = !0, t.config.isAxisOpposite = !1, t.config
								.scalePosition = "bottom", t.config.canBeScalePosition = "top", t.drawPlotlines = !1, t.drawPlotBands = !1, t.isAxisReverse = !
								1, t.minorTMNumber = 4, t.isRealTime = !0, t.colorRange = !0, t.rtParserModify = !0, t.registerFactory("dataset", (function (e) {
									var t = e.getFromEnv("dataSource").pointers;
									(0, i.datasetFactory)(e, s["default"], "dataset", 1, [t])
								}), ["vCanvas"]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Hlineargauge"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "Hlineargauge"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Horizontal Linear Gauge", t.hasLegend = !1, t.defaultDatasetType = "hlineargauge", t.skipCanvasDrawing = !0
						}, a.configure = function (t) {
							e.prototype.configure.call(this, t);
							var a = this.getFromEnv("dataSource").colorrange;
							a && a.color && a.color.length ? ((0, i.componentFactory)(this, l["default"], "colorRange", 1, [{
								colorRange: a,
								numberFormatter: this.getFromEnv("number-formatter")
							}]), this.addToEnv("colorRange", this.getChildren("colorRange")[0])) : this.deleteFromEnv("colorRange")
						}, a._configueTrendPoints = function () {
							var e, t, a, o, r, l = this.getFromEnv("dataSource"),
								n = this.config,
								s = n.style,
								c = l.trendpoints && l.trendpoints.point,
								h = this.getFromEnv("scale").config,
								d = h.axisRange,
								p = d.max,
								g = d.min,
								f = h.scaleFactor || 1,
								m = this.getFromEnv("color-manager"),
								v = n.trendPointConfig = [],
								b = l.chart,
								k = c.length;
							for (s.trendStyle = {
									fontFamily: s.outCanfontFamily,
									color: s.outCancolor,
									fontSize: s.outCanfontSize
								}, t = 0; t < k; t++) e = c[t], r = (a = (0, i.pluckNumber)(e.startvalue, e.value)) !== (o = (0, i.pluckNumber)(e.endvalue, a)),
								a <= p && a >= g && o <= p && o >= g && v.push({
									startValue: a,
									endValue: o,
									tooltext: (0, i.getValidValue)((0, i.parseUnsafeString)(e.markertooltext, !1)),
									displayValue: (0, i.getValidValue)((0, i.parseUnsafeString)(e.displayvalue), r ? u : this.getFromEnv("number-formatter").scale(
										a)),
									showOnTop: (0, i.pluckNumber)(e.showontop, b.ticksbelowgauge, 1),
									color: (0, i.pluck)(e.color, m.getColor("trendLightColor")),
									textColor: e.color,
									alpha: (0, i.pluckNumber)(e.alpha, 99),
									thickness: (0, i.pluckNumber)(e.thickness, 1),
									dashStyle: Number(e.dashed) ? (0, i.getDashStyle)(e.dashlen || 2, e.dashgap || 2) : i.BLANK,
									useMarker: (0, i.pluckNumber)(e.usemarker, 0),
									markerColor: (0, i.convertColor)((0, i.pluck)(e.markercolor, e.color, m.getColor("trendLightColor")), 100),
									markerBorderColor: (0, i.convertColor)((0, i.pluck)(e.markerbordercolor, e.bordercolor, m.getColor("trendDarkColor")), 100),
									markerRadius: (0, i.pluckNumber)((0, i.pluckNumber)(e.markerradius) * f, 5),
									markerToolText: (0, i.getFirstValue)(e.markertooltext),
									trendValueDistance: (0, i.pluckNumber)((0, i.pluckNumber)(e.trendvaluedistance) * f, d.tickInterval),
									isTrendZone: r
								});
							i.stableSort && (0, i.stableSort)(n.trendPointConfig, (function (e, t) {
								return e.startValue - t.startValue
							}))
						}, a._getData = function (e, t) {
							return c._getData.call(this, e, t)
						}, a._setData = function (e, t) {
							c._setData.call(this, e, t)
						}, a._getDataForId = function (e, t) {
							return c._getDataForId.call(this, e, t)
						}, a._setDataForId = function (e, t) {
							c._setDataForId.call(this, e, t)
						}, t
					}(n["default"]);
				t["default"] = h
			},
			1081: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = a(208),
					n = (0, i.getComparatorFN)(!0, "minvalue"),
					s = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a.getType = function () {
							return "colorComponent"
						}, a.getName = function () {
							return "colorGradient"
						}, a.configure = function (e) {
							var t, a, o, r, l, s, c, u, h, d, p = this,
								g = p.colorArr,
								f = p.getFromEnv("color-manager"),
								m = p.getFromEnv("number-formatter"),
								v = e.colorRange && (0, i.extend2)({}, e.colorRange).color,
								b = f.getColor("paletteColors");
							if (delete p.defaultAsigned, b instanceof Array || (b = f.getPlotColor(0)), v && v.length > 0) {
								for (r = l = v.length - 1; r >= 0; r -= 1)(a = v[r]) && (a.minvalue = m.getCleanValue(a.minvalue), a.maxvalue = m.getCleanValue(
										a.maxvalue), null === a.minvalue && (null !== a.maxvalue ? a.minvalue = a.maxvalue : r !== l && v.splice(r, 1)), void 0 !==
									a.label && (a.label = (0, i.parseUnsafeString)(a.label)), void 0 !== a.name && (a.name = (0, i.parseUnsafeString)(a.name)),
									null !== a.maxvalue && a.minvalue > a.maxvalue && (s = a.minvalue, a.minvalue = a.maxvalue, a.maxvalue = s));
								for (v.sort(n), v[0].code || (v[0].code = b[0]), void 0 === (0, i.getValidValue)(v[0].alpha) && (v[0].alpha = i.HUNDREDSTRING),
									r = 0, l = v.length - 1; r < l; r += 1)
									if (d = r + 1, a = v[r], (o = v[d]).code || (o.code = b[d]), void 0 === (0, i.getValidValue)(o.alpha) && (o.alpha = i.HUNDREDSTRING),
										null === a.maxvalue && (a.maxvalue = o.minvalue), a.maxvalue > o.minvalue) {
										if (a.maxvalue > o.maxvalue) {
											for ((c = (0, i.extend2)(a)).maxvalue = a.maxvalue, h = c.minvalue = o.maxvalue, u = r + 2; u < l && v[u].minvalue < h;) u +=
												1;
											v.splice(u, 0, c), l += 1
										}
										a.maxvalue = o.minvalue
									}
								null === (a = v[r]).maxvalue && (a.maxvalue = a.minvalue)
							}
							v && v.length || (t || (t = {
								code: "CCCCCC",
								alpha: "100",
								bordercolor: "000000",
								borderalpha: "100"
							}), v = [t], p.defaultAsigned = !0), p.colorArr = v || g
						}, a.getColorObj = function (e) {
							for (var t, a, o = this.colorArr, r = 0, i = o.length, l = {}; r < i; r += 1) {
								if (l.index = r, t = o[r], a = o[r + 1], e < t.minvalue) return l.nextObj = t, l;
								if (e >= t.minvalue && e <= t.maxvalue) return l.colorObj = t, a && e === a.minvalue && (l.nextObj = a, l.isOnMeetPoint = !0),
									l;
								l.prevObj = t
							}
							return l.index = r - 1, l
						}, a.getColorRangeArr = function (e, t) {
							var a, o, r, l, n, s, c, u, h = this.colorArr,
								d = [],
								p = e,
								g = t;
							if (!this.defaultAsigned && (p > g && (a = p, p = g, g = a), p < g && (l = this.getColorObj(p), s = this.getColorObj(g), l &&
									s))) {
								for (n = p, o = l.index, r = s.index; o <= r; o += 1)(c = (0, i.extend2)({}, h[o])).minvalue !== n && (c.minvalue = n), d.push(
									c), u = c, n = c.maxvalue;
								u.maxvalue = g
							}
							return d
						}, t
					}(l.ComponentInterface);
				t["default"] = s
			},
			1082: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1083))["default"];
				t["default"] = r
			},
			1083: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1084)),
					n = o(a(1046)),
					s = o(a(1049)),
					c = i.preDefStr.gaugeFillColorStr,
					u = i.preDefStr.gaugeBorderColorStr,
					h = function (e) {
						return null != e
					},
					d = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).showRTvalue = !1, t.canvasPadding = !1, t.defaultPaletteOptions = (0, i.extend2)((0, i.extend2)
									({}, i.defaultGaugePaletteOptions), {
										gaugeBorderColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
										gaugeFillColor: ["999999", "ADB68F", "A2C4C8", "FDB548", "FF7CA0"],
										periodColor: ["EEEEEE", "ECEEE6", "E6ECF0", "FFF4E6", "FFF2F5"]
									}, !1, !0), t.isHorizontal = !1, t.config.isAxisOpposite = !0, t.config.scalePosition = "right", t.config.canBeScalePosition =
								"left", t.hasCanvas = !0, t.drawPlotlines = !1, t.drawPlotBands = !1, t.isAxisReverse = !1, t.isRealTime = !0, t.registerFactory(
									"dataset", n["default"], ["vCanvas"]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Thermometer"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "Thermometer"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.alignCaptionWithCanvas = 1, t.friendlyName = "Horizontal Linear Gauge", t.hasLegend = !1, t.defaultDatasetType =
								"thermometer", t.animationeffect = "easeOut", t.skipCanvasDrawing = !0
						}, a._getData = function () {
							var e = this.getChildren("dataset");
							if (e && e[0]) return e[0].config.value
						}, a._parseSpecialConfig = function () {
							var e, t = this.config,
								a = this.getFromEnv("dataSource").chart,
								o = this.getFromEnv("number-formatter"),
								r = this.getFromEnv("color-manager");
							t.use3DLighting = (0, i.pluckNumber)(a.use3dlighting, 1), t.thmOriginX = (0, i.pluckNumber)(a.thmoriginx, a.gaugeoriginx), t.thmOriginY =
								(0, i.pluckNumber)(a.thmoriginy, a.gaugeoriginy), t.thmBulbRadius = (0, i.pluckNumber)(o.getCleanValue(a.thmbulbradius, !0)),
								t.thmHeight = (0, i.pluckNumber)(o.getCleanValue((0, i.pluckNumber)(a.thmheight, a.gaugeheight), !0)), t.origW = (0, i.pluckNumber)
								(a.origw), t.origH = (0, i.pluckNumber)(a.origh), t.xDefined = h(t.thmOriginX), t.yDefined = h(t.thmOriginY), t.rDefined = h(
									t.thmBulbRadius), t.hDefined = h(t.thmHeight), t.gaugeFillColor = (0, i.pluck)(a.gaugefillcolor, a.thmfillcolor, r.getColor(
									c)), t.gaugeFillAlpha = (0, i.pluckNumber)(a.gaugefillalpha, a.thmfillalpha, i.HUNDREDSTRING), t.showGaugeBorder = (0, i.pluckNumber)
								(a.showgaugeborder, 1), e = t.showGaugeBorder ? (0, i.pluckNumber)(a.gaugeborderalpha, 40) : 0, t.gaugeBorderColor = (0, i.convertColor)
								((0, i.pluck)(a.gaugebordercolor, r.getColor(u)), e), t.gaugeBorderThickness = (0, i.pluckNumber)(a.gaugeborderthickness, 1),
								t.gaugeContainerColor = (0, i.pluck)(a.thmglasscolor, (0, i.getLightColor)(t.gaugeFillColor, 30))
						}, a.allocatePosition = function () {
							var e = this.config,
								t = e.canvasLeft,
								a = e.canvasRight,
								o = e.canvasTop,
								r = e.canvasWidth,
								i = e.canvasHeight,
								l = e.canvasBottom;
							e.gaugeStartX = t, e.gaugeEndX = a, e.gaugeStartY = o, e.gaugeEndY = l, e.gaugeCenterX = t + .5 * r, e.gaugeCenterY = o + .5 *
								i, e.gaugeRadius = .5 * r
						}, a.getDSdef = function () {
							return l["default"]
						}, t
					}(s["default"]);
				t["default"] = d
			},
			1084: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = a(201),
					n = o(a(1085)),
					s = o(a(1056)),
					c = i.preDefStr.configStr,
					u = i.preDefStr.POSITION_TOP,
					h = i.preDefStr.POSITION_MIDDLE,
					d = "M",
					p = "A",
					g = "L",
					f = "Z",
					m = window,
					v = m.navigator.userAgent,
					b = "rgba(192,192,192," + (/msie/i.test(v) && !m.opera ? .002 : 1e-6) + ")";
				(0, l.addDep)({
					name: "thermometerAnimation",
					type: "animationRule",
					extension: n["default"]
				});
				var k = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this).addData = i.stubFN, t.removeData = i.stubFN, t
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getName = function () {
						return "thermometer"
					}, a.getType = function () {
						return "dataset"
					}, a._manageSpace = function () {
						var e, t, a, o, r, l = this.config,
							n = this.getFromEnv("chart").config,
							s = n.width,
							c = n.height,
							u = n.canvasWidth,
							h = n.canvasHeight,
							d = n.canvasLeft,
							p = n.canvasRight,
							g = n.canvasTop,
							f = n.xDefined,
							m = n.yDefined,
							v = n.rDefined,
							b = n.hDefined,
							k = n.thmOriginX,
							C = n.thmOriginY,
							x = n.thmBulbRadius,
							T = n.thmHeight,
							w = function (e, t, a, o) {
								var r = t,
									l = e;
								return r = (0, i.pluckNumber)(r, o), l = (0, i.pluckNumber)(l, a), r && l ? l / a == r / o ? a / l : Math.min(a / l, o / r) :
									1
							}(n.origW, n.origH, s, c),
							A = 0,
							S = 0,
							y = 0,
							N = 0;
						return h -= o = this._getLabelSpace(), S += o, v ? x *= w : (x = Math.min(u / 2, .13 * (0, i.pluckNumber)(T, h)), v = !0), n.effectiveR =
							x, t = 2 * (e = .643 * x), a = 1.766 * x, A += e, g += e, h -= e, f ? r = (k *= w) - e - d : (r = (p - d) / 2 - e) + t > u &&
							(r = u - t), y += r, d += r, N += (u -= r) - t, m && (C *= w), b ? (T *= w, m ? A += C - T - g : C = g + T) : m ? T = C - g :
							C = g + (T = Math.max(h - a, 3 * x)), S += g + h - C, l.thmBulbRadius = x, l.thmHeight = T, {
								top: A,
								bottom: S,
								left: y,
								right: N
							}
					}, a.draw = function () {
						var e, t, a, o, r, l, n, s, m, v, k, C, x, T, w, A, S, y, N, F, D, E, L, M, R, _, V, O, I, P, G, B, H, W = this,
							j = W.config,
							z = W.getFromEnv("smartLabel"),
							U = W.getFromEnv("chart"),
							X = U.getChildContainer("datalabelsGroup"),
							K = U.getChildContainer("trackerGroup"),
							Y = W.getFromEnv("toolTipController"),
							J = W.getFromEnv("scale"),
							Z = U.getChildContainer().plotGroup,
							q = U.get(c),
							$ = q.canvasLeft,
							Q = q.canvasTop,
							ee = q.canvasHeight,
							te = q.effectiveR || 10,
							ae = .643 * te,
							oe = q.use3DLighting,
							re = $ + ae,
							ie = Q - ae,
							le = ee,
							ne = Math.abs(q.width - q.canvasRight - $),
							se = ie + ae,
							ce = se + le,
							ue = ce + .766 * te,
							he = (0, i.pluckNumber)(j.value, J.getLimit().min),
							de = .33 * ae,
							pe = ie + de,
							ge = J.getPixel(he),
							fe = .9 * ae,
							me = ae - de,
							ve = te + fe - ae,
							be = re - ae,
							ke = re + ae,
							Ce = re - me,
							xe = re + me,
							Te = re - fe,
							we = re + fe,
							Ae = parseInt(re - .6 * ae, 10),
							Se = re + ae / 2,
							ye = j.thmBaseY = ue - Math.abs(Math.sqrt(ve * ve - fe * fe)),
							Ne = W.getContainer("container"),
							Fe = W.getGraphicalElement("fluid"),
							De = W.getGraphicalElement("topLightGlow"),
							Ee = W.getGraphicalElement("topLight"),
							Le = W.getGraphicalElement("label"),
							Me = W.getContainer("dataLabelContainer"),
							Re = W.getGraphicalElement("canvasBorderElement"),
							_e = W.getGraphicalElement("bulbBorderLight"),
							Ve = W.getGraphicalElement("bulbTopLight"),
							Oe = W.getGraphicalElement("bulbCenterLight"),
							Ie = W.getContainer("trackerContainer"),
							Pe = W.getGraphicalElement("cylLeftLight"),
							Ge = W.getGraphicalElement("cylRightLight"),
							Be = W.getGraphicalElement("cylLeftLight1"),
							He = W.getGraphicalElement("cylRightLight1"),
							We = W.getGraphicalElement("hotElement"),
							je = (0, i.getDarkColor)(j.gaugeFillColor, oe ? 70 : 80),
							ze = j.gaugeFillAlpha,
							Ue = j.gaugeContainerColor,
							Xe = (0, i.getDarkColor)(Ue, 80),
							Ke = (0, i.getLightColor)(Ue, 80),
							Ye = j.gaugeBorderThickness,
							Je = j.gaugeBorderColor,
							Ze = j.showHoverEffect,
							qe = j.plotFillHoverAlpha,
							$e = j.plotFillHoverColor,
							Qe = W.getFromEnv("animationManager"),
							et = U.config.dataLabelStyle,
							tt = j.fluidAttr;
						tt || (tt = j.fluidAttr = {}), Ze && (tt.hover = {
							fill: (0, i.convertColor)((0, i.getDarkColor)($e, oe ? 70 : 80), qe)
						}), tt.out = {
							fill: (0, i.convertColor)(je, ze)
						}, F = [d, Ce, ie, p, de, de, 0, 0, 0, be, pe, g, be, ce, p, te, te, 0, 1, 0, ke, ce, g, ke, pe, p, de, de, 0, 0, 0, xe, ie,
							f
						], E = {
							value: j.value,
							displayValue: j.displayValue,
							toolText: j.toolText,
							thmFillColor: j.gaugeFillColor,
							thmBulbRadius: j.thmBulbRadius,
							thmHeight: j.thmHeight,
							thmGlassColor: j.gaugeContainerColor,
							gaugeFillColor: j.gaugeFillColor,
							gaugeFillAlpha: j.gaugeFillAlpha,
							showGaugeBorder: j.showGaugeBorder,
							gaugeBorderColor: j.rawGaugeBorderColor,
							gaugeBorderThickness: j.gaugeBorderThickness,
							gaugeBorderAlpha: j.gaugeBorderAlpha
						}, tt.out.path = [d, Te, ye, p, ve, ve, 0, 1, 0, we, ye, g, we, ge, Te, ge, f], tt.out["stroke-width"] = 0, L = {
							"stroke-width": Ye,
							stroke: Je,
							path: F
						}, M = {
							path: [d, Te, se, g, we, se],
							stroke: (0, i.convertColor)(je, 40)
						}, R = {
							path: F
						}, r = Qe.setAnimation({
							el: Ne || "group",
							attr: {
								name: "thermometer"
							},
							container: Z,
							component: W,
							label: "group"
						}), !Ne && W.addContainer("container", r), v = Qe.setAnimation({
							el: Re || "path",
							attr: L,
							container: r,
							component: W,
							label: "path"
						}), !Re && W.addGraphicalElement("canvasBorderElement", v), l = Qe.setAnimation({
							el: Fe || "path",
							attr: tt.out,
							container: r,
							component: W,
							label: "plot"
						}), !Fe && W.addGraphicalElement("fluid", l), s = Qe.setAnimation({
							el: Ee || "path",
							attr: M,
							container: r,
							component: W,
							label: "path"
						}), !Ee && W.addGraphicalElement("topLight", s), oe ? (_ = {
							path: [d, Te, se, g, we, se, we, pe, Te, pe, f],
							"stroke-width": 0,
							fill: (0, i.toRaphaelColor)({
								FCcolor: {
									color: je + i.COMMASTRING + je,
									alpha: "40,0",
									ratio: "0,80",
									radialGradient: !0,
									cx: .5,
									cy: 1,
									r: "70%"
								}
							})
						}, n = Qe.setAnimation({
							el: De || "path",
							attr: _,
							container: r,
							component: W,
							label: "path"
						}), !De && W.addGraphicalElement("topLightGlow", n), V = {
							path: D = [d, be, ce, p, te, te, 0, 0, 1, ke, ce, p, te, te, 0, 0, 0, be, ce, p, te, te, 0, 1, 0, ke, ce, f],
							"stroke-width": 0,
							fill: (0, i.toRaphaelColor)({
								FCcolor: {
									cx: .5,
									cy: .5,
									r: "50%",
									color: Xe + i.COMMASTRING + Ke,
									alpha: "0,50",
									ratio: "78,30",
									radialGradient: !0
								}
							})
						}, k = Qe.setAnimation({
							el: _e || "path",
							attr: V,
							container: r,
							component: W,
							label: "path"
						}), !_e && W.addGraphicalElement("bulbBorderLight", k), O = {
							path: D,
							"stroke-width": 0,
							fill: (0, i.toRaphaelColor)({
								FCcolor: {
									cx: .3,
									cy: .1,
									r: "100%",
									color: Ke + i.COMMASTRING + Xe,
									alpha: "60,0",
									ratio: "0,30",
									radialGradient: !0
								}
							})
						}, C = Qe.setAnimation({
							el: Ve || "path",
							attr: O,
							container: r,
							component: W,
							label: "path"
						}), !Ve && W.addGraphicalElement("bulbTopLight", C), I = {
							path: D,
							"stroke-width": 0,
							fill: (0, i.toRaphaelColor)({
								FCcolor: {
									cx: .25,
									cy: .7,
									r: "100%",
									color: Ke + i.COMMASTRING + Xe,
									alpha: "80,0",
									ratio: "0,70",
									radialGradient: !0
								}
							})
						}, x = Qe.setAnimation({
							el: Oe || "path",
							attr: I,
							container: r,
							component: W,
							label: "path"
						}), !Oe && W.addGraphicalElement("bulbCenterLight", x), P = {
							path: [d, re, ie, g, Ce, ie, p, de, de, 0, 0, 0, be, pe, g, be, ce, re, ce, f],
							"stroke-width": 0,
							fill: (0, i.toRaphaelColor)({
								FCcolor: {
									color: Ke + i.COMMASTRING + Xe,
									alpha: "50,0",
									ratio: "0,80",
									angle: 0
								}
							})
						}, w = Qe.setAnimation({
							el: Pe || "path",
							attr: P,
							container: r,
							component: W,
							label: "path"
						}), !Pe && W.addGraphicalElement("cylLeftLight", w), G = {
							path: [d, be, ie, g, xe, ie, p, de, de, 0, 0, 1, ke, pe, g, ke, ce, be, ce, f],
							"stroke-width": 0,
							fill: (0, i.toRaphaelColor)({
								FCcolor: {
									color: Ke + i.COMMASTRING + Xe + i.COMMASTRING + Xe,
									alpha: "50,0,0",
									ratio: "0,40,60",
									angle: 180
								}
							})
						}, A = Qe.setAnimation({
							el: Ge || "path",
							attr: G,
							container: r,
							component: W,
							label: "path"
						}), !Ge && W.addGraphicalElement("cylRightLight", A), B = {
							path: [d, Ae, pe, g, be, pe, be, ce, Ae, ce, f],
							"stroke-width": 0,
							fill: (0, i.toRaphaelColor)({
								FCcolor: {
									color: Ke + i.COMMASTRING + Xe,
									alpha: "60,0",
									ratio: "0,100",
									angle: 180
								}
							})
						}, S = Qe.setAnimation({
							el: Be || "path",
							attr: B,
							container: r,
							component: W,
							label: "path"
						}), !Be && W.addGraphicalElement("cylLeftLight1", S), H = {
							path: [d, Ae - .01, pe, g, Se, pe, Se, ce, Ae - .01, ce, f],
							"stroke-width": 0,
							fill: (0, i.toRaphaelColor)({
								FCcolor: {
									color: Ke + i.COMMASTRING + Xe,
									alpha: "60,0",
									ratio: "0,100",
									angle: 0
								}
							})
						}, y = Qe.setAnimation({
							el: He || "path",
							attr: H,
							container: r,
							component: W,
							label: "path"
						}), !He && W.addGraphicalElement("cylRightLight1", y)) : (W.removeGraphicalElement(De), W.removeGraphicalElement(_e), W.removeGraphicalElement(
								Ve), W.removeGraphicalElement(Oe), W.removeGraphicalElement(Pe), W.removeGraphicalElement(Ge), W.removeGraphicalElement(Be),
							W.removeGraphicalElement(He)), T = Qe.setAnimation({
							el: Ie || "group",
							attr: {
								name: "col-hot"
							},
							container: K,
							component: W,
							label: "group"
						}), !Ie && W.addContainer("trackerContainer", T), R.stroke = R.fill = b, N = Qe.setAnimation({
							el: We || "path",
							attr: R,
							container: T,
							component: W,
							label: "path"
						}), We || (W.addGraphicalElement("hotElement", N), N.on("fc-click", (function (e) {
							U.plotEventHandler(this, e)
						})).hover((function (e) {
							j.showHoverEffect && W.getGraphicalElement("fluid") && W.getGraphicalElement("fluid").attr(tt.hover), U.plotEventHandler(
								this, e, "DataPlotRollOver")
						}), (function (e) {
							j.showHoverEffect && W.getGraphicalElement("fluid") && W.getGraphicalElement("fluid").attr(tt.out), U.plotEventHandler(
								this, e, "DataPlotRollOut")
						}))), j.toolText ? Y.enableToolTip(N, j.toolText) : Y.disableToolTip(N), N.data("eventArgs", E), m = Qe.setAnimation({
							el: Me || "group",
							attr: {
								name: "datalabel"
							},
							container: X,
							component: W,
							label: "labelGroup"
						}), z.setStyle(et), Me || W.addContainer("dataLabelContainer", m), j.showValue && (e = ue + te + (j.valuePadding || 0), a = (
								o = z.getSmartText(j.displayValue, q.width - q.marginLeft - q.marginRight - ne / 2, q.height - e - q.marginBottom)).tooltext ||
							i.BLANKSTRING, t = Qe.setAnimation({
								el: Le || "text",
								attr: {
									text: o.text,
									x: re,
									y: e,
									"text-anchor": h,
									"vertical-align": u,
									fill: et.color,
									"text-bound": [et.backgroundColor, et.borderColor, et.borderThickness, et.borderPadding, et.borderRadius, et.borderDash]
								},
								container: m,
								component: W,
								label: "text"
							}), j.showTooltip ? Y.enableToolTip(t, a) : Y.disableToolTip(t), Le || W.addGraphicalElement("label", t), t.show())
					}, t
				}(s["default"]);
				t["default"] = k
			},
			1085: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				var o = a(193),
					r = [{
						initialAttr: function () {
							return {
								opacity: 0
							}
						},
						finalAttr: function () {
							return {
								opacity: 1
							}
						}
					}],
					i = function () {
						return r[0].slot = o.FINALSTR, r
					},
					l = function () {
						return r[0].slot = o.INITIALSTR, r
					},
					n = function () {
						return r[0].slot = o.FINALSTR, r
					},
					s = {
						"initial.dataset.thermometer": function () {
							var e = this.config;
							return {
								"plot.appearing": function (t) {
									var a = t.attr.path.slice(0);
									return a[13] = a[15] = e.thmBaseY, [{
										initialAttr: {
											opacity: 0
										},
										finalAttr: {
											opacity: 1
										},
										slot: "initial"
									}, {
										initialAttr: {
											path: a
										},
										finalAttr: {
											opacity: 1
										},
										slot: "middle"
									}]
								},
								"plot.updating": null,
								"text.appearing": i,
								"text.updating": null,
								"labelGroup.appearing": n,
								"labelGroup.updating": null,
								"path.appearing": l,
								"path.updating": null
							}
						}
					};
				t["default"] = s
			},
			1086: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1087))["default"];
				t["default"] = r
			},
			1087: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1088)),
					l = o(a(1089)),
					n = a(1091),
					s = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).showValues = 0, t._parseCanvasCosmetics = n._parseCanvasCosmetics, t._placeOpenCloseValues =
								n._placeOpenCloseValues, t.defaultPlotShadow = 0, t.axisPaddingLeft = 0, t.axisPaddingRight = 0, t
						}(0, r["default"])(t, e), t.getName = function () {
							return "SparkLine"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "SparkLine"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "SparkLine Chart", t.singleseries = !0, t.defaultDatasetType = "sparkline", t.showvalues = 0, t.anchorsides =
								1, t.anchorstartangle = 90, t.enablemousetracking = !0
						}, a.getDSdef = function () {
							return l["default"]
						}, t
					}(i["default"]);
				t["default"] = s
			},
			1088: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(416)),
					n = Math,
					s = n.min,
					c = n.max,
					u = n.ceil,
					h = (0, i.extend2)({}, i.defaultGaugePaletteOptions),
					d = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).showBorder = 0, t.chartTopMargin = 3, t.chartRightMargin = 3, t.chartBottomMargin = 3, t.chartLeftMargin =
								3, t.canvasborderthickness = 0, t.subTitleFontSizeExtender = 0, t.subTitleFontWeight = 0, t.defaultPaletteOptions = (0, i.extend2)
								((0, i.extend2)({}, h), {
									paletteColors: [
										["555555", "A6A6A6", "CCCCCC", "E1E1E1", "F0F0F0"],
										["A7AA95", "C4C6B7", "DEDFD7", "F2F2EE"],
										["04C2E3", "66E7FD", "9CEFFE", "CEF8FF"],
										["FA9101", "FEB654", "FED7A0", "FFEDD5"],
										["FF2B60", "FF6C92", "FFB9CB", "FFE8EE"]
									],
									bgColor: ["FFFFFF", "CFD4BE,F3F5DD", "C5DADD,EDFBFE", "A86402,FDC16D", "FF7CA0,FFD1DD"],
									bgAngle: [270, 270, 270, 270, 270],
									bgRatio: ["0,100", "0,100", "0,100", "0,100", "0,100"],
									bgAlpha: ["100", "60,50", "40,20", "20,10", "30,30"],
									canvasBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
									canvasBgAngle: [0, 0, 0, 0, 0],
									canvasBgAlpha: ["100", "100", "100", "100", "100"],
									canvasBgRatio: [i.BLANKSTRING, i.BLANKSTRING, i.BLANKSTRING, i.BLANKSTRING, i.BLANKSTRING],
									canvasBorderColor: ["BCBCBC", "BEC5A7", "93ADBF", "C97901", "FF97B1"],
									toolTipBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
									toolTipBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
									baseFontColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
									trendColor: ["666666", "60634E", "415D6F", "845001", "68001B"],
									plotFillColor: ["666666", "A5AE84", "93ADBF", "C97901", "FF97B1"],
									borderColor: ["767575", "545454", "415D6F", "845001", "68001B"],
									borderAlpha: [50, 50, 50, 50, 50],
									periodColor: ["EEEEEE", "ECEEE6", "E6ECF0", "FFF4E6", "FFF2F5"],
									winColor: ["666666", "60634E", "025B6A", "A15E01", "FF97B1"],
									lossColor: ["CC0000", "CC0000", "CC0000", "CC0000", "CC0000"],
									drawColor: ["666666", "A5AE84", "93ADBF", "C97901", "FF97B1"],
									scorelessColor: ["FF0000", "FF0000", "FF0000", "FF0000", "FF0000"]
								}, !1, !0), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "SparkChartBase"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "SparkChartBase"
						}, a._fetchCaptionPos = function () {
							return this.getChildren("caption")[0].config.isOnLeft, -1
						}, a.parseChartAttr = function (t) {
							e.prototype.parseChartAttr.call(this, t);
							var a = this.getFromEnv("dataSource").chart,
								o = this.config;
							o.origCanvasLeftMargin = (0, i.pluckNumber)(a.canvasleftmargin), o.origCanvasRightMargin = (0, i.pluckNumber)(a.canvasrightmargin),
								o.origCanvasTopMargin = (0, i.pluckNumber)(a.canvastopmargin), o.origCanvasBottomMargin = (0, i.pluckNumber)(a.canvasbottommargin),
								o.showBorder = (0, i.pluckNumber)(a.showborder, 0)
						}, a._spaceManager = function () {
							var e, t, a, o, r, i, l, n, s, u, h = this.config,
								d = h.canvasBaseDepth,
								p = this.getChildren("canvas")[0],
								g = p.config.canvasBorderWidth,
								f = h.borderWidth,
								m = h.canvasMarginTop,
								v = h.canvasMarginBottom,
								b = h.canvasMarginLeft,
								k = h.canvasMarginRight,
								C = h.minCanvasHeight,
								x = h.minCanvasWidth,
								T = h.height,
								w = h.width,
								A = !1,
								S = !1,
								y = h.origCanvasTopMargin,
								N = h.origCanvasBottomMargin,
								F = h.origCanvasLeftMargin,
								D = h.origCanvasRightMargin;
							this._allocateSpace({
									top: f,
									bottom: f,
									left: f,
									right: f
								}), t = .325 * h.availableHeight, this._getDSspace && this._allocateSpace(this._getDSspace(t)), this._allocateSpace(this._manageActionBarSpace &&
									this._manageActionBarSpace(.225 * h.availableHeight) || {}), h.availableWidth = h.width, e = (e = .75 * h.availableWidth) -
								h.origMarginLeft - h.origMarginRight - 2 * h.borderWidth, e = c(.1 * h.availableWidth, e), this._manageChartMenuBar(e), e =
								.75 * (h.availableWidth - 2 * h.borderWidth), this._placeOpenCloseValues && this._allocateSpace(this._placeOpenCloseValues(e)),
								this._allocateSpace({
									top: g,
									bottom: g,
									left: g,
									right: g
								}), this._allocateSpace({
									bottom: d
								}), C > T - m - v && (A = !0, a = h.canvasHeight - C, u = m + v, m = h.canvasMarginTop = a * m / u, v = h.canvasMarginBottom =
									a * v / u), x > w - b - k && (S = !0, a = h.canvasWidth - x, u = b + k, b = h.canvasMarginLeft = a * b / u, k = h.canvasMarginRight =
									a * k / u), o = m > h.canvasTop ? m - h.canvasTop : 0, r = v > T - h.canvasBottom ? v + h.canvasBottom - T : 0, i = b > h.canvasLeft ?
								b - h.canvasLeft : 0, l = k > w - h.canvasRight ? k + h.canvasRight - w : 0, this._allocateSpace({
									top: o,
									bottom: r,
									left: i,
									right: l
								}), A && (u = y + N, (n = h.canvasHeight) > C && (o = (a = n - C) * y / u, r = a * N / u), this._allocateSpace({
									top: o,
									bottom: r
								})), S && (u = F + D, (s = h.canvasWidth) > x && (i = (a = s - x) * F / u, l = a * D / u), this._allocateSpace({
									left: i,
									right: l
								})), void 0 !== h.origCanvasLeftMargin && (h.canvasWidth = c(h.canvasWidth + h.canvasLeft - h.origCanvasLeftMargin, .2 * h.availableWidth),
									h.canvasLeft = h.origCanvasLeftMargin), p.setDimension({
									top: h.canvasTop,
									left: h.canvasLeft,
									width: h.canvasWidth,
									height: h.canvasHeight
								})
						}, a._manageCaptionSpacing = function (e) {
							var t, a, o, r, l, n = this.config,
								h = this.getChildren(),
								d = h.caption && h.caption[0],
								p = h.subCaption && h.subCaption[0],
								g = d.config,
								f = p.config,
								m = d.components,
								v = this.getFromEnv("dataSource").chart,
								b = this.getFromEnv("smartLabel"),
								k = (0, i.parseUnsafeString)(v.caption),
								C = (0, i.parseUnsafeString)(v.subcaption),
								x = g.captionPadding = (0, i.pluckNumber)(v.captionpadding, 2),
								T = h.chartMenuBar && h.chartMenuBar[0],
								w = T && T.getLogicalSpace(),
								A = n.height - (w && w.height || 0),
								S = 0,
								y = 0,
								N = c(h.canvas && h.canvas[0].config.canvasBorderThickness, 0),
								F = 0,
								D = e,
								E = {};
							return .7 * A > 3 && (x < N && (x = N + 2), g.captionPadding = f.captionPadding = x, k !== i.BLANKSTRING && (r = g.style, S =
								g.captionLineHeight = u(parseFloat((0, i.pluck)(r.fontHeight, r.lineHeight), 10), 12)), C !== i.BLANKSTRING && (l = f.style,
								y = u(parseInt((0, i.pluck)(l.lineHeight, l.fontHeight), 10), 12)), b.useEllipsesOnOverflow(n.useEllipsesWhenOverflow), (S >
								0 || y > 0) && (b.setStyle(r), (a = b.getSmartText(k, D, A)).width > 0 && (a.width += 2, F = a.height), b.setStyle(l), (o =
									b.getSmartText(C, D, A - F)).width > 0 && (o.width += 2), g.captionSubCaptionGap = a.height + 0 + .2 * y, t = Math.max(a.width,
									o.width), g.height = F = a.height, g.width = a.width, g.tooltext && (m.originalText = a.tooltext), f.height = F = o.height,
								f.width = o.width, f.tooltext && (m.originalText = o.tooltext), t = Math.max(a.width, o.width), g.captionPadding = x = s(e -
									t, x), t > 0 && (t = s(e, t + x)), g.maxCaptionWidth = f.maxCaptionWidth = t, g.isOnLeft ? E.left = t : E.right = t)), E
						}, a._manageCaptionPosition = function () {
							var e = this.config,
								t = this.getChildren("caption")[0],
								a = this.getChildren("subCaption")[0],
								o = t.config,
								r = a.config,
								l = o.captionPosition,
								n = c(o.width, r.width),
								s = e.borderWidth || 0,
								u = e.height,
								h = (e.sparkValues || {}).openValueWidth || 0,
								d = o.captionPadding,
								p = o.captionSubCaptionGap;
							switch (l) {
							case i.POSITION_MIDDLE:
								o.y = (u - (o.height + r.height)) / 2 + .5 * (o._offsetHeight || 0);
								break;
							case i.POSITION_BOTTOM:
								o.y = u - (o.height + r.height) - e.marginBottom - s;
								break;
							default:
								o.y = e.marginTop + s + (o._offsetHeight || 0)
							}
							r.y = o.y + p, o.isOnLeft ? (o.align = r.align = i.POSITION_END, o.x = r.x = e.canvasLeft - (s + h + 2 + d) + e.borderWidth) :
								(o.align = r.align = i.POSITION_START, o.x = r.x = e.width - e.marginRight - n - s)
						}, a._feedAxesRawData = function () {
							var t = e.prototype._feedAxesRawData.call(this),
								a = t.xAxisConf[0],
								o = t.yAxisConf[0],
								r = this.getFromEnv("chart-attrib"),
								l = this.getFromEnv("color-manager"),
								n = (0, i.pluckNumber)(r.periodlength, 0);
							return a.lines = o.lines = a.band = o.band = {
								isDraw: 0
							}, n && (a.alternateGridColor = (0, i.pluck)(r.periodcolor, l.getColor("periodColor")), a.alternateGridAlpha = (0, i.pluck)(r
								.periodalpha, 100), a.showAlternateGridColor = !0, a.categoryDivLinesFromZero = 0, a.periodLength = n, a.band = {
								isDraw: 1
							}), t
						}, a._checkInvalidSpecificData = function () {
							var e = this.getFromEnv("dataSource").dataset;
							if (!(e && e.length && e[0].data && e[0].data.length)) return !0
						}, t
					}(l["default"]);
				t["default"] = d
			},
			1089: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(509)),
					n = a(201),
					s = o(a(1090)),
					c = function () {
						var e, t, a, o, r, l, n, s = this.getFromEnv("chart"),
							c = s.config,
							u = c.dataLabelStyle,
							h = c.valuepadding + 2,
							d = this.getContainer("labelGroup"),
							p = this.getFromEnv("animationManager"),
							g = this.getGraphicalElement("closeValue"),
							f = this.getGraphicalElement("openValue"),
							m = this.getGraphicalElement("startBraces"),
							v = this.getGraphicalElement("highValue"),
							b = this.getGraphicalElement("separator"),
							k = this.getGraphicalElement("lowValue"),
							C = this.getGraphicalElement("endBraces"),
							x = c.sparkValues || (c.sparkValues = {}),
							T = this.getFromEnv("smartLabel"),
							w = "[",
							A = "]",
							S = "|",
							y = {
								"class": "fusioncharts-label",
								"text-anchor": i.POSITION_END,
								fill: u.color,
								"font-size": u.fontSize,
								"font-weight": u.fontWeight,
								"font-style": u.fontStyle,
								"font-family": u.fontFamily,
								visibility: "visible"
							},
							N = {
								x: 0,
								y: 0
							};
						s.getChildContainer("datalabelsGroup").attr({
								"clip-rect": null
							}), N.y = .5 * c.canvasHeight + c.canvasTop, N.x = c.canvasLeft - h, (x.openValue && x.openValue.label || t) && (t = p.setAnimation({
								el: f || "text",
								state: "appearing",
								container: d,
								attr: {
									text: x.openValue.label,
									x: N.x,
									y: N.y,
									fill: x.openValue.color || y.fill,
									"text-anchor": i.POSITION_END,
									"line-height": u.lineHeight,
									"text-bound": [u.backgroundColor, u.borderColor, u.borderThickness, u.borderPadding, u.borderRadius, u.borderDash],
									visibility: "visible"
								},
								label: "label",
								component: this
							}), f || this.addGraphicalElement("openValue", t)), y["text-anchor"] = i.POSITION_START, N.x = c.canvasWidth + c.canvasLeft + h,
							(x.closeValue && x.closeValue.label || e) && (e = p.setAnimation({
								el: g || "text",
								container: d,
								state: "appearing",
								attr: {
									text: x.closeValue.label,
									x: N.x,
									y: N.y,
									fill: x.closeValue.color || y.fill,
									"text-anchor": i.POSITION_START,
									"line-height": u.lineHeight,
									"text-bound": [u.backgroundColor, u.borderColor, u.borderThickness, u.borderPadding, u.borderRadius, u.borderDash],
									visibility: "visible"
								},
								label: "label",
								component: this
							}), g || this.addGraphicalElement("closeValue", e), N.x += x.closeValue.smartObj && x.closeValue.smartObj.width + 2 + h || 0),
							(x.highLowValue && x.highLowValue.label || o) && (x.highLowValue && x.highLowValue.label === i.BLANKSTRING && (S = w = A = i.BLANKSTRING),
								T.useEllipsesOnOverflow(c.useEllipsesWhenOverflow), T.setStyle(u), a = p.setAnimation({
									el: m || "text",
									state: "appearing",
									container: d,
									attr: {
										text: w,
										x: N.x,
										y: N.y,
										"text-anchor": i.POSITION_START,
										visibility: "visible"
									},
									label: "label",
									component: this
								}), m || this.addGraphicalElement("startBraces", a), N.x += T.getSmartText(w).width, o = p.setAnimation({
									el: v || "text",
									state: "appearing",
									container: d,
									attr: {
										text: x.highValue.label,
										x: N.x,
										y: N.y,
										"text-anchor": i.POSITION_START,
										fill: x.highValue.color || y.fill,
										visibility: "visible"
									},
									label: "label",
									component: this
								}), v || this.addGraphicalElement("highValue", o), N.x += T.getSmartText(x.highValue.label).width, r = p.setAnimation({
									el: b || "text",
									state: "appearing",
									container: d,
									attr: {
										text: S,
										x: N.x,
										y: N.y,
										"text-anchor": i.POSITION_START,
										visibility: "visible"
									},
									label: "label",
									component: this
								}), b || this.addGraphicalElement("separator", r), N.x += T.getSmartText(S).width, l = p.setAnimation({
									el: k || "text",
									container: d,
									state: "appearing",
									attr: {
										text: x.lowValue.label,
										x: N.x,
										y: N.y,
										"text-anchor": i.POSITION_START,
										fill: x.lowValue.color || y.fill,
										visibility: "visible"
									},
									label: "label",
									component: this
								}), k || this.addGraphicalElement("lowValue", l), N.x += T.getSmartText(x.lowValue.label).width, n = p.setAnimation({
									el: C || "text",
									state: "appearing",
									container: d,
									attr: {
										text: A,
										x: N.x,
										y: N.y,
										"text-anchor": i.POSITION_START,
										visibility: "visible"
									},
									label: "label",
									component: this
								}), C || this.addGraphicalElement("endBraces", n)), this.labelDrawn = !0
					};
				(0, n.addDep)({
					name: "sparklineAnimation",
					type: "animationRule",
					extension: s["default"]
				});
				var u = function (e) {
					function t() {
						return e.apply(this, arguments) || this
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getType = function () {
						return "dataset"
					}, a.getName = function () {
						return "sparkLine"
					}, a.parseAttributes = function () {
						e.prototype.parseAttributes.call(this);
						var t = this.getFromEnv("chart"),
							a = this.config,
							o = this.config.JSONData,
							r = t.getFromEnv("chart-attrib");
						a.showValues = (0, i.pluckNumber)(o.showvalues, r.showvalues, 0), a.linethickness = (0, i.pluckNumber)(o.linethickness, r.linethickness,
							1)
					}, a._setConfigure = function (t) {
						e.prototype._setConfigure.call(this);
						var a, o, r, l, n, s, c, u, h, d, p, g, f, m, v, b, k = this.getFromEnv("chart"),
							C = this.config,
							x = this.config.JSONData,
							T = k.getFromEnv("dataSource").chart,
							w = t || x.data,
							A = this.getFromEnv("xAxis"),
							S = t && t.data.length || A.getTicksLen(),
							y = this.getFromEnv("color-manager"),
							N = k.config,
							F = (0, i.parseColor)((0, i.pluck)(T.opencolor, "0099FF")),
							D = (0, i.parseColor)((0, i.pluck)(T.closecolor, "0099FF")),
							E = (0, i.parseColor)((0, i.pluck)(T.highcolor, "00CC00")),
							L = (0, i.parseColor)((0, i.pluck)(T.lowcolor, "CC0000")),
							M = (0, i.parseColor)((0, i.pluck)(T.anchorcolor, y.getColor("plotFillColor"))),
							R = (0, i.pluckNumber)(T.showopenanchor, T.drawanchors, T.showanchors, 1),
							_ = (0, i.pluckNumber)(T.showcloseanchor, T.drawanchors, T.showanchors, 1),
							V = (0, i.pluckNumber)(T.showhighanchor, T.drawanchors, T.showanchors, 1),
							O = (0, i.pluckNumber)(T.showlowanchor, T.drawanchors, T.showanchors, 1),
							I = (0, i.pluckNumber)(T.anchoralpha, 100),
							P = (0, i.pluckNumber)(T.drawanchors, T.showanchors, 0) ? (0, i.pluckNumber)(T.anchoralpha, 100) : 0,
							G = (0, i.pluck)(T.linecolor, y.getColor("plotFillColor"));
						for (r = this.components.data, u = C.maxValue, h = C.minValue, C.shadow = {
								opacity: (0, i.pluckNumber)(T.showshadow, 0) ? C.alpha / 100 : 0
							}, (l = (o = r[0]).config).anchorProps.bgColor = (0, i.pluck)(o.anchorbgcolor, F), l.anchorProps.enabled = !!R, l.anchorProps
							.bgAlpha = R ? d : 0, l.anchorProps.enabled && l.hoverEffects && (l.hoverEffects.anchorColor = (0, i.pluck)(T.openhovercolor,
								T.anchorhovercolor, T.plotfillhovercolor, (0, i.getLightColor)(F, 70)), l.hoverEffects.anchorBgAlpha = (0, i.pluckNumber)(T
								.openhoveralpha, T.anchorhoveralpha, T.plotfillhoveralpha, 100)), f = l.displayValue, (l = (o = r[S - 1]).config).anchorProps
							.bgColor = (0, i.pluck)(o.anchorbgcolor, D), l.anchorProps.enabled = !!_, l.anchorProps.bgAlpha = _ ? d : 0, l.anchorProps.enabled &&
							l.hoverEffects && (l.hoverEffects.anchorColor = (0, i.pluck)(T.closehovercolor, T.anchorhovercolor, T.plotfillhovercolor, (0,
								i.getLightColor)(D, 70)), l.hoverEffects.anchorBgAlpha = (0, i.pluckNumber)(T.closehoveralpha, T.anchorhoveralpha, T.plotfillhoveralpha,
								100)), b = l.displayValue, n = 0; n < S; n++) l = (o = r[n]).config, a = w[n], d = (0, i.pluckNumber)(a.anchorbgalpha, I), C
							.maxRadius = -Infinity, 0 !== n && n !== S - 1 && (l.anchorProps.bgColor = (0, i.pluck)(a.anchorbgcolor, M), l.anchorProps.bgAlpha =
								(0, i.pluckNumber)(a.anchorbgalpha, P), l.hoverEffects.anchorColor = (0, i.parseColor)((0, i.pluck)(T.anchorhovercolor, T.plotfillhovercolor,
									(0, i.getLightColor)(G, 70))), l.hoverEffects.anchorBgAlpha = (0, i.pluckNumber)(T.lowhoveralpha, T.anchorhoveralpha, T.plotfillhoveralpha,
									100)), l.dataLabelStyle = this._configureDataLabelStyle(a), l.anchorProps.radius = (0, i.pluckNumber)(T.anchorradius, a.anchorradius,
								2), l.anchorProps.borderThickness = 0, l.hoverEffects.anchorBorderThickness = 0, l.hoverEffects.anchorRadius = (0, i.pluckNumber)
							(T.anchorhoverradius, T.anchorradius, a.anchorradius, 3), C.maxRadius = Math.max(l.anchorProps.radius + l.anchorProps.borderThickness /
								2, C.maxRadius), l.setValue === h && (l.anchorProps.bgColor = (0, i.pluck)(a.anchorbgcolor, L), l.hoverEffects.anchorColor =
								(0, i.pluck)(T.lowhovercolor, T.anchorhovercolor, T.plotfillhovercolor, (0, i.getLightColor)(L, 70)), l.hoverEffects.anchorBgAlpha =
								(0, i.pluckNumber)(T.lowhoveralpha, T.anchorhoveralpha, T.plotfillhoveralpha, 100), l.anchorProps.enabled = !!O, l.anchorProps
								.bgAlpha = O ? d : 0, g = l.displayValue), l.setValue === u && (l.anchorProps.bgColor = (0, i.pluck)(a.anchorbgcolor, E), l.hoverEffects
								.anchorColor = (0, i.pluck)(T.highhovercolor, T.anchorhovercolor, T.plotfillhovercolor, (0, i.getLightColor)(E, 70)), l.hoverEffects
								.anchorBgAlpha = (0, i.pluckNumber)(T.highhoveralpha, T.anchorhoveralpha, T.plotfillhoveralpha, 100), l.anchorProps.enabled = !
								!V, l.anchorProps.bgAlpha = V ? d : 0, p = l.displayValue), null != l.setValue && (c = 1), l._x = n, l._y = l.setValue;
						for (s = N.sparkValues = {
								openValue: {
									color: F
								},
								closeValue: {
									color: D
								},
								highValue: {
									color: E
								},
								lowValue: {
									color: L
								},
								highLowValue: {}
							}, c && (s.openValue.label = (0, i.pluckNumber)(T.showopenvalue, 1) ? f : i.BLANKSTRING, s.closeValue.label = (0, i.pluckNumber)
								(T.showclosevalue, 1) ? b : i.BLANKSTRING, (0, i.pluckNumber)(T.showhighlowvalue, 1) && (s.highLowValue.label = "[" + p +
									" | " + g + "]", s.highValue.label = p, s.lowValue.label = g)), n = 0; n < S; n++) {
							var B = r[n].config;
							void 0 !== B.setTooltext && (m = [54, 55, 56, 57, 58, 59, 60, 61], v = {
								openValue: s.openValue.label,
								openDataValue: s.openValue.label,
								closeValue: s.closeValue.label,
								closeDataValue: s.closeValue.label,
								highValue: s.highValue.label,
								highDataValue: s.highValue.label,
								lowValue: s.lowValue.label,
								lowDataValue: s.lowValue.label
							}, B.toolText = (0, i.parseTooltext)(B.setTooltext, m, v, a, T, x), B.finalTooltext = B.setTooltext = B.toolText)
						}
					}, a.draw = function () {
						e.prototype.draw.call(this), this._drawSparkValues()
					}, a._drawSparkValues = function () {
						c.call(this)
					}, t
				}(l["default"]);
				t["default"] = u
			},
			1090: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = {
					"*.dataset.sparkLine": o(a(512))["default"]["*.dataset.line"]
				};
				t["default"] = r
			},
			1091: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t._placeOpenCloseValues = c, t._parseCanvasCosmetics = u, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1088)),
					n = o(a(1092)),
					s = Math.min;

				function c(e) {
					var t, a = this.config,
						o = this.getFromEnv("smartLabel"),
						r = a.dataLabelStyle,
						l = (0, i.pluckNumber)(r.borderThickness, 0),
						n = this.config.valuepadding + 2 + l,
						c = 0,
						u = 0,
						h = a.sparkValues || {};
					return o.useEllipsesOnOverflow(a.useEllipsesWhenOverflow), o.setStyle(r), h.openValue && h.openValue.label && (h.openValue.smartObj =
							o.getSmartText(h.openValue.label), c = h.openValue.smartObj.width + n), h.closeValue && h.closeValue.label && (h.closeValue.smartObj =
							o.getSmartText(h.closeValue.label), u += h.closeValue.smartObj.width + n), h.highValue && h.highValue.label && (h.highValue.smartObj =
							o.getSmartText(h.highValue.label)), h.lowValue && h.lowValue.label && (h.lowValue.smartObj = o.getSmartText(h.lowValue.label)),
						h.highLowValue && h.highLowValue.label && (h.highLowValue.smartObj = o.getSmartText(h.highLowValue.label), u += h.highLowValue.smartObj
							.width + n), {
							left: t = h.openValueWidth = s(c, e),
							right: h.closeValueWidth = s(u, e - t)
						}
				}

				function u() {
					var e, t, a, o = {},
						r = this.getFromEnv("dataSource").chart,
						l = this.getFromEnv("color-manager");
					return o.canvasBorderRadius = 0, e = o.canvasBorderThickness = 0, t = o.showCanvasBorder = 0, o.canvasBorderWidth = t ? e : 0, o.canvasBorderColor =
						(0, i.convertColor)((0, i.pluck)(r.canvasbordercolor, l.getColor("canvasBorderColor"))), o.canBGColor = {
							FCcolor: {
								color: "ffffff",
								alpha: 0,
								angle: 0,
								ratio: i.UNDEF
							}
						}, a = o.shadow = 0, o.shadowOnCanvasFill = a && a.enabled, o.origCanvasTopPad = (0, i.pluckNumber)(r.canvastoppadding, 0), o.origCanvasBottomPad =
						(0, i.pluckNumber)(r.canvasbottompadding, 0), o.origCanvasLeftPad = (0, i.pluckNumber)(r.canvasleftpadding, 0), o.origCanvasRightPad =
						(0, i.pluckNumber)(r.canvasrightpadding, 0), o.canvasPadding = 0, o
				}
				var h = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this)._placeOpenCloseValues = c, t._parseCanvasCosmetics = u, t
					}(0, r["default"])(t, e), t.getName = function () {
						return "SparkWinLoss"
					};
					var a = t.prototype;
					return a.parseChartAttr = function (t) {
						e.prototype.parseChartAttr.call(this, t), this.config.drawTrendRegion = 0
					}, a.getName = function () {
						return "SparkWinLoss"
					}, a.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "sparkwinloss Chart", t.singleseries = !0, t.defaultDatasetType = "sparkwinloss", t.enablemousetracking = !0,
							t.yRangeMin = -1, t.yRangeMax = 1, t.canvasborderthickness = 0
					}, a.getDSdef = function () {
						return n["default"]
					}, t
				}(l["default"]);
				t["default"] = h
			},
			1092: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(492)),
					n = a(201),
					s = o(a(1093)),
					c = Math,
					u = c.min,
					h = c.max,
					d = function () {
						var e = this.getFromEnv("chart"),
							t = e.config,
							a = t.dataLabelStyle,
							o = t.valuepadding + 2,
							r = this.getContainer("labelGroup"),
							l = t.sparkValues || (t.sparkValues = {}),
							n = this.getGraphicalElement("closeValue"),
							s = this.getFromEnv("animationManager"),
							c = {
								"class": "fusioncharts-label",
								"text-anchor": i.POSITION_END,
								fill: a.color,
								"font-size": a.fontSize,
								"font-weight": a.fontWeight,
								"font-style": a.fontStyle,
								"font-family": a.fontFamily,
								visibility: "visible"
							},
							u = {
								x: 0,
								y: 0
							};
						e.getChildContainer("datalabelsGroup").attr({
								"clip-rect": null
							}), u.y = .5 * t.canvasHeight + t.canvasTop, c["text-anchor"] = i.POSITION_START, u.x = t.canvasWidth + t.canvasLeft + o, l.closeValue &&
							l.closeValue.label && (this.addGraphicalElement("closeValue", s.setAnimation({
								el: n || "text",
								attr: {
									text: l.closeValue.label,
									x: u.x,
									y: u.y,
									fill: l.closeValue.color || c.fill,
									"text-anchor": i.POSITION_START,
									"line-height": a.lineHeight,
									"text-bound": [a.backgroundColor, a.borderColor, a.borderThickness, a.borderPadding, a.borderRadius, a.borderDash],
									visibility: "visible"
								},
								container: r,
								component: this,
								label: "text"
							})), u.x += l.closeValue.smartObj && l.closeValue.smartObj.width + 2 + o || 0), this.labelDrawn = !0
					};
				(0, n.addDep)({
					name: "sparkwinlossAnimation",
					type: "animationRule",
					extension: s["default"]
				});
				var p = function (e) {
					function t() {
						var t;
						return (t = e.call(this) || this).drawLabel = d, t
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getType = function () {
						return "dataset"
					}, a.getName = function () {
						return "sparkWinLoss"
					}, a._setConfigure = function (t, a) {
						var o, r, l, n, s, c, d, p, g, f, m, v, b, k, C, x, T, w, A, S, y, N, F, D, E, L, M, R, _, V, O = this.getFromEnv("chart"),
							I = O.config,
							P = this.config,
							G = this.config.JSONData,
							B = t || G.data,
							H = B && B.length,
							W = this.getFromEnv("xAxis"),
							j = W.getTicksLen(),
							z = t && t.data.length || u(j, H),
							U = O.getFromEnv("dataSource").chart,
							X = this.getFromEnv("color-manager"),
							K = this.index || this.positionIndex,
							Y = I.showplotborder,
							J = P.plotColor = X.getPlotColor(K),
							Z = (0, i.pluck)(U.plotfillcolor, X.getColor("plotFillColor")),
							q = (0, i.pluck)(U.wincolor, X.getColor("winColor")),
							$ = (0, i.pluck)(U.losscolor, X.getColor("lossColor")),
							Q = (0, i.pluck)(U.drawcolor, X.getColor("drawColor")),
							ee = (0, i.pluck)(U.scorelesscolor, X.getColor("scorelessColor")),
							te = U.winhovercolor,
							ae = U.losshovercolor,
							oe = U.drawhovercolor,
							re = U.scorelesshovercolor,
							ie = 0,
							le = 0,
							ne = 0,
							se = I.plotborderthickness,
							ce = I.isroundedges,
							ue = I.plothovereffect,
							he = P.plotfillangle,
							de = P.plotBorderDashStyle,
							pe = this.components.data,
							ge = O.isBar,
							fe = O.is3D,
							me = P.maxValue || -Infinity,
							ve = P.minValue || +Infinity;
						for (pe || (pe = this.components.data = []), e.prototype._setConfigure.call(this), P.plotgradientcolor = i.BLANKSTRING, _ = P.showPlotBorder =
							(0, i.pluckNumber)(U.showplotborder, 0), P.plotborderalpha = s = _ ? (0, i.pluck)(U.plotborderalpha, l, i.HUNDREDSTRING) : 0,
							P.showTooltip = 0, I.showtooltip = 0, R = 0; R < z; R++) {
							switch (t ? (d = t && t.data[R], g = void 0 !== a ? pe[V = a + R] : pe[V = pe.length - z + R]) : (g = pe[R], d = B[R]), f = g &&
								g.config, g || (g = pe[R] = {}), g.config || (f = pe[R].config = {}), (d.value || "").toLowerCase()) {
							case "w":
								J = (0, i.pluck)(d.color, q, Z), v = (0, i.pluck)(d.hovercolor, te, J), f.setValue = p = 1, ie += 1;
								break;
							case "l":
								J = (0, i.pluck)(d.color, $, Z), v = (0, i.pluck)(d.hovercolor, ae, J), f.setValue = p = -1, le += 1;
								break;
							case "d":
								J = (0, i.pluck)(d.color, Q, Z), v = (0, i.pluck)(d.hovercolor, oe, J), f.setValue = p = .1, ne += 1;
								break;
							default:
								f.setValue = p = null
							}
							1 === Number(d.scoreless) && (J = (0, i.pluck)(d.color, ee, Z), v = (0, i.pluck)(d.hovercolor, re, d.color, ee, v)), f.originalPlotColor =
								J, f.toolText = !1, f.setLink = (0, i.pluck)(d.link), f.setDisplayValue = (0, i.parseUnsafeString)(d.displayvalue), E = (0,
									i.pluckNumber)(d.dashed), L = (0, i.pluckNumber)(d.dashlen, void 0), M = r = (0, i.pluckNumber)(d.dashgap, P.plotDashGap),
								null !== p && (me = h(me, p), ve = u(ve, p)), f.plotBorderDashStyle = c = 1 === E ? (0, i.getDashStyle)(L, M) : 0 === E ?
								"none" : de, l = (0, i.pluck)(d.alpha, P.plotfillalpha), s = (0, i.pluck)(d.alpha, P.plotborderalpha, l).toString(), p < 0 &&
								!ce && (o = P.plotfillAngle, he = ge ? 180 - he : 360 - he), f.colorArr = m = (0, i.getColumnColor)(J + "," + P.plotgradientcolor,
									l, n = P.plotfillratio, he, ce, P.plotbordercolor, s, ge ? 1 : 0, !!fe), f.label = (0, i.getValidValue)((0, i.parseUnsafeString)
									(W.getLabel((0, i.pluckNumber)(V - z, R)).label)), 0 !== ue && (v = (0, i.pluck)(d.hovercolor, G.hovercolor, U.plotfillhovercolor,
										U.columnhovercolor, J), b = (0, i.pluck)(d.hoveralpha, G.hoveralpha, U.plotfillhoveralpha, U.columnhoveralpha, l), !(k = (
										0, i.pluck)(d.hovergradientcolor, G.hovergradientcolor, U.plothovergradientcolor, P.plotgradientcolor)) && (k = ""), C = (
										0, i.pluck)(d.hoverratio, G.hoverratio, U.plothoverratio, n), x = (0, i.pluckNumber)(360 - d.hoverangle, 360 - G.hoverangle,
										360 - U.plothoverangle, he), T = (0, i.pluck)(d.borderhovercolor, G.borderhovercolor, U.plotborderhovercolor, P.plotbordercolor),
									w = (0, i.pluck)(d.borderhoveralpha, G.borderhoveralpha, U.plotborderhoveralpha, s, l), A = (0, i.pluckNumber)(d.borderhoverthickness,
										G.borderhoverthickness, U.plotborderhoverthickness, se), S = (0, i.pluckNumber)(d.borderhoverdashed, G.borderhoverdashed,
										U.plotborderhoverdashed), y = (0, i.pluckNumber)(d.borderhoverdashgap, G.borderhoverdashgap, U.plotborderhoverdashgap,
										void 0), N = (0, i.pluckNumber)(d.borderhoverdashlen, G.borderhoverdashlen, U.plotborderhoverdashlen, r), F = S ? (0, i.getDashStyle)
									(N, y) : c, f.hoverColor = v, 1 === ue && v === J && (v = (0, i.getLightColor)(v, 70)), D = (0, i.getColumnColor)(v + "," +
										k, b, C, x, ce, T, w.toString(), ge ? 1 : 0, !!fe), f.setRolloutAttr = {
										fill: fe ? [(0, i.toRaphaelColor)(m[0]), !I.use3dlighting] : (0, i.toRaphaelColor)(m[0]),
										stroke: Y && (0, i.toRaphaelColor)(m[1]),
										"stroke-width": se,
										"stroke-dasharray": c
									}, f.setRolloverAttr = {
										fill: fe ? [(0, i.toRaphaelColor)(D[0]), !I.use3dlighting] : (0, i.toRaphaelColor)(D[0]),
										stroke: Y && (0, i.toRaphaelColor)(D[1]),
										"stroke-width": A,
										"stroke-dasharray": F
									}), o && (he = o), V++, f._x = R, f._y = p
						}
						P.maxValue = 1, P.minValue = -1, 1 === (0, i.pluckNumber)(U.showvalue, 1) ? (I.sparkValues = {
							closeValue: {}
						}, I.sparkValues.closeValue.label = ie + "-" + le + (ne > 0 ? "-" + ne : i.BLANKSTRING)) : I.sparkValues = void 0
					}, t
				}(l["default"]);
				t["default"] = p
			},
			1093: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = {
					"initial.dataset.sparkWinLoss": o(a(493))["default"]["initial.dataset.column"]
				};
				t["default"] = r
			},
			1094: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1095))["default"];
				t["default"] = r
			},
			1095: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1088)),
					n = o(a(1096)),
					s = Math.max,
					c = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e), t.getName = function () {
							return "SparkColumn"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "SparkColumn"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "sparkcolumn Chart", t.singleseries = !1, t.defaultDatasetType = "sparkcolumn", t.showplotborder = 0, t.enablemousetracking = !
								0, t.canvasborderthickness = 1
						}, a.getDSdef = function () {
							return n["default"]
						}, a._parseCanvasCosmetics = function () {
							var e, t, a, o, r, l = {},
								n = this.getFromEnv("dataSource").chart,
								c = this.getFromEnv("color-manager"),
								u = this.config.is3D ? i.chartPaletteStr.chart3D : i.chartPaletteStr.chart2D,
								h = l.isRoundEdges = (0, i.pluckNumber)(n.useroundedges, 0),
								d = (0, i.pluckNumber)(n.showxaxisline, n.showyaxisline, 0) ? 0 : 1;
							return l.canvasBorderRadius = (0, i.pluckNumber)(n.plotborderradius, h ? 2 : 0), a = l.showCanvasBorder = Boolean((0, i.pluckNumber)
									(n.showcanvasborder, d, e, h ? 0 : 1)), r = l.oriCanvasBorderThickness = s((0, i.pluckNumber)(n.canvasborderthickness, h ? 0 :
									(0, i.pluckNumber)(this.config.canvasborderthickness, 1), 0)), e = l.canvasBorderWidth = this.is3D ? 0 : a ? r : 0, l.canvasBorderColor =
								(0, i.convertColor)((0, i.pluck)(n.canvasbordercolor, c.getColor("canvasBorderColor")), (0, i.pluck)(n.canvasborderalpha, c.getColor(
									"canvasBorderAlpha"))), t = l.canBGAlpha = (0, i.pluck)(n.canvasbgalpha, c.getColor("canvasBgAlpha")), l.canBGColor = {
									FCcolor: {
										color: (0, i.pluck)(n.canvasbgcolor, c.getColor(u.canvasBgColor)),
										alpha: (0, i.pluck)(n.canvasbgalpha, 100),
										angle: (0, i.pluck)(n.canvasbgangle, 0),
										ratio: (0, i.pluck)(n.canvasbgratio)
									}
								}, o = l.shadow = (0, i.pluckNumber)(n.showshadow, h, 0) && h ? {
									enabled: !0,
									opacity: t / 100
								} : 0, l.shadowOnCanvasFill = o && o.enabled, l.canvasPadding = (0, i.pluckNumber)(n.canvaspadding, 0), l.origCanvasTopPad =
								(0, i.pluckNumber)(n.canvastoppadding, 0), l.origCanvasBottomPad = (0, i.pluckNumber)(n.canvasbottompadding, 0), l.origCanvasLeftPad =
								(0, i.pluckNumber)(n.canvasleftpadding, 0), l.origCanvasRightPad = (0, i.pluckNumber)(n.canvasrightpadding, 0), l
						}, t
					}(l["default"]);
				t["default"] = c
			},
			1096: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = a(201),
					n = o(a(492)),
					s = o(a(1097)),
					c = Math.min;
				(0, l.addDep)({
					name: "sparkcolumnAnimation",
					type: "animationRule",
					extension: s["default"]
				});
				var u = function (e) {
					function t() {
						return e.apply(this, arguments) || this
					}(0, r["default"])(t, e);
					var a = t.prototype;
					return a.getType = function () {
						return "dataset"
					}, a.getName = function () {
						return "sparkColumn"
					}, a.parseAttributes = function () {
						e.prototype.parseAttributes.call(this);
						var t = this.getFromEnv("chart"),
							a = this.config,
							o = this.config.JSONData,
							r = t.getFromEnv("chart-attrib");
						a.showValues = (0, i.pluckNumber)(o.showvalues, r.showvalues, 0)
					}, a._setConfigure = function (t) {
						var a, o, r, l, n, s, u, h, d, p, g, f, m, v, b, k, C, x, T, w, A, S, y, N, F, D, E, L, M, R, _, V = this.getFromEnv("chart"),
							O = V.getFromEnv("dataSource").chart,
							I = this.config,
							P = V.config,
							G = this.config.JSONData,
							B = t || G.data,
							H = B && B.length,
							W = this.getFromEnv("xAxis").getTicksLen(),
							j = t && t.data.length || c(W, H),
							z = P.plothovereffect,
							U = this.getFromEnv("color-manager"),
							X = P.useroundedges;
						for (I.plotgradientcolor = i.BLANKSTRING, I.showvalues = (0, i.pluckNumber)(G.showvalues, O.showvalues, 0), I.showShadow = (0,
								i.pluckNumber)(O.showshadow, 0), e.prototype._setConfigure.call(this), M = this.components.data, R = I.maxValue, _ = I.minValue,
							a = (0, i.pluck)(O.plotfillcolor, U.getColor("plotFillColor")), g = (0, i.pluck)(O.plotfillalpha, i.HUNDREDSTRING), f = (0, i
								.pluck)(O.plotborderalpha, i.HUNDREDSTRING), m = (0, i.pluck)(O.plotbordercolor, a), v = (0, i.pluck)(O.highcolor, "000000"),
							b = (0, i.pluck)(O.lowcolor, "000000"), k = (0, i.pluck)(O.highbordercolor, O.plotbordercolor, v), C = (0, i.pluck)(O.lowbordercolor,
								O.plotbordercolor, b), D = 0; D < j; D++) {
							if (S = B[D], null, o = a, r = m, (p = (y = M[D]).config).setValue === R && (o = v, r = k, x = p.displayValue), y.config.setValue ===
								_ && (o = b, r = C, T = p.displayValue), p.originalPlotColor = o, p.plotbordercolor = r, p.colorArr = N = (0, i.getColumnColor)
								(o + i.COMMASTRING + I.plotgradientcolor, g, "0", "90", X, r, f, 0, 0), 0 !== z && N) {
								for (n = s = void 0, p.setValue === R && (n = O.highhovercolor, s = O.highhoveralpha), y.config.setValue === _ && (n = O.lowhovercolor,
										s = O.lowhoveralpha), E = (n = (n = l = (0, i.pluck)(S.hovercolor, G.hovercolor, n, O.plotfillhovercolor, O.columnhovercolor,
										N[0].FCcolor.color)).split(/\s{0,},\s{0,}/)).length, L = 0; L < E; L++) n[L] = (0, i.getLightColor)(n[L], 70);
								n = n.join(","), s = (0, i.pluck)(S.hoveralpha, G.hoveralpha, s, O.plotfillhoveralpha, O.columnhoveralpha, g), p.hoverColor =
									l, p.hoverAlpha = s, !(u = (0, i.pluck)(S.hovergradientcolor, G.hovergradientcolor, O.plothovergradientcolor, I.plotgradientcolor)) &&
									(u = i.BLANKSTRING), h = (0, i.pluck)(S.borderhovercolor, G.borderhovercolor, O.plotborderhovercolor, I.plotbordercolor), d =
									(0, i.pluck)(S.borderhoveralpha, G.borderhoveralpha, O.plotborderhoveralpha, O.plotfillhoveralpha, f, g), 1 === z && n ===
									N[0].FCcolor.color && (n = (0, i.getLightColor)(n, 70)), F = (0, i.getColumnColor)(n + i.COMMASTRING + u, s, "0", "90", X,
										h, d.toString(), 0, 0), p.setRolloutAttr = {
										fill: (0, i.toRaphaelColor)(N[0]),
										stroke: void 0,
										"stroke-width": void 0
									}, p.setRolloverAttr = {
										fill: (0, i.toRaphaelColor)(F[0]),
										stroke: void 0,
										"stroke-width": void 0
									}
							}
							p._x = D, p._y = p.setValue
						}
						for (D = 0; D < j; D++) {
							var K = M[D].config;
							void 0 !== K.setTooltext && (w = [56, 57, 60, 61], A = {
								highValue: x,
								highDataValue: x,
								lowValue: T,
								lowDataValue: T
							}, K.toolText = (0, i.parseTooltext)(K.setTooltext, w, A, S, O, G), K.finalTooltext = K.setTooltext = K.toolText)
						}
					}, t
				}(n["default"]);
				t["default"] = u
			},
			1097: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = {
					"initial.dataset.sparkColumn": o(a(493))["default"]["initial.dataset.column"]
				};
				t["default"] = r
			},
			1098: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1091))["default"];
				t["default"] = r
			},
			1099: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1100))["default"];
				t["default"] = r
			},
			1100: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(627),
					l = o(a(1101)),
					n = o(a(1105)),
					s = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).axisPaddingLeft = 0, t.axisPaddingRight = 0, t
						}(0, r["default"])(t, e), t.getName = function () {
							return "RealtimeArea"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "RealtimeArea"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this), i._setDefaultConfig.call(this);
							var t = this.config;
							t.defaultDatasetType = "realtimearea", t.enablemousetracking = !0
						}, a.getDSdef = function () {
							return n["default"]
						}, a.getDSGroupdef = function () {}, t
					}(l["default"]);
				t["default"] = s
			},
			1101: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(210)),
					i = o(a(207)),
					l = o(a(519)),
					n = a(193),
					s = o(a(1102)),
					c = o(a(582)),
					u = o(a(242)),
					h = o(a(262)),
					d = o(a(190)),
					p = a(201),
					g = o(a(1104)),
					f = a(1042),
					m = o(a(906)),
					v = a(205),
					b = o(a(1043)),
					k = n.preDefStr.visibleStr;

				function C(e, t) {
					var a = n.BLANKSTRING;
					(e && e.toString || e === n.BLANKSTRING || 0 === e) && (a = "value=" + e.toString()), (t && t.toString || t === n.BLANKSTRING) &&
					(a = a + "&label=" + t.toString()), a && this.feedData(a)
				}(0, p.addDep)({
					name: "realtimeColumnChartAnimation",
					type: "animationRule",
					extension: g["default"]
				}), d["default"].addDep(b["default"]);
				var x = function (e) {
					function t() {
						var t;
						t = e.call(this) || this;
						var a = (0, r["default"])(t);
						return d["default"].addDep(u["default"]), d["default"].addDep(h["default"]), t.showRTvalue = !0, t.canvasPadding = !0, t.isRealTime = !
							0, t.rtManageSpace = !0, t.transposeAxis = !0, t._setData = C, t.eiMethods = f.eiMethods, t._drawRTValue = function () {
								a._drawRealTimeValue()
							}, t
					}(0, i["default"])(t, e), t.getName = function () {
						return "RealtimeColumn"
					};
					var a = t.prototype;
					return a.getName = function () {
						return "RealtimeColumn"
					}, a.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.defaultDatasetType = "realtimecolumn", t.enablemousetracking = !0
					}, a.asyncRealTimeValueDraw = function () {
						this.addJob("realtimevaluedraw", this._drawRTValue, v.priorityList && v.priorityList.draw)
					}, a.parseChartAttr = function (t) {
						e.prototype.parseChartAttr.call(this, t), this.config.drawTrendRegion = 0
					}, a._setCategories = function () {
						var e, t = this.getChildren("xAxis")[0],
							a = [],
							o = this.config.realTimeConfig,
							r = o && o.clear ? void 0 : this.getFromEnv("dataSource").categories && this.getFromEnv("dataSource").categories[0] && this.getFromEnv(
								"dataSource").categories[0].category,
							i = r && Array.isArray(r) && r.filter((function (e) {
								return !e.vline
							})).length || 0,
							l = o.numDisplaySets;
						i < l ? (a.length = l - i, e = r ? a.concat(r) : a) : e = i > l && l >= 0 ? l ? r.slice(-l) : [] : r.slice(0), t.setTickValues(
							e)
					}, a._realTimeValuePositioning = function (e) {
						var t, a, o = this.getChildren(),
							r = this.getFromEnv("smartLabel"),
							i = this.config,
							l = i.realTimeConfig || (i.realTimeConfig = {}),
							s = l.realTimeValuePadding,
							c = o.xAxis[0].config,
							u = c.trend.trendStyle,
							h = l.style = {
								color: (0, n.convertColor)((0, n.pluck)(l.realtimeValueFontColor, u.color), (0, n.pluck)(c.trendlineAlpha, 99)),
								fontFamily: (0, n.pluck)(l.realtimeValueFont, u.fontFamily),
								fontSize: (0, n.pluck)(l.realtimeValueFontSize, u.fontSize),
								fontWeight: (0, n.pluck)(l.fontWeight, u.fontWeight),
								lineHeight: (0, n.pluckNumber)(u.lineHeight)
							};
						return r.useEllipsesOnOverflow(i.useEllipsesWhenOverflow), r.setStyle(h), l.height = t = r.getOriSize(n.TESTSTR).height, l.canvasBottom =
							i.canvasBottom, (a = t + s) > e && (a = e), {
								bottom: a
							}
					}, a.draw = function () {
						e.prototype.draw.call(this), this.showRTvalue && this.config.realTimeConfig.showRTValue && this._drawRealTimeValue()
					}, a._drawRealTimeValue = function () {
						var e, t, a, o, r, i, l = this.getFromEnv("chart"),
							s = this.config,
							c = l.getDatasets(),
							u = l.getFromEnv("animationManager"),
							h = this.getFromEnv("smartLabel"),
							d = s.realTimeConfig,
							p = d.realtimeValueSeparator,
							g = c.length,
							f = n.BLANKSTRING,
							m = d.canvasBottom,
							v = d.height,
							b = s.canvasLeft,
							C = s.canvasRight,
							x = d.style || {},
							T = this.getGraphicalElement("realTimeValue"),
							w = this.getChildContainer(),
							A = l.getContainer().parentGroup,
							S = w.realTimeValueGroup;
						if (this.removeJob("realtimevaluedraw"), d.clear && e && u.setAnimation({
								el: e,
								attr: {
									text: n.BLANKSTRING
								},
								component: this,
								label: "label"
							}), S) {
							for (i = 0; i < g; i++) f += (r = (o = (a = c[i].components.data)[a.length - 1]) && o.config.displayValue) ? void 0 === r ? n
								.BLANKSTRING : r + p : n.BLANKSTRING;
							f = f.substring(0, f.length - p.length), h.useEllipsesOnOverflow(s.useEllipsesWhenOverflow), h.setStyle(x), t = {
								x: (b + C) / 2 || 0,
								y: m - v / 2 || 0,
								"font-size": x.fontSize,
								"font-weight": x.fontWeight,
								"font-family": x.fontFamily,
								"line-height": x.lineHeight,
								text: f,
								fill: x.color,
								visibility: k
							}, e = u.setAnimation({
								el: T || "text",
								attr: t,
								container: S,
								label: "rtValue",
								component: l
							}), !0, T || this.addGraphicalElement("realTimeValue", e)
						} else S = l.addChildContainer("realTimeValueGroup", u.setAnimation({
							el: "group",
							attr: {
								name: "realTimeValue"
							},
							container: A,
							label: "group",
							component: l
						}).insertBefore(w.datalabelsGroup))
					}, a._hideRealTimeValue = function () {
						var e = this.getGraphicalElement("realTimeValue");
						e && e.hide()
					}, a._setRTmenu = function (e, t) {
						f._setRTmenu.call(this, e, t)
					}, a._getDataJSON = function () {
						return this.config.realTimeConfig.legacyUpdateObj || {
							values: []
						}
					}, a._checkInvalidSpecificData = function () {
						var e = this.getFromEnv("dataSource").dataset,
							t = this.getChildren("dataStreamer") && this.getChildren("dataStreamer")[0];
						if (!e) return t && t._stopUpdate(), !0
					}, a._checkInvalidData = function () {
						var e = this.getFromEnv("dataSource"),
							t = this.getChildren("dataStreamer") && this.getChildren("dataStreamer")[0];
						if (e === {}) return t && t._stopUpdate(), !0
					}, a.getDSGroupdef = function () {
						return c["default"]
					}, a.getDSdef = function () {
						return s["default"]
					}, a._realTimeConfigure = function () {
						f._realTimeConfigure.call(this)
					}, a._stopUpdate = function (e) {
						f._stopUpdate.call(this, e)
					}, a._restartUpdate = function () {
						f._restartUpdate.call(this)
					}, a._isUpdateActive = function () {
						return f._isUpdateActive.call(this)
					}, a._getData = function () {
						return m["default"].call(this)
					}, a.realTimeUpdate = function (e) {
						f.realTimeUpdate.call(this, e)
					}, a._RTmanageSpace = function () {
						f._RTmanageSpace.call(this)
					}, a.realTimeDraw = function (e) {
						void 0 === e && (e = {}), f.realTimeDraw.call(this, e)
					}, a.feedData = function (e) {
						return f.feedData.call(this, e)
					}, a._linearDataParser = function (e) {
						return f._linearDataParser.call(this, e)
					}, a._clearChart = function (e) {
						f._clearChart.call(this, e)
					}, t
				}(l["default"]);
				t["default"] = x
			},
			1102: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = t.resetCatPos = t._realTimeConfigure = void 0;
				var r = o(a(207)),
					i = o(a(492)),
					l = a(201),
					n = o(a(1103));
				(0, l.addDep)({
					name: "realtimeColumnAnimation",
					type: "animationRule",
					extension: n["default"]
				});
				var s = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a._realTimeConfigure = function (e) {
							var t, a = this.getFromEnv("chart"),
								o = this.components.data,
								r = [],
								i = a.config.realTimeConfig.numDisplaySets;
							(t = e ? 0 : Math.min(this.getFromEnv("xAxis").getTicksLen(), o && o.length)) < i ? (r.length = i - t, this.components.data =
								r.concat(o)) : t > i && this.components.data.splice(i, t - i), this.resetCatPos && this.resetCatPos()
						}, a.getType = function () {
							return "dataset"
						}, a.getName = function () {
							return "realtimeColumn"
						}, a.resetCatPos = function () {
							var e, t = this.components.data,
								a = t.length;
							if (t && a)
								for (e = 0; e < a; e++) t[e] && t[e].config && (t[e].config._x = e)
						}, t
					}(i["default"]),
					c = s.prototype._realTimeConfigure,
					u = s.prototype.resetCatPos;
				t.resetCatPos = u, t._realTimeConfigure = c;
				var h = s;
				t["default"] = h
			},
			1103: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = {
					"initial.dataset.realtimeColumn": o(a(493))["default"]["initial.dataset.column"]
				};
				t["default"] = r
			},
			1104: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				t["default"] = {
					"initial.chartAPI.RealtimeColumn": function () {
						return {
							"*": null
						}
					}
				}
			},
			1105: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(510)),
					l = a(1102),
					n = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a._realTimeConfigure = function (e) {
							l._realTimeConfigure.call(this, e)
						}, a.getType = function () {
							return "dataset"
						}, a.getName = function () {
							return "realTimeArea"
						}, t
					}(i["default"]);
				n.prototype.resetCatPos = l.resetCatPos;
				var s = n;
				t["default"] = s
			},
			1106: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1101))["default"];
				t["default"] = r
			},
			1107: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1108))["default"];
				t["default"] = r
			},
			1108: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(627),
					l = o(a(1101)),
					n = o(a(1109)),
					s = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).axisPaddingLeft = 0, t.axisPaddingRight = 0, t
						}(0, r["default"])(t, e), t.getName = function () {
							return "RealtimeLine"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "RealtimeLine"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this), i._setDefaultConfig.call(this);
							var t = this.config;
							t.defaultDatasetType = "realtimeline", t.zeroplanethickness = 1, t.zeroplanealpha = 40, t.showzeroplaneontop = 0, t.enablemousetracking = !
								0
						}, a.getDSdef = function () {
							return n["default"]
						}, a.getDSGroupdef = function () {}, t
					}(l["default"]);
				t["default"] = s
			},
			1109: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(509)),
					l = a(1102),
					n = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a._realTimeConfigure = function (e) {
							l._realTimeConfigure.call(this, e)
						}, a.getType = function () {
							return "dataset"
						}, a.getName = function () {
							return "realtimeLine"
						}, t
					}(i["default"]);
				n.prototype.resetCatPos = l.resetCatPos;
				var s = n;
				t["default"] = s
			},
			1110: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1111))["default"];
				t["default"] = r
			},
			1111: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(627),
					l = o(a(1100)),
					n = o(a(1105)),
					s = o(a(591)),
					c = a(193),
					u = o(a(199)),
					h = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e), t.getName = function () {
							return "RealtimeStackedArea"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "RealtimeStackedArea"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this), i._setDefaultConfig.call(this);
							var t = this.config;
							t.defaultDatasetType = "realtimearea", t.isstacked = !0, t.enablemousetracking = !0, this.addToEnv("useImprovedLabelPlacement", !
								0), this.addToEnv("useLinePlotGroupForAnchorPlacement", !0)
						}, a.configureAttributes = function (t) {
							e.prototype.configureAttributes.call(this, t);
							var a = this.config,
								o = this.getFromEnv("chart-attrib");
							a.showSum = (0, u["default"])(o.showsum, 0), a.showSum && (a.valueposition = (0, c.parseUnsafeString)((0, c.pluck)(o.valueposition,
								"below")))
						}, a.getDSdef = function () {
							return n["default"]
						}, a.getDSGroupdef = function () {
							return s["default"]
						}, t
					}(l["default"]);
				t["default"] = h
			},
			1112: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1113))["default"];
				t["default"] = r
			},
			1113: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1101)),
					l = o(a(591)),
					n = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e), t.getName = function () {
							return "RealtimeStackedColumn"
						};
						var a = t.prototype;
						return a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.isstacked = !0, t.enablemousetracking = !0
						}, a.getName = function () {
							return "RealtimeStackedColumn"
						}, a.getDSGroupdef = function () {
							return l["default"]
						}, t
					}(i["default"]);
				t["default"] = n
			},
			1114: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1115))["default"];
				t["default"] = r
			},
			1115: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(627),
					l = o(a(1101)),
					n = o(a(1109)),
					s = a(561),
					c = o(a(562)),
					u = o(a(563)),
					h = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).isRealTime = !0, t.axisPaddingLeft = 0, t.isDual = !0, t.axisPaddingRight = 0, t.getSpecificxAxisConf =
								s.getSpecificxAxisConf, t.getSpecificyAxisConf = s.getSpecificyAxisConf, t.registerFactory("axis", c["default"], ["canvas"]),
								t.registerFactory("dataset", u["default"], ["vCanvas"]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "RealtimeLineDy"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "RealtimeLineDy"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this), i._setDefaultConfig.call(this);
							var t = this.config;
							t.defaultDatasetType = "RealtimeLine", t.zeroplanethickness = 1, t.zeroplanealpha = 40, t.showzeroplaneontop = 0, t.enablemousetracking = !
								0, t.isdual = !0, t.syncaxislimits = 0
						}, a._feedAxesRawData = function () {
							return s._feedAxesRawData.call(this)
						}, a.getDSdef = function () {
							return n["default"]
						}, a.getDSType = function () {
							return "RealtimeLine"
						}, a.getDSGroupdef = function () {}, t
					}(l["default"]);
				h.prototype.setAxisDimention = s.setAxisDimention;
				var d = h;
				t["default"] = d
			},
			1116: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1117))["default"];
				t["default"] = r
			},
			1117: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1049)),
					n = a(1073),
					s = o(a(1075)),
					c = o(a(1046)),
					u = o(a(306)),
					h = i.BLANK,
					d = i.preDefStr.POSITION_START,
					p = i.preDefStr.POSITION_END,
					g = i.preDefStr.POSITION_BOTTOM,
					f = i.preDefStr.POSITION_MIDDLE,
					m = Math,
					v = m.ceil,
					b = m.max,
					k = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).defaultSeriesType = "hbullet", t.gaugeType = 1, t.defaultCaptionPadding = 5, t.rendererId =
								"hbullet", t.isHorizontal = !0, t.config.isAxisOpposite = !1, t.config.scalePosition = g, t.config.canBeScalePosition = "top",
								t.rtManageSpace = !0, t.ticksOnRight = 0, t.hasCanvas = !0, t.isAxisReverse = !1, t.defaultPaletteOptions = {
									paletteColors: [
										["A6A6A6", "CCCCCC", "E1E1E1", "F0F0F0"],
										["A7AA95", "C4C6B7", "DEDFD7", "F2F2EE"],
										["04C2E3", "66E7FD", "9CEFFE", "CEF8FF"],
										["FA9101", "FEB654", "FED7A0", "FFEDD5"],
										["FF2B60", "FF6C92", "FFB9CB", "FFE8EE"]
									],
									bgColor: ["FFFFFF", "CFD4BE,F3F5DD", "C5DADD,EDFBFE", "A86402,FDC16D", "FF7CA0,FFD1DD"],
									bgAngle: [270, 270, 270, 270, 270],
									bgRatio: ["0,100", "0,100", "0,100", "0,100", "0,100"],
									bgAlpha: ["100", "60,50", "40,20", "20,10", "30,30"],
									toolTipBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
									toolTipBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
									baseFontColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
									tickColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
									trendColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
									plotFillColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
									borderColor: ["767575", "545454", "415D6F", "845001", "68001B"],
									borderAlpha: [50, 50, 50, 50, 50]
								}, t.showRTvalue = !1, t.canvasPadding = !1, t.defaultPlotShadow = 1, t.realtimeEnabled = !0, t.chartleftmargin = 15, t.chartrightmargin =
								15, t.charttopmargin = 10, t.chartbottommargin = 10, t.showTooltip = 0, t.connectTickMarks = 0, t.drawPlotlines = !1, t.drawPlotBands = !
								1, t.isRealTime = !0, t.colorRange = !0, t.registerFactory("dataset", c["default"], ["vCanvas"]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Hbullet"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "Hbullet"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Horizontal Bullet Gauge", t.defaultDatasetType = "bullet", t.singleseries = !0, t.skipCanvasDrawing = !0
						}, a._RTmanageSpace = function () {
							var e, t, a = this.config,
								o = this.getChildren("scale")[0];
							e = (t = this.getChildren("dataset")[0]._manageSpaceHorizontal(.7 * a.oriCanvasWidth)).right - a.labelSpace.right, this._allocateSpace({
								right: e
							}), o.setAxisDimention({
								axisLength: a.canvasWidth
							}), a.labelSpace = t
						}, a.configureAttributes = function (t) {
							e.prototype.configureAttributes.call(this, t), n.configureAttributes.call(this)
						}, a._getData = function () {
							return n._getData.call(this)
						}, a._spaceManager = function () {
							var e, t, a, o, r, l = this.config,
								n = this.getChildren("canvas")[0],
								s = this.getChildren("dataset")[0],
								c = this.getChildren("scale")[0],
								u = this.config.is3D,
								h = this.getFromEnv("dataSource").chart,
								d = (0, i.pluckNumber)(h.showborder, u ? 0 : 1),
								p = l.minChartWidth,
								g = l.minChartHeight,
								f = l.borderWidth = d ? (0, i.pluckNumber)(h.borderthickness, 1) : 0;
							l.canvasWidth - 2 * f < p && (r = (l.canvasWidth - p) / 2), l.canvasHeight - 2 * f < g && (o = (l.canvasHeight - g) / 2), this
								._allocateSpace({
									top: o || f,
									bottom: o || f,
									left: r || f,
									right: r || f
								}), e = .7 * l.canvasWidth, this._allocateSpace(c.placeAxis(l.availableHeight)), this._allocateSpace(this._manageActionBarSpace &&
									this._manageActionBarSpace(.225 * l.availableHeight) || {}), l.oriCanvasWidth = l.canvasWidth, t = .225 * l.canvasHeight,
								this._manageChartMenuBar(t), a = b(this.getChildren("subCaption")[0].config.width || 0, this.getChildren("caption")[0].config
									.width || 0), l.labelSpace = s._manageSpaceHorizontal(e - .7 * a), s._manageSpace && this._allocateSpace(l.labelSpace), l.oriCanvasWidth -=
								a, t = .325 * l.canvasHeight, n.setDimension({
									top: l.canvasTop,
									left: l.canvasLeft,
									width: l.canvasWidth,
									height: l.canvasHeight
								})
						}, a._manageCaptionSpacing = function () {
							var e, t, a, o, r, l = this.config,
								n = this.getChildren("caption")[0],
								s = this.getChildren("subCaption")[0],
								c = n.config,
								u = s.config,
								g = this.getFromEnv("dataSource").chart,
								f = this.getFromEnv("smartLabel"),
								m = (0, i.parseUnsafeString)(g.caption),
								b = (0, i.parseUnsafeString)(g.subcaption),
								k = (0, i.pluckNumber)(g.captionpadding, 2),
								C = l.height,
								x = 0,
								T = 0,
								w = 0,
								A = .3 * l.width,
								S = {};
							return .3 * C > 3 && (c.captionPadding = u.captionPadding = k, m !== h && (o = c.style, x = c.captionLineHeight = v(parseFloat(
								(0, i.pluck)(o.fontHeight, o.lineHeight), 10), 12)), b !== h && (r = u.style, T = v(parseInt((0, i.pluck)(r.lineHeight, r.fontHeight),
								10), 12)), (x > 0 || T > 0) && (f.useEllipsesOnOverflow(l.useEllipsesWhenOverflow), f.setStyle(o), (t = f.getSmartText(m, A,
									C)).width > 0 && (t.width += 2, w = t.height), f.setStyle(r), (a = f.getSmartText(b, A, C - w)).width > 0 && (a.width += 2),
								c.captionSubCaptionGap = t.height + 0 + .2 * T, e = Math.max(t.width, a.width), c.text = t.text, c.height = w = t.height, c
								.width = t.width, c.tooltext && (c.originalText = t.tooltext), u.text = a.text, u.height = w = a.height, u.width = a.width,
								u.tooltext && (c.originalText = a.tooltext), (e = Math.max(t.width, a.width)) > 0 && (e += k), c.maxCaptionWidth = u.maxCaptionWidth =
								e, c.isOnLeft ? S.left = e : S.right = e)), c.isOnLeft ? c.align = u.align = p : c.align = u.align = d, S
						}, a._manageCaptionPosition = function () {
							var e = this.config,
								t = this.getChildren("caption")[0],
								a = this.getChildren("subCaption")[0],
								o = t.config,
								r = a.config,
								i = o.captionPosition,
								l = b(o.width, r.width),
								n = e.borderWidth || 0,
								s = o.captionSubCaptionGap;
							switch (i) {
							case f:
								o.y = .5 * (e.canvasTop + e.canvasHeight);
								break;
							case g:
								o.y = e.canvasBottom - (o.height + r.height);
								break;
							default:
								o.y = e.canvasTop
							}
							r.y = o.y + s, o.isOnLeft ? o.x = r.x = e.marginLeft + l + n : o.x = r.x = e.width - e.marginRight - l - n
						}, a._feedAxesRawData = function () {
							var e = this.config,
								t = this.getFromEnv("color-manager"),
								a = this.getFromEnv("number-formatter"),
								o = this.getFromEnv("dataSource").chart,
								r = i.chartPaletteStr.chart2D,
								l = (0, i.pluckNumber)(o.ticksbelowgraph, !e.isAxisOpposite),
								n = (0, i.pluckNumber)((0, u["default"])(o.scaleposition, e.scalePosition) ? e.isAxisOpposite : (0, u["default"])(o.scaleposition,
									e.canBeScalePosition) ? !e.isAxisOpposite : void 0, !l);
							return [{
								isVertical: !this.isHorizontal,
								isReverse: !1,
								isOpposit: n,
								outCanfontFamily: (0, i.pluck)(o.outcnvbasefont, o.basefont, "Verdana,sans"),
								outCanfontSize: (0, i.pluckFontSize)(o.outcnvbasefontsize, o.basefontsize, 10),
								outCancolor: (0, i.pluck)(o.outcnvbasefontcolor, o.basefontcolor, t.getColor(r.baseFontColor)).replace(/^#?([a-f0-9]+)/gi,
									"#$1"),
								useEllipsesWhenOverflow: o.useellipseswhenoverflow,
								divLineColor: (0, i.pluck)(o.vdivlinecolor, t.getColor(r.divLineColor)),
								divLineAlpha: (0, i.pluck)(o.vdivlinealpha, t.getColor("divLineAlpha")),
								divLineThickness: (0, i.pluckNumber)(o.vdivlinethickness, 1),
								divLineIsDashed: Boolean((0, i.pluckNumber)(o.vdivlinedashed, o.vdivlineisdashed, 0)),
								divLineDashLen: (0, i.pluckNumber)(o.vdivlinedashlen, 4),
								divLineDashGap: (0, i.pluckNumber)(o.vdivlinedashgap, 2),
								showAlternateGridColor: (0, i.pluckNumber)(o.showalternatevgridcolor, 0),
								alternateGridColor: (0, i.pluck)(o.alternatevgridcolor, t.getColor("altVGridColor")),
								alternateGridAlpha: (0, i.pluck)(o.alternatevgridalpha, t.getColor("altVGridAlpha")),
								numDivLines: o.numvdivlines,
								labelFont: o.labelfont,
								labelFontSize: o.labelfontsize,
								labelFontColor: o.labelfontcolor,
								labelAlpha: o.labelalpha,
								labelFontBold: o.labelfontbold,
								labelFontItalic: o.labelfontitalic,
								axisName: o.xaxisname,
								axisMinValue: a.getCleanValue(o.lowerlimit),
								axisMaxValue: a.getCleanValue(o.upperlimit),
								setAdaptiveMin: o.setadaptivexmin,
								adjustDiv: o.adjusttm,
								labelDisplay: o.labeldisplay,
								showLabels: o.showlabels,
								rotateLabels: o.rotatelabels,
								slantLabel: (0, i.pluckNumber)(o.slantlabels, o.slantlabel),
								labelStep: (0, i.pluckNumber)(o.labelstep, o.xaxisvaluesstep),
								showAxisValues: (0, i.pluckNumber)(o.showxaxisvalues, o.showxaxisvalue),
								showDivLineValues: (0, i.pluckNumber)(o.showvdivlinevalues, o.showvdivlinevalues),
								showZeroPlane: o.showvzeroplane,
								zeroPlaneColor: o.vzeroplanecolor,
								zeroPlaneThickness: o.vzeroplanethickness,
								zeroPlaneAlpha: o.vzeroplanealpha,
								showZeroPlaneValue: o.showvzeroplanevalue,
								trendlineColor: o.trendlinecolor,
								trendlineToolText: o.trendlinetooltext,
								trendlineThickness: o.trendlinethickness,
								trendlineAlpha: o.trendlinealpha,
								showTrendlinesOnTop: o.showtrendlinesontop,
								showAxisLine: (0, i.pluckNumber)(o.showxaxisline, o.showaxislines, o.drawAxisLines, 0),
								axisLineThickness: (0, i.pluckNumber)(o.xaxislinethickness, o.axislinethickness, 1),
								axisLineAlpha: (0, i.pluckNumber)(o.xaxislinealpha, o.axislinealpha, 100),
								axisLineColor: (0, i.pluck)(o.xaxislinecolor, o.axislinecolor, "#000000"),
								majorTMNumber: o.majortmnumber,
								majorTMColor: o.majortmcolor,
								majorTMAlpha: o.majortmalpha,
								majorTMHeight: o.majortmheight,
								tickValueStep: o.tickvaluestep,
								showTickMarks: o.showtickmarks,
								connectTickMarks: o.connecttickmarks,
								showTickValues: o.showtickvalues,
								majorTMThickness: o.majortmthickness,
								reverseScale: o.reversescale,
								showLimits: (0, i.pluckNumber)(o.showlimits, o.showtickmarks),
								minorTMNumber: (0, i.pluckNumber)(o.minortmnumber, 0),
								minorTMColor: o.minortmcolor,
								minorTMAlpha: o.minortmalpha,
								minorTMHeight: (0, i.pluckNumber)(o.minortmheight, o.minortmwidth),
								minorTMThickness: o.minortmthickness,
								tickMarkDistance: (0, i.pluckNumber)(o.tickmarkdistance, o.tickmarkgap),
								tickValueDistance: (0, i.pluckNumber)(o.tickvaluedistance, o.displayvaluedistance),
								placeTicksInside: o.placeticksinside,
								placeValuesInside: o.placevaluesinside,
								upperLimitDisplay: o.upperlimitdisplay,
								lowerLimitDisplay: o.lowerlimitdisplay
							}]
						}, a.getDSdef = function () {
							return s["default"]
						}, a._fetchCaptionPos = function () {
							return this.getChildren("caption")[0].config.align === p ? 0 : -1
						}, t
					}(l["default"]);
				t["default"] = k
			},
			1118: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1119))["default"];
				t["default"] = r
			},
			1119: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1049)),
					n = a(1073),
					s = o(a(1075)),
					c = o(a(1046)),
					u = o(a(306)),
					h = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).defaultSeriesType = "bullet", t.gaugeType = 4, t.ticksOnRight = 0, t.hasCanvas = !0, t.isHorizontal = !
								1, t.config.isAxisOpposite = !1, t.config.scalePosition = "left", t.config.canBeScalePosition = "right", t.isAxisReverse = !1,
								t.defaultPaletteOptions = {
									paletteColors: [
										["A6A6A6", "CCCCCC", "E1E1E1", "F0F0F0"],
										["A7AA95", "C4C6B7", "DEDFD7", "F2F2EE"],
										["04C2E3", "66E7FD", "9CEFFE", "CEF8FF"],
										["FA9101", "FEB654", "FED7A0", "FFEDD5"],
										["FF2B60", "FF6C92", "FFB9CB", "FFE8EE"]
									],
									bgColor: ["FFFFFF", "CFD4BE,F3F5DD", "C5DADD,EDFBFE", "A86402,FDC16D", "FF7CA0,FFD1DD"],
									bgAngle: [270, 270, 270, 270, 270],
									bgRatio: ["0,100", "0,100", "0,100", "0,100", "0,100"],
									bgAlpha: ["100", "60,50", "40,20", "20,10", "30,30"],
									toolTipBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
									toolTipBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
									baseFontColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
									tickColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
									trendColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
									plotFillColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
									borderColor: ["767575", "545454", "415D6F", "845001", "68001B"],
									borderAlpha: [50, 50, 50, 50, 50]
								}, t.showRTvalue = !1, t.canvasPadding = !1, t.defaultPlotShadow = 1, t.realtimeEnabled = !0, t.chartleftmargin = 15, t.chartrightmargin =
								15, t.charttopmargin = 10, t.chartbottommargin = 10, t.showTooltip = 0, t.connectTickMarks = 0, t.drawPlotlines = !1, t.drawPlotBands = !
								1, t.isRealTime = !0, t.colorRange = !0, t.registerFactory("dataset", c["default"], ["vCanvas"]), t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Vbullet"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "Vbullet"
						}, a.configureAttributes = function (t) {
							e.prototype.configureAttributes.call(this, t), n.configureAttributes.call(this)
						}, a._getData = function () {
							return n._getData.call(this)
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Vertical Bullet Gauge", t.defaultDatasetType = "bullet", t.singleseries = !0, t.skipCanvasDrawing = !0
						}, a.getDSdef = function () {
							return s["default"]
						}, a._feedAxesRawData = function () {
							var e = this.config,
								t = this.getFromEnv("color-manager"),
								a = this.getFromEnv("dataSource").chart,
								o = this.getFromEnv("number-formatter"),
								r = i.chartPaletteStr.chart2D,
								l = (0, i.pluckNumber)(a.ticksonright),
								n = (0, i.pluckNumber)((0, u["default"])(a.scaleposition, e.scalePosition) ? e.isAxisOpposite : (0, u["default"])(a.scaleposition,
									e.canBeScalePosition) ? !e.isAxisOpposite : void 0, void 0 !== l ? l : void 0, e.isAxisOpposite);
							return [{
								isVertical: !this.isHorizontal,
								isReverse: !0,
								isOpposit: n,
								outCanfontFamily: (0, i.pluck)(a.outcnvbasefont, a.basefont, "Verdana,sans"),
								outCanfontSize: (0, i.pluckFontSize)(a.outcnvbasefontsize, a.basefontsize, 10),
								outCancolor: (0, i.pluck)(a.outcnvbasefontcolor, a.basefontcolor, t.getColor(r.baseFontColor)).replace(/^#?([a-f0-9]+)/gi,
									"#$1"),
								useEllipsesWhenOverflow: a.useellipseswhenoverflow,
								divLineColor: (0, i.pluck)(a.vdivlinecolor, t.getColor(r.divLineColor)),
								divLineAlpha: (0, i.pluck)(a.vdivlinealpha, t.getColor("divLineAlpha")),
								divLineThickness: (0, i.pluckNumber)(a.vdivlinethickness, 1),
								divLineIsDashed: Boolean((0, i.pluckNumber)(a.vdivlinedashed, a.vdivlineisdashed, 0)),
								divLineDashLen: (0, i.pluckNumber)(a.vdivlinedashlen, 4),
								divLineDashGap: (0, i.pluckNumber)(a.vdivlinedashgap, 2),
								showAlternateGridColor: (0, i.pluckNumber)(a.showalternatevgridcolor, 0),
								alternateGridColor: (0, i.pluck)(a.alternatevgridcolor, t.getColor("altVGridColor")),
								alternateGridAlpha: (0, i.pluck)(a.alternatevgridalpha, t.getColor("altVGridAlpha")),
								numDivLines: a.numvdivlines,
								labelFont: a.labelfont,
								labelFontSize: a.labelfontsize,
								labelFontColor: a.labelfontcolor,
								labelAlpha: a.labelalpha,
								labelFontBold: a.labelfontbold,
								labelFontItalic: a.labelfontitalic,
								axisName: a.xaxisname,
								axisMinValue: o.getCleanValue(a.lowerlimit),
								axisMaxValue: o.getCleanValue(a.upperlimit),
								setAdaptiveMin: a.setadaptivexmin,
								adjustDiv: a.adjusttm,
								labelDisplay: a.labeldisplay,
								showLabels: a.showlabels,
								rotateLabels: a.rotatelabels,
								slantLabel: (0, i.pluckNumber)(a.slantlabels, a.slantlabel),
								labelStep: (0, i.pluckNumber)(a.labelstep, a.xaxisvaluesstep),
								showAxisValues: (0, i.pluckNumber)(a.showxaxisvalues, a.showxaxisvalue),
								showDivLineValues: (0, i.pluckNumber)(a.showvdivlinevalues, a.showvdivlinevalues),
								showZeroPlane: a.showvzeroplane,
								zeroPlaneColor: a.vzeroplanecolor,
								zeroPlaneThickness: a.vzeroplanethickness,
								zeroPlaneAlpha: a.vzeroplanealpha,
								showZeroPlaneValue: a.showvzeroplanevalue,
								trendlineColor: a.trendlinecolor,
								trendlineToolText: a.trendlinetooltext,
								trendlineThickness: a.trendlinethickness,
								trendlineAlpha: a.trendlinealpha,
								showTrendlinesOnTop: a.showtrendlinesontop,
								showAxisLine: (0, i.pluckNumber)(a.showxaxisline, a.showaxislines, a.drawAxisLines, 0),
								axisLineThickness: (0, i.pluckNumber)(a.xaxislinethickness, a.axislinethickness, 1),
								axisLineAlpha: (0, i.pluckNumber)(a.xaxislinealpha, a.axislinealpha, 100),
								axisLineColor: (0, i.pluck)(a.xaxislinecolor, a.axislinecolor, "#000000"),
								majorTMNumber: a.majortmnumber,
								majorTMColor: a.majortmcolor,
								majorTMAlpha: a.majortmalpha,
								majorTMHeight: a.majortmheight,
								tickValueStep: a.tickvaluestep,
								showTickMarks: a.showtickmarks,
								connectTickMarks: a.connecttickmarks,
								showTickValues: a.showtickvalues,
								majorTMThickness: a.majortmthickness,
								reverseScale: a.reversescale,
								showLimits: (0, i.pluckNumber)(a.showlimits, a.showtickmarks),
								minorTMNumber: (0, i.pluckNumber)(a.minortmnumber, 0),
								minorTMColor: a.minortmcolor,
								minorTMAlpha: a.minortmalpha,
								minorTMHeight: (0, i.pluckNumber)(a.minortmheight, a.minortmwidth),
								minorTMThickness: a.minortmthickness,
								tickMarkDistance: (0, i.pluckNumber)(a.tickmarkdistance, a.tickmarkgap),
								tickValueDistance: (0, i.pluckNumber)(a.tickvaluedistance, a.displayvaluedistance),
								placeTicksInside: a.placeticksinside,
								placeValuesInside: a.placevaluesinside,
								upperLimitDisplay: a.upperlimitdisplay,
								lowerLimitDisplay: a.lowerlimitdisplay
							}]
						}, t
					}(l["default"]);
				t["default"] = h
			},
			1120: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1121))["default"];
				t["default"] = r
			},
			1121: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1122)),
					l = o(a(1123)),
					n = a(193),
					s = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).useSortedData = !0, t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Funnel"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "funnel"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Funnel Chart", t.defaultDatasetType = "funnel", t.enablemousetracking = !0
						}, a.configureAttributes = function () {
							e.prototype.configureAttributes.call(this);
							var t = this.getFromEnv("dataSource"),
								a = (0, n.pluckNumber)(t.chart.streamlineddata, 1);
							this.config.PLOT_COLOR_INDEX_START = a ? -1 : 0, this.config.alignLegendWithCanvas = 0
						}, a.getDSdef = function () {
							return l["default"]
						}, t
					}(i["default"]);
				t["default"] = s
			},
			1122: function (e, t, a) {
				"use strict";
				var o = a(191),
					r = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var i = r(a(207)),
					l = a(193),
					n = r(a(418)),
					s = o(a(431)),
					c = r(a(491)),
					u = r(a(522)),
					h = a(520),
					d = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).showRTvalue = !1, t.canvasPadding = !1, t.sliceOnLegendClick = !0, t.defaultPlotShadow = 1, t
								.subTitleFontSizeExtender = 0, t.tooltippadding = 3, t.defaultPaletteOptions = s, t.drawAnnotations = !0, t.isDataLabelBold = !
								1, t.dontShowLegendByDefault = !0, t.formatnumberscale = 1, t.alignCaptionWithCanvas = 0, t.registerFactory("dataset", c[
									"default"], ["vCanvas", "legend"]), t.registerFactory("legend", u["default"]), t
						}(0, i["default"])(t, e), t.getName = function () {
							return "FunnelPyramidBase"
						};
						var a = t.prototype;
						return a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.showRTvalue = !1, t.canvasPadding = !1, t.sliceOnLegendClick = !0, t.defaultPlotShadow = 1, t.subTitleFontSizeExtender = 0,
								t.tooltippadding = 3, t.defaultPaletteOptions = s, t.drawAnnotations = !0, t.isDataLabelBold = !1, t.dontShowLegendByDefault = !
								0, t.alignCaptionWithCanvas = 0, t.formatnumberscale = 1, t.isSingleSeries = !0, t.hasLegend = !0, t.decimals = 2, t.defaultDatasetType =
								"funnelpyramidbaseds", t.skipCanvasDrawing = !0
						}, a.parseChartAttr = function (t) {
							e.prototype.parseChartAttr.call(this, t);
							var a = this.getFromEnv("chart-attrib");
							this.config.showLegend = (0, l.pluckNumber)(a.showlegend, 0)
						}, a._checkInvalidSpecificData = function () {
							var e, t, a, o = 0,
								r = 0,
								i = this.getFromEnv("dataSource").data;
							if (!i) return !0;
							for (t = i.length, e = 0; e < t; e++) a = Number(i[e].value), o += isNaN(a) || 0 !== a ? 0 : 1, r += isNaN(a) ? 1 : 0;
							return o + r >= t || void 0
						}, a._manageLegendSpace = function () {
							h._manageLegendSpace.call(this)
						}, a.getName = function () {
							return "FunnelPyramidBase"
						}, t
					}(n["default"]);
				t["default"] = d
			},
			1123: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1124)),
					n = a(205),
					s = o(a(1126)),
					c = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).config.pointInContext = s["default"], t.config.LABEL_PLACEMENT_ITERATOR_INDEX_START = 1, t
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a.getType = function () {
							return "dataset"
						}, a.getName = function () {
							return "funnel"
						}, a.configure = function (e) {
							if (!e) return !1;
							this.config.JSONData = e;
							var t, a, o, r, l = this.getFromEnv("chart"),
								n = this.getFromEnv("number-formatter"),
								s = this.utils(this).sortObjArrByKey,
								c = l.getFromEnv("dataSource") ? l.getFromEnv("dataSource").chart : {},
								u = this.config.JSONData.data;
							if (this._checkValidData(u)) {
								for (a = 0, r = u.length; a < r; a++)(o = u[a]) && void 0 !== o.value && (o.value = n.getCleanValue(o.value, !0));
								t = this.config.streamLinedData = (0, i.pluckNumber)(c.streamlineddata, 1), this.config.JSONData.data = t ? s(u, "value") : u,
									this._configure(), u = this.getChildren("data"), t && (u[0].pseudoPoint = !0), l.config.showLegend && this.addLegend()
							}
						}, a.configureSpecifics = function () {
							var e = this.getFromEnv("chart"),
								t = this.config,
								a = e.getFromEnv("dataSource") ? e.getFromEnv("dataSource").chart : {};
							(0, this.utils(this).copyProperties)(a, t, [
								["funnelyscale", "yScale", i.pluckNumber, void 0, function (e) {
									var t = e.yScale;
									e.yScale = t >= 0 && t <= 40 ? t / 200 : .2
								}],
								["usesameslantangle", "useSameSlantAngle", i.pluckNumber, function (e) {
									return e.streamLinedData ? 0 : 1
								}],
								["ishollow", "isHollow", i.pluckNumber, void 0, function (e) {
									void 0 === e.isHollow && (e.isHollow = e.streamLinedData ? 1 : 0)
								}]
							])
						}, a.prePointProcessingHookFn = function (e) {
							var t, a, o, r, l = this.getFromEnv("chart"),
								n = l.config,
								s = this.config,
								c = n.canvasWidth,
								u = l.getFromEnv("smartLabel"),
								h = !s.streamLinedData;
							(t = e[0]) && (t.pseudoPoint = !0), t && t.displayValue && (u.useEllipsesOnOverflow(l.config.useEllipsesWhenOverflow), u.setStyle(
									t.style), (0, i.setLineHeight)(t.style), a = parseFloat(t.style.lineHeight.match(/^\d+/)[0] || s.lineHeight, 10), r = u.getOriSize(
									t.displayValue).height, o = u.getSmartText(t.displayValue, c, r), t.displayValue = o.text, o.tooltext && (t.originalText =
									o.tooltext), t.labelWidth = u.getOriSize(o.text).width, n.marginTop += a + 4), s.totalValue = h ? e[0].y - e[1].y : 0, s.offsetVal =
								function (a) {
									return h ? -(e[a + 1] && e[a + 1].y || 0) : t.y
								}
						}, a.datasetCalculations = function (e) {
							var t, a, o, r, i = this.config,
								l = this.getFromEnv("number-formatter"),
								n = {},
								s = i.streamLinedData,
								c = i.percentOfPrevious;
							for (n.highestValue = Number.NEGATIVE_INFINITY, n.refreshedData = [], n.sumValue = n.countPoint = 0, t = 0, a = e.length; t <
								a; t++)(o = e[t]).vline || (o.cleanValue = r = Math.abs(l.getCleanValue(o.value, !0)), null !== r && (n.hasValidPoint = !0, n
								.highestValue = n.highestValue || r, n.refreshedData.push(o), n.sumValue += r, n.countPoint += 1, n.highestValue = Math.max(
									n.highestValue, r)));
							return s && (n.sumValue = n.highestValue, c && (n.prevPerValReq = !0)), n
						}, a.calculatePositionOfPlots = function () {
							var e, t, a, o, r, l, n, s, c, u, h, d, p, g, f, m, v, b, k = this.getFromEnv("chart").config,
								C = this.config,
								x = this.utils(this),
								T = x.getSumValueOfObjArrByKey,
								w = x.DistributionMatrix,
								A = this.calculatePositionCoordinate,
								S = C.psmMargin,
								y = this.getChildren("data"),
								N = C.streamLinedData,
								F = 2,
								D = this.getDataLength(),
								E = C.maxValue = y[0].y,
								L = C.minValue = y[D - 1].y,
								M = 0,
								R = 0,
								_ = C.lineHeight,
								V = Math.floor;
							if (C.sumValue && (this.postPlotCallback = i.stubFN, k.canvasTop += k.marginTop - S.top, k.effCanvasHeight = r = k.canvasHeight -
									(k.marginTop + k.marginBottom) + (S.top + S.bottom), k.effCanvasWidth = l = k.width - (k.marginLeft + k.marginRight), n = C.drawingRadius =
									l / F, C.x = n + k.canvasLeft, !(N && D < 2))) {
								for (N ? (o = r / (E - L), u = (s = T(y, "value")) ? r / s : r) : u = o = E ? r / E : r, C.unitHeight = o, C.lastRadius = n,
									C.globalMinXShift = 0, (c = C.alignmentType = {})["default"] = 1, c.alternate = 2, b = new w(V(r / _)), e = 0, t = D; e < t; e++
								)(a = y[e]).getState("removed") || (!N && 0 === e || !N && e === t - 1 ? b.forcePush(a, e) : (M = a.y * u, h = V(((R += a.y *
									u) - M + M / 2) / _), b.push(a, h)));
								if (d = b.getDistributedResult(), y.length = 0, void 0 === d.matrix[1])[].push.apply(y, d.matrix[0]);
								else
									for (p = d.matrix[0], g = d.matrix[1], t = Math.max(p.length, g.length), e = 0; e < t; e++) m = p[e], f = g[e], y.push(m ||
										f);
								if (Object.keys(d.forceMatrix).length > 0)
									for (v in d.forceMatrix)[].splice.apply(y, [parseInt(v, 10), 0].concat(d.forceMatrix[v]));
								switch (d.suggestion) {
								case c["default"]:
									A.call(this, y, !1);
									break;
								case c.alternate:
									C.labelAlignment = c.alternate, n = l / (F = 3), k.canvasLeft = k.canvasWidth / 2 - n, C.x = k.canvasLeft + n, A.call(this,
										y, !0)
								}
							}
						}, a.draw = function () {
							var e, t, a, o, r, i, l, s = this,
								c = s.getFromEnv("chart"),
								u = s.config,
								h = s.config.trackerArgs = [],
								d = s.getChildren("data"),
								p = c.getChildContainer("datalabelsGroup"),
								g = u.streamLinedData,
								f = d.length,
								m = Math.min;
							if (s.config.labelDrawingConfig = s.config.labelDrawingConfig || [], s.config.labelDrawingConfig.length = 0, u.sumValue)
								if (s.animateFunction = function (e) {
										return function () {
											e.attr({
												opacity: 1
											})
										}
									}, r = (a = u.slicingDistance) / 2, g && f < 2) s.hide(s.getChildren("data"), f);
								else {
									for (e = 0, t = d.length; e < t; e++) d[e] && d[e].shapeArgs && !d[e].getState("removed") && (d[e].shapeArgs.renderer = c.getFromEnv(
										"paper"));
									for ((o = u.noOfGap) && (u.perGapDistance = m(1.5 * r, a / o), u.distanceAvailed = r), e = d.length, u.alreadyPlotted && (s.postPlotCallback =
											function () {
												l || (l = !0, s.animateFunction(p)())
											}); e--;)(i = d[e]).index = e, i.syncDraw();
									for (u.oldLastData = Object.assign({}, d[d.length - 1].shapeArgs), s.hide(s.getChildren("data"), f), u.connectorEndSwitchHistoryY = {},
										e = d.length; e--;) d[e].getState("removed") || h.push(d[e]);
									s.addJob("labelDrawID", s.drawAllLabels.bind(s), n.priorityList.label), s.addJob("trackerDrawID", s.drawAllTrackers.bind(s),
										n.priorityList.tracker), s.removePlots(), u.alreadyPlotted = !0, u.prevIs2d = u.is2d
								}
						}, a.getTooltipMacroStub = function (t) {
							var a, o, r = this.config,
								i = this.getFromEnv("number-formatter");
							return r.streamLinedData && (o = r.percentOfPrevious ? t.pValue : i.percentValue(t.dataValue / t.prevValue * 100)), (a = e.prototype
									.getTooltipMacroStub.call(this, t)).percentValue = r.percentOfPrevious ? i.percentValue(t.dataValue / t.highestValue * 100) :
								t.pValue, a.percentOfPrevValue = o, a
						}, t
					}(l["default"]);
				t["default"] = c
			},
			1124: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(210)),
					i = o(a(207)),
					l = a(193),
					n = a(208),
					s = a(542),
					c = o(a(1125)),
					u = a(201),
					h = l.preDefStr.showHoverEffectStr,
					d = Math,
					p = d.round,
					g = d.ceil,
					f = d.max,
					m = d.min,
					v = d.pow,
					b = d.sqrt,
					k = {},
					C = l.preDefStr.colors.c000000,
					x = l.preDefStr.POSITION_START,
					T = l.preDefStr.POSITION_MIDDLE,
					w = window,
					A = w.navigator.userAgent,
					S = /msie/i.test(A) && !w.opera,
					y = l.regex.hexcode,
					N = "rgba(192,192,192," + (S ? .002 : 1e-6) + ")",
					F = l.regex.dropHash,
					D = function (e) {
						return "object" == typeof e
					},
					E = function (e) {
						return "string" == typeof e
					},
					L = function (e) {
						return null != e
					},
					M = function (e) {
						return {
							formattedValue: e.formatedVal,
							label: e.name,
							percentValue: e.pValue,
							sum: e.sum,
							unformattedSum: e.sumValue
						}
					},
					R = "M",
					_ = "L",
					V = "Z",
					O = l.regex.startsRGBA,
					I = function (e) {
						var t, a, o = [];
						return (t = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a = e)) ? o = [
							parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10), parseFloat(t[4])
						] : (t = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a)) && (o = [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(
							t[3], 16), 1]), {
							get: function (t) {
								return o && !isNaN(o[0]) ? "rgb" === t ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")" : "hex" === t ? "#" + (C + (o[0] <<
									16 | o[1] << 8 | o[2]).toString(16)).slice(-6) : "a" === t ? o[3] : "rgba(" + o.join(",") + ")" : e
							},
							brighten: function (e) {
								var t;
								if (!isNaN(e) && 0 !== e)
									for (t = 0; t < 3; t++) o[t] += parseInt(255 * e, 10), o[t] < 0 && (o[t] = 0), o[t] > 255 && (o[t] = 255);
								return this
							},
							setOpacity: function (e) {
								return o[3] = e, this
							}
						}
					};
				(0, u.addDep)({
					name: "funnelPyramidBaseAnimation",
					type: "animationRule",
					extension: c["default"]
				});
				var P = function (e) {
					(0, i["default"])(a, e);
					var t = a.prototype;

					function a() {
						var t, a, o, i, n, s, c;
						return (t = e.call(this) || this).components = {}, t.utils = function (e) {
							var t = e;

							function a() {
								var e = [],
									t = 0;
								this.set = function (a, o) {
									t++, e[a] = o
								}, this.get = function (t) {
									return e[t]
								}, this.getAll = function () {
									return e
								}, this.mergeWith = function (t) {
									var o, r, i, l = e.slice(0);
									if (t instanceof Array) o = t;
									else {
										if (!(t instanceof a)) return;
										o = t.getAll()
									}
									for (r in o) i = o[r], l[r] || (l[r] = i);
									return l
								}, this.getEffectiveLength = function () {
									return t
								}
							}

							function o(e) {
								this.distributionLength = e, this.distributedMatrix = [], this.altDistributedMatrix = [], this.nonDistributedMatrix = {},
									this.forcePushObj = {}, this.flags = {
										exhaustion: !1
									}
							}
							return a.prototype.constructor = a, o.prototype.constructor = o, o.prototype.push = function (e, t) {
								this.nonDistributedMatrix[t] = this.nonDistributedMatrix[t] || [], this.nonDistributedMatrix[t].push(e)
							}, o.prototype.forcePush = function (e, t) {
								this.forcePushObj[t] = e
							}, o.prototype.distribute = function (e) {
								var o, r, i, n, s, c, u, h = t,
									d = !0,
									p = new a,
									g = new a,
									f = new a,
									m = new a,
									v = this.flags,
									b = 0,
									k = h.getDataLength();
								if (e) {
									if (k - this.distributionLength > 0)
										for (i in this.nonDistributedMatrix)
											for (o = this.nonDistributedMatrix[i], s = 1; s < o.length; s++)(u = o[s]).dontPlot = !0, u.displayValue = l.BLANK
								} else if (k - 2 * this.distributionLength > 0)
									for (i in this.nonDistributedMatrix)
										for (o = this.nonDistributedMatrix[i], s = 1; s < o.length - 1; s++)(u = o[s]).dontPlot = !0, u.displayValue = l.BLANK;
								if (k > this.distributionLength && !e) {
									for (i in v.exhaustion = !0, this.nonDistributedMatrix)
										for (s = 0, c = (o = this.nonDistributedMatrix[i]).length; s < c; s++)(u = o[s]).dontPlot ? r = d ? f : m : (r = d ? p :
												g).getEffectiveLength() > parseInt(i, 10) ? u.distributionFactor = r.getEffectiveLength() - 1 - i : u.distributionFactor =
											0, r.set(b++, u), d = !d;
									this.distributedMatrix = p.mergeWith(f), this.altDistributedMatrix = g.mergeWith(m)
								} else {
									for (n in this.nonDistributedMatrix)
										for (s = 0, c = (o = this.nonDistributedMatrix[n]).length; s < c; s++)(u = o[s]).dontPlot ? r = f : (r = p).getEffectiveLength() >
											parseInt(n, 10) ? u.distributionFactor = r.getEffectiveLength() - 1 - n : u.distributionFactor = 0, r.set(b++, u);
									this.distributedMatrix = p.mergeWith(f)
								}
							}, o.prototype.getDistributedResult = function () {
								var e, a = t,
									o = a.getFromEnv("chart"),
									r = o.config,
									i = o.getFromEnv("legend"),
									l = a.config,
									n = l.alignmentType,
									s = [],
									c = o.isLegendRight;
								r.width, l.blankSpace;
								return r.showLegend && i.config.width ? c && i.config.width + r.marginRight : c = 0, o.isLegendRight = c, this.distribute(c),
									c ? (e = n["default"], s.push(this.distributedMatrix)) : (e = this.flags.exhaustion ? n.alternate : n["default"], this.flags
										.exhaustion ? [].push.call(s, this.distributedMatrix, this.altDistributedMatrix) : s.push(this.distributedMatrix)), {
										forceMatrix: this.forcePushObj,
										suggestion: e,
										matrix: s
									}
							}, {
								DistributionMatrix: o,
								setContext: function (e) {
									t = e
								},
								invokeHookFns: function () {
									var e, a = [],
										o = t;
									switch (arguments.length) {
									case 3:
										o = arguments[2];
									case 2:
										a = arguments[1];
									case 1:
										e = arguments[0];
										break;
									default:
										return
									}
									e && "function" == typeof e && e.apply(o, a)
								},
								copyProperties: function (e, a, o) {
									var r, i, n, s, c, u, h, d, p, g, f = l.stubFN;
									for (r = 0, i = o.length; r < i; r++) s = (n = o[r])[0], c = n[1], u = n[2], p = n[3], g = void 0, h = "string" == typeof p &&
										0 === p.indexOf("$") ? (g = p.substring(1), a[g]) : "function" == typeof p ? p.call(t, a) : p, d = n[4] || f, a[c] = u(e[
											s], h), d(a)
								},
								sortObjArrByKey: function (e, t) {
									return e.sort((function (e, a) {
										return Math.abs(a[t]) - Math.abs(e[t])
									}))
								},
								getSumValueOfObjArrByKey: function (e, t) {
									var a, o, r = 0;
									for (a = 0, o = e.length; a < o; a++) r += parseFloat(e[a][t], 10);
									return r
								}
							}
						}, t.hide = function (e, t) {
							var a, o, r = this.getFromEnv("animationManager"),
								i = function () {
									this.hide()
								},
								l = t;
							if (e && 0 !== e.length)
								for (l = l < 2 && "funnel" === this.getName() ? 0 : l, a = e.length - 1; a >= l; a--)(o = e[a].getGraphicalElement()).graphic &&
									(o.graphic.front && r.setAnimation({
										el: o.graphic.front,
										callback: i,
										component: this
									}), o.graphic.back && r.setAnimation({
										el: o.graphic.back,
										callback: i,
										component: this
									}), o.graphic.funnel2D && r.setAnimation({
										el: o.graphic.funnel2D,
										callback: i,
										component: this
									}), o.graphic.lighterHalf && r.setAnimation({
										el: o.graphic.lighterHalf,
										callback: i,
										component: this
									}), o.graphic.darkerHalf && r.setAnimation({
										el: o.graphic.darkerHalf,
										callback: i,
										component: this
									}), o.graphic.borderElement && r.setAnimation({
										el: o.graphic.borderElement,
										callback: i,
										component: this
									}), o.graphic.centerLight && r.setAnimation({
										el: o.graphic.centerLight,
										callback: i,
										component: this
									}), o.graphic.centerLight1 && r.setAnimation({
										el: o.graphic.centerLight1,
										callback: i,
										component: this
									}), o.graphic.toptop && r.setAnimation({
										el: o.graphic.toptop,
										callback: i,
										component: this
									}), o.graphic.topLight && r.setAnimation({
										el: o.graphic.topLight,
										callback: i,
										component: this
									}), o.graphic.topLight1 && r.setAnimation({
										el: o.graphic.topLight1,
										callback: i,
										component: this
									})), o.dataLabel && r.setAnimation({
										el: o.dataLabel,
										callback: i,
										component: this
									}), o.trackerObj && r.setAnimation({
										el: o.trackerObj,
										callback: i,
										component: this
									})
						}, t.pyramidFunnelShape = (a = {
							y: !0,
							R1: !0,
							R2: !0,
							h: !0,
							r3dFactor: !0,
							color: !0,
							opacity: !0,
							fill: !0,
							stroke: !0,
							strokeColor: !0,
							strokeAlpha: !0,
							"stroke-width": !0
						}, o = function (e, t, a, o, r, i) {
							return ["A", a, o, 0, i, r, e, t]
						}, i = function (e, t, a, r, i, l, n) {
							var s, c = a * l,
								u = r * l,
								h = function (e, t, a, o, r, i) {
									var l, n, s, c, u, h, d, g = v(o, 2) - v(e, 2),
										f = -2 * (v(o, 2) * a - v(e, 2) * i),
										m = v(e * r, 2) + v(o * a, 2) - v(o * t, 2) - v(e * i, 2),
										k = b(v(f, 2) - 4 * g * m),
										C = (-f + k) / (2 * g),
										x = (-f - k) / (2 * g);
									for (d in C < i && C > a ? n = x : x < i && x > a && (n = C), c = -(s = b((v(n - a, 2) - v(t, 2)) / v(e, 2))), u = {
											x: p(v(e, 2) * s / (n - a) * 100) / 100,
											y: p(100 * (v(t, 2) / (n - a) + a)) / 100
										}, h = {
											x: p(v(o, 2) * s / (n - i) * 100) / 100,
											y: p(100 * (v(r, 2) / (n - i) + i)) / 100
										}, l = {
											topLeft: {
												x: p(v(e, 2) * c / (n - a) * 100) / 100,
												y: p(100 * (v(t, 2) / (n - a) + a)) / 100
											},
											bottomLeft: {
												x: p(v(o, 2) * c / (n - i) * 100) / 100,
												y: p(100 * (v(r, 2) / (n - i) + i)) / 100
											},
											topRight: u,
											bottomRight: h
										})(isNaN(l[d].x) || isNaN(l[d].y)) && (l[d].x = "topLeft" === d || "bottomLeft" === d ? -e : e, l[d].y = "bottomRight" ===
										d || "bottomLeft" === d ? i : a);
									return l
								}(a, c, t, r, u, t + i),
								d = h.topLeft,
								g = h.bottomLeft,
								f = h.topRight,
								m = h.bottomRight,
								k = e + d.x,
								C = e + f.x,
								x = e + g.x,
								T = e + m.x,
								w = d.y,
								A = g.y,
								S = o(C, w, a, c, 0, 0),
								y = o(C, w, a, c, 1, 1),
								N = o(x, A, r, u, 1, 0),
								F = o(x, A, r, u, 0, 1);
							return s = {
								front: [R, k, w].concat(S, [_, T, A], N, [V]),
								back: [R, k, w].concat(y, [_, T, A], F, [V]),
								silhuette: [R, k, w].concat(y, [_, T, A], N, [V])
							}, n || (s.top = [R, k, w].concat(S, [_, C, w], o(k, w, a, c, 0, 1), [V])), s
						}, n = function (e, t, a, o, r, l, n, s, c, u) {
							var h = e,
								d = t,
								p = a,
								g = o,
								f = r,
								v = l,
								b = n,
								k = c,
								C = u;
							D(h) && (d = h.y, p = h.R1, g = h.R2, f = h.h, v = h.r3dFactor, b = h.is2D, C = h.isHollow, k = h.isFunnel, h.renderer, h =
								h.x);
							var x, T, w, A, S, y, N, F = h - p,
								E = h + p,
								L = h - g,
								M = h + g,
								O = d + f;
							return b ? (x = {
								silhuette: [R, F, d, _, E, d, M, O, L, O, V]
							}, k || (h = Math.round(h), x.lighterHalf = [R, F, d, _, h, d, h, O, L, O, V], x.darkerHalf = [R, h, d, _, E, d, M, O, h,
								O, V
							])) : k ? x = i(h, d, p || .01, g || .01, f, v, C) : (T = p * v, w = g * v, A = m(5, p), S = m(2, 2 * T), y = m(2, S), x = {
								top: [R, F, d, _, h, d + T, E, d, h, d - T, V],
								front: [R, F, d, _, h, d + T, E, d, M, O, h, O + w, L, O, V],
								topLight: [R, F, d + .5, _, h, d + T + .5, h, d + T - S, F + (N = y / v), d, V],
								topLight1: [R, E, d + .5, _, h, d + T + .5, h, d + T - y, E - N, d, V],
								silhuette: [R, F, d, _, h, d - T, E, d, M, O, h, O + w, L, O, V],
								centerLight: [R, h, d + T, _, h, O + w, h - 5, O + w, h - A, d + T, V],
								centerLight1: [R, h, d + T, _, h, O + w, h + 5, O + w, h + A, d + T, V]
							}), x
						}, s = function (e, t) {
							var o, r, i, s, c, u, h, d, p, g, f, m, v, b, k = this,
								C = !1,
								x = !1,
								T = this._3dAttr,
								w = e;
							if (E(w) && L(t) && (o = w, (w = {})[o] = t), E(w)) k = a[w] ? this._3dAttr[w] : this._attr(w);
							else {
								for (o in w) r = w[o], a[o] ? (T[o] = r, "fill" === o ? (r && r.linearGradient && r.stops && r.stops[0] && (r = r.stops[0][
											1
										]), O.test(r) ? (i = (c = new I(r)).get("hex"), s = 100 * c.get("a")) : r && r.FCcolor ? (i = r.FCcolor.color.split(l.COMMASTRING)[
											0], s = r.FCcolor.opacity.split(l.COMMASTRING)[0]) : y.test(r) && (i = r.replace(F, l.HASHSTRING), s = (0, l.pluckNumber)
											(T.opacity, 100)), T.color = i, T.opacity = s, x = !0) : "color" === o || "opacity" === o ? (T.fill = (0, l.toRaphaelColor)
											((0, l.convertColor)(T.color, (0, l.pluckNumber)(T.opacity, 100))), x = !0) : "stroke" === o || "strokeColor" === o ||
										"strokeAlpha" === o ? T.is2D && ("stroke" === o ? (r && r.linearGradient && r.stops && r.stops[0] && (r = r.stops[0][1]),
											O.test(r) ? (i = (c = new I(r)).get("hex"), s = 100 * c.get("a")) : r && r.FCcolor ? (i = r.FCcolor.color.split(l.COMMASTRING)[
												0], s = r.FCcolor.opacity.split(l.COMMASTRING)[0]) : y.test(r) && (i = r.replace(F, l.HASHSTRING), s = (0, l.pluckNumber)
												(T.opacity, 100)), T.strokeColor = i, T.strokeAlpha = s) : T.stroke = (0, l.convertColor)(T.strokeColor, (0, l.pluckNumber)
											(T.strokeAlpha, 100)), T.isFunnel ? this.funnel2D.attr("stroke", T.stroke) : this.borderElement.attr("stroke", T.stroke)) :
										"stroke-width" === o ? T.is2D && (T.isFunnel ? this.funnel2D.attr(o, r) : this.borderElement.attr(o, r)) : C = !0) : this
									._attr(o, r);
								T.is2D ? (C && (p = n(T.x, T.y, T.R1, T.R2, T.h, T.r3dFactor, T.is2D), k.shadowElement.attr({
										path: p.silhuette
									}), T.isFunnel ? k.funnel2D.attr({
										path: p.silhuette
									}) : (k.lighterHalf.attr({
										path: p.lighterHalf
									}), k.darkerHalf.attr({
										path: p.darkerHalf
									}), k.borderElement.attr({
										path: p.silhuette
									}))), x && (T.isFunnel ? k.funnel2D.attr("fill", (0, l.toRaphaelColor)((0, l.convertColor)(T.color, (0, l.pluckNumber)(T.opacity,
										100)))) : (!1 === T.use3DLighting ? g = f = T.color : (g = (0, l.getDarkColor)(T.color, 80), f = (0, l.getLightColor)(T
										.color, 80)), k.lighterHalf.attr("fill", (0, l.toRaphaelColor)((0, l.convertColor)(f, (0, l.pluckNumber)(T.opacity,
										100)))), k.darkerHalf.attr("fill", (0, l.toRaphaelColor)((0, l.convertColor)(g, (0, l.pluckNumber)(T.opacity, 100))))))) :
									(C && (p = n(T.x, T.y, T.R1, T.R2, T.h, T.r3dFactor, T.is2D), k.shadowElement.attr("path", p.silhuette), T.isFunnel ? (k.front
										.attr("path", p.front), k.back.attr("path", p.back), k.toptop && p.top && k.toptop.attr("path", p.top)) : (k.front.attr(
											"path", p.front), k.toptop.attr("path", p.top), k.topLight.attr("path", p.topLight), k.topLight1.attr("path", p.topLight1),
										k.centerLight.attr("path", p.centerLight), k.centerLight1.attr("path", p.centerLight1))), x && (i = T.color, s = T.opacity,
										T.isFunnel ? (u = (0, l.getLightColor)(i, 60), d = (0, l.getDarkColor)(i, 60), k.back.attr("fill", (0, l.toRaphaelColor)
											({
												FCcolor: {
													color: d + l.COMMASTRING + u + l.COMMASTRING + i,
													alpha: s + l.COMMASTRING + s + l.COMMASTRING + s,
													ratio: "0,60,40",
													angle: 0
												}
											})), k.front.attr("fill", (0, l.toRaphaelColor)({
											FCcolor: {
												color: i + l.COMMASTRING + u + l.COMMASTRING + d,
												alpha: s + l.COMMASTRING + s + l.COMMASTRING + s,
												ratio: "0,40,60",
												angle: 0
											}
										})), k.toptop && k.toptop.attr("fill", (0, l.toRaphaelColor)({
											FCcolor: {
												color: u + l.COMMASTRING + d,
												alpha: s + l.COMMASTRING + s,
												ratio: "0,100",
												angle: -65
											}
										}))) : (u = (0, l.getLightColor)(i, 80), h = (0, l.getLightColor)(i, 70), d = (0, l.getDarkColor)(i, 80), m = "0," + s,
											v = i + l.COMMASTRING + h, b = 5 / (T.R1 * T.r3dFactor) * 100, k.centerLight.attr("fill", (0, l.toRaphaelColor)({
												FCcolor: {
													color: v,
													alpha: m,
													ratio: "0,100",
													angle: 0
												}
											})), k.centerLight1.attr("fill", (0, l.toRaphaelColor)({
												FCcolor: {
													color: v,
													alpha: m,
													ratio: "0,100",
													angle: 180
												}
											})), k.topLight.attr("fill", (0, l.toRaphaelColor)({
												FCcolor: {
													color: h + l.COMMASTRING + h + l.COMMASTRING + i + l.COMMASTRING + i,
													alpha: s + l.COMMASTRING + s + l.COMMASTRING + 0 + l.COMMASTRING + 0,
													ratio: "0,50," + b + l.COMMASTRING + (50 - b),
													angle: -45
												}
											})), k.topLight1.attr("fill", (0, l.toRaphaelColor)({
												FCcolor: {
													color: h + l.COMMASTRING + i + l.COMMASTRING + d,
													alpha: s + l.COMMASTRING + s + l.COMMASTRING + s,
													ratio: "0,50,50",
													angle: 0
												}
											})), k.front.attr("fill", (0, l.toRaphaelColor)({
												FCcolor: {
													color: i + l.COMMASTRING + i + l.COMMASTRING + d + l.COMMASTRING + d,
													alpha: s + l.COMMASTRING + s + l.COMMASTRING + s + l.COMMASTRING + s,
													ratio: "0,50,0,50",
													angle: 0
												}
											})), k.toptop.attr("fill", (0, l.toRaphaelColor)({
												FCcolor: {
													color: u + l.COMMASTRING + i + l.COMMASTRING + d + l.COMMASTRING + d,
													alpha: s + l.COMMASTRING + s + l.COMMASTRING + s + l.COMMASTRING + s,
													ratio: "0,25,30,45",
													angle: -45
												}
											})))))
							}
							return k
						}, c = function u() {
							var e = this.shadowElement;
							u && e.shadow.apply(e, arguments)
						}, function (e, t, a, o, r, i, u, h, d, p, g, f) {
							var m, v, b, C, x, T, w, A, S = this.getFromEnv("chart").getChildContainer().plotGroup,
								y = this.config.oldLastData,
								F = e,
								E = t,
								L = a,
								M = o,
								R = r,
								_ = i,
								V = u,
								O = h,
								I = d,
								P = p,
								G = g,
								B = f;
							return D(F) && (E = F.y, L = F.R1, M = F.R2, R = F.h, _ = F.r3dFactor, V = F.gStr, O = F.is2D, B = F.use3DLighting, I = F.renderer,
									G = F.isHollow, P = F.isFunnel, w = F.graphics, F = F.x), (C = function (e, t) {
									var a, o, r, i, l, n = ["silhuette", "lighterHalf", "darkerHalf", "centerLight", "centerLight1", "front", "toptop",
										"topLight", "topLight1", "shadowElement", "funnel2D", "borderElement", "back"
									];
									if (e) {
										if ((i = e._3dAttr).isFunnel === t.isFunnel && i.is2D === t.is2D && i.isHollow === t.isHollow) return e;
										for (o = 0, l = n.length; o < l; o++)(a = e[r = n[o]]) && (delete e[r], a.remove());
										return e
									}
								}(w, m = {
									x: F,
									y: E,
									R1: L,
									R2: M,
									h: R,
									r3dFactor: _ = (0, l.pluckNumber)(_, .15),
									is2D: O,
									use3DLighting: B,
									isHollow: G,
									isFunnel: P,
									renderer: I
								}) || I.group(V, S)).toFront(), (!C.front && !O || !C.funnel2D && !C.lighterHalf && O) && this.getState("notInitial") &&
								this.config.prevIs2d === m.is2D ? (b = n(m), y.y = y.y + y.h, y.R1 = y.R2, y.h = 0, v = n(y)) : (v = n(m), this.getState(
									"notInitial", !0)), (T = Object.assign({}, m)).y = T.y + T.h, T.R1 = T.R2, T.h = 0, x = n(T), C.squeezedFormPathObj = x, C
								.Shapeargs = b || v, A = function (e, t) {
									var a = e.getFromEnv("chart");
									return function (o, r, i) {
										void 0 === i && (i = k);
										var l = t[o];
										return l ? (a.getFromEnv("animationManager").setAnimation({
											el: l,
											attr: {
												path: r
											},
											component: e
										}), l) : (e.postPlotCallback(), a.getFromEnv("animationManager").setAnimation({
											el: "path",
											label: "path",
											attr: Object.assign({
												path: r
											}, i),
											container: t,
											component: e
										}))
									}
								}(this, C), C.shadowElement = A("shadowElement", v.silhuette, {
									fill: N,
									stroke: "none"
								}), C._attr = C._attr || C.attr, C.attr = s, C.shadow = c, C._3dAttr = m, P ? O ? (C.funnel2D = A("funnel2D", v.silhuette),
									b && (C.funnel2D = A("funnel2D", b.silhuette))) : (C.back = A("back", v.back, {
									"stroke-width": 0,
									stroke: "none"
								}), C.front = A("front", v.front, {
									"stroke-width": 0,
									stroke: "none"
								}), b && (C.back = A("back", b.back, {
									"stroke-width": 0,
									stroke: "none"
								})), b && (C.front = A("front", b.front, {
									"stroke-width": 0,
									stroke: "none"
								})), v.top && (C.toptop = A("toptop", v.top, {
									"stroke-width": 0,
									stroke: "none"
								}), b && (C.toptop = A("toptop", b.top, {
									"stroke-width": 0,
									stroke: "none"
								})))) : O ? (C.lighterHalf = A("lighterHalf", v.lighterHalf, {
									"stroke-width": 0
								}), b && (C.lighterHalf = A("lighterHalf", b.lighterHalf, {
									"stroke-width": 0
								})), C.darkerHalf = A("darkerHalf", v.darkerHalf, {
									"stroke-width": 0
								}), b && (C.darkerHalf = A("darkerHalf", b.darkerHalf, {
									"stroke-width": 0
								})), C.borderElement = A("borderElement", v.silhuette, {
									fill: N,
									stroke: "none"
								}), b && (C.borderElement = A("borderElement", b.silhuette, {
									fill: N,
									stroke: "none"
								}))) : (C.front = A("front", v.front, {
									"stroke-width": 0
								}), b && (C.front = A("front", b.front, {
									"stroke-width": 0
								})), C.centerLight = A("centerLight", v.centerLight, {
									"stroke-width": 0
								}), b && (C.centerLight = A("centerLight", b.centerLight, {
									"stroke-width": 0
								})), C.centerLight1 = A("centerLight1", v.centerLight1, {
									"stroke-width": 0
								}), b && (C.centerLight1 = A("centerLight1", b.centerLight1, {
									"stroke-width": 0
								})), C.toptop = A("toptop", v.top, {
									"stroke-width": 0
								}), b && (C.toptop = A("toptop", b.top, {
									"stroke-width": 0
								})), C.topLight = A("topLight", v.topLight, {
									"stroke-width": 0
								}), b && (C.topLight = A("topLight", b.topLight, {
									"stroke-width": 0
								})), C.topLight1 = A("topLight1", v.topLight1, {
									"stroke-width": 0
								}), b && (C.topLight1 = A("topLight1", b.topLight1, {
									"stroke-width": 0
								}))), C
						}), t.config.legendItemIds = [], (0, t.utils((0, r["default"])(t)).invokeHookFns)(t.postInitHook), t
					}
					return t.getType = function () {
						return "dataset"
					}, t.getName = function () {
						return "funnelPyramidBase"
					}, t.trimData = function (e) {
						s.trimData.call(this, e)
					}, t.getDataLength = function () {
						var e, t = this.getChildren("data"),
							a = 0,
							o = t.length;
						for (e = 0; e < o; e++) t[e].getState("removed") || a++;
						return a
					}, t.removeData = function (e, t, a) {
						void 0 === a && (a = !1);
						var o, r, i, n = this.components,
							s = this.getChildren("data"),
							c = t,
							u = e;
						for (c = (0, l.pluckNumber)(c, 1), u = (0, l.pluckNumber)(u, 0), i = (o = n.removedDataArr = s.splice(u, c)).length, r = 0; r <
							i; r++) o[r] || o.splice(r, 1);
						a && this.asyncDraw()
					}, t.removePlots = function () {
						var e, t, a, o, r = this.components.removedDataArr;
						if (r)
							for (e = r.length - 1; e >= 0; e--) {
								for (t in a = (o = r[e]).getGraphicalElement()) o.removeGraphicalElement(a[t]);
								r.splice(e, 1)
							}
					}, t._configure = function () {
						var e = this.getFromEnv("chart"),
							t = this.getFromEnv("color-manager"),
							a = e.config.style,
							o = this.config || {},
							r = this.config.JSONData.data || [],
							i = e.getFromEnv("dataSource") ? e.getFromEnv("dataSource").chart : {},
							n = this.utils(this),
							s = n.invokeHookFns,
							c = n.copyProperties,
							u = this.configureSpecifics,
							d = t.getColor("baseFontColor");
						c(i, o, [
								["showlabels", "showLabels", l.pluckNumber, 1],
								["showvalues", "showValues", l.pluckNumber, 1],
								["plottooltext", "toolText", l.pluck, l.BLANK],
								["enableslicing", "enableSlicing", l.pluckNumber, 1],
								["plotfillalpha", "plotFillAlpha", l.pluckNumber, 100],
								["showplotborder", "showPlotBorder", l.pluckNumber, 0],
								["plotborderalpha", "plotBorderAlpha", l.pluckNumber, void 0],
								["plotbordercolor", "plotBorderColor", l.pluck, void 0],
								["plotborderthickness", "plotBorderThickness", l.pluckNumber, 1],
								["showshadow", "showShadow", l.pluckNumber, 1],
								["showhovereffect", h, l.pluckNumber, 0],
								["hovercapsepchar", "hoverCapSepChar", l.pluck, l.COMMASPACE],
								["tooltipsepchar", "tooltipSepChar", l.pluck, "$hoverCapSepChar"],
								["labelsepchar", "labelSepChar", function () {
									return (0, l.parseUnsafeString)(l.pluck.apply(void 0, arguments))
								}, "$tooltipSepChar"],
								["showpercentintooltip", "showPercentInToolTip", l.pluckNumber, 1],
								["showpercentvalues", "showPercentValues", l.pluckNumber, 0],
								[l.BLANK, "blankSpace", l.pluckNumber, 3],
								["labeldistance", "labelDistance", l.pluckNumber, 50],
								["issliced", "isSliced", l.pluckNumber, 0],
								["is2d", "is2d", l.pluckNumber, 0],
								[l.BLANK, "blankSpace", l.pluckNumber, 3],
								["showlabelsatcenter", "showLabelsAtCenter", l.pluckNumber, 0],
								["smartlinethickness", "connectorWidth", l.pluckNumber, 1],
								["smartlinealpha", "connectorAlpha", l.pluckNumber, 100],
								["smartlinecolor", "rawSmartLineColorCode", l.pluck, function () {
									return t.getColor("baseFontColor")
								}],
								["labelalpha", "labelAlpha", l.pluckNumber, 100],
								["basefont", "baseFont", l.pluck, "Verdana,sans"],
								["basefontsize", "baseFontSize", l.pluckNumber, 10],
								["basefontcolor", "baseFontColor", l.pluck, d],
								["labelfontcolor", "labelFontColor", l.pluck, "$baseFontColor"],
								["showtooltip", "showTooltip", l.pluckNumber, 1],
								["percentofprevious", "percentOfPrevious", l.pluckNumber, 0],
								["animationduration", "animationDuration", l.pluckNumber, 1, function (e) {
									e.animationDuration *= 1e3
								}]
							]), o.connectorColor = (0, l.convertColor)(o.rawSmartLineColorCode, o.connectorAlpha), o.origLabelDistance = o.labelDistance,
							(0, l.setLineHeight)(a), a.nLineHeight = a.lineHeight.match(/^\d+/)[0], c(a, o, [
								[l.BLANK, "lineHeight", l.pluckNumber, o.baseFontSize]
							]), o.isSliced && (o.clicked = !0), delete a.nLineHeight, s(u), o.showLabels || o.showValues ? o.datalabelDisabled = !1 : o.datalabelDisabled = !
							0, this.getNormalizeDataSet(r)
					}, t._preDrawingHook = function () {
						var e = this.getFromEnv("chart"),
							t = this.config,
							a = e.config,
							o = this.utils(this),
							r = e.getFromEnv("dataSource") ? e.getFromEnv("dataSource").chart : {},
							i = a.canvasHeight;
						(0, o.copyProperties)(r, t, [
							[l.BLANK, "slicingDistance", l.pluckNumber, .1 * i],
							["slicingdistance", "slicingHeight", l.pluckNumber, "$slicingDistance", function () {
								t.slicingHeight > 2 * t.slicingDistance ? t.slicingDistance = 0 : t.slicingDistance = t.slicingHeight
							}]
						])
					}, t._checkValidData = function (e) {
						var t = this.getFromEnv("chart");
						return !(!e || !e.length) || (t.setChartMessage(), !1)
					}, t.addLegend = function () {
						var e, t, a, o, r, i = this.getFromEnv("chart"),
							n = 0,
							s = i.getFromEnv("dataSource").chart,
							c = this.getChildren("data") || this.config.JSONData.data,
							u = i.getFromEnv("legend"),
							h = u.getChildren("legendItem");
						for (o = 0; o < c.length; o++)
							if (t = (r = c[o]).config, r.pseudoPoint || r.getState("removed") || !r.label && !r.categoryLabel) {
								if (r.pseudoPoint) continue;
								r.categoryLabel, n++, t.legendItemId && ((h = u.getItem(t.legendItemId)) && u.disposeItem(h.getId()), delete t.legendItemId)
							} else e = {
								type: this.getName(),
								label: r.label || r.categoryLabel,
								index: n,
								enabled: (0, l.pluckNumber)(s.includeinlegend, 1),
								legendItemId: r.legendItemId
							}, (h = u.getItem(t.legendItemId)) || (a = u.createItem(this), r.config.legendItemId = a, (h = u.getItem(t.legendItemId)).addEventListener(
								"fc-click", h.itemClickFn)), h.configure(e), n++, h.setStateCosmetics("default", {
								symbol: {
									fill: c[o].legendColor,
									rawFillColor: c[o].rawColor,
									stroke: (0, l.getLightColor)(c[o].rawColor, 60).replace(F, l.HASHSTRING)
								}
							})
					}, t.legendInteractivity = function (e) {
						var t, a, o = this.getChildren("data"),
							r = e.getId();
						for (t = 0, a = o.length; t < a; t++)
							if (o[t].config.legendItemId === r) {
								this.legendClick({
									datasetStore: this,
									plotItem: o[t].plot
								}, !0, !1);
								break
							}
					}, t.getNormalizeDataSet = function (e) {
						var t, a, o, r, i, n, s, c, u, h, d = this.getChildren("data") || [],
							p = this.getFromEnv("chart"),
							g = this.config,
							f = this.getFromEnv("smartLabel"),
							m = g.pointInContext,
							v = p.getFromEnv("dataSource").chart,
							b = g.dataConnectorStyle = {},
							k = p.config.PLOT_COLOR_INDEX_START,
							C = 0;
						if ((0, l.extend2)(s = g.style = {}, p.config.style), g.noOFSlicedElement = 0, s.borderDash = "none", s.borderPadding = 2, s.borderRadius =
							0, s.borderThickness = 1, s.color = (0, l.convertColor)(g.labelFontColor, g.labelAlpha), s.fontFamily = g.baseFont, s.fontSize =
							g.baseFontSize + "px", s.fontStyle = "normal", s.fontWeight = "normal", b.connectorWidth = g.connectorWidth, b.connectorColor =
							g.connectorColor, r = (c = this.datasetCalculations(e)).hasValidPoint, o = c.refreshedData, i = c.sumValue, h = +(!g.streamLinedData &&
								"funnel" === this.getName()), this._chartLevelAttr = (0, l.parsexAxisStyles)({}, {}, v, s), r)
							for (g.sumValue = i, n = o.length, (0, l.componentFactory)(this, m, "data", n + h), d = this.getChildren("data"), f.useEllipsesOnOverflow(
									p.config.useEllipsesWhenOverflow), t = 0, C = h; t < n; t += 1, C += 1) a = o[t], (u = d[C]).getState("removed") || u.parseAndConfigurePoint(
								a, c, k++, t);
						h && d[0] && d[0].configure({
							displayValue: l.BLANK,
							y: g.sumValue,
							index: 0
						})
					}, t.datasetCalculations = function (e) {
						var t, a, o, r, i = this.getFromEnv("number-formatter"),
							l = {
								refreshedData: []
							};
						for (l.sumValue = l.countPoint = 0, l.highestValue = Number.NEGATIVE_INFINITY, t = 0, a = e.length; t < a; t++)(o = e[t]).vline ||
							(o.cleanValue = r = Math.abs(i.getCleanValue(o.value, !0)), null !== r && (l.hasValidPoint = !0, l.highestValue = l.highestValue ||
								r, l.refreshedData.push(o), l.sumValue += r, l.countPoint += 1, l.highestValue = Math.max(l.highestValue, l.itemValue)));
						return l
					}, t.pointHoverOptions = function (e, t) {
						var a, o, r, i = this.config,
							n = this.getFromEnv("chart"),
							s = (0, l.pluckNumber)(e.showhovereffect, i.showHoverEffect),
							c = {
								enabled: s
							},
							u = {},
							h = n.getFromEnv("dataSource") ? n.getFromEnv("dataSource").chart : {};
						if (s || (s = c.enabled = void 0 !== (0, l.pluck)(e.hovercolor, h.plotfillhovercolor, e.hoveralpha, h.plotfillhoveralpha, e.borderhovercolor,
								h.plotborderhovercolor, e.borderhoverthickness, h.plotborderhoverthickness, e.borderhoveralpha, h.plotborderhoveralpha)), s) {
							if (c.highlight = (0, l.pluckNumber)(e.highlightonhover, h.highlightonhover), c.color = (0, l.pluck)(e.hovercolor, h.plotfillhovercolor),
								c.alpha = (0, l.pluck)(e.hoveralpha, h.plotfillhoveralpha, t.alpha), c.borderColor = (0, l.pluck)(e.borderhovercolor, h.plotborderhovercolor,
									t.borderColor), c.borderThickness = (0, l.pluckNumber)(e.borderhoverthickness, h.plotborderhoverthickness, t.borderWidth),
								c.borderAlpha = (0, l.pluck)(e.borderhoveralpha, h.plotborderhoveralpha, t.borderAlpha), 0 !== c.highlight && void 0 === c.color &&
								(c.highlight = 1), c.color = (0, l.pluck)(c.color, t.color).replace(/,+?$/, l.BLANK), 1 === c.highlight) {
								for (o = (a = c.color.split(/\s{0,},\s{0,}/)).length, r = 0; r < o; r += 1) a[r] = (0, l.getLightColor)(a[r], 70);
								c.color = a.join(",")
							}
							u = {
								color: c.color,
								alpha: +c.alpha,
								borderColor: (0, l.convertColor)(c.borderColor, c.borderAlpha),
								rawBorderColor: c.borderColor,
								borderAlpha: c.borderAlpha,
								borderWidth: c.borderThickness
							}
						}
						return {
							enabled: s,
							options: c,
							rolloverOptions: u
						}
					}, t.getTooltipMacroStub = function (e) {
						return M.call(this, e)
					}, t.allocatePosition = function () {
						var e = this.getFromEnv("chart").config,
							t = this.config;
						this._preDrawingHook(), t.sumValue && (t.labelDrawingConfig = t.labelDrawingConfig || [], t.labelDrawingConfig.length = 0, t.psmMargin = {
							top: e.marginTop,
							bottom: e.marginBottom
						}, this.preDrawingSpaceManagement())
					}, t.preDrawingSpaceManagement = function () {
						var e, t, a, o, r, i, n, s, c, u, h, d, p, m, v, b, k, C, x, T, w, A, S, y, N, F = this.getFromEnv("chart"),
							D = F.config,
							E = F.getChildren("caption")[0],
							L = F.getChildren("subCaption")[0],
							M = E.config.height || 0,
							R = L.config.height || 0,
							_ = this.config,
							V = _.showTooltip,
							O = _.slicingDistance,
							I = D.height - (D.marginTop + D.marginBottom),
							P = D.width - (D.marginRight + D.marginLeft),
							G = this.getChildren("data"),
							B = _.blankSpace,
							H = this.config.LABEL_PLACEMENT_ITERATOR_INDEX_START,
							W = "funnel" === this.getName() ? 1 : 0,
							j = this.getFromEnv("smartLabel"),
							z = 0,
							U = 0,
							X = this.utils(this).invokeHookFns,
							K = this.prePointProcessingHookFn,
							Y = F.getFromEnv("legend"),
							J = D.showLegend && Y && Y.config && Y.config.legendPos ? Y.config.legendPos.split("-") : [],
							Z = 0;
						for (!D.showLegend || "right" !== J[0] && "left" !== J[0] || (Z = Y.config.width + 10), D.oriCanvasLeft = F.config.canvasLeft,
							D.oriBottomSpace = F.config.marginBottom, D.oriTopSpace = F.config.marginTop, A = _._tempSnap = {
								top3DSpace: 0,
								bottom3DSpace: 0,
								topLabelSpace: 0,
								rightLabelSpace: 0
							}, e = I - O, t = Math.min(2 * e, P), D.marginTop += O / 2, D.marginBottom += O / 2, a = this.getDataLength(), o = _.origLabelDistance +
							B, r = _.showLabelsAtCenter, n = P - (i = Math.min(t, .3 * P)), s = (P -= Z) - i - o, c = 0, h = .8 / (u = G[0] && G[0].y ? G[
								0].y : 1), X(K, [G]), d = _.totalValue || 0, j.useEllipsesOnOverflow(D.useEllipsesWhenOverflow); H < a; H += 1)(p = G[H]).legendItemId &&
							Y.configureItems && Y.configureItems(p.legendItemId, {
								configuration: {
									fillColor: p.legendColor
								}
							}), N = p.style, (0, l.setLineHeight)(N), m = (0, l.pluckNumber)(g(parseFloat(N.lineHeight) + N.borderPadding + N.borderThickness +
								5), 10), j.setStyle(N), k = p.y, r ? v = j.getSmartText(p.origValue, P, m) : (k = p.getModifiedCurrentValue && p.getModifiedCurrentValue(
									d) || k, T = s + (i - (x = i * (C = p.getRatioK(this, k, h, d, u)))) / 2, v = j.getSmartText(p.origValue, T, m), p.displayValue =
								v.text, V && v.tooltext && (p.originalText = v.tooltext), c = Math.max(c, v.width), n > 0 && (z = 1 / (C + 1) * (x + 2 * (v.width >
									0 ? T - v.width : T + o) + i), n = Math.min(n, z - i)), d += void 0 === _.offsetVal ? p.y : "function" == typeof _.offsetVal ?
								_.offsetVal(H) : _.offsetVal);
						if (!D.showLegend || "right" !== J[0] && "left" !== J[0] ? F.isLegendRight = !1 : (F.isLegendRight = !0, D.marginRight += Z),
							p && (w = p.getLowestRadiusFactor(this, u)), (b = i + n) > t && (b = t), d = void 0 === _.offsetVal ? 0 : "function" ==
							typeof _.offsetVal ? _.offsetVal() : _.offsetVal, !r)
							for (H = this.config.LABEL_PLACEMENT_ITERATOR_INDEX_START, a = this.getDataLength(); H < a; H += 1) k = (p = G[H]).y, k = p.getModifiedCurrentValue &&
								p.getModifiedCurrentValue(d) || k, T = s + (i - (x = b * (C = p.getRatioK(this, k, h, d, u)))) / 2 - Z, v = j.getSmartText(p
									.displayValue, T, m), U = f(U, .5 * x + v.width + o), d += void 0 === _.offsetVal ? p.y : "function" == typeof _.offsetVal ?
								_.offsetVal() : _.offsetVal;
						c > 0 ? (A.rightLabelSpace = P - b, (S = U - .5 * D.canvasWidth) > 0 && (D.marginRight += S, D.marginLeft -= S), D.marginRight +=
								.5 * A.rightLabelSpace, D.marginLeft += .5 * A.rightLabelSpace) : o = 0, _.labelDistance = _.connectorWidth = o, (r || !c) &&
							t < P && (D.marginLeft += .5 * (P - t - o), D.marginRight += .5 * (P - t - o)), _.is2d || (D.marginTop += A.top3DSpace = b *
								_.yScale * W / 2, D.marginBottom += A.bottom3DSpace = b * _.yScale * w / 2), this.calculatePositionOfPlots(), y = M + R + 5,
							"funnel" === this.getName() ? _.streamLinedData && G.length < 2 ? (D.gaugeStartX = D.marginLeft, D.gaugeStartY = D.marginTop +
								y, D.gaugeEndX = b + D.marginLeft, D.gaugeEndY = D.canvasHeight + D.marginTop) : (D.gaugeStartX = G[0].plotX - G[1].shapeArgs
								.R1, D.gaugeEndX = G[0].plotX + G[1].shapeArgs.R1, D.gaugeStartY = G[0].plotY, D.gaugeEndY = G[a - 1].plotY) : (D.gaugeStartX =
								G[a - 1].plotX - G[a - 1].shapeArgs.R2, D.gaugeEndX = G[a - 1].plotX + G[a - 1].shapeArgs.R2, D.gaugeStartY = G[0].shapeArgs
								.y, D.gaugeEndY = G[a - 1].shapeArgs.y + G[a - 1].shapeArgs.h), D.gaugeCenterX = D.canvasCenterX = (D.gaugeStartX + D.gaugeEndX) /
							2, D.gaugeCenterY = (D.gaugeStartY + D.gaugeEndY) / 2, D.plotSemiWidth = (D.canvasWidth - A.rightLabelSpace) / 2
					}, t.animateElements = function (e, t, a, o) {
						void 0 === a && (a = []);
						var r, i, l, n, s, c = this;

						function u(e, t) {
							var a = (t || {}).alpha;
							a = void 0 === a ? o.post : {
								opacity: a
							}, e && c.getFromEnv("animationManager").setAnimation({
								el: e,
								attr: a,
								component: c
							})
						}
						for (r = 0, i = e.length; r < i; r++)
							if (l = e[r])
								if (a.length)
									for (n = 0, s = a.length; n < s; n++) u(e[r][t][a[n]], l.point);
								else u(l[t], l.point)
					}, t.drawAllLabels = function () {
						var e, t, a, o, r = this.getFromEnv("chart"),
							i = this.config.labelDrawingConfig,
							l = r.getChildContainer("datalabelsGroup"),
							n = ["fontFamily", "fontSize", "fontWeight", "fontStyle"],
							s = {};
						for (t = 0, a = n.length; t < a; t++)(o = n[t]) in this._chartLevelAttr && (s[o] = this._chartLevelAttr[o]);
						for (l.css(s), t = i.length - 1; t > -1; t--)(e = i[t].point).index = t, e.drawLabel()
					}, t.drawAllTrackers = function () {
						var e, t, a = this.config.trackerArgs;
						for (e = 0, t = a.length; e < t; e++) a[e].drawTracker()
					}, t.calculatePositionCoordinate = function (e, t) {
						var a, o, r, i, n, s, c, u, h, d, p = this.config,
							g = p.maxValue,
							f = p.is2d,
							m = p.x,
							v = this.getFromEnv("chart"),
							k = v.config,
							C = k.canvasTop,
							w = p.unitHeight,
							A = p.drawingRadius,
							S = p.labelDistance,
							y = p.showLabelsAtCenter,
							N = p.isHollow,
							F = .3 * k.style.fontSize,
							D = p.yScale,
							E = p.blankSpace,
							L = p.lastRadius,
							M = this.getFromEnv("smartLabel"),
							R = 0,
							_ = this.getDataLength() - 1,
							V = !1,
							O = 0,
							I = p.lineHeight,
							P = .8 / k.effCanvasHeight,
							G = v.config.width - 2,
							B = p.streamLinedData,
							H = {
								flag: !1,
								point: void 0,
								sLabel: void 0,
								setAll: function (e, t, a) {
									this.flag = e, this.point = t, this.sLabel = a
								}
							},
							W = {
								point: void 0,
								sLabel: void 0,
								set: function (e, t) {
									var a = e,
										o = t;
									return function (e, t) {
										var r, i;
										if (!e.dontPlot) {
											if (!this.point || !this.sLabel) return this.point = e, void(this.sLabel = t);
											r = a(this.point, this.sLabel), i = a(e, t), o(r, i) && (this.point = e, this.sLabel = t)
										}
									}
								}
							},
							j = {},
							z = {},
							U = {},
							X = {},
							K = p.slicingGapPosition = {};
						for ((0, l.extend2)(j, H), (0, l.extend2)(z, H), j.setAll = function (e, t, a) {
								var o = this.point,
									r = this.sLabel;
								if (this.flag = e, !o || !r) return this.point = t, void(this.sLabel = a);
								o.labelX - (r.oriTextWidth - r.width) > t.labelX - (a.oriTextWidth - a.width) && (this.point = t, this.sLabel = a)
							}, z.setAll = function (e, t, a) {
								var o = this.point,
									r = this.sLabel;
								if (this.flag = e, !o || !r) return this.point = t, void(this.sLabel = a);
								o.labelX + r.oriTextWidth < t.labelX + a.oriTextWidth && (this.point = t, this.sLabel = a)
							}, (0, l.extend2)(U, W), (0, l.extend2)(X, W), U.set = W.set.apply(U, [function (e) {
								return e.labelX
							}, function (e, t) {
								return e > t
							}]), X.set = W.set.apply(X, [function (e, t) {
								return e.labelX + t.oriTextWidth
							}, function (e, t) {
								return e < t
							}]), p.noOfGap = 0, M.useEllipsesOnOverflow(k.useEllipsesWhenOverflow), a = 0, o = e.length; a < o; a++)(r = e[a]) && (r.x =
							a, r.plot && (r.isSliced = !!r.isSliced || !!p.isSliced), r.isSliced = (0, l.pluckNumber)(r.isSliced, p.isSliced), a ? (t &&
								(V = !V), r.isSliced && ((d = r.x) > 1 && !K[d] && (K[d] = !0, p.noOfGap += 1), d < _ && (K[d + 1] = !0, p.noOfGap += 1)),
								B ? (s = 1 === p.useSameSlantAngle ? g ? A * r.y / g : A : g ? A * b(r.y / g) : A, i = w * (e[a - 1].y - r.y) || 1) : s = A *
								(1 - (R += i = w * e[a].y) * P), r.shapeArgs = {
									x: m,
									y: C,
									R1: L,
									R2: s,
									h: i || 1,
									r3dFactor: D,
									isHollow: N,
									gStr: "point",
									is2D: f,
									renderer: v.getFromEnv("paper"),
									isFunnel: !0
								}, M.setStyle(r.style), r.oriText = r.displayValue, n = n = M.getSmartText(r.displayValue, Number.POSITIVE_INFINITY, Number
									.POSITIVE_INFINITY), y ? (r.labelAline = T, r.labelX = m, r.labelY = (f ? C : C + D * L) + i / 2 + F, r.shapeArgs.h < r.minplotheightforvalue ?
									r.showValue = 0 : r.showValue = 1) : (r.labelAline = x, r.alignmentSwitch = V, r.distributionFactor = r.distributionFactor ||
									0, V ? (r.labelX = m - (S + s + E + n.width), r.labelX -= r.distributionFactor * p.globalMinXShift, U.set(r, n)) : (r.labelX =
										m + S + s + E, r.labelX += r.distributionFactor * p.globalMinXShift, X.set(r, n)), O = r.distributionFactor * I, r.labelY =
									C + F + i + O), t && (V && r.labelX < 0 ? (c = r.labelX + n.width, u = M.getSmartText(r.displayValue, c, Number.POSITIVE_INFINITY, !
										0), r.labelX = 2, r.isLabelTruncated = !0, r.displayValue = u.text, r.virtualWidth = u.maxWidth, j.setAll(!0, r, u)) : !V &&
									r.labelX + n.width > G && (u = M.getSmartText(r.displayValue, G - r.labelX, Number.POSITIVE_INFINITY, !0), r.isLabelTruncated = !
										0, r.displayValue = u.text, r.virtualWidth = u.maxWidth, z.setAll(!0, r, u))), r.pWidth = r.virtualWidth = n.width, C +=
								i, L = s) : (r.oriText = r.displayValue, s = 1 === p.useSameSlantAngle ? g ? A * r.y / g : A : g ? A * b(r.y / g) : A, r.labelWidth >
								2 * s && !t ? (r.labelAline = x, r.labelX = 0) : (r.labelAline = T, r.labelX = m), h = 2 * S, r.displayValue = M.getSmartText(
									r.origValue, 2 * s + h, Number.POSITIVE_INFINITY, !0).text, r.labelY = (f ? C : C - D * L) - F - E), r.plotX = m, r.plotY =
							C);
						this.findBestPosition(e, {
							lTrimmedInfo: j,
							rTrimmedInfo: z,
							lLargestLabel: U,
							rLargestLabel: X
						})
					}, t.findBestPosition = function (e, t) {
						var a, o, r, i, l, n, s, c, u, h = this.config,
							d = this.getFromEnv("chart"),
							p = d.config,
							g = 0,
							f = t.lTrimmedInfo,
							m = t.rTrimmedInfo,
							v = t.lLargestLabel,
							b = t.rLargestLabel,
							k = this.getFromEnv("smartLabel"),
							C = 0,
							x = h.streamLinedData,
							T = h.blankSpace,
							w = p.width - h.blankSpace;
						if (!f.flag || !m.flag) {
							if (m.flag) {
								if (!v.point) return;
								a = (o = m.sLabel).oriTextWidth - o.width, r = v.point.labelX - T, g = -Math.ceil(Math.min(a, r))
							} else if (f.flag) {
								if (!b.point) return;
								a = (o = f.sLabel).oriTextWidth - o.width, i = w - (b.point.labelX + b.sLabel.width), g = Math.ceil(Math.min(a, i))
							}
							if (g)
								for (s = 0, c = e.length; s < c; s++) n = e[s], s || !x ? (n.alignmentSwitch ? (l = g < 0 ? k.getSmartText(n.oriText, n.pWidth,
											Number.POSITIVE_INFINITY, !0) : k.getSmartText(n.oriText, n.pWidth + g, Number.POSITIVE_INFINITY, !0), n.isLabelTruncated &&
										(C = l.width - n.pWidth), n.virtualWidth = l.width) : (l = g > 0 ? k.getSmartText(n.oriText, n.pWidth, Number.POSITIVE_INFINITY, !
										0) : k.getSmartText(n.oriText, n.pWidth - g, Number.POSITIVE_INFINITY, !0), n.virtualWidth = l.width), n.displayValue = l
									.text, n.labelX += g - C, n.shapeArgs && (n.shapeArgs.x += g), C = 0) : n.labelX += g;
							else
								for (k.useEllipsesOnOverflow(p.useEllipsesWhenOverflow), s = 0, c = e.length; s < c; s++)(u = (n = e[s]).labelX + n.pWidth -
									w) > 0 && (n.lOverflow = u, n.labelX -= u, d.isLegendRight ? n.displayValue = k.getSmartText(n.oriText, n.pWidth - u,
									Number.POSITIVE_INFINITY, !0).text : (n.lOverflow = u, n.labelX -= u))
						}
					}, t.getPlotData = function (e) {
						var t, a, o, r = this.getChildren("data")[e],
							i = this.userData || (this.userData = []),
							l = ["y", "name", "color", "alpha", "borderColor", "borderWidth", "link", "label", "displayValue", "datasetIndex", "toolText"];
						if (i[e]) t = i[e];
						else {
							for (t = i[e] = {}, a = 0; a < l.length; a++) t[o = l[a]] = r[o];
							t.value = t.y, t.label = t.name, delete t.y, delete t.name
						}
						return t
					}, t.slice = function () {
						var e, t, a, o, r, i, l, n, s, c, u = this,
							h = u.datasetStore,
							d = u.plotItem,
							p = d.index,
							g = h.getChildren("data"),
							f = g[p],
							m = f.getGraphicalElement(),
							v = h.getFromEnv("chart"),
							b = h.getFromEnv("animationManager"),
							k = h.config,
							C = arguments[3] || k.clicked,
							x = k.slicingDistance,
							T = x / 2,
							w = 0,
							A = 0,
							S = g.length,
							y = [];
						if (!k.sliceLock) {
							for (k.sliceLock = 1, C = d.sliced = L(C) ? C : !d.sliced, r = -T, i = T, c = function () {
									return function () {
										k.sliceLock = 0, v.fireChartInstanceEvent("SlicingEnd", {
											slicedState: C,
											data: h.getPlotData(o)
										})
									}
								}, w = 0; w < S; w += 1)(t = g[w].plot) && !g[w].getState("removed") && (m = g[w].getGraphicalElement(), t !== d ? (g[w].isSliced =
								0, t.sliced = !1, y[w] = {
									isSliced: !1
								}, a = !1) : (g[w].isSliced = +!g[w].isSliced, y[w] = {
								isSliced: C
							}, a = !0, o = w), m.graphic && (l = -t.dy, C && (t.x < d.x ? (l += r, A += 1) : t.x === d.x ? A ? w === S - 1 && (l += .5 *
								T) : l += .5 * -T : l += i), m.graphic.attr({
								transform: "t0," + t.dy
							}), t.dy += l, e = {
								transform: "...t0," + l
							}, a && v.fireChartInstanceEvent("SlicingStart", {
								slicedState: !C,
								data: h.getPlotData(o)
							}), b.setAnimation({
								el: m.graphic,
								attr: e,
								component: h,
								callback: a && c(C, o)
							}), m.dataLabel && b.setAnimation({
								el: m.dataLabel,
								attr: e,
								component: h
							}), m.connector && b.setAnimation({
								el: m.connector,
								attr: e,
								component: h
							}), m.trackerObj && b.setAnimation({
								el: m.trackerObj,
								attr: e,
								component: h
							}), n = g[0].getGraphicalElement("graphic"), s = g[0].getGraphicalElement("dataLabel"), 1 === w && !n && s && b.setAnimation({
								el: s,
								attr: e,
								component: h
							})));
							delete k.clicked
						}
					}, t.legendClick = function (e) {
						this.slice.call(e)
					}, t.getEventArgs = function (e) {
						var t = this.getChildren("data")[e.config.index] || {};
						return {
							alpha: t.alpha,
							value: t.y,
							color: t.color,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth,
							link: t.link,
							displayValue: t.displayValue,
							datasetIndex: t.datasetIndex,
							toolText: t.toolText,
							label: t.categoryLabel
						}
					}, t.plotMouseUp = function (e) {
						var t = this.plotItem,
							a = this.datasetStore,
							o = a.getChildren("data")[t.index],
							r = a.getFromEnv("chart"),
							i = o.getGraphicalElement("trackerObj");
						i.data("eventArgs", Object.assign(i.data("eventArgs"), {
							isSliced: o.isSliced
						})), r.plotEventHandler(i, e, "dataplotclick")
					}, a
				}(n.ComponentInterface);
				t["default"] = P
			},
			1125: function (e, t, a) {
				"use strict";
				t.__esModule = !0, t["default"] = void 0;
				var o = {
						initialAttr: {
							opacity: 0
						},
						finalAttr: {
							opacity: 1
						},
						slot: "final"
					},
					r = function () {
						return {
							"connector.appearing": function () {
								return [o]
							},
							"connector.transform": function (e) {
								return [{
									initialAttr: {
										path: e.attr.path
									},
									finalAttr: {
										path: e.attr.path
									}
								}]
							},
							"dataLabel.appearing": function () {
								return [o]
							},
							"dataLabel.transform": function (e) {
								return [{
									initialAttr: {
										transform: e.attr.transform
									},
									finalAttr: {
										transform: e.attr.transform
									}
								}]
							},
							"path.appearing": function () {
								return [Object.assign({}, o, {
									slot: "plot"
								})]
							}
						}
					},
					i = {
						"initial.dataset.funnel": r,
						"initial.dataset.pyramid": r
					};
				t["default"] = i
			},
			1126: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1127)),
					l = a(193),
					n = l.preDefStr.POSITION_START,
					s = l.preDefStr.POSITION_END,
					c = l.preDefStr.POSITION_MIDDLE,
					u = {
						right: s,
						left: n,
						middle: c,
						start: n,
						end: s,
						center: c,
						undefined: l.BLANK,
						BLANK: l.BLANK
					},
					h = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a.configure = function (e) {
							for (var t in void 0 === e && (e = {}), e) this[t] = e[t];
							this.upperRadiusFactor = 1
						}, a.getType = function () {
							return "data"
						}, a.getName = function () {
							return "funnelpoint"
						}, a.getModifiedCurrentValue = function () {}, a.getRatioK = function (e, t, a, o, r) {
							var i = e.config,
								l = !i.streamLinedData,
								n = i.useSameSlantAngle;
							return l ? .2 + a * o : this.y ? n ? this.y / r : Math.sqrt(this.y / r) : 1
						}, a.getLowestRadiusFactor = function (e, t) {
							var a = e.config,
								o = !a.streamLinedData,
								r = a.useSameSlantAngle;
							return o ? .2 : this.y ? r ? this.y / t : Math.sqrt(this.y / t) : 1
						}, a.allocatePosition = function () {}, a.drawPlots = function () {
							var e, t, a, o, r, i, n, s = this.index,
								c = this.getLinkedParent(),
								h = c.getFromEnv("toolTipController"),
								d = c.config,
								p = this.y,
								g = this.displayValue,
								f = d.isSliced,
								m = this.labelAline,
								v = this.appliedStyle,
								b = this.style,
								k = l.BLANK,
								C = c.getFromEnv("chart").getChildContainer("trackerGroup"),
								x = this.plot,
								T = !!this.link,
								w = this.hoverHandler,
								A = d.distanceAvailed,
								S = c.config.labelDrawingConfig,
								y = c.getFromEnv("animationManager"),
								N = this.setRolloutAttr,
								F = this.setRolloverAttr,
								D = this.rolloverProperties,
								E = {};
							if (e = f ? 1 : this.isSliced, r = v && v.color || b && b.color || c._chartLevelAttr.color, n = {
									text: g,
									direction: k,
									cursor: T ? "pointer" : l.BLANK,
									x: 0,
									y: 0,
									fill: r,
									"text-anchor": u[m]
								}, null != p && this.shapeArgs) return a = this.getGraphicalElement("graphic"), o = this.getGraphicalElement("trackerObj"), !
								N && (this.setRolloutAttr = N = {}), !F && (this.setRolloverAttr = F = {}), this.hoverEffects ? (N.color = this.rawColor, N.opacity =
									this.rawAlpha, N["stroke-width"] = this.borderWidth, N.stroke = this.borderColor, F.color = D.color, F.opacity = D.alpha, F[
										"stroke-width"] = D.borderWidth, F.stroke = D.borderColor, F.rawBorderColor = D.rawBorderColor, F.borderAlpha = D.borderAlpha
								) : (N = this.setRolloutAttr = {}, F = this.setRolloverAttr = {}), x ? (this.shapeArgs.graphics = a, a = c.pyramidFunnelShape(
									this.shapeArgs), this.addGraphicalElement("graphic", a), a = y.setAnimation({
									el: a,
									attr: {
										fill: this.color,
										"stroke-width": this.borderWidth,
										stroke: this.borderColor
									},
									component: c
								}), this.addGraphicalElement("graphic", a), a.show(), S[s] = i = {
									args: n,
									css: v,
									point: this
								}) : (this.shapeArgs.graphics = x, this.plot = x = {}, a = c.pyramidFunnelShape(this.shapeArgs).attr({
									fill: this.color,
									"stroke-width": this.borderWidth,
									stroke: this.borderColor
								}), o = y.setAnimation({
									el: "path",
									container: C,
									component: c
								}).on("fc-click", c.plotMouseUp, E).hover(w, w), this.addGraphicalElement("graphic", a), this.addGraphicalElement(
									"trackerObj", o), S[s] = i = {
									args: n,
									css: v,
									point: this
								}), d.showTooltip ? h.enableToolTip(o, this.toolText) : h.disableToolTip(o), x.value = p, x.displayValue = g, x.sliced = !!e,
								x.cursor = T ? "pointer" : l.BLANK, x.x = this.x, x.index = s, E.datasetStore = c, E.plotItem = x, o.off("fc-click", c.slice), !
								this.doNotSlice && o.on("fc-click", c.slice, E), i.context = E, i.actions = {
									click: c.slice,
									hover: [w, w]
								}, x.dy = 0, d.noOfGap ? (A && (x._startTranslateY = t = "t0," + A, x.dy = x.distanceAvailed = A), d.slicingGapPosition[this
									.x] && (d.distanceAvailed -= d.perGapDistance)) : x._startTranslateY = t = "t0,0", y.setAnimation({
									el: a,
									attr: {
										transform: t
									},
									component: c
								}), i.transform = t, x;
							S[s] = i = {
								args: n,
								css: v,
								point: this
							}
						}, t
					}(i["default"]);
				t["default"] = h
			},
			1127: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(210)),
					i = o(a(207)),
					l = a(208),
					n = a(193),
					s = a(542),
					c = a(205),
					u = window,
					h = u.navigator.userAgent,
					d = /msie/i.test(h) && !u.opera,
					p = "rgba(192,192,192," + (d ? .002 : 1e-6) + ")",
					g = ["fontFamily", "fontSize", "fontWeight", "fontStyle"],
					f = function () {
						this.hide()
					},
					m = function (e, t) {
						var a, o, r = {
							labelfont: "fontFamily",
							labelfontcolor: "color",
							labelfontsize: "fontSize",
							labelfontbold: "fontWeight",
							labelfontitalic: "fontStyle",
							labelalpha: "alpha"
						};
						for (o in r)(o in e || o in t) && ((a = a || {})[r[o]] = (0, n.pluck)(e[o], t[o]));
						return a ? (a.fontWeight && (a.fontWeight = (0, n.pluckNumber)(a.fontWeight) ? "bold" : "normal"), a.fontStyle && (a.fontStyle =
							(0, n.pluckNumber)(a.fontStyle) ? "italic" : "normal"), a.color = (0, n.convertColor)(a.color, a.alpha), a) : a
					},
					v = function (e) {
						function t() {
							var t;
							t = e.call(this) || this;
							var a = (0, r["default"])(t);
							return t.hoverHandler = function (e) {
								var t = a.getGraphicalElement("graphic"),
									o = a.getLinkedParent().getFromEnv("chart");
								this.data("eventArgs", Object.assign(this.data("eventArgs"), {
									isSliced: a.isSliced
								})), "mouseover" === e.type ? (t.attr(a.setRolloverAttr), o.plotEventHandler(this, e, "DataPlotRollOver")) : (t.attr(a.setRolloutAttr),
									o.plotEventHandler(this, e, "DataPlotRollOut"))
							}, t
						}(0, i["default"])(t, e);
						var a = t.prototype;
						return a.parseAndConfigurePoint = function (e, t, a, o) {
							var r, i, l, s, c, u, h, d, p, g, f, v, b, k, C, x, T, w, A, S, y, N, F, D, E, L, M, R, _ = this.getLinkedParent(),
								V = _.getFromEnv("chart"),
								O = _.config,
								I = _.getFromEnv("number-formatter"),
								P = _.getFromEnv("smartLabel"),
								G = _.getFromEnv("color-manager"),
								B = 0,
								H = O.showPercentValues,
								W = O.labelSepChar,
								j = V.getFromEnv("chart-attrib"),
								z = O.isSliced,
								U = {
									apply: O.showShadow,
									opacity: 1
								},
								X = (0, n.pluckNumber)(e.minplotheightforvalue, j.minplotheightforvalue, 0),
								K = O.plotBorderThickness,
								Y = O.style;
							O.showTextOutline = (0, n.pluckNumber)(j.textoutline, 0), i = t.refreshedData, B = t.sumValue, s = I.dataLabels(B), l = t.highestValue,
								M = (0, n.pluck)(e.labellink, j.labellink, e.link, n.UNDEF), E = e.legendItemId, c = e.cleanValue, u = o ? i[o - 1].value : c,
								h = (0, n.parseUnsafeString)((0, n.pluck)(e.label, e.name, n.BLANKSTRING)), P.setStyle(this.getFromEnv("dataLabelStyle")), d =
								P.getOriSize(h), A = e.alpha || O.plotFillAlpha, L = (0, n.pluck)(e.color, G.getPlotColor(a)), R = (0, n.convertColor)(L), w =
								(0, n.convertColor)(L, A), S = (0, n.pluck)(e.bordercolor, O.plotBorderColor, (0, n.getLightColor)(L, 25)).split(n.COMMASTRING)[
									0], y = O.showPlotBorder ? (0, n.pluck)(e.borderalpha, O.plotBorderAlpha, "80") : n.ZEROSTRING, U.opacity = Math.max(A, y) /
								100, (p = (0, n.pluckNumber)(e.issliced, z)) && (O.noOFSlicedElement += 1, O.preSliced = p), t.prevPerValReq && (B = u), g =
								I.percentValue(c / B * 100), O.datalabelDisabled || (f = I.dataLabels(c) || n.BLANKSTRING, v = 1 === O.showLabels ? h : n.BLANKSTRING,
									b = 1 === (r = (0, n.pluckNumber)(e.showvalue, O.showValues, 1)) ? 1 === H ? g : f : n.BLANKSTRING, k = (0, n.getValidValue)
									((0, n.parseUnsafeString)(e.displayvalue)), D = (0, n.pluck)(k, h + W + (H ? g : f), n.BLANKSTRING), b = k || (b !== n.BLANKSTRING &&
										v !== n.BLANKSTRING ? v + W + b : (0, n.pluck)(v, b) || n.BLANKSTRING)), (C = (0, n.getValidValue)((0, n.parseUnsafeString)
									((0, n.pluck)(e.tooltext, O.toolText), !1))) !== n.UNDEF ? (N = {
									formatedVal: f,
									name: h,
									pValue: g,
									sum: s,
									sumValue: s,
									dataValue: c,
									prevValue: u,
									highestValue: l
								}, C = (0, n.parseTooltext)(C, [1, 2, 3, 7, 14, 24, 25, 37], _.getTooltipMacroStub(N), e, j)) : (x = 1 === O.showPercentInToolTip ?
									g : f, C = h !== n.BLANKSTRING ? h + O.tooltipSepChar + x : x), F = _.pointHoverOptions(e, {
									color: L,
									alpha: A,
									borderColor: S,
									borderAlpha: y,
									borderWidth: K
								}), T = {
									displayValue: b,
									origValue: b,
									displayValueArgs: D,
									style: (0, n.parsexAxisStyles)(e, {}, j, Y, w),
									appliedStyle: m(e, j),
									name: h,
									categoryLabel: h,
									rawColor: L,
									rawAlpha: A,
									toolText: C,
									legendCosmetics: n.UNDEF,
									legendItemId: E || this && this.legendItemId,
									showInLegend: n.UNDEF,
									y: c,
									shadow: U,
									smartTextObj: d,
									legendColor: R,
									color: w,
									alpha: A,
									borderColor: (0, n.convertColor)(S, y),
									plotBorderColor: S,
									plotBorderAlpha: y,
									borderWidth: K,
									link: (0, n.getValidValue)(e.link),
									isSliced: p,
									doNotSlice: !O.enableSlicing,
									hoverEffects: F.enabled && F.options,
									labellink: M,
									rolloverProperties: F.enabled && F.rolloverOptions,
									minplotheightforvalue: X,
									showValue: r
								}, this.configure(T)
						}, a.drawLabel = function () {
							var e, t, a, o, r, i, l, c, u, h, d, p, m, v, b, k, C = this,
								x = C.index,
								T = C.getLinkedParent(),
								w = T.getFromEnv("chart"),
								A = T.getFromEnv("animationManager"),
								S = T.getFromEnv("toolTipController"),
								y = T.config,
								N = w.getChildContainer("datalabelsGroup"),
								F = T.getChildren("data"),
								D = C.displayValue,
								E = C.plot || {},
								L = C.getGraphicalElement("dataLabel"),
								M = C.getGraphicalElement("connector"),
								R = !L,
								_ = C.labelY,
								V = C.labelX,
								O = C.style || {},
								I = (0, n.pluckNumber)(parseInt(O.fontSize, 10), y.baseFontSize),
								P = "funnel" === T.getName(),
								G = y.lineHeight,
								B = .3 * I,
								H = .3 * G,
								W = y.showLabelsAtCenter,
								j = C.setRolloverAttr,
								z = y.connectorEndSwitchHistoryY,
								U = y.labelDistance,
								X = y.blankSpace,
								K = y.streamLinedData,
								Y = C.shapeArgs,
								J = !Y || Y.h > C.minplotheightforvalue;
							if (!C.displayValue || P && !y.streamLinedData && !x) return L && A.setAnimation({
								el: L,
								component: T,
								callback: f,
								doNotRemove: !0
							}), void(M && A.setAnimation({
								el: M,
								component: T,
								callback: f,
								doNotRemove: !0
							}));
							r = T.config.labelDrawingConfig[x], a = r.actions, e = C.y, t = {
									"stroke-width": y.dataConnectorStyle.connectorWidth,
									stroke: y.dataConnectorStyle.connectorColor,
									transform: r.transform
								}, r.args.cursor = C.labellink ? "pointer" : "default", r.args && r.css && (r.args.fill = r.css.color || r.css.fill), null !==
								e && e !== n.UNDEF && Y ? (o = !(P && 0 === x && y.streamLinedData), C.plot && (L && L.removeCSS(g), (L = A.setAnimation({
									el: L || "text",
									label: "dataLabel",
									attr: r.args,
									css: r.css,
									container: N,
									component: T
								})).outlineText(y.showTextOutline, r.args.fill), C.addGraphicalElement("dataLabel", L), M = A.setAnimation({
									el: M || "path",
									attr: o && t,
									container: N,
									callback: function () {
										y.showLabelsAtCenter && this.hide()
									},
									component: T,
									label: "connector"
								}), o && C.addGraphicalElement("connector", M)), S.enableToolTip(L, C.originalText), R || (C.labelClickFn && L.off(
									"fc-click", C.labelClickFn), C.actionsClick && L.off("fc-click", C.actionsClick)), u = {
									link: C.link,
									value: C.y,
									displayValue: C.displayValueArgs,
									categoryLabel: C.categoryLabel,
									dataIndex: C.index || n.BLANK,
									toolText: C.toolText,
									label: C.categoryLabel,
									color: C.rawColor,
									alpha: C.rawAlpha,
									showValue: C.showValue,
									isSliced: C.isSliced,
									borderColor: C.plotBorderColor,
									borderAlpha: C.plotBorderAlpha,
									hoverColor: j.color,
									hoverAlpha: j.opacity,
									borderHoverColor: j.rawBorderColor,
									borderHoverAlpha: j.borderAlpha,
									borderHoverThickness: j["stroke-width"]
								}, L.data("eventArgs", u), C.labellink && L.on("fc-click", (b = L, k = C.labellink, C.labelClickFn = function () {
									s.labelClickFn.call(b, w, k)
								}, C.labelClickFn)), !C.doNotSlice && L.on("fc-click", (v = r.context, C.actionsClick = function () {
									a.click.call(v)
								}, C.actionsClick)), R && L.hover(a.hover[0], a.hover[1])) : (L ? (L.removeCSS(g), L && A.setAnimation({
									el: L,
									attr: r.args,
									component: T
								}), L && L.css(r.css)) : (L = A.setAnimation({
									el: "text",
									label: "dataLabel",
									attr: r.args,
									css: r.css,
									container: N,
									component: T
								}), C.addGraphicalElement("dataLabel", L)), L.outlineText(y.showTextOutline, r.args.fill)), W ? (m = 0 === x && K ? _ - H + (
									F[1].plot.distanceAvailed || 0) : _ - H + (E.distanceAvailed || 0), D !== n.BLANKSTRING ? (A.setAnimation({
									el: L,
									attr: {
										transform: ["t", V, m]
									},
									component: T
								}), L.show()) : L && A.setAnimation({
									el: L,
									component: T
								}), !J && C.getGraphicalElement("dataLabel") && C.getGraphicalElement("dataLabel").hide()) : (i = _ - B - C.distributionFactor *
									G, l = _ - B, c = z[C.alignmentSwitch], y.lastplotY !== n.UNDEF && c !== n.UNDEF && c - l < G && (_ = l = c - G), C.displayValue &&
									(z[C.alignmentSwitch] = l), y.lastplotY = C.plotY, d = y.labelAlignment === y.alignmentType.alternate && C.alignmentSwitch ?
									(h = V + X + C.virtualWidth) + U + C.distributionFactor * y.globalMinXShift : (h = V - X) - (U - (C.lOverflow || 0)) - C.distributionFactor *
									y.globalMinXShift, void 0 === D || D === n.BLANKSTRING || P && 0 === x && K ? M && A.setAnimation({
										el: M,
										component: T
									}) : (p = ["M", d, i, "L", h, l], A.setAnimation({
										el: M,
										state: "transform",
										label: "connector",
										attr: {
											path: p,
											"shape-rendering": i === l && l < 1 ? "crisp" : n.BLANK
										},
										component: T
									}), M.show()), m = 0 === x && K ? _ + (F[1].plot.dy || 0) : l + (E.dy || 0), D !== n.BLANKSTRING ? (A.setAnimation({
										el: L,
										state: "transform",
										attr: {
											transform: ["t", V, m]
										},
										component: T,
										label: "dataLabel"
									}), L.show()) : L && A.setAnimation({
										el: L,
										component: T
									})), L.attr({
									"text-bound": [O.backgroundColor, O.borderColor, O.borderThickness, O.borderPadding, O.borderRadius, O.borderDash]
								})
						}, a.drawTracker = function () {
							var e, t, a, o, r, i = this.getLinkedParent().getFromEnv("chart"),
								l = i.getFromEnv("paper"),
								s = i.getChildContainer("trackerGroup"),
								c = +new Date;
							this && (a = this.getGraphicalElement("graphic"), t = this.getGraphicalElement("trackerObj"), a && (e = a.Shapeargs.silhuette,
								o = this.setRolloverAttr, r = {
									link: this.link,
									value: this.y,
									displayValue: this.displayValueArgs,
									categoryLabel: this.categoryLabel,
									dataIndex: this.index || n.BLANK,
									toolText: this.toolText,
									label: this.categoryLabel,
									color: this.rawColor,
									alpha: this.rawAlpha,
									showValue: this.showValue,
									isSliced: this.isSliced,
									borderColor: this.plotBorderColor,
									borderAlpha: this.plotBorderAlpha,
									hoverColor: o.color,
									hoverAlpha: o.opacity,
									borderHoverColor: o.rawBorderColor,
									borderHoverAlpha: o.borderAlpha,
									borderHoverThickness: o["stroke-width"]
								}, this.datasetIndex = this.index, t ? t.attr({
									path: e,
									isTracker: c,
									fill: p,
									stroke: "none",
									transform: "t0," + (this.plot._startTranslateY || 0),
									cursor: this.link ? "pointer" : "default"
								}) : (t = l.path(e, s).attr({
									isTracker: c,
									fill: p,
									stroke: "none",
									transform: "t0," + (this.plot._startTranslateY || 0),
									cursor: this.link ? "pointer" : "default"
								}), this.addGraphicalElement("trackerObj", t)), t.data("eventArgs", r), t.show()))
						}, a.syncDraw = function () {
							var e = this;
							e.fireEvent("predraw"), e.removeJob("draw"), e.getState("removed") ? e.removingDraw() : e.drawPlots && e.drawPlots(), e.addExtEventListener(
								"animationComplete", e.__remove, e.getFromEnv("animationManager")), e.childrenSyncDraw(), e.setState("dirty", !1), e.setState(
								"parentChanged", !1), e.addJob("draw-complete", (function () {
								e.fireEvent("drawn")
							}), c.priorityList.instant)
						}, t
					}(l.ComponentInterface);
				t["default"] = v
			},
			1128: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(1129))["default"];
				t["default"] = r
			},
			1129: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1122)),
					l = o(a(1130)),
					n = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).useSortedData = !1, t
						}(0, r["default"])(t, e), t.getName = function () {
							return "Pyramid"
						};
						var a = t.prototype;
						return a.getName = function () {
							return "Pyramid"
						}, a.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Funnel Chart", t.defaultDatasetType = "pyramid"
						}, a.configureAttributes = function () {
							e.prototype.configureAttributes.call(this), this.config.PLOT_COLOR_INDEX_START = 0, this.alignLegendWithCanvas = 0
						}, a.getDSdef = function () {
							return l["default"]
						}, t
					}(i["default"]);
				t["default"] = n
			},
			1130: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = a(193),
					l = o(a(1124)),
					n = a(205),
					s = o(a(1131)),
					c = i.preDefStr.POSITION_START,
					u = i.preDefStr.POSITION_MIDDLE,
					h = function (e) {
						function t() {
							var t;
							return (t = e.call(this) || this).preDrawingHook = function () {}, t.config.pointInContext = s["default"], t.config.LABEL_PLACEMENT_ITERATOR_INDEX_START =
								0, t
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a.getType = function () {
							return "dataset"
						}, a.getName = function () {
							return "pyramid"
						}, a.configure = function (e) {
							if (!e) return !1;
							this.config.JSONData = e;
							var t = this.getFromEnv("chartConfig");
							this._checkValidData(this.config.JSONData.data) && (this._configure(), t.showLegend && this.addLegend())
						}, a.configureSpecifics = function () {
							var e = this.getFromEnv("chart"),
								t = this.config,
								a = e.getFromEnv("dataSource") ? e.getFromEnv("dataSource").chart : {};
							(0, this.utils(this).copyProperties)(a, t, [
								["pyramidyscale", "yScale", i.pluckNumber, void 0, function (e) {
									var t = e.yScale;
									e.yScale = t >= 0 && t <= 40 ? t / 200 : .2
								}],
								["use3dlighting", "use3DLighting", i.pluckNumber, 1]
							])
						}, a.calculatePositionOfPlots = function () {
							var e, t, a, o, r, l, n, s, c, u, h, d, p, g, f, m, v = this.getFromEnv("chart").config,
								b = this.config,
								k = this.utils(this).DistributionMatrix,
								C = this.calculatePositionCoordinate,
								x = b.psmMargin,
								T = this.getChildren("data"),
								w = 2,
								A = T.length,
								S = 0,
								y = 0,
								N = b.lineHeight,
								F = Math.floor;
							for (this.postPlotCallback = i.stubFN, v.canvasTop += v.marginTop - x.top, v.effCanvasHeight = r = v.canvasHeight - (v.marginTop +
									v.marginBottom) + (x.top + x.bottom), v.effCanvasWidth = l = v.width - (v.marginLeft + v.marginRight), n = b.drawingRadius =
								l / w, b.x = n + v.canvasLeft, m = Math.atan(l / 2 / r), b.unitHeight = o = r / b.sumValue, b.lastRadius = 0, b.globalMinXShift =
								Math.floor(N / Math.cos(m)), (s = b.alignmentType = {})["default"] = 1, s.alternate = 2, f = new k(F(r / N)), e = 0, t = A; e <
								t; e++)(a = T[e]).getState("removed") || (S = a.y * o, c = F(((y += a.y * o) - S + S / 2) / N), f.push(a, c));
							if (u = f.getDistributedResult(), T.length = 0, void 0 === u.matrix[1])[].push.apply(T, u.matrix[0]);
							else
								for (h = u.matrix[0], d = u.matrix[1], t = Math.max(h.length, d.length), e = 0; e < t; e++) g = h[e], p = d[e], T.push(g || p);
							switch (u.suggestion) {
							case s["default"]:
								C.call(this, T, !1);
								break;
							case s.alternate:
								b.labelAlignment = s.alternate, w = 3, b.drawingRadius = n = l / w, v.canvasLeft = v.canvasWidth / 2 - n, b.x = v.canvasLeft +
									n, C.call(this, T, !0)
							}
						}, a.draw = function () {
							var e, t, a, o, r, i, l, s = this.getFromEnv("chart"),
								c = this.config,
								u = this.config.trackerArgs = [],
								h = this.getChildren("data"),
								d = h.length,
								p = Math.min;
							if (c.sumValue) {
								for (this.config.labelDrawingConfig = this.config.labelDrawingConfig || [], this.config.labelDrawingConfig.length = 0, this.animateFunction =
									function (e) {
										return function () {
											e.attr({
												opacity: 1
											})
										}
									}, r = (a = c.slicingDistance) / 2, e = 0, t = h.length; e < t; e++) h[e] && h[e].shapeArgs && (h[e].shapeArgs.renderer = s.getFromEnv(
									"paper"));
								for ((o = c.noOfGap) && (c.perGapDistance = p(1.5 * r, a / o), c.distanceAvailed = r), e = h.length, c.alreadyPlotted && (
										this.postPlotCallback = function () {
											l || (l = !0)
										}); e--;)(i = h[e]).index = e, i.syncDraw();
								for (c.oldLastData = Object.assign({}, h[h.length - 1].shapeArgs), this.hide(this.getChildren("data"), d), c.connectorEndSwitchHistoryY = {},
									e = h.length; e--;) u.push(h[e]);
								this.addJob("labelDrawID", this.drawAllLabels.bind(this), n.priorityList.label), this.addJob("trackerDrawID", this.drawAllTrackers
									.bind(this), n.priorityList.tracker), this.removePlots(), c.alreadyPlotted = !0, c.prevIs2d = c.is2d
							}
						}, a.calculatePositionCoordinate = function (e, t) {
							var a, o, r, l, n, s, h, d, p, g = this.config,
								f = g.is2d,
								m = g.x,
								v = this.getFromEnv("chart"),
								b = v.config,
								k = b.canvasTop,
								C = g.unitHeight,
								x = g.labelDistance,
								T = g.showLabelsAtCenter,
								w = .3 * b.style.fontSize,
								A = g.yScale,
								S = g.blankSpace,
								y = g.lastRadius,
								N = this.getFromEnv("smartLabel"),
								F = e.length - 1,
								D = !1,
								E = 0,
								L = g.lineHeight,
								M = 0,
								R = {
									flag: !1,
									point: void 0,
									sLabel: void 0,
									setAll: function (e, t, a) {
										this.flag = e, this.point = t, this.sLabel = a
									}
								},
								_ = {
									point: void 0,
									sLabel: void 0,
									set: function (e, t) {
										var a = e,
											o = t;
										return function (e, t) {
											var r, i;
											if (!e.dontPlot) {
												if (!this.point || !this.sLabel) return this.point = e, void(this.sLabel = t);
												r = a(this.point, this.sLabel), i = a(e, t), o(r, i) && (this.point = e, this.sLabel = t)
											}
										}
									}
								},
								V = {},
								O = {},
								I = {},
								P = {},
								G = v.config.width - 2,
								B = g.slicingGapPosition = {};
							for ((0, i.extend2)(V, R), (0, i.extend2)(O, R), V.setAll = function (e, t, a) {
									var o = this.point,
										r = this.sLabel;
									if (this.flag = e, !o || !r) return this.point = t, void(this.sLabel = a);
									o.labelX - (r.oriTextWidth - r.width) > t.labelX - (a.oriTextWidth - a.width) && (this.point = t, this.sLabel = a)
								}, O.setAll = function (e, t, a) {
									var o = this.point,
										r = this.sLabel;
									if (this.flag = e, !o || !r) return this.point = t, void(this.sLabel = a);
									o.labelX + r.oriTextWidth < t.labelX + a.oriTextWidth && (this.point = t, this.sLabel = a)
								}, (0, i.extend2)(I, _), (0, i.extend2)(P, _), I.set = _.set.apply(I, [function (e) {
									return e.labelX
								}, function (e, t) {
									return e > t
								}]), P.set = _.set.apply(P, [function (e, t) {
									return e.labelX + t.oriTextWidth
								}, function (e, t) {
									return e < t
								}]), g.noOfGap = 0, N.useEllipsesOnOverflow(b.useEllipsesWhenOverflow), a = 0, o = e.length; a < o; a++)(r = e[a]) && (r.x =
								a, r.plot && (r.isSliced = !!r.isSliced || !!g.isSliced), r.isSliced = (0, i.pluckNumber)(r.isSliced, g.isSliced), t && (D = !
									D), r.isSliced && ((p = r.x) && !B[p] && (B[p] = !0, g.noOfGap += 1), p < F && (B[p + 1] = !0, g.noOfGap += 1)), N.setStyle(
									r.style), r.oriText = r.displayValue, n = n = N.getSmartText(r.displayValue, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY),
								M += r.y, s = g.drawingRadius * M / g.sumValue, l = C * r.y, r.shapeArgs = {
									x: m,
									y: k,
									R1: y,
									R2: s,
									h: l,
									r3dFactor: A,
									gStr: "point",
									is2D: f,
									use3DLighting: !!g.use3DLighting,
									renderer: this.getFromEnv("paper")
								}, T ? (r.labelAline = u, r.labelX = m, r.labelY = (f ? k : k + A * y) + l / 2 + w) : (r.labelAline = c, r.alignmentSwitch =
									D, r.distributionFactor = r.distributionFactor || 0, D ? (r.labelX = m - (x + (s + y) / 2 + S + n.width), r.labelX -= r.distributionFactor *
										g.globalMinXShift, I.set(r, n)) : (r.labelX = m + x + (s + y) / 2 + S, r.labelX += r.distributionFactor * g.globalMinXShift,
										P.set(r, n)), E = r.distributionFactor * L, r.labelY = k + w + l / 2 + E), t && (D && r.labelX < 0 ? (h = r.labelX + n.width,
									d = N.getSmartText(r.displayValue, h, Number.POSITIVE_INFINITY, !0), r.labelX = 2, r.isLabelTruncated = !0, r.displayValue =
									d.text, r.virtualWidth = d.maxWidth, V.setAll(!0, r, d)) : !D && r.labelX + n.width > G && (d = N.getSmartText(r.displayValue,
										G - r.labelX, Number.POSITIVE_INFINITY, !0), r.isLabelTruncated = !0, r.displayValue = d.text, r.virtualWidth = d.maxWidth,
									O.setAll(!0, r, d)), r.pWidth = r.virtualWidth || n.width, E = r.distributionFactor * L, r.labelY = k + w + l / 2 + E), k +=
								l, r.plotX = m, r.plotY = k - l / 2, y = s, r.virtualWidth = r.virtualWidth || n.width);
							this.findBestPosition(e, {
								lTrimmedInfo: V,
								rTrimmedInfo: O,
								lLargestLabel: I,
								rLargestLabel: P
							})
						}, a.getTooltipMacroStub = function (t) {
							var a, o, r = this.config,
								i = this.getFromEnv("number-formatter");
							return o = r.percentOfPrevious ? t.pValue : i.percentValue(t.dataValue / t.prevValue * 100), (a = e.prototype.getTooltipMacroStub
									.call(this, t)).percentValue = r.percentOfPrevious ? i.percentValue(t.dataValue / t.highestValue * 100) : t.pValue, a.percentOfPrevValue =
								o, a
						}, t
					}(l["default"]);
				t["default"] = h
			},
			1131: function (e, t, a) {
				"use strict";
				var o = a(187);
				t.__esModule = !0, t["default"] = void 0;
				var r = o(a(207)),
					i = o(a(1127)),
					l = a(193),
					n = l.preDefStr.POSITION_START,
					s = l.preDefStr.POSITION_END,
					c = l.preDefStr.POSITION_MIDDLE,
					u = {
						right: s,
						left: n,
						middle: c,
						start: n,
						end: s,
						center: c,
						undefined: l.BLANK,
						BLANK: l.BLANK
					},
					h = function (e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, r["default"])(t, e);
						var a = t.prototype;
						return a.configure = function (e) {
							for (var t in void 0 === e && (e = {}), e) this[t] = e[t];
							this.upperRadiusFactor = 0
						}, a.getType = function () {
							return "data"
						}, a.getName = function () {
							return "pyramidpoint"
						}, a.getModifiedCurrentValue = function (e) {
							return e + this.y / 2
						}, a.getRatioK = function (e, t) {
							var a = e.config;
							return t ? t / a.sumValue : 1
						}, a.getLowestRadiusFactor = function () {
							return 1
						}, a.allocatePosition = function () {}, a.drawPlots = function () {
							var e, a, o, r, i, n, s, c, h = this,
								d = h.index,
								p = h.getLinkedParent(),
								g = p.config,
								f = p.getFromEnv("toolTipController"),
								m = h.y,
								v = h.displayValue,
								b = g.isSliced,
								k = l.BLANK,
								C = p.getFromEnv("chart"),
								x = p.getFromEnv("animationManager"),
								T = C.getChildContainer("trackerGroup"),
								w = C.getChildContainer("datalabelsGroup"),
								A = C.getChildContainer().plotGroup,
								S = h.plot,
								y = !!h.link,
								N = g.pointInContext,
								F = g.distanceAvailed,
								D = h.labelAline,
								E = h.appliedStyle,
								L = this.hoverHandler,
								M = h.style,
								R = h.setRolloutAttr,
								_ = h.setRolloverAttr,
								V = h.rolloverProperties,
								O = {},
								I = p.config.labelDrawingConfig;
							if (h instanceof t || (r = h, (h = new N).configure(r), p.components.data[d] = h), g.prevIs2d && g.prevIs2d !== g.is2d && (x.setAnimation({
									el: A,
									attr: {
										opacity: 1
									},
									component: p
								}), x.setAnimation({
									el: w,
									attr: {
										opacity: 1
									},
									component: p
								})), s = E && E.color || M && M.color || p._chartLevelAttr.color, e = b ? 1 : h.isSliced, n = {
									text: v,
									direction: k,
									cursor: y ? "pointer" : l.BLANK,
									x: 0,
									y: 0,
									fill: s,
									"text-anchor": u[D]
								}, null != m && h.shapeArgs) return o = h.getGraphicalElement("graphic"), i = h.getGraphicalElement("trackerObj"), !R && (h.setRolloutAttr =
									R = {}), !_ && (h.setRolloverAttr = _ = {}), h.hoverEffects ? (R.color = h.rawColor, R.opacity = h.rawAlpha, R[
										"stroke-width"] = h.borderWidth, R.stroke = h.borderColor, _.color = V.color, _.opacity = V.alpha, _["stroke-width"] = V.borderWidth,
									_.stroke = V.borderColor, _.rawBorderColor = V.rawBorderColor, _.borderAlpha = V.borderAlpha) : (R = h.setRolloutAttr = {},
									_ = h.setRolloverAttr = {}), S ? (h.shapeArgs.graphics = o, o = p.pyramidFunnelShape(h.shapeArgs), h.addGraphicalElement(
									"graphic", o), x.setAnimation({
									el: o,
									attr: {
										fill: h.color,
										"stroke-width": h.borderWidth,
										stroke: h.borderColor
									},
									component: p
								}), o.show(), I[d] = c = {
									args: n,
									css: E,
									point: h
								}) : (h.shapeArgs.graphics = S, h.plot = S = {}, o = p.pyramidFunnelShape(h.shapeArgs), i = x.setAnimation({
									el: "path",
									container: T,
									component: p
								}).on("fc-click", p.plotMouseUp, O).hover(L, L), x.setAnimation({
									el: o,
									attr: {
										fill: h.color,
										"stroke-width": h.borderWidth,
										stroke: h.borderColor
									},
									component: p
								}), h.addGraphicalElement("graphic", o), h.addGraphicalElement("trackerObj", i), I[d] = c = {
									args: n,
									css: E,
									point: h
								}), g.showTooltip ? f.enableToolTip(i, h.toolText) : f.disableToolTip(i), S.value = m, S.displayValue = v, S.sliced = !!e, S
								.cursor = y ? "pointer" : l.BLANK, S.x = h.x, S.index = d, O.datasetStore = p, O.plotItem = S, i.off("fc-click", p.slice), !
								h.doNotSlice && i.on("fc-click", p.slice, O), c.context = O, c.actions = {
									click: p.slice,
									hover: [L, L]
								}, S.dy = 0, g.noOfGap ? (F && (S._startTranslateY = a = "t0," + F, S.dy = S.distanceAvailed = F), g.slicingGapPosition[h.x] &&
									(g.distanceAvailed -= g.perGapDistance)) : S._startTranslateY = a = "t0,0", x.setAnimation({
									el: o,
									attr: {
										transform: a
									},
									component: p
								}), c.transform = a, S;
							I[d] = c = {
								args: n,
								css: E,
								point: h
							}
						}, t
					}(i["default"]);
				t["default"] = h
			}
		}
	])
}));