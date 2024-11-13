import { defineComponent, computed, unref, openBlock, createElementBlock, normalizeClass, withModifiers, createBlock, Transition, withCtx, withDirectives, createElementVNode, createVNode, vShow, createCommentVNode, normalizeStyle, renderSlot, Fragment, renderList, toDisplayString, useSSRContext, getCurrentInstance, useSlots, ref, watch, shallowRef, provide, inject, createTextVNode, mergeProps, isVNode } from 'vue';
import { c as buildProps, g as useNamespace, h as useLocale, q as ElIcon, z as arrow_left_default, A as arrow_right_default, w as withInstall, bc as withNoopInstall, _ as _export_sfc$1, F as isNumber, v as _export_sfc, E as ElConfigProvider, b as ElButton } from './server.mjs';
import { throttle } from 'lodash-unified';
import { f as flattedChildren } from './vnode-Cs2GWOIH.mjs';
import { isString } from '@vue/shared';
import { E as ElDatePicker } from './index-CHLlcSZJ.mjs';
import { E as ElDivider } from './index-Bhsu9wGt.mjs';
import { E as ElCard, _ as __nuxt_component_5 } from './doughnut-BAo8Tv3m.mjs';
import { E as ElTable, a as ElTableColumn } from './index-CNyejJdT.mjs';
import { E as ElTag } from './index-C5xdxGlv.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { z as zhCn } from './zh-cn-htd4_pmu.mjs';
import { u as useTaskStore } from './index-Dnjjt4iK.mjs';
import '../_/nitro.mjs';
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
import '@ctrl/tinycolor';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';
import './index-BtYbkZRz.mjs';
import './index-DUiHV-eU.mjs';
import './index-CZuFgaK7.mjs';
import './client-only-DO9VxlB2.mjs';
import 'zrender/lib/core/PathProxy.js';
import 'zrender/lib/contain/util.js';
import 'zrender/lib/core/curve.js';
import './index-FojM7Bi4.mjs';
import 'normalize-wheel-es';

const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    var _a;
    return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
  });
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p) => !!p);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};
const carouselProps = buildProps({
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: String,
    default: ""
  },
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3e3
  },
  indicatorPosition: {
    type: String,
    values: ["", "none", "outside"],
    default: ""
  },
  arrow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "hover"
  },
  type: {
    type: String,
    values: ["", "card"],
    default: ""
  },
  cardScale: {
    type: Number,
    default: 0.83
  },
  loop: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  motionBlur: Boolean
});
const carouselEmits = {
  change: (current, prev) => [current, prev].every(isNumber)
};
const carouselContextKey = Symbol("carouselContextKey");
const CAROUSEL_ITEM_NAME = "ElCarouselItem";
const THROTTLE_TIME = 300;
const useCarousel = (props, emit, componentName) => {
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem
  } = useOrderedChildren(getCurrentInstance(), CAROUSEL_ITEM_NAME);
  const slots = useSlots();
  const activeIndex = ref(-1);
  const timer = ref(null);
  const hover = ref(false);
  const root = ref();
  const containerHeight = ref(0);
  const isItemsTwoLength = ref(true);
  const isFirstCall = ref(true);
  const isTransitioning = ref(false);
  const arrowDisplay = computed(() => props.arrow !== "never" && !unref(isVertical));
  const hasLabel = computed(() => {
    return items.value.some((item) => item.props.label.toString().length > 0);
  });
  const isCardType = computed(() => props.type === "card");
  const isVertical = computed(() => props.direction === "vertical");
  const containerStyle = computed(() => {
    if (props.height !== "auto") {
      return {
        height: props.height
      };
    }
    return {
      height: `${containerHeight.value}px`,
      overflow: "hidden"
    };
  });
  const throttledArrowClick = throttle((index2) => {
    setActiveItem(index2);
  }, THROTTLE_TIME, { trailing: true });
  const throttledIndicatorHover = throttle((index2) => {
    handleIndicatorHover(index2);
  }, THROTTLE_TIME);
  const isTwoLengthShow = (index2) => {
    if (!isItemsTwoLength.value)
      return true;
    return activeIndex.value <= 1 ? index2 <= 1 : index2 > 1;
  };
  function pauseTimer() {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  }
  function startTimer() {
    if (props.interval <= 0 || !props.autoplay || timer.value)
      return;
    timer.value = setInterval(() => playSlides(), props.interval);
  }
  const playSlides = () => {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (activeIndex.value < items.value.length - 1) {
      activeIndex.value = activeIndex.value + 1;
    } else if (props.loop) {
      activeIndex.value = 0;
    } else {
      isTransitioning.value = false;
    }
  };
  function setActiveItem(index2) {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (isString(index2)) {
      const filteredItems = items.value.filter((item) => item.props.name === index2);
      if (filteredItems.length > 0) {
        index2 = items.value.indexOf(filteredItems[0]);
      }
    }
    index2 = Number(index2);
    if (Number.isNaN(index2) || index2 !== Math.floor(index2)) {
      return;
    }
    const itemCount = items.value.length;
    const oldIndex = activeIndex.value;
    if (index2 < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0;
    } else if (index2 >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1;
    } else {
      activeIndex.value = index2;
    }
    if (oldIndex === activeIndex.value) {
      resetItemPosition(oldIndex);
    }
    resetTimer();
  }
  function resetItemPosition(oldIndex) {
    items.value.forEach((item, index2) => {
      item.translateItem(index2, activeIndex.value, oldIndex);
    });
  }
  function itemInStage(item, index2) {
    var _a, _b, _c, _d;
    const _items = unref(items);
    const itemCount = _items.length;
    if (itemCount === 0 || !item.states.inStage)
      return false;
    const nextItemIndex = index2 + 1;
    const prevItemIndex = index2 - 1;
    const lastItemIndex = itemCount - 1;
    const isLastItemActive = _items[lastItemIndex].states.active;
    const isFirstItemActive = _items[0].states.active;
    const isNextItemActive = (_b = (_a = _items[nextItemIndex]) == null ? void 0 : _a.states) == null ? void 0 : _b.active;
    const isPrevItemActive = (_d = (_c = _items[prevItemIndex]) == null ? void 0 : _c.states) == null ? void 0 : _d.active;
    if (index2 === lastItemIndex && isFirstItemActive || isNextItemActive) {
      return "left";
    } else if (index2 === 0 && isLastItemActive || isPrevItemActive) {
      return "right";
    }
    return false;
  }
  function handleMouseEnter() {
    hover.value = true;
    if (props.pauseOnHover) {
      pauseTimer();
    }
  }
  function handleMouseLeave() {
    hover.value = false;
    startTimer();
  }
  function handleTransitionEnd() {
    isTransitioning.value = false;
  }
  function handleButtonEnter(arrow) {
    if (unref(isVertical))
      return;
    items.value.forEach((item, index2) => {
      if (arrow === itemInStage(item, index2)) {
        item.states.hover = true;
      }
    });
  }
  function handleButtonLeave() {
    if (unref(isVertical))
      return;
    items.value.forEach((item) => {
      item.states.hover = false;
    });
  }
  function handleIndicatorClick(index2) {
    if (index2 !== activeIndex.value) {
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
    activeIndex.value = index2;
  }
  function handleIndicatorHover(index2) {
    if (props.trigger === "hover" && index2 !== activeIndex.value) {
      activeIndex.value = index2;
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
  }
  function prev() {
    setActiveItem(activeIndex.value - 1);
  }
  function next() {
    setActiveItem(activeIndex.value + 1);
  }
  function resetTimer() {
    pauseTimer();
    if (!props.pauseOnHover)
      startTimer();
  }
  function setContainerHeight(height) {
    if (props.height !== "auto")
      return;
    containerHeight.value = height;
  }
  function PlaceholderItem() {
    var _a;
    const defaultSlots = (_a = slots.default) == null ? void 0 : _a.call(slots);
    if (!defaultSlots)
      return null;
    const flatSlots = flattedChildren(defaultSlots);
    const normalizeSlots = flatSlots.filter((slot) => {
      return isVNode(slot) && slot.type.name === CAROUSEL_ITEM_NAME;
    });
    if ((normalizeSlots == null ? void 0 : normalizeSlots.length) === 2 && props.loop && !isCardType.value) {
      isItemsTwoLength.value = true;
      return normalizeSlots;
    }
    isItemsTwoLength.value = false;
    return null;
  }
  watch(() => activeIndex.value, (current, prev2) => {
    resetItemPosition(prev2);
    if (isItemsTwoLength.value) {
      current = current % 2;
      prev2 = prev2 % 2;
    }
    if (prev2 > -1) {
      emit("change", current, prev2);
    }
  });
  watch(() => props.autoplay, (autoplay) => {
    autoplay ? startTimer() : pauseTimer();
  });
  watch(() => props.loop, () => {
    setActiveItem(activeIndex.value);
  });
  watch(() => props.interval, () => {
    resetTimer();
  });
  shallowRef();
  provide(carouselContextKey, {
    root,
    isCardType,
    isVertical,
    items,
    loop: props.loop,
    cardScale: props.cardScale,
    addItem,
    removeItem,
    setActiveItem,
    setContainerHeight
  });
  return {
    root,
    activeIndex,
    arrowDisplay,
    hasLabel,
    hover,
    isCardType,
    isTransitioning,
    items,
    isVertical,
    containerStyle,
    isItemsTwoLength,
    handleButtonEnter,
    handleTransitionEnd,
    handleButtonLeave,
    handleIndicatorClick,
    handleMouseEnter,
    handleMouseLeave,
    setActiveItem,
    prev,
    next,
    PlaceholderItem,
    isTwoLengthShow,
    throttledArrowClick,
    throttledIndicatorHover
  };
};
const COMPONENT_NAME = "ElCarousel";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: carouselProps,
  emits: carouselEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      root,
      activeIndex,
      arrowDisplay,
      hasLabel,
      hover,
      isCardType,
      items,
      isVertical,
      containerStyle,
      handleButtonEnter,
      handleButtonLeave,
      isTransitioning,
      handleIndicatorClick,
      handleMouseEnter,
      handleMouseLeave,
      handleTransitionEnd,
      setActiveItem,
      prev,
      next,
      PlaceholderItem,
      isTwoLengthShow,
      throttledArrowClick,
      throttledIndicatorHover
    } = useCarousel(props, emit);
    const ns = useNamespace("carousel");
    const { t } = useLocale();
    const carouselClasses = computed(() => {
      const classes = [ns.b(), ns.m(props.direction)];
      if (unref(isCardType)) {
        classes.push(ns.m("card"));
      }
      return classes;
    });
    const carouselContainer = computed(() => {
      const classes = [ns.e("container")];
      if (props.motionBlur && unref(isTransitioning) && items.value.length > 1) {
        classes.push(unref(isVertical) ? `${ns.namespace.value}-transitioning-vertical` : `${ns.namespace.value}-transitioning`);
      }
      return classes;
    });
    const indicatorsClasses = computed(() => {
      const classes = [ns.e("indicators"), ns.em("indicators", props.direction)];
      if (unref(hasLabel)) {
        classes.push(ns.em("indicators", "labels"));
      }
      if (props.indicatorPosition === "outside") {
        classes.push(ns.em("indicators", "outside"));
      }
      if (unref(isVertical)) {
        classes.push(ns.em("indicators", "right"));
      }
      return classes;
    });
    expose({
      activeIndex,
      setActiveItem,
      prev,
      next
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root,
        class: normalizeClass(unref(carouselClasses)),
        onMouseenter: withModifiers(unref(handleMouseEnter), ["stop"]),
        onMouseleave: withModifiers(unref(handleMouseLeave), ["stop"])
      }, [
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 0,
          name: "carousel-arrow-left",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "left")]),
              "aria-label": unref(t)("el.carousel.leftArrow"),
              onMouseenter: ($event) => unref(handleButtonEnter)("left"),
              onMouseleave: unref(handleButtonLeave),
              onClick: withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) - 1), ["stop"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_left_default))
                ]),
                _: 1
              })
            ], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) > 0)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 1,
          name: "carousel-arrow-right",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "right")]),
              "aria-label": unref(t)("el.carousel.rightArrow"),
              onMouseenter: ($event) => unref(handleButtonEnter)("right"),
              onMouseleave: unref(handleButtonLeave),
              onClick: withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) + 1), ["stop"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_right_default))
                ]),
                _: 1
              })
            ], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) < unref(items).length - 1)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(carouselContainer)),
          style: normalizeStyle(unref(containerStyle)),
          onTransitionend: unref(handleTransitionEnd)
        }, [
          createVNode(unref(PlaceholderItem)),
          renderSlot(_ctx.$slots, "default")
        ], 46, ["onTransitionend"]),
        _ctx.indicatorPosition !== "none" ? (openBlock(), createElementBlock("ul", {
          key: 2,
          class: normalizeClass(unref(indicatorsClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item, index2) => {
            return withDirectives((openBlock(), createElementBlock("li", {
              key: index2,
              class: normalizeClass([
                unref(ns).e("indicator"),
                unref(ns).em("indicator", _ctx.direction),
                unref(ns).is("active", index2 === unref(activeIndex))
              ]),
              onMouseenter: ($event) => unref(throttledIndicatorHover)(index2),
              onClick: withModifiers(($event) => unref(handleIndicatorClick)(index2), ["stop"])
            }, [
              createElementVNode("button", {
                class: normalizeClass(unref(ns).e("button")),
                "aria-label": unref(t)("el.carousel.indicator", { index: index2 + 1 })
              }, [
                unref(hasLabel) ? (openBlock(), createElementBlock("span", { key: 0 }, toDisplayString(item.props.label), 1)) : createCommentVNode("v-if", true)
              ], 10, ["aria-label"])
            ], 42, ["onMouseenter", "onClick"])), [
              [vShow, unref(isTwoLengthShow)(index2)]
            ]);
          }), 128))
        ], 2)) : createCommentVNode("v-if", true),
        props.motionBlur ? (openBlock(), createElementBlock("svg", {
          key: 3,
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          style: { "display": "none" }
        }, [
          createElementVNode("defs", null, [
            createElementVNode("filter", { id: "elCarouselHorizontal" }, [
              createElementVNode("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "12,0"
              })
            ]),
            createElementVNode("filter", { id: "elCarouselVertical" }, [
              createElementVNode("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "0,10"
              })
            ])
          ])
        ])) : createCommentVNode("v-if", true)
      ], 42, ["onMouseenter", "onMouseleave"]);
    };
  }
});
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "carousel.vue"]]);
const carouselItemProps = buildProps({
  name: { type: String, default: "" },
  label: {
    type: [String, Number],
    default: ""
  }
});
const useCarouselItem = (props) => {
  const carouselContext = inject(carouselContextKey);
  const instance = getCurrentInstance();
  const carouselItemRef = ref();
  const hover = ref(false);
  const translate = ref(0);
  const scale = ref(1);
  const active = ref(false);
  const ready = ref(false);
  const inStage = ref(false);
  const animating = ref(false);
  const { isCardType, isVertical, cardScale } = carouselContext;
  function handleItemClick() {
    if (carouselContext && unref(isCardType)) {
      const index2 = carouselContext.items.value.findIndex(({ uid }) => uid === instance.uid);
      carouselContext.setActiveItem(index2);
    }
  }
  return {
    carouselItemRef,
    active,
    animating,
    hover,
    inStage,
    isVertical,
    translate,
    isCardType,
    scale,
    ready,
    handleItemClick
  };
};
const __default__ = defineComponent({
  name: CAROUSEL_ITEM_NAME
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: carouselItemProps,
  setup(__props) {
    const ns = useNamespace("carousel");
    const {
      carouselItemRef,
      active,
      animating,
      hover,
      inStage,
      isVertical,
      translate,
      isCardType,
      scale,
      ready,
      handleItemClick
    } = useCarouselItem();
    const itemKls = computed(() => [
      ns.e("item"),
      ns.is("active", active.value),
      ns.is("in-stage", inStage.value),
      ns.is("hover", hover.value),
      ns.is("animating", animating.value),
      {
        [ns.em("item", "card")]: isCardType.value,
        [ns.em("item", "card-vertical")]: isCardType.value && isVertical.value
      }
    ]);
    const itemStyle = computed(() => {
      const translateType = `translate${unref(isVertical) ? "Y" : "X"}`;
      const _translate = `${translateType}(${unref(translate)}px)`;
      const _scale = `scale(${unref(scale)})`;
      const transform = [_translate, _scale].join(" ");
      return {
        transform
      };
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "carouselItemRef",
        ref: carouselItemRef,
        class: normalizeClass(unref(itemKls)),
        style: normalizeStyle(unref(itemStyle)),
        onClick: unref(handleItemClick)
      }, [
        unref(isCardType) ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("mask"))
        }, null, 2)), [
          [vShow, !unref(active)]
        ]) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 14, ["onClick"])), [
        [vShow, unref(ready)]
      ]);
    };
  }
});
var CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "carousel-item.vue"]]);
const ElCarousel = withInstall(Carousel, {
  CarouselItem
});
const ElCarouselItem = withNoopInstall(CarouselItem);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "main3",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = ref(zhCn);
    const value1 = ref("");
    const value2 = ref("");
    const chartData1 = ref([
      { value: 1048, name: "\u56FD\u4F01" },
      { value: 735, name: "\u6709\u9650\u8D23\u4EFB\u516C\u53F8" },
      { value: 580, name: "\u79C1\u8425\u4F01\u4E1A" },
      { value: 484, name: "\u5176\u4ED6" }
    ]);
    const chartData2 = ref([
      { value: 1058, name: "\u539F\u56E01" },
      { value: 695, name: "\u539F\u56E02" },
      { value: 824, name: "\u539F\u56E03" },
      { value: 579, name: "\u539F\u56E04" },
      { value: 912, name: "\u539F\u56E05" },
      { value: 663, name: "\u539F\u56E06" }
    ]);
    const updateChartData = () => {
      chartData1.value = [
        { value: 148, name: "\u79D1\u6280\u516C\u53F8" },
        { value: 835, name: "\u6559\u80B2\u673A\u6784" },
        { value: 60, name: "\u91D1\u878D\u673A\u6784" },
        { value: 584, name: "\u975E\u76C8\u5229\u7EC4\u7EC7" }
      ];
    };
    ref("");
    useTaskStore();
    const tableData = ref([
      {
        title: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1",
        version: "v1.3",
        status: "\u8FDB\u884C\u4E2D",
        approver: "\u8463\u5148\u660E",
        createTime: 16772856e5,
        deadline: 16798776e5,
        subtasknum: "4",
        attachments: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1.pdf"
      }
    ]);
    const getTagType = (status) => {
      switch (status) {
        case "\u8FDB\u884C\u4E2D":
          return "success";
        case "\u5DF2\u5B8C\u6210":
          return "primary";
        case "\u5F85\u5F00\u59CB":
          return "info";
        case "\u5DF2\u622A\u6B62":
          return "danger";
        default:
          return "warning";
      }
    };
    const filterStatus = (value, row) => {
      return row.status === value;
    };
    const getTagText = (status) => {
      switch (status) {
        case "\u8FDB\u884C\u4E2D":
          return "\u8FDB\u884C\u4E2D";
        case "\u5DF2\u5B8C\u6210":
          return "\u5DF2\u5B8C\u6210";
        case "\u5F85\u5F00\u59CB":
          return "\u5F85\u5F00\u59CB";
        case "\u5DF2\u622A\u6B62":
          return "\u5DF2\u622A\u6B62";
        default:
          return "\u672A\u77E5";
      }
    };
    const formatDate = (timestamp) => {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    };
    const tableHeaderStyle = {
      backgroundColor: "#f0f0f0",
      color: "#000000",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "14px",
      padding: "12px",
      borderRadius: "4px 4px 0 0",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
    };
    const showTaskDetail = (row, col, event) => {
    };
    const detailTaskClick = (task) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_config_provider = ElConfigProvider;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_button = ElButton;
      const _component_el_divider = ElDivider;
      const _component_el_card = ElCard;
      const _component_EchartDoughnut = __nuxt_component_5;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_tag = ElTag;
      _push(`<!--[--><div class="flex justify-between items-center"><div class="text-2xl font-bold italic text-blue-600">\u4EFB\u52A1\u770B\u677F</div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_el_config_provider, { locale: locale.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_date_picker, {
              modelValue: value1.value,
              "onUpdate:modelValue": ($event) => value1.value = $event,
              type: "date",
              placeholder: "\u8D77\u59CB\u65F6\u95F4",
              locale: locale.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_date_picker, {
              modelValue: value2.value,
              "onUpdate:modelValue": ($event) => value2.value = $event,
              type: "date",
              placeholder: "\u7ED3\u675F\u65F6\u95F4",
              locale: locale.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_date_picker, {
                modelValue: value1.value,
                "onUpdate:modelValue": ($event) => value1.value = $event,
                type: "date",
                placeholder: "\u8D77\u59CB\u65F6\u95F4",
                locale: locale.value
              }, null, 8, ["modelValue", "onUpdate:modelValue", "locale"]),
              createVNode(_component_el_date_picker, {
                modelValue: value2.value,
                "onUpdate:modelValue": ($event) => value2.value = $event,
                type: "date",
                placeholder: "\u7ED3\u675F\u65F6\u95F4",
                locale: locale.value
              }, null, 8, ["modelValue", "onUpdate:modelValue", "locale"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: updateChartData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u641C\u7D22`);
          } else {
            return [
              createTextVNode("\u641C\u7D22")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_divider, { style: { "margin": "10px 0" } }, null, _parent));
      _push(`<div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6">`);
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#4ea5ff", "margin": "10px", "border-radius": "8px", "padding": "5px", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-2xl"${_scopeId}>\u5DF2\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-3xl mb-3"${_scopeId}>15</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-2xl" }, "\u5DF2\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-3xl mb-3" }, "15")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#fea500", "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-xl mb-3 mt-3"${_scopeId}>\u672A\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-xl mb-1"${_scopeId}>1</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-xl mb-3 mt-3" }, "\u672A\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-xl mb-1" }, "1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#fe5500", "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-xl mb-3 mt-3"${_scopeId}>\u903E\u671F\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-xl mb-1"${_scopeId}>5</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-xl mb-3 mt-3" }, "\u903E\u671F\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-xl mb-1" }, "5")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_card, {
        class: "col-span-2 lg:col-span-2 bg-gray-100",
        style: { "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-semibold text-gray-700"${_scopeId}>\u903E\u671F\u4F9B\u5E94\u5546\u7C7B\u578B</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EchartDoughnut, {
              width: "460px",
              height: "180px",
              data: chartData1.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-semibold text-gray-700" }, "\u903E\u671F\u4F9B\u5E94\u5546\u7C7B\u578B"),
              createVNode(_component_el_divider, { style: { "margin": "0 0" } }),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_component_EchartDoughnut, {
                  width: "460px",
                  height: "180px",
                  data: chartData1.value
                }, null, 8, ["data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_card, {
        class: "col-span-2 lg:col-span-2 bg-gray-100",
        style: { "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-semibold text-gray-700"${_scopeId}>\u903E\u671F\u539F\u56E0</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EchartDoughnut, {
              width: "460px",
              height: "180px",
              data: chartData2.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-semibold text-gray-700" }, "\u903E\u671F\u539F\u56E0"),
              createVNode(_component_el_divider, { style: { "margin": "0 0" } }),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_component_EchartDoughnut, {
                  width: "460px",
                  height: "180px",
                  data: chartData2.value
                }, null, 8, ["data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_divider, { style: { "margin": "10px 0" } }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_el_config_provider, { locale: locale.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table, {
              data: tableData.value,
              border: "",
              style: { "width": "100%" },
              "header-cell-style": tableHeaderStyle,
              onRowDblclick: showTaskDetail
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "title",
                    label: "\u4EFB\u52A1\u540D\u79F0",
                    "min-width": "8%",
                    align: "center"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "version",
                    label: "\u4EFB\u52A1\u7248\u672C",
                    "min-width": "6%",
                    align: "center"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "status",
                    label: "\u4EFB\u52A1\u72B6\u6001 ",
                    "min-width": "7%",
                    filters: [
                      { text: "\u8FDB\u884C\u4E2D", value: "\u8FDB\u884C\u4E2D" },
                      { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" },
                      { text: "\u5F85\u5F00\u59CB", value: "\u5F85\u5F00\u59CB" },
                      { text: "\u5DF2\u622A\u6B62", value: "\u5DF2\u622A\u6B62" }
                    ],
                    "filter-method": filterStatus,
                    "filter-placement": "bottom-end"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_tag, {
                          type: getTagType(scope.row.status),
                          "disable-transitions": ""
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(getTagText(scope.row.status))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(getTagText(scope.row.status)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_tag, {
                            type: getTagType(scope.row.status),
                            "disable-transitions": ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(getTagText(scope.row.status)), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "approver",
                    label: "\u5BA1\u6279\u4EBA",
                    "min-width": "5%"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "createTime",
                    label: "\u521B\u5EFA\u65F6\u95F4",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(formatDate(scope.row.createTime))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "deadline",
                    label: "\u622A\u6B62\u65F6\u95F4",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(formatDate(scope.row.deadline))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(formatDate(scope.row.deadline)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "subtasknum",
                    label: "\u5F53\u524D\u5B50\u4EFB\u52A1\u6570\u91CF",
                    "min-width": "13%",
                    align: "center"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "attachments",
                    label: "\u4EFB\u52A1\u9644\u4EF6",
                    "min-width": "15%",
                    align: "center"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) ;
                      else {
                        return [];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "operation",
                    fixed: "right",
                    label: "\u64CD\u4F5C",
                    "min-width": "10%"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          link: "",
                          type: "primary",
                          size: "small",
                          onClick: ($event) => detailTaskClick(scope.row)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u8BE6\u7EC6 `);
                            } else {
                              return [
                                createTextVNode(" \u8BE6\u7EC6 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_button, {
                          link: "",
                          type: "primary",
                          size: "small"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u53D6\u6D88`);
                            } else {
                              return [
                                createTextVNode("\u53D6\u6D88")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            link: "",
                            type: "primary",
                            size: "small",
                            onClick: ($event) => detailTaskClick(scope.row)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u8BE6\u7EC6 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_el_button, {
                            link: "",
                            type: "primary",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D6\u6D88")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_table_column, {
                      prop: "title",
                      label: "\u4EFB\u52A1\u540D\u79F0",
                      "min-width": "8%",
                      align: "center"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "version",
                      label: "\u4EFB\u52A1\u7248\u672C",
                      "min-width": "6%",
                      align: "center"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "status",
                      label: "\u4EFB\u52A1\u72B6\u6001 ",
                      "min-width": "7%",
                      filters: [
                        { text: "\u8FDB\u884C\u4E2D", value: "\u8FDB\u884C\u4E2D" },
                        { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" },
                        { text: "\u5F85\u5F00\u59CB", value: "\u5F85\u5F00\u59CB" },
                        { text: "\u5DF2\u622A\u6B62", value: "\u5DF2\u622A\u6B62" }
                      ],
                      "filter-method": filterStatus,
                      "filter-placement": "bottom-end"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_tag, {
                          type: getTagType(scope.row.status),
                          "disable-transitions": ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getTagText(scope.row.status)), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "approver",
                      label: "\u5BA1\u6279\u4EBA",
                      "min-width": "5%"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "createTime",
                      label: "\u521B\u5EFA\u65F6\u95F4",
                      "min-width": "10%",
                      align: "center"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "deadline",
                      label: "\u622A\u6B62\u65F6\u95F4",
                      "min-width": "10%",
                      align: "center"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(formatDate(scope.row.deadline)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "subtasknum",
                      label: "\u5F53\u524D\u5B50\u4EFB\u52A1\u6570\u91CF",
                      "min-width": "13%",
                      align: "center"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "attachments",
                      label: "\u4EFB\u52A1\u9644\u4EF6",
                      "min-width": "15%",
                      align: "center"
                    }, {
                      default: withCtx((scope) => []),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "operation",
                      fixed: "right",
                      label: "\u64CD\u4F5C",
                      "min-width": "10%"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_button, {
                          link: "",
                          type: "primary",
                          size: "small",
                          onClick: ($event) => detailTaskClick(scope.row)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u8BE6\u7EC6 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_el_button, {
                          link: "",
                          type: "primary",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u53D6\u6D88")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table, {
                data: tableData.value,
                border: "",
                style: { "width": "100%" },
                "header-cell-style": tableHeaderStyle,
                onRowDblclick: showTaskDetail
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_table_column, {
                    prop: "title",
                    label: "\u4EFB\u52A1\u540D\u79F0",
                    "min-width": "8%",
                    align: "center"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "version",
                    label: "\u4EFB\u52A1\u7248\u672C",
                    "min-width": "6%",
                    align: "center"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "status",
                    label: "\u4EFB\u52A1\u72B6\u6001 ",
                    "min-width": "7%",
                    filters: [
                      { text: "\u8FDB\u884C\u4E2D", value: "\u8FDB\u884C\u4E2D" },
                      { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" },
                      { text: "\u5F85\u5F00\u59CB", value: "\u5F85\u5F00\u59CB" },
                      { text: "\u5DF2\u622A\u6B62", value: "\u5DF2\u622A\u6B62" }
                    ],
                    "filter-method": filterStatus,
                    "filter-placement": "bottom-end"
                  }, {
                    default: withCtx((scope) => [
                      createVNode(_component_el_tag, {
                        type: getTagType(scope.row.status),
                        "disable-transitions": ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getTagText(scope.row.status)), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "approver",
                    label: "\u5BA1\u6279\u4EBA",
                    "min-width": "5%"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "createTime",
                    label: "\u521B\u5EFA\u65F6\u95F4",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "deadline",
                    label: "\u622A\u6B62\u65F6\u95F4",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(formatDate(scope.row.deadline)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "subtasknum",
                    label: "\u5F53\u524D\u5B50\u4EFB\u52A1\u6570\u91CF",
                    "min-width": "13%",
                    align: "center"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "attachments",
                    label: "\u4EFB\u52A1\u9644\u4EF6",
                    "min-width": "15%",
                    align: "center"
                  }, {
                    default: withCtx((scope) => []),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "operation",
                    fixed: "right",
                    label: "\u64CD\u4F5C",
                    "min-width": "10%"
                  }, {
                    default: withCtx((scope) => [
                      createVNode(_component_el_button, {
                        link: "",
                        type: "primary",
                        size: "small",
                        onClick: ($event) => detailTaskClick(scope.row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u8BE6\u7EC6 ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_el_button, {
                        link: "",
                        type: "primary",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["data"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/main3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "sub",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = ref(zhCn);
    const value1 = ref("");
    const value2 = ref("");
    const chartData1 = ref([
      { value: 1048, name: "\u56FD\u4F01" },
      { value: 735, name: "\u6709\u9650\u8D23\u4EFB\u516C\u53F8" },
      { value: 580, name: "\u79C1\u8425\u4F01\u4E1A" },
      { value: 484, name: "\u5176\u4ED6" }
    ]);
    const chartData2 = ref([
      { value: 1058, name: "\u539F\u56E01" },
      { value: 695, name: "\u539F\u56E02" },
      { value: 824, name: "\u539F\u56E03" },
      { value: 579, name: "\u539F\u56E04" },
      { value: 912, name: "\u539F\u56E05" },
      { value: 663, name: "\u539F\u56E06" }
    ]);
    const updateChartData = () => {
      chartData1.value = [
        { value: 148, name: "\u79D1\u6280\u516C\u53F8" },
        { value: 835, name: "\u6559\u80B2\u673A\u6784" },
        { value: 60, name: "\u91D1\u878D\u673A\u6784" },
        { value: 584, name: "\u975E\u76C8\u5229\u7EC4\u7EC7" }
      ];
    };
    const tableData = ref([
      {
        taskName: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1",
        taskVersion: "v1.0",
        taskStatus: "\u8FDB\u884C\u4E2D",
        approver: "\u5F20\u6653\u5CF0",
        createTime: (/* @__PURE__ */ new Date("2024-03-10")).getTime(),
        deadline: (/* @__PURE__ */ new Date("2024-03-20")).getTime(),
        supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
        projectStatus: "\u8FDB\u884C\u4E2D"
      },
      {
        taskName: "\u9F7F\u8F6E\u7BB1\u5F3A\u5EA6\u8BA1\u7B97",
        taskVersion: "v1.1",
        taskStatus: "\u5F85\u5F00\u59CB",
        approver: "\u5F20\u6653\u5CF0",
        createTime: (/* @__PURE__ */ new Date("2024-03-25")).getTime(),
        deadline: (/* @__PURE__ */ new Date("2024-04-15")).getTime(),
        supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
        projectStatus: "\u5F85\u5F00\u59CB"
      },
      {
        taskName: "\u9F7F\u8F6E\u7BB1\u673A\u52A0\u5DE5\u5DE5\u827A\u5206\u6790",
        taskVersion: "v1.0",
        taskStatus: "\u5F85\u5F00\u59CB",
        approver: "\u5F20\u6653\u5CF0",
        createTime: (/* @__PURE__ */ new Date("2024-04-08")).getTime(),
        deadline: (/* @__PURE__ */ new Date("2024-04-20")).getTime(),
        supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
        projectStatus: "\u5F85\u5F00\u59CB"
      },
      {
        taskName: "\u7C7B\u4F3C\u7ED3\u6784\u9F7F\u8F6E\u7BB1\u95EE\u9898\u53CD\u9988",
        taskVersion: "v1.2",
        taskStatus: "\u5F85\u5F00\u59CB",
        approver: "\u5F20\u6653\u5CF0",
        createTime: (/* @__PURE__ */ new Date("2024-04-20")).getTime(),
        deadline: (/* @__PURE__ */ new Date("2024-04-30")).getTime(),
        supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
        projectStatus: "\u5F85\u5F00\u59CB"
      }
    ]);
    const getTagType = (status) => {
      switch (status) {
        case "\u8FDB\u884C\u4E2D":
          return "success";
        case "\u5DF2\u5B8C\u6210":
          return "primary";
        case "\u5F85\u5F00\u59CB":
          return "info";
        case "\u5DF2\u622A\u6B62":
          return "danger";
        default:
          return "warning";
      }
    };
    const getTagText = (status) => {
      switch (status) {
        case "\u8FDB\u884C\u4E2D":
          return "\u8FDB\u884C\u4E2D";
        case "\u5DF2\u5B8C\u6210":
          return "\u5DF2\u5B8C\u6210";
        case "\u5F85\u5F00\u59CB":
          return "\u5F85\u5F00\u59CB";
        case "\u5DF2\u622A\u6B62":
          return "\u5DF2\u622A\u6B62";
        default:
          return "\u672A\u77E5";
      }
    };
    const filterStatus = (value, row) => {
      return row.taskStatus === value;
    };
    const filterProjectStatus = (value, row) => {
      return row.projectStatus === value;
    };
    const formatDate = (timestamp) => {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    };
    const tableHeaderStyle = {
      backgroundColor: "#f0f0f0",
      color: "#000000",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "14px",
      padding: "12px",
      borderRadius: "4px 4px 0 0",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
    };
    const showTaskDetail = (row, col, event) => {
    };
    const detailTaskClick = (task) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_config_provider = ElConfigProvider;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_button = ElButton;
      const _component_el_divider = ElDivider;
      const _component_el_card = ElCard;
      const _component_EchartDoughnut = __nuxt_component_5;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_tag = ElTag;
      _push(`<!--[--><div class="flex justify-between items-center"><div class="text-2xl font-bold italic text-blue-600">\u5B50\u4EFB\u52A1\u770B\u677F</div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_el_config_provider, { locale: locale.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_date_picker, {
              modelValue: value1.value,
              "onUpdate:modelValue": ($event) => value1.value = $event,
              type: "date",
              placeholder: "\u8D77\u59CB\u65F6\u95F4",
              locale: locale.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_date_picker, {
              modelValue: value2.value,
              "onUpdate:modelValue": ($event) => value2.value = $event,
              type: "date",
              placeholder: "\u7ED3\u675F\u65F6\u95F4",
              locale: locale.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_date_picker, {
                modelValue: value1.value,
                "onUpdate:modelValue": ($event) => value1.value = $event,
                type: "date",
                placeholder: "\u8D77\u59CB\u65F6\u95F4",
                locale: locale.value
              }, null, 8, ["modelValue", "onUpdate:modelValue", "locale"]),
              createVNode(_component_el_date_picker, {
                modelValue: value2.value,
                "onUpdate:modelValue": ($event) => value2.value = $event,
                type: "date",
                placeholder: "\u7ED3\u675F\u65F6\u95F4",
                locale: locale.value
              }, null, 8, ["modelValue", "onUpdate:modelValue", "locale"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: updateChartData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u641C\u7D22`);
          } else {
            return [
              createTextVNode("\u641C\u7D22")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_divider, { style: { "margin": "10px 0" } }, null, _parent));
      _push(`<div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6">`);
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#4ea5ff", "margin": "10px", "border-radius": "8px", "padding": "5px", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-2xl"${_scopeId}>\u5DF2\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-3xl mb-3"${_scopeId}>15</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-2xl" }, "\u5DF2\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-3xl mb-3" }, "15")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#fea500", "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-xl mb-3 mt-3"${_scopeId}>\u672A\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-xl mb-1"${_scopeId}>1</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-xl mb-3 mt-3" }, "\u672A\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-xl mb-1" }, "1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#fe5500", "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-xl mb-3 mt-3"${_scopeId}>\u903E\u671F\u5B50\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-xl mb-1"${_scopeId}>5</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-xl mb-3 mt-3" }, "\u903E\u671F\u5B50\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-xl mb-1" }, "5")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_card, {
        class: "col-span-2 lg:col-span-2 bg-gray-100",
        style: { "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-semibold text-gray-700"${_scopeId}>\u903E\u671F\u4F9B\u5E94\u5546\u7C7B\u578B</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EchartDoughnut, {
              width: "460px",
              height: "180px",
              data: chartData1.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-semibold text-gray-700" }, "\u903E\u671F\u4F9B\u5E94\u5546\u7C7B\u578B"),
              createVNode(_component_el_divider, { style: { "margin": "0 0" } }),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_component_EchartDoughnut, {
                  width: "460px",
                  height: "180px",
                  data: chartData1.value
                }, null, 8, ["data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_card, {
        class: "col-span-2 lg:col-span-2 bg-gray-100",
        style: { "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-semibold text-gray-700"${_scopeId}>\u903E\u671F\u539F\u56E0</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EchartDoughnut, {
              width: "460px",
              height: "180px",
              data: chartData2.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-semibold text-gray-700" }, "\u903E\u671F\u539F\u56E0"),
              createVNode(_component_el_divider, { style: { "margin": "0 0" } }),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_component_EchartDoughnut, {
                  width: "460px",
                  height: "180px",
                  data: chartData2.value
                }, null, 8, ["data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_divider, { style: { "margin": "10px 0" } }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_el_config_provider, { locale: locale.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table, {
              data: tableData.value,
              border: "",
              style: { "width": "100%" },
              "header-cell-style": tableHeaderStyle,
              onRowDblclick: showTaskDetail
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "taskName",
                    label: "\u5B50\u4EFB\u52A1\u540D\u79F0",
                    "min-width": "10%",
                    align: "center"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "taskVersion",
                    label: "\u5B50\u4EFB\u52A1\u7248\u672C",
                    "min-width": "10%",
                    align: "center"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "taskStatus",
                    label: "\u4EFB\u52A1\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u8FDB\u884C\u4E2D", value: "\u8FDB\u884C\u4E2D" },
                      { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" },
                      { text: "\u5F85\u5F00\u59CB", value: "\u5F85\u5F00\u59CB" },
                      { text: "\u5DF2\u622A\u6B62", value: "\u5DF2\u622A\u6B62" }
                    ],
                    "filter-method": filterStatus,
                    "filter-placement": "bottom-end",
                    align: "center"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_tag, {
                          type: getTagType(scope.row.taskStatus),
                          "disable-transitions": ""
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(getTagText(scope.row.taskStatus))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(getTagText(scope.row.taskStatus)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_tag, {
                            type: getTagType(scope.row.taskStatus),
                            "disable-transitions": ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(getTagText(scope.row.taskStatus)), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "approver",
                    label: "\u5BA1\u6279\u4EBA",
                    "min-width": "10%",
                    align: "center"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "createTime",
                    label: "\u521B\u5EFA\u65F6\u95F4",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(formatDate(scope.row.createTime))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "deadline",
                    label: "\u622A\u6B62\u65F6\u95F4",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(formatDate(scope.row.deadline))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(formatDate(scope.row.deadline)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "supplier",
                    label: "\u4F9B\u5E94\u5546",
                    "min-width": "20%",
                    align: "center"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "projectStatus",
                    label: "\u9879\u76EE\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u8FDB\u884C\u4E2D", value: "\u8FDB\u884C\u4E2D" },
                      { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" },
                      { text: "\u5F85\u5F00\u59CB", value: "\u5F85\u5F00\u59CB" },
                      { text: "\u5DF2\u622A\u6B62", value: "\u5DF2\u622A\u6B62" }
                    ],
                    "filter-method": filterProjectStatus,
                    "filter-placement": "bottom-end",
                    align: "center"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_tag, {
                          type: getTagType(scope.row.projectStatus),
                          "disable-transitions": ""
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(getTagText(scope.row.projectStatus))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(getTagText(scope.row.projectStatus)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_tag, {
                            type: getTagType(scope.row.projectStatus),
                            "disable-transitions": ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(getTagText(scope.row.projectStatus)), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "operation",
                    fixed: "right",
                    label: "\u64CD\u4F5C",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          link: "",
                          type: "primary",
                          size: "small",
                          onClick: ($event) => detailTaskClick(scope.row)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u8BE6\u7EC6 `);
                            } else {
                              return [
                                createTextVNode(" \u8BE6\u7EC6 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_button, {
                          link: "",
                          type: "primary",
                          size: "small"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u53D6\u6D88`);
                            } else {
                              return [
                                createTextVNode("\u53D6\u6D88")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            link: "",
                            type: "primary",
                            size: "small",
                            onClick: ($event) => detailTaskClick(scope.row)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u8BE6\u7EC6 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_el_button, {
                            link: "",
                            type: "primary",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D6\u6D88")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_table_column, {
                      prop: "taskName",
                      label: "\u5B50\u4EFB\u52A1\u540D\u79F0",
                      "min-width": "10%",
                      align: "center"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "taskVersion",
                      label: "\u5B50\u4EFB\u52A1\u7248\u672C",
                      "min-width": "10%",
                      align: "center"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "taskStatus",
                      label: "\u4EFB\u52A1\u72B6\u6001 ",
                      "min-width": "10%",
                      filters: [
                        { text: "\u8FDB\u884C\u4E2D", value: "\u8FDB\u884C\u4E2D" },
                        { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" },
                        { text: "\u5F85\u5F00\u59CB", value: "\u5F85\u5F00\u59CB" },
                        { text: "\u5DF2\u622A\u6B62", value: "\u5DF2\u622A\u6B62" }
                      ],
                      "filter-method": filterStatus,
                      "filter-placement": "bottom-end",
                      align: "center"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_tag, {
                          type: getTagType(scope.row.taskStatus),
                          "disable-transitions": ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getTagText(scope.row.taskStatus)), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "approver",
                      label: "\u5BA1\u6279\u4EBA",
                      "min-width": "10%",
                      align: "center"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "createTime",
                      label: "\u521B\u5EFA\u65F6\u95F4",
                      "min-width": "10%",
                      align: "center"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "deadline",
                      label: "\u622A\u6B62\u65F6\u95F4",
                      "min-width": "10%",
                      align: "center"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(formatDate(scope.row.deadline)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "supplier",
                      label: "\u4F9B\u5E94\u5546",
                      "min-width": "20%",
                      align: "center"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "projectStatus",
                      label: "\u9879\u76EE\u72B6\u6001 ",
                      "min-width": "10%",
                      filters: [
                        { text: "\u8FDB\u884C\u4E2D", value: "\u8FDB\u884C\u4E2D" },
                        { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" },
                        { text: "\u5F85\u5F00\u59CB", value: "\u5F85\u5F00\u59CB" },
                        { text: "\u5DF2\u622A\u6B62", value: "\u5DF2\u622A\u6B62" }
                      ],
                      "filter-method": filterProjectStatus,
                      "filter-placement": "bottom-end",
                      align: "center"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_tag, {
                          type: getTagType(scope.row.projectStatus),
                          "disable-transitions": ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getTagText(scope.row.projectStatus)), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "operation",
                      fixed: "right",
                      label: "\u64CD\u4F5C",
                      "min-width": "10%",
                      align: "center"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_button, {
                          link: "",
                          type: "primary",
                          size: "small",
                          onClick: ($event) => detailTaskClick(scope.row)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u8BE6\u7EC6 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_el_button, {
                          link: "",
                          type: "primary",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u53D6\u6D88")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table, {
                data: tableData.value,
                border: "",
                style: { "width": "100%" },
                "header-cell-style": tableHeaderStyle,
                onRowDblclick: showTaskDetail
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_table_column, {
                    prop: "taskName",
                    label: "\u5B50\u4EFB\u52A1\u540D\u79F0",
                    "min-width": "10%",
                    align: "center"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "taskVersion",
                    label: "\u5B50\u4EFB\u52A1\u7248\u672C",
                    "min-width": "10%",
                    align: "center"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "taskStatus",
                    label: "\u4EFB\u52A1\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u8FDB\u884C\u4E2D", value: "\u8FDB\u884C\u4E2D" },
                      { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" },
                      { text: "\u5F85\u5F00\u59CB", value: "\u5F85\u5F00\u59CB" },
                      { text: "\u5DF2\u622A\u6B62", value: "\u5DF2\u622A\u6B62" }
                    ],
                    "filter-method": filterStatus,
                    "filter-placement": "bottom-end",
                    align: "center"
                  }, {
                    default: withCtx((scope) => [
                      createVNode(_component_el_tag, {
                        type: getTagType(scope.row.taskStatus),
                        "disable-transitions": ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getTagText(scope.row.taskStatus)), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "approver",
                    label: "\u5BA1\u6279\u4EBA",
                    "min-width": "10%",
                    align: "center"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "createTime",
                    label: "\u521B\u5EFA\u65F6\u95F4",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "deadline",
                    label: "\u622A\u6B62\u65F6\u95F4",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(formatDate(scope.row.deadline)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "supplier",
                    label: "\u4F9B\u5E94\u5546",
                    "min-width": "20%",
                    align: "center"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "projectStatus",
                    label: "\u9879\u76EE\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u8FDB\u884C\u4E2D", value: "\u8FDB\u884C\u4E2D" },
                      { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" },
                      { text: "\u5F85\u5F00\u59CB", value: "\u5F85\u5F00\u59CB" },
                      { text: "\u5DF2\u622A\u6B62", value: "\u5DF2\u622A\u6B62" }
                    ],
                    "filter-method": filterProjectStatus,
                    "filter-placement": "bottom-end",
                    align: "center"
                  }, {
                    default: withCtx((scope) => [
                      createVNode(_component_el_tag, {
                        type: getTagType(scope.row.projectStatus),
                        "disable-transitions": ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getTagText(scope.row.projectStatus)), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "operation",
                    fixed: "right",
                    label: "\u64CD\u4F5C",
                    "min-width": "10%",
                    align: "center"
                  }, {
                    default: withCtx((scope) => [
                      createVNode(_component_el_button, {
                        link: "",
                        type: "primary",
                        size: "small",
                        onClick: ($event) => detailTaskClick(scope.row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u8BE6\u7EC6 ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_el_button, {
                        link: "",
                        type: "primary",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["data"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/sub.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = ElCarousel;
      const _component_el_carousel_item = ElCarouselItem;
      const _component_PageMain3 = _sfc_main$2;
      const _component_PageSub = _sfc_main$1;
      _push(ssrRenderComponent(_component_el_carousel, mergeProps({
        height: "100%",
        interval: 0,
        trigger: "click",
        "indicator-position": "none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(2, (item) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (item === 1) {
                      _push3(ssrRenderComponent(_component_PageMain3, null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item === 2) {
                      _push3(ssrRenderComponent(_component_PageSub, null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      item === 1 ? (openBlock(), createBlock(_component_PageMain3, { key: 0 })) : createCommentVNode("", true),
                      item === 2 ? (openBlock(), createBlock(_component_PageSub, { key: 1 })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(2, (item) => {
                return createVNode(_component_el_carousel_item, { key: item }, {
                  default: withCtx(() => [
                    item === 1 ? (openBlock(), createBlock(_component_PageMain3, { key: 0 })) : createCommentVNode("", true),
                    item === 2 ? (openBlock(), createBlock(_component_PageSub, { key: 1 })) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-e8a9671a"]]);

export { index as default };
//# sourceMappingURL=index-jEkazx2F.mjs.map
