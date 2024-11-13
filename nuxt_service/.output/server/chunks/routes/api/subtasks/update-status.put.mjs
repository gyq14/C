import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { u as updateSubtaskStatus } from '../../../_/subtasks.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const updateStatus_put = defineEventHandler(async (event) => {
  const { id, status } = await readBody(event);
  return updateSubtaskStatus(id, status);
});

export { updateStatus_put as default };
//# sourceMappingURL=update-status.put.mjs.map
