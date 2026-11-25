(function () {
  "use strict";
  var W = window.T = {};

  W.$ = function (s, r) { return (r || document).querySelector(s); };
  W.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  W.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  W.num = function (n, d) {
    if (!isFinite(n)) return "—";
    return Number(n).toLocaleString("en-US", { minimumFractionDigits: d || 0, maximumFractionDigits: d == null ? 2 : d });
  };
  W.pct = function (n, d) { return isFinite(n) ? (n * 100).toFixed(d == null ? 1 : d) + "%" : "—"; };
  W.money = function (n, cur) {
    if (!isFinite(n)) return "—";
    return (cur || "$") + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  var tEl = null, tTimer = 0;
  W.toast = function (msg) {
    if (!tEl) { tEl = document.createElement("div"); tEl.className = "toast"; document.body.appendChild(tEl); }
    tEl.textContent = msg; tEl.classList.add("on");
    clearTimeout(tTimer); tTimer = setTimeout(function () { tEl.classList.remove("on"); }, 1700);
  };

  W.copy = function (text, btn) {
    var done = function () {
      W.toast("Copied");
      if (btn) {
        var old = btn.textContent; btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = old; }, 1300);
      }
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(fb);
    } else fb();
    function fb() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { W.toast("Copy failed"); }
      document.body.removeChild(ta);
    }
  };

  W.download = function (name, text, mime) {
    var blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
  };

  W.store = {
    get: function (k, d) {
      try { var v = localStorage.getItem("mt." + k); return v ? JSON.parse(v) : d; } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem("mt." + k, JSON.stringify(v)); return true; } catch (e) { return false; }
    }
  };

  W.debounce = function (fn, ms) {
    var t = 0;
    return function () {
      var a = arguments, self = this;
      clearTimeout(t); t = setTimeout(function () { fn.apply(self, a); }, ms || 200);
    };
  };

  W.csv = function (text) {
    var rows = [], row = [], cur = "", q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i], n = text[i + 1];
      if (q) {
        if (c === '"' && n === '"') { cur += '"'; i++; }
        else if (c === '"') q = false;
        else cur += c;
      } else if (c === '"') q = true;
      else if (c === "," || c === "\t") { row.push(cur); cur = ""; }
      else if (c === "\n") { row.push(cur); rows.push(row); row = []; cur = ""; }
      else if (c !== "\r") cur += c;
    }
    if (cur.length || row.length) { row.push(cur); rows.push(row); }
    return rows.filter(function (r) { return r.some(function (v) { return String(v).trim() !== ""; }); });
  };

  W.near = function (el, sel) {
    while (el && el !== document) { if (el.matches && el.matches(sel)) return el; el = el.parentElement; }
    return null;
  };

  W.busy = function (btn, ms) {
    if (!btn) return;
    var old = btn.textContent; btn.disabled = true; btn.textContent = "Working…";
    setTimeout(function () { btn.disabled = false; btn.textContent = old; }, ms || 500);
  };
})();
