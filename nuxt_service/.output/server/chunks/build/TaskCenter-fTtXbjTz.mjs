import { _ as _export_sfc$1, b8 as useUserStore, b9 as search_default, bz as upload_filled_default, b as ElButton, bp as ElForm, bq as ElFormItem, E as ElConfigProvider, q as ElIcon } from './server.mjs';
import { E as ElInput } from './index-BtYbkZRz.mjs';
import { E as ElDialog } from './index-BxeEvH5l.mjs';
import { E as ElRow, a as ElUpload } from './index-D3RpTjYB.mjs';
import { E as ElDatePicker, a as ElTimePicker } from './index-CHLlcSZJ.mjs';
import { E as ElSelect, a as ElOption } from './index-B8_nfca5.mjs';
import { E as ElSpace } from './index-CW7OleAO.mjs';
import { E as ElTag } from './index-C5xdxGlv.mjs';
import { E as ElDivider } from './index-Bhsu9wGt.mjs';
import { useSSRContext, defineComponent, ref, computed, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { z as zhCn } from './zh-cn-htd4_pmu.mjs';
import { u as useTaskStore } from './index-Dnjjt4iK.mjs';
import { u as useNotificationStore } from './index-B-w5YAGs.mjs';
import { u as useTodoStore } from './index-iz7lIZOX.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'unhead';
import '@unhead/shared';
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
import './index-DUiHV-eU.mjs';
import './vnode-Cs2GWOIH.mjs';
import './index-CZuFgaK7.mjs';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TaskCenter",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = ref(zhCn);
    const userstore = useUserStore();
    const taskstore = useTaskStore();
    const notificationStore = useNotificationStore();
    const todoStore = useTodoStore();
    useRoute();
    const router = useRouter();
    const form = ref({
      name: "",
      deadline: "",
      time: "",
      responsible: 0,
      desc: ""
    });
    const bShowNewTodo = ref(false);
    ref(false);
    const createNewTodo = () => {
      var _a, _b, _c;
      if (form.value.name && form.value.responsible > 0) {
        taskstore.createTask({
          title: form.value.name,
          version: "A.1",
          approverId: form.value.responsible,
          responsibleId: (_a = userstore.userData) == null ? void 0 : _a.id,
          dueDate: "23432523545",
          description: form.value.desc
        });
        bShowNewTodo.value = false;
        notificationStore.createNotification({
          title: `${form.value.name}\u7684\u5BA1\u6279\u901A\u77E5`,
          type: "Information",
          status: "Unread",
          senderId: (_b = userstore.userData) == null ? void 0 : _b.id,
          receiverId: form.value.responsible,
          expiry: "23423545"
        });
        todoStore.createTodo({
          title: form.value.name,
          type: "Task",
          status: "AwaitingApproval",
          applicantId: (_c = userstore.userData) == null ? void 0 : _c.id,
          receiverId: form.value.responsible
        });
        resetForm();
      }
    };
    const resetForm = () => {
      form.value.name = "";
      form.value.deadline = "";
      form.value.time = "";
      form.value.responsible = 0;
      form.value.desc = "";
    };
    const filteredTodos = computed(() => {
      return taskstore.unCompletedtasksData.filter((todo) => todo.title.includes(searchQuery.value));
    });
    ref(0);
    const searchQuery = ref("");
    const goToProjectDetail = (id) => {
      router.push(`/admin/TaskCenter-TaskCenter/${id}`);
    };
    const getStatusType = (status) => {
      switch (status) {
        case "InProgress":
          return "success";
        case "Pending":
          return "primary";
        case "AwaitingApproval":
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
        case "Delayed":
          return "\u5DF2\u5EF6\u671F";
        default:
          return "\u672A\u77E5\u72B6\u6001";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = ElButton;
      const _component_el_input = ElInput;
      const _component_el_dialog = ElDialog;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_config_provider = ElConfigProvider;
      const _component_el_row = ElRow;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_time_picker = ElTimePicker;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_upload = ElUpload;
      const _component_el_icon = ElIcon;
      const _component_el_space = ElSpace;
      const _component_el_tag = ElTag;
      const _component_el_divider = ElDivider;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-392313ce><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "margin-bottom": "20px" })}" data-v-392313ce>`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: ($event) => bShowNewTodo.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u65B0\u5EFA`);
          } else {
            return [
              createTextVNode("\u65B0\u5EFA")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        "suffix-icon": unref(search_default),
        placeholder: "\u641C\u7D22\u4EFB\u52A1",
        clearable: "",
        style: { "width": "300px", "margin-left": "10px" }
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin-left": "20px" })}" data-v-392313ce>\u5408\u8BA1 ${ssrInterpolate(filteredTodos.value.length)} \u6761</div></div>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: bShowNewTodo.value,
        "onUpdate:modelValue": ($event) => bShowNewTodo.value = $event,
        title: "\u65B0\u5EFA\u4EFB\u52A1",
        width: "800px",
        center: true,
        onClose: resetForm
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="dialog-footer" data-v-392313ce${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => bShowNewTodo.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              onClick: createNewTodo
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u5B9A`);
                } else {
                  return [
                    createTextVNode("\u786E\u5B9A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "dialog-footer" }, [
                createVNode(_component_el_button, {
                  onClick: ($event) => bShowNewTodo.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: createNewTodo
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u786E\u5B9A")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              model: form.value,
              "label-width": "auto",
              style: { "max-width": "100%", "padding": "20px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u4EFB\u52A1\u540D\u79F0\uFF1A",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: form.value.name,
                          "onUpdate:modelValue": ($event) => form.value.name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: form.value.name,
                            "onUpdate:modelValue": ($event) => form.value.name = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_config_provider, { locale: locale.value }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_form_item, {
                          label: "\u622A\u6B62\u65F6\u95F4\uFF1A",
                          required: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div style="${ssrRenderStyle({ "display": "flex" })}" data-v-392313ce${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_el_date_picker, {
                                      modelValue: form.value.deadline,
                                      "onUpdate:modelValue": ($event) => form.value.deadline = $event,
                                      type: "date",
                                      placeholder: "\u9009\u62E9\u622A\u6B62\u65F6\u95F4",
                                      style: { "width": "305px" }
                                    }, null, _parent6, _scopeId5));
                                    _push6(` ---- `);
                                    _push6(ssrRenderComponent(_component_el_time_picker, {
                                      modelValue: form.value.time,
                                      "onUpdate:modelValue": ($event) => form.value.time = $event,
                                      placeholder: "\u9009\u62E9\u65F6\u95F4",
                                      style: { "width": "305px" }
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { style: { "display": "flex" } }, [
                                        createVNode(_component_el_date_picker, {
                                          modelValue: form.value.deadline,
                                          "onUpdate:modelValue": ($event) => form.value.deadline = $event,
                                          type: "date",
                                          placeholder: "\u9009\u62E9\u622A\u6B62\u65F6\u95F4",
                                          style: { "width": "305px" }
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createTextVNode(" ---- "),
                                        createVNode(_component_el_time_picker, {
                                          modelValue: form.value.time,
                                          "onUpdate:modelValue": ($event) => form.value.time = $event,
                                          placeholder: "\u9009\u62E9\u65F6\u95F4",
                                          style: { "width": "305px" }
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_row, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "display": "flex" } }, [
                                      createVNode(_component_el_date_picker, {
                                        modelValue: form.value.deadline,
                                        "onUpdate:modelValue": ($event) => form.value.deadline = $event,
                                        type: "date",
                                        placeholder: "\u9009\u62E9\u622A\u6B62\u65F6\u95F4",
                                        style: { "width": "305px" }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createTextVNode(" ---- "),
                                      createVNode(_component_el_time_picker, {
                                        modelValue: form.value.time,
                                        "onUpdate:modelValue": ($event) => form.value.time = $event,
                                        placeholder: "\u9009\u62E9\u65F6\u95F4",
                                        style: { "width": "305px" }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_form_item, {
                            label: "\u622A\u6B62\u65F6\u95F4\uFF1A",
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_row, null, {
                                default: withCtx(() => [
                                  createVNode("div", { style: { "display": "flex" } }, [
                                    createVNode(_component_el_date_picker, {
                                      modelValue: form.value.deadline,
                                      "onUpdate:modelValue": ($event) => form.value.deadline = $event,
                                      type: "date",
                                      placeholder: "\u9009\u62E9\u622A\u6B62\u65F6\u95F4",
                                      style: { "width": "305px" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createTextVNode(" ---- "),
                                    createVNode(_component_el_time_picker, {
                                      modelValue: form.value.time,
                                      "onUpdate:modelValue": ($event) => form.value.time = $event,
                                      placeholder: "\u9009\u62E9\u65F6\u95F4",
                                      style: { "width": "305px" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u8D1F\u8D23\u4EBA\uFF1A",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_select, {
                          modelValue: form.value.responsible,
                          "onUpdate:modelValue": ($event) => form.value.responsible = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(userstore).leaderData, (item) => {
                                _push5(ssrRenderComponent(_component_el_option, {
                                  key: item.id,
                                  label: item.name,
                                  value: item.id
                                }, null, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(userstore).leaderData, (item) => {
                                  return openBlock(), createBlock(_component_el_option, {
                                    key: item.id,
                                    label: item.name,
                                    value: item.id
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_select, {
                            modelValue: form.value.responsible,
                            "onUpdate:modelValue": ($event) => form.value.responsible = $event,
                            placeholder: "\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(userstore).leaderData, (item) => {
                                return openBlock(), createBlock(_component_el_option, {
                                  key: item.id,
                                  label: item.name,
                                  value: item.id
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u5907\u6CE8\uFF1A" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: form.value.desc,
                          "onUpdate:modelValue": ($event) => form.value.desc = $event,
                          type: "textarea",
                          placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u8BF4\u660E"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: form.value.desc,
                            "onUpdate:modelValue": ($event) => form.value.desc = $event,
                            type: "textarea",
                            placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u8BF4\u660E"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u9644\u4EF6\uFF1A" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_upload, {
                          class: "upload-demo",
                          drag: "",
                          action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
                          multiple: "",
                          style: { "width": "100%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_icon, { class: "el-icon--upload" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(upload_filled_default), null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(upload_filled_default))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div data-v-392313ce${_scopeId4}>\u4E0A\u4F20\u6587\u4EF6</div>`);
                            } else {
                              return [
                                createVNode(_component_el_icon, { class: "el-icon--upload" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(upload_filled_default))
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, "\u4E0A\u4F20\u6587\u4EF6")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_upload, {
                            class: "upload-demo",
                            drag: "",
                            action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
                            multiple: "",
                            style: { "width": "100%" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, { class: "el-icon--upload" }, {
                                default: withCtx(() => [
                                  createVNode(unref(upload_filled_default))
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, "\u4E0A\u4F20\u6587\u4EF6")
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
                    createVNode(_component_el_form_item, {
                      label: "\u4EFB\u52A1\u540D\u79F0\uFF1A",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: form.value.name,
                          "onUpdate:modelValue": ($event) => form.value.name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_config_provider, { locale: locale.value }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          label: "\u622A\u6B62\u65F6\u95F4\uFF1A",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_row, null, {
                              default: withCtx(() => [
                                createVNode("div", { style: { "display": "flex" } }, [
                                  createVNode(_component_el_date_picker, {
                                    modelValue: form.value.deadline,
                                    "onUpdate:modelValue": ($event) => form.value.deadline = $event,
                                    type: "date",
                                    placeholder: "\u9009\u62E9\u622A\u6B62\u65F6\u95F4",
                                    style: { "width": "305px" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createTextVNode(" ---- "),
                                  createVNode(_component_el_time_picker, {
                                    modelValue: form.value.time,
                                    "onUpdate:modelValue": ($event) => form.value.time = $event,
                                    placeholder: "\u9009\u62E9\u65F6\u95F4",
                                    style: { "width": "305px" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["locale"]),
                    createVNode(_component_el_form_item, {
                      label: "\u8D1F\u8D23\u4EBA\uFF1A",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: form.value.responsible,
                          "onUpdate:modelValue": ($event) => form.value.responsible = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(userstore).leaderData, (item) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: item.id,
                                label: item.name,
                                value: item.id
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u5907\u6CE8\uFF1A" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: form.value.desc,
                          "onUpdate:modelValue": ($event) => form.value.desc = $event,
                          type: "textarea",
                          placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u8BF4\u660E"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u9644\u4EF6\uFF1A" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_upload, {
                          class: "upload-demo",
                          drag: "",
                          action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
                          multiple: "",
                          style: { "width": "100%" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_icon, { class: "el-icon--upload" }, {
                              default: withCtx(() => [
                                createVNode(unref(upload_filled_default))
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, "\u4E0A\u4F20\u6587\u4EF6")
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
              createVNode(_component_el_form, {
                model: form.value,
                "label-width": "auto",
                style: { "max-width": "100%", "padding": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: "\u4EFB\u52A1\u540D\u79F0\uFF1A",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: form.value.name,
                        "onUpdate:modelValue": ($event) => form.value.name = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_config_provider, { locale: locale.value }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        label: "\u622A\u6B62\u65F6\u95F4\uFF1A",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_row, null, {
                            default: withCtx(() => [
                              createVNode("div", { style: { "display": "flex" } }, [
                                createVNode(_component_el_date_picker, {
                                  modelValue: form.value.deadline,
                                  "onUpdate:modelValue": ($event) => form.value.deadline = $event,
                                  type: "date",
                                  placeholder: "\u9009\u62E9\u622A\u6B62\u65F6\u95F4",
                                  style: { "width": "305px" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createTextVNode(" ---- "),
                                createVNode(_component_el_time_picker, {
                                  modelValue: form.value.time,
                                  "onUpdate:modelValue": ($event) => form.value.time = $event,
                                  placeholder: "\u9009\u62E9\u65F6\u95F4",
                                  style: { "width": "305px" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["locale"]),
                  createVNode(_component_el_form_item, {
                    label: "\u8D1F\u8D23\u4EBA\uFF1A",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_select, {
                        modelValue: form.value.responsible,
                        "onUpdate:modelValue": ($event) => form.value.responsible = $event,
                        placeholder: "\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(userstore).leaderData, (item) => {
                            return openBlock(), createBlock(_component_el_option, {
                              key: item.id,
                              label: item.name,
                              value: item.id
                            }, null, 8, ["label", "value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u5907\u6CE8\uFF1A" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: form.value.desc,
                        "onUpdate:modelValue": ($event) => form.value.desc = $event,
                        type: "textarea",
                        placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u8BF4\u660E"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u9644\u4EF6\uFF1A" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_upload, {
                        class: "upload-demo",
                        drag: "",
                        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
                        multiple: "",
                        style: { "width": "100%" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { class: "el-icon--upload" }, {
                            default: withCtx(() => [
                              createVNode(unref(upload_filled_default))
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, "\u4E0A\u4F20\u6587\u4EF6")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_space, { wrap: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(filteredTodos.value, (todo) => {
              _push2(`<div class="custom-card" data-v-392313ce${_scopeId}><span class="card-header" data-v-392313ce${_scopeId}><div data-v-392313ce${_scopeId}>${ssrInterpolate(todo.title)}</div>`);
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
              _push2(`<div class="card-content" data-v-392313ce${_scopeId}><strong data-v-392313ce${_scopeId}>\u5907\u6CE8:</strong> ${ssrInterpolate(todo.description)}</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(filteredTodos.value, (todo) => {
                return openBlock(), createBlock("div", {
                  key: todo.title,
                  class: "custom-card",
                  onDblclick: ($event) => todo.status != "AwaitingApproval" && goToProjectDetail(todo.id)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/TaskCenter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TaskCenter = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-392313ce"]]);

export { TaskCenter as default };
//# sourceMappingURL=TaskCenter-fTtXbjTz.mjs.map
