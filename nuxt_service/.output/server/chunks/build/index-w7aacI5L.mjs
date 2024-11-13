import { _ as _export_sfc$1, E as ElConfigProvider, b as ElButton } from './server.mjs';
import { E as ElDatePicker } from './index-CHLlcSZJ.mjs';
import { E as ElDivider } from './index-Bhsu9wGt.mjs';
import { E as ElCard, _ as __nuxt_component_5 } from './doughnut-BAo8Tv3m.mjs';
import { _ as __nuxt_component_6, a as __nuxt_component_7, b as __nuxt_component_8 } from './bar-CjN9LBRF.mjs';
import { useSSRContext, defineComponent, ref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { z as zhCn } from './zh-cn-htd4_pmu.mjs';
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
import '@vue/shared';
import 'lodash-unified';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "main2",
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
      { value: 1048, name: "\u539F\u56E01" },
      { value: 735, name: "\u539F\u56E02" },
      { value: 580, name: "\u539F\u56E03" },
      { value: 484, name: "\u539F\u56E04" },
      { value: 1048, name: "\u539F\u56E05" },
      { value: 735, name: "\u539F\u56E06" }
    ]);
    const chartData3 = ref([
      { date: "2024-01", value: 120 },
      { date: "2024-02", value: 130 },
      { date: "2024-03", value: 115 },
      { date: "2024-04", value: 140 },
      { date: "2024-05", value: 155 },
      { date: "2024-06", value: 165 },
      { date: "2024-07", value: 180 },
      { date: "2024-08", value: 200 },
      { date: "2024-09", value: 190 },
      { date: "2024-10", value: 210 },
      { date: "2024-11", value: 220 },
      { date: "2024-12", value: 230 }
    ]);
    const chartData4 = ref([
      { category: "2024-01", value: 820 },
      // 1月
      { category: "2024-02", value: 932 },
      // 2月
      { category: "2024-03", value: 901 },
      // 3月
      { category: "2024-04", value: 934 },
      // 4月
      { category: "2024-05", value: 1290 },
      // 5月
      { category: "2024-06", value: 1330 },
      // 6月
      { category: "2024-07", value: 1320 },
      // 7月
      { category: "2024-08", value: 1450 },
      // 8月
      { category: "2024-09", value: 1500 },
      // 9月
      { category: "2024-10", value: 1400 },
      // 10月
      { category: "2024-11", value: 1550 },
      // 11月
      { category: "2024-12", value: 1600 }
      // 12月
    ]);
    const updateChartData = () => {
      chartData1.value = [
        { value: 148, name: "\u96F6\u552E\u673A\u6784" },
        { value: 835, name: "\u5916\u90E8\u5546\u4E1A\u5355\u4F4D" },
        { value: 60, name: "\u533B\u7597\u673A\u6784" },
        { value: 584, name: "\u5176\u4ED6" }
      ];
    };
    ref([
      {
        taskName: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1",
        taskVersion: "v1.0",
        taskStatus: "\u8FDB\u884C\u4E2D",
        approver: "\u5F20\u6653\u5CF0",
        creator: "\u5218\u6674",
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
        creator: "\u5218\u6674",
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
        creator: "\u5218\u6674",
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
        creator: "\u5218\u6674",
        createTime: (/* @__PURE__ */ new Date("2024-04-20")).getTime(),
        deadline: (/* @__PURE__ */ new Date("2024-04-30")).getTime(),
        supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
        projectStatus: "\u5F85\u5F00\u59CB"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_config_provider = ElConfigProvider;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_button = ElButton;
      const _component_el_divider = ElDivider;
      const _component_el_card = ElCard;
      const _component_EchartDoughnut = __nuxt_component_5;
      const _component_EchartLine = __nuxt_component_6;
      const _component_EchartLineArea = __nuxt_component_7;
      const _component_EchartBar = __nuxt_component_8;
      _push(`<!--[--><div class="flex justify-between items-center" data-v-3b085064><div class="text-2xl font-bold italic text-blue-600" data-v-3b085064>\u4EA7\u4E1A\u94FE\u534F\u540C\u8BBE\u8BA1\u5206\u6790\u770B\u677F</div><div class="flex items-center space-x-4" data-v-3b085064>`);
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
      _push(`<div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6" data-v-3b085064>`);
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#4ea5ff", "margin": "10px", "border-radius": "8px", "padding": "5px", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-2xl" data-v-3b085064${_scopeId}>\u5DF2\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-3xl mb-3" data-v-3b085064${_scopeId}>15</div><div class="text-center font-bold text-2xl" data-v-3b085064${_scopeId}>\u5DF2\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-3xl" data-v-3b085064${_scopeId}>120</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-2xl" }, "\u5DF2\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-3xl mb-3" }, "15"),
              createVNode("div", { class: "text-center font-bold text-2xl" }, "\u5DF2\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-3xl" }, "120")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-3b085064>`);
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#fea500", "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-sm" data-v-3b085064${_scopeId}>\u672A\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-sm" data-v-3b085064${_scopeId}>1</div><div class="text-center font-bold text-sm" data-v-3b085064${_scopeId}>\u672A\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-sm" data-v-3b085064${_scopeId}>5</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-sm" }, "\u672A\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-sm" }, "1"),
              createVNode("div", { class: "text-center font-bold text-sm" }, "\u672A\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-sm" }, "5")
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
            _push2(`<div class="text-center font-bold text-sm" data-v-3b085064${_scopeId}>\u9884\u671F\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-sm" data-v-3b085064${_scopeId}>1</div><div class="text-center font-bold text-sm" data-v-3b085064${_scopeId}>\u903E\u671F\u4EFB\u52A1\u6570\u91CF</div><div class="text-center font-bold text-sm" data-v-3b085064${_scopeId}>5</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-sm" }, "\u9884\u671F\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-sm" }, "1"),
              createVNode("div", { class: "text-center font-bold text-sm" }, "\u903E\u671F\u4EFB\u52A1\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-sm" }, "5")
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
            _push2(`<span class="text-lg font-semibold text-gray-700" data-v-3b085064${_scopeId}>\u903E\u671F\u4F9B\u5E94\u5546\u7C7B\u578B</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center" data-v-3b085064${_scopeId}>`);
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
            _push2(`<span class="text-lg font-semibold text-gray-700" data-v-3b085064${_scopeId}>\u903E\u671F\u539F\u56E0</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center" data-v-3b085064${_scopeId}>`);
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
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3" data-v-3b085064>`);
      _push(ssrRenderComponent(_component_el_card, {
        class: "col-span-2 bg-gray-100",
        shadow: "always",
        style: { "border-radius": "8px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-semibold text-gray-700" data-v-3b085064${_scopeId}>\u6708\u5EA6\u4EFB\u52A1\u534F\u540C\u9891\u6B21(\u70ED\u5EA6)\u8D70\u52BF\u56FE</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center" data-v-3b085064${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EchartLine, {
              width: "700px",
              height: "200px",
              data: chartData3.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-semibold text-gray-700" }, "\u6708\u5EA6\u4EFB\u52A1\u534F\u540C\u9891\u6B21(\u70ED\u5EA6)\u8D70\u52BF\u56FE"),
              createVNode(_component_el_divider, { style: { "margin": "0 0" } }),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_component_EchartLine, {
                  width: "700px",
                  height: "200px",
                  data: chartData3.value
                }, null, 8, ["data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_card, {
        class: "col-span-2 bg-gray-100",
        shadow: "always",
        style: { "border-radius": "8px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-semibold text-gray-700" data-v-3b085064${_scopeId}>\u6708\u5EA6\u5B50\u4EFB\u52A1\u534F\u540C\u9891\u6B21(\u70ED\u5EA6)\u8D70\u52BF\u56FE</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center" data-v-3b085064${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EchartLineArea, {
              width: "700px",
              height: "200px",
              data: chartData3.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-semibold text-gray-700" }, "\u6708\u5EA6\u5B50\u4EFB\u52A1\u534F\u540C\u9891\u6B21(\u70ED\u5EA6)\u8D70\u52BF\u56FE"),
              createVNode(_component_el_divider, { style: { "margin": "0 0" } }),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_component_EchartLineArea, {
                  width: "700px",
                  height: "200px",
                  data: chartData3.value
                }, null, 8, ["data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid" data-v-3b085064>`);
      _push(ssrRenderComponent(_component_el_card, {
        class: "bg-gray-100",
        shadow: "always",
        style: { "border-radius": "8px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-semibold text-gray-700" data-v-3b085064${_scopeId}>\u5458\u5DE5\u534F\u540C\u9891\u6B21\u6C47\u603B</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center" data-v-3b085064${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EchartBar, {
              width: "1500px",
              height: "200px",
              data: chartData4.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-semibold text-gray-700" }, "\u5458\u5DE5\u534F\u540C\u9891\u6B21\u6C47\u603B"),
              createVNode(_component_el_divider, { style: { "margin": "0 0" } }),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_component_EchartBar, {
                  width: "1500px",
                  height: "200px",
                  data: chartData4.value
                }, null, 8, ["data"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/main2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-3b085064"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageMain2 = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PageMain2, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/leader/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-3fa32e58"]]);

export { index as default };
//# sourceMappingURL=index-w7aacI5L.mjs.map
