import { E as ElInput } from './index-Cg5LyBE9.mjs';
import { E as ElTree } from './index-BO9QWVPd.mjs';
import { E as ElDivider } from './index-CWAMHKLP.mjs';
import { _ as _export_sfc$1, b as ElButton, d as ElForm, e as ElFormItem } from './server.mjs';
import { E as ElTable, a as ElTableColumn } from './index-B3nBcefE.mjs';
import { E as ElDialog } from './index-DME6hliQ.mjs';
import { useSSRContext, defineComponent, ref, computed, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'lodash-unified';
import './index-DMIaAJTX.mjs';
import '@vue/shared';
import './token-BqWJQ4CJ.mjs';
import './index-_4KDOxFH.mjs';
import './index-CFmiHl38.mjs';
import './index-D0bGVFfM.mjs';
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
import 'normalize-wheel-es';
import './vnode-Cs2GWOIH.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "User",
  __ssrInlineRender: true,
  setup(__props) {
    const tableHeaderStyle = {
      backgroundColor: "#f0f0f0",
      color: "#000000",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "14px",
      padding: "12px",
      borderRadius: "4px 4px 0 0",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
    };
    const tableData = ref([
      {
        name: "\u5F20\u5EFA  ",
        account: "zhaoliu",
        contact: "13800000004",
        email: "zhaoliu@example.com",
        signature: "",
        department: "\u5236\u52A8\u7EC4",
        role: "\u7CFB\u7EDF\u7BA1\u7406\u5458"
      },
      {
        name: "\u5218\u8273 ",
        account: "qianqi",
        contact: "13800000005",
        email: "qianqi@example.com",
        signature: "",
        department: "\u8BBE\u8BA1\u7EC4",
        role: "\u6210\u5458"
      },
      {
        name: "\u5218\u7FD4\u884C",
        account: "sunba",
        contact: "13800000006",
        email: "sunba@example.com",
        signature: "",
        department: "",
        role: "\u90E8\u957F"
      }
    ]);
    const viewUserDetail = (row) => {
      console.log("\u67E5\u770B\u7528\u6237\u8BE6\u60C5:", row);
    };
    const removeUser = (row) => {
      console.log("\u5220\u9664\u7528\u6237:", row);
    };
    const showUserDetail = (row) => {
      console.log("\u53CC\u51FB\u884C\u67E5\u770B\u7528\u6237\u8BE6\u60C5:", row);
    };
    const searchQuery1 = ref("");
    const searchQuery2 = ref("");
    const treeData = computed(() => {
      const roles = {};
      const departments = {};
      tableData.value.forEach((user) => {
        if (user.role === "\u7CFB\u7EDF\u7BA1\u7406\u5458" || user.role === "\u90E8\u957F") {
          if (!roles[user.role]) roles[user.role] = [];
          roles[user.role].push({ label: user.name });
        }
        if (!departments[user.department]) departments[user.department] = [];
        departments[user.department].push({ label: user.name });
      });
      const result = [];
      for (const role in roles) {
        result.push({
          label: role,
          children: roles[role]
        });
      }
      for (const department in departments) {
        result.push({
          label: department,
          children: departments[department]
        });
      }
      return result;
    });
    const treeProps = ref({
      children: "children",
      label: "label"
    });
    const selectedRoleOrDept = ref("");
    const filteredTreeData = computed(() => {
      const filterText = searchQuery1.value.toLowerCase();
      if (!filterText) return treeData.value;
      const filterNodes = (nodes) => {
        return nodes.map((node) => ({
          ...node,
          children: node.children ? filterNodes(node.children) : void 0
        })).filter(
          (node) => node.label.toLowerCase().includes(filterText) || node.children && node.children.length > 0
        );
      };
      return filterNodes(treeData.value);
    });
    const handleSearch = () => {
    };
    const handleNodeClick = (node) => {
      selectedRoleOrDept.value = node.label;
    };
    const filteredTableData = computed(() => {
      var _a;
      let filteredByRoleOrDept = tableData.value;
      if (selectedRoleOrDept.value) {
        const selectedNode = treeData.value.find((node) => node.label === selectedRoleOrDept.value);
        const selectedChildren = ((_a = selectedNode == null ? void 0 : selectedNode.children) == null ? void 0 : _a.map((child) => child.label)) || [];
        filteredByRoleOrDept = tableData.value.filter(
          (user) => selectedChildren.length > 0 ? selectedChildren.includes(user.name) : user.department === selectedRoleOrDept.value || user.role === selectedRoleOrDept.value
        );
      }
      const filterText = searchQuery2.value.toLowerCase();
      if (!filterText) return filteredByRoleOrDept;
      return filteredByRoleOrDept.filter(
        (user) => user.name.toLowerCase().includes(filterText) || user.account.toLowerCase().includes(filterText) || user.contact.toLowerCase().includes(filterText) || user.email.toLowerCase().includes(filterText)
      );
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
    const openCreateDialog = () => {
      dialogVisible.value = true;
    };
    const resetForm = () => {
      newUser.value = {
        name: "",
        account: "",
        contact: "",
        email: "",
        signature: "",
        department: "",
        role: ""
      };
    };
    const saveNewUser = () => {
      console.log("\u4FDD\u5B58\u65B0\u7528\u6237:", newUser.value);
      tableData.value.push(newUser.value);
      dialogVisible.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_el_tree = ElTree;
      const _component_el_divider = ElDivider;
      const _component_el_button = ElButton;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_dialog = ElDialog;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      _push(`<!--[--><div style="${ssrRenderStyle({ "display": "flex" })}" data-v-2757ceca><div style="${ssrRenderStyle({ "width": "20%", "margin-right": "20px" })}" data-v-2757ceca>`);
      _push(ssrRenderComponent(_component_el_input, {
        placeholder: "\u641C\u7D22\u6210\u5458",
        modelValue: searchQuery1.value,
        "onUpdate:modelValue": ($event) => searchQuery1.value = $event,
        "prefix-icon": "el-icon-search",
        clearable: "",
        onInput: handleSearch,
        class: "mb-2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_tree, {
        data: filteredTreeData.value,
        props: treeProps.value,
        onNodeClick: handleNodeClick,
        class: "member-tree"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_divider, {
        direction: "vertical",
        style: { "height": "880px" }
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "width": "80%" })}" data-v-2757ceca><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "margin-bottom": "20px" })}" data-v-2757ceca>`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: openCreateDialog
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
        modelValue: searchQuery2.value,
        "onUpdate:modelValue": ($event) => searchQuery2.value = $event,
        "suffix-icon": "el-icon-search",
        placeholder: "\u641C\u7D22\u6210\u5458",
        clearable: "",
        style: { "width": "300px", "margin-left": "10px" }
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin-left": "20px" })}" data-v-2757ceca>\u5408\u8BA1 ${ssrInterpolate(filteredTableData.value.length)} \u6761</div></div>`);
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
              prop: "name",
              label: "\u59D3\u540D",
              "min-width": "10%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "account",
              label: "\u8D26\u53F7",
              "min-width": "10%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "contact",
              label: "\u8054\u7CFB\u65B9\u5F0F",
              "min-width": "10%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "email",
              label: "\u7535\u5B50\u90AE\u7BB1",
              "min-width": "15%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "signature",
              label: "\u7535\u5B50\u7B7E\u540D",
              "min-width": "15%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "department",
              label: "\u90E8\u95E8",
              "min-width": "10%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "role",
              label: "\u89D2\u8272",
              "min-width": "10%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "operation",
              fixed: "right",
              label: "\u64CD\u4F5C",
              "min-width": "10%"
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
                    type: "danger",
                    size: "small",
                    onClick: ($event) => removeUser(scope.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u5220\u9664`);
                      } else {
                        return [
                          createTextVNode("\u5220\u9664")
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
                      type: "danger",
                      size: "small",
                      onClick: ($event) => removeUser(scope.row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u5220\u9664")
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
                prop: "name",
                label: "\u59D3\u540D",
                "min-width": "10%"
              }),
              createVNode(_component_el_table_column, {
                prop: "account",
                label: "\u8D26\u53F7",
                "min-width": "10%"
              }),
              createVNode(_component_el_table_column, {
                prop: "contact",
                label: "\u8054\u7CFB\u65B9\u5F0F",
                "min-width": "10%"
              }),
              createVNode(_component_el_table_column, {
                prop: "email",
                label: "\u7535\u5B50\u90AE\u7BB1",
                "min-width": "15%"
              }),
              createVNode(_component_el_table_column, {
                prop: "signature",
                label: "\u7535\u5B50\u7B7E\u540D",
                "min-width": "15%"
              }),
              createVNode(_component_el_table_column, {
                prop: "department",
                label: "\u90E8\u95E8",
                "min-width": "10%"
              }),
              createVNode(_component_el_table_column, {
                prop: "role",
                label: "\u89D2\u8272",
                "min-width": "10%"
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
                    onClick: ($event) => viewUserDetail(scope.row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u67E5\u770B")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_el_button, {
                    link: "",
                    type: "danger",
                    size: "small",
                    onClick: ($event) => removeUser(scope.row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u5220\u9664")
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
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        title: "\u65B0\u5EFA\u7528\u6237",
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
        width: "50%",
        onClose: resetForm
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              model: newUser.value,
              ref: "userForm",
              "label-width": "100px",
              style: { "padding": "20px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u59D3\u540D" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: newUser.value.name,
                          "onUpdate:modelValue": ($event) => newUser.value.name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.name,
                            "onUpdate:modelValue": ($event) => newUser.value.name = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u8D26\u53F7" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: newUser.value.account,
                          "onUpdate:modelValue": ($event) => newUser.value.account = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.account,
                            "onUpdate:modelValue": ($event) => newUser.value.account = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: newUser.value.contact,
                          "onUpdate:modelValue": ($event) => newUser.value.contact = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u65B9\u5F0F"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.contact,
                            "onUpdate:modelValue": ($event) => newUser.value.contact = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u65B9\u5F0F"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u7535\u5B50\u90AE\u7BB1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: newUser.value.email,
                          "onUpdate:modelValue": ($event) => newUser.value.email = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u7535\u5B50\u90AE\u7BB1"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.email,
                            "onUpdate:modelValue": ($event) => newUser.value.email = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u7535\u5B50\u90AE\u7BB1"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u7535\u5B50\u7B7E\u540D" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: newUser.value.signature,
                          "onUpdate:modelValue": ($event) => newUser.value.signature = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u7535\u5B50\u7B7E\u540D"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.signature,
                            "onUpdate:modelValue": ($event) => newUser.value.signature = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u7535\u5B50\u7B7E\u540D"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u90E8\u95E8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: newUser.value.department,
                          "onUpdate:modelValue": ($event) => newUser.value.department = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u90E8\u95E8"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.department,
                            "onUpdate:modelValue": ($event) => newUser.value.department = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u90E8\u95E8"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u89D2\u8272" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: newUser.value.role,
                          "onUpdate:modelValue": ($event) => newUser.value.role = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: newUser.value.role,
                            "onUpdate:modelValue": ($event) => newUser.value.role = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, { label: "\u59D3\u540D" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: newUser.value.name,
                          "onUpdate:modelValue": ($event) => newUser.value.name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u8D26\u53F7" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: newUser.value.account,
                          "onUpdate:modelValue": ($event) => newUser.value.account = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: newUser.value.contact,
                          "onUpdate:modelValue": ($event) => newUser.value.contact = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u65B9\u5F0F"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u7535\u5B50\u90AE\u7BB1" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: newUser.value.email,
                          "onUpdate:modelValue": ($event) => newUser.value.email = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u7535\u5B50\u90AE\u7BB1"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u7535\u5B50\u7B7E\u540D" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: newUser.value.signature,
                          "onUpdate:modelValue": ($event) => newUser.value.signature = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u7535\u5B50\u7B7E\u540D"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u90E8\u95E8" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: newUser.value.department,
                          "onUpdate:modelValue": ($event) => newUser.value.department = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u90E8\u95E8"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u89D2\u8272" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: newUser.value.role,
                          "onUpdate:modelValue": ($event) => newUser.value.role = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span slot="footer" class="dialog-footer" data-v-2757ceca${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => dialogVisible.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6 \u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6 \u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              onClick: saveNewUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E \u5B9A`);
                } else {
                  return [
                    createTextVNode("\u786E \u5B9A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode(_component_el_form, {
                model: newUser.value,
                ref: "userForm",
                "label-width": "100px",
                style: { "padding": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, { label: "\u59D3\u540D" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: newUser.value.name,
                        "onUpdate:modelValue": ($event) => newUser.value.name = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u8D26\u53F7" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: newUser.value.account,
                        "onUpdate:modelValue": ($event) => newUser.value.account = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: newUser.value.contact,
                        "onUpdate:modelValue": ($event) => newUser.value.contact = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u65B9\u5F0F"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u7535\u5B50\u90AE\u7BB1" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: newUser.value.email,
                        "onUpdate:modelValue": ($event) => newUser.value.email = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u7535\u5B50\u90AE\u7BB1"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u7535\u5B50\u7B7E\u540D" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: newUser.value.signature,
                        "onUpdate:modelValue": ($event) => newUser.value.signature = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u7535\u5B50\u7B7E\u540D"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u90E8\u95E8" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: newUser.value.department,
                        "onUpdate:modelValue": ($event) => newUser.value.department = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u90E8\u95E8"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u89D2\u8272" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: newUser.value.role,
                        "onUpdate:modelValue": ($event) => newUser.value.role = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272"
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
                    createTextVNode("\u53D6 \u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: saveNewUser
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u786E \u5B9A")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/leader/Organization/User.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const User = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-2757ceca"]]);

export { User as default };
//# sourceMappingURL=User-CihDedCo.mjs.map
