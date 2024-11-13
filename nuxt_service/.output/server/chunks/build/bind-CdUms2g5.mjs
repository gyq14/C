import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useSubtaskStore } from './index-BNWTj_L3.mjs';
import { b8 as useUserStore, _ as _export_sfc$1 } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bind",
  __ssrInlineRender: true,
  props: {
    routetype: {}
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const route = useRoute();
    route.params.type;
    parseInt(route.params.id);
    useSubtaskStore();
    useUserStore();
    const subtask = ref();
    const availablePeople = ["\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8"];
    const selectedResponsible = ref(((_a = subtask.value) == null ? void 0 : _a.responsibleId) === 0 ? "" : String((_b = subtask.value) == null ? void 0 : _b.responsibleId));
    const selectedApprover = ref(((_c = subtask.value) == null ? void 0 : _c.approverId) === 0 ? "" : String((_d = subtask.value) == null ? void 0 : _d.approverId));
    useRouter();
    function formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
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
        case "Rejected":
          return "\u5DF2\u9A73\u56DE";
        case "Delayed":
          return "\u5DF2\u5EF6\u671F";
        case "Expired":
        default:
          return "\u672A\u77E5\u72B6\u6001";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10" }, _attrs))} data-v-513e09be><div class="flex justify-between items-center mb-4 border-b pb-4" data-v-513e09be><h2 class="text-2xl font-semibold" data-v-513e09be>${ssrInterpolate(subtask.value.title)}</h2><span class="${ssrRenderClass([{
        "bg-green-200 text-green-800": getStatus(subtask.value.status) === "\u8FDB\u884C\u4E2D",
        "bg-blue-200 text-blue-800": getStatus(subtask.value.status) === "\u5DF2\u5B8C\u6210",
        "bg-gray-200 text-gray-800": getStatus(subtask.value.status) !== "\u8FDB\u884C\u4E2D" && getStatus(subtask.value.status) !== "\u5DF2\u5B8C\u6210"
      }, "text-sm px-3 py-1 rounded-full"])}" data-v-513e09be>${ssrInterpolate(getStatus(subtask.value.status))}</span></div><div class="mb-4" data-v-513e09be><strong data-v-513e09be>\u7248\u672C:</strong> ${ssrInterpolate(subtask.value.version)}</div><div class="mb-4" data-v-513e09be><strong data-v-513e09be>\u9879\u76EE\u63CF\u8FF0:</strong><p class="text-gray-700 mt-2" data-v-513e09be>${ssrInterpolate(subtask.value.description)}</p></div><div class="mb-4" data-v-513e09be><strong data-v-513e09be>\u4F9B\u5E94\u5546:</strong><div class="mt-2" data-v-513e09be>`);
      if (selectedResponsible.value && selectedResponsible.value !== "0") {
        _push(`<p class="break-words" data-v-513e09be>${ssrInterpolate(selectedResponsible.value)}</p>`);
      } else {
        _push(`<p data-v-513e09be><select class="block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm" data-v-513e09be><!--[-->`);
        ssrRenderList(availablePeople, (person) => {
          _push(`<option${ssrRenderAttr("value", person)} data-v-513e09be>${ssrInterpolate(person)}</option>`);
        });
        _push(`<!--]--></select></p>`);
      }
      _push(`</div></div><div class="mb-4" data-v-513e09be><strong data-v-513e09be>\u5BA1\u6279\u4EBA:</strong><div class="mt-2" data-v-513e09be>`);
      if (selectedApprover.value && selectedApprover.value !== "0") {
        _push(`<p class="break-words" data-v-513e09be>${ssrInterpolate(selectedApprover.value)}</p>`);
      } else {
        _push(`<p data-v-513e09be><select class="block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm" data-v-513e09be><!--[-->`);
        ssrRenderList(availablePeople, (approver) => {
          _push(`<option${ssrRenderAttr("value", approver)} data-v-513e09be>${ssrInterpolate(approver)}</option>`);
        });
        _push(`<!--]--></select></p>`);
      }
      _push(`</div></div><div class="mb-4" data-v-513e09be><div data-v-513e09be><strong data-v-513e09be>\u521B\u5EFA\u65F6\u95F4:</strong> ${ssrInterpolate(subtask.value.createdAt)}</div><div data-v-513e09be><strong data-v-513e09be>\u622A\u6B62\u65F6\u95F4:</strong> ${ssrInterpolate(formatDate(subtask.value.dueDate))}</div></div>`);
      if (subtask.value.attachments && subtask.value.attachments.length > 0) {
        _push(`<div class="mb-4" data-v-513e09be><strong data-v-513e09be>\u9644\u4EF6:</strong><ul class="list-disc ml-5 mt-2 text-blue-600" data-v-513e09be><!--[-->`);
        ssrRenderList(subtask.value.attachments, (attachment) => {
          _push(`<li data-v-513e09be><a href="#" class="hover:underline" data-v-513e09be>${ssrInterpolate(attachment)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (getStatus(subtask.value.status) === "\u5F85\u5904\u7406") {
        _push(`<div class="flex justify-between items-center mt-4 mb-4" data-v-513e09be><div class="flex items-center" data-v-513e09be><strong class="mr-2" data-v-513e09be>\u4E0A\u4F20\u9644\u4EF6:</strong><input type="file" class="mr-4" data-v-513e09be></div><div class="flex space-x-4" data-v-513e09be><button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-513e09be> \u5BA1\u6279 </button><button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-513e09be> \u62D2\u7EDD </button><button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-513e09be> \u53D6\u6D88 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (getStatus(subtask.value.status) !== "\u5F85\u5904\u7406") {
        _push(`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition ease-in-out duration-200" data-v-513e09be> \u8FD4\u56DE </button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Subpage/bind.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-513e09be"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=bind-CdUms2g5.mjs.map
