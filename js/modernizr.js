(window.Modernizr = (function (e, t, n) {
  var r,
    o,
    i = {},
    a = t.documentElement,
    c = "modernizr",
    s = t.createElement(c),
    l = s.style,
    u = t.createElement("input"),
    f = ":)",
    d = {}.toString,
    p = " -webkit- -moz- -o- -ms- ".split(" "),
    m = "Webkit Moz O ms".split(" "),
    h = "Webkit Moz O ms".toLowerCase().split(" "),
    g = "http://www.w3.org/2000/svg",
    v = {},
    y = {},
    b = {},
    E = [],
    w = E.slice,
    x = function (e, n, r, o) {
      var i,
        s,
        l,
        u,
        f = t.createElement("div"),
        d = t.body,
        p = d || t.createElement("body");
      if (parseInt(r, 10))
        for (; r--; )
          ((l = t.createElement("div")).id = o ? o[r] : c + (r + 1)),
            f.appendChild(l);
      return (
        (i = ["&#173;", '<style id="s', c, '">', e, "</style>"].join("")),
        (f.id = c),
        ((d ? f : p).innerHTML += i),
        p.appendChild(f),
        d ||
          ((p.style.background = ""),
          (p.style.overflow = "hidden"),
          (u = a.style.overflow),
          (a.style.overflow = "hidden"),
          a.appendChild(p)),
        (s = n(f, e)),
        d
          ? f.parentNode.removeChild(f)
          : (p.parentNode.removeChild(p), (a.style.overflow = u)),
        !!s
      );
    },
    S = (function () {
      var e = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img",
      };
      return function (r, o) {
        o = o || t.createElement(e[r] || "div");
        var i = (r = "on" + r) in o;
        return (
          i ||
            (o.setAttribute || (o = t.createElement("div")),
            o.setAttribute &&
              o.removeAttribute &&
              (o.setAttribute(r, ""),
              (i = T(o[r], "function")),
              T(o[r], "undefined") || (o[r] = n),
              o.removeAttribute(r))),
          (o = null),
          i
        );
      };
    })(),
    C = {}.hasOwnProperty;
  function k(e) {
    l.cssText = e;
  }
  function T(e, t) {
    return typeof e === t;
  }
  function j(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function N(e, t) {
    for (var r in e) {
      var o = e[r];
      if (!j(o, "-") && l[o] !== n) return "pfx" != t || o;
    }
    return !1;
  }
  function P(e, t, r) {
    var o = e.charAt(0).toUpperCase() + e.slice(1),
      i = (e + " " + m.join(o + " ") + o).split(" ");
    return T(t, "string") || T(t, "undefined")
      ? N(i, t)
      : (function (e, t, r) {
          for (var o in e) {
            var i = t[e[o]];
            if (i !== n)
              return !1 === r ? e[o] : T(i, "function") ? i.bind(r || t) : i;
          }
          return !1;
        })((i = (e + " " + h.join(o + " ") + o).split(" ")), t, r);
  }
  for (var M in ((o =
    T(C, "undefined") || T(C.call, "undefined")
      ? function (e, t) {
          return t in e && T(e.constructor.prototype[t], "undefined");
        }
      : function (e, t) {
          return C.call(e, t);
        }),
  Function.prototype.bind ||
    (Function.prototype.bind = function (e) {
      var t = this;
      if ("function" != typeof t) throw new TypeError();
      var n = w.call(arguments, 1),
        r = function () {
          if (this instanceof r) {
            var o = function () {};
            o.prototype = t.prototype;
            var i = new o(),
              a = t.apply(i, n.concat(w.call(arguments)));
            return Object(a) === a ? a : i;
          }
          return t.apply(e, n.concat(w.call(arguments)));
        };
      return r;
    }),
  (v.flexbox = function () {
    return P("flexWrap");
  }),
  (v.canvas = function () {
    var e = t.createElement("canvas");
    return !(!e.getContext || !e.getContext("2d"));
  }),
  (v.canvastext = function () {
    return !(
      !i.canvas ||
      !T(t.createElement("canvas").getContext("2d").fillText, "function")
    );
  }),
  (v.webgl = function () {
    return !!e.WebGLRenderingContext;
  }),
  (v.touch = function () {
    var n;
    return (
      "ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch)
        ? (n = !0)
        : x(
            [
              "@media (",
              p.join("touch-enabled),("),
              c,
              ")",
              "{#modernizr{top:9px;position:absolute}}",
            ].join(""),
            function (e) {
              n = 9 === e.offsetTop;
            }
          ),
      n
    );
  }),
  (v.geolocation = function () {
    return "geolocation" in navigator;
  }),
  (v.postmessage = function () {
    return !!e.postMessage;
  }),
  (v.websqldatabase = function () {
    return !!e.openDatabase;
  }),
  (v.indexedDB = function () {
    return !!P("indexedDB", e);
  }),
  (v.hashchange = function () {
    return S("hashchange", e) && (t.documentMode === n || t.documentMode > 7);
  }),
  (v.history = function () {
    return !(!e.history || !history.pushState);
  }),
  (v.draganddrop = function () {
    var e = t.createElement("div");
    return "draggable" in e || ("ondragstart" in e && "ondrop" in e);
  }),
  (v.websockets = function () {
    return "WebSocket" in e || "MozWebSocket" in e;
  }),
  (v.rgba = function () {
    return (
      k("background-color:rgba(150,255,150,.5)"), j(l.backgroundColor, "rgba")
    );
  }),
  (v.hsla = function () {
    return (
      k("background-color:hsla(120,40%,100%,.5)"),
      j(l.backgroundColor, "rgba") || j(l.backgroundColor, "hsla")
    );
  }),
  (v.multiplebgs = function () {
    return (
      k("background:url(https://),url(https://),red url(https://)"),
      /(url\s*\(.*?){3}/.test(l.background)
    );
  }),
  (v.backgroundsize = function () {
    return P("backgroundSize");
  }),
  (v.borderimage = function () {
    return P("borderImage");
  }),
  (v.borderradius = function () {
    return P("borderRadius");
  }),
  (v.boxshadow = function () {
    return P("boxShadow");
  }),
  (v.textshadow = function () {
    return "" === t.createElement("div").style.textShadow;
  }),
  (v.opacity = function () {
    var e, t;
    return (
      (e = "opacity:.55"),
      k(p.join(e + ";") + (t || "")),
      /^0.55$/.test(l.opacity)
    );
  }),
  (v.cssanimations = function () {
    return P("animationName");
  }),
  (v.csscolumns = function () {
    return P("columnCount");
  }),
  (v.cssgradients = function () {
    var e = "background-image:";
    return (
      k(
        (
          e +
          "-webkit- "
            .split(" ")
            .join(
              "gradient(linear,left top,right bottom,from(#9f9),to(white));" + e
            ) +
          p.join("linear-gradient(left top,#9f9, white);" + e)
        ).slice(0, -e.length)
      ),
      j(l.backgroundImage, "gradient")
    );
  }),
  (v.cssreflections = function () {
    return P("boxReflect");
  }),
  (v.csstransforms = function () {
    return !!P("transform");
  }),
  (v.csstransforms3d = function () {
    var e = !!P("perspective");
    return (
      e &&
        "webkitPerspective" in a.style &&
        x(
          "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
          function (t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight;
          }
        ),
      e
    );
  }),
  (v.csstransitions = function () {
    return P("transition");
  }),
  (v.fontface = function () {
    var e;
    return (
      x('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
        var o = t.getElementById("smodernizr"),
          i = o.sheet || o.styleSheet,
          a = i
            ? i.cssRules && i.cssRules[0]
              ? i.cssRules[0].cssText
              : i.cssText || ""
            : "";
        e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0]);
      }),
      e
    );
  }),
  (v.generatedcontent = function () {
    var e;
    return (
      x(
        [
          "#",
          c,
          "{font:0/0 a}#",
          c,
          ':after{content:"',
          f,
          '";visibility:hidden;font:3px/1 a}',
        ].join(""),
        function (t) {
          e = t.offsetHeight >= 3;
        }
      ),
      e
    );
  }),
  (v.video = function () {
    var e = t.createElement("video"),
      n = !1;
    try {
      (n = !!e.canPlayType) &&
        (((n = new Boolean(n)).ogg = e
          .canPlayType('video/ogg; codecs="theora"')
          .replace(/^no$/, "")),
        (n.h264 = e
          .canPlayType('video/mp4; codecs="avc1.42E01E"')
          .replace(/^no$/, "")),
        (n.webm = e
          .canPlayType('video/webm; codecs="vp8, vorbis"')
          .replace(/^no$/, "")));
    } catch (e) {}
    return n;
  }),
  (v.audio = function () {
    var e = t.createElement("audio"),
      n = !1;
    try {
      (n = !!e.canPlayType) &&
        (((n = new Boolean(n)).ogg = e
          .canPlayType('audio/ogg; codecs="vorbis"')
          .replace(/^no$/, "")),
        (n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, "")),
        (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
        (n.m4a = (
          e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
        ).replace(/^no$/, "")));
    } catch (e) {}
    return n;
  }),
  (v.localstorage = function () {
    try {
      return localStorage.setItem(c, c), localStorage.removeItem(c), !0;
    } catch (e) {
      return !1;
    }
  }),
  (v.sessionstorage = function () {
    try {
      return sessionStorage.setItem(c, c), sessionStorage.removeItem(c), !0;
    } catch (e) {
      return !1;
    }
  }),
  (v.webworkers = function () {
    return !!e.Worker;
  }),
  (v.applicationcache = function () {
    return !!e.applicationCache;
  }),
  (v.svg = function () {
    return !!t.createElementNS && !!t.createElementNS(g, "svg").createSVGRect;
  }),
  (v.inlinesvg = function () {
    var e = t.createElement("div");
    return (
      (e.innerHTML = "<svg/>"), (e.firstChild && e.firstChild.namespaceURI) == g
    );
  }),
  (v.smil = function () {
    return (
      !!t.createElementNS &&
      /SVGAnimate/.test(d.call(t.createElementNS(g, "animate")))
    );
  }),
  (v.svgclippaths = function () {
    return (
      !!t.createElementNS &&
      /SVGClipPath/.test(d.call(t.createElementNS(g, "clipPath")))
    );
  }),
  v))
    o(v, M) &&
      ((r = M.toLowerCase()), (i[r] = v[M]()), E.push((i[r] ? "" : "no-") + r));
  return (
    i.input ||
      ((i.input = (function (n) {
        for (var r = 0, o = n.length; r < o; r++) b[n[r]] = !!(n[r] in u);
        return (
          b.list &&
            (b.list = !(
              !t.createElement("datalist") || !e.HTMLDataListElement
            )),
          b
        );
      })(
        "autocomplete autofocus list placeholder max min multiple pattern required step".split(
          " "
        )
      )),
      (i.inputtypes = (function (e) {
        for (var r, o, i, c = 0, s = e.length; c < s; c++)
          u.setAttribute("type", (o = e[c])),
            (r = "text" !== u.type) &&
              ((u.value = f),
              (u.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(o) && u.style.WebkitAppearance !== n
                ? (a.appendChild(u),
                  (r =
                    (i = t.defaultView).getComputedStyle &&
                    "textfield" !==
                      i.getComputedStyle(u, null).WebkitAppearance &&
                    0 !== u.offsetHeight),
                  a.removeChild(u))
                : /^(search|tel)$/.test(o) ||
                  (r = /^(url|email)$/.test(o)
                    ? u.checkValidity && !1 === u.checkValidity()
                    : u.value != f)),
            (y[e[c]] = !!r);
        return y;
      })(
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        )
      ))),
    (i.addTest = function (e, t) {
      if ("object" == typeof e) for (var r in e) o(e, r) && i.addTest(r, e[r]);
      else {
        if (((e = e.toLowerCase()), i[e] !== n)) return i;
        (t = "function" == typeof t ? t() : t),
          (a.className += " " + (t ? "" : "no-") + e),
          (i[e] = t);
      }
      return i;
    }),
    k(""),
    (s = u = null),
    (function (e, t) {
      var n,
        r,
        o = e.html5 || {},
        i =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        a =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        c = "_html5shiv",
        s = 0,
        l = {};
      function u() {
        var e = m.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function f(e) {
        var t = l[e[c]];
        return t || ((t = {}), s++, (e[c] = s), (l[s] = t)), t;
      }
      function d(e, n, o) {
        return (
          n || (n = t),
          r
            ? n.createElement(e)
            : (o || (o = f(n)),
              !(c = o.cache[e]
                ? o.cache[e].cloneNode()
                : a.test(e)
                ? (o.cache[e] = o.createElem(e)).cloneNode()
                : o.createElem(e)).canHaveChildren ||
              i.test(e) ||
              c.tagUrn
                ? c
                : o.frag.appendChild(c))
        );
        var c;
      }
      function p(e) {
        e || (e = t);
        var o = f(e);
        return (
          !m.shivCSS ||
            n ||
            o.hasCSS ||
            (o.hasCSS = !!(function (e, t) {
              var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
              return (
                (n.innerHTML = "x<style>" + t + "</style>"),
                r.insertBefore(n.lastChild, r.firstChild)
              );
            })(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          r ||
            (function (e, t) {
              t.cache ||
                ((t.cache = {}),
                (t.createElem = e.createElement),
                (t.createFrag = e.createDocumentFragment),
                (t.frag = t.createFrag())),
                (e.createElement = function (n) {
                  return m.shivMethods ? d(n, e, t) : t.createElem(n);
                }),
                (e.createDocumentFragment = Function(
                  "h,f",
                  "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                    u()
                      .join()
                      .replace(/[\w\-]+/g, function (e) {
                        return (
                          t.createElem(e),
                          t.frag.createElement(e),
                          'c("' + e + '")'
                        );
                      }) +
                    ");return n}"
                )(m, t.frag));
            })(e, o),
          e
        );
      }
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (n = "hidden" in e),
            (r =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  void 0 === e.cloneNode ||
                  void 0 === e.createDocumentFragment ||
                  void 0 === e.createElement
                );
              })());
        } catch (e) {
          (n = !0), (r = !0);
        }
      })();
      var m = {
        elements:
          o.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== o.shivCSS,
        supportsUnknownElements: r,
        shivMethods: !1 !== o.shivMethods,
        type: "default",
        shivDocument: p,
        createElement: d,
        createDocumentFragment: function (e, n) {
          if ((e || (e = t), r)) return e.createDocumentFragment();
          for (
            var o = (n = n || f(e)).frag.cloneNode(),
              i = 0,
              a = u(),
              c = a.length;
            i < c;
            i++
          )
            o.createElement(a[i]);
          return o;
        },
      };
      (e.html5 = m), p(t);
    })(this, t),
    (i._version = "2.8.3"),
    (i._prefixes = p),
    (i._domPrefixes = h),
    (i._cssomPrefixes = m),
    (i.hasEvent = S),
    (i.testProp = function (e) {
      return N([e]);
    }),
    (i.testAllProps = P),
    (i.testStyles = x),
    (i.prefixed = function (e, t, n) {
      return t ? P(e, t, n) : P(e, "pfx");
    }),
    (a.className =
      a.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + E.join(" ")),
    i
  );
})(this, this.document)),
  (function (e, t, n) {
    function r(e) {
      return "[object Function]" == g.call(e);
    }
    function o(e) {
      return "string" == typeof e;
    }
    function i() {}
    function a(e) {
      return !e || "loaded" == e || "complete" == e || "uninitialized" == e;
    }
    function c() {
      var e = v.shift();
      (y = 1),
        e
          ? e.t
            ? m(function () {
                ("c" == e.t
                  ? d.injectCss
                  : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1);
              }, 0)
            : (e(), c())
          : (y = 0);
    }
    function s(e, n, r, o, i, s, l) {
      function u(t) {
        if (
          !p &&
          a(f.readyState) &&
          ((b.r = p = 1),
          !y && c(),
          (f.onload = f.onreadystatechange = null),
          t)
        )
          for (var r in ("img" != e &&
            m(function () {
              w.removeChild(f);
            }, 50),
          T[n]))
            T[n].hasOwnProperty(r) && T[n][r].onload();
      }
      l = l || d.errorTimeout;
      var f = t.createElement(e),
        p = 0,
        g = 0,
        b = { t: r, s: n, e: i, a: s, x: l };
      1 === T[n] && ((g = 1), (T[n] = [])),
        "object" == e ? (f.data = n) : ((f.src = n), (f.type = e)),
        (f.width = f.height = "0"),
        (f.onerror =
          f.onload =
          f.onreadystatechange =
            function () {
              u.call(this, g);
            }),
        v.splice(o, 0, b),
        "img" != e &&
          (g || 2 === T[n]
            ? (w.insertBefore(f, E ? null : h), m(u, l))
            : T[n].push(f));
    }
    function l(e, t, n, r, i) {
      return (
        (y = 0),
        (t = t || "j"),
        o(e)
          ? s("c" == t ? S : x, e, t, this.i++, n, r, i)
          : (v.splice(this.i++, 0, e), 1 == v.length && c()),
        this
      );
    }
    function u() {
      var e = d;
      return (e.loader = { load: l, i: 0 }), e;
    }
    var f,
      d,
      p = t.documentElement,
      m = e.setTimeout,
      h = t.getElementsByTagName("script")[0],
      g = {}.toString,
      v = [],
      y = 0,
      b = "MozAppearance" in p.style,
      E = b && !!t.createRange().compareNode,
      w = E ? p : h.parentNode,
      x =
        ((p = e.opera && "[object Opera]" == g.call(e.opera)),
        (p = !!t.attachEvent && !p),
        b ? "object" : p ? "script" : "img"),
      S = p ? "script" : x,
      C =
        Array.isArray ||
        function (e) {
          return "[object Array]" == g.call(e);
        },
      k = [],
      T = {},
      j = {
        timeout: function (e, t) {
          return t.length && (e.timeout = t[0]), e;
        },
      };
    ((d = function (e) {
      function t(e, t, o, i, a) {
        var c = (function (e) {
            e = e.split("!");
            var t,
              n,
              r,
              o = k.length,
              i = e.pop(),
              a = e.length;
            for (i = { url: i, origUrl: i, prefixes: e }, n = 0; n < a; n++)
              (r = e[n].split("=")), (t = j[r.shift()]) && (i = t(i, r));
            for (n = 0; n < o; n++) i = k[n](i);
            return i;
          })(e),
          s = c.autoCallback;
        c.url.split(".").pop().split("?").shift(),
          c.bypass ||
            (t &&
              (t = r(t)
                ? t
                : t[e] || t[i] || t[e.split("/").pop().split("?")[0]]),
            c.instead
              ? c.instead(e, t, o, i, a)
              : (T[c.url] ? (c.noexec = !0) : (T[c.url] = 1),
                o.load(
                  c.url,
                  c.forceCSS ||
                    (!c.forceJS &&
                      "css" == c.url.split(".").pop().split("?").shift())
                    ? "c"
                    : n,
                  c.noexec,
                  c.attrs,
                  c.timeout
                ),
                (r(t) || r(s)) &&
                  o.load(function () {
                    u(),
                      t && t(c.origUrl, a, i),
                      s && s(c.origUrl, a, i),
                      (T[c.url] = 2);
                  })));
      }
      function a(e, n) {
        function a(e, i) {
          if (e) {
            if (o(e))
              i ||
                (f = function () {
                  var e = [].slice.call(arguments);
                  d.apply(this, e), p();
                }),
                t(e, f, n, 0, l);
            else if (Object(e) === e)
              for (s in ((c = (function () {
                var t,
                  n = 0;
                for (t in e) e.hasOwnProperty(t) && n++;
                return n;
              })()),
              e))
                e.hasOwnProperty(s) &&
                  (!i &&
                    !--c &&
                    (r(f)
                      ? (f = function () {
                          var e = [].slice.call(arguments);
                          d.apply(this, e), p();
                        })
                      : (f[s] = (function (e) {
                          return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), p();
                          };
                        })(d[s]))),
                  t(e[s], f, n, s, l));
          } else !i && p();
        }
        var c,
          s,
          l = !!e.test,
          u = e.load || e.both,
          f = e.callback || i,
          d = f,
          p = e.complete || i;
        a(l ? e.yep : e.nope, !!u), u && a(u);
      }
      var c,
        s,
        l = this.yepnope.loader;
      if (o(e)) t(e, 0, l, 0);
      else if (C(e))
        for (c = 0; c < e.length; c++)
          o((s = e[c]))
            ? t(s, 0, l, 0)
            : C(s)
            ? d(s)
            : Object(s) === s && a(s, l);
      else Object(e) === e && a(e, l);
    }).addPrefix = function (e, t) {
      j[e] = t;
    }),
      (d.addFilter = function (e) {
        k.push(e);
      }),
      (d.errorTimeout = 1e4),
      null == t.readyState &&
        t.addEventListener &&
        ((t.readyState = "loading"),
        t.addEventListener(
          "DOMContentLoaded",
          (f = function () {
            t.removeEventListener("DOMContentLoaded", f, 0),
              (t.readyState = "complete");
          }),
          0
        )),
      (e.yepnope = u()),
      (e.yepnope.executeStack = c),
      (e.yepnope.injectJs = function (e, n, r, o, s, l) {
        var u,
          f,
          p = t.createElement("script");
        o = o || d.errorTimeout;
        for (f in ((p.src = e), r)) p.setAttribute(f, r[f]);
        (n = l ? c : n || i),
          (p.onreadystatechange = p.onload =
            function () {
              !u &&
                a(p.readyState) &&
                ((u = 1), n(), (p.onload = p.onreadystatechange = null));
            }),
          m(function () {
            u || ((u = 1), n(1));
          }, o),
          s ? p.onload() : h.parentNode.insertBefore(p, h);
      }),
      (e.yepnope.injectCss = function (e, n, r, o, a, s) {
        var l;
        (o = t.createElement("link")), (n = s ? c : n || i);
        for (l in ((o.href = e),
        (o.rel = "stylesheet"),
        (o.type = "text/css"),
        r))
          o.setAttribute(l, r[l]);
        a || (h.parentNode.insertBefore(o, h), m(n, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });
