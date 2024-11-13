import { reactive } from 'vue';
import { bK as useAppConfig, b8 as useUserStore, bi as useRuntimeConfig, bL as navigateTo } from './server.mjs';
import { u as useTaskStore } from './index-Dnjjt4iK.mjs';
import { u as useTodoStore } from './index-iz7lIZOX.mjs';
import { u as useNotificationStore } from './index-B-w5YAGs.mjs';
import { u as useSubtaskStore } from './index-BNWTj_L3.mjs';

const useLogin = () => {
  const loginForm = reactive({
    account: "",
    password: "",
    remember: false
  });
  const appConfig = useAppConfig();
  const userStore = useUserStore();
  const taskStore = useTaskStore();
  const todoStore = useTodoStore();
  const notificationStore = useNotificationStore();
  const subtaskStore = useSubtaskStore();
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;
  const login = async () => {
    var _a, _b;
    try {
      const response = await $fetch(`${apiUrl}/api/users/login`, {
        method: "POST",
        body: {
          account: loginForm.account,
          password: loginForm.password,
          platform_type: "Supplier"
        }
      });
      if (response && response.data && response.data.user) {
        let sse;
        userStore.setUser(response.data.user);
        console.log("\u767B\u5F55\u6210\u529F", response.data.user);
        console.log("\u7528\u6237\u89D2\u8272", (_a = userStore.userData) == null ? void 0 : _a.permissions);
        userStore.startAutoRefresh();
        notificationStore.startAutoRefresh();
        taskStore.startAutoRefresh();
        todoStore.startAutoRefresh();
        subtaskStore.startAutoRefresh();
        await navigateTo(appConfig[(_b = userStore.userData) == null ? void 0 : _b.permissions]);
      }
    } catch (error) {
      console.error("\u767B\u5F55\u5931\u8D25", error);
    }
  };
  const logout = async () => {
    userStore.stopAutoRefresh();
    notificationStore.stopAutoRefresh();
    taskStore.stopAutoRefresh();
    todoStore.stopAutoRefresh();
    subtaskStore.stopAutoRefresh();
    await navigateTo(appConfig.login);
  };
  return {
    loginForm,
    login,
    logout
  };
};

export { useLogin as u };
//# sourceMappingURL=useLogin-Bh3oAuV1.mjs.map
