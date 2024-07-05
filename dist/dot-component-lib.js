import { defineComponent as h, openBlock as r, createElementBlock as o, createElementVNode as t, createTextVNode as s, toDisplayString as l, createCommentVNode as a, Fragment as i, renderList as u, renderSlot as p, pushScopeId as _, popScopeId as m } from "vue";
import './index.css';const y = (n) => (_("data-v-4e1198cb"), n = n(), m(), n), g = { class: "credits--container" }, k = {
  key: 0,
  class: "credits--list"
}, b = ["href"], w = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, v = ["href"], C = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, F = ["href"], q = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, B = {
  key: 1,
  class: "credits--list"
}, S = ["href"], I = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, N = {
  key: 2,
  class: "credits--list"
}, E = {
  href: "https://github.com/dotfortun",
  target: "_blank",
  rel: "noopener noreferrer"
}, D = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, O = {
  key: 3,
  class: "credits--list"
}, T = /* @__PURE__ */ y(() => /* @__PURE__ */ t("li", { class: "credits--list" }, " Donations to Peter Dostoevsky in Eve Online will be turned into lossmails. ", -1)), V = { class: "credits--list" }, U = {
  href: "https://www.eveonline.com/signup?invc=5d52b821-87c0-4c81-bd0a-2cd88e9001b6",
  target: "_blank",
  rel: "noopener noreferrer"
}, $ = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, j = {
  href: "https://www.buymeacoffee.com/shanebelldev",
  target: "_blank",
  rel: "noopener noreferrer"
}, L = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, P = {
  key: 0,
  class: "credits--list"
}, z = {
  href: "https://www.buymeacoffee.com/shanebelldev",
  target: "_blank",
  rel: "noopener noreferrer"
}, A = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, G = ["href"], H = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, J = /* @__PURE__ */ h({
  __name: "Credits",
  props: {
    creators: {},
    eveCredits: { type: Boolean },
    useFa: { type: Boolean },
    realName: { type: Boolean },
    bugUrl: {},
    noCoffee: { type: Boolean }
  },
  setup(n) {
    return (e, c) => (r(), o("footer", g, [
      t("div", null, [
        t("ul", null, [
          e.creators && e.creators.length > 1 ? (r(), o("li", k, [
            s(" Created by "),
            t("a", {
              href: e.creators[0].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              s(l(e.creators[0].name), 1),
              e.useFa ? (r(), o("i", w)) : a("", !0)
            ], 8, b),
            (r(!0), o(i, null, u(e.creators.slice(1, e.creators.length - 1), (f) => (r(), o(i, null, [
              s(", "),
              t("a", {
                href: f.href,
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                s(l(f.name) + " ", 1),
                e.useFa ? (r(), o("i", C)) : a("", !0)
              ], 8, v)
            ], 64))), 256)),
            s(", & "),
            t("a", {
              href: e.creators[e.creators.length - 1].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              s(l(e.creators[e.creators.length - 1].name), 1),
              e.useFa ? (r(), o("i", q)) : a("", !0)
            ], 8, F),
            s(". ")
          ])) : e.creators && e.creators.length === 1 ? (r(), o("li", B, [
            s(" Created by "),
            t("a", {
              href: e.creators[0].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              s(l(e.creators[0].name), 1),
              e.useFa ? (r(), o("i", I)) : a("", !0)
            ], 8, S),
            s(". ")
          ])) : (r(), o("li", N, [
            s(" Created by "),
            t("a", E, [
              s(l(e.realName ? "Shane B." : "dotfortun"), 1),
              e.useFa ? (r(), o("i", D)) : a("", !0)
            ])
          ])),
          e.$slots.extra ? (r(), o("li", O, [
            p(e.$slots, "extra", {}, void 0, !0)
          ])) : a("", !0),
          e.eveCredits ? (r(), o(i, { key: 4 }, [
            T,
            t("li", V, [
              t("a", U, [
                s(" Try Eve Online"),
                e.useFa ? (r(), o("i", $)) : a("", !0)
              ]),
              e.noCoffee ? a("", !0) : (r(), o(i, { key: 0 }, [
                s(" or "),
                t("a", j, [
                  s("buy me a coffee"),
                  e.useFa ? (r(), o("i", L)) : a("", !0)
                ])
              ], 64))
            ])
          ], 64)) : (r(), o(i, { key: 5 }, [
            e.noCoffee ? a("", !0) : (r(), o("li", P, [
              s(" If you like my projects, consider "),
              t("a", z, [
                s("buying me a coffee"),
                e.useFa ? (r(), o("i", A)) : a("", !0)
              ])
            ]))
          ], 64))
        ])
      ]),
      t("div", null, [
        t("a", {
          href: e.bugUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        }, [
          s(" Found a bug? Tell us here!"),
          e.useFa ? (r(), o("i", H)) : a("", !0)
        ], 8, G)
      ])
    ]));
  }
}), K = (n, e) => {
  const c = n.__vccOpts || n;
  for (const [f, d] of e)
    c[f] = d;
  return c;
}, Q = /* @__PURE__ */ K(J, [["__scopeId", "data-v-4e1198cb"]]);
export {
  Q as Credits
};
