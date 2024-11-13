import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useTodoStore } from './index-iz7lIZOX.mjs';
import { _ as _export_sfc$1, b8 as useUserStore } from './server.mjs';
import { u as useSubtaskStore } from './index-BNWTj_L3.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "task",
  __ssrInlineRender: true,
  props: {
    routetype: {}
  },
  setup(__props) {
    const route = useRoute();
    useRouter();
    parseInt(route.params.id);
    useTodoStore();
    const task = ref({
      title: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1",
      status: "\u5F85\u5BA1\u6279",
      version: "1.0",
      description: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1\uFF0C\u76F8\u5173\u8BBE\u8BA1\u548C\u9A8C\u8BC1\u8FDB\u884C\u4E2D",
      responsibleId: "\u5F20\u6D2A\u78CA",
      createdAt: /* @__PURE__ */ new Date(),
      dueDate: new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 7)),
      attachments: ["gearbox_design_specifications_v1_review.pdf", "gearbox_design_specifications_v1_review.pdf.docx"]
    });
    const selectedResponsible = ref("");
    const loading = ref(true);
    function formatDate(date) {
      return date ? new Date(date).toLocaleString() : "N/A";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10" }, _attrs))} data-v-56a3eb5e>`);
      if (loading.value) {
        _push(`<div class="flex justify-center items-center py-4" data-v-56a3eb5e><span class="text-gray-500" data-v-56a3eb5e>\u52A0\u8F7D\u4E2D...</span></div>`);
      } else {
        _push(`<div data-v-56a3eb5e><div class="flex justify-between items-center mb-4 border-b pb-4" data-v-56a3eb5e><h2 class="text-2xl font-semibold" data-v-56a3eb5e>${ssrInterpolate(task.value.title)}</h2><span class="${ssrRenderClass([{
          "bg-green-200 text-green-800": task.value.status === "\u8FDB\u884C\u4E2D",
          "bg-blue-200 text-blue-800": task.value.status === "\u5DF2\u5B8C\u6210",
          "bg-gray-200 text-gray-800": task.value.status !== "\u8FDB\u884C\u4E2D" && task.value.status !== "\u5DF2\u5B8C\u6210"
        }, "text-sm px-3 py-1 rounded-full"])}" data-v-56a3eb5e>${ssrInterpolate(task.value.status)}</span></div><div class="mb-4" data-v-56a3eb5e><strong data-v-56a3eb5e>\u7248\u672C:</strong> ${ssrInterpolate(task.value.version)}</div><div class="mb-4" data-v-56a3eb5e><strong data-v-56a3eb5e>\u4EFB\u52A1\u63CF\u8FF0:</strong><p class="text-gray-700 mt-2" data-v-56a3eb5e>${ssrInterpolate(task.value.description)}</p></div><div class="mb-4" data-v-56a3eb5e><strong data-v-56a3eb5e>\u8D1F\u8D23\u4EBA:</strong><p class="break-words" data-v-56a3eb5e>${ssrInterpolate(selectedResponsible.value || "\u65E0\u8D1F\u8D23\u4EBA")}</p></div><div class="mb-4" data-v-56a3eb5e><div data-v-56a3eb5e><strong data-v-56a3eb5e>\u521B\u5EFA\u65F6\u95F4:</strong> ${ssrInterpolate(formatDate(task.value.createdAt))}</div><div data-v-56a3eb5e><strong data-v-56a3eb5e>\u622A\u6B62\u65F6\u95F4:</strong> ${ssrInterpolate(formatDate(task.value.dueDate))}</div></div>`);
        if (task.value.attachments && task.value.attachments.length > 0) {
          _push(`<div class="mb-4" data-v-56a3eb5e><strong data-v-56a3eb5e>\u9644\u4EF6:</strong><ul class="list-disc ml-5 mt-2 text-blue-600" data-v-56a3eb5e><!--[-->`);
          ssrRenderList(task.value.attachments, (attachment) => {
            _push(`<li data-v-56a3eb5e><a href="#" class="hover:underline" data-v-56a3eb5e>${ssrInterpolate(attachment)}</a></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (task.value.status === "\u5F85\u5BA1\u6279") {
          _push(`<div class="flex justify-between items-center mt-4 mb-4" data-v-56a3eb5e><div class="flex space-x-4" data-v-56a3eb5e><button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-56a3eb5e> \u5BA1\u6279 </button><button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-56a3eb5e> \u62D2\u7EDD </button><button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-56a3eb5e> \u53D6\u6D88 </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (task.value.status !== "\u5F85\u5BA1\u6279") {
          _push(`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition ease-in-out duration-200" data-v-56a3eb5e> \u8FD4\u56DE </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Subpage/task.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-56a3eb5e"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "subtask",
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
    const availablePeople = ["\u9773\u6625\u96F7", "\u8C22\u7ECF\u5E7F", "\u4E8E\u4E49\u6625", "\u5F20\u6D2A\u78CA", "\u9648\u536B", "\u5F20\u6653\u5CF0"];
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10" }, _attrs))} data-v-88160c8b><div class="flex justify-between items-center mb-4 border-b pb-4" data-v-88160c8b><h2 class="text-2xl font-semibold" data-v-88160c8b>${ssrInterpolate(subtask.value.title)}</h2><span class="${ssrRenderClass([{
        "bg-green-200 text-green-800": getStatus(subtask.value.status) === "\u8FDB\u884C\u4E2D",
        "bg-blue-200 text-blue-800": getStatus(subtask.value.status) === "\u5DF2\u5B8C\u6210",
        "bg-gray-200 text-gray-800": getStatus(subtask.value.status) !== "\u8FDB\u884C\u4E2D" && getStatus(subtask.value.status) !== "\u5DF2\u5B8C\u6210"
      }, "text-sm px-3 py-1 rounded-full"])}" data-v-88160c8b>${ssrInterpolate(getStatus(subtask.value.status))}</span></div><div class="mb-4" data-v-88160c8b><strong data-v-88160c8b>\u7248\u672C:</strong> ${ssrInterpolate(subtask.value.version)}</div><div class="mb-4" data-v-88160c8b><strong data-v-88160c8b>\u9879\u76EE\u63CF\u8FF0:</strong><p class="text-gray-700 mt-2" data-v-88160c8b>${ssrInterpolate(subtask.value.description)}</p></div><div class="mb-4" data-v-88160c8b><strong data-v-88160c8b>\u8D1F\u8D23\u4EBA:</strong><div class="mt-2" data-v-88160c8b>`);
      if (selectedResponsible.value && selectedResponsible.value !== "0") {
        _push(`<p class="break-words" data-v-88160c8b>${ssrInterpolate(selectedResponsible.value)}</p>`);
      } else {
        _push(`<p data-v-88160c8b><select class="block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm" data-v-88160c8b><!--[-->`);
        ssrRenderList(availablePeople, (person) => {
          _push(`<option${ssrRenderAttr("value", person)} data-v-88160c8b>${ssrInterpolate(person)}</option>`);
        });
        _push(`<!--]--></select></p>`);
      }
      _push(`</div></div><div class="mb-4" data-v-88160c8b><strong data-v-88160c8b>\u5BA1\u6279\u4EBA:</strong><div class="mt-2" data-v-88160c8b>`);
      if (selectedApprover.value && selectedApprover.value !== "0") {
        _push(`<p class="break-words" data-v-88160c8b>${ssrInterpolate(selectedApprover.value)}</p>`);
      } else {
        _push(`<p data-v-88160c8b><select class="block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm" data-v-88160c8b><!--[-->`);
        ssrRenderList(availablePeople, (approver) => {
          _push(`<option${ssrRenderAttr("value", approver)} data-v-88160c8b>${ssrInterpolate(approver)}</option>`);
        });
        _push(`<!--]--></select></p>`);
      }
      _push(`</div></div><div class="mb-4" data-v-88160c8b><div data-v-88160c8b><strong data-v-88160c8b>\u521B\u5EFA\u65F6\u95F4:</strong> ${ssrInterpolate(subtask.value.createdAt)}</div><div data-v-88160c8b><strong data-v-88160c8b>\u622A\u6B62\u65F6\u95F4:</strong> ${ssrInterpolate(formatDate(subtask.value.dueDate))}</div></div>`);
      if (subtask.value.attachments && subtask.value.attachments.length > 0) {
        _push(`<div class="mb-4" data-v-88160c8b><strong data-v-88160c8b>\u9644\u4EF6:</strong><ul class="list-disc ml-5 mt-2 text-blue-600" data-v-88160c8b><!--[-->`);
        ssrRenderList(subtask.value.attachments, (attachment) => {
          _push(`<li data-v-88160c8b><a href="#" class="hover:underline" data-v-88160c8b>${ssrInterpolate(attachment)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (getStatus(subtask.value.status) === "\u5F85\u5904\u7406") {
        _push(`<div class="flex justify-between items-center mt-4 mb-4" data-v-88160c8b><div class="flex items-center" data-v-88160c8b><strong class="mr-2" data-v-88160c8b>\u4E0A\u4F20\u9644\u4EF6:</strong><input type="file" class="mr-4" data-v-88160c8b></div><div class="flex space-x-4" data-v-88160c8b><button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-88160c8b> \u5BA1\u6279 </button><button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-88160c8b> \u62D2\u7EDD </button><button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200" data-v-88160c8b> \u53D6\u6D88 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (getStatus(subtask.value.status) !== "\u5F85\u5904\u7406") {
        _push(`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition ease-in-out duration-200" data-v-88160c8b> \u8FD4\u56DE </button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Subpage/subtask.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-88160c8b"]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=subtask-ChqMNOFZ.mjs.map
