import { p as prisma } from './prisma.mjs';

async function createAttachment(attachment) {
  return await prisma.attachment.create({
    data: {
      ...attachment,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
}
async function deleteAttachment(id) {
  return await prisma.attachment.delete({
    where: {
      id: parseInt(id)
    }
  });
}
async function getAttachment(id) {
  return await prisma.attachment.findUnique({
    where: {
      id: parseInt(id)
    }
  });
}
async function getAttachmentsByTaskId(taskId) {
  return await prisma.attachment.findMany({
    where: {
      taskId: parseInt(taskId)
    }
  });
}

export { getAttachmentsByTaskId as a, createAttachment as c, deleteAttachment as d, getAttachment as g };
//# sourceMappingURL=attachment.mjs.map
