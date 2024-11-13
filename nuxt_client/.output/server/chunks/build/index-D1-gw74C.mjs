import { bw as defineStore, l as useRuntimeConfig } from './server.mjs';
import { ref, computed } from 'vue';

const useProjectsStore = defineStore(
  "projects",
  () => {
    const config = useRuntimeConfig();
    config.public.apiUrl;
    const projects = ref([
      {
        id: 1,
        name: "\u9F7F\u8F6E\u7BB1\u8BBE\u8BA1\u7684\u8DE8\u90E8\u95E8\u534F\u540C\u9879\u76EEA",
        version: "v1.3",
        status: "\u5F85\u5BA1\u6279",
        approver: [""],
        // 单个审批人
        responsible: [""],
        // 单个负责人
        description: "\u8BC4\u5BA1\u9F7F\u8F6E\u7BB1\u7684\u521D\u6B65\u8BBE\u8BA1\u65B9\u6848\uFF0C\u5E76\u63D0\u51FA\u6539\u8FDB\u5EFA\u8BAE\u3002\u4EFB\u52A1\u76EE\u6807\u662F\u786E\u4FDD\u8BBE\u8BA1\u65B9\u6848\u7B26\u5408\u5404\u9879\u529F\u80FD\u548C\u7ED3\u6784\u8981\u6C42\uFF0C\u80FD\u591F\u6EE1\u8DB3\u8D28\u91CF\u6807\u51C6\u548C\u751F\u4EA7\u9700\u6C42",
        attachments: ["\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1.pdf"],
        // 单个附件
        platform_type: "\u4F9B\u5E94\u5546",
        deadline: 16798776e5,
        // 示例时间戳
        time: 16772856e5
        // 示例时间戳
      },
      {
        id: 2,
        name: "\u9F7F\u8F6E\u7BB1\u8BBE\u8BA1\u7684\u8DE8\u90E8\u95E8\u534F\u540C\u9879\u76EEB",
        version: "v2.1",
        status: "\u5F85\u5BA1\u6279",
        approver: ["\u5F20\u5EFA"],
        // 多个审批人
        responsible: ["\u5218\u8273"],
        // 多个负责人
        description: "\u8BC4\u5BA1\u9F7F\u8F6E\u7BB1\u7684\u6210\u679C",
        attachments: ["\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1\u6210\u679C.docx", "\u6D4B\u8BD5\u62A5\u544A.pdf"],
        // 多个附件
        deadline: 16824696e5,
        // 示例时间戳
        time: 16773856e5
        // 示例时间戳
      },
      {
        id: 3,
        name: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1A",
        version: "v1.3",
        status: "\u8FDB\u884C\u4E2D",
        approver: ["\u5218\u7FD4\u884C"],
        responsible: ["\u5F20\u5EFA"],
        description: "\u9F7F\u8F6E\u7BB1\u8BBE\u8BA1\u7684\u8DE8\u90E8\u95E8\u534F\u540C\u9879\u76EE",
        attachments: ["\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1.pdf"],
        deadline: 16798776e5,
        time: 16772856e5
      },
      {
        id: 4,
        name: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1B",
        version: "v1.3",
        status: "\u5F85\u5BA1\u6279",
        approver: [""],
        responsible: [""],
        description: "\u9F7F\u8F6E\u7BB1\u8BBE\u8BA1\u7684\u8DE8\u90E8\u95E8\u534F\u540C\u9879\u76EE",
        attachments: ["\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1.pdf"],
        deadline: 16798776e5,
        time: 16772856e5
      },
      {
        id: 5,
        name: "\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1",
        version: "v1.4",
        status: "\u5DF2\u5B8C\u6210",
        approver: ["\u738B\u65B0"],
        responsible: ["\u5218\u7FD4\u884C"],
        description: "\u9F7F\u8F6E\u7BB1\u8BBE\u8BA1\u7684\u8DE8\u90E8\u95E8\u534F\u540C\u9879\u76EE",
        attachments: ["\u9F7F\u8F6E\u7BB1\u534F\u540C\u8BBE\u8BA1.pdf"],
        deadline: 16798776e5,
        time: 16772856e5
      }
    ]);
    const intervalId = ref(null);
    function setProjects(newProjects) {
      projects.value = newProjects;
    }
    function resetProjects() {
      projects.value = [];
    }
    function addProjects(project) {
      projects.value.push(project);
    }
    function startAutoRefresh(interval = 6e4) {
    }
    function stopAutoRefresh() {
      if (intervalId.value !== null) {
        clearInterval(intervalId.value);
        intervalId.value = null;
      }
    }
    const activeProjects = computed(() => {
      return projects.value.filter(
        (project) => project.status === "\u5F85\u5BA1\u6279" || project.status === "\u8FDB\u884C\u4E2D"
      );
    });
    const completedProjects = computed(() => {
      return projects.value.filter((project) => project.status === "\u5DF2\u5B8C\u6210");
    });
    const projectsData = computed(() => projects.value);
    const projectsDataNum = computed(() => projects.value.length);
    const getProjectbyId = (id) => {
      return projects.value.find((item) => item.id === id);
    };
    return {
      projects,
      projectsData,
      projectsDataNum,
      activeProjects,
      // 添加过滤后的项目列表
      completedProjects,
      addProjects,
      setProjects,
      resetProjects,
      startAutoRefresh,
      stopAutoRefresh,
      getProjectbyId
    };
  },
  {
    // persist: true,
  }
);

export { useProjectsStore as u };
//# sourceMappingURL=index-D1-gw74C.mjs.map
