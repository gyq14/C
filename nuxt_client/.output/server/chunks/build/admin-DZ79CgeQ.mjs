import { e as buildAssetsURL } from '../_/nitro.mjs';
import { E as ElTag } from './index-CahaU-nv.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, computed, inject, ref, reactive, watch, provide, h, Fragment, withDirectives, vShow, watchEffect, toRef, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, normalizeStyle, withCtx, renderSlot, createElementBlock, createElementVNode, toDisplayString, createVNode, createCommentVNode, createTextVNode, Transition, mergeProps, nextTick, resolveComponent, renderList } from 'vue';
import { ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a3 as useNamespace, aD as buildProps, a7 as iconPropType, bl as throwError$1, b9 as arrow_down_default, b1 as arrow_right_default, a4 as ElIcon, aE as definePropType, bG as more_default, be as useResizeObserver, aa as withInstall, br as withNoopInstall, bt as componentSizes, aN as useFormSize, ac as isUndefined, a8 as useLocale, g as useLogin, ah as addClass, ag as removeClass, a$ as hasClass, ae as _export_sfc, bA as useTimeoutFn, c as useRouter, bC as useAppConfig, j as useNuxtApp, _ as _export_sfc$1, i as navigateTo } from './server.mjs';
import { b as ElTooltip, C as ClickOutside, c as ElScrollbar } from './index-D0bGVFfM.mjs';
import { isNil } from 'lodash-unified';
import { E as ElCollapseTransition } from './index-_4KDOxFH.mjs';
import { TinyColor } from '@ctrl/tinycolor';
import { isString, isObject, isArray } from '@vue/shared';
import { m as mutable } from './index-DMIaAJTX.mjs';
import { f as flattedChildren } from './vnode-Cs2GWOIH.mjs';
import __nuxt_component_2 from './index-BKXO7Wqw.mjs';
import { E as ElSpace } from './index-C8J0bhke.mjs';
import { _ as __nuxt_component_7 } from './client-only-DO9VxlB2.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';
import 'pinia-plugin-persistedstate';
import 'zrender/lib/zrender.js';
import 'zrender/lib/core/util.js';
import 'zrender/lib/core/env.js';
import 'zrender/lib/core/timsort.js';
import 'zrender/lib/core/Eventful.js';
import 'zrender/lib/graphic/Text.js';
import 'zrender/lib/tool/color.js';
import 'zrender/lib/graphic/Path.js';
import 'zrender/lib/tool/path.js';
import 'zrender/lib/core/matrix.js';
import 'zrender/lib/core/vector.js';
import 'zrender/lib/core/Transformable.js';
import 'zrender/lib/graphic/Image.js';
import 'zrender/lib/graphic/Group.js';
import 'zrender/lib/graphic/shape/Circle.js';
import 'zrender/lib/graphic/shape/Ellipse.js';
import 'zrender/lib/graphic/shape/Sector.js';
import 'zrender/lib/graphic/shape/Ring.js';
import 'zrender/lib/graphic/shape/Polygon.js';
import 'zrender/lib/graphic/shape/Polyline.js';
import 'zrender/lib/graphic/shape/Rect.js';
import 'zrender/lib/graphic/shape/Line.js';
import 'zrender/lib/graphic/shape/BezierCurve.js';
import 'zrender/lib/graphic/shape/Arc.js';
import 'zrender/lib/graphic/CompoundPath.js';
import 'zrender/lib/graphic/LinearGradient.js';
import 'zrender/lib/graphic/RadialGradient.js';
import 'zrender/lib/core/BoundingRect.js';
import 'zrender/lib/core/OrientedBoundingRect.js';
import 'zrender/lib/core/Point.js';
import 'zrender/lib/graphic/IncrementalDisplayable.js';
import 'zrender/lib/graphic/helper/subPixelOptimize.js';
import 'zrender/lib/core/dom.js';
import 'zrender/lib/core/WeakMap.js';
import 'zrender/lib/core/LRU.js';
import 'zrender/lib/contain/text.js';
import 'zrender/lib/canvas/graphic.js';
import 'zrender/lib/core/platform.js';
import 'zrender/lib/canvas/Painter.js';
import 'zrender/lib/core/event.js';
import 'async-validator';
import '@iconify/utils/lib/css/icon';

const _imports_0 = "" + buildAssetsURL("title.Cxef8LsD.png");
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "HeaderLogo",
  __ssrInlineRender: true,
  setup(__props) {
    const { getToken } = useLogin();
    const userRole = getToken();
    const name = ref("");
    const title = ref("");
    if (userRole === "admin") {
      name.value = "\u5F20\u5EFA";
      title.value = "\u7BA1\u7406\u5458";
    } else if (userRole === "leader") {
      name.value = "\u5218\u8273";
      title.value = "\u90E8\u957F";
    } else if (userRole === "user") {
      name.value = "\u5218\u7FD4\u884C";
      title.value = "\u7528\u6237";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tag = ElTag;
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-82ea0e36><div class="brand" data-v-82ea0e36><img class="logo"${ssrRenderAttr("src", _imports_0)} data-v-82ea0e36><div class="title" data-v-82ea0e36>${ssrInterpolate(unref(name))}</div><div data-v-82ea0e36>`);
      _push(ssrRenderComponent(_component_el_tag, {
        class: "tag",
        type: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(title))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(title)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/HeaderLogo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__scopeId", "data-v-82ea0e36"]]);
const _sfc_main$b = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_el_icon = ElIcon;
  _push(ssrRenderComponent(_component_el_icon, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"${_scopeId}><path fill="currentColor" d="M11.632 11.991c0.577 0 1.010-0.143 1.299-0.43 0.287-0.286 0.432-0.713 0.432-1.278v-6.562c0-0.565-0.145-0.991-0.433-1.28s-0.721-0.433-1.298-0.433h-9.264c-0.569 0-1 0.144-1.292 0.43s-0.439 0.714-0.439 1.283v6.562c0 0.569 0.147 0.996 0.439 1.28s0.723 0.427 1.292 0.427h9.264zM4.837 11.030h-2.43c-0.258 0-0.455-0.068-0.591-0.205s-0.206-0.34-0.206-0.609v-6.425c0-0.269 0.068-0.472 0.205-0.609s0.335-0.205 0.592-0.205h2.43v8.053zM11.593 11.030h-5.828v-8.053h5.827c0.258 0 0.458 0.068 0.598 0.205s0.211 0.34 0.211 0.609v6.425c0 0.27-0.070 0.473-0.211 0.609s-0.339 0.205-0.597 0.205zM3.791 4.963c0.091 0 0.168-0.033 0.233-0.1 0.060-0.057 0.097-0.138 0.097-0.228s-0.037-0.17-0.097-0.228l-0-0c-0.058-0.058-0.139-0.094-0.228-0.094-0.002 0-0.004 0-0.005 0h-1.132c-0.001-0-0.002-0-0.003-0-0.088 0-0.168 0.036-0.225 0.094l-0 0c-0.060 0.057-0.097 0.138-0.097 0.228s0.037 0.17 0.097 0.228l0 0c0.064 0.067 0.14 0.1 0.227 0.1h1.132zM3.791 6.379c0.091 0 0.168-0.032 0.233-0.097 0.060-0.057 0.098-0.137 0.098-0.226s-0.037-0.17-0.098-0.226l-0-0c-0.058-0.058-0.139-0.094-0.228-0.094-0.002 0-0.004 0-0.005 0h-1.132c-0.001-0-0.002-0-0.003-0-0.088 0-0.168 0.036-0.225 0.094l-0 0c-0.060 0.057-0.097 0.137-0.097 0.226s0.037 0.169 0.097 0.226l0 0c0.057 0.060 0.137 0.097 0.226 0.097 0 0 0.001 0 0.001 0h1.132zM3.791 7.796c0.091 0 0.168-0.032 0.233-0.097 0.059-0.056 0.096-0.135 0.097-0.222v-0c0-0.002 0-0.004 0-0.007 0-0.088-0.037-0.168-0.096-0.224l-0-0c-0.058-0.058-0.139-0.094-0.228-0.094-0.002 0-0.004 0-0.005 0h-1.132c-0.001-0-0.002-0-0.003-0-0.088 0-0.168 0.036-0.225 0.094l-0 0c-0.060 0.056-0.097 0.136-0.097 0.224 0 0.002 0 0.005 0 0.007l-0-0c0 0.083 0.032 0.158 0.097 0.222 0.057 0.060 0.137 0.097 0.225 0.097 0.001 0 0.001 0 0.002-0h1.132z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 14 14"
          }, [
            createVNode("path", {
              fill: "currentColor",
              d: "M11.632 11.991c0.577 0 1.010-0.143 1.299-0.43 0.287-0.286 0.432-0.713 0.432-1.278v-6.562c0-0.565-0.145-0.991-0.433-1.28s-0.721-0.433-1.298-0.433h-9.264c-0.569 0-1 0.144-1.292 0.43s-0.439 0.714-0.439 1.283v6.562c0 0.569 0.147 0.996 0.439 1.28s0.723 0.427 1.292 0.427h9.264zM4.837 11.030h-2.43c-0.258 0-0.455-0.068-0.591-0.205s-0.206-0.34-0.206-0.609v-6.425c0-0.269 0.068-0.472 0.205-0.609s0.335-0.205 0.592-0.205h2.43v8.053zM11.593 11.030h-5.828v-8.053h5.827c0.258 0 0.458 0.068 0.598 0.205s0.211 0.34 0.211 0.609v6.425c0 0.27-0.070 0.473-0.211 0.609s-0.339 0.205-0.597 0.205zM3.791 4.963c0.091 0 0.168-0.033 0.233-0.1 0.060-0.057 0.097-0.138 0.097-0.228s-0.037-0.17-0.097-0.228l-0-0c-0.058-0.058-0.139-0.094-0.228-0.094-0.002 0-0.004 0-0.005 0h-1.132c-0.001-0-0.002-0-0.003-0-0.088 0-0.168 0.036-0.225 0.094l-0 0c-0.060 0.057-0.097 0.138-0.097 0.228s0.037 0.17 0.097 0.228l0 0c0.064 0.067 0.14 0.1 0.227 0.1h1.132zM3.791 6.379c0.091 0 0.168-0.032 0.233-0.097 0.060-0.057 0.098-0.137 0.098-0.226s-0.037-0.17-0.098-0.226l-0-0c-0.058-0.058-0.139-0.094-0.228-0.094-0.002 0-0.004 0-0.005 0h-1.132c-0.001-0-0.002-0-0.003-0-0.088 0-0.168 0.036-0.225 0.094l-0 0c-0.060 0.057-0.097 0.137-0.097 0.226s0.037 0.169 0.097 0.226l0 0c0.057 0.060 0.137 0.097 0.226 0.097 0 0 0.001 0 0.001 0h1.132zM3.791 7.796c0.091 0 0.168-0.032 0.233-0.097 0.059-0.056 0.096-0.135 0.097-0.222v-0c0-0.002 0-0.004 0-0.007 0-0.088-0.037-0.168-0.096-0.224l-0-0c-0.058-0.058-0.139-0.094-0.228-0.094-0.002 0-0.004 0-0.005 0h-1.132c-0.001-0-0.002-0-0.003-0-0.088 0-0.168 0.036-0.225 0.094l-0 0c-0.060 0.056-0.097 0.136-0.097 0.224 0 0.002 0 0.005 0 0.007l-0-0c0 0.083 0.032 0.158 0.097 0.222 0.057 0.060 0.137 0.097 0.225 0.097 0.001 0 0.001 0 0.002-0h1.132z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/SidebarButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$a = defineComponent({
  name: "ElMenuCollapseTransition",
  setup() {
    const ns = useNamespace("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        addClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        removeClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset) {
          el.dataset = {};
        }
        if (hasClass(el, ns.m("collapse"))) {
          removeClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          addClass(el, ns.m("collapse"));
        } else {
          addClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          removeClass(el, ns.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return {
      listeners
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, _ctx.listeners), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$2], ["__file", "menu-collapse-transition.vue"]]);
function useMenu(instance, currentIndex) {
  const indexPath = computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu,
    indexPath
  };
}
function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return new TinyColor(color).shade(20).toString();
    }
  });
  return menuBarColor;
}
const useMenuCssVar = (props, level) => {
  const ns = useNamespace("menu");
  return computed(() => {
    return ns.cssVarBlock({
      "text-color": props.textColor || "",
      "hover-text-color": props.textColor || "",
      "bg-color": props.backgroundColor || "",
      "hover-bg-color": useMenuColor(props).value || "",
      "active-color": props.activeTextColor || "",
      level: `${level}`
    });
  });
};
const subMenuProps = buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: Number,
  hideTimeout: Number,
  popperClass: String,
  disabled: Boolean,
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: Number,
  expandCloseIcon: {
    type: iconPropType
  },
  expandOpenIcon: {
    type: iconPropType
  },
  collapseCloseIcon: {
    type: iconPropType
  },
  collapseOpenIcon: {
    type: iconPropType
  }
});
const COMPONENT_NAME$2 = "ElSubMenu";
var SubMenu = defineComponent({
  name: COMPONENT_NAME$2,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = getCurrentInstance();
    const { indexPath, parentMenu } = useMenu(instance, computed(() => props.index));
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const rootMenu = inject("rootMenu");
    if (!rootMenu)
      throwError$1(COMPONENT_NAME$2, "can not inject root menu");
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError$1(COMPONENT_NAME$2, "can not inject sub menu");
    const items = ref({});
    const subMenus = ref({});
    let timeout;
    const mouseInChild = ref(false);
    const verticalTitleRef = ref();
    const vPopper = ref(null);
    const currentPlacement = computed(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
    const subMenuTitleIcon = computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? props.expandCloseIcon && props.expandOpenIcon ? opened.value ? props.expandOpenIcon : props.expandCloseIcon : arrow_down_default : props.collapseCloseIcon && props.collapseOpenIcon ? opened.value ? props.collapseOpenIcon : props.collapseCloseIcon : arrow_right_default;
    });
    const isFirstLevel = computed(() => {
      return subMenu.level === 0;
    });
    const appendToBody = computed(() => {
      const value = props.teleported;
      return value === void 0 ? isFirstLevel.value : value;
    });
    const menuTransitionName = computed(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
    const fallbackPlacements = computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "right",
      "right-end",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = computed(() => rootMenu.openedMenus.includes(props.index));
    const active = computed(() => {
      let isActive = false;
      Object.values(items.value).forEach((item2) => {
        if (item2.active) {
          isActive = true;
        }
      });
      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const mode = computed(() => rootMenu.props.mode);
    reactive({
      index: props.index,
      indexPath,
      active
    });
    const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
    const subMenuPopperOffset = computed(() => {
      var _a;
      return (_a = props.popperOffset) != null ? _a : rootMenu.props.popperOffset;
    });
    const subMenuPopperClass = computed(() => {
      var _a;
      return (_a = props.popperClass) != null ? _a : rootMenu.props.popperClass;
    });
    const subMenuShowTimeout = computed(() => {
      var _a;
      return (_a = props.showTimeout) != null ? _a : rootMenu.props.showTimeout;
    });
    const subMenuHideTimeout = computed(() => {
      var _a;
      return (_a = props.hideTimeout) != null ? _a : rootMenu.props.hideTimeout;
    });
    const doDestroy = () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = subMenuShowTimeout.value) => {
      var _a;
      if (event.type === "focus") {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        subMenu.mouseInChild.value = true;
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        subMenu.mouseInChild.value = false;
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), subMenuHideTimeout.value));
      if (appendToBody.value && deepDispatch) {
        (_a = subMenu.handleMouseleave) == null ? void 0 : _a.call(subMenu, true);
      }
    };
    watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1
      });
    }
    expose({
      opened
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        h(ElIcon, {
          class: nsSubMenu.e("icon-arrow"),
          style: {
            transform: opened.value ? props.expandCloseIcon && props.expandOpenIcon || props.collapseCloseIcon && props.collapseOpenIcon && rootMenu.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => isString(subMenuTitleIcon.value) ? h(instance.appContext.components[subMenuTitleIcon.value]) : h(subMenuTitleIcon.value)
        })
      ];
      const child = rootMenu.isMenuPopup ? h(ElTooltip, {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: subMenuPopperOffset.value,
        showArrow: false,
        persistent: true,
        popperClass: subMenuPopperClass.value,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        content: () => {
          var _a2;
          return h("div", {
            class: [
              nsMenu.m(mode.value),
              nsMenu.m("popup-container"),
              subMenuPopperClass.value
            ],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            h("ul", {
              class: [
                nsMenu.b(),
                nsMenu.m("popup"),
                nsMenu.m(`popup-${currentPlacement.value}`)
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        default: () => h("div", {
          class: nsSubMenu.e("title"),
          onClick: handleClick
        }, titleTag)
      }) : h(Fragment, {}, [
        h("div", {
          class: nsSubMenu.e("title"),
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        h(ElCollapseTransition, {}, {
          default: () => {
            var _a2;
            return withDirectives(h("ul", {
              role: "menu",
              class: [nsMenu.b(), nsMenu.m("inline")],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[vShow, opened.value]]);
          }
        })
      ]);
      return h("li", {
        class: [
          nsSubMenu.b(),
          nsSubMenu.is("active", active.value),
          nsSubMenu.is("opened", opened.value),
          nsSubMenu.is("disabled", props.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});
const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  closeOnClickOutside: Boolean,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  ellipsisIcon: {
    type: iconPropType,
    default: () => more_default
  },
  popperEffect: {
    type: definePropType(String),
    default: "dark"
  },
  popperClass: String,
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  }
});
const checkIndexPath = (indexPath) => isArray(indexPath) && indexPath.every((path) => isString(path));
const menuEmits = {
  close: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => isString(index) && checkIndexPath(indexPath) && isObject(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var Menu = defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = ref();
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const sliceIndex = ref(-1);
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const subMenus = ref({});
    const isMenuPopup = computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const close = (index) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const closeMenu = (index, indexPath) => {
      close(index);
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index, indexPath);
      } else {
        openMenu(index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (isNil(index) || isNil(indexPath))
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
      } else {
        activeIndex.value = val;
      }
    };
    const calcMenuItemWidth = (menuItem) => {
      const computedStyle = getComputedStyle(menuItem);
      const marginLeft = Number.parseInt(computedStyle.marginLeft, 10);
      const marginRight = Number.parseInt(computedStyle.marginRight, 10);
      return menuItem.offsetWidth + marginLeft + marginRight || 0;
    };
    const calcSliceIndex = () => {
      var _a, _b;
      if (!menu.value)
        return -1;
      const items2 = Array.from((_b = (_a = menu.value) == null ? void 0 : _a.childNodes) != null ? _b : []).filter((item) => item.nodeName !== "#comment" && (item.nodeName !== "#text" || item.nodeValue));
      const moreItemWidth = 64;
      const computedMenuStyle = getComputedStyle(menu.value);
      const paddingLeft = Number.parseInt(computedMenuStyle.paddingLeft, 10);
      const paddingRight = Number.parseInt(computedMenuStyle.paddingRight, 10);
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
      let calcWidth = 0;
      let sliceIndex2 = 0;
      items2.forEach((item, index) => {
        calcWidth += calcMenuItemWidth(item);
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex2 = index + 1;
        }
      });
      return sliceIndex2 === items2.length ? -1 : sliceIndex2;
    };
    const getIndexPath = (index) => subMenus.value[index].indexPath;
    const debounce = (fn, wait = 33.34) => {
      let timmer;
      return () => {
        timmer && clearTimeout(timmer);
        timmer = setTimeout(() => {
          fn();
        }, wait);
      };
    };
    let isFirstTimeRender = true;
    const handleResize = () => {
      if (sliceIndex.value === calcSliceIndex())
        return;
      const callback = () => {
        sliceIndex.value = -1;
        nextTick(() => {
          sliceIndex.value = calcSliceIndex();
        });
      };
      isFirstTimeRender ? callback() : debounce(callback)();
      isFirstTimeRender = false;
    };
    watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    watch(items.value, initMenu);
    let resizeStopper;
    watchEffect(() => {
      if (props.mode === "horizontal" && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop;
      else
        resizeStopper == null ? void 0 : resizeStopper();
    });
    const mouseInChild = ref(false);
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      provide("rootMenu", reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild,
        level: 0
      });
    }
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close,
        handleResize
      });
    }
    const ulStyle = useMenuCssVar(props, 0);
    return () => {
      var _a, _b;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const originalSlot = flattedChildren(slot);
        const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
        const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(h(SubMenu, {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow"),
            popperOffset: props.popperOffset
          }, {
            title: () => h(ElIcon, {
              class: nsSubMenu.e("icon-more")
            }, {
              default: () => h(props.ellipsisIcon)
            }),
            default: () => slotMore
          }));
        }
      }
      const directives = props.closeOnClickOutside ? [
        [
          ClickOutside,
          () => {
            if (!openedMenus.value.length)
              return;
            if (!mouseInChild.value) {
              openedMenus.value.forEach((openedMenu) => emit("close", openedMenu, getIndexPath(openedMenu)));
              openedMenus.value = [];
            }
          }
        ]
      ] : [];
      const vMenu = withDirectives(h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m(props.mode)]: true,
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]), directives);
      if (props.collapseTransition && props.mode === "vertical") {
        return h(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});
const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString(item.index) && isArray(item.indexPath)
};
const COMPONENT_NAME$1 = "ElMenuItem";
const _sfc_main$9 = defineComponent({
  name: COMPONENT_NAME$1,
  components: {
    ElTooltip
  },
  props: menuItemProps,
  emits: menuItemEmits,
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const rootMenu = inject("rootMenu");
    const nsMenu = useNamespace("menu");
    const nsMenuItem = useNamespace("menu-item");
    if (!rootMenu)
      throwError$1(COMPONENT_NAME$1, "can not inject root menu");
    const { parentMenu, indexPath } = useMenu(instance, toRef(props, "index"));
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError$1(COMPONENT_NAME$1, "can not inject sub menu");
    const active = computed(() => props.index === rootMenu.activeIndex);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    return {
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.nsMenuItem.b(),
      _ctx.nsMenuItem.is("active", _ctx.active),
      _ctx.nsMenuItem.is("disabled", _ctx.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: _ctx.handleClick
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.rootMenu.props.popperEffect,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: withCtx(() => [
        renderSlot(_ctx.$slots, "title")
      ]),
      default: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass(_ctx.nsMenu.be("tooltip", "trigger"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      renderSlot(_ctx.$slots, "default"),
      renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 10, ["onClick"]);
}
var MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1], ["__file", "menu-item.vue"]]);
const menuItemGroupProps = {
  title: String
};
const COMPONENT_NAME = "ElMenuItemGroup";
const _sfc_main$8 = defineComponent({
  name: COMPONENT_NAME,
  props: menuItemGroupProps,
  setup() {
    const ns = useNamespace("menu-item-group");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("title"))
    }, [
      !_ctx.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 2),
    createElementVNode("ul", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var MenuItemGroup = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render], ["__file", "menu-item-group.vue"]]);
const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});
const ElMenuItem = withNoopInstall(MenuItem);
withNoopInstall(MenuItemGroup);
const ElSubMenu = withNoopInstall(SubMenu);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const jump = async (r) => {
      console.log(r);
      await navigateTo(r);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_sub_menu = ElSubMenu;
      const _component_el_icon = ElIcon;
      const _component_Icon = __nuxt_component_2;
      const _component_LayoutMenuItem = _sfc_main$7;
      const _component_el_menu_item = ElMenuItem;
      _push(`<!--[-->`);
      ssrRenderList(__props.menus, (v) => {
        var _a;
        _push(`<!--[-->`);
        if ((_a = v.children) == null ? void 0 : _a.length) {
          _push(ssrRenderComponent(_component_el_sub_menu, {
            index: v.name
          }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b2;
              var _a2, _b, _c, _d;
              if (_push2) {
                if ((_a2 = v.meta) == null ? void 0 : _a2.icon) {
                  _push2(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a32, _b22;
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: (_a32 = v.meta) == null ? void 0 : _a32.icon
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: (_b22 = v.meta) == null ? void 0 : _b22.icon
                          }, null, 8, ["name"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span${_scopeId}>${ssrInterpolate((_a3 = (_b = v.meta) == null ? void 0 : _b.title) != null ? _a3 : v.name)}</span>`);
              } else {
                return [
                  ((_c = v.meta) == null ? void 0 : _c.icon) ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                    default: withCtx(() => {
                      var _a32;
                      return [
                        createVNode(_component_Icon, {
                          name: (_a32 = v.meta) == null ? void 0 : _a32.icon
                        }, null, 8, ["name"])
                      ];
                    }),
                    _: 2
                  }, 1024)) : createCommentVNode("", true),
                  createVNode("span", null, toDisplayString((_b2 = (_d = v.meta) == null ? void 0 : _d.title) != null ? _b2 : v.name), 1)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_LayoutMenuItem, {
                  menus: v.children
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_LayoutMenuItem, {
                    menus: v.children
                  }, null, 8, ["menus"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_el_menu_item, {
            index: v.name,
            onClick: () => jump(v)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b2;
              var _a2, _b, _c, _d;
              if (_push2) {
                if ((_a2 = v.meta) == null ? void 0 : _a2.icon) {
                  _push2(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a32, _b22;
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: (_a32 = v.meta) == null ? void 0 : _a32.icon
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: (_b22 = v.meta) == null ? void 0 : _b22.icon
                          }, null, 8, ["name"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span${_scopeId}>${ssrInterpolate((_a3 = (_b = v.meta) == null ? void 0 : _b.title) != null ? _a3 : v.name)}</span>`);
              } else {
                return [
                  ((_c = v.meta) == null ? void 0 : _c.icon) ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                    default: withCtx(() => {
                      var _a32;
                      return [
                        createVNode(_component_Icon, {
                          name: (_a32 = v.meta) == null ? void 0 : _a32.icon
                        }, null, 8, ["name"])
                      ];
                    }),
                    _: 2
                  }, 1024)) : createCommentVNode("", true),
                  createVNode("span", null, toDisplayString((_b2 = (_d = v.meta) == null ? void 0 : _d.title) != null ? _b2 : v.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/MenuItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SideMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const appConfig = useAppConfig();
    const menus = computed(() => {
      const currentPath = router.currentRoute.value.path;
      let rolePath;
      if (currentPath.startsWith(appConfig.admin)) {
        rolePath = appConfig.admin;
      } else if (currentPath.startsWith(appConfig.leader)) {
        rolePath = appConfig.leader;
      } else if (currentPath.startsWith(appConfig.user)) {
        rolePath = appConfig.user;
      } else {
        rolePath = appConfig.login;
      }
      const rootRoute = router.options.routes.find((route) => route.path === rolePath);
      const filterAndSortRoutes = (routes) => {
        return routes.filter((route) => {
          var _a;
          return ((_a = route.meta) == null ? void 0 : _a.hidden) !== true;
        }).sort((a, b) => {
          var _a, _b;
          return (Number((_a = a.meta) == null ? void 0 : _a.order) || 0) - (Number((_b = b.meta) == null ? void 0 : _b.order) || 0);
        }).map((route) => ({
          ...route,
          children: route.children ? filterAndSortRoutes(route.children) : []
        }));
      };
      return rootRoute ? filterAndSortRoutes(rootRoute.children || []) : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_menu = ElMenu;
      const _component_LayoutMenuItem = _sfc_main$7;
      _push(`<menu${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_menu, {
        "default-active": _ctx.$route.name,
        "default-openeds": _ctx.$route.matched.map((v) => v.name)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutMenuItem, { menus: unref(menus) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutMenuItem, { menus: unref(menus) }, null, 8, ["menus"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</menu>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/SideMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const textProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger", ""],
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  truncated: Boolean,
  lineClamp: {
    type: [String, Number]
  },
  tag: {
    type: String,
    default: "span"
  }
});
const __default__$2 = defineComponent({
  name: "ElText"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: textProps,
  setup(__props) {
    const props = __props;
    const textSize = useFormSize();
    const ns = useNamespace("text");
    const textKls = computed(() => [
      ns.b(),
      ns.m(props.type),
      ns.m(textSize.value),
      ns.is("truncated", props.truncated),
      ns.is("line-clamp", !isUndefined(props.lineClamp))
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(textKls)),
        style: normalizeStyle({ "-webkit-line-clamp": _ctx.lineClamp })
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Text = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "text.vue"]]);
const ElText = withInstall(Text);
const breadcrumbKey = Symbol("breadcrumbKey");
const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: iconPropType
  }
});
const __default__$1 = defineComponent({
  name: "ElBreadcrumb"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("breadcrumb");
    const breadcrumb = ref();
    provide(breadcrumbKey, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        "aria-label": unref(t)("el.breadcrumb.label"),
        role: "navigation"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, ["aria-label"]);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "breadcrumb.vue"]]);
const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: Boolean
});
const __default__ = defineComponent({
  name: "ElBreadcrumbItem"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const ns = useNamespace("breadcrumb");
    const router = instance.appContext.config.globalProperties.$router;
    const link = ref();
    const onClick = () => {
      if (!props.to || !router)
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("item"))
      }, [
        createElementVNode("span", {
          ref_key: "link",
          ref: link,
          class: normalizeClass([unref(ns).e("inner"), unref(ns).is("link", !!_ctx.to)]),
          role: "link",
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        ((_a = unref(breadcrumbContext)) == null ? void 0 : _a.separatorIcon) ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("separator"))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(breadcrumbContext).separatorIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("separator")),
          role: "presentation"
        }, toDisplayString((_b = unref(breadcrumbContext)) == null ? void 0 : _b.separator), 3))
      ], 2);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "breadcrumb-item.vue"]]);
const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_text = ElText;
  const _component_el_breadcrumb = ElBreadcrumb;
  const _component_el_breadcrumb_item = ElBreadcrumbItem;
  _push(ssrRenderComponent(_component_el_text, mergeProps({
    "line-clamp": 1,
    truncated: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_breadcrumb, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.$route.matched.slice(1), (v) => {
                _push3(ssrRenderComponent(_component_el_breadcrumb_item, {
                  key: v.name
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    var _a2, _b2;
                    var _a, _b;
                    if (_push4) {
                      _push4(`${ssrInterpolate((_a2 = (_a = v.meta) == null ? void 0 : _a.title) != null ? _a2 : v.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString((_b2 = (_b = v.meta) == null ? void 0 : _b.title) != null ? _b2 : v.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$route.matched.slice(1), (v) => {
                  return openBlock(), createBlock(_component_el_breadcrumb_item, {
                    key: v.name
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      var _a;
                      return [
                        createTextVNode(toDisplayString((_a2 = (_a = v.meta) == null ? void 0 : _a.title) != null ? _a2 : v.name), 1)
                      ];
                    }),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_breadcrumb, null, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$route.matched.slice(1), (v) => {
                return openBlock(), createBlock(_component_el_breadcrumb_item, {
                  key: v.name
                }, {
                  default: withCtx(() => {
                    var _a2;
                    var _a;
                    return [
                      createTextVNode(toDisplayString((_a2 = (_a = v.meta) == null ? void 0 : _a.title) != null ? _a2 : v.name), 1)
                    ];
                  }),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Breadcrumb.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeaderUser",
  __ssrInlineRender: true,
  setup(__props) {
    useLogin();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_7;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/HeaderUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useDevice = () => useNuxtApp().$device;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const device = useDevice();
    const isCollapse = ref(device.isMobile);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeaderLogo = __nuxt_component_0;
      const _component_LayoutSidebarButton = __nuxt_component_1;
      const _component_el_scrollbar = ElScrollbar;
      const _component_LayoutSideMenu = _sfc_main$6;
      const _component_el_space = ElSpace;
      const _component_LayoutBreadcrumb = __nuxt_component_5;
      const _component_LayoutHeaderUser = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_7;
      _push(`<!--[--><aside style="${ssrRenderStyle(!unref(isCollapse) ? null : { display: "none" })}" class="${ssrRenderClass({ "aside-mobile": unref(device).isMobile })}">`);
      _push(ssrRenderComponent(_component_LayoutHeaderLogo, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutSidebarButton, {
              style: !unref(isCollapse) ? null : { display: "none" },
              onClick: ($event) => isCollapse.value = !unref(isCollapse)
            }, null, _parent2, _scopeId));
          } else {
            return [
              withDirectives(createVNode(_component_LayoutSidebarButton, {
                onClick: ($event) => isCollapse.value = !unref(isCollapse)
              }, null, 8, ["onClick"]), [
                [vShow, !unref(isCollapse)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_scrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutSideMenu, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutSideMenu)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside><article><header>`);
      _push(ssrRenderComponent(_component_el_space, { size: "large" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isCollapse)) {
              _push2(ssrRenderComponent(_component_LayoutSidebarButton, {
                onClick: ($event) => isCollapse.value = !unref(isCollapse)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(device).isMobile) {
              _push2(ssrRenderComponent(_component_LayoutBreadcrumb, null, null, _parent2, _scopeId));
            } else {
              _push2(`<div${_scopeId}></div>`);
            }
          } else {
            return [
              unref(isCollapse) ? (openBlock(), createBlock(_component_LayoutSidebarButton, {
                key: 0,
                onClick: ($event) => isCollapse.value = !unref(isCollapse)
              }, null, 8, ["onClick"])) : createCommentVNode("", true),
              !unref(device).isMobile ? (openBlock(), createBlock(_component_LayoutBreadcrumb, { key: 1 })) : (openBlock(), createBlock("div", { key: 2 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LayoutHeaderUser, null, null, _parent));
      _push(`</header><main>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</main></article><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-DZ79CgeQ.mjs.map
