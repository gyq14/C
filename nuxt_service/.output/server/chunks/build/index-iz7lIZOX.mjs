import { bh as defineStore, b8 as useUserStore, bi as useRuntimeConfig, bj as setInterval$1 } from './server.mjs';
import { ref, computed } from 'vue';

const useTodoStore = defineStore(
  "todo",
  () => {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const userStore = useUserStore();
    const todes = ref([]);
    const intervalId = ref(null);
    function setTodos(newTodos) {
      todes.value = newTodos;
    }
    function resetTodos() {
      todes.value = [];
    }
    async function createTodo(todo) {
      try {
        const response = await fetch(`${apiUrl}/api/notification/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(todo)
        });
        if (!response.ok) throw new Error("Failed to create todo");
        const data = await response.json();
        if (data.value) setTodos([...todes.value, data.value]);
      } catch (err) {
        console.error(err);
      }
    }
    async function changeTodoStatus(todoId, status) {
      try {
        const response = await fetch(`${apiUrl}/api/todos/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: todoId, status })
        });
        if (!response.ok) throw new Error("Failed to change status");
        const data = await response.json();
        if (data.value) {
          const todo = todes.value.find((todo2) => todo2.id === todoId);
          if (todo) todo.status = status;
        }
      } catch (err) {
        console.error(err);
      }
    }
    async function fetchAllTodos() {
      var _a;
      try {
        const response = await fetch(`${apiUrl}/api/todos/by-receiver?receiverId=${(_a = userStore.userData) == null ? void 0 : _a.id}`, {
          method: "GET"
        });
        if (!response.ok) throw new Error("Failed to fetch all tasks");
        const data = await response.json();
        console.log("====>", data);
        if (data) setTodos(data);
      } catch (err) {
        console.error(err);
      }
    }
    function startAutoRefresh(interval = 3e3) {
      fetchAllTodos();
      intervalId.value = setInterval$1();
    }
    function stopAutoRefresh() {
      if (intervalId.value !== null) {
        clearInterval(intervalId.value);
        intervalId.value = null;
        resetTodos();
      }
    }
    const todesData = computed(() => {
      return todes.value;
    });
    return {
      todesData,
      createTodo,
      changeTodoStatus,
      setTodos,
      resetTodos,
      startAutoRefresh,
      stopAutoRefresh
    };
  },
  {
    persist: true
  }
);

export { useTodoStore as u };
//# sourceMappingURL=index-iz7lIZOX.mjs.map
