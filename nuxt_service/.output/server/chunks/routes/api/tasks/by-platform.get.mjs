import { c as defineEventHandler, g as getQuery, e as createError } from '../../../_/nitro.mjs';
import { b as getTasksByPlatformType } from '../../../_/tasks.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byPlatform_get = defineEventHandler(async (event) => {
  const { platform_type } = getQuery(event);
  if (!platform_type) {
    throw createError({ statusCode: 400, message: "\u5E73\u53F0\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A" });
  }
  const tasks = await getTasksByPlatformType(platform_type);
  return {
    message: "\u83B7\u53D6\u4EFB\u52A1\u6210\u529F",
    data: tasks
  };
});

export { byPlatform_get as default };
//# sourceMappingURL=by-platform.get.mjs.map
