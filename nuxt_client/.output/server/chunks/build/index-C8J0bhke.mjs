import { defineComponent, computed, h, renderSlot, isVNode, createVNode, createTextVNode, ref, watchEffect } from 'vue';
import { aD as buildProps, a3 as useNamespace, aE as definePropType, ba as isNumber, bt as componentSizes, aa as withInstall } from './server.mjs';
import { isString, isArray } from '@vue/shared';
import { P as PatchFlags, i as isFragment, a as isValidElementNode } from './vnode-Cs2GWOIH.mjs';

const spaceItemProps = buildProps({
  prefixCls: {
    type: String
  }
});
const SpaceItem = defineComponent({
  name: "ElSpaceItem",
  props: spaceItemProps,
  setup(props, { slots }) {
    const ns = useNamespace("space");
    const classes = computed(() => `${props.prefixCls || ns.b()}__item`);
    return () => h("div", { class: classes.value }, renderSlot(slots, "default"));
  }
});
const SIZE_MAP = {
  small: 8,
  default: 12,
  large: 16
};
function useSpace(props) {
  const ns = useNamespace("space");
  const classes = computed(() => [ns.b(), ns.m(props.direction), props.class]);
  const horizontalSize = ref(0);
  const verticalSize = ref(0);
  const containerStyle = computed(() => {
    const wrapKls = props.wrap || props.fill ? { flexWrap: "wrap" } : {};
    const alignment = {
      alignItems: props.alignment
    };
    const gap = {
      rowGap: `${verticalSize.value}px`,
      columnGap: `${horizontalSize.value}px`
    };
    return [wrapKls, alignment, gap, props.style];
  });
  const itemStyle = computed(() => {
    return props.fill ? { flexGrow: 1, minWidth: `${props.fillRatio}%` } : {};
  });
  watchEffect(() => {
    const { size = "small", wrap, direction: dir, fill } = props;
    if (isArray(size)) {
      const [h2 = 0, v = 0] = size;
      horizontalSize.value = h2;
      verticalSize.value = v;
    } else {
      let val;
      if (isNumber(size)) {
        val = size;
      } else {
        val = SIZE_MAP[size || "small"] || SIZE_MAP.small;
      }
      if ((wrap || fill) && dir === "horizontal") {
        horizontalSize.value = verticalSize.value = val;
      } else {
        if (dir === "horizontal") {
          horizontalSize.value = val;
          verticalSize.value = 0;
        } else {
          verticalSize.value = val;
          horizontalSize.value = 0;
        }
      }
    }
  });
  return {
    classes,
    containerStyle,
    itemStyle
  };
}
const spaceProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  class: {
    type: definePropType([
      String,
      Object,
      Array
    ]),
    default: ""
  },
  style: {
    type: definePropType([String, Array, Object]),
    default: ""
  },
  alignment: {
    type: definePropType(String),
    default: "center"
  },
  prefixCls: {
    type: String
  },
  spacer: {
    type: definePropType([Object, String, Number, Array]),
    default: null,
    validator: (val) => isVNode(val) || isNumber(val) || isString(val)
  },
  wrap: Boolean,
  fill: Boolean,
  fillRatio: {
    type: Number,
    default: 100
  },
  size: {
    type: [String, Array, Number],
    values: componentSizes,
    validator: (val) => {
      return isNumber(val) || isArray(val) && val.length === 2 && val.every(isNumber);
    }
  }
});
const Space = defineComponent({
  name: "ElSpace",
  props: spaceProps,
  setup(props, { slots }) {
    const { classes, containerStyle, itemStyle } = useSpace(props);
    function extractChildren(children, parentKey = "", extractedChildren = []) {
      const { prefixCls } = props;
      children.forEach((child, loopKey) => {
        if (isFragment(child)) {
          if (isArray(child.children)) {
            child.children.forEach((nested, key) => {
              if (isFragment(nested) && isArray(nested.children)) {
                extractChildren(nested.children, `${parentKey + key}-`, extractedChildren);
              } else {
                extractedChildren.push(createVNode(SpaceItem, {
                  style: itemStyle.value,
                  prefixCls,
                  key: `nested-${parentKey + key}`
                }, {
                  default: () => [nested]
                }, PatchFlags.PROPS | PatchFlags.STYLE, ["style", "prefixCls"]));
              }
            });
          }
        } else if (isValidElementNode(child)) {
          extractedChildren.push(createVNode(SpaceItem, {
            style: itemStyle.value,
            prefixCls,
            key: `LoopKey${parentKey + loopKey}`
          }, {
            default: () => [child]
          }, PatchFlags.PROPS | PatchFlags.STYLE, ["style", "prefixCls"]));
        }
      });
      return extractedChildren;
    }
    return () => {
      var _a;
      const { spacer, direction } = props;
      const children = renderSlot(slots, "default", { key: 0 }, () => []);
      if (((_a = children.children) != null ? _a : []).length === 0)
        return null;
      if (isArray(children.children)) {
        let extractedChildren = extractChildren(children.children);
        if (spacer) {
          const len = extractedChildren.length - 1;
          extractedChildren = extractedChildren.reduce((acc, child, idx) => {
            const children2 = [...acc, child];
            if (idx !== len) {
              children2.push(createVNode("span", {
                style: [
                  itemStyle.value,
                  direction === "vertical" ? "width: 100%" : null
                ],
                key: idx
              }, [
                isVNode(spacer) ? spacer : createTextVNode(spacer, PatchFlags.TEXT)
              ], PatchFlags.STYLE));
            }
            return children2;
          }, []);
        }
        return createVNode("div", {
          class: classes.value,
          style: containerStyle.value
        }, extractedChildren, PatchFlags.STYLE | PatchFlags.CLASS);
      }
      return children.children;
    };
  }
});
const ElSpace = withInstall(Space);

export { ElSpace as E };
//# sourceMappingURL=index-C8J0bhke.mjs.map
