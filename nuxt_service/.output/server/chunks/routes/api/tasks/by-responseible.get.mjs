import { c as defineEventHandler, g as getQuery, e as createError } from '../../../_/nitro.mjs';
import { c as getTasksByResponsibleId } from '../../../_/tasks.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byResponseible_get = defineEventHandler(async (event) => {
  const { responsibleId } = getQuery(event);
  if (!responsibleId) {
    throw createError({ statusCode: 400, message: "\u5E73\u53F0\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A" });
  }
  return await getTasksByResponsibleId(parseInt(responsibleId));
});

export { byResponseible_get as default };
//# sourceMappingURL=by-responseible.get.mjs.map
