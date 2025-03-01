function C0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
$(window).scroll(function () {
  $(this).scrollTop() > 45
    ? $(".navbar").addClass("sticky-top shadow-sm")
    : $(".navbar").removeClass("sticky-top shadow-sm");
});
$(".back-to-top").click(function () {
  return $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo"), !1;
});
function ip(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var sp = { exports: {} },
  no = {},
  ap = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zi = Symbol.for("react.element"),
  I0 = Symbol.for("react.portal"),
  j0 = Symbol.for("react.fragment"),
  P0 = Symbol.for("react.strict_mode"),
  R0 = Symbol.for("react.profiler"),
  O0 = Symbol.for("react.provider"),
  A0 = Symbol.for("react.context"),
  L0 = Symbol.for("react.forward_ref"),
  D0 = Symbol.for("react.suspense"),
  M0 = Symbol.for("react.memo"),
  U0 = Symbol.for("react.lazy"),
  bd = Symbol.iterator;
function F0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bd && e[bd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var op = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  lp = Object.assign,
  cp = {};
function zr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cp),
    (this.updater = n || op);
}
zr.prototype.isReactComponent = {};
zr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function up() {}
up.prototype = zr.prototype;
function Qc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cp),
    (this.updater = n || op);
}
var Xc = (Qc.prototype = new up());
Xc.constructor = Qc;
lp(Xc, zr.prototype);
Xc.isPureReactComponent = !0;
var _d = Array.isArray,
  dp = Object.prototype.hasOwnProperty,
  Zc = { current: null },
  fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function hp(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      dp.call(t, r) && !fp.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: Zi,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: Zc.current,
  };
}
function z0(e, t) {
  return {
    $$typeof: Zi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function eu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zi;
}
function B0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Nd = /\/+/g;
function Do(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? B0("" + e.key)
    : t.toString(36);
}
function Ys(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zi:
          case I0:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + Do(a, 0) : r),
      _d(i)
        ? ((n = ""),
          e != null && (n = e.replace(Nd, "$&/") + "/"),
          Ys(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (eu(i) &&
            (i = z0(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Nd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), _d(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var c = r + Do(s, o);
      a += Ys(s, t, n, c, i);
    }
  else if (((c = F0(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(s = e.next()).done; )
      (s = s.value), (c = r + Do(s, o++)), (a += Ys(s, t, n, c, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function ws(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ys(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function $0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  Js = { transition: null },
  H0 = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Js,
    ReactCurrentOwner: Zc,
  };
H.Children = {
  map: ws,
  forEach: function (e, t, n) {
    ws(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ws(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ws(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!eu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = zr;
H.Fragment = j0;
H.Profiler = R0;
H.PureComponent = Qc;
H.StrictMode = P0;
H.Suspense = D0;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H0;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = lp({}, e.props),
    i = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Zc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      dp.call(t, c) &&
        !fp.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Zi, type: e.type, key: i, ref: s, props: r, _owner: a };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: A0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: O0, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = hp;
H.createFactory = function (e) {
  var t = hp.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: L0, render: e };
};
H.isValidElement = eu;
H.lazy = function (e) {
  return { $$typeof: U0, _payload: { _status: -1, _result: e }, _init: $0 };
};
H.memo = function (e, t) {
  return { $$typeof: M0, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Js.transition;
  Js.transition = {};
  try {
    e();
  } finally {
    Js.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
H.useContext = function (e) {
  return Ae.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
H.useId = function () {
  return Ae.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return Ae.current.useRef(e);
};
H.useState = function (e) {
  return Ae.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return Ae.current.useTransition();
};
H.version = "18.2.0";
ap.exports = H;
var x = ap.exports;
const V = ip(x),
  W0 = C0({ __proto__: null, default: V }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var V0 = x,
  G0 = Symbol.for("react.element"),
  K0 = Symbol.for("react.fragment"),
  Y0 = Object.prototype.hasOwnProperty,
  J0 = V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  q0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function pp(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Y0.call(t, r) && !q0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: G0,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: J0.current,
  };
}
no.Fragment = K0;
no.jsx = pp;
no.jsxs = pp;
sp.exports = no;
var l = sp.exports,
  Cl = {},
  mp = { exports: {} },
  Ge = {},
  gp = { exports: {} },
  vp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, O) {
    var U = N.length;
    N.push(O);
    e: for (; 0 < U; ) {
      var K = (U - 1) >>> 1,
        J = N[K];
      if (0 < i(J, O)) (N[K] = O), (N[U] = J), (U = K);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      U = N.pop();
    if (U !== O) {
      N[0] = U;
      e: for (var K = 0, J = N.length, vs = J >>> 1; K < vs; ) {
        var In = 2 * (K + 1) - 1,
          Lo = N[In],
          jn = In + 1,
          ys = N[jn];
        if (0 > i(Lo, U))
          jn < J && 0 > i(ys, Lo)
            ? ((N[K] = ys), (N[jn] = U), (K = jn))
            : ((N[K] = Lo), (N[In] = U), (K = In));
        else if (jn < J && 0 > i(ys, U)) (N[K] = ys), (N[jn] = U), (K = jn);
        else break e;
      }
    }
    return O;
  }
  function i(N, O) {
    var U = N.sortIndex - O.sortIndex;
    return U !== 0 ? U : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var c = [],
    u = [],
    d = 1,
    f = null,
    m = 3,
    w = !1,
    g = !1,
    v = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= N)
        r(u), (O.sortIndex = O.expirationTime), t(c, O);
      else break;
      O = n(u);
    }
  }
  function E(N) {
    if (((v = !1), y(N), !g))
      if (n(c) !== null) (g = !0), F(S);
      else {
        var O = n(u);
        O !== null && z(E, O.startTime - N);
      }
  }
  function S(N, O) {
    (g = !1), v && ((v = !1), p(I), (I = -1)), (w = !0);
    var U = m;
    try {
      for (
        y(O), f = n(c);
        f !== null && (!(f.expirationTime > O) || (N && !Z()));

      ) {
        var K = f.callback;
        if (typeof K == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var J = K(f.expirationTime <= O);
          (O = e.unstable_now()),
            typeof J == "function" ? (f.callback = J) : f === n(c) && r(c),
            y(O);
        } else r(c);
        f = n(c);
      }
      if (f !== null) var vs = !0;
      else {
        var In = n(u);
        In !== null && z(E, In.startTime - O), (vs = !1);
      }
      return vs;
    } finally {
      (f = null), (m = U), (w = !1);
    }
  }
  var C = !1,
    T = null,
    I = -1,
    D = 5,
    L = -1;
  function Z() {
    return !(e.unstable_now() - L < D);
  }
  function ce() {
    if (T !== null) {
      var N = e.unstable_now();
      L = N;
      var O = !0;
      try {
        O = T(!0, N);
      } finally {
        O ? pe() : ((C = !1), (T = null));
      }
    } else C = !1;
  }
  var pe;
  if (typeof h == "function")
    pe = function () {
      h(ce);
    };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(),
      q = A.port2;
    (A.port1.onmessage = ce),
      (pe = function () {
        q.postMessage(null);
      });
  } else
    pe = function () {
      k(ce, 0);
    };
  function F(N) {
    (T = N), C || ((C = !0), pe());
  }
  function z(N, O) {
    I = k(function () {
      N(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), F(S));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = m;
      }
      var U = m;
      m = O;
      try {
        return N();
      } finally {
        m = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, O) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var U = m;
      m = N;
      try {
        return O();
      } finally {
        m = U;
      }
    }),
    (e.unstable_scheduleCallback = function (N, O, U) {
      var K = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? K + U : K))
          : (U = K),
        N)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = U + J),
        (N = {
          id: d++,
          callback: O,
          priorityLevel: N,
          startTime: U,
          expirationTime: J,
          sortIndex: -1,
        }),
        U > K
          ? ((N.sortIndex = U),
            t(u, N),
            n(c) === null &&
              N === n(u) &&
              (v ? (p(I), (I = -1)) : (v = !0), z(E, U - K)))
          : ((N.sortIndex = J), t(c, N), g || w || ((g = !0), F(S))),
        N
      );
    }),
    (e.unstable_shouldYield = Z),
    (e.unstable_wrapCallback = function (N) {
      var O = m;
      return function () {
        var U = m;
        m = O;
        try {
          return N.apply(this, arguments);
        } finally {
          m = U;
        }
      };
    });
})(vp);
gp.exports = vp;
var Q0 = gp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yp = x,
  Ve = Q0;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var wp = new Set(),
  bi = {};
function tr(e, t) {
  jr(e, t), jr(e + "Capture", t);
}
function jr(e, t) {
  for (bi[e] = t, e = 0; e < t.length; e++) wp.add(t[e]);
}
var Rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Il = Object.prototype.hasOwnProperty,
  X0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Td = {},
  Cd = {};
function Z0(e) {
  return Il.call(Cd, e)
    ? !0
    : Il.call(Td, e)
    ? !1
    : X0.test(e)
    ? (Cd[e] = !0)
    : ((Td[e] = !0), !1);
}
function ey(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ty(e, t, n, r) {
  if (t === null || typeof t > "u" || ey(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Le(e, t, n, r, i, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tu = /[\-:]([a-z])/g;
function nu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    _e[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    _e[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(tu, nu);
  _e[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ru(e, t, n, r) {
  var i = _e.hasOwnProperty(t) ? _e[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ty(t, n, i, r) && (n = null),
    r || i === null
      ? Z0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xs = Symbol.for("react.element"),
  sr = Symbol.for("react.portal"),
  ar = Symbol.for("react.fragment"),
  iu = Symbol.for("react.strict_mode"),
  jl = Symbol.for("react.profiler"),
  xp = Symbol.for("react.provider"),
  kp = Symbol.for("react.context"),
  su = Symbol.for("react.forward_ref"),
  Pl = Symbol.for("react.suspense"),
  Rl = Symbol.for("react.suspense_list"),
  au = Symbol.for("react.memo"),
  Kt = Symbol.for("react.lazy"),
  Ep = Symbol.for("react.offscreen"),
  Id = Symbol.iterator;
function Jr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Id && e[Id]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var le = Object.assign,
  Mo;
function ii(e) {
  if (Mo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Mo = (t && t[1]) || "";
    }
  return (
    `
` +
    Mo +
    e
  );
}
var Uo = !1;
function Fo(e, t) {
  if (!e || Uo) return "";
  Uo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          a = i.length - 1,
          o = s.length - 1;
        1 <= a && 0 <= o && i[a] !== s[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (i[a] !== s[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || i[a] !== s[o])) {
                var c =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (Uo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ii(e) : "";
}
function ny(e) {
  switch (e.tag) {
    case 5:
      return ii(e.type);
    case 16:
      return ii("Lazy");
    case 13:
      return ii("Suspense");
    case 19:
      return ii("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Fo(e.type, !1)), e;
    case 11:
      return (e = Fo(e.type.render, !1)), e;
    case 1:
      return (e = Fo(e.type, !0)), e;
    default:
      return "";
  }
}
function Ol(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ar:
      return "Fragment";
    case sr:
      return "Portal";
    case jl:
      return "Profiler";
    case iu:
      return "StrictMode";
    case Pl:
      return "Suspense";
    case Rl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case kp:
        return (e.displayName || "Context") + ".Consumer";
      case xp:
        return (e._context.displayName || "Context") + ".Provider";
      case su:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case au:
        return (
          (t = e.displayName || null), t !== null ? t : Ol(e.type) || "Memo"
        );
      case Kt:
        (t = e._payload), (e = e._init);
        try {
          return Ol(e(t));
        } catch {}
    }
  return null;
}
function ry(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ol(t);
    case 8:
      return t === iu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function iy(e) {
  var t = Sp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ks(e) {
  e._valueTracker || (e._valueTracker = iy(e));
}
function bp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Sp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ga(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Al(e, t) {
  var n = t.checked;
  return le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function _p(e, t) {
  (t = t.checked), t != null && ru(e, "checked", t, !1);
}
function Ll(e, t) {
  _p(e, t);
  var n = yn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Dl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Dl(e, t.type, yn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Pd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Dl(e, t, n) {
  (t !== "number" || ga(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var si = Array.isArray;
function xr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ml(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Rd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (si(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yn(n) };
}
function Np(e, t) {
  var n = yn(t.value),
    r = yn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Od(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Tp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ul(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Tp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Es,
  Cp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Es = Es || document.createElement("div"),
          Es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Es.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _i(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ui = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  sy = ["Webkit", "ms", "Moz", "O"];
Object.keys(ui).forEach(function (e) {
  sy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e]);
  });
});
function Ip(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ui.hasOwnProperty(e) && ui[e])
    ? ("" + t).trim()
    : t + "px";
}
function jp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ip(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ay = le(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Fl(e, t) {
  if (t) {
    if (ay[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function zl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Bl = null;
function ou(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $l = null,
  kr = null,
  Er = null;
function Ad(e) {
  if ((e = ns(e))) {
    if (typeof $l != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = oo(t)), $l(e.stateNode, e.type, t));
  }
}
function Pp(e) {
  kr ? (Er ? Er.push(e) : (Er = [e])) : (kr = e);
}
function Rp() {
  if (kr) {
    var e = kr,
      t = Er;
    if (((Er = kr = null), Ad(e), t)) for (e = 0; e < t.length; e++) Ad(t[e]);
  }
}
function Op(e, t) {
  return e(t);
}
function Ap() {}
var zo = !1;
function Lp(e, t, n) {
  if (zo) return e(t, n);
  zo = !0;
  try {
    return Op(e, t, n);
  } finally {
    (zo = !1), (kr !== null || Er !== null) && (Ap(), Rp());
  }
}
function Ni(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = oo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Hl = !1;
if (Rt)
  try {
    var qr = {};
    Object.defineProperty(qr, "passive", {
      get: function () {
        Hl = !0;
      },
    }),
      window.addEventListener("test", qr, qr),
      window.removeEventListener("test", qr, qr);
  } catch {
    Hl = !1;
  }
function oy(e, t, n, r, i, s, a, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var di = !1,
  va = null,
  ya = !1,
  Wl = null,
  ly = {
    onError: function (e) {
      (di = !0), (va = e);
    },
  };
function cy(e, t, n, r, i, s, a, o, c) {
  (di = !1), (va = null), oy.apply(ly, arguments);
}
function uy(e, t, n, r, i, s, a, o, c) {
  if ((cy.apply(this, arguments), di)) {
    if (di) {
      var u = va;
      (di = !1), (va = null);
    } else throw Error(_(198));
    ya || ((ya = !0), (Wl = u));
  }
}
function nr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Dp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ld(e) {
  if (nr(e) !== e) throw Error(_(188));
}
function dy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nr(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Ld(i), e;
        if (s === r) return Ld(i), t;
        s = s.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var a = !1, o = i.child; o; ) {
        if (o === n) {
          (a = !0), (n = i), (r = s);
          break;
        }
        if (o === r) {
          (a = !0), (r = i), (n = s);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            (a = !0), (n = s), (r = i);
            break;
          }
          if (o === r) {
            (a = !0), (r = s), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Mp(e) {
  return (e = dy(e)), e !== null ? Up(e) : null;
}
function Up(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Up(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Fp = Ve.unstable_scheduleCallback,
  Dd = Ve.unstable_cancelCallback,
  fy = Ve.unstable_shouldYield,
  hy = Ve.unstable_requestPaint,
  he = Ve.unstable_now,
  py = Ve.unstable_getCurrentPriorityLevel,
  lu = Ve.unstable_ImmediatePriority,
  zp = Ve.unstable_UserBlockingPriority,
  wa = Ve.unstable_NormalPriority,
  my = Ve.unstable_LowPriority,
  Bp = Ve.unstable_IdlePriority,
  ro = null,
  gt = null;
function gy(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function")
    try {
      gt.onCommitFiberRoot(ro, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var lt = Math.clz32 ? Math.clz32 : wy,
  vy = Math.log,
  yy = Math.LN2;
function wy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((vy(e) / yy) | 0)) | 0;
}
var Ss = 64,
  bs = 4194304;
function ai(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function xa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~i;
    o !== 0 ? (r = ai(o)) : ((s &= a), s !== 0 && (r = ai(s)));
  } else (a = n & ~i), a !== 0 ? (r = ai(a)) : s !== 0 && (r = ai(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - lt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function xy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ky(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - lt(s),
      o = 1 << a,
      c = i[a];
    c === -1
      ? (!(o & n) || o & r) && (i[a] = xy(o, t))
      : c <= t && (e.expiredLanes |= o),
      (s &= ~o);
  }
}
function Vl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function $p() {
  var e = Ss;
  return (Ss <<= 1), !(Ss & 4194240) && (Ss = 64), e;
}
function Bo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function es(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - lt(t)),
    (e[t] = n);
}
function Ey(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - lt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function cu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Q = 0;
function Hp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wp,
  uu,
  Vp,
  Gp,
  Kp,
  Gl = !1,
  _s = [],
  on = null,
  ln = null,
  cn = null,
  Ti = new Map(),
  Ci = new Map(),
  qt = [],
  Sy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Md(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      cn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ti.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ci.delete(t.pointerId);
  }
}
function Qr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ns(t)), t !== null && uu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function by(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (on = Qr(on, e, t, n, r, i)), !0;
    case "dragenter":
      return (ln = Qr(ln, e, t, n, r, i)), !0;
    case "mouseover":
      return (cn = Qr(cn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ti.set(s, Qr(Ti.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Ci.set(s, Qr(Ci.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Yp(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var n = nr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Dp(n)), t !== null)) {
          (e.blockedOn = t),
            Kp(e.priority, function () {
              Vp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function qs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Kl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Bl = r), n.target.dispatchEvent(r), (Bl = null);
    } else return (t = ns(n)), t !== null && uu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ud(e, t, n) {
  qs(e) && n.delete(t);
}
function _y() {
  (Gl = !1),
    on !== null && qs(on) && (on = null),
    ln !== null && qs(ln) && (ln = null),
    cn !== null && qs(cn) && (cn = null),
    Ti.forEach(Ud),
    Ci.forEach(Ud);
}
function Xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gl ||
      ((Gl = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, _y)));
}
function Ii(e) {
  function t(i) {
    return Xr(i, e);
  }
  if (0 < _s.length) {
    Xr(_s[0], e);
    for (var n = 1; n < _s.length; n++) {
      var r = _s[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && Xr(on, e),
      ln !== null && Xr(ln, e),
      cn !== null && Xr(cn, e),
      Ti.forEach(t),
      Ci.forEach(t),
      n = 0;
    n < qt.length;
    n++
  )
    (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
    Yp(n), n.blockedOn === null && qt.shift();
}
var Sr = zt.ReactCurrentBatchConfig,
  ka = !0;
function Ny(e, t, n, r) {
  var i = Q,
    s = Sr.transition;
  Sr.transition = null;
  try {
    (Q = 1), du(e, t, n, r);
  } finally {
    (Q = i), (Sr.transition = s);
  }
}
function Ty(e, t, n, r) {
  var i = Q,
    s = Sr.transition;
  Sr.transition = null;
  try {
    (Q = 4), du(e, t, n, r);
  } finally {
    (Q = i), (Sr.transition = s);
  }
}
function du(e, t, n, r) {
  if (ka) {
    var i = Kl(e, t, n, r);
    if (i === null) Qo(e, t, r, Ea, n), Md(e, r);
    else if (by(i, e, t, n, r)) r.stopPropagation();
    else if ((Md(e, r), t & 4 && -1 < Sy.indexOf(e))) {
      for (; i !== null; ) {
        var s = ns(i);
        if (
          (s !== null && Wp(s),
          (s = Kl(e, t, n, r)),
          s === null && Qo(e, t, r, Ea, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Qo(e, t, r, null, n);
  }
}
var Ea = null;
function Kl(e, t, n, r) {
  if (((Ea = null), (e = ou(r)), (e = Ln(e)), e !== null))
    if (((t = nr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Dp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ea = e), null;
}
function Jp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (py()) {
        case lu:
          return 1;
        case zp:
          return 4;
        case wa:
        case my:
          return 16;
        case Bp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  fu = null,
  Qs = null;
function qp() {
  if (Qs) return Qs;
  var e,
    t = fu,
    n = t.length,
    r,
    i = "value" in tn ? tn.value : tn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++);
  return (Qs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Xs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ns() {
  return !0;
}
function Fd() {
  return !1;
}
function Ke(e) {
  function t(n, r, i, s, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ns
        : Fd),
      (this.isPropagationStopped = Fd),
      this
    );
  }
  return (
    le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ns));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ns));
      },
      persist: function () {},
      isPersistent: Ns,
    }),
    t
  );
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hu = Ke(Br),
  ts = le({}, Br, { view: 0, detail: 0 }),
  Cy = Ke(ts),
  $o,
  Ho,
  Zr,
  io = le({}, ts, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Zr &&
            (Zr && e.type === "mousemove"
              ? (($o = e.screenX - Zr.screenX), (Ho = e.screenY - Zr.screenY))
              : (Ho = $o = 0),
            (Zr = e)),
          $o);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ho;
    },
  }),
  zd = Ke(io),
  Iy = le({}, io, { dataTransfer: 0 }),
  jy = Ke(Iy),
  Py = le({}, ts, { relatedTarget: 0 }),
  Wo = Ke(Py),
  Ry = le({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Oy = Ke(Ry),
  Ay = le({}, Br, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ly = Ke(Ay),
  Dy = le({}, Br, { data: 0 }),
  Bd = Ke(Dy),
  My = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Uy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Fy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fy[e]) ? !!t[e] : !1;
}
function pu() {
  return zy;
}
var By = le({}, ts, {
    key: function (e) {
      if (e.key) {
        var t = My[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Uy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pu,
    charCode: function (e) {
      return e.type === "keypress" ? Xs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  $y = Ke(By),
  Hy = le({}, io, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $d = Ke(Hy),
  Wy = le({}, ts, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pu,
  }),
  Vy = Ke(Wy),
  Gy = le({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ky = Ke(Gy),
  Yy = le({}, io, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Jy = Ke(Yy),
  qy = [9, 13, 27, 32],
  mu = Rt && "CompositionEvent" in window,
  fi = null;
Rt && "documentMode" in document && (fi = document.documentMode);
var Qy = Rt && "TextEvent" in window && !fi,
  Qp = Rt && (!mu || (fi && 8 < fi && 11 >= fi)),
  Hd = String.fromCharCode(32),
  Wd = !1;
function Xp(e, t) {
  switch (e) {
    case "keyup":
      return qy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Zp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var or = !1;
function Xy(e, t) {
  switch (e) {
    case "compositionend":
      return Zp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wd = !0), Hd);
    case "textInput":
      return (e = t.data), e === Hd && Wd ? null : e;
    default:
      return null;
  }
}
function Zy(e, t) {
  if (or)
    return e === "compositionend" || (!mu && Xp(e, t))
      ? ((e = qp()), (Qs = fu = tn = null), (or = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var e1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!e1[e.type] : t === "textarea";
}
function em(e, t, n, r) {
  Pp(r),
    (t = Sa(t, "onChange")),
    0 < t.length &&
      ((n = new hu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var hi = null,
  ji = null;
function t1(e) {
  dm(e, 0);
}
function so(e) {
  var t = ur(e);
  if (bp(t)) return e;
}
function n1(e, t) {
  if (e === "change") return t;
}
var tm = !1;
if (Rt) {
  var Vo;
  if (Rt) {
    var Go = "oninput" in document;
    if (!Go) {
      var Gd = document.createElement("div");
      Gd.setAttribute("oninput", "return;"),
        (Go = typeof Gd.oninput == "function");
    }
    Vo = Go;
  } else Vo = !1;
  tm = Vo && (!document.documentMode || 9 < document.documentMode);
}
function Kd() {
  hi && (hi.detachEvent("onpropertychange", nm), (ji = hi = null));
}
function nm(e) {
  if (e.propertyName === "value" && so(ji)) {
    var t = [];
    em(t, ji, e, ou(e)), Lp(t1, t);
  }
}
function r1(e, t, n) {
  e === "focusin"
    ? (Kd(), (hi = t), (ji = n), hi.attachEvent("onpropertychange", nm))
    : e === "focusout" && Kd();
}
function i1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return so(ji);
}
function s1(e, t) {
  if (e === "click") return so(t);
}
function a1(e, t) {
  if (e === "input" || e === "change") return so(t);
}
function o1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ut = typeof Object.is == "function" ? Object.is : o1;
function Pi(e, t) {
  if (ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Il.call(t, i) || !ut(e[i], t[i])) return !1;
  }
  return !0;
}
function Yd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jd(e, t) {
  var n = Yd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yd(n);
  }
}
function rm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? rm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function im() {
  for (var e = window, t = ga(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ga(e.document);
  }
  return t;
}
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function l1(e) {
  var t = im(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    rm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Jd(n, s));
        var a = Jd(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var c1 = Rt && "documentMode" in document && 11 >= document.documentMode,
  lr = null,
  Yl = null,
  pi = null,
  Jl = !1;
function qd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Jl ||
    lr == null ||
    lr !== ga(r) ||
    ((r = lr),
    "selectionStart" in r && gu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (pi && Pi(pi, r)) ||
      ((pi = r),
      (r = Sa(Yl, "onSelect")),
      0 < r.length &&
        ((t = new hu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = lr))));
}
function Ts(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cr = {
    animationend: Ts("Animation", "AnimationEnd"),
    animationiteration: Ts("Animation", "AnimationIteration"),
    animationstart: Ts("Animation", "AnimationStart"),
    transitionend: Ts("Transition", "TransitionEnd"),
  },
  Ko = {},
  sm = {};
Rt &&
  ((sm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  "TransitionEvent" in window || delete cr.transitionend.transition);
function ao(e) {
  if (Ko[e]) return Ko[e];
  if (!cr[e]) return e;
  var t = cr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in sm) return (Ko[e] = t[n]);
  return e;
}
var am = ao("animationend"),
  om = ao("animationiteration"),
  lm = ao("animationstart"),
  cm = ao("transitionend"),
  um = new Map(),
  Qd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function bn(e, t) {
  um.set(e, t), tr(t, [e]);
}
for (var Yo = 0; Yo < Qd.length; Yo++) {
  var Jo = Qd[Yo],
    u1 = Jo.toLowerCase(),
    d1 = Jo[0].toUpperCase() + Jo.slice(1);
  bn(u1, "on" + d1);
}
bn(am, "onAnimationEnd");
bn(om, "onAnimationIteration");
bn(lm, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(cm, "onTransitionEnd");
jr("onMouseEnter", ["mouseout", "mouseover"]);
jr("onMouseLeave", ["mouseout", "mouseover"]);
jr("onPointerEnter", ["pointerout", "pointerover"]);
jr("onPointerLeave", ["pointerout", "pointerover"]);
tr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
tr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var oi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  f1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));
function Xd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), uy(r, t, void 0, e), (e.currentTarget = null);
}
function dm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            c = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), c !== s && i.isPropagationStopped())) break e;
          Xd(i, o, u), (s = c);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (c = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            c !== s && i.isPropagationStopped())
          )
            break e;
          Xd(i, o, u), (s = c);
        }
    }
  }
  if (ya) throw ((e = Wl), (ya = !1), (Wl = null), e);
}
function te(e, t) {
  var n = t[ec];
  n === void 0 && (n = t[ec] = new Set());
  var r = e + "__bubble";
  n.has(r) || (fm(t, e, 2, !1), n.add(r));
}
function qo(e, t, n) {
  var r = 0;
  t && (r |= 4), fm(n, e, r, t);
}
var Cs = "_reactListening" + Math.random().toString(36).slice(2);
function Ri(e) {
  if (!e[Cs]) {
    (e[Cs] = !0),
      wp.forEach(function (n) {
        n !== "selectionchange" && (f1.has(n) || qo(n, !1, e), qo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cs] || ((t[Cs] = !0), qo("selectionchange", !1, t));
  }
}
function fm(e, t, n, r) {
  switch (Jp(t)) {
    case 1:
      var i = Ny;
      break;
    case 4:
      i = Ty;
      break;
    default:
      i = du;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Hl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Qo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = Ln(o)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = s = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Lp(function () {
    var u = s,
      d = ou(n),
      f = [];
    e: {
      var m = um.get(e);
      if (m !== void 0) {
        var w = hu,
          g = e;
        switch (e) {
          case "keypress":
            if (Xs(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = $y;
            break;
          case "focusin":
            (g = "focus"), (w = Wo);
            break;
          case "focusout":
            (g = "blur"), (w = Wo);
            break;
          case "beforeblur":
          case "afterblur":
            w = Wo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = zd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = jy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Vy;
            break;
          case am:
          case om:
          case lm:
            w = Oy;
            break;
          case cm:
            w = Ky;
            break;
          case "scroll":
            w = Cy;
            break;
          case "wheel":
            w = Jy;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Ly;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = $d;
        }
        var v = (t & 4) !== 0,
          k = !v && e === "scroll",
          p = v ? (m !== null ? m + "Capture" : null) : m;
        v = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              p !== null && ((E = Ni(h, p)), E != null && v.push(Oi(h, E, y)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((m = new w(m, g, null, n, d)), f.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Bl &&
            (g = n.relatedTarget || n.fromElement) &&
            (Ln(g) || g[Ot]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = u),
              (g = g ? Ln(g) : null),
              g !== null &&
                ((k = nr(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = u)),
          w !== g)
        ) {
          if (
            ((v = zd),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = $d),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (k = w == null ? m : ur(w)),
            (y = g == null ? m : ur(g)),
            (m = new v(E, h + "leave", w, n, d)),
            (m.target = k),
            (m.relatedTarget = y),
            (E = null),
            Ln(d) === u &&
              ((v = new v(p, h + "enter", g, n, d)),
              (v.target = y),
              (v.relatedTarget = k),
              (E = v)),
            (k = E),
            w && g)
          )
            t: {
              for (v = w, p = g, h = 0, y = v; y; y = ir(y)) h++;
              for (y = 0, E = p; E; E = ir(E)) y++;
              for (; 0 < h - y; ) (v = ir(v)), h--;
              for (; 0 < y - h; ) (p = ir(p)), y--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = ir(v)), (p = ir(p));
              }
              v = null;
            }
          else v = null;
          w !== null && Zd(f, m, w, v, !1),
            g !== null && k !== null && Zd(f, k, g, v, !0);
        }
      }
      e: {
        if (
          ((m = u ? ur(u) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var S = n1;
        else if (Vd(m))
          if (tm) S = a1;
          else {
            S = i1;
            var C = r1;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = s1);
        if (S && (S = S(e, u))) {
          em(f, S, n, d);
          break e;
        }
        C && C(e, m, u),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            Dl(m, "number", m.value);
      }
      switch (((C = u ? ur(u) : window), e)) {
        case "focusin":
          (Vd(C) || C.contentEditable === "true") &&
            ((lr = C), (Yl = u), (pi = null));
          break;
        case "focusout":
          pi = Yl = lr = null;
          break;
        case "mousedown":
          Jl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Jl = !1), qd(f, n, d);
          break;
        case "selectionchange":
          if (c1) break;
        case "keydown":
        case "keyup":
          qd(f, n, d);
      }
      var T;
      if (mu)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        or
          ? Xp(e, n) && (I = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (Qp &&
          n.locale !== "ko" &&
          (or || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && or && (T = qp())
            : ((tn = d),
              (fu = "value" in tn ? tn.value : tn.textContent),
              (or = !0))),
        (C = Sa(u, I)),
        0 < C.length &&
          ((I = new Bd(I, e, null, n, d)),
          f.push({ event: I, listeners: C }),
          T ? (I.data = T) : ((T = Zp(n)), T !== null && (I.data = T)))),
        (T = Qy ? Xy(e, n) : Zy(e, n)) &&
          ((u = Sa(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Bd("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = T)));
    }
    dm(f, t);
  });
}
function Oi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Sa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Ni(e, n)),
      s != null && r.unshift(Oi(e, s, i)),
      (s = Ni(e, t)),
      s != null && r.push(Oi(e, s, i))),
      (e = e.return);
  }
  return r;
}
function ir(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zd(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      c = o.alternate,
      u = o.stateNode;
    if (c !== null && c === r) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((c = Ni(n, s)), c != null && a.unshift(Oi(n, c, o)))
        : i || ((c = Ni(n, s)), c != null && a.push(Oi(n, c, o)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var h1 = /\r\n?/g,
  p1 = /\u0000|\uFFFD/g;
function ef(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      h1,
      `
`
    )
    .replace(p1, "");
}
function Is(e, t, n) {
  if (((t = ef(t)), ef(e) !== t && n)) throw Error(_(425));
}
function ba() {}
var ql = null,
  Ql = null;
function Xl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zl = typeof setTimeout == "function" ? setTimeout : void 0,
  m1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  tf = typeof Promise == "function" ? Promise : void 0,
  g1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof tf < "u"
      ? function (e) {
          return tf.resolve(null).then(e).catch(v1);
        }
      : Zl;
function v1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ii(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ii(t);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $r = Math.random().toString(36).slice(2),
  ht = "__reactFiber$" + $r,
  Ai = "__reactProps$" + $r,
  Ot = "__reactContainer$" + $r,
  ec = "__reactEvents$" + $r,
  y1 = "__reactListeners$" + $r,
  w1 = "__reactHandles$" + $r;
function Ln(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nf(e); e !== null; ) {
          if ((n = e[ht])) return n;
          e = nf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ns(e) {
  return (
    (e = e[ht] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function oo(e) {
  return e[Ai] || null;
}
var tc = [],
  dr = -1;
function _n(e) {
  return { current: e };
}
function re(e) {
  0 > dr || ((e.current = tc[dr]), (tc[dr] = null), dr--);
}
function ee(e, t) {
  dr++, (tc[dr] = e.current), (e.current = t);
}
var wn = {},
  Ie = _n(wn),
  Fe = _n(!1),
  Wn = wn;
function Pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function _a() {
  re(Fe), re(Ie);
}
function rf(e, t, n) {
  if (Ie.current !== wn) throw Error(_(168));
  ee(Ie, t), ee(Fe, n);
}
function hm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(_(108, ry(e) || "Unknown", i));
  return le({}, n, r);
}
function Na(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wn),
    (Wn = Ie.current),
    ee(Ie, e),
    ee(Fe, Fe.current),
    !0
  );
}
function sf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = hm(e, t, Wn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Fe),
      re(Ie),
      ee(Ie, e))
    : re(Fe),
    ee(Fe, n);
}
var bt = null,
  lo = !1,
  Zo = !1;
function pm(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
function x1(e) {
  (lo = !0), pm(e);
}
function Nn() {
  if (!Zo && bt !== null) {
    Zo = !0;
    var e = 0,
      t = Q;
    try {
      var n = bt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (bt = null), (lo = !1);
    } catch (i) {
      throw (bt !== null && (bt = bt.slice(e + 1)), Fp(lu, Nn), i);
    } finally {
      (Q = t), (Zo = !1);
    }
  }
  return null;
}
var fr = [],
  hr = 0,
  Ta = null,
  Ca = 0,
  qe = [],
  Qe = 0,
  Vn = null,
  Nt = 1,
  Tt = "";
function Pn(e, t) {
  (fr[hr++] = Ca), (fr[hr++] = Ta), (Ta = e), (Ca = t);
}
function mm(e, t, n) {
  (qe[Qe++] = Nt), (qe[Qe++] = Tt), (qe[Qe++] = Vn), (Vn = e);
  var r = Nt;
  e = Tt;
  var i = 32 - lt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - lt(t) + i;
  if (30 < s) {
    var a = i - (i % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Nt = (1 << (32 - lt(t) + i)) | (n << i) | r),
      (Tt = s + e);
  } else (Nt = (1 << s) | (n << i) | r), (Tt = e);
}
function vu(e) {
  e.return !== null && (Pn(e, 1), mm(e, 1, 0));
}
function yu(e) {
  for (; e === Ta; )
    (Ta = fr[--hr]), (fr[hr] = null), (Ca = fr[--hr]), (fr[hr] = null);
  for (; e === Vn; )
    (Vn = qe[--Qe]),
      (qe[Qe] = null),
      (Tt = qe[--Qe]),
      (qe[Qe] = null),
      (Nt = qe[--Qe]),
      (qe[Qe] = null);
}
var We = null,
  He = null,
  se = !1,
  at = null;
function gm(e, t) {
  var n = Xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function af(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (He = un(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Vn !== null ? { id: Nt, overflow: Tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rc(e) {
  if (se) {
    var t = He;
    if (t) {
      var n = t;
      if (!af(e, t)) {
        if (nc(e)) throw Error(_(418));
        t = un(n.nextSibling);
        var r = We;
        t && af(e, t)
          ? gm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (We = e));
      }
    } else {
      if (nc(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (We = e);
    }
  }
}
function of(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function js(e) {
  if (e !== We) return !1;
  if (!se) return of(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xl(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (nc(e)) throw (vm(), Error(_(418)));
    for (; t; ) gm(e, t), (t = un(t.nextSibling));
  }
  if ((of(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = un(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = We ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function vm() {
  for (var e = He; e; ) e = un(e.nextSibling);
}
function Rr() {
  (He = We = null), (se = !1);
}
function wu(e) {
  at === null ? (at = [e]) : at.push(e);
}
var k1 = zt.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ia = _n(null),
  ja = null,
  pr = null,
  xu = null;
function ku() {
  xu = pr = ja = null;
}
function Eu(e) {
  var t = Ia.current;
  re(Ia), (e._currentValue = t);
}
function ic(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function br(e, t) {
  (ja = e),
    (xu = pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function tt(e) {
  var t = e._currentValue;
  if (xu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
      if (ja === null) throw Error(_(308));
      (pr = e), (ja.dependencies = { lanes: 0, firstContext: e });
    } else pr = pr.next = e;
  return t;
}
var Dn = null;
function Su(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
function ym(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Su(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    At(e, r)
  );
}
function At(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function bu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function jt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      At(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Su(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    At(e, n)
  );
}
function Zs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
  }
}
function lf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Pa(e, t, n, r) {
  var i = e.updateQueue;
  Yt = !1;
  var s = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var c = o,
      u = c.next;
    (c.next = null), a === null ? (s = u) : (a.next = u), (a = c);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== a &&
        (o === null ? (d.firstBaseUpdate = u) : (o.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var f = i.baseState;
    (a = 0), (d = u = c = null), (o = s);
    do {
      var m = o.lane,
        w = o.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var g = e,
            v = o;
          switch (((m = t), (w = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                f = g.call(w, f, m);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (m = typeof g == "function" ? g.call(w, f, m) : g),
                m == null)
              )
                break e;
              f = le({}, f, m);
              break e;
            case 2:
              Yt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [o]) : m.push(o));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((u = d = w), (c = f)) : (d = d.next = w),
          (a |= m);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (m = o),
          (o = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (c = f),
      (i.baseState = c),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Kn |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function cf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(_(191, i));
        i.call(r);
      }
    }
}
var xm = new yp.Component().refs;
function sc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var co = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      i = hn(e),
      s = jt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = dn(e, s, i)),
      t !== null && (ct(t, e, i, r), Zs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      i = hn(e),
      s = jt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = dn(e, s, i)),
      t !== null && (ct(t, e, i, r), Zs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = hn(e),
      i = jt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = dn(e, i, r)),
      t !== null && (ct(t, e, r, n), Zs(t, e, r));
  },
};
function uf(e, t, n, r, i, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Pi(n, r) || !Pi(i, s)
      : !0
  );
}
function km(e, t, n) {
  var r = !1,
    i = wn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = tt(s))
      : ((i = ze(t) ? Wn : Ie.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Pr(e, i) : wn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = co),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function df(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && co.enqueueReplaceState(t, t.state, null);
}
function ac(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = xm), bu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = tt(s))
    : ((s = ze(t) ? Wn : Ie.current), (i.context = Pr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (sc(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && co.enqueueReplaceState(i, i.state, null),
      Pa(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ei(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var o = i.refs;
            o === xm && (o = i.refs = {}),
              a === null ? delete o[s] : (o[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ps(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ff(e) {
  var t = e._init;
  return t(e._payload);
}
function Em(e) {
  function t(p, h) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [h]), (p.flags |= 16)) : y.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = pn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, h, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((p.flags |= 2), h) : y)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function o(p, h, y, E) {
    return h === null || h.tag !== 6
      ? ((h = al(y, p.mode, E)), (h.return = p), h)
      : ((h = i(h, y)), (h.return = p), h);
  }
  function c(p, h, y, E) {
    var S = y.type;
    return S === ar
      ? d(p, h, y.props.children, E, y.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Kt &&
            ff(S) === h.type))
      ? ((E = i(h, y.props)), (E.ref = ei(p, h, y)), (E.return = p), E)
      : ((E = sa(y.type, y.key, y.props, null, p.mode, E)),
        (E.ref = ei(p, h, y)),
        (E.return = p),
        E);
  }
  function u(p, h, y, E) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = ol(y, p.mode, E)), (h.return = p), h)
      : ((h = i(h, y.children || [])), (h.return = p), h);
  }
  function d(p, h, y, E, S) {
    return h === null || h.tag !== 7
      ? ((h = $n(y, p.mode, E, S)), (h.return = p), h)
      : ((h = i(h, y)), (h.return = p), h);
  }
  function f(p, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = al("" + h, p.mode, y)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case xs:
          return (
            (y = sa(h.type, h.key, h.props, null, p.mode, y)),
            (y.ref = ei(p, null, h)),
            (y.return = p),
            y
          );
        case sr:
          return (h = ol(h, p.mode, y)), (h.return = p), h;
        case Kt:
          var E = h._init;
          return f(p, E(h._payload), y);
      }
      if (si(h) || Jr(h))
        return (h = $n(h, p.mode, y, null)), (h.return = p), h;
      Ps(p, h);
    }
    return null;
  }
  function m(p, h, y, E) {
    var S = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return S !== null ? null : o(p, h, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case xs:
          return y.key === S ? c(p, h, y, E) : null;
        case sr:
          return y.key === S ? u(p, h, y, E) : null;
        case Kt:
          return (S = y._init), m(p, h, S(y._payload), E);
      }
      if (si(y) || Jr(y)) return S !== null ? null : d(p, h, y, E, null);
      Ps(p, y);
    }
    return null;
  }
  function w(p, h, y, E, S) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(y) || null), o(h, p, "" + E, S);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case xs:
          return (p = p.get(E.key === null ? y : E.key) || null), c(h, p, E, S);
        case sr:
          return (p = p.get(E.key === null ? y : E.key) || null), u(h, p, E, S);
        case Kt:
          var C = E._init;
          return w(p, h, y, C(E._payload), S);
      }
      if (si(E) || Jr(E)) return (p = p.get(y) || null), d(h, p, E, S, null);
      Ps(h, E);
    }
    return null;
  }
  function g(p, h, y, E) {
    for (
      var S = null, C = null, T = h, I = (h = 0), D = null;
      T !== null && I < y.length;
      I++
    ) {
      T.index > I ? ((D = T), (T = null)) : (D = T.sibling);
      var L = m(p, T, y[I], E);
      if (L === null) {
        T === null && (T = D);
        break;
      }
      e && T && L.alternate === null && t(p, T),
        (h = s(L, h, I)),
        C === null ? (S = L) : (C.sibling = L),
        (C = L),
        (T = D);
    }
    if (I === y.length) return n(p, T), se && Pn(p, I), S;
    if (T === null) {
      for (; I < y.length; I++)
        (T = f(p, y[I], E)),
          T !== null &&
            ((h = s(T, h, I)), C === null ? (S = T) : (C.sibling = T), (C = T));
      return se && Pn(p, I), S;
    }
    for (T = r(p, T); I < y.length; I++)
      (D = w(T, p, I, y[I], E)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? I : D.key),
          (h = s(D, h, I)),
          C === null ? (S = D) : (C.sibling = D),
          (C = D));
    return (
      e &&
        T.forEach(function (Z) {
          return t(p, Z);
        }),
      se && Pn(p, I),
      S
    );
  }
  function v(p, h, y, E) {
    var S = Jr(y);
    if (typeof S != "function") throw Error(_(150));
    if (((y = S.call(y)), y == null)) throw Error(_(151));
    for (
      var C = (S = null), T = h, I = (h = 0), D = null, L = y.next();
      T !== null && !L.done;
      I++, L = y.next()
    ) {
      T.index > I ? ((D = T), (T = null)) : (D = T.sibling);
      var Z = m(p, T, L.value, E);
      if (Z === null) {
        T === null && (T = D);
        break;
      }
      e && T && Z.alternate === null && t(p, T),
        (h = s(Z, h, I)),
        C === null ? (S = Z) : (C.sibling = Z),
        (C = Z),
        (T = D);
    }
    if (L.done) return n(p, T), se && Pn(p, I), S;
    if (T === null) {
      for (; !L.done; I++, L = y.next())
        (L = f(p, L.value, E)),
          L !== null &&
            ((h = s(L, h, I)), C === null ? (S = L) : (C.sibling = L), (C = L));
      return se && Pn(p, I), S;
    }
    for (T = r(p, T); !L.done; I++, L = y.next())
      (L = w(T, p, I, L.value, E)),
        L !== null &&
          (e && L.alternate !== null && T.delete(L.key === null ? I : L.key),
          (h = s(L, h, I)),
          C === null ? (S = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        T.forEach(function (ce) {
          return t(p, ce);
        }),
      se && Pn(p, I),
      S
    );
  }
  function k(p, h, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ar &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case xs:
          e: {
            for (var S = y.key, C = h; C !== null; ) {
              if (C.key === S) {
                if (((S = y.type), S === ar)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (h = i(C, y.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Kt &&
                    ff(S) === C.type)
                ) {
                  n(p, C.sibling),
                    (h = i(C, y.props)),
                    (h.ref = ei(p, C, y)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            y.type === ar
              ? ((h = $n(y.props.children, p.mode, E, y.key)),
                (h.return = p),
                (p = h))
              : ((E = sa(y.type, y.key, y.props, null, p.mode, E)),
                (E.ref = ei(p, h, y)),
                (E.return = p),
                (p = E));
          }
          return a(p);
        case sr:
          e: {
            for (C = y.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, y.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = ol(y, p.mode, E)), (h.return = p), (p = h);
          }
          return a(p);
        case Kt:
          return (C = y._init), k(p, h, C(y._payload), E);
      }
      if (si(y)) return g(p, h, y, E);
      if (Jr(y)) return v(p, h, y, E);
      Ps(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, y)), (h.return = p), (p = h))
          : (n(p, h), (h = al(y, p.mode, E)), (h.return = p), (p = h)),
        a(p))
      : n(p, h);
  }
  return k;
}
var Or = Em(!0),
  Sm = Em(!1),
  rs = {},
  vt = _n(rs),
  Li = _n(rs),
  Di = _n(rs);
function Mn(e) {
  if (e === rs) throw Error(_(174));
  return e;
}
function _u(e, t) {
  switch ((ee(Di, t), ee(Li, e), ee(vt, rs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ul(t, e));
  }
  re(vt), ee(vt, t);
}
function Ar() {
  re(vt), re(Li), re(Di);
}
function bm(e) {
  Mn(Di.current);
  var t = Mn(vt.current),
    n = Ul(t, e.type);
  t !== n && (ee(Li, e), ee(vt, n));
}
function Nu(e) {
  Li.current === e && (re(vt), re(Li));
}
var ae = _n(0);
function Ra(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var el = [];
function Tu() {
  for (var e = 0; e < el.length; e++)
    el[e]._workInProgressVersionPrimary = null;
  el.length = 0;
}
var ea = zt.ReactCurrentDispatcher,
  tl = zt.ReactCurrentBatchConfig,
  Gn = 0,
  oe = null,
  ye = null,
  ke = null,
  Oa = !1,
  mi = !1,
  Mi = 0,
  E1 = 0;
function Ne() {
  throw Error(_(321));
}
function Cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ut(e[n], t[n])) return !1;
  return !0;
}
function Iu(e, t, n, r, i, s) {
  if (
    ((Gn = s),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ea.current = e === null || e.memoizedState === null ? N1 : T1),
    (e = n(r, i)),
    mi)
  ) {
    s = 0;
    do {
      if (((mi = !1), (Mi = 0), 25 <= s)) throw Error(_(301));
      (s += 1),
        (ke = ye = null),
        (t.updateQueue = null),
        (ea.current = C1),
        (e = n(r, i));
    } while (mi);
  }
  if (
    ((ea.current = Aa),
    (t = ye !== null && ye.next !== null),
    (Gn = 0),
    (ke = ye = oe = null),
    (Oa = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function ju() {
  var e = Mi !== 0;
  return (Mi = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (oe.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function nt() {
  if (ye === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = ke === null ? oe.memoizedState : ke.next;
  if (t !== null) (ke = t), (ye = e);
  else {
    if (e === null) throw Error(_(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      ke === null ? (oe.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function Ui(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nl(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ye,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = s.next), (s.next = a);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var o = (a = null),
      c = null,
      u = s;
    do {
      var d = u.lane;
      if ((Gn & d) === d)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((o = c = f), (a = r)) : (c = c.next = f),
          (oe.lanes |= d),
          (Kn |= d);
      }
      u = u.next;
    } while (u !== null && u !== s);
    c === null ? (a = r) : (c.next = o),
      ut(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (oe.lanes |= s), (Kn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function rl(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== i);
    ut(s, t.memoizedState) || (Me = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function _m() {}
function Nm(e, t) {
  var n = oe,
    r = nt(),
    i = t(),
    s = !ut(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Me = !0)),
    (r = r.queue),
    Pu(Im.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Fi(9, Cm.bind(null, n, r, i, t), void 0, null),
      Ee === null)
    )
      throw Error(_(349));
    Gn & 30 || Tm(n, t, i);
  }
  return i;
}
function Tm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Cm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), jm(t) && Pm(e);
}
function Im(e, t, n) {
  return n(function () {
    jm(t) && Pm(e);
  });
}
function jm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ut(e, n);
  } catch {
    return !0;
  }
}
function Pm(e) {
  var t = At(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function hf(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ui,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _1.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function Fi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Rm() {
  return nt().memoizedState;
}
function ta(e, t, n, r) {
  var i = ft();
  (oe.flags |= e),
    (i.memoizedState = Fi(1 | t, n, void 0, r === void 0 ? null : r));
}
function uo(e, t, n, r) {
  var i = nt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ye !== null) {
    var a = ye.memoizedState;
    if (((s = a.destroy), r !== null && Cu(r, a.deps))) {
      i.memoizedState = Fi(t, n, s, r);
      return;
    }
  }
  (oe.flags |= e), (i.memoizedState = Fi(1 | t, n, s, r));
}
function pf(e, t) {
  return ta(8390656, 8, e, t);
}
function Pu(e, t) {
  return uo(2048, 8, e, t);
}
function Om(e, t) {
  return uo(4, 2, e, t);
}
function Am(e, t) {
  return uo(4, 4, e, t);
}
function Lm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Dm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), uo(4, 4, Lm.bind(null, t, e), n)
  );
}
function Ru() {}
function Mm(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Um(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fm(e, t, n) {
  return Gn & 21
    ? (ut(n, t) || ((n = $p()), (oe.lanes |= n), (Kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function S1(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = tl.transition;
  tl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (tl.transition = r);
  }
}
function zm() {
  return nt().memoizedState;
}
function b1(e, t, n) {
  var r = hn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Bm(e))
  )
    $m(t, n);
  else if (((n = ym(e, t, n, r)), n !== null)) {
    var i = Oe();
    ct(n, e, r, i), Hm(n, t, r);
  }
}
function _1(e, t, n) {
  var r = hn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bm(e)) $m(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = s(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), ut(o, a))) {
          var c = t.interleaved;
          c === null
            ? ((i.next = i), Su(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ym(e, t, i, r)),
      n !== null && ((i = Oe()), ct(n, e, r, i), Hm(n, t, r));
  }
}
function Bm(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function $m(e, t) {
  mi = Oa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
  }
}
var Aa = {
    readContext: tt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  N1 = {
    readContext: tt,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: tt,
    useEffect: pf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ta(4194308, 4, Lm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ta(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ta(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = b1.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hf,
    useDebugValue: Ru,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = hf(!1),
        t = e[0];
      return (e = S1.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        i = ft();
      if (se) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(_(349));
        Gn & 30 || Tm(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        pf(Im.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Fi(9, Cm.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = Ee.identifierPrefix;
      if (se) {
        var n = Tt,
          r = Nt;
        (n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Mi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = E1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  T1 = {
    readContext: tt,
    useCallback: Mm,
    useContext: tt,
    useEffect: Pu,
    useImperativeHandle: Dm,
    useInsertionEffect: Om,
    useLayoutEffect: Am,
    useMemo: Um,
    useReducer: nl,
    useRef: Rm,
    useState: function () {
      return nl(Ui);
    },
    useDebugValue: Ru,
    useDeferredValue: function (e) {
      var t = nt();
      return Fm(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = nl(Ui)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: _m,
    useSyncExternalStore: Nm,
    useId: zm,
    unstable_isNewReconciler: !1,
  },
  C1 = {
    readContext: tt,
    useCallback: Mm,
    useContext: tt,
    useEffect: Pu,
    useImperativeHandle: Dm,
    useInsertionEffect: Om,
    useLayoutEffect: Am,
    useMemo: Um,
    useReducer: rl,
    useRef: Rm,
    useState: function () {
      return rl(Ui);
    },
    useDebugValue: Ru,
    useDeferredValue: function (e) {
      var t = nt();
      return ye === null ? (t.memoizedState = e) : Fm(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = rl(Ui)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: _m,
    useSyncExternalStore: Nm,
    useId: zm,
    unstable_isNewReconciler: !1,
  };
function Lr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ny(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function il(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var I1 = typeof WeakMap == "function" ? WeakMap : Map;
function Wm(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Da || ((Da = !0), (vc = r)), oc(e, t);
    }),
    n
  );
}
function Vm(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        oc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        oc(e, t),
          typeof r != "function" &&
            (fn === null ? (fn = new Set([this])) : fn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function mf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new I1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = H1.bind(null, e, t, n)), t.then(e, e));
}
function gf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = jt(-1, 1)), (t.tag = 2), dn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var j1 = zt.ReactCurrentOwner,
  Me = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? Sm(t, null, n, r) : Or(t, e.child, n, r);
}
function yf(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    br(t, i),
    (r = Iu(e, t, n, r, s, i)),
    (n = ju()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Lt(e, t, i))
      : (se && n && vu(t), (t.flags |= 1), Pe(e, t, r, i), t.child)
  );
}
function wf(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !zu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Gm(e, t, s, r, i))
      : ((e = sa(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Pi), n(a, r) && e.ref === t.ref)
    )
      return Lt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = pn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Gm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Pi(s, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), Lt(e, t, i);
  }
  return lc(e, t, n, r, i);
}
function Km(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(gr, $e),
        ($e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(gr, $e),
          ($e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ee(gr, $e),
        ($e |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(gr, $e),
      ($e |= r);
  return Pe(e, t, i, n), t.child;
}
function Ym(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function lc(e, t, n, r, i) {
  var s = ze(n) ? Wn : Ie.current;
  return (
    (s = Pr(t, s)),
    br(t, i),
    (n = Iu(e, t, n, r, s, i)),
    (r = ju()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Lt(e, t, i))
      : (se && r && vu(t), (t.flags |= 1), Pe(e, t, n, i), t.child)
  );
}
function xf(e, t, n, r, i) {
  if (ze(n)) {
    var s = !0;
    Na(t);
  } else s = !1;
  if ((br(t, i), t.stateNode === null))
    na(e, t), km(t, n, r), ac(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = tt(u))
      : ((u = ze(n) ? Wn : Ie.current), (u = Pr(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== r || c !== u) && df(t, a, r, u)),
      (Yt = !1);
    var m = t.memoizedState;
    (a.state = m),
      Pa(t, r, a, i),
      (c = t.memoizedState),
      o !== r || m !== c || Fe.current || Yt
        ? (typeof d == "function" && (sc(t, n, d, r), (c = t.memoizedState)),
          (o = Yt || uf(t, n, o, r, m, c, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = u),
          (r = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      wm(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : it(t.type, o)),
      (a.props = u),
      (f = t.pendingProps),
      (m = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = tt(c))
        : ((c = ze(n) ? Wn : Ie.current), (c = Pr(t, c)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== f || m !== c) && df(t, a, r, c)),
      (Yt = !1),
      (m = t.memoizedState),
      (a.state = m),
      Pa(t, r, a, i);
    var g = t.memoizedState;
    o !== f || m !== g || Fe.current || Yt
      ? (typeof w == "function" && (sc(t, n, w, r), (g = t.memoizedState)),
        (u = Yt || uf(t, n, u, r, m, g, c) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, g, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, g, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (a.props = r),
        (a.state = g),
        (a.context = c),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return cc(e, t, n, r, s, i);
}
function cc(e, t, n, r, i, s) {
  Ym(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && sf(t, n, !1), Lt(e, t, s);
  (r = t.stateNode), (j1.current = t);
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Or(t, e.child, null, s)), (t.child = Or(t, null, o, s)))
      : Pe(e, t, o, s),
    (t.memoizedState = r.state),
    i && sf(t, n, !0),
    t.child
  );
}
function Jm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? rf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && rf(e, t.context, !1),
    _u(e, t.containerInfo);
}
function kf(e, t, n, r, i) {
  return Rr(), wu(i), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var uc = { dehydrated: null, treeContext: null, retryLane: 0 };
function dc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qm(e, t, n) {
  var r = t.pendingProps,
    i = ae.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ee(ae, i & 1),
    e === null)
  )
    return (
      rc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = po(a, r, 0, null)),
              (e = $n(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = dc(n)),
              (t.memoizedState = uc),
              e)
            : Ou(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return P1(e, t, a, r, o, i, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (i = e.child), (o = i.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = pn(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (s = pn(o, s)) : ((s = $n(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? dc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = uc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = pn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ou(e, t) {
  return (
    (t = po({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Rs(e, t, n, r) {
  return (
    r !== null && wu(r),
    Or(t, e.child, null, n),
    (e = Ou(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function P1(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = il(Error(_(422)))), Rs(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = po({ mode: "visible", children: r.children }, i, 0, null)),
        (s = $n(s, i, a, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Or(t, e.child, null, a),
        (t.child.memoizedState = dc(a)),
        (t.memoizedState = uc),
        s);
  if (!(t.mode & 1)) return Rs(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (s = Error(_(419))), (r = il(s, r, void 0)), Rs(e, t, a, r);
  }
  if (((o = (a & e.childLanes) !== 0), Me || o)) {
    if (((r = Ee), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), At(e, i), ct(r, e, i, -1));
    }
    return Fu(), (r = il(Error(_(421)))), Rs(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = W1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (He = un(i.nextSibling)),
      (We = t),
      (se = !0),
      (at = null),
      e !== null &&
        ((qe[Qe++] = Nt),
        (qe[Qe++] = Tt),
        (qe[Qe++] = Vn),
        (Nt = e.id),
        (Tt = e.overflow),
        (Vn = t)),
      (t = Ou(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ef(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ic(e.return, t, n);
}
function sl(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Qm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Pe(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ef(e, n, t);
        else if (e.tag === 19) Ef(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ra(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          sl(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ra(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        sl(t, !0, n, null, s);
        break;
      case "together":
        sl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function na(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function R1(e, t, n) {
  switch (t.tag) {
    case 3:
      Jm(t), Rr();
      break;
    case 5:
      bm(t);
      break;
    case 1:
      ze(t.type) && Na(t);
      break;
    case 4:
      _u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ee(Ia, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? qm(e, t, n)
          : (ee(ae, ae.current & 1),
            (e = Lt(e, t, n)),
            e !== null ? e.sibling : null);
      ee(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ee(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Km(e, t, n);
  }
  return Lt(e, t, n);
}
var Xm, fc, Zm, eg;
Xm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
fc = function () {};
Zm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Mn(vt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Al(e, i)), (r = Al(e, r)), (s = []);
        break;
      case "select":
        (i = le({}, i, { value: void 0 })),
          (r = le({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Ml(e, i)), (r = Ml(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ba);
    }
    Fl(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var o = i[u];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (bi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((o = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && c !== o && (c != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                o[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (s || (s = []), s.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (s = s || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (s = s || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (bi.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && te("scroll", e),
                  s || o === c || (s = []))
                : (s = s || []).push(u, c));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
eg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ti(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function O1(e, t, n) {
  var r = t.pendingProps;
  switch ((yu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Te(t), null;
    case 1:
      return ze(t.type) && _a(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ar(),
        re(Fe),
        re(Ie),
        Tu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (js(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), at !== null && (xc(at), (at = null)))),
        fc(e, t),
        Te(t),
        null
      );
    case 5:
      Nu(t);
      var i = Mn(Di.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Zm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Te(t), null;
        }
        if (((e = Mn(vt.current)), js(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[ht] = t), (r[Ai] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < oi.length; i++) te(oi[i], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              jd(r, s), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                te("invalid", r);
              break;
            case "textarea":
              Rd(r, s), te("invalid", r);
          }
          Fl(n, s), (i = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var o = s[a];
              a === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Is(r.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Is(r.textContent, o, e),
                    (i = ["children", "" + o]))
                : bi.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              ks(r), Pd(r, s, !0);
              break;
            case "textarea":
              ks(r), Od(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ba);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Tp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[ht] = t),
            (e[Ai] = r),
            Xm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = zl(n, r)), n)) {
              case "dialog":
                te("cancel", e), te("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < oi.length; i++) te(oi[i], e);
                i = r;
                break;
              case "source":
                te("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", e), te("load", e), (i = r);
                break;
              case "details":
                te("toggle", e), (i = r);
                break;
              case "input":
                jd(e, r), (i = Al(e, r)), te("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = le({}, r, { value: void 0 })),
                  te("invalid", e);
                break;
              case "textarea":
                Rd(e, r), (i = Ml(e, r)), te("invalid", e);
                break;
              default:
                i = r;
            }
            Fl(n, i), (o = i);
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var c = o[s];
                s === "style"
                  ? jp(e, c)
                  : s === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Cp(e, c))
                  : s === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && _i(e, c)
                    : typeof c == "number" && _i(e, "" + c)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (bi.hasOwnProperty(s)
                      ? c != null && s === "onScroll" && te("scroll", e)
                      : c != null && ru(e, s, c, a));
              }
            switch (n) {
              case "input":
                ks(e), Pd(e, r, !1);
                break;
              case "textarea":
                ks(e), Od(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? xr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      xr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ba);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) eg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = Mn(Di.current)), Mn(vt.current), js(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ht] = t),
            (s = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                Is(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Is(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ht] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (re(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && He !== null && t.mode & 1 && !(t.flags & 128))
          vm(), Rr(), (t.flags |= 98560), (s = !1);
        else if (((s = js(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(_(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(_(317));
            s[ht] = t;
          } else
            Rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (s = !1);
        } else at !== null && (xc(at), (at = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? we === 0 && (we = 3) : Fu())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        Ar(), fc(e, t), e === null && Ri(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return Eu(t.type._context), Te(t), null;
    case 17:
      return ze(t.type) && _a(), Te(t), null;
    case 19:
      if ((re(ae), (s = t.memoizedState), s === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) ti(s, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ra(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ti(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            he() > Dr &&
            ((t.flags |= 128), (r = !0), ti(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ra(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ti(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !se)
            )
              return Te(t), null;
          } else
            2 * he() - s.renderingStartTime > Dr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ti(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = he()),
          (t.sibling = null),
          (n = ae.current),
          ee(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        Uu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function A1(e, t) {
  switch ((yu(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && _a(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ar(),
        re(Fe),
        re(Ie),
        Tu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Nu(t), null;
    case 13:
      if (
        (re(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        Rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(ae), null;
    case 4:
      return Ar(), null;
    case 10:
      return Eu(t.type._context), null;
    case 22:
    case 23:
      return Uu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Os = !1,
  Ce = !1,
  L1 = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function mr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ue(e, t, r);
      }
    else n.current = null;
}
function hc(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var Sf = !1;
function D1(e, t) {
  if (((ql = ka), (e = im()), gu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            c = -1,
            u = 0,
            d = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              f !== n || (i !== 0 && f.nodeType !== 3) || (o = a + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (c = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (w = f.firstChild) !== null;

            )
              (m = f), (f = w);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === i && (o = a),
                m === s && ++d === r && (c = a),
                (w = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = w;
          }
          n = o === -1 || c === -1 ? null : { start: o, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ql = { focusedElem: e, selectionRange: n }, ka = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    k = g.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : it(t.type, v),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (E) {
          ue(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (g = Sf), (Sf = !1), g;
}
function gi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && hc(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function fo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function pc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function tg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), tg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ht], delete t[Ai], delete t[ec], delete t[y1], delete t[w1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ng(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ng(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function mc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ba));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (mc(e, t, n), e = e.sibling; e !== null; ) mc(e, t, n), (e = e.sibling);
}
function gc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gc(e, t, n), e = e.sibling; e !== null; ) gc(e, t, n), (e = e.sibling);
}
var Se = null,
  st = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) rg(e, t, n), (n = n.sibling);
}
function rg(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function")
    try {
      gt.onCommitFiberUnmount(ro, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || mr(n, t);
    case 6:
      var r = Se,
        i = st;
      (Se = null),
        $t(e, t, n),
        (Se = r),
        (st = i),
        Se !== null &&
          (st
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (st
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xo(e.parentNode, n)
              : e.nodeType === 1 && Xo(e, n),
            Ii(e))
          : Xo(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (i = st),
        (Se = n.stateNode.containerInfo),
        (st = !0),
        $t(e, t, n),
        (Se = r),
        (st = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && hc(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (
        !Ce &&
        (mr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          ue(n, t, o);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), $t(e, t, n), (Ce = r))
        : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function _f(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new L1()),
      t.forEach(function (r) {
        var i = V1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function rt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (Se = o.stateNode), (st = !1);
              break e;
            case 3:
              (Se = o.stateNode.containerInfo), (st = !0);
              break e;
            case 4:
              (Se = o.stateNode.containerInfo), (st = !0);
              break e;
          }
          o = o.return;
        }
        if (Se === null) throw Error(_(160));
        rg(s, a, i), (Se = null), (st = !1);
        var c = i.alternate;
        c !== null && (c.return = null), (i.return = null);
      } catch (u) {
        ue(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ig(t, e), (t = t.sibling);
}
function ig(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((rt(t, e), dt(e), r & 4)) {
        try {
          gi(3, e, e.return), fo(3, e);
        } catch (v) {
          ue(e, e.return, v);
        }
        try {
          gi(5, e, e.return);
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 1:
      rt(t, e), dt(e), r & 512 && n !== null && mr(n, n.return);
      break;
    case 5:
      if (
        (rt(t, e),
        dt(e),
        r & 512 && n !== null && mr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          _i(i, "");
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            o === "input" && s.type === "radio" && s.name != null && _p(i, s),
              zl(o, a);
            var u = zl(o, s);
            for (a = 0; a < c.length; a += 2) {
              var d = c[a],
                f = c[a + 1];
              d === "style"
                ? jp(i, f)
                : d === "dangerouslySetInnerHTML"
                ? Cp(i, f)
                : d === "children"
                ? _i(i, f)
                : ru(i, d, f, u);
            }
            switch (o) {
              case "input":
                Ll(i, s);
                break;
              case "textarea":
                Np(i, s);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var w = s.value;
                w != null
                  ? xr(i, !!s.multiple, w, !1)
                  : m !== !!s.multiple &&
                    (s.defaultValue != null
                      ? xr(i, !!s.multiple, s.defaultValue, !0)
                      : xr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Ai] = s;
          } catch (v) {
            ue(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((rt(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (rt(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ii(t.containerInfo);
        } catch (v) {
          ue(e, e.return, v);
        }
      break;
    case 4:
      rt(t, e), dt(e);
      break;
    case 13:
      rt(t, e),
        dt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Du = he())),
        r & 4 && _f(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (u = Ce) || d), rt(t, e), (Ce = u)) : rt(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (P = e, d = e.child; d !== null; ) {
            for (f = P = d; P !== null; ) {
              switch (((m = P), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gi(4, m, m.return);
                  break;
                case 1:
                  mr(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      ue(r, n, v);
                    }
                  }
                  break;
                case 5:
                  mr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Tf(f);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (P = w)) : Tf(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = f.stateNode),
                      (c = f.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = Ip("display", a)));
              } catch (v) {
                ue(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                ue(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      rt(t, e), dt(e), r & 4 && _f(e);
      break;
    case 21:
      break;
    default:
      rt(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ng(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (_i(i, ""), (r.flags &= -33));
          var s = bf(e);
          gc(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = bf(e);
          mc(e, o, a);
          break;
        default:
          throw Error(_(161));
      }
    } catch (c) {
      ue(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function M1(e, t, n) {
  (P = e), sg(e);
}
function sg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var i = P,
      s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Os;
      if (!a) {
        var o = i.alternate,
          c = (o !== null && o.memoizedState !== null) || Ce;
        o = Os;
        var u = Ce;
        if (((Os = a), (Ce = c) && !u))
          for (P = i; P !== null; )
            (a = P),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Cf(i)
                : c !== null
                ? ((c.return = a), (P = c))
                : Cf(i);
        for (; s !== null; ) (P = s), sg(s), (s = s.sibling);
        (P = i), (Os = o), (Ce = u);
      }
      Nf(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (P = s)) : Nf(e);
  }
}
function Nf(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && cf(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cf(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Ii(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Ce || (t.flags & 512 && pc(t));
      } catch (m) {
        ue(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Tf(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Cf(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fo(4, t);
          } catch (c) {
            ue(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              ue(t, i, c);
            }
          }
          var s = t.return;
          try {
            pc(t);
          } catch (c) {
            ue(t, s, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            pc(t);
          } catch (c) {
            ue(t, a, c);
          }
      }
    } catch (c) {
      ue(t, t.return, c);
    }
    if (t === e) {
      P = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (P = o);
      break;
    }
    P = t.return;
  }
}
var U1 = Math.ceil,
  La = zt.ReactCurrentDispatcher,
  Au = zt.ReactCurrentOwner,
  Ze = zt.ReactCurrentBatchConfig,
  G = 0,
  Ee = null,
  me = null,
  be = 0,
  $e = 0,
  gr = _n(0),
  we = 0,
  zi = null,
  Kn = 0,
  ho = 0,
  Lu = 0,
  vi = null,
  De = null,
  Du = 0,
  Dr = 1 / 0,
  Et = null,
  Da = !1,
  vc = null,
  fn = null,
  As = !1,
  nn = null,
  Ma = 0,
  yi = 0,
  yc = null,
  ra = -1,
  ia = 0;
function Oe() {
  return G & 6 ? he() : ra !== -1 ? ra : (ra = he());
}
function hn(e) {
  return e.mode & 1
    ? G & 2 && be !== 0
      ? be & -be
      : k1.transition !== null
      ? (ia === 0 && (ia = $p()), ia)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Jp(e.type))),
        e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < yi) throw ((yi = 0), (yc = null), Error(_(185)));
  es(e, n, r),
    (!(G & 2) || e !== Ee) &&
      (e === Ee && (!(G & 2) && (ho |= n), we === 4 && Qt(e, be)),
      Be(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((Dr = he() + 500), lo && Nn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  ky(e, t);
  var r = xa(e, e === Ee ? be : 0);
  if (r === 0)
    n !== null && Dd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Dd(n), t === 1))
      e.tag === 0 ? x1(If.bind(null, e)) : pm(If.bind(null, e)),
        g1(function () {
          !(G & 6) && Nn();
        }),
        (n = null);
    else {
      switch (Hp(r)) {
        case 1:
          n = lu;
          break;
        case 4:
          n = zp;
          break;
        case 16:
          n = wa;
          break;
        case 536870912:
          n = Bp;
          break;
        default:
          n = wa;
      }
      n = hg(n, ag.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ag(e, t) {
  if (((ra = -1), (ia = 0), G & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (_r() && e.callbackNode !== n) return null;
  var r = xa(e, e === Ee ? be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ua(e, r);
  else {
    t = r;
    var i = G;
    G |= 2;
    var s = lg();
    (Ee !== e || be !== t) && ((Et = null), (Dr = he() + 500), Bn(e, t));
    do
      try {
        B1();
        break;
      } catch (o) {
        og(e, o);
      }
    while (1);
    ku(),
      (La.current = s),
      (G = i),
      me !== null ? (t = 0) : ((Ee = null), (be = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Vl(e)), i !== 0 && ((r = i), (t = wc(e, i)))), t === 1)
    )
      throw ((n = zi), Bn(e, 0), Qt(e, r), Be(e, he()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !F1(i) &&
          ((t = Ua(e, r)),
          t === 2 && ((s = Vl(e)), s !== 0 && ((r = s), (t = wc(e, s)))),
          t === 1))
      )
        throw ((n = zi), Bn(e, 0), Qt(e, r), Be(e, he()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Rn(e, De, Et);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = Du + 500 - he()), 10 < t))
          ) {
            if (xa(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Zl(Rn.bind(null, e, De, Et), t);
            break;
          }
          Rn(e, De, Et);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - lt(r);
            (s = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~s);
          }
          if (
            ((r = i),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * U1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zl(Rn.bind(null, e, De, Et), r);
            break;
          }
          Rn(e, De, Et);
          break;
        case 5:
          Rn(e, De, Et);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Be(e, he()), e.callbackNode === n ? ag.bind(null, e) : null;
}
function wc(e, t) {
  var n = vi;
  return (
    e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
    (e = Ua(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && xc(t)),
    e
  );
}
function xc(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function F1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ut(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~Lu,
      t &= ~ho,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - lt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function If(e) {
  if (G & 6) throw Error(_(327));
  _r();
  var t = xa(e, 0);
  if (!(t & 1)) return Be(e, he()), null;
  var n = Ua(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vl(e);
    r !== 0 && ((t = r), (n = wc(e, r)));
  }
  if (n === 1) throw ((n = zi), Bn(e, 0), Qt(e, t), Be(e, he()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, De, Et),
    Be(e, he()),
    null
  );
}
function Mu(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((Dr = he() + 500), lo && Nn());
  }
}
function Yn(e) {
  nn !== null && nn.tag === 0 && !(G & 6) && _r();
  var t = G;
  G |= 1;
  var n = Ze.transition,
    r = Q;
  try {
    if (((Ze.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (Ze.transition = n), (G = t), !(G & 6) && Nn();
  }
}
function Uu() {
  ($e = gr.current), re(gr);
}
function Bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), m1(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((yu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && _a();
          break;
        case 3:
          Ar(), re(Fe), re(Ie), Tu();
          break;
        case 5:
          Nu(r);
          break;
        case 4:
          Ar();
          break;
        case 13:
          re(ae);
          break;
        case 19:
          re(ae);
          break;
        case 10:
          Eu(r.type._context);
          break;
        case 22:
        case 23:
          Uu();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (me = e = pn(e.current, null)),
    (be = $e = t),
    (we = 0),
    (zi = null),
    (Lu = ho = Kn = 0),
    (De = vi = null),
    Dn !== null)
  ) {
    for (t = 0; t < Dn.length; t++)
      if (((n = Dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Dn = null;
  }
  return e;
}
function og(e, t) {
  do {
    var n = me;
    try {
      if ((ku(), (ea.current = Aa), Oa)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Oa = !1;
      }
      if (
        ((Gn = 0),
        (ke = ye = oe = null),
        (mi = !1),
        (Mi = 0),
        (Au.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (zi = t), (me = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          o = n,
          c = t;
        if (
          ((t = be),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = o,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = gf(a);
          if (w !== null) {
            (w.flags &= -257),
              vf(w, a, o, s, t),
              w.mode & 1 && mf(s, u, t),
              (t = w),
              (c = u);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(c), (t.updateQueue = v);
            } else g.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              mf(s, u, t), Fu();
              break e;
            }
            c = Error(_(426));
          }
        } else if (se && o.mode & 1) {
          var k = gf(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              vf(k, a, o, s, t),
              wu(Lr(c, o));
            break e;
          }
        }
        (s = c = Lr(c, o)),
          we !== 4 && (we = 2),
          vi === null ? (vi = [s]) : vi.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = Wm(s, c, t);
              lf(s, p);
              break e;
            case 1:
              o = c;
              var h = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (fn === null || !fn.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var E = Vm(s, o, t);
                lf(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      ug(n);
    } catch (S) {
      (t = S), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function lg() {
  var e = La.current;
  return (La.current = Aa), e === null ? Aa : e;
}
function Fu() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Ee === null || (!(Kn & 268435455) && !(ho & 268435455)) || Qt(Ee, be);
}
function Ua(e, t) {
  var n = G;
  G |= 2;
  var r = lg();
  (Ee !== e || be !== t) && ((Et = null), Bn(e, t));
  do
    try {
      z1();
      break;
    } catch (i) {
      og(e, i);
    }
  while (1);
  if ((ku(), (G = n), (La.current = r), me !== null)) throw Error(_(261));
  return (Ee = null), (be = 0), we;
}
function z1() {
  for (; me !== null; ) cg(me);
}
function B1() {
  for (; me !== null && !fy(); ) cg(me);
}
function cg(e) {
  var t = fg(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? ug(e) : (me = t),
    (Au.current = null);
}
function ug(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = A1(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (me = null);
        return;
      }
    } else if (((n = O1(n, t, $e)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function Rn(e, t, n) {
  var r = Q,
    i = Ze.transition;
  try {
    (Ze.transition = null), (Q = 1), $1(e, t, n, r);
  } finally {
    (Ze.transition = i), (Q = r);
  }
  return null;
}
function $1(e, t, n, r) {
  do _r();
  while (nn !== null);
  if (G & 6) throw Error(_(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Ey(e, s),
    e === Ee && ((me = Ee = null), (be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      As ||
      ((As = !0),
      hg(wa, function () {
        return _r(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ze.transition), (Ze.transition = null);
    var a = Q;
    Q = 1;
    var o = G;
    (G |= 4),
      (Au.current = null),
      D1(e, n),
      ig(n, e),
      l1(Ql),
      (ka = !!ql),
      (Ql = ql = null),
      (e.current = n),
      M1(n),
      hy(),
      (G = o),
      (Q = a),
      (Ze.transition = s);
  } else e.current = n;
  if (
    (As && ((As = !1), (nn = e), (Ma = i)),
    (s = e.pendingLanes),
    s === 0 && (fn = null),
    gy(n.stateNode),
    Be(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Da) throw ((Da = !1), (e = vc), (vc = null), e);
  return (
    Ma & 1 && e.tag !== 0 && _r(),
    (s = e.pendingLanes),
    s & 1 ? (e === yc ? yi++ : ((yi = 0), (yc = e))) : (yi = 0),
    Nn(),
    null
  );
}
function _r() {
  if (nn !== null) {
    var e = Hp(Ma),
      t = Ze.transition,
      n = Q;
    try {
      if (((Ze.transition = null), (Q = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (Ma = 0), G & 6)) throw Error(_(331));
        var i = G;
        for (G |= 4, P = e.current; P !== null; ) {
          var s = P,
            a = s.child;
          if (P.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var u = o[c];
                for (P = u; P !== null; ) {
                  var d = P;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gi(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (P = f);
                  else
                    for (; P !== null; ) {
                      d = P;
                      var m = d.sibling,
                        w = d.return;
                      if ((tg(d), d === u)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (P = m);
                        break;
                      }
                      P = w;
                    }
                }
              }
              var g = s.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              P = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (P = a);
          else
            e: for (; P !== null; ) {
              if (((s = P), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gi(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (P = p);
                break e;
              }
              P = s.return;
            }
        }
        var h = e.current;
        for (P = h; P !== null; ) {
          a = P;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (P = y);
          else
            e: for (a = h; P !== null; ) {
              if (((o = P), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fo(9, o);
                  }
                } catch (S) {
                  ue(o, o.return, S);
                }
              if (o === a) {
                P = null;
                break e;
              }
              var E = o.sibling;
              if (E !== null) {
                (E.return = o.return), (P = E);
                break e;
              }
              P = o.return;
            }
        }
        if (
          ((G = i), Nn(), gt && typeof gt.onPostCommitFiberRoot == "function")
        )
          try {
            gt.onPostCommitFiberRoot(ro, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (Ze.transition = t);
    }
  }
  return !1;
}
function jf(e, t, n) {
  (t = Lr(n, t)),
    (t = Wm(e, t, 1)),
    (e = dn(e, t, 1)),
    (t = Oe()),
    e !== null && (es(e, 1, t), Be(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) jf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fn === null || !fn.has(r)))
        ) {
          (e = Lr(n, e)),
            (e = Vm(t, e, 1)),
            (t = dn(t, e, 1)),
            (e = Oe()),
            t !== null && (es(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function H1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (be & n) === n &&
      (we === 4 || (we === 3 && (be & 130023424) === be && 500 > he() - Du)
        ? Bn(e, 0)
        : (Lu |= n)),
    Be(e, t);
}
function dg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = bs), (bs <<= 1), !(bs & 130023424) && (bs = 4194304))
      : (t = 1));
  var n = Oe();
  (e = At(e, t)), e !== null && (es(e, t, n), Be(e, n));
}
function W1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), dg(e, n);
}
function V1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), dg(e, n);
}
var fg;
fg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), R1(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), se && t.flags & 1048576 && mm(t, Ca, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      na(e, t), (e = t.pendingProps);
      var i = Pr(t, Ie.current);
      br(t, n), (i = Iu(null, t, r, e, i, n));
      var s = ju();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((s = !0), Na(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            bu(t),
            (i.updater = co),
            (t.stateNode = i),
            (i._reactInternals = t),
            ac(t, r, e, n),
            (t = cc(null, t, r, !0, s, n)))
          : ((t.tag = 0), se && s && vu(t), Pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (na(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = K1(r)),
          (e = it(r, e)),
          i)
        ) {
          case 0:
            t = lc(null, t, r, e, n);
            break e;
          case 1:
            t = xf(null, t, r, e, n);
            break e;
          case 11:
            t = yf(null, t, r, e, n);
            break e;
          case 14:
            t = wf(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : it(r, i)),
        lc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : it(r, i)),
        xf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Jm(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          wm(e, t),
          Pa(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Lr(Error(_(423)), t)), (t = kf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Lr(Error(_(424)), t)), (t = kf(e, t, r, n, i));
            break e;
          } else
            for (
              He = un(t.stateNode.containerInfo.firstChild),
                We = t,
                se = !0,
                at = null,
                n = Sm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Rr(), r === i)) {
            t = Lt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bm(t),
        e === null && rc(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Xl(r, i) ? (a = null) : s !== null && Xl(r, s) && (t.flags |= 32),
        Ym(e, t),
        Pe(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && rc(t), null;
    case 13:
      return qm(e, t, n);
    case 4:
      return (
        _u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Or(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : it(r, i)),
        yf(e, t, r, i, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (a = i.value),
          ee(Ia, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (ut(s.value, a)) {
            if (s.children === i.children && !Fe.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                a = s.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      (c = jt(-1, n & -n)), (c.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c);
                      }
                    }
                    (s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      ic(s.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(_(341));
                (a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  ic(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        Pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        br(t, n),
        (i = tt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = it(r, t.pendingProps)),
        (i = it(r.type, i)),
        wf(e, t, r, i, n)
      );
    case 15:
      return Gm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : it(r, i)),
        na(e, t),
        (t.tag = 1),
        ze(r) ? ((e = !0), Na(t)) : (e = !1),
        br(t, n),
        km(t, r, i),
        ac(t, r, i, n),
        cc(null, t, r, !0, e, n)
      );
    case 19:
      return Qm(e, t, n);
    case 22:
      return Km(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function hg(e, t) {
  return Fp(e, t);
}
function G1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Xe(e, t, n, r) {
  return new G1(e, t, n, r);
}
function zu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function K1(e) {
  if (typeof e == "function") return zu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === su)) return 11;
    if (e === au) return 14;
  }
  return 2;
}
function pn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function sa(e, t, n, r, i, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) zu(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ar:
        return $n(n.children, i, s, t);
      case iu:
        (a = 8), (i |= 8);
        break;
      case jl:
        return (
          (e = Xe(12, n, t, i | 2)), (e.elementType = jl), (e.lanes = s), e
        );
      case Pl:
        return (e = Xe(13, n, t, i)), (e.elementType = Pl), (e.lanes = s), e;
      case Rl:
        return (e = Xe(19, n, t, i)), (e.elementType = Rl), (e.lanes = s), e;
      case Ep:
        return po(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case xp:
              a = 10;
              break e;
            case kp:
              a = 9;
              break e;
            case su:
              a = 11;
              break e;
            case au:
              a = 14;
              break e;
            case Kt:
              (a = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Xe(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function $n(e, t, n, r) {
  return (e = Xe(7, e, r, t)), (e.lanes = n), e;
}
function po(e, t, n, r) {
  return (
    (e = Xe(22, e, r, t)),
    (e.elementType = Ep),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function al(e, t, n) {
  return (e = Xe(6, e, null, t)), (e.lanes = n), e;
}
function ol(e, t, n) {
  return (
    (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Y1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bo(0)),
    (this.expirationTimes = Bo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Bu(e, t, n, r, i, s, a, o, c) {
  return (
    (e = new Y1(e, t, n, o, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Xe(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    bu(s),
    e
  );
}
function J1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pg(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (nr(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return hm(e, n, t);
  }
  return t;
}
function mg(e, t, n, r, i, s, a, o, c) {
  return (
    (e = Bu(n, r, !0, e, i, s, a, o, c)),
    (e.context = pg(null)),
    (n = e.current),
    (r = Oe()),
    (i = hn(n)),
    (s = jt(r, i)),
    (s.callback = t ?? null),
    dn(n, s, i),
    (e.current.lanes = i),
    es(e, i, r),
    Be(e, r),
    e
  );
}
function mo(e, t, n, r) {
  var i = t.current,
    s = Oe(),
    a = hn(i);
  return (
    (n = pg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = jt(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dn(i, t, a)),
    e !== null && (ct(e, i, a, s), Zs(e, i, a)),
    a
  );
}
function Fa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $u(e, t) {
  Pf(e, t), (e = e.alternate) && Pf(e, t);
}
function q1() {
  return null;
}
var gg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hu(e) {
  this._internalRoot = e;
}
go.prototype.render = Hu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  mo(e, t, null, null);
};
go.prototype.unmount = Hu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yn(function () {
      mo(null, e, null, null);
    }),
      (t[Ot] = null);
  }
};
function go(e) {
  this._internalRoot = e;
}
go.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
    qt.splice(n, 0, e), n === 0 && Yp(e);
  }
};
function Wu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Rf() {}
function Q1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Fa(a);
        s.call(u);
      };
    }
    var a = mg(t, r, e, 0, null, !1, !1, "", Rf);
    return (
      (e._reactRootContainer = a),
      (e[Ot] = a.current),
      Ri(e.nodeType === 8 ? e.parentNode : e),
      Yn(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = Fa(c);
      o.call(u);
    };
  }
  var c = Bu(e, 0, !1, null, null, !1, !1, "", Rf);
  return (
    (e._reactRootContainer = c),
    (e[Ot] = c.current),
    Ri(e.nodeType === 8 ? e.parentNode : e),
    Yn(function () {
      mo(t, c, n, r);
    }),
    c
  );
}
function yo(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var c = Fa(a);
        o.call(c);
      };
    }
    mo(t, a, e, i);
  } else a = Q1(n, t, e, i, r);
  return Fa(a);
}
Wp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ai(t.pendingLanes);
        n !== 0 &&
          (cu(t, n | 1), Be(t, he()), !(G & 6) && ((Dr = he() + 500), Nn()));
      }
      break;
    case 13:
      Yn(function () {
        var r = At(e, 1);
        if (r !== null) {
          var i = Oe();
          ct(r, e, 1, i);
        }
      }),
        $u(e, 1);
  }
};
uu = function (e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = Oe();
      ct(t, e, 134217728, n);
    }
    $u(e, 134217728);
  }
};
Vp = function (e) {
  if (e.tag === 13) {
    var t = hn(e),
      n = At(e, t);
    if (n !== null) {
      var r = Oe();
      ct(n, e, t, r);
    }
    $u(e, t);
  }
};
Gp = function () {
  return Q;
};
Kp = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
$l = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ll(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = oo(r);
            if (!i) throw Error(_(90));
            bp(r), Ll(r, i);
          }
        }
      }
      break;
    case "textarea":
      Np(e, n);
      break;
    case "select":
      (t = n.value), t != null && xr(e, !!n.multiple, t, !1);
  }
};
Op = Mu;
Ap = Yn;
var X1 = { usingClientEntryPoint: !1, Events: [ns, ur, oo, Pp, Rp, Mu] },
  ni = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Z1 = {
    bundleType: ni.bundleType,
    version: ni.version,
    rendererPackageName: ni.rendererPackageName,
    rendererConfig: ni.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ni.findFiberByHostInstance || q1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ls.isDisabled && Ls.supportsFiber)
    try {
      (ro = Ls.inject(Z1)), (gt = Ls);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X1;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wu(t)) throw Error(_(200));
  return J1(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!Wu(e)) throw Error(_(299));
  var n = !1,
    r = "",
    i = gg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Bu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ot] = t.current),
    Ri(e.nodeType === 8 ? e.parentNode : e),
    new Hu(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Mp(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return Yn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!vo(t)) throw Error(_(200));
  return yo(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!Wu(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    a = gg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = mg(t, null, e, 1, n ?? null, i, !1, s, a)),
    (e[Ot] = t.current),
    Ri(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new go(t);
};
Ge.render = function (e, t, n) {
  if (!vo(t)) throw Error(_(200));
  return yo(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!vo(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Yn(function () {
        yo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ot] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = Mu;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vo(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return yo(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function vg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vg);
    } catch (e) {
      console.error(e);
    }
}
vg(), (mp.exports = Ge);
var ew = mp.exports,
  Of = ew;
(Cl.createRoot = Of.createRoot), (Cl.hydrateRoot = Of.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bi() {
  return (
    (Bi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bi.apply(this, arguments)
  );
}
var rn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(rn || (rn = {}));
const Af = "popstate";
function tw(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: a, hash: o } = r.location;
    return kc(
      "",
      { pathname: s, search: a, hash: o },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : za(i);
  }
  return rw(t, n, null, e);
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Vu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function nw() {
  return Math.random().toString(36).substr(2, 8);
}
function Lf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function kc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Bi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Hr(t) : t,
      { state: n, key: (t && t.key) || r || nw() }
    )
  );
}
function za(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Hr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function rw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    a = i.history,
    o = rn.Pop,
    c = null,
    u = d();
  u == null && ((u = 0), a.replaceState(Bi({}, a.state, { idx: u }), ""));
  function d() {
    return (a.state || { idx: null }).idx;
  }
  function f() {
    o = rn.Pop;
    let k = d(),
      p = k == null ? null : k - u;
    (u = k), c && c({ action: o, location: v.location, delta: p });
  }
  function m(k, p) {
    o = rn.Push;
    let h = kc(v.location, k, p);
    n && n(h, k), (u = d() + 1);
    let y = Lf(h, u),
      E = v.createHref(h);
    try {
      a.pushState(y, "", E);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(E);
    }
    s && c && c({ action: o, location: v.location, delta: 1 });
  }
  function w(k, p) {
    o = rn.Replace;
    let h = kc(v.location, k, p);
    n && n(h, k), (u = d());
    let y = Lf(h, u),
      E = v.createHref(h);
    a.replaceState(y, "", E),
      s && c && c({ action: o, location: v.location, delta: 0 });
  }
  function g(k) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof k == "string" ? k : za(k);
    return (
      ge(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, p)
    );
  }
  let v = {
    get action() {
      return o;
    },
    get location() {
      return e(i, a);
    },
    listen(k) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Af, f),
        (c = k),
        () => {
          i.removeEventListener(Af, f), (c = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: g,
    encodeLocation(k) {
      let p = g(k);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: w,
    go(k) {
      return a.go(k);
    },
  };
  return v;
}
var Df;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Df || (Df = {}));
function iw(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Hr(t) : t,
    i = Gu(r.pathname || "/", n);
  if (i == null) return null;
  let s = yg(e);
  sw(s);
  let a = null;
  for (let o = 0; a == null && o < s.length; ++o) a = pw(s[o], vw(i));
  return a;
}
function yg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, a, o) => {
    let c = {
      relativePath: o === void 0 ? s.path || "" : o,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s,
    };
    c.relativePath.startsWith("/") &&
      (ge(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = mn([r, c.relativePath]),
      d = n.concat(c);
    s.children &&
      s.children.length > 0 &&
      (ge(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      yg(s.children, t, d, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: fw(u, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, a) => {
      var o;
      if (s.path === "" || !((o = s.path) != null && o.includes("?"))) i(s, a);
      else for (let c of wg(s.path)) i(s, a, c);
    }),
    t
  );
}
function wg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let a = wg(r.join("/")),
    o = [];
  return (
    o.push(...a.map((c) => (c === "" ? s : [s, c].join("/")))),
    i && o.push(...a),
    o.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function sw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : hw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const aw = /^:\w+$/,
  ow = 3,
  lw = 2,
  cw = 1,
  uw = 10,
  dw = -2,
  Mf = (e) => e === "*";
function fw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Mf) && (r += dw),
    t && (r += lw),
    n
      .filter((i) => !Mf(i))
      .reduce((i, s) => i + (aw.test(s) ? ow : s === "" ? cw : uw), r)
  );
}
function hw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function pw(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let a = 0; a < n.length; ++a) {
    let o = n[a],
      c = a === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      d = mw(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: c },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let f = o.route;
    s.push({
      params: r,
      pathname: mn([i, d.pathname]),
      pathnameBase: kw(mn([i, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (i = mn([i, d.pathnameBase]));
  }
  return s;
}
function mw(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = gw(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    a = s.replace(/(.)\/+$/, "$1"),
    o = i.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      if (d === "*") {
        let m = o[f] || "";
        a = s.slice(0, s.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (u[d] = yw(o[f] || "", d)), u;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e,
  };
}
function gw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Vu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, o) => (r.push(o), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function vw(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Vu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function yw(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Vu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Gu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ww(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Hr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : xw(n, t)) : t,
    search: Ew(r),
    hash: Sw(i),
  };
}
function xw(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ll(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xg(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function kg(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Hr(e))
    : ((i = Bi({}, e)),
      ge(
        !i.pathname || !i.pathname.includes("?"),
        ll("?", "pathname", "search", i)
      ),
      ge(
        !i.pathname || !i.pathname.includes("#"),
        ll("#", "pathname", "hash", i)
      ),
      ge(!i.search || !i.search.includes("#"), ll("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    a = s ? "/" : i.pathname,
    o;
  if (r || a == null) o = n;
  else {
    let f = t.length - 1;
    if (a.startsWith("..")) {
      let m = a.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      i.pathname = m.join("/");
    }
    o = f >= 0 ? t[f] : "/";
  }
  let c = ww(i, o),
    u = a && a !== "/" && a.endsWith("/"),
    d = (s || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const mn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  kw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ew = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Sw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function bw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Eg = ["post", "put", "patch", "delete"];
new Set(Eg);
const _w = ["get", ...Eg];
new Set(_w);
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ba() {
  return (
    (Ba = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ba.apply(this, arguments)
  );
}
const Ku = x.createContext(null),
  Nw = x.createContext(null),
  Wr = x.createContext(null),
  wo = x.createContext(null),
  rr = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Sg = x.createContext(null);
function Tw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  is() || ge(!1);
  let { basename: r, navigator: i } = x.useContext(Wr),
    { hash: s, pathname: a, search: o } = _g(e, { relative: n }),
    c = a;
  return (
    r !== "/" && (c = a === "/" ? r : mn([r, a])),
    i.createHref({ pathname: c, search: o, hash: s })
  );
}
function is() {
  return x.useContext(wo) != null;
}
function xo() {
  return is() || ge(!1), x.useContext(wo).location;
}
function bg(e) {
  x.useContext(Wr).static || x.useLayoutEffect(e);
}
function Cw() {
  let { isDataRoute: e } = x.useContext(rr);
  return e ? Bw() : Iw();
}
function Iw() {
  is() || ge(!1);
  let e = x.useContext(Ku),
    { basename: t, navigator: n } = x.useContext(Wr),
    { matches: r } = x.useContext(rr),
    { pathname: i } = xo(),
    s = JSON.stringify(xg(r).map((c) => c.pathnameBase)),
    a = x.useRef(!1);
  return (
    bg(() => {
      a.current = !0;
    }),
    x.useCallback(
      function (c, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof c == "number") {
          n.go(c);
          return;
        }
        let d = kg(c, JSON.parse(s), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : mn([t, d.pathname])),
          (u.replace ? n.replace : n.push)(d, u.state, u);
      },
      [t, n, s, i, e]
    )
  );
}
function _g(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(rr),
    { pathname: i } = xo(),
    s = JSON.stringify(xg(r).map((a) => a.pathnameBase));
  return x.useMemo(() => kg(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function jw(e, t) {
  return Pw(e, t);
}
function Pw(e, t, n) {
  is() || ge(!1);
  let { navigator: r } = x.useContext(Wr),
    { matches: i } = x.useContext(rr),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let o = s ? s.pathnameBase : "/";
  s && s.route;
  let c = xo(),
    u;
  if (t) {
    var d;
    let v = typeof t == "string" ? Hr(t) : t;
    o === "/" || ((d = v.pathname) != null && d.startsWith(o)) || ge(!1),
      (u = v);
  } else u = c;
  let f = u.pathname || "/",
    m = o === "/" ? f : f.slice(o.length) || "/",
    w = iw(e, { pathname: m }),
    g = Dw(
      w &&
        w.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, a, v.params),
            pathname: mn([
              o,
              r.encodeLocation
                ? r.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === "/"
                ? o
                : mn([
                    o,
                    r.encodeLocation
                      ? r.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && g
    ? x.createElement(
        wo.Provider,
        {
          value: {
            location: Ba(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: rn.Pop,
          },
        },
        g
      )
    : g;
}
function Rw() {
  let e = zw(),
    t = bw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    s = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: i }, n) : null,
    s
  );
}
const Ow = x.createElement(Rw, null);
class Aw extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          rr.Provider,
          { value: this.props.routeContext },
          x.createElement(Sg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Lw(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(Ku);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(rr.Provider, { value: t }, r)
  );
}
function Dw(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let o = s.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id])
    );
    o >= 0 || ge(!1), (s = s.slice(0, Math.min(s.length, o + 1)));
  }
  return s.reduceRight((o, c, u) => {
    let d = c.route.id ? (a == null ? void 0 : a[c.route.id]) : null,
      f = null;
    n && (f = c.route.errorElement || Ow);
    let m = t.concat(s.slice(0, u + 1)),
      w = () => {
        let g;
        return (
          d
            ? (g = f)
            : c.route.Component
            ? (g = x.createElement(c.route.Component, null))
            : c.route.element
            ? (g = c.route.element)
            : (g = o),
          x.createElement(Lw, {
            match: c,
            routeContext: { outlet: o, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || u === 0)
      ? x.createElement(Aw, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: d,
          children: w(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var Ec;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(Ec || (Ec = {}));
var $i;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})($i || ($i = {}));
function Mw(e) {
  let t = x.useContext(Ku);
  return t || ge(!1), t;
}
function Uw(e) {
  let t = x.useContext(Nw);
  return t || ge(!1), t;
}
function Fw(e) {
  let t = x.useContext(rr);
  return t || ge(!1), t;
}
function Ng(e) {
  let t = Fw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ge(!1), n.route.id;
}
function zw() {
  var e;
  let t = x.useContext(Sg),
    n = Uw($i.UseRouteError),
    r = Ng($i.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Bw() {
  let { router: e } = Mw(Ec.UseNavigateStable),
    t = Ng($i.UseNavigateStable),
    n = x.useRef(!1);
  return (
    bg(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Ba({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function Gt(e) {
  ge(!1);
}
function $w(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = rn.Pop,
    navigator: s,
    static: a = !1,
  } = e;
  is() && ge(!1);
  let o = t.replace(/^\/*/, "/"),
    c = x.useMemo(() => ({ basename: o, navigator: s, static: a }), [o, s, a]);
  typeof r == "string" && (r = Hr(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: f = "",
      state: m = null,
      key: w = "default",
    } = r,
    g = x.useMemo(() => {
      let v = Gu(u, o);
      return v == null
        ? null
        : {
            location: { pathname: v, search: d, hash: f, state: m, key: w },
            navigationType: i,
          };
    }, [o, u, d, f, m, w, i]);
  return g == null
    ? null
    : x.createElement(
        Wr.Provider,
        { value: c },
        x.createElement(wo.Provider, { children: n, value: g })
      );
}
function Hw(e) {
  let { children: t, location: n } = e;
  return jw(Sc(t), n);
}
var Uf;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Uf || (Uf = {}));
new Promise(() => {});
function Sc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, Sc(r.props.children, s));
        return;
      }
      r.type !== Gt && ge(!1), !r.props.index || !r.props.children || ge(!1);
      let a = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Sc(r.props.children, s)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bc() {
  return (
    (bc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bc.apply(this, arguments)
  );
}
function Ww(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Vw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Gw(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Vw(e);
}
const Kw = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Yw = "startTransition",
  Ff = W0[Yw];
function Jw(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = x.useRef();
  s.current == null && (s.current = tw({ window: i, v5Compat: !0 }));
  let a = s.current,
    [o, c] = x.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    d = x.useCallback(
      (f) => {
        u && Ff ? Ff(() => c(f)) : c(f);
      },
      [c, u]
    );
  return (
    x.useLayoutEffect(() => a.listen(d), [a, d]),
    x.createElement($w, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: a,
    })
  );
}
const qw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Qw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Re = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: a,
        state: o,
        target: c,
        to: u,
        preventScrollReset: d,
      } = t,
      f = Ww(t, Kw),
      { basename: m } = x.useContext(Wr),
      w,
      g = !1;
    if (typeof u == "string" && Qw.test(u) && ((w = u), qw))
      try {
        let h = new URL(window.location.href),
          y = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
          E = Gu(y.pathname, m);
        y.origin === h.origin && E != null
          ? (u = E + y.search + y.hash)
          : (g = !0);
      } catch {}
    let v = Tw(u, { relative: i }),
      k = Xw(u, {
        replace: a,
        state: o,
        target: c,
        preventScrollReset: d,
        relative: i,
      });
    function p(h) {
      r && r(h), h.defaultPrevented || k(h);
    }
    return x.createElement(
      "a",
      bc({}, f, { href: w || v, onClick: g || s ? r : p, ref: n, target: c })
    );
  });
var zf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(zf || (zf = {}));
var Bf;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Bf || (Bf = {}));
function Xw(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: a,
    } = t === void 0 ? {} : t,
    o = Cw(),
    c = xo(),
    u = _g(e, { relative: a });
  return x.useCallback(
    (d) => {
      if (Gw(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : za(c) === za(u);
        o(e, { replace: f, state: i, preventScrollReset: s, relative: a });
      }
    },
    [c, o, u, r, i, n, e, s, a]
  );
}
function Tg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Zw } = Object.prototype,
  { getPrototypeOf: Yu } = Object,
  ko = ((e) => (t) => {
    const n = Zw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  kt = (e) => ((e = e.toLowerCase()), (t) => ko(t) === e),
  Eo = (e) => (t) => typeof t === e,
  { isArray: Vr } = Array,
  Hi = Eo("undefined");
function ex(e) {
  return (
    e !== null &&
    !Hi(e) &&
    e.constructor !== null &&
    !Hi(e.constructor) &&
    et(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Cg = kt("ArrayBuffer");
function tx(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Cg(e.buffer)),
    t
  );
}
const nx = Eo("string"),
  et = Eo("function"),
  Ig = Eo("number"),
  So = (e) => e !== null && typeof e == "object",
  rx = (e) => e === !0 || e === !1,
  aa = (e) => {
    if (ko(e) !== "object") return !1;
    const t = Yu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ix = kt("Date"),
  sx = kt("File"),
  ax = kt("Blob"),
  ox = kt("FileList"),
  lx = (e) => So(e) && et(e.pipe),
  cx = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (et(e.append) &&
          ((t = ko(e)) === "formdata" ||
            (t === "object" &&
              et(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  ux = kt("URLSearchParams"),
  dx = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ss(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Vr(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = s.length;
    let o;
    for (r = 0; r < a; r++) (o = s[r]), t.call(null, e[o], o, e);
  }
}
function jg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const Pg = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Rg = (e) => !Hi(e) && e !== Pg;
function _c() {
  const { caseless: e } = (Rg(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && jg(t, i)) || i;
      aa(t[s]) && aa(r)
        ? (t[s] = _c(t[s], r))
        : aa(r)
        ? (t[s] = _c({}, r))
        : Vr(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && ss(arguments[r], n);
  return t;
}
const fx = (e, t, n, { allOwnKeys: r } = {}) => (
    ss(
      t,
      (i, s) => {
        n && et(i) ? (e[s] = Tg(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  hx = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  px = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  mx = (e, t, n, r) => {
    let i, s, a;
    const o = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (a = i[s]), (!r || r(a, e, t)) && !o[a] && ((t[a] = e[a]), (o[a] = !0));
      e = n !== !1 && Yu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  gx = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  vx = (e) => {
    if (!e) return null;
    if (Vr(e)) return e;
    let t = e.length;
    if (!Ig(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  yx = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Yu(Uint8Array)),
  wx = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  xx = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  kx = kt("HTMLFormElement"),
  Ex = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  $f = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Sx = kt("RegExp"),
  Og = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ss(n, (i, s) => {
      let a;
      (a = t(i, s, e)) !== !1 && (r[s] = a || i);
    }),
      Object.defineProperties(e, r);
  },
  bx = (e) => {
    Og(e, (t, n) => {
      if (et(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (et(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  _x = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return Vr(e) ? r(e) : r(String(e).split(t)), n;
  },
  Nx = () => {},
  Tx = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  cl = "abcdefghijklmnopqrstuvwxyz",
  Hf = "0123456789",
  Ag = { DIGIT: Hf, ALPHA: cl, ALPHA_DIGIT: cl + cl.toUpperCase() + Hf },
  Cx = (e = 16, t = Ag.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Ix(e) {
  return !!(
    e &&
    et(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const jx = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (So(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = Vr(r) ? [] : {};
            return (
              ss(r, (a, o) => {
                const c = n(a, i + 1);
                !Hi(c) && (s[o] = c);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Px = kt("AsyncFunction"),
  Rx = (e) => e && (So(e) || et(e)) && et(e.then) && et(e.catch),
  b = {
    isArray: Vr,
    isArrayBuffer: Cg,
    isBuffer: ex,
    isFormData: cx,
    isArrayBufferView: tx,
    isString: nx,
    isNumber: Ig,
    isBoolean: rx,
    isObject: So,
    isPlainObject: aa,
    isUndefined: Hi,
    isDate: ix,
    isFile: sx,
    isBlob: ax,
    isRegExp: Sx,
    isFunction: et,
    isStream: lx,
    isURLSearchParams: ux,
    isTypedArray: yx,
    isFileList: ox,
    forEach: ss,
    merge: _c,
    extend: fx,
    trim: dx,
    stripBOM: hx,
    inherits: px,
    toFlatObject: mx,
    kindOf: ko,
    kindOfTest: kt,
    endsWith: gx,
    toArray: vx,
    forEachEntry: wx,
    matchAll: xx,
    isHTMLForm: kx,
    hasOwnProperty: $f,
    hasOwnProp: $f,
    reduceDescriptors: Og,
    freezeMethods: bx,
    toObjectSet: _x,
    toCamelCase: Ex,
    noop: Nx,
    toFiniteNumber: Tx,
    findKey: jg,
    global: Pg,
    isContextDefined: Rg,
    ALPHABET: Ag,
    generateString: Cx,
    isSpecCompliantForm: Ix,
    toJSONObject: jx,
    isAsyncFn: Px,
    isThenable: Rx,
  };
function W(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
b.inherits(W, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: b.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Lg = W.prototype,
  Dg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Dg[e] = { value: e };
});
Object.defineProperties(W, Dg);
Object.defineProperty(Lg, "isAxiosError", { value: !0 });
W.from = (e, t, n, r, i, s) => {
  const a = Object.create(Lg);
  return (
    b.toFlatObject(
      e,
      a,
      function (c) {
        return c !== Error.prototype;
      },
      (o) => o !== "isAxiosError"
    ),
    W.call(a, e.message, t, n, r, i),
    (a.cause = e),
    (a.name = e.name),
    s && Object.assign(a, s),
    a
  );
};
const Ox = null;
function Nc(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function Mg(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Wf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = Mg(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function Ax(e) {
  return b.isArray(e) && !e.some(Nc);
}
const Lx = b.toFlatObject(b, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function bo(e, t, n) {
  if (!b.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = b.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, k) {
        return !b.isUndefined(k[v]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || d,
    s = n.dots,
    a = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && b.isSpecCompliantForm(t);
  if (!b.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (b.isDate(g)) return g.toISOString();
    if (!c && b.isBlob(g))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(g) || b.isTypedArray(g)
      ? c && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function d(g, v, k) {
    let p = g;
    if (g && !k && typeof g == "object") {
      if (b.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (b.isArray(g) && Ax(g)) ||
        ((b.isFileList(g) || b.endsWith(v, "[]")) && (p = b.toArray(g)))
      )
        return (
          (v = Mg(v)),
          p.forEach(function (y, E) {
            !(b.isUndefined(y) || y === null) &&
              t.append(
                a === !0 ? Wf([v], E, s) : a === null ? v : v + "[]",
                u(y)
              );
          }),
          !1
        );
    }
    return Nc(g) ? !0 : (t.append(Wf(k, v, s), u(g)), !1);
  }
  const f = [],
    m = Object.assign(Lx, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Nc,
    });
  function w(g, v) {
    if (!b.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(g),
        b.forEach(g, function (p, h) {
          (!(b.isUndefined(p) || p === null) &&
            i.call(t, p, b.isString(h) ? h.trim() : h, v, m)) === !0 &&
            w(p, v ? v.concat(h) : [h]);
        }),
        f.pop();
    }
  }
  if (!b.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function Vf(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Ju(e, t) {
  (this._pairs = []), e && bo(e, this, t);
}
const Ug = Ju.prototype;
Ug.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ug.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Vf);
      }
    : Vf;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function Dx(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Fg(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Dx,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = b.isURLSearchParams(t) ? t.toString() : new Ju(t, n).toString(r)),
    s)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class Mx {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    b.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Gf = Mx,
  zg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ux = typeof URLSearchParams < "u" ? URLSearchParams : Ju,
  Fx = typeof FormData < "u" ? FormData : null,
  zx = typeof Blob < "u" ? Blob : null,
  Bx = {
    isBrowser: !0,
    classes: { URLSearchParams: Ux, FormData: Fx, Blob: zx },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Bg = typeof window < "u" && typeof document < "u",
  $x = ((e) => Bg && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Hx = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Wx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Bg,
        hasStandardBrowserEnv: $x,
        hasStandardBrowserWebWorkerEnv: Hx,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pt = { ...Wx, ...Bx };
function Vx(e, t) {
  return bo(
    e,
    new pt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return pt.isNode && b.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Gx(e) {
  return b
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Kx(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function $g(e) {
  function t(n, r, i, s) {
    let a = n[s++];
    if (a === "__proto__") return !0;
    const o = Number.isFinite(+a),
      c = s >= n.length;
    return (
      (a = !a && b.isArray(i) ? i.length : a),
      c
        ? (b.hasOwnProp(i, a) ? (i[a] = [i[a], r]) : (i[a] = r), !o)
        : ((!i[a] || !b.isObject(i[a])) && (i[a] = []),
          t(n, r, i[a], s) && b.isArray(i[a]) && (i[a] = Kx(i[a])),
          !o)
    );
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const n = {};
    return (
      b.forEachEntry(e, (r, i) => {
        t(Gx(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Yx(e, t, n) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const qu = {
  transitional: zg,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = b.isObject(t);
      if ((s && b.isHTMLForm(t) && (t = new FormData(t)), b.isFormData(t)))
        return i && i ? JSON.stringify($g(t)) : t;
      if (
        b.isArrayBuffer(t) ||
        b.isBuffer(t) ||
        b.isStream(t) ||
        b.isFile(t) ||
        b.isBlob(t)
      )
        return t;
      if (b.isArrayBufferView(t)) return t.buffer;
      if (b.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let o;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Vx(t, this.formSerializer).toString();
        if ((o = b.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return bo(
            o ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), Yx(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || qu.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && b.isString(t) && ((r && !this.responseType) || i)) {
        const a = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (o) {
          if (a)
            throw o.name === "SyntaxError"
              ? W.from(o, W.ERR_BAD_RESPONSE, this, null, this.response)
              : o;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: pt.classes.FormData, Blob: pt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
b.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  qu.headers[e] = {};
});
const Qu = qu,
  Jx = b.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  qx = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (i = a.indexOf(":")),
              (n = a.substring(0, i).trim().toLowerCase()),
              (r = a.substring(i + 1).trim()),
              !(!n || (t[n] && Jx[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Kf = Symbol("internals");
function ri(e) {
  return e && String(e).trim().toLowerCase();
}
function oa(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(oa) : String(e);
}
function Qx(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Xx = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ul(e, t, n, r, i) {
  if (b.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!b.isString(t))) {
    if (b.isString(r)) return t.indexOf(r) !== -1;
    if (b.isRegExp(r)) return r.test(t);
  }
}
function Zx(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function e2(e, t) {
  const n = b.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, a) {
        return this[r].call(this, t, i, s, a);
      },
      configurable: !0,
    });
  });
}
class _o {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(o, c, u) {
      const d = ri(c);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = b.findKey(i, d);
      (!f || i[f] === void 0 || u === !0 || (u === void 0 && i[f] !== !1)) &&
        (i[f || c] = oa(o));
    }
    const a = (o, c) => b.forEach(o, (u, d) => s(u, d, c));
    return (
      b.isPlainObject(t) || t instanceof this.constructor
        ? a(t, n)
        : b.isString(t) && (t = t.trim()) && !Xx(t)
        ? a(qx(t), n)
        : t != null && s(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ri(t)), t)) {
      const r = b.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Qx(i);
        if (b.isFunction(n)) return n.call(this, i, r);
        if (b.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ri(t)), t)) {
      const r = b.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ul(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(a) {
      if (((a = ri(a)), a)) {
        const o = b.findKey(r, a);
        o && (!n || ul(r, r[o], o, n)) && (delete r[o], (i = !0));
      }
    }
    return b.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || ul(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      b.forEach(this, (i, s) => {
        const a = b.findKey(r, s);
        if (a) {
          (n[a] = oa(i)), delete n[s];
          return;
        }
        const o = t ? Zx(s) : String(s).trim();
        o !== s && delete n[s], (n[o] = oa(i)), (r[o] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      b.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && b.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Kf] = this[Kf] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(a) {
      const o = ri(a);
      r[o] || (e2(i, a), (r[o] = !0));
    }
    return b.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
_o.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
b.reduceDescriptors(_o.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
b.freezeMethods(_o);
const Pt = _o;
function dl(e, t) {
  const n = this || Qu,
    r = t || n,
    i = Pt.from(r.headers);
  let s = r.data;
  return (
    b.forEach(e, function (o) {
      s = o.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function Hg(e) {
  return !!(e && e.__CANCEL__);
}
function as(e, t, n) {
  W.call(this, e ?? "canceled", W.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
b.inherits(as, W, { __CANCEL__: !0 });
function t2(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new W(
          "Request failed with status code " + n.status,
          [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const n2 = pt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, i, s) {
        const a = [e + "=" + encodeURIComponent(t)];
        b.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
          b.isString(r) && a.push("path=" + r),
          b.isString(i) && a.push("domain=" + i),
          s === !0 && a.push("secure"),
          (document.cookie = a.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function r2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function i2(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Wg(e, t) {
  return e && !r2(t) ? i2(e, t) : t;
}
const s2 = pt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(s) {
        let a = s;
        return (
          t && (n.setAttribute("href", a), (a = n.href)),
          n.setAttribute("href", a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (a) {
          const o = b.isString(a) ? i(a) : a;
          return o.protocol === r.protocol && o.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function a2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function o2(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        d = r[s];
      a || (a = u), (n[i] = c), (r[i] = u);
      let f = s,
        m = 0;
      for (; f !== i; ) (m += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - a < t)) return;
      const w = d && u - d;
      return w ? Math.round((m * 1e3) / w) : void 0;
    }
  );
}
function Yf(e, t) {
  let n = 0;
  const r = o2(50, 250);
  return (i) => {
    const s = i.loaded,
      a = i.lengthComputable ? i.total : void 0,
      o = s - n,
      c = r(o),
      u = s <= a;
    n = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: o,
      rate: c || void 0,
      estimated: c && a && u ? (a - s) / c : void 0,
      event: i,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const l2 = typeof XMLHttpRequest < "u",
  c2 =
    l2 &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const s = Pt.from(e.headers).normalize();
        let { responseType: a, withXSRFToken: o } = e,
          c;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener("abort", c);
        }
        let d;
        if (b.isFormData(i)) {
          if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1);
          else if ((d = s.getContentType()) !== !1) {
            const [v, ...k] = d
              ? d
                  .split(";")
                  .map((p) => p.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([v || "multipart/form-data", ...k].join("; "));
          }
        }
        let f = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            k = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(v + ":" + k));
        }
        const m = Wg(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), Fg(m, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout);
        function w() {
          if (!f) return;
          const v = Pt.from(
              "getAllResponseHeaders" in f && f.getAllResponseHeaders()
            ),
            p = {
              data:
                !a || a === "text" || a === "json"
                  ? f.responseText
                  : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: v,
              config: e,
              request: f,
            };
          t2(
            function (y) {
              n(y), u();
            },
            function (y) {
              r(y), u();
            },
            p
          ),
            (f = null);
        }
        if (
          ("onloadend" in f
            ? (f.onloadend = w)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(w);
              }),
          (f.onabort = function () {
            f &&
              (r(new W("Request aborted", W.ECONNABORTED, e, f)), (f = null));
          }),
          (f.onerror = function () {
            r(new W("Network Error", W.ERR_NETWORK, e, f)), (f = null);
          }),
          (f.ontimeout = function () {
            let k = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const p = e.transitional || zg;
            e.timeoutErrorMessage && (k = e.timeoutErrorMessage),
              r(
                new W(
                  k,
                  p.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
                  e,
                  f
                )
              ),
              (f = null);
          }),
          pt.hasStandardBrowserEnv &&
            (o && b.isFunction(o) && (o = o(e)), o || (o !== !1 && s2(m))))
        ) {
          const v =
            e.xsrfHeaderName && e.xsrfCookieName && n2.read(e.xsrfCookieName);
          v && s.set(e.xsrfHeaderName, v);
        }
        i === void 0 && s.setContentType(null),
          "setRequestHeader" in f &&
            b.forEach(s.toJSON(), function (k, p) {
              f.setRequestHeader(p, k);
            }),
          b.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          a && a !== "json" && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            f.addEventListener("progress", Yf(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            f.upload &&
            f.upload.addEventListener("progress", Yf(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (v) => {
              f &&
                (r(!v || v.type ? new as(null, e, f) : v),
                f.abort(),
                (f = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal &&
              (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const g = a2(m);
        if (g && pt.protocols.indexOf(g) === -1) {
          r(new W("Unsupported protocol " + g + ":", W.ERR_BAD_REQUEST, e));
          return;
        }
        f.send(i || null);
      });
    },
  Tc = { http: Ox, xhr: c2 };
b.forEach(Tc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Jf = (e) => `- ${e}`,
  u2 = (e) => b.isFunction(e) || e === null || e === !1,
  Vg = {
    getAdapter: (e) => {
      e = b.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let a;
        if (
          ((r = n),
          !u2(n) && ((r = Tc[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new W(`Unknown adapter '${a}'`);
        if (r) break;
        i[a || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([o, c]) =>
            `adapter ${o} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let a = t
          ? s.length > 1
            ? `since :
` +
              s.map(Jf).join(`
`)
            : " " + Jf(s[0])
          : "as no adapter specified";
        throw new W(
          "There is no suitable adapter to dispatch the request " + a,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Tc,
  };
function fl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new as(null, e);
}
function qf(e) {
  return (
    fl(e),
    (e.headers = Pt.from(e.headers)),
    (e.data = dl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Vg.getAdapter(e.adapter || Qu.adapter)(e).then(
      function (r) {
        return (
          fl(e),
          (r.data = dl.call(e, e.transformResponse, r)),
          (r.headers = Pt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Hg(r) ||
            (fl(e),
            r &&
              r.response &&
              ((r.response.data = dl.call(e, e.transformResponse, r.response)),
              (r.response.headers = Pt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Qf = (e) => (e instanceof Pt ? e.toJSON() : e);
function Mr(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f) {
    return b.isPlainObject(u) && b.isPlainObject(d)
      ? b.merge.call({ caseless: f }, u, d)
      : b.isPlainObject(d)
      ? b.merge({}, d)
      : b.isArray(d)
      ? d.slice()
      : d;
  }
  function i(u, d, f) {
    if (b.isUndefined(d)) {
      if (!b.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, d, f);
  }
  function s(u, d) {
    if (!b.isUndefined(d)) return r(void 0, d);
  }
  function a(u, d) {
    if (b.isUndefined(d)) {
      if (!b.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function o(u, d, f) {
    if (f in t) return r(u, d);
    if (f in e) return r(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: o,
    headers: (u, d) => i(Qf(u), Qf(d), !0),
  };
  return (
    b.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = c[d] || i,
        m = f(e[d], t[d], d);
      (b.isUndefined(m) && f !== o) || (n[d] = m);
    }),
    n
  );
}
const Gg = "1.6.5",
  Xu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Xu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Xf = {};
Xu.transitional = function (t, n, r) {
  function i(s, a) {
    return (
      "[Axios v" +
      Gg +
      "] Transitional option '" +
      s +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (s, a, o) => {
    if (t === !1)
      throw new W(
        i(a, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
      );
    return (
      n &&
        !Xf[a] &&
        ((Xf[a] = !0),
        console.warn(
          i(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, a, o) : !0
    );
  };
};
function d2(e, t, n) {
  if (typeof e != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      a = t[s];
    if (a) {
      const o = e[s],
        c = o === void 0 || a(o, s, e);
      if (c !== !0)
        throw new W("option " + s + " must be " + c, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new W("Unknown option " + s, W.ERR_BAD_OPTION);
  }
}
const Cc = { assertOptions: d2, validators: Xu },
  Ht = Cc.validators;
class $a {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Gf(), response: new Gf() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Mr(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      Cc.assertOptions(
        r,
        {
          silentJSONParsing: Ht.transitional(Ht.boolean),
          forcedJSONParsing: Ht.transitional(Ht.boolean),
          clarifyTimeoutError: Ht.transitional(Ht.boolean),
        },
        !1
      ),
      i != null &&
        (b.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Cc.assertOptions(
              i,
              { encode: Ht.function, serialize: Ht.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a = s && b.merge(s.common, s[n.method]);
    s &&
      b.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete s[g];
        }
      ),
      (n.headers = Pt.concat(a, s));
    const o = [];
    let c = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((c = c && v.synchronous), o.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let d,
      f = 0,
      m;
    if (!c) {
      const g = [qf.bind(this), void 0];
      for (
        g.unshift.apply(g, o),
          g.push.apply(g, u),
          m = g.length,
          d = Promise.resolve(n);
        f < m;

      )
        d = d.then(g[f++], g[f++]);
      return d;
    }
    m = o.length;
    let w = n;
    for (f = 0; f < m; ) {
      const g = o[f++],
        v = o[f++];
      try {
        w = g(w);
      } catch (k) {
        v.call(this, k);
        break;
      }
    }
    try {
      d = qf.call(this, w);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, m = u.length; f < m; ) d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = Mr(this.defaults, t);
    const n = Wg(t.baseURL, t.url);
    return Fg(n, t.params, t.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function (t) {
  $a.prototype[t] = function (n, r) {
    return this.request(
      Mr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
b.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, a, o) {
      return this.request(
        Mr(o || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: a,
        })
      );
    };
  }
  ($a.prototype[t] = n()), ($a.prototype[t + "Form"] = n(!0));
});
const la = $a;
class Zu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const a = new Promise((o) => {
          r.subscribe(o), (s = o);
        }).then(i);
        return (
          (a.cancel = function () {
            r.unsubscribe(s);
          }),
          a
        );
      }),
      t(function (s, a, o) {
        r.reason || ((r.reason = new as(s, a, o)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Zu(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const f2 = Zu;
function h2(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function p2(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const Ic = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ic).forEach(([e, t]) => {
  Ic[t] = e;
});
const m2 = Ic;
function Kg(e) {
  const t = new la(e),
    n = Tg(la.prototype.request, t);
  return (
    b.extend(n, la.prototype, t, { allOwnKeys: !0 }),
    b.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Kg(Mr(e, i));
    }),
    n
  );
}
const ve = Kg(Qu);
ve.Axios = la;
ve.CanceledError = as;
ve.CancelToken = f2;
ve.isCancel = Hg;
ve.VERSION = Gg;
ve.toFormData = bo;
ve.AxiosError = W;
ve.Cancel = ve.CanceledError;
ve.all = function (t) {
  return Promise.all(t);
};
ve.spread = h2;
ve.isAxiosError = p2;
ve.mergeConfig = Mr;
ve.AxiosHeaders = Pt;
ve.formToJSON = (e) => $g(b.isHTMLForm(e) ? new FormData(e) : e);
ve.getAdapter = Vg.getAdapter;
ve.HttpStatusCode = m2;
ve.default = ve;
const g2 = ve,
  Yg = x.createContext();
function Tn() {
  return x.useContext(Yg);
}
function v2(e) {
  const [t, n] = x.useState(
      JSON.parse(window.sessionStorage.getItem("authUser"))
    ),
    r = window.sessionStorage.getItem("isLoggedIn") === "true",
    [i, s] = x.useState(r),
    [a, o] = x.useState(""),
    [c, u] = x.useState(""),
    [d, f] = x.useState(""),
    [m, w] = x.useState(""),
    [g, v] = x.useState(null),
    [k, p] = x.useState(null),
    [h, y] = x.useState(null),
    E = {
      authUser: t,
      setAuthUser: n,
      isLoggedIn: i,
      setIsLoggedIn: s,
      userPlaceName: a,
      userWithinRadius: c,
      userFromTime: d,
      userToTime: m,
      setUserPlaceName: o,
      setUserWithinRadius: u,
      setUserFromTime: f,
      setUserToTime: w,
      response1: g,
      response2: k,
      response3: h,
      setResponse1: v,
      setResponse2: p,
      setResponse3: y,
    };
  return l.jsx(Yg.Provider, { value: E, children: e.children });
}
const y2 = () => {
    const {
        setUserFromTime: e,
        setUserPlaceName: t,
        setUserToTime: n,
        setUserWithinRadius: r,
        setResponse1: i,
        setResponse2: s,
        setResponse3: a,
      } = Tn(),
      o = async () => {
        try {
          const A =
              "https://tripmacha-tamil-eniyan-t-s-projects.vercel.app/mltravel",
            q = {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            F = { place: m, start_time: h, end_time: E, distance: g };
          return (
            console.log(JSON.stringify(F)),
            await (
              await fetch(A, {
                method: "POST",
                headers: q,
                body: JSON.stringify(F),
              })
            ).json()
          );
        } catch (A) {
          console.error("Error:", A);
        }
      },
      [c, u] = x.useState(null),
      [d, f] = x.useState(null),
      [m, w] = x.useState(""),
      [g, v] = x.useState(""),
      [k, p] = x.useState(""),
      [h, y] = x.useState(""),
      [E, S] = x.useState(""),
      [C, T] = x.useState(""),
      [I, D] = x.useState(null);
    x.useEffect(() => {
      const A = (z) => {
          u(z.coords.latitude), f(z.coords.longitude);
        },
        q = (z) => {
          D(z.message);
        },
        F = new Date().toISOString().split("T")[0];
      p(F),
        navigator.geolocation
          ? navigator.geolocation.getCurrentPosition(A, q)
          : D("Geolocation is not supported by this browser.");
    }, []),
      x.useEffect(() => {
        const q = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: !1,
        });
        y(q), S(q), v("10");
      }, []);
    const L = (A) => {
      A.target.id === "ftime"
        ? (y(A.target.value), e(A.target.value))
        : A.target.id === "ttime" && (S(A.target.value), n(A.target.value));
    };
    x.useEffect(() => {
      (() => {
        const q = new Date(`2000/01/01 ${h}`),
          F = new Date(`2000/01/01 ${E}`);
        if (q <= F) {
          const z = Math.abs(F - q),
            O = Math.floor(z / 6e4) / 60,
            U = Math.floor(O),
            K = Math.round((O - U) * 60),
            J = U + " Hour, " + K + " Minutes";
          T(J);
        } else {
          alert("From Time should be Less Than To Time!");
          const N = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: !1,
          });
          y(N), S(N);
        }
      })();
    }, [h, E]),
      x.useEffect(() => {
        if (
          ((Z.current = new window.google.maps.places.Autocomplete(
            ce.current,
            pe
          )),
          window.google.maps.event.addListener(
            Z.current,
            "place_changed",
            () => {
              var A = "",
                q = "",
                F = Z.current.getPlace().address_components;
              for (let N = 0; N < F.length; N++)
                F[N].types.includes("locality")
                  ? (A = F[N].long_name)
                  : F[N].types.includes("administrative_area_level_1") &&
                    (q = F[N].long_name);
              var z = A + ", " + q;
              w(z), t(z);
            }
          ),
          c && d)
        ) {
          const q = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${c},${d}&key=AIzaSyDMWSgHTmFD9UdPTYIvLkXww_eyRdI5ggA`;
          g2.get(q)
            .then((F) => {
              if (F.data.results.length > 0) {
                const K = F.data.results[0].address_components;
                var z = "",
                  N = "",
                  O = "";
                for (let J = 0; J < K.length; J++)
                  K[J].types,
                    K[J].types.includes("locality")
                      ? (z = K[J].long_name)
                      : K[J].types.includes("administrative_area_level_1")
                      ? (N = K[J].long_name)
                      : K[J].types.includes("postal_code") &&
                        (O = K[J].long_name);
                var U = z + ", " + N + " - " + O;
                w(U);
              } else w("Location data not found");
            })
            .catch((F) => {
              D("Error fetching location data");
            });
        }
      }, [c, d]);
    const Z = x.useRef(),
      ce = x.useRef(),
      pe = {
        componentRestrictions: { country: "in" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["(cities)"],
      };
    return l.jsx(l.Fragment, {
      children: l.jsx("div", {
        children: l.jsx("div", {
          className: "container",
          style: {
            marginLeft: "0px",
            marginRight: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            maxWidth: "100%",
          },
          children: l.jsx("div", {
            className: "scheduler p-5 mt-md-0",
            style: { marginTop: "-100px" },
            children: l.jsxs("div", {
              className: "row g-5 align-items-center",
              children: [
                l.jsx("div", {
                  className: "col-md-6",
                  children: l.jsx("lottie-player", {
                    src: "https://assets10.lottiefiles.com/packages/lf20_IzOUkXgvK9.json",
                    style: { marginTop: "50px" },
                    background: "transparent",
                    speed: "1",
                    loop: !0,
                    autoplay: !0,
                  }),
                }),
                l.jsxs("div", {
                  className: "col-md-6",
                  children: [
                    l.jsx("h1", {
                      className: "text-white mb-4 text-center",
                      children: "Schedule a Trip Plan",
                    }),
                    l.jsx("form", {
                      action: "",
                      children: l.jsxs("div", {
                        className: "row g-3",
                        children: [
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsxs("div", {
                              className: "form-floating",
                              children: [
                                l.jsx("input", {
                                  type: "text",
                                  className:
                                    "form-control bg-transparent shadow-none text-white",
                                  id: "location",
                                  placeholder: "Location",
                                  ref: ce,
                                  value: m,
                                  onChange: (A) => {
                                    w(A.target.value), t(A.target.value);
                                  },
                                }),
                                l.jsx("label", {
                                  htmlFor: "location",
                                  className: "text-white fradius",
                                  children: "Location",
                                }),
                              ],
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsxs("div", {
                              className: "form-floating",
                              children: [
                                l.jsx("input", {
                                  type: "string",
                                  className:
                                    "form-control bg-transparent shadow-none text-white",
                                  id: "radius",
                                  value: g,
                                  onChange: (A) => {
                                    v(A.target.value), r(A.target.value);
                                  },
                                  placeholder: "Within distance",
                                  max: "60",
                                  min: "10",
                                }),
                                l.jsx("label", {
                                  htmlFor: "radius",
                                  className: "text-white fradius",
                                  children: "Within the Radius of (Km)",
                                }),
                              ],
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-12",
                            children: l.jsxs("div", {
                              className: "form-floating",
                              children: [
                                l.jsx("input", {
                                  type: "date",
                                  className:
                                    "form-control bg-transparent shadow-none text-white",
                                  id: "fdate",
                                  placeholder: "Current Date",
                                  value: k,
                                  onChange: (A) => {
                                    p(A.target.value);
                                  },
                                }),
                                l.jsx("label", {
                                  htmlFor: "fdate",
                                  className: "text-white fradius",
                                  children: "Current Date",
                                }),
                              ],
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsxs("div", {
                              className: "form-floating",
                              children: [
                                l.jsx("input", {
                                  type: "time",
                                  className:
                                    "form-control bg-transparent shadow-none text-white",
                                  id: "ftime",
                                  placeholder: "From Timings",
                                  value: h,
                                  onChange: L,
                                }),
                                l.jsx("label", {
                                  htmlFor: "ftime",
                                  className: "text-white fradius",
                                  children: "From Timings",
                                }),
                              ],
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsxs("div", {
                              className: "form-floating",
                              children: [
                                l.jsx("input", {
                                  type: "time",
                                  className:
                                    "form-control bg-transparent shadow-none text-white",
                                  id: "ttime",
                                  placeholder: "To Timings",
                                  value: E,
                                  onChange: L,
                                }),
                                l.jsx("label", {
                                  htmlFor: "ttime",
                                  className: "text-white fradius",
                                  children: "To Timings",
                                }),
                              ],
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-12",
                            children: l.jsxs("div", {
                              className: "form-floating",
                              children: [
                                l.jsx("input", {
                                  type: "text",
                                  className:
                                    " form-control bg-transparent shadow-none text-white",
                                  id: "duration",
                                  placeholder: "Duration(in minutes)",
                                  value: C,
                                  disabled: !0,
                                }),
                                l.jsx("label", {
                                  htmlFor: "duration",
                                  className: "text-white",
                                  children: "Duration",
                                }),
                              ],
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-12",
                            children: l.jsx(Re, {
                              to: "/Tripscheduler",
                              children: l.jsx("button", {
                                className:
                                  "btn btn-outline-light w-100 py-3 shadow-none",
                                type: "submit",
                                id: "btnlocate",
                                onClick: async () => {
                                  let A = await o().then((z) =>
                                    JSON.stringify(z)
                                  );
                                  i(JSON.parse(JSON.parse(A)));
                                  let q = await o().then((z) =>
                                    JSON.stringify(z)
                                  );
                                  s(JSON.parse(JSON.parse(q)));
                                  let F = await o().then((z) =>
                                    JSON.stringify(z)
                                  );
                                  a(JSON.parse(JSON.parse(F)));
                                },
                                children: "Locate Now",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  },
  w2 = "./image1-9e4236dd.jpg",
  x2 = "./image2-23228448.jpg",
  k2 = "./image3-7b192dfe.jpg",
  E2 = "./image4-a2ef9180.jpg",
  S2 = "./image5-e534cf1b.jpg",
  b2 = "./image6-27bc98e5.jpg",
  Zf = () =>
    l.jsx(l.Fragment, {
      children: l.jsx("div", {
        className: "container-xxl py5 destination",
        children: l.jsxs("div", {
          className: "container",
          children: [
            l.jsxs("div", {
              className: "text-center",
              children: [
                l.jsx("h6", {
                  className: "section-title bg-white text-center px-3 fs-3",
                  style: { color: "#37249D" },
                  children: "Recommendations",
                }),
                l.jsx("h1", {
                  className: "mb-5",
                  children: "Different Places Based On Current Location",
                }),
              ],
            }),
            l.jsxs("div", {
              className: "row g-3",
              children: [
                l.jsx("div", {
                  className: "col-lg-7 col-md-6",
                  children: l.jsxs("div", {
                    className: "row g-3",
                    children: [
                      l.jsx("div", {
                        className: "col-lg-12 col-md-12",
                        children: l.jsxs("a", {
                          href: "#",
                          className:
                            "d-block position-relative overflow-hidden",
                          children: [
                            l.jsx("img", {
                              src: w2,
                              alt: "Historical",
                              className: "img-fluid",
                            }),
                            l.jsx("div", {
                              className:
                                "bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2",
                              children: "Heritage Site",
                            }),
                          ],
                        }),
                      }),
                      l.jsx("div", {
                        className: "col-lg-6 col-md-12",
                        children: l.jsxs("a", {
                          href: "#",
                          className:
                            "d-block position-relative overflow-hidden",
                          children: [
                            l.jsx("img", {
                              src: x2,
                              alt: "Religious",
                              className: "img-fluid",
                            }),
                            l.jsx("div", {
                              className:
                                "bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2",
                              children: "Spiritual Center",
                            }),
                          ],
                        }),
                      }),
                      l.jsx("div", {
                        className: "col-lg-6 col-md-12",
                        children: l.jsxs("a", {
                          href: "#",
                          className:
                            "d-block position-relative overflow-hidden",
                          children: [
                            l.jsx("img", {
                              src: k2,
                              alt: "Beaches",
                              className: "img-fluid",
                            }),
                            l.jsx("div", {
                              className:
                                "bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2",
                              children: "Beaches",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                l.jsx("div", {
                  className: "col-lg-5 col-md-6",
                  style: { minHeight: "350px" },
                  children: l.jsxs("a", {
                    href: "#",
                    className:
                      "d-block position-relative h-100 overflow-hidden",
                    children: [
                      l.jsx("img", {
                        src: E2,
                        alt: "Adventure Park",
                        className: "img-fluid position-absolute w-100 h-100",
                        style: { objectFit: "cover" },
                      }),
                      l.jsx("div", {
                        className:
                          "bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2",
                        children: "Adventure Land",
                      }),
                    ],
                  }),
                }),
                l.jsx("div", {
                  className: "col-lg-5 col-md-6",
                  style: { minHeight: "350px" },
                  children: l.jsxs("a", {
                    href: "#",
                    className:
                      "d-block position-relative h-100 overflow-hidden",
                    children: [
                      l.jsx("img", {
                        src: S2,
                        alt: "Adventure Park",
                        className: "img-fluid position-absolute w-100 h-100",
                        style: { objectFit: "cover" },
                      }),
                      l.jsx("div", {
                        className:
                          "bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2",
                        children: "Amusement Park",
                      }),
                    ],
                  }),
                }),
                l.jsx("div", {
                  className: "col-lg-5 col-md-6",
                  style: { minHeight: "350px" },
                  children: l.jsxs("a", {
                    href: "#",
                    className:
                      "d-block position-relative h-100 overflow-hidden",
                    children: [
                      l.jsx("img", {
                        src: b2,
                        alt: "Adventure Park",
                        className: "img-fluid position-absolute w-100 h-100",
                        style: { objectFit: "cover" },
                      }),
                      l.jsx("div", {
                        className:
                          "bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2",
                        children: "Museum Complex",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  eh = () =>
    l.jsx(l.Fragment, {
      children: l.jsx("div", {
        className: "container-xxl py-5",
        children: l.jsxs("div", {
          className: "container",
          children: [
            l.jsxs("div", {
              className: "text-center",
              children: [
                l.jsx("h6", {
                  className: "section-title bg-white text-center px-3 fs-3",
                  style: { color: "#37249D" },
                  children: "Services",
                }),
                l.jsx("h2", {
                  className: "mb-5",
                  children: "We Offer Our Best Services To Plan Your Trip",
                }),
              ],
            }),
            l.jsxs("div", {
              className: "row g-4",
              children: [
                l.jsx("div", {
                  className: "col-lg-4 col-sm-6",
                  children: l.jsx("div", {
                    className: "service-item rounded pt-3",
                    children: l.jsxs("div", {
                      className: "p-4",
                      children: [
                        l.jsx("i", {
                          className:
                            "fa fa-3x fa-location-dot text-primary mb-4",
                        }),
                        l.jsx("h5", { children: "Convenient Trip Planning" }),
                        l.jsx("p", {
                          children:
                            "Perfectly utilize your free time by planning your trip with us",
                        }),
                      ],
                    }),
                  }),
                }),
                l.jsx("div", {
                  className: "col-lg-4 col-sm-6",
                  children: l.jsx("div", {
                    className: "service-item rounded pt-3",
                    children: l.jsxs("div", {
                      className: "p-4",
                      children: [
                        l.jsx("i", {
                          className: "fa fa-3x fa-gears text-primary mb-4",
                        }),
                        l.jsx("h5", { children: "Place Recommendations" }),
                        l.jsx("p", {
                          children:
                            "Recommends you with best places to visit in short amount of time",
                        }),
                      ],
                    }),
                  }),
                }),
                l.jsx("div", {
                  className: "col-lg-4 col-sm-6",
                  children: l.jsx("div", {
                    className: "service-item rounded pt-3",
                    children: l.jsxs("div", {
                      className: "p-4",
                      children: [
                        l.jsx("i", {
                          className:
                            "fa fa-3x fa-compass-drafting text-primary mb-4",
                        }),
                        l.jsx("h5", { children: "Location using Google Map" }),
                        l.jsx("p", {
                          children:
                            "Accurate and Best places recommended using google maps",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  _2 = () =>
    l.jsx(l.Fragment, {
      children: l.jsx("div", {
        "aria-live": "polite",
        "aria-atomic": "true",
        className: "d-flex justify-content-center align-items-center w-100",
        children: l.jsxs("div", {
          className: "toast-body toast-body-centered popup",
          children: [
            l.jsx("lottie-player", {
              src: "https://assets9.lottiefiles.com/packages/lf20_ctvgysft.json",
              background: "transparent",
              speed: "1",
              style: { width: "300px", height: "240px" },
              loop: !0,
              autoplay: !0,
            }),
            l.jsx("h2", { children: "Thank You" }),
            l.jsx("p", {
              children: "Your Message has been sent successfully!",
            }),
          ],
        }),
      }),
    }),
  th = () => {
    const e = x.useRef(),
      t = async (m) => {
        m.preventDefault();
        try {
          const w =
              "https://tripmacha-tamil-eniyan-t-s-projects.vercel.app/feedback",
            g = {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            v = { name: n, email: i, subject: a, messageContent: c };
          console.log(JSON.stringify(v));
          const p = await (
            await fetch(w, {
              method: "POST",
              headers: g,
              body: JSON.stringify(v),
            })
          ).json();
          console.log(p),
            f(!0),
            r(""),
            s(""),
            o(""),
            u(""),
            setTimeout(() => {
              f(!1);
            }, 1500);
        } catch (w) {
          console.error("Error:", w);
        }
      },
      [n, r] = V.useState(""),
      [i, s] = V.useState(""),
      [a, o] = V.useState(""),
      [c, u] = V.useState(""),
      [d, f] = V.useState(!1);
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx("div", {
          className: "container-xxl py5",
          children: l.jsx("div", {
            className: "container",
            children: l.jsx("div", {
              className: "contact p-5",
              children: l.jsxs("div", {
                className: "row g-5 align-items-center",
                children: [
                  l.jsx("div", {
                    className: "col-md-6 text-white",
                    children: l.jsx("lottie-player", {
                      src: "https://assets5.lottiefiles.com/private_files/lf30_vrcurbxk.json",
                      background: "transparent",
                      speed: "1",
                      loop: !0,
                      autoplay: !0,
                    }),
                  }),
                  l.jsxs("div", {
                    className: "col-md-6",
                    children: [
                      l.jsx("h1", {
                        className: "text-white mb-4 text-center",
                        children: "Contact Us",
                      }),
                      l.jsx("p", {
                        className: "text-white mb-4 text-center",
                        children:
                          "Please Feel Free To Tell Us What You Think About Our Website Or Suggest Any Changes. We Value Your Feedback, Please Fill The Below Form To Provide Feedback /Any Queries.",
                      }),
                      l.jsx("form", {
                        ref: e,
                        onSubmit: t,
                        children: l.jsxs("div", {
                          className: "row g-3",
                          children: [
                            l.jsx("div", {
                              className: "col-md-6",
                              children: l.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  l.jsx("input", {
                                    type: "text",
                                    className:
                                      "form-control bg-transparent shadow-none text-white",
                                    id: "name",
                                    name: "userName",
                                    placeholder: "Your name",
                                    required: !0,
                                    autoComplete: "on",
                                    value: n,
                                    onChange: (m) => r(m.target.value),
                                  }),
                                  l.jsx("label", {
                                    htmlFor: "name",
                                    className: "text-white",
                                    children: "Your Name",
                                  }),
                                ],
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-md-6",
                              children: l.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  l.jsx("input", {
                                    type: "email",
                                    className:
                                      "form-control bg-transparent shadow-none text-white",
                                    id: "mailID",
                                    name: "mailId",
                                    placeholder: "Your Contact Number",
                                    required: !0,
                                    autoComplete: "on",
                                    value: i,
                                    onChange: (m) => s(m.target.value),
                                  }),
                                  l.jsx("label", {
                                    htmlFor: "mailID",
                                    className: "text-white",
                                    children: "Your Email-ID",
                                  }),
                                ],
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-12",
                              children: l.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  l.jsx("input", {
                                    type: "text",
                                    className:
                                      "form-control bg-transparent shadow-none text-white",
                                    id: "subject",
                                    name: "subject",
                                    placeholder: "Subject",
                                    required: !0,
                                    autoComplete: "on",
                                    value: a,
                                    onChange: (m) => o(m.target.value),
                                  }),
                                  l.jsx("label", {
                                    htmlFor: "subject",
                                    className: "text-white",
                                    children: "Subject",
                                  }),
                                ],
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-12",
                              children: l.jsxs("div", {
                                className: "form-floating",
                                children: [
                                  l.jsx("textarea", {
                                    className:
                                      "form-control bg-transparent shadow-none text-white",
                                    placeholder: "Special Request",
                                    name: "message",
                                    id: "message",
                                    style: { height: "100px" },
                                    required: !0,
                                    autoComplete: "on",
                                    value: c,
                                    onChange: (m) => u(m.target.value),
                                  }),
                                  l.jsx("label", {
                                    htmlFor: "message",
                                    className: "text-white",
                                    children: "Write message here...",
                                  }),
                                ],
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-12",
                              children: l.jsx("button", {
                                className:
                                  "btn btn-outline-light w-100 py-3 shadow-none",
                                type: "submit",
                                children: "Send Message",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
        d && l.jsx(_2, {}),
      ],
    });
  },
  N2 = "./Google Play-f72611e2.png",
  T2 = "./Play Store-e45ca4d1.png",
  C2 = () =>
    l.jsx(l.Fragment, {
      children: l.jsxs("div", {
        className: "container-fluid bg-dark text-light footer pt-5 mt-5",
        children: [
          l.jsx("div", {
            className: "container py-5",
            children: l.jsxs("div", {
              className: "row g-5",
              children: [
                l.jsxs("div", {
                  className: "col-lg-3 col-md-6",
                  children: [
                    l.jsx("h4", {
                      className: "text-white mb-3",
                      children: "Company",
                    }),
                    l.jsx("a", {
                      href: "https://www.ganglia.in/about-1",
                      target: "_blank",
                      className: "btn btn-link shadow-none",
                      children: "About us",
                    }),
                    l.jsx("a", {
                      href: "https://www.ganglia.in/",
                      target: "_blank",
                      className: "btn btn-link shadow-none",
                      children: "Contact Us",
                    }),
                    l.jsx("a", {
                      href: "#",
                      className: "btn btn-link shadow-none",
                      target: "_blank",
                      children: "Privacy Policy",
                    }),
                    l.jsx("a", {
                      href: "src\\components\\Terms_and_Condition.html",
                      className: "btn btn-link shadow-none",
                      target: "_blank",
                      children: "Terms & Condition",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-lg-3 col-md-6",
                  children: [
                    l.jsx("h4", {
                      className: "text-white mb-3",
                      children: "Contact",
                    }),
                    l.jsxs("p", {
                      className: "mb-2",
                      children: [
                        l.jsx("i", { className: "fa fa-map-marker-alt me-2" }),
                        "1",
                        l.jsx("sup", { children: "st" }),
                        " Floor, Bio Incubator, Manipal, Udupi, Karnataka, India - 576104",
                      ],
                    }),
                    l.jsxs("p", {
                      className: "mb-2",
                      children: [
                        l.jsx("i", { className: "fa fa-phone-alt me-2" }),
                        "+91-9449584493",
                      ],
                    }),
                    l.jsxs("p", {
                      className: "mb-2",
                      children: [
                        l.jsx("i", { className: "fa fa-envelope me-2" }),
                        "director@ganglia.in",
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-lg-3 col-md-6",
                  children: [
                    l.jsx("h4", {
                      className: "text-white mb-3",
                      children: "Get in touch with us",
                    }),
                    l.jsxs("div", {
                      className: "row g-2 pt-2",
                      children: [
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsx("a", {
                            href: "https://wa.me/9449584493",
                            target: "_blank",
                            className:
                              "btn btn-outline-light btn-social-watsapp shadow-none",
                            children: l.jsx("i", {
                              className: "fa-brands fa-whatsapp",
                            }),
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsx("a", {
                            href: "#",
                            target: "_blank",
                            className:
                              "btn btn-outline-light btn-social shadow-none",
                            children: l.jsx("i", {
                              className: "fab fa-twitter",
                            }),
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsx("a", {
                            href: "https://www.facebook.com/people/Ganglia-Technologies/100094390417846/?mibextid=ZbWKwL",
                            target: "_blank",
                            className:
                              "btn btn-outline-light btn-social shadow-none",
                            children: l.jsx("i", {
                              className: "fab fa-facebook",
                            }),
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsx("a", {
                            href: "https://www.linkedin.com/in/ganglia-technologies-973684278",
                            target: "_blank",
                            className:
                              "btn btn-outline-light btn-social shadow-none",
                            children: l.jsx("i", {
                              className: "fab fa-linkedin-in",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-lg-3 col-md-6",
                  children: [
                    l.jsx("h4", {
                      className: "text-white mb-3",
                      children: "Discover Our app",
                    }),
                    l.jsxs("div", {
                      className: "row g-2 pt-2",
                      children: [
                        l.jsx("div", {
                          className: "col-7",
                          children: l.jsx("a", {
                            href: "#",
                            target: "_blank",
                            className: "glink shadow-none",
                            children: l.jsx("img", {
                              src: N2,
                              width: "150px",
                              height: "65px",
                              alt: "Google Play Store",
                            }),
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-7",
                          children: l.jsx("a", {
                            href: "#",
                            target: "_blank",
                            className: "glink shadow-none",
                            children: l.jsx("img", {
                              src: T2,
                              style: {
                                backgroundColor: "white",
                                borderRadius: "6px",
                                marginLeft: "9px",
                                border: "1px solid grey",
                              },
                              width: "133px",
                              height: "43px",
                              alt: "App Store",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: "container",
            children: l.jsx("div", {
              className: "copyright",
              children: l.jsxs("div", {
                className: "row",
                children: [
                  l.jsx("div", {
                    className:
                      "col-md-6 text-center text-md-start mb-3 mb-md-0",
                    children:
                      "Copyright © 2023 @ Ganglia Technologies | Right Reserved.",
                  }),
                  l.jsx("div", {
                    className: "col-md-6 text-center text-md-end",
                    children: l.jsxs("div", {
                      className: "footer-menu",
                      children: [
                        l.jsx("a", {
                          href: "#home",
                          className: "flink shadow-none",
                          children: "Home",
                        }),
                        l.jsx("a", {
                          href: "https://www.ganglia.in/",
                          target: "_blank",
                          className: "flink shadow-none",
                          children: "Queries",
                        }),
                        l.jsx("a", {
                          href: "#services",
                          className: "flink shadow-none",
                          children: "Services",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  I2 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4nO3WwSpEURgH8F/DnkKJpYWdjYViIwtZeg8vYCchG9nInheQshAN7yAWmuzMgmRharKaRlNnymLunXtzTqT511f3dL5zfp3O7XYZ5I9mBseooYk3nGM2JbqOT7R71As2MJHipM0M9HvVMRkTPiqAdmsvJvxYAn6ICX+WgBsx4dffgi9LwNWY8EUJuNMbLfUS8HNM+LAEfCByqgXQawmyVgBelSj7OeimxGlnlH8Jz6HVA22FuagZxgIqYbwU3t6PUFdYDHOV0Dv0E3AFp3gPpzrDWE7/eOhphzUnWC4DTuM24x47vzo7mMcIRsPzbpjrteYGU/3QzmZPJb5SRasW9s7MdgK0W1t58H1C+C4PbiSEG/3ueRAp8gXa7BOj47r4TwAAAABJRU5ErkJggg==";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jg = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  j2 = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = e[n++],
          a = e[n++],
          o = e[n++],
          c =
            (((i & 7) << 18) | ((s & 63) << 12) | ((a & 63) << 6) | (o & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (c >> 10))),
          (t[r++] = String.fromCharCode(56320 + (c & 1023)));
      } else {
        const s = e[n++],
          a = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (a & 63)
        );
      }
    }
    return t.join("");
  },
  qg = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const s = e[i],
          a = i + 1 < e.length,
          o = a ? e[i + 1] : 0,
          c = i + 2 < e.length,
          u = c ? e[i + 2] : 0,
          d = s >> 2,
          f = ((s & 3) << 4) | (o >> 4);
        let m = ((o & 15) << 2) | (u >> 6),
          w = u & 63;
        c || ((w = 64), a || (m = 64)), r.push(n[d], n[f], n[m], n[w]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(Jg(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : j2(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const s = n[e.charAt(i++)],
          o = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const f = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, s == null || o == null || u == null || f == null))
          throw new P2();
        const m = (s << 2) | (o >> 4);
        if ((r.push(m), u !== 64)) {
          const w = ((o << 4) & 240) | (u >> 2);
          if ((r.push(w), f !== 64)) {
            const g = ((u << 6) & 192) | f;
            r.push(g);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class P2 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const R2 = function (e) {
    const t = Jg(e);
    return qg.encodeByteArray(t, !0);
  },
  Qg = function (e) {
    return R2(e).replace(/\./g, "");
  },
  Xg = function (e) {
    try {
      return qg.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function O2() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const A2 = () => O2().__FIREBASE_DEFAULTS__,
  L2 = () => {
    if (typeof process > "u" || typeof process.env > "u") return;
    const e = {}.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  D2 = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && Xg(e[1]);
    return t && JSON.parse(t);
  },
  ed = () => {
    try {
      return A2() || L2() || D2();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  M2 = (e) => {
    var t, n;
    return (n =
      (t = ed()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  Zg = () => {
    var e;
    return (e = ed()) === null || e === void 0 ? void 0 : e.config;
  },
  ev = (e) => {
    var t;
    return (t = ed()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U2 {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function je() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function F2() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())
  );
}
function z2() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function B2() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function $2() {
  const e = je();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function H2() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function W2() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          t(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const V2 = "FirebaseError";
class Cn extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = V2),
      Object.setPrototypeOf(this, Cn.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, os.prototype.create);
  }
}
class os {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      s = this.errors[t],
      a = s ? G2(s, r) : "Error",
      o = `${this.serviceName}: ${a} (${i}).`;
    return new Cn(i, o, r);
  }
}
function G2(e, t) {
  return e.replace(K2, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const K2 = /\{\$([^}]+)}/g;
function Y2(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function Ha(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = e[i],
      a = t[i];
    if (nh(s) && nh(a)) {
      if (!Ha(s, a)) return !1;
    } else if (s !== a) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function nh(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ls(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function J2(e, t) {
  const n = new q2(e, t);
  return n.subscribe.bind(n);
}
class q2 {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    Q2(t, ["next", "error", "complete"])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = hl),
      i.error === void 0 && (i.error = hl),
      i.complete === void 0 && (i.complete = hl);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function Q2(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function hl() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gr(e) {
  return e && e._delegate ? e._delegate : e;
}
class Ur {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const On = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X2 {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new U2();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      i =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (ek(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: On });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(t = On) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = On) {
    return this.instances.has(t);
  }
  getOptions(t = On) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, a] of this.instancesDeferred.entries()) {
      const o = this.normalizeInstanceIdentifier(s);
      r === o && a.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(t), this.onInitCallbacks.set(i, s);
    const a = this.instances.get(i);
    return (
      a && t(a, i),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: Z2(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = On) {
    return this.component ? (this.component.multipleInstances ? t : On) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Z2(e) {
  return e === On ? void 0 : e;
}
function ek(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tk {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new X2(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var X;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(X || (X = {}));
const nk = {
    debug: X.DEBUG,
    verbose: X.VERBOSE,
    info: X.INFO,
    warn: X.WARN,
    error: X.ERROR,
    silent: X.SILENT,
  },
  rk = X.INFO,
  ik = {
    [X.DEBUG]: "log",
    [X.VERBOSE]: "log",
    [X.INFO]: "info",
    [X.WARN]: "warn",
    [X.ERROR]: "error",
  },
  sk = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = ik[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class tv {
  constructor(t) {
    (this.name = t),
      (this._logLevel = rk),
      (this._logHandler = sk),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in X))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? nk[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, X.DEBUG, ...t),
      this._logHandler(this, X.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, X.VERBOSE, ...t),
      this._logHandler(this, X.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, X.INFO, ...t),
      this._logHandler(this, X.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, X.WARN, ...t),
      this._logHandler(this, X.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, X.ERROR, ...t),
      this._logHandler(this, X.ERROR, ...t);
  }
}
const ak = (e, t) => t.some((n) => e instanceof n);
let rh, ih;
function ok() {
  return (
    rh ||
    (rh = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function lk() {
  return (
    ih ||
    (ih = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const nv = new WeakMap(),
  jc = new WeakMap(),
  rv = new WeakMap(),
  pl = new WeakMap(),
  td = new WeakMap();
function ck(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", s), e.removeEventListener("error", a);
      },
      s = () => {
        n(gn(e.result)), i();
      },
      a = () => {
        r(e.error), i();
      };
    e.addEventListener("success", s), e.addEventListener("error", a);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && nv.set(n, e);
      })
      .catch(() => {}),
    td.set(t, e),
    t
  );
}
function uk(e) {
  if (jc.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", s),
          e.removeEventListener("error", a),
          e.removeEventListener("abort", a);
      },
      s = () => {
        n(), i();
      },
      a = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", s),
      e.addEventListener("error", a),
      e.addEventListener("abort", a);
  });
  jc.set(e, t);
}
let Pc = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return jc.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || rv.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return gn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function dk(e) {
  Pc = e(Pc);
}
function fk(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(ml(this), t, ...n);
        return rv.set(r, t.sort ? t.sort() : [t]), gn(r);
      }
    : lk().includes(e)
    ? function (...t) {
        return e.apply(ml(this), t), gn(nv.get(this));
      }
    : function (...t) {
        return gn(e.apply(ml(this), t));
      };
}
function hk(e) {
  return typeof e == "function"
    ? fk(e)
    : (e instanceof IDBTransaction && uk(e),
      ak(e, ok()) ? new Proxy(e, Pc) : e);
}
function gn(e) {
  if (e instanceof IDBRequest) return ck(e);
  if (pl.has(e)) return pl.get(e);
  const t = hk(e);
  return t !== e && (pl.set(e, t), td.set(t, e)), t;
}
const ml = (e) => td.get(e);
function pk(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const a = indexedDB.open(e, t),
    o = gn(a);
  return (
    r &&
      a.addEventListener("upgradeneeded", (c) => {
        r(gn(a.result), c.oldVersion, c.newVersion, gn(a.transaction), c);
      }),
    n && a.addEventListener("blocked", (c) => n(c.oldVersion, c.newVersion, c)),
    o
      .then((c) => {
        s && c.addEventListener("close", () => s()),
          i &&
            c.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    o
  );
}
const mk = ["get", "getKey", "getAll", "getAllKeys", "count"],
  gk = ["put", "add", "delete", "clear"],
  gl = new Map();
function sh(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (gl.get(t)) return gl.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = gk.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || mk.includes(n))
  )
    return;
  const s = async function (a, ...o) {
    const c = this.transaction(a, i ? "readwrite" : "readonly");
    let u = c.store;
    return (
      r && (u = u.index(o.shift())),
      (await Promise.all([u[n](...o), i && c.done]))[0]
    );
  };
  return gl.set(t, s), s;
}
dk((e) => ({
  ...e,
  get: (t, n, r) => sh(t, n) || e.get(t, n, r),
  has: (t, n) => !!sh(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vk {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (yk(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function yk(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Rc = "@firebase/app",
  ah = "0.9.14";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jn = new tv("@firebase/app"),
  wk = "@firebase/app-compat",
  xk = "@firebase/analytics-compat",
  kk = "@firebase/analytics",
  Ek = "@firebase/app-check-compat",
  Sk = "@firebase/app-check",
  bk = "@firebase/auth",
  _k = "@firebase/auth-compat",
  Nk = "@firebase/database",
  Tk = "@firebase/database-compat",
  Ck = "@firebase/functions",
  Ik = "@firebase/functions-compat",
  jk = "@firebase/installations",
  Pk = "@firebase/installations-compat",
  Rk = "@firebase/messaging",
  Ok = "@firebase/messaging-compat",
  Ak = "@firebase/performance",
  Lk = "@firebase/performance-compat",
  Dk = "@firebase/remote-config",
  Mk = "@firebase/remote-config-compat",
  Uk = "@firebase/storage",
  Fk = "@firebase/storage-compat",
  zk = "@firebase/firestore",
  Bk = "@firebase/firestore-compat",
  $k = "firebase",
  Hk = "10.0.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Oc = "[DEFAULT]",
  Wk = {
    [Rc]: "fire-core",
    [wk]: "fire-core-compat",
    [kk]: "fire-analytics",
    [xk]: "fire-analytics-compat",
    [Sk]: "fire-app-check",
    [Ek]: "fire-app-check-compat",
    [bk]: "fire-auth",
    [_k]: "fire-auth-compat",
    [Nk]: "fire-rtdb",
    [Tk]: "fire-rtdb-compat",
    [Ck]: "fire-fn",
    [Ik]: "fire-fn-compat",
    [jk]: "fire-iid",
    [Pk]: "fire-iid-compat",
    [Rk]: "fire-fcm",
    [Ok]: "fire-fcm-compat",
    [Ak]: "fire-perf",
    [Lk]: "fire-perf-compat",
    [Dk]: "fire-rc",
    [Mk]: "fire-rc-compat",
    [Uk]: "fire-gcs",
    [Fk]: "fire-gcs-compat",
    [zk]: "fire-fst",
    [Bk]: "fire-fst-compat",
    "fire-js": "fire-js",
    [$k]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wa = new Map(),
  Ac = new Map();
function Vk(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Jn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Wi(e) {
  const t = e.name;
  if (Ac.has(t))
    return (
      Jn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Ac.set(t, e);
  for (const n of Wa.values()) Vk(n, e);
  return !0;
}
function iv(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Gk = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  vn = new os("app", "Firebase", Gk);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kk {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Ur("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw vn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const cs = Hk;
function sv(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: Oc, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != "string" || !i)
    throw vn.create("bad-app-name", { appName: String(i) });
  if ((n || (n = Zg()), !n)) throw vn.create("no-options");
  const s = Wa.get(i);
  if (s) {
    if (Ha(n, s.options) && Ha(r, s.config)) return s;
    throw vn.create("duplicate-app", { appName: i });
  }
  const a = new tk(i);
  for (const c of Ac.values()) a.addComponent(c);
  const o = new Kk(n, r, a);
  return Wa.set(i, o), o;
}
function Yk(e = Oc) {
  const t = Wa.get(e);
  if (!t && e === Oc && Zg()) return sv();
  if (!t) throw vn.create("no-app", { appName: e });
  return t;
}
function Nr(e, t, n) {
  var r;
  let i = (r = Wk[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    a = t.match(/\s|\//);
  if (s || a) {
    const o = [`Unable to register library "${i}" with version "${t}":`];
    s &&
      o.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && a && o.push("and"),
      a &&
        o.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Jn.warn(o.join(" "));
    return;
  }
  Wi(new Ur(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jk = "firebase-heartbeat-database",
  qk = 1,
  Vi = "firebase-heartbeat-store";
let vl = null;
function av() {
  return (
    vl ||
      (vl = pk(Jk, qk, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              e.createObjectStore(Vi);
          }
        },
      }).catch((e) => {
        throw vn.create("idb-open", { originalErrorMessage: e.message });
      })),
    vl
  );
}
async function Qk(e) {
  try {
    return await (await av()).transaction(Vi).objectStore(Vi).get(ov(e));
  } catch (t) {
    if (t instanceof Cn) Jn.warn(t.message);
    else {
      const n = vn.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Jn.warn(n.message);
    }
  }
}
async function oh(e, t) {
  try {
    const r = (await av()).transaction(Vi, "readwrite");
    await r.objectStore(Vi).put(t, ov(e)), await r.done;
  } catch (n) {
    if (n instanceof Cn) Jn.warn(n.message);
    else {
      const r = vn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Jn.warn(r.message);
    }
  }
}
function ov(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xk = 1024,
  Zk = 30 * 24 * 60 * 60 * 1e3;
class eE {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new nE(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = lh();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((i) => {
            const s = new Date(i.date).valueOf();
            return Date.now() - s <= Zk;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const t = lh(),
      { heartbeatsToSend: n, unsentEntries: r } = tE(
        this._heartbeatsCache.heartbeats
      ),
      i = Qg(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = t),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function lh() {
  return new Date().toISOString().substring(0, 10);
}
function tE(e, t = Xk) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((a) => a.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), ch(n) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), ch(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class nE {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return H2()
      ? W2()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await Qk(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return oh(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return oh(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function ch(e) {
  return Qg(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rE(e) {
  Wi(new Ur("platform-logger", (t) => new vk(t), "PRIVATE")),
    Wi(new Ur("heartbeat", (t) => new eE(t), "PRIVATE")),
    Nr(Rc, ah, e),
    Nr(Rc, ah, "esm2017"),
    Nr("fire-js", "");
}
rE("");
var iE = "firebase",
  sE = "10.0.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Nr(iE, sE, "app");
function nd(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function lv() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const aE = lv,
  cv = new os("auth", "Firebase", lv());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Va = new tv("@firebase/auth");
function oE(e, ...t) {
  Va.logLevel <= X.WARN && Va.warn(`Auth (${cs}): ${e}`, ...t);
}
function ca(e, ...t) {
  Va.logLevel <= X.ERROR && Va.error(`Auth (${cs}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xt(e, ...t) {
  throw rd(e, ...t);
}
function yt(e, ...t) {
  return rd(e, ...t);
}
function uv(e, t, n) {
  const r = Object.assign(Object.assign({}, aE()), { [t]: n });
  return new os("auth", "Firebase", r).create(t, { appName: e.name });
}
function lE(e, t, n) {
  const r = n;
  if (!(t instanceof r))
    throw (
      (r.name !== t.constructor.name && xt(e, "argument-error"),
      uv(
        e,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function rd(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return cv.create(e, ...t);
}
function M(e, t, ...n) {
  if (!e) throw rd(t, ...n);
}
function Ct(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (ca(t), new Error(t));
}
function Dt(e, t) {
  e || Ct(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lc() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ""
  );
}
function cE() {
  return uh() === "http:" || uh() === "https:";
}
function uh() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uE() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (cE() || z2() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function dE() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class us {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      Dt(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = F2() || B2());
  }
  get() {
    return uE()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function id(e, t) {
  Dt(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dv {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    Ct(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    Ct(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    Ct(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fE = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hE = new us(3e4, 6e4);
function sd(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function ds(e, t, n, r, i = {}) {
  return fv(e, i, async () => {
    let s = {},
      a = {};
    r && (t === "GET" ? (a = r) : (s = { body: JSON.stringify(r) }));
    const o = ls(Object.assign({ key: e.config.apiKey }, a)).slice(1),
      c = await e._getAdditionalHeaders();
    return (
      (c["Content-Type"] = "application/json"),
      e.languageCode && (c["X-Firebase-Locale"] = e.languageCode),
      dv.fetch()(
        pv(e, e.config.apiHost, n, o),
        Object.assign(
          { method: t, headers: c, referrerPolicy: "no-referrer" },
          s
        )
      )
    );
  });
}
async function fv(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, fE), t);
  try {
    const i = new pE(e),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const a = await s.json();
    if ("needConfirmation" in a)
      throw Ds(e, "account-exists-with-different-credential", a);
    if (s.ok && !("errorMessage" in a)) return a;
    {
      const o = s.ok ? a.errorMessage : a.error.message,
        [c, u] = o.split(" : ");
      if (c === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Ds(e, "credential-already-in-use", a);
      if (c === "EMAIL_EXISTS") throw Ds(e, "email-already-in-use", a);
      if (c === "USER_DISABLED") throw Ds(e, "user-disabled", a);
      const d = r[c] || c.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw uv(e, d, u);
      xt(e, d);
    }
  } catch (i) {
    if (i instanceof Cn) throw i;
    xt(e, "network-request-failed", { message: String(i) });
  }
}
async function hv(e, t, n, r, i = {}) {
  const s = await ds(e, t, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      xt(e, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
function pv(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? id(e.config, i) : `${e.config.apiScheme}://${i}`;
}
class pE {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(yt(this.auth, "network-request-failed")),
          hE.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Ds(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = yt(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function mE(e, t) {
  return ds(e, "POST", "/v1/accounts:delete", t);
}
async function gE(e, t) {
  return ds(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wi(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function vE(e, t = !1) {
  const n = Gr(e),
    r = await n.getIdToken(t),
    i = ad(r);
  M(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    a = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: wi(yl(i.auth_time)),
    issuedAtTime: wi(yl(i.iat)),
    expirationTime: wi(yl(i.exp)),
    signInProvider: a || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function yl(e) {
  return Number(e) * 1e3;
}
function ad(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return ca("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = Xg(n);
    return i
      ? JSON.parse(i)
      : (ca("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      ca(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function yE(e) {
  const t = ad(e);
  return (
    M(t, "internal-error"),
    M(typeof t.exp < "u", "internal-error"),
    M(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Gi(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof Cn &&
        wE(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function wE({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xE {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mv {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = wi(this.lastLoginAt)),
      (this.creationTime = wi(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ga(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await Gi(e, gE(n, { idToken: r }));
  M(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  e._notifyReloadListener(s);
  const a =
      !((t = s.providerUserInfo) === null || t === void 0) && t.length
        ? SE(s.providerUserInfo)
        : [],
    o = EE(e.providerData, a),
    c = e.isAnonymous,
    u = !(e.email && s.passwordHash) && !(o != null && o.length),
    d = c ? u : !1,
    f = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: o,
      metadata: new mv(s.createdAt, s.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(e, f);
}
async function kE(e) {
  const t = Gr(e);
  await Ga(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function EE(e, t) {
  return [
    ...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
    ...t,
  ];
}
function SE(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = nd(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function bE(e, t) {
  const n = await fv(e, {}, async () => {
    const r = ls({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: s } = e.config,
      a = pv(e, i, "/v1/token", `key=${s}`),
      o = await e._getAdditionalHeaders();
    return (
      (o["Content-Type"] = "application/x-www-form-urlencoded"),
      dv.fetch()(a, { method: "POST", headers: o, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ki {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    M(t.idToken, "internal-error"),
      M(typeof t.idToken < "u", "internal-error"),
      M(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : yE(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  async getToken(t, n = !1) {
    return (
      M(!this.accessToken || this.refreshToken, t, "user-token-expired"),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
        ? (await this.refresh(t, this.refreshToken), this.accessToken)
        : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await bE(t, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      a = new Ki();
    return (
      r &&
        (M(typeof r == "string", "internal-error", { appName: t }),
        (a.refreshToken = r)),
      i &&
        (M(typeof i == "string", "internal-error", { appName: t }),
        (a.accessToken = i)),
      s &&
        (M(typeof s == "number", "internal-error", { appName: t }),
        (a.expirationTime = s)),
      a
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new Ki(), this.toJSON());
  }
  _performRefresh() {
    return Ct("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wt(e, t) {
  M(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class Hn {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      s = nd(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new xE(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new mv(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await Gi(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      M(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return vE(this, t);
  }
  reload() {
    return kE(this);
  }
  _assign(t) {
    this !== t &&
      (M(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new Hn(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    M(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await Ga(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const t = await this.getIdToken();
    return (
      await Gi(this, mE(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, i, s, a, o, c, u, d;
    const f = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      m = (i = n.email) !== null && i !== void 0 ? i : void 0,
      w = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      g = (a = n.photoURL) !== null && a !== void 0 ? a : void 0,
      v = (o = n.tenantId) !== null && o !== void 0 ? o : void 0,
      k = (c = n._redirectEventId) !== null && c !== void 0 ? c : void 0,
      p = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      h = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0,
      {
        uid: y,
        emailVerified: E,
        isAnonymous: S,
        providerData: C,
        stsTokenManager: T,
      } = n;
    M(y && T, t, "internal-error");
    const I = Ki.fromJSON(this.name, T);
    M(typeof y == "string", t, "internal-error"),
      Wt(f, t.name),
      Wt(m, t.name),
      M(typeof E == "boolean", t, "internal-error"),
      M(typeof S == "boolean", t, "internal-error"),
      Wt(w, t.name),
      Wt(g, t.name),
      Wt(v, t.name),
      Wt(k, t.name),
      Wt(p, t.name),
      Wt(h, t.name);
    const D = new Hn({
      uid: y,
      auth: t,
      email: m,
      emailVerified: E,
      displayName: f,
      isAnonymous: S,
      photoURL: g,
      phoneNumber: w,
      tenantId: v,
      stsTokenManager: I,
      createdAt: p,
      lastLoginAt: h,
    });
    return (
      C &&
        Array.isArray(C) &&
        (D.providerData = C.map((L) => Object.assign({}, L))),
      k && (D._redirectEventId = k),
      D
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new Ki();
    i.updateFromServerResponse(n);
    const s = new Hn({
      uid: n.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await Ga(s), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dh = new Map();
function It(e) {
  Dt(e instanceof Function, "Expected a class definition");
  let t = dh.get(e);
  return t
    ? (Dt(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), dh.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gv {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
gv.type = "NONE";
const fh = gv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ua(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Tr {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = ua(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = ua("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? Hn._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new Tr(It(fh), t, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let s = i[0] || It(fh);
    const a = ua(r, t.config.apiKey, t.name);
    let o = null;
    for (const u of n)
      try {
        const d = await u._get(a);
        if (d) {
          const f = Hn._fromJSON(t, d);
          u !== s && (o = f), (s = u);
          break;
        }
      } catch {}
    const c = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !c.length
      ? new Tr(s, t, r)
      : ((s = c[0]),
        o && (await s._set(a, o.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== s)
              try {
                await u._remove(a);
              } catch {}
          })
        ),
        new Tr(s, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hh(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (wv(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (vv(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (kv(t)) return "Blackberry";
  if (Ev(t)) return "Webos";
  if (od(t)) return "Safari";
  if ((t.includes("chrome/") || yv(t)) && !t.includes("edge/")) return "Chrome";
  if (xv(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function vv(e = je()) {
  return /firefox\//i.test(e);
}
function od(e = je()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function yv(e = je()) {
  return /crios\//i.test(e);
}
function wv(e = je()) {
  return /iemobile/i.test(e);
}
function xv(e = je()) {
  return /android/i.test(e);
}
function kv(e = je()) {
  return /blackberry/i.test(e);
}
function Ev(e = je()) {
  return /webos/i.test(e);
}
function No(e = je()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function _E(e = je()) {
  var t;
  return (
    No(e) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function NE() {
  return $2() && document.documentMode === 10;
}
function Sv(e = je()) {
  return No(e) || xv(e) || Ev(e) || kv(e) || /windows phone/i.test(e) || wv(e);
}
function TE() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bv(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = hh(je());
      break;
    case "Worker":
      n = `${hh(je())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${cs}/${r}`;
}
async function _v(e, t) {
  return ds(e, "GET", "/v2/recaptchaConfig", sd(e, t));
}
function ph(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
class Nv {
  constructor(t) {
    if (
      ((this.siteKey = ""),
      (this.emailPasswordEnabled = !1),
      t.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = t.recaptchaKey.split("/")[3]),
      (this.emailPasswordEnabled = t.recaptchaEnforcementState.some(
        (n) =>
          n.provider === "EMAIL_PASSWORD_PROVIDER" &&
          n.enforcementState !== "OFF"
      ));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function CE() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName("head")) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
function Tv(e) {
  return new Promise((t, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", e),
      (r.onload = t),
      (r.onerror = (i) => {
        const s = yt("internal-error");
        (s.customData = i), n(s);
      }),
      (r.type = "text/javascript"),
      (r.charset = "UTF-8"),
      CE().appendChild(r);
  });
}
function IE(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
const jE = "https://www.google.com/recaptcha/enterprise.js?render=",
  PE = "recaptcha-enterprise",
  RE = "NO_RECAPTCHA";
class OE {
  constructor(t) {
    (this.type = PE), (this.auth = Kr(t));
  }
  async verify(t = "verify", n = !1) {
    async function r(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (
          s.tenantId != null &&
          s._tenantRecaptchaConfigs[s.tenantId] !== void 0
        )
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (a, o) => {
        _v(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((c) => {
            if (c.recaptchaKey === void 0)
              o(new Error("recaptcha Enterprise site key undefined"));
            else {
              const u = new Nv(c);
              return (
                s.tenantId == null
                  ? (s._agentRecaptchaConfig = u)
                  : (s._tenantRecaptchaConfigs[s.tenantId] = u),
                a(u.siteKey)
              );
            }
          })
          .catch((c) => {
            o(c);
          });
      });
    }
    function i(s, a, o) {
      const c = window.grecaptcha;
      ph(c)
        ? c.enterprise.ready(() => {
            c.enterprise
              .execute(s, { action: t })
              .then((u) => {
                a(u);
              })
              .catch(() => {
                a(RE);
              });
          })
        : o(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((s, a) => {
      r(this.auth)
        .then((o) => {
          if (!n && ph(window.grecaptcha)) i(o, s, a);
          else {
            if (typeof window > "u") {
              a(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            Tv(jE + o)
              .then(() => {
                i(o, s, a);
              })
              .catch((c) => {
                a(c);
              });
          }
        })
        .catch((o) => {
          a(o);
        });
    });
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AE {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (s) =>
      new Promise((a, o) => {
        try {
          const c = t(s);
          a(c);
        } catch (c) {
          o(c);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LE {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new mh(this)),
      (this.idTokenSubscription = new mh(this)),
      (this.beforeStateQueue = new AE(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = cv),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = It(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Tr.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const a =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        o = i == null ? void 0 : i._redirectEventId,
        c = await this.tryRedirectSignIn(t);
      (!a || a === o) && c != null && c.user && ((i = c.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (a) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(a)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      M(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await Ga(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = dE();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    const n = t ? Gr(t) : null;
    return (
      n &&
        M(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && M(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(t) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(It(t));
    });
  }
  async initializeRecaptchaConfig() {
    const t = await _v(this, {
        clientType: "CLIENT_TYPE_WEB",
        version: "RECAPTCHA_ENTERPRISE",
      }),
      n = new Nv(t);
    this.tenantId == null
      ? (this._agentRecaptchaConfig = n)
      : (this._tenantRecaptchaConfigs[this.tenantId] = n),
      n.emailPasswordEnabled && new OE(this).verify();
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new os("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && It(t)) || this._popupRedirectResolver;
      M(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Tr.create(
          this,
          [It(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n),
      a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return (
      M(a, this, "internal-error"),
      a.then(() => s(this.currentUser)),
      typeof n == "function" ? t.addObserver(n, r, i) : t.addObserver(n)
    );
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      M(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = bv(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null &&
        n.error &&
        oE(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function Kr(e) {
  return Gr(e);
}
class mh {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = J2((n) => (this.observer = n)));
  }
  get next() {
    return (
      M(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function DE(e, t) {
  const n = iv(e, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Ha(s, t ?? {})) return i;
    xt(i, "already-initialized");
  }
  return n.initialize({ options: t });
}
function ME(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(It);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function UE(e, t, n) {
  const r = Kr(e);
  M(r._canInitEmulator, r, "emulator-config-failed"),
    M(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const i = !!(n != null && n.disableWarnings),
    s = Cv(t),
    { host: a, port: o } = FE(t),
    c = o === null ? "" : `:${o}`;
  (r.config.emulator = { url: `${s}//${a}${c}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: a,
      port: o,
      protocol: s.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    i || zE();
}
function Cv(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function FE(e) {
  const t = Cv(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: gh(r.substr(s.length + 1)) };
  } else {
    const [s, a] = r.split(":");
    return { host: s, port: gh(a) };
  }
}
function gh(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function zE() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Iv {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return Ct("not implemented");
  }
  _getIdTokenResponse(t) {
    return Ct("not implemented");
  }
  _linkToIdToken(t, n) {
    return Ct("not implemented");
  }
  _getReauthenticationResolver(t) {
    return Ct("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Cr(e, t) {
  return hv(e, "POST", "/v1/accounts:signInWithIdp", sd(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BE = "http://localhost";
class qn extends Iv {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new qn(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : xt("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      s = nd(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const a = new qn(r, i);
    return (
      (a.idToken = s.idToken || void 0),
      (a.accessToken = s.accessToken || void 0),
      (a.secret = s.secret),
      (a.nonce = s.nonce),
      (a.pendingToken = s.pendingToken || null),
      a
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Cr(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Cr(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Cr(t, n);
  }
  buildRequest() {
    const t = { requestUri: BE, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = ls(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ld {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fs extends ld {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xt extends fs {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return qn._fromParams({
      providerId: Xt.PROVIDER_ID,
      signInMethod: Xt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Xt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Xt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Xt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Xt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Xt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _t extends fs {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return qn._fromParams({
      providerId: _t.PROVIDER_ID,
      signInMethod: _t.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return _t.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return _t.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return _t.credential(n, r);
    } catch {
      return null;
    }
  }
}
_t.GOOGLE_SIGN_IN_METHOD = "google.com";
_t.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zt extends fs {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return qn._fromParams({
      providerId: Zt.PROVIDER_ID,
      signInMethod: Zt.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Zt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Zt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Zt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Zt.GITHUB_SIGN_IN_METHOD = "github.com";
Zt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class en extends fs {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return qn._fromParams({
      providerId: en.PROVIDER_ID,
      signInMethod: en.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return en.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return en.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return en.credential(n, r);
    } catch {
      return null;
    }
  }
}
en.TWITTER_SIGN_IN_METHOD = "twitter.com";
en.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $E(e, t) {
  return hv(e, "POST", "/v1/accounts:signUp", sd(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xn {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const s = await Hn._fromIdTokenResponse(t, r, i),
      a = vh(r);
    return new xn({
      user: s,
      providerId: a,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = vh(r);
    return new xn({
      user: t,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function vh(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function HE(e) {
  var t;
  const n = Kr(e);
  if (
    (await n._initializationPromise,
    !((t = n.currentUser) === null || t === void 0) && t.isAnonymous)
  )
    return new xn({
      user: n.currentUser,
      providerId: null,
      operationType: "signIn",
    });
  const r = await $E(n, { returnSecureToken: !0 }),
    i = await xn._fromIdTokenResponse(n, "signIn", r, !0);
  return await n._updateCurrentUser(i.user), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ka extends Cn {
  constructor(t, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Ka.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (s = t.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new Ka(t, n, r, i);
  }
}
function jv(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? Ka._fromErrorAndOperation(e, s, t, r)
      : s;
  });
}
async function WE(e, t, n = !1) {
  const r = await Gi(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return xn._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function VE(e, t, n = !1) {
  const { auth: r } = e,
    i = "reauthenticate";
  try {
    const s = await Gi(e, jv(r, i, t, e), n);
    M(s.idToken, r, "internal-error");
    const a = ad(s.idToken);
    M(a, r, "internal-error");
    const { sub: o } = a;
    return M(e.uid === o, r, "user-mismatch"), xn._forOperation(e, i, s);
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === "auth/user-not-found" &&
        xt(r, "user-mismatch"),
      s)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function GE(e, t, n = !1) {
  const r = "signIn",
    i = await jv(e, r, t),
    s = await xn._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(s.user)), s;
}
function KE(e, t, n, r) {
  return Gr(e).onIdTokenChanged(t, n, r);
}
function YE(e, t, n) {
  return Gr(e).beforeAuthStateChanged(t, n);
}
const Ya = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pv {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Ya, "1"),
          this.storage.removeItem(Ya),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function JE() {
  const e = je();
  return od(e) || No(e);
}
const qE = 1e3,
  QE = 10;
class Rv extends Pv {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = JE() && TE()),
      (this.fallbackToPolling = Sv()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((a, o, c) => {
        this.notifyListeners(a, c);
      });
      return;
    }
    const r = t.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const a = this.storage.getItem(r);
      if (t.newValue !== a)
        t.newValue !== null
          ? this.storage.setItem(r, t.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const i = () => {
        const a = this.storage.getItem(r);
        (!n && this.localCache[r] === a) || this.notifyListeners(r, a);
      },
      s = this.storage.getItem(r);
    NE() && s !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(i, QE)
      : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: n, newValue: r }),
            !0
          );
        });
      }, qE));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
Rv.type = "LOCAL";
const XE = Rv;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ov extends Pv {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Ov.type = "SESSION";
const Av = Ov;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ZE(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class To {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new To(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: s } = n.data,
      a = this.handlersMap[i];
    if (!(a != null && a.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const o = Array.from(a).map(async (u) => u(n.origin, s)),
      c = await ZE(o);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: c,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
To.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cd(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eS {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let s, a;
    return new Promise((o, c) => {
      const u = cd("", 20);
      i.port1.start();
      const d = setTimeout(() => {
        c(new Error("unsupported_event"));
      }, r);
      (a = {
        messageChannel: i,
        onMessage(f) {
          const m = f;
          if (m.data.eventId === u)
            switch (m.data.status) {
              case "ack":
                clearTimeout(d),
                  (s = setTimeout(() => {
                    c(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(s), o(m.data.response);
                break;
              default:
                clearTimeout(d),
                  clearTimeout(s),
                  c(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(a),
        i.port1.addEventListener("message", a.onMessage),
        this.target.postMessage({ eventType: t, eventId: u, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      a && this.removeMessageHandler(a);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wt() {
  return window;
}
function tS(e) {
  wt().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lv() {
  return (
    typeof wt().WorkerGlobalScope < "u" &&
    typeof wt().importScripts == "function"
  );
}
async function nS() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function rS() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    e === void 0
      ? void 0
      : e.controller) || null
  );
}
function iS() {
  return Lv() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Dv = "firebaseLocalStorageDb",
  sS = 1,
  Ja = "firebaseLocalStorage",
  Mv = "fbase_key";
class hs {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function Co(e, t) {
  return e.transaction([Ja], t ? "readwrite" : "readonly").objectStore(Ja);
}
function aS() {
  const e = indexedDB.deleteDatabase(Dv);
  return new hs(e).toPromise();
}
function Dc() {
  const e = indexedDB.open(Dv, sS);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(Ja, { keyPath: Mv });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(Ja)
          ? t(r)
          : (r.close(), await aS(), t(await Dc()));
      });
  });
}
async function yh(e, t, n) {
  const r = Co(e, !0).put({ [Mv]: t, value: n });
  return new hs(r).toPromise();
}
async function oS(e, t) {
  const n = Co(e, !1).get(t),
    r = await new hs(n).toPromise();
  return r === void 0 ? null : r.value;
}
function wh(e, t) {
  const n = Co(e, !0).delete(t);
  return new hs(n).toPromise();
}
const lS = 800,
  cS = 3;
class Uv {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Dc()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > cS) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Lv() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = To._getInstance(iS())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await nS()), !this.activeServiceWorker))
      return;
    this.sender = new eS(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        rS() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await Dc();
      return await yh(t, Ya, "1"), await wh(t, Ya), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => yh(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => oS(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => wh(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const s = Co(i, !1).getAll();
      return new hs(s).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    for (const { fbase_key: i, value: s } of t)
      r.add(i),
        JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
          (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), lS));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Uv.type = "LOCAL";
const uS = Uv;
new us(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fv(e, t) {
  return t
    ? It(t)
    : (M(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ud extends Iv {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Cr(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Cr(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Cr(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function dS(e) {
  return GE(e.auth, new ud(e), e.bypassAuthState);
}
function fS(e) {
  const { auth: t, user: n } = e;
  return M(n, t, "internal-error"), VE(n, new ud(e), e.bypassAuthState);
}
async function hS(e) {
  const { auth: t, user: n } = e;
  return M(n, t, "internal-error"), WE(n, new ud(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zv {
  constructor(t, n, r, i, s = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: a,
      type: o,
    } = t;
    if (a) {
      this.reject(a);
      return;
    }
    const c = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(o)(c));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return dS;
      case "linkViaPopup":
      case "linkViaRedirect":
        return hS;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return fS;
      default:
        xt(this.auth, "internal-error");
    }
  }
  resolve(t) {
    Dt(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    Dt(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const pS = new us(2e3, 1e4);
async function mS(e, t, n) {
  const r = Kr(e);
  lE(e, t, ld);
  const i = Fv(r, n);
  return new Un(r, "signInViaPopup", t, i).executeNotNull();
}
class Un extends zv {
  constructor(t, n, r, i, s) {
    super(t, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Un.currentPopupAction && Un.currentPopupAction.cancel(),
      (Un.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return M(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    Dt(this.filter.length === 1, "Popup operations only handle one event");
    const t = cd();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(yt(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(yt(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Un.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(yt(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, pS.get());
    };
    t();
  }
}
Un.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gS = "pendingRedirect",
  da = new Map();
class vS extends zv {
  constructor(t, n, r = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = da.get(this.auth._key());
    if (!t) {
      try {
        const r = (await yS(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      da.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        da.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function yS(e, t) {
  const n = kS(t),
    r = xS(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function wS(e, t) {
  da.set(e._key(), t);
}
function xS(e) {
  return It(e._redirectPersistence);
}
function kS(e) {
  return ua(gS, e.config.apiKey, e.name);
}
async function ES(e, t, n = !1) {
  const r = Kr(e),
    i = Fv(r, t),
    a = await new vS(r, i, n).execute();
  return (
    a &&
      !n &&
      (delete a.user._redirectEventId,
      await r._persistUserIfCurrent(a.user),
      await r._setRedirectUser(null, t)),
    a
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SS = 10 * 60 * 1e3;
class bS {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !_S(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !Bv(t)) {
      const i =
        ((r = t.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(yt(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= SS &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(xh(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(xh(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function xh(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function Bv({ type: e, error: t }) {
  return (
    e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function _S(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Bv(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function NS(e, t = {}) {
  return ds(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const TS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  CS = /^https?/;
async function IS(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await NS(e);
  for (const n of t)
    try {
      if (jS(n)) return;
    } catch {}
  xt(e, "unauthorized-domain");
}
function jS(e) {
  const t = Lc(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const a = new URL(e);
    return a.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && a.hostname === r;
  }
  if (!CS.test(n)) return !1;
  if (TS.test(e)) return r === e;
  const i = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PS = new us(3e4, 6e4);
function kh() {
  const e = wt().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function RS(e) {
  return new Promise((t, n) => {
    var r, i, s;
    function a() {
      kh(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            kh(), n(yt(e, "network-request-failed"));
          },
          timeout: PS.get(),
        });
    }
    if (
      !(
        (i = (r = wt().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((s = wt().gapi) === null || s === void 0) && s.load) a();
    else {
      const o = IE("iframefcb");
      return (
        (wt()[o] = () => {
          gapi.load ? a() : n(yt(e, "network-request-failed"));
        }),
        Tv(`https://apis.google.com/js/api.js?onload=${o}`).catch((c) => n(c))
      );
    }
  }).catch((t) => {
    throw ((fa = null), t);
  });
}
let fa = null;
function OS(e) {
  return (fa = fa || RS(e)), fa;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const AS = new us(5e3, 15e3),
  LS = "__/auth/iframe",
  DS = "emulator/auth/iframe",
  MS = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  US = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function FS(e) {
  const t = e.config;
  M(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? id(t, DS) : `https://${e.config.authDomain}/${LS}`,
    r = { apiKey: t.apiKey, appName: e.name, v: cs },
    i = US.get(e.config.apiHost);
  i && (r.eid = i);
  const s = e._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${ls(r).slice(1)}`;
}
async function zS(e) {
  const t = await OS(e),
    n = wt().gapi;
  return (
    M(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: FS(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: MS,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const a = yt(e, "network-request-failed"),
            o = wt().setTimeout(() => {
              s(a);
            }, AS.get());
          function c() {
            wt().clearTimeout(o), i(r);
          }
          r.ping(c).then(c, () => {
            s(a);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BS = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  $S = 500,
  HS = 600,
  WS = "_blank",
  VS = "http://localhost";
class Eh {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function GS(e, t, n, r = $S, i = HS) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let o = "";
  const c = Object.assign(Object.assign({}, BS), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: a,
    }),
    u = je().toLowerCase();
  n && (o = yv(u) ? WS : n), vv(u) && ((t = t || VS), (c.scrollbars = "yes"));
  const d = Object.entries(c).reduce((m, [w, g]) => `${m}${w}=${g},`, "");
  if (_E(u) && o !== "_self") return KS(t || "", o), new Eh(null);
  const f = window.open(t || "", o, d);
  M(f, e, "popup-blocked");
  try {
    f.focus();
  } catch {}
  return new Eh(f);
}
function KS(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const YS = "__/auth/handler",
  JS = "emulator/auth/handler",
  qS = encodeURIComponent("fac");
async function Sh(e, t, n, r, i, s) {
  M(e.config.authDomain, e, "auth-domain-config-required"),
    M(e.config.apiKey, e, "invalid-api-key");
  const a = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: cs,
    eventId: i,
  };
  if (t instanceof ld) {
    t.setDefaultLanguage(e.languageCode),
      (a.providerId = t.providerId || ""),
      Y2(t.getCustomParameters()) ||
        (a.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [d, f] of Object.entries(s || {})) a[d] = f;
  }
  if (t instanceof fs) {
    const d = t.getScopes().filter((f) => f !== "");
    d.length > 0 && (a.scopes = d.join(","));
  }
  e.tenantId && (a.tid = e.tenantId);
  const o = a;
  for (const d of Object.keys(o)) o[d] === void 0 && delete o[d];
  const c = await e._getAppCheckToken(),
    u = c ? `#${qS}=${encodeURIComponent(c)}` : "";
  return `${QS(e)}?${ls(o).slice(1)}${u}`;
}
function QS({ config: e }) {
  return e.emulator ? id(e, JS) : `https://${e.authDomain}/${YS}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wl = "webStorageSupport";
class XS {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Av),
      (this._completeRedirectFn = ES),
      (this._overrideRedirectResult = wS);
  }
  async _openPopup(t, n, r, i) {
    var s;
    Dt(
      (s = this.eventManagers[t._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const a = await Sh(t, n, r, Lc(), i);
    return GS(t, a, cd());
  }
  async _openRedirect(t, n, r, i) {
    await this._originValidation(t);
    const s = await Sh(t, n, r, Lc(), i);
    return tS(s), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (Dt(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await zS(t),
      r = new bS(t);
    return (
      n.register(
        "authEvent",
        (i) => (
          M(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      wl,
      { type: wl },
      (i) => {
        var s;
        const a =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[wl];
        a !== void 0 && n(!!a), xt(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = IS(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Sv() || od() || No();
  }
}
const ZS = XS;
var bh = "@firebase/auth",
  _h = "1.0.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eb {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    M(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tb(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function nb(e) {
  Wi(
    new Ur(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          i = t.getProvider("heartbeat"),
          s = t.getProvider("app-check-internal"),
          { apiKey: a, authDomain: o } = r.options;
        M(a && !a.includes(":"), "invalid-api-key", { appName: r.name });
        const c = {
            apiKey: a,
            authDomain: o,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: bv(e),
          },
          u = new LE(r, i, s, c);
        return ME(u, n), u;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    Wi(
      new Ur(
        "auth-internal",
        (t) => {
          const n = Kr(t.getProvider("auth").getImmediate());
          return ((r) => new eb(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Nr(bh, _h, tb(e)),
    Nr(bh, _h, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rb = 5 * 60,
  ib = ev("authIdTokenMaxAge") || rb;
let Nh = null;
const sb = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > ib) return;
  const i = n == null ? void 0 : n.token;
  Nh !== i &&
    ((Nh = i),
    await fetch(e, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function ab(e = Yk()) {
  const t = iv(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = DE(e, { popupRedirectResolver: ZS, persistence: [uS, XE, Av] }),
    r = ev("authTokenSyncURL");
  if (r) {
    const s = sb(r);
    YE(n, s, () => s(n.currentUser)), KE(n, (a) => s(a));
  }
  const i = M2("auth");
  return i && UE(n, `http://${i}`), n;
}
nb("Browser");
const ob = {
    apiKey: "AIzaSyBRV0CtPET3goOoSrJ_ZfE1cgc_NxYJG-s",
    authDomain: "tripappfb.firebaseapp.com",
    databaseURL:
      "https://tripappfb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tripappfb",
    storageBucket: "tripappfb.appspot.com",
    messagingSenderId: "1074735898979",
    appId: "1:1074735898979:web:085c9803760491b5893356",
    measurementId: "G-PT37MZLFG1",
  },
  lb = sv(ob),
  Th = ab(lb),
  cb = new _t();
function $v(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = $v(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function sn() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = $v(e)) && (r && (r += " "), (r += t));
  return r;
}
const xi = (e) => typeof e == "number" && !isNaN(e),
  Qn = (e) => typeof e == "string",
  Ue = (e) => typeof e == "function",
  ha = (e) => (Qn(e) || Ue(e) ? e : null),
  xl = (e) => x.isValidElement(e) || Qn(e) || Ue(e) || xi(e);
function ub(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function Io(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: s = 300,
  } = e;
  return function (a) {
    let {
      children: o,
      position: c,
      preventExitTransition: u,
      done: d,
      nodeRef: f,
      isIn: m,
    } = a;
    const w = r ? `${t}--${c}` : t,
      g = r ? `${n}--${c}` : n,
      v = x.useRef(0);
    return (
      x.useLayoutEffect(() => {
        const k = f.current,
          p = w.split(" "),
          h = (y) => {
            y.target === f.current &&
              (k.dispatchEvent(new Event("d")),
              k.removeEventListener("animationend", h),
              k.removeEventListener("animationcancel", h),
              v.current === 0 &&
                y.type !== "animationcancel" &&
                k.classList.remove(...p));
          };
        k.classList.add(...p),
          k.addEventListener("animationend", h),
          k.addEventListener("animationcancel", h);
      }, []),
      x.useEffect(() => {
        const k = f.current,
          p = () => {
            k.removeEventListener("animationend", p), i ? ub(k, d, s) : d();
          };
        m ||
          (u
            ? p()
            : ((v.current = 1),
              (k.className += ` ${g}`),
              k.addEventListener("animationend", p)));
      }, [m]),
      V.createElement(V.Fragment, null, o)
    );
  };
}
function Ch(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const Je = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      );
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((r) => r !== t);
        return this.list.set(e, n), this;
      }
      return this.list.delete(e), this;
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e);
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(n);
        });
    },
  },
  Ms = (e) => {
    let { theme: t, type: n, ...r } = e;
    return V.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...r,
    });
  },
  kl = {
    info: function (e) {
      return V.createElement(
        Ms,
        { ...e },
        V.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return V.createElement(
        Ms,
        { ...e },
        V.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return V.createElement(
        Ms,
        { ...e },
        V.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return V.createElement(
        Ms,
        { ...e },
        V.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return V.createElement("div", { className: "Toastify__spinner" });
    },
  };
function db(e) {
  const [, t] = x.useReducer((w) => w + 1, 0),
    [n, r] = x.useState([]),
    i = x.useRef(null),
    s = x.useRef(new Map()).current,
    a = (w) => n.indexOf(w) !== -1,
    o = x.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: a,
      getToast: (w) => s.get(w),
    }).current;
  function c(w) {
    let { containerId: g } = w;
    const { limit: v } = o.props;
    !v ||
      (g && o.containerId !== g) ||
      ((o.count -= o.queue.length), (o.queue = []));
  }
  function u(w) {
    r((g) => (w == null ? [] : g.filter((v) => v !== w)));
  }
  function d() {
    const { toastContent: w, toastProps: g, staleId: v } = o.queue.shift();
    m(w, g, v);
  }
  function f(w, g) {
    let { delay: v, staleId: k, ...p } = g;
    if (
      !xl(w) ||
      (function (ce) {
        return (
          !i.current ||
          (o.props.enableMultiContainer &&
            ce.containerId !== o.props.containerId) ||
          (s.has(ce.toastId) && ce.updateId == null)
        );
      })(p)
    )
      return;
    const { toastId: h, updateId: y, data: E } = p,
      { props: S } = o,
      C = () => u(h),
      T = y == null;
    T && o.count++;
    const I = {
      ...S,
      style: S.toastStyle,
      key: o.toastKey++,
      ...Object.fromEntries(
        Object.entries(p).filter((ce) => {
          let [pe, A] = ce;
          return A != null;
        })
      ),
      toastId: h,
      updateId: y,
      data: E,
      closeToast: C,
      isIn: !1,
      className: ha(p.className || S.toastClassName),
      bodyClassName: ha(p.bodyClassName || S.bodyClassName),
      progressClassName: ha(p.progressClassName || S.progressClassName),
      autoClose:
        !p.isLoading &&
        ((D = p.autoClose),
        (L = S.autoClose),
        D === !1 || (xi(D) && D > 0) ? D : L),
      deleteToast() {
        const ce = Ch(s.get(h), "removed");
        s.delete(h), Je.emit(4, ce);
        const pe = o.queue.length;
        if (
          ((o.count = h == null ? o.count - o.displayedToast : o.count - 1),
          o.count < 0 && (o.count = 0),
          pe > 0)
        ) {
          const A = h == null ? o.props.limit : 1;
          if (pe === 1 || A === 1) o.displayedToast++, d();
          else {
            const q = A > pe ? pe : A;
            o.displayedToast = q;
            for (let F = 0; F < q; F++) d();
          }
        } else t();
      },
    };
    var D, L;
    (I.iconOut = (function (ce) {
      let { theme: pe, type: A, isLoading: q, icon: F } = ce,
        z = null;
      const N = { theme: pe, type: A };
      return (
        F === !1 ||
          (Ue(F)
            ? (z = F(N))
            : x.isValidElement(F)
            ? (z = x.cloneElement(F, N))
            : Qn(F) || xi(F)
            ? (z = F)
            : q
            ? (z = kl.spinner())
            : ((O) => O in kl)(A) && (z = kl[A](N))),
        z
      );
    })(I)),
      Ue(p.onOpen) && (I.onOpen = p.onOpen),
      Ue(p.onClose) && (I.onClose = p.onClose),
      (I.closeButton = S.closeButton),
      p.closeButton === !1 || xl(p.closeButton)
        ? (I.closeButton = p.closeButton)
        : p.closeButton === !0 &&
          (I.closeButton = !xl(S.closeButton) || S.closeButton);
    let Z = w;
    x.isValidElement(w) && !Qn(w.type)
      ? (Z = x.cloneElement(w, { closeToast: C, toastProps: I, data: E }))
      : Ue(w) && (Z = w({ closeToast: C, toastProps: I, data: E })),
      S.limit && S.limit > 0 && o.count > S.limit && T
        ? o.queue.push({ toastContent: Z, toastProps: I, staleId: k })
        : xi(v)
        ? setTimeout(() => {
            m(Z, I, k);
          }, v)
        : m(Z, I, k);
  }
  function m(w, g, v) {
    const { toastId: k } = g;
    v && s.delete(v);
    const p = { content: w, props: g };
    s.set(k, p),
      r((h) => [...h, k].filter((y) => y !== v)),
      Je.emit(4, Ch(p, p.props.updateId == null ? "added" : "updated"));
  }
  return (
    x.useEffect(
      () => (
        (o.containerId = e.containerId),
        Je.cancelEmit(3)
          .on(0, f)
          .on(1, (w) => i.current && u(w))
          .on(5, c)
          .emit(2, o),
        () => {
          s.clear(), Je.emit(3, o);
        }
      ),
      []
    ),
    x.useEffect(() => {
      (o.props = e), (o.isToastActive = a), (o.displayedToast = n.length);
    }),
    {
      getToastToRender: function (w) {
        const g = new Map(),
          v = Array.from(s.values());
        return (
          e.newestOnTop && v.reverse(),
          v.forEach((k) => {
            const { position: p } = k.props;
            g.has(p) || g.set(p, []), g.get(p).push(k);
          }),
          Array.from(g, (k) => w(k[0], k[1]))
        );
      },
      containerRef: i,
      isToastActive: a,
    }
  );
}
function Ih(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX;
}
function jh(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY;
}
function fb(e) {
  const [t, n] = x.useState(!1),
    [r, i] = x.useState(!1),
    s = x.useRef(null),
    a = x.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    o = x.useRef(e),
    {
      autoClose: c,
      pauseOnHover: u,
      closeToast: d,
      onClick: f,
      closeOnClick: m,
    } = e;
  function w(E) {
    if (e.draggable) {
      E.nativeEvent.type === "touchstart" && E.nativeEvent.preventDefault(),
        (a.didMove = !1),
        document.addEventListener("mousemove", p),
        document.addEventListener("mouseup", h),
        document.addEventListener("touchmove", p),
        document.addEventListener("touchend", h);
      const S = s.current;
      (a.canCloseOnClick = !0),
        (a.canDrag = !0),
        (a.boundingRect = S.getBoundingClientRect()),
        (S.style.transition = ""),
        (a.x = Ih(E.nativeEvent)),
        (a.y = jh(E.nativeEvent)),
        e.draggableDirection === "x"
          ? ((a.start = a.x),
            (a.removalDistance = S.offsetWidth * (e.draggablePercent / 100)))
          : ((a.start = a.y),
            (a.removalDistance =
              S.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)));
    }
  }
  function g(E) {
    if (a.boundingRect) {
      const { top: S, bottom: C, left: T, right: I } = a.boundingRect;
      E.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      a.x >= T &&
      a.x <= I &&
      a.y >= S &&
      a.y <= C
        ? k()
        : v();
    }
  }
  function v() {
    n(!0);
  }
  function k() {
    n(!1);
  }
  function p(E) {
    const S = s.current;
    a.canDrag &&
      S &&
      ((a.didMove = !0),
      t && k(),
      (a.x = Ih(E)),
      (a.y = jh(E)),
      (a.delta = e.draggableDirection === "x" ? a.x - a.start : a.y - a.start),
      a.start !== a.x && (a.canCloseOnClick = !1),
      (S.style.transform = `translate${e.draggableDirection}(${a.delta}px)`),
      (S.style.opacity = "" + (1 - Math.abs(a.delta / a.removalDistance))));
  }
  function h() {
    document.removeEventListener("mousemove", p),
      document.removeEventListener("mouseup", h),
      document.removeEventListener("touchmove", p),
      document.removeEventListener("touchend", h);
    const E = s.current;
    if (a.canDrag && a.didMove && E) {
      if (((a.canDrag = !1), Math.abs(a.delta) > a.removalDistance))
        return i(!0), void e.closeToast();
      (E.style.transition = "transform 0.2s, opacity 0.2s"),
        (E.style.transform = `translate${e.draggableDirection}(0)`),
        (E.style.opacity = "1");
    }
  }
  x.useEffect(() => {
    o.current = e;
  }),
    x.useEffect(
      () => (
        s.current && s.current.addEventListener("d", v, { once: !0 }),
        Ue(e.onOpen) &&
          e.onOpen(x.isValidElement(e.children) && e.children.props),
        () => {
          const E = o.current;
          Ue(E.onClose) &&
            E.onClose(x.isValidElement(E.children) && E.children.props);
        }
      ),
      []
    ),
    x.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || k(),
          window.addEventListener("focus", v),
          window.addEventListener("blur", k)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener("focus", v),
            window.removeEventListener("blur", k));
        }
      ),
      [e.pauseOnFocusLoss]
    );
  const y = { onMouseDown: w, onTouchStart: w, onMouseUp: g, onTouchEnd: g };
  return (
    c && u && ((y.onMouseEnter = k), (y.onMouseLeave = v)),
    m &&
      (y.onClick = (E) => {
        f && f(E), a.canCloseOnClick && d();
      }),
    {
      playToast: v,
      pauseToast: k,
      isRunning: t,
      preventExitTransition: r,
      toastRef: s,
      eventHandlers: y,
    }
  );
}
function Hv(e) {
  let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
  return V.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: "button",
      onClick: (i) => {
        i.stopPropagation(), t(i);
      },
      "aria-label": r,
    },
    V.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      V.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function hb(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = "default",
    hide: s,
    className: a,
    style: o,
    controlledProgress: c,
    progress: u,
    rtl: d,
    isIn: f,
    theme: m,
  } = e;
  const w = s || (c && u === 0),
    g = {
      ...o,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
      opacity: w ? 0 : 1,
    };
  c && (g.transform = `scaleX(${u})`);
  const v = sn(
      "Toastify__progress-bar",
      c
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${m}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": d }
    ),
    k = Ue(a) ? a({ rtl: d, type: i, defaultClassName: v }) : sn(v, a);
  return V.createElement("div", {
    role: "progressbar",
    "aria-hidden": w ? "true" : "false",
    "aria-label": "notification timer",
    className: k,
    style: g,
    [c && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
      c && u < 1
        ? null
        : () => {
            f && r();
          },
  });
}
const pb = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
      } = fb(e),
      {
        closeButton: s,
        children: a,
        autoClose: o,
        onClick: c,
        type: u,
        hideProgressBar: d,
        closeToast: f,
        transition: m,
        position: w,
        className: g,
        style: v,
        bodyClassName: k,
        bodyStyle: p,
        progressClassName: h,
        progressStyle: y,
        updateId: E,
        role: S,
        progress: C,
        rtl: T,
        toastId: I,
        deleteToast: D,
        isIn: L,
        isLoading: Z,
        iconOut: ce,
        closeOnClick: pe,
        theme: A,
      } = e,
      q = sn(
        "Toastify__toast",
        `Toastify__toast-theme--${A}`,
        `Toastify__toast--${u}`,
        { "Toastify__toast--rtl": T },
        { "Toastify__toast--close-on-click": pe }
      ),
      F = Ue(g)
        ? g({ rtl: T, position: w, type: u, defaultClassName: q })
        : sn(q, g),
      z = !!C || !o,
      N = { closeToast: f, type: u, theme: A };
    let O = null;
    return (
      s === !1 ||
        (O = Ue(s) ? s(N) : x.isValidElement(s) ? x.cloneElement(s, N) : Hv(N)),
      V.createElement(
        m,
        { isIn: L, done: D, position: w, preventExitTransition: n, nodeRef: r },
        V.createElement(
          "div",
          { id: I, onClick: c, className: F, ...i, style: v, ref: r },
          V.createElement(
            "div",
            {
              ...(L && { role: S }),
              className: Ue(k) ? k({ type: u }) : sn("Toastify__toast-body", k),
              style: p,
            },
            ce != null &&
              V.createElement(
                "div",
                {
                  className: sn("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !Z,
                  }),
                },
                ce
              ),
            V.createElement("div", null, a)
          ),
          O,
          V.createElement(hb, {
            ...(E && !z ? { key: `pb-${E}` } : {}),
            rtl: T,
            theme: A,
            delay: o,
            isRunning: t,
            isIn: L,
            closeToast: f,
            hide: d,
            type: u,
            style: y,
            className: h,
            controlledProgress: z,
            progress: C || 0,
          })
        )
      )
    );
  },
  jo = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  mb = Io(jo("bounce", !0));
Io(jo("slide", !0));
Io(jo("zoom"));
Io(jo("flip"));
const Xn = x.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: i } = db(e),
    { className: s, style: a, rtl: o, containerId: c } = e;
  function u(d) {
    const f = sn(
      "Toastify__toast-container",
      `Toastify__toast-container--${d}`,
      { "Toastify__toast-container--rtl": o }
    );
    return Ue(s)
      ? s({ position: d, rtl: o, defaultClassName: f })
      : sn(f, ha(s));
  }
  return (
    x.useEffect(() => {
      t && (t.current = r.current);
    }, []),
    V.createElement(
      "div",
      { ref: r, className: "Toastify", id: c },
      n((d, f) => {
        const m = f.length ? { ...a } : { ...a, pointerEvents: "none" };
        return V.createElement(
          "div",
          { className: u(d), style: m, key: `container-${d}` },
          f.map((w, g) => {
            let { content: v, props: k } = w;
            return V.createElement(
              pb,
              {
                ...k,
                isIn: i(k.toastId),
                style: { ...k.style, "--nth": g + 1, "--len": f.length },
                key: `toast-${k.key}`,
              },
              v
            );
          })
        );
      })
    )
  );
});
(Xn.displayName = "ToastContainer"),
  (Xn.defaultProps = {
    position: "top-right",
    transition: mb,
    autoClose: 5e3,
    closeButton: Hv,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  });
let El,
  An = new Map(),
  li = [],
  gb = 1;
function Wv() {
  return "" + gb++;
}
function vb(e) {
  return e && (Qn(e.toastId) || xi(e.toastId)) ? e.toastId : Wv();
}
function ki(e, t) {
  return (
    An.size > 0 ? Je.emit(0, e, t) : li.push({ content: e, options: t }),
    t.toastId
  );
}
function qa(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: vb(t) };
}
function Us(e) {
  return (t, n) => ki(t, qa(e, n));
}
function Y(e, t) {
  return ki(e, qa("default", t));
}
(Y.loading = (e, t) =>
  ki(
    e,
    qa("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (Y.promise = function (e, t, n) {
    let r,
      { pending: i, error: s, success: a } = t;
    i && (r = Qn(i) ? Y.loading(i, n) : Y.loading(i.render, { ...n, ...i }));
    const o = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      c = (d, f, m) => {
        if (f == null) return void Y.dismiss(r);
        const w = { type: d, ...o, ...n, data: m },
          g = Qn(f) ? { render: f } : f;
        return r ? Y.update(r, { ...w, ...g }) : Y(g.render, { ...w, ...g }), m;
      },
      u = Ue(e) ? e() : e;
    return u.then((d) => c("success", a, d)).catch((d) => c("error", s, d)), u;
  }),
  (Y.success = Us("success")),
  (Y.info = Us("info")),
  (Y.error = Us("error")),
  (Y.warning = Us("warning")),
  (Y.warn = Y.warning),
  (Y.dark = (e, t) => ki(e, qa("default", { theme: "dark", ...t }))),
  (Y.dismiss = (e) => {
    An.size > 0
      ? Je.emit(1, e)
      : (li = li.filter((t) => e != null && t.options.toastId !== e));
  }),
  (Y.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), Je.emit(5, e);
  }),
  (Y.isActive = (e) => {
    let t = !1;
    return (
      An.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0);
      }),
      t
    );
  }),
  (Y.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (r, i) {
          let { containerId: s } = i;
          const a = An.get(s || El);
          return a && a.getToast(r);
        })(e, t);
        if (n) {
          const { props: r, content: i } = n,
            s = {
              delay: 100,
              ...r,
              ...t,
              toastId: t.toastId || e,
              updateId: Wv(),
            };
          s.toastId !== e && (s.staleId = e);
          const a = s.render || i;
          delete s.render, ki(a, s);
        }
      }, 0);
  }),
  (Y.done = (e) => {
    Y.update(e, { progress: 1 });
  }),
  (Y.onChange = (e) => (
    Je.on(4, e),
    () => {
      Je.off(4, e);
    }
  )),
  (Y.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  }),
  (Y.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
  }),
  Je.on(2, (e) => {
    (El = e.containerId || e),
      An.set(El, e),
      li.forEach((t) => {
        Je.emit(0, t.content, t.options);
      }),
      (li = []);
  }).on(3, (e) => {
    An.delete(e.containerId || e), An.size === 0 && Je.off(0).off(1).off(5);
  });
const yb = () => {
    const e = () =>
        Y.info("Feature Not supported yet.", {
          position: "top-center",
          autoClose: 3e3,
          hideProgressBar: !1,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !0,
          progress: void 0,
          theme: "dark",
        }),
      { isLoggedIn: t, setIsLoggedIn: n, authUser: r, setAuthUser: i } = Tn(),
      s = x.useRef(),
      a = () => {
        s.current.click();
      },
      o = async () => {
        if (!t)
          try {
            const u = await mS(Th, cb);
            n(!0),
              window.sessionStorage.setItem("authUser", JSON.stringify(u.user)),
              i(JSON.parse(window.sessionStorage.getItem("authUser"))),
              a();
          } catch (u) {
            console.log(u);
          }
      },
      c = async () => {
        if (!t)
          try {
            const u = await HE(Th);
            n(!0),
              Y.success("Logged In as Guest Successfully!", {
                position: "top-center",
                autoClose: 3e3,
                hideProgressBar: !1,
                closeOnClick: !0,
                pauseOnHover: !0,
                draggable: !0,
                progress: void 0,
                theme: "light",
              }),
              window.sessionStorage.setItem("authUser", JSON.stringify(u.user)),
              i(JSON.parse(window.sessionStorage.getItem("authUser"))),
              a();
          } catch (u) {
            console.log(u);
          }
      };
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx(Xn, {}),
        l.jsx("div", {
          style: { background: "rgba(0,0,0,0.5)" },
          className: "modal fade element",
          id: "SignupSigninModal",
          tabIndex: "-1",
          role: "dialog",
          "aria-labelledby": "SignupSigninModalLabel",
          "aria-hidden": "true",
          children: l.jsx("div", {
            className: "modal-dialog modal-dialog-centered",
            role: "document",
            children: l.jsxs("div", {
              className: "modal-content",
              children: [
                l.jsxs("div", {
                  className: "modal-header",
                  children: [
                    l.jsx("h4", {
                      className: "modal-title w-100 text-center",
                      id: "exampleModalLongTitle",
                      children: "Login/SignUp",
                    }),
                    l.jsx("button", {
                      type: "button",
                      ref: s,
                      className: "close",
                      "data-dismiss": "modal",
                      "aria-label": "Close",
                      children: l.jsx("i", {
                        class: "fa-solid fa-circle-xmark",
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "modal-body signin_modal",
                  children: [
                    l.jsx("div", {
                      className: "social-login",
                      children: l.jsx("lottie-player", {
                        src: "https://assets8.lottiefiles.com/packages/lf20_nc1bp7st.json",
                        background: "transparent",
                        speed: "1",
                        style: { width: "250px", height: "250px" },
                        loop: !0,
                        autoplay: !0,
                      }),
                    }),
                    l.jsxs("div", {
                      className: "row",
                      children: [
                        l.jsx("div", {
                          className: "col-md-12 mt-3",
                          children: l.jsxs("a", {
                            onClick: c,
                            className:
                              "btn-lg btn-guest rounded-pill btn-block fs-6",
                            href: "#",
                            id: "btnGuest",
                            children: [
                              l.jsx("img", { src: I2, className: "mb-1 me-2" }),
                              "Continue as Guest",
                            ],
                          }),
                        }),
                        l.jsx("p", {
                          className: "loginOR mt-3",
                          children: "OR",
                        }),
                        l.jsx("p", {
                          className: "text-center",
                          children: "For Better Experience, Login/SignUp",
                        }),
                        l.jsx("div", {
                          className: "col-md-12",
                          children: l.jsxs("a", {
                            onClick: o,
                            className:
                              "btn-lg btn-google rounded-pill btn-block fs-6",
                            href: "#",
                            children: [
                              l.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                x: "0px",
                                y: "0px",
                                width: "27",
                                height: "27",
                                viewBox: "0 0 48 48",
                                className: "mb-1 me-2",
                                children: [
                                  l.jsx("path", {
                                    fill: "#FFC107",
                                    d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z",
                                  }),
                                  l.jsx("path", {
                                    fill: "#FF3D00",
                                    d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z",
                                  }),
                                  l.jsx("path", {
                                    fill: "#4CAF50",
                                    d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z",
                                  }),
                                  l.jsx("path", {
                                    fill: "#1976D2",
                                    d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z",
                                  }),
                                ],
                              }),
                              "Sign in using Google",
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-md-12 mt-3",
                          children: l.jsxs("a", {
                            onClick: e,
                            className:
                              "btn-lg btn-apple rounded-pill btn-block fs-6 my-3",
                            href: "#",
                            children: [
                              l.jsx("i", {
                                class: "fa-brands fa-apple fa-2xl",
                              }),
                              l.jsx("path", {
                                d: "M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z",
                              }),
                              "Sign in using Apple",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  wb = () => {
    const [e, t] = x.useState(0);
    x.useEffect(() => {
      const r = () => {
        t(window.pageYOffset);
      };
      return (
        window.addEventListener("scroll", r),
        () => {
          window.removeEventListener("scroll", r);
        }
      );
    }, []);
    const n = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return l.jsx(l.Fragment, {
      children: l.jsx("a", {
        href: "#",
        className:
          "btn btn-lg btn-outline-primary btn-lg-square shadow-none back-to-top",
        style: { display: e >= 100 ? "block" : "none" },
        onClick: n,
        children: l.jsx("i", { className: "bi bi-arrow-up" }),
      }),
    });
  };
function Ph(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ph(Object(n), !0).forEach(function (r) {
          xe(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ph(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Qa(e) {
  "@babel/helpers - typeof";
  return (
    (Qa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qa(e)
  );
}
function xb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function kb(e, t, n) {
  return (
    t && Rh(e.prototype, t),
    n && Rh(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function xe(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function dd(e, t) {
  return Sb(e) || _b(e, t) || Vv(e, t) || Tb();
}
function ps(e) {
  return Eb(e) || bb(e) || Vv(e) || Nb();
}
function Eb(e) {
  if (Array.isArray(e)) return Mc(e);
}
function Sb(e) {
  if (Array.isArray(e)) return e;
}
function bb(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function _b(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      s = !1,
      a,
      o;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (c) {
      (s = !0), (o = c);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (s) throw o;
      }
    }
    return r;
  }
}
function Vv(e, t) {
  if (e) {
    if (typeof e == "string") return Mc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Mc(e, t);
  }
}
function Mc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Nb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Oh = function () {},
  fd = {},
  Gv = {},
  Kv = null,
  Yv = { mark: Oh, measure: Oh };
try {
  typeof window < "u" && (fd = window),
    typeof document < "u" && (Gv = document),
    typeof MutationObserver < "u" && (Kv = MutationObserver),
    typeof performance < "u" && (Yv = performance);
} catch {}
var Cb = fd.navigator || {},
  Ah = Cb.userAgent,
  Lh = Ah === void 0 ? "" : Ah,
  kn = fd,
  ie = Gv,
  Dh = Kv,
  Fs = Yv;
kn.document;
var Bt =
    !!ie.documentElement &&
    !!ie.head &&
    typeof ie.addEventListener == "function" &&
    typeof ie.createElement == "function",
  Jv = ~Lh.indexOf("MSIE") || ~Lh.indexOf("Trident/"),
  zs,
  Bs,
  $s,
  Hs,
  Ws,
  Mt = "___FONT_AWESOME___",
  Uc = 16,
  qv = "fa",
  Qv = "svg-inline--fa",
  Zn = "data-fa-i2svg",
  Fc = "data-fa-pseudo-element",
  Ib = "data-fa-pseudo-element-pending",
  hd = "data-prefix",
  pd = "data-icon",
  Mh = "fontawesome-i2svg",
  jb = "async",
  Pb = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  Xv = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  ne = "classic",
  de = "sharp",
  md = [ne, de];
function ms(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[ne];
    },
  });
}
var Yi = ms(
    ((zs = {}),
    xe(zs, ne, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit",
    }),
    xe(zs, de, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
    }),
    zs)
  ),
  Ji = ms(
    ((Bs = {}),
    xe(Bs, ne, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    xe(Bs, de, { solid: "fass", regular: "fasr", light: "fasl" }),
    Bs)
  ),
  qi = ms(
    (($s = {}),
    xe($s, ne, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    xe($s, de, { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light" }),
    $s)
  ),
  Rb = ms(
    ((Hs = {}),
    xe(Hs, ne, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    xe(Hs, de, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
    }),
    Hs)
  ),
  Ob = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
  Zv = "fa-layers-text",
  Ab =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Lb = ms(
    ((Ws = {}),
    xe(Ws, ne, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    xe(Ws, de, { 900: "fass", 400: "fasr", 300: "fasl" }),
    Ws)
  ),
  e0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Db = e0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Mb = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Fn = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Qi = new Set();
Object.keys(Ji[ne]).map(Qi.add.bind(Qi));
Object.keys(Ji[de]).map(Qi.add.bind(Qi));
var Ub = []
    .concat(md, ps(Qi), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      Fn.GROUP,
      Fn.SWAP_OPACITY,
      Fn.PRIMARY,
      Fn.SECONDARY,
    ])
    .concat(
      e0.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      Db.map(function (e) {
        return "w-".concat(e);
      })
    ),
  Ei = kn.FontAwesomeConfig || {};
function Fb(e) {
  var t = ie.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function zb(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (ie && typeof ie.querySelector == "function") {
  var Bb = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  Bb.forEach(function (e) {
    var t = dd(e, 2),
      n = t[0],
      r = t[1],
      i = zb(Fb(n));
    i != null && (Ei[r] = i);
  });
}
var t0 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: qv,
  replacementClass: Qv,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Ei.familyPrefix && (Ei.cssPrefix = Ei.familyPrefix);
var Fr = j(j({}, t0), Ei);
Fr.autoReplaceSvg || (Fr.observeMutations = !1);
var R = {};
Object.keys(t0).forEach(function (e) {
  Object.defineProperty(R, e, {
    enumerable: !0,
    set: function (n) {
      (Fr[e] = n),
        Si.forEach(function (r) {
          return r(R);
        });
    },
    get: function () {
      return Fr[e];
    },
  });
});
Object.defineProperty(R, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (Fr.cssPrefix = t),
      Si.forEach(function (n) {
        return n(R);
      });
  },
  get: function () {
    return Fr.cssPrefix;
  },
});
kn.FontAwesomeConfig = R;
var Si = [];
function $b(e) {
  return (
    Si.push(e),
    function () {
      Si.splice(Si.indexOf(e), 1);
    }
  );
}
var Vt = Uc,
  mt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function Hb(e) {
  if (!(!e || !Bt)) {
    var t = ie.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = ie.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var s = n[i],
        a = (s.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(a) > -1 && (r = s);
    }
    return ie.head.insertBefore(t, r), e;
  }
}
var Wb = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Xi() {
  for (var e = 12, t = ""; e-- > 0; ) t += Wb[(Math.random() * 62) | 0];
  return t;
}
function Yr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function gd(e) {
  return e.classList
    ? Yr(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function n0(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Vb(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(n0(e[n]), '" ');
    }, "")
    .trim();
}
function Po(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function vd(e) {
  return (
    e.size !== mt.size ||
    e.x !== mt.x ||
    e.y !== mt.y ||
    e.rotate !== mt.rotate ||
    e.flipX ||
    e.flipY
  );
}
function Gb(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: "translate(".concat(n / 2, " 256)") },
    s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    a = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    o = "rotate(".concat(t.rotate, " 0 0)"),
    c = { transform: "".concat(s, " ").concat(a, " ").concat(o) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: c, path: u };
}
function Kb(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Uc : n,
    i = e.height,
    s = i === void 0 ? Uc : i,
    a = e.startCentered,
    o = a === void 0 ? !1 : a,
    c = "";
  return (
    o && Jv
      ? (c += "translate("
          .concat(t.x / Vt - r / 2, "em, ")
          .concat(t.y / Vt - s / 2, "em) "))
      : o
      ? (c += "translate(calc(-50% + "
          .concat(t.x / Vt, "em), calc(-50% + ")
          .concat(t.y / Vt, "em)) "))
      : (c += "translate(".concat(t.x / Vt, "em, ").concat(t.y / Vt, "em) ")),
    (c += "scale("
      .concat((t.size / Vt) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Vt) * (t.flipY ? -1 : 1), ") ")),
    (c += "rotate(".concat(t.rotate, "deg) ")),
    c
  );
}
var Yb = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function r0() {
  var e = qv,
    t = Qv,
    n = R.cssPrefix,
    r = R.replacementClass,
    i = Yb;
  if (n !== e || r !== t) {
    var s = new RegExp("\\.".concat(e, "\\-"), "g"),
      a = new RegExp("\\--".concat(e, "\\-"), "g"),
      o = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(s, ".".concat(n, "-"))
      .replace(a, "--".concat(n, "-"))
      .replace(o, ".".concat(r));
  }
  return i;
}
var Uh = !1;
function Sl() {
  R.autoAddCss && !Uh && (Hb(r0()), (Uh = !0));
}
var Jb = {
    mixout: function () {
      return { dom: { css: r0, insertCss: Sl } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Sl();
        },
        beforeI2svg: function () {
          Sl();
        },
      };
    },
  },
  Ut = kn || {};
Ut[Mt] || (Ut[Mt] = {});
Ut[Mt].styles || (Ut[Mt].styles = {});
Ut[Mt].hooks || (Ut[Mt].hooks = {});
Ut[Mt].shims || (Ut[Mt].shims = []);
var ot = Ut[Mt],
  i0 = [],
  qb = function e() {
    ie.removeEventListener("DOMContentLoaded", e),
      (Xa = 1),
      i0.map(function (t) {
        return t();
      });
  },
  Xa = !1;
Bt &&
  ((Xa = (ie.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    ie.readyState
  )),
  Xa || ie.addEventListener("DOMContentLoaded", qb));
function Qb(e) {
  Bt && (Xa ? setTimeout(e, 0) : i0.push(e));
}
function gs(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    s = i === void 0 ? [] : i;
  return typeof e == "string"
    ? n0(e)
    : "<"
        .concat(t, " ")
        .concat(Vb(r), ">")
        .concat(s.map(gs).join(""), "</")
        .concat(t, ">");
}
function Fh(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var Xb = function (t, n) {
    return function (r, i, s, a) {
      return t.call(n, r, i, s, a);
    };
  },
  bl = function (t, n, r, i) {
    var s = Object.keys(t),
      a = s.length,
      o = i !== void 0 ? Xb(n, i) : n,
      c,
      u,
      d;
    for (
      r === void 0 ? ((c = 1), (d = t[s[0]])) : ((c = 0), (d = r));
      c < a;
      c++
    )
      (u = s[c]), (d = o(d, t[u], u, t));
    return d;
  };
function Zb(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var s = e.charCodeAt(n++);
      (s & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (s & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function zc(e) {
  var t = Zb(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function e_(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function zh(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Bc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    s = zh(t);
  typeof ot.hooks.addPack == "function" && !i
    ? ot.hooks.addPack(e, zh(t))
    : (ot.styles[e] = j(j({}, ot.styles[e] || {}), s)),
    e === "fas" && Bc("fa", t);
}
var Vs,
  Gs,
  Ks,
  vr = ot.styles,
  t_ = ot.shims,
  n_ =
    ((Vs = {}),
    xe(Vs, ne, Object.values(qi[ne])),
    xe(Vs, de, Object.values(qi[de])),
    Vs),
  yd = null,
  s0 = {},
  a0 = {},
  o0 = {},
  l0 = {},
  c0 = {},
  r_ =
    ((Gs = {}),
    xe(Gs, ne, Object.keys(Yi[ne])),
    xe(Gs, de, Object.keys(Yi[de])),
    Gs);
function i_(e) {
  return ~Ub.indexOf(e);
}
function s_(e, t) {
  var n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !i_(i) ? i : null;
}
var u0 = function () {
  var t = function (s) {
    return bl(
      vr,
      function (a, o, c) {
        return (a[c] = bl(o, s, {})), a;
      },
      {}
    );
  };
  (s0 = t(function (i, s, a) {
    if ((s[3] && (i[s[3]] = a), s[2])) {
      var o = s[2].filter(function (c) {
        return typeof c == "number";
      });
      o.forEach(function (c) {
        i[c.toString(16)] = a;
      });
    }
    return i;
  })),
    (a0 = t(function (i, s, a) {
      if (((i[a] = a), s[2])) {
        var o = s[2].filter(function (c) {
          return typeof c == "string";
        });
        o.forEach(function (c) {
          i[c] = a;
        });
      }
      return i;
    })),
    (c0 = t(function (i, s, a) {
      var o = s[2];
      return (
        (i[a] = a),
        o.forEach(function (c) {
          i[c] = a;
        }),
        i
      );
    }));
  var n = "far" in vr || R.autoFetchSvg,
    r = bl(
      t_,
      function (i, s) {
        var a = s[0],
          o = s[1],
          c = s[2];
        return (
          o === "far" && !n && (o = "fas"),
          typeof a == "string" && (i.names[a] = { prefix: o, iconName: c }),
          typeof a == "number" &&
            (i.unicodes[a.toString(16)] = { prefix: o, iconName: c }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (o0 = r.names),
    (l0 = r.unicodes),
    (yd = Ro(R.styleDefault, { family: R.familyDefault }));
};
$b(function (e) {
  yd = Ro(e.styleDefault, { family: R.familyDefault });
});
u0();
function wd(e, t) {
  return (s0[e] || {})[t];
}
function a_(e, t) {
  return (a0[e] || {})[t];
}
function zn(e, t) {
  return (c0[e] || {})[t];
}
function d0(e) {
  return o0[e] || { prefix: null, iconName: null };
}
function o_(e) {
  var t = l0[e],
    n = wd("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function En() {
  return yd;
}
var xd = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function Ro(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? ne : n,
    i = Yi[r][e],
    s = Ji[r][e] || Ji[r][i],
    a = e in ot.styles ? e : null;
  return s || a || null;
}
var Bh =
  ((Ks = {}),
  xe(Ks, ne, Object.keys(qi[ne])),
  xe(Ks, de, Object.keys(qi[de])),
  Ks);
function Oo(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    s =
      ((t = {}),
      xe(t, ne, "".concat(R.cssPrefix, "-").concat(ne)),
      xe(t, de, "".concat(R.cssPrefix, "-").concat(de)),
      t),
    a = null,
    o = ne;
  (e.includes(s[ne]) ||
    e.some(function (u) {
      return Bh[ne].includes(u);
    })) &&
    (o = ne),
    (e.includes(s[de]) ||
      e.some(function (u) {
        return Bh[de].includes(u);
      })) &&
      (o = de);
  var c = e.reduce(function (u, d) {
    var f = s_(R.cssPrefix, d);
    if (
      (vr[d]
        ? ((d = n_[o].includes(d) ? Rb[o][d] : d), (a = d), (u.prefix = d))
        : r_[o].indexOf(d) > -1
        ? ((a = d), (u.prefix = Ro(d, { family: o })))
        : f
        ? (u.iconName = f)
        : d !== R.replacementClass &&
          d !== s[ne] &&
          d !== s[de] &&
          u.rest.push(d),
      !i && u.prefix && u.iconName)
    ) {
      var m = a === "fa" ? d0(u.iconName) : {},
        w = zn(u.prefix, u.iconName);
      m.prefix && (a = null),
        (u.iconName = m.iconName || w || u.iconName),
        (u.prefix = m.prefix || u.prefix),
        u.prefix === "far" &&
          !vr.far &&
          vr.fas &&
          !R.autoFetchSvg &&
          (u.prefix = "fas");
    }
    return u;
  }, xd());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (c.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (c.prefix = "fad"),
    !c.prefix &&
      o === de &&
      (vr.fass || R.autoFetchSvg) &&
      ((c.prefix = "fass"),
      (c.iconName = zn(c.prefix, c.iconName) || c.iconName)),
    (c.prefix === "fa" || a === "fa") && (c.prefix = En() || "fas"),
    c
  );
}
var l_ = (function () {
    function e() {
      xb(this, e), (this.definitions = {});
    }
    return (
      kb(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), s = 0;
              s < r;
              s++
            )
              i[s] = arguments[s];
            var a = i.reduce(this._pullDefinitions, {});
            Object.keys(a).forEach(function (o) {
              (n.definitions[o] = j(j({}, n.definitions[o] || {}), a[o])),
                Bc(o, a[o]);
              var c = qi[ne][o];
              c && Bc(c, a[o]), u0();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (s) {
                var a = i[s],
                  o = a.prefix,
                  c = a.iconName,
                  u = a.icon,
                  d = u[2];
                n[o] || (n[o] = {}),
                  d.length > 0 &&
                    d.forEach(function (f) {
                      typeof f == "string" && (n[o][f] = u);
                    }),
                  (n[o][c] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  $h = [],
  yr = {},
  Ir = {},
  c_ = Object.keys(Ir);
function u_(e, t) {
  var n = t.mixoutsTo;
  return (
    ($h = e),
    (yr = {}),
    Object.keys(Ir).forEach(function (r) {
      c_.indexOf(r) === -1 && delete Ir[r];
    }),
    $h.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (a) {
          typeof i[a] == "function" && (n[a] = i[a]),
            Qa(i[a]) === "object" &&
              Object.keys(i[a]).forEach(function (o) {
                n[a] || (n[a] = {}), (n[a][o] = i[a][o]);
              });
        }),
        r.hooks)
      ) {
        var s = r.hooks();
        Object.keys(s).forEach(function (a) {
          yr[a] || (yr[a] = []), yr[a].push(s[a]);
        });
      }
      r.provides && r.provides(Ir);
    }),
    n
  );
}
function $c(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var s = yr[e] || [];
  return (
    s.forEach(function (a) {
      t = a.apply(null, [t].concat(r));
    }),
    t
  );
}
function er(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = yr[e] || [];
  i.forEach(function (s) {
    s.apply(null, n);
  });
}
function Ft() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Ir[e] ? Ir[e].apply(null, t) : void 0;
}
function Hc(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || En();
  if (t)
    return (t = zn(n, t) || t), Fh(f0.definitions, n, t) || Fh(ot.styles, n, t);
}
var f0 = new l_(),
  d_ = function () {
    (R.autoReplaceSvg = !1), (R.observeMutations = !1), er("noAuto");
  },
  f_ = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Bt
        ? (er("beforeI2svg", t), Ft("pseudoElements2svg", t), Ft("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      R.autoReplaceSvg === !1 && (R.autoReplaceSvg = !0),
        (R.observeMutations = !0),
        Qb(function () {
          p_({ autoReplaceSvgRoot: n }), er("watch", t);
        });
    },
  },
  h_ = {
    icon: function (t) {
      if (t === null) return null;
      if (Qa(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: zn(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = Ro(t[0]);
        return { prefix: r, iconName: zn(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(R.cssPrefix, "-")) > -1 || t.match(Ob))
      ) {
        var i = Oo(t.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || En(),
          iconName: zn(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == "string") {
        var s = En();
        return { prefix: s, iconName: zn(s, t) || t };
      }
    },
  },
  Ye = {
    noAuto: d_,
    config: R,
    dom: f_,
    parse: h_,
    library: f0,
    findIconDefinition: Hc,
    toHtml: gs,
  },
  p_ = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? ie : n;
    (Object.keys(ot.styles).length > 0 || R.autoFetchSvg) &&
      Bt &&
      R.autoReplaceSvg &&
      Ye.dom.i2svg({ node: r });
  };
function Ao(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return gs(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (Bt) {
          var r = ie.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function m_(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    s = e.styles,
    a = e.transform;
  if (vd(a) && n.found && !r.found) {
    var o = n.width,
      c = n.height,
      u = { x: o / c / 2, y: 0.5 };
    i.style = Po(
      j(
        j({}, s),
        {},
        {
          "transform-origin": ""
            .concat(u.x + a.x / 16, "em ")
            .concat(u.y + a.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function g_(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    s = e.symbol,
    a = s === !0 ? "".concat(t, "-").concat(R.cssPrefix, "-").concat(n) : s;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: j(j({}, i), {}, { id: a }), children: r },
      ],
    },
  ];
}
function kd(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    s = e.iconName,
    a = e.transform,
    o = e.symbol,
    c = e.title,
    u = e.maskId,
    d = e.titleId,
    f = e.extra,
    m = e.watchable,
    w = m === void 0 ? !1 : m,
    g = r.found ? r : n,
    v = g.width,
    k = g.height,
    p = i === "fak",
    h = [R.replacementClass, s ? "".concat(R.cssPrefix, "-").concat(s) : ""]
      .filter(function (D) {
        return f.classes.indexOf(D) === -1;
      })
      .filter(function (D) {
        return D !== "" || !!D;
      })
      .concat(f.classes)
      .join(" "),
    y = {
      children: [],
      attributes: j(
        j({}, f.attributes),
        {},
        {
          "data-prefix": i,
          "data-icon": s,
          class: h,
          role: f.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(v, " ").concat(k),
        }
      ),
    },
    E =
      p && !~f.classes.indexOf("fa-fw")
        ? { width: "".concat((v / k) * 16 * 0.0625, "em") }
        : {};
  w && (y.attributes[Zn] = ""),
    c &&
      (y.children.push({
        tag: "title",
        attributes: {
          id: y.attributes["aria-labelledby"] || "title-".concat(d || Xi()),
        },
        children: [c],
      }),
      delete y.attributes.title);
  var S = j(
      j({}, y),
      {},
      {
        prefix: i,
        iconName: s,
        main: n,
        mask: r,
        maskId: u,
        transform: a,
        symbol: o,
        styles: j(j({}, E), f.styles),
      }
    ),
    C =
      r.found && n.found
        ? Ft("generateAbstractMask", S) || { children: [], attributes: {} }
        : Ft("generateAbstractIcon", S) || { children: [], attributes: {} },
    T = C.children,
    I = C.attributes;
  return (S.children = T), (S.attributes = I), o ? g_(S) : m_(S);
}
function Hh(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    s = e.title,
    a = e.extra,
    o = e.watchable,
    c = o === void 0 ? !1 : o,
    u = j(
      j(j({}, a.attributes), s ? { title: s } : {}),
      {},
      { class: a.classes.join(" ") }
    );
  c && (u[Zn] = "");
  var d = j({}, a.styles);
  vd(i) &&
    ((d.transform = Kb({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (d["-webkit-transform"] = d.transform));
  var f = Po(d);
  f.length > 0 && (u.style = f);
  var m = [];
  return (
    m.push({ tag: "span", attributes: u, children: [t] }),
    s &&
      m.push({ tag: "span", attributes: { class: "sr-only" }, children: [s] }),
    m
  );
}
function v_(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = j(
      j(j({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    s = Po(r.styles);
  s.length > 0 && (i.style = s);
  var a = [];
  return (
    a.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      a.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    a
  );
}
var _l = ot.styles;
function Wc(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = dd(r, 1),
    s = i[0],
    a = null;
  return (
    Array.isArray(s)
      ? (a = {
          tag: "g",
          attributes: { class: "".concat(R.cssPrefix, "-").concat(Fn.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(R.cssPrefix, "-").concat(Fn.SECONDARY),
                fill: "currentColor",
                d: s[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(R.cssPrefix, "-").concat(Fn.PRIMARY),
                fill: "currentColor",
                d: s[1],
              },
            },
          ],
        })
      : (a = { tag: "path", attributes: { fill: "currentColor", d: s } }),
    { found: !0, width: t, height: n, icon: a }
  );
}
var y_ = { found: !1, width: 512, height: 512 };
function w_(e, t) {
  !Xv &&
    !R.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function Vc(e, t) {
  var n = t;
  return (
    t === "fa" && R.styleDefault !== null && (t = En()),
    new Promise(function (r, i) {
      if ((Ft("missingIconAbstract"), n === "fa")) {
        var s = d0(e) || {};
        (e = s.iconName || e), (t = s.prefix || t);
      }
      if (e && t && _l[t] && _l[t][e]) {
        var a = _l[t][e];
        return r(Wc(a));
      }
      w_(e, t),
        r(
          j(
            j({}, y_),
            {},
            {
              icon:
                R.showMissingIcons && e ? Ft("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var Wh = function () {},
  Gc =
    R.measurePerformance && Fs && Fs.mark && Fs.measure
      ? Fs
      : { mark: Wh, measure: Wh },
  ci = 'FA "6.4.0"',
  x_ = function (t) {
    return (
      Gc.mark("".concat(ci, " ").concat(t, " begins")),
      function () {
        return h0(t);
      }
    );
  },
  h0 = function (t) {
    Gc.mark("".concat(ci, " ").concat(t, " ends")),
      Gc.measure(
        "".concat(ci, " ").concat(t),
        "".concat(ci, " ").concat(t, " begins"),
        "".concat(ci, " ").concat(t, " ends")
      );
  },
  Ed = { begin: x_, end: h0 },
  pa = function () {};
function Vh(e) {
  var t = e.getAttribute ? e.getAttribute(Zn) : null;
  return typeof t == "string";
}
function k_(e) {
  var t = e.getAttribute ? e.getAttribute(hd) : null,
    n = e.getAttribute ? e.getAttribute(pd) : null;
  return t && n;
}
function E_(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(R.replacementClass)
  );
}
function S_() {
  if (R.autoReplaceSvg === !0) return ma.replace;
  var e = ma[R.autoReplaceSvg];
  return e || ma.replace;
}
function b_(e) {
  return ie.createElementNS("http://www.w3.org/2000/svg", e);
}
function __(e) {
  return ie.createElement(e);
}
function p0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? b_ : __) : n;
  if (typeof e == "string") return ie.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (a) {
    i.setAttribute(a, e.attributes[a]);
  });
  var s = e.children || [];
  return (
    s.forEach(function (a) {
      i.appendChild(p0(a, { ceFn: r }));
    }),
    i
  );
}
function N_(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var ma = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(p0(i), n);
        }),
        n.getAttribute(Zn) === null && R.keepOriginalSource)
      ) {
        var r = ie.createComment(N_(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~gd(n).indexOf(R.replacementClass)) return ma.replace(t);
    var i = new RegExp("".concat(R.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var s = r[0].attributes.class.split(" ").reduce(
        function (o, c) {
          return (
            c === R.replacementClass || c.match(i)
              ? o.toSvg.push(c)
              : o.toNode.push(c),
            o
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = s.toSvg.join(" ")),
        s.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", s.toNode.join(" "));
    }
    var a = r.map(function (o) {
      return gs(o);
    }).join(`
`);
    n.setAttribute(Zn, ""), (n.innerHTML = a);
  },
};
function Gh(e) {
  e();
}
function m0(e, t) {
  var n = typeof t == "function" ? t : pa;
  if (e.length === 0) n();
  else {
    var r = Gh;
    R.mutateApproach === jb && (r = kn.requestAnimationFrame || Gh),
      r(function () {
        var i = S_(),
          s = Ed.begin("mutate");
        e.map(i), s(), n();
      });
  }
}
var Sd = !1;
function g0() {
  Sd = !0;
}
function Kc() {
  Sd = !1;
}
var Za = null;
function Kh(e) {
  if (Dh && R.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? pa : t,
      r = e.nodeCallback,
      i = r === void 0 ? pa : r,
      s = e.pseudoElementsCallback,
      a = s === void 0 ? pa : s,
      o = e.observeMutationsRoot,
      c = o === void 0 ? ie : o;
    (Za = new Dh(function (u) {
      if (!Sd) {
        var d = En();
        Yr(u).forEach(function (f) {
          if (
            (f.type === "childList" &&
              f.addedNodes.length > 0 &&
              !Vh(f.addedNodes[0]) &&
              (R.searchPseudoElements && a(f.target), n(f.target)),
            f.type === "attributes" &&
              f.target.parentNode &&
              R.searchPseudoElements &&
              a(f.target.parentNode),
            f.type === "attributes" &&
              Vh(f.target) &&
              ~Mb.indexOf(f.attributeName))
          )
            if (f.attributeName === "class" && k_(f.target)) {
              var m = Oo(gd(f.target)),
                w = m.prefix,
                g = m.iconName;
              f.target.setAttribute(hd, w || d),
                g && f.target.setAttribute(pd, g);
            } else E_(f.target) && i(f.target);
        });
      }
    })),
      Bt &&
        Za.observe(c, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function T_() {
  Za && Za.disconnect();
}
function C_(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, i) {
        var s = i.split(":"),
          a = s[0],
          o = s.slice(1);
        return a && o.length > 0 && (r[a] = o.join(":").trim()), r;
      }, {})),
    n
  );
}
function I_(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    i = Oo(gd(e));
  return (
    i.prefix || (i.prefix = En()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          a_(i.prefix, e.innerText) || wd(i.prefix, zc(e.innerText))),
      !i.iconName &&
        R.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function j_(e) {
  var t = Yr(e.attributes).reduce(function (i, s) {
      return (
        i.name !== "class" && i.name !== "style" && (i[s.name] = s.value), i
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    R.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(R.replacementClass, "-title-")
            .concat(r || Xi()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function P_() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: mt,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Yh(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = I_(e),
    r = n.iconName,
    i = n.prefix,
    s = n.rest,
    a = j_(e),
    o = $c("parseNodeAttributes", {}, e),
    c = t.styleParser ? C_(e) : [];
  return j(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: i,
      transform: mt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: s, styles: c, attributes: a },
    },
    o
  );
}
var R_ = ot.styles;
function v0(e) {
  var t = R.autoReplaceSvg === "nest" ? Yh(e, { styleParser: !1 }) : Yh(e);
  return ~t.extra.classes.indexOf(Zv)
    ? Ft("generateLayersText", e, t)
    : Ft("generateSvgReplacementMutation", e, t);
}
var Sn = new Set();
md.map(function (e) {
  Sn.add("fa-".concat(e));
});
Object.keys(Yi[ne]).map(Sn.add.bind(Sn));
Object.keys(Yi[de]).map(Sn.add.bind(Sn));
Sn = ps(Sn);
function Jh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Bt) return Promise.resolve();
  var n = ie.documentElement.classList,
    r = function (f) {
      return n.add("".concat(Mh, "-").concat(f));
    },
    i = function (f) {
      return n.remove("".concat(Mh, "-").concat(f));
    },
    s = R.autoFetchSvg
      ? Sn
      : md
          .map(function (d) {
            return "fa-".concat(d);
          })
          .concat(Object.keys(R_));
  s.includes("fa") || s.push("fa");
  var a = [".".concat(Zv, ":not([").concat(Zn, "])")]
    .concat(
      s.map(function (d) {
        return ".".concat(d, ":not([").concat(Zn, "])");
      })
    )
    .join(", ");
  if (a.length === 0) return Promise.resolve();
  var o = [];
  try {
    o = Yr(e.querySelectorAll(a));
  } catch {}
  if (o.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  var c = Ed.begin("onTree"),
    u = o.reduce(function (d, f) {
      try {
        var m = v0(f);
        m && d.push(m);
      } catch (w) {
        Xv || (w.name === "MissingIcon" && console.error(w));
      }
      return d;
    }, []);
  return new Promise(function (d, f) {
    Promise.all(u)
      .then(function (m) {
        m0(m, function () {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            c(),
            d();
        });
      })
      .catch(function (m) {
        c(), f(m);
      });
  });
}
function O_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  v0(e).then(function (n) {
    n && m0([n], t);
  });
}
function A_(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : Hc(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : Hc(i || {})),
      e(r, j(j({}, n), {}, { mask: i }))
    );
  };
}
var L_ = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? mt : r,
      s = n.symbol,
      a = s === void 0 ? !1 : s,
      o = n.mask,
      c = o === void 0 ? null : o,
      u = n.maskId,
      d = u === void 0 ? null : u,
      f = n.title,
      m = f === void 0 ? null : f,
      w = n.titleId,
      g = w === void 0 ? null : w,
      v = n.classes,
      k = v === void 0 ? [] : v,
      p = n.attributes,
      h = p === void 0 ? {} : p,
      y = n.styles,
      E = y === void 0 ? {} : y;
    if (t) {
      var S = t.prefix,
        C = t.iconName,
        T = t.icon;
      return Ao(j({ type: "icon" }, t), function () {
        return (
          er("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          R.autoA11y &&
            (m
              ? (h["aria-labelledby"] = ""
                  .concat(R.replacementClass, "-title-")
                  .concat(g || Xi()))
              : ((h["aria-hidden"] = "true"), (h.focusable = "false"))),
          kd({
            icons: {
              main: Wc(T),
              mask: c
                ? Wc(c.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: S,
            iconName: C,
            transform: j(j({}, mt), i),
            symbol: a,
            title: m,
            maskId: d,
            titleId: g,
            extra: { attributes: h, styles: E, classes: k },
          })
        );
      });
    }
  },
  D_ = {
    mixout: function () {
      return { icon: A_(L_) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Jh), (n.nodeCallback = O_), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? ie : r,
          s = n.callback,
          a = s === void 0 ? function () {} : s;
        return Jh(i, a);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            s = r.title,
            a = r.titleId,
            o = r.prefix,
            c = r.transform,
            u = r.symbol,
            d = r.mask,
            f = r.maskId,
            m = r.extra;
          return new Promise(function (w, g) {
            Promise.all([
              Vc(i, o),
              d.iconName
                ? Vc(d.iconName, d.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (v) {
                var k = dd(v, 2),
                  p = k[0],
                  h = k[1];
                w([
                  n,
                  kd({
                    icons: { main: p, mask: h },
                    prefix: o,
                    iconName: i,
                    transform: c,
                    symbol: u,
                    maskId: f,
                    title: s,
                    titleId: a,
                    extra: m,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(g);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            s = n.main,
            a = n.transform,
            o = n.styles,
            c = Po(o);
          c.length > 0 && (i.style = c);
          var u;
          return (
            vd(a) &&
              (u = Ft("generateAbstractTransformGrouping", {
                main: s,
                transform: a,
                containerWidth: s.width,
                iconWidth: s.width,
              })),
            r.push(u || s.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  M_ = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            s = i === void 0 ? [] : i;
          return Ao({ type: "layer" }, function () {
            er("beforeDOMElementCreation", { assembler: n, params: r });
            var a = [];
            return (
              n(function (o) {
                Array.isArray(o)
                  ? o.map(function (c) {
                      a = a.concat(c.abstract);
                    })
                  : (a = a.concat(o.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(R.cssPrefix, "-layers")]
                      .concat(ps(s))
                      .join(" "),
                  },
                  children: a,
                },
              ]
            );
          });
        },
      };
    },
  },
  U_ = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            s = i === void 0 ? null : i,
            a = r.classes,
            o = a === void 0 ? [] : a,
            c = r.attributes,
            u = c === void 0 ? {} : c,
            d = r.styles,
            f = d === void 0 ? {} : d;
          return Ao({ type: "counter", content: n }, function () {
            return (
              er("beforeDOMElementCreation", { content: n, params: r }),
              v_({
                content: n.toString(),
                title: s,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: ["".concat(R.cssPrefix, "-layers-counter")].concat(
                    ps(o)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  F_ = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            s = i === void 0 ? mt : i,
            a = r.title,
            o = a === void 0 ? null : a,
            c = r.classes,
            u = c === void 0 ? [] : c,
            d = r.attributes,
            f = d === void 0 ? {} : d,
            m = r.styles,
            w = m === void 0 ? {} : m;
          return Ao({ type: "text", content: n }, function () {
            return (
              er("beforeDOMElementCreation", { content: n, params: r }),
              Hh({
                content: n,
                transform: j(j({}, mt), s),
                title: o,
                extra: {
                  attributes: f,
                  styles: w,
                  classes: ["".concat(R.cssPrefix, "-layers-text")].concat(
                    ps(u)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          s = r.transform,
          a = r.extra,
          o = null,
          c = null;
        if (Jv) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            d = n.getBoundingClientRect();
          (o = d.width / u), (c = d.height / u);
        }
        return (
          R.autoA11y && !i && (a.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            Hh({
              content: n.innerHTML,
              width: o,
              height: c,
              transform: s,
              title: i,
              extra: a,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  z_ = new RegExp('"', "ug"),
  qh = [1105920, 1112319];
function B_(e) {
  var t = e.replace(z_, ""),
    n = e_(t, 0),
    r = n >= qh[0] && n <= qh[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: zc(i ? t[0] : t), isSecondary: r || i };
}
function Qh(e, t) {
  var n = "".concat(Ib).concat(t.replace(":", "-"));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var s = Yr(e.children),
      a = s.filter(function (T) {
        return T.getAttribute(Fc) === t;
      })[0],
      o = kn.getComputedStyle(e, t),
      c = o.getPropertyValue("font-family").match(Ab),
      u = o.getPropertyValue("font-weight"),
      d = o.getPropertyValue("content");
    if (a && !c) return e.removeChild(a), r();
    if (c && d !== "none" && d !== "") {
      var f = o.getPropertyValue("content"),
        m = ~["Sharp"].indexOf(c[2]) ? de : ne,
        w = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(c[2])
          ? Ji[m][c[2].toLowerCase()]
          : Lb[m][u],
        g = B_(f),
        v = g.value,
        k = g.isSecondary,
        p = c[0].startsWith("FontAwesome"),
        h = wd(w, v),
        y = h;
      if (p) {
        var E = o_(v);
        E.iconName && E.prefix && ((h = E.iconName), (w = E.prefix));
      }
      if (
        h &&
        !k &&
        (!a || a.getAttribute(hd) !== w || a.getAttribute(pd) !== y)
      ) {
        e.setAttribute(n, y), a && e.removeChild(a);
        var S = P_(),
          C = S.extra;
        (C.attributes[Fc] = t),
          Vc(h, w)
            .then(function (T) {
              var I = kd(
                  j(
                    j({}, S),
                    {},
                    {
                      icons: { main: T, mask: xd() },
                      prefix: w,
                      iconName: y,
                      extra: C,
                      watchable: !0,
                    }
                  )
                ),
                D = ie.createElement("svg");
              t === "::before"
                ? e.insertBefore(D, e.firstChild)
                : e.appendChild(D),
                (D.outerHTML = I.map(function (L) {
                  return gs(L);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function $_(e) {
  return Promise.all([Qh(e, "::before"), Qh(e, "::after")]);
}
function H_(e) {
  return (
    e.parentNode !== document.head &&
    !~Pb.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Fc) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function Xh(e) {
  if (Bt)
    return new Promise(function (t, n) {
      var r = Yr(e.querySelectorAll("*")).filter(H_).map($_),
        i = Ed.begin("searchPseudoElements");
      g0(),
        Promise.all(r)
          .then(function () {
            i(), Kc(), t();
          })
          .catch(function () {
            i(), Kc(), n();
          });
    });
}
var W_ = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = Xh), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? ie : r;
        R.searchPseudoElements && Xh(i);
      };
    },
  },
  Zh = !1,
  V_ = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            g0(), (Zh = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Kh($c("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          T_();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          Zh
            ? Kc()
            : Kh($c("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  ep = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, i) {
        var s = i.toLowerCase().split("-"),
          a = s[0],
          o = s.slice(1).join("-");
        if (a && o === "h") return (r.flipX = !0), r;
        if (a && o === "v") return (r.flipY = !0), r;
        if (((o = parseFloat(o)), isNaN(o))) return r;
        switch (a) {
          case "grow":
            r.size = r.size + o;
            break;
          case "shrink":
            r.size = r.size - o;
            break;
          case "left":
            r.x = r.x - o;
            break;
          case "right":
            r.x = r.x + o;
            break;
          case "up":
            r.y = r.y - o;
            break;
          case "down":
            r.y = r.y + o;
            break;
          case "rotate":
            r.rotate = r.rotate + o;
            break;
        }
        return r;
      }, n);
  },
  G_ = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return ep(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-transform");
          return i && (n.transform = ep(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          s = n.containerWidth,
          a = n.iconWidth,
          o = { transform: "translate(".concat(s / 2, " 256)") },
          c = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
          u = "scale("
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
          d = "rotate(".concat(i.rotate, " 0 0)"),
          f = { transform: "".concat(c, " ").concat(u, " ").concat(d) },
          m = { transform: "translate(".concat((a / 2) * -1, " -256)") },
          w = { outer: o, inner: f, path: m };
        return {
          tag: "g",
          attributes: j({}, w.outer),
          children: [
            {
              tag: "g",
              attributes: j({}, w.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: j(j({}, r.icon.attributes), w.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  Nl = { x: 0, y: 0, width: "100%", height: "100%" };
function tp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function K_(e) {
  return e.tag === "g" ? e.children : [e];
}
var Y_ = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-mask"),
            s = i
              ? Oo(
                  i.split(" ").map(function (a) {
                    return a.trim();
                  })
                )
              : xd();
          return (
            s.prefix || (s.prefix = En()),
            (n.mask = s),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          s = n.main,
          a = n.mask,
          o = n.maskId,
          c = n.transform,
          u = s.width,
          d = s.icon,
          f = a.width,
          m = a.icon,
          w = Gb({ transform: c, containerWidth: f, iconWidth: u }),
          g = { tag: "rect", attributes: j(j({}, Nl), {}, { fill: "white" }) },
          v = d.children ? { children: d.children.map(tp) } : {},
          k = {
            tag: "g",
            attributes: j({}, w.inner),
            children: [
              tp(
                j({ tag: d.tag, attributes: j(j({}, d.attributes), w.path) }, v)
              ),
            ],
          },
          p = { tag: "g", attributes: j({}, w.outer), children: [k] },
          h = "mask-".concat(o || Xi()),
          y = "clip-".concat(o || Xi()),
          E = {
            tag: "mask",
            attributes: j(
              j({}, Nl),
              {},
              {
                id: h,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [g, p],
          },
          S = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: y }, children: K_(m) },
              E,
            ],
          };
        return (
          r.push(S, {
            tag: "rect",
            attributes: j(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(y, ")"),
                mask: "url(#".concat(h, ")"),
              },
              Nl
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  J_ = {
    provides: function (t) {
      var n = !1;
      kn.matchMedia &&
        (n = kn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: "currentColor" },
            s = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: j(
              j({}, i),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var a = j(j({}, s), {}, { attributeName: "opacity" }),
            o = {
              tag: "circle",
              attributes: j(j({}, i), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              o.children.push(
                {
                  tag: "animate",
                  attributes: j(
                    j({}, s),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: j(j({}, a), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(o),
            r.push({
              tag: "path",
              attributes: j(
                j({}, i),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: j(j({}, a), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: j(
                  j({}, i),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: j(j({}, a), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  q_ = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-symbol"),
            s = i === null ? !1 : i === "" ? !0 : i;
          return (n.symbol = s), n;
        },
      };
    },
  },
  Q_ = [Jb, D_, M_, U_, F_, W_, V_, G_, Y_, J_, q_];
u_(Q_, { mixoutsTo: Ye });
Ye.noAuto;
Ye.config;
Ye.library;
Ye.dom;
var Yc = Ye.parse;
Ye.findIconDefinition;
Ye.toHtml;
var X_ = Ye.icon;
Ye.layer;
Ye.text;
Ye.counter;
var y0 = { exports: {} },
  Z_ = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  eN = Z_,
  tN = eN;
function w0() {}
function x0() {}
x0.resetWarningCache = w0;
var nN = function () {
  function e(r, i, s, a, o, c) {
    if (c !== tN) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: x0,
    resetWarningCache: w0,
  };
  return (n.PropTypes = n), n;
};
y0.exports = nN();
var rN = y0.exports;
const B = ip(rN);
function np(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function an(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? np(Object(n), !0).forEach(function (r) {
          wr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : np(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function eo(e) {
  "@babel/helpers - typeof";
  return (
    (eo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    eo(e)
  );
}
function wr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function iN(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function sN(e, t) {
  if (e == null) return {};
  var n = iN(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Jc(e) {
  return aN(e) || oN(e) || lN(e) || cN();
}
function aN(e) {
  if (Array.isArray(e)) return qc(e);
}
function oN(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function lN(e, t) {
  if (e) {
    if (typeof e == "string") return qc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return qc(e, t);
  }
}
function qc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uN(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    s = e.bounce,
    a = e.shake,
    o = e.flash,
    c = e.spin,
    u = e.spinPulse,
    d = e.spinReverse,
    f = e.pulse,
    m = e.fixedWidth,
    w = e.inverse,
    g = e.border,
    v = e.listItem,
    k = e.flip,
    p = e.size,
    h = e.rotation,
    y = e.pull,
    E =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": s,
        "fa-shake": a,
        "fa-flash": o,
        "fa-spin": c,
        "fa-spin-reverse": d,
        "fa-spin-pulse": u,
        "fa-pulse": f,
        "fa-fw": m,
        "fa-inverse": w,
        "fa-border": g,
        "fa-li": v,
        "fa-flip": k === !0,
        "fa-flip-horizontal": k === "horizontal" || k === "both",
        "fa-flip-vertical": k === "vertical" || k === "both",
      }),
      wr(t, "fa-".concat(p), typeof p < "u" && p !== null),
      wr(t, "fa-rotate-".concat(h), typeof h < "u" && h !== null && h !== 0),
      wr(t, "fa-pull-".concat(y), typeof y < "u" && y !== null),
      wr(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(E)
    .map(function (S) {
      return E[S] ? S : null;
    })
    .filter(function (S) {
      return S;
    });
}
function dN(e) {
  return (e = e - 0), e === e;
}
function k0(e) {
  return dN(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var fN = ["style"];
function hN(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function pN(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = k0(n.slice(0, r)),
        s = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[hN(i)] = s) : (t[i] = s), t;
    }, {});
}
function E0(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (c) {
      return E0(e, c);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (c, u) {
        var d = t.attributes[u];
        switch (u) {
          case "class":
            (c.attrs.className = d), delete t.attributes.class;
            break;
          case "style":
            c.attrs.style = pN(d);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (c.attrs[u.toLowerCase()] = d)
              : (c.attrs[k0(u)] = d);
        }
        return c;
      },
      { attrs: {} }
    ),
    s = n.style,
    a = s === void 0 ? {} : s,
    o = sN(n, fN);
  return (
    (i.attrs.style = an(an({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, an(an({}, i.attrs), o)].concat(Jc(r)))
  );
}
var S0 = !1;
try {
  S0 = !0;
} catch {}
function mN() {
  if (!S0 && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function rp(e) {
  if (e && eo(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Yc.icon) return Yc.icon(e);
  if (e === null) return null;
  if (e && eo(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function Tl(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? wr({}, e, t)
    : {};
}
var fe = V.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    s = e.className,
    a = e.title,
    o = e.titleId,
    c = e.maskId,
    u = rp(n),
    d = Tl("classes", [].concat(Jc(uN(e)), Jc(s.split(" ")))),
    f = Tl(
      "transform",
      typeof e.transform == "string" ? Yc.transform(e.transform) : e.transform
    ),
    m = Tl("mask", rp(r)),
    w = X_(
      u,
      an(
        an(an(an({}, d), f), m),
        {},
        { symbol: i, title: a, titleId: o, maskId: c }
      )
    );
  if (!w) return mN("Could not find icon", u), null;
  var g = w.abstract,
    v = { ref: t };
  return (
    Object.keys(e).forEach(function (k) {
      fe.defaultProps.hasOwnProperty(k) || (v[k] = e[k]);
    }),
    gN(g[0], v)
  );
});
fe.displayName = "FontAwesomeIcon";
fe.propTypes = {
  beat: B.bool,
  border: B.bool,
  beatFade: B.bool,
  bounce: B.bool,
  className: B.string,
  fade: B.bool,
  flash: B.bool,
  mask: B.oneOfType([B.object, B.array, B.string]),
  maskId: B.string,
  fixedWidth: B.bool,
  inverse: B.bool,
  flip: B.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: B.oneOfType([B.object, B.array, B.string]),
  listItem: B.bool,
  pull: B.oneOf(["right", "left"]),
  pulse: B.bool,
  rotation: B.oneOf([0, 90, 180, 270]),
  shake: B.bool,
  size: B.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: B.bool,
  spinPulse: B.bool,
  spinReverse: B.bool,
  symbol: B.oneOfType([B.bool, B.string]),
  title: B.string,
  titleId: B.string,
  transform: B.oneOfType([B.string, B.object]),
  swapOpacity: B.bool,
};
fe.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var gN = E0.bind(null, V.createElement),
  to = {
    prefix: "fas",
    iconName: "arrow-right-from-bracket",
    icon: [
      512,
      512,
      ["sign-out"],
      "f08b",
      "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z",
    ],
  },
  vN = {
    prefix: "fas",
    iconName: "list",
    icon: [
      512,
      512,
      ["list-squares"],
      "f03a",
      "M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z",
    ],
  },
  Jt = {
    prefix: "fas",
    iconName: "bookmark",
    icon: [
      384,
      512,
      [128278, 61591],
      "f02e",
      "M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z",
    ],
  },
  b0 = {
    prefix: "fas",
    iconName: "clock",
    icon: [
      512,
      512,
      [128339, "clock-four"],
      "f017",
      "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",
    ],
  },
  yN = {
    prefix: "fas",
    iconName: "thumbs-down",
    icon: [
      512,
      512,
      [128078, 61576],
      "f165",
      "M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z",
    ],
  },
  _0 = {
    prefix: "fas",
    iconName: "list-check",
    icon: [
      512,
      512,
      ["tasks"],
      "f0ae",
      "M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z",
    ],
  },
  N0 = {
    prefix: "fas",
    iconName: "clock-rotate-left",
    icon: [
      512,
      512,
      ["history"],
      "f1da",
      "M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z",
    ],
  },
  St = {
    prefix: "fas",
    iconName: "thumbs-up",
    icon: [
      512,
      512,
      [128077, 61575],
      "f164",
      "M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z",
    ],
  },
  wN = {
    prefix: "far",
    iconName: "bookmark",
    icon: [
      384,
      512,
      [128278, 61591],
      "f02e",
      "M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z",
    ],
  };
const xN = (e) => {
    const {
      authUser: t,
      userPlaceName: n,
      userWithinRadius: r,
      userFromTime: i,
      userToTime: s,
      setUserPlaceName: a,
      setUserWithinRadius: o,
      setUserFromTime: c,
      setUserToTime: u,
      response1: d,
      response2: f,
      response3: m,
    } = Tn();
    x.useEffect(() => {
      d && console.log(JSON.stringify(d));
    }, [d]);
    function w(g) {
      return g.charAt(0).toUpperCase() + g.slice(1);
    }
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx("h6", {
          className: "bg-white text-center px-3 fs-3 mt-5",
          style: { color: "#37249D" },
          children: "Quick Iternery Plan",
        }),
        l.jsx("h2", {
          className: "mb-5 text-center",
          children: "Here is your iternery plans",
        }),
        l.jsx("div", {
          className: "container py-5",
          children: l.jsx("div", {
            className: "main-timeline-4 text-white",
            style: { content: null },
            children:
              d !== null
                ? d.plan.map((g, v) =>
                    l.jsx(
                      "div",
                      {
                        className: `timeline-4 ${
                          v % 2 === 0 ? "left-4" : "right-4"
                        }`,
                        children: l.jsx("div", {
                          className: "card",
                          children: l.jsxs("div", {
                            className: "card-body p-4 gradient-custom",
                            children: [
                              l.jsxs("h4", {
                                children: [
                                  "Place: ",
                                  l.jsx("span", {
                                    children:
                                      g === null ? "NULL" : w(g.location),
                                  }),
                                ],
                              }),
                              "Timings: ",
                              l.jsx("span", {
                                className: "badge badge-dark mt-3 p-2",
                                children: g === null ? "NULL" : g.time,
                              }),
                              l.jsxs("p", {
                                className: "mt-3",
                                children: [
                                  "Activity: ",
                                  l.jsx("span", {
                                    children:
                                      g === null ? "NULL" : w(g.activity),
                                  }),
                                ],
                              }),
                              l.jsxs("p", {
                                children: [
                                  "Distance: ",
                                  l.jsx("span", {
                                    children: g === null ? "NULL" : g.distance,
                                  }),
                                ],
                              }),
                              l.jsxs("p", {
                                children: [
                                  "Travel-Time: ",
                                  l.jsx("span", {
                                    children:
                                      g === null ? "NULL" : g["travel time"],
                                  }),
                                ],
                              }),
                              l.jsx("a", {
                                className: "btn",
                                style: {
                                  backgroundColor: "white",
                                  color: "black",
                                },
                                href:
                                  "https://www.google.com/maps/search/" +
                                  g.location,
                                target: "_blank",
                                role: "button",
                                children: "Open in Maps",
                              }),
                            ],
                          }),
                        }),
                      },
                      v
                    )
                  )
                : l.jsx("h2", {
                    style: { color: "black", textAlign: "center" },
                    children: "Generating plan...",
                  }),
          }),
        }),
      ],
    });
  },
  kN = (e) => {
    const {
      authUser: t,
      userPlaceName: n,
      userWithinRadius: r,
      userFromTime: i,
      userToTime: s,
      setUserPlaceName: a,
      setUserWithinRadius: o,
      setUserFromTime: c,
      setUserToTime: u,
      response1: d,
      response2: f,
      response3: m,
    } = Tn();
    x.useEffect(() => {
      f && console.log(JSON.stringify(f));
    }, [f]);
    function w(g) {
      return g.charAt(0).toUpperCase() + g.slice(1);
    }
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx("h2", {
          className: "mb-5 text-center",
          children: "Here is another iternery plan",
        }),
        l.jsx("div", {
          className: "container py-5",
          children: l.jsx("div", {
            className: "main-timeline-4 text-white",
            style: { content: null },
            children:
              f !== null
                ? f.plan.map((g, v) =>
                    l.jsx(
                      "div",
                      {
                        className: `timeline-4 ${
                          v % 2 === 0 ? "left-4" : "right-4"
                        }`,
                        children: l.jsx("div", {
                          className: "card",
                          children: l.jsxs("div", {
                            className: "card-body p-4 gradient-custom",
                            children: [
                              l.jsxs("h4", {
                                children: [
                                  "Place: ",
                                  l.jsx("span", {
                                    children:
                                      g === null ? "NULL" : w(g.location),
                                  }),
                                ],
                              }),
                              "Timings: ",
                              l.jsx("span", {
                                className: "badge badge-dark mt-3 p-2",
                                children: g === null ? "NULL" : g.time,
                              }),
                              l.jsxs("p", {
                                className: "mt-3",
                                children: [
                                  "Activity: ",
                                  l.jsx("span", {
                                    children:
                                      g === null ? "NULL" : w(g.activity),
                                  }),
                                ],
                              }),
                              l.jsxs("p", {
                                children: [
                                  "Distance: ",
                                  l.jsx("span", {
                                    children: g === null ? "NULL" : g.distance,
                                  }),
                                ],
                              }),
                              l.jsxs("p", {
                                children: [
                                  "Travel-Time: ",
                                  l.jsx("span", {
                                    children:
                                      g === null ? "NULL" : g["travel time"],
                                  }),
                                ],
                              }),
                              l.jsx("a", {
                                className: "btn",
                                style: {
                                  backgroundColor: "white",
                                  color: "black",
                                },
                                href:
                                  "https://www.google.com/maps/search/" +
                                  g.location,
                                target: "_blank",
                                role: "button",
                                children: "Open in Maps",
                              }),
                            ],
                          }),
                        }),
                      },
                      v
                    )
                  )
                : l.jsx("h2", {
                    style: { color: "black", textAlign: "center" },
                    children: "Generating plan...",
                  }),
          }),
        }),
      ],
    });
  },
  EN = (e) => {
    const {
      authUser: t,
      userPlaceName: n,
      userWithinRadius: r,
      userFromTime: i,
      userToTime: s,
      setUserPlaceName: a,
      setUserWithinRadius: o,
      setUserFromTime: c,
      setUserToTime: u,
      response1: d,
      response2: f,
      response3: m,
    } = Tn();
    x.useEffect(() => {
      m && console.log(JSON.stringify(m));
    }, [m]);
    function w(g) {
      return g.charAt(0).toUpperCase() + g.slice(1);
    }
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx("h2", {
          className: "mb-5 text-center",
          children: "Here is another iternery plan",
        }),
        l.jsx("div", {
          className: "container py-5",
          children: l.jsx("div", {
            className: "main-timeline-4 text-white",
            style: { content: null },
            children:
              m !== null
                ? m.plan.map((g, v) =>
                    l.jsx(
                      "div",
                      {
                        className: `timeline-4 ${
                          v % 2 === 0 ? "left-4" : "right-4"
                        }`,
                        children: l.jsx("div", {
                          className: "card",
                          children: l.jsxs("div", {
                            className: "card-body p-4 gradient-custom",
                            children: [
                              l.jsxs("h4", {
                                children: [
                                  "Place: ",
                                  l.jsx("span", {
                                    children:
                                      g === null ? "NULL" : w(g.location),
                                  }),
                                ],
                              }),
                              "Timings: ",
                              l.jsx("span", {
                                className: "badge badge-dark mt-3 p-2",
                                children: g === null ? "NULL" : g.time,
                              }),
                              l.jsxs("p", {
                                className: "mt-3",
                                children: [
                                  "Activity: ",
                                  l.jsx("span", {
                                    children:
                                      g === null ? "NULL" : w(g.activity),
                                  }),
                                ],
                              }),
                              l.jsxs("p", {
                                children: [
                                  "Distance: ",
                                  l.jsx("span", {
                                    children: g === null ? "NULL" : g.distance,
                                  }),
                                ],
                              }),
                              l.jsxs("p", {
                                children: [
                                  "Travel-Time: ",
                                  l.jsx("span", {
                                    children:
                                      g === null ? "NULL" : g["travel time"],
                                  }),
                                ],
                              }),
                              l.jsx("a", {
                                className: "btn",
                                style: {
                                  backgroundColor: "white",
                                  color: "black",
                                },
                                href:
                                  "https://www.google.com/maps/search/" +
                                  g.location,
                                target: "_blank",
                                role: "button",
                                children: "Open in Maps",
                              }),
                            ],
                          }),
                        }),
                      },
                      v
                    )
                  )
                : l.jsx("h2", {
                    style: { color: "black", textAlign: "center" },
                    children: "Generating plan...",
                  }),
          }),
        }),
      ],
    });
  },
  SN = () => {
    const {
      authUser: e,
      userPlaceName: t,
      userWithinRadius: n,
      userFromTime: r,
      userToTime: i,
      setUserPlaceName: s,
      setUserWithinRadius: a,
      setUserFromTime: o,
      setUserToTime: c,
      response1: u,
      response2: d,
      response3: f,
    } = Tn();
    x.useEffect(() => {
      u && console.log(u);
    });
    const [m, w] = x.useState(!1),
      [g, v] = x.useState(!1),
      [k, p] = x.useState(!1),
      [h, y] = x.useState("white"),
      [E, S] = x.useState("white"),
      [C, T] = x.useState("white"),
      [I, D] = x.useState("black"),
      [L, Z] = x.useState("black"),
      [ce, pe] = x.useState("black"),
      [A, q] = x.useState(St),
      [F, z] = x.useState(Jt),
      N = () => {
        A === St
          ? (q(yN),
            Y("Iternery Liked!", {
              position: "top-center",
              autoClose: 1e3,
              hideProgressBar: !1,
              closeOnClick: !0,
              pauseOnHover: !0,
              draggable: !0,
              progress: void 0,
              theme: "dark",
            }))
          : (q(St),
            Y("Iternery Disliked!", {
              position: "top-center",
              autoClose: 1e3,
              hideProgressBar: !1,
              closeOnClick: !0,
              pauseOnHover: !0,
              draggable: !0,
              progress: void 0,
              theme: "dark",
            }));
      },
      O = () => {
        F === Jt
          ? (z(wN),
            Y("Iternery Saved!", {
              position: "top-center",
              autoClose: 1e3,
              hideProgressBar: !1,
              closeOnClick: !0,
              pauseOnHover: !0,
              draggable: !0,
              progress: void 0,
              theme: "dark",
            }))
          : (z(Jt),
            Y("Iternery Unsaved!", {
              position: "top-center",
              autoClose: 1e3,
              hideProgressBar: !1,
              closeOnClick: !0,
              pauseOnHover: !0,
              draggable: !0,
              progress: void 0,
              theme: "dark",
            }));
      };
    return (
      x.useState(St),
      x.useState(Jt),
      x.useState(St),
      x.useState(Jt),
      l.jsxs(l.Fragment, {
        children: [
          l.jsx(Xn, {}),
          l.jsx("div", {
            className: "container-xxl py-5",
            children: l.jsxs("div", {
              className: "container",
              children: [
                l.jsxs("div", {
                  className: "text-center",
                  children: [
                    l.jsx("h6", {
                      className: "section-title text-center px-3 fs-3",
                      style: { color: "#37249D" },
                      children: "Your Trip Iternaries",
                    }),
                    l.jsx("h2", {
                      className: "mb-5",
                      children: "Here are the Iternaries for a quick trip plan",
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "row g-4",
                  children: l.jsx("div", {
                    className: "col-lg-4 col-sm-6",
                    style: { left: "35%" },
                    children: l.jsx("div", {
                      className: "iternery-item rounded pt-3",
                      style: { backgroundColor: h, color: I },
                      onClick: () => {
                        h == "white"
                          ? (D("white"),
                            Z("black"),
                            pe("black"),
                            y("#37249D"),
                            S("white"),
                            T("white"))
                          : (D("black"),
                            Z("black"),
                            pe("black"),
                            y("white"),
                            S("white"),
                            T("white")),
                          w(!m),
                          v(!1),
                          p(!1);
                      },
                      children: l.jsxs("div", {
                        className: "p-4",
                        children: [
                          l.jsxs("p", {
                            className: "text-center fs-5",
                            children: [
                              l.jsx(fe, { icon: vN }),
                              "  Best Iternery Plan",
                            ],
                          }),
                          l.jsxs("p", {
                            className: "text-center mt-4",
                            children: [
                              "Places to visit: ",
                              l.jsx("span", {
                                children: "Temples, Beaches, Restaurant",
                              }),
                            ],
                          }),
                          l.jsx("hr", {}),
                          l.jsx("div", {
                            className: "mb-4 mt-3",
                            children:
                              (e == null ? void 0 : e.isAnonymous) === !0
                                ? l.jsxs("div", {
                                    className: "float-right",
                                    onClick: N,
                                    children: [
                                      l.jsx(fe, { icon: A }),
                                      "  ",
                                      A === St
                                        ? l.jsx(l.Fragment, {
                                            children: "Like",
                                          })
                                        : l.jsx(l.Fragment, {
                                            children: "Dislike",
                                          }),
                                    ],
                                  })
                                : l.jsxs(l.Fragment, {
                                    children: [
                                      l.jsxs("div", {
                                        className: "float-right",
                                        onClick: N,
                                        children: [
                                          l.jsx(fe, { icon: A }),
                                          "  ",
                                          A === St
                                            ? l.jsx(l.Fragment, {
                                                children: "Like",
                                              })
                                            : l.jsx(l.Fragment, {
                                                children: "Dislike",
                                              }),
                                        ],
                                      }),
                                      l.jsxs("div", {
                                        className: "float-left",
                                        onClick: O,
                                        children: [
                                          l.jsx(fe, { icon: F }),
                                          "  ",
                                          F === Jt
                                            ? l.jsx(l.Fragment, {
                                                children: "Save Plan",
                                              })
                                            : l.jsx(l.Fragment, {
                                                children: "Unsave Plan",
                                              }),
                                        ],
                                      }),
                                    ],
                                  }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
          m && l.jsx(xN, {}),
          g && l.jsx(kN, {}),
          k && l.jsx(EN, {}),
        ],
      })
    );
  },
  bN = () =>
    l.jsxs(l.Fragment, {
      children: [
        l.jsx("h6", {
          className: "bg-white text-center px-3 fs-3 mt-5",
          style: { color: "#37249D" },
          children: "Iternery Plan",
        }),
        l.jsx("h2", {
          className: "mb-5 text-center",
          children: "Here are the Iternery Details",
        }),
        l.jsx("div", {
          className: "container my-5",
          children: l.jsx("div", {
            className: "row",
            children: l.jsx("div", {
              className: "col-md-8 offset-md-4",
              children: l.jsxs("ul", {
                className: "timeline-3",
                children: [
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Udupi Sri krishna matha",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "6:00 AM - 7:00 AM",
                      }),
                      l.jsxs("p", {
                        className: "text-muted mt-2 mb-1",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children:
                              "Visit the temple and witness the morning rituals",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "1 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "5 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", { children: "Malpe Beach" }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "7:05 AM - 8:00 AM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children: "Enjoy the early morning beach walk",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "4 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "15 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Woodlands Restaurant",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "8:20 AM - 9:15 AM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", { children: "Have a Good breakfast" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "2 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "10 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Kaup lighthouse",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "9:45 AM - 10:45 AM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children:
                              "Climb up the lighthouse for a scenic view",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "1 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "5 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Manipal End point",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "6:00 AM - 7:00 AM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children:
                              "Take a stroll and enjoy the beautiful views",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "8 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "20 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Diana Restaurant",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "12:20 PM - 1:20 PM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children: "Have a Good and Healthy Lunch",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "2 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "10 minutes" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      ],
    }),
  _N = () => {
    const [e, t] = x.useState(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      ),
      [n, r] = x.useState(!1),
      [i, s] = x.useState("white"),
      [a, o] = x.useState("black");
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx("div", {
          className: "container-xxl py-5",
          children: l.jsxs("div", {
            className: "container",
            children: [
              l.jsxs("div", {
                className: "text-center",
                children: [
                  l.jsx("h6", {
                    className: "section-title text-center px-3 fs-3",
                    style: { color: "#37249D" },
                    children: "Your Liked Trip Plan",
                  }),
                  l.jsx("h2", {
                    className: "mb-5",
                    children: "Here are the Iternaries which you liked",
                  }),
                ],
              }),
              l.jsx("div", {
                className: "row g-4",
                children: l.jsx("div", {
                  className: "col-lg-4 col-sm-6",
                  children: l.jsx("div", {
                    className: "iternery-item rounded pt-3",
                    style: { backgroundColor: i, color: a },
                    onClick: () => {
                      i == "white"
                        ? (o("white"), s("#37249D"))
                        : (o("black"), s("white")),
                        r(!n);
                    },
                    children: l.jsxs("div", {
                      className: "p-4",
                      children: [
                        l.jsxs("p", {
                          className: "text-center fs-5",
                          children: [
                            l.jsx(fe, { icon: _0 }),
                            "  Iternery Plan",
                          ],
                        }),
                        l.jsxs("p", {
                          className: "text-center mt-4",
                          children: [
                            l.jsx(fe, { icon: N0 }),
                            "  Plan Created on:- ",
                            l.jsx("span", { children: "18-07-2023" }),
                          ],
                        }),
                        l.jsxs("p", {
                          className: "text-center mt-4",
                          children: [
                            l.jsx(fe, { icon: b0 }),
                            "  Time Reference:- ",
                            l.jsx("span", { children: e }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
        n && l.jsx(bN, {}),
      ],
    });
  },
  NN = () =>
    l.jsxs(l.Fragment, {
      children: [
        l.jsx("h6", {
          className: "bg-white text-center px-3 fs-3 mt-5",
          style: { color: "#37249D" },
          children: "Iternery Plan",
        }),
        l.jsx("h2", {
          className: "mb-5 text-center",
          children: "Here are the Iternery Details",
        }),
        l.jsx("div", {
          className: "container my-5",
          children: l.jsx("div", {
            className: "row",
            children: l.jsx("div", {
              className: "col-md-8 offset-md-4",
              children: l.jsxs("ul", {
                className: "timeline-3",
                children: [
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Udupi Sri krishna matha",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "6:00 AM - 7:00 AM",
                      }),
                      l.jsxs("p", {
                        className: "text-muted mt-2 mb-1",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children:
                              "Visit the temple and witness the morning rituals",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "1 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "5 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", { children: "Malpe Beach" }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "7:05 AM - 8:00 AM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children: "Enjoy the early morning beach walk",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "4 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "15 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Woodlands Restaurant",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "8:20 AM - 9:15 AM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", { children: "Have a Good breakfast" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "2 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "10 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Kaup lighthouse",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "9:45 AM - 10:45 AM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children:
                              "Climb up the lighthouse for a scenic view",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "1 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "5 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Manipal End point",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "6:00 AM - 7:00 AM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children:
                              "Take a stroll and enjoy the beautiful views",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "8 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "20 minutes" }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("li", {
                    children: [
                      l.jsx("h4", {
                        children: l.jsx("span", {
                          children: "Diana Restaurant",
                        }),
                      }),
                      l.jsx("span", {
                        className: "text-muted",
                        children: "12:20 PM - 1:20 PM",
                      }),
                      l.jsxs("p", {
                        className: "mt-2 mb-1 text-muted",
                        children: [
                          "Activity: ",
                          l.jsx("span", {
                            children: "Have a Good and Healthy Lunch",
                          }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted mb-1",
                        children: [
                          "Distance: ",
                          l.jsx("span", { children: "2 km" }),
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-muted",
                        children: [
                          "Travel-Time: ",
                          l.jsx("span", { children: "10 minutes" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      ],
    }),
  TN = () => {
    const [e, t] = x.useState(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      ),
      [n, r] = x.useState(!1),
      [i, s] = x.useState("white"),
      [a, o] = x.useState("black");
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx(Xn, {}),
        l.jsx("div", {
          className: "container-xxl py-5",
          children: l.jsxs("div", {
            className: "container",
            children: [
              l.jsxs("div", {
                className: "text-center",
                children: [
                  l.jsx("h6", {
                    className: "section-title text-center px-3 fs-3",
                    style: { color: "#37249D" },
                    children: "Your Saved Trip Plan",
                  }),
                  l.jsx("h2", {
                    className: "mb-5",
                    children: "Here are the Iternaries which you Saved",
                  }),
                ],
              }),
              l.jsx("div", {
                className: "row g-4",
                children: l.jsx("div", {
                  className: "col-lg-4 col-sm-6",
                  children: l.jsx("div", {
                    className: "iternery-item rounded pt-3",
                    style: { backgroundColor: i, color: a },
                    onClick: () => {
                      i == "white"
                        ? (o("white"), s("#37249D"))
                        : (o("black"), s("white")),
                        r(!n);
                    },
                    children: l.jsxs("div", {
                      className: "p-4",
                      children: [
                        l.jsxs("p", {
                          className: "text-center fs-5",
                          children: [
                            l.jsx(fe, { icon: _0 }),
                            "  Iternery Plan",
                          ],
                        }),
                        l.jsxs("p", {
                          className: "text-center mt-4",
                          children: [
                            l.jsx(fe, { icon: N0 }),
                            "  Plan Saved on:- ",
                            l.jsx("span", { children: "18-07-2023" }),
                          ],
                        }),
                        l.jsxs("p", {
                          className: "text-center mt-4",
                          children: [
                            l.jsx(fe, { icon: b0 }),
                            "  Time Reference:- ",
                            l.jsx("span", { children: e }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
        n && l.jsx(NN, {}),
      ],
    });
  },
  T0 = "./guest-5a475979.png",
  CN = () => {
    const [e, t] = x.useState(""),
      [n, r] = x.useState({ x: 0, y: 0 }),
      i = () => {
        r({ x: window.scrollX, y: window.scrollY });
      };
    x.useEffect(
      () => (
        window.addEventListener("scroll", i),
        () => {
          window.removeEventListener("scroll", i);
        }
      ),
      []
    );
    const s = () => {
      const v = document.getElementById("home"),
        k = document.getElementById("recommendation"),
        p = document.getElementById("services"),
        h = document.getElementById("contact");
      if (v && k && p && h) {
        if (n.y >= v.offsetTop && n.y < k.offsetTop) return "home";
        if (n.y >= k.offsetTop && n.y < p.offsetTop) return "recommendation";
        if (n.y >= p.offsetTop && n.y < h.offsetTop) return "services";
        if (n.y >= h.offsetTop) return "contact";
      }
      return "";
    };
    x.useEffect(() => {
      const v = s();
      t(v);
    }, [n]);
    const { authUser: a, setAuthUser: o } = Tn(),
      c = (v) => {
        Y("Logged Out Successfully!", {
          position: "top-center",
          autoClose: 1e3,
          hideProgressBar: !1,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !0,
          progress: void 0,
          theme: "dark",
        }),
          o(null),
          window.sessionStorage.setItem("authUser", null),
          setTimeout(() => {
            window.location.reload();
          }, 1e3);
      },
      u = x.useRef(null),
      d = x.useRef(null),
      f = x.useRef(null),
      m = (v, k) => {
        t(k), window.scrollTo({ top: v.current.offsetTop, behavior: "smooth" });
      },
      w = x.useRef(),
      g = () => {
        w.current.click();
      };
    return (
      x.useEffect(() => {
        a !== null ? console.log("Already Logged In") : g();
      }, []),
      l.jsxs(l.Fragment, {
        children: [
          l.jsx(Xn, {}),
          l.jsxs("nav", {
            className:
              "navbar navbar-expand-lg navbar-light left-50 px-lg-5 py-3 py-lg-0 shadow-sm",
            children: [
              l.jsx(Re, {
                to: "/",
                className: "navbar-brand p-0",
                children: l.jsxs("h1", {
                  className: "text-primary m-0",
                  children: [
                    l.jsxs("span", {
                      style: { color: "#37249D" },
                      children: [
                        l.jsx("i", { className: "fa fa-map-marked-alt me-3" }),
                        "Trip",
                      ],
                    }),
                    l.jsx("span", {
                      style: { color: "red" },
                      children: "Macha",
                    }),
                  ],
                }),
              }),
              l.jsx("button", {
                className: "navbar-toggler",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarCollapse",
                children: l.jsx("span", { className: "fa fa-bars" }),
              }),
              l.jsxs("div", {
                className: "collapse navbar-collapse",
                id: "navbarCollapse",
                children: [
                  l.jsx("div", {
                    className: "navbox",
                    children: l.jsxs("div", {
                      className: "navbar-nav ms-auto py-0",
                      children: [
                        l.jsx(Re, {
                          exact: !0,
                          to: "/",
                          id: "a",
                          className: `nav-item nav-link ${
                            e === "home" ? "active" : ""
                          } text-white`,
                          onClick: () => m(null, "home"),
                          children: "Home",
                        }),
                        l.jsx(Re, {
                          to: "#recommendation",
                          className: `nav-item nav-link ${
                            e === "recommendation" ? "active" : ""
                          }`,
                          onClick: () => m(u, "recommendation"),
                          children: "Recommendations",
                        }),
                        l.jsx(Re, {
                          to: "#services",
                          className: `nav-item nav-link ${
                            e === "services" ? "active" : ""
                          }`,
                          onClick: () => m(d, "services"),
                          children: "Services",
                        }),
                        l.jsx(Re, {
                          to: "#contact",
                          className: `nav-item nav-link ${
                            e === "contact" ? "active" : ""
                          }`,
                          onClick: () => m(f, "contact"),
                          children: "Contact us",
                        }),
                      ],
                    }),
                  }),
                  a !== null
                    ? a.isAnonymous === !0
                      ? l.jsxs("li", {
                          className: "nav-item dropdown",
                          id: "loginGuestDD",
                          children: [
                            l.jsx("a", {
                              className: "nav-link dropdown-toggle fs-5 px-0",
                              style: { color: "#37249D" },
                              href: "#",
                              id: "navbarDropdown",
                              role: "button",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false",
                              children: "Guest Login",
                            }),
                            l.jsxs("div", {
                              className: "dropdown-menu",
                              style: {
                                right: "0",
                                minWidth: "0",
                                marginRight: "-26px",
                                width: "150px",
                              },
                              children: [
                                l.jsxs("div", {
                                  className: "text-center",
                                  children: [
                                    l.jsx("img", {
                                      className: "mt-2 rounded-circle",
                                      src: T0,
                                      alt: "profilePhoto",
                                      style: {
                                        width: "50px",
                                        height: "48px",
                                        border: "3px solid #8f96d4",
                                      },
                                    }),
                                    l.jsx("p", {
                                      className: "mt-2 font-weight-bold",
                                      children: "Guest Login",
                                    }),
                                  ],
                                }),
                                l.jsx("hr", {}),
                                l.jsxs("a", {
                                  onClick: (v) => {
                                    c();
                                  },
                                  className:
                                    "dropdown-item bg-transparent text-center linkhover",
                                  href: "#",
                                  id: "btnlogout",
                                  children: [
                                    l.jsx(fe, {
                                      style: { marginRight: "10px" },
                                      icon: to,
                                    }),
                                    "Logout",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : l.jsxs("li", {
                          className: "nav-item dropdown",
                          id: "loginGuestDD",
                          children: [
                            l.jsx("a", {
                              className: "nav-link dropdown-toggle fs-5 px-0",
                              style: { color: "#37249D" },
                              href: "#",
                              id: "navbarDropdown",
                              role: "button",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false",
                              children: a.displayName,
                            }),
                            l.jsxs("div", {
                              className: "dropdown-menu",
                              style: {
                                right: "0",
                                minWidth: "0",
                                marginRight: "-26px",
                                width: "200px",
                              },
                              children: [
                                l.jsxs("div", {
                                  className: "text-center",
                                  children: [
                                    l.jsx("img", {
                                      className: "mt-2 rounded-circle",
                                      src: a.photoURL,
                                      alt: "profilePhoto",
                                      style: {
                                        width: "50px",
                                        height: "48px",
                                        border: "3px solid #8f96d4",
                                      },
                                    }),
                                    l.jsx("p", {
                                      className: "mt-2 font-weight-bold",
                                      children: a.displayName,
                                    }),
                                  ],
                                }),
                                l.jsx("hr", {}),
                                l.jsxs("div", {
                                  className: "text-center",
                                  children: [
                                    l.jsxs(Re, {
                                      to: "/Liked",
                                      className:
                                        "text-decoration-none text-capitalize linkhover",
                                      children: [
                                        l.jsx(fe, {
                                          style: { marginRight: "10px" },
                                          icon: St,
                                        }),
                                        "Liked Iterneries",
                                      ],
                                    }),
                                    l.jsx("br", {}),
                                    l.jsx("br", {}),
                                    l.jsxs(Re, {
                                      to: "/Saved",
                                      className:
                                        "text-decoration-none text-capitalize linkhover",
                                      children: [
                                        l.jsx(fe, {
                                          style: { marginRight: "10px" },
                                          icon: Jt,
                                        }),
                                        "Saved Trip Plans",
                                      ],
                                    }),
                                  ],
                                }),
                                l.jsx("hr", {}),
                                l.jsxs("a", {
                                  onClick: (v) => {
                                    c();
                                  },
                                  className:
                                    "dropdown-item bg-transparent text-center linkhover",
                                  href: "#",
                                  id: "btnlogout",
                                  children: [
                                    l.jsx(fe, {
                                      style: { marginRight: "10px" },
                                      icon: to,
                                    }),
                                    "Logout",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                    : l.jsx("button", {
                        type: "button",
                        ref: w,
                        className:
                          "btn btn-outline-primary py-2 px-4 shadow-none",
                        "data-toggle": "modal",
                        "data-target": "#SignupSigninModal",
                        "data-backdrop": "false",
                        children: "Login/Signup",
                      }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  IN = () => {
    const [e, t] = x.useState(""),
      [n, r] = x.useState({ x: 0, y: 0 }),
      i = () => {
        r({ x: window.scrollX, y: window.scrollY });
      };
    x.useEffect(
      () => (
        window.addEventListener("scroll", i),
        () => {
          window.removeEventListener("scroll", i);
        }
      ),
      []
    );
    const s = () => {
      const v = document.getElementById("home"),
        k = document.getElementById("recommendation"),
        p = document.getElementById("services"),
        h = document.getElementById("contact");
      if (v && k && p && h) {
        if (n.y >= v.offsetTop && n.y < k.offsetTop) return "home";
        if (n.y >= k.offsetTop && n.y < p.offsetTop) return "recommendation";
        if (n.y >= p.offsetTop && n.y < h.offsetTop) return "services";
        if (n.y >= h.offsetTop) return "contact";
      }
      return "";
    };
    x.useEffect(() => {
      const v = s();
      t(v);
    }, [n]);
    const { authUser: a, setAuthUser: o } = Tn(),
      c = (v) => {
        Y("Logged Out Successfully!", {
          position: "top-center",
          autoClose: 1e3,
          hideProgressBar: !1,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !0,
          progress: void 0,
          theme: "dark",
        }),
          o(null),
          window.sessionStorage.setItem("authUser", null),
          setTimeout(() => {
            window.location.reload();
          }, 1e3);
      },
      u = x.useRef(null),
      d = x.useRef(null),
      f = x.useRef(null),
      m = (v, k) => {
        t(k), window.scrollTo({ top: v.current.offsetTop, behavior: "smooth" });
      },
      w = x.useRef(),
      g = () => {
        w.current.click();
      };
    return (
      x.useEffect(() => {
        a !== null ? console.log("Already Logged In") : g();
      }, []),
      l.jsxs(l.Fragment, {
        children: [
          l.jsx(Xn, {}),
          l.jsxs("nav", {
            className:
              "navbar navbar-expand-lg navbar-light left-50 px-lg-5 py-3 py-lg-0 shadow-sm",
            children: [
              l.jsx(Re, {
                to: "/",
                className: "navbar-brand p-0",
                children: l.jsxs("h1", {
                  className: "text-primary m-0",
                  children: [
                    l.jsxs("span", {
                      style: { color: "#37249D" },
                      children: [
                        l.jsx("i", { className: "fa fa-map-marked-alt me-3" }),
                        "Trip",
                      ],
                    }),
                    l.jsx("span", {
                      style: { color: "red" },
                      children: "Macha",
                    }),
                  ],
                }),
              }),
              l.jsx("button", {
                className: "navbar-toggler",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarCollapse",
                children: l.jsx("span", { className: "fa fa-bars" }),
              }),
              l.jsxs("div", {
                className: "collapse navbar-collapse",
                id: "navbarCollapse",
                children: [
                  l.jsx("div", {
                    className: "navbox",
                    children: l.jsxs("div", {
                      className: "navbar-nav ms-auto py-0",
                      children: [
                        l.jsx(Re, {
                          exact: !0,
                          to: "/",
                          id: "a",
                          className: `nav-item nav-link ${
                            e === "home" ? "active" : ""
                          } text-white`,
                          onClick: () => m(null, "home"),
                          children: "Home",
                        }),
                        l.jsx(Re, {
                          to: "/#recommendation",
                          className: `nav-item nav-link ${
                            e === "recommendation" ? "active" : ""
                          }`,
                          onClick: () => m(u, "recommendation"),
                          children: "Recommendations",
                        }),
                        l.jsx(Re, {
                          to: "/#services",
                          className: `nav-item nav-link ${
                            e === "services" ? "active" : ""
                          }`,
                          onClick: () => m(d, "services"),
                          children: "Services",
                        }),
                        l.jsx(Re, {
                          to: "/#contact",
                          className: `nav-item nav-link ${
                            e === "contact" ? "active" : ""
                          }`,
                          onClick: () => m(f, "contact"),
                          children: "Contact us",
                        }),
                      ],
                    }),
                  }),
                  a !== null
                    ? a.isAnonymous === !0
                      ? l.jsxs("li", {
                          className: "nav-item dropdown",
                          id: "loginGuestDD",
                          children: [
                            l.jsx("a", {
                              className: "nav-link dropdown-toggle fs-5 px-0",
                              style: { color: "#37249D" },
                              href: "#",
                              id: "navbarDropdown",
                              role: "button",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false",
                              children: "Guest Login",
                            }),
                            l.jsxs("div", {
                              className: "dropdown-menu",
                              style: {
                                right: "0",
                                minWidth: "0",
                                marginRight: "-26px",
                                width: "150px",
                              },
                              children: [
                                l.jsxs("div", {
                                  className: "text-center",
                                  children: [
                                    l.jsx("img", {
                                      className: "mt-2 rounded-circle",
                                      src: T0,
                                      alt: "profilePhoto",
                                      style: {
                                        width: "50px",
                                        height: "48px",
                                        border: "3px solid #8f96d4",
                                      },
                                    }),
                                    l.jsx("p", {
                                      className: "mt-2 font-weight-bold",
                                      children: "Guest Login",
                                    }),
                                  ],
                                }),
                                l.jsx("hr", {}),
                                l.jsxs("a", {
                                  onClick: (v) => {
                                    c();
                                  },
                                  className:
                                    "dropdown-item bg-transparent text-center linkhover",
                                  href: "#",
                                  id: "btnlogout",
                                  children: [
                                    l.jsx(fe, {
                                      style: { marginRight: "10px" },
                                      icon: to,
                                    }),
                                    "Logout",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : l.jsxs("li", {
                          className: "nav-item dropdown",
                          id: "loginGuestDD",
                          children: [
                            l.jsx("a", {
                              className: "nav-link dropdown-toggle fs-5 px-0",
                              style: { color: "#37249D" },
                              href: "#",
                              id: "navbarDropdown",
                              role: "button",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false",
                              children: a.displayName,
                            }),
                            l.jsxs("div", {
                              className: "dropdown-menu",
                              style: {
                                right: "0",
                                minWidth: "0",
                                marginRight: "-26px",
                                width: "200px",
                              },
                              children: [
                                l.jsxs("div", {
                                  className: "text-center",
                                  children: [
                                    l.jsx("img", {
                                      className: "mt-2 rounded-circle",
                                      src: a.photoURL,
                                      alt: "profilePhoto",
                                      style: {
                                        width: "50px",
                                        height: "48px",
                                        border: "3px solid #8f96d4",
                                      },
                                    }),
                                    l.jsx("p", {
                                      className: "mt-2 font-weight-bold",
                                      children: a.displayName,
                                    }),
                                  ],
                                }),
                                l.jsx("hr", {}),
                                l.jsxs("div", {
                                  className: "text-center",
                                  children: [
                                    l.jsxs(Re, {
                                      to: "/Liked",
                                      className:
                                        "text-decoration-none text-capitalize linkhover",
                                      children: [
                                        l.jsx(fe, {
                                          style: { marginRight: "10px" },
                                          icon: St,
                                        }),
                                        "Liked Iterneries",
                                      ],
                                    }),
                                    l.jsx("br", {}),
                                    l.jsx("br", {}),
                                    l.jsxs(Re, {
                                      to: "/Saved",
                                      className:
                                        "text-decoration-none text-capitalize linkhover",
                                      children: [
                                        l.jsx(fe, {
                                          style: { marginRight: "10px" },
                                          icon: Jt,
                                        }),
                                        "Saved Trip Plans",
                                      ],
                                    }),
                                  ],
                                }),
                                l.jsx("hr", {}),
                                l.jsxs("a", {
                                  onClick: (v) => {
                                    c();
                                  },
                                  className:
                                    "dropdown-item bg-transparent text-center linkhover",
                                  href: "#",
                                  id: "btnlogout",
                                  children: [
                                    l.jsx(fe, {
                                      style: { marginRight: "10px" },
                                      icon: to,
                                    }),
                                    "Logout",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                    : l.jsx("button", {
                        type: "button",
                        ref: w,
                        className:
                          "btn btn-outline-primary py-2 px-4 shadow-none",
                        "data-toggle": "modal",
                        "data-target": "#SignupSigninModal",
                        "data-backdrop": "false",
                        children: "Login/Signup",
                      }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
function jN() {
  return l.jsx(l.Fragment, {
    children: l.jsx(v2, {
      children: l.jsxs(Jw, {
        children: [
          l.jsx("section", {
            id: "home",
            children: l.jsx("div", {
              className: "container-fluid position-relative p-0",
              children: l.jsx(yb, {}),
            }),
          }),
          l.jsxs(Hw, {
            children: [
              l.jsx(Gt, {
                exact: !0,
                path: "/",
                element: l.jsxs(l.Fragment, {
                  children: [
                    l.jsx(CN, {}),
                    l.jsx("section", {
                      id: "tripScheduler",
                      children: l.jsx(y2, {}),
                    }),
                    l.jsx("section", {
                      id: "recommendation",
                      children: l.jsx(Zf, {}),
                    }),
                    l.jsx("section", {
                      id: "services",
                      children: l.jsx(eh, {}),
                    }),
                    l.jsx("section", {
                      id: "contact",
                      children: l.jsx(th, {}),
                    }),
                  ],
                }),
              }),
              l.jsx(Gt, {
                exact: !0,
                path: "/recommendation",
                element: l.jsx(l.Fragment, {
                  children: l.jsx("section", {
                    id: "recommendation",
                    children: l.jsx(Zf, {}),
                  }),
                }),
              }),
              l.jsx(Gt, {
                exact: !0,
                path: "/services",
                element: l.jsx(l.Fragment, {
                  children: l.jsx("section", {
                    id: "services",
                    children: l.jsx(eh, {}),
                  }),
                }),
              }),
              l.jsx(Gt, {
                exact: !0,
                path: "/contact",
                element: l.jsx(l.Fragment, {
                  children: l.jsx("section", {
                    id: "contact",
                    children: l.jsx(th, {}),
                  }),
                }),
              }),
              l.jsx(Gt, {
                exact: !0,
                path: "/Tripscheduler",
                element: l.jsxs(l.Fragment, {
                  children: [
                    l.jsx(IN, {}),
                    l.jsx("section", {
                      id: "iternery",
                      children: l.jsx(SN, {}),
                    }),
                  ],
                }),
              }),
              l.jsx(Gt, {
                exact: !0,
                path: "/Liked",
                element: l.jsx(l.Fragment, {
                  children: l.jsx("section", {
                    id: "Liked",
                    children: l.jsx(_N, {}),
                  }),
                }),
              }),
              l.jsx(Gt, {
                exact: !0,
                path: "/Saved",
                element: l.jsx(l.Fragment, {
                  children: l.jsx("section", {
                    id: "Saved",
                    children: l.jsx(TN, {}),
                  }),
                }),
              }),
            ],
          }),
          l.jsx(C2, {}),
          l.jsx(wb, {}),
        ],
      }),
    }),
  });
}
Cl.createRoot(document.getElementById("root")).render(l.jsx(jN, {}));
