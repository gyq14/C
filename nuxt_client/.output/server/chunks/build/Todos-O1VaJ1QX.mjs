import { E as ElInput } from './index-Cg5LyBE9.mjs';
import { c as useRouter, s as search_default, E as ElConfigProvider, b as ElButton, d as ElForm, e as ElFormItem } from './server.mjs';
import { E as ElTable, a as ElTableColumn } from './index-B3nBcefE.mjs';
import { E as ElTag } from './index-CahaU-nv.mjs';
import { E as ElDialog } from './index-DME6hliQ.mjs';
import { defineComponent, ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
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
import './vnode-Cs2GWOIH.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Todos",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const locale = ref(zhCn);
    const filterStatus = (value, row) => {
      return row.status === value;
    };
    const searchQuery = ref("");
    const tableData = ref([
      {
        id: 1,
        title: "\u9F7F\u8F6E\u7BB1\u8BBE\u8BA1\u7684\u8DE8\u90E8\u95E8\u534F\u540C\u9879\u76EE\u5206\u914D\u5BA1\u6279",
        status: "\u5F85\u5904\u7406",
        applicant: "\u5218\u8273",
        createTime: 16725312e5
      },
      {
        id: 2,
        title: "\u9F7F\u8F6E\u7BB1\u8BBE\u8BA1\u7684\u8DE8\u90E8\u95E8\u534F\u540C\u9879\u76EE\u6210\u679C\u5BA1\u6279",
        status: "\u5F85\u5904\u7406",
        applicant: "\u5F20\u5EFA",
        createTime: 16725312e5
      }
    ]);
    const filteredTableData = computed(() => {
      return tableData.value.filter((item) => {
        return item.title.includes(searchQuery.value) || item.applicant.includes(searchQuery.value);
      });
    });
    const dialogVisible = ref(false);
    const newUser = ref({
      name: "",
      account: "",
      contact: "",
      email: "",
      signature: "",
      department: "",
      role: ""
    });
    const getTagType = (status) => {
      switch (status) {
        case "\u5F85\u5904\u7406":
          return "danger";
        case "\u5DF2\u5B8C\u6210":
          return "success";
        default:
          return "info";
      }
    };
    const getTagText = (status) => {
      switch (status) {
        case "\u5F85\u5904\u7406":
          return "\u5F85\u5904\u7406";
        case "\u5DF2\u5B8C\u6210":
          return "\u5DF2\u5B8C\u6210";
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
    const viewTodo = (todo) => {
      router.push(`/user/MessageCenter/Todos-Todos/${todo.id}`);
      markAsCompleted(todo);
    };
    const markAsCompleted = (todo) => {
      const targetTodo = tableData.value.find((item) => item.id === todo.id);
      if (targetTodo) {
        targetTodo.status = "\u5DF2\u5B8C\u6210";
      }
    };
    const filterData = () => {
    };
    const showTodoDetail = (row) => {
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
      const _component_el_dialog = ElDialog;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_input, {
        "suffix-icon": unref(search_default),
        placeholder: "\u641C\u7D22\u4EE3\u529E",
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
              onRowDblclick: showTodoDetail
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    type: "selection",
                    "min-width": "3%"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "title",
                    label: "\u4EE3\u529E\u6807\u9898",
                    "min-width": "18%"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "status",
                    label: "\u4EE3\u529E\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u5F85\u5904\u7406", value: "\u5F85\u5904\u7406" },
                      { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" }
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
                    prop: "applicant",
                    label: "\u7533\u8BF7\u4EBA",
                    "min-width": "18%"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    prop: "createTime",
                    label: "\u521B\u5EFA\u65F6\u95F4",
                    "min-width": "17%"
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
                          onClick: ($event) => viewTodo(scope.row)
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
                        if (scope.row.status !== "\u5DF2\u5B8C\u6210") {
                          _push4(ssrRenderComponent(_component_el_button, {
                            link: "",
                            type: "primary",
                            size: "small",
                            onClick: ($event) => markAsCompleted(scope.row)
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u6807\u8BB0\u4E3A\u5B8C\u6210 `);
                              } else {
                                return [
                                  createTextVNode(" \u6807\u8BB0\u4E3A\u5B8C\u6210 ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            link: "",
                            type: "primary",
                            size: "small",
                            onClick: ($event) => viewTodo(scope.row)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u67E5\u770B")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          scope.row.status !== "\u5DF2\u5B8C\u6210" ? (openBlock(), createBlock(_component_el_button, {
                            key: 0,
                            link: "",
                            type: "primary",
                            size: "small",
                            onClick: ($event) => markAsCompleted(scope.row)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6807\u8BB0\u4E3A\u5B8C\u6210 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
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
                      label: "\u4EE3\u529E\u6807\u9898",
                      "min-width": "18%"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "status",
                      label: "\u4EE3\u529E\u72B6\u6001 ",
                      "min-width": "10%",
                      filters: [
                        { text: "\u5F85\u5904\u7406", value: "\u5F85\u5904\u7406" },
                        { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" }
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
                      prop: "applicant",
                      label: "\u7533\u8BF7\u4EBA",
                      "min-width": "18%"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "createTime",
                      label: "\u521B\u5EFA\u65F6\u95F4",
                      "min-width": "17%"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
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
                          onClick: ($event) => viewTodo(scope.row)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u67E5\u770B")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        scope.row.status !== "\u5DF2\u5B8C\u6210" ? (openBlock(), createBlock(_component_el_button, {
                          key: 0,
                          link: "",
                          type: "primary",
                          size: "small",
                          onClick: ($event) => markAsCompleted(scope.row)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u6807\u8BB0\u4E3A\u5B8C\u6210 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_dialog, {
              title: "\u7528\u6237\u6CE8\u518C\u4FE1\u606F",
              modelValue: dialogVisible.value,
              "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
              width: "50%"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form, {
                    model: newUser.value,
                    "label-width": "100px",
                    style: { "padding": "20px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u59D3\u540D" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: newUser.value.name,
                                "onUpdate:modelValue": ($event) => newUser.value.name = $event,
                                disabled: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: newUser.value.name,
                                  "onUpdate:modelValue": ($event) => newUser.value.name = $event,
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u8D26\u53F7" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: newUser.value.account,
                                "onUpdate:modelValue": ($event) => newUser.value.account = $event,
                                disabled: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: newUser.value.account,
                                  "onUpdate:modelValue": ($event) => newUser.value.account = $event,
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: newUser.value.contact,
                                "onUpdate:modelValue": ($event) => newUser.value.contact = $event,
                                disabled: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: newUser.value.contact,
                                  "onUpdate:modelValue": ($event) => newUser.value.contact = $event,
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u90AE\u7BB1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: newUser.value.email,
                                "onUpdate:modelValue": ($event) => newUser.value.email = $event,
                                disabled: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: newUser.value.email,
                                  "onUpdate:modelValue": ($event) => newUser.value.email = $event,
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u7B7E\u540D" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: newUser.value.signature,
                                "onUpdate:modelValue": ($event) => newUser.value.signature = $event,
                                disabled: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: newUser.value.signature,
                                  "onUpdate:modelValue": ($event) => newUser.value.signature = $event,
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u90E8\u95E8" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: newUser.value.department,
                                "onUpdate:modelValue": ($event) => newUser.value.department = $event,
                                disabled: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: newUser.value.department,
                                  "onUpdate:modelValue": ($event) => newUser.value.department = $event,
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u89D2\u8272" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: newUser.value.role,
                                "onUpdate:modelValue": ($event) => newUser.value.role = $event,
                                disabled: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: newUser.value.role,
                                  "onUpdate:modelValue": ($event) => newUser.value.role = $event,
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_form_item, { label: "\u59D3\u540D" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: newUser.value.name,
                                "onUpdate:modelValue": ($event) => newUser.value.name = $event,
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, { label: "\u8D26\u53F7" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: newUser.value.account,
                                "onUpdate:modelValue": ($event) => newUser.value.account = $event,
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: newUser.value.contact,
                                "onUpdate:modelValue": ($event) => newUser.value.contact = $event,
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, { label: "\u90AE\u7BB1" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: newUser.value.email,
                                "onUpdate:modelValue": ($event) => newUser.value.email = $event,
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, { label: "\u7B7E\u540D" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: newUser.value.signature,
                                "onUpdate:modelValue": ($event) => newUser.value.signature = $event,
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, { label: "\u90E8\u95E8" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: newUser.value.department,
                                "onUpdate:modelValue": ($event) => newUser.value.department = $event,
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, { label: "\u89D2\u8272" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: newUser.value.role,
                                "onUpdate:modelValue": ($event) => newUser.value.role = $event,
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span slot="footer" class="dialog-footer"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_button, {
                    onClick: ($event) => dialogVisible.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u5173\u95ED`);
                      } else {
                        return [
                          createTextVNode("\u5173\u95ED")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode(_component_el_form, {
                      model: newUser.value,
                      "label-width": "100px",
                      style: { "padding": "20px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, { label: "\u59D3\u540D" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: newUser.value.name,
                              "onUpdate:modelValue": ($event) => newUser.value.name = $event,
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, { label: "\u8D26\u53F7" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: newUser.value.account,
                              "onUpdate:modelValue": ($event) => newUser.value.account = $event,
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: newUser.value.contact,
                              "onUpdate:modelValue": ($event) => newUser.value.contact = $event,
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, { label: "\u90AE\u7BB1" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: newUser.value.email,
                              "onUpdate:modelValue": ($event) => newUser.value.email = $event,
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, { label: "\u7B7E\u540D" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: newUser.value.signature,
                              "onUpdate:modelValue": ($event) => newUser.value.signature = $event,
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, { label: "\u90E8\u95E8" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: newUser.value.department,
                              "onUpdate:modelValue": ($event) => newUser.value.department = $event,
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, { label: "\u89D2\u8272" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: newUser.value.role,
                              "onUpdate:modelValue": ($event) => newUser.value.role = $event,
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["model"]),
                    createVNode("span", {
                      slot: "footer",
                      class: "dialog-footer"
                    }, [
                      createVNode(_component_el_button, {
                        onClick: ($event) => dialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5173\u95ED")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
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
                onRowDblclick: showTodoDetail
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_table_column, {
                    type: "selection",
                    "min-width": "3%"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "title",
                    label: "\u4EE3\u529E\u6807\u9898",
                    "min-width": "18%"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "status",
                    label: "\u4EE3\u529E\u72B6\u6001 ",
                    "min-width": "10%",
                    filters: [
                      { text: "\u5F85\u5904\u7406", value: "\u5F85\u5904\u7406" },
                      { text: "\u5DF2\u5B8C\u6210", value: "\u5DF2\u5B8C\u6210" }
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
                    prop: "applicant",
                    label: "\u7533\u8BF7\u4EBA",
                    "min-width": "18%"
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "createTime",
                    label: "\u521B\u5EFA\u65F6\u95F4",
                    "min-width": "17%"
                  }, {
                    default: withCtx((scope) => [
                      createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
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
                        onClick: ($event) => viewTodo(scope.row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u67E5\u770B")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      scope.row.status !== "\u5DF2\u5B8C\u6210" ? (openBlock(), createBlock(_component_el_button, {
                        key: 0,
                        link: "",
                        type: "primary",
                        size: "small",
                        onClick: ($event) => markAsCompleted(scope.row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6807\u8BB0\u4E3A\u5B8C\u6210 ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["data"]),
              createVNode(_component_el_dialog, {
                title: "\u7528\u6237\u6CE8\u518C\u4FE1\u606F",
                modelValue: dialogVisible.value,
                "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                width: "50%"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form, {
                    model: newUser.value,
                    "label-width": "100px",
                    style: { "padding": "20px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u59D3\u540D" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.name,
                            "onUpdate:modelValue": ($event) => newUser.value.name = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u8D26\u53F7" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.account,
                            "onUpdate:modelValue": ($event) => newUser.value.account = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.contact,
                            "onUpdate:modelValue": ($event) => newUser.value.contact = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u90AE\u7BB1" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.email,
                            "onUpdate:modelValue": ($event) => newUser.value.email = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u7B7E\u540D" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.signature,
                            "onUpdate:modelValue": ($event) => newUser.value.signature = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u90E8\u95E8" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.department,
                            "onUpdate:modelValue": ($event) => newUser.value.department = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u89D2\u8272" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.role,
                            "onUpdate:modelValue": ($event) => newUser.value.role = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["model"]),
                  createVNode("span", {
                    slot: "footer",
                    class: "dialog-footer"
                  }, [
                    createVNode(_component_el_button, {
                      onClick: ($event) => dialogVisible.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u5173\u95ED")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/MessageCenter/Todos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Todos-O1VaJ1QX.mjs.map
