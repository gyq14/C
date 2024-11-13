import { hasInjectionContext, inject, version, ref, watchEffect, watch, getCurrentInstance, defineAsyncComponent, getCurrentScope, onScopeDispose, readonly, computed, unref, defineComponent, h, provide, shallowReactive, Suspense, nextTick, Fragment, Transition, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createBlock, resolveDynamicComponent, createCommentVNode, toDisplayString, mergeProps, reactive, toRefs, createVNode, useSlots, withCtx, normalizeStyle, createTextVNode, TransitionGroup, toRef, useSSRContext, shallowRef, isRef, Text, createApp, effectScope, isReactive, toRaw, warn, onErrorCaptured, onServerPrefetch, markRaw, isReadonly, isShallow } from 'vue';
import { $ as $fetch$1, m as baseURL, n as hasProtocol, o as isScriptProtocol, q as joinURL, w as withQuery, e as createError$1, v as klona, x as defu, y as sanitizeStatusCode, z as defuFn, A as getContext, B as createHooks, C as toRouteMatcher, D as createRouter$1, E as getRequestHeaders, F as parse, G as getRequestHeader, d as destr, H as isEqual, I as setCookie, J as getCookie, K as deleteCookie } from '../_/nitro.mjs';
import { CapoPlugin, getActiveHead } from 'unhead';
import { defineHeadPlugin, composableNames } from '@unhead/shared';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { isArray, isObject as isObject$2, isString as isString$1, hasOwn, NOOP, isFunction as isFunction$2 } from '@vue/shared';
import { isNil, get as get$2, set as set$1, fromPairs, castArray, clone as clone$2 } from 'lodash-unified';
import { extendTailwindMerge } from 'tailwind-merge';
import { _api, disableCache, addAPIProvider } from '@iconify/vue';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import * as zrender from 'zrender/lib/zrender.js';
import { registerPainter } from 'zrender/lib/zrender.js';
import * as zrUtil from 'zrender/lib/core/util.js';
import { isArray as isArray$1, map as map$1, isNumber as isNumber$1, isString as isString$2, extend, defaults, each as each$3, keys, hasOwn as hasOwn$1, retrieve2, merge, clone as clone$1, mixin, createHashMap, isObject as isObject$3, isTypedArray, trim, noop as noop$2, indexOf, isFunction as isFunction$1, isStringSafe, assert, filter, bind as bind$1, reduce, setAsPrimitive, curry, isArrayLike, retrieve, isDom, eqNaN } from 'zrender/lib/core/util.js';
import env from 'zrender/lib/core/env.js';
import timsort from 'zrender/lib/core/timsort.js';
import Eventful from 'zrender/lib/core/Eventful.js';
import ZRText from 'zrender/lib/graphic/Text.js';
import { liftColor } from 'zrender/lib/tool/color.js';
import Path from 'zrender/lib/graphic/Path.js';
import * as pathTool from 'zrender/lib/tool/path.js';
import * as matrix from 'zrender/lib/core/matrix.js';
import { invert } from 'zrender/lib/core/matrix.js';
import * as vec2 from 'zrender/lib/core/vector.js';
import { applyTransform as applyTransform$1 } from 'zrender/lib/core/vector.js';
import Transformable from 'zrender/lib/core/Transformable.js';
import ZRImage from 'zrender/lib/graphic/Image.js';
import Group from 'zrender/lib/graphic/Group.js';
import Circle from 'zrender/lib/graphic/shape/Circle.js';
import Ellipse from 'zrender/lib/graphic/shape/Ellipse.js';
import Sector from 'zrender/lib/graphic/shape/Sector.js';
import Ring from 'zrender/lib/graphic/shape/Ring.js';
import Polygon from 'zrender/lib/graphic/shape/Polygon.js';
import Polyline from 'zrender/lib/graphic/shape/Polyline.js';
import Rect from 'zrender/lib/graphic/shape/Rect.js';
import Line from 'zrender/lib/graphic/shape/Line.js';
import BezierCurve from 'zrender/lib/graphic/shape/BezierCurve.js';
import Arc from 'zrender/lib/graphic/shape/Arc.js';
import CompoundPath_js from 'zrender/lib/graphic/CompoundPath.js';
import LinearGradient from 'zrender/lib/graphic/LinearGradient.js';
import RadialGradient_js from 'zrender/lib/graphic/RadialGradient.js';
import BoundingRect from 'zrender/lib/core/BoundingRect.js';
import OrientedBoundingRect from 'zrender/lib/core/OrientedBoundingRect.js';
import Point from 'zrender/lib/core/Point.js';
import IncrementalDisplayable_js from 'zrender/lib/graphic/IncrementalDisplayable.js';
import * as subPixelOptimizeUtil from 'zrender/lib/graphic/helper/subPixelOptimize.js';
import { encodeHTML, transformLocalCoord } from 'zrender/lib/core/dom.js';
import WeakMap from 'zrender/lib/core/WeakMap.js';
import LRU from 'zrender/lib/core/LRU.js';
import * as textContain from 'zrender/lib/contain/text.js';
import { calculateTextPosition, parsePercent as parsePercent$1 } from 'zrender/lib/contain/text.js';
import { brushSingle } from 'zrender/lib/canvas/graphic.js';
import { platformApi } from 'zrender/lib/core/platform.js';
import CanvasPainter from 'zrender/lib/canvas/Painter.js';
import * as eventTool from 'zrender/lib/core/event.js';
import { normalizeEvent } from 'zrender/lib/core/event.js';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import AsyncValidator from 'async-validator';
import { TinyColor } from '@ctrl/tinycolor';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
const appKeepalive = true;
const appLayoutTransition = false;
const appPageTransition = false;
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a2;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.13.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a2 = options.ssrContext) == null ? void 0 : _a2.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a2, _b2, _c2, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a3;
    const unresolvedPluginsForThisPlugin = ((_a3 = plugin2.dependsOn) == null ? void 0 : _a3.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext) && ((_b2 = plugin2.env) == null ? void 0 : _b2.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c2 = nuxtApp.ssrContext) == null ? void 0 : _c2.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a2;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a2 = getCurrentInstance()) == null ? void 0 : _a2.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config2) {
  return config2;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a2;
  return (_a2 = useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error2) => {
  const nuxtError = createError(error2);
  try {
    const nuxtApp = useNuxtApp();
    const error22 = useError();
    if (false) ;
    error22.value = error22.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error2) => !!error2 && typeof error2 === "object" && NUXT_ERROR_SIGNATURE in error2;
const createError = (error2) => {
  const nuxtError = createError$1(error2);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref$1(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref$1(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$2 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global$1[globalKey$2] = handler;
}
function injectHead() {
  if (globalKey$2 in _global$1) {
    return _global$1[globalKey$2]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave2 = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave2);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave2);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$1 = "__unctx__";
_globalThis[globalKey$1] || (_globalThis[globalKey$1] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error2) => {
      restore();
      throw error2;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const __nuxt_page_meta$B = {
  title: "主页概览",
  icon: "flowbite:building-outline"
};
const __nuxt_page_meta$A = {
  title: "我的通知",
  icon: "ep:brush",
  order: 1
};
const __nuxt_page_meta$z = {
  title: "代办详情",
  // 菜单的标题
  // icon: 'ep:user',  // 图标，使用 https://icones.js.org/
  hidden: true,
  // 在菜单不展示，默认为false
  order: 0
  // 菜单的排序，越小越越靠前，默认为0
};
const __nuxt_page_meta$y = {
  title: "我的代办",
  icon: "ep:brush",
  order: 2
};
const __nuxt_page_meta$x = {
  title: "消息中心",
  icon: "flowbite:bell-outline",
  order: 2
};
const __nuxt_page_meta$w = {
  title: "用户管理",
  icon: "ep:brush",
  order: 1
};
const __nuxt_page_meta$v = {
  title: "供应商管理",
  icon: "ep:brush",
  order: 2
};
const __nuxt_page_meta$u = {
  title: "组织管理",
  icon: "tabler:users",
  order: 8
};
const __nuxt_page_meta$t = {
  title: "子任务详情",
  // 菜单的标题
  // icon: 'ep:user',  // 图标，使用 https://icones.js.org/
  hidden: true,
  // 在菜单不展示，默认为false
  order: 0
  // 菜单的排序，越小越越靠前，默认为0
};
const __nuxt_page_meta$s = {
  title: "子任务中心",
  icon: "system-uicons:clipboard-check",
  order: 5
};
const __nuxt_page_meta$r = {
  title: "子任务容器",
  icon: "tabler:package",
  order: 6
};
const __nuxt_page_meta$q = {
  title: "项目详情",
  // 菜单的标题
  // icon: 'ep:user',  // 图标，使用 https://icones.js.org/
  hidden: true,
  // 在菜单不展示，默认为false
  order: 0
  // 菜单的排序，越小越越靠前，默认为0
};
const __nuxt_page_meta$p = {
  title: "任务中心",
  icon: "flowbite:clipboard-outline",
  order: 3
};
const __nuxt_page_meta$o = {
  title: "任务容器",
  icon: "flowbite:database-outline",
  order: 4
};
const __nuxt_page_meta$n = {
  title: "用户中心",
  icon: "tabler:user",
  order: 7
};
const __nuxt_page_meta$m = {
  title: "主页概览",
  icon: "flowbite:building-outline"
};
const __nuxt_page_meta$l = {
  title: "我的通知",
  icon: "ep:brush",
  order: 1
};
const __nuxt_page_meta$k = {
  title: "代办详情",
  // 菜单的标题
  // icon: 'ep:user',  // 图标，使用 https://icones.js.org/
  hidden: true,
  // 在菜单不展示，默认为false
  order: 0
  // 菜单的排序，越小越越靠前，默认为0
};
const __nuxt_page_meta$j = {
  title: "我的代办",
  icon: "ep:brush",
  order: 2
};
const __nuxt_page_meta$i = {
  title: "消息中心",
  icon: "flowbite:bell-outline",
  order: 2
};
const __nuxt_page_meta$h = {
  title: "项目详情",
  // 菜单的标题
  // icon: 'ep:user',  // 图标，使用 https://icones.js.org/
  hidden: true,
  // 在菜单不展示，默认为false
  order: 0
  // 菜单的排序，越小越越靠前，默认为0
};
const __nuxt_page_meta$g = {
  title: "子任务中心",
  icon: "system-uicons:clipboard-check",
  order: 5
};
const __nuxt_page_meta$f = {
  title: "子任务容器",
  icon: "tabler:package",
  order: 6
};
const __nuxt_page_meta$e = {
  title: "任务详情",
  // 菜单的标题
  // icon: 'ep:user',  // 图标，使用 https://icones.js.org/
  hidden: true,
  // 在菜单不展示，默认为false
  order: 0
  // 菜单的排序，越小越越靠前，默认为0
};
const __nuxt_page_meta$d = {
  title: "任务中心",
  icon: "flowbite:clipboard-outline",
  order: 3
};
const __nuxt_page_meta$c = {
  title: "任务容器",
  icon: "flowbite:database-outline",
  order: 4
};
const __nuxt_page_meta$b = {
  title: "用户中心",
  icon: "tabler:user",
  order: 7
};
const __nuxt_page_meta$a = {
  title: "主页概览",
  icon: "flowbite:building-outline"
};
const __nuxt_page_meta$9 = {
  title: "我的通知",
  icon: "ep:brush",
  order: 1
};
const __nuxt_page_meta$8 = {
  title: "代办详情",
  // 菜单的标题
  // icon: 'ep:user',  // 图标，使用 https://icones.js.org/
  hidden: true,
  // 在菜单不展示，默认为false
  order: 0
  // 菜单的排序，越小越越靠前，默认为0
};
const __nuxt_page_meta$7 = {
  title: "我的代办",
  icon: "ep:brush",
  order: 2
};
const __nuxt_page_meta$6 = {
  title: "消息中心",
  icon: "flowbite:bell-outline",
  order: 2
};
const __nuxt_page_meta$5 = {
  title: "项目详情",
  // 菜单的标题
  // icon: 'ep:user',  // 图标，使用 https://icones.js.org/
  hidden: true,
  // 在菜单不展示，默认为false
  order: 0
  // 菜单的排序，越小越越靠前，默认为0
};
const __nuxt_page_meta$4 = {
  title: "子任务中心",
  icon: "system-uicons:clipboard-check",
  order: 5
};
const __nuxt_page_meta$3 = {
  title: "子任务容器",
  icon: "tabler:package",
  order: 6
};
const __nuxt_page_meta$2 = {
  title: "任务详情",
  // 菜单的标题
  // icon: 'ep:user',  // 图标，使用 https://icones.js.org/
  hidden: true,
  // 在菜单不展示，默认为false
  order: 0
  // 菜单的排序，越小越越靠前，默认为0
};
const __nuxt_page_meta$1 = {
  title: "任务中心",
  icon: "flowbite:clipboard-outline",
  order: 3
};
const __nuxt_page_meta = {
  title: "任务容器",
  icon: "flowbite:database-outline",
  order: 4
};
const _routes = [
  {
    name: "admin",
    path: "/admin",
    component: () => import('./admin-DF-pKH-X.mjs'),
    children: [
      {
        name: "admin+index",
        path: "",
        meta: __nuxt_page_meta$B || {},
        component: () => import('./index-DS1RgE8L.mjs')
      },
      {
        name: "admin+MessageCenter",
        path: "MessageCenter",
        meta: __nuxt_page_meta$x || {},
        component: () => import('./MessageCenter-Cw6lqLLA.mjs'),
        children: [
          {
            name: "admin+MessageCenter+Notifications",
            path: "Notifications",
            meta: __nuxt_page_meta$A || {},
            component: () => import('./Notifications-DurL6R0A.mjs')
          },
          {
            name: "admin+MessageCenter+Todos-[type]+[id]",
            path: "Todos-:type()/:id()",
            meta: __nuxt_page_meta$z || {},
            component: () => import('./_id_-DvoSkl47.mjs')
          },
          {
            name: "admin+MessageCenter+Todos",
            path: "Todos",
            meta: __nuxt_page_meta$y || {},
            component: () => import('./Todos-_8HIVklG.mjs')
          }
        ]
      },
      {
        name: "admin+Organization",
        path: "Organization",
        meta: __nuxt_page_meta$u || {},
        component: () => import('./Organization-BITc3hev.mjs'),
        children: [
          {
            name: "admin+Organization+User",
            path: "User",
            meta: __nuxt_page_meta$w || {},
            component: () => import('./User-68UtpmFO.mjs')
          },
          {
            name: "admin+Organization+Vendor",
            path: "Vendor",
            meta: __nuxt_page_meta$v || {},
            component: () => import('./Vendor-CjGNZ1Z_.mjs')
          }
        ]
      },
      {
        name: "admin+SubtaskCenter-[type]+[id]",
        path: "SubtaskCenter-:type()/:id()",
        meta: __nuxt_page_meta$t || {},
        component: () => import('./_id_-C_V75Sqs.mjs')
      },
      {
        name: "admin+SubtaskCenter",
        path: "SubtaskCenter",
        meta: __nuxt_page_meta$s || {},
        component: () => import('./SubtaskCenter-hGZZhPqZ.mjs')
      },
      {
        name: "admin+SubtaskContainer",
        path: "SubtaskContainer",
        meta: __nuxt_page_meta$r || {},
        component: () => import('./SubtaskContainer-CvaqQ5ut.mjs')
      },
      {
        name: "admin+TaskCenter-[type]+[id]",
        path: "TaskCenter-:type()/:id()",
        meta: __nuxt_page_meta$q || {},
        component: () => import('./_id_-BslU1Tce.mjs')
      },
      {
        name: "admin+TaskCenter",
        path: "TaskCenter",
        meta: __nuxt_page_meta$p || {},
        component: () => import('./TaskCenter-fTtXbjTz.mjs')
      },
      {
        name: "admin+TaskContainer",
        path: "TaskContainer",
        meta: __nuxt_page_meta$o || {},
        component: () => import('./TaskContainer-DYQhspZM.mjs')
      },
      {
        name: "admin+UsersCenter",
        path: "UsersCenter",
        meta: __nuxt_page_meta$n || {},
        component: () => import('./UsersCenter-BNxJYANh.mjs')
      }
    ]
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-DyEo91aX.mjs')
  },
  {
    name: "leader",
    path: "/leader",
    component: () => import('./leader-CgJf0NAE.mjs'),
    children: [
      {
        name: "leader+index",
        path: "",
        meta: __nuxt_page_meta$m || {},
        component: () => import('./index-w7aacI5L.mjs')
      },
      {
        name: "leader+MessageCenter",
        path: "MessageCenter",
        meta: __nuxt_page_meta$i || {},
        component: () => import('./MessageCenter-Y_qBDCVb.mjs'),
        children: [
          {
            name: "leader+MessageCenter+Notifications",
            path: "Notifications",
            meta: __nuxt_page_meta$l || {},
            component: () => import('./Notifications-BurRlAFD.mjs')
          },
          {
            name: "leader+MessageCenter+Todos-[type]+[id]",
            path: "Todos-:type()/:id()",
            meta: __nuxt_page_meta$k || {},
            component: () => import('./_id_-BSl3ULoh.mjs')
          },
          {
            name: "leader+MessageCenter+Todos",
            path: "Todos",
            meta: __nuxt_page_meta$j || {},
            component: () => import('./Todos-FSufGcm_.mjs')
          }
        ]
      },
      {
        name: "leader+SubtaskCenter-[type]+[id]",
        path: "SubtaskCenter-:type()/:id()",
        meta: __nuxt_page_meta$h || {},
        component: () => import('./_id_-DVJ-_7_0.mjs')
      },
      {
        name: "leader+SubtaskCenter",
        path: "SubtaskCenter",
        meta: __nuxt_page_meta$g || {},
        component: () => import('./SubtaskCenter-BPEz2zUC.mjs')
      },
      {
        name: "leader+SubtaskContainer",
        path: "SubtaskContainer",
        meta: __nuxt_page_meta$f || {},
        component: () => import('./SubtaskContainer-CSCQgFCc.mjs')
      },
      {
        name: "leader+TaskCenter-[type]+[id]",
        path: "TaskCenter-:type()/:id()",
        meta: __nuxt_page_meta$e || {},
        component: () => import('./_id_-GCmJMX5o.mjs')
      },
      {
        name: "leader+TaskCenter",
        path: "TaskCenter",
        meta: __nuxt_page_meta$d || {},
        component: () => import('./TaskCenter-DwVk_-iR.mjs')
      },
      {
        name: "leader+TaskContainer",
        path: "TaskContainer",
        meta: __nuxt_page_meta$c || {},
        component: () => import('./TaskContainer-DTJt4tf1.mjs')
      },
      {
        name: "leader+UsersCenter",
        path: "UsersCenter",
        meta: __nuxt_page_meta$b || {},
        component: () => import('./UsersCenter-BTCz5IVX.mjs')
      }
    ]
  },
  {
    name: "user",
    path: "/user",
    component: () => import('./user-DHd7dyIz.mjs'),
    children: [
      {
        name: "user+index",
        path: "",
        meta: __nuxt_page_meta$a || {},
        component: () => import('./index-jEkazx2F.mjs')
      },
      {
        name: "user+MessageCenter",
        path: "MessageCenter",
        meta: __nuxt_page_meta$6 || {},
        component: () => import('./MessageCenter-CDg8WXhu.mjs'),
        children: [
          {
            name: "user+MessageCenter+Notifications",
            path: "Notifications",
            meta: __nuxt_page_meta$9 || {},
            component: () => import('./Notifications-azu0IZSg.mjs')
          },
          {
            name: "user+MessageCenter+Todos-[type]+[id]",
            path: "Todos-:type()/:id()",
            meta: __nuxt_page_meta$8 || {},
            component: () => import('./_id_-OVhp_J9_.mjs')
          },
          {
            name: "user+MessageCenter+Todos",
            path: "Todos",
            meta: __nuxt_page_meta$7 || {},
            component: () => import('./Todos-DSek9eRw.mjs')
          }
        ]
      },
      {
        name: "user+SubtaskCenter-[type]+[id]",
        path: "SubtaskCenter-:type()/:id()",
        meta: __nuxt_page_meta$5 || {},
        component: () => import('./_id_-BfWSM5EP.mjs')
      },
      {
        name: "user+SubtaskCenter",
        path: "SubtaskCenter",
        meta: __nuxt_page_meta$4 || {},
        component: () => import('./SubtaskCenter-48gLpvNL.mjs')
      },
      {
        name: "user+SubtaskContainer",
        path: "SubtaskContainer",
        meta: __nuxt_page_meta$3 || {},
        component: () => import('./SubtaskContainer-Bbn7azMj.mjs')
      },
      {
        name: "user+TaskCenter-[type]+[id]",
        path: "TaskCenter-:type()/:id()",
        meta: __nuxt_page_meta$2 || {},
        component: () => import('./_id_-C0yE0SQo.mjs')
      },
      {
        name: "user+TaskCenter",
        path: "TaskCenter",
        meta: __nuxt_page_meta$1 || {},
        component: () => import('./TaskCenter-D57UJxfr.mjs')
      },
      {
        name: "user+TaskContainer",
        path: "TaskContainer",
        meta: __nuxt_page_meta || {},
        component: () => import('./TaskContainer-BztuW_VV.mjs')
      }
    ]
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a2;
    return props ? h(component, props, slots) : (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a2, _b2;
      return comp.components && comp.components.default === ((_b2 = (_a2 = from.matched[index]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a2;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a2 = useRouter().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error2 = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error2));
      });
      return false;
    }
  });
});
const isVue2 = false;
/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop$1 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions: actions2, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production"))) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions2, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production"))) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop$1
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error2) {
        triggerSubscriptions(onErrorCallbackList, error2);
        throw error2;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error2) => {
          triggerSubscriptions(onErrorCallbackList, error2);
          return Promise.reject(error2);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval$1 = () => {
  console.error(intervalError);
};
const useUserStore = /* @__PURE__ */ defineStore("user", () => {
  const users = ref([]);
  const config2 = /* @__PURE__ */ useRuntimeConfig();
  const apiUrl = config2.public.apiUrl;
  const intervalId = ref(null);
  const user = ref(null);
  function setUser(newUser) {
    user.value = newUser;
  }
  function setUsers(newUsers) {
    users.value = newUsers;
  }
  function resetUser() {
    user.value = null;
  }
  function resetUsers() {
    users.value = [];
  }
  async function fetchAllUsers() {
    try {
      const response = await fetch(`${apiUrl}/api/users/all`, {
        method: "GET"
      });
      if (!response.ok) throw new Error("Failed to fetch all tasks");
      const data = await response.json();
      if (data) setUsers(data);
    } catch (err) {
      console.error(err);
    }
  }
  function startAutoRefresh(interval = 6e4) {
    fetchAllUsers();
    intervalId.value = setInterval$1();
  }
  function stopAutoRefresh() {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
      intervalId.value = null;
      resetUser();
      resetUsers();
    }
  }
  const usersData = computed(() => {
    return users.value.filter((user2) => user2.permissions !== "admin" && user2.platformType === "Intranet");
  });
  const leaderData = computed(() => {
    return users.value.filter((user2) => user2.permissions === "leader" && user2.platformType === "Intranet");
  });
  const userData = computed(() => {
    return user.value;
  });
  const nwadmin = computed(() => {
    return users.value.filter((user2) => user2.permissions === "admin" && user2.platformType === "Intranet")[0];
  });
  const gysadmin = computed(() => {
    return users.value.filter((user2) => user2.permissions === "admin" && user2.platformType === "Supplier")[0];
  });
  function getUserById(id) {
    return users.value.filter((user2) => user2.id === id)[0].name;
  }
  const name = computed(() => {
    var _a2;
    return ((_a2 = userData.value) == null ? void 0 : _a2.name) || "姓名";
  });
  const role = computed(() => {
    var _a2;
    return ((_a2 = userData.value) == null ? void 0 : _a2.role) || "权限";
  });
  return {
    name,
    role,
    nwadmin,
    gysadmin,
    userData,
    usersData,
    leaderData,
    setUser,
    resetUser,
    setUsers,
    resetUsers,
    fetchAllUsers,
    startAutoRefresh,
    stopAutoRefresh,
    getUserById
  };
}, {
  persist: true
});
const cfg0 = defineAppConfig({
  // 管理员路由
  admin: "/admin",
  // 用户路由
  user: "/user",
  // 领导路由
  leader: "/leader",
  // 登录路由
  login: "/"
});
const inlineConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 500
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const auth_45global = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  var _a2;
  const userStore = useUserStore();
  const appConfig = useAppConfig();
  const userRole = (_a2 = userStore.user) == null ? void 0 : _a2.permissions;
  if (userRole === "admin") {
    if (!to.path.startsWith(appConfig.admin)) {
      return navigateTo(appConfig.admin);
    }
  } else if (userRole === "leader") {
    if (!to.path.startsWith(appConfig.leader)) {
      return navigateTo(appConfig.leader);
    }
  } else if (userRole === "user") {
    if (!to.path.startsWith(appConfig.user)) {
      return navigateTo(appConfig.user);
    }
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  auth_45global,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a2, _b2, _c2;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a3, _b3, _c3, _d;
      if (((_b3 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b3.default) === ((_d = (_c3 = from.matched[0]) == null ? void 0 : _c3.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b2 = nuxtApp.ssrContext) == null ? void 0 : _b2.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.matched.length === 0) {
          await nuxtApp.runWithContext(() => showError(createError$1({
            statusCode: 404,
            fatal: false,
            statusMessage: `Page not found: ${to.fullPath}`,
            data: {
              path: to.fullPath
            }
          })));
        } else if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c2 = nuxtApp.ssrContext) == null ? void 0 : _c2.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a3, _b3;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a3 = nuxtApp.ssrContext) == null ? void 0 : _a3.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? void 0 : _b3.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce2) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce2;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a2;
  return (_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  {
    return _headers;
  }
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key) => key === name);
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a2 = opts.default) == null ? void 0 : _a2.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = pinia.state.value;
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const LazyIcon = defineAsyncComponent(() => import('./index-PqHP4zmq.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["Icon", LazyIcon]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const element_plus_teleports_plugin_h4Dmekbj62 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:rendered", (ctx) => {
    var _a2;
    if ((_a2 = ctx.ssrContext) == null ? void 0 : _a2.teleports) {
      ctx.ssrContext.teleports = renderTeleports(ctx.ssrContext.teleports);
    }
  });
});
function renderTeleports(teleports) {
  const body = Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith("#el-popper-container-") || [].includes(key)) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`;
    }
    return all;
  }, teleports.body || "");
  return { ...teleports, body };
}
var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function computedEager(fn, options) {
  var _a2;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, __spreadProps$6(__spreadValues$9({}, options), {
    flush: (_a2 = void 0) != null ? _a2 : "sync"
  }));
  return readonly(result);
}
const isClient = false;
const isDef = (val) => typeof val !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function createFilterWrapper(filter2, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter2 = (invoke2) => {
    const duration = resolveUnref(ms);
    const maxDuration = resolveUnref(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke2());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke2());
      }, duration);
    });
  };
  return filter2;
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function refDebounced(value, ms = 200, options = {}) {
  const debounced = ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear2() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear2();
  }
  function start(...args) {
    clear2();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register2 = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events2.flatMap((event) => {
      return listeners.map((listener) => register2(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a2;
      const el = unrefElement(target);
      if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, mutationOptions = __objRest$1(_a2, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useVModel(props, key, emit, options = {}) {
  var _a2, _b2, _c2;
  const {
    clone: clone2 = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue
  } = options;
  const vm = getCurrentInstance();
  const _emit = (vm == null ? void 0 : vm.emit) || ((_a2 = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a2.bind(vm)) || ((_c2 = (_b2 = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b2.$emit) == null ? void 0 : _c2.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  event = eventName || event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone2 ? val : isFunction(clone2) ? clone2(val) : cloneFnJSON(val);
  const getValue2 = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  if (passive) {
    const initialValue = getValue2();
    const proxy = ref(initialValue);
    watch(() => props[key], (v) => proxy.value = cloneFn(v));
    watch(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, { deep });
    return proxy;
  } else {
    return computed({
      get() {
        return getValue2();
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}
const isUndefined = (val) => val === void 0;
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject$2(val) && !Object.keys(val).length;
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isPropAbsent = (prop) => isNil(prop);
const isStringNumber = (val) => {
  if (!isString$1(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
const keysOf = (arr) => Object.keys(arr);
const entriesOf = (arr) => Object.entries(arr);
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get$2(obj, path, defaultValue);
    },
    set value(val) {
      set$1(obj, path, val);
    }
  };
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError$1(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
}
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
const getStyle = (element, styleName) => {
  return "";
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString$1(value)) {
    return value;
  }
}
/*! Element Plus Icons Vue v2.3.1 */
var arrow_down_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
});
var arrow_down_default = arrow_down_vue_vue_type_script_setup_true_lang_default;
var arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_left_default = arrow_left_vue_vue_type_script_setup_true_lang_default;
var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
var arrow_up_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
});
var arrow_up_default = arrow_up_vue_vue_type_script_setup_true_lang_default;
var calendar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Calendar",
  __name: "calendar",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64"
      })
    ]));
  }
});
var calendar_default = calendar_vue_vue_type_script_setup_true_lang_default;
var caret_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CaretRight",
  __name: "caret-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
});
var caret_right_default = caret_right_vue_vue_type_script_setup_true_lang_default;
var check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Check",
  __name: "check",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
});
var check_default = check_vue_vue_type_script_setup_true_lang_default;
var circle_check_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleCheckFilled",
  __name: "circle-check-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
});
var circle_check_filled_default = circle_check_filled_vue_vue_type_script_setup_true_lang_default;
var circle_check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleCheck",
  __name: "circle-check",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
});
var circle_check_default = circle_check_vue_vue_type_script_setup_true_lang_default;
var circle_close_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
});
var circle_close_filled_default = circle_close_filled_vue_vue_type_script_setup_true_lang_default;
var circle_close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleClose",
  __name: "circle-close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
});
var circle_close_default = circle_close_vue_vue_type_script_setup_true_lang_default;
var clock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Clock",
  __name: "clock",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"
      })
    ]));
  }
});
var clock_default = clock_vue_vue_type_script_setup_true_lang_default;
var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Close",
  __name: "close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
});
var close_default = close_vue_vue_type_script_setup_true_lang_default;
var d_arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
});
var d_arrow_left_default = d_arrow_left_vue_vue_type_script_setup_true_lang_default;
var d_arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
});
var d_arrow_right_default = d_arrow_right_vue_vue_type_script_setup_true_lang_default;
var delete_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Delete",
  __name: "delete",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
});
var delete_default = delete_vue_vue_type_script_setup_true_lang_default;
var document_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Document",
  __name: "document",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"
      })
    ]));
  }
});
var document_default = document_vue_vue_type_script_setup_true_lang_default;
var hide_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Hide",
  __name: "hide",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
});
var hide_default = hide_vue_vue_type_script_setup_true_lang_default;
var info_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "InfoFilled",
  __name: "info-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
});
var info_filled_default = info_filled_vue_vue_type_script_setup_true_lang_default;
var key_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Key",
  __name: "key",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064M512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384"
      })
    ]));
  }
});
var key_default = key_vue_vue_type_script_setup_true_lang_default;
var loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Loading",
  __name: "loading",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
});
var loading_default = loading_vue_vue_type_script_setup_true_lang_default;
var more_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "More",
  __name: "more",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
});
var more_default = more_vue_vue_type_script_setup_true_lang_default;
var search_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Search",
  __name: "search",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
});
var search_default = search_vue_vue_type_script_setup_true_lang_default;
var success_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
});
var success_filled_default = success_filled_vue_vue_type_script_setup_true_lang_default;
var upload_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "UploadFilled",
  __name: "upload-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z"
      })
    ]));
  }
});
var upload_filled_default = upload_filled_vue_vue_type_script_setup_true_lang_default;
var user_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "User",
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
});
var user_default = user_vue_vue_type_script_setup_true_lang_default;
var view_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "View",
  __name: "view",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
});
var view_default = view_vue_vue_type_script_setup_true_lang_default;
var warning_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
});
var warning_filled_default = warning_filled_vue_vue_type_script_setup_true_lang_default;
var zoom_in_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ZoomIn",
  __name: "zoom-in",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"
      })
    ]));
  }
});
var zoom_in_default = zoom_in_vue_vue_type_script_setup_true_lang_default;
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject$2(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject$2(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const CloseComponents = {
  Close: close_default
};
const TypeComponents = {
  Close: close_default,
  SuccessFilled: success_filled_default,
  InfoFilled: info_filled_default,
  WarningFilled: warning_filled_default,
  CircleCloseFilled: circle_close_filled_default
};
const TypeComponentsMap = {
  success: success_filled_default,
  warning: warning_filled_default,
  error: circle_close_filled_default,
  info: info_filled_default
};
const ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const componentSizes = ["", "default", "small", "large"];
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace);
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useIdInjection = () => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  const namespace = useGetDerivedNamespace();
  const idRef = computedEager(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
const initial = {
  current: 0
};
const zIndex = ref(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0;
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!inject(ZINDEX_INJECTION_KEY)) ;
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
const element_plus_injection_plugin_1RNPi6ogby = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, { "prefix": 1024, "current": 0 }).provide(ZINDEX_INJECTION_KEY, { "current": 0 });
});
const slidOverInjectionKey = Symbol("nuxt-ui.slideover");
const slideovers_X7whXyrIWR = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const slideoverState = shallowRef({
    component: "div",
    props: {}
  });
  nuxtApp.vueApp.provide(slidOverInjectionKey, slideoverState);
});
const modalInjectionKey = Symbol("nuxt-ui.modal");
const modals_oqljskDzoR = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const modalState = shallowRef({
    component: "div",
    props: {}
  });
  nuxtApp.vueApp.provide(modalInjectionKey, modalState);
});
function get$1(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
extendTailwindMerge({
  extend: {
    classGroups: {
      icons: [(classPart) => /^i-/.test(classPart)]
    }
  }
});
const rxHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
function parseConfigValue(value) {
  return rxHex.test(value) ? hexToRgb(value) : value;
}
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(_, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = rxHex.exec(hex);
  return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : null;
}
const _inherit = "inherit";
const _current = "currentColor";
const _transparent = "transparent";
const _black = "#000";
const _white = "#fff";
const _slate = { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a", "950": "#020617" };
const _gray = { "50": "rgb(var(--color-gray-50) / <alpha-value>)", "100": "rgb(var(--color-gray-100) / <alpha-value>)", "200": "rgb(var(--color-gray-200) / <alpha-value>)", "300": "rgb(var(--color-gray-300) / <alpha-value>)", "400": "rgb(var(--color-gray-400) / <alpha-value>)", "500": "rgb(var(--color-gray-500) / <alpha-value>)", "600": "rgb(var(--color-gray-600) / <alpha-value>)", "700": "rgb(var(--color-gray-700) / <alpha-value>)", "800": "rgb(var(--color-gray-800) / <alpha-value>)", "900": "rgb(var(--color-gray-900) / <alpha-value>)", "950": "rgb(var(--color-gray-950) / <alpha-value>)" };
const _zinc = { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b", "950": "#09090b" };
const _neutral = { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717", "950": "#0a0a0a" };
const _stone = { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917", "950": "#0c0a09" };
const _red = { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d", "950": "#450a0a" };
const _orange = { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12", "950": "#431407" };
const _amber = { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f", "950": "#451a03" };
const _yellow = { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12", "950": "#422006" };
const _lime = { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314", "950": "#1a2e05" };
const _green = { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d", "950": "#052e16" };
const _emerald = { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b", "950": "#022c22" };
const _teal = { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a", "950": "#042f2e" };
const _cyan = { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63", "950": "#083344" };
const _sky = { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e", "950": "#082f49" };
const _blue = { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" };
const _indigo = { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81", "950": "#1e1b4b" };
const _violet = { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95", "950": "#2e1065" };
const _purple = { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87", "950": "#3b0764" };
const _fuchsia = { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75", "950": "#4a044e" };
const _pink = { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843", "950": "#500724" };
const _rose = { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337", "950": "#4c0519" };
const _primary = { "50": "rgb(var(--color-primary-50) / <alpha-value>)", "100": "rgb(var(--color-primary-100) / <alpha-value>)", "200": "rgb(var(--color-primary-200) / <alpha-value>)", "300": "rgb(var(--color-primary-300) / <alpha-value>)", "400": "rgb(var(--color-primary-400) / <alpha-value>)", "500": "rgb(var(--color-primary-500) / <alpha-value>)", "600": "rgb(var(--color-primary-600) / <alpha-value>)", "700": "rgb(var(--color-primary-700) / <alpha-value>)", "800": "rgb(var(--color-primary-800) / <alpha-value>)", "900": "rgb(var(--color-primary-900) / <alpha-value>)", "950": "rgb(var(--color-primary-950) / <alpha-value>)", "DEFAULT": "rgb(var(--color-primary-DEFAULT) / <alpha-value>)" };
const _cool = { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827", "950": "#030712" };
const config = { "inherit": _inherit, "current": _current, "transparent": _transparent, "black": _black, "white": _white, "slate": _slate, "gray": _gray, "zinc": _zinc, "neutral": _neutral, "stone": _stone, "red": _red, "orange": _orange, "amber": _amber, "yellow": _yellow, "lime": _lime, "green": _green, "emerald": _emerald, "teal": _teal, "cyan": _cyan, "sky": _sky, "blue": _blue, "indigo": _indigo, "violet": _violet, "purple": _purple, "fuchsia": _fuchsia, "pink": _pink, "rose": _rose, "primary": _primary, "cool": _cool };
const colors_ETtiVmZNmO = /* @__PURE__ */ defineNuxtPlugin(() => {
  const appConfig = useAppConfig();
  useNuxtApp();
  const root = computed(() => {
    const primary = get$1(config, appConfig.ui.primary);
    const gray = get$1(config, appConfig.ui.gray);
    if (!primary) {
      console.warn(`[@nuxt/ui] Primary color '${appConfig.ui.primary}' not found in Tailwind config`);
    }
    if (!gray) {
      console.warn(`[@nuxt/ui] Gray color '${appConfig.ui.gray}' not found in Tailwind config`);
    }
    return `:root {
${Object.entries(primary || config.green).map(([key, value]) => `--color-primary-${key}: ${parseConfigValue(value)};`).join("\n")}
--color-primary-DEFAULT: var(--color-primary-500);

${Object.entries(gray || config.cool).map(([key, value]) => `--color-gray-${key}: ${parseConfigValue(value)};`).join("\n")}
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}
`;
  });
  const headData = {
    style: [{
      innerHTML: () => root.value,
      tagPriority: -2,
      id: "nuxt-ui-colors"
    }]
  };
  useHead(headData);
});
const preference = "light";
const plugin_server_ano7jnMEqi = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a2;
  const colorMode = ((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext) ? ref({}) : useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const plugin_WLsn00x1qh = /* @__PURE__ */ defineNuxtPlugin({
  name: "@nuxt/icon",
  setup() {
    var _a2, _b2;
    const config2 = /* @__PURE__ */ useRuntimeConfig();
    const options = useAppConfig().icon;
    _api.setFetch($fetch.native);
    disableCache("all");
    const resources = [];
    if (options.provider === "server") {
      const baseURL2 = ((_b2 = (_a2 = config2.app) == null ? void 0 : _a2.baseURL) == null ? void 0 : _b2.replace(/\/$/, "")) ?? "";
      resources.push(baseURL2 + (options.localApiEndpoint || "/api/_nuxt_icon"));
      if (options.fallbackToApi === true || options.fallbackToApi === "client-only") {
        resources.push(options.iconifyApiEndpoint);
      }
    } else {
      resources.push(options.iconifyApiEndpoint);
    }
    addAPIProvider("", { resources });
  }
});
const REGEX_CRAWLER = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/);
const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function isMobile(userAgent) {
  return REGEX_MOBILE1.test(userAgent) || REGEX_MOBILE2.test(userAgent.slice(0, 4));
}
function isMobileOrTablet(userAgent) {
  return REGEX_MOBILE_OR_TABLET1.test(userAgent) || REGEX_MOBILE_OR_TABLET2.test(userAgent.slice(0, 4));
}
function isIos(userAgent) {
  return /iPad|iPhone|iPod/.test(userAgent);
}
function isAndroid(userAgent) {
  return /android/i.test(userAgent);
}
function isWindows(userAgent) {
  return /Windows/.test(userAgent);
}
function isMacOS(userAgent) {
  return /Mac OS X/.test(userAgent);
}
const browsers = [
  { name: "Samsung", regex: /SamsungBrowser/i },
  { name: "Edge", regex: /edg(?:[ea]|ios)?\//i },
  { name: "Firefox", regex: /firefox|iceweasel|fxios/i },
  { name: "Chrome", regex: /chrome|crios|crmo/i },
  { name: "Safari", regex: /safari|applewebkit/i }
];
function getBrowserName(userAgent) {
  for (const browser of browsers) {
    if (browser.regex.test(userAgent)) {
      return browser.name;
    }
  }
  return "";
}
function generateFlags(userAgent, headers = {}) {
  let mobile = false;
  let mobileOrTablet = false;
  let ios = false;
  let android = false;
  if (userAgent === "Amazon CloudFront") {
    if (headers["cloudfront-is-mobile-viewer"] === "true") {
      mobile = true;
      mobileOrTablet = true;
    }
    if (headers["cloudfront-is-tablet-viewer"] === "true") {
      mobile = false;
      mobileOrTablet = true;
    }
    if (headers["cloudfront-is-desktop-viewer"] === "true") {
      mobile = false;
      mobileOrTablet = false;
    }
    if (headers["cloudfront-is-ios-viewer"] === "true") {
      ios = true;
    }
    if (headers["cloudfront-is-android-viewer"] === "true") {
      android = true;
    }
  } else if (headers && headers["cf-device-type"]) {
    switch (headers["cf-device-type"]) {
      case "mobile":
        mobile = true;
        mobileOrTablet = true;
        break;
      case "tablet":
        mobile = false;
        mobileOrTablet = true;
        break;
      case "desktop":
        mobile = false;
        mobileOrTablet = false;
        break;
    }
  } else {
    mobile = isMobile(userAgent);
    mobileOrTablet = isMobileOrTablet(userAgent);
    ios = isIos(userAgent);
    android = isAndroid(userAgent);
  }
  const windows = isWindows(userAgent);
  const macOS = isMacOS(userAgent);
  const browserName = getBrowserName(userAgent);
  const isSafari = browserName === "Safari";
  const isFirefox = browserName === "Firefox";
  const isEdge = browserName === "Edge";
  const isChrome = browserName === "Chrome";
  const isSamsung = browserName === "Samsung";
  const isCrawler = REGEX_CRAWLER.test(userAgent);
  return {
    userAgent,
    isMobile: mobile,
    isMobileOrTablet: mobileOrTablet,
    isTablet: !mobile && mobileOrTablet,
    isDesktop: !mobileOrTablet,
    isIos: ios,
    isAndroid: android,
    isWindows: windows,
    isMacOS: macOS,
    isApple: macOS || ios,
    isDesktopOrTablet: !mobile,
    isSafari,
    isFirefox,
    isEdge,
    isChrome,
    isSamsung,
    isCrawler
  };
}
const plugin_ghbUAjaD3n = /* @__PURE__ */ defineNuxtPlugin(() => {
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const defaultUserAgent = runtimeConfig.public.device.defaultUserAgent;
  let flags;
  {
    const headers = useRequestHeaders();
    const userAgent = headers["user-agent"] || defaultUserAgent;
    flags = reactive(generateFlags(userAgent, headers));
  }
  return {
    provide: {
      device: flags
    }
  };
});
function usePersistedstateCookies(cookieOptions) {
  return {
    getItem: (key) => (cookieOptions == null ? void 0 : cookieOptions.readonly) ? useCookie(key, {
      ...cookieOptions,
      encode: encodeURIComponent,
      decode: decodeURIComponent,
      readonly: true
    }).value : useCookie(key, {
      ...cookieOptions,
      encode: encodeURIComponent,
      decode: decodeURIComponent,
      readonly: false
    }).value,
    setItem: (key, value) => {
      if (cookieOptions == null ? void 0 : cookieOptions.readonly)
        throw new Error("Cannot set a readonly cookie.");
      useCookie(key, {
        ...cookieOptions,
        encode: encodeURIComponent,
        decode: decodeURIComponent,
        readonly: false
      }).value = value;
    }
  };
}
function usePersistedstateLocalStorage() {
  return {
    getItem: (key) => {
      return !useNuxtApp().ssrContext ? localStorage.getItem(key) : null;
    },
    setItem: (key, value) => {
      if (!useNuxtApp().ssrContext)
        localStorage.setItem(key, value);
    }
  };
}
function usePersistedstateSessionStorage() {
  return {
    getItem: (key) => {
      return !useNuxtApp().ssrContext ? sessionStorage.getItem(key) : null;
    },
    setItem: (key, value) => {
      if (!useNuxtApp().ssrContext)
        sessionStorage.setItem(key, value);
    }
  };
}
const persistedState = {
  localStorage: usePersistedstateLocalStorage(),
  sessionStorage: usePersistedstateSessionStorage(),
  cookies: usePersistedstateCookies(),
  cookiesWithOptions: usePersistedstateCookies
};
const plugin_AUP22rrBAc = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const {
    cookieOptions,
    debug,
    storage
  } = (/* @__PURE__ */ useRuntimeConfig()).public.persistedState;
  const pinia = nuxtApp.$pinia;
  pinia.use(createPersistedState({
    storage: storage === "cookies" ? persistedState.cookiesWithOptions(cookieOptions) : persistedState[storage],
    debug
  }));
});
var RADIAN_EPSILON = 1e-4;
var ROUND_SUPPORTED_PRECISION_MAX = 20;
function _trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
function linearMap(val, domain, range, clamp2) {
  var d0 = domain[0];
  var d1 = domain[1];
  var r0 = range[0];
  var r1 = range[1];
  var subDomain = d1 - d0;
  var subRange = r1 - r0;
  if (subDomain === 0) {
    return subRange === 0 ? r0 : (r0 + r1) / 2;
  }
  if (clamp2) {
    if (subDomain > 0) {
      if (val <= d0) {
        return r0;
      } else if (val >= d1) {
        return r1;
      }
    } else {
      if (val >= d0) {
        return r0;
      } else if (val <= d1) {
        return r1;
      }
    }
  } else {
    if (val === d0) {
      return r0;
    }
    if (val === d1) {
      return r1;
    }
  }
  return (val - d0) / subDomain * subRange + r0;
}
function parsePercent(percent, all) {
  switch (percent) {
    case "center":
    case "middle":
      percent = "50%";
      break;
    case "left":
    case "top":
      percent = "0%";
      break;
    case "right":
    case "bottom":
      percent = "100%";
      break;
  }
  if (zrUtil.isString(percent)) {
    if (_trim(percent).match(/%$/)) {
      return parseFloat(percent) / 100 * all;
    }
    return parseFloat(percent);
  }
  return percent == null ? NaN : +percent;
}
function round(x, precision, returnStr) {
  if (precision == null) {
    precision = 10;
  }
  precision = Math.min(Math.max(0, precision), ROUND_SUPPORTED_PRECISION_MAX);
  x = (+x).toFixed(precision);
  return returnStr ? x : +x;
}
function getPrecision(val) {
  val = +val;
  if (isNaN(val)) {
    return 0;
  }
  if (val > 1e-14) {
    var e = 1;
    for (var i = 0; i < 15; i++, e *= 10) {
      if (Math.round(val * e) / e === val) {
        return i;
      }
    }
  }
  return getPrecisionSafe(val);
}
function getPrecisionSafe(val) {
  var str = val.toString().toLowerCase();
  var eIndex = str.indexOf("e");
  var exp = eIndex > 0 ? +str.slice(eIndex + 1) : 0;
  var significandPartLen = eIndex > 0 ? eIndex : str.length;
  var dotIndex = str.indexOf(".");
  var decimalPartLen = dotIndex < 0 ? 0 : significandPartLen - 1 - dotIndex;
  return Math.max(0, decimalPartLen - exp);
}
function getPixelPrecision(dataExtent, pixelExtent) {
  var log2 = Math.log;
  var LN10 = Math.LN10;
  var dataQuantity = Math.floor(log2(dataExtent[1] - dataExtent[0]) / LN10);
  var sizeQuantity = Math.round(log2(Math.abs(pixelExtent[1] - pixelExtent[0])) / LN10);
  var precision = Math.min(Math.max(-dataQuantity + sizeQuantity, 0), 20);
  return !isFinite(precision) ? 20 : precision;
}
function getPercentSeats(valueList, precision) {
  var sum = zrUtil.reduce(valueList, function(acc, val) {
    return acc + (isNaN(val) ? 0 : val);
  }, 0);
  if (sum === 0) {
    return [];
  }
  var digits = Math.pow(10, precision);
  var votesPerQuota = zrUtil.map(valueList, function(val) {
    return (isNaN(val) ? 0 : val) / sum * digits * 100;
  });
  var targetSeats = digits * 100;
  var seats = zrUtil.map(votesPerQuota, function(votes) {
    return Math.floor(votes);
  });
  var currentSum = zrUtil.reduce(seats, function(acc, val) {
    return acc + val;
  }, 0);
  var remainder = zrUtil.map(votesPerQuota, function(votes, idx) {
    return votes - seats[idx];
  });
  while (currentSum < targetSeats) {
    var max = Number.NEGATIVE_INFINITY;
    var maxId = null;
    for (var i = 0, len = remainder.length; i < len; ++i) {
      if (remainder[i] > max) {
        max = remainder[i];
        maxId = i;
      }
    }
    ++seats[maxId];
    remainder[maxId] = 0;
    ++currentSum;
  }
  return zrUtil.map(seats, function(seat) {
    return seat / digits;
  });
}
function addSafe(val0, val1) {
  var maxPrecision = Math.max(getPrecision(val0), getPrecision(val1));
  var sum = val0 + val1;
  return maxPrecision > ROUND_SUPPORTED_PRECISION_MAX ? sum : round(sum, maxPrecision);
}
function remRadian(radian) {
  var pi2 = Math.PI * 2;
  return (radian % pi2 + pi2) % pi2;
}
function isRadianAroundZero(val) {
  return val > -RADIAN_EPSILON && val < RADIAN_EPSILON;
}
var TIME_REG = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function parseDate(value) {
  if (value instanceof Date) {
    return value;
  } else if (zrUtil.isString(value)) {
    var match = TIME_REG.exec(value);
    if (!match) {
      return /* @__PURE__ */ new Date(NaN);
    }
    if (!match[8]) {
      return new Date(+match[1], +(match[2] || 1) - 1, +match[3] || 1, +match[4] || 0, +(match[5] || 0), +match[6] || 0, match[7] ? +match[7].substring(0, 3) : 0);
    } else {
      var hour = +match[4] || 0;
      if (match[8].toUpperCase() !== "Z") {
        hour -= +match[8].slice(0, 3);
      }
      return new Date(Date.UTC(+match[1], +(match[2] || 1) - 1, +match[3] || 1, hour, +(match[5] || 0), +match[6] || 0, match[7] ? +match[7].substring(0, 3) : 0));
    }
  } else if (value == null) {
    return /* @__PURE__ */ new Date(NaN);
  }
  return new Date(Math.round(value));
}
function quantity(val) {
  return Math.pow(10, quantityExponent(val));
}
function quantityExponent(val) {
  if (val === 0) {
    return 0;
  }
  var exp = Math.floor(Math.log(val) / Math.LN10);
  if (val / Math.pow(10, exp) >= 10) {
    exp++;
  }
  return exp;
}
function nice(val, round2) {
  var exponent = quantityExponent(val);
  var exp10 = Math.pow(10, exponent);
  var f = val / exp10;
  var nf;
  {
    if (f < 1.5) {
      nf = 1;
    } else if (f < 2.5) {
      nf = 2;
    } else if (f < 4) {
      nf = 3;
    } else if (f < 7) {
      nf = 5;
    } else {
      nf = 10;
    }
  }
  val = nf * exp10;
  return exponent >= -20 ? +val.toFixed(exponent < 0 ? -exponent : 0) : val;
}
function numericToNumber(val) {
  var valFloat = parseFloat(val);
  return valFloat == val && (valFloat !== 0 || !zrUtil.isString(val) || val.indexOf("x") <= 0) ? valFloat : NaN;
}
function isNumeric(val) {
  return !isNaN(numericToNumber(val));
}
function getRandomIdBase() {
  return Math.round(Math.random() * 9);
}
function getGreatestCommonDividor(a, b) {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDividor(b, a % b);
}
function getLeastCommonMultiple(a, b) {
  if (a == null) {
    return b;
  }
  if (b == null) {
    return a;
  }
  return a * b / getGreatestCommonDividor(a, b);
}
function throwError(msg) {
  throw new Error(msg);
}
function interpolateNumber(p0, p1, percent) {
  return (p1 - p0) * percent + p0;
}
var DUMMY_COMPONENT_NAME_PREFIX = "series\0";
var INTERNAL_COMPONENT_ID_PREFIX = "\0_ec_\0";
function normalizeToArray(value) {
  return value instanceof Array ? value : value == null ? [] : [value];
}
function defaultEmphasis(opt, key, subOpts) {
  if (opt) {
    opt[key] = opt[key] || {};
    opt.emphasis = opt.emphasis || {};
    opt.emphasis[key] = opt.emphasis[key] || {};
    for (var i = 0, len = subOpts.length; i < len; i++) {
      var subOptName = subOpts[i];
      if (!opt.emphasis[key].hasOwnProperty(subOptName) && opt[key].hasOwnProperty(subOptName)) {
        opt.emphasis[key][subOptName] = opt[key][subOptName];
      }
    }
  }
}
var TEXT_STYLE_OPTIONS = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function getDataItemValue(dataItem) {
  return isObject$3(dataItem) && !isArray$1(dataItem) && !(dataItem instanceof Date) ? dataItem.value : dataItem;
}
function isDataItemOption(dataItem) {
  return isObject$3(dataItem) && !(dataItem instanceof Array);
}
function mappingToExists(existings, newCmptOptions, mode) {
  var isNormalMergeMode = mode === "normalMerge";
  var isReplaceMergeMode = mode === "replaceMerge";
  var isReplaceAllMode = mode === "replaceAll";
  existings = existings || [];
  newCmptOptions = (newCmptOptions || []).slice();
  var existingIdIdxMap = createHashMap();
  each$3(newCmptOptions, function(cmptOption, index) {
    if (!isObject$3(cmptOption)) {
      newCmptOptions[index] = null;
      return;
    }
  });
  var result = prepareResult(existings, existingIdIdxMap, mode);
  if (isNormalMergeMode || isReplaceMergeMode) {
    mappingById(result, existings, existingIdIdxMap, newCmptOptions);
  }
  if (isNormalMergeMode) {
    mappingByName(result, newCmptOptions);
  }
  if (isNormalMergeMode || isReplaceMergeMode) {
    mappingByIndex(result, newCmptOptions, isReplaceMergeMode);
  } else if (isReplaceAllMode) {
    mappingInReplaceAllMode(result, newCmptOptions);
  }
  makeIdAndName(result);
  return result;
}
function prepareResult(existings, existingIdIdxMap, mode) {
  var result = [];
  if (mode === "replaceAll") {
    return result;
  }
  for (var index = 0; index < existings.length; index++) {
    var existing = existings[index];
    if (existing && existing.id != null) {
      existingIdIdxMap.set(existing.id, index);
    }
    result.push({
      existing: mode === "replaceMerge" || isComponentIdInternal(existing) ? null : existing,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return result;
}
function mappingById(result, existings, existingIdIdxMap, newCmptOptions) {
  each$3(newCmptOptions, function(cmptOption, index) {
    if (!cmptOption || cmptOption.id == null) {
      return;
    }
    var optionId = makeComparableKey(cmptOption.id);
    var existingIdx = existingIdIdxMap.get(optionId);
    if (existingIdx != null) {
      var resultItem = result[existingIdx];
      assert(!resultItem.newOption, 'Duplicated option on id "' + optionId + '".');
      resultItem.newOption = cmptOption;
      resultItem.existing = existings[existingIdx];
      newCmptOptions[index] = null;
    }
  });
}
function mappingByName(result, newCmptOptions) {
  each$3(newCmptOptions, function(cmptOption, index) {
    if (!cmptOption || cmptOption.name == null) {
      return;
    }
    for (var i = 0; i < result.length; i++) {
      var existing = result[i].existing;
      if (!result[i].newOption && existing && (existing.id == null || cmptOption.id == null) && !isComponentIdInternal(cmptOption) && !isComponentIdInternal(existing) && keyExistAndEqual("name", existing, cmptOption)) {
        result[i].newOption = cmptOption;
        newCmptOptions[index] = null;
        return;
      }
    }
  });
}
function mappingByIndex(result, newCmptOptions, brandNew) {
  each$3(newCmptOptions, function(cmptOption) {
    if (!cmptOption) {
      return;
    }
    var resultItem;
    var nextIdx = 0;
    while (
      // Be `!resultItem` only when `nextIdx >= result.length`.
      (resultItem = result[nextIdx]) && (resultItem.newOption || isComponentIdInternal(resultItem.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
      resultItem.existing && cmptOption.id != null && !keyExistAndEqual("id", cmptOption, resultItem.existing))
    ) {
      nextIdx++;
    }
    if (resultItem) {
      resultItem.newOption = cmptOption;
      resultItem.brandNew = brandNew;
    } else {
      result.push({
        newOption: cmptOption,
        brandNew,
        existing: null,
        keyInfo: null
      });
    }
    nextIdx++;
  });
}
function mappingInReplaceAllMode(result, newCmptOptions) {
  each$3(newCmptOptions, function(cmptOption) {
    result.push({
      newOption: cmptOption,
      brandNew: true,
      existing: null,
      keyInfo: null
    });
  });
}
function makeIdAndName(mapResult) {
  var idMap = createHashMap();
  each$3(mapResult, function(item) {
    var existing = item.existing;
    existing && idMap.set(existing.id, item);
  });
  each$3(mapResult, function(item) {
    var opt = item.newOption;
    assert(!opt || opt.id == null || !idMap.get(opt.id) || idMap.get(opt.id) === item, "id duplicates: " + (opt && opt.id));
    opt && opt.id != null && idMap.set(opt.id, item);
    !item.keyInfo && (item.keyInfo = {});
  });
  each$3(mapResult, function(item, index) {
    var existing = item.existing;
    var opt = item.newOption;
    var keyInfo = item.keyInfo;
    if (!isObject$3(opt)) {
      return;
    }
    keyInfo.name = opt.name != null ? makeComparableKey(opt.name) : existing ? existing.name : DUMMY_COMPONENT_NAME_PREFIX + index;
    if (existing) {
      keyInfo.id = makeComparableKey(existing.id);
    } else if (opt.id != null) {
      keyInfo.id = makeComparableKey(opt.id);
    } else {
      var idNum = 0;
      do {
        keyInfo.id = "\0" + keyInfo.name + "\0" + idNum++;
      } while (idMap.get(keyInfo.id));
    }
    idMap.set(keyInfo.id, item);
  });
}
function keyExistAndEqual(attr, obj1, obj2) {
  var key1 = convertOptionIdName(obj1[attr], null);
  var key2 = convertOptionIdName(obj2[attr], null);
  return key1 != null && key2 != null && key1 === key2;
}
function makeComparableKey(val) {
  return convertOptionIdName(val, "");
}
function convertOptionIdName(idOrName, defaultValue) {
  if (idOrName == null) {
    return defaultValue;
  }
  return isString$2(idOrName) ? idOrName : isNumber$1(idOrName) || isStringSafe(idOrName) ? idOrName + "" : defaultValue;
}
function isNameSpecified(componentModel) {
  var name = componentModel.name;
  return !!(name && name.indexOf(DUMMY_COMPONENT_NAME_PREFIX));
}
function isComponentIdInternal(cmptOption) {
  return cmptOption && cmptOption.id != null && makeComparableKey(cmptOption.id).indexOf(INTERNAL_COMPONENT_ID_PREFIX) === 0;
}
function setComponentTypeToKeyInfo(mappingResult, mainType, componentModelCtor) {
  each$3(mappingResult, function(item) {
    var newOption = item.newOption;
    if (isObject$3(newOption)) {
      item.keyInfo.mainType = mainType;
      item.keyInfo.subType = determineSubType(mainType, newOption, item.existing, componentModelCtor);
    }
  });
}
function determineSubType(mainType, newCmptOption, existComponent, componentModelCtor) {
  var subType = newCmptOption.type ? newCmptOption.type : existComponent ? existComponent.subType : componentModelCtor.determineSubType(mainType, newCmptOption);
  return subType;
}
function queryDataIndex(data, payload) {
  if (payload.dataIndexInside != null) {
    return payload.dataIndexInside;
  } else if (payload.dataIndex != null) {
    return isArray$1(payload.dataIndex) ? map$1(payload.dataIndex, function(value) {
      return data.indexOfRawIndex(value);
    }) : data.indexOfRawIndex(payload.dataIndex);
  } else if (payload.name != null) {
    return isArray$1(payload.name) ? map$1(payload.name, function(value) {
      return data.indexOfName(value);
    }) : data.indexOfName(payload.name);
  }
}
function makeInner() {
  var key = "__ec_inner_" + innerUniqueIndex++;
  return function(hostObj) {
    return hostObj[key] || (hostObj[key] = {});
  };
}
var innerUniqueIndex = getRandomIdBase();
function parseFinder(ecModel, finderInput, opt) {
  var _a2 = preParseFinder(finderInput, opt), mainTypeSpecified = _a2.mainTypeSpecified, queryOptionMap = _a2.queryOptionMap, others = _a2.others;
  var result = others;
  var defaultMainType = opt ? opt.defaultMainType : null;
  if (!mainTypeSpecified && defaultMainType) {
    queryOptionMap.set(defaultMainType, {});
  }
  queryOptionMap.each(function(queryOption, mainType) {
    var queryResult = queryReferringComponents(ecModel, mainType, queryOption, {
      useDefault: defaultMainType === mainType,
      enableAll: opt && opt.enableAll != null ? opt.enableAll : true,
      enableNone: opt && opt.enableNone != null ? opt.enableNone : true
    });
    result[mainType + "Models"] = queryResult.models;
    result[mainType + "Model"] = queryResult.models[0];
  });
  return result;
}
function preParseFinder(finderInput, opt) {
  var finder;
  if (isString$2(finderInput)) {
    var obj = {};
    obj[finderInput + "Index"] = 0;
    finder = obj;
  } else {
    finder = finderInput;
  }
  var queryOptionMap = createHashMap();
  var others = {};
  var mainTypeSpecified = false;
  each$3(finder, function(value, key) {
    if (key === "dataIndex" || key === "dataIndexInside") {
      others[key] = value;
      return;
    }
    var parsedKey = key.match(/^(\w+)(Index|Id|Name)$/) || [];
    var mainType = parsedKey[1];
    var queryType = (parsedKey[2] || "").toLowerCase();
    if (!mainType || !queryType || opt && opt.includeMainTypes && indexOf(opt.includeMainTypes, mainType) < 0) {
      return;
    }
    mainTypeSpecified = mainTypeSpecified || !!mainType;
    var queryOption = queryOptionMap.get(mainType) || queryOptionMap.set(mainType, {});
    queryOption[queryType] = value;
  });
  return {
    mainTypeSpecified,
    queryOptionMap,
    others
  };
}
var SINGLE_REFERRING = {
  useDefault: true,
  enableAll: false,
  enableNone: false
};
function queryReferringComponents(ecModel, mainType, userOption, opt) {
  opt = opt || SINGLE_REFERRING;
  var indexOption = userOption.index;
  var idOption = userOption.id;
  var nameOption = userOption.name;
  var result = {
    models: null,
    specified: indexOption != null || idOption != null || nameOption != null
  };
  if (!result.specified) {
    var firstCmpt = void 0;
    result.models = opt.useDefault && (firstCmpt = ecModel.getComponent(mainType)) ? [firstCmpt] : [];
    return result;
  }
  if (indexOption === "none" || indexOption === false) {
    assert(opt.enableNone, '`"none"` or `false` is not a valid value on index option.');
    result.models = [];
    return result;
  }
  if (indexOption === "all") {
    assert(opt.enableAll, '`"all"` is not a valid value on index option.');
    indexOption = idOption = nameOption = null;
  }
  result.models = ecModel.queryComponents({
    mainType,
    index: indexOption,
    id: idOption,
    name: nameOption
  });
  return result;
}
function setAttribute(dom, key, value) {
  dom.setAttribute ? dom.setAttribute(key, value) : dom[key] = value;
}
function getTooltipRenderMode(renderModeOption) {
  if (renderModeOption === "auto") {
    return env.domSupported ? "html" : "richText";
  } else {
    return renderModeOption || "html";
  }
}
function interpolateRawValues(data, precision, sourceValue, targetValue, percent) {
  var isAutoPrecision = precision == null || precision === "auto";
  if (targetValue == null) {
    return targetValue;
  }
  if (isNumber$1(targetValue)) {
    var value = interpolateNumber(sourceValue || 0, targetValue, percent);
    return round(value, isAutoPrecision ? Math.max(getPrecision(sourceValue || 0), getPrecision(targetValue)) : precision);
  } else if (isString$2(targetValue)) {
    return percent < 1 ? sourceValue : targetValue;
  } else {
    var interpolated = [];
    var leftArr = sourceValue;
    var rightArr = targetValue;
    var length_1 = Math.max(leftArr ? leftArr.length : 0, rightArr.length);
    for (var i = 0; i < length_1; ++i) {
      var info = data.getDimensionInfo(i);
      if (info && info.type === "ordinal") {
        interpolated[i] = (percent < 1 && leftArr ? leftArr : rightArr)[i];
      } else {
        var leftVal = leftArr && leftArr[i] ? leftArr[i] : 0;
        var rightVal = rightArr[i];
        var value = interpolateNumber(leftVal, rightVal, percent);
        interpolated[i] = round(value, isAutoPrecision ? Math.max(getPrecision(leftVal), getPrecision(rightVal)) : precision);
      }
    }
    return interpolated;
  }
}
var TYPE_DELIMITER = ".";
var IS_CONTAINER = "___EC__COMPONENT__CONTAINER___";
var IS_EXTENDED_CLASS = "___EC__EXTENDED_CLASS___";
function parseClassType(componentType) {
  var ret = {
    main: "",
    sub: ""
  };
  if (componentType) {
    var typeArr = componentType.split(TYPE_DELIMITER);
    ret.main = typeArr[0] || "";
    ret.sub = typeArr[1] || "";
  }
  return ret;
}
function checkClassType(componentType) {
  zrUtil.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(componentType), 'componentType "' + componentType + '" illegal');
}
function isExtendedClass(clz) {
  return !!(clz && clz[IS_EXTENDED_CLASS]);
}
function enableClassExtend(rootClz, mandatoryMethods) {
  rootClz.$constructor = rootClz;
  rootClz.extend = function(proto2) {
    var superClass = this;
    var ExtendedClass;
    if (isESClass(superClass)) {
      ExtendedClass = /** @class */
      function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super.apply(this, arguments) || this;
        }
        return class_1;
      }(superClass);
    } else {
      ExtendedClass = function() {
        (proto2.$constructor || superClass).apply(this, arguments);
      };
      zrUtil.inherits(ExtendedClass, this);
    }
    zrUtil.extend(ExtendedClass.prototype, proto2);
    ExtendedClass[IS_EXTENDED_CLASS] = true;
    ExtendedClass.extend = this.extend;
    ExtendedClass.superCall = superCall;
    ExtendedClass.superApply = superApply;
    ExtendedClass.superClass = superClass;
    return ExtendedClass;
  };
}
function isESClass(fn) {
  return zrUtil.isFunction(fn) && /^class\s/.test(Function.prototype.toString.call(fn));
}
function mountExtend(SubClz, SupperClz) {
  SubClz.extend = SupperClz.extend;
}
var classBase = Math.round(Math.random() * 10);
function enableClassCheck(target) {
  var classAttr = ["__\0is_clz", classBase++].join("_");
  target.prototype[classAttr] = true;
  target.isInstance = function(obj) {
    return !!(obj && obj[classAttr]);
  };
}
function superCall(context, methodName) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  return this.superClass.prototype[methodName].apply(context, args);
}
function superApply(context, methodName, args) {
  return this.superClass.prototype[methodName].apply(context, args);
}
function enableClassManagement(target) {
  var storage = {};
  target.registerClass = function(clz) {
    var componentFullType = clz.type || clz.prototype.type;
    if (componentFullType) {
      checkClassType(componentFullType);
      clz.prototype.type = componentFullType;
      var componentTypeInfo = parseClassType(componentFullType);
      if (!componentTypeInfo.sub) {
        storage[componentTypeInfo.main] = clz;
      } else if (componentTypeInfo.sub !== IS_CONTAINER) {
        var container = makeContainer(componentTypeInfo);
        container[componentTypeInfo.sub] = clz;
      }
    }
    return clz;
  };
  target.getClass = function(mainType, subType, throwWhenNotFound) {
    var clz = storage[mainType];
    if (clz && clz[IS_CONTAINER]) {
      clz = subType ? clz[subType] : null;
    }
    if (throwWhenNotFound && !clz) {
      throw new Error(!subType ? mainType + ".type should be specified." : "Component " + mainType + "." + (subType || "") + " is used but not imported.");
    }
    return clz;
  };
  target.getClassesByMainType = function(componentType) {
    var componentTypeInfo = parseClassType(componentType);
    var result = [];
    var obj = storage[componentTypeInfo.main];
    if (obj && obj[IS_CONTAINER]) {
      zrUtil.each(obj, function(o, type) {
        type !== IS_CONTAINER && result.push(o);
      });
    } else {
      result.push(obj);
    }
    return result;
  };
  target.hasClass = function(componentType) {
    var componentTypeInfo = parseClassType(componentType);
    return !!storage[componentTypeInfo.main];
  };
  target.getAllClassMainTypes = function() {
    var types = [];
    zrUtil.each(storage, function(obj, type) {
      types.push(type);
    });
    return types;
  };
  target.hasSubTypes = function(componentType) {
    var componentTypeInfo = parseClassType(componentType);
    var obj = storage[componentTypeInfo.main];
    return obj && obj[IS_CONTAINER];
  };
  function makeContainer(componentTypeInfo) {
    var container = storage[componentTypeInfo.main];
    if (!container || !container[IS_CONTAINER]) {
      container = storage[componentTypeInfo.main] = {};
      container[IS_CONTAINER] = true;
    }
    return container;
  }
}
function makeStyleMapper(properties, ignoreParent) {
  for (var i = 0; i < properties.length; i++) {
    if (!properties[i][1]) {
      properties[i][1] = properties[i][0];
    }
  }
  ignoreParent = ignoreParent || false;
  return function(model, excludes, includes) {
    var style = {};
    for (var i2 = 0; i2 < properties.length; i2++) {
      var propName = properties[i2][1];
      if (excludes && zrUtil.indexOf(excludes, propName) >= 0 || includes && zrUtil.indexOf(includes, propName) < 0) {
        continue;
      }
      var val = model.getShallow(propName, ignoreParent);
      if (val != null) {
        style[properties[i2][0]] = val;
      }
    }
    return style;
  };
}
var AREA_STYLE_KEY_MAP = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
];
var getAreaStyle = makeStyleMapper(AREA_STYLE_KEY_MAP);
var AreaStyleMixin = (
  /** @class */
  function() {
    function AreaStyleMixin2() {
    }
    AreaStyleMixin2.prototype.getAreaStyle = function(excludes, includes) {
      return getAreaStyle(this, excludes, includes);
    };
    return AreaStyleMixin2;
  }()
);
var getECData = makeInner();
var setCommonECData = function(seriesIndex, dataType, dataIdx, el) {
  if (el) {
    var ecData = getECData(el);
    ecData.dataIndex = dataIdx;
    ecData.dataType = dataType;
    ecData.seriesIndex = seriesIndex;
    ecData.ssrType = "chart";
    if (el.type === "group") {
      el.traverse(function(child) {
        var childECData = getECData(child);
        childECData.seriesIndex = seriesIndex;
        childECData.dataIndex = dataIdx;
        childECData.dataType = dataType;
        childECData.ssrType = "chart";
      });
    }
  }
};
var _highlightNextDigit = 1;
var _highlightKeyMap = {};
var getSavedStates = makeInner();
var getComponentStates = makeInner();
var HOVER_STATE_NORMAL = 0;
var HOVER_STATE_BLUR = 1;
var HOVER_STATE_EMPHASIS = 2;
var SPECIAL_STATES = ["emphasis", "blur", "select"];
var DISPLAY_STATES = ["normal", "emphasis", "blur", "select"];
var Z2_EMPHASIS_LIFT = 10;
var Z2_SELECT_LIFT = 9;
var HIGHLIGHT_ACTION_TYPE = "highlight";
var DOWNPLAY_ACTION_TYPE = "downplay";
var SELECT_ACTION_TYPE = "select";
var UNSELECT_ACTION_TYPE = "unselect";
var TOGGLE_SELECT_ACTION_TYPE = "toggleSelect";
function hasFillOrStroke(fillOrStroke) {
  return fillOrStroke != null && fillOrStroke !== "none";
}
function doChangeHoverState(el, stateName, hoverStateEnum) {
  if (el.onHoverStateChange && (el.hoverState || 0) !== hoverStateEnum) {
    el.onHoverStateChange(stateName);
  }
  el.hoverState = hoverStateEnum;
}
function singleEnterEmphasis(el) {
  doChangeHoverState(el, "emphasis", HOVER_STATE_EMPHASIS);
}
function singleLeaveEmphasis(el) {
  if (el.hoverState === HOVER_STATE_EMPHASIS) {
    doChangeHoverState(el, "normal", HOVER_STATE_NORMAL);
  }
}
function singleEnterBlur(el) {
  doChangeHoverState(el, "blur", HOVER_STATE_BLUR);
}
function singleLeaveBlur(el) {
  if (el.hoverState === HOVER_STATE_BLUR) {
    doChangeHoverState(el, "normal", HOVER_STATE_NORMAL);
  }
}
function singleEnterSelect(el) {
  el.selected = true;
}
function singleLeaveSelect(el) {
  el.selected = false;
}
function updateElementState(el, updater, commonParam) {
  updater(el, commonParam);
}
function traverseUpdateState(el, updater, commonParam) {
  updateElementState(el, updater, commonParam);
  el.isGroup && el.traverse(function(child) {
    updateElementState(child, updater, commonParam);
  });
}
function setStatesFlag(el, stateName) {
  switch (stateName) {
    case "emphasis":
      el.hoverState = HOVER_STATE_EMPHASIS;
      break;
    case "normal":
      el.hoverState = HOVER_STATE_NORMAL;
      break;
    case "blur":
      el.hoverState = HOVER_STATE_BLUR;
      break;
    case "select":
      el.selected = true;
  }
}
function getFromStateStyle(el, props, toStateName, defaultValue) {
  var style = el.style;
  var fromState = {};
  for (var i = 0; i < props.length; i++) {
    var propName = props[i];
    var val = style[propName];
    fromState[propName] = val == null ? defaultValue && defaultValue[propName] : val;
  }
  for (var i = 0; i < el.animators.length; i++) {
    var animator = el.animators[i];
    if (animator.__fromStateTransition && animator.__fromStateTransition.indexOf(toStateName) < 0 && animator.targetName === "style") {
      animator.saveTo(fromState, props);
    }
  }
  return fromState;
}
function createEmphasisDefaultState(el, stateName, targetStates, state) {
  var hasSelect = targetStates && indexOf(targetStates, "select") >= 0;
  var cloned = false;
  if (el instanceof Path) {
    var store = getSavedStates(el);
    var fromFill = hasSelect ? store.selectFill || store.normalFill : store.normalFill;
    var fromStroke = hasSelect ? store.selectStroke || store.normalStroke : store.normalStroke;
    if (hasFillOrStroke(fromFill) || hasFillOrStroke(fromStroke)) {
      state = state || {};
      var emphasisStyle = state.style || {};
      if (emphasisStyle.fill === "inherit") {
        cloned = true;
        state = extend({}, state);
        emphasisStyle = extend({}, emphasisStyle);
        emphasisStyle.fill = fromFill;
      } else if (!hasFillOrStroke(emphasisStyle.fill) && hasFillOrStroke(fromFill)) {
        cloned = true;
        state = extend({}, state);
        emphasisStyle = extend({}, emphasisStyle);
        emphasisStyle.fill = liftColor(fromFill);
      } else if (!hasFillOrStroke(emphasisStyle.stroke) && hasFillOrStroke(fromStroke)) {
        if (!cloned) {
          state = extend({}, state);
          emphasisStyle = extend({}, emphasisStyle);
        }
        emphasisStyle.stroke = liftColor(fromStroke);
      }
      state.style = emphasisStyle;
    }
  }
  if (state) {
    if (state.z2 == null) {
      if (!cloned) {
        state = extend({}, state);
      }
      var z2EmphasisLift = el.z2EmphasisLift;
      state.z2 = el.z2 + (z2EmphasisLift != null ? z2EmphasisLift : Z2_EMPHASIS_LIFT);
    }
  }
  return state;
}
function createSelectDefaultState(el, stateName, state) {
  if (state) {
    if (state.z2 == null) {
      state = extend({}, state);
      var z2SelectLift = el.z2SelectLift;
      state.z2 = el.z2 + (z2SelectLift != null ? z2SelectLift : Z2_SELECT_LIFT);
    }
  }
  return state;
}
function createBlurDefaultState(el, stateName, state) {
  var hasBlur = indexOf(el.currentStates, stateName) >= 0;
  var currentOpacity = el.style.opacity;
  var fromState = !hasBlur ? getFromStateStyle(el, ["opacity"], stateName, {
    opacity: 1
  }) : null;
  state = state || {};
  var blurStyle = state.style || {};
  if (blurStyle.opacity == null) {
    state = extend({}, state);
    blurStyle = extend({
      // Already being applied 'emphasis'. DON'T mul opacity multiple times.
      opacity: hasBlur ? currentOpacity : fromState.opacity * 0.1
    }, blurStyle);
    state.style = blurStyle;
  }
  return state;
}
function elementStateProxy(stateName, targetStates) {
  var state = this.states[stateName];
  if (this.style) {
    if (stateName === "emphasis") {
      return createEmphasisDefaultState(this, stateName, targetStates, state);
    } else if (stateName === "blur") {
      return createBlurDefaultState(this, stateName, state);
    } else if (stateName === "select") {
      return createSelectDefaultState(this, stateName, state);
    }
  }
  return state;
}
function setDefaultStateProxy(el) {
  el.stateProxy = elementStateProxy;
  var textContent = el.getTextContent();
  var textGuide = el.getTextGuideLine();
  if (textContent) {
    textContent.stateProxy = elementStateProxy;
  }
  if (textGuide) {
    textGuide.stateProxy = elementStateProxy;
  }
}
function enterEmphasisWhenMouseOver(el, e) {
  !shouldSilent(el, e) && !el.__highByOuter && traverseUpdateState(el, singleEnterEmphasis);
}
function leaveEmphasisWhenMouseOut(el, e) {
  !shouldSilent(el, e) && !el.__highByOuter && traverseUpdateState(el, singleLeaveEmphasis);
}
function enterEmphasis(el, highlightDigit) {
  el.__highByOuter |= 1 << (highlightDigit || 0);
  traverseUpdateState(el, singleEnterEmphasis);
}
function leaveEmphasis(el, highlightDigit) {
  !(el.__highByOuter &= ~(1 << (highlightDigit || 0))) && traverseUpdateState(el, singleLeaveEmphasis);
}
function enterBlur(el) {
  traverseUpdateState(el, singleEnterBlur);
}
function leaveBlur(el) {
  traverseUpdateState(el, singleLeaveBlur);
}
function enterSelect(el) {
  traverseUpdateState(el, singleEnterSelect);
}
function leaveSelect(el) {
  traverseUpdateState(el, singleLeaveSelect);
}
function shouldSilent(el, e) {
  return el.__highDownSilentOnTouch && e.zrByTouch;
}
function allLeaveBlur(api) {
  var model = api.getModel();
  var leaveBlurredSeries = [];
  var allComponentViews = [];
  model.eachComponent(function(componentType, componentModel) {
    var componentStates = getComponentStates(componentModel);
    var isSeries2 = componentType === "series";
    var view = isSeries2 ? api.getViewOfSeriesModel(componentModel) : api.getViewOfComponentModel(componentModel);
    !isSeries2 && allComponentViews.push(view);
    if (componentStates.isBlured) {
      view.group.traverse(function(child) {
        singleLeaveBlur(child);
      });
      isSeries2 && leaveBlurredSeries.push(componentModel);
    }
    componentStates.isBlured = false;
  });
  each$3(allComponentViews, function(view) {
    if (view && view.toggleBlurSeries) {
      view.toggleBlurSeries(leaveBlurredSeries, false, model);
    }
  });
}
function blurSeries(targetSeriesIndex, focus, blurScope, api) {
  var ecModel = api.getModel();
  blurScope = blurScope || "coordinateSystem";
  function leaveBlurOfIndices(data, dataIndices) {
    for (var i = 0; i < dataIndices.length; i++) {
      var itemEl = data.getItemGraphicEl(dataIndices[i]);
      itemEl && leaveBlur(itemEl);
    }
  }
  if (targetSeriesIndex == null) {
    return;
  }
  if (!focus || focus === "none") {
    return;
  }
  var targetSeriesModel = ecModel.getSeriesByIndex(targetSeriesIndex);
  var targetCoordSys = targetSeriesModel.coordinateSystem;
  if (targetCoordSys && targetCoordSys.master) {
    targetCoordSys = targetCoordSys.master;
  }
  var blurredSeries = [];
  ecModel.eachSeries(function(seriesModel) {
    var sameSeries = targetSeriesModel === seriesModel;
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && coordSys.master) {
      coordSys = coordSys.master;
    }
    var sameCoordSys = coordSys && targetCoordSys ? coordSys === targetCoordSys : sameSeries;
    if (!// Not blur other series if blurScope series
    (blurScope === "series" && !sameSeries || blurScope === "coordinateSystem" && !sameCoordSys || focus === "series" && sameSeries)) {
      var view = api.getViewOfSeriesModel(seriesModel);
      view.group.traverse(function(child) {
        if (child.__highByOuter && sameSeries && focus === "self") {
          return;
        }
        singleEnterBlur(child);
      });
      if (isArrayLike(focus)) {
        leaveBlurOfIndices(seriesModel.getData(), focus);
      } else if (isObject$3(focus)) {
        var dataTypes = keys(focus);
        for (var d = 0; d < dataTypes.length; d++) {
          leaveBlurOfIndices(seriesModel.getData(dataTypes[d]), focus[dataTypes[d]]);
        }
      }
      blurredSeries.push(seriesModel);
      getComponentStates(seriesModel).isBlured = true;
    }
  });
  ecModel.eachComponent(function(componentType, componentModel) {
    if (componentType === "series") {
      return;
    }
    var view = api.getViewOfComponentModel(componentModel);
    if (view && view.toggleBlurSeries) {
      view.toggleBlurSeries(blurredSeries, true, ecModel);
    }
  });
}
function blurComponent(componentMainType, componentIndex, api) {
  if (componentMainType == null || componentIndex == null) {
    return;
  }
  var componentModel = api.getModel().getComponent(componentMainType, componentIndex);
  if (!componentModel) {
    return;
  }
  getComponentStates(componentModel).isBlured = true;
  var view = api.getViewOfComponentModel(componentModel);
  if (!view || !view.focusBlurEnabled) {
    return;
  }
  view.group.traverse(function(child) {
    singleEnterBlur(child);
  });
}
function blurSeriesFromHighlightPayload(seriesModel, payload, api) {
  var seriesIndex = seriesModel.seriesIndex;
  var data = seriesModel.getData(payload.dataType);
  if (!data) {
    return;
  }
  var dataIndex = queryDataIndex(data, payload);
  dataIndex = (isArray$1(dataIndex) ? dataIndex[0] : dataIndex) || 0;
  var el = data.getItemGraphicEl(dataIndex);
  if (!el) {
    var count = data.count();
    var current = 0;
    while (!el && current < count) {
      el = data.getItemGraphicEl(current++);
    }
  }
  if (el) {
    var ecData = getECData(el);
    blurSeries(seriesIndex, ecData.focus, ecData.blurScope, api);
  } else {
    var focus_1 = seriesModel.get(["emphasis", "focus"]);
    var blurScope = seriesModel.get(["emphasis", "blurScope"]);
    if (focus_1 != null) {
      blurSeries(seriesIndex, focus_1, blurScope, api);
    }
  }
}
function findComponentHighDownDispatchers(componentMainType, componentIndex, name, api) {
  var ret = {
    focusSelf: false,
    dispatchers: null
  };
  if (componentMainType == null || componentMainType === "series" || componentIndex == null || name == null) {
    return ret;
  }
  var componentModel = api.getModel().getComponent(componentMainType, componentIndex);
  if (!componentModel) {
    return ret;
  }
  var view = api.getViewOfComponentModel(componentModel);
  if (!view || !view.findHighDownDispatchers) {
    return ret;
  }
  var dispatchers = view.findHighDownDispatchers(name);
  var focusSelf;
  for (var i = 0; i < dispatchers.length; i++) {
    if (getECData(dispatchers[i]).focus === "self") {
      focusSelf = true;
      break;
    }
  }
  return {
    focusSelf,
    dispatchers
  };
}
function handleGlobalMouseOverForHighDown(dispatcher, e, api) {
  var ecData = getECData(dispatcher);
  var _a2 = findComponentHighDownDispatchers(ecData.componentMainType, ecData.componentIndex, ecData.componentHighDownName, api), dispatchers = _a2.dispatchers, focusSelf = _a2.focusSelf;
  if (dispatchers) {
    if (focusSelf) {
      blurComponent(ecData.componentMainType, ecData.componentIndex, api);
    }
    each$3(dispatchers, function(dispatcher2) {
      return enterEmphasisWhenMouseOver(dispatcher2, e);
    });
  } else {
    blurSeries(ecData.seriesIndex, ecData.focus, ecData.blurScope, api);
    if (ecData.focus === "self") {
      blurComponent(ecData.componentMainType, ecData.componentIndex, api);
    }
    enterEmphasisWhenMouseOver(dispatcher, e);
  }
}
function handleGlobalMouseOutForHighDown(dispatcher, e, api) {
  allLeaveBlur(api);
  var ecData = getECData(dispatcher);
  var dispatchers = findComponentHighDownDispatchers(ecData.componentMainType, ecData.componentIndex, ecData.componentHighDownName, api).dispatchers;
  if (dispatchers) {
    each$3(dispatchers, function(dispatcher2) {
      return leaveEmphasisWhenMouseOut(dispatcher2, e);
    });
  } else {
    leaveEmphasisWhenMouseOut(dispatcher, e);
  }
}
function toggleSelectionFromPayload(seriesModel, payload, api) {
  if (!isSelectChangePayload(payload)) {
    return;
  }
  var dataType = payload.dataType;
  var data = seriesModel.getData(dataType);
  var dataIndex = queryDataIndex(data, payload);
  if (!isArray$1(dataIndex)) {
    dataIndex = [dataIndex];
  }
  seriesModel[payload.type === TOGGLE_SELECT_ACTION_TYPE ? "toggleSelect" : payload.type === SELECT_ACTION_TYPE ? "select" : "unselect"](dataIndex, dataType);
}
function updateSeriesElementSelection(seriesModel) {
  var allData = seriesModel.getAllData();
  each$3(allData, function(_a2) {
    var data = _a2.data, type = _a2.type;
    data.eachItemGraphicEl(function(el, idx) {
      seriesModel.isSelected(idx, type) ? enterSelect(el) : leaveSelect(el);
    });
  });
}
function getAllSelectedIndices(ecModel) {
  var ret = [];
  ecModel.eachSeries(function(seriesModel) {
    var allData = seriesModel.getAllData();
    each$3(allData, function(_a2) {
      _a2.data;
      var type = _a2.type;
      var dataIndices = seriesModel.getSelectedDataIndices();
      if (dataIndices.length > 0) {
        var item = {
          dataIndex: dataIndices,
          seriesIndex: seriesModel.seriesIndex
        };
        if (type != null) {
          item.dataType = type;
        }
        ret.push(item);
      }
    });
  });
  return ret;
}
function enableHoverEmphasis(el, focus, blurScope) {
  setAsHighDownDispatcher(el, true);
  traverseUpdateState(el, setDefaultStateProxy);
  enableHoverFocus(el, focus, blurScope);
}
function disableHoverEmphasis(el) {
  setAsHighDownDispatcher(el, false);
}
function toggleHoverEmphasis(el, focus, blurScope, isDisabled) {
  isDisabled ? disableHoverEmphasis(el) : enableHoverEmphasis(el, focus, blurScope);
}
function enableHoverFocus(el, focus, blurScope) {
  var ecData = getECData(el);
  if (focus != null) {
    ecData.focus = focus;
    ecData.blurScope = blurScope;
  } else if (ecData.focus) {
    ecData.focus = null;
  }
}
var OTHER_STATES = ["emphasis", "blur", "select"];
var defaultStyleGetterMap = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function setStatesStylesFromModel(el, itemModel, styleType, getter) {
  styleType = styleType || "itemStyle";
  for (var i = 0; i < OTHER_STATES.length; i++) {
    var stateName = OTHER_STATES[i];
    var model = itemModel.getModel([stateName, styleType]);
    var state = el.ensureState(stateName);
    state.style = model[defaultStyleGetterMap[styleType]]();
  }
}
function setAsHighDownDispatcher(el, asDispatcher) {
  var disable = asDispatcher === false;
  var extendedEl = el;
  if (el.highDownSilentOnTouch) {
    extendedEl.__highDownSilentOnTouch = el.highDownSilentOnTouch;
  }
  if (!disable || extendedEl.__highDownDispatcher) {
    extendedEl.__highByOuter = extendedEl.__highByOuter || 0;
    extendedEl.__highDownDispatcher = !disable;
  }
}
function isHighDownDispatcher(el) {
  return !!(el && el.__highDownDispatcher);
}
function getHighlightDigit(highlightKey) {
  var highlightDigit = _highlightKeyMap[highlightKey];
  if (highlightDigit == null && _highlightNextDigit <= 32) {
    highlightDigit = _highlightKeyMap[highlightKey] = _highlightNextDigit++;
  }
  return highlightDigit;
}
function isSelectChangePayload(payload) {
  var payloadType = payload.type;
  return payloadType === SELECT_ACTION_TYPE || payloadType === UNSELECT_ACTION_TYPE || payloadType === TOGGLE_SELECT_ACTION_TYPE;
}
function isHighDownPayload(payload) {
  var payloadType = payload.type;
  return payloadType === HIGHLIGHT_ACTION_TYPE || payloadType === DOWNPLAY_ACTION_TYPE;
}
function savePathStates(el) {
  var store = getSavedStates(el);
  store.normalFill = el.style.fill;
  store.normalStroke = el.style.stroke;
  var selectState = el.states.select || {};
  store.selectFill = selectState.style && selectState.style.fill || null;
  store.selectStroke = selectState.style && selectState.style.stroke || null;
}
var transitionStore = makeInner();
function getAnimationConfig(animationType, animatableModel, dataIndex, extraOpts, extraDelayParams) {
  var animationPayload;
  if (animatableModel && animatableModel.ecModel) {
    var updatePayload = animatableModel.ecModel.getUpdatePayload();
    animationPayload = updatePayload && updatePayload.animation;
  }
  var animationEnabled = animatableModel && animatableModel.isAnimationEnabled();
  var isUpdate = animationType === "update";
  if (animationEnabled) {
    var duration = void 0;
    var easing = void 0;
    var delay = void 0;
    if (extraOpts) {
      duration = retrieve2(extraOpts.duration, 200);
      easing = retrieve2(extraOpts.easing, "cubicOut");
      delay = 0;
    } else {
      duration = animatableModel.getShallow(isUpdate ? "animationDurationUpdate" : "animationDuration");
      easing = animatableModel.getShallow(isUpdate ? "animationEasingUpdate" : "animationEasing");
      delay = animatableModel.getShallow(isUpdate ? "animationDelayUpdate" : "animationDelay");
    }
    if (animationPayload) {
      animationPayload.duration != null && (duration = animationPayload.duration);
      animationPayload.easing != null && (easing = animationPayload.easing);
      animationPayload.delay != null && (delay = animationPayload.delay);
    }
    if (isFunction$1(delay)) {
      delay = delay(dataIndex, extraDelayParams);
    }
    if (isFunction$1(duration)) {
      duration = duration(dataIndex);
    }
    var config2 = {
      duration: duration || 0,
      delay,
      easing
    };
    return config2;
  } else {
    return null;
  }
}
function animateOrSetProps(animationType, el, props, animatableModel, dataIndex, cb, during) {
  var isFrom = false;
  var removeOpt;
  if (isFunction$1(dataIndex)) {
    during = cb;
    cb = dataIndex;
    dataIndex = null;
  } else if (isObject$3(dataIndex)) {
    cb = dataIndex.cb;
    during = dataIndex.during;
    isFrom = dataIndex.isFrom;
    removeOpt = dataIndex.removeOpt;
    dataIndex = dataIndex.dataIndex;
  }
  var isRemove = animationType === "leave";
  if (!isRemove) {
    el.stopAnimation("leave");
  }
  var animationConfig = getAnimationConfig(animationType, animatableModel, dataIndex, isRemove ? removeOpt || {} : null, animatableModel && animatableModel.getAnimationDelayParams ? animatableModel.getAnimationDelayParams(el, dataIndex) : null);
  if (animationConfig && animationConfig.duration > 0) {
    var duration = animationConfig.duration;
    var animationDelay = animationConfig.delay;
    var animationEasing = animationConfig.easing;
    var animateConfig = {
      duration,
      delay: animationDelay || 0,
      easing: animationEasing,
      done: cb,
      force: !!cb || !!during,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !isRemove,
      scope: animationType,
      during
    };
    isFrom ? el.animateFrom(props, animateConfig) : el.animateTo(props, animateConfig);
  } else {
    el.stopAnimation();
    !isFrom && el.attr(props);
    during && during(1);
    cb && cb();
  }
}
function updateProps$1(el, props, animatableModel, dataIndex, cb, during) {
  animateOrSetProps("update", el, props, animatableModel, dataIndex, cb, during);
}
function initProps(el, props, animatableModel, dataIndex, cb, during) {
  animateOrSetProps("enter", el, props, animatableModel, dataIndex, cb, during);
}
function isElementRemoved(el) {
  if (!el.__zr) {
    return true;
  }
  for (var i = 0; i < el.animators.length; i++) {
    var animator = el.animators[i];
    if (animator.scope === "leave") {
      return true;
    }
  }
  return false;
}
function removeElement(el, props, animatableModel, dataIndex, cb, during) {
  if (isElementRemoved(el)) {
    return;
  }
  animateOrSetProps("leave", el, props, animatableModel, dataIndex, cb, during);
}
function fadeOutDisplayable(el, animatableModel, dataIndex, done) {
  el.removeTextContent();
  el.removeTextGuideLine();
  removeElement(el, {
    style: {
      opacity: 0
    }
  }, animatableModel, dataIndex, done);
}
function removeElementWithFadeOut(el, animatableModel, dataIndex) {
  function doRemove() {
    el.parent && el.parent.remove(el);
  }
  if (!el.isGroup) {
    fadeOutDisplayable(el, animatableModel, dataIndex, doRemove);
  } else {
    el.traverse(function(disp) {
      if (!disp.isGroup) {
        fadeOutDisplayable(disp, animatableModel, dataIndex, doRemove);
      }
    });
  }
}
function saveOldStyle(el) {
  transitionStore(el).oldStyle = el.style;
}
var mathMax$1 = Math.max;
var mathMin$1 = Math.min;
var _customShapeMap = {};
function extendShape(opts) {
  return Path.extend(opts);
}
var extendPathFromString = pathTool.extendFromString;
function extendPath(pathData, opts) {
  return extendPathFromString(pathData, opts);
}
function registerShape(name, ShapeClass) {
  _customShapeMap[name] = ShapeClass;
}
function getShapeClass(name) {
  if (_customShapeMap.hasOwnProperty(name)) {
    return _customShapeMap[name];
  }
}
function makePath(pathData, opts, rect, layout2) {
  var path = pathTool.createFromString(pathData, opts);
  if (rect) {
    if (layout2 === "center") {
      rect = centerGraphic(rect, path.getBoundingRect());
    }
    resizePath(path, rect);
  }
  return path;
}
function makeImage(imageUrl, rect, layout2) {
  var zrImg = new ZRImage({
    style: {
      image: imageUrl,
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    },
    onload: function(img) {
      if (layout2 === "center") {
        var boundingRect = {
          width: img.width,
          height: img.height
        };
        zrImg.setStyle(centerGraphic(rect, boundingRect));
      }
    }
  });
  return zrImg;
}
function centerGraphic(rect, boundingRect) {
  var aspect = boundingRect.width / boundingRect.height;
  var width = rect.height * aspect;
  var height;
  if (width <= rect.width) {
    height = rect.height;
  } else {
    width = rect.width;
    height = width / aspect;
  }
  var cx = rect.x + rect.width / 2;
  var cy = rect.y + rect.height / 2;
  return {
    x: cx - width / 2,
    y: cy - height / 2,
    width,
    height
  };
}
var mergePath = pathTool.mergePath;
function resizePath(path, rect) {
  if (!path.applyTransform) {
    return;
  }
  var pathRect = path.getBoundingRect();
  var m = pathRect.calculateTransform(rect);
  path.applyTransform(m);
}
function subPixelOptimizeLine(shape, lineWidth) {
  subPixelOptimizeUtil.subPixelOptimizeLine(shape, shape, {
    lineWidth
  });
  return shape;
}
function subPixelOptimizeRect(param) {
  subPixelOptimizeUtil.subPixelOptimizeRect(param.shape, param.shape, param.style);
  return param;
}
var subPixelOptimize = subPixelOptimizeUtil.subPixelOptimize;
function getTransform(target, ancestor) {
  var mat = matrix.identity([]);
  while (target && target !== ancestor) {
    matrix.mul(mat, target.getLocalTransform(), mat);
    target = target.parent;
  }
  return mat;
}
function applyTransform(target, transform, invert2) {
  if (transform && !isArrayLike(transform)) {
    transform = Transformable.getLocalTransform(transform);
  }
  if (invert2) {
    transform = matrix.invert([], transform);
  }
  return vec2.applyTransform([], target, transform);
}
function transformDirection(direction, transform, invert2) {
  var hBase = transform[4] === 0 || transform[5] === 0 || transform[0] === 0 ? 1 : Math.abs(2 * transform[4] / transform[0]);
  var vBase = transform[4] === 0 || transform[5] === 0 || transform[2] === 0 ? 1 : Math.abs(2 * transform[4] / transform[2]);
  var vertex = [direction === "left" ? -hBase : direction === "right" ? hBase : 0, direction === "top" ? -vBase : direction === "bottom" ? vBase : 0];
  vertex = applyTransform(vertex, transform, invert2);
  return Math.abs(vertex[0]) > Math.abs(vertex[1]) ? vertex[0] > 0 ? "right" : "left" : vertex[1] > 0 ? "bottom" : "top";
}
function isNotGroup(el) {
  return !el.isGroup;
}
function isPath(el) {
  return el.shape != null;
}
function groupTransition(g1, g2, animatableModel) {
  if (!g1 || !g2) {
    return;
  }
  function getElMap(g) {
    var elMap = {};
    g.traverse(function(el) {
      if (isNotGroup(el) && el.anid) {
        elMap[el.anid] = el;
      }
    });
    return elMap;
  }
  function getAnimatableProps(el) {
    var obj = {
      x: el.x,
      y: el.y,
      rotation: el.rotation
    };
    if (isPath(el)) {
      obj.shape = extend({}, el.shape);
    }
    return obj;
  }
  var elMap1 = getElMap(g1);
  g2.traverse(function(el) {
    if (isNotGroup(el) && el.anid) {
      var oldEl = elMap1[el.anid];
      if (oldEl) {
        var newProp = getAnimatableProps(el);
        el.attr(getAnimatableProps(oldEl));
        updateProps$1(el, newProp, animatableModel, getECData(el).dataIndex);
      }
    }
  });
}
function clipPointsByRect(points, rect) {
  return map$1(points, function(point) {
    var x = point[0];
    x = mathMax$1(x, rect.x);
    x = mathMin$1(x, rect.x + rect.width);
    var y = point[1];
    y = mathMax$1(y, rect.y);
    y = mathMin$1(y, rect.y + rect.height);
    return [x, y];
  });
}
function clipRectByRect(targetRect, rect) {
  var x = mathMax$1(targetRect.x, rect.x);
  var x2 = mathMin$1(targetRect.x + targetRect.width, rect.x + rect.width);
  var y = mathMax$1(targetRect.y, rect.y);
  var y2 = mathMin$1(targetRect.y + targetRect.height, rect.y + rect.height);
  if (x2 >= x && y2 >= y) {
    return {
      x,
      y,
      width: x2 - x,
      height: y2 - y
    };
  }
}
function createIcon(iconStr, opt, rect) {
  var innerOpts = extend({
    rectHover: true
  }, opt);
  var style = innerOpts.style = {
    strokeNoScale: true
  };
  rect = rect || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  };
  if (iconStr) {
    return iconStr.indexOf("image://") === 0 ? (style.image = iconStr.slice(8), defaults(style, rect), new ZRImage(innerOpts)) : makePath(iconStr.replace("path://", ""), innerOpts, rect, "center");
  }
}
function linePolygonIntersect(a1x, a1y, a2x, a2y, points) {
  for (var i = 0, p2 = points[points.length - 1]; i < points.length; i++) {
    var p = points[i];
    if (lineLineIntersect(a1x, a1y, a2x, a2y, p[0], p[1], p2[0], p2[1])) {
      return true;
    }
    p2 = p;
  }
}
function lineLineIntersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
  var mx = a2x - a1x;
  var my = a2y - a1y;
  var nx = b2x - b1x;
  var ny = b2y - b1y;
  var nmCrossProduct = crossProduct2d(nx, ny, mx, my);
  if (nearZero(nmCrossProduct)) {
    return false;
  }
  var b1a1x = a1x - b1x;
  var b1a1y = a1y - b1y;
  var q = crossProduct2d(b1a1x, b1a1y, mx, my) / nmCrossProduct;
  if (q < 0 || q > 1) {
    return false;
  }
  var p = crossProduct2d(b1a1x, b1a1y, nx, ny) / nmCrossProduct;
  if (p < 0 || p > 1) {
    return false;
  }
  return true;
}
function crossProduct2d(x1, y1, x2, y2) {
  return x1 * y2 - x2 * y1;
}
function nearZero(val) {
  return val <= 1e-6 && val >= -1e-6;
}
function setTooltipConfig(opt) {
  var itemTooltipOption = opt.itemTooltipOption;
  var componentModel = opt.componentModel;
  var itemName = opt.itemName;
  var itemTooltipOptionObj = isString$2(itemTooltipOption) ? {
    formatter: itemTooltipOption
  } : itemTooltipOption;
  var mainType = componentModel.mainType;
  var componentIndex = componentModel.componentIndex;
  var formatterParams = {
    componentType: mainType,
    name: itemName,
    $vars: ["name"]
  };
  formatterParams[mainType + "Index"] = componentIndex;
  var formatterParamsExtra = opt.formatterParamsExtra;
  if (formatterParamsExtra) {
    each$3(keys(formatterParamsExtra), function(key) {
      if (!hasOwn$1(formatterParams, key)) {
        formatterParams[key] = formatterParamsExtra[key];
        formatterParams.$vars.push(key);
      }
    });
  }
  var ecData = getECData(opt.el);
  ecData.componentMainType = mainType;
  ecData.componentIndex = componentIndex;
  ecData.tooltipConfig = {
    name: itemName,
    option: defaults({
      content: itemName,
      encodeHTMLContent: true,
      formatterParams
    }, itemTooltipOptionObj)
  };
}
function traverseElement(el, cb) {
  var stopped;
  if (el.isGroup) {
    stopped = cb(el);
  }
  if (!stopped) {
    el.traverse(cb);
  }
}
function traverseElements(els, cb) {
  if (els) {
    if (isArray$1(els)) {
      for (var i = 0; i < els.length; i++) {
        traverseElement(els[i], cb);
      }
    } else {
      traverseElement(els, cb);
    }
  }
}
registerShape("circle", Circle);
registerShape("ellipse", Ellipse);
registerShape("sector", Sector);
registerShape("ring", Ring);
registerShape("polygon", Polygon);
registerShape("polyline", Polyline);
registerShape("rect", Rect);
registerShape("line", Line);
registerShape("bezierCurve", BezierCurve);
registerShape("arc", Arc);
const graphic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc,
  BezierCurve,
  BoundingRect,
  Circle,
  CompoundPath: CompoundPath_js,
  Ellipse,
  Group,
  Image: ZRImage,
  IncrementalDisplayable: IncrementalDisplayable_js,
  Line,
  LinearGradient,
  OrientedBoundingRect,
  Path,
  Point,
  Polygon,
  Polyline,
  RadialGradient: RadialGradient_js,
  Rect,
  Ring,
  Sector,
  Text: ZRText,
  applyTransform,
  clipPointsByRect,
  clipRectByRect,
  createIcon,
  extendPath,
  extendShape,
  getShapeClass,
  getTransform,
  groupTransition,
  initProps,
  isElementRemoved,
  lineLineIntersect,
  linePolygonIntersect,
  makeImage,
  makePath,
  mergePath,
  registerShape,
  removeElement,
  removeElementWithFadeOut,
  resizePath,
  setTooltipConfig,
  subPixelOptimize,
  subPixelOptimizeLine,
  subPixelOptimizeRect,
  transformDirection,
  traverseElements,
  updateProps: updateProps$1
}, Symbol.toStringTag, { value: "Module" }));
var EMPTY_OBJ = {};
function setLabelText(label, labelTexts) {
  for (var i = 0; i < SPECIAL_STATES.length; i++) {
    var stateName = SPECIAL_STATES[i];
    var text = labelTexts[stateName];
    var state = label.ensureState(stateName);
    state.style = state.style || {};
    state.style.text = text;
  }
  var oldStates = label.currentStates.slice();
  label.clearStates(true);
  label.setStyle({
    text: labelTexts.normal
  });
  label.useStates(oldStates, true);
}
function getLabelText(opt, stateModels, interpolatedValue) {
  var labelFetcher = opt.labelFetcher;
  var labelDataIndex = opt.labelDataIndex;
  var labelDimIndex = opt.labelDimIndex;
  var normalModel = stateModels.normal;
  var baseText;
  if (labelFetcher) {
    baseText = labelFetcher.getFormattedLabel(labelDataIndex, "normal", null, labelDimIndex, normalModel && normalModel.get("formatter"), interpolatedValue != null ? {
      interpolatedValue
    } : null);
  }
  if (baseText == null) {
    baseText = isFunction$1(opt.defaultText) ? opt.defaultText(labelDataIndex, opt, interpolatedValue) : opt.defaultText;
  }
  var statesText = {
    normal: baseText
  };
  for (var i = 0; i < SPECIAL_STATES.length; i++) {
    var stateName = SPECIAL_STATES[i];
    var stateModel = stateModels[stateName];
    statesText[stateName] = retrieve2(labelFetcher ? labelFetcher.getFormattedLabel(labelDataIndex, stateName, null, labelDimIndex, stateModel && stateModel.get("formatter")) : null, baseText);
  }
  return statesText;
}
function setLabelStyle(targetEl, labelStatesModels, opt, stateSpecified) {
  opt = opt || EMPTY_OBJ;
  var isSetOnText = targetEl instanceof ZRText;
  var needsCreateText = false;
  for (var i = 0; i < DISPLAY_STATES.length; i++) {
    var stateModel = labelStatesModels[DISPLAY_STATES[i]];
    if (stateModel && stateModel.getShallow("show")) {
      needsCreateText = true;
      break;
    }
  }
  var textContent = isSetOnText ? targetEl : targetEl.getTextContent();
  if (needsCreateText) {
    if (!isSetOnText) {
      if (!textContent) {
        textContent = new ZRText();
        targetEl.setTextContent(textContent);
      }
      if (targetEl.stateProxy) {
        textContent.stateProxy = targetEl.stateProxy;
      }
    }
    var labelStatesTexts = getLabelText(opt, labelStatesModels);
    var normalModel = labelStatesModels.normal;
    var showNormal = !!normalModel.getShallow("show");
    var normalStyle = createTextStyle(normalModel, stateSpecified && stateSpecified.normal, opt, false, !isSetOnText);
    normalStyle.text = labelStatesTexts.normal;
    if (!isSetOnText) {
      targetEl.setTextConfig(createTextConfig(normalModel, opt, false));
    }
    for (var i = 0; i < SPECIAL_STATES.length; i++) {
      var stateName = SPECIAL_STATES[i];
      var stateModel = labelStatesModels[stateName];
      if (stateModel) {
        var stateObj = textContent.ensureState(stateName);
        var stateShow = !!retrieve2(stateModel.getShallow("show"), showNormal);
        if (stateShow !== showNormal) {
          stateObj.ignore = !stateShow;
        }
        stateObj.style = createTextStyle(stateModel, stateSpecified && stateSpecified[stateName], opt, true, !isSetOnText);
        stateObj.style.text = labelStatesTexts[stateName];
        if (!isSetOnText) {
          var targetElEmphasisState = targetEl.ensureState(stateName);
          targetElEmphasisState.textConfig = createTextConfig(stateModel, opt, true);
        }
      }
    }
    textContent.silent = !!normalModel.getShallow("silent");
    if (textContent.style.x != null) {
      normalStyle.x = textContent.style.x;
    }
    if (textContent.style.y != null) {
      normalStyle.y = textContent.style.y;
    }
    textContent.ignore = !showNormal;
    textContent.useStyle(normalStyle);
    textContent.dirty();
    if (opt.enableTextSetter) {
      labelInner(textContent).setLabelText = function(interpolatedValue) {
        var labelStatesTexts2 = getLabelText(opt, labelStatesModels, interpolatedValue);
        setLabelText(textContent, labelStatesTexts2);
      };
    }
  } else if (textContent) {
    textContent.ignore = true;
  }
  targetEl.dirty();
}
function getLabelStatesModels(itemModel, labelName) {
  labelName = labelName || "label";
  var statesModels = {
    normal: itemModel.getModel(labelName)
  };
  for (var i = 0; i < SPECIAL_STATES.length; i++) {
    var stateName = SPECIAL_STATES[i];
    statesModels[stateName] = itemModel.getModel([stateName, labelName]);
  }
  return statesModels;
}
function createTextStyle(textStyleModel, specifiedTextStyle, opt, isNotNormal, isAttached) {
  var textStyle = {};
  setTextStyleCommon(textStyle, textStyleModel, opt, isNotNormal, isAttached);
  specifiedTextStyle && extend(textStyle, specifiedTextStyle);
  return textStyle;
}
function createTextConfig(textStyleModel, opt, isNotNormal) {
  opt = opt || {};
  var textConfig = {};
  var labelPosition;
  var labelRotate = textStyleModel.getShallow("rotate");
  var labelDistance = retrieve2(textStyleModel.getShallow("distance"), isNotNormal ? null : 5);
  var labelOffset = textStyleModel.getShallow("offset");
  labelPosition = textStyleModel.getShallow("position") || (isNotNormal ? null : "inside");
  labelPosition === "outside" && (labelPosition = opt.defaultOutsidePosition || "top");
  if (labelPosition != null) {
    textConfig.position = labelPosition;
  }
  if (labelOffset != null) {
    textConfig.offset = labelOffset;
  }
  if (labelRotate != null) {
    labelRotate *= Math.PI / 180;
    textConfig.rotation = labelRotate;
  }
  if (labelDistance != null) {
    textConfig.distance = labelDistance;
  }
  textConfig.outsideFill = textStyleModel.get("color") === "inherit" ? opt.inheritColor || null : "auto";
  return textConfig;
}
function setTextStyleCommon(textStyle, textStyleModel, opt, isNotNormal, isAttached) {
  opt = opt || EMPTY_OBJ;
  var ecModel = textStyleModel.ecModel;
  var globalTextStyle = ecModel && ecModel.option.textStyle;
  var richItemNames = getRichItemNames(textStyleModel);
  var richResult;
  if (richItemNames) {
    richResult = {};
    for (var name_1 in richItemNames) {
      if (richItemNames.hasOwnProperty(name_1)) {
        var richTextStyle = textStyleModel.getModel(["rich", name_1]);
        setTokenTextStyle(richResult[name_1] = {}, richTextStyle, globalTextStyle, opt, isNotNormal, isAttached, false, true);
      }
    }
  }
  if (richResult) {
    textStyle.rich = richResult;
  }
  var overflow = textStyleModel.get("overflow");
  if (overflow) {
    textStyle.overflow = overflow;
  }
  var margin = textStyleModel.get("minMargin");
  if (margin != null) {
    textStyle.margin = margin;
  }
  setTokenTextStyle(textStyle, textStyleModel, globalTextStyle, opt, isNotNormal, isAttached, true, false);
}
function getRichItemNames(textStyleModel) {
  var richItemNameMap;
  while (textStyleModel && textStyleModel !== textStyleModel.ecModel) {
    var rich = (textStyleModel.option || EMPTY_OBJ).rich;
    if (rich) {
      richItemNameMap = richItemNameMap || {};
      var richKeys = keys(rich);
      for (var i = 0; i < richKeys.length; i++) {
        var richKey = richKeys[i];
        richItemNameMap[richKey] = 1;
      }
    }
    textStyleModel = textStyleModel.parentModel;
  }
  return richItemNameMap;
}
var TEXT_PROPS_WITH_GLOBAL = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"];
var TEXT_PROPS_SELF = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"];
var TEXT_PROPS_BOX = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function setTokenTextStyle(textStyle, textStyleModel, globalTextStyle, opt, isNotNormal, isAttached, isBlock, inRich) {
  globalTextStyle = !isNotNormal && globalTextStyle || EMPTY_OBJ;
  var inheritColor = opt && opt.inheritColor;
  var fillColor = textStyleModel.getShallow("color");
  var strokeColor = textStyleModel.getShallow("textBorderColor");
  var opacity = retrieve2(textStyleModel.getShallow("opacity"), globalTextStyle.opacity);
  if (fillColor === "inherit" || fillColor === "auto") {
    if (inheritColor) {
      fillColor = inheritColor;
    } else {
      fillColor = null;
    }
  }
  if (strokeColor === "inherit" || strokeColor === "auto") {
    if (inheritColor) {
      strokeColor = inheritColor;
    } else {
      strokeColor = null;
    }
  }
  if (!isAttached) {
    fillColor = fillColor || globalTextStyle.color;
    strokeColor = strokeColor || globalTextStyle.textBorderColor;
  }
  if (fillColor != null) {
    textStyle.fill = fillColor;
  }
  if (strokeColor != null) {
    textStyle.stroke = strokeColor;
  }
  var textBorderWidth = retrieve2(textStyleModel.getShallow("textBorderWidth"), globalTextStyle.textBorderWidth);
  if (textBorderWidth != null) {
    textStyle.lineWidth = textBorderWidth;
  }
  var textBorderType = retrieve2(textStyleModel.getShallow("textBorderType"), globalTextStyle.textBorderType);
  if (textBorderType != null) {
    textStyle.lineDash = textBorderType;
  }
  var textBorderDashOffset = retrieve2(textStyleModel.getShallow("textBorderDashOffset"), globalTextStyle.textBorderDashOffset);
  if (textBorderDashOffset != null) {
    textStyle.lineDashOffset = textBorderDashOffset;
  }
  if (!isNotNormal && opacity == null && !inRich) {
    opacity = opt && opt.defaultOpacity;
  }
  if (opacity != null) {
    textStyle.opacity = opacity;
  }
  if (!isNotNormal && !isAttached) {
    if (textStyle.fill == null && opt.inheritColor) {
      textStyle.fill = opt.inheritColor;
    }
  }
  for (var i = 0; i < TEXT_PROPS_WITH_GLOBAL.length; i++) {
    var key = TEXT_PROPS_WITH_GLOBAL[i];
    var val = retrieve2(textStyleModel.getShallow(key), globalTextStyle[key]);
    if (val != null) {
      textStyle[key] = val;
    }
  }
  for (var i = 0; i < TEXT_PROPS_SELF.length; i++) {
    var key = TEXT_PROPS_SELF[i];
    var val = textStyleModel.getShallow(key);
    if (val != null) {
      textStyle[key] = val;
    }
  }
  if (textStyle.verticalAlign == null) {
    var baseline = textStyleModel.getShallow("baseline");
    if (baseline != null) {
      textStyle.verticalAlign = baseline;
    }
  }
  if (!isBlock || !opt.disableBox) {
    for (var i = 0; i < TEXT_PROPS_BOX.length; i++) {
      var key = TEXT_PROPS_BOX[i];
      var val = textStyleModel.getShallow(key);
      if (val != null) {
        textStyle[key] = val;
      }
    }
    var borderType = textStyleModel.getShallow("borderType");
    if (borderType != null) {
      textStyle.borderDash = borderType;
    }
    if ((textStyle.backgroundColor === "auto" || textStyle.backgroundColor === "inherit") && inheritColor) {
      textStyle.backgroundColor = inheritColor;
    }
    if ((textStyle.borderColor === "auto" || textStyle.borderColor === "inherit") && inheritColor) {
      textStyle.borderColor = inheritColor;
    }
  }
}
function getFont(opt, ecModel) {
  var gTextStyleModel = ecModel && ecModel.getModel("textStyle");
  return trim([
    // FIXME in node-canvas fontWeight is before fontStyle
    opt.fontStyle || gTextStyleModel && gTextStyleModel.getShallow("fontStyle") || "",
    opt.fontWeight || gTextStyleModel && gTextStyleModel.getShallow("fontWeight") || "",
    (opt.fontSize || gTextStyleModel && gTextStyleModel.getShallow("fontSize") || 12) + "px",
    opt.fontFamily || gTextStyleModel && gTextStyleModel.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var labelInner = makeInner();
function setLabelValueAnimation(label, labelStatesModels, value, getDefaultText) {
  if (!label) {
    return;
  }
  var obj = labelInner(label);
  obj.prevValue = obj.value;
  obj.value = value;
  var normalLabelModel = labelStatesModels.normal;
  obj.valueAnimation = normalLabelModel.get("valueAnimation");
  if (obj.valueAnimation) {
    obj.precision = normalLabelModel.get("precision");
    obj.defaultInterpolatedText = getDefaultText;
    obj.statesModels = labelStatesModels;
  }
}
function animateLabelValue(textEl, dataIndex, data, animatableModel, labelFetcher) {
  var labelInnerStore = labelInner(textEl);
  if (!labelInnerStore.valueAnimation || labelInnerStore.prevValue === labelInnerStore.value) {
    return;
  }
  var defaultInterpolatedText = labelInnerStore.defaultInterpolatedText;
  var currValue = retrieve2(labelInnerStore.interpolatedValue, labelInnerStore.prevValue);
  var targetValue = labelInnerStore.value;
  function during(percent) {
    var interpolated = interpolateRawValues(data, labelInnerStore.precision, currValue, targetValue, percent);
    labelInnerStore.interpolatedValue = percent === 1 ? null : interpolated;
    var labelText = getLabelText({
      labelDataIndex: dataIndex,
      labelFetcher,
      defaultText: defaultInterpolatedText ? defaultInterpolatedText(interpolated) : interpolated + ""
    }, labelInnerStore.statesModels, interpolated);
    setLabelText(textEl, labelText);
  }
  textEl.percent = 0;
  (labelInnerStore.prevValue == null ? initProps : updateProps$1)(textEl, {
    // percent is used to prevent animation from being aborted #15916
    percent: 1
  }, animatableModel, dataIndex, null, during);
}
var PATH_COLOR = ["textStyle", "color"];
var textStyleParams = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"];
var tmpText = new ZRText();
var TextStyleMixin = (
  /** @class */
  function() {
    function TextStyleMixin2() {
    }
    TextStyleMixin2.prototype.getTextColor = function(isEmphasis) {
      var ecModel = this.ecModel;
      return this.getShallow("color") || (!isEmphasis && ecModel ? ecModel.get(PATH_COLOR) : null);
    };
    TextStyleMixin2.prototype.getFont = function() {
      return getFont({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    };
    TextStyleMixin2.prototype.getTextRect = function(text) {
      var style = {
        text,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      };
      for (var i = 0; i < textStyleParams.length; i++) {
        style[textStyleParams[i]] = this.getShallow(textStyleParams[i]);
      }
      tmpText.useStyle(style);
      tmpText.update();
      return tmpText.getBoundingRect();
    };
    return TextStyleMixin2;
  }()
);
var LINE_STYLE_KEY_MAP = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
];
var getLineStyle = makeStyleMapper(LINE_STYLE_KEY_MAP);
var LineStyleMixin = (
  /** @class */
  function() {
    function LineStyleMixin2() {
    }
    LineStyleMixin2.prototype.getLineStyle = function(excludes) {
      return getLineStyle(this, excludes);
    };
    return LineStyleMixin2;
  }()
);
var ITEM_STYLE_KEY_MAP = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
];
var getItemStyle = makeStyleMapper(ITEM_STYLE_KEY_MAP);
var ItemStyleMixin = (
  /** @class */
  function() {
    function ItemStyleMixin2() {
    }
    ItemStyleMixin2.prototype.getItemStyle = function(excludes, includes) {
      return getItemStyle(this, excludes, includes);
    };
    return ItemStyleMixin2;
  }()
);
var Model = (
  /** @class */
  function() {
    function Model2(option, parentModel, ecModel) {
      this.parentModel = parentModel;
      this.ecModel = ecModel;
      this.option = option;
    }
    Model2.prototype.init = function(option, parentModel, ecModel) {
    };
    Model2.prototype.mergeOption = function(option, ecModel) {
      merge(this.option, option, true);
    };
    Model2.prototype.get = function(path, ignoreParent) {
      if (path == null) {
        return this.option;
      }
      return this._doGet(this.parsePath(path), !ignoreParent && this.parentModel);
    };
    Model2.prototype.getShallow = function(key, ignoreParent) {
      var option = this.option;
      var val = option == null ? option : option[key];
      if (val == null && !ignoreParent) {
        var parentModel = this.parentModel;
        if (parentModel) {
          val = parentModel.getShallow(key);
        }
      }
      return val;
    };
    Model2.prototype.getModel = function(path, parentModel) {
      var hasPath = path != null;
      var pathFinal = hasPath ? this.parsePath(path) : null;
      var obj = hasPath ? this._doGet(pathFinal) : this.option;
      parentModel = parentModel || this.parentModel && this.parentModel.getModel(this.resolveParentPath(pathFinal));
      return new Model2(obj, parentModel, this.ecModel);
    };
    Model2.prototype.isEmpty = function() {
      return this.option == null;
    };
    Model2.prototype.restoreData = function() {
    };
    Model2.prototype.clone = function() {
      var Ctor = this.constructor;
      return new Ctor(clone$1(this.option));
    };
    Model2.prototype.parsePath = function(path) {
      if (typeof path === "string") {
        return path.split(".");
      }
      return path;
    };
    Model2.prototype.resolveParentPath = function(path) {
      return path;
    };
    Model2.prototype.isAnimationEnabled = function() {
      if (!env.node && this.option) {
        if (this.option.animation != null) {
          return !!this.option.animation;
        } else if (this.parentModel) {
          return this.parentModel.isAnimationEnabled();
        }
      }
    };
    Model2.prototype._doGet = function(pathArr, parentModel) {
      var obj = this.option;
      if (!pathArr) {
        return obj;
      }
      for (var i = 0; i < pathArr.length; i++) {
        if (!pathArr[i]) {
          continue;
        }
        obj = obj && typeof obj === "object" ? obj[pathArr[i]] : null;
        if (obj == null) {
          break;
        }
      }
      if (obj == null && parentModel) {
        obj = parentModel._doGet(this.resolveParentPath(pathArr), parentModel.parentModel);
      }
      return obj;
    };
    return Model2;
  }()
);
enableClassExtend(Model);
enableClassCheck(Model);
mixin(Model, LineStyleMixin);
mixin(Model, ItemStyleMixin);
mixin(Model, AreaStyleMixin);
mixin(Model, TextStyleMixin);
var base = Math.round(Math.random() * 10);
function getUID(type) {
  return [type || "", base++].join("_");
}
function enableSubTypeDefaulter(target) {
  var subTypeDefaulters = {};
  target.registerSubTypeDefaulter = function(componentType, defaulter) {
    var componentTypeInfo = parseClassType(componentType);
    subTypeDefaulters[componentTypeInfo.main] = defaulter;
  };
  target.determineSubType = function(componentType, option) {
    var type = option.type;
    if (!type) {
      var componentTypeMain = parseClassType(componentType).main;
      if (target.hasSubTypes(componentType) && subTypeDefaulters[componentTypeMain]) {
        type = subTypeDefaulters[componentTypeMain](option);
      }
    }
    return type;
  };
}
function enableTopologicalTravel(entity, dependencyGetter) {
  entity.topologicalTravel = function(targetNameList, fullNameList, callback, context) {
    if (!targetNameList.length) {
      return;
    }
    var result = makeDepndencyGraph(fullNameList);
    var graph = result.graph;
    var noEntryList = result.noEntryList;
    var targetNameSet = {};
    zrUtil.each(targetNameList, function(name) {
      targetNameSet[name] = true;
    });
    while (noEntryList.length) {
      var currComponentType = noEntryList.pop();
      var currVertex = graph[currComponentType];
      var isInTargetNameSet = !!targetNameSet[currComponentType];
      if (isInTargetNameSet) {
        callback.call(context, currComponentType, currVertex.originalDeps.slice());
        delete targetNameSet[currComponentType];
      }
      zrUtil.each(currVertex.successor, isInTargetNameSet ? removeEdgeAndAdd : removeEdge);
    }
    zrUtil.each(targetNameSet, function() {
      var errMsg = "";
      throw new Error(errMsg);
    });
    function removeEdge(succComponentType) {
      graph[succComponentType].entryCount--;
      if (graph[succComponentType].entryCount === 0) {
        noEntryList.push(succComponentType);
      }
    }
    function removeEdgeAndAdd(succComponentType) {
      targetNameSet[succComponentType] = true;
      removeEdge(succComponentType);
    }
  };
  function makeDepndencyGraph(fullNameList) {
    var graph = {};
    var noEntryList = [];
    zrUtil.each(fullNameList, function(name) {
      var thisItem = createDependencyGraphItem(graph, name);
      var originalDeps = thisItem.originalDeps = dependencyGetter(name);
      var availableDeps = getAvailableDependencies(originalDeps, fullNameList);
      thisItem.entryCount = availableDeps.length;
      if (thisItem.entryCount === 0) {
        noEntryList.push(name);
      }
      zrUtil.each(availableDeps, function(dependentName) {
        if (zrUtil.indexOf(thisItem.predecessor, dependentName) < 0) {
          thisItem.predecessor.push(dependentName);
        }
        var thatItem = createDependencyGraphItem(graph, dependentName);
        if (zrUtil.indexOf(thatItem.successor, dependentName) < 0) {
          thatItem.successor.push(name);
        }
      });
    });
    return {
      graph,
      noEntryList
    };
  }
  function createDependencyGraphItem(graph, name) {
    if (!graph[name]) {
      graph[name] = {
        predecessor: [],
        successor: []
      };
    }
    return graph[name];
  }
  function getAvailableDependencies(originalDeps, fullNameList) {
    var availableDeps = [];
    zrUtil.each(originalDeps, function(dep) {
      zrUtil.indexOf(fullNameList, dep) >= 0 && availableDeps.push(dep);
    });
    return availableDeps;
  }
}
function inheritDefaultOption(superOption, subOption) {
  return zrUtil.merge(zrUtil.merge({}, superOption, true), subOption, true);
}
const langEN = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst",
      custom: "Custom chart",
      chart: "Chart"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
};
const langZH = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图",
      custom: "自定义图表",
      chart: "图表"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var LOCALE_ZH = "ZH";
var LOCALE_EN = "EN";
var DEFAULT_LOCALE = LOCALE_EN;
var localeStorage = {};
var localeModels = {};
var SYSTEM_LANG = !env.domSupported ? DEFAULT_LOCALE : function() {
  var langStr = (
    /* eslint-disable-next-line */
    ((void 0).documentElement.lang || (void 0).language || (void 0).browserLanguage || DEFAULT_LOCALE).toUpperCase()
  );
  return langStr.indexOf(LOCALE_ZH) > -1 ? LOCALE_ZH : DEFAULT_LOCALE;
}();
function registerLocale(locale, localeObj) {
  locale = locale.toUpperCase();
  localeModels[locale] = new Model(localeObj);
  localeStorage[locale] = localeObj;
}
function createLocaleObject(locale) {
  if (isString$2(locale)) {
    var localeObj = localeStorage[locale.toUpperCase()] || {};
    if (locale === LOCALE_ZH || locale === LOCALE_EN) {
      return clone$1(localeObj);
    } else {
      return merge(clone$1(localeObj), clone$1(localeStorage[DEFAULT_LOCALE]), false);
    }
  } else {
    return merge(clone$1(locale), clone$1(localeStorage[DEFAULT_LOCALE]), false);
  }
}
function getLocaleModel(lang) {
  return localeModels[lang];
}
function getDefaultLocaleModel() {
  return localeModels[DEFAULT_LOCALE];
}
registerLocale(LOCALE_EN, langEN);
registerLocale(LOCALE_ZH, langZH);
var ONE_SECOND = 1e3;
var ONE_MINUTE = ONE_SECOND * 60;
var ONE_HOUR = ONE_MINUTE * 60;
var ONE_DAY = ONE_HOUR * 24;
var ONE_YEAR = ONE_DAY * 365;
var defaultLeveledFormatter = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}",
  none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
};
var fullDayFormatter = "{yyyy}-{MM}-{dd}";
var fullLeveledFormatter = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: fullDayFormatter,
  hour: fullDayFormatter + " " + defaultLeveledFormatter.hour,
  minute: fullDayFormatter + " " + defaultLeveledFormatter.minute,
  second: fullDayFormatter + " " + defaultLeveledFormatter.second,
  millisecond: defaultLeveledFormatter.none
};
var primaryTimeUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
var timeUnits = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function pad(str, len) {
  str += "";
  return "0000".substr(0, len - str.length) + str;
}
function getPrimaryTimeUnit(timeUnit) {
  switch (timeUnit) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return timeUnit;
  }
}
function isPrimaryTimeUnit(timeUnit) {
  return timeUnit === getPrimaryTimeUnit(timeUnit);
}
function getDefaultFormatPrecisionOfInterval(timeUnit) {
  switch (timeUnit) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function format(time, template, isUTC, lang) {
  var date = parseDate(time);
  var y = date[fullYearGetterName(isUTC)]();
  var M = date[monthGetterName(isUTC)]() + 1;
  var q = Math.floor((M - 1) / 3) + 1;
  var d = date[dateGetterName(isUTC)]();
  var e = date["get" + (isUTC ? "UTC" : "") + "Day"]();
  var H = date[hoursGetterName(isUTC)]();
  var h2 = (H - 1) % 12 + 1;
  var m = date[minutesGetterName(isUTC)]();
  var s = date[secondsGetterName(isUTC)]();
  var S = date[millisecondsGetterName(isUTC)]();
  var a = H >= 12 ? "pm" : "am";
  var A = a.toUpperCase();
  var localeModel = lang instanceof Model ? lang : getLocaleModel(lang || SYSTEM_LANG) || getDefaultLocaleModel();
  var timeModel = localeModel.getModel("time");
  var month = timeModel.get("month");
  var monthAbbr = timeModel.get("monthAbbr");
  var dayOfWeek = timeModel.get("dayOfWeek");
  var dayOfWeekAbbr = timeModel.get("dayOfWeekAbbr");
  return (template || "").replace(/{a}/g, a + "").replace(/{A}/g, A + "").replace(/{yyyy}/g, y + "").replace(/{yy}/g, pad(y % 100 + "", 2)).replace(/{Q}/g, q + "").replace(/{MMMM}/g, month[M - 1]).replace(/{MMM}/g, monthAbbr[M - 1]).replace(/{MM}/g, pad(M, 2)).replace(/{M}/g, M + "").replace(/{dd}/g, pad(d, 2)).replace(/{d}/g, d + "").replace(/{eeee}/g, dayOfWeek[e]).replace(/{ee}/g, dayOfWeekAbbr[e]).replace(/{e}/g, e + "").replace(/{HH}/g, pad(H, 2)).replace(/{H}/g, H + "").replace(/{hh}/g, pad(h2 + "", 2)).replace(/{h}/g, h2 + "").replace(/{mm}/g, pad(m, 2)).replace(/{m}/g, m + "").replace(/{ss}/g, pad(s, 2)).replace(/{s}/g, s + "").replace(/{SSS}/g, pad(S, 3)).replace(/{S}/g, S + "");
}
function leveledFormat(tick, idx, formatter, lang, isUTC) {
  var template = null;
  if (zrUtil.isString(formatter)) {
    template = formatter;
  } else if (zrUtil.isFunction(formatter)) {
    template = formatter(tick.value, idx, {
      level: tick.level
    });
  } else {
    var defaults2 = zrUtil.extend({}, defaultLeveledFormatter);
    if (tick.level > 0) {
      for (var i = 0; i < primaryTimeUnits.length; ++i) {
        defaults2[primaryTimeUnits[i]] = "{primary|" + defaults2[primaryTimeUnits[i]] + "}";
      }
    }
    var mergedFormatter = formatter ? formatter.inherit === false ? formatter : zrUtil.defaults(formatter, defaults2) : defaults2;
    var unit = getUnitFromValue(tick.value, isUTC);
    if (mergedFormatter[unit]) {
      template = mergedFormatter[unit];
    } else if (mergedFormatter.inherit) {
      var targetId = timeUnits.indexOf(unit);
      for (var i = targetId - 1; i >= 0; --i) {
        if (mergedFormatter[unit]) {
          template = mergedFormatter[unit];
          break;
        }
      }
      template = template || defaults2.none;
    }
    if (zrUtil.isArray(template)) {
      var levelId = tick.level == null ? 0 : tick.level >= 0 ? tick.level : template.length + tick.level;
      levelId = Math.min(levelId, template.length - 1);
      template = template[levelId];
    }
  }
  return format(new Date(tick.value), template, isUTC, lang);
}
function getUnitFromValue(value, isUTC) {
  var date = parseDate(value);
  var M = date[monthGetterName(isUTC)]() + 1;
  var d = date[dateGetterName(isUTC)]();
  var h2 = date[hoursGetterName(isUTC)]();
  var m = date[minutesGetterName(isUTC)]();
  var s = date[secondsGetterName(isUTC)]();
  var S = date[millisecondsGetterName(isUTC)]();
  var isSecond = S === 0;
  var isMinute = isSecond && s === 0;
  var isHour = isMinute && m === 0;
  var isDay = isHour && h2 === 0;
  var isMonth = isDay && d === 1;
  var isYear = isMonth && M === 1;
  if (isYear) {
    return "year";
  } else if (isMonth) {
    return "month";
  } else if (isDay) {
    return "day";
  } else if (isHour) {
    return "hour";
  } else if (isMinute) {
    return "minute";
  } else if (isSecond) {
    return "second";
  } else {
    return "millisecond";
  }
}
function getUnitValue(value, unit, isUTC) {
  var date = zrUtil.isNumber(value) ? parseDate(value) : value;
  unit = unit || getUnitFromValue(value, isUTC);
  switch (unit) {
    case "year":
      return date[fullYearGetterName(isUTC)]();
    case "half-year":
      return date[monthGetterName(isUTC)]() >= 6 ? 1 : 0;
    case "quarter":
      return Math.floor((date[monthGetterName(isUTC)]() + 1) / 4);
    case "month":
      return date[monthGetterName(isUTC)]();
    case "day":
      return date[dateGetterName(isUTC)]();
    case "half-day":
      return date[hoursGetterName(isUTC)]() / 24;
    case "hour":
      return date[hoursGetterName(isUTC)]();
    case "minute":
      return date[minutesGetterName(isUTC)]();
    case "second":
      return date[secondsGetterName(isUTC)]();
    case "millisecond":
      return date[millisecondsGetterName(isUTC)]();
  }
}
function fullYearGetterName(isUTC) {
  return isUTC ? "getUTCFullYear" : "getFullYear";
}
function monthGetterName(isUTC) {
  return isUTC ? "getUTCMonth" : "getMonth";
}
function dateGetterName(isUTC) {
  return isUTC ? "getUTCDate" : "getDate";
}
function hoursGetterName(isUTC) {
  return isUTC ? "getUTCHours" : "getHours";
}
function minutesGetterName(isUTC) {
  return isUTC ? "getUTCMinutes" : "getMinutes";
}
function secondsGetterName(isUTC) {
  return isUTC ? "getUTCSeconds" : "getSeconds";
}
function millisecondsGetterName(isUTC) {
  return isUTC ? "getUTCMilliseconds" : "getMilliseconds";
}
function fullYearSetterName(isUTC) {
  return isUTC ? "setUTCFullYear" : "setFullYear";
}
function monthSetterName(isUTC) {
  return isUTC ? "setUTCMonth" : "setMonth";
}
function dateSetterName(isUTC) {
  return isUTC ? "setUTCDate" : "setDate";
}
function hoursSetterName(isUTC) {
  return isUTC ? "setUTCHours" : "setHours";
}
function minutesSetterName(isUTC) {
  return isUTC ? "setUTCMinutes" : "setMinutes";
}
function secondsSetterName(isUTC) {
  return isUTC ? "setUTCSeconds" : "setSeconds";
}
function millisecondsSetterName(isUTC) {
  return isUTC ? "setUTCMilliseconds" : "setMilliseconds";
}
function addCommas(x) {
  if (!isNumeric(x)) {
    return zrUtil.isString(x) ? x : "-";
  }
  var parts = (x + "").split(".");
  return parts[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (parts.length > 1 ? "." + parts[1] : "");
}
function toCamelCase(str, upperCaseFirst) {
  str = (str || "").toLowerCase().replace(/-(.)/g, function(match, group1) {
    return group1.toUpperCase();
  });
  if (upperCaseFirst && str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
}
var normalizeCssArray = zrUtil.normalizeCssArray;
function makeValueReadable(value, valueType, useUTC) {
  var USER_READABLE_DEFUALT_TIME_PATTERN = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function stringToUserReadable(str) {
    return str && zrUtil.trim(str) ? str : "-";
  }
  function isNumberUserReadable(num) {
    return !!(num != null && !isNaN(num) && isFinite(num));
  }
  var isTypeTime = valueType === "time";
  var isValueDate = value instanceof Date;
  if (isTypeTime || isValueDate) {
    var date = isTypeTime ? parseDate(value) : value;
    if (!isNaN(+date)) {
      return format(date, USER_READABLE_DEFUALT_TIME_PATTERN, useUTC);
    } else if (isValueDate) {
      return "-";
    }
  }
  if (valueType === "ordinal") {
    return zrUtil.isStringSafe(value) ? stringToUserReadable(value) : zrUtil.isNumber(value) ? isNumberUserReadable(value) ? value + "" : "-" : "-";
  }
  var numericResult = numericToNumber(value);
  return isNumberUserReadable(numericResult) ? addCommas(numericResult) : zrUtil.isStringSafe(value) ? stringToUserReadable(value) : typeof value === "boolean" ? value + "" : "-";
}
var TPL_VAR_ALIAS = ["a", "b", "c", "d", "e", "f", "g"];
var wrapVar = function(varName, seriesIdx) {
  return "{" + varName + (seriesIdx == null ? "" : seriesIdx) + "}";
};
function formatTpl(tpl, paramsList, encode) {
  if (!zrUtil.isArray(paramsList)) {
    paramsList = [paramsList];
  }
  var seriesLen = paramsList.length;
  if (!seriesLen) {
    return "";
  }
  var $vars = paramsList[0].$vars || [];
  for (var i = 0; i < $vars.length; i++) {
    var alias = TPL_VAR_ALIAS[i];
    tpl = tpl.replace(wrapVar(alias), wrapVar(alias, 0));
  }
  for (var seriesIdx = 0; seriesIdx < seriesLen; seriesIdx++) {
    for (var k = 0; k < $vars.length; k++) {
      var val = paramsList[seriesIdx][$vars[k]];
      tpl = tpl.replace(wrapVar(TPL_VAR_ALIAS[k], seriesIdx), encode ? encodeHTML(val) : val);
    }
  }
  return tpl;
}
function getTooltipMarker(inOpt, extraCssText) {
  var opt = zrUtil.isString(inOpt) ? {
    color: inOpt,
    extraCssText
  } : inOpt || {};
  var color = opt.color;
  var type = opt.type;
  extraCssText = opt.extraCssText;
  var renderMode = opt.renderMode || "html";
  if (!color) {
    return "";
  }
  if (renderMode === "html") {
    return type === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + encodeHTML(color) + ";" + (extraCssText || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + encodeHTML(color) + ";" + (extraCssText || "") + '"></span>';
  } else {
    var markerId = opt.markerId || "markerX";
    return {
      renderMode,
      content: "{" + markerId + "|}  ",
      style: type === "subItem" ? {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: color
      } : {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: color
      }
    };
  }
}
function convertToColorString(color, defaultColor) {
  defaultColor = defaultColor || "transparent";
  return zrUtil.isString(color) ? color : zrUtil.isObject(color) ? color.colorStops && (color.colorStops[0] || {}).color || defaultColor : defaultColor;
}
function windowOpen(link, target) {
  if (target === "_blank" || target === "blank") {
    var blank = (void 0).open();
    blank.opener = null;
    blank.location.href = link;
  } else {
    (void 0).open(link, target);
  }
}
var each$2 = zrUtil.each;
var LOCATION_PARAMS = ["left", "right", "top", "bottom", "width", "height"];
var HV_NAMES = [["width", "left", "right"], ["height", "top", "bottom"]];
function boxLayout(orient, group, gap, maxWidth, maxHeight) {
  var x = 0;
  var y = 0;
  if (maxWidth == null) {
    maxWidth = Infinity;
  }
  if (maxHeight == null) {
    maxHeight = Infinity;
  }
  var currentLineMaxSize = 0;
  group.eachChild(function(child, idx) {
    var rect = child.getBoundingRect();
    var nextChild = group.childAt(idx + 1);
    var nextChildRect = nextChild && nextChild.getBoundingRect();
    var nextX;
    var nextY;
    if (orient === "horizontal") {
      var moveX = rect.width + (nextChildRect ? -nextChildRect.x + rect.x : 0);
      nextX = x + moveX;
      if (nextX > maxWidth || child.newline) {
        x = 0;
        nextX = moveX;
        y += currentLineMaxSize + gap;
        currentLineMaxSize = rect.height;
      } else {
        currentLineMaxSize = Math.max(currentLineMaxSize, rect.height);
      }
    } else {
      var moveY = rect.height + (nextChildRect ? -nextChildRect.y + rect.y : 0);
      nextY = y + moveY;
      if (nextY > maxHeight || child.newline) {
        x += currentLineMaxSize + gap;
        y = 0;
        nextY = moveY;
        currentLineMaxSize = rect.width;
      } else {
        currentLineMaxSize = Math.max(currentLineMaxSize, rect.width);
      }
    }
    if (child.newline) {
      return;
    }
    child.x = x;
    child.y = y;
    child.markRedraw();
    orient === "horizontal" ? x = nextX + gap : y = nextY + gap;
  });
}
var box = boxLayout;
zrUtil.curry(boxLayout, "vertical");
zrUtil.curry(boxLayout, "horizontal");
function getLayoutRect(positionInfo, containerRect, margin) {
  margin = normalizeCssArray(margin || 0);
  var containerWidth = containerRect.width;
  var containerHeight = containerRect.height;
  var left = parsePercent(positionInfo.left, containerWidth);
  var top = parsePercent(positionInfo.top, containerHeight);
  var right = parsePercent(positionInfo.right, containerWidth);
  var bottom = parsePercent(positionInfo.bottom, containerHeight);
  var width = parsePercent(positionInfo.width, containerWidth);
  var height = parsePercent(positionInfo.height, containerHeight);
  var verticalMargin = margin[2] + margin[0];
  var horizontalMargin = margin[1] + margin[3];
  var aspect = positionInfo.aspect;
  if (isNaN(width)) {
    width = containerWidth - right - horizontalMargin - left;
  }
  if (isNaN(height)) {
    height = containerHeight - bottom - verticalMargin - top;
  }
  if (aspect != null) {
    if (isNaN(width) && isNaN(height)) {
      if (aspect > containerWidth / containerHeight) {
        width = containerWidth * 0.8;
      } else {
        height = containerHeight * 0.8;
      }
    }
    if (isNaN(width)) {
      width = aspect * height;
    }
    if (isNaN(height)) {
      height = width / aspect;
    }
  }
  if (isNaN(left)) {
    left = containerWidth - right - width - horizontalMargin;
  }
  if (isNaN(top)) {
    top = containerHeight - bottom - height - verticalMargin;
  }
  switch (positionInfo.left || positionInfo.right) {
    case "center":
      left = containerWidth / 2 - width / 2 - margin[3];
      break;
    case "right":
      left = containerWidth - width - horizontalMargin;
      break;
  }
  switch (positionInfo.top || positionInfo.bottom) {
    case "middle":
    case "center":
      top = containerHeight / 2 - height / 2 - margin[0];
      break;
    case "bottom":
      top = containerHeight - height - verticalMargin;
      break;
  }
  left = left || 0;
  top = top || 0;
  if (isNaN(width)) {
    width = containerWidth - horizontalMargin - left - (right || 0);
  }
  if (isNaN(height)) {
    height = containerHeight - verticalMargin - top - (bottom || 0);
  }
  var rect = new BoundingRect(left + margin[3], top + margin[0], width, height);
  rect.margin = margin;
  return rect;
}
function fetchLayoutMode(ins) {
  var layoutMode = ins.layoutMode || ins.constructor.layoutMode;
  return zrUtil.isObject(layoutMode) ? layoutMode : layoutMode ? {
    type: layoutMode
  } : null;
}
function mergeLayoutParam(targetOption, newOption, opt) {
  var ignoreSize = opt && opt.ignoreSize;
  !zrUtil.isArray(ignoreSize) && (ignoreSize = [ignoreSize, ignoreSize]);
  var hResult = merge2(HV_NAMES[0], 0);
  var vResult = merge2(HV_NAMES[1], 1);
  copy(HV_NAMES[0], targetOption, hResult);
  copy(HV_NAMES[1], targetOption, vResult);
  function merge2(names, hvIdx) {
    var newParams = {};
    var newValueCount = 0;
    var merged = {};
    var mergedValueCount = 0;
    var enoughParamNumber = 2;
    each$2(names, function(name) {
      merged[name] = targetOption[name];
    });
    each$2(names, function(name) {
      hasProp(newOption, name) && (newParams[name] = merged[name] = newOption[name]);
      hasValue(newParams, name) && newValueCount++;
      hasValue(merged, name) && mergedValueCount++;
    });
    if (ignoreSize[hvIdx]) {
      if (hasValue(newOption, names[1])) {
        merged[names[2]] = null;
      } else if (hasValue(newOption, names[2])) {
        merged[names[1]] = null;
      }
      return merged;
    }
    if (mergedValueCount === enoughParamNumber || !newValueCount) {
      return merged;
    } else if (newValueCount >= enoughParamNumber) {
      return newParams;
    } else {
      for (var i = 0; i < names.length; i++) {
        var name_1 = names[i];
        if (!hasProp(newParams, name_1) && hasProp(targetOption, name_1)) {
          newParams[name_1] = targetOption[name_1];
          break;
        }
      }
      return newParams;
    }
  }
  function hasProp(obj, name) {
    return obj.hasOwnProperty(name);
  }
  function hasValue(obj, name) {
    return obj[name] != null && obj[name] !== "auto";
  }
  function copy(names, target, source) {
    each$2(names, function(name) {
      target[name] = source[name];
    });
  }
}
function getLayoutParams(source) {
  return copyLayoutParams({}, source);
}
function copyLayoutParams(target, source) {
  source && target && each$2(LOCATION_PARAMS, function(name) {
    source.hasOwnProperty(name) && (target[name] = source[name]);
  });
  return target;
}
var inner$9 = makeInner();
var ComponentModel = (
  /** @class */
  function(_super) {
    __extends(ComponentModel2, _super);
    function ComponentModel2(option, parentModel, ecModel) {
      var _this = _super.call(this, option, parentModel, ecModel) || this;
      _this.uid = getUID("ec_cpt_model");
      return _this;
    }
    ComponentModel2.prototype.init = function(option, parentModel, ecModel) {
      this.mergeDefaultAndTheme(option, ecModel);
    };
    ComponentModel2.prototype.mergeDefaultAndTheme = function(option, ecModel) {
      var layoutMode = fetchLayoutMode(this);
      var inputPositionParams = layoutMode ? getLayoutParams(option) : {};
      var themeModel = ecModel.getTheme();
      zrUtil.merge(option, themeModel.get(this.mainType));
      zrUtil.merge(option, this.getDefaultOption());
      if (layoutMode) {
        mergeLayoutParam(option, inputPositionParams, layoutMode);
      }
    };
    ComponentModel2.prototype.mergeOption = function(option, ecModel) {
      zrUtil.merge(this.option, option, true);
      var layoutMode = fetchLayoutMode(this);
      if (layoutMode) {
        mergeLayoutParam(this.option, option, layoutMode);
      }
    };
    ComponentModel2.prototype.optionUpdated = function(newCptOption, isInit) {
    };
    ComponentModel2.prototype.getDefaultOption = function() {
      var ctor = this.constructor;
      if (!isExtendedClass(ctor)) {
        return ctor.defaultOption;
      }
      var fields = inner$9(this);
      if (!fields.defaultOption) {
        var optList = [];
        var clz = ctor;
        while (clz) {
          var opt = clz.prototype.defaultOption;
          opt && optList.push(opt);
          clz = clz.superClass;
        }
        var defaultOption2 = {};
        for (var i = optList.length - 1; i >= 0; i--) {
          defaultOption2 = zrUtil.merge(defaultOption2, optList[i], true);
        }
        fields.defaultOption = defaultOption2;
      }
      return fields.defaultOption;
    };
    ComponentModel2.prototype.getReferringComponents = function(mainType, opt) {
      var indexKey = mainType + "Index";
      var idKey = mainType + "Id";
      return queryReferringComponents(this.ecModel, mainType, {
        index: this.get(indexKey, true),
        id: this.get(idKey, true)
      }, opt);
    };
    ComponentModel2.prototype.getBoxLayoutParams = function() {
      var boxLayoutModel = this;
      return {
        left: boxLayoutModel.get("left"),
        top: boxLayoutModel.get("top"),
        right: boxLayoutModel.get("right"),
        bottom: boxLayoutModel.get("bottom"),
        width: boxLayoutModel.get("width"),
        height: boxLayoutModel.get("height")
      };
    };
    ComponentModel2.prototype.getZLevelKey = function() {
      return "";
    };
    ComponentModel2.prototype.setZLevel = function(zlevel) {
      this.option.zlevel = zlevel;
    };
    ComponentModel2.protoInitialize = function() {
      var proto2 = ComponentModel2.prototype;
      proto2.type = "component";
      proto2.id = "";
      proto2.name = "";
      proto2.mainType = "";
      proto2.subType = "";
      proto2.componentIndex = 0;
    }();
    return ComponentModel2;
  }(Model)
);
mountExtend(ComponentModel, Model);
enableClassManagement(ComponentModel);
enableSubTypeDefaulter(ComponentModel);
enableTopologicalTravel(ComponentModel, getDependencies);
function getDependencies(componentType) {
  var deps = [];
  zrUtil.each(ComponentModel.getClassesByMainType(componentType), function(clz) {
    deps = deps.concat(clz.dependencies || clz.prototype.dependencies || []);
  });
  deps = zrUtil.map(deps, function(type) {
    return parseClassType(type).main;
  });
  if (componentType !== "dataset" && zrUtil.indexOf(deps, "dataset") <= 0) {
    deps.unshift("dataset");
  }
  return deps;
}
var platform = "";
var decalColor = "rgba(0, 0, 0, 0.2)";
const globalDefault = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: decalColor,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: decalColor,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: decalColor,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: decalColor,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: decalColor,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: decalColor,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: platform.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: false
};
var VISUAL_DIMENSIONS = createHashMap(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]);
var SOURCE_FORMAT_ORIGINAL = "original";
var SOURCE_FORMAT_ARRAY_ROWS = "arrayRows";
var SOURCE_FORMAT_OBJECT_ROWS = "objectRows";
var SOURCE_FORMAT_KEYED_COLUMNS = "keyedColumns";
var SOURCE_FORMAT_TYPED_ARRAY = "typedArray";
var SOURCE_FORMAT_UNKNOWN = "unknown";
var SERIES_LAYOUT_BY_COLUMN = "column";
var SERIES_LAYOUT_BY_ROW = "row";
var BE_ORDINAL = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
};
var innerGlobalModel = makeInner();
function resetSourceDefaulter(ecModel) {
  innerGlobalModel(ecModel).datasetMap = createHashMap();
}
function makeSeriesEncodeForAxisCoordSys(coordDimensions, seriesModel, source) {
  var encode = {};
  var datasetModel = querySeriesUpstreamDatasetModel(seriesModel);
  if (!datasetModel || !coordDimensions) {
    return encode;
  }
  var encodeItemName = [];
  var encodeSeriesName = [];
  var ecModel = seriesModel.ecModel;
  var datasetMap = innerGlobalModel(ecModel).datasetMap;
  var key = datasetModel.uid + "_" + source.seriesLayoutBy;
  var baseCategoryDimIndex;
  var categoryWayValueDimStart;
  coordDimensions = coordDimensions.slice();
  each$3(coordDimensions, function(coordDimInfoLoose, coordDimIdx) {
    var coordDimInfo = isObject$3(coordDimInfoLoose) ? coordDimInfoLoose : coordDimensions[coordDimIdx] = {
      name: coordDimInfoLoose
    };
    if (coordDimInfo.type === "ordinal" && baseCategoryDimIndex == null) {
      baseCategoryDimIndex = coordDimIdx;
      categoryWayValueDimStart = getDataDimCountOnCoordDim(coordDimInfo);
    }
    encode[coordDimInfo.name] = [];
  });
  var datasetRecord = datasetMap.get(key) || datasetMap.set(key, {
    categoryWayDim: categoryWayValueDimStart,
    valueWayDim: 0
  });
  each$3(coordDimensions, function(coordDimInfo, coordDimIdx) {
    var coordDimName = coordDimInfo.name;
    var count = getDataDimCountOnCoordDim(coordDimInfo);
    if (baseCategoryDimIndex == null) {
      var start = datasetRecord.valueWayDim;
      pushDim(encode[coordDimName], start, count);
      pushDim(encodeSeriesName, start, count);
      datasetRecord.valueWayDim += count;
    } else if (baseCategoryDimIndex === coordDimIdx) {
      pushDim(encode[coordDimName], 0, count);
      pushDim(encodeItemName, 0, count);
    } else {
      var start = datasetRecord.categoryWayDim;
      pushDim(encode[coordDimName], start, count);
      pushDim(encodeSeriesName, start, count);
      datasetRecord.categoryWayDim += count;
    }
  });
  function pushDim(dimIdxArr, idxFrom, idxCount) {
    for (var i = 0; i < idxCount; i++) {
      dimIdxArr.push(idxFrom + i);
    }
  }
  function getDataDimCountOnCoordDim(coordDimInfo) {
    var dimsDef = coordDimInfo.dimsDef;
    return dimsDef ? dimsDef.length : 1;
  }
  encodeItemName.length && (encode.itemName = encodeItemName);
  encodeSeriesName.length && (encode.seriesName = encodeSeriesName);
  return encode;
}
function makeSeriesEncodeForNameBased(seriesModel, source, dimCount) {
  var encode = {};
  var datasetModel = querySeriesUpstreamDatasetModel(seriesModel);
  if (!datasetModel) {
    return encode;
  }
  var sourceFormat = source.sourceFormat;
  var dimensionsDefine = source.dimensionsDefine;
  var potentialNameDimIndex;
  if (sourceFormat === SOURCE_FORMAT_OBJECT_ROWS || sourceFormat === SOURCE_FORMAT_KEYED_COLUMNS) {
    each$3(dimensionsDefine, function(dim, idx) {
      if ((isObject$3(dim) ? dim.name : dim) === "name") {
        potentialNameDimIndex = idx;
      }
    });
  }
  var idxResult = function() {
    var idxRes0 = {};
    var idxRes1 = {};
    var guessRecords = [];
    for (var i = 0, len = Math.min(5, dimCount); i < len; i++) {
      var guessResult = doGuessOrdinal(source.data, sourceFormat, source.seriesLayoutBy, dimensionsDefine, source.startIndex, i);
      guessRecords.push(guessResult);
      var isPureNumber = guessResult === BE_ORDINAL.Not;
      if (isPureNumber && idxRes0.v == null && i !== potentialNameDimIndex) {
        idxRes0.v = i;
      }
      if (idxRes0.n == null || idxRes0.n === idxRes0.v || !isPureNumber && guessRecords[idxRes0.n] === BE_ORDINAL.Not) {
        idxRes0.n = i;
      }
      if (fulfilled(idxRes0) && guessRecords[idxRes0.n] !== BE_ORDINAL.Not) {
        return idxRes0;
      }
      if (!isPureNumber) {
        if (guessResult === BE_ORDINAL.Might && idxRes1.v == null && i !== potentialNameDimIndex) {
          idxRes1.v = i;
        }
        if (idxRes1.n == null || idxRes1.n === idxRes1.v) {
          idxRes1.n = i;
        }
      }
    }
    function fulfilled(idxResult2) {
      return idxResult2.v != null && idxResult2.n != null;
    }
    return fulfilled(idxRes0) ? idxRes0 : fulfilled(idxRes1) ? idxRes1 : null;
  }();
  if (idxResult) {
    encode.value = [idxResult.v];
    var nameDimIndex = potentialNameDimIndex != null ? potentialNameDimIndex : idxResult.n;
    encode.itemName = [nameDimIndex];
    encode.seriesName = [nameDimIndex];
  }
  return encode;
}
function querySeriesUpstreamDatasetModel(seriesModel) {
  var thisData = seriesModel.get("data", true);
  if (!thisData) {
    return queryReferringComponents(seriesModel.ecModel, "dataset", {
      index: seriesModel.get("datasetIndex", true),
      id: seriesModel.get("datasetId", true)
    }, SINGLE_REFERRING).models[0];
  }
}
function queryDatasetUpstreamDatasetModels(datasetModel) {
  if (!datasetModel.get("transform", true) && !datasetModel.get("fromTransformResult", true)) {
    return [];
  }
  return queryReferringComponents(datasetModel.ecModel, "dataset", {
    index: datasetModel.get("fromDatasetIndex", true),
    id: datasetModel.get("fromDatasetId", true)
  }, SINGLE_REFERRING).models;
}
function guessOrdinal(source, dimIndex) {
  return doGuessOrdinal(source.data, source.sourceFormat, source.seriesLayoutBy, source.dimensionsDefine, source.startIndex, dimIndex);
}
function doGuessOrdinal(data, sourceFormat, seriesLayoutBy, dimensionsDefine, startIndex, dimIndex) {
  var result;
  var maxLoop = 5;
  if (isTypedArray(data)) {
    return BE_ORDINAL.Not;
  }
  var dimName;
  var dimType;
  if (dimensionsDefine) {
    var dimDefItem = dimensionsDefine[dimIndex];
    if (isObject$3(dimDefItem)) {
      dimName = dimDefItem.name;
      dimType = dimDefItem.type;
    } else if (isString$2(dimDefItem)) {
      dimName = dimDefItem;
    }
  }
  if (dimType != null) {
    return dimType === "ordinal" ? BE_ORDINAL.Must : BE_ORDINAL.Not;
  }
  if (sourceFormat === SOURCE_FORMAT_ARRAY_ROWS) {
    var dataArrayRows = data;
    if (seriesLayoutBy === SERIES_LAYOUT_BY_ROW) {
      var sample = dataArrayRows[dimIndex];
      for (var i = 0; i < (sample || []).length && i < maxLoop; i++) {
        if ((result = detectValue(sample[startIndex + i])) != null) {
          return result;
        }
      }
    } else {
      for (var i = 0; i < dataArrayRows.length && i < maxLoop; i++) {
        var row = dataArrayRows[startIndex + i];
        if (row && (result = detectValue(row[dimIndex])) != null) {
          return result;
        }
      }
    }
  } else if (sourceFormat === SOURCE_FORMAT_OBJECT_ROWS) {
    var dataObjectRows = data;
    if (!dimName) {
      return BE_ORDINAL.Not;
    }
    for (var i = 0; i < dataObjectRows.length && i < maxLoop; i++) {
      var item = dataObjectRows[i];
      if (item && (result = detectValue(item[dimName])) != null) {
        return result;
      }
    }
  } else if (sourceFormat === SOURCE_FORMAT_KEYED_COLUMNS) {
    var dataKeyedColumns = data;
    if (!dimName) {
      return BE_ORDINAL.Not;
    }
    var sample = dataKeyedColumns[dimName];
    if (!sample || isTypedArray(sample)) {
      return BE_ORDINAL.Not;
    }
    for (var i = 0; i < sample.length && i < maxLoop; i++) {
      if ((result = detectValue(sample[i])) != null) {
        return result;
      }
    }
  } else if (sourceFormat === SOURCE_FORMAT_ORIGINAL) {
    var dataOriginal = data;
    for (var i = 0; i < dataOriginal.length && i < maxLoop; i++) {
      var item = dataOriginal[i];
      var val = getDataItemValue(item);
      if (!isArray$1(val)) {
        return BE_ORDINAL.Not;
      }
      if ((result = detectValue(val[dimIndex])) != null) {
        return result;
      }
    }
  }
  function detectValue(val2) {
    var beStr = isString$2(val2);
    if (val2 != null && Number.isFinite(Number(val2)) && val2 !== "") {
      return beStr ? BE_ORDINAL.Might : BE_ORDINAL.Not;
    } else if (beStr && val2 !== "-") {
      return BE_ORDINAL.Must;
    }
  }
  return BE_ORDINAL.Not;
}
var internalOptionCreatorMap = createHashMap();
function concatInternalOptions(ecModel, mainType, newCmptOptionList) {
  var internalOptionCreator = internalOptionCreatorMap.get(mainType);
  if (!internalOptionCreator) {
    return newCmptOptionList;
  }
  var internalOptions = internalOptionCreator(ecModel);
  if (!internalOptions) {
    return newCmptOptionList;
  }
  return newCmptOptionList.concat(internalOptions);
}
var innerColor = makeInner();
makeInner();
var PaletteMixin = (
  /** @class */
  function() {
    function PaletteMixin2() {
    }
    PaletteMixin2.prototype.getColorFromPalette = function(name, scope, requestNum) {
      var defaultPalette = normalizeToArray(this.get("color", true));
      var layeredPalette = this.get("colorLayer", true);
      return getFromPalette(this, innerColor, defaultPalette, layeredPalette, name, scope, requestNum);
    };
    PaletteMixin2.prototype.clearColorPalette = function() {
      clearPalette(this, innerColor);
    };
    return PaletteMixin2;
  }()
);
function getNearestPalette(palettes, requestColorNum) {
  var paletteNum = palettes.length;
  for (var i = 0; i < paletteNum; i++) {
    if (palettes[i].length > requestColorNum) {
      return palettes[i];
    }
  }
  return palettes[paletteNum - 1];
}
function getFromPalette(that, inner2, defaultPalette, layeredPalette, name, scope, requestNum) {
  scope = scope || that;
  var scopeFields = inner2(scope);
  var paletteIdx = scopeFields.paletteIdx || 0;
  var paletteNameMap = scopeFields.paletteNameMap = scopeFields.paletteNameMap || {};
  if (paletteNameMap.hasOwnProperty(name)) {
    return paletteNameMap[name];
  }
  var palette = requestNum == null || !layeredPalette ? defaultPalette : getNearestPalette(layeredPalette, requestNum);
  palette = palette || defaultPalette;
  if (!palette || !palette.length) {
    return;
  }
  var pickedPaletteItem = palette[paletteIdx];
  if (name) {
    paletteNameMap[name] = pickedPaletteItem;
  }
  scopeFields.paletteIdx = (paletteIdx + 1) % palette.length;
  return pickedPaletteItem;
}
function clearPalette(that, inner2) {
  inner2(that).paletteIdx = 0;
  inner2(that).paletteNameMap = {};
}
var reCreateSeriesIndices;
var assertSeriesInitialized;
var initBase;
var OPTION_INNER_KEY = "\0_ec_inner";
var OPTION_INNER_VALUE = 1;
var GlobalModel = (
  /** @class */
  function(_super) {
    __extends(GlobalModel2, _super);
    function GlobalModel2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalModel2.prototype.init = function(option, parentModel, ecModel, theme2, locale, optionManager) {
      theme2 = theme2 || {};
      this.option = null;
      this._theme = new Model(theme2);
      this._locale = new Model(locale);
      this._optionManager = optionManager;
    };
    GlobalModel2.prototype.setOption = function(option, opts, optionPreprocessorFuncs2) {
      var innerOpt = normalizeSetOptionInput(opts);
      this._optionManager.setOption(option, optionPreprocessorFuncs2, innerOpt);
      this._resetOption(null, innerOpt);
    };
    GlobalModel2.prototype.resetOption = function(type, opt) {
      return this._resetOption(type, normalizeSetOptionInput(opt));
    };
    GlobalModel2.prototype._resetOption = function(type, opt) {
      var optionChanged = false;
      var optionManager = this._optionManager;
      if (!type || type === "recreate") {
        var baseOption = optionManager.mountOption(type === "recreate");
        if (!this.option || type === "recreate") {
          initBase(this, baseOption);
        } else {
          this.restoreData();
          this._mergeOption(baseOption, opt);
        }
        optionChanged = true;
      }
      if (type === "timeline" || type === "media") {
        this.restoreData();
      }
      if (!type || type === "recreate" || type === "timeline") {
        var timelineOption = optionManager.getTimelineOption(this);
        if (timelineOption) {
          optionChanged = true;
          this._mergeOption(timelineOption, opt);
        }
      }
      if (!type || type === "recreate" || type === "media") {
        var mediaOptions = optionManager.getMediaOption(this);
        if (mediaOptions.length) {
          each$3(mediaOptions, function(mediaOption) {
            optionChanged = true;
            this._mergeOption(mediaOption, opt);
          }, this);
        }
      }
      return optionChanged;
    };
    GlobalModel2.prototype.mergeOption = function(option) {
      this._mergeOption(option, null);
    };
    GlobalModel2.prototype._mergeOption = function(newOption, opt) {
      var option = this.option;
      var componentsMap = this._componentsMap;
      var componentsCount = this._componentsCount;
      var newCmptTypes = [];
      var newCmptTypeMap = createHashMap();
      var replaceMergeMainTypeMap = opt && opt.replaceMergeMainTypeMap;
      resetSourceDefaulter(this);
      each$3(newOption, function(componentOption, mainType) {
        if (componentOption == null) {
          return;
        }
        if (!ComponentModel.hasClass(mainType)) {
          option[mainType] = option[mainType] == null ? clone$1(componentOption) : merge(option[mainType], componentOption, true);
        } else if (mainType) {
          newCmptTypes.push(mainType);
          newCmptTypeMap.set(mainType, true);
        }
      });
      if (replaceMergeMainTypeMap) {
        replaceMergeMainTypeMap.each(function(val, mainTypeInReplaceMerge) {
          if (ComponentModel.hasClass(mainTypeInReplaceMerge) && !newCmptTypeMap.get(mainTypeInReplaceMerge)) {
            newCmptTypes.push(mainTypeInReplaceMerge);
            newCmptTypeMap.set(mainTypeInReplaceMerge, true);
          }
        });
      }
      ComponentModel.topologicalTravel(newCmptTypes, ComponentModel.getAllClassMainTypes(), visitComponent, this);
      function visitComponent(mainType) {
        var newCmptOptionList = concatInternalOptions(this, mainType, normalizeToArray(newOption[mainType]));
        var oldCmptList = componentsMap.get(mainType);
        var mergeMode = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          !oldCmptList ? "replaceAll" : replaceMergeMainTypeMap && replaceMergeMainTypeMap.get(mainType) ? "replaceMerge" : "normalMerge"
        );
        var mappingResult = mappingToExists(oldCmptList, newCmptOptionList, mergeMode);
        setComponentTypeToKeyInfo(mappingResult, mainType, ComponentModel);
        option[mainType] = null;
        componentsMap.set(mainType, null);
        componentsCount.set(mainType, 0);
        var optionsByMainType = [];
        var cmptsByMainType = [];
        var cmptsCountByMainType = 0;
        var tooltipExists;
        each$3(mappingResult, function(resultItem, index) {
          var componentModel = resultItem.existing;
          var newCmptOption = resultItem.newOption;
          if (!newCmptOption) {
            if (componentModel) {
              componentModel.mergeOption({}, this);
              componentModel.optionUpdated({}, false);
            }
          } else {
            var isSeriesType = mainType === "series";
            var ComponentModelClass = ComponentModel.getClass(
              mainType,
              resultItem.keyInfo.subType,
              !isSeriesType
              // Give a more detailed warn later if series don't exists
            );
            if (!ComponentModelClass) {
              return;
            }
            if (mainType === "tooltip") {
              if (tooltipExists) {
                return;
              }
              tooltipExists = true;
            }
            if (componentModel && componentModel.constructor === ComponentModelClass) {
              componentModel.name = resultItem.keyInfo.name;
              componentModel.mergeOption(newCmptOption, this);
              componentModel.optionUpdated(newCmptOption, false);
            } else {
              var extraOpt = extend({
                componentIndex: index
              }, resultItem.keyInfo);
              componentModel = new ComponentModelClass(newCmptOption, this, this, extraOpt);
              extend(componentModel, extraOpt);
              if (resultItem.brandNew) {
                componentModel.__requireNewView = true;
              }
              componentModel.init(newCmptOption, this, this);
              componentModel.optionUpdated(null, true);
            }
          }
          if (componentModel) {
            optionsByMainType.push(componentModel.option);
            cmptsByMainType.push(componentModel);
            cmptsCountByMainType++;
          } else {
            optionsByMainType.push(void 0);
            cmptsByMainType.push(void 0);
          }
        }, this);
        option[mainType] = optionsByMainType;
        componentsMap.set(mainType, cmptsByMainType);
        componentsCount.set(mainType, cmptsCountByMainType);
        if (mainType === "series") {
          reCreateSeriesIndices(this);
        }
      }
      if (!this._seriesIndices) {
        reCreateSeriesIndices(this);
      }
    };
    GlobalModel2.prototype.getOption = function() {
      var option = clone$1(this.option);
      each$3(option, function(optInMainType, mainType) {
        if (ComponentModel.hasClass(mainType)) {
          var opts = normalizeToArray(optInMainType);
          var realLen = opts.length;
          var metNonInner = false;
          for (var i = realLen - 1; i >= 0; i--) {
            if (opts[i] && !isComponentIdInternal(opts[i])) {
              metNonInner = true;
            } else {
              opts[i] = null;
              !metNonInner && realLen--;
            }
          }
          opts.length = realLen;
          option[mainType] = opts;
        }
      });
      delete option[OPTION_INNER_KEY];
      return option;
    };
    GlobalModel2.prototype.getTheme = function() {
      return this._theme;
    };
    GlobalModel2.prototype.getLocaleModel = function() {
      return this._locale;
    };
    GlobalModel2.prototype.setUpdatePayload = function(payload) {
      this._payload = payload;
    };
    GlobalModel2.prototype.getUpdatePayload = function() {
      return this._payload;
    };
    GlobalModel2.prototype.getComponent = function(mainType, idx) {
      var list = this._componentsMap.get(mainType);
      if (list) {
        var cmpt = list[idx || 0];
        if (cmpt) {
          return cmpt;
        } else if (idx == null) {
          for (var i = 0; i < list.length; i++) {
            if (list[i]) {
              return list[i];
            }
          }
        }
      }
    };
    GlobalModel2.prototype.queryComponents = function(condition) {
      var mainType = condition.mainType;
      if (!mainType) {
        return [];
      }
      var index = condition.index;
      var id = condition.id;
      var name = condition.name;
      var cmpts = this._componentsMap.get(mainType);
      if (!cmpts || !cmpts.length) {
        return [];
      }
      var result;
      if (index != null) {
        result = [];
        each$3(normalizeToArray(index), function(idx) {
          cmpts[idx] && result.push(cmpts[idx]);
        });
      } else if (id != null) {
        result = queryByIdOrName("id", id, cmpts);
      } else if (name != null) {
        result = queryByIdOrName("name", name, cmpts);
      } else {
        result = filter(cmpts, function(cmpt) {
          return !!cmpt;
        });
      }
      return filterBySubType(result, condition);
    };
    GlobalModel2.prototype.findComponents = function(condition) {
      var query = condition.query;
      var mainType = condition.mainType;
      var queryCond = getQueryCond(query);
      var result = queryCond ? this.queryComponents(queryCond) : filter(this._componentsMap.get(mainType), function(cmpt) {
        return !!cmpt;
      });
      return doFilter(filterBySubType(result, condition));
      function getQueryCond(q) {
        var indexAttr = mainType + "Index";
        var idAttr = mainType + "Id";
        var nameAttr = mainType + "Name";
        return q && (q[indexAttr] != null || q[idAttr] != null || q[nameAttr] != null) ? {
          mainType,
          // subType will be filtered finally.
          index: q[indexAttr],
          id: q[idAttr],
          name: q[nameAttr]
        } : null;
      }
      function doFilter(res) {
        return condition.filter ? filter(res, condition.filter) : res;
      }
    };
    GlobalModel2.prototype.eachComponent = function(mainType, cb, context) {
      var componentsMap = this._componentsMap;
      if (isFunction$1(mainType)) {
        var ctxForAll_1 = cb;
        var cbForAll_1 = mainType;
        componentsMap.each(function(cmpts2, componentType) {
          for (var i2 = 0; cmpts2 && i2 < cmpts2.length; i2++) {
            var cmpt2 = cmpts2[i2];
            cmpt2 && cbForAll_1.call(ctxForAll_1, componentType, cmpt2, cmpt2.componentIndex);
          }
        });
      } else {
        var cmpts = isString$2(mainType) ? componentsMap.get(mainType) : isObject$3(mainType) ? this.findComponents(mainType) : null;
        for (var i = 0; cmpts && i < cmpts.length; i++) {
          var cmpt = cmpts[i];
          cmpt && cb.call(context, cmpt, cmpt.componentIndex);
        }
      }
    };
    GlobalModel2.prototype.getSeriesByName = function(name) {
      var nameStr = convertOptionIdName(name, null);
      return filter(this._componentsMap.get("series"), function(oneSeries) {
        return !!oneSeries && nameStr != null && oneSeries.name === nameStr;
      });
    };
    GlobalModel2.prototype.getSeriesByIndex = function(seriesIndex) {
      return this._componentsMap.get("series")[seriesIndex];
    };
    GlobalModel2.prototype.getSeriesByType = function(subType) {
      return filter(this._componentsMap.get("series"), function(oneSeries) {
        return !!oneSeries && oneSeries.subType === subType;
      });
    };
    GlobalModel2.prototype.getSeries = function() {
      return filter(this._componentsMap.get("series"), function(oneSeries) {
        return !!oneSeries;
      });
    };
    GlobalModel2.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    };
    GlobalModel2.prototype.eachSeries = function(cb, context) {
      assertSeriesInitialized(this);
      each$3(this._seriesIndices, function(rawSeriesIndex) {
        var series = this._componentsMap.get("series")[rawSeriesIndex];
        cb.call(context, series, rawSeriesIndex);
      }, this);
    };
    GlobalModel2.prototype.eachRawSeries = function(cb, context) {
      each$3(this._componentsMap.get("series"), function(series) {
        series && cb.call(context, series, series.componentIndex);
      });
    };
    GlobalModel2.prototype.eachSeriesByType = function(subType, cb, context) {
      assertSeriesInitialized(this);
      each$3(this._seriesIndices, function(rawSeriesIndex) {
        var series = this._componentsMap.get("series")[rawSeriesIndex];
        if (series.subType === subType) {
          cb.call(context, series, rawSeriesIndex);
        }
      }, this);
    };
    GlobalModel2.prototype.eachRawSeriesByType = function(subType, cb, context) {
      return each$3(this.getSeriesByType(subType), cb, context);
    };
    GlobalModel2.prototype.isSeriesFiltered = function(seriesModel) {
      assertSeriesInitialized(this);
      return this._seriesIndicesMap.get(seriesModel.componentIndex) == null;
    };
    GlobalModel2.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    };
    GlobalModel2.prototype.filterSeries = function(cb, context) {
      assertSeriesInitialized(this);
      var newSeriesIndices = [];
      each$3(this._seriesIndices, function(seriesRawIdx) {
        var series = this._componentsMap.get("series")[seriesRawIdx];
        cb.call(context, series, seriesRawIdx) && newSeriesIndices.push(seriesRawIdx);
      }, this);
      this._seriesIndices = newSeriesIndices;
      this._seriesIndicesMap = createHashMap(newSeriesIndices);
    };
    GlobalModel2.prototype.restoreData = function(payload) {
      reCreateSeriesIndices(this);
      var componentsMap = this._componentsMap;
      var componentTypes = [];
      componentsMap.each(function(components, componentType) {
        if (ComponentModel.hasClass(componentType)) {
          componentTypes.push(componentType);
        }
      });
      ComponentModel.topologicalTravel(componentTypes, ComponentModel.getAllClassMainTypes(), function(componentType) {
        each$3(componentsMap.get(componentType), function(component) {
          if (component && (componentType !== "series" || !isNotTargetSeries(component, payload))) {
            component.restoreData();
          }
        });
      });
    };
    GlobalModel2.internalField = function() {
      reCreateSeriesIndices = function(ecModel) {
        var seriesIndices = ecModel._seriesIndices = [];
        each$3(ecModel._componentsMap.get("series"), function(series) {
          series && seriesIndices.push(series.componentIndex);
        });
        ecModel._seriesIndicesMap = createHashMap(seriesIndices);
      };
      assertSeriesInitialized = function(ecModel) {
      };
      initBase = function(ecModel, baseOption) {
        ecModel.option = {};
        ecModel.option[OPTION_INNER_KEY] = OPTION_INNER_VALUE;
        ecModel._componentsMap = createHashMap({
          series: []
        });
        ecModel._componentsCount = createHashMap();
        var airaOption = baseOption.aria;
        if (isObject$3(airaOption) && airaOption.enabled == null) {
          airaOption.enabled = true;
        }
        mergeTheme(baseOption, ecModel._theme.option);
        merge(baseOption, globalDefault, false);
        ecModel._mergeOption(baseOption, null);
      };
    }();
    return GlobalModel2;
  }(Model)
);
function isNotTargetSeries(seriesModel, payload) {
  if (payload) {
    var index = payload.seriesIndex;
    var id = payload.seriesId;
    var name_1 = payload.seriesName;
    return index != null && seriesModel.componentIndex !== index || id != null && seriesModel.id !== id || name_1 != null && seriesModel.name !== name_1;
  }
}
function mergeTheme(option, theme2) {
  var notMergeColorLayer = option.color && !option.colorLayer;
  each$3(theme2, function(themeItem, name) {
    if (name === "colorLayer" && notMergeColorLayer) {
      return;
    }
    if (!ComponentModel.hasClass(name)) {
      if (typeof themeItem === "object") {
        option[name] = !option[name] ? clone$1(themeItem) : merge(option[name], themeItem, false);
      } else {
        if (option[name] == null) {
          option[name] = themeItem;
        }
      }
    }
  });
}
function queryByIdOrName(attr, idOrName, cmpts) {
  if (isArray$1(idOrName)) {
    var keyMap_1 = createHashMap();
    each$3(idOrName, function(idOrNameItem) {
      if (idOrNameItem != null) {
        var idName = convertOptionIdName(idOrNameItem, null);
        idName != null && keyMap_1.set(idOrNameItem, true);
      }
    });
    return filter(cmpts, function(cmpt) {
      return cmpt && keyMap_1.get(cmpt[attr]);
    });
  } else {
    var idName_1 = convertOptionIdName(idOrName, null);
    return filter(cmpts, function(cmpt) {
      return cmpt && idName_1 != null && cmpt[attr] === idName_1;
    });
  }
}
function filterBySubType(components, condition) {
  return condition.hasOwnProperty("subType") ? filter(components, function(cmpt) {
    return cmpt && cmpt.subType === condition.subType;
  }) : components;
}
function normalizeSetOptionInput(opts) {
  var replaceMergeMainTypeMap = createHashMap();
  opts && each$3(normalizeToArray(opts.replaceMerge), function(mainType) {
    replaceMergeMainTypeMap.set(mainType, true);
  });
  return {
    replaceMergeMainTypeMap
  };
}
mixin(GlobalModel, PaletteMixin);
var availableMethods = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
];
var ExtensionAPI = (
  /** @class */
  /* @__PURE__ */ function() {
    function ExtensionAPI2(ecInstance) {
      zrUtil.each(availableMethods, function(methodName) {
        this[methodName] = zrUtil.bind(ecInstance[methodName], ecInstance);
      }, this);
    }
    return ExtensionAPI2;
  }()
);
var coordinateSystemCreators = {};
var CoordinateSystemManager = (
  /** @class */
  function() {
    function CoordinateSystemManager2() {
      this._coordinateSystems = [];
    }
    CoordinateSystemManager2.prototype.create = function(ecModel, api) {
      var coordinateSystems = [];
      zrUtil.each(coordinateSystemCreators, function(creator, type) {
        var list = creator.create(ecModel, api);
        coordinateSystems = coordinateSystems.concat(list || []);
      });
      this._coordinateSystems = coordinateSystems;
    };
    CoordinateSystemManager2.prototype.update = function(ecModel, api) {
      zrUtil.each(this._coordinateSystems, function(coordSys) {
        coordSys.update && coordSys.update(ecModel, api);
      });
    };
    CoordinateSystemManager2.prototype.getCoordinateSystems = function() {
      return this._coordinateSystems.slice();
    };
    CoordinateSystemManager2.register = function(type, creator) {
      coordinateSystemCreators[type] = creator;
    };
    CoordinateSystemManager2.get = function(type) {
      return coordinateSystemCreators[type];
    };
    return CoordinateSystemManager2;
  }()
);
var QUERY_REG = /^(min|max)?(.+)$/;
var OptionManager = (
  /** @class */
  function() {
    function OptionManager2(api) {
      this._timelineOptions = [];
      this._mediaList = [];
      this._currentMediaIndices = [];
      this._api = api;
    }
    OptionManager2.prototype.setOption = function(rawOption, optionPreprocessorFuncs2, opt) {
      if (rawOption) {
        each$3(normalizeToArray(rawOption.series), function(series) {
          series && series.data && isTypedArray(series.data) && setAsPrimitive(series.data);
        });
        each$3(normalizeToArray(rawOption.dataset), function(dataset) {
          dataset && dataset.source && isTypedArray(dataset.source) && setAsPrimitive(dataset.source);
        });
      }
      rawOption = clone$1(rawOption);
      var optionBackup = this._optionBackup;
      var newParsedOption = parseRawOption(rawOption, optionPreprocessorFuncs2, !optionBackup);
      this._newBaseOption = newParsedOption.baseOption;
      if (optionBackup) {
        if (newParsedOption.timelineOptions.length) {
          optionBackup.timelineOptions = newParsedOption.timelineOptions;
        }
        if (newParsedOption.mediaList.length) {
          optionBackup.mediaList = newParsedOption.mediaList;
        }
        if (newParsedOption.mediaDefault) {
          optionBackup.mediaDefault = newParsedOption.mediaDefault;
        }
      } else {
        this._optionBackup = newParsedOption;
      }
    };
    OptionManager2.prototype.mountOption = function(isRecreate) {
      var optionBackup = this._optionBackup;
      this._timelineOptions = optionBackup.timelineOptions;
      this._mediaList = optionBackup.mediaList;
      this._mediaDefault = optionBackup.mediaDefault;
      this._currentMediaIndices = [];
      return clone$1(isRecreate ? optionBackup.baseOption : this._newBaseOption);
    };
    OptionManager2.prototype.getTimelineOption = function(ecModel) {
      var option;
      var timelineOptions = this._timelineOptions;
      if (timelineOptions.length) {
        var timelineModel = ecModel.getComponent("timeline");
        if (timelineModel) {
          option = clone$1(
            // FIXME:TS as TimelineModel or quivlant interface
            timelineOptions[timelineModel.getCurrentIndex()]
          );
        }
      }
      return option;
    };
    OptionManager2.prototype.getMediaOption = function(ecModel) {
      var ecWidth = this._api.getWidth();
      var ecHeight = this._api.getHeight();
      var mediaList = this._mediaList;
      var mediaDefault = this._mediaDefault;
      var indices = [];
      var result = [];
      if (!mediaList.length && !mediaDefault) {
        return result;
      }
      for (var i = 0, len = mediaList.length; i < len; i++) {
        if (applyMediaQuery(mediaList[i].query, ecWidth, ecHeight)) {
          indices.push(i);
        }
      }
      if (!indices.length && mediaDefault) {
        indices = [-1];
      }
      if (indices.length && !indicesEquals(indices, this._currentMediaIndices)) {
        result = map$1(indices, function(index) {
          return clone$1(index === -1 ? mediaDefault.option : mediaList[index].option);
        });
      }
      this._currentMediaIndices = indices;
      return result;
    };
    return OptionManager2;
  }()
);
function parseRawOption(rawOption, optionPreprocessorFuncs2, isNew) {
  var mediaList = [];
  var mediaDefault;
  var baseOption;
  var declaredBaseOption = rawOption.baseOption;
  var timelineOnRoot = rawOption.timeline;
  var timelineOptionsOnRoot = rawOption.options;
  var mediaOnRoot = rawOption.media;
  var hasMedia = !!rawOption.media;
  var hasTimeline = !!(timelineOptionsOnRoot || timelineOnRoot || declaredBaseOption && declaredBaseOption.timeline);
  if (declaredBaseOption) {
    baseOption = declaredBaseOption;
    if (!baseOption.timeline) {
      baseOption.timeline = timelineOnRoot;
    }
  } else {
    if (hasTimeline || hasMedia) {
      rawOption.options = rawOption.media = null;
    }
    baseOption = rawOption;
  }
  if (hasMedia) {
    if (isArray$1(mediaOnRoot)) {
      each$3(mediaOnRoot, function(singleMedia) {
        if (singleMedia && singleMedia.option) {
          if (singleMedia.query) {
            mediaList.push(singleMedia);
          } else if (!mediaDefault) {
            mediaDefault = singleMedia;
          }
        }
      });
    }
  }
  doPreprocess(baseOption);
  each$3(timelineOptionsOnRoot, function(option) {
    return doPreprocess(option);
  });
  each$3(mediaList, function(media) {
    return doPreprocess(media.option);
  });
  function doPreprocess(option) {
    each$3(optionPreprocessorFuncs2, function(preProcess) {
      preProcess(option, isNew);
    });
  }
  return {
    baseOption,
    timelineOptions: timelineOptionsOnRoot || [],
    mediaDefault,
    mediaList
  };
}
function applyMediaQuery(query, ecWidth, ecHeight) {
  var realMap = {
    width: ecWidth,
    height: ecHeight,
    aspectratio: ecWidth / ecHeight
    // lower case for convenience.
  };
  var applicable = true;
  each$3(query, function(value, attr) {
    var matched = attr.match(QUERY_REG);
    if (!matched || !matched[1] || !matched[2]) {
      return;
    }
    var operator = matched[1];
    var realAttr = matched[2].toLowerCase();
    if (!compare(realMap[realAttr], value, operator)) {
      applicable = false;
    }
  });
  return applicable;
}
function compare(real, expect, operator) {
  if (operator === "min") {
    return real >= expect;
  } else if (operator === "max") {
    return real <= expect;
  } else {
    return real === expect;
  }
}
function indicesEquals(indices1, indices2) {
  return indices1.join(",") === indices2.join(",");
}
var each$1 = zrUtil.each;
var isObject$1 = zrUtil.isObject;
var POSSIBLE_STYLES = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function compatEC2ItemStyle(opt) {
  var itemStyleOpt = opt && opt.itemStyle;
  if (!itemStyleOpt) {
    return;
  }
  for (var i = 0, len = POSSIBLE_STYLES.length; i < len; i++) {
    var styleName = POSSIBLE_STYLES[i];
    var normalItemStyleOpt = itemStyleOpt.normal;
    var emphasisItemStyleOpt = itemStyleOpt.emphasis;
    if (normalItemStyleOpt && normalItemStyleOpt[styleName]) {
      opt[styleName] = opt[styleName] || {};
      if (!opt[styleName].normal) {
        opt[styleName].normal = normalItemStyleOpt[styleName];
      } else {
        zrUtil.merge(opt[styleName].normal, normalItemStyleOpt[styleName]);
      }
      normalItemStyleOpt[styleName] = null;
    }
    if (emphasisItemStyleOpt && emphasisItemStyleOpt[styleName]) {
      opt[styleName] = opt[styleName] || {};
      if (!opt[styleName].emphasis) {
        opt[styleName].emphasis = emphasisItemStyleOpt[styleName];
      } else {
        zrUtil.merge(opt[styleName].emphasis, emphasisItemStyleOpt[styleName]);
      }
      emphasisItemStyleOpt[styleName] = null;
    }
  }
}
function convertNormalEmphasis(opt, optType, useExtend) {
  if (opt && opt[optType] && (opt[optType].normal || opt[optType].emphasis)) {
    var normalOpt = opt[optType].normal;
    var emphasisOpt = opt[optType].emphasis;
    if (normalOpt) {
      if (useExtend) {
        opt[optType].normal = opt[optType].emphasis = null;
        zrUtil.defaults(opt[optType], normalOpt);
      } else {
        opt[optType] = normalOpt;
      }
    }
    if (emphasisOpt) {
      opt.emphasis = opt.emphasis || {};
      opt.emphasis[optType] = emphasisOpt;
      if (emphasisOpt.focus) {
        opt.emphasis.focus = emphasisOpt.focus;
      }
      if (emphasisOpt.blurScope) {
        opt.emphasis.blurScope = emphasisOpt.blurScope;
      }
    }
  }
}
function removeEC3NormalStatus(opt) {
  convertNormalEmphasis(opt, "itemStyle");
  convertNormalEmphasis(opt, "lineStyle");
  convertNormalEmphasis(opt, "areaStyle");
  convertNormalEmphasis(opt, "label");
  convertNormalEmphasis(opt, "labelLine");
  convertNormalEmphasis(opt, "upperLabel");
  convertNormalEmphasis(opt, "edgeLabel");
}
function compatTextStyle(opt, propName) {
  var labelOptSingle = isObject$1(opt) && opt[propName];
  var textStyle = isObject$1(labelOptSingle) && labelOptSingle.textStyle;
  if (textStyle) {
    for (var i = 0, len = TEXT_STYLE_OPTIONS.length; i < len; i++) {
      var textPropName = TEXT_STYLE_OPTIONS[i];
      if (textStyle.hasOwnProperty(textPropName)) {
        labelOptSingle[textPropName] = textStyle[textPropName];
      }
    }
  }
}
function compatEC3CommonStyles(opt) {
  if (opt) {
    removeEC3NormalStatus(opt);
    compatTextStyle(opt, "label");
    opt.emphasis && compatTextStyle(opt.emphasis, "label");
  }
}
function processSeries(seriesOpt) {
  if (!isObject$1(seriesOpt)) {
    return;
  }
  compatEC2ItemStyle(seriesOpt);
  removeEC3NormalStatus(seriesOpt);
  compatTextStyle(seriesOpt, "label");
  compatTextStyle(seriesOpt, "upperLabel");
  compatTextStyle(seriesOpt, "edgeLabel");
  if (seriesOpt.emphasis) {
    compatTextStyle(seriesOpt.emphasis, "label");
    compatTextStyle(seriesOpt.emphasis, "upperLabel");
    compatTextStyle(seriesOpt.emphasis, "edgeLabel");
  }
  var markPoint = seriesOpt.markPoint;
  if (markPoint) {
    compatEC2ItemStyle(markPoint);
    compatEC3CommonStyles(markPoint);
  }
  var markLine = seriesOpt.markLine;
  if (markLine) {
    compatEC2ItemStyle(markLine);
    compatEC3CommonStyles(markLine);
  }
  var markArea = seriesOpt.markArea;
  if (markArea) {
    compatEC3CommonStyles(markArea);
  }
  var data = seriesOpt.data;
  if (seriesOpt.type === "graph") {
    data = data || seriesOpt.nodes;
    var edgeData = seriesOpt.links || seriesOpt.edges;
    if (edgeData && !zrUtil.isTypedArray(edgeData)) {
      for (var i = 0; i < edgeData.length; i++) {
        compatEC3CommonStyles(edgeData[i]);
      }
    }
    zrUtil.each(seriesOpt.categories, function(opt) {
      removeEC3NormalStatus(opt);
    });
  }
  if (data && !zrUtil.isTypedArray(data)) {
    for (var i = 0; i < data.length; i++) {
      compatEC3CommonStyles(data[i]);
    }
  }
  markPoint = seriesOpt.markPoint;
  if (markPoint && markPoint.data) {
    var mpData = markPoint.data;
    for (var i = 0; i < mpData.length; i++) {
      compatEC3CommonStyles(mpData[i]);
    }
  }
  markLine = seriesOpt.markLine;
  if (markLine && markLine.data) {
    var mlData = markLine.data;
    for (var i = 0; i < mlData.length; i++) {
      if (zrUtil.isArray(mlData[i])) {
        compatEC3CommonStyles(mlData[i][0]);
        compatEC3CommonStyles(mlData[i][1]);
      } else {
        compatEC3CommonStyles(mlData[i]);
      }
    }
  }
  if (seriesOpt.type === "gauge") {
    compatTextStyle(seriesOpt, "axisLabel");
    compatTextStyle(seriesOpt, "title");
    compatTextStyle(seriesOpt, "detail");
  } else if (seriesOpt.type === "treemap") {
    convertNormalEmphasis(seriesOpt.breadcrumb, "itemStyle");
    zrUtil.each(seriesOpt.levels, function(opt) {
      removeEC3NormalStatus(opt);
    });
  } else if (seriesOpt.type === "tree") {
    removeEC3NormalStatus(seriesOpt.leaves);
  }
}
function toArr(o) {
  return zrUtil.isArray(o) ? o : o ? [o] : [];
}
function toObj(o) {
  return (zrUtil.isArray(o) ? o[0] : o) || {};
}
function globalCompatStyle(option, isTheme) {
  each$1(toArr(option.series), function(seriesOpt) {
    isObject$1(seriesOpt) && processSeries(seriesOpt);
  });
  var axes = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  isTheme && axes.push("valueAxis", "categoryAxis", "logAxis", "timeAxis");
  each$1(axes, function(axisName) {
    each$1(toArr(option[axisName]), function(axisOpt) {
      if (axisOpt) {
        compatTextStyle(axisOpt, "axisLabel");
        compatTextStyle(axisOpt.axisPointer, "label");
      }
    });
  });
  each$1(toArr(option.parallel), function(parallelOpt) {
    var parallelAxisDefault = parallelOpt && parallelOpt.parallelAxisDefault;
    compatTextStyle(parallelAxisDefault, "axisLabel");
    compatTextStyle(parallelAxisDefault && parallelAxisDefault.axisPointer, "label");
  });
  each$1(toArr(option.calendar), function(calendarOpt) {
    convertNormalEmphasis(calendarOpt, "itemStyle");
    compatTextStyle(calendarOpt, "dayLabel");
    compatTextStyle(calendarOpt, "monthLabel");
    compatTextStyle(calendarOpt, "yearLabel");
  });
  each$1(toArr(option.radar), function(radarOpt) {
    compatTextStyle(radarOpt, "name");
    if (radarOpt.name && radarOpt.axisName == null) {
      radarOpt.axisName = radarOpt.name;
      delete radarOpt.name;
    }
    if (radarOpt.nameGap != null && radarOpt.axisNameGap == null) {
      radarOpt.axisNameGap = radarOpt.nameGap;
      delete radarOpt.nameGap;
    }
  });
  each$1(toArr(option.geo), function(geoOpt) {
    if (isObject$1(geoOpt)) {
      compatEC3CommonStyles(geoOpt);
      each$1(toArr(geoOpt.regions), function(regionObj) {
        compatEC3CommonStyles(regionObj);
      });
    }
  });
  each$1(toArr(option.timeline), function(timelineOpt) {
    compatEC3CommonStyles(timelineOpt);
    convertNormalEmphasis(timelineOpt, "label");
    convertNormalEmphasis(timelineOpt, "itemStyle");
    convertNormalEmphasis(timelineOpt, "controlStyle", true);
    var data = timelineOpt.data;
    zrUtil.isArray(data) && zrUtil.each(data, function(item) {
      if (zrUtil.isObject(item)) {
        convertNormalEmphasis(item, "label");
        convertNormalEmphasis(item, "itemStyle");
      }
    });
  });
  each$1(toArr(option.toolbox), function(toolboxOpt) {
    convertNormalEmphasis(toolboxOpt, "iconStyle");
    each$1(toolboxOpt.feature, function(featureOpt) {
      convertNormalEmphasis(featureOpt, "iconStyle");
    });
  });
  compatTextStyle(toObj(option.axisPointer), "label");
  compatTextStyle(toObj(option.tooltip).axisPointer, "label");
}
function get(opt, path) {
  var pathArr = path.split(",");
  var obj = opt;
  for (var i = 0; i < pathArr.length; i++) {
    obj = obj && obj[pathArr[i]];
    if (obj == null) {
      break;
    }
  }
  return obj;
}
function set(opt, path, val, overwrite) {
  var pathArr = path.split(",");
  var obj = opt;
  var key;
  var i = 0;
  for (; i < pathArr.length - 1; i++) {
    key = pathArr[i];
    if (obj[key] == null) {
      obj[key] = {};
    }
    obj = obj[key];
  }
  if (obj[pathArr[i]] == null) {
    obj[pathArr[i]] = val;
  }
}
function compatLayoutProperties(option) {
  option && each$3(LAYOUT_PROPERTIES, function(prop) {
    if (prop[0] in option && !(prop[1] in option)) {
      option[prop[1]] = option[prop[0]];
    }
  });
}
var LAYOUT_PROPERTIES = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]];
var COMPATITABLE_COMPONENTS = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"];
var BAR_ITEM_STYLE_MAP = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function compatBarItemStyle(option) {
  var itemStyle = option && option.itemStyle;
  if (itemStyle) {
    for (var i = 0; i < BAR_ITEM_STYLE_MAP.length; i++) {
      var oldName = BAR_ITEM_STYLE_MAP[i][1];
      var newName = BAR_ITEM_STYLE_MAP[i][0];
      if (itemStyle[oldName] != null) {
        itemStyle[newName] = itemStyle[oldName];
      }
    }
  }
}
function compatPieLabel(option) {
  if (!option) {
    return;
  }
  if (option.alignTo === "edge" && option.margin != null && option.edgeDistance == null) {
    option.edgeDistance = option.margin;
  }
}
function compatSunburstState(option) {
  if (!option) {
    return;
  }
  if (option.downplay && !option.blur) {
    option.blur = option.downplay;
  }
}
function compatGraphFocus(option) {
  if (!option) {
    return;
  }
  if (option.focusNodeAdjacency != null) {
    option.emphasis = option.emphasis || {};
    if (option.emphasis.focus == null) {
      option.emphasis.focus = "adjacency";
    }
  }
}
function traverseTree(data, cb) {
  if (data) {
    for (var i = 0; i < data.length; i++) {
      cb(data[i]);
      data[i] && traverseTree(data[i].children, cb);
    }
  }
}
function globalBackwardCompat(option, isTheme) {
  globalCompatStyle(option, isTheme);
  option.series = normalizeToArray(option.series);
  each$3(option.series, function(seriesOpt) {
    if (!isObject$3(seriesOpt)) {
      return;
    }
    var seriesType2 = seriesOpt.type;
    if (seriesType2 === "line") {
      if (seriesOpt.clipOverflow != null) {
        seriesOpt.clip = seriesOpt.clipOverflow;
      }
    } else if (seriesType2 === "pie" || seriesType2 === "gauge") {
      if (seriesOpt.clockWise != null) {
        seriesOpt.clockwise = seriesOpt.clockWise;
      }
      compatPieLabel(seriesOpt.label);
      var data = seriesOpt.data;
      if (data && !isTypedArray(data)) {
        for (var i = 0; i < data.length; i++) {
          compatPieLabel(data[i]);
        }
      }
      if (seriesOpt.hoverOffset != null) {
        seriesOpt.emphasis = seriesOpt.emphasis || {};
        if (seriesOpt.emphasis.scaleSize = null) {
          seriesOpt.emphasis.scaleSize = seriesOpt.hoverOffset;
        }
      }
    } else if (seriesType2 === "gauge") {
      var pointerColor = get(seriesOpt, "pointer.color");
      pointerColor != null && set(seriesOpt, "itemStyle.color", pointerColor);
    } else if (seriesType2 === "bar") {
      compatBarItemStyle(seriesOpt);
      compatBarItemStyle(seriesOpt.backgroundStyle);
      compatBarItemStyle(seriesOpt.emphasis);
      var data = seriesOpt.data;
      if (data && !isTypedArray(data)) {
        for (var i = 0; i < data.length; i++) {
          if (typeof data[i] === "object") {
            compatBarItemStyle(data[i]);
            compatBarItemStyle(data[i] && data[i].emphasis);
          }
        }
      }
    } else if (seriesType2 === "sunburst") {
      var highlightPolicy = seriesOpt.highlightPolicy;
      if (highlightPolicy) {
        seriesOpt.emphasis = seriesOpt.emphasis || {};
        if (!seriesOpt.emphasis.focus) {
          seriesOpt.emphasis.focus = highlightPolicy;
        }
      }
      compatSunburstState(seriesOpt);
      traverseTree(seriesOpt.data, compatSunburstState);
    } else if (seriesType2 === "graph" || seriesType2 === "sankey") {
      compatGraphFocus(seriesOpt);
    } else if (seriesType2 === "map") {
      if (seriesOpt.mapType && !seriesOpt.map) {
        seriesOpt.map = seriesOpt.mapType;
      }
      if (seriesOpt.mapLocation) {
        defaults(seriesOpt, seriesOpt.mapLocation);
      }
    }
    if (seriesOpt.hoverAnimation != null) {
      seriesOpt.emphasis = seriesOpt.emphasis || {};
      if (seriesOpt.emphasis && seriesOpt.emphasis.scale == null) {
        seriesOpt.emphasis.scale = seriesOpt.hoverAnimation;
      }
    }
    compatLayoutProperties(seriesOpt);
  });
  if (option.dataRange) {
    option.visualMap = option.dataRange;
  }
  each$3(COMPATITABLE_COMPONENTS, function(componentName) {
    var options = option[componentName];
    if (options) {
      if (!isArray$1(options)) {
        options = [options];
      }
      each$3(options, function(option2) {
        compatLayoutProperties(option2);
      });
    }
  });
}
function dataStack(ecModel) {
  var stackInfoMap = createHashMap();
  ecModel.eachSeries(function(seriesModel) {
    var stack = seriesModel.get("stack");
    if (stack) {
      var stackInfoList = stackInfoMap.get(stack) || stackInfoMap.set(stack, []);
      var data = seriesModel.getData();
      var stackInfo = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: data.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: data.getCalculationInfo("stackedOverDimension"),
        stackedDimension: data.getCalculationInfo("stackedDimension"),
        stackedByDimension: data.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: data.getCalculationInfo("isStackedByIndex"),
        data,
        seriesModel
      };
      if (!stackInfo.stackedDimension || !(stackInfo.isStackedByIndex || stackInfo.stackedByDimension)) {
        return;
      }
      stackInfoList.length && data.setCalculationInfo("stackedOnSeries", stackInfoList[stackInfoList.length - 1].seriesModel);
      stackInfoList.push(stackInfo);
    }
  });
  stackInfoMap.each(calculateStack);
}
function calculateStack(stackInfoList) {
  each$3(stackInfoList, function(targetStackInfo, idxInStack) {
    var resultVal = [];
    var resultNaN = [NaN, NaN];
    var dims = [targetStackInfo.stackResultDimension, targetStackInfo.stackedOverDimension];
    var targetData = targetStackInfo.data;
    var isStackedByIndex = targetStackInfo.isStackedByIndex;
    var stackStrategy = targetStackInfo.seriesModel.get("stackStrategy") || "samesign";
    targetData.modify(dims, function(v0, v1, dataIndex) {
      var sum = targetData.get(targetStackInfo.stackedDimension, dataIndex);
      if (isNaN(sum)) {
        return resultNaN;
      }
      var byValue;
      var stackedDataRawIndex;
      if (isStackedByIndex) {
        stackedDataRawIndex = targetData.getRawIndex(dataIndex);
      } else {
        byValue = targetData.get(targetStackInfo.stackedByDimension, dataIndex);
      }
      var stackedOver = NaN;
      for (var j = idxInStack - 1; j >= 0; j--) {
        var stackInfo = stackInfoList[j];
        if (!isStackedByIndex) {
          stackedDataRawIndex = stackInfo.data.rawIndexOf(stackInfo.stackedByDimension, byValue);
        }
        if (stackedDataRawIndex >= 0) {
          var val = stackInfo.data.getByRawIndex(stackInfo.stackResultDimension, stackedDataRawIndex);
          if (stackStrategy === "all" || stackStrategy === "positive" && val > 0 || stackStrategy === "negative" && val < 0 || stackStrategy === "samesign" && sum >= 0 && val > 0 || stackStrategy === "samesign" && sum <= 0 && val < 0) {
            sum = addSafe(sum, val);
            stackedOver = val;
            break;
          }
        }
      }
      resultVal[0] = sum;
      resultVal[1] = stackedOver;
      return resultVal;
    });
  });
}
var SourceImpl = (
  /** @class */
  /* @__PURE__ */ function() {
    function SourceImpl2(fields) {
      this.data = fields.data || (fields.sourceFormat === SOURCE_FORMAT_KEYED_COLUMNS ? {} : []);
      this.sourceFormat = fields.sourceFormat || SOURCE_FORMAT_UNKNOWN;
      this.seriesLayoutBy = fields.seriesLayoutBy || SERIES_LAYOUT_BY_COLUMN;
      this.startIndex = fields.startIndex || 0;
      this.dimensionsDetectedCount = fields.dimensionsDetectedCount;
      this.metaRawOption = fields.metaRawOption;
      var dimensionsDefine = this.dimensionsDefine = fields.dimensionsDefine;
      if (dimensionsDefine) {
        for (var i = 0; i < dimensionsDefine.length; i++) {
          var dim = dimensionsDefine[i];
          if (dim.type == null) {
            if (guessOrdinal(this, i) === BE_ORDINAL.Must) {
              dim.type = "ordinal";
            }
          }
        }
      }
    }
    return SourceImpl2;
  }()
);
function isSourceInstance(val) {
  return val instanceof SourceImpl;
}
function createSource(sourceData, thisMetaRawOption, sourceFormat) {
  sourceFormat = sourceFormat || detectSourceFormat(sourceData);
  var seriesLayoutBy = thisMetaRawOption.seriesLayoutBy;
  var determined = determineSourceDimensions(sourceData, sourceFormat, seriesLayoutBy, thisMetaRawOption.sourceHeader, thisMetaRawOption.dimensions);
  var source = new SourceImpl({
    data: sourceData,
    sourceFormat,
    seriesLayoutBy,
    dimensionsDefine: determined.dimensionsDefine,
    startIndex: determined.startIndex,
    dimensionsDetectedCount: determined.dimensionsDetectedCount,
    metaRawOption: clone$1(thisMetaRawOption)
  });
  return source;
}
function createSourceFromSeriesDataOption(data) {
  return new SourceImpl({
    data,
    sourceFormat: isTypedArray(data) ? SOURCE_FORMAT_TYPED_ARRAY : SOURCE_FORMAT_ORIGINAL
  });
}
function cloneSourceShallow(source) {
  return new SourceImpl({
    data: source.data,
    sourceFormat: source.sourceFormat,
    seriesLayoutBy: source.seriesLayoutBy,
    dimensionsDefine: clone$1(source.dimensionsDefine),
    startIndex: source.startIndex,
    dimensionsDetectedCount: source.dimensionsDetectedCount
  });
}
function detectSourceFormat(data) {
  var sourceFormat = SOURCE_FORMAT_UNKNOWN;
  if (isTypedArray(data)) {
    sourceFormat = SOURCE_FORMAT_TYPED_ARRAY;
  } else if (isArray$1(data)) {
    if (data.length === 0) {
      sourceFormat = SOURCE_FORMAT_ARRAY_ROWS;
    }
    for (var i = 0, len = data.length; i < len; i++) {
      var item = data[i];
      if (item == null) {
        continue;
      } else if (isArray$1(item) || isTypedArray(item)) {
        sourceFormat = SOURCE_FORMAT_ARRAY_ROWS;
        break;
      } else if (isObject$3(item)) {
        sourceFormat = SOURCE_FORMAT_OBJECT_ROWS;
        break;
      }
    }
  } else if (isObject$3(data)) {
    for (var key in data) {
      if (hasOwn$1(data, key) && isArrayLike(data[key])) {
        sourceFormat = SOURCE_FORMAT_KEYED_COLUMNS;
        break;
      }
    }
  }
  return sourceFormat;
}
function determineSourceDimensions(data, sourceFormat, seriesLayoutBy, sourceHeader, dimensionsDefine) {
  var dimensionsDetectedCount;
  var startIndex;
  if (!data) {
    return {
      dimensionsDefine: normalizeDimensionsOption(dimensionsDefine),
      startIndex,
      dimensionsDetectedCount
    };
  }
  if (sourceFormat === SOURCE_FORMAT_ARRAY_ROWS) {
    var dataArrayRows = data;
    if (sourceHeader === "auto" || sourceHeader == null) {
      arrayRowsTravelFirst(function(val) {
        if (val != null && val !== "-") {
          if (isString$2(val)) {
            startIndex == null && (startIndex = 1);
          } else {
            startIndex = 0;
          }
        }
      }, seriesLayoutBy, dataArrayRows, 10);
    } else {
      startIndex = isNumber$1(sourceHeader) ? sourceHeader : sourceHeader ? 1 : 0;
    }
    if (!dimensionsDefine && startIndex === 1) {
      dimensionsDefine = [];
      arrayRowsTravelFirst(function(val, index) {
        dimensionsDefine[index] = val != null ? val + "" : "";
      }, seriesLayoutBy, dataArrayRows, Infinity);
    }
    dimensionsDetectedCount = dimensionsDefine ? dimensionsDefine.length : seriesLayoutBy === SERIES_LAYOUT_BY_ROW ? dataArrayRows.length : dataArrayRows[0] ? dataArrayRows[0].length : null;
  } else if (sourceFormat === SOURCE_FORMAT_OBJECT_ROWS) {
    if (!dimensionsDefine) {
      dimensionsDefine = objectRowsCollectDimensions(data);
    }
  } else if (sourceFormat === SOURCE_FORMAT_KEYED_COLUMNS) {
    if (!dimensionsDefine) {
      dimensionsDefine = [];
      each$3(data, function(colArr, key) {
        dimensionsDefine.push(key);
      });
    }
  } else if (sourceFormat === SOURCE_FORMAT_ORIGINAL) {
    var value0 = getDataItemValue(data[0]);
    dimensionsDetectedCount = isArray$1(value0) && value0.length || 1;
  } else ;
  return {
    startIndex,
    dimensionsDefine: normalizeDimensionsOption(dimensionsDefine),
    dimensionsDetectedCount
  };
}
function objectRowsCollectDimensions(data) {
  var firstIndex = 0;
  var obj;
  while (firstIndex < data.length && !(obj = data[firstIndex++])) {
  }
  if (obj) {
    return keys(obj);
  }
}
function normalizeDimensionsOption(dimensionsDefine) {
  if (!dimensionsDefine) {
    return;
  }
  var nameMap = createHashMap();
  return map$1(dimensionsDefine, function(rawItem, index) {
    rawItem = isObject$3(rawItem) ? rawItem : {
      name: rawItem
    };
    var item = {
      name: rawItem.name,
      displayName: rawItem.displayName,
      type: rawItem.type
    };
    if (item.name == null) {
      return item;
    }
    item.name += "";
    if (item.displayName == null) {
      item.displayName = item.name;
    }
    var exist = nameMap.get(item.name);
    if (!exist) {
      nameMap.set(item.name, {
        count: 1
      });
    } else {
      item.name += "-" + exist.count++;
    }
    return item;
  });
}
function arrayRowsTravelFirst(cb, seriesLayoutBy, data, maxLoop) {
  if (seriesLayoutBy === SERIES_LAYOUT_BY_ROW) {
    for (var i = 0; i < data.length && i < maxLoop; i++) {
      cb(data[i] ? data[i][0] : null, i);
    }
  } else {
    var value0 = data[0] || [];
    for (var i = 0; i < value0.length && i < maxLoop; i++) {
      cb(value0[i], i);
    }
  }
}
function shouldRetrieveDataByName(source) {
  var sourceFormat = source.sourceFormat;
  return sourceFormat === SOURCE_FORMAT_OBJECT_ROWS || sourceFormat === SOURCE_FORMAT_KEYED_COLUMNS;
}
var _a, _b, _c;
var providerMethods;
var mountMethods;
var DefaultDataProvider = (
  /** @class */
  function() {
    function DefaultDataProvider2(sourceParam, dimSize) {
      var source = !isSourceInstance(sourceParam) ? createSourceFromSeriesDataOption(sourceParam) : sourceParam;
      this._source = source;
      var data = this._data = source.data;
      if (source.sourceFormat === SOURCE_FORMAT_TYPED_ARRAY) {
        this._offset = 0;
        this._dimSize = dimSize;
        this._data = data;
      }
      mountMethods(this, data, source);
    }
    DefaultDataProvider2.prototype.getSource = function() {
      return this._source;
    };
    DefaultDataProvider2.prototype.count = function() {
      return 0;
    };
    DefaultDataProvider2.prototype.getItem = function(idx, out) {
      return;
    };
    DefaultDataProvider2.prototype.appendData = function(newData) {
    };
    DefaultDataProvider2.prototype.clean = function() {
    };
    DefaultDataProvider2.protoInitialize = function() {
      var proto2 = DefaultDataProvider2.prototype;
      proto2.pure = false;
      proto2.persistent = true;
    }();
    DefaultDataProvider2.internalField = function() {
      var _a2;
      mountMethods = function(provider, data, source) {
        var sourceFormat = source.sourceFormat;
        var seriesLayoutBy = source.seriesLayoutBy;
        var startIndex = source.startIndex;
        var dimsDef = source.dimensionsDefine;
        var methods = providerMethods[getMethodMapKey(sourceFormat, seriesLayoutBy)];
        extend(provider, methods);
        if (sourceFormat === SOURCE_FORMAT_TYPED_ARRAY) {
          provider.getItem = getItemForTypedArray;
          provider.count = countForTypedArray;
          provider.fillStorage = fillStorageForTypedArray;
        } else {
          var rawItemGetter = getRawSourceItemGetter(sourceFormat, seriesLayoutBy);
          provider.getItem = bind$1(rawItemGetter, null, data, startIndex, dimsDef);
          var rawCounter = getRawSourceDataCounter(sourceFormat, seriesLayoutBy);
          provider.count = bind$1(rawCounter, null, data, startIndex, dimsDef);
        }
      };
      var getItemForTypedArray = function(idx, out) {
        idx = idx - this._offset;
        out = out || [];
        var data = this._data;
        var dimSize = this._dimSize;
        var offset = dimSize * idx;
        for (var i = 0; i < dimSize; i++) {
          out[i] = data[offset + i];
        }
        return out;
      };
      var fillStorageForTypedArray = function(start, end, storage, extent) {
        var data = this._data;
        var dimSize = this._dimSize;
        for (var dim = 0; dim < dimSize; dim++) {
          var dimExtent = extent[dim];
          var min = dimExtent[0] == null ? Infinity : dimExtent[0];
          var max = dimExtent[1] == null ? -Infinity : dimExtent[1];
          var count = end - start;
          var arr = storage[dim];
          for (var i = 0; i < count; i++) {
            var val = data[i * dimSize + dim];
            arr[start + i] = val;
            val < min && (min = val);
            val > max && (max = val);
          }
          dimExtent[0] = min;
          dimExtent[1] = max;
        }
      };
      var countForTypedArray = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      providerMethods = (_a2 = {}, _a2[SOURCE_FORMAT_ARRAY_ROWS + "_" + SERIES_LAYOUT_BY_COLUMN] = {
        pure: true,
        appendData: appendDataSimply
      }, _a2[SOURCE_FORMAT_ARRAY_ROWS + "_" + SERIES_LAYOUT_BY_ROW] = {
        pure: true,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, _a2[SOURCE_FORMAT_OBJECT_ROWS] = {
        pure: true,
        appendData: appendDataSimply
      }, _a2[SOURCE_FORMAT_KEYED_COLUMNS] = {
        pure: true,
        appendData: function(newData) {
          var data = this._data;
          each$3(newData, function(newCol, key) {
            var oldCol = data[key] || (data[key] = []);
            for (var i = 0; i < (newCol || []).length; i++) {
              oldCol.push(newCol[i]);
            }
          });
        }
      }, _a2[SOURCE_FORMAT_ORIGINAL] = {
        appendData: appendDataSimply
      }, _a2[SOURCE_FORMAT_TYPED_ARRAY] = {
        persistent: false,
        pure: true,
        appendData: function(newData) {
          this._data = newData;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count();
          this._data = null;
        }
      }, _a2);
      function appendDataSimply(newData) {
        for (var i = 0; i < newData.length; i++) {
          this._data.push(newData[i]);
        }
      }
    }();
    return DefaultDataProvider2;
  }()
);
var getItemSimply = function(rawData, startIndex, dimsDef, idx) {
  return rawData[idx];
};
var rawSourceItemGetterMap = (_a = {}, _a[SOURCE_FORMAT_ARRAY_ROWS + "_" + SERIES_LAYOUT_BY_COLUMN] = function(rawData, startIndex, dimsDef, idx) {
  return rawData[idx + startIndex];
}, _a[SOURCE_FORMAT_ARRAY_ROWS + "_" + SERIES_LAYOUT_BY_ROW] = function(rawData, startIndex, dimsDef, idx, out) {
  idx += startIndex;
  var item = out || [];
  var data = rawData;
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    item[i] = row ? row[idx] : null;
  }
  return item;
}, _a[SOURCE_FORMAT_OBJECT_ROWS] = getItemSimply, _a[SOURCE_FORMAT_KEYED_COLUMNS] = function(rawData, startIndex, dimsDef, idx, out) {
  var item = out || [];
  for (var i = 0; i < dimsDef.length; i++) {
    var dimName = dimsDef[i].name;
    var col = rawData[dimName];
    item[i] = col ? col[idx] : null;
  }
  return item;
}, _a[SOURCE_FORMAT_ORIGINAL] = getItemSimply, _a);
function getRawSourceItemGetter(sourceFormat, seriesLayoutBy) {
  var method = rawSourceItemGetterMap[getMethodMapKey(sourceFormat, seriesLayoutBy)];
  return method;
}
var countSimply = function(rawData, startIndex, dimsDef) {
  return rawData.length;
};
var rawSourceDataCounterMap = (_b = {}, _b[SOURCE_FORMAT_ARRAY_ROWS + "_" + SERIES_LAYOUT_BY_COLUMN] = function(rawData, startIndex, dimsDef) {
  return Math.max(0, rawData.length - startIndex);
}, _b[SOURCE_FORMAT_ARRAY_ROWS + "_" + SERIES_LAYOUT_BY_ROW] = function(rawData, startIndex, dimsDef) {
  var row = rawData[0];
  return row ? Math.max(0, row.length - startIndex) : 0;
}, _b[SOURCE_FORMAT_OBJECT_ROWS] = countSimply, _b[SOURCE_FORMAT_KEYED_COLUMNS] = function(rawData, startIndex, dimsDef) {
  var dimName = dimsDef[0].name;
  var col = rawData[dimName];
  return col ? col.length : 0;
}, _b[SOURCE_FORMAT_ORIGINAL] = countSimply, _b);
function getRawSourceDataCounter(sourceFormat, seriesLayoutBy) {
  var method = rawSourceDataCounterMap[getMethodMapKey(sourceFormat, seriesLayoutBy)];
  return method;
}
var getRawValueSimply = function(dataItem, dimIndex, property) {
  return dataItem[dimIndex];
};
var rawSourceValueGetterMap = (_c = {}, _c[SOURCE_FORMAT_ARRAY_ROWS] = getRawValueSimply, _c[SOURCE_FORMAT_OBJECT_ROWS] = function(dataItem, dimIndex, property) {
  return dataItem[property];
}, _c[SOURCE_FORMAT_KEYED_COLUMNS] = getRawValueSimply, _c[SOURCE_FORMAT_ORIGINAL] = function(dataItem, dimIndex, property) {
  var value = getDataItemValue(dataItem);
  return !(value instanceof Array) ? value : value[dimIndex];
}, _c[SOURCE_FORMAT_TYPED_ARRAY] = getRawValueSimply, _c);
function getRawSourceValueGetter(sourceFormat) {
  var method = rawSourceValueGetterMap[sourceFormat];
  return method;
}
function getMethodMapKey(sourceFormat, seriesLayoutBy) {
  return sourceFormat === SOURCE_FORMAT_ARRAY_ROWS ? sourceFormat + "_" + seriesLayoutBy : sourceFormat;
}
function retrieveRawValue(data, dataIndex, dim) {
  if (!data) {
    return;
  }
  var dataItem = data.getRawDataItem(dataIndex);
  if (dataItem == null) {
    return;
  }
  var store = data.getStore();
  var sourceFormat = store.getSource().sourceFormat;
  if (dim != null) {
    var dimIndex = data.getDimensionIndex(dim);
    var property = store.getDimensionProperty(dimIndex);
    return getRawSourceValueGetter(sourceFormat)(dataItem, dimIndex, property);
  } else {
    var result = dataItem;
    if (sourceFormat === SOURCE_FORMAT_ORIGINAL) {
      result = getDataItemValue(dataItem);
    }
    return result;
  }
}
var DIMENSION_LABEL_REG = /\{@(.+?)\}/g;
var DataFormatMixin = (
  /** @class */
  function() {
    function DataFormatMixin2() {
    }
    DataFormatMixin2.prototype.getDataParams = function(dataIndex, dataType) {
      var data = this.getData(dataType);
      var rawValue = this.getRawValue(dataIndex, dataType);
      var rawDataIndex = data.getRawIndex(dataIndex);
      var name = data.getName(dataIndex);
      var itemOpt = data.getRawDataItem(dataIndex);
      var style = data.getItemVisual(dataIndex, "style");
      var color = style && style[data.getItemVisual(dataIndex, "drawType") || "fill"];
      var borderColor = style && style.stroke;
      var mainType = this.mainType;
      var isSeries2 = mainType === "series";
      var userOutput = data.userOutput && data.userOutput.get();
      return {
        componentType: mainType,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: isSeries2 ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: isSeries2 ? this.id : null,
        seriesName: isSeries2 ? this.name : null,
        name,
        dataIndex: rawDataIndex,
        data: itemOpt,
        dataType,
        value: rawValue,
        color,
        borderColor,
        dimensionNames: userOutput ? userOutput.fullDimensions : null,
        encode: userOutput ? userOutput.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    };
    DataFormatMixin2.prototype.getFormattedLabel = function(dataIndex, status, dataType, labelDimIndex, formatter, extendParams) {
      status = status || "normal";
      var data = this.getData(dataType);
      var params = this.getDataParams(dataIndex, dataType);
      if (extendParams) {
        params.value = extendParams.interpolatedValue;
      }
      if (labelDimIndex != null && zrUtil.isArray(params.value)) {
        params.value = params.value[labelDimIndex];
      }
      if (!formatter) {
        var itemModel = data.getItemModel(dataIndex);
        formatter = itemModel.get(status === "normal" ? ["label", "formatter"] : [status, "label", "formatter"]);
      }
      if (zrUtil.isFunction(formatter)) {
        params.status = status;
        params.dimensionIndex = labelDimIndex;
        return formatter(params);
      } else if (zrUtil.isString(formatter)) {
        var str = formatTpl(formatter, params);
        return str.replace(DIMENSION_LABEL_REG, function(origin, dimStr) {
          var len = dimStr.length;
          var dimLoose = dimStr;
          if (dimLoose.charAt(0) === "[" && dimLoose.charAt(len - 1) === "]") {
            dimLoose = +dimLoose.slice(1, len - 1);
          }
          var val = retrieveRawValue(data, dataIndex, dimLoose);
          if (extendParams && zrUtil.isArray(extendParams.interpolatedValue)) {
            var dimIndex = data.getDimensionIndex(dimLoose);
            if (dimIndex >= 0) {
              val = extendParams.interpolatedValue[dimIndex];
            }
          }
          return val != null ? val + "" : "";
        });
      }
    };
    DataFormatMixin2.prototype.getRawValue = function(idx, dataType) {
      return retrieveRawValue(this.getData(dataType), idx);
    };
    DataFormatMixin2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
      return;
    };
    return DataFormatMixin2;
  }()
);
function normalizeTooltipFormatResult(result) {
  var markupText;
  var markupFragment;
  if (zrUtil.isObject(result)) {
    if (result.type) {
      markupFragment = result;
    }
  } else {
    markupText = result;
  }
  return {
    text: markupText,
    // markers: markers || markersExisting,
    frag: markupFragment
  };
}
function createTask(define) {
  return new Task(define);
}
var Task = (
  /** @class */
  function() {
    function Task2(define) {
      define = define || {};
      this._reset = define.reset;
      this._plan = define.plan;
      this._count = define.count;
      this._onDirty = define.onDirty;
      this._dirty = true;
    }
    Task2.prototype.perform = function(performArgs) {
      var upTask = this._upstream;
      var skip = performArgs && performArgs.skip;
      if (this._dirty && upTask) {
        var context = this.context;
        context.data = context.outputData = upTask.context.outputData;
      }
      if (this.__pipeline) {
        this.__pipeline.currentTask = this;
      }
      var planResult;
      if (this._plan && !skip) {
        planResult = this._plan(this.context);
      }
      var lastModBy = normalizeModBy(this._modBy);
      var lastModDataCount = this._modDataCount || 0;
      var modBy = normalizeModBy(performArgs && performArgs.modBy);
      var modDataCount = performArgs && performArgs.modDataCount || 0;
      if (lastModBy !== modBy || lastModDataCount !== modDataCount) {
        planResult = "reset";
      }
      function normalizeModBy(val) {
        !(val >= 1) && (val = 1);
        return val;
      }
      var forceFirstProgress;
      if (this._dirty || planResult === "reset") {
        this._dirty = false;
        forceFirstProgress = this._doReset(skip);
      }
      this._modBy = modBy;
      this._modDataCount = modDataCount;
      var step = performArgs && performArgs.step;
      if (upTask) {
        this._dueEnd = upTask._outputDueEnd;
      } else {
        this._dueEnd = this._count ? this._count(this.context) : Infinity;
      }
      if (this._progress) {
        var start = this._dueIndex;
        var end = Math.min(step != null ? this._dueIndex + step : Infinity, this._dueEnd);
        if (!skip && (forceFirstProgress || start < end)) {
          var progress = this._progress;
          if (isArray$1(progress)) {
            for (var i = 0; i < progress.length; i++) {
              this._doProgress(progress[i], start, end, modBy, modDataCount);
            }
          } else {
            this._doProgress(progress, start, end, modBy, modDataCount);
          }
        }
        this._dueIndex = end;
        var outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : end;
        this._outputDueEnd = outputDueEnd;
      } else {
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      }
      return this.unfinished();
    };
    Task2.prototype.dirty = function() {
      this._dirty = true;
      this._onDirty && this._onDirty(this.context);
    };
    Task2.prototype._doProgress = function(progress, start, end, modBy, modDataCount) {
      iterator.reset(start, end, modBy, modDataCount);
      this._callingProgress = progress;
      this._callingProgress({
        start,
        end,
        count: end - start,
        next: iterator.next
      }, this.context);
    };
    Task2.prototype._doReset = function(skip) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0;
      this._settedOutputEnd = null;
      var progress;
      var forceFirstProgress;
      if (!skip && this._reset) {
        progress = this._reset(this.context);
        if (progress && progress.progress) {
          forceFirstProgress = progress.forceFirstProgress;
          progress = progress.progress;
        }
        if (isArray$1(progress) && !progress.length) {
          progress = null;
        }
      }
      this._progress = progress;
      this._modBy = this._modDataCount = null;
      var downstream = this._downstream;
      downstream && downstream.dirty();
      return forceFirstProgress;
    };
    Task2.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    };
    Task2.prototype.pipe = function(downTask) {
      if (this._downstream !== downTask || this._dirty) {
        this._downstream = downTask;
        downTask._upstream = this;
        downTask.dirty();
      }
    };
    Task2.prototype.dispose = function() {
      if (this._disposed) {
        return;
      }
      this._upstream && (this._upstream._downstream = null);
      this._downstream && (this._downstream._upstream = null);
      this._dirty = false;
      this._disposed = true;
    };
    Task2.prototype.getUpstream = function() {
      return this._upstream;
    };
    Task2.prototype.getDownstream = function() {
      return this._downstream;
    };
    Task2.prototype.setOutputEnd = function(end) {
      this._outputDueEnd = this._settedOutputEnd = end;
    };
    return Task2;
  }()
);
var iterator = /* @__PURE__ */ function() {
  var end;
  var current;
  var modBy;
  var modDataCount;
  var winCount;
  var it = {
    reset: function(s, e, sStep, sCount) {
      current = s;
      end = e;
      modBy = sStep;
      modDataCount = sCount;
      winCount = Math.ceil(modDataCount / modBy);
      it.next = modBy > 1 && modDataCount > 0 ? modNext : sequentialNext;
    }
  };
  return it;
  function sequentialNext() {
    return current < end ? current++ : null;
  }
  function modNext() {
    var dataIndex = current % winCount * modBy + Math.ceil(current / winCount);
    var result = current >= end ? null : dataIndex < modDataCount ? dataIndex : current;
    current++;
    return result;
  }
}();
function parseDataValue(value, opt) {
  var dimType = opt && opt.type;
  if (dimType === "ordinal") {
    return value;
  }
  if (dimType === "time" && !isNumber$1(value) && value != null && value !== "-") {
    value = +parseDate(value);
  }
  return value == null || value === "" ? NaN : Number(value);
}
createHashMap({
  "number": function(val) {
    return parseFloat(val);
  },
  "time": function(val) {
    return +parseDate(val);
  },
  "trim": function(val) {
    return isString$2(val) ? trim(val) : val;
  }
});
var SortOrderComparator = (
  /** @class */
  function() {
    function SortOrderComparator2(order, incomparable) {
      var isDesc = order === "desc";
      this._resultLT = isDesc ? 1 : -1;
      if (incomparable == null) {
        incomparable = isDesc ? "min" : "max";
      }
      this._incomparable = incomparable === "min" ? -Infinity : Infinity;
    }
    SortOrderComparator2.prototype.evaluate = function(lval, rval) {
      var lvalFloat = isNumber$1(lval) ? lval : numericToNumber(lval);
      var rvalFloat = isNumber$1(rval) ? rval : numericToNumber(rval);
      var lvalNotNumeric = isNaN(lvalFloat);
      var rvalNotNumeric = isNaN(rvalFloat);
      if (lvalNotNumeric) {
        lvalFloat = this._incomparable;
      }
      if (rvalNotNumeric) {
        rvalFloat = this._incomparable;
      }
      if (lvalNotNumeric && rvalNotNumeric) {
        var lvalIsStr = isString$2(lval);
        var rvalIsStr = isString$2(rval);
        if (lvalIsStr) {
          lvalFloat = rvalIsStr ? lval : 0;
        }
        if (rvalIsStr) {
          rvalFloat = lvalIsStr ? rval : 0;
        }
      }
      return lvalFloat < rvalFloat ? this._resultLT : lvalFloat > rvalFloat ? -this._resultLT : 0;
    };
    return SortOrderComparator2;
  }()
);
var ExternalSource = (
  /** @class */
  function() {
    function ExternalSource2() {
    }
    ExternalSource2.prototype.getRawData = function() {
      throw new Error("not supported");
    };
    ExternalSource2.prototype.getRawDataItem = function(dataIndex) {
      throw new Error("not supported");
    };
    ExternalSource2.prototype.cloneRawData = function() {
      return;
    };
    ExternalSource2.prototype.getDimensionInfo = function(dim) {
      return;
    };
    ExternalSource2.prototype.cloneAllDimensionInfo = function() {
      return;
    };
    ExternalSource2.prototype.count = function() {
      return;
    };
    ExternalSource2.prototype.retrieveValue = function(dataIndex, dimIndex) {
      return;
    };
    ExternalSource2.prototype.retrieveValueFromItem = function(dataItem, dimIndex) {
      return;
    };
    ExternalSource2.prototype.convertValue = function(rawVal, dimInfo) {
      return parseDataValue(rawVal, dimInfo);
    };
    return ExternalSource2;
  }()
);
function createExternalSource(internalSource, externalTransform) {
  var extSource = new ExternalSource();
  var data = internalSource.data;
  var sourceFormat = extSource.sourceFormat = internalSource.sourceFormat;
  var sourceHeaderCount = internalSource.startIndex;
  var errMsg = "";
  if (internalSource.seriesLayoutBy !== SERIES_LAYOUT_BY_COLUMN) {
    throwError(errMsg);
  }
  var dimensions = [];
  var dimsByName = {};
  var dimsDef = internalSource.dimensionsDefine;
  if (dimsDef) {
    each$3(dimsDef, function(dimDef, idx) {
      var name = dimDef.name;
      var dimDefExt = {
        index: idx,
        name,
        displayName: dimDef.displayName
      };
      dimensions.push(dimDefExt);
      if (name != null) {
        var errMsg_1 = "";
        if (hasOwn$1(dimsByName, name)) {
          throwError(errMsg_1);
        }
        dimsByName[name] = dimDefExt;
      }
    });
  } else {
    for (var i = 0; i < internalSource.dimensionsDetectedCount || 0; i++) {
      dimensions.push({
        index: i
      });
    }
  }
  var rawItemGetter = getRawSourceItemGetter(sourceFormat, SERIES_LAYOUT_BY_COLUMN);
  if (externalTransform.__isBuiltIn) {
    extSource.getRawDataItem = function(dataIndex) {
      return rawItemGetter(data, sourceHeaderCount, dimensions, dataIndex);
    };
    extSource.getRawData = bind$1(getRawData, null, internalSource);
  }
  extSource.cloneRawData = bind$1(cloneRawData, null, internalSource);
  var rawCounter = getRawSourceDataCounter(sourceFormat, SERIES_LAYOUT_BY_COLUMN);
  extSource.count = bind$1(rawCounter, null, data, sourceHeaderCount, dimensions);
  var rawValueGetter = getRawSourceValueGetter(sourceFormat);
  extSource.retrieveValue = function(dataIndex, dimIndex) {
    var rawItem = rawItemGetter(data, sourceHeaderCount, dimensions, dataIndex);
    return retrieveValueFromItem(rawItem, dimIndex);
  };
  var retrieveValueFromItem = extSource.retrieveValueFromItem = function(dataItem, dimIndex) {
    if (dataItem == null) {
      return;
    }
    var dimDef = dimensions[dimIndex];
    if (dimDef) {
      return rawValueGetter(dataItem, dimIndex, dimDef.name);
    }
  };
  extSource.getDimensionInfo = bind$1(getDimensionInfo, null, dimensions, dimsByName);
  extSource.cloneAllDimensionInfo = bind$1(cloneAllDimensionInfo, null, dimensions);
  return extSource;
}
function getRawData(upstream) {
  var sourceFormat = upstream.sourceFormat;
  if (!isSupportedSourceFormat(sourceFormat)) {
    var errMsg = "";
    throwError(errMsg);
  }
  return upstream.data;
}
function cloneRawData(upstream) {
  var sourceFormat = upstream.sourceFormat;
  var data = upstream.data;
  if (!isSupportedSourceFormat(sourceFormat)) {
    var errMsg = "";
    throwError(errMsg);
  }
  if (sourceFormat === SOURCE_FORMAT_ARRAY_ROWS) {
    var result = [];
    for (var i = 0, len = data.length; i < len; i++) {
      result.push(data[i].slice());
    }
    return result;
  } else if (sourceFormat === SOURCE_FORMAT_OBJECT_ROWS) {
    var result = [];
    for (var i = 0, len = data.length; i < len; i++) {
      result.push(extend({}, data[i]));
    }
    return result;
  }
}
function getDimensionInfo(dimensions, dimsByName, dim) {
  if (dim == null) {
    return;
  }
  if (isNumber$1(dim) || !isNaN(dim) && !hasOwn$1(dimsByName, dim)) {
    return dimensions[dim];
  } else if (hasOwn$1(dimsByName, dim)) {
    return dimsByName[dim];
  }
}
function cloneAllDimensionInfo(dimensions) {
  return clone$1(dimensions);
}
var externalTransformMap = createHashMap();
function registerExternalTransform(externalTransform) {
  externalTransform = clone$1(externalTransform);
  var type = externalTransform.type;
  var errMsg = "";
  if (!type) {
    throwError(errMsg);
  }
  var typeParsed = type.split(":");
  if (typeParsed.length !== 2) {
    throwError(errMsg);
  }
  var isBuiltIn = false;
  if (typeParsed[0] === "echarts") {
    type = typeParsed[1];
    isBuiltIn = true;
  }
  externalTransform.__isBuiltIn = isBuiltIn;
  externalTransformMap.set(type, externalTransform);
}
function applyDataTransform(rawTransOption, sourceList, infoForPrint) {
  var pipedTransOption = normalizeToArray(rawTransOption);
  var pipeLen = pipedTransOption.length;
  var errMsg = "";
  if (!pipeLen) {
    throwError(errMsg);
  }
  for (var i = 0, len = pipeLen; i < len; i++) {
    var transOption = pipedTransOption[i];
    sourceList = applySingleDataTransform(transOption, sourceList);
    if (i !== len - 1) {
      sourceList.length = Math.max(sourceList.length, 1);
    }
  }
  return sourceList;
}
function applySingleDataTransform(transOption, upSourceList, infoForPrint, pipeIndex) {
  var errMsg = "";
  if (!upSourceList.length) {
    throwError(errMsg);
  }
  if (!isObject$3(transOption)) {
    throwError(errMsg);
  }
  var transType = transOption.type;
  var externalTransform = externalTransformMap.get(transType);
  if (!externalTransform) {
    throwError(errMsg);
  }
  var extUpSourceList = map$1(upSourceList, function(upSource) {
    return createExternalSource(upSource, externalTransform);
  });
  var resultList = normalizeToArray(externalTransform.transform({
    upstream: extUpSourceList[0],
    upstreamList: extUpSourceList,
    config: clone$1(transOption.config)
  }));
  return map$1(resultList, function(result, resultIndex) {
    var errMsg2 = "";
    if (!isObject$3(result)) {
      throwError(errMsg2);
    }
    if (!result.data) {
      throwError(errMsg2);
    }
    var sourceFormat = detectSourceFormat(result.data);
    if (!isSupportedSourceFormat(sourceFormat)) {
      throwError(errMsg2);
    }
    var resultMetaRawOption;
    var firstUpSource = upSourceList[0];
    if (firstUpSource && resultIndex === 0 && !result.dimensions) {
      var startIndex = firstUpSource.startIndex;
      if (startIndex) {
        result.data = firstUpSource.data.slice(0, startIndex).concat(result.data);
      }
      resultMetaRawOption = {
        seriesLayoutBy: SERIES_LAYOUT_BY_COLUMN,
        sourceHeader: startIndex,
        dimensions: firstUpSource.metaRawOption.dimensions
      };
    } else {
      resultMetaRawOption = {
        seriesLayoutBy: SERIES_LAYOUT_BY_COLUMN,
        sourceHeader: 0,
        dimensions: result.dimensions
      };
    }
    return createSource(result.data, resultMetaRawOption, null);
  });
}
function isSupportedSourceFormat(sourceFormat) {
  return sourceFormat === SOURCE_FORMAT_ARRAY_ROWS || sourceFormat === SOURCE_FORMAT_OBJECT_ROWS;
}
var UNDEFINED = "undefined";
var CtorUint32Array = typeof Uint32Array === UNDEFINED ? Array : Uint32Array;
var CtorUint16Array = typeof Uint16Array === UNDEFINED ? Array : Uint16Array;
var CtorInt32Array$1 = typeof Int32Array === UNDEFINED ? Array : Int32Array;
var CtorFloat64Array = typeof Float64Array === UNDEFINED ? Array : Float64Array;
var dataCtors = {
  "float": CtorFloat64Array,
  "int": CtorInt32Array$1,
  // Ordinal data type can be string or int
  "ordinal": Array,
  "number": Array,
  "time": CtorFloat64Array
};
var defaultDimValueGetters;
function getIndicesCtor(rawCount) {
  return rawCount > 65535 ? CtorUint32Array : CtorUint16Array;
}
function getInitialExtent() {
  return [Infinity, -Infinity];
}
function cloneChunk(originalChunk) {
  var Ctor = originalChunk.constructor;
  return Ctor === Array ? originalChunk.slice() : new Ctor(originalChunk);
}
function prepareStore(store, dimIdx, dimType, end, append) {
  var DataCtor = dataCtors[dimType || "float"];
  if (append) {
    var oldStore = store[dimIdx];
    var oldLen = oldStore && oldStore.length;
    if (!(oldLen === end)) {
      var newStore = new DataCtor(end);
      for (var j = 0; j < oldLen; j++) {
        newStore[j] = oldStore[j];
      }
      store[dimIdx] = newStore;
    }
  } else {
    store[dimIdx] = new DataCtor(end);
  }
}
var DataStore = (
  /** @class */
  function() {
    function DataStore2() {
      this._chunks = [];
      this._rawExtent = [];
      this._extent = [];
      this._count = 0;
      this._rawCount = 0;
      this._calcDimNameToIdx = createHashMap();
    }
    DataStore2.prototype.initData = function(provider, inputDimensions, dimValueGetter) {
      this._provider = provider;
      this._chunks = [];
      this._indices = null;
      this.getRawIndex = this._getRawIdxIdentity;
      var source = provider.getSource();
      var defaultGetter = this.defaultDimValueGetter = defaultDimValueGetters[source.sourceFormat];
      this._dimValueGetter = dimValueGetter || defaultGetter;
      this._rawExtent = [];
      shouldRetrieveDataByName(source);
      this._dimensions = map$1(inputDimensions, function(dim) {
        return {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: dim.type,
          property: dim.property
        };
      });
      this._initDataFromProvider(0, provider.count());
    };
    DataStore2.prototype.getProvider = function() {
      return this._provider;
    };
    DataStore2.prototype.getSource = function() {
      return this._provider.getSource();
    };
    DataStore2.prototype.ensureCalculationDimension = function(dimName, type) {
      var calcDimNameToIdx = this._calcDimNameToIdx;
      var dimensions = this._dimensions;
      var calcDimIdx = calcDimNameToIdx.get(dimName);
      if (calcDimIdx != null) {
        if (dimensions[calcDimIdx].type === type) {
          return calcDimIdx;
        }
      } else {
        calcDimIdx = dimensions.length;
      }
      dimensions[calcDimIdx] = {
        type
      };
      calcDimNameToIdx.set(dimName, calcDimIdx);
      this._chunks[calcDimIdx] = new dataCtors[type || "float"](this._rawCount);
      this._rawExtent[calcDimIdx] = getInitialExtent();
      return calcDimIdx;
    };
    DataStore2.prototype.collectOrdinalMeta = function(dimIdx, ordinalMeta) {
      var chunk = this._chunks[dimIdx];
      var dim = this._dimensions[dimIdx];
      var rawExtents = this._rawExtent;
      var offset = dim.ordinalOffset || 0;
      var len = chunk.length;
      if (offset === 0) {
        rawExtents[dimIdx] = getInitialExtent();
      }
      var dimRawExtent = rawExtents[dimIdx];
      for (var i = offset; i < len; i++) {
        var val = chunk[i] = ordinalMeta.parseAndCollect(chunk[i]);
        if (!isNaN(val)) {
          dimRawExtent[0] = Math.min(val, dimRawExtent[0]);
          dimRawExtent[1] = Math.max(val, dimRawExtent[1]);
        }
      }
      dim.ordinalMeta = ordinalMeta;
      dim.ordinalOffset = len;
      dim.type = "ordinal";
    };
    DataStore2.prototype.getOrdinalMeta = function(dimIdx) {
      var dimInfo = this._dimensions[dimIdx];
      var ordinalMeta = dimInfo.ordinalMeta;
      return ordinalMeta;
    };
    DataStore2.prototype.getDimensionProperty = function(dimIndex) {
      var item = this._dimensions[dimIndex];
      return item && item.property;
    };
    DataStore2.prototype.appendData = function(data) {
      var provider = this._provider;
      var start = this.count();
      provider.appendData(data);
      var end = provider.count();
      if (!provider.persistent) {
        end += start;
      }
      if (start < end) {
        this._initDataFromProvider(start, end, true);
      }
      return [start, end];
    };
    DataStore2.prototype.appendValues = function(values, minFillLen) {
      var chunks = this._chunks;
      var dimensions = this._dimensions;
      var dimLen = dimensions.length;
      var rawExtent = this._rawExtent;
      var start = this.count();
      var end = start + Math.max(values.length, minFillLen || 0);
      for (var i = 0; i < dimLen; i++) {
        var dim = dimensions[i];
        prepareStore(chunks, i, dim.type, end, true);
      }
      var emptyDataItem = [];
      for (var idx = start; idx < end; idx++) {
        var sourceIdx = idx - start;
        for (var dimIdx = 0; dimIdx < dimLen; dimIdx++) {
          var dim = dimensions[dimIdx];
          var val = defaultDimValueGetters.arrayRows.call(this, values[sourceIdx] || emptyDataItem, dim.property, sourceIdx, dimIdx);
          chunks[dimIdx][idx] = val;
          var dimRawExtent = rawExtent[dimIdx];
          val < dimRawExtent[0] && (dimRawExtent[0] = val);
          val > dimRawExtent[1] && (dimRawExtent[1] = val);
        }
      }
      this._rawCount = this._count = end;
      return {
        start,
        end
      };
    };
    DataStore2.prototype._initDataFromProvider = function(start, end, append) {
      var provider = this._provider;
      var chunks = this._chunks;
      var dimensions = this._dimensions;
      var dimLen = dimensions.length;
      var rawExtent = this._rawExtent;
      var dimNames = map$1(dimensions, function(dim2) {
        return dim2.property;
      });
      for (var i = 0; i < dimLen; i++) {
        var dim = dimensions[i];
        if (!rawExtent[i]) {
          rawExtent[i] = getInitialExtent();
        }
        prepareStore(chunks, i, dim.type, end, append);
      }
      if (provider.fillStorage) {
        provider.fillStorage(start, end, chunks, rawExtent);
      } else {
        var dataItem = [];
        for (var idx = start; idx < end; idx++) {
          dataItem = provider.getItem(idx, dataItem);
          for (var dimIdx = 0; dimIdx < dimLen; dimIdx++) {
            var dimStorage = chunks[dimIdx];
            var val = this._dimValueGetter(dataItem, dimNames[dimIdx], idx, dimIdx);
            dimStorage[idx] = val;
            var dimRawExtent = rawExtent[dimIdx];
            val < dimRawExtent[0] && (dimRawExtent[0] = val);
            val > dimRawExtent[1] && (dimRawExtent[1] = val);
          }
        }
      }
      if (!provider.persistent && provider.clean) {
        provider.clean();
      }
      this._rawCount = this._count = end;
      this._extent = [];
    };
    DataStore2.prototype.count = function() {
      return this._count;
    };
    DataStore2.prototype.get = function(dim, idx) {
      if (!(idx >= 0 && idx < this._count)) {
        return NaN;
      }
      var dimStore = this._chunks[dim];
      return dimStore ? dimStore[this.getRawIndex(idx)] : NaN;
    };
    DataStore2.prototype.getValues = function(dimensions, idx) {
      var values = [];
      var dimArr = [];
      if (idx == null) {
        idx = dimensions;
        dimensions = [];
        for (var i = 0; i < this._dimensions.length; i++) {
          dimArr.push(i);
        }
      } else {
        dimArr = dimensions;
      }
      for (var i = 0, len = dimArr.length; i < len; i++) {
        values.push(this.get(dimArr[i], idx));
      }
      return values;
    };
    DataStore2.prototype.getByRawIndex = function(dim, rawIdx) {
      if (!(rawIdx >= 0 && rawIdx < this._rawCount)) {
        return NaN;
      }
      var dimStore = this._chunks[dim];
      return dimStore ? dimStore[rawIdx] : NaN;
    };
    DataStore2.prototype.getSum = function(dim) {
      var dimData = this._chunks[dim];
      var sum = 0;
      if (dimData) {
        for (var i = 0, len = this.count(); i < len; i++) {
          var value = this.get(dim, i);
          if (!isNaN(value)) {
            sum += value;
          }
        }
      }
      return sum;
    };
    DataStore2.prototype.getMedian = function(dim) {
      var dimDataArray = [];
      this.each([dim], function(val) {
        if (!isNaN(val)) {
          dimDataArray.push(val);
        }
      });
      var sortedDimDataArray = dimDataArray.sort(function(a, b) {
        return a - b;
      });
      var len = this.count();
      return len === 0 ? 0 : len % 2 === 1 ? sortedDimDataArray[(len - 1) / 2] : (sortedDimDataArray[len / 2] + sortedDimDataArray[len / 2 - 1]) / 2;
    };
    DataStore2.prototype.indexOfRawIndex = function(rawIndex) {
      if (rawIndex >= this._rawCount || rawIndex < 0) {
        return -1;
      }
      if (!this._indices) {
        return rawIndex;
      }
      var indices = this._indices;
      var rawDataIndex = indices[rawIndex];
      if (rawDataIndex != null && rawDataIndex < this._count && rawDataIndex === rawIndex) {
        return rawIndex;
      }
      var left = 0;
      var right = this._count - 1;
      while (left <= right) {
        var mid = (left + right) / 2 | 0;
        if (indices[mid] < rawIndex) {
          left = mid + 1;
        } else if (indices[mid] > rawIndex) {
          right = mid - 1;
        } else {
          return mid;
        }
      }
      return -1;
    };
    DataStore2.prototype.indicesOfNearest = function(dim, value, maxDistance) {
      var chunks = this._chunks;
      var dimData = chunks[dim];
      var nearestIndices = [];
      if (!dimData) {
        return nearestIndices;
      }
      if (maxDistance == null) {
        maxDistance = Infinity;
      }
      var minDist = Infinity;
      var minDiff = -1;
      var nearestIndicesLen = 0;
      for (var i = 0, len = this.count(); i < len; i++) {
        var dataIndex = this.getRawIndex(i);
        var diff = value - dimData[dataIndex];
        var dist = Math.abs(diff);
        if (dist <= maxDistance) {
          if (dist < minDist || dist === minDist && diff >= 0 && minDiff < 0) {
            minDist = dist;
            minDiff = diff;
            nearestIndicesLen = 0;
          }
          if (diff === minDiff) {
            nearestIndices[nearestIndicesLen++] = i;
          }
        }
      }
      nearestIndices.length = nearestIndicesLen;
      return nearestIndices;
    };
    DataStore2.prototype.getIndices = function() {
      var newIndices;
      var indices = this._indices;
      if (indices) {
        var Ctor = indices.constructor;
        var thisCount = this._count;
        if (Ctor === Array) {
          newIndices = new Ctor(thisCount);
          for (var i = 0; i < thisCount; i++) {
            newIndices[i] = indices[i];
          }
        } else {
          newIndices = new Ctor(indices.buffer, 0, thisCount);
        }
      } else {
        var Ctor = getIndicesCtor(this._rawCount);
        newIndices = new Ctor(this.count());
        for (var i = 0; i < newIndices.length; i++) {
          newIndices[i] = i;
        }
      }
      return newIndices;
    };
    DataStore2.prototype.filter = function(dims, cb) {
      if (!this._count) {
        return this;
      }
      var newStore = this.clone();
      var count = newStore.count();
      var Ctor = getIndicesCtor(newStore._rawCount);
      var newIndices = new Ctor(count);
      var value = [];
      var dimSize = dims.length;
      var offset = 0;
      var dim0 = dims[0];
      var chunks = newStore._chunks;
      for (var i = 0; i < count; i++) {
        var keep = void 0;
        var rawIdx = newStore.getRawIndex(i);
        if (dimSize === 0) {
          keep = cb(i);
        } else if (dimSize === 1) {
          var val = chunks[dim0][rawIdx];
          keep = cb(val, i);
        } else {
          var k = 0;
          for (; k < dimSize; k++) {
            value[k] = chunks[dims[k]][rawIdx];
          }
          value[k] = i;
          keep = cb.apply(null, value);
        }
        if (keep) {
          newIndices[offset++] = rawIdx;
        }
      }
      if (offset < count) {
        newStore._indices = newIndices;
      }
      newStore._count = offset;
      newStore._extent = [];
      newStore._updateGetRawIdx();
      return newStore;
    };
    DataStore2.prototype.selectRange = function(range) {
      var newStore = this.clone();
      var len = newStore._count;
      if (!len) {
        return this;
      }
      var dims = keys(range);
      var dimSize = dims.length;
      if (!dimSize) {
        return this;
      }
      var originalCount = newStore.count();
      var Ctor = getIndicesCtor(newStore._rawCount);
      var newIndices = new Ctor(originalCount);
      var offset = 0;
      var dim0 = dims[0];
      var min = range[dim0][0];
      var max = range[dim0][1];
      var storeArr = newStore._chunks;
      var quickFinished = false;
      if (!newStore._indices) {
        var idx = 0;
        if (dimSize === 1) {
          var dimStorage = storeArr[dims[0]];
          for (var i = 0; i < len; i++) {
            var val = dimStorage[i];
            if (val >= min && val <= max || isNaN(val)) {
              newIndices[offset++] = idx;
            }
            idx++;
          }
          quickFinished = true;
        } else if (dimSize === 2) {
          var dimStorage = storeArr[dims[0]];
          var dimStorage2 = storeArr[dims[1]];
          var min2 = range[dims[1]][0];
          var max2 = range[dims[1]][1];
          for (var i = 0; i < len; i++) {
            var val = dimStorage[i];
            var val2 = dimStorage2[i];
            if ((val >= min && val <= max || isNaN(val)) && (val2 >= min2 && val2 <= max2 || isNaN(val2))) {
              newIndices[offset++] = idx;
            }
            idx++;
          }
          quickFinished = true;
        }
      }
      if (!quickFinished) {
        if (dimSize === 1) {
          for (var i = 0; i < originalCount; i++) {
            var rawIndex = newStore.getRawIndex(i);
            var val = storeArr[dims[0]][rawIndex];
            if (val >= min && val <= max || isNaN(val)) {
              newIndices[offset++] = rawIndex;
            }
          }
        } else {
          for (var i = 0; i < originalCount; i++) {
            var keep = true;
            var rawIndex = newStore.getRawIndex(i);
            for (var k = 0; k < dimSize; k++) {
              var dimk = dims[k];
              var val = storeArr[dimk][rawIndex];
              if (val < range[dimk][0] || val > range[dimk][1]) {
                keep = false;
              }
            }
            if (keep) {
              newIndices[offset++] = newStore.getRawIndex(i);
            }
          }
        }
      }
      if (offset < originalCount) {
        newStore._indices = newIndices;
      }
      newStore._count = offset;
      newStore._extent = [];
      newStore._updateGetRawIdx();
      return newStore;
    };
    DataStore2.prototype.map = function(dims, cb) {
      var target = this.clone(dims);
      this._updateDims(target, dims, cb);
      return target;
    };
    DataStore2.prototype.modify = function(dims, cb) {
      this._updateDims(this, dims, cb);
    };
    DataStore2.prototype._updateDims = function(target, dims, cb) {
      var targetChunks = target._chunks;
      var tmpRetValue = [];
      var dimSize = dims.length;
      var dataCount = target.count();
      var values = [];
      var rawExtent = target._rawExtent;
      for (var i = 0; i < dims.length; i++) {
        rawExtent[dims[i]] = getInitialExtent();
      }
      for (var dataIndex = 0; dataIndex < dataCount; dataIndex++) {
        var rawIndex = target.getRawIndex(dataIndex);
        for (var k = 0; k < dimSize; k++) {
          values[k] = targetChunks[dims[k]][rawIndex];
        }
        values[dimSize] = dataIndex;
        var retValue = cb && cb.apply(null, values);
        if (retValue != null) {
          if (typeof retValue !== "object") {
            tmpRetValue[0] = retValue;
            retValue = tmpRetValue;
          }
          for (var i = 0; i < retValue.length; i++) {
            var dim = dims[i];
            var val = retValue[i];
            var rawExtentOnDim = rawExtent[dim];
            var dimStore = targetChunks[dim];
            if (dimStore) {
              dimStore[rawIndex] = val;
            }
            if (val < rawExtentOnDim[0]) {
              rawExtentOnDim[0] = val;
            }
            if (val > rawExtentOnDim[1]) {
              rawExtentOnDim[1] = val;
            }
          }
        }
      }
    };
    DataStore2.prototype.lttbDownSample = function(valueDimension, rate) {
      var target = this.clone([valueDimension], true);
      var targetStorage = target._chunks;
      var dimStore = targetStorage[valueDimension];
      var len = this.count();
      var sampledIndex = 0;
      var frameSize = Math.floor(1 / rate);
      var currentRawIndex = this.getRawIndex(0);
      var maxArea;
      var area;
      var nextRawIndex;
      var newIndices = new (getIndicesCtor(this._rawCount))(Math.min((Math.ceil(len / frameSize) + 2) * 2, len));
      newIndices[sampledIndex++] = currentRawIndex;
      for (var i = 1; i < len - 1; i += frameSize) {
        var nextFrameStart = Math.min(i + frameSize, len - 1);
        var nextFrameEnd = Math.min(i + frameSize * 2, len);
        var avgX = (nextFrameEnd + nextFrameStart) / 2;
        var avgY = 0;
        for (var idx = nextFrameStart; idx < nextFrameEnd; idx++) {
          var rawIndex = this.getRawIndex(idx);
          var y = dimStore[rawIndex];
          if (isNaN(y)) {
            continue;
          }
          avgY += y;
        }
        avgY /= nextFrameEnd - nextFrameStart;
        var frameStart = i;
        var frameEnd = Math.min(i + frameSize, len);
        var pointAX = i - 1;
        var pointAY = dimStore[currentRawIndex];
        maxArea = -1;
        nextRawIndex = frameStart;
        var firstNaNIndex = -1;
        var countNaN = 0;
        for (var idx = frameStart; idx < frameEnd; idx++) {
          var rawIndex = this.getRawIndex(idx);
          var y = dimStore[rawIndex];
          if (isNaN(y)) {
            countNaN++;
            if (firstNaNIndex < 0) {
              firstNaNIndex = rawIndex;
            }
            continue;
          }
          area = Math.abs((pointAX - avgX) * (y - pointAY) - (pointAX - idx) * (avgY - pointAY));
          if (area > maxArea) {
            maxArea = area;
            nextRawIndex = rawIndex;
          }
        }
        if (countNaN > 0 && countNaN < frameEnd - frameStart) {
          newIndices[sampledIndex++] = Math.min(firstNaNIndex, nextRawIndex);
          nextRawIndex = Math.max(firstNaNIndex, nextRawIndex);
        }
        newIndices[sampledIndex++] = nextRawIndex;
        currentRawIndex = nextRawIndex;
      }
      newIndices[sampledIndex++] = this.getRawIndex(len - 1);
      target._count = sampledIndex;
      target._indices = newIndices;
      target.getRawIndex = this._getRawIdx;
      return target;
    };
    DataStore2.prototype.downSample = function(dimension, rate, sampleValue, sampleIndex) {
      var target = this.clone([dimension], true);
      var targetStorage = target._chunks;
      var frameValues = [];
      var frameSize = Math.floor(1 / rate);
      var dimStore = targetStorage[dimension];
      var len = this.count();
      var rawExtentOnDim = target._rawExtent[dimension] = getInitialExtent();
      var newIndices = new (getIndicesCtor(this._rawCount))(Math.ceil(len / frameSize));
      var offset = 0;
      for (var i = 0; i < len; i += frameSize) {
        if (frameSize > len - i) {
          frameSize = len - i;
          frameValues.length = frameSize;
        }
        for (var k = 0; k < frameSize; k++) {
          var dataIdx = this.getRawIndex(i + k);
          frameValues[k] = dimStore[dataIdx];
        }
        var value = sampleValue(frameValues);
        var sampleFrameIdx = this.getRawIndex(Math.min(i + sampleIndex(frameValues, value) || 0, len - 1));
        dimStore[sampleFrameIdx] = value;
        if (value < rawExtentOnDim[0]) {
          rawExtentOnDim[0] = value;
        }
        if (value > rawExtentOnDim[1]) {
          rawExtentOnDim[1] = value;
        }
        newIndices[offset++] = sampleFrameIdx;
      }
      target._count = offset;
      target._indices = newIndices;
      target._updateGetRawIdx();
      return target;
    };
    DataStore2.prototype.each = function(dims, cb) {
      if (!this._count) {
        return;
      }
      var dimSize = dims.length;
      var chunks = this._chunks;
      for (var i = 0, len = this.count(); i < len; i++) {
        var rawIdx = this.getRawIndex(i);
        switch (dimSize) {
          case 0:
            cb(i);
            break;
          case 1:
            cb(chunks[dims[0]][rawIdx], i);
            break;
          case 2:
            cb(chunks[dims[0]][rawIdx], chunks[dims[1]][rawIdx], i);
            break;
          default:
            var k = 0;
            var value = [];
            for (; k < dimSize; k++) {
              value[k] = chunks[dims[k]][rawIdx];
            }
            value[k] = i;
            cb.apply(null, value);
        }
      }
    };
    DataStore2.prototype.getDataExtent = function(dim) {
      var dimData = this._chunks[dim];
      var initialExtent = getInitialExtent();
      if (!dimData) {
        return initialExtent;
      }
      var currEnd = this.count();
      var useRaw = !this._indices;
      var dimExtent;
      if (useRaw) {
        return this._rawExtent[dim].slice();
      }
      dimExtent = this._extent[dim];
      if (dimExtent) {
        return dimExtent.slice();
      }
      dimExtent = initialExtent;
      var min = dimExtent[0];
      var max = dimExtent[1];
      for (var i = 0; i < currEnd; i++) {
        var rawIdx = this.getRawIndex(i);
        var value = dimData[rawIdx];
        value < min && (min = value);
        value > max && (max = value);
      }
      dimExtent = [min, max];
      this._extent[dim] = dimExtent;
      return dimExtent;
    };
    DataStore2.prototype.getRawDataItem = function(idx) {
      var rawIdx = this.getRawIndex(idx);
      if (!this._provider.persistent) {
        var val = [];
        var chunks = this._chunks;
        for (var i = 0; i < chunks.length; i++) {
          val.push(chunks[i][rawIdx]);
        }
        return val;
      } else {
        return this._provider.getItem(rawIdx);
      }
    };
    DataStore2.prototype.clone = function(clonedDims, ignoreIndices) {
      var target = new DataStore2();
      var chunks = this._chunks;
      var clonedDimsMap = clonedDims && reduce(clonedDims, function(obj, dimIdx) {
        obj[dimIdx] = true;
        return obj;
      }, {});
      if (clonedDimsMap) {
        for (var i = 0; i < chunks.length; i++) {
          target._chunks[i] = !clonedDimsMap[i] ? chunks[i] : cloneChunk(chunks[i]);
        }
      } else {
        target._chunks = chunks;
      }
      this._copyCommonProps(target);
      if (!ignoreIndices) {
        target._indices = this._cloneIndices();
      }
      target._updateGetRawIdx();
      return target;
    };
    DataStore2.prototype._copyCommonProps = function(target) {
      target._count = this._count;
      target._rawCount = this._rawCount;
      target._provider = this._provider;
      target._dimensions = this._dimensions;
      target._extent = clone$1(this._extent);
      target._rawExtent = clone$1(this._rawExtent);
    };
    DataStore2.prototype._cloneIndices = function() {
      if (this._indices) {
        var Ctor = this._indices.constructor;
        var indices = void 0;
        if (Ctor === Array) {
          var thisCount = this._indices.length;
          indices = new Ctor(thisCount);
          for (var i = 0; i < thisCount; i++) {
            indices[i] = this._indices[i];
          }
        } else {
          indices = new Ctor(this._indices);
        }
        return indices;
      }
      return null;
    };
    DataStore2.prototype._getRawIdxIdentity = function(idx) {
      return idx;
    };
    DataStore2.prototype._getRawIdx = function(idx) {
      if (idx < this._count && idx >= 0) {
        return this._indices[idx];
      }
      return -1;
    };
    DataStore2.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    };
    DataStore2.internalField = function() {
      function getDimValueSimply(dataItem, property, dataIndex, dimIndex) {
        return parseDataValue(dataItem[dimIndex], this._dimensions[dimIndex]);
      }
      defaultDimValueGetters = {
        arrayRows: getDimValueSimply,
        objectRows: function(dataItem, property, dataIndex, dimIndex) {
          return parseDataValue(dataItem[property], this._dimensions[dimIndex]);
        },
        keyedColumns: getDimValueSimply,
        original: function(dataItem, property, dataIndex, dimIndex) {
          var value = dataItem && (dataItem.value == null ? dataItem : dataItem.value);
          return parseDataValue(value instanceof Array ? value[dimIndex] : value, this._dimensions[dimIndex]);
        },
        typedArray: function(dataItem, property, dataIndex, dimIndex) {
          return dataItem[dimIndex];
        }
      };
    }();
    return DataStore2;
  }()
);
var SourceManager = (
  /** @class */
  function() {
    function SourceManager2(sourceHost) {
      this._sourceList = [];
      this._storeList = [];
      this._upstreamSignList = [];
      this._versionSignBase = 0;
      this._dirty = true;
      this._sourceHost = sourceHost;
    }
    SourceManager2.prototype.dirty = function() {
      this._setLocalSource([], []);
      this._storeList = [];
      this._dirty = true;
    };
    SourceManager2.prototype._setLocalSource = function(sourceList, upstreamSignList) {
      this._sourceList = sourceList;
      this._upstreamSignList = upstreamSignList;
      this._versionSignBase++;
      if (this._versionSignBase > 9e10) {
        this._versionSignBase = 0;
      }
    };
    SourceManager2.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    };
    SourceManager2.prototype.prepareSource = function() {
      if (this._isDirty()) {
        this._createSource();
        this._dirty = false;
      }
    };
    SourceManager2.prototype._createSource = function() {
      this._setLocalSource([], []);
      var sourceHost = this._sourceHost;
      var upSourceMgrList = this._getUpstreamSourceManagers();
      var hasUpstream = !!upSourceMgrList.length;
      var resultSourceList;
      var upstreamSignList;
      if (isSeries(sourceHost)) {
        var seriesModel = sourceHost;
        var data = void 0;
        var sourceFormat = void 0;
        var upSource = void 0;
        if (hasUpstream) {
          var upSourceMgr = upSourceMgrList[0];
          upSourceMgr.prepareSource();
          upSource = upSourceMgr.getSource();
          data = upSource.data;
          sourceFormat = upSource.sourceFormat;
          upstreamSignList = [upSourceMgr._getVersionSign()];
        } else {
          data = seriesModel.get("data", true);
          sourceFormat = isTypedArray(data) ? SOURCE_FORMAT_TYPED_ARRAY : SOURCE_FORMAT_ORIGINAL;
          upstreamSignList = [];
        }
        var newMetaRawOption = this._getSourceMetaRawOption() || {};
        var upMetaRawOption = upSource && upSource.metaRawOption || {};
        var seriesLayoutBy = retrieve2(newMetaRawOption.seriesLayoutBy, upMetaRawOption.seriesLayoutBy) || null;
        var sourceHeader = retrieve2(newMetaRawOption.sourceHeader, upMetaRawOption.sourceHeader);
        var dimensions = retrieve2(newMetaRawOption.dimensions, upMetaRawOption.dimensions);
        var needsCreateSource = seriesLayoutBy !== upMetaRawOption.seriesLayoutBy || !!sourceHeader !== !!upMetaRawOption.sourceHeader || dimensions;
        resultSourceList = needsCreateSource ? [createSource(data, {
          seriesLayoutBy,
          sourceHeader,
          dimensions
        }, sourceFormat)] : [];
      } else {
        var datasetModel = sourceHost;
        if (hasUpstream) {
          var result = this._applyTransform(upSourceMgrList);
          resultSourceList = result.sourceList;
          upstreamSignList = result.upstreamSignList;
        } else {
          var sourceData = datasetModel.get("source", true);
          resultSourceList = [createSource(sourceData, this._getSourceMetaRawOption(), null)];
          upstreamSignList = [];
        }
      }
      this._setLocalSource(resultSourceList, upstreamSignList);
    };
    SourceManager2.prototype._applyTransform = function(upMgrList) {
      var datasetModel = this._sourceHost;
      var transformOption = datasetModel.get("transform", true);
      var fromTransformResult = datasetModel.get("fromTransformResult", true);
      if (fromTransformResult != null) {
        var errMsg = "";
        if (upMgrList.length !== 1) {
          doThrow(errMsg);
        }
      }
      var sourceList;
      var upSourceList = [];
      var upstreamSignList = [];
      each$3(upMgrList, function(upMgr) {
        upMgr.prepareSource();
        var upSource = upMgr.getSource(fromTransformResult || 0);
        var errMsg2 = "";
        if (fromTransformResult != null && !upSource) {
          doThrow(errMsg2);
        }
        upSourceList.push(upSource);
        upstreamSignList.push(upMgr._getVersionSign());
      });
      if (transformOption) {
        sourceList = applyDataTransform(transformOption, upSourceList, {
          datasetIndex: datasetModel.componentIndex
        });
      } else if (fromTransformResult != null) {
        sourceList = [cloneSourceShallow(upSourceList[0])];
      }
      return {
        sourceList,
        upstreamSignList
      };
    };
    SourceManager2.prototype._isDirty = function() {
      if (this._dirty) {
        return true;
      }
      var upSourceMgrList = this._getUpstreamSourceManagers();
      for (var i = 0; i < upSourceMgrList.length; i++) {
        var upSrcMgr = upSourceMgrList[i];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          upSrcMgr._isDirty() || this._upstreamSignList[i] !== upSrcMgr._getVersionSign()
        ) {
          return true;
        }
      }
    };
    SourceManager2.prototype.getSource = function(sourceIndex) {
      sourceIndex = sourceIndex || 0;
      var source = this._sourceList[sourceIndex];
      if (!source) {
        var upSourceMgrList = this._getUpstreamSourceManagers();
        return upSourceMgrList[0] && upSourceMgrList[0].getSource(sourceIndex);
      }
      return source;
    };
    SourceManager2.prototype.getSharedDataStore = function(seriesDimRequest) {
      var schema = seriesDimRequest.makeStoreSchema();
      return this._innerGetDataStore(schema.dimensions, seriesDimRequest.source, schema.hash);
    };
    SourceManager2.prototype._innerGetDataStore = function(storeDims, seriesSource, sourceReadKey) {
      var sourceIndex = 0;
      var storeList = this._storeList;
      var cachedStoreMap = storeList[sourceIndex];
      if (!cachedStoreMap) {
        cachedStoreMap = storeList[sourceIndex] = {};
      }
      var cachedStore = cachedStoreMap[sourceReadKey];
      if (!cachedStore) {
        var upSourceMgr = this._getUpstreamSourceManagers()[0];
        if (isSeries(this._sourceHost) && upSourceMgr) {
          cachedStore = upSourceMgr._innerGetDataStore(storeDims, seriesSource, sourceReadKey);
        } else {
          cachedStore = new DataStore();
          cachedStore.initData(new DefaultDataProvider(seriesSource, storeDims.length), storeDims);
        }
        cachedStoreMap[sourceReadKey] = cachedStore;
      }
      return cachedStore;
    };
    SourceManager2.prototype._getUpstreamSourceManagers = function() {
      var sourceHost = this._sourceHost;
      if (isSeries(sourceHost)) {
        var datasetModel = querySeriesUpstreamDatasetModel(sourceHost);
        return !datasetModel ? [] : [datasetModel.getSourceManager()];
      } else {
        return map$1(queryDatasetUpstreamDatasetModels(sourceHost), function(datasetModel2) {
          return datasetModel2.getSourceManager();
        });
      }
    };
    SourceManager2.prototype._getSourceMetaRawOption = function() {
      var sourceHost = this._sourceHost;
      var seriesLayoutBy;
      var sourceHeader;
      var dimensions;
      if (isSeries(sourceHost)) {
        seriesLayoutBy = sourceHost.get("seriesLayoutBy", true);
        sourceHeader = sourceHost.get("sourceHeader", true);
        dimensions = sourceHost.get("dimensions", true);
      } else if (!this._getUpstreamSourceManagers().length) {
        var model = sourceHost;
        seriesLayoutBy = model.get("seriesLayoutBy", true);
        sourceHeader = model.get("sourceHeader", true);
        dimensions = model.get("dimensions", true);
      }
      return {
        seriesLayoutBy,
        sourceHeader,
        dimensions
      };
    };
    return SourceManager2;
  }()
);
function isSeries(sourceHost) {
  return sourceHost.mainType === "series";
}
function doThrow(errMsg) {
  throw new Error(errMsg);
}
var TOOLTIP_LINE_HEIGHT_CSS = "line-height:1";
function getTooltipTextStyle(textStyle, renderMode) {
  var nameFontColor = textStyle.color || "#6e7079";
  var nameFontSize = textStyle.fontSize || 12;
  var nameFontWeight = textStyle.fontWeight || "400";
  var valueFontColor = textStyle.color || "#464646";
  var valueFontSize = textStyle.fontSize || 14;
  var valueFontWeight = textStyle.fontWeight || "900";
  if (renderMode === "html") {
    return {
      // eslint-disable-next-line max-len
      nameStyle: "font-size:" + encodeHTML(nameFontSize + "") + "px;color:" + encodeHTML(nameFontColor) + ";font-weight:" + encodeHTML(nameFontWeight + ""),
      // eslint-disable-next-line max-len
      valueStyle: "font-size:" + encodeHTML(valueFontSize + "") + "px;color:" + encodeHTML(valueFontColor) + ";font-weight:" + encodeHTML(valueFontWeight + "")
    };
  } else {
    return {
      nameStyle: {
        fontSize: nameFontSize,
        fill: nameFontColor,
        fontWeight: nameFontWeight
      },
      valueStyle: {
        fontSize: valueFontSize,
        fill: valueFontColor,
        fontWeight: valueFontWeight
      }
    };
  }
}
var HTML_GAPS = [0, 10, 20, 30];
var RICH_TEXT_GAPS = ["", "\n", "\n\n", "\n\n\n"];
function createTooltipMarkup(type, option) {
  option.type = type;
  return option;
}
function isSectionFragment(frag) {
  return frag.type === "section";
}
function getBuilder(frag) {
  return isSectionFragment(frag) ? buildSection : buildNameValue;
}
function getBlockGapLevel(frag) {
  if (isSectionFragment(frag)) {
    var gapLevel_1 = 0;
    var subBlockLen = frag.blocks.length;
    var hasInnerGap_1 = subBlockLen > 1 || subBlockLen > 0 && !frag.noHeader;
    each$3(frag.blocks, function(subBlock) {
      var subGapLevel = getBlockGapLevel(subBlock);
      if (subGapLevel >= gapLevel_1) {
        gapLevel_1 = subGapLevel + +(hasInnerGap_1 && // 0 always can not be readable gap level.
        (!subGapLevel || isSectionFragment(subBlock) && !subBlock.noHeader));
      }
    });
    return gapLevel_1;
  }
  return 0;
}
function buildSection(ctx, fragment, topMarginForOuterGap, toolTipTextStyle) {
  var noHeader = fragment.noHeader;
  var gaps = getGap(getBlockGapLevel(fragment));
  var subMarkupTextList = [];
  var subBlocks = fragment.blocks || [];
  assert(!subBlocks || isArray$1(subBlocks));
  subBlocks = subBlocks || [];
  var orderMode = ctx.orderMode;
  if (fragment.sortBlocks && orderMode) {
    subBlocks = subBlocks.slice();
    var orderMap = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (hasOwn$1(orderMap, orderMode)) {
      var comparator_1 = new SortOrderComparator(orderMap[orderMode], null);
      subBlocks.sort(function(a, b) {
        return comparator_1.evaluate(a.sortParam, b.sortParam);
      });
    } else if (orderMode === "seriesDesc") {
      subBlocks.reverse();
    }
  }
  each$3(subBlocks, function(subBlock, idx) {
    var valueFormatter = fragment.valueFormatter;
    var subMarkupText2 = getBuilder(subBlock)(
      // Inherit valueFormatter
      valueFormatter ? extend(extend({}, ctx), {
        valueFormatter
      }) : ctx,
      subBlock,
      idx > 0 ? gaps.html : 0,
      toolTipTextStyle
    );
    subMarkupText2 != null && subMarkupTextList.push(subMarkupText2);
  });
  var subMarkupText = ctx.renderMode === "richText" ? subMarkupTextList.join(gaps.richText) : wrapBlockHTML(subMarkupTextList.join(""), noHeader ? topMarginForOuterGap : gaps.html);
  if (noHeader) {
    return subMarkupText;
  }
  var displayableHeader = makeValueReadable(fragment.header, "ordinal", ctx.useUTC);
  var nameStyle = getTooltipTextStyle(toolTipTextStyle, ctx.renderMode).nameStyle;
  if (ctx.renderMode === "richText") {
    return wrapInlineNameRichText(ctx, displayableHeader, nameStyle) + gaps.richText + subMarkupText;
  } else {
    return wrapBlockHTML('<div style="' + nameStyle + ";" + TOOLTIP_LINE_HEIGHT_CSS + ';">' + encodeHTML(displayableHeader) + "</div>" + subMarkupText, topMarginForOuterGap);
  }
}
function buildNameValue(ctx, fragment, topMarginForOuterGap, toolTipTextStyle) {
  var renderMode = ctx.renderMode;
  var noName = fragment.noName;
  var noValue = fragment.noValue;
  var noMarker = !fragment.markerType;
  var name = fragment.name;
  var useUTC = ctx.useUTC;
  var valueFormatter = fragment.valueFormatter || ctx.valueFormatter || function(value) {
    value = isArray$1(value) ? value : [value];
    return map$1(value, function(val, idx) {
      return makeValueReadable(val, isArray$1(valueTypeOption) ? valueTypeOption[idx] : valueTypeOption, useUTC);
    });
  };
  if (noName && noValue) {
    return;
  }
  var markerStr = noMarker ? "" : ctx.markupStyleCreator.makeTooltipMarker(fragment.markerType, fragment.markerColor || "#333", renderMode);
  var readableName = noName ? "" : makeValueReadable(name, "ordinal", useUTC);
  var valueTypeOption = fragment.valueType;
  var readableValueList = noValue ? [] : valueFormatter(fragment.value, fragment.dataIndex);
  var valueAlignRight = !noMarker || !noName;
  var valueCloseToMarker = !noMarker && noName;
  var _a2 = getTooltipTextStyle(toolTipTextStyle, renderMode), nameStyle = _a2.nameStyle, valueStyle = _a2.valueStyle;
  return renderMode === "richText" ? (noMarker ? "" : markerStr) + (noName ? "" : wrapInlineNameRichText(ctx, readableName, nameStyle)) + (noValue ? "" : wrapInlineValueRichText(ctx, readableValueList, valueAlignRight, valueCloseToMarker, valueStyle)) : wrapBlockHTML((noMarker ? "" : markerStr) + (noName ? "" : wrapInlineNameHTML(readableName, !noMarker, nameStyle)) + (noValue ? "" : wrapInlineValueHTML(readableValueList, valueAlignRight, valueCloseToMarker, valueStyle)), topMarginForOuterGap);
}
function buildTooltipMarkup(fragment, markupStyleCreator, renderMode, orderMode, useUTC, toolTipTextStyle) {
  if (!fragment) {
    return;
  }
  var builder = getBuilder(fragment);
  var ctx = {
    useUTC,
    renderMode,
    orderMode,
    markupStyleCreator,
    valueFormatter: fragment.valueFormatter
  };
  return builder(ctx, fragment, 0, toolTipTextStyle);
}
function getGap(gapLevel) {
  return {
    html: HTML_GAPS[gapLevel],
    richText: RICH_TEXT_GAPS[gapLevel]
  };
}
function wrapBlockHTML(encodedContent, topGap) {
  var clearfix = '<div style="clear:both"></div>';
  var marginCSS = "margin: " + topGap + "px 0 0";
  return '<div style="' + marginCSS + ";" + TOOLTIP_LINE_HEIGHT_CSS + ';">' + encodedContent + clearfix + "</div>";
}
function wrapInlineNameHTML(name, leftHasMarker, style) {
  var marginCss = leftHasMarker ? "margin-left:2px" : "";
  return '<span style="' + style + ";" + marginCss + '">' + encodeHTML(name) + "</span>";
}
function wrapInlineValueHTML(valueList, alignRight, valueCloseToMarker, style) {
  var paddingStr = valueCloseToMarker ? "10px" : "20px";
  var alignCSS = alignRight ? "float:right;margin-left:" + paddingStr : "";
  valueList = isArray$1(valueList) ? valueList : [valueList];
  return '<span style="' + alignCSS + ";" + style + '">' + map$1(valueList, function(value) {
    return encodeHTML(value);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function wrapInlineNameRichText(ctx, name, style) {
  return ctx.markupStyleCreator.wrapRichTextStyle(name, style);
}
function wrapInlineValueRichText(ctx, values, alignRight, valueCloseToMarker, style) {
  var styles = [style];
  var paddingLeft = valueCloseToMarker ? 10 : 20;
  alignRight && styles.push({
    padding: [0, 0, 0, paddingLeft],
    align: "right"
  });
  return ctx.markupStyleCreator.wrapRichTextStyle(isArray$1(values) ? values.join("  ") : values, styles);
}
function retrieveVisualColorForTooltipMarker(series, dataIndex) {
  var style = series.getData().getItemVisual(dataIndex, "style");
  var color = style[series.visualDrawType];
  return convertToColorString(color);
}
function getPaddingFromTooltipModel(model, renderMode) {
  var padding = model.get("padding");
  return padding != null ? padding : renderMode === "richText" ? [8, 10] : 10;
}
var TooltipMarkupStyleCreator = (
  /** @class */
  function() {
    function TooltipMarkupStyleCreator2() {
      this.richTextStyles = {};
      this._nextStyleNameId = getRandomIdBase();
    }
    TooltipMarkupStyleCreator2.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    };
    TooltipMarkupStyleCreator2.prototype.makeTooltipMarker = function(markerType, colorStr, renderMode) {
      var markerId = renderMode === "richText" ? this._generateStyleName() : null;
      var marker = getTooltipMarker({
        color: colorStr,
        type: markerType,
        renderMode,
        markerId
      });
      if (isString$2(marker)) {
        return marker;
      } else {
        this.richTextStyles[markerId] = marker.style;
        return marker.content;
      }
    };
    TooltipMarkupStyleCreator2.prototype.wrapRichTextStyle = function(text, styles) {
      var finalStl = {};
      if (isArray$1(styles)) {
        each$3(styles, function(stl) {
          return extend(finalStl, stl);
        });
      } else {
        extend(finalStl, styles);
      }
      var styleName = this._generateStyleName();
      this.richTextStyles[styleName] = finalStl;
      return "{" + styleName + "|" + text + "}";
    };
    return TooltipMarkupStyleCreator2;
  }()
);
function defaultSeriesFormatTooltip(opt) {
  var series = opt.series;
  var dataIndex = opt.dataIndex;
  var multipleSeries = opt.multipleSeries;
  var data = series.getData();
  var tooltipDims = data.mapDimensionsAll("defaultedTooltip");
  var tooltipDimLen = tooltipDims.length;
  var value = series.getRawValue(dataIndex);
  var isValueArr = isArray$1(value);
  var markerColor = retrieveVisualColorForTooltipMarker(series, dataIndex);
  var inlineValue;
  var inlineValueType;
  var subBlocks;
  var sortParam;
  if (tooltipDimLen > 1 || isValueArr && !tooltipDimLen) {
    var formatArrResult = formatTooltipArrayValue(value, series, dataIndex, tooltipDims, markerColor);
    inlineValue = formatArrResult.inlineValues;
    inlineValueType = formatArrResult.inlineValueTypes;
    subBlocks = formatArrResult.blocks;
    sortParam = formatArrResult.inlineValues[0];
  } else if (tooltipDimLen) {
    var dimInfo = data.getDimensionInfo(tooltipDims[0]);
    sortParam = inlineValue = retrieveRawValue(data, dataIndex, tooltipDims[0]);
    inlineValueType = dimInfo.type;
  } else {
    sortParam = inlineValue = isValueArr ? value[0] : value;
  }
  var seriesNameSpecified = isNameSpecified(series);
  var seriesName = seriesNameSpecified && series.name || "";
  var itemName = data.getName(dataIndex);
  var inlineName = multipleSeries ? seriesName : itemName;
  return createTooltipMarkup("section", {
    header: seriesName,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: multipleSeries || !seriesNameSpecified,
    sortParam,
    blocks: [createTooltipMarkup("nameValue", {
      markerType: "item",
      markerColor,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: inlineName,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !trim(inlineName),
      value: inlineValue,
      valueType: inlineValueType,
      dataIndex
    })].concat(subBlocks || [])
  });
}
function formatTooltipArrayValue(value, series, dataIndex, tooltipDims, colorStr) {
  var data = series.getData();
  var isValueMultipleLine = reduce(value, function(isValueMultipleLine2, val, idx) {
    var dimItem = data.getDimensionInfo(idx);
    return isValueMultipleLine2 = isValueMultipleLine2 || dimItem && dimItem.tooltip !== false && dimItem.displayName != null;
  }, false);
  var inlineValues = [];
  var inlineValueTypes = [];
  var blocks = [];
  tooltipDims.length ? each$3(tooltipDims, function(dim) {
    setEachItem(retrieveRawValue(data, dataIndex, dim), dim);
  }) : each$3(value, setEachItem);
  function setEachItem(val, dim) {
    var dimInfo = data.getDimensionInfo(dim);
    if (!dimInfo || dimInfo.otherDims.tooltip === false) {
      return;
    }
    if (isValueMultipleLine) {
      blocks.push(createTooltipMarkup("nameValue", {
        markerType: "subItem",
        markerColor: colorStr,
        name: dimInfo.displayName,
        value: val,
        valueType: dimInfo.type
      }));
    } else {
      inlineValues.push(val);
      inlineValueTypes.push(dimInfo.type);
    }
  }
  return {
    inlineValues,
    inlineValueTypes,
    blocks
  };
}
var inner$8 = makeInner();
function getSelectionKey(data, dataIndex) {
  return data.getName(dataIndex) || data.getId(dataIndex);
}
var SERIES_UNIVERSAL_TRANSITION_PROP = "__universalTransitionEnabled";
var SeriesModel = (
  /** @class */
  function(_super) {
    __extends(SeriesModel2, _super);
    function SeriesModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._selectedDataIndicesMap = {};
      return _this;
    }
    SeriesModel2.prototype.init = function(option, parentModel, ecModel) {
      this.seriesIndex = this.componentIndex;
      this.dataTask = createTask({
        count: dataTaskCount,
        reset: dataTaskReset
      });
      this.dataTask.context = {
        model: this
      };
      this.mergeDefaultAndTheme(option, ecModel);
      var sourceManager = inner$8(this).sourceManager = new SourceManager(this);
      sourceManager.prepareSource();
      var data = this.getInitialData(option, ecModel);
      wrapData(data, this);
      this.dataTask.context.data = data;
      inner$8(this).dataBeforeProcessed = data;
      autoSeriesName(this);
      this._initSelectedMapFromData(data);
    };
    SeriesModel2.prototype.mergeDefaultAndTheme = function(option, ecModel) {
      var layoutMode = fetchLayoutMode(this);
      var inputPositionParams = layoutMode ? getLayoutParams(option) : {};
      var themeSubType = this.subType;
      if (ComponentModel.hasClass(themeSubType)) {
        themeSubType += "Series";
      }
      zrUtil.merge(option, ecModel.getTheme().get(this.subType));
      zrUtil.merge(option, this.getDefaultOption());
      defaultEmphasis(option, "label", ["show"]);
      this.fillDataTextStyle(option.data);
      if (layoutMode) {
        mergeLayoutParam(option, inputPositionParams, layoutMode);
      }
    };
    SeriesModel2.prototype.mergeOption = function(newSeriesOption, ecModel) {
      newSeriesOption = zrUtil.merge(this.option, newSeriesOption, true);
      this.fillDataTextStyle(newSeriesOption.data);
      var layoutMode = fetchLayoutMode(this);
      if (layoutMode) {
        mergeLayoutParam(this.option, newSeriesOption, layoutMode);
      }
      var sourceManager = inner$8(this).sourceManager;
      sourceManager.dirty();
      sourceManager.prepareSource();
      var data = this.getInitialData(newSeriesOption, ecModel);
      wrapData(data, this);
      this.dataTask.dirty();
      this.dataTask.context.data = data;
      inner$8(this).dataBeforeProcessed = data;
      autoSeriesName(this);
      this._initSelectedMapFromData(data);
    };
    SeriesModel2.prototype.fillDataTextStyle = function(data) {
      if (data && !zrUtil.isTypedArray(data)) {
        var props = ["show"];
        for (var i = 0; i < data.length; i++) {
          if (data[i] && data[i].label) {
            defaultEmphasis(data[i], "label", props);
          }
        }
      }
    };
    SeriesModel2.prototype.getInitialData = function(option, ecModel) {
      return;
    };
    SeriesModel2.prototype.appendData = function(params) {
      var data = this.getRawData();
      data.appendData(params.data);
    };
    SeriesModel2.prototype.getData = function(dataType) {
      var task = getCurrentTask(this);
      if (task) {
        var data = task.context.data;
        return dataType == null || !data.getLinkedData ? data : data.getLinkedData(dataType);
      } else {
        return inner$8(this).data;
      }
    };
    SeriesModel2.prototype.getAllData = function() {
      var mainData = this.getData();
      return mainData && mainData.getLinkedDataAll ? mainData.getLinkedDataAll() : [{
        data: mainData
      }];
    };
    SeriesModel2.prototype.setData = function(data) {
      var task = getCurrentTask(this);
      if (task) {
        var context = task.context;
        context.outputData = data;
        if (task !== this.dataTask) {
          context.data = data;
        }
      }
      inner$8(this).data = data;
    };
    SeriesModel2.prototype.getEncode = function() {
      var encode = this.get("encode", true);
      if (encode) {
        return zrUtil.createHashMap(encode);
      }
    };
    SeriesModel2.prototype.getSourceManager = function() {
      return inner$8(this).sourceManager;
    };
    SeriesModel2.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    };
    SeriesModel2.prototype.getRawData = function() {
      return inner$8(this).dataBeforeProcessed;
    };
    SeriesModel2.prototype.getColorBy = function() {
      var colorBy = this.get("colorBy");
      return colorBy || "series";
    };
    SeriesModel2.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    };
    SeriesModel2.prototype.getBaseAxis = function() {
      var coordSys = this.coordinateSystem;
      return coordSys && coordSys.getBaseAxis && coordSys.getBaseAxis();
    };
    SeriesModel2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
      return defaultSeriesFormatTooltip({
        series: this,
        dataIndex,
        multipleSeries
      });
    };
    SeriesModel2.prototype.isAnimationEnabled = function() {
      var ecModel = this.ecModel;
      if (env.node && !(ecModel && ecModel.ssr)) {
        return false;
      }
      var animationEnabled = this.getShallow("animation");
      if (animationEnabled) {
        if (this.getData().count() > this.getShallow("animationThreshold")) {
          animationEnabled = false;
        }
      }
      return !!animationEnabled;
    };
    SeriesModel2.prototype.restoreData = function() {
      this.dataTask.dirty();
    };
    SeriesModel2.prototype.getColorFromPalette = function(name, scope, requestColorNum) {
      var ecModel = this.ecModel;
      var color = PaletteMixin.prototype.getColorFromPalette.call(this, name, scope, requestColorNum);
      if (!color) {
        color = ecModel.getColorFromPalette(name, scope, requestColorNum);
      }
      return color;
    };
    SeriesModel2.prototype.coordDimToDataDim = function(coordDim) {
      return this.getRawData().mapDimensionsAll(coordDim);
    };
    SeriesModel2.prototype.getProgressive = function() {
      return this.get("progressive");
    };
    SeriesModel2.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    };
    SeriesModel2.prototype.select = function(innerDataIndices, dataType) {
      this._innerSelect(this.getData(dataType), innerDataIndices);
    };
    SeriesModel2.prototype.unselect = function(innerDataIndices, dataType) {
      var selectedMap = this.option.selectedMap;
      if (!selectedMap) {
        return;
      }
      var selectedMode = this.option.selectedMode;
      var data = this.getData(dataType);
      if (selectedMode === "series" || selectedMap === "all") {
        this.option.selectedMap = {};
        this._selectedDataIndicesMap = {};
        return;
      }
      for (var i = 0; i < innerDataIndices.length; i++) {
        var dataIndex = innerDataIndices[i];
        var nameOrId = getSelectionKey(data, dataIndex);
        selectedMap[nameOrId] = false;
        this._selectedDataIndicesMap[nameOrId] = -1;
      }
    };
    SeriesModel2.prototype.toggleSelect = function(innerDataIndices, dataType) {
      var tmpArr = [];
      for (var i = 0; i < innerDataIndices.length; i++) {
        tmpArr[0] = innerDataIndices[i];
        this.isSelected(innerDataIndices[i], dataType) ? this.unselect(tmpArr, dataType) : this.select(tmpArr, dataType);
      }
    };
    SeriesModel2.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all") {
        return [].slice.call(this.getData().getIndices());
      }
      var selectedDataIndicesMap = this._selectedDataIndicesMap;
      var nameOrIds = zrUtil.keys(selectedDataIndicesMap);
      var dataIndices = [];
      for (var i = 0; i < nameOrIds.length; i++) {
        var dataIndex = selectedDataIndicesMap[nameOrIds[i]];
        if (dataIndex >= 0) {
          dataIndices.push(dataIndex);
        }
      }
      return dataIndices;
    };
    SeriesModel2.prototype.isSelected = function(dataIndex, dataType) {
      var selectedMap = this.option.selectedMap;
      if (!selectedMap) {
        return false;
      }
      var data = this.getData(dataType);
      return (selectedMap === "all" || selectedMap[getSelectionKey(data, dataIndex)]) && !data.getItemModel(dataIndex).get(["select", "disabled"]);
    };
    SeriesModel2.prototype.isUniversalTransitionEnabled = function() {
      if (this[SERIES_UNIVERSAL_TRANSITION_PROP]) {
        return true;
      }
      var universalTransitionOpt = this.option.universalTransition;
      if (!universalTransitionOpt) {
        return false;
      }
      if (universalTransitionOpt === true) {
        return true;
      }
      return universalTransitionOpt && universalTransitionOpt.enabled;
    };
    SeriesModel2.prototype._innerSelect = function(data, innerDataIndices) {
      var _a2, _b2;
      var option = this.option;
      var selectedMode = option.selectedMode;
      var len = innerDataIndices.length;
      if (!selectedMode || !len) {
        return;
      }
      if (selectedMode === "series") {
        option.selectedMap = "all";
      } else if (selectedMode === "multiple") {
        if (!zrUtil.isObject(option.selectedMap)) {
          option.selectedMap = {};
        }
        var selectedMap = option.selectedMap;
        for (var i = 0; i < len; i++) {
          var dataIndex = innerDataIndices[i];
          var nameOrId = getSelectionKey(data, dataIndex);
          selectedMap[nameOrId] = true;
          this._selectedDataIndicesMap[nameOrId] = data.getRawIndex(dataIndex);
        }
      } else if (selectedMode === "single" || selectedMode === true) {
        var lastDataIndex = innerDataIndices[len - 1];
        var nameOrId = getSelectionKey(data, lastDataIndex);
        option.selectedMap = (_a2 = {}, _a2[nameOrId] = true, _a2);
        this._selectedDataIndicesMap = (_b2 = {}, _b2[nameOrId] = data.getRawIndex(lastDataIndex), _b2);
      }
    };
    SeriesModel2.prototype._initSelectedMapFromData = function(data) {
      if (this.option.selectedMap) {
        return;
      }
      var dataIndices = [];
      if (data.hasItemOption) {
        data.each(function(idx) {
          var rawItem = data.getRawDataItem(idx);
          if (rawItem && rawItem.selected) {
            dataIndices.push(idx);
          }
        });
      }
      if (dataIndices.length > 0) {
        this._innerSelect(data, dataIndices);
      }
    };
    SeriesModel2.registerClass = function(clz) {
      return ComponentModel.registerClass(clz);
    };
    SeriesModel2.protoInitialize = function() {
      var proto2 = SeriesModel2.prototype;
      proto2.type = "series.__base__";
      proto2.seriesIndex = 0;
      proto2.ignoreStyleOnData = false;
      proto2.hasSymbolVisual = false;
      proto2.defaultSymbol = "circle";
      proto2.visualStyleAccessPath = "itemStyle";
      proto2.visualDrawType = "fill";
    }();
    return SeriesModel2;
  }(ComponentModel)
);
zrUtil.mixin(SeriesModel, DataFormatMixin);
zrUtil.mixin(SeriesModel, PaletteMixin);
mountExtend(SeriesModel, ComponentModel);
function autoSeriesName(seriesModel) {
  var name = seriesModel.name;
  if (!isNameSpecified(seriesModel)) {
    seriesModel.name = getSeriesAutoName(seriesModel) || name;
  }
}
function getSeriesAutoName(seriesModel) {
  var data = seriesModel.getRawData();
  var dataDims = data.mapDimensionsAll("seriesName");
  var nameArr = [];
  zrUtil.each(dataDims, function(dataDim) {
    var dimInfo = data.getDimensionInfo(dataDim);
    dimInfo.displayName && nameArr.push(dimInfo.displayName);
  });
  return nameArr.join(" ");
}
function dataTaskCount(context) {
  return context.model.getRawData().count();
}
function dataTaskReset(context) {
  var seriesModel = context.model;
  seriesModel.setData(seriesModel.getRawData().cloneShallow());
  return dataTaskProgress;
}
function dataTaskProgress(param, context) {
  if (context.outputData && param.end > context.outputData.count()) {
    context.model.getRawData().cloneShallow(context.outputData);
  }
}
function wrapData(data, seriesModel) {
  zrUtil.each(zrUtil.concatArray(data.CHANGABLE_METHODS, data.DOWNSAMPLE_METHODS), function(methodName) {
    data.wrapMethod(methodName, zrUtil.curry(onDataChange, seriesModel));
  });
}
function onDataChange(seriesModel, newList) {
  var task = getCurrentTask(seriesModel);
  if (task) {
    task.setOutputEnd((newList || this).count());
  }
  return newList;
}
function getCurrentTask(seriesModel) {
  var scheduler = (seriesModel.ecModel || {}).scheduler;
  var pipeline = scheduler && scheduler.getPipeline(seriesModel.uid);
  if (pipeline) {
    var task = pipeline.currentTask;
    if (task) {
      var agentStubMap = task.agentStubMap;
      if (agentStubMap) {
        task = agentStubMap.get(seriesModel.uid);
      }
    }
    return task;
  }
}
var ComponentView = (
  /** @class */
  function() {
    function ComponentView2() {
      this.group = new Group();
      this.uid = getUID("viewComponent");
    }
    ComponentView2.prototype.init = function(ecModel, api) {
    };
    ComponentView2.prototype.render = function(model, ecModel, api, payload) {
    };
    ComponentView2.prototype.dispose = function(ecModel, api) {
    };
    ComponentView2.prototype.updateView = function(model, ecModel, api, payload) {
    };
    ComponentView2.prototype.updateLayout = function(model, ecModel, api, payload) {
    };
    ComponentView2.prototype.updateVisual = function(model, ecModel, api, payload) {
    };
    ComponentView2.prototype.toggleBlurSeries = function(seriesModels, isBlur, ecModel) {
    };
    ComponentView2.prototype.eachRendered = function(cb) {
      var group = this.group;
      if (group) {
        group.traverse(cb);
      }
    };
    return ComponentView2;
  }()
);
enableClassExtend(ComponentView);
enableClassManagement(ComponentView);
function createRenderPlanner() {
  var inner2 = makeInner();
  return function(seriesModel) {
    var fields = inner2(seriesModel);
    var pipelineContext = seriesModel.pipelineContext;
    var originalLarge = !!fields.large;
    var originalProgressive = !!fields.progressiveRender;
    var large = fields.large = !!(pipelineContext && pipelineContext.large);
    var progressive = fields.progressiveRender = !!(pipelineContext && pipelineContext.progressiveRender);
    return !!(originalLarge !== large || originalProgressive !== progressive) && "reset";
  };
}
var inner$7 = makeInner();
var renderPlanner = createRenderPlanner();
var ChartView = (
  /** @class */
  function() {
    function ChartView2() {
      this.group = new Group();
      this.uid = getUID("viewChart");
      this.renderTask = createTask({
        plan: renderTaskPlan,
        reset: renderTaskReset
      });
      this.renderTask.context = {
        view: this
      };
    }
    ChartView2.prototype.init = function(ecModel, api) {
    };
    ChartView2.prototype.render = function(seriesModel, ecModel, api, payload) {
    };
    ChartView2.prototype.highlight = function(seriesModel, ecModel, api, payload) {
      var data = seriesModel.getData(payload && payload.dataType);
      if (!data) {
        return;
      }
      toggleHighlight(data, payload, "emphasis");
    };
    ChartView2.prototype.downplay = function(seriesModel, ecModel, api, payload) {
      var data = seriesModel.getData(payload && payload.dataType);
      if (!data) {
        return;
      }
      toggleHighlight(data, payload, "normal");
    };
    ChartView2.prototype.remove = function(ecModel, api) {
      this.group.removeAll();
    };
    ChartView2.prototype.dispose = function(ecModel, api) {
    };
    ChartView2.prototype.updateView = function(seriesModel, ecModel, api, payload) {
      this.render(seriesModel, ecModel, api, payload);
    };
    ChartView2.prototype.updateLayout = function(seriesModel, ecModel, api, payload) {
      this.render(seriesModel, ecModel, api, payload);
    };
    ChartView2.prototype.updateVisual = function(seriesModel, ecModel, api, payload) {
      this.render(seriesModel, ecModel, api, payload);
    };
    ChartView2.prototype.eachRendered = function(cb) {
      traverseElements(this.group, cb);
    };
    ChartView2.markUpdateMethod = function(payload, methodName) {
      inner$7(payload).updateMethod = methodName;
    };
    ChartView2.protoInitialize = function() {
      var proto2 = ChartView2.prototype;
      proto2.type = "chart";
    }();
    return ChartView2;
  }()
);
function elSetState(el, state, highlightDigit) {
  if (el && isHighDownDispatcher(el)) {
    (state === "emphasis" ? enterEmphasis : leaveEmphasis)(el, highlightDigit);
  }
}
function toggleHighlight(data, payload, state) {
  var dataIndex = queryDataIndex(data, payload);
  var highlightDigit = payload && payload.highlightKey != null ? getHighlightDigit(payload.highlightKey) : null;
  if (dataIndex != null) {
    each$3(normalizeToArray(dataIndex), function(dataIdx) {
      elSetState(data.getItemGraphicEl(dataIdx), state, highlightDigit);
    });
  } else {
    data.eachItemGraphicEl(function(el) {
      elSetState(el, state, highlightDigit);
    });
  }
}
enableClassExtend(ChartView);
enableClassManagement(ChartView);
function renderTaskPlan(context) {
  return renderPlanner(context.model);
}
function renderTaskReset(context) {
  var seriesModel = context.model;
  var ecModel = context.ecModel;
  var api = context.api;
  var payload = context.payload;
  var progressiveRender = seriesModel.pipelineContext.progressiveRender;
  var view = context.view;
  var updateMethod = payload && inner$7(payload).updateMethod;
  var methodName = progressiveRender ? "incrementalPrepareRender" : updateMethod && view[updateMethod] ? updateMethod : "render";
  if (methodName !== "render") {
    view[methodName](seriesModel, ecModel, api, payload);
  }
  return progressMethodMap[methodName];
}
var progressMethodMap = {
  incrementalPrepareRender: {
    progress: function(params, context) {
      context.view.incrementalRender(params, context.model, context.ecModel, context.api, context.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: true,
    progress: function(params, context) {
      context.view.render(context.model, context.ecModel, context.api, context.payload);
    }
  }
};
var ORIGIN_METHOD = "\0__throttleOriginMethod";
var RATE = "\0__throttleRate";
var THROTTLE_TYPE = "\0__throttleType";
function throttle(fn, delay, debounce) {
  var currCall;
  var lastCall = 0;
  var lastExec = 0;
  var timer = null;
  var diff;
  var scope;
  var args;
  var debounceNextCall;
  delay = delay || 0;
  function exec() {
    lastExec = (/* @__PURE__ */ new Date()).getTime();
    timer = null;
    fn.apply(scope, args || []);
  }
  var cb = function() {
    var cbArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      cbArgs[_i] = arguments[_i];
    }
    currCall = (/* @__PURE__ */ new Date()).getTime();
    scope = this;
    args = cbArgs;
    var thisDelay = debounceNextCall || delay;
    var thisDebounce = debounceNextCall || debounce;
    debounceNextCall = null;
    diff = currCall - (thisDebounce ? lastCall : lastExec) - thisDelay;
    clearTimeout(timer);
    if (thisDebounce) {
      timer = setTimeout(exec, thisDelay);
    } else {
      if (diff >= 0) {
        exec();
      } else {
        timer = setTimeout(exec, -diff);
      }
    }
    lastCall = currCall;
  };
  cb.clear = function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  cb.debounceNextCall = function(debounceDelay) {
    debounceNextCall = debounceDelay;
  };
  return cb;
}
function createOrUpdate(obj, fnAttr, rate, throttleType) {
  var fn = obj[fnAttr];
  if (!fn) {
    return;
  }
  var originFn = fn[ORIGIN_METHOD] || fn;
  var lastThrottleType = fn[THROTTLE_TYPE];
  var lastRate = fn[RATE];
  if (lastRate !== rate || lastThrottleType !== throttleType) {
    if (rate == null || !throttleType) {
      return obj[fnAttr] = originFn;
    }
    fn = obj[fnAttr] = throttle(originFn, rate, throttleType === "debounce");
    fn[ORIGIN_METHOD] = originFn;
    fn[THROTTLE_TYPE] = throttleType;
    fn[RATE] = rate;
  }
  return fn;
}
function clear(obj, fnAttr) {
  var fn = obj[fnAttr];
  if (fn && fn[ORIGIN_METHOD]) {
    fn.clear && fn.clear();
    obj[fnAttr] = fn[ORIGIN_METHOD];
  }
}
var inner$6 = makeInner();
var defaultStyleMappers = {
  itemStyle: makeStyleMapper(ITEM_STYLE_KEY_MAP, true),
  lineStyle: makeStyleMapper(LINE_STYLE_KEY_MAP, true)
};
var defaultColorKey = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function getStyleMapper(seriesModel, stylePath) {
  var styleMapper = seriesModel.visualStyleMapper || defaultStyleMappers[stylePath];
  if (!styleMapper) {
    console.warn("Unknown style type '" + stylePath + "'.");
    return defaultStyleMappers.itemStyle;
  }
  return styleMapper;
}
function getDefaultColorKey(seriesModel, stylePath) {
  var colorKey = seriesModel.visualDrawType || defaultColorKey[stylePath];
  if (!colorKey) {
    console.warn("Unknown style type '" + stylePath + "'.");
    return "fill";
  }
  return colorKey;
}
var seriesStyleTask = {
  createOnAllSeries: true,
  performRawSeries: true,
  reset: function(seriesModel, ecModel) {
    var data = seriesModel.getData();
    var stylePath = seriesModel.visualStyleAccessPath || "itemStyle";
    var styleModel = seriesModel.getModel(stylePath);
    var getStyle2 = getStyleMapper(seriesModel, stylePath);
    var globalStyle = getStyle2(styleModel);
    var decalOption = styleModel.getShallow("decal");
    if (decalOption) {
      data.setVisual("decal", decalOption);
      decalOption.dirty = true;
    }
    var colorKey = getDefaultColorKey(seriesModel, stylePath);
    var color = globalStyle[colorKey];
    var colorCallback = isFunction$1(color) ? color : null;
    var hasAutoColor = globalStyle.fill === "auto" || globalStyle.stroke === "auto";
    if (!globalStyle[colorKey] || colorCallback || hasAutoColor) {
      var colorPalette2 = seriesModel.getColorFromPalette(
        // TODO series count changed.
        seriesModel.name,
        null,
        ecModel.getSeriesCount()
      );
      if (!globalStyle[colorKey]) {
        globalStyle[colorKey] = colorPalette2;
        data.setVisual("colorFromPalette", true);
      }
      globalStyle.fill = globalStyle.fill === "auto" || isFunction$1(globalStyle.fill) ? colorPalette2 : globalStyle.fill;
      globalStyle.stroke = globalStyle.stroke === "auto" || isFunction$1(globalStyle.stroke) ? colorPalette2 : globalStyle.stroke;
    }
    data.setVisual("style", globalStyle);
    data.setVisual("drawType", colorKey);
    if (!ecModel.isSeriesFiltered(seriesModel) && colorCallback) {
      data.setVisual("colorFromPalette", false);
      return {
        dataEach: function(data2, idx) {
          var dataParams = seriesModel.getDataParams(idx);
          var itemStyle = extend({}, globalStyle);
          itemStyle[colorKey] = colorCallback(dataParams);
          data2.setItemVisual(idx, "style", itemStyle);
        }
      };
    }
  }
};
var sharedModel = new Model();
var dataStyleTask = {
  createOnAllSeries: true,
  performRawSeries: true,
  reset: function(seriesModel, ecModel) {
    if (seriesModel.ignoreStyleOnData || ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var data = seriesModel.getData();
    var stylePath = seriesModel.visualStyleAccessPath || "itemStyle";
    var getStyle2 = getStyleMapper(seriesModel, stylePath);
    var colorKey = data.getVisual("drawType");
    return {
      dataEach: data.hasItemOption ? function(data2, idx) {
        var rawItem = data2.getRawDataItem(idx);
        if (rawItem && rawItem[stylePath]) {
          sharedModel.option = rawItem[stylePath];
          var style = getStyle2(sharedModel);
          var existsStyle = data2.ensureUniqueItemVisual(idx, "style");
          extend(existsStyle, style);
          if (sharedModel.option.decal) {
            data2.setItemVisual(idx, "decal", sharedModel.option.decal);
            sharedModel.option.decal.dirty = true;
          }
          if (colorKey in style) {
            data2.setItemVisual(idx, "colorFromPalette", false);
          }
        }
      } : null
    };
  }
};
var dataColorPaletteTask = {
  performRawSeries: true,
  overallReset: function(ecModel) {
    var paletteScopeGroupByType = createHashMap();
    ecModel.eachSeries(function(seriesModel) {
      var colorBy = seriesModel.getColorBy();
      if (seriesModel.isColorBySeries()) {
        return;
      }
      var key = seriesModel.type + "-" + colorBy;
      var colorScope = paletteScopeGroupByType.get(key);
      if (!colorScope) {
        colorScope = {};
        paletteScopeGroupByType.set(key, colorScope);
      }
      inner$6(seriesModel).scope = colorScope;
    });
    ecModel.eachSeries(function(seriesModel) {
      if (seriesModel.isColorBySeries() || ecModel.isSeriesFiltered(seriesModel)) {
        return;
      }
      var dataAll = seriesModel.getRawData();
      var idxMap = {};
      var data = seriesModel.getData();
      var colorScope = inner$6(seriesModel).scope;
      var stylePath = seriesModel.visualStyleAccessPath || "itemStyle";
      var colorKey = getDefaultColorKey(seriesModel, stylePath);
      data.each(function(idx) {
        var rawIdx = data.getRawIndex(idx);
        idxMap[rawIdx] = idx;
      });
      dataAll.each(function(rawIdx) {
        var idx = idxMap[rawIdx];
        var fromPalette = data.getItemVisual(idx, "colorFromPalette");
        if (fromPalette) {
          var itemStyle = data.ensureUniqueItemVisual(idx, "style");
          var name_1 = dataAll.getName(rawIdx) || rawIdx + "";
          var dataCount = dataAll.count();
          itemStyle[colorKey] = seriesModel.getColorFromPalette(name_1, colorScope, dataCount);
        }
      });
    });
  }
};
var PI$1 = Math.PI;
function defaultLoading(api, opts) {
  opts = opts || {};
  zrUtil.defaults(opts, {
    text: "loading",
    textColor: "#000",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255, 255, 255, 0.8)",
    showSpinner: true,
    color: "#5470c6",
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var group = new Group();
  var mask = new Rect({
    style: {
      fill: opts.maskColor
    },
    zlevel: opts.zlevel,
    z: 1e4
  });
  group.add(mask);
  var textContent = new ZRText({
    style: {
      text: opts.text,
      fill: opts.textColor,
      fontSize: opts.fontSize,
      fontWeight: opts.fontWeight,
      fontStyle: opts.fontStyle,
      fontFamily: opts.fontFamily
    },
    zlevel: opts.zlevel,
    z: 10001
  });
  var labelRect = new Rect({
    style: {
      fill: "none"
    },
    textContent,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: opts.zlevel,
    z: 10001
  });
  group.add(labelRect);
  var arc;
  if (opts.showSpinner) {
    arc = new Arc({
      shape: {
        startAngle: -PI$1 / 2,
        endAngle: -PI$1 / 2 + 0.1,
        r: opts.spinnerRadius
      },
      style: {
        stroke: opts.color,
        lineCap: "round",
        lineWidth: opts.lineWidth
      },
      zlevel: opts.zlevel,
      z: 10001
    });
    arc.animateShape(true).when(1e3, {
      endAngle: PI$1 * 3 / 2
    }).start("circularInOut");
    arc.animateShape(true).when(1e3, {
      startAngle: PI$1 * 3 / 2
    }).delay(300).start("circularInOut");
    group.add(arc);
  }
  group.resize = function() {
    var textWidth = textContent.getBoundingRect().width;
    var r = opts.showSpinner ? opts.spinnerRadius : 0;
    var cx = (api.getWidth() - r * 2 - (opts.showSpinner && textWidth ? 10 : 0) - textWidth) / 2 - (opts.showSpinner && textWidth ? 0 : 5 + textWidth / 2) + (opts.showSpinner ? 0 : textWidth / 2) + (textWidth ? 0 : r);
    var cy = api.getHeight() / 2;
    opts.showSpinner && arc.setShape({
      cx,
      cy
    });
    labelRect.setShape({
      x: cx - r,
      y: cy - r,
      width: r * 2,
      height: r * 2
    });
    mask.setShape({
      x: 0,
      y: 0,
      width: api.getWidth(),
      height: api.getHeight()
    });
  };
  group.resize();
  return group;
}
var Scheduler = (
  /** @class */
  function() {
    function Scheduler2(ecInstance, api, dataProcessorHandlers, visualHandlers) {
      this._stageTaskMap = createHashMap();
      this.ecInstance = ecInstance;
      this.api = api;
      dataProcessorHandlers = this._dataProcessorHandlers = dataProcessorHandlers.slice();
      visualHandlers = this._visualHandlers = visualHandlers.slice();
      this._allHandlers = dataProcessorHandlers.concat(visualHandlers);
    }
    Scheduler2.prototype.restoreData = function(ecModel, payload) {
      ecModel.restoreData(payload);
      this._stageTaskMap.each(function(taskRecord) {
        var overallTask = taskRecord.overallTask;
        overallTask && overallTask.dirty();
      });
    };
    Scheduler2.prototype.getPerformArgs = function(task, isBlock) {
      if (!task.__pipeline) {
        return;
      }
      var pipeline = this._pipelineMap.get(task.__pipeline.id);
      var pCtx = pipeline.context;
      var incremental = !isBlock && pipeline.progressiveEnabled && (!pCtx || pCtx.progressiveRender) && task.__idxInPipeline > pipeline.blockIndex;
      var step = incremental ? pipeline.step : null;
      var modDataCount = pCtx && pCtx.modDataCount;
      var modBy = modDataCount != null ? Math.ceil(modDataCount / step) : null;
      return {
        step,
        modBy,
        modDataCount
      };
    };
    Scheduler2.prototype.getPipeline = function(pipelineId) {
      return this._pipelineMap.get(pipelineId);
    };
    Scheduler2.prototype.updateStreamModes = function(seriesModel, view) {
      var pipeline = this._pipelineMap.get(seriesModel.uid);
      var data = seriesModel.getData();
      var dataLen = data.count();
      var progressiveRender = pipeline.progressiveEnabled && view.incrementalPrepareRender && dataLen >= pipeline.threshold;
      var large = seriesModel.get("large") && dataLen >= seriesModel.get("largeThreshold");
      var modDataCount = seriesModel.get("progressiveChunkMode") === "mod" ? dataLen : null;
      seriesModel.pipelineContext = pipeline.context = {
        progressiveRender,
        modDataCount,
        large
      };
    };
    Scheduler2.prototype.restorePipelines = function(ecModel) {
      var scheduler = this;
      var pipelineMap = scheduler._pipelineMap = createHashMap();
      ecModel.eachSeries(function(seriesModel) {
        var progressive = seriesModel.getProgressive();
        var pipelineId = seriesModel.uid;
        pipelineMap.set(pipelineId, {
          id: pipelineId,
          head: null,
          tail: null,
          threshold: seriesModel.getProgressiveThreshold(),
          progressiveEnabled: progressive && !(seriesModel.preventIncremental && seriesModel.preventIncremental()),
          blockIndex: -1,
          step: Math.round(progressive || 700),
          count: 0
        });
        scheduler._pipe(seriesModel, seriesModel.dataTask);
      });
    };
    Scheduler2.prototype.prepareStageTasks = function() {
      var stageTaskMap = this._stageTaskMap;
      var ecModel = this.api.getModel();
      var api = this.api;
      each$3(this._allHandlers, function(handler) {
        var record = stageTaskMap.get(handler.uid) || stageTaskMap.set(handler.uid, {});
        var errMsg = "";
        assert(!(handler.reset && handler.overallReset), errMsg);
        handler.reset && this._createSeriesStageTask(handler, record, ecModel, api);
        handler.overallReset && this._createOverallStageTask(handler, record, ecModel, api);
      }, this);
    };
    Scheduler2.prototype.prepareView = function(view, model, ecModel, api) {
      var renderTask = view.renderTask;
      var context = renderTask.context;
      context.model = model;
      context.ecModel = ecModel;
      context.api = api;
      renderTask.__block = !view.incrementalPrepareRender;
      this._pipe(model, renderTask);
    };
    Scheduler2.prototype.performDataProcessorTasks = function(ecModel, payload) {
      this._performStageTasks(this._dataProcessorHandlers, ecModel, payload, {
        block: true
      });
    };
    Scheduler2.prototype.performVisualTasks = function(ecModel, payload, opt) {
      this._performStageTasks(this._visualHandlers, ecModel, payload, opt);
    };
    Scheduler2.prototype._performStageTasks = function(stageHandlers, ecModel, payload, opt) {
      opt = opt || {};
      var unfinished = false;
      var scheduler = this;
      each$3(stageHandlers, function(stageHandler, idx) {
        if (opt.visualType && opt.visualType !== stageHandler.visualType) {
          return;
        }
        var stageHandlerRecord = scheduler._stageTaskMap.get(stageHandler.uid);
        var seriesTaskMap = stageHandlerRecord.seriesTaskMap;
        var overallTask = stageHandlerRecord.overallTask;
        if (overallTask) {
          var overallNeedDirty_1;
          var agentStubMap = overallTask.agentStubMap;
          agentStubMap.each(function(stub) {
            if (needSetDirty(opt, stub)) {
              stub.dirty();
              overallNeedDirty_1 = true;
            }
          });
          overallNeedDirty_1 && overallTask.dirty();
          scheduler.updatePayload(overallTask, payload);
          var performArgs_1 = scheduler.getPerformArgs(overallTask, opt.block);
          agentStubMap.each(function(stub) {
            stub.perform(performArgs_1);
          });
          if (overallTask.perform(performArgs_1)) {
            unfinished = true;
          }
        } else if (seriesTaskMap) {
          seriesTaskMap.each(function(task, pipelineId) {
            if (needSetDirty(opt, task)) {
              task.dirty();
            }
            var performArgs = scheduler.getPerformArgs(task, opt.block);
            performArgs.skip = !stageHandler.performRawSeries && ecModel.isSeriesFiltered(task.context.model);
            scheduler.updatePayload(task, payload);
            if (task.perform(performArgs)) {
              unfinished = true;
            }
          });
        }
      });
      function needSetDirty(opt2, task) {
        return opt2.setDirty && (!opt2.dirtyMap || opt2.dirtyMap.get(task.__pipeline.id));
      }
      this.unfinished = unfinished || this.unfinished;
    };
    Scheduler2.prototype.performSeriesTasks = function(ecModel) {
      var unfinished;
      ecModel.eachSeries(function(seriesModel) {
        unfinished = seriesModel.dataTask.perform() || unfinished;
      });
      this.unfinished = unfinished || this.unfinished;
    };
    Scheduler2.prototype.plan = function() {
      this._pipelineMap.each(function(pipeline) {
        var task = pipeline.tail;
        do {
          if (task.__block) {
            pipeline.blockIndex = task.__idxInPipeline;
            break;
          }
          task = task.getUpstream();
        } while (task);
      });
    };
    Scheduler2.prototype.updatePayload = function(task, payload) {
      payload !== "remain" && (task.context.payload = payload);
    };
    Scheduler2.prototype._createSeriesStageTask = function(stageHandler, stageHandlerRecord, ecModel, api) {
      var scheduler = this;
      var oldSeriesTaskMap = stageHandlerRecord.seriesTaskMap;
      var newSeriesTaskMap = stageHandlerRecord.seriesTaskMap = createHashMap();
      var seriesType2 = stageHandler.seriesType;
      var getTargetSeries = stageHandler.getTargetSeries;
      if (stageHandler.createOnAllSeries) {
        ecModel.eachRawSeries(create);
      } else if (seriesType2) {
        ecModel.eachRawSeriesByType(seriesType2, create);
      } else if (getTargetSeries) {
        getTargetSeries(ecModel, api).each(create);
      }
      function create(seriesModel) {
        var pipelineId = seriesModel.uid;
        var task = newSeriesTaskMap.set(pipelineId, oldSeriesTaskMap && oldSeriesTaskMap.get(pipelineId) || createTask({
          plan: seriesTaskPlan,
          reset: seriesTaskReset,
          count: seriesTaskCount
        }));
        task.context = {
          model: seriesModel,
          ecModel,
          api,
          // PENDING: `useClearVisual` not used?
          useClearVisual: stageHandler.isVisual && !stageHandler.isLayout,
          plan: stageHandler.plan,
          reset: stageHandler.reset,
          scheduler
        };
        scheduler._pipe(seriesModel, task);
      }
    };
    Scheduler2.prototype._createOverallStageTask = function(stageHandler, stageHandlerRecord, ecModel, api) {
      var scheduler = this;
      var overallTask = stageHandlerRecord.overallTask = stageHandlerRecord.overallTask || createTask({
        reset: overallTaskReset
      });
      overallTask.context = {
        ecModel,
        api,
        overallReset: stageHandler.overallReset,
        scheduler
      };
      var oldAgentStubMap = overallTask.agentStubMap;
      var newAgentStubMap = overallTask.agentStubMap = createHashMap();
      var seriesType2 = stageHandler.seriesType;
      var getTargetSeries = stageHandler.getTargetSeries;
      var overallProgress = true;
      var shouldOverallTaskDirty = false;
      var errMsg = "";
      assert(!stageHandler.createOnAllSeries, errMsg);
      if (seriesType2) {
        ecModel.eachRawSeriesByType(seriesType2, createStub);
      } else if (getTargetSeries) {
        getTargetSeries(ecModel, api).each(createStub);
      } else {
        overallProgress = false;
        each$3(ecModel.getSeries(), createStub);
      }
      function createStub(seriesModel) {
        var pipelineId = seriesModel.uid;
        var stub = newAgentStubMap.set(pipelineId, oldAgentStubMap && oldAgentStubMap.get(pipelineId) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (shouldOverallTaskDirty = true, createTask({
          reset: stubReset,
          onDirty: stubOnDirty
        })));
        stub.context = {
          model: seriesModel,
          overallProgress
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        };
        stub.agent = overallTask;
        stub.__block = overallProgress;
        scheduler._pipe(seriesModel, stub);
      }
      if (shouldOverallTaskDirty) {
        overallTask.dirty();
      }
    };
    Scheduler2.prototype._pipe = function(seriesModel, task) {
      var pipelineId = seriesModel.uid;
      var pipeline = this._pipelineMap.get(pipelineId);
      !pipeline.head && (pipeline.head = task);
      pipeline.tail && pipeline.tail.pipe(task);
      pipeline.tail = task;
      task.__idxInPipeline = pipeline.count++;
      task.__pipeline = pipeline;
    };
    Scheduler2.wrapStageHandler = function(stageHandler, visualType) {
      if (isFunction$1(stageHandler)) {
        stageHandler = {
          overallReset: stageHandler,
          seriesType: detectSeriseType(stageHandler)
        };
      }
      stageHandler.uid = getUID("stageHandler");
      visualType && (stageHandler.visualType = visualType);
      return stageHandler;
    };
    return Scheduler2;
  }()
);
function overallTaskReset(context) {
  context.overallReset(context.ecModel, context.api, context.payload);
}
function stubReset(context) {
  return context.overallProgress && stubProgress;
}
function stubProgress() {
  this.agent.dirty();
  this.getDownstream().dirty();
}
function stubOnDirty() {
  this.agent && this.agent.dirty();
}
function seriesTaskPlan(context) {
  return context.plan ? context.plan(context.model, context.ecModel, context.api, context.payload) : null;
}
function seriesTaskReset(context) {
  if (context.useClearVisual) {
    context.data.clearAllVisual();
  }
  var resetDefines = context.resetDefines = normalizeToArray(context.reset(context.model, context.ecModel, context.api, context.payload));
  return resetDefines.length > 1 ? map$1(resetDefines, function(v, idx) {
    return makeSeriesTaskProgress(idx);
  }) : singleSeriesTaskProgress;
}
var singleSeriesTaskProgress = makeSeriesTaskProgress(0);
function makeSeriesTaskProgress(resetDefineIdx) {
  return function(params, context) {
    var data = context.data;
    var resetDefine = context.resetDefines[resetDefineIdx];
    if (resetDefine && resetDefine.dataEach) {
      for (var i = params.start; i < params.end; i++) {
        resetDefine.dataEach(data, i);
      }
    } else if (resetDefine && resetDefine.progress) {
      resetDefine.progress(params, data);
    }
  };
}
function seriesTaskCount(context) {
  return context.data.count();
}
function detectSeriseType(legacyFunc) {
  seriesType = null;
  try {
    legacyFunc(ecModelMock, apiMock);
  } catch (e) {
  }
  return seriesType;
}
var ecModelMock = {};
var apiMock = {};
var seriesType;
mockMethods(ecModelMock, GlobalModel);
mockMethods(apiMock, ExtensionAPI);
ecModelMock.eachSeriesByType = ecModelMock.eachRawSeriesByType = function(type) {
  seriesType = type;
};
ecModelMock.eachComponent = function(cond) {
  if (cond.mainType === "series" && cond.subType) {
    seriesType = cond.subType;
  }
};
function mockMethods(target, Clz) {
  for (var name_1 in Clz.prototype) {
    target[name_1] = noop$2;
  }
}
var colorAll = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const lightTheme = {
  color: colorAll,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], colorAll]
};
var contrastColor = "#B9B8CE";
var backgroundColor = "#100C2A";
var axisCommon = function() {
  return {
    axisLine: {
      lineStyle: {
        color: contrastColor
      }
    },
    splitLine: {
      lineStyle: {
        color: "#484753"
      }
    },
    splitArea: {
      areaStyle: {
        color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: "#20203B"
      }
    }
  };
};
var colorPalette = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"];
var theme = {
  darkMode: true,
  color: colorPalette,
  backgroundColor,
  axisPointer: {
    lineStyle: {
      color: "#817f91"
    },
    crossStyle: {
      color: "#817f91"
    },
    label: {
      // TODO Contrast of label backgorundColor
      color: "#fff"
    }
  },
  legend: {
    textStyle: {
      color: contrastColor
    }
  },
  textStyle: {
    color: contrastColor
  },
  title: {
    textStyle: {
      color: "#EEF1FA"
    },
    subtextStyle: {
      color: "#B9B8CE"
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: contrastColor
    }
  },
  dataZoom: {
    borderColor: "#71708A",
    textStyle: {
      color: contrastColor
    },
    brushStyle: {
      color: "rgba(135,163,206,0.3)"
    },
    handleStyle: {
      color: "#353450",
      borderColor: "#C5CBE3"
    },
    moveHandleStyle: {
      color: "#B0B6C3",
      opacity: 0.3
    },
    fillerColor: "rgba(135,163,206,0.2)",
    emphasis: {
      handleStyle: {
        borderColor: "#91B7F2",
        color: "#4D587D"
      },
      moveHandleStyle: {
        color: "#636D9A",
        opacity: 0.7
      }
    },
    dataBackground: {
      lineStyle: {
        color: "#71708A",
        width: 1
      },
      areaStyle: {
        color: "#71708A"
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: "#87A3CE"
      },
      areaStyle: {
        color: "#87A3CE"
      }
    }
  },
  visualMap: {
    textStyle: {
      color: contrastColor
    }
  },
  timeline: {
    lineStyle: {
      color: contrastColor
    },
    label: {
      color: contrastColor
    },
    controlStyle: {
      color: contrastColor,
      borderColor: contrastColor
    }
  },
  calendar: {
    itemStyle: {
      color: backgroundColor
    },
    dayLabel: {
      color: contrastColor
    },
    monthLabel: {
      color: contrastColor
    },
    yearLabel: {
      color: contrastColor
    }
  },
  timeAxis: axisCommon(),
  logAxis: axisCommon(),
  valueAxis: axisCommon(),
  categoryAxis: axisCommon(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: colorPalette
  },
  gauge: {
    title: {
      color: contrastColor
    },
    axisLine: {
      lineStyle: {
        color: [[1, "rgba(207,212,219,0.2)"]]
      }
    },
    axisLabel: {
      color: contrastColor
    },
    detail: {
      color: "#EEF1FA"
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  }
};
theme.categoryAxis.splitLine.show = false;
var ECEventProcessor = (
  /** @class */
  function() {
    function ECEventProcessor2() {
    }
    ECEventProcessor2.prototype.normalizeQuery = function(query) {
      var cptQuery = {};
      var dataQuery = {};
      var otherQuery = {};
      if (zrUtil.isString(query)) {
        var condCptType = parseClassType(query);
        cptQuery.mainType = condCptType.main || null;
        cptQuery.subType = condCptType.sub || null;
      } else {
        var suffixes_1 = ["Index", "Name", "Id"];
        var dataKeys_1 = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        zrUtil.each(query, function(val, key) {
          var reserved = false;
          for (var i = 0; i < suffixes_1.length; i++) {
            var propSuffix = suffixes_1[i];
            var suffixPos = key.lastIndexOf(propSuffix);
            if (suffixPos > 0 && suffixPos === key.length - propSuffix.length) {
              var mainType = key.slice(0, suffixPos);
              if (mainType !== "data") {
                cptQuery.mainType = mainType;
                cptQuery[propSuffix.toLowerCase()] = val;
                reserved = true;
              }
            }
          }
          if (dataKeys_1.hasOwnProperty(key)) {
            dataQuery[key] = val;
            reserved = true;
          }
          if (!reserved) {
            otherQuery[key] = val;
          }
        });
      }
      return {
        cptQuery,
        dataQuery,
        otherQuery
      };
    };
    ECEventProcessor2.prototype.filter = function(eventType, query) {
      var eventInfo = this.eventInfo;
      if (!eventInfo) {
        return true;
      }
      var targetEl = eventInfo.targetEl;
      var packedEvent = eventInfo.packedEvent;
      var model = eventInfo.model;
      var view = eventInfo.view;
      if (!model || !view) {
        return true;
      }
      var cptQuery = query.cptQuery;
      var dataQuery = query.dataQuery;
      return check(cptQuery, model, "mainType") && check(cptQuery, model, "subType") && check(cptQuery, model, "index", "componentIndex") && check(cptQuery, model, "name") && check(cptQuery, model, "id") && check(dataQuery, packedEvent, "name") && check(dataQuery, packedEvent, "dataIndex") && check(dataQuery, packedEvent, "dataType") && (!view.filterForExposedEvent || view.filterForExposedEvent(eventType, query.otherQuery, targetEl, packedEvent));
      function check(query2, host, prop, propOnHost) {
        return query2[prop] == null || host[propOnHost || prop] === query2[prop];
      }
    };
    ECEventProcessor2.prototype.afterTrigger = function() {
      this.eventInfo = null;
    };
    return ECEventProcessor2;
  }()
);
var SYMBOL_PROPS_WITH_CB = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"];
var SYMBOL_PROPS = SYMBOL_PROPS_WITH_CB.concat(["symbolKeepAspect"]);
var seriesSymbolTask = {
  createOnAllSeries: true,
  // For legend.
  performRawSeries: true,
  reset: function(seriesModel, ecModel) {
    var data = seriesModel.getData();
    if (seriesModel.legendIcon) {
      data.setVisual("legendIcon", seriesModel.legendIcon);
    }
    if (!seriesModel.hasSymbolVisual) {
      return;
    }
    var symbolOptions = {};
    var symbolOptionsCb = {};
    var hasCallback = false;
    for (var i = 0; i < SYMBOL_PROPS_WITH_CB.length; i++) {
      var symbolPropName = SYMBOL_PROPS_WITH_CB[i];
      var val = seriesModel.get(symbolPropName);
      if (isFunction$1(val)) {
        hasCallback = true;
        symbolOptionsCb[symbolPropName] = val;
      } else {
        symbolOptions[symbolPropName] = val;
      }
    }
    symbolOptions.symbol = symbolOptions.symbol || seriesModel.defaultSymbol;
    data.setVisual(extend({
      legendIcon: seriesModel.legendIcon || symbolOptions.symbol,
      symbolKeepAspect: seriesModel.get("symbolKeepAspect")
    }, symbolOptions));
    if (ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var symbolPropsCb = keys(symbolOptionsCb);
    function dataEach(data2, idx) {
      var rawValue = seriesModel.getRawValue(idx);
      var params = seriesModel.getDataParams(idx);
      for (var i2 = 0; i2 < symbolPropsCb.length; i2++) {
        var symbolPropName2 = symbolPropsCb[i2];
        data2.setItemVisual(idx, symbolPropName2, symbolOptionsCb[symbolPropName2](rawValue, params));
      }
    }
    return {
      dataEach: hasCallback ? dataEach : null
    };
  }
};
var dataSymbolTask = {
  createOnAllSeries: true,
  // For legend.
  performRawSeries: true,
  reset: function(seriesModel, ecModel) {
    if (!seriesModel.hasSymbolVisual) {
      return;
    }
    if (ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var data = seriesModel.getData();
    function dataEach(data2, idx) {
      var itemModel = data2.getItemModel(idx);
      for (var i = 0; i < SYMBOL_PROPS.length; i++) {
        var symbolPropName = SYMBOL_PROPS[i];
        var val = itemModel.getShallow(symbolPropName, true);
        if (val != null) {
          data2.setItemVisual(idx, symbolPropName, val);
        }
      }
    }
    return {
      dataEach: data.hasItemOption ? dataEach : null
    };
  }
};
function getItemVisualFromData(data, dataIndex, key) {
  switch (key) {
    case "color":
      var style = data.getItemVisual(dataIndex, "style");
      return style[data.getVisual("drawType")];
    case "opacity":
      return data.getItemVisual(dataIndex, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return data.getItemVisual(dataIndex, key);
  }
}
function getVisualFromData(data, key) {
  switch (key) {
    case "color":
      var style = data.getVisual("style");
      return style[data.getVisual("drawType")];
    case "opacity":
      return data.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return data.getVisual(key);
  }
}
function createLegacyDataSelectAction(seriesType2, ecRegisterAction) {
  function getSeriesIndices(ecModel, payload) {
    var seriesIndices = [];
    ecModel.eachComponent({
      mainType: "series",
      subType: seriesType2,
      query: payload
    }, function(seriesModel) {
      seriesIndices.push(seriesModel.seriesIndex);
    });
    return seriesIndices;
  }
  each$3([[seriesType2 + "ToggleSelect", "toggleSelect"], [seriesType2 + "Select", "select"], [seriesType2 + "UnSelect", "unselect"]], function(eventsMap) {
    ecRegisterAction(eventsMap[0], function(payload, ecModel, api) {
      payload = extend({}, payload);
      api.dispatchAction(extend(payload, {
        type: eventsMap[1],
        seriesIndex: getSeriesIndices(ecModel, payload)
      }));
    });
  });
}
function handleSeriesLegacySelectEvents(type, eventPostfix, ecIns, ecModel, payload) {
  var legacyEventName = type + eventPostfix;
  if (!ecIns.isSilent(legacyEventName)) {
    ecModel.eachComponent({
      mainType: "series",
      subType: "pie"
    }, function(seriesModel) {
      var seriesIndex = seriesModel.seriesIndex;
      var selectedMap = seriesModel.option.selectedMap;
      var selected = payload.selected;
      for (var i = 0; i < selected.length; i++) {
        if (selected[i].seriesIndex === seriesIndex) {
          var data = seriesModel.getData();
          var dataIndex = queryDataIndex(data, payload.fromActionPayload);
          ecIns.trigger(legacyEventName, {
            type: legacyEventName,
            seriesId: seriesModel.id,
            name: isArray$1(dataIndex) ? data.getName(dataIndex[0]) : data.getName(dataIndex),
            selected: isString$2(selectedMap) ? selectedMap : extend({}, selectedMap)
          });
        }
      }
    });
  }
}
function handleLegacySelectEvents(messageCenter, ecIns, api) {
  messageCenter.on("selectchanged", function(params) {
    var ecModel = api.getModel();
    if (params.isFromClick) {
      handleSeriesLegacySelectEvents("map", "selectchanged", ecIns, ecModel, params);
      handleSeriesLegacySelectEvents("pie", "selectchanged", ecIns, ecModel, params);
    } else if (params.fromAction === "select") {
      handleSeriesLegacySelectEvents("map", "selected", ecIns, ecModel, params);
      handleSeriesLegacySelectEvents("pie", "selected", ecIns, ecModel, params);
    } else if (params.fromAction === "unselect") {
      handleSeriesLegacySelectEvents("map", "unselected", ecIns, ecModel, params);
      handleSeriesLegacySelectEvents("pie", "unselected", ecIns, ecModel, params);
    }
  });
}
function findEventDispatcher(target, det, returnFirstMatch) {
  var found;
  while (target) {
    if (det(target)) {
      found = target;
      if (returnFirstMatch) {
        break;
      }
    }
    target = target.__hostTarget || target.parent;
  }
  return found;
}
var Triangle = Path.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(path, shape) {
    var cx = shape.cx;
    var cy = shape.cy;
    var width = shape.width / 2;
    var height = shape.height / 2;
    path.moveTo(cx, cy - height);
    path.lineTo(cx + width, cy + height);
    path.lineTo(cx - width, cy + height);
    path.closePath();
  }
});
var Diamond = Path.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(path, shape) {
    var cx = shape.cx;
    var cy = shape.cy;
    var width = shape.width / 2;
    var height = shape.height / 2;
    path.moveTo(cx, cy - height);
    path.lineTo(cx + width, cy);
    path.lineTo(cx, cy + height);
    path.lineTo(cx - width, cy);
    path.closePath();
  }
});
var Pin = Path.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(path, shape) {
    var x = shape.x;
    var y = shape.y;
    var w = shape.width / 5 * 3;
    var h2 = Math.max(w, shape.height);
    var r = w / 2;
    var dy = r * r / (h2 - r);
    var cy = y - h2 + r + dy;
    var angle = Math.asin(dy / r);
    var dx = Math.cos(angle) * r;
    var tanX = Math.sin(angle);
    var tanY = Math.cos(angle);
    var cpLen = r * 0.6;
    var cpLen2 = r * 0.7;
    path.moveTo(x - dx, cy + dy);
    path.arc(x, cy, r, Math.PI - angle, Math.PI * 2 + angle);
    path.bezierCurveTo(x + dx - tanX * cpLen, cy + dy + tanY * cpLen, x, y - cpLen2, x, y);
    path.bezierCurveTo(x, y - cpLen2, x - dx + tanX * cpLen, cy + dy + tanY * cpLen, x - dx, cy + dy);
    path.closePath();
  }
});
var Arrow = Path.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(ctx, shape) {
    var height = shape.height;
    var width = shape.width;
    var x = shape.x;
    var y = shape.y;
    var dx = width / 3 * 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x + dx, y + height);
    ctx.lineTo(x, y + height / 4 * 3);
    ctx.lineTo(x - dx, y + height);
    ctx.lineTo(x, y);
    ctx.closePath();
  }
});
var symbolCtors = {
  line: Line,
  rect: Rect,
  roundRect: Rect,
  square: Rect,
  circle: Circle,
  diamond: Diamond,
  pin: Pin,
  arrow: Arrow,
  triangle: Triangle
};
var symbolShapeMakers = {
  line: function(x, y, w, h2, shape) {
    shape.x1 = x;
    shape.y1 = y + h2 / 2;
    shape.x2 = x + w;
    shape.y2 = y + h2 / 2;
  },
  rect: function(x, y, w, h2, shape) {
    shape.x = x;
    shape.y = y;
    shape.width = w;
    shape.height = h2;
  },
  roundRect: function(x, y, w, h2, shape) {
    shape.x = x;
    shape.y = y;
    shape.width = w;
    shape.height = h2;
    shape.r = Math.min(w, h2) / 4;
  },
  square: function(x, y, w, h2, shape) {
    var size = Math.min(w, h2);
    shape.x = x;
    shape.y = y;
    shape.width = size;
    shape.height = size;
  },
  circle: function(x, y, w, h2, shape) {
    shape.cx = x + w / 2;
    shape.cy = y + h2 / 2;
    shape.r = Math.min(w, h2) / 2;
  },
  diamond: function(x, y, w, h2, shape) {
    shape.cx = x + w / 2;
    shape.cy = y + h2 / 2;
    shape.width = w;
    shape.height = h2;
  },
  pin: function(x, y, w, h2, shape) {
    shape.x = x + w / 2;
    shape.y = y + h2 / 2;
    shape.width = w;
    shape.height = h2;
  },
  arrow: function(x, y, w, h2, shape) {
    shape.x = x + w / 2;
    shape.y = y + h2 / 2;
    shape.width = w;
    shape.height = h2;
  },
  triangle: function(x, y, w, h2, shape) {
    shape.cx = x + w / 2;
    shape.cy = y + h2 / 2;
    shape.width = w;
    shape.height = h2;
  }
};
var symbolBuildProxies = {};
each$3(symbolCtors, function(Ctor, name) {
  symbolBuildProxies[name] = new Ctor();
});
var SymbolClz = Path.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(out, config2, rect) {
    var res = calculateTextPosition(out, config2, rect);
    var shape = this.shape;
    if (shape && shape.symbolType === "pin" && config2.position === "inside") {
      res.y = rect.y + rect.height * 0.4;
    }
    return res;
  },
  buildPath: function(ctx, shape, inBundle) {
    var symbolType = shape.symbolType;
    if (symbolType !== "none") {
      var proxySymbol = symbolBuildProxies[symbolType];
      if (!proxySymbol) {
        symbolType = "rect";
        proxySymbol = symbolBuildProxies[symbolType];
      }
      symbolShapeMakers[symbolType](shape.x, shape.y, shape.width, shape.height, proxySymbol.shape);
      proxySymbol.buildPath(ctx, proxySymbol.shape, inBundle);
    }
  }
});
function symbolPathSetColor(color, innerColor2) {
  if (this.type !== "image") {
    var symbolStyle = this.style;
    if (this.__isEmptyBrush) {
      symbolStyle.stroke = color;
      symbolStyle.fill = innerColor2 || "#fff";
      symbolStyle.lineWidth = 2;
    } else if (this.shape.symbolType === "line") {
      symbolStyle.stroke = color;
    } else {
      symbolStyle.fill = color;
    }
    this.markRedraw();
  }
}
function createSymbol(symbolType, x, y, w, h2, color, keepAspect) {
  var isEmpty2 = symbolType.indexOf("empty") === 0;
  if (isEmpty2) {
    symbolType = symbolType.substr(5, 1).toLowerCase() + symbolType.substr(6);
  }
  var symbolPath;
  if (symbolType.indexOf("image://") === 0) {
    symbolPath = makeImage(symbolType.slice(8), new BoundingRect(x, y, w, h2), keepAspect ? "center" : "cover");
  } else if (symbolType.indexOf("path://") === 0) {
    symbolPath = makePath(symbolType.slice(7), {}, new BoundingRect(x, y, w, h2), keepAspect ? "center" : "cover");
  } else {
    symbolPath = new SymbolClz({
      shape: {
        symbolType,
        x,
        y,
        width: w,
        height: h2
      }
    });
  }
  symbolPath.__isEmptyBrush = isEmpty2;
  symbolPath.setColor = symbolPathSetColor;
  if (color) {
    symbolPath.setColor(color);
  }
  return symbolPath;
}
function normalizeSymbolSize(symbolSize) {
  if (!isArray$1(symbolSize)) {
    symbolSize = [+symbolSize, +symbolSize];
  }
  return [symbolSize[0] || 0, symbolSize[1] || 0];
}
function normalizeSymbolOffset(symbolOffset, symbolSize) {
  if (symbolOffset == null) {
    return;
  }
  if (!isArray$1(symbolOffset)) {
    symbolOffset = [symbolOffset, symbolOffset];
  }
  return [parsePercent(symbolOffset[0], symbolSize[0]) || 0, parsePercent(retrieve2(symbolOffset[1], symbolOffset[0]), symbolSize[1]) || 0];
}
var decalMap = new WeakMap();
var decalCache = new LRU(100);
var decalKeys = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function createOrUpdatePatternFromDecal(decalObject, api) {
  if (decalObject === "none") {
    return null;
  }
  var dpr = api.getDevicePixelRatio();
  var zr = api.getZr();
  var isSVG = zr.painter.type === "svg";
  if (decalObject.dirty) {
    decalMap["delete"](decalObject);
  }
  var oldPattern = decalMap.get(decalObject);
  if (oldPattern) {
    return oldPattern;
  }
  var decalOpt = defaults(decalObject, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: true,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  if (decalOpt.backgroundColor === "none") {
    decalOpt.backgroundColor = null;
  }
  var pattern = {
    repeat: "repeat"
  };
  setPatternnSource(pattern);
  pattern.rotation = decalOpt.rotation;
  pattern.scaleX = pattern.scaleY = isSVG ? 1 : 1 / dpr;
  decalMap.set(decalObject, pattern);
  decalObject.dirty = false;
  return pattern;
  function setPatternnSource(pattern2) {
    var keys2 = [dpr];
    var isValidKey = true;
    for (var i = 0; i < decalKeys.length; ++i) {
      var value = decalOpt[decalKeys[i]];
      if (value != null && !isArray$1(value) && !isString$2(value) && !isNumber$1(value) && typeof value !== "boolean") {
        isValidKey = false;
        break;
      }
      keys2.push(value);
    }
    var cacheKey;
    if (isValidKey) {
      cacheKey = keys2.join(",") + (isSVG ? "-svg" : "");
      var cache = decalCache.get(cacheKey);
      if (cache) {
        isSVG ? pattern2.svgElement = cache : pattern2.image = cache;
      }
    }
    var dashArrayX = normalizeDashArrayX(decalOpt.dashArrayX);
    var dashArrayY = normalizeDashArrayY(decalOpt.dashArrayY);
    var symbolArray = normalizeSymbolArray(decalOpt.symbol);
    var lineBlockLengthsX = getLineBlockLengthX(dashArrayX);
    var lineBlockLengthY = getLineBlockLengthY(dashArrayY);
    var canvas = !isSVG && platformApi.createCanvas();
    var svgRoot = isSVG && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    };
    var pSize = getPatternSize();
    var ctx;
    if (canvas) {
      canvas.width = pSize.width * dpr;
      canvas.height = pSize.height * dpr;
      ctx = canvas.getContext("2d");
    }
    brushDecal();
    if (isValidKey) {
      decalCache.put(cacheKey, canvas || svgRoot);
    }
    pattern2.image = canvas;
    pattern2.svgElement = svgRoot;
    pattern2.svgWidth = pSize.width;
    pattern2.svgHeight = pSize.height;
    function getPatternSize() {
      var width = 1;
      for (var i2 = 0, xlen = lineBlockLengthsX.length; i2 < xlen; ++i2) {
        width = getLeastCommonMultiple(width, lineBlockLengthsX[i2]);
      }
      var symbolRepeats = 1;
      for (var i2 = 0, xlen = symbolArray.length; i2 < xlen; ++i2) {
        symbolRepeats = getLeastCommonMultiple(symbolRepeats, symbolArray[i2].length);
      }
      width *= symbolRepeats;
      var height = lineBlockLengthY * lineBlockLengthsX.length * symbolArray.length;
      return {
        width: Math.max(1, Math.min(width, decalOpt.maxTileWidth)),
        height: Math.max(1, Math.min(height, decalOpt.maxTileHeight))
      };
    }
    function brushDecal() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (decalOpt.backgroundColor) {
          ctx.fillStyle = decalOpt.backgroundColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
      var ySum = 0;
      for (var i2 = 0; i2 < dashArrayY.length; ++i2) {
        ySum += dashArrayY[i2];
      }
      if (ySum <= 0) {
        return;
      }
      var y = -lineBlockLengthY;
      var yId = 0;
      var yIdTotal = 0;
      var xId0 = 0;
      while (y < pSize.height) {
        if (yId % 2 === 0) {
          var symbolYId = yIdTotal / 2 % symbolArray.length;
          var x = 0;
          var xId1 = 0;
          var xId1Total = 0;
          while (x < pSize.width * 2) {
            var xSum = 0;
            for (var i2 = 0; i2 < dashArrayX[xId0].length; ++i2) {
              xSum += dashArrayX[xId0][i2];
            }
            if (xSum <= 0) {
              break;
            }
            if (xId1 % 2 === 0) {
              var size = (1 - decalOpt.symbolSize) * 0.5;
              var left = x + dashArrayX[xId0][xId1] * size;
              var top_1 = y + dashArrayY[yId] * size;
              var width = dashArrayX[xId0][xId1] * decalOpt.symbolSize;
              var height = dashArrayY[yId] * decalOpt.symbolSize;
              var symbolXId = xId1Total / 2 % symbolArray[symbolYId].length;
              brushSymbol(left, top_1, width, height, symbolArray[symbolYId][symbolXId]);
            }
            x += dashArrayX[xId0][xId1];
            ++xId1Total;
            ++xId1;
            if (xId1 === dashArrayX[xId0].length) {
              xId1 = 0;
            }
          }
          ++xId0;
          if (xId0 === dashArrayX.length) {
            xId0 = 0;
          }
        }
        y += dashArrayY[yId];
        ++yIdTotal;
        ++yId;
        if (yId === dashArrayY.length) {
          yId = 0;
        }
      }
      function brushSymbol(x2, y2, width2, height2, symbolType) {
        var scale2 = isSVG ? 1 : dpr;
        var symbol = createSymbol(symbolType, x2 * scale2, y2 * scale2, width2 * scale2, height2 * scale2, decalOpt.color, decalOpt.symbolKeepAspect);
        if (isSVG) {
          var symbolVNode = zr.painter.renderOneToVNode(symbol);
          if (symbolVNode) {
            svgRoot.children.push(symbolVNode);
          }
        } else {
          brushSingle(ctx, symbol);
        }
      }
    }
  }
}
function normalizeSymbolArray(symbol) {
  if (!symbol || symbol.length === 0) {
    return [["rect"]];
  }
  if (isString$2(symbol)) {
    return [[symbol]];
  }
  var isAllString = true;
  for (var i = 0; i < symbol.length; ++i) {
    if (!isString$2(symbol[i])) {
      isAllString = false;
      break;
    }
  }
  if (isAllString) {
    return normalizeSymbolArray([symbol]);
  }
  var result = [];
  for (var i = 0; i < symbol.length; ++i) {
    if (isString$2(symbol[i])) {
      result.push([symbol[i]]);
    } else {
      result.push(symbol[i]);
    }
  }
  return result;
}
function normalizeDashArrayX(dash) {
  if (!dash || dash.length === 0) {
    return [[0, 0]];
  }
  if (isNumber$1(dash)) {
    var dashValue = Math.ceil(dash);
    return [[dashValue, dashValue]];
  }
  var isAllNumber = true;
  for (var i = 0; i < dash.length; ++i) {
    if (!isNumber$1(dash[i])) {
      isAllNumber = false;
      break;
    }
  }
  if (isAllNumber) {
    return normalizeDashArrayX([dash]);
  }
  var result = [];
  for (var i = 0; i < dash.length; ++i) {
    if (isNumber$1(dash[i])) {
      var dashValue = Math.ceil(dash[i]);
      result.push([dashValue, dashValue]);
    } else {
      var dashValue = map$1(dash[i], function(n) {
        return Math.ceil(n);
      });
      if (dashValue.length % 2 === 1) {
        result.push(dashValue.concat(dashValue));
      } else {
        result.push(dashValue);
      }
    }
  }
  return result;
}
function normalizeDashArrayY(dash) {
  if (!dash || typeof dash === "object" && dash.length === 0) {
    return [0, 0];
  }
  if (isNumber$1(dash)) {
    var dashValue_1 = Math.ceil(dash);
    return [dashValue_1, dashValue_1];
  }
  var dashValue = map$1(dash, function(n) {
    return Math.ceil(n);
  });
  return dash.length % 2 ? dashValue.concat(dashValue) : dashValue;
}
function getLineBlockLengthX(dash) {
  return map$1(dash, function(line) {
    return getLineBlockLengthY(line);
  });
}
function getLineBlockLengthY(dash) {
  var blockLength = 0;
  for (var i = 0; i < dash.length; ++i) {
    blockLength += dash[i];
  }
  if (dash.length % 2 === 1) {
    return blockLength * 2;
  }
  return blockLength;
}
function decalVisual(ecModel, api) {
  ecModel.eachRawSeries(function(seriesModel) {
    if (ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var data = seriesModel.getData();
    if (data.hasItemVisual()) {
      data.each(function(idx) {
        var decal2 = data.getItemVisual(idx, "decal");
        if (decal2) {
          var itemStyle = data.ensureUniqueItemVisual(idx, "style");
          itemStyle.decal = createOrUpdatePatternFromDecal(decal2, api);
        }
      });
    }
    var decal = data.getVisual("decal");
    if (decal) {
      var style = data.getVisual("style");
      style.decal = createOrUpdatePatternFromDecal(decal, api);
    }
  });
}
var lifecycle = new Eventful();
var implsStore = {};
function registerImpl(name, impl) {
  implsStore[name] = impl;
}
function getImpl(name) {
  return implsStore[name];
}
var TEST_FRAME_REMAIN_TIME = 1;
var PRIORITY_PROCESSOR_SERIES_FILTER = 800;
var PRIORITY_PROCESSOR_DATASTACK = 900;
var PRIORITY_PROCESSOR_FILTER = 1e3;
var PRIORITY_PROCESSOR_DEFAULT = 2e3;
var PRIORITY_PROCESSOR_STATISTIC = 5e3;
var PRIORITY_VISUAL_LAYOUT = 1e3;
var PRIORITY_VISUAL_PROGRESSIVE_LAYOUT = 1100;
var PRIORITY_VISUAL_GLOBAL = 2e3;
var PRIORITY_VISUAL_CHART = 3e3;
var PRIORITY_VISUAL_COMPONENT = 4e3;
var PRIORITY_VISUAL_CHART_DATA_CUSTOM = 4500;
var PRIORITY_VISUAL_POST_CHART_LAYOUT = 4600;
var PRIORITY_VISUAL_BRUSH = 5e3;
var PRIORITY_VISUAL_ARIA = 6e3;
var PRIORITY_VISUAL_DECAL = 7e3;
var PRIORITY = {
  PROCESSOR: {
    FILTER: PRIORITY_PROCESSOR_FILTER,
    SERIES_FILTER: PRIORITY_PROCESSOR_SERIES_FILTER,
    STATISTIC: PRIORITY_PROCESSOR_STATISTIC
  },
  VISUAL: {
    LAYOUT: PRIORITY_VISUAL_LAYOUT,
    PROGRESSIVE_LAYOUT: PRIORITY_VISUAL_PROGRESSIVE_LAYOUT,
    GLOBAL: PRIORITY_VISUAL_GLOBAL,
    CHART: PRIORITY_VISUAL_CHART,
    POST_CHART_LAYOUT: PRIORITY_VISUAL_POST_CHART_LAYOUT,
    COMPONENT: PRIORITY_VISUAL_COMPONENT,
    BRUSH: PRIORITY_VISUAL_BRUSH,
    CHART_ITEM: PRIORITY_VISUAL_CHART_DATA_CUSTOM,
    ARIA: PRIORITY_VISUAL_ARIA,
    DECAL: PRIORITY_VISUAL_DECAL
  }
};
var IN_MAIN_PROCESS_KEY = "__flagInMainProcess";
var PENDING_UPDATE = "__pendingUpdate";
var STATUS_NEEDS_UPDATE_KEY = "__needsUpdateStatus";
var ACTION_REG = /^[a-zA-Z0-9_]+$/;
function createRegisterEventWithLowercaseECharts(method) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.isDisposed()) {
      disposedWarning(this.id);
      return;
    }
    return toLowercaseNameAndCallEventful(this, method, args);
  };
}
function createRegisterEventWithLowercaseMessageCenter(method) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return toLowercaseNameAndCallEventful(this, method, args);
  };
}
function toLowercaseNameAndCallEventful(host, method, args) {
  args[0] = args[0] && args[0].toLowerCase();
  return Eventful.prototype[method].apply(host, args);
}
var MessageCenter = (
  /** @class */
  function(_super) {
    __extends(MessageCenter2, _super);
    function MessageCenter2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessageCenter2;
  }(Eventful)
);
var messageCenterProto = MessageCenter.prototype;
messageCenterProto.on = createRegisterEventWithLowercaseMessageCenter("on");
messageCenterProto.off = createRegisterEventWithLowercaseMessageCenter("off");
var prepare;
var prepareView;
var updateDirectly;
var updateMethods;
var doConvertPixel;
var updateStreamModes;
var doDispatchAction;
var flushPendingActions;
var triggerUpdatedEvent;
var bindRenderedEvent;
var bindMouseEvent;
var render;
var renderComponents;
var renderSeries;
var createExtensionAPI;
var markStatusToUpdate;
var applyChangedStates;
var ECharts = (
  /** @class */
  function(_super) {
    __extends(ECharts2, _super);
    function ECharts2(dom, theme2, opts) {
      var _this = _super.call(this, new ECEventProcessor()) || this;
      _this._chartsViews = [];
      _this._chartsMap = {};
      _this._componentsViews = [];
      _this._componentsMap = {};
      _this._pendingActions = [];
      opts = opts || {};
      if (isString$2(theme2)) {
        theme2 = themeStorage[theme2];
      }
      _this._dom = dom;
      var defaultRenderer = "canvas";
      var defaultCoarsePointer = "auto";
      var defaultUseDirtyRect = false;
      if (opts.ssr) {
        zrender.registerSSRDataGetter(function(el) {
          var ecData = getECData(el);
          var dataIndex = ecData.dataIndex;
          if (dataIndex == null) {
            return;
          }
          var hashMap = createHashMap();
          hashMap.set("series_index", ecData.seriesIndex);
          hashMap.set("data_index", dataIndex);
          ecData.ssrType && hashMap.set("ssr_type", ecData.ssrType);
          return hashMap;
        });
      }
      var zr = _this._zr = zrender.init(dom, {
        renderer: opts.renderer || defaultRenderer,
        devicePixelRatio: opts.devicePixelRatio,
        width: opts.width,
        height: opts.height,
        ssr: opts.ssr,
        useDirtyRect: retrieve2(opts.useDirtyRect, defaultUseDirtyRect),
        useCoarsePointer: retrieve2(opts.useCoarsePointer, defaultCoarsePointer),
        pointerSize: opts.pointerSize
      });
      _this._ssr = opts.ssr;
      _this._throttledZrFlush = throttle(bind$1(zr.flush, zr), 17);
      theme2 = clone$1(theme2);
      theme2 && globalBackwardCompat(theme2, true);
      _this._theme = theme2;
      _this._locale = createLocaleObject(opts.locale || SYSTEM_LANG);
      _this._coordSysMgr = new CoordinateSystemManager();
      var api = _this._api = createExtensionAPI(_this);
      function prioritySortFunc(a, b) {
        return a.__prio - b.__prio;
      }
      timsort(visualFuncs, prioritySortFunc);
      timsort(dataProcessorFuncs, prioritySortFunc);
      _this._scheduler = new Scheduler(_this, api, dataProcessorFuncs, visualFuncs);
      _this._messageCenter = new MessageCenter();
      _this._initEvents();
      _this.resize = bind$1(_this.resize, _this);
      zr.animation.on("frame", _this._onframe, _this);
      bindRenderedEvent(zr, _this);
      bindMouseEvent(zr, _this);
      setAsPrimitive(_this);
      return _this;
    }
    ECharts2.prototype._onframe = function() {
      if (this._disposed) {
        return;
      }
      applyChangedStates(this);
      var scheduler = this._scheduler;
      if (this[PENDING_UPDATE]) {
        var silent = this[PENDING_UPDATE].silent;
        this[IN_MAIN_PROCESS_KEY] = true;
        try {
          prepare(this);
          updateMethods.update.call(this, null, this[PENDING_UPDATE].updateParams);
        } catch (e) {
          this[IN_MAIN_PROCESS_KEY] = false;
          this[PENDING_UPDATE] = null;
          throw e;
        }
        this._zr.flush();
        this[IN_MAIN_PROCESS_KEY] = false;
        this[PENDING_UPDATE] = null;
        flushPendingActions.call(this, silent);
        triggerUpdatedEvent.call(this, silent);
      } else if (scheduler.unfinished) {
        var remainTime = TEST_FRAME_REMAIN_TIME;
        var ecModel = this._model;
        var api = this._api;
        scheduler.unfinished = false;
        do {
          var startTime = +/* @__PURE__ */ new Date();
          scheduler.performSeriesTasks(ecModel);
          scheduler.performDataProcessorTasks(ecModel);
          updateStreamModes(this, ecModel);
          scheduler.performVisualTasks(ecModel);
          renderSeries(this, this._model, api, "remain", {});
          remainTime -= +/* @__PURE__ */ new Date() - startTime;
        } while (remainTime > 0 && scheduler.unfinished);
        if (!scheduler.unfinished) {
          this._zr.flush();
        }
      }
    };
    ECharts2.prototype.getDom = function() {
      return this._dom;
    };
    ECharts2.prototype.getId = function() {
      return this.id;
    };
    ECharts2.prototype.getZr = function() {
      return this._zr;
    };
    ECharts2.prototype.isSSR = function() {
      return this._ssr;
    };
    ECharts2.prototype.setOption = function(option, notMerge, lazyUpdate) {
      if (this[IN_MAIN_PROCESS_KEY]) {
        return;
      }
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      var silent;
      var replaceMerge;
      var transitionOpt;
      if (isObject$3(notMerge)) {
        lazyUpdate = notMerge.lazyUpdate;
        silent = notMerge.silent;
        replaceMerge = notMerge.replaceMerge;
        transitionOpt = notMerge.transition;
        notMerge = notMerge.notMerge;
      }
      this[IN_MAIN_PROCESS_KEY] = true;
      if (!this._model || notMerge) {
        var optionManager = new OptionManager(this._api);
        var theme2 = this._theme;
        var ecModel = this._model = new GlobalModel();
        ecModel.scheduler = this._scheduler;
        ecModel.ssr = this._ssr;
        ecModel.init(null, null, null, theme2, this._locale, optionManager);
      }
      this._model.setOption(option, {
        replaceMerge
      }, optionPreprocessorFuncs);
      var updateParams = {
        seriesTransition: transitionOpt,
        optionChanged: true
      };
      if (lazyUpdate) {
        this[PENDING_UPDATE] = {
          silent,
          updateParams
        };
        this[IN_MAIN_PROCESS_KEY] = false;
        this.getZr().wakeUp();
      } else {
        try {
          prepare(this);
          updateMethods.update.call(this, null, updateParams);
        } catch (e) {
          this[PENDING_UPDATE] = null;
          this[IN_MAIN_PROCESS_KEY] = false;
          throw e;
        }
        if (!this._ssr) {
          this._zr.flush();
        }
        this[PENDING_UPDATE] = null;
        this[IN_MAIN_PROCESS_KEY] = false;
        flushPendingActions.call(this, silent);
        triggerUpdatedEvent.call(this, silent);
      }
    };
    ECharts2.prototype.setTheme = function() {
    };
    ECharts2.prototype.getModel = function() {
      return this._model;
    };
    ECharts2.prototype.getOption = function() {
      return this._model && this._model.getOption();
    };
    ECharts2.prototype.getWidth = function() {
      return this._zr.getWidth();
    };
    ECharts2.prototype.getHeight = function() {
      return this._zr.getHeight();
    };
    ECharts2.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || env.hasGlobalWindow && (void 0).devicePixelRatio || 1;
    };
    ECharts2.prototype.getRenderedCanvas = function(opts) {
      return this.renderToCanvas(opts);
    };
    ECharts2.prototype.renderToCanvas = function(opts) {
      opts = opts || {};
      var painter = this._zr.painter;
      return painter.getRenderedCanvas({
        backgroundColor: opts.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: opts.pixelRatio || this.getDevicePixelRatio()
      });
    };
    ECharts2.prototype.renderToSVGString = function(opts) {
      opts = opts || {};
      var painter = this._zr.painter;
      return painter.renderToString({
        useViewBox: opts.useViewBox
      });
    };
    ECharts2.prototype.getSvgDataURL = function() {
      if (!env.svgSupported) {
        return;
      }
      var zr = this._zr;
      var list = zr.storage.getDisplayList();
      each$3(list, function(el) {
        el.stopAnimation(null, true);
      });
      return zr.painter.toDataURL();
    };
    ECharts2.prototype.getDataURL = function(opts) {
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      opts = opts || {};
      var excludeComponents = opts.excludeComponents;
      var ecModel = this._model;
      var excludesComponentViews = [];
      var self2 = this;
      each$3(excludeComponents, function(componentType) {
        ecModel.eachComponent({
          mainType: componentType
        }, function(component) {
          var view = self2._componentsMap[component.__viewId];
          if (!view.group.ignore) {
            excludesComponentViews.push(view);
            view.group.ignore = true;
          }
        });
      });
      var url = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(opts).toDataURL("image/" + (opts && opts.type || "png"));
      each$3(excludesComponentViews, function(view) {
        view.group.ignore = false;
      });
      return url;
    };
    ECharts2.prototype.getConnectedDataURL = function(opts) {
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      var isSvg = opts.type === "svg";
      var groupId = this.group;
      var mathMin2 = Math.min;
      var mathMax2 = Math.max;
      var MAX_NUMBER = Infinity;
      if (connectedGroups[groupId]) {
        var left_1 = MAX_NUMBER;
        var top_1 = MAX_NUMBER;
        var right_1 = -MAX_NUMBER;
        var bottom_1 = -MAX_NUMBER;
        var canvasList_1 = [];
        var dpr_1 = opts && opts.pixelRatio || this.getDevicePixelRatio();
        each$3(instances, function(chart, id) {
          if (chart.group === groupId) {
            var canvas = isSvg ? chart.getZr().painter.getSvgDom().innerHTML : chart.renderToCanvas(clone$1(opts));
            var boundingRect = chart.getDom().getBoundingClientRect();
            left_1 = mathMin2(boundingRect.left, left_1);
            top_1 = mathMin2(boundingRect.top, top_1);
            right_1 = mathMax2(boundingRect.right, right_1);
            bottom_1 = mathMax2(boundingRect.bottom, bottom_1);
            canvasList_1.push({
              dom: canvas,
              left: boundingRect.left,
              top: boundingRect.top
            });
          }
        });
        left_1 *= dpr_1;
        top_1 *= dpr_1;
        right_1 *= dpr_1;
        bottom_1 *= dpr_1;
        var width = right_1 - left_1;
        var height = bottom_1 - top_1;
        var targetCanvas = platformApi.createCanvas();
        var zr_1 = zrender.init(targetCanvas, {
          renderer: isSvg ? "svg" : "canvas"
        });
        zr_1.resize({
          width,
          height
        });
        if (isSvg) {
          var content_1 = "";
          each$3(canvasList_1, function(item) {
            var x = item.left - left_1;
            var y = item.top - top_1;
            content_1 += '<g transform="translate(' + x + "," + y + ')">' + item.dom + "</g>";
          });
          zr_1.painter.getSvgRoot().innerHTML = content_1;
          if (opts.connectedBackgroundColor) {
            zr_1.painter.setBackgroundColor(opts.connectedBackgroundColor);
          }
          zr_1.refreshImmediately();
          return zr_1.painter.toDataURL();
        } else {
          if (opts.connectedBackgroundColor) {
            zr_1.add(new Rect({
              shape: {
                x: 0,
                y: 0,
                width,
                height
              },
              style: {
                fill: opts.connectedBackgroundColor
              }
            }));
          }
          each$3(canvasList_1, function(item) {
            var img = new ZRImage({
              style: {
                x: item.left * dpr_1 - left_1,
                y: item.top * dpr_1 - top_1,
                image: item.dom
              }
            });
            zr_1.add(img);
          });
          zr_1.refreshImmediately();
          return targetCanvas.toDataURL("image/" + (opts && opts.type || "png"));
        }
      } else {
        return this.getDataURL(opts);
      }
    };
    ECharts2.prototype.convertToPixel = function(finder, value) {
      return doConvertPixel(this, "convertToPixel", finder, value);
    };
    ECharts2.prototype.convertFromPixel = function(finder, value) {
      return doConvertPixel(this, "convertFromPixel", finder, value);
    };
    ECharts2.prototype.containPixel = function(finder, value) {
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      var ecModel = this._model;
      var result;
      var findResult = parseFinder(ecModel, finder);
      each$3(findResult, function(models, key) {
        key.indexOf("Models") >= 0 && each$3(models, function(model) {
          var coordSys = model.coordinateSystem;
          if (coordSys && coordSys.containPoint) {
            result = result || !!coordSys.containPoint(value);
          } else if (key === "seriesModels") {
            var view = this._chartsMap[model.__viewId];
            if (view && view.containPoint) {
              result = result || view.containPoint(value, model);
            }
          } else ;
        }, this);
      }, this);
      return !!result;
    };
    ECharts2.prototype.getVisual = function(finder, visualType) {
      var ecModel = this._model;
      var parsedFinder = parseFinder(ecModel, finder, {
        defaultMainType: "series"
      });
      var seriesModel = parsedFinder.seriesModel;
      var data = seriesModel.getData();
      var dataIndexInside = parsedFinder.hasOwnProperty("dataIndexInside") ? parsedFinder.dataIndexInside : parsedFinder.hasOwnProperty("dataIndex") ? data.indexOfRawIndex(parsedFinder.dataIndex) : null;
      return dataIndexInside != null ? getItemVisualFromData(data, dataIndexInside, visualType) : getVisualFromData(data, visualType);
    };
    ECharts2.prototype.getViewOfComponentModel = function(componentModel) {
      return this._componentsMap[componentModel.__viewId];
    };
    ECharts2.prototype.getViewOfSeriesModel = function(seriesModel) {
      return this._chartsMap[seriesModel.__viewId];
    };
    ECharts2.prototype._initEvents = function() {
      var _this = this;
      each$3(MOUSE_EVENT_NAMES, function(eveName) {
        var handler = function(e) {
          var ecModel = _this.getModel();
          var el = e.target;
          var params;
          var isGlobalOut = eveName === "globalout";
          if (isGlobalOut) {
            params = {};
          } else {
            el && findEventDispatcher(el, function(parent) {
              var ecData = getECData(parent);
              if (ecData && ecData.dataIndex != null) {
                var dataModel = ecData.dataModel || ecModel.getSeriesByIndex(ecData.seriesIndex);
                params = dataModel && dataModel.getDataParams(ecData.dataIndex, ecData.dataType, el) || {};
                return true;
              } else if (ecData.eventData) {
                params = extend({}, ecData.eventData);
                return true;
              }
            }, true);
          }
          if (params) {
            var componentType = params.componentType;
            var componentIndex = params.componentIndex;
            if (componentType === "markLine" || componentType === "markPoint" || componentType === "markArea") {
              componentType = "series";
              componentIndex = params.seriesIndex;
            }
            var model = componentType && componentIndex != null && ecModel.getComponent(componentType, componentIndex);
            var view = model && _this[model.mainType === "series" ? "_chartsMap" : "_componentsMap"][model.__viewId];
            params.event = e;
            params.type = eveName;
            _this._$eventProcessor.eventInfo = {
              targetEl: el,
              packedEvent: params,
              model,
              view
            };
            _this.trigger(eveName, params);
          }
        };
        handler.zrEventfulCallAtLast = true;
        _this._zr.on(eveName, handler, _this);
      });
      each$3(eventActionMap, function(actionType, eventType) {
        _this._messageCenter.on(eventType, function(event) {
          this.trigger(eventType, event);
        }, _this);
      });
      each$3(["selectchanged"], function(eventType) {
        _this._messageCenter.on(eventType, function(event) {
          this.trigger(eventType, event);
        }, _this);
      });
      handleLegacySelectEvents(this._messageCenter, this, this._api);
    };
    ECharts2.prototype.isDisposed = function() {
      return this._disposed;
    };
    ECharts2.prototype.clear = function() {
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      this.setOption({
        series: []
      }, true);
    };
    ECharts2.prototype.dispose = function() {
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      this._disposed = true;
      var dom = this.getDom();
      if (dom) {
        setAttribute(this.getDom(), DOM_ATTRIBUTE_KEY, "");
      }
      var chart = this;
      var api = chart._api;
      var ecModel = chart._model;
      each$3(chart._componentsViews, function(component) {
        component.dispose(ecModel, api);
      });
      each$3(chart._chartsViews, function(chart2) {
        chart2.dispose(ecModel, api);
      });
      chart._zr.dispose();
      chart._dom = chart._model = chart._chartsMap = chart._componentsMap = chart._chartsViews = chart._componentsViews = chart._scheduler = chart._api = chart._zr = chart._throttledZrFlush = chart._theme = chart._coordSysMgr = chart._messageCenter = null;
      delete instances[chart.id];
    };
    ECharts2.prototype.resize = function(opts) {
      if (this[IN_MAIN_PROCESS_KEY]) {
        return;
      }
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      this._zr.resize(opts);
      var ecModel = this._model;
      this._loadingFX && this._loadingFX.resize();
      if (!ecModel) {
        return;
      }
      var needPrepare = ecModel.resetOption("media");
      var silent = opts && opts.silent;
      if (this[PENDING_UPDATE]) {
        if (silent == null) {
          silent = this[PENDING_UPDATE].silent;
        }
        needPrepare = true;
        this[PENDING_UPDATE] = null;
      }
      this[IN_MAIN_PROCESS_KEY] = true;
      try {
        needPrepare && prepare(this);
        updateMethods.update.call(this, {
          type: "resize",
          animation: extend({
            // Disable animation
            duration: 0
          }, opts && opts.animation)
        });
      } catch (e) {
        this[IN_MAIN_PROCESS_KEY] = false;
        throw e;
      }
      this[IN_MAIN_PROCESS_KEY] = false;
      flushPendingActions.call(this, silent);
      triggerUpdatedEvent.call(this, silent);
    };
    ECharts2.prototype.showLoading = function(name, cfg) {
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      if (isObject$3(name)) {
        cfg = name;
        name = "";
      }
      name = name || "default";
      this.hideLoading();
      if (!loadingEffects[name]) {
        return;
      }
      var el = loadingEffects[name](this._api, cfg);
      var zr = this._zr;
      this._loadingFX = el;
      zr.add(el);
    };
    ECharts2.prototype.hideLoading = function() {
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX);
      this._loadingFX = null;
    };
    ECharts2.prototype.makeActionFromEvent = function(eventObj) {
      var payload = extend({}, eventObj);
      payload.type = eventActionMap[eventObj.type];
      return payload;
    };
    ECharts2.prototype.dispatchAction = function(payload, opt) {
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      if (!isObject$3(opt)) {
        opt = {
          silent: !!opt
        };
      }
      if (!actions[payload.type]) {
        return;
      }
      if (!this._model) {
        return;
      }
      if (this[IN_MAIN_PROCESS_KEY]) {
        this._pendingActions.push(payload);
        return;
      }
      var silent = opt.silent;
      doDispatchAction.call(this, payload, silent);
      var flush = opt.flush;
      if (flush) {
        this._zr.flush();
      } else if (flush !== false && env.browser.weChat) {
        this._throttledZrFlush();
      }
      flushPendingActions.call(this, silent);
      triggerUpdatedEvent.call(this, silent);
    };
    ECharts2.prototype.updateLabelLayout = function() {
      lifecycle.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    };
    ECharts2.prototype.appendData = function(params) {
      if (this._disposed) {
        disposedWarning(this.id);
        return;
      }
      var seriesIndex = params.seriesIndex;
      var ecModel = this.getModel();
      var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
      seriesModel.appendData(params);
      this._scheduler.unfinished = true;
      this.getZr().wakeUp();
    };
    ECharts2.internalField = function() {
      prepare = function(ecIns) {
        var scheduler = ecIns._scheduler;
        scheduler.restorePipelines(ecIns._model);
        scheduler.prepareStageTasks();
        prepareView(ecIns, true);
        prepareView(ecIns, false);
        scheduler.plan();
      };
      prepareView = function(ecIns, isComponent) {
        var ecModel = ecIns._model;
        var scheduler = ecIns._scheduler;
        var viewList = isComponent ? ecIns._componentsViews : ecIns._chartsViews;
        var viewMap = isComponent ? ecIns._componentsMap : ecIns._chartsMap;
        var zr = ecIns._zr;
        var api = ecIns._api;
        for (var i = 0; i < viewList.length; i++) {
          viewList[i].__alive = false;
        }
        isComponent ? ecModel.eachComponent(function(componentType, model) {
          componentType !== "series" && doPrepare(model);
        }) : ecModel.eachSeries(doPrepare);
        function doPrepare(model) {
          var requireNewView = model.__requireNewView;
          model.__requireNewView = false;
          var viewId = "_ec_" + model.id + "_" + model.type;
          var view2 = !requireNewView && viewMap[viewId];
          if (!view2) {
            var classType = parseClassType(model.type);
            var Clazz = isComponent ? ComponentView.getClass(classType.main, classType.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              ChartView.getClass(classType.sub)
            );
            view2 = new Clazz();
            view2.init(ecModel, api);
            viewMap[viewId] = view2;
            viewList.push(view2);
            zr.add(view2.group);
          }
          model.__viewId = view2.__id = viewId;
          view2.__alive = true;
          view2.__model = model;
          view2.group.__ecComponentInfo = {
            mainType: model.mainType,
            index: model.componentIndex
          };
          !isComponent && scheduler.prepareView(view2, model, ecModel, api);
        }
        for (var i = 0; i < viewList.length; ) {
          var view = viewList[i];
          if (!view.__alive) {
            !isComponent && view.renderTask.dispose();
            zr.remove(view.group);
            view.dispose(ecModel, api);
            viewList.splice(i, 1);
            if (viewMap[view.__id] === view) {
              delete viewMap[view.__id];
            }
            view.__id = view.group.__ecComponentInfo = null;
          } else {
            i++;
          }
        }
      };
      updateDirectly = function(ecIns, method, payload, mainType, subType) {
        var ecModel = ecIns._model;
        ecModel.setUpdatePayload(payload);
        if (!mainType) {
          each$3([].concat(ecIns._componentsViews).concat(ecIns._chartsViews), callView);
          return;
        }
        var query = {};
        query[mainType + "Id"] = payload[mainType + "Id"];
        query[mainType + "Index"] = payload[mainType + "Index"];
        query[mainType + "Name"] = payload[mainType + "Name"];
        var condition = {
          mainType,
          query
        };
        subType && (condition.subType = subType);
        var excludeSeriesId = payload.excludeSeriesId;
        var excludeSeriesIdMap;
        if (excludeSeriesId != null) {
          excludeSeriesIdMap = createHashMap();
          each$3(normalizeToArray(excludeSeriesId), function(id) {
            var modelId = convertOptionIdName(id, null);
            if (modelId != null) {
              excludeSeriesIdMap.set(modelId, true);
            }
          });
        }
        ecModel && ecModel.eachComponent(condition, function(model) {
          var isExcluded = excludeSeriesIdMap && excludeSeriesIdMap.get(model.id) != null;
          if (isExcluded) {
            return;
          }
          if (isHighDownPayload(payload)) {
            if (model instanceof SeriesModel) {
              if (payload.type === HIGHLIGHT_ACTION_TYPE && !payload.notBlur && !model.get(["emphasis", "disabled"])) {
                blurSeriesFromHighlightPayload(model, payload, ecIns._api);
              }
            } else {
              var _a2 = findComponentHighDownDispatchers(model.mainType, model.componentIndex, payload.name, ecIns._api), focusSelf = _a2.focusSelf, dispatchers = _a2.dispatchers;
              if (payload.type === HIGHLIGHT_ACTION_TYPE && focusSelf && !payload.notBlur) {
                blurComponent(model.mainType, model.componentIndex, ecIns._api);
              }
              if (dispatchers) {
                each$3(dispatchers, function(dispatcher) {
                  payload.type === HIGHLIGHT_ACTION_TYPE ? enterEmphasis(dispatcher) : leaveEmphasis(dispatcher);
                });
              }
            }
          } else if (isSelectChangePayload(payload)) {
            if (model instanceof SeriesModel) {
              toggleSelectionFromPayload(model, payload, ecIns._api);
              updateSeriesElementSelection(model);
              markStatusToUpdate(ecIns);
            }
          }
        }, ecIns);
        ecModel && ecModel.eachComponent(condition, function(model) {
          var isExcluded = excludeSeriesIdMap && excludeSeriesIdMap.get(model.id) != null;
          if (isExcluded) {
            return;
          }
          callView(ecIns[mainType === "series" ? "_chartsMap" : "_componentsMap"][model.__viewId]);
        }, ecIns);
        function callView(view) {
          view && view.__alive && view[method] && view[method](view.__model, ecModel, ecIns._api, payload);
        }
      };
      updateMethods = {
        prepareAndUpdate: function(payload) {
          prepare(this);
          updateMethods.update.call(this, payload, {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: payload.newOption != null
          });
        },
        update: function(payload, updateParams) {
          var ecModel = this._model;
          var api = this._api;
          var zr = this._zr;
          var coordSysMgr = this._coordSysMgr;
          var scheduler = this._scheduler;
          if (!ecModel) {
            return;
          }
          ecModel.setUpdatePayload(payload);
          scheduler.restoreData(ecModel, payload);
          scheduler.performSeriesTasks(ecModel);
          coordSysMgr.create(ecModel, api);
          scheduler.performDataProcessorTasks(ecModel, payload);
          updateStreamModes(this, ecModel);
          coordSysMgr.update(ecModel, api);
          clearColorPalette(ecModel);
          scheduler.performVisualTasks(ecModel, payload);
          render(this, ecModel, api, payload, updateParams);
          var backgroundColor2 = ecModel.get("backgroundColor") || "transparent";
          var darkMode = ecModel.get("darkMode");
          zr.setBackgroundColor(backgroundColor2);
          if (darkMode != null && darkMode !== "auto") {
            zr.setDarkMode(darkMode);
          }
          lifecycle.trigger("afterupdate", ecModel, api);
        },
        updateTransform: function(payload) {
          var _this = this;
          var ecModel = this._model;
          var api = this._api;
          if (!ecModel) {
            return;
          }
          ecModel.setUpdatePayload(payload);
          var componentDirtyList = [];
          ecModel.eachComponent(function(componentType, componentModel) {
            if (componentType === "series") {
              return;
            }
            var componentView = _this.getViewOfComponentModel(componentModel);
            if (componentView && componentView.__alive) {
              if (componentView.updateTransform) {
                var result = componentView.updateTransform(componentModel, ecModel, api, payload);
                result && result.update && componentDirtyList.push(componentView);
              } else {
                componentDirtyList.push(componentView);
              }
            }
          });
          var seriesDirtyMap = createHashMap();
          ecModel.eachSeries(function(seriesModel) {
            var chartView = _this._chartsMap[seriesModel.__viewId];
            if (chartView.updateTransform) {
              var result = chartView.updateTransform(seriesModel, ecModel, api, payload);
              result && result.update && seriesDirtyMap.set(seriesModel.uid, 1);
            } else {
              seriesDirtyMap.set(seriesModel.uid, 1);
            }
          });
          clearColorPalette(ecModel);
          this._scheduler.performVisualTasks(ecModel, payload, {
            setDirty: true,
            dirtyMap: seriesDirtyMap
          });
          renderSeries(this, ecModel, api, payload, {}, seriesDirtyMap);
          lifecycle.trigger("afterupdate", ecModel, api);
        },
        updateView: function(payload) {
          var ecModel = this._model;
          if (!ecModel) {
            return;
          }
          ecModel.setUpdatePayload(payload);
          ChartView.markUpdateMethod(payload, "updateView");
          clearColorPalette(ecModel);
          this._scheduler.performVisualTasks(ecModel, payload, {
            setDirty: true
          });
          render(this, ecModel, this._api, payload, {});
          lifecycle.trigger("afterupdate", ecModel, this._api);
        },
        updateVisual: function(payload) {
          var _this = this;
          var ecModel = this._model;
          if (!ecModel) {
            return;
          }
          ecModel.setUpdatePayload(payload);
          ecModel.eachSeries(function(seriesModel) {
            seriesModel.getData().clearAllVisual();
          });
          ChartView.markUpdateMethod(payload, "updateVisual");
          clearColorPalette(ecModel);
          this._scheduler.performVisualTasks(ecModel, payload, {
            visualType: "visual",
            setDirty: true
          });
          ecModel.eachComponent(function(componentType, componentModel) {
            if (componentType !== "series") {
              var componentView = _this.getViewOfComponentModel(componentModel);
              componentView && componentView.__alive && componentView.updateVisual(componentModel, ecModel, _this._api, payload);
            }
          });
          ecModel.eachSeries(function(seriesModel) {
            var chartView = _this._chartsMap[seriesModel.__viewId];
            chartView.updateVisual(seriesModel, ecModel, _this._api, payload);
          });
          lifecycle.trigger("afterupdate", ecModel, this._api);
        },
        updateLayout: function(payload) {
          updateMethods.update.call(this, payload);
        }
      };
      doConvertPixel = function(ecIns, methodName, finder, value) {
        if (ecIns._disposed) {
          disposedWarning(ecIns.id);
          return;
        }
        var ecModel = ecIns._model;
        var coordSysList = ecIns._coordSysMgr.getCoordinateSystems();
        var result;
        var parsedFinder = parseFinder(ecModel, finder);
        for (var i = 0; i < coordSysList.length; i++) {
          var coordSys = coordSysList[i];
          if (coordSys[methodName] && (result = coordSys[methodName](ecModel, parsedFinder, value)) != null) {
            return result;
          }
        }
      };
      updateStreamModes = function(ecIns, ecModel) {
        var chartsMap = ecIns._chartsMap;
        var scheduler = ecIns._scheduler;
        ecModel.eachSeries(function(seriesModel) {
          scheduler.updateStreamModes(seriesModel, chartsMap[seriesModel.__viewId]);
        });
      };
      doDispatchAction = function(payload, silent) {
        var _this = this;
        var ecModel = this.getModel();
        var payloadType = payload.type;
        var escapeConnect = payload.escapeConnect;
        var actionWrap = actions[payloadType];
        var actionInfo = actionWrap.actionInfo;
        var cptTypeTmp = (actionInfo.update || "update").split(":");
        var updateMethod = cptTypeTmp.pop();
        var cptType = cptTypeTmp[0] != null && parseClassType(cptTypeTmp[0]);
        this[IN_MAIN_PROCESS_KEY] = true;
        var payloads = [payload];
        var batched = false;
        if (payload.batch) {
          batched = true;
          payloads = map$1(payload.batch, function(item) {
            item = defaults(extend({}, item), payload);
            item.batch = null;
            return item;
          });
        }
        var eventObjBatch = [];
        var eventObj;
        var isSelectChange = isSelectChangePayload(payload);
        var isHighDown = isHighDownPayload(payload);
        if (isHighDown) {
          allLeaveBlur(this._api);
        }
        each$3(payloads, function(batchItem) {
          eventObj = actionWrap.action(batchItem, _this._model, _this._api);
          eventObj = eventObj || extend({}, batchItem);
          eventObj.type = actionInfo.event || eventObj.type;
          eventObjBatch.push(eventObj);
          if (isHighDown) {
            var _a2 = preParseFinder(payload), queryOptionMap = _a2.queryOptionMap, mainTypeSpecified = _a2.mainTypeSpecified;
            var componentMainType = mainTypeSpecified ? queryOptionMap.keys()[0] : "series";
            updateDirectly(_this, updateMethod, batchItem, componentMainType);
            markStatusToUpdate(_this);
          } else if (isSelectChange) {
            updateDirectly(_this, updateMethod, batchItem, "series");
            markStatusToUpdate(_this);
          } else if (cptType) {
            updateDirectly(_this, updateMethod, batchItem, cptType.main, cptType.sub);
          }
        });
        if (updateMethod !== "none" && !isHighDown && !isSelectChange && !cptType) {
          try {
            if (this[PENDING_UPDATE]) {
              prepare(this);
              updateMethods.update.call(this, payload);
              this[PENDING_UPDATE] = null;
            } else {
              updateMethods[updateMethod].call(this, payload);
            }
          } catch (e) {
            this[IN_MAIN_PROCESS_KEY] = false;
            throw e;
          }
        }
        if (batched) {
          eventObj = {
            type: actionInfo.event || payloadType,
            escapeConnect,
            batch: eventObjBatch
          };
        } else {
          eventObj = eventObjBatch[0];
        }
        this[IN_MAIN_PROCESS_KEY] = false;
        if (!silent) {
          var messageCenter = this._messageCenter;
          messageCenter.trigger(eventObj.type, eventObj);
          if (isSelectChange) {
            var newObj = {
              type: "selectchanged",
              escapeConnect,
              selected: getAllSelectedIndices(ecModel),
              isFromClick: payload.isFromClick || false,
              fromAction: payload.type,
              fromActionPayload: payload
            };
            messageCenter.trigger(newObj.type, newObj);
          }
        }
      };
      flushPendingActions = function(silent) {
        var pendingActions = this._pendingActions;
        while (pendingActions.length) {
          var payload = pendingActions.shift();
          doDispatchAction.call(this, payload, silent);
        }
      };
      triggerUpdatedEvent = function(silent) {
        !silent && this.trigger("updated");
      };
      bindRenderedEvent = function(zr, ecIns) {
        zr.on("rendered", function(params) {
          ecIns.trigger("rendered", params);
          if (
            // Although zr is dirty if initial animation is not finished
            // and this checking is called on frame, we also check
            // animation finished for robustness.
            zr.animation.isFinished() && !ecIns[PENDING_UPDATE] && !ecIns._scheduler.unfinished && !ecIns._pendingActions.length
          ) {
            ecIns.trigger("finished");
          }
        });
      };
      bindMouseEvent = function(zr, ecIns) {
        zr.on("mouseover", function(e) {
          var el = e.target;
          var dispatcher = findEventDispatcher(el, isHighDownDispatcher);
          if (dispatcher) {
            handleGlobalMouseOverForHighDown(dispatcher, e, ecIns._api);
            markStatusToUpdate(ecIns);
          }
        }).on("mouseout", function(e) {
          var el = e.target;
          var dispatcher = findEventDispatcher(el, isHighDownDispatcher);
          if (dispatcher) {
            handleGlobalMouseOutForHighDown(dispatcher, e, ecIns._api);
            markStatusToUpdate(ecIns);
          }
        }).on("click", function(e) {
          var el = e.target;
          var dispatcher = findEventDispatcher(el, function(target) {
            return getECData(target).dataIndex != null;
          }, true);
          if (dispatcher) {
            var actionType = dispatcher.selected ? "unselect" : "select";
            var ecData = getECData(dispatcher);
            ecIns._api.dispatchAction({
              type: actionType,
              dataType: ecData.dataType,
              dataIndexInside: ecData.dataIndex,
              seriesIndex: ecData.seriesIndex,
              isFromClick: true
            });
          }
        });
      };
      function clearColorPalette(ecModel) {
        ecModel.clearColorPalette();
        ecModel.eachSeries(function(seriesModel) {
          seriesModel.clearColorPalette();
        });
      }
      function allocateZlevels(ecModel) {
        var componentZLevels = [];
        var seriesZLevels = [];
        var hasSeparateZLevel = false;
        ecModel.eachComponent(function(componentType, componentModel) {
          var zlevel = componentModel.get("zlevel") || 0;
          var z = componentModel.get("z") || 0;
          var zlevelKey = componentModel.getZLevelKey();
          hasSeparateZLevel = hasSeparateZLevel || !!zlevelKey;
          (componentType === "series" ? seriesZLevels : componentZLevels).push({
            zlevel,
            z,
            idx: componentModel.componentIndex,
            type: componentType,
            key: zlevelKey
          });
        });
        if (hasSeparateZLevel) {
          var zLevels = componentZLevels.concat(seriesZLevels);
          var lastSeriesZLevel_1;
          var lastSeriesKey_1;
          timsort(zLevels, function(a, b) {
            if (a.zlevel === b.zlevel) {
              return a.z - b.z;
            }
            return a.zlevel - b.zlevel;
          });
          each$3(zLevels, function(item) {
            var componentModel = ecModel.getComponent(item.type, item.idx);
            var zlevel = item.zlevel;
            var key = item.key;
            if (lastSeriesZLevel_1 != null) {
              zlevel = Math.max(lastSeriesZLevel_1, zlevel);
            }
            if (key) {
              if (zlevel === lastSeriesZLevel_1 && key !== lastSeriesKey_1) {
                zlevel++;
              }
              lastSeriesKey_1 = key;
            } else if (lastSeriesKey_1) {
              if (zlevel === lastSeriesZLevel_1) {
                zlevel++;
              }
              lastSeriesKey_1 = "";
            }
            lastSeriesZLevel_1 = zlevel;
            componentModel.setZLevel(zlevel);
          });
        }
      }
      render = function(ecIns, ecModel, api, payload, updateParams) {
        allocateZlevels(ecModel);
        renderComponents(ecIns, ecModel, api, payload, updateParams);
        each$3(ecIns._chartsViews, function(chart) {
          chart.__alive = false;
        });
        renderSeries(ecIns, ecModel, api, payload, updateParams);
        each$3(ecIns._chartsViews, function(chart) {
          if (!chart.__alive) {
            chart.remove(ecModel, api);
          }
        });
      };
      renderComponents = function(ecIns, ecModel, api, payload, updateParams, dirtyList) {
        each$3(dirtyList || ecIns._componentsViews, function(componentView) {
          var componentModel = componentView.__model;
          clearStates(componentModel, componentView);
          componentView.render(componentModel, ecModel, api, payload);
          updateZ(componentModel, componentView);
          updateStates(componentModel, componentView);
        });
      };
      renderSeries = function(ecIns, ecModel, api, payload, updateParams, dirtyMap) {
        var scheduler = ecIns._scheduler;
        updateParams = extend(updateParams || {}, {
          updatedSeries: ecModel.getSeries()
        });
        lifecycle.trigger("series:beforeupdate", ecModel, api, updateParams);
        var unfinished = false;
        ecModel.eachSeries(function(seriesModel) {
          var chartView = ecIns._chartsMap[seriesModel.__viewId];
          chartView.__alive = true;
          var renderTask = chartView.renderTask;
          scheduler.updatePayload(renderTask, payload);
          clearStates(seriesModel, chartView);
          if (dirtyMap && dirtyMap.get(seriesModel.uid)) {
            renderTask.dirty();
          }
          if (renderTask.perform(scheduler.getPerformArgs(renderTask))) {
            unfinished = true;
          }
          chartView.group.silent = !!seriesModel.get("silent");
          updateBlend(seriesModel, chartView);
          updateSeriesElementSelection(seriesModel);
        });
        scheduler.unfinished = unfinished || scheduler.unfinished;
        lifecycle.trigger("series:layoutlabels", ecModel, api, updateParams);
        lifecycle.trigger("series:transition", ecModel, api, updateParams);
        ecModel.eachSeries(function(seriesModel) {
          var chartView = ecIns._chartsMap[seriesModel.__viewId];
          updateZ(seriesModel, chartView);
          updateStates(seriesModel, chartView);
        });
        updateHoverLayerStatus(ecIns, ecModel);
        lifecycle.trigger("series:afterupdate", ecModel, api, updateParams);
      };
      markStatusToUpdate = function(ecIns) {
        ecIns[STATUS_NEEDS_UPDATE_KEY] = true;
        ecIns.getZr().wakeUp();
      };
      applyChangedStates = function(ecIns) {
        if (!ecIns[STATUS_NEEDS_UPDATE_KEY]) {
          return;
        }
        ecIns.getZr().storage.traverse(function(el) {
          if (isElementRemoved(el)) {
            return;
          }
          applyElementStates(el);
        });
        ecIns[STATUS_NEEDS_UPDATE_KEY] = false;
      };
      function applyElementStates(el) {
        var newStates = [];
        var oldStates = el.currentStates;
        for (var i = 0; i < oldStates.length; i++) {
          var stateName = oldStates[i];
          if (!(stateName === "emphasis" || stateName === "blur" || stateName === "select")) {
            newStates.push(stateName);
          }
        }
        if (el.selected && el.states.select) {
          newStates.push("select");
        }
        if (el.hoverState === HOVER_STATE_EMPHASIS && el.states.emphasis) {
          newStates.push("emphasis");
        } else if (el.hoverState === HOVER_STATE_BLUR && el.states.blur) {
          newStates.push("blur");
        }
        el.useStates(newStates);
      }
      function updateHoverLayerStatus(ecIns, ecModel) {
        var zr = ecIns._zr;
        var storage = zr.storage;
        var elCount = 0;
        storage.traverse(function(el) {
          if (!el.isGroup) {
            elCount++;
          }
        });
        if (elCount > ecModel.get("hoverLayerThreshold") && !env.node && !env.worker) {
          ecModel.eachSeries(function(seriesModel) {
            if (seriesModel.preventUsingHoverLayer) {
              return;
            }
            var chartView = ecIns._chartsMap[seriesModel.__viewId];
            if (chartView.__alive) {
              chartView.eachRendered(function(el) {
                if (el.states.emphasis) {
                  el.states.emphasis.hoverLayer = true;
                }
              });
            }
          });
        }
      }
      function updateBlend(seriesModel, chartView) {
        var blendMode = seriesModel.get("blendMode") || null;
        chartView.eachRendered(function(el) {
          if (!el.isGroup) {
            el.style.blend = blendMode;
          }
        });
      }
      function updateZ(model, view) {
        if (model.preventAutoZ) {
          return;
        }
        var z = model.get("z") || 0;
        var zlevel = model.get("zlevel") || 0;
        view.eachRendered(function(el) {
          doUpdateZ(el, z, zlevel, -Infinity);
          return true;
        });
      }
      function doUpdateZ(el, z, zlevel, maxZ2) {
        var label = el.getTextContent();
        var labelLine = el.getTextGuideLine();
        var isGroup = el.isGroup;
        if (isGroup) {
          var children = el.childrenRef();
          for (var i = 0; i < children.length; i++) {
            maxZ2 = Math.max(doUpdateZ(children[i], z, zlevel, maxZ2), maxZ2);
          }
        } else {
          el.z = z;
          el.zlevel = zlevel;
          maxZ2 = Math.max(el.z2, maxZ2);
        }
        if (label) {
          label.z = z;
          label.zlevel = zlevel;
          isFinite(maxZ2) && (label.z2 = maxZ2 + 2);
        }
        if (labelLine) {
          var textGuideLineConfig = el.textGuideLineConfig;
          labelLine.z = z;
          labelLine.zlevel = zlevel;
          isFinite(maxZ2) && (labelLine.z2 = maxZ2 + (textGuideLineConfig && textGuideLineConfig.showAbove ? 1 : -1));
        }
        return maxZ2;
      }
      function clearStates(model, view) {
        view.eachRendered(function(el) {
          if (isElementRemoved(el)) {
            return;
          }
          var textContent = el.getTextContent();
          var textGuide = el.getTextGuideLine();
          if (el.stateTransition) {
            el.stateTransition = null;
          }
          if (textContent && textContent.stateTransition) {
            textContent.stateTransition = null;
          }
          if (textGuide && textGuide.stateTransition) {
            textGuide.stateTransition = null;
          }
          if (el.hasState()) {
            el.prevStates = el.currentStates;
            el.clearStates();
          } else if (el.prevStates) {
            el.prevStates = null;
          }
        });
      }
      function updateStates(model, view) {
        var stateAnimationModel = model.getModel("stateAnimation");
        var enableAnimation = model.isAnimationEnabled();
        var duration = stateAnimationModel.get("duration");
        var stateTransition = duration > 0 ? {
          duration,
          delay: stateAnimationModel.get("delay"),
          easing: stateAnimationModel.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        view.eachRendered(function(el) {
          if (el.states && el.states.emphasis) {
            if (isElementRemoved(el)) {
              return;
            }
            if (el instanceof Path) {
              savePathStates(el);
            }
            if (el.__dirty) {
              var prevStates = el.prevStates;
              if (prevStates) {
                el.useStates(prevStates);
              }
            }
            if (enableAnimation) {
              el.stateTransition = stateTransition;
              var textContent = el.getTextContent();
              var textGuide = el.getTextGuideLine();
              if (textContent) {
                textContent.stateTransition = stateTransition;
              }
              if (textGuide) {
                textGuide.stateTransition = stateTransition;
              }
            }
            if (el.__dirty) {
              applyElementStates(el);
            }
          }
        });
      }
      createExtensionAPI = function(ecIns) {
        return new /** @class */
        (function(_super2) {
          __extends(class_1, _super2);
          function class_1() {
            return _super2 !== null && _super2.apply(this, arguments) || this;
          }
          class_1.prototype.getCoordinateSystems = function() {
            return ecIns._coordSysMgr.getCoordinateSystems();
          };
          class_1.prototype.getComponentByElement = function(el) {
            while (el) {
              var modelInfo = el.__ecComponentInfo;
              if (modelInfo != null) {
                return ecIns._model.getComponent(modelInfo.mainType, modelInfo.index);
              }
              el = el.parent;
            }
          };
          class_1.prototype.enterEmphasis = function(el, highlightDigit) {
            enterEmphasis(el, highlightDigit);
            markStatusToUpdate(ecIns);
          };
          class_1.prototype.leaveEmphasis = function(el, highlightDigit) {
            leaveEmphasis(el, highlightDigit);
            markStatusToUpdate(ecIns);
          };
          class_1.prototype.enterBlur = function(el) {
            enterBlur(el);
            markStatusToUpdate(ecIns);
          };
          class_1.prototype.leaveBlur = function(el) {
            leaveBlur(el);
            markStatusToUpdate(ecIns);
          };
          class_1.prototype.enterSelect = function(el) {
            enterSelect(el);
            markStatusToUpdate(ecIns);
          };
          class_1.prototype.leaveSelect = function(el) {
            leaveSelect(el);
            markStatusToUpdate(ecIns);
          };
          class_1.prototype.getModel = function() {
            return ecIns.getModel();
          };
          class_1.prototype.getViewOfComponentModel = function(componentModel) {
            return ecIns.getViewOfComponentModel(componentModel);
          };
          class_1.prototype.getViewOfSeriesModel = function(seriesModel) {
            return ecIns.getViewOfSeriesModel(seriesModel);
          };
          return class_1;
        }(ExtensionAPI))(ecIns);
      };
    }();
    return ECharts2;
  }(Eventful)
);
var echartsProto = ECharts.prototype;
echartsProto.on = createRegisterEventWithLowercaseECharts("on");
echartsProto.off = createRegisterEventWithLowercaseECharts("off");
echartsProto.one = function(eventName, cb, ctx) {
  var self2 = this;
  function wrapped() {
    var args2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args2[_i] = arguments[_i];
    }
    cb && cb.apply && cb.apply(this, args2);
    self2.off(eventName, wrapped);
  }
  this.on.call(this, eventName, wrapped, ctx);
};
var MOUSE_EVENT_NAMES = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function disposedWarning(id) {
}
var actions = {};
var eventActionMap = {};
var dataProcessorFuncs = [];
var optionPreprocessorFuncs = [];
var visualFuncs = [];
var themeStorage = {};
var loadingEffects = {};
var instances = {};
var connectedGroups = {};
var DOM_ATTRIBUTE_KEY = "_echarts_instance_";
function registerTheme(name, theme2) {
  themeStorage[name] = theme2;
}
function registerPreprocessor(preprocessorFunc) {
  if (indexOf(optionPreprocessorFuncs, preprocessorFunc) < 0) {
    optionPreprocessorFuncs.push(preprocessorFunc);
  }
}
function registerProcessor(priority, processor) {
  normalizeRegister(dataProcessorFuncs, priority, processor, PRIORITY_PROCESSOR_DEFAULT);
}
function registerPostInit(postInitFunc) {
  registerUpdateLifecycle("afterinit", postInitFunc);
}
function registerPostUpdate(postUpdateFunc) {
  registerUpdateLifecycle("afterupdate", postUpdateFunc);
}
function registerUpdateLifecycle(name, cb) {
  lifecycle.on(name, cb);
}
function registerAction(actionInfo, eventName, action) {
  if (isFunction$1(eventName)) {
    action = eventName;
    eventName = "";
  }
  var actionType = isObject$3(actionInfo) ? actionInfo.type : [actionInfo, actionInfo = {
    event: eventName
  }][0];
  actionInfo.event = (actionInfo.event || actionType).toLowerCase();
  eventName = actionInfo.event;
  if (eventActionMap[eventName]) {
    return;
  }
  assert(ACTION_REG.test(actionType) && ACTION_REG.test(eventName));
  if (!actions[actionType]) {
    actions[actionType] = {
      action,
      actionInfo
    };
  }
  eventActionMap[eventName] = actionType;
}
function registerCoordinateSystem(type, coordSysCreator) {
  CoordinateSystemManager.register(type, coordSysCreator);
}
function registerLayout(priority, layoutTask) {
  normalizeRegister(visualFuncs, priority, layoutTask, PRIORITY_VISUAL_LAYOUT, "layout");
}
function registerVisual(priority, visualTask) {
  normalizeRegister(visualFuncs, priority, visualTask, PRIORITY_VISUAL_CHART, "visual");
}
var registeredTasks = [];
function normalizeRegister(targetList, priority, fn, defaultPriority, visualType) {
  if (isFunction$1(priority) || isObject$3(priority)) {
    fn = priority;
    priority = defaultPriority;
  }
  if (indexOf(registeredTasks, fn) >= 0) {
    return;
  }
  registeredTasks.push(fn);
  var stageHandler = Scheduler.wrapStageHandler(fn, visualType);
  stageHandler.__prio = priority;
  stageHandler.__raw = fn;
  targetList.push(stageHandler);
}
function registerLoading(name, loadingFx) {
  loadingEffects[name] = loadingFx;
}
function registerMap(mapName, geoJson, specialAreas) {
  var registerMap2 = getImpl("registerMap");
  registerMap2 && registerMap2(mapName, geoJson, specialAreas);
}
var registerTransform = registerExternalTransform;
registerVisual(PRIORITY_VISUAL_GLOBAL, seriesStyleTask);
registerVisual(PRIORITY_VISUAL_CHART_DATA_CUSTOM, dataStyleTask);
registerVisual(PRIORITY_VISUAL_CHART_DATA_CUSTOM, dataColorPaletteTask);
registerVisual(PRIORITY_VISUAL_GLOBAL, seriesSymbolTask);
registerVisual(PRIORITY_VISUAL_CHART_DATA_CUSTOM, dataSymbolTask);
registerVisual(PRIORITY_VISUAL_DECAL, decalVisual);
registerPreprocessor(globalBackwardCompat);
registerProcessor(PRIORITY_PROCESSOR_DATASTACK, dataStack);
registerLoading("default", defaultLoading);
registerAction({
  type: HIGHLIGHT_ACTION_TYPE,
  event: HIGHLIGHT_ACTION_TYPE,
  update: HIGHLIGHT_ACTION_TYPE
}, noop$2);
registerAction({
  type: DOWNPLAY_ACTION_TYPE,
  event: DOWNPLAY_ACTION_TYPE,
  update: DOWNPLAY_ACTION_TYPE
}, noop$2);
registerAction({
  type: SELECT_ACTION_TYPE,
  event: SELECT_ACTION_TYPE,
  update: SELECT_ACTION_TYPE
}, noop$2);
registerAction({
  type: UNSELECT_ACTION_TYPE,
  event: UNSELECT_ACTION_TYPE,
  update: UNSELECT_ACTION_TYPE
}, noop$2);
registerAction({
  type: TOGGLE_SELECT_ACTION_TYPE,
  event: TOGGLE_SELECT_ACTION_TYPE,
  update: TOGGLE_SELECT_ACTION_TYPE
}, noop$2);
registerTheme("light", lightTheme);
registerTheme("dark", theme);
function dataIndexMapValueLength(valNumOrArrLengthMoreThan2) {
  return valNumOrArrLengthMoreThan2 == null ? 0 : valNumOrArrLengthMoreThan2.length || 1;
}
function defaultKeyGetter(item) {
  return item;
}
var DataDiffer = (
  /** @class */
  function() {
    function DataDiffer2(oldArr, newArr, oldKeyGetter, newKeyGetter, context, diffMode) {
      this._old = oldArr;
      this._new = newArr;
      this._oldKeyGetter = oldKeyGetter || defaultKeyGetter;
      this._newKeyGetter = newKeyGetter || defaultKeyGetter;
      this.context = context;
      this._diffModeMultiple = diffMode === "multiple";
    }
    DataDiffer2.prototype.add = function(func) {
      this._add = func;
      return this;
    };
    DataDiffer2.prototype.update = function(func) {
      this._update = func;
      return this;
    };
    DataDiffer2.prototype.updateManyToOne = function(func) {
      this._updateManyToOne = func;
      return this;
    };
    DataDiffer2.prototype.updateOneToMany = function(func) {
      this._updateOneToMany = func;
      return this;
    };
    DataDiffer2.prototype.updateManyToMany = function(func) {
      this._updateManyToMany = func;
      return this;
    };
    DataDiffer2.prototype.remove = function(func) {
      this._remove = func;
      return this;
    };
    DataDiffer2.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    };
    DataDiffer2.prototype._executeOneToOne = function() {
      var oldArr = this._old;
      var newArr = this._new;
      var newDataIndexMap = {};
      var oldDataKeyArr = new Array(oldArr.length);
      var newDataKeyArr = new Array(newArr.length);
      this._initIndexMap(oldArr, null, oldDataKeyArr, "_oldKeyGetter");
      this._initIndexMap(newArr, newDataIndexMap, newDataKeyArr, "_newKeyGetter");
      for (var i = 0; i < oldArr.length; i++) {
        var oldKey = oldDataKeyArr[i];
        var newIdxMapVal = newDataIndexMap[oldKey];
        var newIdxMapValLen = dataIndexMapValueLength(newIdxMapVal);
        if (newIdxMapValLen > 1) {
          var newIdx = newIdxMapVal.shift();
          if (newIdxMapVal.length === 1) {
            newDataIndexMap[oldKey] = newIdxMapVal[0];
          }
          this._update && this._update(newIdx, i);
        } else if (newIdxMapValLen === 1) {
          newDataIndexMap[oldKey] = null;
          this._update && this._update(newIdxMapVal, i);
        } else {
          this._remove && this._remove(i);
        }
      }
      this._performRestAdd(newDataKeyArr, newDataIndexMap);
    };
    DataDiffer2.prototype._executeMultiple = function() {
      var oldArr = this._old;
      var newArr = this._new;
      var oldDataIndexMap = {};
      var newDataIndexMap = {};
      var oldDataKeyArr = [];
      var newDataKeyArr = [];
      this._initIndexMap(oldArr, oldDataIndexMap, oldDataKeyArr, "_oldKeyGetter");
      this._initIndexMap(newArr, newDataIndexMap, newDataKeyArr, "_newKeyGetter");
      for (var i = 0; i < oldDataKeyArr.length; i++) {
        var oldKey = oldDataKeyArr[i];
        var oldIdxMapVal = oldDataIndexMap[oldKey];
        var newIdxMapVal = newDataIndexMap[oldKey];
        var oldIdxMapValLen = dataIndexMapValueLength(oldIdxMapVal);
        var newIdxMapValLen = dataIndexMapValueLength(newIdxMapVal);
        if (oldIdxMapValLen > 1 && newIdxMapValLen === 1) {
          this._updateManyToOne && this._updateManyToOne(newIdxMapVal, oldIdxMapVal);
          newDataIndexMap[oldKey] = null;
        } else if (oldIdxMapValLen === 1 && newIdxMapValLen > 1) {
          this._updateOneToMany && this._updateOneToMany(newIdxMapVal, oldIdxMapVal);
          newDataIndexMap[oldKey] = null;
        } else if (oldIdxMapValLen === 1 && newIdxMapValLen === 1) {
          this._update && this._update(newIdxMapVal, oldIdxMapVal);
          newDataIndexMap[oldKey] = null;
        } else if (oldIdxMapValLen > 1 && newIdxMapValLen > 1) {
          this._updateManyToMany && this._updateManyToMany(newIdxMapVal, oldIdxMapVal);
          newDataIndexMap[oldKey] = null;
        } else if (oldIdxMapValLen > 1) {
          for (var i_1 = 0; i_1 < oldIdxMapValLen; i_1++) {
            this._remove && this._remove(oldIdxMapVal[i_1]);
          }
        } else {
          this._remove && this._remove(oldIdxMapVal);
        }
      }
      this._performRestAdd(newDataKeyArr, newDataIndexMap);
    };
    DataDiffer2.prototype._performRestAdd = function(newDataKeyArr, newDataIndexMap) {
      for (var i = 0; i < newDataKeyArr.length; i++) {
        var newKey = newDataKeyArr[i];
        var newIdxMapVal = newDataIndexMap[newKey];
        var idxMapValLen = dataIndexMapValueLength(newIdxMapVal);
        if (idxMapValLen > 1) {
          for (var j = 0; j < idxMapValLen; j++) {
            this._add && this._add(newIdxMapVal[j]);
          }
        } else if (idxMapValLen === 1) {
          this._add && this._add(newIdxMapVal);
        }
        newDataIndexMap[newKey] = null;
      }
    };
    DataDiffer2.prototype._initIndexMap = function(arr, map2, keyArr, keyGetterName) {
      var cbModeMultiple = this._diffModeMultiple;
      for (var i = 0; i < arr.length; i++) {
        var key = "_ec_" + this[keyGetterName](arr[i], i);
        if (!cbModeMultiple) {
          keyArr[i] = key;
        }
        if (!map2) {
          continue;
        }
        var idxMapVal = map2[key];
        var idxMapValLen = dataIndexMapValueLength(idxMapVal);
        if (idxMapValLen === 0) {
          map2[key] = i;
          if (cbModeMultiple) {
            keyArr.push(key);
          }
        } else if (idxMapValLen === 1) {
          map2[key] = [idxMapVal, i];
        } else {
          idxMapVal.push(i);
        }
      }
    };
    return DataDiffer2;
  }()
);
var DimensionUserOuput = (
  /** @class */
  function() {
    function DimensionUserOuput2(encode, dimRequest) {
      this._encode = encode;
      this._schema = dimRequest;
    }
    DimensionUserOuput2.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    };
    DimensionUserOuput2.prototype._getFullDimensionNames = function() {
      if (!this._cachedDimNames) {
        this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : [];
      }
      return this._cachedDimNames;
    };
    return DimensionUserOuput2;
  }()
);
function summarizeDimensions(data, schema) {
  var summary = {};
  var encode = summary.encode = {};
  var notExtraCoordDimMap = createHashMap();
  var defaultedLabel = [];
  var defaultedTooltip = [];
  var userOutputEncode = {};
  each$3(data.dimensions, function(dimName) {
    var dimItem = data.getDimensionInfo(dimName);
    var coordDim = dimItem.coordDim;
    if (coordDim) {
      var coordDimIndex = dimItem.coordDimIndex;
      getOrCreateEncodeArr(encode, coordDim)[coordDimIndex] = dimName;
      if (!dimItem.isExtraCoord) {
        notExtraCoordDimMap.set(coordDim, 1);
        if (mayLabelDimType(dimItem.type)) {
          defaultedLabel[0] = dimName;
        }
        getOrCreateEncodeArr(userOutputEncode, coordDim)[coordDimIndex] = data.getDimensionIndex(dimItem.name);
      }
      if (dimItem.defaultTooltip) {
        defaultedTooltip.push(dimName);
      }
    }
    VISUAL_DIMENSIONS.each(function(v, otherDim) {
      var encodeArr = getOrCreateEncodeArr(encode, otherDim);
      var dimIndex = dimItem.otherDims[otherDim];
      if (dimIndex != null && dimIndex !== false) {
        encodeArr[dimIndex] = dimItem.name;
      }
    });
  });
  var dataDimsOnCoord = [];
  var encodeFirstDimNotExtra = {};
  notExtraCoordDimMap.each(function(v, coordDim) {
    var dimArr = encode[coordDim];
    encodeFirstDimNotExtra[coordDim] = dimArr[0];
    dataDimsOnCoord = dataDimsOnCoord.concat(dimArr);
  });
  summary.dataDimsOnCoord = dataDimsOnCoord;
  summary.dataDimIndicesOnCoord = map$1(dataDimsOnCoord, function(dimName) {
    return data.getDimensionInfo(dimName).storeDimIndex;
  });
  summary.encodeFirstDimNotExtra = encodeFirstDimNotExtra;
  var encodeLabel = encode.label;
  if (encodeLabel && encodeLabel.length) {
    defaultedLabel = encodeLabel.slice();
  }
  var encodeTooltip = encode.tooltip;
  if (encodeTooltip && encodeTooltip.length) {
    defaultedTooltip = encodeTooltip.slice();
  } else if (!defaultedTooltip.length) {
    defaultedTooltip = defaultedLabel.slice();
  }
  encode.defaultedLabel = defaultedLabel;
  encode.defaultedTooltip = defaultedTooltip;
  summary.userOutput = new DimensionUserOuput(userOutputEncode, schema);
  return summary;
}
function getOrCreateEncodeArr(encode, dim) {
  if (!encode.hasOwnProperty(dim)) {
    encode[dim] = [];
  }
  return encode[dim];
}
function getDimensionTypeByAxis(axisType) {
  return axisType === "category" ? "ordinal" : axisType === "time" ? "time" : "float";
}
function mayLabelDimType(dimType) {
  return !(dimType === "ordinal" || dimType === "time");
}
var SeriesDimensionDefine = (
  /** @class */
  /* @__PURE__ */ function() {
    function SeriesDimensionDefine2(opt) {
      this.otherDims = {};
      if (opt != null) {
        zrUtil.extend(this, opt);
      }
    }
    return SeriesDimensionDefine2;
  }()
);
var inner$5 = makeInner();
var dimTypeShort = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
};
var SeriesDataSchema = (
  /** @class */
  function() {
    function SeriesDataSchema2(opt) {
      this.dimensions = opt.dimensions;
      this._dimOmitted = opt.dimensionOmitted;
      this.source = opt.source;
      this._fullDimCount = opt.fullDimensionCount;
      this._updateDimOmitted(opt.dimensionOmitted);
    }
    SeriesDataSchema2.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    };
    SeriesDataSchema2.prototype._updateDimOmitted = function(dimensionOmitted) {
      this._dimOmitted = dimensionOmitted;
      if (!dimensionOmitted) {
        return;
      }
      if (!this._dimNameMap) {
        this._dimNameMap = ensureSourceDimNameMap(this.source);
      }
    };
    SeriesDataSchema2.prototype.getSourceDimensionIndex = function(dimName) {
      return retrieve2(this._dimNameMap.get(dimName), -1);
    };
    SeriesDataSchema2.prototype.getSourceDimension = function(dimIndex) {
      var dimensionsDefine = this.source.dimensionsDefine;
      if (dimensionsDefine) {
        return dimensionsDefine[dimIndex];
      }
    };
    SeriesDataSchema2.prototype.makeStoreSchema = function() {
      var dimCount = this._fullDimCount;
      var willRetrieveDataByName = shouldRetrieveDataByName(this.source);
      var makeHashStrict = !shouldOmitUnusedDimensions(dimCount);
      var dimHash = "";
      var dims = [];
      for (var fullDimIdx = 0, seriesDimIdx = 0; fullDimIdx < dimCount; fullDimIdx++) {
        var property = void 0;
        var type = void 0;
        var ordinalMeta = void 0;
        var seriesDimDef = this.dimensions[seriesDimIdx];
        if (seriesDimDef && seriesDimDef.storeDimIndex === fullDimIdx) {
          property = willRetrieveDataByName ? seriesDimDef.name : null;
          type = seriesDimDef.type;
          ordinalMeta = seriesDimDef.ordinalMeta;
          seriesDimIdx++;
        } else {
          var sourceDimDef = this.getSourceDimension(fullDimIdx);
          if (sourceDimDef) {
            property = willRetrieveDataByName ? sourceDimDef.name : null;
            type = sourceDimDef.type;
          }
        }
        dims.push({
          property,
          type,
          ordinalMeta
        });
        if (willRetrieveDataByName && property != null && (!seriesDimDef || !seriesDimDef.isCalculationCoord)) {
          dimHash += makeHashStrict ? property.replace(/\`/g, "`1").replace(/\$/g, "`2") : property;
        }
        dimHash += "$";
        dimHash += dimTypeShort[type] || "f";
        if (ordinalMeta) {
          dimHash += ordinalMeta.uid;
        }
        dimHash += "$";
      }
      var source = this.source;
      var hash = [source.seriesLayoutBy, source.startIndex, dimHash].join("$$");
      return {
        dimensions: dims,
        hash
      };
    };
    SeriesDataSchema2.prototype.makeOutputDimensionNames = function() {
      var result = [];
      for (var fullDimIdx = 0, seriesDimIdx = 0; fullDimIdx < this._fullDimCount; fullDimIdx++) {
        var name_1 = void 0;
        var seriesDimDef = this.dimensions[seriesDimIdx];
        if (seriesDimDef && seriesDimDef.storeDimIndex === fullDimIdx) {
          if (!seriesDimDef.isCalculationCoord) {
            name_1 = seriesDimDef.name;
          }
          seriesDimIdx++;
        } else {
          var sourceDimDef = this.getSourceDimension(fullDimIdx);
          if (sourceDimDef) {
            name_1 = sourceDimDef.name;
          }
        }
        result.push(name_1);
      }
      return result;
    };
    SeriesDataSchema2.prototype.appendCalculationDimension = function(dimDef) {
      this.dimensions.push(dimDef);
      dimDef.isCalculationCoord = true;
      this._fullDimCount++;
      this._updateDimOmitted(true);
    };
    return SeriesDataSchema2;
  }()
);
function isSeriesDataSchema(schema) {
  return schema instanceof SeriesDataSchema;
}
function createDimNameMap(dimsDef) {
  var dataDimNameMap = createHashMap();
  for (var i = 0; i < (dimsDef || []).length; i++) {
    var dimDefItemRaw = dimsDef[i];
    var userDimName = isObject$3(dimDefItemRaw) ? dimDefItemRaw.name : dimDefItemRaw;
    if (userDimName != null && dataDimNameMap.get(userDimName) == null) {
      dataDimNameMap.set(userDimName, i);
    }
  }
  return dataDimNameMap;
}
function ensureSourceDimNameMap(source) {
  var innerSource = inner$5(source);
  return innerSource.dimNameMap || (innerSource.dimNameMap = createDimNameMap(source.dimensionsDefine));
}
function shouldOmitUnusedDimensions(dimCount) {
  return dimCount > 30;
}
var isObject = zrUtil.isObject;
var map = zrUtil.map;
var CtorInt32Array = typeof Int32Array === "undefined" ? Array : Int32Array;
var ID_PREFIX = "e\0\0";
var INDEX_NOT_FOUND = -1;
var TRANSFERABLE_PROPERTIES = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"];
var CLONE_PROPERTIES = ["_approximateExtent"];
var prepareInvertedIndex;
var getId;
var getIdNameFromStore;
var normalizeDimensions;
var transferProperties;
var cloneListForMapAndSample;
var makeIdFromName;
var SeriesData = (
  /** @class */
  function() {
    function SeriesData2(dimensionsInput, hostModel) {
      this.type = "list";
      this._dimOmitted = false;
      this._nameList = [];
      this._idList = [];
      this._visual = {};
      this._layout = {};
      this._itemVisuals = [];
      this._itemLayouts = [];
      this._graphicEls = [];
      this._approximateExtent = {};
      this._calculationInfo = {};
      this.hasItemOption = false;
      this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"];
      this.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
      this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
      var dimensions;
      var assignStoreDimIdx = false;
      if (isSeriesDataSchema(dimensionsInput)) {
        dimensions = dimensionsInput.dimensions;
        this._dimOmitted = dimensionsInput.isDimensionOmitted();
        this._schema = dimensionsInput;
      } else {
        assignStoreDimIdx = true;
        dimensions = dimensionsInput;
      }
      dimensions = dimensions || ["x", "y"];
      var dimensionInfos = {};
      var dimensionNames = [];
      var invertedIndicesMap = {};
      var needsHasOwn = false;
      var emptyObj = {};
      for (var i = 0; i < dimensions.length; i++) {
        var dimInfoInput = dimensions[i];
        var dimensionInfo = zrUtil.isString(dimInfoInput) ? new SeriesDimensionDefine({
          name: dimInfoInput
        }) : !(dimInfoInput instanceof SeriesDimensionDefine) ? new SeriesDimensionDefine(dimInfoInput) : dimInfoInput;
        var dimensionName = dimensionInfo.name;
        dimensionInfo.type = dimensionInfo.type || "float";
        if (!dimensionInfo.coordDim) {
          dimensionInfo.coordDim = dimensionName;
          dimensionInfo.coordDimIndex = 0;
        }
        var otherDims = dimensionInfo.otherDims = dimensionInfo.otherDims || {};
        dimensionNames.push(dimensionName);
        dimensionInfos[dimensionName] = dimensionInfo;
        if (emptyObj[dimensionName] != null) {
          needsHasOwn = true;
        }
        if (dimensionInfo.createInvertedIndices) {
          invertedIndicesMap[dimensionName] = [];
        }
        if (otherDims.itemName === 0) {
          this._nameDimIdx = i;
        }
        if (otherDims.itemId === 0) {
          this._idDimIdx = i;
        }
        if (assignStoreDimIdx) {
          dimensionInfo.storeDimIndex = i;
        }
      }
      this.dimensions = dimensionNames;
      this._dimInfos = dimensionInfos;
      this._initGetDimensionInfo(needsHasOwn);
      this.hostModel = hostModel;
      this._invertedIndicesMap = invertedIndicesMap;
      if (this._dimOmitted) {
        var dimIdxToName_1 = this._dimIdxToName = zrUtil.createHashMap();
        zrUtil.each(dimensionNames, function(dimName) {
          dimIdxToName_1.set(dimensionInfos[dimName].storeDimIndex, dimName);
        });
      }
    }
    SeriesData2.prototype.getDimension = function(dim) {
      var dimIdx = this._recognizeDimIndex(dim);
      if (dimIdx == null) {
        return dim;
      }
      dimIdx = dim;
      if (!this._dimOmitted) {
        return this.dimensions[dimIdx];
      }
      var dimName = this._dimIdxToName.get(dimIdx);
      if (dimName != null) {
        return dimName;
      }
      var sourceDimDef = this._schema.getSourceDimension(dimIdx);
      if (sourceDimDef) {
        return sourceDimDef.name;
      }
    };
    SeriesData2.prototype.getDimensionIndex = function(dim) {
      var dimIdx = this._recognizeDimIndex(dim);
      if (dimIdx != null) {
        return dimIdx;
      }
      if (dim == null) {
        return -1;
      }
      var dimInfo = this._getDimInfo(dim);
      return dimInfo ? dimInfo.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(dim) : -1;
    };
    SeriesData2.prototype._recognizeDimIndex = function(dim) {
      if (zrUtil.isNumber(dim) || dim != null && !isNaN(dim) && !this._getDimInfo(dim) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(dim) < 0)) {
        return +dim;
      }
    };
    SeriesData2.prototype._getStoreDimIndex = function(dim) {
      var dimIdx = this.getDimensionIndex(dim);
      return dimIdx;
    };
    SeriesData2.prototype.getDimensionInfo = function(dim) {
      return this._getDimInfo(this.getDimension(dim));
    };
    SeriesData2.prototype._initGetDimensionInfo = function(needsHasOwn) {
      var dimensionInfos = this._dimInfos;
      this._getDimInfo = needsHasOwn ? function(dimName) {
        return dimensionInfos.hasOwnProperty(dimName) ? dimensionInfos[dimName] : void 0;
      } : function(dimName) {
        return dimensionInfos[dimName];
      };
    };
    SeriesData2.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    };
    SeriesData2.prototype.mapDimension = function(coordDim, idx) {
      var dimensionsSummary = this._dimSummary;
      if (idx == null) {
        return dimensionsSummary.encodeFirstDimNotExtra[coordDim];
      }
      var dims = dimensionsSummary.encode[coordDim];
      return dims ? dims[idx] : null;
    };
    SeriesData2.prototype.mapDimensionsAll = function(coordDim) {
      var dimensionsSummary = this._dimSummary;
      var dims = dimensionsSummary.encode[coordDim];
      return (dims || []).slice();
    };
    SeriesData2.prototype.getStore = function() {
      return this._store;
    };
    SeriesData2.prototype.initData = function(data, nameList, dimValueGetter) {
      var _this = this;
      var store;
      if (data instanceof DataStore) {
        store = data;
      }
      if (!store) {
        var dimensions = this.dimensions;
        var provider = isSourceInstance(data) || zrUtil.isArrayLike(data) ? new DefaultDataProvider(data, dimensions.length) : data;
        store = new DataStore();
        var dimensionInfos = map(dimensions, function(dimName) {
          return {
            type: _this._dimInfos[dimName].type,
            property: dimName
          };
        });
        store.initData(provider, dimensionInfos, dimValueGetter);
      }
      this._store = store;
      this._nameList = (nameList || []).slice();
      this._idList = [];
      this._nameRepeatCount = {};
      this._doInit(0, store.count());
      this._dimSummary = summarizeDimensions(this, this._schema);
      this.userOutput = this._dimSummary.userOutput;
    };
    SeriesData2.prototype.appendData = function(data) {
      var range = this._store.appendData(data);
      this._doInit(range[0], range[1]);
    };
    SeriesData2.prototype.appendValues = function(values, names) {
      var _a2 = this._store.appendValues(values, names.length), start = _a2.start, end = _a2.end;
      var shouldMakeIdFromName = this._shouldMakeIdFromName();
      this._updateOrdinalMeta();
      if (names) {
        for (var idx = start; idx < end; idx++) {
          var sourceIdx = idx - start;
          this._nameList[idx] = names[sourceIdx];
          if (shouldMakeIdFromName) {
            makeIdFromName(this, idx);
          }
        }
      }
    };
    SeriesData2.prototype._updateOrdinalMeta = function() {
      var store = this._store;
      var dimensions = this.dimensions;
      for (var i = 0; i < dimensions.length; i++) {
        var dimInfo = this._dimInfos[dimensions[i]];
        if (dimInfo.ordinalMeta) {
          store.collectOrdinalMeta(dimInfo.storeDimIndex, dimInfo.ordinalMeta);
        }
      }
    };
    SeriesData2.prototype._shouldMakeIdFromName = function() {
      var provider = this._store.getProvider();
      return this._idDimIdx == null && provider.getSource().sourceFormat !== SOURCE_FORMAT_TYPED_ARRAY && !provider.fillStorage;
    };
    SeriesData2.prototype._doInit = function(start, end) {
      if (start >= end) {
        return;
      }
      var store = this._store;
      var provider = store.getProvider();
      this._updateOrdinalMeta();
      var nameList = this._nameList;
      var idList = this._idList;
      var sourceFormat = provider.getSource().sourceFormat;
      var isFormatOriginal = sourceFormat === SOURCE_FORMAT_ORIGINAL;
      if (isFormatOriginal && !provider.pure) {
        var sharedDataItem = [];
        for (var idx = start; idx < end; idx++) {
          var dataItem = provider.getItem(idx, sharedDataItem);
          if (!this.hasItemOption && isDataItemOption(dataItem)) {
            this.hasItemOption = true;
          }
          if (dataItem) {
            var itemName = dataItem.name;
            if (nameList[idx] == null && itemName != null) {
              nameList[idx] = convertOptionIdName(itemName, null);
            }
            var itemId = dataItem.id;
            if (idList[idx] == null && itemId != null) {
              idList[idx] = convertOptionIdName(itemId, null);
            }
          }
        }
      }
      if (this._shouldMakeIdFromName()) {
        for (var idx = start; idx < end; idx++) {
          makeIdFromName(this, idx);
        }
      }
      prepareInvertedIndex(this);
    };
    SeriesData2.prototype.getApproximateExtent = function(dim) {
      return this._approximateExtent[dim] || this._store.getDataExtent(this._getStoreDimIndex(dim));
    };
    SeriesData2.prototype.setApproximateExtent = function(extent, dim) {
      dim = this.getDimension(dim);
      this._approximateExtent[dim] = extent.slice();
    };
    SeriesData2.prototype.getCalculationInfo = function(key) {
      return this._calculationInfo[key];
    };
    SeriesData2.prototype.setCalculationInfo = function(key, value) {
      isObject(key) ? zrUtil.extend(this._calculationInfo, key) : this._calculationInfo[key] = value;
    };
    SeriesData2.prototype.getName = function(idx) {
      var rawIndex = this.getRawIndex(idx);
      var name = this._nameList[rawIndex];
      if (name == null && this._nameDimIdx != null) {
        name = getIdNameFromStore(this, this._nameDimIdx, rawIndex);
      }
      if (name == null) {
        name = "";
      }
      return name;
    };
    SeriesData2.prototype._getCategory = function(dimIdx, idx) {
      var ordinal = this._store.get(dimIdx, idx);
      var ordinalMeta = this._store.getOrdinalMeta(dimIdx);
      if (ordinalMeta) {
        return ordinalMeta.categories[ordinal];
      }
      return ordinal;
    };
    SeriesData2.prototype.getId = function(idx) {
      return getId(this, this.getRawIndex(idx));
    };
    SeriesData2.prototype.count = function() {
      return this._store.count();
    };
    SeriesData2.prototype.get = function(dim, idx) {
      var store = this._store;
      var dimInfo = this._dimInfos[dim];
      if (dimInfo) {
        return store.get(dimInfo.storeDimIndex, idx);
      }
    };
    SeriesData2.prototype.getByRawIndex = function(dim, rawIdx) {
      var store = this._store;
      var dimInfo = this._dimInfos[dim];
      if (dimInfo) {
        return store.getByRawIndex(dimInfo.storeDimIndex, rawIdx);
      }
    };
    SeriesData2.prototype.getIndices = function() {
      return this._store.getIndices();
    };
    SeriesData2.prototype.getDataExtent = function(dim) {
      return this._store.getDataExtent(this._getStoreDimIndex(dim));
    };
    SeriesData2.prototype.getSum = function(dim) {
      return this._store.getSum(this._getStoreDimIndex(dim));
    };
    SeriesData2.prototype.getMedian = function(dim) {
      return this._store.getMedian(this._getStoreDimIndex(dim));
    };
    SeriesData2.prototype.getValues = function(dimensions, idx) {
      var _this = this;
      var store = this._store;
      return zrUtil.isArray(dimensions) ? store.getValues(map(dimensions, function(dim) {
        return _this._getStoreDimIndex(dim);
      }), idx) : store.getValues(dimensions);
    };
    SeriesData2.prototype.hasValue = function(idx) {
      var dataDimIndicesOnCoord = this._dimSummary.dataDimIndicesOnCoord;
      for (var i = 0, len = dataDimIndicesOnCoord.length; i < len; i++) {
        if (isNaN(this._store.get(dataDimIndicesOnCoord[i], idx))) {
          return false;
        }
      }
      return true;
    };
    SeriesData2.prototype.indexOfName = function(name) {
      for (var i = 0, len = this._store.count(); i < len; i++) {
        if (this.getName(i) === name) {
          return i;
        }
      }
      return -1;
    };
    SeriesData2.prototype.getRawIndex = function(idx) {
      return this._store.getRawIndex(idx);
    };
    SeriesData2.prototype.indexOfRawIndex = function(rawIndex) {
      return this._store.indexOfRawIndex(rawIndex);
    };
    SeriesData2.prototype.rawIndexOf = function(dim, value) {
      var invertedIndices = dim && this._invertedIndicesMap[dim];
      var rawIndex = invertedIndices[value];
      if (rawIndex == null || isNaN(rawIndex)) {
        return INDEX_NOT_FOUND;
      }
      return rawIndex;
    };
    SeriesData2.prototype.indicesOfNearest = function(dim, value, maxDistance) {
      return this._store.indicesOfNearest(this._getStoreDimIndex(dim), value, maxDistance);
    };
    SeriesData2.prototype.each = function(dims, cb, ctx) {
      if (zrUtil.isFunction(dims)) {
        ctx = cb;
        cb = dims;
        dims = [];
      }
      var fCtx = ctx || this;
      var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
      this._store.each(dimIndices, fCtx ? zrUtil.bind(cb, fCtx) : cb);
    };
    SeriesData2.prototype.filterSelf = function(dims, cb, ctx) {
      if (zrUtil.isFunction(dims)) {
        ctx = cb;
        cb = dims;
        dims = [];
      }
      var fCtx = ctx || this;
      var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
      this._store = this._store.filter(dimIndices, fCtx ? zrUtil.bind(cb, fCtx) : cb);
      return this;
    };
    SeriesData2.prototype.selectRange = function(range) {
      var _this = this;
      var innerRange = {};
      var dims = zrUtil.keys(range);
      zrUtil.each(dims, function(dim) {
        var dimIdx = _this._getStoreDimIndex(dim);
        innerRange[dimIdx] = range[dim];
      });
      this._store = this._store.selectRange(innerRange);
      return this;
    };
    SeriesData2.prototype.mapArray = function(dims, cb, ctx) {
      if (zrUtil.isFunction(dims)) {
        ctx = cb;
        cb = dims;
        dims = [];
      }
      ctx = ctx || this;
      var result = [];
      this.each(dims, function() {
        result.push(cb && cb.apply(this, arguments));
      }, ctx);
      return result;
    };
    SeriesData2.prototype.map = function(dims, cb, ctx, ctxCompat) {
      var fCtx = ctx || ctxCompat || this;
      var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
      var list = cloneListForMapAndSample(this);
      list._store = this._store.map(dimIndices, fCtx ? zrUtil.bind(cb, fCtx) : cb);
      return list;
    };
    SeriesData2.prototype.modify = function(dims, cb, ctx, ctxCompat) {
      var fCtx = ctx || ctxCompat || this;
      var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
      this._store.modify(dimIndices, fCtx ? zrUtil.bind(cb, fCtx) : cb);
    };
    SeriesData2.prototype.downSample = function(dimension, rate, sampleValue, sampleIndex) {
      var list = cloneListForMapAndSample(this);
      list._store = this._store.downSample(this._getStoreDimIndex(dimension), rate, sampleValue, sampleIndex);
      return list;
    };
    SeriesData2.prototype.lttbDownSample = function(valueDimension, rate) {
      var list = cloneListForMapAndSample(this);
      list._store = this._store.lttbDownSample(this._getStoreDimIndex(valueDimension), rate);
      return list;
    };
    SeriesData2.prototype.getRawDataItem = function(idx) {
      return this._store.getRawDataItem(idx);
    };
    SeriesData2.prototype.getItemModel = function(idx) {
      var hostModel = this.hostModel;
      var dataItem = this.getRawDataItem(idx);
      return new Model(dataItem, hostModel, hostModel && hostModel.ecModel);
    };
    SeriesData2.prototype.diff = function(otherList) {
      var thisList = this;
      return new DataDiffer(otherList ? otherList.getStore().getIndices() : [], this.getStore().getIndices(), function(idx) {
        return getId(otherList, idx);
      }, function(idx) {
        return getId(thisList, idx);
      });
    };
    SeriesData2.prototype.getVisual = function(key) {
      var visual = this._visual;
      return visual && visual[key];
    };
    SeriesData2.prototype.setVisual = function(kvObj, val) {
      this._visual = this._visual || {};
      if (isObject(kvObj)) {
        zrUtil.extend(this._visual, kvObj);
      } else {
        this._visual[kvObj] = val;
      }
    };
    SeriesData2.prototype.getItemVisual = function(idx, key) {
      var itemVisual = this._itemVisuals[idx];
      var val = itemVisual && itemVisual[key];
      if (val == null) {
        return this.getVisual(key);
      }
      return val;
    };
    SeriesData2.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    };
    SeriesData2.prototype.ensureUniqueItemVisual = function(idx, key) {
      var itemVisuals = this._itemVisuals;
      var itemVisual = itemVisuals[idx];
      if (!itemVisual) {
        itemVisual = itemVisuals[idx] = {};
      }
      var val = itemVisual[key];
      if (val == null) {
        val = this.getVisual(key);
        if (zrUtil.isArray(val)) {
          val = val.slice();
        } else if (isObject(val)) {
          val = zrUtil.extend({}, val);
        }
        itemVisual[key] = val;
      }
      return val;
    };
    SeriesData2.prototype.setItemVisual = function(idx, key, value) {
      var itemVisual = this._itemVisuals[idx] || {};
      this._itemVisuals[idx] = itemVisual;
      if (isObject(key)) {
        zrUtil.extend(itemVisual, key);
      } else {
        itemVisual[key] = value;
      }
    };
    SeriesData2.prototype.clearAllVisual = function() {
      this._visual = {};
      this._itemVisuals = [];
    };
    SeriesData2.prototype.setLayout = function(key, val) {
      isObject(key) ? zrUtil.extend(this._layout, key) : this._layout[key] = val;
    };
    SeriesData2.prototype.getLayout = function(key) {
      return this._layout[key];
    };
    SeriesData2.prototype.getItemLayout = function(idx) {
      return this._itemLayouts[idx];
    };
    SeriesData2.prototype.setItemLayout = function(idx, layout2, merge2) {
      this._itemLayouts[idx] = merge2 ? zrUtil.extend(this._itemLayouts[idx] || {}, layout2) : layout2;
    };
    SeriesData2.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    };
    SeriesData2.prototype.setItemGraphicEl = function(idx, el) {
      var seriesIndex = this.hostModel && this.hostModel.seriesIndex;
      setCommonECData(seriesIndex, this.dataType, idx, el);
      this._graphicEls[idx] = el;
    };
    SeriesData2.prototype.getItemGraphicEl = function(idx) {
      return this._graphicEls[idx];
    };
    SeriesData2.prototype.eachItemGraphicEl = function(cb, context) {
      zrUtil.each(this._graphicEls, function(el, idx) {
        if (el) {
          cb && cb.call(context, el, idx);
        }
      });
    };
    SeriesData2.prototype.cloneShallow = function(list) {
      if (!list) {
        list = new SeriesData2(this._schema ? this._schema : map(this.dimensions, this._getDimInfo, this), this.hostModel);
      }
      transferProperties(list, this);
      list._store = this._store;
      return list;
    };
    SeriesData2.prototype.wrapMethod = function(methodName, injectFunction) {
      var originalMethod = this[methodName];
      if (!zrUtil.isFunction(originalMethod)) {
        return;
      }
      this.__wrappedMethods = this.__wrappedMethods || [];
      this.__wrappedMethods.push(methodName);
      this[methodName] = function() {
        var res = originalMethod.apply(this, arguments);
        return injectFunction.apply(this, [res].concat(zrUtil.slice(arguments)));
      };
    };
    SeriesData2.internalField = function() {
      prepareInvertedIndex = function(data) {
        var invertedIndicesMap = data._invertedIndicesMap;
        zrUtil.each(invertedIndicesMap, function(invertedIndices, dim) {
          var dimInfo = data._dimInfos[dim];
          var ordinalMeta = dimInfo.ordinalMeta;
          var store = data._store;
          if (ordinalMeta) {
            invertedIndices = invertedIndicesMap[dim] = new CtorInt32Array(ordinalMeta.categories.length);
            for (var i = 0; i < invertedIndices.length; i++) {
              invertedIndices[i] = INDEX_NOT_FOUND;
            }
            for (var i = 0; i < store.count(); i++) {
              invertedIndices[store.get(dimInfo.storeDimIndex, i)] = i;
            }
          }
        });
      };
      getIdNameFromStore = function(data, dimIdx, idx) {
        return convertOptionIdName(data._getCategory(dimIdx, idx), null);
      };
      getId = function(data, rawIndex) {
        var id = data._idList[rawIndex];
        if (id == null && data._idDimIdx != null) {
          id = getIdNameFromStore(data, data._idDimIdx, rawIndex);
        }
        if (id == null) {
          id = ID_PREFIX + rawIndex;
        }
        return id;
      };
      normalizeDimensions = function(dimensions) {
        if (!zrUtil.isArray(dimensions)) {
          dimensions = dimensions != null ? [dimensions] : [];
        }
        return dimensions;
      };
      cloneListForMapAndSample = function(original) {
        var list = new SeriesData2(original._schema ? original._schema : map(original.dimensions, original._getDimInfo, original), original.hostModel);
        transferProperties(list, original);
        return list;
      };
      transferProperties = function(target, source) {
        zrUtil.each(TRANSFERABLE_PROPERTIES.concat(source.__wrappedMethods || []), function(propName) {
          if (source.hasOwnProperty(propName)) {
            target[propName] = source[propName];
          }
        });
        target.__wrappedMethods = source.__wrappedMethods;
        zrUtil.each(CLONE_PROPERTIES, function(propName) {
          target[propName] = zrUtil.clone(source[propName]);
        });
        target._calculationInfo = zrUtil.extend({}, source._calculationInfo);
      };
      makeIdFromName = function(data, idx) {
        var nameList = data._nameList;
        var idList = data._idList;
        var nameDimIdx = data._nameDimIdx;
        var idDimIdx = data._idDimIdx;
        var name = nameList[idx];
        var id = idList[idx];
        if (name == null && nameDimIdx != null) {
          nameList[idx] = name = getIdNameFromStore(data, nameDimIdx, idx);
        }
        if (id == null && idDimIdx != null) {
          idList[idx] = id = getIdNameFromStore(data, idDimIdx, idx);
        }
        if (id == null && name != null) {
          var nameRepeatCount = data._nameRepeatCount;
          var nmCnt = nameRepeatCount[name] = (nameRepeatCount[name] || 0) + 1;
          id = name;
          if (nmCnt > 1) {
            id += "__ec__" + nmCnt;
          }
          idList[idx] = id;
        }
      };
    }();
    return SeriesData2;
  }()
);
function prepareSeriesDataSchema(source, opt) {
  if (!isSourceInstance(source)) {
    source = createSourceFromSeriesDataOption(source);
  }
  opt = opt || {};
  var sysDims = opt.coordDimensions || [];
  var dimsDef = opt.dimensionsDefine || source.dimensionsDefine || [];
  var coordDimNameMap = createHashMap();
  var resultList = [];
  var dimCount = getDimCount(source, sysDims, dimsDef, opt.dimensionsCount);
  var omitUnusedDimensions = opt.canOmitUnusedDimensions && shouldOmitUnusedDimensions(dimCount);
  var isUsingSourceDimensionsDef = dimsDef === source.dimensionsDefine;
  var dataDimNameMap = isUsingSourceDimensionsDef ? ensureSourceDimNameMap(source) : createDimNameMap(dimsDef);
  var encodeDef = opt.encodeDefine;
  if (!encodeDef && opt.encodeDefaulter) {
    encodeDef = opt.encodeDefaulter(source, dimCount);
  }
  var encodeDefMap = createHashMap(encodeDef);
  var indicesMap = new CtorInt32Array$1(dimCount);
  for (var i = 0; i < indicesMap.length; i++) {
    indicesMap[i] = -1;
  }
  function getResultItem(dimIdx) {
    var idx = indicesMap[dimIdx];
    if (idx < 0) {
      var dimDefItemRaw = dimsDef[dimIdx];
      var dimDefItem = isObject$3(dimDefItemRaw) ? dimDefItemRaw : {
        name: dimDefItemRaw
      };
      var resultItem2 = new SeriesDimensionDefine();
      var userDimName = dimDefItem.name;
      if (userDimName != null && dataDimNameMap.get(userDimName) != null) {
        resultItem2.name = resultItem2.displayName = userDimName;
      }
      dimDefItem.type != null && (resultItem2.type = dimDefItem.type);
      dimDefItem.displayName != null && (resultItem2.displayName = dimDefItem.displayName);
      var newIdx = resultList.length;
      indicesMap[dimIdx] = newIdx;
      resultItem2.storeDimIndex = dimIdx;
      resultList.push(resultItem2);
      return resultItem2;
    }
    return resultList[idx];
  }
  if (!omitUnusedDimensions) {
    for (var i = 0; i < dimCount; i++) {
      getResultItem(i);
    }
  }
  encodeDefMap.each(function(dataDimsRaw, coordDim2) {
    var dataDims = normalizeToArray(dataDimsRaw).slice();
    if (dataDims.length === 1 && !isString$2(dataDims[0]) && dataDims[0] < 0) {
      encodeDefMap.set(coordDim2, false);
      return;
    }
    var validDataDims = encodeDefMap.set(coordDim2, []);
    each$3(dataDims, function(resultDimIdxOrName, idx) {
      var resultDimIdx2 = isString$2(resultDimIdxOrName) ? dataDimNameMap.get(resultDimIdxOrName) : resultDimIdxOrName;
      if (resultDimIdx2 != null && resultDimIdx2 < dimCount) {
        validDataDims[idx] = resultDimIdx2;
        applyDim(getResultItem(resultDimIdx2), coordDim2, idx);
      }
    });
  });
  var availDimIdx = 0;
  each$3(sysDims, function(sysDimItemRaw) {
    var coordDim2;
    var sysDimItemDimsDef;
    var sysDimItemOtherDims;
    var sysDimItem;
    if (isString$2(sysDimItemRaw)) {
      coordDim2 = sysDimItemRaw;
      sysDimItem = {};
    } else {
      sysDimItem = sysDimItemRaw;
      coordDim2 = sysDimItem.name;
      var ordinalMeta = sysDimItem.ordinalMeta;
      sysDimItem.ordinalMeta = null;
      sysDimItem = extend({}, sysDimItem);
      sysDimItem.ordinalMeta = ordinalMeta;
      sysDimItemDimsDef = sysDimItem.dimsDef;
      sysDimItemOtherDims = sysDimItem.otherDims;
      sysDimItem.name = sysDimItem.coordDim = sysDimItem.coordDimIndex = sysDimItem.dimsDef = sysDimItem.otherDims = null;
    }
    var dataDims = encodeDefMap.get(coordDim2);
    if (dataDims === false) {
      return;
    }
    dataDims = normalizeToArray(dataDims);
    if (!dataDims.length) {
      for (var i2 = 0; i2 < (sysDimItemDimsDef && sysDimItemDimsDef.length || 1); i2++) {
        while (availDimIdx < dimCount && getResultItem(availDimIdx).coordDim != null) {
          availDimIdx++;
        }
        availDimIdx < dimCount && dataDims.push(availDimIdx++);
      }
    }
    each$3(dataDims, function(resultDimIdx2, coordDimIndex) {
      var resultItem2 = getResultItem(resultDimIdx2);
      if (isUsingSourceDimensionsDef && sysDimItem.type != null) {
        resultItem2.type = sysDimItem.type;
      }
      applyDim(defaults(resultItem2, sysDimItem), coordDim2, coordDimIndex);
      if (resultItem2.name == null && sysDimItemDimsDef) {
        var sysDimItemDimsDefItem = sysDimItemDimsDef[coordDimIndex];
        !isObject$3(sysDimItemDimsDefItem) && (sysDimItemDimsDefItem = {
          name: sysDimItemDimsDefItem
        });
        resultItem2.name = resultItem2.displayName = sysDimItemDimsDefItem.name;
        resultItem2.defaultTooltip = sysDimItemDimsDefItem.defaultTooltip;
      }
      sysDimItemOtherDims && defaults(resultItem2.otherDims, sysDimItemOtherDims);
    });
  });
  function applyDim(resultItem2, coordDim2, coordDimIndex) {
    if (VISUAL_DIMENSIONS.get(coordDim2) != null) {
      resultItem2.otherDims[coordDim2] = coordDimIndex;
    } else {
      resultItem2.coordDim = coordDim2;
      resultItem2.coordDimIndex = coordDimIndex;
      coordDimNameMap.set(coordDim2, true);
    }
  }
  var generateCoord = opt.generateCoord;
  var generateCoordCount = opt.generateCoordCount;
  var fromZero = generateCoordCount != null;
  generateCoordCount = generateCoord ? generateCoordCount || 1 : 0;
  var extra = generateCoord || "value";
  function ifNoNameFillWithCoordName(resultItem2) {
    if (resultItem2.name == null) {
      resultItem2.name = resultItem2.coordDim;
    }
  }
  if (!omitUnusedDimensions) {
    for (var resultDimIdx = 0; resultDimIdx < dimCount; resultDimIdx++) {
      var resultItem = getResultItem(resultDimIdx);
      var coordDim = resultItem.coordDim;
      if (coordDim == null) {
        resultItem.coordDim = genCoordDimName(extra, coordDimNameMap, fromZero);
        resultItem.coordDimIndex = 0;
        if (!generateCoord || generateCoordCount <= 0) {
          resultItem.isExtraCoord = true;
        }
        generateCoordCount--;
      }
      ifNoNameFillWithCoordName(resultItem);
      if (resultItem.type == null && (guessOrdinal(source, resultDimIdx) === BE_ORDINAL.Must || resultItem.isExtraCoord && (resultItem.otherDims.itemName != null || resultItem.otherDims.seriesName != null))) {
        resultItem.type = "ordinal";
      }
    }
  } else {
    each$3(resultList, function(resultItem2) {
      ifNoNameFillWithCoordName(resultItem2);
    });
    resultList.sort(function(item0, item1) {
      return item0.storeDimIndex - item1.storeDimIndex;
    });
  }
  removeDuplication(resultList);
  return new SeriesDataSchema({
    source,
    dimensions: resultList,
    fullDimensionCount: dimCount,
    dimensionOmitted: omitUnusedDimensions
  });
}
function removeDuplication(result) {
  var duplicationMap = createHashMap();
  for (var i = 0; i < result.length; i++) {
    var dim = result[i];
    var dimOriginalName = dim.name;
    var count = duplicationMap.get(dimOriginalName) || 0;
    if (count > 0) {
      dim.name = dimOriginalName + (count - 1);
    }
    count++;
    duplicationMap.set(dimOriginalName, count);
  }
}
function getDimCount(source, sysDims, dimsDef, optDimCount) {
  var dimCount = Math.max(source.dimensionsDetectedCount || 1, sysDims.length, dimsDef.length, optDimCount || 0);
  each$3(sysDims, function(sysDimItem) {
    var sysDimItemDimsDef;
    if (isObject$3(sysDimItem) && (sysDimItemDimsDef = sysDimItem.dimsDef)) {
      dimCount = Math.max(dimCount, sysDimItemDimsDef.length);
    }
  });
  return dimCount;
}
function genCoordDimName(name, map2, fromZero) {
  if (fromZero || map2.hasKey(name)) {
    var i = 0;
    while (map2.hasKey(name + i)) {
      i++;
    }
    name += i;
  }
  map2.set(name, true);
  return name;
}
var CoordSysInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function CoordSysInfo2(coordSysName) {
      this.coordSysDims = [];
      this.axisMap = createHashMap();
      this.categoryAxisMap = createHashMap();
      this.coordSysName = coordSysName;
    }
    return CoordSysInfo2;
  }()
);
function getCoordSysInfoBySeries(seriesModel) {
  var coordSysName = seriesModel.get("coordinateSystem");
  var result = new CoordSysInfo(coordSysName);
  var fetch2 = fetchers[coordSysName];
  if (fetch2) {
    fetch2(seriesModel, result, result.axisMap, result.categoryAxisMap);
    return result;
  }
}
var fetchers = {
  cartesian2d: function(seriesModel, result, axisMap, categoryAxisMap) {
    var xAxisModel = seriesModel.getReferringComponents("xAxis", SINGLE_REFERRING).models[0];
    var yAxisModel = seriesModel.getReferringComponents("yAxis", SINGLE_REFERRING).models[0];
    result.coordSysDims = ["x", "y"];
    axisMap.set("x", xAxisModel);
    axisMap.set("y", yAxisModel);
    if (isCategory(xAxisModel)) {
      categoryAxisMap.set("x", xAxisModel);
      result.firstCategoryDimIndex = 0;
    }
    if (isCategory(yAxisModel)) {
      categoryAxisMap.set("y", yAxisModel);
      result.firstCategoryDimIndex == null && (result.firstCategoryDimIndex = 1);
    }
  },
  singleAxis: function(seriesModel, result, axisMap, categoryAxisMap) {
    var singleAxisModel = seriesModel.getReferringComponents("singleAxis", SINGLE_REFERRING).models[0];
    result.coordSysDims = ["single"];
    axisMap.set("single", singleAxisModel);
    if (isCategory(singleAxisModel)) {
      categoryAxisMap.set("single", singleAxisModel);
      result.firstCategoryDimIndex = 0;
    }
  },
  polar: function(seriesModel, result, axisMap, categoryAxisMap) {
    var polarModel = seriesModel.getReferringComponents("polar", SINGLE_REFERRING).models[0];
    var radiusAxisModel = polarModel.findAxisModel("radiusAxis");
    var angleAxisModel = polarModel.findAxisModel("angleAxis");
    result.coordSysDims = ["radius", "angle"];
    axisMap.set("radius", radiusAxisModel);
    axisMap.set("angle", angleAxisModel);
    if (isCategory(radiusAxisModel)) {
      categoryAxisMap.set("radius", radiusAxisModel);
      result.firstCategoryDimIndex = 0;
    }
    if (isCategory(angleAxisModel)) {
      categoryAxisMap.set("angle", angleAxisModel);
      result.firstCategoryDimIndex == null && (result.firstCategoryDimIndex = 1);
    }
  },
  geo: function(seriesModel, result, axisMap, categoryAxisMap) {
    result.coordSysDims = ["lng", "lat"];
  },
  parallel: function(seriesModel, result, axisMap, categoryAxisMap) {
    var ecModel = seriesModel.ecModel;
    var parallelModel = ecModel.getComponent("parallel", seriesModel.get("parallelIndex"));
    var coordSysDims = result.coordSysDims = parallelModel.dimensions.slice();
    each$3(parallelModel.parallelAxisIndex, function(axisIndex, index) {
      var axisModel = ecModel.getComponent("parallelAxis", axisIndex);
      var axisDim = coordSysDims[index];
      axisMap.set(axisDim, axisModel);
      if (isCategory(axisModel)) {
        categoryAxisMap.set(axisDim, axisModel);
        if (result.firstCategoryDimIndex == null) {
          result.firstCategoryDimIndex = index;
        }
      }
    });
  }
};
function isCategory(axisModel) {
  return axisModel.get("type") === "category";
}
function enableDataStack(seriesModel, dimensionsInput, opt) {
  opt = opt || {};
  var byIndex = opt.byIndex;
  var stackedCoordDimension = opt.stackedCoordDimension;
  var dimensionDefineList;
  var schema;
  var store;
  if (isLegacyDimensionsInput(dimensionsInput)) {
    dimensionDefineList = dimensionsInput;
  } else {
    schema = dimensionsInput.schema;
    dimensionDefineList = schema.dimensions;
    store = dimensionsInput.store;
  }
  var mayStack = !!(seriesModel && seriesModel.get("stack"));
  var stackedByDimInfo;
  var stackedDimInfo;
  var stackResultDimension;
  var stackedOverDimension;
  each$3(dimensionDefineList, function(dimensionInfo, index) {
    if (isString$2(dimensionInfo)) {
      dimensionDefineList[index] = dimensionInfo = {
        name: dimensionInfo
      };
    }
    if (mayStack && !dimensionInfo.isExtraCoord) {
      if (!byIndex && !stackedByDimInfo && dimensionInfo.ordinalMeta) {
        stackedByDimInfo = dimensionInfo;
      }
      if (!stackedDimInfo && dimensionInfo.type !== "ordinal" && dimensionInfo.type !== "time" && (!stackedCoordDimension || stackedCoordDimension === dimensionInfo.coordDim)) {
        stackedDimInfo = dimensionInfo;
      }
    }
  });
  if (stackedDimInfo && !byIndex && !stackedByDimInfo) {
    byIndex = true;
  }
  if (stackedDimInfo) {
    stackResultDimension = "__\0ecstackresult_" + seriesModel.id;
    stackedOverDimension = "__\0ecstackedover_" + seriesModel.id;
    if (stackedByDimInfo) {
      stackedByDimInfo.createInvertedIndices = true;
    }
    var stackedDimCoordDim_1 = stackedDimInfo.coordDim;
    var stackedDimType = stackedDimInfo.type;
    var stackedDimCoordIndex_1 = 0;
    each$3(dimensionDefineList, function(dimensionInfo) {
      if (dimensionInfo.coordDim === stackedDimCoordDim_1) {
        stackedDimCoordIndex_1++;
      }
    });
    var stackedOverDimensionDefine = {
      name: stackResultDimension,
      coordDim: stackedDimCoordDim_1,
      coordDimIndex: stackedDimCoordIndex_1,
      type: stackedDimType,
      isExtraCoord: true,
      isCalculationCoord: true,
      storeDimIndex: dimensionDefineList.length
    };
    var stackResultDimensionDefine = {
      name: stackedOverDimension,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: stackedOverDimension,
      coordDimIndex: stackedDimCoordIndex_1 + 1,
      type: stackedDimType,
      isExtraCoord: true,
      isCalculationCoord: true,
      storeDimIndex: dimensionDefineList.length + 1
    };
    if (schema) {
      if (store) {
        stackedOverDimensionDefine.storeDimIndex = store.ensureCalculationDimension(stackedOverDimension, stackedDimType);
        stackResultDimensionDefine.storeDimIndex = store.ensureCalculationDimension(stackResultDimension, stackedDimType);
      }
      schema.appendCalculationDimension(stackedOverDimensionDefine);
      schema.appendCalculationDimension(stackResultDimensionDefine);
    } else {
      dimensionDefineList.push(stackedOverDimensionDefine);
      dimensionDefineList.push(stackResultDimensionDefine);
    }
  }
  return {
    stackedDimension: stackedDimInfo && stackedDimInfo.name,
    stackedByDimension: stackedByDimInfo && stackedByDimInfo.name,
    isStackedByIndex: byIndex,
    stackedOverDimension,
    stackResultDimension
  };
}
function isLegacyDimensionsInput(dimensionsInput) {
  return !isSeriesDataSchema(dimensionsInput.schema);
}
function isDimensionStacked(data, stackedDim) {
  return !!stackedDim && stackedDim === data.getCalculationInfo("stackedDimension");
}
function getStackedDimension(data, targetDim) {
  return isDimensionStacked(data, targetDim) ? data.getCalculationInfo("stackResultDimension") : targetDim;
}
function getCoordSysDimDefs(seriesModel, coordSysInfo) {
  var coordSysName = seriesModel.get("coordinateSystem");
  var registeredCoordSys = CoordinateSystemManager.get(coordSysName);
  var coordSysDimDefs;
  if (coordSysInfo && coordSysInfo.coordSysDims) {
    coordSysDimDefs = zrUtil.map(coordSysInfo.coordSysDims, function(dim) {
      var dimInfo = {
        name: dim
      };
      var axisModel = coordSysInfo.axisMap.get(dim);
      if (axisModel) {
        var axisType = axisModel.get("type");
        dimInfo.type = getDimensionTypeByAxis(axisType);
      }
      return dimInfo;
    });
  }
  if (!coordSysDimDefs) {
    coordSysDimDefs = registeredCoordSys && (registeredCoordSys.getDimensionsInfo ? registeredCoordSys.getDimensionsInfo() : registeredCoordSys.dimensions.slice()) || ["x", "y"];
  }
  return coordSysDimDefs;
}
function injectOrdinalMeta(dimInfoList, createInvertedIndices, coordSysInfo) {
  var firstCategoryDimIndex;
  var hasNameEncode;
  coordSysInfo && zrUtil.each(dimInfoList, function(dimInfo, dimIndex) {
    var coordDim = dimInfo.coordDim;
    var categoryAxisModel = coordSysInfo.categoryAxisMap.get(coordDim);
    if (categoryAxisModel) {
      if (firstCategoryDimIndex == null) {
        firstCategoryDimIndex = dimIndex;
      }
      dimInfo.ordinalMeta = categoryAxisModel.getOrdinalMeta();
      if (createInvertedIndices) {
        dimInfo.createInvertedIndices = true;
      }
    }
    if (dimInfo.otherDims.itemName != null) {
      hasNameEncode = true;
    }
  });
  if (!hasNameEncode && firstCategoryDimIndex != null) {
    dimInfoList[firstCategoryDimIndex].otherDims.itemName = 0;
  }
  return firstCategoryDimIndex;
}
function createSeriesData(sourceRaw, seriesModel, opt) {
  opt = opt || {};
  var sourceManager = seriesModel.getSourceManager();
  var source;
  var isOriginalSource = false;
  {
    source = sourceManager.getSource();
    isOriginalSource = source.sourceFormat === SOURCE_FORMAT_ORIGINAL;
  }
  var coordSysInfo = getCoordSysInfoBySeries(seriesModel);
  var coordSysDimDefs = getCoordSysDimDefs(seriesModel, coordSysInfo);
  var useEncodeDefaulter = opt.useEncodeDefaulter;
  var encodeDefaulter = zrUtil.isFunction(useEncodeDefaulter) ? useEncodeDefaulter : useEncodeDefaulter ? zrUtil.curry(makeSeriesEncodeForAxisCoordSys, coordSysDimDefs, seriesModel) : null;
  var createDimensionOptions = {
    coordDimensions: coordSysDimDefs,
    generateCoord: opt.generateCoord,
    encodeDefine: seriesModel.getEncode(),
    encodeDefaulter,
    canOmitUnusedDimensions: !isOriginalSource
  };
  var schema = prepareSeriesDataSchema(source, createDimensionOptions);
  var firstCategoryDimIndex = injectOrdinalMeta(schema.dimensions, opt.createInvertedIndices, coordSysInfo);
  var store = !isOriginalSource ? sourceManager.getSharedDataStore(schema) : null;
  var stackCalculationInfo = enableDataStack(seriesModel, {
    schema,
    store
  });
  var data = new SeriesData(schema, seriesModel);
  data.setCalculationInfo(stackCalculationInfo);
  var dimValueGetter = firstCategoryDimIndex != null && isNeedCompleteOrdinalData(source) ? function(itemOpt, dimName, dataIndex, dimIndex) {
    return dimIndex === firstCategoryDimIndex ? dataIndex : this.defaultDimValueGetter(itemOpt, dimName, dataIndex, dimIndex);
  } : null;
  data.hasItemOption = false;
  data.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    isOriginalSource ? source : store,
    null,
    dimValueGetter
  );
  return data;
}
function isNeedCompleteOrdinalData(source) {
  if (source.sourceFormat === SOURCE_FORMAT_ORIGINAL) {
    var sampleItem = firstDataNotNull(source.data || []);
    return !zrUtil.isArray(getDataItemValue(sampleItem));
  }
}
function firstDataNotNull(arr) {
  var i = 0;
  while (i < arr.length && arr[i] == null) {
    i++;
  }
  return arr[i];
}
var Scale = (
  /** @class */
  function() {
    function Scale2(setting) {
      this._setting = setting || {};
      this._extent = [Infinity, -Infinity];
    }
    Scale2.prototype.getSetting = function(name) {
      return this._setting[name];
    };
    Scale2.prototype.unionExtent = function(other) {
      var extent = this._extent;
      other[0] < extent[0] && (extent[0] = other[0]);
      other[1] > extent[1] && (extent[1] = other[1]);
    };
    Scale2.prototype.unionExtentFromData = function(data, dim) {
      this.unionExtent(data.getApproximateExtent(dim));
    };
    Scale2.prototype.getExtent = function() {
      return this._extent.slice();
    };
    Scale2.prototype.setExtent = function(start, end) {
      var thisExtent = this._extent;
      if (!isNaN(start)) {
        thisExtent[0] = start;
      }
      if (!isNaN(end)) {
        thisExtent[1] = end;
      }
    };
    Scale2.prototype.isInExtentRange = function(value) {
      return this._extent[0] <= value && this._extent[1] >= value;
    };
    Scale2.prototype.isBlank = function() {
      return this._isBlank;
    };
    Scale2.prototype.setBlank = function(isBlank) {
      this._isBlank = isBlank;
    };
    return Scale2;
  }()
);
enableClassManagement(Scale);
var uidBase = 0;
var OrdinalMeta = (
  /** @class */
  function() {
    function OrdinalMeta2(opt) {
      this.categories = opt.categories || [];
      this._needCollect = opt.needCollect;
      this._deduplication = opt.deduplication;
      this.uid = ++uidBase;
    }
    OrdinalMeta2.createByAxisModel = function(axisModel) {
      var option = axisModel.option;
      var data = option.data;
      var categories = data && map$1(data, getName);
      return new OrdinalMeta2({
        categories,
        needCollect: !categories,
        // deduplication is default in axis.
        deduplication: option.dedplication !== false
      });
    };
    OrdinalMeta2.prototype.getOrdinal = function(category) {
      return this._getOrCreateMap().get(category);
    };
    OrdinalMeta2.prototype.parseAndCollect = function(category) {
      var index;
      var needCollect = this._needCollect;
      if (!isString$2(category) && !needCollect) {
        return category;
      }
      if (needCollect && !this._deduplication) {
        index = this.categories.length;
        this.categories[index] = category;
        return index;
      }
      var map2 = this._getOrCreateMap();
      index = map2.get(category);
      if (index == null) {
        if (needCollect) {
          index = this.categories.length;
          this.categories[index] = category;
          map2.set(category, index);
        } else {
          index = NaN;
        }
      }
      return index;
    };
    OrdinalMeta2.prototype._getOrCreateMap = function() {
      return this._map || (this._map = createHashMap(this.categories));
    };
    return OrdinalMeta2;
  }()
);
function getName(obj) {
  if (isObject$3(obj) && obj.value != null) {
    return obj.value;
  } else {
    return obj + "";
  }
}
function isIntervalOrLogScale(scale2) {
  return scale2.type === "interval" || scale2.type === "log";
}
function intervalScaleNiceTicks(extent, splitNumber, minInterval, maxInterval) {
  var result = {};
  var span = extent[1] - extent[0];
  var interval = result.interval = nice(span / splitNumber);
  if (minInterval != null && interval < minInterval) {
    interval = result.interval = minInterval;
  }
  if (maxInterval != null && interval > maxInterval) {
    interval = result.interval = maxInterval;
  }
  var precision = result.intervalPrecision = getIntervalPrecision(interval);
  var niceTickExtent = result.niceTickExtent = [round(Math.ceil(extent[0] / interval) * interval, precision), round(Math.floor(extent[1] / interval) * interval, precision)];
  fixExtent(niceTickExtent, extent);
  return result;
}
function increaseInterval(interval) {
  var exp10 = Math.pow(10, quantityExponent(interval));
  var f = interval / exp10;
  if (!f) {
    f = 1;
  } else if (f === 2) {
    f = 3;
  } else if (f === 3) {
    f = 5;
  } else {
    f *= 2;
  }
  return round(f * exp10);
}
function getIntervalPrecision(interval) {
  return getPrecision(interval) + 2;
}
function clamp(niceTickExtent, idx, extent) {
  niceTickExtent[idx] = Math.max(Math.min(niceTickExtent[idx], extent[1]), extent[0]);
}
function fixExtent(niceTickExtent, extent) {
  !isFinite(niceTickExtent[0]) && (niceTickExtent[0] = extent[0]);
  !isFinite(niceTickExtent[1]) && (niceTickExtent[1] = extent[1]);
  clamp(niceTickExtent, 0, extent);
  clamp(niceTickExtent, 1, extent);
  if (niceTickExtent[0] > niceTickExtent[1]) {
    niceTickExtent[0] = niceTickExtent[1];
  }
}
function contain(val, extent) {
  return val >= extent[0] && val <= extent[1];
}
function normalize(val, extent) {
  if (extent[1] === extent[0]) {
    return 0.5;
  }
  return (val - extent[0]) / (extent[1] - extent[0]);
}
function scale(val, extent) {
  return val * (extent[1] - extent[0]) + extent[0];
}
var OrdinalScale = (
  /** @class */
  function(_super) {
    __extends(OrdinalScale2, _super);
    function OrdinalScale2(setting) {
      var _this = _super.call(this, setting) || this;
      _this.type = "ordinal";
      var ordinalMeta = _this.getSetting("ordinalMeta");
      if (!ordinalMeta) {
        ordinalMeta = new OrdinalMeta({});
      }
      if (isArray$1(ordinalMeta)) {
        ordinalMeta = new OrdinalMeta({
          categories: map$1(ordinalMeta, function(item) {
            return isObject$3(item) ? item.value : item;
          })
        });
      }
      _this._ordinalMeta = ordinalMeta;
      _this._extent = _this.getSetting("extent") || [0, ordinalMeta.categories.length - 1];
      return _this;
    }
    OrdinalScale2.prototype.parse = function(val) {
      if (val == null) {
        return NaN;
      }
      return isString$2(val) ? this._ordinalMeta.getOrdinal(val) : Math.round(val);
    };
    OrdinalScale2.prototype.contain = function(rank) {
      rank = this.parse(rank);
      return contain(rank, this._extent) && this._ordinalMeta.categories[rank] != null;
    };
    OrdinalScale2.prototype.normalize = function(val) {
      val = this._getTickNumber(this.parse(val));
      return normalize(val, this._extent);
    };
    OrdinalScale2.prototype.scale = function(val) {
      val = Math.round(scale(val, this._extent));
      return this.getRawOrdinalNumber(val);
    };
    OrdinalScale2.prototype.getTicks = function() {
      var ticks = [];
      var extent = this._extent;
      var rank = extent[0];
      while (rank <= extent[1]) {
        ticks.push({
          value: rank
        });
        rank++;
      }
      return ticks;
    };
    OrdinalScale2.prototype.getMinorTicks = function(splitNumber) {
      return;
    };
    OrdinalScale2.prototype.setSortInfo = function(info) {
      if (info == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      var infoOrdinalNumbers = info.ordinalNumbers;
      var ordinalsByTick = this._ordinalNumbersByTick = [];
      var ticksByOrdinal = this._ticksByOrdinalNumber = [];
      var tickNum = 0;
      var allCategoryLen = this._ordinalMeta.categories.length;
      for (var len = Math.min(allCategoryLen, infoOrdinalNumbers.length); tickNum < len; ++tickNum) {
        var ordinalNumber = infoOrdinalNumbers[tickNum];
        ordinalsByTick[tickNum] = ordinalNumber;
        ticksByOrdinal[ordinalNumber] = tickNum;
      }
      var unusedOrdinal = 0;
      for (; tickNum < allCategoryLen; ++tickNum) {
        while (ticksByOrdinal[unusedOrdinal] != null) {
          unusedOrdinal++;
        }
        ordinalsByTick.push(unusedOrdinal);
        ticksByOrdinal[unusedOrdinal] = tickNum;
      }
    };
    OrdinalScale2.prototype._getTickNumber = function(ordinal) {
      var ticksByOrdinalNumber = this._ticksByOrdinalNumber;
      return ticksByOrdinalNumber && ordinal >= 0 && ordinal < ticksByOrdinalNumber.length ? ticksByOrdinalNumber[ordinal] : ordinal;
    };
    OrdinalScale2.prototype.getRawOrdinalNumber = function(tickNumber) {
      var ordinalNumbersByTick = this._ordinalNumbersByTick;
      return ordinalNumbersByTick && tickNumber >= 0 && tickNumber < ordinalNumbersByTick.length ? ordinalNumbersByTick[tickNumber] : tickNumber;
    };
    OrdinalScale2.prototype.getLabel = function(tick) {
      if (!this.isBlank()) {
        var ordinalNumber = this.getRawOrdinalNumber(tick.value);
        var cateogry = this._ordinalMeta.categories[ordinalNumber];
        return cateogry == null ? "" : cateogry + "";
      }
    };
    OrdinalScale2.prototype.count = function() {
      return this._extent[1] - this._extent[0] + 1;
    };
    OrdinalScale2.prototype.unionExtentFromData = function(data, dim) {
      this.unionExtent(data.getApproximateExtent(dim));
    };
    OrdinalScale2.prototype.isInExtentRange = function(value) {
      value = this._getTickNumber(value);
      return this._extent[0] <= value && this._extent[1] >= value;
    };
    OrdinalScale2.prototype.getOrdinalMeta = function() {
      return this._ordinalMeta;
    };
    OrdinalScale2.prototype.calcNiceTicks = function() {
    };
    OrdinalScale2.prototype.calcNiceExtent = function() {
    };
    OrdinalScale2.type = "ordinal";
    return OrdinalScale2;
  }(Scale)
);
Scale.registerClass(OrdinalScale);
var roundNumber = round;
var IntervalScale = (
  /** @class */
  function(_super) {
    __extends(IntervalScale2, _super);
    function IntervalScale2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "interval";
      _this._interval = 0;
      _this._intervalPrecision = 2;
      return _this;
    }
    IntervalScale2.prototype.parse = function(val) {
      return val;
    };
    IntervalScale2.prototype.contain = function(val) {
      return contain(val, this._extent);
    };
    IntervalScale2.prototype.normalize = function(val) {
      return normalize(val, this._extent);
    };
    IntervalScale2.prototype.scale = function(val) {
      return scale(val, this._extent);
    };
    IntervalScale2.prototype.setExtent = function(start, end) {
      var thisExtent = this._extent;
      if (!isNaN(start)) {
        thisExtent[0] = parseFloat(start);
      }
      if (!isNaN(end)) {
        thisExtent[1] = parseFloat(end);
      }
    };
    IntervalScale2.prototype.unionExtent = function(other) {
      var extent = this._extent;
      other[0] < extent[0] && (extent[0] = other[0]);
      other[1] > extent[1] && (extent[1] = other[1]);
      this.setExtent(extent[0], extent[1]);
    };
    IntervalScale2.prototype.getInterval = function() {
      return this._interval;
    };
    IntervalScale2.prototype.setInterval = function(interval) {
      this._interval = interval;
      this._niceExtent = this._extent.slice();
      this._intervalPrecision = getIntervalPrecision(interval);
    };
    IntervalScale2.prototype.getTicks = function(expandToNicedExtent) {
      var interval = this._interval;
      var extent = this._extent;
      var niceTickExtent = this._niceExtent;
      var intervalPrecision = this._intervalPrecision;
      var ticks = [];
      if (!interval) {
        return ticks;
      }
      var safeLimit = 1e4;
      if (extent[0] < niceTickExtent[0]) {
        if (expandToNicedExtent) {
          ticks.push({
            value: roundNumber(niceTickExtent[0] - interval, intervalPrecision)
          });
        } else {
          ticks.push({
            value: extent[0]
          });
        }
      }
      var tick = niceTickExtent[0];
      while (tick <= niceTickExtent[1]) {
        ticks.push({
          value: tick
        });
        tick = roundNumber(tick + interval, intervalPrecision);
        if (tick === ticks[ticks.length - 1].value) {
          break;
        }
        if (ticks.length > safeLimit) {
          return [];
        }
      }
      var lastNiceTick = ticks.length ? ticks[ticks.length - 1].value : niceTickExtent[1];
      if (extent[1] > lastNiceTick) {
        if (expandToNicedExtent) {
          ticks.push({
            value: roundNumber(lastNiceTick + interval, intervalPrecision)
          });
        } else {
          ticks.push({
            value: extent[1]
          });
        }
      }
      return ticks;
    };
    IntervalScale2.prototype.getMinorTicks = function(splitNumber) {
      var ticks = this.getTicks(true);
      var minorTicks = [];
      var extent = this.getExtent();
      for (var i = 1; i < ticks.length; i++) {
        var nextTick2 = ticks[i];
        var prevTick = ticks[i - 1];
        var count = 0;
        var minorTicksGroup = [];
        var interval = nextTick2.value - prevTick.value;
        var minorInterval = interval / splitNumber;
        while (count < splitNumber - 1) {
          var minorTick = roundNumber(prevTick.value + (count + 1) * minorInterval);
          if (minorTick > extent[0] && minorTick < extent[1]) {
            minorTicksGroup.push(minorTick);
          }
          count++;
        }
        minorTicks.push(minorTicksGroup);
      }
      return minorTicks;
    };
    IntervalScale2.prototype.getLabel = function(data, opt) {
      if (data == null) {
        return "";
      }
      var precision = opt && opt.precision;
      if (precision == null) {
        precision = getPrecision(data.value) || 0;
      } else if (precision === "auto") {
        precision = this._intervalPrecision;
      }
      var dataNum = roundNumber(data.value, precision, true);
      return addCommas(dataNum);
    };
    IntervalScale2.prototype.calcNiceTicks = function(splitNumber, minInterval, maxInterval) {
      splitNumber = splitNumber || 5;
      var extent = this._extent;
      var span = extent[1] - extent[0];
      if (!isFinite(span)) {
        return;
      }
      if (span < 0) {
        span = -span;
        extent.reverse();
      }
      var result = intervalScaleNiceTicks(extent, splitNumber, minInterval, maxInterval);
      this._intervalPrecision = result.intervalPrecision;
      this._interval = result.interval;
      this._niceExtent = result.niceTickExtent;
    };
    IntervalScale2.prototype.calcNiceExtent = function(opt) {
      var extent = this._extent;
      if (extent[0] === extent[1]) {
        if (extent[0] !== 0) {
          var expandSize = Math.abs(extent[0]);
          if (!opt.fixMax) {
            extent[1] += expandSize / 2;
            extent[0] -= expandSize / 2;
          } else {
            extent[0] -= expandSize / 2;
          }
        } else {
          extent[1] = 1;
        }
      }
      var span = extent[1] - extent[0];
      if (!isFinite(span)) {
        extent[0] = 0;
        extent[1] = 1;
      }
      this.calcNiceTicks(opt.splitNumber, opt.minInterval, opt.maxInterval);
      var interval = this._interval;
      if (!opt.fixMin) {
        extent[0] = roundNumber(Math.floor(extent[0] / interval) * interval);
      }
      if (!opt.fixMax) {
        extent[1] = roundNumber(Math.ceil(extent[1] / interval) * interval);
      }
    };
    IntervalScale2.prototype.setNiceExtent = function(min, max) {
      this._niceExtent = [min, max];
    };
    IntervalScale2.type = "interval";
    return IntervalScale2;
  }(Scale)
);
Scale.registerClass(IntervalScale);
var supportFloat32Array = typeof Float32Array !== "undefined";
var Float32ArrayCtor = !supportFloat32Array ? Array : Float32Array;
function createFloat32Array(arg) {
  if (isArray$1(arg)) {
    return supportFloat32Array ? new Float32Array(arg) : arg;
  }
  return new Float32ArrayCtor(arg);
}
var STACK_PREFIX = "__ec_stack_";
function getSeriesStackId(seriesModel) {
  return seriesModel.get("stack") || STACK_PREFIX + seriesModel.seriesIndex;
}
function getAxisKey(axis) {
  return axis.dim + axis.index;
}
function prepareLayoutBarSeries(seriesType2, ecModel) {
  var seriesModels = [];
  ecModel.eachSeriesByType(seriesType2, function(seriesModel) {
    if (isOnCartesian(seriesModel)) {
      seriesModels.push(seriesModel);
    }
  });
  return seriesModels;
}
function getValueAxesMinGaps(barSeries) {
  var axisValues = {};
  each$3(barSeries, function(seriesModel) {
    var cartesian = seriesModel.coordinateSystem;
    var baseAxis = cartesian.getBaseAxis();
    if (baseAxis.type !== "time" && baseAxis.type !== "value") {
      return;
    }
    var data = seriesModel.getData();
    var key2 = baseAxis.dim + "_" + baseAxis.index;
    var dimIdx = data.getDimensionIndex(data.mapDimension(baseAxis.dim));
    var store = data.getStore();
    for (var i = 0, cnt = store.count(); i < cnt; ++i) {
      var value = store.get(dimIdx, i);
      if (!axisValues[key2]) {
        axisValues[key2] = [value];
      } else {
        axisValues[key2].push(value);
      }
    }
  });
  var axisMinGaps = {};
  for (var key in axisValues) {
    if (axisValues.hasOwnProperty(key)) {
      var valuesInAxis = axisValues[key];
      if (valuesInAxis) {
        valuesInAxis.sort(function(a, b) {
          return a - b;
        });
        var min = null;
        for (var j = 1; j < valuesInAxis.length; ++j) {
          var delta = valuesInAxis[j] - valuesInAxis[j - 1];
          if (delta > 0) {
            min = min === null ? delta : Math.min(min, delta);
          }
        }
        axisMinGaps[key] = min;
      }
    }
  }
  return axisMinGaps;
}
function makeColumnLayout(barSeries) {
  var axisMinGaps = getValueAxesMinGaps(barSeries);
  var seriesInfoList = [];
  each$3(barSeries, function(seriesModel) {
    var cartesian = seriesModel.coordinateSystem;
    var baseAxis = cartesian.getBaseAxis();
    var axisExtent = baseAxis.getExtent();
    var bandWidth;
    if (baseAxis.type === "category") {
      bandWidth = baseAxis.getBandWidth();
    } else if (baseAxis.type === "value" || baseAxis.type === "time") {
      var key = baseAxis.dim + "_" + baseAxis.index;
      var minGap = axisMinGaps[key];
      var extentSpan = Math.abs(axisExtent[1] - axisExtent[0]);
      var scale2 = baseAxis.scale.getExtent();
      var scaleSpan = Math.abs(scale2[1] - scale2[0]);
      bandWidth = minGap ? extentSpan / scaleSpan * minGap : extentSpan;
    } else {
      var data = seriesModel.getData();
      bandWidth = Math.abs(axisExtent[1] - axisExtent[0]) / data.count();
    }
    var barWidth = parsePercent(seriesModel.get("barWidth"), bandWidth);
    var barMaxWidth = parsePercent(seriesModel.get("barMaxWidth"), bandWidth);
    var barMinWidth = parsePercent(
      // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
      // the auto-calculated bar width might be less than 0.5 / 1.
      seriesModel.get("barMinWidth") || (isInLargeMode(seriesModel) ? 0.5 : 1),
      bandWidth
    );
    var barGap = seriesModel.get("barGap");
    var barCategoryGap = seriesModel.get("barCategoryGap");
    seriesInfoList.push({
      bandWidth,
      barWidth,
      barMaxWidth,
      barMinWidth,
      barGap,
      barCategoryGap,
      axisKey: getAxisKey(baseAxis),
      stackId: getSeriesStackId(seriesModel)
    });
  });
  return doCalBarWidthAndOffset(seriesInfoList);
}
function doCalBarWidthAndOffset(seriesInfoList) {
  var columnsMap = {};
  each$3(seriesInfoList, function(seriesInfo, idx) {
    var axisKey = seriesInfo.axisKey;
    var bandWidth = seriesInfo.bandWidth;
    var columnsOnAxis = columnsMap[axisKey] || {
      bandWidth,
      remainedWidth: bandWidth,
      autoWidthCount: 0,
      categoryGap: null,
      gap: "20%",
      stacks: {}
    };
    var stacks = columnsOnAxis.stacks;
    columnsMap[axisKey] = columnsOnAxis;
    var stackId = seriesInfo.stackId;
    if (!stacks[stackId]) {
      columnsOnAxis.autoWidthCount++;
    }
    stacks[stackId] = stacks[stackId] || {
      width: 0,
      maxWidth: 0
    };
    var barWidth = seriesInfo.barWidth;
    if (barWidth && !stacks[stackId].width) {
      stacks[stackId].width = barWidth;
      barWidth = Math.min(columnsOnAxis.remainedWidth, barWidth);
      columnsOnAxis.remainedWidth -= barWidth;
    }
    var barMaxWidth = seriesInfo.barMaxWidth;
    barMaxWidth && (stacks[stackId].maxWidth = barMaxWidth);
    var barMinWidth = seriesInfo.barMinWidth;
    barMinWidth && (stacks[stackId].minWidth = barMinWidth);
    var barGap = seriesInfo.barGap;
    barGap != null && (columnsOnAxis.gap = barGap);
    var barCategoryGap = seriesInfo.barCategoryGap;
    barCategoryGap != null && (columnsOnAxis.categoryGap = barCategoryGap);
  });
  var result = {};
  each$3(columnsMap, function(columnsOnAxis, coordSysName) {
    result[coordSysName] = {};
    var stacks = columnsOnAxis.stacks;
    var bandWidth = columnsOnAxis.bandWidth;
    var categoryGapPercent = columnsOnAxis.categoryGap;
    if (categoryGapPercent == null) {
      var columnCount = keys(stacks).length;
      categoryGapPercent = Math.max(35 - columnCount * 4, 15) + "%";
    }
    var categoryGap = parsePercent(categoryGapPercent, bandWidth);
    var barGapPercent = parsePercent(columnsOnAxis.gap, 1);
    var remainedWidth = columnsOnAxis.remainedWidth;
    var autoWidthCount = columnsOnAxis.autoWidthCount;
    var autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    each$3(stacks, function(column) {
      var maxWidth = column.maxWidth;
      var minWidth = column.minWidth;
      if (!column.width) {
        var finalWidth = autoWidth;
        if (maxWidth && maxWidth < finalWidth) {
          finalWidth = Math.min(maxWidth, remainedWidth);
        }
        if (minWidth && minWidth > finalWidth) {
          finalWidth = minWidth;
        }
        if (finalWidth !== autoWidth) {
          column.width = finalWidth;
          remainedWidth -= finalWidth + barGapPercent * finalWidth;
          autoWidthCount--;
        }
      } else {
        var finalWidth = column.width;
        if (maxWidth) {
          finalWidth = Math.min(finalWidth, maxWidth);
        }
        if (minWidth) {
          finalWidth = Math.max(finalWidth, minWidth);
        }
        column.width = finalWidth;
        remainedWidth -= finalWidth + barGapPercent * finalWidth;
        autoWidthCount--;
      }
    });
    autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    var widthSum = 0;
    var lastColumn;
    each$3(stacks, function(column, idx) {
      if (!column.width) {
        column.width = autoWidth;
      }
      lastColumn = column;
      widthSum += column.width * (1 + barGapPercent);
    });
    if (lastColumn) {
      widthSum -= lastColumn.width * barGapPercent;
    }
    var offset = -widthSum / 2;
    each$3(stacks, function(column, stackId) {
      result[coordSysName][stackId] = result[coordSysName][stackId] || {
        bandWidth,
        offset,
        width: column.width
      };
      offset += column.width * (1 + barGapPercent);
    });
  });
  return result;
}
function retrieveColumnLayout(barWidthAndOffset, axis, seriesModel) {
  if (barWidthAndOffset && axis) {
    var result = barWidthAndOffset[getAxisKey(axis)];
    if (result != null && seriesModel != null) {
      return result[getSeriesStackId(seriesModel)];
    }
    return result;
  }
}
function layout$1(seriesType2, ecModel) {
  var seriesModels = prepareLayoutBarSeries(seriesType2, ecModel);
  var barWidthAndOffset = makeColumnLayout(seriesModels);
  each$3(seriesModels, function(seriesModel) {
    var data = seriesModel.getData();
    var cartesian = seriesModel.coordinateSystem;
    var baseAxis = cartesian.getBaseAxis();
    var stackId = getSeriesStackId(seriesModel);
    var columnLayoutInfo = barWidthAndOffset[getAxisKey(baseAxis)][stackId];
    var columnOffset = columnLayoutInfo.offset;
    var columnWidth = columnLayoutInfo.width;
    data.setLayout({
      bandWidth: columnLayoutInfo.bandWidth,
      offset: columnOffset,
      size: columnWidth
    });
  });
}
function createProgressiveLayout(seriesType2) {
  return {
    seriesType: seriesType2,
    plan: createRenderPlanner(),
    reset: function(seriesModel) {
      if (!isOnCartesian(seriesModel)) {
        return;
      }
      var data = seriesModel.getData();
      var cartesian = seriesModel.coordinateSystem;
      var baseAxis = cartesian.getBaseAxis();
      var valueAxis2 = cartesian.getOtherAxis(baseAxis);
      var valueDimIdx = data.getDimensionIndex(data.mapDimension(valueAxis2.dim));
      var baseDimIdx = data.getDimensionIndex(data.mapDimension(baseAxis.dim));
      var drawBackground = seriesModel.get("showBackground", true);
      var valueDim = data.mapDimension(valueAxis2.dim);
      var stackResultDim = data.getCalculationInfo("stackResultDimension");
      var stacked = isDimensionStacked(data, valueDim) && !!data.getCalculationInfo("stackedOnSeries");
      var isValueAxisH = valueAxis2.isHorizontal();
      var valueAxisStart = getValueAxisStart(baseAxis, valueAxis2);
      var isLarge = isInLargeMode(seriesModel);
      var barMinHeight = seriesModel.get("barMinHeight") || 0;
      var stackedDimIdx = stackResultDim && data.getDimensionIndex(stackResultDim);
      var columnWidth = data.getLayout("size");
      var columnOffset = data.getLayout("offset");
      return {
        progress: function(params, data2) {
          var count = params.count;
          var largePoints = isLarge && createFloat32Array(count * 3);
          var largeBackgroundPoints = isLarge && drawBackground && createFloat32Array(count * 3);
          var largeDataIndices = isLarge && createFloat32Array(count);
          var coordLayout = cartesian.master.getRect();
          var bgSize = isValueAxisH ? coordLayout.width : coordLayout.height;
          var dataIndex;
          var store = data2.getStore();
          var idxOffset = 0;
          while ((dataIndex = params.next()) != null) {
            var value = store.get(stacked ? stackedDimIdx : valueDimIdx, dataIndex);
            var baseValue = store.get(baseDimIdx, dataIndex);
            var baseCoord = valueAxisStart;
            var stackStartValue = void 0;
            if (stacked) {
              stackStartValue = +value - store.get(valueDimIdx, dataIndex);
            }
            var x = void 0;
            var y = void 0;
            var width = void 0;
            var height = void 0;
            if (isValueAxisH) {
              var coord = cartesian.dataToPoint([value, baseValue]);
              if (stacked) {
                var startCoord = cartesian.dataToPoint([stackStartValue, baseValue]);
                baseCoord = startCoord[0];
              }
              x = baseCoord;
              y = coord[1] + columnOffset;
              width = coord[0] - baseCoord;
              height = columnWidth;
              if (Math.abs(width) < barMinHeight) {
                width = (width < 0 ? -1 : 1) * barMinHeight;
              }
            } else {
              var coord = cartesian.dataToPoint([baseValue, value]);
              if (stacked) {
                var startCoord = cartesian.dataToPoint([baseValue, stackStartValue]);
                baseCoord = startCoord[1];
              }
              x = coord[0] + columnOffset;
              y = baseCoord;
              width = columnWidth;
              height = coord[1] - baseCoord;
              if (Math.abs(height) < barMinHeight) {
                height = (height <= 0 ? -1 : 1) * barMinHeight;
              }
            }
            if (!isLarge) {
              data2.setItemLayout(dataIndex, {
                x,
                y,
                width,
                height
              });
            } else {
              largePoints[idxOffset] = x;
              largePoints[idxOffset + 1] = y;
              largePoints[idxOffset + 2] = isValueAxisH ? width : height;
              if (largeBackgroundPoints) {
                largeBackgroundPoints[idxOffset] = isValueAxisH ? coordLayout.x : x;
                largeBackgroundPoints[idxOffset + 1] = isValueAxisH ? y : coordLayout.y;
                largeBackgroundPoints[idxOffset + 2] = bgSize;
              }
              largeDataIndices[dataIndex] = dataIndex;
            }
            idxOffset += 3;
          }
          if (isLarge) {
            data2.setLayout({
              largePoints,
              largeDataIndices,
              largeBackgroundPoints,
              valueAxisHorizontal: isValueAxisH
            });
          }
        }
      };
    }
  };
}
function isOnCartesian(seriesModel) {
  return seriesModel.coordinateSystem && seriesModel.coordinateSystem.type === "cartesian2d";
}
function isInLargeMode(seriesModel) {
  return seriesModel.pipelineContext && seriesModel.pipelineContext.large;
}
function getValueAxisStart(baseAxis, valueAxis2) {
  var startValue = valueAxis2.model.get("startValue");
  if (!startValue) {
    startValue = 0;
  }
  return valueAxis2.toGlobalCoord(valueAxis2.dataToCoord(valueAxis2.type === "log" ? startValue > 0 ? startValue : 1 : startValue));
}
var bisect = function(a, x, lo, hi) {
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid][1] < x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};
var TimeScale = (
  /** @class */
  function(_super) {
    __extends(TimeScale2, _super);
    function TimeScale2(settings) {
      var _this = _super.call(this, settings) || this;
      _this.type = "time";
      return _this;
    }
    TimeScale2.prototype.getLabel = function(tick) {
      var useUTC = this.getSetting("useUTC");
      return format(tick.value, fullLeveledFormatter[getDefaultFormatPrecisionOfInterval(getPrimaryTimeUnit(this._minLevelUnit))] || fullLeveledFormatter.second, useUTC, this.getSetting("locale"));
    };
    TimeScale2.prototype.getFormattedLabel = function(tick, idx, labelFormatter) {
      var isUTC = this.getSetting("useUTC");
      var lang = this.getSetting("locale");
      return leveledFormat(tick, idx, labelFormatter, lang, isUTC);
    };
    TimeScale2.prototype.getTicks = function() {
      var interval = this._interval;
      var extent = this._extent;
      var ticks = [];
      if (!interval) {
        return ticks;
      }
      ticks.push({
        value: extent[0],
        level: 0
      });
      var useUTC = this.getSetting("useUTC");
      var innerTicks = getIntervalTicks(this._minLevelUnit, this._approxInterval, useUTC, extent);
      ticks = ticks.concat(innerTicks);
      ticks.push({
        value: extent[1],
        level: 0
      });
      return ticks;
    };
    TimeScale2.prototype.calcNiceExtent = function(opt) {
      var extent = this._extent;
      if (extent[0] === extent[1]) {
        extent[0] -= ONE_DAY;
        extent[1] += ONE_DAY;
      }
      if (extent[1] === -Infinity && extent[0] === Infinity) {
        var d = /* @__PURE__ */ new Date();
        extent[1] = +new Date(d.getFullYear(), d.getMonth(), d.getDate());
        extent[0] = extent[1] - ONE_DAY;
      }
      this.calcNiceTicks(opt.splitNumber, opt.minInterval, opt.maxInterval);
    };
    TimeScale2.prototype.calcNiceTicks = function(approxTickNum, minInterval, maxInterval) {
      approxTickNum = approxTickNum || 10;
      var extent = this._extent;
      var span = extent[1] - extent[0];
      this._approxInterval = span / approxTickNum;
      if (minInterval != null && this._approxInterval < minInterval) {
        this._approxInterval = minInterval;
      }
      if (maxInterval != null && this._approxInterval > maxInterval) {
        this._approxInterval = maxInterval;
      }
      var scaleIntervalsLen = scaleIntervals.length;
      var idx = Math.min(bisect(scaleIntervals, this._approxInterval, 0, scaleIntervalsLen), scaleIntervalsLen - 1);
      this._interval = scaleIntervals[idx][1];
      this._minLevelUnit = scaleIntervals[Math.max(idx - 1, 0)][0];
    };
    TimeScale2.prototype.parse = function(val) {
      return isNumber$1(val) ? val : +parseDate(val);
    };
    TimeScale2.prototype.contain = function(val) {
      return contain(this.parse(val), this._extent);
    };
    TimeScale2.prototype.normalize = function(val) {
      return normalize(this.parse(val), this._extent);
    };
    TimeScale2.prototype.scale = function(val) {
      return scale(val, this._extent);
    };
    TimeScale2.type = "time";
    return TimeScale2;
  }(IntervalScale)
);
var scaleIntervals = [
  // Format                           interval
  ["second", ONE_SECOND],
  ["minute", ONE_MINUTE],
  ["hour", ONE_HOUR],
  ["quarter-day", ONE_HOUR * 6],
  ["half-day", ONE_HOUR * 12],
  ["day", ONE_DAY * 1.2],
  ["half-week", ONE_DAY * 3.5],
  ["week", ONE_DAY * 7],
  ["month", ONE_DAY * 31],
  ["quarter", ONE_DAY * 95],
  ["half-year", ONE_YEAR / 2],
  ["year", ONE_YEAR]
  // 1Y
];
function isUnitValueSame(unit, valueA, valueB, isUTC) {
  var dateA = parseDate(valueA);
  var dateB = parseDate(valueB);
  var isSame = function(unit2) {
    return getUnitValue(dateA, unit2, isUTC) === getUnitValue(dateB, unit2, isUTC);
  };
  var isSameYear = function() {
    return isSame("year");
  };
  var isSameMonth = function() {
    return isSameYear() && isSame("month");
  };
  var isSameDay = function() {
    return isSameMonth() && isSame("day");
  };
  var isSameHour = function() {
    return isSameDay() && isSame("hour");
  };
  var isSameMinute = function() {
    return isSameHour() && isSame("minute");
  };
  var isSameSecond = function() {
    return isSameMinute() && isSame("second");
  };
  var isSameMilliSecond = function() {
    return isSameSecond() && isSame("millisecond");
  };
  switch (unit) {
    case "year":
      return isSameYear();
    case "month":
      return isSameMonth();
    case "day":
      return isSameDay();
    case "hour":
      return isSameHour();
    case "minute":
      return isSameMinute();
    case "second":
      return isSameSecond();
    case "millisecond":
      return isSameMilliSecond();
  }
}
function getDateInterval(approxInterval, daysInMonth) {
  approxInterval /= ONE_DAY;
  return approxInterval > 16 ? 16 : approxInterval > 7.5 ? 7 : approxInterval > 3.5 ? 4 : approxInterval > 1.5 ? 2 : 1;
}
function getMonthInterval(approxInterval) {
  var APPROX_ONE_MONTH = 30 * ONE_DAY;
  approxInterval /= APPROX_ONE_MONTH;
  return approxInterval > 6 ? 6 : approxInterval > 3 ? 3 : approxInterval > 2 ? 2 : 1;
}
function getHourInterval(approxInterval) {
  approxInterval /= ONE_HOUR;
  return approxInterval > 12 ? 12 : approxInterval > 6 ? 6 : approxInterval > 3.5 ? 4 : approxInterval > 2 ? 2 : 1;
}
function getMinutesAndSecondsInterval(approxInterval, isMinutes) {
  approxInterval /= isMinutes ? ONE_MINUTE : ONE_SECOND;
  return approxInterval > 30 ? 30 : approxInterval > 20 ? 20 : approxInterval > 15 ? 15 : approxInterval > 10 ? 10 : approxInterval > 5 ? 5 : approxInterval > 2 ? 2 : 1;
}
function getMillisecondsInterval(approxInterval) {
  return nice(approxInterval);
}
function getFirstTimestampOfUnit(date, unitName, isUTC) {
  var outDate = new Date(date);
  switch (getPrimaryTimeUnit(unitName)) {
    case "year":
    case "month":
      outDate[monthSetterName(isUTC)](0);
    case "day":
      outDate[dateSetterName(isUTC)](1);
    case "hour":
      outDate[hoursSetterName(isUTC)](0);
    case "minute":
      outDate[minutesSetterName(isUTC)](0);
    case "second":
      outDate[secondsSetterName(isUTC)](0);
      outDate[millisecondsSetterName(isUTC)](0);
  }
  return outDate.getTime();
}
function getIntervalTicks(bottomUnitName, approxInterval, isUTC, extent) {
  var safeLimit = 1e4;
  var unitNames = timeUnits;
  var iter = 0;
  function addTicksInSpan(interval, minTimestamp, maxTimestamp, getMethodName, setMethodName, isDate, out) {
    var date = new Date(minTimestamp);
    var dateTime = minTimestamp;
    var d = date[getMethodName]();
    while (dateTime < maxTimestamp && dateTime <= extent[1]) {
      out.push({
        value: dateTime
      });
      d += interval;
      date[setMethodName](d);
      dateTime = date.getTime();
    }
    out.push({
      value: dateTime,
      notAdd: true
    });
  }
  function addLevelTicks(unitName, lastLevelTicks, levelTicks2) {
    var newAddedTicks = [];
    var isFirstLevel = !lastLevelTicks.length;
    if (isUnitValueSame(getPrimaryTimeUnit(unitName), extent[0], extent[1], isUTC)) {
      return;
    }
    if (isFirstLevel) {
      lastLevelTicks = [{
        // TODO Optimize. Not include so may ticks.
        value: getFirstTimestampOfUnit(new Date(extent[0]), unitName, isUTC)
      }, {
        value: extent[1]
      }];
    }
    for (var i2 = 0; i2 < lastLevelTicks.length - 1; i2++) {
      var startTick = lastLevelTicks[i2].value;
      var endTick = lastLevelTicks[i2 + 1].value;
      if (startTick === endTick) {
        continue;
      }
      var interval = void 0;
      var getterName = void 0;
      var setterName = void 0;
      var isDate = false;
      switch (unitName) {
        case "year":
          interval = Math.max(1, Math.round(approxInterval / ONE_DAY / 365));
          getterName = fullYearGetterName(isUTC);
          setterName = fullYearSetterName(isUTC);
          break;
        case "half-year":
        case "quarter":
        case "month":
          interval = getMonthInterval(approxInterval);
          getterName = monthGetterName(isUTC);
          setterName = monthSetterName(isUTC);
          break;
        case "week":
        case "half-week":
        case "day":
          interval = getDateInterval(approxInterval);
          getterName = dateGetterName(isUTC);
          setterName = dateSetterName(isUTC);
          isDate = true;
          break;
        case "half-day":
        case "quarter-day":
        case "hour":
          interval = getHourInterval(approxInterval);
          getterName = hoursGetterName(isUTC);
          setterName = hoursSetterName(isUTC);
          break;
        case "minute":
          interval = getMinutesAndSecondsInterval(approxInterval, true);
          getterName = minutesGetterName(isUTC);
          setterName = minutesSetterName(isUTC);
          break;
        case "second":
          interval = getMinutesAndSecondsInterval(approxInterval, false);
          getterName = secondsGetterName(isUTC);
          setterName = secondsSetterName(isUTC);
          break;
        case "millisecond":
          interval = getMillisecondsInterval(approxInterval);
          getterName = millisecondsGetterName(isUTC);
          setterName = millisecondsSetterName(isUTC);
          break;
      }
      addTicksInSpan(interval, startTick, endTick, getterName, setterName, isDate, newAddedTicks);
      if (unitName === "year" && levelTicks2.length > 1 && i2 === 0) {
        levelTicks2.unshift({
          value: levelTicks2[0].value - interval
        });
      }
    }
    for (var i2 = 0; i2 < newAddedTicks.length; i2++) {
      levelTicks2.push(newAddedTicks[i2]);
    }
    return newAddedTicks;
  }
  var levelsTicks = [];
  var currentLevelTicks = [];
  var tickCount = 0;
  var lastLevelTickCount = 0;
  for (var i = 0; i < unitNames.length && iter++ < safeLimit; ++i) {
    var primaryTimeUnit = getPrimaryTimeUnit(unitNames[i]);
    if (!isPrimaryTimeUnit(unitNames[i])) {
      continue;
    }
    addLevelTicks(unitNames[i], levelsTicks[levelsTicks.length - 1] || [], currentLevelTicks);
    var nextPrimaryTimeUnit = unitNames[i + 1] ? getPrimaryTimeUnit(unitNames[i + 1]) : null;
    if (primaryTimeUnit !== nextPrimaryTimeUnit) {
      if (currentLevelTicks.length) {
        lastLevelTickCount = tickCount;
        currentLevelTicks.sort(function(a, b) {
          return a.value - b.value;
        });
        var levelTicksRemoveDuplicated = [];
        for (var i_1 = 0; i_1 < currentLevelTicks.length; ++i_1) {
          var tickValue = currentLevelTicks[i_1].value;
          if (i_1 === 0 || currentLevelTicks[i_1 - 1].value !== tickValue) {
            levelTicksRemoveDuplicated.push(currentLevelTicks[i_1]);
            if (tickValue >= extent[0] && tickValue <= extent[1]) {
              tickCount++;
            }
          }
        }
        var targetTickNum = (extent[1] - extent[0]) / approxInterval;
        if (tickCount > targetTickNum * 1.5 && lastLevelTickCount > targetTickNum / 1.5) {
          break;
        }
        levelsTicks.push(levelTicksRemoveDuplicated);
        if (tickCount > targetTickNum || bottomUnitName === unitNames[i]) {
          break;
        }
      }
      currentLevelTicks = [];
    }
  }
  var levelsTicksInExtent = filter(map$1(levelsTicks, function(levelTicks2) {
    return filter(levelTicks2, function(tick) {
      return tick.value >= extent[0] && tick.value <= extent[1] && !tick.notAdd;
    });
  }), function(levelTicks2) {
    return levelTicks2.length > 0;
  });
  var ticks = [];
  var maxLevel = levelsTicksInExtent.length - 1;
  for (var i = 0; i < levelsTicksInExtent.length; ++i) {
    var levelTicks = levelsTicksInExtent[i];
    for (var k = 0; k < levelTicks.length; ++k) {
      ticks.push({
        value: levelTicks[k].value,
        level: maxLevel - i
      });
    }
  }
  ticks.sort(function(a, b) {
    return a.value - b.value;
  });
  var result = [];
  for (var i = 0; i < ticks.length; ++i) {
    if (i === 0 || ticks[i].value !== ticks[i - 1].value) {
      result.push(ticks[i]);
    }
  }
  return result;
}
Scale.registerClass(TimeScale);
var scaleProto = Scale.prototype;
var intervalScaleProto = IntervalScale.prototype;
var roundingErrorFix = round;
var mathFloor = Math.floor;
var mathCeil = Math.ceil;
var mathPow = Math.pow;
var mathLog$1 = Math.log;
var LogScale = (
  /** @class */
  function(_super) {
    __extends(LogScale2, _super);
    function LogScale2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "log";
      _this.base = 10;
      _this._originalScale = new IntervalScale();
      _this._interval = 0;
      return _this;
    }
    LogScale2.prototype.getTicks = function(expandToNicedExtent) {
      var originalScale = this._originalScale;
      var extent = this._extent;
      var originalExtent = originalScale.getExtent();
      var ticks = intervalScaleProto.getTicks.call(this, expandToNicedExtent);
      return zrUtil.map(ticks, function(tick) {
        var val = tick.value;
        var powVal = round(mathPow(this.base, val));
        powVal = val === extent[0] && this._fixMin ? fixRoundingError(powVal, originalExtent[0]) : powVal;
        powVal = val === extent[1] && this._fixMax ? fixRoundingError(powVal, originalExtent[1]) : powVal;
        return {
          value: powVal
        };
      }, this);
    };
    LogScale2.prototype.setExtent = function(start, end) {
      var base2 = mathLog$1(this.base);
      start = mathLog$1(Math.max(0, start)) / base2;
      end = mathLog$1(Math.max(0, end)) / base2;
      intervalScaleProto.setExtent.call(this, start, end);
    };
    LogScale2.prototype.getExtent = function() {
      var base2 = this.base;
      var extent = scaleProto.getExtent.call(this);
      extent[0] = mathPow(base2, extent[0]);
      extent[1] = mathPow(base2, extent[1]);
      var originalScale = this._originalScale;
      var originalExtent = originalScale.getExtent();
      this._fixMin && (extent[0] = fixRoundingError(extent[0], originalExtent[0]));
      this._fixMax && (extent[1] = fixRoundingError(extent[1], originalExtent[1]));
      return extent;
    };
    LogScale2.prototype.unionExtent = function(extent) {
      this._originalScale.unionExtent(extent);
      var base2 = this.base;
      extent[0] = mathLog$1(extent[0]) / mathLog$1(base2);
      extent[1] = mathLog$1(extent[1]) / mathLog$1(base2);
      scaleProto.unionExtent.call(this, extent);
    };
    LogScale2.prototype.unionExtentFromData = function(data, dim) {
      this.unionExtent(data.getApproximateExtent(dim));
    };
    LogScale2.prototype.calcNiceTicks = function(approxTickNum) {
      approxTickNum = approxTickNum || 10;
      var extent = this._extent;
      var span = extent[1] - extent[0];
      if (span === Infinity || span <= 0) {
        return;
      }
      var interval = quantity(span);
      var err = approxTickNum / span * interval;
      if (err <= 0.5) {
        interval *= 10;
      }
      while (!isNaN(interval) && Math.abs(interval) < 1 && Math.abs(interval) > 0) {
        interval *= 10;
      }
      var niceExtent = [round(mathCeil(extent[0] / interval) * interval), round(mathFloor(extent[1] / interval) * interval)];
      this._interval = interval;
      this._niceExtent = niceExtent;
    };
    LogScale2.prototype.calcNiceExtent = function(opt) {
      intervalScaleProto.calcNiceExtent.call(this, opt);
      this._fixMin = opt.fixMin;
      this._fixMax = opt.fixMax;
    };
    LogScale2.prototype.parse = function(val) {
      return val;
    };
    LogScale2.prototype.contain = function(val) {
      val = mathLog$1(val) / mathLog$1(this.base);
      return contain(val, this._extent);
    };
    LogScale2.prototype.normalize = function(val) {
      val = mathLog$1(val) / mathLog$1(this.base);
      return normalize(val, this._extent);
    };
    LogScale2.prototype.scale = function(val) {
      val = scale(val, this._extent);
      return mathPow(this.base, val);
    };
    LogScale2.type = "log";
    return LogScale2;
  }(Scale)
);
var proto = LogScale.prototype;
proto.getMinorTicks = intervalScaleProto.getMinorTicks;
proto.getLabel = intervalScaleProto.getLabel;
function fixRoundingError(val, originalVal) {
  return roundingErrorFix(val, getPrecision(originalVal));
}
Scale.registerClass(LogScale);
var ScaleRawExtentInfo = (
  /** @class */
  function() {
    function ScaleRawExtentInfo2(scale2, model, originalExtent) {
      this._prepareParams(scale2, model, originalExtent);
    }
    ScaleRawExtentInfo2.prototype._prepareParams = function(scale2, model, dataExtent) {
      if (dataExtent[1] < dataExtent[0]) {
        dataExtent = [NaN, NaN];
      }
      this._dataMin = dataExtent[0];
      this._dataMax = dataExtent[1];
      var isOrdinal = this._isOrdinal = scale2.type === "ordinal";
      this._needCrossZero = scale2.type === "interval" && model.getNeedCrossZero && model.getNeedCrossZero();
      var axisMinValue = model.get("min", true);
      if (axisMinValue == null) {
        axisMinValue = model.get("startValue", true);
      }
      var modelMinRaw = this._modelMinRaw = axisMinValue;
      if (isFunction$1(modelMinRaw)) {
        this._modelMinNum = parseAxisModelMinMax(scale2, modelMinRaw({
          min: dataExtent[0],
          max: dataExtent[1]
        }));
      } else if (modelMinRaw !== "dataMin") {
        this._modelMinNum = parseAxisModelMinMax(scale2, modelMinRaw);
      }
      var modelMaxRaw = this._modelMaxRaw = model.get("max", true);
      if (isFunction$1(modelMaxRaw)) {
        this._modelMaxNum = parseAxisModelMinMax(scale2, modelMaxRaw({
          min: dataExtent[0],
          max: dataExtent[1]
        }));
      } else if (modelMaxRaw !== "dataMax") {
        this._modelMaxNum = parseAxisModelMinMax(scale2, modelMaxRaw);
      }
      if (isOrdinal) {
        this._axisDataLen = model.getCategories().length;
      } else {
        var boundaryGap = model.get("boundaryGap");
        var boundaryGapArr = isArray$1(boundaryGap) ? boundaryGap : [boundaryGap || 0, boundaryGap || 0];
        if (typeof boundaryGapArr[0] === "boolean" || typeof boundaryGapArr[1] === "boolean") {
          this._boundaryGapInner = [0, 0];
        } else {
          this._boundaryGapInner = [parsePercent$1(boundaryGapArr[0], 1), parsePercent$1(boundaryGapArr[1], 1)];
        }
      }
    };
    ScaleRawExtentInfo2.prototype.calculate = function() {
      var isOrdinal = this._isOrdinal;
      var dataMin = this._dataMin;
      var dataMax = this._dataMax;
      var axisDataLen = this._axisDataLen;
      var boundaryGapInner = this._boundaryGapInner;
      var span = !isOrdinal ? dataMax - dataMin || Math.abs(dataMin) : null;
      var min = this._modelMinRaw === "dataMin" ? dataMin : this._modelMinNum;
      var max = this._modelMaxRaw === "dataMax" ? dataMax : this._modelMaxNum;
      var minFixed = min != null;
      var maxFixed = max != null;
      if (min == null) {
        min = isOrdinal ? axisDataLen ? 0 : NaN : dataMin - boundaryGapInner[0] * span;
      }
      if (max == null) {
        max = isOrdinal ? axisDataLen ? axisDataLen - 1 : NaN : dataMax + boundaryGapInner[1] * span;
      }
      (min == null || !isFinite(min)) && (min = NaN);
      (max == null || !isFinite(max)) && (max = NaN);
      var isBlank = eqNaN(min) || eqNaN(max) || isOrdinal && !axisDataLen;
      if (this._needCrossZero) {
        if (min > 0 && max > 0 && !minFixed) {
          min = 0;
        }
        if (min < 0 && max < 0 && !maxFixed) {
          max = 0;
        }
      }
      var determinedMin = this._determinedMin;
      var determinedMax = this._determinedMax;
      if (determinedMin != null) {
        min = determinedMin;
        minFixed = true;
      }
      if (determinedMax != null) {
        max = determinedMax;
        maxFixed = true;
      }
      return {
        min,
        max,
        minFixed,
        maxFixed,
        isBlank
      };
    };
    ScaleRawExtentInfo2.prototype.modifyDataMinMax = function(minMaxName, val) {
      this[DATA_MIN_MAX_ATTR[minMaxName]] = val;
    };
    ScaleRawExtentInfo2.prototype.setDeterminedMinMax = function(minMaxName, val) {
      var attr = DETERMINED_MIN_MAX_ATTR[minMaxName];
      this[attr] = val;
    };
    ScaleRawExtentInfo2.prototype.freeze = function() {
      this.frozen = true;
    };
    return ScaleRawExtentInfo2;
  }()
);
var DETERMINED_MIN_MAX_ATTR = {
  min: "_determinedMin",
  max: "_determinedMax"
};
var DATA_MIN_MAX_ATTR = {
  min: "_dataMin",
  max: "_dataMax"
};
function ensureScaleRawExtentInfo(scale2, model, originalExtent) {
  var rawExtentInfo = scale2.rawExtentInfo;
  if (rawExtentInfo) {
    return rawExtentInfo;
  }
  rawExtentInfo = new ScaleRawExtentInfo(scale2, model, originalExtent);
  scale2.rawExtentInfo = rawExtentInfo;
  return rawExtentInfo;
}
function parseAxisModelMinMax(scale2, minMax) {
  return minMax == null ? null : eqNaN(minMax) ? NaN : scale2.parse(minMax);
}
function getScaleExtent(scale2, model) {
  var scaleType = scale2.type;
  var rawExtentResult = ensureScaleRawExtentInfo(scale2, model, scale2.getExtent()).calculate();
  scale2.setBlank(rawExtentResult.isBlank);
  var min = rawExtentResult.min;
  var max = rawExtentResult.max;
  var ecModel = model.ecModel;
  if (ecModel && scaleType === "time") {
    var barSeriesModels = prepareLayoutBarSeries("bar", ecModel);
    var isBaseAxisAndHasBarSeries_1 = false;
    zrUtil.each(barSeriesModels, function(seriesModel) {
      isBaseAxisAndHasBarSeries_1 = isBaseAxisAndHasBarSeries_1 || seriesModel.getBaseAxis() === model.axis;
    });
    if (isBaseAxisAndHasBarSeries_1) {
      var barWidthAndOffset = makeColumnLayout(barSeriesModels);
      var adjustedScale = adjustScaleForOverflow(min, max, model, barWidthAndOffset);
      min = adjustedScale.min;
      max = adjustedScale.max;
    }
  }
  return {
    extent: [min, max],
    // "fix" means "fixed", the value should not be
    // changed in the subsequent steps.
    fixMin: rawExtentResult.minFixed,
    fixMax: rawExtentResult.maxFixed
  };
}
function adjustScaleForOverflow(min, max, model, barWidthAndOffset) {
  var axisExtent = model.axis.getExtent();
  var axisLength = axisExtent[1] - axisExtent[0];
  var barsOnCurrentAxis = retrieveColumnLayout(barWidthAndOffset, model.axis);
  if (barsOnCurrentAxis === void 0) {
    return {
      min,
      max
    };
  }
  var minOverflow = Infinity;
  zrUtil.each(barsOnCurrentAxis, function(item) {
    minOverflow = Math.min(item.offset, minOverflow);
  });
  var maxOverflow = -Infinity;
  zrUtil.each(barsOnCurrentAxis, function(item) {
    maxOverflow = Math.max(item.offset + item.width, maxOverflow);
  });
  minOverflow = Math.abs(minOverflow);
  maxOverflow = Math.abs(maxOverflow);
  var totalOverFlow = minOverflow + maxOverflow;
  var oldRange = max - min;
  var oldRangePercentOfNew = 1 - (minOverflow + maxOverflow) / axisLength;
  var overflowBuffer = oldRange / oldRangePercentOfNew - oldRange;
  max += overflowBuffer * (maxOverflow / totalOverFlow);
  min -= overflowBuffer * (minOverflow / totalOverFlow);
  return {
    min,
    max
  };
}
function niceScaleExtent(scale2, inModel) {
  var model = inModel;
  var extentInfo = getScaleExtent(scale2, model);
  var extent = extentInfo.extent;
  var splitNumber = model.get("splitNumber");
  if (scale2 instanceof LogScale) {
    scale2.base = model.get("logBase");
  }
  var scaleType = scale2.type;
  var interval = model.get("interval");
  var isIntervalOrTime = scaleType === "interval" || scaleType === "time";
  scale2.setExtent(extent[0], extent[1]);
  scale2.calcNiceExtent({
    splitNumber,
    fixMin: extentInfo.fixMin,
    fixMax: extentInfo.fixMax,
    minInterval: isIntervalOrTime ? model.get("minInterval") : null,
    maxInterval: isIntervalOrTime ? model.get("maxInterval") : null
  });
  if (interval != null) {
    scale2.setInterval && scale2.setInterval(interval);
  }
}
function createScaleByModel(model, axisType) {
  axisType = axisType || model.get("type");
  if (axisType) {
    switch (axisType) {
      case "category":
        return new OrdinalScale({
          ordinalMeta: model.getOrdinalMeta ? model.getOrdinalMeta() : model.getCategories(),
          extent: [Infinity, -Infinity]
        });
      case "time":
        return new TimeScale({
          locale: model.ecModel.getLocaleModel(),
          useUTC: model.ecModel.get("useUTC")
        });
      default:
        return new (Scale.getClass(axisType) || IntervalScale)();
    }
  }
}
function ifAxisCrossZero(axis) {
  var dataExtent = axis.scale.getExtent();
  var min = dataExtent[0];
  var max = dataExtent[1];
  return !(min > 0 && max > 0 || min < 0 && max < 0);
}
function makeLabelFormatter(axis) {
  var labelFormatter = axis.getLabelModel().get("formatter");
  var categoryTickStart = axis.type === "category" ? axis.scale.getExtent()[0] : null;
  if (axis.scale.type === "time") {
    return /* @__PURE__ */ function(tpl) {
      return function(tick, idx) {
        return axis.scale.getFormattedLabel(tick, idx, tpl);
      };
    }(labelFormatter);
  } else if (zrUtil.isString(labelFormatter)) {
    return /* @__PURE__ */ function(tpl) {
      return function(tick) {
        var label = axis.scale.getLabel(tick);
        var text = tpl.replace("{value}", label != null ? label : "");
        return text;
      };
    }(labelFormatter);
  } else if (zrUtil.isFunction(labelFormatter)) {
    return /* @__PURE__ */ function(cb) {
      return function(tick, idx) {
        if (categoryTickStart != null) {
          idx = tick.value - categoryTickStart;
        }
        return cb(getAxisRawValue(axis, tick), idx, tick.level != null ? {
          level: tick.level
        } : null);
      };
    }(labelFormatter);
  } else {
    return function(tick) {
      return axis.scale.getLabel(tick);
    };
  }
}
function getAxisRawValue(axis, tick) {
  return axis.type === "category" ? axis.scale.getLabel(tick) : tick.value;
}
function estimateLabelUnionRect(axis) {
  var axisModel = axis.model;
  var scale2 = axis.scale;
  if (!axisModel.get(["axisLabel", "show"]) || scale2.isBlank()) {
    return;
  }
  var realNumberScaleTicks;
  var tickCount;
  var categoryScaleExtent = scale2.getExtent();
  if (scale2 instanceof OrdinalScale) {
    tickCount = scale2.count();
  } else {
    realNumberScaleTicks = scale2.getTicks();
    tickCount = realNumberScaleTicks.length;
  }
  var axisLabelModel = axis.getLabelModel();
  var labelFormatter = makeLabelFormatter(axis);
  var rect;
  var step = 1;
  if (tickCount > 40) {
    step = Math.ceil(tickCount / 40);
  }
  for (var i = 0; i < tickCount; i += step) {
    var tick = realNumberScaleTicks ? realNumberScaleTicks[i] : {
      value: categoryScaleExtent[0] + i
    };
    var label = labelFormatter(tick, i);
    var unrotatedSingleRect = axisLabelModel.getTextRect(label);
    var singleRect = rotateTextRect(unrotatedSingleRect, axisLabelModel.get("rotate") || 0);
    rect ? rect.union(singleRect) : rect = singleRect;
  }
  return rect;
}
function rotateTextRect(textRect, rotate) {
  var rotateRadians = rotate * Math.PI / 180;
  var beforeWidth = textRect.width;
  var beforeHeight = textRect.height;
  var afterWidth = beforeWidth * Math.abs(Math.cos(rotateRadians)) + Math.abs(beforeHeight * Math.sin(rotateRadians));
  var afterHeight = beforeWidth * Math.abs(Math.sin(rotateRadians)) + Math.abs(beforeHeight * Math.cos(rotateRadians));
  var rotatedRect = new BoundingRect(textRect.x, textRect.y, afterWidth, afterHeight);
  return rotatedRect;
}
function getOptionCategoryInterval(model) {
  var interval = model.get("interval");
  return interval == null ? "auto" : interval;
}
function shouldShowAllLabels(axis) {
  return axis.type === "category" && getOptionCategoryInterval(axis.getLabelModel()) === 0;
}
function getDataDimensionsOnAxis(data, axisDim) {
  var dataDimMap = {};
  zrUtil.each(data.mapDimensionsAll(axisDim), function(dataDim) {
    dataDimMap[getStackedDimension(data, dataDim)] = true;
  });
  return zrUtil.keys(dataDimMap);
}
var AxisModelCommonMixin = (
  /** @class */
  function() {
    function AxisModelCommonMixin2() {
    }
    AxisModelCommonMixin2.prototype.getNeedCrossZero = function() {
      var option = this.option;
      return !option.scale;
    };
    AxisModelCommonMixin2.prototype.getCoordSysModel = function() {
      return;
    };
    return AxisModelCommonMixin2;
  }()
);
var extensions = [];
var extensionRegisters = {
  registerPreprocessor,
  registerProcessor,
  registerPostInit,
  registerPostUpdate,
  registerUpdateLifecycle,
  registerAction,
  registerCoordinateSystem,
  registerLayout,
  registerVisual,
  registerTransform,
  registerLoading,
  registerMap,
  registerImpl,
  PRIORITY,
  ComponentModel,
  ComponentView,
  SeriesModel,
  ChartView,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(ComponentModelClass) {
    ComponentModel.registerClass(ComponentModelClass);
  },
  registerComponentView: function(ComponentViewClass) {
    ComponentView.registerClass(ComponentViewClass);
  },
  registerSeriesModel: function(SeriesModelClass) {
    SeriesModel.registerClass(SeriesModelClass);
  },
  registerChartView: function(ChartViewClass) {
    ChartView.registerClass(ChartViewClass);
  },
  registerSubTypeDefaulter: function(componentType, defaulter) {
    ComponentModel.registerSubTypeDefaulter(componentType, defaulter);
  },
  registerPainter: function(painterType, PainterCtor) {
    registerPainter(painterType, PainterCtor);
  }
};
function use(ext) {
  if (isArray$1(ext)) {
    each$3(ext, function(singleExt) {
      use(singleExt);
    });
    return;
  }
  if (indexOf(extensions, ext) >= 0) {
    return;
  }
  extensions.push(ext);
  if (isFunction$1(ext)) {
    ext = {
      install: ext
    };
  }
  ext.install(extensionRegisters);
}
var inner$4 = makeInner();
function tickValuesToNumbers(axis, values) {
  var nums = zrUtil.map(values, function(val) {
    return axis.scale.parse(val);
  });
  if (axis.type === "time" && nums.length > 0) {
    nums.sort();
    nums.unshift(nums[0]);
    nums.push(nums[nums.length - 1]);
  }
  return nums;
}
function createAxisLabels(axis) {
  var custom = axis.getLabelModel().get("customValues");
  if (custom) {
    var labelFormatter_1 = makeLabelFormatter(axis);
    return {
      labels: tickValuesToNumbers(axis, custom).map(function(numval) {
        var tick = {
          value: numval
        };
        return {
          formattedLabel: labelFormatter_1(tick),
          rawLabel: axis.scale.getLabel(tick),
          tickValue: numval
        };
      })
    };
  }
  return axis.type === "category" ? makeCategoryLabels(axis) : makeRealNumberLabels(axis);
}
function createAxisTicks(axis, tickModel) {
  var custom = axis.getTickModel().get("customValues");
  if (custom) {
    return {
      ticks: tickValuesToNumbers(axis, custom)
    };
  }
  return axis.type === "category" ? makeCategoryTicks(axis, tickModel) : {
    ticks: zrUtil.map(axis.scale.getTicks(), function(tick) {
      return tick.value;
    })
  };
}
function makeCategoryLabels(axis) {
  var labelModel = axis.getLabelModel();
  var result = makeCategoryLabelsActually(axis, labelModel);
  return !labelModel.get("show") || axis.scale.isBlank() ? {
    labels: [],
    labelCategoryInterval: result.labelCategoryInterval
  } : result;
}
function makeCategoryLabelsActually(axis, labelModel) {
  var labelsCache = getListCache(axis, "labels");
  var optionLabelInterval = getOptionCategoryInterval(labelModel);
  var result = listCacheGet(labelsCache, optionLabelInterval);
  if (result) {
    return result;
  }
  var labels;
  var numericLabelInterval;
  if (zrUtil.isFunction(optionLabelInterval)) {
    labels = makeLabelsByCustomizedCategoryInterval(axis, optionLabelInterval);
  } else {
    numericLabelInterval = optionLabelInterval === "auto" ? makeAutoCategoryInterval(axis) : optionLabelInterval;
    labels = makeLabelsByNumericCategoryInterval(axis, numericLabelInterval);
  }
  return listCacheSet(labelsCache, optionLabelInterval, {
    labels,
    labelCategoryInterval: numericLabelInterval
  });
}
function makeCategoryTicks(axis, tickModel) {
  var ticksCache = getListCache(axis, "ticks");
  var optionTickInterval = getOptionCategoryInterval(tickModel);
  var result = listCacheGet(ticksCache, optionTickInterval);
  if (result) {
    return result;
  }
  var ticks;
  var tickCategoryInterval;
  if (!tickModel.get("show") || axis.scale.isBlank()) {
    ticks = [];
  }
  if (zrUtil.isFunction(optionTickInterval)) {
    ticks = makeLabelsByCustomizedCategoryInterval(axis, optionTickInterval, true);
  } else if (optionTickInterval === "auto") {
    var labelsResult = makeCategoryLabelsActually(axis, axis.getLabelModel());
    tickCategoryInterval = labelsResult.labelCategoryInterval;
    ticks = zrUtil.map(labelsResult.labels, function(labelItem) {
      return labelItem.tickValue;
    });
  } else {
    tickCategoryInterval = optionTickInterval;
    ticks = makeLabelsByNumericCategoryInterval(axis, tickCategoryInterval, true);
  }
  return listCacheSet(ticksCache, optionTickInterval, {
    ticks,
    tickCategoryInterval
  });
}
function makeRealNumberLabels(axis) {
  var ticks = axis.scale.getTicks();
  var labelFormatter = makeLabelFormatter(axis);
  return {
    labels: zrUtil.map(ticks, function(tick, idx) {
      return {
        level: tick.level,
        formattedLabel: labelFormatter(tick, idx),
        rawLabel: axis.scale.getLabel(tick),
        tickValue: tick.value
      };
    })
  };
}
function getListCache(axis, prop) {
  return inner$4(axis)[prop] || (inner$4(axis)[prop] = []);
}
function listCacheGet(cache, key) {
  for (var i = 0; i < cache.length; i++) {
    if (cache[i].key === key) {
      return cache[i].value;
    }
  }
}
function listCacheSet(cache, key, value) {
  cache.push({
    key,
    value
  });
  return value;
}
function makeAutoCategoryInterval(axis) {
  var result = inner$4(axis).autoInterval;
  return result != null ? result : inner$4(axis).autoInterval = axis.calculateCategoryInterval();
}
function calculateCategoryInterval(axis) {
  var params = fetchAutoCategoryIntervalCalculationParams(axis);
  var labelFormatter = makeLabelFormatter(axis);
  var rotation = (params.axisRotate - params.labelRotate) / 180 * Math.PI;
  var ordinalScale = axis.scale;
  var ordinalExtent = ordinalScale.getExtent();
  var tickCount = ordinalScale.count();
  if (ordinalExtent[1] - ordinalExtent[0] < 1) {
    return 0;
  }
  var step = 1;
  if (tickCount > 40) {
    step = Math.max(1, Math.floor(tickCount / 40));
  }
  var tickValue = ordinalExtent[0];
  var unitSpan = axis.dataToCoord(tickValue + 1) - axis.dataToCoord(tickValue);
  var unitW = Math.abs(unitSpan * Math.cos(rotation));
  var unitH = Math.abs(unitSpan * Math.sin(rotation));
  var maxW = 0;
  var maxH = 0;
  for (; tickValue <= ordinalExtent[1]; tickValue += step) {
    var width = 0;
    var height = 0;
    var rect = textContain.getBoundingRect(labelFormatter({
      value: tickValue
    }), params.font, "center", "top");
    width = rect.width * 1.3;
    height = rect.height * 1.3;
    maxW = Math.max(maxW, width, 7);
    maxH = Math.max(maxH, height, 7);
  }
  var dw = maxW / unitW;
  var dh = maxH / unitH;
  isNaN(dw) && (dw = Infinity);
  isNaN(dh) && (dh = Infinity);
  var interval = Math.max(0, Math.floor(Math.min(dw, dh)));
  var cache = inner$4(axis.model);
  var axisExtent = axis.getExtent();
  var lastAutoInterval = cache.lastAutoInterval;
  var lastTickCount = cache.lastTickCount;
  if (lastAutoInterval != null && lastTickCount != null && Math.abs(lastAutoInterval - interval) <= 1 && Math.abs(lastTickCount - tickCount) <= 1 && lastAutoInterval > interval && cache.axisExtent0 === axisExtent[0] && cache.axisExtent1 === axisExtent[1]) {
    interval = lastAutoInterval;
  } else {
    cache.lastTickCount = tickCount;
    cache.lastAutoInterval = interval;
    cache.axisExtent0 = axisExtent[0];
    cache.axisExtent1 = axisExtent[1];
  }
  return interval;
}
function fetchAutoCategoryIntervalCalculationParams(axis) {
  var labelModel = axis.getLabelModel();
  return {
    axisRotate: axis.getRotate ? axis.getRotate() : axis.isHorizontal && !axis.isHorizontal() ? 90 : 0,
    labelRotate: labelModel.get("rotate") || 0,
    font: labelModel.getFont()
  };
}
function makeLabelsByNumericCategoryInterval(axis, categoryInterval, onlyTick) {
  var labelFormatter = makeLabelFormatter(axis);
  var ordinalScale = axis.scale;
  var ordinalExtent = ordinalScale.getExtent();
  var labelModel = axis.getLabelModel();
  var result = [];
  var step = Math.max((categoryInterval || 0) + 1, 1);
  var startTick = ordinalExtent[0];
  var tickCount = ordinalScale.count();
  if (startTick !== 0 && step > 1 && tickCount / step > 2) {
    startTick = Math.round(Math.ceil(startTick / step) * step);
  }
  var showAllLabel = shouldShowAllLabels(axis);
  var includeMinLabel = labelModel.get("showMinLabel") || showAllLabel;
  var includeMaxLabel = labelModel.get("showMaxLabel") || showAllLabel;
  if (includeMinLabel && startTick !== ordinalExtent[0]) {
    addItem(ordinalExtent[0]);
  }
  var tickValue = startTick;
  for (; tickValue <= ordinalExtent[1]; tickValue += step) {
    addItem(tickValue);
  }
  if (includeMaxLabel && tickValue - step !== ordinalExtent[1]) {
    addItem(ordinalExtent[1]);
  }
  function addItem(tickValue2) {
    var tickObj = {
      value: tickValue2
    };
    result.push(onlyTick ? tickValue2 : {
      formattedLabel: labelFormatter(tickObj),
      rawLabel: ordinalScale.getLabel(tickObj),
      tickValue: tickValue2
    });
  }
  return result;
}
function makeLabelsByCustomizedCategoryInterval(axis, categoryInterval, onlyTick) {
  var ordinalScale = axis.scale;
  var labelFormatter = makeLabelFormatter(axis);
  var result = [];
  zrUtil.each(ordinalScale.getTicks(), function(tick) {
    var rawLabel = ordinalScale.getLabel(tick);
    var tickValue = tick.value;
    if (categoryInterval(tick.value, rawLabel)) {
      result.push(onlyTick ? tickValue : {
        formattedLabel: labelFormatter(tick),
        rawLabel,
        tickValue
      });
    }
  });
  return result;
}
var NORMALIZED_EXTENT = [0, 1];
var Axis = (
  /** @class */
  function() {
    function Axis2(dim, scale2, extent) {
      this.onBand = false;
      this.inverse = false;
      this.dim = dim;
      this.scale = scale2;
      this._extent = extent || [0, 0];
    }
    Axis2.prototype.contain = function(coord) {
      var extent = this._extent;
      var min = Math.min(extent[0], extent[1]);
      var max = Math.max(extent[0], extent[1]);
      return coord >= min && coord <= max;
    };
    Axis2.prototype.containData = function(data) {
      return this.scale.contain(data);
    };
    Axis2.prototype.getExtent = function() {
      return this._extent.slice();
    };
    Axis2.prototype.getPixelPrecision = function(dataExtent) {
      return getPixelPrecision(dataExtent || this.scale.getExtent(), this._extent);
    };
    Axis2.prototype.setExtent = function(start, end) {
      var extent = this._extent;
      extent[0] = start;
      extent[1] = end;
    };
    Axis2.prototype.dataToCoord = function(data, clamp2) {
      var extent = this._extent;
      var scale2 = this.scale;
      data = scale2.normalize(data);
      if (this.onBand && scale2.type === "ordinal") {
        extent = extent.slice();
        fixExtentWithBands(extent, scale2.count());
      }
      return linearMap(data, NORMALIZED_EXTENT, extent, clamp2);
    };
    Axis2.prototype.coordToData = function(coord, clamp2) {
      var extent = this._extent;
      var scale2 = this.scale;
      if (this.onBand && scale2.type === "ordinal") {
        extent = extent.slice();
        fixExtentWithBands(extent, scale2.count());
      }
      var t = linearMap(coord, extent, NORMALIZED_EXTENT, clamp2);
      return this.scale.scale(t);
    };
    Axis2.prototype.pointToData = function(point, clamp2) {
      return;
    };
    Axis2.prototype.getTicksCoords = function(opt) {
      opt = opt || {};
      var tickModel = opt.tickModel || this.getTickModel();
      var result = createAxisTicks(this, tickModel);
      var ticks = result.ticks;
      var ticksCoords = map$1(ticks, function(tickVal) {
        return {
          coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(tickVal) : tickVal),
          tickValue: tickVal
        };
      }, this);
      var alignWithLabel = tickModel.get("alignWithLabel");
      fixOnBandTicksCoords(this, ticksCoords, alignWithLabel, opt.clamp);
      return ticksCoords;
    };
    Axis2.prototype.getMinorTicksCoords = function() {
      if (this.scale.type === "ordinal") {
        return [];
      }
      var minorTickModel = this.model.getModel("minorTick");
      var splitNumber = minorTickModel.get("splitNumber");
      if (!(splitNumber > 0 && splitNumber < 100)) {
        splitNumber = 5;
      }
      var minorTicks = this.scale.getMinorTicks(splitNumber);
      var minorTicksCoords = map$1(minorTicks, function(minorTicksGroup) {
        return map$1(minorTicksGroup, function(minorTick) {
          return {
            coord: this.dataToCoord(minorTick),
            tickValue: minorTick
          };
        }, this);
      }, this);
      return minorTicksCoords;
    };
    Axis2.prototype.getViewLabels = function() {
      return createAxisLabels(this).labels;
    };
    Axis2.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    };
    Axis2.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    };
    Axis2.prototype.getBandWidth = function() {
      var axisExtent = this._extent;
      var dataExtent = this.scale.getExtent();
      var len = dataExtent[1] - dataExtent[0] + (this.onBand ? 1 : 0);
      len === 0 && (len = 1);
      var size = Math.abs(axisExtent[1] - axisExtent[0]);
      return Math.abs(size) / len;
    };
    Axis2.prototype.calculateCategoryInterval = function() {
      return calculateCategoryInterval(this);
    };
    return Axis2;
  }()
);
function fixExtentWithBands(extent, nTick) {
  var size = extent[1] - extent[0];
  var len = nTick;
  var margin = size / len / 2;
  extent[0] += margin;
  extent[1] -= margin;
}
function fixOnBandTicksCoords(axis, ticksCoords, alignWithLabel, clamp2) {
  var ticksLen = ticksCoords.length;
  if (!axis.onBand || alignWithLabel || !ticksLen) {
    return;
  }
  var axisExtent = axis.getExtent();
  var last;
  var diffSize;
  if (ticksLen === 1) {
    ticksCoords[0].coord = axisExtent[0];
    last = ticksCoords[1] = {
      coord: axisExtent[1]
    };
  } else {
    var crossLen = ticksCoords[ticksLen - 1].tickValue - ticksCoords[0].tickValue;
    var shift_1 = (ticksCoords[ticksLen - 1].coord - ticksCoords[0].coord) / crossLen;
    each$3(ticksCoords, function(ticksItem) {
      ticksItem.coord -= shift_1 / 2;
    });
    var dataExtent = axis.scale.getExtent();
    diffSize = 1 + dataExtent[1] - ticksCoords[ticksLen - 1].tickValue;
    last = {
      coord: ticksCoords[ticksLen - 1].coord + shift_1 * diffSize
    };
    ticksCoords.push(last);
  }
  var inverse = axisExtent[0] > axisExtent[1];
  if (littleThan(ticksCoords[0].coord, axisExtent[0])) {
    clamp2 ? ticksCoords[0].coord = axisExtent[0] : ticksCoords.shift();
  }
  if (clamp2 && littleThan(axisExtent[0], ticksCoords[0].coord)) {
    ticksCoords.unshift({
      coord: axisExtent[0]
    });
  }
  if (littleThan(axisExtent[1], last.coord)) {
    clamp2 ? last.coord = axisExtent[1] : ticksCoords.pop();
  }
  if (clamp2 && littleThan(last.coord, axisExtent[1])) {
    ticksCoords.push({
      coord: axisExtent[1]
    });
  }
  function littleThan(a, b) {
    a = round(a);
    b = round(b);
    return inverse ? a > b : a < b;
  }
}
function prepareLayoutList(input) {
  var list = [];
  for (var i = 0; i < input.length; i++) {
    var rawItem = input[i];
    if (rawItem.defaultAttr.ignore) {
      continue;
    }
    var label = rawItem.label;
    var transform = label.getComputedTransform();
    var localRect = label.getBoundingRect();
    var isAxisAligned = !transform || transform[1] < 1e-5 && transform[2] < 1e-5;
    var minMargin = label.style.margin || 0;
    var globalRect = localRect.clone();
    globalRect.applyTransform(transform);
    globalRect.x -= minMargin / 2;
    globalRect.y -= minMargin / 2;
    globalRect.width += minMargin;
    globalRect.height += minMargin;
    var obb = isAxisAligned ? new OrientedBoundingRect(localRect, transform) : null;
    list.push({
      label,
      labelLine: rawItem.labelLine,
      rect: globalRect,
      localRect,
      obb,
      priority: rawItem.priority,
      defaultAttr: rawItem.defaultAttr,
      layoutOption: rawItem.computedLayoutOption,
      axisAligned: isAxisAligned,
      transform
    });
  }
  return list;
}
function shiftLayout(list, xyDim, sizeDim, minBound, maxBound, balanceShift) {
  var len = list.length;
  if (len < 2) {
    return;
  }
  list.sort(function(a, b) {
    return a.rect[xyDim] - b.rect[xyDim];
  });
  var lastPos = 0;
  var delta;
  var adjusted = false;
  var totalShifts = 0;
  for (var i = 0; i < len; i++) {
    var item = list[i];
    var rect = item.rect;
    delta = rect[xyDim] - lastPos;
    if (delta < 0) {
      rect[xyDim] -= delta;
      item.label[xyDim] -= delta;
      adjusted = true;
    }
    var shift = Math.max(-delta, 0);
    totalShifts += shift;
    lastPos = rect[xyDim] + rect[sizeDim];
  }
  if (totalShifts > 0 && balanceShift) {
    shiftList(-totalShifts / len, 0, len);
  }
  var first = list[0];
  var last = list[len - 1];
  var minGap;
  var maxGap;
  updateMinMaxGap();
  minGap < 0 && squeezeGaps(-minGap, 0.8);
  maxGap < 0 && squeezeGaps(maxGap, 0.8);
  updateMinMaxGap();
  takeBoundsGap(minGap, maxGap, 1);
  takeBoundsGap(maxGap, minGap, -1);
  updateMinMaxGap();
  if (minGap < 0) {
    squeezeWhenBailout(-minGap);
  }
  if (maxGap < 0) {
    squeezeWhenBailout(maxGap);
  }
  function updateMinMaxGap() {
    minGap = first.rect[xyDim] - minBound;
    maxGap = maxBound - last.rect[xyDim] - last.rect[sizeDim];
  }
  function takeBoundsGap(gapThisBound, gapOtherBound, moveDir) {
    if (gapThisBound < 0) {
      var moveFromMaxGap = Math.min(gapOtherBound, -gapThisBound);
      if (moveFromMaxGap > 0) {
        shiftList(moveFromMaxGap * moveDir, 0, len);
        var remained = moveFromMaxGap + gapThisBound;
        if (remained < 0) {
          squeezeGaps(-remained * moveDir, 1);
        }
      } else {
        squeezeGaps(-gapThisBound * moveDir, 1);
      }
    }
  }
  function shiftList(delta2, start, end) {
    if (delta2 !== 0) {
      adjusted = true;
    }
    for (var i2 = start; i2 < end; i2++) {
      var item2 = list[i2];
      var rect2 = item2.rect;
      rect2[xyDim] += delta2;
      item2.label[xyDim] += delta2;
    }
  }
  function squeezeGaps(delta2, maxSqeezePercent) {
    var gaps = [];
    var totalGaps = 0;
    for (var i2 = 1; i2 < len; i2++) {
      var prevItemRect = list[i2 - 1].rect;
      var gap = Math.max(list[i2].rect[xyDim] - prevItemRect[xyDim] - prevItemRect[sizeDim], 0);
      gaps.push(gap);
      totalGaps += gap;
    }
    if (!totalGaps) {
      return;
    }
    var squeezePercent = Math.min(Math.abs(delta2) / totalGaps, maxSqeezePercent);
    if (delta2 > 0) {
      for (var i2 = 0; i2 < len - 1; i2++) {
        var movement = gaps[i2] * squeezePercent;
        shiftList(movement, 0, i2 + 1);
      }
    } else {
      for (var i2 = len - 1; i2 > 0; i2--) {
        var movement = gaps[i2 - 1] * squeezePercent;
        shiftList(-movement, i2, len);
      }
    }
  }
  function squeezeWhenBailout(delta2) {
    var dir = delta2 < 0 ? -1 : 1;
    delta2 = Math.abs(delta2);
    var moveForEachLabel = Math.ceil(delta2 / (len - 1));
    for (var i2 = 0; i2 < len - 1; i2++) {
      if (dir > 0) {
        shiftList(moveForEachLabel, 0, i2 + 1);
      } else {
        shiftList(-moveForEachLabel, len - i2 - 1, len);
      }
      delta2 -= moveForEachLabel;
      if (delta2 <= 0) {
        return;
      }
    }
  }
  return adjusted;
}
function shiftLayoutOnX(list, leftBound, rightBound, balanceShift) {
  return shiftLayout(list, "x", "width", leftBound, rightBound, balanceShift);
}
function shiftLayoutOnY(list, topBound, bottomBound, balanceShift) {
  return shiftLayout(list, "y", "height", topBound, bottomBound, balanceShift);
}
function hideOverlap(labelList) {
  var displayedLabels = [];
  labelList.sort(function(a, b) {
    return b.priority - a.priority;
  });
  var globalRect = new BoundingRect(0, 0, 0, 0);
  function hideEl(el) {
    if (!el.ignore) {
      var emphasisState = el.ensureState("emphasis");
      if (emphasisState.ignore == null) {
        emphasisState.ignore = false;
      }
    }
    el.ignore = true;
  }
  for (var i = 0; i < labelList.length; i++) {
    var labelItem = labelList[i];
    var isAxisAligned = labelItem.axisAligned;
    var localRect = labelItem.localRect;
    var transform = labelItem.transform;
    var label = labelItem.label;
    var labelLine = labelItem.labelLine;
    globalRect.copy(labelItem.rect);
    globalRect.width -= 0.1;
    globalRect.height -= 0.1;
    globalRect.x += 0.05;
    globalRect.y += 0.05;
    var obb = labelItem.obb;
    var overlapped = false;
    for (var j = 0; j < displayedLabels.length; j++) {
      var existsTextCfg = displayedLabels[j];
      if (!globalRect.intersect(existsTextCfg.rect)) {
        continue;
      }
      if (isAxisAligned && existsTextCfg.axisAligned) {
        overlapped = true;
        break;
      }
      if (!existsTextCfg.obb) {
        existsTextCfg.obb = new OrientedBoundingRect(existsTextCfg.localRect, existsTextCfg.transform);
      }
      if (!obb) {
        obb = new OrientedBoundingRect(localRect, transform);
      }
      if (obb.intersect(existsTextCfg.obb)) {
        overlapped = true;
        break;
      }
    }
    if (overlapped) {
      hideEl(label);
      labelLine && hideEl(labelLine);
    } else {
      label.attr("ignore", labelItem.defaultAttr.ignore);
      labelLine && labelLine.attr("ignore", labelItem.defaultAttr.labelGuideIgnore);
      displayedLabels.push(labelItem);
    }
  }
}
function install$5(registers) {
  registers.registerPainter("canvas", CanvasPainter);
}
function getDefaultLabel(data, dataIndex) {
  var labelDims = data.mapDimensionsAll("defaultedLabel");
  var len = labelDims.length;
  if (len === 1) {
    var rawVal = retrieveRawValue(data, dataIndex, labelDims[0]);
    return rawVal != null ? rawVal + "" : null;
  } else if (len) {
    var vals = [];
    for (var i = 0; i < labelDims.length; i++) {
      vals.push(retrieveRawValue(data, dataIndex, labelDims[i]));
    }
    return vals.join(" ");
  }
}
function getDefaultInterpolatedLabel(data, interpolatedValue) {
  var labelDims = data.mapDimensionsAll("defaultedLabel");
  if (!isArray$1(interpolatedValue)) {
    return interpolatedValue + "";
  }
  var vals = [];
  for (var i = 0; i < labelDims.length; i++) {
    var dimIndex = data.getDimensionIndex(labelDims[i]);
    if (dimIndex >= 0) {
      vals.push(interpolatedValue[dimIndex]);
    }
  }
  return vals.join(" ");
}
function createGridClipPath(cartesian, hasAnimation, seriesModel, done, during) {
  var rect = cartesian.getArea();
  var x = rect.x;
  var y = rect.y;
  var width = rect.width;
  var height = rect.height;
  var lineWidth = seriesModel.get(["lineStyle", "width"]) || 2;
  x -= lineWidth / 2;
  y -= lineWidth / 2;
  width += lineWidth;
  height += lineWidth;
  width = Math.ceil(width);
  if (x !== Math.floor(x)) {
    x = Math.floor(x);
    width++;
  }
  var clipPath = new Rect({
    shape: {
      x,
      y,
      width,
      height
    }
  });
  if (hasAnimation) {
    var baseAxis = cartesian.getBaseAxis();
    var isHorizontal = baseAxis.isHorizontal();
    var isAxisInversed = baseAxis.inverse;
    if (isHorizontal) {
      if (isAxisInversed) {
        clipPath.shape.x += width;
      }
      clipPath.shape.width = 0;
    } else {
      if (!isAxisInversed) {
        clipPath.shape.y += height;
      }
      clipPath.shape.height = 0;
    }
    var duringCb = isFunction$1(during) ? function(percent) {
      during(percent, clipPath);
    } : null;
    initProps(clipPath, {
      shape: {
        width,
        height,
        x,
        y
      }
    }, seriesModel, null, done, duringCb);
  }
  return clipPath;
}
function createPolarClipPath(polar, hasAnimation, seriesModel) {
  var sectorArea = polar.getArea();
  var r0 = round(sectorArea.r0, 1);
  var r = round(sectorArea.r, 1);
  var clipPath = new Sector({
    shape: {
      cx: round(polar.cx, 1),
      cy: round(polar.cy, 1),
      r0,
      r,
      startAngle: sectorArea.startAngle,
      endAngle: sectorArea.endAngle,
      clockwise: sectorArea.clockwise
    }
  });
  if (hasAnimation) {
    var isRadial = polar.getBaseAxis().dim === "angle";
    if (isRadial) {
      clipPath.shape.endAngle = sectorArea.startAngle;
    } else {
      clipPath.shape.r = r0;
    }
    initProps(clipPath, {
      shape: {
        endAngle: sectorArea.endAngle,
        r
      }
    }, seriesModel);
  }
  return clipPath;
}
function createClipPath(coordSys, hasAnimation, seriesModel, done, during) {
  if (!coordSys) {
    return null;
  } else if (coordSys.type === "polar") {
    return createPolarClipPath(coordSys, hasAnimation, seriesModel);
  } else if (coordSys.type === "cartesian2d") {
    return createGridClipPath(coordSys, hasAnimation, seriesModel, done, during);
  }
  return null;
}
function isCoordinateSystemType(coordSys, type) {
  return coordSys.type === type;
}
var samplers = {
  average: function(frame) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < frame.length; i++) {
      if (!isNaN(frame[i])) {
        sum += frame[i];
        count++;
      }
    }
    return count === 0 ? NaN : sum / count;
  },
  sum: function(frame) {
    var sum = 0;
    for (var i = 0; i < frame.length; i++) {
      sum += frame[i] || 0;
    }
    return sum;
  },
  max: function(frame) {
    var max = -Infinity;
    for (var i = 0; i < frame.length; i++) {
      frame[i] > max && (max = frame[i]);
    }
    return isFinite(max) ? max : NaN;
  },
  min: function(frame) {
    var min = Infinity;
    for (var i = 0; i < frame.length; i++) {
      frame[i] < min && (min = frame[i]);
    }
    return isFinite(min) ? min : NaN;
  },
  minmax: function(frame) {
    var turningPointAbsoluteValue = -Infinity;
    var turningPointOriginalValue = -Infinity;
    for (var i = 0; i < frame.length; i++) {
      var originalValue = frame[i];
      var absoluteValue = Math.abs(originalValue);
      if (absoluteValue > turningPointAbsoluteValue) {
        turningPointAbsoluteValue = absoluteValue;
        turningPointOriginalValue = originalValue;
      }
    }
    return isFinite(turningPointOriginalValue) ? turningPointOriginalValue : NaN;
  },
  // TODO
  // Median
  nearest: function(frame) {
    return frame[0];
  }
};
var indexSampler = function(frame) {
  return Math.round(frame.length / 2);
};
function dataSample(seriesType2) {
  return {
    seriesType: seriesType2,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(seriesModel, ecModel, api) {
      var data = seriesModel.getData();
      var sampling = seriesModel.get("sampling");
      var coordSys = seriesModel.coordinateSystem;
      var count = data.count();
      if (count > 10 && coordSys.type === "cartesian2d" && sampling) {
        var baseAxis = coordSys.getBaseAxis();
        var valueAxis2 = coordSys.getOtherAxis(baseAxis);
        var extent = baseAxis.getExtent();
        var dpr = api.getDevicePixelRatio();
        var size = Math.abs(extent[1] - extent[0]) * (dpr || 1);
        var rate = Math.round(count / size);
        if (isFinite(rate) && rate > 1) {
          if (sampling === "lttb") {
            seriesModel.setData(data.lttbDownSample(data.mapDimension(valueAxis2.dim), 1 / rate));
          }
          var sampler = void 0;
          if (isString$2(sampling)) {
            sampler = samplers[sampling];
          } else if (isFunction$1(sampling)) {
            sampler = sampling;
          }
          if (sampler) {
            seriesModel.setData(data.downSample(data.mapDimension(valueAxis2.dim), 1 / rate, sampler, indexSampler));
          }
        }
      }
    }
  };
}
var BaseBarSeriesModel = (
  /** @class */
  function(_super) {
    __extends(BaseBarSeriesModel2, _super);
    function BaseBarSeriesModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = BaseBarSeriesModel2.type;
      return _this;
    }
    BaseBarSeriesModel2.prototype.getInitialData = function(option, ecModel) {
      return createSeriesData(null, this, {
        useEncodeDefaulter: true
      });
    };
    BaseBarSeriesModel2.prototype.getMarkerPosition = function(value, dims, startingAtTick) {
      var coordSys = this.coordinateSystem;
      if (coordSys && coordSys.clampData) {
        var clampData_1 = coordSys.clampData(value);
        var pt_1 = coordSys.dataToPoint(clampData_1);
        if (startingAtTick) {
          each$3(coordSys.getAxes(), function(axis, idx) {
            if (axis.type === "category" && dims != null) {
              var tickCoords = axis.getTicksCoords();
              var alignTicksWithLabel = axis.getTickModel().get("alignWithLabel");
              var targetTickId = clampData_1[idx];
              var isEnd = dims[idx] === "x1" || dims[idx] === "y1";
              if (isEnd && !alignTicksWithLabel) {
                targetTickId += 1;
              }
              if (tickCoords.length < 2) {
                return;
              } else if (tickCoords.length === 2) {
                pt_1[idx] = axis.toGlobalCoord(axis.getExtent()[isEnd ? 1 : 0]);
                return;
              }
              var leftCoord = void 0;
              var coord = void 0;
              var stepTickValue = 1;
              for (var i = 0; i < tickCoords.length; i++) {
                var tickCoord = tickCoords[i].coord;
                var tickValue = i === tickCoords.length - 1 ? tickCoords[i - 1].tickValue + stepTickValue : tickCoords[i].tickValue;
                if (tickValue === targetTickId) {
                  coord = tickCoord;
                  break;
                } else if (tickValue < targetTickId) {
                  leftCoord = tickCoord;
                } else if (leftCoord != null && tickValue > targetTickId) {
                  coord = (tickCoord + leftCoord) / 2;
                  break;
                }
                if (i === 1) {
                  stepTickValue = tickValue - tickCoords[0].tickValue;
                }
              }
              if (coord == null) {
                if (!leftCoord) {
                  coord = tickCoords[0].coord;
                } else if (leftCoord) {
                  coord = tickCoords[tickCoords.length - 1].coord;
                }
              }
              pt_1[idx] = axis.toGlobalCoord(coord);
            }
          });
        } else {
          var data = this.getData();
          var offset = data.getLayout("offset");
          var size = data.getLayout("size");
          var offsetIndex = coordSys.getBaseAxis().isHorizontal() ? 0 : 1;
          pt_1[offsetIndex] += offset + size / 2;
        }
        return pt_1;
      }
      return [NaN, NaN];
    };
    BaseBarSeriesModel2.type = "series.__base_bar__";
    BaseBarSeriesModel2.defaultOption = {
      // zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: true,
      // stack: null
      // Cartesian coordinate system
      // xAxisIndex: 0,
      // yAxisIndex: 0,
      barMinHeight: 0,
      barMinAngle: 0,
      // cursor: null,
      large: false,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: "mod"
    };
    return BaseBarSeriesModel2;
  }(SeriesModel)
);
SeriesModel.registerClass(BaseBarSeriesModel);
var BarSeriesModel = (
  /** @class */
  function(_super) {
    __extends(BarSeriesModel2, _super);
    function BarSeriesModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = BarSeriesModel2.type;
      return _this;
    }
    BarSeriesModel2.prototype.getInitialData = function() {
      return createSeriesData(null, this, {
        useEncodeDefaulter: true,
        createInvertedIndices: !!this.get("realtimeSort", true) || null
      });
    };
    BarSeriesModel2.prototype.getProgressive = function() {
      return this.get("large") ? this.get("progressive") : false;
    };
    BarSeriesModel2.prototype.getProgressiveThreshold = function() {
      var progressiveThreshold = this.get("progressiveThreshold");
      var largeThreshold = this.get("largeThreshold");
      if (largeThreshold > progressiveThreshold) {
        progressiveThreshold = largeThreshold;
      }
      return progressiveThreshold;
    };
    BarSeriesModel2.prototype.brushSelector = function(dataIndex, data, selectors) {
      return selectors.rect(data.getItemLayout(dataIndex));
    };
    BarSeriesModel2.type = "series.bar";
    BarSeriesModel2.dependencies = ["grid", "polar"];
    BarSeriesModel2.defaultOption = inheritDefaultOption(BaseBarSeriesModel.defaultOption, {
      // If clipped
      // Only available on cartesian2d
      clip: true,
      roundCap: false,
      showBackground: false,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
        borderColor: null,
        borderWidth: 0,
        borderType: "solid",
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1
      },
      select: {
        itemStyle: {
          borderColor: "#212121"
        }
      },
      realtimeSort: false
    });
    return BarSeriesModel2;
  }(BaseBarSeriesModel)
);
var SausageShape = (
  /** @class */
  /* @__PURE__ */ function() {
    function SausageShape2() {
      this.cx = 0;
      this.cy = 0;
      this.r0 = 0;
      this.r = 0;
      this.startAngle = 0;
      this.endAngle = Math.PI * 2;
      this.clockwise = true;
    }
    return SausageShape2;
  }()
);
var SausagePath = (
  /** @class */
  function(_super) {
    __extends(SausagePath2, _super);
    function SausagePath2(opts) {
      var _this = _super.call(this, opts) || this;
      _this.type = "sausage";
      return _this;
    }
    SausagePath2.prototype.getDefaultShape = function() {
      return new SausageShape();
    };
    SausagePath2.prototype.buildPath = function(ctx, shape) {
      var cx = shape.cx;
      var cy = shape.cy;
      var r0 = Math.max(shape.r0 || 0, 0);
      var r = Math.max(shape.r, 0);
      var dr = (r - r0) * 0.5;
      var rCenter = r0 + dr;
      var startAngle = shape.startAngle;
      var endAngle = shape.endAngle;
      var clockwise = shape.clockwise;
      var PI2 = Math.PI * 2;
      var lessThanCircle = clockwise ? endAngle - startAngle < PI2 : startAngle - endAngle < PI2;
      if (!lessThanCircle) {
        startAngle = endAngle - (clockwise ? PI2 : -PI2);
      }
      var unitStartX = Math.cos(startAngle);
      var unitStartY = Math.sin(startAngle);
      var unitEndX = Math.cos(endAngle);
      var unitEndY = Math.sin(endAngle);
      if (lessThanCircle) {
        ctx.moveTo(unitStartX * r0 + cx, unitStartY * r0 + cy);
        ctx.arc(unitStartX * rCenter + cx, unitStartY * rCenter + cy, dr, -Math.PI + startAngle, startAngle, !clockwise);
      } else {
        ctx.moveTo(unitStartX * r + cx, unitStartY * r + cy);
      }
      ctx.arc(cx, cy, r, startAngle, endAngle, !clockwise);
      ctx.arc(unitEndX * rCenter + cx, unitEndY * rCenter + cy, dr, endAngle - Math.PI * 2, endAngle - Math.PI, !clockwise);
      if (r0 !== 0) {
        ctx.arc(cx, cy, r0, endAngle, startAngle, clockwise);
      }
    };
    return SausagePath2;
  }(Path)
);
function createSectorCalculateTextPosition(positionMapping, opts) {
  opts = opts || {};
  var isRoundCap = opts.isRoundCap;
  return function(out, opts2, boundingRect) {
    var textPosition = opts2.position;
    if (!textPosition || textPosition instanceof Array) {
      return calculateTextPosition(out, opts2, boundingRect);
    }
    var mappedSectorPosition = positionMapping(textPosition);
    var distance = opts2.distance != null ? opts2.distance : 5;
    var sector = this.shape;
    var cx = sector.cx;
    var cy = sector.cy;
    var r = sector.r;
    var r0 = sector.r0;
    var middleR = (r + r0) / 2;
    var startAngle = sector.startAngle;
    var endAngle = sector.endAngle;
    var middleAngle = (startAngle + endAngle) / 2;
    var extraDist = isRoundCap ? Math.abs(r - r0) / 2 : 0;
    var mathCos = Math.cos;
    var mathSin = Math.sin;
    var x = cx + r * mathCos(startAngle);
    var y = cy + r * mathSin(startAngle);
    var textAlign = "left";
    var textVerticalAlign = "top";
    switch (mappedSectorPosition) {
      case "startArc":
        x = cx + (r0 - distance) * mathCos(middleAngle);
        y = cy + (r0 - distance) * mathSin(middleAngle);
        textAlign = "center";
        textVerticalAlign = "top";
        break;
      case "insideStartArc":
        x = cx + (r0 + distance) * mathCos(middleAngle);
        y = cy + (r0 + distance) * mathSin(middleAngle);
        textAlign = "center";
        textVerticalAlign = "bottom";
        break;
      case "startAngle":
        x = cx + middleR * mathCos(startAngle) + adjustAngleDistanceX(startAngle, distance + extraDist, false);
        y = cy + middleR * mathSin(startAngle) + adjustAngleDistanceY(startAngle, distance + extraDist, false);
        textAlign = "right";
        textVerticalAlign = "middle";
        break;
      case "insideStartAngle":
        x = cx + middleR * mathCos(startAngle) + adjustAngleDistanceX(startAngle, -distance + extraDist, false);
        y = cy + middleR * mathSin(startAngle) + adjustAngleDistanceY(startAngle, -distance + extraDist, false);
        textAlign = "left";
        textVerticalAlign = "middle";
        break;
      case "middle":
        x = cx + middleR * mathCos(middleAngle);
        y = cy + middleR * mathSin(middleAngle);
        textAlign = "center";
        textVerticalAlign = "middle";
        break;
      case "endArc":
        x = cx + (r + distance) * mathCos(middleAngle);
        y = cy + (r + distance) * mathSin(middleAngle);
        textAlign = "center";
        textVerticalAlign = "bottom";
        break;
      case "insideEndArc":
        x = cx + (r - distance) * mathCos(middleAngle);
        y = cy + (r - distance) * mathSin(middleAngle);
        textAlign = "center";
        textVerticalAlign = "top";
        break;
      case "endAngle":
        x = cx + middleR * mathCos(endAngle) + adjustAngleDistanceX(endAngle, distance + extraDist, true);
        y = cy + middleR * mathSin(endAngle) + adjustAngleDistanceY(endAngle, distance + extraDist, true);
        textAlign = "left";
        textVerticalAlign = "middle";
        break;
      case "insideEndAngle":
        x = cx + middleR * mathCos(endAngle) + adjustAngleDistanceX(endAngle, -distance + extraDist, true);
        y = cy + middleR * mathSin(endAngle) + adjustAngleDistanceY(endAngle, -distance + extraDist, true);
        textAlign = "right";
        textVerticalAlign = "middle";
        break;
      default:
        return calculateTextPosition(out, opts2, boundingRect);
    }
    out = out || {};
    out.x = x;
    out.y = y;
    out.align = textAlign;
    out.verticalAlign = textVerticalAlign;
    return out;
  };
}
function setSectorTextRotation(sector, textPosition, positionMapping, rotateType) {
  if (isNumber$1(rotateType)) {
    sector.setTextConfig({
      rotation: rotateType
    });
    return;
  } else if (isArray$1(textPosition)) {
    sector.setTextConfig({
      rotation: 0
    });
    return;
  }
  var shape = sector.shape;
  var startAngle = shape.clockwise ? shape.startAngle : shape.endAngle;
  var endAngle = shape.clockwise ? shape.endAngle : shape.startAngle;
  var middleAngle = (startAngle + endAngle) / 2;
  var anchorAngle;
  var mappedSectorPosition = positionMapping(textPosition);
  switch (mappedSectorPosition) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      anchorAngle = middleAngle;
      break;
    case "startAngle":
    case "insideStartAngle":
      anchorAngle = startAngle;
      break;
    case "endAngle":
    case "insideEndAngle":
      anchorAngle = endAngle;
      break;
    default:
      sector.setTextConfig({
        rotation: 0
      });
      return;
  }
  var rotate = Math.PI * 1.5 - anchorAngle;
  if (mappedSectorPosition === "middle" && rotate > Math.PI / 2 && rotate < Math.PI * 1.5) {
    rotate -= Math.PI;
  }
  sector.setTextConfig({
    rotation: rotate
  });
}
function adjustAngleDistanceX(angle, distance, isEnd) {
  return distance * Math.sin(angle) * (isEnd ? -1 : 1);
}
function adjustAngleDistanceY(angle, distance, isEnd) {
  return distance * Math.cos(angle) * (isEnd ? 1 : -1);
}
function getSectorCornerRadius(model, shape, zeroIfNull) {
  var cornerRadius = model.get("borderRadius");
  if (cornerRadius == null) {
    return zeroIfNull ? {
      cornerRadius: 0
    } : null;
  }
  if (!isArray$1(cornerRadius)) {
    cornerRadius = [cornerRadius, cornerRadius, cornerRadius, cornerRadius];
  }
  var dr = Math.abs(shape.r || 0 - shape.r0 || 0);
  return {
    cornerRadius: map$1(cornerRadius, function(cr) {
      return parsePercent$1(cr, dr);
    })
  };
}
var mathMax = Math.max;
var mathMin = Math.min;
function getClipArea(coord, data) {
  var coordSysClipArea = coord.getArea && coord.getArea();
  if (isCoordinateSystemType(coord, "cartesian2d")) {
    var baseAxis = coord.getBaseAxis();
    if (baseAxis.type !== "category" || !baseAxis.onBand) {
      var expandWidth = data.getLayout("bandWidth");
      if (baseAxis.isHorizontal()) {
        coordSysClipArea.x -= expandWidth;
        coordSysClipArea.width += expandWidth * 2;
      } else {
        coordSysClipArea.y -= expandWidth;
        coordSysClipArea.height += expandWidth * 2;
      }
    }
  }
  return coordSysClipArea;
}
var BarView = (
  /** @class */
  function(_super) {
    __extends(BarView2, _super);
    function BarView2() {
      var _this = _super.call(this) || this;
      _this.type = BarView2.type;
      _this._isFirstFrame = true;
      return _this;
    }
    BarView2.prototype.render = function(seriesModel, ecModel, api, payload) {
      this._model = seriesModel;
      this._removeOnRenderedListener(api);
      this._updateDrawMode(seriesModel);
      var coordinateSystemType = seriesModel.get("coordinateSystem");
      if (coordinateSystemType === "cartesian2d" || coordinateSystemType === "polar") {
        this._progressiveEls = null;
        this._isLargeDraw ? this._renderLarge(seriesModel, ecModel, api) : this._renderNormal(seriesModel, ecModel, api, payload);
      }
    };
    BarView2.prototype.incrementalPrepareRender = function(seriesModel) {
      this._clear();
      this._updateDrawMode(seriesModel);
      this._updateLargeClip(seriesModel);
    };
    BarView2.prototype.incrementalRender = function(params, seriesModel) {
      this._progressiveEls = [];
      this._incrementalRenderLarge(params, seriesModel);
    };
    BarView2.prototype.eachRendered = function(cb) {
      traverseElements(this._progressiveEls || this.group, cb);
    };
    BarView2.prototype._updateDrawMode = function(seriesModel) {
      var isLargeDraw = seriesModel.pipelineContext.large;
      if (this._isLargeDraw == null || isLargeDraw !== this._isLargeDraw) {
        this._isLargeDraw = isLargeDraw;
        this._clear();
      }
    };
    BarView2.prototype._renderNormal = function(seriesModel, ecModel, api, payload) {
      var group = this.group;
      var data = seriesModel.getData();
      var oldData = this._data;
      var coord = seriesModel.coordinateSystem;
      var baseAxis = coord.getBaseAxis();
      var isHorizontalOrRadial;
      if (coord.type === "cartesian2d") {
        isHorizontalOrRadial = baseAxis.isHorizontal();
      } else if (coord.type === "polar") {
        isHorizontalOrRadial = baseAxis.dim === "angle";
      }
      var animationModel = seriesModel.isAnimationEnabled() ? seriesModel : null;
      var realtimeSortCfg = shouldRealtimeSort(seriesModel, coord);
      if (realtimeSortCfg) {
        this._enableRealtimeSort(realtimeSortCfg, data, api);
      }
      var needsClip = seriesModel.get("clip", true) || realtimeSortCfg;
      var coordSysClipArea = getClipArea(coord, data);
      group.removeClipPath();
      var roundCap = seriesModel.get("roundCap", true);
      var drawBackground = seriesModel.get("showBackground", true);
      var backgroundModel = seriesModel.getModel("backgroundStyle");
      var barBorderRadius = backgroundModel.get("borderRadius") || 0;
      var bgEls = [];
      var oldBgEls = this._backgroundEls;
      var isInitSort = payload && payload.isInitSort;
      var isChangeOrder = payload && payload.type === "changeAxisOrder";
      function createBackground(dataIndex) {
        var bgLayout = getLayout[coord.type](data, dataIndex);
        var bgEl = createBackgroundEl(coord, isHorizontalOrRadial, bgLayout);
        bgEl.useStyle(backgroundModel.getItemStyle());
        if (coord.type === "cartesian2d") {
          bgEl.setShape("r", barBorderRadius);
        } else {
          bgEl.setShape("cornerRadius", barBorderRadius);
        }
        bgEls[dataIndex] = bgEl;
        return bgEl;
      }
      data.diff(oldData).add(function(dataIndex) {
        var itemModel = data.getItemModel(dataIndex);
        var layout2 = getLayout[coord.type](data, dataIndex, itemModel);
        if (drawBackground) {
          createBackground(dataIndex);
        }
        if (!data.hasValue(dataIndex) || !isValidLayout[coord.type](layout2)) {
          return;
        }
        var isClipped = false;
        if (needsClip) {
          isClipped = clip[coord.type](coordSysClipArea, layout2);
        }
        var el = elementCreator[coord.type](seriesModel, data, dataIndex, layout2, isHorizontalOrRadial, animationModel, baseAxis.model, false, roundCap);
        if (realtimeSortCfg) {
          el.forceLabelAnimation = true;
        }
        updateStyle(el, data, dataIndex, itemModel, layout2, seriesModel, isHorizontalOrRadial, coord.type === "polar");
        if (isInitSort) {
          el.attr({
            shape: layout2
          });
        } else if (realtimeSortCfg) {
          updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout2, dataIndex, isHorizontalOrRadial, false, false);
        } else {
          initProps(el, {
            shape: layout2
          }, seriesModel, dataIndex);
        }
        data.setItemGraphicEl(dataIndex, el);
        group.add(el);
        el.ignore = isClipped;
      }).update(function(newIndex, oldIndex) {
        var itemModel = data.getItemModel(newIndex);
        var layout2 = getLayout[coord.type](data, newIndex, itemModel);
        if (drawBackground) {
          var bgEl = void 0;
          if (oldBgEls.length === 0) {
            bgEl = createBackground(oldIndex);
          } else {
            bgEl = oldBgEls[oldIndex];
            bgEl.useStyle(backgroundModel.getItemStyle());
            if (coord.type === "cartesian2d") {
              bgEl.setShape("r", barBorderRadius);
            } else {
              bgEl.setShape("cornerRadius", barBorderRadius);
            }
            bgEls[newIndex] = bgEl;
          }
          var bgLayout = getLayout[coord.type](data, newIndex);
          var shape = createBackgroundShape(isHorizontalOrRadial, bgLayout, coord);
          updateProps$1(bgEl, {
            shape
          }, animationModel, newIndex);
        }
        var el = oldData.getItemGraphicEl(oldIndex);
        if (!data.hasValue(newIndex) || !isValidLayout[coord.type](layout2)) {
          group.remove(el);
          return;
        }
        var isClipped = false;
        if (needsClip) {
          isClipped = clip[coord.type](coordSysClipArea, layout2);
          if (isClipped) {
            group.remove(el);
          }
        }
        if (!el) {
          el = elementCreator[coord.type](seriesModel, data, newIndex, layout2, isHorizontalOrRadial, animationModel, baseAxis.model, !!el, roundCap);
        } else {
          saveOldStyle(el);
        }
        if (realtimeSortCfg) {
          el.forceLabelAnimation = true;
        }
        if (isChangeOrder) {
          var textEl = el.getTextContent();
          if (textEl) {
            var labelInnerStore = labelInner(textEl);
            if (labelInnerStore.prevValue != null) {
              labelInnerStore.prevValue = labelInnerStore.value;
            }
          }
        } else {
          updateStyle(el, data, newIndex, itemModel, layout2, seriesModel, isHorizontalOrRadial, coord.type === "polar");
        }
        if (isInitSort) {
          el.attr({
            shape: layout2
          });
        } else if (realtimeSortCfg) {
          updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout2, newIndex, isHorizontalOrRadial, true, isChangeOrder);
        } else {
          updateProps$1(el, {
            shape: layout2
          }, seriesModel, newIndex, null);
        }
        data.setItemGraphicEl(newIndex, el);
        el.ignore = isClipped;
        group.add(el);
      }).remove(function(dataIndex) {
        var el = oldData.getItemGraphicEl(dataIndex);
        el && removeElementWithFadeOut(el, seriesModel, dataIndex);
      }).execute();
      var bgGroup = this._backgroundGroup || (this._backgroundGroup = new Group());
      bgGroup.removeAll();
      for (var i = 0; i < bgEls.length; ++i) {
        bgGroup.add(bgEls[i]);
      }
      group.add(bgGroup);
      this._backgroundEls = bgEls;
      this._data = data;
    };
    BarView2.prototype._renderLarge = function(seriesModel, ecModel, api) {
      this._clear();
      createLarge(seriesModel, this.group);
      this._updateLargeClip(seriesModel);
    };
    BarView2.prototype._incrementalRenderLarge = function(params, seriesModel) {
      this._removeBackground();
      createLarge(seriesModel, this.group, this._progressiveEls, true);
    };
    BarView2.prototype._updateLargeClip = function(seriesModel) {
      var clipPath = seriesModel.get("clip", true) && createClipPath(seriesModel.coordinateSystem, false, seriesModel);
      var group = this.group;
      if (clipPath) {
        group.setClipPath(clipPath);
      } else {
        group.removeClipPath();
      }
    };
    BarView2.prototype._enableRealtimeSort = function(realtimeSortCfg, data, api) {
      var _this = this;
      if (!data.count()) {
        return;
      }
      var baseAxis = realtimeSortCfg.baseAxis;
      if (this._isFirstFrame) {
        this._dispatchInitSort(data, realtimeSortCfg, api);
        this._isFirstFrame = false;
      } else {
        var orderMapping_1 = function(idx) {
          var el = data.getItemGraphicEl(idx);
          var shape = el && el.shape;
          return shape && // The result should be consistent with the initial sort by data value.
          // Do not support the case that both positive and negative exist.
          Math.abs(baseAxis.isHorizontal() ? shape.height : shape.width) || 0;
        };
        this._onRendered = function() {
          _this._updateSortWithinSameData(data, orderMapping_1, baseAxis, api);
        };
        api.getZr().on("rendered", this._onRendered);
      }
    };
    BarView2.prototype._dataSort = function(data, baseAxis, orderMapping) {
      var info = [];
      data.each(data.mapDimension(baseAxis.dim), function(ordinalNumber, dataIdx) {
        var mappedValue = orderMapping(dataIdx);
        mappedValue = mappedValue == null ? NaN : mappedValue;
        info.push({
          dataIndex: dataIdx,
          mappedValue,
          ordinalNumber
        });
      });
      info.sort(function(a, b) {
        return b.mappedValue - a.mappedValue;
      });
      return {
        ordinalNumbers: map$1(info, function(item) {
          return item.ordinalNumber;
        })
      };
    };
    BarView2.prototype._isOrderChangedWithinSameData = function(data, orderMapping, baseAxis) {
      var scale2 = baseAxis.scale;
      var ordinalDataDim = data.mapDimension(baseAxis.dim);
      var lastValue = Number.MAX_VALUE;
      for (var tickNum = 0, len = scale2.getOrdinalMeta().categories.length; tickNum < len; ++tickNum) {
        var rawIdx = data.rawIndexOf(ordinalDataDim, scale2.getRawOrdinalNumber(tickNum));
        var value = rawIdx < 0 ? Number.MIN_VALUE : orderMapping(data.indexOfRawIndex(rawIdx));
        if (value > lastValue) {
          return true;
        }
        lastValue = value;
      }
      return false;
    };
    BarView2.prototype._isOrderDifferentInView = function(orderInfo, baseAxis) {
      var scale2 = baseAxis.scale;
      var extent = scale2.getExtent();
      var tickNum = Math.max(0, extent[0]);
      var tickMax = Math.min(extent[1], scale2.getOrdinalMeta().categories.length - 1);
      for (; tickNum <= tickMax; ++tickNum) {
        if (orderInfo.ordinalNumbers[tickNum] !== scale2.getRawOrdinalNumber(tickNum)) {
          return true;
        }
      }
    };
    BarView2.prototype._updateSortWithinSameData = function(data, orderMapping, baseAxis, api) {
      if (!this._isOrderChangedWithinSameData(data, orderMapping, baseAxis)) {
        return;
      }
      var sortInfo = this._dataSort(data, baseAxis, orderMapping);
      if (this._isOrderDifferentInView(sortInfo, baseAxis)) {
        this._removeOnRenderedListener(api);
        api.dispatchAction({
          type: "changeAxisOrder",
          componentType: baseAxis.dim + "Axis",
          axisId: baseAxis.index,
          sortInfo
        });
      }
    };
    BarView2.prototype._dispatchInitSort = function(data, realtimeSortCfg, api) {
      var baseAxis = realtimeSortCfg.baseAxis;
      var sortResult = this._dataSort(data, baseAxis, function(dataIdx) {
        return data.get(data.mapDimension(realtimeSortCfg.otherAxis.dim), dataIdx);
      });
      api.dispatchAction({
        type: "changeAxisOrder",
        componentType: baseAxis.dim + "Axis",
        isInitSort: true,
        axisId: baseAxis.index,
        sortInfo: sortResult
      });
    };
    BarView2.prototype.remove = function(ecModel, api) {
      this._clear(this._model);
      this._removeOnRenderedListener(api);
    };
    BarView2.prototype.dispose = function(ecModel, api) {
      this._removeOnRenderedListener(api);
    };
    BarView2.prototype._removeOnRenderedListener = function(api) {
      if (this._onRendered) {
        api.getZr().off("rendered", this._onRendered);
        this._onRendered = null;
      }
    };
    BarView2.prototype._clear = function(model) {
      var group = this.group;
      var data = this._data;
      if (model && model.isAnimationEnabled() && data && !this._isLargeDraw) {
        this._removeBackground();
        this._backgroundEls = [];
        data.eachItemGraphicEl(function(el) {
          removeElementWithFadeOut(el, model, getECData(el).dataIndex);
        });
      } else {
        group.removeAll();
      }
      this._data = null;
      this._isFirstFrame = true;
    };
    BarView2.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup);
      this._backgroundGroup = null;
    };
    BarView2.type = "bar";
    return BarView2;
  }(ChartView)
);
var clip = {
  cartesian2d: function(coordSysBoundingRect, layout2) {
    var signWidth = layout2.width < 0 ? -1 : 1;
    var signHeight = layout2.height < 0 ? -1 : 1;
    if (signWidth < 0) {
      layout2.x += layout2.width;
      layout2.width = -layout2.width;
    }
    if (signHeight < 0) {
      layout2.y += layout2.height;
      layout2.height = -layout2.height;
    }
    var coordSysX2 = coordSysBoundingRect.x + coordSysBoundingRect.width;
    var coordSysY2 = coordSysBoundingRect.y + coordSysBoundingRect.height;
    var x = mathMax(layout2.x, coordSysBoundingRect.x);
    var x2 = mathMin(layout2.x + layout2.width, coordSysX2);
    var y = mathMax(layout2.y, coordSysBoundingRect.y);
    var y2 = mathMin(layout2.y + layout2.height, coordSysY2);
    var xClipped = x2 < x;
    var yClipped = y2 < y;
    layout2.x = xClipped && x > coordSysX2 ? x2 : x;
    layout2.y = yClipped && y > coordSysY2 ? y2 : y;
    layout2.width = xClipped ? 0 : x2 - x;
    layout2.height = yClipped ? 0 : y2 - y;
    if (signWidth < 0) {
      layout2.x += layout2.width;
      layout2.width = -layout2.width;
    }
    if (signHeight < 0) {
      layout2.y += layout2.height;
      layout2.height = -layout2.height;
    }
    return xClipped || yClipped;
  },
  polar: function(coordSysClipArea, layout2) {
    var signR = layout2.r0 <= layout2.r ? 1 : -1;
    if (signR < 0) {
      var tmp = layout2.r;
      layout2.r = layout2.r0;
      layout2.r0 = tmp;
    }
    var r = mathMin(layout2.r, coordSysClipArea.r);
    var r0 = mathMax(layout2.r0, coordSysClipArea.r0);
    layout2.r = r;
    layout2.r0 = r0;
    var clipped = r - r0 < 0;
    if (signR < 0) {
      var tmp = layout2.r;
      layout2.r = layout2.r0;
      layout2.r0 = tmp;
    }
    return clipped;
  }
};
var elementCreator = {
  cartesian2d: function(seriesModel, data, newIndex, layout2, isHorizontal, animationModel, axisModel, isUpdate, roundCap) {
    var rect = new Rect({
      shape: extend({}, layout2),
      z2: 1
    });
    rect.__dataIndex = newIndex;
    rect.name = "item";
    if (animationModel) {
      var rectShape = rect.shape;
      var animateProperty = isHorizontal ? "height" : "width";
      rectShape[animateProperty] = 0;
    }
    return rect;
  },
  polar: function(seriesModel, data, newIndex, layout2, isRadial, animationModel, axisModel, isUpdate, roundCap) {
    var ShapeClass = !isRadial && roundCap ? SausagePath : Sector;
    var sector = new ShapeClass({
      shape: layout2,
      z2: 1
    });
    sector.name = "item";
    var positionMap = createPolarPositionMapping(isRadial);
    sector.calculateTextPosition = createSectorCalculateTextPosition(positionMap, {
      isRoundCap: ShapeClass === SausagePath
    });
    if (animationModel) {
      var sectorShape = sector.shape;
      var animateProperty = isRadial ? "r" : "endAngle";
      var animateTarget = {};
      sectorShape[animateProperty] = isRadial ? layout2.r0 : layout2.startAngle;
      animateTarget[animateProperty] = layout2[animateProperty];
      (isUpdate ? updateProps$1 : initProps)(sector, {
        shape: animateTarget
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, animationModel);
    }
    return sector;
  }
};
function shouldRealtimeSort(seriesModel, coordSys) {
  var realtimeSortOption = seriesModel.get("realtimeSort", true);
  var baseAxis = coordSys.getBaseAxis();
  if (realtimeSortOption && baseAxis.type === "category" && coordSys.type === "cartesian2d") {
    return {
      baseAxis,
      otherAxis: coordSys.getOtherAxis(baseAxis)
    };
  }
}
function updateRealtimeAnimation(realtimeSortCfg, seriesAnimationModel, el, layout2, newIndex, isHorizontal, isUpdate, isChangeOrder) {
  var seriesTarget;
  var axisTarget;
  if (isHorizontal) {
    axisTarget = {
      x: layout2.x,
      width: layout2.width
    };
    seriesTarget = {
      y: layout2.y,
      height: layout2.height
    };
  } else {
    axisTarget = {
      y: layout2.y,
      height: layout2.height
    };
    seriesTarget = {
      x: layout2.x,
      width: layout2.width
    };
  }
  if (!isChangeOrder) {
    (isUpdate ? updateProps$1 : initProps)(el, {
      shape: seriesTarget
    }, seriesAnimationModel, newIndex, null);
  }
  var axisAnimationModel = seriesAnimationModel ? realtimeSortCfg.baseAxis.model : null;
  (isUpdate ? updateProps$1 : initProps)(el, {
    shape: axisTarget
  }, axisAnimationModel, newIndex);
}
function checkPropertiesNotValid(obj, props) {
  for (var i = 0; i < props.length; i++) {
    if (!isFinite(obj[props[i]])) {
      return true;
    }
  }
  return false;
}
var rectPropties = ["x", "y", "width", "height"];
var polarPropties = ["cx", "cy", "r", "startAngle", "endAngle"];
var isValidLayout = {
  cartesian2d: function(layout2) {
    return !checkPropertiesNotValid(layout2, rectPropties);
  },
  polar: function(layout2) {
    return !checkPropertiesNotValid(layout2, polarPropties);
  }
};
var getLayout = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(data, dataIndex, itemModel) {
    var layout2 = data.getItemLayout(dataIndex);
    var fixedLineWidth = itemModel ? getLineWidth(itemModel, layout2) : 0;
    var signX = layout2.width > 0 ? 1 : -1;
    var signY = layout2.height > 0 ? 1 : -1;
    return {
      x: layout2.x + signX * fixedLineWidth / 2,
      y: layout2.y + signY * fixedLineWidth / 2,
      width: layout2.width - signX * fixedLineWidth,
      height: layout2.height - signY * fixedLineWidth
    };
  },
  polar: function(data, dataIndex, itemModel) {
    var layout2 = data.getItemLayout(dataIndex);
    return {
      cx: layout2.cx,
      cy: layout2.cy,
      r0: layout2.r0,
      r: layout2.r,
      startAngle: layout2.startAngle,
      endAngle: layout2.endAngle,
      clockwise: layout2.clockwise
    };
  }
};
function isZeroOnPolar(layout2) {
  return layout2.startAngle != null && layout2.endAngle != null && layout2.startAngle === layout2.endAngle;
}
function createPolarPositionMapping(isRadial) {
  return /* @__PURE__ */ function(isRadial2) {
    var arcOrAngle = isRadial2 ? "Arc" : "Angle";
    return function(position) {
      switch (position) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return position + arcOrAngle;
        default:
          return position;
      }
    };
  }(isRadial);
}
function updateStyle(el, data, dataIndex, itemModel, layout2, seriesModel, isHorizontalOrRadial, isPolar) {
  var style = data.getItemVisual(dataIndex, "style");
  if (!isPolar) {
    var borderRadius = itemModel.get(["itemStyle", "borderRadius"]) || 0;
    el.setShape("r", borderRadius);
  } else if (!seriesModel.get("roundCap")) {
    var sectorShape = el.shape;
    var cornerRadius = getSectorCornerRadius(itemModel.getModel("itemStyle"), sectorShape, true);
    extend(sectorShape, cornerRadius);
    el.setShape(sectorShape);
  }
  el.useStyle(style);
  var cursorStyle = itemModel.getShallow("cursor");
  cursorStyle && el.attr("cursor", cursorStyle);
  var labelPositionOutside = isPolar ? isHorizontalOrRadial ? layout2.r >= layout2.r0 ? "endArc" : "startArc" : layout2.endAngle >= layout2.startAngle ? "endAngle" : "startAngle" : isHorizontalOrRadial ? layout2.height >= 0 ? "bottom" : "top" : layout2.width >= 0 ? "right" : "left";
  var labelStatesModels = getLabelStatesModels(itemModel);
  setLabelStyle(el, labelStatesModels, {
    labelFetcher: seriesModel,
    labelDataIndex: dataIndex,
    defaultText: getDefaultLabel(seriesModel.getData(), dataIndex),
    inheritColor: style.fill,
    defaultOpacity: style.opacity,
    defaultOutsidePosition: labelPositionOutside
  });
  var label = el.getTextContent();
  if (isPolar && label) {
    var position = itemModel.get(["label", "position"]);
    el.textConfig.inside = position === "middle" ? true : null;
    setSectorTextRotation(el, position === "outside" ? labelPositionOutside : position, createPolarPositionMapping(isHorizontalOrRadial), itemModel.get(["label", "rotate"]));
  }
  setLabelValueAnimation(label, labelStatesModels, seriesModel.getRawValue(dataIndex), function(value) {
    return getDefaultInterpolatedLabel(data, value);
  });
  var emphasisModel = itemModel.getModel(["emphasis"]);
  toggleHoverEmphasis(el, emphasisModel.get("focus"), emphasisModel.get("blurScope"), emphasisModel.get("disabled"));
  setStatesStylesFromModel(el, itemModel);
  if (isZeroOnPolar(layout2)) {
    el.style.fill = "none";
    el.style.stroke = "none";
    each$3(el.states, function(state) {
      if (state.style) {
        state.style.fill = state.style.stroke = "none";
      }
    });
  }
}
function getLineWidth(itemModel, rawLayout) {
  var borderColor = itemModel.get(["itemStyle", "borderColor"]);
  if (!borderColor || borderColor === "none") {
    return 0;
  }
  var lineWidth = itemModel.get(["itemStyle", "borderWidth"]) || 0;
  var width = isNaN(rawLayout.width) ? Number.MAX_VALUE : Math.abs(rawLayout.width);
  var height = isNaN(rawLayout.height) ? Number.MAX_VALUE : Math.abs(rawLayout.height);
  return Math.min(lineWidth, width, height);
}
var LagePathShape = (
  /** @class */
  /* @__PURE__ */ function() {
    function LagePathShape2() {
    }
    return LagePathShape2;
  }()
);
var LargePath = (
  /** @class */
  function(_super) {
    __extends(LargePath2, _super);
    function LargePath2(opts) {
      var _this = _super.call(this, opts) || this;
      _this.type = "largeBar";
      return _this;
    }
    LargePath2.prototype.getDefaultShape = function() {
      return new LagePathShape();
    };
    LargePath2.prototype.buildPath = function(ctx, shape) {
      var points = shape.points;
      var baseDimIdx = this.baseDimIdx;
      var valueDimIdx = 1 - this.baseDimIdx;
      var startPoint = [];
      var size = [];
      var barWidth = this.barWidth;
      for (var i = 0; i < points.length; i += 3) {
        size[baseDimIdx] = barWidth;
        size[valueDimIdx] = points[i + 2];
        startPoint[baseDimIdx] = points[i + baseDimIdx];
        startPoint[valueDimIdx] = points[i + valueDimIdx];
        ctx.rect(startPoint[0], startPoint[1], size[0], size[1]);
      }
    };
    return LargePath2;
  }(Path)
);
function createLarge(seriesModel, group, progressiveEls, incremental) {
  var data = seriesModel.getData();
  var baseDimIdx = data.getLayout("valueAxisHorizontal") ? 1 : 0;
  var largeDataIndices = data.getLayout("largeDataIndices");
  var barWidth = data.getLayout("size");
  var backgroundModel = seriesModel.getModel("backgroundStyle");
  var bgPoints = data.getLayout("largeBackgroundPoints");
  if (bgPoints) {
    var bgEl = new LargePath({
      shape: {
        points: bgPoints
      },
      incremental: !!incremental,
      silent: true,
      z2: 0
    });
    bgEl.baseDimIdx = baseDimIdx;
    bgEl.largeDataIndices = largeDataIndices;
    bgEl.barWidth = barWidth;
    bgEl.useStyle(backgroundModel.getItemStyle());
    group.add(bgEl);
    progressiveEls && progressiveEls.push(bgEl);
  }
  var el = new LargePath({
    shape: {
      points: data.getLayout("largePoints")
    },
    incremental: !!incremental,
    ignoreCoarsePointer: true,
    z2: 1
  });
  el.baseDimIdx = baseDimIdx;
  el.largeDataIndices = largeDataIndices;
  el.barWidth = barWidth;
  group.add(el);
  el.useStyle(data.getVisual("style"));
  getECData(el).seriesIndex = seriesModel.seriesIndex;
  if (!seriesModel.get("silent")) {
    el.on("mousedown", largePathUpdateDataIndex);
    el.on("mousemove", largePathUpdateDataIndex);
  }
  progressiveEls && progressiveEls.push(el);
}
var largePathUpdateDataIndex = throttle(function(event) {
  var largePath = this;
  var dataIndex = largePathFindDataIndex(largePath, event.offsetX, event.offsetY);
  getECData(largePath).dataIndex = dataIndex >= 0 ? dataIndex : null;
}, 30, false);
function largePathFindDataIndex(largePath, x, y) {
  var baseDimIdx = largePath.baseDimIdx;
  var valueDimIdx = 1 - baseDimIdx;
  var points = largePath.shape.points;
  var largeDataIndices = largePath.largeDataIndices;
  var startPoint = [];
  var size = [];
  var barWidth = largePath.barWidth;
  for (var i = 0, len = points.length / 3; i < len; i++) {
    var ii = i * 3;
    size[baseDimIdx] = barWidth;
    size[valueDimIdx] = points[ii + 2];
    startPoint[baseDimIdx] = points[ii + baseDimIdx];
    startPoint[valueDimIdx] = points[ii + valueDimIdx];
    if (size[valueDimIdx] < 0) {
      startPoint[valueDimIdx] += size[valueDimIdx];
      size[valueDimIdx] = -size[valueDimIdx];
    }
    if (x >= startPoint[0] && x <= startPoint[0] + size[0] && y >= startPoint[1] && y <= startPoint[1] + size[1]) {
      return largeDataIndices[i];
    }
  }
  return -1;
}
function createBackgroundShape(isHorizontalOrRadial, layout2, coord) {
  if (isCoordinateSystemType(coord, "cartesian2d")) {
    var rectShape = layout2;
    var coordLayout = coord.getArea();
    return {
      x: isHorizontalOrRadial ? rectShape.x : coordLayout.x,
      y: isHorizontalOrRadial ? coordLayout.y : rectShape.y,
      width: isHorizontalOrRadial ? rectShape.width : coordLayout.width,
      height: isHorizontalOrRadial ? coordLayout.height : rectShape.height
    };
  } else {
    var coordLayout = coord.getArea();
    var sectorShape = layout2;
    return {
      cx: coordLayout.cx,
      cy: coordLayout.cy,
      r0: isHorizontalOrRadial ? coordLayout.r0 : sectorShape.r0,
      r: isHorizontalOrRadial ? coordLayout.r : sectorShape.r,
      startAngle: isHorizontalOrRadial ? sectorShape.startAngle : 0,
      endAngle: isHorizontalOrRadial ? sectorShape.endAngle : Math.PI * 2
    };
  }
}
function createBackgroundEl(coord, isHorizontalOrRadial, layout2) {
  var ElementClz = coord.type === "polar" ? Sector : Rect;
  return new ElementClz({
    shape: createBackgroundShape(isHorizontalOrRadial, layout2, coord),
    silent: true,
    z2: 0
  });
}
function install$4(registers) {
  registers.registerChartView(BarView);
  registers.registerSeriesModel(BarSeriesModel);
  registers.registerLayout(registers.PRIORITY.VISUAL.LAYOUT, zrUtil.curry(layout$1, "bar"));
  registers.registerLayout(registers.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, createProgressiveLayout("bar"));
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, dataSample("bar"));
  registers.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(payload, ecModel) {
    var componentType = payload.componentType || "series";
    ecModel.eachComponent({
      mainType: componentType,
      query: payload
    }, function(componentModel) {
      if (payload.sortInfo) {
        componentModel.axis.setCategorySortInfo(payload.sortInfo);
      }
    });
  });
}
var GridModel = (
  /** @class */
  function(_super) {
    __extends(GridModel2, _super);
    function GridModel2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GridModel2.type = "grid";
    GridModel2.dependencies = ["xAxis", "yAxis"];
    GridModel2.layoutMode = "box";
    GridModel2.defaultOption = {
      show: false,
      // zlevel: 0,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 70,
      // If grid size contain label
      containLabel: false,
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    };
    return GridModel2;
  }(ComponentModel)
);
var CartesianAxisModel = (
  /** @class */
  function(_super) {
    __extends(CartesianAxisModel2, _super);
    function CartesianAxisModel2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    CartesianAxisModel2.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", SINGLE_REFERRING).models[0];
    };
    CartesianAxisModel2.type = "cartesian2dAxis";
    return CartesianAxisModel2;
  }(ComponentModel)
);
zrUtil.mixin(CartesianAxisModel, AxisModelCommonMixin);
var defaultOption = {
  show: true,
  // zlevel: 0,
  z: 0,
  // Inverse the axis.
  inverse: false,
  // Axis name displayed.
  name: "",
  // 'start' | 'middle' | 'end'
  nameLocation: "end",
  // By degree. By default auto rotate by nameLocation.
  nameRotate: null,
  nameTruncate: {
    maxWidth: null,
    ellipsis: "...",
    placeholder: "."
  },
  // Use global text style by default.
  nameTextStyle: {},
  // The gap between axisName and axisLine.
  nameGap: 15,
  // Default `false` to support tooltip.
  silent: false,
  // Default `false` to avoid legacy user event listener fail.
  triggerEvent: false,
  tooltip: {
    show: false
  },
  axisPointer: {},
  axisLine: {
    show: true,
    onZero: true,
    onZeroAxisIndex: null,
    lineStyle: {
      color: "#6E7079",
      width: 1,
      type: "solid"
    },
    // The arrow at both ends the the axis.
    symbol: ["none", "none"],
    symbolSize: [10, 15]
  },
  axisTick: {
    show: true,
    // Whether axisTick is inside the grid or outside the grid.
    inside: false,
    // The length of axisTick.
    length: 5,
    lineStyle: {
      width: 1
    }
  },
  axisLabel: {
    show: true,
    // Whether axisLabel is inside the grid or outside the grid.
    inside: false,
    rotate: 0,
    // true | false | null/undefined (auto)
    showMinLabel: null,
    // true | false | null/undefined (auto)
    showMaxLabel: null,
    margin: 8,
    // formatter: null,
    fontSize: 12
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: ["#E0E6F1"],
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: false,
    areaStyle: {
      color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
    }
  }
};
var categoryAxis = zrUtil.merge({
  // The gap at both ends of the axis. For categoryAxis, boolean.
  boundaryGap: true,
  // Set false to faster category collection.
  deduplication: null,
  // splitArea: {
  // show: false
  // },
  splitLine: {
    show: false
  },
  axisTick: {
    // If tick is align with label when boundaryGap is true
    alignWithLabel: false,
    interval: "auto"
  },
  axisLabel: {
    interval: "auto"
  }
}, defaultOption);
var valueAxis = zrUtil.merge({
  boundaryGap: [0, 0],
  axisLine: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  axisTick: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  // TODO
  // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
  splitNumber: 5,
  minorTick: {
    // Minor tick, not available for cateogry axis.
    show: false,
    // Split number of minor ticks. The value should be in range of (0, 100)
    splitNumber: 5,
    // Length of minor tick
    length: 3,
    // Line style
    lineStyle: {
      // Default to be same with axisTick
    }
  },
  minorSplitLine: {
    show: false,
    lineStyle: {
      color: "#F4F7FD",
      width: 1
    }
  }
}, defaultOption);
var timeAxis = zrUtil.merge({
  splitNumber: 6,
  axisLabel: {
    // To eliminate labels that are not nice
    showMinLabel: false,
    showMaxLabel: false,
    rich: {
      primary: {
        fontWeight: "bold"
      }
    }
  },
  splitLine: {
    show: false
  }
}, valueAxis);
var logAxis = zrUtil.defaults({
  logBase: 10
}, valueAxis);
const axisDefault = {
  category: categoryAxis,
  value: valueAxis,
  time: timeAxis,
  log: logAxis
};
var AXIS_TYPES = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
};
function axisModelCreator(registers, axisName, BaseAxisModelClass, extraDefaultOption) {
  each$3(AXIS_TYPES, function(v, axisType) {
    var defaultOption2 = merge(merge({}, axisDefault[axisType], true), extraDefaultOption, true);
    var AxisModel = (
      /** @class */
      function(_super) {
        __extends(AxisModel2, _super);
        function AxisModel2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = axisName + "Axis." + axisType;
          return _this;
        }
        AxisModel2.prototype.mergeDefaultAndTheme = function(option, ecModel) {
          var layoutMode = fetchLayoutMode(this);
          var inputPositionParams = layoutMode ? getLayoutParams(option) : {};
          var themeModel = ecModel.getTheme();
          merge(option, themeModel.get(axisType + "Axis"));
          merge(option, this.getDefaultOption());
          option.type = getAxisType(option);
          if (layoutMode) {
            mergeLayoutParam(option, inputPositionParams, layoutMode);
          }
        };
        AxisModel2.prototype.optionUpdated = function() {
          var thisOption = this.option;
          if (thisOption.type === "category") {
            this.__ordinalMeta = OrdinalMeta.createByAxisModel(this);
          }
        };
        AxisModel2.prototype.getCategories = function(rawData) {
          var option = this.option;
          if (option.type === "category") {
            if (rawData) {
              return option.data;
            }
            return this.__ordinalMeta.categories;
          }
        };
        AxisModel2.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        };
        AxisModel2.type = axisName + "Axis." + axisType;
        AxisModel2.defaultOption = defaultOption2;
        return AxisModel2;
      }(BaseAxisModelClass)
    );
    registers.registerComponentModel(AxisModel);
  });
  registers.registerSubTypeDefaulter(axisName + "Axis", getAxisType);
}
function getAxisType(option) {
  return option.type || (option.data ? "category" : "value");
}
var Cartesian = (
  /** @class */
  function() {
    function Cartesian2(name) {
      this.type = "cartesian";
      this._dimList = [];
      this._axes = {};
      this.name = name || "";
    }
    Cartesian2.prototype.getAxis = function(dim) {
      return this._axes[dim];
    };
    Cartesian2.prototype.getAxes = function() {
      return zrUtil.map(this._dimList, function(dim) {
        return this._axes[dim];
      }, this);
    };
    Cartesian2.prototype.getAxesByScale = function(scaleType) {
      scaleType = scaleType.toLowerCase();
      return zrUtil.filter(this.getAxes(), function(axis) {
        return axis.scale.type === scaleType;
      });
    };
    Cartesian2.prototype.addAxis = function(axis) {
      var dim = axis.dim;
      this._axes[dim] = axis;
      this._dimList.push(dim);
    };
    return Cartesian2;
  }()
);
var cartesian2DDimensions = ["x", "y"];
function canCalculateAffineTransform(scale2) {
  return scale2.type === "interval" || scale2.type === "time";
}
var Cartesian2D = (
  /** @class */
  function(_super) {
    __extends(Cartesian2D2, _super);
    function Cartesian2D2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "cartesian2d";
      _this.dimensions = cartesian2DDimensions;
      return _this;
    }
    Cartesian2D2.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var xAxisScale = this.getAxis("x").scale;
      var yAxisScale = this.getAxis("y").scale;
      if (!canCalculateAffineTransform(xAxisScale) || !canCalculateAffineTransform(yAxisScale)) {
        return;
      }
      var xScaleExtent = xAxisScale.getExtent();
      var yScaleExtent = yAxisScale.getExtent();
      var start = this.dataToPoint([xScaleExtent[0], yScaleExtent[0]]);
      var end = this.dataToPoint([xScaleExtent[1], yScaleExtent[1]]);
      var xScaleSpan = xScaleExtent[1] - xScaleExtent[0];
      var yScaleSpan = yScaleExtent[1] - yScaleExtent[0];
      if (!xScaleSpan || !yScaleSpan) {
        return;
      }
      var scaleX = (end[0] - start[0]) / xScaleSpan;
      var scaleY = (end[1] - start[1]) / yScaleSpan;
      var translateX = start[0] - xScaleExtent[0] * scaleX;
      var translateY = start[1] - yScaleExtent[0] * scaleY;
      var m = this._transform = [scaleX, 0, 0, scaleY, translateX, translateY];
      this._invTransform = invert([], m);
    };
    Cartesian2D2.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    };
    Cartesian2D2.prototype.containPoint = function(point) {
      var axisX = this.getAxis("x");
      var axisY = this.getAxis("y");
      return axisX.contain(axisX.toLocalCoord(point[0])) && axisY.contain(axisY.toLocalCoord(point[1]));
    };
    Cartesian2D2.prototype.containData = function(data) {
      return this.getAxis("x").containData(data[0]) && this.getAxis("y").containData(data[1]);
    };
    Cartesian2D2.prototype.containZone = function(data1, data2) {
      var zoneDiag1 = this.dataToPoint(data1);
      var zoneDiag2 = this.dataToPoint(data2);
      var area = this.getArea();
      var zone = new BoundingRect(zoneDiag1[0], zoneDiag1[1], zoneDiag2[0] - zoneDiag1[0], zoneDiag2[1] - zoneDiag1[1]);
      return area.intersect(zone);
    };
    Cartesian2D2.prototype.dataToPoint = function(data, clamp2, out) {
      out = out || [];
      var xVal = data[0];
      var yVal = data[1];
      if (this._transform && xVal != null && isFinite(xVal) && yVal != null && isFinite(yVal)) {
        return applyTransform$1(out, data, this._transform);
      }
      var xAxis = this.getAxis("x");
      var yAxis = this.getAxis("y");
      out[0] = xAxis.toGlobalCoord(xAxis.dataToCoord(xVal, clamp2));
      out[1] = yAxis.toGlobalCoord(yAxis.dataToCoord(yVal, clamp2));
      return out;
    };
    Cartesian2D2.prototype.clampData = function(data, out) {
      var xScale = this.getAxis("x").scale;
      var yScale = this.getAxis("y").scale;
      var xAxisExtent = xScale.getExtent();
      var yAxisExtent = yScale.getExtent();
      var x = xScale.parse(data[0]);
      var y = yScale.parse(data[1]);
      out = out || [];
      out[0] = Math.min(Math.max(Math.min(xAxisExtent[0], xAxisExtent[1]), x), Math.max(xAxisExtent[0], xAxisExtent[1]));
      out[1] = Math.min(Math.max(Math.min(yAxisExtent[0], yAxisExtent[1]), y), Math.max(yAxisExtent[0], yAxisExtent[1]));
      return out;
    };
    Cartesian2D2.prototype.pointToData = function(point, clamp2) {
      var out = [];
      if (this._invTransform) {
        return applyTransform$1(out, point, this._invTransform);
      }
      var xAxis = this.getAxis("x");
      var yAxis = this.getAxis("y");
      out[0] = xAxis.coordToData(xAxis.toLocalCoord(point[0]), clamp2);
      out[1] = yAxis.coordToData(yAxis.toLocalCoord(point[1]), clamp2);
      return out;
    };
    Cartesian2D2.prototype.getOtherAxis = function(axis) {
      return this.getAxis(axis.dim === "x" ? "y" : "x");
    };
    Cartesian2D2.prototype.getArea = function(tolerance) {
      tolerance = tolerance || 0;
      var xExtent = this.getAxis("x").getGlobalExtent();
      var yExtent = this.getAxis("y").getGlobalExtent();
      var x = Math.min(xExtent[0], xExtent[1]) - tolerance;
      var y = Math.min(yExtent[0], yExtent[1]) - tolerance;
      var width = Math.max(xExtent[0], xExtent[1]) - x + tolerance;
      var height = Math.max(yExtent[0], yExtent[1]) - y + tolerance;
      return new BoundingRect(x, y, width, height);
    };
    return Cartesian2D2;
  }(Cartesian)
);
var Axis2D = (
  /** @class */
  function(_super) {
    __extends(Axis2D2, _super);
    function Axis2D2(dim, scale2, coordExtent, axisType, position) {
      var _this = _super.call(this, dim, scale2, coordExtent) || this;
      _this.index = 0;
      _this.type = axisType || "value";
      _this.position = position || "bottom";
      return _this;
    }
    Axis2D2.prototype.isHorizontal = function() {
      var position = this.position;
      return position === "top" || position === "bottom";
    };
    Axis2D2.prototype.getGlobalExtent = function(asc) {
      var ret = this.getExtent();
      ret[0] = this.toGlobalCoord(ret[0]);
      ret[1] = this.toGlobalCoord(ret[1]);
      asc && ret[0] > ret[1] && ret.reverse();
      return ret;
    };
    Axis2D2.prototype.pointToData = function(point, clamp2) {
      return this.coordToData(this.toLocalCoord(point[this.dim === "x" ? 0 : 1]), clamp2);
    };
    Axis2D2.prototype.setCategorySortInfo = function(info) {
      if (this.type !== "category") {
        return false;
      }
      this.model.option.categorySortInfo = info;
      this.scale.setSortInfo(info);
    };
    return Axis2D2;
  }(Axis)
);
function layout(gridModel, axisModel, opt) {
  opt = opt || {};
  var grid = gridModel.coordinateSystem;
  var axis = axisModel.axis;
  var layout2 = {};
  var otherAxisOnZeroOf = axis.getAxesOnZeroOf()[0];
  var rawAxisPosition = axis.position;
  var axisPosition = otherAxisOnZeroOf ? "onZero" : rawAxisPosition;
  var axisDim = axis.dim;
  var rect = grid.getRect();
  var rectBound = [rect.x, rect.x + rect.width, rect.y, rect.y + rect.height];
  var idx = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  };
  var axisOffset = axisModel.get("offset") || 0;
  var posBound = axisDim === "x" ? [rectBound[2] - axisOffset, rectBound[3] + axisOffset] : [rectBound[0] - axisOffset, rectBound[1] + axisOffset];
  if (otherAxisOnZeroOf) {
    var onZeroCoord = otherAxisOnZeroOf.toGlobalCoord(otherAxisOnZeroOf.dataToCoord(0));
    posBound[idx.onZero] = Math.max(Math.min(onZeroCoord, posBound[1]), posBound[0]);
  }
  layout2.position = [axisDim === "y" ? posBound[idx[axisPosition]] : rectBound[0], axisDim === "x" ? posBound[idx[axisPosition]] : rectBound[3]];
  layout2.rotation = Math.PI / 2 * (axisDim === "x" ? 0 : 1);
  var dirMap = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  layout2.labelDirection = layout2.tickDirection = layout2.nameDirection = dirMap[rawAxisPosition];
  layout2.labelOffset = otherAxisOnZeroOf ? posBound[idx[rawAxisPosition]] - posBound[idx.onZero] : 0;
  if (axisModel.get(["axisTick", "inside"])) {
    layout2.tickDirection = -layout2.tickDirection;
  }
  if (zrUtil.retrieve(opt.labelInside, axisModel.get(["axisLabel", "inside"]))) {
    layout2.labelDirection = -layout2.labelDirection;
  }
  var labelRotate = axisModel.get(["axisLabel", "rotate"]);
  layout2.labelRotate = axisPosition === "top" ? -labelRotate : labelRotate;
  layout2.z2 = 1;
  return layout2;
}
function isCartesian2DSeries(seriesModel) {
  return seriesModel.get("coordinateSystem") === "cartesian2d";
}
function findAxisModels(seriesModel) {
  var axisModelMap = {
    xAxisModel: null,
    yAxisModel: null
  };
  zrUtil.each(axisModelMap, function(v, key) {
    var axisType = key.replace(/Model$/, "");
    var axisModel = seriesModel.getReferringComponents(axisType, SINGLE_REFERRING).models[0];
    axisModelMap[key] = axisModel;
  });
  return axisModelMap;
}
var mathLog = Math.log;
function alignScaleTicks(scale2, axisModel, alignToScale) {
  var intervalScaleProto2 = IntervalScale.prototype;
  var alignToTicks = intervalScaleProto2.getTicks.call(alignToScale);
  var alignToNicedTicks = intervalScaleProto2.getTicks.call(alignToScale, true);
  var alignToSplitNumber = alignToTicks.length - 1;
  var alignToInterval = intervalScaleProto2.getInterval.call(alignToScale);
  var scaleExtent = getScaleExtent(scale2, axisModel);
  var rawExtent = scaleExtent.extent;
  var isMinFixed = scaleExtent.fixMin;
  var isMaxFixed = scaleExtent.fixMax;
  if (scale2.type === "log") {
    var logBase = mathLog(scale2.base);
    rawExtent = [mathLog(rawExtent[0]) / logBase, mathLog(rawExtent[1]) / logBase];
  }
  scale2.setExtent(rawExtent[0], rawExtent[1]);
  scale2.calcNiceExtent({
    splitNumber: alignToSplitNumber,
    fixMin: isMinFixed,
    fixMax: isMaxFixed
  });
  var extent = intervalScaleProto2.getExtent.call(scale2);
  if (isMinFixed) {
    rawExtent[0] = extent[0];
  }
  if (isMaxFixed) {
    rawExtent[1] = extent[1];
  }
  var interval = intervalScaleProto2.getInterval.call(scale2);
  var min = rawExtent[0];
  var max = rawExtent[1];
  if (isMinFixed && isMaxFixed) {
    interval = (max - min) / alignToSplitNumber;
  } else if (isMinFixed) {
    max = rawExtent[0] + interval * alignToSplitNumber;
    while (max < rawExtent[1] && isFinite(max) && isFinite(rawExtent[1])) {
      interval = increaseInterval(interval);
      max = rawExtent[0] + interval * alignToSplitNumber;
    }
  } else if (isMaxFixed) {
    min = rawExtent[1] - interval * alignToSplitNumber;
    while (min > rawExtent[0] && isFinite(min) && isFinite(rawExtent[0])) {
      interval = increaseInterval(interval);
      min = rawExtent[1] - interval * alignToSplitNumber;
    }
  } else {
    var nicedSplitNumber = scale2.getTicks().length - 1;
    if (nicedSplitNumber > alignToSplitNumber) {
      interval = increaseInterval(interval);
    }
    var range = interval * alignToSplitNumber;
    max = Math.ceil(rawExtent[1] / interval) * interval;
    min = round(max - range);
    if (min < 0 && rawExtent[0] >= 0) {
      min = 0;
      max = round(range);
    } else if (max > 0 && rawExtent[1] <= 0) {
      max = 0;
      min = -round(range);
    }
  }
  var t0 = (alignToTicks[0].value - alignToNicedTicks[0].value) / alignToInterval;
  var t1 = (alignToTicks[alignToSplitNumber].value - alignToNicedTicks[alignToSplitNumber].value) / alignToInterval;
  intervalScaleProto2.setExtent.call(scale2, min + interval * t0, max + interval * t1);
  intervalScaleProto2.setInterval.call(scale2, interval);
  if (t0 || t1) {
    intervalScaleProto2.setNiceExtent.call(scale2, min + interval, max - interval);
  }
}
var Grid = (
  /** @class */
  function() {
    function Grid2(gridModel, ecModel, api) {
      this.type = "grid";
      this._coordsMap = {};
      this._coordsList = [];
      this._axesMap = {};
      this._axesList = [];
      this.axisPointerEnabled = true;
      this.dimensions = cartesian2DDimensions;
      this._initCartesian(gridModel, ecModel, api);
      this.model = gridModel;
    }
    Grid2.prototype.getRect = function() {
      return this._rect;
    };
    Grid2.prototype.update = function(ecModel, api) {
      var axesMap = this._axesMap;
      this._updateScale(ecModel, this.model);
      function updateAxisTicks(axes) {
        var alignTo;
        var axesIndices = keys(axes);
        var len = axesIndices.length;
        if (!len) {
          return;
        }
        var axisNeedsAlign = [];
        for (var i = len - 1; i >= 0; i--) {
          var idx = +axesIndices[i];
          var axis = axes[idx];
          var model = axis.model;
          var scale2 = axis.scale;
          if (
            // Only value and log axis without interval support alignTicks.
            isIntervalOrLogScale(scale2) && model.get("alignTicks") && model.get("interval") == null
          ) {
            axisNeedsAlign.push(axis);
          } else {
            niceScaleExtent(scale2, model);
            if (isIntervalOrLogScale(scale2)) {
              alignTo = axis;
            }
          }
        }
        if (axisNeedsAlign.length) {
          if (!alignTo) {
            alignTo = axisNeedsAlign.pop();
            niceScaleExtent(alignTo.scale, alignTo.model);
          }
          each$3(axisNeedsAlign, function(axis2) {
            alignScaleTicks(axis2.scale, axis2.model, alignTo.scale);
          });
        }
      }
      updateAxisTicks(axesMap.x);
      updateAxisTicks(axesMap.y);
      var onZeroRecords = {};
      each$3(axesMap.x, function(xAxis) {
        fixAxisOnZero(axesMap, "y", xAxis, onZeroRecords);
      });
      each$3(axesMap.y, function(yAxis) {
        fixAxisOnZero(axesMap, "x", yAxis, onZeroRecords);
      });
      this.resize(this.model, api);
    };
    Grid2.prototype.resize = function(gridModel, api, ignoreContainLabel) {
      var boxLayoutParams = gridModel.getBoxLayoutParams();
      var isContainLabel = !ignoreContainLabel && gridModel.get("containLabel");
      var gridRect = getLayoutRect(boxLayoutParams, {
        width: api.getWidth(),
        height: api.getHeight()
      });
      this._rect = gridRect;
      var axesList = this._axesList;
      adjustAxes();
      if (isContainLabel) {
        each$3(axesList, function(axis) {
          if (!axis.model.get(["axisLabel", "inside"])) {
            var labelUnionRect = estimateLabelUnionRect(axis);
            if (labelUnionRect) {
              var dim = axis.isHorizontal() ? "height" : "width";
              var margin = axis.model.get(["axisLabel", "margin"]);
              gridRect[dim] -= labelUnionRect[dim] + margin;
              if (axis.position === "top") {
                gridRect.y += labelUnionRect.height + margin;
              } else if (axis.position === "left") {
                gridRect.x += labelUnionRect.width + margin;
              }
            }
          }
        });
        adjustAxes();
      }
      each$3(this._coordsList, function(coord) {
        coord.calcAffineTransform();
      });
      function adjustAxes() {
        each$3(axesList, function(axis) {
          var isHorizontal = axis.isHorizontal();
          var extent = isHorizontal ? [0, gridRect.width] : [0, gridRect.height];
          var idx = axis.inverse ? 1 : 0;
          axis.setExtent(extent[idx], extent[1 - idx]);
          updateAxisTransform(axis, isHorizontal ? gridRect.x : gridRect.y);
        });
      }
    };
    Grid2.prototype.getAxis = function(dim, axisIndex) {
      var axesMapOnDim = this._axesMap[dim];
      if (axesMapOnDim != null) {
        return axesMapOnDim[axisIndex || 0];
      }
    };
    Grid2.prototype.getAxes = function() {
      return this._axesList.slice();
    };
    Grid2.prototype.getCartesian = function(xAxisIndex, yAxisIndex) {
      if (xAxisIndex != null && yAxisIndex != null) {
        var key = "x" + xAxisIndex + "y" + yAxisIndex;
        return this._coordsMap[key];
      }
      if (isObject$3(xAxisIndex)) {
        yAxisIndex = xAxisIndex.yAxisIndex;
        xAxisIndex = xAxisIndex.xAxisIndex;
      }
      for (var i = 0, coordList = this._coordsList; i < coordList.length; i++) {
        if (coordList[i].getAxis("x").index === xAxisIndex || coordList[i].getAxis("y").index === yAxisIndex) {
          return coordList[i];
        }
      }
    };
    Grid2.prototype.getCartesians = function() {
      return this._coordsList.slice();
    };
    Grid2.prototype.convertToPixel = function(ecModel, finder, value) {
      var target = this._findConvertTarget(finder);
      return target.cartesian ? target.cartesian.dataToPoint(value) : target.axis ? target.axis.toGlobalCoord(target.axis.dataToCoord(value)) : null;
    };
    Grid2.prototype.convertFromPixel = function(ecModel, finder, value) {
      var target = this._findConvertTarget(finder);
      return target.cartesian ? target.cartesian.pointToData(value) : target.axis ? target.axis.coordToData(target.axis.toLocalCoord(value)) : null;
    };
    Grid2.prototype._findConvertTarget = function(finder) {
      var seriesModel = finder.seriesModel;
      var xAxisModel = finder.xAxisModel || seriesModel && seriesModel.getReferringComponents("xAxis", SINGLE_REFERRING).models[0];
      var yAxisModel = finder.yAxisModel || seriesModel && seriesModel.getReferringComponents("yAxis", SINGLE_REFERRING).models[0];
      var gridModel = finder.gridModel;
      var coordsList = this._coordsList;
      var cartesian;
      var axis;
      if (seriesModel) {
        cartesian = seriesModel.coordinateSystem;
        indexOf(coordsList, cartesian) < 0 && (cartesian = null);
      } else if (xAxisModel && yAxisModel) {
        cartesian = this.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
      } else if (xAxisModel) {
        axis = this.getAxis("x", xAxisModel.componentIndex);
      } else if (yAxisModel) {
        axis = this.getAxis("y", yAxisModel.componentIndex);
      } else if (gridModel) {
        var grid = gridModel.coordinateSystem;
        if (grid === this) {
          cartesian = this._coordsList[0];
        }
      }
      return {
        cartesian,
        axis
      };
    };
    Grid2.prototype.containPoint = function(point) {
      var coord = this._coordsList[0];
      if (coord) {
        return coord.containPoint(point);
      }
    };
    Grid2.prototype._initCartesian = function(gridModel, ecModel, api) {
      var _this = this;
      var grid = this;
      var axisPositionUsed = {
        left: false,
        right: false,
        top: false,
        bottom: false
      };
      var axesMap = {
        x: {},
        y: {}
      };
      var axesCount = {
        x: 0,
        y: 0
      };
      ecModel.eachComponent("xAxis", createAxisCreator("x"), this);
      ecModel.eachComponent("yAxis", createAxisCreator("y"), this);
      if (!axesCount.x || !axesCount.y) {
        this._axesMap = {};
        this._axesList = [];
        return;
      }
      this._axesMap = axesMap;
      each$3(axesMap.x, function(xAxis, xAxisIndex) {
        each$3(axesMap.y, function(yAxis, yAxisIndex) {
          var key = "x" + xAxisIndex + "y" + yAxisIndex;
          var cartesian = new Cartesian2D(key);
          cartesian.master = _this;
          cartesian.model = gridModel;
          _this._coordsMap[key] = cartesian;
          _this._coordsList.push(cartesian);
          cartesian.addAxis(xAxis);
          cartesian.addAxis(yAxis);
        });
      });
      function createAxisCreator(dimName) {
        return function(axisModel, idx) {
          if (!isAxisUsedInTheGrid(axisModel, gridModel)) {
            return;
          }
          var axisPosition = axisModel.get("position");
          if (dimName === "x") {
            if (axisPosition !== "top" && axisPosition !== "bottom") {
              axisPosition = axisPositionUsed.bottom ? "top" : "bottom";
            }
          } else {
            if (axisPosition !== "left" && axisPosition !== "right") {
              axisPosition = axisPositionUsed.left ? "right" : "left";
            }
          }
          axisPositionUsed[axisPosition] = true;
          var axis = new Axis2D(dimName, createScaleByModel(axisModel), [0, 0], axisModel.get("type"), axisPosition);
          var isCategory2 = axis.type === "category";
          axis.onBand = isCategory2 && axisModel.get("boundaryGap");
          axis.inverse = axisModel.get("inverse");
          axisModel.axis = axis;
          axis.model = axisModel;
          axis.grid = grid;
          axis.index = idx;
          grid._axesList.push(axis);
          axesMap[dimName][idx] = axis;
          axesCount[dimName]++;
        };
      }
    };
    Grid2.prototype._updateScale = function(ecModel, gridModel) {
      each$3(this._axesList, function(axis) {
        axis.scale.setExtent(Infinity, -Infinity);
        if (axis.type === "category") {
          var categorySortInfo = axis.model.get("categorySortInfo");
          axis.scale.setSortInfo(categorySortInfo);
        }
      });
      ecModel.eachSeries(function(seriesModel) {
        if (isCartesian2DSeries(seriesModel)) {
          var axesModelMap = findAxisModels(seriesModel);
          var xAxisModel = axesModelMap.xAxisModel;
          var yAxisModel = axesModelMap.yAxisModel;
          if (!isAxisUsedInTheGrid(xAxisModel, gridModel) || !isAxisUsedInTheGrid(yAxisModel, gridModel)) {
            return;
          }
          var cartesian = this.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
          var data = seriesModel.getData();
          var xAxis = cartesian.getAxis("x");
          var yAxis = cartesian.getAxis("y");
          unionExtent(data, xAxis);
          unionExtent(data, yAxis);
        }
      }, this);
      function unionExtent(data, axis) {
        each$3(getDataDimensionsOnAxis(data, axis.dim), function(dim) {
          axis.scale.unionExtentFromData(data, dim);
        });
      }
    };
    Grid2.prototype.getTooltipAxes = function(dim) {
      var baseAxes = [];
      var otherAxes = [];
      each$3(this.getCartesians(), function(cartesian) {
        var baseAxis = dim != null && dim !== "auto" ? cartesian.getAxis(dim) : cartesian.getBaseAxis();
        var otherAxis = cartesian.getOtherAxis(baseAxis);
        indexOf(baseAxes, baseAxis) < 0 && baseAxes.push(baseAxis);
        indexOf(otherAxes, otherAxis) < 0 && otherAxes.push(otherAxis);
      });
      return {
        baseAxes,
        otherAxes
      };
    };
    Grid2.create = function(ecModel, api) {
      var grids = [];
      ecModel.eachComponent("grid", function(gridModel, idx) {
        var grid = new Grid2(gridModel, ecModel, api);
        grid.name = "grid_" + idx;
        grid.resize(gridModel, api, true);
        gridModel.coordinateSystem = grid;
        grids.push(grid);
      });
      ecModel.eachSeries(function(seriesModel) {
        if (!isCartesian2DSeries(seriesModel)) {
          return;
        }
        var axesModelMap = findAxisModels(seriesModel);
        var xAxisModel = axesModelMap.xAxisModel;
        var yAxisModel = axesModelMap.yAxisModel;
        var gridModel = xAxisModel.getCoordSysModel();
        var grid = gridModel.coordinateSystem;
        seriesModel.coordinateSystem = grid.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
      });
      return grids;
    };
    Grid2.dimensions = cartesian2DDimensions;
    return Grid2;
  }()
);
function isAxisUsedInTheGrid(axisModel, gridModel) {
  return axisModel.getCoordSysModel() === gridModel;
}
function fixAxisOnZero(axesMap, otherAxisDim, axis, onZeroRecords) {
  axis.getAxesOnZeroOf = function() {
    return otherAxisOnZeroOf ? [otherAxisOnZeroOf] : [];
  };
  var otherAxes = axesMap[otherAxisDim];
  var otherAxisOnZeroOf;
  var axisModel = axis.model;
  var onZero = axisModel.get(["axisLine", "onZero"]);
  var onZeroAxisIndex = axisModel.get(["axisLine", "onZeroAxisIndex"]);
  if (!onZero) {
    return;
  }
  if (onZeroAxisIndex != null) {
    if (canOnZeroToAxis(otherAxes[onZeroAxisIndex])) {
      otherAxisOnZeroOf = otherAxes[onZeroAxisIndex];
    }
  } else {
    for (var idx in otherAxes) {
      if (otherAxes.hasOwnProperty(idx) && canOnZeroToAxis(otherAxes[idx]) && !onZeroRecords[getOnZeroRecordKey(otherAxes[idx])]) {
        otherAxisOnZeroOf = otherAxes[idx];
        break;
      }
    }
  }
  if (otherAxisOnZeroOf) {
    onZeroRecords[getOnZeroRecordKey(otherAxisOnZeroOf)] = true;
  }
  function getOnZeroRecordKey(axis2) {
    return axis2.dim + "_" + axis2.index;
  }
}
function canOnZeroToAxis(axis) {
  return axis && axis.type !== "category" && axis.type !== "time" && ifAxisCrossZero(axis);
}
function updateAxisTransform(axis, coordBase) {
  var axisExtent = axis.getExtent();
  var axisExtentSum = axisExtent[0] + axisExtent[1];
  axis.toGlobalCoord = axis.dim === "x" ? function(coord) {
    return coord + coordBase;
  } : function(coord) {
    return axisExtentSum - coord + coordBase;
  };
  axis.toLocalCoord = axis.dim === "x" ? function(coord) {
    return coord - coordBase;
  } : function(coord) {
    return axisExtentSum - coord + coordBase;
  };
}
var PI = Math.PI;
var AxisBuilder = (
  /** @class */
  function() {
    function AxisBuilder2(axisModel, opt) {
      this.group = new Group();
      this.opt = opt;
      this.axisModel = axisModel;
      defaults(opt, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: true,
        handleAutoShown: function() {
          return true;
        }
      });
      var transformGroup = new Group({
        x: opt.position[0],
        y: opt.position[1],
        rotation: opt.rotation
      });
      transformGroup.updateTransform();
      this._transformGroup = transformGroup;
    }
    AxisBuilder2.prototype.hasBuilder = function(name) {
      return !!builders[name];
    };
    AxisBuilder2.prototype.add = function(name) {
      builders[name](this.opt, this.axisModel, this.group, this._transformGroup);
    };
    AxisBuilder2.prototype.getGroup = function() {
      return this.group;
    };
    AxisBuilder2.innerTextLayout = function(axisRotation, textRotation, direction) {
      var rotationDiff = remRadian(textRotation - axisRotation);
      var textAlign;
      var textVerticalAlign;
      if (isRadianAroundZero(rotationDiff)) {
        textVerticalAlign = direction > 0 ? "top" : "bottom";
        textAlign = "center";
      } else if (isRadianAroundZero(rotationDiff - PI)) {
        textVerticalAlign = direction > 0 ? "bottom" : "top";
        textAlign = "center";
      } else {
        textVerticalAlign = "middle";
        if (rotationDiff > 0 && rotationDiff < PI) {
          textAlign = direction > 0 ? "right" : "left";
        } else {
          textAlign = direction > 0 ? "left" : "right";
        }
      }
      return {
        rotation: rotationDiff,
        textAlign,
        textVerticalAlign
      };
    };
    AxisBuilder2.makeAxisEventDataBase = function(axisModel) {
      var eventData = {
        componentType: axisModel.mainType,
        componentIndex: axisModel.componentIndex
      };
      eventData[axisModel.mainType + "Index"] = axisModel.componentIndex;
      return eventData;
    };
    AxisBuilder2.isLabelSilent = function(axisModel) {
      var tooltipOpt = axisModel.get("tooltip");
      return axisModel.get("silent") || !(axisModel.get("triggerEvent") || tooltipOpt && tooltipOpt.show);
    };
    return AxisBuilder2;
  }()
);
var builders = {
  axisLine: function(opt, axisModel, group, transformGroup) {
    var shown = axisModel.get(["axisLine", "show"]);
    if (shown === "auto" && opt.handleAutoShown) {
      shown = opt.handleAutoShown("axisLine");
    }
    if (!shown) {
      return;
    }
    var extent = axisModel.axis.getExtent();
    var matrix2 = transformGroup.transform;
    var pt1 = [extent[0], 0];
    var pt2 = [extent[1], 0];
    var inverse = pt1[0] > pt2[0];
    if (matrix2) {
      applyTransform$1(pt1, pt1, matrix2);
      applyTransform$1(pt2, pt2, matrix2);
    }
    var lineStyle = extend({
      lineCap: "round"
    }, axisModel.getModel(["axisLine", "lineStyle"]).getLineStyle());
    var line = new Line({
      shape: {
        x1: pt1[0],
        y1: pt1[1],
        x2: pt2[0],
        y2: pt2[1]
      },
      style: lineStyle,
      strokeContainThreshold: opt.strokeContainThreshold || 5,
      silent: true,
      z2: 1
    });
    subPixelOptimizeLine(line.shape, line.style.lineWidth);
    line.anid = "line";
    group.add(line);
    var arrows = axisModel.get(["axisLine", "symbol"]);
    if (arrows != null) {
      var arrowSize = axisModel.get(["axisLine", "symbolSize"]);
      if (isString$2(arrows)) {
        arrows = [arrows, arrows];
      }
      if (isString$2(arrowSize) || isNumber$1(arrowSize)) {
        arrowSize = [arrowSize, arrowSize];
      }
      var arrowOffset = normalizeSymbolOffset(axisModel.get(["axisLine", "symbolOffset"]) || 0, arrowSize);
      var symbolWidth_1 = arrowSize[0];
      var symbolHeight_1 = arrowSize[1];
      each$3([{
        rotate: opt.rotation + Math.PI / 2,
        offset: arrowOffset[0],
        r: 0
      }, {
        rotate: opt.rotation - Math.PI / 2,
        offset: arrowOffset[1],
        r: Math.sqrt((pt1[0] - pt2[0]) * (pt1[0] - pt2[0]) + (pt1[1] - pt2[1]) * (pt1[1] - pt2[1]))
      }], function(point, index) {
        if (arrows[index] !== "none" && arrows[index] != null) {
          var symbol = createSymbol(arrows[index], -symbolWidth_1 / 2, -symbolHeight_1 / 2, symbolWidth_1, symbolHeight_1, lineStyle.stroke, true);
          var r = point.r + point.offset;
          var pt = inverse ? pt2 : pt1;
          symbol.attr({
            rotation: point.rotate,
            x: pt[0] + r * Math.cos(opt.rotation),
            y: pt[1] - r * Math.sin(opt.rotation),
            silent: true,
            z2: 11
          });
          group.add(symbol);
        }
      });
    }
  },
  axisTickLabel: function(opt, axisModel, group, transformGroup) {
    var ticksEls = buildAxisMajorTicks(group, transformGroup, axisModel, opt);
    var labelEls = buildAxisLabel(group, transformGroup, axisModel, opt);
    fixMinMaxLabelShow(axisModel, labelEls, ticksEls);
    buildAxisMinorTicks(group, transformGroup, axisModel, opt.tickDirection);
    if (axisModel.get(["axisLabel", "hideOverlap"])) {
      var labelList = prepareLayoutList(map$1(labelEls, function(label) {
        return {
          label,
          priority: label.z2,
          defaultAttr: {
            ignore: label.ignore
          }
        };
      }));
      hideOverlap(labelList);
    }
  },
  axisName: function(opt, axisModel, group, transformGroup) {
    var name = retrieve(opt.axisName, axisModel.get("name"));
    if (!name) {
      return;
    }
    var nameLocation = axisModel.get("nameLocation");
    var nameDirection = opt.nameDirection;
    var textStyleModel = axisModel.getModel("nameTextStyle");
    var gap = axisModel.get("nameGap") || 0;
    var extent = axisModel.axis.getExtent();
    var gapSignal = extent[0] > extent[1] ? -1 : 1;
    var pos = [
      nameLocation === "start" ? extent[0] - gapSignal * gap : nameLocation === "end" ? extent[1] + gapSignal * gap : (extent[0] + extent[1]) / 2,
      // Reuse labelOffset.
      isNameLocationCenter(nameLocation) ? opt.labelOffset + nameDirection * gap : 0
    ];
    var labelLayout;
    var nameRotation = axisModel.get("nameRotate");
    if (nameRotation != null) {
      nameRotation = nameRotation * PI / 180;
    }
    var axisNameAvailableWidth;
    if (isNameLocationCenter(nameLocation)) {
      labelLayout = AxisBuilder.innerTextLayout(
        opt.rotation,
        nameRotation != null ? nameRotation : opt.rotation,
        // Adapt to axis.
        nameDirection
      );
    } else {
      labelLayout = endTextLayout(opt.rotation, nameLocation, nameRotation || 0, extent);
      axisNameAvailableWidth = opt.axisNameAvailableWidth;
      if (axisNameAvailableWidth != null) {
        axisNameAvailableWidth = Math.abs(axisNameAvailableWidth / Math.sin(labelLayout.rotation));
        !isFinite(axisNameAvailableWidth) && (axisNameAvailableWidth = null);
      }
    }
    var textFont = textStyleModel.getFont();
    var truncateOpt = axisModel.get("nameTruncate", true) || {};
    var ellipsis = truncateOpt.ellipsis;
    var maxWidth = retrieve(opt.nameTruncateMaxWidth, truncateOpt.maxWidth, axisNameAvailableWidth);
    var textEl = new ZRText({
      x: pos[0],
      y: pos[1],
      rotation: labelLayout.rotation,
      silent: AxisBuilder.isLabelSilent(axisModel),
      style: createTextStyle(textStyleModel, {
        text: name,
        font: textFont,
        overflow: "truncate",
        width: maxWidth,
        ellipsis,
        fill: textStyleModel.getTextColor() || axisModel.get(["axisLine", "lineStyle", "color"]),
        align: textStyleModel.get("align") || labelLayout.textAlign,
        verticalAlign: textStyleModel.get("verticalAlign") || labelLayout.textVerticalAlign
      }),
      z2: 1
    });
    setTooltipConfig({
      el: textEl,
      componentModel: axisModel,
      itemName: name
    });
    textEl.__fullText = name;
    textEl.anid = "name";
    if (axisModel.get("triggerEvent")) {
      var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
      eventData.targetType = "axisName";
      eventData.name = name;
      getECData(textEl).eventData = eventData;
    }
    transformGroup.add(textEl);
    textEl.updateTransform();
    group.add(textEl);
    textEl.decomposeTransform();
  }
};
function endTextLayout(rotation, textPosition, textRotate, extent) {
  var rotationDiff = remRadian(textRotate - rotation);
  var textAlign;
  var textVerticalAlign;
  var inverse = extent[0] > extent[1];
  var onLeft = textPosition === "start" && !inverse || textPosition !== "start" && inverse;
  if (isRadianAroundZero(rotationDiff - PI / 2)) {
    textVerticalAlign = onLeft ? "bottom" : "top";
    textAlign = "center";
  } else if (isRadianAroundZero(rotationDiff - PI * 1.5)) {
    textVerticalAlign = onLeft ? "top" : "bottom";
    textAlign = "center";
  } else {
    textVerticalAlign = "middle";
    if (rotationDiff < PI * 1.5 && rotationDiff > PI / 2) {
      textAlign = onLeft ? "left" : "right";
    } else {
      textAlign = onLeft ? "right" : "left";
    }
  }
  return {
    rotation: rotationDiff,
    textAlign,
    textVerticalAlign
  };
}
function fixMinMaxLabelShow(axisModel, labelEls, tickEls) {
  if (shouldShowAllLabels(axisModel.axis)) {
    return;
  }
  var showMinLabel = axisModel.get(["axisLabel", "showMinLabel"]);
  var showMaxLabel = axisModel.get(["axisLabel", "showMaxLabel"]);
  labelEls = labelEls || [];
  tickEls = tickEls || [];
  var firstLabel = labelEls[0];
  var nextLabel = labelEls[1];
  var lastLabel = labelEls[labelEls.length - 1];
  var prevLabel = labelEls[labelEls.length - 2];
  var firstTick = tickEls[0];
  var nextTick2 = tickEls[1];
  var lastTick = tickEls[tickEls.length - 1];
  var prevTick = tickEls[tickEls.length - 2];
  if (showMinLabel === false) {
    ignoreEl(firstLabel);
    ignoreEl(firstTick);
  } else if (isTwoLabelOverlapped(firstLabel, nextLabel)) {
    if (showMinLabel) {
      ignoreEl(nextLabel);
      ignoreEl(nextTick2);
    } else {
      ignoreEl(firstLabel);
      ignoreEl(firstTick);
    }
  }
  if (showMaxLabel === false) {
    ignoreEl(lastLabel);
    ignoreEl(lastTick);
  } else if (isTwoLabelOverlapped(prevLabel, lastLabel)) {
    if (showMaxLabel) {
      ignoreEl(prevLabel);
      ignoreEl(prevTick);
    } else {
      ignoreEl(lastLabel);
      ignoreEl(lastTick);
    }
  }
}
function ignoreEl(el) {
  el && (el.ignore = true);
}
function isTwoLabelOverlapped(current, next) {
  var firstRect = current && current.getBoundingRect().clone();
  var nextRect = next && next.getBoundingRect().clone();
  if (!firstRect || !nextRect) {
    return;
  }
  var mRotationBack = matrix.identity([]);
  matrix.rotate(mRotationBack, mRotationBack, -current.rotation);
  firstRect.applyTransform(matrix.mul([], mRotationBack, current.getLocalTransform()));
  nextRect.applyTransform(matrix.mul([], mRotationBack, next.getLocalTransform()));
  return firstRect.intersect(nextRect);
}
function isNameLocationCenter(nameLocation) {
  return nameLocation === "middle" || nameLocation === "center";
}
function createTicks(ticksCoords, tickTransform, tickEndCoord, tickLineStyle, anidPrefix) {
  var tickEls = [];
  var pt1 = [];
  var pt2 = [];
  for (var i = 0; i < ticksCoords.length; i++) {
    var tickCoord = ticksCoords[i].coord;
    pt1[0] = tickCoord;
    pt1[1] = 0;
    pt2[0] = tickCoord;
    pt2[1] = tickEndCoord;
    if (tickTransform) {
      applyTransform$1(pt1, pt1, tickTransform);
      applyTransform$1(pt2, pt2, tickTransform);
    }
    var tickEl = new Line({
      shape: {
        x1: pt1[0],
        y1: pt1[1],
        x2: pt2[0],
        y2: pt2[1]
      },
      style: tickLineStyle,
      z2: 2,
      autoBatch: true,
      silent: true
    });
    subPixelOptimizeLine(tickEl.shape, tickEl.style.lineWidth);
    tickEl.anid = anidPrefix + "_" + ticksCoords[i].tickValue;
    tickEls.push(tickEl);
  }
  return tickEls;
}
function buildAxisMajorTicks(group, transformGroup, axisModel, opt) {
  var axis = axisModel.axis;
  var tickModel = axisModel.getModel("axisTick");
  var shown = tickModel.get("show");
  if (shown === "auto" && opt.handleAutoShown) {
    shown = opt.handleAutoShown("axisTick");
  }
  if (!shown || axis.scale.isBlank()) {
    return;
  }
  var lineStyleModel = tickModel.getModel("lineStyle");
  var tickEndCoord = opt.tickDirection * tickModel.get("length");
  var ticksCoords = axis.getTicksCoords();
  var ticksEls = createTicks(ticksCoords, transformGroup.transform, tickEndCoord, defaults(lineStyleModel.getLineStyle(), {
    stroke: axisModel.get(["axisLine", "lineStyle", "color"])
  }), "ticks");
  for (var i = 0; i < ticksEls.length; i++) {
    group.add(ticksEls[i]);
  }
  return ticksEls;
}
function buildAxisMinorTicks(group, transformGroup, axisModel, tickDirection) {
  var axis = axisModel.axis;
  var minorTickModel = axisModel.getModel("minorTick");
  if (!minorTickModel.get("show") || axis.scale.isBlank()) {
    return;
  }
  var minorTicksCoords = axis.getMinorTicksCoords();
  if (!minorTicksCoords.length) {
    return;
  }
  var lineStyleModel = minorTickModel.getModel("lineStyle");
  var tickEndCoord = tickDirection * minorTickModel.get("length");
  var minorTickLineStyle = defaults(lineStyleModel.getLineStyle(), defaults(axisModel.getModel("axisTick").getLineStyle(), {
    stroke: axisModel.get(["axisLine", "lineStyle", "color"])
  }));
  for (var i = 0; i < minorTicksCoords.length; i++) {
    var minorTicksEls = createTicks(minorTicksCoords[i], transformGroup.transform, tickEndCoord, minorTickLineStyle, "minorticks_" + i);
    for (var k = 0; k < minorTicksEls.length; k++) {
      group.add(minorTicksEls[k]);
    }
  }
}
function buildAxisLabel(group, transformGroup, axisModel, opt) {
  var axis = axisModel.axis;
  var show = retrieve(opt.axisLabelShow, axisModel.get(["axisLabel", "show"]));
  if (!show || axis.scale.isBlank()) {
    return;
  }
  var labelModel = axisModel.getModel("axisLabel");
  var labelMargin = labelModel.get("margin");
  var labels = axis.getViewLabels();
  var labelRotation = (retrieve(opt.labelRotate, labelModel.get("rotate")) || 0) * PI / 180;
  var labelLayout = AxisBuilder.innerTextLayout(opt.rotation, labelRotation, opt.labelDirection);
  var rawCategoryData = axisModel.getCategories && axisModel.getCategories(true);
  var labelEls = [];
  var silent = AxisBuilder.isLabelSilent(axisModel);
  var triggerEvent = axisModel.get("triggerEvent");
  each$3(labels, function(labelItem, index) {
    var tickValue = axis.scale.type === "ordinal" ? axis.scale.getRawOrdinalNumber(labelItem.tickValue) : labelItem.tickValue;
    var formattedLabel = labelItem.formattedLabel;
    var rawLabel = labelItem.rawLabel;
    var itemLabelModel = labelModel;
    if (rawCategoryData && rawCategoryData[tickValue]) {
      var rawCategoryItem = rawCategoryData[tickValue];
      if (isObject$3(rawCategoryItem) && rawCategoryItem.textStyle) {
        itemLabelModel = new Model(rawCategoryItem.textStyle, labelModel, axisModel.ecModel);
      }
    }
    var textColor = itemLabelModel.getTextColor() || axisModel.get(["axisLine", "lineStyle", "color"]);
    var tickCoord = axis.dataToCoord(tickValue);
    var align = itemLabelModel.getShallow("align", true) || labelLayout.textAlign;
    var alignMin = retrieve2(itemLabelModel.getShallow("alignMinLabel", true), align);
    var alignMax = retrieve2(itemLabelModel.getShallow("alignMaxLabel", true), align);
    var verticalAlign = itemLabelModel.getShallow("verticalAlign", true) || itemLabelModel.getShallow("baseline", true) || labelLayout.textVerticalAlign;
    var verticalAlignMin = retrieve2(itemLabelModel.getShallow("verticalAlignMinLabel", true), verticalAlign);
    var verticalAlignMax = retrieve2(itemLabelModel.getShallow("verticalAlignMaxLabel", true), verticalAlign);
    var textEl = new ZRText({
      x: tickCoord,
      y: opt.labelOffset + opt.labelDirection * labelMargin,
      rotation: labelLayout.rotation,
      silent,
      z2: 10 + (labelItem.level || 0),
      style: createTextStyle(itemLabelModel, {
        text: formattedLabel,
        align: index === 0 ? alignMin : index === labels.length - 1 ? alignMax : align,
        verticalAlign: index === 0 ? verticalAlignMin : index === labels.length - 1 ? verticalAlignMax : verticalAlign,
        fill: isFunction$1(textColor) ? textColor(
          // (1) In category axis with data zoom, tick is not the original
          // index of axis.data. So tick should not be exposed to user
          // in category axis.
          // (2) Compatible with previous version, which always use formatted label as
          // input. But in interval scale the formatted label is like '223,445', which
          // maked user replace ','. So we modify it to return original val but remain
          // it as 'string' to avoid error in replacing.
          axis.type === "category" ? rawLabel : axis.type === "value" ? tickValue + "" : tickValue,
          index
        ) : textColor
      })
    });
    textEl.anid = "label_" + tickValue;
    if (triggerEvent) {
      var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
      eventData.targetType = "axisLabel";
      eventData.value = rawLabel;
      eventData.tickIndex = index;
      if (axis.type === "category") {
        eventData.dataIndex = tickValue;
      }
      getECData(textEl).eventData = eventData;
    }
    transformGroup.add(textEl);
    textEl.updateTransform();
    labelEls.push(textEl);
    group.add(textEl);
    textEl.decomposeTransform();
  });
  return labelEls;
}
function collect(ecModel, api) {
  var result = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: false,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  collectAxesInfo(result, ecModel, api);
  result.seriesInvolved && collectSeriesInfo(result, ecModel);
  return result;
}
function collectAxesInfo(result, ecModel, api) {
  var globalTooltipModel = ecModel.getComponent("tooltip");
  var globalAxisPointerModel = ecModel.getComponent("axisPointer");
  var linksOption = globalAxisPointerModel.get("link", true) || [];
  var linkGroups = [];
  each$3(api.getCoordinateSystems(), function(coordSys) {
    if (!coordSys.axisPointerEnabled) {
      return;
    }
    var coordSysKey = makeKey(coordSys.model);
    var axesInfoInCoordSys = result.coordSysAxesInfo[coordSysKey] = {};
    result.coordSysMap[coordSysKey] = coordSys;
    var coordSysModel = coordSys.model;
    var baseTooltipModel = coordSysModel.getModel("tooltip", globalTooltipModel);
    each$3(coordSys.getAxes(), curry(saveTooltipAxisInfo, false, null));
    if (coordSys.getTooltipAxes && globalTooltipModel && baseTooltipModel.get("show")) {
      var triggerAxis = baseTooltipModel.get("trigger") === "axis";
      var cross = baseTooltipModel.get(["axisPointer", "type"]) === "cross";
      var tooltipAxes = coordSys.getTooltipAxes(baseTooltipModel.get(["axisPointer", "axis"]));
      if (triggerAxis || cross) {
        each$3(tooltipAxes.baseAxes, curry(saveTooltipAxisInfo, cross ? "cross" : true, triggerAxis));
      }
      if (cross) {
        each$3(tooltipAxes.otherAxes, curry(saveTooltipAxisInfo, "cross", false));
      }
    }
    function saveTooltipAxisInfo(fromTooltip, triggerTooltip, axis) {
      var axisPointerModel = axis.model.getModel("axisPointer", globalAxisPointerModel);
      var axisPointerShow = axisPointerModel.get("show");
      if (!axisPointerShow || axisPointerShow === "auto" && !fromTooltip && !isHandleTrigger(axisPointerModel)) {
        return;
      }
      if (triggerTooltip == null) {
        triggerTooltip = axisPointerModel.get("triggerTooltip");
      }
      axisPointerModel = fromTooltip ? makeAxisPointerModel(axis, baseTooltipModel, globalAxisPointerModel, ecModel, fromTooltip, triggerTooltip) : axisPointerModel;
      var snap = axisPointerModel.get("snap");
      var triggerEmphasis = axisPointerModel.get("triggerEmphasis");
      var axisKey = makeKey(axis.model);
      var involveSeries = triggerTooltip || snap || axis.type === "category";
      var axisInfo = result.axesInfo[axisKey] = {
        key: axisKey,
        axis,
        coordSys,
        axisPointerModel,
        triggerTooltip,
        triggerEmphasis,
        involveSeries,
        snap,
        useHandle: isHandleTrigger(axisPointerModel),
        seriesModels: [],
        linkGroup: null
      };
      axesInfoInCoordSys[axisKey] = axisInfo;
      result.seriesInvolved = result.seriesInvolved || involveSeries;
      var groupIndex = getLinkGroupIndex(linksOption, axis);
      if (groupIndex != null) {
        var linkGroup = linkGroups[groupIndex] || (linkGroups[groupIndex] = {
          axesInfo: {}
        });
        linkGroup.axesInfo[axisKey] = axisInfo;
        linkGroup.mapper = linksOption[groupIndex].mapper;
        axisInfo.linkGroup = linkGroup;
      }
    }
  });
}
function makeAxisPointerModel(axis, baseTooltipModel, globalAxisPointerModel, ecModel, fromTooltip, triggerTooltip) {
  var tooltipAxisPointerModel = baseTooltipModel.getModel("axisPointer");
  var fields = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"];
  var volatileOption = {};
  each$3(fields, function(field) {
    volatileOption[field] = clone$1(tooltipAxisPointerModel.get(field));
  });
  volatileOption.snap = axis.type !== "category" && !!triggerTooltip;
  if (tooltipAxisPointerModel.get("type") === "cross") {
    volatileOption.type = "line";
  }
  var labelOption = volatileOption.label || (volatileOption.label = {});
  labelOption.show == null && (labelOption.show = false);
  if (fromTooltip === "cross") {
    var tooltipAxisPointerLabelShow = tooltipAxisPointerModel.get(["label", "show"]);
    labelOption.show = tooltipAxisPointerLabelShow != null ? tooltipAxisPointerLabelShow : true;
    if (!triggerTooltip) {
      var crossStyle = volatileOption.lineStyle = tooltipAxisPointerModel.get("crossStyle");
      crossStyle && defaults(labelOption, crossStyle.textStyle);
    }
  }
  return axis.model.getModel("axisPointer", new Model(volatileOption, globalAxisPointerModel, ecModel));
}
function collectSeriesInfo(result, ecModel) {
  ecModel.eachSeries(function(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    var seriesTooltipTrigger = seriesModel.get(["tooltip", "trigger"], true);
    var seriesTooltipShow = seriesModel.get(["tooltip", "show"], true);
    if (!coordSys || seriesTooltipTrigger === "none" || seriesTooltipTrigger === false || seriesTooltipTrigger === "item" || seriesTooltipShow === false || seriesModel.get(["axisPointer", "show"], true) === false) {
      return;
    }
    each$3(result.coordSysAxesInfo[makeKey(coordSys.model)], function(axisInfo) {
      var axis = axisInfo.axis;
      if (coordSys.getAxis(axis.dim) === axis) {
        axisInfo.seriesModels.push(seriesModel);
        axisInfo.seriesDataCount == null && (axisInfo.seriesDataCount = 0);
        axisInfo.seriesDataCount += seriesModel.getData().count();
      }
    });
  });
}
function getLinkGroupIndex(linksOption, axis) {
  var axisModel = axis.model;
  var dim = axis.dim;
  for (var i = 0; i < linksOption.length; i++) {
    var linkOption = linksOption[i] || {};
    if (checkPropInLink(linkOption[dim + "AxisId"], axisModel.id) || checkPropInLink(linkOption[dim + "AxisIndex"], axisModel.componentIndex) || checkPropInLink(linkOption[dim + "AxisName"], axisModel.name)) {
      return i;
    }
  }
}
function checkPropInLink(linkPropValue, axisPropValue) {
  return linkPropValue === "all" || isArray$1(linkPropValue) && indexOf(linkPropValue, axisPropValue) >= 0 || linkPropValue === axisPropValue;
}
function fixValue(axisModel) {
  var axisInfo = getAxisInfo(axisModel);
  if (!axisInfo) {
    return;
  }
  var axisPointerModel = axisInfo.axisPointerModel;
  var scale2 = axisInfo.axis.scale;
  var option = axisPointerModel.option;
  var status = axisPointerModel.get("status");
  var value = axisPointerModel.get("value");
  if (value != null) {
    value = scale2.parse(value);
  }
  var useHandle = isHandleTrigger(axisPointerModel);
  if (status == null) {
    option.status = useHandle ? "show" : "hide";
  }
  var extent = scale2.getExtent().slice();
  extent[0] > extent[1] && extent.reverse();
  if (
    // Pick a value on axis when initializing.
    value == null || value > extent[1]
  ) {
    value = extent[1];
  }
  if (value < extent[0]) {
    value = extent[0];
  }
  option.value = value;
  if (useHandle) {
    option.status = axisInfo.axis.scale.isBlank() ? "hide" : "show";
  }
}
function getAxisInfo(axisModel) {
  var coordSysAxesInfo = (axisModel.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return coordSysAxesInfo && coordSysAxesInfo.axesInfo[makeKey(axisModel)];
}
function getAxisPointerModel(axisModel) {
  var axisInfo = getAxisInfo(axisModel);
  return axisInfo && axisInfo.axisPointerModel;
}
function isHandleTrigger(axisPointerModel) {
  return !!axisPointerModel.get(["handle", "show"]);
}
function makeKey(model) {
  return model.type + "||" + model.id;
}
var axisPointerClazz = {};
var AxisView = (
  /** @class */
  function(_super) {
    __extends(AxisView2, _super);
    function AxisView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = AxisView2.type;
      return _this;
    }
    AxisView2.prototype.render = function(axisModel, ecModel, api, payload) {
      this.axisPointerClass && fixValue(axisModel);
      _super.prototype.render.apply(this, arguments);
      this._doUpdateAxisPointerClass(axisModel, api, true);
    };
    AxisView2.prototype.updateAxisPointer = function(axisModel, ecModel, api, payload) {
      this._doUpdateAxisPointerClass(axisModel, api, false);
    };
    AxisView2.prototype.remove = function(ecModel, api) {
      var axisPointer = this._axisPointer;
      axisPointer && axisPointer.remove(api);
    };
    AxisView2.prototype.dispose = function(ecModel, api) {
      this._disposeAxisPointer(api);
      _super.prototype.dispose.apply(this, arguments);
    };
    AxisView2.prototype._doUpdateAxisPointerClass = function(axisModel, api, forceRender) {
      var Clazz = AxisView2.getAxisPointerClass(this.axisPointerClass);
      if (!Clazz) {
        return;
      }
      var axisPointerModel = getAxisPointerModel(axisModel);
      axisPointerModel ? (this._axisPointer || (this._axisPointer = new Clazz())).render(axisModel, axisPointerModel, api, forceRender) : this._disposeAxisPointer(api);
    };
    AxisView2.prototype._disposeAxisPointer = function(api) {
      this._axisPointer && this._axisPointer.dispose(api);
      this._axisPointer = null;
    };
    AxisView2.registerAxisPointerClass = function(type, clazz) {
      axisPointerClazz[type] = clazz;
    };
    AxisView2.getAxisPointerClass = function(type) {
      return type && axisPointerClazz[type];
    };
    AxisView2.type = "axis";
    return AxisView2;
  }(ComponentView)
);
var inner$3 = makeInner();
function rectCoordAxisBuildSplitArea(axisView, axisGroup, axisModel, gridModel) {
  var axis = axisModel.axis;
  if (axis.scale.isBlank()) {
    return;
  }
  var splitAreaModel = axisModel.getModel("splitArea");
  var areaStyleModel = splitAreaModel.getModel("areaStyle");
  var areaColors = areaStyleModel.get("color");
  var gridRect = gridModel.coordinateSystem.getRect();
  var ticksCoords = axis.getTicksCoords({
    tickModel: splitAreaModel,
    clamp: true
  });
  if (!ticksCoords.length) {
    return;
  }
  var areaColorsLen = areaColors.length;
  var lastSplitAreaColors = inner$3(axisView).splitAreaColors;
  var newSplitAreaColors = zrUtil.createHashMap();
  var colorIndex = 0;
  if (lastSplitAreaColors) {
    for (var i = 0; i < ticksCoords.length; i++) {
      var cIndex = lastSplitAreaColors.get(ticksCoords[i].tickValue);
      if (cIndex != null) {
        colorIndex = (cIndex + (areaColorsLen - 1) * i) % areaColorsLen;
        break;
      }
    }
  }
  var prev = axis.toGlobalCoord(ticksCoords[0].coord);
  var areaStyle = areaStyleModel.getAreaStyle();
  areaColors = zrUtil.isArray(areaColors) ? areaColors : [areaColors];
  for (var i = 1; i < ticksCoords.length; i++) {
    var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
    var x = void 0;
    var y = void 0;
    var width = void 0;
    var height = void 0;
    if (axis.isHorizontal()) {
      x = prev;
      y = gridRect.y;
      width = tickCoord - x;
      height = gridRect.height;
      prev = x + width;
    } else {
      x = gridRect.x;
      y = prev;
      width = gridRect.width;
      height = tickCoord - y;
      prev = y + height;
    }
    var tickValue = ticksCoords[i - 1].tickValue;
    tickValue != null && newSplitAreaColors.set(tickValue, colorIndex);
    axisGroup.add(new Rect({
      anid: tickValue != null ? "area_" + tickValue : null,
      shape: {
        x,
        y,
        width,
        height
      },
      style: zrUtil.defaults({
        fill: areaColors[colorIndex]
      }, areaStyle),
      autoBatch: true,
      silent: true
    }));
    colorIndex = (colorIndex + 1) % areaColorsLen;
  }
  inner$3(axisView).splitAreaColors = newSplitAreaColors;
}
function rectCoordAxisHandleRemove(axisView) {
  inner$3(axisView).splitAreaColors = null;
}
var axisBuilderAttrs = ["axisLine", "axisTickLabel", "axisName"];
var selfBuilderAttrs = ["splitArea", "splitLine", "minorSplitLine"];
var CartesianAxisView = (
  /** @class */
  function(_super) {
    __extends(CartesianAxisView2, _super);
    function CartesianAxisView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = CartesianAxisView2.type;
      _this.axisPointerClass = "CartesianAxisPointer";
      return _this;
    }
    CartesianAxisView2.prototype.render = function(axisModel, ecModel, api, payload) {
      this.group.removeAll();
      var oldAxisGroup = this._axisGroup;
      this._axisGroup = new Group();
      this.group.add(this._axisGroup);
      if (!axisModel.get("show")) {
        return;
      }
      var gridModel = axisModel.getCoordSysModel();
      var layout$12 = layout(gridModel, axisModel);
      var axisBuilder = new AxisBuilder(axisModel, zrUtil.extend({
        handleAutoShown: function(elementType) {
          var cartesians = gridModel.coordinateSystem.getCartesians();
          for (var i = 0; i < cartesians.length; i++) {
            if (isIntervalOrLogScale(cartesians[i].getOtherAxis(axisModel.axis).scale)) {
              return true;
            }
          }
          return false;
        }
      }, layout$12));
      zrUtil.each(axisBuilderAttrs, axisBuilder.add, axisBuilder);
      this._axisGroup.add(axisBuilder.getGroup());
      zrUtil.each(selfBuilderAttrs, function(name) {
        if (axisModel.get([name, "show"])) {
          axisElementBuilders[name](this, this._axisGroup, axisModel, gridModel);
        }
      }, this);
      var isInitialSortFromBarRacing = payload && payload.type === "changeAxisOrder" && payload.isInitSort;
      if (!isInitialSortFromBarRacing) {
        groupTransition(oldAxisGroup, this._axisGroup, axisModel);
      }
      _super.prototype.render.call(this, axisModel, ecModel, api, payload);
    };
    CartesianAxisView2.prototype.remove = function() {
      rectCoordAxisHandleRemove(this);
    };
    CartesianAxisView2.type = "cartesianAxis";
    return CartesianAxisView2;
  }(AxisView)
);
var axisElementBuilders = {
  splitLine: function(axisView, axisGroup, axisModel, gridModel) {
    var axis = axisModel.axis;
    if (axis.scale.isBlank()) {
      return;
    }
    var splitLineModel = axisModel.getModel("splitLine");
    var lineStyleModel = splitLineModel.getModel("lineStyle");
    var lineColors = lineStyleModel.get("color");
    lineColors = zrUtil.isArray(lineColors) ? lineColors : [lineColors];
    var gridRect = gridModel.coordinateSystem.getRect();
    var isHorizontal = axis.isHorizontal();
    var lineCount = 0;
    var ticksCoords = axis.getTicksCoords({
      tickModel: splitLineModel
    });
    var p1 = [];
    var p2 = [];
    var lineStyle = lineStyleModel.getLineStyle();
    for (var i = 0; i < ticksCoords.length; i++) {
      var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
      if (isHorizontal) {
        p1[0] = tickCoord;
        p1[1] = gridRect.y;
        p2[0] = tickCoord;
        p2[1] = gridRect.y + gridRect.height;
      } else {
        p1[0] = gridRect.x;
        p1[1] = tickCoord;
        p2[0] = gridRect.x + gridRect.width;
        p2[1] = tickCoord;
      }
      var colorIndex = lineCount++ % lineColors.length;
      var tickValue = ticksCoords[i].tickValue;
      var line = new Line({
        anid: tickValue != null ? "line_" + ticksCoords[i].tickValue : null,
        autoBatch: true,
        shape: {
          x1: p1[0],
          y1: p1[1],
          x2: p2[0],
          y2: p2[1]
        },
        style: zrUtil.defaults({
          stroke: lineColors[colorIndex]
        }, lineStyle),
        silent: true
      });
      subPixelOptimizeLine(line.shape, lineStyle.lineWidth);
      axisGroup.add(line);
    }
  },
  minorSplitLine: function(axisView, axisGroup, axisModel, gridModel) {
    var axis = axisModel.axis;
    var minorSplitLineModel = axisModel.getModel("minorSplitLine");
    var lineStyleModel = minorSplitLineModel.getModel("lineStyle");
    var gridRect = gridModel.coordinateSystem.getRect();
    var isHorizontal = axis.isHorizontal();
    var minorTicksCoords = axis.getMinorTicksCoords();
    if (!minorTicksCoords.length) {
      return;
    }
    var p1 = [];
    var p2 = [];
    var lineStyle = lineStyleModel.getLineStyle();
    for (var i = 0; i < minorTicksCoords.length; i++) {
      for (var k = 0; k < minorTicksCoords[i].length; k++) {
        var tickCoord = axis.toGlobalCoord(minorTicksCoords[i][k].coord);
        if (isHorizontal) {
          p1[0] = tickCoord;
          p1[1] = gridRect.y;
          p2[0] = tickCoord;
          p2[1] = gridRect.y + gridRect.height;
        } else {
          p1[0] = gridRect.x;
          p1[1] = tickCoord;
          p2[0] = gridRect.x + gridRect.width;
          p2[1] = tickCoord;
        }
        var line = new Line({
          anid: "minor_line_" + minorTicksCoords[i][k].tickValue,
          autoBatch: true,
          shape: {
            x1: p1[0],
            y1: p1[1],
            x2: p2[0],
            y2: p2[1]
          },
          style: lineStyle,
          silent: true
        });
        subPixelOptimizeLine(line.shape, lineStyle.lineWidth);
        axisGroup.add(line);
      }
    }
  },
  splitArea: function(axisView, axisGroup, axisModel, gridModel) {
    rectCoordAxisBuildSplitArea(axisView, axisGroup, axisModel, gridModel);
  }
};
var CartesianXAxisView = (
  /** @class */
  function(_super) {
    __extends(CartesianXAxisView2, _super);
    function CartesianXAxisView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = CartesianXAxisView2.type;
      return _this;
    }
    CartesianXAxisView2.type = "xAxis";
    return CartesianXAxisView2;
  }(CartesianAxisView)
);
var CartesianYAxisView = (
  /** @class */
  function(_super) {
    __extends(CartesianYAxisView2, _super);
    function CartesianYAxisView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = CartesianXAxisView.type;
      return _this;
    }
    CartesianYAxisView2.type = "yAxis";
    return CartesianYAxisView2;
  }(CartesianAxisView)
);
var GridView = (
  /** @class */
  function(_super) {
    __extends(GridView2, _super);
    function GridView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "grid";
      return _this;
    }
    GridView2.prototype.render = function(gridModel, ecModel) {
      this.group.removeAll();
      if (gridModel.get("show")) {
        this.group.add(new Rect({
          shape: gridModel.coordinateSystem.getRect(),
          style: defaults({
            fill: gridModel.get("backgroundColor")
          }, gridModel.getItemStyle()),
          silent: true,
          z2: -1
        }));
      }
    };
    GridView2.type = "grid";
    return GridView2;
  }(ComponentView)
);
var extraOption = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function install$3(registers) {
  registers.registerComponentView(GridView);
  registers.registerComponentModel(GridModel);
  registers.registerCoordinateSystem("cartesian2d", Grid);
  axisModelCreator(registers, "x", CartesianAxisModel, extraOption);
  axisModelCreator(registers, "y", CartesianAxisModel, extraOption);
  registers.registerComponentView(CartesianXAxisView);
  registers.registerComponentView(CartesianYAxisView);
  registers.registerPreprocessor(function(option) {
    if (option.xAxis && option.yAxis && !option.grid) {
      option.grid = {};
    }
  });
}
var inner$2 = makeInner();
var clone = zrUtil.clone;
var bind = zrUtil.bind;
var BaseAxisPointer = (
  /** @class */
  function() {
    function BaseAxisPointer2() {
      this._dragging = false;
      this.animationThreshold = 15;
    }
    BaseAxisPointer2.prototype.render = function(axisModel, axisPointerModel, api, forceRender) {
      var value = axisPointerModel.get("value");
      var status = axisPointerModel.get("status");
      this._axisModel = axisModel;
      this._axisPointerModel = axisPointerModel;
      this._api = api;
      if (!forceRender && this._lastValue === value && this._lastStatus === status) {
        return;
      }
      this._lastValue = value;
      this._lastStatus = status;
      var group = this._group;
      var handle = this._handle;
      if (!status || status === "hide") {
        group && group.hide();
        handle && handle.hide();
        return;
      }
      group && group.show();
      handle && handle.show();
      var elOption = {};
      this.makeElOption(elOption, value, axisModel, axisPointerModel, api);
      var graphicKey = elOption.graphicKey;
      if (graphicKey !== this._lastGraphicKey) {
        this.clear(api);
      }
      this._lastGraphicKey = graphicKey;
      var moveAnimation = this._moveAnimation = this.determineAnimation(axisModel, axisPointerModel);
      if (!group) {
        group = this._group = new Group();
        this.createPointerEl(group, elOption, axisModel, axisPointerModel);
        this.createLabelEl(group, elOption, axisModel, axisPointerModel);
        api.getZr().add(group);
      } else {
        var doUpdateProps = zrUtil.curry(updateProps, axisPointerModel, moveAnimation);
        this.updatePointerEl(group, elOption, doUpdateProps);
        this.updateLabelEl(group, elOption, doUpdateProps, axisPointerModel);
      }
      updateMandatoryProps(group, axisPointerModel, true);
      this._renderHandle(value);
    };
    BaseAxisPointer2.prototype.remove = function(api) {
      this.clear(api);
    };
    BaseAxisPointer2.prototype.dispose = function(api) {
      this.clear(api);
    };
    BaseAxisPointer2.prototype.determineAnimation = function(axisModel, axisPointerModel) {
      var animation = axisPointerModel.get("animation");
      var axis = axisModel.axis;
      var isCategoryAxis = axis.type === "category";
      var useSnap = axisPointerModel.get("snap");
      if (!useSnap && !isCategoryAxis) {
        return false;
      }
      if (animation === "auto" || animation == null) {
        var animationThreshold = this.animationThreshold;
        if (isCategoryAxis && axis.getBandWidth() > animationThreshold) {
          return true;
        }
        if (useSnap) {
          var seriesDataCount = getAxisInfo(axisModel).seriesDataCount;
          var axisExtent = axis.getExtent();
          return Math.abs(axisExtent[0] - axisExtent[1]) / seriesDataCount > animationThreshold;
        }
        return false;
      }
      return animation === true;
    };
    BaseAxisPointer2.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
    };
    BaseAxisPointer2.prototype.createPointerEl = function(group, elOption, axisModel, axisPointerModel) {
      var pointerOption = elOption.pointer;
      if (pointerOption) {
        var pointerEl = inner$2(group).pointerEl = new graphic[pointerOption.type](clone(elOption.pointer));
        group.add(pointerEl);
      }
    };
    BaseAxisPointer2.prototype.createLabelEl = function(group, elOption, axisModel, axisPointerModel) {
      if (elOption.label) {
        var labelEl = inner$2(group).labelEl = new ZRText(clone(elOption.label));
        group.add(labelEl);
        updateLabelShowHide(labelEl, axisPointerModel);
      }
    };
    BaseAxisPointer2.prototype.updatePointerEl = function(group, elOption, updateProps2) {
      var pointerEl = inner$2(group).pointerEl;
      if (pointerEl && elOption.pointer) {
        pointerEl.setStyle(elOption.pointer.style);
        updateProps2(pointerEl, {
          shape: elOption.pointer.shape
        });
      }
    };
    BaseAxisPointer2.prototype.updateLabelEl = function(group, elOption, updateProps2, axisPointerModel) {
      var labelEl = inner$2(group).labelEl;
      if (labelEl) {
        labelEl.setStyle(elOption.label.style);
        updateProps2(labelEl, {
          // Consider text length change in vertical axis, animation should
          // be used on shape, otherwise the effect will be weird.
          // TODOTODO
          // shape: elOption.label.shape,
          x: elOption.label.x,
          y: elOption.label.y
        });
        updateLabelShowHide(labelEl, axisPointerModel);
      }
    };
    BaseAxisPointer2.prototype._renderHandle = function(value) {
      if (this._dragging || !this.updateHandleTransform) {
        return;
      }
      var axisPointerModel = this._axisPointerModel;
      var zr = this._api.getZr();
      var handle = this._handle;
      var handleModel = axisPointerModel.getModel("handle");
      var status = axisPointerModel.get("status");
      if (!handleModel.get("show") || !status || status === "hide") {
        handle && zr.remove(handle);
        this._handle = null;
        return;
      }
      var isInit;
      if (!this._handle) {
        isInit = true;
        handle = this._handle = createIcon(handleModel.get("icon"), {
          cursor: "move",
          draggable: true,
          onmousemove: function(e) {
            eventTool.stop(e.event);
          },
          onmousedown: bind(this._onHandleDragMove, this, 0, 0),
          drift: bind(this._onHandleDragMove, this),
          ondragend: bind(this._onHandleDragEnd, this)
        });
        zr.add(handle);
      }
      updateMandatoryProps(handle, axisPointerModel, false);
      handle.setStyle(handleModel.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
      var handleSize = handleModel.get("size");
      if (!zrUtil.isArray(handleSize)) {
        handleSize = [handleSize, handleSize];
      }
      handle.scaleX = handleSize[0] / 2;
      handle.scaleY = handleSize[1] / 2;
      createOrUpdate(this, "_doDispatchAxisPointer", handleModel.get("throttle") || 0, "fixRate");
      this._moveHandleToValue(value, isInit);
    };
    BaseAxisPointer2.prototype._moveHandleToValue = function(value, isInit) {
      updateProps(this._axisPointerModel, !isInit && this._moveAnimation, this._handle, getHandleTransProps(this.getHandleTransform(value, this._axisModel, this._axisPointerModel)));
    };
    BaseAxisPointer2.prototype._onHandleDragMove = function(dx, dy) {
      var handle = this._handle;
      if (!handle) {
        return;
      }
      this._dragging = true;
      var trans = this.updateHandleTransform(getHandleTransProps(handle), [dx, dy], this._axisModel, this._axisPointerModel);
      this._payloadInfo = trans;
      handle.stopAnimation();
      handle.attr(getHandleTransProps(trans));
      inner$2(handle).lastProp = null;
      this._doDispatchAxisPointer();
    };
    BaseAxisPointer2.prototype._doDispatchAxisPointer = function() {
      var handle = this._handle;
      if (!handle) {
        return;
      }
      var payloadInfo = this._payloadInfo;
      var axisModel = this._axisModel;
      this._api.dispatchAction({
        type: "updateAxisPointer",
        x: payloadInfo.cursorPoint[0],
        y: payloadInfo.cursorPoint[1],
        tooltipOption: payloadInfo.tooltipOption,
        axesInfo: [{
          axisDim: axisModel.axis.dim,
          axisIndex: axisModel.componentIndex
        }]
      });
    };
    BaseAxisPointer2.prototype._onHandleDragEnd = function() {
      this._dragging = false;
      var handle = this._handle;
      if (!handle) {
        return;
      }
      var value = this._axisPointerModel.get("value");
      this._moveHandleToValue(value);
      this._api.dispatchAction({
        type: "hideTip"
      });
    };
    BaseAxisPointer2.prototype.clear = function(api) {
      this._lastValue = null;
      this._lastStatus = null;
      var zr = api.getZr();
      var group = this._group;
      var handle = this._handle;
      if (zr && group) {
        this._lastGraphicKey = null;
        group && zr.remove(group);
        handle && zr.remove(handle);
        this._group = null;
        this._handle = null;
        this._payloadInfo = null;
      }
      clear(this, "_doDispatchAxisPointer");
    };
    BaseAxisPointer2.prototype.doClear = function() {
    };
    BaseAxisPointer2.prototype.buildLabel = function(xy, wh, xDimIndex) {
      xDimIndex = xDimIndex || 0;
      return {
        x: xy[xDimIndex],
        y: xy[1 - xDimIndex],
        width: wh[xDimIndex],
        height: wh[1 - xDimIndex]
      };
    };
    return BaseAxisPointer2;
  }()
);
function updateProps(animationModel, moveAnimation, el, props) {
  if (!propsEqual(inner$2(el).lastProp, props)) {
    inner$2(el).lastProp = props;
    moveAnimation ? updateProps$1(el, props, animationModel) : (el.stopAnimation(), el.attr(props));
  }
}
function propsEqual(lastProps, newProps) {
  if (zrUtil.isObject(lastProps) && zrUtil.isObject(newProps)) {
    var equals_1 = true;
    zrUtil.each(newProps, function(item, key) {
      equals_1 = equals_1 && propsEqual(lastProps[key], item);
    });
    return !!equals_1;
  } else {
    return lastProps === newProps;
  }
}
function updateLabelShowHide(labelEl, axisPointerModel) {
  labelEl[axisPointerModel.get(["label", "show"]) ? "show" : "hide"]();
}
function getHandleTransProps(trans) {
  return {
    x: trans.x || 0,
    y: trans.y || 0,
    rotation: trans.rotation || 0
  };
}
function updateMandatoryProps(group, axisPointerModel, silent) {
  var z = axisPointerModel.get("z");
  var zlevel = axisPointerModel.get("zlevel");
  group && group.traverse(function(el) {
    if (el.type !== "group") {
      z != null && (el.z = z);
      zlevel != null && (el.zlevel = zlevel);
      el.silent = silent;
    }
  });
}
function buildElStyle(axisPointerModel) {
  var axisPointerType = axisPointerModel.get("type");
  var styleModel = axisPointerModel.getModel(axisPointerType + "Style");
  var style;
  if (axisPointerType === "line") {
    style = styleModel.getLineStyle();
    style.fill = null;
  } else if (axisPointerType === "shadow") {
    style = styleModel.getAreaStyle();
    style.stroke = null;
  }
  return style;
}
function buildLabelElOption(elOption, axisModel, axisPointerModel, api, labelPos) {
  var value = axisPointerModel.get("value");
  var text = getValueLabel(value, axisModel.axis, axisModel.ecModel, axisPointerModel.get("seriesDataIndices"), {
    precision: axisPointerModel.get(["label", "precision"]),
    formatter: axisPointerModel.get(["label", "formatter"])
  });
  var labelModel = axisPointerModel.getModel("label");
  var paddings = normalizeCssArray(labelModel.get("padding") || 0);
  var font = labelModel.getFont();
  var textRect = textContain.getBoundingRect(text, font);
  var position = labelPos.position;
  var width = textRect.width + paddings[1] + paddings[3];
  var height = textRect.height + paddings[0] + paddings[2];
  var align = labelPos.align;
  align === "right" && (position[0] -= width);
  align === "center" && (position[0] -= width / 2);
  var verticalAlign = labelPos.verticalAlign;
  verticalAlign === "bottom" && (position[1] -= height);
  verticalAlign === "middle" && (position[1] -= height / 2);
  confineInContainer(position, width, height, api);
  var bgColor = labelModel.get("backgroundColor");
  if (!bgColor || bgColor === "auto") {
    bgColor = axisModel.get(["axisLine", "lineStyle", "color"]);
  }
  elOption.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: position[0],
    y: position[1],
    style: createTextStyle(labelModel, {
      text,
      font,
      fill: labelModel.getTextColor(),
      padding: paddings,
      backgroundColor: bgColor
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function confineInContainer(position, width, height, api) {
  var viewWidth = api.getWidth();
  var viewHeight = api.getHeight();
  position[0] = Math.min(position[0] + width, viewWidth) - width;
  position[1] = Math.min(position[1] + height, viewHeight) - height;
  position[0] = Math.max(position[0], 0);
  position[1] = Math.max(position[1], 0);
}
function getValueLabel(value, axis, ecModel, seriesDataIndices, opt) {
  value = axis.scale.parse(value);
  var text = axis.scale.getLabel({
    value
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: opt.precision
  });
  var formatter = opt.formatter;
  if (formatter) {
    var params_1 = {
      value: getAxisRawValue(axis, {
        value
      }),
      axisDimension: axis.dim,
      axisIndex: axis.index,
      seriesData: []
    };
    zrUtil.each(seriesDataIndices, function(idxItem) {
      var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
      var dataIndex = idxItem.dataIndexInside;
      var dataParams = series && series.getDataParams(dataIndex);
      dataParams && params_1.seriesData.push(dataParams);
    });
    if (zrUtil.isString(formatter)) {
      text = formatter.replace("{value}", text);
    } else if (zrUtil.isFunction(formatter)) {
      text = formatter(params_1);
    }
  }
  return text;
}
function getTransformedPosition(axis, value, layoutInfo) {
  var transform = matrix.create();
  matrix.rotate(transform, transform, layoutInfo.rotation);
  matrix.translate(transform, transform, layoutInfo.position);
  return applyTransform([axis.dataToCoord(value), (layoutInfo.labelOffset || 0) + (layoutInfo.labelDirection || 1) * (layoutInfo.labelMargin || 0)], transform);
}
function buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api) {
  var textLayout = AxisBuilder.innerTextLayout(layoutInfo.rotation, 0, layoutInfo.labelDirection);
  layoutInfo.labelMargin = axisPointerModel.get(["label", "margin"]);
  buildLabelElOption(elOption, axisModel, axisPointerModel, api, {
    position: getTransformedPosition(axisModel.axis, value, layoutInfo),
    align: textLayout.textAlign,
    verticalAlign: textLayout.textVerticalAlign
  });
}
function makeLineShape(p1, p2, xDimIndex) {
  xDimIndex = xDimIndex || 0;
  return {
    x1: p1[xDimIndex],
    y1: p1[1 - xDimIndex],
    x2: p2[xDimIndex],
    y2: p2[1 - xDimIndex]
  };
}
function makeRectShape(xy, wh, xDimIndex) {
  xDimIndex = xDimIndex || 0;
  return {
    x: xy[xDimIndex],
    y: xy[1 - xDimIndex],
    width: wh[xDimIndex],
    height: wh[1 - xDimIndex]
  };
}
var CartesianAxisPointer = (
  /** @class */
  function(_super) {
    __extends(CartesianAxisPointer2, _super);
    function CartesianAxisPointer2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    CartesianAxisPointer2.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
      var axis = axisModel.axis;
      var grid = axis.grid;
      var axisPointerType = axisPointerModel.get("type");
      var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
      var pixelValue = axis.toGlobalCoord(axis.dataToCoord(value, true));
      if (axisPointerType && axisPointerType !== "none") {
        var elStyle = buildElStyle(axisPointerModel);
        var pointerOption = pointerShapeBuilder[axisPointerType](axis, pixelValue, otherExtent);
        pointerOption.style = elStyle;
        elOption.graphicKey = pointerOption.type;
        elOption.pointer = pointerOption;
      }
      var layoutInfo = layout(grid.model, axisModel);
      buildCartesianSingleLabelElOption(
        // @ts-ignore
        value,
        elOption,
        layoutInfo,
        axisModel,
        axisPointerModel,
        api
      );
    };
    CartesianAxisPointer2.prototype.getHandleTransform = function(value, axisModel, axisPointerModel) {
      var layoutInfo = layout(axisModel.axis.grid.model, axisModel, {
        labelInside: false
      });
      layoutInfo.labelMargin = axisPointerModel.get(["handle", "margin"]);
      var pos = getTransformedPosition(axisModel.axis, value, layoutInfo);
      return {
        x: pos[0],
        y: pos[1],
        rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
      };
    };
    CartesianAxisPointer2.prototype.updateHandleTransform = function(transform, delta, axisModel, axisPointerModel) {
      var axis = axisModel.axis;
      var grid = axis.grid;
      var axisExtent = axis.getGlobalExtent(true);
      var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
      var dimIndex = axis.dim === "x" ? 0 : 1;
      var currPosition = [transform.x, transform.y];
      currPosition[dimIndex] += delta[dimIndex];
      currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
      currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
      var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
      var cursorPoint = [cursorOtherValue, cursorOtherValue];
      cursorPoint[dimIndex] = currPosition[dimIndex];
      var tooltipOptions = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: currPosition[0],
        y: currPosition[1],
        rotation: transform.rotation,
        cursorPoint,
        tooltipOption: tooltipOptions[dimIndex]
      };
    };
    return CartesianAxisPointer2;
  }(BaseAxisPointer)
);
function getCartesian(grid, axis) {
  var opt = {};
  opt[axis.dim + "AxisIndex"] = axis.index;
  return grid.getCartesian(opt);
}
var pointerShapeBuilder = {
  line: function(axis, pixelValue, otherExtent) {
    var targetShape = makeLineShape([pixelValue, otherExtent[0]], [pixelValue, otherExtent[1]], getAxisDimIndex(axis));
    return {
      type: "Line",
      subPixelOptimize: true,
      shape: targetShape
    };
  },
  shadow: function(axis, pixelValue, otherExtent) {
    var bandWidth = Math.max(1, axis.getBandWidth());
    var span = otherExtent[1] - otherExtent[0];
    return {
      type: "Rect",
      shape: makeRectShape([pixelValue - bandWidth / 2, otherExtent[0]], [bandWidth, span], getAxisDimIndex(axis))
    };
  }
};
function getAxisDimIndex(axis) {
  return axis.dim === "x" ? 0 : 1;
}
var AxisPointerModel = (
  /** @class */
  function(_super) {
    __extends(AxisPointerModel2, _super);
    function AxisPointerModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = AxisPointerModel2.type;
      return _this;
    }
    AxisPointerModel2.type = "axisPointer";
    AxisPointerModel2.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: false,
      triggerTooltip: true,
      triggerEmphasis: true,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: "#B9BEC9",
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: "rgba(210,219,238,0.2)"
      },
      label: {
        show: true,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: false,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        // For mobile performance
        throttle: 40
      }
    };
    return AxisPointerModel2;
  }(ComponentModel)
);
var inner$1 = makeInner();
var each = zrUtil.each;
function register(key, api, handler) {
  if (env.node) {
    return;
  }
  var zr = api.getZr();
  inner$1(zr).records || (inner$1(zr).records = {});
  initGlobalListeners(zr, api);
  var record = inner$1(zr).records[key] || (inner$1(zr).records[key] = {});
  record.handler = handler;
}
function initGlobalListeners(zr, api) {
  if (inner$1(zr).initialized) {
    return;
  }
  inner$1(zr).initialized = true;
  useHandler("click", zrUtil.curry(doEnter, "click"));
  useHandler("mousemove", zrUtil.curry(doEnter, "mousemove"));
  useHandler("globalout", onLeave);
  function useHandler(eventType, cb) {
    zr.on(eventType, function(e) {
      var dis = makeDispatchAction$1(api);
      each(inner$1(zr).records, function(record) {
        record && cb(record, e, dis.dispatchAction);
      });
      dispatchTooltipFinally(dis.pendings, api);
    });
  }
}
function dispatchTooltipFinally(pendings, api) {
  var showLen = pendings.showTip.length;
  var hideLen = pendings.hideTip.length;
  var actuallyPayload;
  if (showLen) {
    actuallyPayload = pendings.showTip[showLen - 1];
  } else if (hideLen) {
    actuallyPayload = pendings.hideTip[hideLen - 1];
  }
  if (actuallyPayload) {
    actuallyPayload.dispatchAction = null;
    api.dispatchAction(actuallyPayload);
  }
}
function onLeave(record, e, dispatchAction) {
  record.handler("leave", null, dispatchAction);
}
function doEnter(currTrigger, record, e, dispatchAction) {
  record.handler(currTrigger, e, dispatchAction);
}
function makeDispatchAction$1(api) {
  var pendings = {
    showTip: [],
    hideTip: []
  };
  var dispatchAction = function(payload) {
    var pendingList = pendings[payload.type];
    if (pendingList) {
      pendingList.push(payload);
    } else {
      payload.dispatchAction = dispatchAction;
      api.dispatchAction(payload);
    }
  };
  return {
    dispatchAction,
    pendings
  };
}
function unregister(key, api) {
  if (env.node) {
    return;
  }
  var zr = api.getZr();
  var record = (inner$1(zr).records || {})[key];
  if (record) {
    inner$1(zr).records[key] = null;
  }
}
var AxisPointerView = (
  /** @class */
  function(_super) {
    __extends(AxisPointerView2, _super);
    function AxisPointerView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = AxisPointerView2.type;
      return _this;
    }
    AxisPointerView2.prototype.render = function(globalAxisPointerModel, ecModel, api) {
      var globalTooltipModel = ecModel.getComponent("tooltip");
      var triggerOn = globalAxisPointerModel.get("triggerOn") || globalTooltipModel && globalTooltipModel.get("triggerOn") || "mousemove|click";
      register("axisPointer", api, function(currTrigger, e, dispatchAction) {
        if (triggerOn !== "none" && (currTrigger === "leave" || triggerOn.indexOf(currTrigger) >= 0)) {
          dispatchAction({
            type: "updateAxisPointer",
            currTrigger,
            x: e && e.offsetX,
            y: e && e.offsetY
          });
        }
      });
    };
    AxisPointerView2.prototype.remove = function(ecModel, api) {
      unregister("axisPointer", api);
    };
    AxisPointerView2.prototype.dispose = function(ecModel, api) {
      unregister("axisPointer", api);
    };
    AxisPointerView2.type = "axisPointer";
    return AxisPointerView2;
  }(ComponentView)
);
function findPointFromSeries(finder, ecModel) {
  var point = [];
  var seriesIndex = finder.seriesIndex;
  var seriesModel;
  if (seriesIndex == null || !(seriesModel = ecModel.getSeriesByIndex(seriesIndex))) {
    return {
      point: []
    };
  }
  var data = seriesModel.getData();
  var dataIndex = queryDataIndex(data, finder);
  if (dataIndex == null || dataIndex < 0 || zrUtil.isArray(dataIndex)) {
    return {
      point: []
    };
  }
  var el = data.getItemGraphicEl(dataIndex);
  var coordSys = seriesModel.coordinateSystem;
  if (seriesModel.getTooltipPosition) {
    point = seriesModel.getTooltipPosition(dataIndex) || [];
  } else if (coordSys && coordSys.dataToPoint) {
    if (finder.isStacked) {
      var baseAxis = coordSys.getBaseAxis();
      var valueAxis2 = coordSys.getOtherAxis(baseAxis);
      var valueAxisDim = valueAxis2.dim;
      var baseAxisDim = baseAxis.dim;
      var baseDataOffset = valueAxisDim === "x" || valueAxisDim === "radius" ? 1 : 0;
      var baseDim = data.mapDimension(baseAxisDim);
      var stackedData = [];
      stackedData[baseDataOffset] = data.get(baseDim, dataIndex);
      stackedData[1 - baseDataOffset] = data.get(data.getCalculationInfo("stackResultDimension"), dataIndex);
      point = coordSys.dataToPoint(stackedData) || [];
    } else {
      point = coordSys.dataToPoint(data.getValues(zrUtil.map(coordSys.dimensions, function(dim) {
        return data.mapDimension(dim);
      }), dataIndex)) || [];
    }
  } else if (el) {
    var rect = el.getBoundingRect().clone();
    rect.applyTransform(el.transform);
    point = [rect.x + rect.width / 2, rect.y + rect.height / 2];
  }
  return {
    point,
    el
  };
}
var inner = makeInner();
function axisTrigger(payload, ecModel, api) {
  var currTrigger = payload.currTrigger;
  var point = [payload.x, payload.y];
  var finder = payload;
  var dispatchAction = payload.dispatchAction || bind$1(api.dispatchAction, api);
  var coordSysAxesInfo = ecModel.getComponent("axisPointer").coordSysAxesInfo;
  if (!coordSysAxesInfo) {
    return;
  }
  if (illegalPoint(point)) {
    point = findPointFromSeries({
      seriesIndex: finder.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: finder.dataIndex
    }, ecModel).point;
  }
  var isIllegalPoint = illegalPoint(point);
  var inputAxesInfo = finder.axesInfo;
  var axesInfo = coordSysAxesInfo.axesInfo;
  var shouldHide = currTrigger === "leave" || illegalPoint(point);
  var outputPayload = {};
  var showValueMap = {};
  var dataByCoordSys = {
    list: [],
    map: {}
  };
  var updaters = {
    showPointer: curry(showPointer, showValueMap),
    showTooltip: curry(showTooltip, dataByCoordSys)
  };
  each$3(coordSysAxesInfo.coordSysMap, function(coordSys, coordSysKey) {
    var coordSysContainsPoint = isIllegalPoint || coordSys.containPoint(point);
    each$3(coordSysAxesInfo.coordSysAxesInfo[coordSysKey], function(axisInfo, key) {
      var axis = axisInfo.axis;
      var inputAxisInfo = findInputAxisInfo(inputAxesInfo, axisInfo);
      if (!shouldHide && coordSysContainsPoint && (!inputAxesInfo || inputAxisInfo)) {
        var val = inputAxisInfo && inputAxisInfo.value;
        if (val == null && !isIllegalPoint) {
          val = axis.pointToData(point);
        }
        val != null && processOnAxis(axisInfo, val, updaters, false, outputPayload);
      }
    });
  });
  var linkTriggers = {};
  each$3(axesInfo, function(tarAxisInfo, tarKey) {
    var linkGroup = tarAxisInfo.linkGroup;
    if (linkGroup && !showValueMap[tarKey]) {
      each$3(linkGroup.axesInfo, function(srcAxisInfo, srcKey) {
        var srcValItem = showValueMap[srcKey];
        if (srcAxisInfo !== tarAxisInfo && srcValItem) {
          var val = srcValItem.value;
          linkGroup.mapper && (val = tarAxisInfo.axis.scale.parse(linkGroup.mapper(val, makeMapperParam(srcAxisInfo), makeMapperParam(tarAxisInfo))));
          linkTriggers[tarAxisInfo.key] = val;
        }
      });
    }
  });
  each$3(linkTriggers, function(val, tarKey) {
    processOnAxis(axesInfo[tarKey], val, updaters, true, outputPayload);
  });
  updateModelActually(showValueMap, axesInfo, outputPayload);
  dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction);
  dispatchHighDownActually(axesInfo, dispatchAction, api);
  return outputPayload;
}
function processOnAxis(axisInfo, newValue, updaters, noSnap, outputFinder) {
  var axis = axisInfo.axis;
  if (axis.scale.isBlank() || !axis.containData(newValue)) {
    return;
  }
  if (!axisInfo.involveSeries) {
    updaters.showPointer(axisInfo, newValue);
    return;
  }
  var payloadInfo = buildPayloadsBySeries(newValue, axisInfo);
  var payloadBatch = payloadInfo.payloadBatch;
  var snapToValue = payloadInfo.snapToValue;
  if (payloadBatch[0] && outputFinder.seriesIndex == null) {
    extend(outputFinder, payloadBatch[0]);
  }
  if (!noSnap && axisInfo.snap) {
    if (axis.containData(snapToValue) && snapToValue != null) {
      newValue = snapToValue;
    }
  }
  updaters.showPointer(axisInfo, newValue, payloadBatch);
  updaters.showTooltip(axisInfo, payloadInfo, snapToValue);
}
function buildPayloadsBySeries(value, axisInfo) {
  var axis = axisInfo.axis;
  var dim = axis.dim;
  var snapToValue = value;
  var payloadBatch = [];
  var minDist = Number.MAX_VALUE;
  var minDiff = -1;
  each$3(axisInfo.seriesModels, function(series, idx) {
    var dataDim = series.getData().mapDimensionsAll(dim);
    var seriesNestestValue;
    var dataIndices;
    if (series.getAxisTooltipData) {
      var result = series.getAxisTooltipData(dataDim, value, axis);
      dataIndices = result.dataIndices;
      seriesNestestValue = result.nestestValue;
    } else {
      dataIndices = series.getData().indicesOfNearest(
        dataDim[0],
        value,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        axis.type === "category" ? 0.5 : null
      );
      if (!dataIndices.length) {
        return;
      }
      seriesNestestValue = series.getData().get(dataDim[0], dataIndices[0]);
    }
    if (seriesNestestValue == null || !isFinite(seriesNestestValue)) {
      return;
    }
    var diff = value - seriesNestestValue;
    var dist = Math.abs(diff);
    if (dist <= minDist) {
      if (dist < minDist || diff >= 0 && minDiff < 0) {
        minDist = dist;
        minDiff = diff;
        snapToValue = seriesNestestValue;
        payloadBatch.length = 0;
      }
      each$3(dataIndices, function(dataIndex) {
        payloadBatch.push({
          seriesIndex: series.seriesIndex,
          dataIndexInside: dataIndex,
          dataIndex: series.getData().getRawIndex(dataIndex)
        });
      });
    }
  });
  return {
    payloadBatch,
    snapToValue
  };
}
function showPointer(showValueMap, axisInfo, value, payloadBatch) {
  showValueMap[axisInfo.key] = {
    value,
    payloadBatch
  };
}
function showTooltip(dataByCoordSys, axisInfo, payloadInfo, value) {
  var payloadBatch = payloadInfo.payloadBatch;
  var axis = axisInfo.axis;
  var axisModel = axis.model;
  var axisPointerModel = axisInfo.axisPointerModel;
  if (!axisInfo.triggerTooltip || !payloadBatch.length) {
    return;
  }
  var coordSysModel = axisInfo.coordSys.model;
  var coordSysKey = makeKey(coordSysModel);
  var coordSysItem = dataByCoordSys.map[coordSysKey];
  if (!coordSysItem) {
    coordSysItem = dataByCoordSys.map[coordSysKey] = {
      coordSysId: coordSysModel.id,
      coordSysIndex: coordSysModel.componentIndex,
      coordSysType: coordSysModel.type,
      coordSysMainType: coordSysModel.mainType,
      dataByAxis: []
    };
    dataByCoordSys.list.push(coordSysItem);
  }
  coordSysItem.dataByAxis.push({
    axisDim: axis.dim,
    axisIndex: axisModel.componentIndex,
    axisType: axisModel.type,
    axisId: axisModel.id,
    value,
    // Caustion: viewHelper.getValueLabel is actually on "view stage", which
    // depends that all models have been updated. So it should not be performed
    // here. Considering axisPointerModel used here is volatile, which is hard
    // to be retrieve in TooltipView, we prepare parameters here.
    valueLabelOpt: {
      precision: axisPointerModel.get(["label", "precision"]),
      formatter: axisPointerModel.get(["label", "formatter"])
    },
    seriesDataIndices: payloadBatch.slice()
  });
}
function updateModelActually(showValueMap, axesInfo, outputPayload) {
  var outputAxesInfo = outputPayload.axesInfo = [];
  each$3(axesInfo, function(axisInfo, key) {
    var option = axisInfo.axisPointerModel.option;
    var valItem = showValueMap[key];
    if (valItem) {
      !axisInfo.useHandle && (option.status = "show");
      option.value = valItem.value;
      option.seriesDataIndices = (valItem.payloadBatch || []).slice();
    } else {
      !axisInfo.useHandle && (option.status = "hide");
    }
    option.status === "show" && outputAxesInfo.push({
      axisDim: axisInfo.axis.dim,
      axisIndex: axisInfo.axis.model.componentIndex,
      value: option.value
    });
  });
}
function dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction) {
  if (illegalPoint(point) || !dataByCoordSys.list.length) {
    dispatchAction({
      type: "hideTip"
    });
    return;
  }
  var sampleItem = ((dataByCoordSys.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  dispatchAction({
    type: "showTip",
    escapeConnect: true,
    x: point[0],
    y: point[1],
    tooltipOption: payload.tooltipOption,
    position: payload.position,
    dataIndexInside: sampleItem.dataIndexInside,
    dataIndex: sampleItem.dataIndex,
    seriesIndex: sampleItem.seriesIndex,
    dataByCoordSys: dataByCoordSys.list
  });
}
function dispatchHighDownActually(axesInfo, dispatchAction, api) {
  var zr = api.getZr();
  var highDownKey = "axisPointerLastHighlights";
  var lastHighlights = inner(zr)[highDownKey] || {};
  var newHighlights = inner(zr)[highDownKey] = {};
  each$3(axesInfo, function(axisInfo, key) {
    var option = axisInfo.axisPointerModel.option;
    option.status === "show" && axisInfo.triggerEmphasis && each$3(option.seriesDataIndices, function(batchItem) {
      var key2 = batchItem.seriesIndex + " | " + batchItem.dataIndex;
      newHighlights[key2] = batchItem;
    });
  });
  var toHighlight = [];
  var toDownplay = [];
  each$3(lastHighlights, function(batchItem, key) {
    !newHighlights[key] && toDownplay.push(batchItem);
  });
  each$3(newHighlights, function(batchItem, key) {
    !lastHighlights[key] && toHighlight.push(batchItem);
  });
  toDownplay.length && api.dispatchAction({
    type: "downplay",
    escapeConnect: true,
    // Not blur others when highlight in axisPointer.
    notBlur: true,
    batch: toDownplay
  });
  toHighlight.length && api.dispatchAction({
    type: "highlight",
    escapeConnect: true,
    // Not blur others when highlight in axisPointer.
    notBlur: true,
    batch: toHighlight
  });
}
function findInputAxisInfo(inputAxesInfo, axisInfo) {
  for (var i = 0; i < (inputAxesInfo || []).length; i++) {
    var inputAxisInfo = inputAxesInfo[i];
    if (axisInfo.axis.dim === inputAxisInfo.axisDim && axisInfo.axis.model.componentIndex === inputAxisInfo.axisIndex) {
      return inputAxisInfo;
    }
  }
}
function makeMapperParam(axisInfo) {
  var axisModel = axisInfo.axis.model;
  var item = {};
  var dim = item.axisDim = axisInfo.axis.dim;
  item.axisIndex = item[dim + "AxisIndex"] = axisModel.componentIndex;
  item.axisName = item[dim + "AxisName"] = axisModel.name;
  item.axisId = item[dim + "AxisId"] = axisModel.id;
  return item;
}
function illegalPoint(point) {
  return !point || point[0] == null || isNaN(point[0]) || point[1] == null || isNaN(point[1]);
}
function install$2(registers) {
  AxisView.registerAxisPointerClass("CartesianAxisPointer", CartesianAxisPointer);
  registers.registerComponentModel(AxisPointerModel);
  registers.registerComponentView(AxisPointerView);
  registers.registerPreprocessor(function(option) {
    if (option) {
      (!option.axisPointer || option.axisPointer.length === 0) && (option.axisPointer = {});
      var link = option.axisPointer.link;
      if (link && !isArray$1(link)) {
        option.axisPointer.link = [link];
      }
    }
  });
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, function(ecModel, api) {
    ecModel.getComponent("axisPointer").coordSysAxesInfo = collect(ecModel, api);
  });
  registers.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, axisTrigger);
}
function install$1(registers) {
  use(install$3);
  use(install$2);
}
var TooltipModel = (
  /** @class */
  function(_super) {
    __extends(TooltipModel2, _super);
    function TooltipModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TooltipModel2.type;
      return _this;
    }
    TooltipModel2.type = "tooltip";
    TooltipModel2.dependencies = ["axisPointer"];
    TooltipModel2.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: true,
      // tooltip main content
      showContent: true,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click",
      alwaysShowContent: false,
      displayMode: "single",
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaut false (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      enterable: false,
      backgroundColor: "#fff",
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: "#666",
        fontSize: 14
      }
    };
    return TooltipModel2;
  }(ComponentModel)
);
function shouldTooltipConfine(tooltipModel) {
  var confineOption = tooltipModel.get("confine");
  return confineOption != null ? !!confineOption : tooltipModel.get("renderMode") === "richText";
}
function testStyle(styleProps) {
  if (!env.domSupported) {
    return;
  }
  var style = (void 0).documentElement.style;
  for (var i = 0, len = styleProps.length; i < len; i++) {
    if (styleProps[i] in style) {
      return styleProps[i];
    }
  }
}
var TRANSFORM_VENDOR = testStyle(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]);
var TRANSITION_VENDOR = testStyle(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function toCSSVendorPrefix(styleVendor, styleProp) {
  if (!styleVendor) {
    return styleProp;
  }
  styleProp = toCamelCase(styleProp, true);
  var idx = styleVendor.indexOf(styleProp);
  styleVendor = idx === -1 ? styleProp : "-" + styleVendor.slice(0, idx) + "-" + styleProp;
  return styleVendor.toLowerCase();
}
function getComputedStyle$1(el, style) {
  var stl = el.currentStyle || (void 0).defaultView && (void 0).defaultView.getComputedStyle(el);
  return stl ? stl[style] : null;
}
var CSS_TRANSITION_VENDOR = toCSSVendorPrefix(TRANSITION_VENDOR, "transition");
var CSS_TRANSFORM_VENDOR = toCSSVendorPrefix(TRANSFORM_VENDOR, "transform");
var gCssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (env.transform3dSupported ? "will-change:transform;" : "");
function mirrorPos(pos) {
  pos = pos === "left" ? "right" : pos === "right" ? "left" : pos === "top" ? "bottom" : "top";
  return pos;
}
function assembleArrow(tooltipModel, borderColor, arrowPosition) {
  if (!isString$2(arrowPosition) || arrowPosition === "inside") {
    return "";
  }
  var backgroundColor2 = tooltipModel.get("backgroundColor");
  var borderWidth = tooltipModel.get("borderWidth");
  borderColor = convertToColorString(borderColor);
  var arrowPos = mirrorPos(arrowPosition);
  var arrowSize = Math.max(Math.round(borderWidth) * 1.5, 6);
  var positionStyle = "";
  var transformStyle = CSS_TRANSFORM_VENDOR + ":";
  var rotateDeg;
  if (indexOf(["left", "right"], arrowPos) > -1) {
    positionStyle += "top:50%";
    transformStyle += "translateY(-50%) rotate(" + (rotateDeg = arrowPos === "left" ? -225 : -45) + "deg)";
  } else {
    positionStyle += "left:50%";
    transformStyle += "translateX(-50%) rotate(" + (rotateDeg = arrowPos === "top" ? 225 : 45) + "deg)";
  }
  var rotateRadian = rotateDeg * Math.PI / 180;
  var arrowWH = arrowSize + borderWidth;
  var rotatedWH = arrowWH * Math.abs(Math.cos(rotateRadian)) + arrowWH * Math.abs(Math.sin(rotateRadian));
  var arrowOffset = Math.round(((rotatedWH - Math.SQRT2 * borderWidth) / 2 + Math.SQRT2 * borderWidth - (rotatedWH - arrowWH) / 2) * 100) / 100;
  positionStyle += ";" + arrowPos + ":-" + arrowOffset + "px";
  var borderStyle = borderColor + " solid " + borderWidth + "px;";
  var styleCss = ["position:absolute;width:" + arrowSize + "px;height:" + arrowSize + "px;z-index:-1;", positionStyle + ";" + transformStyle + ";", "border-bottom:" + borderStyle, "border-right:" + borderStyle, "background-color:" + backgroundColor2 + ";"];
  return '<div style="' + styleCss.join("") + '"></div>';
}
function assembleTransition(duration, onlyFade) {
  var transitionCurve = "cubic-bezier(0.23,1,0.32,1)";
  var transitionOption = " " + duration / 2 + "s " + transitionCurve;
  var transitionText = "opacity" + transitionOption + ",visibility" + transitionOption;
  if (!onlyFade) {
    transitionOption = " " + duration + "s " + transitionCurve;
    transitionText += env.transformSupported ? "," + CSS_TRANSFORM_VENDOR + transitionOption : ",left" + transitionOption + ",top" + transitionOption;
  }
  return CSS_TRANSITION_VENDOR + ":" + transitionText;
}
function assembleTransform(x, y, toString) {
  var x0 = x.toFixed(0) + "px";
  var y0 = y.toFixed(0) + "px";
  if (!env.transformSupported) {
    return toString ? "top:" + y0 + ";left:" + x0 + ";" : [["top", y0], ["left", x0]];
  }
  var is3d = env.transform3dSupported;
  var translate2 = "translate" + (is3d ? "3d" : "") + "(" + x0 + "," + y0 + (is3d ? ",0" : "") + ")";
  return toString ? "top:0;left:0;" + CSS_TRANSFORM_VENDOR + ":" + translate2 + ";" : [["top", 0], ["left", 0], [TRANSFORM_VENDOR, translate2]];
}
function assembleFont(textStyleModel) {
  var cssText = [];
  var fontSize = textStyleModel.get("fontSize");
  var color = textStyleModel.getTextColor();
  color && cssText.push("color:" + color);
  cssText.push("font:" + textStyleModel.getFont());
  fontSize && cssText.push("line-height:" + Math.round(fontSize * 3 / 2) + "px");
  var shadowColor = textStyleModel.get("textShadowColor");
  var shadowBlur = textStyleModel.get("textShadowBlur") || 0;
  var shadowOffsetX = textStyleModel.get("textShadowOffsetX") || 0;
  var shadowOffsetY = textStyleModel.get("textShadowOffsetY") || 0;
  shadowColor && shadowBlur && cssText.push("text-shadow:" + shadowOffsetX + "px " + shadowOffsetY + "px " + shadowBlur + "px " + shadowColor);
  each$3(["decoration", "align"], function(name) {
    var val = textStyleModel.get(name);
    val && cssText.push("text-" + name + ":" + val);
  });
  return cssText.join(";");
}
function assembleCssText(tooltipModel, enableTransition, onlyFade) {
  var cssText = [];
  var transitionDuration = tooltipModel.get("transitionDuration");
  var backgroundColor2 = tooltipModel.get("backgroundColor");
  var shadowBlur = tooltipModel.get("shadowBlur");
  var shadowColor = tooltipModel.get("shadowColor");
  var shadowOffsetX = tooltipModel.get("shadowOffsetX");
  var shadowOffsetY = tooltipModel.get("shadowOffsetY");
  var textStyleModel = tooltipModel.getModel("textStyle");
  var padding = getPaddingFromTooltipModel(tooltipModel, "html");
  var boxShadow = shadowOffsetX + "px " + shadowOffsetY + "px " + shadowBlur + "px " + shadowColor;
  cssText.push("box-shadow:" + boxShadow);
  enableTransition && transitionDuration && cssText.push(assembleTransition(transitionDuration, onlyFade));
  if (backgroundColor2) {
    cssText.push("background-color:" + backgroundColor2);
  }
  each$3(["width", "color", "radius"], function(name) {
    var borderName = "border-" + name;
    var camelCase = toCamelCase(borderName);
    var val = tooltipModel.get(camelCase);
    val != null && cssText.push(borderName + ":" + val + (name === "color" ? "" : "px"));
  });
  cssText.push(assembleFont(textStyleModel));
  if (padding != null) {
    cssText.push("padding:" + normalizeCssArray(padding).join("px ") + "px");
  }
  return cssText.join(";") + ";";
}
function makeStyleCoord$1(out, zr, container, zrX, zrY) {
  var zrPainter = zr && zr.painter;
  if (container) {
    var zrViewportRoot = zrPainter && zrPainter.getViewportRoot();
    if (zrViewportRoot) {
      transformLocalCoord(out, zrViewportRoot, container, zrX, zrY);
    }
  } else {
    out[0] = zrX;
    out[1] = zrY;
    var viewportRootOffset = zrPainter && zrPainter.getViewportRootOffset();
    if (viewportRootOffset) {
      out[0] += viewportRootOffset.offsetLeft;
      out[1] += viewportRootOffset.offsetTop;
    }
  }
  out[2] = out[0] / zr.getWidth();
  out[3] = out[1] / zr.getHeight();
}
var TooltipHTMLContent = (
  /** @class */
  function() {
    function TooltipHTMLContent2(api, opt) {
      this._show = false;
      this._styleCoord = [0, 0, 0, 0];
      this._enterable = true;
      this._alwaysShowContent = false;
      this._firstShow = true;
      this._longHide = true;
      if (env.wxa) {
        return null;
      }
      var el = (void 0).createElement("div");
      el.domBelongToZr = true;
      this.el = el;
      var zr = this._zr = api.getZr();
      var appendTo = opt.appendTo;
      var container = appendTo && (isString$2(appendTo) ? (void 0).querySelector(appendTo) : isDom(appendTo) ? appendTo : isFunction$1(appendTo) && appendTo(api.getDom()));
      makeStyleCoord$1(this._styleCoord, zr, container, api.getWidth() / 2, api.getHeight() / 2);
      (container || api.getDom()).appendChild(el);
      this._api = api;
      this._container = container;
      var self2 = this;
      el.onmouseenter = function() {
        if (self2._enterable) {
          clearTimeout(self2._hideTimeout);
          self2._show = true;
        }
        self2._inContent = true;
      };
      el.onmousemove = function(e) {
        e = e || (void 0).event;
        if (!self2._enterable) {
          var handler = zr.handler;
          var zrViewportRoot = zr.painter.getViewportRoot();
          normalizeEvent(zrViewportRoot, e, true);
          handler.dispatch("mousemove", e);
        }
      };
      el.onmouseleave = function() {
        self2._inContent = false;
        if (self2._enterable) {
          if (self2._show) {
            self2.hideLater(self2._hideDelay);
          }
        }
      };
    }
    TooltipHTMLContent2.prototype.update = function(tooltipModel) {
      if (!this._container) {
        var container = this._api.getDom();
        var position = getComputedStyle$1(container, "position");
        var domStyle = container.style;
        if (domStyle.position !== "absolute" && position !== "absolute") {
          domStyle.position = "relative";
        }
      }
      var alwaysShowContent = tooltipModel.get("alwaysShowContent");
      alwaysShowContent && this._moveIfResized();
      this._alwaysShowContent = alwaysShowContent;
      this.el.className = tooltipModel.get("className") || "";
    };
    TooltipHTMLContent2.prototype.show = function(tooltipModel, nearPointColor) {
      clearTimeout(this._hideTimeout);
      clearTimeout(this._longHideTimeout);
      var el = this.el;
      var style = el.style;
      var styleCoord = this._styleCoord;
      if (!el.innerHTML) {
        style.display = "none";
      } else {
        style.cssText = gCssText + assembleCssText(tooltipModel, !this._firstShow, this._longHide) + assembleTransform(styleCoord[0], styleCoord[1], true) + ("border-color:" + convertToColorString(nearPointColor) + ";") + (tooltipModel.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none"));
      }
      this._show = true;
      this._firstShow = false;
      this._longHide = false;
    };
    TooltipHTMLContent2.prototype.setContent = function(content, markers, tooltipModel, borderColor, arrowPosition) {
      var el = this.el;
      if (content == null) {
        el.innerHTML = "";
        return;
      }
      var arrow = "";
      if (isString$2(arrowPosition) && tooltipModel.get("trigger") === "item" && !shouldTooltipConfine(tooltipModel)) {
        arrow = assembleArrow(tooltipModel, borderColor, arrowPosition);
      }
      if (isString$2(content)) {
        el.innerHTML = content + arrow;
      } else if (content) {
        el.innerHTML = "";
        if (!isArray$1(content)) {
          content = [content];
        }
        for (var i = 0; i < content.length; i++) {
          if (isDom(content[i]) && content[i].parentNode !== el) {
            el.appendChild(content[i]);
          }
        }
        if (arrow && el.childNodes.length) {
          var arrowEl = (void 0).createElement("div");
          arrowEl.innerHTML = arrow;
          el.appendChild(arrowEl);
        }
      }
    };
    TooltipHTMLContent2.prototype.setEnterable = function(enterable) {
      this._enterable = enterable;
    };
    TooltipHTMLContent2.prototype.getSize = function() {
      var el = this.el;
      return [el.offsetWidth, el.offsetHeight];
    };
    TooltipHTMLContent2.prototype.moveTo = function(zrX, zrY) {
      var styleCoord = this._styleCoord;
      makeStyleCoord$1(styleCoord, this._zr, this._container, zrX, zrY);
      if (styleCoord[0] != null && styleCoord[1] != null) {
        var style_1 = this.el.style;
        var transforms = assembleTransform(styleCoord[0], styleCoord[1]);
        each$3(transforms, function(transform) {
          style_1[transform[0]] = transform[1];
        });
      }
    };
    TooltipHTMLContent2.prototype._moveIfResized = function() {
      var ratioX = this._styleCoord[2];
      var ratioY = this._styleCoord[3];
      this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
    };
    TooltipHTMLContent2.prototype.hide = function() {
      var _this = this;
      var style = this.el.style;
      style.visibility = "hidden";
      style.opacity = "0";
      env.transform3dSupported && (style.willChange = "");
      this._show = false;
      this._longHideTimeout = setTimeout(function() {
        return _this._longHide = true;
      }, 500);
    };
    TooltipHTMLContent2.prototype.hideLater = function(time) {
      if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
        if (time) {
          this._hideDelay = time;
          this._show = false;
          this._hideTimeout = setTimeout(bind$1(this.hide, this), time);
        } else {
          this.hide();
        }
      }
    };
    TooltipHTMLContent2.prototype.isShow = function() {
      return this._show;
    };
    TooltipHTMLContent2.prototype.dispose = function() {
      clearTimeout(this._hideTimeout);
      clearTimeout(this._longHideTimeout);
      var parentNode = this.el.parentNode;
      parentNode && parentNode.removeChild(this.el);
      this.el = this._container = null;
    };
    return TooltipHTMLContent2;
  }()
);
var TooltipRichContent = (
  /** @class */
  function() {
    function TooltipRichContent2(api) {
      this._show = false;
      this._styleCoord = [0, 0, 0, 0];
      this._alwaysShowContent = false;
      this._enterable = true;
      this._zr = api.getZr();
      makeStyleCoord(this._styleCoord, this._zr, api.getWidth() / 2, api.getHeight() / 2);
    }
    TooltipRichContent2.prototype.update = function(tooltipModel) {
      var alwaysShowContent = tooltipModel.get("alwaysShowContent");
      alwaysShowContent && this._moveIfResized();
      this._alwaysShowContent = alwaysShowContent;
    };
    TooltipRichContent2.prototype.show = function() {
      if (this._hideTimeout) {
        clearTimeout(this._hideTimeout);
      }
      this.el.show();
      this._show = true;
    };
    TooltipRichContent2.prototype.setContent = function(content, markupStyleCreator, tooltipModel, borderColor, arrowPosition) {
      var _this = this;
      if (zrUtil.isObject(content)) {
        throwError("");
      }
      if (this.el) {
        this._zr.remove(this.el);
      }
      var textStyleModel = tooltipModel.getModel("textStyle");
      this.el = new ZRText({
        style: {
          rich: markupStyleCreator.richTextStyles,
          text: content,
          lineHeight: 22,
          borderWidth: 1,
          borderColor,
          textShadowColor: textStyleModel.get("textShadowColor"),
          fill: tooltipModel.get(["textStyle", "color"]),
          padding: getPaddingFromTooltipModel(tooltipModel, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: tooltipModel.get("z")
      });
      zrUtil.each(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(propName) {
        _this.el.style[propName] = tooltipModel.get(propName);
      });
      zrUtil.each(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(propName) {
        _this.el.style[propName] = textStyleModel.get(propName) || 0;
      });
      this._zr.add(this.el);
      var self2 = this;
      this.el.on("mouseover", function() {
        if (self2._enterable) {
          clearTimeout(self2._hideTimeout);
          self2._show = true;
        }
        self2._inContent = true;
      });
      this.el.on("mouseout", function() {
        if (self2._enterable) {
          if (self2._show) {
            self2.hideLater(self2._hideDelay);
          }
        }
        self2._inContent = false;
      });
    };
    TooltipRichContent2.prototype.setEnterable = function(enterable) {
      this._enterable = enterable;
    };
    TooltipRichContent2.prototype.getSize = function() {
      var el = this.el;
      var bounding = this.el.getBoundingRect();
      var shadowOuterSize = calcShadowOuterSize(el.style);
      return [bounding.width + shadowOuterSize.left + shadowOuterSize.right, bounding.height + shadowOuterSize.top + shadowOuterSize.bottom];
    };
    TooltipRichContent2.prototype.moveTo = function(x, y) {
      var el = this.el;
      if (el) {
        var styleCoord = this._styleCoord;
        makeStyleCoord(styleCoord, this._zr, x, y);
        x = styleCoord[0];
        y = styleCoord[1];
        var style = el.style;
        var borderWidth = mathMaxWith0(style.borderWidth || 0);
        var shadowOuterSize = calcShadowOuterSize(style);
        el.x = x + borderWidth + shadowOuterSize.left;
        el.y = y + borderWidth + shadowOuterSize.top;
        el.markRedraw();
      }
    };
    TooltipRichContent2.prototype._moveIfResized = function() {
      var ratioX = this._styleCoord[2];
      var ratioY = this._styleCoord[3];
      this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
    };
    TooltipRichContent2.prototype.hide = function() {
      if (this.el) {
        this.el.hide();
      }
      this._show = false;
    };
    TooltipRichContent2.prototype.hideLater = function(time) {
      if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
        if (time) {
          this._hideDelay = time;
          this._show = false;
          this._hideTimeout = setTimeout(zrUtil.bind(this.hide, this), time);
        } else {
          this.hide();
        }
      }
    };
    TooltipRichContent2.prototype.isShow = function() {
      return this._show;
    };
    TooltipRichContent2.prototype.dispose = function() {
      this._zr.remove(this.el);
    };
    return TooltipRichContent2;
  }()
);
function mathMaxWith0(val) {
  return Math.max(0, val);
}
function calcShadowOuterSize(style) {
  var shadowBlur = mathMaxWith0(style.shadowBlur || 0);
  var shadowOffsetX = mathMaxWith0(style.shadowOffsetX || 0);
  var shadowOffsetY = mathMaxWith0(style.shadowOffsetY || 0);
  return {
    left: mathMaxWith0(shadowBlur - shadowOffsetX),
    right: mathMaxWith0(shadowBlur + shadowOffsetX),
    top: mathMaxWith0(shadowBlur - shadowOffsetY),
    bottom: mathMaxWith0(shadowBlur + shadowOffsetY)
  };
}
function makeStyleCoord(out, zr, zrX, zrY) {
  out[0] = zrX;
  out[1] = zrY;
  out[2] = out[0] / zr.getWidth();
  out[3] = out[1] / zr.getHeight();
}
var proxyRect = new Rect({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
});
var TooltipView = (
  /** @class */
  function(_super) {
    __extends(TooltipView2, _super);
    function TooltipView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TooltipView2.type;
      return _this;
    }
    TooltipView2.prototype.init = function(ecModel, api) {
      if (env.node || !api.getDom()) {
        return;
      }
      var tooltipModel = ecModel.getComponent("tooltip");
      var renderMode = this._renderMode = getTooltipRenderMode(tooltipModel.get("renderMode"));
      this._tooltipContent = renderMode === "richText" ? new TooltipRichContent(api) : new TooltipHTMLContent(api, {
        appendTo: tooltipModel.get("appendToBody", true) ? "body" : tooltipModel.get("appendTo", true)
      });
    };
    TooltipView2.prototype.render = function(tooltipModel, ecModel, api) {
      if (env.node || !api.getDom()) {
        return;
      }
      this.group.removeAll();
      this._tooltipModel = tooltipModel;
      this._ecModel = ecModel;
      this._api = api;
      var tooltipContent = this._tooltipContent;
      tooltipContent.update(tooltipModel);
      tooltipContent.setEnterable(tooltipModel.get("enterable"));
      this._initGlobalListener();
      this._keepShow();
      if (this._renderMode !== "richText" && tooltipModel.get("transitionDuration")) {
        createOrUpdate(this, "_updatePosition", 50, "fixRate");
      } else {
        clear(this, "_updatePosition");
      }
    };
    TooltipView2.prototype._initGlobalListener = function() {
      var tooltipModel = this._tooltipModel;
      var triggerOn = tooltipModel.get("triggerOn");
      register("itemTooltip", this._api, bind$1(function(currTrigger, e, dispatchAction) {
        if (triggerOn !== "none") {
          if (triggerOn.indexOf(currTrigger) >= 0) {
            this._tryShow(e, dispatchAction);
          } else if (currTrigger === "leave") {
            this._hide(dispatchAction);
          }
        }
      }, this));
    };
    TooltipView2.prototype._keepShow = function() {
      var tooltipModel = this._tooltipModel;
      var ecModel = this._ecModel;
      var api = this._api;
      var triggerOn = tooltipModel.get("triggerOn");
      if (this._lastX != null && this._lastY != null && triggerOn !== "none" && triggerOn !== "click") {
        var self_1 = this;
        clearTimeout(this._refreshUpdateTimeout);
        this._refreshUpdateTimeout = setTimeout(function() {
          !api.isDisposed() && self_1.manuallyShowTip(tooltipModel, ecModel, api, {
            x: self_1._lastX,
            y: self_1._lastY,
            dataByCoordSys: self_1._lastDataByCoordSys
          });
        });
      }
    };
    TooltipView2.prototype.manuallyShowTip = function(tooltipModel, ecModel, api, payload) {
      if (payload.from === this.uid || env.node || !api.getDom()) {
        return;
      }
      var dispatchAction = makeDispatchAction(payload, api);
      this._ticket = "";
      var dataByCoordSys = payload.dataByCoordSys;
      var cmptRef = findComponentReference(payload, ecModel, api);
      if (cmptRef) {
        var rect = cmptRef.el.getBoundingRect().clone();
        rect.applyTransform(cmptRef.el.transform);
        this._tryShow({
          offsetX: rect.x + rect.width / 2,
          offsetY: rect.y + rect.height / 2,
          target: cmptRef.el,
          position: payload.position,
          // When manully trigger, the mouse is not on the el, so we'd better to
          // position tooltip on the bottom of the el and display arrow is possible.
          positionDefault: "bottom"
        }, dispatchAction);
      } else if (payload.tooltip && payload.x != null && payload.y != null) {
        var el = proxyRect;
        el.x = payload.x;
        el.y = payload.y;
        el.update();
        getECData(el).tooltipConfig = {
          name: null,
          option: payload.tooltip
        };
        this._tryShow({
          offsetX: payload.x,
          offsetY: payload.y,
          target: el
        }, dispatchAction);
      } else if (dataByCoordSys) {
        this._tryShow({
          offsetX: payload.x,
          offsetY: payload.y,
          position: payload.position,
          dataByCoordSys,
          tooltipOption: payload.tooltipOption
        }, dispatchAction);
      } else if (payload.seriesIndex != null) {
        if (this._manuallyAxisShowTip(tooltipModel, ecModel, api, payload)) {
          return;
        }
        var pointInfo = findPointFromSeries(payload, ecModel);
        var cx = pointInfo.point[0];
        var cy = pointInfo.point[1];
        if (cx != null && cy != null) {
          this._tryShow({
            offsetX: cx,
            offsetY: cy,
            target: pointInfo.el,
            position: payload.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, dispatchAction);
        }
      } else if (payload.x != null && payload.y != null) {
        api.dispatchAction({
          type: "updateAxisPointer",
          x: payload.x,
          y: payload.y
        });
        this._tryShow({
          offsetX: payload.x,
          offsetY: payload.y,
          position: payload.position,
          target: api.getZr().findHover(payload.x, payload.y).target
        }, dispatchAction);
      }
    };
    TooltipView2.prototype.manuallyHideTip = function(tooltipModel, ecModel, api, payload) {
      var tooltipContent = this._tooltipContent;
      if (this._tooltipModel) {
        tooltipContent.hideLater(this._tooltipModel.get("hideDelay"));
      }
      this._lastX = this._lastY = this._lastDataByCoordSys = null;
      if (payload.from !== this.uid) {
        this._hide(makeDispatchAction(payload, api));
      }
    };
    TooltipView2.prototype._manuallyAxisShowTip = function(tooltipModel, ecModel, api, payload) {
      var seriesIndex = payload.seriesIndex;
      var dataIndex = payload.dataIndex;
      var coordSysAxesInfo = ecModel.getComponent("axisPointer").coordSysAxesInfo;
      if (seriesIndex == null || dataIndex == null || coordSysAxesInfo == null) {
        return;
      }
      var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
      if (!seriesModel) {
        return;
      }
      var data = seriesModel.getData();
      var tooltipCascadedModel = buildTooltipModel([data.getItemModel(dataIndex), seriesModel, (seriesModel.coordinateSystem || {}).model], this._tooltipModel);
      if (tooltipCascadedModel.get("trigger") !== "axis") {
        return;
      }
      api.dispatchAction({
        type: "updateAxisPointer",
        seriesIndex,
        dataIndex,
        position: payload.position
      });
      return true;
    };
    TooltipView2.prototype._tryShow = function(e, dispatchAction) {
      var el = e.target;
      var tooltipModel = this._tooltipModel;
      if (!tooltipModel) {
        return;
      }
      this._lastX = e.offsetX;
      this._lastY = e.offsetY;
      var dataByCoordSys = e.dataByCoordSys;
      if (dataByCoordSys && dataByCoordSys.length) {
        this._showAxisTooltip(dataByCoordSys, e);
      } else if (el) {
        var ecData = getECData(el);
        if (ecData.ssrType === "legend") {
          return;
        }
        this._lastDataByCoordSys = null;
        var seriesDispatcher_1;
        var cmptDispatcher_1;
        findEventDispatcher(el, function(target) {
          if (getECData(target).dataIndex != null) {
            seriesDispatcher_1 = target;
            return true;
          }
          if (getECData(target).tooltipConfig != null) {
            cmptDispatcher_1 = target;
            return true;
          }
        }, true);
        if (seriesDispatcher_1) {
          this._showSeriesItemTooltip(e, seriesDispatcher_1, dispatchAction);
        } else if (cmptDispatcher_1) {
          this._showComponentItemTooltip(e, cmptDispatcher_1, dispatchAction);
        } else {
          this._hide(dispatchAction);
        }
      } else {
        this._lastDataByCoordSys = null;
        this._hide(dispatchAction);
      }
    };
    TooltipView2.prototype._showOrMove = function(tooltipModel, cb) {
      var delay = tooltipModel.get("showDelay");
      cb = bind$1(cb, this);
      clearTimeout(this._showTimout);
      delay > 0 ? this._showTimout = setTimeout(cb, delay) : cb();
    };
    TooltipView2.prototype._showAxisTooltip = function(dataByCoordSys, e) {
      var ecModel = this._ecModel;
      var globalTooltipModel = this._tooltipModel;
      var point = [e.offsetX, e.offsetY];
      var singleTooltipModel = buildTooltipModel([e.tooltipOption], globalTooltipModel);
      var renderMode = this._renderMode;
      var cbParamsList = [];
      var articleMarkup = createTooltipMarkup("section", {
        blocks: [],
        noHeader: true
      });
      var markupTextArrLegacy = [];
      var markupStyleCreator = new TooltipMarkupStyleCreator();
      each$3(dataByCoordSys, function(itemCoordSys) {
        each$3(itemCoordSys.dataByAxis, function(axisItem) {
          var axisModel = ecModel.getComponent(axisItem.axisDim + "Axis", axisItem.axisIndex);
          var axisValue = axisItem.value;
          if (!axisModel || axisValue == null) {
            return;
          }
          var axisValueLabel = getValueLabel(axisValue, axisModel.axis, ecModel, axisItem.seriesDataIndices, axisItem.valueLabelOpt);
          var axisSectionMarkup = createTooltipMarkup("section", {
            header: axisValueLabel,
            noHeader: !trim(axisValueLabel),
            sortBlocks: true,
            blocks: []
          });
          articleMarkup.blocks.push(axisSectionMarkup);
          each$3(axisItem.seriesDataIndices, function(idxItem) {
            var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
            var dataIndex = idxItem.dataIndexInside;
            var cbParams = series.getDataParams(dataIndex);
            if (cbParams.dataIndex < 0) {
              return;
            }
            cbParams.axisDim = axisItem.axisDim;
            cbParams.axisIndex = axisItem.axisIndex;
            cbParams.axisType = axisItem.axisType;
            cbParams.axisId = axisItem.axisId;
            cbParams.axisValue = getAxisRawValue(axisModel.axis, {
              value: axisValue
            });
            cbParams.axisValueLabel = axisValueLabel;
            cbParams.marker = markupStyleCreator.makeTooltipMarker("item", convertToColorString(cbParams.color), renderMode);
            var seriesTooltipResult = normalizeTooltipFormatResult(series.formatTooltip(dataIndex, true, null));
            var frag = seriesTooltipResult.frag;
            if (frag) {
              var valueFormatter = buildTooltipModel([series], globalTooltipModel).get("valueFormatter");
              axisSectionMarkup.blocks.push(valueFormatter ? extend({
                valueFormatter
              }, frag) : frag);
            }
            if (seriesTooltipResult.text) {
              markupTextArrLegacy.push(seriesTooltipResult.text);
            }
            cbParamsList.push(cbParams);
          });
        });
      });
      articleMarkup.blocks.reverse();
      markupTextArrLegacy.reverse();
      var positionExpr = e.position;
      var orderMode = singleTooltipModel.get("order");
      var builtMarkupText = buildTooltipMarkup(articleMarkup, markupStyleCreator, renderMode, orderMode, ecModel.get("useUTC"), singleTooltipModel.get("textStyle"));
      builtMarkupText && markupTextArrLegacy.unshift(builtMarkupText);
      var blockBreak = renderMode === "richText" ? "\n\n" : "<br/>";
      var allMarkupText = markupTextArrLegacy.join(blockBreak);
      this._showOrMove(singleTooltipModel, function() {
        if (this._updateContentNotChangedOnAxis(dataByCoordSys, cbParamsList)) {
          this._updatePosition(singleTooltipModel, positionExpr, point[0], point[1], this._tooltipContent, cbParamsList);
        } else {
          this._showTooltipContent(singleTooltipModel, allMarkupText, cbParamsList, Math.random() + "", point[0], point[1], positionExpr, null, markupStyleCreator);
        }
      });
    };
    TooltipView2.prototype._showSeriesItemTooltip = function(e, dispatcher, dispatchAction) {
      var ecModel = this._ecModel;
      var ecData = getECData(dispatcher);
      var seriesIndex = ecData.seriesIndex;
      var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
      var dataModel = ecData.dataModel || seriesModel;
      var dataIndex = ecData.dataIndex;
      var dataType = ecData.dataType;
      var data = dataModel.getData(dataType);
      var renderMode = this._renderMode;
      var positionDefault = e.positionDefault;
      var tooltipModel = buildTooltipModel([data.getItemModel(dataIndex), dataModel, seriesModel && (seriesModel.coordinateSystem || {}).model], this._tooltipModel, positionDefault ? {
        position: positionDefault
      } : null);
      var tooltipTrigger = tooltipModel.get("trigger");
      if (tooltipTrigger != null && tooltipTrigger !== "item") {
        return;
      }
      var params = dataModel.getDataParams(dataIndex, dataType);
      var markupStyleCreator = new TooltipMarkupStyleCreator();
      params.marker = markupStyleCreator.makeTooltipMarker("item", convertToColorString(params.color), renderMode);
      var seriesTooltipResult = normalizeTooltipFormatResult(dataModel.formatTooltip(dataIndex, false, dataType));
      var orderMode = tooltipModel.get("order");
      var valueFormatter = tooltipModel.get("valueFormatter");
      var frag = seriesTooltipResult.frag;
      var markupText = frag ? buildTooltipMarkup(valueFormatter ? extend({
        valueFormatter
      }, frag) : frag, markupStyleCreator, renderMode, orderMode, ecModel.get("useUTC"), tooltipModel.get("textStyle")) : seriesTooltipResult.text;
      var asyncTicket = "item_" + dataModel.name + "_" + dataIndex;
      this._showOrMove(tooltipModel, function() {
        this._showTooltipContent(tooltipModel, markupText, params, asyncTicket, e.offsetX, e.offsetY, e.position, e.target, markupStyleCreator);
      });
      dispatchAction({
        type: "showTip",
        dataIndexInside: dataIndex,
        dataIndex: data.getRawIndex(dataIndex),
        seriesIndex,
        from: this.uid
      });
    };
    TooltipView2.prototype._showComponentItemTooltip = function(e, el, dispatchAction) {
      var isHTMLRenderMode = this._renderMode === "html";
      var ecData = getECData(el);
      var tooltipConfig = ecData.tooltipConfig;
      var tooltipOpt = tooltipConfig.option || {};
      var encodeHTMLContent = tooltipOpt.encodeHTMLContent;
      if (isString$2(tooltipOpt)) {
        var content = tooltipOpt;
        tooltipOpt = {
          content,
          // Fixed formatter
          formatter: content
        };
        encodeHTMLContent = true;
      }
      if (encodeHTMLContent && isHTMLRenderMode && tooltipOpt.content) {
        tooltipOpt = clone$1(tooltipOpt);
        tooltipOpt.content = encodeHTML(tooltipOpt.content);
      }
      var tooltipModelCascade = [tooltipOpt];
      var cmpt = this._ecModel.getComponent(ecData.componentMainType, ecData.componentIndex);
      if (cmpt) {
        tooltipModelCascade.push(cmpt);
      }
      tooltipModelCascade.push({
        formatter: tooltipOpt.content
      });
      var positionDefault = e.positionDefault;
      var subTooltipModel = buildTooltipModel(tooltipModelCascade, this._tooltipModel, positionDefault ? {
        position: positionDefault
      } : null);
      var defaultHtml = subTooltipModel.get("content");
      var asyncTicket = Math.random() + "";
      var markupStyleCreator = new TooltipMarkupStyleCreator();
      this._showOrMove(subTooltipModel, function() {
        var formatterParams = clone$1(subTooltipModel.get("formatterParams") || {});
        this._showTooltipContent(subTooltipModel, defaultHtml, formatterParams, asyncTicket, e.offsetX, e.offsetY, e.position, el, markupStyleCreator);
      });
      dispatchAction({
        type: "showTip",
        from: this.uid
      });
    };
    TooltipView2.prototype._showTooltipContent = function(tooltipModel, defaultHtml, params, asyncTicket, x, y, positionExpr, el, markupStyleCreator) {
      this._ticket = "";
      if (!tooltipModel.get("showContent") || !tooltipModel.get("show")) {
        return;
      }
      var tooltipContent = this._tooltipContent;
      tooltipContent.setEnterable(tooltipModel.get("enterable"));
      var formatter = tooltipModel.get("formatter");
      positionExpr = positionExpr || tooltipModel.get("position");
      var html = defaultHtml;
      var nearPoint = this._getNearestPoint([x, y], params, tooltipModel.get("trigger"), tooltipModel.get("borderColor"));
      var nearPointColor = nearPoint.color;
      if (formatter) {
        if (isString$2(formatter)) {
          var useUTC = tooltipModel.ecModel.get("useUTC");
          var params0 = isArray$1(params) ? params[0] : params;
          var isTimeAxis = params0 && params0.axisType && params0.axisType.indexOf("time") >= 0;
          html = formatter;
          if (isTimeAxis) {
            html = format(params0.axisValue, html, useUTC);
          }
          html = formatTpl(html, params, true);
        } else if (isFunction$1(formatter)) {
          var callback = bind$1(function(cbTicket, html2) {
            if (cbTicket === this._ticket) {
              tooltipContent.setContent(html2, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
              this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
            }
          }, this);
          this._ticket = asyncTicket;
          html = formatter(params, asyncTicket, callback);
        } else {
          html = formatter;
        }
      }
      tooltipContent.setContent(html, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
      tooltipContent.show(tooltipModel, nearPointColor);
      this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
    };
    TooltipView2.prototype._getNearestPoint = function(point, tooltipDataParams, trigger, borderColor) {
      if (trigger === "axis" || isArray$1(tooltipDataParams)) {
        return {
          color: borderColor || (this._renderMode === "html" ? "#fff" : "none")
        };
      }
      if (!isArray$1(tooltipDataParams)) {
        return {
          color: borderColor || tooltipDataParams.color || tooltipDataParams.borderColor
        };
      }
    };
    TooltipView2.prototype._updatePosition = function(tooltipModel, positionExpr, x, y, content, params, el) {
      var viewWidth = this._api.getWidth();
      var viewHeight = this._api.getHeight();
      positionExpr = positionExpr || tooltipModel.get("position");
      var contentSize = content.getSize();
      var align = tooltipModel.get("align");
      var vAlign = tooltipModel.get("verticalAlign");
      var rect = el && el.getBoundingRect().clone();
      el && rect.applyTransform(el.transform);
      if (isFunction$1(positionExpr)) {
        positionExpr = positionExpr([x, y], params, content.el, rect, {
          viewSize: [viewWidth, viewHeight],
          contentSize: contentSize.slice()
        });
      }
      if (isArray$1(positionExpr)) {
        x = parsePercent(positionExpr[0], viewWidth);
        y = parsePercent(positionExpr[1], viewHeight);
      } else if (isObject$3(positionExpr)) {
        var boxLayoutPosition = positionExpr;
        boxLayoutPosition.width = contentSize[0];
        boxLayoutPosition.height = contentSize[1];
        var layoutRect = getLayoutRect(boxLayoutPosition, {
          width: viewWidth,
          height: viewHeight
        });
        x = layoutRect.x;
        y = layoutRect.y;
        align = null;
        vAlign = null;
      } else if (isString$2(positionExpr) && el) {
        var pos = calcTooltipPosition(positionExpr, rect, contentSize, tooltipModel.get("borderWidth"));
        x = pos[0];
        y = pos[1];
      } else {
        var pos = refixTooltipPosition(x, y, content, viewWidth, viewHeight, align ? null : 20, vAlign ? null : 20);
        x = pos[0];
        y = pos[1];
      }
      align && (x -= isCenterAlign(align) ? contentSize[0] / 2 : align === "right" ? contentSize[0] : 0);
      vAlign && (y -= isCenterAlign(vAlign) ? contentSize[1] / 2 : vAlign === "bottom" ? contentSize[1] : 0);
      if (shouldTooltipConfine(tooltipModel)) {
        var pos = confineTooltipPosition(x, y, content, viewWidth, viewHeight);
        x = pos[0];
        y = pos[1];
      }
      content.moveTo(x, y);
    };
    TooltipView2.prototype._updateContentNotChangedOnAxis = function(dataByCoordSys, cbParamsList) {
      var lastCoordSys = this._lastDataByCoordSys;
      var lastCbParamsList = this._cbParamsList;
      var contentNotChanged = !!lastCoordSys && lastCoordSys.length === dataByCoordSys.length;
      contentNotChanged && each$3(lastCoordSys, function(lastItemCoordSys, indexCoordSys) {
        var lastDataByAxis = lastItemCoordSys.dataByAxis || [];
        var thisItemCoordSys = dataByCoordSys[indexCoordSys] || {};
        var thisDataByAxis = thisItemCoordSys.dataByAxis || [];
        contentNotChanged = contentNotChanged && lastDataByAxis.length === thisDataByAxis.length;
        contentNotChanged && each$3(lastDataByAxis, function(lastItem, indexAxis) {
          var thisItem = thisDataByAxis[indexAxis] || {};
          var lastIndices = lastItem.seriesDataIndices || [];
          var newIndices = thisItem.seriesDataIndices || [];
          contentNotChanged = contentNotChanged && lastItem.value === thisItem.value && lastItem.axisType === thisItem.axisType && lastItem.axisId === thisItem.axisId && lastIndices.length === newIndices.length;
          contentNotChanged && each$3(lastIndices, function(lastIdxItem, j) {
            var newIdxItem = newIndices[j];
            contentNotChanged = contentNotChanged && lastIdxItem.seriesIndex === newIdxItem.seriesIndex && lastIdxItem.dataIndex === newIdxItem.dataIndex;
          });
          lastCbParamsList && each$3(lastItem.seriesDataIndices, function(idxItem) {
            var seriesIdx = idxItem.seriesIndex;
            var cbParams = cbParamsList[seriesIdx];
            var lastCbParams = lastCbParamsList[seriesIdx];
            if (cbParams && lastCbParams && lastCbParams.data !== cbParams.data) {
              contentNotChanged = false;
            }
          });
        });
      });
      this._lastDataByCoordSys = dataByCoordSys;
      this._cbParamsList = cbParamsList;
      return !!contentNotChanged;
    };
    TooltipView2.prototype._hide = function(dispatchAction) {
      this._lastDataByCoordSys = null;
      dispatchAction({
        type: "hideTip",
        from: this.uid
      });
    };
    TooltipView2.prototype.dispose = function(ecModel, api) {
      if (env.node || !api.getDom()) {
        return;
      }
      clear(this, "_updatePosition");
      this._tooltipContent.dispose();
      unregister("itemTooltip", api);
    };
    TooltipView2.type = "tooltip";
    return TooltipView2;
  }(ComponentView)
);
function buildTooltipModel(modelCascade, globalTooltipModel, defaultTooltipOption) {
  var ecModel = globalTooltipModel.ecModel;
  var resultModel;
  if (defaultTooltipOption) {
    resultModel = new Model(defaultTooltipOption, ecModel, ecModel);
    resultModel = new Model(globalTooltipModel.option, resultModel, ecModel);
  } else {
    resultModel = globalTooltipModel;
  }
  for (var i = modelCascade.length - 1; i >= 0; i--) {
    var tooltipOpt = modelCascade[i];
    if (tooltipOpt) {
      if (tooltipOpt instanceof Model) {
        tooltipOpt = tooltipOpt.get("tooltip", true);
      }
      if (isString$2(tooltipOpt)) {
        tooltipOpt = {
          formatter: tooltipOpt
        };
      }
      if (tooltipOpt) {
        resultModel = new Model(tooltipOpt, resultModel, ecModel);
      }
    }
  }
  return resultModel;
}
function makeDispatchAction(payload, api) {
  return payload.dispatchAction || bind$1(api.dispatchAction, api);
}
function refixTooltipPosition(x, y, content, viewWidth, viewHeight, gapH, gapV) {
  var size = content.getSize();
  var width = size[0];
  var height = size[1];
  if (gapH != null) {
    if (x + width + gapH + 2 > viewWidth) {
      x -= width + gapH;
    } else {
      x += gapH;
    }
  }
  if (gapV != null) {
    if (y + height + gapV > viewHeight) {
      y -= height + gapV;
    } else {
      y += gapV;
    }
  }
  return [x, y];
}
function confineTooltipPosition(x, y, content, viewWidth, viewHeight) {
  var size = content.getSize();
  var width = size[0];
  var height = size[1];
  x = Math.min(x + width, viewWidth) - width;
  y = Math.min(y + height, viewHeight) - height;
  x = Math.max(x, 0);
  y = Math.max(y, 0);
  return [x, y];
}
function calcTooltipPosition(position, rect, contentSize, borderWidth) {
  var domWidth = contentSize[0];
  var domHeight = contentSize[1];
  var offset = Math.ceil(Math.SQRT2 * borderWidth) + 8;
  var x = 0;
  var y = 0;
  var rectWidth = rect.width;
  var rectHeight = rect.height;
  switch (position) {
    case "inside":
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y + rectHeight / 2 - domHeight / 2;
      break;
    case "top":
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y - domHeight - offset;
      break;
    case "bottom":
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y + rectHeight + offset;
      break;
    case "left":
      x = rect.x - domWidth - offset;
      y = rect.y + rectHeight / 2 - domHeight / 2;
      break;
    case "right":
      x = rect.x + rectWidth + offset;
      y = rect.y + rectHeight / 2 - domHeight / 2;
  }
  return [x, y];
}
function isCenterAlign(align) {
  return align === "center" || align === "middle";
}
function findComponentReference(payload, ecModel, api) {
  var queryOptionMap = preParseFinder(payload).queryOptionMap;
  var componentMainType = queryOptionMap.keys()[0];
  if (!componentMainType || componentMainType === "series") {
    return;
  }
  var queryResult = queryReferringComponents(ecModel, componentMainType, queryOptionMap.get(componentMainType), {
    useDefault: false,
    enableAll: false,
    enableNone: false
  });
  var model = queryResult.models[0];
  if (!model) {
    return;
  }
  var view = api.getViewOfComponentModel(model);
  var el;
  view.group.traverse(function(subEl) {
    var tooltipConfig = getECData(subEl).tooltipConfig;
    if (tooltipConfig && tooltipConfig.name === payload.name) {
      el = subEl;
      return true;
    }
  });
  if (el) {
    return {
      componentMainType,
      componentIndex: model.componentIndex,
      el
    };
  }
}
function install(registers) {
  use(install$2);
  registers.registerComponentModel(TooltipModel);
  registers.registerComponentView(TooltipView);
  registers.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, noop$2);
  registers.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, noop$2);
}
const chart_gx92j6r8pb = /* @__PURE__ */ defineNuxtPlugin(() => {
  use([install$5, install$4, install$1, install]);
});
const error_handler_xwgO4KJDpl = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error2, instance, info) => {
    console.error("errorHandler.error:", error2);
    console.error("errorHandler.info:", info);
  };
  nuxtApp.hook("vue:error", (error2, instance, info) => {
    console.error("vue.error:", error2);
    console.error("vue.info:", info);
  });
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin$1,
  revive_payload_server_eJ33V7gbc6,
  plugin,
  components_plugin_KR1HBZs4kY,
  element_plus_teleports_plugin_h4Dmekbj62,
  element_plus_injection_plugin_1RNPi6ogby,
  slideovers_X7whXyrIWR,
  modals_oqljskDzoR,
  colors_ETtiVmZNmO,
  plugin_server_ano7jnMEqi,
  plugin_WLsn00x1qh,
  plugin_ghbUAjaD3n,
  plugin_AUP22rrBAc,
  chart_gx92j6r8pb,
  error_handler_xwgO4KJDpl
];
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle: throttle2 = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error2 = ref(false);
  const start = () => {
    error2.value = false;
    set2(0);
  };
  function set2(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    if (throttle2 && false) {
      setTimeout(() => {
        isLoading.value = true;
      }, throttle2);
    } else {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error2.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear2() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error2.value),
    start,
    set: set2,
    finish,
    clear: clear2
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_0$2 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error: error2, start, finish, clear: clear2 } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error: error2,
      start,
      finish,
      clear: clear2
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error2.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const layouts = {
  admin: () => import('./admin-n_aIFaC6.mjs'),
  parent: () => import('./parent-BASrRSBZ.mjs')
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout2 = computed(() => {
      let layout22 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout22 && !(layout22 in layouts)) {
        if (props.fallback) {
          layout22 = unref(props.fallback);
        }
      }
      return layout22;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout2.value && layout2.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout2.value || void 0,
              name: layout2.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a2, _b2;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b2 = (_a2 = context.slots).default) == null ? void 0 : _b2.call(_a2);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLoadingIndicator = __nuxt_component_0$2;
  const _component_NuxtLayout = __nuxt_component_0$1;
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, { duration: 1e4 }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a2, _b2;
    return renderChild ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a2;
    const noscript = { ...props };
    const slotVnodes = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base2) => ({
    base: base2
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a2, _b2, _c2;
    return {
      title: ((_c2 = (_b2 = (_a2 = slots.default) == null ? void 0 : _a2.call(slots)) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.children) || null
    };
  })
});
defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a2, _b2, _c2;
    const style = { ...props };
    const textContent = (_c2 = (_b2 = (_a2 = slots.default) == null ? void 0 : _a2.call(slots)) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a2, _b2;
    return (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2);
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const useDeprecated = ({ from, replacement, scope, version: version2, ref: ref2, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};
var English = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get$2(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a2;
  return `${(_a2 = option == null ? void 0 : option[key]) != null ? _a2 : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const localeContextKey = Symbol("localeContextKey");
const useLocale = (localeOverrides) => {
  const locale = inject(localeContextKey, ref());
  return buildLocaleContext(computed(() => locale.value || English));
};
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a2, _b2;
    return (_b2 = (_a2 = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a2.$props) == null ? void 0 : _b2[name];
  });
};
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const SIZE_INJECTION_KEY = Symbol("size");
const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {});
  return computed(() => {
    return unref(injectedSize.size) || "";
  });
};
const emptyValuesContextKey = Symbol("emptyValuesContextKey");
const DEFAULT_EMPTY_VALUES = ["", void 0, null];
const DEFAULT_VALUE_ON_CLEAR = void 0;
const useEmptyValuesProps = buildProps({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (val) => isFunction$2(val) ? !val() : !val
  }
});
const useEmptyValues = (props, defaultValue) => {
  const config2 = getCurrentInstance() ? inject(emptyValuesContextKey, ref({})) : ref({});
  const emptyValues = computed(() => props.emptyValues || config2.value.emptyValues || DEFAULT_EMPTY_VALUES);
  const valueOnClear = computed(() => {
    if (isFunction$2(props.valueOnClear)) {
      return props.valueOnClear();
    } else if (props.valueOnClear !== void 0) {
      return props.valueOnClear;
    } else if (isFunction$2(config2.value.valueOnClear)) {
      return config2.value.valueOnClear();
    } else if (config2.value.valueOnClear !== void 0) {
      return config2.value.valueOnClear;
    }
    return defaultValue !== void 0 ? defaultValue : DEFAULT_VALUE_ON_CLEAR;
  });
  const isEmptyValue = (value) => {
    return emptyValues.value.includes(value);
  };
  if (!emptyValues.value.includes(valueOnClear.value)) ;
  return {
    emptyValues,
    valueOnClear,
    isEmptyValue
  };
};
const IconMap = {
  success: "icon-success",
  warning: "icon-warning",
  error: "icon-error",
  info: "icon-info"
};
const IconComponentMap = {
  [IconMap.success]: circle_check_filled_default,
  [IconMap.warning]: warning_filled_default,
  [IconMap.error]: circle_close_filled_default,
  [IconMap.info]: info_filled_default
};
const resultProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  subTitle: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    values: ["success", "warning", "info", "error"],
    default: "info"
  }
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$5 = defineComponent({
  name: "ElResult"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: resultProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("result");
    const resultIcon = computed(() => {
      const icon = props.icon;
      const iconClass = icon && IconMap[icon] ? IconMap[icon] : "icon-info";
      const iconComponent = IconComponentMap[iconClass] || IconComponentMap["icon-info"];
      return {
        class: iconClass,
        component: iconComponent
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("icon"))
        }, [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            unref(resultIcon).component ? (openBlock(), createBlock(resolveDynamicComponent(unref(resultIcon).component), {
              key: 0,
              class: normalizeClass(unref(resultIcon).class)
            }, null, 8, ["class"])) : createCommentVNode("v-if", true)
          ])
        ], 2),
        _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("title"))
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createElementVNode("p", null, toDisplayString(_ctx.title), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        _ctx.subTitle || _ctx.$slots["sub-title"] ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).e("subtitle"))
        }, [
          renderSlot(_ctx.$slots, "sub-title", {}, () => [
            createElementVNode("p", null, toDisplayString(_ctx.subTitle), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(unref(ns).e("extra"))
        }, [
          renderSlot(_ctx.$slots, "extra")
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Result = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "result.vue"]]);
const ElResult = withInstall(Result);
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$4 = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
const useFormSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig2 = ignore.global ? emptyRef : useGlobalSize();
  const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
  return computed(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
};
const useFormDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(formContextKey, void 0);
  return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};
const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = ref(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = ref(false);
  }
  const inputId = ref();
  const isLabeledByFormItem = computed(() => {
    var _a2;
    return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && ((_a2 = formItemContext.inputIds) == null ? void 0 : _a2.length) <= 1);
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};
const formMetaProps = buildProps({
  size: {
    type: String,
    values: componentSizes
  },
  disabled: Boolean
});
const formProps = buildProps({
  ...formMetaProps,
  model: Object,
  rules: {
    type: definePropType(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true
  },
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: Boolean,
  scrollToError: Boolean,
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
});
const formEmits = {
  validate: (prop, isValid, message) => (isArray(prop) || isString$1(prop)) && isBoolean(isValid) && isString$1(message)
};
function useFormLabelWidth() {
  const potentialLabelWidthArr = ref([]);
  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length)
      return "0";
    const max = Math.max(...potentialLabelWidthArr.value);
    return max ? `${max}px` : "";
  });
  function getLabelWidthIndex(width) {
    const index = potentialLabelWidthArr.value.indexOf(width);
    if (index === -1 && autoLabelWidth.value === "0") ;
    return index;
  }
  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }
  function deregisterLabelWidth(val) {
    const index = getLabelWidthIndex(val);
    if (index > -1) {
      potentialLabelWidthArr.value.splice(index, 1);
    }
  }
  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
}
const filterFields = (fields, props) => {
  const normalized = castArray(props);
  return normalized.length > 0 ? fields.filter((field) => field.prop && normalized.includes(field.prop)) : fields;
};
const COMPONENT_NAME$1 = "ElForm";
const __default__$3 = defineComponent({
  name: COMPONENT_NAME$1
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: formProps,
  emits: formEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const fields = [];
    const formSize = useFormSize();
    const ns = useNamespace("form");
    const formClasses = computed(() => {
      const { labelPosition, inline } = props;
      return [
        ns.b(),
        ns.m(formSize.value || "default"),
        {
          [ns.m(`label-${labelPosition}`)]: labelPosition,
          [ns.m("inline")]: inline
        }
      ];
    });
    const getField = (prop) => {
      return fields.find((field) => field.prop === prop);
    };
    const addField = (field) => {
      fields.push(field);
    };
    const removeField = (field) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };
    const resetFields = (properties = []) => {
      if (!props.model) {
        return;
      }
      filterFields(fields, properties).forEach((field) => field.resetField());
    };
    const clearValidate = (props2 = []) => {
      filterFields(fields, props2).forEach((field) => field.clearValidate());
    };
    const isValidatable = computed(() => {
      const hasModel = !!props.model;
      return hasModel;
    });
    const obtainValidateFields = (props2) => {
      if (fields.length === 0)
        return [];
      const filteredFields = filterFields(fields, props2);
      if (!filteredFields.length) {
        return [];
      }
      return filteredFields;
    };
    const validate2 = async (callback) => validateField(void 0, callback);
    const doValidateField = async (props2 = []) => {
      if (!isValidatable.value)
        return false;
      const fields2 = obtainValidateFields(props2);
      if (fields2.length === 0)
        return true;
      let validationErrors = {};
      for (const field of fields2) {
        try {
          await field.validate("");
        } catch (fields3) {
          validationErrors = {
            ...validationErrors,
            ...fields3
          };
        }
      }
      if (Object.keys(validationErrors).length === 0)
        return true;
      return Promise.reject(validationErrors);
    };
    const validateField = async (modelProps = [], callback) => {
      const shouldThrow = !isFunction$2(callback);
      try {
        const result = await doValidateField(modelProps);
        if (result === true) {
          await (callback == null ? void 0 : callback(result));
        }
        return result;
      } catch (e) {
        if (e instanceof Error)
          throw e;
        const invalidFields = e;
        if (props.scrollToError) {
          scrollToField(Object.keys(invalidFields)[0]);
        }
        await (callback == null ? void 0 : callback(false, invalidFields));
        return shouldThrow && Promise.reject(invalidFields);
      }
    };
    const scrollToField = (prop) => {
      var _a2;
      const field = filterFields(fields, prop)[0];
      if (field) {
        (_a2 = field.$el) == null ? void 0 : _a2.scrollIntoView(props.scrollIntoViewOptions);
      }
    };
    watch(() => props.rules, () => {
      if (props.validateOnRuleChange) {
        validate2().catch((err) => debugWarn());
      }
    }, { deep: true });
    provide(formContextKey, reactive({
      ...toRefs(props),
      emit,
      resetFields,
      clearValidate,
      validateField,
      getField,
      addField,
      removeField,
      ...useFormLabelWidth()
    }));
    expose({
      validate: validate2,
      validateField,
      resetFields,
      clearValidate,
      scrollToField,
      fields
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: normalizeClass(unref(formClasses))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Form = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "form.vue"]]);
const formItemValidateStates = [
  "",
  "error",
  "validating",
  "success"
];
const formItemProps = buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top", ""],
    default: ""
  },
  prop: {
    type: definePropType([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: definePropType([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: formItemValidateStates
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: componentSizes
  }
});
const COMPONENT_NAME = "ElLabelWrap";
var FormLabelWrap = defineComponent({
  name: COMPONENT_NAME,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props, {
    slots
  }) {
    const formContext = inject(formContextKey, void 0);
    const formItemContext = inject(formItemContextKey);
    if (!formItemContext)
      throwError$1(COMPONENT_NAME, "usage: <el-form-item><label-wrap /></el-form-item>");
    const ns = useNamespace("form");
    const el = ref();
    const computedWidth = ref(0);
    const getLabelWidth = () => {
      var _a2;
      if ((_a2 = el.value) == null ? void 0 : _a2.firstElementChild) {
        const width = (void 0).getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(width));
      } else {
        return 0;
      }
    };
    const updateLabelWidth = (action = "update") => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === "update") {
            computedWidth.value = getLabelWidth();
          } else if (action === "remove") {
            formContext == null ? void 0 : formContext.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };
    const updateLabelWidthFn = () => updateLabelWidth("update");
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        formContext == null ? void 0 : formContext.registerLabelWidth(val, oldVal);
      }
    });
    useResizeObserver(computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = el.value) == null ? void 0 : _a2.firstElementChild) != null ? _b2 : null;
    }), updateLabelWidthFn);
    return () => {
      var _a2, _b2;
      if (!slots)
        return null;
      const {
        isAutoWidth
      } = props;
      if (isAutoWidth) {
        const autoLabelWidth = formContext == null ? void 0 : formContext.autoLabelWidth;
        const hasLabel = formItemContext == null ? void 0 : formItemContext.hasLabel;
        const style = {};
        if (hasLabel && autoLabelWidth && autoLabelWidth !== "auto") {
          const marginWidth = Math.max(0, Number.parseInt(autoLabelWidth, 10) - computedWidth.value);
          const labelPosition = formItemContext.labelPosition || formContext.labelPosition;
          const marginPosition = labelPosition === "left" ? "marginRight" : "marginLeft";
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`;
          }
        }
        return createVNode("div", {
          "ref": el,
          "class": [ns.be("item", "label-wrap")],
          "style": style
        }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]);
      } else {
        return createVNode(Fragment, {
          "ref": el
        }, [(_b2 = slots.default) == null ? void 0 : _b2.call(slots)]);
      }
    };
  }
});
const __default__$2 = defineComponent({
  name: "ElFormItem"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: formItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    const formContext = inject(formContextKey, void 0);
    const parentFormItemContext = inject(formItemContextKey, void 0);
    const _size = useFormSize(void 0, { formItem: false });
    const ns = useNamespace("form-item");
    const labelId = useId().value;
    const inputIds = ref([]);
    const validateState = ref("");
    const validateStateDebounced = refDebounced(validateState, 100);
    const validateMessage = ref("");
    const formItemRef = ref();
    let initialValue = void 0;
    let isResettingField = false;
    const labelPosition = computed(() => props.labelPosition || (formContext == null ? void 0 : formContext.labelPosition));
    const labelStyle = computed(() => {
      if (labelPosition.value === "top") {
        return {};
      }
      const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (labelWidth)
        return { width: labelWidth };
      return {};
    });
    const contentStyle = computed(() => {
      if (labelPosition.value === "top" || (formContext == null ? void 0 : formContext.inline)) {
        return {};
      }
      if (!props.label && !props.labelWidth && isNested) {
        return {};
      }
      const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (!props.label && !slots.label) {
        return { marginLeft: labelWidth };
      }
      return {};
    });
    const formItemClasses = computed(() => [
      ns.b(),
      ns.m(_size.value),
      ns.is("error", validateState.value === "error"),
      ns.is("validating", validateState.value === "validating"),
      ns.is("success", validateState.value === "success"),
      ns.is("required", isRequired.value || props.required),
      ns.is("no-asterisk", formContext == null ? void 0 : formContext.hideRequiredAsterisk),
      (formContext == null ? void 0 : formContext.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      {
        [ns.m("feedback")]: formContext == null ? void 0 : formContext.statusIcon,
        [ns.m(`label-${labelPosition.value}`)]: labelPosition.value
      }
    ]);
    const _inlineMessage = computed(() => isBoolean(props.inlineMessage) ? props.inlineMessage : (formContext == null ? void 0 : formContext.inlineMessage) || false);
    const validateClasses = computed(() => [
      ns.e("error"),
      { [ns.em("error", "inline")]: _inlineMessage.value }
    ]);
    const propString = computed(() => {
      if (!props.prop)
        return "";
      return isString$1(props.prop) ? props.prop : props.prop.join(".");
    });
    const hasLabel = computed(() => {
      return !!(props.label || slots.label);
    });
    const labelFor = computed(() => {
      return props.for || (inputIds.value.length === 1 ? inputIds.value[0] : void 0);
    });
    const isGroup = computed(() => {
      return !labelFor.value && hasLabel.value;
    });
    const isNested = !!parentFormItemContext;
    const fieldValue = computed(() => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop) {
        return;
      }
      return getProp(model, props.prop).value;
    });
    const normalizedRules = computed(() => {
      const { required } = props;
      const rules = [];
      if (props.rules) {
        rules.push(...castArray(props.rules));
      }
      const formRules = formContext == null ? void 0 : formContext.rules;
      if (formRules && props.prop) {
        const _rules = getProp(formRules, props.prop).value;
        if (_rules) {
          rules.push(...castArray(_rules));
        }
      }
      if (required !== void 0) {
        const requiredRules = rules.map((rule, i) => [rule, i]).filter(([rule]) => Object.keys(rule).includes("required"));
        if (requiredRules.length > 0) {
          for (const [rule, i] of requiredRules) {
            if (rule.required === required)
              continue;
            rules[i] = { ...rule, required };
          }
        } else {
          rules.push({ required });
        }
      }
      return rules;
    });
    const validateEnabled = computed(() => normalizedRules.value.length > 0);
    const getFilteredRule = (trigger) => {
      const rules = normalizedRules.value;
      return rules.filter((rule) => {
        if (!rule.trigger || !trigger)
          return true;
        if (isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      }).map(({ trigger: trigger2, ...rule }) => rule);
    };
    const isRequired = computed(() => normalizedRules.value.some((rule) => rule.required));
    const shouldShowError = computed(() => {
      var _a2;
      return validateStateDebounced.value === "error" && props.showMessage && ((_a2 = formContext == null ? void 0 : formContext.showMessage) != null ? _a2 : true);
    });
    const currentLabel = computed(() => `${props.label || ""}${(formContext == null ? void 0 : formContext.labelSuffix) || ""}`);
    const setValidationState = (state) => {
      validateState.value = state;
    };
    const onValidationFailed = (error2) => {
      var _a2, _b2;
      const { errors, fields } = error2;
      if (!errors || !fields) {
        console.error(error2);
      }
      setValidationState("error");
      validateMessage.value = errors ? (_b2 = (_a2 = errors == null ? void 0 : errors[0]) == null ? void 0 : _a2.message) != null ? _b2 : `${props.prop} is required` : "";
      formContext == null ? void 0 : formContext.emit("validate", props.prop, false, validateMessage.value);
    };
    const onValidationSucceeded = () => {
      setValidationState("success");
      formContext == null ? void 0 : formContext.emit("validate", props.prop, true, "");
    };
    const doValidate = async (rules) => {
      const modelName = propString.value;
      const validator = new AsyncValidator({
        [modelName]: rules
      });
      return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
        onValidationSucceeded();
        return true;
      }).catch((err) => {
        onValidationFailed(err);
        return Promise.reject(err);
      });
    };
    const validate2 = async (trigger, callback) => {
      if (isResettingField || !props.prop) {
        return false;
      }
      const hasCallback = isFunction$2(callback);
      if (!validateEnabled.value) {
        callback == null ? void 0 : callback(false);
        return false;
      }
      const rules = getFilteredRule(trigger);
      if (rules.length === 0) {
        callback == null ? void 0 : callback(true);
        return true;
      }
      setValidationState("validating");
      return doValidate(rules).then(() => {
        callback == null ? void 0 : callback(true);
        return true;
      }).catch((err) => {
        const { fields } = err;
        callback == null ? void 0 : callback(false, fields);
        return hasCallback ? false : Promise.reject(fields);
      });
    };
    const clearValidate = () => {
      setValidationState("");
      validateMessage.value = "";
      isResettingField = false;
    };
    const resetField = async () => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop)
        return;
      const computedValue = getProp(model, props.prop);
      isResettingField = true;
      computedValue.value = clone$2(initialValue);
      await nextTick();
      clearValidate();
      isResettingField = false;
    };
    const addInputId = (id) => {
      if (!inputIds.value.includes(id)) {
        inputIds.value.push(id);
      }
    };
    const removeInputId = (id) => {
      inputIds.value = inputIds.value.filter((listId) => listId !== id);
    };
    watch(() => props.error, (val) => {
      validateMessage.value = val || "";
      setValidationState(val ? "error" : "");
    }, { immediate: true });
    watch(() => props.validateStatus, (val) => setValidationState(val || ""));
    const context = reactive({
      ...toRefs(props),
      $el: formItemRef,
      size: _size,
      validateState,
      labelId,
      inputIds,
      isGroup,
      hasLabel,
      fieldValue,
      addInputId,
      removeInputId,
      resetField,
      clearValidate,
      validate: validate2
    });
    provide(formItemContextKey, context);
    expose({
      size: _size,
      validateMessage,
      validateState,
      validate: validate2,
      clearValidate,
      resetField
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("div", {
        ref_key: "formItemRef",
        ref: formItemRef,
        class: normalizeClass(unref(formItemClasses)),
        role: unref(isGroup) ? "group" : void 0,
        "aria-labelledby": unref(isGroup) ? unref(labelId) : void 0
      }, [
        createVNode(unref(FormLabelWrap), {
          "is-auto-width": unref(labelStyle).width === "auto",
          "update-all": ((_a2 = unref(formContext)) == null ? void 0 : _a2.labelWidth) === "auto"
        }, {
          default: withCtx(() => [
            unref(hasLabel) ? (openBlock(), createBlock(resolveDynamicComponent(unref(labelFor) ? "label" : "div"), {
              key: 0,
              id: unref(labelId),
              for: unref(labelFor),
              class: normalizeClass(unref(ns).e("label")),
              style: normalizeStyle(unref(labelStyle))
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "label", { label: unref(currentLabel) }, () => [
                  createTextVNode(toDisplayString(unref(currentLabel)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("content")),
          style: normalizeStyle(unref(contentStyle))
        }, [
          renderSlot(_ctx.$slots, "default"),
          createVNode(TransitionGroup, {
            name: `${unref(ns).namespace.value}-zoom-in-top`
          }, {
            default: withCtx(() => [
              unref(shouldShowError) ? renderSlot(_ctx.$slots, "error", {
                key: 0,
                error: validateMessage.value
              }, () => [
                createElementVNode("div", {
                  class: normalizeClass(unref(validateClasses))
                }, toDisplayString(validateMessage.value), 3)
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, ["role", "aria-labelledby"]);
    };
  }
});
var FormItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "form-item.vue"]]);
const ElForm = withInstall(Form, {
  FormItem
});
const ElFormItem = withNoopInstall(FormItem);
const configProviderContextKey = Symbol();
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config2 = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = config2.value) == null ? void 0 : _a2[key]) != null ? _b2 : defaultValue;
    });
  } else {
    return config2;
  }
}
const provideGlobalConfig = (config2, app, global2 = false) => {
  var _a2;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a2 = void 0) != null ? _a2 : inSetup ? provide : void 0;
  if (!provideFn) {
    return;
  }
  const context = computed(() => {
    const cfg = unref(config2);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  provideFn(localeContextKey, computed(() => context.value.locale));
  provideFn(namespaceContextKey, computed(() => context.value.namespace));
  provideFn(zIndexContextKey, computed(() => context.value.zIndex));
  provideFn(SIZE_INJECTION_KEY, {
    size: computed(() => context.value.size || "")
  });
  provideFn(emptyValuesContextKey, computed(() => ({
    emptyValues: context.value.emptyValues,
    valueOnClear: context.value.valueOnClear
  })));
  if (global2 || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  const keys2 = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys2) {
    obj[key] = b[key] !== void 0 ? b[key] : a[key];
  }
  return obj;
};
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: useSizeProp,
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...useEmptyValuesProps
});
const messageConfig = {};
const ConfigProvider = defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config2 = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config2 == null ? void 0 : config2.value });
  }
});
const ElConfigProvider = withInstall(ConfigProvider);
const buttonGroupContextKey = Symbol("buttonGroupContextKey");
const useButton = (props, emit) => {
  useDeprecated({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, computed(() => props.type === "text"));
  const buttonGroupContext = inject(buttonGroupContextKey, void 0);
  const globalConfig2 = useGlobalConfig("button");
  const { form } = useFormItem();
  const _size = useFormSize(computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
  const _disabled = useFormDisabled();
  const _ref = ref();
  const slots = useSlots();
  const _type = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
  const autoInsertSpace = computed(() => {
    var _a2, _b2, _c2;
    return (_c2 = (_b2 = props.autoInsertSpace) != null ? _b2 : (_a2 = globalConfig2.value) == null ? void 0 : _a2.autoInsertSpace) != null ? _c2 : false;
  });
  const _props = computed(() => {
    if (props.tag === "button") {
      return {
        ariaDisabled: _disabled.value || props.loading,
        disabled: _disabled.value || props.loading,
        autofocus: props.autofocus,
        type: props.nativeType
      };
    }
    return {};
  });
  const shouldAddSpace = computed(() => {
    var _a2;
    const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
      const slot = defaultSlot[0];
      if ((slot == null ? void 0 : slot.type) === Text) {
        const text = slot.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(text.trim());
      }
    }
    return false;
  });
  const handleClick = (evt) => {
    if (_disabled.value || props.loading) {
      evt.stopPropagation();
      return;
    }
    if (props.nativeType === "reset") {
      form == null ? void 0 : form.resetFields();
    }
    emit("click", evt);
  };
  return {
    _disabled,
    _size,
    _type,
    _ref,
    _props,
    shouldAddSpace,
    handleClick
  };
};
const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  icon: {
    type: iconPropType
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => loading_default
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: definePropType([String, Object]),
    default: "button"
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
function darken(color, amount = 20) {
  return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
  const _disabled = useFormDisabled();
  const ns = useNamespace("button");
  return computed(() => {
    let styles = {};
    let buttonColor = props.color;
    if (buttonColor) {
      const match = buttonColor.match(/var\((.*?)\)/);
      if (match) {
        buttonColor = (void 0).getComputedStyle((void 0).document.documentElement).getPropertyValue(match[1]);
      }
      const color = new TinyColor(buttonColor);
      const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
      if (props.plain) {
        styles = ns.cssVarBlock({
          "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
          "hover-text-color": `var(${ns.cssVarName("color-white")})`,
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": `var(${ns.cssVarName("color-white")})`,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
        }
      } else {
        const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
        styles = ns.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
          styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
        }
      }
    }
    return styles;
  });
}
const __default__$1 = defineComponent({
  name: "ElButton"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const buttonStyle = useButtonCustomStyle(props);
    const ns = useNamespace("button");
    const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } = useButton(props, emit);
    const buttonKls = computed(() => [
      ns.b(),
      ns.m(_type.value),
      ns.m(_size.value),
      ns.is("disabled", _disabled.value),
      ns.is("loading", props.loading),
      ns.is("plain", props.plain),
      ns.is("round", props.round),
      ns.is("circle", props.circle),
      ns.is("text", props.text),
      ns.is("link", props.link),
      ns.is("has-bg", props.bg)
    ]);
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
        ref_key: "_ref",
        ref: _ref
      }, unref(_props), {
        class: unref(buttonKls),
        style: unref(buttonStyle),
        onClick: unref(handleClick)
      }), {
        default: withCtx(() => [
          _ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.loadingIcon)))
              ]),
              _: 1
            }, 8, ["class"]))
          ], 64)) : _ctx.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
            default: withCtx(() => [
              _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
            ]),
            _: 3
          })) : createCommentVNode("v-if", true),
          _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["class", "style", "onClick"]);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "button.vue"]]);
const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};
const __default__ = defineComponent({
  name: "ElButtonGroup"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "button-group.vue"]]);
const ElButton = withInstall(Button, {
  ButtonGroup
});
withNoopInstall(ButtonGroup);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const appConfig = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_Title = Title;
      const _component_el_result = ElResult;
      const _component_el_button = ElButton;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Title, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3;
          if (_push2) {
            _push2(`${ssrInterpolate((_a3 = __props.error) == null ? void 0 : _a3.statusCode)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b3 = __props.error) == null ? void 0 : _b3.statusCode), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main data-v-6e68b3a7>`);
      _push(ssrRenderComponent(_component_el_result, {
        icon: "error",
        title: ((_a2 = __props.error) == null ? void 0 : _a2.statusCode) + "",
        "sub-title": (_b2 = __props.error) == null ? void 0 : _b2.message
      }, {
        extra: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              tag: "a",
              href: unref(appConfig).login,
              rel: "noopener noreferrer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`返回`);
                } else {
                  return [
                    createTextVNode("返回")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_button, {
                type: "primary",
                tag: "a",
                href: unref(appConfig).login,
                rel: "noopener noreferrer"
              }, {
                default: withCtx(() => [
                  createTextVNode("返回")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-6e68b3a7"]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error2 = useError();
    const abortRender = error2.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error2)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error2) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error2) {
      await nuxt.hooks.callHook("app:error", error2);
      nuxt.payload.error = nuxt.payload.error || createError(error2);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

const server = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $: getDefaultInterpolatedLabel,
    A: key_default,
    B: createSeriesData,
    C: createSymbol,
    D: enterEmphasis,
    E: ElConfigProvider,
    F: leaveEmphasis,
    G: updateProps$1,
    H: saveOldStyle,
    I: initProps,
    J: getLabelStatesModels,
    K: normalizeSymbolOffset,
    L: setLabelStyle,
    M: getDefaultLabel,
    N: toggleHoverEmphasis,
    O: getECData,
    P: removeElement,
    Q: normalizeSymbolSize,
    R: traverseElements,
    S: SeriesModel,
    T: isDimensionStacked,
    U: createFloat32Array,
    V: convertToColorString,
    W: setStatesStylesFromModel,
    X: queryDataIndex,
    Y: ChartView,
    Z: setStatesFlag,
    _: _export_sfc$1,
    a: __nuxt_component_0$1,
    a$: box,
    a0: interpolateRawValues,
    a1: labelInner,
    a2: SPECIAL_STATES,
    a3: isCoordinateSystemType,
    a4: createGridClipPath,
    a5: createPolarClipPath,
    a6: createRenderPlanner,
    a7: dataSample,
    a8: use,
    a9: install$5,
    aA: makeInner,
    aB: parsePercent,
    aC: prepareLayoutList,
    aD: shiftLayoutOnX,
    aE: shiftLayoutOnY,
    aF: hideOverlap,
    aG: isElementRemoved,
    aH: animateLabelValue,
    aI: linearMap,
    aJ: getLayoutRect,
    aK: getSectorCornerRadius,
    aL: removeElementWithFadeOut,
    aM: prepareSeriesDataSchema,
    aN: SeriesData,
    aO: makeSeriesEncodeForNameBased,
    aP: getPercentSeats,
    aQ: defaultEmphasis,
    aR: createLegacyDataSelectAction,
    aS: normalizeCssArray,
    aT: ComponentModel,
    aU: createTextStyle,
    aV: windowOpen,
    aW: ComponentView,
    aX: isNameSpecified,
    aY: Model,
    aZ: enableHoverEmphasis,
    a_: setTooltipConfig,
    aa: install,
    ab: install$1,
    ac: install$4,
    ad: isEmpty,
    ae: buildProps,
    af: definePropType,
    ag: circle_close_default,
    ah: useSizeProp,
    ai: useEmptyValuesProps,
    aj: useFormItem,
    ak: useEmptyValues,
    al: clock_default,
    am: calendar_default,
    an: useFormSize,
    ao: onClickOutside,
    ap: unrefElement,
    aq: getStyle,
    ar: arrow_up_default,
    as: arrow_down_default,
    at: isNumber,
    au: hasClass,
    av: d_arrow_left_default,
    aw: arrow_left_default,
    ax: arrow_right_default,
    ay: d_arrow_right_default,
    az: DISPLAY_STATES,
    b: ElButton,
    b0: createOrUpdatePatternFromDecal,
    b1: getLayoutParams,
    b2: inheritDefaultOption,
    b3: mergeLayoutParam,
    b4: createIcon,
    b5: useFormItemInputId,
    b6: useFormDisabled,
    b7: ValidateComponentsMap,
    b8: view_default,
    b9: hide_default,
    bA: useMutationObserver,
    bB: warning_filled_default,
    bC: circle_check_default,
    bD: check_default,
    bE: document_default,
    bF: zoom_in_default,
    bG: delete_default,
    bH: entriesOf,
    bI: useVModel,
    bJ: useAppConfig,
    bK: navigateTo,
    bL: useNuxtApp,
    bM: asyncDataDefaults,
    bN: createError,
    bO: useHead,
    bP: more_default,
    bQ: __nuxt_component_0,
    ba: useResizeObserver,
    bb: buildProp,
    bc: isClient,
    bd: tryOnScopeDispose,
    be: useGetDerivedNamespace,
    bf: useIdInjection,
    bg: useZIndex,
    bh: useId,
    bi: isElement,
    bj: throwError$1,
    bk: addUnit,
    bl: getProp,
    bm: withNoopInstall,
    bn: componentSizes,
    bo: close_default,
    bp: defineStore,
    bq: useRuntimeConfig,
    br: setInterval$1,
    bs: useDeprecated,
    bt: CloseComponents,
    bu: useGlobalConfig,
    bv: defaultNamespace,
    bw: useTimeoutFn,
    bx: keysOf,
    by: TypeComponentsMap,
    bz: TypeComponents,
    c: useRoute,
    d: useRouter,
    default: entry$1,
    e: isUndefined,
    f: isPropAbsent,
    g: useNamespace,
    h: _export_sfc,
    i: isBoolean,
    j: addClass,
    k: ElIcon,
    l: loading_default,
    m: debugWarn,
    n: caret_right_default,
    o: useEventListener,
    p: iconPropType,
    q: useLocale,
    r: removeClass,
    s: search_default,
    t: formItemContextKey,
    u: useUserStore,
    v: ElForm,
    w: withInstall,
    x: ElFormItem,
    y: upload_filled_default,
    z: user_default
});

export { getLayoutRect as $, arrow_right_default as A, getStyle as B, arrow_up_default as C, arrow_down_default as D, ElConfigProvider as E, isNumber as F, makeInner as G, __extends as H, getSectorCornerRadius as I, initProps as J, updateProps$1 as K, saveOldStyle as L, setStatesStylesFromModel as M, toggleHoverEmphasis as N, setLabelStyle as O, getLabelStatesModels as P, removeElementWithFadeOut as Q, ChartView as R, makeSeriesEncodeForNameBased as S, getPercentSeats as T, defaultEmphasis as U, SeriesModel as V, ComponentModel as W, createTextStyle as X, windowOpen as Y, getECData as Z, _export_sfc$1 as _, __nuxt_component_0$1 as a, isBoolean as a$, ComponentView as a0, isNameSpecified as a1, Model as a2, enableHoverEmphasis as a3, setTooltipConfig as a4, box as a5, createOrUpdatePatternFromDecal as a6, createSymbol as a7, getLayoutParams as a8, inheritDefaultOption as a9, normalizeSymbolSize as aA, convertToColorString as aB, queryDataIndex as aC, setStatesFlag as aD, getDefaultInterpolatedLabel as aE, interpolateRawValues as aF, isDimensionStacked as aG, createFloat32Array as aH, isCoordinateSystemType as aI, createGridClipPath as aJ, createPolarClipPath as aK, install$1 as aL, install$4 as aM, traverseElements as aN, dataSample as aO, createRenderPlanner as aP, iconPropType as aQ, useFormItemInputId as aR, useFormDisabled as aS, ValidateComponentsMap as aT, view_default as aU, hide_default as aV, useResizeObserver as aW, useEventListener as aX, buildProp as aY, formItemContextKey as aZ, useId as a_, mergeLayoutParam as aa, createIcon as ab, DISPLAY_STATES as ac, SPECIAL_STATES as ad, parsePercent as ae, prepareSeriesDataSchema as af, SeriesData as ag, normalizeCssArray as ah, use as ai, install$5 as aj, install as ak, createLegacyDataSelectAction as al, linearMap as am, shiftLayoutOnY as an, prepareLayoutList as ao, shiftLayoutOnX as ap, hideOverlap as aq, isElementRemoved as ar, labelInner as as, animateLabelValue as at, createSeriesData as au, enterEmphasis as av, leaveEmphasis as aw, normalizeSymbolOffset as ax, getDefaultLabel as ay, removeElement as az, ElButton as b, addUnit as b0, useGetDerivedNamespace as b1, useIdInjection as b2, useZIndex as b3, isElement as b4, tryOnScopeDispose as b5, isClient as b6, throwError$1 as b7, useUserStore as b8, search_default as b9, warning_filled_default as bA, circle_check_default as bB, check_default as bC, document_default as bD, zoom_in_default as bE, delete_default as bF, entriesOf as bG, useVModel as bH, user_default as bI, key_default as bJ, useAppConfig as bK, navigateTo as bL, useNuxtApp as bM, useHead as bN, asyncDataDefaults as bO, createError as bP, more_default as bQ, __nuxt_component_0 as bR, server as bS, addClass as ba, removeClass as bb, withNoopInstall as bc, getProp as bd, loading_default as be, componentSizes as bf, close_default as bg, defineStore as bh, useRuntimeConfig as bi, setInterval$1 as bj, useDeprecated as bk, isPropAbsent as bl, useRoute as bm, useRouter as bn, caret_right_default as bo, ElForm as bp, ElFormItem as bq, CloseComponents as br, useGlobalConfig as bs, defaultNamespace as bt, useTimeoutFn as bu, keysOf as bv, TypeComponentsMap as bw, TypeComponents as bx, useMutationObserver as by, upload_filled_default as bz, buildProps as c, definePropType as d, circle_close_default as e, useEmptyValuesProps as f, useNamespace as g, useLocale as h, useFormItem as i, useEmptyValues as j, debugWarn as k, clock_default as l, calendar_default as m, useFormSize as n, onClickOutside as o, unrefElement as p, ElIcon as q, d_arrow_left_default as r, d_arrow_right_default as s, isEmpty as t, useSizeProp as u, _export_sfc as v, withInstall as w, isUndefined as x, hasClass as y, arrow_left_default as z };
//# sourceMappingURL=server.mjs.map
