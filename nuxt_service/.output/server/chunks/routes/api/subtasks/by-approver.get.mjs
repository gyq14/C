import { c as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import { g as getSubtasksByApproverId } from '../../../_/subtasks.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byApprover_get = defineEventHandler(async (event) => {
  const approverId = getQuery(event).approverId;
  return await getSubtasksByApproverId(approverId);
});

export { byApprover_get as default };
//# sourceMappingURL=by-approver.get.mjs.map
