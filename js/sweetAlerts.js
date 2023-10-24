/*!
 * sweetalert2 v11.7.32
 * Released under the MIT License.
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).Sweetalert2 =
        e());
})(this, function () {
  "use strict";
  function t(t, e) {
    return (function (t, e) {
      if (e.get) return e.get.call(t);
      return e.value;
    })(t, n(t, e, "get"));
  }
  function e(t, e, o) {
    return (
      (function (t, e, n) {
        if (e.set) e.set.call(t, n);
        else {
          if (!e.writable)
            throw new TypeError("attempted to set read only private field");
          e.value = n;
        }
      })(t, n(t, e, "set"), o),
      o
    );
  }
  function n(t, e, n) {
    if (!e.has(t))
      throw new TypeError(
        "attempted to " + n + " private field on non-instance"
      );
    return e.get(t);
  }
  function o(t, e, n) {
    !(function (t, e) {
      if (e.has(t))
        throw new TypeError(
          "Cannot initialize the same private elements twice on an object"
        );
    })(t, e),
      e.set(t, n);
  }
  const i = {},
    s = (t) =>
      new Promise((e) => {
        if (!t) return e();
        const n = window.scrollX,
          o = window.scrollY;
        (i.restoreFocusTimeout = setTimeout(() => {
          i.previousActiveElement instanceof HTMLElement
            ? (i.previousActiveElement.focus(),
              (i.previousActiveElement = null))
            : document.body && document.body.focus(),
            e();
        }, 100)),
          window.scrollTo(n, o);
      }),
    r = "swal2-",
    a = [
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "show",
      "hide",
      "close",
      "title",
      "html-container",
      "actions",
      "confirm",
      "deny",
      "cancel",
      "default-outline",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "input-label",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loader",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
    ].reduce((t, e) => ((t[e] = r + e), t), {}),
    c = ["success", "warning", "info", "question", "error"].reduce(
      (t, e) => ((t[e] = r + e), t),
      {}
    ),
    l = "SweetAlert2:",
    u = (t) => t.charAt(0).toUpperCase() + t.slice(1),
    d = (t) => {
      console.warn(
        "".concat(l, " ").concat("object" == typeof t ? t.join(" ") : t)
      );
    },
    p = (t) => {
      console.error("".concat(l, " ").concat(t));
    },
    m = [],
    g = (t, e) => {
      var n;
      (n = '"'
        .concat(
          t,
          '" is deprecated and will be removed in the next major release. Please use "'
        )
        .concat(e, '" instead.')),
        m.includes(n) || (m.push(n), d(n));
    },
    h = (t) => ("function" == typeof t ? t() : t),
    f = (t) => t && "function" == typeof t.toPromise,
    b = (t) => (f(t) ? t.toPromise() : Promise.resolve(t)),
    y = (t) => t && Promise.resolve(t) === t,
    w = () => document.body.querySelector(".".concat(a.container)),
    v = (t) => {
      const e = w();
      return e ? e.querySelector(t) : null;
    },
    C = (t) => v(".".concat(t)),
    A = () => C(a.popup),
    k = () => C(a.icon),
    B = () => C(a.title),
    E = () => C(a["html-container"]),
    x = () => C(a.image),
    P = () => C(a["progress-steps"]),
    T = () => C(a["validation-message"]),
    L = () => v(".".concat(a.actions, " .").concat(a.confirm)),
    S = () => v(".".concat(a.actions, " .").concat(a.cancel)),
    O = () => v(".".concat(a.actions, " .").concat(a.deny)),
    M = () => v(".".concat(a.loader)),
    j = () => C(a.actions),
    H = () => C(a.footer),
    I = () => C(a["timer-progress-bar"]),
    D = () => C(a.close),
    q = () => {
      const t = A();
      if (!t) return [];
      const e = t.querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        ),
        n = Array.from(e).sort((t, e) => {
          const n = parseInt(t.getAttribute("tabindex") || "0"),
            o = parseInt(e.getAttribute("tabindex") || "0");
          return n > o ? 1 : n < o ? -1 : 0;
        }),
        o = t.querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        ),
        i = Array.from(o).filter((t) => "-1" !== t.getAttribute("tabindex"));
      return [...new Set(n.concat(i))].filter((t) => tt(t));
    },
    V = () =>
      _(document.body, a.shown) &&
      !_(document.body, a["toast-shown"]) &&
      !_(document.body, a["no-backdrop"]),
    N = () => {
      const t = A();
      return !!t && _(t, a.toast);
    },
    F = (t, e) => {
      if (((t.textContent = ""), e)) {
        const n = new DOMParser().parseFromString(e, "text/html"),
          o = n.querySelector("head");
        o &&
          Array.from(o.childNodes).forEach((e) => {
            t.appendChild(e);
          });
        const i = n.querySelector("body");
        i &&
          Array.from(i.childNodes).forEach((e) => {
            e instanceof HTMLVideoElement || e instanceof HTMLAudioElement
              ? t.appendChild(e.cloneNode(!0))
              : t.appendChild(e);
          });
      }
    },
    _ = (t, e) => {
      if (!e) return !1;
      const n = e.split(/\s+/);
      for (let e = 0; e < n.length; e++)
        if (!t.classList.contains(n[e])) return !1;
      return !0;
    },
    R = (t, e, n) => {
      if (
        (((t, e) => {
          Array.from(t.classList).forEach((n) => {
            Object.values(a).includes(n) ||
              Object.values(c).includes(n) ||
              Object.values(e.showClass || {}).includes(n) ||
              t.classList.remove(n);
          });
        })(t, e),
        e.customClass && e.customClass[n])
      ) {
        if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach)
          return void d(
            "Invalid type of customClass."
              .concat(n, '! Expected string or iterable object, got "')
              .concat(typeof e.customClass[n], '"')
          );
        K(t, e.customClass[n]);
      }
    },
    U = (t, e) => {
      if (!e) return null;
      switch (e) {
        case "select":
        case "textarea":
        case "file":
          return t.querySelector(".".concat(a.popup, " > .").concat(a[e]));
        case "checkbox":
          return t.querySelector(
            ".".concat(a.popup, " > .").concat(a.checkbox, " input")
          );
        case "radio":
          return (
            t.querySelector(
              ".".concat(a.popup, " > .").concat(a.radio, " input:checked")
            ) ||
            t.querySelector(
              ".".concat(a.popup, " > .").concat(a.radio, " input:first-child")
            )
          );
        case "range":
          return t.querySelector(
            ".".concat(a.popup, " > .").concat(a.range, " input")
          );
        default:
          return t.querySelector(".".concat(a.popup, " > .").concat(a.input));
      }
    },
    z = (t) => {
      if ((t.focus(), "file" !== t.type)) {
        const e = t.value;
        (t.value = ""), (t.value = e);
      }
    },
    W = (t, e, n) => {
      t &&
        e &&
        ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
        e.forEach((e) => {
          Array.isArray(t)
            ? t.forEach((t) => {
                n ? t.classList.add(e) : t.classList.remove(e);
              })
            : n
            ? t.classList.add(e)
            : t.classList.remove(e);
        }));
    },
    K = (t, e) => {
      W(t, e, !0);
    },
    Y = (t, e) => {
      W(t, e, !1);
    },
    Z = (t, e) => {
      const n = Array.from(t.children);
      for (let t = 0; t < n.length; t++) {
        const o = n[t];
        if (o instanceof HTMLElement && _(o, e)) return o;
      }
    },
    $ = (t, e, n) => {
      n === "".concat(parseInt(n)) && (n = parseInt(n)),
        n || 0 === parseInt(n)
          ? (t.style[e] = "number" == typeof n ? "".concat(n, "px") : n)
          : t.style.removeProperty(e);
    },
    J = function (t) {
      let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
      t && (t.style.display = e);
    },
    X = (t) => {
      t && (t.style.display = "none");
    },
    G = (t, e, n, o) => {
      const i = t.querySelector(e);
      i && (i.style[n] = o);
    },
    Q = function (t, e) {
      e
        ? J(
            t,
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "flex"
          )
        : X(t);
    },
    tt = (t) =>
      !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)),
    et = (t) => !!(t.scrollHeight > t.clientHeight),
    nt = (t) => {
      const e = window.getComputedStyle(t),
        n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
        o = parseFloat(e.getPropertyValue("transition-duration") || "0");
      return n > 0 || o > 0;
    },
    ot = function (t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const n = I();
      n &&
        tt(n) &&
        (e && ((n.style.transition = "none"), (n.style.width = "100%")),
        setTimeout(() => {
          (n.style.transition = "width ".concat(t / 1e3, "s linear")),
            (n.style.width = "0%");
        }, 10));
    },
    it = () => "undefined" == typeof window || "undefined" == typeof document,
    st = '\n <div aria-labelledby="'
      .concat(a.title, '" aria-describedby="')
      .concat(a["html-container"], '" class="')
      .concat(a.popup, '" tabindex="-1">\n   <button type="button" class="')
      .concat(a.close, '"></button>\n   <ul class="')
      .concat(a["progress-steps"], '"></ul>\n   <div class="')
      .concat(a.icon, '"></div>\n   <img class="')
      .concat(a.image, '" />\n   <h2 class="')
      .concat(a.title, '" id="')
      .concat(a.title, '"></h2>\n   <div class="')
      .concat(a["html-container"], '" id="')
      .concat(a["html-container"], '"></div>\n   <input class="')
      .concat(a.input, '" id="')
      .concat(a.input, '" />\n   <input type="file" class="')
      .concat(a.file, '" />\n   <div class="')
      .concat(
        a.range,
        '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
      )
      .concat(a.select, '" id="')
      .concat(a.select, '"></select>\n   <div class="')
      .concat(a.radio, '"></div>\n   <label class="')
      .concat(a.checkbox, '">\n     <input type="checkbox" id="')
      .concat(a.checkbox, '" />\n     <span class="')
      .concat(a.label, '"></span>\n   </label>\n   <textarea class="')
      .concat(a.textarea, '" id="')
      .concat(a.textarea, '"></textarea>\n   <div class="')
      .concat(a["validation-message"], '" id="')
      .concat(a["validation-message"], '"></div>\n   <div class="')
      .concat(a.actions, '">\n     <div class="')
      .concat(a.loader, '"></div>\n     <button type="button" class="')
      .concat(a.confirm, '"></button>\n     <button type="button" class="')
      .concat(a.deny, '"></button>\n     <button type="button" class="')
      .concat(a.cancel, '"></button>\n   </div>\n   <div class="')
      .concat(a.footer, '"></div>\n   <div class="')
      .concat(a["timer-progress-bar-container"], '">\n     <div class="')
      .concat(a["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
      .replace(/(^|\n)\s*/g, ""),
    rt = () => {
      i.currentInstance.resetValidationMessage();
    },
    at = (t) => {
      const e = (() => {
        const t = w();
        return (
          !!t &&
          (t.remove(),
          Y(
            [document.documentElement, document.body],
            [a["no-backdrop"], a["toast-shown"], a["has-column"]]
          ),
          !0)
        );
      })();
      if (it()) return void p("SweetAlert2 requires document to initialize");
      const n = document.createElement("div");
      (n.className = a.container), e && K(n, a["no-transition"]), F(n, st);
      const o =
        "string" == typeof (i = t.target) ? document.querySelector(i) : i;
      var i;
      o.appendChild(n),
        ((t) => {
          const e = A();
          e.setAttribute("role", t.toast ? "alert" : "dialog"),
            e.setAttribute("aria-live", t.toast ? "polite" : "assertive"),
            t.toast || e.setAttribute("aria-modal", "true");
        })(t),
        ((t) => {
          "rtl" === window.getComputedStyle(t).direction && K(w(), a.rtl);
        })(o),
        (() => {
          const t = A(),
            e = Z(t, a.input),
            n = Z(t, a.file),
            o = t.querySelector(".".concat(a.range, " input")),
            i = t.querySelector(".".concat(a.range, " output")),
            s = Z(t, a.select),
            r = t.querySelector(".".concat(a.checkbox, " input")),
            c = Z(t, a.textarea);
          (e.oninput = rt),
            (n.onchange = rt),
            (s.onchange = rt),
            (r.onchange = rt),
            (c.oninput = rt),
            (o.oninput = () => {
              rt(), (i.value = o.value);
            }),
            (o.onchange = () => {
              rt(), (i.value = o.value);
            });
        })();
    },
    ct = (t, e) => {
      t instanceof HTMLElement
        ? e.appendChild(t)
        : "object" == typeof t
        ? lt(t, e)
        : t && F(e, t);
    },
    lt = (t, e) => {
      t.jquery ? ut(e, t) : F(e, t.toString());
    },
    ut = (t, e) => {
      if (((t.textContent = ""), 0 in e))
        for (let n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
      else t.appendChild(e.cloneNode(!0));
    },
    dt = (() => {
      if (it()) return !1;
      const t = document.createElement("div");
      return void 0 !== t.style.webkitAnimation
        ? "webkitAnimationEnd"
        : void 0 !== t.style.animation && "animationend";
    })(),
    pt = (t, e) => {
      const n = j(),
        o = M();
      n &&
        o &&
        (e.showConfirmButton || e.showDenyButton || e.showCancelButton
          ? J(n)
          : X(n),
        R(n, e, "actions"),
        (function (t, e, n) {
          const o = L(),
            i = O(),
            s = S();
          if (!o || !i || !s) return;
          mt(o, "confirm", n),
            mt(i, "deny", n),
            mt(s, "cancel", n),
            (function (t, e, n, o) {
              if (!o.buttonsStyling) return void Y([t, e, n], a.styled);
              K([t, e, n], a.styled),
                o.confirmButtonColor &&
                  ((t.style.backgroundColor = o.confirmButtonColor),
                  K(t, a["default-outline"]));
              o.denyButtonColor &&
                ((e.style.backgroundColor = o.denyButtonColor),
                K(e, a["default-outline"]));
              o.cancelButtonColor &&
                ((n.style.backgroundColor = o.cancelButtonColor),
                K(n, a["default-outline"]));
            })(o, i, s, n),
            n.reverseButtons &&
              (n.toast
                ? (t.insertBefore(s, o), t.insertBefore(i, o))
                : (t.insertBefore(s, e),
                  t.insertBefore(i, e),
                  t.insertBefore(o, e)));
        })(n, o, e),
        F(o, e.loaderHtml || ""),
        R(o, e, "loader"));
    };
  function mt(t, e, n) {
    const o = u(e);
    Q(t, n["show".concat(o, "Button")], "inline-block"),
      F(t, n["".concat(e, "ButtonText")] || ""),
      t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")] || ""),
      (t.className = a[e]),
      R(t, n, "".concat(e, "Button"));
  }
  const gt = (t, e) => {
    const n = w();
    n &&
      (!(function (t, e) {
        "string" == typeof e
          ? (t.style.background = e)
          : e || K([document.documentElement, document.body], a["no-backdrop"]);
      })(n, e.backdrop),
      (function (t, e) {
        if (!e) return;
        e in a
          ? K(t, a[e])
          : (d('The "position" parameter is not valid, defaulting to "center"'),
            K(t, a.center));
      })(n, e.position),
      (function (t, e) {
        if (!e) return;
        K(t, a["grow-".concat(e)]);
      })(n, e.grow),
      R(n, e, "container"));
  };
  var ht = { innerParams: new WeakMap(), domCache: new WeakMap() };
  const ft = [
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "textarea",
    ],
    bt = (t) => {
      if (!t.input) return;
      if (!Bt[t.input])
        return void p(
          'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
            t.input,
            '"'
          )
        );
      const e = At(t.input),
        n = Bt[t.input](e, t);
      J(e),
        t.inputAutoFocus &&
          setTimeout(() => {
            z(n);
          });
    },
    yt = (t, e) => {
      const n = U(A(), t);
      if (n) {
        ((t) => {
          for (let e = 0; e < t.attributes.length; e++) {
            const n = t.attributes[e].name;
            ["id", "type", "value", "style"].includes(n) ||
              t.removeAttribute(n);
          }
        })(n);
        for (const t in e) n.setAttribute(t, e[t]);
      }
    },
    wt = (t) => {
      const e = At(t.input);
      "object" == typeof t.customClass && K(e, t.customClass.input);
    },
    vt = (t, e) => {
      (t.placeholder && !e.inputPlaceholder) ||
        (t.placeholder = e.inputPlaceholder);
    },
    Ct = (t, e, n) => {
      if (n.inputLabel) {
        const o = document.createElement("label"),
          i = a["input-label"];
        o.setAttribute("for", t.id),
          (o.className = i),
          "object" == typeof n.customClass && K(o, n.customClass.inputLabel),
          (o.innerText = n.inputLabel),
          e.insertAdjacentElement("beforebegin", o);
      }
    },
    At = (t) => Z(A(), a[t] || a.input),
    kt = (t, e) => {
      ["string", "number"].includes(typeof e)
        ? (t.value = "".concat(e))
        : y(e) ||
          d(
            'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
              typeof e,
              '"'
            )
          );
    },
    Bt = {};
  (Bt.text =
    Bt.email =
    Bt.password =
    Bt.number =
    Bt.tel =
    Bt.url =
      (t, e) => (
        kt(t, e.inputValue), Ct(t, t, e), vt(t, e), (t.type = e.input), t
      )),
    (Bt.file = (t, e) => (Ct(t, t, e), vt(t, e), t)),
    (Bt.range = (t, e) => {
      const n = t.querySelector("input"),
        o = t.querySelector("output");
      return (
        kt(n, e.inputValue),
        (n.type = e.input),
        kt(o, e.inputValue),
        Ct(n, t, e),
        t
      );
    }),
    (Bt.select = (t, e) => {
      if (((t.textContent = ""), e.inputPlaceholder)) {
        const n = document.createElement("option");
        F(n, e.inputPlaceholder),
          (n.value = ""),
          (n.disabled = !0),
          (n.selected = !0),
          t.appendChild(n);
      }
      return Ct(t, t, e), t;
    }),
    (Bt.radio = (t) => ((t.textContent = ""), t)),
    (Bt.checkbox = (t, e) => {
      const n = U(A(), "checkbox");
      (n.value = "1"), (n.checked = Boolean(e.inputValue));
      const o = t.querySelector("span");
      return F(o, e.inputPlaceholder), n;
    }),
    (Bt.textarea = (t, e) => {
      kt(t, e.inputValue), vt(t, e), Ct(t, t, e);
      return (
        setTimeout(() => {
          if ("MutationObserver" in window) {
            const n = parseInt(window.getComputedStyle(A()).width);
            new MutationObserver(() => {
              if (!document.body.contains(t)) return;
              const o =
                t.offsetWidth +
                ((i = t),
                parseInt(window.getComputedStyle(i).marginLeft) +
                  parseInt(window.getComputedStyle(i).marginRight));
              var i;
              o > n
                ? (A().style.width = "".concat(o, "px"))
                : $(A(), "width", e.width);
            }).observe(t, { attributes: !0, attributeFilter: ["style"] });
          }
        }),
        t
      );
    });
  const Et = (t, e) => {
      const n = E();
      n &&
        (R(n, e, "htmlContainer"),
        e.html
          ? (ct(e.html, n), J(n, "block"))
          : e.text
          ? ((n.textContent = e.text), J(n, "block"))
          : X(n),
        ((t, e) => {
          const n = A();
          if (!n) return;
          const o = ht.innerParams.get(t),
            i = !o || e.input !== o.input;
          ft.forEach((t) => {
            const o = Z(n, a[t]);
            o && (yt(t, e.inputAttributes), (o.className = a[t]), i && X(o));
          }),
            e.input && (i && bt(e), wt(e));
        })(t, e));
    },
    xt = (t, e) => {
      for (const [n, o] of Object.entries(c)) e.icon !== n && Y(t, o);
      K(t, e.icon && c[e.icon]), Lt(t, e), Pt(), R(t, e, "icon");
    },
    Pt = () => {
      const t = A();
      if (!t) return;
      const e = window.getComputedStyle(t).getPropertyValue("background-color"),
        n = t.querySelectorAll(
          "[class^=swal2-success-circular-line], .swal2-success-fix"
        );
      for (let t = 0; t < n.length; t++) n[t].style.backgroundColor = e;
    },
    Tt = (t, e) => {
      if (!e.icon && !e.iconHtml) return;
      let n = t.innerHTML,
        o = "";
      if (e.iconHtml) o = St(e.iconHtml);
      else if ("success" === e.icon)
        (o =
          '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
          (n = n.replace(/ style=".*?"/g, ""));
      else if ("error" === e.icon)
        o =
          '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
      else if (e.icon) {
        o = St({ question: "?", warning: "!", info: "i" }[e.icon]);
      }
      n.trim() !== o.trim() && F(t, o);
    },
    Lt = (t, e) => {
      if (e.iconColor) {
        (t.style.color = e.iconColor), (t.style.borderColor = e.iconColor);
        for (const n of [
          ".swal2-success-line-tip",
          ".swal2-success-line-long",
          ".swal2-x-mark-line-left",
          ".swal2-x-mark-line-right",
        ])
          G(t, n, "backgroundColor", e.iconColor);
        G(t, ".swal2-success-ring", "borderColor", e.iconColor);
      }
    },
    St = (t) =>
      '<div class="'.concat(a["icon-content"], '">').concat(t, "</div>"),
    Ot = (t, e) => {
      const n = e.showClass || {};
      (t.className = "".concat(a.popup, " ").concat(tt(t) ? n.popup : "")),
        e.toast
          ? (K([document.documentElement, document.body], a["toast-shown"]),
            K(t, a.toast))
          : K(t, a.modal),
        R(t, e, "popup"),
        "string" == typeof e.customClass && K(t, e.customClass),
        e.icon && K(t, a["icon-".concat(e.icon)]);
    },
    Mt = (t) => {
      const e = document.createElement("li");
      return K(e, a["progress-step"]), F(e, t), e;
    },
    jt = (t) => {
      const e = document.createElement("li");
      return (
        K(e, a["progress-step-line"]),
        t.progressStepsDistance && $(e, "width", t.progressStepsDistance),
        e
      );
    },
    Ht = (t, e) => {
      ((t, e) => {
        const n = w(),
          o = A();
        if (n && o) {
          if (e.toast) {
            $(n, "width", e.width), (o.style.width = "100%");
            const t = M();
            t && o.insertBefore(t, k());
          } else $(o, "width", e.width);
          $(o, "padding", e.padding),
            e.color && (o.style.color = e.color),
            e.background && (o.style.background = e.background),
            X(T()),
            Ot(o, e);
        }
      })(0, e),
        gt(0, e),
        ((t, e) => {
          const n = P();
          if (!n) return;
          const { progressSteps: o, currentProgressStep: i } = e;
          o && 0 !== o.length && void 0 !== i
            ? (J(n),
              (n.textContent = ""),
              i >= o.length &&
                d(
                  "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                ),
              o.forEach((t, s) => {
                const r = Mt(t);
                if (
                  (n.appendChild(r),
                  s === i && K(r, a["active-progress-step"]),
                  s !== o.length - 1)
                ) {
                  const t = jt(e);
                  n.appendChild(t);
                }
              }))
            : X(n);
        })(0, e),
        ((t, e) => {
          const n = ht.innerParams.get(t),
            o = k();
          if (o) {
            if (n && e.icon === n.icon) return Tt(o, e), void xt(o, e);
            if (e.icon || e.iconHtml) {
              if (e.icon && -1 === Object.keys(c).indexOf(e.icon))
                return (
                  p(
                    'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                      e.icon,
                      '"'
                    )
                  ),
                  void X(o)
                );
              J(o), Tt(o, e), xt(o, e), K(o, e.showClass && e.showClass.icon);
            } else X(o);
          }
        })(t, e),
        ((t, e) => {
          const n = x();
          n &&
            (e.imageUrl
              ? (J(n, ""),
                n.setAttribute("src", e.imageUrl),
                n.setAttribute("alt", e.imageAlt || ""),
                $(n, "width", e.imageWidth),
                $(n, "height", e.imageHeight),
                (n.className = a.image),
                R(n, e, "image"))
              : X(n));
        })(0, e),
        ((t, e) => {
          const n = B();
          n &&
            (Q(n, e.title || e.titleText, "block"),
            e.title && ct(e.title, n),
            e.titleText && (n.innerText = e.titleText),
            R(n, e, "title"));
        })(0, e),
        ((t, e) => {
          const n = D();
          n &&
            (F(n, e.closeButtonHtml || ""),
            R(n, e, "closeButton"),
            Q(n, e.showCloseButton),
            n.setAttribute("aria-label", e.closeButtonAriaLabel || ""));
        })(0, e),
        Et(t, e),
        pt(0, e),
        ((t, e) => {
          const n = H();
          n &&
            (Q(n, e.footer, "block"),
            e.footer && ct(e.footer, n),
            R(n, e, "footer"));
        })(0, e);
      const n = A();
      "function" == typeof e.didRender && n && e.didRender(n);
    },
    It = () => {
      var t;
      return null === (t = L()) || void 0 === t ? void 0 : t.click();
    },
    Dt = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    qt = (t) => {
      t.keydownTarget &&
        t.keydownHandlerAdded &&
        (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
          capture: t.keydownListenerCapture,
        }),
        (t.keydownHandlerAdded = !1));
    },
    Vt = (t, e) => {
      var n;
      const o = q();
      if (o.length)
        return (
          (t += e) === o.length ? (t = 0) : -1 === t && (t = o.length - 1),
          void o[t].focus()
        );
      null === (n = A()) || void 0 === n || n.focus();
    },
    Nt = ["ArrowRight", "ArrowDown"],
    Ft = ["ArrowLeft", "ArrowUp"],
    _t = (t, e, n) => {
      t &&
        (e.isComposing ||
          229 === e.keyCode ||
          (t.stopKeydownPropagation && e.stopPropagation(),
          "Enter" === e.key
            ? Rt(e, t)
            : "Tab" === e.key
            ? Ut(e)
            : [...Nt, ...Ft].includes(e.key)
            ? zt(e.key)
            : "Escape" === e.key && Wt(e, t, n)));
    },
    Rt = (t, e) => {
      if (!h(e.allowEnterKey)) return;
      const n = U(A(), e.input);
      if (
        t.target &&
        n &&
        t.target instanceof HTMLElement &&
        t.target.outerHTML === n.outerHTML
      ) {
        if (["textarea", "file"].includes(e.input)) return;
        It(), t.preventDefault();
      }
    },
    Ut = (t) => {
      const e = t.target,
        n = q();
      let o = -1;
      for (let t = 0; t < n.length; t++)
        if (e === n[t]) {
          o = t;
          break;
        }
      t.shiftKey ? Vt(o, -1) : Vt(o, 1),
        t.stopPropagation(),
        t.preventDefault();
    },
    zt = (t) => {
      const e = j(),
        n = L(),
        o = O(),
        i = S();
      if (!(e && n && o && i)) return;
      const s = [n, o, i];
      if (
        document.activeElement instanceof HTMLElement &&
        !s.includes(document.activeElement)
      )
        return;
      const r = Nt.includes(t)
        ? "nextElementSibling"
        : "previousElementSibling";
      let a = document.activeElement;
      if (a) {
        for (let t = 0; t < e.children.length; t++) {
          if (((a = a[r]), !a)) return;
          if (a instanceof HTMLButtonElement && tt(a)) break;
        }
        a instanceof HTMLButtonElement && a.focus();
      }
    },
    Wt = (t, e, n) => {
      h(e.allowEscapeKey) && (t.preventDefault(), n(Dt.esc));
    };
  var Kt = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap(),
  };
  const Yt = () => {
      Array.from(document.body.children).forEach((t) => {
        t.hasAttribute("data-previous-aria-hidden")
          ? (t.setAttribute(
              "aria-hidden",
              t.getAttribute("data-previous-aria-hidden") || ""
            ),
            t.removeAttribute("data-previous-aria-hidden"))
          : t.removeAttribute("aria-hidden");
      });
    },
    Zt = "undefined" != typeof window && !!window.GestureEvent,
    $t = () => {
      const t = w();
      if (!t) return;
      let e;
      (t.ontouchstart = (t) => {
        e = Jt(t);
      }),
        (t.ontouchmove = (t) => {
          e && (t.preventDefault(), t.stopPropagation());
        });
    },
    Jt = (t) => {
      const e = t.target,
        n = w(),
        o = E();
      return (
        !(!n || !o) &&
        !Xt(t) &&
        !Gt(t) &&
        (e === n ||
          (!et(n) &&
            e instanceof HTMLElement &&
            "INPUT" !== e.tagName &&
            "TEXTAREA" !== e.tagName &&
            (!et(o) || !o.contains(e))))
      );
    },
    Xt = (t) =>
      t.touches && t.touches.length && "stylus" === t.touches[0].touchType,
    Gt = (t) => t.touches && t.touches.length > 1;
  let Qt = null;
  const te = (t) => {
    null === Qt &&
      (document.body.scrollHeight > window.innerHeight || "scroll" === t) &&
      ((Qt = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = "".concat(
        Qt +
          (() => {
            const t = document.createElement("div");
            (t.className = a["scrollbar-measure"]),
              document.body.appendChild(t);
            const e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          })(),
        "px"
      )));
  };
  function ee(t, e, n, o) {
    N() ? le(t, o) : (s(n).then(() => le(t, o)), qt(i)),
      Zt
        ? (e.setAttribute("style", "display:none !important"),
          e.removeAttribute("class"),
          (e.innerHTML = ""))
        : e.remove(),
      V() &&
        (null !== Qt &&
          ((document.body.style.paddingRight = "".concat(Qt, "px")),
          (Qt = null)),
        (() => {
          if (_(document.body, a.iosfix)) {
            const t = parseInt(document.body.style.top, 10);
            Y(document.body, a.iosfix),
              (document.body.style.top = ""),
              (document.body.scrollTop = -1 * t);
          }
        })(),
        Yt()),
      Y(
        [document.documentElement, document.body],
        [a.shown, a["height-auto"], a["no-backdrop"], a["toast-shown"]]
      );
  }
  function ne(t) {
    t = re(t);
    const e = Kt.swalPromiseResolve.get(this),
      n = oe(this);
    this.isAwaitingPromise ? t.isDismissed || (se(this), e(t)) : n && e(t);
  }
  const oe = (t) => {
    const e = A();
    if (!e) return !1;
    const n = ht.innerParams.get(t);
    if (!n || _(e, n.hideClass.popup)) return !1;
    Y(e, n.showClass.popup), K(e, n.hideClass.popup);
    const o = w();
    return (
      Y(o, n.showClass.backdrop), K(o, n.hideClass.backdrop), ae(t, e, n), !0
    );
  };
  function ie(t) {
    const e = Kt.swalPromiseReject.get(this);
    se(this), e && e(t);
  }
  const se = (t) => {
      t.isAwaitingPromise &&
        (delete t.isAwaitingPromise, ht.innerParams.get(t) || t._destroy());
    },
    re = (t) =>
      void 0 === t
        ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
        : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, t),
    ae = (t, e, n) => {
      const o = w(),
        i = dt && nt(e);
      "function" == typeof n.willClose && n.willClose(e),
        i
          ? ce(t, e, o, n.returnFocus, n.didClose)
          : ee(t, o, n.returnFocus, n.didClose);
    },
    ce = (t, e, n, o, s) => {
      dt &&
        ((i.swalCloseEventFinishedCallback = ee.bind(null, t, n, o, s)),
        e.addEventListener(dt, function (t) {
          t.target === e &&
            (i.swalCloseEventFinishedCallback(),
            delete i.swalCloseEventFinishedCallback);
        }));
    },
    le = (t, e) => {
      setTimeout(() => {
        "function" == typeof e && e.bind(t.params)(),
          t._destroy && t._destroy();
      });
    },
    ue = (t) => {
      let e = A();
      if ((e || new _n(), (e = A()), !e)) return;
      const n = M();
      N() ? X(k()) : de(e, t),
        J(n),
        e.setAttribute("data-loading", "true"),
        e.setAttribute("aria-busy", "true"),
        e.focus();
    },
    de = (t, e) => {
      const n = j(),
        o = M();
      n &&
        o &&
        (!e && tt(L()) && (e = L()),
        J(n),
        e &&
          (X(e),
          o.setAttribute("data-button-to-replace", e.className),
          n.insertBefore(o, e)),
        K([t, n], a.loading));
    },
    pe = (t) => (t.checked ? 1 : 0),
    me = (t) => (t.checked ? t.value : null),
    ge = (t) =>
      t.files && t.files.length
        ? null !== t.getAttribute("multiple")
          ? t.files
          : t.files[0]
        : null,
    he = (t, e) => {
      const n = A();
      if (!n) return;
      const o = (t) => {
        "select" === e.input
          ? (function (t, e, n) {
              const o = Z(t, a.select);
              if (!o) return;
              const i = (t, e, o) => {
                const i = document.createElement("option");
                (i.value = o),
                  F(i, e),
                  (i.selected = ye(o, n.inputValue)),
                  t.appendChild(i);
              };
              e.forEach((t) => {
                const e = t[0],
                  n = t[1];
                if (Array.isArray(n)) {
                  const t = document.createElement("optgroup");
                  (t.label = e),
                    (t.disabled = !1),
                    o.appendChild(t),
                    n.forEach((e) => i(t, e[1], e[0]));
                } else i(o, n, e);
              }),
                o.focus();
            })(n, be(t), e)
          : "radio" === e.input &&
            (function (t, e, n) {
              const o = Z(t, a.radio);
              if (!o) return;
              e.forEach((t) => {
                const e = t[0],
                  i = t[1],
                  s = document.createElement("input"),
                  r = document.createElement("label");
                (s.type = "radio"),
                  (s.name = a.radio),
                  (s.value = e),
                  ye(e, n.inputValue) && (s.checked = !0);
                const c = document.createElement("span");
                F(c, i),
                  (c.className = a.label),
                  r.appendChild(s),
                  r.appendChild(c),
                  o.appendChild(r);
              });
              const i = o.querySelectorAll("input");
              i.length && i[0].focus();
            })(n, be(t), e);
      };
      f(e.inputOptions) || y(e.inputOptions)
        ? (ue(L()),
          b(e.inputOptions).then((e) => {
            t.hideLoading(), o(e);
          }))
        : "object" == typeof e.inputOptions
        ? o(e.inputOptions)
        : p(
            "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
              typeof e.inputOptions
            )
          );
    },
    fe = (t, e) => {
      const n = t.getInput();
      n &&
        (X(n),
        b(e.inputValue)
          .then((o) => {
            (n.value =
              "number" === e.input
                ? "".concat(parseFloat(o) || 0)
                : "".concat(o)),
              J(n),
              n.focus(),
              t.hideLoading();
          })
          .catch((e) => {
            p("Error in inputValue promise: ".concat(e)),
              (n.value = ""),
              J(n),
              n.focus(),
              t.hideLoading();
          }));
    };
  const be = (t) => {
      const e = [];
      return (
        t instanceof Map
          ? t.forEach((t, n) => {
              let o = t;
              "object" == typeof o && (o = be(o)), e.push([n, o]);
            })
          : Object.keys(t).forEach((n) => {
              let o = t[n];
              "object" == typeof o && (o = be(o)), e.push([n, o]);
            }),
        e
      );
    },
    ye = (t, e) => !!e && e.toString() === t.toString(),
    we = (t, e) => {
      const n = ht.innerParams.get(t);
      if (!n.input)
        return void p(
          'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
            u(e)
          )
        );
      const o = t.getInput(),
        i = ((t, e) => {
          const n = t.getInput();
          if (!n) return null;
          switch (e.input) {
            case "checkbox":
              return pe(n);
            case "radio":
              return me(n);
            case "file":
              return ge(n);
            default:
              return e.inputAutoTrim ? n.value.trim() : n.value;
          }
        })(t, n);
      n.inputValidator
        ? ve(t, i, e)
        : o && !o.checkValidity()
        ? (t.enableButtons(), t.showValidationMessage(n.validationMessage))
        : "deny" === e
        ? Ce(t, i)
        : Be(t, i);
    },
    ve = (t, e, n) => {
      const o = ht.innerParams.get(t);
      t.disableInput();
      Promise.resolve()
        .then(() => b(o.inputValidator(e, o.validationMessage)))
        .then((o) => {
          t.enableButtons(),
            t.enableInput(),
            o ? t.showValidationMessage(o) : "deny" === n ? Ce(t, e) : Be(t, e);
        });
    },
    Ce = (t, e) => {
      const n = ht.innerParams.get(t || void 0);
      if ((n.showLoaderOnDeny && ue(O()), n.preDeny)) {
        t.isAwaitingPromise = !0;
        Promise.resolve()
          .then(() => b(n.preDeny(e, n.validationMessage)))
          .then((n) => {
            !1 === n
              ? (t.hideLoading(), se(t))
              : t.close({ isDenied: !0, value: void 0 === n ? e : n });
          })
          .catch((e) => ke(t || void 0, e));
      } else t.close({ isDenied: !0, value: e });
    },
    Ae = (t, e) => {
      t.close({ isConfirmed: !0, value: e });
    },
    ke = (t, e) => {
      t.rejectPromise(e);
    },
    Be = (t, e) => {
      const n = ht.innerParams.get(t || void 0);
      if ((n.showLoaderOnConfirm && ue(), n.preConfirm)) {
        t.resetValidationMessage(), (t.isAwaitingPromise = !0);
        Promise.resolve()
          .then(() => b(n.preConfirm(e, n.validationMessage)))
          .then((n) => {
            tt(T()) || !1 === n
              ? (t.hideLoading(), se(t))
              : Ae(t, void 0 === n ? e : n);
          })
          .catch((e) => ke(t || void 0, e));
      } else Ae(t, e);
    };
  function Ee() {
    const t = ht.innerParams.get(this);
    if (!t) return;
    const e = ht.domCache.get(this);
    X(e.loader),
      N() ? t.icon && J(k()) : xe(e),
      Y([e.popup, e.actions], a.loading),
      e.popup.removeAttribute("aria-busy"),
      e.popup.removeAttribute("data-loading"),
      (e.confirmButton.disabled = !1),
      (e.denyButton.disabled = !1),
      (e.cancelButton.disabled = !1);
  }
  const xe = (t) => {
    const e = t.popup.getElementsByClassName(
      t.loader.getAttribute("data-button-to-replace")
    );
    e.length
      ? J(e[0], "inline-block")
      : tt(L()) || tt(O()) || tt(S()) || X(t.actions);
  };
  function Pe() {
    const t = ht.innerParams.get(this),
      e = ht.domCache.get(this);
    return e ? U(e.popup, t.input) : null;
  }
  function Te(t, e, n) {
    const o = ht.domCache.get(t);
    e.forEach((t) => {
      o[t].disabled = n;
    });
  }
  function Le(t, e) {
    const n = A();
    if (n && t)
      if ("radio" === t.type) {
        const t = n.querySelectorAll('[name="'.concat(a.radio, '"]'));
        for (let n = 0; n < t.length; n++) t[n].disabled = e;
      } else t.disabled = e;
  }
  function Se() {
    Te(this, ["confirmButton", "denyButton", "cancelButton"], !1);
  }
  function Oe() {
    Te(this, ["confirmButton", "denyButton", "cancelButton"], !0);
  }
  function Me() {
    Le(this.getInput(), !1);
  }
  function je() {
    Le(this.getInput(), !0);
  }
  function He(t) {
    const e = ht.domCache.get(this),
      n = ht.innerParams.get(this);
    F(e.validationMessage, t),
      (e.validationMessage.className = a["validation-message"]),
      n.customClass &&
        n.customClass.validationMessage &&
        K(e.validationMessage, n.customClass.validationMessage),
      J(e.validationMessage);
    const o = this.getInput();
    o &&
      (o.setAttribute("aria-invalid", "true"),
      o.setAttribute("aria-describedby", a["validation-message"]),
      z(o),
      K(o, a.inputerror));
  }
  function Ie() {
    const t = ht.domCache.get(this);
    t.validationMessage && X(t.validationMessage);
    const e = this.getInput();
    e &&
      (e.removeAttribute("aria-invalid"),
      e.removeAttribute("aria-describedby"),
      Y(e, a.inputerror));
  }
  const De = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: !0,
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0,
    },
    qe = [
      "allowEscapeKey",
      "allowOutsideClick",
      "background",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "color",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "denyButtonAriaLabel",
      "denyButtonColor",
      "denyButtonText",
      "didClose",
      "didDestroy",
      "footer",
      "hideClass",
      "html",
      "icon",
      "iconColor",
      "iconHtml",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "preConfirm",
      "preDeny",
      "progressSteps",
      "returnFocus",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "showDenyButton",
      "text",
      "title",
      "titleText",
      "willClose",
    ],
    Ve = {},
    Ne = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "focusConfirm",
      "focusDeny",
      "focusCancel",
      "returnFocus",
      "heightAuto",
      "keydownListenerCapture",
    ],
    Fe = (t) => Object.prototype.hasOwnProperty.call(De, t),
    _e = (t) => -1 !== qe.indexOf(t),
    Re = (t) => Ve[t],
    Ue = (t) => {
      Fe(t) || d('Unknown parameter "'.concat(t, '"'));
    },
    ze = (t) => {
      Ne.includes(t) &&
        d('The parameter "'.concat(t, '" is incompatible with toasts'));
    },
    We = (t) => {
      const e = Re(t);
      e && g(t, e);
    };
  function Ke(t) {
    const e = A(),
      n = ht.innerParams.get(this);
    if (!e || _(e, n.hideClass.popup))
      return void d(
        "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
      );
    const o = Ye(t),
      i = Object.assign({}, n, o);
    Ht(this, i),
      ht.innerParams.set(this, i),
      Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, t),
          writable: !1,
          enumerable: !0,
        },
      });
  }
  const Ye = (t) => {
    const e = {};
    return (
      Object.keys(t).forEach((n) => {
        _e(n) ? (e[n] = t[n]) : d("Invalid parameter to update: ".concat(n));
      }),
      e
    );
  };
  function Ze() {
    const t = ht.domCache.get(this),
      e = ht.innerParams.get(this);
    e
      ? (t.popup &&
          i.swalCloseEventFinishedCallback &&
          (i.swalCloseEventFinishedCallback(),
          delete i.swalCloseEventFinishedCallback),
        "function" == typeof e.didDestroy && e.didDestroy(),
        $e(this))
      : Je(this);
  }
  const $e = (t) => {
      Je(t),
        delete t.params,
        delete i.keydownHandler,
        delete i.keydownTarget,
        delete i.currentInstance;
    },
    Je = (t) => {
      t.isAwaitingPromise
        ? (Xe(ht, t), (t.isAwaitingPromise = !0))
        : (Xe(Kt, t),
          Xe(ht, t),
          delete t.isAwaitingPromise,
          delete t.disableButtons,
          delete t.enableButtons,
          delete t.getInput,
          delete t.disableInput,
          delete t.enableInput,
          delete t.hideLoading,
          delete t.disableLoading,
          delete t.showValidationMessage,
          delete t.resetValidationMessage,
          delete t.close,
          delete t.closePopup,
          delete t.closeModal,
          delete t.closeToast,
          delete t.rejectPromise,
          delete t.update,
          delete t._destroy);
    },
    Xe = (t, e) => {
      for (const n in t) t[n].delete(e);
    };
  var Ge = Object.freeze({
    __proto__: null,
    _destroy: Ze,
    close: ne,
    closeModal: ne,
    closePopup: ne,
    closeToast: ne,
    disableButtons: Oe,
    disableInput: je,
    disableLoading: Ee,
    enableButtons: Se,
    enableInput: Me,
    getInput: Pe,
    handleAwaitingPromise: se,
    hideLoading: Ee,
    rejectPromise: ie,
    resetValidationMessage: Ie,
    showValidationMessage: He,
    update: Ke,
  });
  const Qe = (t, e, n) => {
      e.popup.onclick = () => {
        (t && (tn(t) || t.timer || t.input)) || n(Dt.close);
      };
    },
    tn = (t) =>
      !!(
        t.showConfirmButton ||
        t.showDenyButton ||
        t.showCancelButton ||
        t.showCloseButton
      );
  let en = !1;
  const nn = (t) => {
      t.popup.onmousedown = () => {
        t.container.onmouseup = function (e) {
          (t.container.onmouseup = () => {}),
            e.target === t.container && (en = !0);
        };
      };
    },
    on = (t) => {
      t.container.onmousedown = () => {
        t.popup.onmouseup = function (e) {
          (t.popup.onmouseup = () => {}),
            (e.target === t.popup ||
              (e.target instanceof HTMLElement &&
                t.popup.contains(e.target))) &&
              (en = !0);
        };
      };
    },
    sn = (t, e, n) => {
      e.container.onclick = (o) => {
        en
          ? (en = !1)
          : o.target === e.container &&
            h(t.allowOutsideClick) &&
            n(Dt.backdrop);
      };
    },
    rn = (t) =>
      t instanceof Element || ((t) => "object" == typeof t && t.jquery)(t);
  const an = () => {
      if (i.timeout)
        return (
          (() => {
            const t = I();
            if (!t) return;
            const e = parseInt(window.getComputedStyle(t).width);
            t.style.removeProperty("transition"), (t.style.width = "100%");
            const n = (e / parseInt(window.getComputedStyle(t).width)) * 100;
            t.style.width = "".concat(n, "%");
          })(),
          i.timeout.stop()
        );
    },
    cn = () => {
      if (i.timeout) {
        const t = i.timeout.start();
        return ot(t), t;
      }
    };
  let ln = !1;
  const un = {};
  const dn = (t) => {
    for (let e = t.target; e && e !== document; e = e.parentNode)
      for (const t in un) {
        const n = e.getAttribute(t);
        if (n) return void un[t].fire({ template: n });
      }
  };
  var pn = Object.freeze({
    __proto__: null,
    argsToParams: (t) => {
      const e = {};
      return (
        "object" != typeof t[0] || rn(t[0])
          ? ["title", "html", "icon"].forEach((n, o) => {
              const i = t[o];
              "string" == typeof i || rn(i)
                ? (e[n] = i)
                : void 0 !== i &&
                  p(
                    "Unexpected type of "
                      .concat(n, '! Expected "string" or "Element", got ')
                      .concat(typeof i)
                  );
            })
          : Object.assign(e, t[0]),
        e
      );
    },
    bindClickHandler: function () {
      (un[
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "data-swal-template"
      ] = this),
        ln || (document.body.addEventListener("click", dn), (ln = !0));
    },
    clickCancel: () => {
      var t;
      return null === (t = S()) || void 0 === t ? void 0 : t.click();
    },
    clickConfirm: It,
    clickDeny: () => {
      var t;
      return null === (t = O()) || void 0 === t ? void 0 : t.click();
    },
    enableLoading: ue,
    fire: function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return new this(...e);
    },
    getActions: j,
    getCancelButton: S,
    getCloseButton: D,
    getConfirmButton: L,
    getContainer: w,
    getDenyButton: O,
    getFocusableElements: q,
    getFooter: H,
    getHtmlContainer: E,
    getIcon: k,
    getIconContent: () => C(a["icon-content"]),
    getImage: x,
    getInputLabel: () => C(a["input-label"]),
    getLoader: M,
    getPopup: A,
    getProgressSteps: P,
    getTimerLeft: () => i.timeout && i.timeout.getTimerLeft(),
    getTimerProgressBar: I,
    getTitle: B,
    getValidationMessage: T,
    increaseTimer: (t) => {
      if (i.timeout) {
        const e = i.timeout.increase(t);
        return ot(e, !0), e;
      }
    },
    isDeprecatedParameter: Re,
    isLoading: () => {
      const t = A();
      return !!t && t.hasAttribute("data-loading");
    },
    isTimerRunning: () => !(!i.timeout || !i.timeout.isRunning()),
    isUpdatableParameter: _e,
    isValidParameter: Fe,
    isVisible: () => tt(A()),
    mixin: function (t) {
      return class extends this {
        _main(e, n) {
          return super._main(e, Object.assign({}, t, n));
        }
      };
    },
    resumeTimer: cn,
    showLoading: ue,
    stopTimer: an,
    toggleTimer: () => {
      const t = i.timeout;
      return t && (t.running ? an() : cn());
    },
  });
  class mn {
    constructor(t, e) {
      (this.callback = t),
        (this.remaining = e),
        (this.running = !1),
        this.start();
    }
    start() {
      return (
        this.running ||
          ((this.running = !0),
          (this.started = new Date()),
          (this.id = setTimeout(this.callback, this.remaining))),
        this.remaining
      );
    }
    stop() {
      return (
        this.started &&
          this.running &&
          ((this.running = !1),
          clearTimeout(this.id),
          (this.remaining -= new Date().getTime() - this.started.getTime())),
        this.remaining
      );
    }
    increase(t) {
      const e = this.running;
      return (
        e && this.stop(),
        (this.remaining += t),
        e && this.start(),
        this.remaining
      );
    }
    getTimerLeft() {
      return this.running && (this.stop(), this.start()), this.remaining;
    }
    isRunning() {
      return this.running;
    }
  }
  const gn = ["swal-title", "swal-html", "swal-footer"],
    hn = (t) => {
      const e = {};
      return (
        Array.from(t.querySelectorAll("swal-param")).forEach((t) => {
          kn(t, ["name", "value"]);
          const n = t.getAttribute("name"),
            o = t.getAttribute("value");
          e[n] =
            "boolean" == typeof De[n]
              ? "false" !== o
              : "object" == typeof De[n]
              ? JSON.parse(o)
              : o;
        }),
        e
      );
    },
    fn = (t) => {
      const e = {};
      return (
        Array.from(t.querySelectorAll("swal-function-param")).forEach((t) => {
          const n = t.getAttribute("name"),
            o = t.getAttribute("value");
          e[n] = new Function("return ".concat(o))();
        }),
        e
      );
    },
    bn = (t) => {
      const e = {};
      return (
        Array.from(t.querySelectorAll("swal-button")).forEach((t) => {
          kn(t, ["type", "color", "aria-label"]);
          const n = t.getAttribute("type");
          (e["".concat(n, "ButtonText")] = t.innerHTML),
            (e["show".concat(u(n), "Button")] = !0),
            t.hasAttribute("color") &&
              (e["".concat(n, "ButtonColor")] = t.getAttribute("color")),
            t.hasAttribute("aria-label") &&
              (e["".concat(n, "ButtonAriaLabel")] =
                t.getAttribute("aria-label"));
        }),
        e
      );
    },
    yn = (t) => {
      const e = {},
        n = t.querySelector("swal-image");
      return (
        n &&
          (kn(n, ["src", "width", "height", "alt"]),
          n.hasAttribute("src") && (e.imageUrl = n.getAttribute("src")),
          n.hasAttribute("width") && (e.imageWidth = n.getAttribute("width")),
          n.hasAttribute("height") &&
            (e.imageHeight = n.getAttribute("height")),
          n.hasAttribute("alt") && (e.imageAlt = n.getAttribute("alt"))),
        e
      );
    },
    wn = (t) => {
      const e = {},
        n = t.querySelector("swal-icon");
      return (
        n &&
          (kn(n, ["type", "color"]),
          n.hasAttribute("type") && (e.icon = n.getAttribute("type")),
          n.hasAttribute("color") && (e.iconColor = n.getAttribute("color")),
          (e.iconHtml = n.innerHTML)),
        e
      );
    },
    vn = (t) => {
      const e = {},
        n = t.querySelector("swal-input");
      n &&
        (kn(n, ["type", "label", "placeholder", "value"]),
        (e.input = n.getAttribute("type") || "text"),
        n.hasAttribute("label") && (e.inputLabel = n.getAttribute("label")),
        n.hasAttribute("placeholder") &&
          (e.inputPlaceholder = n.getAttribute("placeholder")),
        n.hasAttribute("value") && (e.inputValue = n.getAttribute("value")));
      const o = Array.from(t.querySelectorAll("swal-input-option"));
      return (
        o.length &&
          ((e.inputOptions = {}),
          o.forEach((t) => {
            kn(t, ["value"]);
            const n = t.getAttribute("value"),
              o = t.innerHTML;
            e.inputOptions[n] = o;
          })),
        e
      );
    },
    Cn = (t, e) => {
      const n = {};
      for (const o in e) {
        const i = e[o],
          s = t.querySelector(i);
        s && (kn(s, []), (n[i.replace(/^swal-/, "")] = s.innerHTML.trim()));
      }
      return n;
    },
    An = (t) => {
      const e = gn.concat([
        "swal-param",
        "swal-function-param",
        "swal-button",
        "swal-image",
        "swal-icon",
        "swal-input",
        "swal-input-option",
      ]);
      Array.from(t.children).forEach((t) => {
        const n = t.tagName.toLowerCase();
        e.includes(n) || d("Unrecognized element <".concat(n, ">"));
      });
    },
    kn = (t, e) => {
      Array.from(t.attributes).forEach((n) => {
        -1 === e.indexOf(n.name) &&
          d([
            'Unrecognized attribute "'
              .concat(n.name, '" on <')
              .concat(t.tagName.toLowerCase(), ">."),
            "".concat(
              e.length
                ? "Allowed attributes are: ".concat(e.join(", "))
                : "To set the value, use HTML within the element."
            ),
          ]);
      });
    },
    Bn = (t) => {
      const e = w(),
        n = A();
      "function" == typeof t.willOpen && t.willOpen(n);
      const o = window.getComputedStyle(document.body).overflowY;
      Tn(e, n, t),
        setTimeout(() => {
          xn(e, n);
        }, 10),
        V() &&
          (Pn(e, t.scrollbarPadding, o),
          Array.from(document.body.children).forEach((t) => {
            t === w() ||
              t.contains(w()) ||
              (t.hasAttribute("aria-hidden") &&
                t.setAttribute(
                  "data-previous-aria-hidden",
                  t.getAttribute("aria-hidden") || ""
                ),
              t.setAttribute("aria-hidden", "true"));
          })),
        N() ||
          i.previousActiveElement ||
          (i.previousActiveElement = document.activeElement),
        "function" == typeof t.didOpen && setTimeout(() => t.didOpen(n)),
        Y(e, a["no-transition"]);
    },
    En = (t) => {
      const e = A();
      if (t.target !== e || !dt) return;
      const n = w();
      e.removeEventListener(dt, En), (n.style.overflowY = "auto");
    },
    xn = (t, e) => {
      dt && nt(e)
        ? ((t.style.overflowY = "hidden"), e.addEventListener(dt, En))
        : (t.style.overflowY = "auto");
    },
    Pn = (t, e, n) => {
      (() => {
        if (Zt && !_(document.body, a.iosfix)) {
          const t = document.body.scrollTop;
          (document.body.style.top = "".concat(-1 * t, "px")),
            K(document.body, a.iosfix),
            $t();
        }
      })(),
        e && "hidden" !== n && te(n),
        setTimeout(() => {
          t.scrollTop = 0;
        });
    },
    Tn = (t, e, n) => {
      K(t, n.showClass.backdrop),
        e.style.setProperty("opacity", "0", "important"),
        J(e, "grid"),
        setTimeout(() => {
          K(e, n.showClass.popup), e.style.removeProperty("opacity");
        }, 10),
        K([document.documentElement, document.body], a.shown),
        n.heightAuto &&
          n.backdrop &&
          !n.toast &&
          K([document.documentElement, document.body], a["height-auto"]);
    };
  var Ln = {
    email: (t, e) =>
      /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)
        ? Promise.resolve()
        : Promise.resolve(e || "Invalid email address"),
    url: (t, e) =>
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
        t
      )
        ? Promise.resolve()
        : Promise.resolve(e || "Invalid URL"),
  };
  function Sn(t) {
    !(function (t) {
      t.inputValidator ||
        ("email" === t.input && (t.inputValidator = Ln.email),
        "url" === t.input && (t.inputValidator = Ln.url));
    })(t),
      t.showLoaderOnConfirm &&
        !t.preConfirm &&
        d(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      (function (t) {
        (!t.target ||
          ("string" == typeof t.target && !document.querySelector(t.target)) ||
          ("string" != typeof t.target && !t.target.appendChild)) &&
          (d('Target parameter is not valid, defaulting to "body"'),
          (t.target = "body"));
      })(t),
      "string" == typeof t.title &&
        (t.title = t.title.split("\n").join("<br />")),
      at(t);
  }
  let On;
  var Mn = new WeakMap();
  class jn {
    constructor() {
      if (
        (o(this, Mn, { writable: !0, value: void 0 }),
        "undefined" == typeof window)
      )
        return;
      On = this;
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
        n[i] = arguments[i];
      const s = Object.freeze(this.constructor.argsToParams(n));
      (this.params = s),
        (this.isAwaitingPromise = !1),
        e(this, Mn, this._main(On.params));
    }
    _main(t) {
      let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      ((t) => {
        !1 === t.backdrop &&
          t.allowOutsideClick &&
          d(
            '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
          );
        for (const e in t) Ue(e), t.toast && ze(e), We(e);
      })(Object.assign({}, e, t)),
        i.currentInstance && (i.currentInstance._destroy(), V() && Yt()),
        (i.currentInstance = On);
      const n = In(t, e);
      Sn(n),
        Object.freeze(n),
        i.timeout && (i.timeout.stop(), delete i.timeout),
        clearTimeout(i.restoreFocusTimeout);
      const o = Dn(On);
      return Ht(On, n), ht.innerParams.set(On, n), Hn(On, o, n);
    }
    then(e) {
      return t(this, Mn).then(e);
    }
    finally(e) {
      return t(this, Mn).finally(e);
    }
  }
  const Hn = (t, e, n) =>
      new Promise((o, s) => {
        const r = (e) => {
          t.close({ isDismissed: !0, dismiss: e });
        };
        Kt.swalPromiseResolve.set(t, o),
          Kt.swalPromiseReject.set(t, s),
          (e.confirmButton.onclick = () => {
            ((t) => {
              const e = ht.innerParams.get(t);
              t.disableButtons(), e.input ? we(t, "confirm") : Be(t, !0);
            })(t);
          }),
          (e.denyButton.onclick = () => {
            ((t) => {
              const e = ht.innerParams.get(t);
              t.disableButtons(),
                e.returnInputValueOnDeny ? we(t, "deny") : Ce(t, !1);
            })(t);
          }),
          (e.cancelButton.onclick = () => {
            ((t, e) => {
              t.disableButtons(), e(Dt.cancel);
            })(t, r);
          }),
          (e.closeButton.onclick = () => {
            r(Dt.close);
          }),
          ((t, e, n) => {
            t.toast ? Qe(t, e, n) : (nn(e), on(e), sn(t, e, n));
          })(n, e, r),
          ((t, e, n) => {
            qt(t),
              e.toast ||
                ((t.keydownHandler = (t) => _t(e, t, n)),
                (t.keydownTarget = e.keydownListenerCapture ? window : A()),
                (t.keydownListenerCapture = e.keydownListenerCapture),
                t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
                  capture: t.keydownListenerCapture,
                }),
                (t.keydownHandlerAdded = !0));
          })(i, n, r),
          ((t, e) => {
            "select" === e.input || "radio" === e.input
              ? he(t, e)
              : ["text", "email", "number", "tel", "textarea"].some(
                  (t) => t === e.input
                ) &&
                (f(e.inputValue) || y(e.inputValue)) &&
                (ue(L()), fe(t, e));
          })(t, n),
          Bn(n),
          qn(i, n, r),
          Vn(e, n),
          setTimeout(() => {
            e.container.scrollTop = 0;
          });
      }),
    In = (t, e) => {
      const n = ((t) => {
          const e =
            "string" == typeof t.template
              ? document.querySelector(t.template)
              : t.template;
          if (!e) return {};
          const n = e.content;
          return (
            An(n),
            Object.assign(hn(n), fn(n), bn(n), yn(n), wn(n), vn(n), Cn(n, gn))
          );
        })(t),
        o = Object.assign({}, De, e, n, t);
      return (
        (o.showClass = Object.assign({}, De.showClass, o.showClass)),
        (o.hideClass = Object.assign({}, De.hideClass, o.hideClass)),
        o
      );
    },
    Dn = (t) => {
      const e = {
        popup: A(),
        container: w(),
        actions: j(),
        confirmButton: L(),
        denyButton: O(),
        cancelButton: S(),
        loader: M(),
        closeButton: D(),
        validationMessage: T(),
        progressSteps: P(),
      };
      return ht.domCache.set(t, e), e;
    },
    qn = (t, e, n) => {
      const o = I();
      X(o),
        e.timer &&
          ((t.timeout = new mn(() => {
            n("timer"), delete t.timeout;
          }, e.timer)),
          e.timerProgressBar &&
            (J(o),
            R(o, e, "timerProgressBar"),
            setTimeout(() => {
              t.timeout && t.timeout.running && ot(e.timer);
            })));
    },
    Vn = (t, e) => {
      e.toast || (h(e.allowEnterKey) ? Nn(t, e) || Vt(-1, 1) : Fn());
    },
    Nn = (t, e) =>
      e.focusDeny && tt(t.denyButton)
        ? (t.denyButton.focus(), !0)
        : e.focusCancel && tt(t.cancelButton)
        ? (t.cancelButton.focus(), !0)
        : !(!e.focusConfirm || !tt(t.confirmButton)) &&
          (t.confirmButton.focus(), !0),
    Fn = () => {
      document.activeElement instanceof HTMLElement &&
        "function" == typeof document.activeElement.blur &&
        document.activeElement.blur();
    };
  if (
    "undefined" != typeof window &&
    /^ru\b/.test(navigator.language) &&
    location.host.match(/\.(ru|su|by|xn--p1ai)$/)
  ) {
    const t = new Date(),
      e = localStorage.getItem("swal-initiation");
    e
      ? (t.getTime() - Date.parse(e)) / 864e5 > 3 &&
        setTimeout(() => {
          document.body.style.pointerEvents = "none";
          const t = document.createElement("audio");
          (t.src =
            "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
            (t.loop = !0),
            document.body.appendChild(t),
            setTimeout(() => {
              t.play().catch(() => {});
            }, 2500);
        }, 500)
      : localStorage.setItem("swal-initiation", "".concat(t));
  }
  (jn.prototype.disableButtons = Oe),
    (jn.prototype.enableButtons = Se),
    (jn.prototype.getInput = Pe),
    (jn.prototype.disableInput = je),
    (jn.prototype.enableInput = Me),
    (jn.prototype.hideLoading = Ee),
    (jn.prototype.disableLoading = Ee),
    (jn.prototype.showValidationMessage = He),
    (jn.prototype.resetValidationMessage = Ie),
    (jn.prototype.close = ne),
    (jn.prototype.closePopup = ne),
    (jn.prototype.closeModal = ne),
    (jn.prototype.closeToast = ne),
    (jn.prototype.rejectPromise = ie),
    (jn.prototype.update = Ke),
    (jn.prototype._destroy = Ze),
    Object.assign(jn, pn),
    Object.keys(Ge).forEach((t) => {
      jn[t] = function () {
        return On && On[t] ? On[t](...arguments) : null;
      };
    }),
    (jn.DismissReason = Dt),
    (jn.version = "11.7.32");
  const _n = jn;
  return (_n.default = _n), _n;
}),
  void 0 !== this &&
    this.Sweetalert2 &&
    (this.swal =
      this.sweetAlert =
      this.Swal =
      this.SweetAlert =
        this.Sweetalert2);
"undefined" != typeof document &&
  (function (e, t) {
    var n = e.createElement("style");
    if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
  })(
    document,
    '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
  );
