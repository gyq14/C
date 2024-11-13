import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { d as createTask } from '../../../_/tasks.mjs';
import { c as createNotification } from '../../../_/notification.mjs';
import { c as createTodo } from '../../../_/todos.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const task = await createTask(body);
  if (!task) {
    return {
      status: "error",
      message: "\u4EFB\u52A1\u521B\u5EFA\u5931\u8D25"
    };
  }
  const userId = task.responsibleId;
  await createNotification({
    "title": `\u4EFB\u52A1${task.title}\u5DF2\u521B\u5EFA,\u5F85\u60A8\u5BA1\u6279`,
    "type": "Information",
    "status": "Unread",
    "senderId": userId,
    "receiverId": task.approverId,
    "expiry": (Date.now() + 1e3 * 60 * 60 * 24 * 7).toString()
  });
  await createTodo({
    "title": `\u65B0\u4EFB\u52A1${task.title},\u5F85\u60A8\u5BA1\u6279`,
    "type": "Task",
    "status": "Pending",
    "applicantId": userId,
    "receiverId": task.approverId,
    "dueDate": String(Date.now() + 1e3 * 60 * 60 * 24 * 7).toString()
  });
  return {
    status: "success",
    message: "\u4EFB\u52A1\u521B\u5EFA\u6210\u529F",
    data: task
  };
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
