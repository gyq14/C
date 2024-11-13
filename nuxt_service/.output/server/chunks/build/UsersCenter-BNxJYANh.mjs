import { E as ElInput } from './index-BtYbkZRz.mjs';
import { E as ElTable, a as ElTableColumn } from './index-CNyejJdT.mjs';
import { b8 as useUserStore, b9 as search_default, b as ElButton } from './server.mjs';
import { defineComponent, ref, computed, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'lodash-unified';
import './index-DUiHV-eU.mjs';
import '@vue/shared';
import './index-CZuFgaK7.mjs';
import './index-FojM7Bi4.mjs';
import 'normalize-wheel-es';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UsersCenter",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const userstore = useUserStore();
    const tableData = ref(userstore.usersData);
    const filteredTableData = computed(() => {
      return tableData.value.filter((item) => {
        return item.name.includes(searchQuery.value) || item.department.includes(searchQuery.value);
      });
    });
    const showUserDetail = (row) => {
    };
    const viewUserDetail = (user) => {
    };
    const markAsCompleted = (user) => {
    };
    const filterData = () => {
    };
    const tableHeaderStyle = {
      backgroundColor: "#f0f0f0",
      color: "#000000",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "14px",
      padding: "10px 10px 0px 0px",
      borderRadius: "4px 4px 0 0",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_input, {
        "suffix-icon": unref(search_default),
        placeholder: "\u641C\u7D22\u7528\u6237",
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        clearable: "",
        onClear: filterData,
        onInput: filterData,
        style: { "margin-bottom": "20px", "width": "300px" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_table, {
        data: filteredTableData.value,
        border: "",
        style: { "width": "100%" },
        "header-cell-style": tableHeaderStyle,
        onRowDblclick: showUserDetail
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              type: "selection",
              "min-width": "4%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "name",
              label: "\u59D3\u540D",
              "min-width": "11%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "department",
              label: "\u90E8\u95E8",
              "min-width": "11%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "completedTasks",
              label: "\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF",
              "min-width": "11%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 0 `);
                } else {
                  return [
                    createTextVNode(" 0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "currentTasks",
              label: "\u5F53\u524D\u4EFB\u52A1\u6570\u91CF",
              "min-width": "11%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 0 `);
                } else {
                  return [
                    createTextVNode(" 0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "overdueTasks",
              label: "\u903E\u671F\u4EFB\u52A1\u6570\u91CF",
              "min-width": "11%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 0 `);
                } else {
                  return [
                    createTextVNode(" 0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "completedSubtasks",
              label: "\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF",
              "min-width": "11%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 0 `);
                } else {
                  return [
                    createTextVNode(" 0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "currentSubtasks",
              label: "\u5F53\u524D\u5B50\u4EFB\u52A1\u6570\u91CF",
              "min-width": "11%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 0 `);
                } else {
                  return [
                    createTextVNode(" 0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "overdueSubtasks",
              label: "\u903E\u671F\u5B50\u4EFB\u52A1\u6570\u91CF",
              "min-width": "11%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 0 `);
                } else {
                  return [
                    createTextVNode(" 0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "operation",
              fixed: "right",
              label: "\u64CD\u4F5C",
              "min-width": "8%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    link: "",
                    type: "primary",
                    size: "small",
                    onClick: ($event) => viewUserDetail(scope.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u67E5\u770B`);
                      } else {
                        return [
                          createTextVNode("\u67E5\u770B")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_button, {
                    link: "",
                    type: "primary",
                    size: "small",
                    onClick: ($event) => markAsCompleted(scope.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u7F16\u8F91`);
                      } else {
                        return [
                          createTextVNode("\u7F16\u8F91")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      link: "",
                      type: "primary",
                      size: "small",
                      onClick: ($event) => viewUserDetail(scope.row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u67E5\u770B")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_el_button, {
                      link: "",
                      type: "primary",
                      size: "small",
                      onClick: ($event) => markAsCompleted(scope.row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u7F16\u8F91")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                type: "selection",
                "min-width": "4%"
              }),
              createVNode(_component_el_table_column, {
                prop: "name",
                label: "\u59D3\u540D",
                "min-width": "11%"
              }),
              createVNode(_component_el_table_column, {
                prop: "department",
                label: "\u90E8\u95E8",
                "min-width": "11%"
              }),
              createVNode(_component_el_table_column, {
                prop: "completedTasks",
                label: "\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF",
                "min-width": "11%"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(" 0 ")
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "currentTasks",
                label: "\u5F53\u524D\u4EFB\u52A1\u6570\u91CF",
                "min-width": "11%"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(" 0 ")
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "overdueTasks",
                label: "\u903E\u671F\u4EFB\u52A1\u6570\u91CF",
                "min-width": "11%"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(" 0 ")
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "completedSubtasks",
                label: "\u5B8C\u6210\u5B50\u4EFB\u52A1\u6570\u91CF",
                "min-width": "11%"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(" 0 ")
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "currentSubtasks",
                label: "\u5F53\u524D\u5B50\u4EFB\u52A1\u6570\u91CF",
                "min-width": "11%"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(" 0 ")
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "overdueSubtasks",
                label: "\u903E\u671F\u5B50\u4EFB\u52A1\u6570\u91CF",
                "min-width": "11%"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(" 0 ")
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "operation",
                fixed: "right",
                label: "\u64CD\u4F5C",
                "min-width": "8%"
              }, {
                default: withCtx((scope) => [
                  createVNode(_component_el_button, {
                    link: "",
                    type: "primary",
                    size: "small",
                    onClick: ($event) => viewUserDetail(scope.row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u67E5\u770B")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_el_button, {
                    link: "",
                    type: "primary",
                    size: "small",
                    onClick: ($event) => markAsCompleted(scope.row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u7F16\u8F91")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/UsersCenter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=UsersCenter-BNxJYANh.mjs.map
