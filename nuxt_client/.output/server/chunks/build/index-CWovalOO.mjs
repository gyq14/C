import { a3 as useNamespace, bc as useId, aD as buildProps, aG as useSizeProp, aE as definePropType, a7 as iconPropType, aF as circle_close_default, b9 as arrow_down_default, aH as useEmptyValuesProps, a4 as ElIcon, bB as useMutationObserver, aa as withInstall, br as withNoopInstall, _ as _export_sfc$1, ae as _export_sfc, a8 as useLocale, aI as useFormItem, bm as useFormItemInputId, aJ as useEmptyValues, bo as ValidateComponentsMap, aN as useFormSize, ac as isUndefined, aK as debugWarn, ba as isNumber, be as useResizeObserver, E as ElConfigProvider, b as ElButton } from './server.mjs';
import { E as ElDatePicker, a as ElCard, _ as __nuxt_component_5 } from './doughnut-BiEzmLSJ.mjs';
import { E as ElDivider } from './index-CWAMHKLP.mjs';
import { E as ElTable, a as ElTableColumn } from './index-B3nBcefE.mjs';
import { defineComponent, computed, unref, reactive, toRefs, getCurrentInstance, inject, ref, provide, useSSRContext, toRaw, watch, watchEffect, nextTick, withCtx, createVNode, createTextVNode, toDisplayString, withDirectives, openBlock, createElementBlock, normalizeClass, withModifiers, renderSlot, createElementVNode, vShow, normalizeStyle, createCommentVNode, resolveComponent, resolveDirective, toHandlerKey, Fragment, renderList, createBlock, withKeys, vModelText, resolveDynamicComponent } from 'vue';
import { u as useTooltipContentProps, a as Ee, c as ElScrollbar, b as ElTooltip, C as ClickOutside, E as EVENT_CODE } from './index-D0bGVFfM.mjs';
import { t as tagProps, E as ElTag } from './index-CahaU-nv.mjs';
import { isEqual, castArray, get, debounce, findLastIndex } from 'lodash-unified';
import { s as selectKey, a as selectGroupKey } from './token-BqWJQ4CJ.mjs';
import { isArray, isObject, isFunction, toRawType, isString } from '@vue/shared';
import { U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT, b as useComposition, a as useFocusController } from './index-Cg5LyBE9.mjs';
import { u as useAriaProps } from './index-DMIaAJTX.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { z as zhCn } from './zh-cn-htd4_pmu.mjs';
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
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';
import './client-only-DO9VxlB2.mjs';
import 'zrender/lib/core/PathProxy.js';
import 'zrender/lib/contain/util.js';
import 'zrender/lib/core/curve.js';
import './index-CFmiHl38.mjs';
import 'normalize-wheel-es';

const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
function useOption(props, states) {
  const select = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const itemSelected = computed(() => {
    return contains(castArray(select.props.modelValue), props.value);
  });
  const limitReached = computed(() => {
    var _a;
    if (select.props.multiple) {
      const modelValue = castArray((_a = select.props.modelValue) != null ? _a : []);
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject(props.value) ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject(props.value)) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.states.hoveringIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  const updateOption = (query) => {
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(currentLabel.value) || props.created;
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    if (val !== oldVal) {
      select.onOptionDestroy(oldVal, instance.proxy);
      select.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && isObject(val) && isObject(oldVal) && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
    updateOption
  };
}
const _sfc_main$5 = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const id = useId();
    const containerKls = computed(() => [
      ns.be("dropdown", "item"),
      ns.is("disabled", unref(isDisabled)),
      ns.is("selected", unref(itemSelected)),
      ns.is("hovering", unref(hover))
    ]);
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hover: false
    });
    const {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption
    } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    function selectOptionClick() {
      if (!isDisabled.value) {
        select.handleOptionSelect(vm);
      }
    }
    return {
      ns,
      id,
      containerKls,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    id: _ctx.id,
    class: normalizeClass(_ctx.containerKls),
    role: "option",
    "aria-disabled": _ctx.isDisabled || void 0,
    "aria-selected": _ctx.itemSelected,
    onMouseenter: _ctx.hoverItem,
    onClick: withModifiers(_ctx.selectOptionClick, ["stop"])
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMouseenter", "onClick"])), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__file", "option.vue"]]);
const _sfc_main$4 = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns = useNamespace("select");
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.be("dropdown", "header"))
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.ns.be("dropdown", "footer"))
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__file", "select-dropdown.vue"]]);
const MINIMUM_INPUT_WIDTH = 11;
const useSelect = (props, emit) => {
  const { t } = useLocale();
  const contentId = useId();
  const nsSelect = useNamespace("select");
  const nsInput = useNamespace("input");
  const states = reactive({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: [],
    selectionWidth: 0,
    calculatorWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: false,
    menuVisibleOnFocus: false,
    isBeforeHide: false
  });
  const selectRef = ref(null);
  const selectionRef = ref(null);
  const tooltipRef = ref(null);
  const tagTooltipRef = ref(null);
  const inputRef = ref(null);
  const calculatorRef = ref(null);
  const prefixRef = ref(null);
  const suffixRef = ref(null);
  const menuRef = ref(null);
  const tagMenuRef = ref(null);
  const collapseItemRef = ref(null);
  const scrollbarRef = ref(null);
  const {
    isComposing,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  } = useComposition({
    afterComposition: (e) => onInput(e)
  });
  const { wrapperRef, isFocused, handleBlur } = useFocusController(inputRef, {
    beforeFocus() {
      return selectDisabled.value;
    },
    afterFocus() {
      if (props.automaticDropdown && !expanded.value) {
        expanded.value = true;
        states.menuVisibleOnFocus = true;
      }
    },
    beforeBlur(event) {
      var _a, _b;
      return ((_a = tooltipRef.value) == null ? void 0 : _a.isFocusInsideContent(event)) || ((_b = tagTooltipRef.value) == null ? void 0 : _b.isFocusInsideContent(event));
    },
    afterBlur() {
      expanded.value = false;
      states.menuVisibleOnFocus = false;
    }
  });
  const expanded = ref(false);
  const hoverOption = ref();
  const { form, formItem } = useFormItem();
  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem
  });
  const { valueOnClear, isEmptyValue } = useEmptyValues(props);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const hasModelValue = computed(() => {
    return isArray(props.modelValue) ? props.modelValue.length > 0 : !isEmptyValue(props.modelValue);
  });
  const showClose = computed(() => {
    return props.clearable && !selectDisabled.value && states.inputHovering && hasModelValue.value;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => nsSelect.is("reverse", iconComponent.value && expanded.value));
  const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
  const validateIcon = computed(() => ValidateComponentsMap[validateState.value]);
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && !states.inputValue && states.options.size === 0)
        return false;
      if (props.filterable && states.inputValue && states.options.size > 0 && filteredOptionsCount.value === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const filteredOptionsCount = computed(() => optionsArray.value.filter((option) => option.visible).length);
  const optionsArray = computed(() => {
    const list = Array.from(states.options.values());
    const newList = [];
    states.optionValues.forEach((item) => {
      const index2 = list.findIndex((i) => i.value === item);
      if (index2 > -1) {
        newList.push(list[index2]);
      }
    });
    return newList.length >= list.length ? newList : list;
  });
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.inputValue;
    });
    return props.filterable && props.allowCreate && states.inputValue !== "" && !hasExistingOption;
  });
  const updateOptions = () => {
    if (props.filterable && isFunction(props.filterMethod))
      return;
    if (props.filterable && props.remote && isFunction(props.remoteMethod))
      return;
    optionsArray.value.forEach((option) => {
      var _a;
      (_a = option.updateOption) == null ? void 0 : _a.call(option, states.inputValue);
    });
  };
  const selectSize = useFormSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && emptyText.value !== false;
    },
    set(val) {
      expanded.value = val;
    }
  });
  const shouldShowPlaceholder = computed(() => {
    if (props.multiple && !isUndefined(props.modelValue)) {
      return castArray(props.modelValue).length === 0 && !states.inputValue;
    }
    const value = isArray(props.modelValue) ? props.modelValue[0] : props.modelValue;
    return props.filterable || isUndefined(value) ? !states.inputValue : true;
  });
  const currentPlaceholder = computed(() => {
    var _a;
    const _placeholder = (_a = props.placeholder) != null ? _a : t("el.select.placeholder");
    return props.multiple || !hasModelValue.value ? _placeholder : states.selectedLabel;
  });
  const mouseEnterEventName = computed(() => "mouseenter");
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
        handleQueryChange("");
      }
    }
    setSelected();
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => expanded.value, (val) => {
    if (val) {
      handleQueryChange(states.inputValue);
    } else {
      states.inputValue = "";
      states.previousQuery = null;
      states.isBeforeHide = true;
    }
    emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    return;
  }, {
    flush: "post"
  });
  watch(() => states.hoveringIndex, (val) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  watchEffect(() => {
    if (states.isBeforeHide)
      return;
    updateOptions();
  });
  const handleQueryChange = (val) => {
    if (states.previousQuery === val || isComposing.value) {
      return;
    }
    states.previousQuery = val;
    if (props.filterable && isFunction(props.filterMethod)) {
      props.filterMethod(val);
    } else if (props.filterable && props.remote && isFunction(props.remoteMethod)) {
      props.remoteMethod(val);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      nextTick(checkDefaultFirstOption);
    } else {
      nextTick(updateHoveringIndex);
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    const valueList = optionsArray.value.map((item) => item.value);
    states.hoveringIndex = getValueIndex(valueList, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    if (!props.multiple) {
      const value = isArray(props.modelValue) ? props.modelValue[0] : props.modelValue;
      const option = getOption(value);
      states.selectedLabel = option.currentLabel;
      states.selected = [option];
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (!isUndefined(props.modelValue)) {
      castArray(props.modelValue).forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          get isDisabled() {
            return cachedOption.isDisabled;
          }
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : !isNull && !isUndefined2 ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    return newOption;
  };
  const updateHoveringIndex = () => {
    states.hoveringIndex = optionsArray.value.findIndex((item) => states.selected.some((selected) => getValueKey(selected) === getValueKey(item)));
  };
  const resetSelectionWidth = () => {
    states.selectionWidth = selectionRef.value.getBoundingClientRect().width;
  };
  const resetCalculatorWidth = () => {
    states.calculatorWidth = calculatorRef.value.getBoundingClientRect().width;
  };
  const resetCollapseItemWidth = () => {
    states.collapseItemWidth = collapseItemRef.value.getBoundingClientRect().width;
  };
  const updateTooltip = () => {
    var _a, _b;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const updateTagTooltip = () => {
    var _a, _b;
    (_b = (_a = tagTooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const onInputChange = () => {
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true;
    }
    handleQueryChange(states.inputValue);
  };
  const onInput = (event) => {
    states.inputValue = event.target.value;
    if (props.remote) {
      debouncedOnInputChange();
    } else {
      return onInputChange();
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val);
    }
  };
  const getLastNotDisabledIndex = (value) => findLastIndex(value, (it) => !states.disabledOptions.has(it));
  const deletePrevTag = (e) => {
    if (!props.multiple)
      return;
    if (e.code === EVENT_CODE.delete)
      return;
    if (e.target.value.length <= 0) {
      const value = castArray(props.modelValue).slice();
      const lastNotDisabledIndex = getLastNotDisabledIndex(value);
      if (lastNotDisabledIndex < 0)
        return;
      const removeTagValue = value[lastNotDisabledIndex];
      value.splice(lastNotDisabledIndex, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", removeTagValue);
    }
  };
  const deleteTag = (event, tag) => {
    const index2 = states.selected.indexOf(tag);
    if (index2 > -1 && !selectDisabled.value) {
      const value = castArray(props.modelValue).slice();
      value.splice(index2, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", tag.value);
    }
    event.stopPropagation();
    focus();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : valueOnClear.value;
    if (props.multiple) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoveringIndex = -1;
    expanded.value = false;
    emit("clear");
    focus();
  };
  const handleOptionSelect = (option) => {
    var _a;
    if (props.multiple) {
      const value = castArray((_a = props.modelValue) != null ? _a : []).slice();
      const optionIndex = getValueIndex(value, option);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        handleQueryChange("");
      }
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
      }
    } else {
      emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      expanded.value = false;
    }
    focus();
    if (expanded.value)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], option) => {
    if (!isObject(option == null ? void 0 : option.value))
      return arr.indexOf(option.value);
    return arr.findIndex((item) => {
      return isEqual(get(item, props.valueKey), getValueKey(option));
    });
  };
  const scrollToOption = (option) => {
    var _a, _b, _c, _d, _e;
    const targetOption = isArray(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${nsSelect.be("dropdown", "wrap")}`);
    }
    (_e = scrollbarRef.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
    vm.disabled && states.disabledOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.options.delete(key);
    }
  };
  const popperRef = computed(() => {
    var _a, _b;
    return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
  });
  const handleMenuEnter = () => {
    states.isBeforeHide = false;
    nextTick(() => scrollToOption(states.selected));
  };
  const focus = () => {
    var _a;
    (_a = inputRef.value) == null ? void 0 : _a.focus();
  };
  const blur = () => {
    var _a;
    if (expanded.value) {
      expanded.value = false;
      nextTick(() => {
        var _a2;
        return (_a2 = inputRef.value) == null ? void 0 : _a2.blur();
      });
      return;
    }
    (_a = inputRef.value) == null ? void 0 : _a.blur();
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClickOutside = (event) => {
    expanded.value = false;
    if (isFocused.value) {
      const _event = new FocusEvent("focus", event);
      nextTick(() => handleBlur(_event));
    }
  };
  const handleEsc = () => {
    if (states.inputValue.length > 0) {
      states.inputValue = "";
    } else {
      expanded.value = false;
    }
  };
  const toggleMenu = () => {
    if (selectDisabled.value)
      return;
    if (states.menuVisibleOnFocus) {
      states.menuVisibleOnFocus = false;
    } else {
      expanded.value = !expanded.value;
    }
  };
  const selectOption = () => {
    if (!expanded.value) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoveringIndex]) {
        handleOptionSelect(optionsArray.value[states.hoveringIndex]);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
  const showTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(0, props.maxCollapseTags) : states.selected;
  });
  const collapseTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(props.maxCollapseTags) : [];
  });
  const navigateOptions = (direction) => {
    if (!expanded.value) {
      expanded.value = true;
      return;
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0 || isComposing.value)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoveringIndex++;
        if (states.hoveringIndex === states.options.size) {
          states.hoveringIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoveringIndex--;
        if (states.hoveringIndex < 0) {
          states.hoveringIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoveringIndex];
      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const getGapWidth = () => {
    if (!selectionRef.value)
      return 0;
    const style = (void 0).getComputedStyle(selectionRef.value);
    return Number.parseFloat(style.gap || "6px");
  };
  const tagStyle = computed(() => {
    const gapWidth = getGapWidth();
    const maxWidth = collapseItemRef.value && props.maxCollapseTags === 1 ? states.selectionWidth - states.collapseItemWidth - gapWidth : states.selectionWidth;
    return { maxWidth: `${maxWidth}px` };
  });
  const collapseTagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` };
  });
  const inputStyle = computed(() => ({
    width: `${Math.max(states.calculatorWidth, MINIMUM_INPUT_WIDTH)}px`
  }));
  useResizeObserver(selectionRef, resetSelectionWidth);
  useResizeObserver(calculatorRef, resetCalculatorWidth);
  useResizeObserver(menuRef, updateTooltip);
  useResizeObserver(wrapperRef, updateTooltip);
  useResizeObserver(tagMenuRef, updateTagTooltip);
  useResizeObserver(collapseItemRef, resetCollapseItemWidth);
  return {
    inputId,
    contentId,
    nsSelect,
    nsInput,
    states,
    isFocused,
    expanded,
    optionsArray,
    hoverOption,
    selectSize,
    filteredOptionsCount,
    resetCalculatorWidth,
    updateTooltip,
    updateTagTooltip,
    debouncedOnInputChange,
    onInput,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    hasModelValue,
    shouldShowPlaceholder,
    currentPlaceholder,
    mouseEnterEventName,
    showClose,
    iconComponent,
    iconReverse,
    validateState,
    validateIcon,
    showNewOption,
    updateOptions,
    collapseTagSize,
    setSelected,
    selectDisabled,
    emptyText,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    focus,
    blur,
    handleClearClick,
    handleClickOutside,
    handleEsc,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropdownMenuVisible,
    showTagList,
    collapseTagList,
    tagStyle,
    collapseTagStyle,
    inputStyle,
    popperRef,
    inputRef,
    tooltipRef,
    tagTooltipRef,
    calculatorRef,
    prefixRef,
    suffixRef,
    selectRef,
    wrapperRef,
    selectionRef,
    scrollbarRef,
    menuRef,
    tagMenuRef,
    collapseItemRef
  };
};
var ElOptions = defineComponent({
  name: "ElOptions",
  setup(_, { slots }) {
    const select = inject(selectKey);
    let cachedValueList = [];
    return () => {
      var _a, _b;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const valueList = [];
      function filterOptions(children2) {
        if (!isArray(children2))
          return;
        children2.forEach((item) => {
          var _a2, _b2, _c, _d;
          const name = (_a2 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a2.name;
          if (name === "ElOptionGroup") {
            filterOptions(!isString(item.children) && !isArray(item.children) && isFunction((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children);
          } else if (name === "ElOption") {
            valueList.push((_d = item.props) == null ? void 0 : _d.value);
          } else if (isArray(item.children)) {
            filterOptions(item.children);
          }
        });
      }
      if (children.length) {
        filterOptions((_b = children[0]) == null ? void 0 : _b.children);
      }
      if (!isEqual(valueList, cachedValueList)) {
        cachedValueList = valueList;
        if (select) {
          select.states.optionValues = valueList;
        }
      }
      return children;
    };
  }
});
const SelectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: useSizeProp,
  effect: {
    type: definePropType(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: iconPropType,
    default: circle_close_default
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: iconPropType,
    default: arrow_down_default
  },
  tagType: { ...tagProps.type, default: "info" },
  tagEffect: { ...tagProps.effect, default: "light" },
  validateEvent: {
    type: Boolean,
    default: true
  },
  remoteShowSuffix: Boolean,
  placement: {
    type: definePropType(String),
    values: Ee,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  appendTo: String,
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
});
const COMPONENT_NAME = "ElSelect";
const _sfc_main$3 = defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElSelectMenu,
    ElOption: Option,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: SelectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, { emit }) {
    const modelValue = computed(() => {
      const { modelValue: rawModelValue, multiple } = props;
      const fallback = multiple ? [] : void 0;
      if (isArray(rawModelValue)) {
        return multiple ? rawModelValue : fallback;
      }
      return multiple ? fallback : rawModelValue;
    });
    const _props = reactive({
      ...toRefs(props),
      modelValue
    });
    const API = useSelect(_props, emit);
    provide(selectKey, reactive({
      props: _props,
      states: API.states,
      optionsArray: API.optionsArray,
      handleOptionSelect: API.handleOptionSelect,
      onOptionCreate: API.onOptionCreate,
      onOptionDestroy: API.onOptionDestroy,
      selectRef: API.selectRef,
      setSelected: API.setSelected
    }));
    const selectedLabel = computed(() => {
      if (!props.multiple) {
        return API.states.selectedLabel;
      }
      return API.states.selected.map((i) => i.currentLabel);
    });
    return {
      ...API,
      modelValue,
      selectedLabel
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_options = resolveComponent("el-options");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectRef",
    class: normalizeClass([_ctx.nsSelect.b(), _ctx.nsSelect.m(_ctx.selectSize)]),
    [toHandlerKey(_ctx.mouseEnterEventName)]: ($event) => _ctx.states.inputHovering = true,
    onMouseleave: ($event) => _ctx.states.inputHovering = false
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropdownMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "popper-options": _ctx.popperOptions,
      "fallback-placements": _ctx.fallbackPlacements,
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      "append-to": _ctx.appendTo,
      onBeforeShow: _ctx.handleMenuEnter,
      onHide: ($event) => _ctx.states.isBeforeHide = false
    }, {
      default: withCtx(() => {
        var _a;
        return [
          createElementVNode("div", {
            ref: "wrapperRef",
            class: normalizeClass([
              _ctx.nsSelect.e("wrapper"),
              _ctx.nsSelect.is("focused", _ctx.isFocused),
              _ctx.nsSelect.is("hovering", _ctx.states.inputHovering),
              _ctx.nsSelect.is("filterable", _ctx.filterable),
              _ctx.nsSelect.is("disabled", _ctx.selectDisabled)
            ]),
            onClick: withModifiers(_ctx.toggleMenu, ["prevent"])
          }, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "prefixRef",
              class: normalizeClass(_ctx.nsSelect.e("prefix"))
            }, [
              renderSlot(_ctx.$slots, "prefix")
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              ref: "selectionRef",
              class: normalizeClass([
                _ctx.nsSelect.e("selection"),
                _ctx.nsSelect.is("near", _ctx.multiple && !_ctx.$slots.prefix && !!_ctx.states.selected.length)
              ])
            }, [
              _ctx.multiple ? renderSlot(_ctx.$slots, "tag", { key: 0 }, () => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showTagList, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: _ctx.getValueKey(item),
                    class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                  }, [
                    createVNode(_component_el_tag, {
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      type: _ctx.tagType,
                      effect: _ctx.tagEffect,
                      "disable-transitions": "",
                      style: normalizeStyle(_ctx.tagStyle),
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                        }, [
                          renderSlot(_ctx.$slots, "label", {
                            label: item.currentLabel,
                            value: item.value
                          }, () => [
                            createTextVNode(toDisplayString(item.currentLabel), 1)
                          ])
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                  ], 2);
                }), 128)),
                _ctx.collapseTags && _ctx.states.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tooltip, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: _ctx.dropdownMenuVisible || !_ctx.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: _ctx.effect,
                  placement: "bottom",
                  teleported: _ctx.teleported
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", {
                      ref: "collapseItemRef",
                      class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                    }, [
                      createVNode(_component_el_tag, {
                        closable: false,
                        size: _ctx.collapseTagSize,
                        type: _ctx.tagType,
                        effect: _ctx.tagEffect,
                        "disable-transitions": "",
                        style: normalizeStyle(_ctx.collapseTagStyle)
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", {
                            class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                          }, " + " + toDisplayString(_ctx.states.selected.length - _ctx.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: withCtx(() => [
                    createElementVNode("div", {
                      ref: "tagMenuRef",
                      class: normalizeClass(_ctx.nsSelect.e("selection"))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collapseTagList, (item) => {
                        return openBlock(), createElementBlock("div", {
                          key: _ctx.getValueKey(item),
                          class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                        }, [
                          createVNode(_component_el_tag, {
                            class: "in-tooltip",
                            closable: !_ctx.selectDisabled && !item.isDisabled,
                            size: _ctx.collapseTagSize,
                            type: _ctx.tagType,
                            effect: _ctx.tagEffect,
                            "disable-transitions": "",
                            onClose: ($event) => _ctx.deleteTag($event, item)
                          }, {
                            default: withCtx(() => [
                              createElementVNode("span", {
                                class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                              }, [
                                renderSlot(_ctx.$slots, "label", {
                                  label: item.currentLabel,
                                  value: item.value
                                }, () => [
                                  createTextVNode(toDisplayString(item.currentLabel), 1)
                                ])
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "type", "effect", "onClose"])
                        ], 2);
                      }), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : createCommentVNode("v-if", true)
              ]) : createCommentVNode("v-if", true),
              !_ctx.selectDisabled ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("input-wrapper"),
                  _ctx.nsSelect.is("hidden", !_ctx.filterable)
                ])
              }, [
                withDirectives(createElementVNode("input", {
                  id: _ctx.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": ($event) => _ctx.states.inputValue = $event,
                  type: "text",
                  name: _ctx.name,
                  class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
                  disabled: _ctx.selectDisabled,
                  autocomplete: _ctx.autocomplete,
                  style: normalizeStyle(_ctx.inputStyle),
                  role: "combobox",
                  readonly: !_ctx.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((_a = _ctx.hoverOption) == null ? void 0 : _a.id) || "",
                  "aria-controls": _ctx.contentId,
                  "aria-expanded": _ctx.dropdownMenuVisible,
                  "aria-label": _ctx.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    withKeys(withModifiers(_ctx.handleEsc, ["stop", "prevent"]), ["esc"]),
                    withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
                    withKeys(withModifiers(_ctx.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: _ctx.handleCompositionStart,
                  onCompositionupdate: _ctx.handleCompositionUpdate,
                  onCompositionend: _ctx.handleCompositionEnd,
                  onInput: _ctx.onInput,
                  onClick: withModifiers(_ctx.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [vModelText, _ctx.states.inputValue]
                ]),
                _ctx.filterable ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: normalizeClass(_ctx.nsSelect.e("input-calculator")),
                  textContent: toDisplayString(_ctx.states.inputValue)
                }, null, 10, ["textContent"])) : createCommentVNode("v-if", true)
              ], 2)) : createCommentVNode("v-if", true),
              _ctx.shouldShowPlaceholder ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("placeholder"),
                  _ctx.nsSelect.is("transparent", !_ctx.hasModelValue || _ctx.expanded && !_ctx.states.inputValue)
                ])
              }, [
                _ctx.hasModelValue ? renderSlot(_ctx.$slots, "label", {
                  key: 0,
                  label: _ctx.currentPlaceholder,
                  value: _ctx.modelValue
                }, () => [
                  createElementVNode("span", null, toDisplayString(_ctx.currentPlaceholder), 1)
                ]) : (openBlock(), createElementBlock("span", { key: 1 }, toDisplayString(_ctx.currentPlaceholder), 1))
              ], 2)) : createCommentVNode("v-if", true)
            ], 2),
            createElementVNode("div", {
              ref: "suffixRef",
              class: normalizeClass(_ctx.nsSelect.e("suffix"))
            }, [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([
                  _ctx.nsSelect.e("caret"),
                  _ctx.nsSelect.e("icon"),
                  _ctx.nsSelect.e("clear")
                ]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
              _ctx.validateState && _ctx.validateIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 2,
                class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("validateIcon")])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, { ref: "menuRef" }, {
          default: withCtx(() => [
            _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "header")),
              onClick: withModifiers(() => {
              }, ["stop"])
            }, [
              renderSlot(_ctx.$slots, "header")
            ], 10, ["onClick"])) : createCommentVNode("v-if", true),
            withDirectives(createVNode(_component_el_scrollbar, {
              id: _ctx.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([_ctx.nsSelect.is("empty", _ctx.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": _ctx.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.states.inputValue,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                createVNode(_component_el_options, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [vShow, _ctx.states.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.$slots.loading && _ctx.loading ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "loading"))
            }, [
              renderSlot(_ctx.$slots, "loading")
            ], 2)) : _ctx.loading || _ctx.filteredOptionsCount === 0 ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
            }, [
              renderSlot(_ctx.$slots, "empty", {}, () => [
                createElementVNode("span", null, toDisplayString(_ctx.emptyText), 1)
              ])
            ], 2)) : createCommentVNode("v-if", true),
            _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "footer")),
              onClick: withModifiers(() => {
              }, ["stop"])
            }, [
              renderSlot(_ctx.$slots, "footer")
            ], 10, ["onClick"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [_directive_click_outside, _ctx.handleClickOutside, _ctx.popperRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__file", "select.vue"]]);
const _sfc_main$2 = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const groupRef = ref(null);
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const visible = computed(() => children.value.some((option) => option.visible === true));
    const isOption = (node) => {
      var _a, _b;
      return ((_a = node.type) == null ? void 0 : _a.name) === "ElOption" && !!((_b = node.component) == null ? void 0 : _b.proxy);
    };
    const flattedChildren = (node) => {
      const Nodes = castArray(node);
      const children2 = [];
      Nodes.forEach((child) => {
        var _a, _b;
        if (isOption(child)) {
          children2.push(child.component.proxy);
        } else if ((_a = child.children) == null ? void 0 : _a.length) {
          children2.push(...flattedChildren(child.children));
        } else if ((_b = child.component) == null ? void 0 : _b.subTree) {
          children2.push(...flattedChildren(child.component.subTree));
        }
      });
      return children2;
    };
    const updateChildren = () => {
      children.value = flattedChildren(instance.subTree);
    };
    useMutationObserver(groupRef, updateChildren, {
      attributes: true,
      subtree: true,
      childList: true
    });
    return {
      groupRef,
      visible,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    ref: "groupRef",
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createElementVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createElementVNode("li", null, [
      createElementVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__file", "option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "main3",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = ref(zhCn);
    const value1 = ref("");
    const value2 = ref("");
    const chartData1 = ref([
      { value: 1048, name: "\u56FD\u4F01" },
      { value: 735, name: "\u6709\u9650\u8D23\u4EFB\u516C\u53F8" },
      { value: 580, name: "\u79C1\u8425\u4F01\u4E1A" },
      { value: 484, name: "\u5176\u4ED6" }
    ]);
    const chartData2 = ref([
      { value: 1058, name: "\u539F\u56E01" },
      { value: 695, name: "\u539F\u56E02" },
      { value: 824, name: "\u539F\u56E03" },
      { value: 579, name: "\u539F\u56E04" },
      { value: 912, name: "\u539F\u56E05" },
      { value: 663, name: "\u539F\u56E06" }
    ]);
    const updateChartData = () => {
      chartData1.value = [
        { value: 148, name: "\u56FD\u4F01" },
        { value: 835, name: "\u6709\u9650\u8D23\u4EFB\u516C\u53F8" },
        { value: 60, name: "\u79C1\u8425\u4F01\u4E1A" },
        { value: 584, name: "\u975E\u76C8\u5229\u7EC4\u7EC7" }
      ];
    };
    const selectedStatus = ref("");
    const tableData = ref([
      {
        taskName: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1",
        taskVersion: "v1.3",
        taskStatus: "\u8FDB\u884C\u4E2D",
        approver: "\u738B\u5341\u4E8C",
        createTime: 16772856e5,
        deadline: 16798776e5,
        supplier: "\u4F9B\u5E94\u5546J",
        projectStatus: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1.pdf"
      }
    ]);
    const getTagType = (status) => {
      switch (status) {
        case "\u8FDB\u884C\u4E2D":
          return "success";
        case "\u5DF2\u5B8C\u6210":
          return "primary";
        case "\u5F85\u5F00\u59CB":
          return "info";
        case "\u5DF2\u622A\u6B62":
          return "danger";
        default:
          return "warning";
      }
    };
    const getTagText = (status) => {
      switch (status) {
        case "\u8FDB\u884C\u4E2D":
          return "\u8FDB\u884C\u4E2D";
        case "\u5DF2\u5B8C\u6210":
          return "\u5DF2\u5B8C\u6210";
        case "\u5F85\u5F00\u59CB":
          return "\u5F85\u5F00\u59CB";
        case "\u5DF2\u622A\u6B62":
          return "\u5DF2\u622A\u6B62";
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
    const handleStatusChange = (value) => {
    };
    const showTaskDetail = (row, col, event) => {
    };
    const detailTaskClick = (task) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_config_provider = ElConfigProvider;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_button = ElButton;
      const _component_el_divider = ElDivider;
      const _component_el_card = ElCard;
      const _component_EchartDoughnut = __nuxt_component_5;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_tag = ElTag;
      _push(`<!--[--><div class="flex justify-between items-center"><div class="text-2xl font-bold italic text-blue-600">\u9879\u76EE\u770B\u677F</div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_el_config_provider, { locale: locale.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_date_picker, {
              modelValue: value1.value,
              "onUpdate:modelValue": ($event) => value1.value = $event,
              type: "date",
              placeholder: "\u8D77\u59CB\u65F6\u95F4",
              locale: locale.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_date_picker, {
              modelValue: value2.value,
              "onUpdate:modelValue": ($event) => value2.value = $event,
              type: "date",
              placeholder: "\u7ED3\u675F\u65F6\u95F4",
              locale: locale.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_date_picker, {
                modelValue: value1.value,
                "onUpdate:modelValue": ($event) => value1.value = $event,
                type: "date",
                placeholder: "\u8D77\u59CB\u65F6\u95F4",
                locale: locale.value
              }, null, 8, ["modelValue", "onUpdate:modelValue", "locale"]),
              createVNode(_component_el_date_picker, {
                modelValue: value2.value,
                "onUpdate:modelValue": ($event) => value2.value = $event,
                type: "date",
                placeholder: "\u7ED3\u675F\u65F6\u95F4",
                locale: locale.value
              }, null, 8, ["modelValue", "onUpdate:modelValue", "locale"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: updateChartData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u641C\u7D22`);
          } else {
            return [
              createTextVNode("\u641C\u7D22")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_divider, { style: { "margin": "10px 0" } }, null, _parent));
      _push(`<div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6">`);
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#4ea5ff", "margin": "10px", "border-radius": "8px", "padding": "5px", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-2xl"${_scopeId}>\u5DF2\u5B8C\u6210\u9879\u76EE\u6570\u91CF</div><div class="text-center font-bold text-3xl mb-3"${_scopeId}>15</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-2xl" }, "\u5DF2\u5B8C\u6210\u9879\u76EE\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-3xl mb-3" }, "15")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#fea500", "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-xl mb-3 mt-3"${_scopeId}>\u672A\u5B8C\u6210\u9879\u76EE\u6570\u91CF</div><div class="text-center font-bold text-xl mb-1"${_scopeId}>1</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-xl mb-3 mt-3" }, "\u672A\u5B8C\u6210\u9879\u76EE\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-xl mb-1" }, "1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_card, {
        style: { "background-color": "#fe5500", "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center font-bold text-xl mb-3 mt-3"${_scopeId}>\u903E\u671F\u9879\u76EE\u6570\u91CF</div><div class="text-center font-bold text-xl mb-1"${_scopeId}>5</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center font-bold text-xl mb-3 mt-3" }, "\u903E\u671F\u9879\u76EE\u6570\u91CF"),
              createVNode("div", { class: "text-center font-bold text-xl mb-1" }, "5")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_card, {
        class: "col-span-2 lg:col-span-2 bg-gray-100",
        style: { "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-semibold text-gray-700"${_scopeId}>\u903E\u671F\u9879\u76EE\u7C7B\u578B</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EchartDoughnut, {
              width: "460px",
              height: "180px",
              data: chartData1.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-semibold text-gray-700" }, "\u903E\u671F\u9879\u76EE\u7C7B\u578B"),
              createVNode(_component_el_divider, { style: { "margin": "0 0" } }),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_component_EchartDoughnut, {
                  width: "460px",
                  height: "180px",
                  data: chartData1.value
                }, null, 8, ["data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_card, {
        class: "col-span-2 lg:col-span-2 bg-gray-100",
        style: { "margin": "10px", "border-radius": "8px" },
        shadow: "always"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-semibold text-gray-700"${_scopeId}>\u903E\u671F\u539F\u56E0</span>`);
            _push2(ssrRenderComponent(_component_el_divider, { style: { "margin": "0 0" } }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_EchartDoughnut, {
              width: "460px",
              height: "180px",
              data: chartData2.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-semibold text-gray-700" }, "\u903E\u671F\u539F\u56E0"),
              createVNode(_component_el_divider, { style: { "margin": "0 0" } }),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_component_EchartDoughnut, {
                  width: "460px",
                  height: "180px",
                  data: chartData2.value
                }, null, 8, ["data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_divider, { style: { "margin": "10px 0" } }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_el_table, {
        data: tableData.value,
        border: "",
        style: { "width": "100%" },
        "header-cell-style": tableHeaderStyle,
        onRowDblclick: showTaskDetail
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "taskName",
              label: "\u9879\u76EE\u540D\u79F0",
              "min-width": "13%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "taskVersion",
              label: "\u9879\u76EE\u7248\u672C",
              "min-width": "10%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "taskStatus",
              label: "\u9879\u76EE\u72B6\u6001",
              "min-width": "12%"
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_select, {
                    modelValue: selectedStatus.value,
                    "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                    placeholder: "\u9879\u76EE\u72B6\u6001",
                    onChange: handleStatusChange
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_option, {
                          label: "\u9879\u76EE\u72B6\u6001",
                          value: "a"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_option, {
                          label: "\u8FDB\u884C\u4E2D",
                          value: "b"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_option, {
                          label: "\u5DF2\u5B8C\u6210",
                          value: "c"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_option, {
                          label: "\u5DF2\u53D6\u6D88",
                          value: "d"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_option, {
                            label: "\u9879\u76EE\u72B6\u6001",
                            value: "a"
                          }),
                          createVNode(_component_el_option, {
                            label: "\u8FDB\u884C\u4E2D",
                            value: "b"
                          }),
                          createVNode(_component_el_option, {
                            label: "\u5DF2\u5B8C\u6210",
                            value: "c"
                          }),
                          createVNode(_component_el_option, {
                            label: "\u5DF2\u53D6\u6D88",
                            value: "d"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_select, {
                      modelValue: selectedStatus.value,
                      "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                      placeholder: "\u9879\u76EE\u72B6\u6001",
                      onChange: handleStatusChange
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_option, {
                          label: "\u9879\u76EE\u72B6\u6001",
                          value: "a"
                        }),
                        createVNode(_component_el_option, {
                          label: "\u8FDB\u884C\u4E2D",
                          value: "b"
                        }),
                        createVNode(_component_el_option, {
                          label: "\u5DF2\u5B8C\u6210",
                          value: "c"
                        }),
                        createVNode(_component_el_option, {
                          label: "\u5DF2\u53D6\u6D88",
                          value: "d"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_tag, {
                    type: getTagType(scope.row.taskStatus),
                    "disable-transitions": ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(getTagText(scope.row.taskStatus))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(getTagText(scope.row.taskStatus)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_tag, {
                      type: getTagType(scope.row.taskStatus),
                      "disable-transitions": ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(getTagText(scope.row.taskStatus)), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "approver",
              label: "\u5BA1\u6279\u4EBA",
              "min-width": "10%"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "createTime",
              label: "\u521B\u5EFA\u65F6\u95F4",
              "min-width": "15%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatDate(scope.row.createTime))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "deadline",
              label: "\u622A\u6B62\u65F6\u95F4",
              "min-width": "15%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatDate(scope.row.deadline))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatDate(scope.row.deadline)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "projectStatus",
              label: "\u9879\u76EE\u9644\u4EF6",
              "min-width": "15%"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) ;
                else {
                  return [];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
                    onClick: ($event) => detailTaskClick(scope.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u8BE6\u7EC6 `);
                      } else {
                        return [
                          createTextVNode(" \u8BE6\u7EC6 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_button, {
                    link: "",
                    type: "primary",
                    size: "small"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u53D6\u6D88`);
                      } else {
                        return [
                          createTextVNode("\u53D6\u6D88")
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
                      onClick: ($event) => detailTaskClick(scope.row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u8BE6\u7EC6 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_el_button, {
                      link: "",
                      type: "primary",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u53D6\u6D88")
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
              createVNode(_component_el_table_column, {
                prop: "taskName",
                label: "\u9879\u76EE\u540D\u79F0",
                "min-width": "13%"
              }),
              createVNode(_component_el_table_column, {
                prop: "taskVersion",
                label: "\u9879\u76EE\u7248\u672C",
                "min-width": "10%"
              }),
              createVNode(_component_el_table_column, {
                prop: "taskStatus",
                label: "\u9879\u76EE\u72B6\u6001",
                "min-width": "12%"
              }, {
                header: withCtx(() => [
                  createVNode(_component_el_select, {
                    modelValue: selectedStatus.value,
                    "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                    placeholder: "\u9879\u76EE\u72B6\u6001",
                    onChange: handleStatusChange
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_option, {
                        label: "\u9879\u76EE\u72B6\u6001",
                        value: "a"
                      }),
                      createVNode(_component_el_option, {
                        label: "\u8FDB\u884C\u4E2D",
                        value: "b"
                      }),
                      createVNode(_component_el_option, {
                        label: "\u5DF2\u5B8C\u6210",
                        value: "c"
                      }),
                      createVNode(_component_el_option, {
                        label: "\u5DF2\u53D6\u6D88",
                        value: "d"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                default: withCtx((scope) => [
                  createVNode(_component_el_tag, {
                    type: getTagType(scope.row.taskStatus),
                    "disable-transitions": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(getTagText(scope.row.taskStatus)), 1)
                    ]),
                    _: 2
                  }, 1032, ["type"])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "approver",
                label: "\u5BA1\u6279\u4EBA",
                "min-width": "10%"
              }),
              createVNode(_component_el_table_column, {
                prop: "createTime",
                label: "\u521B\u5EFA\u65F6\u95F4",
                "min-width": "15%"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(toDisplayString(formatDate(scope.row.createTime)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "deadline",
                label: "\u622A\u6B62\u65F6\u95F4",
                "min-width": "15%"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(toDisplayString(formatDate(scope.row.deadline)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "projectStatus",
                label: "\u9879\u76EE\u9644\u4EF6",
                "min-width": "15%"
              }, {
                default: withCtx((scope) => []),
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
                    onClick: ($event) => detailTaskClick(scope.row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u8BE6\u7EC6 ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_el_button, {
                    link: "",
                    type: "primary",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u53D6\u6D88")
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
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/main3.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageMain3 = _sfc_main$1;
      _push(ssrRenderComponent(_component_PageMain3, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-2e91ee1c"]]);

export { index as default };
//# sourceMappingURL=index-CWovalOO.mjs.map
