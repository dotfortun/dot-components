import { defineComponent as f, openBlock as o, createElementBlock as s, createElementVNode as t, createTextVNode as r, toDisplayString as l, createCommentVNode as a, Fragment as d, renderList as u, renderSlot as _, pushScopeId as p, popScopeId as m } from "vue";
const g = (n) => (p("data-v-1e460336"), n = n(), m(), n), k = { class: "credits--container" }, y = {
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
}, S = {
  key: 1,
  class: "credits--list"
}, B = ["href"], I = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, E = {
  key: 2,
  class: "credits--list"
}, D = {
  href: "https://github.com/dotfortun",
  target: "_blank",
  rel: "noopener noreferrer"
}, N = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, O = /* @__PURE__ */ g(() => /* @__PURE__ */ t("li", { class: "credits--list" }, " Donations to Peter Dostoevsky in Eve Online will be turned into lossmails. ", -1)), T = { class: "credits--list" }, V = {
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
}, $ = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, j = {
  key: 4,
  class: "credits--list"
}, z = {
  href: "https://www.buymeacoffee.com/shanebelldev",
  target: "_blank",
  rel: "noopener noreferrer"
}, A = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, G = {
  href: "https://github.com/dotfortun/wormroller/labels/bug",
  target: "_blank"
}, H = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, J = /* @__PURE__ */ f({
  __name: "Credits",
  props: {
    creators: {},
    eveCredits: { type: Boolean },
    useFa: { type: Boolean }
  },
  setup(n) {
    return (e, c) => (o(), s("footer", k, [
      t("div", null, [
        t("ul", null, [
          e.creators && e.creators.length > 1 ? (o(), s("li", y, [
            r(" Created by "),
            t("a", {
              href: e.creators[0].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              r(l(e.creators[0].name), 1),
              e.useFa ? (o(), s("i", w)) : a("", !0)
            ], 8, b),
            (o(!0), s(d, null, u(e.creators.slice(1, e.creators.length - 1), (i) => (o(), s(d, null, [
              r(", "),
              t("a", {
                href: i.href,
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                r(l(i.name) + " ", 1),
                e.useFa ? (o(), s("i", F)) : a("", !0)
              ], 8, v)
            ], 64))), 256)),
            r(", & "),
            t("a", {
              href: e.creators[e.creators.length - 1].href,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              r(l(e.creators[e.creators.length - 1].name), 1),
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
              r(l(e.creators[0].name), 1),
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
          e.eveCredits ? (o(), s(d, { key: 3 }, [
            O,
            t("li", T, [
              t("a", V, [
                r(" Try Eve Online"),
                e.useFa ? (o(), s("i", L)) : a("", !0)
              ]),
              r(" or "),
              t("a", P, [
                r("buy me a coffee"),
                e.useFa ? (o(), s("i", $)) : a("", !0)
              ])
            ])
          ], 64)) : (o(), s("li", j, [
            r(" If you like this, consider "),
            t("a", z, [
              r("buying me a coffee"),
              e.useFa ? (o(), s("i", A)) : a("", !0)
            ])
          ]))
        ])
      ]),
      t("div", null, [
        t("a", G, [
          r(" Found a bug? Tell us here!"),
          e.useFa ? (o(), s("i", H)) : a("", !0)
        ])
      ])
    ]));
  }
}), K = (n, e) => {
  const c = n.__vccOpts || n;
  for (const [i, h] of e)
    c[i] = h;
  return c;
}, Q = /* @__PURE__ */ K(J, [["__scopeId", "data-v-1e460336"]]);
export {
  Q as Credits
};
