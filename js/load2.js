(this["webpackJsonppeeps-generator"] = this["webpackJsonppeeps-generator"] || []).push([[0], {
    158: function(e, t, a) {
        e.exports = a(573)
    },
    572: function(e, t, a) {},
    573: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0)
          , o = a.n(n)
          , r = a(56)
          , c = a.n(r)
          , i = a(4)
          , l = a(2)
          , s = a.n(l)
          , d = a(5)
          , u = {
            rotationDegree: 0,
            flipDirection: 1,
            pressedKey: "",
            wheelDirection: "",
            wheelActive: !1,
            scaleVector: 1,
            svgTransform: {},
            pickedHair: "HatHip",
            pickedBody: "PointingUp",
            pickedFace: "Smile",
            pickedFacialHair: "None",
            pickedAccessory: "None",
            pickedSection: "Accessories",
            strokeColor: "#000000",
            backgroundBasicColor: "#FFD55A",
            backgroundFirstGradientColor: "#81087F",
            backgroundSecondGradientColor: "#ffd402",
            firstColor: "#81087F",
            secondColor: "#ffd402",
            isFrameTransparent: !1
        }
          , p = o.a.createContext({
            state: u,
            dispatch: function() {}
        })
          , m = function(e, t) {
            switch (t.type) {
            case "SET_ROTATION_DEGREE":
                return e.rotationDegree = t.payload,
                Object.assign({}, e);
            case "SET_FLIP_DIRECTION":
                return e.flipDirection = t.payload,
                Object.assign({}, e);
            case "SET_PRESSED_KEY":
                return e.pressedKey = t.payload,
                Object.assign({}, e);
            case "SET_WHEEL_DIRECTION":
                return e.wheelDirection = t.payload,
                Object.assign({}, e);
            case "SET_IS_WHEEL_ACTIVE":
                return e.wheelActive = t.payload,
                Object.assign({}, e);
            case "SET_SVG_TRANSFORM":
                return e.svgTransform = t.payload,
                Object.assign({}, e);
            case "SET_SCALE_VECTOR":
                return e.scaleVector = t.payload,
                Object.assign({}, e);
            case "SET_HAIR":
                return e.pickedHair = t.payload,
                Object.assign({}, e);
            case "SET_BODY":
                return e.pickedBody = t.payload,
                Object.assign({}, e);
            case "SET_FACE":
                return e.pickedFace = t.payload,
                Object.assign({}, e);
            case "SET_FACIAL_HAIR":
                return e.pickedFacialHair = t.payload,
                Object.assign({}, e);
            case "SET_ACCESSORY":
                return e.pickedAccessory = t.payload,
                Object.assign({}, e);
            case "SET_PIECE_SECTION":
                return e.pickedSection = t.payload,
                Object.assign({}, e);
            case "SET_STROKE_COLOR":
                var a = t.payload;
                return "object" !== typeof t.payload || t.payload.degree || (a.degree = e.strokeColor.degree,
                a.secondColor || (a.secondColor = e.strokeColor.secondColor),
                a.firstColor || (a.firstColor = e.strokeColor.firstColor)),
                e.strokeColor = a,
                Object.assign({}, e);
            case "SET_BACKGROUND_BASIC_COLOR":
                var n = t.payload;
                return "object" !== typeof t.payload || t.payload.degree || (n.degree = e.backgroundBasicColor.degree,
                n.secondColor || (n.secondColor = e.backgroundBasicColor.secondColor),
                n.firstColor || (n.firstColor = e.backgroundBasicColor.firstColor)),
                e.backgroundBasicColor = n,
                Object.assign({}, e);
            case "SET_FOREGROUND_FIRST_COLOR":
                return e.firstColor = t.payload,
                Object.assign({}, e);
            case "SET_FOREGROUND_SECOND_COLOR":
                return e.secondColor = t.payload,
                Object.assign({}, e);
            case "SET_BACKGROUND_FIRST_GRADIENT_COLOR":
                return e.backgroundFirstGradientColor = t.payload,
                Object.assign({}, e);
            case "SET_BACKGROUND_SECOND_GRADIENT_COLOR":
                return e.backgroundSecondGradientColor = t.payload,
                Object.assign({}, e);
            case "SET_FRAME_TYPE":
                return e.isFrameTransparent = t.payload,
                Object.assign({}, e)
            }
        }
          , f = function(e) {
            var t = e.children
              , a = Object(n.useReducer)(m, u)
              , r = Object(d.a)(a, 2)
              , c = r[0]
              , i = r[1];
            return o.a.createElement(p.Provider, {
                value: {
                    state: c,
                    dispatch: i
                }
            }, t)
        }
          , E = function() {
            return Object(n.useContext)(p)
        }
          , b = a(15)
          , g = function(e, t) {
            switch (t.type) {
            case "init":
            case "setKnobPosition":
                return Object(i.a)({}, e, {}, t.payload);
            case "onMouseDown":
            case "onMouseUp":
            case "setInitialKnobPosition":
                return Object(i.a)({}, e, {}, t.payload);
            default:
                throw new Error
            }
        }
          , y = null;
        "undefined" !== typeof window && (y = window);
        var v = function(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y
              , o = Object(n.useRef)(null);
            Object(n.useEffect)((function() {
                o.current = t
            }
            ), [t]),
            Object(n.useEffect)((function() {
                if (null !== y && (a && a.addEventListener)) {
                    var t = function(e) {
                        return o.current(e)
                    };
                    return a.addEventListener(e, t, {
                        passive: !1
                    }),
                    function() {
                        a.removeEventListener(e, t)
                    }
                }
            }
            ), [e, a])
        }
          , h = function(e) {
            var t = e.isDragging
              , a = e.knobPosition
              , r = e.knobColor
              , c = e.knobRadius
              , l = void 0 === c ? 12 : c
              , s = e.knobSize
              , d = void 0 === s ? 36 : s
              , u = e.onMouseDown
              , p = e.trackSize
              , m = e.children
              , f = {
                knob: {
                    position: "absolute",
                    left: "-".concat(d / 2 - p / 2, "px"),
                    top: "-".concat(d / 2 - p / 2, "px"),
                    cursor: "grab",
                    zIndex: 3
                },
                dragging: {
                    cursor: "grabbing"
                },
                pause: {
                    animationPlayState: "paused"
                },
                animation: {
                    transformOrigin: "50% 50%",
                    animationTimingFunction: "ease-out",
                    animation: "pulse 1500ms infinite"
                }
            };
            return o.a.createElement("div", {
                style: Object(i.a)({
                    transform: "translate(".concat(a.x, "px, ").concat(a.y, "px)")
                }, f.knob, {}, t && f.dragging),
                onMouseDown: u,
                onTouchStart: u
            }, o.a.createElement("svg", {
                width: "".concat(d, "px"),
                height: "".concat(d, "px"),
                viewBox: "0 0 ".concat(d, " ").concat(d)
            }, o.a.createElement("circle", {
                style: Object(i.a)({}, f.animation, {}, t && f.pause),
                fill: r,
                fillOpacity: "0.2",
                stroke: "none",
                cx: d / 2,
                cy: d / 2,
                r: d / 2
            }), o.a.createElement("circle", {
                fill: r,
                stroke: "none",
                cx: d / 2,
                cy: d / 2,
                r: l
            }), m || o.a.createElement(n.Fragment, null, o.a.createElement("rect", {
                fill: "#FFFFFF",
                x: "14",
                y: "14",
                width: "8",
                height: "1"
            }), o.a.createElement("rect", {
                fill: "#FFFFFF",
                x: "14",
                y: "17",
                width: "8",
                height: "1"
            }), o.a.createElement("rect", {
                fill: "#FFFFFF",
                x: "14",
                y: "20",
                width: "8",
                height: "1"
            }))))
        }
          , O = function(e) {
            var t = e.labelColor
              , a = e.labelBottom
              , n = e.labelFontSize
              , r = e.valueFontSize
              , c = e.appendToValue
              , l = e.prependToValue
              , s = e.verticalOffset
              , d = e.hideLabelValue
              , u = e.label
              , p = e.value
              , m = {
                labels: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "".concat(t),
                    userSelect: "none",
                    zIndex: 1
                },
                value: {
                    fontSize: "".concat(r),
                    position: "relative"
                },
                bottomMargin: {
                    marginBottom: "calc(".concat(s, ")")
                },
                appended: {
                    position: "absolute",
                    right: "0",
                    top: "0",
                    transform: "translate(100%, 0)"
                },
                prepended: {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    transform: "translate(-100%, 0)"
                },
                hide: {
                    display: "none"
                }
            };
            return o.a.createElement("div", {
                style: Object(i.a)({}, m.labels, {}, d && m.hide)
            }, a || o.a.createElement("div", {
                style: {
                    fontSize: n
                }
            }, u), o.a.createElement("div", {
                style: Object(i.a)({}, m.value, {}, !a && m.bottomMargin)
            }, o.a.createElement("code", null, o.a.createElement("span", {
                style: m.prepended
            }, l), p, o.a.createElement("span", {
                style: m.appended
            }, c))), a && o.a.createElement("div", {
                style: {
                    fontSize: n
                }
            }, u))
        }
          , C = function(e) {
            var t = e.width
              , a = e.label
              , n = e.direction
              , r = e.strokeDasharray
              , c = e.strokeDashoffset
              , i = e.progressColorFrom
              , l = e.progressColorTo
              , s = e.trackColor
              , d = e.progressSize
              , u = e.trackSize
              , p = e.svgFullPath
              , m = e.radiansOffset
              , f = e.progressLineCap
              , E = {
                svg: {
                    position: "relative",
                    zIndex: 2
                },
                path: {
                    transform: "rotate(".concat(m, "rad) ").concat(-1 === n ? "scale(-1, 1)" : "scale(1, 1)"),
                    transformOrigin: "center center"
                }
            }
              , b = u / 2
              , g = t / 2 - b;
            return o.a.createElement("svg", {
                width: "".concat(t, "px"),
                height: "".concat(t, "px"),
                viewBox: "0 0 ".concat(t, " ").concat(t),
                overflow: "visible",
                style: E.svg
            }, o.a.createElement("defs", null, o.a.createElement("linearGradient", {
                id: a,
                x1: "100%",
                x2: "0%"
            }, o.a.createElement("stop", {
                offset: "0%",
                stopColor: i
            }), o.a.createElement("stop", {
                offset: "100%",
                stopColor: l
            }))), o.a.createElement("circle", {
                strokeWidth: u,
                fill: "none",
                stroke: s,
                cx: t / 2,
                cy: t / 2,
                r: g
            }), o.a.createElement("path", {
                style: E.path,
                ref: p,
                strokeDasharray: r,
                strokeDashoffset: c,
                strokeWidth: d,
                strokeLinecap: "round" !== f ? "butt" : "round",
                fill: "none",
                stroke: "url(#".concat(a, ")"),
                d: "\n                        M ".concat(t / 2, ", ").concat(t / 2, "\n                        m 0, -").concat(t / 2 - b, "\n                        a ").concat(t / 2 - b, ",").concat(t / 2 - b, " 0 0,1 0,").concat(t - 2 * b, "\n                        a -").concat(t / 2 - b, ",-").concat(t / 2 - b, " 0 0,1 0,-").concat(t - 2 * b, "\n                    ")
            }))
        }
          , k = {
            pageXOffset: 0,
            pageYOffset: 0
        }
          , S = {
            documentElement: {
                scrollLeft: 0,
                scrollTop: 0
            }
        };
        "undefined" !== typeof window && (k = window,
        S = document);
        var F = "ontouchstart"in k
          , T = {
            DOWN: F ? "touchstart" : "mousedown",
            UP: F ? "touchend" : "mouseup",
            MOVE: F ? "touchmove" : "mousemove"
        }
          , _ = {
            top: Math.PI / 2,
            right: 0,
            bottom: -Math.PI / 2,
            left: -Math.PI
        }
          , j = function(e) {
            return e < 0 ? -1 : 1
        }
          , N = function(e) {
            return e * Math.PI / 180
        }
          , x = function(e, t) {
            for (var a = [], n = e; n <= t; n++)
                a.push(n);
            return a
        }
          , R = function(e) {
            var t = e.current.getBoundingClientRect()
              , a = k.pageXOffset || S.documentElement.scrollLeft
              , n = k.pageYOffset || S.documentElement.scrollTop;
            return {
                top: t.top + n,
                left: t.left + a
            }
        }
          , w = {
            circularSlider: {
                position: "relative",
                display: "inline-block",
                opacity: 0,
                transition: "opacity 1s ease-in"
            },
            mounted: {
                opacity: 1
            }
        }
          , B = function(e) {
            var t = e.label
              , a = void 0 === t ? "ANGLE" : t
              , r = e.width
              , c = void 0 === r ? 280 : r
              , l = e.direction
              , s = void 0 === l ? 1 : l
              , u = e.min
              , p = void 0 === u ? 0 : u
              , m = e.max
              , f = void 0 === m ? 360 : m
              , E = e.knobColor
              , y = void 0 === E ? "#4e63ea" : E
              , k = e.knobPosition
              , S = void 0 === k ? "top" : k
              , F = e.labelColor
              , B = void 0 === F ? "#272b77" : F
              , D = e.labelBottom
              , A = void 0 !== D && D
              , I = e.labelFontSize
              , M = void 0 === I ? "1rem" : I
              , L = e.valueFontSize
              , P = void 0 === L ? "3rem" : L
              , W = e.appendToValue
              , K = void 0 === W ? "" : W
              , H = e.prependToValue
              , G = void 0 === H ? "" : H
              , V = e.verticalOffset
              , z = void 0 === V ? "1.5rem" : V
              , U = e.hideLabelValue
              , Y = void 0 !== U && U
              , q = e.progressColorFrom
              , X = void 0 === q ? "#80C3F3" : q
              , J = e.progressColorTo
              , $ = void 0 === J ? "#4990E2" : J
              , Q = e.progressSize
              , Z = void 0 === Q ? 8 : Q
              , ee = e.trackColor
              , te = void 0 === ee ? "#DDDEFB" : ee
              , ae = e.trackSize
              , ne = void 0 === ae ? 8 : ae
              , oe = e.data
              , re = void 0 === oe ? [] : oe
              , ce = e.dataIndex
              , ie = void 0 === ce ? 0 : ce
              , le = e.progressLineCap
              , se = void 0 === le ? "round" : le
              , de = e.children
              , ue = e.onChange
              , pe = void 0 === ue ? function(e) {}
            : ue
              , me = e.style
              , fe = void 0 === me ? {} : me
              , Ee = {
                mounted: !1,
                isDragging: !1,
                width: c,
                radius: c / 2,
                knobPosition: S,
                label: 0,
                data: re,
                radians: 0,
                offset: 0,
                knob: {
                    x: 0,
                    y: 0
                },
                dashFullArray: 0,
                dashFullOffset: 0
            }
              , be = Object(n.useReducer)(g, Ee)
              , ge = Object(d.a)(be, 2)
              , ye = ge[0]
              , ve = ge[1]
              , he = Object(n.useRef)(null)
              , Oe = Object(n.useRef)(null)
              , Ce = Object(n.useCallback)((function(e) {
                var t = ye.radius - ne / 2
                  , a = e + _[S]
                  , n = (a > 0 ? a : 2 * Math.PI + a) * (360 / (2 * Math.PI))
                  , o = n / 360 * ye.dashFullArray;
                n = -1 === j(s) ? 360 - n : n;
                var r = (ye.data.length - 1) / 360
                  , c = Math.round(n * r);
                ye.data[c] !== ye.label && pe(ye.data[c]),
                ve({
                    type: "setKnobPosition",
                    payload: {
                        dashFullOffset: -1 === j(s) ? o : ye.dashFullArray - o,
                        label: ye.data[c],
                        knob: {
                            x: t * Math.cos(e) + t,
                            y: t * Math.sin(e) + t
                        }
                    }
                })
            }
            ), [ye.dashFullArray, ye.radius, ye.data, ye.label, S, s, pe])
              , ke = Object(n.useCallback)((function(e) {
                if (ye.isDragging) {
                    var t;
                    e.preventDefault(),
                    "touchmove" === e.type && (t = e.changedTouches[0]);
                    var a = ("touchmove" === e.type ? t.pageX : e.pageX) - (R(he).left + ye.radius)
                      , n = ("touchmove" === e.type ? t.pageY : e.pageY) - (R(he).top + ye.radius)
                      , o = Math.atan2(n, a);
                    Ce(o)
                }
            }
            ), [ye.isDragging, ye.radius, Ce]);
            return Object(n.useEffect)((function() {
                ve({
                    type: "init",
                    payload: {
                        mounted: !0,
                        data: ye.data.length ? Object(b.a)(ye.data) : Object(b.a)(x(p, f)),
                        dashFullArray: Oe.current.getTotalLength ? Oe.current.getTotalLength() : 0
                    }
                })
            }
            ), [f, p]),
            Object(n.useEffect)((function() {
                var e = ye.data.length
                  , t = ie > e - 1 ? e - 1 : ie;
                if (e) {
                    var a = 360 / e
                      , n = N(a) / 2;
                    if (ve({
                        type: "setInitialKnobPosition",
                        payload: {
                            radians: Math.PI / 2 - _[ye.knobPosition],
                            offset: n
                        }
                    }),
                    t) {
                        var o = j(s) * t * a
                          , r = N(o) - _[ye.knobPosition];
                        return Ce(r + n * j(s))
                    }
                    Ce(-_[ye.knobPosition] * j(s) + n * j(s))
                }
            }
            ), [ye.dashFullArray, ye.knobPosition, ye.data.length, ie, s]),
            v(T.MOVE, ke),
            v(T.UP, (function() {
                ve({
                    type: "onMouseUp",
                    payload: {
                        isDragging: !1
                    }
                })
            }
            )),
            o.a.createElement("div", {
                style: Object(i.a)({}, w.circularSlider, {}, fe, {}, ye.mounted && w.mounted),
                ref: he
            }, o.a.createElement(C, {
                width: c,
                label: a.split(" ").join(""),
                direction: s,
                strokeDasharray: ye.dashFullArray,
                strokeDashoffset: ye.dashFullOffset,
                svgFullPath: Oe,
                progressSize: Z,
                progressColorFrom: X,
                progressColorTo: $,
                progressLineCap: se,
                trackColor: te,
                trackSize: ne,
                radiansOffset: ye.radians
            }), o.a.createElement(h, {
                isDragging: ye.isDragging,
                knobPosition: {
                    x: ye.knob.x,
                    y: ye.knob.y
                },
                knobColor: y,
                trackSize: ne,
                onMouseDown: function() {
                    ve({
                        type: "onMouseDown",
                        payload: {
                            isDragging: !0
                        }
                    })
                }
            }, de), o.a.createElement(O, {
                label: a,
                labelColor: B,
                labelBottom: A,
                labelFontSize: M,
                verticalOffset: z,
                valueFontSize: P,
                appendToValue: K,
                prependToValue: G,
                hideLabelValue: Y,
                value: "".concat(ye.label)
            }))
        }
          , D = a(155)
          , A = a.n(D)
          , I = {
            railStyle: {
                position: "absolute",
                width: "100%",
                backgroundColor: "#f1f3f4",
                height: "8px",
                borderRadius: "6px"
            },
            trackStyle: {
                position: "absolute",
                left: 0,
                height: "8px",
                borderRadius: "6px",
                backgroundColor: "#FCCE5A"
            },
            dotStyle: {
                position: "absolute",
                bottom: "-7px",
                marginLeft: "-8px",
                width: "14px",
                height: "14px",
                border: "2px solid #e9e9e9",
                backgroundColor: "#fff",
                cursor: "pointer",
                borderRadius: "50%",
                verticalAlign: "middle"
            },
            activeDotStyle: {
                position: "absolute",
                width: "18px",
                height: "18px",
                cursor: "pointer",
                marginTop: "-5px",
                borderRadius: "50%",
                border: "solid 2px #000",
                backgroundColor: "#000",
                touchAction: "pan-x",
                bottom: "-8px",
                marginLeft: "-9px",
                zIndex: 2
            }
        }
          , M = function() {
            var e = E()
              , t = e.state
              , a = e.dispatch
              , r = t.flipDirection
              , c = t.pressedKey
              , l = t.rotationDegree
              , s = t.scaleVector
              , u = t.svgTransform
              , p = t.wheelActive
              , m = t.wheelDirection
              , f = Object(n.useState)(!0)
              , b = Object(d.a)(f, 2)
              , g = b[0]
              , y = b[1];
            Object(n.useEffect)((function() {
                var e, t, n;
                null === (e = document.querySelector(".rotateWrapper > div > div > div > svg > circle")) || void 0 === e || e.remove(),
                document.querySelectorAll(".rotateWrapper > div > div > div > svg > rect").forEach((function(e) {
                    return null === e || void 0 === e ? void 0 : e.remove()
                }
                )),
                (null === (t = window) || void 0 === t ? void 0 : t.innerWidth) > 1440 && a({
                    type: "SET_SCALE_VECTOR",
                    payload: 1.25
                }),
                (null === (n = window) || void 0 === n ? void 0 : n.innerWidth) > 1900 && a({
                    type: "SET_SCALE_VECTOR",
                    payload: 1.5
                })
            }
            ), []);
            var v = function(e) {
                var t = l;
                t = "up" === m || (null === e || void 0 === e ? void 0 : e.deltaY) < 0 ? t + 10 > 360 ? 10 : t + 10 : t - 10 < 0 ? 350 : t - 10,
                a({
                    type: "SET_ROTATION_DEGREE",
                    payload: t
                })
            }
              , h = function(e) {
                var t = s;
                t = "up" === m || (null === e || void 0 === e ? void 0 : e.deltaY) < 0 ? t <= .5 ? .5 : t - .25 : t >= 1.5 ? 1.5 : t + .25,
                a({
                    type: "SET_SCALE_VECTOR",
                    payload: t
                })
            };
            Object(n.useEffect)((function() {
                a({
                    type: "SET_SVG_TRANSFORM",
                    payload: Object(i.a)({}, u, {
                        rotate: "".concat(l)
                    })
                })
            }
            ), [l]),
            Object(n.useEffect)((function() {
                a({
                    type: "SET_SVG_TRANSFORM",
                    payload: Object(i.a)({}, u, {
                        flip: "scale(".concat(r, ", 1)")
                    })
                })
            }
            ), [r]),
            Object(n.useEffect)((function() {
                if (c && m && p)
                    switch (c) {
                    case "r":
                        v();
                        break;
                    case "f":
                        "up" === m ? 1 === r && a({
                            type: "SET_FLIP_DIRECTION",
                            payload: -1
                        }) : -1 === r && a({
                            type: "SET_FLIP_DIRECTION",
                            payload: 1
                        });
                        break;
                    case "s":
                        h()
                    }
            }
            ), [c, m, p]);
            var O = function(e) {
                a({
                    type: "SET_SCALE_VECTOR",
                    payload: e
                })
            }
              , C = function(e) {
                var t = e.nativeEvent;
                v(t)
            }
              , k = function(e) {
                a({
                    type: "SET_ROTATION_DEGREE",
                    payload: e
                })
            }
              , S = function() {
                a({
                    type: "SET_FLIP_DIRECTION",
                    payload: -r
                })
            }
              , F = function() {
                y(!g)
            }
              , T = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "scaleWrapper",
                    onWheel: function(e) {
                        var t = e.nativeEvent;
                        h(t)
                    }
                }, o.a.createElement("span", {
                    className: "scaleTitle"
                }, "Scale"), o.a.createElement(A.a, {
                    value: s,
                    min: .5,
                    max: 1.5,
                    defaultValue: 1,
                    onChange: O,
                    marks: {
                        .5: .5,
                        .75: .75,
                        1: 1,
                        1.25: 1.25,
                        1.5: 1.5
                    },
                    step: null,
                    railStyle: I.railStyle,
                    trackStyle: I.trackStyle,
                    dotStyle: I.dotStyle,
                    activeDotStyle: I.activeDotStyle
                }), o.a.createElement("div", {
                    className: "scaleShortcutWrapper"
                }, o.a.createElement("span", null, "or"), o.a.createElement("span", {
                    className: "boldText"
                }, "press s"), o.a.createElement("span", null, "+"), o.a.createElement("span", {
                    className: "boldText"
                }, "scroll on illustration")))
            }
            ), [s])
              , _ = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "rotateWrapper",
                    onWheel: C
                }, o.a.createElement("span", {
                    className: "rotateTitle"
                }, "Rotate"), o.a.createElement("div", {
                    className: "rotateRow"
                }, o.a.createElement(B, {
                    width: 100,
                    min: 0,
                    max: 360,
                    direction: -1,
                    knobPosition: "right",
                    knobColor: "#000000",
                    trackColor: "#f1f3f4",
                    progressColorFrom: "#FDE7AB",
                    progressColorTo: "#FCCE5A",
                    appendToValue: "\xb0",
                    valueFontSize: "15px",
                    onChange: k,
                    label: "Degree",
                    dataIndex: l
                }), o.a.createElement("span", null, "or"), o.a.createElement("div", {
                    className: "rotateShortcutWrapper"
                }, o.a.createElement("span", {
                    className: "boldText"
                }, "press r"), o.a.createElement("span", null, "+"), o.a.createElement("span", {
                    className: "boldText"
                }, "scroll on"), o.a.createElement("span", {
                    className: "boldText"
                }, "illustration"))))
            }
            ), [l])
              , j = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "flipWrapper"
                }, o.a.createElement("div", {
                    className: "flipButton",
                    onClick: S
                }, o.a.createElement("span", {
                    style: {
                        textAlign: "center"
                    }
                }, "Flip")), o.a.createElement("span", null, "or"), o.a.createElement("div", {
                    className: "rotateShortcutWrapper"
                }, o.a.createElement("span", {
                    className: "boldText"
                }, "press f"), o.a.createElement("span", null, "+"), o.a.createElement("span", {
                    className: "boldText"
                }, "scroll on illustration")))
            }
            ), [r]);
            return Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "leftMenu ".concat(g ? "" : "drawerClosed")
                }, o.a.createElement("div", {
                    className: "leftMenuWrapper"
                }, o.a.createElement("div", {
                    className: "leftMenuContentWrapper"
                }, T, _, j), o.a.createElement("div", {
                    className: "leftMenuDrawerButton",
                    onClick: F
                }, g ? "Close" : "Open")))
            }
            ), [g, s, l, r])
        }
          , L = a(157)
          , P = a(156)
          , W = function(e, t) {
            P.saveAs(e, t)
        }
          , K = a(58)
          , H = a(3)
          , G = a(10)
          , V = function(e) {
            var t = e.color
              , a = e.target
              , r = e.type
              , c = E().dispatch;
            Object(n.useEffect)((function() {
                document.querySelectorAll(".flexbox-fix")[1].remove()
            }
            ), []);
            var i = Object(n.useMemo)((function() {
                var e = {
                    firstColor: "",
                    secondColor: ""
                };
                return "Background" === r ? (e.firstColor = "SET_BACKGROUND_FIRST_GRADIENT_COLOR",
                e.secondColor = "SET_BACKGROUND_SECOND_GRADIENT_COLOR") : (e.firstColor = "SET_FOREGROUND_FIRST_COLOR",
                e.secondColor = "SET_FOREGROUND_SECOND_COLOR"),
                e
            }
            ), [t]);
            return o.a.createElement(K.ChromePicker, {
                disableAlpha: !0,
                color: t,
                onChange: function(e) {
                    var t = "first" === a ? i.firstColor : i.secondColor;
                    c({
                        type: t,
                        payload: e.hex
                    })
                }
            })
        }
          , z = function(e) {
            var t = e.type
              , a = E()
              , r = a.state
              , c = a.dispatch
              , i = r.strokeColor
              , l = r.firstColor
              , s = r.secondColor
              , u = r.backgroundBasicColor
              , p = r.backgroundFirstGradientColor
              , m = r.backgroundSecondGradientColor
              , f = (r.isFrameTransparent,
            Object(n.useMemo)((function() {
                return "Background" === t ? p : l
            }
            ), [l, p]))
              , b = Object(n.useMemo)((function() {
                return "Background" === t ? m : s
            }
            ), [s, m])
              , g = Object(n.useState)(("Background" === t ? u.degree : i.degree) || 0)
              , y = Object(d.a)(g, 2)
              , v = y[0]
              , h = y[1]
              , O = Object(n.useState)(!1)
              , C = Object(d.a)(O, 2)
              , k = C[0]
              , S = C[1]
              , F = Object(n.useState)(!1)
              , T = Object(d.a)(F, 2)
              , _ = T[0]
              , j = T[1];
            Object(n.useEffect)((function() {
                c({
                    type: "Background" === t ? "SET_BACKGROUND_BASIC_COLOR" : "SET_STROKE_COLOR",
                    payload: {
                        degree: v,
                        firstColor: f,
                        secondColor: b
                    }
                })
            }
            ), [f, b, v, c]);
            var N = function(e) {
                return function(a) {
                    Object(G.isValidHex)(a) && c("Background" === t ? {
                        type: "first" === e ? "SET_BACKGROUND_FIRST_GRADIENT_COLOR" : "SET_BACKGROUND_SECOND_GRADIENT_COLOR",
                        payload: a
                    } : {
                        type: "first" === e ? "SET_FOREGROUND_FIRST_COLOR" : "SET_FOREGROUND_SECOND_COLOR",
                        payload: a
                    })
                }
            }
              , x = Object(n.useCallback)((function(e) {
                var t = e.nativeEvent;
                (null === t || void 0 === t ? void 0 : t.deltaY) < 0 ? h((function(e) {
                    return e + 10 > 360 ? 10 : e + 10
                }
                )) : h((function(e) {
                    return e - 10 < 0 ? 350 : e - 10
                }
                ))
            }
            ), [])
              , R = Object(n.useCallback)((function() {
                _ && j(!1),
                S((function(e) {
                    return !e
                }
                ))
            }
            ), [_])
              , w = Object(n.useCallback)((function() {
                k && S(!1),
                j((function(e) {
                    return !e
                }
                ))
            }
            ), [k])
              , D = Object(n.useMemo)((function() {
                var e = {
                    color: "",
                    target: "first"
                };
                return k && (e.color = f,
                e.target = "first"),
                _ && (e.color = b,
                e.target = "second"),
                o.a.createElement(o.a.Fragment, null, k && o.a.createElement(V, {
                    type: t,
                    color: e.color,
                    target: e.target
                }), _ && o.a.createElement(V, {
                    type: t,
                    color: e.color,
                    target: e.target
                }))
            }
            ), [k, _, f, b])
              , A = Object(n.useMemo)((function() {
                var e = "linear-gradient(".concat(v, "deg, ").concat(f, ", ").concat(b, ")");
                return (k || _) && (e = "white"),
                o.a.createElement("div", {
                    className: "gradientPreview",
                    style: {
                        background: e,
                        alignItems: k || _ ? "baseline" : "center"
                    },
                    onWheel: x
                }, o.a.createElement(B, {
                    width: 110,
                    min: 0,
                    max: 360,
                    direction: -1,
                    knobPosition: "right",
                    progressColorFrom: "#FFFFFF",
                    progressColorTo: "#FFFFFF",
                    knobColor: "#FFFFFF",
                    trackColor: "#FFFFFF",
                    appendToValue: "\xb0",
                    valueFontSize: "15px",
                    trackSize: 4,
                    progressSize: 4,
                    onChange: function(e) {
                        h(e)
                    },
                    label: "",
                    dataIndex: v,
                    style: {
                        display: k || _ ? "none" : "inline-block"
                    }
                }), D)
            }
            ), [v, f, b, k, _, x])
              , I = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "gradientInputWrapper"
                }, o.a.createElement(H.EditableInput, {
                    value: f,
                    onChange: N("first"),
                    style: {
                        input: {
                            width: "90%",
                            fontSize: "12px",
                            color: "#666",
                            border: "0px",
                            outline: "none",
                            height: "22px",
                            boxShadow: "inset 0 0 0 1px #ddd",
                            borderRadius: "4px",
                            padding: "0 7px",
                            boxSizing: "border-box"
                        }
                    }
                }), o.a.createElement(H.EditableInput, {
                    value: b,
                    onChange: N("second"),
                    style: {
                        input: {
                            width: "90%",
                            fontSize: "12px",
                            color: "#666",
                            border: "0px",
                            outline: "none",
                            height: "22px",
                            boxShadow: "inset 0 0 0 1px #ddd",
                            borderRadius: "4px",
                            padding: "0 7px",
                            boxSizing: "border-box"
                        }
                    }
                }))
            }
            ), [f, b])
              , M = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "gradientColorBoxWrapper"
                }, o.a.createElement("div", {
                    title: f,
                    className: "gradientColorBox",
                    style: {
                        background: f,
                        animation: k ? "pulse 1s infinite" : "unset"
                    },
                    onClick: R
                }), o.a.createElement("div", {
                    title: b,
                    className: "gradientColorBox",
                    style: {
                        background: b,
                        animation: _ ? "pulse 1s infinite" : "unset"
                    },
                    onClick: w
                }))
            }
            ), [f, b, R, w]);
            return Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "gradientBlock"
                }, A, M, I)
            }
            ), [v, f, b, v, k, _])
        }
          , U = function(e) {
            var t = e.type
              , a = E()
              , r = a.state
              , c = a.dispatch
              , i = r.strokeColor
              , l = r.backgroundBasicColor
              , s = Object(n.useState)(!1)
              , u = Object(d.a)(s, 2)
              , p = u[0]
              , m = u[1]
              , f = Object(n.useState)("basic")
              , b = Object(d.a)(f, 2)
              , g = b[0]
              , y = b[1]
              , v = ["#4D4D4D", "#999999", "#2e8a57", "#FE9200", "#fe1694", "#33cd33", "#8a2ae3", "#68CCCA", "#73D8FF", "#AEA1FF", "#7f8000", "#000000", "#81087f", "#cccccc", "#D33115", "#143D59", "#210070", "#213970", "#FFE042", "#E71989", "#5B0E2D", "#FFD55A", "#6DD47E", "#F93800", "#F9858B", "#761137", "#00154F", "#F2BC94", "#FBEAEB", "#EB2188"]
              , h = function(e) {
                c("Background" === t ? {
                    type: "SET_BACKGROUND_BASIC_COLOR",
                    payload: e.hex
                } : {
                    type: "SET_STROKE_COLOR",
                    payload: e.hex
                })
            }
              , O = function(e) {
                return function() {
                    m(!1 === e ? e : !p)
                }
            }
              , C = function() {
                return "Background" === t ? "object" === typeof l ? "linear-gradient(".concat(l.degree || 0, ", ").concat(l.firstColor, ", ").concat(l.secondColor, ")") : l : "object" === typeof i ? "linear-gradient(".concat(i.degree || 0, ", ").concat(i.firstColor, ", ").concat(i.secondColor, ")") : i
            }
              , k = function(e) {
                return function() {
                    y(e)
                }
            }
              , S = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "basicPicker"
                }, o.a.createElement(K.BlockPicker, {
                    triangle: "hide",
                    color: C(),
                    onChange: h,
                    colors: v
                }), o.a.createElement("div", {
                    className: "colorTypeChangeButton gradientColorButton",
                    onClick: k("gradient")
                }, "Gradient"))
            }
            ), [v])
              , F = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "gradientPicker"
                }, o.a.createElement(z, {
                    type: t
                }), o.a.createElement("div", {
                    className: "colorTypeChangeButton basicColorButton",
                    onClick: k("basic")
                }, "Basic"))
            }
            ), []);
            return Object(n.useMemo)((function() {
                var e = C();
                return o.a.createElement("div", {
                    className: "colorIndicator"
                }, o.a.createElement("div", {
                    className: "colorSwatch",
                    style: {
                        boxShadow: "0 0 0 2px ".concat(e)
                    },
                    onClick: O()
                }, o.a.createElement("div", {
                    className: "pickedColor ".concat("Background" === t ? "backgroundPickedColorIndicatior" : ""),
                    style: {
                        background: e
                    }
                })), p ? o.a.createElement("div", {
                    className: "colorPopover"
                }, o.a.createElement("div", {
                    className: "colorCover",
                    onClick: O(!1)
                }), "basic" === g ? S : F) : null)
            }
            ), [p, v, g])
        }
          , Y = function(e) {
            return Object.keys(l.SittingPose).includes(e)
        }
          , q = function(e) {
            return Object.keys(l.StandingPose).includes(e)
        }
          , X = function(e) {
            var t = "-350"
              , a = "-150"
              , n = "1500"
              , o = "1500";
            return Y(e) ? (t = "-800",
            a = "-300",
            n = "2600",
            o = "2600",
            "MediumBW" !== e && "MediumWB" !== e || (t = "-1000"),
            "OneLegUpBW" !== e && "OneLegUpWB" !== e || (t = "-900"),
            "CrossedLegs" === e && (t = "-850",
            n = "2800",
            o = "2800"),
            "WheelChair" === e && (t = "-700",
            a = "-150",
            n = "2700",
            o = "2700"),
            "Bike" === e && (t = "-1450",
            a = "-450",
            n = "4200",
            o = "4200")) : q(e) ? (t = "-1300",
            a = "-200",
            n = "3350",
            o = "3350") : ("PocketShirt" === e && (t = "-395"),
            "Geek" !== e && "DotJacket" !== e || (t = "-305"),
            "Device" === e && (a = "-160")),
            {
                x: t,
                y: a,
                width: n,
                height: o
            }
        }
          , J = function() {
            var e = E()
              , t = e.state
              , a = e.dispatch
              , r = t.pickedAccessory
              , c = t.pickedBody
              , s = t.pickedFace
              , u = t.pickedFacialHair
              , p = t.pickedHair
              , m = t.pickedSection
              , f = t.scaleVector
              , g = t.isFrameTransparent
              , y = Object(n.useState)()
              , v = Object(d.a)(y, 2)
              , h = v[0]
              , O = v[1];
            Object(n.useEffect)((function() {
                var e = {
                    hairKeys: [""],
                    bodyKeys: [""],
                    faceKeys: [""],
                    facialHairKeys: [""],
                    accessoryKeys: [""]
                };
                e.hairKeys = Object.keys(l.Hair),
                e.bodyKeys = [].concat(Object(b.a)(Object.keys(l.BustPose)), Object(b.a)(Object.keys(l.SittingPose)), Object(b.a)(Object.keys(l.StandingPose))),
                e.faceKeys = Object.keys(l.Face),
                e.facialHairKeys = Object.keys(l.FacialHair),
                e.accessoryKeys = Object.keys(l.Accessories),
                O(e)
            }
            ), []);
            var C = function(e) {
                a({
                    type: "SET_HAIR",
                    payload: e
                })
            }
              , k = function(e) {
                a({
                    type: "SET_BODY",
                    payload: e
                })
            }
              , S = function(e) {
                a({
                    type: "SET_FACE",
                    payload: e
                })
            }
              , F = function(e) {
                a({
                    type: "SET_FACIAL_HAIR",
                    payload: e
                })
            }
              , T = Object(n.useCallback)((function(e) {
                return function() {
                    e !== g && a({
                        type: "SET_FRAME_TYPE",
                        payload: e
                    })
                }
            }
            ), [g])
              , _ = function(e) {
                a({
                    type: "SET_ACCESSORY",
                    payload: e
                })
            }
              , j = Object(n.useCallback)((function() {
                h && (C(h.hairKeys[Math.floor(Math.random() * h.hairKeys.length)]),
                k(h.bodyKeys[Math.floor(Math.random() * h.bodyKeys.length)]),
                S(h.faceKeys[Math.floor(Math.random() * h.faceKeys.length)]),
                F(h.facialHairKeys[Math.floor(Math.random() * h.facialHairKeys.length)]),
                _(h.accessoryKeys[Math.floor(Math.random() * h.accessoryKeys.length)]))
            }
            ), [h])
              , N = function(e) {
                return function() {
                    !function(e) {
                        a({
                            type: "SET_PIECE_SECTION",
                            payload: e
                        })
                    }(e)
                }
            }
              , x = function(e) {
                switch (m) {
                case "Accessories":
                    return e === r;
                case "Body":
                    return e === c;
                case "Hair":
                    return e === p;
                case "FacialHair":
                    return e === u;
                case "Face":
                    return e === s
                }
            }
              , R = function(e) {
                switch (m) {
                case "Accessories":
                    return "-75 -125 500 400";
                case "Body":
                    return q(t = e) ? "-300 350 2500 2500" : Y(t) ? "Bike" === t ? "-500 300 3000 3000" : "MediumBW" === t || "MediumWB" === t || "OneLegUpBW" === t || "OneLegUpWB" === t || "WheelChair" === t ? "-300 250 2000 2000" : "0 300 2000 2000" : "0 150 1200 1200";
                case "Hair":
                    return "0 -100 550 750";
                case "FacialHair":
                    return "-50 -100 500 400";
                case "Face":
                    return "0 -20 300 400"
                }
                var t
            }
              , w = function(e) {
                return function() {
                    switch (m) {
                    case "Accessories":
                        _(e);
                        break;
                    case "Body":
                        k(e);
                        break;
                    case "Hair":
                        C(e);
                        break;
                    case "FacialHair":
                        F(e);
                        break;
                    case "Face":
                        S(e)
                    }
                }
            }
              , B = function(e) {
                return e.map((function(e, t) {
                    return o.a.createElement("li", {
                        key: t,
                        className: "pieceListItem",
                        onClick: w(e)
                    }, o.a.createElement("div", {
                        className: "pieceListWrapper"
                    }, o.a.createElement("input", {
                        className: "pieceListRadioButton",
                        type: "radio",
                        name: m,
                        checked: x(e),
                        readOnly: !0
                    }), o.a.createElement("div", {
                        className: "selectionIndicator"
                    }), o.a.createElement("div", null, o.a.createElement("svg", {
                        className: "pieceListSvg",
                        viewBox: R(e),
                        width: "70",
                        height: "70"
                    }, function(e) {
                        switch (m) {
                        case "Accessories":
                            return o.a.createElement(l.Accessories[e]);
                        case "Body":
                            return o.a.createElement(l.BustPose[e] || l.SittingPose[e] || l.StandingPose[e]);
                        case "Hair":
                            return o.a.createElement(l.Hair[e]);
                        case "FacialHair":
                            return o.a.createElement(l.FacialHair[e]);
                        case "Face":
                            return o.a.createElement(l.Face[e])
                        }
                    }(e))), o.a.createElement("span", {
                        className: "pieceText"
                    }, e)))
                }
                ))
            }
              , D = Object(n.useCallback)((function() {
                !function(e, t) {
                    e.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    var a = e.outerHTML
                      , n = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', a],{
                        type: "image/svg+xml"
                    });
                    W(n, t)
                }(document.querySelector(".svgWrapper > svg"), "peep.svg")
            }
            ), [])
              , A = Object(n.useCallback)((function() {
                !function(e, t, a) {
                    var n = document.createElement("canvas");
                    n.width = e.getBoundingClientRect().height * a,
                    n.height = e.getBoundingClientRect().height * a,
                    e.setAttribute("width", "".concat(n.width)),
                    e.setAttribute("height", "".concat(n.height)),
                    e.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    var o = e.outerHTML
                      , r = n.getContext("2d")
                      , c = window.self.URL || window.self.webkitURL || window.self
                      , i = new Image
                      , l = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', o],{
                        type: "image/svg+xml"
                    })
                      , s = c.createObjectURL(l);
                    n.style.display = "none",
                    document.body.appendChild(n),
                    i.onload = function() {
                        r && (r.drawImage(i, 0, 0, n.width, n.height),
                        c.revokeObjectURL(s),
                        n.toBlob((function(e) {
                            e && W(e, t),
                            document.body.removeChild(n)
                        }
                        )))
                    }
                    ,
                    i.src = s
                }(document.querySelector(".svgWrapper > svg"), "peep.png", f)
            }
            ), [f])
              , I = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "listWrapper"
                }, o.a.createElement("ul", {
                    className: "pieceList ".concat(m)
                }, B(function() {
                    switch (m) {
                    case "Accessories":
                        return Object.keys(l.Accessories);
                    case "Body":
                        return [].concat(Object(b.a)(Object.keys(l.BustPose)), Object(b.a)(Object.keys(l.SittingPose)), Object(b.a)(Object.keys(l.StandingPose)));
                    case "Hair":
                        return Object.keys(l.Hair);
                    case "FacialHair":
                        return Object.keys(l.FacialHair);
                    case "Face":
                        return Object.keys(l.Face)
                    }
                }())), o.a.createElement("ul", {
                    className: "sectionList"
                }, ["Accessories", "Body", "Face", "FacialHair", "Hair"].map((function(e, t) {
                    return o.a.createElement("li", {
                        className: "pieceSectionItem",
                        key: t,
                        onClick: N(e)
                    }, o.a.createElement("div", {
                        className: "pieceSectionButton ".concat(e, " ").concat(m === e ? "pickedSection" : "")
                    }, o.a.createElement("span", null, e)))
                }
                ))))
            }
            ), [m, B])
              , M = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "saveButtonWrapper"
                }, o.a.createElement("div", {
                    className: "saveButton",
                    onClick: D
                }, "Save as SVG"), o.a.createElement("div", {
                    className: "saveButton",
                    onClick: A
                }, "Save as PNG"))
            }
            ), [D, A])
              , P = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "shuffleButton",
                    onClick: j
                }, o.a.createElement("span", {
                    style: {
                        textAlign: "center"
                    }
                }, "Generator Random"))
            }
            ), [j])
              , K = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "foregroundColorWrapper"
                }, o.a.createElement("span", {
                    className: "marginRightOneEM"
                }, "Foreground"), o.a.createElement(U, {
                    type: "Foreground"
                }))
            }
            ), [])
              , H = Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "frameOptionsWrapper ".concat(!g && "increaseFrameWrapperWidth")
                }, o.a.createElement("span", {
                    className: "marginRightOneEM"
                }, "Background"), o.a.createElement("div", {
                    style: Object(i.a)({
                        display: "flex"
                    }, !g && {
                        display: "none"
                    })
                }, o.a.createElement("div", {
                    className: "frameOptionButton ".concat(g && "deactiveFrameOptionButton"),
                    onClick: T(!0)
                }, "transparent"), o.a.createElement("div", {
                    className: "frameOptionButton ".concat(!g && "deactiveFrameOptionButton"),
                    onClick: T(!1)
                }, "colorful")), o.a.createElement("div", {
                    style: Object(i.a)({
                        display: "flex"
                    }, g && {
                        display: "none"
                    })
                }, o.a.createElement(U, {
                    type: "Background"
                }), o.a.createElement("div", {
                    className: "trashIconWrapper",
                    onClick: T(!0)
                }, o.a.createElement(L.a, {
                    color: "#fd6565"
                }))))
            }
            ), [g]);
            return Object(n.useMemo)((function() {
                return o.a.createElement("div", {
                    className: "rigthMenu"
                }, I, H, K, P, M)
            }
            ), [m, j, r, c, s, u, p, f, g])
        }
          , $ = function() {
            return o.a.createElement("div", {
                className: "footer"
            }, o.a.createElement("div", null, o.a.createElement("a", {
            
            }, ""), " ", "", " ", o.a.createElement("a", {

            }, ""), " ", "", " ", o.a.createElement("a", {

            }, "")), o.a.createElement("div", {
            }, o.a.createElement("a", {

            }, "")))
        }
          , Q = {
            width: 390,
            height: 390,
            justifyContent: "center",
            alignSelf: "center",
            transform: "unset"
        }
          , Z = function() {
            var e = E()
              , t = e.state
              , a = e.dispatch
              , r = Object(n.useRef)(null)
              , c = t.pickedAccessory
              , l = t.pickedBody
              , d = t.pickedFace
              , u = t.pickedFacialHair
              , p = t.pickedHair
              , m = t.strokeColor
              , f = t.pressedKey
              , b = t.scaleVector
              , g = t.svgTransform
              , y = t.isFrameTransparent
              , v = t.backgroundBasicColor;
            Object(n.useEffect)((function() {
                var e, t, a;
                (null === (e = window) || void 0 === e ? void 0 : e.innerWidth) < 1201 && (null === (t = r.current) || void 0 === t || t.removeEventListener("mouseenter", h),
                null === (a = r.current) || void 0 === a || a.removeEventListener("mouseleave", O))
            }
            ), []),
            Object(n.useEffect)((function() {
                var e = document.querySelector(".svgWrapper > svg > g")
                  , t = e.getBBox()
                  , a = t.width
                  , n = t.height
                  , o = t.x
                  , r = t.y;
                e.setAttribute("transform", "rotate(".concat((null === g || void 0 === g ? void 0 : g.rotate) || "0", " ").concat(o + a / 2, " ").concat(r + n / 2, ")"))
            }
            ), [g, l]);
            var h = function() {
                document.getElementsByClassName("svgWrapper")[0].focus()
            }
              , O = function() {
                document.getElementsByClassName("header")[0].focus(),
                a({
                    type: "SET_WHEEL_DIRECTION",
                    payload: void 0
                }),
                a({
                    type: "SET_PRESSED_KEY",
                    payload: void 0
                })
            };
            return o.a.createElement(o.a.Fragment, null, o.a.createElement("a", {
                className: "header",
                href: "/"
            }, o.a.createElement("h1", null, "Random Avatar Generator")), o.a.createElement("div", {
                ref: r,
                className: "svgWrapper",
                tabIndex: 0,
                onMouseEnter: h,
                onMouseLeave: O,
                onKeyDown: function(e) {
                    var t = e.nativeEvent;
                    f !== t.key && a({
                        type: "SET_PRESSED_KEY",
                        payload: t.key
                    })
                },
                onKeyUp: function() {
                    a({
                        type: "SET_PRESSED_KEY",
                        payload: void 0
                    })
                },
                onWheel: function(e) {
                    var t = e.nativeEvent;
                    a({
                        type: "SET_IS_WHEEL_ACTIVE",
                        payload: !0
                    }),
                    t.deltaY > 0 ? a({
                        type: "SET_WHEEL_DIRECTION",
                        payload: "down"
                    }) : a({
                        type: "SET_WHEEL_DIRECTION",
                        payload: "up"
                    }),
                    setTimeout((function() {
                        a({
                            type: "SET_IS_WHEEL_ACTIVE",
                            payload: !1
                        })
                    }
                    ), 0)
                }
            }, o.a.createElement(s.a, {
                style: Object(i.a)({}, Q, {
                    width: Q.width * b,
                    height: Q.height * b,
                    transform: "".concat((null === g || void 0 === g ? void 0 : g.flip) || "")
                }),
                accessory: c,
                body: l,
                face: d,
                hair: p,
                facialHair: u,
                strokeColor: m,
                viewBox: X(l),
                wrapperBackground: y ? void 0 : v
            })), o.a.createElement(M, null), o.a.createElement(J, null), o.a.createElement($, null))
        };
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        a(571),
        a(572);
        c.a.hydrate(o.a.createElement(f, null, o.a.createElement(Z, null)), document.getElementById("main")),
        "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
            e.unregister()
        }
        )).catch((function(e) {
            console.error(e.message)
        }
        ))
    }
}, [[158, 1, 2]]]);

