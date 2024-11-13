import { bh as defineStore, b8 as useUserStore, bi as useRuntimeConfig, bj as setInterval$1 } from './server.mjs';
import { ref, computed } from 'vue';

var TaskStatus = /* @__PURE__ */ ((TaskStatus2) => {
  TaskStatus2["Pending"] = "Pending";
  TaskStatus2["Completed"] = "Completed";
  TaskStatus2["Delayed"] = "Delayed";
  TaskStatus2["InProgress"] = "InProgress";
  TaskStatus2["AwaitingApproval"] = "AwaitingApproval";
  TaskStatus2["Rejected"] = "Rejected";
  return TaskStatus2;
})(TaskStatus || {});
const useTaskStore = defineStore("task", () => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;
  const tasks = ref([]);
  const intervalId = ref(null);
  const userStore = useUserStore();
  const initialData = ref([
    {
      id: 100,
      title: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1",
      version: "1.0",
      status: TaskStatus.Completed,
      approverId: 1,
      responsibleId: 1,
      dueDate: Date.now(),
      description: "\u5B8C\u6210\u4E86\u9F7F\u8F6E\u7BB1\u7684\u521D\u6B65\u8BBE\u8BA1\u548C\u65B9\u6848\u9A8C\u8BC1\uFF0C\u76F8\u5173\u4EBA\u5458\u5DF2\u5BA1\u6838\u901A\u8FC7\u3002",
      attachments: "gearbox_design_specifications_v1.pdf",
      createdAt: "2022-01-01T12:00:00",
      updatedAt: "2022-01-02T12:00:00"
    },
    {
      id: 101,
      title: "\u6D3B\u585E\u534F\u540C\u8BBE\u8BA1",
      version: "2.0",
      status: TaskStatus.InProgress,
      approverId: 2,
      responsibleId: 1,
      dueDate: Date.now() + 36e5,
      // 1小时后
      description: "\u6D3B\u585E\u7EC4\u4EF6\u7684\u8BBE\u8BA1\u8349\u6848\u5DF2\u5B8C\u6210\uFF0C\u5F85\u76F8\u5173\u8D1F\u8D23\u4EBA\u8FDB\u884C\u5BA1\u6838\u3002",
      attachments: "piston_design_draft_v2.pdf",
      createdAt: "2022-01-02T12:00:00",
      updatedAt: "2022-01-02T12:30:00"
    },
    {
      id: 102,
      title: "\u6C34\u7B94\u534F\u540C\u8BBE\u8BA1",
      version: "3.0",
      status: TaskStatus.Delayed,
      approverId: 3,
      responsibleId: 1,
      dueDate: Date.now() - 36e5,
      // 1小时前
      description: "\u6C34\u7B94\u8BBE\u8BA1\u7684\u4EA4\u4ED8\u8FDB\u5EA6\u5DF2\u5EF6\u8FDF\uFF0C\u76F8\u5173\u6280\u672F\u96BE\u70B9\u5F85\u89E3\u51B3\u3002",
      attachments: "waterfoil_design_report_v3.pdf",
      createdAt: "2022-01-03T12:00:00",
      updatedAt: "2022-01-03T12:15:00"
    }
  ]);
  function setTasks(newTasks) {
    tasks.value = newTasks;
  }
  function resetTasks() {
    tasks.value = [];
  }
  const tasksData = computed(() => tasks.value);
  const unCompletedtasksData = computed(() => tasks.value.filter((task) => task.status !== TaskStatus.Completed));
  const CompletedtasksData = computed(() => tasks.value.filter((task) => task.status === TaskStatus.Completed));
  const getTask = computed(() => (id) => tasks.value.find((task) => task.id === id));
  async function fetchAllTasks() {
    var _a;
    try {
      const response = await fetch(`${apiUrl}/api/tasks/by-responseible?responsibleId=${(_a = userStore.userData) == null ? void 0 : _a.id}`, {
        method: "GET"
      });
      if (!response.ok) throw new Error("Failed to fetch all tasks");
      const data = await response.json();
      setTasks(data);
      initialData.value.forEach((task) => {
        if (!tasks.value.some((existingTask) => existingTask.id === task.id)) {
          tasks.value.push(task);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
  function startAutoRefresh(interval = 3e3) {
    fetchAllTasks();
    intervalId.value = setInterval$1();
  }
  function stopAutoRefresh() {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
      intervalId.value = null;
      resetTasks();
    }
  }
  function getTaskById(id) {
    return tasks.value.find((task) => task.id === id);
  }
  async function createTask(taskData) {
    try {
      taskData.status = TaskStatus.AwaitingApproval;
      taskData.platformType = "Intranet";
      console.log(taskData);
      const response = await fetch(`${apiUrl}/api/tasks/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(taskData)
      });
      if (!response.ok) throw new Error("Failed to create task");
      const newTask = await response.json();
      tasks.value.push(newTask);
    } catch (err) {
      console.error(err);
    }
  }
  return {
    tasksData,
    CompletedtasksData,
    unCompletedtasksData,
    getTask,
    getTaskById,
    createTask,
    setTasks,
    resetTasks,
    startAutoRefresh,
    stopAutoRefresh
  };
}, {
  persist: true
  // 开启持久化
});

export { useTaskStore as u };
//# sourceMappingURL=index-Dnjjt4iK.mjs.map
