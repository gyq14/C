import { p as prisma } from './prisma.mjs';

async function createSubtask(subtask) {
  return prisma.subtask.create({
    data: {
      ...subtask,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
}
async function deleteSubtask(subtaskId) {
  return prisma.subtask.delete({
    where: {
      id: parseInt(subtaskId)
    }
  });
}
async function getSubtasksByTaskId(taskId) {
  return prisma.subtask.findMany({
    where: {
      taskId: parseInt(taskId)
    }
  });
}
async function getSubtasksByApproverId(approverId) {
  return prisma.subtask.findMany({
    where: {
      approverId: parseInt(approverId)
    }
  });
}
async function getSubtasksByResponsibleId(responsibleId) {
  return prisma.subtask.findMany({
    where: {
      responsibleId: parseInt(responsibleId)
    }
  });
}
async function updateSubtaskStatus(subtaskId, status) {
  return prisma.subtask.update({
    where: {
      id: parseInt(subtaskId)
    },
    data: {
      status,
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
}
async function updateSubtask(subtaskId, subtask) {
  return prisma.subtask.update({
    where: {
      id: parseInt(subtaskId)
    },
    data: {
      ...subtask,
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
}

export { getSubtasksByResponsibleId as a, getSubtasksByTaskId as b, createSubtask as c, deleteSubtask as d, updateSubtask as e, getSubtasksByApproverId as g, updateSubtaskStatus as u };
//# sourceMappingURL=subtasks.mjs.map
