var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a2, b) {
  return a2 != a2 ? b == b : a2 !== b || (a2 && typeof a2 === "object" || typeof a2 === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component6) {
  current_component = component6;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function validate_component(component6, name) {
  if (!component6 || !component6.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component6;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css5) => css5.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index6 = 0;
      while (index6 < str.length) {
        var eqIdx = str.indexOf("=", index6);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index6);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index6 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index6, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index6 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e3
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// .svelte-kit/output/server/entries/fallbacks/layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/layout.svelte.js"() {
    init_chunks();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/layout.svelte-33842551.js";
    imports = ["_app/immutable/components/layout.svelte-33842551.js", "_app/immutable/chunks/index-0808d0cc.js"];
    stylesheets = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>

<pre>${escape($page.error.message)}</pre>



${$page.error.frame ? `<pre>${escape($page.error.frame)}</pre>` : ``}
${$page.error.stack ? `<pre>${escape($page.error.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-0dae3069.js";
    imports2 = ["_app/immutable/components/error.svelte-0dae3069.js", "_app/immutable/chunks/index-0808d0cc.js", "_app/immutable/chunks/singletons-91e5a31a.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/chunks/Footer.js
var css$3, MobileNav, css$2, Header, css$1, Banner, css, Footer;
var init_Footer = __esm({
  ".svelte-kit/output/server/chunks/Footer.js"() {
    init_chunks();
    css$3 = {
      code: '.backdrop.svelte-dv4t3j.svelte-dv4t3j{width:100%;height:100%;position:fixed;background:rgba(0, 0, 0, 0.5);z-index:9}@keyframes svelte-dv4t3j-slidedown{0%{transform:translate(0, -100%)}50%{transform:translate(0, 5%)}80%{transform:translate(0, -1%)}100%{transform:translate(0, 0%)}}.modal.svelte-dv4t3j.svelte-dv4t3j{padding-inline:40px;padding-top:7.6rem;padding-bottom:1.5rem;width:100%;position:absolute;background:#DAD3C2;text-align:center;justify-content:center;border-bottom:2px solid #0f0e17;animation:svelte-dv4t3j-slidedown 0.5s normal}.modal.svelte-dv4t3j img.svelte-dv4t3j{max-width:20px}.modal.svelte-dv4t3j a.svelte-dv4t3j{scroll-behavior:smooth;text-decoration:none;color:#0f0e17}.modal.svelte-dv4t3j .inline-icon-text.svelte-dv4t3j{margin-inline:auto;display:flex;align-items:center;gap:8px}.modal.svelte-dv4t3j .inline-icon-text h4.svelte-dv4t3j{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-size:1.2rem;font-weight:700;padding-top:4px;margin-block:1rem}@media screen and (max-width: 820px){.modal.svelte-dv4t3j.svelte-dv4t3j{padding-top:6.5rem;padding-bottom:1.6rem}}@media screen and (max-width: 570px){.modal.svelte-dv4t3j.svelte-dv4t3j{padding-top:6rem;padding-bottom:1.2rem}.modal.svelte-dv4t3j .inline-icon-text h4.svelte-dv4t3j{font-size:1rem}}',
      map: null
    };
    MobileNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { showNav = false } = $$props;
      if ($$props.showNav === void 0 && $$bindings.showNav && showNav !== void 0)
        $$bindings.showNav(showNav);
      $$result.css.add(css$3);
      return `${showNav ? `
    <div class="${"backdrop svelte-dv4t3j"}"><div class="${"modal svelte-dv4t3j"}"><a href="${"/#feature-anchor"}" class="${"svelte-dv4t3j"}"><div class="${"inline-icon-text svelte-dv4t3j"}"><img src="${"./icons/sparkles-filled.svg"}" alt="${"sparkles icon"}" class="${"svelte-dv4t3j"}">
                    <h4 class="${"svelte-dv4t3j"}">Features</h4></div></a>
            <a href="${"/how-intentio-works"}" class="${"svelte-dv4t3j"}"><div class="${"inline-icon-text svelte-dv4t3j"}"><img src="${"./icons/shapes-filled.svg"}" alt="${"shapes icon"}" class="${"svelte-dv4t3j"}">
                    <h4 class="${"svelte-dv4t3j"}">How Intentio Works?</h4></div></a>
            <a href="${"/intent-questions"}" class="${"svelte-dv4t3j"}"><div class="${"inline-icon-text svelte-dv4t3j"}"><img src="${"./icons/puzzle-filled.svg"}" alt="${"puzzle icon"}" class="${"svelte-dv4t3j"}">
                    <h4 class="${"svelte-dv4t3j"}">Intent Questions</h4></div></a></div></div>` : ``}`;
    });
    css$2 = {
      code: '@media screen and (max-width: 570px){header.svelte-19q522i .content.svelte-19q522i{padding-inline:24px}}@media screen and (max-width: 820px){h1.svelte-19q522i.svelte-19q522i{margin-block:0.8rem}.nav.svelte-19q522i a.svelte-19q522i{display:none}.nav.svelte-19q522i .menu.svelte-19q522i{display:flex;scale:1.5}}.menu.svelte-19q522i.svelte-19q522i{display:none}header.svelte-19q522i.svelte-19q522i{position:fixed;z-index:10;top:0;width:100%;border-bottom:2px solid #0f0e17;background-color:#DAD3C2}.content.svelte-19q522i.svelte-19q522i{background:#DAD3C2;max-width:948px;margin-inline:auto;padding-top:8px;padding-inline:40px;display:flex;justify-content:space-between;align-items:center}.logo.svelte-19q522i.svelte-19q522i{max-width:147px}.nav.svelte-19q522i.svelte-19q522i{display:flex;gap:24px;margin-top:-8px}.nav.svelte-19q522i img.svelte-19q522i{max-width:20px}.nav.svelte-19q522i a.svelte-19q522i{scroll-behavior:smooth}h4.svelte-19q522i.svelte-19q522i{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-size:17px;font-weight:700;padding-top:4px}a.svelte-19q522i.svelte-19q522i{color:#0f0e17;text-decoration:none}a.svelte-19q522i .svelte-19q522i:hover{text-decoration:underline}.inline-icon-text.svelte-19q522i.svelte-19q522i{padding-inline:1rem;display:flex;align-items:center;gap:8px}',
      map: null
    };
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let showNav = false;
      $$result.css.add(css$2);
      return `${validate_component(MobileNav, "MobileNav").$$render($$result, { showNav }, {}, {})}

<header class="${"svelte-19q522i"}"><div class="${"content svelte-19q522i"}"><a href="${"/"}" class="${"svelte-19q522i"}"><h1 class="${"svelte-19q522i"}"><img class="${"logo svelte-19q522i"}" src="${"./intentio-logo.svg"}" alt="${"intentio-logo"}"></h1></a>
        <div class="${"nav svelte-19q522i"}">
            <img class="${"menu svelte-19q522i"}" src="${"./icons/menu.svg"}" alt="${"menu icon"}">
            <a href="${"/#feature-anchor"}" class="${"svelte-19q522i"}"><div class="${"inline-icon-text svelte-19q522i"}"><img src="${"./icons/sparkles-filled.svg"}" alt="${"sparkles icon"}" class="${"svelte-19q522i"}">
                    <h4 class="${"svelte-19q522i"}">Features</h4></div></a>
            <a href="${"/how-intentio-works"}" class="${"svelte-19q522i"}"><div class="${"inline-icon-text svelte-19q522i"}"><img src="${"./icons/shapes-filled.svg"}" alt="${"shapes icon"}" class="${"svelte-19q522i"}">
                    <h4 class="${"svelte-19q522i"}">How Intentio Works?</h4></div></a>
            <a href="${"/intent-questions"}" class="${"svelte-19q522i"}"><div class="${"inline-icon-text svelte-19q522i"}"><img src="${"./icons/puzzle-filled.svg"}" alt="${"puzzle icon"}" class="${"svelte-19q522i"}">
                    <h4 class="${"svelte-19q522i"}">Intent Questions</h4></div></a></div></div>
</header>`;
    });
    css$1 = {
      code: '@media screen and (max-width: 570px){#title.svelte-1iwenvc.svelte-1iwenvc{font-size:1.5rem}}section.svelte-1iwenvc.svelte-1iwenvc{position:relative;height:344px;background-color:#0F0E17}section.svelte-1iwenvc .lines-1.svelte-1iwenvc{position:absolute;max-width:18rem;width:30vw;right:13%}section.svelte-1iwenvc .lines-2.svelte-1iwenvc{position:absolute;max-width:18rem;width:35vw;left:12%;bottom:0}.vertical-center.svelte-1iwenvc.svelte-1iwenvc{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.center.svelte-1iwenvc.svelte-1iwenvc{text-align:center;width:80vw;max-width:40rem}.center.svelte-1iwenvc .mark.svelte-1iwenvc{width:4.4rem;height:4rem}.center.svelte-1iwenvc h1.svelte-1iwenvc{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:900;font-size:2rem;color:#F9F4EF}.center.svelte-1iwenvc button.svelte-1iwenvc{font-family:"Bespoke Slab", sans-serif;font-weight:bold;padding-top:1rem;padding-bottom:0.8rem;padding-left:1.25rem;padding-right:1.4rem;margin-top:0.4rem;background-color:#F9F4EF;border:0px;border-radius:0.75rem;cursor:pointer;color:#0F0E17;font-size:16px}.center.svelte-1iwenvc button .logo-chrome.svelte-1iwenvc{width:1.5rem;height:1.5rem;vertical-align:middle;margin-right:0.75rem;margin-bottom:4px}',
      map: null
    };
    Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$1);
      return `${$$result.head += `<!-- HEAD_svelte-tfmquu_START --><link href="${"https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-tfmquu_END -->`, ""}

<section class="${"svelte-1iwenvc"}"><div class="${"vertical-center svelte-1iwenvc"}"><div class="${"center svelte-1iwenvc"}"><img class="${"mark svelte-1iwenvc"}" src="${"./intentio-mark-white.svg"}" alt="${"intentio white logo"}">
            <h1 id="${"title"}" class="${"svelte-1iwenvc"}">It&#39;s Time to Be Intentional</h1>
            <button class="${"svelte-1iwenvc"}"><img class="${"logo-chrome svelte-1iwenvc"}" src="${"./icons/logo-chrome.svg"}" alt="${"chrome logo"}">Add to Chrome</button></div></div>

    <img class="${"lines-1 svelte-1iwenvc"}" src="${"./img/lines-1.svg"}" alt="${"lines illustration background"}">
    <img class="${"lines-2 svelte-1iwenvc"}" src="${"./img/lines-2.svg"}" alt="${"lines illustration background"}">

</section>`;
    });
    css = {
      code: 'footer.svelte-6eq6me.svelte-6eq6me{margin-inline:auto;padding-bottom:40px;padding-top:36px;padding-inline:40px;max-width:948px;display:flex;justify-content:space-between;align-items:center}.logo.svelte-6eq6me.svelte-6eq6me{margin-top:0;padding-top:0.2rem}img.svelte-6eq6me.svelte-6eq6me{max-width:147px}.copyright.svelte-6eq6me.svelte-6eq6me{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:0.9rem;font-weight:500;color:#8A826F;display:inline-block;margin-bottom:12px}.right-footer.svelte-6eq6me p.svelte-6eq6me{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:0.9rem;font-weight:500;margin:0;text-align:end}.right-footer.svelte-6eq6me .second-p.svelte-6eq6me{margin-top:0.5rem}.right-footer.svelte-6eq6me .information.svelte-6eq6me{line-height:1rem}.right-footer.svelte-6eq6me .information #one-liner.svelte-6eq6me{display:flex;align-items:center;gap:4px;justify-content:end}.right-footer.svelte-6eq6me .socials.svelte-6eq6me{display:flex;gap:16px;align-items:center;justify-content:end}.right-footer.svelte-6eq6me .socials img.svelte-6eq6me{width:24px;height:24px}.mobile-view.svelte-6eq6me.svelte-6eq6me{display:none}.rainbow.svelte-6eq6me.svelte-6eq6me{animation:svelte-6eq6me-color-change 5s infinite;font-weight:bold}@keyframes svelte-6eq6me-color-change{0%{color:#9A6547}25%{color:#30bd6f}50%{color:#8C64FF}75%{color:#BE4949}100%{color:#9A6547}}@media screen and (max-width: 730px){footer.svelte-6eq6me.svelte-6eq6me{display:block;margin-inline:auto;padding-bottom:40px;padding-top:3rem;padding-inline:40px;max-width:948px;justify-content:center;text-align:center}img.svelte-6eq6me.svelte-6eq6me{max-width:147px}.copyright.svelte-6eq6me.svelte-6eq6me{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:1rem;font-weight:500;color:#8A826F;display:inline-block;margin-top:auto}.desktop-view.svelte-6eq6me.svelte-6eq6me{display:none}.mobile-view.svelte-6eq6me.svelte-6eq6me{margin-top:3rem;display:block}.right-footer.svelte-6eq6me p.svelte-6eq6me{text-align:center;font-size:1rem}.right-footer.svelte-6eq6me .second-p.svelte-6eq6me{margin-top:0.8rem}.right-footer.svelte-6eq6me .information.svelte-6eq6me{line-height:1.7rem}.right-footer.svelte-6eq6me .information #one-liner.svelte-6eq6me{justify-content:center}.right-footer.svelte-6eq6me .socials.svelte-6eq6me{margin-top:0.5rem;gap:1.5rem;justify-content:center;align-items:center}.right-footer.svelte-6eq6me .socials img.svelte-6eq6me{width:2rem;height:2rem}}',
      map: null
    };
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<footer class="${"svelte-6eq6me"}"><div class="${"left-footer desktop-view svelte-6eq6me"}"><h1 class="${"logo svelte-6eq6me"}"><img src="${"./intentio-logo.svg"}" alt="${"intentio-logo"}" class="${"svelte-6eq6me"}"></h1>
        <div class="${"copyright svelte-6eq6me"}">\xA9 2022 Intentio. All Rights Reserved.</div></div>
    <div class="${"right-footer svelte-6eq6me"}"><div class="${"information svelte-6eq6me"}"><div id="${"one-liner"}" class="${"svelte-6eq6me"}">
                <p class="${"svelte-6eq6me"}">Made with \u2615 and a hint of procrastination by <span class="${"rainbow svelte-6eq6me"}">Gil</span></p></div>
            <p class="${"svelte-6eq6me"}"></p>
            <p class="${"second-p svelte-6eq6me"}">Have suggestions, comments, or questions? Reach out!</p></div>
        \xA0
        <div class="${"socials svelte-6eq6me"}"><img src="${"./icons/logo-linkedin.svg"}" alt="${"linkedin logo"}" class="${"svelte-6eq6me"}">
            
            <img src="${"./icons/mail.svg"}" alt="${"mail icon"}" class="${"svelte-6eq6me"}"></div></div> 
    <div class="${"left-footer mobile-view svelte-6eq6me"}"><h1 class="${"logo svelte-6eq6me"}"><img src="${"./intentio-logo.svg"}" alt="${"intentio-logo"}" class="${"svelte-6eq6me"}"></h1>
        <div class="${"copyright svelte-6eq6me"}">\xA9 2022 Intentio. All Rights Reserved.</div></div>
</footer>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var css2, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_Footer();
    css2 = {
      code: '@font-face{font-family:"Sofia Pro";font-style:normal;font-weight:100;src:local("Sofia Pro"), url(./fonts/SofiaProRegular.otf) format("otf")}@font-face{font-family:"Sofia Pro";font-style:normal;font-weight:500;src:local("Sofia Pro"), url(./fonts/SofiaProMedium.otf) format("otf")}@font-face{font-family:"SofiaProSemiBold";font-style:normal;font-weight:normal;src:local("SofiaProSemiBold"), url(./fonts/SofiaProSemiBold.otf) format("otf")}@font-face{font-family:"Sofia Pro", sans-serif;font-style:normal;font-weight:bold;src:local("Sofia Pro"), url(./fonts/SofiaProBold.otf) format("otf")}.lines-1.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;left:0;top:6.3rem;z-index:-1}.lines-2.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;transform:scaleX(-1);top:36.25rem;right:0;z-index:-1}.lines-3.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;transform:scaleY(-1);top:53rem;left:0}.lines-4.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;right:0;top:93rem;z-index:-1}.lines-5.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;left:0;transform:scaleX(-1);top:136rem;z-index:-1}#question-button.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;left:50%;top:51%;transform:translate(-50%, -50%);font-family:"Bespoke Slab", sans-serif;font-weight:bold;padding-top:1rem;padding-bottom:0.8rem;padding-left:1.25rem;padding-right:1.4rem;background-color:#0f0e17;border:0px;border-radius:0.75rem;cursor:pointer;color:#F9F4EF;font-size:16px;box-shadow:0px 0px 24px rgba(15, 14, 23, 0.32);white-space:nowrap}#question-button.svelte-1xtn8g8 .logo-chrome.svelte-1xtn8g8.svelte-1xtn8g8{width:1.5rem;height:1.5rem;vertical-align:middle;margin-right:0.75rem;margin-bottom:4px}.title-container.svelte-1xtn8g8 #text1.svelte-1xtn8g8.svelte-1xtn8g8{margin-bottom:0px;width:18.5rem}.title-container.svelte-1xtn8g8 .one-liner-text-icon.svelte-1xtn8g8.svelte-1xtn8g8{display:flex;gap:0.5rem;align-items:center;margin-bottom:0.5rem}.title-container.svelte-1xtn8g8 .one-liner-text-icon #text2.svelte-1xtn8g8.svelte-1xtn8g8{margin-bottom:0}.title-container.svelte-1xtn8g8 .one-liner-text-icon .arrow-forward.svelte-1xtn8g8.svelte-1xtn8g8{width:2.25rem;height:2.25rem;margin-bottom:0.2rem}.feature-gap-1.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{gap:1.125rem}.feature-gap-2.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{gap:69px}.feature-section.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{display:flex;align-items:center;margin-bottom:4rem}.feature-section.svelte-1xtn8g8 .feature-content.svelte-1xtn8g8.svelte-1xtn8g8{width:408px}.feature-section.svelte-1xtn8g8 .feature-content .icons.svelte-1xtn8g8.svelte-1xtn8g8{display:flex;gap:1rem;margin-bottom:1rem}.feature-section.svelte-1xtn8g8 .feature-content .icons img.svelte-1xtn8g8.svelte-1xtn8g8{width:2rem;height:2rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container h3.svelte-1xtn8g8.svelte-1xtn8g8{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-weight:700;font-size:2rem;line-height:2.25rem;margin-top:0;margin-bottom:0.8rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container p.svelte-1xtn8g8.svelte-1xtn8g8{font-size:1rem;font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;line-height:1.5rem;margin:0}.feature-section.svelte-1xtn8g8 .feature-content .text-container-h-1.svelte-1xtn8g8.svelte-1xtn8g8{width:18.5rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-1.svelte-1xtn8g8.svelte-1xtn8g8{width:21.6rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-2.svelte-1xtn8g8.svelte-1xtn8g8{width:21.6rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-h-3.svelte-1xtn8g8.svelte-1xtn8g8{width:17rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-3-1.svelte-1xtn8g8.svelte-1xtn8g8{width:20rem;margin-bottom:0.5rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-3-2.svelte-1xtn8g8.svelte-1xtn8g8{width:20rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-h-4.svelte-1xtn8g8.svelte-1xtn8g8{width:17rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-4.svelte-1xtn8g8.svelte-1xtn8g8{width:20rem;margin-bottom:0.5rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-h-5.svelte-1xtn8g8.svelte-1xtn8g8{width:18.43rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-5.svelte-1xtn8g8.svelte-1xtn8g8{width:21.875rem}.feature-section.svelte-1xtn8g8 .img-container.svelte-1xtn8g8.svelte-1xtn8g8{background-color:#E7E1D2;border-radius:1rem;border:2px solid #0f0e17}.feature-section.svelte-1xtn8g8 .img-container-right.svelte-1xtn8g8.svelte-1xtn8g8{box-shadow:8px 8px #0f0e17;position:relative}.feature-section.svelte-1xtn8g8 .img-container-left.svelte-1xtn8g8.svelte-1xtn8g8{box-shadow:-8px 8px #0f0e17;position:relative}.feature-section.svelte-1xtn8g8 .img-container-center.svelte-1xtn8g8.svelte-1xtn8g8{display:none}.feature-section.svelte-1xtn8g8 .img-container .feature-content-1.svelte-1xtn8g8.svelte-1xtn8g8{max-width:29.75rem;width:100%;margin:1.5rem;z-index:3;position:relative}.feature-section.svelte-1xtn8g8 .img-container .bg-1-topright.svelte-1xtn8g8.svelte-1xtn8g8{right:0;top:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .bg-1-bottomleft.svelte-1xtn8g8.svelte-1xtn8g8{left:0;bottom:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .feature-content-2.svelte-1xtn8g8.svelte-1xtn8g8{margin-inline:17px;margin-bottom:-5px}.feature-section.svelte-1xtn8g8 .img-container .bg-2-topleft.svelte-1xtn8g8.svelte-1xtn8g8{left:0;top:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .bg-2-bottomright.svelte-1xtn8g8.svelte-1xtn8g8{bottom:0;right:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .feature-content-3.svelte-1xtn8g8.svelte-1xtn8g8{width:23.8rem;margin:1.5rem 4.5rem;position:relative;z-index:2}.feature-section.svelte-1xtn8g8 .img-container .bg-3-bottomleft.svelte-1xtn8g8.svelte-1xtn8g8{left:0;bottom:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .bg-3-topright.svelte-1xtn8g8.svelte-1xtn8g8{top:0;right:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .feature-content-4.svelte-1xtn8g8.svelte-1xtn8g8{width:30.11rem;margin-top:3.25rem;margin-bottom:2.375rem;margin-right:0.82rem;margin-left:1.68rem;position:relative;z-index:3}.feature-section.svelte-1xtn8g8 .img-container .feature-content-5.svelte-1xtn8g8.svelte-1xtn8g8{width:28.9rem;margin:2.78rem 1.84rem;position:relative;z-index:3}@keyframes svelte-1xtn8g8-slide{0%{transform:translate(-100%, 0)}100%{transform:translate(0, 0)}}.container.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{overflow:hidden;display:flex;align-items:baseline;background:#0f0e17;margin:0 auto;white-space:nowrap}.container.svelte-1xtn8g8 .div1.svelte-1xtn8g8.svelte-1xtn8g8,.container.svelte-1xtn8g8 .div2.svelte-1xtn8g8.svelte-1xtn8g8{display:flex;animation:svelte-1xtn8g8-slide 80s linear infinite}.container.svelte-1xtn8g8 h3.svelte-1xtn8g8.svelte-1xtn8g8{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;color:#F9F4EF;font-size:1.5rem;margin-left:2.5rem}.first-section.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{display:flex;justify-content:space-between;align-items:center;margin:5rem auto}.first-section.svelte-1xtn8g8 .homepage-ui.svelte-1xtn8g8.svelte-1xtn8g8{max-width:21rem}.main-left.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{max-width:33rem}.main-left.svelte-1xtn8g8 h1.svelte-1xtn8g8.svelte-1xtn8g8{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:900;font-size:3.5rem;margin-block:0.1rem}.main-left.svelte-1xtn8g8 .line-icon-text.svelte-1xtn8g8.svelte-1xtn8g8{display:flex;align-items:center;gap:1rem;margin-top:0.4rem}.main-left.svelte-1xtn8g8 .line-icon-text .trail-sign.svelte-1xtn8g8.svelte-1xtn8g8{max-width:4.5rem;width:10vw;margin-bottom:0.5rem}.main-left.svelte-1xtn8g8 p.svelte-1xtn8g8.svelte-1xtn8g8{max-width:31rem;font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;line-height:30px;font-size:1.25rem;margin-top:1.5rem;margin-bottom:2rem;margin-left:0;margin-right:auto}.main-left.svelte-1xtn8g8 button.svelte-1xtn8g8.svelte-1xtn8g8{font-family:"Bespoke Slab", sans-serif;font-weight:bold;padding-top:1rem;padding-bottom:0.85rem;padding-left:1.25rem;padding-right:1.4rem;margin-top:0.4rem;background-color:#0f0e17;border:0px;border-radius:0.75rem;cursor:pointer;color:#F9F4EF;font-size:16px}.main-left.svelte-1xtn8g8 button.svelte-1xtn8g8 .logo-chrome.svelte-1xtn8g8{width:1.5rem;height:1.5rem;vertical-align:middle;margin-right:0.75rem;margin-bottom:4px}body{background:#DAD3C2;margin:0;padding:0;overflow:overlay;overflow-x:hidden;scrollbar-color:hotpink}.center.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{margin-top:5rem;text-align:center;align-items:center;margin-bottom:4rem}.center.svelte-1xtn8g8 .sparkle.svelte-1xtn8g8.svelte-1xtn8g8{width:2rem;height:2rem;margin:auto}.center.svelte-1xtn8g8 h2.svelte-1xtn8g8.svelte-1xtn8g8{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-weight:700;font-size:1.8rem;margin-top:1rem}.spacer.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{height:6.305rem}main.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{max-width:948px;margin:32px auto;padding-inline:40px}@media screen and (max-width: 570px){.lines-2.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{margin-top:-3rem}.lines-3.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{margin-top:-3rem}.lines-4.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{margin-top:-4rem}main.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{margin:32px 24px;padding-inline:0}.first-section.svelte-1xtn8g8 .main-left.svelte-1xtn8g8.svelte-1xtn8g8{margin-block:2rem}.first-section.svelte-1xtn8g8 .main-left .title-h1.svelte-1xtn8g8.svelte-1xtn8g8{font-size:2.1rem}.first-section.svelte-1xtn8g8 .main-left .line-icon-text .trail-sign.svelte-1xtn8g8.svelte-1xtn8g8{margin-bottom:0.5rem}.first-section.svelte-1xtn8g8 .main-left p.svelte-1xtn8g8.svelte-1xtn8g8{margin-top:1rem;margin-bottom:2rem}}@media screen and (max-width: 842px){.homepage-ui.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{display:none}.first-section.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{text-align:center;justify-content:center}.first-section.svelte-1xtn8g8 .main-left.svelte-1xtn8g8.svelte-1xtn8g8{margin-block:3rem}.first-section.svelte-1xtn8g8 .main-left h1.svelte-1xtn8g8.svelte-1xtn8g8{font-weight:900;margin-block:0rem}.first-section.svelte-1xtn8g8 .main-left .line-icon-text.svelte-1xtn8g8.svelte-1xtn8g8{display:flex;align-items:center;gap:1rem;margin-top:0.4rem;justify-content:center}.first-section.svelte-1xtn8g8 .main-left .line-icon-text .trail-sign.svelte-1xtn8g8.svelte-1xtn8g8{margin-bottom:0.5rem}.first-section.svelte-1xtn8g8 .main-left p.svelte-1xtn8g8.svelte-1xtn8g8{width:100%;margin-inline:auto;font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;line-height:25px;font-size:1.15rem;margin-top:1rem;margin-bottom:2rem}}@media screen and (max-width: 964px){.homepage-ui.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{width:18rem}.first-section.svelte-1xtn8g8 .main-left.svelte-1xtn8g8.svelte-1xtn8g8{width:100%;margin-block:3rem}.first-section.svelte-1xtn8g8 .main-left h1.svelte-1xtn8g8.svelte-1xtn8g8{font-weight:900;font-size:3.2rem}.first-section.svelte-1xtn8g8 .main-left .line-icon-text.svelte-1xtn8g8.svelte-1xtn8g8{display:flex;align-items:center;gap:0.5rem;margin-top:0.4rem}.first-section.svelte-1xtn8g8 .main-left .line-icon-text .trail-sign.svelte-1xtn8g8.svelte-1xtn8g8{width:11vw;min-width:3rem;margin-bottom:0.5rem}.first-section.svelte-1xtn8g8 .main-left p.svelte-1xtn8g8.svelte-1xtn8g8{width:100%;max-width:28rem;font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;line-height:25px;font-size:1.15rem;margin-top:1rem;margin-bottom:2rem}.feature-section.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{display:block;text-align:center;margin-bottom:6rem}.feature-section.svelte-1xtn8g8 .feature-content.svelte-1xtn8g8.svelte-1xtn8g8{margin-inline:auto;max-width:40rem;width:100%;margin-top:3rem}.feature-section.svelte-1xtn8g8 .feature-content .icons.svelte-1xtn8g8.svelte-1xtn8g8{margin-bottom:1rem;text-align:center;justify-content:center}.feature-section.svelte-1xtn8g8 .feature-content .icons img.svelte-1xtn8g8.svelte-1xtn8g8{width:2rem;height:2rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container.svelte-1xtn8g8.svelte-1xtn8g8{display:block;margin-inline:auto;text-align:center}.feature-section.svelte-1xtn8g8 .feature-content .text-container .title-container.svelte-1xtn8g8.svelte-1xtn8g8{margin-top:1.2rem;margin-bottom:0.8rem;margin-inline:auto}.feature-section.svelte-1xtn8g8 .feature-content .text-container .title-container #text1.svelte-1xtn8g8.svelte-1xtn8g8{margin-bottom:0px;margin-inline:auto;width:100%}.feature-section.svelte-1xtn8g8 .feature-content .text-container .title-container .one-liner-text-icon.svelte-1xtn8g8.svelte-1xtn8g8{width:10rem;margin:auto;justify-content:center}.feature-section.svelte-1xtn8g8 .feature-content .text-container .title-container .arrow-forward.svelte-1xtn8g8.svelte-1xtn8g8{width:1.8rem;height:1.8rem;margin-bottom:0.2rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container h3.svelte-1xtn8g8.svelte-1xtn8g8{font-size:1.5rem;margin-inline:auto;line-height:1.8rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container p.svelte-1xtn8g8.svelte-1xtn8g8{display:block;justify-self:center;width:100%;margin-inline:auto}.feature-section.svelte-1xtn8g8 .feature-content .text-container-h-1.svelte-1xtn8g8.svelte-1xtn8g8{max-width:30rem;width:100%}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-1.svelte-1xtn8g8.svelte-1xtn8g8{max-width:30rem;width:80vw}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-2.svelte-1xtn8g8.svelte-1xtn8g8{max-width:30rem;width:80vw}.feature-section.svelte-1xtn8g8 .feature-content .text-container-h-3.svelte-1xtn8g8.svelte-1xtn8g8{max-width:28rem;width:100%}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-3-1.svelte-1xtn8g8.svelte-1xtn8g8{max-width:27rem;width:80vw;padding-bottom:0.5rem}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-3-2.svelte-1xtn8g8.svelte-1xtn8g8{max-width:30rem;width:80vw}.feature-section.svelte-1xtn8g8 .feature-content .text-container-h-4.svelte-1xtn8g8.svelte-1xtn8g8{width:100%}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-4.svelte-1xtn8g8.svelte-1xtn8g8{max-width:30rem;width:80vw}.feature-section.svelte-1xtn8g8 .feature-content .text-container-h-5.svelte-1xtn8g8.svelte-1xtn8g8{max-width:16rem;width:100%}.feature-section.svelte-1xtn8g8 .feature-content .text-container-p-5.svelte-1xtn8g8.svelte-1xtn8g8{max-width:30rem;width:80vw}.feature-section.svelte-1xtn8g8 .img-container.svelte-1xtn8g8.svelte-1xtn8g8{background-color:#E7E1D2;border-radius:1rem;border:2px solid #0f0e17}.feature-section.svelte-1xtn8g8 .img-container-left.svelte-1xtn8g8.svelte-1xtn8g8{box-shadow:0px 8px #0f0e17}.feature-section.svelte-1xtn8g8 .img-container-right.svelte-1xtn8g8.svelte-1xtn8g8{display:none}.feature-section.svelte-1xtn8g8 .img-container-center.svelte-1xtn8g8.svelte-1xtn8g8{display:block;position:relative;box-shadow:0px 8px #0f0e17}.feature-section.svelte-1xtn8g8 .img-container .feature-content-1.svelte-1xtn8g8.svelte-1xtn8g8{max-width:29.75rem;width:70vw;margin:1.5rem;z-index:3;position:relative}.feature-section.svelte-1xtn8g8 .img-container .bg-1-topright.svelte-1xtn8g8.svelte-1xtn8g8{right:0;top:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .bg-1-bottomleft.svelte-1xtn8g8.svelte-1xtn8g8{left:0;bottom:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .feature-content-2.svelte-1xtn8g8.svelte-1xtn8g8{margin-inline:17px;margin-bottom:-5px;width:70vw}.feature-section.svelte-1xtn8g8 .img-container .bg-2-topleft.svelte-1xtn8g8.svelte-1xtn8g8{left:0;top:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .bg-2-bottomright.svelte-1xtn8g8.svelte-1xtn8g8{bottom:0;right:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .feature-content-3.svelte-1xtn8g8.svelte-1xtn8g8{max-width:23.8rem;width:65vw;margin:1.5rem auto;position:relative;z-index:2}.feature-section.svelte-1xtn8g8 .img-container .bg-3-bottomleft.svelte-1xtn8g8.svelte-1xtn8g8{left:0;bottom:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .bg-3-topright.svelte-1xtn8g8.svelte-1xtn8g8{top:0;right:0;position:absolute;z-index:0}.feature-section.svelte-1xtn8g8 .img-container .feature-content-4.svelte-1xtn8g8.svelte-1xtn8g8{max-width:30.11rem;width:80vw;margin-top:2.7rem;margin-bottom:2rem;margin-inline:auto;padding-left:0.8rem;position:relative;z-index:3}.feature-section.svelte-1xtn8g8 .img-container .feature-content-5.svelte-1xtn8g8.svelte-1xtn8g8{max-width:28.9rem;width:76vw;margin:2.78rem auto;position:relative;z-index:3}.lines-1.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;left:0;top:5rem;z-index:-1;width:8rem}.lines-2.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;transform:scaleX(-1);top:37rem;right:0;z-index:-1}.lines-3.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;transform:scaleY(-1);top:50rem;left:0}.lines-4.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;right:0;top:51rem;z-index:-1}.lines-5.svelte-1xtn8g8.svelte-1xtn8g8.svelte-1xtn8g8{position:absolute;left:0;transform:scaleX(-1);top:136;z-index:-1;display:none}}:root::-webkit-scrollbar{width:5px}:root::-webkit-scrollbar-track{background:transparent}:root::-webkit-scrollbar-thumb{background:#0f0e17}:root::-webkit-scrollbar-thumb:hover{background:#302e2b}',
      map: null
    };
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css2);
      return `${$$result.head += `<!-- HEAD_svelte-tfmquu_START --><link href="${"https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-tfmquu_END -->`, ""}


${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${"spacer svelte-1xtn8g8"}"></div>

 <div class="${"page-content"}"><main class="${"svelte-1xtn8g8"}"><section class="${"first-section svelte-1xtn8g8"}"><div class="${"main-left svelte-1xtn8g8"}"><h1 class="${"title-h1 svelte-1xtn8g8"}">Stop Browsing</h1>
				<div class="${"line-icon-text svelte-1xtn8g8"}"><img class="${"trail-sign svelte-1xtn8g8"}" src="${"./icons/trail-sign.svg"}" alt="${"trail sign icon"}">
					<h1 class="${"title-h1 svelte-1xtn8g8"}">Mindlessly &amp;</h1></div>
				<h1 class="${"title-h1 svelte-1xtn8g8"}">Become Intentional</h1>
				<p class="${"svelte-1xtn8g8"}">Uncover your true intentions on internet consumption and shift your actions mindfully towards the things you actually want to do.</p>
				<button class="${"svelte-1xtn8g8"}"><img class="${"logo-chrome svelte-1xtn8g8"}" src="${"./icons/logo-chrome.svg"}" alt="${"chrome logo"}">Add to Chrome</button></div>
			<img class="${"homepage-ui svelte-1xtn8g8"}" src="${"./img/homepage-ui.png"}" alt="${"Homepage Design"}"></section></main>
	
	<img class="${"lines-1 svelte-1xtn8g8"}" src="${"./img/lp-lines-1.svg"}" alt="${"lines background illustration"}">
	<img class="${"lines-2 svelte-1xtn8g8"}" src="${"./img/lines-onwhite-3.svg"}" alt="${"lines background illustration"}">
	<img class="${"lines-3 svelte-1xtn8g8"}" src="${"./img/lines-onwhite-3.svg"}" alt="${"lines background illustration"}">
	<img class="${"lines-4 svelte-1xtn8g8"}" src="${"./img/lp-lines-2.svg"}" alt="${"lines background illustration"}">
    <img class="${"lines-5 svelte-1xtn8g8"}" src="${"./img/lines-onwhite-2.svg"}" alt="${"lines background illustration"}">
	
	<div class="${"container svelte-1xtn8g8"}" id="${"feature-anchor"}"><div class="${"div1 svelte-1xtn8g8"}"><h3 class="${"svelte-1xtn8g8"}">Be aware.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be accountable.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be intentional.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be aware.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be accountable.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be intentional.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be aware.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be accountable.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be intentional.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be aware.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be accountable.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be intentional.</h3></div>
		<div class="${"div2 svelte-1xtn8g8"}"><h3 class="${"svelte-1xtn8g8"}">Be aware.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be accountable.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be intentional.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be aware.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be accountable.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be intentional.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be aware.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be accountable.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be intentional.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be aware.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be accountable.</h3>
			<h3 class="${"svelte-1xtn8g8"}">Be intentional.</h3></div></div>
	
	<main class="${"svelte-1xtn8g8"}"><div class="${"center svelte-1xtn8g8"}"><img class="${"sparkle svelte-1xtn8g8"}" src="${"./icons/sparkles.svg"}" alt="${"shapes icon"}">
		   <h2 class="${"svelte-1xtn8g8"}">Features</h2></div>
	
		<div class="${"feature-section feature-gap-1 svelte-1xtn8g8"}"><div class="${"img-container img-container-center svelte-1xtn8g8"}"><img class="${"bg-1-topright svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-topright.svg"}" alt="${"background lines"}">
				<img class="${"bg-1-bottomleft svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-bottomleft.svg"}" alt="${"background lines"}">
				
				<img class="${"feature-content-1 svelte-1xtn8g8"}" src="${"./img/feature-content1.png"}" alt="${"feature image 1"}"></div>
			<div class="${"feature-content svelte-1xtn8g8"}"><div class="${"icons svelte-1xtn8g8"}"><img src="${"./icons/book.svg"}" alt="${"book icon"}" class="${"svelte-1xtn8g8"}">
					<img src="${"./icons/happy.svg"}" alt="${"smiley icon"}" class="${"svelte-1xtn8g8"}"></div>
				<div class="${"text-container svelte-1xtn8g8"}"><h3 class="${"text-container-h-1 svelte-1xtn8g8"}">Create Custom<br>Block &amp; Focus Sites</h3>
					<p class="${"text-container-p-1 svelte-1xtn8g8"}">Block the time-wasting sites that distract you and add the sites you use to work towards your goals into focus sites.</p></div></div>
			<div class="${"img-container img-container-right svelte-1xtn8g8"}"><img class="${"bg-1-topright svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-topright.svg"}" alt="${"background lines"}">
				<img class="${"bg-1-bottomleft svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-bottomleft.svg"}" alt="${"background lines"}">
				
				<img class="${"feature-content-1 svelte-1xtn8g8"}" src="${"./img/feature-content1.png"}" alt="${"feature image 1"}"></div></div>
	
		<div class="${"feature-section feature-gap-2 svelte-1xtn8g8"}"><div class="${"img-container img-container-left svelte-1xtn8g8"}"><a href="${"/intent-questions"}"><button id="${"question-button"}" class="${"svelte-1xtn8g8"}"><img class="${"logo-chrome svelte-1xtn8g8"}" src="${"./icons/eye.svg"}" alt="${"eye icon"}">View Questions</button></a>
				<img class="${"bg-2-topleft svelte-1xtn8g8"}" src="${"./img/feature-content-bg-2-topleft.svg"}" alt="${"background lines"}">
				<img class="${"bg-2-bottomright svelte-1xtn8g8"}" src="${"./img/feature-content-bg-2-bottomright.svg"}" alt="${"background lines"}">
				
				<img class="${"feature-content-2 svelte-1xtn8g8"}" src="${"./img/feature-content2.png"}" alt="${"feature image 1"}"></div>
			<div class="${"feature-content svelte-1xtn8g8"}"><div class="${"icons svelte-1xtn8g8"}"><img src="${"./icons/accessibility.svg"}" alt="${"book icon"}" class="${"svelte-1xtn8g8"}"></div>
				<div class="${"text-container svelte-1xtn8g8"}"><div class="${"title-container svelte-1xtn8g8"}"><h3 id="${"text1"}" class="${"svelte-1xtn8g8"}">Shift From</h3>
						<div class="${"one-liner-text-icon svelte-1xtn8g8"}"><h3 id="${"text2"}" class="${"svelte-1xtn8g8"}">Mindless</h3>
							<img class="${"arrow-forward svelte-1xtn8g8"}" src="${"./icons/arrow-forward.svg"}" alt="${"arrow forward icon"}">
							<h3 id="${"text2"}" class="${"svelte-1xtn8g8"}">Mindful</h3></div></div>
					<p class="${"text-container-p-2 svelte-1xtn8g8"}">When you visit a blocked site, you\u2019ll get asked a short series of questions\u2014designed to snap you out of the mindless state.</p></div></div></div>
	
		<div class="${"feature-section feature-gap-1 svelte-1xtn8g8"}"><div class="${"img-container img-container-center svelte-1xtn8g8"}"><img class="${"bg-3-bottomleft svelte-1xtn8g8"}" src="${"./img/feature-content-bg-3-bottomleft.svg"}" alt="${"background lines"}">
				<img class="${"bg-3-topright svelte-1xtn8g8"}" src="${"./img/feature-content-bg-3-topright.svg"}" alt="${"background lines"}">
				
				<img class="${"feature-content-3 svelte-1xtn8g8"}" src="${"./img/feature-content3.png"}" alt="${"feature image 1"}"></div>
			<div class="${"feature-content svelte-1xtn8g8"}"><div class="${"icons svelte-1xtn8g8"}"><img src="${"./icons/chatbox-ellipses.svg"}" alt="${"chatbox ellipses icon"}" class="${"svelte-1xtn8g8"}"></div>
				<div class="${"text-container svelte-1xtn8g8"}"><h3 class="${"text-container-h-3 svelte-1xtn8g8"}">Get Notified &amp;<br>Stay Accountable</h3>
					<p class="${"text-container-p-3-1 svelte-1xtn8g8"}">You\u2019ll get notified of the time you have left according to how long you set for yourself on a blocked site.</p>
					<p class="${"text-container-p-3-2 svelte-1xtn8g8"}">This helps you to be mindful and less likely to be irritated when you\u2019re blocked from using the site when the time\u2019s up.</p></div></div>
			<div class="${"img-container img-container-right svelte-1xtn8g8"}"><img class="${"bg-3-bottomleft svelte-1xtn8g8"}" src="${"./img/feature-content-bg-3-bottomleft.svg"}" alt="${"background lines"}">
				<img class="${"bg-3-topright svelte-1xtn8g8"}" src="${"./img/feature-content-bg-3-topright.svg"}" alt="${"background lines"}">
				
				<img class="${"feature-content-3 svelte-1xtn8g8"}" src="${"./img/feature-content3.png"}" alt="${"feature image 1"}"></div></div>
	
		<div class="${"feature-section feature-gap-2 svelte-1xtn8g8"}"><div class="${"img-container img-container-left svelte-1xtn8g8"}"><img class="${"bg-1-topright svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-topright.svg"}" alt="${"background lines"}">
				<img class="${"bg-1-bottomleft svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-bottomleft.svg"}" alt="${"background lines"}">
				
				<img class="${"feature-content-4 svelte-1xtn8g8"}" src="${"./img/feature-content4.png"}" alt="${"feature image 4"}"></div>
			<div class="${"feature-content svelte-1xtn8g8"}"><div class="${"icons svelte-1xtn8g8"}"><img src="${"./icons/stopwatch.svg"}" alt="${"stopwatch icon"}" class="${"svelte-1xtn8g8"}"></div>
				<div class="${"text-container svelte-1xtn8g8"}"><h3 class="${"text-container-h-4 svelte-1xtn8g8"}">Auto Focus Mode</h3>
					<p class="${"text-container-p-4 svelte-1xtn8g8"}">Start the Pomodoro timer whenever you visit your focus site, and never forget about starting a Pomodoro session anymore.</p></div></div></div>
	
		<div class="${"feature-section feature-gap-1 svelte-1xtn8g8"}"><div class="${"img-container img-container-center svelte-1xtn8g8"}"><img class="${"bg-1-topright svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-topright.svg"}" alt="${"background lines"}">
				<img class="${"bg-1-bottomleft svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-bottomleft.svg"}" alt="${"background lines"}">
				
				<img class="${"feature-content-5 svelte-1xtn8g8"}" src="${"./img/feature-content5.png"}" alt="${"feature image 1"}"></div>
			<div class="${"feature-content svelte-1xtn8g8"}"><div class="${"icons svelte-1xtn8g8"}"><img src="${"./icons/eye-black.svg"}" alt="${"chatbox ellipses icon"}" class="${"svelte-1xtn8g8"}"></div>
				<div class="${"text-container svelte-1xtn8g8"}"><h3 class="${"text-container-h-5 svelte-1xtn8g8"}">See Your Intentions<br>at a Glance</h3>
					<p class="${"text-container-p-5 svelte-1xtn8g8"}">Reveal your browsing intentions, the sites you visited, and the amount of time you spent there.</p><p class="${"svelte-1xtn8g8"}"></p></div></div>
			<div class="${"img-container img-container-right svelte-1xtn8g8"}"><img class="${"bg-1-topright svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-topright.svg"}" alt="${"background lines"}">
				<img class="${"bg-1-bottomleft svelte-1xtn8g8"}" src="${"./img/feature-content-bg-1-bottomleft.svg"}" alt="${"background lines"}">
				
				<img class="${"feature-content-5 svelte-1xtn8g8"}" src="${"./img/feature-content5.png"}" alt="${"feature image 1"}"></div></div></main>
	
	${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
 </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-29474549.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-29474549.js", "_app/immutable/chunks/index-0808d0cc.js", "_app/immutable/chunks/Footer-261abf96.js"];
    stylesheets3 = ["_app/immutable/assets/_page-1e3b4f57.css", "_app/immutable/assets/Footer-13abc2d4.css"];
  }
});

// .svelte-kit/output/server/entries/pages/how-intentio-works/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var css$12, Modal, css3, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/how-intentio-works/_page.svelte.js"() {
    init_chunks();
    init_Footer();
    css$12 = {
      code: '.backdrop.svelte-jt2iys.svelte-jt2iys{width:100%;height:100%;position:fixed;background:rgba(0, 0, 0, 0.5);z-index:11}.modal.svelte-jt2iys.svelte-jt2iys{padding-inline:40px;padding-top:8px;padding-bottom:32px;border-radius:16px;max-width:800px;min-width:600px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#DAD3C2}.modal.svelte-jt2iys .inline-icon-text.svelte-jt2iys{display:flex;justify-content:space-between;align-items:center;width:100%;margin-top:-8px;margin-bottom:-8px}.modal.svelte-jt2iys .inline-icon-text .help-circle.svelte-jt2iys{width:32px;height:32px;margin-right:8px;margin-top:-5px}.modal.svelte-jt2iys .inline-icon-text h4.svelte-jt2iys{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:700;font-size:1.8rem;margin-right:auto}.modal.svelte-jt2iys .inline-icon-text .close.svelte-jt2iys{width:32px;height:32px;cursor:pointer}.modal.svelte-jt2iys p.svelte-jt2iys{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:20px;font-weight:500;margin-block:0;line-height:2rem;line-break:normal}@media screen and (max-width: 820px){.modal.svelte-jt2iys.svelte-jt2iys{width:60vw;max-width:600px;min-width:200px;padding-inline:1.5rem;padding-top:0.5rem}.modal.svelte-jt2iys .inline-icon-text .help-circle.svelte-jt2iys{width:1.5rem;height:1.5rem;display:none}.modal.svelte-jt2iys .inline-icon-text .close.svelte-jt2iys{width:1.5rem;height:1.5rem;margin-right:0px}.modal.svelte-jt2iys .inline-icon-text h4.svelte-jt2iys{font-size:1.3rem;line-height:1.6rem}.modal.svelte-jt2iys p.svelte-jt2iys{font-size:1rem;line-height:1.5rem}}',
      map: null
    };
    Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { message = "default value" } = $$props;
      let { title = "default value" } = $$props;
      let { showModal = false } = $$props;
      if ($$props.message === void 0 && $$bindings.message && message !== void 0)
        $$bindings.message(message);
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
        $$bindings.showModal(showModal);
      $$result.css.add(css$12);
      return `${showModal ? `
    <div class="${"backdrop svelte-jt2iys"}"><div class="${"modal svelte-jt2iys"}"><div class="${"inline-icon-text svelte-jt2iys"}"><img class="${"help-circle svelte-jt2iys"}" src="${"./icons/help-circle.svg"}" alt="${"help icon"}">
                <h4 class="${"svelte-jt2iys"}">${escape(title)}</h4>
                <img class="${"close svelte-jt2iys"}" src="${"./icons/close.svg"}" alt="${"close icon"}"></div>
            <p class="${"svelte-jt2iys"}">${escape(message)}</p></div></div>` : ``}`;
    });
    css3 = {
      code: '.lines-1.svelte-1xyw3yx.svelte-1xyw3yx{position:absolute;max-width:22%;left:0;top:20%}.lines-2.svelte-1xyw3yx.svelte-1xyw3yx{position:absolute;max-width:22%;right:0;top:50rem}.lines-3.svelte-1xyw3yx.svelte-1xyw3yx{position:absolute;transform:translate(0%, -68%);max-width:23rem;left:0;z-index:-1}.center.svelte-1xyw3yx.svelte-1xyw3yx{margin-top:5rem;text-align:center;align-items:center;margin-bottom:3rem}.center.svelte-1xyw3yx .shapes.svelte-1xyw3yx{width:2rem;height:2rem;margin:auto}.center.svelte-1xyw3yx h1.svelte-1xyw3yx{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-size:2rem;font-weight:700}a.svelte-1xyw3yx.svelte-1xyw3yx{color:#0f0e17}.inline-icon-text.svelte-1xyw3yx.svelte-1xyw3yx{display:flex;align-items:center;gap:8px}.inline-icon-text.svelte-1xyw3yx h3.svelte-1xyw3yx{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-weight:900;font-size:1.5rem;font-weight:normal;padding-top:4px}.caret-down.svelte-1xyw3yx.svelte-1xyw3yx{width:1.5rem;height:1.5rem;background-size:cover;cursor:pointer}p.svelte-1xyw3yx.svelte-1xyw3yx{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;line-height:1.6rem;font-size:1.125rem;line-break:normal;margin-bottom:1.12rem;text-align:justify}.small-title.svelte-1xyw3yx.svelte-1xyw3yx{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:1.25rem;font-weight:900}.references.svelte-1xyw3yx.svelte-1xyw3yx{margin-bottom:5rem;padding-left:1.5rem}.references.svelte-1xyw3yx li.svelte-1xyw3yx{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;text-decoration:dotted;line-height:1.68rem;font-size:1.125rem;margin-bottom:1.125rem;text-align:justify}.references.svelte-1xyw3yx li a.svelte-1xyw3yx{overflow-wrap:break-word}body{background:#DAD3C2;margin:0;padding:0;overflow-x:hidden}.spacer.svelte-1xyw3yx.svelte-1xyw3yx{height:6.305rem}main.svelte-1xyw3yx.svelte-1xyw3yx{max-width:948px;margin:32px auto;padding-inline:40px}@media screen and (max-width: 570px){main.svelte-1xyw3yx.svelte-1xyw3yx{padding-inline:24px}.center.svelte-1xyw3yx.svelte-1xyw3yx{margin-top:2rem;margin-bottom:2rem}.center.svelte-1xyw3yx h1.svelte-1xyw3yx{margin-top:0.8rem;font-size:1.5rem}p.svelte-1xyw3yx.svelte-1xyw3yx{font-size:0.95rem;line-height:1.3rem}.references.svelte-1xyw3yx.svelte-1xyw3yx{padding-left:1.5rem}.references.svelte-1xyw3yx li.svelte-1xyw3yx{padding-left:0;font-size:0.95rem;line-height:1.4rem}}',
      map: null
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let showModal = false;
      $$result.css.add(css3);
      return `${$$result.head += `<!-- HEAD_svelte-tfmquu_START --><link href="${"https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-tfmquu_END -->`, ""}

${validate_component(Modal, "Modal").$$render(
        $$result,
        {
          title: "Bottom-up Processing",
          message: "Bottom-up processing is the process of \u2018sensation\u2019, whereby the input of sensory information from the external environment is received by our sensory receptors.",
          showModal
        },
        {},
        {}
      )}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${"spacer svelte-1xyw3yx"}"></div>
<main class="${"svelte-1xyw3yx"}"><div class="${"center svelte-1xyw3yx"}"><img class="${"shapes svelte-1xyw3yx"}" src="${"./icons/shapes.svg"}" alt="${"shapes icon"}">
        <h1 class="${"svelte-1xyw3yx"}">How Intentio Works?</h1></div>

    <p class="${"svelte-1xyw3yx"}">We used to be able to read books or watch 30-minutes or hour-long TV shows, and it\u2019s easier to actually focus on studying, but technology is changing our attention span. As our digital consumption becomes more bite-sized\u2014we no longer need to pay attention like we used to.</p>

    <p class="${"svelte-1xyw3yx"}">The payoff from technology is becoming sweeter, faster, and more immediate.</p>

    <p class="${"svelte-1xyw3yx"}">As technology becomes more sophisticated, it gets better at hijacking our attention. As technology companies are at war for our attention\u2014and as they get better and better in claiming our attention\u2014essentially we lose out on everything else (studying for that exam, working towards that personal project, side hustles, or the things that you actually want to do) because our attention is being grabbed by all of these platforms.</p>

    <p class="${"svelte-1xyw3yx"}">The mechanism they use to pull our attention away from our goals is through the sensory stimuli that take advantage of <span><a href="${"#"}" class="${"svelte-1xyw3yx"}">bottom-up processing</a></span>.</p>

    <p class="${"svelte-1xyw3yx"}">And as technology improves and gets better at claiming our attention\u2014more effort is needed for us to give into controlling our minds and focus on the things we want to do. </p>

    <p class="${"svelte-1xyw3yx"}">One solution that was found to be useful in increasing mindfulness of social media consumption is by implementing an intervention design by automating digital nudges (Purohit &amp; Holzer, 2021). For instance, researchers at Cornell Tech leveraged nudging and negative reinforcement concepts with their vibration intervention (Okeke et al. 2018) does decrease social media usage; however, most participants felt irritated and annoyed by the digital nudge and returned to their old habits when the intervention was removed. The intervention gave a chance for self-reflection, but it was frequently ignored (Kim, Jung, et al. 2019). </p>

    <p class="${"svelte-1xyw3yx"}">To avoid making users feel irritated and annoyed by the digital nudge is not to prevent users from scrolling through their newsfeeds, but to reduce it by making it more mindful. The challenge is that the interventions need to be simultaneously strong to allow users to change their behavior\u2014as well as soft enough to avoid backfiring\u2014which may eventually lead to users forsaking the intervention altogether (Purohit &amp; Holzer, 2021).</p>

    <p class="${"svelte-1xyw3yx"}">Intentio is designed with that approach which was proven to have a 20.58% reduction in weekly digital consumption, and how it made the participants more mindful of their media consumption. However, the research only shows a decrease in the time of the social media platform, but not a reduced number of times the social media platform is opened (Purohit &amp; Holzer, 2021).</p>

    <p class="${"svelte-1xyw3yx"}">That\u2019s why Intentio takes it a step further in uncovering your intention as you mindlessly visit those digital platforms. </p>

    <p class="${"svelte-1xyw3yx"}">In addition to helping you become more mindful of your digital consumption\u2014which simultaneously reduces the time you spend on those platforms but also understanding your intention with Intent Questions\u2014snapping you out from the passive and mindless state to active and aware. </p>

    <p class="${"svelte-1xyw3yx"}">Intentio also doesn\u2019t collect users\u2019 data as it is designed with privacy and ethical concerns in mind, giving you peace of mind in using Intentio as a part of your daily lives.</p>
    <br>
    <p class="${"svelte-1xyw3yx"}"><span class="${"small-title svelte-1xyw3yx"}">TL;DR</span></p>
    <p class="${"svelte-1xyw3yx"}">With Intentio, you can always access your blocked sites. The point is not to force you to stop cold turkey but to understand why you go there in the first place.
    </p>

    <p class="${"svelte-1xyw3yx"}">Because the internet is undeniably a part of our lives now (and you can always find a way to get your cravings met), it\u2019s a good idea to understand what makes you want to do those things and shift your actions mindfully towards the things you want to do.</p>

    <div class="${"inline-icon-text svelte-1xyw3yx"}">
            ${``}
                
            ${`
                <img class="${"caret-down svelte-1xyw3yx"}" src="${"./icons/caret-forward.svg"}" alt="${"caret forward icon"}">`}

        <h3 style="${"font-family: 'Satoshi', sans-serif; font-weight: 700"}" class="${"svelte-1xyw3yx"}">References</h3></div>

    
    <ul class="${"references svelte-1xyw3yx"}">${``}
        <ul></ul>
        

    <img class="${"lines-3 svelte-1xyw3yx"}" src="${"./img/lines-onwhite-3.svg"}" alt="${"lines background illustration"}"></ul></main>
    <img class="${"lines-1 svelte-1xyw3yx"}" src="${"./img/lines-onwhite-1.svg"}" alt="${"lines background illustration"}">
    <img class="${"lines-2 svelte-1xyw3yx"}" src="${"./img/lines-onwhite-2.svg"}" alt="${"lines background illustration"}">

${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/how-intentio-works/_page.svelte-7714d56f.js";
    imports4 = ["_app/immutable/components/pages/how-intentio-works/_page.svelte-7714d56f.js", "_app/immutable/chunks/index-0808d0cc.js", "_app/immutable/chunks/Footer-261abf96.js"];
    stylesheets4 = ["_app/immutable/assets/_page-5ecd48c1.css", "_app/immutable/assets/Footer-13abc2d4.css"];
  }
});

// .svelte-kit/output/server/entries/pages/intent-questions/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var css4, Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/intent-questions/_page.svelte.js"() {
    init_chunks();
    init_Footer();
    css4 = {
      code: '@font-face{font-family:"SofiaProSemiBold";font-style:normal;font-weight:normal;src:local("SofiaProSemiBold"), url(./fonts/SofiaProSemiBold.otf) format("otf")}.center.svelte-w1ksqq.svelte-w1ksqq{margin-top:5rem;text-align:center;align-items:center;margin-bottom:1.5rem}.center.svelte-w1ksqq .puzzle.svelte-w1ksqq{width:2rem;height:2rem;margin:auto}.center.svelte-w1ksqq h1.svelte-w1ksqq{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-weight:700;font-size:32px}p.svelte-w1ksqq.svelte-w1ksqq{max-width:568px;font-size:1.125rem;font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;line-height:1.6rem;text-align:center;margin-inline:auto;margin-bottom:4rem}.question-diagram.svelte-w1ksqq.svelte-w1ksqq{display:flex;margin-inline:auto;margin-bottom:5rem;max-width:48.8rem;width:100%}body{background:#DAD3C2;margin:0;padding:0;overflow-x:hidden}.spacer.svelte-w1ksqq.svelte-w1ksqq{height:6.305rem}main.svelte-w1ksqq.svelte-w1ksqq{max-width:948px;margin:32px auto;padding-inline:40px}.lines-1.svelte-w1ksqq.svelte-w1ksqq{position:absolute;max-width:22%;left:0;top:20%}.lines-2.svelte-w1ksqq.svelte-w1ksqq{position:absolute;max-width:20vw;right:0;top:70%}.lines-3.svelte-w1ksqq.svelte-w1ksqq{position:absolute;transform:translate(0%, -100%);max-width:50%;left:0}@media screen and (max-width: 570px){main.svelte-w1ksqq.svelte-w1ksqq{padding-inline:24px}.center.svelte-w1ksqq.svelte-w1ksqq{margin-top:2rem;margin-bottom:2rem}.center.svelte-w1ksqq h1.svelte-w1ksqq{margin-top:0.8rem;font-size:1.5rem}p.svelte-w1ksqq.svelte-w1ksqq{font-size:0.95rem;line-height:1.3rem}}',
      map: null
    };
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css4);
      return `${$$result.head += `<!-- HEAD_svelte-tfmquu_START --><link href="${"https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-tfmquu_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${"spacer svelte-w1ksqq"}"></div>

<main class="${"svelte-w1ksqq"}"><div class="${"center svelte-w1ksqq"}"><img class="${"puzzle svelte-w1ksqq"}" src="${"./icons/puzzle.svg"}" alt="${"puzzle icon"}">
        <h1 class="${"svelte-w1ksqq"}">Intent Questions</h1></div>

    <p class="${"svelte-w1ksqq"}">When you visit a blocked site, you&#39;ll get asked a short series of question\u2014designed to snap you out of the mindless state.</p>

    <img class="${"question-diagram svelte-w1ksqq"}" src="${"./img/intentio-questions.svg"}" alt="${"intentio questions diagram"}">

    <img class="${"lines-3 svelte-w1ksqq"}" src="${"./img/lines-onwhite-3.svg"}" alt="${"lines background illustration"}"></main>
    <img class="${"lines-1 svelte-w1ksqq"}" src="${"./img/lines-onwhite-1.svg"}" alt="${"lines background illustration"}">
    <img class="${"lines-2 svelte-w1ksqq"}" src="${"./img/lines-onwhite-2.svg"}" alt="${"lines background illustration"}">
${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file5 = "_app/immutable/components/pages/intent-questions/_page.svelte-60fb71fb.js";
    imports5 = ["_app/immutable/components/pages/intent-questions/_page.svelte-60fb71fb.js", "_app/immutable/chunks/index-0808d0cc.js", "_app/immutable/chunks/Footer-261abf96.js"];
    stylesheets5 = ["_app/immutable/assets/_page-b098c677.css", "_app/immutable/assets/Footer-13abc2d4.css"];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\u0000",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var object_proto_names2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uneval(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!is_primitive(thing)) {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names2) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a2, b) => b[1] - a2[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify2(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c2) {
  return escaped[c2] || c2;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index7 = p++;
    indexes.set(thing, index7);
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index7] = str;
    return index7;
  }
  const index6 = flatten(value);
  if (index6 < 0)
    return `${index6}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
var HttpError = class {
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ValidationError = class {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a2, b) => {
    if (a2.q !== b.q) {
      return b.q - a2.q;
    }
    if (a2.subtype === "*" !== (b.subtype === "*")) {
      return a2.subtype === "*" ? 1 : -1;
    }
    if (a2.type === "*" !== (b.type === "*")) {
      return a2.type === "*" ? 1 : -1;
    }
    return a2.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  var _a;
  const type = ((_a = request.headers.get("content-type")) == null ? void 0 : _a.split(";", 1)[0].trim()) ?? "";
  return types.includes(type);
}
function is_form_content_type(request) {
  return is_content_type(request, "application/x-www-form-urlencoded", "multipart/form-data");
}
var DATA_SUFFIX = "/__data.json";
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function data_response(data, event) {
  const headers = {
    "content-type": "application/json",
    "cache-control": "private, no-store"
  };
  try {
    return new Response(stringify(data), { headers });
  } catch (e3) {
    const error2 = e3;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error2.path);
    const message = match ? `Data returned from \`load\` while rendering ${event.routeId} is not serializable: ${error2.message} (data.${match[2]})` : error2.message;
    return new Response(JSON.stringify(message), { headers, status: 500 });
  }
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    var _a, _b;
    for (const thing of [node == null ? void 0 : node.server, node == null ? void 0 : node.shared]) {
      if (thing && ("router" in thing || "hydrate" in thing)) {
        throw new Error(
          "`export const hydrate` and `export const router` have been replaced with `export const csr`. See https://github.com/sveltejs/kit/pull/6446"
        );
      }
    }
    return ((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value;
  }, void 0);
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
function handle_fatal_error(event, options, error2) {
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = handle_error_and_jsonify(event, options, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.url.pathname.endsWith(DATA_SUFFIX) || type === "application/json") {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, body.message);
}
function handle_error_and_jsonify(event, options, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return options.handle_error(error2, event);
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  check_method_names(mod);
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.initiator) {
      throw new Error(`${event.routeId} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await handler(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    } else if (error2 instanceof ValidationError) {
      return json(error2.data, { status: error2.status });
    }
    throw error2;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    return new Response("POST method not allowed. No actions exist for this page", {
      status: 405,
      headers: {
        allow: "GET"
      }
    });
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      check_serializability(data.data, event.routeId, "data");
      return action_json({ type: "invalid", status: data.status, data: data.data });
    } else {
      check_serializability(data, event.routeId, "data");
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        data
      });
    }
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error2.status,
        location: error2.location
      });
    }
    return action_json(
      {
        type: "error",
        error: handle_error_and_jsonify(event, options, check_incorrect_invalid_use(error2))
      },
      {
        status: error2 instanceof HttpError ? error2.status : 500
      }
    );
  }
}
function check_incorrect_invalid_use(error2) {
  return error2 instanceof ValidationError ? new Error(`Cannot "throw invalid()". Use "return invalid()"`) : error2;
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      return { type: "invalid", status: data.status, data: data.data };
    } else {
      return {
        type: "success",
        status: 200,
        data
      };
    }
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return {
        type: "redirect",
        status: error2.status,
        location: error2.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_invalid_use(error2)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")}`
    );
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (server2[method]) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function check_serializability(value, id, path) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child, i) => {
        check_serializability(child, id, `${path}[${i}]`);
      });
      return;
    }
    if (Object.getPrototypeOf(value) === Object.prototype) {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path}.${key2}`);
      }
      return;
    }
  }
  throw new Error(
    `${path} returned from action in ${id} cannot be serialized as JSON without losing its original type` + (value instanceof Date ? " (Date objects are serialized as strings)" : "")
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
async function unwrap_promises(object) {
  var _a;
  for (const key2 in object) {
    if (typeof ((_a = object[key2]) == null ? void 0 : _a.then) === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, state, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    url
  }));
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses: {
      dependencies: uses.dependencies.size > 0 ? Array.from(uses.dependencies) : void 0,
      params: uses.params.size > 0 ? Array.from(uses.params) : void 0,
      parent: uses.parent ? 1 : void 0,
      url: uses.url ? 1 : void 0
    }
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_event = {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    routeId: event.routeId,
    fetch: async (input, init2) => {
      const response = await event.fetch(input, init2);
      const url = new URL(input instanceof Request ? input.url : input, event.url);
      const same_origin = url.origin === event.url.origin;
      let dependency;
      if (same_origin && state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
      const proxy = new Proxy(response, {
        get(response2, key2, _receiver) {
          async function text() {
            const body = await response2.text();
            if (!body || typeof body === "string") {
              const status_number = Number(response2.status);
              if (isNaN(status_number)) {
                throw new Error(
                  `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
                );
              }
              fetched.push({
                url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
                method: event.request.method,
                request_body: init2 == null ? void 0 : init2.body,
                response_body: body,
                response: response2
              });
            }
            if (dependency) {
              dependency.body = body;
            }
            return body;
          }
          if (key2 === "arrayBuffer") {
            return async () => {
              const buffer = await response2.arrayBuffer();
              if (dependency) {
                dependency.body = new Uint8Array(buffer);
              }
              return buffer;
            };
          }
          if (key2 === "text") {
            return text;
          }
          if (key2 === "json") {
            return async () => {
              return JSON.parse(await text());
            };
          }
          return Reflect.get(response2, key2, response2);
        }
      });
      if (csr) {
        const get = response.headers.get;
        response.headers.get = (key2) => {
          const lower = key2.toLowerCase();
          const value = get.call(response.headers, lower);
          if (value && !lower.startsWith("x-sveltekit-")) {
            const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
            if (!included) {
              throw new Error(
                `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.routeId})`
              );
            }
          }
          return value;
        };
      }
      return proxy;
    },
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_event, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_event);
  return data ? unwrap_promises(data) : null;
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  if (typeof value === "string") {
    let i = value.length;
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else if (ArrayBuffer.isView(value)) {
    const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    let i = buffer.length;
    while (i)
      hash2 = hash2 * 33 ^ buffer[--i];
  } else {
    throw new TypeError("value must be a string or TypedArray");
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a2;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a2 = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a2 >>> 7 ^ a2 >>> 18 ^ a2 >>> 3 ^ a2 << 25 ^ a2 << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a2 = bytes[i + 0];
    const b = bytes[i + 1];
    const c2 = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c2;
    bytes[i + 2] = b;
    bytes[i + 3] = a2;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  var _a;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets6 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = (action_result == null ? void 0 : action_result.type) === "success" || (action_result == null ? void 0 : action_result.type) === "invalid" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      routeId: event.routeId,
      status,
      url: event.url,
      data,
      form: form_value
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets6.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = uneval(branch.map(({ server_data }) => server_data));
  } catch (e3) {
    const error3 = e3;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error3.path);
    if (match) {
      throw new Error(
        `Data returned from \`load\` while rendering ${event.routeId} is not serializable: ${error3.message} (data.${match[2]})`
      );
    }
    throw error3;
  }
  if (form_value) {
    serialized.form = uneval(form_value);
  }
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets6) {
    const path = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.csr) {
    const init_app = `
			import { start } from ${s(prefixed(entry.file))};

			start({
				env: ${s(options.public_env)},
				hydrate: ${page_config.ssr ? `{
					status: ${status},
					error: ${s(error2)},
					node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
					params: ${uneval(event.params)},
					routeId: ${s(event.routeId)},
					data: ${serialized.data},
					form: ${serialized.form}
				}` : "null"},
				paths: ${s(options.paths)},
				target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
				trailing_slash: ${s(options.trailing_slash)}
			});
		`;
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options.service_worker) {
    const init_service_worker = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${prefixed("service-worker.js")}');
				});
			}
		`;
    csp.add_script(init_service_worker);
    head += `
		<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  head += rendered.head;
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.initiator = GENERIC_ERROR;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: handle_error_and_jsonify(event, options, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (error3) {
    if (error3 instanceof Redirect) {
      return redirect_response(error3.status, error3.location);
    }
    return static_error_page(
      options,
      error3 instanceof HttpError ? error3.status : 500,
      handle_error_and_jsonify(event, options, error3).message
    );
  }
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  state.initiator = route;
  if (is_action_json_request(event)) {
    const node = await options.manifest._.nodes[page2.leaf]();
    if (node.server) {
      return handle_action_json_request(event, options, node.server);
    }
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n2) => n2 == void 0 ? n2 : options.manifest._.nodes[n2]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if ((action_result == null ? void 0 : action_result.type) === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if ((action_result == null ? void 0 : action_result.type) === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if ((action_result == null ? void 0 : action_result.type) === "invalid") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = event.url.pathname.replace(/\/$/, "") + DATA_SUFFIX;
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && (action_result == null ? void 0 : action_result.type) === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e3) {
          load_error = e3;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e3) {
          load_error = e3;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = handle_error_and_jsonify(event, options, err);
          while (i--) {
            if (page2.errors[i]) {
              const index6 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index6]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = stringify({
        type: "data",
        nodes: branch.map((branch_node) => branch_node == null ? void 0 : branch_node.server_data)
      });
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (error2) {
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    let value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
async function render_data(event, route, options, state) {
  var _a;
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = ((_a = event.request.headers.get("x-sveltekit-invalidated")) == null ? void 0 : _a.split(",").map(Boolean)) ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(
      url.pathname.slice(0, -DATA_SUFFIX.length),
      options.trailing_slash
    );
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n2 == void 0 ? n2 : await options.manifest._.nodes[n2]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await functions[j]();
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch((error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return {
            type: "error",
            error: handle_error_and_jsonify(event, options, error2),
            status: error2 instanceof HttpError ? error2.status : void 0
          };
        })
      )
    );
    const server_data = {
      type: "data",
      nodes: nodes.slice(0, length)
    };
    return data_response(server_data, event);
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      const server_data = {
        type: "redirect",
        location: error2.location
      };
      return data_response(server_data, event);
    } else {
      return data_response(handle_error_and_jsonify(event, options, error2), event);
    }
  }
}
function get_cookies(request, url) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header);
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    get(name, opts) {
      const c2 = new_cookies[name];
      if (c2 && domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
        return c2.value;
      }
      const decode = (opts == null ? void 0 : opts.decode) || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode });
      return req_cookies[name];
    },
    set(name, value, opts = {}) {
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults,
          ...opts
        }
      };
    },
    delete(name, opts = {}) {
      new_cookies[name] = {
        name,
        value: "",
        options: {
          ...defaults,
          ...opts,
          maxAge: 0
        }
      };
    },
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {};
    for (const name in initial_cookies) {
      combined_cookies[name] = initial_cookies[name];
    }
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      combined_cookies[cookie.name] = cookie.value;
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2);
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options));
  }
}
function create_fetch({ event, options, state, get_cookie_header }) {
  return async (info, init2) => {
    const request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2 == null ? void 0 : init2.body;
    return await options.hooks.handleFetch({
      event,
      request,
      fetch: async (info2, init3) => {
        const request2 = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request2.url);
        if (!request2.headers.has("origin")) {
          request2.headers.set("origin", event.url.origin);
        }
        if ((request2.method === "GET" || request2.method === "HEAD") && (request2.mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request2.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && request2.credentials !== "omit") {
            const cookie = get_cookie_header(url, request2.headers.get("cookie"));
            if (cookie)
              request2.headers.set("cookie", cookie);
          }
          let response2 = await fetch(request2);
          if (request2.mode === "no-cors") {
            response2 = new Response("", {
              status: response2.status,
              statusText: response2.statusText,
              headers: response2.headers
            });
          } else {
            if (url.origin !== event.url.origin) {
              const acao = response2.headers.get("access-control-allow-origin");
              if (!acao || acao !== event.url.origin && acao !== "*") {
                throw new Error(
                  `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
                );
              }
            }
          }
          return response2;
        }
        let response;
        const prefix = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file6 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file6), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request2);
        }
        if (request2.credentials !== "omit") {
          const cookie = get_cookie_header(url, request2.headers.get("cookie"));
          if (cookie) {
            request2.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request2.headers.has("authorization")) {
            request2.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        response = await respond(request2, options, state);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options2 } = set_cookie_parser.parseString(str);
            event.cookies.set(
              name,
              value,
              options2
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
async function respond(request, options, state) {
  var _a, _b, _c;
  let url = new URL(request.url);
  if (options.csrf.check_origin) {
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && is_form_content_type(request);
    if (forbidden) {
      return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
        status: 403
      });
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_a = state.prerendering) == null ? void 0 : _a.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request)
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
  if (!((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if ((route == null ? void 0 : route.page) && !is_data_request) {
    const normalized = normalize_path(url.pathname, options.trailing_slash);
    if (normalized !== url.pathname && !((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
      return new Response(void 0, {
        status: 301,
        headers: {
          "x-sveltekit-normalize": "1",
          location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
        }
      });
    }
  }
  const headers = {};
  const { cookies, new_cookies, get_cookie_header } = get_cookies(request, url);
  if (state.prerendering)
    disable_search(url);
  const event = {
    cookies,
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url
  };
  event.fetch = create_fetch({ event, options, state, get_cookie_header });
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    clientAddress: removed("clientAddress", "getClientAddress"),
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter
  };
  async function resolve(event2, opts) {
    var _a2;
    try {
      if (opts) {
        if ("transformPage" in opts) {
          throw new Error(
            "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
          );
        }
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter
        };
      }
      if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(event2, route, options, state);
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e3) {
      const error2 = e3 instanceof HttpError ? e3 : coalesce_to_error(e3);
      return handle_fatal_error(event2, options, error2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  try {
    const response = await options.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        if (!is_data_request) {
          for (const key2 in headers) {
            const value = headers[key2];
            response2.headers.set(key2, value);
          }
        }
        add_cookies_to_headers(response2.headers, Object.values(new_cookies));
        if (state.prerendering && event2.routeId !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.routeId));
        }
        return response2;
      }),
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = response.headers.get("etag");
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    return response;
  } catch (e3) {
    const error2 = coalesce_to_error(e3);
    return handle_fatal_error(event, options, error2);
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width" />\n		' + head + "\n	</head>\n	<body>\n		<div>" + body + "</div>\n	</body>\n</html>\n";
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      handle_error: (error2, event) => {
        return this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        }) ?? { message: event.routeId != null ? "Internal Error" : "Not Found" };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: false,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      trailing_slash: "never"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      if (module.externalFetch) {
        throw new Error("externalFetch has been removed \u2014 use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details");
      }
      this.options.hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/cloudflare-tmp/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "fonts/Sofia Pro Bold Az.otf", "fonts/Sofia Pro Medium Az.otf", "fonts/Sofia Pro Regular Az.otf", "fonts/Sofia Pro Semi Bold Az.otf", "fonts/sofia_pro_bold_az-webfont.woff", "fonts/sofia_pro_bold_az-webfont.woff2", "fonts/sofia_pro_medium_az-webfont.woff", "fonts/sofia_pro_medium_az-webfont.woff2", "fonts/sofia_pro_regular_az-webfont.woff", "fonts/sofia_pro_regular_az-webfont.woff2", "fonts/sofia_pro_semi_bold_az-webfont.woff", "fonts/sofia_pro_semi_bold_az-webfont.woff2", "icons/accessibility.svg", "icons/arrow-forward.svg", "icons/book.svg", "icons/cafe.svg", "icons/caret-down.svg", "icons/caret-forward.svg", "icons/chatbox-ellipses.svg", "icons/close.svg", "icons/eye-black.svg", "icons/eye.svg", "icons/happy.svg", "icons/help-circle.svg", "icons/logo-behance.svg", "icons/logo-chrome.svg", "icons/logo-linkedin.svg", "icons/mail.svg", "icons/menu.svg", "icons/puzzle-filled.svg", "icons/puzzle.svg", "icons/shapes-filled.svg", "icons/shapes.svg", "icons/sparkles-filled.svg", "icons/sparkles.svg", "icons/stopwatch.svg", "icons/trail-sign.svg", "img/feature-content-bg-1-bottomleft.svg", "img/feature-content-bg-1-topright.svg", "img/feature-content-bg-2-bottomright.svg", "img/feature-content-bg-2-topleft.svg", "img/feature-content-bg-3-bottomleft.svg", "img/feature-content-bg-3-topright.svg", "img/feature-content1.png", "img/feature-content2.png", "img/feature-content3.png", "img/feature-content4.png", "img/feature-content5.png", "img/homepage-ui.png", "img/intentio-questions.svg", "img/intentio_questions.png", "img/lines-1.svg", "img/lines-2.svg", "img/lines-onwhite-1.svg", "img/lines-onwhite-2.svg", "img/lines-onwhite-3.svg", "img/lp-lines-1.svg", "img/lp-lines-2.svg", "intentio-logo.svg", "intentio-mark-white.svg"]),
  mimeTypes: { ".png": "image/png", ".otf": "font/otf", ".woff": "font/woff", ".woff2": "font/woff2", ".svg": "image/svg+xml" },
  _: {
    entry: { "file": "_app/immutable/start-ec3f09c7.js", "imports": ["_app/immutable/start-ec3f09c7.js", "_app/immutable/chunks/index-0808d0cc.js", "_app/immutable/chunks/singletons-91e5a31a.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5))
    ],
    routes: [
      {
        id: "/",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "/how-intentio-works",
        pattern: /^\/how-intentio-works\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      },
      {
        id: "/intent-questions",
        pattern: /^\/intent-questions\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 4 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/cloudflare-tmp/_worker.js
async function e(e3, t2) {
  let n2 = "string" != typeof t2 && "HEAD" === t2.method;
  n2 && (t2 = new Request(t2, { method: "GET" }));
  let a2 = await e3.match(t2);
  return n2 && a2 && (a2 = new Response(null, a2)), a2;
}
function t(e3, t2, n2, o2) {
  return ("string" == typeof t2 || "GET" === t2.method) && a(n2) && (n2.headers.has("Set-Cookie") && (n2 = new Response(n2.body, n2)).headers.append("Cache-Control", "private=Set-Cookie"), o2.waitUntil(e3.put(t2, n2.clone()))), n2;
}
var n = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function a(e3) {
  if (!n.has(e3.status) || ~(e3.headers.get("Vary") || "").indexOf("*"))
    return false;
  let t2 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t2);
}
function o(n2) {
  return async function(a2, o2) {
    let r2 = await e(n2, a2);
    if (r2)
      return r2;
    o2.defer((e3) => {
      t(n2, a2, e3, o2);
    });
  };
}
var s2 = caches.default;
var e2 = t.bind(0, s2);
var c = e.bind(0, s2);
var r = o.bind(0, s2);
var server = new Server(manifest);
var app_path = `/${manifest.appPath}/`;
var worker = {
  async fetch(req, env, context) {
    await server.init({ env });
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await c(req);
    if (res)
      return res;
    let { pathname } = new URL(req.url);
    if (pathname.startsWith(app_path)) {
      res = await env.ASSETS.fetch(req);
      if (!res.ok)
        return res;
      const cache_control = pathname.startsWith(app_path + "immutable/") ? "public, immutable, max-age=31536000" : "no-cache";
      res = new Response(res.body, {
        headers: {
          "cache-control": cache_control,
          "content-type": res.headers.get("content-type"),
          "x-robots-tag": "noindex"
        }
      });
    } else {
      pathname = pathname.replace(/\/$/, "") || "/";
      let file6 = pathname.substring(1);
      try {
        file6 = decodeURIComponent(file6);
      } catch (err) {
      }
      if (manifest.assets.has(file6) || manifest.assets.has(file6 + "/index.html") || prerendered.has(pathname)) {
        res = await env.ASSETS.fetch(req);
      } else {
        res = await server.respond(req, {
          platform: { env, context, caches },
          getClientAddress() {
            return req.headers.get("cf-connecting-ip");
          }
        });
      }
    }
    pragma = res.headers.get("cache-control");
    return pragma && res.ok ? e2(req, res, context) : res;
  }
};
var worker_default = worker;
export {
  worker_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=_worker.js.map
