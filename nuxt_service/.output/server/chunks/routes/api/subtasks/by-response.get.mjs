import { c as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import { a as getSubtasksByResponsibleId } from '../../../_/subtasks.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byResponse_get = defineEventHandler(async (event) => {
  const responsibleId = getQuery(event).responsibleId;
  const subtasks = await getSubtasksByResponsibleId(responsibleId);
  return subtasks;
});

export { byResponse_get as default };
//# sourceMappingURL=by-response.get.mjs.map
