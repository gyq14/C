import { E as ElInput } from './index-Cg5LyBE9.mjs';
import { E as ElSpace } from './index-C8J0bhke.mjs';
import { E as ElTag } from './index-CahaU-nv.mjs';
import { E as ElDivider } from './index-CWAMHKLP.mjs';
import { useSSRContext, defineComponent, ref, computed, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc$1, f as storeToRefs, s as search_default } from './server.mjs';
import { u as useProjectsStore } from './index-D1-gw74C.mjs';
import 'lodash-unified';
import './index-DMIaAJTX.mjs';
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
  __name: "ProjectCenter",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const projectsStore = useProjectsStore();
    const { activeProjects } = storeToRefs(projectsStore);
    const searchQuery = ref("");
    const filteredProjects = computed(() => {
      return activeProjects.value.filter(
        (project) => project.name.includes(searchQuery.value) || project.description.includes(searchQuery.value)
      );
    });
    const getStatusType = (status) => {
      switch (status) {
        case "\u8FDB\u884C\u4E2D":
          return "success";
        case "\u5F85\u5BA1\u6279":
          return "warning";
        case "\u5DF2\u5B8C\u6210":
          return "info";
        default:
          return "default";
      }
    };
    const goToProjectDetail = (id) => {
      router.push(`/admin/ProjectCenter-ProjectCenter/${id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_el_space = ElSpace;
      const _component_el_tag = ElTag;
      const _component_el_divider = ElDivider;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-004bf020><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "margin-bottom": "20px" })}" data-v-004bf020>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        "suffix-icon": unref(search_default),
        placeholder: "\u641C\u7D22\u9879\u76EE",
        clearable: "",
        style: { "width": "300px", "margin-left": "10px" }
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin-left": "20px" })}" data-v-004bf020>\u5408\u8BA1 ${ssrInterpolate(filteredProjects.value.length)} \u6761</div></div>`);
      _push(ssrRenderComponent(_component_el_space, { wrap: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(filteredProjects.value, (project) => {
              _push2(`<div class="custom-card" data-v-004bf020${_scopeId}><span class="card-header" data-v-004bf020${_scopeId}><div data-v-004bf020${_scopeId}>${ssrInterpolate(project.name)}</div>`);
              _push2(ssrRenderComponent(_component_el_tag, {
                type: getStatusType(project.status),
                effect: "dark"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(project.status)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(project.status), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</span>`);
              _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "5px 0" } }, null, _parent2, _scopeId));
              _push2(`<div class="card-content" data-v-004bf020${_scopeId}><strong data-v-004bf020${_scopeId}>\u5907\u6CE8:</strong> ${ssrInterpolate(project.description)}</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(filteredProjects.value, (project) => {
                return openBlock(), createBlock("div", {
                  key: project.id,
                  class: "custom-card",
                  onDblclick: ($event) => project.status === "\u8FDB\u884C\u4E2D" && goToProjectDetail(project.id)
                }, [
                  createVNode("span", { class: "card-header" }, [
                    createVNode("div", null, toDisplayString(project.name), 1),
                    createVNode(_component_el_tag, {
                      type: getStatusType(project.status),
                      effect: "dark"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(project.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ]),
                  createVNode(_component_el_divider, { style: { "margin": "5px 0" } }),
                  createVNode("div", { class: "card-content" }, [
                    createVNode("strong", null, "\u5907\u6CE8:"),
                    createTextVNode(" " + toDisplayString(project.description), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/ProjectCenter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectCenter = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-004bf020"]]);

export { ProjectCenter as default };
//# sourceMappingURL=ProjectCenter-CxZzZZhi.mjs.map
