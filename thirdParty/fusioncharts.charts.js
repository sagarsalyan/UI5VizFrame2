! function (e) {
	"object" == typeof module && "undefined" != typeof module.exports ? module.exports = e : e()
}(function () {
	(window.webpackJsonpFusionCharts = window.webpackJsonpFusionCharts || []).push([
		[1], {
			355: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t.Mssplinearea = t.Msspline = t.MSSplineDy = t.Splinearea = t.Spline = t.MSColumn2D = t.MSColumn3D = t.MSLine =
					t.MSBar2D = t.MSBar3D = t.MSArea = t.Marimekko = t.MSCombi2D = t.MSCombi3D = t.MSColumnLine3D = t.StackedColumn2DLine = t.StackedColumn3DLine =
					t.MSCombidy2D = t.MSColumn3DLineDy = t.StackedColumn3DLineDy = t.MSStackedColumn2DLineDy = t.StackedColumn2D = t.StackedColumn3D =
					t.StackedBar2D = t.StackedBar3D = t.StackedArea2D = t.MSStackedColumn2D = t.Scatter = t.Bubble = t.ScrollColumn2D = t.ScrollLine2D =
					t.ScrollArea2D = t.ScrollStackedColumn2D = t.ScrollCombi2D = t.ScrollCombiDy2D = t.Pareto3D = t.Pareto2D = t.Doughnut3D = t.Doughnut2D =
					t.Pie3D = t.Pie2D = t.Bar3D = t.Bar2D = t.Area = t.Line = t.Column3D = t.Column2D = undefined;
				var n = q(o(356)),
					r = q(o(433)),
					a = q(o(446)),
					i = q(o(452)),
					l = q(o(454)),
					c = q(o(468)),
					s = q(o(473)),
					u = q(o(479)),
					f = q(o(486)),
					p = q(o(488)),
					d = q(o(492)),
					h = q(o(503)),
					g = q(o(506)),
					b = q(o(519)),
					y = q(o(522)),
					m = q(o(526)),
					v = q(o(527)),
					_ = q(o(529)),
					C = q(o(530)),
					w = q(o(543)),
					D = q(o(544)),
					O = q(o(547)),
					S = q(o(551)),
					P = q(o(556)),
					k = q(o(559)),
					x = q(o(563)),
					M = q(o(565)),
					E = q(o(568)),
					N = q(o(573)),
					A = q(o(574)),
					j = q(o(575)),
					T = q(o(578)),
					F = q(o(581)),
					B = q(o(583)),
					I = q(o(584)),
					L = q(o(585)),
					R = q(o(590)),
					G = q(o(591)),
					V = q(o(592)),
					z = q(o(593)),
					H = q(o(595)),
					W = q(o(596)),
					Y = q(o(597)),
					U = q(o(600)),
					X = q(o(602)),
					Z = q(o(605)),
					J = q(o(607));

				function q(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}
				t.Column2D = n["default"], t.Column3D = r["default"], t.Line = a["default"], t.Area = i["default"], t.Bar2D = l["default"], t.Bar3D =
					c["default"], t.Pie2D = s["default"], t.Pie3D = u["default"], t.Doughnut2D = f["default"], t.Doughnut3D = p["default"], t.Pareto2D =
					d["default"], t.Pareto3D = h["default"], t.ScrollCombiDy2D = g["default"], t.ScrollCombi2D = b["default"], t.ScrollStackedColumn2D =
					y["default"], t.ScrollArea2D = m["default"], t.ScrollLine2D = v["default"], t.ScrollColumn2D = _["default"], t.Bubble = C[
						"default"], t.Scatter = w["default"], t.MSStackedColumn2D = D["default"], t.StackedArea2D = O["default"], t.StackedBar3D = S[
						"default"], t.StackedBar2D = P["default"], t.StackedColumn3D = k["default"], t.StackedColumn2D = x["default"], t.MSStackedColumn2DLineDy =
					M["default"], t.StackedColumn3DLineDy = E["default"], t.MSColumn3DLineDy = N["default"], t.MSCombidy2D = A["default"], t.StackedColumn3DLine =
					j["default"], t.StackedColumn2DLine = T["default"], t.MSColumnLine3D = F["default"], t.MSCombi3D = B["default"], t.MSCombi2D = I[
						"default"], t.Marimekko = L["default"], t.MSArea = R["default"], t.MSBar3D = G["default"], t.MSBar2D = V["default"], t.MSLine = z[
						"default"], t.MSColumn3D = H["default"], t.MSColumn2D = W["default"], t.Spline = Y["default"], t.Splinearea = U["default"], t.MSSplineDy =
					Z["default"], t.Msspline = X["default"], t.Mssplinearea = J["default"], t["default"] = {
						name: "charts",
						type: "package",
						requiresFusionCharts: !0,
						extension: function (e) {
							e.addDep(n["default"]), e.addDep(r["default"]), e.addDep(a["default"]), e.addDep(i["default"]), e.addDep(l["default"]), e.addDep(
								c["default"]), e.addDep(s["default"]), e.addDep(u["default"]), e.addDep(f["default"]), e.addDep(p["default"]), e.addDep(d[
								"default"]), e.addDep(h["default"]), e.addDep(g["default"]), e.addDep(b["default"]), e.addDep(y["default"]), e.addDep(m[
								"default"]), e.addDep(v["default"]), e.addDep(_["default"]), e.addDep(C["default"]), e.addDep(w["default"]), e.addDep(D[
								"default"]), e.addDep(O["default"]), e.addDep(S["default"]), e.addDep(P["default"]), e.addDep(k["default"]), e.addDep(x[
								"default"]), e.addDep(M["default"]), e.addDep(E["default"]), e.addDep(N["default"]), e.addDep(A["default"]), e.addDep(j[
								"default"]), e.addDep(T["default"]), e.addDep(F["default"]), e.addDep(B["default"]), e.addDep(I["default"]), e.addDep(L[
								"default"]), e.addDep(R["default"]), e.addDep(G["default"]), e.addDep(V["default"]), e.addDep(z["default"]), e.addDep(H[
								"default"]), e.addDep(W["default"]), e.addDep(Y["default"]), e.addDep(U["default"]), e.addDep(Z["default"]), e.addDep(X[
								"default"]), e.addDep(J["default"])
						}
					}
			},
			356: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(357),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			357: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(358)),
					r = a(o(431));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return i(t, e), t.getName = function () {
						return "Column2D"
					}, t.prototype.getName = function () {
						return "Column2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this), this.config.friendlyName = "Column Chart", this.config.singleseries = !0, this.config
							.defaultDatasetType = "column", this.config.enablemousetracking = !0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = l
			},
			433: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(434),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			434: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(435)),
					r = a(o(443));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.defaultPlotShadow = 1, o.defaultZeroPlaneHighlighted = !1, o
					}
					return i(t, e), t.getName = function () {
						return "Column3D"
					}, t.prototype.getName = function () {
						return "Column3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.hasLegend = !1, t.singleseries = !0, t.friendlyName = "3D Column Chart", t.showplotborder = 0, t.enablemousetracking = !
							0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = l
			},
			435: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(358)),
					r = i(o(436)),
					a = i(o(440));

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.registerFactory("canvas", r["default"]), o.registerFactory("dataset", a["default"], ["vCanvas"]), o
					}
					return l(t, e), t.getName = function () {
						return "SSCartesian3D"
					}, t.prototype.getName = function () {
						return "SSCartesian3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.hasLegend = !1, t.showplotborder = 0, t.drawcrosslineontop = 0, t.showzeroplaneontop = 0
					}, t
				}(n["default"]);
				t["default"] = c
			},
			436: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = function (e) {
					var t = void 0;
					if ((0, a.componentFactory)(e, n["default"], "canvas", e.config.showVolumeChart ? 2 : 1), t = e.getChildren("canvas"))
						for (var o = 0, i = t.length; o < i; o++) t[o].configure(), (0, a.componentFactory)(t[o], r["default"], "axisRefVisualCartesian")
				};
				var n = i(o(437)),
					r = i(o(424)),
					a = o(125);

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}
			},
			437: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = c(o(363)),
					r = o(125),
					a = o(132),
					i = c(o(438)),
					l = c(o(439));

				function c(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function s(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var u = (0, a.getDep)("redraphael", "plugin"),
					f = r.preDefStr.ROUND,
					p = r.preDefStr.miterStr,
					d = Math.max,
					h = u,
					g = {
						chart2D: {
							bgColor: "bgColor",
							bgAlpha: "bgAlpha",
							bgAngle: "bgAngle",
							bgRatio: "bgRatio",
							canvasBgColor: "canvasBgColor",
							canvasBaseColor: "canvasBaseColor",
							divLineColor: "divLineColor",
							legendBgColor: "legendBgColor",
							legendBorderColor: "legendBorderColor",
							toolTipbgColor: "toolTipbgColor",
							toolTipBorderColor: "toolTipBorderColor",
							baseFontColor: "baseFontColor",
							anchorBgColor: "anchorBgColor"
						},
						chart3D: {
							bgColor: "bgColor3D",
							bgAlpha: "bgAlpha3D",
							bgAngle: "bgAngle3D",
							bgRatio: "bgRatio3D",
							canvasBgColor: "canvasBgColor3D",
							canvasBaseColor: "canvasBaseColor3D",
							divLineColor: "divLineColor3D",
							divLineAlpha: "divLineAlpha3D",
							legendBgColor: "legendBgColor3D",
							legendBorderColor: "legendBorderColor3D",
							toolTipbgColor: "toolTipbgColor3D",
							toolTipBorderColor: "toolTipBorderColor3D",
							baseFontColor: "baseFontColor3D",
							anchorBgColor: "anchorBgColor3D"
						}
					},
					b = function () {
						this.hide()
					},
					y = function () {
						this.hide(), this._.cubeside.hide(), this._.cubetop.hide()
					},
					m = function () {
						this.show(), this._.cubeside.show(), this._.cubetop.show()
					};
				(0, a.addDep)({
					name: "canvas3dAnimation",
					type: "animationRule",
					extension: i["default"]
				}), (0, l["default"])(u);
				var v = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return s(t, e), t.prototype.getName = function () {
						return "canvas"
					}, t.prototype.getType = function () {
						return "canvas"
					}, t.prototype.drawCanvas = function () {
						this.getFromEnv("chart").isBar ? this.drawCanvas3dBar() : this.drawCanvas3dColumn()
					}, t.prototype.configureAttributes = function () {
						e.prototype.configureAttributes.call(this), this.config.xDepth = 10, this.config.yDepth = 10
					}, t.prototype.drawCanvas3dColumn = function () {
						var e, t, o, n, a, i, l, c, s, f, p, d, h, v, _, C, w = this.getFromEnv("chart"),
							D = w.getFromEnv("dataSource"),
							O = this.config,
							S = w.config,
							P = O.canvasLeft,
							k = O.canvasTop,
							x = O.canvasWidth,
							M = O.canvasHeight,
							E = D.chart,
							N = this.getFromEnv("animationManager"),
							A = w.getFromEnv("color-manager"),
							j = this.getGraphicalElement("canvasBorderElement"),
							T = this.getGraphicalElement("canvasElement"),
							F = this.config,
							B = F.clip = {},
							I = this.getContainer("canvasGroup"),
							L = this.getGraphicalElement("canvasBg"),
							R = this.getGraphicalElement("canvas3DBase"),
							G = r.preDefStr.miterStr,
							V = Math.max,
							z = (r.preDefStr.ROUND, w.getChildContainer("plotGroup")),
							H = w.getChildContainer("datalabelsGroup"),
							W = this.getGraphicalElement("canvas3dbaseline"),
							Y = F.canvasBgColor,
							U = F.showCanvasBG = Boolean((0, r.pluckNumber)(E.showcanvasbg, 1)),
							X = S.canvasBgDepth,
							Z = S.showCanvasBase,
							J = S.canvasBaseDepth,
							q = F.canvasBaseColor3D = (0, r.pluck)(E.canvasbasecolor, A.getColor("canvasBaseColor3D")),
							$ = F.use3DLighting = (0, r.pluckNumber)(E.use3dlighting, 1),
							K = g.chart3D,
							Q = F.canvasBorderRadius = (0, r.pluckNumber)(E.plotborderradius, 0),
							ee = F.canvasBorderColor = (0, r.convertColor)((0, r.pluck)(E.canvasbordercolor, A.getColor(r.canvasBorderColorStr))),
							te = F.canBGAlpha = (0, r.pluck)(E.canvasbgalpha, A.getColor("canvasBgAlpha")),
							oe = F.canBGColor = (0, r.pluck)(E.canvasbgcolor, A.getColor(K.canvasBgColor)),
							ne = S.canvasBasePadding || 2;
						Y = F.canvasBgColor = $ ? {
								FCcolor: {
									color: (0, r.getDarkColor)(oe, 85) + r.COMMASTRING + (0, r.getLightColor)(oe, 55),
									alpha: te + r.COMMASTRING + te,
									ratio: r.BGRATIOSTRING,
									angle: (0, r.getAngle)(S.width - (S.marginLeft + S.marginRight), S.height - (S.marginTop + S.marginBottom), 1)
								}
							} : (0, r.convertColor)(oe, te), oe = oe.split(r.COMMASTRING)[0], te = te.split(r.COMMASTRING)[0], _ = F.xDepth, C = F.yDepth,
							i = {
								x: P - 0,
								y: k - 0,
								width: x + 0,
								height: M + 0,
								r: Q,
								"stroke-width": 0,
								stroke: ee,
								"stroke-linejoin": G
							}, e = N.setAnimation({
								el: j || "rect",
								attr: i,
								component: this,
								label: "canvas",
								container: I
							}), j || this.addGraphicalElement("canvasBorderElement", e), B["clip-canvas"] = [V(0, P - _), V(0, k), V(1, x + _), V(1, M + C)],
							B["clip-canvas-init"] = [V(0, P - _), V(0, k - C), 1, V(1, M + 2 * C)], h = B["clip-canvas"].slice(0), N.setAnimation({
								el: z,
								attr: {
									"clip-rect": h
								},
								component: this
							}), N.setAnimation({
								el: H,
								attr: {
									"clip-rect": h
								},
								component: this
							}), i = {
								x: P,
								y: k,
								width: x,
								height: M,
								r: Q,
								"stroke-width": 0,
								stroke: "none",
								fill: (0, r.toRaphaelColor)(Y)
							}, t = N.setAnimation({
								el: T || "rect",
								attr: i,
								component: this,
								label: "canvas",
								callback: U ? r.stubFN : b,
								container: I
							}), T || this.addGraphicalElement("canvasElement", t), a = ["M", P + x, k, "L", P + x + X, k + 1.2 * X, P + x + X, k + M - X,
								P + x, k + M, "Z"
							], o = N.setAnimation({
								el: L || "path",
								attr: {
									path: a,
									"stroke-width": 0,
									stroke: "none",
									fill: (0, r.toRaphaelColor)(Y)
								},
								component: this,
								label: "canvas",
								callback: U ? r.stubFN : b,
								container: I
							}), L || this.addGraphicalElement("canvasBg", o), U ? (o.show(), t.show()) : (o.hide(), t.hide()), l = P - _ - ne, c = k + M +
							C + ne, s = x, f = J, p = _ + ne, d = C + ne, n = N.setAnimation({
								el: R || "cubepath",
								component: this,
								index: 0,
								attr: {
									cubepath: [l, c, s, f, p, d],
									stroke: "none",
									"stroke-width": 0,
									fill: q.replace(r.dropHash, r.HASHSTRING),
									noGradient: !$
								},
								callback: Z ? r.stubFN : y,
								label: "canvas",
								container: I
							}), R || this.addGraphicalElement("canvas3DBase", n), v = N.setAnimation({
								el: W || "path",
								attr: {
									path: ["M", P, k + M, "H", x + P],
									stroke: u.tintshade(q.replace(r.dropHash, r.HASHSTRING), .05).rgba
								},
								component: this,
								callback: Z ? r.stubFN : b,
								label: "canvas",
								container: I
							}), W || this.addGraphicalElement("canvas3dbaseline", v), Z && (m.call(n), v.show())
					}, t.prototype.drawCanvas3dBar = function () {
						var e, t, o, n, a, i, l, c, s, u, v, _, C, w, D = this.getFromEnv("chart"),
							O = D.getFromEnv("dataSource"),
							S = D.config,
							P = S.canvasLeft,
							k = S.canvasTop,
							x = S.canvasWidth,
							M = S.canvasHeight,
							E = O.chart,
							N = D.getFromEnv("color-manager"),
							A = this.getGraphicalElement("canvasBorderElement"),
							j = this.getGraphicalElement("canvasElement"),
							T = this.config,
							F = T.clip = {},
							B = this.getContainer("canvasGroup"),
							I = this.getGraphicalElement("canvasBg"),
							L = this.getGraphicalElement("canvas3DBase"),
							R = D.getChildContainer("plotGroup"),
							G = D.getChildContainer("datalabelsGroup"),
							V = this.getFromEnv("animationManager"),
							z = this.getGraphicalElement("canvas3dbaseline"),
							H = T.canvasBgColor,
							W = T.showCanvasBG = Boolean((0, r.pluckNumber)(E.showcanvasbg, 1)),
							Y = S.canvasBgDepth,
							U = S.showCanvasBase,
							X = S.canvasBaseDepth,
							Z = T.canvasBaseColor3D = (0, r.pluck)(E.canvasbasecolor, N.getColor("canvasBaseColor3D")),
							J = T.use3DLighting = (0, r.pluckNumber)(E.use3dlighting, 1),
							q = g.chart3D,
							$ = T.canvasBorderRadius = (0, r.pluckNumber)(E.plotborderradius, 0),
							K = T.canvasBorderWidth = 0,
							Q = .5 * K,
							ee = T.canvasBorderColor = (0, r.convertColor)((0, r.pluck)(E.canvasbordercolor, N.getColor(r.canvasBorderColorStr))),
							te = T.canBGAlpha = (0, r.pluck)(E.canvasbgalpha, N.getColor("canvasBgAlpha")),
							oe = T.canBGColor = (0, r.pluck)(E.canvasbgcolor, N.getColor(q.canvasBgColor)),
							ne = T.xDepth,
							re = T.yDepth;
						H = T.canvasBgColor = J ? {
								FCcolor: {
									color: (0, r.getDarkColor)(oe, 85) + "," + (0, r.getLightColor)(oe, 55),
									alpha: te + "," + te,
									ratio: r.BGRATIOSTRING,
									angle: (0, r.getAngle)(S.width - (S.marginLeft + S.marginRight), S.height - (S.marginTop + S.marginBottom), 1)
								}
							} : (0, r.convertColor)(oe, te), oe = oe.split(",")[0], te = te.split(",")[0], ne = T.xDepth = 5, re = T.yDepth = 5, a = {
								x: P - Q,
								y: k - Q,
								width: x + K,
								height: M + K,
								r: $,
								"stroke-width": K,
								stroke: ee,
								"stroke-linejoin": K > 2 ? f : p
							}, e = V.setAnimation({
								el: A || "rect",
								attr: a,
								container: B,
								label: "canvas",
								component: this
							}), A || this.addGraphicalElement("canvasBorderElement", e), F["clip-canvas"] = [d(0, P - ne), d(0, k), d(1, x + ne), d(1, M +
								re)], F["clip-canvas-init"] = [d(0, P - ne), d(0, k - re), 1, d(1, M + 2 * re)], C = F["clip-canvas"].slice(0), V.setAnimation({
								el: R,
								attr: {
									"clip-rect": C
								},
								component: this
							}), V.setAnimation({
								el: G,
								attr: {
									"clip-rect": C
								},
								component: this
							}), a = {
								x: P,
								y: k,
								width: x,
								height: M,
								r: $,
								"stroke-width": 0,
								stroke: "none",
								fill: (0, r.toRaphaelColor)(H)
							}, t = V.setAnimation({
								el: j || "rect",
								attr: a,
								component: this,
								label: "canvas",
								container: B
							}), j || this.addGraphicalElement("canvasElement", t), i = ["M", P, k, "L", P + 1.2 * Y, k - Y, P + x - Y, k - Y, P + x, k,
								"Z"
							], o = V.setAnimation({
								el: I || "path",
								attr: {
									path: i,
									"stroke-width": 0,
									stroke: "none",
									fill: (0, r.toRaphaelColor)(H)
								},
								component: this,
								callback: W ? r.stubFN : b,
								label: "canvas",
								container: B
							}), I || this.addGraphicalElement("canvasBg", o), W ? (t.show(), o.show()) : (t.hide(), o.hide()), l = P - ne - X - 1, c = k +
							re + 1, s = X, u = M, v = ne + 1, _ = re + 1, n = V.setAnimation({
								el: L || "cubepath",
								attr: {
									cubepath: [l, c, s, u, v, _],
									stroke: "none",
									"stroke-width": 0,
									fill: Z.replace(r.dropHash, r.HASHSTRING),
									noGradient: !J
								},
								component: this,
								callback: U ? r.stubFN : y,
								label: "canvas",
								container: B
							}), L || this.addGraphicalElement("canvas3DBase", n), w = V.setAnimation({
								el: z || "path",
								attr: {
									path: ["M", P, k, "V", M + k],
									stroke: h.tintshade(Z.replace(r.dropHash, r.HASHSTRING), .05).rgba
								},
								component: this,
								callback: U ? r.stubFN : b,
								label: "canvas",
								container: B
							}), z || this.addGraphicalElement("canvas3dbaseline", w), U && (w.show(), m.call(n))
					}, t
				}(n["default"]);
				t["default"] = v
			},
			438: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				t["default"] = {
					"initial.canvas.canvas": {
						"canvas.appearing": [{
							initialAttr: {
								opacity: 0
							},
							finalAttr: {
								opacity: 1
							},
							slot: "initial"
						}]
					}
				}
			},
			439: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
					return typeof e
				} : function (e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				};
				t["default"] = function (e) {
					var t, o = Math.atan2;
					e.define && e.define([{
						name: "cubepath",
						cubepath: function () {
							var o, a, i, l, c = {
									"stroke-linejoin": "round",
									"shape-rendering": "precision",
									stroke: "none"
								},
								s = arguments,
								u = s.length - 1,
								f = s[u],
								p = function (e, o, a, i, l, c) {
									var s = this,
										u = s._.cubetop,
										f = s._.cubeside;
									return "object" === (void 0 === e ? "undefined" : n(e)) || e === t && o === t && a === t && i === t && l === t && c === t ?
										this : (e = (0, r.pluckNumber)(e, s.attrs.x, 0), o = (0, r.pluckNumber)(o, s.attrs.y, 0), a = (0, r.pluckNumber)(a, s.attrs
												.width, 0), i = (0, r.pluckNumber)(i, s.attrs.height, 0), l = (0, r.pluckNumber)(l, s.attrs.xDepth, 0), c = (0, r.pluckNumber)
											(c, s.attrs.yDepth, 0), s.attrs.x = e, s.attrs.y = o, s.attrs.width = a, s.attrs.height = i, s.attrs.xDepth = l, s.attrs
											.yDepth = c, s._attr("path", ["M", e + a, o, "l", 0, i, -a, 0, 0, -i, "z"]), u.attr("path", ["M", e, o, "l", 1, 1, a -
												1, 0, 0, -1, l, -c, -a, 0, "z"
											]), f.attr("path", ["M", e + a - 1, o + 1, "l", 0, i - 1, 1, 0, l, -c, 0, -i, -l, c]), this)
								};
							for (i in f && f.constructor === e.el.constructor ? s[u] = t : f = t, o = this.path(c, f), a = this.path(c, f), (l = this.path(
									c, f))._.cubetop = o.follow(l, t, "before"), l._.cubeside = a.follow(l, t, "before"), e.fn.cubepath.ca) l.ca[i] = e.fn.cubepath
								.ca[i];
							return l._attr = l.attr, l._shadow = l.shadow, l.attr = function (e, o) {
								var r = "object" === (void 0 === e ? "undefined" : n(e));
								return r && (e.cubepath ? o = [].concat(e.cubepath) : ((o = []).push(e.x), o.push(e.y), o.push(e.width), o.push(e.height),
										o.push(e.xDepth), o.push(e.yDepth)), e.noGradient !== t && (l.attrs.noGradient = e.noGradient)), e === t && o === t ?
									this.attrs : o === t ? this.attrs[e] : (r ? p.apply(this, o) : "drop-shadow" === e && function (e, t, o, n) {
										var r = this,
											a = r._.cubetop,
											i = r._.cubeside;
										return r.dropshadow && (a.dropshadow(e, -t, o, n), i.dropshadow(e, -t, o, n)), !1
									}.apply(this, [].concat(o)), l._attr(e), this)
							}, l.appendTo = function (e) {
								e.appendChild(l._.cubetop), e.appendChild(l._.cubeside), e.appendChild(l)
							}, "object" === n(s[0]) ? l.attr(s[0]) : p.apply(l, [s[0], s[1], s[2], s[3], s[4], s[5]])
						},
						fn: {
							_getBBox2: function () {
								var e = this._.cubeside.getBBox(),
									t = this._.cubetop.getBBox(),
									o = this.getBBox();
								return {
									x: o.x + t.height,
									y: o.y - e.width,
									width: o.width,
									height: o.height
								}
							},
							shadow: function () {
								return this._.cubeside.shadow.apply(this._.cubeside, arguments), this._.cubetop.shadow.apply(this._.cubetop, arguments),
									this._shadow.apply(this, arguments)
							}
						},
						ca: {
							"stroke-linejoin": function () {
								return {
									"stroke-linejoin": "round"
								}
							},
							fill: function (n, r) {
								var a, i = this,
									l = i._.cubetop,
									c = i._.cubeside,
									s = i._attr("cubepath") || [0, 0, 0, 0, 0, 0],
									u = s[2],
									f = s[4],
									p = s[5];
								return r === t && (r = i._attr("noGradient")), n = e.color(n), r ? (i._attr("fill", n), l.attr("fill", e.tintshade(n, -.78)
									.rgba), c.attr("fill", e.tintshade(n, -.65).rgba)) : (a = "opacity" in n ? "rgba(" + [n.r, n.g, n.b, n.opacity] + ")" :
									"rgb(" + [n.r, n.g, n.b] + ")", i._attr("fill", [270, e.tintshade(a, .55).rgba, e.tintshade(a, -.65).rgba].join("-")), c
									.attr("fill", [270, e.tintshade(a, -.75).rgba, e.tintshade(a, -.35).rgba].join("-")), l.attr("fill", [45 + e.deg(o(p, f +
										u)), e.tintshade(a, -.78).rgba, e.tintshade(a, .22).rgba].join("-"))), !1
							}
						}
					}])
				};
				var r = o(125)
			},
			440: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = function (e) {
					var t, o, n, a = e.getChildren().canvas[0].getChildren("vCanvas")[0],
						c = e.getFromEnv("dataSource"),
						s = c.dataset,
						u = e.config.defaultDatasetType || "",
						f = c.data || s && s[0].data;
					o = l(f), f && 0 !== f.length ? ((0, r.componentFactory)(a, i["default"], "datasetGroup_" + u), n = a.getChildren("datasetGroup_" +
						u)[0], t = e.getDSdef(), (0, r.datasetFactory)(n, t, "dataset", 1, [o])) : e.setChartMessage()
				};
				var n, r = o(125),
					a = o(441),
					i = (n = a) && n.__esModule ? n : {
						"default": n
					};
				var l = function (e) {
					var t = [];
					return (0, r.fcEach)(e, function (e) {
						"true" !== e.vline && !0 !== e.vline && 1 !== e.vline && "1" !== e.vline && t.push(e)
					}), {
						data: t
					}
				}
			},
			441: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(138),
					a = o(132),
					i = o(442),
					l = (n = i) && n.__esModule ? n : {
						"default": n
					};

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}(0, a.addDep)({
					name: "column3dManagerAnimation",
					type: "animationRule",
					extension: l["default"]
				});
				var s = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.setState("visible", !0), o
					}
					return c(t, e), t.prototype.getType = function () {
						return "group"
					}, t.prototype.getName = function () {
						return "column3d"
					}, t.prototype.getCanvasPadding = function () {
						var e, t, o = {
							paddingLeft: 0,
							paddingRight: 0,
							paddingTop: 0,
							paddingBottom: 0
						};
						return this._mapChildren(function (n) {
							for (t in e = n.getCanvasPadding && n.getCanvasPadding() || {}) e.hasOwnProperty(t) && (o[t] = Math.max(e[t], o[t]))
						}), o
					}, t.prototype.createContainer = function () {
						var e = this.getFromEnv("animationManager"),
							t = void 0,
							o = void 0,
							n = this.getLinkedParent().getChildContainer();
						for (t in n) o = n[t], !this.getChildContainer(t) && this.addChildContainer(t, e.setAnimation({
							el: "group",
							attr: {
								name: "manager" + t
							},
							container: o,
							component: this,
							label: "group"
						}))
					}, t.prototype.draw3DContainer = function () {
						var e, t = this.getFromEnv("animationManager"),
							o = this.getChildContainer("plotGroup3d"),
							n = this.getFromEnv("xAxis").getTicksLen(),
							r = o && o.negative,
							a = o && o.positive,
							i = this.getLinkedParent().getChildContainer().columnVcanvasGroup;
						for (!this.getChildContainer("plotGroup3d") && this.addChildContainer("plotGroup3d", t.setAnimation({
								el: "group",
								attr: {
									name: "3d-plots"
								},
								container: i,
								component: this,
								label: "group"
							})), o = this.getChildContainer("plotGroup3d"), this.addToEnv("plotGroup3d", o), r = o.negative = t.setAnimation({
								el: r || "group",
								attr: {
									name: "negative-values"
								},
								container: o,
								component: this,
								label: "group"
							}), a = o.positive = t.setAnimation({
								el: a || "group",
								attr: {
									name: "positive-values"
								},
								container: o,
								component: this,
								label: "group"
							}), o.zeroPlane = t.setAnimation({
								el: o.zeroPlane || "group",
								attr: {
									name: "zero-plane"
								},
								container: o,
								component: this,
								label: "group"
							}).insertBefore(o.positive), (o.negativeGroupArray = o.negativeGroupArray = r.data("categoryplots")) || (r.data(
								"categoryplots", new Array(n)), o.negativeGroupArray = r.data("categoryplots")), (o.positiveGroupAarray = o.positiveGroupAarray =
								a.data("categoryplots")) || (a.data("categoryplots", new Array(n)), o.positiveGroupAarray = a.data("categoryplots")), e = 0; e <
							n; e++) o.negativeGroupArray[e] = t.setAnimation({
							el: o.negativeGroupArray[e] || "group",
							attr: {
								name: "negative-group-" + e
							},
							container: r,
							component: this,
							label: "group"
						}), o.positiveGroupAarray[e] = t.setAnimation({
							el: o.positiveGroupAarray[e] || "group",
							attr: {
								name: "positive-group-" + e
							},
							container: a,
							component: this,
							label: "group"
						})
					}, t.prototype.drawZeroPlane = function () {
						var e, t, o = this.getFromEnv("chart"),
							n = o.getFromEnv("animationManager"),
							r = o.isBar,
							a = o.config,
							i = a.use3dlighting,
							l = this.getChildContainer("plotGroup3d"),
							c = this.getFromEnv("yAxis"),
							s = c.getLimit(),
							u = s.max,
							f = s.min,
							p = this.getGraphicalElement("zeroplane"),
							d = {},
							h = a.xDepth,
							g = a.yDepth,
							b = c.getPixel(c.getAxisBase());
						f < 0 && u >= 0 ? (!this.graphics && (this.graphics = {}), t = l.zeroPlane, d.fill = a.zeroPlaneColor, d.noGradient = !i, d.stroke =
							a.zeroPlaneBorderColor || "none", d["stroke-width"] = a.zeroPlaneShowBorder ? 1 : 0, d.x = r ? b - h : a.canvasLeft - h, d.y =
							r ? a.canvasTop + g : b + g, d.width = r ? 1 : a.canvasWidth, d.height = r ? a.canvasHeight : 1, d.xDepth = h, d.yDepth = g,
							p && (p.show(), p._.cubetop.show(), p._.cubeside.show()), e = {
								el: p || "cubepath",
								attr: d,
								container: t,
								component: this,
								label: "zeroPlane"
							}) : p && (e = {
							el: p,
							attr: r ? {
								x: b - g
							} : {
								y: b + g
							},
							component: this,
							doNotRemove: !0,
							callback: function () {
								p.hide(), p._.cubetop.hide(), p._.cubeside.hide()
							},
							container: l,
							label: "zeroPlane"
						}), e && this.addGraphicalElement("zeroplane", n.setAnimation(e))
					}, t.prototype.draw = function () {
						this.createContainer(), this.draw3DContainer(), this.drawZeroPlane()
					}, t.prototype.childChanged = function () {
						var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
							t = this.config,
							o = this.getLinkedParent(),
							n = void 0,
							r = 0,
							a = this.getState("visible"),
							i = {},
							l = void 0;
						this._mapChildren(function (e) {
								e.getState("visible") && r++
							}), this.setState("visible", !!r), a !== !!r && (l = !0), !1 !== e.dataLimitChanged && ((n = this.getDataLimits()).min === t.range
								.min && n.max === t.range.max || (t.range.min = n.min, t.range.max = n.max, i.dataLimitChanged = !0, l = !0)), l ? o.childChanged &&
							o.childChanged(i) : this.asyncDraw()
					}, t.prototype.getAxisValuePadding = function () {
						var e = {},
							t = -Infinity,
							o = -Infinity;
						return this._mapChildren(function (n) {
							n.getState("removed") || (e = n.getAxisValuePadding && n.getAxisValuePadding() || {}, t = Math.max(t, e.left || -Infinity),
								o = Math.max(o, e.right || -Infinity))
						}), t === -Infinity && (t = 0), o === -Infinity && (o = 0), this.config.padding || (this.config.padding = {}, this.config.padding
							.left = t, this.config.padding.right = o), {
							left: t,
							right: o
						}
					}, t.prototype.getDataLimits = function (e) {
						var t = +Infinity,
							o = -Infinity,
							n = void 0,
							r = 0,
							a = function (e) {
								o = Math.max(o, e.max), t = Math.min(t, e.min)
							};
						return this._mapChildren(function (t) {
							t.getState("removed") || (!1 !== t.getState("visible") ? (r++, n = t.getDataLimits(e), a(n)) : e && (n = t.getDataLimits(e),
								a(n)))
						}), r ? this.setState("visible", !0) : this.setState("visible", !1), this.config.range || (this.config.range = {}, this.config
							.range.min = this.config.dataMin, this.config.range.max = this.config.dataMax), {
							max: o,
							min: t
						}
					}, t.prototype.isVisible = function () {
						return !this.isNotVisible
					}, t
				}(r.ComponentInterface);
				t["default"] = s
			},
			442: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = {
					"initial.group.column3d": function () {
						return {
							"zeroPlane.appearing": function () {
								return [{
									initialAttr: {
										opacity: 0
									},
									finalAttr: {
										opacity: 1
									},
									slot: "axis"
								}]
							}
						}
					}
				}
			},
			443: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = c(o(431)),
					r = o(125),
					a = o(444),
					i = o(132),
					l = c(o(445));

				function c(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function s(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}(0, i.addDep)({
					name: "column3dAnimation",
					type: "animationRule",
					extension: l["default"]
				});
				var u = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.setContainerVisibility = r.stubFN, o
					}
					return s(t, e), t.prototype.getType = function () {
						return "dataset"
					}, t.prototype.getName = function () {
						return "column3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this), this.config.use3dlighting = r.UNDEF
					}, t.prototype.createContainer = function () {
						var e = this.getLinkedParent(),
							t = this.getFromEnv("paper");
						!this.getContainer("labelGroup") && this.addContainer("labelGroup", function (e, t, o) {
							return t.group(e, o)
						}("label-group", t, e.getChildContainer("vcanvasLabelGroup")).attr("class", "fusioncharts-datalabels")).attr("opacity", 1)
					}, t.prototype._getHoveredPlot = function (e, t) {
						var o, n, r = this.getFromEnv("chart").isBar;
						return o = this.getFromEnv("xAxis").getValue(r ? t : e), (n = Math.round(o)) - o > 0 ? a._checkPointerOverColumn.call(this, n,
								e, t) || a._checkPointerOverColumn.call(this, n - 1, e, t) : a._checkPointerOverColumn.call(this, n + 1, e, t) || a._checkPointerOverColumn
							.call(this, n, e, t)
					}, t
				}(n["default"]);
				t["default"] = u
			},
			444: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = Math.round;
				t._checkPointerOverColumn = function (e, t, o) {
					var r, a, i, l, c, s, u, f, p, d = this.getFromEnv("chart").config,
						h = d.plotborderthickness,
						g = d.showplotborder,
						b = this.components.data,
						y = b[e];
					if (y) return r = y.config.setValue, c = (c = (h = g ? h : 0) / 2) % 2 == 0 ? c + 1 : n(c), null !== r && (s = y._xPos - 10, f =
						y._width + 10, u = y._yPos, p = y._height + 10, i = o - u + c, l = !!(l = !!(l = (a = t - s + c) >= 0 && a <= f + h && i >= 0 &&
							i <= p + h) && t + o - (s + u) - 10 > 0) && t + o - (s + u + f + p) + 10 < 0) ? {
						pointIndex: e,
						hovered: l,
						pointObj: b[e]
					} : void 0
				}
			},
			445: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(432),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = {
					"initial.dataset.column3D": a["default"]["initial.dataset.column"]
				}
			},
			446: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(447),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			447: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(358)),
					r = i(o(448)),
					a = o(125);

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = a.preDefStr.SEVENTYSTRING,
					s = function (e) {
						function t() {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t);
							var o = function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.call(this));
							return o.defaultPlotShadow = 1, o.axisPaddingLeft = 0, o.axisPaddingRight = 0, o
						}
						return l(t, e), t.getName = function () {
							return "Line"
						}, t.prototype.getName = function () {
							return "Line"
						}, t.prototype.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Line Chart", t.singleseries = !0, t.defaultDatasetType = "line", t.anchorborderthickness = 1, t.anchorimageurl =
								void 0, t.anchorimagepadding = 1, t.anchorsides = 1, t.anchoralpha = void 0, t.anchorbgalpha = a.HUNDREDSTRING, t.anchorimagealpha =
								a.HUNDREDSTRING, t.anchorimagescale = 100, t.anchorstartangle = 90, t.anchorshadow = 0, t.anchorbgcolor = void 0, t.anchorbordercolor =
								void 0, t.anchorradius = 3, t.showvalues = 1, t.plotfillalpha = c, t.linedashlen = 5, t.linedashgap = 4, t.linedashed = void 0,
								t.linealpha = a.HUNDREDSTRING, t.linethickness = 2, t.drawfullareaborder = 1, t.connectnulldata = 0, t.zeroplanethickness = 1,
								t.enablemousetracking = !0, t.zeroplanealpha = 40, t.showzeroplaneontop = 0, t.defaultcrosslinethickness = 1
						}, t.prototype.getDSdef = function () {
							return r["default"]
						}, t
					}(n["default"]);
				t["default"] = s
			},
			452: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(453),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			453: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(358)),
					r = i(o(449)),
					a = o(125);

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = a.preDefStr.SEVENTYSTRING,
					s = function (e) {
						function t() {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t);
							var o = function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.call(this));
							return o.defaultPlotShadow = 0, o
						}
						return l(t, e), t.getName = function () {
							return "Area2D"
						}, t.prototype.getName = function () {
							return "Area2D"
						}, t.prototype.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Area Chart", t.singleseries = !0, t.defaultDatasetType = "area", t.anchorborderthickness = 1, t.anchorimageurl =
								void 0, t.anchorimagepadding = 1, t.anchorsides = 1, t.anchoralpha = void 0, t.anchorbgalpha = a.HUNDREDSTRING, t.anchorimagealpha =
								a.HUNDREDSTRING, t.anchorimagescale = 100, t.anchorstartangle = 90, t.anchorshadow = 0, t.anchorbgcolor = void 0, t.anchorbordercolor =
								void 0, t.anchorradius = 3, t.showvalues = 1, t.plotfillalpha = c, t.linedashlen = 5, t.linedashgap = 4, t.linedashed = void 0,
								t.linealpha = a.HUNDREDSTRING, t.linethickness = 2, t.drawfullareaborder = 1, t.connectnulldata = 0, t.enablemousetracking = !
								0, t.defaultcrosslinethickness = 1
						}, t.prototype.getDSdef = function () {
							return r["default"]
						}, t
					}(n["default"]);
				t["default"] = s
			},
			454: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(455),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			455: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(456)),
					r = a(o(466));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.isBar = !0, o
					}
					return i(t, e), t.getName = function () {
						return "Bar2D"
					}, t.prototype.getType = function () {
						return "chartAPI"
					}, t.prototype.getName = function () {
						return "Bar2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this), this.config.friendlyName = "Bar Chart", this.config.singleseries = !0, this.config.defaultDatasetType =
							"bar2d", this.config.enablemousetracking = !0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {}, t
				}(n["default"]);
				t["default"] = l
			},
			456: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(358),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					},
					i = o(457);

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return l(t, e), t.prototype.getName = function () {
						return "SSBarCartesian"
					}, t.getName = function () {
						return "SSBarCartesian"
					}, t.prototype._feedAxesRawData = function () {
						return i.__feedAxesRawData.call(this)
					}, t.prototype._spaceManager = function () {
						i.__spaceManager.call(this)
					}, t.prototype._postSpaceManagement = function () {
						i.__postSpaceManagement.call(this)
					}, t
				}(a["default"]);
				t["default"] = c
			},
			468: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(469),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			469: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(470)),
					r = a(o(471));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.defaultPlotShadow = 1, o.fireGroupEvent = !0, o.isBar = !0, o.defaultZeroPlaneHighlighted = !1, o
					}
					return i(t, e), t.getName = function () {
						return "Bar3D"
					}, t.prototype.getName = function () {
						return "Bar3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.singleseries = !0, t.friendlyName = "3D Bar Chart", t.defaultDatasetType = "bar3d", t.showplotborder = 0, t.enablemousetracking = !
							0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = l
			},
			470: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(435),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					},
					i = o(457);

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.__feedAxesRawData = i.__feedAxesRawData, o.__spaceManager = i.__spaceManager, o.__postSpaceManagement = i.__postSpaceManagement,
							o
					}
					return l(t, e), t.getName = function () {
						return "SSBarCartesian3D"
					}, t.prototype.getName = function () {
						return "SSBarCartesian3D"
					}, t.prototype._feedAxesRawData = function () {
						return i.__feedAxesRawData.call(this)
					}, t.prototype._spaceManager = function () {
						i.__spaceManager.call(this)
					}, t.prototype._postSpaceManagement = function () {
						i.__postSpaceManagement.call(this)
					}, t
				}(a["default"]);
				t["default"] = c
			},
			471: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = l(o(443)),
					r = o(466),
					a = o(132),
					i = l(o(472));

				function l(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}(0, a.addDep)({
					name: "bar3DAnimation",
					type: "animationRule",
					extension: i["default"]
				});
				var s = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return c(t, e), t.prototype.getType = function () {
						return "dataset"
					}, t.prototype.getName = function () {
						return "bar3D"
					}, t.prototype._checkPointerOverColumn = function (e, t, o) {
						var n, r, a, i, l, c, s, u, f = this.getFromEnv("chart").config,
							p = f.plotborderthickness,
							d = f.showplotborder,
							h = this.components.data,
							g = h[e];
						if (g) return n = g.config.setValue, p = d ? p : 0, null !== n && (c = g._yPos, u = g._height + 5, l = g._xPos - 5, s = g._width +
							5, a = o - c, i = !!(i = !!(i = (r = t - l) >= 0 && r <= s + p && a >= 0 && a <= u + p) && t + o - (l + c) - 5 > 0) && t + o -
							(l + c + s + u) + 5 < 0) ? {
							pointIndex: e,
							hovered: i,
							pointObj: h[e]
						} : void 0
					}, t.prototype._getHoveredPlot = function (e, t) {
						var o, n, r = this.getFromEnv("chart").isBar;
						return o = this.getFromEnv("xAxis").getValue(r ? t : e), (n = Math.round(o)) - o > 0 ? this._checkPointerOverColumn(n, e, t) ||
							this._checkPointerOverColumn(n - 1, e, t) : this._checkPointerOverColumn(n + 1, e, t) || this._checkPointerOverColumn(n, e, t)
					}, t.prototype.drawLabel = function () {
						r.drawLabel.call(this)
					}, t
				}(n["default"]);
				t["default"] = s
			},
			472: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(467),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = {
					"initial.dataset.bar3D": a["default"]["initial.dataset.bar2D"]
				}
			},
			473: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(474),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			474: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = d(o(475)),
					r = d(o(361)),
					a = o(125),
					i = d(o(365)),
					l = d(o(367)),
					c = d(o(369)),
					s = d(o(477)),
					u = d(o(461)),
					f = o(478),
					p = o(136);

				function d(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function h(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var g = Math,
					b = g.min,
					y = g.max,
					m = g.abs,
					v = g.PI,
					_ = g.round,
					C = v / 180,
					w = 180 / v,
					D = 0,
					O = function (e, t, o) {
						var n, r, a = !!o,
							i = void 0,
							l = void 0;
						return e ? ((r = (n = e.components && e.components.data || [])[t = e.config.reversePlotOrder ? n.length - t - 1 : t]) && (i = r.config,
							l = a !== r.config.sliced || void 0 === o ? e.plotGraphicClick.call(r.graphics.element) : i.sliced), l) : l
					},
					S = function (e) {
						function t() {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t);
							var o = function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.call(this));
							return o.defaultSeriesType = "pie", o.defaultPlotShadow = 1, o.reverseLegend = 1, o.defaultPaletteOptions = undefined, o.sliceOnLegendClick = !
								0, o.dontShowLegendByDefault = !0, o.defaultZeroPlaneHighlighted = !1, o.hasCanvas = !0, o.eiMethods = {
									isPlotItemSliced: function (e) {
										var t, o, n = this.apiInstance,
											r = n && n.getDatasets();
										return r && (r = r[0]) && (t = r.components.data) && t[e] && (o = t[e].config) && o.sliced
									},
									addData: function () {
										var e = this.apiInstance,
											t = e && e.getDatasets();
										return t && (t = t[0]) && t.addData.apply(t, arguments)
									},
									removeData: function () {
										var e = this.apiInstance,
											t = e && e.getDatasets();
										return t && (t = t[0]) && t.removeData.apply(t, arguments)
									},
									updateData: function () {
										var e = this.apiInstance,
											t = e && e.getDatasets();
										return t && (t = t[0]) && t.updateData.apply(t, arguments)
									},
									slicePlotItem: function (e, t, o) {
										var n = this.apiInstance;
										if (!o) return O(n.getDatasets()[0], e, t);
										n.addJob("eiMethods-slice-plot" + D++, function () {
											var r = O(n.getDatasets()[0], e, t);
											return "function" == typeof o && o(r)
										}, p.priorityList.postRender)
									},
									startingAngle: function (e, t, o) {
										var n, r = this.apiInstance;
										if (!o) return r._startingAngle(e, t);
										r.addJob("eiMethods-start-angle" + D++, function () {
											n = r._startingAngle(e, t), "function" == typeof o && o(n)
										}, p.priorityList.postRender)
									}
								}, o.registerFactory("dataset", s["default"], ["vCanvas", "legend"]), o.registerFactory("legend", u["default"]), o
						}
						return h(t, e), t.getName = function () {
							return "Pie2D"
						}, t.prototype.getName = function () {
							return "Pie2D"
						}, t.prototype.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.alignCaptionWithCanvas = 0, t.formatnumberscale = 1, t.isSingleSeries = !0, t.friendlyName = "Pie Chart", t.defaultDatasetType =
								"Pie2D", t.plotborderthickness = 1, t.decimals = 2, t.alphaanimation = 0, t.singletonPlaceValue = !0, t.usedataplotcolorforlabels =
								0, t.enableslicing = a.ONESTRING, t.skipCanvasDrawing = !0
						}, t.prototype.parseChartAttr = function (t) {
							e.prototype.parseChartAttr.call(this, t);
							var o = this.getFromEnv("chart-attrib");
							this.config.showLegend = (0, a.pluckNumber)(o.showlegend, 0)
						}, t.prototype.configureAttributes = function (e) {
							var t = this.config;
							this.parseChartAttr(e), this.createComponent(e), this.config.skipConfigureIteration.axis = !0, this.configureChildren(), this._createToolBox(),
								this.getFromEnv("toolTipController").setStyle({
									backgroundColor: a.hasSVG ? (0, a.convertColor)(t.tooltipbgcolor || "FFF", t.tooltipbgalpha || 100) : (t.tooltipbgcolor ||
										"FFF").replace(/\s+/g, "").replace(/^#?([a-f0-9]+)/gi, "#$1"),
									color: (t.tooltipcolor || t.basefontcolor || "545454").replace(/^#?([a-f0-9]+)/gi, "#$1"),
									borderColor: a.hasSVG ? (0, a.convertColor)(t.tooltipbordercolor || "666", t.tooltipborderalpha || 100) : (t.tooltipbordercolor ||
										"666").replace(/\s+/g, "").replace(/^#?([a-f0-9]+)/gi, "#$1"),
									borderWidth: (0, a.pluckNumber)(t.tooltipborderthickness, 1) + "px",
									showToolTipShadow: (0, a.pluckNumber)(t.showtooltipshadow || 0),
									borderRadius: (0, a.pluckNumber)(t.tooltipborderradius, 0),
									fontSize: (0, a.pluckNumber)(t.basefontsize, 10) + "px",
									fontFamily: t.basefont || this.getFromEnv("style").inCanfontFamily,
									padding: (0, a.pluckNumber)(t.tooltippadding || 3) + "px"
								})
						}, t.prototype._createLayers = function () {
							e.prototype._createLayers.call(this);
							var t = this.getFromEnv("animationManager");
							!this.getChildContainer("legendGroup") && this.addChildContainer("legendGroup", t.setAnimation({
								el: "group",
								attr: {
									name: "legend"
								},
								component: this,
								container: this.getContainer("parentgroup"),
								label: "group"
							}))
						}, t.prototype.createComponent = function () {
							var e = void 0;
							e = this.config.skipConfigureIteration = {}, this.createBaseComponent(), this.getFromEnv("animationManager").setAnimationState(
									this._firstConfigure ? "initial" : "update"), (0, a.componentFactory)(this, i["default"], "caption"), e.caption = !0, (0, a.componentFactory)
								(this, l["default"], "subCaption"), e.subCaption = !0, (0, a.componentFactory)(this, c["default"], "background"), e.background = !
								0, e.canvas = !0, this._createConfigurableComponents && this._createConfigurableComponents(), this.config.realtimeEnabled &&
								this._realTimeConfigure && this._realTimeConfigure()
						}, t.prototype._postSpaceManagement = function () {
							this.config.showLegend && this.getChildren("legend") && this.getChildren("legend")[0].postSpaceManager(), this.allocateDimensionOfChartMenuBar()
						}, t.prototype._checkInvalidSpecificData = function () {
							var e, t, o, n = 0,
								r = 0,
								a = this.getFromEnv("dataSource").data;
							if (!a) return !0;
							for (t = a.length || 0, e = 0; e < t; e++) o = Number(a[e].value), n += isNaN(o) || 0 !== o ? 0 : 1, r += isNaN(o) ? 1 : 0;
							return n + r >= t
						}, t.prototype._spaceManager = function () {
							var e, t, o, n, r = this.config,
								i = this.getChildren("dataset")[0],
								l = i.components.data,
								c = i.config,
								s = this.getFromEnv("legend"),
								u = this.getFromEnv("color-manager"),
								f = this.getFromEnv("smartLabel"),
								p = [],
								d = c.dataLabelCounter,
								h = 0,
								g = this.getFromEnv("dataSource").chart,
								v = (0, a.pluckNumber)(g.managelabeloverflow, 0),
								_ = (0, a.pluckNumber)(g.slicingdistance),
								C = c.preSliced || r.allPlotSliceEnabled !== a.ZEROSTRING || g.showlegend === a.ONESTRING && g.interactivelegend !== a.ZEROSTRING ?
								m((0, a.pluckNumber)(_, 20)) : 0,
								w = (0, a.pluckNumber)(g.pieradius, 0),
								D = (0, a.pluckNumber)(g.enablesmartlabels, g.enablesmartlabel, 1),
								O = D ? (0, a.pluckNumber)(g.skipoverlaplabels, g.skipoverlaplabel, 1) : 0,
								S = (0, a.pluckNumber)(g.issmartlineslanted, 1),
								P = d ? (0, a.pluckNumber)(g.labeldistance, g.smartlabelclearance, 5) : C,
								k = P,
								x = r.width,
								M = r.height,
								E = (this._manageActionBarSpace(.225 * M) || {}).bottom,
								N = x - (r.marginRight + r.marginLeft),
								A = M - (r.marginTop + r.marginBottom) - (E ? E + r.marginBottom : 0),
								j = b(A, N),
								T = (0, a.pluck)(g.smartlinecolor, u.getColor("plotFillColor")),
								F = (0, a.pluckNumber)(g.smartlinealpha, 100),
								B = (0, a.pluckNumber)(g.smartlinethickness, .7),
								I = c.dataLabelOptions = i._parseDataLabelOptions(),
								L = I.style,
								R = d ? (0, a.pluckNumber)(parseInt(L.lineHeight, 10), 12) : 0,
								G = 0 === w ? .15 * j : w,
								V = 2 * G,
								z = {
									bottom: 0,
									right: 0
								},
								H = c.pieYScale,
								W = c.pieSliceDepth;
							if (I.connectorWidth = B, I.connectorPadding = (0, a.pluckNumber)(g.connectorpadding, 5), I.connectorColor = (0, a.convertColor)
								(T, F), d && (k = P + C), n = V + 2 * (R + k), A -= ((e = this._manageChartMenuBar(n < A ? A - n : A / 2)).top || 0) + (e.bottom ||
									0), c.showLegend && (this.config.hasLegend = !0, (0, a.pluck)(g.legendposition, a.POSITION_BOTTOM).toLowerCase() !== a.POSITION_RIGHT ?
									A -= (z = s._manageLegendPosition(A / 2)).bottom : N -= (z = s._manageLegendPosition(A / 2)).right), this._allocateSpace(z),
								f.useEllipsesOnOverflow(r.useEllipsesWhenOverflow), 1 !== d)
								for (; d--;) f.setStyle(l[d].config.style || r.dataLabelStyle), p[d] = t = f.getOriSize(l[d].config.displayValue), h = y(h, t.width);
							0 === w ? G = this._stubRadius(N, h, A, k, C, R, G, P) : (c.slicingDistance = C, c.pieMinRadius = G, I.distance = P), o = A - 2 *
								(G * H + R), c.managedPieSliceDepth = W > o ? W - o : c.pieSliceDepth, I.isSmartLineSlanted = S, I.enableSmartLabels = D, I.skipOverlapLabels =
								O, I.manageLabelOverflow = v
						}, t.prototype._stubRadius = function (e, t, o, n, r, i, l, c) {
							var s, u = this.getChildren("dataset")[0],
								f = u.config,
								p = this.getFromEnv("dataSource").chart,
								d = (0, a.pluckNumber)(p.slicingdistance),
								h = f.dataLabelOptions || (f.dataLabelOptions = u._parseDataLabelOptions());
							return (s = b(e / 2 - t - r, o / 2 - i) - n) >= l ? l = s : d || (r = y(b(n - (l - s), r), 10)), f.slicingDistance = r, f.pieMinRadius =
								l, h.distance = c, l
						}, t.prototype._startingAngle = function (e, t) {
							var o, n = this.getChildren("dataset")[0],
								r = n.config,
								a = (o = r.startAngle) * -w + (-1 * o < 0 ? 360 : 0);
							return isNaN(e) || r.singletonCase || r.isRotating || (e += t ? a : 0, r.startAngle = -e * C, n._rotate(e), a = e), _(100 * ((a %=
								360) + (a < 0 ? 360 : 0))) / 100
						}, t.prototype._manageLegendSpace = function () {
							f._manageLegendSpace.call(this)
						}, t.prototype.getDSdef = function () {
							return n["default"]
						}, t
					}(r["default"]);
				t["default"] = S
			},
			477: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = function (e) {
					var t, o, a = e.getFromEnv("dataSource"),
						i = a.dataset,
						l = a.data || i && i[0].data;
					o = r(l), l && 0 !== l.length ? (t = e.getDSdef(), (0, n.datasetFactory)(e, t, "dataset", 1, [o])) : e.setChartMessage()
				};
				var n = o(125),
					r = function (e) {
						var t = [];
						return (0, n.fcEach)(e, function (e) {
							"true" !== e.vline && !0 !== e.vline && 1 !== e.vline && "1" !== e.vline && t.push(e)
						}), {
							catData: [],
							data: t
						}
					}
			},
			479: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(480),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			480: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(474)),
					r = i(o(481)),
					a = o(125);

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = Math,
					s = c.round,
					u = c.min,
					f = c.max,
					p = c.PI,
					d = function (e) {
						function t() {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t);
							var o = function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.call(this));
							return o.defaultPlotShadow = 0, o
						}
						return l(t, e), t.getName = function () {
							return "Pie3D"
						}, t.prototype.getName = function () {
							return "Pie3D"
						}, t.prototype.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.is3D = !0, t.friendlyName = "3D Pie Chart", t.defaultDatasetType = "Pie3D", t.plotborderthickness = .1, t.alphaanimation = 1
						}, t.prototype.animate = function () {
							var e, t, o, n, r, a, i, l, c = this.components.dataset[0],
								s = c.config,
								u = c.components.data,
								f = u.length,
								d = s.alphaAnimation,
								h = this.get("config", "animationObj"),
								g = h.duration || 0,
								b = h.dummyObj,
								y = h.animObj,
								m = h.animType;
							if (!d)
								for (e = 0; e < f; e++) o = (t = u[e]).graphics, r = t.config.shapeArgs, a = 2 * p, (n = o.element) && (n.attr({
									sAngle: a,
									eAngle: a
								}), i = r.sAngle, l = r.eAngle, (void 0).animateWith(b, y, {
									cx: i - a,
									cy: l - a
								}, g, m))
						}, t.prototype._stubRadius = function (e, t, o, n, r, i, l) {
							var c, s = this.getChildren("dataset")[0],
								p = s.config,
								d = s.config,
								h = (0, a.pluckNumber)(d.slicingdistance),
								g = p.dataLabelOptions || (p.dataLabelOptions = s._parseDataLabelOptions()),
								b = p.pieYScale,
								y = p.pieSliceDepth;
							return (c = u(e / 2 - t - r, ((o -= y) / 2 - i) / b) - n) >= l ? l = c : h || (r = n = f(u(n - (l - c), r), 10)), p.slicingDistance =
								r, p.pieMinRadius = l, g.distance = n, l
						}, t.prototype._startingAngle = function (e, t) {
							var o, n = this.getChildren("dataset")[0],
								r = n.config,
								a = (o = r.startAngle) + (o < 0 ? 360 : 0);
							return isNaN(e) || r.singletonCase || r.isRotating || (e += t ? a : 0, n._rotate(e), a = e), s(100 * ((a %= 360) + (a < 0 ? 360 :
								0))) / 100
						}, t.prototype.getDSdef = function () {
							return r["default"]
						}, t
					}(n["default"]);
				t["default"] = d
			},
			481: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
						return typeof e
					} : function (e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					r = o(475),
					a = p(r),
					i = o(125),
					l = o(138),
					c = o(482),
					s = p(o(484)),
					u = o(132),
					f = p(o(485));

				function p(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function d(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function h(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}

				function g(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var b = (0, u.getDep)("redraphael", "plugin"),
					y = window,
					m = void 0,
					v = 8 === window.document.documentMode ? "visible" : "",
					_ = i.preDefStr.elementStr,
					C = "M",
					w = "L",
					D = "v",
					O = "A",
					S = "Z",
					P = Math,
					k = P.max,
					x = P.min,
					M = P.abs,
					E = P.ceil,
					N = P.sin,
					A = P.atan2,
					j = P.cos,
					T = P.floor,
					F = P.round,
					B = P.PI,
					I = 2 * B,
					L = B / 2,
					R = B + L,
					G = function (e, t) {
						for (var o = [], n = 0, r = e.length; n < r; n++) o[n] = t.call(e[n], e[n], n, e);
						return o
					},
					V = function (e) {
						return "string" == typeof e
					},
					z = function (e, t) {
						return parseInt(e, t || 10)
					},
					H = {
						lighting3D: {},
						lighting2D: {}
					},
					W = function (e, t, o, n, r) {
						return A((t - o[1] - n.top) / r, e - o[0] - n.left)
					},
					Y = function (e) {
						var t = this.data("plotItem"),
							o = t.index,
							n = t.chart,
							r = n.getFromEnv("animationManager"),
							a = n.config,
							i = n.getChildren("dataset")[0],
							l = i.config,
							c = i.components.data[o],
							s = c.graphics,
							u = c.config,
							f = s.element,
							p = u.hoverEffects;
						l.isRotating || (n.plotEventHandler(f, e, "DataPlotRollOver"), p.enabled && r.setAnimation({
							el: f,
							attr: p,
							component: i
						})), a.isHovered = !0
					},
					U = function (e) {
						var t = this.data("plotItem"),
							o = t.index,
							n = t.chart,
							r = n.getFromEnv("animationManager"),
							a = n.config,
							i = n.getChildren("dataset")[0],
							l = i.config,
							c = i.components.data[o],
							s = c.graphics,
							u = c.config,
							f = s.element;
						l.isRotating || (n.plotEventHandler(f, e, "DataPlotRollOut"), r.setAnimation({
							el: f,
							attr: {
								color: u.color.color.split(",")[0],
								alpha: u._3dAlpha,
								borderWidth: u.borderWidth,
								borderColor: u.borderColor
							},
							component: i
						})), a.isHovered = !1
					},
					X = function (e) {
						var t, o = this.data("plotItem").chart.getChildren("dataset")[0],
							n = (0, i.pluckNumber)(e.button, e.originalEvent.button),
							r = o.config,
							a = e.data[0],
							l = e.data[1];
						r.isRightClicked = !(i.touchEnabled || 0 === n || 1 === n), r.enableRotation && !r.isRightClicked && (r.isRotating = !1, t = W.call(
								e, a, l, r.center, r.chartPosition = (0, i.getPosition)(o.getFromEnv("chart-container")), r.pieYScale), r.dragStartAngle = t,
							r._lastAngle = -r.startAngle, r.startingAngleOnDragStart = r.startAngle)
					},
					Z = function () {
						var e = this.data("plotItem"),
							t = e.index,
							o = e.chart,
							n = o.getFromEnv("animationManager"),
							r = o.config,
							a = o.getChildren("dataset")[0],
							l = a.config,
							c = a.components.data[t],
							s = c.graphics,
							u = c.config,
							f = s.element,
							p = l.startAngle;
						l.isRightClicked || l.isRotating && (setTimeout(function () {
							l.isRotating = !1
						}, 0), o.fireChartInstanceEvent("rotationEnd", {
							startingAngle: (0, i.normalizeAngle)(p, !0),
							changeInAngle: p - l.startingAngleOnDragStart
						}), !r.isHovered && n.setAnimation({
							el: f,
							attr: {
								color: u.color.color.split(",")[0],
								alpha: u._3dAlpha,
								borderWidth: u.borderWidth,
								borderColor: u.borderColor
							},
							component: a
						}))
					},
					J = function (e) {
						var t, o, n, r = this.data("plotItem").chart,
							a = e.data,
							l = a[0],
							c = a[1],
							s = a[2],
							u = a[3],
							f = r.getChildren("dataset")[0],
							p = f.config;
						isNaN(l) || isNaN(c) || !p.enableRotation || p.singletonCase || p.isRightClicked || (t = W.call(e, s, u, p.center, p.chartPosition,
								p.pieYScale), p.dragStartAngle === t || p.isRotating || (p.isRotating = !0, r.fireChartInstanceEvent("rotationStart", {
								startingAngle: (0, i.normalizeAngle)(p.startAngle, !0)
							})), n = t - p.dragStartAngle, p.dragStartAngle = t, p.moveDuration = 0, p._lastAngle += 180 * n / B, o = (new Date).getTime(),
							(!p._lastTime || p._lastTime + p.timerThreshold < o) && (p._lastTime || f._rotate(), p.timerId = setTimeout(function () {
								r.disposed && r.disposing || f._rotate()
							}, p.timerThreshold), p._lastTime = o))
					},
					q = function (e, t) {
						return e._conf.index - t._conf.index || e._conf.cIndex - t._conf.cIndex || e._conf.isStart - t._conf.isStart || e._conf.si - t._conf
							.si
					},
					$ = function (e, t) {
						return e.point.value - t.point.value
					},
					K = function (e, t) {
						return e.angle - t.angle
					},
					Q = ["start", "start", "end", "end"],
					ee = [-1, 1, 1, -1],
					te = [1, 1, -1, -1],
					oe = {
						stroke: !0,
						strokeWidth: !0,
						"stroke-width": !0,
						dashstyle: !0,
						"stroke-dasharray": !0,
						translateX: !0,
						translateY: !0,
						"stroke-opacity": !0,
						fill: !0,
						"fill-opacity": !0,
						opacity: !0,
						transform: !0,
						cursor: !0,
						sAngle: !0,
						eAngle: !0,
						color: !0,
						alpha: !0,
						borderColor: !0,
						borderAlpha: !0,
						borderWidth: !0,
						rolloverProps: !0,
						showBorderEffect: !0,
						positionIndex: !0,
						cx: !0,
						cy: !0,
						radiusYFactor: !0,
						r: !0,
						innerR: !0
					},
					ne = function (e, t) {
						var o, n, r, a, i, l, c, s = this,
							u = s._confObject,
							f = {},
							p = u.elements,
							d = u.Pie3DManager;
						if (V(e) && ((c = t) !== m && null !== c) && (o = e, (e = {})[o] = t), !e || V(e)) s = oe[e] ? u[e] : s._attr(e);
						else {
							for (o in e) n = e[o], oe[o] ? (u[o] = n, "cursor" === o || "transform" === o || "opacity" === o || "fill-opacity" === o ? (f[o] =
										n, l = !0) : "sAngle" === o || "eAngle" === o || "cx" === o || "cy" === o || "radiusYFactor" === o || "r" === o || "innerR" ===
									o ? a = !0 : "color" !== o && "alpha" !== o && "borderColor" !== o && "borderAlpha" !== o && "borderWidth" !== o || (i = !0)) :
								s._attr(o, n);
							if (a && (d._setSliceShape(u), d.refreshDrawing()), (i || a) && d._setSliceCosmetics(u), l) {
								for (r in p) p[r].attr(f);
								s._attr(f)
							}
						}
						return s
					},
					re = function (e, t, o) {
						if (!o) {
							var n, r = this._confObject.elements;
							for (n in r) r[n].on(e, t);
							return this._on(e, t)
						}
						this._on(e, t, !0)
					},
					ae = function (e, t, o) {
						var n, r = this._confObject.elements,
							a = y.navigator.userAgent.toLowerCase().indexOf("android") > -1;
						for (n in r) a && "topBorder" !== n && "frontOuter" !== n && "startSlice" !== n && "endSlice" !== n || r[n].drag(e, t, o);
						return this._drag(e, t, o)
					},
					ie = function () {
						var e, t = this._confObject.elements;
						for (e in t) t[e].hide();
						return this._hide()
					},
					le = function () {
						var e, t = this._confObject.elements;
						for (e in t) t[e].show();
						return this._show()
					},
					ce = function () {
						var e, t = this._confObject,
							o = t.elements;
						for (e in o) o[e].destroy();
						return i.hasSVG && (t.clipTop.destroy(), t.clipOuterFront.destroy(), t.clipOuterBack.destroy(), t.clipOuterFront1 && t.clipOuterFront1
							.destroy(), t.clipInnerFront && t.clipInnerFront.destroy(), t.clipInnerBack && t.clipInnerBack.destroy()), this._destroy()
					},
					se = function (e, t) {
						var o, n = this._confObject.elements;
						if (t === m) return this._data(e);
						for (o in n) n[o].data(e, t);
						return this._data(e, t)
					},
					ue = 0;
				(0, u.addDep)({
					name: "pie3dAnimation",
					type: "animationRule",
					extension: s["default"]
				});
				var fe = function (e) {
					function t() {
						return d(this, t), h(this, e.apply(this, arguments))
					}
					return g(t, e), t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.setBorderWidth = m, t.alphaanimation = 1, t.showBorderEffect = m
					}, t.prototype.placeDataLabels = function (e) {
						var t, o, n, a, l, c, s, u, f, p, d, h, g, b, y, _, D, O, S, A, T, G, V, z, H, W, q, oe, ne, re, ae, ie, le, ce, se, ue, fe, pe =
							this,
							de = pe.getFromEnv("chart"),
							he = de.getFromEnv("toolTipController"),
							ge = de.config,
							be = pe.config,
							ye = pe.components.data,
							me = be.piePlotOptions,
							ve = ge.canvasLeft,
							_e = ge.canvasTop,
							Ce = ge.canvasWidth,
							we = ve + .5 * ge.canvasWidth,
							De = _e + .5 * ge.canvasHeight,
							Oe = de.getFromEnv("smartLabel"),
							Se = be.dataLabelOptions,
							Pe = Se.style,
							ke = (0, i.pluckNumber)(E(parseFloat(Pe.lineHeight)), 12),
							xe = (0, i.getFirstValue)(Se.placeInside, !1),
							Me = Se.skipOverlapLabels,
							Ee = Se.manageLabelOverflow,
							Ne = Se.connectorPadding,
							Ae = Se.distance,
							je = Se.connectorWidth,
							Te = [
								[],
								[],
								[],
								[]
							],
							Fe = ve,
							Be = _e,
							Ie = Ce,
							Le = parseInt(Pe.fontSize, 10),
							Re = Le,
							Ge = Re / 2,
							Ve = [Ne, Ne, -Ne, -Ne],
							ze = Se.isSmartLineSlanted,
							He = Ae > 0,
							We = be.center || (be.center = [we, De, me.size, me.innerSize || 0]),
							Ye = We[1],
							Ue = We[0],
							Xe = We[2],
							Ze = We[4],
							Je = be.labelsRadius,
							qe = F(100 * be.labelsRadiusY) / 100,
							$e = be.maxLabels,
							Ke = be.enableSmartLabels,
							Qe = be.pieSliceDepth / 2,
							et = de.getFromEnv("animationManager"),
							tt = pe.getContainer("label-group");
						if (Oe.useEllipsesOnOverflow(ge.useEllipsesWhenOverflow), be.dataLabelCounter)
							if (e || Oe.setStyle(Pe), 1 == ye.length) T = ye[0], ae = T.graphics, re = T.config, fe = re._textAttrs, ue = re._textCss, H =
								ae.label, ie = ae.connector, re.slicedTranslation = [Fe, Be], null !== re.y && re.y !== m && (fe.visibility = v, fe[
									"text-anchor"] = "middle", fe.x = Ue, fe.y = Ye + Ge - 2, fe._x = Ue), ue.cursor = re.labellink ? "pointer" : "", (H = ae.label =
									et.setAnimation({
										el: ae.label || "text",
										attr: fe,
										css: ue,
										label: "label",
										container: tt,
										component: pe
									})).on("fc-dragstart", X).on("fc-dragmove", J).on("fc-dragend", Z).on("fc-click", r.labelClickFn.bind(H, de, T.config.labellink))
								.on("fc-mouseup", (0, r.plotClickHandler)(pe, H)).on("fc-mouseover", Y).on("fc-mouseout", U), fe._x && (H.x = fe._x, delete fe
									.x), H.data("plotItem", fe.plotItem).data("eventArgs", fe.eventArgs), fe.visibility === v && H.show(), ie && ie.hide();
							else if (xe)(0, i.fcEach)(ye, function (e) {
							var t, o, n;
							ae = e.graphics, re = e.config, fe = re._textAttrs, H = ae.label, null !== re.y && re.y !== m && (G = re.angle, S = Ye + We[
									6] * N(G) + Ge - 2, y = Ue + We[5] * j(G), fe._x = y, fe._y = S, re.sliced && (o = (t = e.slicedTranslation)[0] - Fe, n =
									t[1] - Be, y += o, S += n), fe.visibility = v, fe.align = "middle", fe.x = y, fe.y = S), ue.cursor = re.labellink ?
								"pointer" : "", (H = ae.label = et.setAnimation({
									el: ae.label || "text",
									attr: fe,
									css: ue,
									label: "label",
									container: tt,
									component: pe
								})).data("plotItem", fe.plotItem).data("eventArgs", fe.eventArgs), fe.visibility === v && H.show(), H.x = fe._x, H._x = fe._x,
								H._y = fe._y
						});
						else {
							for ((0, i.fcEach)(ye, function (e) {
									if (ae = e.graphics, re = e.config, ue = re._textCss, !((fe = re._textAttrs).text = re.displayValue)) return ae.connector &&
										et.setAnimation({
											el: ae.connector,
											component: pe,
											callback: r.hideFn
										}), void(ae.label && et.setAnimation({
											el: ae.label,
											component: pe,
											callback: r.hideFn
										}));
									ae = e.graphics, null !== re.y && re.y !== m && (H = ae.label, (ie = ae.connector) && ie.show(), H && H.show()), H = ae.label,
										(G = re.angle) < 0 && (G = I + G), Te[G >= 0 && G < L ? 1 : G < B ? 2 : G < R ? 3 : 0].push({
											point: e,
											angle: G
										})
								}), a = 4; a--;) {
								if (Me && (V = Te[a].length - $e) > 0)
									for (Te[a].sort($), c = 0, p = (z = Te[a].splice(0, V)).length; c < p; c += 1) T = z[c].point, (ae = T.graphics).label && et
										.setAnimation({
											el: ae.label,
											attr: {
												visibility: "hidden"
											},
											component: pe
										}), ae.connector && et.setAnimation({
											el: ae.connector,
											attr: {
												visibility: "hidden"
											},
											component: pe
										});
								Te[a].sort(K)
							}
							for (se = k(Te[0].length, Te[1].length, Te[2].length, Te[3].length), ce = k(x(se, $e) * Re, qe + Re), Te[1].reverse(), Te[3].reverse(),
								Oe.setStyle(Pe), d = 4; d--;) {
								for (p = (A = Te[d]).length, Me || (Ge = (Re = p > $e ? ce / p : Le) / 2), f = p * Re, o = ce, a = 0; a < p; a += 1, f -= Re)
									o < (s = M(ce * N(A[a].angle))) ? s = o : s < f && (s = f), o = (A[a].oriY = s) - Re;
								for (n = Q[d], u = ce - (p - 1) * Re, o = 0, a = A.length - 1; a >= 0; a -= 1, u += Re) T = A[a].point, ae = T.graphics, re =
									T.config, fe = re._textAttrs, ue = re._textCss, null !== re.y && fe.text && (G = A[a].angle, h = re.sliced, H = ae.label, (s =
											M(ce * N(G))) < o ? s = o : s > u && (s = u), o = s + Re, D = (s + A[a].oriY) / 2, g = Ue + te[d] * Je * j(P.asin(D / ce)),
										D *= ee[d], D += Ye, O = Ye + Ze * N(G), b = Ue + Xe * j(G), (d < 2 && g < b || d > 1 && g > b) && (g = b), S = D + Ge - 2,
										_ = (y = g + Ve[d]) + Ve[d], fe._x = _, Ee && (l = d > 1 ? _ - ve : ve + Ie - _, Oe.setStyle(re.style), ke = (0, i.pluckNumber)
											(E(parseFloat(re.style.lineHeight)), 12) + (2 * E(parseFloat(re.style.border), 12) || 0), ne = Oe.getSmartText(re.displayValue,
												l, ke), fe.text = ne.text, fe.tooltip = ne.tooltext), G < B && (D += Qe, O += Qe, S += Qe), fe._y = S, h && (q = re.transX,
											oe = re.transY, y += q, g += q, b += q, D += oe, O += oe, _ += q), fe.visibility = v, fe["text-anchor"] = n, fe.x = _, fe.y =
										D, fe.opacity = 1, ue.cursor = re.labellink ? "pointer" : "", W = ae.label, (H = et.setAnimation({
											el: W || "text",
											attr: fe,
											css: ue,
											container: tt,
											component: pe,
											label: "label"
										})).data("textPos", {
											x: _,
											y: D
										}).data("plotItem", fe.plotItem).data("eventArgs", fe.eventArgs), W || (ae.label = H, H.on("fc-dragstart", X).on(
											"fc-dragmove", J).on("fc-dragend", Z).on("fc-click", r.labelClickFn.bind(H, de, T.config.labellink)).on("fc-click", (0, r
											.plotClickHandler)(pe, H)).on("fc-mouseover", Y).on("fc-mouseout", U)), H.x = fe._x, H._x = fe._x, H.y = fe._y, fe.tooltip &&
										(he.enableToolTip(H, fe.tooltip), delete fe.tooltip), He && je && Ke && (ie = ae.connector, re.connectorPath = le = [C, b,
											O, w, ze ? g : b, D, y, D
										], t = {
											path: le,
											"stroke-width": je,
											stroke: Se.connectorColor || "#606060",
											opacity: 1,
											visibility: v
										}, ie && et.setAnimation({
											el: ie,
											attr: t,
											label: "connector",
											component: pe
										})))
							}
						}
					}, t.prototype._parsePie3DOptions = function () {
						var e = this.config;
						return {
							size: 2 * e.pieMinRadius,
							slicedOffset: e.slicingDistance,
							allowPointSelect: !0,
							cursor: "pointer",
							innerSize: "pie3d" === this.getName() ? 0 : c._getInnerSize.call(this)
						}
					}, t.prototype._parseBorderConfig = function (e, t, o) {
						var n = this.config.pieBorderColor,
							r = this.getFromEnv("chart-attrib"),
							a = (0, i.pluck)(o.bordercolor, n),
							l = (0, i.pluck)(o.borderalpha, r.plotborderalpha, r.pieborderalpha);
						return {
							setPlotBorderColor: a = (0, i.pluck)(a, (0, i.getLightColor)(e, 90)).split(",")[0],
							setPlotBorderAlpha: l = r.showplotborder == i.ZEROSTRING ? i.ZEROSTRING : (0, i.pluck)(l, t, "80")
						}
					}, t.prototype._initPie3dManager = function () {
						var e, t, o, n, r, a, l, c, s, u, f, p = this.getFromEnv("chart"),
							d = p.config,
							h = 0,
							g = this.config,
							b = this.components,
							y = g.dataLabelOptions,
							m = g.pie3DOptions = this._parsePie3DOptions(),
							v = (0, i.pluck)(g.startAngle, 0) % I,
							_ = g.managedPieSliceDepth,
							C = g.slicedOffset = m.slicedOffset,
							w = d.canvasWidth,
							D = d.canvasHeight,
							O = [d.canvasLeft + .5 * w, d.canvasTop + .5 * D - .5 * _],
							S = b.data,
							k = x(w, D),
							M = y.distance,
							E = g.pieYScale,
							A = g.slicedOffsetY || (g.slicedOffsetY = C * g.pieYScale),
							B = this.getFromEnv("pie3DManager");
						for (O.push(2 * g.pieMinRadius, m.innerSize || 0), (O = G(O, function (e, t) {
								return /%$/.test(e) ? [w, D - _, k, k][t] * z(e) / 100 : e
							}))[2] /= 2, O[3] /= 2, O.push(O[2] * E), O.push((O[2] + O[3]) / 2), O.push(O[5] * E), this.getX = function (e, t) {
								return a = P.asin((e - O[1]) / (O[2] + M)), O[0] + (t ? -1 : 1) * (j(a) * (O[2] + M))
							}, g.center = O, (0, i.fcEach)(S, function (e) {
								h += e.config.y
							}), g.labelsRadius = O[2] + M, g.labelsRadiusY = g.labelsRadius * E, g.quadrantHeight = (D - _) / 2, g.quadrantWidth = w / 2,
							c = (l = F(1e3 * (l = v)) / 1e3) + I, t = (0, i.pluckNumber)(parseInt(y.style.fontSize, 10), 10) + 4, g.maxLabels = T(g.quadrantHeight /
								t), g.labelFontSize = t, g.connectorPadding = (0, i.pluckNumber)(y.connectorPadding, 5), g.isSmartLineSlanted = (0, i.pluck)(
								y.isSmartLineSlanted, !0), g.connectorWidth = (0, i.pluckNumber)(y.connectorWidth, 1), g.enableSmartLabels = y.enableSmartLabels,
							B || (B = new pe(p), this.attachChild(B, "pie3DManager", !1), this.addToEnv("pie3DManager", B)), this._configurePie3DManager(),
							e = S.length - 1; e >= 0; e -= 1) n = S[e].config, o = l, s = h ? n.y / h : 0, (l = F(1e3 * (l + s * I)) / 1e3) > c && (l = c),
							r = l, n.shapeArgs = {
								sAngle: F(1e3 * o) / 1e3,
								eAngle: F(1e3 * r) / 1e3
							}, n.centerAngle = a = (r + o) / 2 % I, n.slicedTranslation = [F(j(a) * C), F(N(a) * A)], u = j(a) * O[2], g.radiusY = f = N(a) *
							O[4], n.tooltipPos = [O[0] + .7 * u, O[1] + f], n.percentage = 100 * s, n.total = h
					}, t.prototype._configurePie3DManager = function () {
						var e = this.config,
							t = this.components,
							o = this.getFromEnv("pie3DManager"),
							n = t.data;
						o && o.configure(e.pieSliceDepth, 1 === n.length, e.use3DLighting, !1)
					}, t.prototype.allocatePosition = function () {
						var e, t, o, n, r, a, l, c = this.getFromEnv("chart").config,
							s = this.config,
							u = this.components.data,
							f = (0, i.pluck)(s.startAngle, 0) % I,
							p = s.pie3DOptions = this._parsePie3DOptions(),
							d = s.pieYScale,
							h = s.managedPieSliceDepth,
							g = c.canvasWidth,
							b = c.canvasHeight,
							y = x(g, b),
							m = [c.canvasLeft + .5 * g, c.canvasTop + .5 * b - .5 * h],
							v = 0,
							_ = u.length;
						for (m.push(2 * s.pieMinRadius, p.innerSize || 0), (m = G(m, function (e, t) {
								return /%$/.test(e) ? [g, b - h, y, y][t] * z(e) / 100 : e
							}))[2] /= 2, m[3] /= 2, m.push(m[2] * d), m.push((m[2] + m[3]) / 2), m.push(m[5] * d), s.center = m, (0, i.fcEach)(u, function (
								e) {
								v += e.config.y
							}), l = (f = F(1e3 * f) / 1e3) + I, e = u.length - 1; e >= 0; e -= 1) r = u[e], o = f, a = v ? r.config.y / v : 0, (f = F(1e3 *
							(f + a * I)) / 1e3) > l && (f = l), n = f, r.config.shapeArgs = {
							sAngle: F(1e3 * o) / 1e3,
							eAngle: F(1e3 * n) / 1e3
						};
						for (e = 0; e < _; e++) t = u[e], this.parsePlotAttributes(t, e), this.parseLabelAttributes(t, e)
					}, t.prototype.parsePlotAttributes = function (e, t) {
						var o, n, r, a, l, c, s, u, f, p, d, h, g, b, y, v, _, C, w = this.components,
							D = this.config,
							O = this.getFromEnv("chart"),
							S = O.config,
							P = w.data,
							k = D.dataLabelOptions,
							x = k.style,
							M = D.slicingDistance,
							E = D.slicedOffsetY || (D.slicedOffsetY = M * D.pieYScale),
							A = D.showBorderEffect,
							T = P.length,
							F = D.usePerPointLabelColor,
							B = S.textDirection,
							I = t,
							L = S.dataLabelStyle;
						o = D.center, D.prevPositions, n = D.pieYScale, (b = (g = e.config)._textAttrs) || (b = g._textAttrs = {}), (y = g._textCss) ||
							(y = g._textCss = {}), l = g.y, c = g.displayValue, u = g.sliced, d = g.shapeArgs, f = g.centerAngle, h = g.toolText, s = !!g.link,
							x = g.style, null !== l && l !== m && (v = {
									sAngle: d.sAngle,
									eAngle: d.eAngle,
									r: o[2],
									innerR: o[3],
									cx: o[0],
									cy: o[1],
									radiusYFactor: n,
									opacity: 1
								}, c !== m ? (x ? ((y = g._textCss) || (y = g._textCss = {}), y.fontFamily = x.fontFamily, y.fontSize = x.fontSize, y.lineHeight =
										x.lineHeight, y.fontWeight = x.fontWeight, y.fontStyle = x.fontStyle) : g._textCss && (delete g._textCss, y = m), g.style =
									x || (x = L), b.text = c, b.fill = (F ? (0, i.toRaphaelColor)(g.color) : x.color) || "#000000", b["text-bound"] = [x.backgroundColor,
										x.borderColor, x.borderThickness, x.borderPadding, x.borderRadius, x.borderDash
									], b.direction = B, b.lineHeight = x.lineHeight, k.distance > 0 && (p = k.connectorWidth) && k.enableSmartLabels && (_ = {
										"stroke-width": p,
										stroke: k.connectorColor || "#606060",
										cursor: s ? "pointer" : "",
										opacity: 1
									})) : b.text = "", g.plotItem = a = {
									chart: O,
									index: I,
									seriesData: D,
									value: l,
									angle: g.angle = f,
									link: g.link,
									shapeArgs: d,
									slicedX: u && !D.singletonCase ? j(f) * M : 0,
									slicedY: u && !D.singletonCase ? N(f) * E : 0,
									sliced: u,
									labelText: c,
									name: g.name,
									percentage: g.percentage,
									toolText: h,
									originalIndex: T - I - 1,
									style: g.style,
									transX: g.transX = j(f) * M,
									transY: g.transY = N(f) * E,
									slicedTranslation: g.slicedTranslation = "t" + g.transX + "," + g.transY,
									label: void 0,
									connector: void 0
								}, g.eventArgs = r = {
									index: D.reversePlotOrder ? T - 1 - I : I,
									link: g.link,
									value: g.y,
									displayValue: g.displayValueArgs,
									categoryLabel: g.categoryLabel,
									isSliced: g.sliced,
									toolText: g.toolText
								}, C = {
									color: g.color.color.split(",")[0],
									alpha: g._3dAlpha,
									borderWidth: g.borderWidth,
									borderColor: g.borderColor,
									borderAlpha: g.borderConfig.setPlotBorderAlpha
								}, (0, i.extend2)(v, C), v.cursor = s ? "pointer" : "", v.showBorderEffect = A, v.transform = "t" + a.slicedX + "," + a.slicedY,
								b.plotItem = a, b.eventArgs = r, g.props = {
									element: {
										attr: v
									},
									connector: {
										attr: _
									},
									label: {
										attr: b,
										css: y
									}
								})
					}, t.prototype.draw = function () {
						var e, t, o, n, a, l, c, s, u, f, p, d, h, g, b, y, v, _, C, w, D, O, S, P, k, x, M, E, A = this,
							T = A.components,
							F = A.config,
							B = A.getFromEnv("chart"),
							I = B.config,
							L = B.getFromEnv("animationManager"),
							R = T.data,
							G = F.dataLabelOptions,
							V = G.style,
							z = F.slicingDistance,
							H = F.slicedOffsetY || (F.slicedOffsetY = z * F.pieYScale),
							W = F.showBorderEffect,
							q = R.length,
							$ = F.usePerPointLabelColor,
							K = I.textDirection,
							Q = F.valueTotal,
							ee = T.removeDataArr || [],
							te = A.getState("visible"),
							oe = A.getContainer("labelGroup"),
							ne = {},
							re = A.getFromEnv("toolTipController"),
							ae = I.dataLabelStyle;
						for (A.getContainer("pie-groups") || A._createContainer(), oe = A.getContainer("label-group"), w = A.getContainer("plot-group"),
							L.setAnimation({
								el: oe,
								attr: {
									css: ae
								},
								component: A,
								label: "labelcontainer",
								callback: function () {
									te && Q ? (oe.show(), w.show()) : (oe.hide(), w.hide())
								}
							}), A._initPie3dManager(), o = A.getFromEnv("pie3DManager"), ee.length && A.remove(), e = F.center, F.prevPositions || e, t =
							F.pieYScale, R && q || (R = []), C = -1; ++C < q;)
							if ((O = (b = (l = R[C]).config)._textAttrs) || (O = b._textAttrs = {}), y = l.graphics, c = b.y, s = b.displayValue, f = b.sliced,
								h = b.shapeArgs, p = b.centerAngle, g = b.toolText, u = !!b.link, V = b.style, null !== c && c !== m) {
								for (M in D = y.element, v = y.label, _ = y.connector, P = {
										sAngle: h.sAngle,
										eAngle: h.eAngle,
										r: e[2],
										innerR: e[3],
										cx: e[0],
										cy: e[1],
										radiusYFactor: t,
										opacity: 1
									}, D ? x = !1 : (x = !0, (D = y.element = o.useSliceFromPool()) || (D = y.element = o.createSlice().drag(J, X, Z).on(
										"fc-mouseover", Y).on("fc-mouseout", U)).on("fc-click", (0, r.plotClickHandler)(A, D))), s !== m && (V ? ((S = b._textCss) ||
											(S = b._textCss = {}), S.fontFamily = V.fontFamily, S.fontSize = V.fontSize, S.lineHeight = V.lineHeight, S.fontWeight = V
											.fontWeight, S.fontStyle = V.fontStyle) : b._textCss && (v && v.removeCSS(), delete b._textCss, S = m), b.style = V || (V =
											ae), O.text = s, O.fill = ($ ? (0, i.toRaphaelColor)(b.color) : V.color) || "#000000", O["text-bound"] = [V.backgroundColor,
											V.borderColor, V.borderThickness, V.borderPadding, V.borderRadius, V.borderDash
										], O.direction = K, O.lineHeight = V.lineHeight, v && S && (L.setAnimation({
											el: v,
											attr: {
												css: S
											},
											component: A
										}), delete S.fontFamily, delete S.fontSize, delete S.lineHeight, delete S.fontWeight, delete S.fontStyle, S = m), G.distance >
										0 && (d = G.connectorWidth) && G.enableSmartLabels && (k = {
											"stroke-width": d,
											stroke: G.connectorColor || "#606060",
											cursor: u ? "pointer" : "",
											opacity: 1
										}, oe.show(), _ = y.connector = L.setAnimation({
											el: y.connector || "path",
											attr: k,
											container: oe,
											label: "connector",
											component: A
										}).show().on("fc-dragstart", X).on("fc-dragmove", J).on("fc-dragend", Z).on("fc-mouseover", Y).on("fc-mouseout", U))), Q ?
									(v && v.show(), _ && _.show()) : (v && v.hide(), _ && _.hide()), a = {
										chart: B,
										index: C,
										seriesData: F,
										value: c,
										angle: b.angle = p,
										link: b.link,
										shapeArgs: h,
										slicedX: f && !F.singletonCase ? j(p) * z : 0,
										slicedY: f && !F.singletonCase ? N(p) * H : 0,
										sliced: f,
										labelText: s,
										name: b.name,
										percentage: b.percentage,
										toolText: g,
										originalIndex: q - C - 1,
										style: b.style,
										graphic: D,
										transX: b.transX = j(p) * z,
										transY: b.transY = N(p) * H,
										slicedTranslation: b.slicedTranslation = "t" + b.transX + "," + b.transY,
										label: v,
										connector: _
									}, n = {
										index: F.reversePlotOrder ? q - 1 - C : C,
										link: b.link,
										value: b.y,
										displayValue: b.displayValueArgs,
										categoryLabel: b.categoryLabel,
										isSliced: b.sliced,
										toolText: b.toolText
									}, ne = {
										color: b.color.color.split(",")[0],
										alpha: b._3dAlpha,
										borderWidth: b.borderWidth,
										borderColor: b.borderColor,
										borderAlpha: b.borderConfig.setPlotBorderAlpha
									}, x && (0, i.extend2)(P, ne), D.data("groupId", C).data("plotItem", a).data("eventArgs", n), D.data("groupId", C).data(
										"plotItem", a).data("eventArgs", n), P.cursor = u ? "pointer" : "", P.showBorderEffect = W, P.color = b.color.color.split(
										",")[0], P.alpha = b._3dAlpha, P.borderWidth = b.borderWidth, P.borderColor = b.borderColor, re.enableToolTip(D, g), E = D._confObject
									.elements) re.enableToolTip(E[M], g);
								P.transform = "t" + a.slicedX + "," + a.slicedY, O.plotItem = a, O.eventArgs = n, L.setAnimation({
									el: D,
									attr: P,
									component: A,
									label: "slice",
									state: x ? "appearing" : "updating"
								}), _ && _.data("plotItem", a).data("eventArgs", n)
							}
						oe.show(), A.placeDataLabels(!1), A.drawn = !0, F.prevPositions = e.slice(0)
					}, t.prototype.remove = function () {
						var e, t, o, n, r = this.config,
							a = this.components,
							i = this.getFromEnv("animationManager"),
							l = a.removeDataArr || [],
							c = this.pool = this.pool = [],
							s = l.length,
							u = this.getFromEnv("pie3DManager"),
							f = function (e, t) {
								return function () {
									t === _ ? (u.removeSlice(e.element), delete e.element) : e[t].hide()
								}
							},
							p = r.startAngle,
							d = r.center;
						for (o = 0; o < s; o++) {
							for (e in t = l[0].graphics) n = t[e], c[e] || (c[e] = []), e === _ ? i.setAnimation({
								el: n,
								attr: {
									sAngle: -p,
									eAngle: .01 - p,
									r: d[2],
									innerR: d[3],
									cx: d[0],
									cy: d[1]
								},
								component: this,
								callback: f(t, e)
							}) : i.setAnimation({
								el: n,
								attr: {
									opacity: 0
								},
								component: this,
								callback: f(t, e)
							});
							l.splice(0, 1)
						}
					}, t.prototype._rotate = function (e) {
						var t, o = this,
							n = o.config,
							r = o.getFromEnv("animationManager"),
							a = o.components.data,
							l = n.slicedOffset,
							c = n.slicedOffsetY,
							s = n.startAngle,
							u = o.getFromEnv("pie3DManager");
						e = isNaN(e) ? -n._lastAngle : e, t = (e - s) % 360, n.startAngle = (0, i.pluckNumber)(e, n.startAngle) % 360, t = -t * B / 180,
							u && u.rotate(t), (0, i.fcEach)(a, function (e) {
								var n, a = e.graphics,
									s = e.config,
									u = a.element,
									f = s.shapeArgs,
									p = f.sAngle += t,
									d = f.eAngle += t,
									h = s.angle = (0, i.normalizeAngle)((p + d) / 2),
									g = s.sliced,
									b = j(h),
									y = N(h);
								n = s.slicedTranslation = [F(b * l), F(y * c)], s.transX = n[0], s.transY = n[1], s.slicedX = g ? j(t) * l : 0, s.slicedY =
									g ? N(t) * c : 0, u && g && r.setAnimation({
										el: u,
										attr: {
											transform: "t" + n[0] + "," + n[1]
										},
										component: o
									})
							}), o.placeDataLabels(!0, a)
					}, t.prototype.foldingFn = function () {
						var e = this.config.startAngle;
						return {
							sAngle: -e,
							eAngle: .01 - e
						}
					}, t.prototype.getType = function () {
						return "dataset"
					}, t.prototype.getName = function () {
						return "pie3d"
					}, t
				}(a["default"]);
				b && b._availableAnimAttrs && b._availableAnimAttrs.cx && (b._availableAnimAttrs.innerR = b._availableAnimAttrs.depth = b._availableAnimAttrs
					.radiusYFactor = b._availableAnimAttrs.sAngle = b._availableAnimAttrs.eAngle = b._availableAnimAttrs.cx), (0, f["default"])(b);
				var pe = function (e) {
					function t(o) {
						d(this, t);
						var n = h(this, e.call(this)),
							r = n;
						return r.config = {}, r.linkedItems = {
							chart: o
						}, n
					}
					return g(t, e), t.prototype.getType = function () {
						return "pie3DManager"
					}, t.prototype.getName = function () {
						return "pie3d"
					}, t.prototype.createSlice = function () {
						var e = this.renderer,
							t = void 0,
							o = {
								elements: {},
								Pie3DManager: this
							},
							n = this.slicingWallsArr,
							r = o.elements,
							a = i.hasSVG ? "litepath" : "path";
						return (t = e[a](this.getContainer("topGroup")))._confObject = o, o.thisElement = t, t._destroy = t.destroy, t.destroy = ce, t._show =
							t.show, t.show = le, t._hide = t.hide, t.hide = ie, t._on = t.on, t.on = re, t._drag = t.drag, t.drag = ae, t._attr = t.attr,
							t.attr = ne, t._data = t.data, t.data = se, this.pointElemStore.push(t), r.topBorder = e[a](this.getContainer("topGroup")), r.bottom =
							e[a](this.getContainer("bottomBorderGroup")).attr({
								"stroke-width": 0
							}), r.bottomBorder = e[a](this.getContainer("bottomBorderGroup")), r.frontOuter = e[a](this.getContainer(
								"slicingWallsFrontGroup")).attr({
								"stroke-width": 0
							}), r.backOuter = e[a](this.getContainer("slicingWallsFrontGroup")).attr({
								"stroke-width": 0
							}), r.startSlice = e[a](this.getContainer("slicingWallsFrontGroup")), r.endSlice = e[a](this.getContainer(
								"slicingWallsFrontGroup")), r.frontOuter1 = e[a](this.getContainer("slicingWallsFrontGroup")).attr({
								"stroke-width": 0
							}), r.frontOuter._conf = {
								si: ue,
								isStart: .5
							}, r.frontOuter1._conf = {
								si: ue,
								isStart: .5
							}, r.startSlice._conf = {
								si: ue,
								isStart: 0
							}, r.endSlice._conf = {
								si: ue,
								isStart: 1
							}, r.backOuter._conf = {
								si: ue,
								isStart: .4
							}, n.push(r.startSlice, r.frontOuter1, r.frontOuter, r.backOuter, r.endSlice), this.isDoughnut && (r.frontInner = e[a](this.getContainer(
								"slicingWallsFrontGroup")).attr({
								"stroke-width": 0
							}), r.backInner = e[a](this.getContainer("slicingWallsFrontGroup")).attr({
								"stroke-width": 0
							}), r.backInner._conf = {
								si: ue,
								isStart: .5
							}, r.frontInner._conf = {
								si: ue,
								isStart: .4
							}, n.push(r.frontInner, r.backInner)), ue += 1, t
					}, t.prototype.refreshDrawing = function () {
						var e = this.slicingWallsArr,
							t = 0,
							o = void 0,
							n = e.length,
							r = void 0,
							a = void 0,
							i = void 0,
							l = void 0,
							c = this.getContainer("slicingWallsFrontGroup"),
							s = this.getContainer("slicingWallsBackGroup");
						for (e.sort(q), r = function (e) {
								var t, o, n, r, a = e[0] && e[0]._conf.index;
								for (n = a <= B, o = 1, t = e.length; o < t; o += 1)
									if ((r = e[o]._conf.index) <= B !== n || r < a) return o;
								return 0
							}(e); t < n; t += 1, r += 1) r === n && (r = 0), (l = (o = e[r])._conf.index) < L ? c.appendChild(o) : l <= B ? (a ? o.insertBefore(
							a) : c.appendChild(o), a = o) : l <= R ? (i ? o.insertBefore(i) : s.appendChild(o), i = o) : s.appendChild(o)
					}, t.prototype.configure = function (e, t, o, r) {
						var a, i = this.getLinkedParent(),
							l = this.getFromEnv("paper"),
							c = i.getContainer("plot-group");
						"object" === (void 0 === (a = e) ? "undefined" : n(a)) && (t = (e = e.depth).hasOnePoint, o = e.use3DLighting, r = e.isDoughnut),
						this.renderer || (this.renderer = l), this.hasOnePoint = t, this.use3DLighting = o, this.isDoughnut = r, this.depth = e, !this.getContainer(
								"bottomBorderGroup") && this.addContainer("bottomBorderGroup", l.group("bottom-border", c)), this.getContainer(
								"bottomBorderGroup").attr({
								transform: "t0," + e
							}), !this.getContainer("slicingWallsBackGroup") && this.addContainer("slicingWallsBackGroup", l.group("slicingWalls-back-Side",
								c)), !this.getContainer("slicingWallsFrontGroup") && this.addContainer("slicingWallsFrontGroup", l.group(
								"slicingWalls-front-Side", c)), !this.getContainer("topGroup") && this.addContainer("topGroup", l.group("top-Side", c)), !
							this.pointElemStore && (this.pointElemStore = []), !this.slicingWallsArr && (this.slicingWallsArr = []), this.moveCmdArr = [C],
							this.lineCmdArr = [w], this.closeCmdArr = [S], this.colorObjs = []
					}, t.prototype._parseSliceColor = function (e, t, o) {
						var n, r, a, l, c, s, u, f, p, d, h, g, b, y, m, v, _, C, w, D, O = 3,
							S = this.use3DLighting,
							P = S ? H.lighting3D : H.lighting2D,
							k = o.radiusYFactor,
							x = o.cx,
							M = o.cy,
							E = o.r,
							N = E * k,
							A = o.innerR || 0,
							j = x + E,
							T = x - E,
							F = x + A,
							B = x - A;
						return ~e.indexOf("rgb") && (e = (0, i.rawRGBtoHEX)(e)), h = (t = t || 100) / 2, P[e] && P[e][t] ? D = P[e][t] : (P[e] || (P[e] = {}),
								P[e][t] || (P[e][t] = {}), D = P[e][t], S ? (n = (0, i.getDarkColor)(e, 80), r = (0, i.getDarkColor)(e, 75), s = (0, i.getLightColor)
									(e, 85), u = (0, i.getLightColor)(e, 70), f = (0, i.getLightColor)(e, 40), p = (0, i.getLightColor)(e, 50), d = (0, i.getLightColor)
									(e, 65), a = (0, i.getDarkColor)(e, 69), l = (0, i.getDarkColor)(e, 75), c = (0, i.getDarkColor)(e, 95)) : (O = 10, n = (0,
										i.getDarkColor)(e, 90), r = (0, i.getDarkColor)(e, 87), s = (0, i.getLightColor)(e, 93), u = (0, i.getLightColor)(e, 87), f =
									(0, i.getLightColor)(e, 80), d = p = (0, i.getLightColor)(e, 85), c = (0, i.getDarkColor)(e, 85), a = (0, i.getDarkColor)(e,
										75), l = (0, i.getDarkColor)(e, 80)), g = r + "," + s + "," + u + "," + s + "," + r, y = t + "," + t + "," + t + "," + t +
								"," + t, b = r + "," + e + "," + s + "," + e + "," + r, m = h + "," + h + "," + h + "," + h + "," + h, _ = r + "," + e + "," +
								f + "," + e + "," + r, C = l + "," + s + "," + p + "," + s + "," + a, w = "FFFFFF,FFFFFF,FFFFFF,FFFFFF,FFFFFF", v = "0," + h /
								O + "," + t / O + "," + h / O + ",0", i.hasSVG ? D.top = {
									FCcolor: {
										gradientUnits: "userSpaceOnUse",
										radialGradient: !0,
										color: d + "," + c,
										alpha: t + "," + t,
										ratio: "0,100"
									}
								} : D.top = {
									FCcolor: {
										gradientUnits: "objectBoundingBox",
										color: u + "," + u + "," + s + "," + r,
										alpha: t + "," + t + "," + t + "," + t,
										angle: -72,
										ratio: "0,8,15,77"
									}
								}, D.frontOuter = {
									FCcolor: {
										gradientUnits: "userSpaceOnUse",
										y1: 0,
										y2: 0,
										color: C,
										alpha: y,
										angle: 0,
										ratio: "0,20,15,15,50"
									}
								}, D.backOuter = {
									FCcolor: {
										gradientUnits: "userSpaceOnUse",
										y1: 0,
										y2: 0,
										color: _,
										alpha: m,
										angle: 0,
										ratio: "0,62,8,8,22"
									}
								}, D.frontInner = {
									FCcolor: {
										gradientUnits: "userSpaceOnUse",
										y1: 0,
										y2: 0,
										color: b,
										alpha: m,
										angle: 0,
										ratio: "0,25,5,5,65"
									}
								}, D.backInner = {
									FCcolor: {
										gradientUnits: "userSpaceOnUse",
										y1: 0,
										y2: 0,
										color: g,
										alpha: y,
										angle: 0,
										ratio: "0,62,8,8,22"
									}
								}, D.topBorder = {
									FCcolor: {
										gradientUnits: "userSpaceOnUse",
										y1: 0,
										y2: 0,
										color: w,
										alpha: v,
										angle: 0,
										ratio: "0,20,15,15,50"
									}
								}, D.topInnerBorder = {
									FCcolor: {
										gradientUnits: "userSpaceOnUse",
										y1: 0,
										y2: 0,
										color: w,
										alpha: v,
										angle: 0,
										ratio: "0,50,15,15,20"
									}
								}, D.bottom = (0, i.toRaphaelColor)((0, i.convertColor)(e, h)), D.startSlice = (0, i.toRaphaelColor)((0, i.convertColor)(n, t)),
								D.endSlice = (0, i.toRaphaelColor)((0, i.convertColor)(n, t))), D.cx === x && D.cy === M && D.rx === E && D.radiusYFactor ===
							k && D.innerRx === A || (i.hasSVG && (D.top.FCcolor.cx = x, D.top.FCcolor.cy = M, D.top.FCcolor.r = E, D.top.FCcolor.fx = x -
									.3 * E, D.top.FCcolor.fy = M + 1.2 * N), D.topBorder.FCcolor.x1 = D.backOuter.FCcolor.x1 = D.frontOuter.FCcolor.x1 = T, D.topBorder
								.FCcolor.x2 = D.backOuter.FCcolor.x2 = D.frontOuter.FCcolor.x2 = j, D.topInnerBorder.FCcolor.x1 = D.backInner.FCcolor.x1 = D.frontInner
								.FCcolor.x1 = B, D.topInnerBorder.FCcolor.x2 = D.backInner.FCcolor.x2 = D.frontInner.FCcolor.x2 = F, D.cx = x, D.cy = M, D.rx =
								E, D.radiusYFactor = k, D.innerRx = A), D
					}, t.prototype.allocatePosition = function () {}, t.prototype.rotate = function (e) {
						var t, o = this.pointElemStore,
							n = 0,
							r = o.length;
						if (!this.hasOnePoint) {
							for (; n < r; n += 1)(t = o[n]._confObject).sAngle += e, t.eAngle += e, this._setSliceShape(t);
							this.refreshDrawing()
						}
					}, t.prototype.removeSlice = function (e) {
						var t, o, n = this.pointElemStore,
							r = e._confObject.elements,
							a = this.slicingWallsArr,
							i = n.length;
						for (t = i - 1; t >= 0; t -= 1) n[t] === e && n.splice(t, 1);
						for (t = (i = a.length) - 1; t >= 0; t -= 1)(o = a[t]) !== r.startSlice && o !== r.frontOuter1 && o !== r.frontOuter && o !== r
							.backInner && o !== r.endSlice || a.splice(t, 1);
						e.hide && e.hide(), this._slicePool || (this._slicePool = []), this._slicePool.push(e), this.refreshDrawing()
					}, t.prototype.useSliceFromPool = function () {
						var e, t = this._slicePool || (this._slicePool = []),
							o = this.slicingWallsArr,
							n = !1;
						return t.length && (n = t.shift(), this.pointElemStore.push(n), n.show(), e = n._confObject.elements, o.push(e.startSlice, e.frontOuter1,
							e.frontOuter), e.backInner && o.push(e.backInner), o.push(e.endSlice)), n
					}, t.prototype._setSliceShape = function (e, t) {
						var o, n, r, a, l, c, s, u, f, p, d, h, g, b, y, m, v, _, P, k, x, M, E, A, T, F, G, V, z, H, W, Y, U, X, Z, J, q, $, K, Q, ee,
							te, oe, ne = function (e, t, o, n, r, a, i, l) {
								return e == o && t == n ? [] : [O, r, a, 0, l, i, o, n]
							},
							re = e.sAngle,
							ae = e.eAngle,
							ie = (0, i.normalizeAngle)(re),
							le = (0, i.normalizeAngle)(ae),
							ce = this.isDoughnut,
							se = e.radiusYFactor,
							ue = e.cx,
							fe = e.cy,
							pe = e.r,
							de = pe * se,
							he = pe + (i.hasSVG ? -1 : 2),
							ge = de + (i.hasSVG ? -1 : 2),
							be = e.innerR || 0,
							ye = be * se,
							me = this.depth,
							ve = me + fe,
							_e = ue + pe,
							Ce = ue - pe,
							we = ue + be,
							De = ue - be,
							Oe = fe - de,
							Se = [C, De, Oe, w, De, ve + de, S],
							Pe = e.elements,
							ke = "path",
							xe = (ie + le) / 2,
							Me = ie > le;
						n = j(ie), r = N(ie), a = j(le), l = N(le), c = ue + pe * n, u = ue + he * n, f = fe + ge * r, _ = (s = fe + de * r) + me, P =
							ue + pe * a, p = ue + he * a, d = fe + ge * l, x = (k = fe + de * l) + me, ce ? (h = ue + be * n, m = (g = fe + ye * r) + me,
								b = ue + be * a, v = (y = fe + ye * l) + me, e.startSlice = [C, c, s, w, c, _, h, m, h, g, S], e.endSlice = [C, P, k, w, P, x,
									b, v, b, y, S
								]) : (e.startSlice = [C, c, s, w, c, _, ue, ve, ue, fe, S], e.endSlice = [C, P, k, w, P, x, ue, ve, ue, fe, S]), i.hasSVG ? (
								o = function (e, t) {
									return (e > t ? I : 0) + t - e
								}(ie, le), e.clipTopPath = ce ? [
									[C, c, s, O, pe, de, 0, o > B ? 1 : 0, 1, P, k, w, b, y, O, be, ye, 0, o > B ? 1 : 0, 0, h, g, S]
								] : [
									[C, c, s, O, pe, de, 0, o > B ? 1 : 0, 1, P, k, w, ue, fe, S]
								], e.clipOuterFrontPath1 = [Se], e.clipTopBorderPath = [
									[C, u, f, O, he, ge, 0, o > B ? 1 : 0, 1, p, d, w, P, k, P, k + 1, O, pe, de, 0, o > B ? 1 : 0, 0, c, s + 1, w, c, s, S]
								], re != ae ? ie > le ? ie < B ? (e.clipOuterFrontPath = [
									[C, _e, fe, O, pe, de, 0, 0, 1, P, k, D, me, O, pe, de, 0, 0, 0, _e, fe + me, S]
								], e.clipOuterFrontPath1 = [
									[C, Ce, fe, O, pe, de, 0, 0, 0, c, s, D, me, O, pe, de, 0, 0, 1, Ce, fe + me, S]
								], e.clipOuterBackPath = [
									[C, _e, fe, O, pe, de, 0, 1, 0, Ce, fe, D, me, O, pe, de, 0, 1, 1, _e, fe + me, S]
								], ce && (e.clipInnerBackPath = [
									[C, we, fe, O, be, ye, 0, 1, 0, De, fe, D, me, O, be, ye, 0, 1, 1, we, fe + me, S]
								], e.clipInnerFrontPath = [
									[C, we, fe, O, be, ye, 0, 0, 1, b, y, D, me, O, be, ye, 0, 0, 0, we, fe + me, S, C, De, fe, O, be, ye, 0, 0, 0, h, g, D,
										me, O, be, ye, 0, 0, 1, De, fe + me, S
									]
								])) : le > B ? (e.clipOuterFrontPath = [
									[C, _e, fe, O, pe, de, 0, 1, 1, Ce, fe, D, me, O, pe, de, 0, 1, 0, _e, fe + me, S]
								], e.clipOuterBackPath = [
									[C, Ce, fe, O, pe, de, 0, 0, 1, P, k, D, me, O, pe, de, 0, 0, 0, Ce, fe + me, S, C, _e, fe, O, pe, de, 0, 0, 0, c, s, D, me,
										O, pe, de, 0, 0, 1, _e, fe + me, S
									]
								], ce && (e.clipInnerFrontPath = [
									[C, we, fe, O, be, ye, 0, 1, 1, De, fe, D, me, O, be, ye, 0, 1, 0, we, fe + me, S]
								], e.clipInnerBackPath = [
									[C, De, fe, O, be, ye, 0, 0, 1, b, y, D, me, O, be, ye, 0, 0, 0, De, fe + me, S, C, we, fe, O, be, ye, 0, 0, 0, h, g, D,
										me, O, be, ye, 0, 0, 1, we, fe + me, S
									]
								])) : (e.clipOuterFrontPath = [
									[C, _e, fe, O, pe, de, 0, 0, 1, P, k, D, me, O, pe, de, 0, 0, 0, _e, fe + me, S]
								], e.clipOuterBackPath = [
									[C, c, s, O, pe, de, 0, 0, 1, _e, fe, D, me, O, pe, de, 0, 0, 0, c, _, S]
								], ce && (e.clipInnerFrontPath = [
									[C, we, fe, O, be, ye, 0, 0, 1, b, y, D, me, O, be, ye, 0, 0, 0, we, fe + me, S]
								], e.clipInnerBackPath = [
									[C, h, g, O, be, ye, 0, 0, 1, we, fe, D, me, O, be, ye, 0, 0, 0, h, m, S]
								])) : ie < B ? le > B ? (e.clipOuterFrontPath = [
									[C, c, s, O, pe, de, 0, 0, 1, Ce, fe, D, me, O, pe, de, 0, 0, 0, c, _, S]
								], e.clipOuterBackPath = [
									[C, Ce, fe, O, pe, de, 0, 0, 1, P, k, D, me, O, pe, de, 0, 0, 0, Ce, fe + me, S]
								], ce && (e.clipInnerFrontPath = [
									[C, h, g, O, be, ye, 0, 0, 1, De, fe, D, me, O, be, ye, 0, 0, 0, h, m, S]
								], e.clipInnerBackPath = [
									[C, De, fe, O, be, ye, 0, 0, 1, b, y, D, me, O, be, ye, 0, 0, 0, De, fe + me, S]
								])) : (e.clipOuterFrontPath = [
									[C, c, s, O, pe, de, 0, 0, 1, P, k, D, me, O, pe, de, 0, 0, 0, c, _, S]
								], e.clipOuterBackPath = [Se], ce && (e.clipInnerFrontPath = [
									[C, h, g, O, be, ye, 0, 0, 1, b, y, D, me, O, be, ye, 0, 0, 0, h, m, S]
								], e.clipInnerBackPath = [Se])) : (e.clipOuterFrontPath = [Se], e.clipOuterBackPath = [
									[C, c, s, O, pe, de, 0, 0, 1, P, k, D, me, O, pe, de, 0, 0, 0, c, _, S]
								], ce && (e.clipInnerFrontPath = [Se], e.clipInnerBackPath = [
									[C, h, g, O, be, ye, 0, 0, 1, b, y, D, me, O, be, ye, 0, 0, 0, h, m, S]
								])) : e.clipOuterFrontPath = e.clipOuterBackPath = e.clipInnerBackPath = e.clipInnerFrontPath = [Se], ke = "litepath", e.clipBottomBorderPath =
								e.clipTopPath, e.startSlice = [e.startSlice], e.endSlice = [e.endSlice]) : (V = this.moveCmdArr, z = this.lineCmdArr, H =
								this.closeCmdArr, W = [ue, fe], Y = [Ce, fe], U = [ue, Oe], X = [_e, fe], Z = [ue, fe + de], J = [Ce, ve], q = [_e, ve], $ = [
									De, fe
								], K = [we, fe], Q = [De, ve], ee = [we, ve], e.clipOuterFrontPath1 = [], re != ae ? (ie > le ? ie < B ? (M = ne(c, s, Ce, fe,
											pe, de, 1, 0), A = ne(Ce, fe, _e, fe, pe, de, 1, 0), F = ne(_e, fe, P, k, pe, de, 1, 0), e.clipOuterBackPath = V.concat(Y,
											A, z, q, ne(_e, ve, Ce, ve, pe, de, 0, 0), H), e.clipOuterFrontPath1 = V.concat([c, s], M, z, J, ne(Ce, ve, c, _, pe, de,
											0, 0), H), e.clipOuterFrontPath = V.concat(X, F, z, [P, x], ne(P, x, _e, ve, pe, de, 0, 0), H), e.clipTopBorderPath = V.concat(
											[c, s], M, A, F), ce ? (E = ne(b, y, we, fe, be, ye, 0, 0), T = ne(we, fe, De, fe, be, ye, 0, 0), G = ne(De, fe, h, g, be,
												ye, 0, 0), e.clipInnerBackPath = V.concat(K, T, z, Q, ne(De, ve, we, ve, be, ye, 1, 0), H), e.clipInnerFrontPath = V.concat(
												$, G, z, [h, m], ne(h, m, De, ve, be, ye, 1, 0), H, V, [b, y], E, z, ee, ne(we, ve, b, v, be, ye, 1, 0), H), e.clipTopPath =
											e.clipTopBorderPath.concat(z, [b, y], E, T, G, H), e.clipTopBorderPath = e.clipTopBorderPath.concat(V, [b, y], E, T, G)) :
										e.clipTopPath = e.clipTopBorderPath.concat(z, W, H)) : le > B ? (M = ne(c, s, _e, fe, pe, de, 1, 0), A = ne(_e, fe, Ce, fe,
										pe, de, 1, 0), F = ne(Ce, fe, P, k, pe, de, 1, 0), e.clipOuterFrontPath = V.concat(X, A, z, J, ne(Ce, ve, _e, ve, pe, de,
										0, 0), H), e.clipOuterBackPath = V.concat([c, s], M, z, q, ne(_e, ve, c, _, pe, de, 0, 0), H, V, Y, F, z, [P, x], ne(P, x,
										Ce, ve, pe, de, 0, 0), H), e.clipTopBorderPath = V.concat([c, s], M, A, F), ce ? (E = ne(b, y, De, fe, be, ye, 0, 0), T =
										ne(De, fe, we, fe, be, ye, 0, 0), G = ne(we, fe, h, g, be, ye, 0, 0), e.clipInnerFrontPath = V.concat($, T, z, ee, ne(we,
											ve, De, ve, be, ye, 1, 0), H), e.clipInnerBackPath = V.concat(K, G, z, [h, m], ne(h, m, we, ve, be, ye, 1, 0), H, V, [b,
											y
										], E, z, Q, ne(De, ve, b, v, be, ye, 1, 0), H), e.clipTopPath = e.clipTopBorderPath.concat(z, [b, y], E, T, G, H), e.clipTopBorderPath =
										e.clipTopBorderPath.concat(V, [b, y], E, T, G)) : e.clipTopPath = e.clipTopBorderPath.concat(z, W, H)) : (M = ne(c, s, _e,
											fe, pe, de, 1, 0), A = ne(_e, fe, P, k, pe, de, 1, 0), e.clipOuterFrontPath = V.concat(X, A, z, [P, x], ne(P, x, _e, ve,
											pe, de, 0, 0), H), e.clipOuterBackPath = V.concat([c, s], M, z, q, ne(_e, ve, c, _, pe, de, 0, 0), H), e.clipTopBorderPath =
										V.concat([c, s], M, A), ce ? (E = ne(b, y, we, fe, be, ye, 0, 0), T = ne(we, fe, h, g, be, ye, 0, 0), e.clipInnerFrontPath =
											V.concat([b, y], E, z, ee, ne(we, ve, b, v, be, ye, 1, 0), H), e.clipInnerBackPath = V.concat(K, T, z, [h, m], ne(h, m, we,
												ve, be, ye, 1, 0), H), e.clipTopPath = e.clipTopBorderPath.concat(z, [b, y], E, T, H), e.clipTopBorderPath = e.clipTopBorderPath
											.concat(V, [b, y], E, T)) : e.clipTopPath = e.clipTopBorderPath.concat(z, W, H)) : ie < B ? le > B ? (M = ne(c, s, Ce, fe,
										pe, de, 1, 0), A = ne(Ce, fe, P, k, pe, de, 1, 0), e.clipOuterBackPath = V.concat(Y, A, z, [P, x], ne(P, x, Ce, ve, pe, de,
										0, 0), H), e.clipOuterFrontPath = V.concat([c, s], M, z, J, ne(Ce, ve, c, _, pe, de, 0, 0), H), e.clipTopBorderPath = V.concat(
										[c, s], M, A), ce ? (E = ne(b, y, De, fe, be, ye, 0, 0), T = ne(De, fe, h, g, be, ye, 0, 0), e.clipInnerBackPath = V.concat(
										[b, y], E, z, Q, ne(De, ve, b, v, be, ye, 1, 0), H), e.clipInnerFrontPath = V.concat($, T, z, [h, m], ne(h, m, De, ve, be,
										ye, 1, 0), H), e.clipTopPath = e.clipTopBorderPath.concat(z, [b, y], E, T, H), e.clipTopBorderPath = e.clipTopBorderPath.concat(
										V, [b, y], E, T)) : e.clipTopPath = e.clipTopBorderPath.concat(z, W, H)) : (M = ne(c, s, P, k, pe, de, 1, 0), e.clipOuterBackPath =
										V.concat([c, s]), e.clipTopBorderPath = e.clipOuterBackPath.concat(M), e.clipOuterFrontPath = e.clipTopBorderPath.concat(z, [
											P, x
										], ne(P, x, c, _, pe, de, 0, 0), H), ce ? (E = ne(b, y, h, g, be, ye, 0, 0), e.clipInnerBackPath = V.concat([b, y]), e.clipTopPath =
											e.clipTopBorderPath.concat(z, [b, y], E, H), e.clipTopBorderPath = e.clipTopBorderPath.concat(V, [b, y], E), e.clipInnerFrontPath =
											e.clipInnerBackPath.concat(E, z, [h, m], ne(h, m, b, v, be, ye, 1, 0), H)) : e.clipTopPath = e.clipTopBorderPath.concat(z,
											W, H)) : (M = ne(c, s, P, k, pe, de, 1, 0), e.clipOuterFrontPath = V.concat([c, s]), e.clipTopBorderPath = e.clipOuterFrontPath
										.concat(M), e.clipOuterBackPath = e.clipTopBorderPath.concat(z, [P, x], ne(P, x, c, _, pe, de, 0, 0), H), ce ? (E = ne(b, y,
												h, g, be, ye, 0, 0), e.clipInnerFrontPath = V.concat([b, y]), e.clipTopPath = e.clipTopBorderPath.concat(z, [b, y], E, H),
											e.clipTopBorderPath = e.clipTopBorderPath.concat(e.clipInnerFrontPath, E), e.clipInnerBackPath = e.clipInnerFrontPath.concat(
												E, z, [h, m], ne(h, m, b, v, be, ye, 1, 0), H)) : e.clipTopPath = e.clipTopBorderPath.concat(z, W, H)), M = V.concat(Y, z,
										X), E = V.concat(U, z, Z), e.clipTopPath = e.clipTopPath.concat(M, E), e.clipOuterFrontPath = e.clipOuterFrontPath.concat(M),
									e.clipOuterFrontPath1 = e.clipOuterFrontPath1.concat(M), e.clipOuterBackPath = e.clipOuterBackPath.concat(M), ce && (E = V.concat(
										$, z, K), e.clipInnerFrontPath = e.clipInnerFrontPath.concat(E), e.clipInnerBackPath = e.clipInnerBackPath.concat(E))) : (e
									.clipTopPath = e.clipOuterFrontPath = e.clipOuterBackPath = [], ce && (e.clipInnerFrontPath = e.clipInnerBackPath = [])), e.clipBottomBorderPath =
								e.clipTopBorderPath), t || (Pe.startSlice._conf.index = ie, Pe.endSlice._conf.index = le, Pe.backOuter._conf.index = oe = Me &&
								(ie <= R || le > R) || ie <= R && le > R ? R : ie > B ? ie : le, Pe.frontOuter._conf.index = te = le <= L ? le : ie > le ||
								ie <= L ? L : ie, Pe.frontOuter1._conf.index = ie, Pe.frontOuter1._conf.cIndex = B, ie > le ? (Pe.backOuter._conf.cIndex = ie <
									R ? R : I, Pe.startSlice._conf.cIndex = ie < B ? (ie + B) / 2 : (ie + I) / 2, Pe.endSlice._conf.cIndex = Pe.frontOuter._conf
									.cIndex = 0) : Pe.backOuter._conf.cIndex = Pe.startSlice._conf.cIndex = Pe.endSlice._conf.cIndex = Pe.frontOuter._conf.cIndex =
								xe, o > B ? Pe.frontOuter1.show().attr(ke, e.clipOuterFrontPath1) : Pe.frontOuter1.hide(), e.thisElement._attr(ke, e.clipTopPath),
								Pe.bottom.attr(ke, e.clipTopPath), Pe.bottomBorder.attr(ke, e.clipBottomBorderPath), Pe.topBorder && Pe.topBorder.attr(ke, e.clipTopBorderPath),
								Pe.frontOuter.attr(ke, e.clipOuterFrontPath), Pe.backOuter.attr(ke, e.clipOuterBackPath), ce && (Pe.backInner.attr(ke, e.clipInnerBackPath),
									Pe.frontInner.attr(ke, e.clipInnerFrontPath), Pe.backInner._conf.index = oe, Pe.frontInner._conf.index = te, ie > le ? (Pe.backInner
										._conf.cIndex = I, Pe.frontInner._conf.cIndex = 0) : Pe.backInner._conf.cIndex = Pe.frontInner._conf.cIndex = xe), this.hasOnePoint ?
								(Pe.startSlice.hide(), Pe.endSlice.hide()) : (Pe.startSlice.attr(ke, e.startSlice).show(), Pe.endSlice.attr(ke, e.endSlice).show())
							)
					}, t.prototype._setSliceCosmetics = function (e) {
						var t, o, n = e.thisElement,
							r = e.showBorderEffect,
							a = e.elements,
							l = (0, i.convertColor)(e.borderColor, (0, i.pluckNumber)(e.borderAlpha, e.alpha)),
							c = e.borderWidth;
						e.color && (e.color = e.color.color ? e.color.color : e.color, t = this._parseSliceColor(e.color, e.alpha, e), i.hasSVG ? (o = {
							fill: (0, i.toRaphaelColor)(t.top),
							"stroke-width": 0
						}, r ? a.topBorder.show().attr({
							fill: (0, i.toRaphaelColor)(t.topBorder),
							"stroke-width": 0
						}) : (a.topBorder.hide(), o.stroke = l, o["stroke-width"] = c), n._attr(o)) : (n._attr({
							fill: (0, i.toRaphaelColor)(t.top),
							"stroke-width": 0
						}), a.topBorder.attr({
							stroke: l,
							"stroke-width": c
						})), a.bottom.attr({
							fill: (0, i.toRaphaelColor)(t.bottom)
						}), a.bottomBorder.attr({
							stroke: l,
							"stroke-width": c
						}), a.frontOuter.attr({
							fill: (0, i.toRaphaelColor)(t.frontOuter)
						}), a.frontOuter1.attr({
							fill: (0, i.toRaphaelColor)(t.frontOuter)
						}), a.backOuter.attr({
							fill: (0, i.toRaphaelColor)(t.backOuter)
						}), a.startSlice.attr({
							fill: (0, i.toRaphaelColor)(t.startSlice),
							stroke: l,
							"stroke-width": c
						}), a.endSlice.attr({
							fill: (0, i.toRaphaelColor)(t.endSlice),
							stroke: l,
							"stroke-width": c
						}), this.isDoughnut && (a.frontInner.attr({
							fill: (0, i.toRaphaelColor)(t.frontInner)
						}), a.backInner.attr({
							fill: (0, i.toRaphaelColor)(t.backInner)
						})))
					}, t
				}(l.ComponentInterface);
				t["default"] = fe
			},
			482: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t._getInnerSize = undefined;
				var n = l(o(475)),
					r = o(132),
					a = o(125),
					i = l(o(483));

				function l(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var s = function () {
					var e, t, o, n, r, i, l, c, s, u = this.getFromEnv("chart"),
						f = this.config,
						p = u.getFromEnv("dataSource").chart,
						d = f.doughnutradius,
						h = (0, a.pluckNumber)(p.use3dlighting, 1) ? (0, a.pluckNumber)(p.radius3d, p["3dradius"], 50) : 100,
						g = f.pieMinRadius;
					if (h > 100 && (h = 100), h < 0 && (h = 0), e = /%/.test(d) ? g * (d = Number(d.split("%")[0]) / 100) : d <= 0 || d >= g ? g / 2 :
						(0, a.pluckNumber)(d), f.innerRadius = e, h > 0 && a.hasSVG && (o = (100 - (t = parseInt(e / g * 100, 10))) / 2, i = t + "," + (
							n = parseInt(o * h / 100, 10)) + "," + 2 * (o - n) + "," + n, this && (c = this.components.data)))
						for (l = 0, s = c.length; l < s; l += 1)(r = c[l].config).color && (r.color.ratio = i, r.hoverEffects && r.hoverEffects.color &&
							(r.hoverEffects.color.ratio = i));
					return 2 * e
				};
				(0, r.addDep)({
					name: "doughnut2dAnimation",
					type: "animationRule",
					extension: i["default"]
				});
				var u = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return c(t, e), t.prototype.getType = function () {
						return "dataset"
					}, t.prototype.getName = function () {
						return "doughnut2D"
					}, t.prototype.configureAttributes = function (t) {
						e.prototype.configureAttributes.call(this, t);
						var o = this.config,
							n = this.getFromEnv("chartConfig");
						o.doughnutradius = (0, a.pluck)(n.doughnutradius, o.doughnutradius, "50%")
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this), this.config.doughnutradius = "50%"
					}, t.prototype._parsePiePlotOptions = function () {
						var t = e.prototype._parsePiePlotOptions.call(this);
						return t.innerSize = this._getInnerSize(), t
					}, t.prototype._getInnerSize = function () {
						return s.call(this)
					}, t.prototype.allocatePosition = function () {
						this.config.innerSize = this._getInnerSize(), e.prototype.allocatePosition.call(this)
					}, t
				}(n["default"]);
				t._getInnerSize = s, t["default"] = u
			},
			483: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(476),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = {
					"initial.dataset.doughnut2D": a["default"]["initial.dataset.pie2D"]
				}
			},
			484: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = {
					"initial.dataset.pie3d": function () {
						return {
							"group.appearing": function (e) {
								var t = e.component.getFromEnv("chartConfig");
								return "plots" === e.attr.name ? [{
									initialAttr: {
										opacity: "0"
									},
									finalAttr: {
										opacity: "1"
									},
									slot: t.alphaanimation ? "plot" : "initial"
								}] : [{
									initialAttr: {
										opacity: "1"
									},
									finalAttr: {
										opacity: "1"
									},
									slot: "final"
								}]
							},
							"slice.appearing": function (e) {
								var t = e.component,
									o = t.getFromEnv("chart").config,
									n = t.config,
									r = e.attr;
								return o.alphaanimation ? [{
									initialAttr: {
										opacity: "1"
									},
									slot: "plot"
								}] : n.animateClockWise ? [{
									initialAttr: {
										sAngle: 0,
										eAngle: 0,
										transform: ""
									},
									finalAttr: {
										sAngle: r.sAngle,
										eAngle: r.eAngle,
										transform: ""
									},
									slot: "plot",
									startEnd: {
										start: 0,
										end: .75
									}
								}, {
									finalAttr: {
										transform: r.transform
									},
									slot: "plot",
									startEnd: {
										start: .75,
										end: 1
									}
								}] : [{
									initialAttr: {
										sAngle: 2 * Math.PI,
										eAngle: 2 * Math.PI,
										transform: ""
									},
									finalAttr: {
										sAngle: r.sAngle,
										eAngle: r.eAngle,
										transform: ""
									},
									slot: "plot",
									startEnd: {
										start: 0,
										end: .75
									}
								}, {
									finalAttr: {
										transform: r.transform
									},
									slot: "plot",
									startEnd: {
										start: .75,
										end: 1
									}
								}]
							},
							"label.updating": [{
								initialAttr: {
									opacity: "1"
								},
								finalAttr: {
									opacity: "1"
								},
								slot: "final"
							}],
							"label.appearing": [{
								initialAttr: {
									opacity: "0"
								},
								finalAttr: {
									opacity: "1"
								},
								slot: "final"
							}],
							"connector.updating": function (e) {
								return [{
									initialAttr: {
										path: e.el.attr("path") || e.attr.path,
										opacity: e.el.attr("opacity")
									},
									finalAttr: {
										path: e.attr.path
									},
									slot: "final"
								}]
							},
							"connector.appearing": function (e) {
								return [{
									initialAttr: "string" == typeof e.el ? {
										opacity: "0"
									} : {
										path: e.attr.path,
										opacity: "0"
									},
									slot: "final"
								}]
							},
							"connector-sliced.updating": function (e) {
								return [{
									initialAttr: {
										path: e.el.attr("path")
									},
									finalAttr: {
										path: e.attr.path
									},
									slot: "plot"
								}]
							},
							"label-sliced.updating": function (e) {
								return [{
									initialAttr: {
										x: e.el.attr("x"),
										y: e.el.attr("y")
									},
									slot: "plot"
								}]
							},
							"*": null
						}
					}
				}
			},
			486: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(487),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			487: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(474)),
					r = i(o(482)),
					a = o(125);

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return l(t, e), t.getName = function () {
						return "Doughnut2D"
					}, t.prototype.getName = function () {
						return "Doughnut2D"
					}, t.prototype.configureAttributes = function (t) {
						e.prototype.configureAttributes.call(this, t);
						var o = this.config,
							n = this.getFromEnv("chart-attrib");
						o.doughnutradius = (0, a.pluck)(n.doughnutradius, "50%")
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Doughnut Chart", t.defaultDatasetType = "Doughnut2D", t.singletonPlaceValue = !1
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = c
			},
			488: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(489),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			489: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(480)),
					r = a(o(490));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return i(t, e), t.getName = function () {
						return "Doughnut3D"
					}, t.prototype.getName = function () {
						return "Doughnut3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "3D Doughnut Chart", t.defaultDatasetType = "Doughnut3D", t.singletonPlaceValue = !1
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = l
			},
			490: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(481)),
					r = a(o(491));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}(0, o(132).addDep)({
					name: "doughnut3dAnimation",
					type: "animationRule",
					extension: r["default"]
				});
				var l = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return i(t, e), t.prototype.getType = function () {
						return "dataset"
					}, t.prototype.getName = function () {
						return "doughnut3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this), this.config.doughnutradius = "50%"
					}, t.prototype._configurePie3DManager = function () {
						var e = this.config,
							t = this.components,
							o = this.getFromEnv("pie3DManager"),
							n = t.data;
						o && o.configure(e.pieSliceDepth, 1 === n.length, e.use3DLighting, !0)
					}, t
				}(n["default"]);
				t["default"] = l
			},
			491: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(484),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = {
					"initial.dataset.doughnut3D": a["default"]["initial.dataset.pie3d"]
				}
			},
			492: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(493),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			493: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t._setCategories = undefined;
				var n = s(o(494)),
					r = o(498),
					a = o(500),
					i = s(o(501)),
					l = o(125),
					c = s(o(502));

				function s(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function u(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var f = l.preDefStr.NINETYSTRING;

				function p() {
					var e, t, o = this.getFromEnv("dataSource"),
						n = o.dataset,
						r = this.getFromEnv("number-formatter"),
						a = this.getChildren("xAxis"),
						i = o.data || n && n[0].data || [],
						l = [],
						c = {};
					for (t = i.length - 1; t >= 0; t--) "true" === (e = i[t]).vline || "1" === e.vline || 1 === e.vline || !0 === e.vline ? (c[t] = e,
						i.splice(t, 1)) : null === r.getCleanValue(e.value, !0) && i.splice(t, 1);
					for (t in i.sort(function (e, t) {
							return r.getCleanValue(t.value, !0) - r.getCleanValue(e.value, !0)
						}), l = i.slice(), c) l.splice(t, 0, c[t]);
					a[0].setTickValues(l)
				}
				var d = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.isPercentage = !0, o.registerFactory("axis", i["default"], ["canvas"]), o.registerFactory("dataset", c["default"], [
							"vCanvas"
						]), o
					}
					return u(t, e), t.getName = function () {
						return "Pareto2D"
					}, t.prototype.getName = function () {
						return "Pareto2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.singleseries = !0, t.hasLegend = !1, t.defaultDatasetType = "column", t.plotfillalpha = f, t.enablemousetracking = !0
					}, t.prototype._setCategories = function () {
						p.call(this)
					}, t.prototype._checkInvalidSpecificData = function () {
						var e = this.getFromEnv("dataSource").data;
						if (!e || !e.length) return !0
					}, t.prototype.getDSdef = function (e) {
						return "column" === e ? r.ParetoColumnDataset : a.ParetoLineDataset
					}, t.prototype.getDSGroupdef = function () {}, t
				}(n["default"]);
				t["default"] = d, t._setCategories = p
			},
			498: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t.ParetoColumnDataset = undefined;
				var n = o(125),
					r = l(o(431)),
					a = o(132),
					i = l(o(499));

				function l(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var s = Math,
					u = s.min,
					f = s.max,
					p = s.abs;
				(0, a.addDep)({
					name: "paretoAnimation",
					type: "animationRule",
					extension: i["default"]
				});
				var d = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return c(t, e), t.prototype.getType = function () {
						return "dataset"
					}, t.prototype.getName = function () {
						return "paretoColumn"
					}, t.prototype.configureAttributes = function (e) {
						if (!e) return !1;
						this.trimData(e), this.config.JSONData = e;
						var t, o, r, a, i, l, c, s, d, h, g, b, y, m, v, _, C, w, D, O, S, P, k, x, M, E, N, A, j, T, F, B, I, L, R, G, V, z, H, W, Y,
							U, X, Z, J, q, $, K, Q = this.getFromEnv("chart"),
							ee = this.config,
							te = this.getFromEnv("xAxis"),
							oe = ee.JSONData,
							ne = oe.data,
							re = ne && ne.length,
							ae = this.getFromEnv("chart-attrib"),
							ie = this.getFromEnv("color-manager"),
							le = this.index || this.positionIndex,
							ce = ie.getPlotColor(le),
							se = (0, n.pluckNumber)(oe.dashed, ae.plotborderdashed),
							ue = (0, n.pluckNumber)(ae.useplotgradientcolor, 1),
							fe = (0, n.pluckNumber)(ae.showtooltip, 1),
							pe = (0, n.parseUnsafeString)(ae.yaxisname),
							de = (0, n.parseUnsafeString)(ae.xaxisname),
							he = this.components.data,
							ge = this.getFromEnv("number-formatter"),
							be = Q.config.is3D,
							ye = -Infinity,
							me = +Infinity,
							ve = 0,
							_e = [],
							Ce = 0,
							we = ee.tootipSepChar = (0, n.pluck)(ae.tooltipsepchar, ", ");
						for (ee.defaultPadding = {
								left: .5,
								right: .5
							}, ee.enableAnimation = W = (0, n.pluckNumber)(ae.animation, ae.defaultanimation, 1), ee.animation = !!W && {
								duration: 1e3 * (0, n.pluckNumber)(ae.animationduration, 1)
							}, ee.showTooltip = (0, n.pluckNumber)(ae.showtooltip, 1), ee.valuePadding = (0, n.pluckNumber)(ae.valuepadding, 2), ee.rotateValues =
							(0, n.pluckNumber)(ae.rotatevalues) ? 270 : 0, ee.showHoverEffect = b = (0, n.pluckNumber)(ae.plothovereffect, ae.showhovereffect,
								void 0), ee.showShadow = g || be ? (0, n.pluckNumber)(ae.showshadow, 1) : (0, n.pluckNumber)(ae.showshadow, ie.getColor(
								"showShadow")), ee.useDataPlotColorForLabels = K = (0, n.pluckNumber)(ae.usedataplotcolorforlabels, 0), ee.use3dlineshift = (
								0, n.pluckNumber)(ae.use3dlineshift, Q.use3dlineshift), t = ee.showplotborder = (0, n.pluckNumber)(ae.showplotborder, be ? 0 :
								1), ee.plotDashLen = s = (0, n.pluckNumber)(ae.plotborderdashlen, 5), ee.plotDashGap = d = (0, n.pluckNumber)(ae.plotborderdashgap,
								4), ee.plotfillangle = y = (0, n.pluckNumber)(360 - ae.plotfillangle, 90), ee.plotfillalpha = m = (0, n.pluck)(ae.plotfillalpha,
								"100"), ee.plotColor = ce, ee.isRoundEdges = g = (0, n.pluckNumber)(ae.useroundedges, 0), ee.plotRadius = (0, n.pluckNumber)(
								ae.useRoundEdges, ee.isRoundEdges ? 1 : 0), ee.plotfillratio = v = (0, n.pluck)(ae.plotfillratio), ee.plotgradientcolor = _ =
							(0, n.getDefinedColor)(ae.plotgradientcolor, ie.getColor("plotGradientColor")), !ue && (_ = ""), ee.plotborderalpha = C = t &&
							!be ? (0, n.pluck)(ae.plotborderalpha, m, "100") : 0, ee.plotbordercolor = w = (0, n.pluck)(ae.plotbordercolor, be ? "#ffffff" :
								ie.getColor("plotBorderColor")), ee.plotborderthickness = h = (0, n.pluckNumber)(ae.plotborderthickness, 1), ee.plotBorderDashStyle =
							O = se ? (0, n.getDashStyle)(s, d) : "none", ee.showValues = (0, n.pluckNumber)(ae.showvalues, 1), ee.definedGroupPadding = f(
								(0, n.pluckNumber)(ae.plotspacepercent), 0), ee.plotSpacePercent = f((0, n.pluckNumber)(ae.plotspacepercent, 20) % 100, 0),
							ee.maxcolwidth = (0, n.pluckNumber)(ae.maxcolwidth, 50), ee.plotpaddingpercent = (0, n.pluckNumber)(ae.plotpaddingpercent), ee
							.placevaluesinside = (0, n.pluckNumber)(ae.placevaluesinside, 0), ee.use3dlighting = (0, n.pluckNumber)(ae.use3dlighting, 1),
							ee.parentYAxis = 0, this.setState("visible", 1 === (0, n.pluckNumber)(oe.visible, 1)), this.setState("dirty", !0), he || (he =
								this.components.data = []), Z = 0; Z < re; Z++) ve += q = p(ge.getCleanValue(ne[Z].value)), _e[Z] = (0, n.extend2)({}, ne[Z]),
							_e[Z].value = q;
						for (_e.sort(function (e, t) {
								return t.value - e.value
							}), ee.imageCount = 0, Z = 0; Z < re; Z++) S = _e[Z], (k = he[Z]) || (k = he[Z] = {
							graphics: {}
						}), k.config || (x = he[Z].config = {}), null !== (P = p(ge.getCleanValue(S.value))) && (x = k && k.config, $ = te.getLabel(Z),
							x.label = (0, n.getValidValue)((0, n.parseUnsafeString)((0, n.pluck)($.label))), x.showValue = (0, n.pluckNumber)(S.showvalue,
								ee.showValues), x.setValue = P, x.setLink = (0, n.pluck)(S.link), x.setDisplayValue = E = (0, n.parseUnsafeString)(S.displayvalue),
							Ce += x.setValue, J = ge.dataLabels(P), x.shadow = {
								opacity: ee.showShadow ? m / 100 : 0
							}, Y = (0, n.pluckNumber)(S.dashed), U = (0, n.pluckNumber)(S.dashlen, s), X = d = (0, n.pluckNumber)(S.dashgap, d), x.plotBorderDashStyle =
							D = 1 === Y ? (0, n.getDashStyle)(U, X) : 0 === Y ? "none" : O, ce = ie.getPlotColor(Z), ce = (0, n.pluck)(S.color, ce), v =
							(0, n.pluck)(S.ratio, ee.plotfillratio), m = (0, n.pluck)(S.alpha, ee.plotfillalpha), C = (0, n.pluck)(S.alpha, ee.plotborderalpha),
							P < 0 && !g && (l = y, y = 360 - y), x.colorArr = M = (0, n.getColumnColor)(ce + "," + _, m, v, y, g, w, C.toString(), 0, !!
								be), 0 !== b && (N = (0, n.pluck)(S.hovercolor, ae.plotfillhovercolor, ae.columnhovercolor, ce), A = (0, n.pluck)(S.hoveralpha,
									ae.plotfillhoveralpha, ae.columnhoveralpha, m), !(j = (0, n.pluck)(S.hovergradientcolor, ae.plothovergradientcolor, _)) &&
								(j = ""), T = (0, n.pluck)(S.hoverratio, ae.plothoverratio, v), F = (0, n.pluckNumber)(360 - S.hoverangle, 360 - oe.hoverangle,
									360 - ae.plothoverangle, y), B = (0, n.pluck)(S.borderhovercolor, ae.plotborderhovercolor, w), I = (0, n.pluck)(S.borderhoveralpha,
									oe.borderhoveralpha, ae.plotborderhoveralpha, ae.plotfillhoveralpha, C, m), L = (0, n.pluckNumber)(S.borderhoverthickness,
									oe.borderhoverthickness, ae.plotborderhoverthickness, h), R = (0, n.pluckNumber)(S.borderhoverdashed, ae.plotborderhoverdashed),
								G = (0, n.pluckNumber)(S.borderhoverdashgap, ae.plotborderhoverdashgap, s), V = (0, n.pluckNumber)(S.borderhoverdashlen, ae.plotborderhoverdashlen,
									d), z = R ? (0, n.getDashStyle)(V, G) : D, 1 == b && N === ce && (N = (0, n.getLightColor)(N, 70)), H = (0, n.getColumnColor)
								(N + "," + j, A, T, F, g, B, I.toString(), 0, !!be), x.setRolloutAttr = {
									fill: be ? [(0, n.toRaphaelColor)(M[0]), !ee.use3dlighting] : (0, n.toRaphaelColor)(M[0]),
									stroke: t && (0, n.toRaphaelColor)(M[1]),
									"stroke-width": h,
									"stroke-dasharray": D
								}, x.setRolloverAttr = {
									fill: be ? [(0, n.toRaphaelColor)(H[0]), !ee.use3dlighting] : (0, n.toRaphaelColor)(H[0]),
									stroke: t && (0, n.toRaphaelColor)(H[1]),
									"stroke-width": L,
									"stroke-dasharray": z
								}), K && te.updateTicksValues(Z, {
								labelfontcolor: (0, n.convertColor)(ce)
							}), x.originalPlotColor = ce, x.displayValue = (0, n.pluck)(E, J), a = x.setTooltext = x.origToolText = (0, n.getValidValue)(
								(0, n.parseUnsafeString)((0, n.pluck)(S.tooltext, ae.plottooltext))), x.toolTipValue = ge.dataLabels(P, ee.parentYAxis), x._x =
							Z, x._y = P, o = x.toolTipValue, ye = f(ye, P), me = u(me, P), fe ? (ee.showTooltip ? void 0 !== a ? (r = {
									formattedValue: o,
									label: x.label,
									yaxisName: pe,
									xaxisName: de,
									cumulativeValue: Ce,
									cumulativeDataValue: ge.dataLabels(Ce),
									cumulativePercentValue: void 0,
									sum: ge.dataLabels(ve),
									unformattedSum: ve
								}, i = [1, 2, 3, 5, 6, 7, 20, 21, 22, 23, 24, 25], c = (0, n.parseTooltext)(a, i, r, S, ae)) : c = x.label ? x.label + we :
								"" : c = !1, x.toolText = c) : c = !1, x.toolText = c, x.tooltext = a, x.setTooltext = c, l && (y = l));
						ee.maxValue = ye, ee.minValue = me
					}, t
				}(r["default"]);
				t.ParetoColumnDataset = d
			},
			499: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(432),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = {
					"initial.dataset.paretoColumn": a["default"]["initial.dataset.column"]
				}
			},
			500: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t.ParetoLineDataset = undefined;
				var n, r = o(448),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					},
					i = o(125);

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = Math,
					s = c.min,
					u = c.max,
					f = c.abs,
					p = function (e) {
						function t() {
							return function (e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								}(this, t),
								function (e, t) {
									if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !t || "object" != typeof t && "function" != typeof t ? e : t
								}(this, e.apply(this, arguments))
						}
						return l(t, e), t.prototype.configureAttributes = function (e) {
							if (!e) return !1;
							this.trimData(e), this.config.JSONData = e;
							var t, o, n, r, a, l, c, p, d, h, g, b, y = this.getFromEnv("chart"),
								m = this.config,
								v = this.getFromEnv("xAxis"),
								_ = m.JSONData,
								C = _.data,
								w = C && C.length,
								D = this.getFromEnv("chart-attrib"),
								O = this.getFromEnv("color-manager"),
								S = (0, i.pluckNumber)(D.showtooltip, 1),
								P = ((0, i.parseUnsafeString)(D.yaxisname), (0, i.parseUnsafeString)(D.xaxisname), this.components.data),
								k = this.getFromEnv("number-formatter"),
								x = y.config.is3D,
								M = -Infinity,
								E = +Infinity,
								N = 0,
								A = [],
								j = 0,
								T = m.tootipSepChar = (0, i.pluck)(D.tooltipsepchar, ", ");
							for (m.defaultPadding = {
									left: .5,
									right: .5
								}, m.enableAnimation = l = (0, i.pluckNumber)(D.animation, D.defaultanimation, 1), m.animation = !!l && {
									duration: 1e3 * (0, i.pluckNumber)(D.animationduration, 1)
								}, m.showTooltip = (0, i.pluckNumber)(D.showtooltip, 1), m.valuePadding = (0, i.pluckNumber)(D.valuepadding, 2), m.rotateValues =
								(0, i.pluckNumber)(D.rotatevalues) ? 270 : 0, m.showHoverEffect = (0, i.pluckNumber)(D.plothovereffect, D.showhovereffect,
									void 0), m.showShadow = x ? (0, i.pluckNumber)(D.showshadow, 1) : (0, i.pluckNumber)(D.showshadow, O.getColor("showShadow")),
								m.useDataPlotColorForLabels = (0, i.pluckNumber)(D.usedataplotcolorforlabels, 0), m.use3dlineshift = (0, i.pluckNumber)(D.use3dlineshift,
									y.use3dlineshift), m.drawLine = 1, m.linecolor = (0, i.getFirstColor)((0, i.pluck)(D.linecolor, O.getColor("plotBorderColor"))),
								m.linethickness = (0, i.pluckNumber)(D.linethickness, 2), m.linealpha = (0, i.pluck)(D.linealpha, "100"), m.linedashed = (0, i
									.pluckNumber)(D.linedashed, 0), m.linedashlen = (0, i.pluckNumber)(_.linedashlen, D.linedashlen, 5), m.linedashgap = (0, i.pluckNumber)
								(_.linedashgap, D.linedashgap, 4), c = (0, i.getDashStyle)(m.linedashlen, m.linedashgap), m.lineDashStyle = m.linedashed ? c :
								"none", m.drawanchors = (0, i.pluckNumber)(D.drawanchors, D.showanchors), m.anchorbgcolor = (0, i.pluck)(D.anchorbgcolor, O.getColor(
									"anchorBgColor")), m.anchorbordercolor = (0, i.pluck)(D.anchorbordercolor, m.linecolor), m.anchorradius = (0, i.pluckNumber)(
									D.anchorradius, 3), m.anchoralpha = (0, i.pluck)(D.anchoralpha), m.anchorbgalpha = (0, i.pluck)(D.anchorbgalpha, 100), m.anchorborderthickness =
								(0, i.pluck)(D.anchorborderthickness, 1), m.anchorsides = (0, i.pluck)(D.anchorsides, 0), m.anchorimageurl = (0, i.pluck)(D.anchorimageurl),
								m.anchorimagealpha = (0, i.pluckNumber)(D.anchorimagealpha, 100), m.anchorimagescale = (0, i.pluckNumber)(D.anchorimagescale,
									100), m.anchorimagepadding = (0, i.pluckNumber)(D.anchorimagepadding, 1), m.anchorstartangle = (0, i.pluckNumber)(D.anchorstartangle,
									90), m.parentYAxis = 1, m.valuePosition = (0, i.pluck)(D.valueposition, "auto"), m.showvalues = m.showValues = (0, i.pluckNumber)
								(D.showlinevalues, D.showvalues, 1), this.setState("visible", 1 === (0, i.pluckNumber)(_.visible, 1)), this.setState("dirty", !
									0), m.shadow = {
									opacity: m.showShadow ? m.linealpha / 100 : 0
								}, m.showCumulativeLine = (0, i.pluckNumber)(D.showcumulativeline, 1), m.maxRadius = -Infinity, P || (P = this.components.data = []),
								p = 0; p < w; p++) N += h = f(k.getCleanValue(C[p].value)), A[p] = (0, i.extend2)({}, C[p]), A[p].value = h;
							for (A.sort(function (e, t) {
									return t.value - e.value
								}), m.imageCount = 0, p = 0; p < w; p++) o = A[p], (r = P[p]) || (r = P[p] = {
								graphics: {}
							}), r.config || (a = P[p].config = {}), null !== (n = f(k.getCleanValue(o.value))) && (a = r && r.config, g = v.getLabel(p), a
								.label = (0, i.getValidValue)((0, i.parseUnsafeString)((0, i.pluck)(g.label))), a.showValue = (0, i.pluckNumber)(o.showvalue,
									m.showValues), a.setValue = n, a.setLink = (0, i.pluck)(o.link), a.setDisplayValue = (0, i.parseUnsafeString)(o.displayvalue),
								j += a.setValue, n = a.setValue = j / N * 100, d = k.percentValue(n), a.toolTipValue = d, a.displayValue = d, a.valuePosition =
								(0, i.pluck)(o.valueposition, m.valuePosition), a.anchorProps = this._parseAnchorProperties(p, A), a.hoverEffects = this._parseHoverEffectOptions(
									r), b = a.anchorProps, m.maxRadius = Math.max(m.maxRadius, b.radius + b.borderThickness / 2), a._x = p, a._y = n, a.toolTipValue,
								M = u(M, n), E = s(E, n), S ? (t = !!m.showTooltip && (a.label ? a.label + T + a.toolTipValue : ""), a.toolText = t) : t = !1,
								a.toolText = t, a.tooltext = void 0, a.setTooltext = t);
							m.maxValue = M, m.minValue = E
						}, t
					}(a["default"]);
				t.ParetoLineDataset = p
			},
			501: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = function (e) {
					var t = e.getFromEnv("chart-attrib"),
						o = (0, a.pluckNumber)(t.showcumulativeline, 1),
						i = e.getChildren("canvas")[0],
						l = i.getChildren("axisRefVisualCartesian")[0],
						c = {
							zoomable: !0,
							pannable: !0
						},
						s = e._feedAxesRawData(),
						u = void 0,
						f = void 0,
						p = function () {
							return l.asyncDraw()
						};
					(0, a.componentFactory)(e, r["default"], "xAxis", 1, s.xAxisConf), f = e.getChildren().xAxis[0], l.setLinkedItem(f.getId(), f), i
						.attachAxis(f, !1, e.zoomX ? c : {}), f.setLinkedItem("canvas", i), (0, a.componentFactory)(e, n["default"], "yAxis", o ? 2 : 1,
							s.yAxisConf), (u = e.getChildren("yAxis")) && u[1] && u[1].setAxisConfig({
							isPercent: !0,
							drawLabels: !0,
							drawPlotLines: !0,
							drawAxisName: !0,
							drawAxisLine: !0,
							drawPlotBands: !0,
							drawTrendLines: !0,
							drawTrendLabels: !0
						}), u.forEach(function (t) {
							!0 !== t.getState("removed") ? (t.setLinkedItem("canvas", i), l.setLinkedItem(t.getId(), t), i.attachAxis(t, !0, e.zoomY ? c : {}),
								l.setLinkedItem(t.getId(), t), l.addExtEventListener("visiblerangeset", p, t)) : i.detachAxis(t)
						}), e._setCategories()
				};
				var n = i(o(376)),
					r = i(o(421)),
					a = o(125);

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}
			},
			502: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = function (e) {
					var t, o = e.getChildren(),
						n = e.getFromEnv("chart-attrib"),
						r = o.canvas[0].getChildren("vCanvas"),
						l = e.getFromEnv("dataSource"),
						c = l.dataset,
						s = (0, i.pluckNumber)(n.showcumulativeline, 1),
						u = l.data || c && c[0].data,
						f = void 0,
						p = void 0;
					t = {
						data: u
					}, u && 0 !== u.length ? (f = e.getDSdef("column"), e.config.is3D && ((0, i.componentFactory)(r[0], a["default"],
							"datasetGroup_column"), p = r[0].getChildren("datasetGroup_column")[0]), (0, i.datasetFactory)(p || r[0], f, "dataset", 1, [t]),
						s && (f = e.getDSdef("line"), (0, i.datasetFactory)(r[1], f, "dataset", 1, [t], [1]))) : e.setChartMessage()
				};
				var n, r = o(441),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					},
					i = o(125)
			},
			503: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(504),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			504: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = c(o(493)),
					r = o(125),
					a = o(505),
					i = o(500),
					l = c(o(436));

				function c(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function s(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var u = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.fireGroupEvent = !0, o.defaultPlotShadow = 1, o.isPercentage = !0, o.registerFactory("canvas", l["default"]), o
					}
					return s(t, e), t.getName = function () {
						return "Pareto3D"
					}, t.prototype.getName = function () {
						return "Pareto3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.friendlyName = "3D Pareto Chart", t.singleseries = !0, t.hasLegend = !1, t.defaultDatasetType = "column3d", t.plotfillalpha =
							r.preDefStr.NINETYSTRING, t.use3dlineshift = 1, t.enablemousetracking = !0, t.showzeroplaneontop = 0
					}, t.prototype.getDSdef = function (e) {
						return "column" === e ? a.ParetoColumn3DDataset : i.ParetoLineDataset
					}, t
				}(n["default"]);
				t["default"] = u
			},
			505: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t.ParetoColumn3DDataset = undefined;
				var n = o(498),
					r = o(444);

				function a(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var i = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return a(t, e), t.prototype._getHoveredPlot = function (e, t) {
						var o, n;
						return o = this.getFromEnv("xAxis").getValue(e), (n = Math.round(o)) - o > 0 ? r._checkPointerOverColumn.call(this, n, e, t) ||
							r._checkPointerOverColumn.call(this, n - 1, e, t) : r._checkPointerOverColumn.call(this, n + 1, e, t) || r._checkPointerOverColumn
							.call(this, n, e, t)
					}, t.prototype.createContainer = function () {
						var e = this.getLinkedParent();
						!this.getContainer("labelGroup") && this.addContainer("labelGroup", function (e, t, o) {
							return o.getFromEnv("animationManager").setAnimation({
								el: "group",
								attr: {
									name: e
								},
								container: t,
								state: "appearing",
								component: o,
								label: "group"
							})
						}("label-group", e.getChildContainer("vcanvasLabelGroup"), this).attr("class", "fusioncharts-datalabels"))
					}, t
				}(n.ParetoColumnDataset);
				t.ParetoColumn3DDataset = i
			},
			506: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(507),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			507: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(508),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					},
					i = o(516),
					l = o(518);

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var s = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.canvasborderthickness = 1, o.avgScrollPointWidth = 40, o.hasScroll = !0, o.eiMethods = {
							scrollTo: l.scrollTo
						}, o
					}
					return c(t, e), t.getName = function () {
						return "ScrollCombiDy2D"
					}, t.includeInputOptions = function () {
						return ["SwipeGesture"]
					}, t.prototype.getName = function () {
						return "ScrollCombiDy2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Scrollable Dual Y-Axis Combination Chart", t.defaultDatasetType = "column", t.showzeroplaneontop = 0
					}, t.prototype.configureAttributes = function (t) {
						e.prototype.configureAttributes.call(this, t), i.configurer.call(this, t)
					}, t.prototype._setAxisScale = function () {
						i._setAxisScale.call(this)
					}, t.prototype._resetViewPortConfig = function () {
						i._resetViewPortConfig.call(this)
					}, t
				}(a["default"]);
				t["default"] = s
			},
			508: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = p(o(494)),
					r = p(o(431)),
					a = p(o(449)),
					i = p(o(448)),
					l = p(o(509)),
					c = p(o(513)),
					s = p(o(515)),
					u = o(125),
					f = p(o(496));

				function p(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function d(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var h = u.preDefStr.SEVENTYSTRING,
					g = function (e) {
						function t() {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t);
							var o = function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.call(this));
							return o.isDual = !0, o.registerFactory("dataset", f["default"], ["vCanvas"]), o
						}
						return d(t, e), t.getName = function () {
							return "MSCombidy2D"
						}, t.prototype.getName = function () {
							return "MSCombidy2D"
						}, t.prototype.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Multi-series Dual Y-Axis Combination Chart", t.sDefaultDatasetType = "line", t.defaultDatasetType = "column",
								t.enablemousetracking = !0, t.isdual = 1, t.anchorborderthickness = 1, t.anchorimageurl = void 0, t.anchorimagepadding = 1, t.anchorsides =
								1, t.anchoralpha = void 0, t.anchorbgalpha = u.HUNDREDSTRING, t.anchorimagealpha = u.HUNDREDSTRING, t.anchorimagescale = 100,
								t.anchorstartangle = 90, t.anchorshadow = 0, t.anchorbgcolor = void 0, t.anchorbordercolor = void 0, t.anchorradius = 3, t.showvalues =
								1, t.plotfillalpha = h, t.linedashlen = 5, t.linedashgap = 4, t.linedashed = void 0, t.linealpha = u.HUNDREDSTRING, t.linethickness =
								2, t.drawfullareaborder = 1, t.connectnulldata = 0, t.showzeroplaneontop = 0
						}, t.prototype.getDSdef = function (e) {
							return "splinearea" === e ? l["default"] : "spline" === e ? c["default"] : "area" === e ? a["default"] : "line" === e ? i[
								"default"] : r["default"]
						}, t.prototype.getDSGroupdef = function (e) {
							return "column" === e ? s["default"] : void 0
						}, t.prototype.getDSType = function () {
							var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
							return "splinearea" === e.toLowerCase() ? "splinearea" : "spline" === e.toLowerCase() ? "spline" : "area" === e.toLowerCase() ?
								"area" : "line" === e.toLowerCase() ? "line" : "column"
						}, t
					}(n["default"]);
				t["default"] = g
			},
			516: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t.configurer = t._resetViewPortConfig = t._setAxisScale = undefined;
				var n = c(o(517)),
					r = c(o(431)),
					a = c(o(515)),
					i = o(125),
					l = o(518);

				function c(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function s(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var u = Math.floor,
					f = void 0;

				function p() {
					var e, t, o, n, r, a = this.config,
						l = this.getChildren("xAxis")[0],
						c = l.getTicksLen(),
						s = this.getFromEnv("dataSource").chart,
						f = a.width,
						p = 0,
						d = a.scrollToEnd,
						h = (0, i.pluckNumber)(s.numvisibleplot, u(f / this.avgScrollPointWidth));
					this.iterateComponents(function (e) {
						e.getType && "dataset" === e.getType() && e.getName && "column" === e.getName() && !e.getState("removed") && p++
					}), this.config.isstacked && (p = 1), o = c * (p = p || 1);
					var g = l.getVisibleConfig();
					t = g.maxValue, e = g.minValue, h >= 2 && h < o ? (n = h / p, l.setScrollType("always"), d ? e = t - n : t = e + n, 0 === e && (t -=
						1), l.setVisibleConfig(e, t)) : (r = l.getLimit(), l.setVisibleConfig(r.min, r.max), l.setScrollType("none"))
				}

				function d() {
					this.config.viewPortConfig = {
						scaleX: 1,
						scaleY: 1,
						x: 0,
						y: 0
					}
				}

				function h() {
					var e, t = this.getFromEnv("dataSource").chart;
					(e = this.config).scrollToEnd = (0, i.pluckNumber)(t.scrolltoend, 0), e.lastScrollPosition = f
				}
				var g = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.tooltipConstraint = "plot", o.canvasborderthickness = 1, o.avgScrollPointWidth = 40, o.hasScroll = !0, o.defaultPlotShadow =
							1, o.binSize = 0, o.eiMethods.scrollTo = l.scrollTo, o
					}
					return s(t, e), t.getName = function () {
						return "ScrollColumn2D"
					}, t.includeInputOptions = function () {
						return ["SwipeGesture"]
					}, t.prototype.getName = function () {
						return "ScrollColumn2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.defaultDatasetType = "column", t.showzeroplaneontop = 1, t.friendlyName = "Scrollable Multi-series Column Chart"
					}, t.prototype.configureAttributes = function (t) {
						e.prototype.configureAttributes.call(this, t), h.call(this, t)
					}, t.prototype._setAxisScale = function () {
						p.call(this)
					}, t.prototype.parseChartAttr = function (t) {
						e.prototype.parseChartAttr.call(this, t)
					}, t.prototype._resetViewPortConfig = function () {
						d.call(this)
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {
						return a["default"]
					}, t
				}(n["default"]);
				t["default"] = g, t._setAxisScale = p, t._resetViewPortConfig = d, t.configurer = h
			},
			519: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(520),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			520: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = f(o(521)),
					r = f(o(431)),
					a = f(o(449)),
					i = f(o(448)),
					l = f(o(509)),
					c = f(o(513)),
					s = f(o(515)),
					u = f(o(496));

				function f(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function p(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var d = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.hasScroll = !0, o.canvasborderthickness = 1, o.avgScrollPointWidth = 40, o.defaultPlotShadow = 1, o.registerFactory(
							"dataset", u["default"], ["vCanvas"]), o
					}
					return p(t, e), t.getName = function () {
						return "ScrollCombi2D"
					}, t.prototype.getName = function () {
						return "ScrollCombi2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Scrollable Combination Chart", t.defaultDatasetType = "column", t.zeroplanethickness = 1, t.zeroplanealpha =
							80, t.enablemousetracking = !0, t.showzeroplaneontop = 0, t.defaultcrosslinethickness = null
					}, t.prototype.getDSdef = function (e) {
						return "splinearea" === e ? l["default"] : "spline" === e ? c["default"] : "area" === e ? a["default"] : "line" === e ? i[
							"default"] : r["default"]
					}, t.prototype.getDSGroupdef = function (e) {
						return "column" === e ? s["default"] : void 0
					}, t.prototype.getDSType = function () {
						var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
						return "splinearea" === e.toLowerCase() ? "splinearea" : "spline" === e.toLowerCase() ? "spline" : "area" === e.toLowerCase() ?
							"area" : "line" === e.toLowerCase() ? "line" : "column"
					}, t
				}(n["default"]);
				t["default"] = d
			},
			521: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(516)),
					r = i(o(449)),
					a = o(125);

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = a.preDefStr.SEVENTYSTRING,
					s = function (e) {
						function t() {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t);
							var o = function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.call(this));
							return o.canvasborderthickness = 1, o.hasScroll = !0, o.avgScrollPointWidth = 75, o.defaultPlotShadow = 0, o.binSize = 0, o
						}
						return l(t, e), t.getName = function () {
							return "ScrollArea2D"
						}, t.prototype.getName = function () {
							return "ScrollArea2D"
						}, t.prototype.__setDefaultConfig = function () {
							e.prototype.__setDefaultConfig.call(this);
							var t = this.config;
							t.friendlyName = "Scrollable Multi-series Area Chart", t.defaultDatasetType = "scrollarea2d", t.enablemousetracking = !0, t.anchorborderthickness =
								1, t.anchorimageurl = void 0, t.anchorimagepadding = 1, t.anchorsides = 1, t.anchoralpha = void 0, t.anchorbgalpha = a.HUNDREDSTRING,
								t.anchorimagealpha = a.HUNDREDSTRING, t.anchorimagescale = 100, t.anchorstartangle = 90, t.anchorshadow = 0, t.anchorbgcolor =
								void 0, t.anchorbordercolor = void 0, t.anchorradius = 3, t.showvalues = 1, t.plotfillalpha = c, t.linedashlen = 5, t.linedashgap =
								4, t.linedashed = void 0, t.linealpha = a.HUNDREDSTRING, t.linethickness = 2, t.drawfullareaborder = 1, t.connectnulldata = 0,
								t.defaultcrosslinethickness = 1
						}, t.prototype.getDSdef = function () {
							return r["default"]
						}, t.prototype.getDSGroupdef = function () {
							return undefined
						}, t
					}(n["default"]);
				t["default"] = s
			},
			522: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(523),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			523: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(516)),
					r = a(o(524));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.canvasborderthickness = 1, o.avgScrollPointWidth = 75, o
					}
					return i(t, e), t.getName = function () {
						return "ScrollStackedColumn2D"
					}, t.prototype.getName = function () {
						return "ScrollStackedColumn2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Scrollable Stacked Column Chart", t.isstacked = !0
					}, t.prototype.getDSGroupdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = l
			},
			526: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(521),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			527: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(528),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			528: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(521)),
					r = a(o(448));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.canvasborderthickness = 1, o.avgScrollPointWidth = 75, o.defaultPlotShadow = 1, o.binSize = 0, o
					}
					return i(t, e), t.getName = function () {
						return "ScrollLine2D"
					}, t.prototype.getName = function () {
						return "ScrollLine2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Scrollable Multi-series Line Chart", t.defaultDatasetType = "line", t.zeroplanethickness = 1, t.zeroplanealpha =
							40, t.showzeroplaneontop = 0, t.enablemousetracking = !0, t.defaultcrosslinethickness = 1
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {
						return undefined
					}, t
				}(n["default"]);
				t["default"] = l
			},
			529: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(516),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			530: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(531),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			531: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(532)),
					r = i(o(540)),
					a = i(o(542));

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return l(t, e), t.getName = function () {
						return "Bubble"
					}, t.prototype.getName = function () {
						return "Bubble"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Bubble Chart", t.enablemousetracking = !0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {
						return a["default"]
					}, t
				}(n["default"]);
				t["default"] = c
			},
			532: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(533)),
					r = a(o(537));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.isXY = !0, o.defaultZeroPlaneHighlighted = !1, o
					}
					return i(t, e), t.getName = function () {
						return "Scatter"
					}, t.prototype.getName = function () {
						return "Scatter"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Scatter Chart", t.hasLegend = !0, t.allowreversexaxis = !0, t.enablemousetracking = !0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {}, t
				}(n["default"]);
				t["default"] = l
			},
			540: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = c(o(537)),
					r = o(125),
					a = c(o(538)),
					i = o(132),
					l = c(o(541));

				function c(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function s(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var u = r.hasTouch ? r.TOUCH_THRESHOLD_PIXELS : r.CLICK_THRESHOLD_PIXELS,
					f = r.preDefStr.setRolloverAttrStr,
					p = r.preDefStr.setRolloutAttrStr,
					d = Math,
					h = d.round,
					g = d.min,
					b = d.max;
				(0, i.addDep)({
					name: "bubbleAnimation",
					type: "animationRule",
					extension: l["default"]
				});
				var y = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return s(t, e), t.prototype.getType = function () {
						return "dataset"
					}, t.prototype.getName = function () {
						return "bubble"
					}, t.prototype.configureAttributes = function (e) {
						if (!e) return !1;
						this.trimData(e), this.config.JSONData = e;
						var t, o, n, a, i, l, c, s, u, f, p, d, h, y, m, v, _, C, w, D, O, S, P, k = this.getFromEnv("chart"),
							x = k.getFromEnv("dataSource").chart,
							M = this.config.JSONData,
							E = this.config,
							N = M.data || [],
							A = this.getFromEnv("color-manager"),
							j = this.index,
							T = this.getFromEnv("number-formatter"),
							F = (0, r.pluck)((0, r.parseUnsafeString)(x.tooltipsepchar), ", "),
							B = -Infinity,
							I = +Infinity,
							L = B,
							R = I,
							G = B,
							V = I,
							z = B,
							H = I;
						for (E.seriesname = (0, r.parseUnsafeString)(M.seriesname), E.includeinlegend = (0, r.pluckNumber)(M.includeinlegend, E.seriesname ?
								1 : 0), E.anchorBgColor = (0, r.getFirstColor)((0, r.pluck)(M.color, M.plotfillcolor, x.plotfillcolor, A.getPlotColor(j))), E
							.showPlotBorder = (0, r.pluckNumber)(M.showplotborder, x.showplotborder, 1), E.anchorBorderThickness = E.showPlotBorder ? (0,
								r.pluckNumber)(M.plotborderthickness, x.plotborderthickness, 1) : 0, E.anchorBorderColor = (0, r.getFirstColor)((0, r.pluck)(
								M.plotbordercolor, x.plotbordercolor, "666666")), E.plotFillAlpha = (0, r.pluck)(M.plotfillalpha, M.bubblefillalpha, x.plotfillalpha,
								"100"), E.plotBorderAlpha = (0, r.pluck)(M.plotborderalpha, x.plotborderalpha, "95"), E.negativeColor = (0, r.pluck)(x.negativecolor,
								"FF0000"), E.is3d = 0 !== (0, r.pluckNumber)(x.use3dlighting, M.is3d, x.is3d), E.bubbleScale = (0, r.pluckNumber)(x.bubblescale,
								1), E.minBubbleRadius = (0, r.pluckNumber)(x.minbubbleradius), E.clipBubbles = (0, r.pluckNumber)(x.clipbubbles, 1), E.enableAnimation =
							s = (0, r.pluckNumber)(x.animation, x.defaultanimation, 1), E.animation = !!s && {
								duration: 1e3 * (0, r.pluckNumber)(x.animationduration, 1)
							}, E.showTooltip = (0, r.pluckNumber)(x.showtooltip, 1), E.transposeAnimation = (0, r.pluckNumber)(x.transposeanimation, s), E
							.transposeAnimDuration = 1e3 * (0, r.pluckNumber)(x.transposeanimduration, .2), E.seriesNameInTooltip = (0, r.pluckNumber)(x.seriesnameintooltip,
								1), E.rotateValues = (0, r.pluckNumber)(x.rotatevalues) ? 270 : 0, E.showHoverEffect = (0, r.pluckNumber)(x.plothovereffect,
								x.showhovereffect, void 0), E.showValues = E.showvalues = (0, r.pluckNumber)(M.showvalues, x.showvalues, 0), a = this.components
							.data = this.components.data || (this.components.data = []), t = N.length, E.fillColor = E.is3d ? (0, r.toRaphaelColor)((0, r.getPointColor)
								(E.anchorBgColor, E.plotFillAlpha)) : (0, r.toRaphaelColor)({
								color: E.anchorBgColor,
								alpha: E.plotFillAlpha
							}), E.strokeColor = (0, r.toRaphaelColor)({
								color: E.anchorBorderColor,
								alpha: E.plotFillAlpha
							}), o = 0; o < t; o++)
							if (u = N[o], !(n = a[o] = a[o] || (a[o] = {})).graphics && (n.graphics = {}), (f = n.config = {}).x = T.getCleanValue(u.x), f
								.y = T.getCleanValue(u.y), f.z = T.getCleanValue(u.z, !0), f.setValue = {
									x: f.x,
									y: f.y,
									z: f.z
								}, f._x = f.x, f._y = f.y, f._z = f.z, f.showValue = (0, r.pluckNumber)(u.showvalue, E.showValues), f.anchorProps = {}, v = f
								.label = f.x, f.setLink = (0, r.getValidValue)(u.link), E.max = z = b(z, f.z || 0), E.min = H = g(H, f.z || 0), f.is3d = 0 !==
								(0, r.pluckNumber)(u.is3d, E.is3d), L = b(L, f.x), R = g(R, f.x), G = b(G, f.y), V = g(V, f.y), i = f.color = (0, r.getFirstColor)
								((0, r.pluck)(u.color, u.z < 0 ? E.negativeColor : E.anchorBgColor)), l = f.alpha = (0, r.pluck)(u.alpha, E.plotFillAlpha), f
								.colorObj = O = f.is3d ? (0, r.getPointColor)(i, l) : {
									color: i,
									alpha: l
								}, f.setDisplayValue = _ = (0, r.parseUnsafeString)((0, r.pluck)(u.displayvalue, u.name, u.label)), c = f.formatedVal = null ===
								f.y ? f.y : T.dataLabels(f.y), f.displayValue = (0, r.pluck)(_, f.formatedVal), f.setTooltext = (0, r.getValidValue)((0, r.parseUnsafeString)
									((0, r.pluck)(u.tooltext, M.plottooltext, x.plottooltext))), E.showTooltip ? null === c ? p = !1 : void 0 !== f.setTooltext ?
								(m = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 118], y = {
									yDataValue: c,
									xDataValue: T.xAxis(v),
									yaxisName: (0, r.parseUnsafeString)(x.yaxisname),
									xaxisName: (0, r.parseUnsafeString)(x.xaxisname),
									zDataValue: T.dataLabels(f.z)
								}, p = (0, r.parseTooltext)(f.setTooltext, m, y, u, x, M)) : (E.seriesNameInTooltip && (h = (0, r.getFirstValue)(M && M.seriesname)),
									p = h ? h + F : "", p += v ? T.xAxis(v) + F : "", p += c, p += u.z ? F + T.formatValue(u.z) : "") : p = !1, f.toolText = p,
								d = f.hoverEffects = {}, 0 !== E.showHoverEffect) {
								if (S = d.enabled = void 0 !== (0, r.pluck)(u.hoveralpha, M.hoveralpha, x.bubblehoveralpha, u.hovercolor, M.hovercolor, M.bubblehovercolor,
										x.bubblehovercolor, u.borderhovercolor, M.borderhovercolor, x.plotborderhovercolor, u.borderhoveralpha, M.borderhoveralpha,
										x.plotborderhoveralpha, u.hoverscale, M.bubblehoverscale, x.bubblehoverscale, u.borderhovercolor, M.borderhovercolor, x.plotborderhovercolor,
										u.borderhoverthickness, M.borderhoverthickness, x.plotborderhoverthickness, u.negativehovercolor, M.negativeColor, x.negativecolor,
										u.is3donhover, x.plotfillhovercolor, M.is3donhover, x.is3donhover, void 0), d.negativeColor = (0, r.pluck)(u.negativehovercolor,
										M.negativehovercolor, x.negativehovercolor, E.negativeColor), d.is3d = (0, r.pluckNumber)(u.is3donhover, M.is3donhover, x.is3donhover,
										f.is3d), d.color = (0, r.pluck)(u.hovercolor, M.hovercolor, M.bubblehovercolor, x.plotfillhovercolor, x.bubblehovercolor, f
										.is3d ? O.FCcolor.color : i), d.color = d.negativeColor && u.z < 0 ? d.negativeColor : d.color, d.scale = (0, r.pluck)(u.hoverscale,
										M.hoverscale, M.bubblehoverscale, x.bubblehoverscale, 1), d.color = (0, r.getFirstColor)(d.color), d.alpha = (0, r.pluck)(u
										.hoveralpha, M.hoveralpha, x.plotfillhoveralpha, x.bubblehoveralpha, l), d.borderColor = (0, r.pluck)(u.borderhovercolor, M
										.borderhovercolor, x.plotborderhovercolor, E.anchorBorderColor), d.borderAlpha = (0, r.pluck)(u.borderhoveralpha, M.borderhoveralpha,
										x.plotborderhoveralpha, d.alpha, E.plotBorderAlpha), d.borderThickness = (0, r.pluckNumber)(u.borderhoverthickness, M.borderhoverthickness,
										x.plotborderhoverthickness, E.anchorBorderThickness), d.color = d.is3d ? (0, r.getPointColor)(d.color, d.alpha) : {
										FCcolor: {
											color: d.color,
											alpha: d.alpha
										}
									}, 1 === (S && E.showHoverEffect ? 0 : E.showHoverEffect)) {
									for (D = (P = (C = "string" == typeof d.color) ? d.color.split(/\s{0,},\s{0,}/) : d.color.FCcolor.color.split(
											/\s{0,},\s{0,}/)).length, w = 0; w < D; w++) P[w] = (0, r.getLightColor)(P[w], 70);
									C ? d.color = P.join(",") : d.color.FCcolor.color = P.join(",")
								}!1 === S && (d.enabled = Boolean(E.showHoverEffect))
							} else d.enabled = !1;
						E.xMax = L, E.xMin = R, E.yMin = V, E.yMax = G, this.setState("dirty", !0), this.setState("visible", 1 === (0, r.pluckNumber)(M
							.visible, !Number(M.initiallyhidden), 1)), k.config.showLegend && this._addLegend(), this.setState("dirty", !0)
					}, t.prototype._getHoveredPlot = function (e, t) {
						var o = this.config.dataTree.getNeighbour({
							x: e,
							y: t
						}, !0, "circle");
						if (o) return {
							pointIndex: o.index || o.i,
							hovered: !0,
							pointObj: o.data
						}
					}, t.prototype._hoverPlotAnchor = function (e, t, o) {
						var n = this.getFromEnv("animationManager"),
							r = e.graphics.element,
							a = "DataPlotRollOut" === t ? r.data(p) : r.data(f);
						o && r && (n.setAnimationState && n.setAnimationState("DataPlotRollOut" === t ? "mouseOut" : "mouseOver"), n.setAnimation({
							el: r,
							attr: a,
							component: this
						}))
					}, t.prototype._addLegend = function () {
						var e, t, o = this.getFromEnv("chart"),
							n = this.config,
							r = o.getChildren("legend")[0];
						n.includeinlegend ? (t = {
							enabled: n.includeInLegend,
							anchorSide: 1,
							type: this.type,
							label: n.seriesname
						}, (e = r.getItem(this.config.legendItemId)) ? e.configure({
							style: r.config.itemStyle,
							hiddenStyle: r.config.itemHiddenStyle,
							datasetVisible: r.config.datasetVisible,
							hoverStyle: r.config.itemHoverStyle
						}) : (this.config.legendItemId = r.createItem(this), e = r.getItem(this.config.legendItemId), this.addExtEventListener(
							"fc-click",
							function () {
								e.itemClickFn()
							}, e)), e.configure(t), e.setStateCosmetics("default", {
							symbol: {
								fill: n.fillColor,
								rawFillColor: n.anchorBgColor,
								rawStrokeColor: n.anchorBorderColor,
								stroke: n.strokeColor
							}
						}), this.getState("visible") ? e.removeLegendState("hidden") : e.setLegendState("hidden")) : this.config.legendItemId && r.disposeItem(
							this.config.legendItemId)
					}, t.prototype.getBubbleRadius = function (e) {
						var t, o = d.sqrt,
							n = this.config,
							r = n.bubbleScale,
							a = n.minBubbleRadius,
							i = this.getFromEnv("chartConfig"),
							l = g(i.canvasHeight, i.canvasWidth) / 8,
							c = o(this.getLinkedParent().getDataLimitRange().zMax),
							s = o(e);
						return t = h(s * l / c) * r || 0, a && (t = b(t, a)), t
					}, t.prototype.createCoordinates = function () {
						var e, t, o, n, r, a, i, l = this.components,
							c = l.data,
							s = this.getFromEnv("yAxis"),
							u = s.getAxisBase(),
							f = s.getPixel(u),
							p = this.getFromEnv("xAxis"),
							d = p.config.isVertical,
							h = c.length,
							g = l.data;
						for (n = 0; n < h; n++) t = (e = g[n]) && e.config, void 0 !== e && (o = t._b, r = p.getPixel(t._x), a = s.getPixel(t._y), i =
							o ? s.getPixel(o) : f, "bubble" === this.getName() && (t.r = this.getBubbleRadius(t._z)), d ? (t._Px = a, t._Py = r, t._Pby =
								a, t._Pbx = i) : (t._Px = r, t._Py = a, t._Pby = i, t._Pbx = r))
					}, t.prototype.parsePlotAttributes = function (e, t) {
						var o, n, a, i, l, c, s, f, p, d, h, g, y, m = this.config.JSONData,
							v = this.getFromEnv("chart").config,
							_ = this.config,
							C = t,
							w = this.getState("visible"),
							D = _.anchorBorderThickness;
						i = e.config, c = (0, r.pluckNumber)(i.x, C), s = i.y, f = i.z, p = i.setLink, d = i.displayValue, l = i.toolText, i.finalTooltext =
							i.toolText, h = i.hoverEffects, null !== s && ((y = i.eventArgs || (i.eventArgs = {})).index = C, y.link = p, y.value = s, y.y =
								s, y.x = c, y.z = f, y.displayValue = d, y.toolText = l, y.id = this.userID, y.datasetIndex = this.config.index, y.datasetName =
								m.seriesname, y.visible = w, n = i._Py, a = i._Px, o = i.r, [].push({
									x: a,
									y: n,
									r: o
								}), g = i.setRolloutAttr = {
									fill: (0, r.toRaphaelColor)(i.colorObj),
									"stroke-width": _.anchorBorderThickness,
									stroke: (0, r.toRaphaelColor)({
										color: _.anchorBorderColor,
										alpha: _.plotBorderAlpha
									}),
									r: o
								}, !1 !== h.enabled && (i.setRolloverAttr = {
									fill: (0, r.toRaphaelColor)(h.color),
									"stroke-width": h.borderThickness,
									stroke: (0, r.toRaphaelColor)({
										color: h.borderColor,
										alpha: h.borderAlpha
									}),
									r: o * h.scale
								}), i.props = {
									element: {
										attr: {
											cx: a,
											cy: w ? n : v.canvasBottom + o,
											r: o || 0,
											fill: (0, r.toRaphaelColor)(i.colorObj),
											"stroke-width": _.anchorBorderThickness,
											visibility: w,
											stroke: g.stroke
										}
									}
								}, i.trackerConfig || (i.trackerConfig = {}), i.trackerConfig.trackerRadius = b(o + (D || 0), u), e._xPos = a, e._yPos = n)
					}, t.prototype.allocatePosition = function () {
						var e, t, o, n, r, i, l, c = this.components.data,
							s = [];
						for (this.createCoordinates(), t = 0, o = c.length; t < o; t += 1) e = c[t], this.parsePlotAttributes(e, t), this.parseLabelAttributes(
							e, t), e && (n = (i = e.config)._Px, r = i._Py, l = i.r || 0, s.push({
							x: n,
							y: r,
							index: t,
							data: e,
							r: l
						}));
						this.config.dataTree = (new a["default"]).buildKdTree(s)
					}, t.prototype.getCanvasPadding = function () {
						var e, t, o, n, r, a, i, l, c, s, u, f, p, d, h, b = this.config || (this.config = {}),
							y = this.components || {},
							m = this.getFromEnv("chartConfig"),
							v = m.rotatevalues,
							_ = this.getFromEnv("xAxis"),
							C = this.getFromEnv("dataLabelStyle"),
							w = y.data || [],
							D = w.length,
							O = b.leftMostData || w[0],
							S = b.rightMostData || w[w.length - 1],
							P = g(m.canvasHeight, m.canvasWidth) / 8,
							k = 1,
							x = 1,
							M = m.zMax,
							E = b.bubbleScale,
							N = _.config.axisRange,
							A = N.max,
							j = N.min,
							T = _.getPixel(A),
							F = _.getPixel(j),
							B = {},
							I = {},
							L = this.getFromEnv("smartLabel"),
							R = {
								paddingLeft: 0,
								paddingRight: 0
							},
							G = 0;
						for (e = P / Math.sqrt(M), l = 0; l < D; l++) t = w[l].config, o = O.config, n = S.config, a = Math.sqrt(t.z), p = Math.round(a *
							e) * E || 0, d = _.getValue(p) - j, c = t.x - d / 2, 1 === k && (a = Math.sqrt(o.z), p = Math.round(a * e) * E || 0, d = _.getValue(
							p) - j, s = o.x - d / 2), 1 === x && (a = Math.sqrt(n.z), p = Math.round(a * e) * E || 0, d = _.getValue(p) - j, u = n.x - d /
							2), k = 0, x = 0, s > c && (O = w[l], k = 1), u < c && (S = w[l], x = 1);
						return L.useEllipsesOnOverflow(m.useEllipsesWhenOverflow), L.setStyle(C), O && O.config.showValue && (f = (r = O.config).displayValue,
								I = L.getOriSize(f), G = v ? I.height : I.width, F > (i = _.getPixel(r.x) - .5 * G) && (R.paddingLeft = F - i)), S && S.config
							.showValue && (f = (r = S.config).displayValue, B = L.getOriSize(f), G = v ? B.height : B.width, T < (h = _.getPixel(r.x) + .5 *
								G) && (R.paddingRight = h - T)), R
					}, t.prototype.drawPlots = function () {
						var e, t, o, n, r, a, i, l, c, s = this,
							u = s.getFromEnv("animationManager"),
							d = s.components.data,
							h = s.getContainer(),
							g = s.getState("visible"),
							b = s.getContainer("labelGroup"),
							y = function () {
								!1 === g && (h.plotGroup.hide(), h.commonElemsGroup.hide(), b && b.hide(), s._containerHidden = !0)
							},
							m = {};
						for (r = 0, a = d.length; r < a; r += 1) l = (i = (n = d[r]).config).y, e = n.graphics.element, m = i.hoverEffects, o = n.graphics
							.hotElement, c = n.graphics.label, null !== l ? (t = n.graphics.element, e = u.setAnimation({
									el: t || "circle",
									attr: i.props.element.attr,
									label: "circle",
									callback: y,
									component: s,
									container: h.plotGroup
								}), t || (n.graphics.element = e), e.show(), e.data("hoverEnabled", m.enabled).data(f, i.setRolloverAttr).data(p, i.setRolloutAttr)
								.data("anchorRadius", i.r).data("anchorHoverRadius", i.r), e && e.data("eventArgs", i && i.eventArgs)) : (e && e.hide(), o &&
								o.hide(), c && c.hide()), e && (e.isDrawn = !0)
					}, t.prototype.getDataLimits = function () {
						var e = this.getFromEnv("chart").config,
							t = this.config,
							o = t.yMax,
							n = t.yMin,
							r = -Infinity,
							a = +Infinity,
							i = e.transposeAxis,
							l = t.xMin,
							c = t.xMax,
							s = t.max,
							u = t.min,
							f = this.getRegressionPoints();
						return !1 === this.getState("visible") && i && (o = r, n = a, l = a, c = r), f && (o = Math.max(o, f.max), n = Math.min(n, f.min),
							c = Math.max(c, f.xMax), l = Math.min(l, f.xMin)), {
							max: o,
							min: n,
							xMin: l,
							xMax: c,
							zMax: s,
							zMin: u
						}
					}, t
				}(n["default"]);
				t["default"] = y
			},
			541: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = {
					"initial.dataset.bubble": function () {
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
							"group.appearing": function (e) {
								return "label-group" === e.attr.name ? [{
									initialAttr: {
										opacity: 0
									},
									finalAttr: {
										opacity: 1
									},
									slot: "final"
								}] : [{
									initialAttr: {
										opacity: 1
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
			542: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = o(138),
					r = o(125);

				function a(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var i = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.setState("visible", !0), o
					}
					return a(t, e), t.prototype.createContainer = function () {
						var e = void 0,
							t = this.getFromEnv("animationManager"),
							o = void 0,
							n = this.getLinkedParent().getChildContainer();
						for (e in n) o = n[e], !this.getChildContainer(e) && this.addChildContainer(e, t.setAnimation({
							el: "group",
							attr: {
								name: "manager-" + e
							},
							component: this,
							container: o
						}))
					}, t.prototype.draw = function () {
						this.createContainer()
					}, t.prototype.getDataLimitRange = function () {
						var e, t, o, n, r, a = this.getChildren(),
							i = -Infinity,
							l = +Infinity,
							c = -Infinity,
							s = +Infinity;
						for (t in a)
							if (a.hasOwnProperty(t) && (o = a[t]) instanceof Array)
								for (n = o.length, e = 0; e < n; e++) o[e].getState("removed") || (r = o[e].getDataLimits(), c = Math.max(c, r.xMax || -
									Infinity), s = Math.min(s, r.xMin || +Infinity), i = Math.max(i, r.zMax || -Infinity), l = Math.min(l, r.zMin || +Infinity));
						return {
							xMax: c,
							xMin: s,
							zMax: i = i === -Infinity ? 0 : i,
							zMin: l = l === +Infinity ? 0 : l
						}
					}, t.prototype.childChanged = function () {
						var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
							t = this.config,
							o = this.getLinkedParent(),
							n = void 0,
							r = void 0,
							a = {},
							i = void 0;
						!1 === e.hide && !1 === e.show || (this._mapChildren(function (e) {
							e.setState("dirty", !0)
						}), i = !0), !1 !== e.dataLimitChanged && ((n = this.getDataLimits()).min === t.range.min && n.max === t.range.max || (t.range
							.min = n.min, t.range.max = n.max, a.dataLimitChanged = !0, i = !0)), !1 !== e.paddingChanged && ((r = this.getAxisValuePadding())
							.left === t.padding.left && r.right === t.padding.right || (t.padding.left = r.left, t.padding.right = r.right, a.paddingChanged = !
								0, i = !0)), i ? o.childChanged && o.childChanged(a) : this.asyncDraw()
					}, t.prototype.getAxisValuePadding = function () {
						var e = {},
							t = -Infinity,
							o = -Infinity;
						return this._mapChildren(function (n) {
							n.getState("removed") || !1 === n.getState("visible") || (e = n.getAxisValuePadding && n.getAxisValuePadding() || {}, t =
								Math.max(t, e.left || -Infinity), o = Math.max(o, e.right || -Infinity))
						}), t === -Infinity && (t = 0), o === -Infinity && (o = 0), this.config.padding || (this.config.padding = {}, this.config.padding
							.left = t, this.config.padding.right = o), {
							left: t,
							right: o
						}
					}, t.prototype.getCanvasPadding = function () {
						var e, t, o = {
							paddingLeft: 0,
							paddingRight: 0,
							paddingTop: 0,
							paddingBottom: 0
						};
						return this._mapChildren(function (n) {
							if (!n.getState("removed"))
								for (t in e = n.getCanvasPadding && n.getCanvasPadding() || {}) e.hasOwnProperty(t) && (o[t] = Math.max(e[t], o[t]))
						}), o
					}, t.prototype.getDataLimits = function () {
						var e, t, o, n = this.getFromEnv("chart"),
							a = -Infinity,
							i = +Infinity,
							l = a,
							c = i,
							s = i,
							u = a;
						return this._mapChildren(function (n) {
							var f;
							n.getDataLimits && !n.getState("removed") && (e = n.getDataLimits(), f = e, t = (0, r.pluck)(f.xMax, a), o = (0, r.pluck)(f.xMin,
								i), l = Math.max(l, f.max), c = Math.min(c, f.min), u = Math.max(u, t), s = Math.min(s, o))
						}), l === -Infinity && (l = 0), c === +Infinity && (c = 0), this.config.range || (this.config.range = {}, this.config.range.min =
							c, this.config.range.max = l, this.config.range.xMin = s, this.config.range.xMax = u), n.config.yMax = l, n.config.yMin = c, {
							min: c,
							max: l,
							xMin: s,
							xMax: u
						}
					}, t.prototype.isVisible = function () {
						return !this.isNotVisible
					}, t.prototype.getType = function () {
						return "manager"
					}, t.prototype.getName = function () {
						return "BubbleGroupManager"
					}, t.prototype.remove = function () {
						this._mapChildren(function (e) {
							e.getState("removed") || e.remove()
						}), e.prototype.remove.call(this)
					}, t
				}(n.ComponentInterface);
				t["default"] = i
			},
			543: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(532),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			544: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(545),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			547: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(548),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			548: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(549)),
					r = i(o(524)),
					a = o(125);

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.showsum = 0, o
					}
					return l(t, e), t.getName = function () {
						return "StackedArea2D"
					}, t.prototype.getName = function () {
						return "StackedArea2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Stacked Area Chart", t.plotfillalpha = a.HUNDREDSTRING, t.isstacked = 1
					}, t.prototype.getDSGroupdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = c
			},
			551: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(552),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			552: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(553)),
					r = i(o(524)),
					a = i(o(471));

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return l(t, e), t.getName = function () {
						return "StackedBar3D"
					}, t.prototype.getName = function () {
						return "StackedBar3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "3D Stacked Bar Chart", t.enablemousetracking = !0, t.maxbarheight = 50, t.isstacked = !0
					}, t.prototype.getDSdef = function () {
						return a["default"]
					}, t.prototype.getDSGroupdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = c
			},
			553: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = l(o(554)),
					r = l(o(515)),
					a = l(o(471)),
					i = l(o(555));

				function l(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var s = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.defaultSeriesType = "bar3d", o.defaultPlotShadow = 1, o.isBar = !0, o.defaultZeroPlaneHighlighted = !1, o.registerFactory(
							"dataset", i["default"], ["vCanvas"]), o
					}
					return c(t, e), t.getName = function () {
						return "MSBar3D"
					}, t.prototype.getName = function () {
						return "MSBar3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.friendlyName = "Multi-series 3D Bar Chart", t.hasLegend = !0, t.defaultDatasetType = "bar3d", t.showplotborder =
							0, t.enablemousetracking = !0
					}, t.prototype.getDSdef = function () {
						return a["default"]
					}, t.prototype.getDSGroupdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = s
			},
			554: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(457)),
					r = i(o(436)),
					a = i(o(555));

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.registerFactory("canvas", r["default"]), o.registerFactory("dataset", a["default"], ["vCanvas"]), o
					}
					return l(t, e), t.getName = function () {
						return "MSBarCartesian3D"
					}, t.prototype.getName = function () {
						return "MSBarCartesian3D"
					}, t.prototype.parseChartAttr = function (t) {
						e.prototype.parseChartAttr.call(this, t), this.config.drawTrendRegion = 0
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.showplotborder = 0, t.showzeroplaneontop = 0
					}, t
				}(n["default"]);
				t["default"] = c
			},
			555: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = function (e) {
					var t, o, n, a = e.getFromEnv("dataSource").dataset,
						l = void 0,
						c = l = e.getChildren().canvas[0].getChildren("vCanvas")[0],
						s = e.config.defaultDatasetType || "",
						u = void 0;
					a || e.setChartMessage(), (0, r.componentFactory)(l, i["default"], "datasetGroup_" + s), u = l.getChildren("datasetGroup_" + s)[0],
						t = e.getDSGroupdef(), (0, r.componentFactory)(u, t, "datasetGroup_" + s), (n = u.getChildren("datasetGroup_" + s)) && (c = n[0]),
						o = e.getDSdef(), (0, r.datasetFactory)(c, o, "dataset", a.length, a)
				};
				var n, r = o(125),
					a = o(441),
					i = (n = a) && n.__esModule ? n : {
						"default": n
					}
			},
			556: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(557),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			557: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(558)),
					r = a(o(524));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return i(t, e), t.getName = function () {
						return "StackedBar2D"
					}, t.prototype.getName = function () {
						return "StackedBar2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Stacked Bar Chart", t.enablemousetracking = !0, t.maxbarheight = 50, t.isstacked = !0
					}, t.prototype.getDSGroupdef = function () {
						return r["default"]
					}, t
				}(n["default"]);
				t["default"] = l
			},
			558: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = l(o(457)),
					r = l(o(466)),
					a = l(o(515)),
					i = l(o(460));

				function l(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var s = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.isBar = !0, o.registerFactory("dataset", i["default"], ["vCanvas"]), o
					}
					return c(t, e), t.getName = function () {
						return "MSBar2D"
					}, t.prototype.getName = function () {
						return "MSBar2D"
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {
						return a["default"]
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Multi-series Bar Chart", t.hasLegend = !0, t.defaultDatasetType = "bar2d"
					}, t
				}(n["default"]);
				t["default"] = s
			},
			559: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(560),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			560: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(561)),
					r = i(o(443)),
					a = i(o(524));

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return l(t, e), t.getName = function () {
						return "StackedColumn3D"
					}, t.prototype.getName = function () {
						return "StackedColumn3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "3D Stacked Column Chart", t.maxbarheight = 50, t.enablemousetracking = !0, t.isstacked = !0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {
						return a["default"]
					}, t
				}(n["default"]);
				t["default"] = c
			},
			561: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(562)),
					r = i(o(443)),
					a = i(o(515));

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.defaultPlotShadow = 1, o.defaultZeroPlaneHighlighted = !1, o
					}
					return l(t, e), t.getName = function () {
						return "MSColumn3D"
					}, t.prototype.getName = function () {
						return "MSColumn3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.friendlyName = "Multi-series 3D Column Chart", t.defaultDatasetType = "column3d", t.showplotborder = 0, t.enablemousetracking = !
							0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {
						return a["default"]
					}, t
				}(n["default"]);
				t["default"] = c
			},
			562: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(458)),
					r = i(o(436)),
					a = i(o(555));

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.registerFactory("canvas", r["default"]), o.registerFactory("dataset", a["default"], ["vCanvas"]), o
					}
					return l(t, e), t.getName = function () {
						return "MSCartesian3D"
					}, t.prototype.getName = function () {
						return "MSCartesian3D"
					}, t.prototype.parseChartAttr = function (t) {
						e.prototype.parseChartAttr.call(this, t), this.config.drawTrendRegion = 0
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.showplotborder = 0, t.drawcrosslineontop = 0, t.showzeroplaneontop = 0
					}, t
				}(n["default"]);
				t["default"] = c
			},
			563: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(564),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			564: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = i(o(517)),
					r = i(o(431)),
					a = i(o(524));

				function i(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return l(t, e), t.getName = function () {
						return "StackedColumn2D"
					}, t.prototype.getName = function () {
						return "StackedColumn2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Stacked Column Chart", t.isstacked = !0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {
						return a["default"]
					}, t
				}(n["default"]);
				t["default"] = c
			},
			565: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(566),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			568: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(569),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			569: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(570)),
					r = a(o(524));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.defaultSecondaryDataset = "line", o.isDual = !0, o
					}
					return i(t, e), t.getName = function () {
						return "StackedColumn3DLineDy"
					}, t.prototype.getName = function () {
						return "StackedColumn3DLineDy"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.sDefaultDatasetType = "line", t.friendlyName = "Stacked 3D Column and Line Chart", t.defaultDatasetType =
							"column3d", t.use3dlineshift = 1, t.isdual = !0, t.isstacked = !0, t.showplotborder = 0, t.enablemousetracking = !0
					}, t.prototype.getDSGroupdef = function (e) {
						return "column3d" === e ? r["default"] : void 0
					}, t
				}(n["default"]);
				t["default"] = l
			},
			570: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = c(o(571)),
					r = c(o(443)),
					a = c(o(448)),
					i = c(o(515)),
					l = c(o(572));

				function c(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function s(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var u = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.defaultPlotShadow = 1, o.isDual = !0, o.registerFactory("dataset", l["default"], ["vCanvas"]), o
					}
					return s(t, e), t.getName = function () {
						return "MSColumn3DLineDy"
					}, t.prototype.getName = function () {
						return "MSColumn3DLineDy"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.sDefaultDatasetType = "line", t.friendlyName = "Multi-series 3D Column and Line Chart", t.defaultDatasetType =
							"column3d", t.use3dlineshift = 1, t.isdual = !0, t.showplotborder = 0, t.enablemousetracking = !0, t.anchorborderthickness = 1,
							t.anchorimageurl = void 0, t.anchorimagepadding = 1, t.anchorsides = 1, t.anchoralpha = void 0, t.anchorbgalpha = "100", t.anchorimagealpha =
							"100", t.anchorimagescale = 100, t.anchorstartangle = 90, t.anchorshadow = 0, t.anchorbgcolor = void 0, t.anchorbordercolor =
							void 0, t.anchorradius = 3, t.showvalues = 1, t.plotfillalpha = "70", t.linedashlen = 5, t.linedashgap = 4, t.linedashed =
							void 0, t.linealpha = "100", t.linethickness = 2, t.drawfullareaborder = 1, t.connectnulldata = 0, t.showzeroplaneontop = 0
					}, t.prototype.getDSdef = function (e) {
						return "line" === e ? a["default"] : r["default"]
					}, t.prototype.getDSGroupdef = function (e) {
						return "column3d" === e ? i["default"] : void 0
					}, t.prototype.getDSType = function (e, t) {
						return e && "line" === e.toLowerCase() || t ? "line" : "column3d"
					}, t
				}(n["default"]);
				t["default"] = u
			},
			571: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = a(o(494)),
					r = a(o(436));

				function a(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function i(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var l = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.registerFactory("canvas", r["default"]), o
					}
					return i(t, e), t.prototype.parseChartAttr = function (t) {
						e.prototype.parseChartAttr.call(this, t), this.config.drawTrendRegion = 0
					}, t.getName = function () {
						return "MSDybaseCartesian3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this), this.config.is3D = !0
					}, t.prototype.getName = function () {
						return "MSDybaseCartesian3D"
					}, t
				}(n["default"]);
				t["default"] = l
			},
			572: function (e, t, o) {
				"use strict";
				t.__esModule = !0, t["default"] = function (e) {
					var t = e.getFromEnv("dataSource").dataset,
						o = e.getChildren().canvas[0].getChildren("vCanvas"),
						n = o[0],
						r = o[1],
						u = void 0,
						f = e.getFromEnv("chartConfig").isdual,
						p = void 0,
						d = {
							vCanvasDatasetsDef0: {},
							vCanvasDatasetsDef1: {}
						},
						h = void 0,
						g = void 0,
						b = void 0,
						y = void 0,
						m = void 0,
						v = void 0,
						_ = void 0,
						C = void 0,
						w = {},
						D = {};
					for (t || e.setChartMessage(), p = 0; p < t.length; p++) "s" === (v = (u = t[p]).parentyaxis || "").toLowerCase() && f ? (m = (0,
						i.pluck)(u.renderas, e.config.sDefaultDatasetType), _ = r, C = D, g = d.vCanvasDatasetsDef1) : (m = (0, i.pluck)(u.renderas, e.config
						.defaultDatasetType), _ = n, C = w, g = d.vCanvasDatasetsDef0), m = e.getDSType(m, "s" === v.toLowerCase()), (y = e.getDSGroupdef(
						m, v)) && ((0, i.componentFactory)(_, a["default"], s), C[(h = _.getChildren(s)[0]).getName()] = !0, (0, i.componentFactory)(h,
						y, c), C[y.getName().toLowerCase()] = !0), C[m.toLowerCase()] = !0, g[m] ? (g[m].conf.push(u), g[m].indices.push(p)) : (g[m] = {},
						g[m].indices = [p], g[m].classDef = e.getDSdef(m), g[m].conf = [u], g[m].pYAxis = v.toLowerCase(), g[m].parent = y ? h.getChildren(
							c)[0] : _);
					for (var O in d)
						if (d.hasOwnProperty(O))
							for (m in g = d[O]) g.hasOwnProperty(m) && ("group" === (b = g[m]).parent.getType() && b.parent.configure(b.conf), (0, i.datasetFactory)
								(b.parent, b.classDef, "dataset_" + m, b.conf.length, b.conf, b.indices));
						(0, l.removeComponents)(o[0], Object.keys(w)), (0, l.removeComponents)(o[1], Object.keys(D))
				};
				var n, r = o(441),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					},
					i = o(125),
					l = o(497);
				var c = "multiseriesColumnManager",
					s = "multiseriesColumnManager3D"
			},
			573: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(570),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			574: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(508),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			575: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(576),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			576: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = l(o(577)),
					r = l(o(443)),
					a = l(o(448)),
					i = l(o(524));

				function l(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var s = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return c(t, e), t.getName = function () {
						return "StackedColumn3DLine"
					}, t.prototype.getName = function () {
						return "StackedColumn3DLine"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.friendlyName = "Stacked 3D Column and Line Chart", t.use3dlineshift = 1, t.isstacked = !0, t.stack100percent = 0,
							t.showplotborder = 0, t.enablemousetracking = !0
					}, t.prototype.getDSdef = function (e) {
						return "line" === e ? a["default"] : r["default"]
					}, t.prototype.getDSGroupdef = function (e) {
						return "column" === e ? i["default"] : undefined
					}, t.prototype.getDSType = function (e) {
						return e && "line" === e.toLowerCase() ? "line" : "column"
					}, t
				}(n["default"]);
				t["default"] = s
			},
			577: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = f(o(562)),
					r = f(o(443)),
					a = f(o(509)),
					i = f(o(513)),
					l = f(o(449)),
					c = f(o(448)),
					s = f(o(515)),
					u = f(o(572));

				function f(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function p(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var d = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.defaultPlotShadow = 1, o.registerFactory("dataset", u["default"], ["vCanvas"]), o
					}
					return p(t, e), t.getName = function () {
						return "MSCombi3D"
					}, t.prototype.getName = function () {
						return "MSCombi3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.friendlyName = "Multi-series 3D Combination Chart", t.defaultDatasetType = "column3d", t.showplotborder = 0, t.enablemousetracking = !
							0, t.anchorborderthickness = 1, t.anchorimageurl = void 0, t.anchorimagepadding = 1, t.anchorsides = 1, t.anchoralpha = void 0,
							t.anchorbgalpha = "100", t.anchorimagealpha = "100", t.anchorimagescale = 100, t.anchorstartangle = 90, t.anchorshadow = 0, t.anchorbgcolor =
							void 0, t.anchorbordercolor = void 0, t.anchorradius = 3, t.showvalues = 1, t.plotfillalpha = "70", t.linedashlen = 5, t.linedashgap =
							4, t.linedashed = void 0, t.linealpha = "100", t.linethickness = 2, t.drawfullareaborder = 1, t.connectnulldata = 0
					}, t.prototype.getDSdef = function (e) {
						return "splinearea" === e ? a["default"] : "spline" === e ? i["default"] : "area" === e ? l["default"] : "line" === e ? c[
							"default"] : r["default"]
					}, t.prototype.getDSGroupdef = function (e) {
						return "column3d" === e ? s["default"] : void 0
					}, t.prototype.getDSType = function () {
						var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
						return "area" === e.toLowerCase() ? "area" : "line" === e.toLowerCase() ? "line" : "spline" === e.toLowerCase() ? "spline" :
							"splinearea" === e.toLowerCase() ? "splinearea" : "column3d"
					}, t
				}(n["default"]);
				t["default"] = d
			},
			578: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(579),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			579: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = c(o(580)),
					r = c(o(431)),
					a = c(o(448)),
					i = c(o(513)),
					l = c(o(524));

				function c(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function s(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var u = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return s(t, e), t.getName = function () {
						return "StackedColumn2DLine"
					}, t.prototype.getName = function () {
						return "StackedColumn2DLine"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Stacked Column and Line Chart", t.defaultDatasetType = "column", t.isstacked = !0, t.stack100percent = 0, t.enablemousetracking = !
							0
					}, t.prototype.getDSdef = function (e) {
						return "spline" === e ? i["default"] : "line" === e ? a["default"] : r["default"]
					}, t.prototype.getDSGroupdef = function (e) {
						return "column" === e ? l["default"] : void 0
					}, t.prototype.getDSType = function () {
						return "line" === (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "").toLowerCase() ? "line" : "column"
					}, t
				}(n["default"]);
				t["default"] = u
			},
			580: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = f(o(550)),
					r = f(o(431)),
					a = f(o(449)),
					i = f(o(448)),
					l = f(o(509)),
					c = f(o(513)),
					s = f(o(515)),
					u = f(o(496));

				function f(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function p(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var d = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.registerFactory("dataset", u["default"], ["vCanvas"]), o
					}
					return p(t, e), t.getName = function () {
						return "MSCombi2D"
					}, t.prototype.getName = function () {
						return "MSCombi2D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Multi-series Combination Chart", t.defaultDatasetType = "column", t.enablemousetracking = !0, t.showzeroplaneontop =
							0
					}, t.prototype.getDSdef = function (e) {
						return "splinearea" === e ? l["default"] : "spline" === e ? c["default"] : "area" === e ? a["default"] : "line" === e ? i[
							"default"] : r["default"]
					}, t.prototype.getDSGroupdef = function (e) {
						return "column" === e ? s["default"] : void 0
					}, t.prototype.getDSType = function () {
						var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
						return "splinearea" === e.toLowerCase() ? "splinearea" : "spline" === e.toLowerCase() ? "spline" : "area" === e.toLowerCase() ?
							"area" : "line" === e.toLowerCase() ? "line" : "column"
					}, t
				}(n["default"]);
				t["default"] = d
			},
			581: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(582),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			582: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = l(o(577)),
					r = l(o(443)),
					a = l(o(448)),
					i = l(o(515));

				function l(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var s = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.defaultPlotShadow = 1, o
					}
					return c(t, e), t.getName = function () {
						return "MSColumnLine3D"
					}, t.prototype.getName = function () {
						return "MSColumnLine3D"
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.is3D = !0, t.friendlyName = "Multi-series Column and Line Chart", t.use3dlineshift = 1, t.showplotborder = 0, t.enablemousetracking = !
							0
					}, t.prototype.getDSdef = function (e) {
						return "line" === e ? a["default"] : r["default"]
					}, t.prototype.getDSGroupdef = function (e) {
						return "column3d" === e ? i["default"] : undefined
					}, t.prototype.getDSType = function (e) {
						return e && "line" === e.toLowerCase() ? "line" : "column3d"
					}, t
				}(n["default"]);
				t["default"] = s
			},
			583: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(577),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			584: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(580),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			585: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(586),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			586: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = c(o(458)),
					r = c(o(587)),
					a = c(o(589)),
					i = c(o(460)),
					l = o(125);

				function c(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function s(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var u = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.isValueAbs = !0, o.distributedColumns = !0, o.stack100percent = !0, o.isStacked = !0, o.showsum = 1, o.registerFactory(
							"dataset",
							function (e) {
								(0, i["default"])(e);
								var t = e.getChildren().canvas[0].getChildren("vCanvas")[0],
									o = e.config.defaultDatasetType || "";
								t.getChildren("datasetGroup_" + o)[0].addToEnv("categories", e.getFromEnv("dataSource").categories)
							}, ["vCanvas"]), o
					}
					return s(t, e), t.getName = function () {
						return "Marimekko"
					}, t.prototype._checkInvalidSpecificData = function () {
						var e = this.getFromEnv("dataSource"),
							t = e.dataset,
							o = e.categories;
						if (!(t && o && 0 !== o.length && o[0].category && o[0].category instanceof Array)) return !0
					}, t.prototype.getName = function () {
						return "Marimekko"
					}, t.prototype.parseChartAttr = function (t) {
						e.prototype.parseChartAttr.call(this, t), this.config.showXAxisPercentValues = (0, l.pluckNumber)(t.chart && t.chart.showxaxispercentvalues,
							1)
					}, t.prototype.__setDefaultConfig = function () {
						e.prototype.__setDefaultConfig.call(this);
						var t = this.config;
						t.friendlyName = "Marimekko Chart", t.defaultDatasetType = "marimekko", t.isstacked = !0, t.showpercentvalues = 0, t.usepercentdistribution =
							1, t.showsum = 1, t.enablemousetracking = !0
					}, t.prototype.getDSdef = function () {
						return r["default"]
					}, t.prototype.getDSGroupdef = function () {
						return a["default"]
					}, t
				}(n["default"]);
				t["default"] = u
			},
			587: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = l(o(431)),
					r = o(125),
					a = l(o(588)),
					i = o(132);

				function l(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				}

				function c(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var s = r.regex.dropHypeash,
					u = Math,
					f = u.round,
					p = u.abs;
				(0, i.addDep)({
					name: "marimekkoAnimation",
					type: "animationRule",
					extension: a["default"]
				});
				var d = function (e) {
					function t() {
						! function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function (e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this));
						return o.config.groupName = "column", o
					}
					return c(t, e), t.prototype.getType = function () {
						return "dataset"
					}, t.prototype.getName = function () {
						return "marimekko"
					}, t.prototype.configure = function (t) {
						(0, r.fcEach)(t.data, function (e) {
							e && (e.value = p(e.value))
						}), e.prototype.configure.call(this, t)
					}, t.prototype._addLegend = function () {
						var e, t, o, n, a = this.config,
							i = this.getFromEnv("legend"),
							l = (0, r.pluckNumber)(this.getFromEnv("chart-attrib").useplotgradientcolor, 1),
							c = a.legendSymbolColor;
						e = (0, r.getLightColor)(c, 60).replace(s, r.HASHSTRING), t = l ? {
							FCcolor: {
								color: c + "," + c + "," + (0, r.getLightColor)(c, 40) + "," + c + "," + c,
								ratio: "0,70,30",
								angle: 270,
								alpha: "100,100,100,100,100"
							}
						} : {
							FCcolor: {
								color: c,
								angle: 0,
								ratio: "0",
								alpha: "100"
							}
						}, o = {
							enabled: a.includeInLegend,
							type: this.type,
							label: (0, r.getFirstValue)(this.config.JSONData.seriesname)
						}, a.includeinlegend ? ((n = i.getItem(this.config.legendItemId)) || (this.config.legendItemId = i.createItem(this), n = i.getItem(
							this.config.legendItemId), this.addExtEventListener("fc-click", function () {
							n.itemClickFn()
						}, n)), n.configure(o), n.setStateCosmetics("default", {
							symbol: {
								fill: (0, r.toRaphaelColor)(t),
								rawFillColor: t.FCcolor.color,
								stroke: (0, r.toRaphaelColor)(e)
							}
						}), this.getState("visible") ? n.removeLegendState("hidden") : n.setLegendState("hidden")) : this.config.legendItemId && i.disposeItem(
							this.config.legendItemId)
					}, t.prototype.searchIndex = function (e, t) {
						for (var o, n, r = this.getFromEnv("xAxis"), a = 0, i = t.length - 1; a <= i;)
							if (o = Math.round((a + i) / 2) || 0, (n = r.getPixel(t[o].x) + t[o].columnWidth / 2) < e) a = o + 1;
							else {
								if (!(n > e)) return o;
								i = o - 1
							}
						return a
					}, t.prototype.allocatePosition = function () {
						this.getLinkedParent()._setStackDimensions(), e.prototype.allocatePosition.call(this)
					}, t.prototype._getHoveredPlot = function (e, t) {
						var o, n, r, a, i = this.getLinkedParent(),
							l = i.getstackConf(),
							c = this.getFromEnv("chartConfig"),
							s = i.config,
							u = c.plotborderthickness,
							f = c.showplotborder,
							p = l.length - 1;
						return n = e + (o = (o = (u = f ? u : 0) / 2) % 2 == 0 ? o + 1 : Math.round(o)), a = r && s.datasetIndex || this.searchIndex(n,
								l), s.datasetIndex || (s.datasetIndex = a), (r = this._checkPointerOverColumn(a, e, t)) ? delete s.datasetIndex : this.index ===
							p && delete s.datasetIndex, r
					}, t.prototype.setColumnPosition = function () {
						return this
					}, t.prototype.fineTunePlotDimension = function (e, t, o, n, r) {
						var a = this.getLinkedParent().getstackConf(),
							i = this.getFromEnv("chart"),
							l = i.config.plotborderthickness,
							c = i.getChildren("canvas")[0].config,
							s = c.canvasBorderWidth > 0,
							u = c.canvasRight,
							p = c.canvasTop,
							d = c.canvasLeft;
						return a.length ? (e -= (n = a[r].columnWidth) / 2, parseInt(t, 10) <= p && (o -= p - t - +s, t = p - +s), l <= 1 && (f(e) <= d &&
							(n += e, n -= e = d - l / 2 + +!!l - +s), f(e + n) >= u && (n = u - e + l / 2 - +!!l + +s)), {
							xPos: e,
							yPos: t,
							width: n,
							height: o
						}) : {
							xPos: e,
							yPos: t,
							width: n,
							height: o
						}
					}, t
				}(n["default"]);
				t["default"] = d
			},
			588: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n = o(125);
				t["default"] = {
					"initial.dataset.marimekko": function () {
						var e = this,
							t = e.getFromEnv("chart"),
							o = t.config.yDepth || 0,
							r = e.getFromEnv("yAxis");
						return {
							"rect.appearing": function (a) {
								var i, l, c, s, u = r.getPixel(r.getAxisBase()) + (t.isBar ? -o : o),
									f = a.attr;
								return i = f.y, l = f.height, s = Math.sign(i + l / 2 - u), c = i + l, [{
									initialAttr: function () {
										var e = {};
										return e.y = c, e.height = 0, e
									},
									slot: "plot",
									startEnd: function () {
										return n.animHelperFN.getTimeByValue({
											start: 0,
											end: .6
										}, {
											startPx: u,
											endPx: 1 === s ? e.config.yAxisMaxPixel : e.config.yAxisMinPixel
										}, {
											startPx: c,
											endPx: 1 === s ? f.y + f.height : f.y
										})
									},
									effect: "linear"
								}]
							},
							"group.appearing": null,
							"group.updating": null,
							"plotLabel.appearing": [{
								initialAttr: {
									opacity: 0
								},
								slot: "final"
							}],
							"*": null
						}
					}
				}
			},
			589: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(524),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					},
					i = o(125);

				function l(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
						for (var o = Object.getOwnPropertyNames(t), n = 0; n < o.length; n++) {
							var r = o[n],
								a = Object.getOwnPropertyDescriptor(t, r);
							a && a.configurable && e[r] === undefined && Object.defineProperty(e, r, a)
						}
					}(e, t))
				}
				var c = function (e) {
					function t() {
						return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, e.apply(this, arguments))
					}
					return l(t, e), t.prototype.getType = function () {
						return "group"
					}, t.prototype.getName = function () {
						return "marimekkoStackgroup"
					}, t.prototype.getstackConf = function () {
						return this.config.stackConf
					}, t.prototype._setStackPosition = function () {
						e.prototype._setStackPosition.call(this);
						var t, o, n, r, a, i, l = this.config,
							c = l.stackConf || (l.stackConf = []),
							s = l.stackValues,
							u = this.getFromEnv("categories")[0].category,
							f = this.getFromEnv("number-formatter"),
							p = 0,
							d = 0,
							h = 0,
							g = this.getFromEnv("xAxis"),
							b = g.getVisibleConfig(),
							y = b.minValue,
							m = b.maxValue - y,
							v = y;
						for (r = 0, a = s.length; r < a; r++) d += s[r] && s[r].positive || 0;
						for (l.totalSumValue = d, r = 0; r < u.length; r++)(o = u[r]).widthpercent && (p += f.getCleanValue(o.widthpercent));
						for (100 === p && (l.setUserWidth = 1), t = this.getStackSumPercent(), r = 0, a = s.length; r < a; r++)(n = c[r]) || (n = c[r] = {}),
							h += t[r] / 100, i = t[r] / 100 * m / 2 + v, v = h * m + y, n.x = i, g.updateTicksValues(r, {
								x: i
							})
					}, t.prototype.getStackSumPercent = function () {
						var e, t = this.config,
							o = t.stackValues,
							n = t.totalSumValue,
							r = this.getFromEnv("number-formatter"),
							a = this.getFromEnv("categories")[0].category,
							i = t.setUserWidth,
							l = [];
						for (e = 0; e < o.length; e++) l[e] = i ? r.getCleanValue(a[e].widthpercent) : (o[e] && o[e].positive || 0) / n * 100;
						return l
					}, t.prototype.draw = function () {
						e.prototype.draw.call(this), this.drawLabel()
					}, t.prototype.createContainer = function () {
						e.prototype.createContainer.call(this);
						var t = this.getLinkedParent();
						!this.getContainer("commonLabelContainer") && this.addContainer("commonLabelContainer", function (e, t, o) {
							return o.getFromEnv("animationManager").setAnimation({
								el: "group",
								attr: {
									name: e
								},
								container: t,
								component: o,
								label: "group"
							})
						}("manager-commonLabelContainer", t.getChildContainer("vcanvasLabelGroup"), this))
					}, t.prototype.drawLabel = function () {
						var e, t, o, n, r, a, l, c, s, u, f, p, d, h, g, b = this.config,
							y = this.getFromEnv("smartLabel"),
							m = this.getFromEnv("animationManager"),
							v = this.getStackSumPercent(),
							_ = this.getFromEnv("chart-attrib"),
							C = this.getChildren("dataset"),
							w = b.stackConf,
							D = this.getContainer("commonLabelContainer"),
							O = this.getFromEnv("number-formatter"),
							S = 0,
							P = this.getFromEnv("chartConfig"),
							k = P.canvasBottom,
							x = this.getFromEnv("xAxis"),
							M = this.getFromEnv("style"),
							E = P.dataLabelStyle,
							N = v.length,
							A = b.stackValues,
							j = P.showXAxisPercentValues,
							T = this.getGraphicalElement("commonLabels") || [],
							F = T.length;
						if (y.setStyle(E), j) {
							for (p = (0, i.pluck)(E.backgroundColor, "#ffffff"), f = (0, i.pluck)(E.borderColor === i.BLANKSTRING ? "#" + M.inCancolor : E
									.borderColor, "#000000"), d = (0, i.pluck)(E.borderThickness, 1), a = 0; a < N - 1; a++) A[a] && (S += v[a], l = O.percentValue(
								S), n = x.getPixel(w[a].x) + w[a].columnWidth / 2, r = k, u = T[a], A[a].positive !== A[a].negative ? (c = {
								text: l,
								fill: E.color,
								"text-bound": [p, f, d, E.borderPadding, E.borderRadius, E.borderDash],
								"line-height": E.lineHeight,
								visibility: i.visibleStr
							}, r = r - y.getOriSize(l).height / 2 - d, c.x = n, c.y = r, u && u.show(), s = m.setAnimation({
								el: u || "text",
								container: D,
								attr: c,
								label: "text",
								component: this
							}), u || this.addGraphicalElement("commonLabels", s, !0)) : (l = "", u && u.hide()));
							for (var B = a; B < F; B++) T[B].hide()
						}
						for (h = 0; h < C.length; h++)
							for (o = (t = C[h]).components.data, e = t.config.JSONData, g = 0; g < o.length; g++) o[g].config.finalTooltext = (0, i.parseTooltext)
								(o[g].config.finalTooltext, [111], {
									xAxisPercentValue: v[g] && v[g].toPrecision(4) + "%"
								}, o, _, e)
					}, t.prototype._getXpos = function (e) {
						return this.getFromEnv("xAxis").getPixel(this.config.stackConf[e].x)
					}, t.prototype._setStackDimensions = function () {
						var e, t, o, n, r, a, i = this.config,
							l = i.stackValues,
							c = this.getFromEnv("categories")[0].category,
							s = 0,
							u = this.getFromEnv("number-formatter"),
							f = this.getStackSumPercent(),
							p = this.getFromEnv("canvasConfig").canvasWidth,
							d = i.stackConf || (i.stackConf = []);
						for (e = 0; e < c.length; e++)(t = c[e]).widthpercent && (s += u.getCleanValue(t.widthpercent));
						for (100 === s && (o = i.setUserWidth = 1), e = 0, n = l.length; e < n; e++) t = c[e], (r = d[e]) || (r = d[e] = {}), a = o ? u
							.getCleanValue(t.widthpercent) / 100 : f[e] / 100, r.columnWidth = a * p
					}, t
				}(a["default"]);
				t["default"] = c
			},
			590: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(549),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			591: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(553),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			592: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(558),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			593: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(594),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			595: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(561),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			},
			596: function (e, t, o) {
				"use strict";
				t.__esModule = !0;
				var n, r = o(517),
					a = (n = r) && n.__esModule ? n : {
						"default": n
					};
				t["default"] = a["default"]
			}
		}
	])
});
//# sourceMappingURL=http://localhost:3052/3.13.5-sr.1/map/eval/fusioncharts.charts.js.map