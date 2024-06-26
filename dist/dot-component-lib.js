import { defineComponent as h, openBlock as r, createElementBlock as o, createElementVNode as t, createTextVNode as s, toDisplayString as i, createCommentVNode as a, Fragment as d, renderList as u, renderSlot as _, pushScopeId as p, popScopeId as m } from "vue";
import './index.css';const g = (n) => (p("data-v-f22fc999"), n = n(), m(), n), y = { class: "credits--container" }, k = {
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
}, T = /* @__PURE__ */ g(() => /* @__PURE__ */ t("li", { class: "credits--list" }, " Donations to Peter Dostoevsky in Eve Online will be turned into lossmails. ", -1)), V = { class: "credits--list" }, U = {
  href: "https://www.eveonline.com/signup?invc=5d52b821-87c0-4c81-bd0a-2cd88e9001b6",
  target: "_blank",
  rel: "noopener noreferrer"
}, $ = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, L = {
  href: "https://www.buymeacoffee.com/shanebelldev",
  target: "_blank",
  rel: "noopener noreferrer"
}, P = {
  key: 0,
  class: "fa-solid fa-arrow-up-right-from-square"
}, j = {
  key: 5,
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
    bugUrl: {}
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
              t("a", U, [
                s(" Try Eve Online"),
                e.useFa ? (r(), o("i", $)) : a("", !0)
              ]),
              s(" or "),
              t("a", L, [
                s("buy me a coffee"),
                e.useFa ? (r(), o("i", P)) : a("", !0)
              ])
            ])
          ], 64)) : (r(), o("li", j, [
            s(" If you like this, consider "),
            t("a", z, [
              s("buying me a coffee"),
              e.useFa ? (r(), o("i", A)) : a("", !0)
            ])
          ]))
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
  for (const [l, f] of e)
    c[l] = f;
  return c;
}, Q = /* @__PURE__ */ K(J, [["__scopeId", "data-v-f22fc999"]]);
export {
  Q as Credits
};
