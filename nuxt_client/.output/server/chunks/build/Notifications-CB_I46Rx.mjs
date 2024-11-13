import { E as ElInput } from './index-Cg5LyBE9.mjs';
import { s as search_default, E as ElConfigProvider, b as ElButton } from './server.mjs';
import { E as ElTable, a as ElTableColumn } from './index-B3nBcefE.mjs';
import { E as ElTag } from './index-CahaU-nv.mjs';
import { defineComponent, ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { z as zhCn } from './zh-cn-htd4_pmu.mjs';
import 'lodash-unified';
import './index-DMIaAJTX.mjs';
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
import './index-D0bGVFfM.mjs';
import './index-CFmiHl38.mjs';
import 'normalize-wheel-es';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Notifications",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = ref(zhCn);
    const searchQuery = ref("");
    const tableData = ref([
      {
        title: "\u7CFB\u7EDF\u5347\u7EA7\u901A\u77E5",
        type: "\u4FE1\u606F",
        status: "\u672A\u8BFB",
        sender: "\u7CFB\u7EDF\u7BA1\u7406\u5458",
        sendTime: 16725312e5,
        // 时间戳
        expiry: 16751232e5
        // 时间戳
      },
      {
        title: "\u8D26\u6237\u5BC6\u7801\u66F4\u6539\u63D0\u9192",
        type: "\u63D0\u9192",
        status: "\u5DF2\u8BFB",
        sender: "\u5B89\u5168\u4E2D\u5FC3",
        sendTime: 16730224e5,
        expiry: 16756144e5
      },
      {
        title: "\u5B63\u5EA6\u62A5\u544A\u63D0\u4EA4\u901A\u77E5",
        type: "\u4EFB\u52A1",
        status: "\u672A\u8BFB",
        sender: "\u8D22\u52A1\u90E8",
        sendTime: 1673704e6,
        expiry: 1676296e6
      },
      {
        title: "\u9879\u76EE\u542F\u52A8\u4F1A\u8BAE\u901A\u77E5",
        type: "\u4F1A\u8BAE",
        status: "\u672A\u8BFB",
        sender: "\u9879\u76EE\u7BA1\u7406\u90E8",
        sendTime: 16741248e5,
        expiry: 16768168e5
      }
    ]);
    const filteredTableData = computed(() => {
      return tableData.value.filter((item) => {
        return item.title.includes(searchQuery.value) || item.type.includes(searchQuery.value) || item.sender.includes(searchQuery.value);
      });
    });
    const getTagType = (status) => {
      switch (status) {
        case "\u672A\u8BFB":
          return "danger";
        case "\u5DF2\u8BFB":
          return "success";
        default:
          return "info";
      }
    };
    const getTagText = (status) => {
      switch (status) {
        case "\u672A\u8BFB":
          return "\u672A\u8BFB";
        case "\u5DF2\u8BFB":
          return "\u5DF2\u8BFB";
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
    const filterStatus = (value, row) => {
      return row.status === value;
    };
    const showNotificationDetail = (row) => {
    };
    const viewNotification = (notification) => {
    };
    const markAsRead = (notification) => {
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
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "status",
                    label: "\u901A\u77E5\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u5DF2\u8BFB", value: "\u5DF2\u8BFB" },
                      { text: "\u672A\u8BFB", value: "\u672A\u8BFB" }
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
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "sendTime",
                    label: "\u53D1\u9001\u65F6\u95F4",
                    "min-width": "17%"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(formatDate(scope.row.sendTime))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(formatDate(scope.row.sendTime)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "expiry",
                    label: "\u6709\u6548\u671F",
                    "min-width": "17%"
                  }, {
                    default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(formatDate(scope.row.expiry))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(formatDate(scope.row.expiry)), 1)
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
                          onClick: ($event) => viewNotification(scope.row)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u67E5\u770B`);
                            } else {
                              return [
                                createTextVNode("\u67E5\u770B")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
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
                            onClick: ($event) => viewNotification(scope.row)
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
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "status",
                      label: "\u901A\u77E5\u72B6\u6001 ",
                      "min-width": "10%",
                      filters: [
                        { text: "\u5DF2\u8BFB", value: "\u5DF2\u8BFB" },
                        { text: "\u672A\u8BFB", value: "\u672A\u8BFB" }
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
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "sendTime",
                      label: "\u53D1\u9001\u65F6\u95F4",
                      "min-width": "17%"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(formatDate(scope.row.sendTime)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "expiry",
                      label: "\u6709\u6548\u671F",
                      "min-width": "17%"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(formatDate(scope.row.expiry)), 1)
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
                          onClick: ($event) => viewNotification(scope.row)
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
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "status",
                    label: "\u901A\u77E5\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u5DF2\u8BFB", value: "\u5DF2\u8BFB" },
                      { text: "\u672A\u8BFB", value: "\u672A\u8BFB" }
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
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "sendTime",
                    label: "\u53D1\u9001\u65F6\u95F4",
                    "min-width": "17%"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(formatDate(scope.row.sendTime)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "expiry",
                    label: "\u6709\u6548\u671F",
                    "min-width": "17%"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(formatDate(scope.row.expiry)), 1)
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
                        onClick: ($event) => viewNotification(scope.row)
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
//# sourceMappingURL=Notifications-CB_I46Rx.mjs.map
