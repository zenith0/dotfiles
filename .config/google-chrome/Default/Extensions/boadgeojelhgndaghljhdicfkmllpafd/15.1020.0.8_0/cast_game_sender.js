(function() {var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var g = g || {};
g.global = this;
g.V = function(a) {
  return void 0 !== a;
};
g.bb = function(a, c, d) {
  a = a.split(".");
  d = d || g.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && g.V(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
g.si = function(a, c) {
  g.bb(a, c);
};
g.Z = !0;
g.rh = "en";
g.Ta = !0;
g.re = !1;
g.pd = !g.Z;
g.Kb = !1;
g.tj = function(a) {
  g.tc(a);
};
g.tc = function(a, c) {
  g.bb(a, c);
};
g.Je = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
g.module = function(a) {
  if (!g.isString(a) || !a || -1 == a.search(g.Je)) {
    throw Error("Invalid module identifier");
  }
  if (!g.Af()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (g.G.nb) {
    throw Error("goog.module may only be called once per module.");
  }
  g.G.nb = a;
};
g.module.get = function(a) {
  return g.module.rf(a);
};
g.module.rf = function() {
};
g.G = null;
g.Af = function() {
  return null != g.G;
};
g.module.Za = function() {
  g.G.Za = !0;
};
g.Cj = function(a) {
  if (g.pd) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
g.xi = function() {
};
g.Hi = function(a, c) {
  for (var d = a.split("."), e = c || g.global, f;f = d.shift();) {
    if (g.o(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
g.Li = function(a, c) {
  var d = c || g.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
g.Kh = function(a, c, d, e) {
  if (g.Ib) {
    var f;
    a = a.replace(/\\/g, "/");
    for (var h = g.C, k = 0;f = c[k];k++) {
      h.ia[f] = a, h.ob[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in h.requires || (h.requires[a] = {}), h.requires[a][c] = !0;
    }
  }
};
g.Uj = !1;
g.eh = !0;
g.hj = function(a) {
  g.global.console && g.global.console.error(a);
};
g.require = function() {
};
g.X = "";
g.Mc = function() {
};
g.Jh = function() {
  throw Error("unimplemented abstract method");
};
g.Lh = function(a) {
  a.Di = function() {
    if (a.Gc) {
      return a.Gc;
    }
    g.Z && (g.Hc[g.Hc.length] = a);
    return a.Gc = new a;
  };
};
g.Hc = [];
g.Gd = !0;
g.oe = g.Z;
g.Jf = {};
g.Ib = !1;
g.Ib && (g.C = {ob:{}, ia:{}, requires:{}, ad:{}, Ja:{}, ta:{}}, g.Ec = function() {
  var a = g.global.document;
  return null != a && "write" in a;
}, g.kf = function() {
  if (g.V(g.global.jd)) {
    g.X = g.global.jd;
  } else {
    if (g.Ec()) {
      for (var a = g.global.document.getElementsByTagName("SCRIPT"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          g.X = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, g.gb = function(a, c) {
  (g.global.Yg || g.Rg)(a, c) && (g.C.Ja[a] = !0);
}, g.Dd = !(g.global.atob || !g.global.document || !g.global.document.all), g.wf = function(a) {
  g.gb("", 'goog.retrieveAndExecModule_("' + a + '");') && (g.C.Ja[a] = !0);
}, g.pb = [], g.Wj = function(a, c) {
  return g.Gd && g.V(g.global.JSON) ? "goog.loadModule(" + g.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, g.If = function() {
  var a = g.pb.length;
  if (0 < a) {
    var c = g.pb;
    g.pb = [];
    for (var d = 0;d < a;d++) {
      g.Lc(c[d]);
    }
  }
}, g.jj = function(a) {
  g.Ic(a) && g.Pe(a) && g.Lc(g.X + g.fb(a));
}, g.Ic = function(a) {
  return (a = g.fb(a)) && g.C.ob[a] ? g.X + a in g.C.ta : !1;
}, g.Pe = function(a) {
  if ((a = g.fb(a)) && a in g.C.requires) {
    for (var c in g.C.requires[a]) {
      if (!g.Df(c) && !g.Ic(c)) {
        return !1;
      }
    }
  }
  return !0;
}, g.Lc = function(a) {
  if (a in g.C.ta) {
    var c = g.C.ta[a];
    delete g.C.ta[a];
    g.tf(c);
  }
}, g.gj = function(a) {
  g.zg(a);
}, g.fj = function(a) {
  var c = g.G;
  try {
    g.G = {nb:void 0, Za:!1};
    var d;
    if (g.isFunction(a)) {
      d = a.call(g.global, {});
    } else {
      if (g.isString(a)) {
        d = g.Hf.call(g.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = g.G.nb;
    if (!g.isString(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    g.G.Za ? g.tc(e, d) : g.oe && Object.seal && Object.seal(d);
    g.Jf[e] = d;
  } finally {
    g.G = c;
  }
}, g.Hf = function(a) {
  eval(a);
  return {};
}, g.Qg = function(a) {
  g.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
}, g.Qe = function(a) {
  var c = g.global.document, d = c.createElement("script");
  d.type = "text/javascript";
  d.src = a;
  d.defer = !1;
  d.async = !1;
  c.head.appendChild(d);
}, g.Rg = function(a, c) {
  if (g.Ec()) {
    var d = g.global.document;
    if (!g.Kb && "complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = g.Dd;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++g.Kc + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : g.Kb ? g.Qe(a) : g.Qg(a) : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return !0;
  }
  return !1;
}, g.Kc = 0, g.qj = function(a, c) {
  "complete" == a.readyState && g.Kc == c && g.If();
  return !0;
}, g.Xj = function(a) {
  function c(a) {
    if (!(a in f.Ja || a in f.ad)) {
      f.ad[a] = !0;
      if (a in f.requires) {
        for (var h in f.requires[a]) {
          if (!g.Df(h)) {
            if (h in f.ia) {
              c(f.ia[h]);
            } else {
              throw Error("Undefined nameToPath for " + h);
            }
          }
        }
      }
      a in e || (e[a] = !0, d.push(a));
    }
  }
  var d = [], e = {}, f = g.C;
  c(a);
  for (a = 0;a < d.length;a++) {
    var h = d[a];
    g.C.Ja[h] = !0;
  }
  var k = g.G;
  g.G = null;
  for (a = 0;a < d.length;a++) {
    if (h = d[a]) {
      f.ob[h] ? g.wf(g.X + h) : g.gb(g.X + h);
    } else {
      throw g.G = k, Error("Undefined script input");
    }
  }
  g.G = k;
}, g.fb = function(a) {
  return a in g.C.ia ? g.C.ia[a] : null;
}, g.kf(), g.global.Zg || g.gb(g.X + "deps.js"));
g.mj = function(a) {
  a = a.split("/");
  for (var c = 0;c < a.length;) {
    "." == a[c] ? a.splice(c, 1) : c && ".." == a[c] && a[c - 1] && ".." != a[c - 1] ? a.splice(--c, 2) : c++;
  }
  return a.join("/");
};
g.ej = function(a) {
  if (g.global.kd) {
    return g.global.kd(a);
  }
  var c = new g.global.XMLHttpRequest;
  c.open("get", a, !1);
  c.send();
  return c.responseText;
};
g.zg = function() {
};
g.I = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
g.Cf = function(a) {
  return null === a;
};
g.o = function(a) {
  return null != a;
};
g.isArray = function(a) {
  return "array" == g.I(a);
};
g.za = function(a) {
  var c = g.I(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
g.Ui = function(a) {
  return g.isObject(a) && "function" == typeof a.getFullYear;
};
g.isString = function(a) {
  return "string" == typeof a;
};
g.ha = function(a) {
  return "boolean" == typeof a;
};
g.isNumber = function(a) {
  return "number" == typeof a;
};
g.isFunction = function(a) {
  return "function" == g.I(a);
};
g.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
g.Cc = function(a) {
  return a[g.W] || (a[g.W] = ++g.Kg);
};
g.Mi = function(a) {
  return !!a[g.W];
};
g.yg = function(a) {
  "removeAttribute" in a && a.removeAttribute(g.W);
  try {
    delete a[g.W];
  } catch (c) {
  }
};
g.W = "closure_uid_" + (1E9 * Math.random() >>> 0);
g.Kg = 0;
g.Ci = g.Cc;
g.xj = g.yg;
g.$e = function(a) {
  var c = g.I(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.$e(a[d]);
    }
    return c;
  }
  return a;
};
g.Te = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
g.Se = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
g.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.bind = g.Te : g.bind = g.Se;
  return g.bind.apply(null, arguments);
};
g.ag = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
g.kj = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
g.now = g.Ta && Date.now || function() {
  return +new Date;
};
g.tf = function(a) {
  if (g.global.execScript) {
    g.global.execScript(a, "JavaScript");
  } else {
    if (g.global.eval) {
      if (null == g.va) {
        if (g.global.eval("var _evalTest_ = 1;"), "undefined" != typeof g.global._evalTest_) {
          try {
            delete g.global._evalTest_;
          } catch (e) {
          }
          g.va = !0;
        } else {
          g.va = !1;
        }
      }
      if (g.va) {
        g.global.eval(a);
      } else {
        var c = g.global.document, d = c.createElement("SCRIPT");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.body.appendChild(d);
        c.body.removeChild(d);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
g.va = null;
g.Bi = function(a, c) {
  var d = function(a) {
    return g.wc[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = g.wc ? "BY_WHOLE" == g.gf ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
g.zj = function(a, c) {
  g.wc = a;
  g.gf = c;
};
g.Fi = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return null != c && e in c ? c[e] : a;
  }));
  return a;
};
g.Gi = function(a) {
  return a;
};
g.c = function(a, c, d) {
  g.bb(a, c, d);
};
g.h = function(a, c, d) {
  a[c] = d;
};
g.hb = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Ia = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.Re = function(a, d, h) {
    for (var k = Array(arguments.length - 2), m = 2;m < arguments.length;m++) {
      k[m - 2] = arguments[m];
    }
    return c.prototype[d].apply(a, k);
  };
};
g.Re = function(a, c, d) {
  var e = arguments.callee.caller;
  if (g.re || g.Z && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Ia) {
    for (var f = Array(arguments.length - 1), h = 1;h < arguments.length;h++) {
      f[h - 1] = arguments[h];
    }
    return e.Ia.constructor.apply(a, f);
  }
  f = Array(arguments.length - 2);
  for (h = 2;h < arguments.length;h++) {
    f[h - 2] = arguments[h];
  }
  for (var h = !1, k = a.constructor;k;k = k.Ia && k.Ia.constructor) {
    if (k.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return k.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
g.scope = function(a) {
  a.call(g.global);
};
g.O = function(a, c) {
  var d = c.constructor, e = c.Fg;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = g.O.ef(d, a);
  a && g.hb(d, a);
  delete c.constructor;
  delete c.Fg;
  g.O.lc(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : g.O.lc(d, e));
  return d;
};
g.O.ne = g.Z;
g.O.ef = function(a, c) {
  if (g.O.ne && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[g.He]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[g.W] = c[g.W];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
g.O.Vb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.O.lc = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < g.O.Vb.length;e++) {
    d = g.O.Vb[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
g.Kj = function() {
};
g.He = "goog_defineClass_legacy_unsealable";
chrome.cast.Fb = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
g.c("chrome.cast.AutoJoinPolicy", chrome.cast.Fb);
chrome.cast.Jb = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
g.c("chrome.cast.DefaultActionPolicy", chrome.cast.Jb);
chrome.cast.Ka = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
g.c("chrome.cast.Capability", chrome.cast.Ka);
chrome.cast.K = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
g.c("chrome.cast.ErrorCode", chrome.cast.K);
chrome.cast.ke = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
g.c("chrome.cast.ReceiverAvailability", chrome.cast.ke);
chrome.cast.ue = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
g.c("chrome.cast.SenderPlatform", chrome.cast.ue);
chrome.cast.pa = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
g.c("chrome.cast.ReceiverType", chrome.cast.pa);
chrome.cast.rd = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
g.c("chrome.cast.DialAppState", chrome.cast.rd);
chrome.cast.je = {CAST:"cast", STOP:"stop"};
g.c("chrome.cast.ReceiverAction", chrome.cast.je);
chrome.cast.ga = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
g.c("chrome.cast.SessionStatus", chrome.cast.ga);
chrome.cast.VERSION = [1, 2];
g.c("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
g.c("chrome.cast.Error", chrome.cast.Error);
chrome.cast.te = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
g.c("chrome.cast.SenderApplication", chrome.cast.te);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
g.c("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Volume = function(a, c) {
  this.level = g.V(a) ? a : null;
  this.muted = g.V(c) ? c : null;
};
g.c("chrome.cast.Volume", chrome.cast.Volume);
var l = {m:{mh:"LAUNCH", fc:"STOP", dc:"SET_VOLUME", Ad:"GET_STATUS", zh:"RECEIVER_STATUS", Gh:"CONNECT", Hh:"CLOSE", ih:"GET_APP_AVAILABILITY", Ld:"LOAD", Md:"PAUSE", Sd:"SEEK", Nd:"PLAY", Sb:"STOP_MEDIA", Qb:"MEDIA_GET_STATUS", Rb:"MEDIA_SET_VOLUME", Kd:"EDIT_TRACKS_INFO", Pd:"QUEUE_LOAD", Od:"QUEUE_INSERT", Ma:"QUEUE_UPDATE", Qd:"QUEUE_REMOVE", Rd:"QUEUE_REORDER", jh:"INVALID_PLAYER_STATE", qh:"LOAD_FAILED", ph:"LOAD_CANCELLED", kh:"INVALID_REQUEST", Na:"MEDIA_STATUS", nh:"LAUNCH_ERROR", PING:"PING", 
wh:"PONG"}, Pa:{}};
l.Pa[l.m.Sb] = l.m.fc;
l.Pa[l.m.Rb] = l.m.dc;
l.Pa[l.m.Qb] = l.m.Ad;
l.fd = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
l.we = function(a) {
  this.type = l.m.fc;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.media.Ud = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
g.c("chrome.cast.media.MediaCommand", chrome.cast.media.Ud);
chrome.cast.media.L = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
g.c("chrome.cast.media.MetadataType", chrome.cast.media.L);
chrome.cast.media.ea = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
g.c("chrome.cast.media.PlayerState", chrome.cast.media.ea);
chrome.cast.media.Ra = {OFF:"REPEAT_OFF", ALL:"REPEAT_ALL", SINGLE:"REPEAT_SINGLE", ALL_AND_SHUFFLE:"REPEAT_ALL_AND_SHUFFLE"};
g.c("chrome.cast.media.RepeatMode", chrome.cast.media.Ra);
chrome.cast.media.me = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
g.c("chrome.cast.media.ResumeState", chrome.cast.media.me);
chrome.cast.media.Sa = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
g.c("chrome.cast.media.StreamType", chrome.cast.media.Sa);
chrome.cast.media.Ed = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
g.c("chrome.cast.media.IdleReason", chrome.cast.media.Ed);
chrome.cast.media.Fe = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
g.c("chrome.cast.media.TrackType", chrome.cast.media.Fe);
chrome.cast.media.Ce = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
g.c("chrome.cast.media.TextTrackType", chrome.cast.media.Ce);
chrome.cast.media.ye = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
g.c("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.ye);
chrome.cast.media.De = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
g.c("chrome.cast.media.TextTrackWindowType", chrome.cast.media.De);
chrome.cast.media.ze = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
g.c("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.ze);
chrome.cast.media.Ae = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
g.c("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Ae);
chrome.cast.media.Nb = function() {
  this.type = l.m.Qb;
  this.customData = null;
};
g.c("chrome.cast.media.GetStatusRequest", chrome.cast.media.Nb);
chrome.cast.media.Xb = function() {
  this.type = l.m.Md;
  this.customData = null;
};
g.c("chrome.cast.media.PauseRequest", chrome.cast.media.Xb);
chrome.cast.media.Yb = function() {
  this.type = l.m.Nd;
  this.customData = null;
};
g.c("chrome.cast.media.PlayRequest", chrome.cast.media.Yb);
chrome.cast.media.se = function() {
  this.type = l.m.Sd;
  this.customData = this.resumeState = this.currentTime = null;
};
g.c("chrome.cast.media.SeekRequest", chrome.cast.media.se);
chrome.cast.media.hc = function() {
  this.type = l.m.Sb;
  this.customData = null;
};
g.c("chrome.cast.media.StopRequest", chrome.cast.media.hc);
chrome.cast.media.Ke = function(a) {
  this.type = l.m.Rb;
  this.volume = a;
  this.customData = null;
};
g.c("chrome.cast.media.VolumeRequest", chrome.cast.media.Ke);
chrome.cast.media.Id = function(a) {
  this.type = l.m.Ld;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
g.c("chrome.cast.media.LoadRequest", chrome.cast.media.Id);
chrome.cast.media.xd = function(a, c) {
  this.type = l.m.Kd;
  this.requestId = null;
  this.activeTrackIds = a || null;
  this.textTrackStyle = c || null;
};
g.c("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.xd);
chrome.cast.media.ce = function(a) {
  this.type = l.m.Pd;
  this.sessionId = this.requestId = null;
  this.items = a;
  this.startIndex = 0;
  this.repeatMode = chrome.cast.media.Ra.OFF;
  this.customData = this.currentTime = null;
};
g.c("chrome.cast.media.QueueLoadRequest", chrome.cast.media.ce);
chrome.cast.media.Qa = function(a) {
  this.type = l.m.Od;
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = this.currentTime = this.currentItemIndex = this.currentItemId = this.insertBefore = null;
};
g.c("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.Qa);
chrome.cast.media.be = function(a) {
  this.item = a;
  this.customData = this.currentTime = this.insertBefore = null;
};
g.c("chrome.cast.media.QueueInsertAndPlayItemRequest", chrome.cast.media.be);
chrome.cast.media.de = function(a) {
  this.type = l.m.Ma;
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = null;
};
g.c("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.de);
chrome.cast.media.fa = function() {
  this.type = l.m.Ma;
  this.customData = this.currentTime = this.jump = this.currentItemId = this.sessionId = this.requestId = null;
};
g.c("chrome.cast.media.QueueJumpRequest", chrome.cast.media.fa);
chrome.cast.media.cc = function() {
  this.type = l.m.Ma;
  this.customData = this.repeatMode = this.sessionId = this.requestId = null;
};
g.c("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.cc);
chrome.cast.media.ac = function(a) {
  this.type = l.m.Qd;
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = null;
};
g.c("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.ac);
chrome.cast.media.bc = function(a) {
  this.type = l.m.Rd;
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = this.insertBefore = null;
};
g.c("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.bc);
chrome.cast.media.Bd = function() {
  this.metadataType = this.type = chrome.cast.media.L.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
g.c("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Bd);
chrome.cast.media.Wd = function() {
  this.metadataType = this.type = chrome.cast.media.L.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
g.c("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.Wd);
chrome.cast.media.Ge = function() {
  this.metadataType = this.type = chrome.cast.media.L.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
g.c("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Ge);
chrome.cast.media.Xd = function() {
  this.metadataType = this.type = chrome.cast.media.L.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
g.c("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.Xd);
chrome.cast.media.$d = function() {
  this.metadataType = this.type = chrome.cast.media.L.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
g.c("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.$d);
chrome.cast.media.Vd = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Sa.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
g.c("chrome.cast.media.MediaInfo", chrome.cast.media.Vd);
chrome.cast.media.$b = function(a) {
  this.itemId = null;
  this.media = a;
  this.autoplay = !0;
  this.startTime = 0;
  this.playbackDuration = null;
  this.preloadTime = 0;
  this.customData = this.activeTrackIds = null;
};
g.c("chrome.cast.media.QueueItem", chrome.cast.media.$b);
chrome.cast.media.f = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.ea.IDLE;
  this.currentTime = 0;
  this.lb = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Volume;
  this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
  this.repeatMode = chrome.cast.media.Ra.OFF;
  this.ya = this.mb = !1;
  this.ma = [];
};
g.c("chrome.cast.media.Media", chrome.cast.media.f);
chrome.cast.media.od = "CC1AD845";
g.c("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.od);
chrome.cast.media.timeout = {};
g.c("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
g.h(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.xa = 0;
g.h(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.xa);
chrome.cast.media.timeout.play = 0;
g.h(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
g.h(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
g.h(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
g.h(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.Ha = 0;
g.h(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.Ha);
chrome.cast.media.timeout.ua = 0;
g.h(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.ua);
chrome.cast.media.timeout.D = 0;
g.h(chrome.cast.media.timeout, "queue", chrome.cast.media.timeout.D);
chrome.cast.media.Ee = function(a, c) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
g.c("chrome.cast.media.Track", chrome.cast.media.Ee);
chrome.cast.media.Be = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
g.c("chrome.cast.media.TextTrackStyle", chrome.cast.media.Be);
chrome.cast.dd = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Fb.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Jb.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
g.c("chrome.cast.ApiConfig", chrome.cast.dd);
chrome.cast.ud = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
g.c("chrome.cast.DialRequest", chrome.cast.ud);
chrome.cast.sd = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
g.c("chrome.cast.DialLaunchData", chrome.cast.sd);
chrome.cast.td = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
g.c("chrome.cast.DialLaunchResponse", chrome.cast.td);
chrome.cast.ve = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Ka.VIDEO_OUT, chrome.cast.Ka.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.requestSession;
  this.language = null;
};
g.c("chrome.cast.SessionRequest", chrome.cast.ve);
chrome.cast.Receiver = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.pa.CAST;
  this.ipAddress = this.displayStatus = this.isActiveInput = null;
};
g.c("chrome.cast.Receiver", chrome.cast.Receiver);
chrome.cast.le = function(a, c) {
  this.statusText = a;
  this.appImages = c;
  this.showStop = null;
};
g.c("chrome.cast.ReceiverDisplayStatus", chrome.cast.le);
chrome.cast.j = function(a, c, d, e, f) {
  this.sessionId = a;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.ga.CONNECTED;
  this.transportId = "";
};
g.c("chrome.cast.Session", chrome.cast.j);
chrome.cast.j.Hb = "custom_receiver_session_id";
g.h(chrome.cast.j, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.j.Hb);
chrome.cast.timeout = {};
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.leaveSession = 3E3;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;
chrome.cast.Td = "mirror_app_id";
g.c("chrome.cast.MIRROR_APP_ID", chrome.cast.Td);
l.ed = function(a) {
  this.sessionRequest = a.sessionRequest;
  this.autoJoinPolicy = a.autoJoinPolicy;
  this.defaultActionPolicy = a.defaultActionPolicy;
  this.useCustomDialLaunch = !!a.customDialLaunchCallback;
  this.isTopLevelWindow = window.self == window.top;
};
l.gc = function(a, c) {
  this.type = l.m.dc;
  this.requestId = null;
  this.volume = a;
  this.expectedVolume = c || null;
};
g.debug = {};
g.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, g.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
g.hb(g.debug.Error, Error);
g.debug.Error.prototype.name = "CustomError";
g.xc = {};
g.xc.Zd = {vd:1, Ug:2, TEXT:3, Vg:4, gh:5, fh:6, xh:7, $g:8, ah:9, dh:10, bh:11, vh:12};
g.a = {};
g.a.La = !1;
g.a.zd = !1;
g.a.Ie = {Yd:"\u00a0"};
g.a.startsWith = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.a.endsWith = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
g.a.ei = function(a, c) {
  return 0 == g.a.pc(c, a.substr(0, c.length));
};
g.a.ci = function(a, c) {
  return 0 == g.a.pc(c, a.substr(a.length - c.length, c.length));
};
g.a.di = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.a.Gg = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
g.a.ji = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
g.a.jb = function(a) {
  return /^[\s\xa0]*$/.test(a);
};
g.a.Wi = function(a) {
  return 0 == a.length;
};
g.a.Jc = g.a.jb;
g.a.yf = function(a) {
  return g.a.jb(g.a.Kf(a));
};
g.a.Vi = g.a.yf;
g.a.Ti = function(a) {
  return !/[^\t\n\r ]/.test(a);
};
g.a.Ri = function(a) {
  return !/[^a-zA-Z]/.test(a);
};
g.a.Zi = function(a) {
  return !/[^0-9]/.test(a);
};
g.a.Si = function(a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
g.a.aj = function(a) {
  return " " == a;
};
g.a.bj = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
g.a.Ij = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
g.a.$h = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
g.a.oj = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
g.a.nj = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
g.a.ii = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
g.a.trim = g.Ta && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
g.a.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
g.a.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
g.a.pc = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
g.a.Oc = function(a, c, d) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!c) {
    return 1;
  }
  for (var e = a.toLowerCase().match(d), f = c.toLowerCase().match(d), h = Math.min(e.length, f.length), k = 0;k < h;k++) {
    d = e[k];
    var m = f[k];
    if (d != m) {
      return a = parseInt(d, 10), !isNaN(a) && (c = parseInt(m, 10), !isNaN(c) && a - c) ? a - c : d < m ? -1 : 1;
    }
  }
  return e.length != f.length ? e.length - f.length : a < c ? -1 : 1;
};
g.a.Pi = function(a, c) {
  return g.a.Oc(a, c, /\d+|\D+/g);
};
g.a.of = function(a, c) {
  return g.a.Oc(a, c, /\d+|\.\d+|\D+/g);
};
g.a.pj = g.a.of;
g.a.Tj = function(a) {
  return encodeURIComponent(String(a));
};
g.a.Sj = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
g.a.Nf = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
g.a.Dc = function(a, c) {
  if (c) {
    a = a.replace(g.a.Db, "&amp;").replace(g.a.Pb, "&lt;").replace(g.a.Mb, "&gt;").replace(g.a.Zb, "&quot;").replace(g.a.ec, "&#39;").replace(g.a.Ub, "&#0;"), g.a.La && (a = a.replace(g.a.Lb, "&#101;"));
  } else {
    if (!g.a.bd.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(g.a.Db, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(g.a.Pb, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(g.a.Mb, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(g.a.Zb, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(g.a.ec, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(g.a.Ub, "&#0;"));
    g.a.La && -1 != a.indexOf("e") && (a = a.replace(g.a.Lb, "&#101;"));
  }
  return a;
};
g.a.Db = /&/g;
g.a.Pb = /</g;
g.a.Mb = />/g;
g.a.Zb = /"/g;
g.a.ec = /'/g;
g.a.Ub = /\x00/g;
g.a.Lb = /e/g;
g.a.bd = g.a.La ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
g.a.Cb = function(a) {
  return g.a.contains(a, "&") ? !g.a.zd && "document" in g.global ? g.a.Yc(a) : g.a.Lg(a) : a;
};
g.a.Rj = function(a, c) {
  return g.a.contains(a, "&") ? g.a.Yc(a, c) : a;
};
g.a.Yc = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : g.global.document.createElement("div");
  return a.replace(g.a.Cd, function(a, c) {
    var k = d[a];
    if (k) {
      return k;
    }
    if ("#" == c.charAt(0)) {
      var m = Number("0" + c.substr(1));
      isNaN(m) || (k = String.fromCharCode(m));
    }
    k || (e.innerHTML = a + " ", k = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = k;
  });
};
g.a.Lg = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
g.a.Cd = /&([^;\s<&]+);?/g;
g.a.Vj = function(a, c) {
  return g.a.Nf(a.replace(/  /g, " &#160;"), c);
};
g.a.sj = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + g.a.Ie.Yd);
};
g.a.Jj = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
g.a.truncate = function(a, c, d) {
  d && (a = g.a.Cb(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = g.a.Dc(a));
  return a;
};
g.a.Qj = function(a, c, d, e) {
  d && (a = g.a.Cb(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = g.a.Dc(a));
  return a;
};
g.a.Ab = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\", "<":"<"};
g.a.Ba = {"'":"\\'"};
g.a.quote = function(a) {
  a = String(a);
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = g.a.Ab[e] || (31 < f && 127 > f ? e : g.a.yc(e));
  }
  c.push('"');
  return c.join("");
};
g.a.ui = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = g.a.yc(a.charAt(d));
  }
  return c.join("");
};
g.a.yc = function(a) {
  if (a in g.a.Ba) {
    return g.a.Ba[a];
  }
  if (a in g.a.Ab) {
    return g.a.Ba[a] = g.a.Ab[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return g.a.Ba[a] = c;
};
g.a.contains = function(a, c) {
  return -1 != a.indexOf(c);
};
g.a.bi = function(a, c) {
  return g.a.contains(a.toLowerCase(), c.toLowerCase());
};
g.a.oi = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
g.a.ja = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
g.a.remove = function(a, c) {
  var d = new RegExp(g.a.qb(c), "");
  return a.replace(d, "");
};
g.a.removeAll = function(a, c) {
  var d = new RegExp(g.a.qb(c), "g");
  return a.replace(d, "");
};
g.a.qb = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
g.a.repeat = String.prototype.repeat ? function(a, c) {
  return a.repeat(c);
} : function(a, c) {
  return Array(c + 1).join(a);
};
g.a.rj = function(a, c, d) {
  a = g.V(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return g.a.repeat("0", Math.max(0, c - d)) + a;
};
g.a.Kf = function(a) {
  return null == a ? "" : String(a);
};
g.a.Zh = function(a) {
  return Array.prototype.join.call(arguments, "");
};
g.a.Ii = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.now()).toString(36);
};
g.a.li = function(a, c) {
  for (var d = 0, e = g.a.trim(String(a)).split("."), f = g.a.trim(String(c)).split("."), h = Math.max(e.length, f.length), k = 0;0 == d && k < h;k++) {
    var m = e[k] || "", n = f[k] || "", p = /(\d*)(\D*)/g, t = /(\d*)(\D*)/g;
    do {
      var q = p.exec(m) || ["", "", ""], r = t.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == r[0].length) {
        break;
      }
      d = g.a.Ya(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || g.a.Ya(0 == q[2].length, 0 == r[2].length) || g.a.Ya(q[2], r[2]);
    } while (0 == d);
  }
  return d;
};
g.a.Ya = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
g.a.Ni = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d) >>> 0;
  }
  return c;
};
g.a.Mg = 2147483648 * Math.random() | 0;
g.a.ri = function() {
  return "goog_" + g.a.Mg++;
};
g.a.Mj = function(a) {
  var c = Number(a);
  return 0 == c && g.a.jb(a) ? NaN : c;
};
g.a.Yi = function(a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
g.a.cj = function(a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
g.a.Lj = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
g.a.Oj = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
g.a.Pj = function(a, c) {
  var d = g.isString(c) ? g.a.qb(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
g.a.ai = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
g.a.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return g.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
g.a.Gj = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
g.a.ti = function(a, c) {
  var d = [], e = [];
  if (a == c) {
    return 0;
  }
  if (!a.length || !c.length) {
    return Math.max(a.length, c.length);
  }
  for (var f = 0;f < c.length + 1;f++) {
    d[f] = f;
  }
  for (f = 0;f < a.length;f++) {
    e[0] = f + 1;
    for (var h = 0;h < c.length;h++) {
      e[h + 1] = Math.min(e[h] + 1, d[h + 1] + 1, d[h] + (a[f] != c[h]));
    }
    for (h = 0;h < d.length;h++) {
      d[h] = e[h];
    }
  }
  return e[c.length];
};
g.g = {};
g.g.J = g.Z;
g.g.na = function(a, c) {
  c.unshift(a);
  g.debug.Error.call(this, g.a.Gg.apply(null, c));
  c.shift();
};
g.hb(g.g.na, g.debug.Error);
g.g.na.prototype.name = "AssertionError";
g.g.nd = function(a) {
  throw a;
};
g.g.ab = g.g.nd;
g.g.S = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), h = e
  } else {
    a && (f += ": " + a, h = c);
  }
  a = new g.g.na("" + f, h || []);
  g.g.ab(a);
};
g.g.Aj = function(a) {
  g.g.J && (g.g.ab = a);
};
g.g.assert = function(a, c, d) {
  g.g.J && !a && g.g.S("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.jf = function(a, c) {
  g.g.J && g.g.ab(new g.g.na("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
g.g.Rh = function(a, c, d) {
  g.g.J && !g.isNumber(a) && g.g.S("Expected number but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.Uh = function(a, c, d) {
  g.g.J && !g.isString(a) && g.g.S("Expected string but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.Ph = function(a, c, d) {
  g.g.J && !g.isFunction(a) && g.g.S("Expected function but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.Sh = function(a, c, d) {
  g.g.J && !g.isObject(a) && g.g.S("Expected object but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.Mh = function(a, c, d) {
  g.g.J && !g.isArray(a) && g.g.S("Expected array but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.Nh = function(a, c, d) {
  g.g.J && !g.ha(a) && g.g.S("Expected boolean but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.Oh = function(a, c, d) {
  !g.g.J || g.isObject(a) && a.nodeType == g.xc.Zd.vd || g.g.S("Expected Element but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.Qh = function(a, c, d, e) {
  !g.g.J || a instanceof c || g.g.S("Expected instanceof %s but got %s.", [g.g.Bc(c), g.g.Bc(a)], d, Array.prototype.slice.call(arguments, 3));
  return a;
};
g.g.Th = function() {
  for (var a in Object.prototype) {
    g.g.jf(a + " should not be enumerable in Object.prototype.");
  }
};
g.g.Bc = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
g.b = {};
g.R = g.Ta;
g.b.P = !1;
g.b.bg = function(a) {
  return a[a.length - 1];
};
g.b.dj = g.b.bg;
g.b.indexOf = g.R && (g.b.P || Array.prototype.indexOf) ? function(a, c, d) {
  return Array.prototype.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
g.b.lastIndexOf = g.R && (g.b.P || Array.prototype.lastIndexOf) ? function(a, c, d) {
  return Array.prototype.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
g.b.forEach = g.R && (g.b.P || Array.prototype.forEach) ? function(a, c, d) {
  Array.prototype.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in f && c.call(d, f[h], h, a);
  }
};
g.b.Ac = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
g.b.filter = g.R && (g.b.P || Array.prototype.filter) ? function(a, c, d) {
  return Array.prototype.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], h = 0, k = g.isString(a) ? a.split("") : a, m = 0;m < e;m++) {
    if (m in k) {
      var n = k[m];
      c.call(d, n, m, a) && (f[h++] = n);
    }
  }
  return f;
};
g.b.map = g.R && (g.b.P || Array.prototype.map) ? function(a, c, d) {
  return Array.prototype.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), h = g.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    k in h && (f[k] = c.call(d, h[k], k, a));
  }
  return f;
};
g.b.reduce = g.R && (g.b.P || Array.prototype.reduce) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return Array.prototype.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.b.forEach(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.b.reduceRight = g.R && (g.b.P || Array.prototype.reduceRight) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return Array.prototype.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.b.Ac(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.b.some = g.R && (g.b.P || Array.prototype.some) ? function(a, c, d) {
  return Array.prototype.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return !0;
    }
  }
  return !1;
};
g.b.every = g.R && (g.b.P || Array.prototype.every) ? function(a, c, d) {
  return Array.prototype.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && !c.call(d, f[h], h, a)) {
      return !1;
    }
  }
  return !0;
};
g.b.count = function(a, c, d) {
  var e = 0;
  g.b.forEach(a, function(a, h, k) {
    c.call(d, a, h, k) && ++e;
  }, d);
  return e;
};
g.b.find = function(a, c, d) {
  c = g.b.findIndex(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.b.findIndex = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return h;
    }
  }
  return -1;
};
g.b.vi = function(a, c, d) {
  c = g.b.lf(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.b.lf = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return -1;
};
g.b.contains = function(a, c) {
  return 0 <= g.b.indexOf(a, c);
};
g.b.Jc = function(a) {
  return 0 == a.length;
};
g.b.clear = function(a) {
  if (!g.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
g.b.insert = function(a, c) {
  g.b.contains(a, c) || a.push(c);
};
g.b.Fc = function(a, c, d) {
  g.b.splice(a, d, 0, c);
};
g.b.Oi = function(a, c, d) {
  g.ag(g.b.splice, a, d, 0).apply(null, c);
};
g.b.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = g.b.indexOf(a, d)) ? a.push(c) : g.b.Fc(a, c, e);
};
g.b.remove = function(a, c) {
  var d = g.b.indexOf(a, c), e;
  (e = 0 <= d) && g.b.ja(a, d);
  return e;
};
g.b.ja = function(a, c) {
  return 1 == Array.prototype.splice.call(a, c, 1).length;
};
g.b.yj = function(a, c, d) {
  c = g.b.findIndex(a, c, d);
  return 0 <= c ? (g.b.ja(a, c), !0) : !1;
};
g.b.vj = function(a, c, d) {
  var e = 0;
  g.b.Ac(a, function(f, h) {
    c.call(d, f, h, a) && g.b.ja(a, h) && e++;
  });
  return e;
};
g.b.concat = function(a) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
};
g.b.join = function(a) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
};
g.b.Ig = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return [];
};
g.b.clone = g.b.Ig;
g.b.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d];
    if (g.za(e)) {
      var f = a.length || 0, h = e.length || 0;
      a.length = f + h;
      for (var k = 0;k < h;k++) {
        a[f + k] = e[k];
      }
    } else {
      a.push(e);
    }
  }
};
g.b.splice = function(a, c, d, e) {
  return Array.prototype.splice.apply(a, g.b.slice(arguments, 1));
};
g.b.slice = function(a, c, d) {
  return 2 >= arguments.length ? Array.prototype.slice.call(a, c) : Array.prototype.slice.call(a, c, d);
};
g.b.wj = function(a, c, d) {
  c = c || a;
  var e = function(a) {
    return g.isObject(a) ? "o" + g.Cc(a) : (typeof a).charAt(0) + a;
  };
  d = d || e;
  for (var e = {}, f = 0, h = 0;h < a.length;) {
    var k = a[h++], m = d(k);
    Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, c[f++] = k);
  }
  c.length = f;
};
g.b.mc = function(a, c, d) {
  return g.b.nc(a, d || g.b.U, !1, c);
};
g.b.Xh = function(a, c, d) {
  return g.b.nc(a, c, !0, void 0, d);
};
g.b.nc = function(a, c, d, e, f) {
  for (var h = 0, k = a.length, m;h < k;) {
    var n = h + k >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? h = n + 1 : (k = n, m = !p);
  }
  return m ? h : ~h;
};
g.b.sort = function(a, c) {
  a.sort(c || g.b.U);
};
g.b.Hj = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || g.b.U;
  g.b.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
g.b.Eg = function(a, c, d) {
  var e = d || g.b.U;
  g.b.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
g.b.Fj = function(a, c, d) {
  g.b.Eg(a, function(a) {
    return a[c];
  }, d);
};
g.b.$i = function(a, c, d) {
  c = c || g.b.U;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return !1;
    }
  }
  return !0;
};
g.b.equals = function(a, c, d) {
  if (!g.za(a) || !g.za(c) || a.length != c.length) {
    return !1;
  }
  var e = a.length;
  d = d || g.b.hf;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return !1;
    }
  }
  return !0;
};
g.b.ki = function(a, c, d) {
  d = d || g.b.U;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var h = d(a[f], c[f]);
    if (0 != h) {
      return h;
    }
  }
  return g.b.U(a.length, c.length);
};
g.b.U = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
g.b.Qi = function(a, c) {
  return -g.b.U(a, c);
};
g.b.hf = function(a, c) {
  return a === c;
};
g.b.Vh = function(a, c, d) {
  d = g.b.mc(a, c, d);
  return 0 > d ? (g.b.Fc(a, c, -(d + 1)), !0) : !1;
};
g.b.Wh = function(a, c, d) {
  c = g.b.mc(a, c, d);
  return 0 <= c ? g.b.ja(a, c) : !1;
};
g.b.Yh = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var h = a[f], k = c.call(d, h, f, a);
    g.V(k) && (e[k] || (e[k] = [])).push(h);
  }
  return e;
};
g.b.Nj = function(a, c, d) {
  var e = {};
  g.b.forEach(a, function(f, h) {
    e[c.call(d, f, h, a)] = f;
  });
  return e;
};
g.b.uj = function(a, c, d) {
  var e = [], f = 0, h = a;
  d = d || 1;
  void 0 !== c && (f = a, h = c);
  if (0 > d * (h - f)) {
    return [];
  }
  if (0 < d) {
    for (a = f;a < h;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > h;a += d) {
      e.push(a);
    }
  }
  return e;
};
g.b.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
g.b.nf = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (g.isArray(e)) {
      for (var f = 0;f < e.length;f += 8192) {
        for (var h = g.b.nf.apply(null, g.b.slice(e, f, f + 8192)), k = 0;k < h.length;k++) {
          c.push(h[k]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
g.b.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? Array.prototype.unshift.apply(a, a.splice(-c, c)) : 0 > c && Array.prototype.push.apply(a, a.splice(0, -c)));
  return a;
};
g.b.lj = function(a, c, d) {
  c = Array.prototype.splice.call(a, c, 1);
  Array.prototype.splice.call(a, d, 0, c[0]);
};
g.b.Yj = function(a) {
  if (!arguments.length) {
    return [];
  }
  for (var c = [], d = arguments[0].length, e = 1;e < arguments.length;e++) {
    arguments[e].length < d && (d = arguments[e].length);
  }
  for (e = 0;e < d;e++) {
    for (var f = [], h = 0;h < arguments.length;h++) {
      f.push(arguments[h][e]);
    }
    c.push(f);
  }
  return c;
};
g.b.Ej = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), h = a[e];
    a[e] = a[f];
    a[f] = h;
  }
};
g.b.ni = function(a, c) {
  var d = [];
  g.b.forEach(c, function(c) {
    d.push(a[c]);
  });
  return d;
};
g.object = {};
g.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
g.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
g.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
g.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return !0;
    }
  }
  return !1;
};
g.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return !1;
    }
  }
  return !0;
};
g.object.Ai = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
g.object.yi = function(a) {
  for (var c in a) {
    return c;
  }
};
g.object.zi = function(a) {
  for (var c in a) {
    return a[c];
  }
};
g.object.contains = function(a, c) {
  return g.object.uc(a, c);
};
g.object.Ki = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
g.object.Ei = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
g.object.Ji = function(a, c) {
  for (var d = g.za(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], g.V(a));d++) {
  }
  return a;
};
g.object.mi = function(a, c) {
  return null !== a && c in a;
};
g.object.uc = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return !0;
    }
  }
  return !1;
};
g.object.mf = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
g.object.wi = function(a, c, d) {
  return (c = g.object.mf(a, c, d)) && a[c];
};
g.object.Jc = function(a) {
  for (var c in a) {
    return !1;
  }
  return !0;
};
g.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
g.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
g.object.add = function(a, c, d) {
  if (null !== a && c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  g.object.set(a, c, d);
};
g.object.get = function(a, c, d) {
  return null !== a && c in a ? a[c] : d;
};
g.object.set = function(a, c, d) {
  a[c] = d;
};
g.object.Bj = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
g.object.Dj = function(a, c, d) {
  if (c in a) {
    return a[c];
  }
  d = d();
  return a[c] = d;
};
g.object.equals = function(a, c) {
  for (var d in a) {
    if (!(d in c) || a[d] !== c[d]) {
      return !1;
    }
  }
  for (d in c) {
    if (!(d in a)) {
      return !1;
    }
  }
  return !0;
};
g.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
g.object.Ng = function(a) {
  var c = g.I(a);
  if ("object" == c || "array" == c) {
    if (g.isFunction(a.clone)) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.object.Ng(a[d]);
    }
    return c;
  }
  return a;
};
g.object.Jg = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
g.object.Wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var h = 0;h < g.object.Wb.length;h++) {
      d = g.object.Wb[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
g.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
g.object.ff = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.ff.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
g.object.pi = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
g.object.Xi = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
l.u = {};
l.u.Oa = "urn:x-cast:";
l.u.Jd = 128;
l.u.Ff = function(a) {
  return a.length > l.u.Oa.length && g.a.startsWith(a, l.u.Oa) && a.length <= l.u.Jd;
};
l.u.$ = function(a) {
  return l.u.Oa + "com.google.cast." + a;
};
l.u.md = {Eh:l.u.$("tp.connection"), Fh:l.u.$("tp.heartbeat"), yh:l.u.$("receiver"), sh:l.u.$("media"), th:l.u.$("media.universalRemote.optIn"), Ih:l.u.$("webrtc")};
l.u.xe = g.object.Jg(l.u.md);
l.u.xf = function(a) {
  return l.u.xe.hasOwnProperty(a);
};
l.s = {};
l.s.gi = function(a) {
  return a ? g.isString(a.sessionId) ? g.o(a.media) ? g.o(a.autoplay) && !g.ha(a.autoplay) ? "Invalid autoplay in LoadRequest." : g.o(a.currentTime) && !g.isNumber(a.currentTime) ? "Invalid currentTime in LoadRequest." : l.s.qc(a.media) : "media cannot be null or undefined in LoadRequest." : "Invalid sessionId in LoadRequest." : "LoadRequest cannot be null.";
};
l.s.hi = function(a) {
  if (!a) {
    return "QueueLoadRequest cannot be null.";
  }
  if (!g.isString(a.sessionId)) {
    return "Invalid sessionId in QueueLoadRequest.";
  }
  if (!g.o(a.items) || 0 >= a.items.length) {
    return "items cannot be null or undefined or empty in QueueLoadRequest.";
  }
  if (!g.o(a.repeatMode) || !g.isString(a.repeatMode)) {
    return "Invalid repeatMode in QueueLoadRequest.";
  }
  if (!g.o(a.startIndex) || !g.isNumber(a.startIndex) || 0 > a.startIndex || a.startIndex >= a.items.length) {
    return "Invalid startIndex in QueueLoadRequest.";
  }
  for (var c = 0;c < a.items.length;c++) {
    var d = l.s.Ye(!1, a.items[c]);
    if ("" != d) {
      return "At index " + c + ": " + d;
    }
  }
  return "";
};
l.s.qc = function(a) {
  return a ? !g.isString(a.contentId) || 1E3 < a.contentId.length ? "Invalid contentId in MediaInfo." : g.object.uc(chrome.cast.media.Sa, a.streamType) ? g.isString(a.contentType) ? g.o(a.duration) && !g.isNumber(a.duration) ? "Invalid duration in MediaInfo." : "" : "Invalid contentType in MediaInfo." : "Invalid streamType in MediaInfo." : "MediaInfo cannot be null.";
};
l.s.Ye = function(a, c) {
  if (!c) {
    return "QueueItem cannot be null.";
  }
  if (a) {
    if (g.o(c.itemId) && !g.isNumber(c.itemId)) {
      return "Invalid itemId in QueueItem.";
    }
  } else {
    if (g.o(c.itemId)) {
      return "itemId cannot be set in QueueItem.";
    }
  }
  return g.o(c.autoplay) && g.ha(c.autoplay) ? !g.o(c.startTime) || !g.isNumber(c.startTime) || 0 > c.startTime ? "Invalid startTime in QueueItem." : g.o(c.playbackDuration) && !g.isNumber(c.playbackDuration) ? "Invalid playbackDuration in QueueItem." : !g.o(c.preloadTime) || !g.isNumber(c.preloadTime) || 0 > c.preloadTime ? "Invalid preloadTime in QueueItem." : l.s.qc(c.media) : "Invalid autoplay in QueueItem.";
};
l.s.We = function(a) {
  return !!a && g.o(a.sessionId) && g.isString(a.namespaceName) && l.u.Ff(a.namespaceName) && !l.u.xf(a.namespaceName);
};
l.s.Ve = function(a) {
  return a && g.isFunction(a.sessionListener) && g.isFunction(a.receiverListener) ? l.s.rc(a.sessionRequest) : !1;
};
l.s.Xe = function(a) {
  return a ? !g.b.find(a, function(a) {
    return !((a.receiverType == chrome.cast.pa.CUSTOM || a.receiverType == chrome.cast.pa.DIAL) && g.o(a.friendlyName) && 0 == a.capabilities.length && g.Cf(a.volume));
  }) : !1;
};
l.s.rc = function(a) {
  return !a || !g.o(a.appId) || g.o(a.dialRequest) && (!g.isString(a.dialRequest.appName) || g.o(a.dialRequest.launchParameter) && !g.isString(a.dialRequest.launchParameter)) ? !1 : !0;
};
l.s.Ze = function(a) {
  return a && g.o(a.volume) && l.s.sc(a.volume) ? g.o(a.expectedVolume) ? l.s.sc(a.expectedVolume) : !0 : !1;
};
l.s.sc = function(a) {
  return a ? g.o(a.level) ? g.isNumber(a.level) && 0 <= a.level && 1 >= a.level : g.ha(a.muted) : !1;
};
l.s.fi = function(a) {
  return !!a && g.ha(a.doLaunch) && (!g.o(a.launchParameter) || g.isString(a.launchParameter));
};
l.lh = {};
l.F = function(a, c, d, e, f, h) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = g.isNumber(f) ? f : 0;
  this.receiverId = h || null;
  this.receiverList = null;
};
l.l = {Ob:"iframe_init_result", yd:"fail_to_connect_to_extension", Xg:"client_reconnect", qa:"v2_message", Eb:"app_message", hd:"client_init", Hd:"log_message", he:"request_session", ie:"request_session_by_id", Fd:"leave_session", Wg:"client_disconnect", pe:"set_custom_receivers", Gb:"custom_dial_launch_response", qe:"set_receiver_display_status", ae:"query_tab_broadcast_status", hh:"extension_ready", Sg:"api_iframe_ready", fe:"receiver_availability", ee:"receiver_action", Tb:"new_session", ic:"update_session", 
qd:"disconnect_session", ge:"remove_session", Tg:"app_message_success", oh:"leave_session_success", Ch:"set_receiver_volume_success", Ah:"set_custom_receivers_success", ERROR:"error", ld:"custom_dial_launch_request", Bh:"set_receiver_display_status_success", Dh:"tab_broadcast_status"};
l.uh = function() {
  this.type = l.m.Na;
  this.requestId = null;
  this.status = [];
  this.customData = null;
  this.sessionId = "";
};
chrome.cast.da = function(a, c) {
  this.vf = a;
  this.kc = c;
  this.jc = null;
};
chrome.cast.da.prototype.init = function() {
  window.addEventListener("message", this.Sf.bind(this), !1);
};
chrome.cast.da.prototype.Bg = function(a) {
  this.jc = a;
};
chrome.cast.da.prototype.Sf = function(a) {
  a.source != window && a.origin == this.kc && (a = a.data, a.type == l.l.Ob && (this.zf = !a.message), this.jc(a));
};
chrome.cast.da.prototype.wb = function(a) {
  this.zf && this.vf.contentWindow.postMessage(a, this.kc);
};
l.w = function(a, c, d) {
  this.Xc = a;
  this.$a = c;
  this.Bb = g.isNumber(d) ? d : 0;
  this.Aa = !1;
  this.la = null;
};
l.w.gd = 432E5;
l.w.prototype.Ef = function() {
  return this.Aa;
};
l.w.prototype.vb = function() {
  this.Aa = !0;
  this.$a = this.Xc = null;
  this.la && (clearTimeout(this.la), this.la = null);
};
l.w.Nc = function() {
};
l.w.prototype.$c = function() {
  var a = this.Xc;
  this.vb();
  return a || l.w.Nc;
};
l.w.prototype.Zc = function() {
  var a = this.$a;
  this.vb();
  return a || l.w.Nc;
};
l.w.prototype.Wc = function(a, c) {
  if (!this.Aa && !this.la) {
    var d = function() {
      if (!this.Aa) {
        a && a();
        var d = this.$a;
        this.vb();
        if (0 < this.Bb) {
          var f = new chrome.cast.Error(chrome.cast.K.TIMEOUT);
          c && (f.description = c);
          d(f);
        }
      }
    }.bind(this);
    this.la = setTimeout(d, 0 < this.Bb ? this.Bb : l.w.gd);
  }
};
l.oa = function() {
  this.T = {};
};
b = l.oa.prototype;
b.add = function(a, c) {
  var d = this.T[a];
  if (d) {
    return -1 == d.indexOf(c) && d.push(c), !1;
  }
  this.T[a] = [c];
  return !0;
};
b.remove = function(a, c) {
  var d = this.T[a];
  if (!d) {
    return !1;
  }
  var e = d.indexOf(c);
  if (-1 == e) {
    return !1;
  }
  if (1 == d.length) {
    return delete this.T[a], !0;
  }
  d.splice(e, 1);
  return !1;
};
b.Pc = function(a) {
  if (!(a in this.T)) {
    return !1;
  }
  delete this.T[a];
  return !0;
};
b.sg = function(a) {
  var c = !1;
  Object.keys(this.T).forEach(function(d) {
    0 == d.indexOf(a) && (delete this.T[d], c = !0);
  }, this);
  return c;
};
b.get = function(a) {
  return this.T[a] || [];
};
b.contains = function(a, c) {
  return -1 != this.get(a).indexOf(c);
};
l.H = function() {
  this.ca = {};
  this.Da = {};
};
b = l.H.prototype;
b.wg = function(a, c) {
  var d = this.ca[a];
  return d ? (d.status = c, d.media.forEach(function(a) {
    delete this.Da[this.eb(a)];
  }, this), delete this.ca[a], !0) : !1;
};
b.tg = function(a) {
  delete this.Da[this.eb(a)];
  var c = this.ca[a.sessionId];
  c && (a = c.media.indexOf(a), -1 != a && c.media.splice(a, 1));
};
b.bf = function(a) {
  if (a.sessionId == chrome.cast.j.Hb) {
    return a;
  }
  var c = this.ca[a.sessionId];
  if (c) {
    return c.statusText = a.statusText, c.namespaces = a.namespaces || [], c.receiver.volume = a.receiver.volume, c;
  }
  var c = new chrome.cast.j(a.sessionId, a.appId, a.displayName, a.appImages, a.receiver), d;
  for (d in a) {
    "media" == d ? c.media = a.media.map(function(a) {
      a = this.vc(a);
      a.mb = !1;
      a.ya = !0;
      return a;
    }.bind(this)) : a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return this.ca[a.sessionId] = c;
};
b.vc = function(a) {
  var c = this.eb(a), d = this.Da[c];
  d || (d = new chrome.cast.media.f(a.sessionId, a.mediaSessionId), this.Da[c] = d, (c = this.ca[a.sessionId]) && c.media.push(d));
  l.H.Pg(d, a);
  return d;
};
b.eb = function(a) {
  return a.sessionId + "#" + a.mediaSessionId;
};
l.H.Pg = function(a, c) {
  a.currentItemId = null;
  a.loadingItemId = null;
  a.preloadedItemId = null;
  for (var d in c) {
    "items" != d && c.hasOwnProperty(d) && ("volume" == d ? (a.volume.level = c.volume.level, a.volume.muted = c.volume.muted) : a[d] = c[d]);
  }
  "currentTime" in c && (a.lb = g.now());
  l.H.uf(a.playerState, a.loadingItemId) ? (a.currentItemId = null, a.loadingItemId = null, a.preloadedItemId = null, a.items = null) : l.H.Og(a, c);
};
l.H.uf = function(a, c) {
  return a == chrome.cast.media.ea.IDLE && null == c;
};
l.H.Ue = function(a) {
  var c = {};
  if (a) {
    for (var d = 0;d < a.length;d++) {
      c[a[d].itemId] = d;
    }
  }
  return c;
};
l.H.Og = function(a, c) {
  if (c.hasOwnProperty("items") && c.items) {
    for (var d = [], e = l.H.Ue(a.items), f = c.items, h = 0;h < f.length;h++) {
      var k = f[h];
      if (!k.media) {
        var m = k.itemId, n = a.items ? a.items[e[m]] : null;
        n && n.media ? k.media = n.media : m == a.currentItemId && a.media && (k.media = a.media);
      }
      d.push(l.H.df(k));
    }
    a.items = d;
  }
};
l.H.df = function(a) {
  var c = new chrome.cast.media.$b(a.media), d;
  for (d in a) {
    a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return c;
};
chrome.cast.A = function(a) {
  this.Of = 1E3 * Math.floor(1E5 * Math.random());
  this.Ea = a;
  this.ba = {};
  this.ra = !1;
  this.aa = this.B = this.Xa = null;
  this.sa = new l.oa;
  this.Ca = new l.oa;
  this.ka = new l.oa;
  this.Fa = [];
  this.Ga = new l.H(this.ij);
  this.zc = !1;
};
b = chrome.cast.A.prototype;
b.init = function() {
  this.Ea.Bg(this.cg.bind(this));
};
b.sf = function() {
  return "a" + this.Of++;
};
b.Lf = function(a) {
  var c = a.seqNum;
  if (!c) {
    return !1;
  }
  var d = this.ba[c];
  if (d) {
    var e = a.message;
    a.type == l.l.ERROR ? d.Zc()(a.message) : d.$c()(e);
    delete this.ba[c];
  }
  return !!d;
};
b.Mf = function(a) {
  switch(a.type) {
    case l.l.Tb:
    ;
    case l.l.ic:
      a.message = this.cf(a.message);
      break;
    case l.l.qa:
      a = a.message, a.type == l.m.Na && a.status && (a.status = a.status.map(this.af.bind(this)));
  }
};
b.cf = function(a) {
  return this.Ga.bf(a);
};
b.cg = function(a) {
  this.Mf(a);
  if (!this.Lf(a)) {
    switch(a.type) {
      case l.l.Ob:
        this.Pf(a);
        break;
      case l.l.fe:
        this.Yf(a);
        break;
      case l.l.ee:
        this.Xf(a);
        break;
      case l.l.yd:
        this.zc = !0;
        break;
      case l.l.Tb:
        this.Wf(a);
        break;
      case l.l.ic:
        this.$f(a);
        break;
      case l.l.qd:
        this.Rf(a);
        break;
      case l.l.ge:
        this.Zf(a);
        break;
      case l.l.Eb:
        this.Tf(a.message);
        break;
      case l.l.qa:
        this.Vf(a);
        break;
      case l.l.ld:
        this.Qf(a);
    }
  }
};
b.Qf = function(a) {
  var c = a.message;
  this.B && this.B.customDialLaunchCallback && this.B.customDialLaunchCallback(c).then(g.bind(function(c) {
    this.Ea.wb(new l.F(l.l.Gb, c, a.seqNum));
  }, this), g.bind(function() {
    this.Ea.wb(new l.F(l.l.Gb, null, a.seqNum));
  }, this));
};
b.Vf = function(a) {
  switch(a.message.type) {
    case l.m.Na:
      this.Uf(a.message);
  }
};
b.Uf = function(a) {
  a.status.forEach(this.oc.bind(this));
};
b.Wf = function(a) {
  this.B && this.B.sessionListener(a.message);
};
b.$f = function(a) {
  (a = a.message) && this.ka.get(a.sessionId).forEach(function(a) {
    a(!0);
  });
};
b.Rf = function(a) {
  this.Qc(a.message, chrome.cast.ga.DISCONNECTED);
};
b.Zf = function(a) {
  this.Qc(a.message, chrome.cast.ga.STOPPED);
};
b.Qc = function(a, c) {
  var d = c != chrome.cast.ga.STOPPED;
  this.Ga.wg(a, c) && (this.sa.sg(a + "#"), this.Ca.Pc(a), this.ka.get(a).forEach(function(a) {
    a(d);
  }), this.ka.Pc(a));
};
b.Tf = function(a) {
  this.pf(a.sessionId, a.namespaceName).forEach(function(c) {
    c(a.namespaceName, a.message);
  });
};
b.Yf = function(a) {
  if (this.B) {
    var c = a.message;
    a.receiverList ? this.B.receiverListener.apply(null, [c, a.receiverList]) : this.B.receiverListener(c);
  }
};
b.Xf = function(a) {
  this.Fa.forEach(function(c) {
    c(a.message.receiver, a.message.receiverAction);
  }, this);
};
b.Pf = function(a) {
  (a = a.message) ? (this.Xa = a, this.aa && this.aa.Zc()(a)) : (this.ra = !0, this.Sc(), this.aa && this.aa.$c()(void 0));
};
b.xb = function(a, c, d) {
  this.N(d) && (a = a || [], l.s.Xe(a) ? this.M(new l.F(l.l.pe, a), new l.w(c, d)) : d && d(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)));
};
chrome.cast.A.prototype.setReceiverVolume = function(a, c, d, e) {
  this.N(e) && (l.s.Ze(c) ? (c.sessionId = a, this.M(new l.F(l.l.qa, c, null, null, chrome.cast.timeout.setReceiverVolume), new l.w(d, e, chrome.cast.timeout.setReceiverVolume))) : e && e(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)));
};
chrome.cast.A.prototype.leaveSession = function(a, c, d) {
  this.N(d) && this.M(new l.F(l.l.Fd, a, null, null, chrome.cast.timeout.leaveSession), new l.w(c, d, chrome.cast.timeout.leaveSession));
};
b = chrome.cast.A.prototype;
b.Rc = function(a, c, d, e) {
  this.N(d) && this.M(new l.F(l.l.qa, a, null, null, e), new l.w(c, d, e));
};
b.Y = function(a) {
  this.N(g.Mc) && this.M(new l.F(l.l.Hd, a));
};
b.Uc = function(a, c, d, e, f) {
  null != a && (c.mediaSessionId = a.mediaSessionId, c.sessionId = a.sessionId);
  c.requestId = null;
  this.Rc(c, function(a) {
    d && a.status && 1 == a.status.length ? d(a.status[0]) : e && e(new chrome.cast.Error(chrome.cast.K.SESSION_ERROR));
  }, e, f);
};
b.Tc = function(a, c, d) {
  this.Uc(null, a, function(a) {
    a.ya = !0;
    a.mb = !0;
    c && c(a);
  }.bind(this), d, chrome.cast.media.timeout.load);
};
b.v = function(a, c, d, e, f) {
  this.Uc(a, c, function(a) {
    this.oc(a);
    d && d();
  }.bind(this), e, f);
};
b.Ag = function(a, c, d) {
  this.N(d) && (l.s.We(a) ? this.M(new l.F(l.l.Eb, a, null, null, chrome.cast.timeout.sendCustomMessage), new l.w(c, d, chrome.cast.timeout.sendCustomMessage)) : d && d(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)));
};
b.Sc = function() {
  this.B && this.ra && this.M(new l.F(l.l.hd, new l.ed(this.B)));
};
b.M = function(a, c) {
  var d = this.sf();
  a.seqNum = d;
  if (this.ba[d] && !this.ba[d].Ef()) {
    throw "Try to send a request with the existing seqNum: " + a.seqNum;
  }
  c && (this.ba[d] = c, c.Wc(function() {
    delete this.ba[d];
  }.bind(this)));
  this.Ea.wb(a);
};
b.kb = function(a, c) {
  this.N(c) && this.M(new l.F(l.l.ae, void 0), new l.w(a, c));
};
b.ib = function(a, c, d) {
  l.s.Ve(a) ? this.Xa ? d && d(this.Xa) : this.B ? c && c() : (this.B = a, this.ra ? (this.Sc(), c && c()) : (this.aa = new l.w(c, d, 6E3), this.aa.Wc())) : d && d(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER));
};
chrome.cast.A.prototype.requestSession = function(a, c, d, e) {
  this.N(c) && (d && !l.s.rc(d) ? c && c(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)) : (!d && this.B && (d = this.B.sessionRequest), this.M(new l.F(l.l.he, d, null, null, d.requestSessionTimeout, e), new l.w(a, c, 0))));
};
chrome.cast.A.prototype.ub = function(a) {
  this.N(g.Mc) && a && this.M(new l.F(l.l.ie, a));
};
chrome.cast.A.cd = new chrome.cast.Error(chrome.cast.K.API_NOT_INITIALIZED);
chrome.cast.A.wd = new chrome.cast.Error(chrome.cast.K.EXTENSION_MISSING);
b = chrome.cast.A.prototype;
b.N = function(a) {
  return this.ra ? this.zc ? (a && a(chrome.cast.A.wd), !1) : !0 : (a && a(chrome.cast.A.cd), !1);
};
b.cb = function(a, c) {
  return a + "#" + c;
};
b.Le = function(a, c, d) {
  this.sa.add(this.cb(a, c), d);
};
b.rg = function(a, c, d) {
  this.sa.remove(this.cb(a, c), d);
};
b.pf = function(a, c) {
  return this.sa.get(this.cb(a, c));
};
b.Ua = function(a, c) {
  this.Ca.add(a, c);
};
b.rb = function(a, c) {
  this.Ca.remove(a, c);
};
b.Me = function(a, c) {
  -1 == a.ma.indexOf(c) && a.ma.push(c);
};
b.ug = function(a, c) {
  var d = a.ma.indexOf(c);
  -1 != d && a.ma.splice(d, 1);
};
chrome.cast.A.Bf = function(a) {
  return a.playerState != chrome.cast.media.ea.IDLE || null != a.loadingItemId;
};
b = chrome.cast.A.prototype;
b.oc = function(a) {
  if (a.ya) {
    var c = chrome.cast.A.Bf(a);
    a.ma.forEach(function(a) {
      a(c);
    });
    c || this.Ga.tg(a);
  } else {
    a.ya = !0, a.mb || this.Ca.get(a.sessionId).forEach(function(c) {
      c(a);
    });
  }
};
b.af = function(a) {
  return this.Ga.vc(a);
};
b.Oe = function(a, c) {
  this.ka.add(a, c);
};
b.xg = function(a, c) {
  this.ka.remove(a, c);
};
b.Va = function(a) {
  this.Fa.push(a);
};
b.sb = function(a) {
  a = this.Fa.indexOf(a);
  0 <= a && this.Fa.splice(a, 1);
};
b.yb = function(a, c, d) {
  this.N(d) && this.M(new l.F(l.l.qe, a), new l.w(c, d));
};
chrome.cast.isAvailable = !1;
g.c("chrome.cast.isAvailable", chrome.cast.isAvailable);
chrome.cast.i = null;
chrome.cast.kb = function(a, c) {
  chrome.cast.i.kb(a, c);
};
g.c("chrome.cast.isTabBroadcast", chrome.cast.kb);
chrome.cast.ib = function(a, c, d) {
  chrome.cast.i.ib(a, c, d);
};
g.c("chrome.cast.initialize", chrome.cast.ib);
chrome.cast.requestSession = function(a, c, d, e) {
  chrome.cast.i.requestSession(a, c, d, e);
};
g.c("chrome.cast.requestSession", chrome.cast.requestSession);
chrome.cast.ub = function(a) {
  chrome.cast.i.ub(a);
};
g.c("chrome.cast.requestSessionById", chrome.cast.ub);
chrome.cast.Va = function(a) {
  chrome.cast.i.Va(a);
};
g.c("chrome.cast.addReceiverActionListener", chrome.cast.Va);
chrome.cast.sb = function(a) {
  chrome.cast.i.sb(a);
};
g.c("chrome.cast.removeReceiverActionListener", chrome.cast.sb);
chrome.cast.Y = function(a) {
  chrome.cast.i.Y(a);
};
g.c("chrome.cast.logMessage", chrome.cast.Y);
chrome.cast.xb = function(a, c, d) {
  chrome.cast.i.xb(a, c, d);
};
g.c("chrome.cast.setCustomReceivers", chrome.cast.xb);
chrome.cast.yb = function(a, c, d) {
  chrome.cast.i.yb(a, c, d);
};
g.c("chrome.cast.setReceiverDisplayStatus", chrome.cast.yb);
chrome.cast.unescape = function(a) {
  return g.a.Cb(a);
};
g.c("chrome.cast.unescape", chrome.cast.unescape);
chrome.cast.j.prototype.Dg = function(a, c, d) {
  a = new l.gc(new chrome.cast.Volume(a, null), this.receiver.volume);
  chrome.cast.i.setReceiverVolume(this.sessionId, a, c, d);
};
g.h(chrome.cast.j.prototype, "setReceiverVolumeLevel", chrome.cast.j.prototype.Dg);
chrome.cast.j.prototype.Cg = function(a, c, d) {
  a = new l.gc(new chrome.cast.Volume(null, a), this.receiver.volume);
  chrome.cast.i.setReceiverVolume(this.sessionId, a, c, d);
};
g.h(chrome.cast.j.prototype, "setReceiverMuted", chrome.cast.j.prototype.Cg);
chrome.cast.j.prototype.leave = function(a, c) {
  chrome.cast.i.leaveSession(this.sessionId, a, c);
};
g.h(chrome.cast.j.prototype, "leave", chrome.cast.j.prototype.leave);
chrome.cast.j.prototype.stop = function(a, c) {
  chrome.cast.i.Rc(new l.we(this.sessionId), a, c, chrome.cast.timeout.stopSession);
};
g.h(chrome.cast.j.prototype, "stop", chrome.cast.j.prototype.stop);
chrome.cast.j.prototype.sendMessage = function(a, c, d, e) {
  chrome.cast.i.Ag(new l.fd(this.sessionId, a, c), d, e);
};
g.h(chrome.cast.j.prototype, "sendMessage", chrome.cast.j.prototype.sendMessage);
chrome.cast.j.prototype.Wa = function(a) {
  chrome.cast.i.Oe(this.sessionId, a);
};
g.h(chrome.cast.j.prototype, "addUpdateListener", chrome.cast.j.prototype.Wa);
chrome.cast.j.prototype.tb = function(a) {
  chrome.cast.i.xg(this.sessionId, a);
};
g.h(chrome.cast.j.prototype, "removeUpdateListener", chrome.cast.j.prototype.tb);
chrome.cast.j.prototype.Ne = function(a, c) {
  chrome.cast.i.Le(this.sessionId, a, c);
};
g.h(chrome.cast.j.prototype, "addMessageListener", chrome.cast.j.prototype.Ne);
chrome.cast.j.prototype.vg = function(a, c) {
  chrome.cast.i.rg(this.sessionId, a, c);
};
g.h(chrome.cast.j.prototype, "removeMessageListener", chrome.cast.j.prototype.vg);
chrome.cast.j.prototype.Ua = function(a) {
  chrome.cast.i.Ua(this.sessionId, a);
};
g.h(chrome.cast.j.prototype, "addMediaListener", chrome.cast.j.prototype.Ua);
chrome.cast.j.prototype.rb = function(a) {
  chrome.cast.i.rb(this.sessionId, a);
};
g.h(chrome.cast.j.prototype, "removeMediaListener", chrome.cast.j.prototype.rb);
chrome.cast.j.prototype.Gf = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.i.Tc(a, c, d);
};
g.h(chrome.cast.j.prototype, "loadMedia", chrome.cast.j.prototype.Gf);
chrome.cast.media.f.prototype.xa = function(a, c, d) {
  a || (a = new chrome.cast.media.Nb);
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.xa);
};
g.h(chrome.cast.media.f.prototype, "getStatus", chrome.cast.media.f.prototype.xa);
chrome.cast.media.f.prototype.play = function(a, c, d) {
  a || (a = new chrome.cast.media.Yb);
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.play);
};
g.h(chrome.cast.media.f.prototype, "play", chrome.cast.media.f.prototype.play);
chrome.cast.media.f.prototype.pause = function(a, c, d) {
  a || (a = new chrome.cast.media.Xb);
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.pause);
};
g.h(chrome.cast.media.f.prototype, "pause", chrome.cast.media.f.prototype.pause);
chrome.cast.media.f.prototype.seek = function(a, c, d) {
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.seek);
};
g.h(chrome.cast.media.f.prototype, "seek", chrome.cast.media.f.prototype.seek);
chrome.cast.media.f.prototype.stop = function(a, c, d) {
  a || (a = new chrome.cast.media.hc);
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.stop);
};
g.h(chrome.cast.media.f.prototype, "stop", chrome.cast.media.f.prototype.stop);
chrome.cast.media.f.prototype.Ha = function(a, c, d) {
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.Ha);
};
g.h(chrome.cast.media.f.prototype, "setVolume", chrome.cast.media.f.prototype.Ha);
chrome.cast.media.f.prototype.ua = function(a, c, d) {
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.ua);
};
g.h(chrome.cast.media.f.prototype, "editTracksInfo", chrome.cast.media.f.prototype.ua);
chrome.cast.j.prototype.ig = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.i.Tc(a, c, d);
};
g.h(chrome.cast.j.prototype, "queueLoad", chrome.cast.j.prototype.ig);
chrome.cast.media.f.prototype.fg = function(a, c, d) {
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queueInsertItems", chrome.cast.media.f.prototype.fg);
chrome.cast.media.f.prototype.dg = function(a, c, d) {
  chrome.cast.i.v(this, new chrome.cast.media.Qa([a]), c, d, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queueAppendItem", chrome.cast.media.f.prototype.dg);
chrome.cast.media.f.prototype.eg = function(a, c, d) {
  var e = new chrome.cast.media.Qa([a.item]);
  e.currentItemIndex = 0;
  e.insertBefore = a.insertBefore;
  e.currentTime = a.currentTime;
  e.customData = a.customData;
  chrome.cast.i.v(this, e, c, d, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queueInsertAndPlayItem", chrome.cast.media.f.prototype.eg);
chrome.cast.media.f.prototype.qg = function(a, c, d) {
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queueUpdateItems", chrome.cast.media.f.prototype.qg);
chrome.cast.media.f.prototype.lg = function(a, c) {
  var d = new chrome.cast.media.fa;
  d.jump = -1;
  chrome.cast.i.v(this, d, a, c, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queuePrev", chrome.cast.media.f.prototype.lg);
chrome.cast.media.f.prototype.kg = function(a, c) {
  var d = new chrome.cast.media.fa;
  d.jump = 1;
  chrome.cast.i.v(this, d, a, c, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queueNext", chrome.cast.media.f.prototype.kg);
chrome.cast.media.f.prototype.gg = function(a, c, d) {
  if (0 > this.wa(a)) {
    chrome.cast.Y("itemId not found in the queue.");
  } else {
    var e = new chrome.cast.media.fa;
    e.currentItemId = a;
    chrome.cast.i.v(this, e, c, d, chrome.cast.media.timeout.D);
  }
};
g.h(chrome.cast.media.f.prototype, "queueJumpToItem", chrome.cast.media.f.prototype.gg);
chrome.cast.media.f.prototype.hg = function(a, c, d, e) {
  if (0 > this.wa(a)) {
    chrome.cast.Y("itemId not found in the queue.");
  } else {
    var f = new chrome.cast.media.fa;
    f.currentItemId = a;
    f.currentTime = c;
    chrome.cast.i.v(this, f, d, e, chrome.cast.media.timeout.D);
  }
};
g.h(chrome.cast.media.f.prototype, "queueJumpToItemWithCurrentTime", chrome.cast.media.f.prototype.hg);
chrome.cast.media.f.prototype.pg = function(a, c, d) {
  var e = new chrome.cast.media.cc;
  e.repeatMode = a;
  chrome.cast.i.v(this, e, c, d, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queueSetRepeatMode", chrome.cast.media.f.prototype.pg);
chrome.cast.media.f.prototype.ng = function(a, c, d) {
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queueRemoveItems", chrome.cast.media.f.prototype.ng);
chrome.cast.media.f.prototype.mg = function(a, c, d) {
  0 > this.wa(a) ? chrome.cast.Y("itemId not found in the queue.") : chrome.cast.i.v(this, new chrome.cast.media.ac([a]), c, d, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queueRemoveItem", chrome.cast.media.f.prototype.mg);
chrome.cast.media.f.prototype.og = function(a, c, d) {
  chrome.cast.i.v(this, a, c, d, chrome.cast.media.timeout.D);
};
g.h(chrome.cast.media.f.prototype, "queueReorderItems", chrome.cast.media.f.prototype.og);
chrome.cast.media.f.prototype.jg = function(a, c, d, e) {
  var f = this.wa(a);
  if (0 > f) {
    chrome.cast.Y("itemId not found in the queue.");
  } else {
    if (0 > c) {
      e && e(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER));
    } else {
      if (f == c) {
        d && d();
      } else {
        var h = null;
        c = c > f ? c + 1 : c;
        c < this.items.length && (h = this.items[c]);
        a = new chrome.cast.media.bc([a]);
        a.insertBefore = h ? h.itemId : null;
        chrome.cast.i.v(this, a, d, e, chrome.cast.media.timeout.D);
      }
    }
  }
};
g.h(chrome.cast.media.f.prototype, "queueMoveItemToNewIndex", chrome.cast.media.f.prototype.jg);
chrome.cast.media.f.prototype.Hg = function(a) {
  return -1 < this.supportedMediaCommands.indexOf(a);
};
g.h(chrome.cast.media.f.prototype, "supportsCommand", chrome.cast.media.f.prototype.Hg);
chrome.cast.media.f.prototype.qf = function() {
  if (this.playerState == chrome.cast.media.ea.PLAYING && 0 <= this.lb) {
    var a = (g.now() - this.lb) / 1E3, a = this.currentTime + this.playbackRate * a;
    this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
    0 > a && (a = 0);
    return a;
  }
  return this.currentTime;
};
g.h(chrome.cast.media.f.prototype, "getEstimatedTime", chrome.cast.media.f.prototype.qf);
chrome.cast.media.f.prototype.Wa = function(a) {
  chrome.cast.i.Me(this, a);
};
g.h(chrome.cast.media.f.prototype, "addUpdateListener", chrome.cast.media.f.prototype.Wa);
chrome.cast.media.f.prototype.tb = function(a) {
  chrome.cast.i.ug(this, a);
};
g.h(chrome.cast.media.f.prototype, "removeUpdateListener", chrome.cast.media.f.prototype.tb);
chrome.cast.media.f.prototype.wa = function(a) {
  for (var c = 0;c < this.items.length;c++) {
    if (this.items[c].itemId == a) {
      return c;
    }
  }
  return -1;
};
chrome.cast.zb = function() {
  if (!chrome.cast.Vc && (chrome.cast.Vc = !0, chrome.cast.extensionId)) {
    var a = "chrome-extension://" + chrome.cast.extensionId, c = document.createElement("iframe");
    c.src = a + "/api_iframe.html?appOrigin=" + window.location.origin;
    c.setAttribute("style", "display:none");
    document.body.appendChild(c);
    a = new chrome.cast.da(c, a);
    a.init();
    chrome.cast.i = new chrome.cast.A(a);
    chrome.cast.i.init();
    chrome.cast.isAvailable = !0;
    (a = window.__onGCastApiAvailable) && "function" == typeof a && a(!0);
  }
};
chrome.cast.Vc = !1;
"complete" == document.readyState ? chrome.cast.zb() : (window.addEventListener("load", chrome.cast.zb, !1), window.addEventListener("DOMContentLoaded", chrome.cast.zb, !1));
})();
(function() {var b, l = l || {};
l.global = this;
l.ga = function(a) {
  return void 0 !== a;
};
l.de = function(a, c, d) {
  a = a.split(".");
  d = d || l.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && l.ga(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
l.Dt = function(a, c) {
  l.de(a, c);
};
l.ma = !0;
l.ca = "en";
l.Td = !0;
l.Rd = !1;
l.ii = !l.ma;
l.rf = !1;
l.Av = function(a) {
  l.fg(a);
};
l.fg = function(a, c) {
  l.de(a, c);
};
l.vj = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
l.ed = function(a) {
  if (!l.G(a) || !a || -1 == a.search(l.vj)) {
    throw Error("Invalid module identifier");
  }
  if (!l.nl()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (l.ta.Le) {
    throw Error("goog.module may only be called once per module.");
  }
  l.ta.Le = a;
};
l.ed.get = function(a) {
  return l.ed.Gk(a);
};
l.ed.Gk = function() {
};
l.ta = null;
l.nl = function() {
  return null != l.ta;
};
l.ed.ae = function() {
  l.ta.ae = !0;
};
l.Vv = function(a) {
  if (l.ii) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
l.St = function() {
};
l.Gg = function(a, c) {
  for (var d = a.split("."), e = c || l.global, f;f = d.shift();) {
    if (l.bd(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
l.ju = function(a, c) {
  var d = c || l.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
l.Cs = function(a, c, d, e) {
  if (l.pf) {
    var f;
    a = a.replace(/\\/g, "/");
    for (var g = l.la, h = 0;f = c[h];h++) {
      g.yc[f] = a, g.Pe[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in g.Bb || (g.Bb[a] = {}), g.Bb[a][c] = !0;
    }
  }
};
l.ww = !1;
l.Zo = !0;
l.ev = function(a) {
  l.global.console && l.global.console.error(a);
};
l.Fv = function() {
};
l.qb = "";
l.zc = function() {
};
l.As = function() {
  throw Error("unimplemented abstract method");
};
l.Bj = function(a) {
  a.oe = function() {
    if (a.vc) {
      return a.vc;
    }
    l.ma && (l.Rg[l.Rg.length] = a);
    return a.vc = new a;
  };
};
l.Rg = [];
l.Ei = !0;
l.gj = l.ma;
l.Il = {};
l.pf = !1;
l.pf && (l.la = {Pe:{}, yc:{}, Bb:{}, Yh:{}, td:{}, Rc:{}}, l.Ng = function() {
  var a = l.global.document;
  return null != a && "write" in a;
}, l.qk = function() {
  if (l.ga(l.global.ei)) {
    l.qb = l.global.ei;
  } else {
    if (l.Ng()) {
      for (var a = l.global.document.getElementsByTagName("SCRIPT"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          l.qb = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, l.we = function(a, c) {
  (l.global.Zn || l.nn)(a, c) && (l.la.td[a] = !0);
}, l.Ci = !(l.global.atob || !l.global.document || !l.global.document.all), l.gl = function(a) {
  l.we("", 'goog.retrieveAndExecModule_("' + a + '");') && (l.la.td[a] = !0);
}, l.Re = [], l.yw = function(a, c) {
  return l.Ei && l.ga(l.global.JSON) ? "goog.loadModule(" + l.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, l.Hl = function() {
  var a = l.Re.length;
  if (0 < a) {
    var c = l.Re;
    l.Re = [];
    for (var d = 0;d < a;d++) {
      l.sh(c[d]);
    }
  }
}, l.hv = function(a) {
  l.Xg(a) && l.Cj(a) && l.sh(l.qb + l.re(a));
}, l.Xg = function(a) {
  return (a = l.re(a)) && l.la.Pe[a] ? l.qb + a in l.la.Rc : !1;
}, l.Cj = function(a) {
  if ((a = l.re(a)) && a in l.la.Bb) {
    for (var c in l.la.Bb[a]) {
      if (!l.xl(c) && !l.Xg(c)) {
        return !1;
      }
    }
  }
  return !0;
}, l.sh = function(a) {
  if (a in l.la.Rc) {
    var c = l.la.Rc[a];
    delete l.la.Rc[a];
    l.Tk(c);
  }
}, l.bv = function(a) {
  l.nm(a);
}, l.av = function(a) {
  var c = l.ta;
  try {
    l.ta = {Le:void 0, ae:!1};
    var d;
    if (l.Wa(a)) {
      d = a.call(l.global, {});
    } else {
      if (l.G(a)) {
        d = l.Gl.call(l.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = l.ta.Le;
    if (!l.G(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    l.ta.ae ? l.fg(e, d) : l.gj && Object.seal && Object.seal(d);
    l.Il[e] = d;
  } finally {
    l.ta = c;
  }
}, l.Gl = function(a) {
  eval(a);
  return {};
}, l.mn = function(a) {
  l.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
}, l.Dj = function(a) {
  var c = l.global.document, d = c.createElement("script");
  d.type = "text/javascript";
  d.src = a;
  d.defer = !1;
  d.async = !1;
  c.head.appendChild(d);
}, l.nn = function(a, c) {
  if (l.Ng()) {
    var d = l.global.document;
    if (!l.rf && "complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = l.Ci;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++l.mh + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : l.rf ? l.Dj(a) : l.mn(a) : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return !0;
  }
  return !1;
}, l.mh = 0, l.tv = function(a, c) {
  "complete" == a.readyState && l.mh == c && l.Hl();
  return !0;
}, l.zw = function(a) {
  function c(a) {
    if (!(a in f.td || a in f.Yh)) {
      f.Yh[a] = !0;
      if (a in f.Bb) {
        for (var g in f.Bb[a]) {
          if (!l.xl(g)) {
            if (g in f.yc) {
              c(f.yc[g]);
            } else {
              throw Error("Undefined nameToPath for " + g);
            }
          }
        }
      }
      a in e || (e[a] = !0, d.push(a));
    }
  }
  var d = [], e = {}, f = l.la;
  c(a);
  for (a = 0;a < d.length;a++) {
    var g = d[a];
    l.la.td[g] = !0;
  }
  var h = l.ta;
  l.ta = null;
  for (a = 0;a < d.length;a++) {
    if (g = d[a]) {
      f.Pe[g] ? l.gl(l.qb + g) : l.we(l.qb + g);
    } else {
      throw l.ta = h, Error("Undefined script input");
    }
  }
  l.ta = h;
}, l.re = function(a) {
  return a in l.la.yc ? l.la.yc[a] : null;
}, l.qk(), l.global.$n || l.we(l.qb + "deps.js"));
l.ov = function(a) {
  a = a.split("/");
  for (var c = 0;c < a.length;) {
    "." == a[c] ? a.splice(c, 1) : c && ".." == a[c] && a[c - 1] && ".." != a[c - 1] ? a.splice(--c, 2) : c++;
  }
  return a.join("/");
};
l.$u = function(a) {
  if (l.global.fi) {
    return l.global.fi(a);
  }
  var c = new l.global.XMLHttpRequest;
  c.open("get", a, !1);
  c.send();
  return c.responseText;
};
l.nm = function() {
};
l.wa = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
l.eh = function(a) {
  return null === a;
};
l.bd = function(a) {
  return null != a;
};
l.isArray = function(a) {
  return "array" == l.wa(a);
};
l.V = function(a) {
  var c = l.wa(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
l.zu = function(a) {
  return l.Rb(a) && "function" == typeof a.getFullYear;
};
l.G = function(a) {
  return "string" == typeof a;
};
l.ad = function(a) {
  return "boolean" == typeof a;
};
l.xc = function(a) {
  return "number" == typeof a;
};
l.Wa = function(a) {
  return "function" == l.wa(a);
};
l.Rb = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
l.sc = function(a) {
  return a[l.pb] || (a[l.pb] = ++l.dn);
};
l.ou = function(a) {
  return !!a[l.pb];
};
l.lm = function(a) {
  "removeAttribute" in a && a.removeAttribute(l.pb);
  try {
    delete a[l.pb];
  } catch (c) {
  }
};
l.pb = "closure_uid_" + (1E9 * Math.random() >>> 0);
l.dn = 0;
l.Yt = l.sc;
l.Dv = l.lm;
l.Sj = function(a) {
  var c = l.wa(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.Sj(a[d]);
    }
    return c;
  }
  return a;
};
l.Ij = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
l.Hj = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
l.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? l.bind = l.Ij : l.bind = l.Hj;
  return l.bind.apply(null, arguments);
};
l.Dh = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
l.jv = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
l.now = l.Td && Date.now || function() {
  return +new Date;
};
l.Tk = function(a) {
  if (l.global.execScript) {
    l.global.execScript(a, "JavaScript");
  } else {
    if (l.global.eval) {
      if (null == l.Tc) {
        if (l.global.eval("var _evalTest_ = 1;"), "undefined" != typeof l.global._evalTest_) {
          try {
            delete l.global._evalTest_;
          } catch (e) {
          }
          l.Tc = !0;
        } else {
          l.Tc = !1;
        }
      }
      if (l.Tc) {
        l.global.eval(a);
      } else {
        var c = l.global.document, d = c.createElement("SCRIPT");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.body.appendChild(d);
        c.body.removeChild(d);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
l.Tc = null;
l.Xt = function(a, c) {
  var d = function(a) {
    return l.kg[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = l.kg ? "BY_WHOLE" == l.Zj ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
l.Pv = function(a, c) {
  l.kg = a;
  l.Zj = c;
};
l.$t = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return null != c && e in c ? c[e] : a;
  }));
  return a;
};
l.au = function(a) {
  return a;
};
l.F = function(a, c, d) {
  l.de(a, c, d);
};
l.w = function(a, c, d) {
  a[c] = d;
};
l.vb = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Cb = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.Gj = function(a, d, g) {
    for (var h = Array(arguments.length - 2), k = 2;k < arguments.length;k++) {
      h[k - 2] = arguments[k];
    }
    return c.prototype[d].apply(a, h);
  };
};
l.Gj = function(a, c, d) {
  var e = arguments.callee.caller;
  if (l.Rd || l.ma && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Cb) {
    for (var f = Array(arguments.length - 1), g = 1;g < arguments.length;g++) {
      f[g - 1] = arguments[g];
    }
    return e.Cb.constructor.apply(a, f);
  }
  f = Array(arguments.length - 2);
  for (g = 2;g < arguments.length;g++) {
    f[g - 2] = arguments[g];
  }
  for (var g = !1, h = a.constructor;h;h = h.Cb && h.Cb.constructor) {
    if (h.prototype[c] === e) {
      g = !0;
    } else {
      if (g) {
        return h.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
l.scope = function(a) {
  a.call(l.global);
};
l.Ha = function(a, c) {
  var d = c.constructor, e = c.Vm;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = l.Ha.Wj(d, a);
  a && l.vb(d, a);
  delete c.constructor;
  delete c.Vm;
  l.Ha.Yf(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : l.Ha.Yf(d, e));
  return d;
};
l.Ha.fj = l.ma;
l.Ha.Wj = function(a, c) {
  if (l.Ha.fj && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[l.nj]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[l.pb] = c[l.pb];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
l.Ha.Jf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
l.Ha.Yf = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < l.Ha.Jf.length;e++) {
    d = l.Ha.Jf[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
l.gw = function() {
};
l.nj = "goog_defineClass_legacy_unsealable";
var chrome = chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.a = {};
l.F("chrome.cast.games", chrome.cast.a);
chrome.cast.a.Kd = "urn:x-cast:com.google.cast.games";
l.w(chrome.cast.a, "NAMESPACE", chrome.cast.a.Kd);
chrome.cast.a.Qd = "1.0.0";
l.w(chrome.cast.a, "SDK_VERSION_NUMBER", chrome.cast.a.Qd);
chrome.cast.a.Bf = {UNKNOWN:0, LOADING:1, RUNNING:2, PAUSED:3, SHOWING_INFO_SCREEN:4};
l.w(chrome.cast.a, "GameplayState", chrome.cast.a.Bf);
chrome.cast.a.Gf = {UNKNOWN:0, OPEN:1, CLOSED:2};
l.w(chrome.cast.a, "LobbyState", chrome.cast.a.Gf);
chrome.cast.a.Za = {INVALID_REQUEST:"invalid_request", NOT_ALLOWED:"not_allowed", INCORRECT_VERSION:"incorrect_version", TOO_MANY_PLAYERS:"too_many_players", wd:"cast_error"};
l.w(chrome.cast.a, "GameManagerErrorCode", chrome.cast.a.Za);
chrome.cast.a.D = {};
chrome.cast.a.D.Ga = {Sd:0, INVALID_REQUEST:1, NOT_ALLOWED:2, INCORRECT_VERSION:3, TOO_MANY_PLAYERS:4};
chrome.cast.a.D.Ga.Ck = function(a) {
  switch(a) {
    case chrome.cast.a.D.Ga.INVALID_REQUEST:
      return chrome.cast.a.Za.INVALID_REQUEST;
    case chrome.cast.a.D.Ga.NOT_ALLOWED:
      return chrome.cast.a.Za.NOT_ALLOWED;
    case chrome.cast.a.D.Ga.INCORRECT_VERSION:
      return chrome.cast.a.Za.INCORRECT_VERSION;
    case chrome.cast.a.D.Ga.TOO_MANY_PLAYERS:
      return chrome.cast.a.Za.TOO_MANY_PLAYERS;
    default:
      throw Error("Cannot get error code for status code " + a);;
  }
};
chrome.cast.a.D.xi = function() {
  this.type = chrome.cast.a.D.cc.GAME_MANAGER_PROCESSED_RESULT;
  this.requestId = 0;
  this.playerId = "";
  this.playerToken = null;
  this.statusCode = chrome.cast.a.D.Ga.Sd;
  this.errorDescription = "";
  this.gameplayState = chrome.cast.a.Bf.UNKNOWN;
  this.lobbyState = chrome.cast.a.Gf.UNKNOWN;
  this.players = [];
  this.gameData = null;
  this.gameStatusText = "";
  this.extraMessageData = this.gameManagerConfig = null;
};
l.F("chrome.cast.games.internal.GameManagerMessage", chrome.cast.a.D.xi);
chrome.cast.a.D.cc = {UNKNOWN:0, GAME_MANAGER_PROCESSED_RESULT:1, GAME_MESSAGE:2};
l.F("chrome.cast.games.internal.GameManagerMessageType", chrome.cast.a.D.cc);
chrome.cast.a.PlayerState = {UNKNOWN:0, DROPPED:1, QUIT:2, AVAILABLE:3, READY:4, IDLE:5, PLAYING:6};
l.w(chrome.cast.a, "PlayerState", chrome.cast.a.PlayerState);
chrome.cast.a.D.Od = function() {
  this.wh = 1E3 * Math.floor(1E5 * Math.random());
};
l.Bj(chrome.cast.a.D.Od);
chrome.cast.a.D.Od.prototype.Kk = function() {
  var a = this.wh++;
  0 == a && (a = this.wh++);
  return a;
};
chrome.cast.a.D.na = {UNKNOWN:0, Lf:1, Yi:2, Vi:3, Wi:4, Xi:5, ui:6, GAME_MESSAGE:7, Bd:1100};
l.F("chrome.cast.games.internal.GameManagerRequestType", chrome.cast.a.D.na);
chrome.cast.a.D.zf = function() {
  this.type = chrome.cast.a.D.na.UNKNOWN;
  this.requestId = chrome.cast.a.D.Od.oe().Kk();
  this.playerId = "";
  this.extraMessageData = this.playerToken = null;
};
chrome.cast.a.D.na.Dk = function(a) {
  var c = chrome.cast.a.PlayerState, d = chrome.cast.a.D.na;
  switch(a) {
    case c.QUIT:
      return d.Xi;
    case c.AVAILABLE:
      return d.Lf;
    case c.READY:
      return d.Yi;
    case c.IDLE:
      return d.Vi;
    case c.PLAYING:
      return d.Wi;
    default:
      throw Error("No mapping to a game manager request type for player state: " + a);;
  }
};
chrome.cast.a.bc = function(a, c, d, e) {
  this.errorCode = a;
  this.errorDescription = c;
  this.result = d;
  this.castError = e;
};
l.w(chrome.cast.a, "GameManagerError", chrome.cast.a.bc);
chrome.cast.a.Dd = function(a, c, d) {
  this.playerId = a;
  this.requestId = c;
  this.extraMessageData = d;
};
l.w(chrome.cast.a, "GameManagerResult", chrome.cast.a.Dd);
l.json = {};
l.json.Vd = !1;
l.json.Bl = function(a) {
  return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
};
l.json.parse = l.json.Vd ? l.global.JSON.parse : function(a) {
  a = String(a);
  if (l.json.Bl(a)) {
    try {
      return eval("(" + a + ")");
    } catch (c) {
    }
  }
  throw Error("Invalid JSON string: " + a);
};
l.json.tw = l.json.Vd ? l.global.JSON.parse : function(a) {
  return eval("(" + a + ")");
};
l.json.Ph = l.json.Vd ? l.global.JSON.stringify : function(a, c) {
  return (new l.json.va(c)).Ph(a);
};
l.json.va = function(a) {
  this.od = a;
};
l.json.va.prototype.Ph = function(a) {
  var c = [];
  this.Ve(a, c);
  return c.join("");
};
l.json.va.prototype.Ve = function(a, c) {
  if (null == a) {
    c.push("null");
  } else {
    if ("object" == typeof a) {
      if (l.isArray(a)) {
        this.Lm(a, c);
        return;
      }
      if (a instanceof String || a instanceof Number || a instanceof Boolean) {
        a = a.valueOf();
      } else {
        this.Nm(a, c);
        return;
      }
    }
    switch(typeof a) {
      case "string":
        this.Qh(a, c);
        break;
      case "number":
        this.Mm(a, c);
        break;
      case "boolean":
        c.push(String(a));
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof a);;
    }
  }
};
l.json.va.dg = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
l.json.va.Rj = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
l.json.va.prototype.Qh = function(a, c) {
  c.push('"', a.replace(l.json.va.Rj, function(a) {
    var c = l.json.va.dg[a];
    c || (c = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), l.json.va.dg[a] = c);
    return c;
  }), '"');
};
l.json.va.prototype.Mm = function(a, c) {
  c.push(isFinite(a) && !isNaN(a) ? String(a) : "null");
};
l.json.va.prototype.Lm = function(a, c) {
  var d = a.length;
  c.push("[");
  for (var e = "", f = 0;f < d;f++) {
    c.push(e), e = a[f], this.Ve(this.od ? this.od.call(a, String(f), e) : e, c), e = ",";
  }
  c.push("]");
};
l.json.va.prototype.Nm = function(a, c) {
  c.push("{");
  var d = "", e;
  for (e in a) {
    if (Object.prototype.hasOwnProperty.call(a, e)) {
      var f = a[e];
      "function" != typeof f && (c.push(d), this.Qh(e, c), c.push(":"), this.Ve(this.od ? this.od.call(a, e, f) : f, c), d = ",");
    }
  }
  c.push("}");
};
l.debug = {};
l.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, l.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
l.vb(l.debug.Error, Error);
l.debug.Error.prototype.name = "CustomError";
l.ja = {};
l.ja.Ni = {ki:1, Bn:2, TEXT:3, Un:4, bp:5, ap:6, tr:7, fo:8, Do:9, Fo:10, Eo:11, Tq:12};
l.c = {};
l.c.yd = !1;
l.c.ri = !1;
l.c.pj = {Li:"\u00a0"};
l.c.startsWith = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
l.c.endsWith = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
l.c.dt = function(a, c) {
  return 0 == l.c.cg(c, a.substr(0, c.length));
};
l.c.bt = function(a, c) {
  return 0 == l.c.cg(c, a.substr(a.length - c.length, c.length));
};
l.c.ct = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
l.c.Wm = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
l.c.lt = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
l.c.ze = function(a) {
  return /^[\s\xa0]*$/.test(a);
};
l.c.Cu = function(a) {
  return 0 == a.length;
};
l.c.ra = l.c.ze;
l.c.kl = function(a) {
  return l.c.ze(l.c.Ol(a));
};
l.c.Bu = l.c.kl;
l.c.xu = function(a) {
  return !/[^\t\n\r ]/.test(a);
};
l.c.uu = function(a) {
  return !/[^a-zA-Z]/.test(a);
};
l.c.Nu = function(a) {
  return !/[^0-9]/.test(a);
};
l.c.vu = function(a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
l.c.Tu = function(a) {
  return " " == a;
};
l.c.Uu = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
l.c.ew = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
l.c.$s = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
l.c.qv = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
l.c.pv = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
l.c.kt = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
l.c.trim = l.Td && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
l.c.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
l.c.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
l.c.cg = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
l.c.xh = function(a, c, d) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!c) {
    return 1;
  }
  for (var e = a.toLowerCase().match(d), f = c.toLowerCase().match(d), g = Math.min(e.length, f.length), h = 0;h < g;h++) {
    d = e[h];
    var k = f[h];
    if (d != k) {
      return a = parseInt(d, 10), !isNaN(a) && (c = parseInt(k, 10), !isNaN(c) && a - c) ? a - c : d < k ? -1 : 1;
    }
  }
  return e.length != f.length ? e.length - f.length : a < c ? -1 : 1;
};
l.c.su = function(a, c) {
  return l.c.xh(a, c, /\d+|\D+/g);
};
l.c.uk = function(a, c) {
  return l.c.xh(a, c, /\d+|\.\d+|\D+/g);
};
l.c.sv = l.c.uk;
l.c.vw = function(a) {
  return encodeURIComponent(String(a));
};
l.c.uw = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
l.c.vh = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
l.c.Ua = function(a, c) {
  if (c) {
    a = a.replace(l.c.af, "&amp;").replace(l.c.Ff, "&lt;").replace(l.c.wf, "&gt;").replace(l.c.Nf, "&quot;").replace(l.c.Qf, "&#39;").replace(l.c.If, "&#0;"), l.c.yd && (a = a.replace(l.c.sf, "&#101;"));
  } else {
    if (!l.c.ai.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(l.c.af, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(l.c.Ff, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(l.c.wf, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(l.c.Nf, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(l.c.Qf, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(l.c.If, "&#0;"));
    l.c.yd && -1 != a.indexOf("e") && (a = a.replace(l.c.sf, "&#101;"));
  }
  return a;
};
l.c.af = /&/g;
l.c.Ff = /</g;
l.c.wf = />/g;
l.c.Nf = /"/g;
l.c.Qf = /'/g;
l.c.If = /\x00/g;
l.c.sf = /e/g;
l.c.ai = l.c.yd ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
l.c.Vh = function(a) {
  return l.c.contains(a, "&") ? !l.c.ri && "document" in l.global ? l.c.Wh(a) : l.c.en(a) : a;
};
l.c.pw = function(a, c) {
  return l.c.contains(a, "&") ? l.c.Wh(a, c) : a;
};
l.c.Wh = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : l.global.document.createElement("div");
  return a.replace(l.c.yi, function(a, c) {
    var h = d[a];
    if (h) {
      return h;
    }
    if ("#" == c.charAt(0)) {
      var k = Number("0" + c.substr(1));
      isNaN(k) || (h = String.fromCharCode(k));
    }
    h || (e.innerHTML = a + " ", h = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = h;
  });
};
l.c.en = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
l.c.yi = /&([^;\s<&]+);?/g;
l.c.jn = function(a, c) {
  return l.c.vh(a.replace(/  /g, " &#160;"), c);
};
l.c.xv = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + l.c.pj.Li);
};
l.c.fw = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
l.c.truncate = function(a, c, d) {
  d && (a = l.c.Vh(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = l.c.Ua(a));
  return a;
};
l.c.nw = function(a, c, d, e) {
  d && (a = l.c.Vh(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = l.c.Ua(a));
  return a;
};
l.c.Xe = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\", "<":"<"};
l.c.cd = {"'":"\\'"};
l.c.quote = function(a) {
  a = String(a);
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = l.c.Xe[e] || (31 < f && 127 > f ? e : l.c.pg(e));
  }
  c.push('"');
  return c.join("");
};
l.c.Nt = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = l.c.pg(a.charAt(d));
  }
  return c.join("");
};
l.c.pg = function(a) {
  if (a in l.c.cd) {
    return l.c.cd[a];
  }
  if (a in l.c.Xe) {
    return l.c.cd[a] = l.c.Xe[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return l.c.cd[a] = c;
};
l.c.contains = function(a, c) {
  return -1 != a.indexOf(c);
};
l.c.Pj = function(a, c) {
  return l.c.contains(a.toLowerCase(), c.toLowerCase());
};
l.c.tt = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
l.c.Vb = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
l.c.remove = function(a, c) {
  var d = new RegExp(l.c.Se(c), "");
  return a.replace(d, "");
};
l.c.removeAll = function(a, c) {
  var d = new RegExp(l.c.Se(c), "g");
  return a.replace(d, "");
};
l.c.Se = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
l.c.repeat = String.prototype.repeat ? function(a, c) {
  return a.repeat(c);
} : function(a, c) {
  return Array(c + 1).join(a);
};
l.c.wv = function(a, c, d) {
  a = l.ga(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return l.c.repeat("0", Math.max(0, c - d)) + a;
};
l.c.Ol = function(a) {
  return null == a ? "" : String(a);
};
l.c.Ws = function(a) {
  return Array.prototype.join.call(arguments, "");
};
l.c.du = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ l.now()).toString(36);
};
l.c.hc = function(a, c) {
  for (var d = 0, e = l.c.trim(String(a)).split("."), f = l.c.trim(String(c)).split("."), g = Math.max(e.length, f.length), h = 0;0 == d && h < g;h++) {
    var k = e[h] || "", n = f[h] || "", t = /(\d*)(\D*)/g, I = /(\d*)(\D*)/g;
    do {
      var q = t.exec(k) || ["", "", ""], u = I.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == u[0].length) {
        break;
      }
      d = l.c.Xd(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || l.c.Xd(0 == q[2].length, 0 == u[2].length) || l.c.Xd(q[2], u[2]);
    } while (0 == d);
  }
  return d;
};
l.c.Xd = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
l.c.pu = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d) >>> 0;
  }
  return c;
};
l.c.gn = 2147483648 * Math.random() | 0;
l.c.yt = function() {
  return "goog_" + l.c.gn++;
};
l.c.kw = function(a) {
  var c = Number(a);
  return 0 == c && l.c.ze(a) ? NaN : c;
};
l.c.Hu = function(a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
l.c.Vu = function(a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
l.c.jw = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
l.c.lw = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
l.c.mw = function(a, c) {
  var d = l.G(c) ? l.c.Se(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
l.c.at = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
l.c.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return l.G(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
l.c.$v = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
l.c.Gt = function(a, c) {
  var d = [], e = [];
  if (a == c) {
    return 0;
  }
  if (!a.length || !c.length) {
    return Math.max(a.length, c.length);
  }
  for (var f = 0;f < c.length + 1;f++) {
    d[f] = f;
  }
  for (f = 0;f < a.length;f++) {
    e[0] = f + 1;
    for (var g = 0;g < c.length;g++) {
      e[g + 1] = Math.min(e[g] + 1, d[g + 1] + 1, d[g] + (a[f] != c[g]));
    }
    for (g = 0;g < d.length;g++) {
      d[g] = e[g];
    }
  }
  return e[c.length];
};
l.l = {};
l.l.xa = l.ma;
l.l.Fc = function(a, c) {
  c.unshift(a);
  l.debug.Error.call(this, l.c.Wm.apply(null, c));
  c.shift();
};
l.vb(l.l.Fc, l.debug.Error);
l.l.Fc.prototype.name = "AssertionError";
l.l.hi = function(a) {
  throw a;
};
l.l.ce = l.l.hi;
l.l.Ta = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), g = e
  } else {
    a && (f += ": " + a, g = c);
  }
  a = new l.l.Fc("" + f, g || []);
  l.l.ce(a);
};
l.l.Sv = function(a) {
  l.l.xa && (l.l.ce = a);
};
l.l.assert = function(a, c, d) {
  l.l.xa && !a && l.l.Ta("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.pa = function(a, c) {
  l.l.xa && l.l.ce(new l.l.Fc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
l.l.Ns = function(a, c, d) {
  l.l.xa && !l.xc(a) && l.l.Ta("Expected number but got %s: %s.", [l.wa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Qs = function(a, c, d) {
  l.l.xa && !l.G(a) && l.l.Ta("Expected string but got %s: %s.", [l.wa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ls = function(a, c, d) {
  l.l.xa && !l.Wa(a) && l.l.Ta("Expected function but got %s: %s.", [l.wa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Os = function(a, c, d) {
  l.l.xa && !l.Rb(a) && l.l.Ta("Expected object but got %s: %s.", [l.wa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Is = function(a, c, d) {
  l.l.xa && !l.isArray(a) && l.l.Ta("Expected array but got %s: %s.", [l.wa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Js = function(a, c, d) {
  l.l.xa && !l.ad(a) && l.l.Ta("Expected boolean but got %s: %s.", [l.wa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ks = function(a, c, d) {
  !l.l.xa || l.Rb(a) && a.nodeType == l.ja.Ni.ki || l.l.Ta("Expected Element but got %s: %s.", [l.wa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ms = function(a, c, d, e) {
  !l.l.xa || a instanceof c || l.l.Ta("Expected instanceof %s but got %s.", [l.l.Kg(c), l.l.Kg(a)], d, Array.prototype.slice.call(arguments, 3));
  return a;
};
l.l.Ps = function() {
  for (var a in Object.prototype) {
    l.l.pa(a + " should not be enumerable in Object.prototype.");
  }
};
l.l.Kg = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
l.f = {};
l.Na = l.Td;
l.f.Ma = !1;
l.f.hm = function(a) {
  return a[a.length - 1];
};
l.f.Xu = l.f.hm;
l.f.indexOf = l.Na && (l.f.Ma || Array.prototype.indexOf) ? function(a, c, d) {
  return Array.prototype.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (l.G(a)) {
    return l.G(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
l.f.lastIndexOf = l.Na && (l.f.Ma || Array.prototype.lastIndexOf) ? function(a, c, d) {
  return Array.prototype.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (l.G(a)) {
    return l.G(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
l.f.forEach = l.Na && (l.f.Ma || Array.prototype.forEach) ? function(a, c, d) {
  Array.prototype.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    g in f && c.call(d, f[g], g, a);
  }
};
l.f.wg = function(a, c, d) {
  for (var e = l.G(a) ? a.split("") : a, f = a.length - 1;0 <= f;--f) {
    f in e && c.call(d, e[f], f, a);
  }
};
l.f.filter = l.Na && (l.f.Ma || Array.prototype.filter) ? function(a, c, d) {
  return Array.prototype.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], g = 0, h = l.G(a) ? a.split("") : a, k = 0;k < e;k++) {
    if (k in h) {
      var n = h[k];
      c.call(d, n, k, a) && (f[g++] = n);
    }
  }
  return f;
};
l.f.map = l.Na && (l.f.Ma || Array.prototype.map) ? function(a, c, d) {
  return Array.prototype.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), g = l.G(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in g && (f[h] = c.call(d, g[h], h, a));
  }
  return f;
};
l.f.reduce = l.Na && (l.f.Ma || Array.prototype.reduce) ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return Array.prototype.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.f.forEach(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.f.reduceRight = l.Na && (l.f.Ma || Array.prototype.reduceRight) ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return Array.prototype.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.f.wg(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.f.some = l.Na && (l.f.Ma || Array.prototype.some) ? function(a, c, d) {
  return Array.prototype.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return !0;
    }
  }
  return !1;
};
l.f.every = l.Na && (l.f.Ma || Array.prototype.every) ? function(a, c, d) {
  return Array.prototype.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && !c.call(d, f[g], g, a)) {
      return !1;
    }
  }
  return !0;
};
l.f.count = function(a, c, d) {
  var e = 0;
  l.f.forEach(a, function(a, g, h) {
    c.call(d, a, g, h) && ++e;
  }, d);
  return e;
};
l.f.find = function(a, c, d) {
  c = l.f.findIndex(a, c, d);
  return 0 > c ? null : l.G(a) ? a.charAt(c) : a[c];
};
l.f.findIndex = function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return g;
    }
  }
  return -1;
};
l.f.Qt = function(a, c, d) {
  c = l.f.rk(a, c, d);
  return 0 > c ? null : l.G(a) ? a.charAt(c) : a[c];
};
l.f.rk = function(a, c, d) {
  for (var e = l.G(a) ? a.split("") : a, f = a.length - 1;0 <= f;f--) {
    if (f in e && c.call(d, e[f], f, a)) {
      return f;
    }
  }
  return -1;
};
l.f.contains = function(a, c) {
  return 0 <= l.f.indexOf(a, c);
};
l.f.ra = function(a) {
  return 0 == a.length;
};
l.f.clear = function(a) {
  if (!l.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
l.f.insert = function(a, c) {
  l.f.contains(a, c) || a.push(c);
};
l.f.Qg = function(a, c, d) {
  l.f.splice(a, d, 0, c);
};
l.f.ru = function(a, c, d) {
  l.Dh(l.f.splice, a, d, 0).apply(null, c);
};
l.f.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = l.f.indexOf(a, d)) ? a.push(c) : l.f.Qg(a, c, e);
};
l.f.remove = function(a, c) {
  var d = l.f.indexOf(a, c), e;
  (e = 0 <= d) && l.f.Vb(a, d);
  return e;
};
l.f.Vb = function(a, c) {
  return 1 == Array.prototype.splice.call(a, c, 1).length;
};
l.f.Ev = function(a, c, d) {
  c = l.f.findIndex(a, c, d);
  return 0 <= c ? (l.f.Vb(a, c), !0) : !1;
};
l.f.Cv = function(a, c, d) {
  var e = 0;
  l.f.wg(a, function(f, g) {
    c.call(d, f, g, a) && l.f.Vb(a, g) && e++;
  });
  return e;
};
l.f.concat = function(a) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
};
l.f.join = function(a) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
};
l.f.jb = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return [];
};
l.f.clone = l.f.jb;
l.f.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d];
    if (l.V(e)) {
      var f = a.length || 0, g = e.length || 0;
      a.length = f + g;
      for (var h = 0;h < g;h++) {
        a[f + h] = e[h];
      }
    } else {
      a.push(e);
    }
  }
};
l.f.splice = function(a, c, d, e) {
  return Array.prototype.splice.apply(a, l.f.slice(arguments, 1));
};
l.f.slice = function(a, c, d) {
  return 2 >= arguments.length ? Array.prototype.slice.call(a, c) : Array.prototype.slice.call(a, c, d);
};
l.f.km = function(a, c, d) {
  c = c || a;
  var e = function(a) {
    return l.Rb(a) ? "o" + l.sc(a) : (typeof a).charAt(0) + a;
  };
  d = d || e;
  for (var e = {}, f = 0, g = 0;g < a.length;) {
    var h = a[g++], k = d(h);
    Object.prototype.hasOwnProperty.call(e, k) || (e[k] = !0, c[f++] = h);
  }
  c.length = f;
};
l.f.Zf = function(a, c, d) {
  return l.f.$f(a, d || l.f.bb, !1, c);
};
l.f.Ts = function(a, c, d) {
  return l.f.$f(a, c, !0, void 0, d);
};
l.f.$f = function(a, c, d, e, f) {
  for (var g = 0, h = a.length, k;g < h;) {
    var n = g + h >> 1, t;
    t = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < t ? g = n + 1 : (h = n, k = !t);
  }
  return k ? g : ~g;
};
l.f.sort = function(a, c) {
  a.sort(c || l.f.bb);
};
l.f.aw = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || l.f.bb;
  l.f.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
l.f.Tm = function(a, c, d) {
  var e = d || l.f.bb;
  l.f.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
l.f.Zv = function(a, c, d) {
  l.f.Tm(a, function(a) {
    return a[c];
  }, d);
};
l.f.hh = function(a, c, d) {
  c = c || l.f.bb;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return !1;
    }
  }
  return !0;
};
l.f.oa = function(a, c, d) {
  if (!l.V(a) || !l.V(c) || a.length != c.length) {
    return !1;
  }
  var e = a.length;
  d = d || l.f.mg;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return !1;
    }
  }
  return !0;
};
l.f.ot = function(a, c, d) {
  d = d || l.f.bb;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var g = d(a[f], c[f]);
    if (0 != g) {
      return g;
    }
  }
  return l.f.bb(a.length, c.length);
};
l.f.bb = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
l.f.tu = function(a, c) {
  return -l.f.bb(a, c);
};
l.f.mg = function(a, c) {
  return a === c;
};
l.f.Rs = function(a, c, d) {
  d = l.f.Zf(a, c, d);
  return 0 > d ? (l.f.Qg(a, c, -(d + 1)), !0) : !1;
};
l.f.Ss = function(a, c, d) {
  c = l.f.Zf(a, c, d);
  return 0 <= c ? l.f.Vb(a, c) : !1;
};
l.f.Vs = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var g = a[f], h = c.call(d, g, f, a);
    l.ga(h) && (e[h] || (e[h] = [])).push(g);
  }
  return e;
};
l.f.an = function(a, c, d) {
  var e = {};
  l.f.forEach(a, function(f, g) {
    e[c.call(d, f, g, a)] = f;
  });
  return e;
};
l.f.nd = function(a, c, d) {
  var e = [], f = 0, g = a;
  d = d || 1;
  void 0 !== c && (f = a, g = c);
  if (0 > d * (g - f)) {
    return [];
  }
  if (0 < d) {
    for (a = f;a < g;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > g;a += d) {
      e.push(a);
    }
  }
  return e;
};
l.f.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
l.f.tk = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (l.isArray(e)) {
      for (var f = 0;f < e.length;f += 8192) {
        for (var g = l.f.slice(e, f, f + 8192), g = l.f.tk.apply(null, g), h = 0;h < g.length;h++) {
          c.push(g[h]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
l.f.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? Array.prototype.unshift.apply(a, a.splice(-c, c)) : 0 > c && Array.prototype.push.apply(a, a.splice(0, -c)));
  return a;
};
l.f.lv = function(a, c, d) {
  c = Array.prototype.splice.call(a, c, 1);
  Array.prototype.splice.call(a, d, 0, c[0]);
};
l.f.$h = function(a) {
  if (!arguments.length) {
    return [];
  }
  for (var c = [], d = arguments[0].length, e = 1;e < arguments.length;e++) {
    arguments[e].length < d && (d = arguments[e].length);
  }
  for (e = 0;e < d;e++) {
    for (var f = [], g = 0;g < arguments.length;g++) {
      f.push(arguments[g][e]);
    }
    c.push(f);
  }
  return c;
};
l.f.Yv = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), g = a[e];
    a[e] = a[f];
    a[f] = g;
  }
};
l.f.st = function(a, c) {
  var d = [];
  l.f.forEach(c, function(c) {
    d.push(a[c]);
  });
  return d;
};
l.ja.ob = {pn:"A", qn:"ABBR", rn:"ACRONYM", sn:"ADDRESS", xn:"APPLET", yn:"AREA", zn:"ARTICLE", An:"ASIDE", AUDIO:"AUDIO", Cn:"B", Dn:"BASE", En:"BASEFONT", Fn:"BDI", Gn:"BDO", Mn:"BIG", Nn:"BLOCKQUOTE", Pn:"BODY", Qn:"BR", Rn:"BUTTON", Sn:"CANVAS", Tn:"CAPTION", Vn:"CENTER", Xn:"CITE", ao:"CODE", bo:"COL", co:"COLGROUP", eo:"COMMAND", qo:"DATA", ro:"DATALIST", to:"DD", vo:"DEL", wo:"DETAILS", xo:"DFN", yo:"DIALOG", zo:"DIR", Ao:"DIV", Bo:"DL", Vo:"DT", Yo:"EM", EMBED:"EMBED", gp:"FIELDSET", hp:"FIGCAPTION", 
ip:"FIGURE", FONT:"FONT", mp:"FOOTER", FORM:"FORM", FRAME:"FRAME", np:"FRAMESET", pp:"H1", qp:"H2", rp:"H3", sp:"H4", tp:"H5", up:"H6", zp:"HEAD", Ap:"HEADER", Cp:"HGROUP", Dp:"HR", Ep:"HTML", Gp:"I", IFRAME:"IFRAME", Lp:"IMG", Bi:"INPUT", Np:"INS", Rp:"ISINDEX", Sp:"KBD", Up:"KEYGEN", Xp:"LABEL", Yp:"LEGEND", Zp:"LI", Di:"LINK", jq:"MAP", kq:"MARK", lq:"MATH", nq:"MENU", pq:"META", qq:"METER", Qq:"NAV", Rq:"NOFRAMES", Sq:"NOSCRIPT", OBJECT:"OBJECT", Wq:"OL", Yq:"OPTGROUP", Zq:"OPTION", ar:"OUTPUT", 
cr:"P", fr:"PARAM", sr:"PRE", ur:"PROGRESS", Q:"Q", Br:"RP", Cr:"RT", Dr:"RUBY", Er:"S", Gr:"SAMP", SCRIPT:"SCRIPT", Ir:"SECTION", hj:"SELECT", Lr:"SMALL", Mr:"SOURCE", Nr:"SPAN", Pr:"STRIKE", Qr:"STRONG", STYLE:"STYLE", Rr:"SUB", Tr:"SUMMARY", Ur:"SUP", Vr:"SVG", Wr:"TABLE", Xr:"TBODY", Yr:"TD", lj:"TEMPLATE", Zr:"TEXTAREA", as:"TFOOT", bs:"TH", cs:"THEAD", ds:"TIME", es:"TITLE", ls:"TR", TRACK:"TRACK", os:"TT", qs:"U", rs:"UL", us:"VAR", VIDEO:"VIDEO", ws:"WBR"};
l.object = {};
l.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
l.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
l.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
l.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return !0;
    }
  }
  return !1;
};
l.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return !1;
    }
  }
  return !0;
};
l.object.qa = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
l.object.Vt = function(a) {
  for (var c in a) {
    return c;
  }
};
l.object.Wt = function(a) {
  for (var c in a) {
    return a[c];
  }
};
l.object.contains = function(a, c) {
  return l.object.Jb(a, c);
};
l.object.S = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
l.object.ka = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
l.object.iu = function(a, c) {
  for (var d = l.V(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], l.ga(a));d++) {
  }
  return a;
};
l.object.Ib = function(a, c) {
  return null !== a && c in a;
};
l.object.Jb = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return !0;
    }
  }
  return !1;
};
l.object.sk = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
l.object.Rt = function(a, c, d) {
  return (c = l.object.sk(a, c, d)) && a[c];
};
l.object.ra = function(a) {
  for (var c in a) {
    return !1;
  }
  return !0;
};
l.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
l.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
l.object.add = function(a, c, d) {
  if (null !== a && c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  l.object.set(a, c, d);
};
l.object.get = function(a, c, d) {
  return null !== a && c in a ? a[c] : d;
};
l.object.set = function(a, c, d) {
  a[c] = d;
};
l.object.Uv = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
l.object.Xv = function(a, c, d) {
  if (c in a) {
    return a[c];
  }
  d = d();
  return a[c] = d;
};
l.object.oa = function(a, c) {
  for (var d in a) {
    if (!(d in c) || a[d] !== c[d]) {
      return !1;
    }
  }
  for (d in c) {
    if (!(d in a)) {
      return !1;
    }
  }
  return !0;
};
l.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
l.object.hn = function(a) {
  var c = l.wa(a);
  if ("object" == c || "array" == c) {
    if (l.Wa(a.clone)) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.object.hn(a[d]);
    }
    return c;
  }
  return a;
};
l.object.bn = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
l.object.Mf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
l.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var g = 0;g < l.object.Mf.length;g++) {
      d = l.object.Mf[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
l.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
l.object.ig = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.ig.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
l.object.wt = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
l.object.Eu = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
l.ja.tags = {};
l.ja.tags.xj = {area:!0, base:!0, br:!0, col:!0, command:!0, embed:!0, hr:!0, img:!0, input:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, wbr:!0};
l.ja.tags.Cl = function(a) {
  return !0 === l.ja.tags.xj[a];
};
l.i18n = {};
l.i18n.g = {};
l.i18n.g.si = !1;
l.i18n.g.Ef = l.i18n.g.si || ("ar" == l.ca.substring(0, 2).toLowerCase() || "fa" == l.ca.substring(0, 2).toLowerCase() || "he" == l.ca.substring(0, 2).toLowerCase() || "iw" == l.ca.substring(0, 2).toLowerCase() || "ps" == l.ca.substring(0, 2).toLowerCase() || "sd" == l.ca.substring(0, 2).toLowerCase() || "ug" == l.ca.substring(0, 2).toLowerCase() || "ur" == l.ca.substring(0, 2).toLowerCase() || "yi" == l.ca.substring(0, 2).toLowerCase()) && (2 == l.ca.length || "-" == l.ca.substring(2, 3) || "_" == 
l.ca.substring(2, 3)) || 3 <= l.ca.length && "ckb" == l.ca.substring(0, 3).toLowerCase() && (3 == l.ca.length || "-" == l.ca.substring(3, 4) || "_" == l.ca.substring(3, 4));
l.i18n.g.Eb = {Fi:"\u202a", $i:"\u202b", Kf:"\u202c", Gi:"\u200e", aj:"\u200f"};
l.i18n.g.T = {lb:1, nb:-1, Oa:0};
l.i18n.g.ec = "right";
l.i18n.g.dc = "left";
l.i18n.g.Ip = l.i18n.g.Ef ? l.i18n.g.dc : l.i18n.g.ec;
l.i18n.g.Hp = l.i18n.g.Ef ? l.i18n.g.ec : l.i18n.g.dc;
l.i18n.g.$m = function(a, c) {
  return "number" == typeof a ? 0 < a ? l.i18n.g.T.lb : 0 > a ? l.i18n.g.T.nb : c ? null : l.i18n.g.T.Oa : null == a ? null : a ? l.i18n.g.T.nb : l.i18n.g.T.lb;
};
l.i18n.g.Sb = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
l.i18n.g.Xb = "\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
l.i18n.g.fl = /<[^>]*>|&[^;]+;/g;
l.i18n.g.ib = function(a, c) {
  return c ? a.replace(l.i18n.g.fl, "") : a;
};
l.i18n.g.pm = new RegExp("[" + l.i18n.g.Xb + "]");
l.i18n.g.Kl = new RegExp("[" + l.i18n.g.Sb + "]");
l.i18n.g.Zc = function(a, c) {
  return l.i18n.g.pm.test(l.i18n.g.ib(a, c));
};
l.i18n.g.nu = l.i18n.g.Zc;
l.i18n.g.Mg = function(a, c) {
  return l.i18n.g.Kl.test(l.i18n.g.ib(a, c));
};
l.i18n.g.Nl = new RegExp("^[" + l.i18n.g.Sb + "]");
l.i18n.g.um = new RegExp("^[" + l.i18n.g.Xb + "]");
l.i18n.g.yl = function(a) {
  return l.i18n.g.um.test(a);
};
l.i18n.g.tl = function(a) {
  return l.i18n.g.Nl.test(a);
};
l.i18n.g.Lu = function(a) {
  return !l.i18n.g.tl(a) && !l.i18n.g.yl(a);
};
l.i18n.g.Ll = new RegExp("^[^" + l.i18n.g.Xb + "]*[" + l.i18n.g.Sb + "]");
l.i18n.g.rm = new RegExp("^[^" + l.i18n.g.Sb + "]*[" + l.i18n.g.Xb + "]");
l.i18n.g.Rh = function(a, c) {
  return l.i18n.g.rm.test(l.i18n.g.ib(a, c));
};
l.i18n.g.Ru = l.i18n.g.Rh;
l.i18n.g.Um = function(a, c) {
  return l.i18n.g.Ll.test(l.i18n.g.ib(a, c));
};
l.i18n.g.Ju = l.i18n.g.Um;
l.i18n.g.fh = /^http:\/\/.*/;
l.i18n.g.Mu = function(a, c) {
  a = l.i18n.g.ib(a, c);
  return l.i18n.g.fh.test(a) || !l.i18n.g.Mg(a) && !l.i18n.g.Zc(a);
};
l.i18n.g.Ml = new RegExp("[" + l.i18n.g.Sb + "][^" + l.i18n.g.Xb + "]*$");
l.i18n.g.sm = new RegExp("[" + l.i18n.g.Xb + "][^" + l.i18n.g.Sb + "]*$");
l.i18n.g.kk = function(a, c) {
  return l.i18n.g.Ml.test(l.i18n.g.ib(a, c));
};
l.i18n.g.Iu = l.i18n.g.kk;
l.i18n.g.lk = function(a, c) {
  return l.i18n.g.sm.test(l.i18n.g.ib(a, c));
};
l.i18n.g.Pu = l.i18n.g.lk;
l.i18n.g.tm = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
l.i18n.g.Qu = function(a) {
  return l.i18n.g.tm.test(a);
};
l.i18n.g.ag = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g;
l.i18n.g.Lj = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
l.i18n.g.lu = function(a, c) {
  return (void 0 === c ? l.i18n.g.Zc(a) : c) ? a.replace(l.i18n.g.ag, "<span dir=rtl>$&</span>") : a.replace(l.i18n.g.ag, "<span dir=ltr>$&</span>");
};
l.i18n.g.mu = function(a, c) {
  var d = (void 0 === c ? l.i18n.g.Zc(a) : c) ? l.i18n.g.Eb.aj : l.i18n.g.Eb.Gi;
  return a.replace(l.i18n.g.Lj, d + "$&" + d);
};
l.i18n.g.Jt = function(a) {
  return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>";
};
l.i18n.g.Kt = function(a) {
  return l.i18n.g.Eb.$i + a + l.i18n.g.Eb.Kf;
};
l.i18n.g.Ht = function(a) {
  return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>";
};
l.i18n.g.It = function(a) {
  return l.i18n.g.Eb.Fi + a + l.i18n.g.Eb.Kf;
};
l.i18n.g.ck = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
l.i18n.g.El = /left/gi;
l.i18n.g.om = /right/gi;
l.i18n.g.Xm = /%%%%/g;
l.i18n.g.iv = function(a) {
  return a.replace(l.i18n.g.ck, ":$1 $4 $3 $2").replace(l.i18n.g.El, "%%%%").replace(l.i18n.g.om, l.i18n.g.dc).replace(l.i18n.g.Xm, l.i18n.g.ec);
};
l.i18n.g.jk = /([\u0591-\u05f2])"/g;
l.i18n.g.Sm = /([\u0591-\u05f2])'/g;
l.i18n.g.nv = function(a) {
  return a.replace(l.i18n.g.jk, "$1\u05f4").replace(l.i18n.g.Sm, "$1\u05f3");
};
l.i18n.g.kn = /\s+/;
l.i18n.g.al = /[\d\u06f0-\u06f9]/;
l.i18n.g.qm = .4;
l.i18n.g.qg = function(a, c) {
  for (var d = 0, e = 0, f = !1, g = l.i18n.g.ib(a, c).split(l.i18n.g.kn), h = 0;h < g.length;h++) {
    var k = g[h];
    l.i18n.g.Rh(k) ? (d++, e++) : l.i18n.g.fh.test(k) ? f = !0 : l.i18n.g.Mg(k) ? e++ : l.i18n.g.al.test(k) && (f = !0);
  }
  return 0 == e ? f ? l.i18n.g.T.lb : l.i18n.g.T.Oa : d / e > l.i18n.g.qm ? l.i18n.g.T.nb : l.i18n.g.T.lb;
};
l.i18n.g.Et = function(a, c) {
  return l.i18n.g.qg(a, c) == l.i18n.g.T.nb;
};
l.i18n.g.Qv = function(a, c) {
  a && (c = l.i18n.g.$m(c)) && (a.style.textAlign = c == l.i18n.g.T.nb ? l.i18n.g.ec : l.i18n.g.dc, a.dir = c == l.i18n.g.T.nb ? "rtl" : "ltr");
};
l.i18n.g.Rv = function(a, c) {
  switch(l.i18n.g.qg(c)) {
    case l.i18n.g.T.lb:
      a.dir = "ltr";
      break;
    case l.i18n.g.T.nb:
      a.dir = "rtl";
      break;
    default:
      a.removeAttribute("dir");
  }
};
l.i18n.g.Wo = function() {
};
l.c.ps = function() {
};
l.c.R = function() {
  this.qd = "";
  this.kj = l.c.R.Sf;
};
l.c.R.prototype.Va = !0;
l.c.R.prototype.Ka = function() {
  return this.qd;
};
l.c.R.prototype.toString = function() {
  return "Const{" + this.qd + "}";
};
l.c.R.O = function(a) {
  if (a instanceof l.c.R && a.constructor === l.c.R && a.kj === l.c.R.Sf) {
    return a.qd;
  }
  l.l.pa("expected object of type Const, got '" + a + "'");
  return "type_error:Const";
};
l.c.R.he = function(a) {
  return l.c.R.Yj(a);
};
l.c.R.Sf = {};
l.c.R.Yj = function(a) {
  var c = new l.c.R;
  c.qd = a;
  return c;
};
l.b = {};
l.b.I = function() {
  this.kd = "";
  this.cj = l.b.I.ea;
};
l.b.I.prototype.Va = !0;
l.b.I.ea = {};
l.b.I.pc = function(a) {
  a = l.c.R.O(a);
  return 0 === a.length ? l.b.I.EMPTY : l.b.I.jc(a);
};
l.b.I.gt = function() {
};
l.b.I.prototype.Ka = function() {
  return this.kd;
};
l.ma && (l.b.I.prototype.toString = function() {
  return "SafeStyle{" + this.kd + "}";
});
l.b.I.O = function(a) {
  if (a instanceof l.b.I && a.constructor === l.b.I && a.cj === l.b.I.ea) {
    return a.kd;
  }
  l.l.pa("expected object of type SafeStyle, got '" + a + "'");
  return "type_error:SafeStyle";
};
l.b.I.jc = function(a) {
  return (new l.b.I).wb(a);
};
l.b.I.prototype.wb = function(a) {
  this.kd = a;
  return this;
};
l.b.I.EMPTY = l.b.I.jc("");
l.b.I.Fb = "zClosurez";
l.b.I.create = function(a) {
  var c = "", d;
  for (d in a) {
    if (!/^[-_a-zA-Z0-9]+$/.test(d)) {
      throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
    }
    var e = a[d];
    null != e && (e instanceof l.c.R ? e = l.c.R.O(e) : l.b.I.wj.test(e) ? l.b.I.Vk(e) || (l.l.pa("String value requires balanced quotes, got: " + e), e = l.b.I.Fb) : (l.l.pa("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " + e), e = l.b.I.Fb), c += d + ":" + e + ";");
  }
  return c ? l.b.I.jc(c) : l.b.I.EMPTY;
};
l.b.I.Vk = function(a) {
  for (var c = !0, d = !0, e = 0;e < a.length;e++) {
    var f = a.charAt(e);
    "'" == f && d ? c = !c : '"' == f && c && (d = !d);
  }
  return c && d;
};
l.b.I.wj = /^[-,."'%_!# a-zA-Z0-9]+$/;
l.b.I.concat = function(a) {
  var c = "", d = function(a) {
    l.isArray(a) ? l.f.forEach(a, d) : c += l.b.I.O(a);
  };
  l.f.forEach(arguments, d);
  return c ? l.b.I.jc(c) : l.b.I.EMPTY;
};
l.b.U = function() {
  this.jd = "";
  this.Pd = l.b.U.ea;
};
l.b.U.prototype.Va = !0;
l.b.U.ea = {};
l.b.U.concat = function(a) {
  var c = "", d = function(a) {
    l.isArray(a) ? l.f.forEach(a, d) : c += l.b.U.O(a);
  };
  l.f.forEach(arguments, d);
  return l.b.U.Pc(c);
};
l.b.U.pc = function(a) {
  a = l.c.R.O(a);
  return 0 === a.length ? l.b.U.EMPTY : l.b.U.Pc(a);
};
l.b.U.prototype.Ka = function() {
  return this.jd;
};
l.ma && (l.b.U.prototype.toString = function() {
  return "SafeStyleSheet{" + this.jd + "}";
});
l.b.U.O = function(a) {
  if (a instanceof l.b.U && a.constructor === l.b.U && a.Pd === l.b.U.ea) {
    return a.jd;
  }
  l.l.pa("expected object of type SafeStyleSheet, got '" + a + "'");
  return "type_error:SafeStyleSheet";
};
l.b.U.Pc = function(a) {
  return (new l.b.U).wb(a);
};
l.b.U.prototype.wb = function(a) {
  this.jd = a;
  return this;
};
l.b.U.EMPTY = l.b.U.Pc("");
l.Ca = {};
l.Ca.url = {};
l.Ca.url.Vj = function(a) {
  return l.Ca.url.Lg().createObjectURL(a);
};
l.Ca.url.Gv = function(a) {
  l.Ca.url.Lg().revokeObjectURL(a);
};
l.Ca.url.Lg = function() {
  var a = l.Ca.url.tg();
  if (null != a) {
    return a;
  }
  throw Error("This browser doesn't seem to support blob URLs");
};
l.Ca.url.tg = function() {
  return l.ga(l.global.URL) && l.ga(l.global.URL.createObjectURL) ? l.global.URL : l.ga(l.global.webkitURL) && l.ga(l.global.webkitURL.createObjectURL) ? l.global.webkitURL : l.ga(l.global.createObjectURL) ? l.global : null;
};
l.Ca.url.Us = function() {
  return null != l.Ca.url.tg();
};
l.b.J = function() {
  this.Ya = "";
  this.ej = l.b.J.ea;
};
l.b.J.Fb = "about:invalid#zClosurez";
l.b.J.prototype.Va = !0;
l.b.J.prototype.Ka = function() {
  return this.Ya;
};
l.b.J.prototype.ve = !0;
l.b.J.prototype.tb = function() {
  return l.i18n.g.T.lb;
};
l.ma && (l.b.J.prototype.toString = function() {
  return "SafeUrl{" + this.Ya + "}";
});
l.b.J.O = function(a) {
  if (a instanceof l.b.J && a.constructor === l.b.J && a.ej === l.b.J.ea) {
    return a.Ya;
  }
  l.l.pa("expected object of type SafeUrl, got '" + a + "'");
  return "type_error:SafeUrl";
};
l.b.J.pc = function(a) {
  return l.b.J.kc(l.c.R.O(a));
};
l.b.Of = /^(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm))$/i;
l.b.J.Tt = function(a) {
  a = l.b.Of.test(a.type) ? l.Ca.url.Vj(a) : l.b.J.Fb;
  return l.b.J.kc(a);
};
l.b.gi = /^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i;
l.b.J.Ut = function(a) {
  var c = a.match(l.b.gi), c = c && l.b.Of.test(c[1]);
  return l.b.J.kc(c ? a : l.b.J.Fb);
};
l.b.dj = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
l.b.J.Mh = function(a) {
  if (a instanceof l.b.J) {
    return a;
  }
  a = a.Va ? a.Ka() : String(a);
  l.b.dj.test(a) || (a = l.b.J.Fb);
  return l.b.J.kc(a);
};
l.b.J.ea = {};
l.b.J.kc = function(a) {
  var c = new l.b.J;
  c.Ya = a;
  return c;
};
l.b.aa = function() {
  this.ld = "";
  this.mj = l.b.aa.ea;
};
l.b.aa.prototype.Va = !0;
l.b.aa.prototype.Ka = function() {
  return this.ld;
};
l.b.aa.prototype.ve = !0;
l.b.aa.prototype.tb = function() {
  return l.i18n.g.T.lb;
};
l.ma && (l.b.aa.prototype.toString = function() {
  return "TrustedResourceUrl{" + this.ld + "}";
});
l.b.aa.O = function(a) {
  if (a instanceof l.b.aa && a.constructor === l.b.aa && a.mj === l.b.aa.ea) {
    return a.ld;
  }
  l.l.pa("expected object of type TrustedResourceUrl, got '" + a + "'");
  return "type_error:TrustedResourceUrl";
};
l.b.aa.pc = function(a) {
  return l.b.aa.jg(l.c.R.O(a));
};
l.b.aa.ea = {};
l.b.aa.jg = function(a) {
  var c = new l.b.aa;
  c.ld = a;
  return c;
};
l.b.s = function() {
  this.Ya = "";
  this.bj = l.b.s.ea;
  this.Sc = null;
};
l.b.s.prototype.ve = !0;
l.b.s.prototype.tb = function() {
  return this.Sc;
};
l.b.s.prototype.Va = !0;
l.b.s.prototype.Ka = function() {
  return this.Ya;
};
l.ma && (l.b.s.prototype.toString = function() {
  return "SafeHtml{" + this.Ya + "}";
});
l.b.s.O = function(a) {
  if (a instanceof l.b.s && a.constructor === l.b.s && a.bj === l.b.s.ea) {
    return a.Ya;
  }
  l.l.pa("expected object of type SafeHtml, got '" + a + "'");
  return "type_error:SafeHtml";
};
l.b.s.Ua = function(a) {
  if (a instanceof l.b.s) {
    return a;
  }
  var c = null;
  a.ve && (c = a.tb());
  return l.b.s.Ra(l.c.Ua(a.Va ? a.Ka() : String(a)), c);
};
l.b.s.qu = function(a) {
  if (a instanceof l.b.s) {
    return a;
  }
  a = l.b.s.Ua(a);
  return l.b.s.Ra(l.c.vh(l.b.s.O(a)), a.tb());
};
l.b.s.ue = function(a) {
  if (a instanceof l.b.s) {
    return a;
  }
  a = l.b.s.Ua(a);
  return l.b.s.Ra(l.c.jn(l.b.s.O(a)), a.tb());
};
l.b.s.he = l.b.s.Ua;
l.b.s.Tf = /^[a-zA-Z0-9-]+$/;
l.b.s.oj = {action:!0, cite:!0, data:!0, formaction:!0, href:!0, manifest:!0, poster:!0, src:!0};
l.b.s.Mi = l.object.ig(l.ja.ob.EMBED, l.ja.ob.IFRAME, l.ja.ob.Di, l.ja.ob.OBJECT, l.ja.ob.SCRIPT, l.ja.ob.STYLE, l.ja.ob.lj);
l.b.s.create = function(a, c, d) {
  if (!l.b.s.Tf.test(a)) {
    throw Error("Invalid tag name <" + a + ">.");
  }
  if (a.toUpperCase() in l.b.s.Mi) {
    throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
  }
  return l.b.s.Zd(a, c, d);
};
l.b.s.vt = function(a, c, d, e) {
  var f = {};
  f.src = a || null;
  f.srcdoc = c || null;
  a = l.b.s.eg(f, {sandbox:""}, d);
  return l.b.s.Zd("iframe", a, e);
};
l.b.s.xt = function(a, c) {
  var d = l.b.s.eg({type:"text/css"}, {}, c), e = "";
  a = l.f.concat(a);
  for (var f = 0;f < a.length;f++) {
    e += l.b.U.O(a[f]);
  }
  e = l.b.s.Ra(e, l.i18n.g.T.Oa);
  return l.b.s.Zd("style", d, e);
};
l.b.s.wk = function(a, c, d) {
  if (d instanceof l.c.R) {
    d = l.c.R.O(d);
  } else {
    if ("style" == c.toLowerCase()) {
      d = l.b.s.Ok(d);
    } else {
      if (/^on/i.test(c)) {
        throw Error('Attribute "' + c + '" requires goog.string.Const value, "' + d + '" given.');
      }
      if (c.toLowerCase() in l.b.s.oj) {
        if (d instanceof l.b.aa) {
          d = l.b.aa.O(d);
        } else {
          if (d instanceof l.b.J) {
            d = l.b.J.O(d);
          } else {
            if (l.G(d)) {
              d = l.b.J.Mh(d).Ka();
            } else {
              throw Error('Attribute "' + c + '" on tag "' + a + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + d + '" given.');
            }
          }
        }
      }
    }
  }
  d.Va && (d = d.Ka());
  return c + '="' + l.c.Ua(String(d)) + '"';
};
l.b.s.Ok = function(a) {
  if (!l.Rb(a)) {
    throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
  }
  a instanceof l.b.I || (a = l.b.I.create(a));
  return l.b.I.O(a);
};
l.b.s.zt = function(a, c, d, e) {
  c = l.b.s.create(c, d, e);
  c.Sc = a;
  return c;
};
l.b.s.concat = function(a) {
  var c = l.i18n.g.T.Oa, d = "", e = function(a) {
    l.isArray(a) ? l.f.forEach(a, e) : (a = l.b.s.Ua(a), d += l.b.s.O(a), a = a.tb(), c == l.i18n.g.T.Oa ? c = a : a != l.i18n.g.T.Oa && c != a && (c = null));
  };
  l.f.forEach(arguments, e);
  return l.b.s.Ra(d, c);
};
l.b.s.rt = function(a, c) {
  var d = l.b.s.concat(l.f.slice(arguments, 1));
  d.Sc = a;
  return d;
};
l.b.s.ea = {};
l.b.s.Ra = function(a, c) {
  return (new l.b.s).wb(a, c);
};
l.b.s.prototype.wb = function(a, c) {
  this.Ya = a;
  this.Sc = c;
  return this;
};
l.b.s.Zd = function(a, c, d) {
  var e = null, f = "<" + a;
  if (c) {
    for (var g in c) {
      if (!l.b.s.Tf.test(g)) {
        throw Error('Invalid attribute name "' + g + '".');
      }
      var h = c[g];
      l.bd(h) && (f += " " + l.b.s.wk(a, g, h));
    }
  }
  l.bd(d) ? l.isArray(d) || (d = [d]) : d = [];
  l.ja.tags.Cl(a.toLowerCase()) ? f += ">" : (e = l.b.s.concat(d), f += ">" + l.b.s.O(e) + "</" + a + ">", e = e.tb());
  (a = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(a) ? l.i18n.g.T.Oa : null);
  return l.b.s.Ra(f, e);
};
l.b.s.eg = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = a[f];
  }
  for (f in c) {
    e[f] = c[f];
  }
  for (f in d) {
    var g = f.toLowerCase();
    if (g in a) {
      throw Error('Cannot override "' + g + '" attribute, got "' + f + '" with value "' + d[f] + '"');
    }
    g in c && delete e[g];
    e[f] = d[f];
  }
  return e;
};
l.b.s.Co = l.b.s.Ra("<!DOCTYPE html>", l.i18n.g.T.Oa);
l.b.s.EMPTY = l.b.s.Ra("", l.i18n.g.T.Oa);
l.b.$ = function() {
  this.hd = "";
  this.Pd = l.b.$.ea;
};
l.b.$.prototype.Va = !0;
l.b.$.ea = {};
l.b.$.pc = function(a) {
  a = l.c.R.O(a);
  return 0 === a.length ? l.b.$.EMPTY : l.b.$.$d(a);
};
l.b.$.prototype.Ka = function() {
  return this.hd;
};
l.ma && (l.b.$.prototype.toString = function() {
  return "SafeScript{" + this.hd + "}";
});
l.b.$.O = function(a) {
  if (a instanceof l.b.$ && a.constructor === l.b.$ && a.Pd === l.b.$.ea) {
    return a.hd;
  }
  l.l.pa("expected object of type SafeScript, got '" + a + "'");
  return "type_error:SafeScript";
};
l.b.$.$d = function(a) {
  return (new l.b.$).wb(a);
};
l.b.$.prototype.wb = function(a) {
  this.hd = a;
  return this;
};
l.b.$.EMPTY = l.b.$.$d("");
l.b.Db = {};
l.b.Db.Lv = function(a, c, d) {
  return l.b.s.Ra(c, d || null);
};
l.b.Db.Mv = function(a, c) {
  return l.b.$.$d(c);
};
l.b.Db.Nv = function(a, c) {
  return l.b.I.jc(c);
};
l.b.Db.Ov = function(a, c) {
  return l.b.U.Pc(c);
};
l.b.Db.vm = function(a, c) {
  return l.b.J.kc(c);
};
l.b.Db.ow = function(a, c) {
  return l.b.aa.jg(c);
};
l.A = {};
l.A.po = function() {
};
l.L = {};
l.L.ic = function(a) {
  return function() {
    return a;
  };
};
l.L.fp = l.L.ic(!1);
l.L.ns = l.L.ic(!0);
l.L.Uq = l.L.ic(null);
l.L.identity = function(a) {
  return a;
};
l.L.error = function(a) {
  return function() {
    throw Error(a);
  };
};
l.L.pa = function(a) {
  return function() {
    throw a;
  };
};
l.L.cv = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
l.L.rv = function(a) {
  return function() {
    return arguments[a];
  };
};
l.L.xw = function(a, c) {
  return l.L.Km(a, l.L.ic(c));
};
l.L.Mt = function(a, c) {
  return function(d) {
    return c ? a == d : a === d;
  };
};
l.L.pt = function(a, c) {
  var d = arguments, e = d.length;
  return function() {
    var a;
    e && (a = d[e - 1].apply(this, arguments));
    for (var c = e - 2;0 <= c;c--) {
      a = d[c].call(this, a);
    }
    return a;
  };
};
l.L.Km = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
l.L.Ds = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (!c[a].apply(this, arguments)) {
        return !1;
      }
    }
    return !0;
  };
};
l.L.vv = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (c[a].apply(this, arguments)) {
        return !0;
      }
    }
    return !1;
  };
};
l.L.$l = function(a) {
  return function() {
    return !a.apply(this, arguments);
  };
};
l.L.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
l.L.ci = !0;
l.L.Xs = function(a) {
  var c = !1, d;
  return function() {
    if (!l.L.ci) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
l.L.uv = function(a) {
  var c = a;
  return function() {
    if (c) {
      var a = c;
      c = null;
      a();
    }
  };
};
l.L.Bt = function(a, c, d) {
  d && (a = l.bind(a, d));
  var e = null;
  return function(d) {
    l.global.clearTimeout(e);
    var g = arguments;
    e = l.global.setTimeout(function() {
      a.apply(null, g);
    }, c);
  };
};
l.L.iw = function(a, c, d) {
  d && (a = l.bind(a, d));
  var e = null, f = !1, g = [], h = function() {
    e = null;
    f && (f = !1, k());
  }, k = function() {
    e = l.global.setTimeout(h, c);
    a.apply(null, g);
  };
  return function(a) {
    g = arguments;
    e ? f = !0 : k();
  };
};
l.H = {};
l.H.Bv = function(a) {
  return Math.floor(Math.random() * a);
};
l.H.qw = function(a, c) {
  return a + Math.random() * (c - a);
};
l.H.ht = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
l.H.th = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
l.H.Yu = function(a, c, d) {
  return a + d * (c - a);
};
l.H.mv = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
l.H.Ye = function(a) {
  return l.H.th(a, 360);
};
l.H.bw = function(a) {
  return l.H.th(a, 2 * Math.PI);
};
l.H.Uh = function(a) {
  return a * Math.PI / 180;
};
l.H.Zm = function(a) {
  return 180 * a / Math.PI;
};
l.H.Gs = function(a, c) {
  return c * Math.cos(l.H.Uh(a));
};
l.H.Hs = function(a, c) {
  return c * Math.sin(l.H.Uh(a));
};
l.H.Es = function(a, c, d, e) {
  return l.H.Ye(l.H.Zm(Math.atan2(e - c, d - a)));
};
l.H.Fs = function(a, c) {
  var d = l.H.Ye(c) - l.H.Ye(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
l.H.sign = Math.sign || function(a) {
  return 0 < a ? 1 : 0 > a ? -1 : a;
};
l.H.fv = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, g = c.length, h = [], k = 0;k < f + 1;k++) {
    h[k] = [], h[k][0] = 0;
  }
  for (var n = 0;n < g + 1;n++) {
    h[0][n] = 0;
  }
  for (k = 1;k <= f;k++) {
    for (n = 1;n <= g;n++) {
      d(a[k - 1], c[n - 1]) ? h[k][n] = h[k - 1][n - 1] + 1 : h[k][n] = Math.max(h[k - 1][n], h[k][n - 1]);
    }
  }
  for (var t = [], k = f, n = g;0 < k && 0 < n;) {
    d(a[k - 1], c[n - 1]) ? (t.unshift(e(k - 1, n - 1)), k--, n--) : h[k - 1][n] > h[k][n - 1] ? k-- : n--;
  }
  return t;
};
l.H.Sh = function(a) {
  return l.f.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
l.H.Fj = function(a) {
  return l.H.Sh.apply(null, arguments) / arguments.length;
};
l.H.wm = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = l.H.Fj.apply(null, arguments);
  return l.H.Sh.apply(null, l.f.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
l.H.cw = function(a) {
  return Math.sqrt(l.H.wm.apply(null, arguments));
};
l.H.Fu = function(a) {
  return isFinite(a) && 0 == a % 1;
};
l.H.Du = function(a) {
  return isFinite(a) && !isNaN(a);
};
l.H.Ku = function(a) {
  return 0 == a && 0 > 1 / a;
};
l.H.dv = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a ? 1 : 0);
  }
  return 0 == a ? -Infinity : NaN;
};
l.H.Kv = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
l.H.Jv = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
l.j = {};
l.j.da = "StopIteration" in l.global ? l.global.StopIteration : {message:"StopIteration", stack:""};
l.j.Iterator = function() {
};
l.j.Iterator.prototype.next = function() {
  throw l.j.da;
};
l.j.Iterator.prototype.fc = function() {
  return this;
};
l.j.W = function(a) {
  if (a instanceof l.j.Iterator) {
    return a;
  }
  if ("function" == typeof a.fc) {
    return a.fc(!1);
  }
  if (l.V(a)) {
    var c = 0, d = new l.j.Iterator;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw l.j.da;
        }
        if (c in a) {
          return a[c++];
        }
        c++;
      }
    };
    return d;
  }
  throw Error("Not implemented");
};
l.j.forEach = function(a, c, d) {
  if (l.V(a)) {
    try {
      l.f.forEach(a, c, d);
    } catch (e) {
      if (e !== l.j.da) {
        throw e;
      }
    }
  } else {
    a = l.j.W(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (e) {
      if (e !== l.j.da) {
        throw e;
      }
    }
  }
};
l.j.filter = function(a, c, d) {
  var e = l.j.W(a);
  a = new l.j.Iterator;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (c.call(d, a, void 0, e)) {
        return a;
      }
    }
  };
  return a;
};
l.j.Pt = function(a, c, d) {
  return l.j.filter(a, l.L.$l(c), d);
};
l.j.nd = function(a, c, d) {
  var e = 0, f = a, g = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == g) {
    throw Error("Range step argument must not be zero");
  }
  var h = new l.j.Iterator;
  h.next = function() {
    if (0 < g && e >= f || 0 > g && e <= f) {
      throw l.j.da;
    }
    var a = e;
    e += g;
    return a;
  };
  return h;
};
l.j.join = function(a, c) {
  return l.j.jb(a).join(c);
};
l.j.map = function(a, c, d) {
  var e = l.j.W(a);
  a = new l.j.Iterator;
  a.next = function() {
    var a = e.next();
    return c.call(d, a, void 0, e);
  };
  return a;
};
l.j.reduce = function(a, c, d, e) {
  var f = d;
  l.j.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
l.j.some = function(a, c, d) {
  a = l.j.W(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return !0;
      }
    }
  } catch (e) {
    if (e !== l.j.da) {
      throw e;
    }
  }
  return !1;
};
l.j.every = function(a, c, d) {
  a = l.j.W(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return !1;
      }
    }
  } catch (e) {
    if (e !== l.j.da) {
      throw e;
    }
  }
  return !0;
};
l.j.ft = function(a) {
  return l.j.Qj(arguments);
};
l.j.Qj = function(a) {
  var c = l.j.W(a);
  a = new l.j.Iterator;
  var d = null;
  a.next = function() {
    for (;;) {
      if (null == d) {
        var a = c.next();
        d = l.j.W(a);
      }
      try {
        return d.next();
      } catch (f) {
        if (f !== l.j.da) {
          throw f;
        }
        d = null;
      }
    }
  };
  return a;
};
l.j.Ft = function(a, c, d) {
  var e = l.j.W(a);
  a = new l.j.Iterator;
  var f = !0;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (!f || !c.call(d, a, void 0, e)) {
        return f = !1, a;
      }
    }
  };
  return a;
};
l.j.hw = function(a, c, d) {
  var e = l.j.W(a);
  a = new l.j.Iterator;
  a.next = function() {
    var a = e.next();
    if (c.call(d, a, void 0, e)) {
      return a;
    }
    throw l.j.da;
  };
  return a;
};
l.j.jb = function(a) {
  if (l.V(a)) {
    return l.f.jb(a);
  }
  a = l.j.W(a);
  var c = [];
  l.j.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
l.j.oa = function(a, c, d) {
  a = l.j.on({}, a, c);
  var e = d || l.f.mg;
  return l.j.every(a, function(a) {
    return e(a[0], a[1]);
  });
};
l.j.Xl = function(a, c) {
  try {
    return l.j.W(a).next();
  } catch (d) {
    if (d != l.j.da) {
      throw d;
    }
    return c;
  }
};
l.j.product = function(a) {
  if (l.f.some(arguments, function(a) {
    return !a.length;
  }) || !arguments.length) {
    return new l.j.Iterator;
  }
  var c = new l.j.Iterator, d = arguments, e = l.f.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = l.f.map(e, function(a, c) {
        return d[c][a];
      }), c = e.length - 1;0 <= c;c--) {
        if (e[c] < d[c].length - 1) {
          e[c]++;
          break;
        }
        if (0 == c) {
          e = null;
          break;
        }
        e[c] = 0;
      }
      return a;
    }
    throw l.j.da;
  };
  return c;
};
l.j.At = function(a) {
  var c = l.j.W(a), d = [], e = 0;
  a = new l.j.Iterator;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (h) {
        if (h != l.j.da || l.f.ra(d)) {
          throw h;
        }
        f = !0;
      }
    }
    a = d[e];
    e = (e + 1) % d.length;
    return a;
  };
  return a;
};
l.j.count = function(a, c) {
  var d = a || 0, e = l.ga(c) ? c : 1, f = new l.j.Iterator;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
l.j.repeat = function(a) {
  var c = new l.j.Iterator;
  c.next = l.L.ic(a);
  return c;
};
l.j.Bs = function(a) {
  var c = l.j.W(a), d = 0;
  a = new l.j.Iterator;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
l.j.$h = function(a) {
  var c = arguments, d = new l.j.Iterator;
  if (0 < c.length) {
    var e = l.f.map(c, l.j.W);
    d.next = function() {
      return l.f.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
l.j.on = function(a, c) {
  var d = l.f.slice(arguments, 1), e = new l.j.Iterator;
  if (0 < d.length) {
    var f = l.f.map(d, l.j.W);
    e.next = function() {
      var c = !1, d = l.f.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== l.j.da) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw l.j.da;
      }
      return d;
    };
  }
  return e;
};
l.j.qt = function(a, c) {
  var d = l.j.W(c);
  return l.j.filter(a, function() {
    return !!d.next();
  });
};
l.j.Jc = function(a, c) {
  this.iterator = l.j.W(a);
  this.lh = c || l.L.identity;
};
l.vb(l.j.Jc, l.j.Iterator);
l.j.Jc.prototype.next = function() {
  for (;this.lc == this.Th;) {
    this.Qc = this.iterator.next(), this.lc = this.lh(this.Qc);
  }
  this.Th = this.lc;
  return [this.lc, this.Uk(this.Th)];
};
l.j.Jc.prototype.Uk = function(a) {
  for (var c = [];this.lc == a;) {
    c.push(this.Qc);
    try {
      this.Qc = this.iterator.next();
    } catch (d) {
      if (d !== l.j.da) {
        throw d;
      }
      break;
    }
    this.lc = this.lh(this.Qc);
  }
  return c;
};
l.j.ku = function(a, c) {
  return new l.j.Jc(a, c);
};
l.j.dw = function(a, c, d) {
  var e = l.j.W(a);
  a = new l.j.Iterator;
  a.next = function() {
    var a = l.j.jb(e.next());
    return c.apply(d, l.f.concat(a, void 0, e));
  };
  return a;
};
l.j.tee = function(a, c) {
  var d = l.j.W(a), e = l.f.map(l.f.nd(l.xc(c) ? c : 2), function() {
    return [];
  }), f = function() {
    var a = d.next();
    l.f.forEach(e, function(c) {
      c.push(a);
    });
  };
  return l.f.map(e, function(a) {
    var c = new l.j.Iterator;
    c.next = function() {
      l.f.ra(a) && f();
      return a.shift();
    };
    return c;
  });
};
l.j.Lt = function(a, c) {
  return l.j.$h(l.j.count(c), a);
};
l.j.limit = function(a, c) {
  var d = l.j.W(a), e = new l.j.Iterator, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw l.j.da;
  };
  return e;
};
l.j.Tj = function(a, c) {
  for (var d = l.j.W(a);0 < c--;) {
    l.j.Xl(d, null);
  }
  return d;
};
l.j.slice = function(a, c, d) {
  a = l.j.Tj(a, c);
  l.xc(d) && (a = l.j.limit(a, d - c));
  return a;
};
l.j.Wk = function(a) {
  var c = [];
  l.f.km(a, c);
  return a.length != c.length;
};
l.j.im = function(a, c) {
  var d = l.j.jb(a), d = l.f.repeat(d, l.xc(c) ? c : d.length), d = l.j.product.apply(void 0, d);
  return l.j.filter(d, function(a) {
    return !l.j.Wk(a);
  });
};
l.j.mt = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.j.jb(a), f = l.j.nd(e.length), f = l.j.im(f, c), g = l.j.filter(f, function(a) {
    return l.f.hh(a);
  }), f = new l.j.Iterator;
  f.next = function() {
    return l.f.map(g.next(), d);
  };
  return f;
};
l.j.nt = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.j.jb(a), f = l.f.nd(e.length), f = l.f.repeat(f, c), f = l.j.product.apply(void 0, f), g = l.j.filter(f, function(a) {
    return l.f.hh(a);
  }), f = new l.j.Iterator;
  f.next = function() {
    return l.f.map(g.next(), d);
  };
  return f;
};
l.A.Map = function(a, c) {
  this.M = {};
  this.P = [];
  this.Ec = this.Qa = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.addAll(a);
  }
};
b = l.A.Map.prototype;
b.qa = function() {
  return this.Qa;
};
b.S = function() {
  this.Hb();
  for (var a = [], c = 0;c < this.P.length;c++) {
    a.push(this.M[this.P[c]]);
  }
  return a;
};
b.ka = function() {
  this.Hb();
  return this.P.concat();
};
b.Ib = function(a) {
  return l.A.Map.ub(this.M, a);
};
b.Jb = function(a) {
  for (var c = 0;c < this.P.length;c++) {
    var d = this.P[c];
    if (l.A.Map.ub(this.M, d) && this.M[d] == a) {
      return !0;
    }
  }
  return !1;
};
b.oa = function(a, c) {
  if (this === a) {
    return !0;
  }
  if (this.Qa != a.qa()) {
    return !1;
  }
  var d = c || l.A.Map.$j;
  this.Hb();
  for (var e, f = 0;e = this.P[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return !1;
    }
  }
  return !0;
};
l.A.Map.$j = function(a, c) {
  return a === c;
};
b = l.A.Map.prototype;
b.ra = function() {
  return 0 == this.Qa;
};
b.clear = function() {
  this.M = {};
  this.Ec = this.Qa = this.P.length = 0;
};
b.remove = function(a) {
  return l.A.Map.ub(this.M, a) ? (delete this.M[a], this.Qa--, this.Ec++, this.P.length > 2 * this.Qa && this.Hb(), !0) : !1;
};
b.Hb = function() {
  if (this.Qa != this.P.length) {
    for (var a = 0, c = 0;a < this.P.length;) {
      var d = this.P[a];
      l.A.Map.ub(this.M, d) && (this.P[c++] = d);
      a++;
    }
    this.P.length = c;
  }
  if (this.Qa != this.P.length) {
    for (var e = {}, c = a = 0;a < this.P.length;) {
      d = this.P[a], l.A.Map.ub(e, d) || (this.P[c++] = d, e[d] = 1), a++;
    }
    this.P.length = c;
  }
};
b.get = function(a, c) {
  return l.A.Map.ub(this.M, a) ? this.M[a] : c;
};
b.set = function(a, c) {
  l.A.Map.ub(this.M, a) || (this.Qa++, this.P.push(a), this.Ec++);
  this.M[a] = c;
};
b.addAll = function(a) {
  var c;
  a instanceof l.A.Map ? (c = a.ka(), a = a.S()) : (c = l.object.ka(a), a = l.object.S(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.ka(), e = 0;e < d.length;e++) {
    var f = d[e], g = this.get(f);
    a.call(c, g, f, this);
  }
};
b.clone = function() {
  return new l.A.Map(this);
};
b.bn = function() {
  for (var a = new l.A.Map, c = 0;c < this.P.length;c++) {
    var d = this.P[c];
    a.set(this.M[d], d);
  }
  return a;
};
b.an = function() {
  this.Hb();
  for (var a = {}, c = 0;c < this.P.length;c++) {
    var d = this.P[c];
    a[d] = this.M[d];
  }
  return a;
};
b.fc = function(a) {
  this.Hb();
  var c = 0, d = this.Ec, e = this, f = new l.j.Iterator;
  f.next = function() {
    if (d != e.Ec) {
      throw Error("The map has changed since the iterator was created");
    }
    if (c >= e.P.length) {
      throw l.j.da;
    }
    var f = e.P[c++];
    return a ? f : e.M[f];
  };
  return f;
};
l.A.Map.ub = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
l.A.qa = function(a) {
  return a.qa && "function" == typeof a.qa ? a.qa() : l.V(a) || l.G(a) ? a.length : l.object.qa(a);
};
l.A.S = function(a) {
  if (a.S && "function" == typeof a.S) {
    return a.S();
  }
  if (l.G(a)) {
    return a.split("");
  }
  if (l.V(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return l.object.S(a);
};
l.A.ka = function(a) {
  if (a.ka && "function" == typeof a.ka) {
    return a.ka();
  }
  if (!a.S || "function" != typeof a.S) {
    if (l.V(a) || l.G(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return l.object.ka(a);
  }
};
l.A.contains = function(a, c) {
  return a.contains && "function" == typeof a.contains ? a.contains(c) : a.Jb && "function" == typeof a.Jb ? a.Jb(c) : l.V(a) || l.G(a) ? l.f.contains(a, c) : l.object.Jb(a, c);
};
l.A.ra = function(a) {
  return a.ra && "function" == typeof a.ra ? a.ra() : l.V(a) || l.G(a) ? l.f.ra(a) : l.object.ra(a);
};
l.A.clear = function(a) {
  a.clear && "function" == typeof a.clear ? a.clear() : l.V(a) ? l.f.clear(a) : l.object.clear(a);
};
l.A.forEach = function(a, c, d) {
  if (a.forEach && "function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (l.V(a) || l.G(a)) {
      l.f.forEach(a, c, d);
    } else {
      for (var e = l.A.ka(a), f = l.A.S(a), g = f.length, h = 0;h < g;h++) {
        c.call(d, f[h], e && e[h], a);
      }
    }
  }
};
l.A.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (l.V(a) || l.G(a)) {
    return l.f.filter(a, c, d);
  }
  var e, f = l.A.ka(a), g = l.A.S(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      c.call(d, g[k], f[k], a) && (e[f[k]] = g[k]);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      c.call(d, g[k], void 0, a) && e.push(g[k]);
    }
  }
  return e;
};
l.A.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (l.V(a) || l.G(a)) {
    return l.f.map(a, c, d);
  }
  var e, f = l.A.ka(a), g = l.A.S(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      e[f[k]] = c.call(d, g[k], f[k], a);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      e[k] = c.call(d, g[k], void 0, a);
    }
  }
  return e;
};
l.A.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (l.V(a) || l.G(a)) {
    return l.f.some(a, c, d);
  }
  for (var e = l.A.ka(a), f = l.A.S(a), g = f.length, h = 0;h < g;h++) {
    if (c.call(d, f[h], e && e[h], a)) {
      return !0;
    }
  }
  return !1;
};
l.A.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (l.V(a) || l.G(a)) {
    return l.f.every(a, c, d);
  }
  for (var e = l.A.ka(a), f = l.A.S(a), g = f.length, h = 0;h < g;h++) {
    if (!c.call(d, f[h], e && e[h], a)) {
      return !1;
    }
  }
  return !0;
};
l.A.Set = function(a) {
  this.M = new l.A.Map;
  a && this.addAll(a);
};
l.A.Set.pe = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + l.sc(a) : c.substr(0, 1) + a;
};
b = l.A.Set.prototype;
b.qa = function() {
  return this.M.qa();
};
b.add = function(a) {
  this.M.set(l.A.Set.pe(a), a);
};
b.addAll = function(a) {
  a = l.A.S(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = l.A.S(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.M.remove(l.A.Set.pe(a));
};
b.clear = function() {
  this.M.clear();
};
b.ra = function() {
  return this.M.ra();
};
b.contains = function(a) {
  return this.M.Ib(l.A.Set.pe(a));
};
b.S = function() {
  return this.M.S();
};
b.clone = function() {
  return new l.A.Set(this);
};
b.oa = function(a) {
  return this.qa() == l.A.qa(a) && this.zl(a);
};
b.zl = function(a) {
  var c = l.A.qa(a);
  if (this.qa() > c) {
    return !1;
  }
  !(a instanceof l.A.Set) && 5 < c && (a = new l.A.Set(a));
  return l.A.every(this, function(c) {
    return l.A.contains(a, c);
  });
};
b.fc = function() {
  return this.M.fc(!1);
};
l.h = {};
l.h.userAgent = {};
l.h.userAgent.C = {};
l.h.userAgent.C.Eg = function() {
  var a = l.h.userAgent.C.Jk();
  return a && (a = a.userAgent) ? a : "";
};
l.h.userAgent.C.Jk = function() {
  return l.global.navigator;
};
l.h.userAgent.C.Xh = l.h.userAgent.C.Eg();
l.h.userAgent.C.Wv = function(a) {
  l.h.userAgent.C.Xh = a || l.h.userAgent.C.Eg();
};
l.h.userAgent.C.Ob = function() {
  return l.h.userAgent.C.Xh;
};
l.h.userAgent.C.K = function(a) {
  return l.c.contains(l.h.userAgent.C.Ob(), a);
};
l.h.userAgent.C.Ul = function(a) {
  return l.c.Pj(l.h.userAgent.C.Ob(), a);
};
l.h.userAgent.C.sg = function(a) {
  for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
l.h.userAgent.browser = {};
l.h.userAgent.browser.Ke = function() {
  return l.h.userAgent.C.K("Opera") || l.h.userAgent.C.K("OPR");
};
l.h.userAgent.browser.Sl = function() {
  return l.h.userAgent.C.K("Trident") || l.h.userAgent.C.K("MSIE");
};
l.h.userAgent.browser.Je = function() {
  return l.h.userAgent.C.K("Edge");
};
l.h.userAgent.browser.Rl = function() {
  return l.h.userAgent.C.K("Firefox");
};
l.h.userAgent.browser.qh = function() {
  return l.h.userAgent.C.K("Safari") && !(l.h.userAgent.browser.He() || l.h.userAgent.browser.Ie() || l.h.userAgent.browser.Ke() || l.h.userAgent.browser.Je() || l.h.userAgent.browser.gh() || l.h.userAgent.C.K("Android"));
};
l.h.userAgent.browser.Ie = function() {
  return l.h.userAgent.C.K("Coast");
};
l.h.userAgent.browser.Tl = function() {
  return (l.h.userAgent.C.K("iPad") || l.h.userAgent.C.K("iPhone")) && !l.h.userAgent.browser.qh() && !l.h.userAgent.browser.He() && !l.h.userAgent.browser.Ie() && l.h.userAgent.C.K("AppleWebKit");
};
l.h.userAgent.browser.He = function() {
  return (l.h.userAgent.C.K("Chrome") || l.h.userAgent.C.K("CriOS")) && !l.h.userAgent.browser.Ke() && !l.h.userAgent.browser.Je();
};
l.h.userAgent.browser.Ql = function() {
  return l.h.userAgent.C.K("Android") && !(l.h.userAgent.browser.Ug() || l.h.userAgent.browser.ll() || l.h.userAgent.browser.Be() || l.h.userAgent.browser.gh());
};
l.h.userAgent.browser.Be = l.h.userAgent.browser.Ke;
l.h.userAgent.browser.$g = l.h.userAgent.browser.Sl;
l.h.userAgent.browser.Qb = l.h.userAgent.browser.Je;
l.h.userAgent.browser.ll = l.h.userAgent.browser.Rl;
l.h.userAgent.browser.Su = l.h.userAgent.browser.qh;
l.h.userAgent.browser.yu = l.h.userAgent.browser.Ie;
l.h.userAgent.browser.Gu = l.h.userAgent.browser.Tl;
l.h.userAgent.browser.Ug = l.h.userAgent.browser.He;
l.h.userAgent.browser.wu = l.h.userAgent.browser.Ql;
l.h.userAgent.browser.gh = function() {
  return l.h.userAgent.C.K("Silk");
};
l.h.userAgent.browser.tc = function() {
  function a(a) {
    a = l.f.find(a, e);
    return d[a] || "";
  }
  var c = l.h.userAgent.C.Ob();
  if (l.h.userAgent.browser.$g()) {
    return l.h.userAgent.browser.Ek(c);
  }
  var c = l.h.userAgent.C.sg(c), d = {};
  l.f.forEach(c, function(a) {
    d[a[0]] = a[1];
  });
  var e = l.Dh(l.object.Ib, d);
  return l.h.userAgent.browser.Be() ? a(["Version", "Opera", "OPR"]) : l.h.userAgent.browser.Qb() ? a(["Edge"]) : l.h.userAgent.browser.Ug() ? a(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || "";
};
l.h.userAgent.browser.sa = function(a) {
  return 0 <= l.c.hc(l.h.userAgent.browser.tc(), a);
};
l.h.userAgent.browser.Ek = function(a) {
  var c = /rv: *([\d\.]*)/.exec(a);
  if (c && c[1]) {
    return c[1];
  }
  var c = "", d = /MSIE +([\d\.]+)/.exec(a);
  if (d && d[1]) {
    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == d[1]) {
      if (a && a[1]) {
        switch(a[1]) {
          case "4.0":
            c = "8.0";
            break;
          case "5.0":
            c = "9.0";
            break;
          case "6.0":
            c = "10.0";
            break;
          case "7.0":
            c = "11.0";
        }
      } else {
        c = "7.0";
      }
    } else {
      c = d[1];
    }
  }
  return c;
};
l.h.userAgent.Y = {};
l.h.userAgent.Y.Ou = function() {
  return l.h.userAgent.C.K("Presto");
};
l.h.userAgent.Y.Al = function() {
  return l.h.userAgent.C.K("Trident") || l.h.userAgent.C.K("MSIE");
};
l.h.userAgent.Y.Qb = function() {
  return l.h.userAgent.C.K("Edge");
};
l.h.userAgent.Y.jh = function() {
  return l.h.userAgent.C.Ul("WebKit") && !l.h.userAgent.Y.Qb();
};
l.h.userAgent.Y.ml = function() {
  return l.h.userAgent.C.K("Gecko") && !l.h.userAgent.Y.jh() && !l.h.userAgent.Y.Al() && !l.h.userAgent.Y.Qb();
};
l.h.userAgent.Y.tc = function() {
  var a = l.h.userAgent.C.Ob();
  if (a) {
    var a = l.h.userAgent.C.sg(a), c = l.h.userAgent.Y.Bk(a);
    if (c) {
      return "Gecko" == c[0] ? l.h.userAgent.Y.Rk(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
l.h.userAgent.Y.Bk = function(a) {
  if (!l.h.userAgent.Y.Qb()) {
    return a[1];
  }
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    if ("Edge" == d[0]) {
      return d;
    }
  }
};
l.h.userAgent.Y.sa = function(a) {
  return 0 <= l.c.hc(l.h.userAgent.Y.tc(), a);
};
l.h.userAgent.Y.Rk = function(a, c) {
  var d = l.f.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
l.h.userAgent.platform = {};
l.h.userAgent.platform.Sg = function() {
  return l.h.userAgent.C.K("Android");
};
l.h.userAgent.platform.pl = function() {
  return l.h.userAgent.C.K("iPod");
};
l.h.userAgent.platform.bh = function() {
  return l.h.userAgent.C.K("iPhone") && !l.h.userAgent.C.K("iPod") && !l.h.userAgent.C.K("iPad");
};
l.h.userAgent.platform.ah = function() {
  return l.h.userAgent.C.K("iPad");
};
l.h.userAgent.platform.ol = function() {
  return l.h.userAgent.platform.bh() || l.h.userAgent.platform.ah() || l.h.userAgent.platform.pl();
};
l.h.userAgent.platform.dh = function() {
  return l.h.userAgent.C.K("Macintosh");
};
l.h.userAgent.platform.rl = function() {
  return l.h.userAgent.C.K("Linux");
};
l.h.userAgent.platform.kh = function() {
  return l.h.userAgent.C.K("Windows");
};
l.h.userAgent.platform.Vg = function() {
  return l.h.userAgent.C.K("CrOS");
};
l.h.userAgent.platform.tc = function() {
  var a = l.h.userAgent.C.Ob(), c = "";
  l.h.userAgent.platform.kh() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (a = c.exec(a)) ? a[1] : "0.0") : l.h.userAgent.platform.ol() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (a = c.exec(a)) && a[1].replace(/_/g, ".")) : l.h.userAgent.platform.dh() ? (c = /Mac OS X ([0-9_.]+)/, c = (a = c.exec(a)) ? a[1].replace(/_/g, ".") : "10") : l.h.userAgent.platform.Sg() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (a = c.exec(a)) && a[1]) : l.h.userAgent.platform.Vg() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, 
  c = (a = c.exec(a)) && a[1]);
  return c || "";
};
l.h.userAgent.platform.sa = function(a) {
  return 0 <= l.c.hc(l.h.userAgent.platform.tc(), a);
};
l.userAgent = {};
l.userAgent.ef = !1;
l.userAgent.cf = !1;
l.userAgent.df = !1;
l.userAgent.lf = !1;
l.userAgent.ud = !1;
l.userAgent.kf = !1;
l.userAgent.bi = !1;
l.userAgent.$b = l.userAgent.ef || l.userAgent.cf || l.userAgent.df || l.userAgent.ud || l.userAgent.lf || l.userAgent.kf;
l.userAgent.Qk = function() {
  return l.h.userAgent.C.Ob();
};
l.userAgent.Fg = function() {
  return l.global.navigator || null;
};
l.userAgent.Ld = l.userAgent.$b ? l.userAgent.kf : l.h.userAgent.browser.Be();
l.userAgent.za = l.userAgent.$b ? l.userAgent.ef : l.h.userAgent.browser.$g();
l.userAgent.qf = l.userAgent.$b ? l.userAgent.cf : l.h.userAgent.Y.Qb();
l.userAgent.Xo = l.userAgent.qf || l.userAgent.za;
l.userAgent.Ic = l.userAgent.$b ? l.userAgent.df : l.h.userAgent.Y.ml();
l.userAgent.Pa = l.userAgent.$b ? l.userAgent.lf || l.userAgent.ud : l.h.userAgent.Y.jh();
l.userAgent.vl = function() {
  return l.userAgent.Pa && l.h.userAgent.C.K("Mobile");
};
l.userAgent.sq = l.userAgent.ud || l.userAgent.vl();
l.userAgent.Fr = l.userAgent.Pa;
l.userAgent.ak = function() {
  var a = l.userAgent.Fg();
  return a && a.platform || "";
};
l.userAgent.ir = l.userAgent.ak();
l.userAgent.jf = !1;
l.userAgent.mf = !1;
l.userAgent.hf = !1;
l.userAgent.nf = !1;
l.userAgent.bf = !1;
l.userAgent.gf = !1;
l.userAgent.ff = !1;
l.userAgent.mb = l.userAgent.jf || l.userAgent.mf || l.userAgent.hf || l.userAgent.nf || l.userAgent.bf || l.userAgent.gf || l.userAgent.ff;
l.userAgent.iq = l.userAgent.mb ? l.userAgent.jf : l.h.userAgent.platform.dh();
l.userAgent.ys = l.userAgent.mb ? l.userAgent.mf : l.h.userAgent.platform.kh();
l.userAgent.ql = function() {
  return l.h.userAgent.platform.rl() || l.h.userAgent.platform.Vg();
};
l.userAgent.$p = l.userAgent.mb ? l.userAgent.hf : l.userAgent.ql();
l.userAgent.Dl = function() {
  var a = l.userAgent.Fg();
  return !!a && l.c.contains(a.appVersion || "", "X11");
};
l.userAgent.zs = l.userAgent.mb ? l.userAgent.nf : l.userAgent.Dl();
l.userAgent.ANDROID = l.userAgent.mb ? l.userAgent.bf : l.h.userAgent.platform.Sg();
l.userAgent.Qp = l.userAgent.mb ? l.userAgent.gf : l.h.userAgent.platform.bh();
l.userAgent.Pp = l.userAgent.mb ? l.userAgent.ff : l.h.userAgent.platform.ah();
l.userAgent.em = function() {
  var a = l.global.opera.version;
  try {
    return a();
  } catch (c) {
    return a;
  }
};
l.userAgent.bk = function() {
  if (l.userAgent.Ld && l.global.opera) {
    return l.userAgent.em();
  }
  var a = "", c = l.userAgent.Sk();
  c && (a = c ? c[1] : "");
  return l.userAgent.za && (c = l.userAgent.zg(), c > parseFloat(a)) ? String(c) : a;
};
l.userAgent.Sk = function() {
  var a = l.userAgent.Qk();
  if (l.userAgent.Ic) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (l.userAgent.qf) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (l.userAgent.za) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (l.userAgent.Pa) {
    return /WebKit\/(\S+)/.exec(a);
  }
};
l.userAgent.zg = function() {
  var a = l.global.document;
  return a ? a.documentMode : void 0;
};
l.userAgent.VERSION = l.userAgent.bk();
l.userAgent.compare = function(a, c) {
  return l.c.hc(a, c);
};
l.userAgent.ih = {};
l.userAgent.sa = function(a) {
  return l.userAgent.bi || l.userAgent.ih[a] || (l.userAgent.ih[a] = 0 <= l.c.hc(l.userAgent.VERSION, a));
};
l.userAgent.Wu = l.userAgent.sa;
l.userAgent.ye = function(a) {
  return l.userAgent.ji >= a;
};
l.userAgent.Au = l.userAgent.ye;
var m = l.global.document;
l.userAgent.ji = m && l.userAgent.za ? l.userAgent.zg() || ("CSS1Compat" == m.compatMode ? parseInt(l.userAgent.VERSION, 10) : 5) : void 0;
l.debug.Aa = l.ma;
l.debug.et = function(a, c, d) {
  d = d || l.global;
  var e = d.onerror, f = !!c;
  l.userAgent.Pa && !l.userAgent.sa("535.3") && (f = !f);
  d.onerror = function(c, d, k, n, t) {
    e && e(c, d, k, n, t);
    a({message:c, fileName:d, Fl:k, jt:n, error:t});
    return f;
  };
};
l.debug.mk = function(a, c) {
  if ("undefined" == typeof a) {
    return "undefined";
  }
  if (null == a) {
    return "NULL";
  }
  var d = [], e;
  for (e in a) {
    if (c || !l.Wa(a[e])) {
      var f = e + " = ";
      try {
        f += a[e];
      } catch (g) {
        f += "*** " + g + " ***";
      }
      d.push(f);
    }
  }
  return d.join("\n");
};
l.debug.Ct = function(a, c) {
  var d = [], e = function(a, g, h) {
    var k = g + "  ";
    h = new l.A.Set(h);
    try {
      if (l.ga(a)) {
        if (l.eh(a)) {
          d.push("NULL");
        } else {
          if (l.G(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + g) + '"');
          } else {
            if (l.Wa(a)) {
              d.push(String(a).replace(/\n/g, "\n" + g));
            } else {
              if (l.Rb(a)) {
                if (h.contains(a)) {
                  d.push("*** reference loop detected ***");
                } else {
                  h.add(a);
                  d.push("{");
                  for (var n in a) {
                    if (c || !l.Wa(a[n])) {
                      d.push("\n"), d.push(k), d.push(n + " = "), e(a[n], k, h);
                    }
                  }
                  d.push("\n" + g + "}");
                }
              } else {
                d.push(a);
              }
            }
          }
        }
      } else {
        d.push("undefined");
      }
    } catch (t) {
      d.push("*** " + t + " ***");
    }
  };
  e(a, "", new l.A.Set);
  return d.join("");
};
l.debug.nk = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    l.isArray(a[d]) ? c.push(l.debug.nk(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
l.debug.Ot = function(a, c) {
  var d = l.debug.pk(a, c);
  return l.b.s.O(d);
};
l.debug.pk = function(a, c) {
  try {
    var d = l.debug.Zl(a), e = l.debug.Xj(d.fileName);
    return l.b.s.concat(l.b.s.ue("Message: " + d.message + "\nUrl: "), l.b.s.create("a", {href:e, target:"_new"}, d.fileName), l.b.s.ue("\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + d.stack + "-> [end]\n\nJS stack traversal:\n" + l.debug.te(c) + "-> "));
  } catch (f) {
    return l.b.s.ue("Exception trying to expose exception! You win, we lose. " + f);
  }
};
l.debug.Xj = function(a) {
  l.bd(a) || (a = "");
  if (!/^https?:\/\//i.test(a)) {
    return l.b.J.pc(l.c.R.he("sanitizedviewsrc"));
  }
  a = l.b.J.Mh(a);
  return l.b.Db.vm(l.c.R.he("view-source scheme plus HTTP/HTTPS URL"), "view-source:" + l.b.J.O(a));
};
l.debug.Zl = function(a) {
  var c = l.Gg("window.location.href");
  if (l.G(a)) {
    return {message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.Fl || "Not available";
  } catch (g) {
    d = "Not available", f = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || l.global.$googDebugFname || c;
  } catch (g) {
    e = "Not available", f = !0;
  }
  return !f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
l.debug.og = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, l.debug.og)) : d = a;
  d.stack || (d.stack = l.debug.te(l.debug.og));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
l.debug.Nk = function(a) {
  if (l.Rd) {
    var c = l.debug.Dg(l.debug.Nk);
    if (c) {
      return c;
    }
  }
  for (var c = [], d = arguments.callee.caller, e = 0;d && (!a || e < a);) {
    c.push(l.debug.getFunctionName(d));
    c.push("()\n");
    try {
      d = d.caller;
    } catch (f) {
      c.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (e >= l.debug.Hf) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
l.debug.Hf = 50;
l.debug.Dg = function(a) {
  var c = Error();
  if (Error.captureStackTrace) {
    return Error.captureStackTrace(c, a), String(c.stack);
  }
  try {
    throw c;
  } catch (d) {
    c = d;
  }
  return (a = c.stack) ? String(a) : null;
};
l.debug.te = function(a) {
  var c;
  l.Rd && (c = l.debug.Dg(a || l.debug.te));
  c || (c = l.debug.Jg(a || arguments.callee.caller, []));
  return c;
};
l.debug.Jg = function(a, c) {
  var d = [];
  if (l.f.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < l.debug.Hf) {
      d.push(l.debug.getFunctionName(a) + "(");
      for (var e = a.arguments, f = 0;e && f < e.length;f++) {
        0 < f && d.push(", ");
        var g;
        g = e[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = l.debug.getFunctionName(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        d.push(g);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(l.debug.Jg(a.caller, c));
      } catch (h) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
l.debug.Tv = function(a) {
  l.debug.vg = a;
};
l.debug.getFunctionName = function(a) {
  if (l.debug.Mb[a]) {
    return l.debug.Mb[a];
  }
  if (l.debug.vg) {
    var c = l.debug.vg(a);
    if (c) {
      return l.debug.Mb[a] = c;
    }
  }
  a = String(a);
  l.debug.Mb[a] || (c = /function ([^\(]+)/.exec(a), l.debug.Mb[a] = c ? c[1] : "[Anonymous]");
  return l.debug.Mb[a];
};
l.debug.gv = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
l.debug.Iv = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
l.debug.Mb = {};
l.debug.ua = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
l.debug.ua.prototype.rg = null;
l.debug.ua.li = !0;
l.debug.ua.Yl = 0;
l.debug.ua.prototype.reset = function(a, c, d, e, f) {
  l.debug.ua.li && ("number" == typeof f || l.debug.ua.Yl++);
  e || l.now();
  this.De = a;
  this.Wl = c;
  delete this.rg;
};
l.debug.ua.prototype.Pm = function(a) {
  this.rg = a;
};
l.debug.ua.prototype.getMessage = function() {
  return this.Wl;
};
l.debug.ia = function() {
  this.clear();
};
l.debug.ia.oe = function() {
  l.debug.ia.vc || (l.debug.ia.vc = new l.debug.ia);
  return l.debug.ia.vc;
};
l.debug.ia.Hc = 0;
l.debug.ia.prototype.Aj = function(a, c, d) {
  var e = (this.lg + 1) % l.debug.ia.Hc;
  this.lg = e;
  if (this.Zg) {
    return e = this.bg[e], e.reset(a, c, d), e;
  }
  this.Zg = e == l.debug.ia.Hc - 1;
  return this.bg[e] = new l.debug.ua(a, c, d);
};
l.debug.ia.jl = function() {
  return 0 < l.debug.ia.Hc;
};
l.debug.ia.prototype.clear = function() {
  this.bg = Array(l.debug.ia.Hc);
  this.lg = -1;
  this.Zg = !1;
};
l.debug.o = function(a) {
  this.gb = a;
  this.Pb = this.Wd = this.De = this.Oe = null;
};
l.debug.o.Nd = "";
l.debug.o.ac = !0;
l.debug.o.ac || (l.debug.o.Te = []);
l.debug.o.B = function(a, c) {
  this.name = a;
  this.value = c;
};
l.debug.o.B.prototype.toString = function() {
  return this.name;
};
l.debug.o.B.OFF = new l.debug.o.B("OFF", Infinity);
l.debug.o.B.jj = new l.debug.o.B("SHOUT", 1200);
l.debug.o.B.Pf = new l.debug.o.B("SEVERE", 1E3);
l.debug.o.B.Uf = new l.debug.o.B("WARNING", 900);
l.debug.o.B.Df = new l.debug.o.B("INFO", 800);
l.debug.o.B.of = new l.debug.o.B("CONFIG", 700);
l.debug.o.B.vf = new l.debug.o.B("FINE", 500);
l.debug.o.B.mi = new l.debug.o.B("FINER", 400);
l.debug.o.B.ni = new l.debug.o.B("FINEST", 300);
l.debug.o.B.ALL = new l.debug.o.B("ALL", 0);
l.debug.o.B.Md = [l.debug.o.B.OFF, l.debug.o.B.jj, l.debug.o.B.Pf, l.debug.o.B.Uf, l.debug.o.B.Df, l.debug.o.B.of, l.debug.o.B.vf, l.debug.o.B.mi, l.debug.o.B.ni, l.debug.o.B.ALL];
l.debug.o.B.hb = null;
l.debug.o.B.hg = function() {
  l.debug.o.B.hb = {};
  for (var a = 0, c;c = l.debug.o.B.Md[a];a++) {
    l.debug.o.B.hb[c.value] = c, l.debug.o.B.hb[c.name] = c;
  }
};
l.debug.o.B.bu = function(a) {
  l.debug.o.B.hb || l.debug.o.B.hg();
  return l.debug.o.B.hb[a] || null;
};
l.debug.o.B.cu = function(a) {
  l.debug.o.B.hb || l.debug.o.B.hg();
  if (a in l.debug.o.B.hb) {
    return l.debug.o.B.hb[a];
  }
  for (var c = 0;c < l.debug.o.B.Md.length;++c) {
    var d = l.debug.o.B.Md[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
l.debug.o.Jl = function(a) {
  l.global.console && (l.global.console.timeStamp ? l.global.console.timeStamp(a) : l.global.console.markTimeline && l.global.console.markTimeline(a));
  l.global.msWriteProfilerMark && l.global.msWriteProfilerMark(a);
};
b = l.debug.o.prototype;
b.getName = function() {
  return this.gb;
};
b.Vf = function(a) {
  l.debug.Aa && (l.debug.o.ac ? (this.Pb || (this.Pb = []), this.Pb.push(a)) : l.debug.o.Te.push(a));
};
b.Jh = function(a) {
  if (l.debug.Aa) {
    var c = l.debug.o.ac ? this.Pb : l.debug.o.Te;
    return !!c && l.f.remove(c, a);
  }
  return !1;
};
b.getParent = function() {
  return this.Oe;
};
b.getChildren = function() {
  this.Wd || (this.Wd = {});
  return this.Wd;
};
b.Ag = function() {
  if (!l.debug.Aa) {
    return l.debug.o.B.OFF;
  }
  if (!l.debug.o.ac) {
    return l.debug.o.Hv;
  }
  if (this.De) {
    return this.De;
  }
  if (this.Oe) {
    return this.Oe.Ag();
  }
  l.l.pa("Root logger has no level set.");
  return null;
};
b.sl = function(a) {
  return l.debug.Aa && a.value >= this.Ag().value;
};
b.log = function(a, c, d) {
  l.debug.Aa && this.sl(a) && (l.Wa(c) && (c = c()), this.ik(this.Hk(a, c, d)));
};
b.Hk = function(a, c, d) {
  a = l.debug.ia.jl() ? l.debug.ia.oe().Aj(a, c, this.gb) : new l.debug.ua(a, String(c), this.gb);
  d && a.Pm(d);
  return a;
};
b.Rm = function(a, c) {
  l.debug.Aa && this.log(l.debug.o.B.Pf, a, c);
};
b.Zh = function(a, c) {
  l.debug.Aa && this.log(l.debug.o.B.Uf, a, c);
};
b.info = function(a, c) {
  l.debug.Aa && this.log(l.debug.o.B.Df, a, c);
};
b.config = function(a, c) {
  l.debug.Aa && this.log(l.debug.o.B.of, a, c);
};
b.ug = function(a, c) {
  l.debug.Aa && this.log(l.debug.o.B.vf, a, c);
};
b.ik = function(a) {
  l.debug.o.Jl("log:" + a.getMessage());
  if (l.debug.o.ac) {
    for (var c = this;c;) {
      c.Mj(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = l.debug.o.Te[c++];) {
      d(a);
    }
  }
};
b.Mj = function(a) {
  if (this.Pb) {
    for (var c = 0, d;d = this.Pb[c];c++) {
      d(a);
    }
  }
};
l.debug.Ba = {};
l.debug.Ba.ph = {};
l.debug.Ba.initialize = function() {
  l.debug.Ba.Lh || (l.debug.Ba.ph[l.debug.o.Nd] = l.debug.Ba.Lh);
};
l.debug.Ba.Zt = function() {
  return l.debug.Ba.ph;
};
l.debug.Ba.eu = function() {
  l.debug.Ba.initialize();
  return l.debug.Ba.Lh;
};
l.debug.Ba.ut = function() {
  return function() {
  };
};
l.log = {};
l.log.kb = l.debug.Aa;
l.log.Nd = l.debug.o.Nd;
l.log.o = l.debug.o;
l.log.B = l.debug.o.B;
l.log.ua = l.debug.ua;
l.log.Vf = function(a, c) {
  l.log.kb && a && a.Vf(c);
};
l.log.Jh = function(a, c) {
  return l.log.kb && a ? a.Jh(c) : !1;
};
l.log.log = function(a, c, d, e) {
  l.log.kb && a && a.log(c, d, e);
};
l.log.error = function(a, c, d) {
  l.log.kb && a && a.Rm(c, d);
};
l.log.Zh = function(a, c, d) {
  l.log.kb && a && a.Zh(c, d);
};
l.log.info = function(a, c, d) {
  l.log.kb && a && a.info(c, d);
};
l.log.ug = function(a, c, d) {
  l.log.kb && a && a.ug(c, d);
};
chrome.cast.a.D.$a = function(a) {
  this.pd = a;
  this.$c = null;
  this.Ze = new l.A.Map;
  this.rb = new l.A.Map;
  this.Cc = new l.A.Map;
  this.Bc = new l.A.Map;
  this.Qe = new l.A.Map;
  this.Ce = this.gd = this.rd = null;
  this.pd.addMessageListener(this.Vc(), l.bind(this.zh, this));
};
chrome.cast.a.D.$a.Rf = 6E4;
b = chrome.cast.a.D.$a.prototype;
b.Sa = function() {
  this.pd.removeMessageListener(chrome.cast.a.Kd, l.bind(this.zh, this));
  for (var a = this.Cc.ka(), c = 0;c < a.length;c++) {
    this.Wb(a[c]);
  }
  this.gd = this.rd = null;
};
b.Vc = function() {
  return chrome.cast.a.Kd;
};
b.xm = function(a, c) {
  var d = new chrome.cast.a.D.zf;
  d.type = chrome.cast.a.D.na.Bd;
  if (!d.requestId) {
    throw Error("Missing requestId field from request.");
  }
  if (!a) {
    throw Error("No success callback provided.");
  }
  this.$c = a;
  var e = l.zc;
  c && (this.rb.set(d.requestId, c), e = function(a) {
    c(new chrome.cast.a.bc(chrome.cast.a.Za.wd, a.description, null, a));
    this.Wb(d.requestId);
  }.bind(this));
  var f = l.global.setTimeout(l.bind(this.Ah, this, d.requestId), chrome.cast.a.D.$a.Rf);
  this.Cc.set(d.requestId, f);
  this.Bc.set(d.requestId, d.type);
  this.pd.sendMessage(this.Vc(), d, l.zc, e);
};
b.Ue = function(a, c, d, e, f) {
  if (c == chrome.cast.a.D.na.UNKNOWN) {
    throw Error("Cannot send an UNKNOWN game manager request.");
  }
  if (!a && c != chrome.cast.a.D.na.Lf && c != chrome.cast.a.D.na.Bd) {
    throw Error("Missing player ID for game manager request type:" + c);
  }
  var g = new chrome.cast.a.D.zf;
  g.type = c;
  g.playerId = a ? a : "";
  g.playerToken = this.Qe.get(g.playerId, null);
  g.extraMessageData = d;
  if (!g.requestId) {
    throw Error("Missing requestId field from request");
  }
  e && this.Ze.set(g.requestId, e);
  a = l.zc;
  f && (this.rb.set(g.requestId, f), a = function(a) {
    f(new chrome.cast.a.bc(chrome.cast.a.Za.wd, a.description, null, a));
    this.Wb(g.requestId);
  }.bind(this));
  g.type != chrome.cast.a.D.na.GAME_MESSAGE && (c = l.global.setTimeout(l.bind(this.Ah, this, g.requestId), chrome.cast.a.D.$a.Rf), this.Cc.set(g.requestId, c));
  this.Bc.set(g.requestId, g.type);
  this.pd.sendMessage(this.Vc(), g, l.zc, a);
};
b.Qm = function(a, c) {
  this.rd = a;
  this.gd = c;
};
b.wl = function(a) {
  return this.Qe.Ib(a);
};
b.Da = function() {
  return this.Ce;
};
l.w(chrome.cast.a.D.$a.prototype, "getLastUsedPlayerId", chrome.cast.a.D.$a.prototype.Da);
b = chrome.cast.a.D.$a.prototype;
b.zh = function(a, c) {
  if (a != this.Vc()) {
    throw Error("Incoming message has unexpected namespace: " + a);
  }
  var d = l.json.parse(c), e = d.type;
  if (e != chrome.cast.a.D.cc.GAME_MANAGER_PROCESSED_RESULT && e != chrome.cast.a.D.cc.GAME_MESSAGE) {
    l.log.error(this.oh, "Ignoring message, type is not GAME_MANAGER_PROCESSED_RESULT or  GAME_MESSAGE Type: " + e);
  } else {
    if (d.gameManagerConfig && d.gameManagerConfig.version != chrome.cast.a.Qd && (d.statusCode = chrome.cast.a.D.Ga.INCORRECT_VERSION, d.errorDescription = "Incorrect version of the GameManager SDK. Sender: " + chrome.cast.a.Qd + "Receiver: " + d.gameManagerConfig.version), d.statusCode != chrome.cast.a.D.Ga.Sd) {
      this.am(d);
    } else {
      var e = d.playerId, f = d.playerToken;
      e && f && this.Qe.set(e, f);
      this.rd && this.rd(d);
      d.requestId && (this.Ce = e || this.Ce, this.cm(d));
      this.gd && this.gd();
    }
  }
};
b.am = function(a) {
  var c = a.requestId;
  if (this.rb.Ib(c)) {
    var d = this.rb.get(c), e = new chrome.cast.a.Dd(a.playerId, a.requestId, a.extraMessageData), f = chrome.cast.a.D.Ga.Ck(a.statusCode);
    d(new chrome.cast.a.bc(f, a.errorDescription, e, null));
    this.Wb(c);
  } else {
    l.log.info(this.oh, "Ignoring error message, no callback for request ID: " + c);
  }
};
b.cm = function(a) {
  var c = a.requestId, d = this.Bc.get(c), e = this.Ze.get(a.requestId);
  this.Wb(c);
  if (d == chrome.cast.a.D.na.Bd) {
    if (!this.$c) {
      throw Error("Got a response for a GET_GAME_MANAGER_CONFIG request but no initialization callback was set.");
    }
    this.$c();
    this.$c = null;
  } else {
    e ? e(new chrome.cast.a.Dd(a.playerId, a.requestId, a.extraMessageData)) : l.log.info(this.oh, "Ignoring message, no callback for request ID: " + c);
  }
};
b.Ah = function(a) {
  var c = this.Bc.get(a), c = "Did not receive a response to player request within a time period. request ID=" + a + " request type =" + c;
  if (this.rb.Ib(a)) {
    var d = this.rb.get(a), e = new chrome.cast.Error(chrome.cast.ErrorCode.TIMEOUT, c, null);
    d(new chrome.cast.a.bc(chrome.cast.a.Za.wd, c, null, e));
    this.Wb(a);
  } else {
    throw Error(c);
  }
};
b.Wb = function(a) {
  this.Ze.remove(a);
  this.rb.remove(a);
  var c = this.Cc.get(a);
  l.global.clearTimeout(c);
  this.Cc.remove(a);
  this.Bc.remove(a);
};
l.gk = {};
l.gk.Jp = function() {
};
l.N = function() {
  l.N.Id != l.N.Jd.OFF && (l.N.xb[l.sc(this)] = this);
  this.mc = this.mc;
  this.fd = this.fd;
};
l.N.Jd = {OFF:0, Ui:1, Op:2};
l.N.Id = 0;
l.N.Mp = !0;
l.N.xb = {};
l.N.gu = function() {
  var a = [], c;
  for (c in l.N.xb) {
    l.N.xb.hasOwnProperty(c) && a.push(l.N.xb[Number(c)]);
  }
  return a;
};
l.N.it = function() {
  l.N.xb = {};
};
l.N.prototype.mc = !1;
l.N.prototype.isDisposed = function() {
  return this.mc;
};
l.N.prototype.Sa = function() {
  if (!this.mc && (this.mc = !0, this.be(), l.N.Id != l.N.Jd.OFF)) {
    var a = l.sc(this);
    if (l.N.Id == l.N.Jd.Ui && !l.N.xb.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete l.N.xb[a];
  }
};
l.N.prototype.be = function() {
  if (this.fd) {
    for (;this.fd.length;) {
      this.fd.shift()();
    }
  }
};
l.N.isDisposed = function(a) {
  return a && "function" == typeof a.isDisposed ? a.isDisposed() : !1;
};
l.Sa = function(a) {
  a && "function" == typeof a.Sa && a.Sa();
};
l.hk = function(a) {
  for (var c = 0, d = arguments.length;c < d;++c) {
    var e = arguments[c];
    l.V(e) ? l.hk.apply(null, e) : l.Sa(e);
  }
};
l.events = {};
l.events.tf = function(a) {
  this.id = a;
};
l.events.tf.prototype.toString = function() {
  return this.id;
};
l.events.Event = function(a, c) {
  this.type = a instanceof l.events.tf ? String(a) : a;
  this.currentTarget = this.target = c;
  this.defaultPrevented = this.zb = !1;
  this.Kh = !0;
};
l.events.Event.prototype.stopPropagation = function() {
  this.zb = !0;
};
l.events.Event.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Kh = !1;
};
l.events.Event.stopPropagation = function(a) {
  a.stopPropagation();
};
l.events.Event.preventDefault = function(a) {
  a.preventDefault();
};
l.debug.ba = {};
l.debug.ep = function() {
};
l.debug.ba.Ub = [];
l.debug.ba.Me = [];
l.debug.ba.uh = !1;
l.debug.ba.register = function(a) {
  l.debug.ba.Ub[l.debug.ba.Ub.length] = a;
  if (l.debug.ba.uh) {
    for (var c = l.debug.ba.Me, d = 0;d < c.length;d++) {
      a(l.bind(c[d].ln, c[d]));
    }
  }
};
l.debug.ba.kv = function(a) {
  l.debug.ba.uh = !0;
  for (var c = l.bind(a.ln, a), d = 0;d < l.debug.ba.Ub.length;d++) {
    l.debug.ba.Ub[d](c);
  }
  l.debug.ba.Me.push(a);
};
l.debug.ba.sw = function(a) {
  var c = l.debug.ba.Me;
  a = l.bind(a.O, a);
  for (var d = 0;d < l.debug.ba.Ub.length;d++) {
    l.debug.ba.Ub[d](a);
  }
  c.length--;
};
l.Ab = {};
l.Ab.object = function(a, c) {
  return c;
};
l.Ab.We = function(a) {
  l.Ab.We[" "](a);
  return a;
};
l.Ab.We[" "] = l.zc;
l.Ab.Oj = function(a, c) {
  try {
    return l.Ab.We(a[c]), !0;
  } catch (d) {
  }
  return !1;
};
l.events.Gc = {yp:!l.userAgent.za || l.userAgent.ye(9), Ed:!l.userAgent.za || l.userAgent.ye(9), ij:l.userAgent.za && !l.userAgent.sa("9"), xp:!l.userAgent.Pa || l.userAgent.sa("528"), wp:l.userAgent.Ic && l.userAgent.sa("1.9b") || l.userAgent.za && l.userAgent.sa("8") || l.userAgent.Ld && l.userAgent.sa("9.5") || l.userAgent.Pa && l.userAgent.sa("528"), Fp:l.userAgent.Ic && !l.userAgent.sa("8") || l.userAgent.za && !l.userAgent.sa("9"), ks:"ontouchstart" in l.global || !!(l.global.document && document.documentElement && 
"ontouchstart" in document.documentElement) || !(!l.global.navigator || !l.global.navigator.msMaxTouchPoints)};
l.events.Xc = function(a) {
  return l.userAgent.Pa ? "webkit" + a : l.userAgent.Ld ? "o" + a.toLowerCase() : a.toLowerCase();
};
l.events.uf = {Yn:"click", Ar:"rightclick", so:"dblclick", tq:"mousedown", xq:"mouseup", Ki:"mouseover", Ji:"mouseout", wq:"mousemove", uq:"mouseenter", vq:"mouseleave", Jr:"selectstart", xs:"wheel", Vp:"keypress", Tp:"keydown", Wp:"keyup", On:"blur", jp:"focus", uo:"deactivate", kp:l.userAgent.za ? "focusin" : "DOMFocusIn", lp:l.userAgent.za ? "focusout" : "DOMFocusOut", Wn:"change", xr:"reset", hj:"select", Sr:"submit", Bi:"input", vr:"propertychange", To:"dragstart", Oo:"drag", Qo:"dragenter", 
So:"dragover", Ro:"dragleave", Uo:"drop", Po:"dragend", js:"touchstart", hs:"touchmove", gs:"touchend", fs:"touchcancel", Ln:"beforeunload", lo:"consolemessage", mo:"contextmenu", Io:"DOMContentLoaded", ERROR:"error", Bp:"help", LOAD:"load", gq:"losecapture", $q:"orientationchange", wr:"readystatechange", yr:"resize", Hr:"scroll", ss:"unload", vp:"hashchange", dr:"pagehide", er:"pageshow", rr:"popstate", no:"copy", gr:"paste", oo:"cut", Hn:"beforecopy", In:"beforecut", Jn:"beforepaste", Xq:"online", 
Vq:"offline", oq:"message", ko:"connect", wn:l.events.Xc("AnimationStart"), un:l.events.Xc("AnimationEnd"), vn:l.events.Xc("AnimationIteration"), ms:l.events.Xc("TransitionEnd"), kr:"pointerdown", qr:"pointerup", jr:"pointercancel", nr:"pointermove", pr:"pointerover", or:"pointerout", lr:"pointerenter", mr:"pointerleave", op:"gotpointercapture", hq:"lostpointercapture", yq:"MSGestureChange", zq:"MSGestureEnd", Aq:"MSGestureHold", Bq:"MSGestureStart", Cq:"MSGestureTap", Dq:"MSGotPointerCapture", Eq:"MSInertiaStart", 
Fq:"MSLostPointerCapture", Gq:"MSPointerCancel", Hq:"MSPointerDown", Iq:"MSPointerEnter", Jq:"MSPointerHover", Kq:"MSPointerLeave", Lq:"MSPointerMove", Mq:"MSPointerOut", Nq:"MSPointerOver", Oq:"MSPointerUp", TEXT:"text", $r:"textInput", io:"compositionstart", jo:"compositionupdate", ho:"compositionend", cp:"exit", aq:"loadabort", bq:"loadcommit", cq:"loadredirect", eq:"loadstart", fq:"loadstop", zr:"responsive", Kr:"sizechanged", ts:"unresponsive", vs:"visibilitychange", Or:"storage", No:"DOMSubtreeModified", 
Jo:"DOMNodeInserted", Lo:"DOMNodeRemoved", Mo:"DOMNodeRemovedFromDocument", Ko:"DOMNodeInsertedIntoDocument", Go:"DOMAttrModified", Ho:"DOMCharacterDataModified", Kn:"beforeprint", tn:"afterprint"};
l.events.Ea = function(a, c) {
  l.events.Event.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.oc = this.state = null;
  a && this.init(a, c);
};
l.vb(l.events.Ea, l.events.Event);
l.events.Ea.Pq = {dc:0, rq:1, ec:2};
l.events.Ea.Kp = [1, 4, 2];
l.events.Ea.prototype.init = function(a, c) {
  var d = this.type = a.type, e = a.changedTouches ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  var f = a.relatedTarget;
  f ? l.userAgent.Ic && (l.Ab.Oj(f, "nodeName") || (f = null)) : d == l.events.uf.Ki ? f = a.fromElement : d == l.events.uf.Ji && (f = a.toElement);
  this.relatedTarget = f;
  l.eh(e) ? (this.offsetX = l.userAgent.Pa || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = l.userAgent.Pa || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, 
  this.screenY = e.screenY || 0);
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == d ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.oc = a;
  a.defaultPrevented && this.preventDefault();
};
l.events.Ea.prototype.stopPropagation = function() {
  l.events.Ea.Cb.stopPropagation.call(this);
  this.oc.stopPropagation ? this.oc.stopPropagation() : this.oc.cancelBubble = !0;
};
l.events.Ea.prototype.preventDefault = function() {
  l.events.Ea.Cb.preventDefault.call(this);
  var a = this.oc;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, l.events.Gc.ij) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (c) {
      }
    }
  }
};
l.events.ha = function() {
};
l.events.ha.Cf = "closure_listenable_" + (1E6 * Math.random() | 0);
l.events.ha.zj = function(a) {
  a.prototype[l.events.ha.Cf] = !0;
};
l.events.ha.Xa = function(a) {
  return !(!a || !a[l.events.ha.Cf]);
};
l.events.Lc = function() {
};
l.events.Lc.Uj = 0;
l.events.Lc.mm = function() {
  return ++l.events.Lc.Uj;
};
l.events.Hd = function(a, c, d, e, f, g) {
  this.listener = a;
  this.proxy = c;
  this.src = d;
  this.type = e;
  this.Gb = !!f;
  this.Yc = g;
  this.key = l.events.Lc.mm();
  this.removed = this.Oc = !1;
};
l.events.Hd.$o = !1;
l.events.Hd.prototype.dd = function() {
  this.removed = !0;
  this.Yc = this.src = this.proxy = this.listener = null;
};
l.events.ab = function(a) {
  this.src = a;
  this.Z = {};
  this.Dc = 0;
};
b = l.events.ab.prototype;
b.Pk = function() {
  return this.Dc;
};
b.add = function(a, c, d, e, f) {
  var g = a.toString();
  a = this.Z[g];
  a || (a = this.Z[g] = [], this.Dc++);
  var h = l.events.ab.ee(a, c, e, f);
  -1 < h ? (c = a[h], d || (c.Oc = !1)) : (c = new l.events.Hd(c, null, this.src, g, !!e, f), c.Oc = d, a.push(c));
  return c;
};
b.remove = function(a, c, d, e) {
  a = a.toString();
  if (!(a in this.Z)) {
    return !1;
  }
  var f = this.Z[a];
  c = l.events.ab.ee(f, c, d, e);
  return -1 < c ? (f[c].dd(), l.f.Vb(f, c), 0 == f.length && (delete this.Z[a], this.Dc--), !0) : !1;
};
b.Ih = function(a) {
  var c = a.type;
  if (!(c in this.Z)) {
    return !1;
  }
  var d = l.f.remove(this.Z[c], a);
  d && (a.dd(), 0 == this.Z[c].length && (delete this.Z[c], this.Dc--));
  return d;
};
b.removeAll = function(a) {
  a = a && a.toString();
  var c = 0, d;
  for (d in this.Z) {
    if (!a || d == a) {
      for (var e = this.Z[d], f = 0;f < e.length;f++) {
        ++c, e[f].dd();
      }
      delete this.Z[d];
      this.Dc--;
    }
  }
  return c;
};
b.qc = function(a, c) {
  var d = this.Z[a.toString()], e = [];
  if (d) {
    for (var f = 0;f < d.length;++f) {
      var g = d[f];
      g.Gb == c && e.push(g);
    }
  }
  return e;
};
b.Nb = function(a, c, d, e) {
  a = this.Z[a.toString()];
  var f = -1;
  a && (f = l.events.ab.ee(a, c, d, e));
  return -1 < f ? a[f] : null;
};
b.hasListener = function(a, c) {
  var d = l.ga(a), e = d ? a.toString() : "", f = l.ga(c);
  return l.object.some(this.Z, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(d && a[h].type != e || f && a[h].Gb != c)) {
        return !0;
      }
    }
    return !1;
  });
};
l.events.ab.ee = function(a, c, d, e) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.removed && g.listener == c && g.Gb == !!d && g.Yc == e) {
      return f;
    }
  }
  return -1;
};
l.events.Fd = "closure_lm_" + (1E6 * Math.random() | 0);
l.events.dm = "on";
l.events.Ne = {};
l.events.xd = {Oi:0, Pi:1, Qi:2};
l.events.vd = 2;
l.events.Fe = 0;
l.events.listen = function(a, c, d, e, f) {
  if (l.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      l.events.listen(a, c[g], d, e, f);
    }
    return null;
  }
  d = l.events.sd(d);
  return l.events.ha.Xa(a) ? a.listen(c, d, e, f) : l.events.nh(a, c, d, !1, e, f);
};
l.events.nh = function(a, c, d, e, f, g) {
  if (!c) {
    throw Error("Invalid event type");
  }
  var h = !!f;
  if (h && !l.events.Gc.Ed) {
    if (l.events.vd == l.events.xd.Oi) {
      return l.l.pa("Can not register capture listener in IE8-."), null;
    }
    if (l.events.vd == l.events.xd.Pi) {
      return null;
    }
  }
  var k = l.events.eb(a);
  k || (a[l.events.Fd] = k = new l.events.ab(a));
  d = k.add(c, d, e, f, g);
  if (d.proxy) {
    return d;
  }
  e = l.events.Mk();
  d.proxy = e;
  e.src = a;
  e.listener = d;
  if (a.addEventListener) {
    a.addEventListener(c.toString(), e, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(l.events.Hg(c.toString()), e);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  l.events.Fe++;
  return d;
};
l.events.Mk = function() {
  var a = l.events.uc, c = l.events.Gc.Ed ? function(d) {
    return a.call(c.src, c.listener, d);
  } : function(d) {
    d = a.call(c.src, c.listener, d);
    if (!d) {
      return d;
    }
  };
  return c;
};
l.events.Ee = function(a, c, d, e, f) {
  if (l.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      l.events.Ee(a, c[g], d, e, f);
    }
    return null;
  }
  d = l.events.sd(d);
  return l.events.ha.Xa(a) ? a.Ee(c, d, e, f) : l.events.nh(a, c, d, !0, e, f);
};
l.events.Zu = function(a, c, d, e, f) {
  c.listen(a, d, e, f);
};
l.events.Yb = function(a, c, d, e, f) {
  if (l.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      l.events.Yb(a, c[g], d, e, f);
    }
    return null;
  }
  d = l.events.sd(d);
  if (l.events.ha.Xa(a)) {
    return a.Yb(c, d, e, f);
  }
  if (!a) {
    return !1;
  }
  if (a = l.events.eb(a)) {
    if (c = a.Nb(c, d, !!e, f)) {
      return l.events.Zb(c);
    }
  }
  return !1;
};
l.events.Zb = function(a) {
  if (l.xc(a) || !a || a.removed) {
    return !1;
  }
  var c = a.src;
  if (l.events.ha.Xa(c)) {
    return c.Zb(a);
  }
  var d = a.type, e = a.proxy;
  c.removeEventListener ? c.removeEventListener(d, e, a.Gb) : c.detachEvent && c.detachEvent(l.events.Hg(d), e);
  l.events.Fe--;
  (d = l.events.eb(c)) ? (d.Ih(a), 0 == d.Pk() && (d.src = null, c[l.events.Fd] = null)) : a.dd();
  return !0;
};
l.events.rw = function(a, c, d, e, f) {
  c.Yb(a, d, e, f);
};
l.events.removeAll = function(a, c) {
  if (!a) {
    return 0;
  }
  if (l.events.ha.Xa(a)) {
    return a.Hh(c);
  }
  var d = l.events.eb(a);
  if (!d) {
    return 0;
  }
  var e = 0, f = c && c.toString(), g;
  for (g in d.Z) {
    if (!f || g == f) {
      for (var h = d.Z[g].concat(), k = 0;k < h.length;++k) {
        l.events.Zb(h[k]) && ++e;
      }
    }
  }
  return e;
};
l.events.qc = function(a, c, d) {
  return l.events.ha.Xa(a) ? a.qc(c, d) : a ? (a = l.events.eb(a)) ? a.qc(c, d) : [] : [];
};
l.events.Nb = function(a, c, d, e, f) {
  d = l.events.sd(d);
  e = !!e;
  return l.events.ha.Xa(a) ? a.Nb(c, d, e, f) : a ? (a = l.events.eb(a)) ? a.Nb(c, d, e, f) : null : null;
};
l.events.hasListener = function(a, c, d) {
  if (l.events.ha.Xa(a)) {
    return a.hasListener(c, d);
  }
  a = l.events.eb(a);
  return !!a && a.hasListener(c, d);
};
l.events.mk = function(a) {
  var c = [], d;
  for (d in a) {
    a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
  }
  return c.join("\n");
};
l.events.Hg = function(a) {
  return a in l.events.Ne ? l.events.Ne[a] : l.events.Ne[a] = l.events.dm + a;
};
l.events.Lb = function(a, c, d, e) {
  return l.events.ha.Xa(a) ? a.Lb(c, d, e) : l.events.ge(a, c, d, e);
};
l.events.ge = function(a, c, d, e) {
  var f = !0;
  if (a = l.events.eb(a)) {
    if (c = a.Z[c.toString()]) {
      for (c = c.concat(), a = 0;a < c.length;a++) {
        var g = c[a];
        g && g.Gb == d && !g.removed && (g = l.events.fe(g, e), f = f && !1 !== g);
      }
    }
  }
  return f;
};
l.events.fe = function(a, c) {
  var d = a.listener, e = a.Yc || a.src;
  a.Oc && l.events.Zb(a);
  return d.call(e, c);
};
l.events.fu = function() {
  return l.events.Fe;
};
l.events.dispatchEvent = function(a, c) {
  return a.dispatchEvent(c);
};
l.events.yv = function(a) {
  l.events.uc = a.zv(l.events.uc);
};
l.events.uc = function(a, c) {
  if (a.removed) {
    return !0;
  }
  if (!l.events.Gc.Ed) {
    var d = c || l.Gg("window.event"), e = new l.events.Ea(d, this), f = !0;
    if (l.events.vd == l.events.xd.Qi) {
      if (!l.events.ul(d)) {
        l.events.Pl(d);
        for (var d = [], g = e.currentTarget;g;g = g.parentNode) {
          d.push(g);
        }
        for (var g = a.type, h = d.length - 1;!e.zb && 0 <= h;h--) {
          e.currentTarget = d[h];
          var k = l.events.ge(d[h], g, !0, e), f = f && k;
        }
        for (h = 0;!e.zb && h < d.length;h++) {
          e.currentTarget = d[h], k = l.events.ge(d[h], g, !1, e), f = f && k;
        }
      }
    } else {
      f = l.events.fe(a, e);
    }
    return f;
  }
  return l.events.fe(a, new l.events.Ea(c, this));
};
l.events.Pl = function(a) {
  var c = !1;
  if (0 == a.keyCode) {
    try {
      a.keyCode = -1;
      return;
    } catch (d) {
      c = !0;
    }
  }
  if (c || void 0 == a.returnValue) {
    a.returnValue = !0;
  }
};
l.events.ul = function(a) {
  return 0 > a.keyCode || void 0 != a.returnValue;
};
l.events.fn = 0;
l.events.hu = function(a) {
  return a + "_" + l.events.fn++;
};
l.events.eb = function(a) {
  a = a[l.events.Fd];
  return a instanceof l.events.ab ? a : null;
};
l.events.Gd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
l.events.sd = function(a) {
  if (l.Wa(a)) {
    return a;
  }
  a[l.events.Gd] || (a[l.events.Gd] = function(c) {
    return a.handleEvent(c);
  });
  return a[l.events.Gd];
};
l.debug.ba.register(function(a) {
  l.events.uc = a(l.events.uc);
});
l.events.EventTarget = function() {
  l.N.call(this);
  this.Ia = new l.events.ab(this);
  this.yj = this;
  this.Bh = null;
};
l.vb(l.events.EventTarget, l.N);
l.events.ha.zj(l.events.EventTarget);
l.events.EventTarget.mq = 1E3;
b = l.events.EventTarget.prototype;
b.Ig = function() {
  return this.Bh;
};
b.addEventListener = function(a, c, d, e) {
  l.events.listen(this, a, c, d, e);
};
b.removeEventListener = function(a, c, d, e) {
  l.events.Yb(this, a, c, d, e);
};
b.dispatchEvent = function(a) {
  var c, d = this.Ig();
  if (d) {
    for (c = [];d;d = d.Ig()) {
      c.push(d);
    }
  }
  return l.events.EventTarget.dk(this.yj, a, c);
};
b.be = function() {
  l.events.EventTarget.Cb.be.call(this);
  this.Hh();
  this.Bh = null;
};
b.listen = function(a, c, d, e) {
  return this.Ia.add(String(a), c, !1, d, e);
};
b.Ee = function(a, c, d, e) {
  return this.Ia.add(String(a), c, !0, d, e);
};
b.Yb = function(a, c, d, e) {
  return this.Ia.remove(String(a), c, d, e);
};
b.Zb = function(a) {
  return this.Ia.Ih(a);
};
b.Hh = function(a) {
  return this.Ia ? this.Ia.removeAll(a) : 0;
};
b.Lb = function(a, c, d) {
  a = this.Ia.Z[String(a)];
  if (!a) {
    return !0;
  }
  a = a.concat();
  for (var e = !0, f = 0;f < a.length;++f) {
    var g = a[f];
    if (g && !g.removed && g.Gb == c) {
      var h = g.listener, k = g.Yc || g.src;
      g.Oc && this.Zb(g);
      e = !1 !== h.call(k, d) && e;
    }
  }
  return e && 0 != d.Kh;
};
b.qc = function(a, c) {
  return this.Ia.qc(String(a), c);
};
b.Nb = function(a, c, d, e) {
  return this.Ia.Nb(String(a), c, d, e);
};
b.hasListener = function(a, c) {
  return this.Ia.hasListener(l.ga(a) ? String(a) : void 0, c);
};
l.events.EventTarget.dk = function(a, c, d) {
  var e = c.type || c;
  if (l.G(c)) {
    c = new l.events.Event(c, a);
  } else {
    if (c instanceof l.events.Event) {
      c.target = c.target || a;
    } else {
      var f = c;
      c = new l.events.Event(e, a);
      l.object.extend(c, f);
    }
  }
  var f = !0, g;
  if (d) {
    for (var h = d.length - 1;!c.zb && 0 <= h;h--) {
      g = c.currentTarget = d[h], f = g.Lb(e, !0, c) && f;
    }
  }
  c.zb || (g = c.currentTarget = a, f = g.Lb(e, !0, c) && f, c.zb || (f = g.Lb(e, !1, c) && f));
  if (d) {
    for (h = 0;!c.zb && h < d.length;h++) {
      g = c.currentTarget = d[h], f = g.Lb(e, !1, c) && f;
    }
  }
  return f;
};
l.i = {};
l.i.m = {};
l.i.m.Fa = function(a, c, d, e, f) {
  this.Yd = a;
  this.gb = c;
  this.Wf = d;
  this.Ej = e;
  this.Eh = f;
};
l.i.m.Fa.prototype.getName = function() {
  return this.gb;
};
l.i.m.Fa.prototype.il = function() {
  return !this.gb || "[object Object]" == this.Yd;
};
l.i.m.Fa.prototype.Ym = function() {
  var a = l.i.m.el, c = l.i.m.Vl, c = [this.Yd ? a(this.Yd) + "." : "", this.gb ? a(c(this.gb)) : "anonymous", a(this.Ej), this.Wf ? " [as " + a(c(this.Wf)) + "]" : ""];
  this.Eh && (c.push(" at "), c.push(a(this.Eh)));
  return c.join("");
};
l.i.m.Hi = 20;
l.i.m.Ii = 5E5;
l.i.m.ya = "[a-zA-Z_$][\\w$]*";
l.i.m.qj = "(?: \\[as (" + l.i.m.ya + ")\\])?";
l.i.m.rj = "(?:((?:new )?(?:\\[object Object\\]|" + l.i.m.ya + "(?:\\." + l.i.m.ya + ")*))\\.)?";
l.i.m.tj = "(?:new )?(?:" + l.i.m.ya + "|<anonymous>)";
l.i.m.sj = " " + l.i.m.rj + "(" + l.i.m.tj + ")" + l.i.m.qj;
l.i.m.Ud = "((?:http|https|file)://[^\\s)]+|javascript:.*)";
l.i.m.di = " (?:\\(unknown source\\)|\\(native\\)|\\((.+)\\)|(.+))";
l.i.m.uj = new RegExp("^    at(?:" + l.i.m.sj + ")?" + l.i.m.di + "$");
l.i.m.oi = "(" + l.i.m.ya + ")?(\\(.*\\))?@";
l.i.m.pi = new RegExp("^" + l.i.m.oi + "(?::0|" + l.i.m.Ud + ")$");
l.i.m.Ri = "<anonymous function(?:\\: (?:(" + l.i.m.ya + "(?:\\." + l.i.m.ya + ")*)\\.)?(" + l.i.m.ya + "))?>";
l.i.m.Si = "(?:(?:(" + l.i.m.ya + ")|" + l.i.m.Ri + ")(\\(.*\\)))?@";
l.i.m.Ti = new RegExp("^" + l.i.m.Si + l.i.m.Ud + "?$");
l.i.m.ti = new RegExp("^function (" + l.i.m.ya + ")");
l.i.m.zi = "(" + l.i.m.ya + "(?:\\s+\\w+)*)";
l.i.m.Ai = new RegExp("^   at " + l.i.m.zi + "\\s*\\((eval code:[^)]*|" + l.i.m.Ud + ")\\)?$");
l.i.m.vk = function() {
  for (var a = [], c = arguments.callee.caller, d = 0;c && d < l.i.m.Hi;) {
    var e = Function.prototype.toString.call(c).match(l.i.m.ti), e = e ? e[1] : "", f = ["("];
    if (c.arguments) {
      for (var g = 0;g < c.arguments.length;g++) {
        var h = c.arguments[g];
        0 < g && f.push(", ");
        l.G(h) ? f.push('"', h, '"') : h && h.$replay ? f.push("goog.testing.Mock") : f.push(String(h));
      }
    } else {
      f.push("unknown");
    }
    f.push(")");
    f = f.join("");
    a.push(new l.i.m.Fa("", e, "", f, ""));
    try {
      c = c.caller;
    } catch (k) {
      break;
    }
    d++;
  }
  return a;
};
l.i.m.gm = function(a) {
  var c = a.match(l.i.m.uj);
  return c ? new l.i.m.Fa(c[1] || "", c[2] || "", c[3] || "", "", c[4] || c[5] || c[6] || "") : a.length > l.i.m.Ii ? l.i.m.fm(a) : (c = a.match(l.i.m.pi)) ? new l.i.m.Fa("", c[1] || "", "", c[2] || "", c[3] || "") : (c = a.match(l.i.m.Ti)) ? new l.i.m.Fa(c[2] || "", c[1] || c[3] || "", "", c[4] || "", c[5] || "") : (c = a.match(l.i.m.Ai)) ? new l.i.m.Fa("", c[1] || "", "", "", c[2] || "") : null;
};
l.i.m.fm = function(a) {
  var c = a.indexOf("("), d = a.lastIndexOf("@"), e = a.lastIndexOf(":"), f = "";
  0 <= c && c < d && (f = a.substring(0, c));
  var g = "";
  0 <= d && d + 1 < e && (g = a.substring(d + 1));
  e = "";
  0 <= c && 0 < d && c < d && (e = a.substring(c, d));
  return new l.i.m.Fa("", f, "", e, g);
};
l.i.m.Om = function(a) {
  l.i.m.ng = a;
};
l.i.m.Vl = function(a) {
  return l.i.m.ng ? l.i.m.ng(a) : a;
};
l.i.m.el = function(a) {
  return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
};
l.i.m.xg = function(a) {
  for (var c = a.length - 1;a[c] && a[c].il();) {
    c--;
  }
  for (var d = -1, e = 0;e < a.length;e++) {
    if (a[e] && "_assert" == a[e].getName()) {
      d = e;
      break;
    }
  }
  for (var f = [], e = d + 1;e <= c;e++) {
    f.push("> "), a[e] ? f.push(a[e].Ym()) : f.push("(unknown)"), f.push("\n");
  }
  return f.join("");
};
l.i.m.Ch = function(a) {
  a = a.replace(/\s*$/, "").split("\n");
  for (var c = [], d = 0;d < a.length;d++) {
    c.push(l.i.m.gm(a[d]));
  }
  return c;
};
l.i.m.Zs = function(a) {
  a = l.i.m.Ch(a);
  return l.i.m.xg(a);
};
l.i.m.Ik = function() {
  var a = Error();
  if (a.stack) {
    return a.stack;
  }
  try {
    null.x();
  } catch (c) {
    return c.stack;
  }
  return "";
};
l.i.m.get = function() {
  var a = l.i.m.Ik(), a = a ? l.isArray(a) ? l.i.m.Nj(a) : l.i.m.Ch(a) : l.i.m.vk();
  return l.i.m.xg(a);
};
l.i.m.Nj = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    var e = a[d], f = e.getFunctionName() || "unknown", g = e.getFileName(), e = g ? g + ":" + e.getLineNumber() + ":" + e.getColumnNumber() : "unknown";
    c.push(new l.i.m.Fa("", f, "", "", e));
  }
  return c;
};
l.F("setDeobfuscateFunctionName", l.i.m.Om);
l.i.l = {};
var p = function(a, c) {
  return a == c;
}, x = function(a, c) {
  return a.toString() === c.toString();
}, y = {String:p, Number:p, Boolean:p, Date:function(a, c) {
  return a.getTime() == c.getTime();
}, RegExp:x, Function:x};
l.i.l.yh = function(a, c, d) {
  return Math.abs(a - c) <= d;
};
l.i.l.jm = {Number:l.i.l.yh};
var _trueTypeOf = function(a) {
  var c = typeof a;
  try {
    switch(c) {
      case "object":
        if (null == a) {
          c = "null";
          break;
        }
      ;
      case "function":
        switch(a.constructor) {
          case (new String("")).constructor:
            c = "String";
            break;
          case (new Boolean(!0)).constructor:
            c = "Boolean";
            break;
          case (new Number(0)).constructor:
            c = "Number";
            break;
          case [].constructor:
            c = "Array";
            break;
          case RegExp().constructor:
            c = "RegExp";
            break;
          case (new Date).constructor:
            c = "Date";
            break;
          case Function:
            c = "Function";
            break;
          default:
            var d = a.constructor.toString().match(/function\s*([^( ]+)\(/);
            d && (c = d[1]);
        }
        break;
    }
  } catch (e) {
  } finally {
    c = c.substr(0, 1).toUpperCase() + c.substr(1);
  }
  return c;
}, _displayStringForValue = function(a) {
  var c;
  try {
    c = "<" + String(a) + ">";
  } catch (d) {
    c = "<toString failed: " + d.message + ">";
  }
  null !== a && void 0 !== a && (c += " (" + _trueTypeOf(a) + ")");
  return c;
}, z = function(a, c) {
  return c.length == a + 1 ? c[0] : null;
}, A = function(a, c, d) {
  return d.length == c + 1 ? d[a] : d[a - 1];
}, _validateArguments = function(a, c) {
  _assert(null, c.length == a || c.length == a + 1 && l.G(c[0]), "Incorrect arguments passed to assert function");
}, _assert = function(a, c, d) {
  c || l.i.l.md(a, d);
};
l.i.l.cb = function(a, c) {
  var d = "Expected " + _displayStringForValue(a) + " but was " + _displayStringForValue(c);
  if ("string" == typeof a && "string" == typeof c) {
    for (var e = Math.min(a.length, c.length), f = 0;f < e && a.charAt(f) == c.charAt(f);) {
      f++;
    }
    for (var g = 0;g < e && a.charAt(a.length - g - 1) == c.charAt(c.length - g - 1);) {
      g++;
    }
    f + g > e && (g = 0);
    if (2 < f || 2 < g) {
      e = function(a) {
        var c = Math.max(0, f - 2), d = Math.min(a.length, a.length - (g - 2));
        return (0 < c ? "..." : "") + a.substring(c, d) + (d < a.length ? "..." : "");
      }, d += "\nDifference was at position " + f + ". Expected [" + e(a) + "] vs. actual [" + e(c) + "]";
    }
  }
  return d;
};
var B = function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, l.ad(e), "Bad argument to assert(boolean)");
  _assert(d, e, "Call to assert(boolean) with false");
}, C = function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, l.ad(e), "Bad argument to assertTrue(boolean)");
  _assert(d, e, "Call to assertTrue(boolean) with false");
}, D = function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  _assert(z(2, arguments), e === f, l.i.l.cb(e, f));
}, E = function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), null !== A(1, 1, arguments), "Expected not to be " + _displayStringForValue(null));
}, F = function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), void 0 !== A(1, 1, arguments), "Expected not to be " + _displayStringForValue(void 0));
};
l.i.l.Ys = function(a) {
  var c = l.global.G_testRunner, d = c.logTestFailure;
  try {
    c.logTestFailure = void 0, a();
  } finally {
    c.logTestFailure = d;
  }
};
l.i.l.zd = null;
l.i.l.Ad = "";
l.i.l.sb = function(a, c, d) {
  function e(a, c, d) {
    for (var q = 0;q < g.length;++q) {
      var u = g[q] === a, v = h[q] === c;
      if (u || v) {
        u && v || f.push("Asymmetric cycle detected at " + d);
        return;
      }
    }
    g.push(a);
    h.push(c);
    if (a !== c) {
      if (q = _trueTypeOf(a), u = _trueTypeOf(c), q == u) {
        var v = "Array" == q, w = k(q, a, c);
        if (w != l.i.l.zd) {
          w != l.i.l.Ad && f.push(d + ": " + w);
        } else {
          if (v && a.length != c.length) {
            f.push(d + ": Expected " + a.length + "-element array but got a " + c.length + "-element array");
          } else {
            if (w = d + (v ? "[%s]" : d ? ".%s" : "%s"), a.__iterator__) {
              l.Wa(a.oa) ? a.oa(c) || f.push("equals() returned false for " + (d || q)) : a.M ? e(a.M, c.M, w.replace("%s", "map_")) : f.push("unable to check " + (d || q) + " for equality: it has an iterator we do not know how to handle. please add an equals method");
            } else {
              for (var r in a) {
                v && l.i.l.Tg(r) || (r in c ? e(a[r], c[r], w.replace("%s", r)) : f.push("property " + r + " not present in actual " + (d || u)));
              }
              for (r in c) {
                v && l.i.l.Tg(r) || r in a || f.push("property " + r + " not present in expected " + (d || q));
              }
              if (v) {
                for (r = 0;r < a.length;r++) {
                  e(a[r], c[r], w.replace("%s", String(r)));
                }
              }
            }
          }
        }
      } else {
        f.push(d + " " + l.i.l.cb(a, c));
      }
    }
    g.pop();
    h.pop();
  }
  var f = [], g = [], h = [], k = d || function(a, c, d) {
    return (a = y[a]) ? a(c, d) ? l.i.l.Ad : l.i.l.cb(c, d) : l.i.l.zd;
  };
  e(a, c, "");
  return 0 == f.length ? null : l.i.l.cb(a, c) + "\n   " + f.join("\n   ");
};
var G = function(a, c, d) {
  _validateArguments(2, arguments);
  var e = z(2, arguments) ? z(2, arguments) : "", f = l.i.l.sb(A(1, 2, arguments), A(2, 2, arguments));
  _assert(e, !f, f);
}, H = function(a, c, d, e) {
  _validateArguments(3, arguments);
  var f = A(1, 3, arguments), g = A(2, 3, arguments), h = A(3, 3, arguments);
  _assert(z(3, arguments), l.i.l.yh(f, g, h), "Expected " + f + ", but got " + g + " which was more than " + h + " away");
};
l.i.l.$e = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = a[d];
  }
  return c;
};
l.i.l.Og = function(a, c) {
  if (a.indexOf) {
    return a.indexOf(c);
  }
  for (var d = 0;d < a.length;d++) {
    if (a[d] === c) {
      return d;
    }
  }
  return -1;
};
l.i.l.gg = function(a, c) {
  return -1 != l.i.l.Og(a, c);
};
var J = function(a) {
  var c = document.createElement("DIV");
  c.innerHTML = a;
  return c.innerHTML.replace(/^\s+|\s+$/g, "");
};
l.i.l.md = function(a, c) {
  throw new l.i.Kc(a, c);
};
l.i.l.Tg = function(a) {
  return (a | 0) == a;
};
l.i.Kc = function(a, c) {
  this.message = (a ? a : "") + (a && c ? "\n" : "") + (c ? c : "");
  l.i.m.get();
  this.comment = a || null;
  Error.captureStackTrace ? Error.captureStackTrace(this, l.i.Kc) : this.stack = Error().stack || "";
};
l.vb(l.i.Kc, Error);
l.i.Kc.prototype.toString = function() {
  return this.message;
};
l.F("fail", function(a) {
  l.i.l.md("Call to fail()", a);
});
l.F("assert", B);
l.F("assertThrows", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments), e = z(1, arguments);
  _assert(e, "function" == typeof d, "Argument passed to assertThrows is not a function");
  try {
    d();
  } catch (f) {
    return f && l.G(f.stacktrace) && l.G(f.message) && (d = f.message.length - f.stacktrace.length, f.message.indexOf(f.stacktrace, d) == d && (f.message = f.message.substr(0, d - 14))), f;
  }
  l.i.l.md(e, "No exception thrown from function passed to assertThrows");
});
l.F("assertNotThrows", function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, "function" == typeof e, "Argument passed to assertNotThrows is not a function");
  try {
    return e();
  } catch (f) {
    d = (d ? d + "\n" : "") + "A non expected exception was thrown from function passed to assertNotThrows", l.i.l.md(d, f.stack || f.stacktrace || f.toString());
  }
});
l.F("assertTrue", C);
l.F("assertFalse", function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, l.ad(e), "Bad argument to assertFalse(boolean)");
  _assert(d, !e, "Call to assertFalse(boolean) with true");
});
l.F("assertEquals", D);
l.F("assertNotEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(2, 2, arguments);
  _assert(z(2, arguments), A(1, 2, arguments) !== e, "Expected not to be " + _displayStringForValue(e));
});
l.F("assertNull", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments);
  _assert(z(1, arguments), null === d, l.i.l.cb(null, d));
});
l.F("assertNotNull", E);
l.F("assertUndefined", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments);
  _assert(z(1, arguments), void 0 === d, l.i.l.cb(void 0, d));
});
l.F("assertNotUndefined", F);
l.F("assertNotNullNorUndefined", function(a, c) {
  _validateArguments(1, arguments);
  E.apply(null, arguments);
  F.apply(null, arguments);
});
l.F("assertNonEmptyString", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments);
  _assert(z(1, arguments), void 0 !== d && null !== d && "string" == typeof d && "" !== d, "Expected non-empty string but was " + _displayStringForValue(d));
});
l.F("assertNaN", function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), isNaN(A(1, 1, arguments)), "Expected NaN");
});
l.F("assertNotNaN", function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), !isNaN(A(1, 1, arguments)), "Expected not NaN");
});
l.F("assertObjectEquals", G);
l.F("assertObjectRoughlyEquals", function(a, c, d, e) {
  _validateArguments(3, arguments);
  var f = A(3, 3, arguments), g = z(3, arguments) ? z(3, arguments) : "", h = l.i.l.sb(A(1, 3, arguments), A(2, 3, arguments), function(a, c, d) {
    return (a = l.i.l.jm[a]) ? a(c, d, f) ? l.i.l.Ad : l.i.l.cb(c, d) + " which was more than " + f + " away" : l.i.l.zd;
  });
  _assert(g, !h, h);
});
l.F("assertObjectNotEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = z(2, arguments) ? z(2, arguments) : "", f = l.i.l.sb(A(1, 2, arguments), A(2, 2, arguments));
  _assert(e, f, "Objects should not be equal");
});
l.F("assertArrayEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments) ? z(2, arguments) : "", h = _trueTypeOf(e);
  _assert(g, "Array" == h, "Expected an array for assertArrayEquals but found a " + h);
  h = _trueTypeOf(f);
  _assert(g, "Array" == h, "Expected an array for assertArrayEquals but found a " + h);
  G(g, Array.prototype.concat.call(e), Array.prototype.concat.call(f));
});
l.F("assertElementsEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments) ? z(2, arguments) : "";
  if (e) {
    D("length mismatch: " + g, e.length, f.length);
    for (var h = 0;h < e.length;++h) {
      D("mismatch at index " + h + ": " + g, e[h], f[h]);
    }
  } else {
    B(g, !f);
  }
});
l.F("assertElementsRoughlyEqual", function(a, c, d, e) {
  _validateArguments(3, arguments);
  var f = A(1, 3, arguments), g = A(2, 3, arguments), h = A(3, 3, arguments), k = z(3, arguments) ? z(3, arguments) : "";
  if (f) {
    D("length mismatch: " + k, f.length, g.length);
    for (var n = 0;n < f.length;++n) {
      H(k, f[n], g[n], h);
    }
  } else {
    B(k, !g);
  }
});
l.F("assertSameElements", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments);
  C("Bad arguments to assertSameElements(opt_message, expected: ArrayLike, actual: ArrayLike)", l.V(e) && l.V(f));
  e = l.i.l.$e(e);
  f = l.i.l.$e(f);
  _assert(g, e.length == f.length, "Expected " + e.length + " elements: [" + e + "], got " + f.length + " elements: [" + f + "]");
  for (var h = l.i.l.$e(e), k = 0;k < f.length;k++) {
    var n = l.i.l.Og(h, f[k]);
    _assert(g, -1 != n, "Expected [" + e + "], got [" + f + "]");
    h.splice(n, 1);
  }
});
l.F("assertEvaluatesToTrue", function(a, c) {
  _validateArguments(1, arguments);
  A(1, 1, arguments) || _assert(z(1, arguments), !1, "Expected to evaluate to true");
});
l.F("assertEvaluatesToFalse", function(a, c) {
  _validateArguments(1, arguments);
  A(1, 1, arguments) && _assert(z(1, arguments), !1, "Expected to evaluate to false");
});
l.F("assertHTMLEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(2, 2, arguments), f = J(A(1, 2, arguments)), e = J(e);
  _assert(z(2, arguments), f === e, l.i.l.cb(f, e));
});
l.F("assertHashEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments), h;
  for (h in e) {
    _assert(g, h in f, "Expected hash had key " + h + " that was not found"), _assert(g, e[h] == f[h], "Value for key " + h + " mismatch - expected = " + e[h] + ", actual = " + f[h]);
  }
  for (h in f) {
    _assert(g, h in e, "Actual hash had key " + h + " that was not expected");
  }
});
l.F("assertRoughlyEquals", H);
l.F("assertContains", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  _assert(z(2, arguments), l.i.l.gg(f, e), "Expected '" + f + "' to contain '" + e + "'");
});
l.F("assertNotContains", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  _assert(z(2, arguments), !l.i.l.gg(f, e), "Expected '" + f + "' not to contain '" + e + "'");
});
l.F("assertRegExp", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  "string" == typeof e && (e = new RegExp(e));
  _assert(z(2, arguments), e.test(f), "Expected '" + f + "' to match RegExp " + e.toString());
});
chrome.cast.a.Cd = {UNKNOWN:"unknown", STATE_CHANGED:"state_changed", GAME_MESSAGE_RECEIVED:"game_message_received"};
l.w(chrome.cast.a, "GameManagerEventType", chrome.cast.a.Cd);
chrome.cast.a.wi = function() {
};
l.w(chrome.cast.a, "GameManagerEvent", chrome.cast.a.wi);
chrome.cast.a.Af = function(a, c) {
  this.type = chrome.cast.a.Cd.STATE_CHANGED;
  this.currentState = a;
  this.previousState = c;
};
l.w(chrome.cast.a, "GameManagerStateChangedEvent", chrome.cast.a.Af);
chrome.cast.a.xf = function(a, c) {
  this.type = chrome.cast.a.Cd.GAME_MESSAGE_RECEIVED;
  this.playerId = a;
  this.gameMessage = c;
};
l.w(chrome.cast.a, "GameManagerGameMessageReceivedEvent", chrome.cast.a.xf);
chrome.cast.a.yf = function(a) {
  this.gameManagerClient = a;
};
l.w(chrome.cast.a, "GameManagerInstanceResult", chrome.cast.a.yf);
chrome.cast.a.v = function(a, c, d, e, f, g, h) {
  this.Xf = a;
  this.rh = c;
  this.Ge = d;
  this.ke = e;
  this.ie = f;
  this.je = g;
  this.yb = new l.A.Map;
  for (a = 0;a < h.length;a++) {
    c = h[a], this.yb.set(c.fb(), c);
  }
};
l.w(chrome.cast.a, "GameManagerState", chrome.cast.a.v);
chrome.cast.a.v.prototype.yg = function() {
  return this.Xf;
};
l.w(chrome.cast.a.v.prototype, "getApplicationName", chrome.cast.a.v.prototype.yg);
chrome.cast.a.v.prototype.Cg = function() {
  return this.rh;
};
l.w(chrome.cast.a.v.prototype, "getMaxPlayers", chrome.cast.a.v.prototype.Cg);
chrome.cast.a.v.prototype.qe = function() {
  return this.Ge;
};
l.w(chrome.cast.a.v.prototype, "getLobbyState", chrome.cast.a.v.prototype.qe);
chrome.cast.a.v.prototype.ne = function() {
  return this.ke;
};
l.w(chrome.cast.a.v.prototype, "getGameplayState", chrome.cast.a.v.prototype.ne);
chrome.cast.a.v.prototype.le = function() {
  return this.ie;
};
l.w(chrome.cast.a.v.prototype, "getGameData", chrome.cast.a.v.prototype.le);
chrome.cast.a.v.prototype.me = function() {
  return this.je;
};
l.w(chrome.cast.a.v.prototype, "getGameStatusText", chrome.cast.a.v.prototype.me);
chrome.cast.a.v.prototype.se = function() {
  return this.yb.S();
};
l.w(chrome.cast.a.v.prototype, "getPlayers", chrome.cast.a.v.prototype.se);
chrome.cast.a.v.prototype.Ja = function(a) {
  return this.yb.get(a, null);
};
l.w(chrome.cast.a.v.prototype, "getPlayer", chrome.cast.a.v.prototype.Ja);
chrome.cast.a.v.prototype.zk = function() {
  for (var a = [], c = this.yb.S(), d = 0;d < c.length;d++) {
    var e = c[d];
    e.wc() && a.push(e);
  }
  return a;
};
l.w(chrome.cast.a.v.prototype, "getControllablePlayers", chrome.cast.a.v.prototype.zk);
chrome.cast.a.v.prototype.yk = function() {
  for (var a = [], c = this.yb.S(), d = 0;d < c.length;d++) {
    var e = c[d];
    e.xe() && a.push(e);
  }
  return a;
};
l.w(chrome.cast.a.v.prototype, "getConnectedPlayers", chrome.cast.a.v.prototype.yk);
chrome.cast.a.v.prototype.xk = function() {
  for (var a = [], c = this.yb.S(), d = 0;d < c.length;d++) {
    var e = c[d];
    e.xe() && e.wc() && a.push(e);
  }
  return a;
};
l.w(chrome.cast.a.v.prototype, "getConnectedControllablePlayers", chrome.cast.a.v.prototype.xk);
chrome.cast.a.v.prototype.Lk = function(a) {
  for (var c = [], d = this.yb.S(), e = 0;e < d.length;e++) {
    var f = d[e];
    f.rc() == a && c.push(f);
  }
  return c;
};
l.w(chrome.cast.a.v.prototype, "getPlayersInState", chrome.cast.a.v.prototype.Lk);
chrome.cast.a.v.prototype.$k = function(a) {
  return this.Ge != a.qe();
};
l.w(chrome.cast.a.v.prototype, "hasLobbyStateChanged", chrome.cast.a.v.prototype.$k);
chrome.cast.a.v.prototype.Zk = function(a) {
  return this.ke != a.ne();
};
l.w(chrome.cast.a.v.prototype, "hasGameplayStateChanged", chrome.cast.a.v.prototype.Zk);
chrome.cast.a.v.prototype.Xk = function(a) {
  return null != l.i.l.sb(this.ie, a.le());
};
l.w(chrome.cast.a.v.prototype, "hasGameDataChanged", chrome.cast.a.v.prototype.Xk);
chrome.cast.a.v.prototype.Yk = function(a) {
  return this.je != a.me();
};
l.w(chrome.cast.a.v.prototype, "hasGameStatusTextChanged", chrome.cast.a.v.prototype.Yk);
chrome.cast.a.v.prototype.bl = function(a, c) {
  var d = this.Ja(a), e = c.Ja(a);
  return null == d && null == e ? !1 : null != d && null != e ? !d.oa(e) : !0;
};
l.w(chrome.cast.a.v.prototype, "hasPlayerChanged", chrome.cast.a.v.prototype.bl);
chrome.cast.a.v.prototype.dl = function(a, c) {
  var d = this.Ja(a), e = c.Ja(a);
  return null == d && null == e ? !1 : null != d && null != e ? d.rc() != e.rc() : !0;
};
l.w(chrome.cast.a.v.prototype, "hasPlayerStateChanged", chrome.cast.a.v.prototype.dl);
chrome.cast.a.v.prototype.cl = function(a, c) {
  var d = this.Ja(a), e = c.Ja(a);
  return null == d && null == e ? !1 : null != d && null != e ? null != l.i.l.sb(d.Wc(), e.Wc()) : !0;
};
l.w(chrome.cast.a.v.prototype, "hasPlayerDataChanged", chrome.cast.a.v.prototype.cl);
chrome.cast.a.v.prototype.Bg = function(a) {
  for (var c = [], d = this.se(), e = 0;e < d.length;e++) {
    var f = d[e], g = a.Ja(f.fb());
    null != g && f.oa(g) || c.push(f.fb());
  }
  a = a.se();
  for (e = 0;e < a.length;e++) {
    g = a[e], f = this.Ja(g.fb()), null != f || l.f.contains(c, g.fb()) || c.push(g.fb());
  }
  return c;
};
l.w(chrome.cast.a.v.prototype, "getListOfChangedPlayers", chrome.cast.a.v.prototype.Bg);
chrome.cast.a.v.prototype.oa = function(a) {
  return this.Xf == a.yg() && this.rh == a.Cg() && this.Ge == a.qe() && this.ke == a.ne() && this.je == a.me() && 0 == this.Bg(a).length && !l.i.l.sb(this.ie, a.le());
};
l.w(chrome.cast.a.v.prototype, "equals", chrome.cast.a.v.prototype.oa);
chrome.cast.a.X = function(a, c, d, e) {
  this.Gh = a;
  this.Tb = c;
  this.Fh = d;
  this.Wg = e;
};
l.w(chrome.cast.a, "PlayerInfo", chrome.cast.a.X);
chrome.cast.a.X.prototype.fb = function() {
  return this.Gh;
};
l.w(chrome.cast.a.X.prototype, "getPlayerId", chrome.cast.a.X.prototype.fb);
chrome.cast.a.X.prototype.rc = function() {
  return this.Tb;
};
l.w(chrome.cast.a.X.prototype, "getPlayerState", chrome.cast.a.X.prototype.rc);
chrome.cast.a.X.prototype.Wc = function() {
  return this.Fh;
};
l.w(chrome.cast.a.X.prototype, "getPlayerData", chrome.cast.a.X.prototype.Wc);
chrome.cast.a.X.prototype.wc = function() {
  return this.Wg;
};
l.w(chrome.cast.a.X.prototype, "isControllable", chrome.cast.a.X.prototype.wc);
chrome.cast.a.X.prototype.xe = function() {
  return this.Tb == chrome.cast.a.PlayerState.IDLE || this.Tb == chrome.cast.a.PlayerState.AVAILABLE || this.Tb == chrome.cast.a.PlayerState.PLAYING || this.Tb == chrome.cast.a.PlayerState.READY;
};
l.w(chrome.cast.a.X.prototype, "isConnected", chrome.cast.a.X.prototype.xe);
chrome.cast.a.X.prototype.oa = function(a) {
  return this.Gh == a.fb() && this.Tb == a.rc() && this.Wg == a.wc() && !l.i.l.sb(this.Fh, a.Wc());
};
l.w(chrome.cast.a.X.prototype, "equals", chrome.cast.a.X.prototype.oa);
chrome.cast.a.u = function(a) {
  this.fa = new chrome.cast.a.D.$a(a);
  this.nc = new l.events.EventTarget;
  this.Ac = this.Kb = this.Uc = null;
  this.Yg = this.Pg = !1;
  this.Jj = l.bind(this.bm, this);
  this.Kj = l.bind(this.cn, this);
  this.Nc = this.Mc = null;
  this.fa.Qm(this.Jj, this.Kj);
};
l.w(chrome.cast.a, "GameManagerClient", chrome.cast.a.u);
chrome.cast.a.u.Fk = function(a, c, d) {
  (new chrome.cast.a.u(a)).hl(c, d);
};
l.w(chrome.cast.a.u, "getInstanceFor", chrome.cast.a.u.Fk);
chrome.cast.a.u.prototype.hl = function(a, c) {
  if (this.Pg) {
    throw Error("Attempted to initialize the GameManagerClient more than once.");
  }
  if (this.isDisposed()) {
    throw Error("Attempted to initialize the GameManagerClient after it was disposed.");
  }
  this.Pg = !0;
  var d = this;
  this.fa.xm(function() {
    a(new chrome.cast.a.yf(d));
  }, c);
};
chrome.cast.a.u.prototype.Sa = function() {
  this.isDisposed() || (this.fa.Sa(), this.nc.Sa(), this.fa = null, this.Yg = !0);
};
l.w(chrome.cast.a.u.prototype, "dispose", chrome.cast.a.u.prototype.Sa);
chrome.cast.a.u.prototype.isDisposed = function() {
  return this.Yg;
};
l.w(chrome.cast.a.u.prototype, "isDisposed", chrome.cast.a.u.prototype.isDisposed);
chrome.cast.a.u.prototype.Am = function(a, c, d) {
  var e = this.fa.Da();
  this.La(e, chrome.cast.a.PlayerState.AVAILABLE, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerAvailableRequest", chrome.cast.a.u.prototype.Am);
chrome.cast.a.u.prototype.Bm = function(a, c, d, e) {
  this.La(a, chrome.cast.a.PlayerState.AVAILABLE, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerAvailableRequestWithPlayerId", chrome.cast.a.u.prototype.Bm);
chrome.cast.a.u.prototype.Im = function(a, c, d) {
  var e = this.fa.Da();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.La(e, chrome.cast.a.PlayerState.READY, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerReadyRequest", chrome.cast.a.u.prototype.Im);
chrome.cast.a.u.prototype.Jm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.La(a, chrome.cast.a.PlayerState.READY, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerReadyRequestWithPlayerId", chrome.cast.a.u.prototype.Jm);
chrome.cast.a.u.prototype.Cm = function(a, c, d) {
  var e = this.fa.Da();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.La(e, chrome.cast.a.PlayerState.IDLE, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerIdleRequest", chrome.cast.a.u.prototype.Cm);
chrome.cast.a.u.prototype.Dm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.La(a, chrome.cast.a.PlayerState.IDLE, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerIdleRequestWithPlayerId", chrome.cast.a.u.prototype.Dm);
chrome.cast.a.u.prototype.Em = function(a, c, d) {
  var e = this.fa.Da();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.La(e, chrome.cast.a.PlayerState.PLAYING, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerPlayingRequest", chrome.cast.a.u.prototype.Em);
chrome.cast.a.u.prototype.Fm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.La(a, chrome.cast.a.PlayerState.PLAYING, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerPlayingRequestWithPlayerId", chrome.cast.a.u.prototype.Fm);
chrome.cast.a.u.prototype.Gm = function(a, c, d) {
  var e = this.fa.Da();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.La(e, chrome.cast.a.PlayerState.QUIT, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerQuitRequest", chrome.cast.a.u.prototype.Gm);
chrome.cast.a.u.prototype.Hm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.La(a, chrome.cast.a.PlayerState.QUIT, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerQuitRequestWithPlayerId", chrome.cast.a.u.prototype.Hm);
chrome.cast.a.u.prototype.La = function(a, c, d, e, f) {
  this.gc();
  c = chrome.cast.a.D.na.Dk(c);
  this.fa.Ue(a, c, d, e, f);
};
chrome.cast.a.u.prototype.zm = function(a, c, d) {
  var e = this.fa.Da();
  if (!e) {
    throw Error("Cannot send game request - no last used player ID found.");
  }
  this.Oh(e, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendGameRequest", chrome.cast.a.u.prototype.zm);
chrome.cast.a.u.prototype.Oh = function(a, c, d, e) {
  this.gc();
  this.fa.Ue(a, chrome.cast.a.D.na.ui, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendGameRequestWithPlayerId", chrome.cast.a.u.prototype.Oh);
chrome.cast.a.u.prototype.ym = function(a) {
  var c = this.fa.Da();
  if (!c) {
    throw Error("Cannot send game message - no last used player ID found.");
  }
  this.Nh(c, a);
};
l.w(chrome.cast.a.u.prototype, "sendGameMessage", chrome.cast.a.u.prototype.ym);
chrome.cast.a.u.prototype.Nh = function(a, c) {
  this.gc();
  this.fa.Ue(a, chrome.cast.a.D.na.GAME_MESSAGE, c, null, null);
};
l.w(chrome.cast.a.u.prototype, "sendGameMessageWithPlayerId", chrome.cast.a.u.prototype.Nh);
chrome.cast.a.u.prototype.addEventListener = function(a, c) {
  this.nc.listen(a, c);
};
l.w(chrome.cast.a.u.prototype, "addEventListener", chrome.cast.a.u.prototype.addEventListener);
chrome.cast.a.u.prototype.removeEventListener = function(a, c) {
  this.nc.Yb(a, c);
};
l.w(chrome.cast.a.u.prototype, "removeEventListener", chrome.cast.a.u.prototype.removeEventListener);
chrome.cast.a.u.prototype.Ak = function() {
  this.gc();
  return this.Kb;
};
l.w(chrome.cast.a.u.prototype, "getCurrentState", chrome.cast.a.u.prototype.Ak);
chrome.cast.a.u.prototype.Da = function() {
  this.gc();
  return this.fa.Da();
};
l.w(chrome.cast.a.u.prototype, "getLastUsedPlayerId", chrome.cast.a.u.prototype.Da);
b = chrome.cast.a.u.prototype;
b.bm = function(a) {
  if (a.statusCode != chrome.cast.a.D.Ga.Sd) {
    throw Error("Expecting a successful response message but got an error for request ID " + a.requestId);
  }
  if (this.Ae() || a.gameManagerConfig) {
    if (a.gameManagerConfig && (this.Uc = a.gameManagerConfig), this.Ae()) {
      this.Ac = this.Kb;
      for (var c = [], d = 0;d < a.players.length;d++) {
        var e = a.players[d], f = e.playerId;
        c.push(new chrome.cast.a.X(f, e.playerState, e.playerData, this.fa.wl(f)));
      }
      this.Kb = new chrome.cast.a.v(this.Uc.applicationName, this.Uc.maxPlayers, a.lobbyState, a.gameplayState, a.gameData, a.gameStatusText, c);
      c = this.Kb.Ja(a.playerId);
      null != c && c.wc() && a.type == chrome.cast.a.D.cc.GAME_MESSAGE && (this.Mc = a.playerId, this.Nc = a.extraMessageData);
    }
  }
};
b.cn = function() {
  null == this.Ac || this.Kb.oa(this.Ac) || this.fk(this.Kb, this.Ac);
  null != this.Mc && null != this.Nc && this.ek(this.Mc, this.Nc);
  this.Nc = this.Mc = this.Ac = null;
};
b.Ae = function() {
  return null != this.Uc;
};
b.fk = function(a, c) {
  this.nc.dispatchEvent(new chrome.cast.a.Af(a, c));
};
b.ek = function(a, c) {
  this.nc.dispatchEvent(new chrome.cast.a.xf(a, c));
};
b.gc = function() {
  if (!this.Ae()) {
    throw Error("Attempted to perform an operation on the GameManagerClient before it was initialized.");
  }
  if (this.isDisposed()) {
    throw Error("Attempted to perform an operation on the GameManagerClient after it was disposed.");
  }
};
chrome.cast.a.D.vi = function() {
  this.applicationName = "[APPLICATION_NAME_NOT_SET]";
  this.maxPlayers = -1;
  this.version = "[INVALID_VERSION]";
};
l.F("chrome.cast.games.internal.GameManagerConfig", chrome.cast.a.D.vi);
chrome.cast.a.D.Zi = function() {
  this.playerId = "";
  this.playerState = chrome.cast.a.PlayerState.UNKNOWN;
  this.playerData = null;
};
l.F("chrome.cast.games.internal.PlayerInfoMessageComponent", chrome.cast.a.D.Zi);
})();
