import { c as defineEventHandler, r as readBody, e as createError } from '../../../_/nitro.mjs';
import { u as updateTaskStatus } from '../../../_/tasks.mjs';
import { c as createNotification } from '../../../_/notification.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const updateTask_put = defineEventHandler(async (event) => {
  const { id, status } = await readBody(event);
  const task = await updateTaskStatus(id, status);
  if (!task) {
    throw createError({ statusCode: 404, statusMessage: "Task update failed" });
  }
  const userId = task.responsibleId;
  await createNotification({
    "title": `\u4EFB\u52A1${task.title}\u72B6\u6001\u5DF2\u53D8\u66F4\u4E3A${task.status}`,
    "type": "Information",
    "status": "Unread",
    "senderId": userId,
    "receiverId": task.approverId,
    "expiry": Date.now() + 1e3 * 60 * 60 * 24 * 7
  });
  return task;
});

export { updateTask_put as default };
//# sourceMappingURL=update-task.put.mjs.map
