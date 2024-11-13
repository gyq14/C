import { E as ElAlert } from './index-CDdgmNFE.mjs';
import { bm as useRoute, b8 as useUserStore, b as ElButton, bp as ElForm, bq as ElFormItem, _ as _export_sfc$1 } from './server.mjs';
import { E as ElTable, a as ElTableColumn } from './index-CNyejJdT.mjs';
import { E as ElDialog } from './index-BxeEvH5l.mjs';
import { E as ElInput } from './index-BtYbkZRz.mjs';
import { E as ElDatePicker } from './index-CHLlcSZJ.mjs';
import { E as ElSelect, a as ElOption } from './index-B8_nfca5.mjs';
import { useSSRContext, defineComponent, unref, ref, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRoute as useRoute$1, useRouter } from 'vue-router';
import { u as useTaskStore } from './index-Dnjjt4iK.mjs';
import { u as useSubtaskStore } from './index-BNWTj_L3.mjs';
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
import './index-CZuFgaK7.mjs';
import './index-DUiHV-eU.mjs';
import './index-FojM7Bi4.mjs';
import 'normalize-wheel-es';
import './vnode-Cs2GWOIH.mjs';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';
import './index-C5xdxGlv.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "alltask",
  __ssrInlineRender: true,
  props: {
    routetype: {}
  },
  setup(__props) {
    useUserStore();
    const tasksStore = useTaskStore();
    useSubtaskStore();
    const props = __props;
    const route = useRoute$1();
    const router = useRouter();
    const taskId = Number(route.params.id);
    const task = ref(tasksStore.getTaskById(taskId));
    const subtasks = ref([]);
    const dialogVisible = ref(false);
    const newSubtask = ref({
      name: "",
      status: "\u5F85\u5904\u7406",
      deadline: "",
      responsible: []
    });
    const formatDate = (date) => {
      if (typeof date === "string") {
        return date;
      }
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    const openCreateSubtaskDialog = () => {
      dialogVisible.value = true;
    };
    const createSubtask = () => {
      if (newSubtask.value.name && newSubtask.value.responsible.length && newSubtask.value.deadline) {
        newSubtask.value.deadline = formatDate(newSubtask.value.deadline);
        const newSubtaskId = subtasks.value.length + 1;
        subtasks.value.push({ ...newSubtask.value, id: newSubtaskId });
        dialogVisible.value = false;
        newSubtask.value = { name: "", status: "\u5F85\u5904\u7406", deadline: "", responsible: [] };
      } else {
        alert("\u8BF7\u586B\u5199\u5B8C\u6574\u7684\u5B50\u4EFB\u52A1\u4FE1\u606F");
      }
    };
    const resetForm = () => {
      newSubtask.value = { name: "", status: "\u5F85\u5904\u7406", deadline: "", responsible: [] };
      dialogVisible.value = false;
    };
    function goBack() {
      router.push(`${props.routetype}`);
    }
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
        default:
          return "\u672A\u77E5\u72B6\u6001";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_dialog = ElDialog;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      _push(`<!--[--><div class="task-container" data-v-23f36ce1><div class="task-info" data-v-23f36ce1><h2 data-v-23f36ce1>\u4EFB\u52A1\u57FA\u672C\u4FE1\u606F</h2>`);
      if (task.value) {
        _push(`<div data-v-23f36ce1><div data-v-23f36ce1><strong data-v-23f36ce1>\u4EFB\u52A1\u540D\u79F0:</strong> ${ssrInterpolate(task.value.title)}</div><div data-v-23f36ce1><strong data-v-23f36ce1>\u4EFB\u52A1\u72B6\u6001:</strong> ${ssrInterpolate(getStatus(task.value.status))}</div><div data-v-23f36ce1><strong data-v-23f36ce1>\u622A\u6B62\u65F6\u95F4:</strong> ${ssrInterpolate("2024.12.31")}</div><div data-v-23f36ce1><strong data-v-23f36ce1>\u63CF\u8FF0:</strong> ${ssrInterpolate(task.value.description || "\u65E0\u63CF\u8FF0")}</div><div data-v-23f36ce1><strong data-v-23f36ce1>\u9644\u4EF6:</strong> `);
        if (task.value.attachments) {
          _push(`<span data-v-23f36ce1>\u6709\u9644\u4EF6</span>`);
        } else {
          _push(`<span data-v-23f36ce1>\u65E0\u9644\u4EF6</span>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div data-v-23f36ce1>`);
        _push(ssrRenderComponent(_component_el_alert, {
          title: "\u4EFB\u52A1\u672A\u627E\u5230",
          type: "error"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="task-subtasks" data-v-23f36ce1><div class="subtasks-header" data-v-23f36ce1><div data-v-23f36ce1><h2 data-v-23f36ce1>\u5B50\u4EFB\u52A1\u5217\u8868</h2></div><div data-v-23f36ce1>`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: openCreateSubtaskDialog
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u65B0\u5EFA\u5B50\u4EFB\u52A1`);
          } else {
            return [
              createTextVNode("\u65B0\u5EFA\u5B50\u4EFB\u52A1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_table, {
        data: subtasks.value,
        style: { "width": "100%", "height": "90%" },
        border: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "name",
              label: "\u5B50\u4EFB\u52A1\u540D\u79F0"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "status",
              label: "\u5B50\u4EFB\u52A1\u72B6\u6001"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "deadline",
              label: "\u5B50\u4EFB\u52A1\u622A\u6B62\u65F6\u95F4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "responsible",
              label: "\u5B50\u4EFB\u52A1\u4F9B\u5E94\u5546"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                prop: "name",
                label: "\u5B50\u4EFB\u52A1\u540D\u79F0"
              }),
              createVNode(_component_el_table_column, {
                prop: "status",
                label: "\u5B50\u4EFB\u52A1\u72B6\u6001"
              }),
              createVNode(_component_el_table_column, {
                prop: "deadline",
                label: "\u5B50\u4EFB\u52A1\u622A\u6B62\u65F6\u95F4"
              }),
              createVNode(_component_el_table_column, {
                prop: "responsible",
                label: "\u5B50\u4EFB\u52A1\u4F9B\u5E94\u5546"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, { onClick: goBack }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u53D6\u6D88`);
          } else {
            return [
              createTextVNode("\u53D6\u6D88")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: goBack
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u786E\u5B9A`);
          } else {
            return [
              createTextVNode("\u786E\u5B9A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        "model-value": dialogVisible.value,
        title: "\u65B0\u5EFA\u5B50\u4EFB\u52A1",
        width: "50%",
        onClose: resetForm
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              model: newSubtask.value,
              ref: "subtaskForm",
              "label-width": "120px",
              style: { "padding-top": "20px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u540D\u79F0",
                    rules: [{ required: true, message: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0", trigger: "blur" }]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: newSubtask.value.name,
                          "onUpdate:modelValue": ($event) => newSubtask.value.name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: newSubtask.value.name,
                            "onUpdate:modelValue": ($event) => newSubtask.value.name = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u622A\u6B62\u65F6\u95F4",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4", trigger: "change" }]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_date_picker, {
                          modelValue: newSubtask.value.deadline,
                          "onUpdate:modelValue": ($event) => newSubtask.value.deadline = $event,
                          type: "date",
                          placeholder: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_date_picker, {
                            modelValue: newSubtask.value.deadline,
                            "onUpdate:modelValue": ($event) => newSubtask.value.deadline = $event,
                            type: "date",
                            placeholder: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u4F9B\u5E94\u5546",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546", trigger: "change" }]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_select, {
                          modelValue: newSubtask.value.responsible,
                          "onUpdate:modelValue": ($event) => newSubtask.value.responsible = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546",
                          multiple: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_option, {
                                label: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
                                value: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_option, {
                                  label: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
                                  value: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_select, {
                            modelValue: newSubtask.value.responsible,
                            "onUpdate:modelValue": ($event) => newSubtask.value.responsible = $event,
                            placeholder: "\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546",
                            multiple: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_option, {
                                label: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
                                value: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "\u540D\u79F0",
                      rules: [{ required: true, message: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0", trigger: "blur" }]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: newSubtask.value.name,
                          "onUpdate:modelValue": ($event) => newSubtask.value.name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u622A\u6B62\u65F6\u95F4",
                      rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4", trigger: "change" }]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_date_picker, {
                          modelValue: newSubtask.value.deadline,
                          "onUpdate:modelValue": ($event) => newSubtask.value.deadline = $event,
                          type: "date",
                          placeholder: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u4F9B\u5E94\u5546",
                      rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546", trigger: "change" }]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: newSubtask.value.responsible,
                          "onUpdate:modelValue": ($event) => newSubtask.value.responsible = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546",
                          multiple: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_option, {
                              label: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
                              value: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div slot="footer" class="dialog-footer" data-v-23f36ce1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => dialogVisible.value = false
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
              onClick: createSubtask
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u521B\u5EFA`);
                } else {
                  return [
                    createTextVNode("\u521B\u5EFA")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_el_form, {
                model: newSubtask.value,
                ref: "subtaskForm",
                "label-width": "120px",
                style: { "padding-top": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: "\u540D\u79F0",
                    rules: [{ required: true, message: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0", trigger: "blur" }]
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: newSubtask.value.name,
                        "onUpdate:modelValue": ($event) => newSubtask.value.name = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u622A\u6B62\u65F6\u95F4",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4", trigger: "change" }]
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_date_picker, {
                        modelValue: newSubtask.value.deadline,
                        "onUpdate:modelValue": ($event) => newSubtask.value.deadline = $event,
                        type: "date",
                        placeholder: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u4F9B\u5E94\u5546",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546", trigger: "change" }]
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_select, {
                        modelValue: newSubtask.value.responsible,
                        "onUpdate:modelValue": ($event) => newSubtask.value.responsible = $event,
                        placeholder: "\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546",
                        multiple: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_option, {
                            label: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
                            value: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"]),
              createVNode("div", {
                slot: "footer",
                class: "dialog-footer"
              }, [
                createVNode(_component_el_button, {
                  onClick: ($event) => dialogVisible.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: createSubtask
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u521B\u5EFA")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Subpage/alltask.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-23f36ce1"]]);
const type = `/admin/TaskCenter`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SubpageAlltask = __nuxt_component_0;
      if (unref(route).params.id) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_SubpageAlltask, { routetype: type }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/TaskCenter-[type]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BslU1Tce.mjs.map
