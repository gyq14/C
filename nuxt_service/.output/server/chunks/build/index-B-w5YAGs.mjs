import { bh as defineStore, b8 as useUserStore, bi as useRuntimeConfig, bj as setInterval$1 } from './server.mjs';
import { ref, computed } from 'vue';

const useNotificationStore = defineStore(
  "notification",
  () => {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const userStore = useUserStore();
    const notifications = ref([]);
    const intervalId = ref(null);
    function setNotifications(newNotifications) {
      notifications.value = newNotifications;
    }
    function resetNotifications() {
      notifications.value = [];
    }
    async function fetchAllNotificationss() {
      var _a;
      try {
        const response = await fetch(`${apiUrl}/api/notification/by-receiver?id=${(_a = userStore.userData) == null ? void 0 : _a.id}`, {
          method: "GET"
        });
        if (!response.ok) throw new Error("Failed to fetch all tasks");
        const data = await response.json();
        if (data) setNotifications(data);
      } catch (err) {
        console.error(err);
      }
    }
    function startAutoRefresh(interval = 3e3) {
      fetchAllNotificationss();
      intervalId.value = setInterval$1();
    }
    function stopAutoRefresh() {
      if (intervalId.value !== null) {
        clearInterval(intervalId.value);
        intervalId.value = null;
        resetNotifications();
      }
    }
    async function createNotification(notification) {
      try {
        const response = await fetch(`${apiUrl}/api/notification/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(notification)
        });
        if (!response.ok) throw new Error("Failed to create notification");
        const data = await response.json();
        if (data) setNotifications([...notifications.value, data]);
      } catch (err) {
        console.error(err);
      }
    }
    async function changeNotificationStatus(notificationId, status) {
      try {
        const response = await fetch(`${apiUrl}/api/notification/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: notificationId, status })
        });
        if (!response.ok) throw new Error("Failed to change status");
        const data = await response.json();
        if (data.value) {
          const index = notifications.value.findIndex((notification) => notification.id === notificationId);
          if (index !== -1) {
            notifications.value[index].status = status;
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
    const notificationData = computed(() => {
      return notifications.value;
    });
    return {
      notificationData,
      createNotification,
      changeNotificationStatus,
      setNotifications,
      resetNotifications,
      startAutoRefresh,
      stopAutoRefresh
    };
  },
  {
    persist: true
  }
);

export { useNotificationStore as u };
//# sourceMappingURL=index-B-w5YAGs.mjs.map
