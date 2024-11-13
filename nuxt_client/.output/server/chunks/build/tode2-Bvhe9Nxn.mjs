import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useProjectsStore } from './index-D1-gw74C.mjs';
import { _ as _export_sfc$1 } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tode2",
  __ssrInlineRender: true,
  props: {
    routetype: {}
  },
  setup(__props) {
    var _a, _b;
    const route = useRoute();
    route.params.type;
    const projectId = parseInt(route.params.id);
    useProjectsStore();
    const project = ref();
    const availablePeople = ["\u5218\u8273", "\u5F20\u5EFA", "\u5218\u7FD4\u884C", "\u738B\u65B0"];
    const selectedResponsible = ref(((_a = project.value) == null ? void 0 : _a.responsible[0]) || "");
    const selectedApprover = ref(((_b = project.value) == null ? void 0 : _b.approver[0]) || "");
    useRouter();
    function formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10" }, _attrs))} data-v-9984d688><div class="flex justify-between items-center mb-4 border-b pb-4" data-v-9984d688><h2 class="text-2xl font-semibold" data-v-9984d688>${ssrInterpolate(project.value.name)}</h2><span class="${ssrRenderClass([{
        "bg-green-200 text-green-800": project.value.status === "\u8FDB\u884C\u4E2D",
        "bg-blue-200 text-blue-800": project.value.status === "\u5DF2\u5B8C\u6210",
        "bg-gray-200 text-gray-800": project.value.status !== "\u8FDB\u884C\u4E2D" && project.value.status !== "\u5DF2\u5B8C\u6210"
      }, "text-sm px-3 py-1 rounded-full"])}" data-v-9984d688>${ssrInterpolate(project.value.status)}</span></div><div class="mb-4" data-v-9984d688><strong data-v-9984d688>\u7248\u672C:</strong> ${ssrInterpolate(project.value.version)}</div><div class="mb-4" data-v-9984d688><strong data-v-9984d688>\u9879\u76EE\u63CF\u8FF0:</strong><p class="text-gray-700 mt-2" data-v-9984d688>${ssrInterpolate(project.value.description)}</p></div><div class="mb-4" data-v-9984d688><strong data-v-9984d688>\u8D1F\u8D23\u4EBA:</strong>`);
      if (selectedResponsible.value) {
        _push(`<p class="break-words" data-v-9984d688>${ssrInterpolate(selectedResponsible.value)}</p>`);
      } else {
        _push(`<select class="block mt-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm" data-v-9984d688><!--[-->`);
        ssrRenderList(availablePeople, (person) => {
          _push(`<option${ssrRenderAttr("value", person)} data-v-9984d688>${ssrInterpolate(person)}</option>`);
        });
        _push(`<!--]--></select>`);
      }
      _push(`</div><div class="mb-4" data-v-9984d688><strong data-v-9984d688>\u5BA1\u6279\u4EBA:</strong>`);
      if (selectedApprover.value) {
        _push(`<p class="break-words" data-v-9984d688>${ssrInterpolate(selectedApprover.value)}</p>`);
      } else {
        _push(`<select class="block mt-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm" data-v-9984d688><!--[-->`);
        ssrRenderList(availablePeople, (approver) => {
          _push(`<option${ssrRenderAttr("value", approver)} data-v-9984d688>${ssrInterpolate(approver)}</option>`);
        });
        _push(`<!--]--></select>`);
      }
      _push(`</div><div class="mb-4" data-v-9984d688><div data-v-9984d688><strong data-v-9984d688>\u521B\u5EFA\u65F6\u95F4:</strong> ${ssrInterpolate(formatDate(project.value.time))}</div><div data-v-9984d688><strong data-v-9984d688>\u622A\u6B62\u65F6\u95F4:</strong> ${ssrInterpolate(formatDate(project.value.deadline))}</div></div>`);
      if (project.value.attachments && project.value.attachments.length > 0) {
        _push(`<div class="mb-4" data-v-9984d688><strong data-v-9984d688>\u9644\u4EF6:</strong><ul class="list-disc ml-5 mt-2 text-blue-600" data-v-9984d688><!--[-->`);
        ssrRenderList(project.value.attachments, (attachment) => {
          _push(`<li data-v-9984d688><a href="#" class="hover:underline" data-v-9984d688>${ssrInterpolate(attachment)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (project.value.status === "\u5F85\u5BA1\u6279") {
        _push(`<div class="flex justify-between items-center mt-4 mb-4" data-v-9984d688>`);
        if (unref(projectId) === 1) {
          _push(`<div class="flex items-center" data-v-9984d688><strong class="mr-2" data-v-9984d688>\u4E0A\u4F20\u9644\u4EF6:</strong><input type="file" class="mr-4" data-v-9984d688></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(projectId) === 2) {
          _push(`<div class="flex items-center" data-v-9984d688></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex space-x-4" data-v-9984d688><button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-9984d688> \u5BA1\u6279 </button><button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-9984d688> \u62D2\u7EDD </button><button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-9984d688> \u53D6\u6D88 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (project.value.status === "\u8FDB\u884C\u4E2D") {
        _push(`<div class="flex justify-between items-center mt-4 mb-4" data-v-9984d688><div class="flex items-center" data-v-9984d688><strong class="mr-2" data-v-9984d688>\u4E0A\u4F20\u9644\u4EF6:</strong><input type="file" class="mr-4" data-v-9984d688></div><div class="flex space-x-4" data-v-9984d688><button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-9984d688> \u63D0\u4EA4 </button><button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-9984d688> \u53D6\u6D88 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (project.value.status !== "\u5F85\u5BA1\u6279" && project.value.status !== "\u8FDB\u884C\u4E2D") {
        _push(`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition ease-in-out duration-200" data-v-9984d688> \u8FD4\u56DE </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Todo/tode2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-9984d688"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=tode2-Bvhe9Nxn.mjs.map
