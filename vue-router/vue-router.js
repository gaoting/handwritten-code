let Vue = null;

class HistoryRoute {
  constructor() {
    this.current = null;
  }
}

class VueRouter {
  constructor(options) {
    this.mode = options.mode || "hash";
    this.routes = options.routes || [];

    this.routesMap = this.createMap(this.routes);
    console.log(this.routesMap);

    this.history = new HistoryRoute();
    this.init();
  }

  init() {
    if (this.mode === "hash") {
      if (location.hash === "") {
        location.hash = "/";
      }
      window.addEventListener("load", () => {
        this.history.current = location.hash.slice(1);
      });
      window.addEventListener("hashchange", () => {
        this.history.current = location.hash.slice(1);
      });
    } else {
      if (location.pathname === "") {
        location.pathname = "/";
      }
      window.addEventListener("load", () => {
        this.history.current = location.pathname;
      });
      window.addEventListener("popState", () => {
        this.history.current = location.pathname;
      });
    }
  }

  createMap(routes) {
    return routes.reduce((pre, cur) => {
      pre[cur.path] = cur.component;
      return pre;
    }, {});
  }
}

VueRouter.install = function (v) {
  Vue = v;
  console.log(v);

  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) {
        this._root = this;
        this._router = this.$options.router;
        Vue.util.defineReactive(this, "xxx", this._router.history);
      } else {
        this._root = this.$parent && this.$parent._root;
      }

      Object.defineProperty(this, "$router", {
        get() {
          return this._root._router;
        },
      });

      Object.defineProperty(this, "$route", {
        get() {
          return this._root._router.history.current;
        },
      });
    },
  });

  Vue.component("router-link", {
    props: {
      to: String,
    },
    render(h) {
      let mode = this._self._root._router.mode;
      let to = mode === "hash" ? "#" + this.to : this.to;
      return h("a", { attrs: { href: to } }, this.$slots.default);
      // return h("a", {}, "index");
    },
  });

  Vue.component("router-view", {
    render(h) {
      let current = this._self._root._routr.history.current;
      let routeMap = this._self._root._router.routesMap;
      return h(routeMap[current]);
      // return h("h1", {}, "index view");
    },
  });
};

export default VueRouter;
