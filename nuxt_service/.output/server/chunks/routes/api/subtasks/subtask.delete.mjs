import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { d as deleteSubtask } from '../../../_/subtasks.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const subtask_delete = defineEventHandler(async (event) => {
  const { id } = await readBody(event);
  const subtask = await deleteSubtask(id);
  return {
    message: "Subtask deleted successfully",
    data: subtask
  };
});

export { subtask_delete as default };
//# sourceMappingURL=subtask.delete.mjs.map
