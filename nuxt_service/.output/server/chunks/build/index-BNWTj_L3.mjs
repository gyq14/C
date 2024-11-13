import { bh as defineStore, b8 as useUserStore, bi as useRuntimeConfig, bj as setInterval$1 } from './server.mjs';
import { ref, computed } from 'vue';

var SubtaskStatus = /* @__PURE__ */ ((SubtaskStatus2) => {
  SubtaskStatus2["Pending"] = "Pending";
  SubtaskStatus2["Completed"] = "Completed";
  SubtaskStatus2["Delayed"] = "Delayed";
  SubtaskStatus2["InProgress"] = "InProgress";
  SubtaskStatus2["AwaitingApproval"] = "AwaitingApproval";
  SubtaskStatus2["Rejected"] = "Rejected";
  return SubtaskStatus2;
})(SubtaskStatus || {});
const useSubtaskStore = defineStore(
  "subtask",
  () => {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const subtasks = ref([]);
    const intervalId = ref(null);
    useUserStore();
    const initialData = ref([
      {
        id: 200,
        taskId: 100,
        title: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1",
        version: "v1.0",
        status: SubtaskStatus.InProgress,
        approverId: 3,
        responsibleId: 8,
        dueDate: (/* @__PURE__ */ new Date("2024-03-20")).getTime(),
        description: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1\uFF0C\u76F8\u5173\u8BBE\u8BA1\u548C\u9A8C\u8BC1\u8FDB\u884C\u4E2D\u3002",
        attachments: [],
        data: JSON.stringify({
          supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
          projectStatus: "\u8FDB\u884C\u4E2D"
        }),
        createdAt: (/* @__PURE__ */ new Date("2024-03-10")).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 201,
        taskId: 100,
        title: "\u9F7F\u8F6E\u7BB1\u5F3A\u5EA6\u8BA1\u7B97",
        version: "v1.1",
        status: SubtaskStatus.Pending,
        approverId: 3,
        responsibleId: 0,
        dueDate: (/* @__PURE__ */ new Date("2024-04-15")).getTime(),
        description: "\u5F3A\u5EA6\u8BA1\u7B97\u5F85\u5F00\u59CB\u3002",
        attachments: [],
        data: JSON.stringify({
          supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
          projectStatus: "\u5F85\u5F00\u59CB"
        }),
        createdAt: (/* @__PURE__ */ new Date("2024-03-25")).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 202,
        taskId: 100,
        title: "\u9F7F\u8F6E\u7BB1\u673A\u52A0\u5DE5\u5DE5\u827A\u5206\u6790",
        version: "v1.0",
        status: SubtaskStatus.Pending,
        approverId: 1,
        responsibleId: 0,
        dueDate: (/* @__PURE__ */ new Date("2024-04-20")).getTime(),
        description: "\u5206\u6790\u5F85\u5F00\u59CB\u3002",
        attachments: [],
        data: JSON.stringify({
          supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
          projectStatus: "\u5F85\u5F00\u59CB"
        }),
        createdAt: (/* @__PURE__ */ new Date("2024-04-08")).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 203,
        taskId: 100,
        title: "\u7C7B\u4F3C\u7ED3\u6784\u9F7F\u8F6E\u7BB1\u95EE\u9898\u53CD\u9988",
        version: "v1.2",
        status: SubtaskStatus.Pending,
        approverId: 1,
        responsibleId: 0,
        dueDate: (/* @__PURE__ */ new Date("2024-04-30")).getTime(),
        description: "\u7C7B\u4F3C\u7ED3\u6784\u95EE\u9898\u5F85\u53CD\u9988\u3002",
        attachments: [],
        data: JSON.stringify({
          supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
          projectStatus: "\u5F85\u5F00\u59CB"
        }),
        createdAt: (/* @__PURE__ */ new Date("2024-04-20")).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 204,
        taskId: 100,
        // 对应 '齿轮箱协同设计' 任务
        title: "\u9F7F\u8F6E\u7BB1\u521D\u6B65\u8BBE\u8BA1\u65B9\u6848\u8BC4\u5BA1",
        version: "1.0",
        status: SubtaskStatus.Completed,
        approverId: 1,
        responsibleId: 9,
        dueDate: (/* @__PURE__ */ new Date("2022-01-01T18:00:00")).getTime(),
        description: "\u521D\u6B65\u8BBE\u8BA1\u65B9\u6848\u8BC4\u5BA1\u5DF2\u5B8C\u6210\uFF0C\u83B7\u5F97\u6279\u51C6\u3002",
        attachments: ["gearbox_design_specifications_v1_review.pdf"],
        data: JSON.stringify({
          supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
          projectStatus: "\u5DF2\u5B8C\u6210"
        }),
        createdAt: "2022-01-01T12:00:00",
        updatedAt: "2022-01-01T18:00:00"
      },
      {
        id: 205,
        taskId: 100,
        title: "\u9F7F\u8F6E\u7BB1\u8BBE\u8BA1\u6587\u6863\u6574\u7406",
        version: "1.1",
        status: SubtaskStatus.InProgress,
        approverId: 1,
        responsibleId: 4,
        dueDate: (/* @__PURE__ */ new Date("2022-01-02T14:00:00")).getTime(),
        description: "\u6587\u6863\u6574\u7406\u8FDB\u884C\u4E2D\uFF0C\u9884\u8BA1\u5728\u5BA1\u6838\u524D\u5B8C\u6210\u3002",
        attachments: ["gearbox_design_draft_v1.pdf"],
        data: JSON.stringify({
          supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
          projectStatus: "\u8FDB\u884C\u4E2D"
        }),
        createdAt: "2022-01-01T12:30:00",
        updatedAt: "2022-01-02T12:30:00"
      },
      {
        id: 206,
        taskId: 101,
        // 对应 '活塞协同设计' 任务
        title: "\u6D3B\u585E\u8BBE\u8BA1\u5BA1\u6838\u51C6\u5907",
        version: "2.0",
        status: SubtaskStatus.Pending,
        approverId: 2,
        responsibleId: 0,
        dueDate: (/* @__PURE__ */ new Date("2022-01-02T15:00:00")).getTime(),
        description: "\u8BBE\u8BA1\u8349\u6848\u5DF2\u5B8C\u6210\uFF0C\u5F85\u5BA1\u6838\u3002",
        attachments: ["piston_design_draft_v2_review.pdf"],
        data: JSON.stringify({
          supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
          projectStatus: "\u8FDB\u884C\u4E2D"
        }),
        createdAt: "2022-01-02T12:00:00",
        updatedAt: "2022-01-02T12:30:00"
      },
      {
        id: 207,
        taskId: 102,
        // 对应 '水箔协同设计' 任务
        title: "\u6C34\u7B94\u8BBE\u8BA1\u8FDB\u5EA6\u62A5\u544A",
        version: "3.0",
        status: SubtaskStatus.Delayed,
        approverId: 1,
        responsibleId: 2,
        dueDate: (/* @__PURE__ */ new Date("2022-01-03T18:00:00")).getTime(),
        description: "\u8BBE\u8BA1\u8FDB\u5EA6\u5EF6\u8FDF\uFF0C\u7B49\u5F85\u89E3\u51B3\u6280\u672F\u96BE\u70B9\u3002",
        attachments: ["waterfoil_design_delay_report_v3.pdf"],
        data: JSON.stringify({
          supplier: "\u4E2D\u8F66\u621A\u5885\u5830\u673A\u8F66\u8F66\u8F86\u5DE5\u827A\u7814\u7A76\u6240\u80A1\u4EFD\u6709\u9650\u516C\u53F8",
          projectStatus: "\u5EF6\u8FDF"
        }),
        createdAt: "2022-01-03T12:00:00",
        updatedAt: "2022-01-03T12:15:00"
      }
    ]);
    function setSubtasks(newSubtasks) {
      subtasks.value = newSubtasks;
    }
    function resetSubtasks() {
      subtasks.value = [];
    }
    const unCompletedsubtaskData = computed(() => subtasks.value.filter((subtask) => subtask.status !== SubtaskStatus.Completed));
    const CompletedsubtaskData = computed(() => subtasks.value.filter((subtask) => subtask.status === SubtaskStatus.Completed));
    const getSubtask = computed(() => (id) => subtasks.value.find((subtask) => subtask.id === id));
    const getSubtasksBytaskId = computed(() => (taskId) => subtasks.value.filter((subtask) => subtask.taskId === taskId));
    async function fetchAllSubtasks() {
      try {
        initialData.value.forEach((subtask) => {
          if (!subtasks.value.some((existingSubtask) => existingSubtask.id === subtask.id)) {
            subtasks.value.push(subtask);
          }
        });
      } catch (err) {
        console.error(err);
      }
    }
    function startAutoRefresh(interval = 3e3) {
      fetchAllSubtasks();
      intervalId.value = setInterval$1();
    }
    function stopAutoRefresh() {
      if (intervalId.value !== null) {
        clearInterval(intervalId.value);
        intervalId.value = null;
        resetSubtasks();
      }
    }
    async function createSubtask(subtask) {
      try {
        const response = await fetch(`${apiUrl}/api/subtasks/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(subtask)
        });
        if (!response.ok) throw new Error("Failed to create subtask");
        const data = await response.json();
        if (data) {
          setSubtasks([...subtasks.value, data]);
          return data;
        }
      } catch (err) {
        console.error(err);
      }
    }
    async function updateSubtask(subtaskId, subtask) {
      try {
        const response = await fetch(`${apiUrl}/api/subtasks/update-task`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ subtaskId, ...subtask })
        });
        if (!response.ok) throw new Error("Failed to update subtask");
        const data = await response.json();
        if (data) {
          setSubtasks(subtasks.value.map((subtask2) => subtask2.id === subtaskId ? data : subtask2));
          return data;
        }
      } catch (err) {
        console.error(err);
      }
    }
    async function deleteSubtask(subtaskId) {
      try {
        const response = await fetch(`${apiUrl}/api/subtasks/subtask.delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: subtaskId })
        });
        if (!response.ok) throw new Error("Failed to delete subtask");
        const data = await response.json();
        if (data) {
          setSubtasks(subtasks.value.filter((subtask) => subtask.id !== subtaskId));
          return data;
        }
      } catch (err) {
        console.error(err);
      }
    }
    return {
      subtasks,
      setSubtasks,
      resetSubtasks,
      startAutoRefresh,
      stopAutoRefresh,
      createSubtask,
      updateSubtask,
      deleteSubtask,
      unCompletedsubtaskData,
      CompletedsubtaskData,
      getSubtask,
      getSubtasksBytaskId
    };
  },
  {
    persist: true
  }
);

export { useSubtaskStore as u };
//# sourceMappingURL=index-BNWTj_L3.mjs.map
