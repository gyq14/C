import { c as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import { b as getSubtasksByTaskId } from '../../../_/subtasks.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byTask_get = defineEventHandler(async (event) => {
  const taskId = getQuery(event).taskId;
  const tasks = await getSubtasksByTaskId(taskId);
  return tasks;
});

export { byTask_get as default };
//# sourceMappingURL=by-task.get.mjs.map
