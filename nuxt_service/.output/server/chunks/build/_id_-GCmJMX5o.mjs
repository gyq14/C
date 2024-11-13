import { _ as _export_sfc$1, b as ElButton, bp as ElForm, bq as ElFormItem } from './server.mjs';
import { useSSRContext, defineComponent, ref, unref, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { E as ElAlert } from './index-CDdgmNFE.mjs';
import { E as ElTable, a as ElTableColumn } from './index-CNyejJdT.mjs';
import { E as ElDialog } from './index-BxeEvH5l.mjs';
import { E as ElInput } from './index-BtYbkZRz.mjs';
import { E as ElSelect, a as ElOption } from './index-B8_nfca5.mjs';
import { E as ElDatePicker } from './index-CHLlcSZJ.mjs';
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
import './index-C5xdxGlv.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const tasks = {
      "1": {
        id: 1,
        name: "\u4EFB\u52A1 1",
        status: "\u5F85\u5904\u7406",
        deadline: "2024-12-31",
        time: "14:00",
        responsible: ["\u5F20\u4E09", "\u674E\u56DB"],
        description: "\u4EFB\u52A1\u63CF\u8FF0\u5185\u5BB9",
        attachments: ["\u6587\u4EF61.pdf", "\u6587\u4EF62.pdf"],
        user_id: 101,
        platform_type: "\u5185\u7F51",
        subtasks: [
          { id: 1, name: "\u5B50\u4EFB\u52A1 1", status: "\u5F85\u5904\u7406", deadline: "2024-12-31", responsible: ["\u5F20\u4E09"] },
          { id: 2, name: "\u5B50\u4EFB\u52A1 2", status: "\u5DF2\u5B8C\u6210", deadline: "2024-11-15", responsible: ["\u674E\u56DB"] }
        ]
      },
      "2": {
        id: 2,
        name: "\u4EFB\u52A1 2",
        status: "\u5DF2\u5B8C\u6210",
        deadline: "2024-11-15",
        time: "10:00",
        responsible: ["\u738B\u4E94"],
        description: "\u4EFB\u52A1\u63CF\u8FF0\u5185\u5BB9",
        attachments: [],
        user_id: 102,
        platform_type: "\u4F9B\u5E94\u5546",
        subtasks: [{ id: 3, name: "\u5B50\u4EFB\u52A1 3", status: "\u5F85\u5904\u7406", deadline: "2024-12-31", responsible: ["\u738B\u4E94"] }]
      }
    };
    const route = useRoute();
    const taskId = route.params.id;
    const task = (_a = tasks[taskId]) != null ? _a : null;
    const subtasks = ref((_b = task == null ? void 0 : task.subtasks) != null ? _b : []);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      _push(`<!--[--><div class="task-container" data-v-9615eef4><div class="task-info" data-v-9615eef4><h2 data-v-9615eef4>\u4EFB\u52A1\u57FA\u672C\u4FE1\u606F</h2>`);
      if (unref(task)) {
        _push(`<div data-v-9615eef4><div data-v-9615eef4><strong data-v-9615eef4>\u4EFB\u52A1\u540D\u79F0:</strong> ${ssrInterpolate(unref(task).name)}</div><div data-v-9615eef4><strong data-v-9615eef4>\u4EFB\u52A1\u72B6\u6001:</strong> ${ssrInterpolate(unref(task).status)}</div><div data-v-9615eef4><strong data-v-9615eef4>\u622A\u6B62\u65F6\u95F4:</strong> ${ssrInterpolate(unref(task).deadline)}</div><div data-v-9615eef4><strong data-v-9615eef4>\u8D1F\u8D23\u4EBA:</strong> ${ssrInterpolate(unref(task).responsible.join(", "))}</div><div data-v-9615eef4><strong data-v-9615eef4>\u63CF\u8FF0:</strong> ${ssrInterpolate(unref(task).description || "\u65E0\u63CF\u8FF0")}</div><div data-v-9615eef4><strong data-v-9615eef4>\u9644\u4EF6:</strong> `);
        if (unref(task).attachments) {
          _push(`<span data-v-9615eef4>\u6709\u9644\u4EF6</span>`);
        } else {
          _push(`<span data-v-9615eef4>\u65E0\u9644\u4EF6</span>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div data-v-9615eef4>`);
        _push(ssrRenderComponent(unref(ElAlert), {
          title: "\u4EFB\u52A1\u672A\u627E\u5230",
          type: "error"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="task-subtasks" data-v-9615eef4><div class="subtasks-header" data-v-9615eef4><div data-v-9615eef4><h2 data-v-9615eef4>\u5B50\u4EFB\u52A1\u5217\u8868</h2></div><div data-v-9615eef4>`);
      _push(ssrRenderComponent(unref(ElButton), {
        type: "primary",
        icon: "el-icon-plus",
        style: {},
        onClick: openCreateSubtaskDialog
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
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(ElTable), {
        data: subtasks.value,
        style: { "width": "100%" },
        border: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElTableColumn), {
              prop: "name",
              label: "\u5B50\u4EFB\u52A1\u540D\u79F0"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ElTableColumn), {
              prop: "status",
              label: "\u5B50\u4EFB\u52A1\u72B6\u6001"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ElTableColumn), {
              prop: "deadline",
              label: "\u5B50\u4EFB\u52A1\u622A\u6B62\u65F6\u95F4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ElTableColumn), {
              prop: "responsible",
              label: "\u5B50\u4EFB\u52A1\u8D1F\u8D23\u4EBA"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ElTableColumn), {
                prop: "name",
                label: "\u5B50\u4EFB\u52A1\u540D\u79F0"
              }),
              createVNode(unref(ElTableColumn), {
                prop: "status",
                label: "\u5B50\u4EFB\u52A1\u72B6\u6001"
              }),
              createVNode(unref(ElTableColumn), {
                prop: "deadline",
                label: "\u5B50\u4EFB\u52A1\u622A\u6B62\u65F6\u95F4"
              }),
              createVNode(unref(ElTableColumn), {
                prop: "responsible",
                label: "\u5B50\u4EFB\u52A1\u8D1F\u8D23\u4EBA"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(ElDialog), {
        "model-value": dialogVisible.value,
        title: "\u65B0\u5EFA\u5B50\u4EFB\u52A1",
        width: "50%",
        onClose: resetForm
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElForm), {
              model: newSubtask.value,
              ref: "subtaskForm",
              "label-width": "120px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5B50\u4EFB\u52A1\u540D\u79F0",
                    rules: [{ required: true, message: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0", trigger: "blur" }]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ElInput), {
                          modelValue: newSubtask.value.name,
                          "onUpdate:modelValue": ($event) => newSubtask.value.name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ElInput), {
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
                    label: "\u5B50\u4EFB\u52A1\u72B6\u6001",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u72B6\u6001", trigger: "change" }]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ElSelect), {
                          modelValue: newSubtask.value.status,
                          "onUpdate:modelValue": ($event) => newSubtask.value.status = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u72B6\u6001"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(ElOption), {
                                label: "\u5F85\u5904\u7406",
                                value: "\u5F85\u5904\u7406"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(ElOption), {
                                label: "\u5DF2\u5B8C\u6210",
                                value: "\u5DF2\u5B8C\u6210"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(ElOption), {
                                  label: "\u5F85\u5904\u7406",
                                  value: "\u5F85\u5904\u7406"
                                }),
                                createVNode(unref(ElOption), {
                                  label: "\u5DF2\u5B8C\u6210",
                                  value: "\u5DF2\u5B8C\u6210"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ElSelect), {
                            modelValue: newSubtask.value.status,
                            "onUpdate:modelValue": ($event) => newSubtask.value.status = $event,
                            placeholder: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u72B6\u6001"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ElOption), {
                                label: "\u5F85\u5904\u7406",
                                value: "\u5F85\u5904\u7406"
                              }),
                              createVNode(unref(ElOption), {
                                label: "\u5DF2\u5B8C\u6210",
                                value: "\u5DF2\u5B8C\u6210"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5B50\u4EFB\u52A1\u622A\u6B62\u65F6\u95F4",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4", trigger: "change" }]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ElDatePicker), {
                          modelValue: newSubtask.value.deadline,
                          "onUpdate:modelValue": ($event) => newSubtask.value.deadline = $event,
                          type: "date",
                          placeholder: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ElDatePicker), {
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
                    label: "\u5B50\u4EFB\u52A1\u8D1F\u8D23\u4EBA",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u8D1F\u8D23\u4EBA", trigger: "change" }]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ElSelect), {
                          modelValue: newSubtask.value.responsible,
                          "onUpdate:modelValue": ($event) => newSubtask.value.responsible = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA",
                          multiple: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(ElOption), {
                                label: "\u5F20\u4E09",
                                value: "\u5F20\u4E09"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(ElOption), {
                                label: "\u674E\u56DB",
                                value: "\u674E\u56DB"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(ElOption), {
                                label: "\u738B\u4E94",
                                value: "\u738B\u4E94"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(ElOption), {
                                  label: "\u5F20\u4E09",
                                  value: "\u5F20\u4E09"
                                }),
                                createVNode(unref(ElOption), {
                                  label: "\u674E\u56DB",
                                  value: "\u674E\u56DB"
                                }),
                                createVNode(unref(ElOption), {
                                  label: "\u738B\u4E94",
                                  value: "\u738B\u4E94"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ElSelect), {
                            modelValue: newSubtask.value.responsible,
                            "onUpdate:modelValue": ($event) => newSubtask.value.responsible = $event,
                            placeholder: "\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA",
                            multiple: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ElOption), {
                                label: "\u5F20\u4E09",
                                value: "\u5F20\u4E09"
                              }),
                              createVNode(unref(ElOption), {
                                label: "\u674E\u56DB",
                                value: "\u674E\u56DB"
                              }),
                              createVNode(unref(ElOption), {
                                label: "\u738B\u4E94",
                                value: "\u738B\u4E94"
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
                      label: "\u5B50\u4EFB\u52A1\u540D\u79F0",
                      rules: [{ required: true, message: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0", trigger: "blur" }]
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ElInput), {
                          modelValue: newSubtask.value.name,
                          "onUpdate:modelValue": ($event) => newSubtask.value.name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5B50\u4EFB\u52A1\u72B6\u6001",
                      rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u72B6\u6001", trigger: "change" }]
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ElSelect), {
                          modelValue: newSubtask.value.status,
                          "onUpdate:modelValue": ($event) => newSubtask.value.status = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u72B6\u6001"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(ElOption), {
                              label: "\u5F85\u5904\u7406",
                              value: "\u5F85\u5904\u7406"
                            }),
                            createVNode(unref(ElOption), {
                              label: "\u5DF2\u5B8C\u6210",
                              value: "\u5DF2\u5B8C\u6210"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5B50\u4EFB\u52A1\u622A\u6B62\u65F6\u95F4",
                      rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4", trigger: "change" }]
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ElDatePicker), {
                          modelValue: newSubtask.value.deadline,
                          "onUpdate:modelValue": ($event) => newSubtask.value.deadline = $event,
                          type: "date",
                          placeholder: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5B50\u4EFB\u52A1\u8D1F\u8D23\u4EBA",
                      rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u8D1F\u8D23\u4EBA", trigger: "change" }]
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ElSelect), {
                          modelValue: newSubtask.value.responsible,
                          "onUpdate:modelValue": ($event) => newSubtask.value.responsible = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA",
                          multiple: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(ElOption), {
                              label: "\u5F20\u4E09",
                              value: "\u5F20\u4E09"
                            }),
                            createVNode(unref(ElOption), {
                              label: "\u674E\u56DB",
                              value: "\u674E\u56DB"
                            }),
                            createVNode(unref(ElOption), {
                              label: "\u738B\u4E94",
                              value: "\u738B\u4E94"
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
            _push2(`<div slot="footer" class="dialog-footer" data-v-9615eef4${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ElButton), {
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
            _push2(ssrRenderComponent(unref(ElButton), {
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
              createVNode(unref(ElForm), {
                model: newSubtask.value,
                ref: "subtaskForm",
                "label-width": "120px"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: "\u5B50\u4EFB\u52A1\u540D\u79F0",
                    rules: [{ required: true, message: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0", trigger: "blur" }]
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ElInput), {
                        modelValue: newSubtask.value.name,
                        "onUpdate:modelValue": ($event) => newSubtask.value.name = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u5B50\u4EFB\u52A1\u540D\u79F0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u5B50\u4EFB\u52A1\u72B6\u6001",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u72B6\u6001", trigger: "change" }]
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ElSelect), {
                        modelValue: newSubtask.value.status,
                        "onUpdate:modelValue": ($event) => newSubtask.value.status = $event,
                        placeholder: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u72B6\u6001"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ElOption), {
                            label: "\u5F85\u5904\u7406",
                            value: "\u5F85\u5904\u7406"
                          }),
                          createVNode(unref(ElOption), {
                            label: "\u5DF2\u5B8C\u6210",
                            value: "\u5DF2\u5B8C\u6210"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u5B50\u4EFB\u52A1\u622A\u6B62\u65F6\u95F4",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4", trigger: "change" }]
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ElDatePicker), {
                        modelValue: newSubtask.value.deadline,
                        "onUpdate:modelValue": ($event) => newSubtask.value.deadline = $event,
                        type: "date",
                        placeholder: "\u8BF7\u9009\u62E9\u622A\u6B62\u65F6\u95F4"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u5B50\u4EFB\u52A1\u8D1F\u8D23\u4EBA",
                    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u5B50\u4EFB\u52A1\u8D1F\u8D23\u4EBA", trigger: "change" }]
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ElSelect), {
                        modelValue: newSubtask.value.responsible,
                        "onUpdate:modelValue": ($event) => newSubtask.value.responsible = $event,
                        placeholder: "\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA",
                        multiple: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ElOption), {
                            label: "\u5F20\u4E09",
                            value: "\u5F20\u4E09"
                          }),
                          createVNode(unref(ElOption), {
                            label: "\u674E\u56DB",
                            value: "\u674E\u56DB"
                          }),
                          createVNode(unref(ElOption), {
                            label: "\u738B\u4E94",
                            value: "\u738B\u4E94"
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
                createVNode(unref(ElButton), {
                  onClick: ($event) => dialogVisible.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(unref(ElButton), {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/leader/TaskCenter-[type]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-9615eef4"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-GCmJMX5o.mjs.map
