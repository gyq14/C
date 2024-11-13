import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { e as updateSubtask } from '../../../_/subtasks.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const updateTask_put = defineEventHandler(async (event) => {
  const { subtaskId, status } = await readBody(event);
  const subtask = await updateSubtask(subtaskId, status);
  return subtask;
});

export { updateTask_put as default };
//# sourceMappingURL=update-task.put.mjs.map
