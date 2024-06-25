import { defineComponent as d, openBlock as o, createElementBlock as s, createElementVNode as t, createTextVNode as r, toDisplayString as i, createCommentVNode as a, Fragment as f, renderList as c, renderSlot as _, pushScopeId as p, popScopeId as m } from "vue";
const g = (n) => (p("data-v-78935a13"), n = n(), m(), n), k = { class: "credits--container" }, y = { key: 0 }, b = ["href"], w = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, v = ["href"], F = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, q = ["href"], C = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, S = { key: 1 }, B = ["href"], I = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, E = { key: 2 }, D = {
  href: "https://github.com/dotfortun",
  target: "_blank",
  rel: "noopener noreferrer"
}, N = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, O = /* @__PURE__ */ g(() => /* @__PURE__ */ t("li", null, " Donations to Peter Dostoevsky in Eve Online will be turned into lossmails. ", -1)), T = {
  href: "https://www.eveonline.com/signup?invc=5d52b821-87c0-4c81-bd0a-2cd88e9001b6",
  target: "_blank",
  rel: "noopener noreferrer"
}, V = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, L = {
  href: "https://www.buymeacoffee.com/shanebelldev",
  target: "_blank",
  rel: "noopener noreferrer"
}, P = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, $ = { key: 4 }, j = {
  href: "https://www.buymeacoffee.com/shanebelldev",
  target: "_blank",
  rel: "noopener noreferrer"
}, z = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, A = {
  href: "https://github.com/dotfortun/wormroller/labels/bug",
  target: "_blank"
}, G = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, H = /* @__PURE__ */ d({
  __name: "Credits",
  props: {
    creators: {},
    eveCredits: { type: Boolean },
    useFa: { type: Boolean }
  },
  setup(n) {
    return (e, h) => (o(), s("footer", k, [
      t("div", null, [
        t("ul", null, [
          e.creators && e.creators.length > 1 ? (o(), s("li", y, [
            r(" Created by "),
            t("a", {
              href: e.creators[0].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              r(i(e.creators[0].name), 1),
              e.useFa ? (o(), s("i", w)) : a("", !0)
            ], 8, b),
            (o(!0), s(f, null, c(e.creators.slice(1, e.creators.length - 1), (l) => (o(), s(f, null, [
              r(", "),
              t("a", {
                href: l.href,
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                r(i(l.name) + " ", 1),
                e.useFa ? (o(), s("i", F)) : a("", !0)
              ], 8, v)
            ], 64))), 256)),
            r(", & "),
            t("a", {
              href: e.creators[e.creators.length - 1].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              r(i(e.creators[e.creators.length - 1].name), 1),
              e.useFa ? (o(), s("i", C)) : a("", !0)
            ], 8, q),
            r(". ")
          ])) : e.creators && e.creators.length === 1 ? (o(), s("li", S, [
            r(" Created by "),
            t("a", {
              href: e.creators[0].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              r(i(e.creators[0].name), 1),
              e.useFa ? (o(), s("i", I)) : a("", !0)
            ], 8, B),
            r(". ")
          ])) : (o(), s("li", E, [
            r(" Created by "),
            t("a", D, [
              r("Shane B."),
              e.useFa ? (o(), s("i", N)) : a("", !0)
            ])
          ])),
          _(e.$slots, "extra", {}, void 0, !0),
          e.eveCredits ? (o(), s(f, { key: 3 }, [
            O,
            t("li", null, [
              t("a", T, [
                r(" Try Eve Online"),
                e.useFa ? (o(), s("i", V)) : a("", !0)
              ]),
              r(" or "),
              t("a", L, [
                r("buy me a coffee"),
                e.useFa ? (o(), s("i", P)) : a("", !0)
              ])
            ])
          ], 64)) : (o(), s("li", $, [
            r(" If you like this, consider "),
            t("a", j, [
              r("buying me a coffee"),
              e.useFa ? (o(), s("i", z)) : a("", !0)
            ])
          ]))
        ])
      ]),
      t("div", null, [
        t("a", A, [
          r(" Found a bug? Tell us here!"),
          e.useFa ? (o(), s("i", G)) : a("", !0)
        ])
      ])
    ]));
  }
}), J = (n, e) => {
  const h = n.__vccOpts || n;
  for (const [l, u] of e)
    h[l] = u;
  return h;
}, M = /* @__PURE__ */ J(H, [["__scopeId", "data-v-78935a13"]]);
export {
  M as Credits
};
