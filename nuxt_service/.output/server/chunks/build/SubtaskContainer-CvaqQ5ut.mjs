import { E as ElInput } from './index-BtYbkZRz.mjs';
import { E as ElSpace } from './index-CW7OleAO.mjs';
import { E as ElTag } from './index-C5xdxGlv.mjs';
import { E as ElDivider } from './index-Bhsu9wGt.mjs';
import { useSSRContext, defineComponent, ref, computed, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { _ as _export_sfc$1, b8 as useUserStore, b9 as search_default } from './server.mjs';
import { z as zhCn } from './zh-cn-htd4_pmu.mjs';
import { u as useSubtaskStore } from './index-BNWTj_L3.mjs';
import 'lodash-unified';
import './index-DUiHV-eU.mjs';
import '@vue/shared';
import './vnode-Cs2GWOIH.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'unhead';
import '@unhead/shared';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubtaskContainer",
  __ssrInlineRender: true,
  setup(__props) {
    ref(zhCn);
    useUserStore();
    const subtaskStore = useSubtaskStore();
    useRoute();
    const router = useRouter();
    ref({
      name: "",
      deadline: "",
      time: "",
      responsible: 0,
      desc: ""
    });
    const filteredTodos = computed(() => {
      return subtaskStore.CompletedsubtaskData.filter((item) => item.title.includes(searchQuery.value));
    });
    ref(0);
    const searchQuery = ref("");
    const goToProjectDetail = (id) => {
      router.push(`/admin/SubtaskCenter-SubtaskCenter/${id}`);
    };
    const getStatusType = (status) => {
      switch (status) {
        case "InProgress":
          return "success";
        case "AwaitingApproval":
          return "warning";
        case "Rejected":
          return "warning";
        case "Delayed":
          return "warning";
        case "Completed":
          return "info";
        default:
          return "default";
      }
    };
    const getStatus = (status) => {
      switch (status) {
        case "InProgress":
          return "\u8FDB\u884C\u4E2D";
        case "AwaitingApproval":
          return "\u5F85\u5BA1\u6279";
        case "Completed":
          return "\u5DF2\u5B8C\u6210";
        case "Pending":
          return "\u5F85\u5904\u7406";
        case "Rejected":
          return "\u5DF2\u9A73\u56DE";
        case "Delayed":
          return "\u5DF2\u5EF6\u671F";
        case "Expired":
        default:
          return "\u672A\u77E5\u72B6\u6001";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_el_space = ElSpace;
      const _component_el_tag = ElTag;
      const _component_el_divider = ElDivider;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1e93ebc3><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "margin-bottom": "20px" })}" data-v-1e93ebc3>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        "suffix-icon": unref(search_default),
        placeholder: "\u641C\u7D22\u4EFB\u52A1",
        clearable: "",
        style: { "width": "300px", "margin-left": "10px" }
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin-left": "20px" })}" data-v-1e93ebc3>\u5408\u8BA1 ${ssrInterpolate(filteredTodos.value.length)} \u6761</div></div>`);
      _push(ssrRenderComponent(_component_el_space, { wrap: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(filteredTodos.value, (todo) => {
              _push2(`<div class="custom-card" data-v-1e93ebc3${_scopeId}><span class="card-header" data-v-1e93ebc3${_scopeId}><div data-v-1e93ebc3${_scopeId}>${ssrInterpolate(todo.title)}</div>`);
              _push2(ssrRenderComponent(_component_el_tag, {
                type: getStatusType(todo.status),
                effect: "dark"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(getStatus(todo.status))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(getStatus(todo.status)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</span>`);
              _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "5px 0" } }, null, _parent2, _scopeId));
              _push2(`<div class="card-content" data-v-1e93ebc3${_scopeId}><strong data-v-1e93ebc3${_scopeId}>\u5907\u6CE8:</strong> ${ssrInterpolate(todo.description)}</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(filteredTodos.value, (todo) => {
                return openBlock(), createBlock("div", {
                  key: todo.title,
                  class: "custom-card",
                  onDblclick: ($event) => todo.status === "Completed" && goToProjectDetail(todo.id)
                }, [
                  createVNode("span", { class: "card-header" }, [
                    createVNode("div", null, toDisplayString(todo.title), 1),
                    createVNode(_component_el_tag, {
                      type: getStatusType(todo.status),
                      effect: "dark"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(getStatus(todo.status)), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ]),
                  createVNode(_component_el_divider, { style: { "margin": "5px 0" } }),
                  createVNode("div", { class: "card-content" }, [
                    createVNode("strong", null, "\u5907\u6CE8:"),
                    createTextVNode(" " + toDisplayString(todo.description), 1)
                  ])
                ], 40, ["onDblclick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/SubtaskContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SubtaskContainer = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-1e93ebc3"]]);

export { SubtaskContainer as default };
//# sourceMappingURL=SubtaskContainer-CvaqQ5ut.mjs.map
