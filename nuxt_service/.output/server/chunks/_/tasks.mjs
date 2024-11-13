import { p as prisma } from './prisma.mjs';

async function createTask(data) {
  return await prisma.task.create({
    data: {
      ...data,
      updatedAt: /* @__PURE__ */ new Date(),
      createdAt: /* @__PURE__ */ new Date()
    }
  });
}
async function getTasksByPlatformType(platformType) {
  return await prisma.task.findMany({
    where: { platformType },
    include: {
      approver: {
        select: {
          name: true
        }
      },
      responsible: {
        select: {
          name: true
        }
      },
      attachments: true
    }
  });
}
async function getTaskById(taskId) {
  return await prisma.task.findUnique({
    where: { id: parseInt(taskId) },
    include: {
      approver: {
        select: {
          name: true
        }
      },
      responsible: {
        select: {
          name: true
        }
      },
      attachments: true
    }
  });
}
async function updateTaskStatus(taskId, status) {
  return await prisma.task.update({
    where: { id: parseInt(taskId) },
    data: { status, updatedAt: /* @__PURE__ */ new Date() }
  });
}
async function getTasksByApproverId(approverId) {
  return await prisma.task.findMany({
    where: { approverId: parseInt(approverId) },
    intclude: {
      approver: {
        select: {
          name: true
        }
      },
      responsible: {
        select: {
          name: true
        }
      },
      attachments: true
    }
  });
}
async function getTasksByResponsibleId(responsibleId) {
  return await prisma.task.findMany({
    where: { responsibleId: parseInt(responsibleId) },
    include: {
      approver: {
        select: {
          name: true
        }
      },
      responsible: {
        select: {
          name: true
        }
      },
      attachments: true
    }
  });
}

export { getTasksByApproverId as a, getTasksByPlatformType as b, getTasksByResponsibleId as c, createTask as d, getTaskById as g, updateTaskStatus as u };
//# sourceMappingURL=tasks.mjs.map
