import { c as defineEventHandler, g as getQuery, e as createError } from '../../../_/nitro.mjs';
import { a as getTasksByApproverId } from '../../../_/tasks.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byApprover_get = defineEventHandler(async (event) => {
  const { approverId } = getQuery(event);
  if (!approverId) {
    throw createError({ statusCode: 400, message: "approverId is required" });
  }
  return await getTasksByApproverId(parseInt(approverId));
});

export { byApprover_get as default };
//# sourceMappingURL=by-approver.get.mjs.map
