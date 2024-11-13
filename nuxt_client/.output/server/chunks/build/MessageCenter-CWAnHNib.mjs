import { a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MessageCenter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "parent" }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/MessageCenter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MessageCenter-CWAnHNib.mjs.map
