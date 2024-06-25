import { defineComponent as h, openBlock as r, createElementBlock as o, createElementVNode as t, createTextVNode as s, toDisplayString as i, createCommentVNode as a, Fragment as d, renderList as u, renderSlot as _, pushScopeId as p, popScopeId as m } from "vue";
const g = (n) => (p("data-v-5c74f6fe"), n = n(), m(), n), y = { class: "credits--container" }, k = {
  key: 0,
  class: "credits--list"
}, b = ["href"], w = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, v = ["href"], F = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, q = ["href"], C = {
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
}, T = /* @__PURE__ */ g(() => /* @__PURE__ */ t("li", { class: "credits--list" }, " Donations to Peter Dostoevsky in Eve Online will be turned into lossmails. ", -1)), V = { class: "credits--list" }, $ = {
  href: "https://www.eveonline.com/signup?invc=5d52b821-87c0-4c81-bd0a-2cd88e9001b6",
  target: "_blank",
  rel: "noopener noreferrer"
}, L = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, P = {
  href: "https://www.buymeacoffee.com/shanebelldev",
  target: "_blank",
  rel: "noopener noreferrer"
}, j = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, z = {
  key: 5,
  class: "credits--list"
}, A = {
  href: "https://www.buymeacoffee.com/shanebelldev",
  target: "_blank",
  rel: "noopener noreferrer"
}, G = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, H = {
  href: "https://github.com/dotfortun/wormroller/labels/bug",
  target: "_blank"
}, J = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, K = /* @__PURE__ */ h({
  __name: "Credits",
  props: {
    creators: {},
    eveCredits: { type: Boolean },
    useFa: { type: Boolean },
    realName: { type: Boolean }
  },
  setup(n) {
    return (e, c) => (r(), o("footer", y, [
      t("div", null, [
        t("ul", null, [
          e.creators && e.creators.length > 1 ? (r(), o("li", k, [
            s(" Created by "),
            t("a", {
              href: e.creators[0].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              s(i(e.creators[0].name), 1),
              e.useFa ? (r(), o("i", w)) : a("", !0)
            ], 8, b),
            (r(!0), o(d, null, u(e.creators.slice(1, e.creators.length - 1), (l) => (r(), o(d, null, [
              s(", "),
              t("a", {
                href: l.href,
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                s(i(l.name) + " ", 1),
                e.useFa ? (r(), o("i", F)) : a("", !0)
              ], 8, v)
            ], 64))), 256)),
            s(", & "),
            t("a", {
              href: e.creators[e.creators.length - 1].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              s(i(e.creators[e.creators.length - 1].name), 1),
              e.useFa ? (r(), o("i", C)) : a("", !0)
            ], 8, q),
            s(". ")
          ])) : e.creators && e.creators.length === 1 ? (r(), o("li", B, [
            s(" Created by "),
            t("a", {
              href: e.creators[0].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              s(i(e.creators[0].name), 1),
              e.useFa ? (r(), o("i", I)) : a("", !0)
            ], 8, S),
            s(". ")
          ])) : (r(), o("li", N, [
            s(" Created by "),
            t("a", E, [
              s(i(e.realName ? "Shane B." : "dotfortun"), 1),
              e.useFa ? (r(), o("i", D)) : a("", !0)
            ])
          ])),
          e.$slots.extra ? (r(), o("li", O, [
            _(e.$slots, "extra", {}, void 0, !0)
          ])) : a("", !0),
          e.eveCredits ? (r(), o(d, { key: 4 }, [
            T,
            t("li", V, [
              t("a", $, [
                s(" Try Eve Online"),
                e.useFa ? (r(), o("i", L)) : a("", !0)
              ]),
              s(" or "),
              t("a", P, [
                s("buy me a coffee"),
                e.useFa ? (r(), o("i", j)) : a("", !0)
              ])
            ])
          ], 64)) : (r(), o("li", z, [
            s(" If you like this, consider "),
            t("a", A, [
              s("buying me a coffee"),
              e.useFa ? (r(), o("i", G)) : a("", !0)
            ])
          ]))
        ])
      ]),
      t("div", null, [
        t("a", H, [
          s(" Found a bug? Tell us here!"),
          e.useFa ? (r(), o("i", J)) : a("", !0)
        ])
      ])
    ]));
  }
}), M = (n, e) => {
  const c = n.__vccOpts || n;
  for (const [l, f] of e)
    c[l] = f;
  return c;
}, R = /* @__PURE__ */ M(K, [["__scopeId", "data-v-5c74f6fe"]]);
export {
  R as Credits
};
