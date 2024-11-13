import { E as ElInput } from './index-BtYbkZRz.mjs';
import { b8 as useUserStore, b9 as search_default, E as ElConfigProvider, b as ElButton } from './server.mjs';
import { E as ElTable, a as ElTableColumn } from './index-CNyejJdT.mjs';
import { E as ElTag } from './index-C5xdxGlv.mjs';
import { defineComponent, ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { z as zhCn } from './zh-cn-htd4_pmu.mjs';
import { u as useNotificationStore } from './index-B-w5YAGs.mjs';
import 'lodash-unified';
import './index-DUiHV-eU.mjs';
import '@vue/shared';
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
import './index-CZuFgaK7.mjs';
import './index-FojM7Bi4.mjs';
import 'normalize-wheel-es';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Notifications",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = ref(zhCn);
    const notificationStore = useNotificationStore();
    const userStore = useUserStore();
    const searchQuery = ref("");
    const filteredTableData = computed(() => {
      return notificationStore.notificationData.filter((item) => {
        return item.title.includes(searchQuery.value) || item.type.includes(searchQuery.value) || userStore.getUserById(item.senderId).includes(searchQuery.value);
      });
    });
    const getTagType = (status) => {
      switch (status) {
        case "Unread":
          return "danger";
        case "Read":
          return "success";
        default:
          return "info";
      }
    };
    const getTagText = (status) => {
      switch (status) {
        case "Unread":
          return "\u672A\u8BFB";
        case "Read":
          return "\u5DF2\u8BFB";
        default:
          return "\u672A\u77E5";
      }
    };
    const getType = (notificationType) => {
      switch (notificationType) {
        case "Information":
          return "\u4FE1\u606F";
        case "Reminder":
          return "\u63D0\u9192";
        case "Task":
          return "\u4EFB\u52A1";
        case "Taskback":
          return "\u4EFB\u52A1\u53CD\u9988";
        case "Subtask":
          return "\u5B50\u4EFB\u52A1";
        case "Subtaskback":
          return "\u5B50\u4EFB\u52A1\u53CD\u9988";
        case "Information":
          return "Meeting";
        case "Reminder":
          return "\u4F1A\u8BAE";
        default:
          return "\u672A\u77E5";
      }
    };
    function formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    }
    const filterStatus = (value, row) => {
      return row.status === value;
    };
    const showNotificationDetail = (row) => {
    };
    const markAsRead = (notification) => {
      notificationStore.changeNotificationStatus(notification.id, "Read");
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
      const _component_el_config_provider = ElConfigProvider;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_tag = ElTag;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_input, {
        "suffix-icon": unref(search_default),
        placeholder: "\u641C\u7D22\u901A\u77E5",
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        clearable: "",
        onClear: filterData,
        onInput: filterData,
        style: { "margin-bottom": "20px", "width": "300px" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_config_provider, { locale: locale.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table, {
              data: filteredTableData.value,
              border: "",
              style: { "width": "100%" },
              "header-cell-style": tableHeaderStyle,
              onRowDblclick: showNotificationDetail
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    type: "selection",
                    "min-width": "3%"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "title",
                    label: "\u901A\u77E5\u6807\u9898",
                    "min-width": "18%"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "type",
                    label: "\u901A\u77E5\u7C7B\u578B",
                    "min-width": "7%"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(getType(scope.row.type))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(getType(scope.row.type)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "status",
                    label: "\u901A\u77E5\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u5DF2\u8BFB", value: "Read" },
                      { text: "\u672A\u8BFB", value: "Unread" }
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
                    prop: "sender",
                    label: "\u53D1\u9001\u4EBA",
                    "min-width": "18%"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(userStore).getUserById(scope.row.senderId))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(userStore).getUserById(scope.row.senderId)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "createdAt",
                    label: "\u53D1\u9001\u65F6\u95F4",
                    "min-width": "17%"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(formatDate(scope.row.createdAt))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(formatDate(scope.row.createdAt)), 1)
                        ];
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
                          onClick: ($event) => markAsRead(scope.row)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u6807\u8BB0\u4E3A\u5DF2\u8BFB`);
                            } else {
                              return [
                                createTextVNode("\u6807\u8BB0\u4E3A\u5DF2\u8BFB")
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
                            onClick: ($event) => markAsRead(scope.row)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u6807\u8BB0\u4E3A\u5DF2\u8BFB")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_table_column, {
                      type: "selection",
                      "min-width": "3%"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "title",
                      label: "\u901A\u77E5\u6807\u9898",
                      "min-width": "18%"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "type",
                      label: "\u901A\u77E5\u7C7B\u578B",
                      "min-width": "7%"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(getType(scope.row.type)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "status",
                      label: "\u901A\u77E5\u72B6\u6001 ",
                      "min-width": "10%",
                      filters: [
                        { text: "\u5DF2\u8BFB", value: "Read" },
                        { text: "\u672A\u8BFB", value: "Unread" }
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
                      prop: "sender",
                      label: "\u53D1\u9001\u4EBA",
                      "min-width": "18%"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(unref(userStore).getUserById(scope.row.senderId)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "createdAt",
                      label: "\u53D1\u9001\u65F6\u95F4",
                      "min-width": "17%"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(formatDate(scope.row.createdAt)), 1)
                      ]),
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
                          onClick: ($event) => markAsRead(scope.row)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u6807\u8BB0\u4E3A\u5DF2\u8BFB")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table, {
                data: filteredTableData.value,
                border: "",
                style: { "width": "100%" },
                "header-cell-style": tableHeaderStyle,
                onRowDblclick: showNotificationDetail
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_table_column, {
                    type: "selection",
                    "min-width": "3%"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "title",
                    label: "\u901A\u77E5\u6807\u9898",
                    "min-width": "18%"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "type",
                    label: "\u901A\u77E5\u7C7B\u578B",
                    "min-width": "7%"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(getType(scope.row.type)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "status",
                    label: "\u901A\u77E5\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u5DF2\u8BFB", value: "Read" },
                      { text: "\u672A\u8BFB", value: "Unread" }
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
                    prop: "sender",
                    label: "\u53D1\u9001\u4EBA",
                    "min-width": "18%"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(unref(userStore).getUserById(scope.row.senderId)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "createdAt",
                    label: "\u53D1\u9001\u65F6\u95F4",
                    "min-width": "17%"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(formatDate(scope.row.createdAt)), 1)
                    ]),
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
                        onClick: ($event) => markAsRead(scope.row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u6807\u8BB0\u4E3A\u5DF2\u8BFB")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/MessageCenter/Notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Notifications-DurL6R0A.mjs.map
